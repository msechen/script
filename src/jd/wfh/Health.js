const HarmonyTemplate = require('./template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Health extends HarmonyTemplate {
  static scriptNameDesc = '健康社区';
  static shareCodeTaskList = [];
  static time = 3;
  static skipTaskIds = [9/*西医亚健康测评*/, 14/*下单有礼*/];
  static commonParamFn = () => ({"channelId": 1});
  static apiNames = {
    getTaskList: 'jdhealth_getTaskDetail',
    doTask: 'jdhealth_collectScore',
    doWaitTask: 'jdhealth_collectScore',
  };

  static async doCron(api) {
    const self = this;
    return api.doFormBody('jdhealth_collectProduceScore').then(data => {
      if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
      const {produceScore, userScore} = _.property('data.result')(data);
      api.log(`当前能量：${userScore}, 定时获得能量：${produceScore}`);
    });

    await api.doFormBody('jdhealth_getCommodities').then(data => {
      if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
      const {jBeans} = data.data.result;
      // TODO 兑换逻辑
    });
  }
}

module.exports = Health;
