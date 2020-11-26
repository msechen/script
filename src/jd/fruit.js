const exec = require('child_process').execSync;
const fs = require('fs');
const rp = require('request-promise');
const download = require('download');
const path = require('path');

const serverChan = require('../lib/serverChan');

// 公共变量
const KEY = process.env.JD_COOKIE;
const DUAL_KEY = process.env.JD_COOKIE_1;

const distPath = '../../dist';

const getDistFile = (fileName) => {
  return path.resolve(__dirname, fileName ? `${distPath}/${fileName}` : distPath);
};

const scriptFilePath = getDistFile('fruit.js');
const dualScriptFilePath = getDistFile('dual_fruit.js');

async function downFile() {
  const url = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/liuxiaoyucc/jd-helper/master/fruit/fruit.js' : 'https://cdn.jsdelivr.net/gh/liuxiaoyucc/jd-helper@master/fruit/fruit.js';
  await download(url, getDistFile());
}

async function changeFile(isDual) {
  const bowerFetchPatch = await fs.readFileSync(path.resolve(__dirname, '../../dist/bowerFetchPatch.js'), 'utf8');
  let content = await fs.readFileSync(scriptFilePath, 'utf8');
  content = content.replace('121ada81cdfd4085b07d1ce871ded341', '');
  if (isDual) {
    content = content.replace('JD_COOKIE', 'JD_COOKIE_1');
  } else {
    content = bowerFetchPatch + content;
  }

  await fs.writeFileSync(isDual ? dualScriptFilePath : scriptFilePath, content, 'utf8');
}

async function start(needSend) {
  if (!KEY) {
    console.log('请填写 key 后在继续');
    return;
  }

  if (!fs.existsSync(getDistFile())) {
    // 下载最新代码
    await downFile();
    console.log('下载代码完毕');
  }
  // 替换变量
  await changeFile();
  console.log('文件内容替换成功');

  const resultFilePath = getDistFile('result.txt');
  // 执行
  await exec(`node ${scriptFilePath} >> ${resultFilePath}`);
  console.log('执行完毕');

  if (DUAL_KEY) {
    await changeFile(true);
    console.log('文件内容替换成功');
    await exec(`node ${dualScriptFilePath} >> ${resultFilePath}`);
    console.log('执行完毕');
  }

  if (needSend) {
    const content = fs.readFileSync(resultFilePath, 'utf8');
    await serverChan.send('东东农场-' + new Date().toLocaleDateString(), content);
    console.log('发送结果完毕');
  }
}

module.exports = start;
