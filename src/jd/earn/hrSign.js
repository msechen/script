const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {timedExecution} = require('../../lib/cron');
const moment = require('moment-timezone');

const brand = '6793136074';

class HrSign extends Template {
  static scriptName = 'HrSign';
  static scriptNameDesc = 'HR十点领取豆豆';
  static times = 1;
  static concurrent = true;

  static apiOptions = {
    options: {
      headers: {
        Cookie: '',
        referer: 'https://hd-zex-isv.isvjcloud.com',
      },
      qs: {
        brand,
      },
    },
  };

  static isSuccess(data) {
    return this._.property('code')(data) === 200;
  }

  static async doMain(api) {
    const self = this;
    const _ = self._;

    const token = api.cookie.replace('wq_auth_token=', '');
    // return _do();
    api.cookie = self.getCurrentEnv.call(api, 'JD_COOKIE');
    // 要先关注
    await api.addFavShop('1000099941');
    await timedExecution(10, _do);

    async function _do() {
      await api.doUrl('https://hd-zex-isv.isvjcloud.com/zex-jd-srv/user/v2/getMemberInfo', {
        method: 'GET',
        qs: {
          token,
          source: '02',
        },
      }).then(async data => {
        // writeFileJSON(data, 'getMemberInfo.json', __dirname);
        if (!self.isSuccess(data)) return;
        const openid = _.property('result.openid')(data);
        await api.doUrl('https://hd-zex-isv.isvjcloud.com/zex-jd-srv/campaign/join', {
          body: {
            openid, brand,
            'campaignId': '449',
            'ruleId': '241',
          },
        }).then(data => {
          if (self.isSuccess(data)) {
            self.log(data.msg);
          }
        });
      });
    }
  }
}

module.exports = HrSign;
