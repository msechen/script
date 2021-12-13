const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');

const source = 'secondfloor';

class SuperBrandProduct extends Template {
  static scriptName = 'SuperBrandProduct';
  static scriptNameDesc = '物特';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;
  static needInAppComplete = true;

  static apiOptions = {
    options: {
      qs: {
        appid: 'ProductZ4Brand',
        client: 'wh5',
        body: {source},
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
            assignmentDesc,
            assignmentTimesLimit: maxTimes,
            completionCnt: times,
            waitDuration,
            ext = {},
            completionFlag,
          } of taskList) {
            if ([].includes(assignmentType)) continue;
            if (/会员|开卡/.test(assignmentName) && !self.lastTimeInTheDay()) continue;

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
              let dropDownChannel = assignmentDesc.match('下拉') ? 1 : void 0;
              const patchItem = itemId => _.assign({
                encryptProjectId: api.encryptProjectId,
                encryptAssignmentId,
                assignmentType,
                actionType: 0,
                itemId,
                dropDownChannel,
              }, !itemId ? {completionFlag: 1} : {});
              if (extName === 'assistTaskDetail') {
                !completionFlag && self.isFirstLoop() && self.updateShareCodeFn(ext[extName].itemId);
                list = self.getShareCodeFn().map(patchItem);
                times = 0;
                maxTimes = list.length;
              } else {
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
                  list.push(patchItem(itemId));
                }
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
    };

    if (source === 'card') {
      _.assign(result, {
        name: 'showSecondFloorCardInfo',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
          const {activityCardInfo} = _.get(data, 'data.result');
          const {cardPackList, divideTimeStr} = activityCardInfo;
          const enableDivide = cardPackList.every(({num}) => num > 0);
          const cardLog = '已收集卡片数: ' + cardPackList.map(({num, cardType}) => `${num}张卡片${cardType}`).join(', ');
          api.log((enableDivide ? `卡片已凑齐, ${divideTimeStr}开始瓜分` : '卡片未凑齐, 请继续努力') + `  ${cardLog}`);
        },
      });
    } else if (source === 'secondfloor' && self.lastTimeInTheDay()) {
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
