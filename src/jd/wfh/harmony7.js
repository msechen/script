const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony7 extends HarmonyTemplate {
  static scriptNameDesc = '年终狂欢礼';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRXwA'});
}

module.exports = Harmony7;
