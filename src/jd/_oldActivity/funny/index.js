const Template = require('../../base/SmashUtilsTemplate');

const {sleep, writeFileJSON, singleRun, readFileJSON} = require('../../../lib/common');
const _ = require('lodash');

class Funny extends Template {
  static scriptName = 'Funny';
  static scriptNameDesc = '东东玩家';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static needInAppComplete = false;
  static needInApp = false;
  static maxTaskDoneTimes = 4;
  static defaultShareCodes = [
    'T018v_h1QhgY81XeKR6b1AFjRWn627yB55awQ',
    'T0107a4gE0Ic8AFjRWn627yB55awQ',
  ];

  static skipTaskIds = [5/*邀请好友助力*/, 6/*开通会员*/];
  static indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/WpoxUMaPZw14nb3ZydKcvYwG4yA/index.html';
  static functionIdPrefix = 'funny';
  static needEncryptIds = [
    'collectScore',
  ];
  static needLocalEncryptBody = true;
  static needSelfEncryptBody = true;
  static apiCustomOption = {
    signData: {appid: 'o2_act'},
  };

  static getCharlesForms() {
    return readFileJSON(`../../../charles/chlsj/jd/funny_collectScore/${this.currentCookieTimes}.chlsj`, __dirname);
  }

  static apiNamesOption() {
    const self = this;
    return {
      getTaskList: {
        name: 'getTaskDetail',
      },
      doTask: {
        name: 'collectScore',
        paramFn: o => o,
      },
      doWaitTask: {
        name: 'collectScore',
        paramFn: o => _.assign(o, {actionType: 0}),
      },
      afterGetTaskList: {
        name: 'getHomeData',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;

          const {
            userUnlockedPlaceNum,
            earthInfoList,
          } = _.property('data.result.homeMainInfo.raiseInfo.userEarthInfo')(data);
          await logFormat();

          async function logFormat() {
            const placeInfos = _.flatten(_.map(earthInfoList, 'placeInfos'));
            api.log(`当前已解锁的个数为: ${userUnlockedPlaceNum}, 总数为: ${placeInfos.length}`);
          }
        },
      },
    };
  };

  static async handleDoShare(api) {
    const self = this;
    for (const inviteId of self.getShareCodeFn()) {
      await api.doFormBody('collectScore', {inviteId}).then(data => {
        if (!self.isSuccess(data)) return api.log(_.property('data.bizMsg')(data));
        const {guestNickName} = _.property('data.result')(data);
        api.log(`${guestNickName} 助力其他人成功`);
      });
    }
  }
}

singleRun(Funny).then();

module.exports = Funny;
