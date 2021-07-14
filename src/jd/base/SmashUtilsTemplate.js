const Template = require('./template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod, getValueByFn} = require('../../lib/common');
const _ = require('lodash');
const FakerSmashUtils = require('../../lib/FakerSmashUtils');

class SmashUtilsTemplate extends Template {
  static scriptName = 'SmashUtilsTemplate';
  static shareCodeTaskList = [];
  static maxTaskDoneTimes = this.firstTimeInTheDay() ? 2 : 1;
  static commonParamFn = () => ({});
  static needInAppComplete = true;
  static isWh5 = true;
  static skipTaskIds = [];
  static doneShareTask = !this.firstTimeInTheDay();

  // 需要更改的地方
  static indexUrl = '';
  static functionIdPrefix = '';
  static smashUtilData = {
    // scriptUrl: '',
    // smashInitData: {},
  };
  static needEncryptIds = [];

  static apiCustomOption() {};

  static apiNamesOption() {}

  /**
   * @description 助力逻辑
   * @param api
   */
  static async handleDoShare(api) {}

  static apiOptions() {
    const self = this;
    const apiCustomOption = getValueByFn(self.apiCustomOption, {context: self}) || {};
    const indexUrl = self.indexUrl;

    return _.merge({
      signData: {
        uuid: self.getUUid(),
      },
      options: {
        headers: {
          origin: new URL(indexUrl).origin,
          referer: indexUrl,
        },
      },
    }, apiCustomOption);
  }

  static patchFunctionId(functionId) {
    return _.filter([this.functionIdPrefix, functionId]).join('_');
  }

  static async beforeRequest(api) {
    const self = this;
    const needEncryptIds = self.needEncryptIds;
    if (!_.isEmpty(needEncryptIds)) {
      new FakerSmashUtils(api, self.indexUrl, {
        userAgent: self.appCompleteUserAgent,
        ...self.smashUtilData,
      }).patchApi(needEncryptIds);
    }

    replaceObjectMethod(api, 'doFormBody', ([functionId, ...others]) => [self.patchFunctionId(functionId), ...others]);
  }

  static apiNamesFn() {
    const self = this;
    const apiNamesOption = getValueByFn(self.apiNamesOption, {context: self}) || {};

    const option = {
      // 获取任务列表
      getTaskList: {
        name: 'getTaskDetail',
        paramFn: () => ({appSign: '1'}),
        async successFn(data, api) {
          // writeFileJSON(data, `${self.patchFunctionId('getTaskDetail')}.json`, __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const {taskVos: taskList = [], inviteId} = _.get(data, 'data.result');
          await handleDoShare(inviteId);

          for (let task of taskList) {
            let {
              status,
              taskId,
              maxTimes,
              times,
              waitDuration,
            } = task;
            if (status === 2 || self.skipTaskIds.includes(taskId)) continue;

            let list = self.getListMatchVo(task);
            if (_.isEmpty(list)) {
              // 获取子任务
              const feedTask = await api.doFormBody('getFeedDetail', {taskId}).then(data => _.property('data.result.addProductVos[0]')(data));
              list = self.getListMatchVo(feedTask);
            }
            list = _.map(list, ({taskToken}) => ({taskId, taskToken, actionType: waitDuration ? 1 : 0}));

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;

          async function handleDoShare(currentShareCode) {
            api.doneShareTask = api.doneShareTask || self.doneShareTask;
            if (api.doneShareTask) return;

            self.updateShareCodeFn(currentShareCode);
            await self.handleDoShare(api);
            api.doneShareTask = true;
          }
        },
      },
      doTask: {
        name: 'doTaskDetail',
        paramFn: o => o,
      },
      doWaitTask: {
        name: 'doTaskDetail',
        paramFn: o => _.assign(o, {actionType: 0}),
      },
    };

    patchOption();

    function patchOption() {
      _.forEach(apiNamesOption, (value, key) => {
        if (_.isString(value)) {
          apiNamesOption[key] = {name: value};
        }
      });
      _.merge(option, apiNamesOption);
    }

    return option;
  }
}

module.exports = SmashUtilsTemplate;
