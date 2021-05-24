const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

let activityNotStart = false;

class Zoo extends Template {
  static scriptName = 'Zoo';
  static scriptNameDesc = '动物联盟';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;

  // 自定义前缀
  static functionIdPrefix = 'zoo';

  static doFormBody(api, functionId, body) {
    return api.doFormBody(`${this.functionIdPrefix}_${functionId}`, body);
  }

  static async getSS(api) {
    const {
      activityInfo: {activityStartTime, activityEndTime, nowTime},
      homeMainInfo: {secretp},
    } = await this.doFormBody(api, 'getHomeData').then(data => _.property('data.result')(data));
    if (nowTime < activityStartTime || nowTime > activityEndTime) {
      return activityNotStart = true;
    }
    return {secretp};
  }

  static async doMain(api, shareCodes) {
    const self = this;

    self.initShareCodeTaskList(shareCodes || []);

    const ss = await self.getSS(api);
    if (activityNotStart) return;

    await handleDoTask();
    // 小程序
    await handleDoTask({appSign: 2}, 1);
    if (self.isLastLoop()) {
      await handleRaise();

      await self.doFormBody(api, 'getHomeData').then(data => {
        api.log(`当前获取到的瓜分票数: ${_.property('data.result.homeMainInfo.raiseInfo.redNum')(data)}`);
      });
    }

    async function handleDoTask(body, times = 0) {
      if (times >= 2) return;
      const {
        inviteId,
        taskVos,
      } = await self.doFormBody(api, 'getTaskDetail', body).then(data => _.property('data.result')(data) || {});

      if (times === 0) {
        self.updateShareCodeFn(inviteId);
        for (const inviteId of self.getShareCodeFn()) {
          await self.doFormBody(api, 'collectScore', {inviteId, ss}).then(data => {
            if (!self.isSuccess(data)) return api.log(_.property('data.bizMsg')(data));
            const {guestNickName} = _.property('data.result')(data);
            api.log(`助力 ${guestNickName} 成功`);
          });
        }
      }

      for (const task of taskVos) {
        let {taskId, status, times, maxTimes, waitDuration} = task;
        if ([2/*邀请好友助力*/, 14/*去开通甄选品牌会员*/].includes(taskId) || status === 2) continue;
        let list = getList(task);
        if (_.isEmpty(list)) {
          const feedTask = await self.doFormBody(api, 'getFeedDetail', {taskId}).then(data => _.property('data.result.addProductVos[0]')(data));
          list = getList(feedTask);
        }
        list = list.filter(o => o['status'] === 1);
        for (const {taskToken} of list) {
          if (times === maxTimes) break;
          await collectScore({taskId, taskToken}, waitDuration);
          times++;
        }
      }

      return handleDoTask(body, ++times);

      function getList(object) {
        object = object || {};
        let taskList = [];
        for (const key in object) {
          if (key.match(/Vo(s)?$/) && key !== 'scoreRuleVos') {
            taskList = [].concat(object[key]);
            break;
          }
        }
        return taskList;
      }
    }

    async function collectScore(data, waitDuration = 0) {
      const actionType = waitDuration ? '1' : '0';
      const body = {...data, actionType, ss};
      await collect();
      if (!waitDuration) return;
      await sleep(waitDuration);
      body.actionType = '0';
      await collect();

      function collect() {
        return self.doFormBody(api, 'collectScore', body);
      }
    }

    async function handleRaise() {
      await self.doFormBody(api, 'raise').then(async data => {
        self.isSuccess(data) && await handleRaise();
      });
    }
  }

  static async doCron(api) {
    const self = this;

    const ss = await self.getSS(api);
    if (activityNotStart) return;
    await self.doFormBody(api, 'collectProduceScore', {ss}).then(data => {
      api.log(`定时获取到的金币为 ${_.property('data.result.produceScore')(data)}`);
    });
  }
}

singleRun(Zoo).then();

module.exports = Zoo;
