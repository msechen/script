/*

软件名:答题全明星 收益2/天

软件下载地址:https://tool-s.lanzoui.com/i7GYertt1ab

特别注意:不要提现10元以上的大额  不要提现10元以上的大额   不要提现10元以上的大额,1元大额我也不知道,没测试过

使用条件:先去玩下游戏,达到0.3元提现条件后提现后看到不到帐,到账就可以挂,不到就是黑号/设备
使用条件:先去玩下游戏,达到0.3元提现条件后提现后看到不到帐,到账就可以挂,不到就是黑号/设备
使用条件:先去玩下游戏,达到0.3元提现条件后提现后看到不到帐,到账就可以挂,不到就是黑号/设备

变量填写:

export DT_token=''

变量值获得办法

抓包  过滤host api-aas-mm.luckylist.cn

随便找条连接,把请求里面的协议头里面 x-token 值全部复制填到变量,

由于1元有没有限制不知道,所以加个开关,要提的自行改 true

export DT_t10=false

如果提示如下就是上限了

已经领过啦，看看其他更大的奖励在等着你

cron 0-59/1 11 * * *  ##建议一个某个小时内1-5分钟一次

*/ 


const $ = new Env('答题全明星');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0 //响应日志开关,默认关闭
let subTitle = ``
let apptyq = process.env.tyq//是否填邀请，默认true
let apptz = process.env.ts//是否推送，默认true
let apptx=true//默认提现假,需要自行修改变量 RL_tx=true/false
let appje=''//提现金额,默认1.0元,需要修改自行添加变量 RL_tx=''
let DT_token=[],ggboby=''

if ($.isNode()) {
    
    if (process.env.DT_token && process.env.DT_token.indexOf('@') > -1) {
        token = process.env.DT_token.split('@');
        
    } else if (process.env.DT_token && process.env.DT_token.indexOf('\n') > -1) {
        token = process.env.DT_token.split('\n');
        
    } else {
        token = process.env.DT_token.split()
    };
    Object.keys(token).forEach((item) => {
        if (token[item]) {
            DT_token.push(token[item])
        }
    });
    
    DT_t10=process.env.DT_t10
    
    
    if(!apptx){apptx = true}
    if(!apptz){apptz = true}
    if(!DT_t10){Dttx10 = false}
    
}

!(async () => {
  if (!DT_token[0]) {
        $.msg($.name, '【提示】请先获取变量再试')
        return;
  } else {
      
console.log(`-------- 共 ${DT_token.length} 个账号 --------`)

    console.log(
`\n\n=============== 脚本执行 - 北京时间(UTC+8)：${new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
).toLocaleString()} ===============\n`);



    for (i = 0; i < DT_token.length; i++) {
        if(DT_token[i]){
            DTtoken = DT_token[i]
            ggboby='{"code":"counter_reward"}'
            DTheaders=JSON.parse(`{"Content-Type":"application/json;charset=UTF-8","Content-Length":${ggboby.length},"Host":"api-aas-mm.luckylist.cn","x-app-id":"aas202100008266","x-token":"${DTtoken}"}`)
            $.index = i + 1;
            console.log(`\n----- 开始【第 ${$.index} 个账号】-----`)
            await dt_kgg();
            //await $.wait(1000)
            await dt_khb()
            await dt_smhb()
            await dt_dhb()
            await dt_zp()
            await DT_hblist()
            
           // await $.wait(1000)
            
            
        }  
    }
    //推送消息
    if(apptz){
        if ($.isNode()){
            await notify.sendNotify($.name, subTitle)
        }
    }

  }})()

  .catch((e) => $.logErr(e))
  .finally(() => $.done())

//看广告
function dt_kgg() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/answer/task/reward`,
            headers :  DTheaders,
            body : ggboby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 200) {
                console.log(`\n【账号${$.index}--看广告】: 获取 ${result.data['reward_amount']} 红包币`)
                //await $.wait(2000)
                //await dt_kgg()
            } else {
               console.log(`\n【账号${$.index}--看广告】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//天降红包
