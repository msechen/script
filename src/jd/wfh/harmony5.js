const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony5 extends HarmonyTemplate {
  static scriptNameDesc = '品牌闪购-惊喜盒子';
  static shareCodeTaskList = [];
  static shareTaskId = 3;
  static skipTaskIds = [];
  static commonParamFn = () => ({appId: '1EFRXxg'});
}

module.exports = Harmony5;
