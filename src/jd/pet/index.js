const Template = require('../base/template');
const {getMoment} = require('../../lib/moment');

const {sleep, singleRun} = require('../../lib/common');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/WiXHzdNRVxmQQdEpLo4Z4yvsiFy/index.html';

class Pet extends Template {
  static scriptName = 'Pet';
  static scriptNameDesc = '东东萌宠';
  static times = 1;
  static apiOptions = {
    options: {
      qs: {
        appid: 'wh5',
      },
      form: {
        body: {version: 1},
      },
    },
    formatDataFn(data) {
      const rewardLog = data => {
        const reward = _.first(_.values(_.pick(data.result, ['threeMealReward', 'reward'])));
        reward && this.log(`获取到狗粮: ${reward}`);
      };
      rewardLog(data);
      return data;
    },
  };

  static isSuccess(data) {
    return _.property('resultCode')(data) === '0';
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const needHarvest = false;
    const getResult = data => data.result || {};

    // 喂食到成熟
    if (needHarvest) return logInfo(true);

    const {
      shareCode: currentShareCode,
    } = await getInfo();

    patchShareCodeWithDefault();

    await handleDoTaskList();
    await handleDoShare();
    await handlePetSport();
    await handleGetHelpAddedBonus();
    await logInfo();

    async function getInfo() {
      return api.doFormBody('initPetTown', {'version': 2, 'channel': 'app'}).then(async data => {
        const result = getResult(data);
        const {petPlaceInfoList} = result;
        if (_.reduce(_.map(petPlaceInfoList, 'energy')) > 0) {
          _.assign(result, _.pick(await handleEnergyCollect(), ['needCollectEnergy', 'totalEnergy', 'medalPercent', 'medalNum']));
        }
        return result;
      });
    }

    // 增加默认助力码
    function patchShareCodeWithDefault() {
      [
        'MTAxODc2NTEzMzAwMDAwMDAyMTQ4OTI5OQ==',
        'MTAxODc2NTEzMTAwMDAwMDAyMTc5MzQxMQ==',
        'MTAxNzIxMDc1MTAwMDAwMDA1NzYzODA3MQ==',
        'MTE1MzEzNjI2MDAwMDAwMDU3NjM4MTc1',
      ].forEach(code => {
        if ([currentShareCode, ...shareCodes].includes(code)) return;
        shareCodes.push(code);
      });
    }

    async function handleDoShare() {
      // 仅执行一次
      if (self.doneShareTask) return;
      for (const shareCode of shareCodes) {
        await api.doFormBody('slaveHelp', {shareCode}).then(data => {
          if (self.isSuccess(data)) {
            const {helpStatus, masterNickName} = data.result;
            if (helpStatus === 0) {
              api.log(`助力 ${masterNickName} 成功`);
            } else {
              api.log(`助力 ${masterNickName} 失败`);
            }
          } else {
            api.log(data.message);
          }
        });
      }
    }

    async function handleDoTaskList() {
      const taskData = await api.doFormBody('taskInit', {'version': 2, 'channel': 'app'}).then(getResult);
      const {
        signInit,
        threeMealInit,
        firstFeedInit,
        feedReachInit,
        taskList,
      } = taskData;
      const notFinished = o => o ? !o['finished'] : true;
      const needGetReward = o => o.status === 1;

      if (notFinished(signInit)) {
        self.doneShareTask = false;
        await api.doFormBody('getSignReward');
      }
      if (notFinished(threeMealInit) && (threeMealInit['timeRange'] !== -1)) {
        await api.doFormBody('getThreeMealReward');
      }
      if (notFinished(feedReachInit)) {
        const {feedReachAmount, hadFeedAmount} = feedReachInit;
        await handleFeed((feedReachAmount - hadFeedAmount) / 10);
      }
      if (needGetReward(firstFeedInit)) {
        await api.doFormBody('getFirstFeedReward');
      }
      if (needGetReward(feedReachInit)) {
        await api.doFormBody('getFeedReachReward');
      }

      await handleDoBrowserTask();

      async function handleDoBrowserTask() {
        const browserTasks = _.filter(taskList.filter(v => v.match('browseSingleShopInit')).map(key => taskData[key]));
        for (const {index, browseTime, status, finished} of browserTasks) {
          if (finished) continue;
          const body = {index, type: 1};
          const success = await api.doFormBody('getSingleShopReward', body).then(self.isSuccess);
          if (!success) continue;
          await sleep(browseTime || 8);
          body.type = 2;
          await api.doFormBody('getSingleShopReward', body);
        }
      }
    }

    // 喂食
    async function handleFeed(feedTimes) {
      if (process.env.JD_PET_FEED_DISABLE) return;
      let i = 0;
      for (; i < feedTimes; i++) {
        await sleep(2);
        const enable = await api.doFormBody('feedPets').then(self.isSuccess);
        if (i % 20 === 0) {
          await handleEnergyCollect();
        }
        if (!enable) break;
      }
      if (!i) return;
      api.log(`成功喂养 ${i} 次`);
      await handleEnergyCollect();
    }

    function handleEnergyCollect() {
      return api.doFormBody('energyCollect').then(getResult);
    }

    // 遛弯
    async function handlePetSport() {
      let times = 0;

      await doPetSport();
      times && api.log(`${times} 次遛狗奖励领取成功`);

      async function doPetSport() {
        const {resultCode} = await api.doFormBody('petSport');
        if (!['0', '1013'/*有未领取奖励*/].includes(resultCode)) return;
        await sleep(5);
        await api.doFormBody('getSportReward').then(data => {
          if (!self.isSuccess(data)) return;
          times++;
          return doPetSport();
        });
      }
    }

    // 领取助力人数已满奖励
    async function handleGetHelpAddedBonus() {
      const {
        masterHelpPeoples,
        helpLimit,
        addedBonusFlag,
      } = await api.doFormBody('masterHelpInit').then(getResult);
      if (!masterHelpPeoples) return;
      if ((masterHelpPeoples.length === helpLimit) && !addedBonusFlag) {
        return api.doFormBody('getHelpAddedBonus');
      }
    }

    async function logInfo(needHarvest = false) {
      const {
        medalNum,
        medalPercent,
        needCollectEnergy,
        totalEnergy,
        foodAmount,
        goodsInfo,
      } = await getInfo();
      if (!goodsInfo) {
        // TODO 更换商品或者选择商品
        return api.log('没有选择商品');
      }
      // 几个徽章对应中的能量
      const allMedalNumEnergy = [0, 0, 0, 6610, 8260];
      const {exchangeMedalNum} = goodsInfo;
      const targetEnergy = allMedalNumEnergy[exchangeMedalNum - 1];
      // 10g狗粮相当于6能量
      const conversionRatio = 0.6;
      const needFoodAmount = Math.round((targetEnergy - totalEnergy) / conversionRatio);
      const canHarvest = foodAmount >= needFoodAmount;
      api.log(`徽章进度: 第${medalNum + 1}个(${medalPercent}%), 收集能量(待/已):${needCollectEnergy}/${totalEnergy}. 收成需要狗粮${needFoodAmount}g, 当前狗粮为${foodAmount}g${canHarvest ? ', 可以收成了!' : ''}`);
      if (needHarvest && canHarvest) {
        const feedTimes = Math.round(needFoodAmount / 10) + 1;
        const time = getMoment().add(feedTimes * 3, 's');
        api.log(`完成该徽章需喂养 ${feedTimes} 次, 在 ${time.format()} 之后可以完成`);
        await handleFeed(feedTimes);
        if (exchangeMedalNum !== medalNum) {
          return logInfo(needHarvest);
        }
      }
    }

    // 获取商品列表
    function getGoodsInfoList() {
      return api.doFormBody('goodsInfoList', {type: 1});
    }

    // 更换商品
    function handleUpdateGoods(goodsId) {
      return api.doFormBody('goodsInfoUpdate', {goodsId});
    }
  }
}

singleRun(Pet).then();

module.exports = Pet;
