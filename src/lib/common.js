const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const rp = require('request-promise');
const {getNowTime, getNowDate} = require('./moment');

const _sleep = require('util').promisify(setTimeout);
/**
 *
 * @param seconds {number}
 */
const sleep = (seconds = 1) => _sleep(seconds * 1000);

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

async function parallelRun({list, runFn, onceNumber = list.length, onceDelaySecond = 0}) {
  return Promise.all(list.map((item, index) => new Promise(async resolve => {
    const delaySecond = Math.floor(index / onceNumber) * onceDelaySecond;
    delaySecond && await sleep(delaySecond);
    await runFn(item);
    resolve();
  })));
}

/**
 * @description 获取重定向链接(短链接)的真正URL
 * @param uri{string}
 * @param after200Fn{function}
 * @param options{object}
 * @return {Promise<string>}
 */
async function getRealUrl(uri, after200Fn, options = {}) {
  _.assign(options, {
    uri, followRedirect: false,
    resolveWithFullResponse: true,
  });
  if (new URL(uri).host === 'u.jd.com') {
    after200Fn = body => {
      const urlPrefix = 'var hrl=\'';
      const prefixMatch = body.match(urlPrefix);
      if (!prefixMatch) return;
      return body.substring(prefixMatch.index + urlPrefix.length, body.match('\';var ua=').index);
    };
  }
  return rp(options).then(res => {
    if (res.statusCode === 200) {
      const body = res.body;
      if (!after200Fn) {
        console.log(`${uri} 不需要302`);
        return uri;
      }
      const newUri = after200Fn(body);
      if (!newUri) return console.log(`${uri}, 获取出错`);
      return getRealUrl(newUri, after200Fn, options);
    }
  }).catch(function (error) {
    const res = error.response;
    if (res.statusCode === 302) {
      const realUrl = _.property('headers.location')(res);
      console.log('真正的URL地址如下:');
      console.log(realUrl);
      return realUrl;
    }
    console.log(`${uri}, 获取出错`);
  });
}

function getOriginDataFromFile(filePath) {
  return _.filter(fs.readFileSync(filePath).toString().split(/\n+/));
}

function getUrlDataFromFile(filePath) {
  return _.filter(getOriginDataFromFile(filePath), str => str.startsWith('http'));
}

/**
 * @description 字符串化Object的值
 * @param target {Object}
 */
function objectValuesStringify(target) {
  if (_.isEmpty(target)) return;
  for (const [key, value] of Object.entries(target)) {
    if (!_.isString(value)) {
      try {
        target[key] = JSON.stringify(value);
      } catch (e) {
      }
    }
  }
}

/**
 * @description 根据正则匹配居于中间的数据
 * @param target {string}
 * @param reg {RegExp|undefined} 正则表达式, eg: /"test":"(\w*)"/
 * @param prefix {string|undefined} 匹配的开始
 * @param suffix {string|undefined} 匹配的结尾
 * @param match {string|undefined} 需要找出的内容
 * @return {string}
 */
function matchMiddle(target, {reg, prefix, suffix, match = '\w'}) {
  reg = reg || new RegExp(`${prefix}(${match}*)${suffix}`);
  const execResult = reg.exec(target) || [];
  return execResult[1] || '';
}

/**
 * @description 单个文件运行脚本
 * @param target {Class}
 * @param method {String|Array|undefined}
 * @param runFn {Function|undefined}
 * @return {Promise|*}
 */
async function singleRun(target, method = 'start', runFn = null) {
  const {getLocalEnvs, getCookieData} = require('./env');

  let promise;

  for (const m of _.concat(method)) {
    if (runFn || process.argv[2] === m) {
      process.env = getLocalEnvs();
      promise = await (runFn ? runFn(m) : target[m](getCookieData()));
    }
  }

  return promise;
}

module.exports = {
  sleep,

  getLogFile,
  printLog,
  cleanLog,

  writeFileJSON,

  parallelRun,

  getRealUrl,
  getUrlDataFromFile,
  getOriginDataFromFile,

  objectValuesStringify,
  matchMiddle,

  singleRun,
};
