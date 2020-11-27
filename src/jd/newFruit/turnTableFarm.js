const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

const TASK_DO = 1;
const TASK_DONE = 2;

class TurntableFarm extends Template {
  static scriptName = '天天红包';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiOptions = {
    signData: {appid: 'wh5'},
    formatDataFn: data => data,
  };

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'initForTurntableFarm',
        paramFn: self.commonParamFn,
        successFn: async (data) => {
          // writeFileJSON(data, 'initForTurntableFarm.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('turntableBrowserAds')(data) || [];
          for (let {
            adId,
            status,
            gotStatus,
            totalTimes: maxTimes,
            times,
            browserTimes: waitDuration,
          } of taskList) {
            if (status && gotStatus) continue;

            let list = [];

            list.push(_.assign({
              adId, type: status ? TASK_DONE : TASK_DO,
            }, self.commonParamFn()));

            status && (waitDuration = 0);
            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          const {shareCodeAddOn} = data;
          const currentShareCode = await self._api.doFormBody('initForFarm').then(data => data.farmUserPro.shareCode + shareCodeAddOn);
          !self.shareCodeTaskList.includes(currentShareCode) && self.shareCodeTaskList.push(currentShareCode);

          let list = self.getShareCodeFn();

          list.length && result.push({
            list,
            option: {
              firstFn: (shareCode) => {
                self._api.doFormBody('initForFarm', {shareCode});
              },
            },
          });

          return result;
        },
      },
      doTask: {
        name: 'browserForTurntableFarm',
        paramFn: o => o,
      },
      doWaitTask: {
        name: 'browserForTurntableFarm',
        paramFn: o => {
          o.type = TASK_DONE;
          return o;
        },
      },
      doRedeem: {
        name: 'lotteryForTurntableFarm',
        paramFn: () => _.assign({type: 1}, self.commonParamFn()),
        successFn: async data => {
          const {addWater, remainLotteryTimes} = data;
          if (!self.isSuccess(data) || remainLotteryTimes === 0) return false;
          await sleep(5);

          addWater && self.log(`获取的水滴数: ${addWater}`);
        },
        repeat: true,
      },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    await api.doFormBody('timingAwardForTurntableFarm');
    await api.doFormBody('lotteryForTurntableFarm', {type: 1}).then(async data => {
      const {addWater, remainLotteryTimes} = data;
      if (!self.isSuccess(data) || remainLotteryTimes === 0) return false;
      await sleep(5);

      addWater && self.log(`获取的水滴数: ${addWater}`);
    });
  }
}

module.exports = TurntableFarm;
