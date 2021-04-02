const MangHe = require('./mangHe');

const {sleep, writeFileJSON, matchMiddle} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/3F5Wv7SJWHryN5VfktCH2ZWoyF8S/index.html';

class MangHe1 extends MangHe {
  static scriptName = 'MangHe1';
  static scriptNameDesc = '幸运砸金蛋';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static apiNames = {
    getTaskList: 'query',
    doTask: 'completeTask',
    afterGetTaskList: 'query',
    doRedeem: 'draw',
  };
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/3F5Wv7SJWHryN5VfktCH2ZWoyF8S/index.html';
  static customApiOptions = {
    uri: 'https://wq.jd.com/activet2/piggybank',
    qs: {
      activeid: '10083377',
      token: 'ca8e48a9e063b242e3ccada57ad33491',
    },
    headers: {
      referer: this.indexUrl,
    },
  };
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  MangHe1.start(getCookieData()).then();
}

module.exports = MangHe1;
