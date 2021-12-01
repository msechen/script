/*

软件名称:NFT博物馆

项目注册地址:http://nftwatches.net
填写邀请码：680966	送一个雕像,不知道有没有效,我找不到入口,自己进好友界面看看

变量抓取:

必要变量:
变量名 soy_NFT_data
变量值 用户token&视频code2
注释:用户token抓包时域名service.nftbwg.net连接请求头上token值,code2是观看视频是域名cpu-openapi.baidu.com连接上的code2值
注意:点关口视频时提示视频缓存失败质量的是没有这个code2值的

多个号用 @ 或 # 或 换行 隔开

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_NFT.js

*/


const $ = new Env('NFT博物馆');
const notify = $.isNode() ? require('./sendNotify') : '';

let NFT_count = '',app_soy_NFT_data=[],user_name='',statue='',subTitle=''



!(async () => {
    if (typeof $request !== "undefined") {
        await NFT_getdata()
    } else {
        if ($.isNode()) {
    
    if(!process.env.soy_NFT_data){
        console.log(`\n【${$.name}】：未填写相对应的变量`);
        return;
    }

    if (process.env.soy_NFT_data && process.env.soy_NFT_data.indexOf('@') > -1) {
        app_soy_NFT_data = process.env.soy_NFT_data.split('@');
    } else if (process.env.soy_NFT_data && process.env.soy_NFT_data.indexOf('\n') > -1) {
        app_soy_NFT_data = process.env.soy_NFT_data.split('\n');
    } else if(process.env.soy_NFT_data && process.env.soy_NFT_data.indexOf('#') > -1){
        app_soy_NFT_data = process.env.soy_NFT_data.split('#');
    }else{
        app_soy_NFT_data = process.env.soy_NFT_data.split();
    };
    

    
    
}else{
    if(!$.getdata('soy_NFT_data')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_NFT_data`);
        return;
    }
    
    if ($.getdata('soy_NFT_data') && $.getdata('soy_NFT_data').indexOf('@') > -1) {
        app_soy_NFT_data = $.getdata('soy_NFT_data').split('@');
    } else if ($.getdata('soy_NFT_data') && $.getdata('soy_NFT_data').indexOf('\n') > -1) {
        app_soy_NFT_data = $.getdata('soy_NFT_data').split('\n');
    } else if($.getdata('soy_NFT_data') && $.getdata('soy_NFT_data').indexOf('#') > -1){
        app_soy_NFT_data = $.getdata('soy_NFT_data').split('#');
    }else{
        app_soy_NFT_data = $.getdata('soy_NFT_data').split();
    };
    
    
}
        
    }

    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_NFT_data.length} 个账号】===\n`);
      
for (i = 0; i < app_soy_NFT_data.length; i++) {
    soy_NFT_data=app_soy_NFT_data[i].split('&');
    soy_NFT_token=soy_NFT_data[0]
    soy_NFT_code=soy_NFT_data[1]
    soy_NFT_headers= {"token": soy_NFT_token,"Content-type": "text/plain","Connection": "keep-alive","Cache-Control": "no-cache","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; SKW-A0 MIUI/V11.0.4.0.JOYUI)","Host":"cpu-openapi.baidu.com"} 
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    await soy_NFT_home()
    
    
    
    
};


if ($.isNode() ){await notify.sendNotify($.name, subTitle)};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


function soy_NFT_home(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://service.nftbwg.net/home/view`,
            headers : {"token": soy_NFT_token,"Host": "service.nftbwg.net","Connection": "Keep-Alive","Accept-Encoding": "gzip","User-Agent": "okhttp/3.14.9"},
            body : "",
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                ID=result.data.id
                user_name=result.data.name
                adfrequency=result.data.isSign
                if(!user_name){
                    user_name=$.index
                }
                statue=''
                for(let sl=0;sl<result.data.statueUserJsons.length;sl++){
                    statue+=`\n---雕像${result.data.statueUserJsons[sl].statueName}等级：${result.data.statueUserJsons[sl].sid} 级`
                }
                console.log(`\n【${$.name}---账号 ${user_name} 用户信息】: \n---用户昵称：${user_name}\n---当前VIP等级: ${result.data.vipLevel}\n---今日收取门票: ${result.data.isSign} 次\n---雕像数量：${result.data.statueUserJsons.length}\n---当前资产约：${result.data.balanceUnit}${statue}`)
                subTitle+=`\n【${$.name}---账号 ${user_name} 用户信息】: \n---用户昵称：${user_name}\n---当前VIP等级: ${result.data.vipLevel}\n---今日收取门票: ${result.data.isSign} 次\n---雕像数量：${result.data.statueUserJsons.length}\n---当前资产约：${result.data.balanceUnit}${statue}`
                
                if(adfrequency<6){
                    await soy_NFT_daySign()
                    //await soy_NFT_getDaySign()
                    }else{
                        console.log(`\n【${$.name}---账号 ${$.index} 收取门票】: 今天门票已收取完成`)
                        
                    }
               
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 用户信息】: ${result.message}`)
            }
            
               
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}



function soy_NFT_daySign(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://cpu-openapi.baidu.com/api/bes/s?code2=${soy_NFT_code}&b1638164524322=1`,
            headers : {"Content-type": "text/plain","Connection": "keep-alive","Cache-Control": "no-cache","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.2; VOG-AL00 Build/N2G48H)","Host": "cpu-openapi.baidu.com"} ,
            //body : "",
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                if(result.isValid!=0){
                await soy_NFT_getDaySign()
            }else{
               console.log(`\n【${$.name}---账号 ${user_name} 获取门票】: ${result.msg}`)  
            }
            }else{
               console.log(`\n【${$.name}---账号 ${user_name} 获取门票】: ${result.msg}`) 
            }
            
            
               
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

function soy_NFT_getDaySign(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://service.nftbwg.net/home/getDaySign?user_id=${ID}`,
            headers : soy_NFT_headers,
            //body : "",
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---账号 ${user_name} 收取门票】: 获得 ${result.data.earnings} NFT币`)
                let delay=Math.floor(Math.random()*(32000-28000+1000)+28000)
                await $.wait(delay)
                await soy_NFT_daySign()
            }else{
               console.log(`\n【${$.name}---账号 ${$.index} 收取门票】: ${result.message}`) 
            }
            
               
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
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