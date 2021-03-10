const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

class SecondKillRedPacket extends Template {
  static scriptName = 'SecondKillRedPacket';
  static scriptNameDesc = '秒杀红包第二期';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({'encryptProjectId': '4Rxa9S9Vcgmq5zVtPJzNdFwpzsar', 'sourceCode': 'wh5'});
  static times = 1;
  static isWh5 = true;
  static needOriginH5 = true;

  static isSuccess(data) {
    return this._.property('subCode')(data) === '0';
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'queryInteractiveInfo',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'queryInteractiveInfo.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('assignmentList')(data) || [];
          for (let {
            encryptAssignmentId,
            completionFlag: status,
            assignmentTimesLimit: maxTimes,
            completionCnt: times,
            ext,
            assignmentName,
          } of taskList) {
            let {waitDuration, extraType} = ext;
            if (status === true || [].includes(encryptAssignmentId) || ['', '签到红包'].includes(assignmentName)) continue;

            let list = (extraType ? ext[extraType] : _.fill(Array(maxTimes), {}, times, maxTimes)).map(o => _.assign({
              encryptAssignmentId,
              actionType: waitDuration ? 1 : 0,
            }, _.pick(o, ['itemId']), assignmentName.match('分享') ? {completionFlag: true} : {}));

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'doInteractiveAssignment',
        paramFn: o => _.assign(self.commonParamFn(), o),
      },
      doWaitTask: {
        name: 'doInteractiveAssignment',
        paramFn: o => _.assign(self.commonParamFn(), o, {actionType: 0}),
      },
      // doRedeem: {
      //   name: 'doRedeem',
      //   paramFn: self.commonParamFn,
      //   async successFn(data, api) {
      //     if (!self.isSuccess(data)) return false;
      //   },
      //   repeat: true,
      // },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }
}

module.exports = SecondKillRedPacket;
