const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = '潮玩制躁团';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFVRwA'});
  static skipTaskIds = [8/*开会员*/];
}

module.exports = Harmony3;
