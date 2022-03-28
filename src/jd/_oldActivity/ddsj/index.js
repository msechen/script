const Template = require('../../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');

class DDSJ extends Template {
  static scriptName = 'DDSJ';
  static scriptNameDesc = '东东世界';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInAppComplete = true;
  static defaultShareCodes = [
    {taskToken: 'T018v_h1QhgY81XeKR6b1ACjRVmIaV5kRrbA', inviter_id: 'jPyoWhDsBth5Ez-4QNO6nneSq6SUrG--oE5Y04x95Vk'},
    {taskToken: 'T0107a4gE0Ic8ACjRVmIaV5kRrbA', inviter_id: 'RkGf_4-JATYY2sxzPH2tvrFSuvHy1HMS7GoN-ukE2s4'},
  ];

  static apiOptions = {
    options: {
      uri: 'https://ddsj-dz.isvjcloud.com/dd-api',
      headers: {
        Referer: 'https://ddsj-dz.isvjcloud.com/dd-world/',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return _.property('bizCode')(data) === '0';
  };

  static async beforeRequest(api) {
    const token = await api.commonDo({
      uri: 'https://api.m.jd.com/client.action',
      qs: {
        functionId: 'isvObfuscator',
      },
      form: {
        body: {'id': '', 'url': 'https://ddsj-dz.isvjcloud.com'},
        client: 'apple',
        clientVersion: '10.1.0',
        uuid: 'b56r0is60bfo0x9n',
        st: '1631949499685',
        sign: '950339fc057b93ca9b9976d052f733a2',
        sv: 111,
      },
    }).then(data => data.token);
    if (!token) return true;
    const {access_token, token_type} = await api.doPath('jd-user-info', {token, source: '01'});
    if (!access_token) return true;
    _.assign(api.options.headers, {
      Authorization: `${token_type} ${access_token}`,
    });
    api.cookie = `dd-world=${access_token}`;
  }

  static async handleDoShare(api) {
    const self = this;
    for (const shareCode of self.getShareCodeFn()) {
      await _do(shareCode);
    }

    async function _do(form) {
      return api.doPath('do_assist_task', form).then(data => {
        if (data['score']) {
          api.log('助力成功');
        }
      });
    }
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'get_task',
        paramFn: () => [void 0, {method: 'GET'}],
        async successFn(data, api) {
          // writeFileJSON(data, 'get_task.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const result = [];

          const taskList = _.property('result.taskVos')(data) || [];
          for (let task of taskList) {
            let {
              status,
              taskId,
              taskType,
              maxTimes,
              times,
              waitDuration,
            } = task;
            if (status === 2 || [5/*助力*/].includes(taskId)) continue;
            if (taskId === 1) {
              self.doneShareTask = false;
            }

            let list = _.map(self.getListMatchVo(task).filter(o => o['status'] !== 2), ({taskToken}) => ({
              task_id: taskId,
              task_type: taskType,
              taskToken,
              actionType: waitDuration ? 1 : 0,
            }));
            if (_.isEmpty(list)) continue;
            result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'do_task',
        paramFn: o => o,
      },
      afterGetTaskList: {
        name: 'get_task',
        paramFn: () => [void 0, {method: 'GET'}],
        async successFn(data, api) {
          if (self.isSuccess(data)) {
            const {userScore} = data.result;
            api.log(`当前金币: ${+userScore}`);
          }
        },
      },
    };
  }
}

singleRun(DDSJ).then();

module.exports = DDSJ;
