const Family = require('./index');

const {sleep, writeFileJSON, matchMiddle} = require('../../lib/common');
const _ = require('lodash');

const indexUrl = 'https://anmp.jd.com/babelDiy/Zeus/2x3yeXUmPbFVCAoXKQqSrdrQuoBk/index.html';

let tasks = [];

class MangHe extends Family {
  static scriptName = 'MangHe';
  static scriptNameDesc = '女装抽盲盒';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static apiNames = {
    getTaskList: 'query',
    doTask: 'completeTask',
    afterGetTaskList: 'query',
    doRedeem: 'draw',
  };
  static customApiOptions = {
    uri: 'https://wq.jd.com/activet2/piggybank',
    qs: {
      activeid: '10083445',
      token: 'd6ac251c2919d3917274a011122fd050',
    },
    headers: {
      referer: indexUrl,
    },
  };

  static isSuccess(data) {
    return !_.isEmpty(data) && (_.property('errcode')(data) === 0);
  }

  static initTaskList(taskList) {
    return [{}];
  }

  static async beforeRequest(api) {
    await api.commonDo({
      uri: indexUrl,
      headers: {
        Cookie: '',
      },
      method: 'GET',
      qs: api.options.qs,
    }).then(data => {
      const taskStr = matchMiddle(data, {reg: /"tasks":(.*),"activeType":/});
      try {
        tasks = JSON.parse(taskStr);
      } catch (e) {
      }
    });
  }

  static getTaskList() {
    return tasks.map(o => ({
      taskid: o['_id'],
      task_bless: o['taskRankNum'] || 10,
    }));
  }
}

if (process.argv[2] === 'start') {
  const {getLocalEnvs, getCookieData} = require('../../lib/env');
  process.env = getLocalEnvs();
  MangHe.start(getCookieData()).then();
}

module.exports = MangHe;
