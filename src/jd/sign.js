// fork from https://github.com/ruicky/jd_sign_bot
const exec = require('child_process').execSync;
const fs = require('fs');
const rp = require('request-promise');
const download = require('download');
const path = require('path');

const serverChan = require('../lib/serverChan');

// 公共变量
const KEY = process.env.JD_COOKIE;
const DualKey = process.env.JD_DUAL_COOKIE;

const distPath = '../../dist';

const getDistFile = (fileName) => {
  return path.resolve(__dirname, fileName ? `${distPath}/${fileName}` : distPath);
};

const scriptFilePath = getDistFile('JD_DailyBonus.js');

async function downFile() {
  const url = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js' : 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js';
  await download(url, getDistFile());
}

async function changeFile() {
  let content = await fs.readFileSync(scriptFilePath, 'utf8');
  content = content.replace(/var Key = ''/, `var Key = '${KEY}'`);
  DualKey && (content = content.replace(/var DualKey = ''/, `var DualKey = '${DualKey}'`));
  await fs.writeFileSync(scriptFilePath, content, 'utf8');
}

async function start(needSend) {
  if (!KEY) {
    console.log('请填写 key 后在继续');
    return;
  }
  // 下载最新代码
  await downFile();
  console.log('下载代码完毕');
  // 替换变量
  await changeFile();
  console.log('替换变量完毕');

  const resultFilePath = getDistFile('result.txt');
  // 执行
  await exec(`node ${scriptFilePath} >> ${resultFilePath}`);
  console.log('执行完毕');

  if (needSend) {
    const content = fs.readFileSync(resultFilePath, 'utf8');
    await serverChan.send('京东签到-' + new Date().toLocaleDateString(), formatContent(content));
    console.log('发送结果完毕');
  }

  function formatContent(content) {
    if (content.match('Cookie失效')) {
      return 'Cookie失效!请重新登录';
    }
    return [...content.matchAll(/【签到概览】.*【账号总计】/g)].map(o => o[0].replace('【账号总计】', '')).join('\n') || '全部签到失败(应该是已经签到过)';
  }
}

module.exports = start;
