const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '海底之旅';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRYwA'});
}

module.exports = Harmony1;
