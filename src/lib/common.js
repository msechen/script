const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const rp = require('request-promise');
const download = require('download');
const {getNowHour, getNowTime, getNowDate} = require('./moment');

const _sleep = require('util').promisify(setTimeout);
/**
 *
 * @param seconds {number}
 */
const sleep = (seconds = 1) => _sleep(seconds * 1000);

const logPath = path.resolve(__dirname, '../../logs');
const getLogFile = (fileName, date = getNowDate()) => `${logPath}/${fileName}.log.${date}`;
const cacheWriteStream = {};
const printLog = (scriptName = '', fileName = 'app', output, type = 'info', maxLength) => {
  const filePath = path.extname(fileName) ? fileName : getLogFile(fileName);
  const writeStream = cacheWriteStream[filePath] = cacheWriteStream[filePath] || fs.createWriteStream(filePath, {
    flags: 'a',
    autoClose: true,
    emitClose: true,
  }).on('close', () => {
    // TODO 执行 writeStream.close()
    cacheWriteStream[filePath] = null;
    console.log(`${getNowTime()} ${filePath} writeStream closed`);
  });
  const _log = chunk => {
    _.isPlainObject(chunk) && (chunk = JSON.stringify(chunk));
    if (maxLength) {
      chunk = chunk.substring(0, maxLength) + '...more';
    }
    writeStream.write(`${getNowTime()} [${scriptName}] [${type}] ${chunk}\n`);
  };
  [].concat(output).forEach(_log);
};
const cleanLog = (fileName) => {
  fs.writeFileSync(getLogFile(fileName), '');
};
const extractLogToObject = str => {
  if (!str) return;
  const [, time, name, type, cookie, msg] = /^(\d{2}:\d{2}:\d{2}) \[(.*)] \[(\w*)] \[(\d)] (.*)/.exec(str);
  return {time, name, type, cookie, msg, origin: str};
};

const getFileContent = (filePath, defaultValue = '') => fs.existsSync(filePath) ? fs.readFileSync(filePath) : defaultValue;
const _getAbsolutePath = (fileName, dirname) => dirname ? path.resolve(dirname, fileName) : fileName;
// 将json写入文件中
const writeFileJSON = (data, fileName, dirname) => fs.writeFileSync(_getAbsolutePath(fileName, dirname), JSON.stringify(data), {encoding: 'utf-8'});
const readFileJSON = (fileName, dirname, defaultValue = {}) => {
  const absolutePath = _getAbsolutePath(fileName, dirname);
  const data = getFileContent(absolutePath);
  if (!data) return defaultValue;
  let result;
  try {
    result = JSON.parse(data.toString());
  } catch (e) {
    console.log(e);
  }
  result = result || defaultValue;
  return result;
};

function getSortLogContent(groupType, content) {
  content = (content || getFileContent(getLogFile('app'))).toString();
  const array = content.split(/[\n|\r]/);
  let result = _.filter(array).map(extractLogToObject);
  if (groupType) {
    const groupTypes = _.concat(groupType);
    const _group = (array, types) => {
      if (_.isEmpty(types)) return array;
      const type = types.shift();
      const object = _.groupBy(array, type);
      _.forEach(object, (o, key) => {
        object[key] = _group(o, _.concat(types));
      });
      return _.flattenDeep(_.values(object));
    };
    result = _group(result, groupTypes);
  }
  return _.map(result, 'origin').join('\n');
}

async function parallelRun({list, runFn, onceNumber = list.length, onceDelaySecond = 0}) {
  return Promise.all(list.map((item, index) => new Promise(async resolve => {
    const delaySecond = Math.floor(index / onceNumber) * onceDelaySecond;
    delaySecond && await sleep(delaySecond);
    const result = await runFn(item);
    resolve(result);
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
  !/^https?:\/\//.test(uri) && (uri = `https://${uri}`);
  _.assign(options, {
    uri, followRedirect: false,
    resolveWithFullResponse: true,
  });
  let url;
  try {
    url = new URL(uri);
  } catch (e) {}
  if (!url) return Promise.resolve('');
  if (url.host === 'u.jd.com') {
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
    if (_.get(res, 'statusCode') === 302) {
      const realUrl = _.property('headers.location')(res);
      console.log('真正的URL地址如下:');
      console.log(realUrl);
      return realUrl;
    }
    console.log(`${uri}, 获取出错`);
  });
}

function getOriginDataFromFile(filePath) {
  return fs.existsSync(filePath) ? _.filter(fs.readFileSync(filePath).toString().split(/\r?\n/g)) : [];
}

function getUrlDataFromFile(filePath) {
  const array = getOriginDataFromFile(filePath);
  return array.filter(str => !str.startsWith('mp://'))
  .map(str => str.match(/[\u4e00-\u9fa5]/) ? '' : /^https?:\/\//.test(str) ? str : `https://${str}`)
  .filter(str => {
    let result = !!str;
    try {
      new URL(str);
    } catch (e) {
      result = false;
    }
    return result;
  });
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
  const {updateProcessEnv, getCookieData} = require('./env');
  const [nodePath, filePath, command1] = process.argv;
  const fileName = path.basename(filePath);
  let scriptName1 = fileName.replace(/\.js$/, '');
  const fileParentDirName = path.basename(path.dirname(filePath));
  // 必须是当前执行的文件, 避免被继承的类被执行
  const scriptName = target.scriptName;
  const isCurrentFile = eq(scriptName, scriptName1) || eq(scriptName, `${fileParentDirName}${scriptName1 === 'index' ? '' : scriptName1}`);

  let promise;

  for (const m of _.concat(method)) {
    if (command1 === m && isCurrentFile) {
      updateProcessEnv();
      promise = await (runFn ? runFn(m, getCookieData) : target[m](getCookieData(void 0)));
    }
  }

  return promise;

  function eq(value, other) {
    return _.eq(..._.map([value, other], _.toLower));
  }
}

function replaceObjectMethod(context, method, patchArgsFn) {
  const target = context[method];
  context[method] = async (...args) => target.apply(context, await patchArgsFn(args));
}

/**
 * @description 从Function获取其他类型获取值
 * @param target {Function|*}
 * @param option {Object}
 * @return {*}
 */
function getValueByFn(target, option = {}) {
  const {context} = option;
  return _.isFunction(target) ? target.call(context) : target;
}

/**
 * @description 下载文件
 * @param urls {Array}
 * @param dirname __dirname
 */
function downloadFile(urls, dirname) {
  urls.forEach(async url => {
    await download(url, dirname);
  });
}

/**
 * @description 敏感信息部分打码
 */
function addMosaic(str, options) {
  const {prefix = 1, suffix = 1, mosaicL = 3, mosaic = '*'} = options || {};
  return str.substring(0, prefix) + Array(mosaicL).fill(mosaic).join('') + str.substring(str.length - suffix);
}

module.exports = {
  sleep,

  getLogFile,
  printLog,
  cleanLog,
  extractLogToObject,
  getSortLogContent,

  getFileContent,
  writeFileJSON,
  readFileJSON,

  parallelRun,

  getRealUrl,
  getUrlDataFromFile,
  getOriginDataFromFile,

  objectValuesStringify,
  matchMiddle,

  singleRun,

  replaceObjectMethod,

  getValueByFn,

  downloadFile,

  addMosaic,
};
