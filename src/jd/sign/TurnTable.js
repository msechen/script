const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

// 页面链接例子如下
// https://pro.m.jd.com/mall/active/N9MpLQdxZgiczZaMx2SzmSfZSvF/index.html?babelChannel=ttt1&PTAG=17053.1.1&cu=true&utm_source=kong&utm_medium=jingfen&utm_campaign=t_1001707023_&utm_term=6d1569f281e24cafaa957ac60d17c17a#/

class SignTurnTable extends Template {
  static scriptName = 'SignTurnTable';
  static scriptNameDesc = '翻牌签到';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static needInPhone = true;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      headers: {
        origin: 'https://pro.m.jd.com',
        referrer: 'https://pro.m.jd.com/',
      },
      qs: {
        client: '',
        clientVersion: '',
        appid: 'jdchoujiang_h5',
      },
    },
  };

  static isSuccess(data) {
    return _.property('success')(data);
  };

  static async beforeRequest(api) {
    const self = this;

    this.injectEncryptH5st(api, {
      config: {
        turncardChannelDetail: {
          appId: '9a4de',
        },
        turncardChannelSign: {
          appId: 'b342e',
        },
      }
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;
    await self.beforeRequest(api);

    const turnTableIdList = [
      '1265',
    ];

    for (const turnTableId of turnTableIdList) {
      const log = msg => {
        api.log(`[${turnTableId}] ${msg}`);
      };
      const body = {turnTableId};
      const detailData = await api.doGetBody('turncardChannelDetail', body);
      if (!self.isSuccess(detailData)) return log(detailData['errorMessage']);
      const {hasSign} = detailData['data'];
      if (hasSign) return log('已经签到');
      const signData = await api.doGetBody('turncardChannelSign', body, {method: 'POST'});
      if (!self.isSuccess(signData)) return log(signData['errorMessage']);
      const {jdBeanQuantity} = signData['data'];
      if (jdBeanQuantity) {
        log(`获得豆豆 ${jdBeanQuantity}`);
      } else {
        log(JSON.stringify(signData['data']));
      }
    }
  }
}

singleRun(SignTurnTable).then();

module.exports = SignTurnTable;
