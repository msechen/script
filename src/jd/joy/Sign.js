const Joy = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');
const {matchMiddle} = require('../../lib/common');

class JoySign extends Joy {
  static scriptName = 'JoySign';
  static scriptNameDesc = '连续签到(翻牌)';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;
  static concurrent = true;

  static async doMain(api, shareCodes) {
    const self = this;
    await self.beforeRequest(api);
    delete api.options.qs.reqSource;
    api.options.uri = 'https://jdjoy.jd.com/api/turncard/channel';

    const signConfig = [];

    const actIds = [
      // {name: 'plus会员店', actId: 'N9MpLQdxZgiczZaMx2SzmSfZSvF'},
      // {name: '小家电', actId: 'c46tGzwvXueH7uKSjpXmPQP9Nod'},
      // {name: '京东失眠-补贴', actId: 'UcyW9Znv3xeyixW1gofhW2DAoz4'},
      // {name: '京东手机-小时', actId: '4Vh5ybVr98nfJgros5GwvXbmTUpg'},
      // {name: '京东商城-卡包', actId: '7e5fRnma6RBATV9wNrGXJwihzcD'},
      // {name: '京东商城-内衣', actId: '4PgpL1xqPSW1sVXCJ3xopDbB1f69'},
      {name: '京东商城-电竞', actId: 'CHdHQhA5AYDXXQN9FLt3QUAPRsB'},
      // {name: '京东商城-箱包', actId: 'ZrH7gGAcEkY2gH8wXqyAPoQgk6t'},
      {name: '京东商城-服饰', actId: '4RBT3H9jmgYg1k2kBnHF8NAHm7m8'},
      {name: '京东商城-校园', actId: '2QUxWHx5BSCNtnBDjtt5gZTq7zdZ'},
      // {name: '京东商城-健康', actId: 'w2oeK5yLdHqHvwef7SMMy4PL8LF'},
      // {name: '京东商城-鞋靴', actId: '4RXyb1W4Y986LJW8ToqMK14BdTD'},
      // {name: '京东商城-童装', actId: '3Af6mZNcf5m795T8dtDVfDwWVNhJ'},
      // {name: '京东商城-母婴', actId: '3BbAVGQPDd6vTyHYjmAutXrKAos6'},
      // {name: '京东商城-数码', actId: '4SWjnZSCTHPYjE5T7j35rxxuMTb6'},
      // {name: '京东商城-女装', actId: 'DpSh7ma8JV7QAxSE2gJNro8Q2h9'},
      {name: '京东商城-图书', actId: '3SC6rw5iBg66qrXPGmZMqFDwcyXi'},
      {name: '京东拍拍-二手', actId: '3S28janPLYmtFxypu37AYAGgivfp'},
      // {name: '京东商城-菜场', actId: 'Wcu2LVCFMkBP3HraRvb7pgSpt64'},
      {name: '京东商城-陪伴', actId: 'kPM3Xedz1PBiGQjY4ZYGmeVvrts'},
      // {name: '京东商城-清洁', actId: '2Tjm6ay1ZbZ3v7UbriTj6kHy9dn6'},
      // {name: '京东商城-个护', actId: '2tZssTgnQsiUqhmg5ooLSHY9XSeN'},
      // {name: '京东商城-家电', actId: '3uvPyw1pwHARGgndatCXddLNUxHw'},
    ];

    await updateTurnTableId();

    for (const {name, turnTableId, params} of _.filter(_.uniq(signConfig))) {
      const log = (isSuccess, msg) => {
        const msgs = [
          `[${name}]`,
          isSuccess ? '签到成功' : '签到失败',
          msg,
        ];
        api.log(msgs.join(' '));
      };
      if (turnTableId) {
        handleSign(turnTableId, name).then(data => {
          if (!data) return;
          if (!self.isSuccess(data)) return log(false, data['errorMessage']);
          log(true, `获得 ${_.get(data, 'data.jdBeanQuantity', 0)}`);
        });
      } else if (params) {
        api.commonDo({
          uri: 'https://api.m.jd.com/client.action',
          qs: {
            functionId: 'userSign',
          },
          form: {
            body: {params},
            client: 'wh5',
            clientVersion: '1.0.0',
          },
        }).then(data => {
          const {subCode, subCodeMsg, awardList, noAwardTxt} = data;
          if (subCode === '0') {
            let awardText = _.map(awardList || [], 'text').join(', ');
            log(true, awardText || noAwardTxt);
          } else {
            log(false, subCodeMsg);
          }
        });
      }
    }

    async function updateTurnTableId() {
      for (const {name, actId} of actIds) {
        const signUrl = `https://pro.m.jd.com/mall/active/${actId}/index.html`;
        await api.doGetFileContent(signUrl, {
          headers: {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          },
        }).then(async data => {
          const turnTableId = matchMiddle(data, {reg: /"turnTableId":"(\d+)"/}) || 0;
          const page = matchMiddle(data, {reg: /"paginationFlrs":"(\[\[.+?]])"/});
          if (turnTableId) {
            signConfig.push({name, actId, turnTableId});
          } else if (page) {
            await api.commonDo({
              ignorePrintLog: true,
              uri: 'https://api.m.jd.com/client.action',
              qs: {
                client: 'wh5',
                clientVersion: '1.0.0',
                functionId: 'qryH5BabelFloors',
              },
              form: {
                body: {activityId: actId, paginationFlrs: page},
              },
            }).then(data => {
              const {floorList = []} = data;
              const target = floorList.find(o => o['template'] === 'signIn');
              if (!target) return api.log(`[${name}] 已失效`);
              const {signInfos: {params, signStat}} = target;
              if (!/enActK/.test(params)) return api.log(`[${name}] 已失效`);
              if (signStat === '1') return api.log(`[${name}] 已签到`);
              signConfig.push({name, actId, params});
            });
          }
        });
      }
    }

    async function handleSign(turnTableId, name) {
      const {data, success, errorMessage} = await api.doGetPath('detail', {turnTableId});
      if (!success) {
        api.log(`[${name}] ${errorMessage}`);
        return;
      }
      const {hasSign} = data;
      if (hasSign) return;
      return api.doPath('sign', void 0, {
        qs: {
          turnTableId,
          fp: 'f9b97a78ead44f94e6d3308f30454c2e',
          eid: 'G37CAEULUZLTRDCUURES5BDFX73WXBLRSG3LIKN6JTL75T5BUG7YYLPPOV2ZUS55SF7BAJEA36WVJSJSMUHUESY27M',
        },
      });
    }

  }
}

singleRun(JoySign).then();

module.exports = JoySign;
