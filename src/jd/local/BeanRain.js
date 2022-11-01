const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');

class BeanRain extends Template {
  static scriptName = 'BeanRain';
  static scriptNameDesc = '新品豆雨';
  static shareCodeTaskList = [];
  static dirname = __dirname;
  static commonParamFn = () => ({});
  static times = 1;
  static needInApp = false;
  static needInPhone = true;
  static needOriginProMd = true;

  static async doMain(api) {
    const self = this;

    const originBody = [
      [
        {
          'projectId': 992463,
          'encryptProjectId': '3C28GnF7XGBRdyfrmc5CUMV9q7bm',
          'assignmentId': 1015689,
          'encryptAssignmentId': '3ctgBoCmLVT22qmeKXe9PhRF4kfj',
        },
        {
          'completionFlag': true,
          'sourceCode': 'acehby20210924',
          'encryptProjectId': '3C28GnF7XGBRdyfrmc5CUMV9q7bm',
          'encryptAssignmentId': '3ctgBoCmLVT22qmeKXe9PhRF4kfj',
        },
      ],
      [
        {
          'projectId': 992397,
          'encryptProjectId': '2Hp1k6nThCcCdsG7Yu2fponFeVCv',
          'assignmentId': 1015619,
          'encryptAssignmentId': '3c1UYoiXAuVCffASWpUEQeE2sx2a',
        },
        {
          'completionFlag': true,
          'sourceCode': 'acehby20210924',
          'encryptProjectId': '2Hp1k6nThCcCdsG7Yu2fponFeVCv',
          'encryptAssignmentId': '3c1UYoiXAuVCffASWpUEQeE2sx2a',
        },
      ],
    ];

    for (const bodys of originBody) {
      await getBean(...bodys);
    }

    async function getBean(queryInteractiveInfoBody, doInteractiveAssignment) {
      await api.doForm('queryInteractiveInfo', {
        sign: 11,
        appid: 'babelh5',
        t: getMoment().valueOf(),
        body: queryInteractiveInfoBody,
      });
      await sleep(10);
      await api.doGet('doInteractiveAssignment', {
        client: 'wh5',
        clientVersion: '1.0.0',
        appid: 'redrain-2021',
        body: doInteractiveAssignment,
      }).then(data => {
        const successRewards = _.get(data, 'rewardsInfo.successRewards');
        if (!successRewards) return api.log(data.msg);
        api.log(`获得 ${_.map(_.flatten(_.values(successRewards)), 'rewardName').join()}`);
      });
    }
  }
}

singleRun(BeanRain).then();

module.exports = BeanRain;
