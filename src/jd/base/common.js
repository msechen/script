const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Common extends Template {
  static scriptName = 'Common';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    signData: {},
  };

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static async doMain(api) {
    await api.delShopFavByTimes(-1);
    await api.delCommFavByTimes(-1);
  }
}

module.exports = Common;
