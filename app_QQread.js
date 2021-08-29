/*

软件名:QQ阅读app 

软件下载地址:自行百度下载

脚本不完善,我也每具体看有哪些任务没做

变量需求:

抓包任意一条连接 其中请求提中在亲戚头找cookie

需要3个ywguid ywkey qrsn  

变量填写: 

export ywguid=''
export ywkey=''
export qrsn=''

多号用 @ 或 换行 隔开

就只有做任务


cron 0 5-23 * * *  建议一小时一次

*/ 


const $ = new Env('QQ阅读app');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0 //响应日志开关,默认关闭
let subTitle = ``
let apptyq = true//是否填邀请，默认true
let apptz = true//是否推送，默认true
let apptx=true//默认提现假,需要自行修改变量 RL_tx=true/false
let appje=''//提现金额,默认1.0元,需要修改自行添加变量 RL_tx=''
let ywguid=[],ywkey=[],qrsn=[]

if ($.isNode()) {
    
    if (process.env.ywguid && process.env.ywguid.indexOf('@') > -1) {
        ywg_uid = process.env.ywguid.split('@');
        
    } else if (process.env.ywguid && process.env.ywguid.indexOf('\n') > -1) {
        ywg_uid = process.env.ywguid.split('\n');
        
    } else {
        ywg_uid = process.env.ywguid.split()
    };
    Object.keys(ywg_uid).forEach((item) => {
        if (ywg_uid[item]) {
            ywguid.push(ywg_uid[item])
        }
    });
    
    if (process.env.ywkey && process.env.ywkey.indexOf('@') > -1) {
        yw_key = process.env.ywkey.split('@');
        
    } else if (process.env.ywkey && process.env.ywkey.indexOf('\n') > -1) {
        yw_key = process.env.ywkey.split('\n');
        
    } else {
        yw_key = process.env.ywkey.split()
    };
    Object.keys(yw_key).forEach((item) => {
        if (yw_key[item]) {
            ywkey.push(yw_key[item])
        }
    });
    
    if (process.env.qrsn && process.env.qrsn.indexOf('@') > -1) {
        qr_sn = process.env.qrsn.split('@');
        
    } else if (process.env.qrsn && process.env.qrsn.indexOf('\n') > -1) {
        qr_sn = process.env.qrsn.split('\n');
        
    } else {
        qr_sn = process.env.qrsn.split()
    };
    Object.keys(qr_sn).forEach((item) => {
        if (qr_sn[item]) {
            qrsn.push(qr_sn[item])
        }
    });
    
    
}

!(async () => {
  if (!ywguid[0]&&!ywkey[0]&&!qrsn[0]) {
        $.msg($.name, '【提示】请先获取变量再试')
        return;
  } else {
      
console.log(`-------- 共 ${ywguid.length} 个账号 --------`)

    console.log(
`\n\n=============== 脚本执行 - 北京时间(UTC+8)：${new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
).toLocaleString()} ===============\n`);



    for (i = 0; i < ywguid.length; i++) {
        if(ywguid[i]){
            YD_ywguid = ywguid[i]
            YD_ywkey=ywkey[i]
            YD_qrsn=qrsn[i]
            //通用协议头
            YD_headers=JSON.parse(`{"Host": "eventv36.reader.qq.com","user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36V1_AND_SQ_5.0.1 QQReader","cookie":"ywguid=${YD_ywguid};ywkey=${YD_ywkey};qrsn=${YD_qrsn}"}`)
            //通用ck
            YD_cookie=`"cookie":"ywguid=${YD_ywguid};ywkey=${YD_ywkey};qrsn=${YD_qrsn}"`
            
            $.index = i + 1;
            console.log(`\n----- 开始【第 ${$.index} 个账号】-----`)
            await YD_info()
            //签到
            await YD_qd();
            //$.wait(1000)
            //视频签到
            await YD_spqd();
            //$.wait(1000)
            //加书架100金币
            await YD_jsj()
            //领看5分钟小说奖励
            await YD_l5();
            await $.wait(1000)
            //领看30分钟小说奖励
            await YD_l30();
            await $.wait(1000)
            //领看60分钟小说奖励
            await YD_l60();
            await $.wait(1000)
            //领看120分钟小说奖励
            await YD_l120();
            //$.wait(10000)
            //转转盘
            await YD_zzp();
            //$.wait(1000)
            //看限时福利视频
            await YD_flsp();
            //$.wait(1000)
            //看日常视频
            await YD_rcsp();
            //开定时箱子
            await openBox();
            
        }  
    }
    //推送消息
    if(apptz){
        if ($.isNode()){
            if(subTitle !=''){
                await notify.sendNotify($.name, subTitle)
            }
        }
    }

  }})()

  .catch((e) => $.logErr(e))
  .finally(() => $.done())

//签到
function YD_qd() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/punchCard_v2`,
            headers : YD_headers,
        }, async(error, response, data) => {
        //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--签到】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--签到】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//看视频签到
function YD_spqd() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/punchCardWatchVideo`,
            headers : YD_headers,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--看视频签到】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--看视频签到】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//开定时箱子
