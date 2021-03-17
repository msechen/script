const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');

const defaultApiNames = {
  getTaskList: 'interact_template_getHomeData',
  doTask: 'harmony_collectScore',
  doWaitTask: 'harmony_collectScore',
  doRedeem: 'interact_template_getLotteryResult',
};

class HarmonyTemplate extends Template {
  static scriptName = 'HarmonyTemplate';
  static times = 2;
  static isWh5 = true;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: 'appId'});
  static skipTaskIds = [8/*开会员*/];
  static shareTaskId = 6;
  static redeemWithTaskId = false;

  static apiNames = {};

  static getApiNames() {
    return this._.assign({}, defaultApiNames, this.apiNames);
  };

  static async afterDoWaitTask(data, api) {
  }

  static logAfterRedeem(data) {
    const self = this;
    const _ = this._;

    // 豆豆
    const beanInfo = _.property('data.result.userAwardsCacheDto.jBeanAwardVo.prizeName')(data);
    beanInfo && self.log(`获取到: ${_.property('data.result.userAwardsCacheDto.jBeanAwardVo.quantity')(data)} ${beanInfo}`);
    // 红包
    const redPacketVO = _.property('data.result.userAwardsCacheDto.redPacketVO')(data);
    redPacketVO && self.log(`获取到: ${_.property('data.result.userAwardsCacheDto.redPacketVO.name')(data)}`);
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    const result = {
      // 获取任务列表
      getTaskList: {
        name: self.getApiNames().getTaskList,
        paramFn: self.commonParamFn,
        successFn: async (data) => {

          if (!self.isSuccess(data)) {
            self.log('活动已过期！！！');
            return [];
          }

          const result = [];

          for (let {
            subTitleName,
            status,
            taskId,
            maxTimes,
            times,
            waitDuration,
            simpleRecordInfoVo,
            productInfoVos,
            followShopVo,
            shoppingActivityVos,
            browseShopVo,
            assistTaskDetailVo
          } of _.property('data.result.taskVos')(data) || []) {
            if ([2, 4].includes(status) || self.skipTaskIds.includes(taskId)) continue;

            waitDuration = waitDuration || (subTitleName.match(/\d*s/) ? +subTitleName.match(/\d*s/)[0].replace(/s$/, '') : 0);

            let list = _.concat(simpleRecordInfoVo || productInfoVos || followShopVo || shoppingActivityVos || browseShopVo || []);

            // 邀请助力
            if (taskId === self.shareTaskId) {
              const shareCodeTaskList = self.shareCodeTaskList;
              if (!_.map(shareCodeTaskList, 'taskToken').includes(assistTaskDetailVo.taskToken)) {
                shareCodeTaskList.push(assistTaskDetailVo);
              }
              list = self.getShareCodeFn();
            }

            list = list.map(o => _.assign({
              taskId,
              actionType: waitDuration ? 1 : 0,
            }, _.pick(o, ['itemId', 'taskToken']), self.commonParamFn()));

            if (list.length < maxTimes) {
              times = 0;
              maxTimes = list.length;
            }

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: self.getApiNames().doTask,
        paramFn: o => o,
      },
      doWaitTask: {
        name: self.getApiNames().doWaitTask,
        paramFn: o => _.assign(o, {actionType: 0}),
        successFn(data, api) {
          return self.afterDoWaitTask(data, api);
        },
      },
      afterGetTaskList: {
        name: self.getApiNames().afterGetTaskList,
        paramFn: () => _.assign(self.commonParamFn(), self.redeemWithTaskId ? {taskId: self.shareTaskId} : {}),
        successFn: data => {
          if (!self.isSuccess(data)) return false;
        },
        repeat: true,
      },
      doRedeem: {
        name: self.getApiNames().doRedeem,
        paramFn: () => _.assign(self.commonParamFn(), self.redeemWithTaskId ? {taskId: self.shareTaskId} : {}),
        successFn: data => {
          if (!self.isSuccess(data)) return false;
          self.logAfterRedeem(data);
        },
        repeat: true,
      },
    };

    Object.keys(result).forEach(key => {
      if (!result[key].name) delete result[key];
    });

    return result;
  };
}

module.exports = HarmonyTemplate;
