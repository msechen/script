const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getMoment, getNowDate} = require('../../lib/moment');

const {statistics} = require('../../../charles/api');

class StatisticsBean extends Template {
  static scriptName = '豆豆统计';
  static times = 1;

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static async doMain(api) {
    const self = this;
    const _ = this._;

    // 需等待, 避免接口报错
    if (self.currentCookieTimes === 0) await sleep(15);

    let detailList = [];
    const prevDate = getMoment().subtract(1, 'days').format('YYYY-MM-DD');
    for (const form of statistics.getJingBeanBalanceDetail) {
      const list = await api.doForm('getJingBeanBalanceDetail', form).then(data => data.detailList);
      if (_.isEmpty(list)) {
        self.log('统计有问题');
        break;
      }
      detailList = detailList.concat(list);
      if (_.last(list).date < prevDate) break;
    }
    // writeFileJSON(detailList, 'detailList.json', __dirname);

    const allAmount = detailList
    .filter(o => o.date.match(prevDate))
    .map(o => +o.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

    self.log(`${prevDate}(昨天)的收益: ${allAmount}`);
    _.last(detailList).date === prevDate && self.log('统计可能不准, 还有其他数量没统计进来');
  };
}

module.exports = StatisticsBean;
