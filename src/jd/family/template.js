const Family = require('./index');

const {sleep, writeFileJSON, matchMiddle, singleRun} = require('../../lib/common');
const _ = require('lodash');

let tasks = [];
let completeTaskList = [];

class FamilyTemplate extends Family {
  static scriptName = 'FamilyTemplate';
  static scriptNameDesc = '任务抽奖模板';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static apiNames = {
    getTaskList: 'query',
    doTask: 'completeTask',
    afterGetTaskList: 'query',
    doRedeem: 'draw',
  };
  static indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/2x3yeXUmPbFVCAoXKQqSrdrQuoBk/index.html';
  static customApiOptions = {
    uri: 'https://wq.jd.com/activet2/piggybank',
    qs: {
      // 从 indexUrl 中获取
      // activeid: '10083445',
      // token: 'd6ac251c2919d3917274a011122fd050',
    },
    headers: {
      referer: this.indexUrl,
    },
  };

  static isSuccess(data) {
    return !_.isEmpty(data) && (_.property('errcode')(data) === 0);
  }

  static initTaskList(data) {
    completeTaskList = data.data['complete_task_list'];
    return [{}];
  }

  static async beforeRequest(api) {
    const self = this;
    await api.commonDo({
      uri: this.indexUrl,
      headers: {
        Cookie: '',
      },
      method: 'GET',
      qs: api.options.qs,
    }).then(data => {
      const taskStr = matchMiddle(data, {reg: /"tasks":(.*),"activeType":/});
      const activeId = matchMiddle(data, {reg: /"activeId":"(.*)","actToken":/});
      const actToken = matchMiddle(data, {reg: /"actToken":"(.*)","external":/});
      if (activeId) api.options.qs.activeid = activeId;
      if (actToken) api.options.qs.token = actToken;
      try {
        tasks = JSON.parse(taskStr);
      } catch (e) {
        self.log('获取config失败');
      }
    });
  }

  static getTaskList() {
    return tasks.map(o => ({
      taskid: o['_id'],
      task_bless: o['taskRankNum'] || 10,
    })).filter(o => !completeTaskList.includes(o['taskid']));
  }

  static afterGetTaskList(data, api) {
    this.isSuccess(data) && this.log('已完成任务和抽奖');
  }
}

singleRun(FamilyTemplate).then();

module.exports = FamilyTemplate;
