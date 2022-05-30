/**
 * @description 处理 Charles 相关数据的方法
 */

const _ =  require('lodash');

function formatPasteData(str) {
  return _.fromPairs(str.trim().split('\n').map(str => str.split('\t').map(s => s.trim())));
}

module.exports = {
  formatPasteData,
}
