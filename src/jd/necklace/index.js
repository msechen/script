const Template = require('../base/template');

const {sleep, writeFileJSON, replaceObjectMethod} = require('../../lib/common');
const FakerSmashUtils = require('../../lib/FakerSmashUtils');
const Cookie = require('../../lib/cookie');
const {uuidRandom} = require('../base/api');

const {necklace} = require('../../../charles/api');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/41Lkp7DumXYCFmPYtU3LTcnTTXTX/index.html';

class Necklace extends Template {
  static scriptName = 'Necklace';
  static scriptNameDesc = '天天点点券';
  static needOriginH5 = true;
  static needInAppComplete = true;
  static appCompleteUserAgent = `jdapp;iPhone;10.0.8;14.4.2;${uuidRandom()};network/wifi;ADID/3F74A88A-71D3-404B-BBDF-8C0575E680EC;model/iPhone10,2;addressid/4091160336;appBuild/167741;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`;

  static apiOptions = {
    signData: {
      appid: 'coupon-necklace',
      client: 'coupon-necklace',
      uuid: this.getUUid(),
      loginType: 2,
    },
    options: {
      headers: {
        referer: indexUrl,
      },
    },
    formatDataFn(data) {
      const {rtn_code: bizCode, rtn_msg: bizMsg} = data;
      if (bizCode === 403 || /非法请求/.test(bizMsg)) {
        const msg = `bizCode: ${bizCode}, bizMsg: ${bizMsg}`;
        this.log(msg);
        throw new Error(msg);
      }
      return data;
    },
  };

  static isSuccess(data) {
    return _.property('data.biz_code')(data) === 0;
  }

  static async beforeRequest(api) {
    const self = this;
    const appId = '50082';
    const joyToken = await api.doUrl('https://bh.m.jd.com/gettoken', {
      form: {
        content: {'appname': appId, 'whwswswws': '', 'jdkey': '', 'body': {'platform': '1'}},
      },
      headers: {
        Cookie: '',
      },
    }).then(data => {
      return data['joyytoken'];
    });
    const newCookie = `joyytoken=${appId}${joyToken}`;
    api.cookie = new Cookie([api.cookie, newCookie].join('; ')).toString();
    return replaceObjectMethod(api, 'doFormBody', async ([functionId, body, signData, options]) => {
      const action = ['sign', 'startTask', 'chargeScores'].find(v => functionId.match(v));
      if (action) {
        body = body || {};
        body = await require('./ZooFaker_Necklace').utils.getBody({
          cookie: api.cookie,
          action,
          joyToken,
          uuid: self.getUUid(),
          id: body.taskId || body.bubleId,
        });
      }
      return [functionId, body, signData, options];
    });
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'necklace_homePage',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'necklace_homePage.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          // 签到
          const needSign = _.property('data.result.signInfo.todayCurrentSceneSignStatus')(data) === 1;
          needSign && await api.doFormBody('necklace_sign');

          const taskList = _.property('data.result.taskConfigVos')(data) || [];
          for (let {
            taskName,
            taskStage: status,
            id: taskId,
            maxTimes,
            times,
            groupNumber,
            requireBrowseSeconds: waitDuration,
          } of taskList) {
            if ([2, 3].includes(status) || [].includes(taskId)) continue;
            waitDuration = waitDuration || 1;

            let list = [{taskId}];
            const option = {maxTimes, times, waitDuration};

            if (taskName.match('领券')) {
              const targetForm = necklace.reportCcTask.find(form => JSON.parse(form.body).taskId.match(taskId));
              if (status === 1 && !targetForm) {
                continue;
              }
              targetForm && _.assign(option, {
                waitDuration: 1,
                async afterWaitFn() {
                  await api.doForm('getCcTaskList', _.last(necklace.getCcTaskList));
                  await sleep(15);
                  return api.doForm('reportCcTask', targetForm);
                },
              });
            }

            if (groupNumber) {
              await patchSubTask();

              async function patchSubTask() {
                _.assign(option, {
                  async afterWaitFn() {
                    const subTaskList = await api.doFormBody('necklace_getTask', {taskId}).then(data => _.property('data.result.taskItems')(data)) || [];
                    return self.loopCall(subTaskList, {
                      maxTimes: subTaskList.length,
                      firstFn({id}) {
                        return api.doFormBody('necklace_reportTask', {taskId, itemId: id});
                      },
                    });
                  },
                });
              }
            }

            result.push({list, option});
          }

          return result;
        },
      },
      doTask: {
        name: 'necklace_startTask',
        paramFn: o => o,
      },
      doWaitTask: {
        name: 'necklace_reportTask',
        paramFn: o => _.pick(o, 'taskId'),
      },
      // afterGetTaskList: {
      //   name: 'necklace_assistOpenCard',
      //   async successFn(data, api) {
      //     if (!self.isSuccess(data)) return false;
      //   },
      //   repeat: true
      // },
      doRedeem: {
        name: 'necklace_homePage',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const bubbles = _.property('data.result.bubbles')(data) || [];
          for (const {id} of bubbles) {
            await api.doFormBody('necklace_chargeScores', {bubleId: id});
          }
          const totalScore = await api.doFormBody('necklace_homePage').then(data => _.property('data.result.totalScore')(data));
          totalScore && self.log(`当前分数为: ${totalScore}`);
        },
      },
    };
  };
}

module.exports = Necklace;
