const Base = require('../base');

const {sleep} = require('../../lib/common');

class Pet extends Base {
  static scriptName = 'Pet';
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
      'slaveHelp', /* 助力 */
      'getSingleShopReward', /* 浏览店铺 */
      'getThreeMealReward', /* 三餐签到 */
      'taskInit', /* 任务列表 */
      'getHelpAddedBonus', /* 领取助力人数已满奖励 */
      'initPetTown', /* 萌宠信息 */
      'feedPets', /* 喂食 */
      'energyCollect', /* 收集好感度 */
    ],
  };

  static isSuccess(data) {
    return this._.property('resultCode')(data) === '0';
  }

  static logReward(data) {
    this.isSuccess(data) && this.log(`获取到狗粮: ${data.result.threeMealReward || data.result.reward}`);
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    for (const shareCode of shareCodes) {
      await api.slaveHelp({shareCode}).then(data => {
        if (self.isSuccess(data)) {
          this.log(`给 ${_.property('result.masterNickName')(data) || 'unknown'} 助力成功`);
        } else {
          this.log(data.message);
        }
      });
    }

    for (let index = 2; index < 5; index++) {
      await api.getSingleShopReward({version: 1, index, type: 1}).then(async data => {
        if (!self.isSuccess(data)) return;
        await sleep(2);
        await api.getSingleShopReward({version: 1, index, type: 2}).then(self.logReward.bind(self));
      });
    }
  }

  static async doFeed(times, api) {
    for (let i = 0; i < times; i++) {
      await sleep(2);
      await api.feedPets();
    }
    await api.energyCollect();
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    await api.getThreeMealReward().then(self.logReward.bind(self));

    // 喂食
    // await self.doFeed(10, api);

    await api.getHelpAddedBonus().then(self.logReward.bind(self));
    await initPetTown();

    async function initPetTown() {
      await api.initPetTown().then(async data => {
        const {masterHelpPeoples, medalNum, medalPercent, needCollectEnergy, totalEnergy, foodAmount} = data.result;
        // 10g狗粮相当于6能量
        const conversionRatio = 0.6;
        const needFoodAmount = Math.round(needCollectEnergy / conversionRatio);
        self.log(`喂养进度: 第${medalNum + 1}个徽章, 进度为${medalPercent}%, 需要收集能量为${needCollectEnergy}, 已收集的能量为${totalEnergy}, 剩余狗粮为${foodAmount}g, 还差狗粮${needFoodAmount}g`);
      });
    }
  }
}

module.exports = Pet;
