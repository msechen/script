/*
  讨论tg群:https://t.me/joinchat/8D2_IDN5t0A2ZmM1

  tg频道:https://t.me/soy_pull

软件名称:一起养熊猫

收益:不祥

软件下载: https://tool-s.lanzoui.com/iE6kPsn651i

小黄鸟变量抓取:

开抓包开软件,找链接 https://cattle03.yuan9.cn/api/User/loginUserInfo
他的响应头里有个 cp 的值就是

或者在买一个熊猫找链接 https://cattle03.yuan9.cn/api/Cattle/feed
他的响应头里有个 cp 的值就是

变量填写:
export soy_yqyxm_cp=''

多个广告用 @ 或 # 或 换行 隔开

v2p配置如下：

【REWRITE】
匹配链接（正则表达式） https://cattle03.yuan9.cn/api

对应重写目标
https://gitee.com/soy-tool/app-script/blob/master/app_yqyxm.js 或 app_yqyxm.js

【MITM】  
cattle03.yuan9.cn

重写 
空地购买一只熊猫

cron 0-59/10 10-14,19-23 * * *
0-59可改成*,如果想其他时间段执行自行修改,最好不要太频繁搞
*/


const $ = new Env('一起养熊猫');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0; //响应日志开关,默认关闭
const app_soy_yqyxm_cp = [],kzkcount = ''
let subTitle = ``;
let status;
status = (status = ($.getval("yqyxm_status") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let soy_yqyxm_cp = $.getdata('soy_yqyxm_cp')



!(async () => {

if ($.isNode()) {
apptz = process.env.apptz;//是否推送，默认true
apptx = process.env.apptx;//默认提现假,需要自行修改变量
appyq = process.env.appyq;//默认邀请,需要自行修改变量
    
    if(!process.env.soy_yqyxm_cp&&process.env.soy_yqyxm_cp==''){
        console.log(`\n【${$.name}】：未填写相对应的变量`);
        return;
    }
        
    if (process.env.soy_yqyxm_cp && process.env.soy_yqyxm_cp.indexOf('@') > -1) {
        soy_yqyxm_cp = process.env.soy_yqyxm_cp.split('@');
    } else if (process.env.soy_yqyxm_cp && process.env.soy_yqyxm_cp.indexOf('\n') > -1) {
        soy_yqyxm_cp = process.env.soy_yqyxm_cp.split('\n');
    } else if(process.env.soy_yqyxm_cp && process.env.soy_yqyxm_cp.indexOf('#') > -1){
        soy_yqyxm_cp = process.env.soy_yqyxm_cp.split('#');
    }else{
        soy_yqyxm_cp = process.env.soy_yqyxm_cp.split();
    };
    
    Object.keys(soy_yqyxm_cp).forEach((item) => {
        if (soy_yqyxm_cp[item]) {
            app_soy_yqyxm_cp.push(soy_yqyxm_cp[item]);
        };
    });


    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};
    
}else{
	if (typeof $request !== "undefined") {
    await get_appdata()
  } else{
  app_soy_yqyxm_cp.push($.getdata('soy_yqyxm_cp'))
  
  }
apptz = $.getdata('apptz');//是否推送，默认true
apptx = $.getdata('apptx');//默认提现假,需要自行修改变量
appyq = $.getdata('appyq');//默认邀请,需要自行修改变量
    
    let yqyxm_count = ($.getval('yqyxm_count') || '1');
  for (let i = 2; i <= yqyxm_count; i++) {
    app_soy_yqyxm_cp.push($.getdata(`soy_yqyxm_cp${i}`))
   
}
}
    console.log(
        `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} =====================\n`
    );

for (i = 0; i < app_soy_yqyxm_cp.length; i++) {
    soy_yqyxm_cp=app_soy_yqyxm_cp[i]
    
    soy_yqyxm_headers={"Host": "cattle03.yuan9.cn",
    "cp": soy_yqyxm_cp,
    "content-type": "application/x-www-form-urlencoded"};
    app_body =["data=QSrgnZJJGEtTi60z5ue%2BHA%3D%3D","data=kRLLQqJMZDYfrX8fewFVaA%3D%3D","data=%2B2jjTPTGYvTmMcWEVAj9tQ%3D%3D","data=7wzIwp7KwHKnmFn12m0QNA%3D%3D","data=FcuneD1atWET1DFD3MVT%2Fw%3D%3D","data=Giwmsu4utl86U8o7dHM84Q%3D%3D","data=UEQVvoXw6KVh%2B2tJUqRlfQ%3D%3D","data=UK1rbpeqPps20PoleKKYgg%3D%3D","data=K3vqiRCFk20aGyaXSDXrog%3D%3D"]
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    
    //查询土地解锁状态
    await soy_yqyxm_Cattle();
    
    //购买熊猫
    for(let mxm=0;mxm<9;mxm++){
        await soy_yqyxm_feed(app_body[mxm])
        await $.wait(1000)
    }
    
    //加速成长
    for(let js=0;js<9;js++){
        let SpeedUpCoins=0
        if(js==0||js==1||js==2){
            SpeedUpCoins=15
        }
        if(js==3||js==4||js==5){
            SpeedUpCoins=30
        }
        if(js==6||js==7||js==8){
            SpeedUpCoins=45
        }
        
        await soy_yqyxm_SpeedUp(app_body[js],SpeedUpCoins)
        await $.wait(1000)
    }
    
    //治疗熊猫
    for(let zl=0;zl<9;zl++){
        await soy_yqyxm_health(app_body[zl])
        await $.wait(1000)
    }
    
    //收取奖励
    Harvest_data=["data=YrTLtJZg2FrwIJ2fMgUMmFZtjDSGtnELDTq%2BCXT8W1g%3D","data=xBae8VaLF4Erd%2BCGSCh2klZtjDSGtnELDTq%2BCXT8W1g%3D","data=s0ZFagJTn6bjH%2Fi1auCVWlZtjDSGtnELDTq%2BCXT8W1g%3D","data=flzMfcBOgkE8inRCEV5O4lZtjDSGtnELDTq%2BCXT8W1g%3D","data=HJQbkhGnwBEWcX9PgPFjkFZtjDSGtnELDTq%2BCXT8W1g%3D","data=g8H409OflOPuuDvNJkFgVlZtjDSGtnELDTq%2BCXT8W1g%3D","data=cLIFT6wYYu%2Fec3ntUJG9clZtjDSGtnELDTq%2BCXT8W1g%3D","data=h6cztR88qT%2BcQfKCud3GglZtjDSGtnELDTq%2BCXT8W1g%3D","data=QTcyJ5KVoT07TVYCIZYiblZtjDSGtnELDTq%2BCXT8W1g%3D"]
    for(let sq=0;sq<9;sq++){
        await soy_yqyxm_Harvest(Harvest_data[sq])
        await $.wait(1000)
    }
    
    await soy_yqyxm_ad()

};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};
//if(appyq){await soy_kzk_yq()}

})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//获取ck
function get_appdata() {
   if ($request.url.indexOf("Cattle") > -1) {
const soy_yqyxm_cp = $request.headers.cp
   if(soy_yqyxm_cp){
       $.setdata(soy_yqyxm_cp,`soy_yqyxm_cp${status}`)
       $.log(soy_yqyxm_cp)
   }
  } 
}

