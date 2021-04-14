const SuperMarket = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const {sleepTime} = require('../../lib/cron');

class SuperMarketRedeem extends SuperMarket {
  static scriptName = 'SuperMarketRedeem';
  static scriptNameDesc = '东东超市-兑换豆豆';
  static times = 1;
  static concurrent = true;

  static async doMain(api, shareCodes) {
    const self = this;

    const beanPrize = {
      BeanPackage: {},
      Bean: {},
    };
    await updateBeanPrizes();
    await sleepTime(24);
    await handleExchangeBeanPackage();
    for (let i = 0; i < 3; i++) {
      const stop = await handleExchangeBean();
      if (stop) break;
      await updateBeanPrizes();
      await sleep(5);
    }

    function handleExchangeBeanPackage() {
      return _do().then(async bizCode => {
        if (!bizCode) return;
        if (bizCode === 400) {
          return handleExchangeBeanPackage();
        }
        await _do(true, 2);
      });

      async function _do(needDelay = false, loopTimes = 0) {
        needDelay && await sleep(0.01);
        return obtainPrize(beanPrize['BeanPackage']).then(bizCode => {
          if (bizCode && (loopTimes > 0)) return _do(needDelay, --loopTimes);
        });
      }
    }

    function handleExchangeBean(loopTimes = 10) {
      const {finishNum, targetNum} = beanPrize['Bean'];
      if (finishNum >= targetNum) return true;
      if (loopTimes <= 0) return;
      return obtainPrize(beanPrize['Bean']).then(async bizCode => {
        if (!bizCode) {
          beanPrize['Bean'].finishNum++;
        }
        await sleep(2);
        return handleExchangeBean(--loopTimes);
      });
    }

    async function updateBeanPrizes(loop = true) {
      const prizeList = await getPrizes() || [];
      if (_.isEmpty(prizeList) && loop) {
        await sleep(0.1);
        return updateBeanPrizes(false);
      }
      for (const prize of prizeList) {
        const {beanType, inStock} = prize;
        // if (inStock === 0) continue;
        beanPrize[beanType] = prize || {};
      }
    }

    function getPrizes() {
      return api.doFormBody('smtg_queryPrize', void 0, void 0, {needDelay: false}).then(data => _.property('data.result.prizeList')(data));
    }

    async function obtainPrize(prize) {
      const {prizeId, title} = prize;
      if (!prizeId) return;
      return api.doFormBody('smtg_obtainPrize', {prizeId}, {needDelay: false}).then(async data => {
        if (!self.isSuccess(data)) {
          api.log(`${title}兑换失败, ${_.property('data.bizMsg')(data)}, prizeId: ${prizeId}`);
          const bizCode = data.data.bizCode;
          if (bizCode === 400) await updateBeanPrizes();
          return bizCode;
        }
        api.log(`${title}兑换成功一次`);
      });
    }
  }
}

singleRun(SuperMarketRedeem).then();

module.exports = SuperMarketRedeem;
