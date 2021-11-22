const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/m6Gntdu86ypN4ehW9oFsChdMtPG/index.html';

class FruitCollect extends Template {
  static scriptName = 'FruitCollect';
  static scriptNameDesc = '双十一集勋章';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static needOriginH5 = true;
  static times = 1;

  static apiOptions = {
    options: {},
  };

  static async doMain(api, shareCodes) {
    const self = this;

    const {result: {popWindow, taskInfo}} = await api.doFormBody('collect_Init', {'channel': 1});
    if (popWindow['windowType'] === 2) {
      // 获取新手奖励
      await api.doFormBody('collect_newUserAward').then(data => api.log(data.msg));
    }
    // 任务只需在东东农场完成即可, 这里只需要领取奖励
    for (const {taskType, status, medalName} of taskInfo) {
      if (status === 3) {
        await api.doFormBody('collect_taskAward', {taskType}).then(data => {
          api.log(`完成 ${medalName}, 获得水滴: ${_.get(data, 'result.awardValue', 0)}`);
        });
      }
    }
  }
}

singleRun(FruitCollect).then();

module.exports = FruitCollect;
