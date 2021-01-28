const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class SignShop extends Template {
  static scriptName = 'SignShop';
  static scriptNameDesc = '店铺web签到';
  static needOriginH5 = true;
  static times = 1;
  static concurrent = true;

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

    // TODO 应该需要进行定时启动
    await handleSign();

    async function handleSign() {
      // token, venderId, id
      const allParams = [
        '795594DC704FCBFA3F9CB5062863C26D',
        'D71848E997002DC4F23CA79DB33BF16B',
        '084DE3C6133B2205154AA6BF721C1612',
        'BF1E1B7C2178C631D7D9B9D1AD878234',
        '838E318ADAEEADF00A67AF662ECFF608',
        '5FD802672EC9CC128B61685DDFDECF17',
        'ADF4DEFD75018C095A87C6DFE8D93262',
        '0EFAA9CA481AD021AACC2785BCA9015B',
        '394FC390FCA6BFBE93375E7F8180367B',
        '0EFAA9CA481AD021AACC2785BCA9015B',
        'B8DC3F295652762DA7E4AD2596F09D88',
        '5B8DADF82A310FA25FFB36DB491CCEF0',
        '6C115DE881C8549CFEEED1C6EECC6BD8',
      ];

      for (const params of allParams) {
        await doSign(...[].concat(params));
      }
    }

    async function doSign(token, venderId, id) {
      if (venderId) {
        return signCollectGift(venderId, id, token);
      }
      return getActivityInfo(token).then(data => {
        if (!self.isSuccess(data)) {
          return self.log(`${token}: ${data.msg}`);
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
      return api.doGetBody('interact_center_shopSign_signCollectGift', {venderId, activityId}).then(data => {
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
