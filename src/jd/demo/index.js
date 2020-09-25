const Base = require('../base');

const {sleep} = require('../../lib/common');

class Demo extends Base {
  static scriptName = 'Demo';
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
      },
    },
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: ['apiName'],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    this.log('1');
    await sleep(2);
    this.log('2');
    await sleep(2);
    this.log('3');
    api.apiName();
  }
}

module.exports = Demo;
