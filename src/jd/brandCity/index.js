const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class BrandCity extends Template {
  static scriptName = 'BrandCity';
  static scriptNameDesc = '永乐神仙书院';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static apiOptions = {
    options: {
      headers: {
        origin: 'https://h5.m.jd.com',
      },
    },
    signData: {
      appid: 'publicUseApi',
      body: {
        "token": "jd17919499fb7031e5",
      }
    },
  };

  static isSuccess(data) {
    return this._.property('retCode')(data) === '200';
  };

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'mcxhd_brandcity_taskList',
        paramFn: () => ({lat: process.env.JD_BC_POSITION_LAT, lng: process.env.JD_BC_POSITION_LNG}),
        async successFn(data, api) {
          // writeFileJSON(data, 'mcxhd_brandcity_taskList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('result.tasks')(data) || [];
          for (let {
            status,
            taskId,
            maxTimes,
            times,
            waitDuration,
            subItem,
          } of taskList) {
            if (status === 2 || ['4'/*开会员*/].includes(taskId)) continue;

            let list = subItem.map(o => _.pick(o, ['itemToken']));

            if (taskId === '9'/*助力*/) {
              const shareCodeTaskList = self.shareCodeTaskList;
              let itemToken = subItem[0].itemToken;
              if (!shareCodeTaskList.includes(itemToken)) {
                shareCodeTaskList.splice(self.currentCookieTimes, 0, itemToken);
              }
              list = self.getShareCodeFn().map(itemToken => ({itemToken}));
              times = 0;
              maxTimes = list.length;
            }

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'mcxhd_brandcity_doTask',
        paramFn: o => o,
        async successFn(data, api) {
          return data;
        },
      },
      doWaitTask: {
        name: 'qryViewkitCallbackResult',
        paramFn: (o, data) => [{
          dataSource: 'newshortAward',
          method: 'getTaskAward',
          reqParams: JSON.stringify({'taskToken': data.result.taskToken}),
        }, {appid: ''}],
      },
      afterGetTaskList: {
        name: 'mcxhd_brandcity_homePage',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          self.log(`当前金币： ${data.result.userCoinNum}`);
        }
      }
    };
  };

  static initShareCodeTaskList(shareCodes) {
    // 处理
  }
}

module.exports = BrandCity;
