const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/4FVXLXZvsqbspqPHhGGygFtUXShm/index.html';

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '芯意制造盒';
  static shareCodeTaskList = [];
  static shareTaskId = 1;
  static skipTaskIds = [4/*开会员*/];
  static commonParamFn = () => ({appId: '1ElJYxqY'});
}

module.exports = Harmony1;
