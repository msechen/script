/*

软件名:燃旅视频 收益均0.3-0.5/天,满1元可提现

软件下载地址:http://ran.lvfacn.com/pages/share/invit?to_user_id=1307478

作者qq1056211611

软件需求:提现需要绑定支付宝 实名身份证号和支付宝姓名匹配,身份证照片随意,网上找也可以

进app后记得修改一下昵称

变量需求:

抓包任意一天连接 其中请求提中包含 access_token= 和 user_token= 即可 复制填变量

变量填写: 

export RL_boby='access_token=xxxx&user_token=xxxx'

提现变量 
export RL_sftx=false#或true不同默认是false

提现金额
export RL_sftx=''#提现金额,不填默认1.0元

刷分享阅读变量 抓包 我的 界面,有一天链接包含 mine 在请求体中找到 to_user_id= 的值填变量
export user_id=''


cron 0 5-23 * * *  建议一小时一次

*/ 


const $ = new Env('燃旅视频');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0 //响应日志开关,默认关闭
let subTitle = ``
let apptz = process.env.Rl_apptz//是否推送，默认true
let apptx = process.env.Rl_apptx//默认提现假,需要自行修改变量 RL_tx=true/false
let apptxje = process.env.Rl_apptxje//提现金额,默认1.0元,需要修改自行添加变量 RL_tx=''
//let VideoID='85612'

if ($.isNode()) {
    if(process.env.RL_boby && process.env.RL_boby.indexOf('\n')){
       RL_boby=process.env.RL_boby? process.env.RL_boby.split("\n") : [] 
    }else if(process.env.RL_boby && process.env.RL_boby.indexOf('@')){
        RL_boby=process.env.RL_boby? process.env.RL_boby.split("@") : [] 
    }else{
       RL_boby=process.env.RL_boby? process.env.RL_boby.split("") : [] 
    }
    
    if(!apptz){apptz = true}
    if(!apptx){apptx = true}
    if(!apptxje){apptxje='1.0'}
    
    
    
}

!(async () => {
  if (!RL_boby[0]) {
        $.msg($.name, '【提示】请先获取燃旅视频变量再试')
        return;
  } else {
      
console.log(`-------- 共 ${RL_boby.length} 个账号 --------`)

    console.log(
`\n\n=============== 脚本执行 - 北京时间(UTC+8)：${new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
).toLocaleString()} ===============\n`);


    for (i = 0; i < RL_boby.length; i++) {
        if(RL_boby[i]){
            rl_boby = RL_boby[i]
            
            user_id=process.env.user_id
            
            rl_headers = JSON.parse(`{"Host":"ranlv.lvfacn.com","user-agent":"SKW-A0/Android/10/uni.UNIFE3A1EF/1.0.65","content-type":"application/x-www-form-urlencoded"}`)
            

 
            $.index = i + 1;
            console.log(`\n----- 开始【第 ${$.index} 个账号】-----`)
            
            await rl_taskCenter()
            await rl_wiTask()
            await rl_Videolist()
            //每天看视频
            if(Watch_videos!=20){
                console.log('\n---【开始做观看视频】---')
                await rl_ksp()
            }
            //刷分享阅读
            if(Share_video!=20){
                console.log('\n---【开始做分享任务】---')
                await rl_fx()
                await $.wait(1000)
                await rl_sfx()
            }
            //刷点赞
            if(give!=20){
                console.log('\n---【开始做点赞】---')
                await rl_dz()
            }
            //刷评论
            if(comment!=10){
                console.log('\n---【开始做评论】---')
               await rl_pl() 
            }
            if(vote!=5){
                console.log('\n---【开始做投票】---')
             await rl_bd()  
            }
            //查看账号余额
            await rl_zhxx()
            //提现流水帐
            await rl_txjl()
            
        }  
    }
    if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}}

  }})()

  .catch((e) => $.logErr(e))
  .finally(() => $.done())

