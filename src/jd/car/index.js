const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class Car extends Template {
  static scriptName = 'Car';
  static scriptNameDesc = '车主福利';
  static shareCodeTaskList = [];
  static commonParamFn = () => [void 0, {method: 'GET'}];
  static needOriginH5 = true;
  static times = 1;

  static apiOptions = {
    signData: {},
    options: {
      uri: 'https://car-member.jd.com/api',
    },
  };
  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return this._.property('status')(data);
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    const doTaskOptions = body => ({
      headers: {
        activityid: '39443aee3ff74fcb806a6f755240d127',
        'Content-Type': 'application/json',
      },
      body,
    });

    return {
      // 获取任务列表
      getTaskList: {
        name: 'v1/user/mission',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'user_mission.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.missionList')(data) || [];
          for (let {
            missionStatus: status,
            missionType,
            missionId,
            maxTimes,
            times,
          } of taskList) {
            if (status === 2 || ![1, 5].includes(missionType)) continue;

            let list = [{missionId}];

            result.push({list, option: {maxTimes, times, waitDuration: 1}});
          }

          return result;
        },
      },
      doTask: {
        name: 'v1/game/mission',
        paramFn: o => [void 0, doTaskOptions(o)],
      },
      doWaitTask: {
        name: 'v1/user/mission/receive',
        paramFn: o => [void 0, doTaskOptions(o)],
      },
      // 签到
      afterGetTaskList: {
        name: 'v1/user/sign',
      },
      doRedeem: {
        name: 'v1/user/point',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const {remainPoint, oncePoint} = data.data || {};
          if (remainPoint) {
            let msg = `当前赛点: ${remainPoint}`;
            remainPoint >= oncePoint && (msg += ', 可以在app进行兑换!');
            self.log(msg);
          }
        },
      },
    };
  };
}

module.exports = Car;
