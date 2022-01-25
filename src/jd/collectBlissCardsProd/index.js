const MappingTemplate = require('../base/mapping');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

class CollectBlissCardsProd extends MappingTemplate {
  static scriptName = 'CollectBlissCardsProd';
  static scriptNameDesc = '萌虎摇摇乐';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;
  static needInPhone = true;
  static concurrent = true;
  static activityEndTime = '2022-01-31 08:00:00';

  static indexUrl = 'https://yearfestival.jd.com';
  static functionId = 'collect_bliss_cards_prod';

  static apiCustomOption() {
    return {
      form: {
        loginType: 2,
        t: getMoment().valueOf(),
      },
      formatDataFn(data) {
        const jbean = _.get(data, 'data.jbean');
        if (jbean) {
          this.log(`获得豆豆 ${jbean}`);
        }
        return data;
      },
    };
  }

  static async doMain(api) {
    const self = this;

    if (self.isFirstLoop()) {
      await handleDoTask();
    }

    await handleDoShare();

    if (self.isLastLoop()) {
      await handleLottery();
      await handleLog();
    }

    async function handleDoTask() {
      const {data} = await api.doApiMapping('/api/task/brand/tabs');
      for (const {taskGroupId} of data) {
        _doTask(taskGroupId);
        await sleep(2);
      }

      async function _doTask(taskGroupId) {
        const {data} = await api.doApiMapping('/api/task/brand/getTaskList', {taskGroupId});
        let isFinished = true;
        for (const {taskId, taskItemId, browseTime, taskState} of data) {
          if (taskState === '0') continue;
          isFinished = false;
          handleLottery(2);
          const {timeStamp, rewardInfoVo} = await api.doApiMapping('/api/task/brand/doTask', {
            taskGroupId,
            taskId,
            taskItemId,
          }).then(_.property('data'));
          if (rewardInfoVo) continue;
          await sleep(browseTime);
          await api.doApiMapping('/api/task/brand/getReward', {
            taskGroupId,
            taskId,
            taskItemId,
            timestamp: timeStamp,
          });
        }
        if (!isFinished) return _doTask(taskGroupId);
      }
    }

    async function handleDoShare() {
      const {data: currentShareId} = await api.doApiMapping('/api/task/support/getShareId');
      self.updateShareCodeFn(currentShareId);
      for (const shareId of self.getShareCodeFn()) {
        const data = await api.doApiMapping('/api/task/support/doSupport', {shareId}).then(_.property('data'));
        const {status} = data;
        const msg = [`[${shareId}]`];
        if (status === 7) {
          msg.push('助力成功');
        } else if (status === 3) {
          msg.push('已经助力过');
        } else {
          msg.push(`${JSON.stringify(data)}`);
        }
        api.log(msg.join(' '));
      }
    }

    async function handleLottery(maxTimes = 10) {
      if (maxTimes <= 0) return;
      await api.doApiMapping('/api/lottery/lottery').then(async data => {
        if (!self.isSuccess(data)) return;
        const {prizeName} = data.data;
        api.log(`抽到 ${prizeName || '未中奖'}`);
        await sleep(2);
        return handleLottery(--maxTimes);
      });
    }

    async function handleLog() {
      const {cardNum, lotteryNum} = await api.doApiMapping('/api/index/indexInfo').then(_.property('data'));
      // 获取card内容
      const {cardList} = await api.doApiMapping('/api/card/list').then(_.property('data'));
      const groupTimes = 3;
      const formatCardInfo = {};
      const everyCard = cardList.shift();
      cardList.forEach(({cardId, cardName, count}, index) => {
        const infoIndex = Math.floor(index / groupTimes);
        formatCardInfo[infoIndex] = formatCardInfo[infoIndex] || [];
        formatCardInfo[infoIndex].push({cardName, count});
      });
      const msgs = [
        `抽奖次数${lotteryNum}`,
        `卡片数${cardNum}`,
      ];
      for (const cards of Object.values(formatCardInfo)) {
        msgs.push(`【${cards.map(handleFormat).join(',')}】`);
      }
      msgs.push(handleFormat(everyCard));
      api.log(msgs.join(', '));

      function handleFormat(card) {
        return `${card['cardName']}(${card['count']})`;
      }
    }
  }
}

singleRun(CollectBlissCardsProd).then();

module.exports = CollectBlissCardsProd;
