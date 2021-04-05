const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class Isp5G extends Template {
  static scriptName = 'Isp5G';
  static scriptNameDesc = '5G超级盲盒';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static repeatDoTask = true;
  static concurrent = true;
  static concurrentOnceDelay = 0;

  static apiOptions = {
    options: {
      uri: 'https://isp5g.m.jd.com',
      method: 'GET',
      headers: {
        referer: 'https://isp5g.m.jd.com',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doGetPath',
  };

  static isSuccess(data) {
    return _.property('code')(data) === 200;
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'active/taskList',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'taskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskConfig = [
            // 浏览会场
            [1, 'strollActive', task => [{0: task['finishNum'] + 1}]],
            // 关注店铺
            [2, 'strollShop', task => [{shopId: task.shopId}]],
            // 浏览商品
            [4, 'browseProduct', task => [{0: task.skuId}]],
          ];
          for (const [type, functionId, getListFn] of taskConfig) {
            const task = _.property(`data.task${type}`)(data) || {};
            let {
              state,
              totalNum: maxTimes,
              finishNum: times,
            } = task;
            if (state === 2) continue;

            let list = getListFn(task);

            const option = {
              firstFn(qs) {
                return api.doGetPath(`active/${functionId}`, qs);
              },
              afterWaitFn() {
                return api.doGetPath('active/taskCoin', {type}).then(data => {
                  const beanNum = _.property('data.jbeanNum')(data);
                  if (!beanNum) return;
                  self.log(`获得 ${beanNum} 豆豆`);
                });
              },
              maxTimes: list.length, waitDuration: 10,
            };
            result.push({list, option});
          }

          return result;
        },
      },
      doRedeem: {
        name: 'prize/lottery',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          self.log(_.property('data.name')(data));
        },
        repeat: true,
      },
    };
  }
}

singleRun(Isp5G).then();

module.exports = Isp5G;
