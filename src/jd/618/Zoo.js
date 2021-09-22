const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

let activityNotStart = false;

let allSS = [];
let sIndex = require('./localData.json').sIndex || 0;

// 20210524-20210618
class Zoo extends Template {
  static scriptName = 'Zoo';
  static scriptNameDesc = '动物联盟';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;

  static apiOptions = {
    options: {
      headers: {
        origin: 'https://wbbny.m.jd.com',
        referer: 'https://wbbny.m.jd.com/babelDiy/Zeus/2s7hhSTbhMgxpGoa9JDnbDzJTaBB/index.html',
      },
    },
  };

  // 是否读取本地数据
  static needEncrypt = true;
  // 自定义前缀
  static functionIdPrefix = 'zoo';
  // 初始化ss数据
  static ssInitData = {};
  static skipTaskIds = [2/*邀请好友助力*/, 14/*去开通甄选品牌会员*/];
  // 自动解锁
  static autoUnlock = true;
  // 独立签到接口
  static independentSign = true;

  // TODO repalce api
  static doFormBody(api, functionId, body) {
    return api.doFormBody(`${this.functionIdPrefix}_${functionId}`, body);
  }

  static initAllSS() {
    writeFileJSON([], '../../../charles/form/jd/zoo_collectProduceScore.json', __dirname);
    const {zoo: _z} = require('../../../charles/api');
    allSS = _z.zoo_collectProduceScore.map(o => JSON.parse(JSON.parse(o.body).ss));
  }

  static async getSS(api, isInit) {
    const self = this;
    _.isEmpty(allSS) && self.initAllSS();
    if (api.secretp) {
      return _get();
    }
    const {
      activityInfo: {activityStartTime, activityEndTime, nowTime},
      homeMainInfo: {secretp},
    } = await this.doFormBody(api, 'getHomeData').then(data => _.property('data.result')(data));
    if (nowTime < activityStartTime || nowTime > activityEndTime) {
      return activityNotStart = true;
    }
    api.secretp = secretp;
    if (isInit && self.needEncrypt) {
      api.needLocalRun = true;
      // await self.doFormBody(api, 'collectProduceScore', {ss: JSON.stringify({secretp})}).then(data => {
      //   if (!self.isSuccess(data)) {
      //     api.needLocalRun = true;
      //   }
      // });
    }
    return _get();

    function _get() {
      const result = {};
      if (api.needLocalRun) {
        if (!allSS[sIndex]) throw '临时token已用完, 请重新加载';
        api._times = api._times || 0;
        api._times++;
        if (api._times === 2) {
          ++sIndex;
          api._times = 0;
        }
        _.assign(result, allSS[sIndex]);
      }
      return JSON.stringify(_.assign(result, self.ssInitData, _.pick(api, 'secretp')));
    }
  }

  static async logInfo(api) {
    const self = this;
    await self.doFormBody(api, 'getHomeData').then(data => {
      api.log(`当前获取到的瓜分票数: ${_.property('data.result.homeMainInfo.raiseInfo.redNum')(data)}`);
    });
  }

  static async getRaiseBody(api) {}

  static async doMain(api, shareCodes) {
    const self = this;

    api.formatData = function (data) {
      const {bizCode, bizMsg} = data.data;
      if (bizCode === -1002 || bizMsg.match('火爆')) {
        const msg = `bizCode: ${bizCode}, bizMsg: ${bizMsg}`;
        this.log(msg);
        throw new Error(msg);
      }
      return data;
    };

    self.initShareCodeTaskList(shareCodes || []);

    await self.getSS(api, true);
    if (activityNotStart) return;

    if (self.isFirstLoop() && self.independentSign) {
      const todayStatus = await self.doFormBody(api, 'getSignHomeData').then(data => _.property('data.result.todayStatus')(data));
      (todayStatus === 0) && await self.doFormBody(api, 'sign');
    }

    await handleDoTask();
    // 小程序
    await handleDoTask({appSign: 2}, 1);
    if (self.isLastLoop()) {
      if (api.needLocalRun) {
        api.log(`当前的sIndex: ${sIndex}, allSS总长度为: ${allSS.length}`);
        writeFileJSON({sIndex}, './localData.json', __dirname);
      }
      self.autoUnlock && await handleRaise();

      await self.logInfo(api);
    }

    async function handleDoTask(body, times = 0) {
      if (times >= 2) return;
      const {
        inviteId,
        taskVos,
      } = await self.doFormBody(api, 'getTaskDetail', body).then(data => _.property('data.result')(data) || {});

      // 暂停互助, 因为有些账号会火爆
      if (times === 0) {
        self.updateShareCodeFn(inviteId);
        for (const inviteId of self.getShareCodeFn()) {
          await self.doFormBody(api, 'collectScore', {inviteId, ss: await self.getSS(api)}).then(data => {
            if (!self.isSuccess(data)) return api.log(_.property('data.bizMsg')(data));
            const {guestNickName} = _.property('data.result')(data);
            api.log(`${guestNickName} 助力其他人成功`);
          });
        }
      }

      for (const task of taskVos) {
        let {taskId, status, times, maxTimes, waitDuration} = task;
        if (self.skipTaskIds.includes(taskId) || status === 2) continue;
        let list = getList(task);
        if (_.isEmpty(list)) {
          const feedTask = await self.doFormBody(api, 'getFeedDetail', {taskId}).then(data => _.property('data.result.addProductVos[0]')(data));
          list = getList(feedTask);
        }
        list = list.filter(o => o['status'] === 1);
        for (const {taskToken} of list) {
          if (times === maxTimes) break;
          await collectScore({taskId, taskToken}, waitDuration);
          times++;
        }
      }

      return handleDoTask(body, ++times);

      function getList(object) {
        object = object || {};
        let taskList = [];
        for (const key in object) {
          if (key.match(/Vo(s)?$/) && key !== 'scoreRuleVos') {
            taskList = [].concat(object[key]);
            break;
          }
        }
        return taskList;
      }
    }

    async function collectScore(data, waitDuration = 0) {
      const actionType = waitDuration ? '1' : '0';
      const body = {...data, actionType, ss: await self.getSS(api)};
      await collect();
      if (!waitDuration) return;
      await sleep(waitDuration);
      body.actionType = '0';
      body.ss = await self.getSS(api);
      await collect();

      function collect() {
        return self.doFormBody(api, 'collectScore', body);
      }
    }

    async function handleRaise() {
      const body = await self.getRaiseBody(api);
      if (body === false) return;
      await self.doFormBody(api, 'raise', body).then(async data => {
        self.isSuccess(data) && await handleRaise();
      });
    }
  }

  static async doCron(api) {
    const self = this;

    const ss = await self.getSS(api, true);
    if (activityNotStart) return;
    await self.doFormBody(api, 'collectProduceScore', {ss}).then(data => {
      api.log(`定时获取到的金币为 ${_.property('data.result.produceScore')(data)}`);
    });
  }
}

singleRun(Zoo, 'start', async function (method, getCookieData) {
  if (method === 'start') return Zoo.start(getCookieData(Zoo.scriptName));
}).then();

module.exports = Zoo;
