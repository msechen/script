const Template = require('../../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const {getMoment} = require('../../../lib/moment');
const _ = require('lodash');
const CryptoJS = require('crypto-js');
const {common} = require('../../../../charles/api');

const indexUrl = 'https://xinrui-isv.isvjcloud.com/year/';

const tokenHeaders = {};

class XinruiYear extends Template {
  static scriptName = 'XinruiYear';
  static scriptNameDesc = '京超年货节';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInApp = false;

  static apiOptions() {
    return {
      options: {
        uri: 'https://xinrui-isv.isvjcloud.com/api',
        qs: {
          uuid: '9e8dd0b8-8fe3-436d-bc22-d7a009360813',
        },
        headers: {
          ...getEncryptData(),
          origin: new URL(indexUrl).origin,
          referrer: indexUrl,
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'User-Agent': 'jdapp;iPhone;10.3.0;;;M/5.0;appBuild/167903;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CNcyYJO2DNcyZJKzENqyCJG1D2ZrCJDrDJOmZwDsY2GmCJHwYWY3Dm%3D%3D%22%2C%22sv%22%3A%22CJSkCq%3D%3D%22%2C%22iad%22%3A%22Ctu5GUC4CNcjCzS2DM00HtKnBJvNGJSjCJGnHNdQEUDMHJc2%22%7D%2C%22ts%22%3A1641657221%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;',
        },
      },
      formatDataFn(data, options) {
        const coins = _.get(data, 'coins');
        if (coins) {
          _.merge(this, {userData: {coins}});
        }
        return data;
      },
    };
  }

  static async beforeRequest(api) {
    const self = this;
    const currentCookieTimes = api.currentCookieTimes;
    const targetHeader = tokenHeaders[currentCookieTimes];
    if (targetHeader) {
      _.assign(api.options.headers, targetHeader);
      return;
    }
    const tokenForm = common.isvObfuscator.find(o => (JSON.parse(o.body).url || '').match('xinrui-isv.isvjcloud.com'));

    if (!tokenForm) return api.log('请导入正确的token');

    let token = await api.commonDo({
      qs: {
        functionId: 'isvObfuscator',
      },
      form: tokenForm,
    }).then(data => data['token']);

    if (!token) return api.log('genToken 请求出错');

    api.options.headers['Cookie'] = '';
    await api.doPath('jd-user-info', void 0, {
      qs: {
        token,
        'source': '01',
      },
    }).then(data => {
      const accessToken = data['access_token'];
      if (!accessToken) return;
      const tokenHeader = {
        'Authorization': `${_.upperFirst(data['token_type'])} ${accessToken}`,
        'Cookie': `jd-new-year-festival=${accessToken}`,
      };
      _.assign(api.options.headers, tokenHeader);
      tokenHeaders[currentCookieTimes] = tokenHeader;
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;
    await self.beforeRequest(api);

    if (!api.options.headers['Authorization']) {
      return api.log('活动异常');
    }

    // 用户信息
    api.userData = api.userData || {};
    const userData = api.userData;
    const nowDate = getMoment().format('YYYY-MM-DD');

    const doPath = (functionId, qs, options) => api.doGetPath(functionId, qs, _.assign({method: 'POST'}, options));

    if (self.isFirstLoop()) {
      await handleSign();
    }
    await handleDoTask();

    if (self.isLastLoop()) {
      await handleRepairSign();
      await handleLog();
    }

    async function handleSign() {
      const {light_type: lightType} = await api.doGetPath('get_home_info', {now_date: nowDate});
      if (lightType === 1) {
        await api.doBodyPath('get_light_task', {now_date: nowDate});
        await sleep(15);
        await api.doBodyPath('do_light_task', {now_date: nowDate}).then(data => {
          if (data['add_coins']) {
            api.log(`${nowDate} 签到成功`);
          } else {
            api.log(data);
          }
        });
        await doPath('draw_word', {now_date: nowDate});
      }
    }

    async function handleDoTask() {
      const taskList = await api.doGetPath('home_task_info').then(_.property('data')) || [];
      const config = [
        ['浏览会场', 'view_meeting', 'meet_id'],
        ['关注并浏览商品', 'view_product', 'product_id'],
        ['关注并浏览店铺', 'view_shop', 'shop_id'],
      ];
      for (const {id, title, info, left: times, right: maxTimes} of taskList) {
        if (/邀请/.test(title)) {
          await handleDoShare();
        }
        if (/邀请|开卡/.test(title)) continue;
        const target = config.find(array => array[0] === title);
        if (!target || _.isEmpty(info)) continue;
        const [, functionId, idKey] = target;
        await self.loopCall(info, {
          times,
          maxTimes,
          async firstFn({id}) {
            await doPath(functionId, {[idKey]: id});
            await sleep(2);
          },
        });
      }
    }

    async function handleDoShare() {
      const {code: inviterId, nickname} = await api.doGetPath('get_user_info');
      _.merge(userData, {nickname});
      self.updateShareCodeFn(inviterId);
      for (const id of self.getShareCodeFn()) {
        await doPath('invite_friend', {inviter_id: id}).then(data => {
          if (!_.isEmpty(data)) {
            api.log(`助力成功 ${id}`);
          }
        });
      }
    }

    async function handleRepairSign() {
      const {calendar_list: calendarList, repair_coins: repairCoins} = await api.doGetPath('get_calendar_detail');
      userData.calendarList = calendarList;
      for (const calendar of calendarList) {
        const {light_type: lightType, now_date: date} = calendar;
        if (lightType === 1 && userData.coins >= repairCoins) {
          await doPath('repair_draw_word', {now_date: date}).then(data => {
            if (data['add_coins']) {
              api.log(`${date} 补签成功`);
              calendar['light_type'] = 2;
            } else {
              api.log(data);
            }
          });
          await sleep(3);
        }
      }
    }

    async function handleLog() {
      const calendarList = userData.calendarList;
      const notSignBeforeDay = calendarList.filter(o => o['light_type'] === 1).length;
      const notSignAfterDay = calendarList.filter(o => o['light_type'] === 0).length;
      api.log(`[${userData.nickname}] 未签天数(未来): ${notSignBeforeDay}(${notSignAfterDay}), coins: ${userData.coins}`);
    }
  }
}

singleRun(XinruiYear).then();

function getEncryptData() {
  const t1 = getT1();
  const t2 = getT2();
  const t3 = getT3(t1, t2);
  return {t1, t2, t3};

  function getT1() {
    return h();

    function h() {
      for (var n = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', t = n.length, e = '', i = 0; i < 32; i++) e += n.charAt(Math.floor(Math.random() * t));
      return e;
    }
  }

  function getT2() {
    return Math.floor(getMoment().valueOf() / 1000);

    // return y();

    function y() {return Date.parse(new Date).toString().substr(0, 10);}
  }

  function getT3(t1, t2) {
    // var l = o + c + A.state.user.code + Object(En.g)();
    // return On()(l).toUpperCase();
    return CryptoJS.MD5(t1 + t2 + void 0 + v()).toString().toUpperCase();

    function v() {
      return '0evb5nafqo2qaf7pu3v6xq6dx5jpvpab';
    }
  }
}

module.exports = XinruiYear;
