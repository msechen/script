const SuperMarket = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowMoment} = require('../../lib/moment');
const {sleepTime} = require('../../lib/cron');

class SuperMarketRedeem extends SuperMarket {
  static scriptName = 'SuperMarketRedeem';
  static scriptNameDesc = '东东超市-兑换豆豆';
  static times = 1;
  static concurrent = true;

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    const prizeList = await getPrizes();
    await sleepTime(24);
    await handleRedeem();

    function getPrizes() {
      return api.doFormBody('smtg_queryPrize').then(data => _.property('data.result.prizeList')(data));
    }

    async function handleRedeem() {
      const beanPrizes = prizeList.filter(({
                                             beanType,
                                             inStock,
                                           }) => ['Bean', 'BeanPackage'].includes(beanType)/* && inStock === 0*/).reverse();
      return self.loopCall(beanPrizes, {
        maxTimes: beanPrizes.length,
        firstFn: obtainPrize,
      });

      async function obtainPrize(prize) {
        const {prizeId, title} = prize;
        return api.doFormBody('smtg_obtainPrize', {prizeId}).then(data => {
          if (self.isSuccess(data)) {
            self.log(`${title}兑换成功一次`);
            return obtainPrize(prize);
          }
          self.log(`${title}兑换失败, ${_.property('data.bizMsg')(data)}, prizeId: ${prizeId}`);
        });
      }
    }
  }
}

module.exports = SuperMarketRedeem;
