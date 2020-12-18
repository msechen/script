const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class JxCfd extends Template {
  static scriptName = 'JxCfd';
  static scriptNameDesc = '京喜财富岛';
  static shareCodeTaskList = [];
  static times = 1;
  static needInJxApp = true;

  static apiOptions = {
    signData: {},
    options: {
      uri: 'https://m.jingxi.com',
      headers: {
        referer: 'https://st.jingxi.com/fortune_island/index.html',
      },
      qs: {
        strZone: 'jxcfd',
        // bizCode: 'jxcfd',
        // source: 'jxcfd',
        sceneval: '2',
        // g_login_type: 1,
        // g_ty: 'ls',
      },
    },
  };

  static isSuccess(data) {
    return this._.property('iRet')(data) === 0;
  }

  static async doMain(api, shareCodes) {
    const self = this;
    const _ = this._;

    const {SceneList} = await api.doPath('jxcfd/user/QueryUserInfo');
    const dwSceneId = Object.keys(SceneList || {})[0] || 1001;

    for (const shareCode of shareCodes) {
      await handleShare(shareCode);
    }

    async function handleShare(strShareId) {
      return api.doPath('jxcfd/user/JoinScene', void 0, {
        qs: {
          strShareId,
          dwSceneId,
        },
      }).then(data => {
        let msg = `助力结果: ${data.sErrMsg}`;
        data.strNick && (msg += `, 名字是${data.strNick}`);
        self.log(msg);
      });
    }
  }

}

module.exports = JxCfd;
