const _ = require('lodash');
const {getLogFile, getUrlDataFromFile} = require('../../lib/common');
const fs = require('fs');
const getFileContent = filePath => fs.existsSync(filePath) ? fs.readFileSync(filePath) : '';
const urlFile = require('path').resolve(__dirname, 'advertPlugin.url');
let urls = getUrlDataFromFile(urlFile);

function main() {
  if (_.isEmpty(urls)) return console.log('没有需要更新的url');
  const logStr = getFileContent(getLogFile('app')).toString();
  const result = logStr.split('\n').filter(str => /快来一起领红包吧/.test(str) && /\[1]/.test(str) && /谢谢你哦，助力成功/.test(str));
  const activityIds = result.map(str => str.match(/\[1] \[.*] \[(\w+)]/)[1]);
  urls = urls.filter(url => activityIds.includes(new URL(url).searchParams.get('activityId')));
  fs.writeFileSync(urlFile, urls.join('\n'));
  console.log(`未过期的活动: ${activityIds}, 已更新成功`);
}

main();
