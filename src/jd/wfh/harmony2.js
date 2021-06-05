const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/42aShK3jwPLybTR9SxxcnKo8dPeB/index.html';

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '荣耀618';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFVRxw'});
  static skipTaskIds = [1/*开会员*/];
}

module.exports = Harmony2;
