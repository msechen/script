const Template = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {mLoginWx} = require('./api');

class Singjd extends Template {
  static scriptName = 'Singjd';
  static scriptNameDesc = '微信(web/小程序)签到';

  static customApiOptions = {
    uri: 'https://wq.jd.com/activep3/singjd',
    headers: {
      referer: 'https://wqsh.jd.com/promote/201801/bean/index.html',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0(0x13000002) NetType/WIFI WindowsWechat',
    },
    method: 'GET',
  };

  static async doMain(api) {
    const self = this;

    const _doPath = functionId => api.doPath(functionId, void 0, {qs: {callback: functionId}});

    await updateCookie();
    await doSign();

    function updateCookie() {
      return mLoginWx(api).then(cookie => {
        api.cookie = cookie;
      });
    }

    function doSign() {
      return _doPath('SignQuery').then(data => {
        if (data.status !== 0) return;
        // TODO 目前还未签到成功
        return _doPath('DrawQuery').then(data => {
          if (data.ret !== 0) return self.log(data['retmsg']);
          self.log('签到成功');
        });
      });
    }
  }
}

singleRun(Singjd).then();

module.exports = Singjd;
