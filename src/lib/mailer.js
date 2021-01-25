/**
 * 邮件通知
 */

const _ = require('lodash');
const nodemailer = require('nodemailer');

let transportOption;
try {
  // {"auth":{"user":"user","pass":"pass"},"host":"host"}
  transportOption = JSON.parse(process.env.MAILER_TRANSPORTER_OPTION);
} catch {
}

const user = _.property('auth.user')(transportOption);

function createTransport(option = {}) {
  if (!user) return;
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
  send,
};
