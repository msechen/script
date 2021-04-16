const Family = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
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
    headers: {
      referer: 'https://st.jingxi.com/pingou/activity/task_rebate/index.html',
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

  static afterGetTaskList(result) {
    const data = result['data'] || {};
    let newWaitAmount = data['newwaitamonut'] || '';
    if (!newWaitAmount || (+newWaitAmount === 0)) return this.log(`目前没有待返红包`);
    // TODO 确认这个逻辑是否需要
    // newWaitAmount = +data['baseamount'] + +data['addwaitamount'] + newWaitAmount;
    const doneMarket = _.map(data['donemarket'] || [], o => +o['maxamount']).reduce((accumulator, currentValue) => accumulator + currentValue) || 0;
    const msg = [
      `待返红包为: ${newWaitAmount}`,
      `还需天数: ${Math.ceil(newWaitAmount / doneMarket)}`,
      `今天已返红包: ${doneMarket.toFixed(2)}`,
      `任务进度: ${data['taskdesc']}`,
    ];
    this.log(msg.join(', '));
  }
}

singleRun(JxHongBao).then();

module.exports = JxHongBao;
