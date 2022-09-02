const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getEnv} = require('../../lib/env');

const shareCookieIndex = getEnv('JD_CASHAPPLET_SHARE_COOKIE_INDEX', 0, -1);
const shareBodyData = {};

class CashApplet extends Template {
  static scriptName = 'CashApplet';
  static scriptNameDesc = '领现金-小程序';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static activityEndTime = '';
  static doneShareTask = shareCookieIndex < 0;
  static times = this.doneShareTask ? 1 : 2;
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

          const {taskInfos: taskList, inviteCode, shareDate, limitTimeRedPacket} = _.get(data, 'data.result');

          if (limitTimeRedPacket) {
            let {canJoin, inStock, receiveStatus, redPacketList, redPacketProcess} = limitTimeRedPacket;
            if (canJoin === '1' && inStock === '1') {
              if (shareCookieIndex === api.currentCookieIndex) {
                if (receiveStatus === '0') {
                  // 开启
                  await api.doFormBody('cash_join_limited_redpacket', _.pick(_.maxBy(redPacketList, 'level'), ['id', 'level'])).then(data => {
                    self.isSuccess(data) && (receiveStatus = '1');
                  });
                }
                if (receiveStatus === '1') {
                  _.assign(shareBodyData, {inviteCode, shareDate});
                  const _process = _.get(redPacketProcess, 'process', []);
                  for (const {node, status} of _process) {
                    if ([0/*未助力*/, 2/*已获取*/].includes(status)) continue;
                    await api.doFormBody('cash_open_limited_redpacket', {node}).then(data => {
                      self.isSuccess(data) && api.log(`获得 ${_.get(data, 'data.result.amountStr')}`);
                    });
                  }

                  // 不需要助力
                  if (!_.isEmpty(_process) && _.every(_process, ({status}) => status === 2)) {
                    delete shareBodyData.inviteCode;
                  }
                }
              }
            }
          }

          if (shareBodyData.inviteCode && self.isLastLoop() && shareBodyData.inviteCode !== inviteCode) {
            await api.doFormBody('redpack_limited_assist', shareBodyData).then(data => {
              api.log(`${shareBodyData.inviteCode}[${shareCookieIndex}] ${_.get(data, 'data.result.limitTimeAssist.tips')}`);
            });
          }

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
