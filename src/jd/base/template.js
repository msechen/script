const Base = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

const shareCodeCaches = [];

class Template extends Base {
  static scriptName = 'Template';
  static times = 2;
  static repeatDoTask = false;
  static shareCodeTaskList = [];

  // 获取 shareCode
  static getShareCodeFn() {
    const self = this;
    return self.shareCodeTaskList.filter((o, index) => {
      if (self.isFirstLoop()) {
        return index < self.currentCookieTimes;
      }
      if (self.isLastLoop()) {
        return index > self.currentCookieTimes;
      }
    });
  }

  static apiOptions = {
    formatDataFn: data => data,
  };

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getTaskList',
        paramFn: _.noop,
        successFn: _.noop,
      },
      // 做任务
      doTask: {
        name: 'doTask',
        paramFn: _.noop,
        successFn: _.noop,
      },
      doWaitTask: {
        name: 'doWaitTask',
      },
      // 任务之后, 一般来说是兑换之类的
      doRedeem: {
        name: 'doRedeem',
        paramFn: _.noop,
        successFn: _.noop,
        repeat: true,
      },
    };
  }

  static initShareCodeTaskList(shareCodes) {
    if (shareCodes) {
      // do something to shareCodeTaskList
    }
  }

  // doMain一般不会被重载
  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    // 这个会不断被赋值, TODO 在 base 里赋值可能会好点
    self._api = api;

    self.initShareCodeTaskList(shareCodes);

    await self.doApi(api, 'beforeGetTaskList');

    await _doTask();

    async function _doTask() {
      const taskList = await self.doApi(api, 'getTaskList') || [];

      let taskDone = 0;

      for (const {list, option = {}} of taskList) {
        option.firstFn = option.firstFn || (item => self.doApi(api, 'doTask', item));
        option.afterWaitFn = option.afterWaitFn || ((data, item) => {
          return self.doApi(api, 'doWaitTask', item);
        });
        const isDone = await self.loopCall(list, option);
        isDone && taskDone++;
      }

      if (self.repeatDoTask && taskDone) {
        await sleep(2);
        await _doTask();
      }
    }

    if (self.isLastLoop()) {
      await self.doApi(api, 'afterGetTaskList');
      await self.doApi(api, 'doRedeem');
    }
  }
}

module.exports = Template;
