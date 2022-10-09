/**
 * @description 重新执行 push env to local action
 */

const _ = require('lodash');
const {getProductEnv, updateProcessEnv, getEnv} = require('../lib/env');
const {Octokit} = require('@octokit/core');

async function main() {
  updateProcessEnv();

  const auth = getEnv('github_api_token');
  if (!auth) {
    console.log('请配置 github_api_token');
    return;
  }
  const runId = getEnv('github_push_env_run_id');
  if (!runId) {
    console.log('请配置 github_push_env_run_id');
    return;
  }
  const MyOctokit = Octokit.defaults({auth});
  const octokit = new MyOctokit();

  await octokit.request('POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun', {
    ...getEnv('github_api_default_config'),
    run_id: runId,
  }).then(result => {
    if (_.get(result, 'status') === 201) {
      console.log(`action[${runId}] re-run succeed`);
    } else {
      console.log(result);
    }
  });
}

main();
