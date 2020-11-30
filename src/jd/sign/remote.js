const RemoteScript = require('../base/remote');

class SignRemote extends RemoteScript {
  static fileDownloadUrl = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js' : 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js';

  static changeFileContentFn(content, cookie) {
    return content.replace(/var Key = ''/, `var Key = '${cookie}'`).replace('disable("JDGetCash")', 'true');
  }
}

module.exports = SignRemote;
