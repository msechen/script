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
      if (times === 5) return false;
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
          if (timeout < 3 * 60 * 60 * 60 * 1000) {
            setTimeout(() => liveRedRain(++times), timeout);
          }
          return false;
        }

        return data.activityId;
      });

      return actId && receiveRedRain(actId);
    }

    async function receiveRedRain(actId) {
      return api.doFormBody('noahRedRainLottery', {actId}).then(data => {
        if (self.isSuccess(data)) {
          self.log(JSON.stringify(data.lotteryResult));
          return receiveRedRain(actId);
        }
      });
    }
  }
}

module.exports = RedRain;
