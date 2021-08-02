/*

软件名称:美刻精灵 (安卓版) 一天不固定,大概0.5-0.8不等

软件下载地址: https://gitee.com/soy-tool/app-script/blob/master/picture/mkjl.png

作者qq:1056211611

只做那个只做领取生产气泡和语言气泡和活跃气泡

语言红包一套是14还是15个来的,生产气泡 0 12 18 刷新,每次15个

不会抓包的请绕道,谢谢..不会写 v2p 自动抓取数据包,所以v2p的自行代理抓包然后填变量

不会自己获取 v2p 代理抓包的数据，所以都统一的自行添加

需要变量介绍:

抓包首页 连接中包含 getUserInfo 或者 getUserCominlist 等 的请求体
export soy_MK_user_boby=''

开语言红包请求体,(因为有sign验证所以需要)
soy_MK_lang_boby=''

看视频广告的请求体 链接包含 reward_video/reward 如果找不到推出app重新打开
export soy_MK_message=''

cron 5-59/5 0,12,18 * * *

因为广告是15秒刷新,但是这样重发发现有时有效有时无效所以cron设置这个


多号 除了 soy_MK_message 变量 用 @ 或 & 隔开 其他的可以  @ 或 & 或 换行 隔开

由于请求体都是加密,不搞解密,估计兑换和提现也是要添加请求体

*/


const $ = new Env('美刻精灵');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0; //响应日志开关,默认关闭
let subTitle = ``,app_MK_auth=[],soy_MK_auth='',soy_MK_message='',app_MK_message=[],app_MK_lang_boby=[],soy_MK_lang_boby='',soy_MK_user_boby='',app_MK_user_boby=[];


!(async () => {
    if ($.isNode()) {
    apptz = process.env.mkapptz;//是否推送，默认true
    apptx = process.env.mkapptx;//默认提现假,需要自行修改变量 RL_tx=true/false
    
    if (process.env.soy_MK_message && process.env.soy_MK_message.indexOf('@') > -1) {
        MK_message = process.env.soy_MK_message.split('@');
    }else if(process.env.soy_MK_message && process.env.soy_MK_message.indexOf('&') > -1){
        MK_message = process.env.soy_MK_message.split('&');
    }else{
        MK_message = process.env.soy_MK_message.split();
    };
    
    if (process.env.soy_MK_lang_boby && process.env.soy_MK_lang_boby.indexOf('@') > -1) {
        MK_lang_boby = process.env.soy_MK_lang_boby.split('@');
    } else if (process.env.soy_MK_lang_boby && process.env.soy_MK_lang_boby.indexOf('\n') > -1) {
        MK_lang_boby = process.env.soy_MK_lang_boby.split('\n');
    } else if(process.env.soy_MK_lang_boby && process.env.soy_MK_lang_boby.indexOf('&') > -1){
        MK_lang_boby = process.env.soy_MK_lang_boby.split('&');
    }else{
        MK_lang_boby = process.env.soy_MK_lang_boby.split();
    };
    
    if (process.env.soy_MK_user_boby && process.env.soy_MK_user_boby.indexOf('@') > -1) {
        MK_user_boby = process.env.soy_MK_user_boby.split('@');
    } else if (process.env.soy_MK_user_boby && process.env.soy_MK_user_boby.indexOf('\n') > -1) {
        MK_user_boby = process.env.soy_MK_user_boby.split('\n');
    } else if(process.env.soy_MK_user_boby && process.env.soy_MK_user_boby.indexOf('&') > -1){
        MK_user_boby = process.env.soy_MK_user_boby.split('&');
    }else{
        MK_user_boby = process.env.soy_MK_user_boby.split();
    };
   
    
    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};
    
} else {
    apptz = $.getdata('mkapptz');//是否推送，默认true
    apptx = $.getdata('mkapptx');//默认提现假,需要自行修改变量 RL_tx=true/false
    
    if($.getdata('soy_MK_message')&&$.getdata('soy_MK_message').indexOf('@')>-1){
        MK_message=$.getdata('soy_MK_message').split('@');
    }else if($.getdata('soy_MK_message')&&$.getdata('soy_MK_message').indexOf('&')>-1){
        MK_message=$.getdata('soy_MK_message').split('&');
    }else{
        MK_message=$.getdata('soy_MK_message').split();
    };
    
    if($.getdata('soy_MK_lang_boby')&&$.getdata('soy_MK_lang_boby').indexOf('@')>-1){
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split('@');
    }else if($.getdata('soy_MK_lang_boby')&&$.getdata('soy_MK_lang_boby').indexOf('\n')>-1){
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split('\n');
    }else if($.getdata('soy_MK_lang_boby')&&$.getdata('soy_MK_lang_boby').indexOf('&')>-1){
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split('&');
    }else{
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split();
    };
    
    if($.getdata('soy_MK_user_boby')&&$.getdata('soy_MK_user_boby').indexOf('@')>-1){
        MK_user_boby=$.getdata('soy_MK_user_boby').split('@');
    }else if($.getdata('soy_MK_user_boby')&&$.getdata('soy_MK_user_boby').indexOf('\n')>-1){
        MK_user_boby=$.getdata('soy_MK_user_boby').split('\n');
    }else if($.getdata('soy_MK_user_boby')&&$.getdata('soy_MK_user_boby').indexOf('&')>-1){
        MK_user_boby=$.getdata('soy_MK_user_boby').split('&');
    }else{
        MK_user_boby=$.getdata('soy_MK_user_boby').split();
    };
    
    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};

}