//每日任务
function rl_taskCenter() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Share/taskCenter`,
            headers : rl_headers,
            body : rl_boby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                //每月投票状态 5次
                vote=result.data.task[3].to_num
                //每天看视频状态 20次
                Watch_videos=result.data.task[6].to_num
                //分享视频奖励 20次
                Share_video=result.data.task[7].to_num
                console.log(`\n【每日任务状态】 \n---每月投票状态: 共5次,现完成 ${vote} 次\n---每日看视频状态: 共20次,现完成 ${Watch_videos} 次\n---每日分享视频状态: 共20次,现完成 ${Share_video} 次`)
            } else {
               console.log(`\n【任务状态】: 记录失败`)
            }
            resolve()
        })
    })
}
//提现任务
function rl_wiTask() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Share/wiTask`,
            headers : rl_headers,
            body : rl_boby,
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                //每日点赞 20
                give=result.data[1].to_num
                //每日评论 10
                comment=result.data[2].to_num

                console.log(`\n【提现任务状态】 \n---每日点赞状态: 共20次,现完成 ${give} 次\n---每日评论频状态: 共10次,现完成 ${comment} 次`)
            } else {
               console.log(`\n【提现任务状态】: 记录失败`)
            }
            resolve()
        })
    })
}

//刷新首页获取视频
function rl_Videolist() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Ranlv/index`,
            headers : rl_headers,
            body : rl_boby+'list_rows=10&page=1&random=1',
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                if(!result.data.data.length){
                    
                    console.log(`\n【获取视频ID】:  获取随机视频失败,将随机获取`)
                    VideoID=`${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*99)}${Math.ceil(Math.random()*99)}`
                    console.log(`\n【随机分配视频ID】: ${VideoID}`)
                }else{
                    //Video_sl=result.data.data[0].id
                    VideoID=result.data.data[Math.ceil(Math.random()*result.data.data.length)].id
                    console.log(`\n【获取视频ID】: ${VideoID}`)
                    
                }

            } else {
               console.log(`\n【获取视频ID】: 记录失败`)
            }
            resolve()
        })
    })
}

//刷分享任务
function rl_sfx() {
    return new Promise((resolve, reject) => {
        //videoid=`7783${Math.ceil(Math.random()*99)}`
         fx_boby=`${wb_qzb(rl_boby,'&')}&uuid=&client=2&member_id=0&video_id=${VideoID}&redouble=1&to_user_id=${user_id}`
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Common/pvlog`,
            headers : JSON.parse(`{"Host": "ranlv.lvfacn.com","content-length": ${fx_boby.length},"origin": "http://ran.lvfacn.com","user-agent": "Mozilla/5.0 (Linux; Android 10; SKR-A0 Build/G66X2011030CN00MQ4; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045709 Mobile Safari/537.36 MMWEBID/4673 MicroMessenger/8.0.6.1900(0x28000635) Process/tools WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","sec-fetch-mode": "cors","content-type": "application/x-www-form-urlencoded; charset=UTF-8","x-requested-with": "com.tencent.mm","sec-fetch-site": "cross-site","referer": "http://ran.lvfacn.com/play.html?videoid=${VideoID}&to_user_id=${user_id}","accept-encoding": "gzip, deflate, br","accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}`),
            body : fx_boby,
            
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【观看分享】: ${result.msg},分享次数 +1 `)
            } else {
               console.log(`\n【观看任务】: 记录失败`)
            }
            resolve()
        })
    })
}

//看视频
function rl_ksp() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Common/pvlog`,
            headers : rl_headers,
            body : rl_boby+`&client=1&member_id=${user_id}&redouble=1&video_id=${VideoID}`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【看视频奖励】: ${result.msg} `)
            } else {
               console.log(`\n【看视频奖励】: 记录失败`)
            }
            resolve()
        })
    })
}
//投票
function rl_tp(id) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Rcharts/goVote`,
            headers : rl_headers,
            body : rl_boby+`&is_act=1&num=1&video_id=${id}&charts_id=${Math.ceil(Math.random()*100)}`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【投票结果】: ${result.msg} `)
            } else {
               console.log(`\n【投票结果】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//点赞
