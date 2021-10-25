/*

软件名称:微信_番茄看看

项目注册地址:https://gitee.com/soy-tool/app-script/raw/master/picture/wx_fqkk.png

变量抓取:

打开小黄鸟抓包 进微信番茄看看,然后找连接上有reada/finishTask的
由于入口域名会自动变化所以只能找连接上的个别字符
找到请求头上的cookie值即可

必要变量填写:

soy_wx_fqkk_cookie

可选变量填写
soy_wx_fqkk_url
(此为域名,也是在请求头上的host值)

soy_wx_fqkk_UA
(此为User-Agent,也是在请求头上的host值)

多个cookie用 @ 或 # 或 换行 隔开

v2p配置如下：



【REWRITE】
匹配链接（正则表达式） http://m.*.shop/reada/finishTask

对应重写目标   app_wx_fqkk.js

【MITM】  
m.*.shop


cron 0 23 30 12 *

手动执行,切记需要手动过鉴权,也就是每小时第1-3篇手动阅读后在执行脚本
手动执行,切记需要手动过鉴权,也就是每小时第1-3篇手动阅读后在执行脚本
手动执行,切记需要手动过鉴权,也就是每小时第1-3篇手动阅读后在执行脚本

*/


const $ = new Env('微信_番茄看看');
const notify = $.isNode() ? require('./sendNotify') : '';
const app_soy_wx_fqkk_cookie = [],app_soy_wx_fqkk_UA=[],fqkkcount = ''
let subTitle = ``;
let status;
status = (status = ($.getval("wx_fqkk_status") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let soy_wx_fqkk_cookie = $.getdata('soy_wx_fqkk_cookie')

!(async () => {

if ($.isNode()) {
apptz = process.env.apptz;
apptx = process.env.apptx;
appyq = process.env.appyq;
    
    if(!process.env.soy_wx_fqkk_cookie&&process.env.soy_wx_fqkk_cookie==''){
        console.log(`\n【${$.name}】：未填写相对应的变量`);
        return;
    }
        
    if (process.env.soy_wx_fqkk_cookie && process.env.soy_wx_fqkk_cookie.indexOf('@') > -1) {
        soy_wx_fqkk_cookie = process.env.soy_wx_fqkk_cookie.split('@');
    } else if (process.env.soy_wx_fqkk_cookie && process.env.soy_wx_fqkk_cookie.indexOf('\n') > -1) {
        soy_wx_fqkk_cookie = process.env.soy_wx_fqkk_cookie.split('\n');
    } else if(process.env.soy_wx_fqkk_cookie && process.env.soy_wx_fqkk_cookie.indexOf('#') > -1){
        soy_wx_fqkk_cookie = process.env.soy_wx_fqkk_cookie.split('#');
    }else{
        soy_wx_fqkk_cookie = process.env.soy_wx_fqkk_cookie.split();
    };
    
    if (process.env.soy_wx_fqkk_UA && process.env.soy_wx_fqkk_UA.indexOf('@') > -1) {
        soy_wx_fqkk_UA = process.env.soy_wx_fqkk_UA.split('@');
    } else if (process.env.soy_wx_fqkk_UA && process.env.soy_wx_fqkk_UA.indexOf('\n') > -1) {
        soy_wx_fqkk_UA = process.env.soy_wx_fqkk_UA.split('\n');
    } else if(process.env.soy_wx_fqkk_UA && process.env.soy_wx_fqkk_UA.indexOf('#') > -1){
        soy_wx_fqkk_UA = process.env.soy_wx_fqkk_UA.split('#');
    }else{
        soy_wx_fqkk_UA = process.env.soy_wx_fqkk_UA.split();
    };
    
    soy_wx_fqkk_url = process.env.soy_wx_fqkk_url;
    
}else{
	if (typeof $request !== "undefined") {
    await get_appdata()
  } else{
  app_soy_wx_fqkk_cookie.push($.getdata('soy_wx_fqkk_cookie'))
  app_soy_wx_fqkk_UA.push($.getdata(`soy_wx_fqkk_UA`))
  soy_wx_fqkk_url=$.getdata(`soy_wx_fqkk_url`)
  soy_wx_fqkk_UA=$.getdata(`soy_wx_fqkk_UA`)
  
  }
apptz = $.getdata('apptz');
apptx = $.getdata('apptx');
appyq = $.getdata('appyq');
    
    let fqkkcount = ($.getval('fqkkcount') || '1');
  for (let i = 2; i <= fqkkcount; i++) {
    app_soy_wx_fqkk_cookie.push($.getdata(`soy_wx_fqkk_cookie${i}`))
    app_soy_wx_fqkk_UA.push($.getdata(`soy_wx_fqkk_UA${i}`))
   
}
}

Object.keys(soy_wx_fqkk_cookie).forEach((item) => {
        if (soy_wx_fqkk_cookie[item]) {
            app_soy_wx_fqkk_cookie.push(soy_wx_fqkk_cookie[item]);
        };
    });
    
Object.keys(soy_wx_fqkk_UA).forEach((item) => {
        if (soy_wx_fqkk_UA[item]) {
            app_soy_wx_fqkk_UA.push(soy_wx_fqkk_UA[item]);
        };
    });
    console.log(
        `=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_wx_fqkk_cookie.length} 个账号】===\n`);
    if(!apptz){apptz=true};
    if(!apptx){apptx=true};
      
for (i = 0; i < app_soy_wx_fqkk_cookie.length; i++) {
    soy_wx_fqkk_cookie=app_soy_wx_fqkk_cookie[i]
    soy_wx_fqkk_UA=app_soy_wx_fqkk_UA[i]
    if(!soy_wx_fqkk_UA){
        soy_wx_fqkk_UA='Mozilla/5.0 (Linux; Android 7.0; EDI-AL10 Build/HUAWEIEDISON-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 T7/10.11 baiduboxapp/10.11.0.13 (Baidu; P1 7.0)'
    }
    if(!soy_wx_fqkk_url){
        soy_wx_fqkk_url='m.itxiaofeng.club'
    }
    
    soy_wx_fqkk_headers={"Host": "m.itxiaofeng.club",
    "Connection": "keep-alive",
    "User-Agent": `${soy_wx_fqkk_UA}`,
    "X-Requested-With": "XMLHttpRequest",
    "Referer": "http://m.itxiaofeng.club/fast_reada/read",
    "Cookie":`${soy_wx_fqkk_cookie}`
    };
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
        //await soy_wx_fqkk_do_read()
        await soy_wx_fqkk_finishTask()
        

};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//获取ck
function get_appdata() {
   if ($request.url.indexOf("fast_reada") > -1) {
const soy_wx_fqkk_cookie = $request.headers.cookie
   if(soy_wx_fqkk_cookie){
       $.setdata(soy_wx_fqkk_cookie,`soy_wx_fqkk_cookie${status}`)
       //$.log(soy_wx_fqkk_cookie)
   }

   
  } 
}

function soy_wx_fqkk_do_read(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://${soy_wx_fqkk_url}/fast_reada/do_read?for=&zs=&pageshow&r=`,
            headers : soy_wx_fqkk_headers,
            //body : "",
        }, async(error, response, data) => {
            console.log(data)
            if(data.indexOf("jkey") > -1){
               result = JSON.parse(data)
               jkey=result.jkey
               console.log(`\n【${$.name}---获取jkey】: 获取成功,当前jkey:${jkey}`)
               await soy_wx_fqkk_fast_reada()
            }else{
                console.log(`\n【${$.name}---获取jkey】: 获取失败,尝试更换入口地址`)
            }
            
            
            resolve()
        })
    })

}

