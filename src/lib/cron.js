const {getNowMoment, getNowDate} = require('./common');
const _ = require('lodash');

async function timedExecutionWithDate(date, next) {
  const nowMoment = getNowMoment();
  const targetMoment = getNowMoment(void 0, date);
  if (nowMoment.isAfter(targetMoment)) return;
  const milliseconds = targetMoment.diff(nowMoment, 'millisecond');
  // 增加误差
  await require('util').promisify(setTimeout)(milliseconds + 10);
  return next();
}

/**
 * @description 定时执行, 一般只用于当天
 * @param time {Array|Number} 时间
 * @param next {Function}
 * @return {Promise<undefined|*>}
 */
async function timedExecution(time, next) {
  time = _.concat(time);
  const [hour, minute = 0, second = 0] = _.concat(time);
  const timeArray = [hour, minute, second].map(num => num > 9 ? num : '0' + num);
  return timedExecutionWithDate(`${getNowDate()} ${timeArray.join(':')}`, next);
}

module.exports = {
  timedExecution,

  timedExecutionWithDate,
};
