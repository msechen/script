const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class MappingTemplate extends Template {
  static scriptName = 'MappingTemplate';
  static scriptNameDesc = 'MappingTemplate';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiCustomOption() {};

  static apiOptions() {
    return _.merge({
      options: {
        form: {
          appid: 'china-joy',
        },
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
