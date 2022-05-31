const _ = require('lodash');
const {getNowDate, getNowHour} = require('./lib/moment');
const {getCookieData, updateProcessEnv} = require('./lib/env');
const {sleepTime} = require('./lib/cron');
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
const Sign1 = require('./jd/sign/Sign1');
const SignShop = require('./jd/sign/shop');
const SignRemote = require('./jd/sign/remote');
const SignTurnTable = TemporarilyOffline || require('./jd/sign/TurnTable');
const PlantBean = require('./jd/plantBean');
const SuperMarket = TemporarilyOffline || require('./jd/superMarket');
const SuperMarketRedeem = require('./jd/superMarket/redeem');
const Pet = require('./jd/pet');
const Fruit = require('./jd/fruit');
const FruitDoShare = require('./jd/fruit/doShare');
const TurnTableFarm = require('./jd/fruit/turnTableFarm');
const FruitFarmPark = require('./jd/fruit/FarmPark');
const FruitCollect = TemporarilyOffline || require('./jd/fruit/Collect');
const Harmony1 = require('./jd/wfh/harmony1');
const Harmony2 = require('./jd/wfh/harmony2');
const Harmony3 = require('./jd/wfh/harmony3');
const Harmony4 = require('./jd/wfh/harmony4');
const Harmony5 = require('./jd/wfh/harmony5');
const SplitHongbao = require('./jd/wfh/splitHongbao');
const Health = require('./jd/wfh/Health');
const HealthShare = require('./jd/wfh/HealthShare');
const HealthSign = require('./jd/wfh/HealthSign');
const Earn = require('./jd/earn');
const Cash = require('./jd/cash');
const CashShare = require('./jd/cash/share');
const StatisticsBean = require('./jd/statistics/bean');
const StatisticsRedEnvelope = require('./jd/statistics/RedEnvelope');
const IsvShopSign = TemporarilyOffline || require('./jd/isv/shopSign');
const SecondKillRedPacket = TemporarilyOffline || require('./jd/secondKill/redPacket');
const JxCfd = TemporarilyOffline || require('./jd/jxCfd');
const VipClubShake = require('./jd/vipClub/shake');
const KoiRedPacket = TemporarilyOffline || require('./jd/koiRedPacket');
const Joy = require('./jd/joy');
const JoyRedeem = require('./jd/joy/redeem');
const JoySign = require('./jd/joy/Sign');
const Family = TemporarilyOffline || require('./jd/family');
const BianPao = require('./jd/family/bianPao');
const JxHongBao = require('./jd/family/jxHongBao');
const JxFarm = require('./jd/wq/JxFarm');
const WomenBlindBox = require('./jd/family/WomenBlindBox');
const LuckyToHitTheGoldenEgg = require('./jd/family/LuckyToHitTheGoldenEgg');
const Live = TemporarilyOffline || require('./jd/live');
const LiveRedEnvelopeRain = TemporarilyOffline || require('./jd/live/RedEnvelopeRain');
const SignBeanHome = require('./jd/sign/beanHome');
const Singjd = require('./jd/wq/singjd');
const Carnivalcity = require('./jd/shoppingFestival/carnivalcity');
const BeanSmallBean = require('./jd/sign/beanSmallBean');
const GoldCreator = TemporarilyOffline || require('./jd/goldCreator');
const Joy20210805 = require('./jd/joy/20210805');
const SuperBrandDay = require('./jd/superBrand/day');
const SuperBrandProduct = require('./jd/superBrand/Product');
const RubikSCube = TemporarilyOffline || require('./jd/rubikSCube');
const EarnBean = TemporarilyOffline || require('./jd/ifanli/EarnBean');
const Factory = require('./jd/wfh/Factory');
const SuperBox = TemporarilyOffline || require('./jd/superBox');
const XinruiYear = TemporarilyOffline || require('./jd/xinrui/year');
const Moxigame = require('./jd/moxigame');

