/**
 *
 * @description 对 userAgent 进行拆分
 *
 */

const getAgentValue = str => str.substring(str.indexOf('/') + 1);
const getAgentArray = str => str.split(';');

class UserAgent {
  constructor(userAgent) {
    const [appName, osName, appVersion, osVersion, uuid, ...others] = getAgentArray(userAgent);
    this.originUserAgent = userAgent;
    this.appName = appName;
    this.osName = osName;
    this.appVersion = appVersion;
    this.osVersion = osVersion;
    this.uuid = uuid;
    this.model = this.getAgentByKey('model');
    this.appBuild = this.getAgentByKey('appBuild');
  }

  getAgentByKey(key, userAgent = this.originUserAgent) {
    return getAgentValue(getAgentArray(userAgent).find(str => str.startsWith(key)));
  }
}

module.exports = UserAgent;
