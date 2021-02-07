const _ = require('lodash');

const Api = require('../api');
const {sleep, getNowMoment, parallelRun} = require('../../lib/common');
const {printLog} = require('../../lib/common');

class Base {
  static _ = _;
  // 当前循环的cookie下标
  static currentCookieTimes = 0;
  // 当前循环次数, 不可更改
  static currentTimes = 1;
  // 脚本名称(用于获取相关属性)
  static scriptName = 'scriptName';
  // 脚本名称(用于日志输出)
  static scriptNameDesc = '';
  // 循环次数
  static times = 1;
  // request 参数
  static isWh5 = false; // 添加signData
  static needInApp = true; // 添加 userAgent
  static needInJxApp = false; // 添加 userAgent
  static needOriginH5 = false; // 添加 headers.origin
  static needInPhone = false; // 添加 userAgent
  static apiOptions = {
    signData: {},
    options: {},
    formatDataFn: void 0,
  };
  // api 参数
  static apiExtends = {
    // 具体请求 functionName
    requestFnName: 'doFormBody',
    // 接口名称
    apiNames: [],
  };
  // 是否并发请求
  static concurrent = false;
  static concurrentOnceDelay = 2;

  // apiNames的补充
  static apiNamesFn() {
    return {
      _test: {
        name: 'doTest',
        paramFn: _.noop,
        successFn: _.noop,
        errorFn: _.noop,
      },
    };
  }

  // 判断请求是否成功
  static isSuccess(data) {
    return _.property('data.bizCode')(data) === 0;
  };

  static async doMain(api, shareCodes) {
  }

  static async doCron(api, shareCodes) {
  }

  // helpers
  static log(output) {
    // 应该输出 Cookie Name TODO 格式化
    output = `[${this.currentCookieTimes}] ${output}`;
    printLog(this.scriptNameDesc || this.scriptName, void 0, output);
  }

  // 第一次循环
  static isFirstLoop() {
    return this.currentTimes === 1;
  }

  // 最后一次循环
  static isLastLoop() {
    return this.currentTimes === this.times;
  }

  static getNowHour() {
    return getNowMoment().hours();
  }

  static getCurrentEnv(key) {
    return process.env[`${key}${this.currentCookieTimes ? ('_' + this.currentCookieTimes) : ''}`];
  }

  static async loopCall(list = [], option) {
    let isDone = false;
    let {
      firstFn = _.noop, afterWaitFn = _.noop,
      isFinishFn = o => _.property('status')(o) === 2,
      getListFn = () => list,
      maxTimes = 1,
      times = 0,
      waitDuration = 0,
      needRealSuccessful = false, // 需要判断是否成功
    } = option || {};
    list = _.concat(await getListFn());
    list = list.filter(item => {
      const finished = isFinishFn(item);
      finished && maxTimes--;
      return !finished;
    });
    const loopTimes = maxTimes - times;
    let remainTimes = loopTimes;
    await doLoop(loopTimes);

    async function doLoop(loopTimes, index = 0) {
      for (; index < loopTimes; index++) {
        isDone = true;
        const item = list[index] || {};
        const data = await firstFn(item);
        if (!_.property('isSuccess')(data)) remainTimes++;
        if (waitDuration === 0) continue;
        await sleep(waitDuration + 2);
        await afterWaitFn(data, item);
      }
      // TODO 该逻辑是废弃的
      if (needRealSuccessful && (remainTimes > loopTimes)) {
        await doLoop(remainTimes, loopTimes);
      }
    }


    return isDone;
  }

  // 请求 apiNamesFn
  static async doApi(api, name, data, returnData) {
    const target = api[name];
    if (!target) return Promise.resolve();
    const {paramFn = _.noop, successFn = _.noop, errorFn = _.noop, repeat = false} = this.apiNamesFn()[name];

    const _do = () => target(...[].concat(paramFn(data, returnData))).then(async (data) => {
      return successFn(data, api);
    });

    const repeatFn = () => _do().then(needRepeat => {
      // 显示返回 false 才会停止
      if (needRepeat === false) return;
      return repeatFn();
    });

    if (repeat) {
      return repeatFn();
    }

    return _do().catch(errorFn);
  }

  static initApi(cookie) {
    const apiOptions = _.isFunction(this.apiOptions) ? this.apiOptions() : this.apiOptions;
    const {signData = {}, options = {}, formatDataFn = data => data} = apiOptions;
    const {requestFnName, apiNames = []} = this.apiExtends;

    this.isWh5 && _.assign(signData, {client: 'wh5', clientVersion: '1.0.0'});
    if (this.needInJxApp) {
      this.needInApp = false;
      _.merge(options, {headers: {'User-Agent': 'jdpingou'}});
    }
    this.needInApp && _.merge(options, {headers: {'User-Agent': 'jdapp'}});
    this.needInPhone && _.merge(options, {headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0(0x18000026) NetType/WIFI Language/zh_CN miniProgram'}});
    this.needOriginH5 && _.merge(options, {headers: {origin: 'https://h5.m.jd.com'}});

    const api = new Api(cookie, signData, options, formatDataFn);
    if (requestFnName) {
      let apiObject = _.isArray(apiNames) ? _.zipObject(apiNames, apiNames) : apiNames;
      _.assign(apiObject, _.zipObject(_.keys(this.apiNamesFn()), _.map(_.values(this.apiNamesFn()), 'name')));
      for (const [key, functionId] of Object.entries(apiObject)) {
        api[key] = api[requestFnName].bind(api, functionId);
      }
    }
    return api;
  }

  static async beforeInit() {
  }

  static async start(data) {
    for (this.currentTimes = 1; this.currentTimes <= this.times; this.currentTimes++) {
      this.currentCookieTimes = 0;
      await loopInit.call(this, data, false);
    }
  }

  // 定时任务
  static async cron(data) {
    await loopInit.call(this, data, true);
  }
}

async function loopInit(data, isCron) {
  const self = this;
  let currentCookieTimes = 0;
  data = _.concat(data);

  if (self.concurrent) {
    return parallelRun({
      list: data,
      runFn: ({cookie, shareCodes}) => _do(cookie, shareCodes),
      onceNumber: 1,
      onceDelaySecond: self.concurrentOnceDelay,
    });
  }

  for (const {cookie, shareCodes} of data) {
    await _do(cookie, shareCodes);
  }

  async function _do(cookie, shareCodes) {
    await self.beforeInit();
    await init(cookie, self.isFirstLoop() ? _.filter(_.concat(shareCodes)) : void 0, isCron);
    self.currentCookieTimes++;
  }

  async function init(cookie, shareCodes, isCron = false) {
    const api = self.initApi(cookie);
    // TODO 并发的情况下 api 的赋值不可用
    self.api = api;
    api.currentCookieTimes = currentCookieTimes++;
    if (isCron) {
      await self.doCron(api, shareCodes);
    } else {
      await self.doMain(api, shareCodes);
    }
  }
}

module.exports = Base;
