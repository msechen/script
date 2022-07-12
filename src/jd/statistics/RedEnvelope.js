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

    const getRedInfo = () => api.doGetUrl('https://m.jingxi.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=1&sceneval=2&g_login_type=1&g_ty=ls', {
      qs: {
        _: getMoment().valueOf(),
      },
      headers: {
        referer: 'https://st.jingxi.com/my/redpacket.shtml',
      },
    }).then(_.property('data'));

    let redList = _.get(await getRedInfo(), 'useRedInfo.redList', []);
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
    const getExpireTime = (day = 1) => {
      const nowMoment = getMoment();
      if (day > 0) {
        nowMoment.add(day, 'day');
      } else {
        nowMoment.subtract(day, 'day');
      }
      return nowMoment.set({
        h: 0,
        m: 0,
        s: 0,
        millisecond: 0,
      }).valueOf() / 1000;
    };
    const sumRedList = list => formatNumber(_.sum(list.map(o => +o['balance'])) || 0);

    for (let i = 1; i < 6; i++) {
      await calculate(i);
    }

    _.forEach(redSorted, ({msgs}, key) => {
      if (_.isEmpty(msgs)) return;
      api.log(msgs.map(v => _.isString(v) ? v : v.format()).join(', '));
    });

    async function calculate(day) {
      Object.values(redSorted).forEach(o => {
        const {limitName, msgs = []} = o;
        const targetReds = redList.filter(({orgLimitStr}) => limitName ? orgLimitStr.match(limitName) : !orgLimitStr).filter(({beginTime}) => beginTime < getExpireTime(-2));
        const number = sumRedList(targetReds);
        const expireReds = targetReds.filter(o => o['endTime'] < getExpireTime(day));
        const expire = sumRedList(expireReds);
        _.assign(o, {number, expire, msgs});
      });
      const {noLimit: {number: noLimitNumber, expire: noLimitExpire}} = redSorted;

      for (const [key, object] of Object.entries(redSorted)) {
        const {limitName, number, expire, msgs} = object;
        if (['jx', 'lite', 'noLimit'].includes(key)) continue;
        const name = limitName ? `${limitName}(仅限)` : '无限制';
        const needSum = key !== 'noLimit';
        if (_.isEmpty(msgs)) {
          msgs.push(`${name}: ${format(number, noLimitNumber, needSum)}`);
        }
        const expireDay = getMoment().add(day - 1, 'day').format('MM-DD');
        const expireNum = format(expire, noLimitExpire, needSum);
        if (_.get(_.last(msgs), 'expireNum') === expireNum) {
          continue;
        }
        msgs.push({
          expireDay,
          expireNum,
          format() {
            return `${this.expireDay}过期: ${this.expireNum}`;
          },
        });
      }
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
