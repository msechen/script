const Template = require('../../base/template');


const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const {formatRequest} = require('../../../../charles/websocket/api');
const originData = require('./originData.json');
const _ = require('lodash');

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
      uri: 'https://wq.jd.com/mjgj_active/super_fission',
      qs: {
        g_ty: 'ls',
        g_tk: '1844967756',
      },
      headers: {
        // TODO user-agent 应该是不用的, 先用着
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001028) NetType/WIFI Language/zh_CN miniProgram',
      },
    },
  };

  static isSuccess(data) {
    return _.property('retcode')(data) === 0;
  }

  static async doMain(api, shareCodes) {
    const self = this;

    // TODO 获取当前是否是开团人
    if (api.currentCookieTimes === 0) return;

    // 获取 active_id 和 group_id
    const result = formatRequest(originData.request, originData.response/*一般不需要*/);
    const getUrl = o => _.get(o, 'request.URI');
    const homePageData = result.find(o => getUrl(o).match('SuperFissionHomepage'));
    if (!homePageData) return console.log('活动不存在');
    const searchParams = new URL(`http:/${getUrl(homePageData)}`).searchParams;
    // 活动 id, 每个活动的值是固定的
    const activeId = searchParams.get('active_id');
    // 团 id , 每个人都不一样的
    const groupId = searchParams.get('group_id');
    const referer = _.get(homePageData, 'request.HEADER.referer');

    if (!activeId || !groupId) {
      return api.log('活动不存在');
    }

    _.merge(api.options, {
      qs: {
        active_id: activeId,
        group_id: groupId,
      },
      headers: {referer},
    });

    const {
      active_info: {
        share_info: {
          share_title,
        },
        show_content: {
          task_id,
          browse_create_task_duration,
          browse_task_duration,
          task_status,
        },
      },
      basic_group_info: {
        group_status,
      },
      prize_enough,
      prize_remain,
      user_info: {
        can_create_group,
        can_create_group_userlabel,
        can_join_group,
        can_join_group_userlabel,
      },
    } = await api.doGetPath('SuperFissionHomepage').then(_.property('data'));

    const log = str => api.log(`[${share_title}-${groupId}] ${str}`);

    if (group_status === 3) {
      return log(`已成功`);
    }
    if (can_join_group < can_join_group_userlabel || can_join_group === 0) {
      return log(`已没次数参加`);
    }
    if (!prize_remain || !prize_enough) {
      return log(`已结束`);
    }
    // 参团
    await sleep(browse_create_task_duration || 2);
    const doTaskSucceed = await api.doGetPath('SuperFissionDoTask', {task_id}).then(self.isSuccess);
    if (!doTaskSucceed) return log('doTask 失败');
    await sleep(browse_task_duration + 2);
    // 参团
    const joinGroupSucceed = await api.doGetPath('SuperFissionJoinGroup').then(self.isSuccess);
    log(joinGroupSucceed ? '参团成功' : '参团失败');
  }
}

singleRun(EarnJoinGroup).then();

module.exports = EarnJoinGroup;
