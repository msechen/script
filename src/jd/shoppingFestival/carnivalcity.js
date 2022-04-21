const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');
const md5 = require('js-md5');

const indexUrl = 'https://welfare.m.jd.com';

class Carnivalcity extends Template {
  static scriptName = 'Carnivalcity';
  static scriptNameDesc = '手机狂欢城';
  static shareCodeTaskList = [];
  static times = 2;
  static concurrent = true;
  static concurrentOnceDelay = 0;
  static activityEndTime = '2022-04-20';

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/api',
      form: {
        appid: 'reinforceints',
        loginType: 2,
      },
      headers: {
        origin: indexUrl,
        referer: `${indexUrl}/`,
      },
    },
    formatDataFn(data) {
      if (![200/*请求成功*/, 4001/*当前任务已完成*/].includes(data['code'])) {
        throw this.log(`请求错误, data: ${JSON.stringify(data)}`);
      }
      return data.data;
    },
  };

  static isSuccess(data) {
    return data['code'] === 200;
  }

  static async doMain(api) {
    const self = this;
    api.stopTaskMaxTimes = 5;

    const doFormBody = (path, body = {}, form = {}) => {
      const apiMapping = `/khc/${path}`;
      _.assign(body, {apiMapping});
      _.assign(form, {body, t: getMoment().valueOf()});
      // TODO 目前暂不需要加密
      return api.doForm('carnivalcity_jd_prod', form/*, generateApiOptions(apiMapping, form)*/);
    };
    const doGetPath = (path, qs) => doFormBody(path, qs);
    const doPostPath = (path, form) => doFormBody(path, form);
    const doTaskPath = (path, form) => doPostPath(`task/${path}`, form);

    self.isFirstLoop() && await handleDoHeadTask();
    self.isFirstLoop() && await handleTask();
    await handleShare();


    async function handleDoHeadTask() {
      let headInfoTask = await doPostPath('index/headInfo');
      if (headInfoTask && headInfoTask['status'] === '0') {
        for (let i = headInfoTask['taskIndex']; i < headInfoTask['taskCount']; i++) {
          await handleDoBrowseTask(_.pick(headInfoTask, ['taskIndex', 'taskId', 'taskType']), true);
          headInfoTask = await doPostPath('index/headInfo');
        }
        return handleDoHeadTask();
      }
    }

    async function handleTask() {
      return doGetPath('index/indexInfo').then(async data => {
        const {brandList, hotProductList} = data;
        if (hotProductList) {
          for (const {id, status} of hotProductList) {
            if (status === '4') continue;
            await handleDoBrowseTask({
              id,
              taskMark: 'hot',
              type: 'browse',
              logMark: 'browseHotSku',
            });
          }
        }
        for (const {brandId} of brandList) {
          const {
            skuTask,
            shopTask,
            meetingTask,
            questionTask,
          } = await doGetPath('index/brandTaskInfo', {brandId});
          const dataParams = [
            {type: 'presell', logMark: 'browseSku'},
            {type: 'follow', logMark: 'browseShop'},
            {type: 'meeting', logMark: 'browseVenue'},
          ];
          for (const [index, taskList] of [skuTask, shopTask, meetingTask].entries()) {
            for (const {id, status} of taskList) {
              if (status === '4') continue;
              await handleDoBrowseTask(_.assign({
                brandId,
                id,
                taskMark: 'brand',
              }, dataParams[index]));
            }
          }
          for (const {id, result, answers} of _.concat(questionTask)) {
            if (result === '1') continue;
            await doTaskPath('doQuestion', {
              brandId,
              questionId: id,
              result: +answers.find(o => o['right']).answerNo,
            }).then(afterTaskOutput);
          }
        }
      });
    }

    async function handleShare() {
      const currentShareId = await doTaskPath('getSupport').then(data => data.shareId);
      self.updateShareCodeFn(currentShareId);
      for (const shareId of self.getShareCodeFn()) {
        await doTaskPath('doSupport', {shareId}).then(data => {
          api.log(`助力成功, 获得豆豆${data.jdNums}`);
        });
      }
    }

    async function handleDoBrowseTask(param, isHead) {
      const brandId = param['brandId'] || '';
      const browseId = await doTaskPath(isHead ? 'doBrowseHead' : 'doBrowse', param).then(data => data.browseId);
      await sleep(6);
      await doTaskPath(isHead ? 'getHeadBrowsePrize' : 'getBrowsePrize', {brandId, browseId}).then(afterTaskOutput);
    }

    function afterTaskOutput(data) {
      const {jingBean, integral} = data;
      if (+jingBean === 0) {
        --api.stopTaskMaxTimes;
        if (api.stopTaskMaxTimes < 0) {
          const msg = '目前没豆, 停止任务';
          api.log(msg);
          throw msg;
        }
      }
      api.log(`获得豆豆: ${jingBean}, 获得分数: ${integral}`);
    }
  }
}

function generateApiOptions(path, data, isGet = true) {
  const timestamp = getMoment().valueOf();
  const sign = generateSign(path, data, timestamp, isGet);
  const options = {
    headers: {
      timestamp,
      sign,
    },
  };
  _.assign(options, isGet ? {
    qs: {t: timestamp},
  } : {form: data});
  return options;
}

function generateSign(path, data = {}, timestamp, isGet = true) {
  data = _.assign({}, data);
  const md5AppKey = '07035cabb557f09a5';
  if (isGet) data.t = timestamp;

  return sign(data, md5AppKey + timestamp, path);

  function sign(t, e, n) {
    var a = ''
      , i = n.split('?')[1] || '';
    if (t) {
      if ('string' == typeof t)
        a = t + i;
      else if (_.isPlainObject(t)) {
        var r = [];
        for (var s in t)
          r.push(s + '=' + t[s]);
        a = r.length ? r.join('&') + i : i;
      }
    } else
      a = i;
    if (a) {
      var o = a.split('&').sort().join('');
      return md5(o + e);
    }
    return md5(e);
  }
}

singleRun(Carnivalcity).then();

module.exports = Carnivalcity;
