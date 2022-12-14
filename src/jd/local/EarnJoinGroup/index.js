const Template = require('../../base/template');


const {sleep, writeFileJSON, readFileJSON, singleRun, replaceObjectMethod} = require('../../../lib/common');
const {getEnv} = require('../../../lib/env');
const _ = require('lodash');

// 获取数据并清空
const originBodyPath = require('path').resolve(__dirname, './originBody.json');
const originBody = readFileJSON(originBodyPath);
require('fs').writeFileSync(originBodyPath, '');

class EarnJoinGroup extends Template {
  static scriptName = 'EarnJoinGroup';
  static scriptNameDesc = '参团(小程序)';
  static dirname = __dirname;
  static times = 1;
  static commonParamFn = () => ({});
  static cookieKeys = ['wq_uin', 'wq_skey'];
  static needInApp = false;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/superFission',
      qs: {
        g_ty: 'ls',
        g_tk: '1844967756',
      },
      form: {
        appid: 'hot_channel',
        loginType: 11,
      },
      headers: {
        // TODO user-agent 应该是不用的, 先用着
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001028) NetType/WIFI Language/zh_CN miniProgram',
      },
    },
  };

  static isSuccess(data) {
    return _.property('subCode')(data) === 0;
  }

  static async beforeRequest(api) {
    const self = this;
    replaceObjectMethod(api, 'doPath', ([functionId, form]) => {
      form = form || {};
      form['functionId'] = `superFission_${functionId}`;
      return [functionId, form];
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;

    const shareCookieIndex = getEnv('JD_EARNJOINGROUP_SHARE_COOKIE_INDEX', 0, -1);

    if (shareCookieIndex < 0) return console.log('请手动指定 cookie index');

    const {activeId, groupId} = originBody;

    // /openGroup 开团接口

    if (!activeId || !groupId) {
      return api.log('活动不存在');
    }

    await self.beforeRequest(api);

    _.merge(api.options, {
      form: {
        body: {activeId, groupId},
      },
      headers: {referer: 'https://servicewechat.com/wx91d27dbf599dff74/665/page-frame.html'},
    });

    const mainPageResult = await api.doPath('mainPage');
    if (!self.isSuccess(mainPageResult)) {
      return api.log(`mainPage 获取失败: ${mainPageResult['msg']}`);
    }

    const {
      activityInfo: {
        shareInfo: {
          shareTitle,
        },
        showContent: {
          browseCreateTaskDuration,
          browseTaskDuration,
          taskStatus,
        },
      },
      groupInfo = {},
      basicGroupInfo: {
        groupStatus,
      },
      prizeEnough,
      prizeRemain,
      userInfo: {
        canJoinGroup,
        canJoinGroupUserLabel,
        noJoinGroupReason,
      },
    } = _.get(mainPageResult, 'data');

    const log = str => api.log(`[${shareTitle}-${groupId}] ${str}`);

    if (groupStatus === 3) {
      return log(`已成功`);
    }
    const {groupType} = groupInfo;
    if ([1/*团长*/, 2/*团员*/].includes(groupType)) {
      return log(`已在团中, 无需重复参加`);
    }
    if (noJoinGroupReason === '1024' || canJoinGroup < canJoinGroupUserLabel || canJoinGroup === 0) {
      return log(`已没次数参加`);
    }
    // if (!prizeRemain || !prizeEnough) {
    //   return log(`已结束`);
    // }
    // 参团
    // await sleep(browseCreateTaskDuration || 2);
    // const doTaskSucceed = await api.doPath('doTask').then(self.isSuccess);
    // if (!doTaskSucceed) return log('doTask 失败');
    await sleep(browseTaskDuration + 2);
    // 参团
    await api.doPath('joinGroup').then(data => {
      if (self.isSuccess(data)) {
        log('参团成功');
      } else {
        log(`参团失败(subCode: ${data.subCode}, message: ${data.message})`);
      }
    });
  }
}

singleRun(EarnJoinGroup).then();

module.exports = EarnJoinGroup;
