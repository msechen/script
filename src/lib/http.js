const http = require('http');

const requestAsync = options => new Promise((resolve, reject) => {
  const req = http.request(options, res => {
    let dataStr = '';
    res.on('data', chunk => {
      dataStr += chunk;
    }).on('end', () => {
      resolve(dataStr);
    });
  });

  req.on('error', (e) => {
    reject(e);
    console.error(e);
  });
  req.end();
});

function getFetch(options) {
  return fetch.bind(0, options);
}

function fetch(requestOptions = {}, url, options) {
  // TODO options
  console.log(`request url: ${url}`);
  const {hostname, pathname, search} = new URL(url);
  return requestAsync(Object.assign(requestOptions, {
    hostname,
    path: `${pathname}${search}`,
  })).then(dataStr => {
    let data = {};
    try {
      data = JSON.parse(dataStr);
    } catch (e) {
      console.error(e);
    }
    return {json: () => data};
  });
}

module.exports = {
  requestAsync,
  getFetch,
  fetch,
};
