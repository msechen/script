/*

软件名称:高柏

注册(下载)地址:

ios:https://apps.apple.com/cn/app/%E9%AB%98%E6%9F%8F/id1565300802

安卓:https://haoxlb.com/download/gb.apk


手动填写变量

变量名

#手机号
soy_gb_phone

#登录密码
soy_gb_password


多个账号用 @ 或 # 或 换行 隔开

cron 一天1-2次即可

*/


const $ = new Env('高柏');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0; //响应日志开关,默认关闭
let subTitle = ``;
let status;
status = (status = ($.getval("gb_status") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let app_soy_gb_phone=[],app_soy_gb_password=[];


!(async () => {
    if ($.isNode()) {
    apptz = process.env.mkapptz;
    apptx = process.env.mkapptx;
    
    if(!process.env.soy_gb_phone&&process.env.soy_gb_phone==''){
        console.log(`\n【${$.name}】：未填写相对应的变量`);
        return;
    }
        
    if (process.env.soy_gb_phone && process.env.soy_gb_phone.indexOf('@') > -1) {
        soy_gb_phone = process.env.soy_gb_phone.split('@');
    } else if (process.env.soy_gb_phone && process.env.soy_gb_phone.indexOf('\n') > -1) {
        soy_gb_phone = process.env.soy_gb_phone.split('\n');
    } else if(process.env.soy_gb_phone && process.env.soy_gb_phone.indexOf('#') > -1){
        soy_gb_phone = process.env.soy_gb_phone.split('#');
    }else{
        soy_gb_phone = process.env.soy_gb_phone.split();
    };
    
    if (process.env.soy_gb_password && process.env.soy_gb_password.indexOf('@') > -1) {
        soy_gb_password = process.env.soy_gb_password.split('@');
    } else if (process.env.soy_gb_password && process.env.soy_gb_password.indexOf('\n') > -1) {
        soy_gb_password = process.env.soy_gb_password.split('\n');
    } else if(process.env.soy_gb_password && process.env.soy_gb_password.indexOf('#') > -1){
        soy_gb_password = process.env.soy_gb_password.split('#');
    }else{
        soy_gb_password = process.env.soy_gb_password.split();
    };
    
    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};
    
} else {
    apptz = $.getdata('mkapptz');
    apptx = $.getdata('mkapptx');
    
    if(!$.getdata('soy_gb_phone')&&$.getdata('soy_gb_phone')==''){
        console.log(`\n【${$.name}】：未填写相对应的变量`);
        return;
    }
    
    if($.getdata('soy_gb_phone')&&$.getdata('soy_gb_phone').indexOf('@')>-1){
        soy_gb_phone=$.getdata('soy_gb_phone').split('@');
    }else if($.getdata('soy_gb_phone')&&$.getdata('soy_gb_phone').indexOf('\n')>-1){
        soy_gb_phone=$.getdata('soy_gb_phone').split('\n');
    }else if($.getdata('soy_gb_phone')&&$.getdata('soy_gb_phone').indexOf('&')>-1){
        soy_gb_phone=$.getdata('soy_gb_phone').split('#');
    }else{
        soy_gb_phone=$.getdata('soy_gb_phone').split();
    }
    
    if($.getdata('soy_gb_password')&&$.getdata('soy_gb_password').indexOf('@')>-1){
        soy_gb_password=$.getdata('soy_gb_password').split('@');
    }else if($.getdata('soy_gb_password')&&$.getdata('soy_gb_password').indexOf('\n')>-1){
        soy_gb_password=$.getdata('soy_gb_password').split('\n');
    }else if($.getdata('soy_gb_password')&&$.getdata('soy_gb_password').indexOf('&')>-1){
        soy_gb_password=$.getdata('soy_gb_password').split('#');
    }else{
        soy_gb_password=$.getdata('soy_gb_password').split();
    }
    
    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};

}

///##############
Object.keys(soy_gb_phone).forEach((item) => {
        if (soy_gb_phone[item]) {
            app_soy_gb_phone.push(soy_gb_phone[item]);
        };
    });
    
Object.keys(soy_gb_password).forEach((item) => {
        if (soy_gb_password[item]) {
            app_soy_gb_password.push(soy_gb_password[item]);
        };
    });


console.log(`\n============ 共${app_soy_gb_phone.length}个账号 ============\n`)

//############################
for (i = 0; i < app_soy_gb_phone.length; i++) {
    soy_gb_phone=app_soy_gb_phone[i]
    soy_gb_password=app_soy_gb_password[i]
    
    soy_ygy_headers={"Host": "haoxlb.com",
    "accept": "application/json, text/plain, */*",
"origin": "https://rcguanjia.com",
"user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/104/YM-RT/",
"sec-fetch-mode": "cors",
"x-requested-with": "com.rcguanjia.app",
"sec-fetch-site": "same-site",
"referer": "https://rcguanjia.com/",
"Content-Type": "application/json; charset=utf-8"};

soy_ygy_body=`{"username":"${soy_gb_phone}","password":"${soy_gb_password}"}`
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 账号任务】`);
    
    await soy_ygy_login();
     
};


if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};

})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//
function soy_ygy_login() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://haoxlb.com/api/index/login`,
            headers : soy_ygy_headers,
            body : soy_ygy_body,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==1){
                console.log(`\n【${$.name}---高柏登录】: ${result.info}`)
                token=result.data.token
                await $.wait(1000);
                await soy_ygy_dt()
            }else{
                console.log(`\n【${$.name}---高柏登录】: ${result.message}`)
            }
            resolve()
        })
    })
}


function soy_ygy_dt() {
soy_ygy_body=`{"id":182,"key":4,"token":"${token}"}`
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://haoxlb.com/api/index/getask`,
            headers : soy_ygy_headers,
            body : soy_ygy_body,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==1){
                console.log(`\n【${$.name}---高柏答题】: ${result.info}`)
                //token=result.data.token
                await $.wait(1000);
                await soy_ygy_dt()
            }else{
                console.log(`\n【${$.name}---高柏答题】: ${result.info}`)
            }
            resolve()
        })
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