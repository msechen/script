const _ = require('lodash');

const Api = require('../api');
const {sleep} = require('../../lib/common');
const {printLog} = require('../../lib/common');
const scriptName = '热8超级盲盒';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie) {

  const api = new Api(cookie, {}, {
    headers: {
      'User-Agent': 'jdapp',
    },
    uri: 'https://blindbox.jd.com',
  }, data => data.code === 200 ? data.data : data);


  const _doPath = async (name, functionId, form) => api.doPath(`${name}/${functionId}`, form);
  const doActivePath = _doPath.bind(0, 'active');
  const doPrizePath = _doPath.bind(0, 'prize');

  await doConf();
  await doTaskList();

  await lottery();

  async function doConf() {
    await sleep();
    await doActivePath('conf').then(async data => {
      for (const [type, list] of [data.skuList, data.brandList].entries()) {
        for (const {id, state} of list) {
          if (state === 2) continue;
          await sleep();
          await doActivePath('homeGoBrowse', {type, id});
          await sleep(2);
          await doActivePath('taskHomeCoin', {type, id});
        }
      }
    });

  }

  async function doTaskList() {
    await sleep();
    await doActivePath('taskList').then(async data => {
      await sleep();
      const taskList = Object.values(data).filter(task => task.totalNum !== task.finishNum && ![5, 6].includes(task.type));
      for (const {state, type, shopId, skuId, activeId} of taskList) {
        await sleep(2);
        if (state === 1) {
          await taskCoin(type);
        }
        if (type === 1) {
          await doActivePath('strollActive', {0: activeId});
          await sleep(10);
          await taskCoin(type);
        }
        if (type === 2) {
          await doActivePath('strollShop', {shopId});
          await sleep(10);
          await taskCoin(type);
        }
        if (type === 4) {
          await doActivePath('browseProduct', {0: skuId});
          await sleep(10);
          await taskCoin(type);
        }
      }
      if (!_.isEmpty(taskList)) {
        await doTaskList();
      }
    });
  }

  async function taskCoin(type) {
    return doActivePath(taskCoin.name, {type}).then(successLog);
  }


  async function lottery() {
    await sleep();
    await doPrizePath(lottery.name).then(async data => {
      const name = data.name;
      if (name) {
        _printLog(`本次抽奖结果为: ${name}`);
        name && await lottery();
      }
    });
  }

  function successLog({code = 200, coinNum}) {
    code === 200 && _printLog(`获取到的热力值为: ${coinNum}`);
  }
}

async function start(data) {
  for (let i = 0; i < 1; i++) {
    for (const {cookie, shareCodes} of data) {
      await main(cookie, i === 0 ? shareCodes : void 0);
      await sleep();
    }
    await sleep(2);
  }
}

module.exports = start;
