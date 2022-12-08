const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowHour} = require('../../lib/moment');

class SplitHongbao extends HarmonyTemplate {
  static scriptName = 'SplitHongbao';
  static scriptNameDesc = '金榜年终奖';
  static shareCodeTaskList = [];
  static activityEndTime = '2022-12-12';
  static redeemWithTaskId = true;
  static apiNames = {
    getTaskList: 'splitHongbao_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    doRedeem: getNowHour() >= 22 ? 'splitHongbao_getLotteryResult' : '',
  };
  static commonParamFn = () => ({appId: '1EFVXyw'});
}

module.exports = SplitHongbao;
