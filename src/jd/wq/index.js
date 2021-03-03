const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class WqBase extends Template {
  static scriptName = 'WqBase';
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
          sceneval: 2,
          callback: 'jsonpCBKJ',
        },
      }, this.customApiOptions),
    };
  };
}

module.exports = WqBase;
