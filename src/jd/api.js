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
  Object.keys(options).forEach(key => {
    if (_.isEmpty(options[key]) && !_.isBoolean(options[key])) delete options[key];
  });

  return rp(_.assign({
    ...DEFAULT_OPTION,
    headers: {Cookie, ...headers},
  }, options)).then(result => {
    _printLog(result, 'success');
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
    await sleep();
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

  doForm(functionId, form) {
    Object.keys(form).forEach(key => {
      const value = form[key];
      if (_.isPlainObject(value)) {
        form[key] = JSON.stringify(value);
        // TODO 需要确认一下逻辑
        form[key] = form[key].replace(/\//g, '\\/');
      }
    });
    return this.doFunctionId(functionId, {form});
  }

  doFormBody(functionId, body, signData) {
    body = body || {};
    return this.doForm(functionId, _.merge({body}, this.signData, signData));
  }

  doPath(functionId, form = {}, options = {}) {
    return this.do(_.merge({
      uri: `${this.options.uri}/${functionId}`,
      form,
    }, options));
  }
}

module.exports = Api;
