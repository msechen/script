const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = '众筹许愿池';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1E1NXxq0'});
  static shareTaskId = 4;
  static skipTaskIds = [];
}

module.exports = Harmony3;
