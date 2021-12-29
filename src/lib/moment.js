/**
 * @description 时间/时区相关操作
 */
const FORMAT_FULL_DATE = 'YYYY-MM-DD HH:mm:ss';

const moment = require('moment-timezone');

// 定义默认format
moment.defaultFormat = FORMAT_FULL_DATE;

// TODO 更改为 moment.tz.setDefault
const getMoment = (date = void 0, tz = 'Asia/Shanghai') => moment.tz(date, tz);
const getOnlyHourMoment = (hour = 0) => getMoment().hour(hour).minute(0).second(0).millisecond(0);
const getNowDate = (format = 'YYYY-MM-DD') => getMoment().format(format);
const getNowHour = () => getMoment().hour();
const getNowTime = getNowDate.bind(0, 'HH:mm:ss');
const getFullDate = getNowDate.bind(0, FORMAT_FULL_DATE);
const fillInTwo = number => number < 10 ? `0${number}` : `${number}`;
const parseHour = str => str ? +/(\d*)/.exec(str)[0] : str;

function getNextHour(hours, targetMinute = 0, loop = true) {
  const joinTime = (...arg) => arg.map(fillInTwo).join(':');
  const nowMinute = getMoment().minute();
  hours.includes(0) && hours.push(24);
  const nowHour = getNowHour();
  const nowTime = joinTime(nowHour, nowMinute);
  const timeArray = _.uniq([nowTime, ...hours.map(hour => joinTime(hour, targetMinute))]).sort();
  const index = timeArray.findIndex(v => v === nowTime);
  return parseHour(timeArray[index + 1] || (loop ? timeArray[0] : void 0));
}

module.exports = {
  getMoment,
  getOnlyHourMoment,
  getNowDate,
  getNowHour,
  getNowTime,
  getFullDate,

  getNextHour,
};
