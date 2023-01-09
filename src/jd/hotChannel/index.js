const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment, replaceObjectMethod} = require('../../lib/common');
const {formatPasteData} = require('../../lib/charles');
const moment = require('moment-timezone');
const _ = require('lodash');

class HoTChannel extends Template {
  static scriptName = 'HoTChannel';
  static scriptNameDesc = '签到得金币(小程序)';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({
    appid: 'hot_channel',
    clientType: 'wxapp',
    client: 'apple',
    clientVersion: '7.24.150',
  });
  static dirname = __dirname;
  static times = 1;
  static cookieKeys = ['wq_uin', 'wq_skey'];
  static needInApp = false;

  static apiOptions = {
    options: {
      uri: 'https://api.m.jd.com/',
      headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x1800172f) NetType/WIFI Language/zh_CN',
        origin: 'https://servicewechat.com/wx91d27dbf599dff74/655/page-frame.html',
        referer: 'https://servicewechat.com/wx91d27dbf599dff74/655/page-frame.html',
        wqreferer: 'http://wq.jd.com/wxapp/pages/marketing/entry_task/index',
      },
      qs: {
        g_ty: 'ls',
        g_tk: '1844967756',
      },
      form: {
        loginType: 11,
      },
    },
  };

  static isSuccess(data) {
    return _.property('subCode')(data) === 0;
  };

  static async beforeRequest(api) {
    let needStop = !await this.updateWqAuthToken(api, true, true);
    if (needStop) return true;

    const defaultForm = `appid\thot_channel
    loginType\t11
    clientType\twxapp
    client\tapple
    clientVersion\t7.24.290
    _ste\t2`;

    const _join = func => v => [defaultForm, func, v].join('\n');

    const requestStore = {
      MiniTask_ChannelPage: [`functionId\tMiniTask_ChannelPage
t\t1672818360399
body\t{"source":"task"}
appid\thot_channel
loginType\t11
clientType\twxapp
client\tapple
clientVersion\t7.24.290
h5st\t20230104154600413;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;431c678aeef92358388bd7936e449f21e71ced6d51146c1665f920918f12b370;3.1;1672818360413;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624
_ste\t2`],
      MiniTask_ScanTask: [
        `t\t1672818341338
body\t{"actionType":1,"scanAssignmentId":"iWbrk51CW97AqVCMyyCdF5bCb7s","itemId":"8501677919"}
h5st\t20230104154541396;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;009e00eed650b7d9dd414deb9f94d5885b8946aa2d299bc8cdaf735d2df4094c;3.1;1672818341396;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818360075
body\t{"actionType":0,"scanAssignmentId":"iWbrk51CW97AqVCMyyCdF5bCb7s","itemId":"8501677919"}
h5st\t20230104154600108;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;ea255b8399ceb445bfd2bb6404cc7cc54539655587eb83f809f0f8ee5a2ad4e1;3.1;1672818360108;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818363237
body\t{"actionType":1,"scanAssignmentId":"2gsZP7CXbJbjRXurpJJ7Fj2piKbw","itemId":"6101703743"}
h5st\t20230104154603297;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;bed44e2cdd4feaee3b71eca9b8710fcb2fed03489aa0b5f15038be158c85f059;3.1;1672818363297;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818374795
body\t{"actionType":0,"scanAssignmentId":"2gsZP7CXbJbjRXurpJJ7Fj2piKbw","itemId":"6101703743"}
h5st\t20230104154614831;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;513e6498de68f0eda93c1ccde1e20d9981c7e9d9ed96ccc415092ccb42f2d56f;3.1;1672818374831;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818376743
body\t{"actionType":1,"scanAssignmentId":"38e9NH6pGS81RnZqMLABN2DH4LuH","itemId":"2701714729"}
h5st\t20230104154616801;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;fafca8ef3047b3673a5cfb4be89bf4ffe8d4b57a965c2c43e4ddf348b9037941;3.1;1672818376801;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818426207
body\t{"actionType":0,"scanAssignmentId":"38e9NH6pGS81RnZqMLABN2DH4LuH","itemId":"2701714729"}
h5st\t20230104154706250;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;02b4a4542958dba4439e6296824ef46513af3b317beb1368c0b08bd3dfe9fa23;3.1;1672818426250;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818427856
body\t{"actionType":1,"scanAssignmentId":"4KV2MTmAHLCBzseXpHJJEaia5g22","itemId":"6101661425"}
h5st\t20230104154707865;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;8bad54894600aa720dc26a0366312313d3cf1af06539e7cc4095d7b3fdb1735d;3.1;1672818427865;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818439176
body\t{"actionType":0,"scanAssignmentId":"4KV2MTmAHLCBzseXpHJJEaia5g22","itemId":"6101661425"}
h5st\t20230104154719213;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;236ba5eb12adf6abdd506321b7157d124a1eedd907db733c9e701fecc1e6cbdd;3.1;1672818439213;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818440420
body\t{"actionType":1,"scanAssignmentId":"2CiyZ4RB1tKRbnjmaKr1WxmTcx3n","itemId":"0201724058"}
h5st\t20230104154720493;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;bb40873542d39b68b3b976c6947b9f300be6637230ede6a9e23798cbe813e46f;3.1;1672818440493;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818457047
body\t{"actionType":0,"scanAssignmentId":"2CiyZ4RB1tKRbnjmaKr1WxmTcx3n","itemId":"0201724058"}
h5st\t20230104154737089;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;1eaf01776083ee4a70ce4b3a81f2e38d16068ea697ac2eb86a69d594754dbacc;3.1;1672818457089;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672900142932
clientVersion\t8.13.30
body\t{"actionType":1,"scanAssignmentId":"2CiyZ4RB1tKRbnjmaKr1WxmTcx3n","itemId":"7901734938"}
h5st\t20230105142902982;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;91ffedda64e1673cca2565b7ff2fee8c8346229ce6d22dc525ba44f30183b4f5;3.1;1672900142982;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de`,
        `t\t1672900153019
clientVersion\t8.13.30
body\t{"actionType":0,"scanAssignmentId":"2CiyZ4RB1tKRbnjmaKr1WxmTcx3n","itemId":"7901734938"}
h5st\t20230105142913053;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;07ae9b576375b26477ca12e3f0246a9758b82ca79b77771b270b378ff4f5ba80;3.1;1672900153053;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de`,
        `t\t1672900166103
clientVersion\t8.13.30
body\t{"actionType":1,"scanAssignmentId":"2gsZP7CXbJbjRXurpJJ7Fj2piKbw","itemId":"8001731453"}
h5st\t20230105142926153;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;cd16ec7122b3463fb1ca447d1f890bd3a53d321f0150c71815d12658cdeea647;3.1;1672900166153;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de`,
        `t\t1672900178586
clientVersion\t8.13.30
body\t{"actionType":0,"scanAssignmentId":"2gsZP7CXbJbjRXurpJJ7Fj2piKbw","itemId":"8001731453"}
h5st\t20230105142938622;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;51ec8c030c3dd4d399aa7d8e7c089cf073af4d2b8581d80686bd51553f83c2a6;3.1;1672900178622;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de`,
      ].map(_join(`functionId\tMiniTask_ScanTask`)),
      MiniTask_ScanReward: [
        `t\t1672818458197
body\t{"scanAssignmentId":"iWbrk51CW97AqVCMyyCdF5bCb7s"}
h5st\t20230104154738271;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;5cbca2b731433127b6d89b4516d2d090adc7a9ac5d6bf4fa6de1a020f12aff20;3.1;1672818458271;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818459411
body\t{"scanAssignmentId":"2CiyZ4RB1tKRbnjmaKr1WxmTcx3n"}
h5st\t20230104154739484;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;042a7a3c6cb7fc9b0f8c34165a8a18df35578175653d6a6c8456456bd6a16713;3.1;1672818459484;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818460455
body\t{"scanAssignmentId":"4KV2MTmAHLCBzseXpHJJEaia5g22"}
h5st\t20230104154740501;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;42bbdafafec098c3c0675b1b09c776df827322820dbc296ef75c0be78ecc69b7;3.1;1672818460501;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818461545
body\t{"scanAssignmentId":"38e9NH6pGS81RnZqMLABN2DH4LuH"}
h5st\t20230104154741609;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;4ae97f1cba81e81d24021031a5d64e4a113a8e9fdbbb4dc4c1a9c706d871d8af;3.1;1672818461609;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672818462680
body\t{"scanAssignmentId":"2gsZP7CXbJbjRXurpJJ7Fj2piKbw"}
h5st\t20230104154742746;8595957878772137;60d61;tk02aa64b1bb218pMngxeDNUUzEwlHh5ZA2dgljXYWSkDLLOmQ1lUCg/Cnq/AP86xrs+/CGZ2c81ARcwAuzOsuPJAWJS;261d797aa9a63582a7887ed3074d1ddfa0f3b55b535b3ff9320e0ca451c07bd8;3.1;1672818462746;4a21f21f3b5dd7c0338578afd557db5800ecef38946529e501ab323358416099156aeab979e7aae0799ec3c25169b624`,
        `t\t1672900180138
clientVersion\t8.13.30
body\t{"scanAssignmentId":"2CiyZ4RB1tKRbnjmaKr1WxmTcx3n"}
h5st\t20230105142940197;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;4698ebb603e530abed669737932f2c830ba734717fabe5334cd4d083fd401b09;3.1;1672900180197;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de`,
        `t\t1672900181203
clientVersion\t8.13.30
body\t{"scanAssignmentId":"2gsZP7CXbJbjRXurpJJ7Fj2piKbw"}
h5st\t20230105142941249;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;97384400102278757e446226caa7fc9e37f60fda89c3703cabc9b6fc70c41185;3.1;1672900181249;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de`,
      ].map(_join(`functionId\tMiniTask_ScanReward`)),
      miniTask_getDrainageTaskReward: [
        `functionId\tminiTask_getDrainageTaskReward
t\t1672900190818
body\t{"rewardAssignmentId":"79dRvBQWmT2Dwyu4vvyZUt1Pa6W"}
appid\thot_channel
loginType\t11
clientType\twxapp
client\tapple
clientVersion\t8.13.30
h5st\t20230105142950879;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;ab8cf2745d6af0059ff15b94ae9f0eab0009b0ca8f11d81c8e7a677476eb7f2f;3.1;1672900190879;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de
_ste\t2`,
      ],
      mini_doSign: [
        `functionId\tmini_doSign
t\t1672900138782
body\t{"itemId":"1"}
appid\thot_channel
loginType\t11
clientType\twxapp
client\tapple
clientVersion\t8.13.30
h5st\t20230105142858787;0995207151185613;60d61;tk02a907f1bb018pMXgydDBhT3JDBZ5j5p6TkX4SVBdmQ/iu9pTxhVpgtUJICLCaaHI6vxVH9Az31mEcc2knTqwHU8HL;92a46df6b3bbf37fb9b97f9a67c27bac2a76a9e2bec0353c07c60459c7476f1a;3.1;1672900138787;4a21f21f3b5dd7c0338578afd557db58b458d9b88f68f66ae2353dff89496702c6845c40c5eac82d98db2dcc44fba5de
_ste\t2`,
      ],
    };
    replaceObjectMethod(api, 'doFormBody', ([functionId, body, signData, options]) => {
      options = options || {};
      const form = requestStore[functionId].map(formatPasteData).find(form => form.body === JSON.stringify(body));
      if (!form) {
        api.log(`没找到对应数据, 请检查下(functionId: ${functionId}, body: ${JSON.stringify(body)})`);
        options.blockRequest = true;
      }
      return [functionId, body, signData, _.assign(options, {form})];
    });

    /* TODO 本地加密失败 */
    return;
    const keys = [
      'MiniTask_ChannelPage',
      'MiniTask_ScanTask',
      'MiniTask_ScanReward',
      'miniTask_getDrainageTaskReward',
    ];
    const common = {
      appId: '60d61',
      platform: 'applet',
      fingerprint: '6903269806175342',
      disableAutoUpdate: true,
      version: '3.0',
    };
    this.injectEncryptH5st(api, {
      config: _.fromPairs(keys.map(key => [key, common])),
      signKeys: ['body', 'appid', 'clientType', 'client', 'clientVersion', 't'],
    });
  }

  static async doMain(api, shareCodes) {
    const self = this;
    // TODO 目前还是短期有效而已, 仅做记录
    return;
    await self.beforeRequest(api);

    const {
      scanTaskList = [],
      drainageTask = {},
      signInfo,
    } = await api.doFormBody('MiniTask_ChannelPage', {source: 'task'}).then(_.property('data')) || {};
    // TODO 都临时屏蔽
    const enableDrainageTask = 0, enableSign = 0;
    // 指定入口领取
    if (enableDrainageTask && drainageTask.status === 0) {
      const reportData = await api.doUrl('https://api.m.jd.com/wechat/drainage/visitReport', {
        form: {
          functionId: 'WechatDrainage_visitReport',
          appid: 'hot_channel',
          loginType: 11,
        },
        headers: {
          referer: 'https://servicewechat.com/wx91d27dbf599dff74/680/page-frame.html',
        },
      });
      if (self.isSuccess(reportData)) {
        await api.doFormBody('miniTask_getDrainageTaskReward', {rewardAssignmentId: drainageTask.rewardAssignmentId}).then(data => {
          if (self.isSuccess(data)) {
            api.log(`指定入口领取成功: ${_.get(data, 'data.rewardAmount')} 金币`);
          }
        });
      }
    }
    // 签到
    if (enableSign && signInfo) {
      const currentSignTask = signInfo['signTaskList'].find(o => o['currentDay']);
      if (currentSignTask['signStatus'] === 0) {
        await api.doFormBody('mini_doSign', {'itemId': '1'}).then(data => {
          if (self.isSuccess(data)) {
            api.log(`签到成功: ${_.get(data, 'data.toastMsg')}`);
          } else {
            api.log(`签到失败: ${data.message}`);
          }
        });
      }
    }
    for (const {status, scanAssignmentId, itemId, times} of scanTaskList) {
      if (status === 2) continue;
      if (status === 0) {
        const data = await api.doFormBody('MiniTask_ScanTask', {
          'actionType': 1,
          scanAssignmentId,
          itemId,
        });
        if (!self.isSuccess(data)) continue;
        await sleep(times);
        await api.doFormBody('MiniTask_ScanTask', {
          'actionType': 0,
          scanAssignmentId,
          itemId,
        });
      }
      await api.doFormBody('MiniTask_ScanReward', {scanAssignmentId}).then(data => {
        if (!self.isSuccess(data)) return;
        api.log(`获得金币: ${_.get(data, 'data.[0].discount')}`);
      });
    }
  }
}

module.exports = HoTChannel;
