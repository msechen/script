const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony10 extends HarmonyTemplate {
  static scriptNameDesc = '茶香盒你';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUwQ'});
}

module.exports = Harmony10;
