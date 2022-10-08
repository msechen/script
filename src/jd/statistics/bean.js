const Template = require('../wq/index');

const {replaceObjectMethod, sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');
const {} = require('../../lib/common');

const indexUrl = 'https://wqsh.jd.com/promote/201801/bean/mybean.html';

class StatisticsBean extends Template {
  static scriptName = 'StatisticsBean';
  static scriptNameDesc = '豆豆统计';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static activityEndTime = '';

  static customApiOptions = {
    uri: 'https://wq.jd.com',
    headers: {
      referer: indexUrl,
    },
  };


  static async beforeRequest(api) {
    replaceObjectMethod(api, 'doGetPath', ([functionId, qs, options]) => {
      qs = {
        ...qs,
        _: getMoment().valueOf(),
        g_login_type: 0,
        g_tk: 239007826,
        g_ty: 'ls',
      };
      return [functionId, qs, options];
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;

    const loginSuccess = await self.mLoginWeb(api, indexUrl);
    if (!loginSuccess) return;
    await self.beforeRequest(api);

    const accumulateFn = (accumulator, currentValue) => accumulator + currentValue;

    // 获取用户信息
    const total = await api.doGetPath('user/info/QueryJDUserInfo', {sceneid: '11110'}).then(_.property('base.jdNum'));
    // 获取所有列表
    const detailList = await api.doGetPath('activeapi/queryuserjingdoudetail', {pagesize: '10'}).then(_.property('detail')) || [];
    const prevDate = getMoment().subtract(1, 'days').format('YYYY-MM-DD');
    const preMount = _.map(detailList.filter(o => o['createdate'].replace(/\//g, '-').match(prevDate)), 'amount')
    .reduce(accumulateFn);
    api.log(`总数: ${total}, 昨天(${prevDate.substring(5)})的收益: ${preMount}`);
    // 获取即将过期列表
    const expireList = await api.doGetPath('activep3/singjd/queryexpirejingdou').then(_.property('expirejingdou')) || [];
    if (_.isEmpty(expireList)) return;
    const sevenDayExpire = _.map(expireList, 'expireamount').reduce(accumulateFn);
    const formatExpire = expireList.map(o => `${getMoment(o['time'] * 1000).format('MM-DD')}(${o['expireamount']})`);
    const expireMsg = [
      `最近7天过期统计: ${sevenDayExpire}`,
    ];
    if (sevenDayExpire > 0) {
      expireMsg.push(`具体: ${formatExpire.join(', ')}`);
    }
    api.log(expireMsg.join(', '));
  }
}

singleRun(StatisticsBean).then();

module.exports = StatisticsBean;
