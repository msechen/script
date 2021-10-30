/*

软件名称:腾讯自选股app

注意:这个是跑app的,不是跑微信公众号的

自行抓包变量填写:
soy_txzxg_openid
soy_txzxg_token
soy_txzxg_fskey
soy_txzxg_dev
soy_txzxg_mid
soy_txzxg_md5mid
soy_txzxg_devid

抓包时找带有这个 https://wzq.tenpay.com 的链接

在连接中找需要变量,自行找关键词

v2p没有写

有2个分享任务是不做的,找不到数据

cron 0 11,18,22 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_txzxg.js

*/


const $ = new Env('腾讯自选股');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0; //响应日志开关,默认关闭
const app_soy_txzxg_openid = [],app_soy_txzxg_token=[],app_soy_txzxg_fskey=[],app_soy_txzxg_dev=[],app_soy_txzxg_md5mid=[],app_soy_txzxg_devid=[],app_soy_txzxg_mid=[],txzxg_count = ''
let task_ticket='',task_ticket_state=0
let dp_status=0,gg_status=0,dzx_status=0,rzx_status=0,jzx_status=0,lzx_status=0,gz_status=0,krd_status=0,fhq_status=0,fzx_status=0
let subTitle = ``;
let status;
status = (status = ($.getval("txzxg_status") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let soy_txzxg_openid = $.getdata('soy_txzxg_openid')

!(async () => {

if ($.isNode()) {
apptz = process.env.apptz;
apptx = process.env.apptx;
appyq = process.env.appyq;
//||process.env.soy_txzxg_openid!==''
//console.log(process.env.soy_txzxg_openid)
    if(!process.env.soy_txzxg_openid){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_openid`);
        return;
    }else if(process.env.soy_txzxg_token=='undefined'){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_token`);
        return;
    }else if(process.env.soy_txzxg_fskey=='undefined'){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_openid`);
        return;
    }
      
    //变量soy_txzxg_openid
    if (process.env.soy_txzxg_openid && process.env.soy_txzxg_openid.indexOf('@') > -1) {
        soy_txzxg_openid = process.env.soy_txzxg_openid.split('@');
    } else if (process.env.soy_txzxg_openid && process.env.soy_txzxg_openid.indexOf('\n') > -1) {
        soy_txzxg_openid = process.env.soy_txzxg_openid.split('\n');
    } else if(process.env.soy_txzxg_openid && process.env.soy_txzxg_openid.indexOf('#') > -1){
        soy_txzxg_openid = process.env.soy_txzxg_openid.split('#');
    }else{
        soy_txzxg_openid = process.env.soy_txzxg_openid.split();
    };
    
    Object.keys(soy_txzxg_openid).forEach((item) => {
        if (soy_txzxg_openid[item]) {
            app_soy_txzxg_openid.push(soy_txzxg_openid[item]);
        };
    });
    
    //变量soy_txzxg_token
    if (process.env.soy_txzxg_token && process.env.soy_txzxg_token.indexOf('@') > -1) {
        soy_txzxg_token = process.env.soy_txzxg_token.split('@');
    } else if (process.env.soy_txzxg_token && process.env.soy_txzxg_token.indexOf('\n') > -1) {
        soy_txzxg_token = process.env.soy_txzxg_token.split('\n');
    } else if(process.env.soy_txzxg_token && process.env.soy_txzxg_token.indexOf('#') > -1){
        soy_txzxg_token = process.env.soy_txzxg_token.split('#');
    }else{
        soy_txzxg_token = process.env.soy_txzxg_token.split();
    };
    
    Object.keys(soy_txzxg_token).forEach((item) => {
        if (soy_txzxg_token[item]) {
            app_soy_txzxg_token.push(soy_txzxg_token[item]);
        };
    });
    
    //变量soy_txzxg_fskey
    if (process.env.soy_txzxg_fskey && process.env.soy_txzxg_fskey.indexOf('@') > -1) {
        soy_txzxg_fskey = process.env.soy_txzxg_fskey.split('@');
    } else if (process.env.soy_txzxg_fskey && process.env.soy_txzxg_fskey.indexOf('\n') > -1) {
        soy_txzxg_fskey = process.env.soy_txzxg_fskey.split('\n');
    } else if(process.env.soy_txzxg_fskey && process.env.soy_txzxg_fskey.indexOf('#') > -1){
        soy_txzxg_fskey = process.env.soy_txzxg_fskey.split('#');
    }else{
        soy_txzxg_fskey = process.env.soy_txzxg_fskey.split();
    };
    
    Object.keys(soy_txzxg_fskey).forEach((item) => {
        if (soy_txzxg_fskey[item]) {
            app_soy_txzxg_fskey.push(soy_txzxg_fskey[item]);
        };
    });
    
    //变量soy_txzxg_dev
    if(!process.env.soy_txzxg_dev||process.env.soy_txzxg_dev==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_dev ,将默认分配`);
        soy_txzxg_dev='Redmi'
    }else{
    if (process.env.soy_txzxg_dev && process.env.soy_txzxg_dev.indexOf('@') > -1) {
        soy_txzxg_dev = process.env.soy_txzxg_dev.split('@');
    } else if (process.env.soy_txzxg_dev && process.env.soy_txzxg_dev.indexOf('\n') > -1) {
        soy_txzxg_dev = process.env.soy_txzxg_dev.split('\n');
    } else if(process.env.soy_txzxg_dev && process.env.soy_txzxg_dev.indexOf('#') > -1){
        soy_txzxg_dev = process.env.soy_txzxg_dev.split('#');
    }else{
        soy_txzxg_dev = process.env.soy_txzxg_dev.split();
    };
    
    Object.keys(soy_txzxg_dev).forEach((item) => {
        if (soy_txzxg_dev[item]) {
            app_soy_txzxg_dev.push(soy_txzxg_dev[item]);
        };
    });  
        
    }
    
    
    //变量soy_txzxg_mid
    if(!process.env.soy_txzxg_mid||process.env.soy_txzxg_mid==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_mid ,将默认分配`);
        soy_txzxg_mid='79141f967ee3474c0b2ffba43e674bc84bc2ba1e'
    }else{
       
    if (process.env.soy_txzxg_mid && process.env.soy_txzxg_mid.indexOf('@') > -1) {
        soy_txzxg_mid = process.env.soy_txzxg_mid.split('@');
    } else if (process.env.soy_txzxg_mid && process.env.soy_txzxg_mid.indexOf('\n') > -1) {
        soy_txzxg_mid = process.env.soy_txzxg_mid.split('\n');
    } else if(process.env.soy_txzxg_mid && process.env.soy_txzxg_mid.indexOf('#') > -1){
        soy_txzxg_mid = process.env.soy_txzxg_mid.split('#');
    }else{
        soy_txzxg_mid = process.env.soy_txzxg_mid.split();
    };
    
    Object.keys(soy_txzxg_mid).forEach((item) => {
        if (soy_txzxg_mid[item]) {
            app_soy_txzxg_mid.push(soy_txzxg_mid[item]);
        };
    }); 
    }
    
    //变量soy_txzxg_md5mid
    if(!process.env.soy_txzxg_md5mid||process.env.soy_txzxg_md5mid==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_md5mid ,将默认分配`);
        soy_txzxg_md5mid='abc3aa0e5dbdfb469d232cf415f6cf27'
    }else{
       if (process.env.soy_txzxg_md5mid && process.env.soy_txzxg_md5mid.indexOf('@') > -1) {
        soy_txzxg_md5mid = process.env.soy_txzxg_md5mid.split('@');
    } else if (process.env.soy_txzxg_md5mid && process.env.soy_txzxg_md5mid.indexOf('\n') > -1) {
        soy_txzxg_md5mid = process.env.soy_txzxg_md5mid.split('\n');
    } else if(process.env.soy_txzxg_md5mid && process.env.soy_txzxg_md5mid.indexOf('#') > -1){
        soy_txzxg_md5mid = process.env.soy_txzxg_md5mid.split('#');
    }else{
        soy_txzxg_md5mid = process.env.soy_txzxg_md5mid.split();
    };
    
    Object.keys(soy_txzxg_md5mid).forEach((item) => {
        if (soy_txzxg_md5mid[item]) {
            app_soy_txzxg_md5mid.push(soy_txzxg_md5mid[item]);
        };
    }); 
    }
    
    //变量soy_txzxg_devid
    if(!process.env.soy_txzxg_devid||process.env.soy_txzxg_devid==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_devid ,将默认分配`);
        soy_txzxg_devid='abc3aa0e5dbdfb469d232cf415f6cf27'
    }else{
       if (process.env.soy_txzxg_devid && process.env.soy_txzxg_devid.indexOf('@') > -1) {
        soy_txzxg_devid = process.env.soy_txzxg_devid.split('@');
    } else if (process.env.soy_txzxg_devid && process.env.soy_txzxg_devid.indexOf('\n') > -1) {
        soy_txzxg_devid = process.env.soy_txzxg_devid.split('\n');
    } else if(process.env.soy_txzxg_devid && process.env.soy_txzxg_devid.indexOf('#') > -1){
        soy_txzxg_devid = process.env.soy_txzxg_devid.split('#');
    }else{
        soy_txzxg_devid = process.env.soy_txzxg_devid.split();
    };
    
    Object.keys(soy_txzxg_devid).forEach((item) => {
        if (soy_txzxg_devid[item]) {
            app_soy_txzxg_devid.push(soy_txzxg_devid[item]);
        };
    }); 
    }
    
    
    
    
    
}else{
	if (typeof $request !== "undefined") {
    await get_appdata()
  } else{

if(!$.getdata('soy_txzxg_dev')){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_openid`);
        return;
    }else if($.getdata('soy_txzxg_token')){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_token`);
        return;
    }else if($.getdata('soy_txzxg_fskey')){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_openid`);
        return;
    }
    
