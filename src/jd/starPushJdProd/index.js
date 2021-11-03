const MappingTemplate = require('../base/mapping');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class StarPushJdProd extends MappingTemplate {
  static scriptName = 'StarPushJdProd';
  static scriptNameDesc = '星推官';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiCustomOption() {
    return {
      options: {
        headers: {
          origin: 'https://starintroducer.jd.com',
          referrer: 'https://starintroducer.jd.com',
        },
        form: {
          functionId: 'star_push_jd_prod',
        },
      },
    };
  };

  static isSuccess(data) {
    return data.code === 200;
  }

  static async doMain(api, shareCodes) {
    const self = this;

    await handleSign();

    async function handleSign() {
      const {data: {signState}} = await api.doApiMapping('/api/index/indexInfo');
      if (signState === '1') return;
      await api.doApiMapping('/api/task/doSign').then(data => {
        if (self.isSuccess(data)) {
          api.log(`签到成功, ${JSON.stringify(data)}`);
        }
      });
    }

  }
}

singleRun(StarPushJdProd).then();

module.exports = StarPushJdProd;
