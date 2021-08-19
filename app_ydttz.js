/*

软件名:云顶天天赚

软件下载地址：https://tool-s.lanzoui.com/ibpygsh2l6j

邀请码：6599312

收益：不详

变量需求:

抓包得到数据 在cookie里面找以下对应值

FUNO_2132_saltkey=xxx;PHPSESSID=xxx;username=xxx;login=xxx;FUNO_2132_auth=xxx;FUNO_2132_creditrule=xxx; 


变量填写:

export soy_ydttz_cookie='FUNO_2132_saltkey=xxx;PHPSESSID=xxx;username=xxx;login=xxx;FUNO_2132_auth=xxx;FUNO_2132_creditrule=xxx;'

就是抓包cookie拼成的数据

多号用 换行 或 @ 隔开


cron 0 9 * * *  建议一天一次

v2p配置如下：

【REWRITE】
匹配链接（正则表达式） http://yunding.taidu8.com/plugin.php?

对应重写目标  app_ydttz.js

【MITM】  
yunding.taidu8.com

重写时app为我的界面

tg讨论群：https://t.me/joinchat/8D2_IDN5t0A2ZmM1

tg频道：https://t.me/soy_pull

*/ 


const $ = new Env('云顶天天赚');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0 //响应日志开关,默认关闭

