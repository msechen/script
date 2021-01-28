const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '味爱狂享';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUyw'});
}

module.exports = Harmony2;
