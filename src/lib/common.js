const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

const _sleep = require('util').promisify(setTimeout);
/**
 *
 * @param minutes {number}
 */
const sleep = (minutes = 1) => _sleep(minutes * 1000);

const getNowMoment = (tz = 'Asia/Shanghai') => moment().tz(tz);
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

module.exports = {
  sleep,

  getLogFile,
  printLog,

  getNowMoment,
  getNowDate,
  getNowTime,
};