//############################
//配置区域

Object.keys(MK_message).forEach((item) => {
    if (MK_message[item]) {
        app_MK_message.push(MK_message[item]);
    }});
Object.keys(MK_lang_boby).forEach((item) => {
    if (MK_lang_boby[item]) {
        app_MK_lang_boby.push(MK_lang_boby[item]);
    }});
Object.keys(MK_user_boby).forEach((item) => {
    if (MK_user_boby[item]) {
        app_MK_user_boby.push(MK_user_boby[item]);
    }});

if(!app_MK_user_boby||app_MK_user_boby==''){
        console.log(`\n【${$.name}】：未填写相对应的变量,或者填写错误`);
        return;
    }/*else if(app_MK_user_boby.length!=app_MK_message.length||app_MK_user_boby.length!==app_MK_lang_boby.length){
       console.log(`\n【${$.name}】：需要的变量数量不匹配`);
       return; 
    }*/
console.log(`\n============ 共${app_MK_user_boby.length}个账号 ============\n`);



//====================================

for (let i = 0; i < app_MK_user_boby.length; i++) {
    
    soy_MK_auth=app_MK_auth[i];
    soy_MK_message=app_MK_message[i];
    soy_MK_lang_boby=app_MK_lang_boby[i];
    soy_MK_user_boby=app_MK_user_boby[i]
    //去除message中的换行
    soy_MK_message=soy_MK_message.replace(/\n/, "");
    
    soy_MK_user_headers={
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": MK_user_boby.length,
        "Host": "new.api.miikk.com",};
    
    $.index = i + 1;
    
    console.log(`\n开始【账号 ${$.index} 任务】`);
    
    await mk_showReceiveCoinNum();
    await mk_Openbubble();
    await mk_upbubble()
    await mk_token(); 
    
    let T = new Date();
    T.getHours()
    T.getMinutes()
    if(T.getHours()==18&&T.getMinutes()>=45){await mk_qp();}
    //await mk_sell()
}

//推送消息
if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};

})()
.catch((e) => $.logErr(e))
.finally(() => $.done());



//出售精灵币
function mk_sell() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/Stone/turnBalance`,
            headers : soy_MK_user_headers,
            body : soy_MK_user_boby,
        }, async(error, response, data) => {
            if(error){
                //console.log("⛔️API查询请求失败，请检查自身设备网络情况");
            }else{
            console.log(data);
            let result = JSON.parse(data);
            if(result.code==200){
                if(result.data.content!==''){
                    console.log(`\n【账号 ${$.index}---广告次数】: 获取失败`);
                }
               // CoinNum = result.data.content.substring(result.data.content.indexOf("剩余")+2,result.data.content.indexOf("次）"));
                //CoinNum = 5
                console.log(`\n【账号 ${$.index}---广告次数】: ${result.data.content}`);
                //console.log(Num)
                
            }else{
                console.log(`\n【账号 ${$.index}---广告次数】: ${result.msg}`);
            }
            
            }
            resolve();
        });
    });
};

//查看精灵币数量
function mk_showReceiveCoinNum() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/Coin/showReceiveCoinNum`,
            headers : soy_MK_user_headers,
            body : soy_MK_user_boby,
        }, async(error, response, data) => {
            if(error){
                console.log("⛔️API查询请求失败，请检查自身设备网络情况");
            }else{
            //console.log(data);
            let result = JSON.parse(data);
            if(result.code==200){
                if(result.data.content==''){
                    console.log(`\n【账号 ${$.index}---广告次数】: 获取失败`);
                }else{
                   console.log(`\n【账号 ${$.index}---广告次数】: ${result.data.content}`); 
                }
                
            }else{
                console.log(`\n【账号 ${$.index}---广告次数】: ${result.msg}`);
            }
            
            }
            resolve();
        });
    });
};

