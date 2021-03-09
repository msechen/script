const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class DemoTemplate extends Template {
  static scriptName = 'DemoTemplate';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getTaskList',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'getTaskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.result.taskVos')(data) || [];
          for (let {
            status,
            taskId,
            maxTimes,
            times,
            waitDuration,
          } of taskList) {
            if (status === 2 || [].includes(taskId)) continue;

            let list = [];

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'doTask',
        paramFn: o => o,
      },
      doRedeem: {
        name: 'doRedeem',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
        },
        repeat: true,
      },
    };
  };
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  DemoTemplate.start(getCookieData()).then();
}

module.exports = DemoTemplate;
