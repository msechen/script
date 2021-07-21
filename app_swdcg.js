/*

软件名：食材大冲关

在没凉之前是1+0.5+0.3+0.3  3元以上最好不要提,容易不到账,导致之后提的都不会到账

软件下载地址(来自阿里云的分享)：https://www.aliyundrive.com/s/EyBDYySxxsm

手机浏览器打开,电脑打开需要登录的


注意,需要做完新手任务,就是叫你提现后就可以了

需要获取数据

打开抓包 然后打开游戏,游戏进到界面后回到抓包

1. 过滤(就是右上角的放大镜图标或3竖点里面) 服务器Host 把 redbag.renyouwangluo.cn 打勾

2. 找到有一个连接中包含 login 

3. 在找到的链接里面,点 响应 预览,把 userId 后面数字和 token 后面的值(是没有引号那些的)都复制填变量


填对应变量

##填写复制的 userId 值
export SC_uid=''

##填复制的 token 值
export SC_Auth=''

########## 可选变量
##这个变量可以不填 就是广告id来的,这个变量可以不填,红包券小可能和这个也有关系
##要填话就看完广告会有一个链接 其中链接中包含 normal 进请求体,有个 redbagId":后面数字就是
export SC_bagID=''

关闭自动提现加变量
export SC_tx=true 或 false 
通知变量
export AC_tz=true 或 false 

每天手动执行,应为 token 会过期,只有几分钟或十几分钟时间

执行正常情况是没有日志的,只有等到结束才出现,因为 token 失效问题所以这么写

默认自动提现,默认从大(1元)到小,如果钱不够就会体小的,因为提现3/5元要审核的.


*/ 


const $ = new Env('食材大冲关');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0 //响应日志开关,默认关闭
let subTitle = ``;
//const axios = require("axios");
let tyq = process.env.tyq//是否填邀请，默认true,不提邀请为false
let tz = process.env.SC_tz//是否推送消息，默认true,不通知改为false
let SC_Auth=[],SC_uid=[]
let tx = process.env.SC_tx //是否提现,默认true,不提现改为false

if ($.isNode()) {
    
    if (process.env.SC_Auth && process.env.SC_Auth.indexOf('@') > -1) {
        SCAuth = process.env.SC_Auth.split('@');
        
    } else if (process.env.SC_Auth && process.env.SC_Auth.indexOf('\n') > -1) {
        SCAuth = process.env.SC_Auth.split('\n');
        
    } else {
        SCAuth = process.env.SC_Auth.split()
    };
    Object.keys(SCAuth).forEach((item) => {
        if (SCAuth[item]) {
            SC_Auth.push(SCAuth[item])
        }
    });
    
    if (process.env.SC_uid && process.env.SC_uid.indexOf('@') > -1) {
        SCid = process.env.SC_uid.split('@');
        
    } else if (process.env.SC_uid && process.env.SC_uid.indexOf('\n') > -1) {
        SCid = process.env.SC_uid.split('\n');
        
    } else {
        SCid = process.env.SC_uid.split()
    };
    Object.keys(SCid).forEach((item) => {
        if (SCid[item]) {
            SC_uid.push(SCid[item])
        }
    });
    
    
    bagID=process.env.SC_bagID
    
    if(!tx){tx = true}
    if(!tz){tz = true}
    
    
}