app_soy_txzxg_openid.push($.getdata('soy_txzxg_openid'))
app_soy_txzxg_token.push($.getdata('soy_txzxg_token'))
app_soy_txzxg_fskey.push($.getdata('soy_txzxg_fskey'))

    //变量soy_txzxg_devapp_soy_txzxg_dev.push($.getdata('soy_txzxg_dev'))
    if(!$.getdata('soy_txzxg_dev')|| $.getdata('soy_txzxg_dev')==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_dev ,将默认分配`);
        //soy_txzxg_dev='Redmi'
    }else{
    app_soy_txzxg_dev.push($.getdata('soy_txzxg_dev'));  
        
    }
    
    
    //变量soy_txzxg_mid
    if(!$.getdata('soy_txzxg_mid')||$.getdata('soy_txzxg_mid')==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_mid ,将默认分配`);
        //soy_txzxg_mid='79141f967ee3474c0b2ffba43e674bc84bc2ba1e'
    }else{
       
    app_soy_txzxg_mid.push($.getdata('soy_txzxg_mid'))
    }
    
    //变量soy_txzxg_md5mid
    if(!$.getdata('soy_txzxg_md5mid')||$.getdata('soy_txzxg_md5mid')==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_md5mid ,将默认分配`);
        //soy_txzxg_md5mid='abc3aa0e5dbdfb469d232cf415f6cf27'
    }else{
       app_soy_txzxg_md5mid.push($.getdata('soy_txzxg_md5mid')) 
    }
    
    //变量soy_txzxg_devid
    if(!$.getdata('soy_txzxg_devid')||$.getdata('soy_txzxg_devid')==''){
        console.log(`\n【${$.name}】：未提供变量 soy_txzxg_devid ,将默认分配`);
        soy_txzxg_devid='abc3aa0e5dbdfb469d232cf415f6cf27'
    }else{
       //app_soy_txzxg_devid.push($.getdata('soy_txzxg_devid'))
    }

  }
apptz = $.getdata('apptz');
apptx = $.getdata('apptx');
appyq = $.getdata('appyq');
    
    let txzxg_count = ($.getval('txzxg_count') || '1');
  for (let i = 2; i <= txzxg_count; i++) {
    app_soy_txzxg_openid.push($.getdata(`app_soy_txzxg_openid${i}`))
    app_soy_txzxg_token.push($.getdata(`app_soy_txzxg_token${i}`))
   app_soy_txzxg_fskey.push($.getdata(`app_soy_txzxg_fskey${i}`))
   
   app_soy_txzxg_devid.push($.getdata(`soy_txzxg_devid${i}`))
   app_soy_txzxg_md5mid.push($.getdata(`soy_txzxg_md5mid${i}`)) 
   app_soy_txzxg_mid.push($.getdata(`soy_txzxg_mid${i}`))
   app_soy_txzxg_dev.push($.getdata(`soy_txzxg_dev${i}`));  
}
}
    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_txzxg_openid.length} 个账号】===\n`);
    if(!apptz){apptz=true};
    if(!apptx){apptx=true};
      
