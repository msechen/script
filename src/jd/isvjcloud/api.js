const _ = require('lodash');

const {common} = require('../../../charles/api');

async function updateTokenCookies(api, loopTimes = 0) {
  return api.doUrl('https://lzkj-isv.isvjcloud.com/sign/sevenDay/signActivity', {
    resolveWithFullResponse: true,
    simple: false,
    method: 'GET',
    headers: {
      Cookie: '',
    },
    qs: {t: Math.random()},
  }).then(response => {
    //[
    //     'LZ_TOKEN_KEY=lztokenpage2a91c8b43fd048fc8b9cbe7745c82804; Max-Age=600; Expires=Wed, 02-Dec-2020 08:51:02 GMT; Path=/',
    //     'LZ_TOKEN_VALUE=B0oH3vDY2bhHWuKbVaJ+XQ==; Max-Age=600; Expires=Wed, 02-Dec-2020 08:51:02 GMT; Path=/'
    //   ],
    if (!response.headers['set-cookie']) {
      if (++loopTimes > 3) {
        return '';
      }
      return updateTokenCookies(api, loopTimes);
    }
    const tokenCookies = response.headers['set-cookie'].map(str => str.split(';')[0]);
    api.cookie = _.concat(tokenCookies).join('; ');
    return tokenCookies;
  });
}

async function generateToken(api) {
  return api.commonDo({
    form: common.isvObfuscator.find(o => o.body.match('lzkj-isv.isvjcloud.com')),
    qs: {
      functionId: 'isvObfuscator',
    },
  }).then(data => {
    if (data['code'] === '0') api.isvToken = data['token'];
  });
}

async function getSimpleActInfoVo(api, activityId) {
  const venderId = await api.doPath('customer/getSimpleActInfoVo', {
    activityId,
  }).then(data => _.property('data.venderId')(data));
  const pin = await api.doPath('customer/getMyPing', {
    userId: venderId,
    fromType: 'APP',
    token: api.isvToken,
  }).then(data => _.property('data.secretPin')(data));

  return {
    venderId, pin,
  };
}

module.exports = {
  updateTokenCookies,
  getSimpleActInfoVo,

  generateToken,
};
