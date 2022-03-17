/**
 * @description 将cookie的 wskey(有效期未知, 需从app捕获) 转换为 pt_key(有效期30天)
 *
 */

const Template = require('../base/template');
const Cookie = require('../../lib/cookie');

const {sleep, readFileJSON, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const {getEnv} = require('../../lib/env');
const _ = require('lodash');

const {common: {genToken}} = require('../../../charles/api');

class ChangeCK extends Template {
  static scriptName = 'ChangeCK';
  static scriptNameDesc = '转换cookie';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static activityEndTime = '';
  static times = 1;

  static apiOptions = {
    options: {},
  };

  static async doMain(api, shareCodes) {
    const self = this;

    const targetForm = genToken.find(o => o.body.match('plogin.m.jd.com'));
    if (!targetForm) return console.log('genToken form 没找到');
    const currentCookieTimes = self.currentCookieTimes;
    const cookieOption = getEnv('JD_COOKIE_OPTION')[currentCookieTimes];
    const ptKeyExpire = _.get(cookieOption, 'expire.pt_key');
    if (ptKeyExpire && getMoment(ptKeyExpire).isAfter(getMoment().add(2, 'day'))) {
      return api.log(`cookie(${ptKeyExpire})还未过期, 无需更新`);
    }
    const originCookie = new Cookie(cookieOption.cookies);
    if (!originCookie.get('wskey')) {
      return api.log('当前cookie没有wskey, 请确认');
    }
    const commonHeaders = {
      'user-agent': 'JD4iPhone/167945%20(iPhone;%20iOS;%20Scale/2.00)',
    };

    //{
    // 	"code": "0",
    // 	"tokenKey": "tokenKey",
    // 	"url": "https://un.m.jd.com/cgi-bin/app/appjmp"
    // }
    const {
      tokenKey,
      url,
    } = await api.doForm('genToken', targetForm, {
      headers: {
        // j-e-c, j-e-h 需自行抓包
        ..._.pick(_.get(cookieOption, 'loginConfig.headers'), ['j-e-c', 'j-e-h']),
        cookie: originCookie.toString(['pt_pin', 'wskey']),
        ...commonHeaders,
      },
    });
    if (!tokenKey || !url) return;
    const ptKey = 'pt_key';
    await api.doGetUrl(url, {
      resolveWithFullResponse: true,
      followRedirect: false,
      qs: {
        tokenKey,
        to: JSON.parse(targetForm.body).to,
      },
      headers: {
        cookie: originCookie.toString(['pt_pin', ptKey]),
        ...commonHeaders,
      },
    }).then(({response}) => {
      const setCookie = response.headers['set-cookie'];
      const cookie = new Cookie(setCookie);
      const newPtKey = cookie.get(ptKey);
      console.log(setCookie);
      if (newPtKey && newPtKey.startsWith('app_')) {
        const fullPtKey = setCookie.find(str => str.match(ptKey));
        api.log(`完整的 ${fullPtKey}`);
        const expireTime = fullPtKey.split(';').map(str => str.trim()).find(str => str.match('EXPIRES=')).replace('EXPIRES=', '');
        const expire = getMoment(new Date(expireTime)).format();
        const oldPtKey = cookieOption.cookies[ptKey];
        _.merge(cookieOption, {
          cookies: {
            [ptKey]: newPtKey,
          },
          expire: {
            [ptKey]: expire,
          },
        });
        if (oldPtKey !== newPtKey) {
          api.log(`旧新pt_key`);
          api.log([oldPtKey, newPtKey]);
        }
        // TODO 自行修正env中的cookie和让github action使用缓存
        const jsonData = readFileJSON('../../../.env.product.json', __dirname);
        _.merge(jsonData['JD_COOKIE_OPTION'][currentCookieTimes], cookieOption);
        writeFileJSON(jsonData, '../../../.env.product.json', __dirname);
        api.log('转换成功并写入文件, 新的 JD_COOKIE_OPTION 如下');
        api.log(cookieOption);
      } else {
        api.log('转换失败, 请查看报错');
      }
    });
  }
}

singleRun(ChangeCK).then();

module.exports = ChangeCK;
