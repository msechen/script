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

    // 多次轮询不定时已有数据是否有红包雨
    await parallelRun({
      list: live.liveActivityV946,
      runFn: handleRedRain,
      onceDelaySecond: 2,
    });

    async function handleRedRain(form) {
      const liveId = JSON.parse(form.body).liveId;
      return api.doForm('liveActivityV946', form).then(async data => {
        // writeFileJSON(data, 'liveActivityV946.json', __dirname);
        const targetIconArea = (_.property('data.iconArea')(data) || []).find(o => o['type'].match('red_packege_rain')) || {};
        if (_.isEmpty(targetIconArea)) {
          api.log(`${liveId} 没有红包雨`);
          // 2点前终止
          if (self.getNowHour() <= 2) return;
          // 等待30分钟后继续执行
          await sleep(30 * 60);
          return handleRedRain(form);
        }
        const {startTime, endTime, data: {activityUrl}} = targetIconArea;
        const targetMoment = getMoment(startTime);
        const actId = new URL(activityUrl).searchParams.get('id');
        api.log(`${liveId} 下一场红包雨: ${targetMoment.format('YYYY-MM-DD HH:mm:ss')}`);
        await sleepTime([targetMoment.hour(), targetMoment.minute(), 10]);
        await noahRedRainLottery(actId);
        const endMoment = getMoment(endTime);
        await sleepTime([endMoment.hour(), endMoment.minute(), 10]);
        return handleRedRain(form);
      });
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
