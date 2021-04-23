const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const {getLogFile, sleep, parallelRun} = require('./lib/common');
const {getNowDate, getNowHour} = require('./lib/moment');
const {sleepTime} = require('./lib/cron');
const {getCookieData} = require('./lib/env');
const serverChan = require('./lib/serverChan');
const mailer = require('./lib/mailer');
const TemporarilyOffline = {start: _.noop, cron: _.noop};

const Common = require('./jd/base/common');

const Sign = require('./jd/sign');
const SignShop = require('./jd/sign/shop');
const SignRemote = require('./jd/sign/remote');
const PlantBean = require('./jd/plantBean');
const SuperMarket = require('./jd/superMarket');
const SuperMarketRedeem = require('./jd/superMarket/redeem');
const Pet = require('./jd/pet');
const PetRemote = require('./jd/pet/remote');
const Fruit = require('./jd/fruit');
const FruitRemote = require('./jd/fruit/remote');
const TurnTableFarm = require('./jd/fruit/turnTableFarm');
const Wfh = require('./jd/wfh');
const jdFactory = require('./jd/jdFactory');
const HarmonyGoldenEgg = require('./jd/wfh/harmonyGoldenEgg');
const HarmonyBlindBox = require('./jd/wfh/harmonyBlindBox');
const HarmonyNewShop = require('./jd/wfh/harmonyNewShop');
const Health = require('./jd/wfh/Health');
const HealthShare = require('./jd/wfh/HealthShare');
const HealthSign = require('./jd/wfh/HealthSign');
const Harmony1 = require('./jd/wfh/harmony1');
const Harmony2 = require('./jd/wfh/harmony2');
const Harmony3 = require('./jd/wfh/harmony3');
const Earn = require('./jd/earn');
const Cash = require('./jd/cash');
const CashShare = require('./jd/cash/share');
const StatisticsBean = require('./jd/statistics/bean');
const Ssjj = require('./jd/ssjj');
const Trump = require('./jd/trump');
const Smfe = require('./jd/smfe');
const IsvShopSign = require('./jd/isv/shopSign');
const CrazyJoy = require('./jd/crazyJoy');
const Necklace = require('./jd/necklace');
const SecondKillRedPacket = require('./jd/secondKill/redPacket');
const DreamFactory = require('./jd/dreamFactory');
const JxCfd = require('./jd/jxCfd');
const Car = require('./jd/car');
const VipClubShake = require('./jd/vipClub/shake');
const KoiRedPacket = require('./jd/koiRedPacket');
const Joy = require('./jd/joy');
const JoyRedeem = require('./jd/joy/redeem');
const Family = require('./jd/family');
const BianPao = require('./jd/family/bianPao');
const JxHongBao = require('./jd/family/jxHongBao');
const JxFarm = require('./jd/wq/JxFarm');
const WomenBlindBox = require('./jd/family/WomenBlindBox');
const LuckyToHitTheGoldenEgg = require('./jd/family/LuckyToHitTheGoldenEgg');
const Live = require('./jd/live');
const LiveRedEnvelopeRain = TemporarilyOffline || require('./jd/live/RedEnvelopeRain');
const SignBeanHome = require('./jd/sign/beanHome');
const GlobalChallenge = TemporarilyOffline || require('./jd/globalMart/challenge');
const Singjd = require('./jd/wq/singjd');
const Isp5G = require('./jd/isp5g');
const EarnJingDou = require('./jd/earnJingDou');
const Carnivalcity = require('./jd/shoppingFestival/carnivalcity');
const Xiemi = require('./jd/xiemi/index');

/* 极速版 */
const LiteSign = require('./jd/lite/Sign');
const SpringReward = require('./jd/lite/SpringReward');
const EarnCoins = require('./jd/lite/EarnCoins');

const nowHour = getNowHour();
const nowDate = getNowDate();
const errorOutput = [];
let yesterdayAppPath;
let yesterdayLog = '';

async function multipleRun(targets, onceDelaySecond = 1) {
  return parallelRun({
    list: targets,
    runFn: doRun,
    onceDelaySecond,
  });
}

async function doRun(target, cookieData = getCookieData(target.scriptName), method = 'start') {
  console.log(`[${target.scriptName}] do ${method}`);
  let result;
  try {
    result = await target[method](cookieData);
  } catch (e) {
    errorOutput.push(e);
    console.log(e);
  }
  return result;
}

async function doCron(target, cookieData = getCookieData()) {
  return doRun(target, cookieData, 'cron');
}

// 本地测试
async function doRun1(target, index = 0, needScriptName = false) {
  await doRun(target, getCookieData(needScriptName ? target.scriptName : void 0)[index]);
}

async function doCron1(target, index = 0) {
  await doCron(target, getCookieData()[index]);
}

