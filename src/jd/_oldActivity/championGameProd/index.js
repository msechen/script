const MappingTemplate = require('../../base/mapping');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');
const {replaceObjectMethod} = require('../../../lib/common');

class ChampionGameProd extends MappingTemplate {
  static scriptName = 'ChampionGameProd';
  static scriptNameDesc = '电竞预言家';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static indexUrl = 'https://dnsm618-100million.m.jd.com';
  static functionId = 'champion_game_prod';

  static async doMain(api, shareCodes) {
    const self = this;

    // 获取豆豆
    await api.doApiMapping('/api/lottery', {'activityDate': '20211106'});
  }
}

singleRun(ChampionGameProd).then();

module.exports = ChampionGameProd;
