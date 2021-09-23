const Zoo = require('./Zoo');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/WpoxUMaPZw14nb3ZydKcvYwG4yA/index.html';

// 20210916-20211012
class Funny extends Zoo {
  static scriptName = 'Funny';
  static scriptNameDesc = '东东玩家';
  static shareCodeTaskList = [];
  static doneShareTask = false;

  static needEncrypt = false;
  static functionIdPrefix = 'funny';
  static ssInitData = {extraData: {log: '', sceneid: 'HWJhPageh5'}, random: '43136926'};
  static skipTaskIds = [5/*邀请好友助力*/, 6/*开通会员*/];
  static defaultShareCodes = [
    'T018v_h1QhgY81XeKR6b1AFjRWn627yB55awQ',
    'T0107a4gE0Ic8AFjRWn627yB55awQ',
  ];

  static needOriginH5 = true;
  static apiOptions = {
    options: {
      qs: {
        appid: 'o2_act',
      },
    },
  };

  static async getUserEarthInfo(api) {
    return api.doFormBody('getHomeData').then(_.property('data.result.homeMainInfo.raiseInfo.userEarthInfo'));
  }

  static async logInfo(api) {
    const self = this;
    const {
      userUnlockedPlaceNum,
      earthInfoList,
    } = await self.getUserEarthInfo(api);
    const placeInfos = _.flatten(_.map(earthInfoList, 'placeInfos'));
    api.log(`当前已解锁的个数为: ${userUnlockedPlaceNum}, 总数为: ${placeInfos.length}`);
  }

  static async getRaiseBody(api) {
    const self = this;
    const {
      earthInfoList,
    } = await self.getUserEarthInfo(api);
    const placeInfos = _.flatten(_.map(earthInfoList, 'placeInfos'));
    const lockPlace = placeInfos.find(o => o.status === 1);
    if (!lockPlace) return false;
    return {..._.pick(lockPlace, 'id'), ss: await self.getSS(api)};
  }

  static async handleDoSign(api) {
    const continuousSignInfo = await api.doFormBody('getHomeData').then(_.property('data.result.popupInfo.continuousSignInfo'));
    if (!continuousSignInfo) return;
    const {taskId, simpleRecordInfoVo: {taskToken}} = continuousSignInfo;
    await api.collectScore({taskId, taskToken});
  }
}

singleRun(Funny).then();

module.exports = Funny;
