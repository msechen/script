const Template = require('../base/template');

const {sleep, writeFileJSON} = require('../../lib/common');
const {getMoment} = require('../../lib/moment');

class Sign extends Template {
  static scriptName = 'Sign';
  static scriptNameDesc = '签到集合';
  static times = 1;

  static isSuccess(data) {
    return this._.property('code')(data) === '0';
  }

  static async doMain(api) {
    const self = this;
    const t = getMoment().valueOf();

    async function doTask({name, url, options, isSuccessFn, rewardOutputFn}) {
      await api.doUrl(url, options).then(data => {
        if (isSuccessFn && isSuccessFn(data)) {
          if (!rewardOutputFn) {
            api.log(`${name} 成功`);
            return;
          }
          api.log(`${name} 获取到 ${rewardOutputFn(data)}`);
        }
      });
    }

    const beanSign = {
      name: 'app京豆签到',
      url: 'https://api.m.jd.com/client.action',
      options: {
        qs: {
          functionId: 'signBeanIndex',
        },
        form: {
          appid: 'ld',
        },
      },
      isSuccessFn: data => _.get(data, 'data.status') === '1',
      rewardOutputFn: data => {
        const {dailyAward, continuityAward} = data.data;
        return `${_.get(dailyAward || continuityAward, 'beanAward.beanCount', 0)} 豆豆`;
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

    // 签到得积分, 积分可以换豆, 但是容易过期
    const expressSign = {
      name: '快递签到',
      url: 'https://lop-proxy.jd.com/jiFenApi/signInAndGetReward',
      options: {
        headers: {
          uuid: `${t}${t * 2}`,
          'jexpress-report-time': t,
          origin: 'https://jingcai-h5.jd.com/',
          referer: 'https://jingcai-h5.jd.com/',
          'lop-dn': 'jingcai.jd.com',
          appparams: '{"appid":158,"ticket_type":"m"}',
          'app-key': 'jexpress',
        },
        body: [{'userNo': '$cooMrdGatewayUid$'}],
      },
      isSuccessFn: data => _.property('code')(data) === 1,
      rewardOutputFn: data => _.property('content[0].title')(data),
    };

    const necklaceSignForm = require('../../../charles/api').necklace.ccSignInNecklace.find(o => JSON.parse(o.body).pin === self.getCurrentEnv('JD_NECKLACE_SIGN_PIN'));
    const necklaceSign = {
      name: '领券中心签到',
      url: 'https://api.m.jd.com/client.action',
      options: {
        // 这里需要自己的signData
        form: necklaceSignForm,
        qs: {
          functionId: 'ccSignInNecklace',
        },
        headers: {
          'User-Agent': 'jdapp',
        },
      },
      isSuccessFn: data => _.property('retCode')(data) === 0 && (_.property('result.signStatus.bizCode')(data) === '0'),
    };
    const jinTieBase = {
      options: {
        form: {
          reqData: {
            'source': 'JD_APP',
            'channel': 'scljticon',
            'channelLv': 'scljticon',
            'apiVersion': '4.0.0',
            'riskDeviceParam': '{"macAddress":"","imei":"","eid":"","openUUID":"","uuid":"","traceIp":"","os":"","osVersion":"","appId":"","clientVersion":"","resolution":"","channelInfo":"","networkType":"","startNo":42,"openid":"","token":"GZWL5AZLZGQSYJNO5G6WN6MHXI45CCPMANHZ3W6SAIBX3EOGIYUEVD37UXLLQX7YCUYAHCZRR67EM","sid":"","terminalType":"","longtitude":"","latitude":"","securityData":"","jscContent":"","fnHttpHead":"","receiveRequestTime":"","port":80,"appType":"","deviceType":"","fp":"4b0002be41944d73a6f8ed4151ee7e5d","ip":"","idfa":"","sdkToken":""}',
            'others': {'shareId': '', 'token': ''},
          },
        },
        headers: {
          Origin: 'https://u.jr.jd.com',
          Referer: 'https://u.jr.jd.com/uc-fe-growing/jintiepindao/?channelLv=scljticon',
        },
      },
      isSuccessFn: data => +_.property('resultData.code', data) === 0,
    };
    const jinTieSign = _.assign({}, jinTieBase, {
      name: '领金贴签到',
      url: 'https://ms.jr.jd.com/gw/generic/jrm/h5/m/channelSignInSubsidy',
      options: {
        form: {
          reqData: {
            'source': 'JD_APP',
            'channel': 'scljticon',
            'channelLv': 'scljticon',
            'apiVersion': '4.0.0',
            'riskDeviceParam': '{"macAddress":"","imei":"","eid":"","openUUID":"","uuid":"","traceIp":"","os":"","osVersion":"","appId":"","clientVersion":"","resolution":"","channelInfo":"","networkType":"","startNo":42,"openid":"","token":"GZWL5AZLZGQSYJNO5G6WN6MHXI45CCPMANHZ3W6SAIBX3EOGIYUEVD37UXLLQX7YCUYAHCZRR67EM","sid":"","terminalType":"","longtitude":"","latitude":"","securityData":"","jscContent":"","fnHttpHead":"","receiveRequestTime":"","port":80,"appType":"","deviceType":"","fp":"4b0002be41944d73a6f8ed4151ee7e5d","ip":"","idfa":"","sdkToken":""}',
            'others': {'shareId': '', 'token': ''},
          },
        },
      },
    });
    const jinTieDraw = _.assign({}, jinTieBase, {
      name: '获取金贴奖励',
      url: 'https://ms.jr.jd.com/gw/generic/jrm/h5/m/commonWelfareWithdraw',
      options: {
        form: {
          reqData: {
            'source': 'jdjr',
            'channel': 'scljticon',
            'channelLv': 'scljticon',
            'apiVersion': '4.0.0',
            'riskDeviceParam': '{"macAddress":"","imei":"","eid":"M7UO6SRTFR5GQS7SPKPOGT7ZZB6KH2I7CUXZGVFSPJ5773VII5RHNSVRM4FK4RSLDCBRG3QQUS4WNC5PZ2767E6D3Q","openUUID":"","uuid":"","traceIp":"","os":"","osVersion":"","appId":"","clientVersion":"","resolution":"","channelInfo":"","networkType":"","startNo":42,"openid":"","token":"GZWL5AZLZGQSYJNO5G6WN6MHXI45CCPMANHZ3W6SAIBX3EOGIYUEVD37UXLLQX7YCUYAHCZRR67EM","sid":"","terminalType":"","longtitude":"","latitude":"","securityData":"","jscContent":"","fnHttpHead":"","receiveRequestTime":"","port":80,"appType":"","deviceType":"","fp":"4b0002be41944d73a6f8ed4151ee7e5d","ip":"","idfa":"","sdkToken":""}',
            'type': 8,
            'operType': 'ttx',
          },
        },
      },
    });

    const taskOptions = [
      // signRemote脚本已经实现, 已不需要
      // jrSign,
      beanSign,
      expressSign,
      {
        name: '京东汽车领券签到',
        url: 'https://cgame-stadium.jd.com/api/v1/sign',
        options: {
          headers: {
            origin: 'https://pro.m.jd.com',
            referer: 'https://pro.m.jd.com/mall/active/dj6us2JJRLMMBb4iDaSK4wxvBMt/index.html',
            activityid: 'a54e9a0a1b6044189753e7eba51aab19', // TODO 从页面中获取
          },
        },
        isSuccessFn: data => data.status,
      },
      // TODO 待更新
      // jinTieSign,
      // jinTieDraw,
      {
        name: '金榜签到',
        url: `https://api.m.jd.com/client.action?functionId=goldCenterDoTask&body=%7B%22type%22%3A1%7D&appid=content_ecology&clientVersion=10.1.6&client=wh5&ext=%7B%22prstate%22%3A%220%22%7D&uuid=${self.getUUid()}`,
        options: {
          headers: {
            referer: 'https://h5.m.jd.com/babelDiy/Zeus/32xRoXWmepbBVHfDMoHMw2kGfHdF/index.html',
          },
        },
        isSuccessFn: data => _.get(data, 'result.taskCode') === '0',
        rewardOutputFn: _.property('result.lotteryScore'),
      },
    ];

    const cashSign = [
      {
        name: '东喜双签',
        url: 'https://wq.jd.com/double_sign/IssueReward',
        options: {
          headers: {
            'Referer': 'https://wqs.jd.com/pingou/jxapp_double_signin/index.html',
          },
          qs: {
            sceneval: 2,
          },
        },
        isSuccessFn: data => {
          const isSucceed = _.property('retCode')(data) === 0 && (_.property('data.double_sign_status')(data) === 0);
          if (!isSucceed) api.log(JSON.stringify(data));
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

    const morningGetBean = {
      name: '签到早起福利',
      url: 'https://api.m.jd.com/client.action?functionId=morningGetBean&body=%7B%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22rnVersion%22%3A%223.9%22%7D&appid=ld&client=apple&clientVersion=10.0.6&networkType=wifi&osVersion=14.6&uuid=c6993893af46e44aa14818543914768cf2509fbf&openudid=c6993893af46e44aa14818543914768cf2509fbf',
      isSuccessFn: data => data.code === '0',
      rewardOutputFn: data => _.get(data, 'data.bizMsg'),
    };

    // TODO 接口调用有问题, 先屏蔽
    if (necklaceSignForm && false) {
      taskOptions.push(necklaceSign);
    }

    const nowHour = self.getNowHour();
    if (nowHour <= 8) {
      // taskOptions.push(morningGetBean);
    }
    // 活动调整, 需下线
    if (nowHour === 23 && false) {
      taskOptions.push(cashSign[0]);
    }

    for (const options of taskOptions) {
      const {times = 1} = options;
      for (let i = 0; i < times; i++) {
        await doTask(options);
      }
    }
  };
}

module.exports = Sign;
