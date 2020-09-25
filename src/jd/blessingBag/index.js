const Base = require('../base');

const {sleep} = require('../../lib/common');

class BlessingBag extends Base {
  static scriptName = 'BlessingBag';
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
        referer: 'https://lingsns.jd.com/',
      },
      uri: 'https://wq.jd.com/activet2/piggybank',
    },
    formatDataFn: data => data,
  };
  static apiExtends = {
    requestFnName: 'doFormBody',
    apiNames: ['apiName'],
  };

  static async doMain(api, shareCodes) {
    const defaultQs = {
      activeid: '',
      token: '',
      sceneval: '2',
    };
    const isSuccess = data => data.errcode === 0;
    const _doPath = async (name, functionId, qs) =>
      api.do({
        uri: `${api.options.uri}/${name}/${functionId}`,
        qs: this._.merge(defaultQs, qs),
      });
    const formatData = (name, data) => {
      return JSON.parse(data.replace(`${name}(`, '').replace(/\)$/, '').trim());
    };
    const apiDoTask = (functionId, qs) => _doPath('activet2/piggybank', functionId, qs).then(formatData.bind(0, functionId));

    const {config: {tasks}} = await initConfig();

    const completeTaskList = await query();

    for (const {_id, taskRankNum} of tasks) {
      if (completeTaskList.includes(_id)) continue;
      await completeTask(_id, taskRankNum);
      await sleep(2);
    }

    const draw = () =>
      apiDoTask('draw').then(data => {
        if (isSuccess(data)) return draw();
      });

    await draw();

    async function initConfig() {
      return api.do({
        uri: 'https://lingsns.jd.com/babelDiy/Zeus/2i6ZjDibXT7Wy2Vre2bYo2YzySor/index.html',
        method: 'GET',
      }).then(data => {
        const snsConfigStr = 'var snsConfig = ';
        const firstIndex = data.indexOf(snsConfigStr) + snsConfigStr.length;
        const lastIndex = data.indexOf('    var SharePlatforms = {');
        const snsConfig = JSON.parse(data.substring(firstIndex, lastIndex).trim().replace(/;$/, ''));
        const {activeId, actToken} = snsConfig;
        defaultQs.activeid = activeId;
        defaultQs.token = actToken;

        return snsConfig;
      });
    }

    async function completeTask(id, bless) {
      return apiDoTask('completeTask', {
        taskid: id,
        task_bless: bless,
      }).then(data => {
        isSuccess(data) && BlessingBag.log(`当前幸运值为: ${data.data.curbless}`);
      });
    }

    async function query() {
      return apiDoTask('query').then(data => {
        if (isSuccess(data)) {
          return data.data.complete_task_list || [];
        }
        return [];
      });
    }
  }
}

module.exports = BlessingBag;
