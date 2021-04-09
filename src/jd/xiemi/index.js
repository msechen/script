const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class Xiemi extends Template {
  static scriptName = 'Xiemi';
  static scriptNameDesc = '爱心种草';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;

  static apiOptions = {
    options: {
      uri: 'https://xiemi.m.jd.com/homePage',
      headers: {
        origin: 'https://xiemi.m.jd.com',
        referer: 'https://xiemi.m.jd.com',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doPath',
  };

  static isSuccess(data) {
    return data['code'] === 200;
  }

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'getHomeSkuList',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'getHomeSkuList.json', __dirname);

          if (!self.isSuccess(data)) return [];

          const currentShareId = await api.doUrl('https://xiemi.m.jd.com/support/init').then(data => _.property('data.shareId')(data));
          self.updateShareCodeFn(currentShareId);
          const shareCodes = self.getShareCodeFn();
          for (const shareId of shareCodes) {
            await api.doUrl('https://xiemi.m.jd.com/support/do/support', {form: {shareId}}).then(data => {
              if (!self.isSuccess(data)) return;
              api.log(`助力成功, 获得豆豆: ${data.data.jingBeanNum}`);
            });
          }

          const result = [];

          const {plantGrassNum: times, canPlantGrassNum: maxTimes, skuVoList} = data.data || {};

          let list = skuVoList.filter(o => !o['plantGrass']).map(o => _.pick(o, ['shopId', 'skuId', 'appointmentState']));

          result.push({list, option: {maxTimes, times}});

          return result;
        },
      },
      doTask: {
        name: 'plantGrass',
        paramFn: o => o,
      },
      afterGetTaskList: {
        name: 'getHomeSkuList',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          const {lotteryVoList} = data.data;
          for (const {lotteryStep, status} of lotteryVoList) {
            if (status === 1) {
              await api.doPath('income/bean', {type: lotteryStep}).then(data => {
                const beanNum = _.property('data.jingbean.jingBeanNum')(data);
                api.log(`${data.msg}, 获得豆豆: ${beanNum}`);
              });
            }
          }
        },
      },
    };
  }
}

singleRun(Xiemi).then();

module.exports = Xiemi;
