const CryptoJS = require('crypto-js');
const _ = require('lodash');
const {getMoment} = require('./moment');
const rp = require('request-promise');

class EncryptH5st {
  version = '3.0';
  appId = '15097';
  origin = 'https://daily-redpacket.jd.com';

  constructor(props = {}) {
    const {appId, origin} = props;
    // TODO 确认这个 fingerprint 生成
    this.fingerprint = '4309711658644612';
    // this.fingerprint = this.getFingerPrint();
    this.token = '';
    // this.token = "tk02w6f291b8418n98h7+BOSvq484fRN0Nl2HTj/1n/cNXp4hTg2aEqtfpnmZyCy3ktRoqi/n1p+H3y7dLLxGAhdPyW3";
    this.appId = appId || this.appId;
    this.origin = origin || this.origin;
  }

  async genToken() {
    return rp({
      uri: 'https://cactus.jd.com/request_algo',
      method: 'POST',
      json: true,
      body: {
        version: this.version,
        fp: this.fingerprint,
        appId: this.appId,
        'timestamp': getMoment().valueOf(),
        'platform': 'web',
        'expandParams': '',
      },
      qs: {
        g_ty: 'ajax',
      },
      headers: {
        referer: `${this.origin}/`,
        origin: this.origin,
      },
    }).then(data => {
      this.token = _.property('data.result.tk')(data);
      const vm = require('vm');
      const ctx = {};
      vm.createContext(ctx);
      // "function test(token,fingerprint,timestamp,appId,algo){const random='qkjPaHJ+nl3g';const str=`${token}${fingerprint}${timestamp}${appId}${random}`;return algo.SHA512(str)}"
      vm.runInContext(_.get(data, 'data.result.algo'), ctx);
      // vm.runInContext('function test(tk,fp,ts,ai,algo){var rd=\'Kkv7Utt5obqA\';var str=`${tk}${fp}${ts}${ai}${rd}`;return algo.HmacMD5(str,tk)}', ctx);
      this.__genKey = () => {
        return ctx.test(this.token, this.fingerprint, this.stFull, this.appId, CryptoJS).toString();
      };
    });
  }

  getFingerPrint() {
    return formatFingerPrint(getRandomIDPro({size: 13}) + `${getMoment().valueOf()}`);

    function formatFingerPrint(fingerprint) {
      return 16 < fingerprint ? fingerprint.slice(0, 16) : formatString({str: fingerprint, len: 16, ele: '0'});
    }
  }

  __genSignParams(t) {
    return [''.concat(this.stFull), ''.concat(this.fingerprint), ''.concat(this.appId), ''.concat(this.token), ''.concat(t), this.version, this.timestamp].join(';');
  }

  __genSign(t, e) {
    const n = e.map(o => `${o.key}:${o.value}`).join('&');
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

  __checkParams(object) {
    // const sortKeys = ['appid', 'body', 'client', 'clientVersion', 'functionId', 't'];
    return _.sortBy(_.toPairs(object).map(array => ({key: array[0], value: array[1]})), 'key');
  }

  async sign(object) {
    const {body} = object;
    object.body = CryptoJS.SHA256(decodeURIComponent(JSON.stringify(body))).toString();
    const params = this.__checkParams(object);
    const nowMoment = getMoment();
    this.timestamp = nowMoment.valueOf();
    this.stFull = nowMoment.format('YYYYMMDDHHmmssSSS');
    !this.token && await this.genToken();
    let result = this.__genSign(this.__genKey(), params);

    result = _.assign({}, object, result, {body});
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

module.exports = EncryptH5st;
