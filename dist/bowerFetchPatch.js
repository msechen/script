/**
 * 作为浏览器脚本 fetch patch
 */

// 屏蔽Object等数据输出
console.log = function () {
  console.info(...Array.from(arguments).map(v => v && v.toString ? v.toString() : v));
};

const cookie = process.env.JD_COOKIE;
const {getFetch} = require('../src/lib/http');
const fetch = getFetch({
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    cookie,
    userAgent: 'jdapp',
  },
});
// 兼容 pet.js
const confirm = () => false;
