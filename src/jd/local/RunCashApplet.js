
require('../../lib/env').updateProcessEnv();

async function main() {
  await require('../../api').doRun(require('../cash/applet'));
}

main();
