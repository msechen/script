const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

const Api = require('./api');

const indexUrl = 'https://egame.moxigame.cn/jdIntelligentCity618/?activeId=12323423';
const activeId = new URL(indexUrl).searchParams.get('activeId');

const apiUri = 'https://hserver.moxigame.cn/jdcity';

class Moxigame extends Template {
  static scriptName = 'Moxigame';
  static scriptNameDesc = '牛18活动';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;
  static activityEndTime = '2022-06-18 09:00:00';


  static apiOptions = {
    options: {
      uri: `${apiUri}/v1`,
      headers: {
        origin: new URL(indexUrl).origin,
        referer: indexUrl,
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;

    const {lkEPin, lkToken} = await getPin() || {};
    if (!lkEPin || !lkToken) return;
    let {authcode: authCode} = await handleLogin();
    if (!authCode) return;
    let ed;
    updateEd(authCode);

    replaceObjectMethod(api, 'doBodyPath', ([functionId, body]) => {
      return [functionId, ed.Encrypt(body)];
    });

    await handleDoShare();
    await handleDoTask();

    for (let i = 0; i < 5; i++) {
      // TODO 暂不需要
      // await handleCatch();
    }

    if (self.isLastLoop()) {
      await handleRandCard();
    }

    // 获取任务列表
    async function handleDoTask() {
      const {tasks} = await api.doBodyPath('task/gameTasks');
      for (const task of tasks) {
        const {res: {sID, sName, sTime, eType}, state, adInfo} = task;
        const {sValue} = adInfo || {};
        if (/下单/.test(sName)) {
          continue;
        }
        if (state.value < state.iTargetValue) {
          if (sTime) {
            await sleep(+sTime);
            if (/浏览商品|浏览店铺|观看视频广告|浏览会场/.test(sName)) {
              await api.doBodyPath('task/uploadTask', {taskType: eType, value: 1});
            }
            if (/加购/.test(sName)) {
              await api.doBodyPath('task/execute', {api: 'addProductToCart', skuList: sValue});
            }
            if (/收藏/.test(sName)) {
              await api.doBodyPath('task/execute', {api: 'followSku', skuId: sValue});
            }
          }
        }

        if (!state.get) {
          for (let i = state.iTargetValue; i <= state.value; i++) {
            await api.doBodyPath('task/finishTask', {taskid: sID});
            await sleep();
          }
        }
      }
    }

    async function handleDoShare() {
      if (self.doneShareTask) return;
      self.updateShareCodeFn(lkEPin);
      for (const inviter of self.getShareCodeFn()) {
        const {invitinfo: {type, name}, authcode} = await handleLogin(inviter);
        if (type === 'new') {
          api.log(`助力成功${name}`);
        }
        if (type === 'repeat') {
          api.log(`重复助力${name}`);
        }
        updateEd(authcode);
      }
    }

    function updateEd(authCode) {
      ed = new Api({id: lkEPin, authCode, activeId});
    }

    function getPin() {
      return api.doUrl('https://draw.jdfcloud.com//saas/framework/encrypt/pin', {
        qs: {
          appId: '26e75115df99240d4fe1ea24a6373781',
        },
      }).then(data => {
        if (data.success) return data.data;
      });
    }

    function handleLogin(inviter) {
      api.cookie = '';
      const body = {
        'activeid': activeId,
        lkEPin: lkToken,
        lkToken,
        'source': '',
      };
      if (inviter) {
        _.assign(body, {inviter, 'inviterSource': 'niu18'});
      }
      return api.doUrl(`${apiUri}/login`, {
        body,
      });
    }

    function log(data) {
      const decryptData = ed.Decrypt(data);
      api.log(JSON.stringify(decryptData));
      return decryptData;
    }

    // 获取卡片收集程度
    async function getUserInfo(stage) {
      return api.doBodyPath('page/main', {stage});
    }

    async function handleRandCard(nextStage) {
      const {
        ownCards,
        ticketCount,
        ticketNeed,
        loopInfo: {stage, endTime},
        awardStage,
        stages,
      } = await getUserInfo(nextStage);
      const enableAward = o => o.title.startsWith('瓜分');
      const currentStage = stages[stage];
      const prevStage = stages[stage - 1];
      if (prevStage && getMoment().subtract(3, 'day').isBefore(prevStage.endTime)) {
        // 活动结束3天内需进行自动抽奖
        await handleRandCard(stage - 1);
      }
      if (enableAward(currentStage) && awardStage === 2) {
        return api.doBodyPath('page/award', {stage: `${stage}`}).then(data => {
          const {code, message, award, name} = data;
          if (code === 0) {
            api.log([message, award, name].join(''));
          } else {
            api.log(data);
          }
        });
      }
      if (getMoment().isAfter(endTime)) {
        return api.log(`${currentStage.title}(${stage})已结束`);
      }
      const notFinished = ownCards.some(o => o.num === 0);
      // 继续抽奖
      if (1) {
        for (let i = ticketNeed; i <= ticketCount; i++) {
          await api.doBodyPath('game/randCard').then(data => {
            const cards = data.cards;
            const infos = cards.map(o => `${o.id}(${o.num})`);
            api.log(`获得${infos.join(',')}`);
          });
          await sleep(2);
        }

        if (ticketCount >= ticketNeed) {
          return handleRandCard();
        }
      }
      const cardsInfo = ownCards.map(o => `${o.id}(${o.num})`);
      api.log(`${notFinished ? '还未凑齐, 继续加油' : '凑齐了!'}, ${cardsInfo}`);
    }

    async function handleCatch() {
      const {ownCards, ticketCount, ticketNeed} = await getUserInfo();
      if (ticketCount < ticketNeed) return;
      const gameCardIds = await api.doBodyPath('game/start').then(log).then(data => {
        return data.rareCards.concat(data.normalCards);
      }) || [];
      const ownCardIds = _.sortBy(ownCards, 'num').map(o => o['id']);
      api.log(`gameCardIds: ${gameCardIds}`);
      const sortCardIds = [];
      ownCardIds.forEach(id => {
        if (gameCardIds.includes(id)) {
          gameCardIds.splice(gameCardIds.findIndex(v => v === id), 1);
          sortCardIds.push(id);
        }
      });
      gameCardIds.forEach(id => {
        if (!sortCardIds.includes(id)) sortCardIds.push(id);
      });
      const _catch = (cardid, pay = false) => api.doBodyPath('game/catch', {pay, cardid});
      let cardIdIndex = 0;
      for (let i = 0; i < 5; i++) {
        const cardId = sortCardIds[cardIdIndex];
        if (!cardId) break;
        api.log(`捕获 ${cardId} 开始`);
        await _catch(cardId, cardId === 'A0012' && (ownCards.find(o => o['id'] === 'A0012').num === 0)).then(log).then(data => {
          if (data.succ) {
            api.log(`捕获 ${cardId} 成功`);
            cardIdIndex++;
          }
        });
        await sleep(3);
      }
    }
  }
}

singleRun(Moxigame).then();

module.exports = Moxigame;
