const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony8 extends HarmonyTemplate {
  static scriptNameDesc = '健康年货节';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUww'});
  static skipTaskIds = [8/*开会员*/, 14, 15, 16];
}

module.exports = Harmony8;
