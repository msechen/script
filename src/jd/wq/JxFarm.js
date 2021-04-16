const WqBase = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getMoment} = require('../../lib/moment');

// 活动入口
const indexUrl = 'https://wqsh.jd.com/sns/201912/12/jxnc/detail.html';

class JxFarm extends WqBase {
  static scriptName = 'JxFarm';
  static scriptNameDesc = '京喜农场';
  static needInJxApp = true;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static  customApiOptions = {
    uri: 'https://wq.jd.com/cubeactive/farm',
    headers: {
      referer: indexUrl,
    },
    qs: {
      sceneval: 2,
      type: 1,
    },
  };

  static apiExtends = {
    requestFnName: 'doGetPath',
  };

  static isSuccess(data) {
    return data['ret'] === 0;
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'query',
        async successFn(data, api) {
          // writeFileJSON(data, 'query.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const {active, activestatus, indexday, joinnum, smp/*助力码*/} = data;

          const taskParam = {
            active,
            answer: '',
            joinnum,
            ch: 7,
            _stk: 'active,answer,ch,farm_jstoken,joinnum,phoneid,tasklevel,timestamp',
          };

          for (const codeStr of self.shareCodeTaskList) {
            const [active, smp] = codeStr.split(',');
            if (active && smp) {
              // 小程序助力
              await api.doGetPath('help', _.assign({
                smp,
                active,
                joinnum,
                ch: 6,
              })).then(data => {
                if (!self.isSuccess(data)) return api.log(JSON.stringify(data));
                api.log(`助力 ${data.helpnick} 成功`);
              });
            }
          }

          if (activestatus !== 1) {
            // 0 未种植
            // 2 成熟未收取
            // 4 过期
            api.log('未种植或者已经过期');
            return [];
          }

          const result = [];

          const taskList = _.property('task')(data) || [];
          for (let {
            left,
            tasktype,
            tasklevel,
            limit: maxTimes,
          } of taskList) {
            const times = maxTimes - left;
            if (left === 0 || [2/*邀请好友助力*/, 3/*邀请好友种树*/].includes(tasktype)) continue;

            let list = [_.assign({tasklevel}, taskParam)];

            if (tasktype === 11/*每日答题*/) {
              // TODO 待完善
              continue;
              const answerIndex = 3;
              _.assign(list[0], {answer: `${indexday}:${['A', 'B', 'C', 'D'][answerIndex]}:0`});
            }

            result.push({list, option: {maxTimes, times, waitDuration: 2}});
          }

          return result;
        },
      },
      doTask: {
        name: 'dotask',
        paramFn: o => o,
      },
      afterGetTaskList: {
        name: 'query',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          const {target, score, prizename, endtime} = data;
          const logArray = [
            ['种植名称', prizename],
            ['水滴数', score],
            ['目标数', target],
            ['结束时间', getMoment(endtime * 1000).format('YYYY-MM-DD HH:mm:ss')],
          ];
          api.log(logArray.map(arr => arr.join(':')).join(', '));
        },
      },
    };
  }
}

singleRun(JxFarm).then();

module.exports = JxFarm;
