const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony4 extends HarmonyTemplate {
  static scriptNameDesc = '秀礼迎新年';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRVxg'});
}

module.exports = Harmony4;
