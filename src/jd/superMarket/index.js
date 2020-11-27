const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class SuperMarket extends Template {
  static scriptName = 'SuperMarket';
  static shareCodeTaskList = [];
  static repeatDoTask = true;

  static apiOptions = {
    options: {
      headers: {
        'origin': 'https://jdsupermarket.jd.com',
      },
      uri: 'https://api.m.jd.com/api',
    },
    signData: {
      appid: 'jdsupermarket',
      clientVersion: '8.0.0',
      client: 'm',
    },
  };

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'smtg_queryShopTask',
        successFn: async (data) => {
          // writeFileJSON(data, 'smtg_queryShopTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.result.taskList')(data) || [];
          for (let {
            type, prizeStatus, content = {},
            taskStatus: status,
            taskId,
            targetNum: maxTimes,
            finishNum: times,
            waitDuration,
          } of taskList) {
            if ((status === 1 && !prizeStatus) || [
              1, // 分享游戏
              // 11, // 指定入口进入小游戏
              // 2, // 逛会场
              // 8, // 关注店铺
              // 10, // 关注商品
              9, // 去店铺开会员卡
              4, // 去购物
            ].includes(type)) continue;

            // 以下任务无需手动完成
            if ([
              5, // 卖货能手
              6, // 盘货能手
              7, // 任务能手
            ].includes(type) && !prizeStatus) {
              if (type === 6) {
                // 升级最少金额的
                const productList = await self._api.doFormBody('smtg_productList').then(data => data.data.result.productList.filter(o => !o.priceBlue && o.unlockStatus === 2)) || [];
                if (!productList.length) continue;
                const {upgradeCostGold, productId} = _.minBy(productList, o => o.upgradeCostGold);
                const totalGold = await self._api.doFormBody('smtg_home').then(data => data.data.result.totalGold);
                productId && (upgradeCostGold < totalGold) && await self._api.doFormBody('smtg_upgradeProduct', {productId});
              }
              continue;
            }

            const {itemId} = _.first(Object.values(content)) || {};
            let list = [{taskId, itemId}];

            // 每次只做一个
            const option = {maxTimes: 1, times: 0, waitDuration};
            if (prizeStatus) {
              option.firstFn = async o => {
                await self._api.doFormBody('smtg_obtainShopTaskPrize', {taskId: o.taskId});
              };
            }
            result.push({list, option});
          }

          return result;
        },
      },
      doTask: {
        name: 'smtg_doShopTask',
        paramFn: o => o,
      },
      // 签到
      afterGetTaskList: {
        name: 'smtg_sign',
        successFn: async data => {
          // 获取京豆
          await self._api.doFormBody('smtg_sign', {channel: '1'});
        },
      },
      doRedeem: {
        name: 'smtg_drawLottery',
        paramFn: () => ({'costType': 1, 'channel': '1'}),
        successFn: async data => {
          if (!self.isSuccess(data)) {
            const {totalBlue, totalGold} = await self._api.doFormBody('smtg_home').then(data => data.data.result) || {};
            totalBlue && self.log(`蓝币总计为: ${totalBlue}, 金币总计为: ${totalGold}`);
            return false;
          }
        },
        repeat: true,
      },
    };
  };

  static async doCron(api) {
    const self = this;
    const _ = this._;
    const nowHour = self.getNowHour();

    nowHour === 0 && await doExchange();
    let blueCoin = 0, goldCoin = 0;
    nowHour !== 0 && await receiveCoin(nowHour > 8 ? [0] : void 0);
    (blueCoin || goldCoin) && self.log(`获取到的蓝币: ${blueCoin}, 获取到的金币: ${goldCoin}`);

    async function doExchange() {
      await sleep();
      const {totalBlue} = await api.doFormBody('smtg_home').then(data => data.data.result);
      const {prizeList} = await api.doFormBody('smtg_queryPrize').then(data => data.data.result);
      const beanPrizes = prizeList.filter(({beanType, inStock}) => ['Bean', 'BeanPackage'].includes(beanType) && inStock === 0);
      for (const beanPrize of beanPrizes) {
        const {blueCost, targetNum, finishNum, prizeId, beanNum} = beanPrize;
        const minTimes = Math.min(Math.floor(totalBlue / blueCost), targetNum - finishNum);
        for (let i = 0; i < minTimes; i++) {
          await api.doFormBody('smtg_obtainPrize', {prizeId});
        }
        minTimes && self.log(`成功兑换${minTimes * beanNum}个京豆`);
      }
    }

    async function receiveCoin(types = [
      0, // 金币
      1, 2, // 蓝币
    ]) {
      const nextTypes = [];
      for (const type of [].concat(types)) {
        await api.doFormBody('smtg_receiveCoin', {type}).then(async data => {
          if (!self.isSuccess(data)) return;
          const {receivedBlue, receivedGold} = _.property('data.result')(data);
          blueCoin += receivedBlue || 0;
          goldCoin += receivedGold || 0;
          if (type === 2 && self.isSuccess(data)) nextTypes.push(type);
        });
      }
      if (!_.isEmpty(nextTypes)) {
        await sleep(2);
        await receiveCoin(nextTypes);
      }
    }

    // await manageShelf();
    async function manageShelf(updateNumber = 1) {
      await sleep();

      let needLoop = false;
      await smtg_shelfList().then(async data => {
        const {shelfList} = data.data.result;
        const unlocks = shelfList.filter(o => o.unlockStatus === 2);
        if (_.isEmpty(unlocks)) {
          await smtg_unlockShelf(shelfList[0].shelfId).then(data => {
            self.log(`解锁成功: ${shelfList[0].name}`);
            if (self.isSuccess(data)) {
              needLoop = true;
            }
          });
        }
        if (needLoop) return manageShelf(updateNumber);
        const {upgradeCostGold, shelfId} = _.minBy(unlocks, o => o.upgradeCostGold);
        const {totalGold} = await api.doFormBody('smtg_home');
        if (upgradeCostGold < totalGold) {
          await smtg_upgradeShelf(shelfId);
          await manageShelf(updateNumber);
        }

        // for (const {upgradeCostGold, shelfId, level} of unlocks) {
        //   for (let i = level; i < level + updateNumber; i++) {
        //     const {totalGold} = await api.doFormBody('smtg_home');
        //     if (upgradeCostGold > totalGold) {
        //       break;
        //     }
        //     await smtg_upgradeShelf(shelfId);
        //   }
        // }
      });

      // 获取列表
      async function smtg_shelfList(type = 'init') {
        return api.doFormBody(smtg_shelfList.name, {type});
      }

      // 升级
      async function smtg_upgradeShelf(shelfId) {
        return api.doFormBody(smtg_upgradeShelf.name, {shelfId});
      }

      // 解锁
      async function smtg_unlockShelf(shelfId) {
        return api.doFormBody(smtg_unlockShelf.name, {shelfId});
      }

      async function manageShelfProduct(shelfId) {
        await sleep();
        await api.doFormBody('smtg_shelfProductList', {shelfId}).then(async data => {
          const {productList} = data.data.result;
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
      }

      async function smtg_ground(shelfId, productId) {
        return api.doFormBody(smtg_ground.name, {shelfId, productId});
      }

    }
  }

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }
}

module.exports = SuperMarket;
