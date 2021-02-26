const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment, parallelRun} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class SignShop extends Template {
  static scriptName = 'SignShop';
  static scriptNameDesc = '店铺签到(web)';
  static needOriginH5 = true;
  static times = 1;
  static concurrent = true;
  static concurrentOnceDelay = 0;

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

    // token, venderId, id
    let shopInfos = [
      // 2.22新增
      'C842289CF7BD51237D794683405D614A',
      'F6AA3E2F95A09A7F9DAC9898C7E9709F',
      'CD5F5AAC5E9BAB0617038720FD49A3FE',
      '556BA095CC32BAA17664C9EABD252085',
      '3282B7F26FDBA6D6B823A8D4AB89D734',
      '1F3B4F74428203E454CDA0CF23893197',
      '07CBF9FC8DE65E3880ABD05B9A952866',
      // 2.20新增
      '9EAE21AA94BC979D0C7D56F428526393',
      'AFC577CD1825D16CB45679BFA2D2947A',
      // 2.21新增
      '32DEC15741D404DBA4EB19ECCF1B2C6E',
      // 2.4新增
      '28228D1B5414046523D6E67DFC5B9E72',
      // 2.6新增
      // 2.25新增
      'CBED3E212CD0E6CF6559BA319A67F191',
      '2AEB0E1E6482C7C653899B8A84816B9D',
      '54EAC92DC04508E441CA99EB2234CA80',
    ];

    const nowHour = self.getNowHour();
    if (nowHour !== 23) return handleSign();

    await handleTimedExecution(nowHour);

    async function handleTimedExecution(nowHour) {
      if (nowHour !== 23) return;
      await updateShopInfos();
      const nextMoment = getNowMoment();
      nextMoment.add(1, 'hour');
      nextMoment.startOf('hour');
      const interval = nextMoment.valueOf() - getNowMoment().valueOf();
      await sleep(Math.floor(interval / 1000));
      // if (self.getNowHour() === 23) return handleTimedExecution(self.getNowHour());
      await handleSign();
      // 避免签到不成功需要再重复一次
      await sleep();
      await handleSign();
    }

    async function handleSign(listInfo = false) {
      // token, venderId, id
      const list = shopInfos;

      await parallelRun({
        list,
        runFn: v => (listInfo ? handleListShopInfo : doSign)(...[].concat(v)),
      });
    }

    // 补全shopInfos
    async function updateShopInfos() {
      shopInfos = shopInfos.map(v => _.concat(v));
      for (let shopInfo of shopInfos) {
        if (shopInfo.length !== 1) continue;
        await getActivityInfo(shopInfo[0]).then(data => {
          if (!self.isSuccess(data)) return shopInfo.pop();
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
        const continuePrizeRuleList = _.property('data.continuePrizeRuleList')(data);
        const prizeRules = continuePrizeRuleList.map(({prizeList, days, userPrizeRuleStatus}) => {
          if (userPrizeRuleStatus === 2) return '';
          const beanPrize = prizeList.find(({type}) => type === 4);
          if (!beanPrize) return '';
          return `${days}天${Math.floor(beanPrize.discount)}豆`;
        }).filter(str => str);
        self.log(`${token} 已签到${currentSignDays}天, 奖品: ${prizeRules.join(', ')}`);
      });
    }

    async function doSign(token, venderId, id) {
      if (venderId) {
        return signCollectGift(venderId, id, token);
      }
      // 该逻辑不适用于0点签到, 仅做补缺
      return getActivityInfo(token).then(data => {
        if (!self.isSuccess(data)) {
          return self.log(`${token}: ${data.msg}`);
        }
        if (_.property('data.userActivityStatus')(data) === 2) {
          return self.log(`${token}: 已经签到`);
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
          allMsg.push('签到成功');
        } else {
          allMsg.push(data.msg);
        }
        self.log(allMsg.join(': '));
        return data;
      });
    }
  }
}

module.exports = SignShop;
