const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class MappingTemplate extends Template {
  static scriptName = 'MappingTemplate';
  static scriptNameDesc = 'MappingTemplate';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static indexUrl;
  static appid = 'china-joy';
  static functionId = 'champion_game_prod';

  static apiCustomOption() {};

  static apiOptions() {
    const {indexUrl, appid, functionId} = this;
    return _.merge({
      options: {
        headers: {
          origin: indexUrl,
          referrer: indexUrl ? `${indexUrl}/` : '',
        },
        form: {appid, functionId},
      },
    }, this.apiCustomOption());
  };

  static isSuccess(data) {
    return data.code === 200;
  }

  static async doMain(api, shareCodes) {
    const self = this;

    await api.doApiMapping('/api/test');
  }
}

singleRun(MappingTemplate).then();

module.exports = MappingTemplate;
