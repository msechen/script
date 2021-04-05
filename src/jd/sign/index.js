const Template = require('../base/template');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');

class Sign extends Template {
  static scriptName = 'Sign';
  static scriptNameDesc = '签到集合';
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

    const meetingPlaceSign = {
      name: '源头好物',
      url: 'https://api.m.jd.com/client.action',
      options: {
        headers: {
          origin: 'https://h5.m.jd.com',
        },
        form: {
          functionId: 'noahHaveFunLottery',
          appid: 'publicUseApi',
          body: '{"actId":"RRD3eTfD2HFgPsg7GU68GL7Yqhseveh"}',
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

    const speedSign = {
      name: '极速版签到',
      url: 'https://api.m.jd.com/api?functionId=speedSign&body=%7B%22kernelPlatform%22%3A%22RN%22%2C%22activityId%22%3A%228a8fabf3cccb417f8e691b6774938bc2%22%2C%22noWaitPrize%22%3A%22false%22%7D&osVersion=14.2&rfs=0000&appid=lite-apple&lang=zh_CN&d_brand=apple&isBackground=N&client=apple&uuid=coW0lj7vbXVin6h7ON%2BtMNFQqYBqMahr&uts=0f31TVRjBSsgZHmA8SwAVDr8XvClBusknIA9Df6ILhujqCSJEiMg5RpGRh7CH9QBTYXnBtLSU7Kym6U31Qpw3KF094PV%2FdcFwCggw%2BWkrfK7ziOoZpKgwCf%2FMp0JXYByygQks9moca1iVHr67P29RSEzpfcnkbao7LB7OU4e%2F5J7kEMpuDsNENoGm6z2vtT72iea5kBadhUktdyLrv8bpA%3D%3D&partner=apple&wifiBssid=unknown&build=1036&openudid=362209a87559b31c2dad7860c2728b5f398d1ee6&clientVersion=3.3.0&scope=01&eid=eidId8e78121d5s8YJYRX9bATh%2BRBDD%2BlcdWvWCWEtgPvhHqpjhccf3NPGyx2G3grwpRGFZ0w%2Fm3S0sSAVMK1bgdCae7h1ntV1EpafBX2ITMFprS5NFa&networkType=wifi&area=19_1601_3634_63217&adid=9D996AE0-FB82-4BF1-A8C3-E58CD5828CD3&d_model=iPhone8%2C1&joycious=90&screen=750%2A1334&networklibtype=JDNetworkBaseAF&appid=lite-apple&t=1617576523730&sign=822730149ede1e7e546285c5220efe903655bfc38adc7e197edb3c6f90712fa7',
      options: {
        headers: {
          'user-agent': 'JDMobileLite/3.3.0 (iPhone; iOS 14.2; Scale/2.00)',
        },
      },
      isSuccessFn(data) {
        const isSucceed = data['subCode'] === 0;
        if (!isSucceed) self.log(data['msg']);
        return isSucceed;
      },
      rewardOutputFn: data => JSON.stringify(data),
    };

    const taskOptions = [
      // signRemote脚本已经实现, 已不需要
      // jrSign,
      {
        name: '十元街签到',
        url: 'https://api.m.jd.com/api?functionId=userSignIn&appid=swat_miniprogram&body={"activityId":"ccd8067defcd4787871b7f0c96fcbf5c"}',
        options: {
          headers: {
            referer: 'https://servicewechat.com/wxa5bf5ee667d91626/119/page-frame.html',
          },
        },
        isSuccessFn: data => data.code === 0,
        rewardOutputFn: data => _.property('data.todayPrize.beanAmount')(data),
      },
      getLuckDraw,
      expressSign,
      {
        name: '京喜签到',
        url: 'https://m.jingxi.com/pgcenter/sign/UserSignOpr',
        options: {
          headers: {
            'Referer': 'https://jddx.jd.com/m/jddnew/money/index.html',
          },
          qs: {
            sceneval: 2,
          },
        },
        isSuccessFn: data => _.property('retCode')(data) === 0 && (_.property('data.signStatus')(data) === 0),
      },
    ];

    if (process.env.JD_SPEED_SIGN_ENABLE) taskOptions.push(speedSign);

    const cashSign = [
      {
        name: '东喜双签',
        url: 'https://m.jingxi.com/double_sign/IssueReward',
        options: {
          headers: {
            'Referer': 'https://jddx.jd.com/m/jddnew/money/index.html',
          },
          qs: {
            sceneval: 2,
          },
        },
        isSuccessFn: data => {
          const isSucceed = _.property('retCode')(data) === 0 && (_.property('data.double_sign_status')(data) === 0);
          if (!isSucceed) self.log(JSON.stringify(data));
          return isSucceed;
        },
      },
      {
        name: '领现金-金融双签',
        url: 'https://nu.jr.jd.com/gw/generic/jrm/h5/m/process',
        options: {
          headers: {
            'referer': 'https://m.jr.jd.com/integrate/signincash/index.html',
          },
          form: {
            reqData: JSON.stringify({
              'actCode': 'F68B2C3E71',
              'type': 4,
              'frontParam': {'belong': 'xianjin'},
              'riskDeviceParam': JSON.stringify({
                'fp': 'dfc0f4908b93e9b55f2fc3eb85ec6d21',
              }),
            }),
          },
        },
        isSuccessFn: data => _.property('resultData.data.businessData.businessCode')(data) === '000sq',
      },
    ];

    for (const options of self.getNowHour() !== 0 ? cashSign : taskOptions) {
      const {times = 1} = options;
      for (let i = 0; i < times; i++) {
        await doTask(options);
      }
    }
  };
}

singleRun(Sign).then();

module.exports = Sign;
