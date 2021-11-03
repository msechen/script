const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/3LdMQi6ZC11vt3Nu8fC9ESbhi56H/index.html';

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '惊喜大作战';
  static shareCodeTaskList = [];
  static shareTaskId = 1;
  static skipTaskIds = [5/*开会员*/, 8/*购买*/];
  static commonParamFn = () => ({appId: '1FV1VwKc'});
}

module.exports = Harmony1;
