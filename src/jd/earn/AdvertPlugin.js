const Earn = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const urlData = require('./patchAdverPluginUrl');
const {getEnv} = require('../../lib/env');

class EarnAdvertPlugin extends Earn {
  static scriptName = 'EarnAdvertPlugin';
  static scriptNameDesc = '快来一起领红包吧(3人)';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static concurrent = true;
  static concurrentOnceDelay = 0;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
      form: {
        appid: 'wx_ad',
        loginType: 1,
        loginWQBiz: 'advert-plugin',
        body: {'lt': 'wq', 'an': 'advert-activity'},
      },
      headers: {
        origin: 'https://prodev.m.jd.com',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001028) NetType/WIFI Language/zh_CN miniProgram',
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;

    if (_.isEmpty(urlData)) return api.log('没有可用的urlData');

    const targetCookieTimes = getEnv('JD_EARNADVERTPLUGIN_TARGET_INVITEID_INDEX');
    if (_.isNil(targetCookieTimes)) return api.log('未配置 JD_EARNADVERTPLUGIN_TARGET_INVITEID_INDEX');
    let inviteId = getEnv('JD_EARNADVERTPLUGIN_INVITEID', targetCookieTimes);
    if (targetCookieTimes === api.currentCookieTimes) {
      inviteId = getEnv('JD_EARNADVERTPLUGIN_OTHER_INVITEID');
    }
    if (!inviteId) return api.log('获取不到指定的 JD_EARNADVERTPLUGIN_INVITEID');

    await self.beforeRequest(api);

    const dayStart = self.getNowHour() === 12;
    let failUrlData = [];

    if (!dayStart) {
      return handleDo(urlData);
    }

    // 避免助力不上, 循环多次
    for (let i = 0; i < 4; i++) {
      handleDo(i > 2 ? failUrlData : urlData);
      await sleep(60);
    }

    async function handleDo(list, loopMaxTimes = 3) {
      if (loopMaxTimes < 0) return;
      failUrlData = [];
      for (const item of list) {
        const {activityId, taskId} = item;
        if (!activityId) continue;
        const {resultCode} = await handleDoShare(activityId, taskId);
        // {"message":"服务内部错误","resultCode":"A000","success":false}
        // {"message": "依赖上游错误","resultCode": "A002","success": false}
        // 活动火爆, 需要重新助力
        if (['A000', 'A002'].includes(resultCode)) {
          failUrlData.push(item);
        }
      }
      if (!_.isEmpty(failUrlData)) {
        await handleDo(_.concat(failUrlData), --loopMaxTimes);
      }
    }


    async function handleDoShare(activityId, taskId) {
      return api.doFormBody('advertPlugin_taskAssist', {activityId, taskId, inviteId}).then(data => {
        const {message, result} = data;
        const msgs = [
          `[${activityId}]`,
          message,
        ];
        if (result) {
          const {friend = inviteId, msg} = result;
          msgs.push(`助力 ${friend}, 结果为: ${msg}`);
        }
        api.log(msgs.join(' '));
        return data;
      });
    }
  }
}

singleRun(EarnAdvertPlugin).then();

module.exports = EarnAdvertPlugin;
