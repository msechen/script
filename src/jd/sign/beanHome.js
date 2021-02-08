const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class SignBeanHome extends Template {
  static scriptName = 'SignBeanHome';
  static scriptNameDesc = '签到豆豆首页';
  static times = 1;

  static apiOptions = {
    signData: {
      appid: 'ld',
    },
  };

  static isSuccess(data) {
    return _.property('code')(data) === '0';
  };

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'findBeanHome',
        paramFn: () => ({'rnVersion': '4.7', 'rnClient': '2', 'source': 'AppHome'}),
        async successFn(data, api) {
          // writeFileJSON(data, 'findBeanHome.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.floorList')(data) || [];
          for (let {
            type,
            maxTimes,
            stageList,
          } of taskList) {
            if (!['3', '4'].includes(type)) continue;

            let list = [];
            if (type === '3') {
              list.push({type, itemId: 'zddd'});
            } else if (type === '4') {
              list = stageList.filter(o => !o.viewed).map(o => ({itemId: o.stageId, type: `${type}_${o.stageId}`}));
            }
            maxTimes = list.length;

            result.push({list, option: {maxTimes, waitDuration: 3}});
          }

          return result;
        },
      },
      doTask: {
        name: 'beanHomeTask',
        paramFn: o => _.assign({awardFlag: false, source: 'home'}, o),
      },
      doRedeem: {
        name: 'beanHomeTask',
        paramFn: () => ({awardFlag: true, source: 'home'}),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          self.log(`获得豆豆: ${_.property('data.beanNum')(data)}`);
        },
      },
    };
  };
}

module.exports = SignBeanHome;
