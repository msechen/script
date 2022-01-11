const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, replaceObjectMethod} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

const indexUrl = 'https://prodev.m.jd.com/mall/active/fARfxZh3zdMqs4tkFBhpqaQKTGA/index.html';

class FuQian extends Template {
  static scriptName = 'FuQian';
  static scriptNameDesc = '抽福签';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static isWh5 = true;
  static needOriginProMd = true;

  static apiOptions() {
    return {
      options: {
        form: {
          appid: 'publicUseApi',
          body: {'encryptProjectId': 'MD6S5z8gGgtP2VLJkLqmWPuDtHe', 'sourceCode': 'aceaceglqd20211215'},
          t: getMoment().valueOf(),
        },
      },
    };
  }

  static async beforeRequest(api) {}

  static async doMain(api, shareCodes) {
    const self = this;
    await self.beforeRequest(api);

    const assignmentList = await api.doFormBody('queryInteractiveInfo').then(_.property('assignmentList')) || [];
    for (const {
      encryptAssignmentId,
      assignmentStartTime, assignmentEndTime,
      completionFlag,
      assignmentName,
    } of assignmentList) {
      if (getMoment().isBefore(assignmentStartTime) || getMoment().isAfter(assignmentEndTime) || completionFlag) continue;
      await api.doFormBody('doInteractiveAssignment', {encryptAssignmentId, completionFlag: true}).then(data => {
        const rewardsInfo = _.get(data, 'rewardsInfo', {});
        api.log(`[${assignmentName}] 获得: ${JSON.stringify(rewardsInfo)}`);
      });
    }
  }
}

singleRun(FuQian).then();

module.exports = FuQian;
