const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class EarnBean extends Template {
  static scriptName = 'EarnBean';
  static scriptNameDesc = 'ifanli-赚京豆';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static needInPhone = true;
  static concurrent = true;
  static concurrentOnceDelay = 2;

  static apiOptions = {
    options: {
      uri: 'https://ifanli.m.jd.com/rebateapi/task',
      headers: {
        referrer: 'https://ifanli.m.jd.com/rebate/earnBean.html',
      },
    },
  };

  static isSuccess(data) {
    return data.code === 1;
  }

  static async doMain(api, shareCodes) {
    const self = this;

    await handleDoTask();

    async function handleDoTask() {
      let needLoop = false;
      const getContent = _.property('content');

      const taskList = await api.doGetPath('getTaskList').then(getContent) || [];

      for (const {taskId, taskType, watchTime: waitDuration, statusName} of taskList) {
        if (!['去赚钱'].includes(statusName)) continue;

        const {uid, tt} = await api.doBodyPath('saveTaskRecord', {taskId, taskType}).then(getContent) || {};
        if (!uid) continue;
        needLoop = true;
        await sleep(waitDuration);
        await api.doBodyPath('saveTaskRecord', {taskId, taskType, uid, tt}).then(data => {
          api.log(_.get(data, 'content.msg'));
        });
        // 暂时无用, 跟原来保持一致
        await api.doGetPath('getTaskFinishCount');
      }

      needLoop && await handleDoTask();
    }
  }
}

singleRun(EarnBean).then();

module.exports = EarnBean;