function soy_wx_fqkk_fast_reada(){
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://${soy_wx_fqkk_url}/fast_reada/do_read?for=&zs=&pageshow&r=&jkey=${jkey}`,
            headers : soy_wx_fqkk_headers,
            //body : "",
        }, async(error, response, data) => {
            console.log(data)
            result = JSON.parse(data)
            //console.log(result)
            if(data.indexOf("jkey") > -1){
                console.log(`\n【${$.name}---阅读文章】: ${result.success_msg}`)
                await $.wait(Math.floor(Math.random()*(10000-6000+1000)+6000))
                await soy_wx_fqkk_fast_reada()
            }else{
              //console.log(`\n【${$.name}---阅读文章】: ${result.success_msg}`)
              await soy_wx_fqkk_finishTask()
            }
            
            
            resolve()
        })
    })

}

function soy_wx_fqkk_finishTask(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://m.avava.shop/reada/finishTask`,
            headers : {"Host": "m.avava.shop","Origin": "http://m.avava.shop","X-Requested-With": "XMLHttpRequest","User-Agent": `${soy_wx_fqkk_UA}`,"Content-Type": "application/x-www-form-urlencoded","Referer": "http://m.avava.shop/fast_reada","cookie":`${soy_wx_fqkk_cookie}`},
            body : "readLastKey=",
        }, async(error, response, data) => {
            console.log(data)
            result = JSON.parse(data)
            if(result.code==800){
              console.log(`\n【${$.name}---阅读状态】: \n---今日已阅读次数：${result.data.infoView.num}\n---今日获得总奖励：${result.data.infoView.score}`)
              status=result.data.infoView.status
              if(status==4){
                  console.log(`\n【${$.name}---阅读状态】: ${result.data.infoView.msg}`)
              }
              if(status==3){
                  await soy_wx_fqkk_jq_reada()
                  await soy_wx_fqkk_do_read()
              }
              if(status==2){
                  console.log(`\n【${$.name}---阅读状态】: ${result.data.infoView.msg}`)
              }
              
              if(status==1){
                  if(data.indexOf('下一批')>-1){
                      console.log(`\n【${$.name}---阅读状态】: ${result.data.infoView.msg}`)
                  }else{
                    await soy_wx_fqkk_jq_reada()
                    await soy_wx_fqkk_do_read()  
                  }
                  
              }
              
            }else{
              console.log(`\n【${$.name}---阅读状态】: ${result.msg}`)
            }
            
            
            resolve()
        })
    })

}

