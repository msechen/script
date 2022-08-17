/**
 * @description 更新日志的软连接
 */

const {execSync} = require('child_process');
const {getNowDate} = require('../lib/moment');
const {getLogFile} = require('../lib/common');

function main() {
  const isWin = process.platform === 'win32';
  const _do = () => {
    for (const name of ['request', 'app']) {
      const logFile = getLogFile(name);
      execSync(`touch ${logFile}`);
      const fileName = logFile.replace(`.${getNowDate()}`, '');
      execSync(`ln -snf ${logFile} ${fileName}`);
    }
  };

  _do();
  // windows 下需要实时更新
  if (isWin) {
    process.on('printLog', _do);
    process.on('beforeExit', _do);
  }
}

main();
