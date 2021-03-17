const Base = require('./index');
const exec = require('child_process').execSync;
const fs = require('fs');
const download = require('download');
const path = require('path');

const {getLocalEnvs} = require('../../lib/env');


const distPath = path.resolve(__dirname, '../../../dist');

class RemoteScript extends Base {
  static scriptName = 'RemoteScript';
  static fileDownloadUrl = '';
  static needFetchPatch = true;

  static getFileName() {
    return path.basename(this.fileDownloadUrl);
  }

  static async doMain(api) {
    const cookie = api.cookie;
    const self = this;

    const getDistFile = (fileName) => path.resolve(distPath, fileName || '');
    const fileBasePath = getDistFile(self.getFileName());

    if (!fs.existsSync(fileBasePath)) {
      // 下载最新代码
      await handleDownloadFile(self.fileDownloadUrl, self.getFileName());
    }

    const scriptPath = await handleWriteFile(self.currentCookieTimes, cookie);
    let proxyEnv;
    const localEnvs = getLocalEnvs();
    if (process.env.NODE_ENV !== 'production' && _.property('http_proxy')(localEnvs)) {
      proxyEnv = _.pick(localEnvs, ['NODE_TLS_REJECT_UNAUTHORIZED', 'http_proxy', 'https_proxy']);
    }
    await exec(`node ${scriptPath} >> ${getDistFile('result.txt')}`, proxyEnv ? {env: proxyEnv} : void 0);

    async function handleDownloadFile(url, filename) {
      await download(url, getDistFile(), {filename});
    }

    async function handleWriteFile(times, cookie) {
      let content = await fs.readFileSync(getDistFile(self.getFileName()), 'utf8');
      content = self.changeFileContentFn(content, cookie);

      if (self.needFetchPatch && cookie) {
        const bowerFetchPatch = await fs.readFileSync(getDistFile('bowerFetchPatch.js'), 'utf8');
        content = bowerFetchPatch.replace(/__COOKIE__/, cookie) + content;
      }

      const scriptPath = `${fileBasePath}_${times}.js`;
      await fs.writeFileSync(scriptPath, content, 'utf8');
      return scriptPath;
    }
  }

  // overload
  static changeFileContentFn(content, cookie) {
    return content;
  }
}

module.exports = RemoteScript;
