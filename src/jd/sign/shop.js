const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, parallelRun, printLog} = require('../../lib/common');
const {sleepTime} = require('../../lib/cron');
const _ = require('lodash');
const {processInAC} = require('../../lib/env');

class SignShop extends Template {
  static scriptName = 'SignShop';
  static scriptNameDesc = '店铺签到(web)';
  static needOriginH5 = true;
  static times = 1;
  static concurrent = true;
  static concurrentOnceDelay = 0;
  static dirname = __dirname;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      qs: {
        loginType: 2,
        appid: 'interCenter_shopSign',
      },
    },
  };

  static isSuccess(data) {
    return _.property('code')(data) === 200;
  }

  static async doMain(api) {
    const self = this;

    // 签到页面url
    // https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=

    let signSucceedTokens = [];
    // token, venderId, id
    let shopInfos = [
      'E0E000F7FFCC76BD6B5BD2E62F445670',
      '4101794DF8B076B2EAEE29E9A986540A',
      '03B4F891150FB4EBC1231233F8A8C912',
      'DA5D2FBC54C6C6D8597E10388BAE7449',
      '4A5E3981110C0BC21018E291032F8815',
      '7E01F24A06CF6857C40C53DC4CA71581',
      '67BE917CB7C0C4A6E0AFE6B62C93943B',
      // 脚本新增插入位置
    ];

    const nowHour = self.getNowHour();
    if (nowHour !== 23) {
      await updateShopInfos(false);
      return handleSign();
    }

    await updateShopInfos();
    await sleepTime(24);
    await handleSign();

    async function handleSign(listInfo = false) {
      // token, venderId, id
      const list = shopInfos.filter(item => !signSucceedTokens.includes(_.head(_.concat(item))));

      await parallelRun({
        list,
        runFn: v => (listInfo ? handleListShopInfo : doSign)(...[].concat(v)),
      });
    }

    // 补全shopInfos
    async function updateShopInfos(addOtherInfo = true) {
      shopInfos = shopInfos.map(v => _.concat(v));
      for (let shopInfo of shopInfos) {
        if (shopInfo.length !== 1) continue;
        const token = shopInfo[0];
        await getActivityInfo(token).then(async data => {
          if (!self.isSuccess(data)) {
            logShopSignInfo(`${token}: 402 已经失效`);
            return shopInfo.pop();
          }
          const notSign = await handleListShopInfo(token);
          if (notSign) return shopInfo.pop();
          if (!addOtherInfo) return;
          shopInfo.push(data.data.venderId);
          shopInfo.push(data.data.id);
        });
      }
      shopInfos = shopInfos.filter(v => !_.isEmpty(v));
    }

    async function handleListShopInfo(token) {
      const currentSignDays = await api.doGetBody('interact_center_shopSign_getSignRecord', {token}).then(data => _.property('data.days')(data));
      return getActivityInfo(token).then(data => {
        if (!self.isSuccess(data)) return;
        // TODO 待修正每日签到是否有获得的逻辑
        const allPrizeRuleList = _.concat(_.property('data.prizeRuleList')(data), _.property('data.continuePrizeRuleList')(data));
        const prizeTypes = {
          4: '豆',
          10: 'E卡(元)',
          14: '红包(分)',
        };
        const prizeRules = allPrizeRuleList.map(({prizeList, days, userPrizeRuleStatus}) => {
          if (userPrizeRuleStatus === 2) return '';
          return _.filter(prizeList.map(({type, discount, userPirzeStatus}) => {
            if (!Object.keys(prizeTypes).map(v => +v).includes(type) || userPirzeStatus !== 1) return '';
            return `${days ? days : '每'}天${Math.floor(discount)}${prizeTypes[type]}`;
          })).join();
        }).filter(str => str);
        const notPrize = _.isEmpty(prizeRules);
        const prizeRuleMsg = notPrize ? '' : `奖品: ${prizeRules.join(', ')}`;
        const logMsg = _.filter([`${token} 已签到${currentSignDays}天`, prizeRuleMsg]).join(', ');
        logShopSignInfo(logMsg);
        return notPrize;
      });
    }

    function logShopSignInfo(msg) {
      api.log(msg);
      if (!processInAC()) {
        api.log(msg, self.getFilePath('shop.log'));
      }
    }

    async function doSign(token, venderId, id) {
      if (venderId) {
        return signCollectGift(venderId, id, token);
      }
      // 该逻辑不适用于0点签到, 仅做补缺
      return getActivityInfo(token).then(data => {
        if (!self.isSuccess(data)) {
          return api.log(`${token}: ${data.msg}`);
        }
        if (_.property('data.userActivityStatus')(data) === 2) {
          return api.log(`${token}: 已经签到`);
        }
        return signCollectGift(data.data.venderId, data.data.id, token);
      });
    }

    // 获取店铺信息
    async function getActivityInfo(token) {
      return api.doGetBody('interact_center_shopSign_getActivityInfo', {token});
    }

    // 签到
    async function signCollectGift(venderId, activityId, name) {
      let allMsg = [name || vernderId];
      return api.doGetBody('interact_center_shopSign_signCollectGift', {
        venderId,
        activityId,
      }, {needDelay: false}).then(data => {
        if (self.isSuccess(data)) {
          signSucceedTokens.push(name);
          allMsg.push('签到成功');
        } else {
          allMsg.push(data.msg);
        }
        api.log(allMsg.join(': '));
        return data;
      });
    }
  }
}

singleRun(SignShop).then();

module.exports = SignShop;
