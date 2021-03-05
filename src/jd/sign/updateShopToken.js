const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const {getRealUrl, getOriginDataFromFile, getUrlDataFromFile} = require('../../lib/common');

main();

async function main() {
  updateTokenFromLog();
  await addTokenFromShopUrl();
}

function updateTokenFromLog() {
  const data = getOriginDataFromFile(path.resolve(__dirname, 'shop.log'));
  const notGiftData = data.filter(v => v.match(/已签到\w+天/) && !v.match('奖品'));
  const expiredData = data.filter(v => v.match('402'));
  const result = _.uniq(_.concat(notGiftData, expiredData).map(v => v.replace(/.*\[\w] /, '').replace(/:.*/, '').trim()));

  if (_.isEmpty(result)) return;
  console.log('已失效的活动如下:');
  console.log(result);

  updateShopScript({removeTokens: result});
}

async function addTokenFromShopUrl() {
  const urlPath = path.resolve(__dirname, 'shopToken.url');
  const shortUrls = getUrlDataFromFile(urlPath);
  const tokens = [];
  for (const url of shortUrls) {
    const longUrl = await getRealUrl(url);
    tokens.push(new URL(longUrl).searchParams.get('token'));
  }
  console.log('新增的token如下');
  console.log(tokens);
  updateShopScript({addTokens: tokens});
  fs.writeFileSync(urlPath, '');
}

function updateShopScript({removeTokens = [], addTokens = []}) {
  const shopPath = path.resolve(__dirname, 'shop.js');
  let content = fs.readFileSync(shopPath).toString();
  let replaceTimes = 0;
  removeTokens.forEach(token => {
    const exp = new RegExp(`[ ]*'${token}',\n`);
    if (content.match(exp)) {
      replaceTimes = 1;
      content = content.replace(exp, '');
    }
  });
  if (!_.isEmpty(removeTokens) && replaceTimes !== 1) console.log('shop.js 无需移除过期活动');

  addTokens.forEach(token => {
    const targetStr = '// 脚本新增插入位置';
    const exp = new RegExp(`[ ]*${targetStr}`);
    const target = content.match(exp);
    if (!target || content.match(token)) return;
    const spaceStr = target[0].replace(targetStr, '');
    replaceTimes = 2;
    content = content.replace(targetStr, `'${token}',\n${spaceStr}${targetStr}`);
  });
  if (!_.isEmpty(addTokens) && replaceTimes !== 2) console.log('shop.js 无需要新增活动');

  if (!replaceTimes) return console.log('shop.js 无需替换');
  fs.writeFileSync(shopPath, content);
  console.log('shop.js 替换成功');
}

// helpers
