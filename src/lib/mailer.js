/**
 * 邮件通知
 */

const _ = require('lodash');
const nodemailer = require('nodemailer');
const {getEnv, updateProductEnv} = require('./env');
const {getMoment} = require('./moment');
const {readFileJSON, writeFileJSON} = require('./common');
const Imap = require('imap');
const utf8 = require('utf8');
const quotedPrintable = require('quoted-printable');
const {inspect, promisify} = require('util');

const getTransportOption = () => getEnv('MAILER_TRANSPORTER_OPTION');
const getUser = () => _.property('auth.user')(getTransportOption());
const disabledSend = () => !getUser();
const getImapOption = () => getEnv('MAILER_IMAP_OPTION');

function createTransport(option = {}) {
  if (disabledSend()) return;
  _.merge(option, {
    port: 465,
    secure: true,
  }, getTransportOption());
  return nodemailer.createTransport(option);
}

function send(option) {
  const transport = createTransport();
  if (!transport) return;
  const from = getUser();
  return transport.sendMail(_.defaults(option, {from, to: from})).then(result => {
    console.log('邮件发送成功');
    return result;
  }).catch(error => {
    console.log(error);
    console.log('邮件发送失败');
  });
}

const search = promisify(_search);
const searchSeen = options => search({seen: true, ...options});
const searchSeenAndDel = options => searchSeen({realDelFn: (message, isSeen) => isSeen, ...options});

function _search({subject, since, seen, realDelFn = _.noop}, callback) {
  const imapOption = getImapOption();
  if (!imapOption) return;
  // 默认不开启debug模式
  const debug = false;
  if (debug) {
    imapOption.debug = output => console.log(`[IMAP DEBUG] ${output}`);
  }
  const imap = new Imap(imapOption);
  const _call = (path, ...options) => promisify(_.get(imap, path).bind(imap))(...options);
  imap.once('ready', async () => {
    await _call('id', {name: `custom_${getMoment().valueOf()}`});
    const boxInfo = await _call('openBox', 'INBOX', false);
    if (!boxInfo) {
      throw boxInfo;
    }
    const searchParams = [['HEADER', 'SUBJECT', subject]];
    since && searchParams.push(['SINCE', since]);
    /**
     * @type {Array}
     */
    let searchResult = [] || await _call('search', searchParams);
    if (_.isEmpty(searchResult)) {
      searchParams[0] = 'ALL';
      searchResult = await _call('search', searchParams);
    }
    if (_.isEmpty(searchResult)) {
      imap.end();
      throw new Error('node imap search failed');
    }
    const messages = await promisify(fetchMessage)(searchResult.reverse());
    const messageList = messages.filter(o => o.subject[0] === subject);
    let isSeen;
    for (const message of messageList) {
      isSeen = _.get(message, 'attrs.flags', []).includes('\\Seen');

      if (realDelFn(message, isSeen)) {
        const {subject, attrs: {uid}} = message;
        await _call('addFlags', uid, ['\\Deleted']).then(() => {
          console.log(`邮件删除成功(uid: ${uid}, subject: ${subject[0]})`);
        });
      }
    }


    imap.end();
    callback(void 0, seen ? isSeen : messageList);

    /**
     *
     * @param msgIds {Array}
     * @param callback {Function}
     * @return {Promise<Array>}
     */
    function fetchMessage(msgIds, callback) {
      const result = [];
      const f = imap.fetch(msgIds, {
        bodies: ['HEADER.FIELDS (FROM TO SUBJECT)', 'TEXT'],
        struct: true,
      });
      f.on('message', function (msg, seqNo) {
        debug && console.log('Message #%d', seqNo);
        const prefix = '(#' + seqNo + ') ';
        let msgInfo = {};
        msg.on('body', function (stream, info) {
          debug && console.log(prefix, inspect(info));
          debug && console.log(prefix + 'Body');
          let buffer = '';
          stream.on('data', chunk => {
            buffer += chunk.toString();
          });
          stream.once('end', function () {
            if (info.which === 'TEXT') {
              const data = buffer.toString();
              _.assign(msgInfo, {text: data});
              if (debug) {
                console.log(prefix + 'Body [%s] Finished', inspect(info.which));
                console.log('\n\n\n\n' + data + '\n\n\n\n\n\n');
              }
            } else {
              const parseHeader = Imap.parseHeader(buffer);
              _.assign(msgInfo, parseHeader);
              debug && console.log(prefix + 'Parsed header: %s', inspect(parseHeader));
            }
          });
        });
        msg.once('attributes', function (attrs) {
          _.assign(msgInfo, {attrs});
          debug && console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', function () {
          result.push(msgInfo);
          debug && console.log(prefix + 'Finished');
        });
      });
      f.once('error', function (err) {
        callback(void 0, result);
        debug && console.log('Fetch error: ' + err);
      });
      f.once('end', function () {
        callback(void 0, result);
        debug && console.log('Done fetching all messages!');
      });
    }
  });

  imap.once('error', function (err) {
    debug && console.log(err);
  });

  imap.once('end', function () {
    debug && console.log('Connection ended');
  });

  imap.connect();
}

const newEnvSubject = 'lazy_script_new_env';

/**
 * @description 将新的 env 发送到邮件, 本地更新采用 merge 模式, 所以需要保证数据源完整性(Array不需要更改的数据也要留好位置)
 * @example {"JD_COOKIE_OPTION":[{},{},{},{"cookies":{"wq_skey":"test"}}]}
 */
function sendNewEnv() {
  const newEnvPath = require('path').resolve(__dirname, '../../.env.new.json');
  const content = readFileJSON(newEnvPath);
  if (_.isEmpty(content)) return console.log('无需更新内容');
  send({
    subject: `${newEnvSubject}_${getMoment().format('YYYY-MM-DD')}`,
    text: JSON.stringify(content),
  }).then(() => {
    writeFileJSON({}, newEnvPath);
  });
}

function decodeMailText(text) {
  try {
    text = utf8.decode(quotedPrintable.decode(text));
  } catch (e) {}
  return text;
}

/**
 * @description 获取邮件信息更新本地 env
 */
async function updateEnvFromMail(day = 2) {
  const nowMoment = getMoment();
  const getNewEnvs = () => search({
    subject: `${newEnvSubject}_${nowMoment.format('YYYY-MM-DD')}`,
  }).then(messages => messages.map(o => {
    let text;
    try {
      text = JSON.parse(decodeMailText(o.text.trim()));
    } catch (e) {}
    return text;
  }));
  const allNewEnvs = [];
  for (let i = 0; i < day; i++) {
    const newEnvs = await getNewEnvs();
    allNewEnvs.unshift(...newEnvs);
    nowMoment.subtract(1, 'day');
  }
  if (_.isEmpty(allNewEnvs)) return;
  allNewEnvs.unshift({});
  const newEnv = _.merge(...allNewEnvs);
  console.log(`开始从邮件内容中更新 new env`);
  console.log(JSON.stringify(newEnv));
  updateProductEnv(newEnv, false, true);
}


module.exports = {
  disabledSend,
  disabledImap: () => !getImapOption(),
  send,
  sendNewEnv,
  updateEnvFromMail,
  search,
  searchSeen,
  searchSeenAndDel,
};
