const $ = new Env('抽奖机');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [];
const activityList = [
    {'appId': '1FFRWwqg', 'endTime': 1636646399000,'name':'心动电波'},//
    {'appId': '1FFRWxaY', 'endTime': 1636603133000,'name':'送你超能力'},//京东APP--》玩一玩---》送你超能力
    {'appId': '1FV1VwKc', 'endTime': 1636819200000,'name':'惊喜大作战'},//京东APP--》玩一玩---》惊喜大作战
    {'appId': '1E1NXxq0', 'endTime': 1641002400000,'name':'众筹许愿池'},//京东APP--》京东众筹---》众筹许愿池
    {'appId': '1EFRQwA', 'endTime': 1704038400000,'name':'疯狂砸金蛋'},//京东APP--》每日特价---》疯狂砸金蛋
    {'appId': '1EFRRxA', 'endTime': 1704038400000,'name':'闪购盲盒'},
    {'appId': '1EFRXxg', 'endTime': 1672415999000,'name':'闪购盲盒N'},//京东APP--》品牌闪购---》右下闪购盲盒
    {'appId': '1E1xZy6s', 'endTime': 1661356799000,'name':'PLUS生活特权'},//京东APP--》PLUS会员--》生活特权---》天天赚京豆（https://h5.m.jd.com/babelDiy/Zeus/6Z5oyrCaX6U7cZw8eNKABiYKKXx/index.html）
];
let inviteInfo = {};
let loginInfo = {};
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [
    $.getdata("CookieJD"),
    $.getdata("CookieJD2"),
    ...$.toObj($.getdata("CookiesJD") || "[]").map((item) => item.cookie)].filter((item) => !!item);
}
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    $.ua = `jdapp;iPhone;10.1.0;14.6;${(false,40,40)};network/wifi;JDEbook/openapp.jdreader;model/iPhone9,2;addressid/2214222593;appBuild/164324;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E456;supportJDSHWK/1`;
    $.index = i + 1;
    $.cookie = cookiesArr[i];
    $.oldcookie = cookiesArr[i];
    $.isLogin = true;
    $.nickName = '';
    $.UserName = decodeURIComponent($.cookie.match(/pt_pin=([^; ]+)(?=;?)/) && $.cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    await TotalBean();
    console.log(`\n*****开始【京东账号${$.index}】${$.nickName || $.UserName}*****\n`);
    loginInfo[$.UserName] = $.isLogin;
    if (!$.isLogin) {
      $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
      if ($.isNode()) {
        await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
      }
      continue
    }
    for (let j = 0; j < activityList.length; j++) {
      $.activityInfo = activityList[j];
      $.appId = $.activityInfo.appId;
      if(!inviteInfo[$.appId]){
        inviteInfo[$.appId] = [];
      }
      console.log(`活动ID：${$.appId}，${$.activityInfo.name}`)
      if ($.activityInfo.endTime && Date.now() > $.activityInfo.endTime) {
        console.log(`活动已结束\n`);
        continue;
      }
      await main();
      await $.wait(1000);
      console.log('\n')
    }
  }
  console.log(JSON.stringify(inviteInfo));
  console.log(`\n================================================开始脚本内互助================================================\n`);
  cookiesArr = getRandomArrayElements(cookiesArr,cookiesArr.length);
  for (let i = 0; i < cookiesArr.length; i++) {
    $.ua = `jdapp;iPhone;10.1.0;14.6;${randomWord(false,40,40)};network/wifi;JDEbook/openapp.jdreader;model/iPhone9,2;addressid/2214222593;appBuild/164324;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E456;supportJDSHWK/1`;
    $.cookie = cookiesArr[i];
    $.UserName = decodeURIComponent($.cookie.match(/pt_pin=([^; ]+)(?=;?)/) && $.cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    if(loginInfo[$.UserName] === false){
      continue;
    }
    for (let j = 0; j < activityList.length; j++) {
      $.activityInfo = activityList[j];
      $.appId = $.activityInfo.appId;
      let inviteList = inviteInfo[$.appId];
      $.canHelp = true;
      for (let k = 0; k < inviteList.length && $.canHelp; k++) {
        $.oneInvite = inviteList[k];
        if($.oneInvite.user === $.UserName || $.oneInvite.max){
          continue;
        }
        console.log(`${$.UserName}去助力${$.oneInvite.user}，助力码：${$.oneInvite.taskToken}`);
        $.actionType = 0;
        await takePostRequest('help');
        await $.wait(500);

      }
    }
  }
})().catch((e) => {
  $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
}).finally(() => {
  $.done();
});

