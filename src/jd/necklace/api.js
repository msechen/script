const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const getScript = name => path.resolve(__dirname, name);

function runWebScript() {
  // https://storage.360buyimg.com/babel/00750963/1942873/production/dev/main.167a9e03.js
  const mainScript = fs.readFileSync(getScript('./main.167a9e03.js')).toString();
  // https://storage.360buyimg.com/babel/00750963/1942873/production/dev/vendor.c0e33efb.js
  const vendorScript = fs.readFileSync(getScript('./vendor.c0e33efb.js')).toString();
  const patchScript = fs.readFileSync(getScript('./webScriptPatch.js')).toString();

  const outputScript = patchScript.replace('2222', mainScript + vendorScript);
  eval(outputScript);
}

// TODO 应该重写api的方法
function patchData({id, data}) {
  // 支持web脚本
  if (!global.smashUtils) runWebScript();
  const originData = _.assign({}, data);
  delete originData.pin;
  const random = getRandom();
  data.random = random;
  let extraData = {};
  try {
    extraData = smashUtils.get_risk_result({id, data});
  } catch (e) {}

  const {log} = extraData;
  return _.assign(originData, {extraData: {log, 'sceneid': 'DDhomePageh5'}, random});

  function getRandom(e) {
    return Math.floor(1e6 * Math.random()).toString().padEnd(6, '8');
  }
}

module.exports = {
  patchData,
};
