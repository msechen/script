/**
 * @description  需要手动抓包, 可以通过点击 "收取金币" 来获取, 然后复制ss的值放到 JD_STALL_SS 即可
 *
 */

const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

let shareCodeCaches = [];

class stall extends Base {
  static scriptName = 'stall';
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
      'stall_getHomeData', /* 获取用户信息 */
      'stall_getTaskDetail', /* 获取任务 */
      'stall_getFeedDetail', /* 获取子任务 */
      'stall_collectScore', /* 做任务 */
      'stall_raise', /* 解锁城市 */
      'stall_myShop', /* 获取当前的城市 */
      'stall_collectProduceScore', /* 收集金币 */
    ],
  };

  static getSS() {
    return this.getCurrentEnv('JD_STALL_SS');
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;
    const ss = self.getSS();

    shareCodes && (shareCodeCaches = shareCodeCaches.concat(shareCodes.map(taskToken => ({taskToken}))));

    const isSuccess = data => _.property('data.bizCode')(data) === 0;

    const collectScore = async (taskToken, taskId, itemId, shopSign) => {
      return api.stall_collectScore({
        taskId,
        itemId,
        shopSign,
        actionType: '1',
        ss,
      });
    };


    async function doTaskDetail(shopSign = '') {
      return await api.stall_getTaskDetail({shopSign}).then(async data => {
        // writeFileJSON(data, 'stall_getTaskDetail.json', __dirname);

        // 不在活动期间
        if (!isSuccess(data)) return true;

        for (let {status, taskId, taskName, maxTimes, times, waitDuration = 0, simpleRecordInfoVo, followShopVo, browseShopVo, shoppingActivityVos, productInfoVos, assistTaskDetailVo = {}} of _.property('data.result.taskVos')(data) || []) {
          if (status === 2 || ['去开精选联合会员'].includes(taskName) || taskName.match('商圈')) continue;
          // 14 去玩趣味互动
          // 9 会场
          // 10 店铺
          // 16 去逛好物预售会场
          // 15 去逛京友圈领红包
          // 100 浏览商品
          // 101 加购商品
          let taskList = simpleRecordInfoVo || followShopVo || browseShopVo || shoppingActivityVos || productInfoVos;
          if (shopSign && followShopVo) {
            // 子任务只需要浏览该店铺即可
            taskList = [{itemId: shopSign}];
          }
          if ([100, 101].includes(taskId)) {
            await api.stall_getFeedDetail({taskId}).then(async data => {
              for (const {status, taskId, productInfoVos, maxTimes, times, waitDuration} of data.data.result.viewProductVos || data.data.result.addProductVos) {
                if (status === 2) continue;
                await _doTask(productInfoVos, {taskId, maxTimes, times, waitDuration});
              }
            });
            return;
          }
          await _doTask(taskList, {taskId, maxTimes, times, waitDuration});

          async function _doTask(taskList, {taskId, maxTimes, times, waitDuration}) {
            for (const {status, taskToken, itemId} of _.filter([].concat(taskList))) {
              if (status === 2 || maxTimes === times) continue;
              times++;
              await collectScore(taskToken, taskId, itemId, shopSign).then(async data => {
                if (waitDuration === 0) return;
                await sleep(waitDuration + 2);
                // 需要浏览的任务需要再调这个接口
                await api.doFormBody('qryViewkitCallbackResult', {
                  clientLanguage: 'zh',
                  dataSource: 'newshortAward',
                  method: 'getTaskAward',
                  reqParams: JSON.stringify({'taskToken': data.data.result.taskToken}),
                  sdkVersion: '1.0.0',
                });
              });
            }
          }
        }
      });
    }

    let activityNotStart = false;
    // 任务需要做完才有新的, 所以需要不断的做
    for (let i = 0; i < 5; i++) {
      activityNotStart = await doTaskDetail();
      if (activityNotStart) return;
    }

    if (activityNotStart) return;

    await raise();

    await api.stall_myShop().then(async data => {
      for (const {shopId, status} of _.property('data.result.shopList')(data) || []) {
        if (status === 0) continue;
        await sleep(2);
        await doTaskDetail(shopId);
      }
    });

    async function raise() {
      await api.stall_raise().then(async data => {
        isSuccess(data) && await raise();
      });
    }

    await raise();

    await api.stall_getHomeData().then(data => {
      // writeFileJSON(data, 'stall_getHomeData.json', __dirname);

      self.log(`当前获取到的瓜分票数: ${_.property('data.result.homeMainInfo.raiseInfo.redNum')(data)}`);
    });
  }

  static async doCron(api) {
    const self = this;
    const _ = this._;

    await api.stall_collectProduceScore({ss: self.getSS()}).then(data => {
      this.log(`定时获取到的金币为 ${_.property('data.result.produceScore')(data)}`);
    });
  }
}

module.exports = stall;
