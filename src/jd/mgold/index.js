const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

class Mgold extends Template {
  static scriptName = 'Mgold';
  static scriptNameDesc = '艾普兰金口碑奖';
  // 活动入口: https://prodev.m.jd.com/mall/active/EXf9Q3h3RpG7bY79HtcR5nd6bZ6/index.html

  static times = 1;
  static apiOptions = {
    options: {
      uri: 'https://mgold.jd.com/api',
      method: 'GET',
      headers: {
        origin: 'https://mgold.jd.com',
      },
    },
  };
  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return _.property('code')(data) === 200;
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'skuList',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'skuList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data')(data) || [];
          for (let {
            type,
            list,
            hasVote,
          } of taskList) {
            if (hasVote) continue;

            list = list.filter(o => !o['hasVote']).map(o => ({
              type,
              sku: o.skuId,
            }));

            result.push({list});
          }

          return result;
        },
      },
      doTask: {
        name: 'vote',
        paramFn: qs => [void 0, {qs}],
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          self.log(`获取到豆豆: ${_.property('data.amount')(data)}`);
        },
      },
    };
  };
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  Mgold.start(getCookieData()).then();
}

module.exports = Mgold;
