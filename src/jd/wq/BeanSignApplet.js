const Template = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {mLoginWx} = require('./api');

class BeanSignApplet extends Template {
  static scriptName = 'BeanSignApplet';
  static scriptNameDesc = '领京豆-小程序';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInPhone = false;
  static cookieKeys = ['wq_uin', 'wq_skey'];

  static customApiOptions = {
    uri: 'https://wq.jd.com/activep3/singjd',
    headers: {
      referer: 'http://wq.jd.com/wxapp/pages/bean_park/index/index',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
    },
    qs: {
      g_ty: 'ls',
      'g_tk': '1844967756',
    },
    method: 'GET',
  };

  static async beforeRequest(api) {
    return !await this.updateWqAuthToken(api, true, true);
  }

  static async doMain(api) {
    const self = this;

    const _doPath = functionId => api.doPath(functionId, void 0, {qs: {callback: functionId}});

    await self.beforeRequest(api);

    await doSign();

    function doSign() {
      return _doPath('SignQuery').then(data => {
        if (data.status !== 0) return api.log('今天已签到');
        return _doPath('DrawQuery').then(data => {
          if (data.ret !== 0) return api.log(data['retmsg']);
          api.log('签到成功');
        });
      });
    }
  }
}

singleRun(BeanSignApplet).then();

module.exports = BeanSignApplet;
