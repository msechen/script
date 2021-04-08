const CryptoJS = require('crypto-js');
const {getMoment} = require('../../lib/moment');

const enctyptKey = '98c14c997fde50cc18bdefecfd48ceb7';

function encrypt(body, isJson = false) {
  const lkt = getMoment().valueOf();
  let lks = '';
  if (isJson) {
    lks = CryptoJS.MD5(base64(aesEncrypt('' + JSON.stringify(sortByLetter(body)))) + '_' + enctyptKey + '_' + lkt).toString();
  } else {
    lks = CryptoJS.MD5('_' + enctyptKey + '_' + lkt).toString();
  }
  return {lkt, lks};
}

// helpers
function base64(e) {
  let t = CryptoJS.enc.Utf8.parse(e);
  return CryptoJS.enc.Base64.stringify(t);
}

function aesEncrypt(e) {
  let i = CryptoJS.enc.Utf8.parse(enctyptKey);
  let r = CryptoJS.enc.Utf8.parse('ea653f4f3c5eda12');
  let t = CryptoJS.enc.Utf8.parse(e);
  return CryptoJS.AES.encrypt(t, i, {
    'iv': r,
    'mode': CryptoJS.mode.CBC,
    'padding': CryptoJS.pad.Pkcs7,
  }).ciphertext.toString();
}

function sortByLetter(e, t) {
  if (e instanceof Array) {
    t = t || [];
    for (let a = 0; a < e.length; a++)
      t[a] = sortByLetter(e[a], t[a]);
  } else
    !(e instanceof Array) && e instanceof Object ? (t = t || {},
      Object.keys(e).sort().map(function (a) {
        t[a] = sortByLetter(e[a], t[a]);
      })) : t = e;
  return t;
}

module.exports = {
  encrypt,
};
