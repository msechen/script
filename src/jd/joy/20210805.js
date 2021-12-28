const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

const configDataList = [];
const updateQsOption = (eid, fp, configCode) => {
  configDataList.push({configCode, eid, fp});
};

[
  // 已过期的活动
  // 'abe6bafe2f6b4efca6ba5b429daf5f26',
  // 'c8240993509a49da9b53645084a69e12',
].forEach(updateQsOption.bind(0,
  'M7UO6SRTFR5GQS7SPKPOGT7ZZB6KH2I7CUXZGVFSPJ5773VII5RHNSVRM4FK4RSLDCBRG3QQUS4WNC5PZ2767E6D3Q',
  '4c6528b058b4220620f77f4700aeb97c'));

[
  // 已过期的活动
  // '40c2d87a71ec40cf96badb810818bb92',
  // 'b3cc4f6e5e924c3d82b10404f91740ce',
  // '1d43119d79ba4fc3a254c449c6aea1d2',
].forEach(updateQsOption.bind(0,
  'G37CAEULUZLTRDCUURES5BDFX73WXBLRSG3LIKN6JTL75T5BUG7YYLPPOV2ZUS55SF7BAJEA36WVJSJSMUHUESY27M',
  'f9b97a78ead44f94e6d3308f30454c2e'));

[
  // 已过期的活动
  // '9fdb6cdb7e974b22994ea774ea566470',
].forEach(updateQsOption.bind(0,
  '2CE5CIUVPRYAFGD6L6PD2FBCU3DKNUH537GU4DPDOV4F5JV5AWWX3KDXWDV2K4CVD62ZBPAHZV6ZLHU6TPQ5HWLVNU',
  '8324292268138617d7719f7d211f67ef'));

[
  'eba16f94628547cdb20170920b813164',
].forEach(updateQsOption.bind(0,
  'G37CAEULUZLTRDCUURES5BDFX73WXBLRSG3LIKN6JTL75T5BUG7YYLPPOV2ZUS55SF7BAJEA36WVJSJSMUHUESY27M',
  'f9b97a78ead44f94e6d3308f30454c2e'));

class Joy20210805 extends Template {
  static scriptName = 'Joy20210805';
  static scriptNameDesc = '电脑配件节';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static needInAppComplete = true;
  static configCode = '';
  static maxTaskDoneTimes = Infinity;
  static times = configDataList.length;
  static concurrent = true;
  static concurrentOnceDelay = 2;
  static commonParamFn = data => (data || {});

  static apiOptions = {
    options: {
      uri: 'https://jdjoy.jd.com/module/task/v2',
      headers: {
        origin: 'https://prodev.m.jd.com',
        referer: 'https://prodev.m.jd.com/mall/active/4TUq5NiJL2QnGsbnCemJ2UUsaa9R/index.html',
        'content-type': 'application/json;charset=utf-8',
      },
      qs: {},
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

    const {configCode} = api.configData || {};
    const index = configDataList.findIndex(o => o.configCode === configCode);
    api.configData = configDataList[index + 1] || configDataList[0];

    replaceObjectMethod(api, 'doGetPath', ([functionId, qs, options]) => {
      _.assign(qs, api.configData);
      return [functionId, qs, options];
    });

    replaceObjectMethod(api, 'doBodyPath', ([functionId, body]) => {
      _.assign(body, api.configData);
      return [functionId, body];
    });
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

          const {data: {moduleBaseInfo = {}}} = data;
          const {beginTime, endTime} = moduleBaseInfo;
          if (getMoment().isBefore(beginTime) || getMoment().isAfter(endTime)) {
            api.log(`${api.options.qs.configCode} 活动已结束`);
            return [];
          }

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
            if (moduleBaseInfo && moduleBaseInfo['rewardStatus'] === 1) {
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
