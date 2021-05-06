const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, parallelRun} = require('../../lib/common');
const {sleepTime} = require('../../lib/cron');
const {getMoment} = require('../../lib/moment');
const {getEnv} = require('../../lib/env');

const {live} = require('../../../charles/api');

class LiveRedEnvelopeRain extends Template {
  static scriptName = 'LiveRedEnvelopeRain';
  static scriptNameDesc = '直播间-红包雨';
  static times = 1;
  static isWh5 = true;
  static concurrent = true;

  static async doMain(api) {
    const self = this;

    if (getEnv('JD_LIVE_RED_ENVELOPE_RAIN_STOP')) return api.log('停止执行脚本');

    await handleRain();

    async function handleRain() {
      const hadRainAreas = _.uniqBy(_.filter(await getRainArea()), 'actId');

      if (_.isEmpty(hadRainAreas)) return;

      await parallelRun({
        list: hadRainAreas,
        runFn: waitForLottery,
        onceDelaySecond: 10,
        onceNumber: 1,
      });

      await sleep(10 * 60);
      await handleRain();
    }

    async function getRainArea() {
      return parallelRun({
        list: live.liveActivityV946,
        runFn(form) {
          const liveId = JSON.parse(form.body).liveId;
          return api.doForm('liveActivityV946', form).then(async data => {
            // writeFileJSON(data, 'liveActivityV946.json', __dirname);
            const targetIconArea = (_.property('data.iconArea')(data) || []).find(o => o['type'].match('red_packege_rain')) || {};
            if (_.isEmpty(targetIconArea)) return;
            const {startTime, endTime, data: {activityUrl}} = targetIconArea;
            const actId = new URL(activityUrl).searchParams.get('id');
            return {startTime, endTime, actId, liveId};
          });
        },
        onceDelaySecond: 1,
        onceNumber: 1,
      });
    }

    async function waitForLottery(targetIconArea) {
      const {startTime, endTime, actId, liveId} = targetIconArea;
      const targetMoment = getMoment(startTime);
      const logMsg = `${liveId} 下一场红包雨(${actId}): ${targetMoment.format('YYYY-MM-DD HH:mm:ss')}`;
      api.log(logMsg);
      (api.currentCookieTimes === 0) && console.log(`[${self.scriptNameDesc}] ${logMsg}`);
      await sleepTime([targetMoment.hour(), targetMoment.minute(), 10]);
      await noahRedRainLottery(actId);
    }

    async function noahRedRainLottery(actId) {
      return api.doFormBody('noahRedRainLottery', {actId}).then(async data => {
        if (data.subCode === '0') {
          const lotteryResult = data.lotteryResult;
          _.concat(lotteryResult.couponList, lotteryResult.jPeasList, lotteryResult.financeList).forEach(o => {
            if (!o) return;
            api.log(`获取到${o.prizeName}: ${o.quantity}`);
          });
          await sleep(10);
          return noahRedRainLottery(actId);
        } else {
          api.log(data.msg);
        }
      });
    }
  }
}

singleRun(LiveRedEnvelopeRain).then();

module.exports = LiveRedEnvelopeRain;
