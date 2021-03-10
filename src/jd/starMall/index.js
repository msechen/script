const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowMoment} = require('../../lib/moment');

let shareCodeCaches = [];

class starMall extends Base {
  static scriptName = 'starMall';
  static times = 2;
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
      },
    },
    formatDataFn: data => data,
    signData: {appid: 'jd_mp_h5', loginType: 2},
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'mcxhd_starmall_getStarRank', /* 排行榜 */
      'mcxhd_starmall_taskList', /* 获取任务 */
      'mcxhd_starmall_doTask', /* 做任务 */
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    const token = 'jd6df03bd53f0f292f';

    shareCodes && (shareCodeCaches = shareCodeCaches.concat(shareCodes));

    const isSuccess = data => _.property('retCode')(data) === '200';

    async function getTaskDetail(fn) {
      await api.mcxhd_starmall_getStarRank({token}).then(async data => {
        // writeFileJSON(data, 'mcxhd_starmall_getStarRank.json', __dirname);

        for (const {shopId} of data.result.ranks || []) {
          await api.mcxhd_starmall_taskList({token, shopId}).then(async data => {
            // writeFileJSON(data, 'mcxhd_starmall_taskList.json', __dirname);
            if (!isSuccess(data)) return;

            await fn(data, shopId);
          });
        }
      });
    }

    async function doCommonTask() {
      await getTaskDetail(async (data, shopId) => {
        const appointDesc = data.result.shareSetting.appointDesc;
        let needToShare = false;
        if (appointDesc.match('11')) {
          if (appointDesc.match(getNowMoment().format('MM.D'))) {
            needToShare = true;
          } else {
            // 非当前时间的明星不需要做任务
            return;
          }
        }
        for (const {taskType, status, maxTimes, times, subItem} of data.result.tasks || []) {
          subItem.forEach(item => {
            item.taskType = taskType;
            item.shopId = shopId;
          });

          if (self.isFirstLoop() && taskType === '7' && needToShare) {
            shareCodeCaches.push(subItem[0]);
          }

          if (['2', '7'].includes(taskType) || status === 1) continue;

          await doTask(subItem, {maxTimes, times});
        }
      });
    }

    async function doTask(taskList, option) {
      const {maxTimes, times} = option || {};
      await self.loopCall(taskList, {
        firstFn: ({taskType, itemId, shopId}) => {
          return api.mcxhd_starmall_doTask({taskType, itemId, token, shopId});
        },
        isFinishFn: o => o.status === 2,
        maxTimes: maxTimes || taskList.length,
        times,
      });
    }

    self.isFirstLoop() && await doCommonTask();
    if (self.isLastLoop()) {
      await doTask(shareCodeCaches).then(data => {
        isSuccess(data) && self.log('助力成功');
      });

      await getTaskDetail((data, shopId) => {
        self.log(`${data.result.starName} 分数为: ${data.result.userScore}`);
      });
    }
  }
}

module.exports = starMall;
