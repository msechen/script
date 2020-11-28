const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment, getNowDate} = require('../../lib/common');
const moment = require('moment-timezone');

class Sign extends Template {
  static scriptName = 'Sign';
  static times = 1;

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static async doMain(api) {
    const self = this;
    const _ = this._;

    async function doTask({name, url, options, isSuccessFn, rewardOutputFn}) {
      await api.doUrl(url, options).then(data => {
        if (isSuccessFn(data)) {
          if (!rewardOutputFn) {
            self.log(`${name} 成功`);
            return;
          }
          self.log(`${name} 获取到 ${rewardOutputFn(data)}`);
        }
      });
    }

    const getLuckDraw = {
      name: '天天优惠大乐透',
      times: 2,
      url: 'https://api.m.jd.com/client.action?functionId=getLuckDrawEntrance&body=%7B%22platformType%22%3A%221%22%7D&appid=couponPackDetail&client=m&clientVersion=1.0.0&area=19_1601_3634_63217&geo=%5Bobject%20Object%5D&uuid=c6993893af46e44aa14818543914768cf2509fbf',
      options: {
        headers: {
          origin: 'https://h5.m.jd.com',
        },
      },
      isSuccessFn: data => _.property('code.luckyDrawData.checkWinOrNot')(data),
      rewardOutputFn: data => {
        const luckyDrawData = _.property('result.luckyDrawData')(data);
        if (luckyDrawData) return `${luckyDrawData.prizeName}: 可抵扣${luckyDrawData.discountDesc}(${luckyDrawData.quotaDesc})`;
      },
    };

    const shopSignUrl = [
      ['better', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%22905CF71BDAEED1B9193B90C6184F6BCB%22,%22venderId%22:1000281262,%22activityId%22:10168782,%22type%22:56,%22actionType%22:7}'],
      ['比乐', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%22DE0B3D71D67D96A0CE19DE6A12F8A842%22,%22venderId%22:1000095723,%22activityId%22:10163552,%22type%22:56,%22actionType%22:7}'],
      ['博世', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%2253F4272893F3D6EC7E34D734EFF4F80F%22,%22venderId%22:1000002423,%22activityId%22:10173826,%22type%22:56,%22actionType%22:7}'],
    ];
    const shopSign = {
      name: '店铺签到',
      url: '',
      options: {
        headers: {
          referer: 'https://h5.m.jd.com',
        },
      },
      isSuccessFn: data => data.code === 200,
    };

    const taskOptions = [
      {
        name: '十元街签到',
        url: 'https://api.m.jd.com/api?functionId=userSignIn&appid=swat_miniprogram&body={"activityId":"8d6845fe2e77425c82d5078d314d33c5"}',
        options: {
          headers: {
            referer: 'https://servicewechat.com/wxa5bf5ee667d91626/107/page-frame.html',
          },
        },
        isSuccessFn: data => data.code === 0,
        rewardOutputFn: data => _.property('data.todayPrize.beanAmount')(data),
      },
      getLuckDraw,
      ...shopSignUrl.map(([name, url]) => _.assign({}, shopSign, {url, name: `${shopSign.name}(${name})`})),
    ];

    for (const options of taskOptions) {
      const {times = 1} = options;
      for (let i = 0; i < times; i++) {
        await doTask(options);
      }
    }
  };
}

module.exports = Sign;
