const SuperMarket = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowMoment} = require('../../lib/moment');

class SuperMarketRedeem extends SuperMarket {
  static scriptName = 'SuperMarketRedeem';
  static scriptNameDesc = '东东超市-兑换豆豆';
  static times = 1;
  static shareCodeTaskList = [];
  static concurrent = true;

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    await handleRedeem();
    if (self.getNowHour() === 23) {
      const nextMoment = getNowMoment();
      nextMoment.add(1, 'hour');
      nextMoment.startOf('hour');
      const interval = nextMoment.valueOf() - getNowMoment().valueOf();
      await sleep(interval / 1000);
      await handleRedeem();
      // 再执行一次
      await sleep(10);
      await handleRedeem();
    }

    async function handleRedeem() {
      const {prizeList} = await api.doFormBody('smtg_queryPrize').then(data => data.data.result);
      const beanPrizes = prizeList.filter(({
                                             beanType,
                                             inStock,
                                           }) => ['Bean', 'BeanPackage'].includes(beanType)/* && inStock === 0*/).reverse();
      for (const {prizeId} of beanPrizes) {
        await obtainPrize(prizeId);
      }

      async function obtainPrize(prizeId) {
        await api.doFormBody('smtg_obtainPrize', {prizeId}).then(data => {
          self.log(JSON.stringify(_.assign({prizeId}, data)));
          if (self.isSuccess(data)) {
            return obtainPrize(prizeId);
          }
        });
      }
    }
  }
}

module.exports = SuperMarketRedeem;
