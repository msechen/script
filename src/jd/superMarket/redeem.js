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
    await sleepTime([23, 59, 59]);
    handleExchange(10, 'BeanPackage');
    await sleep(5);
    await handleExchange(40, 'Bean', 2);

    async function handleExchange(loopTimes = 0, type, delaySeconds = 0) {
      await exchange(loopTimes);

      async function exchange(times) {
        const bean = beanPrize[type];
        const {finishNum, targetNum} = bean;
        if (times <= 0 || finishNum >= targetNum) return;
        await sleep(0.1);
        obtainPrize(bean);
        delaySeconds && await sleep(delaySeconds);
        await exchange(--times);
      }
    }

    async function updateBeanPrizes(loop = true) {
      const prizeList = await getPrizes() || [];
      if (_.isEmpty(prizeList) && loop) {
        await sleep(0.1);
        return updateBeanPrizes(false);
      }
      for (const prize of prizeList) {
        const {beanType, inStock, type} = prize;
        if (!beanType/* || type === 3*/) continue;
        // if (inStock === 0) continue;
        beanPrize[beanType] = prize || {
          finishNum: 0,
          targetNum: 0,
        };
      }
    }

    function getPrizes() {
      return api.doFormBody('smtg_queryPrize', void 0, void 0, {needDelay: false}).then(data => _.property('data.result.prizeList')(data));
    }

    async function obtainPrize(prize) {
      const {prizeId, beanType, title, encryptActId} = prize;
      // TODO 有 encryptActId 先跳过, 待完善
      if (!prizeId || encryptActId) return;
      return api.doFormBody('smtg_obtainPrize', {prizeId}, {needDelay: false}).then(async data => {
        if (!self.isSuccess(data)) {
          api.log(`${title}兑换失败, ${_.property('data.bizMsg')(data)}, prizeId: ${prizeId}`);
          const bizCode = data.data.bizCode;
          if (bizCode === 400) await updateBeanPrizes();
          return bizCode;
        }
        beanPrize[beanType].finishNum++;
        api.log(`${title}兑换成功一次`);
      });
    }
  }
}

singleRun(SuperMarketRedeem).then();

module.exports = SuperMarketRedeem;
