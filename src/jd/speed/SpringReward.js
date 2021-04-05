const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class SpringReward extends Template {
  static scriptName = 'SpringReward';
  static scriptNameDesc = '极速版-领红包';
  static needInSpeedApp = true;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static isSuccess(data) {
    return data['code'] === 0;
  }

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com',
      method: 'GET',
      qs: {
        appid: 'activities_platform',
        body: {'linkId': 'CKKfDuj5ere8P1EUy_lC0g'},
      },
      headers: {
        origin: 'https://prodev.m.jd.com',
      },
    },
  };

  static async doMain(api) {
    const self = this;

    await api.doGet('spring_reward_query').then(async data => {
      if (!self.isSuccess(data)) return;
      let {markedPin, remainChance} = data.data;
      self.updateShareCodeFn(markedPin);

      await sleep(2);
      const inviter = self.getShareCodeFn()[0];
      // 循环最大次数
      let maxTimes = 10;
      while (remainChance > 0) {
        await api.doGetBody('spring_reward_receive', {inviter}).then(data => {
          if (!self.isSuccess(data)) return self.log(data.errMsg);
          remainChance--;
          self.log(`获得: ${_.property('data.received.prizeDesc')}`);
        });
        await sleep(2);
        if (--maxTimes === 0) break;
      }
    });
  }
}

singleRun(SpringReward).then();

module.exports = SpringReward;