for (i = 0; i < app_soy_txzxg_openid.length; i++) {
    soy_txzxg_openid=app_soy_txzxg_openid[i]
    soy_txzxg_token=app_soy_txzxg_token[i]
    soy_txzxg_fskey=app_soy_txzxg_fskey[i]
    
    if(!process.env.soy_txzxg_devid|| !$.getdata(`soy_txzxg_devid`)){
        soy_txzxg_devid='abc3aa0e5dbdfb469d232cf415f6cf27'
    }else{
      soy_txzxg_devid=app_soy_txzxg_devid[i]  
    }
    
    if(!process.env.soy_txzxg_dev|| !$.getdata(`soy_txzxg_dev`)){
        soy_txzxg_dev='Redmi'
    }else{
      soy_txzxg_dev=app_soy_txzxg_dev[i]  
    }
    
    if(!process.env.soy_txzxg_mid|| !$.getdata(`soy_txzxg_mid`)){
        soy_txzxg_mid='79141f967ee3474c0b2ffba43e674bc84bc2ba1e'
    }else{
      soy_txzxg_mid=app_soy_txzxg_mid[i]  
    }
    
    if(!process.env.soy_txzxg_md5mid|| !$.getdata(`soy_txzxg_md5mid`)){
        soy_txzxg_md5mid='abc3aa0e5dbdfb469d232cf415f6cf27'
    }else{
      soy_txzxg_md5mid=app_soy_txzxg_md5mid[i]  
    }
    
    
    soy_txzxg_list_url=`https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?action=home&type=routine&actid=1111&invite_code=&_=1634063821953&openid=${soy_txzxg_openid}&fskey=${soy_txzxg_fskey}&channel=1&access_token=${soy_txzxg_token}&_appName=android&_appver=9.4.1&_osVer=10&_devId=${soy_txzxg_devid}`
    
    soy_txzxg_task_ticket_url=`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1111&uin=${soy_txzxg_openid}&check=11&appid=wxcbc3ab3807acb685&openid=${soy_txzxg_openid}&fskey=${soy_txzxg_fskey}&access_token=${soy_txzxg_token}&g_openid=${soy_txzxg_openid}&uin=${soy_txzxg_openid}&_appName=android&_dev=${soy_txzxg_dev}&_devId=${soy_txzxg_devid}&_mid=${soy_txzxg_devid}&_md5mid=${soy_txzxg_md5mid}&_appver=9.4.1&_ifChId=3178&_screenW=1080&_screenH=2210&_osVer=10&_uin=${soy_txzxg_openid}&_wxuin=${soy_txzxg_openid}&_net=WIFI&__random_suffix=17671&_buildtype=store&buildtime=2021-09-29+17%3A01%3A24&lang=zh_CN`
    
    soy_txzxg_headers={"Host": "wzq.tenpay.com","referer": "http://zixuanguapp.finance.qq.com","accept-encoding": "gzip","user-agent": "okhttp/3.12.13"}
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    await soy_txzxg_task_list()
    await soy_txzxg_task_sign()
    console.log(`\n【${$.name}---开始做未完成任务】`)
    
    //查看今日大盘行情
    if(dp_status==1){
        await soy_txzxg_task_ticket(dp_id,dp_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(dp_title)
        }
    }
    //浏览行情-港股
    if(gg_status==1){
        await soy_txzxg_task_ticket(gg_id,gg_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(gg_title)
        }
        
    }
    //阅读一篇资讯
    if(dzx_status==1){
        await soy_txzxg_task_ticket(dzx_id,dzx_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(dzx_title)
        }
        
    }
    //查看热搜并添加自选
    if(rzx_status==1){
        await soy_txzxg_task_ticket(rzx_id,rzx_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(rzx_title)
        }
        
    }
    //添加精选策略股票到自选
    if(jzx_status==1){
        await soy_txzxg_task_ticket(jzx_id,jzx_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(jzx_title)
        }
        
    }
    //添加龙虎榜股票到自选
    if(lzx_status==1){
        await soy_txzxg_task_ticket(lzx_id,lzx_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(lzx_title)
        }
        
    }
    //关注一个社区用户
    if(gz_status==1){
        await soy_txzxg_task_ticket(gz_id,gz_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(gz_title)
        }
        
    }
    //浏览选股题材热点
    if(krd_status==1){
        await soy_txzxg_task_ticket(krd_id,krd_tid)
        if(task_ticket_state==1){
            await soy_txzxg_gettask(krd_title)
        }
        
    }
    //分享个股行情
    if(fhq_status==1){
        //await soy_txzxg_task_ticket(fhq_id,fhq_tid)
        //if(task_ticket_state==1){
            await soy_txzxg_getapp_ggCode()
            //await soy_txzxg_gettask(fhq_title)
        //}
        
    }
    //分享一篇资讯
    if(fzx_status==1){
        //await soy_txzxg_task_ticket(fzx_id,fzx_tid)
        //if(task_ticket_state==1){
            await soy_txzxg_getapp_zxCode()
            //await soy_txzxg_gettask(fzx_title)
        //}
        
    }
    
    
    

};