//看广告奖励
function soy_yqyxm_ad() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cattle03.yuan9.cn/api/Incident/FishCoin`,
            headers : soy_yqyxm_headers,
            body : 'data=qZSmCidf6GMUYRTxvDvpq7QDiWlcg4bj6kQ49amkM86Mabss1Nw1%2FfmkUR3iC5ws4bq5SlEg4W88GvKo016FYg%3D%3D',
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---看广告奖励】: 获得 ${result.data.updateCoin} 金币`)
            }else{
               console.log(`\n【${$.name}---看广告奖励】: ${result.msg}`) 
            }
            
            resolve()
        })
    })
}

//收取熊猫奖励
function soy_yqyxm_Harvest(Harvest_body) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cattle03.yuan9.cn/api/Cattle/Harvest`,
            headers : soy_yqyxm_headers,
            body : Harvest_body,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---收取熊猫奖励】: 获得 ${result.data.updateGold} 红包券`)
            }else{
               console.log(`\n【${$.name}---收取熊猫奖励】: ${result.msg}`) 
            }
            
            resolve()
        })
    })
}
//治疗熊猫
function soy_yqyxm_health(health_body) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cattle03.yuan9.cn/api/Cattle/health`,
            headers : soy_yqyxm_headers,
            body : health_body,
        }, async(error, response, data) => {
            //console.log(data)
            
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---治疗熊猫】: 治疗成功`)
            }else{
               console.log(`\n【${$.name}---治疗熊猫】: ${result.msg}`) 
            }
            
            resolve()
        })
    })
}
//加速成长
function soy_yqyxm_SpeedUp(SpeedUp_body,updateCoin) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cattle03.yuan9.cn/api/Cattle/SpeedUp`,
            headers : soy_yqyxm_headers,
            body : SpeedUp_body,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---加速成长】: 花费 ${updateCoin} 金币加速成功`)
            }else{
               console.log(`\n【${$.name}---加速成长】: ${result.msg}`) 
            }
            
            resolve()
        })
    })
}
//购买熊猫
function soy_yqyxm_feed(feed_body) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://cattle03.yuan9.cn/api/Cattle/feed`,
            headers : soy_yqyxm_headers,
            body : feed_body,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---购买熊猫】: 花费 ${result.data.cattle.seconds} 金币购买熊猫成功`)
                if(result.data.updateCoin!=0){
                    console.log(`\n【${$.name}---购买熊猫】: 购买熊猫获得幸运奖励 ${result.data.updateCoin} 金币`)
                }
                if(result.data.updateGold!=0){
                    console.log(`\n【${$.name}---购买熊猫】: 购买熊猫获得幸运奖励 ${result.data.updateGold} 红包券`)
                }
                
            }else{
               console.log(`\n【${$.name}---购买熊猫】: ${result.msg}`) 
            }
            
            resolve()
        })
    })
}
//土地解锁状态
function soy_yqyxm_Cattle() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://cattle03.yuan9.cn/api/Cattle/listCattle`,
            headers : soy_yqyxm_headers,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                if(result.data.items.length==9){
                    console.log(`\n【${$.name}---土地状态】: 9 块土地已全部解锁`)
                }else{
                    console.log(`\n【${$.name}---土地状态】: 土地未完全解锁`)
                    console.log(`\n【${$.name}---土地状态】: 执行解锁土地任务`)
                    await soy_yqyxm_ad()
                    Cattle_data=["data=xBae8VaLF4Erd%2BCGSCh2ku2Q5%2B8wOc3SOCRRuORLCmU%3D","data=h6cztR88qT%2BcQfKCud3Ggu2Q5%2B8wOc3SOCRRuORLCmU%3D","data=s0ZFagJTn6bjH%2Fi1auCVWu2Q5%2B8wOc3SOCRRuORLCmU%3D","data=flzMfcBOgkE8inRCEV5O4u2Q5%2B8wOc3SOCRRuORLCmU%3D","data=HJQbkhGnwBEWcX9PgPFjkO2Q5%2B8wOc3SOCRRuORLCmU%3D","data=g8H409OflOPuuDvNJkFgVu2Q5%2B8wOc3SOCRRuORLCmU%3D","data=QTcyJ5KVoT07TVYCIZYibu2Q5%2B8wOc3SOCRRuORLCmU%3D","data=YrTLtJZg2FrwIJ2fMgUMmO2Q5%2B8wOc3SOCRRuORLCmU%3D","data=cLIFT6wYYu%2Fec3ntUJG9cu2Q5%2B8wOc3SOCRRuORLCmU%3D"]
                    
                    for(let td=0;td<9;td++){
                        await soy_yqyxm_unlock(Cattle_data[td])
                    }
                }
            }else{
                console.log(`\n【${$.name}---土地状态】: ${result.msg}`)
            }
            resolve()
        })
    })
}
//解锁土地
function soy_yqyxm_unlock(unlock_body) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cattle03.yuan9.cn/api/Cattle/unlock`,
            headers : soy_yqyxm_headers,
            body : unlock_body,
        }, async(error, response, data) => {
            //console.log(unlock_body)
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==200){
                console.log(`\n【${$.name}---解锁土地】: 花费 ${result.data.updateGold} 金币解锁土地`)
            }else{
               console.log(`\n【${$.name}---解锁土地】: ${result.msg}`) 
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