const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {sleepTime} = require('../../lib/cron');
const {getNowMoment} = require('../../lib/moment');

const {live} = require('../../../charles/api');

class LiveRedEnvelopeRain extends Template {
  static scriptName = 'LiveRedEnvelopeRain';
  static scriptNameDesc = '直播间-红包雨';
  static times = 1;
  static concurrent = true;
  static concurrentOnceDelay = 0;

  static async doMain(api) {
    const self = this;

    await getActId(live.liveActivityV946[0]);

    async function getActId(form) {
      return api.doForm('liveActivityV946', form).then(async data => {
        // writeFileJSON(data, 'liveActivityV946.json', __dirname);
        const targetIconArea = (_.property('data.iconArea')(data) || []).find(o => o['type'].match('red_packege_rain')) || {};
        if (_.property('data.state')(targetIconArea) !== 1) return;
        const {startTime, data: {activityUrl}} = targetIconArea;
        const targetMoment = getNowMoment(startTime);
        const actId = new URL(activityUrl).searchParams.get('id');
        await sleepTime([targetMoment.getHours(), targetMoment.getMinutes()]);
        return noahRedRainLottery(actId);
      });
    }

    async function noahRedRainLottery(actId) {
      return api.doFormBody('noahRedRainLottery', {actId}).then(data => {
        if (data.subCode === '0') {
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

singleRun(LiveRedEnvelopeRain).then();

module.exports = LiveRedEnvelopeRain;
