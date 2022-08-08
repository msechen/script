const {getMoment, getNowDate, isMoment} = require('./moment');
const {sleep} = require('./common');
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
 * @param target 时间
 * @return 毫秒 {number}
 */
function diffFromNow(target) {
  const nowMoment = getMoment();
  const targetMoment = isMoment(target) ? target : getMoment(target);
  if (nowMoment.isAfter(targetMoment)) return 0;
  return targetMoment.diff(nowMoment, 'millisecond');
}

async function doPolling({
  beforePollFn = _.noop,
  stopFn,
  onceSleepTime = 30,
  totalTime = -1,
}) {
  let stop = false;
  const noLoopTime = totalTime === -1;
  const isStop = () => stop === true;
  const doPromise = beforePollFn();
  if (doPromise.then) {
    doPromise.then(() => {
      stop = true;
    });
  }
  await _poll();

  async function _poll() {
    if (!noLoopTime && totalTime <= 0) return;
    stopFn && (stop = stopFn());
    if (isStop()) return;
    const secondArray = [totalTime, onceSleepTime];
    const seconds = noLoopTime ? onceSleepTime : _.min(secondArray);
    await sleep(seconds);
    if (noLoopTime) return _poll();
    totalTime = _.subtract(...secondArray);
    return _poll();
  }
}

module.exports = {
  sleepTime,
  diffFromNow,

  sleepDate,
  doPolling,
};
