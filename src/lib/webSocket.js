const _ = require('lodash');
const WebSocket = require('ws');
const HttpsProxyAgent = require('https-proxy-agent');

const httpsProxy = process.env.https_proxy;

function init(address, options = {}) {
  if (httpsProxy) {
    const httpsProxyUrl = new URL(httpsProxy);
    let agent = new HttpsProxyAgent(_.assign({host: httpsProxyUrl.hostname}, _.pick(httpsProxyUrl, ['protocol', 'port'])));
    options = _.merge({agent}, options);
  }

  return new WebSocket(address, options);
}

module.exports = {
  init,
};
