const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const appid = 'activities_platform';
const linkId = 'jOkIZzWCgGa9NfPuHBSx1A';

class SpringReward extends Template {
  static scriptName = 'SpringReward';
  static scriptNameDesc = '极速版-领红包';
  static needInSpeedApp = true;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static isSuccess(data) {
    return data['code'] === 0;
  }

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com',
      qs: {
        appid,
        body: {linkId},
      },
      headers: {
        origin: 'https://prodev.m.jd.com',
        referer: 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html',
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;

    await api.doGet('spring_reward_query').then(async data => {
      if (!self.isSuccess(data)) return;
      let {remainChance} = data.data;

      await sleep(2);
      const inviter = shareCodes[0] || 'CeymEOdTGnhBzMjmwC12IA';
      // 循环最大次数
      let maxTimes = 10;
      while (remainChance > 0) {
        await api.doGetBody('spring_reward_receive', {inviter}).then(data => {
          if (!self.isSuccess(data)) return self.log(data.errMsg);
          remainChance--;
          const {prizeDesc} = _.property('data.received')(data);
          self.log(`获得: ${prizeDesc}`);
        });
        await sleep(2);
        if (--maxTimes === 0) break;
      }
    });

    self.isLastLoop() && await handleCash();

    async function handleCash() {
      await api.doGetBody('spring_reward_list', {
        'pageNum': 1,
        'pageSize': 10,
      }).then(async data => {
        const items = _.property('data.items')(data) || [];
        if (items.some(o => o['state'] === 1)) return;
        const cashes = items.filter(o => o['prizeType'] === 4 && o['state'] === 0);
        if (_.isEmpty(cashes)) return;
        // 一次只能同时提现一个
        return apCashWithDraw(cashes[0]);
      });

      async function apCashWithDraw({id, poolBaseId, prizeGroupId, prizeBaseId, prizeType}) {
        const functionId = 'apCashWithDraw';
        return api.commonDo({
          form: {
            body: {
              'businessSource': 'SPRING_FESTIVAL_RED_ENVELOPE',
              'base': {
                id, poolBaseId, prizeGroupId, prizeBaseId, prizeType,
                'business': null,
              },
              linkId,
            },
            appid,
            functionId,
          },
          uri: api.options.uri,
          headers: api.options.headers,
        }).then(data => {
          self.log(data.data.message);
        });
      }
    }
  }
}

singleRun(SpringReward).then();

module.exports = SpringReward;
