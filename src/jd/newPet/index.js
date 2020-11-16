const Base = require('../base');

const {sleep} = require('../../lib/common');

class Pet extends Base {
  static scriptName = 'Pet';
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
      },
      qs: {
        appid: 'wh5',
      },
    },
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'slaveHelp', /* 助力 */
      'getSingleShopReward', /* 浏览店铺 */
      'getThreeMealReward', /* 三餐签到 */
    ],
  };

  static isSuccess(data) {
    return this._.property('resultCode')(data) === '0';
  }

  static async doMain(api, shareCodes) {
    for (const shareCode of shareCodes) {
      await api.slaveHelp({shareCode}).then(data => {
        const {resultCode, result} = data;
        if (resultCode === '0') {
          this.log(`给 ${result.masterNickName || 'unknown'} 助力成功`);
        } else {
          this.log(data.message);
        }
      });
    }

    await api.getSingleShopReward({version: 1, index: 2, type: 1}).then(async data => {
      if (!this.isSuccess(data)) return;
      await sleep(2);
      await api.getSingleShopReward({version: 1, index: 2, type: 2});
    });
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    await api.getThreeMealReward().then(data => {
      self.log(`领取到狗粮: ${data.result.threeMealReward}`);
    });
  }
}

module.exports = Pet;
