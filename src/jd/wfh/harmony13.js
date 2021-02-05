const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony13 extends HarmonyTemplate {
  static scriptNameDesc = '新年抽好礼';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRVxA'});
}

module.exports = Harmony13;
