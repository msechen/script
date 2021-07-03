const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const FakerSmashUtils = require('../../lib/FakerSmashUtils');

const {necklace} = require('../../../charles/api');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/41Lkp7DumXYCFmPYtU3LTcnTTXTX/index.html';

class Necklace extends Template {
  static scriptName = 'Necklace';
  static scriptNameDesc = '天天点点券';
  static needOriginH5 = true;
  static needInAppComplete = true;

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
  };

  static isSuccess(data) {
    return _.property('data.biz_code')(data) === 0;
  }

  static async beforeRequest(api) {
    new FakerSmashUtils(api, indexUrl, {
      userAgent: this.appCompleteUserAgent,
      smashInitData: {appid: '50082', sceneid: 'DDhomePageh5'},
      scriptUrl: 'https://storage.360buyimg.com/babel/00750963/1942873/production/dev/main.3b9712aa.js',
    }).patchApi(['sign', 'startTask', 'chargeScores']);
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
