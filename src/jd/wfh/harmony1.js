const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '惊喜礼盒';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRVxw'});
  static skipTaskIds = [8/*开会员*/, 12/*购买商品*/];
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = Harmony1;
