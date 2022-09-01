const _ = require('lodash');
const {getUrlDataFromFile} = require('../../lib/common');
const urlFile = require('path').resolve(__dirname, 'advertPlugin.url');
let urls = getUrlDataFromFile(urlFile);

// // 非12点抢的团(SK-11)
// urls = `
// https://prodev.m.jd.com/wq/active/4J8vT89TNgpwsKGCG4b6NH1NKEom/index.html?isMiniProgram=1&taskId=ZUxsfnm8y6ifNavE96ZdWDBjPk4&inviteId=Sv_h1QhgY81XeKR6b1A&activityId=3AtgviqSSkLEJJXyTjagE55yDF3U&cookie=%7B%22wxapp_type%22%3A%2214%22%7D
// `

const mainKey = 'activityId';
const urlList = _.filter(_.isString(urls) ? urls.split('\n') : urls);
let urlData = _.uniqBy(urlList.map(url => {
  const result = {};
  [mainKey, 'taskId'].forEach(key => {
    result[key] = new URL(url).searchParams.get(key);
  });
  return result;
}), mainKey);
urlData = _.filter(urlData, mainKey);
const debug = false;
if (debug) {
  console.log('url个数: ' + _.uniq(urlList).length);
  console.log('data个数: ' + _.uniq(urlData).length);
}

module.exports = urlData;
