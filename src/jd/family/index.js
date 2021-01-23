const Template = require('../base/template');

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

class Family extends Template {
  static scriptName = 'Family';
  static scriptNameDesc = '家庭号';
  static shareCodeTaskList = [];
  static times = 1;
  // static needInApp = false;
  // static needInPhone = true;
  static commonParamFn = () => ({});

  static apiOptions = {
    formatDataFn: formatData,
    options: {
      uri: 'https://wq.jd.com/activep3/family',
      qs: {
        activeid: '10081245',
        sceneval: 2, // app 参数
        token: '77a482ad11bd58240dc2871fa8d75602',
        callback: callbackName,
      },
      method: 'GET',
      headers: {
        referer: 'https://lgame.jd.com/babelDiy/Zeus/2ZpHzZdUuvWxMJT4KXuRdK6NPj3D/index.html',
      }
    }
  }

  static apiExtends = {
    requestFnName: 'doPath',
  }

  static isSuccess(data) {
    return !this._.isEmpty(data);
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'family_query',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'family_query.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('tasklist')(data) || [];
          for (let {
            isdo,
            taskid,
            tasktype,
            times,
          } of taskList) {
            // tasktype 2 做美食
            // tasktype 5 忽略
            if (isdo === 0 || times !== 0 || [5].includes(tasktype)) continue;
            let item = {taskid};
            if (tasktype === 2) {
              item['callback'] = 'CheckParamsF';
            }
            let list = [item];

            result.push({list, option: {maxTimes: 1, times: 0, waitDuration: 0}});
          }

          return result;
        },
      },
      doTask: {
        name: 'family_task',
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

module.exports = Family;
