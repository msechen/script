const RemoteScript = require('../base/remote');
const {processInAC} = require('../../lib/env');

class SignRemote extends RemoteScript {
  static scriptName = 'SignRemote';
  static fileDownloadUrl = processInAC() ? 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js' : 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js';

  static changeFileContentFn(content, cookie) {
    // 禁用活动
    const disableActivities = [
      'JDGetCash',
      'JDCash',
    ];
    // 新增签到
    const addSignList = [
      // [act, name]
    ];
    // 兼容remote脚本中的输出
    if (!cookie.endsWith(';')) {
      cookie += ';';
    }
    const replaceArray = [
      [/var Key = ''/, `var Key = '${cookie}'`],
      ...disableActivities.map(v => [`disable("${v}")`, 'true']),
      ...addSignList.map(([act, name]) => ['await JingDongSpeedUp(stop);', `await JDUserSignPre(stop, 'key', '${name}', '${act}');await JingDongSpeedUp(stop);`]),
    ];

    for (const [oldVal, newVal] of replaceArray) {
      content = content.replace(oldVal, newVal);
    }
    return content;
  }
}

module.exports = SignRemote;
