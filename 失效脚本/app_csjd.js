/*

项目名称:创视节点

项目注册地址:http://cs.clrcle.cn/api/webapp/register.html?code=ZNOBH8

必要变量:

soy_csjd_Name
#手机号/登录账号

soy_csjd_password
#登录密码


选填变量
soy_csjd_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 # 或 换行 隔开

cron 0 0,11 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_csjd.js

*/


const $ = new Env('创视节点');
const notify = $.isNode() ? require('./sendNotify') : '';

let app_soy_csjd_Name=[],app_soy_csjd_password=[],app_soy_csjd_UA=[],app_soy_csjd_VerifyId=[],subTitle=''


!(async () => {
        if ($.isNode()) {
    
    if(!process.env.soy_csjd_Name){
        console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_Name`);
        return;
    }
    if(!process.env.soy_csjd_password){
        console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_password`);
        return;
    }
	


    if (process.env.soy_csjd_password && process.env.soy_csjd_password.indexOf('@') > -1) {
        soy_csjd_password = process.env.soy_csjd_password.split('@');
    } else if (process.env.soy_csjd_password && process.env.soy_csjd_password.indexOf('\n') > -1) {
        soy_csjd_password = process.env.soy_csjd_password.split('\n');
    } else if(process.env.soy_csjd_password && process.env.soy_csjd_password.indexOf('#') > -1){
        soy_csjd_password = process.env.soy_csjd_password.split('#');
    }else{
        soy_csjd_password = process.env.soy_csjd_password.split();
    };
    Object.keys(soy_csjd_password).forEach((item) => {
        if (soy_csjd_password[item]) {
            app_soy_csjd_password.push(soy_csjd_password[item]);
        };
    });

    
    if (process.env.soy_csjd_Name && process.env.soy_csjd_Name.indexOf('@') > -1) {
        soy_csjd_Name = process.env.soy_csjd_Name.split('@');
    } else if (process.env.soy_csjd_Name && process.env.soy_csjd_Name.indexOf('\n') > -1) {
        soy_csjd_Name = process.env.soy_csjd_Name.split('\n');
    } else if(process.env.soy_csjd_Name && process.env.soy_csjd_Name.indexOf('#') > -1){
        soy_csjd_Name = process.env.soy_csjd_Name.split('#');
    }else{
        soy_csjd_Name = process.env.soy_csjd_Name.split();
    };
    Object.keys(soy_csjd_Name).forEach((item) => {
        if (soy_csjd_Name[item]) {
            app_soy_csjd_Name.push(soy_csjd_Name[item]);
        };
    });

	if(!process.env.soy_csjd_UA){
		console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_UA ,将默认分配`);
	}else{
	if (process.env.soy_csjd_UA && process.env.soy_csjd_UA.indexOf('@') > -1) {
        soy_csjd_UA = process.env.soy_csjd_UA.split('@');
    } else if (process.env.soy_csjd_UA && process.env.soy_csjd_UA.indexOf('\n') > -1) {
        soy_csjd_UA = process.env.soy_csjd_UA.split('\n');
    } else if(process.env.soy_csjd_UA && process.env.soy_csjd_UA.indexOf('#') > -1){
        soy_csjd_UA = process.env.soy_csjd_UA.split('#');
    }else{
        soy_csjd_UA = process.env.soy_csjd_UA.split();
    };
    Object.keys(soy_csjd_UA).forEach((item) => {
        if (soy_csjd_UA[item]) {
            app_soy_csjd_UA.push(soy_csjd_UA[item]);
        };
    }); 
    
	}
    
}else{
    
    
    if(!$.getdata('soy_csjd_Name')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_Name`);
        return;
    }
    if(!$.getdata('soy_csjd_password')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_password`);
        return;
    }
    
    if ($.getdata('soy_csjd_password') && $.getdata('soy_csjd_password').indexOf('@') > -1) {
        app_soy_csjd_password = $.getdata('soy_csjd_password').split('@');
    } else if ($.getdata('soy_csjd_password') && $.getdata('soy_csjd_password').indexOf('\n') > -1) {
        app_soy_csjd_password = $.getdata('soy_csjd_password').split('\n');
    } else if($.getdata('soy_csjd_password') && $.getdata('soy_csjd_password').indexOf('#') > -1){
        app_soy_csjd_password = $.getdata('soy_csjd_password').split('#');
    }else{
        app_soy_csjd_password = $.getdata('soy_csjd_password').split();
    };
    
    
    if ($.getdata('soy_csjd_Name') && $.getdata('soy_csjd_Name').indexOf('@') > -1) {
        app_soy_csjd_Name = $.getdata('soy_csjd_Name').split('@');
    } else if ($.getdata('soy_csjd_Name') && $.getdata('soy_csjd_Name').indexOf('\n') > -1) {
        app_soy_csjd_Name = $.getdata('soy_csjd_Name').split('\n');
    } else if($.getdata('soy_csjd_Name') && $.getdata('soy_csjd_Name').indexOf('#') > -1){
        app_soy_csjd_Name = $.getdata('soy_csjd_Name').split('#');
    }else{
        app_soy_csjd_Name = $.getdata('soy_csjd_Name').split();
    };
    
    if(!$.getdata('soy_csjd_UA')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_UA ,将默认分配`);
    }else{
       if ($.getdata('soy_csjd_UA') && $.getdata('soy_csjd_UA').indexOf('@') > -1) {
        app_soy_csjd_UA = $.getdata('soy_csjd_UA').split('@');
    } else if ($.getdata('soy_csjd_UA') && $.getdata('soy_csjd_UA').indexOf('\n') > -1) {
        app_soy_csjd_UA = $.getdata('soy_csjd_UA').split('\n');
    } else if($.getdata('soy_csjd_UA') && $.getdata('soy_csjd_UA').indexOf('#') > -1){
        app_soy_csjd_UA = $.getdata('soy_csjd_UA').split('#');
    }else{
        app_soy_csjd_UA = $.getdata('soy_csjd_UA').split();
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
    console.log(`===【共 ${app_soy_csjd_Name.length} 个账号】===\n`);
      
for (i = 0; i < app_soy_csjd_Name.length; i++) {
    soy_csjd_Name=app_soy_csjd_Name[i]
    soy_csjd_password=app_soy_csjd_password[i]
    soy_csjd_UA=app_soy_csjd_UA[i]
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    if(!soy_csjd_UA){
	    //console.log(`\n【${$.name}】：开始默认分配 soy_csjd_UA`);
		soy_csjd_UA='Redmi Note 5(Android/8.1.0) (com.cs.csjd/1.0.2) Weex/0.26.0 1080x2210'
	}
    console.log(`\n开始【第 ${$.index} 个账号---开始随机分配VerifyId】`);
    await soy_csjd_login()
    await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
    
    
};

/*if(notify){
   await notify.sendNotify($.name, subTitle) 
}*/




})()
.catch((e) => $.logErr(e))
.finally(() => $.done());

