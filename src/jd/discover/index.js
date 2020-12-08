const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

const {discover} = require('../../../charles/api');

const targetTaskId = '3';

class Discover extends Template {
  static scriptName = '发现-看一看';
  static times = 1;

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'discTaskList',
        paramFn: () => [{}, discover.discTaskList[0]],
        successFn: async (data) => {
          // writeFileJSON(data, 'discTaskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          for (const {taskId, times, maxTimes} of _.property('data.discTasks')(data) || []) {
            // TODO signTask
            // taskId === '1' 签到的还未完成
            if (taskId === targetTaskId) {
              const filterForms = o => JSON.parse(o.body).taskId === targetTaskId;
              discover.discAcceptTask = discover.discAcceptTask.filter(filterForms);
              discover.discDoTask = discover.discDoTask.filter(filterForms);
              let list = [];
              for (let index = times; index < maxTimes; index++) {
                list.push({index});
              }
              result.push({list, option: {times, maxTimes, waitDuration: 15}});
            }
          }

          return result;
        },
      },
      doTask: {
        name: 'discAcceptTask',
        paramFn: ({index}) => [{}, discover.discAcceptTask[index]],
      },
      doWaitTask: {
        name: 'discDoTask',
        paramFn: ({index}) => [{}, discover.discDoTask[index]],
      },
      doRedeem: {
        name: 'discReceiveTaskAward',
        paramFn: () => [{}, discover.discReceiveTaskAward.find(o => JSON.parse(o.body).taskId === targetTaskId)],
        successFn: data => {
          if (!self.isSuccess(data)) return false;
          self.log(data.message);
        },
        repeat: false,
      },
    };
  };
}

module.exports = Discover;
