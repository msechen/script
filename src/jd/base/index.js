const _ = require('lodash');

const {Request} = require('../api');
const {sleep, getNowMoment} = require('../../lib/common');
const {printLog} = require('../../lib/common');

class Base {
  static _ = _;
  // 当前循环次数, 不可更改
  static currentTimes = 1;
  // 脚本名称
  static scriptName = 'scriptName';
  // 循环次数
  static times = 1;
  // request 参数
  static apiOptions = {
    signData: {},
    options: {},
    formatDataFn: void 0,
  };
  // aoi 参数
  static apiExtends = {
    // 具体请求 functionName
    requestFnName: 'doFormBody',
    // 接口名称
    apiNames: [],
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

  static initApi(cookie) {
    const {signData, options, formatDataFn} = this.apiOptions;
    const {requestFnName, apiNames} = this.apiExtends;
    const api = new Request(cookie, signData, options, formatDataFn);
    if (requestFnName) {
      for (const apiName of apiNames) {
        api[apiName] = api[requestFnName].bind(api, apiName);
      }
    }
    return api;
  }

  static async init(cookie, shareCodes, isCron = false) {
    const api = this.initApi(cookie);
    await this.doMain(api, shareCodes);
    isCron && await this.doCron(api, shareCodes);
  }

  static async start(data) {
    for (this.currentTimes = 1; this.currentTimes <= this.times; this.currentTimes++) {
      for (const {cookie, shareCodes} of _.concat(data)) {
        await this.init(cookie, this.isFirstLoop() ? _.filter(_.concat(shareCodes)) : void 0);
      }
      await sleep(2);
    }
  }

  // 定时任务
  static async cron(data) {
    for (const {cookie, shareCodes} of _.concat(data)) {
      await this.init(cookie, shareCodes, true);
    }
  }
}

module.exports = Base;
