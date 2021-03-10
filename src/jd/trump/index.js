const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Trump extends Template {
  static scriptName = 'Trump';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    signData: {
      appid: 'content_ecology',
    },
  };

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'queryTrumpTask',
        paramFn: self.commonParamFn,
        successFn: async (data) => {
          // writeFileJSON(data, 'queryTrumpTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.concat(_.property('result.taskList')(data) || [], data.result.signTask);
          for (let {
            taskId,
            maxTimes,
            times,
            waitDuration,
            taskItemInfo: {
              itemId,
              status,
            }
          } of taskList) {
            if (status === 1 || [].includes(taskId)) continue;

            let list = [{taskId, itemId}];

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'doTrumpTask',
        paramFn: o => o,
        async successFn(data) {
          if (!self.isSuccess(data)) return;
          const {lotteryMsg, lotteryScore} = data.result;
          self.log(lotteryScore ? `获取到豆豆: ${lotteryScore}` : lotteryMsg);
        },
      },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }
}

module.exports = Trump;
