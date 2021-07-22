const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

const indexUrl = 'https://carry.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html';

class Fruit extends Template {
  static scriptName = 'Fruit';
  static scriptNameDesc = '东东农场';
  static times = 1;
  static apiOptions = {
    options: {
      qs: {
        appid: 'wh5',
      },
      form: {
        body: {'version': 14, 'channel': 1, 'babelChannel': 0},
      },
      headers: {
        referer: indexUrl,
      },
    },
    formatDataFn(data) {
      const amountLog = data => {
        _.pick(data, ['amount', 'addEnergy', 'addWater']);
        const amount = _.first(_.values(_.pick(data, ['amount', 'addEnergy', 'addWater'])));
        amount && this.log(`获取的水滴数: ${amount}`);
      };
      amountLog(data);
      return data;
    },
  };

  static isSuccess(data) {
    return _.property('code')(data) === '0';
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const needHarvest = false;

    // 指定浇水次数
    const waterTimes = +(process.env.JD_FRUIT_WATER_TIMES || 0);
    if (waterTimes) return handleWaterGoodForFarm(waterTimes);
    // 浇水到成熟
    if (needHarvest) return logFarmInfo(true);

    const {
      farmUserPro: {shareCode: currentShareCode},
      funCollectionHasLimit,
      canGotNewUserToday,
    } = await handleInitForFarm();

    // TODO 获取浇水阶段性奖励
    false && await api.doFormBody('gotStageAwardForFarm', {type: 1});

    // 新手任务获取水滴
    if (canGotNewUserToday) {
      await api.doFormBody('gotNewUserTaskForFarm');
    }

    patchShareCodeWithDefault();

    // 仅执行一次
    if (self.getNowHour() < 5) {
      await handleDoShare();
    }

    !funCollectionHasLimit && await getFullCollectionReward();
    await handleGetShareFinished();
    await handleDoTaskList();
    await handleClockIn();
    await logFarmInfo();

    // 增加默认助力码
    function patchShareCodeWithDefault() {
      [
        '9675151b3f1645d2afea9afb44c44716',
        '2886e4326e104eecb117f7a32732cda3',
      ].forEach(code => {
        if ([currentShareCode, ...shareCodes].includes(code)) return;
        shareCodes.push(code);
      });
    }

    async function handleDoShare() {
      for (const shareCode of shareCodes) {
        await sleep(2);
        await handleInitForFarm(shareCode).then(data => {
          const {helpResult} = data;
          if (self.isSuccess(helpResult)) {
            api.log(`给 ${_.property('masterUserInfo.nickName')(helpResult) || 'unknown'} 助力成功`);
          }
        });
      }
    }

    // 获取助力人数满的奖励
    async function handleGetShareFinished() {
      const {masterGotFinal, masterHelpPeoples} = await api.doFormBody('masterHelpTaskInitForFarm');
      if (!masterGotFinal && (masterHelpPeoples.length === 5)) {
        await api.doFormBody('masterGotFinishedTaskForFarm');
      }
    }

    // 任务列表
    async function handleDoTaskList() {
      const taskData = await api.doFormBody('taskInitForFarm');
      const {
        // TODO orderInit 获取水滴
        // TODO treasureBoxInit 获取水滴
        signInit: {todaySigned},
        gotBrowseTaskAdInit: {userBrowseTaskAds},
        firstWaterInit: {firstWaterFinished},
        totalWaterTaskInit: {totalWaterTaskTimes, totalWaterTaskLimit, totalWaterTaskFinished},
      } = taskData;

      if (!todaySigned) {
        await api.doFormBody('signForFarm');
      }

      for (const {advertId, time, limit, hadFinishedTimes} of userBrowseTaskAds) {
        if (limit === hadFinishedTimes) continue;
        await handleBrowse(advertId, time || 6);
      }
      const waterTimes = totalWaterTaskLimit - totalWaterTaskTimes;
      waterTimes > 0 && await handleWaterGoodForFarm(waterTimes);
      !firstWaterFinished && await api.doFormBody('firstWaterTaskForFarm');
      !totalWaterTaskFinished && await api.doFormBody('totalWaterTaskForFarm');

      await handleWaterRain(taskData);
      await handleWaterFriendForFarm(taskData);
      await handleGotThreeMeal(taskData);

      async function handleBrowse(advertId, time) {
        await api.doFormBody('browseAdTaskForFarm', {advertId, type: time ? 0 : 1});
        if (!time) return;
        await sleep(time);
        await api.doFormBody('browseAdTaskForFarm', {advertId, type: 1});
      }

      // 采集雨滴, 一天两次
      async function handleWaterRain(taskData) {
        const {
          waterRainInit: {winTimes, config: {maxLimit}},
        } = taskData;
        if (winTimes < maxLimit) {
          await api.doFormBody('waterRainForFarm', {type: 1, hongBaoTimes: 100});
        }
      }

      // 给好友浇水
      async function handleWaterFriendForFarm(taskData) {
        let {
          waterFriendTaskInit: {waterFriendCountKey, waterFriendMax, waterFriendGotAward},
        } = taskData;
        if (waterFriendGotAward) return;
        // 优先给 shareCode 浇水
        for (const shareCode of shareCodes) {
          await handleWaterFriend(shareCode);
        }
        // TODO 给朋友列表浇水

        if (waterFriendCountKey >= waterFriendMax) {
          await api.doFormBody('waterFriendGotAwardForFarm');
        }

        async function handleWaterFriend(shareCode) {
          if (waterFriendCountKey >= waterFriendMax) return;
          await sleep(2);
          return api.doFormBody('waterFriendForFarm', {shareCode}).then(data => {
            if (!self.isSuccess(data)) return;
            ++waterFriendCountKey;
          });
        }
      }

      // 三餐签到
      async function handleGotThreeMeal(taskData) {
        const {gotThreeMealInit: {f: threeMealFinished}} = taskData;
        !threeMealFinished && await api.doFormBody('gotThreeMealForFarm');
      }
    }

    // 连续签到
    async function handleClockIn() {
      await api.doFormBody('clockInInitForFarm').then(async data => {
        if (!self.isSuccess(data)) return;

        const {todaySigned, totalSigned, gotClockInGift, themes} = data;
        !todaySigned && await api.doFormBody('clockInForFarm', {type: 1});
        // 总签到获取水滴
        if (totalSigned === 7 && !gotClockInGift) {
          await api.doFormBody('clockInForFarm', {type: 2});
        }

        // 限时关注得水滴
        for (const {id, hadGot} of themes) {
          if (hadGot) continue;
          await api.doFormBody('clockInFollowForFarm', {id, type: 'theme', step: 1});
          await sleep(2);
          await api.doFormBody('clockInFollowForFarm', {id, type: 'theme', step: 2});
        }
      });
    }

    // 输出日志
    async function logFarmInfo(needHarvest = false) {
      return handleInitForFarm().then(async data => {
        const {farmUserPro: {treeEnergy, treeTotalEnergy, totalEnergy}, farmWinGoods} = data;
        if (!treeTotalEnergy) {
          // TODO 种植水果
          const targetGood = _.maxBy(farmWinGoods, 'prizeLevel');
          false && targetGood && await handleChoiceGoodsForFarm(targetGood.type);
          return api.log('目前没有种植水果');
        }
        const remainEnergy = treeTotalEnergy - treeEnergy;
        let msg = `需要总水滴数为: ${treeTotalEnergy}, 收成还差水滴数: ${remainEnergy}, 当前水滴数: ${totalEnergy}`;
        const canHarvest = remainEnergy <= totalEnergy;
        canHarvest && (msg += ', 可以收成了!!!');
        api.log(msg);
        if (needHarvest && canHarvest) {
          await handleWaterGoodForFarm(remainEnergy / 10);
        }
      });
    }

    // 点小鸭子
    async function getFullCollectionReward() {
      return api.doFormBody('getFullCollectionReward', {type: 2}).then(data => {
        if (self.isSuccess(data)) return getFullCollectionReward();
      });
    }

    async function handleWaterGoodForFarm(times) {
      if (process.env.JD_FRUIT_WATER_DISABLE) return;
      let successTimes = 0;
      for (let i = 0; i < times; i++) {
        await sleep(2);
        const canNext = await api.doFormBody('waterGoodForFarm').then(data => {
          if (self.isSuccess(data)) {
            successTimes++;
            return true;
          }
        });
        if (!canNext) return;
      }
      successTimes && api.log(`成功浇水 ${successTimes} 次`);
    }

    async function handleInitForFarm(shareCode) {
      const farmData = await api.doFormBody('initForFarm', {shareCode});
      if (_.get(farmData, 'todayGotWaterGoalTask.canPop')) {
        // 被水滴砸中
        await api.doFormBody('gotWaterGoalTaskForFarm', {type: 3});
      }
      return farmData;
    }

    // 种树
    async function handleChoiceGoodsForFarm(goodsType) {
      // 如果没有, 则种植最高等级的
      if (!goodsType) {
        const {prizeLevelList} = await api.doFormBody('getExchangeLevelList');
        const {hasPlant, currentGoodList} = _.maxBy(prizeLevelList, 'prizeLevel');
        if (hasPlant) return;
        goodsType = currentGoodList[0].goodsType;
      }
      return api.doFormBody('choiceGoodsForFarm', {
        'imageUrl': '',
        'nickName': '',
        'shareCode': '',
        goodsType,
        'type': '0',
      }).then(data => {
        api.log(JSON.stringify(data));
      });
    }
  }
}

module.exports = Fruit;
