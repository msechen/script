/**
 * @description 获取随机的uuid
 * @return {string}
 */
function uuidRandom() {
  return Math.random().toString(16).slice(2, 10) +
    Math.random().toString(16).slice(2, 10) +
    Math.random().toString(16).slice(2, 10) +
    Math.random().toString(16).slice(2, 10) +
    Math.random().toString(16).slice(2, 10);
}

module.exports = {
  uuidRandom,
};
