const CryptoJS = require('crypto-js');
const _ = require('lodash');
const {getMoment} = require('../../lib/moment');
const {matchMiddle} = require('../../lib/common');
const rp = require('request-promise');

class Encrypt {
  appId = '10021';

  constructor(props) {
    this.fingerprint = this.getFingerPrint();
    this.token = '';
  }

  async genToken() {
    return rp({
      uri: 'https://cactus.jd.com/request_algo',
      method: 'POST',
      json: true,
      body: {
        'version': '1.0',
        fp: this.fingerprint,
        'appId': this.appId,
        'timestamp': getMoment().valueOf(),
        'platform': 'web',
        'expandParams': '',
      },
      qs: {
        g_ty: 'ajax',
      },
      headers: {
        referer: 'https://st.jingxi.com/',
        origin: 'https://st.jingxi.com',
      },
    }).then(data => {
      this.token = _.property('data.result.tk')(data);
      // "function test(token,fingerprint,timestamp,appId,algo){const random='qkjPaHJ+nl3g';const str=`${token}${fingerprint}${timestamp}${appId}${random}`;return algo.SHA512(str)}"
      this.keyRandom = matchMiddle(_.property('data.result.algo')(data) || '', {reg: /random='(.*)';/});
    });
  }

  getFingerPrint() {
    return formatFingerPrint(getRandomIDPro({size: 13}) + `${getMoment().valueOf()}`);

    function formatFingerPrint(fingerprint) {
      return 16 < fingerprint ? fingerprint.slice(0, 16) : formatString({str: fingerprint, len: 16, ele: '0'});
    }
  }

  __genSignParams(t) {
    return [''.concat(this.timestamp), ''.concat(this.fingerprint), ''.concat(this.appId), ''.concat(this.token), ''.concat(t)].join(';');
  }

  __genSign(t, e) {
    var n = e.map(o => `${o.key}:${o.value}`).join('&');
    // var n = (0, u.default)(e).call(e, function (t) {return t.key + ':' + t.value;}).join('&');
    t = CryptoJS.HmacSHA256(n, t).toString(CryptoJS.enc.Hex);
    return {
      _stk: e.map(o => o.key).join(','),
      // _stk: (0, u.default)(e).call(e, function (t) {return t.key;}).join(','),
      _ste: 1,
      // _ste: x.ENVIRONMENT,
      h5st: this.__genSignParams(t),
    };
  }

  __genKey() {
    const str = `${this.token}${this.fingerprint}${this.timestamp}${this.appId}${this.keyRandom}`;
    return CryptoJS.MD5(str);
  }

  __checkParams(object) {
    return _.toPairs(object).map(array => ({key: array[0], value: array[1]}));
  }

  // {lasttask: 0, taskid: 'last_task_1624266042', tasktype: '3'}
  // {taskid: '20', tasktype: '3'}
  async sign(object) {
    const params = this.__checkParams(object);
    this.timestamp = getMoment().format('YYYYMMDDHHmmssSSS');
    !this.token && await this.genToken();
    let result = this.__genSign(this.__genKey().toString(), params);
    result = _.assign({}, object, result);
    return result;
  }
}

function getRandomIDPro() {
  var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.size,
    r = void 0 === n ? 10 : n, i = e.dictType, a = void 0 === i ? 'number' : i, o = e.customDict, s = '';
  if (o && 'string' == typeof o) t = o; else switch (a) {
  case'alphabet':
    t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    break;
  case'max':
    t = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    break;
  case'number':
  default:
    t = '0123456789';
  }
  for (; r--;) s += t[Math.random() * t.length | 0];
  return s;
}

function formatString(t) {
  var e = t.str, n = t.len, r = t.ele, i = void 0 === r ? '0' : r;
  if (t = void 0 === (t = t.type) ? 'prefix' : t, !(f(e, 'String') && n && f(n, 'Number') && f(i, 'String') && 1 === i.length)) throw new Error('==>formatString：输入不合法。');
  for (var a = e.length, o = '', s = 0; s < n - a; s++) o += i;
  return 'prefix' === t ? o + e : e + o;
}

module.exports = Encrypt;
