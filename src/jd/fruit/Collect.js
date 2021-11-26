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

    const {result: {popWindow, taskInfo, activityStatus}} = await collectInit();
    const finishedStatus = 4;
    if (activityStatus === finishedStatus) {
      return api.log(`已完成本次集勋章活动`);
    } else if (activityStatus === 3) {
      return getAwardInfo();
    }

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

    await logMedalInfo();

    async function collectInit() {
      return api.doFormBody('collect_Init', {'channel': 1});
    }

    async function logMedalInfo() {
      const getNames = array => _.map(array, 'medalName').join(',');
      const {result: {medalInfo}} = await collectInit();
      const finishedMedals = medalInfo.filter(({status}) => status === finishedStatus);
      const notFinishedMedals = medalInfo.filter(({status}) => status !== finishedStatus);
      const msgs = [];
      if (!_.isEmpty(finishedMedals)) {
        msgs.push(`已完成的勋章: ${getNames(finishedMedals)}`);
      }
      if (!_.isEmpty(notFinishedMedals)) {
        msgs.push(`未完成的勋章: ${getNames(notFinishedMedals)}`);
      }
      api.log(msgs.join(', '));
    }

    async function getAwardInfo() {
      const {chooseAwardSubTitle, awardList} = await api.doFormBody('getAwardInfo').then(_.property('result'));
      return api.log(chooseAwardSubTitle || '勋章已集全, 建议早点领取');
      // 默认领取水滴, 按需进行
      await api.doFormBody('collect_exchangeAward', {type: 1});
    }
  }
}

singleRun(FruitCollect).then();

module.exports = FruitCollect;
