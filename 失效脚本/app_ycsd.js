/*

软件名称:养宠时代
需要变量

soy_ycsd_jwt
(在链接http://api.ycshidai.com/chat/robredpacket?msgid=中就有)

soy_ycsd_message
(在链接https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/请求体全部复制)

没有v2p重写功能,都需要自行抓包

*/


const $ = new Env('养宠时代');
const notify = $.isNode() ? require('./sendNotify') : '';
const app_soy_ycsd_jwt = [],app_soy_ycsd_message = []
let subTitle = ``;
let status;
status = (status = ($.getval("qmrd_status") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let soy_ycsd_jwt = $.getdata('soy_ycsd_jwt')

!(async () => {

if ($.isNode()) {
apptz = process.env.apptz;
apptx = process.env.apptx;
appyq = process.env.appyq;
    
    if(!process.env.soy_ycsd_jwt&&process.env.soy_ycsd_jwt==''){
        console.log(`\n【${$.name}】：未填写相对应的变量`);
        return;
    }
        
    if (process.env.soy_ycsd_jwt && process.env.soy_ycsd_jwt.indexOf('@') > -1) {
        soy_ycsd_jwt = process.env.soy_ycsd_jwt.split('@');
    } else if (process.env.soy_ycsd_jwt && process.env.soy_ycsd_jwt.indexOf('\n') > -1) {
        soy_ycsd_jwt = process.env.soy_ycsd_jwt.split('\n');
    } else if(process.env.soy_ycsd_jwt && process.env.soy_ycsd_jwt.indexOf('#') > -1){
        soy_ycsd_jwt = process.env.soy_ycsd_jwt.split('#');
    }else{
        soy_ycsd_jwt = process.env.soy_ycsd_jwt.split();
    };
    
    Object.keys(soy_ycsd_jwt).forEach((item) => {
        if (soy_ycsd_jwt[item]) {
            app_soy_ycsd_jwt.push(soy_ycsd_jwt[item]);
        };
    });
    
    if (process.env.soy_ycsd_message && process.env.soy_ycsd_message.indexOf('@') > -1) {
        soy_ycsd_message = process.env.soy_ycsd_message.split('@');
    }else{
        soy_ycsd_message = process.env.soy_ycsd_message.split();
    };
    
    Object.keys(soy_ycsd_message).forEach((item) => {
        if (soy_ycsd_message[item]) {
            app_soy_ycsd_message.push(soy_ycsd_message[item]);
        };
    })

    
}else{
	if (typeof $request !== "undefined") {
    await get_appdata()
  } else{
  app_soy_ycsd_jwt.push($.getdata('soy_ycsd_jwt'))
  app_soy_ycsd_message.push($.getdata('soy_ycsd_message'))
  
  }
apptz = $.getdata('apptz');
apptx = $.getdata('apptx');
appyq = $.getdata('appyq');
    
    let ycsdcount = ($.getval('ycsdcount') || '1');
  for (let i = 2; i <= ycsdcount; i++) {
    app_soy_ycsd_jwt.push($.getdata(`soy_ycsd_jwt${i}`))
    app_soy_ycsd_message.push($.getdata(`soy_ycsd_message${i}`))
   
}
}

Object.keys(soy_ycsd_message).forEach((item) => {
        if (soy_ycsd_message[item]) {
            app_soy_ycsd_message.push(soy_ycsd_message[item]);
        };
    })

Object.keys(soy_ycsd_jwt).forEach((item) => {
        if (soy_ycsd_jwt[item]) {
            app_soy_ycsd_jwt.push(soy_ycsd_jwt[item]);
        };
    });
    
    console.log(
        `=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_ycsd_jwt.length} 个账号】===\n`);
    if(!apptz){apptz=true};
    if(!apptx){apptx=true};
      
for (i = 0; i < app_soy_ycsd_jwt.length; i++) {
    soy_ycsd_jwt=app_soy_ycsd_jwt[i]
    //soy_ycsd_message=app_soy_ycsd_message[i]
    soy_ycsd_message=app_soy_ycsd_message[i].replace(/\n/, "")
    
    soy_qmrd_headers={"Host": "api.ycshidai.com",
    "Accept-Encoding": "identity",
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)",
    };
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    
        await soy_ycsd_get_msgid()
        
};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//获取ck
function get_appdata() {
   if ($request.url.indexOf("jwt") > -1) {
       let str = $request.url
       soy_ycsd_jwt=str.substring(str.indexOf('jwt=')+4, str.length)
       
       if(soy_ycsd_jwt){
           $.setdata(soy_ycsd_jwt,`soy_ycsd_jwt${status}`)
       }
   } 
   
   if ($request.url.indexOf("reward_video") > -1) {
       const soy_ycsd_message = $request.headers.body
       if(soy_ycsd_message){
           $.setdata(soy_ycsd_message,`soy_ycsd_message${status}`)
       }
   } 
  
}

function soy_ycsd_get_msgid(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://api.ycshidai.com/chat/detail?group_id=20210812545667707092127679366913&page=1&lastid=&limit=10&jwt=${soy_ycsd_jwt}`,
            headers : soy_qmrd_headers,
            //body : "",
        }, async(error, response, data) => {
            //console.log(data)
            result = JSON.parse(data)
            if(result.errcode==0){
               for(msgs of result.data.msgs){
                msgid=msgs.msgid
                await soy_ycsd_reward_video()
               } 
            }else{
               console.log(`\n【${$.name}---获取msgid】: ${result.errmsg} 请重新提交 jwt`) 
            }
            
            resolve()
        })
    })

}


