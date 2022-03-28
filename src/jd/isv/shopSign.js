const Isv = require('./index');

const {sleep, writeFileJSON, parallelRun, singleRun} = require('../../lib/common');
const {updateTokenCookies, getSimpleActInfoVo, generateToken} = require('./api');
const _ = require('lodash');

class IsvShopSign extends Isv {
  static scriptName = 'IsvShopSign';
  static scriptNameDesc = '店铺签到(app)';

  static async doMain(api, shareCodes) {
    const self = this;

    const activityIds = [
      // [activityId, pathId]
      ['c2560ac2bcc94894ae41bb66e5921640'],

      // 需要加入品牌会员
      // 十月稻田京东自营旗舰店(每月更新)
      // ['736d8aeadd5d463f99a45fec249c205c'],
    ];
    if (!activityIds.length) return;
    await generateToken(api);
    let pin = '';
    await updateTokenCookies(api);
    // TODO getSimpleActInfoVo 不一定有用
    pin = await getSimpleActInfoVo(api, activityIds[0][0]).then(data => data.pin);
    if (!pin) {
      api.log('pin获取失败');
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
          api.log(`activityId: ${activityId}, msg: ${msg}`);
        });
      },
    });
  }
}

singleRun(IsvShopSign).then();

module.exports = IsvShopSign;
