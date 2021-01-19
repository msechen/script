const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '电脑数码年货节';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRVyg'});
}

module.exports = Harmony2;
