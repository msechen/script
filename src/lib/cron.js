const {getNowMoment, getNowDate} = require('./moment');
const _ = require('lodash');

/**
 * @description 定时执行, 执行日期
 * @param date {String}
 * @return {Promise<void>}
 */
async function sleepDate(date) {
  const nowMoment = getNowMoment();
  const targetMoment = getNowMoment(date);
  if (nowMoment.isAfter(targetMoment)) return;
  const milliseconds = targetMoment.diff(nowMoment, 'millisecond');
  // 增加误差
  await require('util').promisify(setTimeout)(milliseconds + 10);
}

/**
 * @description 定时执行, 一般只用于当天
 * @param time {Array|Number} 时间
 * @return {Promise<undefined|*>}
 */
async function sleepTime(time) {
  const [hour, minute = 0, second = 0] = _.concat(time);
  const timeArray = [hour, minute, second].map(num => num > 9 ? num : '0' + num);
  return sleepDate(`${getNowDate()} ${timeArray.join(':')}`);
}

module.exports = {
  sleepTime,

  sleepDate,
};
