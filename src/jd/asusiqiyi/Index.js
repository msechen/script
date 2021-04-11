const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {sleepTime} = require('../../lib/cron');
const CryptoJS = require('crypto-js');

class Asusiqiyi extends Template {
  static scriptName = 'Asusiqiyi';
  static scriptNameDesc = '视频会员-做任务得豆豆';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static concurrent = true;

  static apiOptions = {
    options: {
      uri: 'https://asusiqiyi.m.jd.com/hsiqy/task',
      headers: {
        referer: 'https://asusiqiyi.m.jd.com/',
      },
    },
  };

  static isSuccess(data) {
    return data['code'] === 200;
  }

  static async doMain(api) {
    const self = this;

    let stopWithNotBean = false;

    const enableExchange = await handleDoTask();

    if (enableExchange) await handleExchange();

    async function handleDoTask() {
      const {
        taskShop,
        taskCart,
        taskBrowse,
        taskSupport, // 助力任务需要手动完成
        taskIqy,
      } = await api.doGetPath('taskInfo').then(data => data.data) || {};

      const taskConfig = [
        [taskShop, ['shopInfo', 'followShop'], item => _.pick(item, 'shopId')],
        [
          taskCart,
          ['cartList', 'addCart'],
          ({skuId}) => {
            const pin = api.cookie.split(';')[0].split('=')[1].trim();
            const enStr = encrypt(pin + skuId);
            return {skuId, enStr};
          },
        ],
        [taskBrowse, ['browseList', 'toBrowse', 'getBrowsePrize'], item => _.pick(item, 'skuId')],
      ];

      for (const [task, [fId1, fId2, fId3], getFormFn] of taskConfig) {
        if (task !== 1) continue;
        if (stopWithNotBean) break;
        const list = await api.doGetPath(fId1).then(data => data.data) || [];
        for (const item of list) {
          if (stopWithNotBean) break;
          const form = getFormFn(item);
          await api.doPath(fId2, form).then(data => {
            if (!fId3) afterGetBean(data);
          });
          if (!fId3) continue;
          await sleep(15);
          await api.doPath(fId3, form).then(afterGetBean);
        }
      }

      return taskSupport === 2 && taskIqy === 4;
    }

    async function handleExchange() {
      const phone = '';
      if (!phone) return;
      const enableChange = await _exchange();
      if (enableChange) return;
      api.log('开始定时兑换');
      await sleepTime(24);
      await _exchange();

      async function _exchange() {
        const {checkStatus} = await api.doGetUrl('https://asusiqiyi.m.jd.com/hsiqy/iqiyi/findPreCheck?isPlat=false', {
          needDelay: false,
        }).then(data => {
          if (!self.isSuccess(data)) api.log(data.msg);
          return data.data || {};
        });
        const enableChange = checkStatus === '1';
        if (!enableChange) return enableChange;
        await api.doUrl('https://asusiqiyi.m.jd.com/hsiqy/iqiyi/saveIqiyiBuy', {
          method: 'POST',
          form: {phone},
        }).then(data => {
          if (_.property('data.buyStatus')(data) === '1') return api.log('兑换成功!');
          api.log(`兑换结果: ${data.msg}`);
        });
      }
    }

    function afterGetBean(data) {
      const number = _.property('data.jdNum')(data);
      if (!number) {
        stopWithNotBean = true;
        return api.log('做任务无豆, 暂停');
      }
      number && api.log(`获得豆豆: ${number}`);
    }
  }
}

const It = '12z65c88d1212p16';

function encrypt(t) {
  var e = t
    , n = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }
    , a = CryptoJS.enc.Utf8.parse(It)
    , r = CryptoJS.AES.encrypt(e, a, n)
    , i = r.toString().replace(/\//g, '_');
  return i = i.replace(/\+/g, '-'),
    i;
}

function decrypt(t) {
  var e = t.replace(/-/g, '+').replace(/_/g, '/')
    , n = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }
    , a = CryptoJS.enc.Utf8.parse(It)
    , r = CryptoJS.AES.decrypt(e, a, n)
    , i = CryptoJS.enc.Utf8.stringify(r);
  return i;
}

singleRun(Asusiqiyi).then();

module.exports = Asusiqiyi;
