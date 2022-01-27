const HealthTemplate = require('./Health');

const {sleep, writeFileJSON} = require('../../lib/common');

class HealthShare extends HealthTemplate {
  static scriptNameDesc = '健康社区-助力';
  static shareCodeTaskList = [];
  static time = 2;
  static commonParamFn = () => ({"taskId": 6, "channelId": 1});
}

module.exports = HealthShare;
