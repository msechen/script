const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const Api = require('./api');

const activeId = 'A_40852_R_15_D_20210525';

const indexUrl = 'https://tgame.moxigame.cn/jd/niu18/?activeid=A_40852_R_15_D_20210525';

class Moxigame extends Template {
  static scriptName = 'Moxigame';
  static scriptNameDesc = '福牛多多';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://jdn18.moxigame.cn/v1',
      headers: {
        origin: 'https://tgame.moxigame.cn',
        referer: 'https://tgame.moxigame.cn',
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;

    const encryptPin = await getPin();
    if (!encryptPin) return;
    const authCode = await getAuthCode();
    if (!authCode) return;
    const ed = new Api({id: encryptPin, authCode, activeId});

    for (let i = 0; i < 5; i++) {
      await handleCatch();
    }
    await getUserInfo();

    // 获取任务列表
    // await api.doBodyPath('task/gameTasks', ed.Encrypt()).then(log);

    function getPin() {
      return api.doUrl('https://jdjoy.jd.com/saas/framework/encrypt/pin', {
        qs: {
          appId: 'c282b4f84def653a7f7489bb9308342d',
        },
      }).then(data => {
        if (data.success) return data.data;
      });
    }

    function getAuthCode() {
      api.cookie = '';
      return api.doUrl('https://jdn18.moxigame.cn/login', {
        body: {
          'activeid': activeId,
          'lkEPin': encryptPin,
          'source': '',
        },
      }).then(data => data['authcode']);
    }

    function log(data) {
      const decryptData = ed.Decrypt(data);
      api.log(JSON.stringify(decryptData));
      return decryptData;
    }

    // 获取卡片收集程度
    function getUserInfo() {
      return api.doBodyPath('page/main', ed.Encrypt()).then(log);
    }

    async function handleCatch() {
      const {ownCards, ticketCount, ticketNeed} = await getUserInfo();
      if (ticketCount < ticketNeed) return;
      const gameCardIds = await api.doBodyPath('game/start', ed.Encrypt()).then(log).then(data => {
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
      const _catch = (cardid, pay = false) => api.doBodyPath('game/catch', ed.Encrypt({pay, cardid}));
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
