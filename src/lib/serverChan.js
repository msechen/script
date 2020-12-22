const rp = require('request-promise');
const _key = process.env.SEVER_CHAN_KEY;
const fs = require('fs');

const {getNowDate, getLogFile, cleanLog} = require('./common');

async function send(title, content) {
  if (!_key) {
    return;
  }
  // Markdown 格式, 换行需要两个空行
  content = content.toString().replace(/(?<!\n)\n/g, '\n\n');
  let sendTimes = 5;
  const options = {
    uri: `https://sc.ftqq.com/${_key}.send`,
    form: {text: title, desp: content},
    json: true,
    method: 'POST',
  };
  const _send = options => {
    return rp.post(options).then(res => {
      console.log(res);
    }).catch((err) => {
      console.log('发送失败, 需再次重新发送');
      sendTimes--;
      if (sendTimes === 0) {
        return;
      }
      return _send(options);
    });
  };
  return _send(options);
}

async function sendLog(fileName = 'app', needCleanLog = process.env.NODE_ENV === 'production') {
  const logFile = getLogFile(fileName);
  let content;
  if (fs.existsSync(logFile)) {
    content = fs.readFileSync(logFile);
  }
  if (!content) return;
  needCleanLog && cleanLog(fileName);
  return send(`lazy_script_${getNowDate()}`, content).then(() => {
    console.log('发送消息成功');
  });
}

module.exports = {
  send,
  sendLog,
};
