const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class PlantBean extends Template {
  static scriptName = 'Bean';
  static scriptNameDesc = '种豆得豆';
  static shareCodeTaskList = [];
  static times = 2;
  static concurrent = false;

  static apiOptions = {
    signData: {
      appid: 'ld',
      body: {version: '9.0.0.1'},
    },
  };

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  };

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      beforeGetTaskList: {
        name: 'plantBeanIndex',
        // TODO 并发不支持
        paramFn: () => ({plantUuid: self.shareCodeTaskList.shift()}),
        successFn(data) {
          const msg = _.property('data.helpShareRes.promptText')(data);
          msg && self.log(msg);
          return !_.isEmpty(self.shareCodeTaskList);
        },
        repeat: true,
      },
      // 获取任务列表
      getTaskList: {
        name: 'plantBeanIndex',
        successFn: async (data, api) => {
          // writeFileJSON(data, 'plantBeanIndex.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.taskList')(data) || [];
          self.isFirstLoop() && taskList.push({taskType: 7, taskName: '金融双签', totalNum: 1, gainedNum: 0});
          for (let {
            isFinished: status,
            taskType, taskName,
            totalNum: maxTimes,
            gainedNum: times,
            waitDuration,
          } of taskList) {
            if (status === 1 || [1/*每日签到*/, 2/*邀请好友*/].includes(taskType) || ['好友助力', '评价商品'].includes(taskName)) continue;

            maxTimes = +maxTimes;
            times = +times;
            let list = [];
            const option = {maxTimes, times, waitDuration};
            const itemFinishedFn = o => _.property('taskState')(o) === '2';
            const taskConfig = [
              // 浏览店铺
              [3, 'shopTaskList', ({data}) => _.filter(_.concat(data.goodShopList, data.moreShopList), itemFinishedFn).map(o => _.pick(o, ['shopId', 'shopTaskId'])), 'shopNutrientsTask'],
              // 挑选商品
              [5, 'productTaskList', ({data}) => _.filter(_.filter(data.productInfoList).map(array => array && array[1]), itemFinishedFn).map(o => _.pick(o, ['skuId', 'productTaskId'])), 'productNutrientsTask'],
              // 关注频道
              [10, 'plantChannelTaskList', ({data}) => _.filter(_.concat(data.goodChannelList, data.normalChannelList), itemFinishedFn).map(o => _.pick(o, ['channelId', 'channelTaskId'])), 'plantChannelNutrientsTask'],
            ].find(o => o[0] === taskType);

            if (taskConfig) {
              const [_taskType, listFunctionId, listFn, taskFunctionId] = taskConfig;
              list = await api.doFormBody(listFunctionId).then(listFn);
              _.assign(option, {
                firstFn: async o => {
                  const isSuccess = api.doFormBody(taskFunctionId, o).then(data => ({isSuccess: _.property('data.nutrState')(data) === '1'}));
                  if (_taskType === 3) {
                    await api.delShopFavByTimes(1);
                  } else if (_taskType === 5) {
                    await api.delShopFavByTimes(1);
                  }
                  return isSuccess;
                },
              });
            } else {
              // 其他任务
              _.assign(option, {
                firstFn: async o => {
                  await api.doFormBody('receiveNutrientsTask', {awardType: `${taskType}`});
                },
              });
            }

            result.push({list, option});
          }

          return result;
        },
      },
      doRedeem: {
        name: 'plantBeanIndex',
        successFn: async (data, api) => {
          if (!self.isSuccess(data)) return false;
          const {roundId, bubbleInfos = [], growth} = data.data.roundList[1];
          for (const {nutrientsType} of bubbleInfos) {
            await api.doFormBody('cultureBean', {roundId, nutrientsType});
          }
          const stop = _.isEmpty(bubbleInfos);
          if (stop) {
            self.log(`成长值为: ${growth}`);
            return false;
          }
        },
        repeat: true,
      },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    this.shareCodeTaskList = shareCodes;
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    const data = await api.doFormBody('plantBeanIndex').then(data => data.data);

    const prevRound = _.property('roundList[0]')(data);
    const {roundId} = _.property('roundList[1]')(data) || {};

    if (!prevRound || !roundId) {
      self.log('获取数据出错');
      return;
    }

    // 收集定时豆液
    if (+_.property('timeNutrientsRes.nutrCount')(data) > 0) {
      await api.doFormBody('receiveNutrients', {roundId}).then(data => {
        if (!self.isSuccess(data)) return;
        const nutrients = data.data.nutrients;
        nutrients && self.log(`收集到营养液: ${nutrients}`);
      });
    }

    // 获取豆豆
    if (!prevRound.awardBeans && self.getNowHour() >= 10) {
      await api.doFormBody('receivedBean', {roundId: prevRound.roundId}).then(data => self.log(`获得的豆豆: ${_.property('data.awardBean')(data)}`));
    }
    if (self.getNowHour() >= 22) {
      // 协助朋友采集豆液
      await collectFriendBean();
      // 收集本身豆液
      await self.doApi(api, 'doRedeem');
    }

    async function collectFriendBean() {
      const friendInfoList = await api.doFormBody('plantFriendList', {'pageNum': '1'}).then(data => _.property('data.friendInfoList')(data).filter(o => o.nutrCount));
      if (_.isEmpty(friendInfoList)) return;
      for (const {paradiseUuid} of friendInfoList) {
        await sleep(2);
        const loop = await api.doFormBody('collectUserNutr', {
          roundId,
          paradiseUuid,
        }).then(data => _.property('collectResult')(data) === '1');
        if (!loop) break;
      }
    }
  }
}

module.exports = PlantBean;
