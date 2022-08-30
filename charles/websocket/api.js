/**
 * @description 格式化 websocket 数据
 */

const _ = require('lodash');
const Cookie = require('../../src/lib/cookie');

function formatRequest(req = '', res = '') {
  const _format = target => target ?
    target.trim().split('\n').map(str => {
      let [type, startTime, endTime, message] = str.split('\t');
      try {
        message = JSON.parse(message);
      } catch (e) {}
      return {type, startTime, endTime, message};
    }) : [];
  req = _format(req);
  res = _format(res);
  const result = [];
  for (const {type, startTime, endTime, message: request} of req) {
    const {message: response} = res.find(o => _.get(o, 'message.REQID') === request['REQID']) || {message: {}};
    const removeKeys = ['TYPE', 'REQID'];
    removeKeys.forEach(key => {
      delete request[key];
      delete response[key];
    });
    const cookieStr = _.get(request, 'HEADER.Cookie');
    if (cookieStr) {
      request['HEADER']['Cookie'] = new Cookie(cookieStr).toObject();
      request['HEADER']['Cookie'] = '****';
    }
    try {
      response['BODY'] = JSON.parse(response['BODY']);
    } catch (e) {}
    result.push({startTime, request, response});
  }
  return result;
}

module.exports = {
  formatRequest,
};
