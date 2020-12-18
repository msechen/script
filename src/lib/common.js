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

// 将json写入文件中
const writeFileJSON = (data, fileName, dirname) => require('fs').writeFileSync(require('path').resolve(dirname, fileName), JSON.stringify(data), {encoding : 'utf-8'});

module.exports = {
  sleep,

  getLogFile,
  printLog,

  getNowMoment,
  getNowDate,
  getNowTime,

  writeFileJSON,
};
