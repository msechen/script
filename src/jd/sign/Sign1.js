const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, matchMiddle} = require('../../lib/common');
const _ = require('lodash');
const {getMoment} = require('../../lib/moment');

class Sign1 extends Template {
  static scriptName = 'Sign1';
  static scriptNameDesc = '签到集合1';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static needInPhone = true;
  static needOriginProMd = true;
  static times = 1;

  static apiOptions() {
    return {
      options: {
        form: {
          appid: 'babelh5',
          sign: 11,
          body: {sourceCode: 'aceaceqingzhan'},
          t: getMoment().valueOf(),
        },
      },
    };
  };

  static isSuccess(data) {
    return _.property('subCode')(data) === '0';
  };

  static async doMain(api, shareCodes) {
    const self = this;
    const urlArray = [
      // 'https://pro.m.jd.com/mall/active/3joSPpr7RgdHMbcuqoRQ8HbcPo9U/index.html',
      'https://pro.m.jd.com/mall/active/ZrH7gGAcEkY2gH8wXqyAPoQgk6t/index.html',
      'https://pro.m.jd.com/mall/active/kPM3Xedz1PBiGQjY4ZYGmeVvrts/index.html',
    ];

    for (const url of urlArray) {
      const actId = url.split('/')[url.split('/').length - 2];
      const encryptProjectId = await getParamFromUrl(url);
      if (!encryptProjectId) continue;
      const assignmentList = await api.doFormBody('queryInteractiveInfo', {encryptProjectId}).then(_.property('assignmentList'));
      for (const {encryptAssignmentId, ext, completionFlag} of assignmentList) {
        if (!ext || completionFlag) continue;
        const {itemId} = ext[ext['extraType']];
        await api.doFormBody('doInteractiveAssignment', {
          encryptProjectId,
          encryptAssignmentId,
          itemId,
          completionFlag: true,
        }).then(data => {
          const msgs = [
            `[${actId}]`,
          ];
          if (!self.isSuccess(data)) {
            msgs.push(data.msg);
          } else {
            const {rewardsInfo: {successRewards, failRewards}} = data;
            if (_.isEmpty(successRewards)) {
              msgs.push(`签到失败 ${failRewards[0].msg}`);
            } else {
              msgs.push(`签到成功 ${_.flatten(_.values(successRewards)).map(o => o.rewardName).join(' ')}`);
            }
          }
          api.log(msgs.join(' '));
        });
      }
    }

    async function getParamFromUrl(url) {
      return api.doGetFileContent(url, {
        headers: {
          'user-agent': api.options.headers['user-agent'],
        },
      }).then(data => matchMiddle(data, {reg: /\\"encryptProjectId\\":\\"(\w*)\\"/}) || '');
    }
  }
}

singleRun(Sign1).then();

module.exports = Sign1;
