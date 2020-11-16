const Tail = require('tail').Tail;
const _ = require('lodash');

const tail = (filePath, options = {}) => {
  const {
    unwatchSeconds = 30,
    lineCallback = console.log,
  } = options;

  const t = new Tail(filePath, _.assign({
    logger: console,
  }, options));

  let timer = null;
  const _unwatch = (seconds = unwatchSeconds) => {
    if (!seconds) return;
    timer && clearTimeout(timer);
    timer = setTimeout(t.unwatch.bind(t), seconds * 1000);
  };

  t.on('line', data => {
    lineCallback(data);
    _unwatch();
  });

  _unwatch(unwatchSeconds * 2);

  return t;
};

module.exports = tail;
