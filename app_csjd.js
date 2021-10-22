/*

软件名称:创视节点

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



cron 8 0,12,20 * * *

*/


const $ = new Env('创视节点');
const notify = $.isNode() ? require('./sendNotify') : '';

let csjd_count = '',app_soy_csjd_Name=[],app_soy_csjd_password=[],app_soy_csjd_Code=[],statue=''


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
    

    
    if (process.env.soy_csjd_Name && process.env.soy_csjd_Name.indexOf('@') > -1) {
        soy_csjd_Name = process.env.soy_csjd_Name.split('@');
    } else if (process.env.soy_csjd_Name && process.env.soy_csjd_Name.indexOf('\n') > -1) {
        soy_csjd_Name = process.env.soy_csjd_Name.split('\n');
    } else if(process.env.soy_csjd_Name && process.env.soy_csjd_Name.indexOf('#') > -1){
        soy_csjd_Name = process.env.soy_csjd_Name.split('#');
    }else{
        soy_csjd_Name = process.env.soy_csjd_Name.split();
    };
    

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
    
    soy_csjd_Name.push($.getdata('soy_csjd_Name'))
    soy_csjd_password.push($.getdata('soy_csjd_password'))
	
	if (soy_csjd_Name.push($.getdata('soy_csjd_Name')) && soy_csjd_Name.push($.getdata('soy_csjd_Name')).indexOf('@') > -1) {
        soy_csjd_Name = soy_csjd_Name.push($.getdata('soy_csjd_Name')).split('@');
    } else if (soy_csjd_Name.push($.getdata('soy_csjd_Name')) && soy_csjd_Name.push($.getdata('soy_csjd_Name')).indexOf('\n') > -1) {
        soy_csjd_Name = soy_csjd_Name.push($.getdata('soy_csjd_Name')).split('\n');
    } else if(soy_csjd_Name.push($.getdata('soy_csjd_Name')) && soy_csjd_Name.push($.getdata('soy_csjd_Name')).indexOf('#') > -1){
        soy_csjd_Name = soy_csjd_Name.push($.getdata('soy_csjd_Name')).split('#');
    }else{
        soy_csjd_Name = soy_csjd_Name.push($.getdata('soy_csjd_Name')).split();
    };
	
	if (soy_csjd_password.push($.getdata('soy_csjd_password')) && soy_csjd_password.push($.getdata('soy_csjd_password')).indexOf('@') > -1) {
        soy_csjd_password = soy_csjd_password.push($.getdata('soy_csjd_password')).split('@');
    } else if (soy_csjd_password.push($.getdata('soy_csjd_password')) && soy_csjd_password.push($.getdata('soy_csjd_password')).indexOf('\n') > -1) {
        soy_csjd_password = soy_csjd_password.push($.getdata('soy_csjd_password')).split('\n');
    } else if(soy_csjd_password.push($.getdata('soy_csjd_password')) && soy_csjd_password.push($.getdata('soy_csjd_password')).indexOf('#') > -1){
        soy_csjd_password = soy_csjd_password.push($.getdata('soy_csjd_password')).split('#');
    }else{
        soy_csjd_password = soy_csjd_password.push($.getdata('soy_csjd_password')).split();
    };
	
	
    if(!$.getdata('soy_csjd_UA')){
		console.log(`\n【${$.name}】：未填写相应变量 soy_csjd_UA ,将默认分配`);
	}else{
		if (soy_csjd_UA.push($.getdata('soy_csjd_UA')) && soy_csjd_UA.push($.getdata('soy_csjd_UA')).indexOf('@') > -1) {
        soy_csjd_UA = soy_csjd_UA.push($.getdata('soy_csjd_UA')).split('@');
    } else if (soy_csjd_UA.push($.getdata('soy_csjd_UA')) && soy_csjd_UA.push($.getdata('soy_csjd_UA')).indexOf('\n') > -1) {
        soy_csjd_UA = soy_csjd_UA.push($.getdata('soy_csjd_UA')).split('\n');
    } else if(soy_csjd_UA.push($.getdata('soy_csjd_UA')) && soy_csjd_UA.push($.getdata('soy_csjd_UA')).indexOf('#') > -1){
        soy_csjd_UA = soy_csjd_UA.push($.getdata('soy_csjd_UA')).split('#');
    }else{
        soy_csjd_UA = soy_csjd_UA.push($.getdata('soy_csjd_UA')).split();
    };
	}

}

