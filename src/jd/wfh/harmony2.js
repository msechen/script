const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '东东焕新家';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRSyw'});
  static skipTaskIds = [7/*开会员*/];
}

module.exports = Harmony2;
