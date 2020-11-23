const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const {getNowMoment, getNowDate, getLogFile} = require('./lib/common');
const serverChan = require('./lib/serverChan');

const sign = require('./jd/sign');
const fruit = require('./jd/fruit');
const pet = require('./jd/pet');
const bean = require('./jd/bean');
const superMarket = require('./jd/superMarket');
const Pet = require('./jd/newPet');
const Fruit = require('./jd/newFruit');
const TurnTableFarm = require('./jd/newFruit/turnTableFarm');
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
const Sign = require('./jd/newSign');

const getCookieData = (name, shareCode, getShareCodeFn, envCookieName = 'JD_COOKIE') => {
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
        await doRun(StatisticsBean);
        await sign();
        await doRun(Fruit);
        await doRun(TurnTableFarm);
        await doRun(Pet);
        await jdFactory.start(getCookieData(jdFactory.scriptName));
        await runScript(bean, 'bean');
        await runScript(superMarket, 0);
        await doRun(Earn, getCookieData(Earn.scriptName, void 0, void 0, 'JD_EARN_COOKIE'));
        await doRun(Cash);
        await doRun(Wish);
        await doRun(Sign);
      },
    },
    {
      valid: 1,
      run: async () => {
        await doRun(HarmonyGoldenEgg);
        await doRun(HarmonyBlindBox);
        await doRun(HarmonyNewShop);
        await doRun(Wfh);
      },
    },
    {
      valid: 4,
      run: async () => {
      },
    },
    {
      valid: 5,
      run: async () => {
        await doRun(Discover);
      },
    },
    {
      valid: 6,
      run: async () => {
        await fruit();
      },
    },
    {
      valid: 7,
      run: async () => {
        await doCron(Fruit);
        await doCron(Pet);
      },
    },
    {
      valid: 8,
      run: async () => {
        await runScript(superMarket, 0);
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
        await runScript(bean, 0);
        await runScript(superMarket, 0);
        await doCron(Fruit);
        await doCron(Pet);
      },
    },
    {
      valid: 14,
      run: async () => {
        await doRun(Wish);
      },
    },
    {
      valid: 16,
      run: async () => {
      },
    },
    {
      valid: 20,
      run: async () => {
        await runScript(bean, 0);
        await runScript(superMarket, 0);
        await doCron(Fruit);
        await doCron(Pet);
      },
    },
    {
      valid: 22,
      run: async () => {
        await jdFactory.start(getCookieData());
        await pet();
        await doRun(CashShare);
      },
    },
    {
      valid: 23,
      run: async () => {
        await runScript(bean, 0);
      },
    },
  ];

  // 每小时都要执行
  await cronOneHour();

  for (const {valid, run} of scheduleOptions) {
    if (nowHours === valid) {
      await run();
    }
  }

  async function cronOneHour() {
    await jdFactory.cron(getCookieData());
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
