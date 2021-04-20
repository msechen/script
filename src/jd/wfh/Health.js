const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');

class Health extends HarmonyTemplate {
  static scriptNameDesc = '健康社区';
  static shareCodeTaskList = [];
  static time = 3;
  static skipTaskIds = [9/*西医亚健康测评*/, 14/*下单有礼*/];
  static commonParamFn = () => ({'channelId': 1});
  static apiNames = {
    getTaskList: 'jdhealth_getTaskDetail',
    doTask: 'jdhealth_collectScore',
    doWaitTask: 'jdhealth_collectScore',
  };

  static async doCron(api) {
    const self = this;
    let currentScore = 0;
    const minPoints = 12000;
    await api.doFormBody('jdhealth_collectProduceScore').then(data => {
      if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
      const {produceScore, userScore} = _.property('data.result')(data);
      currentScore = userScore;
      api.log(`当前能量：${userScore}, 定时获得能量：${produceScore}`);
    });

    if (currentScore < minPoints) return;

    await sleep(5);
    await api.doFormBody('jdhealth_getCommodities').then(data => {
      if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
      const {jBeans} = data.data.result;
      const targetBean = _.concat(jBeans).reverse().find(o => +o['exchangePoints'] <= currentScore && o['status'] === 0);
      if (!targetBean) return;
      return doExchange(targetBean.type, targetBean.id);
    });

    async function doExchange(commodityType, commodityId) {
      return api.doFormBody('jdhealth_exchange', {commodityType, commodityId}).then(data => {
        if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
        api.log(`成功兑换: ${data.data.result.jingBeanNum}`);
      });
    }
  }
}

singleRun(Health, 'cron').then();

module.exports = Health;
