const Template = require('../base/template');
const {getNextHour} = require('../../lib/moment');

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

    let targetCoupon = await getCoupon() || {};
    if (_.isEmpty(targetCoupon)) return;

    // 59-20优惠券
    const coupon1 = () => handleReceiveNecklaceCoupon(targetCoupon['batchId']);

    const hours = [0, 10, 14, 22];
    const nextHour = getNextHour(hours);
    api.log(`下一次执行时间为${nextHour}点`);
    await sleepTime([nextHour - 1, 59, 59]);
    for (let i = 0; i < 8; i++) {
      coupon1();
      await sleep(0.3);
    }

    async function handleReceiveNecklaceCoupon(batchId) {
      const form = necklace.receiveNecklaceCoupon.find(o => JSON.parse(o.body).batchId === batchId);
      if (!form) return api.log(`找不到特定的form, 请重试`);
      return api.doForm('receiveNecklaceCoupon', form, {needDelay: false}).then(data => {
        api.log(JSON.stringify(data));
      });
    }

    async function getCoupon() {
      const couponList = await api.doForm('getCcFeedInfo', necklace.getCcFeedInfo[0]).then(data => _.property('result.couponList')(data)) || [];
      return couponList.find(o => o['quota'] === '满59元可用' && o['discount'] === '20');
    }
  }
}

singleRun(ReceiveNecklaceCoupon).then();

module.exports = ReceiveNecklaceCoupon;
