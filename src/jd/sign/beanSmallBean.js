const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

const {smallBean} = require('../../../charles/api');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/rn/42yjy8na6pFsq1cx9MJQ5aTgu3kX/index.html';

class BeanSmallBean extends Template {
  static scriptName = 'BeanSmallBean';
  static scriptNameDesc = '豆小豆';
  static times = 1;

  static apiOptions = {
    options: {
      qs: {
        appid: 'ld',
      },
    },
  };

  static async doMain(api) {
    const self = this;

    const getTaskList = () => api.doForm('beanTaskList').then(data => _.property('data.taskInfos')(data) || []);
    const getTaskById = taskId => getTaskList().then(taskList => taskList.find(o => o['taskId'] === taskId));

    await findBeanScene();

    const taskList = await getTaskList();
    for (const {taskId, status, subTitleName, maxTimes, times, subTaskVOS} of taskList) {
      if (maxTimes === times || status === 2) continue;
      const waitDuration = _.last(subTitleName.match(/(\d+)s/) || [0]);
      for (let i = times; i < maxTimes; i++) {
        const taskInfo = _.property('subTaskVOS')(await getTaskById(taskId));
        if (!taskInfo) continue;
        const [{taskToken}] = taskInfo;
        await doTask(taskToken, +waitDuration);
      }
    }

    await findBeanScene();

    async function doTask(taskToken, waitDuration) {
      const _do = (actionType = 0) => api.doFormBody('beanDoTask', {actionType, taskToken});
      await _do(waitDuration && 1);
      if (!waitDuration) return;
      await sleep(waitDuration);
      await _do();
    }

    async function findBeanScene() {
      return api.doFormBody('findBeanScene', {
        'source': null,
        'orderId': null,
        'jklGroupCode': null,
        'jklShareCode': null,
        'jklActivityId': null,
        'rnVersion': '3.9',
        'rnClient': '1',
      }).then(data => {
        const {curScene} = data.data || {};
        if (!curScene) return;
        const {growth, level, sceneLevelConfig: {growthEnd, beanNum}} = curScene;
        const msg = [
          `当前成长值: ${growth}`,
          `等级: ${level}`,
          `下一个目标为: ${growthEnd}, 将得到豆豆: ${beanNum}`,
        ];
        api.log(msg.join(', '));
      });
    }
  }
}

module.exports = BeanSmallBean;