function soy_wx_fqkk_jq_reada(){
    jq_body=`<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link data-type="checkvaildsign" rel="icon" href="data:image/ico;base64,aWNv">
    <title>加载中</title>
    <style>
        #mask {
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            display: none;
        }

        #sc {
            width: 80%;
            font-size: 4vw;
            background-color: #fff;
            margin-top: 40vh;
            margin-left: 10vw;
        }

        .sm-txt {
            font-size: 6vw;
        }

        .sm-ico {
            transform: scale(1.5);
            margin-left: 4vw !important;
        }
    </style>
</head>
<body>
<div id="text">加载中，请稍后</div>
<div id="text2"></div>
<div id="mask">
    <div id="sc">
    </div>
</div>
<script>
    // window.onerror = function (msg) {
    //     alert(msg);
    // }
    var forstr = '';
    var zs = '';
    var url = '/fast_reada/do_read?for='+forstr+'&zs='+zs;
    var _t = (navigator.userAgent.indexOf('MicroMessenger') > 0 ? '7' : '') + (new Date()).getTime().toString();
    window.jumpUrl = url;

    function get(url, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                // console.log(xhr.responseText)
                fn.call(this, xhr.responseText);
            } else {
                // window.location.replace(window.jumpUrl)
            }
        };
        xhr.send();
    }
    var timer = null;
    var point = 1;
    var task_url = false;
    window.addEventListener('pageshow', function (e) {
        // task_url = false;
        do_read();
    });
    var is_loading = false;
    function do_read(){
        console.log('do_read');
        if(is_loading){
            return;
        }
        is_loading = true;
        var time = 3000;
        var str = '';
        var jkey = localStorage.getItem('jkey');
        if (jkey) {
            str = '&jkey=' + jkey;
            setText('加载中，请稍等')
            point = 1;
            timer = setInterval(function(){
                text = '加载中，请稍等';
                point++;
                for(var i = 0; i < (point % 3) + 1; i++){
                    text += '。'
                }
                var second = 11-Math.floor(point/2);
                if(second < 0){
                    second = 0;
                }
                // text = '预计等待'+second+'秒，' + text
                setText(text);
            },500);
            localStorage.removeItem('jkey');
            time = 15000;
        }
        var loadingtimer = setTimeout(function(){
            is_loading = false
        },time)
        setText2('');
        get(window.jumpUrl + '&pageshow&r=' + Math.random() + str, function (res) {
            is_loading = false;
            clearTimeout(loadingtimer);
            var resData = JSON.parse(res);
            if(timer){
                clearInterval(timer);
                timer = null;
                setText('加载中，请稍后')
            }
            if (!resData.jkey) {
                // if (resData.check_finish) {
                //     localStorage.removeItem('jkey');
                // }
            } else {
                localStorage.setItem('jkey', resData.jkey);
            }
            if(resData.msg){
                alert(resData.msg);
            }
            if(resData.success_msg){
                setText2(resData.success_msg);
            }

            task_url = window.location.href = resData.url + (resData.url.indexOf('?') > 0 ? '&_t=' : '?_t=') + '799888';
        });
    }
    function setText(text){
        document.querySelector('#text').innerHTML = text
    }
    function setText2(text){
        document.querySelector('#text2').innerHTML = text
    }

    history.pushState(null, null, document.URL);
    history.pushState(null, null, document.URL);
    history.pushState(null, null, document.URL);
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
        history.pushState(null, null, document.URL);
        history.pushState(null, null, document.URL);
        history.pushState(null, null, document.URL);
        history.pushState(null, null, document.URL);
        // if (task_url) {
        do_read()
        // window.location.href = task_url;
        // }
    });
    try {
        window.tbsJs.onReady('{useCachedApi : "true"}', function (res) {
        })
    } catch (e) {
    }
</script>
</body>
</html>`
    return new Promise((resolve, reject) => {
        $.get({
            url : `http://${soy_wx_fqkk_url}/fast_reada/read`,
            headers : soy_wx_fqkk_headers,
            body : jq_body,
        }, async(error, response, data) => {
            console.log(data)
            
            
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