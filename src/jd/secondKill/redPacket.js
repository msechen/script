/**
 * @description 做任务, 兑换红包
 * @link https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html
 *
 */

const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getCookieData} = require('../../lib/env');
const {sleepTime} = require('../../lib/cron');
const {getMoment} = require('../../lib/moment');

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

    return {
      // 获取任务列表
      getTaskList: {
        name: 'queryInteractiveInfo',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'queryInteractiveInfo.json', __dirname);

          if (!self.isSuccess(data)) return [];

          // 新的任务列表请求接口, 仅做记录
          // await api.doFormBody('assignmentList', {}, {appid: 'jwsp'});

          const result = [];

          const taskList = _.property('assignmentList')(data) || [];
          for (let {
            encryptAssignmentId,
            completionFlag: status,
            assignmentTimesLimit: maxTimes,
            completionCnt: times,
            ext,
            assignmentName,
            assignmentStartTime,
            assignmentEndTime,
          } of taskList) {
            let {waitDuration, extraType} = ext;
            if (status === true || [].includes(encryptAssignmentId) || ['新人引导'].includes(assignmentName)) continue;
            if (getMoment().isBefore(assignmentStartTime) || getMoment().isAfter(assignmentEndTime)) continue;

            let list = _.concat(extraType ? ext[extraType] : _.fill(Array(maxTimes), {}, times, maxTimes)).map(o => _.assign({
              encryptAssignmentId,
              actionType: waitDuration ? 1 : 0,
            }, _.pick(o, ['itemId']), (assignmentName.match('分享') || assignmentName === '签到红包') ? {completionFlag: true} : {}));

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
      doRedeem: {
        name: 'homePageV2',
        paramFn: () => [{}, {appid: 'SecKill2020'}],
        async successFn(data, api) {
          const assignmentPoints = _.property('result.assignment.assignmentPoints')(data);
          const maxRedPacket = assignmentPoints / 1000;
          api.log(`当前的秒秒币为: ${assignmentPoints}, 可兑换的红包为 ${maxRedPacket}`);
          // 需要兑换的红包
          const exchangeRedPacket = 0;
          const assignmentPointsNum = exchangeRedPacket * 1000;
          if (!assignmentPoints || assignmentPointsNum > assignmentPoints || exchangeRedPacket === 0) return;
          await api.doFormBody('assignmentPointsTransferRedPackage', {assignmentPointsNum}, {appid: 'jwsp'}).then(data => {
            if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
            api.log(`兑换红包成功: ${_.property('result.discountTotal')(data)}`);
          });
        },
      },
    };
  };
}

singleRun(SecondKillRedPacket).then();

module.exports = SecondKillRedPacket;
