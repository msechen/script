const _ = require('lodash');
const fs = require('fs');
const path = require('path');

main();

function getLogData() {
  return fs.readFileSync(path.resolve(__dirname, 'shop.log')).toString();
}

function main() {
  const result = _.uniq(getLogData().split('\n').filter(v => v.match('402')).map(v => v.replace(/.*\[\w] /, '').replace(/:.*/, '')));

  if (_.isEmpty(result)) return;
  console.log('已失效的活动如下:');
  console.log(result);

  const shopPath = path.resolve(__dirname, 'shop.js');
  let content = fs.readFileSync(shopPath).toString();
  let replaced = false;
  result.forEach(token => {
    const exp = new RegExp(`[ ]*'${token}',\n`);
    if (content.match(exp)) {
      replaced = true;
      content = content.replace(exp, '');
    }
  });
  if (!replaced) return console.log('shop.js 无过期活动, 无需替换');
  fs.writeFileSync(shopPath, content);
  console.log('shop.js 替换成功');
}
