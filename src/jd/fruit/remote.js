const RemoteScript = require('../base/remote');

class FruitRemote extends RemoteScript {
  static fileDownloadUrl = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/liuxiaoyucc/jd-helper/master/fruit/fruit.js' : 'https://cdn.jsdelivr.net/gh/liuxiaoyucc/jd-helper@master/fruit/fruit.js';

  static changeFileContentFn(content) {
    return content.replace('121ada81cdfd4085b07d1ce871ded341', '');
  }
}

module.exports = FruitRemote;
