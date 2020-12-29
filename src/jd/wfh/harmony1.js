const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '东东焕新家';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRSyw'});
  static skipTaskIds = [4/*开会员*/, 7/*购买商品*/];
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = Harmony1;
