const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun, matchMiddle, parallelRun} = require('../../lib/common');
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
  static concurrent = true;
  static concurrentOnceDelay = 0;
  static times = 1;

  static apiOptions() {
    return {
      options: {
        form: {
          appid: 'babelh5',
          sign: 11,
          body: {sourceCode: 'acetttsign'},
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
    let urlArray = [
      'https://pro.m.jd.com/mall/active/3joSPpr7RgdHMbcuqoRQ8HbcPo9U/index.html', // plus 会员专属
      // 'https://pro.m.jd.com/mall/active/ZrH7gGAcEkY2gH8wXqyAPoQgk6t/index.html',
      'https://pro.m.jd.com/mall/active/3SC6rw5iBg66qrXPGmZMqFDwcyXi/index.html',
      'https://pro.m.jd.com/mall/active/kPM3Xedz1PBiGQjY4ZYGmeVvrts/index.html',
      // 'https://prodev.m.jd.com/mini/active/3EVVqbSAdb1jWkED4D6rhVX1Xyf4/index.html',
      'https://prodev.m.jd.com/mall/active/2QUxWHx5BSCNtnBDjtt5gZTq7zdZ/index.html',
      'https://pro.m.jd.com/mall/active/412SRRXnKE1Q4Y6uJRWVT6XhyseG/index.html',
      'https://prodev.m.jd.com/mall/active/kPM3Xedz1PBiGQjY4ZYGmeVvrts/index.html',
      // ['https://prodev.m.jd.com/mall/active/dHKkhs2AYLCeCH3tEaHRtC1TnvH/index.html', {needInApp: true}],
    ];

    urlArray = [
      // 不需要验证
      // 'https://prodev.m.jd.com/mall/active/2BspupMr6qenk9JUWpbAnepLHjwy/index.html',
      'https://prodev.m.jd.com/mall/active/3uvPyw1pwHARGgndatCXddLNUxHw/index.html',
    ];

    for (let i = 0; i < 3; i++) {
      await handleSign();
      await sleep(3);
    }

    async function handleSign() {
      await parallelRun({
        list: urlArray,
        runFn: _sign,
      });

      async function _sign(item) {
        item = _.concat(item);
        const [url, options] = item;
        const actId = url.split('/')[url.split('/').length - 2];
        const encryptProjectId = await getParamFromUrl(url, actId, options);
        if (!encryptProjectId) return;
        const assignmentList = await api.doFormBody('queryInteractiveInfo', {encryptProjectId}).then(_.property('assignmentList')) || [];
        if (_.isEmpty(assignmentList)) {
          return removeExpiredUrl(url);
        }
        for (const {encryptAssignmentId, ext, completionFlag} of assignmentList) {
          if (!ext || completionFlag) continue;
          const {itemId} = _.get(ext, ext['extraType'], {});
          if (!itemId) {
            removeExpiredUrl(url);
            continue;
          }
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
              const msg = data.msg;
              msgs.push(msg);
              if (/太火爆/.test(msg)) {
                removeExpiredUrl(url);
              }
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
    }

    function removeExpiredUrl(url) {
      api.log(`${url} 活动已结束`);
      urlArray = urlArray.filter(item => _.first(_.concat(item)) !== url);
    }

    async function getParamFromUrl(url, actId, options = {}) {
      const data = await api.doGetFileContent(url, {
        headers: {
          'user-agent': options.needInApp ? self.appCompleteUserAgent : api.options.headers['user-agent'],
          cookie: api.cookie,
        },
      });
      let encryptProjectId = matchMiddle(data, {reg: /\\"encryptProjectId\\":\\"(\w*)\\"/}) || '';
      if (!encryptProjectId) {
        const page = matchMiddle(data, {reg: /"paginationFlrs":"(\[\[.+?]])"/});
        encryptProjectId = _.get(await qryH5BabelFloors(actId, page), 'encryptProjectId');
      }
      return encryptProjectId;
    }

    async function qryH5BabelFloors(activityId, paginationFlrs) {
      let paginationParam;
      let paginationParamUpdated = false;
      return _do(true);

      function _do(isInit = false) {
        if (isInit) {
          paginationParam = 1;
        }
        if (paginationParam < 0) return;
        return api.commonDo({
          ignorePrintLog: true,
          uri: 'https://api.m.jd.com/client.action',
          headers: {
            'user-agent': api.options.headers['user-agent'],
          },
          qs: {
            client: 'wh5',
            clientVersion: '1.0.0',
            functionId: 'qryH5BabelFloors',
          },
          form: {
            body: {activityId, paginationParam: `${paginationParam}`, paginationFlrs},
          },
        }).then(data => {
          if (data.subCode !== '0') {
            api.log(data.msg);
            return;
          }
          const target = _.get(data, 'floorList', []).find(o => _.get(o, 'boardParams.interaction', '').match('encryptProjectId'));
          if (!target) {
            if (!paginationParamUpdated) {
              paginationParam = +_.max(data.paginationParams || [1]);
              paginationParamUpdated = true;
            } else {
              --paginationParam;
            }
            return _do();
          }
          let result;
          try {
            result = JSON.parse(_.get(target, 'boardParams.interaction'));
          } catch (e) {
          }
          return result;
        });
      }
    }
  }
}

singleRun(Sign1).then();

module.exports = Sign1;
