const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, parallelRun} = require('../../lib/common');
const {sleepTime} = require('../../lib/cron');
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

    let signSucceedTokens = [];
    // token, venderId, id
    let shopInfos = [
      '4D03AD91B666A22112A8907AE843A2AC',
      'EB1B18EF4CE3D6949A2A494C30EFB808',
      '2828E84587A833065809BBD91500D7B8',
      'ED0484B6E558412049454D0B4D56134F',
      '881C1110754A4604CAAA17A3863FA1D2',
      'BA728C46ED125201EFB8272170F954FD',
      '3576A93AA16AD4A6DB26A34F1B4255B6',
      '1A5BE7E4CFC35C680AE3960B48FE0851',
      'B9CA263D630D8DD4D97DE0D21D38A922',
      '83DAE2A57BC428B803D697C48C0E39D2',
      '0D54B22EDAA3813EEBE8215C9316042F',
      'F0E07D3532B2B54818A46643104B9B88',
      '6C426C99ECF58AC16905C2FFCD9B8CC1',
      '7F979A10D6711DB895E95034D4F10AFF',
      '653F35B5EDF5C1DDC546448C6F521562',
      'CA2EFCE4014C7BD48EFD82C12F7A1DD9',
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
    // 避免签到不成功需要再重复一次
    await sleep();
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
            api.log(`${token}: 402 已经失效`);
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
        const allPrizeRuleList = _.concat(/*_.property('data.prizeRuleList')(data), */_.property('data.continuePrizeRuleList')(data));
        const prizeRules = allPrizeRuleList.map(({prizeList, days, userPrizeRuleStatus}) => {
          if (userPrizeRuleStatus === 2) return '';
          return _.filter(prizeList.map(({type, discount}) => {
            if (![4/*豆豆*/, 14/*红包*/].includes(type)) return '';
            return `${days ? days : '每'}天${Math.floor(discount)}${type === 4 ? '豆' : '分'}`;
          })).join();
        }).filter(str => str);
        const notPrize = _.isEmpty(prizeRules);
        const prizeRuleMsg = notPrize ? '' : `奖品: ${prizeRules.join(', ')}`;
        api.log(_.filter([`${token} 已签到${currentSignDays}天`, prizeRuleMsg]).join(', '));
        return notPrize;
      });
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
