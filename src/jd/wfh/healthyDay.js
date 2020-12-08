const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class HealthyDay extends HarmonyTemplate {
  static scriptNameDesc = '健康调研';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRTwg'});
  static skipTaskIds = [2/*开会员*/, 5/*西医亚健康评测*/, 8/*完成并分享趣味评测*/];
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = HealthyDay;
