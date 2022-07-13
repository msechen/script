const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class CashApplet extends Template {
  static scriptName = 'CashApplet';
  static scriptNameDesc = '领现金-小程序';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static activityEndTime = '';
  static times = 1;
  static cookieKeys = ['wq_uin', 'wq_skey'];

  static apiOptions = {
    options: {
      headers: {
        referer: 'https://servicewechat.com/wx91d27dbf599dff74/632/page-frame.html',
        wqreferer: 'http://wq.jd.com/wxapp/pages/cashreward/pages/index/index',
      },
      qs: {
        g_ty: 'ls',
        g_tk: 271620278,
      },
      form: {
        appid: 'CashRewardMiniH5Env',
        clientVersion: '9.2.0',
        loginType: '1',
        loginWQBiz: 'interact',
      },
    },
  };

  static async beforeRequest(api) {
    return !await this.updateWqAuthToken(api);
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'cash_mob_home',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'cash_mod_home.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.result.taskInfos')(data) || [];
          for (let {
            finishFlag: status,
            type,
            desc: taskInfo,
            times: maxTimes,
            doTimes: times,
            duration: waitDuration,
          } of taskList) {
            if (status === 1 || [].includes(type)) continue;

            let list = [{type, taskInfo}];

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'cash_doTask',
        paramFn: o => o,
        async successFn(data, api) {
          if (self.isSuccess(data)) {
            api.log(`完成任务 ${data.data.result.name}`);
          } else {
            api.log(data);
          }
        },
      },
    };
  }
}

singleRun(CashApplet).then();

module.exports = CashApplet;
