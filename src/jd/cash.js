const _ = require('lodash');

const {Request} = require('./api');
const {sleep} = require('../lib/common');
const {printLog} = require('../lib/common');
const scriptName = '领现金';
const _printLog = printLog.bind(0, scriptName, void 0);

const {cash} = require('../../charles/api');

async function main(cookie, inviteCode) {
  let failBody = [];

  const api = new Request(cookie);
  let taskForm = [].concat(cash.cash_doTask);

  await sleep();
  await cash_sign(inviteCode);
  await sleep();
  await cash_homePage();

  async function cash_homePage() {
    taskForm = taskForm.filter(form => !failBody.includes(form.body));

    const loop = await api.doForm(cash_homePage.name, cash.cash_homePage[0]).then(async result => {
      const data = result.result;
      const taskInfos = data.taskInfos.filter(task => task.finishFlag !== 1);
      let taskBody = taskInfos.map(task => ({type: task.type, taskInfo: task.desc || task.doTaskDesc}));
      const specialTask = data.specialTaskInfos.find(o => o.type === 9) || {finishFlag: 1};
      let specialTaskBody = [];
      if (specialTask.finishFlag !== 1) {
        let specialTaskInfo = specialTask.doTaskDesc.split(',');
        specialTaskBody = taskForm
        .map(form => JSON.parse(form.body))
        .filter(body => body.type === 9 && !specialTaskInfo.includes(body.taskInfo));
      }
      const form = findFormData(taskBody.concat(specialTaskBody), taskForm);
      if (form) {
        await sleep();
        await cash_doTask(form).then(result => {
          const code = result._data.code;
          const bizCode = result.bizCode;
          if (code !== 0 || (code === 0 && bizCode !== 0)) {
            failBody.push(form.body);
          }
        });
        return true;
      }

      _printLog(`失败的任务列表 body: ${JSON.stringify(failBody)}`);
      return false;

      function findFormData(allBody, allForm) {
        return allForm.find(form => {
          return allBody.find(body => _.isEqual(body, JSON.parse(form.body)));
        });
      }
    });

    if (loop) {
      await sleep();
      await cash_homePage();
    }
  }

  // 签到
  async function cash_sign(inviteCode) {
    // 可以替换成自己想要的邀请码, 但是不保证可以签到成功
    inviteCode = inviteCode || 'cEhkP7C3Yw';
    // 签到
    let form = cash.cash_sign.find(form => JSON.parse(form.body).inviteCode === inviteCode);
    if (!form) {
      form = cash.cash_sign[0];
    }
    return api.doForm(cash_sign.name, form).then(data => {
      if (data.bizCode === 0) {
        _printLog('签到成功');
      }
    });
  }

  // 做任务
  async function cash_doTask(form) {
    return api.doForm(cash_doTask.name, form).then(data => {
      if (data.bizCode === 0) {
        _printLog('完成一次任务');
      }
      return data;
    });
  }

  // TODO 暂时没用了, 仅做记录
  // 获取特殊任务列表
  async function cash_getTaskSkuList() {
    let signKeys = {
      clientVersion: '9.0.2',
      sign: '3f22d6b43ae0ddbfb784aac1512ad006',
      st: '1593965884743',
      sv: '111',
    };
    return api.doFormBody(cash_getTaskSkuList.name, {}, signKeys);
  }
}

async function start(data) {
  for (const {cookie, shareCodes} of data) {
    await main(cookie, shareCodes[0]);
  }
}

module.exports = start;
