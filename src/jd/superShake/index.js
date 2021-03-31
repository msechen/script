const Template = require('../base/template');

const {sleep, writeFileJSON, matchMiddle} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/2GXPFfQmeLgzZuQCWFZWCtwUqro5/index.html';

const appId = '1EFRZyg';

class SuperShake extends Template {
  static scriptName = 'SuperShake';
  static scriptNameDesc = '超级摇一摇';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static isWh5 = true;

  static apiOptions = {
    options: {
      form: {
        body: {appId},
      },
      headers: {
        referer: indexUrl,
      },
    },
  };

  // 抽奖的taskId
  static lotTaskId;

  static async beforeRequest(api) {
    // 更新 appId
    return api.doGetUrl(indexUrl, {
      headers: {
        Cookie: '',
      },
    }).then(data => {
      const newAppId = matchMiddle(data, {reg: /"taskAppId":"(\w*)",/});
      if (newAppId === appId) return;
      api.options.form.body.appId = newAppId;
    });
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'fc_getHomeData',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'fc_getHomeData.json', __dirname);

          if (!self.isSuccess(data)) return [];

          self.lotTaskId = _.property('data.result.lotTaskId')(data);

          const result = [];

          const taskList = _.property('data.result.taskVos')(data) || [];
          for (let {
            status,
            taskId,
            maxTimes,
            times,
            waitDuration,

            shoppingActivityVos,
            brandMemberVos,
            followShopVo,
          } of taskList) {
            if (status === 2 || [].includes(taskId)) continue;

            let list = _.map(shoppingActivityVos || brandMemberVos || followShopVo || [], o =>
              _.assign(_.pick(o, ['itemId', 'taskToken']), {taskId, actionType: waitDuration ? 1 : 0}));

            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'fc_collectScore',
        paramFn: o => o,
      },
      doWaitTask: {
        name: 'fc_collectScore',
        paramFn: o => _.assign(o, {actionType: 0}),
      },
      doRedeem: {
        name: 'fc_getLotteryResult',
        paramFn: () => ({taskId: self.lotTaskId}),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const {ext, prizeName, quantity} = _.property('data.result.myAwardVo.jBeanAwardVo')(data) || {};
          if (!quantity) return;
          self.log(`${ext}获得${quantity} ${prizeName}`);
        },
        repeat: true,
      },
    };
  }
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  SuperShake.start(getCookieData()).then();
}

module.exports = SuperShake;
