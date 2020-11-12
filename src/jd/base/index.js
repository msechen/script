const _ = require('lodash');

const {Request} = require('../api');
const {sleep, getNowMoment} = require('../../lib/common');
const {printLog} = require('../../lib/common');

class Base {
  static _ = _;
  // 当前循环的cookie下标
  static currentCookieTimes = 0;
  // 当前循环次数, 不可更改
  static currentTimes = 1;
  // 脚本名称
  static scriptName = 'scriptName';
  // 循环次数
  static times = 1;
  // request 参数
  static isWh5 = false; // 添加signData
  static needInApp = true; // 添加 userAgent
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
    printLog(this.scriptName, void 0, output);
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
    let {
      firstFn = _.noop, afterWaitFn = _.noop,
      isFinishFn = o => _.property('status')(o) === 2,
      getListFn = () => list,
      maxTimes = 1,
      times = 0,
      waitDuration = 0,
    } = option || {};
    list = await getListFn();
    list = [].concat(list).filter(item => !isFinishFn(item));
    for (let i = 0; i < maxTimes - times; i++) {
      const item = list[i] || {};
      const data = await firstFn(item);
      if (waitDuration === 0) continue;
      await sleep(waitDuration + 2);
      await afterWaitFn(data);
    }
  }

  // 请求 apiNamesFn
  static async doApi(api, name, data) {
    const target = api[name];
    if (!target) return Promise.resolve();
    const {paramFn = _.noop, successFn = _.noop, errorFn = _.noop, repeat = false} = this.apiNamesFn()[name];

    const _do = () => target(paramFn(data)).then(successFn);

    const repeatFn = () => _do().then(needRepeat => {
      if (needRepeat === false) return;
      return repeatFn();
    });

    if (repeat) {
      return repeatFn();
    }

    return _do().catch(errorFn);
  }

  static initApi(cookie) {
    const {signData = {}, options = {}, formatDataFn} = this.apiOptions;
    const {requestFnName, apiNames = []} = this.apiExtends;

    this.isWh5 && _.assign(signData, {client: 'wh5', clientVersion: '1.0.0'});
    this.needInApp && _.merge(options, {headers: {'User-Agent': 'jdapp'}});

    const api = new Request(cookie, signData, options, formatDataFn);
    if (requestFnName) {
      let apiObject = _.isArray(apiNames) ? _.zipObject(apiNames, apiNames) : apiNames;
      _.assign(apiObject, _.zipObject(_.keys(this.apiNamesFn()), _.map(_.values(this.apiNamesFn()), 'name')));
      for (const [key, functionId] of Object.entries(apiObject)) {
        api[key] = api[requestFnName].bind(api, functionId);
      }
    }
    return api;
  }

  static async init(cookie, shareCodes, isCron = false) {
    const api = this.initApi(cookie);
    if (isCron) {
      await this.doCron(api, shareCodes);
    } else {
      await this.doMain(api, shareCodes);
    }
  }

  static async start(data) {
    for (this.currentTimes = 1; this.currentTimes <= this.times; this.currentTimes++) {
      this.currentCookieTimes = 0;
      for (const {cookie, shareCodes} of _.concat(data)) {
        await this.init(cookie, this.isFirstLoop() ? _.filter(_.concat(shareCodes)) : void 0);
        this.currentCookieTimes++;
      }
      await sleep(2);
    }
  }

  // 定时任务
  static async cron(data) {
    for (const {cookie, shareCodes} of _.concat(data)) {
      await this.init(cookie, shareCodes, true);
      this.currentCookieTimes++;
    }
    await sleep(2);
  }
}

module.exports = Base;
