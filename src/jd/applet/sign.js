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
      // ['1de6f941bee64aa6b4d4abde06dd3bd3'],
      // 倍舒特
      // ['a285a54879284c84b4c3579fd371b234'],
      // 优赛
      // ['14d3d026650a45668e03a6b820075a8e'],
      // 铁建
      // ['6fa5660db3d34fc698e7522ae156ef62'],
      // 煦贝乐
      // ['76063a4650f54eb79a2bb2737fd7f984', 'sevenDay'],
      // 石头
      // ['edc7f9ec04b94929b4102b0c4a36ce40', 'sevenDay'],
      // ['2e5e4e4c188d437d9ca40d2be2fbd476', 'sevenDay'],
      // 先锋两季
      ['6f322ad48fdb4f7983edcc3bc77a6b87', 'sevenDay'],
      // 蒲地蓝
      // ['175cc516dcbd45eaa65754362535db18', 'sevenDay'],
      // 悦诗风吟
      // ['d6e3160a0037421096c54cec2a84c855', 'sevenDay'],
      // 蒙牛
      ['34aff623e0b94cb2a3c789473c31885d', 'sevenDay'],
    ];
    if (!activityIds.length) return;
    let pin = '';
    await updateTokenCookies(api);
    for (const [activityId, pathId] of activityIds) {
      if (!pin) {
        const data = await getSimpleActInfoVo(api, activityId);
        pin = data.pin;
      }
      await api.doPath(`sign/${pathId ? pathId + '/' : ''}wx/signUp`, {actId: activityId, pin}).then(data => {
        const msg = _.property('msg')(data) || _.property('gift.giftName')(data) || '成功';
        self.log(`activityId: ${activityId}, msg: ${msg}`);
      });
    }
  }
}

module.exports = AppletSign;