//if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());


//获取ck
function get_appdata() {
   if ($request.url.indexOf("readerInfo") > -1) {
       const soy_txzxg_headers = JSON.stringify($request.headers)
       if(soy_txzxg_headers){
           $.setdata(soy_txzxg_headers,`soy_txzxg_headers${status}`)
           console.log(`\n【${$.name}---获取数据】: 成功获取到协议头`)
           subTitle+=`\n【${$.name}---获取数据】: 成功获取到协议头`
       }else{
           console.log(`\n【${$.name}---获取数据】: 没有获取到协议头`)
           subTitle+=`\n【${$.name}---获取数据】: 成功获取到协议头`
       }
   }else{
     console.log(`\n【${$.name}---获取数据】: 自动抓包没有找到对应链接`)
     subTitle+=`\n【${$.name}---获取数据】: 自动抓包没有找到对应链接`
   }
}

function soy_txzxg_task_sign() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=2002&action=signdone&date=20211030&_=1635598552980&openid=${soy_txzxg_openid}&fskey=${soy_txzxg_fskey}&channel=1&access_token=${变量soy_txzxg_token}&_appName=android&_appver=9.4.1&_osVer=10&_devId=${soy_txzxg_devid}`,
            headers : soy_txzxg_headers,
            //body : ``,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
                console.log(`\n【${$.name}---签到】: 获得${result.amount}金币`)
  
                
            }else{
               console.log(`\n【${$.name}---签到】: ${result.retmsg}`)  
            }
                
            resolve()
        })
    })
}

//任务列表
function soy_txzxg_task_list() {
    return new Promise((resolve, reject) => {
        $.get({
            url : soy_txzxg_list_url,
            headers : soy_txzxg_headers,
            //body : ``,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
                
                  if(result.task_pkg[0].tasks[0].status==1){
                    console.log(`\n【${$.name}---今日任务状态】: \n\n---查看今日大盘行情：已完成`)
                }else{
                    console.log(`\n【${$.name}---今日任务状态】: \n\n---查看今日大盘行情：未完成`)
                    dp_status=1
                    dp_title='查看今日大盘行情'
                    dp_id=result.task_pkg[0].tasks[0].id
                    dp_tid=result.task_pkg[0].tasks[0].tid
                }
                
                if(result.task_pkg[0].tasks[1].status==1){
                    
                    console.log(`---浏览行情-港股：已完成`)
                }else{
                    console.log(`---浏览行情-港股：未完成`)
                    gg_status=1
                    gg_title='浏览行情-港股'
                    gg_id=result.task_pkg[0].tasks[1].id
                    gg_tid=result.task_pkg[0].tasks[1].tid
                }
                
                if(result.task_pkg[0].tasks[2].status==1){
                    console.log(`---阅读一篇资讯：已完成`)
                }else{
                    console.log(`---阅读一篇资讯：未完成`)
                    dzx_status=1
                    dzx_title='阅读一篇资讯'
                    dzx_id=result.task_pkg[0].tasks[2].id
                    dzx_tid=result.task_pkg[0].tasks[2].tid
                }
                
                if(result.task_pkg[0].tasks[3].status==1){
                    console.log(`---查看热搜并添加自选：已完成`)
                }else{
                    console.log(`---查看热搜并添加自选：未完成`)
                    rzx_status=1
                    rzx_title='查看热搜并添加自选'
                    rzx_id=result.task_pkg[0].tasks[3].id
                    rzx_tid=result.task_pkg[0].tasks[3].tid
                }
                
                if(result.task_pkg[0].tasks[4].status==1){
                    console.log(`---添加精选策略股票到自选：已完成`)
                }else{
                    console.log(`---添加精选策略股票到自选：未完成`)
                    jzx_status=1
                    jzx_title='添加精选策略股票到自选'
                    jzx_id=result.task_pkg[0].tasks[4].id
                    jzx_tid=result.task_pkg[0].tasks[4].tid
                }
                
                if(result.task_pkg[0].tasks[5].status==1){
                    console.log(`---添加龙虎榜股票到自选：已完成`)
                }else{
                    console.log(`---添加龙虎榜股票到自选：未完成`)
                    lzx_status=1
                    lzx_title='添加龙虎榜股票到自选'
                    lzx_id=result.task_pkg[0].tasks[5].id
                    lzx_tid=result.task_pkg[0].tasks[5].tid
                }
                
                if(result.task_pkg[0].tasks[6].status==1){
                    console.log(`---关注一个社区用户：已完成`)
                }else{
                    console.log(`---关注一个社区用户：未完成`)
                    gz_status=1
                    gz_title='关注一个社区用户'
                    gz_id=result.task_pkg[0].tasks[6].id
                    gz_tid=result.task_pkg[0].tasks[6].tid
                }
                
                if(result.task_pkg[0].tasks[7].status==1){
                    console.log(`---浏览选股题材热点：已完成`)
                }else{
                    console.log(`---浏览选股题材热点：未完成`)
                    krd_status=1
                    krd_title='浏览选股题材热点'
                    krd_id=result.task_pkg[0].tasks[7].id
                    krd_tid=result.task_pkg[0].tasks[7].tid
                }
                
                if(result.task_pkg[0].tasks[8].status==1){
                    console.log(`---分享个股行情：已完成`)
                }else{
                    console.log(`---分享个股行情：未完成`)
                    fhq_status=1
                    fhq_title='分享个股行情'
                    fhq_id=result.task_pkg[0].tasks[8].id
                    fhq_tid=result.task_pkg[0].tasks[8].tid
                }
                
                if(result.task_pkg[0].tasks[9].status==1){
                    console.log(`---分享一篇资讯：已完成`)
                }else{
                    console.log(`---分享一篇资讯：未完成`)
                    fzx_status=1
                    fzx_title='分享一篇资讯'
                    fzx_id=result.task_pkg[0].tasks[9].id
                    fzx_tid=result.task_pkg[0].tasks[9].tid
                }
                //console.log(gg_id,gg_tid)
                 
                
            }else{
               console.log(`\n【${$.name}---获取任务列表】: ${result.retmsg}`) 
               
            }
            
             
            resolve()
        })
    })
}

//获取票据
function soy_txzxg_task_ticket(id,tid) {
    return new Promise((resolve, reject) => {
        $.get({
            url : soy_txzxg_task_ticket_url,
            headers : soy_txzxg_headers,
            //body : ``,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
                console.log(`\n【${$.name}---获取票据】: 成功获取到票据,为:${result.task_ticket}`)
                task_ticket=result.task_ticket
                soy_txzxg_task_url=task_url(id,tid)
                task_ticket_state=1
  
                
            }else{
               console.log(`\n【${$.name}---获取票据】: ${result.retmsg}`)  
            }
                
            resolve()
        })
    })
}

function soy_txzxg_gettask(title) {
    return new Promise((resolve, reject) => {
        $.get({
            url : soy_txzxg_task_url,
            headers : soy_txzxg_headers,
            //body : ``,
        }, async(error, response, data) => {
            //console.log(title)
            //console.log(data)
            /*let result = JSON.parse(data)
            if(result.retcode==0){
                console.log(`\n【${$.name}---获取票据】: 成功获取到票据,为:${result.task_ticket}`)
                task_ticket=result.task_ticket
                soy_txzxg_task_url=task_url()
                task_ticket_state=1
  
                
            }else{
               console.log(`\n【${$.name}---获取票据】: ${result.retmsg}`)  
            }*/
                
            resolve()
        })
    })
}
//获取分享个股行情分享code
function soy_txzxg_getapp_ggCode() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?action=query_share_code&channel=1&share_type=task_51_1111&uin=${soy_txzxg_openid}&check=11&appid=wxcbc3ab3807acb685&openid=${soy_txzxg_openid}&fskey=${soy_txzxg_fskey}&access_token=${soy_txzxg_token}&g_openid=${soy_txzxg_openid}&uin=${soy_txzxg_openid}&_appName=android&_dev=${soy_txzxg_devid}&_devId=${soy_txzxg_devid}&_mid=${soy_txzxg_devid}&_md5mid=${soy_txzxg_md5mid}&_appver=9.4.1&_ifChId=3178&_screenW=1080&_screenH=2210&_osVer=10&_uin=${soy_txzxg_openid}&_wxuin=${soy_txzxg_openid}&_net=WIFI&__random_suffix=87512&_buildtype=store&buildtime=2021-09-29+17%3A01%3A24&lang=zh_CN`,
            headers : {"Host": "wzq.tenpay.com","referer": "http://zixuanguapp.finance.qq.com","accept-encoding": "gzip","user-agent":"okhttp/3.12.13"},
            //body : ``,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
                let share_code=result.share_code
                console.log(`\n【${$.name}---获取code】: 成功获取到code,为:${share_code}`)
                //soy_txzxg_task_url=task_url()
                //task_ticket_state=1
                await soy_txzxg_runShareCode(share_code)
                
            }else{
               console.log(`\n【${$.name}----获取code】: ${result.retmsg}`)  
            }
                
            resolve()
        })
    })
}
//获取分享资讯code
function soy_txzxg_getapp_zxCode() {
    return new Promise((resolve, reject) => {
        $.get({
            url : `https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?action=query_share_code&share_type=news_share&channel=1&zappid=zxg_h5&sign=5f778eabaebc6a61d6415d729f29530c&nonce=5500&timestamp=1635602383726&check=11&appid=wxcbc3ab3807acb685&openid=${soy_txzxg_openid}&fskey=${soy_txzxg_fskey}&access_token=${soy_txzxg_token}&g_openid=${soy_txzxg_openid}&uin=${soy_txzxg_openid}&_appName=android&_dev=SKW-A0&_devId=${soy_txzxg_devid}&_mid=${soy_txzxg_devid}&_md5mid=${soy_txzxg_md5mid}&_appver=9.4.1&_ifChId=3178&_screenW=1080&_screenH=2210&_osVer=10&_uin=${soy_txzxg_openid}&_wxuin=${soy_txzxg_openid}&_net=WIFI&__random_suffix=78034&_buildtype=store&buildtime=2021-09-29+17%3A01%3A24&lang=zh_CN&hunheshiType=shy`,
            headers : {"Host": "wzq.tenpay.com","referer": "http://zixuanguapp.finance.qq.com","accept-encoding": "gzip","user-agent":"okhttp/3.12.13"},
            //body : ``,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
                let share_code=result.share_code
                console.log(`\n【${$.name}---获取code】: 成功获取到code,为:${share_code}`)
                //soy_txzxg_task_url=task_url()
                //task_ticket_state=1
                await soy_txzxg_runShareCode(share_code)
                
            }else{
               console.log(`\n【${$.name}----获取code】: ${result.retmsg}`)  
            }
                
            resolve()
        })
    })
}
//做分享任务
function soy_txzxg_runShareCode(code) {
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
            body : `_h5ver=2.0.1&action=share_code_info&share_type=task_51_1111&share_code=${code}`,
        }, async(error, response, data) => {
            //console.log(data)
            let result = JSON.parse(data)
            if(result.retcode==0){
                console.log(`\n【${$.name}---分享个股行情】: 好友助力分享成功`)
                
            }else{
               console.log(`\n【${$.name}----分享个股行情】: ${result.retmsg}`)  
            }
                
            resolve()
        })
    })
}

function task_url(id,tid) {
    url=`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1111&id=${id}&tid=${tid}&task_ticket=${task_ticket}&uin=${soy_txzxg_openid}&check=11&appid=wxcbc3ab3807acb685&openid=${soy_txzxg_openid}&fskey=${soy_txzxg_fskey}&access_token=${soy_txzxg_token}&g_openid=${soy_txzxg_openid}&_appName=android&_dev=SKW-A0&_devId=${soy_txzxg_devid}&_mid=${soy_txzxg_devid}&_md5mid=${soy_txzxg_md5mid}&_appver=9.4.1&_ifChId=3178&_screenW=1080&_screenH=2210&_osVer=10&_uin=${soy_txzxg_openid}&_wxuin=${soy_txzxg_openid}&_net=WIFI&__random_suffix=21141&_buildtype=store&buildtime=2021-09-29%2017%3A01%3A24&lang=zh_CN`
    return url
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