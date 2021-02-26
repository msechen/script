const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');
const _ = require('lodash');
const webSocket = require('../../lib/webSocket');

const {common} = require('../../../charles/api');

class BeautyMakeup extends Template {
  static scriptName = 'BeautyMakeup';
  static scriptNameDesc = '美丽颜究院';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static isSuccess(data) {
    return _.property('code')(data) === '0';
  }

  //{"msg":{"type":"action","args":{},"action":"shop_products"}}

  static async doMain(api) {
    const self = this;

    let token = '';
    let checkUpData = {};
    let userData = {};

    await initToken();
    if (!token) return;

    const wsMsg = {
      //初始化 请求
      init: {'msg': {'type': 'action', 'args': {'source': 1}, 'action': '_init_'}},
      stats: {'msg': {'type': 'action', 'args': {'source': 'wanyiwan'}, 'action': 'stats'}},
      //签到 请求
      sign_in_1: {'msg': {'type': 'action', 'args': {}, 'action': 'sign_in'}},
      sign_in_2: {
        'msg': {
          'action': 'write',
          'type': 'action',
          'args': {'action_type': 1, 'channel': 2, 'source_app': 2},
        },
      },
      //获取任务进度 请求
      checkUp: {'msg': {'type': 'action', 'args': {}, 'action': 'check_up'}},
      //获取店铺及商品信息 请求
      shopProducts: {'msg': {'type': 'action', 'args': {}, 'action': 'shop_products'}},
      //完成浏览会场任务 请求
      meetingplace_view: {'msg': {'type': 'action', 'args': {'source': 1}, 'action': 'meetingplace_view'}},
      //完成浏览商品任务 请求
      add_product_view_1: {'msg': {'type': 'action', 'args': {'add_product_id': 0}, 'action': 'add_product_view'}},
      add_product_view_2: {
        'msg': {
          'action': 'write',
          'type': 'action',
          'args': {'action_type': 9, 'channel': 2, 'source_app': 2, 'vender': ''},
        },
      },
      add_product_view_3: {
        'msg': {
          'action': 'write',
          'type': 'action',
          'args': {'action_type': 5, 'channel': 2, 'source_app': 2, 'vender': ''},
        },
      },
      //完成店铺浏览任务 请求
      shop_view_1: {'msg': {'type': 'action', 'args': {'shop_id': ''}, 'action': 'shop_view'}},
      shop_view_2: {
        'msg': {
          'action': 'write',
          'type': 'action',
          'args': {'action_type': 6, 'channel': 2, 'source_app': 2, 'vender': ''},
        },
      },
      //获取每日问题题目 请求
      get_question: {'msg': {'type': 'action', 'args': {}, 'action': 'get_question'}},
      //提交每日问答 请求
      submit_answer: {'msg': {'type': 'action', 'args': {'commit': {}, 'correct': 3}, 'action': 'submit_answer'}},
      //查询生产坑位信息 请求
      produce_position_info: {'msg': {'type': 'action', 'args': {'position': ''}, 'action': 'produce_position_info'}},
      //新手任务 请求
      newcomer_update: {'msg': {'type': 'action', 'args': {}, 'action': 'newcomer_update'}},
      //获取生产材料列表 请求
      get_produce_material: {'msg': {'type': 'action', 'args': {}, 'action': 'get_produce_material'}},
      //收取生产材料 请求
      material_fetch: {
        'msg': {
          'type': 'action',
          'args': {'position': '', 'replace_material': false},
          'action': 'material_fetch',
        },
      },
      //生产材料 请求
      material_produce: {
        'msg': {
          'type': 'action',
          'args': {'position': '', 'material_id': 0},
          'action': 'material_produce',
        },
      },
      //研发产品列表 请求
      product_lists: {'msg': {'type': 'action', 'args': {'page': 1, 'num': 10}, 'action': 'product_lists'}},
      //获取正在研发产品列表 请求
      product_producing: {'msg': {'type': 'action', 'args': {}, 'action': 'product_producing'}},
      //研发产品 请求
      product_produce: {'msg': {'type': 'action', 'args': {'product_id': 0, 'amount': 0}, 'action': 'product_produce'}},
      //收取研发产品 请求
      product_fetch: {'msg': {'type': 'action', 'args': {'log_id': 0}, 'action': 'product_fetch'}},
      //三餐签到
      check_up_receive: {'msg': {'type': 'action', 'args': {'check_up_id': 0}, 'action': 'check_up_receive'}},
      //获取福利列表 请求
      get_benefit: {'msg': {'type': 'action', 'args': {}, 'action': 'get_benefit'}},
      //兑换奖品 请求
      to_exchange: {'msg': {'type': 'action', 'args': {'benefit_id': 0}, 'action': 'to_exchange'}},
    };
    const ws = webSocket.init(`wss://xinruimz-isv.isvjcloud.com/wss/?token=${token}`);
    ws.on('open', async () => {
      sendMessage(wsMsg.init);
      await sleep(2);
      sendMessage(wsMsg.stats);
      await sleep();
      sendMessage(wsMsg.shopProducts);
      await sleep();
      !checkUpData['today_answered'] && sendMessage(wsMsg.get_question);

      // TODO 确认什么时候签到
      // await signIn();
      // //执行每日问答
      // await answerQuestion();
      // //材料生产相关操作
      // await meterial();
      // //产品生产相关操作
      // await productProduce();
      // //兑换福利
      // await exchange();
    });
    ws.on('message', onMessage);

    async function initToken() {
      const isvToken = await api.doFormBody('isvObfuscator', void 0, common.isvObfuscator[0]).then(data => {
        if (self.isSuccess(data)) return data['token'];
      });
      if (!isvToken) return;
      token = await api.doUrl('https://xinruimz-isv.isvjcloud.com/api/auth', {
        headers: {
          cookie: `IsvToken=${isvToken}`,
          origin: 'https://xinruimz-isv.isvjcloud.com',
        },
        body: {
          'token': isvToken,
          'source': '01',
        },
      }).then(data => _.property('access_token')(data));
    }

    async function onMessage(result) {
      self.log(result);
      const {data, code, msg, action} = JSON.parse(result) || {};
      if (code !== 200) return self.log(`${action}请求失败, msg: ${msg}`);

      self.log(action);
      self.log(JSON.stringify(data));

      const allActions = {
        async check_up(data) {
          checkUpData = data;
          // if (_.isEmpty(checkUpData['check_up'])) {
          //   await signIn();
          // }
          // await handleCheckUpReceive();
          await meetingPlace();
        },
        get_user(data) {
          userData = data;
        },
        get_package(data) {
        },
        async shop_products(data) {
          await handleViewShop(data['shops']);
          await handleAddProduct(data['products']);

          await sleep(2);
          sendMessage(wsMsg.get_benefit);
        },
        async get_question(data) {
          await handleAnswer(data);
        },
        async get_benefit(data) {
          await exchange(data);
        },
      };
      allActions[action] && allActions[action](data);
    }

    // 签到
    async function signIn() {
      sendMessage(wsMsg.sign_in_1);
      await sleep();
      // TODO 确认该逻辑是否有效
      // sendMessage(msg.sign_in_2);
    }

    // 浏览会场
    async function meetingPlace() {
      for (let i = checkUpData['meetingplace_view'].length; i < checkUpData['mettingplace_count']; i++) {
        sendMessage(wsMsg.meetingplace_view);
        await sleep();
      }
    }

    // 三餐签到
    async function handleCheckUpReceive() {
      // TODO 确认该逻辑怎么生成
      if (_.isEmpty(checkUpData['check_up'])) return;
      wsMsg.check_up_receive.msg.args.check_up_id = checkUpData['check_up'][0].id;
      sendMessage(wsMsg.check_up_receive);
    }

    // 加购
    async function handleAddProduct(list) {
      for (let i = checkUpData['product_adds'].length; i < checkUpData['daily_product_add_times']; i++) {
        const {id, shop_id: shopId} = list[i];
        wsMsg.add_product_view_1.msg.args.add_product_id = id;
        sendMessage(wsMsg.add_product_view_1);
        await sleep();
        // msg.add_product_view_2.msg.args.vender = shopId;
        // sendMessage(msg.add_product_view_2);
        // await sleep();
        // TODO 确认该逻辑要不
        // sendMessage(msg.add_product_view_3);
        // msg.add_product_view_3.msg.args.vender = shopId;
      }
    }

    // 浏览关注店铺
    async function handleViewShop(list) {
      for (let i = checkUpData['shop_view'].length; i < checkUpData['daily_shop_follow_times']; i++) {
        const {id, vender_id: venderId} = list[i];
        wsMsg.shop_view_1.msg.args.shop_id = id;
        sendMessage(wsMsg.shop_view_1);
        await sleep();
        // TODO 确认该逻辑要不
        // msg.shop_view_2.msg.args.vender = venderId;
        // sendMessage(msg.shop_view_2);
      }
    }

    async function handleAnswer(data) {
      wsMsg.submit_answer.msg.args.commit = _.fromPairs(data.map(({id, answers}) => [id, +answers]));
      sendMessage(wsMsg.submit_answer);
    }

    async function exchange(data) {
      for (const {id, name, times_limit: times, day_limit: maxTimes} of data) {
        if (name.match('京豆')) {
          wsMsg.to_exchange.msg.args.benefit_id = id;
          await self.loopCall([], {
            times, maxTimes, duration: 1,
            firstFn() {
              sendMessage(wsMsg.to_exchange);
            },
          });
        }
      }
    }

    function sendMessage(data) {
      ws.send(_.isObject(data) ? JSON.stringify(data) : data);
    }

    // const tokenKey = await api.doFormBody('genToken', void 0, common.genToken[0]).then(data => {
    //   if (data.code === '0') return data['tokenKey'];
    // });
    // if (!tokenKey) return;
    // api.cookie = `IsvToken=${tokenKey}; ${api.cookie}`;
  }
}

module.exports = BeautyMakeup;
