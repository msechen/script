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
  const _unwatch = () => {
    timer && clearTimeout(timer);
    timer = setTimeout(t.unwatch.bind(t), unwatchSeconds * 1000);
  };

  t.on('line', data => {
    lineCallback(data);
    unwatchSeconds && _unwatch();
  });

  return t;
};

module.exports = tail;
