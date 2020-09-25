const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

const shareCodeCaches = [];

class Wfh extends Base {
  static scriptName = 'Wfh';
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
      'wfh_getHomeData', /* 获取任务 */
      'wfh_collectScore', /* 做任务 */
      'wfh_getLotteryResult', /* 抽奖 */
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;
    const appId = '1EFRRwA';

    const isSuccess = data => _.property('data.bizCode')(data) === 0;

    const collectScore = async (taskToken, taskId, itemId) => {
      const actionType = 0;
      return api.wfh_collectScore({appId, taskToken, taskId, itemId, actionType});
    };

    const getLotteryResult = async () => {
      return api.wfh_getLotteryResult({appId}).then(data => {
        if (data.data.bizCode === 0) {
          const beanInfo = _.property('data.result.userAwardsCacheDto.jBeanAwardVo.prizeName')(data);
          beanInfo && self.log(`获取到: ${beanInfo}`);
          return getLotteryResult();
        }
      });
    };

    const activityNotStart = await api.wfh_getHomeData({appId, 'taskToken': ''}).then(async data => {
      // writeFileJSON(data, 'wfh_getHomeData.json', __dirname);

      // 不在活动期间
      if (!isSuccess(data)) return true;
      const activityInfo = _.property('data.result.activityInfo')(data);
      if (activityInfo) {
        const nowMoment = moment(activityInfo.nowTime);
        const isExpired = nowMoment.isAfter(activityInfo.endTime) || nowMoment.isBefore(activityInfo.startTime);
        if (isExpired) return true;
      }

      let allScore = 0;
      for (let {status, taskId, maxTimes, times, simpleRecordInfoVo, productInfoVos, followShopVo, assistTaskDetailVo = {}} of _.property('data.result.taskVos')(data) || []) {
        if (status === 2 || [7/*下单购买*/].includes(taskId)) continue;
        let taskList = simpleRecordInfoVo || productInfoVos || followShopVo;
        if (taskId === 6/*邀请助力*/) {
          if (shareCodeCaches.every(o => o.taskToken !== assistTaskDetailVo.taskToken)) {
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
        allScore && self.log(`获取到的金币为 ${allScore}`);
      }
    });

    if (activityNotStart) return;

    await getLotteryResult();
  }
}

module.exports = Wfh;