async function main() {
  $.activityInfo = {};
  await takePostRequest('healthyDay_getHomeData');
  if(JSON.stringify($.activityInfo) === '{}'){
    console.log(`获取活动详情失败`);
    return ;
  }
  let date = new Date($.activityInfo.activityInfo.endTime)
  let endtime = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  console.log(`获取活动详情成功，结束时间：${endtime}，${$.activityInfo.activityInfo.endTime}`);
  await $.wait(1000);
  $.runTime = 0;
  do {
    $.runFlag = false;
    await doTask();
    if($.runFlag){
      await takePostRequest('healthyDay_getHomeData');
    }
    $.runTime++;
  }while ($.runFlag && $.runTime <10);
  let needScore = $.activityInfo.userInfo.scorePerLottery;
  let userScore = $.activityInfo.userInfo.userScore;
  let luckDrawTime = Math.floor(userScore/needScore);
  console.log(`当前积分：${userScore},每次抽奖需要积分：${needScore},可以抽奖次数:${luckDrawTime}次`);
  for (let i = 0; i < luckDrawTime; i++) {
    await takePostRequest('interact_template_getLotteryResult');
    await $.wait(1000);
  }
}
async function doTask(){
  let taskList = $.activityInfo.taskVos;
  for (let i = 0; i < taskList.length; i++) {
    $.oneTask = taskList[i];
    let infoList = $.oneTask.productInfoVos || $.oneTask.shoppingActivityVos || $.oneTask.followShopVo ||  $.oneTask.browseShopVo || [];
    let taskName = $.oneTask.taskName;
    if($.oneTask.status === 2){
      console.log(`任务：${taskName},已完成`);
      continue;
    }else if($.oneTask.status === 3){
      console.log(`任务：${taskName},去领奖`);
      await takePostRequest('healthyDay_getLotteryResult');
      continue;
    }else if($.oneTask.status === 0){
      console.log(`任务：${taskName},不需要执行`);
      continue;
    }
    if($.oneTask.taskType === 21){
      console.log(`任务：${taskName},不执行`);
      continue;
    }else if($.oneTask.taskType === 12 || $.oneTask.taskType === 13){
      console.log(`任务：${taskName},去执行`);
      $.oneInfo = $.oneTask.simpleRecordInfoVo;
      $.actionType = 0;
      await takePostRequest('harmony_collectScore');
      await $.wait(1000);
    } else if($.oneTask.taskType === 7 || $.oneTask.taskType === 8 || $.oneTask.taskType === 9 ){
      console.log(`任务：${taskName},需要完成${$.oneTask.maxTimes}次，已完成${$.oneTask.times}次`);
      let needTime = Number($.oneTask.maxTimes) - Number($.oneTask.times);
      for (let j = 0; j < infoList.length && j < needTime; j++) {
        $.oneInfo = infoList[j];
        if($.oneInfo.status === 2){
          continue;
        }
        let waitTime = 1;
        if($.oneTask.waitDuration && Number($.oneTask.waitDuration) > 0){
          waitTime = $.oneTask.waitDuration;
        }
        console.log(`任务：${taskName},${$.oneInfo.skuName || $.oneInfo.title || $.oneInfo.shopName},等待${waitTime}秒`);
        $.actionType = 1;
        await takePostRequest('harmony_collectScore');
        await $.wait(waitTime*1000);
        $.actionType = 0;
        await takePostRequest('harmony_collectScore');
        await $.wait(1000);
      }
    } else if($.oneTask.taskType === 1 || $.oneTask.taskType === 2  || $.oneTask.taskType === 3 || $.oneTask.taskType === 15 ||$.oneTask.taskType === 26){
      console.log(`任务：${taskName},需要完成${$.oneTask.maxTimes}次，已完成${$.oneTask.times}次`);
      let needTime = Number($.oneTask.maxTimes) - Number($.oneTask.times);
      for (let j = 0; j < infoList.length && j < needTime; j++) {
        $.oneInfo = infoList[j];
        if($.oneInfo.status === 2){
          continue;
        }
        let waitTime = 1;
        if($.oneTask.waitDuration && Number($.oneTask.waitDuration) > 0){
          waitTime = $.oneTask.waitDuration;
        }
        console.log(`任务：${taskName},${$.oneInfo.skuName || $.oneInfo.title || $.oneInfo.shopName},等待${waitTime}秒`);
        $.actionType = 1;
        await takePostRequest('harmony_collectScore');
        await $.wait(waitTime*1000);
      }
    } else if($.oneTask.taskType === 14 ){
      if($.runTime === 0){
        console.log(`任务：${taskName},需要完成${$.oneTask.maxTimes}次，已完成${$.oneTask.times}次`);
        let  invite = $.oneTask.assistTaskDetailVo.taskToken;
        console.log(`助力码：${invite}`);
        inviteInfo[$.appId].push({'user':$.UserName, 'taskToken':invite,'taskId':$.oneTask.taskId, 'max':false});
      }
    }else{
      console.log(`任务：${taskName},未判断状态，${$.oneTask.taskType}`);
    }
  }
}

