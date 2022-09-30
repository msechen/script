const _ = require('lodash');
const {getNowDate, getNowHour} = require('./lib/moment');
const {getCookieData, updateProcessEnv, processInAC, getEnv} = require('./lib/env');
const {sleepTime} = require('./lib/cron');
const {sleep} = require('./lib/common');
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

const Fruit = require('./jd/fruit');
let Joy = require('./jd/joy');

const nowDate = getNowDate();
const nowHour = getNowHour();

const _send = _.noop || sendNotify.bind(0, {
  sendYesterdayLog: nowHour === 23,
  subjects: [void 0, nowDate, nowHour],
});
// 超时需自动退出
const autoExit = async () => {
  await sleep(60 * 60);
  _send();
  process.exit();
};

if (processInAC()) {
  Joy = TemporarilyOffline;
}

!getEnv('DISABLE_AUTO_EXIT') && autoExit();
main().then(_send).then(async () => {
  await sleep(10);
  process.exit();
});

async function main() {
  if (process.env.NOT_RUN) {
    console.log('不执行脚本');
    return;
  }

  await require('./lib/mailer').updateEnvFromMail();

  if ([10, 16, 22].includes(nowHour)) {
    serialRun(Joy);
  }

  if (nowHour % 5 === 0) {
    serialRun(Joy, doCron);
  }

  if ([10, 15, 21].includes(nowHour)) {
    doRun(require('./jd/lite/EarnCoins'));
  }

  if ([3, 7, 12, 19].includes(nowHour)) {
    doRun(require('./jd/beautyMakeup'));
  }

  if (nowHour === 23) {
    await doRun(Fruit);
    await sleepTime([23, 55]);
    doRun(require('./jd/beautyMakeup'));
    await sleepTime(24);
    doRun(require('./jd/earn/AdvertPlugin'));
  }
}
