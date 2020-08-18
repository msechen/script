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

const getCookieData = (name, shareCode) => {
  shareCode && (shareCode = [].concat(shareCode));
  const getShareCodes = (name, targetIndex) => {
    if (!name) return [];
    name = name.toUpperCase();
    const key = `JD_${name}_SHARE_CODE`;
    const shareCodes = [];
    for (let i = 0; i < 5; i++) {
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
        await runScript(cash, 'cash');
        await runScript(bean, 'bean');
        await runScript(invitation, 0);
        await runScript(superMarket, 0);
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
        await fruit();
        await fruitSchedule(getCookieData(void 0, process.env.JD_FRUIT_SHARE_CODE_2));
      },
    },
    {
      valid: 12,
      run: async () => {
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
  ];

  for (const {valid, run} of scheduleOptions) {
    if (nowHours === valid) {
      await run();
    }
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
