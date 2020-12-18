const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');

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


    await liveRedRain();

    // 直播间红包雨
    async function liveRedRain(times = 0) {
      if (times === 6) return false;
      const nowMoment = getNowMoment();
      const nowTime = nowMoment.valueOf();
      const actId = await api.doUrl('http://ql4kk90rw.hb-bkt.clouddn.com/jd_live_redRain.json', {
        method: 'GET',
        qs: {
          t: nowTime,
        },
      }).then(data => {
        const startTime = data.startTime;
        const timeout = startTime - nowTime;

        if (getNowMoment(void 0, startTime).isAfter(nowMoment)) {
          if (timeout < 3 * 60 * 60 * 1000) {
            handleDelay(timeout);
          }
          return false;
        }

        return data.activityId;
      });

      if (actId) {
        await receiveRedRain(actId);
        handleDelay(30 * 60 * 1000);
      }

      function handleDelay(delay) {
        setTimeout(liveRedRain.bind(0, ++times), delay);
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
          return receiveRedRain(actId);
        }
      });
    }
  }
}

module.exports = RedRain;