//上报气泡数据
function mk_upbubble() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/Coin/receiveCoin`,
            //headers : MK_headers,
            body : soy_MK_message,
        }, async(error, response, data) => {
            //console.log(data);
            if(error){
                //console.log("⛔️API查询请求失败，请检查自身设备网络情况");
            }else{
               
            let result = JSON.parse(data);
            console.log(result);
            }
            resolve();
        });
    });
};

//开广告气泡
function mk_Openbubble() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/`,
            //headers : MK_headers,
            body : soy_MK_message,
        }, async(error, response, data) => {
            if(error){
                console.log("⛔️API查询请求失败，请检查自身设备网络情况");
            }else{
               //console.log(data);
            let result = JSON.parse(data);
            if(result.code==60007){
                console.log(`\n【账号 ${$.index}---看视频广告】: ✅ 励激广告奖励获取成功`);
            }else{
                console.log(`\n【账号 ${$.index}---看视频广告】: ❌ 激励广告奖励获取失败,时间未到或者已上限`);
            }; 
            }
            resolve();
        });
    });
};

//获取语言token
function mk_token() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://voiceapi.xinliangxiang.com/v1/user/login`,
            headers : {
                "Host": "voiceapi.xinliangxiang.com",
                //"authorization": MK_auth,
                "user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36",
                "content-type": "application/x-www-form-urlencoded",
                "content-length": soy_MK_lang_boby.length,},
            body : soy_MK_lang_boby,
        }, async(error, response, data) => {
            if(error){
                console.log("⛔️API查询请求失败，请检查自身设备网络情况");
            }else{
              //console.log(data);
            let result = JSON.parse(data);
            if(result.code==200){
                token=result.data.token;
                await mk_Readad();
                
            }else{
                console.log(`\n【账号 ${$.index}---上传语音】: ❌ ${result.msg}`);
            }; 
            };
            resolve();
        });
    });
};
//获取语言气泡
function mk_Readad() {
    return new Promise((resolve, reject) => {
        //console.log(token)
        $.post({
            url : `http://voiceapi.xinliangxiang.com/v1/ad/single`,
            headers : {"Host": "voiceapi.xinliangxiang.com",
            "authorization": 'Bearer '+token,
            "user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36",
            "content-type": "application/x-www-form-urlencoded",
            "content-length": 5,   
            },
            body : 'data=',
        }, async(error, response, data) => {
            let result = JSON.parse(data);
            if(result.code==200){
                adContent=result.data.adContent;
                logId=result.data.logId;
                titleId=result.data.titleId;
                sloganId=result.data.sloganId;
                pageId=result.data.pageId;
                adId=result.data.adId;
                receive_boby=`data=%7B%22adId%22%3A%22${adId}%22%2C%22fromPage%22%3A2%2C%22isHelpRead%22%3A0%2C%22logId%22%3A${logId}%2C%22pageId%22%3A%22${pageId}%22%2C%22platform%22%3A1%2C%22sloganId%22%3A%22${sloganId}%22%2C%22titleId%22%3A%22${titleId}%22%2C%22voiceContent%22%3A%22${encodeURI(adContent)}%E3%80%82%5Cn%22%7D`;
                console.log(`\n【账号 ${$.name}---语音广告词】: 获取语音成功,语音词：${adContent}`);
                await mk_receive();
            }else{
                console.log(`\n【账号 ${$.index}---语音广告词】: ❌ ${result.msg}`);
            };

            resolve();
        });
    });
};

function mk_receive() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://voiceapi.xinliangxiang.com/v1/ad/spot-voice`,
            headers : {"Host": "voiceapi.xinliangxiang.com",
            "authorization": "Bearer "+token,
            "user-agent": "Mozilla/5.0 (Linux; Android 10; SKW-A0 Build/SKYW2103030CN00MQ5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36",
            "content-type": "application/x-www-form-urlencoded",
            "content-length": receive_boby.length,},
            body : receive_boby,
        }, async(error, response, data) => {
            let result = JSON.parse(data);
            if(result.code==200){
                console.log(`\n【账号 ${$.index}---领取语言广告】: ✅ 领取成功`);
                
            }else{
                console.log(`\n【账号 ${$.index}---领取语言广告】: ❌ ${result.msg}`);
            };

            resolve();
        });
    });
};
//领活跃气泡
function mk_qp() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/Mct/receiveMct`,
            headers : soy_MK_user_headers,
            body : soy_MK_user_boby,
        }, async(error, response, data) => {
            let result = JSON.parse(data);
            //console.log(data)
            if(result.code==200){
                console.log(`\n【账号 ${$.index}---领活跃度气泡】: ✅ 领取成功`);
                
            }else{
                console.log(`\n【账号 ${$.index}---领活跃度气泡】: ❌ ${result.msg}`);
            };

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