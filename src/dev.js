/**
 * @description 本地运行的脚本
 */

require('./shell/updateDayLogPath');
const exec = require('child_process').execSync;
const {getLogFile} = require('./lib/common');
const {getLocalEnvs} = require('./lib/env');
const tail = require('./lib/tail');
const _ = require('lodash');

async function start() {
  tail(getLogFile('app'));

  // 输出
  return exec(`node src/app.js`, {env: getLocalEnvs()}).toString();
}

start().then(result => {
  console.log('\napp.js 运行结果:');
  console.log(result);
});
