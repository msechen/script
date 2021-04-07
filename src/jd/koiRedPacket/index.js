const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const md5 = require('js-md5');

const {necklace} = require('../../../charles/api');

class KoiRedPacket extends Template {
  static scriptName = 'KoiRedPacket';
  static scriptNameDesc = '锦鲤红包';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;
  static needOriginH5 = true;

  static apiOptions = {
    options: {
      headers: {
        referer: 'https://happy.m.jd.com/babelDiy/Zeus/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
      },
    },
    signData: {
      appid: 'jd_mp_h5',
      client: 'jd_mp_h5',
      clientVersion: '9.2.4',
    },
  };

  static isSuccess(data) {
    return this._.property('code')(data) === 0;
  }

  static apiNamesFn() {
    const self = this;
    const _ = this._;

    async function receiveTaskRedPacket(api, taskType) {
      return api.doFormBody('receiveTaskRedpacket', {taskType});
    }

    return {
      // 获取任务列表
      getTaskList: {
        name: 'taskHomePage',
        paramFn: self.commonParamFn,
        async successFn(data, api) {
          // writeFileJSON(data, 'taskHomePage.json', __dirname);

          if (!self.isSuccess(data)) return [];

          if (self.isFirstLoop()) {
            for (const shareCode of self.shareCodeTaskList) {

            }
          }

          const result = [];

          const taskList = _.property('data.result.taskInfos')(data) || [];
          for (let {
            innerStatus: status,
            taskType,
            requireCount: maxTimes,
            stockStatus: times,
            waitDuration,
          } of taskList) {
            if ([4].includes(status) || [0/* 去领券中心领3张优惠券 */].includes(taskType)) continue;
            if (status === 3) {
              await receiveTaskRedPacket(api, taskType);
              continue;
            } else if (status === 7) {
              await api.doFormBody('startTask', generateToken({taskType}));
            }

            if ([2, 7].includes(status) && (taskType === 1)) {/* 从京东首页进领券中心逛10s */
              const [task] = await api.doForm('getCcTaskList', necklace.getCcTaskList[0]).then(data => _.property('result.taskList')(data) || []);
              if (!task) continue;
              await sleep(+_.property('detail.requireBrowseSeconds')(task) || 10);
              const targetForm = necklace.reportCcTask.find(form => JSON.parse(form.body).taskId.match(task.taskId));
              targetForm && await api.doForm('reportCcTask', targetForm);
              await receiveTaskRedPacket(api, taskType);
              continue;
            }

            let list = (await api.doFormBody('getTaskDetailForColor', {taskType}).then(data => _.property('data.result.advertDetails')(data)) || [])
            .filter(o => o.status === 0).map(o => ({taskType, detailId: o.id/*, followCode: 0*/}));

            list.length && result.push({list, option: {maxTimes, times, waitDuration}});
          }

          return result;
        },
      },
      doTask: {
        name: 'taskReportForColor',
        paramFn: o => generateToken(o),
        async successFn(data, api) {
          if (_.property('data.result.innerTaskStatus')(data) === 3) {
            return receiveTaskRedPacket(api, _.property('data.result.taskType')(data));
          }
        },
      },
      afterGetTaskList: {
        name: 'h5activityIndex',
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          const {waitOpenTimes: maxTimes, id: redPacketId} = _.property('data.result.redpacketInfo')(data) || {};
          if (!redPacketId) return;
          await self.loopCall([], {
            maxTimes,
            async firstFn() {
              return api.doFormBody('h5receiveRedpacket', generateToken({redPacketId}));
            },
          });
        },
      },
      doRedeem: {
        name: 'h5activityIndex',
        paramFn: () => ({isjdapp: 1}),
        async successFn(data, api) {
          if (!self.isSuccess(data)) return;
          self.log(`获取到的红包为: ${_.property('data.result.redpacketInfo.packetTotalSum')(data)}`);
        },
      },
    };
  };

  static async beforeRequest(api) {
    const self = this;
    const _ = this._;

    const index = self.currentCookieTimes === 0 ? 1 : 0;
    if (self.isFirstLoop()) {
      await api.doFormBody('h5launch', {followShop: 0});
      const redPacketId = await api.doFormBody('h5activityIndex').then(data => _.property('data.result.redpacketInfo.id')(data));
      self.shareCodeTaskList[index] = _.assign(self.shareCodeTaskList[index] || {}, {redPacketId});
    }
    if (self.getNowHour() === 0) return; // 按需进行
    const shareCode = self.shareCodeTaskList[self.currentCookieTimes];
    if (!shareCode) return;
    const {redPacketId, isDone} = shareCode;
    if (!redPacketId || isDone) return;
    await api.doFormBody('jinli_h5assist', {
      'clientInfo': {},
      redPacketId,
      followShop: 0,
    });
    shareCode.isDone = true;
  }
}

function generateToken(body) {
  const token = md5(md5(`j${JSON.stringify(body)}D`));
  return _.assign({token}, body);
}

module.exports = KoiRedPacket;
