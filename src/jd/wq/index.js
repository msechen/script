const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');
const Cookie = require('../../lib/cookie');
const vm = require('vm');

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
        api.cookieInstance.add(setCookie);
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
            const ctx = {
              [this.options.qs.callback]: data => {
                result = data;
              },
            }
            vm.createContext(ctx);
            vm.runInContext(data, ctx);
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
