const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');
const CryptoJS = require('crypto-js');

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
      }, sign()),
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

          // 需要手动到小程序签到
          // await api.doPath('sign', void 0, {qs: {taskType: 'SignEveryDay'}, method: 'GET'});

          // 需要小程序助力
          // const currentPin = await api.doPath('enterRoom/h5', void 0, {body: {}}).then(data => _.property('data.pin')(data));
          // !self.shareCodeTaskList.includes(currentPin) && self.shareCodeTaskList.push(currentPin);
          // let shareList = self.getShareCodeFn();
          // if (shareList.length) {
          //   result.push({
          //     list: shareList, option: {
          //       maxTimes: shareList.length,
          //       firstFn: friendPin => api.doPath('helpFriend', void 0, {method: 'GET', qs: {friendPin}}),
          //     },
          //   });
          // }

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
            if (!['ScanMarket', 'FollowShop', 'FollowChannel', 'FollowGood', 'HelpFeed'].includes(taskType)) continue;

            if (taskType === 'HelpFeed') {
              if (receiveStatus === 'chance_left') {
                const friendList = await api.doPath('getFriends', void 0, {
                  method: 'GET',
                  qs: {itemsPerPage: 20},
                }).then(data => data['datas']) || [];
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
          qs: sign(o, 'application/json'),
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

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }

  static async doCron(api) {
    const self = this;
    const nowHour = self.getNowHour();

    await handleSign();
    await handleFeed(); // 喂食最多的
    await handleRace();
    await handleExchange();
    // 领取狗粮
    if (self.getNowHour() === 23) {
      const foodTaskType = [
        'HelpFeed', // 帮助喂食
        'InviteUser', // 邀请好友
        'SignEveryDay', // 签到
        'FeedEveryDay', // 喂食
        'race', // 竞赛
        'exchange', // 兑换
      ];
      for (const taskType of foodTaskType) {
        await doFeed(api, taskType);
      }
    }

    // 参赛
    async function handleRace() {
      if (nowHour < 9) return;
      const notParticipate = await api.doUrl('https://jdjoy.jd.com/common/pet/combat/detail/v2', {
        method: 'GET',
        qs: {help: false},
      }).then(data => _.property('data.petRaceResult')(data) === 'not_participate');
      if (!notParticipate) return;
      await api.doUrl('https://jdjoy.jd.com/common/pet/combat/match', {
        method: 'GET',
        qs: {teamLevel: 2}, // 只参加双人赛跑
      }).then(data => {
        if (!self.isSuccess(data)) return;
        self.log('参赛成功');
      });
    }

    // 兑换豆豆
    async function handleExchange() {
      if (nowHour !== 16) return;
      const data = await api.doUrl('https://jdjoy.jd.com/common/gift/getBeanConfigs', {method: 'GET'}).then(result => result['data']);
      if (!data) return;
      let beanInfo;
      if (0 <= nowHour && nowHour < 8) {
        beanInfo = data['beanConfigs0'];
      }
      if (nowHour >= 8 && nowHour < 16) {
        beanInfo = data['beanConfigs8'];
      }
      if (nowHour >= 16 && nowHour <= 23) {
        beanInfo = data['beanConfigs0'];
      }
      if (!beanInfo) return;
      for (const {id, leftStock, giftValue, giftName} of beanInfo) {
        // 只兑换500的, 需要8500积分
        if (leftStock === 0 || giftValue !== 500) continue;
        const body = {
          'buyParam': {
            'orderSource': 'pet',
            'saleInfoId': id,
          },
          'deviceInfo': {
            'eid': 'M7UO6SRTFR5GQS7SPKPOGT7ZZB6KH2I7CUXZGVFSPJ5773VII5RHNSVRM4FK4RSLDCBRG3QQUS4WNC5PZ2767E6D3Q',
            'fp': '28c2c6f0199a7790b251a724031be426',
            'deviceType': '',
            'macAddress': '',
            'imei': '',
            'os': '',
            'osVersion': '',
            'ip': '',
            'appId': '',
            'openUUID': '',
            'idfa': '',
            'uuid': '',
            'clientVersion': '',
            'networkType': '',
            'appType': '',
            'sdkToken': 'jdd01KKYHD3TR2D74RQPGTZ4XDKYRETYXJ4W2EKNLXFBWQJ6WSFEJEO345P4SCFDCLATWWWACAWMO7D6XGZLNCUU6BNXYQQUXNGCL4ZLYVZQ01234567',
          },
        };
        await api.doUrl('https://jdjoy.jd.com/common/gift/new/exchange', {
          headers: {
            headers: {
              contentType: 'application/json',
            },
          },
          body,
          qs: sign(body, 'application/json'),
        }).then(data => {
          if (!self.isSuccess(data)) return;
          self.log(`${giftName} 兑换成功!`);
        });
      }
    }

    // 三餐签到
    async function handleSign() {
      await doFeed(api, 'ThreeMeals').then(data => {
        if (!self.isSuccess(data)) return;
        data.data && self.log(`三餐签到获取到的狗粮: ${data.data}`);
      });
    }

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
  return api.doPath('getFood', void 0, {method: 'GET', taskType});
}

// helpers
function sign(body, cType = '') {
  const lkt = getNowMoment().valueOf();
  let keycode = '98c14c997fde50cc18bdefecfd48ceb7';
  let lks = '';
  if (cType.indexOf('json') > 0) {
    lks = CryptoJS.MD5(Base64(AesEncrypt('' + JSON.stringify(sortByLetter(body)))) + '_' + keycode + '_' + lkt).toString();
  } else {
    lks = CryptoJS.MD5('_' + keycode + '_' + lkt).toString();
  }
  return {lkt, lks};
}

function Base64(e) {
  let t = CryptoJS.enc.Utf8.parse(e);
  return CryptoJS.enc.Base64.stringify(t);
}

function AesEncrypt(e) {
  let o = '98c14c997fde50cc18bdefecfd48ceb7';
  let i = CryptoJS.enc.Utf8.parse(o);
  let r = CryptoJS.enc.Utf8.parse('ea653f4f3c5eda12');
  let t = CryptoJS.enc.Utf8.parse(e);
  return CryptoJS.AES.encrypt(t, i, {
    'iv': r,
    'mode': CryptoJS.mode.CBC,
    'padding': CryptoJS.pad.Pkcs7,
  }).ciphertext.toString();
}

function sortByLetter(e, t) {
  if (e instanceof Array) {
    t = t || [];
    for (let a = 0; a < e.length; a++)
      t[a] = sortByLetter(e[a], t[a]);
  } else
    !(e instanceof Array) && e instanceof Object ? (t = t || {},
      Object.keys(e).sort().map(function (a) {
        t[a] = sortByLetter(e[a], t[a]);
      })) : t = e;
  return t;
}

module.exports = Joy;
