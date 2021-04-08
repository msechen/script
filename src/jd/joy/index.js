const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');
const {encrypt} = require('./api');

class Joy extends Template {
  static scriptName = 'Joy';
  static scriptNameDesc = '宠汪汪';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://jdjoy.jd.com/common/pet',
      qs: _.assign({
        reqSource: 'h5',
      }, encrypt()),
      headers: {
        referer: 'https://jdjoy.jd.com/pet/index',
        origin: 'https://jdjoy.jd.com',
      },
    },
    signData: {},
  };
  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return this._.property('success')(data);
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getPetTaskConfig',
        paramFn: () => [void 0, {
          method: 'GET',
        }],
        async successFn(data, api) {
          // writeFileJSON(data, 'getPetTaskConfig.json', __dirname);

          if (!self.isSuccess(data)) return [];

          // 签到和助力都需要手动到小程序

          const result = [];

          const taskList = _.property('datas')(data) || [];
          for (let {
            taskChance: maxTimes,
            joinedCount: times,
            receiveStatus,
            waitDuration,
            taskType,
            scanMarketList,
            followShops,
            followChannelList,
            followGoodList,
          } of taskList) {
            // 收集狗粮
            // 包含三餐签到
            if (receiveStatus === 'unreceive') {
              await doFeed(api, taskType);
              continue;
            }

            if (!['race', 'ScanMarket', 'FollowShop', 'FollowChannel', 'FollowGood'/*, 'HelpFeed'*/].includes(taskType)) continue;

            if (taskType === 'HelpFeed') {
              if (receiveStatus === 'chance_left') {
                let friendList = await getFriends(api);
                if (_.isEmpty(friendList)) friendList = await getFriends(api);
                const enableHelpList = friendList.filter(o => o['status'] === 'not_feed' && o['points']);
                let helpFeedTimes = 1;
                for (const {friendPin} of enableHelpList) {
                  if (helpFeedTimes === 0) return;
                  await api.doPath('helpFeed', void 0, {
                    method: 'GET', qs: {friendPin},
                  }).then(data => {
                    if (!self.isSuccess(data)) return;
                    helpFeedTimes--;
                  });
                }
              }
              continue;
            }

            if (taskType === 'race') {
              await handleRace();
              continue;
            }

            times = times || void 0;
            maxTimes = maxTimes || void 0;

            let list = (scanMarketList || followShops || followChannelList || followGoodList || []).filter(o => !o.status).map(o => {
              return _.assign({reqSource: 'h5'}, scanMarketList ? {
                marketLink: o.marketLinkH5,
                taskType,
              } : (followChannelList ? {
                channelId: o.channelId,
                taskType,
              } : (followGoodList ? {sku: o.sku} : {shopId: o.shopId})));
            });

            const option = {maxTimes, times, waitDuration};
            if (taskType === 'FollowShop') {
              _.assign(option, {
                firstFn: o => api.doPath('followShop', o),
              });
            }
            if (taskType === 'FollowGood') {
              _.assign(option, {
                firstFn: o => api.doPath('followGood', o),
              });
            }

            result.push({list, option});
          }

          // 参赛
          async function handleRace() {
            const nowHour = self.getNowHour();
            if (nowHour < 9) return;
            await api.doUrl('https://jdjoy.jd.com/common/pet/combat/detail/v2', {
              method: 'GET',
              qs: {help: false},
            }).then(async data => {
              const {petRaceResult, winCoin} = _.property('data')(data) || {};
              if (petRaceResult === 'not_participate') {
                await api.doUrl('https://jdjoy.jd.com/common/pet/combat/match', {
                  method: 'GET',
                  qs: {teamLevel: 2}, // 只参加双人赛跑
                }).then(data => {
                  if (!self.isSuccess(data)) return;
                  self.log('参赛成功');
                });
              } else if (petRaceResult === 'unreceive') {
                await api.doPath('combat/receive', void 0, {
                  method: 'GET',
                }).then(data => {
                  if (!self.isSuccess(data)) return;
                  self.log(`获取到积分: ${winCoin}`);
                });
                return handleRace();
              }
            });
          }

          return result;
        },
      },
      doTask: {
        name: 'scan',
        paramFn: o => [void 0, {
          body: o,
          headers: {
            contentType: 'application/json',
          },
          qs: encrypt(o, true),
        }],
      },
      doRedeem: {
        name: 'enterRoom/h5',
        paramFn: o => [void 0, {body: {}}],
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          const {petCoin, petFood, petLevel} = data.data || {};
          self.log(`现有积分: ${petCoin}, 现有狗粮: ${petFood}, 宠物等级: ${petLevel}`);
        },
      },
    };
  };

  static async doCron(api) {
    const self = this;

    await handleFeed(); // 喂食最多的

    // 喂食
    async function handleFeed(index = 3) {
      if (index < 0) return;
      const allFeedCount = [10, 20, 40, 80];
      const feedCount = allFeedCount[index];
      await api.doPath('feed', void 0, {
        method: 'GET',
        qs: {feedCount},
      }).then(data => {
        if (data.errorCode === 'feed_ok') {
          self.log(`喂食成功, 消耗${feedCount}g狗粮`);
          return;
        }
        if (data.errorCode === 'food_insufficient') {
          return handleFeed(--index);
        }
      });
    }
  }
}

async function doFeed(api, taskType) {
  return api.doPath('getFood', void 0, {method: 'GET', qs: {taskType}}).then(data => {
    data.errorCode === 'received' && Joy.log(`获得${data.data}g狗粮`);
  });
}

async function getFriends(api) {
  return api.doPath('getFriends', void 0, {
    method: 'GET',
    qs: {itemsPerPage: 20},
  }).then(data => data['datas']) || [];
}

module.exports = Joy;
