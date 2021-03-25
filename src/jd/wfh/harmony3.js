const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = '瓜分京豆';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRZxg'});
  static skipTaskIds = [9/*开会员*/];
}

module.exports = Harmony3;
