const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../lib/common');
const _ = require('lodash');
const EncryptH5st = require('../../lib/EncryptH5st');
const {getMoment} = require('../../lib/moment');

const appid = 'activities_platform';
const linkId = 'pTTvJeSTrpthgk9ASBVGsw';
const origin = 'https://bnzf.jd.com';

class LiteHappyDig extends Template {
  static scriptName = 'LiteHappyDig';
  static scriptNameDesc = '发财挖宝';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInSpeedApp = true;
  static shareCodeUniqIteratee = o => o['inviter'];
  static doneShareTask = this.getNowHour() < 22;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
      headers: {
        origin,
        referer: `${origin}/?activityId=${linkId}`,
      },
    },
  };

  static async beforeRequest(api) {
    const self = this;

    const defaultData = {
      body: {linkId},
      appid,
      client: 'H5',
      clientVersion: '1.0.0',
    };
    const encryptH5stConfig = {
      happyDigHome: {
        appId: 'ce6c2',
      },
      happyDigHelp: {
        appId: '8dd95',
      },
    };

    ['doFormBody', 'doGetBody'].forEach(method => {
      replaceObjectMethod(api, method, async data => {
        let [functionId, body, signData, options = {}] = data;
        if (method === 'doGetBody') {
          options = signData || options;
        } else {
          _.merge(options.form, signData);
        }
        const t = getMoment().valueOf();
        let form = _.merge({}, defaultData, {body}, {t}, options.qs || options.form);
        if (functionId in encryptH5stConfig) {
          let {encryptH5st, appId} = encryptH5stConfig[functionId];
          !encryptH5st && (encryptH5st = new EncryptH5st({appId}));
          form = await encryptH5st.sign({functionId, ...form});
          ['_stk', '_ste'].forEach(key => {
            delete form[key];
          });
        }
        if (method === 'doGetBody') {
          return [functionId, void 0, _.merge(options, {qs: form})];
        }
        return [functionId, void 0, void 0, _.merge(options, {form})];
      });
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;
    await self.beforeRequest(api);

    // 需要先消耗一波生命值, 不然可能会有上限
    await handlePlayGame();
    await handleDoShare();
    await handleDoTask();
    await handlePlayGame();

    if (self.isLastLoop()) {
      await handleExchange();
      await handleCash();
    }

    async function handlePlayGame(maxBlood = 1) {
      const homeData = await api.doGetBody('happyDigHome');
      const {roundList, curRound: round, blood} = _.get(homeData, 'data', {});
      if (!roundList) {
        api.log(`happyDigHome data ${homeData}`);
        return;
      }
      if (blood <= maxBlood) return;
      const targetRound = roundList.find(o => o.round === round);
      if (!targetRound) return api.log('找不到指定的round');
      const {chunks} = targetRound;
      const filterChunks = _.filter(chunks, o => !o.state);
      if (_.isEmpty(filterChunks)) return api.log(`当前${round}已经全部挖完`);
      // 随机获取哪个格
      const {rowIdx, colIdx} = filterChunks[_.random(filterChunks.length - 1)];
      await sleep(3);
      await api.doGetBody('happyDigDo', {round, rowIdx, colIdx}).then(data => {
        const chunk = _.get(data, 'data.chunk');
        if (!chunk) return api.log(data);
        const {type, value} = chunk;
        const msgList = [
          `[round:${round}]`,
        ];
        const typeName = {
          1: '优惠券',
          2: '红包',
          3: '现金',
          4: '炸弹',
        };
        const name = typeName[type];
        if (name) {
          msgList.push(`挖到${name} ${value || ''}`);
        } else {
          msgList.push(`挖到${JSON.stringify(chunk)}`);
        }
        api.log(msgList.join(' '));
      });
      return handlePlayGame(maxBlood);
    }

    async function handleDoShare() {
      if (self.doneShareTask) return;
      const {markedPin, inviteCode} = await api.doGetBody('happyDigHome').then(_.property('data'));
      self.updateShareCodeFn({inviter: markedPin, inviteCode});
      // 只有一次助力机会
      const body = _.first(self.getShareCodeFn());
      if (!body) return;
      await api.doGetBody('happyDigHelp', body).then(data => {
        if (!data.success) return api.log(data.errMsg);
        api.log('助力成功');
      });
      await sleep(10);
    }

    async function handleExchange() {
      if (self.getNowHour() < 22) return;
      const {curRound: round, blood, manuallyExchanged} = await api.doGetBody('happyDigHome').then(_.property('data'));
      if (blood !== 1 || manuallyExchanged === 2) return;
      return api.doGetBody('happyDigExchange', {round});
    }

    async function handleDoTask(getTaskBlood = false) {
      const {data: taskList} = await api.doGetBody('apTaskList');
      const channel = '4';
      let blood = 0;
      for (const {
        id: taskId,
        taskShowTitle,
        taskType,
        taskSourceUrl: itemId,
        taskDoTimes: times,
        taskLimitTimes: maxTimes,
        configBaseList,
        taskFinished
      } of taskList) {
        if (taskFinished || taskShowTitle.match(/下单|购券|买一元/)) continue;
        blood += _.reduce(configBaseList.map(o => +o['awardGivenNumber']), (a, b) => a + b);
        if (getTaskBlood) continue;
        if (taskShowTitle.match(/逛会场/)) {
          await handleDoTaskDetail(taskType, taskId);
        } else {
          for (let i = times; i < maxTimes; i++) {
            await doTask({taskType, taskId, itemId});
          }
        }
      }

      return blood;

      async function doTask({taskType, taskId, itemId}) {
        await api.doGetBody('apDoTask', {
          taskType, taskId, itemId, checkVersion: false, channel,
        });
      }

      async function handleDoTaskDetail(taskType, taskId) {
        const {
          status: {finished},
          taskItemList,
        } = await api.doGetBody('apTaskDetail', {taskType, taskId, channel}).then(_.property('data'));
        if (finished) return;
        for (const {itemId} of taskItemList) {
          const {
            timePeriod,
            userFinishedTimes,
            finishNeed,
          } = await api.doGetBody('apTaskTimeRecord', {taskId}).then(_.property('data'));
          if (userFinishedTimes >= finishNeed) continue;
          await sleep(timePeriod || 30);
          await doTask({taskType, taskId, itemId});
        }
      }
    }

    async function handleCash() {
      await api.doGetBody('spring_reward_list', {
        'pageNum': 1,
        'pageSize': 10,
      }).then(async data => {
        const items = _.property('data.items')(data) || [];
        if (items.some(o => o['state'] === 1)) return;
        const cashes = items.filter(o => o['prizeType'] === 4 && o['state'] === 0);
        if (_.isEmpty(cashes)) return;
        // 一次只能同时提现一个
        for (const cash of cashes) {
          await apCashWithDraw(cash);
          await sleep(60 * 5);
        }
      });

      async function apCashWithDraw({id, poolBaseId, prizeGroupId, prizeBaseId, prizeType}) {
        return api.doFormBody('apCashWithDraw', {
          'businessSource': 'happyDiggerH5Cash',
          'base': {
            id, poolBaseId, prizeGroupId, prizeBaseId, prizeType,
            'business': 'happyDigger',
          },
        }).then(data => {
          const amount = _.get(data, 'data.record.amount');
          if (amount) {
            api.log(`正在提现${amount}`);
          } else {
            api.log(data.data);
          }
        });
      }
    }
  }
}

singleRun(LiteHappyDig).then();

module.exports = LiteHappyDig;
