/*
项目名称:网易严选

手动执行
*/
const $ = new Env('网易严选');
const notify = $.isNode() ? require('./sendNotify') : '';
let app_soy_wyyx_token = [],app_soy_wyyx_INFO = [],app_soy_wyyx_SESS = [],app_soy_wyyx_UA = []

let tz = ($.getval('tz') || '1');
$.message = ''
//
!(async () => {
  if (typeof $request !== "undefined") {
    // hxcck()
  } else {
    if (!$.isNode()) {
        
        if(!$.getdata('soy_wyyx_token')){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_data`);
        return;
        }
        
        if(!$.getdata('soy_wyyx_INFO')){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_INFO`);
        return;
        }
        
        if(!$.getdata('soy_wyyx_SESS')){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_SESS`);
        return;
        }
        
        if ($.getdata('soy_wyyx_token') && $.getdata('soy_wyyx_token').indexOf('@') > -1) {
        app_soy_wyyx_token = $.getdata('soy_wyyx_token').split('@');
    } else if ($.getdata('soy_wyyx_token') && $.getdata('soy_wyyx_token').indexOf('\n') > -1) {
        app_soy_wyyx_token = $.getdata('soy_wyyx_token').split('\n');
    } else {
        app_soy_wyyx_token = $.getdata('soy_wyyx_token').split();
    };
    
    if ($.getdata('soy_wyyx_INFO') && $.getdata('soy_wyyx_INFO').indexOf('@') > -1) {
        app_soy_wyyx_INFO = $.getdata('soy_wyyx_INFO').split('@');
    } else if ($.getdata('soy_wyyx_INFO') && $.getdata('soy_wyyx_INFO').indexOf('\n') > -1) {
        app_soy_wyyx_INFO = $.getdata('soy_wyyx_INFO').split('\n');
    } else {
        app_soy_wyyx_INFO = $.getdata('soy_wyyx_INFO').split();
    };
    
    if ($.getdata('soy_wyyx_SESS') && $.getdata('soy_wyyx_SESS').indexOf('@') > -1) {
        app_soy_wyyx_SESS = $.getdata('soy_wyyx_SESS').split('@');
    } else if ($.getdata('soy_wyyx_SESS') && $.getdata('soy_wyyx_SESS').indexOf('\n') > -1) {
        app_soy_wyyx_SESS = $.getdata('soy_wyyx_SESS').split('\n');
    } else {
        app_soy_wyyx_SESS = $.getdata('soy_wyyx_SESS').split();
    };
        

    } else {
        
        if(!process.env.soy_wyyx_token){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_token`);
        return;
        }
        
        if(!process.env.soy_wyyx_INFO){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_INFO`);
        return;
        }
        
        if(!process.env.soy_wyyx_SESS){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_SESS`);
        return;
        }
        
        
      if (process.env.soy_wyyx_token && process.env.soy_wyyx_token.indexOf('\n') > -1) {
        soy_wyyx_token = process.env.soy_wyyx_token.split('\n');
      } else {
        soy_wyyx_token = process.env.soy_wyyx_token.split();
      };
      Object.keys(soy_wyyx_token).forEach((item) => {
        if (soy_wyyx_token[item]) {
          app_soy_wyyx_token.push(soy_wyyx_token[item])
        }
      })
      
      if (process.env.soy_wyyx_INFO && process.env.soy_wyyx_INFO.indexOf('\n') > -1) {
        soy_wyyx_INFO = process.env.soy_wyyx_INFO.split('\n');
      } else {
        soy_wyyx_INFO = process.env.soy_wyyx_INFO.split();
      };
      Object.keys(soy_wyyx_INFO).forEach((item) => {
        if (soy_wyyx_INFO[item]) {
          app_soy_wyyx_INFO.push(soy_wyyx_INFO[item])
        }
      })
      
      if (process.env.soy_wyyx_SESS && process.env.soy_wyyx_SESS.indexOf('\n') > -1) {
        soy_wyyx_SESS = process.env.soy_wyyx_SESS.split('\n');
      } else {
        soy_wyyx_SESS = process.env.soy_wyyx_SESS.split();
      };
      Object.keys(soy_wyyx_SESS).forEach((item) => {
        if (soy_wyyx_SESS[item]) {
          app_soy_wyyx_SESS.push(soy_wyyx_SESS[item])
        }
      })
      

    }
    
    console.log(`\n=== 脚本执行 - 北京时间：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000 ).toLocaleString()} ===\n`);
    
    console.log(`===【共 ${app_soy_wyyx_token.length} 个账号】===\n`);
    await implement()
    
    
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())

//要执行的代码
async function implement() {
    for(i = 0; i < app_soy_wyyx_token.length; i++){
        $.index = i + 1;
        console.log(`\n开始【第 ${$.index} 个账号任务】`)
        token=app_soy_wyyx_token[i]
        INFO=app_soy_wyyx_INFO[i]
        SESS=app_soy_wyyx_SESS[i]
        soy_wyyx_UA=app_soy_wyyx_UA[i]
        if(!soy_wyyx_UA){
           soy_wyyx_UA="Mozilla/5.0 (Linux; Android 8.1.0; ALP-AL00 Build/HUAWEIALP-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 baiduboxapp/10.13.0.11 (Baidu; P1 8.1.0)"
        }
        
        soy_wyyx_headers={"Host": "act.you.163.com","Connection": "keep-alive","Accept": "application/json, text/javascript, */*; q=0.01","User-Agent": soy_wyyx_UA,"X-Requested-With": "com.netease.yanxuan","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Referer": "https://act.you.163.com/act/pub/0lgg78TZlisC.html","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":`P_INFO=${INFO};NTES_YD_SESS=${SESS}`}
        
        //await TreeInfo()
        //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))//随机延时
        //await WishCity()//进心愿城
        //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))//随机延时
        await GetTaskList()
        //await message() //通知
        //console.log(SESS,INFO,token)
        
    }
    

}

