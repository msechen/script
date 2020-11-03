const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const {getNowMoment, getNowDate, getLogFile} = require('./lib/common');
const serverChan = require('./lib/serverChan');

const sign = require('./jd/sign');
const fruit = require('./jd/fruit');
const fruitSchedule = require('./jd/fruitSchedule');
const pet = require('./jd/pet');
const cash = require('./jd/cash');
const bean = require('./jd/bean');
const invitation = require('./jd/invitation');
const superMarket = require('./jd/superMarket');
const Pet = require('./jd/newPet');
const Wfh = require('./jd/wfh');
const Harmony = require('./jd/wfh/harmony');
const jdFactory = require('./jd/jdFactory');
const stall = require('./jd/stall');
const starMall = require('./jd/starMall');
const Bc = require('./jd/superBrand/bc');

const getCookieData = (name, shareCode) => {
  shareCode && (shareCode = [].concat(shareCode));
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
  const cookies = _.filter([process.env.JD_COOKIE, process.env.JD_DUAL_COOKIE]);

  return cookies.map((cookie, index) => ({cookie, shareCodes: shareCode || getShareCodes(name, index)}));
};

async function runScript(fn, name = fn.name) {
  // TODO name 默认值需要调整从 fn 中获取
  return fn(getCookieData(name));
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
        await sign();
        await fruit();
        await pet();
        await fruitSchedule([].concat(getCookieData(void 0, process.env.JD_FRUIT_SHARE_CODE_3)[1]));
        await fruitSchedule(getCookieData(void 0, process.env.JD_FRUIT_SHARE_CODE_2));
        await Pet.start(getCookieData('pet'));
        await jdFactory.start(getCookieData(jdFactory.scriptName));
        await runScript(bean, 'bean');
        await runScript(invitation, 0);
        await runScript(superMarket, 0);
        await Wfh.start(getCookieData());
      },
    },
    {
      valid: 1,
      run: async () => {
        await stall.start(getCookieData(stall.scriptName));
      },
    },
    {
      valid: 2,
      run: async () => {
        await starMall.start(getCookieData());
        await Bc.start(getCookieData());
        await Harmony.start(getCookieData());
      },
    },
    {
      valid: 4,
      run: async () => {
      },
    },
    {
      valid: 8,
      run: async () => {
        await fruitSchedule(getCookieData());
        await fruit();
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
        await runScript(cash, 'cash');
        await runScript(fruitSchedule, 0);
        await runScript(bean, 0);
        await runScript(superMarket, 0);
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
        await runScript(fruitSchedule, 0);
        await runScript(bean, 0);
        await runScript(superMarket, 0);
      },
    },
    {
      valid: 22,
      run: async () => {
        await jdFactory.start(getCookieData());
      },
    },
    {
      valid: 23,
      run: async () => {
        await runScript(bean, 0);
        await stall.start(getCookieData());
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
    await stall.cron(getCookieData());
  }
}

main().then(function () {
  // TODO 替换成 app.log
  const resultPath = path.resolve(__dirname, '../dist/result.txt');
  if (!fs.existsSync(resultPath)) return;
  const content = fs.readFileSync(resultPath);
  serverChan.send(`lazy_script-${getNowDate()}`, content).then(() => {
    console.log('发送成功');
  });
}).then(() => {
  const logFile = getLogFile('app');
  if (!fs.existsSync(logFile)) return;
  const content = fs.readFileSync(logFile);
  serverChan.send(`lazy_script-${getNowDate()}`, content).then(() => {
    console.log('发送成功');
  });
});
