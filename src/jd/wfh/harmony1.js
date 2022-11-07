const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/3LdMQi6ZC11vt3Nu8fC9ESbhi56H/index.html';

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '超级大转盘';
  static shareCodeTaskList = [];
  static shareTaskId = 11;
  static skipTaskIds = [7/*会员*/, 9/*购买*/];
  static commonParamFn = () => ({appId: '1FVRZxKiD'});
}

module.exports = Harmony1;
