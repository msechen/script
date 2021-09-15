const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getMoment, getNowDate} = require('../../lib/moment');

class StatisticsRedEnvelope extends Template {
  static scriptName = 'StatisticsRedEnvelope';
  static scriptNameDesc = '红包统计';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInApp = false;
  static times = 1;

  static async doMain(api, shareCodes) {
    const self = this;

    const {useRedInfo: {redList}} = await api.doGetUrl('https://m.jingxi.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=1&sceneval=2&g_login_type=1&g_ty=ls', {
      qs: {
        _: getMoment().valueOf(),
      },
      headers: {
        referer: 'https://st.jingxi.com/my/redpacket.shtml',
      },
    }).then(data => data.data);
    const redSorted = {
      jd: {
        limitName: '京东商城',
      },
      jx: {
        limitName: '京喜',
      },
      lite: {
        limitName: '极速版',
      },
      noLimit: {
        limitName: '',
      },
    };
    const todayExpireTime = getMoment(`${getNowDate()} 23:59:59`).valueOf() / 1000;
    const sumRedList = list => formatNumber(_.sum(list.map(o => +o['balance'])) || 0);

    Object.values(redSorted).forEach(o => {
      const {limitName} = o;
      const targetReds = redList.filter(({orgLimitStr}) => limitName ? orgLimitStr.match(limitName) : !orgLimitStr);
      const number = sumRedList(targetReds);
      const expireReds = targetReds.filter(o => o['endTime'] === todayExpireTime);
      const expire = sumRedList(expireReds);
      _.assign(o, {number, expire});
    });
    const {noLimit: {number: noLimitNumber, expire: noLimitExpire}} = redSorted;

    for (const [key, {limitName, number, expire}] of Object.entries(redSorted)) {
      const name = limitName ? `${limitName}(仅限)` : '无限制';
      const needSum = key !== 'noLimit';
      api.log(`${name}🧧: ${format(number, noLimitNumber, needSum)}, 今日过期: ${format(expire, noLimitExpire, needSum)}`);
      await sleep();
    }

    function format(a, b, needSum = true) {
      return needSum ? `${formatNumber(a + b)}(${a})` : a;
    }
  }
}

function formatNumber(num) {
  return +(num.toFixed(2));
}

singleRun(StatisticsRedEnvelope).then();

module.exports = StatisticsRedEnvelope;