/*
//
function getMyWish(recordId) {
  return new Promise((resolve) => {
    let url = {
      url: `https://act.you.163.com/act/napi/wish-tree/getMyWish?csrf_token=${token}&recordId=${recordId}&__timestamp=${Math.round(new Date().getTime())}`,
      headers: soy_wyyx_headers,
      //body: ``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.message +=err
        }else{
        //console.log(data)
        let result = JSON.parse(data)
        if (result.code == 200) {
            console.log(`---我的心愿物品：${result.data.name} ${result.data.skuName}`)
            $.message += `\n---我的心愿物品：${result.data.name} ${result.data.skuName}`
        } else {
          console.log(`\n---我的心愿物品：读取失败`)
        }
            
            
        }

        
      } catch (e) {
      } finally {
        resolve()
      }
    })
  })
}
*/
/*
//
function TreeInfo() {
  return new Promise((resolve) => {
    let url = {
      url: `https://act.you.163.com/act/napi/wish-tree/getUserTreeInfo?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`,
      headers: soy_wyyx_headers,
    //body:``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.message +=err
        }else{
          //console.log(data)
        let result = JSON.parse(data)
        if(result.code==200){
            let recordId=result.data.userTreeInfoModel.recordId
            //水滴数量
            let WaterValue=result.data.userTreeInfoModel.kettleWaterValue
            
          console.log(`\n【${$.name}---获取心愿】: \n---我的心愿ID：${recordId}`)
          $.message += `\n【${$.name}---获取心愿】: \n---我的心愿ID：${recordId}`
          await getMyWish(recordId)//我的心愿
          
        }else{
           console.log(`\n【${$.name}---获取心愿】: ---请求失败`)
          $.message += `\n【${$.name}---获取心愿】: ---请求失败`
        }
        }  

      } catch (e) {
      } finally {
        resolve()
      }
    })
  })
}*/

//任务列表
function GetTaskList() {
  return new Promise((resolve) => {
    let url = {
      url: `https://act.you.163.com/act/napi/wish-tree/getTaskList?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`,
      headers: soy_wyyx_headers,
    //body: ``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          if(err){
              console.log("⛔️API查询请求失败，请检查自身设备网络情况");
              $.message += "⛔️API查询请求失败，请检查自身设备网络情况";
          }else{
        //console.log(data)
        let result = JSON.parse(data)
        if(result.code==200){
            for(let Task of result.data){
                let Tinished=Task.finishedChance
                let TaskID=Task.id
                let TaskType=Task.taskType
                let TaskName=Task.taskName
                
                //签到
                if(TaskID==0){
                   if(Tinished==1){
                       console.log(`\n【${$.name}---${TaskName}】: 今日已签到过`)
                       $.message += `\n【${$.name}---${TaskName}】: 今日已签到过`
                   }else{
                      await finishTask(TaskName,`{"taskType":10,"taskId":"0"}`) 
                   }
                   
                }
                
                if(TaskID==1){
                    if(TaskType==20){
                        if(Tinished==3){
                            console.log(`\n【${$.name}---${TaskName}】: 今日已完成`)
                            //$.message += `\n【${$.name}---${TaskName}】: 今日已完成`
                            
                        }else{
                            await GetfinishTask(TaskName,`{"taskType":"20","taskId":"1"}`)
                            
                        }
                    }
                    
                }
                //浏览商品
                if(TaskID==4){
                   if(Tinished==2){
                       console.log(`\n【${$.name}---${TaskName}】: 今日已完成`)
                       //$.message += `\n【${$.name}---${TaskName}】: 今日已完成`
                   }else{
                      await GetfinishTask(TaskName,`{"taskType":70,"taskId":"4"}`)
                   }
                   
                }
                
                
            }

        }else{
           console.log(`\n【${$.name}---任务列表】: 请求失败`)
          $.message += `\n【${$.name}---任务列表】: 请求失败`
        }
            }
      } catch (e) {
      } finally {
        resolve()
      }
    })
  })
}

//做任务

function GetfinishTask(TaskName,taskbody) {
  return new Promise((resolve) => {
    let url = {
      url: `https://act.you.163.com/act/napi/wish-tree/finishTask?csrf_token=${token}`,
      headers: {"Host": "act.you.163.com","Connection": "keep-alive","Content-Length": 28,"Accept": "application/json, text/javascript, */*; q=0.01","User-Agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36 yanxuan/6.7.5 device-id/ad0f3c06b11d6b38dec45dbc19c7096e app-chan-id/aos_market_xiaomi trustId/android_trustid_f6992f8d01ff4e13ad675319d8af2a03","content-type": "application/json","Origin": "https://act.you.163.com","X-Requested-With": "com.netease.yanxuan","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie": `NTES_YD_SESS=${SESS}; P_INFO=${INFO}`,"Referer": "https://act.you.163.com/act/pub/0lgg78TZlisC.html"},
      body: `${taskbody}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
          if(err){
              console.log("⛔️API查询请求失败，请检查自身设备网络情况");
              $.message += "⛔️API查询请求失败，请检查自身设备网络情况";
          }else{
              console.log(data)
            
            
            
            }
      } catch (e) {
      } finally {
        resolve()
      }
    })
  })
}



//通知
async function message() {
  if (tz == 1) {
      $.msg($.name, "", $.message)
  }
  if ($.isNode()) {
      await notify.sendNotify($.name, $.message)
  }
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}