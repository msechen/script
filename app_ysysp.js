/*

软件名称:莹石云视频

项目注册地址:各大应用商城搜索 莹石云视频 再不会就百度下载

变量需求,有可能抓不到,我v2p代理都抓百度东西,不知道证书问题还是啥,反正v2p重写很不友好

需要依赖()
axios库，可自行用ssh工具连接服务器进入容器安装(或自行百度解决) npm install axios
或拉此脚本:https://gitee.com/soy-tool/app-script/raw/master/axios.js

md5库，可自行用ssh工具连接服务器进入容器安装(或自行百度解决) npm install js-md5
或拉此脚本:https://gitee.com/soy-tool/app-script/raw/master/md5.js


必要变量:

soy_ysysp_username
#手机号/登录账号

soy_ysysp_Code
#属于绑定的设备信息..
#登录后必须抓包获取,抓包时在请求头里面的 fwaturecode 值,域名为 api.ys7.com 脚本都可以

soy_ysysp_password
#登录密码

多个号用 @ 或 # 或 换行 隔开


v2p配置如下(只抓取保存fwaturecode)：
##结算不行,可能v2p是不行的
【REWRITE】
匹配链接（正则表达式） https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd

对应重写目标  https://gitee.com/soy-tool/app-script/raw/master/app_ysysp.js

【MITM】  
api.ys7.com

##定时任务,有大佬说评论有时正常有时不正常,所以可以设置一小时一次

cron 0 8-22/1 * * *
#(8点到22点每隔一小时)

或

cron 0 9,13,17,21 * * *
#(9、13、17、21点执行一次)



*/


const $ = new Env('莹石云视频');
const notify = $.isNode() ? require('./sendNotify') : '';
//const axios = $.isNode() ? require("./axios") : '';
const md5 = $.isNode() ? require("./md5") : '';
let status;
status = (status = ($.getval("ysysp_status") || "1")) > 1 ? `${status}` : "";
let ysysp_count = '',app_soy_ysysp_username=[],app_soy_ysysp_password=[],app_soy_ysysp_Code=[],statue=''
let qd_state='', sc_state='', pl_state='', bd_state='', yq_state='',kp_state


