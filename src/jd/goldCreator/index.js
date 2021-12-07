const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class GoldCreator extends Template {
  static scriptName = 'GoldCreator';
  static scriptNameDesc = '金榜创造营';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static isWh5 = true;
  static times = 1;
  static apiOptions = {
    options: {
      form: {
        eufv: false,
        appid: 'content_ecology',
      },
    },
  };

  static async doMain(api) {
    const self = this;

    await api.doFormBody('goldCreatorTab', {'subTitleId': '', 'isPrivateVote': '0'}).then(async data => {
      // writeFileJSON(data, 'goldCreatorTab.json', __dirname);
      let {subTitleInfos, mainTitleHeadInfo: {stageId}} = data.result || {};
      let detailTaskList = [];
      for (let {matGrpId: groupId, subTitleId, batchId, taskId, hasVoted} of subTitleInfos) {
        taskId = +taskId;
        if (hasVoted === '1' && !_.isEmpty(detailTaskList)) continue;
        const detailData = await api.doFormBody('goldCreatorDetail', {
          groupId,
          stageId,
          subTitleId,
          batchId,
          taskId,
        }) || {};
        detailTaskList = _.property('result.taskList')(detailData).concat([_.get(detailData, 'result.signTask')]);
        if (hasVoted === '1') continue;
        // writeFileJSON(detailData, 'goldCreatorDetail.json', __dirname);
        const skuList = _.property('result.skuList')(detailData) || [];
        const {rankId, skuId} = _.maxBy(skuList, o => +o['voteCount']) || skuList[0];
        await api.doFormBody('goldCreatorDoTask', {
          stageId,
          subTitleId,
          skuId,
          taskId,
          'itemId': '1',
          rankId,
          'type': 1,
          batchId,
        }).then(log);
      }

      for (const {taskId, taskItemInfo: {itemId}, taskType, taskStatus} of _.flatten(detailTaskList)) {
        if (taskStatus === 2) continue;
        await api.doFormBody('goldCreatorDoTask', {taskId, itemId, taskType, 'batchId': '1'}).then(log);
      }

      function log(data) {
        const {lotteryMsg, taskMsg, lotteryCode, lotteryScore} = data.result || {};
        if (lotteryCode === '0') {
          api.log(`获得豆豆: ${lotteryScore}`);
        } else {
          api.log(lotteryMsg || taskMsg);
        }
      }
    });
  }
}

singleRun(GoldCreator).then();

module.exports = GoldCreator;
