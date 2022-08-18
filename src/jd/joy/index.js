const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, matchMiddle, replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');
const Cookie = require('../../lib/cookie');
const JDJRValidator = require('../../lib/JDJRValidator');
const path = require('path');
const CryptoJS = require('crypto-js');
const EncryptH5st = require('../../lib/EncryptH5st');

const reqSources = ['weapp', 'h5'];
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html';

class Joy extends Template {
  static scriptName = 'Joy';
  static scriptNameDesc = '宠汪汪';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;

  static apiOptions() {
    return {
      options: {
        uri: 'https://jdjoy.jd.com/common/pet',
        qs: {
          reqSource: reqSources[1],
          invokeKey: 'qRKHmL4sna8ZOP9F',
        },
        headers: {
          referer: indexUrl,
          origin: 'https://jdjoy.jd.com',
        },
      },
      async formatDataFn(data, options) {
        const {errorCode, errorMessage} = data;
        if (errorCode === 'H0001' || (errorMessage || '').match('验证')) {
          return new Promise(async resolve => {
            let validate;
            try {
              validate = (await new JDJRValidator().run() || {}).validate;
            } catch (e) {
              console.log('JDJRValidator error:');
              console.log(e);
            }
            if (!validate) return resolve(data);
            _.assign(options.qs, {validate});
            resolve(await this.commonDo(options));
          });
        }
        return data;
      },
    };
  }

  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return this._.property('success')(data);
  }

  static async beforeRequest(api) {
    const invokeKey = await api.doGetFileContent(indexUrl).then(data => {
      const scriptReg = /<script type="text\/javascript" src="([^><]+\/(app_\w+_\.js))">/gm;
      const appScriptUrl = scriptReg.exec(data)[1];
      return api.doGetFileContent(appScriptUrl).then(jsContent => {
        // 新的获取方法
        let invokeKey = matchMiddle(jsContent, {reg: /"\/pet\/"],\w="(\w*)",/});
        if (invokeKey) return invokeKey;
        jsContent = jsContent.replace(/.*(?=".css")/, '');
        const jdDogKey = 'jdDog_jdDog';
        const jdDogIndex = matchMiddle(jsContent, {reg: /"(\d+)":\s*"jdDog_jdDog",/});
        const hash = matchMiddle(jsContent.replace(jdDogKey, ''), {reg: new RegExp(`"${jdDogIndex}":\\s*"(\\w+)",`)});
        return api.doGetFileContent(appScriptUrl.replace(path.basename(appScriptUrl), `${jdDogKey}_${hash}_.js`)).then(data => {
          let key = matchMiddle(data, {reg: /{"invokeKey":"(\w*)"}/});
          if (!key) {
            const varKey = matchMiddle(data, {reg: /"invokeKey":(\w*)/});
            key = matchMiddle(data, {reg: new RegExp(`${varKey}="(\\w*)"`)});
          }
          return key;
        });
      });
    });
    invokeKey && (api.options.qs.invokeKey = invokeKey);
    const encryptH5stConfigs = [
      ['petGetPetTaskConfig', '922a5'],
      ['giftGetBeanConfigs', 'd67c8'],
      ['petEnterRoom', '2bba1'],
    ];
    ['doPath', 'doGetPath'].forEach(method => {
      replaceObjectMethod(api, method, async args => {
        !api.originQs && (api.originQs = _.clone(api.options.qs));
        !api.options.qs && (api.options.qs = _.clone(api.originQs));
        const {reqSource} = api.originQs;
        _.assign(api.options.headers, encrypt(api.options.qs.invokeKey));
        const [functionId, form, options = {}] = args;
        const targetConfig = encryptH5stConfigs.find(([fun]) => fun.toLowerCase().match(_.first(functionId.split('/')).toLowerCase()));
        if (targetConfig) {
          _.merge(options, {
            uri: 'https://api.m.jd.com/api',
            method: 'POST',
            headers: {
              origin: 'https://pro.m.jd.com',
              referrer: 'https://pro.m.jd.com/',
            },
            qs: {
              client: '',
              clientVersion: '',
              appid: 'jdchoujiang_h5',
            },
          });
          const t = getMoment().valueOf();
          let qs = _.merge({}, {body: {reqSource}}, {t}, options.qs);
          let [fun, appId, encryptH5st] = targetConfig;
          !encryptH5st && (encryptH5st = new EncryptH5st({appId}));
          qs = await encryptH5st.sign({functionId: fun, ...qs});
          ['_stk', '_ste'].forEach(key => {
            delete qs[key];
          });
          _.merge(qs, {
            functionId: fun,
          });
          delete api.options.qs;
          options.qs = qs;
        }
        return [functionId, form, options];
      });
    });
    api.options.qs.reqSource = reqSources[this.currentTimes - 1];

    function encrypt(key) {
      const lkt = getMoment().valueOf();
      const lks = CryptoJS.MD5(`${key}${lkt}`).toString();
      return {lkt, lks};
    }
  }

  static apiNamesFn() {
    const self = this;

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

          // 助力
          // const {pin} = await api.doPath('enterRoom/h5', void 0, {body: {}}).then(_.property('data'));
          // self.updateShareCodeFn(pin);
          // for (const friendPin of self.getShareCodeFn()) {
          //   await api.doGetPath('helpFriend', {friendPin, reqSource: reqSources[1]});
          // }

          // 限时货架
          const deskGoods = await api.doGetPath('getDeskGoodDetails').then(data => _.property('data.deskGoods')(data)) || [];

          const result = [];

          const taskList = _.property('datas')(data) || [];
          if (!_.isEmpty(deskGoods)) {
            const deskGoodList = deskGoods.filter(o => !o.status).map(o => ({
              taskType: 'ScanDeskGood',
              sku: o.sku,
            }));
            taskList.push({
              joinedCount: 0,
              taskType: 'ScanDeskGood',
              deskGoodList: deskGoodList,
              taskChance: deskGoodList.length,
            });
          }
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
            deskGoodList,
          } of taskList) {
            // 收集狗粮
            // 包含三餐签到
            if (receiveStatus === 'unreceive') {
              await doFeed(api, taskType);
              continue;
            }

            if (!['ScanDeskGood', 'ViewVideo', 'race', 'ScanMarket', 'FollowShop', 'FollowChannel', 'FollowGood'/*, 'HelpFeed'*/].includes(taskType)) continue;

            if (taskType === 'HelpFeed') {
              if (receiveStatus === 'chance_left') {
                let friendList = await getFriends(api);
                if (_.isEmpty(friendList)) friendList = await getFriends(api);
                const enableHelpList = friendList.filter(o => o['status'] === 'not_feed' && o['points']);
                let helpFeedTimes = 1;
                for (const {friendPin} of enableHelpList) {
                  if (helpFeedTimes === 0) return;
                  await api.doGetPath('helpFeed', void 0, {friendPin}).then(data => {
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

            let list = (scanMarketList || followShops || followChannelList || followGoodList || deskGoodList || []).filter(o => !o.status).map(o => {
              return _.assign({}, scanMarketList ? {
                marketLink: o.marketLinkH5,
                taskType,
              } : (followChannelList ? {
                channelId: o.channelId,
                taskType,
              } : (followGoodList ? {sku: o.sku} : (deskGoodList ? o : {shopId: o.shopId}))));
            });

            if (taskType === 'ViewVideo') {
              list = [];
              for (let i = times || 0; i < maxTimes; i++) {
                list.push({taskType});
              }
            }

            if (_.isEmpty(list)) continue;

            const option = {maxTimes, times, waitDuration};
            _.assign(option, {
              async firstFn(o) {
                const newO = _.assign({}, o);
                delete newO.taskType;
                if (!_.isEmpty(newO)) {
                  await handleIconClick(taskType === 'ScanDeskGood' ? 'follow_good_desk' : _.snakeCase(taskType), _.values(newO)[0]);
                }
                const notScan = ['FollowShop', 'FollowGood'].includes(taskType);
                const functionId = notScan ? _.camelCase(taskType) : 'scan';
                await sleep(5);
                return api[notScan ? 'doPath' : 'doBodyPath'](functionId, o);
              },
            });

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
                  api.log('参赛成功');
                });
              } else if (petRaceResult === 'unreceive') {
                await api.doPath('combat/receive', void 0, {
                  method: 'GET',
                }).then(data => {
                  if (!self.isSuccess(data)) return api.log(data);
                  api.log(`获取到积分: ${winCoin}`);
                });
                return handleRace();
              }
            });
          }

          async function handleIconClick(iconCode, linkAddr) {
            return api.doGetPath('icon/click', {iconCode, linkAddr});
          }

          return result;
        },
      },
      doRedeem: {
        name: 'enterRoom/h5',
        paramFn: o => [void 0, {body: {}}],
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          const {petCoin, petFood, petLevel} = data.data || {};
          api.log(`现有积分: ${petCoin}, 现有狗粮: ${petFood}, 宠物等级: ${petLevel}`);
        },
      },
    };
  };

  static async doCron(api) {
    const self = this;

    await self.beforeRequest(api);

    await handleFeed(+(self.getCurrentEnv('JD_JOY_FEED_INDEX') || 3)); // 按需喂养

    // 喂食
    async function handleFeed(index = 0) {
      if (index < 0) return;
      const allFeedCount = [10, 20, 40, 80];
      const feedCount = allFeedCount[index];
      await api.doGetPath('feed', {feedCount}).then(data => {
        if (data.errorCode === 'feed_ok') {
          api.log(`喂食成功, 消耗${feedCount}g狗粮`);
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
  return api.doGetPath('getFood', {taskType}).then(data => {
    data.errorCode === 'received' && api.log(`获得${data.data}g狗粮`);
  });
}

async function getFriends(api) {
  return api.doGetPath('getFriends', {itemsPerPage: 20}).then(data => data['datas']) || [];
}

singleRun(Joy, ['start', 'cron']).then();

module.exports = Joy;
