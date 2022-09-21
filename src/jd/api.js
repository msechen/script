const rp = require('request-promise');
const _ = require('lodash');
const Cookie = require('../lib/cookie');
const {uploadProductEnvToAction} = require('../lib/env');
const {printLog, sleep, objectValuesStringify} = require('../lib/common');
const {getMoment} = require('../lib/moment');
const {processInAC} = require('../lib/env');

const requestURI = 'https://api.m.jd.com/client.action';
const DEFAULT_OPTION = {
  method: 'POST',
  json: true,
  uri: requestURI,
  timeout: 1000 * 60 * 5,
};

const _request = (cookie, {form, body, qs, headers = {}, ...others}) => {
  const _printLog = (result, type) => {
    const findNotEmpty = (...array) => array.find(v => !_.isEmpty(v));
    printLog('jdAPI', 'request', [findNotEmpty(qs, others), findNotEmpty(form, body), result], type, processInAC ? void 0 : 300);
  };
  const options = {form, body, qs, ...others};

  [form, qs].forEach(objectValuesStringify);

  if (!_.isNil(body) && _.isEmpty(form)) {
    delete options.form;
  }

  const ignorePrintLog = options['ignorePrintLog'] || false;
  let errorTryTimes = 0;
  // 默认错误后需要再重试一下
  const errorTryMaxTimes = _.isNil(options['errorTryMaxTimes']) ? 1 : options['errorTryMaxTimes'];
  delete options['ignorePrintLog'];
  delete options['errorTryMaxTimes'];

  const rpOptions = _.assign({
    ...DEFAULT_OPTION,
    headers: {cookie, ...headers},
  }, options);

  if (!rpOptions.headers.cookie) {
    delete rpOptions.headers.cookie;
  }

  const {followRedirect} = rpOptions;

  const _do = rpOptions => rp(rpOptions).then(result => {
    !ignorePrintLog && _printLog(result, 'success');
    return result;
  }).catch(err => {
    const statusCode = _.get(err, 'response.statusCode');
    if (followRedirect === false && statusCode === 302) {
      return err;
    }
    _printLog(err, 'error');
    if (errorTryTimes < errorTryMaxTimes && [503, 504].includes(statusCode)) {
      errorTryTimes++;
      return _do(rpOptions);
    }
  });

  return _do(rpOptions);
};

class Api {
  /**
   *
   * @type {Cookie}
   */
  cookieInstance;

  constructor(cookie, signData, options, formatData) {
    this.cookie = cookie;
    this.signData = signData || {};
    this.options = options || {};
    this.formatData = formatData;
  }

  set cookie(v) {
    this.cookieInstance = new Cookie(v || {});
  }

  get cookie() {
    return this.cookieInstance.toString();
  }

  getPin(key = 'pt_pin') {
    return new Cookie(this.cookie).get(key);
  }

  async commonDo(options) {
    // 请求优先展示 functionId, 以便定位和排查问题
    const priorityProperty = 'functionId';
    ['qs', 'form'].forEach(key => {
      if (priorityProperty in (options[key] || {})) {
        options[key] = _.assign({[priorityProperty]: options[key][priorityProperty]}, options[key]);
      }
    });
    let data = await _request(this.cookie, options);
    if (this.notLogin(data)) {
      await require('./base').changeCK(this, true);
      await sleep(2);
      // 重新请求一次
      data = await _request(this.cookie, options);
    }
    return data;
  }

  async do(options) {
    const newOptions = _.merge({}, this.options, options);
    (newOptions.needDelay !== false) && await sleep();
    delete newOptions.needDelay;
    return this.commonDo(newOptions).then(data => {
      data = data || {};
      if (this.formatData) {
        return this.formatData(data, newOptions);
      }
      return _.assign({
        _data: _.assign({}, data),
      }, {...data.data});
    });
  }

  doUrl(url, options = {}) {
    const _url = new URL(url);
    return this.do(_.merge({
      uri: `${_url.origin}${_url.pathname ? _url.pathname : ''}`,
      form: _.fromPairs(Array.from(_url.searchParams.entries())),
    }, options));
  }

  doFunctionId(functionId, options) {
    return this.do(_.merge({
      qs: {functionId},
    }, options));
  }

  doForm(functionId, form, options = {}) {
    return this.doFunctionId(functionId, _.merge({form}, options));
  }

  doFormBody(functionId, body, signData, options) {
    body = body || {};
    return this.doForm(functionId, _.merge({body}, this.signData, signData), options);
  }

  doPath(functionId, form = {}, options = {}) {
    return this.do(_.merge({
      uri: `${this.options.uri}/${functionId}`,
      form,
    }, options));
  }

  doBodyPath(functionId, body) {
    return this.doPath(functionId, void 0, {body});
  }

  doGet(functionId, qs = {}, options) {
    functionId && _.assign(qs, {functionId});
    if (functionId !== 'vvipclub_lotteryTask') {
      // return;
    }
    return this.do(_.merge({qs, method: 'GET'}, options));
  }

  doGetBody(functionId, body = {}, options) {
    return this.doGet(functionId, {body}, options);
  }

  doGetBodyMP(functionId, body = {}, options) {
    return this.doGet(functionId, {body}, _.merge({method: 'POST'}, options));
  }

  doGetUrl(url, options) {
    const _url = new URL(url);
    return this.do(_.merge({
      method: 'GET',
      uri: `${_url.origin}${_url.pathname ? _url.pathname : ''}`,
      qs: _.fromPairs(Array.from(_url.searchParams.entries())),
    }, options));
  }

  doGetPath(functionId, qs = {}, options = {}) {
    return this.do(_.merge({
      uri: `${this.options.uri}/${functionId}`,
      qs,
      method: 'GET',
    }, options));
  }

