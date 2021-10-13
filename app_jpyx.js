/*

软件名称:金派优选

分红的,我也不知道啥用,看见就写而已

项目注册地址:http://register.jinpai.info/#/?promotionCode=91831396

变量需求

soy_jpyx_username
#手机号

soy_jpyx_password
#登录密码

多号用 @ 或 # 或 换行 隔开

cron 0 11,20 * * *

*/


const $ = new Env('金派优选');
//加载推送消息模块
const notify = $.isNode() ? require('./sendNotify') : '';
const axios = require("axios");
const app_soy_jpyx_username=[],app_soy_jpyx_password=[]


!(async () => {
    if($.isNode()){
      if(!process.env.soy_jpyx_username){
        console.log(`\n【${$.name}】：未提供登录账号`);
        return;
    }
    
    if(!process.env.soy_jpyx_password){
        console.log(`\n【${$.name}】：未提供登录密码`);
        return;
    }
    
    if (process.env.soy_jpyx_username && process.env.soy_jpyx_username.indexOf('@') > -1) {
        soy_jpyx_username = process.env.soy_jpyx_username.split('@');
    } else if (process.env.soy_jpyx_username && process.env.soy_jpyx_username.indexOf('\n') > -1) {
        soy_jpyx_username = process.env.soy_jpyx_username.split('\n');
    } else if(process.env.soy_jpyx_username && process.env.soy_jpyx_username.indexOf('#') > -1){
        soy_jpyx_username = process.env.soy_jpyx_username.split('#');
    }else{
        soy_jpyx_username = process.env.soy_jpyx_username.split();
    };
    
    if (process.env.soy_jpyx_password && process.env.soy_jpyx_password.indexOf('@') > -1) {
        soy_jpyx_password = process.env.soy_jpyx_password.split('@');
    } else if (process.env.soy_jpyx_password && process.env.soy_jpyx_password.indexOf('\n') > -1) {
        soy_jpyx_password = process.env.soy_jpyx_password.split('\n');
    } else if(process.env.soy_jpyx_password && process.env.soy_jpyx_password.indexOf('#') > -1){
        soy_jpyx_password = process.env.soy_jpyx_password.split('#');
    }else{
        soy_jpyx_password = process.env.soy_jpyx_password.split();
    };

    }else{
      if(!$.getdata('soy_jpyx_username')){
        console.log(`\n【${$.name}】：未提供登录账号`);
        return;
    }
    
    if(!$.getdata('soy_jpyx_password')){
        console.log(`\n【${$.name}】：未提供登录密码`);
        return;
    }
    
    if ($.getdata('soy_jpyx_username') && $.getdata('soy_jpyx_username').indexOf('@') > -1) {
        soy_jpyx_username = $.getdata('soy_jpyx_username').split('@');
    } else if ($.getdata('soy_jpyx_username') && $.getdata('soy_jpyx_username').indexOf('\n') > -1) {
        soy_jpyx_username = $.getdata('soy_jpyx_username').split('\n');
    } else if($.getdata('soy_jpyx_username') && $.getdata('soy_jpyx_username').indexOf('#') > -1){
        soy_jpyx_username = $.getdata('soy_jpyx_username').split('#');
    }else{
        soy_jpyx_username = $.getdata('soy_jpyx_username').split();
    };
    
    if ($.getdata('soy_jpyx_password') && $.getdata('soy_jpyx_password').indexOf('@') > -1) {
        soy_jpyx_password = $.getdata('soy_jpyx_password').split('@');
    } else if ($.getdata('soy_jpyx_password') && $.getdata('soy_jpyx_password').indexOf('\n') > -1) {
        soy_jpyx_password = $.getdata('soy_jpyx_password').split('\n');
    } else if($.getdata('soy_jpyx_password') && $.getdata('soy_jpyx_password').indexOf('#') > -1){
        soy_jpyx_password = $.getdata('soy_jpyx_password').split('#');
    }else{
        soy_jpyx_password = $.getdata('soy_jpyx_password').split();
    };
    
    }
    
    
    Object.keys(soy_jpyx_username).forEach((item) => {
        if (soy_jpyx_username[item]) {
            app_soy_jpyx_username.push(soy_jpyx_username[item]);
        };
    });
    
    Object.keys(soy_jpyx_password).forEach((item) => {
        if (soy_jpyx_password[item]) {
            app_soy_jpyx_password.push(soy_jpyx_password[item]);
        };
    });

    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_jpyx_username.length} 个账号】===\n`);

      
for (i = 0; i < app_soy_jpyx_username.length; i++) {
    soy_jpyx_username=app_soy_jpyx_username[i]
    soy_jpyx_password=app_soy_jpyx_password[i]
    
    //console.log(soy_jpyx_username)

soy_jpyx_login_body=`{"username":"${soy_jpyx_username}","password":"${soy_jpyx_password}","phone":null,"code":"null","openId":null,"appleId":null,"headImg":null,"nickName":null,"promotionCode":null,"uuid":null}`
    
    soy_jpyx_login_headers= {"user-agent": "Dart/2.14 (dart:io)","content-type": "application/json","accept-encoding": "gzip","content-length": soy_jpyx_login_body.length,"host": "jpapp.jinpai.info:8088"}
    
    //console.log(soy_jpyx_login_body)
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    state=0
        await soy_jysz_appLogin()
        
        if(!token){
           console.log(`\n【${$.name}---账号 ${$.index} 登录】: 没有获取到token`) 
        }else{
            await soy_jpyx_list()
        }
        
        //console.log(`\n【${$.name}---账号 ${$.index} 开始观看广告】 `)
        
        if(task1_residue!=0){
            console.log(`\n【${$.name}---账号 ${$.index} 开始${task1_title}任务】 `)
            for(let cs=0;cs<task1_residue&&state==1;cs++){
                let ys=Math.floor(Math.random()*(35000-20000+1000)+20000)
                let watchTime = Math.round(ys/1000)
                task1_body=`{"companyId":"${task1_companyId}","watchTime":${watchTime}}`
                //console.log(task1_body)
                await soy_jpyx_task(task1_body,task1_title)
                console.log(`\n【${$.name}---账号 ${$.index} 开始观看广告】: 延时 ${ys/1000} 秒继续...`)
                await $.wait(ys)
                
            }
        }
        
        if(task2_residue!=0){
            console.log(`\n【${$.name}---账号 ${$.index} 开始观看广告${task2_title}任务】 `)
            for(let cs=0;cs<task2_residue&&state==1;cs++){
                let ys=Math.floor(Math.random()*(35000-20000+1000)+20000)
                let watchTime = Math.round(ys/1000)
                task2_body=`{"companyId":"${task2_companyId}","watchTime":${watchTime}}`
                //console.log(task2_body)
                await soy_jpyx_task(task2_body,task2_title)
                console.log(`\n【${$.name}---账号 ${$.index} 开始观看广告】: 延时 ${ys/1000} 秒继续...`)
                await $.wait(ys)
                
            }
        }
        
        if(task3_residue!=0){
            console.log(`\n【${$.name}---账号 ${$.index} 开始${task3_title}任务】 `)
            for(let cs=0;cs<task3_residue&&state==1;cs++){
                let ys=Math.floor(Math.random()*(35000-20000+1000)+20000)
                let watchTime = Math.round(ys/1000)
                task3_body=`{"companyId":"${task3_companyId}","watchTime":${watchTime}}`
                //console.log(task3_body)
                await soy_jpyx_task(task3_body,task3_title)
                console.log(`\n【${$.name}---账号 ${$.index} 开始观看广告】: 延时 ${ys/1000} 秒继续...`)
                await $.wait(ys)
                
            }
        }
        
    
};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());



async function soy_jysz_appLogin() {
    data = await axios({
        url:'http://jpapp.jinpai.info:8088/appLogin',
        headers:soy_jpyx_login_headers,
        method:"POST",
        data:soy_jpyx_login_body,
        }).catch(function (error) {
            //return error
            console.log('网络请求失败')
        }).then(function (result) {
        //results=JSON.stringify(result.data)
        //console.log(result.data)
        
        if(result.data.code==200){
            console.log(`\n【${$.name}---账号 ${$.index} 登录】: 操作成功`)
            token=result.data.token
        }else{
            console.log(`\n【${$.name}---账号 ${$.index} 登录】: ${result.data.msg}`)
        }
        
    })


}


function soy_jpyx_list() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://jpapp.jinpai.info:8088/appRequest/jpApp/advertisingCompany/list?pageNum=1&pageSize=20&
`,
            headers : {"user-agent": "Dart/2.14 (dart:io)","content-type": "application/json","accept-encoding": "gzip","host": "jpapp.jinpai.info:8088","authorization":`Bearer ${token}`},
            //body : "",
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                //result.rows.length
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: 读取到当前任务状态:`)
                for(let sl = 0; sl < result.rows.length; sl++){
                    console.log(`---${result.rows[sl].taskName}：剩余次数 ${result.rows[sl].residueDegree} 次`)
                    if(sl==0){
                       task1_residue = result.rows[0].residueDegree
                       task1_title=result.rows[0].taskName
                       task1_companyId=result.rows[0].companyId
                    }
                    if(sl==1){
                       task2_residue = result.rows[1].residueDegree
                       task2_title=result.rows[1].taskName
                       task2_companyId=result.rows[1].companyId
                    }
                    if(sl==2){
                       task3_residue = result.rows[2].residueDegree
                       task3_title=result.rows[2].taskName
                       task3_companyId=result.rows[2].companyId
                    }
                    
                }
                
                state=1
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: ${result.msg}`)
            }
             
            resolve()
        })
    })
}


async function soy_jpyx_task(body,title) {
    data = await axios({
        url:'http://jpapp.jinpai.info:8088/appRequest/jpApp/userAdvertisingRecord',
        headers:{"user-agent": "Dart/2.14 (dart:io)","content-type": "application/json","accept-encoding": "gzip","host": "jpapp.jinpai.info:8088","authorization":`Bearer ${token}`},
        method:"POST",
        data:body,
        }).catch(function (error) {
            //return error
            console.log('网络请求失败')
        }).then(function (result) {
            //console.log(result.data)
        //results=JSON.stringify(result.data)
        
        if(result.data.code==201){
            console.log(`\n【${$.name}---账号 ${$.index} 任务:${title}】: ${result.data.msg}`)
            state=1

        }else{
            console.log(`\n【${$.name}---账号 ${$.index} 任务:${title}】: ${result.data.msg}`)
            state=0
        }
        
    })


}


function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}