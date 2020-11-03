const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

let shareCodeCaches = [];

class superBrand extends Base {
  static scriptName = 'superBrand';
  static times = 2;
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
      },
    },
    formatDataFn: data => data,
    signData: {client: 'wh5', clientVersion: '1.0.0', appid: 'content_ecology'},
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'superbrand_getHomePageData', /* 获取任务 */
      'superbrand_doTask', /* 做任务 */
      'superbrand_filpCard', /* 翻牌 */
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    shareCodes && (shareCodeCaches = shareCodeCaches.concat(shareCodes));

    const isSuccess = data => _.property('data.bizCode')(data) === 0;

    let currentShareCode;
    await api.superbrand_getHomePageData().then(async data => {
      // writeFileJSON(data, 'superbrand_getHomePageData.json', __dirname);

      if (self.isFirstLoop()) {
        shareCodeCaches.push(currentShareCode = data.data.result.currentUserId);
      }

      const taskList = self._.flatten(data.data.result.taskPresidentVoList.filter(o => !['1', '4'].includes(o.taskType) && o.allTaskStatus !== '1').map(o => {
        o.taskVoList.forEach(task => {
          task.taskType = o.taskType;
        });
        return o.taskVoList;
      }));

      await self.loopCall(taskList, {
        firstFn: ({taskType, taskId}) => {
          return api.superbrand_doTask({taskType, taskId});
        },
        isFinishFn: o => o.taskStatus === '2',
        maxTimes: taskList.length,
      });
    });

    if (self.isLastLoop()) {
      await self.loopCall(shareCodeCaches.filter(code => code !== currentShareCode), {
        firstFn: (inviteId) => {
          return api.superbrand_doTask({taskType: '4', inviteId}).then(data => {
            self.log(data.data.bizMsg);
          });
        },
        maxTimes: shareCodeCaches.length,
      });

      await api.superbrand_getHomePageData().then(async data => {
        await self.loopCall(data.data.result.giftCardVoList.filter(o => !o.flippedCard).reverse(), {
          firstFn: ({cardId}) => {
            return api.superbrand_filpCard({cardId}).then(data => {
              isSuccess(data) && self.log(data.data.result.jpeasList.map(o => o.prizeName).join(','));
            });
          },
          maxTimes: Math.floor(data.data.result.totoalPresidentNum / 1000),
        });
      });
    }
  }
}

module.exports = superBrand;
