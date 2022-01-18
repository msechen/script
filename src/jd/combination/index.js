const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getSign} = require('./encrypt');
const {replaceObjectMethod} = require('../../lib/common');

const indexUrl = 'https://prodev.m.jd.com/mall/active/2VyRHGE7jM1igBJcrjoB6ak1JJWV/index.html';
const activityId = 17;

class Combination extends Template {
  static scriptName = 'Combination';
  static scriptNameDesc = '电脑配件';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static needInAppComplete = true;
  static concurrent = true;

  static apiOptions = {
    options: {
      uri: 'https://combination.m.jd.com/tzh/combination',
      qs: {
        activityId,
      },
      headers: {
        origin: 'https://pro.m.jd.com',
        referrer: 'https://pro.m.jd.com',
      },
    },
  };

  static isSuccess(data) {
    return _.property('code')(data) === 200;
  };

  static async doMain(api, shareCodes) {
    const self = this;

    replaceApi();

    for (let i = 0; i < 2; i++) {
      await handleDoTask();
    }

    function replaceApi() {
      replaceObjectMethod(api, 'doPath', ([functionId, form, options]) => {
        const {sign, timestamp} = getSign(`/tzh/combination/${functionId}`, {activityId, ...form});
        options = _.merge({}, options, {
          headers: {
            sign, timestamp,
          },
          form: {
            t: timestamp,
          },
        });
        return [functionId, form, options];
      });
    }

    async function handleDoTask() {
      const {list: allTask, extraTaskStatus} = await api.doPath('indexInfo').then(_.property('data')) || {};

      for (const {taskId, taskList} of allTask) {
        for (let {id, status} of taskList) {
          status = +status;
          if (status === 4) continue;
          const browseTask = status === 2;
          const onlyGetPrize = status === 3;
          !onlyGetPrize && await api.doPath('doTask', {id, taskId}).then(logBeanNumber);
          if (onlyGetPrize || browseTask) {
            browseTask && await sleep(6);
            await api.doPath('getPrize', {id, taskId}).then(logBeanNumber);
          }
          await sleep(2);
        }
      }

      if (extraTaskStatus === '3') {
        await api.doPath('extraTaskPrize').then(logBeanNumber);
      }
    }

    function logBeanNumber(data) {
      if (!self.isSuccess(data)) {
        api.log(data.msg);
        throw new Error('豆已抢光, 停止脚本');
      }
      const number = _.property('data.jdNum')(data) || 0;
      number && api.log(`获得豆豆: ${number}`);
    }
  }
}

singleRun(Combination).then();

module.exports = Combination;
