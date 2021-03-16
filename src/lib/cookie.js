/**
 * cookie 处理
 */
const _ = require('lodash');

class Cookie {
  cookieObject = {};

  constructor(data, names) {
    const cookie = fromPairs(data);
    this.cookieObject = _.isEmpty(names) ? cookie : _.pick(cookie, names);
  }

  get(name) {
    return this.cookieObject[name];
  }

  set(name, value) {
    name = name.split(';')[0];
    if (!value) {
      [name, value] = name.split('=');
    }
    this.cookieObject[name] = value;
  }

  remove(name) {
    delete this.cookieObject[name];
  }

  toString() {
    return toPairs(this.cookieObject);
  }
}

// name1=value1;name2=value2
// ["name=value"]
// cookie 格式：name=value; Path=/; Expires=Sun, 23-Apr-23 09:01:35 GMT; Domain=.domain.com;
function fromPairs(data) {
  if (_.isString(data)) data = data.split(';');
  return _.fromPairs(data.map(str => str.split(';')[0].trim().split('=')));
}

function toPairs(cookie) {
  return _.toPairs(cookie).map(array => array.join('=')).join('; ');
}

// cookie 序列化
// cookie 格式：name=value; Path=/; Expires=Sun, 23-Apr-23 09:01:35 GMT; Domain=.domain.com;
function serialize(name, val, opt) {
  let pairs = [name + '=' + val];
  opt = opt || {};


  if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
  if (opt.domain) pairs.push('Domain=' + opt.domain);
  if (opt.path) pairs.push('Path=' + opt.path);
  if (opt.expires) pairs.push('Expires=' + opt.exppires.toUTCString());
  if (opt.httpOnly) pairs.push('HttpOnly');
  if (opt.secure) pairs.push('Secure');


  return pairs.join(';');
}

module.exports = Cookie;
