/*
京东店铺锁y
==============Quantumult X==============
[task_local]
#京东店铺锁y
cron "30 0,6-23 * * *" jd_jingfen.js
 */

const got = require('got');
var md5 = require('md5');
const tunnel =require('tunnel')
const puppeteer = require('puppeteer');

const name = new Env('京东店铺锁y');  // 拉取脚本时定时任务命名
const $ = new Env('京东店铺锁y');
const notify = $.isNode() ? require('./sendNotify') : '';

// 此处从环境变量中读取多个值
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookies = []
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookies.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookies = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}


!(async () => {
    let num = 0
    let proxyIp = await getIp() // 获取本次代理ip
    console.log("本次使用的代理ip：" + proxyIp)
    for (let cookie of cookies) {
        /**
         * 第一部分功能，先提取购物车的商品链接并转链
         * @type {{headers: {cookie: string}}}
         */
        const options = {
            headers: {
                cookie: cookie
            },
            agent: {
                https: new tunnel.httpsOverHttp({
                    proxy: {
                        host: proxyIp.split(':')[0],
                        port: proxyIp.split(':')[1],
                    }
                })
            },
            timeout: {
                request: 10000
            }
        };

        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])

        console.log("当前操作用户：" + $.UserName)   // 输出当前用户

        let urls = []
        try {
            urls = await getUrls(options)
            console.log('卡住判断节点1：'+urls)
        }
        catch (e) {
            console.log('当前购物车列表请求失败，执行下次请求！' + e)
            continue
        }

        // console.log(urls)

        let shareUrls = []
        try {
            shareUrls = await changeLinks(urls)  // 转链后的锁佣链接
            console.log('卡住判断节点2：'+shareUrls)
        }
        catch (e) {
            console.log('当前转链失败，执行下次请求！' + e)
            continue
        }
        // console.log(shareUrls)
        let ls = cookie.split(';').slice(0,2)   // 调整为访问时所需的cookie格式
        // console.log(ls)
        let cks = []  // 可用的ck键值对
        for (let ck of ls) {
            let res = {}
            let pre = ck.split('=')
            res.name = pre[0]
            res.value = pre[1]
            cks.push(res)
        }

        try {
            await browse(shareUrls, cks, proxyIp)  // 模拟访问该用户的所有购物车链接
        }
        catch (e) {
            console.log('本次模拟浏览失败，执行下一个用户！')
            continue
        }

        console.log('当前用户浏览完毕，成功浏览商品数量：' + shareUrls.length)
        num += shareUrls.length
    }
    console.log('所有用户浏览完毕！共浏览商品数量：' + num)
    // 发送通知
    if ($.isNode()) {
        await notify.sendNotify(`京东店铺锁y执行完成`, '所有用户浏览完毕！共浏览商品数量：' + num);
    }

})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


// 功能拆分

// 提取购物车商品列表，最多20个
async function getUrls(options) {
    let urls = []
    console.log('判断卡住节点3')
    let data = ''
    try {
        data = await got.get('https://p.m.jd.com/cart/cart.action?fromnav=1&sceneval=2&jxsid=16371654022816454477', options).text()
    }
    catch (e) {
        console.log('请求失败：' + e)
    }

    console.log("判断卡住节点4：" + data)
    const pattern = /skuItemUrl":"(.*?)\?/g
    const items = data.matchAll(pattern)

    if (pattern.test(data)) {
        for (let item of items) {
            // console.log(item[1])
            urls.push(item[1])
        }
    }
    else {
        console.log("购物车为空")
    }

    // console.log(urls)
    return urls.slice(0, 30)  // 返回30个商品链接
}

