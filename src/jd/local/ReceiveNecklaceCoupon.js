const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {sleepTime} = require('../../lib/cron');

const {necklace} = require('../../../charles/api');

class ReceiveNecklaceCoupon extends Template {
  static scriptName = 'ReceiveNecklaceCoupon';
  static scriptNameDesc = '领券中心-抢优惠券';
  static times = 1;
  static concurrent = true;

  static async doMain(api) {
    const self = this;

    // 59-20优惠券
    const coupon1 = () => handleReceiveNecklaceCoupon('791342898');

    await sleepTime(14);
    for (let i = 0; i < 5; i++) {
      coupon1();
      await sleep(0.2);
    }

    async function handleReceiveNecklaceCoupon(batchId) {
      const form = necklace.receiveNecklaceCoupon.find(o => JSON.parse(o.body).batchId === batchId);
      if (!form) return;
      return api.doForm('receiveNecklaceCoupon', form, {needDelay: false}).then(data => {
        api.log(JSON.stringify(data));
      });
    }
  }
}

singleRun(ReceiveNecklaceCoupon).then();

module.exports = ReceiveNecklaceCoupon;
