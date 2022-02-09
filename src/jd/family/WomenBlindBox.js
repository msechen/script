const FamilyTemplate = require('./template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class WomenBlindBox extends FamilyTemplate {
  static scriptName = 'WomenBlindBox';
  static scriptNameDesc = '女装抽盲盒';
  static activityEndTime = '2022-02-28';
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/3ZHWXfEDpu5GyX1BgCEN3qQwrC4K/index.html';
}

singleRun(WomenBlindBox).then();

module.exports = WomenBlindBox;
