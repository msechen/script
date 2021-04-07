const CryptoJS = require('crypto-js');
const {getMoment} = require('../../lib/moment');

/**
 * @description 对请求参数进行加密后返回
 * @param functionId {String}
 * @param body {Object}
 * @param t 时间戳 {String}
 * @return form 包含 sign,t {Object}
 */
function encrypt(functionId, body = {}, t = getMoment().valueOf()) {
  const key = '12aea658f76e453faf803d15c40a72e0';
  const form = {
    appid: 'lite-android',
    body: JSON.stringify(body),
    client: 'android',
    clientVersion: '3.1.0',
    functionId,
    t,
    uuid: '846c4c32dae910ef',
  };
  let msg = Object.values(form).join('&');
  const sign = CryptoJS.HmacSHA256(msg, key).toString();
  return _.assign({sign}, form);
}

module.exports = {
  encrypt,
};
