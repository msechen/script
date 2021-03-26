const rp = require('request-promise');
const _ = require('lodash');
const {printLog, sleep} = require('../lib/common');

const requestURI = 'https://api.m.jd.com/client.action';
const DEFAULT_OPTION = {
  method: 'POST',
  json: true,
  uri: requestURI,
};

const _request = (Cookie, {form, body, qs, headers = {}, ...others}) => {
  const _printLog = (result, type) => {
    const findNotEmpty = (...array) => array.find(v => !_.isEmpty(v));
    printLog('jdAPI', 'request', [findNotEmpty(qs, others), findNotEmpty(form, body), result], type);
  };
  const options = {form, body, qs, ...others};

  if (!_.isNil(body) && _.isEmpty(form)) {
    delete options.form;
  }

  const ignorePrintLog = options['ignorePrintLog'] || false;
  delete options['ignorePrintLog'];

  return rp(_.assign({
    ...DEFAULT_OPTION,
    headers: {Cookie, ...headers},
  }, options)).then(result => {
    !ignorePrintLog && _printLog(result, 'success');
    return result;
  }).catch(err => {
    _printLog(err, 'error');
  });
};

class Api {
  constructor(cookie, signData, options, formatData) {
    this.cookie = cookie;
    this.signData = signData || {};
    this.options = options || {};
    this.formatData = formatData;
  }

  commonDo(options) {
    return _request(this.cookie, options);
  }

  async do(options) {
    options = _.merge({}, this.options, options);
    (options.needDelay !== false) && await sleep();
    delete options.needDelay;
    return this.commonDo(options).then(data => {
      data = data || {};
      if (this.formatData) {
        return this.formatData(data);
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
    Object.keys(form).forEach(key => {
      const value = form[key];
      if (_.isPlainObject(value)) {
        form[key] = JSON.stringify(value);
        // TODO 需要确认一下逻辑
        form[key] = form[key].replace(/\//g, '\\/');
      }
    });
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

  doGet(functionId, qs, options) {
    functionId && _.assign(qs, {functionId});
    return this.do(_.merge({qs, method: 'GET'}, options));
  }

  doGetBody(functionId, body = {}, options) {
    body = JSON.stringify(body);
    return this.doGet(functionId, {body}, options);
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
    }, options));
  }
}

function initWq() {
  const wqOptions = {
    method: 'GET',
    headers: {
      referer: 'https://wqs.jd.com/',
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
