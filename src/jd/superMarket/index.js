const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class SuperMarket extends Template {
  static scriptName = 'SuperMarket';
  static shareCodeTaskList = [];
  static repeatDoTask = true;

  static apiOptions = {
    options: {
      headers: {
        'origin': 'https://jdsupermarket.jd.com',
      },
      uri: 'https://api.m.jd.com/api',
    },
    signData: {
      appid: 'jdsupermarket',
      clientVersion: '8.0.0',
      client: 'm',
    },
  };

  static apiNamesFn() {
    const self = this;

    return {
      beforeGetTaskList: {
        name: 'smtg_shopIndex',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          await handleSign();
          const {shopId, shelfList, merchandiseList} = _.property('data.result')(data) || {};
          if (!shopId) return;
          await handleMerchandise();
          await manageShelf();

          async function handleSign() {
            return api.doFormBody('smtg_signList').then(async data => {
              if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
              if (_.property('data.result.hadSigned')(data) === 1) return;
              await api.doFormBody('smtg_sign').then(data => {
                api.log(`签到1返回数据: ${JSON.stringify(data)}`);
              });
              await api.doFormBody('smtg_sign', {channel: '1'}).then(data => {
                api.log(`签到2返回数据: ${JSON.stringify(data)}`);
              });
            });
          }

          async function manageShelf() {
            for (const {id: shelfId, level, status, name} of shelfList) {
              if (status === 1) {
                const targetLevel = level + 1;
                await api.doFormBody('smtg_shelfUpgrade', {shopId, shelfId, targetLevel}).then(async data => {
                  if (!self.isSuccess(data)) return;
                  api.log(`${name}升级至至${targetLevel}`);
                });
              } else if (status === 2) {
                await api.doFormBody('smtg_shelfUnlock', {shopId, shelfId});
              }
            }
          }

          async function handleMerchandise() {
            for (const {id: merchandiseId} of merchandiseList) {
              await api.doFormBody('smtg_sellMerchandise', {shopId, merchandiseId});
            }
          }
        },
      },
      // 获取任务列表
      getTaskList: {
        name: 'smtg_queryShopTask',
        successFn: async (data, api) => {
          // writeFileJSON(data, 'smtg_queryShopTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.result.taskList')(data) || [];
          for (let {
            type, prizeStatus, content = {},
            taskStatus: status,
            taskId,
            targetNum: maxTimes,
            finishNum: times,
            waitDuration,
          } of taskList) {
            if ((status === 1 && !prizeStatus) || [
              // 1, // 分享游戏
              // 11, // 指定入口进入小游戏
              // 2, // 逛会场
              // 8, // 关注店铺
              // 10, // 关注商品
              9, // 去店铺开会员卡
              4, // 去购物
            ].includes(type)) continue;

            // 以下任务无需手动完成
            if ([
              5, // 卖货能手
              7, // 任务能手
            ].includes(type) && !prizeStatus) {
              continue;
            }

            const {itemId} = _.first(Object.values(content)) || {};
            let list = [{taskId, itemId}];

            // 每次只做一个
            const option = {maxTimes: 1, times: 0, waitDuration};
            if (prizeStatus) {
              option.firstFn = async o => {
                await api.doFormBody('smtg_obtainShopTaskPrize', {taskId: o.taskId});
              };
            }
            result.push({list, option});
          }

          return result;
        },
      },
      doTask: {
        name: 'smtg_doShopTask',
        paramFn: o => o,
      },
      // 获取升级蓝币
      afterGetTaskList: {
        name: 'smtg_newHome',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const totalBlue = await handleUpgradeBlue(api, data);
          if (!totalBlue) return false;
        },
        repeat: true,
      },
      doRedeem: {
        name: 'smtg_drawLottery',
        paramFn: () => ({'costType': 1, 'channel': '1'}),
        successFn: async (data, api) => {
          if (!self.isSuccess(data)) {
            let {totalBlue = 0} = await api.doFormBody('smtg_newHome').then(data => data.data.result) || {};
            totalBlue && self.log(`蓝币总计为: ${totalBlue}`);
            return false;
          }
        },
        repeat: true,
      },
    };
  };

  static async doCron(api) {
    const self = this;

    const receivedBlue = await receiveCoin(api);
    receivedBlue && api.log(`获取蓝币: ${receivedBlue}`);
  }
}

function receiveCoin(api) {
  return api.doFormBody('smtg_receiveCoin', {type: 4}).then(async data => {
    let {receivedBlue = 0} = _.property('data.result')(data);
    return receivedBlue + await handleUpgradeBlue(api, data);
  });
}

async function handleUpgradeBlue(api, data) {
  let total = 0;
  const blueList = _.property('data.result.userUpgradeBlueVos')(data) || [];
  for (const {id, blueCoins} of blueList) {
    await api.doFormBody('smtg_receiveCoin', {type: 5, id});
    total += blueCoins;
  }
  return total;
}

module.exports = SuperMarket;
