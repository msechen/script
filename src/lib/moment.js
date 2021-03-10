/**
 * @description 时间/时区相关操作
 */

const moment = require('moment-timezone');

const getNowMoment = (date = void 0, tz = 'Asia/Shanghai') => moment.tz(date, tz);
const getNowDate = (format = 'YYYY-MM-DD') => getNowMoment().format(format);
const getNowHour = () => getNowMoment().hour();
const getNowTime = getNowDate.bind(0, 'HH:mm:ss');


module.exports = {
  getNowMoment,
  getNowDate,
  getNowTime,
  getNowHour,
};
