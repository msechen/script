const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');
const _ = require('lodash');
const md5 = require('js-md5');

class Carnivalcity extends Template {
  static scriptName = 'Carnivalcity';
  static scriptNameDesc = '手机狂欢城';
  static shareCodeTaskList = [];
  static times = 2;

  static apiOptions = {
    options: {
      uri: 'https://carnivalcity.m.jd.com/khc',
    },
    formatDataFn(data) {
      if (data['code'] !== 200) {
        Carnivalcity.log(`请求错误, ${data.msg}`);
        return {};
      }
      return data.data;
    },
  };

  static isSuccess(data) {
    return data['code'] === 200;
  }

  static async doMain(api) {
    const self = this;

    const doGetPath = (path, qs) => api.doGetPath(path, qs, generateApiOptions(`/khc/${path}`, qs));
    const doPostPath = (path, form) => api.doPath(path, form, generateApiOptions(`/khc/${path}`, form, false));
    const doTaskPath = (path, form) => doPostPath(`task/${path}`, form);

    self.isFirstLoop() && await handleTask();
    await handleShare();

    async function handleTask() {
      return doGetPath('index/indexInfo').then(async data => {
        const {brandList, hotProductList} = data;
        for (const {id, status} of hotProductList) {
          if (status === '4') continue;
          await handleDoBrowseTask({
            id,
            taskMark: 'hot',
            type: 'browse',
            logMark: 'browseHotSku',
          });
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
          self.log(`助力成功, 获得豆豆${data.jdNums}`);
        });
      }
    }

    async function handleDoBrowseTask(param) {
      const brandId = param['brandId'] || '';
      const browseId = await doTaskPath('doBrowse', param).then(data => data.browseId);
      await sleep(10);
      await doTaskPath('getBrowsePrize', {brandId, browseId}).then(afterTaskOutput);
    }

    function afterTaskOutput(data) {
      const {jingBean, integral} = data;
      self.log(`获得豆豆: ${jingBean}, 获得分数: ${integral}`);
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
