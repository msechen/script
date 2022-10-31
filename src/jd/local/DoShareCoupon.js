const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

class DoShareCoupon extends Template {
  static scriptName = 'DoShareCoupon';
  static scriptNameDesc = '京享助力';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static needOriginProMd = true;
  static needInPhone = true;

  static isSuccess(data) {
    return _.property('code')(data) === 0;
  }

  static apiOptions() {
    return {
      options: {
        uri: 'https://api.m.jd.com/api',
        qs: {
          _: getMoment().valueOf(),
          loginType: 2,
          appid: 'u',
          client: 'apple',
        },
      },
    };
  }

  static async doMain(api) {
    const self = this;

    const showCouponBody = {};
    const getCouponsBody = {
      'platform': 1,
      'actId': '7j1E8kyVs3H3o6R2k4nUu7Vjy3J',
      'd': 'xCbMkwx',
      'type': 1,
      'eid': 'CHRYXJ55SPL7X27TGRUEC74CI6KW7BAP3IPZJ6YSJ2Q6UU4CUUUULJLCNCNNKM2UOIIPF5R2WMDFUBVZQ4P32PAWBM',
      ..._.pick(showCouponBody, ['unionActId', 'unionShareId']),
    };
    await doShare();

    async function doShare() {
      if (_.isEmpty(showCouponBody) || _.isEmpty(getCouponsBody)) return console.log('请先抓取对应的数据');
      // unpl 用两三次后就会变化
      api.cookieInstance.set('unpl', showCouponBody['unpl']);
      const {code, msg} = await api.doGetBody('showCoupon', showCouponBody);
      if (code !== 0) {
        return api.log(msg);
      }
      await api.doGetBody('getCoupons', getCouponsBody).then(data => {
        if (self.isSuccess(data)) {
          api.log('助力成功');
        } else {
          api.log(data.msg);
        }
      });
    }
  }
}

singleRun(DoShareCoupon).then();

module.exports = DoShareCoupon;