!(async () => {
  if (!SC_Auth[0]&&SC_uid[0]) {
        $.msg($.name, '【提示】请先获取对应变量再试')
        return;
  } else {
console.log(`【-------- 共 ${SC_Auth.length} 个账号--------】`)

    console.log(
`\n\n=============== 脚本执行 - 北京时间(UTC+8)：${new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
).toLocaleString()} ===============\n`);

    if(SC_Auth.length != SC_uid.length){
        $.msg($.name, '【提示】需要的变量是空的或者账号数量不匹配')
    }else{
    for (i = 0; i < SC_Auth.length; i++) {
        //console.log(dwnc_id[i])
            
            userAuth=SC_Auth[i]
            //dwnccode=dwnc_code[i]
            //登录请求体
            userId=SC_uid[i]
            
            //dl_userboby=JSON.parse(dwnc_dlboby)
            //获取请求头 Auth
            //userAuth=dl_userboby.token
            
            
            //获取随机广告id
            if(!process.env.dwnc_bagID){
               bagID=`4105483${Math.ceil(Math.random()*9)}`
            }
            
            //开红包请求体{"redbagAcceptType":20001,"redbagId":41054838,"videoType":0}
            SC_boby=`{"redbagAcceptType":20001,"redbagId":${bagID},"videoType":0}`

            $.index = i + 1;
            console.log(`\n========开始【账号 ${userId} 任务】========`)
            //await login()
            //console.log(userAuth)
            await kgg()
            await cxye()
            
        
    }
    if(tz){if($.isNode()){await notify.sendNotify($.name, subTitle)}}
    }
  }})()

  .catch((e) => $.logErr(e))
  .finally(() => $.done())


//看广告
function kgg() {
    return new Promise((resolve, reject) => {
        //console.log(userId)
        $.get({//https://redbag.renyouwangluo.cn/api/auth/recv?userId=422479&transId=2001718969976902977_5943506458&sign=0b8507760c9d5f8e95591ecd258616c5&extra=1&name=5759000018
            url : `https://redbag.renyouwangluo.cn/api/auth/recv?userId=${userId}&transId=2001718969976902977_5943506458&sign=0b8507760c9d5f8e95591ecd258616c5&extra=1&name=5759000018`,
            headers : JSON.parse(`{"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)-ksad-android-3.3.10.1","Host": "redbag.renyouwangluo.cn","Accept": "application/json"}`),
        }, async(error, response, data) => {
            //console.log(data+'广告数据')
            let result = JSON.parse(data)
            if(result.code==1){
                if(result.data.isValid==true){
                    await khb()
                }else{
                    console.log(`\n【${$.name}--提示】：获取广告数据失败`)
                }
            }else{
                console.log(`\n【${$.name}--提示】：获取广告数据失败`)
            }
           
           
            resolve()
        })
    })
}
//开红包
function khb() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://redbag.renyouwangluo.cn/api/redbag/normal`,
            headers : JSON.parse(`{"Authorization":"${userAuth}","gameid":"847","Content-Type": "application/json","appversion": "21","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Accept-Encoding": "identity","Host": "redbag.renyouwangluo.cn","Content-Length": ${SC_boby.length}}`),
            body : SC_boby,
        }, async(error, response, data) => {
            //console.log(data+'开红包')
            let result = JSON.parse(data)
            if(result.code==1){
                if(!result.data.money){
                    console.log(`\n【账号 ${userId}--开红包】：${result.data.msg}`)
                }else{
                    console.log(`\n【账号 ${userId}--开红包】：获得 ${result.data.money} 红包券`)
                    console.log(`\n【账号 ${userId}--提示】：将继续看广告`)
                    $.wait(1000)
                    await kgg()
                }
                
                
                /*if(!result.data.msg){
                    console.log(`\n【${$.name}--开红包】：获得 ${result.data.money} 红包券`)
                }else{
                   console.log(`\n【${$.name}--开红包】：${result.data.msg}`) 
                }*/
                
                
            }

            resolve()
        })
    })
}
/*
//登录
function login() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://redbag.renyouwangluo.cn/api/auth/login`,
            headers : JSON.parse(`{"Authorization":"${userAuth}","gameid":"847","Content-Type": "application/json","appversion": "6","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Accept-Encoding": "identity","Host": "redbag.renyouwangluo.cn","Content-Length": ${dwnc_dlboby.length}}`),
            body : dwnc_dlboby,
        }, async(error, response, data) => {
            console.log(data)
            let result = JSON.parse(data)
            if(result.code==1){
                if(!result.data.msg){
                   userAuth = result.data.token
                   userId = result.data.userId
                   console.log(`\n【${$.name}--提示】：登录成功`)
                }else{
                    console.log(`\n【${$.name}--提示】：${result.data.msg}`)
                }
                
                
            }
            
            resolve()
        })
    })
}*/

