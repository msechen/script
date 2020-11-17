const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class HarmonyBlindBox extends HarmonyTemplate {
  static scriptName = '闪购盲盒';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRRxA'});
}

module.exports = HarmonyBlindBox;
