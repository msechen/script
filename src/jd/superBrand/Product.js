const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');

class SuperBrandProduct extends Template {
  static scriptName = 'SuperBrandProduct';
  static scriptNameDesc = '物特(集卡瓜分)';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static needInAppComplete = true;

  static apiOptions = {
    options: {
      qs: {
        appid: 'ProductZ4Brand',
        client: 'wh5',
        body: {'source': 'card'},
        uuid: this.getUUid(),
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
    } = await api.doGetBodyMP('showSecondFloorCardInfo').then(_.property('data.result.activityBaseInfo')) || {};
    if (!encryptProjectId) return true;
    _.assign(api.options.qs.body, {activityId});
    api.encryptProjectId = encryptProjectId;
  }

  static apiNamesFn() {
    const self = this;

    const result = {
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
            ext = {},
          } of taskList) {
            if ((times === maxTimes) || [].includes(assignmentType) || assignmentName.match(/邀请/)) continue;

            let list = [];

            // 分享海报
            if (assignmentName.match('海报')) {
              ext['extraType'] = 'list';
              ext['list'] = [{
                itemId: null,
              }];
            }

            if (!_.isEmpty(ext)) {
              const extName = ext['extraType'];
              if (extName === 'assistTaskDetail') continue;
              for (const {itemId, status, beginTime, endTime} of _.concat(ext[extName])) {
                if (status === 2) continue;
                if (beginTime && endTime) {
                  const nowTime = getMoment().format('HH:mm:ss');
                  if (nowTime < beginTime || nowTime > endTime) {
                    continue;
                  } else {
                    times = 0;
                    maxTimes = 1;
                  }
                }
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
      afterGetTaskList: {
        name: 'showSecondFloorCardInfo',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
          const {activityCardInfo} = _.get(data, 'data.result');
          const {cardPackList, divideTimeStr} = activityCardInfo;
          const enableDivide = cardPackList.every(({num}) => num > 0);
          const cardLog = '已收集卡片数: ' + cardPackList.map(({num, cardType}) => `${num}张卡片${cardType}`).join(', ');
          api.log((enableDivide ? `卡片已凑齐, ${divideTimeStr}开始瓜分` : '卡片未凑齐, 请继续努力') + `  ${cardLog}`);
        },
      },
    };

    // TODO 待确认是否需要
    if (0) {
      _.assign(result, {
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
      });
    }

    return result;
  }
}

singleRun(SuperBrandProduct).then();

module.exports = SuperBrandProduct;
