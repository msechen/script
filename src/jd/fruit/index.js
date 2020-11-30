const Base = require('../base');

const {sleep, getNowMoment} = require('../../lib/common');

class Fruit extends Base {
  static scriptName = 'Fruit';
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
      },
      qs: {
        appid: 'wh5',
      },
    },
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'initForFarm', /* 助力 */
      'waterGoodForFarm', /* 浇水 */
      'clockInForFarm', /* 总签到获取水滴 */
      'gotThreeMealForFarm', /* 三餐签到 */
      'gotWaterGoalTaskForFarm', /* 被水滴砸中 */
      'waterRainForFarm', /* 采集水滴 */
      'taskInitForFarm', /* 任务列表 */
      'waterFriendForFarm', /* 给好友浇水 */
      'waterFriendGotAwardForFarm', /* 收集给好友浇水 */
    ],
  };

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static amountLog(data) {
    this.isSuccess(data) && this.log(`获取的水滴数: ${data.amount || data.addEnergy || data.addWater}`);
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    const waterTimes = process.env.JD_FRUIT_WATER_TIMES;
    waterTimes && await waterGoodForFarm(waterTimes);

    for (const shareCode of shareCodes) {
      await sleep();
      await api.initForFarm({shareCode}).then(data => {
        const {helpResult} = data;
        if (self.isSuccess(helpResult)) {
          self.log(`给 ${_.property('masterUserInfo.nickName')(helpResult) || 'unknown'} 助力成功`);
        }
      });
    }

    // 一天两次
    await api.waterRainForFarm({type: 1, hongBaoTimes: 100}).then(self.amountLog.bind(self));

    // 总签到获取水滴
    if (getNowMoment().weekday() === 0) {
      await sleep();
      await api.clockInForFarm({type: 2}).then(self.amountLog.bind(self));
    }

    // 完成给好友浇水的任务
    await api.taskInitForFarm().then(async data => {
      let {waterFriendCountKey, waterFriendMax} = data.waterFriendTaskInit;
      for (let i = 0; i < waterFriendMax - waterFriendCountKey; i++) {
        await sleep(2);
        const shareCode = shareCodes[i];
        shareCode && await api.waterFriendForFarm({shareCode});
      }
      await api.waterFriendGotAwardForFarm().then(self.amountLog.bind(self));
    });

    await api.initForFarm().then(data => {
      const {treeEnergy, treeTotalEnergy, totalEnergy} = data.farmUserPro || {};
      if (treeTotalEnergy) {
        let msg = `需要总水滴数为: ${treeTotalEnergy}, 收成还差水滴数: ${treeTotalEnergy - treeEnergy}, 当前水滴数: ${totalEnergy}`;
        const canHarvest = treeTotalEnergy - treeEnergy <= totalEnergy;
        canHarvest && (msg += ', 可以收成了!!!');
        self.log(msg);
      } else {
        self.log('目前没有种植水果');
      }
    });

    async function waterGoodForFarm(times) {
      let successTimes = 0;
      for (let i = 0; i < times; i++) {
        await sleep(2);
        const canNext = await api.waterGoodForFarm().then(data => {
          if (self.isSuccess(data)) {
            successTimes++;
            return true;
          }
        });
        if (!canNext) return;
      }
      successTimes && self.log(`成功浇水 ${successTimes} 次`);
    }
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    await api.gotThreeMealForFarm().then(self.amountLog.bind(self));

    await api.gotWaterGoalTaskForFarm({type: 3}).then(self.amountLog.bind(self));
  }
}

module.exports = Fruit;
