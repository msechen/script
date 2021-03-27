const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony5 extends HarmonyTemplate {
  static scriptNameDesc = '拆盲盒';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRZxQ'});
  static skipTaskIds = [8/*会员*/, 9/*开卡*/, 14/*答题*/];
}

module.exports = Harmony5;
