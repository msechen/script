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
      const list = [
        // 2.4新增
        '28228D1B5414046523D6E67DFC5B9E72',
        // 2.5新增
        '28AABCB3B08D6DF9BB03788D53E84C2B',
        '7915D3D314BD2C2F4DA3E6483086D241',
        // 2.6新增
        '698CD9D9291844FA0A6E4C385F8DC279',
        // 2.7新增
        '96D325751AC25F8EA77BDB3B012320C7',
        // 2.8新增
        '67335CBC33F4D22F6D66BE4891CE6FF9',
        '1E4F2D0AD5CB026540A290E5C7BA5132',
        'EF831211EA7DEA7A1124CC593DFA86E5',
        // 2.10新增
        '938178698B30D33A73C3A059ECC5A838',

        // 可能达不成
        '405766BA298908B7052EDB42C18B573B',
        '1A6D6887A00E8A02D37F782642D37E38',
      ];

      await parallelRun({
        list,
        runFn: v => doSign(...[].concat(v)),
        onceNumber: 10,
      });
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
