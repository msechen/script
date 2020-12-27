const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Wfh extends HarmonyTemplate {
  static scriptName = '东东福利屋';
  static shareCodeTaskList = [];
  static apiNames = {
    getTaskList: 'wfh_getHomeData',
    doTask: 'wfh_collectScore',
    doRedeem: 'wfh_getLotteryResult',
  };
  static commonParamFn = () => ({appId: '1EFRSxA'});
}

module.exports = Wfh;
