/**
 * @description 本地更新远程仓库的 secrets
 */

const _ = require('lodash');
const {getProductEnv, updateProcessEnv, getEnv} = require('../lib/env');
const {Octokit} = require('@octokit/core');

async function main() {
  updateProcessEnv();

  const config = [
    getEnv('github_api_default_config'),
    /* 暂时不需要 */
    /*{
      owner: 'jinboyigu',
      repo: 'run_lazy_script',
    },*/
  ];

  const actionName = 'ACTION_ENV';
  const auth = getEnv('github_api_token');
  if (!auth) {
    console.log('请配置 github_api_token');
  }
  const MyOctokit = Octokit.defaults({auth});

  for (const options of config) {
    await updateProductActionEnv(options);
  }

  console.log(`${actionName} 更新成功`);

  async function updateProductActionEnv(defaultOption) {
    const octokit = new MyOctokit();
    const actionEnv = getProductEnv();
    if (_.isEmpty(actionEnv)) {
      return console.log('.env.product.json is empty');
    }
    return updateActionValue(actionName, JSON.stringify(actionEnv));

    async function updateActionValue(name, value) {
      console.log(`${name} value: `);
      console.log(value);
      const {key, key_id} = await request({route: 'GET /repos/{owner}/{repo}/actions/secrets/public-key'});
      const encryptedValue = encryptActionValue(value, key);
      return request({method: 'PUT'}, {
        key_id,
        secret_name: name,
        encrypted_value: encryptedValue,
      });
    }

    function request({route, method = 'GET'}, options = {}) {
      route = route || `${method} /repos/{owner}/{repo}/actions/secrets`;
      if (options['secret_name']) {
        route += '/{secret_name}';
      }

      return octokit.request(route, _.assign(defaultOption, options)).then(result => {
        console.log(result);
        return _.property('data')(result);
      });
    }
  }

  function encryptActionValue(value, key) {
    const sodium = require('tweetsodium');

    // key = 'base64-encoded-public-key';
    // value = 'plain-text-secret';

    // Convert the message and key to Uint8Array's (Buffer implements that interface)
    const messageBytes = Buffer.from(value);
    const keyBytes = Buffer.from(key, 'base64');

    // Encrypt using LibSodium.
    const encryptedBytes = sodium.seal(messageBytes, keyBytes);

    // Base64 the encrypted secret
    return Buffer.from(encryptedBytes).toString('base64');
  }
}

main();
