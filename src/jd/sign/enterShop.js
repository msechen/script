const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class EnterShop extends Template {
  static scriptName = 'EnterShop';
  static scriptNameDesc = '进店领豆';
  static times = 1;

  static apiOptions = {
    signData: {
      appid: 'ld',
    },
  };

  static isSuccess(data) {
    return _.property('code')(data) === '0';
  };

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'queryTaskIndex',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'queryTaskIndex.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.taskList')(data) || [];
          for (let {
            taskStatus: status,
            taskId,
            maxTimes,
            times,
            waitDuration,
          } of taskList) {
            if (status === 3 || [].includes(taskId)) continue;

            let list = [{taskId}];

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'takeTask',
        paramFn: o => o,
        async successFn(data, api) {
          // TODO 格式化
          self.log(JSON.stringify(data));
        },
      },
    };
  };
}

module.exports = EnterShop;
