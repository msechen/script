const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');
const Cookie = require('../../lib/cookie');

class WqBase extends Template {
  static scriptName = 'WqBase';
  static scriptNameDesc = 'wq.jd.com';
  static needInApp = false;
  static needInPhone = true;
  static times = 1;

  static customApiOptions = {
    uri: 'https://wq.jd.com',
    headers: {
      referer: 'https://wq.jd.com/',
    },
  };

  static isSuccess(data) {
    return _.property('ret')(data) === 0;
  }

  static async mLoginWeb(api, rurl) {
    return api.doGetUrl('https://wq.jd.com/mlogin/mpage/Login', {
      resolveWithFullResponse: true,
      followRedirect: false,
      qs: {
        rurl,
      },
    }).then(({response}) => {
      const setCookie = response.headers['set-cookie'];
      const loginSuccess = !!setCookie;
      if (loginSuccess) {
        const cookie = new Cookie(api.cookie);
        cookie.add(setCookie);
        api.cookie = cookie.toString();
      } else {
        api.log('用户未登录');
      }
      return loginSuccess;
    });
  }

  static apiOptions() {
    return {
      formatDataFn(data) {
        if (!_.isString(data)) return data;
        let result = {};
        try {
          result = JSON.parse(data.replace(/try{\s*\w*\(/, '').replace(');}catch(e){}', ''));
        } catch (e) {
          try {
            result = JSON.parse(data.replace(/\w*\(/, '').replace(/\)[;]$/, ''));
          } catch (e) {
          }
        }
        return result;
      },
      options: _.merge({
        method: 'GET',
        qs: {
          callback: 'jsonpCBKJ',
        },
      }, this.customApiOptions),
    };
  };
}

module.exports = WqBase;
