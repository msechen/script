const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class DreamFactory extends Template {
  static scriptName = 'DreamFactory';
  static scriptNameDesc = '京喜工厂';
  static shareCodeTaskList = [];
  static times = 1;

  static apiOptions = {
    signData: {},
  };

  static isSuccess(data) {
    return this._.property('ret')(data) === 0;
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    const nowHour = self.getNowHour();
    const shareCode = shareCodes[nowHour - 6];
    if (shareCode) return handleAssistFriend(shareCode);

    // 如果没有找到返回码则遍历
    for (const shareCode of shareCodes) {
      const stop = await handleAssistFriend(shareCode);
      if (stop) break;
    }


    async function handleAssistFriend(sharepin) {
      return api.doUrl('https://m.jingxi.com/dreamfactory/friend/AssistFriend', {
        headers: {
          referer: 'https://st.jingxi.com/pingou/dream_factory/index.html',
        },
        form: {
          zone: 'dream_factory',
          sharepin: sharepin,
          sceneval: 2,
          g_login_type: 1,
        },
      }).then(data => {
        self.log(data.msg);
        if (self.isSuccess(data)) return true;
      });
    }
  }
}

module.exports = DreamFactory;
