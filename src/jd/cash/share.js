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

      const toTakeRewardList = _.property('data.result.shareFloor.toTakeRewardList')(data);
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
