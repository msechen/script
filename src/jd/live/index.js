const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowMoment} = require('../../lib/moment');
const _ = require('lodash');

const {live} = require('../../../charles/api');

const appid = 'h5-live';

class Live extends Template {
  static scriptName = 'Live';
  static scriptNameDesc = '直播领豆';
  static times = 1;
  static shareCodeTaskList = [];
  static needOriginH5 = true;

  static isSuccess(data) {
    return _.property('subCode')(data) === '0';
  };

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'liveChannelTaskListToM',
        paramFn: () => [{timestamp: getNowMoment().valueOf()}, {appid}],
        async successFn(data, api) {
          // writeFileJSON(data, 'liveChannelTaskListToM.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('data.task')(data) || [];
          for (let {
            desc,
            type,
            status,
            taskId,
            remainCount: maxTimes,
          } of taskList) {
            const targetForms = live.liveChannelReportDataV912.filter(form => type.toLowerCase().match(JSON.parse(form.body).type.toLowerCase()));
            if (status === 3 || _.isEmpty(targetForms)) continue;
            if (_.isNil(maxTimes)) maxTimes = +desc.match(/\d/)[0];
            // status === 2 应该需要直接获取
            if (status === 2) {
              maxTimes = 3;
              for (const form of targetForms) {
                await getChannelTaskRewardToM(type, form);
              }
            }

            let list = [];
            for (let i = 0; i < maxTimes; i++) {
              list.push(targetForms[i] || targetForms[0]);
            }

            const option = {
              maxTimes, waitDuration: 5,
              afterWaitFn(data, form) {
                return getChannelTaskRewardToM(type, form);
              },
            };

            result.push({list, option});
          }

          return result;

          // 抽豆豆
          function getChannelTaskRewardToM(type, form) {
            return api.doFormBody('getChannelTaskRewardToM', _.assign({type}, _.pick(JSON.parse(form.body), 'liveId')), {appid}, {
              uri: 'https://api.m.jd.com/api',
            }).then(data => {
              if (!self.isSuccess(data)) return;
              self.log(`获得豆豆: ${data.sum}`);
            });
          }
        },
      },
      doTask: {
        name: 'liveChannelReportDataV912',
        paramFn: form => [void 0, form],
      },
    };
  };
}

module.exports = Live;
