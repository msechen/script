const HealthTemplate = require('./Health');

const {sleep, writeFileJSON} = require('../../lib/common');

class HealthSign extends HealthTemplate {
  static times = 1;
  static commonParamFn = () => ({"taskId": 16, "channelId": 1});
}

module.exports = HealthSign;
