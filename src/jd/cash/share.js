const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class CashShare extends Base {
  static scriptName = 'CashShare';
  static apiOptions = {
    signData: {
      appid: 'CashReward',
    },
    options: {
      headers: {
        origin: 'https://h5.m.jd.com',
      },
    },
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'cash_share_home',
      'cash_mob_reward',
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    await api.cash_share_home().then(async data => {
      // writeFileJSON(data, 'cash_share_home.json', __dirname);

      const {assistedRecord, toTakeRewardList, shareNodeTips} = _.property('data.result.shareFloor')(data) || {};
      const currentNodeTimes = shareNodeTips.split('/').map(v => +v.match(/\d/g, '')[0]).reverse().reduce((accumulator, currentValue) => accumulator - currentValue);
      self.log(`当前还差: ${currentNodeTimes}, 当前已助力次数为: ${assistedRecord.length}`);

      if (!_.isEmpty(toTakeRewardList)) {
        await api.cash_mob_reward({source: _.last(toTakeRewardList)}).then(data => {
          if (!self.isSuccess(data)) return;
          const {shareRewardAmount, shareRewardTip} = data.data.result;
          self.log(`${shareRewardTip}: ${shareRewardAmount}`);
        });
      }
    });
  }
}

module.exports = CashShare;
