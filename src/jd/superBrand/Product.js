const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {replaceObjectMethod} = require('../../lib/common');

class SuperBrandProduct extends Template {
  static scriptName = 'SuperBrandProduct';
  static scriptNameDesc = '物特';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    options: {
      qs: {
        appid: 'ProductZ4Brand',
        client: 'wh5',
        body: {'source': 'secondfloor'},
      },
      headers: {
        origin: 'https://prodev.m.jd.com',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doGetBodyMP',
  };

  static isSuccess(data) {
    return _.property('data.bizCode')(data) === '0';
  };

  static async beforeRequest(api) {
    const {
      encryptProjectId,
      activityId,
    } = await api.doGetBodyMP('superBrandSecondFloorMainPage').then(data => _.get(data, 'data.result.activityBaseInfo'));
    if (!encryptProjectId) return;
    _.assign(api.options.qs.body, {activityId});
    api.encryptProjectId = encryptProjectId;
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'superBrandTaskList',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'superBrandTaskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.result.taskList')(data) || [];
          for (let {
            encryptAssignmentId,
            assignmentType,
            assignmentName,
            assignmentTimesLimit: maxTimes,
            completionCnt: times,
            waitDuration,
            ext,
          } of taskList) {
            if ((times === maxTimes) || [30/*抽奖*/].includes(assignmentType) || assignmentName.match(/助力|开卡/)) continue;

            let list = [];

            // 分享海报
            if (assignmentType === 0) {
              ext['extraType'] = 'list';
              ext['list'] = [{
                itemId: null,
              }];
            }

            if (!_.isEmpty(ext)) {
              for (const {itemId, status} of ext[ext['extraType']]) {
                if (status === 2) continue;
                const item = {
                  encryptProjectId: api.encryptProjectId,
                  encryptAssignmentId,
                  assignmentType,
                  itemId,
                  actionType: 0,
                };
                if (!itemId) {
                  _.assign(item, {completionFlag: 1});
                }
                list.push(item);
              }
            }
            if (_.isEmpty(list)) continue;

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'superBrandDoTask',
        paramFn: o => o,
      },
      doRedeem: {
        name: 'superBrandTaskLottery',
        async successFn(data, api) {
          const {bizCode, bizMsg, result} = data.data;
          if (bizCode !== 'TK000') {
            // api.log(bizMsg);
            return false;
          }
          const {userAwardInfo} = result;
          if (_.isEmpty(userAwardInfo)) return api.log('抽空了!');
          const {awardType, awardName, beanNum, useRange} = userAwardInfo;
          if (awardType === 3 || beanNum) {
            api.log(`获得豆豆: ${beanNum}`);
          } else if (awardName) {
            api.log(`获得: ${awardName}(${useRange})(awardType: ${awardType})`);
          }
        },
        repeat: true,
      },
    };
  }
}

singleRun(SuperBrandProduct).then();

module.exports = SuperBrandProduct;
