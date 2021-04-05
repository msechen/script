const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const appid = 'swat_miniprogram';
let floorToken;

class EarnJingDou extends Template {
  static scriptName = 'EarnJingDou';
  static scriptNameDesc = '做任务天天领豆豆';
  static shareCodeTaskList = [];
  static needInApp = false;
  static concurrent = true;
  static concurrentOnceDelay = 0;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      form: {
        appid,
        body: {'channel': 'SWAT_RED_PACKET', 'systemId': '19'},
      },
      qs: {
        fromType: 'wxapp',
      },
      headers: {
        referer: 'https://servicewechat.com/wxa5bf5ee667d91626/129/page-frame.html',
      },
    },
  };

  static isSuccess(data) {
    return _.property('success')(data);
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'vviptask_receive_list',
        paramFn: () => ({'withAutoAward': 1}),
        async successFn(data, api) {
          // writeFileJSON(data, 'vviptask_receive_list.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const {
            redPacketOpenFlag,
            redPacketRewardTakeFlag,
            beanAmountTakeMinLimit,
            currActivityBeanAmount,
          } = await getPageData(api);
          if (redPacketRewardTakeFlag) return;
          if (currActivityBeanAmount >= beanAmountTakeMinLimit) {
            await takeReward(api).then(data => {
              if (!self.isSuccess(data)) return;
              self.log(`获取到豆豆： ${data.data.rewardBeanAmount}`);
            });
            return [];
          }

          // 开红包
          if (!redPacketOpenFlag) {
            await openRedPacket(api);
          }

          const result = [];

          const taskList = _.property('data')(data) || [];
          for (let {
            taskDataStatus,
            id,
            title,
          } of taskList) {
            if (taskDataStatus === 3/* || ['京豆兑彩', '话费充值'].includes(title)*/) continue;

            let list = [id];

            (taskDataStatus === 0) && await api.doFormBody('vviptask_receive_getone', {ids: id});

            result.push({list, option: {waitDuration: 1}});
          }

          return result;
        },
      },
      doTask: {
        name: 'vviptask_reach_task',
        paramFn: taskIdEncrypted => ({taskIdEncrypted}),
      },
      doWaitTask: {
        name: 'vviptask_reward_receive',
        paramFn: idEncKey => ({idEncKey}),
      },
    };
  }
}

function getPageData(api) {
  return api.doGet('pg_channel_page_data', {
    appid,
    body: {'paramData': {'token': '3b9f3e0d-7a67-4be3-a05f-9b076cb8ed6a'}},
  }).then(async data => {
    // writeFileJSON(data, 'pg_channel_page_data.json', __dirname);
    floorToken = _.property('data.floorInfoList[0].token')(data);
    return _.property('data.floorInfoList[0].floorData.userActivityInfo')(data);
  });
}

function invoke(api, dataSourceCode) {
  return api.doGet('pg_interact_interface_invoke', {
    appid,
    body: {floorToken, dataSourceCode, 'argMap': {}},
  }).then(data => {
    // writeFileJSON(data, 'pg_interact_interface_invoke.json', __dirname);
  });
}

function openRedPacket(api) {
  return invoke(api, 'openRedPacket');
}

function takeReward(api) {
  return invoke(api, 'takeReward');
}

singleRun(EarnJingDou).then();

module.exports = EarnJingDou;
