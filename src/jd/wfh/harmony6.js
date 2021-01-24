const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony6 extends HarmonyTemplate {
  static scriptNameDesc = '福音大转盘';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRVyg'});
}

module.exports = Harmony6;
