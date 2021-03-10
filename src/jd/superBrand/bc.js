const Base = require('../base');

const {sleep, writeFileJSON} = require('../../lib/common');

let shareCodeCaches = [];

class Bc extends Base {
  static scriptName = 'bc';
  static times = 2;
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
        origin: 'https://h5.m.jd.com',
      },
    },
    formatDataFn: data => data,
    signData: {client: 'wh5', clientVersion: '1.0.0', appid: 'publicUseApi'},
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: [
      'bc_getHome', /* 获取任务 */
      'bc_taskList', /* 获取任务 */
      'bc_doTask', /* 做任务 */
      'bc_initBall', /* 生成能量ball */
      'bc_fragmentCharge', /* 寻找碎片 */
    ],
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    // 坐标, 需要手动抓包获取
    const position = {lat: process.env.JD_BC_POSITION_LAT, lng: process.env.JD_BC_POSITION_LNG};

    shareCodes && (shareCodeCaches = shareCodeCaches.concat(shareCodes));

    const isSuccess = data => _.property('data.bizCode')(data) === 0;

    let currentShareCode;
    await api.bc_getHome(position).then(async data => {
      // writeFileJSON(data, 'bc_getHome.json', __dirname);

      if (!isSuccess(data)) return;

      const {homeAdvertVO: allTask, ePin, todayIsSigned} = data.data.result;

      currentShareCode = ePin;
      self.isFirstLoop() && shareCodeCaches.push(currentShareCode);

      const taskListResult = await api.bc_taskList(position).then(data => data.data.result.taskList) || [];

      if (todayIsSigned !== 1) {
        taskListResult.unshift({taskType: 0});
      }

      for (const {taskType, timesLimit, doTimes, subTaskList, isCompleted} of taskListResult) {
        if (isCompleted === 1 || taskType === 8/* 助力 */) continue;

        let taskList = [];
        ['plusAdvertList', 't1AdvertList'].forEach((key, index) => {
          if (taskType === index + 1) {
            taskList = allTask[key];
          }
        });

        if (taskType === 4) {
          taskList = taskList.concat(allTask['nearbyShopList'].map((o, i) => {
            o.storeType = i < 4 ? 2 : 1;
            return o;
          }));
        }

        if (taskType === 7) {
          for (const subTask of subTaskList) {
            const {channel} = subTask;
            const ball = await api.bc_initBall({channel}).then(data => data.data.result.ball);
            for (let i = 0; i < ball.length; i++) {
              taskList.push({channel, ballno: ball[i]});
            }
          }
        }

        await doTask(taskList, {taskType, timesLimit, doTimes});
      }
    });

    async function doTask(taskList, {taskType, timesLimit, doTimes, afterFirstFn = self._.noop}) {
      await self.loopCall(taskList, {
        firstFn: option => {
          if (!self._.isPlainObject(option)) {
            option = {invitePin: option};
          }
          const {comments0, storeid, storeType, channel, ballno, invitePin} = option;
          let data = {taskType};
          if (comments0) {
            self._.assign(data, {shopId: comments0 || storeid});
          }
          if (storeid) {
            self._.assign(data, {storeId: storeid, storeType, lat: position.lat});
          }
          if (typeof channel !== 'undefined') {
            self._.assign(data, {channel, babelChannel: 'ttt1', ballno});
          }
          if (invitePin) {
            self._.assign(data, {invitePin});
          }
          return api.bc_doTask(data).then(afterFirstFn);
        },
        isFinishFn: o => o.isCompleted === 1,
        maxTimes: timesLimit || taskList.length,
        times: doTimes,
      });
    }

    async function fragmentCharge() {
      await api.bc_fragmentCharge().then(async data => {
        isSuccess(data) && await fragmentCharge();
      });
    }

    if (self.isLastLoop()) {
      // 助力只能一次, 无法循环调用, 所以先注释掉
      // await doTask(shareCodeCaches.filter(code => code !== currentShareCode), {taskType: 8, afterFirstFn: data => self.log(data.data.bizMsg)});

      await fragmentCharge();

      await api.bc_getHome().then(data => {
        self.log(`获取到的红包数为 ${data.data.result.redpack}`);
      });
    }
  }
}

module.exports = Bc;
