const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Earn extends Template {
  static scriptName = 'Earn';
  static shareCodeTaskList = [];
  static times = 1;
  static commonParamFn = () => ({});

  static apiOptions = {
    signData: {
      appid: 'wh5',
      loginType: '1',
      loginWQBiz: 'interact',
    },
    formatDataFn: data => data,
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
        name: 'interactTaskIndex',
        // paramFn: () => ({'mpVersion': '3.0.6'}),
        successFn: async (data, api) => {
          // writeFileJSON(data, 'interactTaskIndex.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          // 助力
          for (const itemId of self.shareCodeTaskList) {
            await api.doFormBody('interactIndex', {itemId, taskId: 3}).then(data => {
              const helpDesc = _.property('data.helpRes.helpResDesc')(data);
              helpDesc && self.log(helpDesc);
            });
          }

          const taskList = _.property('data.taskDetailResList')(data) || [];
          for (let {
            status,
            taskId,
            maxTimes,
            times,
            waitDuration,
          } of taskList) {
            if (status === 2 || [3/* 每日分享 */].includes(taskId)) continue;

            if (taskId === 1 /*签到有礼*/) {
              times = 0;
              maxTimes = 1;
            }

            let list = [];
            for (let i = times; i < maxTimes; i++) {
              list.push({taskId});
            }

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'doInteractTask',
        paramFn: o => o,
      },
      doRedeem: {
        name: 'interactTaskIndex',
        successFn: async data => {
          const helpMainResListLength = (_.property('data.helpMainResList')(data) || []).length;
          const msgs = [
            `已助力人数为: ${helpMainResListLength}`,
            `cash: ${data.data.cashExpected}`,
          ];
          self.log(msgs.join(', '));
        },
      },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    if (shareCodes) {
      this.shareCodeTaskList = shareCodes;
    }
  }
}

module.exports = Earn;
