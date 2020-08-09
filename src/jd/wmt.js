const _ = require('lodash');

const {Request} = require('./api');
const {sleep} = require('../lib/common');
const {printLog} = require('../lib/common');
const scriptName = '爱豆好物';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie, inviteId) {
  let failTask = [];

  const api = new Request(cookie, {client: 'wh5', clientVersion: '1.0.0'}, {
    headers: {
      'User-Agent': 'jdapp',
    },
  });

  let inviteTaskId = 10004;
  await getTaskDetail();

  _printLog(`failTask: ${JSON.stringify(failTask)}`);

  if (inviteId) {
    await sleep();
    await api.doFormBody('wmt_collectScore', {taskId: inviteTaskId, inviteId});
    await sleep();
  }
  await admireBrand();

  // 获取任务列表
  async function getTaskDetail(brandKey) {
    const TASK_SHOP = 7;
    const TASK_SHOPPING_ACTIVITY = 9;
    const TASK_SHOPPING_CART = 15;
    await api.doFormBody('wmt_getTaskDetail', {brandKey}).then(async data => {
      const allTask = _.get(data, 'result.taskVos') || [];
      if (_.isEmpty(allTask)) {
        failTask.push(brandKey);
      }
      let allShoppingActivityVos = [];
      if (!brandKey) {
        inviteTaskId = (allTask.find(task => task.taskName.match('助力')) || {taskId: inviteTaskId}).taskId;
      }
      for (const task of allTask) {
        let {taskType, status, taskName} = task;
        if (!brandKey && (taskType === TASK_SHOPPING_ACTIVITY)) {
          allShoppingActivityVos = task.shoppingActivityVos;
        }
        if (status === 2) continue;

        if (taskType === 0 && taskName === '每日签到') {
          await sleep(2);
          await doTask([task.simpleRecordInfoVo], task);
        }
        if ([
          1, /*关注并逛沃尔玛店铺*/
          TASK_SHOP, /*关注并逛沃尔玛店铺*/
          3, /*玩玩更多互动游戏*/
          TASK_SHOPPING_ACTIVITY, /*玩玩更多互动游戏*/
          TASK_SHOPPING_CART, /*加购88购物节爆品*/
        ].includes(taskType)) {
          await doTask(task.browseShopVo || task.followShopVo || task.shoppingActivityVos || task.productInfoVos || [], task);
        }
      }
      for (const {title} of allShoppingActivityVos) {
        await sleep(3);
        await getTaskDetail(title);
      }
    });
  }

  // 点赞
  async function admireBrand() {
    return api.doFormBody('wmt_admireBrand', {'brandKey': 'anmuxi'}).then(async data => {
      if (data.bizCode === 0) {
        _printLog(`点赞成功一次`);
        await sleep();
        await admireBrand();
      }
    });
  }

  // 做任务
  async function doTask(taskList, {taskId, waitDuration, times, maxTimes}) {
    for (const {itemId, status, taskToken} of taskList) {
      if (status === 2) continue;
      if (maxTimes === times) break;
      const afterSuccess = async data => {
        if (data.bizCode === 0) {
          _printLog(`完成一次任务`);
          times++;
        }
      };
      await sleep(2);
      if (waitDuration === 0) {
        await api.doFormBody('wmt_collectScore', {taskId, itemId}).then(afterSuccess);
      } else {
        await api.doFormBody('tc_doTask_mongo', {taskToken, actionType: '1'});
        await sleep(2 + waitDuration);
        await api.doFormBody('tc_doTask_mongo', {taskToken, actionType: '0'}).then(afterSuccess);
      }
    }

  }
}

async function start(data) {
  for (let i = 0; i < 1; i++) {
    for (const {cookie, shareCode} of data) {
      await main(cookie, i === 0 && shareCode);
    }
    await sleep(2);
  }
}

module.exports = start;
