/*
项目名称:花小橙
项目注册地址:各大应用商城下载
本人团邀请码:E714744 ,你的助力是我的动力

变量填写
hxcPhone 接码平台账号#接码平台密码#要刷的邀请码#接码项目ID#接码平台
export hxcPhone='手机号#密码手机号#密码#邀请码#接码项目ID#接码平台'

变量注释
密码不能带有@和#字符
项目ID：需要进接码平台找到那个项目才有,对接项目搜索时搜 华侨城 ,德芙云我登录不上不知道,米云应该是10522
接码平台：填 0 为德芙云 填 1 为米云
接码平台德芙云:http://h5.tydmq.com:81/
接码平台米云:http://h5.miyun.pro/zc.html?inviteCode=32464

测试米云正常，德芙云号密码不对测试不了

注意：米云的账号是个人中心的 API登录账号
注意：米云的账号是个人中心的 API登录账号
注意：米云的账号是个人中心的 API登录账号

定时任务
手动执行
*/
const $ = new Env('花小橙');
const notify = $.isNode() ? require('./sendNotify') : '';
let status;
status = (status = ($.getval("hxcstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let hxcPhoneArr = []
let hxcPhone = $.isNode() ? (process.env.hxcPhone ? process.env.hxcPhone : "") : ($.getdata('hxcPhone') ? $.getdata('hxcPhone') : "")
let hxcPhones = ""
let tz = ($.getval('tz') || '1');
$.message = ''
//
!(async () => {
  if (typeof $request !== "undefined") {
    // hxcck()
  } else {
    if (!$.isNode()) {
      hxcPhoneArr.push($.getdata('hxcPhone'))
      let hxccount = ($.getval('hxccount') || '1');
      for (let i = 2; i <= hxccount; i++) {
        hxcPhoneArr.push($.getdata(`hxcPhone${i}`))
      }
      console.log(`-------------共${hxcPhoneArr.length}个账号-------------\n`)
      for (let i = 0; i < hxcPhoneArr.length; i++) {
        if (hxcPhoneArr[i]) {
          hxcPhone = hxcPhoneArr[i];
          $.index = i + 1;
          console.log(`\n开始【第 ${$.index} 个账号任务】`)
          zhanghu = hxcPhone.split('#')
          user = zhanghu[0]
          mima = zhanghu[1]
          yqm=zhanghu[2]
          ID=zhanghu[3]
          jm_url=zhanghu[4]
          await byxiaopeng()
        }
      }
    } else {
      if (process.env.hxcPhone && process.env.hxcPhone.indexOf('@') > -1) {
        hxcPhoneArr = process.env.hxcPhone.split('@');
        console.log(`您选择的是用"@"隔开\n`)
      } else {
        hxcPhones = [process.env.hxcPhone]
      };
      Object.keys(hxcPhones).forEach((item) => {
        if (hxcPhones[item]) {
          hxcPhoneArr.push(hxcPhones[item])
        }
      })
      console.log(`共${hxcPhoneArr.length}个账号`)
      for (let k = 0; k < hxcPhoneArr.length; k++) {
        $.message = ""
        hxcPhone = hxcPhoneArr[k]
        $.index = k + 1;
        console.log(`\n开始【第 ${$.index} 个账号任务】`)
        zhanghu = hxcPhone.split('#')
        user = zhanghu[0]
        mima = zhanghu[1]
        yqm=zhanghu[2]
        ID=zhanghu[3]
        jm_url=zhanghu[4]
        await byxiaopeng()
      }
    }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())

//要执行的代码
async function byxiaopeng() {

  await login()//登录
  await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
 // await dutang()
  await message() //通知
}
//每日毒鸡汤
function dutang(timeout = 0) {
  return new Promise((resolve) => {
      let url = {
          url: `https://api.oick.cn/dutang/api.php`,
          headers: {
              'Accept': 'application/json',
              'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
          },
      }
      $.get(url, async (err, resp, data) => {
          try {
              result = data
              if (result.length != 0) {
                  $.log(`\n【今日鸡汤】：${result}`)
                  $.message += `\n【今日鸡汤】：${result}`
              }
          } catch (e) {
              $.logErr(e, resp);
          } finally {
              resolve()
          }
      }, timeout)
  })
}
//登录
function login(timeout = 0) {
    if(jm_url==0){
      logn_url=`http://api.fghfdf.cn/api/logins?username=${user}&password=${mima}`
  }else{
      logn_url=`http://api.miyun.pro/api/login?apiName=${user}&password=${mima}`
  }
  
  return new Promise((resolve) => {
    let url = {
      url: logn_url,
      headers: "",
      //body: ``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          //console.log(data)
        let result = JSON.parse(data)
        if (result.message == 'ok') {
          console.log(`\n【登录状态】: 登录成功`)
          token = result.token
          await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
          
          await qk()
              
          
        } else {
          console.log(`\n【登录状态】: 登录失败`)
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//提手机码
function qk(timeout = 0) {
    if(jm_url==0){
      logn_url=`http://api.fghfdf.cn/api/get_mobile?token=${token}&project_id=${ID}`
  }else{
      logn_url=`http://api.miyun.pro/api/get_mobile?token=${token}&project_id=${ID}`
  }
  
  return new Promise((resolve) => {
    let url = {
      url: logn_url,
      headers: "",
    //body:``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          //console.log(data)
        result = JSON.parse(data)
        if(result.message=="ok"){
            mobile=result.mobile
          $.log(`\n【获取号码】：---号码为:${result.mobile}`)
          $.message += `\n【获取号码】：---号码为:${result.mobile}`
          await getcode()
          
        }else{
           $.log(`\n【获取号码】：---${result.message}`)
          $.message += `\n【获取号码】：---${result.message}`   
        }
            

      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//发送注册验证码
function getcode(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://hxcapi.smartoct.com/member/auth/getlogincode`,
      headers: {"Content-Type": "application/json; charset=UTF-8","Host": "hxcapi.smartoct.com","User-Agent": "HuaCheng/1.0.9 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Connection": "Keep-Alive","Accept-Encoding": "gzip","Content-Length": 30},
    body: `{"phone_number":"${mobile}"}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        //console.log(data)
        result = JSON.parse(data)
        if(result.status==200){
            let ys=Math.floor(Math.random() * (15000 - 10000 + 1000) + 10000)
          $.log(`\n【获取验证码】：---发送${result.message},等待 ${ys} 毫秒读取验证码`)
          $.message += `\n【获取验证码】：---发送${result.message},等待 ${ys} 毫秒读取验证码`
          await $.wait(ys)
          await redcode()
          
          
        }else{
           $.log(`\n【获取验证码】：---发送${result.message}`)
          $.message += `\n【获取验证码】：---发送${result.message}`  
        }
            

      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//读取验证码
function redcode(timeout = 0) {
    if(jm_url==0){
      logn_url=`http://http://api.fghfdf.cn/api/get_message?token=${token}&project_id=${ID}&phone_num=${mobile}`
  }else{
      logn_url=`http://api.miyun.pro/api/get_message?token=${token}&project_id=${ID}&phone_num=${mobile}`
      
  }
  
  return new Promise((resolve) => {
    let url = {
      url: logn_url,
      headers: '',
    //body:``,
    }
    $.get(url, async (err, resp, data) => {
      try {
         //console.log(data)
        result = JSON.parse(data)
        if(!result.code){
          $.log(`\n【读取验证码】：---暂时没有读取到,5~10秒后继续读取`)
          $.message += `\n【读取验证码】：---暂时没有读取到,5~10秒后继续读取`
          await $.wait(Math.floor(Math.random() * (10000 - 5000 + 1000) + 5000))
          await redcode()
          
        }else{
            //{"message":"ok","code":"APP","modle":"【华侨城】您正在登录华侨城APP，验证码：626964，5分钟内有效，请不要告诉他人！"}
            if(result.code=='APP'){
                lg_code = data.match(/验证码：(\S*)，5/)[1];
            }else{
                lg_code=result.code
            }
            
           $.log(`\n【读取验证码】：---验证码为:${lg_code}`)
          $.message += `\n【读取验证码】：---验证码为:${lg_code}`
          await getlogin()
          
        } 
        /*
        if(result.message=="ok"){
           if(!result.code){
          $.log(`\n【读取验证码】：---暂时没有读取到,3~5秒后继续读取`)
          $.message += `\n【读取验证码】：---暂时没有读取到,3~5秒后继续读取`
          await $.wait(Math.floor(Math.random() * (5000 - 3000 + 1000) + 3000))
          await redcode()
          
        }else{
           $.log(`\n【读取验证码】：---验证码为:${result.code}`)
          $.message += `\n【读取验证码】：---验证码为:${result.code}`
          lg_code=result.code
          await getlogin()
          
        } 
        }else{
            $.log(`\n【读取验证码】：---${result.message}`)
          $.message += `\n【读取验证码】：---${result.message}` 
        }
        */
            

      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//释放手机号
function getfree(timeout = 0) {
    if(jm_url==0){
      logn_url=`http://http://api.fghfdf.cn/api/free_mobile?token=${token}&project_id=${ID}&phone_num=${mobile}`
  }else{
      logn_url=`http://api.miyun.pro/api/free_mobile?token=${token}&project_id=${ID}&phone_num=${mobile}`
      
  }
  
  return new Promise((resolve) => {
    let url = {
      url: logn_url,
      headers: '',
    //body:``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          //console.log(data)
        result = JSON.parse(data)
        //$.log(data)
        
            $.log(`\n【释放手机号】：---${result.message}`)
          $.message += `\n【释放手机号】：---${result.message}` 
        
        
            

      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

function getlogin(timeout = 0) {

  return new Promise((resolve) => {
    let url = {
      url: `https://hxcapi.smartoct.com/member/auth/login`,
      headers: {"Content-Type": "application/json; charset=UTF-8","Host": "hxcapi.smartoct.com","User-Agent": "Mozilla/5.0 (Linux; Android 8.0.0; HWI-AL00 Build/HUAWEIHWI-AL00; wv)"},
    body:`{"code":"${lg_code}","deviceid":"${getdeviceid(2)}+${getdeviceid(4)}/${getdeviceid(8)}/${getdeviceid(7)}","lat":21.047024443188896,"lng":110.17166785334616,"phone_number":"${mobile}"}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
          //console.log(data)
        result = JSON.parse(data)
        if(result.status==200){
          $.log(`\n【登录花小橙】：---${result.message}`)
          $.message += `\n【登录花小橙】：---${result.message}`
          hxctoken=result.data.hxctoken
          await $.wait(Math.floor(Math.random() * (3000 - 1000 + 1000) + 1000))
          await gethelp()
          await getfree()
        }else{
           $.log(`\n【登录花小橙】：---${result.message}`)
          $.message += `\n【登录花小橙】：---${result.message}`  
        }
            

      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

function gethelp(timeout = 0) {

  return new Promise((resolve) => {
    let url = {
      url: `https://hxcapi.smartoct.com/mactivity/help/help?hxctoken=${hxctoken}&invitation_code=${yqm}`,
      headers: {"Content-Type": "application/json; charset=UTF-8","Host": "hxcapi.smartoct.com","User-Agent": "Mozilla/5.0 (Linux; Android 8.0.0; HWI-AL00 Build/HUAWEIHWI-AL00; wv)"},
    //body:``,
    }
    $.get(url, async (err, resp, data) => {
      try {
          //console.log(data)
        result = JSON.parse(data)
        
           $.log(`\n【花小橙助力】：---${result.message}`)
          $.message += `\n【花小橙助力】：---${result.message}`  
        
            

      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


function getdeviceid(mun) {
  $chars = 'ABCD2345EFGHJKMNPQRS2345TWXYZabc678defhijkmnprstwxyz2345678';
  maxPos = $chars.length;
  pwd = '';
  for (i = 0; i < mun; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd
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