const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {execSync} = require('child_process');
const {readFileJSON} = require('./common');

const processInAC = () => getEnv('NODE_ENV') === 'production';

const zipObject = fileContent => {
  let result = {};
  _.filter(fileContent.split('\n')).forEach(str => {
    if (str.startsWith('#')) return;
    const splitIndex = str.indexOf('=');
    result[str.substring(0, splitIndex)] = str.substring(splitIndex + 1);
  });
  return result;
};

function initEnv() {
  let actionEnv = {};
  if (processInAC()) {
    try {
      actionEnv = JSON.parse(process.env['ACTION_ENV']);
    } catch (e) {}
  }
  const envs = ['.env.product.json', '.env.local', '.env.local.json'].map(name => {
    const filePath = path.resolve(__dirname, `../../${name}`);
    if (!fs.existsSync(filePath)) return;
    if (name.endsWith('json')) {
      return readFileJSON(filePath);
    } else {
      const content = fs.readFileSync(filePath).toString() || '';
      return zipObject(content);
    }
  });
  envs.unshift(actionEnv);

  return updateProxyConf(_.merge(...envs));
}

// 判断是否可以配置代理
function updateProxyConf(result) {
  if (!('JUDGE_ENABLE_PROXY' in result)) return result;
  if (['darwin', 'win32'].includes(process.platform)) {
    const isWin = process.platform === 'win32';
    const proxyApps = ['Charles'];
    const enableProxy = proxyApps.some(name => {
      if (isWin) return execSync('tasklist').toString().match(name);
      const grepStr = `grep ${name}`;
      return execSync(`ps -ef | ${grepStr}`).toString().trim().split('\n').find(str => !str.match(grepStr));
    });
    if (!enableProxy) {
      ['http_proxy', 'https_proxy'].forEach(key => {
        delete result[key];
      });
    }
  }
  return result;
}

function getCookieData(name, envCookieName = 'JD_COOKIE', shareCode, getShareCodeFn) {
  shareCode && (shareCode = [].concat(shareCode));
  getShareCodeFn = getShareCodeFn || (() => shareCode);
  const getShareCodes = (name, targetIndex) => {
    if (!name) return [];
    name = name.toUpperCase();
    const key = `JD_${name}_SHARE_CODE`;
    const shareCodes = [];
    for (let i = 0; i < 10; i++) {
      const shareCode = i === 0 ? process.env[key] : process.env[`${key}_${i}`];
      shareCode && i !== targetIndex && shareCodes.push(shareCode);
    }
    return shareCodes;
  };
  const cookies = getEnvList(envCookieName);

  return cookies.map((cookie, index) => {
    const allShareCodes = getShareCodes(name, index);
    const shareCodes = getShareCodeFn(index, allShareCodes) || allShareCodes;
    return {cookie, shareCodes};
  });
}

// 从 process.env 获取值
function getEnv(key, index = 0) {
  let value = index === 0 ? process.env[key] : process.env[`${key}_${index}`];
  try {
    value = JSON.parse(value);
  } catch (e) {}
  return value;
}

function getEnvList(key, limit = 5) {
  let result = [];
  for (let i = 0; i < limit; i++) {
    const envVal = getEnv(key, i);
    envVal && result.push(envVal);
  }
  return result;
}

function updateProcessEnv() {
  const env = initEnv() || {};
  _.forEach(env, (v, k) => {
    if (_.isObject(v)) {
      env[k] = JSON.stringify(v);
    }
  });
  _.assign(process.env, env);
}

module.exports = {
  initEnv,
  updateProcessEnv,

  getCookieData,

  getEnv,
  getEnvList,

  processInAC,
};
