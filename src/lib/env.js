const fs = require('fs');
const path = require('path');
const _ = require('lodash');

function getLocalEnvs() {
  const envPath = path.resolve(__dirname, '../../.env.local');
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
  return index === 0 ? process.env[key] : process.env[`${key}_${index}`];
}

function getEnvList(key, limit = 5) {
  let result = [];
  for (let i = 0; i < limit; i++) {
    const envVal = getEnv(key, i);
    envVal && result.push(envVal);
  }
  return result;
}

module.exports = {
  getLocalEnvs,

  getCookieData,

  getEnv,
  getEnvList,
};
