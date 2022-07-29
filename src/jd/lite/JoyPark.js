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
  static activityEndTime = '2022-07-31';
  static defaultShareCodes = [
    'K7pyOTYxSNiwa4HaR33Otw',
    '5oL9ukD9X8J883hdXpWl7Q',
    'xCyospigVqCxSciIYOT16w',
    'CIte3i3FPeZIe5MtXuFEGw',
  ];
  static shareTaskId = '610';
  static doneShareTask = getNowHour() < 22;

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

    await self.beforeRequest(api);

    function getData(data) {
      return self.isSuccess(data) ? data.data : data;
    }

    await api.doGetBody('getStaticResource');
    await api.doGetBody('checkUserIndulge');

    const {invitePin, guideStep, fastBuyCoin, joyCoin} = await joyBaseInfo();
    await handleDoGuide();

    await handleManageJoy();

    await handleDoTask();
    await handleDoShare();

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
        const apTaskDrawAward = () => api.doFormBody('apTaskDrawAward', {taskType, taskId}).then(getData).then(data => {
          data.forEach(o => {
            const {awardName, awardGivenNumber} = o;
            api.log(`获得${awardName}: ${awardGivenNumber}`);
          });
          return data;
        });
        const doTask = async itemId => {
          itemId = itemId || void 0;
          await api.doFormBody('apDoTask', {taskType, taskId, itemId});
          await sleep(2);
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

    async function handleManageJoy(maxTimes = 2) {
      const _wait = () => sleep(5);
      const maxJoyNumber = 10;
      let startAgain = false;

      await _wait();
      let {activityJoyList, workJoyInfoList, joyNumber} = await joyList();

      if (maxTimes <= 0 || fastBuyCoin > joyCoin) {
        const notActiveWorkJoyList = _.filter(workJoyInfoList, o => o.unlock && !o['joyDTO']);
        const joyList = _.sortBy(activityJoyList, 'level');
        for (const {location} of notActiveWorkJoyList) {
          const currentMaxJoy = joyList.pop();
          if (currentMaxJoy) {
            await sleep(2);
            await joyMove(currentMaxJoy.id, location);
          }
        }
        return;
      }

      const activeWorkJoyList = _.filter(workJoyInfoList, o => o.unlock && o['joyDTO']);
      startAgain = !_.isEmpty(activeWorkJoyList);
      // 先清空工号上的 Joy
      if (startAgain) {
        for (const item of activeWorkJoyList) {
          await _wait();
          await joyMove(_.get(item, 'joyDTO.id'));
        }

        return handleManageJoy();
      }

      // 先合并相同的
      for (const joyList of _.values(_.groupBy(activityJoyList, 'level'))) {
        await _wait();
        await handleMergeJoy(joyList);
      }

      if (startAgain) {
        return handleManageJoy();
      }

      await handleBuyJoy();

      return handleManageJoy(startAgain ? --maxTimes : 0);

      async function handleBuyJoy() {
        const {fastBuyLevel, fastBuyCoin, joyCoin} = await joyBaseInfo();
        const number = activityJoyList.filter(o => o.id === fastBuyLevel).length;
        let enableBuyJoyNumber = _.min([Math.floor(joyCoin / fastBuyCoin), maxJoyNumber - joyNumber, number === 0 ? 2 : 1]);
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
        await joyMergeGet(..._.map(targets, 'id'));
        await _wait();
        return handleMergeJoy(joyList);
      }

      // 商店信息, 暂时不需要
      function gameShopList() {
        return api.doFormBody('gameShopList').then(getData);
      }

      function joyBuy(level) {
        return api.doFormBody('joyBuy', {level}).then(self.isSuccess);
      }

      function joyMergeGet(joyOneId, joyTwoId) {
        return api.doGetBody('joyMergeGet', {joyOneId, joyTwoId}).then(getData).then(data => {
          const {joyVO, joyPrizeVO} = data;
          if (joyVO) {
            api.log(`获得Joy: ${joyVO.name}(${joyVO.level})`);
            startAgain = true;
          }
          if (joyPrizeVO && joyPrizeVO.prizeName) {
            const {prizeType, prizeName} = joyPrizeVO;
            api.log(`获得额外奖励: ${prizeName}(${prizeType})`);
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
      for (const inviterPin of self.defaultShareCodes) {
        const {helpType, helpState} = await joyBaseInfo({taskId: '', inviteType: '2', inviterPin: inviterPin});
        if (helpType === 2 && helpState === 1) {
          break;
        }
      }
      const {activityJoyList} = await joyList();
      if (_.isEmpty(activityJoyList)) return;
      await api.doFormBody('joyGuide', {
        'guideStep': 11,
        'joyOneId': activityJoyList[0].id,
        'joyTwoId': activityJoyList[1].id,
      });
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
        const {leaveJoyCoin} = data;
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

singleRun(LiteJoyPark).then();

module.exports = LiteJoyPark;
