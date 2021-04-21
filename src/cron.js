/**
 * @description 本地定时运行脚本
 */

const exec = require('child_process').execSync;
const {CronJob} = require('cron');
const _ = require('lodash');
const {getFullDate} = require('./lib/moment');

createCronJob('runDev', '0 */1 * * *', () => {
  console.log(exec('npm run dev').toString());
});

function createCronJob(name, cronTime, onTick, onComplete) {
  return new CronJob(cronTime, () => {
    console.log(`${getFullDate()}-${name}-执行开始----------------------`);
    onTick();
    console.log(`${getFullDate()}-${name}-执行结束----------------------`);
  }, onComplete, true);
}
