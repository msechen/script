const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const _ = require('lodash');

const appid = 'swat_miniprogram';

class EarnJingDou extends Template {
  static scriptName = 'EarnJingDou';
  static scriptNameDesc = '做任务天天领豆豆';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({'channel': 'SWAT_RED_PACKET', 'systemId': '19'});
  static needInApp = false;
  static concurrent = true;
  static concurrentOnceDelay = 0;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      form: {
        appid,
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
        paramFn: () => _.assign({'withAutoAward': 1}, self.commonParamFn()),
        async successFn(data, api) {
          // writeFileJSON(data, 'vviptask_receive_list.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const {
            redPacketOpenFlag,
            redPacketRewardTakeFlag,
            beanAmountTakeMinLimit,
            currActivityBeanAmount
          } = await getPageData(api);
          if (redPacketRewardTakeFlag) return;
          if (currActivityBeanAmount >= beanAmountTakeMinLimit) {
            await takeReward(api).then(data => {
              if (self.isSuccess(data)) return;
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
            id: taskIdEncrypted,
            title,
          } of taskList) {
            if (taskDataStatus === 3/* || ['京豆兑彩', '话费充值'].includes(title)*/) continue;

            let list = [taskIdEncrypted];

            (taskDataStatus === 0) && await api.doFormBody('vviptask_receive_getone', {ids: taskIdEncrypted, ...self.commonParamFn()})

            result.push({list, option: {waitDuration: 1}});
          }

          return result;
        },
      },
      doTask: {
        name: 'vviptask_reach_task',
        paramFn: taskIdEncrypted => ({taskIdEncrypted, ...self.commonParamFn()}),
      },
      doWaitTask: {
        name: 'vviptask_reward_receive',
        paramFn: idEncKey => ({idEncKey, ...self.commonParamFn()}),
      },
    };
  }
}

function getPageData(api) {
  return api.doGet('pg_channel_page_data', {
    appid,
    body: JSON.stringify({'paramData': {'token': '3b9f3e0d-7a67-4be3-a05f-9b076cb8ed6a'}}),
  }).then(data => {
    // writeFileJSON(data, 'pg_channel_page_data.json', __dirname);
    return _.property('data.floorInfoList[0].floorData.userActivityInfo')(data);
  });
}

function invoke(api, dataSourceCode) {
  return api.doGet('pg_interact_interface_invoke', {
    appid,
    body: JSON.stringify({"floorToken": "d7f086c1-5e6e-4572-b8dd-93ec7353d89e", dataSourceCode, "argMap": {}}),
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

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  EarnJingDou.start(getCookieData()).then();
}

module.exports = EarnJingDou;
