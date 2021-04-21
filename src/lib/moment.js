/**
 * @description 时间/时区相关操作
 */

const moment = require('moment-timezone');

// TODO 更改为 moment.tz.setDefault
const getMoment = (date = void 0, tz = 'Asia/Shanghai') => moment.tz(date, tz);
const getNowDate = (format = 'YYYY-MM-DD') => getMoment().format(format);
const getNowHour = () => getMoment().hour();
const getNowTime = getNowDate.bind(0, 'HH:mm:ss');
const getFullDate = getNowDate.bind(0, 'YYYY-MM-DD HH:mm:ss');

module.exports = {
  getMoment,
  getNowDate,
  getNowHour,
  getNowTime,
  getFullDate,
};
