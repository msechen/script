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
    apiNames: ['slaveHelp'],
  };

  static async doMain(api, shareCodes) {
    for (const shareCode of shareCodes) {
      await api.slaveHelp({shareCode}).then(data => {
        const {resultCode, result} = data;
        if (resultCode === '0') {
          this.log(`给 ${result.masterNickName || 'unknown'} 助力成功`)
        } else {
          this.log(data.message);
        }
      });
    }
  }
}

module.exports = Pet;
