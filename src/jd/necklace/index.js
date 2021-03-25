const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

const {necklace} = require('../../../charles/api');

class Necklace extends Template {
  static scriptName = 'Necklace';
  static scriptNameDesc = '天天点点券';
  static needOriginH5 = true;

  static apiOptions = {
    signData: {
      appid: 'coupon-necklace',
    },
  };

  static isSuccess(data) {
    return this._.property('data.biz_code')(data) === 0;
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

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
              targetForm && _.assign(option, {
                waitDuration: 1,
                async afterWaitFn() {
                  await api.doForm('getCcTaskList', necklace.getCcTaskList[0]);
                  await sleep(15);
                  return api.doForm('reportCcTask', targetForm);
                },
              });
            }

            if (groupNumber) {
              await doSubTask();

              async function doSubTask() {
                const subTaskList = await api.doFormBody('necklace_getTask', {taskId}).then(data => _.property('data.result.taskItems')(data)) || [];
                _.assign(option, {
                  async afterWaitFn() {
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
        paramFn: o => o,
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
