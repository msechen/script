const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

const {common} = require('../../../charles/api');

class Mlyjy extends Template {
  static scriptName = 'Mlyjy';
  static scriptNameDesc = '集卡瓜分';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});

  static apiOptions = {
    options: {
      uri: 'https://xinruimz1-isv.isvjcloud.com/mlyjyapi',
      headers: {
        origin: 'https://xinruimz1-isv.isvjcloud.com',
        referrer: 'https://xinruimz1-isv.isvjcloud.com/mlyjy',
        Accept: 'application/x.jd-cosmetic-618.v1+json',
      },
    },
  };

  static async doMain(api, shareCodes) {
    const self = this;

    const tokenForm = common.isvObfuscator.find(o => (JSON.parse(o.body).url || '').match('xinruimz1-isv.isvjcloud.com'));
    if (!tokenForm) return api.log('请导入正确的token');

    let token = await api.commonDo({
      qs: {
        functionId: 'isvObfuscator',
      },
      form: tokenForm,
    }).then(data => data['token']);

    if (!token) return api.log('genToken 请求出错');
    api.options.headers['Cookie'] = '';
    await api.doPath('jd-user-info', void 0, {
      body: {
        token,
        'source': '01',
      },
    }).then(data => {
      api.options.headers['Authorization'] = `${data['token_type']} ${data['access_token']}`;
    });

    await handleDoShare();
    await handleSign();
    await handleDoTask();
    await handleDrew();

    async function handleSign() {
      const notSign = await api.doGetPath('sign_list').then(data => data.find(o => o['is_today'] === 1 && !o['is_sign']));
      notSign && await api.doGetPath('sign_in').then(data => {
        api.log(`签到成功, 获得豆豆: ${data['beans']}`);
      });
    }

    async function handleDoShare() {
      const inviterId = await api.doGetPath('get_user_info').then(data => data.id);
      self.updateShareCodeFn(inviterId);
      for (const shareCode of self.getShareCodeFn()) {
        await api.doPath('invite', void 0, {body: {inviter_id: shareCode}});
      }
    }

    async function handleDoTask() {
      const taskState = await api.doGetPath('task_state');

      if (!taskState['is_view_beauty']) {
        await api.doGetPath('beauty_view');
      }

      if (!taskState['ar_sao_times']) {
        await api.doGetPath('ar_sao');
      }

      for (let i = taskState['today_meetingplace_view_nums']; i < taskState['daily_meetingplace_view_times']; i++) {
        await api.doGetPath('meetingplace_view');
        await sleep(2);
      }
      for (let i = taskState['beauty_times']; i < taskState['daily_beauty_num']; i++) {
        await api.doGetPath('coins_to_times');
        await sleep(2);
      }

      // TODO 浏览店铺需要手动执行
      // for (let i = taskState['today_follow_nums']; i < taskState['daily_shop_follow_times']; i++) {
      //   const shop = taskState['shop_open_cards'].find(o => !o['is_done']);
      //   if (!shop) break;
      //   await api.doPath('jd_interact', void 0, {
      //     body: {
      //       'actionType': 6,
      //       'channel': 2,
      //       'sourceApp': 2,
      //       'vender': shop['vender_id'],
      //     },
      //   });
      //   shop['is_done'] = 1;
      //   await sleep(2);
      // }

      for (let i = taskState['today_product_add_nums']; i < taskState['daily_product_add_times']; i++) {
        const product = taskState['product_adds'].reverse().find(o => !o['is_done']);
        if (!product) break;
        await api.doPath('add_product', void 0, {body: {product_id: product['id']}});
        product['is_done'] = 1;
        await sleep(2);
      }
    }

    // 抽卡
    async function handleDrew() {
      let userInfo = await api.doGetPath('get_user_info');
      for (let i = 0; i < userInfo['draw_times']; i++) {
        userInfo = await api.doGetPath('get_user_info');
        if (userInfo['is_yizu']) {
          // 抽金卡
          await api.doGetPath('synthetize');
          return handleDrew();
        }
        // 抽普卡
        await api.doGetPath('drew');
      }
    }
  }
}

singleRun(Mlyjy).then();

module.exports = Mlyjy;
