const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = '荣耀换新季';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRYxw'});
  static skipTaskIds = [8/*开会员*/, 12/*购买商品*/];
}

module.exports = Harmony3;
