const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = '新年上上签';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUwg'});
  static skipTaskIds = [8/*开会员*/];
}

module.exports = Harmony3;
