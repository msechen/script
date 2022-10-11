const CryptoJS = require('crypto-js');
const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');

class Api {
  constructor({id, authCode, activeId}) {
    this.id = id;
    this.authcode = authCode;
    this.activeid = activeId;
  }

  Decrypt(data) {
    // const decryptKey = CryptoJS.MD5(this.id).toString().slice(0, 16);
    // 本地解密
    const decryptKey = this.authcode.slice(8, 16) + this.authcode.slice(24, 32);
    if (!decryptKey) return !1;
    let t = data.__data__;
    let e = data.__iv__;
    var n = CryptoJS.AES.decrypt(t, CryptoJS.enc.Utf8.parse(decryptKey), {
      iv: e ? CryptoJS.enc.Utf8.parse(e) : e,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    var i = n.toString(CryptoJS.enc.Utf8);
    return JSON.parse(i.toString());
  }

  Encrypt(t) {
    const encryptKey = this.authcode.slice(8, 16) + this.authcode.slice(24, 32);
    if (!encryptKey) return !1;
    // 'object' == (void 0 === t ? 'undefined' : (0, s.default)(t)) && (t = (0, o.default)(t));
    t = t || {};
    t = _.assign(_.pick(this, ['id', 'authcode', 'activeid']), t);
    t = JSON.stringify(t);
    var e = CryptoJS.MD5(parseInt(1e4 * Math.random())).toString().slice(0, 16);
    return {
      __data__: CryptoJS.AES.encrypt(t, CryptoJS.enc.Utf8.parse(encryptKey), {
        iv: e ? CryptoJS.enc.Utf8.parse(e) : e,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(), __iv__: e, __id__: this.id,
    };
  }
}

module.exports = Api;
