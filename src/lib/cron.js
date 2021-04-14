const {getMoment, getNowDate} = require('./moment');
const _ = require('lodash');

/**
 * @description 定时执行, 执行日期
 * @param date {String|Array}
 * @return {Promise<void>}
 */
async function sleepDate(date) {
  const milliseconds = diffFromNow(date);
  // 程序运行中自带误差, 无需自增
  await require('util').promisify(setTimeout)(milliseconds);
}

/**
 * @description 定时执行, 一般只用于当天
 * @param time {Array|Number} 时间
 * @return {Promise<undefined|*>}
 */
async function sleepTime(time) {
  return sleepDate(timeToDate(time));
}

/**
 *
 * @param time {Array|Number} 时间, eg: [hour]|hour
 * @return {Array|String}
 */
function timeToDate(time) {
  if (_.isString(time)) return time;

  const timeArray = _.concat(time);
  if (timeArray.length === 6) return timeArray;
  const [hour, minute = 0, second = 0] = timeArray;
  const [year, month, day] = getMoment().toArray();
  let result = [];
  if (timeArray.length <= 5) {
    result.push(year);
  }
  if (timeArray.length <= 4) {
    result.push(month);
  }
  if (timeArray.length <= 3) {
    result.push(day);
  }
  return result.concat(hour, minute, second);
}

/**
 * @description 比较时间
 * @param time 时间
 * @return 毫秒 {number}
 */
function diffFromNow(time) {
  const nowMoment = getMoment();
  const targetMoment = getMoment(timeToDate(time));
  if (nowMoment.isAfter(targetMoment)) return 0;
  return targetMoment.diff(nowMoment, 'millisecond');
}

module.exports = {
  sleepTime,
  diffFromNow,

  sleepDate,
};
