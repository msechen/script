const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const Fruit = require('./index');

class FruitDoShare extends Fruit {
  static scriptNameDesc = '东东农场(纯助力)';

  static async doMain(api) {
    const shareCodes = [];
    await this.handleDoShare(api, shareCodes);
  }
}

singleRun(FruitDoShare).then();

module.exports = FruitDoShare;
