const rp = require('request-promise');
const _ = require('lodash');
const {printLog} = require('../lib/common');

const requestURI = 'https://api.m.jd.com/client.action';
const DEFAULT_OPTION = {
  method: 'POST',
  json: true,
  uri: requestURI,
};

const _request = (Cookie, {form, qs, headers = {}, ...others}) => {
  const _printLog = (result, type) => {
    printLog('jdAPI', 'request', [qs, form, result], type);
  };
  return rp(_.assign({
    ...DEFAULT_OPTION,
    headers: {Cookie, ...headers},
  }, {form, qs, ...others})).then(result => {
    _printLog(result, 'success');
    return result;
  }).catch(err => {
    _printLog(err, 'error');
  });
};

class Request {
  constructor(cookie, signData, options, formatData) {
    this.cookie = cookie;
    this.signData = signData || {};
    this.options = options || {};
    this.formatData = formatData;
  }

  do(options) {
    options = _.merge({}, this.options, options);
    return _request(this.cookie, options).then(data => {
      data = data || {};
      if (this.formatData) {
        return this.formatData(data);
      }
      return _.assign({
        _data: _.assign({}, data),
      }, {...data.data});
    });
  }

  doFunctionId(functionId, options) {
    return this.do(_.assign({
      qs: {functionId},
    }, options));
  }

  doForm(functionId, form) {
    return this.doFunctionId(functionId, {form});
  }

  doFormBody(functionId, body, signData) {
    body = body || {};
    if (_.isPlainObject(body)) {
      body = JSON.stringify(body);
    }
    body = body.replace(/\//g, '\\/');
    return this.doForm(functionId, _.assign({body, ...this.signData}, signData));
  }

  doPath(functionId, form = {}) {
    return this.do({
      uri: `${this.options.uri}/${functionId}`,
      form,
    })
  }
}

module.exports = {
  Request,
};