//查余额
function cxye() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://redbag.renyouwangluo.cn/api/play/info`,
            headers : JSON.parse(`{"Authorization":"${userAuth}","gameid":"847","Content-Type": "application/json","appversion": "21","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Host": "redbag.renyouwangluo.cn"}`),
            //body : '{}',
        }, async(error, response, data) => {
            //console.log(data)
            
            let result = JSON.parse(data)
            //console.log(result.data.redbag)
            if(result.code==1){
                if(!result.data.redbag){
                 console.log(`\n【${$.name}--提示】: 获取余额失败,${result.data.msg}`)
                }else{
                   console.log(`\n【账号 ${userId}--当前余额】：${result.data.redbag/10000} 元`)
                 //subTitle +=`\n【${$.name}--当前余额】：${result.data.redbag/10000} 元`
                 playToken=result.data.playToken
                 /*if(result.data.list[4].dayCount==0){
                     if(result.data.redbag/10000 >= 5){
                         await dwnctx(result.data.list[4].name,`{"merchId":5,"playToken":"${playToken}"}`)
                     }
                 }
                 if(result.data.list[3].dayCount==0){
                     if(result.data.redbag/10000 >= 3){
                        await dwnctx(result.data.list[3].name,`{"merchId":4,"playToken":"${playToken}"}`) 
                     }
                 }*/
                 //提现1元
                 if(result.data.list[2].dayCount==0){
                     if(result.data.redbag/10000 >= 1){
                        await dwnctx(result.data.list[2].name,`{"merchId":3,"playToken":"${playToken}"}`) 
                     }
                 }
                 //提现0.5元
                 if(result.data.list[1].dayCount==0){
                     if(result.data.redbag/10000 >= 0.5){
                         await dwnctx(result.data.list[1].name,`{"merchId":2,"playToken":"${playToken}"}`) 
                     }
                 }
                 //提现0.3元
                 if(result.data.list[0].dayCount!=2){
                     if(result.data.redbag/10000 >= 0.3){
                         await dwnctx(result.data.list[0].name,`{"merchId":1,"playToken":"${playToken}"}`)
                     }
                 }
                   
                   
                }
                
            }else{console.log(`\n【账号 ${userId}--提示】：获取余额失败`)   }
           
           
            resolve()
        })
    })
}
//提现
function dwnctx(txje,txboby) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://redbag.renyouwangluo.cn/api/play/do`,
            headers : JSON.parse(`{"Authorization":"${userAuth}","gameid":"847","Content-Type": "application/json","appversion": "21","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Host": "redbag.renyouwangluo.cn","Content-Length": ${txboby.length}}`),
            body : txboby,
        }, async(error, response, data) => {
            //console.log(data+"  提现")
            let result = JSON.parse(data)
            if(result.data.status == 2){
                console.log(`\n【账号 ${userId} --提现】: 提现 ${txje} 成功`)
                subTitle +=`\n【账号 ${userId} --提现】: 提现 ${txje} 成功`
                await cxye1()
            }

            resolve()
        })
    })
}
function cxye1() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://redbag.renyouwangluo.cn/api/play/info`,
            headers : JSON.parse(`{"Authorization":"${userAuth}","gameid":"847","Content-Type": "application/json","appversion": "21","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Host": "redbag.renyouwangluo.cn"}`),
            //body : '{}',
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==1){
                if(!result.data.money){
                 console.log(`\n【账号 ${userId}--余额】：${result.data.redbag/10000} 元`)
                 subTitle +=`\n【账号 ${userId} --余额】：${result.data.redbag/10000} 元`
                 
                
                }else{
                   console.log(`\n【${userId}--提示】: 获取余额失败`)    
                }
                
            }else{console.log(`\n【${userId}--提示】：获取余额失败`)   }
           
           
            resolve()
        })
    })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}