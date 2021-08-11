const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/4BvJGuWhUZkGTF9Z2FryWtrLWbDm/index.html';

class Harmony2 extends HarmonyTemplate {
  static scriptNameDesc = '8月来电好物季';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1E1NYw6w'});
  static shareTaskId = 11;
  static skipTaskIds = [];
}

module.exports = Harmony2;
