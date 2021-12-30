/*

软件名称:腾讯自选股

-----------------------
改至原@CenBoMin大佬的脚本的脚本

只做日常任务和长牛一些任务

app和微信任务都做,有个别的任务可能不做,而且也做不了,不会修复
做更多的任务,薅更多的钱,且行且珍惜
分享那些任务时直接用我小号做完,没写互助,所以有时可能会失效啥的
-----------------------

自行抓包变量填写:

app/微信小程序 抓包时找带有这个 https://wzq.tenpay.com 的链接,要点获取脚本界面抓

变量名:soy_txzxg_data
变量值:url@wzq_qluin@UA
注释:url为app抓包时的整个链接,wzq_qluin为微信抓包时的cookie里面找它的值就是,UA为抓包时的User-Agent(选填)
app抓包时的链接大概如:https://wzq.tenpay.com/cgi-bin/activity_xxx.fcgi?action=home&type=xxx&actid=xxx&invite_code=&_=xxx&openid=xxx&fskey=xxx&channel=1&access_token=xxx&_appName=xxx&_appver=xxx&_osVer=xxx&_devId=xxx
大概时这样,反正一定要有openi、fskey,当然你变量第一个参数填openid=xxx&fskey=xxx也可以



多好用 # 或换行隔开
------------------------

由于写v2p处理数据太麻烦,所以干脆没有了

------------------------

cron 0 11,18,22 * * *


脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_txzxg.js

*/


const $ = new Env('腾讯自选股');
const notify = $.isNode() ? require('./sendNotify') : '';

let bullStatusFlag = 0,app_soy_txzxg_data=[]

