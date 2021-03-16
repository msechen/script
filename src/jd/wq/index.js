const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

class WqBase extends Template {
  static scriptName = 'WqBase';
  static scriptNameDesc = 'wq.jd.com';
  static needInApp = false;
  static times = 1;

  static customApiOptions = {
    uri: 'https://wq.jd.com',
    headers: {
      referer: 'https://wq.jd.com',
    },
  };

  static apiOptions() {
    return {
      formatDataFn(data) {
        let result = {};
        try {
          result = JSON.parse(data.replace(/try{\s*\w*\(/, '').replace(');}catch(e){}', ''));
        } catch (e) {
          try {
            result = JSON.parse(data.replace(/\w*\(/, '').replace(/\)$/, ''));
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
