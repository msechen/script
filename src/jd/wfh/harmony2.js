const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '送你钞能力';
  static shareCodeTaskList = [];
  static shareTaskId = 8;
  static skipTaskIds = [1/*开会员*/, 3/*开通小鹏会员*//*, 4/!*加购*!/*/];
  static commonParamFn = () => ({appId: '1FFRWxaY'});
}

module.exports = Harmony2;
