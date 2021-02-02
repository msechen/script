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
        // 2.2新增
        '446B9E9C32B8199E952D98B7CE45035F',
        '6192A874892886136C180493087B1A8E',
        '916284E3958B92FA7799CA5D6C8DBA74',
        '0F4BDB9C04701400E8032BA7215861F5',
        '33711E18F790A9451F2C8641B4BF4E56',
        'CECDE29DEBDBE9646D3401DF1485363E',

        '795594DC704FCBFA3F9CB5062863C26D',
        'D71848E997002DC4F23CA79DB33BF16B',
        'BF1E1B7C2178C631D7D9B9D1AD878234',
        'ADF4DEFD75018C095A87C6DFE8D93262',
        '394FC390FCA6BFBE93375E7F8180367B',
        '3E12B6185BB6DDB9A876340CB0ECBF89',
        '919668EC150DA77B8D430885243251F4',
        '5F015DC9D5BBC09ECA417C630B565D08',
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
