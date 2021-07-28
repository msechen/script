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
    const totalBlue = await api.doFormBody('smtg_newHome').then(data => {
      if (!self.isSuccess(data)) return 0;
      return _.property('data.result.totalBlue')(data);
    });
    await updateBeanPrizes();
    await sleepTime([23, 59, 59]);
    await sleep(0.2);
    handleExchange(10, 'BeanPackage');
    await sleep(5);
    await updateBeanPrizes();
    await handleExchange(40, 'Bean', 2, false);

    async function handleExchange(loopTimes = 0, type, delaySeconds = 0, enableUpdatePrize = true) {
      beanPrize[type]['finished'] = 0;
      await exchange(loopTimes);

      async function exchange(times) {
        const oldBean = _.assign({}, beanPrize[type]);
        enableUpdatePrize && await updateBeanPrizes();
        const bean = _.assign({}, beanPrize[type]);
        if (oldBean.prizeId !== bean.prizeId) {
          enableUpdatePrize = false;
        } else {
          // 可能是旧数据, 需要重置
          bean['finished'] = oldBean['finished'];
        }
        const {finished, limit, blueCost, status/*status=2是没有库存,但是暂时忽略*/} = bean;
        if (times <= 0 || finished >= limit || blueCost > totalBlue) return;
        await sleep(0.1);
        obtainPrize(bean);
        delaySeconds && await sleep(delaySeconds);
        await exchange(--times);
      }
    }

    async function updateBeanPrizes(loop = true) {
      const areaList = await getPrizes() || [];
      if (_.isEmpty(areaList) && loop) {
        await sleep(0.1);
        return updateBeanPrizes(false);
      }
      for (const {title, areaId, periodId, prizes} of areaList) {
        if (!title.match('京豆专区')/* || type === 3*/) continue;
        prizes.forEach(o => {
          const {amount} = o;
          beanPrize[amount === 1000 ? 'BeanPackage' : 'Bean'] = _.assign(o, {areaId, periodId});
        });
      }
    }

    function getPrizes() {
      return api.doFormBody('smt_queryPrizeAreas', void 0, void 0, {needDelay: false}).then(data => _.property('data.result.areas')(data));
    }

    async function obtainPrize(prize) {
      const {prizeId, areaId, periodId, beanType, name, encryptActId} = prize;
      // TODO 有 encryptActId 不会有影响, 待确认
      if (!prizeId/* || encryptActId*/) return;
      const body = {
        'connectId': prizeId,
        areaId, periodId,
        'informationParam': {
          'eid': '',
          'referUrl': -1,
          'shshshfp': '',
          'openId': -1,
          'isRvc': 0,
          'fp': -1,
          'shshshfpa': '',
          'shshshfpb': '',
          'userAgent': -1,
        },
        'channel': '18',
      };
      return api.doFormBody('smt_exchangePrize', body, {needDelay: false}).then(async data => {
        if (!self.isSuccess(data)) {
          api.log(`${name}兑换失败, ${_.property('data.bizMsg')(data)}, prizeId: ${prizeId}`);
          const bizCode = data.data.bizCode;
          if (bizCode === 400) await updateBeanPrizes();
          return bizCode;
        }
        beanPrize[beanType].finished++;
        api.log(`${name}兑换成功一次`);
      });
    }
  }
}

singleRun(SuperMarketRedeem).then();

module.exports = SuperMarketRedeem;