function dt_khb() {
    return new Promise((resolve, reject) => {
        khbboby='{"code":"float_bubble"}'
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/answer/task/reward`,
            headers : JSON.parse(`{"Content-Type":"application/json;charset=UTF-8","Content-Length":${khbboby.length},"Host":"api-aas-mm.luckylist.cn","x-app-id":"aas202100008266","x-token":"${DTtoken}"}`),
            body : khbboby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 200) {
                console.log(`\n【账号${$.index}--看广告】: 获取 ${result.data['reward_amount']} 红包币`)
                //await $.wait(2000)
                //await dt_kgg()
            } else {
               console.log(`\n【账号${$.index}--看广告】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//神秘红包
function dt_smhb() {
    return new Promise((resolve, reject) => {
        smboby='{"code":"ext_box"}'
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/answer/task/reward`,
            headers : JSON.parse(`{"Content-Type":"application/json;charset=UTF-8","Content-Length":${smboby.length},"Host":"api-aas-mm.luckylist.cn","x-app-id":"aas202100008266","x-token":"${DTtoken}"}`),
            body : smboby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 200) {
                console.log(`\n【账号${$.index}--看广告】: 获取 ${result.data['reward_amount']} 红包币`)
                //await $.wait(2000)
                //await dt_kgg()
            } else {
               console.log(`\n【账号${$.index}--看广告】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//点红包
function dt_dhb() {
    return new Promise((resolve, reject) => {
        dhbboby='{"code":"fast_click"}'
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/answer/task/reward`,
            headers : JSON.parse(`{"Content-Type":"application/json;charset=UTF-8","Content-Length":${dhbboby.length},"Host":"api-aas-mm.luckylist.cn","x-app-id":"aas202100008266","x-token":"${DTtoken}"}`),
            body : dhbboby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 200) {
                console.log(`\n【账号${$.index}--看广告】: 获取 ${result.data['reward_amount']} 红包币`)
                //await $.wait(2000)
                //await dt_kgg()
            } else {
               console.log(`\n【账号${$.index}--看广告】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//转盘
function dt_zp() {
    return new Promise((resolve, reject) => {
        zpboby='{}'
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/answer/poplottery/play`,
            headers : JSON.parse(`{"Content-Type":"application/json;charset=UTF-8","Content-Length":${zpboby.length},"Host":"api-aas-mm.luckylist.cn","x-app-id":"aas202100008266","x-token":"${DTtoken}"}`),
            body : zpboby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 200) {
                console.log(`\n【账号${$.index}--看广告】: 获取 ${result.data.play_result.reward_amount} 红包币`)
                //await $.wait(2000)
                //await dt_kgg()
            } else {
               console.log(`\n【账号${$.index}--看广告】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//查看提现列表
function DT_hblist() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/user/cashout/status`,
            headers : DTheaders,
            //body : ggboby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if(result.code == 200){
                je=result.data.daily_cashout.money
                //提现1元
                if(Dttx10){
                  if(result.data.option_list[2].remain_times!=0){
                   if(je>=1){
                       DT_tx_boby=`{"option_key":"100.1"}`
                      await DT_tx('1')
                   }
                }  
                }
                
                //提现0.5元
                if(result.data.option_list[1].remain_times!=0){
                    if(je>=0.5){
                         DT_tx_boby=`{"option_key":"50.1"}`
                      await DT_tx('0.5')
                   }
                }
                //提现0.3元
                if(result.data.option_list[0].remain_times!=0){
                    if(je>=0.3){
                         DT_tx_boby=`{"option_key":"30.1"}`
                      await DT_tx('0.3')
                   }
                }
            }else{
               console.log(`\n【账号${$.index}--提示】: ${result.msg}`) 
            }
            
            resolve()
        })
    })
}

//提现
function DT_tx(je) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://api-aas-mm.luckylist.cn/api/v2/user/cashout/apply`,
            headers : DTheaders,
            body :  DT_tx_boby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 200) {
               console.log(`\n【账号${$.index}--提现】:  ${je} 元 ${result.msg}`)
               subTitle +=`\n【账号${$.index}--提现】:  ${je} 元 ${result.msg}`

            } else {
               console.log(`\n【账号${$.index}--提现】: ${result.msg}`)
            }
            resolve()
        })
    })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}