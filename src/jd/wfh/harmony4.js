const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony4 extends HarmonyTemplate {
  static scriptNameDesc = '有1111点新动';
  static shareCodeTaskList = [];
  static shareTaskId = 2;
  static skipTaskIds = [6/*开会员*//*, 4/!*加购*!/*/];
  static commonParamFn = () => ({appId: '1FFVQyqw'});
}

module.exports = Harmony4;
