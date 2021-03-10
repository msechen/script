const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');

class HarmonyNewShop extends HarmonyTemplate {
  static scriptName = '新店福利';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRTyg'});
}

module.exports = HarmonyNewShop;
