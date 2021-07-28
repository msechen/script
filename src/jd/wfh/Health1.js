const HealthTemplate = require('./Health');

const {sleep, writeFileJSON} = require('../../lib/common');

class Health1 extends HealthTemplate {
  static scriptNameDesc = '健康社区-新版本';
  static needInAppComplete = true;
}

module.exports = Health1;
