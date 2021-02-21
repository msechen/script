const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');

const {smallBean} = require('../../../charles/api');

class BeanSmallBean extends Template {
  static scriptName = 'BeanSmallBean';
  static scriptNameDesc = '豆小豆';
  static times = 1;

  static async doMain(api) {
    const self = this;


    await api.doFormBody('swat_game_exchangejingbean', void 0, {
      appid: 'swat_miniprogram',
    }, {
      uri: 'https://api.m.jd.com/api',
      headers: {
        referer: 'https://servicewechat.com/wxa5bf5ee667d91626/121/page-frame.html',
      },
    });

    // await getTask();

    async function getTask() {
      const taskList = await api.doForm('beanTaskList', smallBean.beanTaskList[0]).then(data => {
        // writeFileJSON(data, 'beanTaskList.json', __dirname);

        return _.property('data.taskInfos')(data).filter(o => o.status !== 2);
      });

      let needLoop = false;

      for (const {subTaskVOS} of taskList) {
        const [{taskToken, status}] = subTaskVOS;
        if (status === 2) continue;
        const targetForm = findForm(taskToken);
        if (!targetForm) continue;
        needLoop = true;
        await api.doForm('beanDoTask', targetForm);
        const waitForm = findForm(taskToken, 1);
        if (!waitForm) continue;
        await sleep(5);
        await api.doForm('beanDoTask', waitForm);
      }

      needLoop && await getTask();

      function findForm(taskToken, actionType = 0) {
        return smallBean.beanDoTask.find(o => {
          const body = JSON.parse(o.body);
          return body.actionType === actionType && body.taskToken === taskToken;
        });
      }
    }

  }
}

module.exports = BeanSmallBean;
