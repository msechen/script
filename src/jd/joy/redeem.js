const Joy = require('./index');
const {sleepTime} = require('../../lib/cron');
const {singleRun} = require('../../lib/common');
const {encrypt} = require('./api');

class JoyRedeem extends Joy {
  static scriptName = 'JoyRedeem';
  static scriptNameDesc = '宠汪汪-换豆豆';
  static times = 1;
  static repeatDoTask = false;
  static concurrent = true;
  static loopHours = [23, 7, 15];

  static async doMain(api) {
    const self = this;

    const petCoin = await api.doPath('enterRoom/h5', void 0, {body: {}}).then(data => _.property('data.petCoin')(data));
    const beanHours = self.loopHours.map(hour => hour + 1);
    const targetHour = self.getNowHour() + 1;
    if (!beanHours.includes(targetHour)) return api.log(`当前时间不在兑换范围内`);
    const beanInfos = await getBeanInfos(targetHour);
    if (beanInfos.find(o => o['giftValue'] === 500).salePrice > petCoin) {
      return api.log('当前积分不足, 无法兑换');
    }
    api.log(`准备${targetHour}进行兑换`);
    await sleepTime(targetHour);
    api.log('开始兑换');
    await handleExchange();

    async function getBeanInfos(targetHour) {
      if (targetHour === 24) targetHour = 0;
      const beanConfigs = await api.doUrl('https://jdjoy.jd.com/common/gift/getBeanConfigs', {method: 'GET'}).then(result => result['beanConfigs']) || {};
      return beanConfigs[`beanConfigs${targetHour}`] || [{
        'id': 339,
        'giftId': 8,
        'giftName': '500京豆',
        'giftType': 'jd_bean',
        'giftValue': 500.0000,
        'salePrice': 8000,
      }];
    }

    // 兑换豆豆
    async function handleExchange() {
      if (!beanInfos) return;
      for (const beanInfo of beanInfos) {
        await doExChange(beanInfo);
      }
    }

    async function doExChange(beanInfo) {
      const {id, leftStock, giftValue, giftName, salePrice} = beanInfo;
      // 只兑换500的, 需要8500积分
      if (/*leftStock === 0 || */giftValue !== 500 || petCoin < salePrice) return;
      const body = {
        'buyParam': {
          'orderSource': 'pet',
          'saleInfoId': id,
        },
        'deviceInfo': {
          'eid': 'M7UO6SRTFR5GQS7SPKPOGT7ZZB6KH2I7CUXZGVFSPJ5773VII5RHNSVRM4FK4RSLDCBRG3QQUS4WNC5PZ2767E6D3Q',
          'fp': '28c2c6f0199a7790b251a724031be426',
          'deviceType': '',
          'macAddress': '',
          'imei': '',
          'os': '',
          'osVersion': '',
          'ip': '',
          'appId': '',
          'openUUID': '',
          'idfa': '',
          'uuid': '',
          'clientVersion': '',
          'networkType': '',
          'appType': '',
          'sdkToken': 'jdd01KKYHD3TR2D74RQPGTZ4XDKYRETYXJ4W2EKNLXFBWQJ6WSFEJEO345P4SCFDCLATWWWACAWMO7D6XGZLNCUU6BNXYQQUXNGCL4ZLYVZQ01234567',
        },
      };
      await api.doUrl('https://jdjoy.jd.com/common/gift/new/exchange', {
        headers: {
          contentType: 'application/json',
        },
        body,
        qs: encrypt(body, true),
        needDelay: false,
      }).then(data => {
        api.log(`${giftName} 兑换结果: ${data['errorCode']}`);
      });
    }
  }
}

singleRun(JoyRedeem, ['start', 'loop'], async (method, getCookieData) => {
  if (method === 'start') {
    return start();
  }
  if (method === 'loop') {
    return JoyRedeem.loopRun(start);
  }

  async function start() {
    return JoyRedeem.start(getCookieData());
  }
}).then();

module.exports = JoyRedeem;
