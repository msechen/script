const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class HarmonyHealthyDaySound extends HarmonyTemplate {
  static scriptNameDesc = '音频巅峰送豪礼';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRSxQ'});
  static skipTaskIds = [7/*开会员*/];
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = HarmonyHealthyDaySound;
