const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '东东焕新装';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRZwA'});
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = Harmony2;