// 将提取的购物车列表进行转链
async function changeLinks(urls) {
    const appKey = 'D8582C104FB9BD4C26804C6DDB808902'
    const appSecret = '6ED571970E420B0FF8837F5B4684387C1834EEBCE1AE90060B1D6D712F7EBFBD'
    const unionId = 2024548290  // 联盟id
    const positionId = 3004840254  // 推广位id
    let timestamp = (new Date()).valueOf()
    let copywriting = ''  // 待转链文案，此处仅需要原商品链接即可
    const version = 'v1'  // 版本，建议v1

    // 计算打工人api的sign
    function makeSign(copywriting) {
        let signPre = `appKey${appKey}copywriting${copywriting}positionId${positionId}timestamp${timestamp}unionId${unionId}version${version}`  // ascii值排序
        let signStr = appSecret + signPre + appSecret
        return md5(signStr).toUpperCase()
    }

    // console.log(urls)
    let finalUrls = []
    for (let url of urls) {
        // console.log("当前访问商品:" + url)
        let sign = makeSign(url)
        // console.log(sign)

        let params = {
            "appKey": appKey,
            "timestamp": timestamp,
            "sign": sign,
            "copywriting": url,
            "unionId": unionId,
            "positionId": positionId,
            "version": version
        }

        const {data} = await got.post('https://www.dgrlm.com/qcypopen/open/v1/qcSmartChain', {
            json: params,
            timeout: {
                request: 10000
            }
        }).json();
        // console.log(data)  // 返回接口结果
        await $.wait(parseInt(Math.random() * 500, 10))
        try {
            finalUrls.push(data.skuInfos[0].skuUrl)
            console.log('购物车商品名称:' + data.skuInfos[0].skuName)
        }
        catch(err){
            console.log('当前商品不在推广中')
        }
    }
    // console.log(finalUrls)  // 输出所有转链后的链接
    return finalUrls
    // console.log(finalUrls)
}

// 提取代理ip
async function getIp() {
    const ipApi = 'http://webapi.http.zhimacangku.com/getip?num=1&type=1&pro=110000&city=110200&yys=100026&port=1&time=3&ts=0&ys=0&cs=0&lb=1&sb=0&pb=4&mr=1&regions='
    let ip = await got.get(ipApi,{
        timeout: {
            request: 10000
        }
    }).text()
    return ip
}

// 浏览器模拟访问
async function browse(urls, cks, proxyIp) {
    const browser = await puppeteer.launch(
        {
            headless: true,  // 显示浏览器
            timeout: 30000,  // 超时时间
            args: [
                '--disable-gpu',  // 关闭GPU硬件加速
                '--disable-dev-shm-usage',  // 创建临时文件共享内存
                '--disable-setuid-sandbox',  // uid沙盒
                '--no-first-run', // 没有设置首页。在启动的时候，就会打开一个空白页面。
                '--no-sandbox', // 沙盒模式
                `--window-size=${375},${800}`,  // 设置窗口大小
                '--no-zygote',
                '--single-process', // 单进程运行
                `--proxy-server=${proxyIp}` // 使用代理ip
            ]
        }
    );

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);  // 解决超时问题
    // await page.setUserAgent('iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1')  // 设置UA
    const cookies = cks  // 读取用户cookie
    await page.emulate(puppeteer.devices['iPhone X']);   // 模拟设备
    await page.setRequestInterception(true);     // 开启拦截请求模式，拦截图片
    await page.on('request', interceptedRequest => {
        //判断如果是 图片请求  就直接拦截
        if (interceptedRequest.url().endsWith('.png') || interceptedRequest.url().endsWith('.jpg') || interceptedRequest.url().endsWith('.dpg')|| interceptedRequest.url().endsWith('.webp'))
            interceptedRequest.abort();   //终止请求
        else
            interceptedRequest.continue();//弹出
    });

    for (let url of urls) {
        console.log("当前访问商品:" + url)
        let sleepTime = parseInt(Math.random()*(3000-1000+1)+1000);
        try {
            await page.goto(url);  // 先打开京东页面
            await page.waitForTimeout(sleepTime);  // 等待1-3s
            await page.setCookie(...cookies);  // 注入cookie
            await page.goto(url);  // 打开锁佣页面
            await page.waitForTimeout(sleepTime) // 等待1-3s
        }
        catch(err) {
            console.log("当前链接访问失败，为避免浪费ip，直接进行下一商品访问！")
        }

    }

    await browser.close();
}


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}