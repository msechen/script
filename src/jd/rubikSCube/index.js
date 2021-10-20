const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html';

class RubikSCube extends Template {
  static scriptName = 'RubikSCube';
  static scriptNameDesc = '集魔方';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static needInAppComplete = true;
  static isWh5 = true;
  static commonParamFn = () => ({});

  static apiOptions = {
    signData: {
      appid: 'content_ecology',
    },
  };

  static isSuccess(data) {
    return _.property('subCode')(data) === '0';
  };

  static async beforeRequest(api) {
    const self = this;

    const encryptProjectId = await api.doFormBody('getInteractionHomeInfo', {'sign': 'u6vtLQ7ztxgykLEr'}).then(_.property('result.taskConfig.projectId'));
    if (!encryptProjectId) return true;

    replaceObjectMethod(api, 'doFormBody', ([functionId, body, signData, options]) => {
      return [functionId, _.assign({encryptProjectId, 'sourceCode': 'acexinpin0823'}, body), signData, options];
    });
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'queryInteractiveInfo',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'getInteractionHomeInfo.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('assignmentList')(data) || [];
          for (let {
            encryptAssignmentId,
            assignmentType,
            assignmentName,
            assignmentTimesLimit: maxTimes,
            completionCnt: times,
            completionFlag,
            ext
          } of taskList) {
            const isShareTask = /助力/.test(assignmentName);
            const {waitDuration, extraType} = ext || {};
            if (!encryptAssignmentId || !extraType || completionFlag && !isShareTask || ['成为店铺会员'].includes(assignmentName)) continue;

            let extData = ext[extraType];
            if (isShareTask) {
              self.isFirstLoop() && self.updateShareCodeFn(extData);
              extData = self.getShareCodeFn();
              times = 0;
            }
            let list = _.concat(extData).map(o => ({
              encryptAssignmentId,
              itemId: o['itemId'] || ['advId'],
              actionType: waitDuration ? 1 : 0,
            }));

            if (_.isEmpty(list)) continue;

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'doInteractiveAssignment',
        paramFn: o => o,
        async successFn(data, api) {
          if (!self.isSuccess(data)) return api.log(data.msg);
          const extraPin = _.get(data, 'assignmentInfo.extraPin');
          if (extraPin) {
            api.log(`助力${extraPin}成功`);
          }
        },
      },
      doWaitTask: {
        name: 'doInteractiveAssignment',
        paramFn: o => _.assign(o, {actionType: 0}),
      },
      // TODO 输出有多少个魔方和自动兑换
    };
  }
}

singleRun(RubikSCube).then();

module.exports = RubikSCube;
