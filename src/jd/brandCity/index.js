const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');
const dataQA = require('./Q&A.json').map(v => _.isString(v) ? v.split(/[?？]=/) : v);

class BrandCity extends Template {
  static scriptName = 'BrandCity';
  static scriptNameDesc = '永乐神仙书院';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static apiOptions = {
    options: {
      headers: {
        origin: 'https://h5.m.jd.com',
      },
    },
    signData: {
      appid: 'publicUseApi',
      body: {
        'token': 'jd17919499fb7031e5',
      },
    },
  };

  static isSuccess(data) {
    return _.property('retCode')(data) === '200';
  };

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'mcxhd_brandcity_taskList',
        paramFn: () => ({lat: process.env.JD_BC_POSITION_LAT, lng: process.env.JD_BC_POSITION_LNG}),
        async successFn(data, api) {
          // writeFileJSON(data, 'mcxhd_brandcity_taskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('result.tasks')(data) || [];
          for (let {
            status,
            taskId,
            maxTimes,
            times,
            waitDuration,
            subItem,
          } of taskList) {
            if (status === 2 || ['4'/*开会员*/].includes(taskId)) continue;

            let list = subItem.map(o => _.pick(o, ['itemToken']));

            if (taskId === '9'/*助力*/) {
              const shareCodeTaskList = self.shareCodeTaskList;
              let itemToken = subItem[0].itemToken;
              if (!shareCodeTaskList.includes(itemToken)) {
                shareCodeTaskList.splice(self.currentCookieTimes, 0, itemToken);
              }
              list = self.getShareCodeFn().map(itemToken => ({itemToken}));
              times = 0;
              maxTimes = list.length;
            }

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'mcxhd_brandcity_doTask',
        paramFn: o => o,
        async successFn(data, api) {
          return data;
        },
      },
      doWaitTask: {
        name: 'qryViewkitCallbackResult',
        paramFn: (o, data) => [{
          dataSource: 'newshortAward',
          method: 'getTaskAward',
          reqParams: JSON.stringify({'taskToken': data.result.taskToken}),
        }, {appid: ''}],
      },
      afterGetTaskList: {
        name: 'mcxhd_brandcity_homePage',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          self.log(`当前金币： ${data.result.userCoinNum}`);
        },
      },
    };
  };

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }

  static async doCron(api) {
    const self = this;

    // test
    // for (const {questionToken, questionStem, options} of require('./mcxhd_brandcity_getQuestions.json').result.questionList) {
    //   const targetAnswer = getAnswer(questionStem, options);
    //   console.log(targetAnswer);
    // }
    // return;

    let needUpdateFile = false;
    await handleAnswer();
    // 自动更新 Q&A.json
    if (needUpdateFile) writeFileJSON(dataQA, 'Q&A.json', __dirname);
    await exchangePage();

    async function handleAnswer() {
      const questionList = await api.doFormBody('mcxhd_brandcity_getQuestions').then(data => _.property('result.questionList')(data) || []);

      for (const {questionToken, questionStem, options} of questionList) {
        let targetAnswer = getAnswer(questionStem, options);
        if (!targetAnswer) {
          console.log(`${questionStem} 没有找到答案`);
          targetAnswer = options[1];
        }
        await answerQuestion(questionToken, targetAnswer.optionId).then(data => {
          if (!self.isSuccess(data)) return;
          const {isCorrect, correctOptionId} = _.property('result')(data);
          if ((isCorrect === 1) || !correctOptionId) return;
          const correctOption = options.find(o => o.optionId === correctOptionId);
          needUpdateFile = true;
          // 更新 dataQA
          const correctItem = [questionStem.replace(/[?？]/, ''), correctOption.optionDesc];
          console.log(correctItem);
          dataQA.push(correctItem);
        });
      }

      if (!_.isEmpty(questionList)) await handleAnswer();
    }

    async function answerQuestion(questionToken, optionId) {
      return api.doFormBody('mcxhd_brandcity_answerQuestion', {
        'costTime': 1,
        questionToken,
        optionId,
      });
    }

    async function exchangePage(enableExchange) {
      return api.doFormBody('mcxhd_brandcity_exchangePage').then(async data => {
        if (!self.isSuccess(data)) return;
        const {
          exchangeOpenFlag,
          userRemainScore,
          exchageRate,
          exchageRateList,
        } = _.property('result')(data) || {};
        if (exchangeOpenFlag !== 1) {
          return self.log('当前不可以进行兑换');
        }
        if (userRemainScore === 0) {
          return self.log('积分为0, 不可兑换');
        }
        self.log(`当前场次倍数: ${exchageRate} 当前随机倍数为: ${exchageRateList}`);

        enableExchange = _.max(exchageRateList) === exchageRateList;

        enableExchange && await api.doFormBody('mcxhd_brandcity_exchange').then(data => {
          if (!self.isSuccess(data)) return;
          self.log(`兑换的数量为: ${_.property('result.receivedJbeanNum')(data)}`);
        });
      });
    }

    function getAnswer(questionStem, options) {
      const [question, answer] = dataQA.find(([question, answer]) => questionStem.match(question)) || [];
      if (question) {
        return options.find(({optionDesc}) => optionDesc.match(answer));
      }
    }
  }
}

module.exports = BrandCity;
