const vm = require('vm');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {replaceObjectMethod} = require('./common');

// js存储
const cacheJsContent = {};

/**
 * @description 加密专用
 */
class FakerSmashUtils {
  constructor(api, indexUrl, data = {}) {
    this.api = api;
    this.indexUrl = indexUrl;
    const {userAgent, smashInitData, scriptUrl, patchJSContentFn, patchRunFn} = data;
    this.userAgent = userAgent || '';
    this.smashInitData = smashInitData || {};
    this.scriptUrl = scriptUrl || '';
    this.patchJSContentFn = patchJSContentFn;
    this.patchRunFn = patchRunFn;
  }

  async init() {
    const doRun = async scriptUrl => {
      if (!scriptUrl) return;
      const jsContent = await this.getJSContent(path.basename(scriptUrl), scriptUrl);
      const ctx = {
        window: {addEventListener: _.noop},
        document: {
          addEventListener: _.noop,
          removeEventListener: _.noop,
          cookie: '',
        },
        navigator: {userAgent: this.userAgent || ''},
      };

      vm.createContext(ctx);
      vm.runInContext(jsContent, ctx);

      this.smashUtils = ctx.window.smashUtils;
      this.smashUtils.init(this.smashInitData);
    };
    if (this.scriptUrl) {
      return doRun(this.scriptUrl);
    }
    const scriptReg = /<script src="([^><]+\/(main\.\w+\.js))\?t=\d+">/gm;
    const html = await this.httpGet(this.indexUrl);
    const script = scriptReg.exec(html);
    if (script) {
      const [, scriptUrl, filename] = script;
      return doRun(scriptUrl);
    }
  }

  async getJSContent(cacheKey, url) {
    if (cacheJsContent[cacheKey]) return cacheJsContent[cacheKey];

    let jsContent = await this.httpGet(url);
    if (this.patchJSContentFn) {
      return (cacheJsContent[cacheKey] = this.patchJSContentFn(jsContent));
    }

    const entryReg = /^(.*?\.push\(\[)(\d+,\d+)/;
    const moduleKey = 'get_risk_result:';
    const findEntry = entryReg.test(jsContent);
    const ctx = {
      moduleIndex: 0,
    };
    const injectCode = `moduleIndex=arguments[0].findIndex(s=>s&&s.toString().indexOf('${moduleKey}')>0);return;`;
    const injectedContent = jsContent.replace(/^(!function\(\w\){)/, `$1${injectCode}`);

    vm.createContext(ctx);
    vm.runInContext(injectedContent, ctx);

    if (!(ctx.moduleIndex && findEntry)) {
      throw new Error('Module not found.');
    }
    jsContent = jsContent.replace(entryReg, `$1${ctx.moduleIndex},1`);
    // Fix device info (actually insecure, make less sense)
    jsContent = jsContent.replace(/\w+\.getDefaultArr\(7\)/, '["a","a","a","a","a","a","1"]');
    cacheJsContent[cacheKey] = jsContent;
    // fs.writeFile(cacheKey, jsContent);
    return jsContent;
  }

  async run(id, data = {}) {
    if (!this.smashUtils) {
      await this.init();
    }
    if (this.patchRunFn) {
      return this.patchRunFn(this.smashUtils, data);
    }

    const random = Math.floor(1e+6 * Math.random()).toString().padEnd(6, '8');
    const {log} = this.smashUtils.get_risk_result({
      id,
      data: {
        ...data,
        pin: this.api.getPin(),
        random,
      },
    });
    return {
      ...data,
      random,
      extraData: {log, sceneid: this.smashInitData.sceneid},
    };
  }

  // 直接替换api对应方法
  patchApi(needEncryptIds) {
    if (_.isEmpty(needEncryptIds)) return;
    replaceObjectMethod(this.api, 'doFormBody', async args => {
      const [functionId, body, ...others] = args;
      const id = needEncryptIds.find(str => functionId.match(str));
      if (id) {
        return [functionId, await this.run(id, body), ...others];
      }
      return args;
    });
  }

  async httpGet(uri) {
    !/^http(s)+/.test(uri) && (uri = `https:${uri}`);
    return this.api.commonDo({
      uri,
      headers: {
        cookie: '',
      },
      method: 'GET',
    });
  }
}

module.exports = FakerSmashUtils;
