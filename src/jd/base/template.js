const Base = require('./index');

const {sleep, writeFileJSON, replaceObjectMethod} = require('../../lib/common');
const EncryptH5st = require('../../lib/EncryptH5st');
const {getMoment} = require('../../lib/moment');

class Template extends Base {
  static scriptName = 'Template';
  static dirname = __dirname;
  static times = 2;
  static shareCodeTaskList = [];
  // 更新助力码时使用, 一般用于区分Object
  static shareCodeUniqIteratee;
  // 默认助力码
  static defaultShareCodes = [];
  static maxTaskDoneTimes = 1;
  static doneShareTask = !this.firstTimeInTheDay();

  static updateShareCodeFn(shareCode, isCurrent = true) {
    const self = this;
    const shareCodeUniqIteratee = self.shareCodeUniqIteratee;
    let shareCodeTaskList = self.shareCodeTaskList;
    shareCodeTaskList.splice(isCurrent ? self.currentCookieTimes : shareCodeTaskList.length, 0, shareCode);
    if (shareCodeUniqIteratee) {
      shareCodeTaskList = shareCodeTaskList.map(code => _.isObject(code) ? code : {[shareCodeUniqIteratee]: code});
    }
    self.shareCodeTaskList = _.uniqBy(shareCodeTaskList, shareCodeUniqIteratee);
  }

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
    const self = this;
    // 通用处理
    shareCodes.concat(self.defaultShareCodes).forEach(code => {
      self.updateShareCodeFn(code, false);
    });
    self.defaultShareCodes = [];
  }

  static async beforeRequest(api) {}

  static async handleUpdateCurrentShareCode(api) {}

  static async handleDoShare(api) {}

  // doMain一般不会被重载
  static async doMain(api, shareCodes) {
    const self = this;

    self.initShareCodeTaskList(shareCodes || []);

    const needStop = await self.beforeRequest(api);
    if (needStop === true) return api.log('活动已结束(beforeRequest)');

    await self.doApi(api, 'beforeGetTaskList');

    let taskDoneTimes = 0;
    await _doTask();

    if (!self.doneShareTask) {
      self.isFirstLoop() && await self.handleUpdateCurrentShareCode(api);
      await self.handleDoShare(api);
    }

    if (self.isLastLoop()) {
      await self.doApi(api, 'afterGetTaskList');
      await self.doApi(api, 'doRedeem');
    }

    async function _doTask() {
      const taskList = await self.doApi(api, 'getTaskList') || [];

      let isDone = false;
      for (const {list, option = {}} of taskList) {
        option.firstFn = option.firstFn || (item => self.doApi(api, 'doTask', item));
        option.afterWaitFn = option.afterWaitFn || ((data, item) => {
          return self.doApi(api, 'doWaitTask', item, data);
        });
        if (await self.loopCall(list, option)) {
          isDone = true;
        }
      }
      if (isDone && (++taskDoneTimes < self.maxTaskDoneTimes)) {
        await sleep(2);
        await _doTask();
      }
    }
  }

  // helpers
  static getFilePath(fileName) {
    return require('path').resolve(this.dirname || __dirname, fileName);
  }

  // 更新 wq_auth_token
  static async updateWqAuthToken(api, updateCookie = true) {
    const authToken = await getAuthToken();
    if (authToken && updateCookie) {
      api.cookie = `wq_auth_token=${authToken}`;
    }
    return authToken;

    // 获取 wq_auth_token
    async function getAuthToken() {
      return api.commonDo({
        uri: 'https://wq.jd.com/pinbind/GetTokenForWxApp',
        method: 'GET',
        qs: {biz: 'interact'},
        headers: {
          referer: 'http://wq.jd.com/wxapp/pages/hd-interaction/index/index',
        },
      }).then(_.property('token'));
    }
  }

  static injectEncryptH5st(api, {
    defaultData = this.commonParamFn(),
    config,
    removeEncryptKeys = ['_stk', '_ste'],
    replaceMethods = ['doFormBody', 'doGetBody'],
    afterEncryptFn = _.noop,
  }) {
    const origin = _.get(api, 'options.headers.origin');

    replaceMethods.forEach(method => {
      replaceObjectMethod(api, method, async data => {
        let [functionId, body, signData, options = {}] = data;
        // TODO 优化这里的逻辑
        if (method === 'doGet') {
          options = signData || options;
          options.qs = options.qs || {};
          _.merge(options.qs, body);
          body = void 0;
        } else if (method === 'doGetBody') {
          options = signData || options;
        } else {
          _.merge(options.form, signData);
        }
        const t = getMoment().valueOf();
        let form = _.merge({}, defaultData, body && {body}, {t}, options.qs || options.form);
        // TODO 整理成通用方法
        if (functionId in config) {
          let {encryptH5st, appId, fingerprint, algoData} = config[functionId];
          !encryptH5st && (config[functionId] = encryptH5st = new EncryptH5st({appId, origin, fingerprint, algoData}));
          form = await encryptH5st.sign({functionId, ...form});
          removeEncryptKeys.forEach(key => {
            delete form[key];
          });
        }
        afterEncryptFn(form);
        if (['doGetBody', 'doGet'].includes(method)) {
          return [functionId, void 0, _.merge(options, {qs: form})];
        }
        return [functionId, void 0, void 0, _.merge(options, {form})];
      });
    });
  }
}

module.exports = Template;
