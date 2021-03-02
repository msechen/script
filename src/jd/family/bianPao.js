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
      activeid: '10082232',
      token: 'a11db0d53ef1061ce81e6f228d2b5d34',
    },
    headers: {
      referer: 'https://linggame.jd.com/babelDiy/Zeus/3Y7JfoyA2Nwoa4FRqgDY4WpVjfgP/index.html',
    },
  };

  static getTaskList({taskid, tasktype}) {
    let item = {taskid};
    let list = [item];
    if (taskid === '6034e1efd5d966f7a1beeee2') {
      item['callback'] = 'CheckParamsB';
      list.push(item);
    }
    return list;
  }

}

module.exports = BianPao;
