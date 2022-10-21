const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment, getNowHour} = require('../../lib/moment');
const _ = require('lodash');

let maxGroupId = 0;

class ExplorePlanet extends Template {
  static scriptName = 'ExplorePlanet';
  static scriptNameDesc = '券民空间站';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static activityEndTime = '2022-10-23';
  static needOriginH5 = true;
  static maxTaskDoneTimes = Infinity;
  static doneShareTask = !this.firstTimeInTheDay();

  static apiOptions() {
    return {
      options: {
        uri: 'https://api.m.jd.com/api',
        qs: {
          appid: 'coupon-space',
          client: 'wh5',
          t: getMoment().valueOf(),
        },
      },
    };
  };

  static apiExtends = {
    requestFnName: 'doFormBody',
  };

  static async beforeRequest(api) {
    const activityId = await api.doFormBody('explorePlanet_homePage', {'channel': '1'}).then(data => {
      const {activityId, startTime, endTime, exploreEndTime} = _.get(data, 'data.result', {});
      if (!startTime || !activityId) return;
      if (getMoment().isBefore(startTime) || getMoment().isAfter(endTime)) return;
      return activityId;
    });
    _.merge(api.options, {
      form: {body: {activityId}},
    });
    if (!activityId) return true;
  }

  static isSuccess(data) {
    return _.property('data.biz_code')(data) === 0;
  };

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'explorePlanet_taskList',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'explorePlanet_taskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const {
            assistTaskInfo,
            componentTaskInfo,
            specialComponentTaskInfo,
            componentTaskPid,
            specialComponentTaskPid,
          } = data.data.result;
          let groupId = assistTaskInfo.groupId;
          componentTaskInfo.forEach(o => {
            o['encryptProjectId'] = componentTaskPid;
          });
          specialComponentTaskInfo.forEach(o => {
            o['encryptProjectId'] = specialComponentTaskPid;
          });

          const taskList = [].concat(componentTaskInfo, specialComponentTaskInfo.filter(o => !o.waitDuration));
          for (let {
            taskDesc,
            taskStatus: status,
            taskId,
            maxTimes,
            times,
            waitDuration,
            encryptTaskId,
            encryptProjectId,
            itemId,
          } of taskList) {
            if (status === 3 || [].includes(taskId) || /会员/.test(taskDesc)) continue;

            let list = [{encryptTaskId, encryptProjectId, itemId}];

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          if (_.isEmpty(result) && !self.doneShareTask) {
            if (!groupId) {
              await api.doFormBody('explorePlanet_openGroup').then(data => {
                groupId = _.get(data, 'data.result.groupId');
              });
            }
            self.updateShareCodeFn(groupId || api.currentCookieIndex);
            maxGroupId = _.max([maxGroupId, api.currentCookieIndex]);
            for (const groupId of self.getShareCodeFn()) {
              if (groupId <= maxGroupId) continue;
              await api.doFormBody('explorePlanet_assist', {groupId}).then(data => {
                api.log(self.isSuccess(data) ? '助力成功' : _.get(data, 'data.biz_msg'));
              });
            }
          }

          return result;
        },
      },
      doTask: {
        name: 'explorePlanet_taskReport',
        paramFn: o => o,
      },
      doRedeem: {
        name: 'explorePlanet_explore',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          if (!self.isSuccess(data)) {
            const {
              collectedCardsNum,
              totalCardsNum,
              lotteryTime,
              drawCardStatus,
            } = await api.doFormBody('explorePlanet_homePage', {'channel': '1'}).then(_.property('data.result'));
            api.log(`收集进度 ${collectedCardsNum}/${totalCardsNum}`);
            if (getMoment().isBefore(lotteryTime)) {
              return false;
            }
            if ((collectedCardsNum === totalCardsNum) && (drawCardStatus === 5)) {
              await api.doFormBody('explorePlanet_compositeCard');
              await sleep(2);
              await api.doFormBody('explorePlanet_divideReward').then(data => {
                api.log(`获得红包 ${data.data.result.discount}`);
              });
            }
            return false;
          }
          const {remainExploreNum, couponInfo, cardIdInfo} = data.data.result;
          couponInfo && api.log(`获得优惠券 ${couponInfo.name}(${couponInfo.limitStr})`);
          cardIdInfo && api.log(`获得卡片 ${cardIdInfo.name}`);
          await sleep(2);
        },
        repeat: true,
      },
    };
  }
}

singleRun(ExplorePlanet).then();

module.exports = ExplorePlanet;
