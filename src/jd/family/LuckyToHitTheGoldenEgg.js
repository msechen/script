const FamilyTemplate = require('./template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class LuckyToHitTheGoldenEgg extends FamilyTemplate {
  static scriptName = 'LuckyToHitTheGoldenEgg';
  static scriptNameDesc = '幸运砸金蛋';
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/3F5Wv7SJWHryN5VfktCH2ZWoyF8S/index.html';
}

singleRun(LuckyToHitTheGoldenEgg).then();

module.exports = LuckyToHitTheGoldenEgg;
