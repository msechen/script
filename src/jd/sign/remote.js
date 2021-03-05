const RemoteScript = require('../base/remote');

class SignRemote extends RemoteScript {
  static fileDownloadUrl = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js' : 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js';

  static changeFileContentFn(content, cookie) {
    content = content.replace(/var Key = ''/, `var Key = '${cookie}'`).replace('disable("JDGetCash")', 'true');
    // 增加签到
    const list = [
      // act, name
      ['43wbZf58yadB3NbARTJDGUWpZJ8F', '签到10豆'],
    ];
    for (const [act, name] of list) {
      content = content.replace('await JingDongSpeedUp(stop);', `await JDUserSignPre(stop, 'key', '${name}', '${act}');await JingDongSpeedUp(stop);`);
    }
    return content;
  }
}

module.exports = SignRemote;
