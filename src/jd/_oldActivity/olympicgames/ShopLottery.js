const Olympicgames = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');

const shopSign = '1000096602';

class OlympicgamesShopLottery extends Olympicgames {
  static scriptName = 'OlympicgamesShopLottery';
  static scriptNameDesc = '全民运动会(抽奖)';
  static doneShareTask = true;
  static time = 1;
  static skipTaskIds = [3/*加入品牌会员*/];
  static needEncryptIds = [
    'bdDoTask',
  ];

  static apiNamesOption() {
    const self = this;
    return {
      getTaskList: {
        name: 'shopLotteryInfo',
        paramFn: () => ({channelSign: '1', shopSign}),
      },
      doTask: {
        name: 'bdDoTask',
        paramFn: o => ({...o, shopSign}),
      },
      doWaitTask: {
        name: 'bdDoTask',
        paramFn: o => _.assign(o, {shopSign, actionType: 0}),
      },
      doRedeem: {
        name: 'boxShopLottery',
        paramFn: () => ({shopSign}),
        async successFn(data, api) {
          if (!self.isSuccess(data)) {
            api.log(data.data.bizMsg);
            return false;
          }
          const result = data.data.result;
          delete result['securityCode'];
          delete result['status'];
          delete result['allLotteryNum'];
          api.log(JSON.stringify(result));
        },
        repeat: true,
      },
    };
  }
}

singleRun(OlympicgamesShopLottery).then();

module.exports = OlympicgamesShopLottery;
