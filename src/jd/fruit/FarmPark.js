const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/J1C5d6E7VHb2vrb5sJijMPuj29K/index.html';

class FruitFarmPark extends Template {
  static scriptName = 'FruitFarmPark';
  static scriptNameDesc = '东东乐园';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static needOriginH5 = true;
  static times = 1;

  static apiOptions = {
    options: {
      form: {
        body: {'version': '1', 'channel': 1},
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const {buildings} = await api.doFormBody('ddnc_farmpark_Init');
    for (const [index, {topResource}] of buildings.entries()) {
      const {task} = topResource;
      if (!task) continue;
      const {waterGram, status, advertId, browseSeconds} = task;
      if (!waterGram || status === 3) continue;
      await api.doFormBody('ddnc_farmpark_markBrowser', {advertId});
      await sleep(browseSeconds);
      await api.doFormBody('ddnc_farmpark_browseAward', {advertId, index, type: 1}).then(data => {
        api.log(`获得水滴: ${_.get(data, 'result.waterEnergy', 0)}`);
      });
    }
  }
}

singleRun(FruitFarmPark).then();

module.exports = FruitFarmPark;
