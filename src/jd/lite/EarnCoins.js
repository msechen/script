const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getMoment} = require('../../lib/moment');

const {encrypt, clientHandleService} = require('./api');

class LiteEarnCoins extends Template {
  static scriptName = 'LiteEarnCoins';
  static scriptNameDesc = '赚金币';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInSpeedApp = true;
  static times = 1;
  static concurrent = true;

  static isSuccess(data) {
    return data['code'] === 0;
  }

  static async doMain(api) {
    const self = this;
    const doForm = (method, data = {}, others, t) => {
      const {functionId, form} = clientHandleService(method, _.assign({'channel': '1'}, data), others, t);
      return api.doForm(functionId, form);
    };
    const doFromWithClientTime = (method, data = {}, others) => {
      const clientTime = getMoment().valueOf();
      return doForm(method, _.assign({clientTime: `${clientTime}`}, data), others, clientTime);
    };

    await handleDoTask();
    await getBubbles();
    await log();

    async function handleDoTask() {
      const taskList = await doForm('newTaskCenterPage').then(data => data.data || []);
      for (const {taskName, taskType: activeType, taskInfo: {status}} of taskList) {
        if (status === 1/* || ['邀好友赚金币'].includes(taskName)*/) continue;
        if ([1, 2, 3].includes(activeType)) {
          await doTask(activeType);
        } else {
          await doFromWithClientTime('marketTaskRewardPayment', {activeType});
        }
      }

      async function doTask(activeType) {
        let activeId = '';
        if (activeType === 3) {
        } else {
          activeId = await doForm('queryNextTask', {activeType}).then(data => _.property('data.nextResource')(data));
          if (!activeId) return;
        }
        const commonData = {activeId, activeType};
        // await doForm('checkTaskResource', commonData);
        let {
          code,
          data: {
            uuid,
            taskInfo,
          },
          message,
        } = await doFromWithClientTime('enterAndLeave', _.assign({messageType: '1'}, commonData));
        if (code !== 0) {
          if (message === '无此进入uuid信息') {
            commonData.activeId += '&__in_task_view__=jdLiteiOS';
          } else if (message === '当前任务已完成') {
            commonData.activeType = `${activeType}`;
          }
          uuid = await doFromWithClientTime('enterAndLeave', _.assign({messageType: '1'}, commonData)).then(_.property('data.uuid'));
        }
        const videoTimeLength = taskInfo['videoBrowsing'] || '';
        await sleep(videoTimeLength || 10);
        const nextData = _.assign({messageType: '2', uuid, videoTimeLength}, commonData);
        await doFromWithClientTime('enterAndLeave', nextData).then(data => {
          if (data.message === '当前任务已完成') {
            nextData.activeType = `${activeType}`;
          }
          return doFromWithClientTime('enterAndLeave', nextData);
        });
        let rewardPaymentData = await doFromWithClientTime('rewardPayment', nextData);
        if ([901/*当前任务已完成*/, 906/*奖励非法*/].includes(rewardPaymentData.code) && uuid) {
          await sleep();
          rewardPaymentData = await doFromWithClientTime('rewardPayment', nextData);
        } else if (!self.isSuccess(rewardPaymentData)) {
          return;
        }
        const reward = _.get(rewardPaymentData, 'data.reward');
        reward && api.log(`获得金币 ${reward}`);
        const {
          isTaskLimit,
          taskCompletionLimit,
          taskCompletionProgress,
        } = _.get(rewardPaymentData, 'data.taskInfo', {});
        if (isTaskLimit === 1 || !taskCompletionLimit) return;
        if (taskCompletionProgress < taskCompletionLimit) return doTask(activeType);
      }
    }

    async function getBubbles() {
      const {taskBubbles} = await doForm('queryJoyPage').then(data => data.data) || {};
      if (!taskBubbles) return;
      for (const {id, activeType} of taskBubbles) {
        await doFromWithClientTime('joyTaskReward', {id, activeType});
      }
    }

    function log() {
      return doForm('queryJoyPage').then(data => {
        if (!self.isSuccess(data)) return;
        const {balanceVO} = data.data;
        const {goldBalance, estimatedAmount} = balanceVO;
        api.log(`红包(可兑换): ${estimatedAmount}, 金币: ${goldBalance}`);
      });
    }
  }
}

singleRun(LiteEarnCoins).then();

module.exports = LiteEarnCoins;
