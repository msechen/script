const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '企有此礼';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1ElBTx6o'});
  static skipTaskIds = [];
}

module.exports = Harmony2;
