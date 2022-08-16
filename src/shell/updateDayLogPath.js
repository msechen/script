/**
 * @description 更新日志的软连接
 */

const {execSync} = require('child_process');
const {getNowDate} = require('../lib/moment');
const {getLogFile} = require('../lib/common');

['request', 'app'].forEach(name => {
  const logFile = getLogFile(name);
  execSync(`touch ${logFile}`);
  const fileName = logFile.replace(`.${getNowDate()}`, '');
  // 先删除再更新软链
  execSync(`rm -rf ${fileName}`);
  execSync(`ln -snf ${logFile} ${fileName}`);
});
