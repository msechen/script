const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const configCodes = [
  'abe6bafe2f6b4efca6ba5b429daf5f26',
  'c8240993509a49da9b53645084a69e12',
];

class Joy20210805 extends Template {
  static scriptName = 'Joy20210805';
  static scriptNameDesc = '电脑配件节';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static needInAppComplete = true;
  static configCode = '';
  static maxTaskDoneTimes = 10;
  static times = 4;
  static commonParamFn = data => _.assign(data || {}, {
    configCode: this.configCode,
    'eid': 'M7UO6SRTFR5GQS7SPKPOGT7ZZB6KH2I7CUXZGVFSPJ5773VII5RHNSVRM4FK4RSLDCBRG3QQUS4WNC5PZ2767E6D3Q',
    'fp': '4c6528b058b4220620f77f4700aeb97c',
  });

  static apiOptions = {
    options: {
      uri: 'https://jdjoy.jd.com/module/task/v2',
      headers: {
        origin: 'https://prodev.m.jd.com',
        referer: 'https://prodev.m.jd.com/mall/active/4TUq5NiJL2QnGsbnCemJ2UUsaa9R/index.html',
        'content-type': 'application/json;charset=utf-8',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doGetPath',
  };

  static isSuccess(data) {
    return data.success === true;
  }

  static beforeRequest(api) {
    api.getTaskListTimes = 0;
    this.configCode = configCodes[this.currentTimes % 2] || configCodes[0];
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getActivity',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'getActivity.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.dailyTask.taskList')(data) || [];
          if (_.isEmpty(taskList)) {
            // 任务列表接口需要等待一段时间, 不然不会返回数据
            await sleep(10);
            if (++api.getTaskListTimes < 5) {
              return self.doApi(api, 'getTaskList');
            }
          }

          api.getTaskListTimes = 0;
          for (let {
            groupType,
            taskCount: maxTimes,
            finishCount: times,
            viewTime: waitDuration,
            item: {itemId},
            rewardQuantity,
          } of taskList) {
            if (maxTimes === times || [].includes(groupType)) continue;

            let list = [self.commonParamFn({groupType, itemId})];

            result.push({
              list, option: {
                async firstFn(body) {
                  await sleep(waitDuration);
                  await api.doBodyPath('doTask', body).then(data => {
                    if (self.isSuccess(data)) return api.log(`获得豆豆 ${rewardQuantity}`);
                    api.log(JSON.stringify(data));
                  });
                },
              },
            });
          }

          if (_.isEmpty(result)) {
            const {moduleBaseInfo} = data.data;
            if (moduleBaseInfo['rewardStatus'] === 1) {
              await api.doBodyPath('getReward', self.commonParamFn({
                groupType: 5,
                itemId: 1,
              })).then(data => {
                if (self.isSuccess(data)) return api.log(`获得豆豆 ${moduleBaseInfo['rewardFinish']}`);
                api.log(JSON.stringify(data));
              });
            }
          }

          return result;
        },
      },
    };
  }
}

singleRun(Joy20210805).then();

module.exports = Joy20210805;
