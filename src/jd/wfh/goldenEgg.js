const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class GoldenEgg extends HarmonyTemplate {
  static scriptNameDesc = '砸蛋抽好礼';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({'appId': '1EFRTxQ'});
  static isWh5 = false;
  static needOriginH5 = true;
  static apiOptions = {
    signData: {
      clientVersion: 8,
      client: 'm',
      appid: 'golden-egg',
    },
    options: {
      uri: 'https://api.m.jd.com/api',
    },
  };
  static apiNames = {
    getTaskList: 'ts_getHomeData',
    doTask: 'harmony_collectScore',
    doWaitTask: 'harmony_collectScore',
    afterGetTaskList: 'ts_smashGoldenEggs',
    doRedeem: 'ts_getLottery',
  };
}

module.exports = GoldenEgg;
