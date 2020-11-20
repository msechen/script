const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

const {cash} = require('../../../charles/api');

function findFormData(allBody, allForm) {
  return allForm.find(form => {
    return allBody.find(body => _.isEqual(body, JSON.parse(form.body)));
  });
}

class Cash extends Template {
  static scriptName = 'Cash';
  static shareCodeTaskList = [];
  static repeatDoTask = true;
  static times = 2;

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'cash_homePage',
        paramFn: () => [{}, cash.cash_homePage[0]],
        successFn: async (data) => {
          // writeFileJSON(data, 'cash_homePage.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          // 先签到
          if (data.data.result.signedStatus === 2) {
            const signForm = cash.cash_sign.find(form => JSON.parse(form.body).inviteCode === self.shareCodeTaskList[0]) || cash.cash_sign[0];
            await self._api.doForm('cash_sign', signForm);
            return;
          }

          const taskList = _.property('data.result.taskInfos')(data) || [];
          for (let {
            finishFlag: status,
            name,
            times: maxTimes,
            doTimes: times,
            duration: waitDuration,
            desc,
            doTaskDesc,
            type,
          } of taskList) {
            if (status === 1 || ['京喜双签', '金融双签', '邀好友 领5元'].includes(name)) continue;

            let list = [];

            const targetForm = findFormData([{taskInfo: desc || doTaskDesc, type}], [].concat(cash.cash_doTask));
            targetForm && list.push(targetForm);

            // 每种类型的任务只做一个
            !_.isEmpty(list) && result.push({list});
          }

          return result;
        },
      },
      doTask: {
        name: 'cash_doTask',
        paramFn: form => {
          return [{}, form];
        },
      },
      doRedeem: {
        name: 'cash_homePage',
        paramFn: () => [{}, cash.cash_homePage[0]],
        successFn: async data => {
          self.log(`目前总额为: ${data.data.result.totalMoney}`);
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

module.exports = Cash;
