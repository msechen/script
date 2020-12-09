const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class SplitHongbao extends HarmonyTemplate {
  static scriptName = '开红包';
  static scriptNameDesc = '金榜年终奖';
  static shareCodeTaskList = [];
  static redeemWithTaskId = true;
  static apiNames = {
    getTaskList: 'splitHongbao_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'splitHongbao_getLotteryResult',
  };
  static commonParamFn = () => ({appId: '1EFRTwA'});

  static async afterDoWaitTask(data, api) {
    const self = this;
    const _ = self._;

    const {maxTimes, times, taskId} = _.property('data.result')(data);
    if (!maxTimes) return;
    if (maxTimes === times) {
      return api.doFormBody(self.getApiNames().doRedeem, _.assign({taskId}, self.commonParamFn()))
      .then(self.logAfterRedeem.bind(self));
    }
  }
}

module.exports = SplitHongbao;
