const Joy = require('./index');
const {sleepTime} = require('../../lib/cron');
const {singleRun} = require('../../lib/common');

class JoyRedeem extends Joy {
  static scriptName = 'JoyRedeem';
  static scriptNameDesc = '宠汪汪-换豆豆';
  static times = 1;
  static repeatDoTask = false;
  static concurrent = true;
  static concurrentOnceDelay = 0;

  static async doMain(api) {
    const self = this;

    const petCoin = await api.doPath('enterRoom/h5', void 0, {body: {}}).then(data => _.property('beanConfigs.petCoin')(data));
    const beanInfos = await getBeanInfos();
    await sleepTime(24);
    await handleExchange();

    async function getBeanInfos() {
      const beanConfigs = await api.doUrl('https://jdjoy.jd.com/common/gift/getBeanConfigs', {method: 'GET'}).then(result => result['beanConfigs']) || {};
      let beanInfos = beanConfigs['beanConfigs0'] || [{
        'id': 339,
        'giftId': 8,
        'giftName': '500京豆',
        'giftType': 'jd_bean',
        'giftValue': 500.0000,
        'salePrice': 8000,
      }];
      /*if (0 <= nowHour && nowHour < 8) {
        beanInfos = beanConfigs['beanConfigs0'];
      }
      if (nowHour >= 8 && nowHour < 16) {
        beanInfos = beanConfigs['beanConfigs8'];
      }
      if (nowHour >= 16 && nowHour <= 23) {
        beanInfos = beanConfigs['beanConfigs16'];
      }*/
      return beanInfos;
    }

    // 兑换豆豆
    async function handleExchange() {
      const nowHour = self.getNowHour();
      if (nowHour !== 23) return;
      if (!beanInfos) return;
      for (const {id, leftStock, giftValue, giftName} of beanInfos) {
        await doExChange({id, leftStock, giftValue, giftName});
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
        qs: self.sign(body, 'application/json'),
      }).then(data => {
        self.log(`${giftName} 兑换结果: ${data['errorCode']}`);
      });
    }
  }
}

singleRun(JoyRedeem).then();

module.exports = JoyRedeem;
