/**
 * 邮件通知
 */

const _ = require('lodash');
const nodemailer = require('nodemailer');
const {getEnv} = require('./env');

const transportOption = getEnv('MAILER_TRANSPORTER_OPTION');

const user = _.property('auth.user')(transportOption);
const disabled = !user;

function createTransport(option = {}) {
  if (disabled) return;
  _.merge(option, {
    port: 465,
    secure: true,
  }, transportOption);
  return nodemailer.createTransport(option);
}

function send(option) {
  const transport = createTransport();
  if (!transport) return;
  return transport.sendMail(_.defaults(option, {
    from: user,
    to: user,
  })).then(result => {
    console.log('邮件发送成功');
    return result;
  }).catch(error => {
    console.log(error);
    console.log('邮件发送失败');
  });
}

module.exports = {
  disabled,
  send,
};
