const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const {getNowMoment, getNowDate, getLogFile, sleep, parallelRun, getEnvList} = require('./lib/common');
const serverChan = require('./lib/serverChan');
const mailer = require('./lib/mailer');

const Common = require('./jd/base/common');

const Sign = require('./jd/sign');
const SignShop = require('./jd/sign/shop');
const SignRemote = require('./jd/sign/remote');
const SignBeanGroup = require('./jd/sign/beanGroup');
const BeanSmallBean = require('./jd/sign/beanSmallBean');
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
const Discover = require('./jd/discover');
const Earn = require('./jd/earn');
const Cash = require('./jd/cash');
const CashShare = require('./jd/cash/share');
const Wish = require('./jd/wish');
const StatisticsBean = require('./jd/statistics/bean');
const Ssjj = require('./jd/ssjj');
const Trump = require('./jd/trump');
const Smfe = require('./jd/smfe');
const IsvShopSign = require('./jd/isvjcloud/shopSign');
const CrazyJoy = require('./jd/crazyJoy');
const Harmony1 = require('./jd/wfh/harmony1');
const Harmony2 = require('./jd/wfh/harmony2');
const Harmony3 = require('./jd/wfh/harmony3');
const Harmony4 = require('./jd/wfh/harmony4');
const Harmony5 = require('./jd/wfh/harmony5');
const Harmony6 = require('./jd/wfh/harmony6');
const Harmony7 = require('./jd/wfh/harmony7');
const Harmony8 = require('./jd/wfh/harmony8');
const Harmony9 = require('./jd/wfh/harmony9');
const Harmony10 = require('./jd/wfh/harmony10');
const Harmony11 = require('./jd/wfh/harmony11');
const Harmony12 = require('./jd/wfh/harmony12');
const Harmony13 = require('./jd/wfh/harmony13');
const Necklace = require('./jd/necklace');
const SecondKillRedPacket = require('./jd/secondKill/redPacket');
const DreamFactory = require('./jd/dreamFactory');
const JxCfd = require('./jd/jxCfd');
const Car = require('./jd/car');
const VipClubShare = require('./jd/vipClub/shake');
const KoiRedPacket = require('./jd/koiRedPacket');
const HrSign = require('./jd/earn/hrSign');
const Joy = require('./jd/joy');
const Nian = require('./jd/nian');
const NianApplet = require('./jd/nian/applet');
const BrandCity = require('./jd/brandCity');
const Family = require('./jd/family');
const BianPao = require('./jd/family/bianPao');
const JxHongBao = require('./jd/family/jxHongBao');
const Coupon = require('./jd/coupon');
const ShoppingFestival = require('./jd/shoppingFestival');
const Live = require('./jd/live');
const EnterShop = require('./jd/sign/enterShop');
const SignBeanHome = require('./jd/sign/beanHome');
const GlobalChallenge = require('./jd/globalMart/challenge');
const BeautyMakeup = require('./jd/beautyMakeup');
const ShopGift = require('./jd/wq/shopGift');

const nowHour = getNowMoment().hour();
const nowDate = getNowDate();
const errorOutput = [];

const getCookieData = (name, envCookieName = 'JD_COOKIE', shareCode, getShareCodeFn) => {
  shareCode && (shareCode = [].concat(shareCode));
  getShareCodeFn = getShareCodeFn || (() => shareCode);
  const getShareCodes = (name, targetIndex) => {
    if (!name) return [];
    name = name.toUpperCase();
    const key = `JD_${name}_SHARE_CODE`;
    const shareCodes = [];
    for (let i = 0; i < 10; i++) {
      const shareCode = i === 0 ? process.env[key] : process.env[`${key}_${i}`];
      shareCode && i !== targetIndex && shareCodes.push(shareCode);
    }
    return shareCodes;
  };
  const cookies = getEnvList(envCookieName);

  return cookies.map((cookie, index) => {
    const allShareCodes = getShareCodes(name, index);
    const shareCodes = getShareCodeFn(index, allShareCodes) || allShareCodes;
    return {cookie, shareCodes};
  });
};

async function multipleRun(targets) {
  return parallelRun({
    list: targets,
    runFn: doRun,
    onceDelaySecond: 1,
  });
}

async function doRun(target, cookieData = getCookieData(target.scriptName), method = 'start') {
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
        // await doCron(SuperMarket);
        await doRun(KoiRedPacket);
        await doRun(IsvShopSign);
        await doRun(SignShop);
        await doRun(SignBeanHome);
        await doRun(Sign);
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
        await doRun(JxHongBao);
        await doRun(BianPao);
        await multipleRun([HarmonyGoldenEgg, HarmonyBlindBox, HarmonyNewShop]);
      },
    },
    {
      valid: 1,
      run: async () => {
        // await doRun(KoiRedPacket);
      },
    },
    {
      valid: 2,
      async run() {
        await doRun(Necklace);
        await doRun(SecondKillRedPacket);
        await doRun(Car);
        await doRun(VipClubShare);
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
        await doCron(SuperMarket);
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
        await doCron(Joy);
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
        await doCron(SuperMarket);
        await doRun(SuperMarket);
        await doRun(Family);
        await doRun(Sign);
        await doRun(BeautyMakeup);
        // await doRun(HrSign, getCookieData(void 0, 'JD_EARN_COOKIE'));
      },
    },
    {
      valid: 9,
      run: async () => {
        await doRun(DreamFactory);
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
        await doCron(SuperMarket);
        await doCron(Fruit);
        await doCron(Pet);
        await doCron(Joy);
        await doRun(BeautyMakeup);
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
        await doCron(Joy);
      },
    },
    {
      valid: 16,
      run: async () => {
        await doCron(Joy);
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
        await doCron(Joy);
      },
    },
    {
      valid: 20,
      run: async () => {
        await doCron(SuperMarket);
        await doCron(Fruit);
        await doCron(Pet);
        await doRun(BeautyMakeup);
      },
    },
    {
      valid: 22,
      run: async () => {
        await doRun(jdFactory, getCookieData()[0]);
        await doCron(Pet);
        await doRun(Necklace);
        await doRun(KoiRedPacket);
      },
    },
    {
      valid: 23,
      run: async () => {
        await doRun(PlantBean, getCookieData());
        await doCron(PlantBean);
        await doRun(CrazyJoy);
        await doCron(Joy);

        // 24点后定时启动
        await doRun(SignShop);
        await multipleRun([SignRemote, IsvShopSign]);
      },
    },
  ];

  await cronLoop();

  for (const {valid, run} of scheduleOptions) {
    if (nowHour === valid) {
      await run();
    }
  }

  // 定时循环
  async function cronLoop() {
    await doCron(jdFactory, getCookieData()[0]);
    await doCron(CrazyJoy);

    if (nowHour % 2 === 0) {
      await doCron(PlantBean);
    }
  }
}

main().then(function () {
  const resultPath = path.resolve(__dirname, '../dist/result.txt');
  if (!fs.existsSync(resultPath)) return;
  return fs.readFileSync(resultPath);
}).then((resultContent = '') => {
  const logFile = getLogFile('app');
  let content = '';
  if (fs.existsSync(logFile)) {
    content = fs.readFileSync(logFile);
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