async function main() {
  if (process.env.NOT_RUN) {
    console.log('不执行脚本');
    return;
  }
  const scheduleOptions = [
    {
      valid: 0,
      run: async () => {
        await doRun(KoiRedPacket);
        await doRun(IsvShopSign);
        await doRun(SignShop);
        await doRun(EarnJingDou);
        await doRun(SignBeanHome);
        await doRun(Sign);
        doRun(SignRemote);
        await doRun(StatisticsBean);
        await doRun(Fruit);
        await doRun(TurnTableFarm);
        await doRun(Pet);
        await doRun(jdFactory, getCookieData(jdFactory.scriptName)[0]);
        await doRun(Earn, getCookieData(Earn.scriptName, 'JD_EARN_COOKIE'));
        await doRun(Cash);
        await doRun(JxCfd);

        // 1点的时候没有action, 所以需要提前
        // await doRun(Harmony7);
        // await doRun(Wfh);
        await doRun(Trump);
        await doRun(Smfe);
        await doRun(PlantBean);
        await doRun(Family);
        await doRun(Live);
        await doRun(GlobalChallenge);
        await doRun(JxHongBao);
        await doRun(VipClubShake);
        await doRun(LiteSign);
        await doRun(SpringReward);
        // await doRun(BianPao);
        await multipleRun([HarmonyGoldenEgg, HarmonyBlindBox, HarmonyNewShop]);
        await multipleRun([
          Harmony1,
          Harmony2,
          Harmony3,
        ]);
        await multipleRun([
          HealthSign,
          HealthShare,
          Health,
        ]);
      },
    },
    {
      valid: 1,
      run: async () => {
        await doRun(EarnCoins);
      },
    },
    {
      valid: 2,
      async run() {
        await doRun(Necklace);
        await doRun(SecondKillRedPacket);
        await doRun(Car);
      },
    },
    {
      valid: 4,
      run: async () => {
        await doRun(Ssjj);
      },
    },
    {
      valid: 5,
      run: async () => {
        await doRun(JxFarm);
      },
    },
    {
      valid: 6,
      run: async () => {
        await doRun(DreamFactory);
        await doRun(FruitRemote);
        await doRun(PetRemote);
        await doCron(TurnTableFarm);
        await doRun(Joy);
      },
    },
    {
      valid: 7,
      run: async () => {
        await doRun(DreamFactory);
        await doCron(Fruit);
        await doCron(Pet);
        await doRun(CrazyJoy);
      },
    },
    {
      valid: 8,
      run: async () => {
        await doRun(DreamFactory);
        await doRun(SuperMarket);
        await doRun(Family);
        await doRun(Sign);
        await doRun(GlobalChallenge);
        // 9点后再执行
        await sleepTime([9, 10]);
        await doRun(Joy);
      },
    },
    {
      valid: 9,
      run: async () => {
        await doRun(DreamFactory);
        await doRun(EarnCoins);
      },
    },
    {
      valid: 10,
      run: async () => {
        await doRun(jdFactory, getCookieData()[0]);
      },
    },
    {
      valid: 12,
      run: async () => {
        await doCron(Fruit);
        await doCron(Pet);
        await doRun(Joy);
      },
    },
    {
      valid: 14,
      run: async () => {
      },
    },
    {
      valid: 15,
      run: async () => {
        await doRun(CrazyJoy);
      },
    },
    {
      valid: 16,
      run: async () => {
        await doRun(PlantBean, getCookieData());
      },
    },
    {
      valid: 17,
      run: async () => {
        await doRun(CrazyJoy);
      },
    },
    {
      valid: 18,
      run: async () => {
        await doRun(Joy);
        await doRun(LiveRedEnvelopeRain);
      },
    },
    {
      valid: 19,
      run: async () => {
        await doRun(EarnCoins);
      },
    },
    {
      valid: 20,
      run: async () => {
        await doRun(SuperMarket);
        await doCron(Fruit);
        await doCron(Pet);
      },
    },
    {
      valid: 22,
      run: async () => {
        await doRun(jdFactory, getCookieData()[0]);
        await doCron(Pet);
        await doRun(Necklace);
        await doRun(KoiRedPacket);
        await doRun(Joy);
      },
    },
    {
      valid: 23,
      run: async () => {
        await doRun(PlantBean, getCookieData());
        await doCron(PlantBean);
        await doRun(CrazyJoy);
        yesterdayAppPath = getLogFile('app');

        // 24点后定时启动
        await multipleRun([
          SignShop,
          SuperMarketRedeem,
          JoyRedeem,
        ]);
        await multipleRun([
          EarnJingDou, IsvShopSign,
          // 做任务抽奖
          WomenBlindBox,
        ], 0);
      },
    },
  ];

  await cronLoop();

  for (const {valid, run} of scheduleOptions) {
    if (nowHour === valid) {
      await run();
    }
  }

  await doCron(Health);

  if (yesterdayAppPath) {
    yesterdayLog = fs.readFileSync(yesterdayAppPath);
  }

  // 定时循环
  async function cronLoop() {
    await doCron(Health);
    await doCron(jdFactory, getCookieData()[0]);
    await doCron(CrazyJoy);

    if (nowHour % 2 === 0) {
      await doCron(PlantBean);
    }

    if (nowHour % 5 === 0) {
      await doCron(Joy);
    }

    if (nowHour % 6 === 0) {
      await doCron(SuperMarket);
    }
  }
}

main().then(function () {
  const resultPath = path.resolve(__dirname, '../dist/result.txt');
  if (!fs.existsSync(resultPath)) return;
  return fs.readFileSync(resultPath);
}).then((resultContent = '') => {
  const logFile = getLogFile('app');
  let content = yesterdayLog;
  if (fs.existsSync(logFile)) {
    content += fs.readFileSync(logFile);
  }
  content += resultContent;
  if (!_.isEmpty(errorOutput)) {
    mailer.send({
      subject: ['lazy_script_error', nowDate, nowHour].join('_'),
      text: errorOutput.join('\n'),
    });
  }
  if (!content) return;
  const title = ['lazy_script', nowDate, nowHour].join('_');
  mailer.send({
    subject: title, text: content,
  });
  serverChan.send(title, content).then(() => {
    console.log('发送成功');
  });
});
