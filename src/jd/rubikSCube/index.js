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

    const {
      taskConfig,
      giftConfig,
    } = await api.doFormBody('getInteractionHomeInfo', {'sign': 'u6vtLQ7ztxgykLEr'}).then(_.property('result'));
    const {projectId: encryptProjectId} = taskConfig;
    _.assign(api, {taskConfig, giftConfig});
    if (!encryptProjectId) return true;

    replaceObjectMethod(api, 'doFormBody', ([functionId, body, signData, options]) => {
      const baseBody = {encryptProjectId, sourceCode: 'acexinpin0823'};
      if (_.has(body, 'ext.couponUsableGetSwitch')) {
        _.assign(baseBody, {encryptProjectId: giftConfig.projectId});
      }
      body = _.assign(baseBody, body);
      if (_.has(body, 'encryptProjectPoolId')) {
        delete body['encryptProjectId'];
      }
      return [functionId, body, signData, options];
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
            if (!encryptAssignmentId || !extraType || completionFlag && !isShareTask/* || ['成为店铺会员'].includes(assignmentName)*/) continue;

            let extData = ext[extraType];
            if (isShareTask) {
              !completionFlag && self.isFirstLoop() && self.updateShareCodeFn(extData);
              extData = self.getShareCodeFn();
              times = 0;
            }
            let list = _.concat(extData).filter(o => o['status'] !== 2).map(o => ({
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
      afterGetTaskList: {
        name: 'queryInteractiveInfo',
        paramFn: () => ({
          'ext': {'couponUsableGetSwitch': '1'},
        }),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return api.log(data.msg);
          const exchangeRestScoreMap = {};
          const {projectPoolId: encryptProjectPoolId} = api.taskConfig;
          const {projectId: encryptProjectId} = api.giftConfig;
          _.assign(exchangeRestScoreMap, await api.doFormBody('queryInteractiveRewardInfo', {
            encryptProjectPoolId,
            'sourceCode': 'wh5',
            'ext': {'needPoolRewards': 1, 'needExchangeRestScore': 1},
          }).then(_.property('exchangeRestScoreMap')));
          _.assign(exchangeRestScoreMap, await api.doFormBody('queryInteractiveRewardInfo', {
            encryptProjectId,
            'ext': {'needExchangeRestScore': '1'},
          }).then(_.property('exchangeRestScoreMap')));

          const assignmentList = _.property('assignmentList')(data) || [];

          for (const [id, value] of Object.entries(exchangeRestScoreMap)) {
            const targetList = assignmentList.filter(o => o['scoreExchangeId'] === +id);
            const {
              exchangeRate,
              encryptAssignmentId,
            } = _.maxBy(targetList, o => o.rewards[0].rewardValue / o['exchangeRate']);
            const exchangeNum = Math.floor(value / exchangeRate);
            if (exchangeNum > 0) {
              for (let i = 0; i < exchangeNum; i++) {
                await api.doFormBody('doInteractiveAssignment', {
                  encryptProjectId, encryptAssignmentId,
                  'itemId': '',
                  'actionType': '',
                  'completionFlag': '',
                  'ext': {exchangeNum: 1},
                }).then(data => {
                  const successRewards = _.get(data, 'rewardsInfo.successRewards');
                  api.log(`获得${_.flatten(_.values(successRewards)).map(o => o.rewardName).join(' ')}`);
                });
              }
            }
          }
        },
      },
    };
  }
}

singleRun(RubikSCube).then();

module.exports = RubikSCube;
