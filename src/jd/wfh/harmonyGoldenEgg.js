const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class HarmonyGoldenEgg extends HarmonyTemplate {
  static scriptName = '疯狂砸金蛋';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRQwA'});
}

module.exports = HarmonyGoldenEgg;
