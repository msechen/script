/*

软件名称:都爱玩

项目注册地址(微信打开):https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABOSA9,dawbox-android#wechat_redirect

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

soy_daw_token
#抓包时的请求头上的token


选填变量
soy_daw_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 换行 隔开

v2p重写配置如下(不一定行,不能一定不行):

REWRITE 中的 匹配链接（正则表达式）
https://v3.sdk.haowusong.com/api/box/wallet/info 

REWRITE 中的 重写方式
app_daw.js

MITM 中的 解析域名
v3.sdk.haowusong.com

cron "3 0,9,17 * * *"

*/


const $ = new Env('都爱玩');
const notify = $.isNode() ? require('./sendNotify') : '';

let app_soy_daw_token=[],app_soy_daw_UA=[]

!(async () => {
    
    if (typeof $request !== "undefined") {
        await Get_data()
    }
    
    if ($.isNode()) {
    
    if(!process.env.soy_daw_token){
        console.log(`\n【${$.name}】：未填写相应变量 soy_daw_token`);
        return;
    }


    if (process.env.soy_daw_token && process.env.soy_daw_token.indexOf('@') > -1) {
        soy_daw_token = process.env.soy_daw_token.split('@');
    } else if (process.env.soy_daw_token && process.env.soy_daw_token.indexOf('\n') > -1) {
        soy_daw_token = process.env.soy_daw_token.split('\n');
    } else {
        soy_daw_token = process.env.soy_daw_token.split();
    };
    
    Object.keys(soy_daw_token).forEach((item) => {
        if (soy_daw_token[item]) {
            app_soy_daw_token.push(soy_daw_token[item]);
        };
    });
    

	if(!process.env.soy_daw_UA){
		console.log(`\n【${$.name}】：未填写相应变量 soy_daw_UA ,将默认分配`);
	}else{
	if (process.env.soy_daw_UA && process.env.soy_daw_UA.indexOf('@') > -1) {
        soy_daw_UA = process.env.soy_daw_UA.split('@');
    } else if (process.env.soy_daw_UA && process.env.soy_daw_UA.indexOf('\n') > -1) {
        soy_daw_UA = process.env.soy_daw_UA.split('\n');
    } else {
        soy_daw_UA = process.env.soy_daw_UA.split();
    };
    Object.keys(soy_daw_UA).forEach((item) => {
        if (soy_daw_UA[item]) {
            app_soy_daw_UA.push(soy_daw_UA[item]);
        };
    }); 
    
	}
    
    
}else{
    
    
    if(!$.getdata('soy_daw_token')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_daw_token`);
        return;
    }
    
    if ($.getdata('soy_daw_token') && $.getdata('soy_daw_token').indexOf('@') > -1) {
        app_soy_daw_token = $.getdata('soy_daw_token').split('@');
    } else if ($.getdata('soy_daw_token') && $.getdata('soy_daw_token').indexOf('\n') > -1) {
        app_soy_daw_token = $.getdata('soy_daw_token').split('\n');
    } else {
        app_soy_daw_token = $.getdata('soy_daw_token').split();
    };
    
    
    if(!$.getdata('soy_daw_UA')){
		console.log(`\n【${$.name}】：未填写相应变量 soy_daw_UA ,将默认分配`);
	}else{
	   if ($.getdata('soy_daw_UA') && $.getdata('soy_daw_UA').indexOf('@') > -1) {
        app_soy_daw_UA = $.getdata('soy_daw_UA').split('@');
    } else if ($.getdata('soy_daw_UA') && $.getdata('soy_daw_UA').indexOf('\n') > -1) {
        app_soy_daw_UA = $.getdata('soy_daw_UA').split('\n');
    } else {
        app_soy_daw_UA = $.getdata('soy_daw_UA').split();
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
    console.log(`===【共 ${app_soy_daw_token.length} 个账号】===\n`);
subTitle=''
for (i = 0; i < app_soy_daw_token.length; i++) {
    soy_daw_token = app_soy_daw_token[i].split('#')[0]
    
    soy_daw_UA=app_soy_daw_UA[i]
    
    if(!soy_daw_UA){
        soy_daw_UA='Mozilla/5.0 (Linux; Android 8.1; PAR-AL00 Build/HUAWEIPAR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044304 name Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333)'
    }
    
    soy_daw_headers={"Host": "v3.sdk.haowusong.com","user-agent": soy_daw_UA,"token": soy_daw_token,"origin": "https://v3.h5.haowusong.com","x-requested-with": "com.baolai.youqutao","sec-fetch-site": "same-site","sec-fetch-mode": "cors","sec-fetch-dest": "empty"}
    
    $.index = i + 1;
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    await soy_daw_poollist()
    
    
};

if(notify){
    if(subTitle){await notify.sendNotify($.name, subTitle)}
}




})()
.catch((e) => $.logErr(e))
.finally(() => $.done());

//https://v3.sdk.haowusong.com/api/box/wallet/info
function Get_data() {
    if ($request.url.indexOf("api/box") > -1) {
        const soy_daw_token = $request.headers['token']
        let local_token=$.getdata('soy_daw_toekn')
        if(!local_token){
            if (soy_daw_token) $.setdata(soy_daw_token, `soy_daw_token`)
        }else{
            if (soy_daw_token) $.setdata(soy_daw_token, `${local_token}#soy_daw_token`)
        }
        
        const soy_daw_UA = $request.headers['user-agent']
        if (soy_daw_UA) $.setdata(soy_daw_UA, `soy_daw_UA`)


    }
}

//用户信息
function soy_daw_poollist(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://v3.sdk.haowusong.com/api/channel/integral/pool?channel=dawbox-android`,
            headers : soy_daw_headers,
            //body : ``,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                //console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: ${result.msg}`)
                //广告次数
                ad_num=result.data.tasks['vedio_task'][0]['complete_num'];
                //可投次数
                can_num=result.data.player['can_num'];
                //投入限制
                integral_num=result.data.pool['integral_min_put_num'];
                //我的DBA数量
                DBA_num=result.data.player['integral_num']
                
                if(ad_num==10){
                    if(can_num==1){
                    let num=Math.floor(result.data.player['integral_num']/integral_num)*integral_num
                    await soy_daw_put(num)
                        
                    };
                    console.log(`\n【${$.name}---账号 ${$.index} 用户状态】: \n---我的DBA数量：${result.data.player['integral_num']}\n---可提现金额：${result.data.player.money}\n---已投DBA数量：${result.data.player['use_integral_num']}`);
                    subTitle+=`\n【${$.name}---账号 ${$.index} 用户状态】: \n---我的DBA数量：${result.data.player['integral_num']}\n---可提现金额：${result.data.player.money}\n---已投DBA数量：${result.data.player['use_integral_num']}`
                }else{
                    await soy_daw_receive();
                    if(can_num==1){
                    let num=Math.floor(result.data.player['integral_num']/integral_num)*integral_num
                    await soy_daw_put(num)
                        
                    };
                };
                
                
                    
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: 读取失败`)
            };
            
               
           }catch(e){
               console.log(e)
           } finally {
               resolve();
           };
        });
    });
};

//观看广告
function soy_daw_receive(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://v3.sdk.haowusong.com/api/channel/integral/task/receive`,
            headers : {"Host": "v3.sdk.haowusong.com","user-agent": soy_daw_UA,"token": soy_daw_token,"Content-Type": "application/json","origin": "https://v3.h5.haowusong.com","x-requested-with": "com.baolai.youqutao","sec-fetch-site": "same-site","sec-fetch-mode": "cors","sec-fetch-dest": "empty"},
            body : `{"task_id":207,"channel":"dawbox-lot-android"}`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---账号 ${$.index} 视频广告】: 观看广告成功~`)
                let delay=Math.floor(Math.random()*(63000-61000+1000)+61000)
                console.log(`\n【${$.name}---账号 ${$.index} 继续观看广告】: 随机延时 ${delay} ms...`)
                
                await $.wait(delay)
                await soy_daw_receive()
            }else{
                if(result.error.indexOf('仓库已存满')>-1){
                    //console.log(DBA_num)
                    await soy_daw_put(20000)
                    
                }else{
                   console.log(`\n【${$.name}---账号 ${$.index} 视频广告】: ${result.error}`) 
                }
                
            }
            
           }catch(e){
               console.log(e)
           } finally {
               resolve();
           }
        })
    })

}
//投放分红
function soy_daw_put(num){
    //console.log(nun)
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://v3.sdk.haowusong.com/api/channel/integral/put?channel=dawbox-lot-android&num=${num}&pool_lv=1`,
            headers : soy_daw_headers,
            body : ``,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---账号 ${$.index} 投分红币】: 投入 ${num} DAB币成功~`)
                subTitle+=`\n【${$.name}---账号 ${$.index} 投分红币】: 投入 ${num} DAB币成功~`
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 投分红币】: ${result.error}`)
            }
            
           }catch(e){
               console.log(e)
           } finally {
               resolve();
           }
        })
    })

}

//提现
function soy_daw_apply(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://v3.sdk.haowusong.com/api/channel/integral/withdraw/apply?config_id=76&channel=dawbox-lot-android&pay_type=1`,
            headers : soy_daw_headers,
            body : ``,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---账号 ${$.index} 提现】: 提交提现5元成功`)
                subTitle+=`\n【${$.name}---账号 ${$.index} 提现】: 提交提现5元成功`
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 提现】: ${result.error}`)
            }
            
           }catch(e){
               console.log(e)
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