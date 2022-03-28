const Template = require('../../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');

let interactionId = 0;

class RubikSCube extends Template {
  static scriptName = 'RubikSCube';
  static scriptNameDesc = '集魔方抽豆';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static times = 1;

  static apiOptions = {
    options: {
      form: {
        body: {'sign': 3},
        appid: 'content_ecology',
        eufv: false,
      },
    },
  };

  static isSuccess(data) {
    return _.property('result.code')(data) === 0;
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getInteractionInfo',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'getInteractionInfo.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const {taskList, taskPoolId} = _.property('result.taskPoolInfo')(data);
          interactionId = data.result.interactionId;
          for (let {
            taskStatus,
            taskId,
            groupId,
            taskGroupList,
            maxTimes,
            times,
            waitDuration,
          } of taskList) {
            if (taskStatus === 1 || [].includes(taskId)) continue;
            if (_.isEmpty(taskGroupList)) {
              await api.doFormBody('executeNewInteractionTask', {
                interactionId,
                taskPoolId,
                taskType: taskId,
                advertId: groupId,
                sku: '100021400874',
              }).then(logLottery);
              continue;
            }
            for (const advertId of taskGroupList) {
              const {code, isLottery, lotteryInfoList} = await api.doFormBody('executeNewInteractionTask', {
                interactionId,
                taskPoolId,
                taskType: taskId,
                advertId,
              }).then(data => _.property('result')(data));
              if (isLottery) {
                logLottery(lotteryInfoList);
                break;
              }
            }
          }

          await api.doFormBody('getNewFinalLotteryInfo', {interactionId}).then(logLottery);

          return result;

          function logLottery(lotteryInfoList) {
            lotteryInfoList = lotteryInfoList || _.property('result.lotteryInfoList')(lotteryInfoList);
            lotteryInfoList && api.log(`抽中 ${lotteryInfoList['name']} ${lotteryInfoList['quantity']}`);
          }
        },
      },
    };
  }
}

singleRun(RubikSCube).then();

module.exports = RubikSCube;
