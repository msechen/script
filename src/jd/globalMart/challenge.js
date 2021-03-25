const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowMoment} = require('../../lib/moment');
const _ = require('lodash');

const CryptoJS = require('crypto-js');

/**
 * @description 加密处理
 * @param taskId
 * @param masterPin 只用于互助
 * @return {{seals, sealsTs: number}}
 */
function sign(taskId, masterPin) {

  return Pu(...arguments);

  function Pu() {
    for (var e = getNowMoment().valueOf(), t = 'secureact', a = Nu('U2FsdGVkX19sLIB1GPSwzHyWUgTvJt8/Gkz6E5e3M58=', t), n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    r.push(e, a);
    var c = r.join(''), i = CryptoJS.MD5(c).toString();
    return {sealsTs: e, seals: i};
  }

  function Nu(e, t) {
    return CryptoJS.AES.decrypt(e, t).toString(CryptoJS.enc.Utf8);
  }
}

class GlobalChallenge extends Template {
  static scriptName = 'GlobalChallenge';
  static scriptNameDesc = '环球挑战赛';
  static shareCodeTaskList = [];
  static times = 2;
  static needOriginH5 = true;
  static commonParamFn = () => ({});
  static apiOptions = {
    signData: {
      appid: 'global_mart',
      body: {'activityCode': 'visa-card-001'},
    },
  };

  static isSuccess(data) {
    return _.property('result.code')(data) === '0';
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'myTask',
        async successFn(data, api) {
          // writeFileJSON(data, 'myTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const {timeLimitTask, commonTask} = _.property('result.data')(data) || {};

          const taskList = _.concat(commonTask, timeLimitTask || []);
          for (let {
            taskName,
            canExecute,
            taskId,
            itemId,
            viewSeconds,
            totalTimes: maxTimes,
            executedTimes: times,
            jingCommand,
            waitDuration,
          } of taskList) {
            if (!canExecute || [].includes(taskId)) continue;

            let list = [];
            const option = {maxTimes, times, waitDuration};

            for (let i = times; i < maxTimes; i++) {
              list.push({taskId, itemId, viewSeconds});
            }
            // 同个人只能助力一次, 手动开启
            if (taskName.match('邀请好友')/*每日邀请好友*/) {
              continue;
              const inviterPin = new URL(jingCommand.url).searchParams.get('masterPin');
              self.updateShareCodeFn(inviterPin);
              list = self.getShareCodeFn();
              if (!list.length) continue;
              _.assign(option, {
                maxTimes: list.length,
                times: 0,
                firstFn(inviterPin) {
                  return api.doFormBody('inviteHelp', _.assign({
                    inviterPin,
                    taskId,
                    'pageType': 'doHelp',
                  }, sign(taskId, inviterPin))).then(data => {
                    self.log(data.result.message);
                  });
                },
              });
            }

            result.push({list, option});
          }

          return result;
        },
      },
      doTask: {
        name: 'taskRun',
        paramFn: o => _.assign(o, sign(o.taskId)),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          self.log('完成一次任务');
        }
      },
      afterGetTaskList: {
        name: 'mainInfo',
        async successFn(data, api) {
          // writeFileJSON(data, 'mainInfo.json', __dirname);

          if (!self.isSuccess(data)) return;

          const {activityCalendar, activityStations, mileageAmount} = _.property('result.data')(data);
          for (const {id: stationId, rewards} of activityStations.filter(o => o.unlock)) {
            const rewardIds = rewards.filter(({unlock, received}) => unlock && !received).map(o => o.id);
            if (!rewardIds.length) continue;
            await api.doFormBody('receiveRewardVisa', {stationId, rewardIds});
          }
          self.log(`当前得分: ${mileageAmount}, 活动时间：第${activityCalendar.currDays}/${activityCalendar.totalDays}天`);
        },
      },
    };
  };
}

module.exports = GlobalChallenge;
