const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getMoment, getNowHour} = require('../../lib/moment');

const appid = 'activities_platform';
const linkId = 'LsQNxL7iWDlXUs6cFl-AAg';
const origin = 'https://joypark.jd.com';

class LiteJoyPark extends Template {
  static scriptName = 'LiteJoyPark';
  static scriptNameDesc = '汪汪乐园';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({body: {linkId}, appid});
  static needInSpeedApp = true;
  static defaultShareCodes = [
    'K7pyOTYxSNiwa4HaR33Otw',
    '5oL9ukD9X8J883hdXpWl7Q',
    'xCyospigVqCxSciIYOT16w',
    'CIte3i3FPeZIe5MtXuFEGw',
  ];
  static shareTaskId = '610';
  static times = this.lastTimeInTheDay() ? 2 : 1;
  static doneShareTask = !this.lastTimeInTheDay();
  static getLoopMinute = () => _.random(0, 59);
  static loopHours = [...new Array(24 / 3)].map((v, i) => i * 3 + 1);
  static loopOnTime = false;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
      headers: {
        origin,
        referer: `${origin}/`,
      },
    },
  };

  static isSuccess(data) {
    return _.property('code')(data) === 0;
  };

  static async beforeRequest(api) {
    api.cookieInstance.set('pwdt_id', api.cookieInstance.get('pt_pin'));
    api.cookieInstance.set('sid', '99bdf390a14d0bcb017ba110c99a400w');
    const config = {
      joyBaseInfo: {
        appId: '4abce',
        fingerprint: '8787341627338896',
      },
      joyBuy: {
        appId: 'ffb36',
        fingerprint: '8728713704958279',
      },
      joyList: {
        appId: 'e18ed',
        fingerprint: '4128416032788426',
      },
      joyMergeGet: {
        appId: 'b08cf',
        fingerprint: '6999562471815316',
      },
      joyMove: {
        appId: '50788',
        fingerprint: '9630702725515050',
      },
    };
    this.injectEncryptH5st(api, {
      config,
      afterEncryptFn: form => _.assign(form, {cthr: 1}),
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;
    let enableRestart = false;

    self.initShareCodeTaskList(shareCodes || []);

    await self.beforeRequest(api);

    function getData(data) {
      return self.isSuccess(data) ? data.data : data;
    }

    await api.doGetBody('getStaticResource');
    await api.doGetBody('checkUserIndulge');

    let currentLevel = 0;
    const {invitePin, guideStep, fastBuyCoin, joyCoin} = await joyBaseInfo();

    if (!_.isNumber(currentLevel)) return api.log('活动太火爆了, 请稍后再试');

    await handleDoGuide();

    currentLevel < 30 && joyCoin > fastBuyCoin && await handleManageJoy();

    await handleDoTask();
    await handleDoShare();

    if (self.isLastLoop()) {
      await handleGetMyPrice();

      api.log(`当前等级${currentLevel}`);

      if (currentLevel >= 30 && enableRestart) {
        await api.doFormBody('joyRestart');
        await sleep(30);
        const oldVal = self.doneShareTask;
        self.doneShareTask = false;
        await handleDoShare();
        self.doneShareTask = oldVal;
      }
    }

    async function handleDoTask() {
      const taskList = await api.doFormBody('apTaskList').then(getData);
      for (const {
        taskType,
        id: taskId,
        taskSourceUrl: itemId,
        taskLimitTimes: maxTimes,
        taskDoTimes: times,
        taskTitle,
        taskFinished,
        canDrawAwardNum
      } of taskList) {
        const apTaskDrawAward = () => api.doFormBody('apTaskDrawAward', {taskType, taskId}).then(data => {
          if (!self.isSuccess(data)) {
            return;
          }
          _.get(data, 'data', []).forEach(o => {
            const {awardName, awardGivenNumber} = o;
            api.log(`做任务获得${awardName}: ${awardGivenNumber}`);
          });
        });
        const doTask = async itemId => {
          itemId = itemId || void 0;
          await api.doFormBody('apDoTask', {taskType, taskId, itemId});
          await sleep(5);
          await apTaskDrawAward();
        };
        if (/下单/.test(taskTitle)) continue;
        if (/邀请/.test(taskTitle)) {
          if (invitePin) {
            self.shareTaskId = taskId;
            self.updateShareCodeFn(invitePin);
          }
        } else if (!taskFinished) {
          if (taskType === 'BROWSE_PRODUCT') {
            await api.doFormBody('apTaskDetail', {taskType, taskId, channel: '4'}).then(async data => {
              let {status: {finished, userFinishedTimes, finishNeed}, taskItemList} = data.data;
              if (finished) return;
              for (const {itemId} of taskItemList) {
                if (userFinishedTimes >= finishNeed) break;
                await doTask(itemId);
                ++userFinishedTimes;
              }
            });
          } else {
            await doTask(itemId);
          }
        }
        for (let i = 0; i < canDrawAwardNum; i++) {
          await apTaskDrawAward();
          await sleep(2);
        }
      }
    }

    async function handleDoShare() {
      if (self.doneShareTask) return;
      for (const inviterPin of self.getShareCodeFn()) {
        const {helpType, helpState} = await joyBaseInfo({taskId: self.shareTaskId, inviteType: '1', inviterPin});
        if (helpType === 1) {
          const formats = [`助力成功`, `已助力过`, '助力用光了'].map(v => `${v}(${inviterPin})`);
          api.log(formats[helpState - 1]);
        }
      }
    }

    async function handleGetMyPrice() {
      const {gameBigPrizeVO, gamePrizeItemVos} = await api.doFormBody('gameMyPrize').then(getData) || {};
      if (!gameBigPrizeVO) return;
      enableRestart = _.get(gameBigPrizeVO, 'prizeTypeVO.prizeUsed') === 3;
      gameBigPrizeVO['prizeName'] = gameBigPrizeVO['bigPrizeName'];
      gameBigPrizeVO['status'] = gameBigPrizeVO['topLevelStatus'];
      gameBigPrizeVO['prizeLevel'] = gameBigPrizeVO['level'];
      gamePrizeItemVos.push(gameBigPrizeVO);
      for (const {status, prizeName, prizeType, prizeTypeVO, prizeLevel} of gamePrizeItemVos) {
        if (status === 0) continue;
        if (prizeType === 4/*现金*/) {
          if (prizeTypeVO['prizeUsed'] !== 0) continue;
          const {data: {message}} = await api.doFormBody('apCashWithDraw', {
            'businessSource': 'JOY_PARK',
            'base': {
              'business': 'joyPark',
              ..._.pick(prizeTypeVO, ['id', 'poolBaseId', 'prizeGroupId', 'prizeBaseId']),
              prizeType,
            },
            'linkId': 'LsQNxL7iWDlXUs6cFl-AAg',
          });
          api.log(`${prizeName}: ${message}`);
          await sleep(5);
          if (prizeLevel === 30) {
            await sleep(30);
            await api.doFormBody('gameMyPrize').then(data => {
              enableRestart = _.get(data, 'data.gameBigPrizeVO.prizeTypeVO.prizeUsed') === 3;
            });
          }
        }
      }
    }

    async function handleManageJoy(maxTimes = 2) {
      const _wait = () => sleep(5);
      const maxJoyNumber = 10;
      let startAgain = false;

      await _wait();
      let {activityJoyList, workJoyInfoList, joyNumber} = await joyList();

      if (maxTimes <= 0) {
        const notActiveWorkJoyList = _.filter(workJoyInfoList, o => o.unlock && !o['joyDTO']);
        const sortedList = _.sortBy(activityJoyList, 'level');
        for (const {location} of notActiveWorkJoyList) {
          const currentMaxJoy = sortedList.pop();
          if (currentMaxJoy) {
            await sleep(2);
            await joyMove(currentMaxJoy.id, location);
          }
        }
        return;
      }

      const activeWorkJoyList = _.filter(workJoyInfoList, o => o.unlock && o['joyDTO']);
      // 先清空工号上的 Joy
      if ((startAgain = !_.isEmpty(activeWorkJoyList))) {
        for (const item of activeWorkJoyList) {
          await _wait();
          await joyMove(_.get(item, 'joyDTO.id'));
        }

        return handleManageJoy();
      }

      // 先合并相同的
      for (const joyList of _.values(_.groupBy(activityJoyList, 'level'))) {
        await handleMergeJoy(joyList);
      }

      if (startAgain) {
        return handleManageJoy();
      }

      const {fastBuyLevel, fastBuyCoin, joyCoin} = await joyBaseInfo();
      await handleMangeLowLevelJoys();

      if (startAgain) {
        return handleManageJoy();
      }

      await handleBuyFastJoy();

      return handleManageJoy(startAgain ? --maxTimes : 0);

      async function handleMangeLowLevelJoys() {
        const sortedList = _.sortBy(activityJoyList, 'level');
        for (const joy of sortedList) {
          const level = joy.level;
          if (level < fastBuyLevel - 2) {
            // 快满才需要回收
            if (maxJoyNumber - joyNumber <= 2) {
              await joyRecovery(joy.id);
              startAgain = true;
            }
          } else if (level < fastBuyLevel) {
            await _wait();
            const isSuccess = await joyBuy(level);
            if (!isSuccess) break;
            startAgain = true;
            break;
          }
        }
      }

      async function handleBuyFastJoy() {
        const number = activityJoyList.filter(o => o.id === fastBuyLevel).length;
        // 购买后会 fastBuyCoin 会成比例增加
        const maxCoinNumber = joyCoin / fastBuyCoin < 1 ? 0 : joyCoin / fastBuyCoin >= 2.5 ? 2 : 1;
        let enableBuyJoyNumber = _.min([maxJoyNumber - joyNumber, maxCoinNumber, number === 0 ? 2 : 1]);
        for (let i = 0; i < enableBuyJoyNumber; i++) {
          startAgain = true;
          await _wait();
          const isSuccess = await joyBuy(fastBuyLevel);
          if (!isSuccess) break;
        }
      }

      async function handleMergeJoy(joyList) {
        const targets = _.remove(joyList, (o, index) => index < 2);
        if (targets.length !== 2) {
          return;
        }
        await _wait();
        await joyMergeGet(..._.map(targets, 'id'));
        return handleMergeJoy(joyList);
      }

      // 商店信息, 暂时不需要
      function gameShopList() {
        return api.doFormBody('gameShopList').then(getData);
      }

      function joyRecovery(joyId) {
        return api.doFormBody('joyRecovery', {joyId}).then(getData);
      }

      function joyBuy(level) {
        return api.doFormBody('joyBuy', {level}).then(self.isSuccess);
      }

      function joyMergeGet(joyOneId, joyTwoId) {
        return api.doGetBody('joyMergeGet', {joyOneId, joyTwoId}).then(getData).then(data => {
          const {joyVO, joyPrizeVO} = data;
          if (joyVO) {
            api.log(`合成获得Joy: ${joyVO.name}(${joyVO.level})`);
            startAgain = true;
          }
          if (joyPrizeVO && joyPrizeVO.prizeName) {
            const {prizeType, prizeName} = joyPrizeVO;
            api.log(`合成获得额外奖励: ${prizeName}(${prizeType})`);
          }
          return data;
        });
      }

      function joyMove(joyId, location = 0) {
        return api.doFormBody('joyMove', {joyId, location}).then(getData);
      }
    }

    // TODO 还不完善, 需要自行跳过
    async function handleDoGuide() {
      if (guideStep !== 0) return;
      // TODO 新人助力
      for (const inviterPin of self.shareCodeTaskList) {
        const {helpType, helpState} = await joyBaseInfo({taskId: '', inviteType: '2', inviterPin});
        if (helpType === 2 && helpState === 1) {
          break;
        }
      }
      const {activityJoyList} = await joyList();
      if (_.isEmpty(activityJoyList)) return;
      const [joyOneId, joyTwoId] = _.map(activityJoyList, 'id');
      await api.doFormBody('joyGuide', {'guideStep': 11, joyOneId, joyTwoId});
      await sleep(5);
      await joyList();
    }

    async function joyBaseInfo(body = {}) {
      return api.doFormBody('joyBaseInfo', {
        'taskId': '',
        'inviteType': '',
        'inviterPin': '',
        ...body,
      }).then(getData).then(data => {
        const {leaveJoyCoin, level} = data;
        currentLevel = level;
        if (leaveJoyCoin) {
          api.log(`离线汪币收益: ${leaveJoyCoin}`);
        }
        return data;
      });
    }

    function joyList() {
      return api.doGetBody('joyList').then(getData);
    }
  }
}

singleRun(LiteJoyPark, ['start', 'loop'], async (method, getCookieData) => {
  const start = () => {
    let result;
    try {
      result = LiteJoyPark.start(getCookieData());
    } catch (e) {
      console.log(e);
    }
    return result;
  };
  switch (method) {
  case 'start':
    await start();
    break;
  case 'loop':
    await LiteJoyPark.loopRun(start);
    break;
  }
});

module.exports = LiteJoyPark;
