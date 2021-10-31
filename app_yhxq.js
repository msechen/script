/*

项目名称:源火星球

每天收益不知道
100火源=1元

项目注册地址:http://reg.yuanhuoxingqiu.com/#/?code=W6ESZO

记得走下邀请码哦,谢谢大佬们

必要变量:

soy_yhxq_Authorization
#抓包请求头里面的Authorization,注意不要 Bearer 和空格
#抓包请求头里面的Authorization,注意不要 Bearer 和空格
#抓包请求头里面的Authorization,注意不要 Bearer 和空格

选填变量
soy_yhxq_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 # 或 换行 隔开

支持v2p手动添加变量,不支持v2p重写

cron 27 0-23/1 * * *

*/


const $ = new Env('源火星球');
const notify = $.isNode() ? require('./sendNotify') : '';

let app_soy_yhxq_Authorization=[],app_soy_yhxq_UA=[],subTitle=''


!(async () => {
        if ($.isNode()) {
    
    if(!process.env.soy_yhxq_Authorization){
        console.log(`\n【${$.name}】：未填写相应变量 soy_yhxq_Authorization`);
        return;
    }

	

    if (process.env.soy_yhxq_Authorization && process.env.soy_yhxq_Authorization.indexOf('@') > -1) {
        soy_yhxq_Authorization = process.env.soy_yhxq_Authorization.split('@');
    } else if (process.env.soy_yhxq_Authorization && process.env.soy_yhxq_Authorization.indexOf('\n') > -1) {
        soy_yhxq_Authorization = process.env.soy_yhxq_Authorization.split('\n');
    } else if(process.env.soy_yhxq_Authorization && process.env.soy_yhxq_Authorization.indexOf('#') > -1){
        soy_yhxq_Authorization = process.env.soy_yhxq_Authorization.split('#');
    }else{
        soy_yhxq_Authorization = process.env.soy_yhxq_Authorization.split();
    };
    

	if(!process.env.soy_yhxq_UA){
		//console.log(`\n【${$.Authorization}】：未填写相应变量 soy_yhxq_UA ,将默认分配`);
	}else{
	if (process.env.soy_yhxq_UA && process.env.soy_yhxq_UA.indexOf('@') > -1) {
        soy_yhxq_UA = process.env.soy_yhxq_UA.split('@');
    } else if (process.env.soy_yhxq_UA && process.env.soy_yhxq_UA.indexOf('\n') > -1) {
        soy_yhxq_UA = process.env.soy_yhxq_UA.split('\n');
    } else if(process.env.soy_yhxq_UA && process.env.soy_yhxq_UA.indexOf('#') > -1){
        soy_yhxq_UA = process.env.soy_yhxq_UA.split('#');
    }else{
        soy_yhxq_UA = process.env.soy_yhxq_UA.split();
    };
    Object.keys(soy_yhxq_UA).forEach((item) => {
        if (soy_yhxq_UA[item]) {
            app_soy_yhxq_UA.push(soy_yhxq_UA[item]);
        };
    }); 
    
	}
    
    Object.keys(soy_yhxq_Authorization).forEach((item) => {
        if (soy_yhxq_Authorization[item]) {
            app_soy_yhxq_Authorization.push(soy_yhxq_Authorization[item]);
        };
    });
	
	
    
}else{
    
    if(!$.getdata('soy_yhxq_Authorization')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_yhxq_Authorization`);
        return;
    }
    
    if ($.getdata('soy_yhxq_Authorization') && $.getdata('soy_yhxq_Authorization').indexOf('@') > -1) {
        app_soy_yhxq_Authorization = $.getdata('soy_yhxq_Authorization').split('@');
    } else if ($.getdata('soy_yhxq_Authorization') && $.getdata('soy_yhxq_Authorization').indexOf('\n') > -1) {
        app_soy_yhxq_Authorization = $.getdata('soy_yhxq_Authorization').split('\n');
    } else if($.getdata('soy_yhxq_Authorization') && $.getdata('soy_yhxq_Authorization').indexOf('#') > -1){
        app_soy_yhxq_Authorization = $.getdata('soy_yhxq_Authorization').split('#');
    }else{
        app_soy_yhxq_Authorization = $.getdata('soy_yhxq_Authorization').split();
    };
    

    if(!process.env.soy_yhxq_UA){
		//console.log(`\n【${$.Authorization}】：未填写相应变量 soy_yhxq_UA ,将默认分配`);
	}else{
	   if ($.getdata('soy_yhxq_UA') && $.getdata('soy_yhxq_UA').indexOf('@') > -1) {
        app_soy_yhxq_UA = $.getdata('soy_yhxq_UA').split('@');
    } else if ($.getdata('soy_yhxq_UA') && $.getdata('soy_yhxq_UA').indexOf('\n') > -1) {
        app_soy_yhxq_UA = $.getdata('soy_yhxq_UA').split('\n');
    } else if($.getdata('soy_yhxq_UA') && $.getdata('soy_yhxq_UA').indexOf('#') > -1){
        app_soy_yhxq_UA = $.getdata('soy_yhxq_UA').split('#');
    }else{
        app_soy_yhxq_UA = $.getdata('soy_yhxq_UA').split();
    }; 
    
    Object.keys(soy_yhxq_UA).forEach((item) => {
        if (soy_yhxq_UA[item]) {
            app_soy_yhxq_UA.push(soy_yhxq_UA[item]);
        };
    }); 
    
	}
    
}


    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_yhxq_Authorization.length} 个账号】===\n`);
      
for (i = 0; i < app_soy_yhxq_Authorization.length; i++) {
    soy_yhxq_Authorization=app_soy_yhxq_Authorization[i]
    soy_yhxq_UA=app_soy_yhxq_UA[i]
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    if(!soy_yhxq_UA){
        console.log(`\n【${$.name}}提示】：未提供变量 soy_yhxq_UA ,将默认分配`);
        soy_yhxq_UA='Mozilla/5.0 (Linux; Android 8.1; PAR-AL00 Build/HUAWEIPAR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044304 Authorization Safari/537.36'
    }
    await yhxq_sign_state()
    await yhxq_petAll()
    await yhxq_steal()
    await yhxq_feed_state()
    await yhxq_expedition()
    await yhxq_power()
    
    
};
/*
if(notify){
   await notify.sendNotify($.Authorization, subTitle) 
}*/




})()
.catch((e) => $.logErr(e))
.finally(() => $.done());

function yhxq_sign_state() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/sign/index`);
    $.get(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---签到提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            let result = JSON.parse(data)
            if(result.code==200){
                if(result.data.todaySignIn==1){
                    await yhxq_sign()
                }
                
            }else{
               console.log(`\n【${$.name}---签到状态】: ${result.msg}`)   
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_sign() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/sign`);
    $.get(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---签到提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---签到】: ${result.msg}`);
                
            }else{
               console.log(`\n【${$.name}---签到】: ${result.msg}`)
            }


        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_petAll() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/get/petAll`,`getType=229755CF358564A1&numCount=A3BABEB04882B88B`);
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---领取提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---领取】: 获得火源${result.data.fireGoldSumGet}，兽币${result.data.petGoldSumGet}`);
            }else{
                console.log(`\n【${$.name}---领取】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_steal() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/steal`);
    $.get(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---偷取提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---偷取】: 获得火源${result.data.stealFireGold}，兽币${result.data.stealPetGold}`);
                await yhxq_steal()
            }else{
                console.log(`\n【${$.name}---偷取】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_feed_state() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/pet/feed/index`);
    $.get(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---喂养提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                if(result.data.surplusCount>0){
                    await yhxq_feed()
                }
                
            }else{
                console.log(`\n【${$.name}---喂养】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_feed() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/pet/feed`,`advLength=D064C56B00058F20&numCount=D064C56B00058F20`);
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---喂养提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---喂养】: ${result.msg}`);
                await $.wait(Math.floor(Math.random()*(32000-28000+1000)+28000))
                await yhxq_feed_state()
            }else{
                console.log(`\n【${$.name}---喂养】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_expedition() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/expedition/pet`);
    $.get(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---探索提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---探索状态】: \n---探索时长：${result.data.expeditionTime}\n---探索收获源币：${result.data.expeditionPetGold}\n---探索收获兽币：${result.data.expeditionFireGold}\n---探索收获火源：${result.data.expeditionGoldSum}\n---探索收获碎片：${result.data.petDebris}`);
                if(Math.floor(result.data.expeditionTime/60)==0){
                    await yhxq_expedition_time()
                }
                if(result.data.expeditionPetGold>0||result.data.expeditionFireGold>0||result.data.expeditionGoldSum>0||result.data.petDebris>0){
                    await yhxq_expedition_get()
                }

            }else{
                console.log(`\n【${$.name}---探索】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_expedition_time() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/expedition/add/time`,'timeAdv=1');
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---增加探索提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---增加探索】: ${result.msg}`) 
            }else{
                console.log(`\n【${$.name}---增加探索】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_expedition_get() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/expedition/get`);
    $.get(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---领取探索提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---领取探索】: ${result.msg}`) 
            }else{
                console.log(`\n【${$.name}---领取探索】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function yhxq_power() {
  return new Promise((resolve) => {
      let request = get_request(`http://api.yuanhuoxingqiu.com/user/prop/use/power`,`propType=1&propCount=1`);
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---补充能量提示】: API查询请求失败`) 
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【${$.name}---补充能量】: ${result.msg}`) 
            }else{
                console.log(`\n【${$.name}---补充能量】: ${result.msg}`) 
            }
            
          
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}


function get_request(url,body) {
  return {
    url: `${url}`,
    headers: {
      'Accept-Language': `zh-CN,zh;q=0.8`,
      'YhxqSecurity': `5C9C393B02EB4380A5D3CE454C86ED5C`,
      'User-Agent': `${soy_yhxq_UA}`,
      'Authorization': `Bearer ${soy_yhxq_Authorization}`,
      'Host': `api.yuanhuoxingqiu.com`,
      'Connection': `Keep-Alive`,
      'Accept-Encoding': `gzip`,
      'Cache-Control': `no-cache`
    },
    body: body
  };
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