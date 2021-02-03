const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony12 extends HarmonyTemplate {
  static scriptNameDesc = '礼盒大放送';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRXwQ'});
}

module.exports = Harmony12;
