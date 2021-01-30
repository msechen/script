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
        'FE8BE003C357F022DFC4215F72C98612',
        '795594DC704FCBFA3F9CB5062863C26D',
        'D71848E997002DC4F23CA79DB33BF16B',
        'BF1E1B7C2178C631D7D9B9D1AD878234',
        '838E318ADAEEADF00A67AF662ECFF608',
        '5FD802672EC9CC128B61685DDFDECF17',
        'ADF4DEFD75018C095A87C6DFE8D93262',
        '394FC390FCA6BFBE93375E7F8180367B',
        '5B8DADF82A310FA25FFB36DB491CCEF0',
        '2068FA0F78598909421FD6EF3D80780D',
        '3B83B96C8FE7908CE71FA92C65F65FF0',
        '9A3C231722964E8F92B90810D616C2EF',
        '3E12B6185BB6DDB9A876340CB0ECBF89',
        'CB82B99EC45A79DFCE0E9A9BFFFC413C',
        '919668EC150DA77B8D430885243251F4',
        '5F015DC9D5BBC09ECA417C630B565D08',
        '73E0221BFDA323AF977F5056312E1CE6',
        'E89B634D6256DED43E869002EAC3C213',
        '3D3108A437A59F63C232643ED2D3EE0A',
        'DF08AC29F911C1503065A2D89BD5A86A',
        '0E4AD766DEFFA3E2CD52E21C30CA438D',
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
