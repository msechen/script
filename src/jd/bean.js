const _ = require('lodash');
const {Request} = require('./api');
const {sleep} = require('../lib/common');
const {printLog, getNowMoment} = require('../lib/common');
const scriptName = '种豆分豆';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie, shareCodes = []) {
  let ignoreTaskTypes = [1/*每日签到*/, 2/*邀请好友*/];

  const api = new Request(cookie, {appid: 'ld'}, {
    headers: {
      'User-Agent': 'jdapp',
    },
  });
  const nowHours = getNowMoment().hours();

  // 助力好友
  for (const shareCode of shareCodes) {
    await plantBeanIndex(shareCode);
    await sleep(2);
  }

  await sleep();
  await _do();

  // 开始任务
  async function _do() {

    await plantBeanIndex().then(async data => {
      await sleep();

      const prevRound = data.roundList[0];
      if (!prevRound.awardBeans && nowHours >= 10) {
        await receivedBean(prevRound.roundId);
        await sleep(2);
      }

      const taskList = data.taskList.filter(task => task.isFinished !== 1 && !ignoreTaskTypes.includes(task.taskType));

      for (const task of taskList) {
        const {taskType} = task;
        if (![4, 7, 19, 22].includes(taskType)) continue;
        await sleep();
        await receiveNutrientsTask(`${taskType}`);
      }

      const requestConfig = [
        {
          taskType: 3, // 浏览店铺
          rqParam: {
            list: {
              functionId: 'shopTaskList',
              body: {
                'monitor_source': 'plant_m_plant_index',
                'monitor_refer': 'plant_shopList',
                'version': '9.0.0.1',
              },
              getRealList: data => data.goodShopList.concat(data.moreShopList),
            },
            item: {
              functionId: 'shopNutrientsTask',
              body: {
                'monitor_source': 'plant_m_plant_index',
                'monitor_refer': 'plant_shopNutrientsTask',
                'version': '9.0.0.1',
              },
              bodyKeys: ['shopId', 'shopTaskId'],
            },
          },
        },
        {
          taskType: 5, // 挑选商品
          rqParam: {
            list: {
              functionId: 'productTaskList',
              body: {
                'monitor_source': 'plant_m_plant_index',
                'monitor_refer': 'plant_productTaskList',
                'version': '9.0.0.1',
              },
              getRealList: data => data.productInfoList.map(array => array[1]),
            },
            item: {
              functionId: 'productNutrientsTask',
              body: {
                'monitor_source': 'plant_m_plant_index',
                'monitor_refer': 'plant_productNutrientsTask',
                'version': '9.0.0.1',
              },
              bodyKeys: ['skuId', 'productTaskId'],
            },
          },
        },
        {
          taskType: 10, // 关注频道
          rqParam: {
            list: {
              functionId: 'plantChannelTaskList',
              body: {},
              getRealList: data => data.goodChannelList.concat(data.normalChannelList),
            },
            item: {
              functionId: 'plantChannelNutrientsTask',
              body: {},
              bodyKeys: ['channelId', 'channelTaskId'],
            },
          },
        },
      ];


      for (const task of taskList) {
        let remainingTimes = +task.totalNum - +task.gainedNum;
        if (remainingTimes === 0) return;
        const config = requestConfig.find(o => o.taskType === task.taskType);
        if (config) {
          await doTask(remainingTimes, config.rqParam);
        }
      }

      const {roundId, bubbleInfos = []} = data.roundList[1];

      if (nowHours !== 0) {
        await sleep();
        await plantFriendList().then(async friendInfoList => {
          if (_.isEmpty(friendInfoList)) return;
          let needBreak = false;
          for (const friendInfo of friendInfoList) {
            await sleep(2);
            if (needBreak) break;
            await collectUserNutr(roundId, friendInfo.paradiseUuid).then(async data => {
              if (data.collectResult === '1') {
                _printLog('完成一次任务');
              } else {
                needBreak = true;
              }
            });
          }
        });
      }

      for (const bubbleInfo of bubbleInfos) {
        await sleep(2);
        const {nutrientsType} = bubbleInfo;
        await cultureBean(roundId, nutrientsType);
      }

      if (+data.timeNutrientsRes.nutrCount > 0) {
        await sleep();
        await api.doFormBody('receiveNutrients', {
          roundId,
          'monitor_source': 'plant_m_plant_index',
          'monitor_refer': 'plant_receiveNutrients',
          'version': '9.0.0.1',
        });
        await sleep();
      }

      async function doTask(remainingTimes, rqParam) {
        await sleep();
        let taskList = [{}];
        if (rqParam.list) {
          taskList = await doList(rqParam.list);
        }

        for (const task of taskList) {
          if (remainingTimes === 0) break;
          await sleep(2);
          await doItem(rqParam.item, task);
        }

        async function doList({functionId, body = {}, getRealList}) {
          return api.doFormBody(functionId, body).then(data => {
            return getRealList(data).filter(o => o.taskState !== '1');
          });
        }

        async function doItem({functionId, body = {}, bodyKeys}, taskData) {
          if (bodyKeys) {
            _.assign(body, _.pick(taskData, bodyKeys));
          }
          await api.doFormBody(functionId, body).then(data => {
            const finished = data.nutrState === '1';
            if (finished) {
              _printLog('完成一次任务');
              remainingTimes--;
            }
          });
        }
      }
    });
  }

  // 获取任务列表
  async function plantBeanIndex(plantUuid) {
    return api.doFormBody(plantBeanIndex.name, {
      plantUuid,
      'monitor_source': 'plant_m_plant_index',
      'monitor_refer': '',
      'version': '9.0.0.1',
    });
  }

  // 周一十点收取京豆
  async function receivedBean(roundId) {
    return api.doFormBody(receivedBean.name, {
      roundId,
      'monitor_source': 'plant_m_plant_index',
      'monitor_refer': 'receivedBean',
      'version': '9.0.0.1',
    });
  }

  // 获取好友列表
  async function plantFriendList() {
    return api.doFormBody(plantFriendList.name, {
      'pageNum': '1',
      'monitor_source': 'plant_m_plant_index',
      'monitor_refer': 'plantFriendList',
      'version': '9.0.0.1',
    }).then(async data => data.friendInfoList.filter(o => o.nutrCount));
  }

  // 收集好友
  async function collectUserNutr(roundId, paradiseUuid) {
    return api.doFormBody(collectUserNutr.name, {
      roundId, paradiseUuid,
      'monitor_source': 'plant_m_plant_index',
      'monitor_refer': 'collectUserNutr',
      'version': '9.0.0.1',
    });
  }

  // 逛逛会场等单一任务
  async function receiveNutrientsTask(awardType) {
    return api.doFormBody('receiveNutrientsTask', {
      awardType,
      'monitor_refer': 'plant_receiveNutrientsTask',
      'monitor_source': 'plant_m_plant_index',
      'version': '9.0.0.1',
    });
  }

  // 收集营养液
  async function cultureBean(roundId, nutrientsType) {
    return api.doFormBody(cultureBean.name, {
      roundId, nutrientsType,
      'monitor_source': 'plant_m_plant_index',
      'monitor_refer': 'plant_index',
      'version': '9.0.0.1',
    });
  }
}

async function start(data) {
  for (let i = 0; i < 2; i++) {
    for (const {cookie, shareCodes} of data) {
      await main(cookie, i === 0 ? shareCodes : void 0);
    }
    await sleep(2);
  }
}

module.exports = start;
