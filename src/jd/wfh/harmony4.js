const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON} = require('../../lib/common');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/Yk1NhYbyEAwUuJG3Vfa6KvEcgA5/index.html';

class Harmony4 extends HarmonyTemplate {
  static scriptNameDesc = 'Joy的年味之城';
  static shareCodeTaskList = [];
  static shareTaskId = 13;
  static skipTaskIds = [6/*开会员*//*, 4/!*加购*!/*/];
  static commonParamFn = () => ({appId: '1GVFUx6g'});
}

module.exports = Harmony4;