!(async () => {

if ($.isNode()) {
    if(!process.env.soy_txzxg_data){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_data`);
        return;
    }
      
    if (process.env.soy_txzxg_data && process.env.soy_txzxg_data.indexOf('\n') > -1) {
        app_soy_txzxg_data = process.env.soy_txzxg_data.split('\n');
    } else if(process.env.soy_txzxg_data && process.env.soy_txzxg_data.indexOf('#') > -1){
        app_soy_txzxg_data = process.env.soy_txzxg_data.split('#');
    }else{
        app_soy_txzxg_data = process.env.soy_txzxg_data.split();
    };
    
    
}else{
    if(!$.getdata('soy_txzxg_data')){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_data`);
        return;
    }
    
    if ($.getdata('soy_txzxg_data') && $.getdata('soy_txzxg_data').indexOf('\n') > -1) {
        app_soy_txzxg_data = $.getdata('soy_txzxg_data').split('\n');
    } else if($.getdata('soy_txzxg_data') && $.getdata('soy_txzxg_data').indexOf('#') > -1){
        app_soy_txzxg_data = $.getdata('soy_txzxg_data').split('#');
    }else{
        app_soy_txzxg_data = $.getdata('soy_txzxg_data').split();
    };
        
    


}
    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_txzxg_data.length} 个账号】===\n`);

    
for (i = 0; i < app_soy_txzxg_data.length; i++) {
    $.index = i + 1;
    
    if(app_soy_txzxg_data[i].indexOf('openid=')>-1&&app_soy_txzxg_data[i].indexOf('fskey=')>-1){
        //处理账号信息
    await get_u_info()
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    todayDate = formatDateTime(new Date());
    await signStatus(2002,0); //签到
    
    await get_apptask()//app日常任务
    await get_wxtask()//微信日常任务
    await get_Share()//分享任务
    await bullTask()//长牛任务
    await orderQuery()
    }else{
        console.log(`\n【${$.name}】：变量中没有找到 openid、fskey 数据`);
        return
    }
    

};

if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//获取数据
async function get_appdata()
{
    if($request.url.indexOf("activity_task_daily.fcgi?") > -1 ||
       $request.url.indexOf("activity_task_continue.fcgi?") > -1) {
        if($request.url.indexOf("openid=") > -1)
        {
            //APP包
            $.setdata($request.url,'TxStockAppUrl')
            $.log(`获取TxStockAppUrl成功: ${$request.url}\n`)
            $.msg(`获取TxStockAppUrl成功: ${$request.url}\n`)
            $.setdata(JSON.stringify($request.headers),'TxStockAppHeader')
            $.log(`获取TxStockAppHeader成功: ${JSON.stringify($request.headers)}\n`)
            $.msg(`获取TxStockAppHeader成功: ${JSON.stringify($request.headers)}\n`)
        }
        else
        {
            //微信包
            $.setdata(JSON.stringify($request.headers),'TxStockWxHeader')
            $.log(`获取TxStockWxHeader成功: ${JSON.stringify($request.headers)}\n`)
            $.msg(`获取TxStockAppHeader成功: ${JSON.stringify($request.headers)}\n`)
        }
    }
}

async function get_u_info() {
    soy_txzxg_data=app_soy_txzxg_data[i].split('@')
    let soy_txzxg_url=soy_txzxg_data[0]
    wzq_qluin=soy_txzxg_data[1]
    soy_txzxg_UA=soy_txzxg_data[2]
    if(!soy_txzxg_UA){
        soy_txzxg_UA='Mozilla/5.0 (Linux; Android 8.1; PAR-AL00 Build/HUAWEIPAR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044304 name Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333)'
    }
    
    app_openid = soy_txzxg_url.match(/openid=([\w-]+)/)[1]
    app_fskey = soy_txzxg_url.match(/fskey=([\w-]+)/)[1]
    if(soy_txzxg_url.indexOf('access_token')>-1){
        app_token = soy_txzxg_url.match(/access_token=([\w-]+)/)[1]
    }else{
        app_token = "52_"+MD5_Encrypt(app_openid)+MD5_Encrypt(app_fskey)
    }

    if(soy_txzxg_url.indexOf('appName')>-1){
        app_appName = soy_txzxg_url.match(/_appName=([\w\.,-]+)/)[1]
    }else{
        app_appName ='${app_appName}'
    }
    if(soy_txzxg_url.indexOf('appver')>-1){
        app_appver = soy_txzxg_url.match(/_appver=([\w\.,-]+)/)[1]
    }else{
        app_appver = '${app_appver}'
    }
    if(soy_txzxg_url.indexOf('devId')>-1){
        app_devId = soy_txzxg_url.match(/_devId=([\w-]+)/)[1]
    }else{
        app_devId = MD5_Encrypt(app_openid+app_appver)
    }
    if(soy_txzxg_url.indexOf('devId')>-1){
        app_osVer = soy_txzxg_url.match(/_osVer=([\w\.,-]+)/)[1]
    }else{
        app_osVer = '10'
    }
    
    
}

async function get_apptask() {
    //app端任务
    appActidArray = {"daily": [1101, 1105, 1111, 1112, 1113],"newbie": [1023, 1033]}//1103,1104,109
    appTaskArray = {"daily": [],"newbie": []}
    //处理任务
    for(let i=0; i<appActidArray["daily"].length; i++){
        app_taskItem = {"taskName":"APP日常任务","activity":"task_daily","type":"routine","actid":appActidArray["daily"][i]}
        appTaskArray["daily"].push(app_taskItem)
    }
    
    for(let i=0; i<appTaskArray["daily"].length; i++){
            await appTaskList(appTaskArray["daily"][i]);
    }
}
async function get_wxtask() {
    
    //微信小程序任务
    let wxActidArray = {"daily": [1100, 1110],"newbie": [1032]}
    let wxTaskArray = {"daily": [],"newbie": [],}
    //处理任务
    for(let i=0; i<wxActidArray["daily"].length; i++){
        wx_taskItem = {"taskName":"微信日常任务","activity":"task_daily","type":"routine","actid":wxActidArray["daily"][i]}
        wxTaskArray["daily"].push(wx_taskItem)
    }
    
    //微信端任务
    for(let i=0; i<wxTaskArray["daily"].length; i++){
        await wxTaskList(wxTaskArray["daily"][i]);
        
    }
    
}
async function get_Share() {
    //用户app互助吗
    userAppShareTaskList = {"daily": ["news_share", "task_50_1111", "task_51_1111"/*, "task_72_1113", "task_74_1113"*/, ]}
    userAppShareCodeArr = {"daily": {},"newbie": {},"bull_invite": [],"bull_help": [],"guess_invite": [],"guess_ticket": [],"guess_time": []}
    
    //用户微信互助码
    userWxShareTaskList = {"daily": ["task_50_1100", "task_51_1100", "task_66_1110", "task_50_1110", "task_51_1110", "task_51_1112", "task_51_1113", ],"newbie": ["task_50_1032", "task_51_1032"]}
    userWxShareCodeArr = {"daily": {},"newbie": {}}
    
    //做app端分享任务
    for(let j=0; j<userAppShareTaskList["daily"].length; j++){
        await appShareTaskReq(userAppShareTaskList["daily"][j],"daily")
        
    }
    //APP助力任务
    for(let j=0; j<userAppShareTaskList["daily"].length; j++){
        shareTaskName = userAppShareTaskList["daily"][j]
        if(userAppShareCodeArr["daily"][shareTaskName]){
            await wxShareTaskDone(shareTaskName,userAppShareCodeArr["daily"][shareTaskName])
            
        }
        
    }
    //做微信端分享任务
    for(let j=0; j<userWxShareTaskList["daily"].length; j++){
        await wxShareTaskReq(userWxShareTaskList["daily"][j],"daily")
        
    }
    //微信助力任务
    for(let j=0; j<userWxShareTaskList["daily"].length; j++){
        shareTaskName = userWxShareTaskList["daily"][j]
        if(userWxShareCodeArr["daily"][shareTaskName] && userWxShareCodeArr["daily"][shareTaskName]) {
            await wxShareTaskDone(shareTaskName,userWxShareCodeArr["daily"][shareTaskName])
            
        }
        
    }
    
    
}
 //长牛任务
async function bullTask(){
    //APP长牛任务
let bullTaskArray = {"rock_bullish":{"taskName":"戳牛任务", "action":"rock_bullish", "actid":1105},"open_box":{"taskName":"开宝箱", "action":"open_box", "actid":1105}, 
    "open_blindbox":{"taskName":"开盲盒", "action":"open_blindbox", "actid":1105}, 
    "query_blindbox":{"taskName":"查询皮肤数量", "action":"query_blindbox", "actid":1105},
    "sell_skin":{"taskName":"卖皮肤", "action":"sell_skin", "actid":1105},
    "feed":{"taskName":"喂长牛", "action":"feed", "actid":1105},
}
    await bullStatus()
    if(bullStatusFlag) {
    await bullTaskDone(bullTaskArray["rock_bullish"])
    for(let i=0; i<10; i++){
        await bullTaskDone(bullTaskArray["open_box"])
        await $.wait(5000)
        
    }
    await bullTaskDone(bullTaskArray["open_blindbox"])
    await bullTaskDone(bullTaskArray["query_blindbox"])
    await bullTaskDone(bullTaskArray["feed"])
    }
    
}

//APP任务列表
async function appTaskList(taskItem) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_${taskItem.activity}.fcgi?action=home&type=${taskItem.type}&actid=${taskItem.actid}&invite_code=&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                'Accept': `application/json, text/plain, */*`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `wzq.tenpay.com`,
                'Accept-Language': `zh-cn`
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                    
                        let result = JSON.parse(data);
                        if (result.retcode == 0) {
                            if(result.task_pkg != null){
                                let numPkg = result.task_pkg.length
                                for(let i=0; i<numPkg; i++){
                                    
                                    if(result.task_pkg[i].tasks && result.task_pkg[i].tasks[0]) {
                                        let numTask = result.task_pkg[i].tasks.length
                                        for(let j=0; j<numTask; j++){
                                            resultItem = result.task_pkg[i].tasks[j]
                                            //console.log(resultItem)
                                            task_id = resultItem.id
                                            task_tid = resultItem.tid
                                            await appTaskStatus(taskItem,task_id,task_tid);
                                        }
                                    }
                                }
                            }
                        } else {
                            console.log(`${taskItem.taskName}[actid=${taskItem.actid}]查询失败：${result.retmsg}`)
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

//APP任务状态
async function appTaskStatus(taskItem,task_id,task_tid) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve, reject) => {
        let testurl = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?id=${task_id}&tid=${task_tid}&actid=${taskItem.actid}&channel=1&action=taskstatus&_rndtime=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `http://zixuanguapp.finance.qq.com`,
                'Accept-Encoding': `gzip,deflate`,
                'Host': `wzq.tenpay.com`,
                'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
            },
        }
        $.get(testurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                    
                        let result = JSON.parse(data)
                        await $.wait(100);
                        if(result.retcode == 0){
                            if(result.done == 0) {
                                await appTaskticket(taskItem,task_id,task_tid);
                            } else {
                                $.log(`${taskItem.taskName}[actid:${taskItem.actid},id:${task_id},tid:${task_tid}]已完成\n`);
                            }
                        } else {
                            $.log(`${taskItem.taskName}状态查询失败：${result.retmsg}\n`);
                        } 
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

//APP票据申请
async function appTaskticket(taskItem,task_id,task_tid) {
    //console.log(taskItem.actid)
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve, reject) => {
        let testurl = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=${taskItem.actid}&_rndtime=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `http://zixuanguapp.finance.qq.com`,
                'Accept-Encoding': `gzip,deflate`,
                'Host': `wzq.tenpay.com`,
                'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
            },
        }
        $.get(testurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                        let result = JSON.parse(data)
                        await $.wait(100);
                        if(result.retcode == 0 && result.task_ticket){
                            await appTaskDone(taskItem,result.task_ticket,task_id,task_tid);
                        } else {
                            $.log(`${taskItem.taskName}申请票据失败：${result.retmsg}\n`);
                        } 
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

//做APP任务
async function appTaskDone(taskItem,ticket,task_id,task_tid) {
    return new Promise((resolve, reject) => {
        let testurl = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=${taskItem.actid}&id=${task_id}&tid=${task_tid}&task_ticket=${ticket}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `http://zixuanguapp.finance.qq.com`,
                'Accept-Encoding': `gzip,deflate`,
                'Host': `wzq.tenpay.com`,
                'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
            },
        }
        $.get(testurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                        let result = JSON.parse(data)
                        await $.wait(100);
                        if(result.retcode == 0){
                            $.log(`完成${taskItem.taskName}[actid:${taskItem.actid},id:${task_id},tid:${task_tid}]:获得 ${result.reward_desc}\n`);
                            //await $.wait(10000); //等待10秒
                        } else {
                            $.log(`${taskItem.taskName}[actid:${taskItem.actid},id:${task_id},tid:${task_tid}]未完成：${result.retmsg}\n`);
                        }
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

//微信任务列表
async function wxTaskList(taskItem) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_${taskItem.activity}.fcgi?action=home&type=${taskItem.type}&actid=${taskItem.actid}&invite_code=&_=${rndtime}`,
            headers: {
                'Accept': `application/json, text/plain, */*`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `wzq.tenpay.com`,
                'Accept-Language': `zh-cn`,
                'Cookie':`openid=${app_openid};wzq_qlskey=${app_fskey};wzq_qluin=${wzq_qluin}`
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                        let result = JSON.parse(data);
                        if (result.retcode == 0) {
                            if(result.task_pkg && result.task_pkg[0]){
                                let numPkg = result.task_pkg.length
                                for(let i=0; i<numPkg; i++){
                                    let numTask = result.task_pkg[i].tasks.length
                                    for(let j=0; j<numTask; j++){
                                        resultItem = result.task_pkg[i].tasks[j]
                                        //console.log(resultItem)
                                        task_id = resultItem.id
                                        task_tid = resultItem.tid
                                        await $.wait(100);
                                        await wxTaskStatus(taskItem,task_id,task_tid);
                                    }
                                }
                            }
                        } else {
                            console.log(`${taskItem.taskName}查询失败：${result.retmsg}`)
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

//微信任务状态查询
async function wxTaskStatus(taskItem,task_id,task_tid) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve, reject) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
            body: `_h5ver=2.0.1&actid=${taskItem.actid}&id=${task_id}&tid=${task_tid}&action=taskstatus`,
            headers: {
                'Accept': `application/json, text/plain, */*`,
                'Origin': `https://wzq.tenpay.com`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Cookie':`openid=${app_openid};wzq_qlskey=${app_fskey};wzq_qluin=${wzq_qluin}`,
                'Content-Type': `application/x-www-form-urlencoded`,
                'Host': `wzq.tenpay.com`,
                'Connection': `keep-alive`,
                'User-Agent': soy_txzxg_UA,
                'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
                'Accept-Language': `zh-cn`
            },
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                        let result = JSON.parse(data)
                        await $.wait(100);
                        if(result.retcode == 0){
                            if(result.done == 0) {
                                await wxTaskticket(taskItem,task_id,task_tid);
                            } else {
                                $.log(`${taskItem.taskName}[actid:${taskItem.actid},id:${task_id},tid:${task_tid}]已完成\n`);
                            }
                        } else {
                            $.log(`${taskItem.taskName}状态查询失败：${result.retmsg}\n`);
                        }
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

//微信票据申请
async function wxTaskticket(taskItem,task_id,task_tid) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
            body: `_h5ver=2.0.1&actid=${taskItem.actid}&action=taskticket`,
            headers: {
                'Accept': `application/json, text/plain, */*`,
                'Origin': `https://wzq.tenpay.com`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Cookie':`openid=${app_openid};wzq_qlskey=${app_fskey};wzq_qluin=${wzq_qluin}`,
                'Content-Type': `application/x-www-form-urlencoded`,
                'Host': `wzq.tenpay.com`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
                'Accept-Language': `zh-cn`
            },
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        
                        await $.wait(100);
                        if(result.retcode == 0 && result.task_ticket){
                            await wxTaskDone(taskItem,result.task_ticket,task_id,task_tid);
                        } else {
                            $.log(`${taskItem.taskName}申请票据失败：${result.retmsg}\n`);
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

//做微信任务
async function wxTaskDone(taskItem,wxticket,task_id,task_tid) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve, reject) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
            body: `_h5ver=2.0.1&actid=${taskItem.actid}&tid=${task_tid}&id=${task_id}&task_ticket=${wxticket}&action=taskdone`,
            headers: {
                'Accept': `application/json, text/plain, */*`,
                'Origin': `https://wzq.tenpay.com`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Cookie':`openid=${app_openid};wzq_qlskey=${app_fskey};wzq_qluin=${wzq_qluin}`,
                'Content-Type': `application/x-www-form-urlencoded`,
                'Host': `wzq.tenpay.com`,
                'Connection': `keep-alive`,
                //'User-Agent': wx_UA,
                'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
                'Accept-Language': `zh-cn`
            },
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data)
                        await $.wait(100);
                        if(result.retcode == 0){
                            $.log(`完成${taskItem.taskName}[actid:${taskItem.actid},id:${task_id},tid:${task_tid}]:获得 ${result.reward_desc}\n`);
                            await $.wait(10000); //等待10秒
                        } else {
                            $.log(`${taskItem.taskName}[actid:${taskItem.actid},id:${task_id},tid:${task_tid}]未完成：${result.retmsg}\n`);
                        }
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

