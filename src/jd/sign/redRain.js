const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const serverChan = require('../../lib/serverChan');

class RedRain extends Template {
  static scriptName = 'RedRain';
  static scriptNameDesc = '红包雨';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static needOriginH5 = true;
  static times = 1;
  static concurrent = true;

  static apiOptions = {
    signData: {},
  };

  static isSuccess(data) {
    return this._.property('subCode')(data) === '0';
  }

  static async doMain(api) {
    const self = this;
    const _ = this._;

    const nowHour = self.getNowHour();

    for (const hour of nowHour === 8 ? [9, 11, 13, 15, 17] : [19, 20, 21, 23]) {
      if (nowHour > hour) continue;
      const nowMoment = getNowMoment();
      const nowTime = nowMoment.valueOf();
      const startTime = nowMoment.hour(hour).minute(0).second(0).valueOf();
      const seconds = Math.floor((startTime - nowTime) / 1000);
      if (seconds) {
        await serverChan.sendLog();
        await sleep(seconds + 30);
        await liveRedRain();
      }
    }

    // 直播间红包雨
    async function liveRedRain() {
      const actId = await api.doUrl('http://ql4kk90rw.hb-bkt.clouddn.com/jd_live_redRain.json', {
        method: 'GET',
        headers: {
          Cookie: '',
        },
      }).then(async data => data.activityId);

      if (actId) {
        await receiveRedRain(actId);
      }
    }

    async function receiveRedRain(actId) {
      return api.doFormBody('noahRedRainLottery', {actId}).then(data => {
        if (self.isSuccess(data)) {
          const lotteryResult = data.lotteryResult;
          _.concat(lotteryResult.couponList, lotteryResult.jPeasList, lotteryResult.financeList).forEach(o => {
            if (!o) return;
            self.log(`获取到${o.prizeName}: ${o.quantity}`);
          });
        } else {
          self.log(data.msg);
        }
      });
    }
  }
}

module.exports = RedRain;