async function takePostRequest(type) {
  let body = ``;
  let myRequest = ``;
  switch (type) {
    case 'healthyDay_getHomeData':
      body = `functionId=${type}&body={"appId":"${$.appId}","taskToken":"","channelId":1}&client=wh5&clientVersion=1.0.0`;
      break;
    case 'harmony_collectScore':
      body = `functionId=${type}&body={"appId":"${$.appId}","taskToken":"${$.oneInfo.taskToken}","taskId":${$.oneInfo.taskId},"actionType":"${$.actionType}"}&client=wh5&clientVersion=1.0.0`;
      break;
    case 'interact_template_getLotteryResult':
      body = `functionId=${type}&body={"appId":"${$.appId}"}&client=wh5&clientVersion=1.0.0`;
      break;
    case 'help':
      body = `functionId=harmony_collectScore&body={"appId":"${$.appId}","taskToken":"${$.oneInvite.taskToken}","taskId":${$.oneInvite.taskId},"actionType":"${$.actionType}"}&client=wh5&clientVersion=1.0.0`;
      break;
    case 'healthyDay_getLotteryResult':
      body = `functionId=${type}&body={"appId":"${$.appId}","taskId":${$.oneTask.taskId}&client=wh5&clientVersion=1.0.0`;
      break;
    default:
      console.log(`错误${type}`);
  }
  myRequest = getPostRequest(body);
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        dealReturn(type, data);
      } catch (e) {
        console.log(data);
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function dealReturn(type, data) {
  try {
    data = JSON.parse(data);
  }catch (e) {
    console.log(`返回信息异常：${data}\n`);
    return;
  }
  switch (type) {
    case 'healthyDay_getHomeData':
      if(data.code === 0 &&  data.data && data.data.bizCode === 0){
        $.activityInfo = data.data.result;
      }else{
        console.log(JSON.stringify(data));
      }
      break;
    case 'harmony_collectScore':
      if(data.code === 0 &&  data.data && data.data.bizCode === 0){
        console.log(`执行成功，获得积分：${data.data.result.acquiredScore}`);
        $.runFlag = true;
      }else if(data.code === 0 &&  data.data && data.data.bizCode === 1){
        console.log(data.data.bizMsg || '');
      }else{
        console.log(JSON.stringify(data));
      }
      break;
    case 'interact_template_getLotteryResult':
    case 'healthyDay_getLotteryResult':
      if (data.code === 0 &&  data.data && data.data.bizCode === 0) {
        let userAwardsCacheDto = data.data.result.userAwardsCacheDto;
        if(userAwardsCacheDto.type === 0){
          console.log(`啥都没抽到`);
        }else if(userAwardsCacheDto.type === 1){
          console.log(`获得优惠券：${userAwardsCacheDto.prizeName || ''}`);
        }else if(userAwardsCacheDto.type === 2){
          console.log(`获得京豆:${userAwardsCacheDto.jBeanAwardVo.quantity ||''}` );
        }else{
          console.log(`获得其他` );
        }
        if (data.data.result.userAwardsCacheDto.redPacketVO) {
          console.log('获得红包:' + data.data.result.userAwardsCacheDto.redPacketVO.value)
        }
      } else{
        console.log(data.data.bizMsg)
      }
      console.log(JSON.stringify(data));
      break;
    case 'help':
      if (data['code'] === 0) {
        if (data['data']['bizCode'] === 0) {
          console.log(`助力结果：${data.data.bizMsg}🎉\n`);
        } else {
          if (data['data']['bizCode'] === 108) $.canHelp = false;
          if (data['data']['bizCode'] === 103) $.oneInvite.max = true;
          if (data['data']['bizCode'] === -2002) $.canHelp = false;
          console.log(`助力失败：${data.data.bizMsg}\n`);
          console.log(`${JSON.stringify(data)}\n`);
        }
      } else {
        console.log(`助力异常：${JSON.stringify(data)}\n`);
      }
      break;
    default:
      console.log(JSON.stringify(data));
  }
}
function getPostRequest(body) {
  const url = 'https://api.m.jd.com/client.action';
  const headers = {
    'Origin' : `https://h5.m.jd.com`,
    'Cookie' : $.cookie,
    'Connection' : `keep-alive`,
    'Accept' : `application/json, text/plain, */*`,
    'Referer' : `https://h5.m.jd.com/babelDiy/Zeus/2WBcKYkn8viyxv7MoKKgfzmu7Dss/index.html`,
    'Host' : `api.m.jd.com`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Accept-Language' : `zh-cn`,
    'user-agent':$.ua,
  }
  return {url: url, headers: headers, body: body};
}
function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": $.cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }randomWord
  return shuffled.slice(min);
}
function randomWord(randomFlag, min, max){
  var str = "",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // 随机产生
  if(randomFlag){
    range = Math.round(Math.random() * (max-min)) + min;
  }
  for(var i=0; i<range; i++){
    pos = Math.round(Math.random() * (arr.length-1));
    str += arr[pos];
  }
  return str;
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

