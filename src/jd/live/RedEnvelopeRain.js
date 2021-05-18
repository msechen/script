const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, parallelRun} = require('../../lib/common');
const {sleepDate} = require('../../lib/cron');
const {getMoment, getNowDate} = require('../../lib/moment');
const {getEnv} = require('../../lib/env');

// 以本地文件数据为准, 每次都需要清空
writeFileJSON([], '../../../charles/form/jd/liveActivityV946.json', __dirname);
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

      const hours = [];
      // 京豆雨一般从9点开始
      for (let i = 8; i <= 24; i++) {
        hours.push(i);
      }
      const nowHour = self.getNowHour();
      let hour;
      for (let i = 0; i < hours.length; i++) {
        const prev = i - 1;
        if (prev < 0) continue;
        if (nowHour < hours[i] && nowHour >= (hours[prev] || 0)) {
          hour = hours[i];
          break;
        }
      }
      if (hour && _.isEmpty(hadRainAreas)) {
        const startTime = `${getNowDate()} ${hour}:00:00`;
        [
          'RRA4Kr8hch51J49qasBvEv8Agf8chAD', // 5.18 17
          // 'RRA2u4bEZ2zLYr9PKfwqfXngbVCmqNE', // 5.18 16
          // 'RRA4RhWMc159kA62qLbaEa88evE7owb', // 5.17
          // 'RRA3mYmDhvzgxdpAJuscqHt32VNDqCM', // 5.16
          // 'RRA2cUocg5uYEyuKpWNdh4qE4NW1bN2', // 5.15
          // 'RRAKoqJYHaBPhFyuYdunFqtjeVBLDC', // 5.14 半点
          // 'RRA3zxrJChU14WAc5ZCD4GQMSxDYLRC', // 5.14
          // 'RRA3mYmDhvzgxdpAJuscqHt32VNDqCM', // 5.13
          // 'RRA2cUocg5uYEyuKpWNdh4qE4NW1bN2', // 5.12
          // 'RRA3zxrJChU14WAc5ZCD4GQMSxDYLRC', // 5.11
          // 'RRA4RhWMc159kA62qLbaEa88evE7owb', // 5.10
          // 'RRA2CnovS9KVTTwBD9NV7o4kc3P8PTN', // 5.10
        ].forEach((actId, index) => {
          hadRainAreas.push({
            actId,
            startTime,
            liveId: `liveId${index}`,
          });
        });
      }
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
      const logMsg = `${liveId} 下一场红包雨(${actId}): ${targetMoment.format()}`;
      api.log(logMsg);
      (api.currentCookieTimes === 0) && console.log(`[${self.scriptNameDesc}] ${logMsg}`);
      targetMoment.add(10, 'second');
      await sleepDate(targetMoment.format());
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
