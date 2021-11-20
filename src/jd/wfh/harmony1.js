const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/3LdMQi6ZC11vt3Nu8fC9ESbhi56H/index.html';

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '心动电波';
  static shareCodeTaskList = [];
  static shareTaskId = 9;
  static skipTaskIds = [7/*开会员*/];
  static commonParamFn = () => ({appId: '1FFRWwqg'});
}

module.exports = Harmony1;
