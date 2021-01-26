const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');
const md5 = require('js-md5');

class ShoppingFestival extends Template {
  static scriptName = 'ShoppingFestival';
  static scriptNameDesc = '发年终奖';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://shopping-festival.m.jd.com/sf',
      headers: {
        referer: 'https://shopping-festival.m.jd.com',
      },
      method: 'GET',
    },
  };

  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return _.property('code')(data) === 200;
  }

  static async doMain(api) {
    const self = this;

    const doPath = (pathName, functionId, qs) => api.doPath(`${pathName}/${functionId}`, void 0, getSignDataOptions(qs));
    const doPathTask = doPath.bind(0, 'task');
    const doPathIndex = doPath.bind(0, 'index');
    const doPathExtTask = doPath.bind(0, 'extTask');
    const doPathSignIn = doPath.bind(0, 'signin');

    await handleSign();
    await handleDoGeneralTasks();
    await handleDoExtTasks();
    await handlePlayGame();

    // 签到
    async function handleSign() {
      // 签到列表
      // await doPathSignIn('listSignIn');
      await doPathSignIn('signInPrize');
    }

    // 获取游戏次数
    async function handleDoGeneralTasks() {
      const taskList = await doPathTask('queryGeneralTasks').then(data => {
        // writeFileJSON(data, 'queryGeneralTasks.json', __dirname);
        if (!self.isSuccess(data)) return [];
        return _.property('data.generalTasks')(data) || [];
      });

      for (let {
        status,
        type,
        total: maxTimes,
        finish: times,
      } of taskList) {
        if (status === '4' || [].includes(type)) continue;

        const qs = {type};
        if (status === '3' && (maxTimes === times)) {
          await doPathTask('doReceive', qs);
          return await handleDoGeneralTasks();
        }
        if (times < maxTimes) {
          await doPathTask('doTask', qs);
          if (type === 0) return await handleDoGeneralTasks();
          await sleep(5);
          await doPathTask('endTask', qs);
          return await handleDoGeneralTasks();
        }
      }

    }

    async function handlePlayGame() {
      let {jingBeanNum, goldNum, giftNum, remainTimes} = await doPathIndex('indexInfo').then(data => {
        // writeFileJSON(data, 'indexInfo.json', __dirname);
        if (!self.isSuccess(data)) return {};
        return _.property('data')(data) || {};
      });

      for (let i = 0; i < remainTimes; i++) {
        await playGame();
      }

      if (goldNum === void 0) return;
      if (remainTimes > 0) return handlePlayGame();

      if (remainTimes === 0) {
        self.log(`豆豆: ${jingBeanNum}, 分数: ${goldNum}, 礼物数: ${giftNum}`);
      }

      async function playGame() {
        const goldNum = await doPathIndex('getMoney').then(data => {
          if (!self.isSuccess(data)) return;
          const moneyList = _.property('data.moneyList')(data) || [];
          return moneyList.reduce((accumulator, currentValue) => accumulator + currentValue);
        });
        if (goldNum) {
          await sleep(15);
          await doPathIndex('addGoldNums', {goldNum});
        }
      }
    }

    // 做任务获取豆豆
    async function handleDoExtTasks() {
      let allTasks = await doPathExtTask('extTaskInfo').then(data => {
        // writeFileJSON(data, 'extTaskInfo.json', __dirname);
        if (!self.isSuccess(data)) return {};
        return _.property('data')(data) || {};
      });

      for (let [key, list] of Object.entries(allTasks)) {
        if (key === 'bannerList') continue;
        const type = key.replace('List', '');
        list = list.filter(o => o.status !== 3).map(o => ({id: o.id, type}));
        await self.loopCall(list, {
          async firstFn(qs) {
            return doPathExtTask('browse', qs);
          },
          async afterWaitFn(data, qs) {
            return doPathExtTask('getPrize', qs);
          },
          waitDuration: 5,
          maxTimes: list.length,
        });
      }
    }
  }
}

function getSignDataOptions(qs = {}, urlPath = '') {
  const timestamp = getNowMoment().valueOf();
  _.assign(qs, {t: timestamp});
  const sign = getSign(qs, timestamp, urlPath);
  return {
    qs,
    headers: {
      sign,
      timestamp,
    },
  };
}

function getSign(params, timestamp, urlPath) {
  const md5AppKey = 'd55b480bed0545839dbd8b78b6cffdb1';
  const query = urlPath.split('?')[1] || '';
  let finalQuery = query;
  if (params) {
    if (_.isString(params)) {
      finalQuery = params + query;
    } else if (_.isPlainObject(params)) {
      let s = [];
      for (let o in params) s.push(o + '=' + params[o]);
      finalQuery = s.join('&') + query;
    }
  }
  if (finalQuery) {
    const prefix = finalQuery.split('&').sort().join('');
    return md5(prefix + md5AppKey + timestamp);
  }
  return md5(md5AppKey + timestamp);
}

module.exports = ShoppingFestival;
