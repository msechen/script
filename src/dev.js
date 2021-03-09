/**
 * @description 本地运行的脚本
 */

const exec = require('child_process').execSync;
const {getNowDate, getLogFile} = require('./lib/common');
const {getLocalEnvs} = require('./lib/env');
const tail = require('./lib/tail');
const _ = require('lodash');

async function start() {
  ['request', 'app'].forEach(name => {
    const logFile = getLogFile(name);
    exec(`touch ${logFile}`);
    exec(`ln -snf ${logFile} ${logFile.replace(`.${getNowDate()}`, '')}`);

    (name === 'app') && tail(logFile);
  });

  // 输出
  return exec(`node src/app.js`, {env: getLocalEnvs()}).toString();
}

start().then(result => {
  console.log('\napp.js 运行结果:');
  console.log(result);
});
