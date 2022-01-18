const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');

const indexUrl = 'https://prodev.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html';
const linkId = 'nUW_swWdzGTw9TREVAMBCw';

class StartShop extends Template {
  static scriptName = 'StartShop';
  static scriptNameDesc = '星店长';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInAppComplete = true;
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
      headers: {
        origin: new URL(indexUrl).origin,
        referrer: indexUrl,
      },
      form: {
        body: {linkId},
        appid: 'activities_platform',
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;

    replaceObjectMethod(api, 'doFormBody', ([functionId, body, signData, options]) => {
      options = _.merge(options || {}, {
        form: {
          _t: getMoment().valueOf(),
        },
      });
      return [functionId, body, signData, options];
    });

    await handleDoTaskList();

    async function handleDoTaskList() {
      const {data: taskList} = await api.doFormBody('apTaskList');

      const channel = 4;
      for (const {
        id: taskId,
        taskType,
        taskFinished
      } of taskList) {
        if (taskType === 'SHARE_INVITE' || taskFinished) continue;
        if (taskType === 'SIGN') {
          await api.doFormBody('apDoTask', {taskType, taskId});
        } else {
          let {
            data: {
              status: {finished, userFinishedTimes, finishNeed},
              taskItemList,
            },
          } = await api.doFormBody('apTaskDetail', {taskType, taskId, channel});
          if (finished) continue;
          for (const {itemId} of taskItemList) {
            if (userFinishedTimes === finishNeed) continue;
            await api.doFormBody('apDoTask', {taskType, taskId, channel, itemId});
            userFinishedTimes++;
            await sleep(3);
          }
        }
      }
    }
  }
}

singleRun(StartShop).then();

module.exports = StartShop;
