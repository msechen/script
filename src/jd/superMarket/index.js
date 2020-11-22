const _ = require('lodash');

const {Request} = require('../api');
const {sleep, getNowMoment} = require('../../lib/common');
const {printLog} = require('../../lib/common');
const scriptName = 'superMarket';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie) {
  const nowMoment = getNowMoment();
  const api = new Request(cookie, {
    appid: 'jdsupermarket',
    clientVersion: '8.0.0',
    client: 'm',
  }, {
    headers: {
      'User-Agent': 'jdapp',
      'origin': 'https://jdsupermarket.jd.com',
    },
    uri: 'https://api.m.jd.com/api',
  }, data => data.code === 0 ? data.data : data);

  const isSuccess = data => data.bizCode === 0;

  const doSign = async () => {
    await sleep();
    await api.doFormBody('smtg_signList').then(async data => {
      if (data.result.hadSigned === 2) {
        await sleep();
        await api.doFormBody('smtg_sign').then(async data => {
          data.result.blueCoin = data.result.jdBeanCount;
          successLog(data);
        });
      }
    });
  };
  const isFirst = nowMoment.hours() === 0;
  await doExchange();
  if (isFirst) {
    await smtg_receiveCoin();
    await doSign();
    // await manageProduct();
    // await manageShelf();
    // await doTaskList(true);
  } else {
    await smtg_receiveCoin([0]);
  }
  // await doTaskList();
  await doExchange();

  if (nowMoment.hours() === 20) {
    await getPkCoin();
  }

  async function manageProduct() {
    await sleep();
    let needLoop = false;
    await api.doFormBody('smtg_productList').then(async data => {
      const productList = data.result.productList.filter(o => !o.priceBlue);
      const allCategories = _.groupBy(productList, 'shelfCategory');
      for (const categories of Object.values(allCategories)) {
        const unlockCategories = categories.filter(o => o.unlockStatus === 2);
        if (_.isEmpty(unlockCategories)) {
          await smtg_unlockProduct(categories[0].productId).then(data => {
            if (isSuccess(data)) {
              _printLog(`解锁成功: ${categories[0].name}`);
              needLoop = true;
            }
          });
          continue;
        }
        for (const {upgradeCostGold, productId} of unlockCategories.reverse()) {
          // 默认升级最后一个
          const {totalGold} = await smtg_home();
          if (upgradeCostGold < totalGold) {
            await smtg_upgradeProduct(productId);
            break;
          }
        }
      }

      if (needLoop) await manageProduct();
    });
  }

  async function manageShelf(updateNumber = 1) {
    await sleep();

    let needLoop = false;
    await smtg_shelfList().then(async data => {
      const {shelfList} = data.result;
      const unlocks = shelfList.filter(o => o.unlockStatus === 2);
      if (_.isEmpty(unlocks)) {
        await smtg_unlockShelf(shelfList[0].shelfId).then(data => {
          _printLog(`解锁成功: ${shelfList[0].name}`);
          if (isSuccess(data)) {
            needLoop = true;
          }
        });
      }
      for (const {upgradeCostGold, shelfId, level} of unlocks) {
        for (let i = level; i < level + updateNumber; i++) {
          const {totalGold} = await smtg_home();
          if (upgradeCostGold > totalGold) {
            break;
          }
          await smtg_upgradeShelf(shelfId);
        }
      }

      if (updateNumber > 1) return;

      if (needLoop) {
        await manageShelf();
      } else {
        for (const {shelfId} of unlocks) {
          await manageShelfProduct(shelfId);
        }
      }
    });

    // 获取列表
    async function smtg_shelfList(type = 'init') {
      await sleep();
      return api.doFormBody(smtg_shelfList.name, {type});
    }

    // 升级
    async function smtg_upgradeShelf(shelfId) {
      await sleep();
      return api.doFormBody(smtg_upgradeShelf.name, {shelfId});
    }

    // 解锁
    async function smtg_unlockShelf(shelfId) {
      await sleep();
      return api.doFormBody(smtg_unlockShelf.name, {shelfId});
    }
  }

  async function manageShelfProduct(shelfId) {
    await sleep();
    await smtg_shelfProductList(shelfId).then(async data => {
      const {productList} = data.result;
      const blueProduct = productList.find(o => o.priceBlue);
      if (blueProduct) {
        await smtg_ground(shelfId, blueProduct.productId);
        return;
      }
      const goldProduct = _.maxBy(productList, 'priceGold');
      if (!goldProduct) return;
      if (goldProduct.groundStatus > 1) return;
      await smtg_ground(shelfId, goldProduct.productId);
    });

    // 列出商品
    async function smtg_shelfProductList(shelfId) {
      await sleep();
      return api.doFormBody(smtg_shelfProductList.name, {shelfId});
    }

    // 上架
    async function smtg_ground(shelfId, productId) {
      await sleep();
      return api.doFormBody(smtg_ground.name, {shelfId, productId});
    }
  }

  // 升级商品
  async function smtg_upgradeProduct(productId) {
    await sleep();
    return api.doFormBody(smtg_upgradeProduct.name, {productId});
  }

  // 解锁商品
  async function smtg_unlockProduct(productId) {
    await sleep();
    return api.doFormBody(smtg_unlockProduct.name, {productId});
  }

  async function doTaskList(isPk) {
    const getFunctionId = functionId => isPk ? functionId.replace('Shop', 'Pk') : functionId;
    await sleep();

    let needLoop = false;
    await api.doFormBody(getFunctionId('smtg_queryShopTask')).then(async data => {
      await sleep();
      const {taskList = []} = _.property('result')(data) || {};
      for (const {type, taskId, taskStatus, prizeStatus, content, finishNum, targetNum} of taskList) {
        await sleep();
        if (taskStatus === 1) {
          if (finishNum === targetNum) {
            // 领取奖励
            if (prizeStatus === 0) continue;
            await api.doFormBody(getFunctionId('smtg_obtainShopTaskPrize'), {taskId}).then(successLog);
          }
        } else {
          if ((isPk ? [1, 6, 3] : [1, 2, 8, 10, 11]).includes(type)) {
            needLoop = true;
            const {itemId} = Object.values(content || {})[0] || {};
            await api.doFormBody(getFunctionId('smtg_doShopTask'), {taskId, itemId});
          }
        }
      }
    });

    if (needLoop) {
      await doTaskList(isPk);
    }
  }

  async function smtg_receiveCoin(types = [0, 1, 2]) {
    const nextTypes = [];
    for (const type of [].concat(types)) {
      await sleep();
      await api.doFormBody(smtg_receiveCoin.name, {type}).then(async data => {
        if (!data.result) return;
        data.result.blueCoin = _.property('result.receivedBlue')(data);
        data.result.goldCoin = _.property('result.receivedGold')(data);
        successLog(data);
        if (type === 2 && isSuccess(data)) nextTypes.push(type);
      });
    }
    if (!_.isEmpty(nextTypes)) {
      await sleep(2);
      await smtg_receiveCoin(nextTypes);
    }
  }

  async function doExchange() {
    await sleep();
    const {totalBlue} = await smtg_home();
    const {prizeList} = await smtg_queryPrize();
    const beanPrizes = prizeList.filter(({beanType, inStock}) => ['Bean', 'BeanPackage'].includes(beanType) && inStock === 0);
    for (const beanPrize of beanPrizes) {
      const {blueCost, targetNum, finishNum, prizeId, beanNum} = beanPrize;
      const minTimes = Math.min(Math.floor(totalBlue / blueCost), targetNum - finishNum);
      for (let i = 0; i < minTimes; i++) {
        await smtg_obtainPrize(prizeId);
      }
      minTimes && _printLog(`成功兑换${minTimes * beanNum}个京豆`);
    }
  }

  async function smtg_home() {
    await sleep();
    return api.doFormBody(smtg_home.name).then(data => {
      return data.result;
    });
  }

  async function smtg_queryPrize() {
    await sleep();
    return api.doFormBody(smtg_queryPrize.name).then(data => {
      return data.result;
    });
  }

  // 兑换东西
  async function smtg_obtainPrize(prizeId) {
    await sleep();
    return api.doFormBody(smtg_obtainPrize.name, {prizeId});
  }

  // 获取pk的蓝币
  async function getPkCoin() {
    await sleep();

    return api.doFormBody('smtg_businessCircleIndex').then(async data => {
      if (data.result.pkPrizeStatus === 2) {
        await sleep();
        await api.doFormBody('smtg_getPkPrize').then(data => {
          const getBlueCoin = p => _.property(p)(data);
          data.result.blueCoin = getBlueCoin('result.pkPersonPrizeInfoVO.blueCoin') + getBlueCoin('result.pkTeamPrizeInfoVO.blueCoin');
          successLog(data);
        });
      }
    });
  }

  function successLog({bizCode = 0, result}) {
    if (bizCode === 0) {
      if (result.blueCoin) {
        _printLog(`获取到的蓝币: ${result.blueCoin}`);
      }
      if (result.goldCoin) {
        _printLog(`获取到的金币: ${result.goldCoin}`);
      }
      if (result.hotPoint) {
        _printLog(`获取到的人气值: ${result.hotPoint}`);
      }
    }
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