//分享任务-APP端发起
async function appShareTaskReq(share_type,task_type) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?channel=1&action=query_share_code&share_type=${share_type}&_rndtime=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `application/json, text/plain, */*`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `wzq.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-cn`
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if(!userAppShareCodeArr[task_type][share_type]) {
                    userAppShareCodeArr[task_type][share_type] = []
                }
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                        let result = JSON.parse(data);
                        if(result.retcode == 0) {
                            userAppShareCodeArr[task_type][share_type].push(result.share_code)
                            $.log(`获取用户APP的${share_type}互助码: ${result.share_code}\n`);
                        } else {
                            $.log(`获取用户APP的${share_type}互助码失败：${result.retmsg}\n`);
                            userAppShareCodeArr[task_type][share_type].push("")
                        }
                        await $.wait(1000)
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//分享任务-微信端发起
async function wxShareTaskReq(share_type,task_type) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve, reject) => {
        let url = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_share.fcgi?t=${rndtime}`,
            body: `_h5ver=2.0.1&action=query_share_code&share_type=${share_type}`,
            headers: {
                'Accept': `application/json, text/plain, */*`,
                'Origin': `https://wzq.tenpay.com`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Cookie':`openid=${app_openid};wzq_qlskey=${app_fskey};wzq_qluin=${wzq_qluin}`,
                'Content-Type': `application/x-www-form-urlencoded`,
                'Host': `wzq.tenpay.com`,
                'Connection': `keep-alive`,
                //'User-Agent': wx_UA,
                'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
                'Accept-Language': `zh-cn`
            },
        };
        $.post(url, async (err, resp, data) => {
            try {
                if(!userWxShareCodeArr[task_type][share_type]) {
                    userWxShareCodeArr[task_type][share_type] = []
                }
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        //console.log(data)
                        if(result.retcode == 0) {
                            userWxShareCodeArr[task_type][share_type].push(result.share_code)
                            $.log(`获取用户微信的${share_type}互助码: ${result.share_code}\n`);
                        } else {
                            $.log(`获取用户微信的${share_type}互助码失败：${result.retmsg}\n`);
                            userWxShareCodeArr[task_type][share_type].push("")
                        }
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}


//分享任务-微信端完成
function wxShareTaskDone(share_type,share_code) {
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?`,//soy_txzxg_task_ticket_url,
            headers : {
      'Accept': `application/json, text/plain, */*`,
      'Origin': `https://wzq.tenpay.com`,
      'Accept-Encoding': `gzip, deflate, br`,
      'Cookie': `wzq_channel=4001000011..;qlappid=wx9cf8c670ebd68ce4;qlskey=v0ba8297915617d4a5a04e563fc06f92;qluin=085e9858eed8b74987258621a@wx.tenpay.com;qq_logtype=16;wx_session_time=1635600986000;wzq_qlappid=wx9cf8c670ebd68ce4;wzq_qlskey=v0ba8297915617d4a5a04e563fc06f92;wzq_qluin=os-ppuAvAlju18KcWPvtnwzt_HzQ;zxg_openid=oA0Gbju6AN_bXjZ8lIAmx0O2uPZc`,
      'Content-Type': `application/x-www-form-urlencoded`,
      'Host': `wzq.tenpay.com`,
      'Connection': `keep-alive`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000733) NetType/4G Language/zh_CN`,
      'Referer': `https://wzq.tenpay.com/mp/v2/index.html?stat_data=4003000011`,
      'Accept-Language': `zh-cn`
    },
            body : `_h5ver=2.0.1&action=share_code_info&share_type=${share_type}&share_code=${share_code}`,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
               if(result.share_code_info && result.share_code_info.status == 1) {
                   $.log(`${share_type}互助成功：对方昵称 ${result.share_code_info.nickname}\n`);
                   
               } else if(result.retmsg == "OK") {
                   $.log(`${share_type}已经互助过了\n`);
                   
               } else {
                   console.log(result)
                   
               }
                
            }else{
               console.log(`\n【${$.name}----互助】: ${result.retmsg}`)  
            }
                
            resolve()
        })
    })
}

