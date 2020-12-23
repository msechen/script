const Template = require('../base/template');

const {sleep, writeFileJSON, getNowMoment, getNowDate} = require('../../lib/common');
const moment = require('moment-timezone');

class Sign extends Template {
  static scriptName = 'Sign';
  static times = 1;

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static async doMain(api) {
    const self = this;
    const _ = this._;

    async function doTask({name, url, options, isSuccessFn, rewardOutputFn}) {
      await api.doUrl(url, options).then(data => {
        if (isSuccessFn && isSuccessFn(data)) {
          if (!rewardOutputFn) {
            self.log(`${name} 成功`);
            return;
          }
          self.log(`${name} 获取到 ${rewardOutputFn(data)}`);
        }
      });
    }

    const getLuckDraw = {
      name: '天天优惠大乐透',
      times: 2,
      url: 'https://api.m.jd.com/client.action?functionId=getLuckDrawEntrance&body=%7B%22platformType%22%3A%221%22%7D&appid=couponPackDetail&client=m&clientVersion=1.0.0&area=19_1601_3634_63217&geo=%5Bobject%20Object%5D&uuid=c6993893af46e44aa14818543914768cf2509fbf',
      options: {
        headers: {
          origin: 'https://h5.m.jd.com',
        },
      },
      isSuccessFn: data => _.property('result.luckyDrawData.checkWinOrNot')(data),
      rewardOutputFn: data => {
        const luckyDrawData = _.property('result.luckyDrawData')(data);
        if (luckyDrawData) return `${luckyDrawData.prizeName}: 可抵扣${luckyDrawData.discountDesc}(${luckyDrawData.quotaDesc})`;
      },
    };

    const shopSignUrl = [
      ['better', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%22905CF71BDAEED1B9193B90C6184F6BCB%22,%22venderId%22:1000281262,%22activityId%22:10168782,%22type%22:56,%22actionType%22:7}'],
      ['1', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%222435F399E2341025F2A253DE2C8F0ACD%22,%22venderId%22:590464,%22activityId%22:10188380,%22type%22:56,%22actionType%22:7}'],
      ['2', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%229BC4979E04E7F58499500BA498282050%22,%22venderId%22:10290074,%22activityId%22:10188050,%22type%22:56,%22actionType%22:7}'],
      ['3', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%22493F80D2F93AD3591911610FE675280E%22,%22venderId%22:1000328145,%22activityId%22:10182070,%22type%22:56,%22actionType%22:7}'],
      ['青岛啤酒', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%225C8E6953811539DBBE5ADBFA91C86B7F%22,%22venderId%22:1000337488,%22activityId%22:10186913,%22type%22:56,%22actionType%22:7}'],
      ['鑫鼎达', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%2285A3D0B675FFC38EB4F668DEB7B7834D%22,%22venderId%22:136277,%22activityId%22:10190083,%22type%22:56,%22actionType%22:7}'],
      ['健力宝', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%225CFB610B608B023B725D0F113F556FE6%22,%22venderId%22:1000334541,%22activityId%22:10192181,%22type%22:56,%22actionType%22:7}'],
      ['博世', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%227928F5620C2A9B00201EC47BADBD469A%22,%22venderId%22:1000002423,%22activityId%22:10180133,%22type%22:56,%22actionType%22:7}'],
      ['10', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%22B2EA002F495ABA53E4E7EFD841E4436A%22,%22venderId%22:775364,%22activityId%22:10202561,%22type%22:56,%22actionType%22:7}'],
      ['5', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%2200417C8DFBCC2B97711B288A842B844B%22,%22venderId%22:1000014143,%22activityId%22:10199998,%22type%22:56,%22actionType%22:7}'],
      // ['比乐', 'https://api.m.jd.com/api?appid=interCenter_shopSign&loginType=2&functionId=interact_center_shopSign_signCollectGift&body={%22token%22:%22DE0B3D71D67D96A0CE19DE6A12F8A842%22,%22venderId%22:1000095723,%22activityId%22:10163552,%22type%22:56,%22actionType%22:7}'],
    ];
    const shopSign = {
      name: '店铺签到',
      url: '',
      options: {
        headers: {
          referer: 'https://h5.m.jd.com',
        },
      },
      isSuccessFn: data => data.code === 200,
    };

    const jrSign = {
      name: '金融签到',
      url: 'https://ms.jr.jd.com/gw/generic/hy/h5/m/signIn1',
      options: {
        form: {
          reqData: JSON.stringify({
            'channelSource': 'JRAPP6.0',
            'riskDeviceParam': JSON.stringify({
              'fp': 'a4db0a1fce8f6a33eb42486a17550c54',
              // 'eid': 'JKP6TAIXZT7VIVQPXRSYSCOFYEP6CTXBHMRKONH6STFNUUD6N44NPWZUPMFJCDQ5E3ITR7S5E6COFPQOEQOQJ27QFQ',
              // 'appId': 'com.jd.jinrong',
              // 'openUUID': '6d664c1875cbf8d8c804a6f543b1bce5fc973834',
              // 'clientVersion': '6.0.40',
              // 'startNo': 155,
              // 'terminalType': '02',
              // 'appType': 1,
              // 'sdkToken': '2VPHH4ISILYFBBTK32LYYSEYWYA4PULO7LINWJ7ZAWHOUNLQSSOGPBNXFBPCTOFMS2G7F3PSXEXHS',
            }),
          }),
        },
      },
      isSuccessFn: data => _.property('resultData.resBusiCode')(data) === 0,
    };

    const double12Sign = {
      name: '双十二主会场签到',
      url: 'https://api.m.jd.com/client.action',
      options: {
        headers: {
          origin: 'https://h5.m.jd.com',
        },
        form: {
          functionId: 'noahHaveFunLottery',
          appid: 'publicUseApi',
          body: '{"actId":"RRDWrPqXWYj3CX4HnbQLDHRsmoJ2XU"}',
          client: 'wh5',
          clientVersion: '1.0.0',
        },
      },
      isSuccessFn: data => _.property('subCode')(data) === '0',
      rewardOutputFn: data => {
        return _.property('lotteryResult.hongBaoList[0].prizeName')(data);
      },
    };

    const jrSign12 = {
      name: '金融12月天天打卡',
      url: 'https://ms.jr.jd.com/gw/generic/hy/h5/m/signIn12',
      options: {
        form: {
          reqData: '{"channelLv":"syfc","site":"JD_JR_APP"}',
        },
      },
      isSuccessFn: data => _.property('resultCode')(data) === 0,
      rewardOutputFn: data => _.property('resultData.message')(data),
    };

    // TODO 待确认是否生效
    const jrBean = {
      name: '金融豆豆',
      url: 'https://nu.jr.jd.com/gw/generic/jrm/h5/m/process',
      options: {
        form: {
          reqData: JSON.stringify({
            'actCode': '1D06AA3B0F',
            'type': 3,
            'riskDeviceParam': JSON.stringify({
              'fp': 'd83856dcb12631cf271cf14d98a0da11',
              // 'eid': 'JKP6TAIXZT7VIVQPXRSYSCOFYEP6CTXBHMRKONH6STFNUUD6N44NPWZUPMFJCDQ5E3ITR7S5E6COFPQOEQOQJ27QFQ',
              // 'appId': 'com.jd.jinrong',
              // 'openUUID': '6d664c1875cbf8d8c804a6f543b1bce5fc973834',
              // 'clientVersion': '6.0.52',
              // 'startNo': 155,
              // 'token': 'LU3Z7HBCUPHJ5UV2UECAW4WYJCES576HJCDWKQUXRC2J6B6V7TB6GXPF3LKK5WR6PP2GMAMHLKUOW',
              // 'terminalType': '02',
              // 'appType': 1,
              // 'sdkToken': 'jdd01NNECYT355RKVDKSOV7W4DZUSGSJBN2OJRZZNM2UAQNCK57FXTZKAA4UJGLQ44HQU7TN4C7TMVAW6CEYNHH57FVTWDPIAM2LLY7THVGA01234567',
            }),
          }),
        },
      },
      isSuccessFn: data => _.property('resultData.resBusiCode')(data) === 0,
    };

    const expressSign = {
      name: '快递签到',
      url: 'https://lop-proxy.jd.com/jiFenApi/signInAndGetReward',
      options: {
        headers: {
          origin: 'https://jingcai-h5.jd.com/',
          referer: 'https://jingcai-h5.jd.com/',
          'lop-dn': 'jingcai.jd.com',
          appparams: '{"appid":158,"ticket_type":"m"}',
        },
        body: [{'userNo': '$cooMrdGatewayUid$'}],
      },
      isSuccessFn: data => _.property('code')(data) === 1,
      rewardOutputFn: data => _.property('content[0].title')(data),
    };

    const taskOptions = [
      jrSign,
      {
        name: '十元街签到',
        url: 'https://api.m.jd.com/api?functionId=userSignIn&appid=swat_miniprogram&body={"activityId":"8d6845fe2e77425c82d5078d314d33c5"}',
        options: {
          headers: {
            referer: 'https://servicewechat.com/wxa5bf5ee667d91626/107/page-frame.html',
          },
        },
        isSuccessFn: data => data.code === 0,
        rewardOutputFn: data => _.property('data.todayPrize.beanAmount')(data),
      },
      {
        name: '秒杀红包雨',
        times: 3,
        url: 'https://api.m.jd.com/client.action?functionId=noahRedRainLottery&client=wh5&clientVersion=1.0.0&body=%7B%22actId%22%3A%22RRA318jCtaXhZJgiLryM1iydEhc7Jna%22%7D',
        isSuccessFn: data => data.subCode === '0',
        rewardOutputFn: data => _.property('lotteryResult.jPeasList[0].quantity')(data),
      },
      getLuckDraw,
      ...shopSignUrl.map(([name, url]) => _.assign({}, shopSign, {url, name: `${shopSign.name}(${name})`})),
      double12Sign,
      jrSign12,
      jrBean,
      expressSign,
    ];

    for (const options of taskOptions) {
      const {times = 1} = options;
      for (let i = 0; i < times; i++) {
        await doTask(options);
      }
    }
  };
}

module.exports = Sign;
