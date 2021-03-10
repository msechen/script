const Nian = require('./index');

const {sleep, writeFileJSON} = require('../../lib/common');

class NianApplet extends Nian {
  static scriptName = 'NianApplet';
  static scriptNameDesc = '打年兽(小程序)';

  static apiOptions = {
    signData: {
      body: {
        appSign: '2',
      },
    },
  };
}

module.exports = NianApplet;
