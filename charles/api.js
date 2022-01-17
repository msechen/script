const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

const _ = require('lodash');

function extractForm(sessions, keys) {
  return sessions
  .map(o => _.property('request.body.text')(o) || '').filter(o => o)
  .map(text => {
    let array = [];
    for (const [key, value] of new URL(`http://test?${text}`).searchParams.entries()) {
      keys.includes(key) && array.push([key, value]);
    }
    return _.fromPairs(array);
  });
}

const gitIgnoreFiles = [
  'stall_collectScore',
  'liveActivityV946',
  'zoo_collectProduceScore',
  'olympicgames_doTaskDetail',
];

const CHLSJ_PATH = path.resolve(__dirname, './chlsj');
const FORM_PATH = path.resolve(__dirname, './form');
const JD_CHLSJ_PATH = `${CHLSJ_PATH}/jd`;
const JD_FORM_PATH = `${FORM_PATH}/jd`;
const cashFormKeys = ['body', 'clientVersion', 'sign', 'st', 'sv', 'client', 'openudid', 'ef', 'ep'];
const cash = {
  functionIds: ['cash_homePage', 'cash_sign', 'cash_doTask', 'cash_getRedPacket'],
  cash_homePage: [],
  cash_sign: [],
  cash_doTask: [],
  cash_getRedPacket: [],
};
const zoo = {
  functionIds: ['zoo_collectProduceScore'],
  zoo_collectProduceScore: [],
};
const stall = {
  functionIds: ['stall_collectScore'],
  stall_collectScore: [],
};
const discover = {
  functionIds: ['discTaskList', 'discAcceptTask', 'discDoTask', 'discReceiveTaskAward'],
  discTaskList: [],
  discAcceptTask: [],
  discDoTask: [],
  discReceiveTaskAward: [],
};
const wish = {
  functionIds: ['wishContent'],
  wishContent: [],
};
const statistics = {
  functionIds: ['getJingBeanBalanceDetail'],
  getJingBeanBalanceDetail: [],
};
const live = {
  functionIds: ['liveChannelReportDataV912', 'liveActivityV946'],
  liveChannelReportDataV912: [],
  liveActivityV946: [],
};
const common = {
  functionIds: ['genToken', 'isvObfuscator'],
  genToken: [],
  isvObfuscator: [],
};
const smallBean = {
  functionIds: ['beanTaskList', 'beanDoTask'],
  beanTaskList: [],
  beanDoTask: [],
};
const necklace = {
  functionIds: ['reportCcTask', 'getCcTaskList', 'receiveNecklaceCoupon', 'ccSignInNecklace', 'getCcFeedInfo'],
  reportCcTask: [],
  getCcTaskList: [],
  receiveNecklaceCoupon: [],
  ccSignInNecklace: [],
  getCcFeedInfo: [],
};
const olympicgames = {
  functionIds: ['olympicgames_doTaskDetail'],
  olympicgames_doTaskDetail: [],
};
const formatForm = (key, object) => {
  const jsonPath = `${JD_FORM_PATH}/${key}.json`;
  const originDir = `${JD_CHLSJ_PATH}/${key}`;
  let result = [];
  let originResult = [];
  // 不提交的话就以本地的数据源为准
  const isGitIgnore = gitIgnoreFiles.some(functionId => jsonPath.match(functionId));
  try {
    !isGitIgnore && (result = JSON.parse(fs.readFileSync(jsonPath)));
  } catch (e) {
    // ignore
  }

  if (_.isEmpty(result) || fs.existsSync(originDir)) {
    try {
      originResult = _.flatten(fs.readdirSync(originDir).reverse().map(fileName => {
        return JSON.parse(fs.readFileSync(`${originDir}/${fileName}`));
      }));
      const keys = _.concat(cashFormKeys);
      if (['getCcFeedInfo'].includes(key)) {
        keys.push('uuid');
      }
      (extractForm(originResult, keys) || []).forEach(form => {
        if (!result.map(o => o.body).includes(form.body)) {
          result.push(form);
        }
      });
    } catch (e) {
      // ignore
    }
  }
  object[key] = result;

  fs.writeFileSync(jsonPath, JSON.stringify(result), {encoding: 'utf-8'});
  if (isGitIgnore || 1/*按需执行*/) return;
  // 新增的json文件需要进行提交
  exec(`git add ${jsonPath}`);
};

function init() {
  [
    cash,
    stall,
    zoo,
    discover,
    wish,
    statistics,
    live,
    smallBean,
    common,
    necklace,
    olympicgames,
  ].forEach(o => {
    o.functionIds.forEach(key => {
      formatForm(key, o);
    });
  });
}

init();

module.exports = {
  cash,
  stall,
  zoo,
  discover,
  wish,
  statistics,
  live,
  smallBean,
  common,
  necklace,
  olympicgames,
};
