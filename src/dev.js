/**
 * @description 本地运行的脚本
 */

const exec = require('child_process').execSync;
const {getNowDate, getLogFile} = require('./lib/common');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const Tail = require('tail').Tail;

const getEnv = () => {
  const envPath = path.resolve(__dirname, '../.env.local');
  if (!fs.existsSync(envPath)) return;
  // key=value
  const fileContent = fs.readFileSync(envPath).toString();
  if (!fileContent) return;
  let result = {};
  _.filter(fileContent.split('\n')).forEach(str => {
    if (str.startsWith('#')) return;
    const splitIndex = str.indexOf('=');
    result[str.substring(0, splitIndex)] = str.substring(splitIndex + 1);
  });
  return result;
};


async function start() {
  const logFile = getLogFile('app');
  exec(`touch ${logFile}`);
  const tail = new Tail(logFile, {
    logger: console,
  });
  console.log('\n');
  tail.on('line', console.log);

  // 输出
  return exec(`node src/app.js`, {env: getEnv() || {}}).toString();
}

start().then(result => {
  console.log('app.js 运行结果:');
  console.log(result);
});