let subTitle = ``,app_soy_ydttz_cookie=[]
let status;
status = (status = ($.getval("appstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let soy_ydttz_cookie = $.getdata('soy_ydttz_cookie')


!(async () => {
if ($.isNode()) {
    if (process.env.soy_ydttz_cookie && process.env.soy_ydttz_cookie.indexOf('@') > -1) {
        soy_ydttz_cookie = process.env.soy_ydttz_cookie.split('@');
        
    } else if (process.env.soy_ydttz_cookie && process.env.soy_ydttz_cookie.indexOf('\n') > -1) {
        soy_ydttz_cookie = process.env.soy_ydttz_cookie.split('\n');
        
    } else {
        soy_ydttz_cookie = process.env.soy_ydttz_cookie.split()
    };
    Object.keys(soy_ydttz_cookie).forEach((item) => {
        if (soy_ydttz_cookie[item]) {
            app_soy_ydttz_cookie.push(soy_ydttz_cookie[item])
        }
    });
    
apptz = process.env.apptz//是否推送，默认true
apptx = process.env.apptx//默认提现假,需要自行修改变量 RL_tx=true/false
    if(!apptz){apptz = true}
    if(!apptx){apptx = true}
    
    
    
}else{
/*
    //let zduoduocookie = $.getdata('app_ZDD_boy')
    if (process.env.soy_ydttz_cookie && process.env.$.getdata('soy_ydttz_cookie').indexOf('@') > -1) {
        soy_ydttz_cookie = process.env.$.getdata('soy_ydttz_cookie').split('@');
        
    } else if (process.env.$.getdata('soy_ydttz_cookie') && process.env.$.getdata('soy_ydttz_cookie').indexOf('\n') > -1) {
        soy_ydttz_cookie = process.env.$.getdata('soy_ydttz_cookie').split('\n');
        
    } else {
        soy_ydttz_cookie = process.env.$.getdata('soy_ydttz_cookie').split()
    };
    Object.keys(soy_ydttz_cookie).forEach((item) => {
        if (soy_ydttz_cookie[item]) {
            app_soy_ydttz_cookie.push(soy_ydttz_cookie[item])
        }
    });
    */
    	if (typeof $request !== "undefined") {
    await ydttzcookie()
  } else {
  app_soy_ydttz_cookie.push($.getdata('soy_ydttz_cookie'))
  }

    let appcount = ($.getval('appcount') || '1');
  for (let i = 2; i <= appcount; i++) {
    app_soy_ydttz_cookie.push($.getdata(`soy_ydttz_cookie${i}`))
   
}
apptz =  $.getdata('apptz')//是否推送，默认true
apptx =  $.getdata('apptx')//默认提现假,需要自行修改变量 RL_tx=true/false
    if(!apptz){apptz = true}
    if(!apptx){apptx = true}
}


    if(!app_soy_ydttz_cookie){
        console.log(`\n【${$.name}---提示】：⛔️ 请填入需要的变量后再试\n'`)
    
    }else{
       console.log(`------------- 共${app_soy_ydttz_cookie.length}个账号-------------\n`)
      for (i = 0; i < app_soy_ydttz_cookie.length; i++) {
         soy_ydttz_cookie=app_soy_ydttz_cookie[i];
         soy_ydttz_url=`http://yunding.taidu8.com/plugin.php?id=tracker_mobile:SignController`;
         soy_ydttz_headers={
             "Cookie": soy_ydttz_cookie,
             "Host": "yunding.taidu8.com",
             "User-Agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36, tracker,",
             "Content-Type": "application/x-www-form-urlencoded;",
             "Referer": "http://yunding.taidu8.com/plugin.php?id=tracker_mobile:HomeController&action=homeUI",
         }

          $.index = i + 1;
          console.log(`\n开始【账号${$.index}任务】`)
          
          //签到
          await yd_qd()
          //领取每天奖励
          await yd_mrlq()
          //每周奖励
          if(new Date().getDay()==1){
              if(new Date().getHours()>=4){
                  await yd_vip();
              }else{
                  console.log(`\n【账号${$.index}---每周奖励】: 未超过4点,无法领取每周奖励`);
              };
          }else{
              console.log(`\n【账号${$.index}---每周奖励】: 不是周一,无法领取每周奖励`);   
          };
          //摇树
          for(let yscs=0;yscs<10;yscs++){
          await yd_getTree()
          }
          //查看兑换列表
          await yd_exchange()
    }
    if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}}
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
 
  
function ydttzcookie() {
   if ($request.url.indexOf("plugin") > -1) {
const soy_ydttz_cookie = $request.headers.Cookie
   if(soy_ydttz_cookie){
   $.setdata(soy_ydttz_cookie,`soy_ydttz_cookie${status}`)
   $.log(soy_ydttz_cookie)
 $.msg($.name,"",`云顶天天赚，${status} cookie获取成功`)
 }
   }else{
      if ($request.url.indexOf("HomeController") > -1) {
const soy_ydttz_cookie = $request.headers.Cookie
   if(soy_ydttz_cookie){
   $.setdata(soy_ydttz_cookie,`soy_ydttz_cookie${status}`)
   $.log(soy_ydttz_cookie)
 $.msg($.name,"",`云顶天天赚，${status} cookie获取成功`)
 } 
   }
   }
}
 
function yd_qd() {
    return new Promise((resolve, reject) => {
        $.post({
            url : soy_ydttz_url,
            headers : soy_ydttz_headers,
            body : "action=canSign",
        }, async(error, response, data) => {
             //console.log(data)
            let result = JSON.parse(data);
            if(result.code==0){
                console.log(`\n【账号 ${$.index}---签到】: ✅ 领取成功`);
                
            }else{
                console.log(`\n【账号 ${$.index}---签到】: ❌ ${result.msg}`);
            };

            resolve();
        });
    });
};
//每天奖励
function yd_mrlq() {
    return new Promise((resolve, reject) => {
        $.post({
            url : soy_ydttz_url,
            headers : soy_ydttz_headers,
            body : "action=canHangUp&hang_up_times=54611613",
        }, async(error, response, data) => {
             //console.log(data)
            let result = JSON.parse(data);
            if(result.code==0){
                console.log(`\n【账号 ${$.index}---每日奖励】: ✅ 领取成功`);
                
            }else{
                console.log(`\n【账号 ${$.index}---每日奖励】: ❌ ${result.msg}`);
            };

            resolve();
        });
    });
};
//每周奖励
function yd_vip() {
    return new Promise((resolve, reject) => {
        $.post({
            url : soy_ydttz_url,
            headers : soy_ydttz_headers,
            body : "action=canHangUpPrize",
        }, async(error, response, data) => {
             //console.log(data)
            let result = JSON.parse(data);
            if(result.code==0){
                console.log(`\n【账号 ${$.index}---每周奖励】: ✅ 领取成功`);
                
            }else{
                console.log(`\n【账号 ${$.index}---每周奖励】: ❌ ${result.msg}`);
            };

            resolve();
        });
    });
};
//查询兑换列表

function yd_exchange() {
    return new Promise((resolve, reject) => {
        $.post({
            url : "http://yunding.taidu8.com/plugin.php?id=tracker_mobile:ExchangeRecordController",
            headers : soy_ydttz_headers,
            body : "action=getNotFinishedExchangeRecord&page=1",
        }, async(error, response, data) => {
             //console.log(data)
            let result = JSON.parse(data);
            if(result.data.length==0){
                console.log(`\n【账号 ${$.index}---查询兑换列表】: ❌ 没有兑换记录`);
            }else{
                for(let list of result.data){
                prize_name=list.prize_name
                msg=list.msg
                if(msg.indexOf('审核成功') > -1){
                console.log(`\n【账号 ${$.index}---查询兑换列表】: ${prize_name}，审核成功，请去云顶公众号提现`);
                subTitle+=`\n【账号 ${$.index}---查询兑换列表】: ${prize_name}，审核成功，请去云顶公众号提现`
                
                }
                }
            };
            
            resolve();
        });
    });
};

function yd_getTree() {
    return new Promise((resolve, reject) => {
        $.post({
            url : "http://yunding.taidu8.com/plugin.php?id=tracker_mobile:huodong&act=getTree",
            headers : soy_ydttz_headers,
            //body : "",
        }, async(error, response, data) => {
             //console.log(data)
            let result = JSON.parse(data);
       
                console.log(`\n【账号 ${$.index}---每日奖励】: ❌ ${result.msg}`);
                await $.wait(30000);
            resolve();
        });
    });
};

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