!(async () => {
    if (typeof $request !== "undefined") {
        await ysysp_getdata()
    } else {
        if ($.isNode()) {
            //request=axios
    
    if(!process.env.soy_ysysp_username){
        console.log(`\n【${$.name}】：未填写相应变量 soy_ysysp_username`);
        return;
    }
    if(!process.env.soy_ysysp_password){
        console.log(`\n【${$.name}】：未填写相应变量 soy_ysysp_password`);
        return;
    }
    if(!process.env.soy_ysysp_Code){
        console.log(`\n【${$.name}】：未填写相应变量 soy_ysysp_Code`);
        return;
    }

    if (process.env.soy_ysysp_password && process.env.soy_ysysp_password.indexOf('@') > -1) {
        soy_ysysp_password = process.env.soy_ysysp_password.split('@');
    } else if (process.env.soy_ysysp_password && process.env.soy_ysysp_password.indexOf('\n') > -1) {
        soy_ysysp_password = process.env.soy_ysysp_password.split('\n');
    } else if(process.env.soy_ysysp_password && process.env.soy_ysysp_password.indexOf('#') > -1){
        soy_ysysp_password = process.env.soy_ysysp_password.split('#');
    }else{
        soy_ysysp_password = process.env.soy_ysysp_password.split();
    };
    
    Object.keys(soy_ysysp_password).forEach((item) => {
        if (soy_ysysp_password[item]) {
            app_soy_ysysp_password.push(soy_ysysp_password[item]);
        };
    });
    
    if (process.env.soy_ysysp_username && process.env.soy_ysysp_username.indexOf('@') > -1) {
        soy_ysysp_username = process.env.soy_ysysp_username.split('@');
    } else if (process.env.soy_ysysp_username && process.env.soy_ysysp_username.indexOf('\n') > -1) {
        soy_ysysp_username = process.env.soy_ysysp_username.split('\n');
    } else if(process.env.soy_ysysp_username && process.env.soy_ysysp_username.indexOf('#') > -1){
        soy_ysysp_username = process.env.soy_ysysp_username.split('#');
    }else{
        soy_ysysp_username = process.env.soy_ysysp_username.split();
    };
    
    Object.keys(soy_ysysp_username).forEach((item) => {
        if (soy_ysysp_username[item]) {
            app_soy_ysysp_username.push(soy_ysysp_username[item]);
        };
    });
    
    if (process.env.soy_ysysp_Code && process.env.soy_ysysp_Code.indexOf('@') > -1) {
        soy_ysysp_Code = process.env.soy_ysysp_Code.split('@');
    } else if (process.env.soy_ysysp_Code && process.env.soy_ysysp_Code.indexOf('\n') > -1) {
        soy_ysysp_Code = process.env.soy_ysysp_Code.split('\n');
    } else if(process.env.soy_ysysp_Code && process.env.soy_ysysp_Code.indexOf('#') > -1){
        soy_ysysp_Code = process.env.soy_ysysp_Code.split('#');
    }else{
        soy_ysysp_Code = process.env.soy_ysysp_Code.split();
    };
    
    Object.keys(soy_ysysp_Code).forEach((item) => {
        if (soy_ysysp_Code[item]) {
            app_soy_ysysp_Code.push(soy_ysysp_Code[item]);
        };
    });

    
    
}else{
    //request=$axios
    if(!$.getdata('soy_ysysp_username')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_ysysp_username`);
        return;
    }
    if(!$.getdata('soy_ysysp_password')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_ysysp_password`);
        return;
    }
    if(!$.getdata('soy_ysysp_Code')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_ysysp_Code`);
        return;
    }
    
    soy_ysysp_username.push($.getdata('soy_ysysp_username'))
    soy_ysysp_Code.push($.getdata('soy_ysysp_Code'))
    soy_ysysp_password.push($.getdata('soy_ysysp_password'))
    let ysysp_count = ($.getval('ysysp_count') || '1');
    
    for (let i = 2; i <= ysysp_count; i++) {
        app_soy_ysysp_username.push($.getdata(`soy_ysysp_username${i}`))
        app_soy_ysysp_Code.push($.getdata(`soy_ysysp_Code${i}`))
        app_soy_ysysp_password.push($.getdata(`soy_ysysp_password${i}`))
        
    }
}
}

    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_ysysp_username.length} 个账号】===\n`);
      
for (i = 0; i < app_soy_ysysp_username.length; i++) {
    soy_ysysp_username=app_soy_ysysp_username[i]
    soy_ysysp_password=md5(app_soy_ysysp_password[i])
    soy_ysysp_Code=app_soy_ysysp_Code[i]
    
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    await soy_ysysp_login()
    if(!sessionid){
        console.log(`\n【${$.name}---账号 ${$.index} 登录】: 无法获取到需要参数,请重试`)
    }else{
        await soy_ysysp_list()
        
        if (qd_state == 1) {
            await soy_ysysp_check_in()
            
        }
        
        for (let cs = 0; cs < sc_state; cs++) {
            await soy_ysysp_scvideo()
            await $.wait(Math.floor(Math.random() * (20000 - 10000 + 1000) + 10000))
            
        }
        
        for (let cs = 0; cs < pl_state; cs++) {
            await soy_ysysp_plvideo()
            await $.wait(Math.floor(Math.random() * (20000 - 10000 + 1000) + 10000))
            
        }
        /*
        for (let cs = 0; cs < kp_state; cs++) {
            await soy_ysysp_open_AD()
            
        }*/
        
        for (let cs = 0; cs < yq_state; cs++) {
            await soy_ysysp_invitation()
            
        }
        /*
        for (let cs = 0; cs < bd_state; cs++) {
            await soy_ysysp_binding()
            
        }*/
        
        await soy_ysysp_BoxCd()
        
        await soy_ysysp_ADvideo()
        
    }
    
    
};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//获取ck
function get_appdata() {
    //https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd
    if ($request.url.indexOf("getUserOpenBoxCd") > -1) {
        const ysysp_Code = JSON.stringify($request.headers)
        if (ysysp_Code) $.setdata(ysysp_Code.fwaturecode, `soy_ysysp_Code${status}`)
        $.log(ysysp_Code)
        $.msg($.name, "", `莹石云视频${status}获取token成功`)

    }
}




function soy_ysysp_login(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://api.ys7.com/v3/users/login/v2`,
            headers : {"Host": "api.ys7.com","sessionid": "","clienttype": "3","osversion": "10","clientversion": "6.1.0.210927","nettype": "WIFI","clientno": "web_site","clientname": "","featurecode": `${soy_ysysp_Code}`,"appid": "ys7","content-type": "application/x-www-form-urlencoded","accept-encoding": "gzip","user-agent": "okhttp/3.14.7"},
            body : `password=${soy_ysysp_password}&account=${soy_ysysp_username}`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.meta.code==200){
                sessionid=result.sessionInfo.sessionId
                soy_ysysp_headers= {"Host": "api.ys7.com","sessionid": sessionid,"clienttype": "3","clientversion": "6.1.0.210927","nettype": "WIFI","clientno": "undefined","featurecode": soy_ysysp_Code,"language": "undefined","appid": "ys","content-type": "application/x-www-form-urlencoded","accept-encoding": "gzip","user-agent": "okhttp/3.14.7"}
                console.log(`\n【${$.name}---账号 ${$.index} 登录】: 登录成功`)
                
               
            }else{
                console.log(`\n【${$.name}---账号 ${$.index} 登录】: ${result.meta.message}`)
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

function soy_ysysp_list() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/list`,
            headers: soy_ysysp_headers,
            body: "pageNum=0&pageSize=20&vipId=5832bb930b104af09cc3986e923d2519",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: 读取到当前任务状态:`)
                task_sl = result.taskList.length
                for (let sl = 0; sl < task_sl; sl++) {

                    if (sl == 0) {
                        if (result.taskList[sl].taskCompleteNum == 0) {
                            console.log(`${result.taskList[sl].taskName}：今天未签到`)
                            qd_state = 1

                        } else {
                            console.log(`${result.taskList[sl].taskName}：今天已签到`)

                        }

                    }

                    if (sl == 1) {
                        if (result.taskList[sl].taskCompleteNum == 3) {
                            console.log(`${result.taskList[sl].taskName}：已完成`)

                        } else {
                            console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
                            sc_state = result.taskList[sl].taskNum-result.taskList[sl].taskCompleteNum

                        }

                    }

                    if (sl == 2) {
                        if (result.taskList[sl].taskCompleteNum == 6) {
                            console.log(`${result.taskList[sl].taskName}：已完成`)

                        } else {
                            console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
                            pl_state = result.taskList[sl].taskNum-result.taskList[sl].taskCompleteNum 

                        }

                    }
                    /*
                    if(sl==3){
					   if(result.taskList[sl].taskCompleteNum==1){
					    console.log(`${result.taskList[sl].taskName}：已完成`)
					    
					}else{
					    console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
					    ad_state=result.taskList[sl].taskNum
					    
					}
                        
                    }
                    */
                    if(sl==4){
					   if(result.taskList[sl].taskCompleteNum==1){
					    console.log(`${result.taskList[sl].taskName}：已完成`)
					    
					}else{
					    console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
					    yq_state=result.taskList[sl].taskNum
					    
					}  
					    
					}
					/*
					if(sl==5){
					   if(result.taskList[sl].taskCompleteNum==1){
					    console.log(`${result.taskList[sl].taskName}：已完成`)
					    
					}else{
					    console.log(`${result.taskList[sl].taskName}：${result.taskList[sl].taskCompleteNum}/${result.taskList[sl].taskNum}`)
					    bd_state=result.taskList[sl].taskNum
					    
					}  
					    
					}
					*/



                }

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 任务列表】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_BoxCd() {
    return new Promise((resolve, reject) => {
        $.get({
            url: `https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd`,
            headers: soy_ysysp_headers,
            //body : "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code = 200) {
                if (result.expireTime == 0) {
                    await soy_ysysp_openBox()
                } else {
                    console.log(`\n【${$.name}---账号 ${$.index} 宝箱冷却时间】: 还剩下 ${result.expireTime} 秒后才能开启`)
                }
            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 宝箱冷却时间】: ${result.meta.message}`)
            }


            resolve()
        })
    })
}

function soy_ysysp_openBox() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/yd/openYdBox`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 开宝箱】: ${result.meta.message},获得莹豆 ${result.ydValue} 个`)
            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 开宝箱】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_ADvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete`,
            headers: soy_ysysp_headers,
            body: `eventkey=1013&filterParam=12345`,
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 广告视频激励奖】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)
                if(result.taskIntegral==0){
                    console.log(`\n【${$.name}---账号 ${$.index} 广告视频激励奖】: 哎呀,没有获取到豆豆了,先停了`)
                }else{
                    await $.wait(Math.floor(Math.random() * (30000 - 20000 + 1000) + 20000))
                    await soy_ysysp_ADvideo()
                    
                }
                

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 广告视频激励奖】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_plvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1008&filterParam=video`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 评论短视频】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 评论短视频】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_scvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1007&filterParam=video`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 上传短视频】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 上传短视频】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_ysysp_check_in() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/videoclips/user/check_in`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {
                console.log(`\n【${$.name}---账号 ${$.index} 签到】: ${result.meta.message},获得莹豆 ${result.data.score} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 签到】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

/*
function soy_ysysp_open_AD() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1010`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 看广告赚萤豆】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 看广告赚萤豆】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}
*/
function soy_ysysp_invitation() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1011`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 邀请好友助力得萤豆】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 邀请好友助力得萤豆】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

/*
function soy_ysysp_binding() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1012`,
            headers: soy_ysysp_headers,
            body: "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code == 200) {

                console.log(`\n【${$.name}---账号 ${$.index} 邀好友注册并绑定设备】: ${result.meta.message},获得莹豆 ${result.taskIntegral} 个`)

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 邀好友注册并绑定设备】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}*/

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