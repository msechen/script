const Necklace = require('./index');
const {getCookieData} = require('../../lib/env');
const {sleepTime} = require('../../lib/cron');
const {singleRun} = require('../../lib/common');

class NecklaceRedeem extends Necklace {
  static scriptName = 'NecklaceRedeem';
  static scriptNameDesc = '点点券-兑换红包';
  static times = 1;

  static async doMain(api) {
    const self = this;

    await sleepTime(24);
    const exchangeGiftConfigs = await api.doFormBody('necklace_homePage').then(data =>
      _.property('data.result.exchangeGiftConfigs')(data)) || [];

    // 兑换红包
    await exchangeRedPacket();

    async function exchangeRedPacket() {
      const redPacketGift = exchangeGiftConfigs.find(o => o['redpacketTitle'] === '无门槛红包');
      if (!redPacketGift) return;
      const redYuan = 0;
      if (!redYuan) return;
      await exchangeGift(redPacketGift, redYuan);
    }

    async function exchangeGift({id, score, redpacketTitle}, redYuan) {
      return api.doFormBody('necklace_exchangeGift', {
        scoreNums: redpacketTitle === '无门槛红包' ? redYuan * 1000 : score,
        giftConfigId: id,
      }).then(data => {
        if (!self.isSuccess(data)) return self.log(_.property('data.biz_msg')(data));
        self.log(`${_.property('data.result.couponTitle')(data) || _.property('data.result.redpacketTitle')(data)} 兑换成功!`);
      });
    }
  }
}

singleRun(NecklaceRedeem, void 0, method => NecklaceRedeem.start(getCookieData())).then();

module.exports = NecklaceRedeem;
