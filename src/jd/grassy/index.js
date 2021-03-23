const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

class Grassy extends Template {
  static scriptName = 'Grassy';
  static scriptNameDesc = '新品种草(答题)';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static apiOptions = {
    options: {
      uri: 'https://grassy.m.jd.com/followProduct',
      method: 'GET',
      qs: {
        activityId: 349,
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
        name: 'init',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'init.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const currentShareId = await api.doPath('initSupport').then(data => {
            return _.property('data.shareId')(data);
          });
          self.updateShareCodeFn(currentShareId);
          for (const shareId of self.getShareCodeFn()) {
            await api.doPath('support', void 0, {qs: {shareId}}).then(data => {
              if (!self.isSuccess(data)) return self.log(data.msg);
              self.log('助力成功');
            });
          }

          const result = [];

          const taskList = _.property('data.questions')(data) || [];
          for (let {
            answerStatus,
            answers,
            questionNo,
            hasFollowSendBean,
            bactUrlJingBean,
          } of taskList) {
            if (answerStatus === 1 && bactUrlJingBean && hasFollowSendBean) continue;

            const allAnswer = ['2400', '10位', '12英寸', 'oppoX', '支持', '3300', '支持', '4款', '5.0', '设备'];
            const targetAnswer = answers.find(({answer}) =>
              allAnswer.some(str => answer.match(str) && !answer.match('不支持'))) || answers[0];

            let list = [{
              questionNo,
              answerNo: targetAnswer.answerNo,
            }];

            const option = {
              async firstFn(o) {
                const {questionNo} = o;
                if (answerStatus === 0) await api.doPath('answerAndFollow', void 0, {qs: o});
                !bactUrlJingBean && await api.doPath('bActUrlSendJingBean', void 0, {qs: {questionNo}});
                !hasFollowSendBean && await api.doPath('follow', void 0, {qs: {followType: 2, questionNo}});
              },
            };
            result.push({list, option});
          }

          return result;
        },
      },
    };
  }
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  Grassy.start(getCookieData()).then();
}

module.exports = Grassy;