function Id() {
  let random = 'ABCabc123DEFde456fGHJghj789KMNkmnO012PQopq345RSTrst678UVWuvw90XYZxyz123';
  let max=random.length
  let VerifyId = '';
  for (let i = 0; i < 32; i++) {
    VerifyId += random.charAt(Math.floor(Math.random() * max));
  }
  return VerifyId
}

//登录
function soy_csjd_login(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cs.clrcle.cn/api/app/authentication/login`,
            headers : {"Authorization": "","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","User-Agent":soy_csjd_UA,"Connection":"keep-alive"},
            body : `loginName=${soy_csjd_Name}&password=${soy_csjd_password}&verifyId=${Id()}`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                
                token=result.data
                console.log(`\n【${$.name}---账号 ${$.index} 登录】: 获取token成功`)
                //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                
                await soy_csjd_receiveIncome()
                await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                await soy_csjd_personalDetails()
                await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                if(ad_state==1){
                    console.log(`\n----------\n\n【${$.name}---账号 ${$.index} 观看广告】: 今日已完成任务`)
                    
                }else{
                    console.log(`\n----------\n\n【${$.name}---账号 ${$.index} 做任务】: 观看广告`)
                    await soy_csjd_addAdvertDayCount()
                }
                
                //await soy_csjd_logoutt()
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 登录】: ${result.msg}`)
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
//领取收益
function soy_csjd_receiveIncome(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cs.clrcle.cn/api/app/api/income/receiveIncome`,
            headers : {"Authorization": `${token}`,"user-agent": `${soy_csjd_UA}`,"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8","Connection":"keep-alive"},
            body : '',
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                
                console.log(`\n【${$.name}---账号 ${$.index} 每日收益】: 获取成功`)
                
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 每日收益】: ${result.msg}`)
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
//当前信息
function soy_csjd_personalDetails(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://cs.clrcle.cn/api/app/api/customer_ext/personalDetails`,
            headers : {"Authorization": `${token}`,"user-agent": `${soy_csjd_UA}`,"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8","Connection":"keep-alive",},
            //body : '',
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                ad_state=result.data.isDailyAdvert
                money=Math.trunc(result.data.cny)
                
                //console.log(`\n【${$.name}---账号 ${$.index} 个人信息】: \n---用户昵称：${result.data.nickName}\n---当前节点：${result.data.customerNode}\n---今日收益：${result.data.dailyIncome}\n---累计收益：${result.data.totalIncome}\n---剩余余额：${result.data.cny}\n---今日看广告：${result.data.advertDayCount} 条`)
                
                if(ad_state==1){
                    console.log(`\n----------\n\n【${$.name}---账号 ${$.index} 观看广告】: 今日已完成任务`)
                    
                    //if(is_Withdrawal){
                        //console.log(`\n【${$.name}---账号 ${$.index} 个人信息】: \n---用户昵称：${result.data.nickName}\n---当前节点：${result.data.customerNode}\n---今日收益：${result.data.dailyIncome}\n---累计收益：${result.data.totalIncome}\n---剩余余额：${result.data.cny}\n---今日看广告：${result.data.advertDayCount} 条`)
                    //}else{
                        if(money>=10){
                            await $.wait(Math.floor(Math.random() * (3000 - 2000 + 1000) + 2000))
                            await soy_csjd_rawAlipay()
                        }else{
                           console.log(`\n【${$.name}---账号 ${$.index} 个人信息】: \n---用户昵称：${result.data.nickName}\n---当前节点：${result.data.customerNode}\n---今日收益：${result.data.dailyIncome}\n---累计收益：${result.data.totalIncome}\n---剩余余额：${result.data.cny}\n---今日看广告：${result.data.advertDayCount} 条`) 
                        }
                        
                    //}
                    
                    //
                    
                }else{
                    console.log(`\n----------\n\n【${$.name}---账号 ${$.index} 做任务】: 观看广告`)
                    await soy_csjd_addAdvertDayCount()
                    await $.wait(Math.floor(Math.random() * (35000 - 28000 + 1000) + 28000))
                    await soy_csjd_personalDetails()
                }
                
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 个人信息】: ${result.msg}`)
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
//看广告
function soy_csjd_addAdvertDayCount(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cs.clrcle.cn/api/app/api/customer_ext/addAdvertDayCount`,
            headers : {"Authorization": `${token}`,"user-agent": `${soy_csjd_UA}`,"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8","Connection":"keep-alive",},
            body : 'verifyId=',
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                if(result.msg=='操作成功'){
                    console.log(`\n【${$.name}---账号 ${$.index} 观看广告】: 操作成功`)
                    await $.wait(Math.floor(Math.random() * (35000 - 28000 + 1000) + 28000))
                    await soy_csjd_addAdvertDayCount()
                }else{
                    console.log(`\n【${$.name}---账号 ${$.index} 观看广告】: ${result.msg}`)
                }
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 观看广告】: ${result.msg}`)
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

function soy_csjd_logoutt(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cs.clrcle.cn/api/app/authentication/logout`,
            headers : {"Authorization": `${token}`,"user-agent": `${soy_csjd_UA}`,"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8","Connection":"keep-alive",},
            body : '',
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                console.log(`\n【${$.name}---账号 ${$.index} 退出登录】: ${result.msg}`)
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 退出登录】: ${result.msg}`)
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

function soy_csjd_rawAlipay(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://cs.clrcle.cn/api/app/api/withdrawLog/drawAlipay`,
            headers : {"Authorization": `${token}`,"user-agent": `${soy_csjd_UA}`,"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8","Connection":"keep-alive",},
            body : `amount=10&securityPassword=`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.code==0){
                console.log(`\n【${$.name}---账号 ${$.index} 提现】: 提现10元, ${result.msg}`)
                await soy_csjd_personalDetails()
                
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 提现】: ${result.msg}`)
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