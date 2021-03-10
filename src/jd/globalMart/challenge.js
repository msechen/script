const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

class GlobalChallenge extends Template {
  static scriptName = 'GlobalChallenge';
  static scriptNameDesc = '环球挑战赛';
  static shareCodeTaskList = [];
  static times = 2;
  static needOriginH5 = true;
  static commonParamFn = () => ({});
  static apiOptions = {
    signData: {
      appid: 'global_mart',
      body: {'activityCode': 'visa-card-001'},
    },
  };

  static isSuccess(data) {
    return _.property('result.code')(data) === '0';
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'myTask',
        async successFn(data, api) {
          // writeFileJSON(data, 'myTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('result.data.commonTask')(data) || [];
          for (let {
            canExecute,
            taskId,
            itemId,
            viewSeconds,
            totalTimes: maxTimes,
            executedTimes: times,
            jingCommand,
            waitDuration,
          } of taskList) {
            if (!canExecute || [].includes(taskId)) continue;

            let list = [];
            const option = {maxTimes, times, waitDuration};

            for (let i = times; i < maxTimes; i++) {
              list.push({taskId, itemId, viewSeconds});
            }
            if (taskId === '3'/*每日邀请好友*/) {
              const inviterPin = new URL(jingCommand.url).searchParams.get('masterPin');
              self.updateShareCodeFn(inviterPin);
              list = self.getShareCodeFn();
              if (!list.length) continue;
              _.assign(option, {
                maxTimes: list.length,
                times: 0,
                firstFn(inviterPin) {
                  return api.doFormBody('inviteHelp', {
                    inviterPin,
                    'taskId': '3',
                    'pageType': 'doHelp',
                  }).then(data => {
                    self.log(data.result.message);
                  });
                },
              });
            }

            result.push({list, option});
          }

          return result;
        },
      },
      doTask: {
        name: 'taskRun',
        paramFn: o => o,
      },
      afterGetTaskList: {
        name: 'mainInfo',
        async successFn(data, api) {
          // writeFileJSON(data, 'mainInfo.json', __dirname);

          if (!self.isSuccess(data)) return;

          const {activityCalendar, activityStations, mileageAmount} = _.property('result.data')(data);
          for (const {id: stationId, rewards} of activityStations.filter(o => o.unlock)) {
            const rewardIds = rewards.filter(({unlock, received}) => unlock && !received).map(o => o.id);
            if (!rewardIds.length) continue;
            await api.doFormBody('receiveRewardVisa', {stationId, rewardIds});
          }
          self.log(`当前得分: ${mileageAmount}, 活动时间：第${activityCalendar.currDays}/${activityCalendar.totalDays}天`);
        },
      },
    };
  };
}

module.exports = GlobalChallenge;
