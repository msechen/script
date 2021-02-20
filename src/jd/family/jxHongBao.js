const Family = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class JxHongBao extends Family {
  static scriptName = 'JxHongBao';
  static scriptNameDesc = '做任务返红包';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static apiNames = {
    getTaskList: 'querytaskpool',
    doTask: 'completesingletask',
    afterGetTaskList: 'querytaskpool',
    // doRedeem: 'draw',
  };
  static customApiOptions = {
    uri: 'https://m.jingxi.com/fanxiantask/dotask',
    qs: {
      traceid: '1122142945135337809',
    },
    headers: {
      referer: 'https://st.jingxi.com/pingou/activity/task_rebate/index.html?source=share&jxsid=16138339799479583557',
    },
  };

  static isSuccess(data) {
    return !_.isEmpty(data) && (_.property('errcode')(data) === 0);
  }

  static initTaskList(data) {
    return _.property('data.tasklist')(data);
  }

  static getTaskList({item}) {
    let list = [];
    for (let i = 0; i < item.taskcannum; i++) {
      list.push({tasktype: item.type, taskid: i + 1});
    }
    return list;
  }
}

module.exports = JxHongBao;
