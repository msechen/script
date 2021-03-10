const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getNowMoment} = require('../../lib/moment');
const _ = require('lodash');

const defaultApiNames = {
  getTaskList: 'family_query',
  doTask: 'family_task',
  afterGetTaskList: 'family_query',
};

class Family extends Template {
  static scriptName = 'Family';
  static scriptNameDesc = '家庭号';
  static shareCodeTaskList = [];
  static times = 1;
  // static needInApp = false;
  // static needInPhone = true;
  static commonParamFn = () => ({});
  static apiNames = {};

  static getTaskList({taskid, tasktype}) {
    if ([5].includes(tasktype)) return [];
    let item = {taskid};
    let list = [item];
    if (tasktype === 2) {
      item['callback'] = 'CheckParamsF';
    }
    if (taskid === '5fed97ce5da81a8c069810df' && getNowMoment().hour() < 8) {
      for (let i = 0; i < 60; i++) {
        list.push(item);
      }
    }
    return list;
  }

  static afterGetTaskList(data, api) {
    this.log(`当前分数为: ${data.tatalprofits}`);
  }

  static getApiNames() {
    const assign = _.assign({}, defaultApiNames, this.apiNames);
    return assign;
  };

  static customApiOptions = {
    qs: {
      activeid: '10081245',
      token: '77a482ad11bd58240dc2871fa8d75602',
    },
    headers: {
      referer: 'https://lgame.jd.com/babelDiy/Zeus/2ZpHzZdUuvWxMJT4KXuRdK6NPj3D/index.html',
    },
  };

  static apiOptions() {
    return {
      formatDataFn(data) {
        let result = {};
        try {
          result = JSON.parse(data.replace(/try{\s*\w*\(/, '').replace(');}catch(e){}', ''));
        } catch (e) {
          try {
            result = JSON.parse(data.replace(/\w*\(/, '').replace(/\)$/, ''));
          } catch (e) {
          }
        }
        return result;
      },
      options: _.merge({
        uri: 'https://wq.jd.com/activep3/family',
        qs: {
          sceneval: 2, // app 参数
          callback: 'CheckParamsP',
        },
        method: 'GET',
      }, this.customApiOptions),
    };
  };

  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return !_.isEmpty(data);
  }

  static initTaskList(taskList) {
    return taskList;
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    const result = {
      // 获取任务列表
      getTaskList: {
        name: self.getApiNames().getTaskList,
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'family_query.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = self.initTaskList(_.property('tasklist')(data) || data);
          for (let item of taskList) {
            let {
              isdo,
              taskid,
              tasktype,
              times,
            } = item;
            // tasktype 2 做美食
            // tasktype 5 忽略
            if (isdo === 0 || _.isNumber(times) && (times !== 0) || [].includes(tasktype)) continue;
            let list = self.getTaskList({taskid, tasktype, item});

            result.push({list, option: {maxTimes: list.length, times: 0, waitDuration: 0}});
          }

          return result;
        },
      },
      doTask: {
        name: self.getApiNames().doTask,
        paramFn: qs => [void 0, {qs}],
      },
      afterGetTaskList: {
        name: self.getApiNames().afterGetTaskList,
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          self.afterGetTaskList(data, api);
        },
      },
    };
    const doRedeem = self.getApiNames().doRedeem;
    if (doRedeem) {
      _.assign(result, {
        doRedeem: {
          name: doRedeem,
          async successFn(data, api) {
            if (!self.isSuccess(data)) return false;
          },
          repeat: true,
        },
      })
    }
    return result;
  };
}

module.exports = Family;
