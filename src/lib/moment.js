/**
 * @description 时间/时区相关操作
 */
const FORMAT_FULL_DATE = 'YYYY-MM-DD HH:mm:ss';

const moment = require('moment-timezone');

// 定义默认format
moment.defaultFormat = FORMAT_FULL_DATE;

// TODO 更改为 moment.tz.setDefault
const getMoment = (date = void 0, tz = 'Asia/Shanghai') => moment.tz(date, tz);
const getNowDate = (format = 'YYYY-MM-DD') => getMoment().format(format);
const getNowHour = () => getMoment().hour();
const getNowTime = getNowDate.bind(0, 'HH:mm:ss');
const getFullDate = getNowDate.bind(0, FORMAT_FULL_DATE);

function getNextHour(hours) {
  hours = _.sortBy(hours.map(hour => hour === 0 ? 24 : hour));
  const nowHour = getNowHour();
  let hour;
  for (let i = 0; i < hours.length; i++) {
    const prev = i - 1;
    if (prev < 0) continue;
    if (nowHour < hours[i] && nowHour >= (hours[prev] || 0)) {
      hour = hours[i];
      break;
    }
  }

  return hour;
}

module.exports = {
  getMoment,
  getNowDate,
  getNowHour,
  getNowTime,
  getFullDate,

  getNextHour,
};
