const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

// 活动入口
const indexUrl = 'https://h5.m.jd.com/babelDiy/Zeus/2PTXhrEmiMEL3mD419b8Gn9bUBiJ/index.html';

class SuperBrandDay extends Template {
  static scriptName = 'SuperBrandDay';
  static scriptNameDesc = '超级品牌日';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static activityEndTime = '2022-11-30';

  static apiOptions = {
    options: {
      qs: {
        body: {brandActivityId: ''},
        appid: 'content_ecology',
      },
    },
  };

  static apiExtends = {
    requestFnName: 'doGetBody',
  };

  static async beforeRequest(api) {
    // 更新 activityId
    // https://storage.360buyimg.com/babel/00657178/1975420/production/dev/index.bundle.458c84b777833efa78a8.js
    return api.commonDo({
      form: {
        functionId: 'qryCompositeMaterials',
        body: {
          'qryParam': '[{"type":"advertGroup","id":"04405074","mapTo":"Brands"}]',
          'activityId': '2vSNXCeVuBy8mXTL2hhG3mwSysoL',
          'pageId': '1411763',
          'reqSrc': 'jmfe',
          'geo': {'lng': '', 'lat': ''},
        },
        client: 'wh5',
      },
    }).then(data => {
      const brandActivityId = _.get(data, 'data.Brands.list[0].extension.copy1');
      const beginTime = _.get(data, 'data.Brands.list[0].beginTime');
      const endTime = _.get(data, 'data.Brands.list[0].endTime');
      api.options.qs.body.brandActivityId = brandActivityId;
      if (!brandActivityId) return true;
      if (beginTime && getMoment().isBefore(beginTime)) return true;
      if (endTime && getMoment().isAfter(endTime)) return true;
    });
  }

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
          if (!self.isSuccess(data)) {
            api.log(data.data.bizMsg);
            return false;
          }
          const {couponList, goodsList, jpeasList} = _.property('data.result')(data);
          _.concat(couponList, goodsList, jpeasList).forEach(o => {
            api.log(`获得 ${o['prizeName']}`);
          });
        },
        repeat: true,
      },
    };
  }
}

singleRun(SuperBrandDay).then();

module.exports = SuperBrandDay;
