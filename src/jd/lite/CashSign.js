const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class CashSign extends Template {
  static scriptName = 'CashSign';
  static scriptNameDesc = '极速版签到提现';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInSpeedApp = true;
  static times = 1;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
      headers: {
        referer: 'https://daily-redpacket.jd.com/?activityId=9WA12jYGulArzWS7vcrwhw',
      },
      form: {
        body: {
          'linkId': '9WA12jYGulArzWS7vcrwhw',
          'serviceName': 'dayDaySignGetRedEnvelopeSignService',
          'business': 1,
        },
        appid: 'activities_platform',
      },
    },
  };

  static async doMain(api) {
    await api.doFormBody('apSignIn_day').then(data => {
      const {retCode, retMessage} = data.data || {};
      if (retCode === 0) {
        api.log('签到成功');
      } else {
        api.log(retMessage);
      }
    });
    await api.doFormBody('signPrizeDetailList', {'pageSize': 20, 'page': 1}).then(async data => {
      const cashData = (_.property('data.prizeDrawBaseVoPageBean.items')(data) || []).filter(o => o['prizeType'] === 4 && o['prizeStatus'] === 0);
      if (_.isEmpty(cashData)) return;
      await api.doFormBody('apCashWithDraw', {
        'businessSource': 'DAY_DAY_RED_PACKET_SIGN',
        'base': _.pick(cashData[0], ['prizeType', 'business', 'id', 'poolBaseId', 'prizeGroupId', 'prizeBaseId']),
      });
    });
  }
}

singleRun(CashSign).then();

module.exports = CashSign;
