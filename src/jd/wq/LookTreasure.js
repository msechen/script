const WqBase = require('./index');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../lib/common');
const _ = require('lodash');
const {getRealUrl} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');

const indexUrl = 'https://wqs.jd.com/sns/202009/22/fansactivecopy/index.html';

class LookTreasure extends WqBase {
  static scriptName = 'LookTreasure';
  static scriptNameDesc = '粉丝专属福利';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static customApiOptions = {
    uri: 'https://wq.jd.com/activet2/looktreasure',
    headers: {
      referer: indexUrl,
    },
  };

  static async beforeRequest(api) {
    replaceObjectMethod(api, 'doGetPath', ([functionId, qs, options]) => {
      qs = {
        _: getMoment().valueOf(),
        g_login_type: 0,
        callback: functionId.split('_')[0],
        ...qs,
      };
      return [functionId, qs, options];
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;
    // TODO getRealUrl indexUrl
    const loginSuccess = await self.mLoginWeb(api, indexUrl);
    if (!loginSuccess) return;
    await self.beforeRequest(api);

    await handleDrawFansActive({uuid: 'SQWT'});
    await handleDrawFansActive({uuid: 'JRYX01'});
    await handleDrawFans();
    await handleDrawVideo();

    // https://wqs.jd.com/sns/202009/22/fansactivecopy/index.html
    async function handleDrawFans(funSuffix = 'copytemporary', qs) {
      const {first, ownprize: ownPrize, prize} = await api.doGetPath(`query_${funSuffix}`, qs);
      // TODO 通过比较 ownPrize 和 prize
      if (first === 0) {
        await api.doGetPath(`draw_${funSuffix}`, qs).then(data => {
          if (!self.isSuccess(data)) return api.log('抽取失败');
          const {sPrizeDesc, sPrizeName} = data['prize'];
          api.log(`[fans] 抽到${sPrizeDesc}: ${sPrizeName}`);
        });
      }
    }

    // https://wqs.jd.com/sns/202109/22/fansactiveall/index.html?qwer=SQWT
    // https://wqs.jd.com/sns/202109/22/fansactiveall/index.html?qwer=JRYX01
    async function handleDrawFansActive({url, uuid}) {
      if (url) {
        const realUrl = await getRealUrl(url);
        uuid = new URL(realUrl).searchParams.get('qwer');
      }
      const {backEnd: backendId} = await api.doGetPath('query_tempactivconfig', {uuid});
      if (!backendId) return api.log(`[${uuid}] 获取出错`);
      await handleDrawFans('activetemporary', {backendId});
    }

    // https://wqs.jd.com/sns/202108/03/videofangrowth/index.html
    async function handleDrawVideo(maxTimes = 5) {
      if (maxTimes <= 0) return;
      // TODO 查询, 不确定是否有用
      await api.doGetPath('query_fans', {callback: 'queryLibao'});
      const {prize, msg} = await api.doGetPath('draw_fans', {callback: 'openLibao'});
      if (_.isEmpty(prize)) {
        api.log(msg);
        await sleep(2);
        return handleDrawVideo(--maxTimes);
      }
      api.log(`[video] 获得${_.map(prize, 'sPrizeName').join(', ')}`);
    }
  }
}

singleRun(LookTreasure).then();

module.exports = LookTreasure;
