const RemoteScript = require('../base/remote');

class PetRemote extends RemoteScript {
  static fileDownloadUrl = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/liuxiaoyucc/jd-helper/master/pet/pet.js' : 'https://cdn.jsdelivr.net/gh/liuxiaoyucc/jd-helper@master/pet/pet.js';

  static changeFileContentFn(content) {
    return content.replace('MTAxODcxOTI2NTAwMDAwMDAwMDc4MDExNw==', '');
  }
}

module.exports = PetRemote;
