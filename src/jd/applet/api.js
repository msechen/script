const _ = require('lodash');

async function updateTokenCookies(api) {
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
    const tokenCookies = response.headers['set-cookie'].map(str => str.split(';')[0]);
    api.cookie = _.concat(api.cookie, tokenCookies).join('; ');
    return tokenCookies;
  });
}

async function getSimpleActInfoVo(api, activityId) {
  const shopId = await api.doPath('customer/getSimpleActInfoVo', {
    activityId,
  }).then(data => _.property('data.shopId')(data));
  const pin = await api.doPath('customer/getMyPing', {
    userId: shopId,
    fromType: 'WeChat',
    token: api.cookie.split(';')[0].split('=')[1],
  }).then(data => _.property('data.secretPin')(data));

  return {
    shopId, pin,
  };
}

module.exports = {
  updateTokenCookies,
  getSimpleActInfoVo,
};
