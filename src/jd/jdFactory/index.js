const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

let allScore = 0;
let shareCodeCaches = [];

class jdFactory extends Base {
  static scriptName = 'jdFactory';
  static times = 2;
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
      },
    },
    formatDataFn: data => data,
    signData: {client: 'wh5', clientVersion: '1.0.0'},
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'jdfactory_getHomeData', /* 获取用户信息 */
      'jdfactory_getTaskDetail', /* 获取任务 */
      'jdfactory_collectScore', /* 做任务 */
      'jdfactory_collectElectricity', /* 收集电量 */
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    shareCodes && (shareCodeCaches = shareCodeCaches.concat(shareCodes.map(taskToken => ({taskToken}))));

    const isSuccess = data => _.property('data.bizCode')(data) === 0;

    const collectScore = async (taskToken, taskId, itemId) => {
      return api.jdfactory_collectScore({taskToken});
    };

    const activityNotStart = await api.jdfactory_getTaskDetail({}).then(async data => {
      // writeFileJSON(data, 'jdfactory_getTaskDetail.json', __dirname);

      // 不在活动期间
      if (!isSuccess(data)) return true;

      for (let {status, taskId, maxTimes, times, simpleRecordInfoVo, productInfoVos, followShopVo, shoppingActivityVos, threeMealInfoVos, assistTaskDetailVo = {}} of _.property('data.result.taskVos')(data) || []) {
        if (status === 2 || [7/*开会员*/].includes(taskId)) continue;
        let taskList = simpleRecordInfoVo || productInfoVos || followShopVo || shoppingActivityVos || threeMealInfoVos;
        if (taskId === 2/*邀请助力*/) {
          if (self.isFirstLoop()) {
            shareCodeCaches.push(assistTaskDetailVo);
            continue;
          }
          // 不需要助力自己
          taskList = shareCodeCaches.filter(o => o.taskToken !== assistTaskDetailVo.taskToken);
        }
        for (const {status, taskToken, itemId} of _.filter([].concat(taskList))) {
          if (status === 2 || maxTimes === times) continue;
          await sleep(2);
          times++;
          await collectScore(taskToken, taskId, itemId).then(data => {
            const score = _.property('data.result.score')(data);
            score && (allScore += +score);
          });
        }
      }
    });

    if (activityNotStart) return;

    if (self.isLastLoop()) {
      allScore && self.log(`获取到的电量为 ${allScore}`);

      // 输出用户信息
      await api.jdfactory_getHomeData().then(data => {
        if (!isSuccess(data)) {
          this.log('获取用户信息出错');
          return;
        }
        const {couponCount, name, remainScore, useScore, totalScore} = _.property('data.result.factoryInfo')(data) || {};
        this.log(`${name}现在还剩${couponCount}件, 电量还差 ${+totalScore - (+remainScore + +useScore)}`);
      });
    }

    // TODO 充电接口还没摸索到, 可能是 jdfactory_getLotteryResult
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    await api.jdfactory_collectElectricity().then(data => {
      this.log(`定时获取到的电量为 ${_.property('data.result.electricityValue')(data)}`);
    });
  }
}

module.exports = jdFactory;
