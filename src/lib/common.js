const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

const _sleep = require('util').promisify(setTimeout);
/**
 *
 * @param seconds {number}
 */
const sleep = (seconds = 1) => _sleep(seconds * 1000);

const getNowMoment = (tz = 'Asia/Shanghai', date) => moment(date).tz(tz);
const getNowDate = (format = 'YYYY-MM-DD') => getNowMoment().format(format);
const getNowTime = getNowDate.bind(0, 'HH:mm:ss');

const logPath = path.resolve(__dirname, '../../logs');
const getLogFile = fileName => `${logPath}/${fileName}.log.${getNowDate()}`;
const printLog = (scriptName = '', fileName = 'app', output, type = 'info') => {
  const logFile = fs.createWriteStream(getLogFile(fileName), {flags: 'a'});
  const _log = chunk => {
    _.isPlainObject(chunk) && (chunk = JSON.stringify(chunk));
    logFile.write(`${getNowTime()} [${scriptName}] [${type}] ${chunk}\n`);
  };
  [].concat(output).forEach(_log);
};
const cleanLog = (fileName) => {
  fs.writeFileSync(getLogFile(fileName), '');
};

// 将json写入文件中
const writeFileJSON = (data, fileName, dirname) => require('fs').writeFileSync(require('path').resolve(dirname, fileName), JSON.stringify(data), {encoding: 'utf-8'});

async function waitSpecifyDate(date, next) {
  const nowMoment = getNowMoment();
  const targetMoment = getNowMoment(void 0, date);
  if (nowMoment.isAfter(targetMoment)) return;
  const seconds = targetMoment.diff(nowMoment, 'second');
  await sleep(seconds);
  return next();
}

async function waitSpecifyHour(hour, next) {
  return waitSpecifyDate(`${getNowDate()} ${hour}:00:00`, next);
}

async function parallelRun({list, runFn, onceNumber = list.length, onceDelaySecond = 0}) {
  return Promise.all(list.map((item, index) => new Promise(async resolve => {
    const delaySecond = Math.floor(index / onceNumber) * onceDelaySecond;
    delaySecond && await sleep(delaySecond);
    await runFn(item);
    resolve();
  })));
}

module.exports = {
  sleep,

  getLogFile,
  printLog,
  cleanLog,

  getNowMoment,
  getNowDate,
  getNowTime,

  waitSpecifyDate,
  waitSpecifyHour,

  writeFileJSON,

  parallelRun,
};
