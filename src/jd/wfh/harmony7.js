const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony7 extends HarmonyTemplate {
  static scriptNameDesc = '星意送好礼';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRVyw'});
}

module.exports = Harmony7;
