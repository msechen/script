/**
 *
 * @description 更新本地 hosts
 */

const _ = require('lodash');
const rq = require('request-promise');
const fs = require('fs');

async function main() {
  const uri = 'https://raw.hellogithub.com/hosts';
  /**
   * @type {Array}
   */
  const githubHost = await rq({
    uri,
    method: 'GET',
  }).then(data => {
    // console.log(`请求 ${uri} :`);
    // console.log(data);
    const hostData = data.split('\n').filter(str => str && !str.startsWith('#')).map(str => _.filter(str.split(' ')));
    return hostData.find(([ip, domain]) => domain === 'github.com');
  });

  if (!githubHost) return;
  console.log(`get github host from ${uri}:\n${githubHost.join(' ')}`);
  const hostPath = process.platform === 'win32' ? '' : '/etc/hosts';
  const originData = fs.readFileSync(hostPath).toString();
  if (!originData || originData.match(githubHost[0])) return;
  const filterData = originData.split('\n').filter(str => str && !str.trim().startsWith('#')).join('\n');
  const matched = filterData.match(/(\d+\.\d+\.\d+\.\d+)\s*github\.com\n?/);
  if (!matched) return;
  const [, oldIp] = matched;
  const newData = originData.replace(oldIp, githubHost[0]);
  // TODO 确认如何更改文件
  fs.writeFileSync(hostPath, newData);
  console.log('替换后的host文件如下:');
  console.log(newData);
}

main();
