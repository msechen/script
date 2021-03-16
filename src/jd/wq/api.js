/**
 * wq域名下通用api
 */

const rq = require('request-promise');
const Cookie = require('../../lib/cookie');
const {getEnv} = require('../../lib/env');

async function mLoginWx(api) {
  const cookie = new Cookie(getEnv('JD_WQ_WX_COOKIE', api.currentCookieTimes));
  cookie.set('rurl', 'https://wqsh.jd.com/promote/201801/bean/index.html');
  return rq({
    uri: 'https://wqlogin2.jd.com/mlogin/wxv3/LoginRedirect',
    resolveWithFullResponse: true,
    followRedirect: false,
    method: 'GET',
    qs: {
      code: '023F8u0w3Nur0W2Sp70w3ggKmF1F8u0I',
    },
    headers: {
      // openid2, wq_uin, wq_unionid
      cookie: cookie.toString(),
    },
  }).catch(({response}) => {
    if (response.statusCode !== 302) return;
    const setCookie = response.headers['set-cookie'];
    const newCookie = new Cookie(setCookie/*, [
      'openid2',
      'wq_uin',
      'wq_unionid',
      'wq_skey',
    ]*/);
    return newCookie.toString();
  });
}

module.exports = {
  mLoginWx,
};
