const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');

class Coupon extends Template {
  static scriptName = 'Coupon';
  static scriptNameDesc = '京享红包';
  static times = 1;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      qs: {
        appid: 'u',
        client: 'apple',
        clientVersion: '8.3.6',
      },
      method: 'GET',
      headers: {
        origin: 'https://story.m.jd.com',
        referer: 'https://story.m.jd.com',
      },
    },
  };

  static isSuccess(data) {
    return this._.property('code')(data) === 200;
  }

  static async doMain(api) {
    const self = this;
    const _ = this._;

    const unionActId = '31125';

    await listCouponSupporter({pageSize: -1}).then(list => {
      const helpSituation = list.map(o => o.nickName + ': ' + getMoment(o.time).format('YYYY-MM-DD HH:mm:ss'));
      console.log(helpSituation);
      const allScore = _.reduce(list.map(o => o.score), (accumulator, currentValue) => accumulator + currentValue);
      self.log(`总分数为: ${allScore}, 总人数为: ${list.length}`);
    });

    // 展示助力情况
    async function listCouponSupporter({pageNo = 1, pageSize = 10}) {
      let needLoop = false;
      if (pageSize === -1) {
        needLoop = true;
        pageSize = 10;
      }
      return api.doFunctionId('listCouponSupporter', {
        qs: {
          body: JSON.stringify({
            pageNo, pageSize,
            unionActId,
            type: 0,
          }),
        },
      }).then(async data => {
        if (!self.isSuccess(data)) return;
        const list = _.property('data.result')(data) || [];
        if (needLoop && ((pageNo - 1) * pageSize + list.length < data.data.total)) {
          return list.concat(await listCouponSupporter({pageNo: pageNo + 1, pageSize: -1}));
        }
        return list;
      });
    }

    // TODD 以下方法都需要cookie, 所以暂不开放
    // cookie: unpl	V2_ZzNtbUoFEEB9AUNWLxFZAmILRw4RBBBBcAhEUnIdCFBvAEVcclRCFnUUR1RnGlgUZgsZXURcRhJFOEZVehlVAG4AFFRyZ3MWdThHZHhMVAVvVxcKQ1ZHEiFdQFByS1QEZAESCRFSSxBwABRQSylbBW4zIm1HV0IUdQlDUXsQbARXARNcQFZLFXEMTmQwd11IZFYaXUoDRkJ0CUJTL0xaAW5RGlxBVUNBJg1OUX4RDgFXARJdQVNzFg%3d%3d|V2_ZzNtbUoDE0d8XU8HfxxbAmJQQg0SAhMddQ8TBisRWFJlU0VeclRCFnUUR1RnGl4UZAEZXERcQhdFCEJkexhdBW8KF1xGVnMlfGZFVnsZWAduBRAzQlZCeyBYFBAiXQRXPlNNC3JUQyV0OBRTcxFeDG8BQgpHUBcQcFgWVH4QXAxjBhBVQlJFEnxaEVd%2fGFRSNFQibUtWcxJ0C0RdchhsUDlcRBgSDxhNJVcQCSMZbARXAiJccgEtFXQJR1V6GV4CZ05AWkpfQRx9ChYDfh4IAGJTQl1HXkMccQ1EXHscWgJuUUVeRlZLQiZfdlVLGQ%3d%3d

    // 获取助力链接
    // await api.doFunctionId('shareUnionCoupon', {
    //   qs: {
    //     body: JSON.stringify({unionActId}),
    //   },
    // });

    // 抽奖和获取助力进度
    // await api.doFunctionId('showCoupon', {
    //   qs: {
    //     body: JSON.stringify({'actId': '2HxATPMr9wQsKhqm3oe7vshuJYDS', 'unionActId': '31125'}),
    //   },
    // });
  }
}

module.exports = Coupon;
