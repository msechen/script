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
            waitDuration,
            taskType,
            scanMarketList,
            followShops,
            followChannelList,
            followGoodList,
          } of taskList) {
            if (!['ScanMarket', 'FollowShop', 'FollowChannel', 'FollowGood'].includes(taskType)) continue;

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
    const _ = self._;

    await handleSign();
    // 喂食最多的
    await handleFeed();
    // 助力后获取狗粮
    if(self.getNowHour() === 23) {
      api.doPath('getFood', void 0, {method: 'GET', taskType: 'InviteUser'});
      api.doPath('getFood', void 0, {method: 'GET', taskType: 'SignEveryDay'});
      api.doPath('getFood', void 0, {method: 'GET', taskType: 'FeedEveryDay'});
      api.doPath('getFood', void 0, {method: 'GET', taskType: 'exchange'});
    }

    // 三餐签到
    async function handleSign() {
      await api.doPath('getFood', void 0, {
        method: 'GET',
        qs: {taskType: 'ThreeMeals'},
      }).then(data => {
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

// helpers
function sign(body, cType = '') {
  let lkt = '1614764172524' || getNowMoment().valueOf();
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
