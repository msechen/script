const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = 'lol冠军';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRYxA'});
  static skipTaskIds = [3/*开会员*/];
}

module.exports = Harmony3;
