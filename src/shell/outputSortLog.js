/**
 * @description 更新日志的输出
 */

const {getSortLogContent} = require('../lib/common');

// 可以自行定义, 做调试使用
let content = ``;

require('fs').writeFileSync('./sortApp.log', getSortLogContent(['name', 'cookie'], content));
