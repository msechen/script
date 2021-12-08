const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');

class SplitHongbao extends HarmonyTemplate {
  static scriptName = 'SplitHongbao';
  static scriptNameDesc = '金榜年终奖';
  static shareCodeTaskList = [];
  static redeemWithTaskId = true;
  static shareTaskId = 7;
  static apiNames = {
    getTaskList: 'splitHongbao_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: 'splitHongbao_getLotteryResult',
  };
  static commonParamFn = () => ({appId: '1EFVXxg'});
}

module.exports = SplitHongbao;
