const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '荣耀焕新季';
  static shareCodeTaskList = [];
  static shareTaskId = -1;
  static commonParamFn = () => ({appId: '1E1NYwqc'});
}

module.exports = Harmony1;
