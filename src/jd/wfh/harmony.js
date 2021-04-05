const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony extends HarmonyTemplate {
  static scriptNameDesc = '模板';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRWyw'});
  static apiNames = {
    getTaskList: 'healthyDay_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'interact_template_getLotteryResult',
  };
}

module.exports = Harmony;