function openBox() {
  return new Promise((resolve) => {
      let Url = {
        url : "https://eventv3.reader.qq.com/activity/pkg11955/openBox",
        headers : YD_headers,
     
      }
      $.get(Url, async (err, resp, data) => {
          //console.log(data)
          result = JSON.parse(data);
          openTime=result.data.openTime
          if (result.data.status == 0){
          console.log(`\n【开时段宝箱】: 获得 ${result.data.coin} 金币,开宝箱时间 ${$.timestampToTime(openTime)}`)
          }
          if (result.data.status == 3){
          console.log(`\n【开时段宝箱】: 时间未到开启时间`)
          }
          
       resolve()   
      })
  })
}

//转盘
function YD_zzp() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/pickLottery`,
            headers : YD_headers,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--转盘】:获得 ${result.data.count} 金币`)
                $.wait(1000)
                await YD_zzp()
            } else {
               console.log(`\n【${$.name}--转盘】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//看福利视频
function YD_flsp() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/pickTimeLimitWelfare`,
            headers : YD_headers,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}-看福利视频】:获得 ${result.data.count} 金币`)
                $.wait(1000)
                await YD_flsp()
            } else {
               console.log(`\n【${$.name}--看福利视频】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//日常看视频
function YD_rcsp() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/watchVideo`,
            headers : YD_headers,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--日常看视频】:获得 ${result.data.watchVideoCoin} 金币`)
                await $.wait(5000);
                await YD_rcsp()
            } else {
               console.log(`\n【${$.name}--日常看视频】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//加书架100金币
function YD_jsj() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/addBookShelfWatchVideo`,
            headers : YD_headers,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                //console.log(`\n【${$.name}--加书架100金币】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--加书架100金币】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//info
function YD_info() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/inivite/fillcode?code=848819069`,
            headers : YD_headers,
        }, async(error, response, data) => {
            
            resolve()
        })
    })
}
//看5分钟小说领金币
function YD_l5() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/readBookWatchVideo?targetTime=5`,
            headers : JSON.parse(`{"Host": "eventv36.reader.qq.com","user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36V1_AND_SQ_5.0.1 QQReader","cookie":"ywguid=${YD_ywguid};ywkey=${YD_ywkey};qrsn=${YD_qrsn};trustedid=99A489185A9D4A74A17587232DA137761","referer":"https://yuedu.reader.qq.com/common/common/wealCollection/earn.html"}`),
        }, async(error, response, data) => {
           //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--看小说5分钟领金币】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--看小说5分钟领金币】: ${result.msg}`)
            } 
            
            resolve()
        })
    })
}
//看30分钟小说领金币
function YD_l30() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/readBookWatchVideo?targetTime=30`,
            headers : JSON.parse(`{"Host": "eventv36.reader.qq.com","user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36V16_AND_SQ_5.0.1 QQReader","cookie":"ywguid=${YD_ywguid};ywkey=${YD_ywkey};qrsn=${YD_qrsn}","referer":"https://yuedu.reader.qq.com/common/common/wealCollection/earn.html"}`),
        }, async(error, response, data) => {
           //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--看小说30分钟领金币】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--看小说30分钟领金币】: ${result.msg}`)
            } 
            
            resolve()
        })
    })
}
//看60分钟小说领金币
function YD_l60() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/readBookWatchVideo?targetTime=60`,
            headers : JSON.parse(`{"Host": "eventv36.reader.qq.com","user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36V1_AND_SQ_5.0.1 QQReader","cookie":"ywguid=${YD_ywguid};ywkey=${YD_ywkey};qrsn=${YD_qrsn};trustedid=99A489185A9D4A74A17587232DA137761","referer":"https://yuedu.reader.qq.com/common/common/wealCollection/earn.html"}`),
        }, async(error, response, data) => {
           //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--看小说60分钟领金币】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--看小说60分钟领金币】: ${result.msg}`)
            } 
            
            resolve()
        })
    })
}
//看120分钟小说领金币
function YD_l120() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://eventv36.reader.qq.com/activity/pkg11955/readBookWatchVideo?targetTime=120`,
            headers : JSON.parse(`{"Host": "eventv36.reader.qq.com","user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36V1_AND_SQ_5.0.1 QQReader","cookie":"ywguid=${YD_ywguid};ywkey=${YD_ywkey};qrsn=${YD_qrsn};trustedid=99A489185A9D4A74A17587232DA137761","referer":"https://yuedu.reader.qq.com/common/common/wealCollection/earn.html"}`),
        }, async(error, response, data) => {
           //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【${$.name}--看小说120分钟领金币】:获得 ${result.data.count} 金币`)
            } else {
               console.log(`\n【${$.name}--看小说120分钟领金币】: ${result.msg}`)
            } 
            
            resolve()
        })
    })
}
function timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return h+m+s;
    }


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}