  doGetFileContent(uri, options) {
    !/^https?/.test(uri) && (uri = `https:${uri}`);
    return this.commonDo(_.merge({
      ignorePrintLog: true,
      uri,
      headers: {
        cookie: '',
      },
      method: 'GET',
    }, options));
  }

  doApiMapping(apiMapping, body, options) {
    return this.doFormBody(void 0, {apiMapping, ...body}, void 0, {
      uri: 'https://api.m.jd.com/api',
      form: {
        t: getMoment().valueOf(),
        loginType: 2,
      },
      ...options,
    });
  }

  // 检测cookie有效性
  async loginValid() {
    const data = await this.commonDo({
      uri: requestURI,
      method: 'POST',
      headers: {
        'user-agent': 'jdapp',
      },
      qs: {
        functionId: 'initForFarm',
        appid: 'wh5',
      },
      form: {'version': 14, 'channel': 1, 'babelChannel': '120'},
    });

    return !this.notLogin(data);
  }

  notLogin(data) {
    if (!_.isObject(data)) {
      return false;
    }
    const config = [
      // https://api.m.jd.com/client.action?functionId=initForFarm&appid=wh5
      {code: '3'/*, msg: 'not login'*/},
      // Health
      {'code': -30001/*, 'msg': '登陆失败'*/},
      // https://api.m.jd.com/api?functionId=interact_center_shopSign_signCollectGift
      {'msg': 'errCode:407000007, errMessage:签到用户未登录', 'code': 407000007},
      // JoyPark
      {'code': 1000, 'errMsg': '未登录'},
      // https://wq.jd.com/pinbind/GetTokenForWxApp?biz=interact (Earn)
      // {
      //   'action': 0,
      //   'pin_status': 0,
      //   'retcode': 13,
      //   'retmsg': 'no login',
      // },
    ];
    return config.some(o => _.isEqual(o, _.pick(data, _.keys(o))));
  }
}

function initWq() {
  const wqOptions = {
    method: 'GET',
    headers: {
      referer: 'https://wqs.jd.com/',
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    },
    qs: {
      sceneval: 2,
      callback: 'jsonpCBKJ',
    },
  };

  const apiPrototype = Api.prototype;

  async function queryList(uri, pageSize = -1) {
    return this.commonDo(mergeOptions({
      uri,
      qs: {
        cp: 1,
        pageSize,
      },
    })).then(formatData);
  }

  function formatData(data) {
    let result = {};
    try {
      result = JSON.parse(data.replace('try{jsonpCBKJ(', '').replace(');}catch(e){}', ''));
    } catch (e) {
    }
    return result;
  }

  function mergeOptions(options) {
    return _.merge({}, wqOptions, options);
  }

  async function delByTimes(times = 1, {getListFn, doItemFn}) {
    const MAX_PAGE_SIZE = 20;
    const notLimitFn = t => t === -1;

    await _del(times);

    async function _del(times) {
      const notLimit = notLimitFn(times);
      const pageSize = notLimit ? MAX_PAGE_SIZE : _.min([times, MAX_PAGE_SIZE]);
      const remainTimes = times - pageSize;
      const list = await getListFn(pageSize);
      if (_.isEmpty(list)) return;
      await doItemFn(list);
      if (notLimit || remainTimes > 0) {
        await sleep(2);
        await _del(notLimit ? times : remainTimes);
      }
    }
  }

  _.assign(apiPrototype, {
    // 获取关注的店铺列表
    queryShopFavList(pageSize) {
      return queryList.call(this, 'https://wq.jd.com/fav/shop/QueryShopFavList', pageSize);
    },
    async addFavShop(shopId) {
      const self = this;
      return self.commonDo(mergeOptions({
        uri: 'https://wq.jd.com/fav/shop/AddShopFav',
        qs: {shopId},
      }));
    },
    // 取消关注店铺
    async delFavShop(shopIds) {
      const self = this;
      await delBatch(shopIds);

      function delBatch(shopIds) {
        const shopId = _.concat(shopIds).join();
        return self.commonDo(mergeOptions({
          uri: 'https://wq.jd.com/fav/shop/batchunfollow',
          qs: {shopId},
        }));
      }

      // TODO 待移除, 暂时没用到
      function delSingle(shopId) {
        return self.commonDo(mergeOptions({
          uri: 'https://wq.jd.com/fav/shop/DelShopFav',
          qs: {shopId},
        }));
      }
    },
    // 根据次数取消关注
    async delShopFavByTimes(times) {
      const self = this;
      await delByTimes(times, {
        getListFn: (pageSize) => {
          return self.queryShopFavList(pageSize).then(data => _.map(data.data, 'shopId'));
        },
        doItemFn: self.delFavShop.bind(self),
      });
    },
    // 获取关注的商品列表
    queryCommFavList(pageSize) {
      return queryList.call(this, 'https://wq.jd.com/fav/comm/FavCommQueryFilter', pageSize);
    },
    // 取消关注商品
    async delFavComm(commIds) {
      const self = this;
      await delBatch(commIds);

      function delBatch(commIds) {
        const commId = _.concat(commIds).join();
        return self.commonDo(mergeOptions({
          uri: 'https://wq.jd.com/fav/comm/FavCommBatchDel',
          qs: {commId},
        }));
      }
    },
    // 根据次数取消关注
    async delCommFavByTimes(times) {
      const self = this;
      await delByTimes(times, {
        getListFn: (pageSize) => {
          return self.queryCommFavList(pageSize).then(data => _.map(data.data, 'commId'));
        },
        doItemFn: self.delFavComm.bind(self),
      });
    },
  });
}

initWq();

module.exports = Api;
