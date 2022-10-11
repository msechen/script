const Template = require('../../base/template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../../lib/common');
const {getMoment} = require('../../../lib/moment');
const _ = require('lodash');

class SuperBox extends Template {
  static scriptName = 'SuperBox';
  static scriptNameDesc = 'SuperBox';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({
    body: {linkId: 'Ll3Qb2mhCXSEWxruhv8qIw'},
    _t: getMoment().valueOf(),
    appid: 'activities_platform',
  });
  static needOriginProMd = true;
  static needInAppComplete = true;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
    },
  };

  static async beforeRequest(api) {
    const self = this;

    ['doFormBody', 'doGetBody'].forEach(method => {
      replaceObjectMethod(api, method, async data => {
        let [functionId, body, signData, options = {}] = data;
        if (method === 'doGetBody') {
          options = signData || options;
        } else {
          _.merge(options.form, signData);
        }
        const param = self.commonParamFn();
        _.merge(options, method === 'doFormBody' ? {form: param} : {qs: param});
        if (method === 'doGetBody') {
          return [functionId, body, options];
        }
        return [functionId, body, signData, options];
      });
    });
  }

  static isSuccess(data) {
    return _.property('code')(data) === 0;
  }

  static async doMain(api, shareCodes) {
    const self = this;

    await self.beforeRequest(api);

    await handleDoTask();
    // 目前基本是抽空
    await handleLottery();

    async function handleDoTask() {
      const taskList = await api.doGetBody('apTaskList').then(_.property('data'));
      for (const {
        id: taskId,
        taskType,
        taskTitle,
        taskLimitTimes: maxTimes,
        taskDoTimes: times,
        taskFinished
      } of taskList) {
        if (taskType === 'SHARE_INVITE' || /邀请/.test(taskTitle)) {
          const currentEncryptPin = await api.doGetBody('superboxSupBoxHomePage', {taskId}).then(_.property('data.encryptPin'));
          self.updateShareCodeFn(currentEncryptPin);
          const encryptPin = _.last(self.getShareCodeFn());
          if (encryptPin) {
            await api.doGetBody('superboxSupBoxHomePage', {taskId, encryptPin});
          }
          continue;
        }
        if (taskFinished) continue;
        const channel = '4';
        const {taskItemList} = await api.doGetBody('apTaskDetail', {
          taskId,
          taskType,
          channel,
        }).then(_.property('data'));
        await self.loopCall(taskItemList, {
          times,
          maxTimes,
          async firstFn({itemId}) {
            await sleep(2);
            return api.doFormBody('apDoTask', {taskId, taskType, channel, itemId});
          },
        });
      }
    }

    async function handleLottery() {
      await sleep(2);
      return api.doGetBody('superboxOrdinaryLottery').then(data => {
        if (!self.isSuccess(data)) return;
        const {data: {rewardType, discount, lotteryChances}} = data;
        if (discount) {
          api.log(`抽到 ${discount}(${rewardType})`);
        } else {
          api.log('抽空了');
        }
        if (lotteryChances > 0) {
          return handleLottery();
        }
      });
    }
  }
}

singleRun(SuperBox).then();

module.exports = SuperBox;
