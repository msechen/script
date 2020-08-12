const _ = require('lodash');

const {Request} = require('./api');
const {sleep} = require('../lib/common');
const {printLog, getNowMoment} = require('../lib/common');
const scriptName = '免费农场';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie, shareCodes = []) {
  const api = new Request(cookie, {}, {
    headers: {
      'User-Agent': 'jdapp',
    },
    qs: {
      appid: 'wh5',
    },
  });

  const waterTimes = process.env.JD_FRUIT_WATER_TIMES;
  waterTimes && await waterGoodForFarm(waterTimes);

  // 助力
  for (const shareCode of shareCodes) {
    await sleep();
    await api.doFormBody('initForFarm', {shareCode}).then(data => {
      amountLog(data._data.helpResult || {});
    });
  }
  const nowMoment = getNowMoment();

  await sleep();
  await api.doFormBody('gotThreeMealForFarm').then(data => {
    amountLog(data._data);
  });

  await sleep();
  // 采集5点水滴
  await api.doFormBody('gotWaterGoalTaskForFarm', {type: 3}).then(data => {
    data._data.amount = data._data.addEnergy;
    amountLog(data._data);
  });

  // 总签到获取水滴
  if (nowMoment.weekday() === 0) {
    await sleep();
    await api.doFormBody('clockInForFarm', {type: 2}).then(data => {
      amountLog(data._data);
    });
  }

  async function waterGoodForFarm(times) {
    for (let i = 0; i < times; i++) {
      await sleep(2);
      await api.doFormBody('waterGoodForFarm').then(data => {
        data._data.code === '0' && _printLog('浇水成功一次');
      });
    }
  }
}

function amountLog({code, amount, addEnergy}) {
  (code === '0') && _printLog(`获取的水滴数: ${amount || addEnergy}`);
}

async function start(data) {
  for (let i = 0; i < 1; i++) {
    for (const {cookie, shareCodes} of data) {
      await main(cookie, i === 0 ? shareCodes : void 0);
    }
    await sleep(2);
  }
}

module.exports = start;
