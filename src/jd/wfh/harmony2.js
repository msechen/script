const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '新店狂欢日';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUxw'});
}

module.exports = Harmony2;
