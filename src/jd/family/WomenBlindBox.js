const FamilyTemplate = require('./template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class WomenBlindBox extends FamilyTemplate {
  static scriptName = 'WomenBlindBox';
  static scriptNameDesc = '女装抽盲盒';
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/2x3yeXUmPbFVCAoXKQqSrdrQuoBk/index.html';
}

singleRun(WomenBlindBox).then();

module.exports = WomenBlindBox;
