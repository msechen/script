const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class HarmonyNewShop extends HarmonyTemplate {
  static scriptName = '新店福利';
  static commonParamFn = () => ({appId: '1EFRQxA'});
}

module.exports = HarmonyNewShop;
