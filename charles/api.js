const fs = require('fs');
const path = require('path');

const _ = require('lodash');

function extractForm(sessions, keys) {
  const reqBody = sessions
  .map(o => o.request.body.text)
  .map(text => text.split('&')
  .filter(str => keys.includes(str.split('=')[0])));
  return reqBody.map(array => {
    // ['key=value']
    return _.fromPairs(array.map(str => str.split('=').map(decodeURIComponent)));
  });
  ;
}

const CHLSJ_PATH = path.resolve(__dirname, './chlsj');
const FORM_PATH = path.resolve(__dirname, './form');
const JD_CHLSJ_PATH = `${CHLSJ_PATH}/jd`;
const JD_FORM_PATH = `${FORM_PATH}/jd`;
const cashFormKeys = ['body', 'clientVersion', 'sign', 'st', 'sv', 'client', 'openudid'];
const cash = {
  functionIds: ['cash_homePage', 'cash_sign', 'cash_doTask'],
  cash_homePage: [],
  cash_sign: [],
  cash_doTask: [],
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
  functionIds: ['liveChannelReportDataV912'],
  liveChannelReportDataV912: [],
};
const smallBean = {
  functionIds: ['beanTaskList', 'beanDoTask'],
  beanTaskList: [],
  beanDoTask: [],
};
const formatForm = (key, object) => {
  const jsonPath = `${JD_FORM_PATH}/${key}.json`;
  const originDir = `${JD_CHLSJ_PATH}/${key}`;
  let result = [];
  let originResult = [];
  try {
    result = JSON.parse(fs.readFileSync(jsonPath));
  } catch (e) {
    // ignore
  }

  if (_.isEmpty(result) || fs.existsSync(originDir)) {
    try {
      originResult = _.flatten(fs.readdirSync(originDir).reverse().map(fileName => {
        return JSON.parse(fs.readFileSync(`${originDir}/${fileName}`));
      }));
      result = extractForm(originResult, cashFormKeys) || [];
    } catch (e) {
      // ignore
    }
  }
  object[key] = result;
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, JSON.stringify(result), {encoding: 'utf-8'});
  }
};

function init() {
  [
    cash,
    stall,
    discover,
    wish,
    statistics,
    live,
    smallBean,
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
  discover,
  wish,
  statistics,
  live,
  smallBean,
};
