const Family = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

const callbackName = 'CheckParamsP';

function formatData(data) {
  let result = {};
  try {
    result = JSON.parse(data.replace(`try{ ${callbackName}(`, '').replace(');}catch(e){}', ''));
  } catch (e) {
  }
  return result;
}

class BianPao extends Family {
  static scriptName = 'BianPao';
  static scriptNameDesc = '集鞭炮';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiOptions = {
    formatDataFn: formatData,
    options: {
      uri: 'https://wq.jd.com/activep3/family',
      qs: {
        activeid: '10081587',
        sceneval: 2,
        token: '79bde8767a63c6841a726f97f7f80548',
        callback: callbackName,
      },
      method: 'GET',
      headers: {
        referer: 'https://linggame.jd.com/babelDiy/Zeus/heA49fhvyw9UakaaS3UUJRL7v3o/index.html',
      }
    }
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'family_query',
        paramFn: self.commonParamFn,
        successFn: async (data) => {
          // writeFileJSON(data, 'BianPao_family_query.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('tasklist')(data) || [];
          for (let {
            isdo,
            taskid,
            tasktype,
            times,
          } of taskList) {
            if (isdo === 0 || times !== 0 || [].includes(tasktype)) continue;

            let item = {taskid};
            let list = [item];
            if (taskid === '600680b2986178004811b19e') {
              item['callback'] = 'CheckParamsB';
              list.push(item);
            }

            result.push({list, option: {maxTimes: list.length, times: 0, waitDuration: 0}});
          }

          return result;
        },
      },
      doTask: {
        name: 'family_yeartask',
        paramFn: qs => [void 0, {qs}],
      },
      afterGetTaskList: {
        name: 'family_query',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          self.log(`当前分数为: ${data.tatalprofits}`);
        },
      }
    };
  };
}

module.exports = BianPao;
