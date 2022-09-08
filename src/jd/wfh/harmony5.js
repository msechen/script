const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony5 extends HarmonyTemplate {
  static scriptNameDesc = '品牌闪购-惊喜盒子';
  static shareCodeTaskList = [];
  static shareTaskId = -1;/*没有助力任务*/
  static skipTaskIds = [];
  static commonParamFn = () => ({appId: '1ElZXwKuP'});
}

module.exports = Harmony5;
