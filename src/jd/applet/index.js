const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Applet extends Template {
  static scriptName = 'Applet';
  static scriptNameDesc = '小程序主入口';
  static shareCodeTaskList = [];
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://lzkj-isv.isvjcloud.com',
      headers: {
        origin: 'https://lzkj-isv.isvjcloud.com',
        referer: 'https://lzkj-isv.isvjcloud.com',
      },
    },
  };

  static apiExtends = {
    // 具体请求 functionName
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return data.result && data.data;
  }
}

module.exports = Applet;
