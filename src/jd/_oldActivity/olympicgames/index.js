const Template = require('../../base/SmashUtilsTemplate');

const {sleep, writeFileJSON, singleRun, readFileJSON} = require('../../../lib/common');
const _ = require('lodash');

class Olympicgames extends Template {
  static scriptName = 'Olympicgames';
  static scriptNameDesc = '全民运动会';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static needInAppComplete = false;
  static needInApp = false;
  static maxTaskDoneTimes = 4;

  static skipTaskIds = [2/*邀请好友助力*/].concat([14/*入会*/, 26/*入会*/]);
  static indexUrl = 'https://wbbny.m.jd.com/babelDiy/Zeus/2rtpffK8wqNyPBH6wyUDuBKoAbCt/index.html';
  static functionIdPrefix = 'olympicgames';
  static smashUtilData = {
    scriptUrl: 'https://storage.360buyimg.com/tokyo-olympic/1.0.0/js/app.84c6dabd.js',
    smashInitData: {appid: '50085', sceneid: 'OY217hPageh5'},
    patchJSContentFn(jsContent) {
      const entryReg = /(__webpack_require__\(__webpack_require__.s=)(\d+)(?=\)})/;
      const syntaxModule = '!function(n){var r={};function o(e){if(r[e])';
      const needModuleId = 355;
      const moduleIndex = jsContent.indexOf(syntaxModule, 1);
      const findEntry = entryReg.test(jsContent);
      if (!(moduleIndex && findEntry)) {
        throw new Error('Module not found.');
      }
      return jsContent.replace(entryReg, `$1${needModuleId}`);
    },
    patchRunFn(smashUtils, data) {
      const random = Math.floor(1e7 + 9e7 * Math.random()).toString();
      const {log} = smashUtils.get_risk_result({
        id: random,
        data: {
          random,
        },
      });
      return {
        ...data,
        ss: JSON.stringify({extraData: {log, sceneid: this.smashInitData.sceneid}, random}),
      };
    },
  };
  static needEncryptIds = [
    'assist',
    'doTaskDetail', 'collectCurrency',
    'startTraining', 'speedTraining', 'endTraining',
    'receiveCash',
  ];
  static needLocalEncryptBody = true;
  static needSelfEncryptBody = true;
  static defaultShareCodes = [
    'HcmphO2hRwilf4WbHt03uVg1nRZRi20oGBqybmXMCSg4lrWabuVpzIFS7l7rtYHoZrfzteZe6mDa',
    'HcmphL_3Eln_e4bWW5hX1iio2B-1Z8J4lZ9HMLw3vGck5H9WdxKNaR8a6A',
  ];
  static apiCustomOption = {
    signData: {appid: 'o2_act'},
  };

  static getCharlesForms() {
    return readFileJSON(`../../../charles/chlsj/jd/olympicgames_doTaskDetail/${this.currentCookieTimes}.chlsj`, __dirname);
  }

  static apiNamesOption() {
    const self = this;
    return {
      afterGetTaskList: {
        name: 'home',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;

          const {bubbleInfos, userActBaseInfo, trainingInfo} = data.data.result;
          for (const {type} of bubbleInfos) {
            if (type === 7/*明日奖励*/) continue;
            if (type === 5) {/*红包奖励*/
              await api.doFormBody('receiveCash', {type: 3});
              continue;
            }
            await api.doFormBody('collectCurrency', {type});
          }
          await handleDoTraining(trainingInfo);
          await logFormat(userActBaseInfo);

          // 运动
          async function handleDoTraining(info) {
            const {state, countdown, finishFlag} = info;
            if (finishFlag) return;
            if (state === 0 || !countdown) {
              await api.doFormBody('startTraining');
              await sleep(5);
              await api.doFormBody('speedTraining');
            }
          }

          async function logFormat(info) {
            const {poolMoney, medalLevel, cash, poolCurrency, exchangeThreshold} = info;
            if (poolCurrency && poolCurrency >= exchangeThreshold) {
              const newInfo = await api.doFormBody('receiveCash', {type: 6}).then(data => _.get(data, 'data.result.userActBaseVO') || {});
              return logFormat(_.assign(info, newInfo, _.isEmpty(newInfo) ? {} : {medalLevel: medalLevel + 1}));
            }
            api.log(`可兑换红包: ${poolMoney}, 等级: ${medalLevel}(${cash}元红包), 进度: ${poolCurrency}/${exchangeThreshold}`);
          }
        },
      },
    };
  };

  static async handleDoShare(api) {
    const self = this;
    for (const shareCode of self.getShareCodeFn()) {
      await assist(shareCode);
    }

    async function assist(inviteId) {
      const _do = type => api.doFormBody('assist', {inviteId, type});

      const {masterUserInfo: {nickname}} = await _do().then(data => _.get(data, 'data.result'));
      return _do('confirm').then(data => {
        if (!self.isSuccess(data)) return api.log(_.get(data, 'data.bizMsg'));
        api.log(`已成功助力 ${nickname}`);
      });
    }
  }
}

function randomString(e) {
  e = e || 32;
  let t = 'abcdefhijkmnprstwxyz2345678', a = t.length, n = '';
  for (i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n;
}

singleRun(Olympicgames).then();

module.exports = Olympicgames;
