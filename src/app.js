const _ = require('lodash');
const {getNowDate, getNowHour} = require('./lib/moment');
const {getCookieData, updateProcessEnv} = require('./lib/env');
updateProcessEnv();
const {
  multipleRun,
  serialRun,
  doRun,
  doRun1,
  doCron,
  doCron1,
  TemporarilyOffline,
  sendNotify,
} = require('./api');

const Common = require('./jd/base/common');

const Sign = require('./jd/sign');
const SignShop = require('./jd/sign/shop');
const SignRemote = require('./jd/sign/remote');
const PlantBean = require('./jd/plantBean');
const SuperMarket = require('./jd/superMarket');
const SuperMarketRedeem = require('./jd/superMarket/redeem');
const Pet = require('./jd/pet');
const Fruit = require('./jd/fruit');
const TurnTableFarm = require('./jd/fruit/turnTableFarm');
const Wfh = require('./jd/wfh');
const jdFactory = require('./jd/jdFactory');
const Health = require('./jd/wfh/Health');
const Health1 = require('./jd/wfh/Health1');
const HealthSign = require('./jd/wfh/HealthSign');
const Harmony1 = require('./jd/wfh/harmony1');
const Harmony2 = require('./jd/wfh/harmony2');
const Harmony3 = require('./jd/wfh/harmony3');
const Earn = require('./jd/earn');
const Cash = require('./jd/cash');
const CashShare = require('./jd/cash/share');
const StatisticsBean = require('./jd/statistics/bean');
const Ssjj = TemporarilyOffline || require('./jd/ssjj'); // 没什么收益, 所以进行移除
const Trump = require('./jd/trump');
const Smfe = require('./jd/smfe');
const IsvShopSign = require('./jd/isv/shopSign');
const CrazyJoy = TemporarilyOffline || require('./jd/crazyJoy');
const Necklace = TemporarilyOffline || require('./jd/necklace');
const SecondKillRedPacket = require('./jd/secondKill/redPacket');
const DreamFactory = TemporarilyOffline || require('./jd/dreamFactory');
const JxCfd = TemporarilyOffline || require('./jd/jxCfd');
const Car = require('./jd/car');
const VipClubShake = require('./jd/vipClub/shake');
const KoiRedPacket = require('./jd/koiRedPacket');
const Joy = require('./jd/joy');
const JoyRedeem = require('./jd/joy/redeem');
const Family = TemporarilyOffline || require('./jd/family');
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
const BeanSmallBean = require('./jd/sign/beanSmallBean');
const GoldCreator = require('./jd/goldCreator');
const Joy20210805 = require('./jd/joy/20210805');
const SuperBrandDay = require('./jd/superBrand/day');

/* 极速版 */
const LiteSign = require('./jd/lite/Sign');
const SpringReward = require('./jd/lite/SpringReward');
const EarnCoins = require('./jd/lite/EarnCoins');
const LiteCashSign = require('./jd/lite/CashSign');

/* 本地执行 */
const ReceiveNecklaceCoupon = require('./jd/local/ReceiveNecklaceCoupon');

const nowDate = getNowDate();
const nowHour = getNowHour();

main().then(sendNotify.bind(0, {
  sendYesterdayLog: nowHour === 23,
  subjects: [void 0, nowDate, nowHour],
}));

async function main() {
  if (process.env.NOT_RUN) {
    console.log('不执行脚本');
    return;
  }
  const scheduleOptions = [
    {
      valid: 0,
      run: async () => {
        await serialRun([
          KoiRedPacket,
          Carnivalcity,

          // 23点后的活动补充
          IsvShopSign,
          SignShop,
          EarnJingDou,

          // 统计豆豆
          StatisticsBean,

          // 常驻活动
          SignBeanHome, SignRemote, Sign,
          Fruit, Pet, TurnTableFarm,
          Cash,
          BeanSmallBean,
          PlantBean,
          Family,
          Live,
          Necklace,
          SecondKillRedPacket,
          VipClubShake,
          SuperMarket,

          // 偶尔会有的活动
          SuperBrandDay,

          // 极速版
          LiteSign, SpringReward, LiteCashSign, EarnCoins,

          [jdFactory, getCookieData(jdFactory.scriptName)[0]],
          [Earn, getCookieData(Earn.scriptName, 'JD_EARN_COOKIE')],

          Smfe,
          GoldCreator,
          Trump,
          // TODO 确认活动有效性
          Car,
        ]);
        await multipleRun([
          HealthSign,
          Health,
          Health1,
          Harmony1,
        ]);
      },
    },
    {
      valid: 5,
      run: async () => {
        // await doRun(JxFarm);
      },
    },
    {
      valid: 6,
      run: async () => {
        await doCron(TurnTableFarm);
        await doRun(Joy);
      },
    },
    {
      valid: 7,
      run: async () => {
        await serialRun([
          Fruit, Pet,
          EarnCoins,
          Family,
        ]);
      },
    },
    {
      valid: 9,
      run: async () => {
        await doRun(Joy);
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
        await serialRun([
          Fruit, Pet,
        ]);
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
      valid: 18,
      run: async () => {
        await serialRun([
          Fruit, Pet,
        ]);
      },
    },
    {
      valid: 19,
      run: async () => {
      },
    },
    {
      valid: 20,
      run: async () => {
      },
    },
    {
      valid: 22,
      run: async () => {
        await serialRun([
          [jdFactory, getCookieData()[0]],
          Fruit, Pet,
          Necklace,
          EarnCoins,
          SuperMarket,
        ]);
      },
    },
    {
      valid: 23,
      run: async () => {
        await serialRun([
          Sign,
          KoiRedPacket,
          Cash,
          [PlantBean, getCookieData()],
        ]);
        await doCron(PlantBean);
        // await doRun(CrazyJoy);

        // 24点后定时启动
        await multipleRun([
          SignShop,
          // SuperMarketRedeem,
          // JoyRedeem,
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

  // 定时循环
  async function cronLoop() {
    await doCron(jdFactory, getCookieData()[0]);
    await doCron(CrazyJoy);

    if (nowHour % 2 === 0) {
      await doCron(PlantBean);
    }

    if (nowHour % 5 === 0) {
      await doCron(Joy);
      await doCron(Health);
    }

    if (nowHour % 6 === 0) {
      await doCron(SuperMarket);
    }
  }
}
