const Isv = require('./index');

const {sleep, writeFileJSON, parallelRun} = require('../../lib/common');
const {updateTokenCookies, getSimpleActInfoVo, generateToken} = require('./api');
const _ = require('lodash');

class IsvShopSign extends Isv {
  static scriptName = 'IsvShopSign';
  static scriptNameDesc = '店铺签到(app)';

  static async doMain(api, shareCodes) {
    const self = this;

    const activityIds = [
      // [activityId, pathId]
      ['f1f81c4b1d5e47b2aba7c2531739fc74', 'sevenDay'],

      // 需要加入品牌会员
      // 十月稻田
      ['db57818738344160bf9b68e3d32f51f5'],
    ];
    if (!activityIds.length) return;
    await generateToken(api);
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

module.exports = IsvShopSign;