/* 极速版 */
const LiteSpringReward = TemporarilyOffline || require('./jd/lite/SpringReward');
const LiteEarnCoins = require('./jd/lite/EarnCoins');
const LiteCashSign = require('./jd/lite/CashSign');
const LiteHappyDig = require('./jd/lite/HappyDig');

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

  // 统计
  const statistics = [
    StatisticsBean,
    StatisticsRedEnvelope,
  ];
  // 常驻活动
  const longTermActivity = [
    SignBeanHome, Sign,
    Fruit, Pet, TurnTableFarm,
    FruitFarmPark, FruitCollect,
    Cash,
    BeanSmallBean,
    PlantBean,
    Family,
    Live,
    SecondKillRedPacket,
    VipClubShake,
    SuperMarket,
    Earn,
    GoldCreator,
    Factory,
  ];
  // 极速版
  const lites = [
    LiteSpringReward, LiteCashSign, LiteEarnCoins, LiteHappyDig,
  ];
  // 短期活动
  const shortTermActivity = [
    RubikSCube,
    SuperBrandProduct,
    SuperBox,
    XinruiYear,
    Moxigame,
  ];
  const scheduleOptions = [
    {
      valid: 0,
      run: async () => {
        multipleRun([
          HealthSign,
          HealthShare,
          Health,
        ]);
        await serialRun([
          KoiRedPacket,
          // 23点后的活动补充
          IsvShopSign,
          EarnBean,
          SignShop,

          ...statistics,
          ...longTermActivity,
          ...lites,
          ...shortTermActivity,
        ]);
        await multipleRun([
          // Harmony1,
          // Harmony2,
          // Harmony3,
          // Harmony4,
          Harmony5,
        ]);
      },
    },
    {
      valid: 5,
      run: async () => {
        // await doRun(JxFarm);
        await doRun(LiteEarnCoins);
      },
    },
    {
      valid: 6,
      run: async () => {
        await doCron(TurnTableFarm);
        await serialRun(Joy);
      },
    },
    {
      valid: 7,
      run: async () => {
        await serialRun([
          Fruit, Pet,
          LiteEarnCoins,
          Family,
        ]);
      },
    },
    {
      valid: 9,
      run: async () => {
        await serialRun(Joy);
      },
    },
    {
      valid: 10,
      run: async () => {
        await doRun(SuperBrandProduct);
        await doRun(Moxigame);
      },
    },
    {
      valid: 12,
      run: async () => {
        await serialRun([
          Fruit, Pet,
          Factory,
          PlantBean,
        ]);
      },
    },
    {
      valid: 14,
      run: async () => {
        await serialRun([
          EarnBean,
        ]);
      },
    },
    {
      valid: 15,
      run: async () => {
      },
    },
    {
      valid: 16,
      run: async () => {
      },
    },
    {
      valid: 18,
      run: async () => {
        await serialRun([
          Fruit, Pet,
          PlantBean,
          SuperBrandProduct,
        ]);
      },
    },
    {
      valid: 19,
      run: async () => {
        await doRun(LiteEarnCoins);
      },
    },
    {
      valid: 20,
      run: async () => {
        await serialRun([
          SuperBrandProduct,
        ]);
      },
    },
    {
      valid: 22,
      run: async () => {
        await serialRun([
          Fruit, Pet,
          LiteEarnCoins,
          SuperMarket,
          ...statistics,
          LiteHappyDig,
          SuperBrandDay,
          SecondKillRedPacket,
        ]);
      },
    },
    {
      valid: 23,
      run: async () => {
        await serialRun([
          LiteHappyDig,
          Sign,
          KoiRedPacket,
          Cash,
          PlantBean,
          [PlantBean, void 0, 'cron'],
          SuperBrandProduct,
          EarnBean,
          Joy,
          Fruit, Pet,
          Factory,
        ]);

        // 24点后定时启动
        // 本身自带定时任务的脚本
        multipleRun([
          SignShop,
          // SuperMarketRedeem,
          // JoyRedeem,
        ]);
        await sleepTime(24);
        await multipleRun([
          [Health, void 0, 'cron'],
          EarnBean,
          // JoySign,
          SignTurnTable,
          Sign1,
          IsvShopSign,
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
    await serialRun([
      PlantBean,
      Factory,
      Health,
    ], doCron);

    if (nowHour % 5 === 0) {
      await serialRun(Joy, doCron);
    }

    if (nowHour % 6 === 0) {
      await serialRun(SuperMarket, doCron);
    }
  }
}
