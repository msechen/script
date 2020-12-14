const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class HarmonyApple extends HarmonyTemplate {
  static scriptNameDesc = 'Apple自营旗舰店';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRTxw'});
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = HarmonyApple;
