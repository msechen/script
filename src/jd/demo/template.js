const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class DemoTemplate extends Template {
  static scriptName = 'DemoTemplate';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getTaskList',
        paramFn: self.commonParamFn,
        successFn: async (data) => {
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
        successFn: data => {
          if (!self.isSuccess(data)) return false;
        },
        repeat: true,
      },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }
}

module.exports = DemoTemplate;
