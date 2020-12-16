const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class SignBeanGroup extends Template {
  static scriptName = 'SignBeanGroup';
  static scriptNameDesc = '全民抢豆';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  // static times = 1;

  static apiOptions = {
    signData: {
      appid: 'ld',
      client: 'apple',
      clientVersion: '9.3.0',
    },
  };

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = self._;

    self.isFirstLoop() && await api.doFormBody('signGroupHit', {activeType: 2});
    const {groupCode, shareCode} = await api.doFormBody('signBeanGroupStageIndex').then(data => data.data) || {};
    if (shareCode) {
      !self.shareCodeTaskList.some(o => o.shareCode === shareCode) && self.shareCodeTaskList.push({
        groupCode,
        shareCode,
      });

      self.isFirstLoop() && await signGroupHelp(groupCode, shareCode, '1');
    }

    const shareList = self.getShareCodeFn();
    shareList.length && await self.loopCall(shareList, {
      maxTimes: shareList.length,
      async firstFn({groupCode, shareCode}) {
        return signGroupHelp(groupCode, shareCode);
      },
    });

    if (self.isLastLoop()) {
      const sumBeanNumStr = await api.doFormBody('signBeanGroupStageIndex').then(data => _.property('data.sumBeanNumStr')(data));
      sumBeanNumStr && self.log(`获取到豆豆: ${sumBeanNumStr}`);
    }

    async function signGroupHelp(groupCode, shareCode, isTask) {
      return api.doFormBody('signGroupHelp', {activeType: 2, activeId: '84', groupCode, shareCode, isTask});
    }
  }
}

module.exports = SignBeanGroup;
