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
      'E63B29F4126094A60939FD7040DC712B',
      '6E7CD5A4159DC56A5F923EC6E1B85289',
      '3B27B2B9E70249C339D66F27B7E133F0',
      '2081FAD66E24AC009C76DD2ED7A76E9E',
      '183F4656F3E62E098B53D1D32C6D4BE9',
      '48AB446322F3638B43FDA1EF4B58BE9C',
      '22A590A8142A09B4E8FDDF9F23D3007D',
      'BB1B5B3D628BD9A9E5D6A22C53CCEAAD',
      '37DD9E369A7F419F6839115E95260AB7',
      '2FBCD4375798D77FFC2FEBD3E9AFE43E',
      'CCB11192ED79F4AF11EABBD732B26874',
      'A9CE4167FA57EF0594F624D385A42D05',
      '28BFC7A27A70029CE8C951412C38469D',
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
      // 同时请求的情况下接口做了限制
      // {"code":"-1","echo":"com.jd.jsf.gd.error.RpcException: [JSF-22211]Invocation of com.jd.interact.center.client.api.color.service.read.ShopSignActivityReadService.getActivityInfo of app: is over invoke limit:[20], please wait next period or add upper limit."}
      await sleep(api.currentCookieTimes * 2 * shopInfos.length);
      for (let shopInfo of shopInfos) {
        if (shopInfo.length !== 1) continue;
        const token = shopInfo[0];
        await sleep(2);
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