function rl_dz() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Ranlv/checkPraise`,
            headers : rl_headers,
            body : rl_boby+`&video_id=${VideoID}&like_ran=1`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【点赞结果】: ${result.msg} `)
            } else {
               console.log(`\n【点赞结果】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//评论
function rl_pl() {
    return new Promise((resolve, reject) => {
        cy=['顶一下','看到这里我毫不犹豫的赞了!','好东西','OMG！','好嗨哟','来了老弟','奥利给','咱也不知道','好浪噢']
        xh=Math.ceil(Math.random()*9)
        if(xh==1){
          content=cy[0]
        }else if(xh==2){
         content=cy[1]   
        }else if(xh==3){
         content=cy[2]   
        }else if(xh==4){
         content=cy[3]   
        }else if(xh==5){
         content=cy[4]   
        }else if(xh==6){
         content=cy[5]   
        }else if(xh==7){
         content=cy[6]   
        }else if(xh==8){
         content=cy[7]   
        }else if(xh==9){
         content=cy[8]   
        }
        
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Ranlv/addComments`,
            headers : rl_headers,
            body : RL_boby+`&video_id=${VideoID}&content=${content}`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【评论结果】: ${result.msg} `)
            } else {
               console.log(`\n【评论结果】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//获取投票榜单
function rl_bd() {
    return new Promise((resolve, reject) => {
        let sjs=Math.ceil(Math.random()*9)
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Rcharts/getRank`,
            headers : rl_headers,
            body : rl_boby+`&page=1&list_rows=10&id=76&member_id=1307478&basis=0&ran=1`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【投票榜单】: ${result.msg} `)
                await rl_tp(result.data.data[sjs].id)
                $.wait(1000)
                await rl_pl(result.data.data[sjs].id)
                $.wait(1000)
                await rl_fx(result.data.data[sjs].id)
                
            } else {
               console.log(`\n【投票榜单】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//榜单分享视频
function rl_fx() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Rcharts/shareVideo`,
            headers : rl_headers,
            body : rl_boby+`&video_id=${VideoID}&uuid=C3A24E7508F8C6A8EFA2DEDCF76EB0F9C12AC310`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【分享结果】: ${result.msg} `)
            } else {
               console.log(`\n【分享结果】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//查询账号余额
function rl_zhxx() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Share/withdraw`,
            headers : rl_headers,
            body : rl_boby,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【当前账号】: \n可用余额: ${result.data.balance} 元\n可提现额度: ${result.data.lines} 元`)
                //subTitle += `\n【当前账号】: \n可用余额: ${result.data.balance} 元\n可提现额度: ${result.data.lines}`
                txye=result.data.balance
                txed=result.data.lines
                if(apptx){
                    if(txed>=txye && txye>=apptxje){
                        await rl_tx() 
                    }
                }
                
            } else {
               console.log(`\n【当前账号】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//提现
function rl_tx() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Share/withdraw`,
            headers : rl_headers,
            body : rl_boby+`&amount=${apptxje}&is_act=1`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【提现1元】: ${result.msg}`)
                subTitle += `\n【账号${$.index}--提现】: ${result.msg}`
            } else {
               console.log(`\n【提现1元】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//提现记录
function rl_txjl() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://ranlv.lvfacn.com/api.php/Share/wallet`,
            headers : rl_headers,
            body : rl_boby+`&type=2&page=1&list_rows=20`,
            
        }, async(error, response, data) => {
            //console.log(data) 
            let result = JSON.parse(data)
            if (result.code == 0) {
                console.log(`\n【提现记录】: ${result.msg}`)
                txcs=result.data.data.data.length
                //console.log(txcs)
                if(txcs==1){
                   console.log(`提现金额: ${result.data.data.data[0].amount} 元`)
                   console.log(`提现时间: ${result.data.data.data[0]['create_time']}`)
                   console.log(`流水账号: ${result.data.data.data[0].serialnum}\n`)
                }else{
                      for (let t = 0; t < 3; t++) {
                        console.log(`提现金额: ${result.data.data.data[t].amount} 元`)
                        console.log(`提现时间: ${result.data.data.data[t]['create_time']}`)
                        console.log(`流水账号: ${result.data.data.data[t].serialnum}\n`)
                        
                      }  
                    
                }
                
                
            } else {
               console.log(`\n【提现记录】: ${result.msg} `)
            }
            resolve()
        })
    })
}
//取左边字符
function wb_qzb(wb,gjz){
    var index = wb.indexOf(gjz);
    wb = wb.substring(0,index);
    return wb;
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}