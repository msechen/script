const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class CrazyJoy extends Template {
  static scriptName = 'CrazyJoy';
  static scriptNameDesc = '疯狂的Joy';
  static times = 2;

  static apiOptions = {
    signData: {
      appid: 'crazy_joy',
    },
    options: {
      headers: {
        origin: 'https://crazy-joy.jd.com',
        referer: 'https://crazy-joy.jd.com',
      },
      qs: {
        appid: 'crazy_joy',
      },
    },
  };

  static isSuccess(data) {
    return this._.property('resultCode')(data) === '0';
  }

  static logBean(data) {
    const self = this;
    const _ = this._;

    const beans = _.property('data.beans')(data);
    if (beans) self.log(`获取到豆豆: ${beans}`);
  }

  static async doMain(api) {
    const self = this;
    const _ = this._;
    const logBean = self.logBean.bind(self);

    // 获取信息列表
    // await api.doFormBody('crazyJoy_user_getMsgList', {"msgType":"USER_ACTIVE","status":"UNREAD","page":1,"pageSize":10});
    await doDayTask();
    await handleSign();

    await upgradeJoy();
    await doProduce();
    await upgradeJoy();

    if (self.isLastLoop()) {
      // await getLevelReward();
      await extractBean();
      await log();
    }

    async function log() {
      const joyIds = await getJoyIds();
      self.log(`最高等级为: ${_.max(joyIds)}, 所有等级为: ${joyIds}`);
    }

    // 签到
    async function handleSign() {
      if (self.isFirstLoop()) {
        const signData = await api.doFormBody('crazyJoy_task_getSignState').then(data => data.data);
        const currentStatus = _.last(signData.filter(o => o.status !== 0));
        if (currentStatus && currentStatus.status !== 3) {
          await api.doFormBody('crazyJoy_task_doSign').then(logBean);
        }
      }
    }

    // 每日任务
    async function doDayTask() {
      const {data} = await api.doFormBody('crazyJoy_task_getTaskState', {paramData: {taskType: 'DAY_TASK'}});
      for (const list of data) {
        if (list.taskTypeId === 102 || list.taskTitle === '邀请好友每天助力') {
          const currentInviter = await getGameState().then(data => _.property('data.userInviteCode')(data));
          currentInviter && !self.shareCodeTaskList.includes(currentInviter) && self.shareCodeTaskList.push(currentInviter);
          const shareList = self.getShareCodeFn();
          shareList.length && await self.loopCall(shareList, {
            maxTimes: shareList.length,
            async firstFn(inviter) {
              return api.doFormBody('crazyJoy_task_recordAssist', {'paramData': {inviter}});
            },
          });
          continue;
        }
        const {duration: waitDuration} = list.ext;
        await self.loopCall(list, {
          isFinishFn: o => _.property('status')(o) === 3,
          waitDuration,
          async firstFn(o) {
            return api.doFormBody('crazyJoy_task_viewPage', {action: 'MARK', taskId: o.taskId});
          },
          async afterWaitFn(data, o) {
            await api.doFormBody('crazyJoy_task_viewPage', {
              action: 'INCREASE',
              taskId: o.taskId,
              taskRecordId: _.property('data.taskRecordId')(data),
            });
            await api.doFormBody('crazyJoy_task_obtainAward', {taskId: o.taskId}).then(logBean);
          },
        });
      }
    }

    // 页面的小礼盒
    async function doProduce() {
      const {
        luckyBoxRecordId,
        advertViewTimes,
      } = await api.doFormBody('crazyJoy_joy_produce').then(data => _.property('data')(data) || {});
      if (advertViewTimes === 0 || !luckyBoxRecordId) return;
      await doVideo(luckyBoxRecordId);
      await upgradeJoy();
      await doProduce();
    }

    // 看广告
    async function doVideo(eventRecordId) {
      await api.doFormBody('crazyJoy_event_getVideoAdvert', {eventType: 'LUCKY_BOX_DROP', eventRecordId});
      await sleep(30);
      await api.doFormBody('crazyJoy_event_obtainAward', {eventType: 'LUCKY_BOX_DROP', eventRecordId}).then(data => {
        if (!self.isSuccess(data)) return;
        self.logBean(data);
      });
    }

    // 升级 joy
    async function upgradeJoy() {
      await autoMerge();
      if (self.getCurrentEnv('JD_CRAZY_JOY_STOP_UPGRADE')) return;
      let joyIds = await getJoyIds();
      if (_.isEmpty(joyIds)) return;

      const minCostJoy = await getMinCostJoy();
      if (!minCostJoy) return;
      const minCostJoyId = minCostJoy.joyId;

      let loop = false;
      for (let i = 0; i < joyIds.length; i++) {
        const joyId = joyIds[i];
        if (joyId === 0) {
          const stop = await buyJoy(minCostJoyId).then(data => {
            if (!self.isSuccess(data) || _.property('data.lackCoin')(data)) return true;
            joyIds[data.data.boxId] = minCostJoyId;
            loop = true;
          });
          if (stop) break;
        }
      }

      loop = loop || await mergeJoys(joyIds);
      if (loop) await upgradeJoy();
    }

    async function getMinCostJoy() {
      let shop = await api.doFormBody('crazyJoy_joy_allowBoughtList', {'paramData': {'entry': 'SHOP'}}).then(data => _.property('data.shop')(data));
      if (!shop) return;
      // 只取最近5个
      shop = shop.filter(o => o.status === 1).filter((o, index) => index > shop.length - 7);
      return _.minBy(shop, o => o.coins / Math.pow(2, o.joyId - 1));
    }

    // 获取用户信息
    // [2, 3, 3, 7, 1, 5, 4, 2, 1, 2, 2, 1]
    async function getJoyIds() {
      const {joyIds} = await getGameState().then(data => data.data) || {};
      if (!joyIds) return [];
      if (joyIds.length > 12) {
        joyIds.shift();
      }
      return joyIds;
    }

    async function mergeJoys(joyIds, needLoop = false) {
      let merged = false;
      for (let i = 0; i < joyIds.length; i++) {
        const joyId = joyIds[i];
        if (joyId === 0) continue;
        const fromBoxIndex = i;
        let targetBoxIndex = -1;
        for (let j = fromBoxIndex + 1; j < joyIds.length; j++) {
          if (joyIds[j] === joyId) {
            targetBoxIndex = j;
            break;
          }
        }
        if (targetBoxIndex === -1) continue;

        if (fromBoxIndex !== targetBoxIndex) {
          merged = true;
          // 合成到左边
          await mergeJoy(targetBoxIndex, fromBoxIndex);
          await sleep(2);
          joyIds[fromBoxIndex]++;
          joyIds[targetBoxIndex] = 0;
        }
      }
      if (!merged) {
        return needLoop;
      }
      return mergeJoys(joyIds, true);
    }

    async function getGameState() {
      await sleep(5);
      return api.doFormBody('crazyJoy_user_gameState', {'paramData': {'inviter': ''}});
    }

    async function buyJoy(joyId) {
      return joyTrade(joyId, void 0, 'BUY');
    }

    // 当没有空位的时候卖掉最小的然后买第二最小的自动合成
    async function autoMerge() {
      const joyIds = await getJoyIds();

      await mergeNotEmpty();
      await mergeContinuous();
      await mergeJoys(await getJoyIds());

      async function mergeNotEmpty() {
        if (joyIds.some(v => v === 0)) {
          return;
        }
        if (_.uniq(joyIds).length !== joyIds.length) {
          return;
        }
        await sellMinJoy();
        await sleep(1);
        await buyMinJoy();
      }

      async function mergeContinuous() {
        if (_.uniq(joyIds).length !== joyIds.length) {
          return;
        }
        if (joyIds.filter(v => v === 0).length === 1) {
          const sortJoyIds = joyIds.sort();
          let foundJoyId = 0;
          for (let i = 0; i < sortJoyIds.length; i++) {
            const joyId = sortJoyIds[i];
            if (!joyId) continue;
            if (i + 2 >= sortJoyIds.length) break;
            if (_.subtract(sortJoyIds[i + 2] - sortJoyIds[i + 1]) === 1 && _.subtract(sortJoyIds[i + 1] - joyId) === 1) {
              foundJoyId = joyId;
              break;
            }
          }
          if (foundJoyId) {
            await buyJoy(foundJoyId);
          }
        }
      }
    }

    async function buyMinJoy() {
      const joyIds = await getJoyIds();
      const minJoyId = _.min(_.filter(joyIds));
      await buyJoy(minJoyId);
    }

    async function sellMinJoy() {
      const joyIds = await getJoyIds();
      const minJoyId = _.min(_.filter(joyIds));
      const boxId = _.findIndex(joyIds, v => v === minJoyId);
      await sellJoy(minJoyId, boxId);
    }

    async function sellJoy(joyId, boxId) {
      return joyTrade(joyId, boxId, 'SELL');
    }

    async function joyTrade(joyId, boxId = '', action = 'BUY') {
      return api.doFormBody('crazyJoy_joy_trade', {action, joyId, boxId});
    }

    async function moveJoy(fromBoxIndex, targetBoxIndex) {
      return moveOrMerge(fromBoxIndex, targetBoxIndex, 'MOVE');
    }

    async function mergeJoy(fromBoxIndex, targetBoxIndex) {
      return moveOrMerge(fromBoxIndex, targetBoxIndex, 'MERGE');
    }

    async function moveOrMerge(fromBoxIndex, targetBoxIndex, operateType) {
      return api.doFormBody('crazyJoy_joy_moveOrMerge', {fromBoxIndex, targetBoxIndex, operateType});
    }

    // 提取京豆
    async function extractBean() {
      let {
        beanGradation,
        totalBeans,
      } = await api.doFormBody('crazyJoy_user_getJdBeanInfo', void 0, void 0, {method: 'GET'}).then(data => data.data) || {};
      beanGradation = _.sortBy(beanGradation || [], 'count').reverse();
      self.log(`已获得的豆豆: ${totalBeans}`);
      for (const {count} of beanGradation) {
        if (totalBeans >= count) {
          await api.doFormBody('crazyJoy_user_applyJdBeanPaid', {'paramData': {'bean': count}});
          totalBeans -= count;
        }
      }
    }

    // 解锁等级奖励
    async function getLevelReward() {
      const data = await api.doFormBody('crazyJoy_event_getGrowthAndSceneState', {'paramData': {'eventType': 'GROWTH_REWARD'}}).then(data => data.data);
      const maxJoyId = _.max(await getJoyIds());
      for (const {eventRecordId, status, joyId} of data) {
        if (status === 2 || maxJoyId < joyId) continue;
        await api.doFormBody('crazyJoy_event_obtainAward', {
          'eventType': 'GROWTH_REWARD',
          eventRecordId,
        });
      }
    }
  }

  static async doCron(api) {
    await api.doFormBody('crazyJoy_event_obtainAward', {'eventType': 'HOUR_BENEFIT'});
  }
}

module.exports = CrazyJoy;
