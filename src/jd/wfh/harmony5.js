const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony5 extends HarmonyTemplate {
  static scriptNameDesc = '好物好生活';
  static shareCodeTaskList = [];
  static skipTaskIds = [5/*开会员*//*, 4/!*加购*!/*/];
  static commonParamFn = () => ({appId: '1FV1ZwKY'});
}

module.exports = Harmony5;
