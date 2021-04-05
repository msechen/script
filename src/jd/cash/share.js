const Base = require('../base');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');

class CashShare extends Base {
  static scriptName = 'CashShare';
  static apiOptions = {
    signData: {
      appid: 'CashReward',
    },
    options: {
      headers: {
        origin: 'https://h5.m.jd.com',
      },
    },
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'cash_share_home', // 任务列表
      'cash_mob_reward', // 获取奖励
      'cash_doTask', // 隐藏任务
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    await getHome();

    async function getHome() {
      await api.cash_share_home().then(async data => {
        // writeFileJSON(data, 'cash_share_home.json', __dirname);

        const taskInfo = _.property('data.result.taskInfo')(data);

        if (!_.isEmpty(taskInfo) && taskInfo.finishFlag === 2) {
          await api.cash_doTask({type: taskInfo.type, taskInfo: taskInfo.desc});
          return getHome();
        }

        const {assistedRecord, toTakeRewardList, shareNodeTips} = _.property('data.result.shareFloor')(data) || {};
        if (!_.isEmpty(toTakeRewardList)) {
          const repeat = await api.cash_mob_reward({source: _.last(toTakeRewardList)}).then(data => {
            if (!self.isSuccess(data)) return;
            const {shareRewardAmount, shareRewardTip} = data.data.result;
            self.log(`${shareRewardTip}: ${shareRewardAmount}`);
            return true;
          });
          if (repeat) return getHome();
        }

        const currentNodeTimes = shareNodeTips.split('/').map(v => +v.replace(/[^\d]/g, '')).reverse().reduce((accumulator, currentValue) => accumulator - currentValue);
        self.log(`当前还差: ${currentNodeTimes}, 当前已助力次数为: ${assistedRecord.length}`);
      });
    }
  }
}

singleRun(CashShare).then();

module.exports = CashShare;
