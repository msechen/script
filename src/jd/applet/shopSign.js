const Applet = require('./index');

const {sleep, writeFileJSON, parallelRun} = require('../../lib/common');
const moment = require('moment-timezone');
const {updateTokenCookies, getSimpleActInfoVo} = require('./api');
const _ = require('lodash');

class AppletShopSign extends Applet {
  static scriptNameDesc = '店铺签到(小程序/app)';

  static async doMain(api, shareCodes) {
    const self = this;

    const activityIds = [
      // [activityId, pathId]

      // 博世
      ['3d6cd5a6cf4f47a8a28477116bdc9ad3'],
      ['19902886114648d699f96cc0a6d1e02d'],
    ];
    if (!activityIds.length) return;
    let pin = '';
    await updateTokenCookies(api);
    // TODO getSimpleActInfoVo 不一定有用
    pin = await getSimpleActInfoVo(api, activityIds[0][0]).then(data => data.pin);
    if (!pin) {
      self.log('pin获取失败');
      pin = self.getCurrentEnv('JD_APPLET_PIN');
    }
    await parallelRun({
      list: activityIds,
      runFn: ([activityId, pathId]) => {
        return api.doPath(`sign/${pathId ? pathId + '/' : ''}wx/signUp`, {
          actId: activityId,
          pin,
        }, {needDelay: false}).then(data => {
          const msg = _.property('msg')(data) || _.property('gift.giftName')(data) || '成功';
          self.log(`activityId: ${activityId}, msg: ${msg}`);
        });
      },
    });
  }
}

module.exports = AppletShopSign;
