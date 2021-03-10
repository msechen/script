const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');

class Demo extends Base {
  static scriptName = 'Demo';
  static apiOptions = {
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'apiName',
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    await api.apiName().then(async data => {
      // writeFileJSON(data, 'apiName.json', __dirname);

      if (!self.isSuccess(data)) return;
    });
  }
}

module.exports = Demo;
