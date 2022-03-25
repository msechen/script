/**
 * @description 将cookie的 wskey(有效期未知, 需从app捕获) 转换为 pt_key(有效期1天)
 *
 */

const Template = require('../base/template');

const {sleep, readFileJSON, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const {uploadProductEnvToAction} = require('../../lib/env');
const _ = require('lodash');

class ChangeCK extends Template {
  static scriptName = 'ChangeCK';
  static scriptNameDesc = '转换cookie';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static activityEndTime = '';
  static times = 1;
  static needChangeCK = false;

  static apiOptions = {
    options: {},
  };

  static async doMain(api, shareCodes) {
    const self = this;

    await self.changeCK(api, true);
  }

  static async afterAllDone() {
    uploadProductEnvToAction();
  }
}

singleRun(ChangeCK).then();

module.exports = ChangeCK;