//签到信息查询
//signType -- 0: 签到, 1: 连续签到奖励
async function signStatus(actid,signType) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let signurl = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=${actid}&channel=1&type=welfare_sign&action=home&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `application/json, text/plain, */*`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `wzq.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-cn`
            },
        };
        $.get(signurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        if (result.retcode == 0) {
                            if(!result.forbidden_code) {
                                if(signType == 0){
                                    for(let i=0; i<result.task_pkg.tasks.length; i++){
                                        resultItem = result.task_pkg.tasks[i]
                                        if(resultItem.date == todayDate){
                                            if(resultItem.status == 0){
                                                //今天未签到，去签到
                                                await $.wait(200);
                                                //await signtask(actid);
                                            } else {
                                                //今天已签到
                                                $.log(`用户今天已签到\n`);
                                            }
                                        }
                                    }
                                } else if(signType == 1) {
                                    $.log(`用户已连续签到${result.task_pkg.continue_sign_days}天，总签到天数${result.task_pkg.total_sign_days}天\n`);
                                    if(result.lotto_chance == 1 && result.lotto_ticket) {
                                        await $.wait(200);
                                        //await sign7daysAward(actid,result.lotto_ticket);
                                    }
                                }
                            } else {
                                console.log(`用户查询签到信息失败，可能已黑号：${result.forbidden_reason}\n`)
                            }
                        } else {
                            console.log(`用户查询签到信息失败：${result.retmsg}`)
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

//签到
async function signtask(actid) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let signurl = {
            url: `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=${actid}&channel=1&action=signdone&date=${todayDate}&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `application/json, text/plain, */*`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `wzq.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-cn`
            },
        };
        $.get(signurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        if (result.retcode == 0) {
                            $.log(`签到获得 ${result.reward_desc}\n`);
                            $.log(`签到时间:${time(rndtime)}\n`);
                            await $.wait(5000); //等待5秒
                        } else {
                            $.log(`签到失败：${result.retmsg}`)
                        }
                        await signStatus(actid,1)
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//连续签到奖励
async function sign7daysAward(actid,lotto_ticket) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let signurl = {
            url:  `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=${actid}&action=award&reward_ticket=${lotto_ticket}&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `application/json, text/plain, */*`,
                'Connection': `keep-alive`,
                'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `wzq.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-cn`
            },
        };
        $.get(signurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        if (result.retcode == 0) {
                            $.log(`获得连续签到奖励： ${result.reward_desc}\n`);
                        } else {
                            $.log(`领取连续签到奖励失败：${result.retmsg}`)
                        }
                        await $.wait(1000);
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//APP长牛任务
async function bullTaskDone(taskItem, extra="") {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let signurl = {
            url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=${taskItem.action}&actid=${taskItem.actid}${extra}&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `https://zqact03.tenpay.com/activity/page/raisebull/`,
                'Host': `zqact03.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Encoding': `gzip, deflate, br`,
                'Accept-Language': `zh-CN,zh-Hans;q=0.9`
            },
        };
        $.get(signurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        if(result.retcode == 0) {
                            if(result.forbidden_code > 0) {
                                $.log(`结束${taskItem.taskName}：${result.forbidden_reason}\n`);
                            } else if(result.reward_info) {
                                $.log(`${taskItem.taskName}获得: ${result.reward_info[0].reward_desc}\n`);
                                await $.wait(Math.random()*2000+7000)
                                await bullTaskDone(taskItem)
                            } else if(result.award_desc) {
                                $.log(`${taskItem.taskName}获得: ${result.award_desc}\n`);
                                await $.wait(Math.random()*1000+2000)
                                await bullTaskDone(taskItem,extra)
                            } else if(result.skin_info) {
                                $.log(`${taskItem.taskName}获得: ${result.skin_info.skin_desc}\n`);
                                await $.wait(Math.random()*2000+3000)
                                await bullTaskDone(taskItem)
                            } else if(result.skin_list && result.skin_list[0]) {
                                let numItem = result.skin_list.length
                                for(let j=0; j<numItem; j++) {
                                    let skinItem = result.skin_list[j]
                                    if(skinItem.skin_num > 1) {
                                        await bullTaskDone(bullTaskArray["sell_skin"],`&skin_type=${skinItem.skin_type}`)
                                    }
                                }
                            } else if(result.feed_reward_info) {
                                $.log(`${taskItem.taskName}获得: ${result.feed_reward_info.reward_desc}\n`);
                                if(result.level_up_status == 1) {
                                $.log(`长牛升级到等级${result.update_new_level}，获得: ${result.level_reward_info.reward_desc}\n`);
                            }
                                await $.wait(Math.random()*3000+6000)
                                await bullTaskDone(taskItem)
                            } else {
                                console.log(result)
                            } 
                        } else {
                        $.log(`${taskItem.taskName}失败：${result.retmsg}\n`);
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

//APP长牛状态+获取互助码
async function bullStatus() {
    bullStatusFlag = 0
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let signurl = {
            url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?invite_code=&help_code=&share_date=&type=bullish&action=home&actid=1105&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `https://zqact03.tenpay.com/activity/page/raisebull/`,
                'Host': `zqact03.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Encoding': `gzip, deflate, br`,
                'Accept-Language': `zh-CN,zh-Hans;q=0.9`
            },
        };
        $.get(signurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        if(result.retcode == 0) {
                            if(result.forbidden_code) {
                                $.log(`用户 ${nickname[numUser]} 可能已黑号：${result.forbidden_reason}\n`);
                            } else {
                                bullStatusFlag = 1
                                $.log(`长牛状态：`)
                                $.log(`等级: ${result.bullish_info.level}`)
                                $.log(`下一级需要经验: ${result.bullish_info.next_level_exp}`)
                                $.log(`现有经验: ${result.bullish_info.exp_value}`)
                                $.log(`现有牛气: ${result.bullish_info.bullish_value}`)
                            }
                        } else {
                            $.log(`查询长牛状态失败：${result.retmsg}\n`);
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
//提现查询
async function orderQuery() {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve, reject) => {
        let testurl = {
            url: `https://zqact03.tenpay.com/cgi-bin/shop.fcgi?action=home_v2&type=2&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Accept': `*/*`,
                'Connection': `keep-alive`,
                'Referer': `https://zqact03.tenpay.com/activity/page/exchangeRights/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `zqact03.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-CN,zh-Hans;q=0.9`
            },
        }
        $.get(testurl, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    //console.log(data)
                        let result = JSON.parse(data)
                        if(result.retcode == 0){
                            coinInfo = result.shop_asset.amount
                            if(result.shop_asset.amount>=10000){
                                let item_id=result.cash[0]['item_id']
                                await cashTicket(item_id)
                            }
                            
                        } else {
                            $.log(`提现列表获取失败：${task.retmsg}\n`);
                        }
                    
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        })
    })
}

//提现票据
async function cashTicket(item_id) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `https://zqact03.tenpay.com/cgi-bin/shop.fcgi?action=order_ticket&type=2&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Connection': `keep-alive`,
                'Referer': `https://zqact03.tenpay.com/activity/page/exchangeRights/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `zqact03.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-CN,zh-Hans;q=0.9`
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                        let result = JSON.parse(data);
                        if(result.retcode == 0){
                            await getcash(result.ticket,item_id)
                        } else {
                            $.log(`提现票据申请失败：${task.retmsg}\n`);
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

//提现请求
async function getcash(cashticketFb,item_id) {
    rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `https://zqact03.tenpay.com/cgi-bin/shop.fcgi?action=order&type=2&ticket=${cashticketFb}&item_id=${item_id}&_=${rndtime}&openid=${app_openid}&fskey=${app_fskey}&channel=1&access_token=${app_token}&_appName=${app_appName}&_appver=${app_appver}&_osVer=${app_osVer}&_devId=${app_devId}`,
            headers: {
                //'Cookie': app_ck,
                'Connection': `keep-alive`,
                'Referer': `https://zqact03.tenpay.com/activity/page/exchangeRights/`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Host': `zqact03.tenpay.com`,
                'User-Agent': soy_txzxg_UA,
                'Accept-Language': `zh-CN,zh-Hans;q=0.9`
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("腾讯自选股: API查询请求失败 ‼️‼️");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    
                        let result = JSON.parse(data);
                        if(result.retcode == 0){
                            $.log(`提现结果:${result.retmsg}`);
                            $.log(`查询剩余金额：\n`);
                            
                        } else {
                            $.log(`提现失败：${result.retmsg}\n`)
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


function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return `${y}${m}${d}`;
};


function MD5_Encrypt(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(a, b) {
        var c, d, e, f, g;
        return e = 2147483648 & a,
            f = 2147483648 & b,
            c = 1073741824 & a,
            d = 1073741824 & b,
            g = (1073741823 & a) + (1073741823 & b),
            c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f :
            g ^ e ^ f
    }

    function d(a, b, c) {
        return a & b | ~a & c
    }

    function e(a, b, c) {
        return a & c | b & ~c
    }

    function f(a, b, c) {
        return a ^ b ^ c
    }

    function g(a, b, c) {
        return b ^ (a | ~c)
    }

    function h(a, e, f, g, h, i, j) {
        return a = c(a, c(c(d(e, f, g), h), j)),
            c(b(a, i), e)
    }

    function i(a, d, f, g, h, i, j) {
        return a = c(a, c(c(e(d, f, g), h), j)),
            c(b(a, i), d)
    }

    function j(a, d, e, g, h, i, j) {
        return a = c(a, c(c(f(d, e, g), h), j)),
            c(b(a, i), d)
    }

    function k(a, d, e, f, h, i, j) {
        return a = c(a, c(c(g(d, e, f), h), j)),
            c(b(a, i), d)
    }

    function l(a) {
        for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i =
                0; c > i;)
            b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | a.charCodeAt(i) << h,
            i++;
        return b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | 128 << h,
            g[f - 2] = c << 3,
            g[f - 1] = c >>> 29,
            g
    }

    function m(a) {
        var b, c, d = "",
            e = "";
        for (c = 0; 3 >= c; c++)
            b = a >>> 8 * c & 255,
            e = "0" + b.toString(16),
            d += e.substr(e.length - 2, 2);
        return d
    }

    function n(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                b += String.fromCharCode(d >> 6 & 63 | 128),
                b += String.fromCharCode(63 & d | 128))
        }
        return b
    }

    var o, p, q, r, s, t, u, v, w, x = [],
        y = 7,
        z = 12,
        A = 17,
        B = 22,
        C = 5,
        D = 9,
        E = 14,
        F = 20,
        G = 4,
        H = 11,
        I = 16,
        J = 23,
        K = 6,
        L = 10,
        M = 15,
        N = 21;
    for (a = n(a),
        x = l(a),
        t = 1732584193,
        u = 4023233417,
        v = 2562383102,
        w = 271733878,
        o = 0; o < x.length; o += 16)
        p = t,
        q = u,
        r = v,
        s = w,
        t = h(t, u, v, w, x[o + 0], y, 3614090360),
        w = h(w, t, u, v, x[o + 1], z, 3905402710),
        v = h(v, w, t, u, x[o + 2], A, 606105819),
        u = h(u, v, w, t, x[o + 3], B, 3250441966),
        t = h(t, u, v, w, x[o + 4], y, 4118548399),
        w = h(w, t, u, v, x[o + 5], z, 1200080426),
        v = h(v, w, t, u, x[o + 6], A, 2821735955),
        u = h(u, v, w, t, x[o + 7], B, 4249261313),
        t = h(t, u, v, w, x[o + 8], y, 1770035416),
        w = h(w, t, u, v, x[o + 9], z, 2336552879),
        v = h(v, w, t, u, x[o + 10], A, 4294925233),
        u = h(u, v, w, t, x[o + 11], B, 2304563134),
        t = h(t, u, v, w, x[o + 12], y, 1804603682),
        w = h(w, t, u, v, x[o + 13], z, 4254626195),
        v = h(v, w, t, u, x[o + 14], A, 2792965006),
        u = h(u, v, w, t, x[o + 15], B, 1236535329),
        t = i(t, u, v, w, x[o + 1], C, 4129170786),
        w = i(w, t, u, v, x[o + 6], D, 3225465664),
        v = i(v, w, t, u, x[o + 11], E, 643717713),
        u = i(u, v, w, t, x[o + 0], F, 3921069994),
        t = i(t, u, v, w, x[o + 5], C, 3593408605),
        w = i(w, t, u, v, x[o + 10], D, 38016083),
        v = i(v, w, t, u, x[o + 15], E, 3634488961),
        u = i(u, v, w, t, x[o + 4], F, 3889429448),
        t = i(t, u, v, w, x[o + 9], C, 568446438),
        w = i(w, t, u, v, x[o + 14], D, 3275163606),
        v = i(v, w, t, u, x[o + 3], E, 4107603335),
        u = i(u, v, w, t, x[o + 8], F, 1163531501),
        t = i(t, u, v, w, x[o + 13], C, 2850285829),
        w = i(w, t, u, v, x[o + 2], D, 4243563512),
        v = i(v, w, t, u, x[o + 7], E, 1735328473),
        u = i(u, v, w, t, x[o + 12], F, 2368359562),
        t = j(t, u, v, w, x[o + 5], G, 4294588738),
        w = j(w, t, u, v, x[o + 8], H, 2272392833),
        v = j(v, w, t, u, x[o + 11], I, 1839030562),
        u = j(u, v, w, t, x[o + 14], J, 4259657740),
        t = j(t, u, v, w, x[o + 1], G, 2763975236),
        w = j(w, t, u, v, x[o + 4], H, 1272893353),
        v = j(v, w, t, u, x[o + 7], I, 4139469664),
        u = j(u, v, w, t, x[o + 10], J, 3200236656),
        t = j(t, u, v, w, x[o + 13], G, 681279174),
        w = j(w, t, u, v, x[o + 0], H, 3936430074),
        v = j(v, w, t, u, x[o + 3], I, 3572445317),
        u = j(u, v, w, t, x[o + 6], J, 76029189),
        t = j(t, u, v, w, x[o + 9], G, 3654602809),
        w = j(w, t, u, v, x[o + 12], H, 3873151461),
        v = j(v, w, t, u, x[o + 15], I, 530742520),
        u = j(u, v, w, t, x[o + 2], J, 3299628645),
        t = k(t, u, v, w, x[o + 0], K, 4096336452),
        w = k(w, t, u, v, x[o + 7], L, 1126891415),
        v = k(v, w, t, u, x[o + 14], M, 2878612391),
        u = k(u, v, w, t, x[o + 5], N, 4237533241),
        t = k(t, u, v, w, x[o + 12], K, 1700485571),
        w = k(w, t, u, v, x[o + 3], L, 2399980690),
        v = k(v, w, t, u, x[o + 10], M, 4293915773),
        u = k(u, v, w, t, x[o + 1], N, 2240044497),
        t = k(t, u, v, w, x[o + 8], K, 1873313359),
        w = k(w, t, u, v, x[o + 15], L, 4264355552),
        v = k(v, w, t, u, x[o + 6], M, 2734768916),
        u = k(u, v, w, t, x[o + 13], N, 1309151649),
        t = k(t, u, v, w, x[o + 4], K, 4149444226),
        w = k(w, t, u, v, x[o + 11], L, 3174756917),
        v = k(v, w, t, u, x[o + 2], M, 718787259),
        u = k(u, v, w, t, x[o + 9], N, 3951481745),
        t = c(t, p),
        u = c(u, q),
        v = c(v, r),
        w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
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