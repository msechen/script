/**
 * 邮件通知
 */

const _ = require('lodash');
const nodemailer = require('nodemailer');
const {getEnv} = require('./env');
const {getMoment} = require('./moment');
const Imap = require('imap');
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
    const message = messages.find(o => o.subject[0] === subject);

    const isSeen = _.get(message, 'attrs.flags', []).includes('\\Seen');

    if (message && realDelFn(message, isSeen)) {
      const {subject, attrs: {uid}} = message;
      await _call('addFlags', uid, ['\\Deleted']).then(() => {
        console.log(`邮件删除成功(uid: ${uid}, subject: ${subject[0]})`);
      });
    }

    imap.end();
    callback(void 0, seen ? isSeen : message);

    /**
     *
     * @param msgIds {Array}
     * @param callback {Function}
     * @return {Promise<Array>}
     */
    function fetchMessage(msgIds, callback) {
      const result = [];
      const f = imap.fetch(msgIds, {
        bodies: 'HEADER.FIELDS (FROM TO SUBJECT)',
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
            const parseHeader = Imap.parseHeader(buffer);
            _.assign(msgInfo, parseHeader);
            debug && console.log(prefix + 'Parsed header: %s', inspect(parseHeader));
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


module.exports = {
  disabledSend,
  disabledImap: () => !getImapOption(),
  send,
  search,
  searchSeen,
  searchSeenAndDel,
};
