let navigator = {userAgent: 'jdapp'};
global.window = {
  location: {
    href: '',
    search: '',
  },
  screen: {
    width: 0,
    heigth: 0,
  },
  navigator,
  addEventListener: () => {},
};
global.document = {
  addEventListener: () => {},
  getElementsByTagName: () => [{}],
  createElement: () => ({}),
};

function ActiveXObject() {}

function Promise() {}

function setTimeout() {}

function setInterval() {}

const console = {
  log() {},
  error() {},
};

try {
  webScript();
} catch (e) {
}

function webScript() {
  // 替换script标识
  2222;
}

// 给外部引用
global.smashUtils = window.smashUtils;
