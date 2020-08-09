const _ = require('lodash');

const {Request} = require('../api');
const {sleep} = require('../../lib/common');
const {printLog} = require('../../lib/common');
const scriptName = '赚30元';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie) {

  const api = new Request(cookie, {client: 'wh5', clientVersion: '1.0.0'}, {
    headers: {
      'User-Agent': 'jdapp',
    },
  });

  // 签到
  await sleep();
  await api.doFormBody('fpSign').then(data => {
    moneyLog(data._data);
  });

  await sleep();
  await api.doFormBody('firstPurchaseHome', {
    'caller': 1,
    'parentPin': '',
    'sku': '',
    'pageEnv': 0,
    'channel': '',
  }).then(async data => {
    // 分享赚钱
    if (/马上分享/.test(_.property('_data.userReward.initText')(data))) {
      await sleep();
      await api.doFormBody('olivesoaGetSharedReward', {'pageEnv': 0}).then(data => {
        moneyLog(data._data.userReward);
      });
    }
  });

  function moneyLog({code, money}) {
    (code === '0') && _printLog(`获取的钱数为: ${money}`);
  }
}

async function start(data) {
  for (let i = 0; i < 1; i++) {
    for (const {cookie, shareCodes} of data) {
      await main(cookie, i === 0 && shareCodes);
    }
    await sleep(2);
  }
}

module.exports = start;
