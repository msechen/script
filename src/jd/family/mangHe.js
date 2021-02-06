const Family = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

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
      activeid: '10081708',
      token: 'ea06a749289d6d9753513f30a918a345',
    },
    headers: {
      referer: 'https://anmp.jd.com/babelDiy/Zeus/3hphatqtBrbSAo3EPsiHxjx6b4BS/index.html',
    },
  };

  static isSuccess(data) {
    return !_.isEmpty(data) && (_.property('errcode')(data) === 0);
  }

  static initTaskList(taskList) {
    return [{}];
  }

  static getTaskList() {
    return [
      "5ff567085da81a8c06981918",
      "5ff567085da81a8c06981925",
      "5ff567085da81a8c06981924",
      "5ff567085da81a8c06981923",
      "5ff567085da81a8c06981922",
      "5ff567085da81a8c06981921",
      "5ff567085da81a8c06981920",
      "5ff567085da81a8c06981919",
      "5ff567085da81a8c06981917",
      "5ff567085da81a8c0698191f",
      "5ff567085da81a8c0698191e",
      "5ff567085da81a8c0698191d",
      "5ff567085da81a8c0698191c",
      "5ff567085da81a8c0698191b",
      "5ff567085da81a8c0698191a",
      "600ad24d986178004811ba78",
      "600ad24d986178004811ba77",
      "600ad24d986178004811ba76",
      "600ad24d986178004811ba75",
      "600ad24d986178004811ba74",
      "600ad24d986178004811ba73",
      "600ad24d986178004811ba72",
      "600ad24d986178004811ba71"
    ].map(taskid => ({taskid, task_bless: 10}));
  }
}

module.exports = MangHe;
