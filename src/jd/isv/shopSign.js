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
      ['b4c2c430fbef437db763341c7e43bfb5', 'sevenDay'],
      ['a9a6fe0357f04a6a91328cb35fbd6270', 'sevenDay'],
      ['dfcc620404fb4e7e976af12b09c50228'],

      // 需要加入品牌会员
      // 十月稻田京东自营旗舰店(每月更新)
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

singleRun(IsvShopSign).then();

module.exports = IsvShopSign;
