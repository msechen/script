const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/3RejAk5YXzhvxXiBR1tzWnUbwneW/index.html';

class Harmony1 extends HarmonyTemplate {
  static scriptNameDesc = '荣耀焕新季';
  static shareCodeTaskList = [];
  static shareTaskId = -1;
  static commonParamFn = () => ({appId: '1E1NYwqc'});
}

module.exports = Harmony1;
