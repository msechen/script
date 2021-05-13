const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

// 活动主入口
const indexURL = 'https://h5.m.jd.com/babelDiy/Zeus/4WzXZPRyzBdL7EjeBJrCCte985Df/index.html';

class Planet extends Template {
  static scriptName = 'Planet';
  static scriptNameDesc = '探秘无限星空';
  static shareCodeTaskList = [];
  static commonParamFn = () => [void 0, {method: 'GET'}];
  static needOriginH5 = true;
  static times = 2;

  static apiOptions = {
    options: {
      uri: 'https://jdjoy.jd.com/module/upgrade',
      qs: {
        code: '31f63ed2f11243ab80e174a858409fc9',
        h5: 'true',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return data['success'];
  }

  static apiNamesFn() {
    const self = this;

    const getActivityPage = {
      name: 'getActivityPage',
      paramFn: self.commonParamFn,
      async successFn(data, api) {
        if (!self.isSuccess(data)) return false;
        const {filledPoints, upgradeNeeded, holdPoints, userLevel: {level, levelName}} = data.data;
        api.log(`当前等级星球为:${level} ${levelName}`);
        const allPoints = filledPoints + holdPoints;
        if (allPoints < upgradeNeeded) {
          return false;
        }
        return api.doGetPath('upgradeLevel').then(data => {
          if (!self.isSuccess(data)) return false;
          const {rewardNum, levelName} = _.property('data')(data) || {};
          const msg = [];
          levelName && msg.push(`当前等级为: ${levelName}`);
          rewardNum && msg.push(`获得豆豆: ${rewardNum}`);
          !_.isEmpty(msg) && api.log(msg.join(', '));
        });
      },
      repeat: true,
    };
    return {
      beforeGetTaskList: getActivityPage,
      // 获取任务列表
      getTaskList: {
        name: 'getMyTask',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'getMyTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          // 助力
          const pin = _.property('data.pin')(data);
          self.updateShareCodeFn(pin);
          const shareList = self.getShareCodeFn();
          for (const friendPin of shareList) {
            await api.doPath('help', void 0, {qs: {friendPin}}).then(data => {
              if (!self.isSuccess(data)) return;
              api.log('助力成功!');
            });
          }

          const taskList = _.property('data.myTasks')(data) || [];
          const hasSign = _.property('data.hasSign')(data);
          if (!hasSign) {
            result.push({list: [{taskType: '1', taskId: '0'}], option: {maxTimes: 1}});
          }
          for (let {
            hasFinish,
            taskId,
            taskType,
            itemCount: maxTimes,
            finishCount: times,
            viewTime: waitDuration,
            taskItem,
          } of taskList) {
            if (hasFinish || [8/*邀请助力*/].includes(taskId)) continue;

            let list = [];
            const {itemId} = taskItem || {};
            for (let i = times; i < maxTimes; i++) {
              const item = {taskType, taskId};
              itemId && (item.itemId = itemId);
              list.push(item);
            }

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'doTask',
        paramFn: qs => [void 0, {qs}],
      },
      afterGetTaskList: {
        name: 'getDrawPage',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          const {hasDraw, canDraw} = data.data;
          if (hasDraw || !canDraw) return;
          await api.doGetPath('draw').then(data => {
            const {rewardName} = _.property('data')(data) || {};
            const msg = [];
            rewardName && msg.push(`抽奖获得: ${rewardName}`);
            !_.isEmpty(msg) && api.log(msg.join(', '));
          });
        },
      },
      doRedeem: getActivityPage,
    };
  }
}

singleRun(Planet).then();

module.exports = Planet;
