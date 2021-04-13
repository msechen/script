const SuperMarket = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const {sleepTime} = require('../../lib/cron');

class SuperMarketRedeem extends SuperMarket {
  static scriptName = 'SuperMarketRedeem';
  static scriptNameDesc = '东东超市-兑换豆豆';
  static times = 1;
  static concurrent = true;

  static async doMain(api, shareCodes) {
    const self = this;

    let beanPrizes;
    await updateBeanPrizes();
    await sleepTime(24);
    await handleRedeem();
    await updateBeanPrizes();
    await handleRedeem();

    async function updateBeanPrizes() {
      const prizeList = await getPrizes();
      beanPrizes = prizeList.filter(({beanType, inStock}) =>
        ['Bean', 'BeanPackage'].includes(beanType)/* && inStock === 0*/).reverse();
    }

    function getPrizes() {
      return api.doFormBody('smtg_queryPrize').then(data => _.property('data.result.prizeList')(data));
    }

    async function handleRedeem() {
      for (const prize of beanPrizes) {
        const {finishNum, targetNum} = prize;
        for (let i = finishNum; i < targetNum; i++) {
          await obtainPrize(prize);
          await sleep(2);
        }
      }

      async function obtainPrize(prize) {
        const {prizeId, title} = prize;
        return api.doFormBody('smtg_obtainPrize', {prizeId}, {needDelay: false}).then(async data => {
          if (!self.isSuccess(data)) return api.log(`${title}兑换失败, ${_.property('data.bizMsg')(data)}, prizeId: ${prizeId}`);
          api.log(`${title}兑换成功一次`);
        });
      }
    }
  }
}

module.exports = SuperMarketRedeem;
