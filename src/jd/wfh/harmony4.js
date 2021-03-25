const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony4 extends HarmonyTemplate {
  static scriptNameDesc = '抽奖领豆';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRZxw'});
  // static skipTaskIds = [7/*加购*/];
}

module.exports = Harmony4;
