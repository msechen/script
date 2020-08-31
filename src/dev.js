/**
 * @description 本地运行的脚本
 */

const exec = require('child_process').execSync;
const {getNowDate, getLogFile} = require('./lib/common');
const tail = require('./lib/tail');
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
  ['request', 'app'].forEach(name => {
    const logFile = getLogFile(name);
    exec(`touch ${logFile}`);
    exec(`ln -snf ${logFile} ${logFile.replace(`.${getNowDate()}`, '')}`);

    (name === 'app') && tail(logFile);
  });

  // 输出
  return exec(`node src/app.js`, {env: getEnv() || {}}).toString();
}

start().then(result => {
  console.log('\napp.js 运行结果:');
  console.log(result);
});
