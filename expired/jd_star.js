/*
星店长
Last Modified time: 2021-11-03 23:40
活动入口：京东APP首页-搜索-星店长。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#星店长
5 7,12,20 * * * https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js, tag=星店长, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_star.png, enabled=true
===================Loon==============
[Script]
cron "5 7,12,20 * * *" script-path=https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js, tag=星店长
===============Surge===============
[Script]
星店长 = type=cron,cronexp="5 7,12,20 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js
====================================小火箭=============================
星店长 = type=cron,script-path=https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js, cronexpr="5 7,12,20 * * *", timeout=3600, enable=true
 */
const $ = new Env('星店长');
const { url } = require('inspector');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const JD_API_HOST = 'https://api.m.jd.com/';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = '',
    shareCodesArr = [];
let shareCodes='';let isLoginInfo={};let linkId="nUW_swWdzGTw9TREVAMBCw";let code='';
var ItemArr1=[];var ItemArr2=[];


if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (!cookiesArr[i]) {
            continue
        }
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        $.index = i + 1;
        $.isLogin = true;
        $.canHelp = true;
        $.nickName = '';
        message = '';
        await TotalBean();
        isLoginInfo[$.UserName]=$.isLogin;
        console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
        if (!$.isLogin) {
            $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
            if ($.isNode()) {
                await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
            }
            continue
        }
        await getUA()
        await main()
    }
    console.log(`\n********* 开始互助 *********\n`);
    for (let i = 0; i < cookiesArr.length; i++) {
      if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.canHelp = true;
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      if (!isLoginInfo[$.UserName]) continue
      if ($.canHelp && (shareCodesArr && shareCodesArr.length)) {
        for (let j = 0; j < shareCodesArr.length && $.canHelp; j++) {
            console.log(`【${$.UserName}】去助力${shareCodesArr[j]}`)
            await help(shareCodesArr[j])
            await $.wait(3000)
            }
          }
        }
      }
})()
.catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

    async function main(){
        await starShopPageInfo();
        await $.wait(1000);
        console.log(`\n开始做签到任务`)
        await sign();
        await $.wait(1000);
        console.log(`\n开始做浏览会场任务`)
        await doTask1();
        await $.wait(1000);
        console.log(`\n开始做浏览品牌小店任务`)
        await doTask2();
        console.log(`\n去瓜分红包🎈`)
        await starShopDraw();
    }

    function sign() {
        return new Promise(async resolve => {
          const body = {
            "taskType":"SIGN",
            "taskId":388,
            "linkId":`${linkId}`
          }
          $.post(taskUrl('apDoTask', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.success && data.code === 0){
                     console.log(`签到成功，获取热力值：5`)
                 }else{
                     console.log(data.errMsg);
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve();
            }
          })
        })
      }

      function apTaskDetail1() {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":"395",
            "channel":"4",
            "linkId":`${linkId}`
          }
          $.post(taskUrl('apTaskDetail', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 code = data.code;
                 if(data.code === 0){
                    for(let item of data.data.taskItemList){
                        ItemArr1.push(item)
                    }
                    ItemArr1=[...new Set(ItemArr1)]
                 }else if(data.code === 2003){
                     return
                 }else{
                     console.log(errMsg)
                     return
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                  return
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve(data);
            }
          })
        })
      }

      function Taks1(itemId) {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":395,
            "channel":4,
            "linkId":`${linkId}`,
            "itemId":`${itemId}`
          }
          $.post(taskUrl('apDoTask', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.success && !data.data.finish && data.code === 0){
                     console.log(`浏览成功，获得热爱值：10`)
                 }else{
                     console.log(data.errMsg)
                     code = data.code;
                     return
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve();
            }
          })
        })
      }

      async function doTask1(){
        await apTaskDetail1();
        await $.wait(1000);
        if( ItemArr1 && ItemArr1.length){
          for( i = 0; i < 5; i++){
                console.log(`\n去浏览${ItemArr1[i].itemName}`)
                await Taks1(ItemArr1[i].itemId)
                await $.wait(1500);
            }
        }else{
           console.log(`任务已完成`);
           return
        }
      }

      function apTaskDetail2() {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":396,
            "channel":4,
            "linkId":`${linkId}`
          }
          $.post(taskUrl('apTaskDetail', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.code === 0){
                    for(let item2 of data.data.taskItemList){
                        ItemArr2.push(item2)
                    }
                    ItemArr2=[...new Set(ItemArr2)]
                    //console.log(ItemArr2);
                 }else{
                     console.log(data.errMsg)
                     return
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve(data);
            }
          })
        })
      }

      function Taks2(itemId) {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":396,
            "channel":4,
            "linkId":`${linkId}`,
            "itemId":itemId
          }
          $.post(taskUrl('apDoTask', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.success && !data.data.finish && data.code === 0){
                    console.log(`浏览成功，获得热爱值：10`)
                  }else{
                    console.log(data.errMsg)
                    code = data.code;
                    return
                }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve();
            }
          })
        })
      }

      async function doTask2(){
        await apTaskDetail2();
        if(ItemArr2 && ItemArr2.length){
            for( i = 0; i < 5; i++ ){
              console.log(`\n去浏览${ItemArr2[i].itemName}店铺`)
              await $.wait(2000);
              await Taks2(ItemArr2[i].itemId)
              if(code === 2005)break
            }
           }else{
               console.log(`任务已完成`);
               return
           }
      }

    function starShopDraw() {
      return new Promise(async (resolve) => {
          let options = {
            url: `https://api.m.jd.com/?functionId=starShopDraw&body=%7B%22linkId%22%3A%22${linkId}%22%7D&_t=${Date.now()}&appid=activities_platform`,
            headers: {
              "Host": "api.m.jd.com",
              "Connection": "keep-alive",
              "Accept": "application/json, text/plain, */*",
              "Origin": "https://pro.m.jd.com",
              "User-Agent": $.UA,
              "Sec-Fetch-Mode": "cors",
              "X-Requested-With": "com.jingdong.app.mall",
              "Sec-Fetch-Site": "same-site",
              "Referer": `https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=${linkId}&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872`,
              "Accept-Encoding": "gzip, deflate, br",
              "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
              "Cookie": cookie,
            }
          }
          $.get(options, async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`)
            console.log(`initateCoinDozer API请求失败，请检查网路重试`)
          } else {
           if(data){
            data = JSON.parse(data);
            //console.log(JSON.stringify(data));
            if(data.code === 0){
              console.log(`瓜分成功，获得红包金额为：${data.data.rewardMoney}`)
            }else{
              console.log(data.errMsg)
            }
             }else{
               console.log(JSON.stringify(data));
               return
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

      function starShopPageInfo() {
        return new Promise(async (resolve) => {
            let options = {
              url: `https://api.m.jd.com/?functionId=starShopPageInfo&body=%7B%22taskId%22%3A%22397%22%2C%22encryptionPin%22%3A%22${shareCodes}%22%2C%22linkId%22%3A%22nUW_swWdzGTw9TREVAMBCw%22%7D&_t=1635766527031&appid=activities_platform`,
              headers: {
                "Host": "api.m.jd.com",
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "Origin": "https://pro.m.jd.com",
                "User-Agent": $.UA,
                "Sec-Fetch-Mode": "cors",
                "X-Requested-With": "com.jingdong.app.mall",
                "Sec-Fetch-Site": "same-site",
                "Referer": "https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=nUW_swWdzGTw9TREVAMBCw&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cookie": cookie,
              }
            }
            $.get(options, async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`initateCoinDozer API请求失败，请检查网路重试`)
            } else {
             if(data){
              data = JSON.parse(data);
              //console.log(JSON.stringify(data));
              if (!data.data && !data.code === 0) {
                console.log(`活动太火爆啦~`)
              } else {
                console.log(`【京东账号${$.index}】${$.UserName}的${$.name}互助码为：${data.data.encryptPin}\n`)
                console.log(`您当前的热爱值为：${data.data.currentGoodRoleValue}`)
                shareCodesArr.push(data.data.encryptPin)
              }
               }else{
                 console.log(JSON.stringify(data));
                 return
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

    function help(inviteCode) {
      return new Promise(async (resolve) => {
        let options = {
          url: `https://api.m.jd.com/?functionId=starShopPageInfo&body=%7B%22taskId%22%3A%22397%22%2C%22encryptionPin%22%3A%22${inviteCode}%22%2C%22linkId%22%3A%22nUW_swWdzGTw9TREVAMBCw%22%7D&_t=1635766527031&appid=activities_platform`,
          headers: {
            "Host": "api.m.jd.com",
            "Connection": "keep-alive",
            "Accept": "application/json, text/plain, */*",
            "Origin": "https://pro.m.jd.com",
            "User-Agent": $.UA,
            "Sec-Fetch-Mode": "cors",
            "X-Requested-With": "com.jingdong.app.mall",
            "Sec-Fetch-Site": "same-site",
            "Referer": "https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=nUW_swWdzGTw9TREVAMBCw&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": cookie,
          }
        }
        $.get(options, async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`initateCoinDozer API请求失败，请检查网路重试`)
            } else {
             if(data){
              data = JSON.parse(data);
              //console.log(JSON.stringify(data));
              if (!data.data && !data.code === 0) {
                console.log(`活动太火爆啦~`)
              } else {
                if(data && data.success){
                  console.log(`助力成功✨`)
                }else{
                  console.log(JSON.stringify(data));
                }
              }
             }else{
               console.log(`京东服务器返回空数据`)
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

function TotalBean() {
    return new Promise(async resolve => {
        const options = {
            "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
            "headers": {
                "Accept": "application/json,text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Cookie": cookie,
                "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
                "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
            }
        }
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data["retcode"] === 13) {
                            $.isLogin = false; //cookie过期
                            return;
                        }
                        if (data["retcode"] === 0) {
                            $.nickName = (data["base"] && data["base"].nickname) || $.UserName;
                        } else {
                            $.nickName = $.UserName;
                        }
                    } else {
                        console.log(`京东服务器返回空数据`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function taskUrl(function_id, body) {
    return {
      "url": `${JD_API_HOST}`,
      body: `functionId=${function_id}&body=${encodeURIComponent(JSON.stringify(body))}&_t=${Date.now()}}&appid=activities_platform`,
      headers: {
        "Host": "api.m.jd.com",
        "Connection": "keep-alive",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://pro.m.jd.com",
        "User-Agent": $.UA,
        "Sec-Fetch-Mode": "cors",
        "X-Requested-With": "com.jingdong.app.mall",
        "Sec-Fetch-Site": "same-site",
        "Referer": "https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=nUW_swWdzGTw9TREVAMBCw&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie,
      }
    }
  }
async function getUA(){
    $.UA = `jdapp;iPhone;10.1.4;13.1.2;${randomString(40)};network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
  }
function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}