const Family = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

class BianPao extends Family {
  static scriptName = 'BianPao';
  static scriptNameDesc = '集鞭炮';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static apiNames = {
    doTask: 'family_yeartask',
  };
  static customApiOptions = {
    qs: {
      activeid: '10081587',
      token: '79bde8767a63c6841a726f97f7f80548',
    },
    headers: {
      referer: 'https://linggame.jd.com/babelDiy/Zeus/heA49fhvyw9UakaaS3UUJRL7v3o/index.html',
    },
  };

  static getTaskList({taskid, tasktype}) {
    let item = {taskid};
    let list = [item];
    if (taskid === '600680b2986178004811b19e') {
      item['callback'] = 'CheckParamsB';
      list.push(item);
    }
    return list;
  }

}

module.exports = BianPao;
