const FamilyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

class WomenBlindBox extends FamilyTemplate {
  static scriptName = 'WomenBlindBox';
  static scriptNameDesc = '女装抽盲盒';
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/2x3yeXUmPbFVCAoXKQqSrdrQuoBk/index.html';
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  WomenBlindBox.start(getCookieData()).then();
}

module.exports = WomenBlindBox;
