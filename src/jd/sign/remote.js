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
      ['3X4HMWmUigG689ZUZAg3Yo8Wtqf5', '小家电福利社'],
      ['c46tGzwvXueH7uKSjpXmPQP9Nod', '小家电1'],
    ];
    // 兼容remote脚本中的输出
    if (!cookie.endsWith(';')) {
      cookie += ';';
    }
    const replaceArray = [
      [/var Key = ''/, `var Key = '${cookie}'`],
      ...disableActivities.map(v => [`disable("${v}")`, 'true']),
      ...addSignList.map(([act, name]) => ['JingDongBean(stop),', `JDUserSignPre(stop, 'key', '${name}', '${act}'),JingDongBean(stop),`]),
      // 屏蔽cookie的本地保存, 避免重复执行
      ['var $nobyda = nobyda();', 'var $nobyda = nobyda();$nobyda.write = () => {};'],
    ];

    for (const [oldVal, newVal] of replaceArray) {
      content = content.replace(oldVal, newVal);
    }
    return content;
  }
}

module.exports = SignRemote;
