const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const brandActivityId = 'aeb4960d-bb33-49d4-a9a3-4314b68e8420';

class SuperBrandDay extends Template {
  static scriptName = 'SuperBrandDay';
  static scriptNameDesc = '超级品牌日';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiOptions = {
    options: {
      qs: {
        body: {brandActivityId},
        appid: 'content_ecology',
      },
      headers: {
        referer: 'https://h5.m.jd.com/babelDiy/LFMXOAZKETWEHJAVNBHJ/2PTXhrEmiMEL3mD419b8Gn9bUBiJ/index.html',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doGetBody',
  };

  static apiNamesFn() {
    const self = this;

    return {
      // 获取任务列表
      getTaskList: {
        name: 'superbrand_getMaterial',
        async successFn(data, api) {
          // writeFileJSON(data, 'superbrand_getMaterial.json', __dirname);

          if (!self.isSuccess(data)) return [];

          // 获取已完成任务列表
          // await api.doGetBody('superbrand_getHomeData', {brandActivityIds: brandActivityId});
          const result = [];
          const list = [
            {
              taskType: 1,
              taskId: _.property('data.result.cmsTaskShopId')(data),
            },
            {
              taskType: 2,
              taskId: _.property('data.result.cmsTaskLink')(data),
            },
          ];
          await api.commonDo({
            qs: {
              functionId: 'qryCompositeMaterials',
              client: 'wh5',
            },
            form: {
              body: {
                'qryParam': JSON.stringify([
                  {'type': 'productGroup', 'id': _.property('data.result.cmsTaskGroupId')(data), 'mapTo': 'Tasks0'},
                ]),
              },
            },
          }).then(data => {
            _.property('data.Tasks0.list')(data).forEach(o => {
              list.push({
                taskType: 3,
                taskId: o['skuId'],
              });
            });
          });

          result.push({list, option: {maxTimes: list.length}});

          return result;
        },
      },
      doTask: {
        name: 'superbrand_doMyTask',
        paramFn: o => o,
      },
      doRedeem: {
        name: 'superbrand_getGift',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return false;
          const {couponList, goodsList, jpeasList} = _.property('data.result')(data);
          _.concat(couponList, goodsList, jpeasList).forEach(o => {
            self.log(`获得 ${o['prizeName']}`);
          });
        },
        repeat: true,
      },
    };
  }
}

singleRun(SuperBrandDay).then();

module.exports = SuperBrandDay;
