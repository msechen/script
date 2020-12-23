const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class VipClubShake extends Template {
  static scriptName = 'VipClubShake';
  static scriptNameDesc = '领豆豆-摇一摇';
  static shareCodeTaskList = [];
  static times = 1;
  static commonParamFn = qs => [void 0, void 0, {qs}];

  static apiOptions = {
    options: {
      method: 'GET',
      qs: {
        appid: 'vip_h5',
      },
      headers: {
        'referer': 'https://vip.m.jd.com',
      },
    },
  };

  static isSuccess(data) {
    return this._.property('success')(data);
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    const getTaskFn = (info) => JSON.stringify({info, withItem: true});
    return {
      // 获取一次免费次数
      beforeGetTaskList: {
        name: 'vvipclub_receive_lottery_times',
        paramFn: self.commonParamFn.bind(0, {
          appid: 'sharkBean',
        }),
      },
      // 获取任务列表
      getTaskList: {
        name: 'vvipclub_lotteryTask',
        paramFn: self.commonParamFn.bind(0, {
          body: getTaskFn('browseTask'),
        }),
        async successFn(data, api) {
          // writeFileJSON(data, 'vvipclub_lotteryTask.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const attentionTaskData = await api.doFormBody('vvipclub_lotteryTask', ...self.commonParamFn({body: getTaskFn('attentionTask')}));

          const result = [];

          for (let {
            totalPrizeTimes: maxTimes,
            currentFinishTimes: times,
            waitDuration,
            taskItems,
            taskName,
          } of data.data.concat(attentionTaskData.data)) {
            let list = taskItems.map(o => ({
              taskItemId: o.id,
              taskName,
              finish: o.finish,
            }));

            result.push({list, option: {maxTimes, times, waitDuration, isFinishFn: o => o.finish}});
          }

          return result;
        },
      },
      doTask: {
        name: 'vvipclub_doTask',
        paramFn: o => self.commonParamFn({
          body: JSON.stringify(o),
        }),
      },
      // 旧版
      afterGetTaskList: {
        name: 'vvipclub_shaking',
        paramFn: self.commonParamFn.bind(0, {
          body: JSON.stringify({type: '0'}),
        }),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const rewardBeanAmount = _.property('data.prizeBean.count')(data);
          rewardBeanAmount && self.log(`获取到豆豆: ${rewardBeanAmount}`);
          if (!_.property('data.luckyBox.freeTimes')(data)) return false;
        },
        repeat: true,
      },
      // 新版
      doRedeem: {
        name: 'vvipclub_shaking_lottery',
        paramFn: self.commonParamFn.bind(0, {
          appid: 'sharkBean',
        }),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const rewardBeanAmount = _.property('data.rewardBeanAmount')(data);
          rewardBeanAmount && self.log(`获取到豆豆: ${rewardBeanAmount}`);
          if (!_.property('data.remainLotteryTimes')(data)) return false;
        },
        repeat: true,
      },
    };
  };
}

module.exports = VipClubShake;
