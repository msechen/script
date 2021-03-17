const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '开盲盒抽奖';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRWyw'});
  static skipTaskIds = [4/*开会员*/];
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'healthyDay_getLotteryResult',
  };
}

module.exports = Harmony1;
