const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const {getNowMoment, getNowDate, getLogFile} = require('./lib/common');
const serverChan = require('./lib/serverChan');

const Common = require('./jd/base/common');

const Sign = require('./jd/sign');
const SignRemote = require('./jd/sign/remote');
const SignBeanGroup = require('./jd/sign/beanGroup');
const PlantBean = require('./jd/plantBean');
const SuperMarket = require('./jd/superMarket');
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
const AppletSign = require('./jd/applet/sign');
const Adf = require('./jd/digital/adf');
const CrazyJoy = require('./jd/crazyJoy');
const HarmonyApple = require('./jd/wfh/harmonyApple');
const HarmonyHealthyDay = require('./jd/wfh/harmonyHealthyDay');
const Necklace = require('./jd/necklace');
const SecondKillRedPacket = require('./jd/secondKill/redPacket');
const DreamFactory = require('./jd/dreamFactory');
const RedRain = require('./jd/sign/redRain');
const JxCfd = require('./jd/jxCfd');
const GoldenEgg = require('./jd/wfh/goldenEgg');
const Car = require('./jd/car');
const VipClubShare = require('./jd/vipClub/shake');
const KoiRedPacket = require('./jd/koiRedPacket');

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
  const cookies = getEnvByName(envCookieName);

  return cookies.map((cookie, index) => {
    const allShareCodes = getShareCodes(name, index);
    const shareCodes = getShareCodeFn(index, allShareCodes) || allShareCodes;
    return {cookie, shareCodes};
  });

  function getEnvByName(name) {
    let result = [];
    for (let i = 0; i < 5; i++) {
      const envVal = (i === 0 ? process.env[name] : process.env[`${name}_${i}`]);
      envVal && result.push(envVal);
    }
    return result;
  }
};

async function runScript(fn, name = fn.name) {
  // TODO name 默认值需要调整从 fn 中获取
  return fn(getCookieData(name));
}

async function doRun(target, cookieData = getCookieData(target.scriptName), method = 'start') {
  return target[method](cookieData);
}

async function doCron(target, cookieData = getCookieData()) {
  return doRun(target, cookieData, 'cron');
}

async function main() {
  if (process.env.NOT_RUN) {
    console.log('不执行脚本');
    return;
  }

  const nowHours = getNowMoment().hours();
  const scheduleOptions = [
    {
      valid: 0,
      run: async () => {
        await doCron(SuperMarket);
        await doRun(Sign);
        await doRun(StatisticsBean);
        await doRun(SignRemote);
        await doRun(Fruit);
        await doRun(TurnTableFarm);
        await doRun(Pet);
        await doRun(jdFactory);
        await doRun(Earn, getCookieData(Earn.scriptName, 'JD_EARN_COOKIE'));
        await doRun(Cash);
        await doRun(Wish);
        await doRun(SignBeanGroup);
        await doRun(JxCfd);
      },
    },
    {
      valid: 1,
      run: async () => {
        await doRun(HarmonyGoldenEgg);
        await doRun(HarmonyBlindBox);
        await doRun(HarmonyNewShop);
        await doRun(HarmonyHealthyDay);
        await doRun(GoldenEgg);
        await doRun(Wfh);
        await doRun(Trump);
        await doRun(Smfe);
        await doRun(Adf);
        await doRun(PlantBean);
        await doRun(KoiRedPacket);
      },
    },
    {
      valid: 2,
      async run() {
        await doRun(Necklace);
        await doRun(AppletSign, getCookieData(void 0, 'JD_EARN_COOKIE'));
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
        await doRun(Discover);
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
        await doRun(RedRain);
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
        await jdFactory.start(getCookieData());
      },
    },
    {
      valid: 12,
      run: async () => {
        await doCron(SuperMarket);
        await doCron(Fruit);
        await doCron(Pet);
      },
    },
    {
      valid: 14,
      run: async () => {
        await doRun(Wish);
        await doRun(RedRain);
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
        await doRun(RedRain);
      },
    },
    {
      valid: 20,
      run: async () => {
        await doCron(SuperMarket);
        await doCron(Fruit);
        await doCron(Pet);
      },
    },
    {
      valid: 22,
      run: async () => {
        await jdFactory.start(getCookieData());
        await doCron(Pet);
        await doRun(CashShare);
        await doRun(Necklace);
      },
    },
    {
      valid: 23,
      run: async () => {
        await doRun(PlantBean, getCookieData());
        await doCron(PlantBean);
        await doRun(CrazyJoy);
      },
    },
  ];

  await cronLoop();

  for (const {valid, run} of scheduleOptions) {
    if (nowHours === valid) {
      await run();
    }
  }

  // 定时循环
  async function cronLoop() {
    await doCron(jdFactory);
    await doCron(CrazyJoy);

    if (nowHours % 2 === 0) {
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
  if (!content) return;
  serverChan.send(`lazy_script_${getNowDate()}`, content).then(() => {
    console.log('发送成功');
  });
});
