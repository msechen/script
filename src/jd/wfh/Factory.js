const HarmonyTemplate = require('./harmony');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/2uSsV2wHEkySvompfjB43nuKkcHp/index.html';

const maxUserScore = 3000000;

class Factory extends HarmonyTemplate {
  static scriptName = 'Factory';
  static scriptNameDesc = '东东工厂';
  static shareCodeTaskList = [];
  static shareTaskId = 2;
  static skipTaskIds = [7/*开会员*/, 11/*下单*/];
  static commonParamFn = () => ({});
  static defaultShareCodes = [
    'T018v_h1QhgY81XeKR6b1ACjVWnYaS5kRrbA',
    'T019-akZNEhNqhCPQUKp84MCjVWnYaS5kRrbA',
    'T0205KkcMWdhhwWERkeG8q5fCjVWnYaS5kRrbA',
  ];
  static apiNames = {
    getTaskList: 'jdfactory_getTaskDetail',
    doTask: 'jdfactory_collectScore',
    doWaitTask: 'jdfactory_collectScore',
    doRedeem: '',
    afterGetTaskList: 'jdfactory_getHomeData',
  };

  static async beforeDoTask(api, taskId) {
    // return;
    if (taskId === 3/* 去京东首页点击“数码电器” */) {
      await api.doFormBody('queryVkComponent', {
        'componentId': '4f953e59a3af4b63b4d7c24f172db3c3',
        'taskParam': '{"actId":"8tHNdJLcqwqhkLNA8hqwNRaNu5f"}',
        'cpUid': '8tHNdJLcqwqhkLNA8hqwNRaNu5f',
        'taskSDKVersion': '1.0.3',
        'businessId': 'babel',
      });
    }
  }

  static async afterDoTask(api, data) {
    const self = this;
    if (!self.isSuccess(data)) {
      return api.log(_.get(data, 'data.bizMsg'));
    }
    if (_.get(data, 'data.result.taskId') === 2) {
      api.log(`助力 ${_.get(data, 'data.result.masterPin')} 成功`);
    }
  }

  static async afterGetTaskList(api, data) {
    const self = this;

    let userScore = 0;
    const msgs = [];

    await api.doFormBody('jdfactory_getTaskDetail').then(async data => {
      userScore = +data.data.result.userScore;
      msgs.push(`电量为: ${userScore}`);
    });

    const {
      couponCount,
      name,
      remainScore,
      useScore,
      totalScore,
    } = _.property('data.result.factoryInfo')(data) || {};
    if (name) {
      msgs.push(`(${name})剩${couponCount}件, 电量还差 ${+totalScore - (+remainScore + +useScore)}`);
    }
    // TODO 自动选中商品进行生产
    api.log(msgs.join(','));

    (_.property('data.result.skuIdList')(data) || []).forEach(({couponCount, name, fullScore}) => {
      if (couponCount > 0) {
        let msg = `${name} 还剩${couponCount}件, 需要电量${fullScore}`;
        const enable = userScore >= +fullScore;
        if (enable) {
          // TODO 充电接口还没摸索到, 可能是 jdfactory_getLotteryResult
          msg += ', 可以打造成功, 快进行充电!';
        }
        if (enable || (api.currentCookieTimes === 0)) {
          api.log(msg);
        }
      }
    });
  }

  static async doCron(api) {
    const self = this;

    const userScore = await api.doFormBody('jdfactory_getTaskDetail').then(async data => +_.property('data.result.userScore')(data));
    if (userScore >= maxUserScore) {
      api.log('蓄电池已满，使用后才可获得更多电量哦！');
      return;
    }

    await api.doFormBody('jdfactory_collectElectricity').then(data => {
      api.log(`定时获取到的电量为 ${_.property('data.result.electricityValue')(data)}`);
    });

    // 充电, 按需进行
    async function handleAddEnergy() {
      await api.doFormBody('jdfactory_addEnergy');
    }
  }
}

singleRun(Factory, ['start', 'cron']).then();

module.exports = Factory;
