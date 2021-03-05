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
      '556BA095CC32BAA17664C9EABD252085',
      '07CBF9FC8DE65E3880ABD05B9A952866',
      // 2.20新增
      '9EAE21AA94BC979D0C7D56F428526393',
      // 2.25新增
      '0FEBDDE1FBE9618E670D8242EFFFD643',
      'D6A88099F516166806DA1A43892AC212',
      '1AFDEE76E0663DE71177237A45E1E2A3',
      '5A7A64558770D0EB369A7C7074F0C111',
      'B38993125BB0EDC4612E2B90C9D31D3F',
      'B3A45DCD7E724CB47B4BB165692AAFFF',
      '3D7D91F53126D7D82BB0DE0FE9937BBA',
      '1868B2896C16E38333DE6C2A65B5F57F',
      'E64E528CB5003BE6A3B412930F60E0C0',
      'B0B96FE2BB806FFA8E736ED485511ECE',
      'E3C7A0B8C9CE2893E65B077BB98EF697',
      '1D95737DCD77A229AB1A935A32C79C85',
      // 脚本新增插入位置
    ];

    const nowHour = self.getNowHour();
    if (nowHour !== 23) {
      await updateShopInfos(false);
      return handleSign();
    }

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
    async function updateShopInfos(addOtherInfo = true) {
      shopInfos = shopInfos.map(v => _.concat(v));
      for (let shopInfo of shopInfos) {
        if (shopInfo.length !== 1) continue;
        const token = shopInfo[0];
        await getActivityInfo(token).then(async data => {
          if (!self.isSuccess(data)) return shopInfo.pop();
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
        const continuePrizeRuleList = _.property('data.continuePrizeRuleList')(data);
        const prizeRules = continuePrizeRuleList.map(({prizeList, days, userPrizeRuleStatus}) => {
          if (userPrizeRuleStatus === 2) return '';
          const beanPrize = prizeList.find(({type}) => type === 4);
          if (!beanPrize) return '';
          return `${days}天${Math.floor(beanPrize.discount)}豆`;
        }).filter(str => str);
        self.log(`${token} 已签到${currentSignDays}天, 奖品: ${prizeRules.join(', ')}`);
        return _.isEmpty(prizeRules);
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
