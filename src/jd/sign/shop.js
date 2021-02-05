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

    const nowHour = self.getNowHour();
    if (nowHour === 0) return handleSign();

    await handleTimedExecution(nowHour);

    async function handleTimedExecution(nowHour) {
      if (nowHour !== 23) return;
      const nextMoment = getNowMoment();
      nextMoment.add(1, 'hour');
      nextMoment.startOf('hour');
      const interval = nextMoment.valueOf() - getNowMoment().valueOf();
      await sleep(Math.floor(interval / 1000));
      // if (self.getNowHour() === 23) return handleTimedExecution(self.getNowHour());
      await handleSign();
    }

    async function handleSign() {
      // token, venderId, id
      const allParams = [
        // 2.2新增
        '916284E3958B92FA7799CA5D6C8DBA74',
        '0F4BDB9C04701400E8032BA7215861F5',
        '33711E18F790A9451F2C8641B4BF4E56',
        'CECDE29DEBDBE9646D3401DF1485363E',

        // 2.4新增
        'D0AD720BE08231838A03965EA510C73C',
        'CAA4ABA5536E93A3CE96615710DF55C4',
        '783960F2EDAEE981C09AFE8EC1011433',
        '28228D1B5414046523D6E67DFC5B9E72',
        '2A09FBEA832A08ACBFD2E7C42456BC57',
        'ED55B3E6C274C9A6507EBD95A79DE91B',

        '795594DC704FCBFA3F9CB5062863C26D',
        'D71848E997002DC4F23CA79DB33BF16B',
        'BF1E1B7C2178C631D7D9B9D1AD878234',
        '919668EC150DA77B8D430885243251F4',
        '5F015DC9D5BBC09ECA417C630B565D08',
        '3D3108A437A59F63C232643ED2D3EE0A',
        'DF08AC29F911C1503065A2D89BD5A86A',
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
