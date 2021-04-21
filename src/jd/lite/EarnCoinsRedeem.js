const EarnCoins = require('./EarnCoins');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {doFormBody} = require('./api');
const _ = require('lodash');

class EarnCoinsRedeem extends EarnCoins {
  static scriptName = 'EarnCoinsRedeem';
  static scriptNameDesc = '赚金币-兑换红包';
  static concurrent = false;

  static apiOptions = {
    options: {
      headers: {
        origin: 'https://gold.jd.com',
      },
      form: {
        appid: 'market-task-h5',
      },
    },
  };

  static async doMain(api) {
    const self = this;

    const apiExecute = doFormBody.bind(0, api, 'MyAssetsService.execute');

    await handleRedExchange();
    // await handleProduceExchange();

    // 一天只能兑换一次
    async function handleRedExchange() {
      const redEnvelopes = [0, 0.3/*新人专享*/, 3, 10, 50];
      // 要兑换那个就更改下标
      const redEnvelope = redEnvelopes[0];
      if (!redEnvelope) return api.log('请选择正确的参数');
      const {
        isGetCoupon,
        balanceVO,
        gears,
      } = await apiExecute('goldShopPage', {channel: '1'}).then(data => data.data) || {};
      if (isGetCoupon) return api.log('今天已经兑换了, 请明天再来');
      if (!balanceVO) return api.log('接口请求错误');
      const gear = gears.find(o => {
        const amount = +o['amount'];
        return amount === redEnvelope && o['status'] === 3 && +balanceVO['estimatedAmount'] >= amount;
      });
      if (!gear) return api.log(`没有找到要替换的红包, 请进行修正参数`);
      const {order: hongBaoOrder, type} = gear;
      await apiExecute('cashOutBySendHongBao', {hongBaoOrder, type});
    }

    // TODO 兑换商品, 待完善
    async function handleProduceExchange() {
      await doFormBody(api, 'ProductExchangeService', 'productList', {pageNum: 1, pageSize: 10});
    }
  }
}

singleRun(EarnCoinsRedeem, 'start', async function (method, getCookieData) {
  if (method === 'start') return EarnCoinsRedeem.start(getCookieData());
}).then();

module.exports = EarnCoinsRedeem;
