const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {replaceObjectMethod} = require('../../lib/common');

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
  static doneShareTask = true;

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

  static async logInfo(api) {
    await api.doFormBody('getHomeData').then(data => {
      api.log(`当前获取到的瓜分票数: ${_.property('data.result.homeMainInfo.raiseInfo.redNum')(data)}`);
    });
  }

  // 获取解锁body
  static async getRaiseBody(api) {}

  // 签到
  static async handleDoSign(api) {
    if (!self.isFirstLoop()) return;
    const todayStatus = await api.doFormBody('getSignHomeData').then(data => _.property('data.result.todayStatus')(data));
    (todayStatus === 0) && await api.doFormBody('sign');
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
    } = await api.doFormBody('getHomeData').then(data => _.property('data.result')(data));
    if (nowTime < activityStartTime || nowTime > activityEndTime) {
      return activityNotStart = true;
    }
    api.secretp = secretp;
    if (isInit && self.needEncrypt) {
      api.needLocalRun = true;
      // await api.doFormBody( 'collectProduceScore', {ss: JSON.stringify({secretp})}).then(data => {
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

  static async beforeRequest(api) {
    const self = this;
    replaceObjectMethod(api, 'doFormBody', ([functionId, body, signData, options]) => {
      const id = self.patchFunctionId(functionId);
      return [id, body, signData, options];
    });

    api.formatData = function (data) {
      const {bizCode, bizMsg = ''} = data.data || {};
      if (bizCode === -1002 || /火爆/.test(bizMsg)) {
        const msg = `bizCode: ${bizCode}, bizMsg: ${bizMsg}`;
        this.log(msg);
        throw new Error(msg);
      }
      return data;
    };
    api.collectScore = async (data, waitDuration = 0) => {
      const actionType = waitDuration ? '1' : '0';
      const body = {...data, actionType, ss: await self.getSS(api)};
      const result = await collect();
      if (!waitDuration) return result;
      await sleep(waitDuration);
      body.actionType = '0';
      body.ss = await self.getSS(api);
      return collect();

      function collect() {
        return api.doFormBody('collectScore', body);
      }
    };
  }

  static patchFunctionId(functionId) {
    return _.filter([this.functionIdPrefix, functionId]).join('_');
  }

  static async doMain(api, shareCodes) {
    const self = this;

    await self.beforeRequest(api);

    self.initShareCodeTaskList(shareCodes || []);

    await self.getSS(api, true);
    if (activityNotStart) return;

    await self.handleDoSign(api);
    await handleDoShare();

    await handleDoTask();
    // 小程序
    await handleDoTask({appSign: 2}, 1);

    // 解锁和输出日志
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
        taskVos,
      } = await api.doFormBody('getTaskDetail', body).then(_.property('data.result'));

      for (const task of taskVos) {
        let {taskId, status, times, maxTimes, waitDuration} = task;
        if (self.skipTaskIds.includes(taskId) || status === 2) continue;
        let list = getList(task);
        if (_.isEmpty(list)) {
          const feedTask = await api.doFormBody('getFeedDetail', {taskId}).then(data => _.property('data.result.addProductVos[0]')(data));
          list = getList(feedTask);
        }
        list = list.filter(o => o['status'] === 1);
        for (const {taskToken} of list) {
          if (times === maxTimes) break;
          await api.collectScore({taskId, taskToken}, waitDuration);
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

    async function handleDoShare() {
      if (self.doneShareTask) return;
      const inviteId = await api.doFormBody('getTaskDetail').then(_.property('data.result.inviteId'));
      self.updateShareCodeFn(inviteId);
      for (const inviteId of self.getShareCodeFn()) {
        await api.collectScore({inviteId}).then(data => {
          if (!self.isSuccess(data)) return api.log(_.property('data.bizMsg')(data));
          const {guestNickName} = _.property('data.result')(data);
          api.log(`${guestNickName} 助力其他人成功`);
        });
      }
    }

    async function handleRaise() {
      const body = await self.getRaiseBody(api);
      if (body === false) return;
      await api.doFormBody('raise', body).then(async data => {
        self.isSuccess(data) && await handleRaise();
      });
    }
  }

  static async doCron(api) {
    const self = this;

    await self.beforeRequest(api);
    const ss = await self.getSS(api, true);
    if (activityNotStart) return;
    await api.doFormBody('collectProduceScore', {ss}).then(data => {
      api.log(`定时获取到的金币为 ${_.property('data.result.produceScore')(data)}`);
    });
  }
}

singleRun(Zoo, 'start', async function (method, getCookieData) {
  if (method === 'start') return Zoo.start(getCookieData(Zoo.scriptName));
}).then();

module.exports = Zoo;
