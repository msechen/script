const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const Cookie = require('./cookie');
const {execSync} = require('child_process');
const {sleep, readFileJSON, writeFileJSON} = require('./common');

const processInAC = () => getEnv('NODE_ENV') === 'production';
const getKeyByIndex = (key, index = 0) => index === 0 ? key : `${key}_${index}`;

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
  if (processInAC()) {
    // github action 从 env.ACTION_ENV 中读取
    updateProductEnv(getEnv('ACTION_ENV'));
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

  const result = _.merge(...envs);

  return updateProxyConf(result);
}

// 将 JD_COOKIE 更新成 JD_COOKIE_OPTION, 只支持全覆盖, 不支持合并
function patchCookieOption() {
  let cookieOption = getEnv('JD_COOKIE_OPTION') || [];
  const cookieList = getEnvList('JD_COOKIE').map((cookie, index) => {
    const earnCookie = getEnv('JD_EARN_COOKIE', index);
    const cO = new Cookie(cookie).toObject();
    if (earnCookie) {
      _.assign(cO, new Cookie(earnCookie).toObject());
    }
    return cO;
  });
  if (_.isEmpty(cookieList)) {
    return;
  }
  if (_.isEmpty(cookieOption)) {
    updateEnv('JD_COOKIE_OPTION', cookieList.map(cookies => ({cookies})));
  }
}

// 判断是否可以配置代理
function updateProxyConf(result) {
  const proxyKey = ['http_proxy', 'https_proxy'];
  if (!Object.keys(result).some(key => proxyKey.includes(key))) return result;
  if (['darwin', 'win32'].includes(process.platform)) {
    const isWin = process.platform === 'win32';
    const proxyApps = ['Charles'];
    const enableProxy = proxyApps.some(name => {
      if (isWin) return execSync('tasklist').toString().match(name);
      const grepStr = `grep ${name}`;
      return execSync(`ps -ef | ${grepStr}`).toString().trim().split('\n').find(str => !str.match(grepStr));
    });
    if (!enableProxy) {
      proxyKey.forEach(key => {
        delete result[key];
      });
    }
  }
  return result;
}

function getCookieData(name, shareCode, getShareCodeFn) {
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
  const cookies = _.map(getEnv('JD_COOKIE_OPTION'), 'cookies');

  return cookies.map((cookie, index) => {
    const allShareCodes = getShareCodes(name, index);
    const shareCodes = getShareCodeFn(index, allShareCodes) || allShareCodes;
    return {cookie, shareCodes};
  });
}

// 从 process.env 获取值
function getEnv(key, index = 0) {
  let value = process.env[getKeyByIndex(key, index)];
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

function updateEnv(key, value, index) {
  process.env[getKeyByIndex(key, index)] = _.isObject(value) ? JSON.stringify(value) : value;
}

function updateProcessEnv() {
  _updateEnv(initEnv() || {});
  patchCookieOption();
}

function _updateEnv(object) {
  _.forEach(object, (v, k) => {
    updateEnv(k, v);
  });
}

function getProductEnv() {
  return readFileJSON('../../.env.product.json', __dirname);
}

function updateProductEnv(data, cover = true, merge = false) {
  if (!cover) {
    const oldData = getProductEnv();
    data = merge ? _.merge(oldData, data) : _.assign(oldData, data);
  }
  _updateEnv(data);
  writeFileJSON(data, '../../.env.product.json', __dirname);
}

async function uploadProductEnvToAction(needInAction) {
  if (needInAction && !processInAC()) {
    console.log('本地无需上传至github action');
    return;
  }
  const command = 'npm run build:UpdateActionEnv';
  console.log(command);
  await sleep(3);
  console.log(require('child_process').execSync(command).toString());
}

module.exports = {
  initEnv,
  updateProcessEnv,

  getCookieData,

  getEnv,
  updateEnv,
  getEnvList,

  processInAC,

  getProductEnv,
  updateProductEnv,
  uploadProductEnvToAction,
};
