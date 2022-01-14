const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/gk4SCtec26szXauJbRo8xBspkpv/index.html';

class Harmony3 extends HarmonyTemplate {
  static scriptNameDesc = '年货节';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1GFRRyqo'});
  static shareTaskId = 1;
  static skipTaskIds = [5/*会员*/];
}

module.exports = Harmony3;
