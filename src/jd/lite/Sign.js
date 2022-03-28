const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const {encrypt} = require('./api');

const activityId = '8a8fabf3cccb417f8e691b6774938bc2';
const kernelPlatform = 'RN';

class LiteSign extends Template {
  static scriptName = 'LiteSign';
  static scriptNameDesc = '极速版签到';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInSpeedApp = true;
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      headers: {
        kernelplatform: kernelPlatform,
      },
    },
  };

  static isSuccess(data) {
    return data['subCode'] === 0;
  }

  static async doMain(api, shareCodes) {
    const self = this;

    const doForm = (functionId, body = {}) => api.doForm(functionId, encrypt(functionId, _.assign({
      kernelPlatform,
      activityId,
    }, body)));

    await doForm('speedSignInit').then(data => {
      if (_.property('data.alreadySign')(data)) return;
      return doForm('speedSign', {
        'noWaitPrize': 'false',
        inviterId: _.head(shareCodes) || 'JO6fIuW4u8JXLgl2Lsw9HQ==',
      }).then(data => {
        if (!self.isSuccess(data)) return;
        const {signAmount, cashDrawAmount, aveAmount, couponRecord} = data.data || {};
        const enableWithdraw = +cashDrawAmount >= +aveAmount;
        api.log(`签到金获得: ${signAmount}, 当前为: ${cashDrawAmount}, 提现目标: ${aveAmount}`);
        enableWithdraw && api.log('可以提现了, 请在app中操作');
        !_.isEmpty(couponRecord) && api.log(`额外获得: ${JSON.stringify(_.pick(couponRecord, ['couponDesc', 'couponValue', 'couponUsedValue']))}`);
      });
    });
  }
}

singleRun(LiteSign).then();

module.exports = LiteSign;
