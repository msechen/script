const Template = require('../base/template');

const {
  sleep,
  writeFileJSON,
  readFileJSON,
  singleRun,
  parallelRun,
  getRealUrl,
  getUrlDataFromFile,
} = require('../../lib/common');
const {sleepDate} = require('../../lib/cron');
const {getMoment, getOnlyHourMoment, getNextHour} = require('../../lib/moment');
const {getEnv} = require('../../lib/env');
const {oldActIds} = require('./store');

// 以本地文件数据为准, 每次都需要清空
writeFileJSON([], '../../../charles/form/jd/liveActivityV946.json', __dirname);
const {live} = require('../../../charles/api');

class LiveRedEnvelopeRain extends Template {
  static scriptName = 'LiveRedEnvelopeRain';
  static scriptNameDesc = '直播间-京豆雨';
  static times = 1;
  static isWh5 = true;
  static concurrent = true;
  static dirname = __dirname;

  static async doMain(api) {
    if (getEnv('JD_LIVE_RED_ENVELOPE_RAIN_STOP')) return api.log('停止执行脚本');

    const self = this;
    const localDataFile = self.getFilePath('localData.json');
    const currentCookieTimes = api.currentCookieTimes;
    const writeLocalData = () => {
      urlActIds = _.uniq(urlActIds);
      writeFileJSON({urlActIds}, localDataFile);
    };
    const clear = false;
    clear && writeFileJSON({}, localDataFile);
    let {urlActIds = []} = readFileJSON(localDataFile);
    urlActIds = _.uniq(urlActIds.concat(oldActIds));
    await getActIdsFromUrl();
    writeLocalData();

    await handleRain(true);

    async function handleRain(isInit = false) {
      // const hadRainAreas = _.uniqBy(_.filter(await getRainArea()), 'actId');
      const hadRainAreas = [];

      const hours = [];
      // 从0点开始, 每个小时都有
      for (let i = 0; i <= 24; i++) {
        hours.push(i);
      }
      let hour = getNextHour(hours);
      if (_.isEmpty(hadRainAreas)) {
        const startTime = getOnlyHourMoment(hour);

        // TODO urlActIds 应当从文件中直接获取且需要调整数据结构, 可具体到某个时间点
        urlActIds.forEach((actId, index) => {
          hadRainAreas.push({
            actId,
            startTime,
            liveId: `liveId${index}`,
          });
        });
      }
      if (_.isEmpty(hadRainAreas)) return api.log('当前没有可用的actId');

      if (isInit) {
        for (const {actId} of hadRainAreas) {
          await sleep(currentCookieTimes + 2);
          await noahRedRainLottery(actId);
        }
      }

      await parallelRun({
        list: hadRainAreas,
        runFn: waitForLottery,
        onceDelaySecond: 10,
        onceNumber: 1,
      });

      await sleep(10 * 60);
      await handleRain();
    }

    // TODO app请求的已没有这个接口, 待更新
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
      if (currentCookieTimes === 0) {
        api.log(logMsg);
        console.log(`[${self.scriptNameDesc}] ${logMsg}`);
      }
      await sleepDate(targetMoment.format());
      await noahRedRainLottery(actId);
    }

    async function noahRedRainLottery(actId) {
      return api.doFormBody('noahRedRainLottery', {actId}, void 0, {needDelay: false}).then(async data => {
        const {subCode, msg = ''} = data;
        if (subCode === '0') {
          const {lotteryResult: {couponList, jPeasList, financeList}} = data;
          _.concat(couponList, jPeasList, financeList).forEach(o => {
            if (!o) return;
            api.log(`获取到${o.prizeName}: ${o.quantity}`);
          });
          await sleep(10);
          return noahRedRainLottery(actId);
        } else {
          api.log(msg);
          if (subCode === '1' || msg.match('火爆')) {
            _.remove(urlActIds, v => v === actId);
            writeLocalData();
          }
        }
      });
    }

    async function getActIdsFromUrl() {
      if (currentCookieTimes > 0) return;
      const urlFile = require('path').resolve(__dirname, 'liveId.url');
      const urls = getUrlDataFromFile(urlFile);
      for (const url of urls) {
        let realUrl = await getRealUrl(url);
        if (realUrl.match('lives.jd.com')) {
          const liveId = new URL(realUrl).hash.split('?')[0].replace('#/', '');
          const activityRemind = await liveDetailToM(liveId).then(data => _.get(data, 'data.activityRemind'));
          if (!activityRemind) continue;
          const redRainActivity = activityRemind.find(o => o.type === 2 && _.get(o, 'data.activityUrl').match('redrain'));
          if (redRainActivity) {
            realUrl = _.get(redRainActivity, 'data.activityUrl');
          }
        }
        const actId = new URL(realUrl).searchParams.get('id');
        actId && urlActIds.push(actId);
      }
    }

    async function liveDetailToM(liveId) {
      return api.commonDo({
        uri: 'https://api.m.jd.com/api',
        headers: {
          cookie: '',
          origin: 'https://lives.jd.com',
        },
        qs: {
          appid: 'h5-live',
          functionId: 'liveDetailToM',
          body: {liveId},
          t: getMoment().valueOf(),
        },
      });
    }
  }
}

singleRun(LiveRedEnvelopeRain).then();

module.exports = LiveRedEnvelopeRain;