Object.keys(soy_csjd_password).forEach((item) => {
        if (soy_csjd_password[item]) {
            app_soy_csjd_password.push(soy_csjd_password[item]);
        };
    });
	
Object.keys(soy_csjd_Name).forEach((item) => {
        if (soy_csjd_Name[item]) {
            app_soy_csjd_Name.push(soy_csjd_Name[item]);
        };
    });	

Object.keys(soy_csjd_UA).forEach((item) => {
        if (soy_csjd_UA[item]) {
            app_soy_csjd_UA.push(soy_csjd_UA[item]);
        };
    });


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
	if(app_soy_csjd_UA.length==0 || !soy_csjd_UA||!app_soy_csjd_UA[i]){
		soy_csjd_UA='Redmi Note 5(Android/8.1.0) (com.cs.csjd/1.0.2) Weex/0.26.0 1080x2210'
	}else{
		soy_csjd_UA=app_soy_csjd_UA[i]
	}
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    await soy_csjd_login()
    if(!sessionid){
        console.log(`\n【${$.name}---账号 ${$.index} 登录】: 无法获取到需要参数,请重试`)
    }else{
        await soy_csjd_list()
        
          
    }
    
};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());




function soy_csjd_login(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://cs.clrcle.cn/api/app/authentication/login`,
            headers : {"Authorization": "","user-agent": soy_csjd_UA,"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8","Content-Length": (`loginName=${soy_csjd_Name}&password=${soy_csjd_password}`).length,"Host": "cs.clrcle.cn"},
            body : `password=${soy_csjd_password}&loginName=${soy_csjd_Name}`,
        }, async(error, response, data) => {
           try {
            console.log(data)
            let result = JSON.parse(data)
            if(result.meta.code==200){
                sessionid=result.sessionInfo.sessionId
                soy_csjd_headers= {"Host": "api.ys7.com","sessionid": sessionid,"clienttype": "3","clientversion": "6.1.0.210927","nettype": "WIFI","clientno": "undefined","featurecode": soy_csjd_Code,"language": "undefined","appid": "ys","content-type": "application/x-www-form-urlencoded","accept-encoding": "gzip","user-agent": "okhttp/3.14.7"}
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

function soy_csjd_list() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/list`,
            headers: soy_csjd_headers,
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

function soy_csjd_BoxCd() {
    return new Promise((resolve, reject) => {
        $.get({
            url: `https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd`,
            headers: soy_csjd_headers,
            //body : "",
        }, async (error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.meta.code = 200) {
                if (result.expireTime == 0) {
                    await soy_csjd_openBox()
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

function soy_csjd_openBox() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/yd/openYdBox`,
            headers: soy_csjd_headers,
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

function soy_csjd_ADvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete`,
            headers: soy_csjd_headers,
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
                    await soy_csjd_ADvideo()
                    
                }
                

            } else {
                console.log(`\n【${$.name}---账号 ${$.index} 广告视频激励奖】: ${result.meta.message}`)
            }

            resolve()
        })
    })
}

function soy_csjd_plvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1008&filterParam=video`,
            headers: soy_csjd_headers,
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

function soy_csjd_scvideo() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1007&filterParam=video`,
            headers: soy_csjd_headers,
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

function soy_csjd_check_in() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/videoclips/user/check_in`,
            headers: soy_csjd_headers,
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
function soy_csjd_open_AD() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1010`,
            headers: soy_csjd_headers,
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
function soy_csjd_invitation() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1011`,
            headers: soy_csjd_headers,
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
function soy_csjd_binding() {
    return new Promise((resolve, reject) => {
        $.post({
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1012`,
            headers: soy_csjd_headers,
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