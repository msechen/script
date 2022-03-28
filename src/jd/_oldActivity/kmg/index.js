const Template = require('../../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');
const {getMoment} = require('../../../lib/moment');

class Kmg extends Template {
  static scriptName = 'Kmg';
  static scriptNameDesc = '预售福利机';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://www.kmg-jd.com/api',
      headers: {
        origin: 'https://www.kmg-jd.com',
        referer: 'https://www.kmg-jd.com/presaleGift/index.html',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doBodyPath',
  };

  static isSuccess(data) {
    return _.property('code')(data) === 200;
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const lkToken = await patchToken();
    if (!lkToken) return;

    const valueDay = getMoment().format('YYYYMMDD');
    const {data: {userVO, jobMap, endDate}} = await api.doBodyPath('presaleGift/active', {
      'attributes': {
        'activeId': 'presaleGiftD9gBzawG',
        'shareId': null,
        lkToken,
        valueDay,
      },
    });
    if (!jobMap || endDate < valueDay) throw new Error('活动已结束');
    const {joinId} = userVO;
    for (const [key, task] of Object.entries(jobMap)) {
      // const {sign, viewLive, channel, viewWare, followShop} = jobMap;
      const {done, jobForm, details} = task;
      if (done) continue;
      for (const {config, done} of details) {
        if (done) continue;
        await handleDoJob(jobForm, config);
        await sleep(5);
      }
    }
    await handleLottery();

    async function patchToken() {
      const options = {
        qs: {
          appId: '2a679256e7cd6b44234ce590faab81cf',
        },
        headers: {
          origin: 'https://prodev.m.jd.com',
          referer: 'https://prodev.m.jd.com',
        },
      };
      // const {data: token} = await api.doUrl('https://jdjoy.jd.com/saas/framework/user/token?client=m&url=pengyougou.m.jd.com', options);
      // if (!token) return;
      const {data: {lkToken}} = await api.doUrl('https://jdjoy.jd.com/saas/framework/encrypt/pin', options);
      if (!lkToken) return;
      api.cookie = '';
      const {token} = await api.doBodyPath('user/verify', {
        parameters: {
          userId: '',
          lkToken,
          username: '',
        },
      });
      if (!token) return;
      api.options.headers['authorization'] = token;
      return lkToken;
    }

    async function handleDoJob(jobForm, jobDetail) {
      return api.doBodyPath('presaleGift/job', {
        'attributes': {
          'activeId': 'presaleGiftD9gBzawG',
          joinId,
          jobForm, jobDetail,
          valueDay,
        },
      });
    }

    async function handleLottery(lotteryForm = 0) {
      const data = await api.doBodyPath('presaleGift/lottery', {
        'attributes': {
          'activeId': 'presaleGiftD9gBzawG',
          joinId,
          lotteryForm,
        },
      });
      if (!self.isSuccess(data)) return;
      if (data['data']) {
        const {data: {awardName, awardVal}} = data;
        api.log(`获得 ${awardVal} ${awardName}`);
      } else {
        // 很大几率
        api.log(`抽空了`);
      }
      await sleep(5);
      return handleLottery();
    }
  }
}

singleRun(Kmg).then();

module.exports = Kmg;
