const Template = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {getMoment, getNowHour} = require('../../lib/moment');
const {sleepTime} = require('../../lib/cron');

const activeId = '63526d8f5fe613a6adb48f03';

class MakeMoneyShop extends Template {
  static scriptName = 'MakeMoneyShop';
  static scriptNameDesc = '赚钱大赢家';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static needInPhone = false;
  static concurrent = getNowHour() === 23;

  static customApiOptions = {
    uri: 'https://wq.jd.com/newtasksys/newtasksys_front',
    headers: {
      referer: `https://wqs.jd.com/sns/202210/20/make-money-shop/index.html?activeId=${activeId}`,
      'user-agent': 'jdltapp;iPhone;3.8.16;;;M/5.0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;hasOCPay/0;appBuild/1133;supportBestPay/0;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CzYyCtK5YJq3DJU5YtCnYzTuYWG3ENYmYzS3CtrsDWYzEJruCWVvDq%3D%3D%22%2C%22sv%22%3A%22CJGkCq%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1667202168%2C%22hdid%22%3A%22HcdgblbG8B1wVnKMAQBctEKCELRAg%2BJbm1yeBVk2bnM%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.jd.jdmobilelite%22%2C%22ridx%22%3A1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;',
    },
    qs: {
      g_ty: 'h5',
      g_tk: '',
      appCode: 'msc588d6d5',
      source: 'makemoneyshop',
      bizCode: 'makemoneyshop',
      sceneval: 2,
    },
  };

  static async doMain(api) {
    const self = this;

    // TODO 助力

    const notCron = await handleCronExChange();
    if (!notCron) return;

    await handleDoTask();
    await handleAutoExchange();

    // 主要获取打卡奖励和输出结果
    async function handleDoTask() {
      const {
        userTaskStatusList,
        encryptPin,
      } = await api.doGetPath('GetUserTaskStatusList', {__t: getMoment().valueOf()}).then(data => data.data || {});
      for (let {
        gettaskStatus,
        dateTypeExtra,
        updateTime,
        awardStatus,
        targetTimes,
        configTargetTimes,
        realCompletedTimes,
        taskId,
        taskName
      } of userTaskStatusList) {
        if (taskName.match('打卡')) {
          api.log(`打卡进度(${realCompletedTimes}/${configTargetTimes})`);
        }
        // TODO 确认任务是否未做
        if (gettaskStatus === 2 && taskName.match(/逛一逛省钱节会场|逛超值购物金会场|逛逛|实在返场/) && (!dateTypeExtra || updateTime === 0)) {
          await sleep(5);
          await api.doGetPath('DoTask', {taskId, isSecurity: true, configExtra: ''});
        }
        if (taskName.match(/打卡|打扫|逛一逛省钱节会场|逛超值购物金会场|逛逛|实在返场/)) {
          for (; targetTimes <= realCompletedTimes; targetTimes++) {
            if (awardStatus === 1) continue;
            await api.doGetPath('Award', {taskId}).then(data => {
              const prizeInfo = _.get(data, 'data.prizeInfo');
              if (prizeInfo) {
                api.log(`${taskName} 成功领取奖励(${prizeInfo})`);
              } else {
                api.log('获取失败');
              }
            });
            await sleep(2);
          }
        }
      }
    }


    // 自动提现
    async function handleAutoExchange() {
      const result = await api.doGetPath('/makemoneyshop/exchangequery', {activeId});
      const {code, msg} = result;
      if (code !== 0) {
        return api.log(msg);
      }
      const {
        data: {
          cashExchangeRuleList,
          canUseCoinAmount,
          stockPersonDayLimit,
          stockPersonDayUsed,
          exchangeRecordList,
        },
      } = result;
      api.log(`当前金额: ${canUseCoinAmount}`);
      if (exchangeRecordList) {
        return api.log('当前已有提现中的任务');
      }
      if (stockPersonDayUsed >= stockPersonDayLimit) {
        return api.log('今天提现次数已达上限');
      }
      const cash = cashExchangeRuleList.reverse().find(o => +o['consumeScore'] <= +canUseCoinAmount && o['exchangeStatus'] === 1/* && +o['consumeScore'] > 0.3*/);

      if (!cash) {
        return api.log(`没有可用的提现项`);
      }

      await handleExChange(cash);
    }

    async function handleExChange(cash, options) {
      await api.doGetPath('/prmt_exchange/client/exchange', {ruleId: cash.id}, options).then(data => {
        const {ret, msg} = data;
        if (ret !== 0) {
          return api.log(`提现失败, 原因(${ret}): ${msg}`);
        }
        api.log(`${cash.name} 提现中`);
      });
    }

    async function handleCronExChange() {
      if (getNowHour() !== 23) return true;
      if (api.currentCookieIndex === 0) {
        console.log('准备0点定时提现');
      }
      await sleepTime(24);
      await handleExChange({name: '20元现金', id: '7ea791839f7fe3168150396e51e30917'}, {needDelay: false});
      await handleExChange({name: '8元现金', id: 'da3fc8218d2d1386d3b25242e563acb8'}, {needDelay: false});
    }
  }
}

singleRun(MakeMoneyShop).then();

module.exports = MakeMoneyShop;