//
function soy_ycsd_reward_video() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/`,
            headers : {"user-agent": "VADNetAgent/0 okhttp/3.9.1","content-type": "application/json; charset=utf-8"},
            body : `${soy_ycsd_message}`,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.cypher==2){
                console.log(`\n【${$.name}---获取数据】: 获取msgid ${msgid} 视频数据成功`)
                await soy_ycsd_robredpacket()
            }else{
                console.log(`\n【${$.name}---获取数据】: 失败,视频请求体 message 有问题`)
            }
             
            resolve()
        })
    })
}

function soy_ycsd_robredpacket() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://api.ycshidai.com/chat/robredpacket?msgid=${msgid}&jwt=${soy_ycsd_jwt}`,
            headers : {"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.2; PCLM10 Build/NZH54D)","Host": "api.ycshidai.com","Content-Type": "application/x-www-form-urlencoded"},
            body : ``,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.errcode==0){
                console.log(`\n【${$.name}---抢红包】: 获取 ${result.data.amount} 红包积分`)
                await $.wait(Math.floor(Math.random()*(35000-30000+1000)+30000))
            }else{
                console.log(`\n【${$.name}---抢红包】:  ${result.errmsg}`)
            }
             
            resolve()
        })
    })
}



// 获取指定范围内的随机数
function randomAccess(min,max){
	return Math.floor(Math.random() * (min - max) + max)
}

// 解码
function decodeUnicode(str) {
   //Unicode显示方式是\u4e00
   str = "\\u"+str
   str = str.replace(/\\/g, "%");
    //转换中文
   str = unescape(str);
    //将其他受影响的转换回原来
   str = str.replace(/%/g, "\\");
   return str;
}

/*
*NameLength 要获取的名字长度
*/
function getRandomName(NameLength){
	let name = ""
	for(let i = 0;i<NameLength;i++){
		let unicodeNum  = ""
		unicodeNum = randomAccess(0x4e00,0x9fa5).toString(16)
		name += decodeUnicode(unicodeNum)
	}
	return name
}



//取范围随机数
function delayed(S,L){
return Math.floor(Math.random() * (L - S + 1)) + S;  
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