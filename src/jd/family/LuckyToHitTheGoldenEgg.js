const FamilyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

class LuckyToHitTheGoldenEgg extends FamilyTemplate {
  static scriptName = 'LuckyToHitTheGoldenEgg';
  static scriptNameDesc = '幸运砸金蛋';
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/3F5Wv7SJWHryN5VfktCH2ZWoyF8S/index.html';
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  LuckyToHitTheGoldenEgg.start(getCookieData()).then();
}

module.exports = LuckyToHitTheGoldenEgg;
