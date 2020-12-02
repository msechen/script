const Applet = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const {updateTokenCookies, getSimpleActInfoVo} = require('./api');

class AppletSign extends Applet {
  static scriptNameDesc = '店铺小程序签到';

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    const activityIds = [
      // 摩恩
      ['14827480251045beba08358a3ccc792b'],
      ['1de6f941bee64aa6b4d4abde06dd3bd3'],
      // 煦贝乐
      ['76063a4650f54eb79a2bb2737fd7f984', 'sevenDay'],
      // 石头
      ['edc7f9ec04b94929b4102b0c4a36ce40', 'sevenDay'],
      ['2e5e4e4c188d437d9ca40d2be2fbd476', 'sevenDay'],
    ];
    if (!activityIds.length) return;
    let pin = '';
    await updateTokenCookies(api);
    for (const [activityId, pathId] of activityIds) {
      if (!pin) {
        const data = await getSimpleActInfoVo(api, activityId);
        pin = data.pin;
      }
      await api.doPath(`sign/${pathId ? pathId + '/' : ''}wx/signUp`, {actId: activityId, pin});
    }
  }
}

module.exports = AppletSign;
