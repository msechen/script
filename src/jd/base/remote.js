const Base = require('./index');
const {exec} = require('child_process');
const fs = require('fs');
const download = require('download');
const path = require('path');

const {initEnv} = require('../../lib/env');
const {doPolling} = require('../../lib/cron');
const {sleep} = require('../../lib/common');

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
    const remoteFileExist = () => fs.existsSync(fileBasePath);

    !remoteFileExist() && await doPolling({
      beforePollFn: () => handleDownloadFile(self.fileDownloadUrl, self.getFileName()),
      stopFn: () => {
        const isExist = remoteFileExist();
        if (isExist) console.log(`${self.getFileName()} 下载完成`);
        return isExist;
      },
      totalTime: 30 * 4,
    });

    const scriptPath = await handleWriteFile(self.currentCookieTimes, cookie);
    let proxyEnv;
    const env = initEnv() || {};
    if ('http_proxy' in env) {
      proxyEnv = _.pick(env, ['NODE_TLS_REJECT_UNAUTHORIZED', 'http_proxy', 'https_proxy']);
    }
    // 异步执行, 避免有异常
    exec(`node ${scriptPath} >> ${getDistFile('result.txt')}`, proxyEnv ? {env: proxyEnv} : void 0);
    await sleep(30);

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
