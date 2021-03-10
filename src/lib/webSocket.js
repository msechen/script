const _ = require('lodash');
const WebSocket = require('ws');
const HttpsProxyAgent = require('https-proxy-agent');

function init(address, options = {}) {
  const httpsProxy = process.env.https_proxy;
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
