const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony5 extends HarmonyTemplate {
  static scriptNameDesc = '东东电器-年货大街';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUxA'});
}

module.exports = Harmony5;
