/**
 * @description 将旧的Cookie str序列为新的Cookie Object
 */

const Cookie = require('../lib/cookie');
const {updateProcessEnv, getEnvList, getEnv, getProductEnv, updateProductEnv} = require('../lib/env');
const _ = require('lodash');

function main() {
  updateProcessEnv();
  const cookieStrList = getEnvList('JD_COOKIE');
  const targetKey = 'JD_COOKIE_OPTION';
  const fileData = getProductEnv();
  if (fileData[targetKey]) {
    console.log(`文件中有 ${targetKey}, 请备份后再执行`);
    return;
  }

  const result = cookieStrList.map((str, index) => {
    const cookie = new Cookie(str);
    const earnCookie = new Cookie(getEnv('JD_EARN_COOKIE', index));
    return {
      cookies: {
        'wskey': '',
        ...cookie.toObject(),
        ...earnCookie.toObject(),
      },
      expire: {
        pt_key: '',
      },
    };
  });
  console.log(result);
  updateProductEnv({[targetKey]: result}, false);
  console.log('更新成功');
}

main();
