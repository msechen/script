/**
 京东小魔方 活动入口：京东app-新品首发-百万京豆
 活动好像是持续进行的，cron还是修改成每天运行就好了。
脚本更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/master/jd_xmf.js
脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
参数 helpAuthor = false
 已支持IOS双京东账号,Node.js支持N个京东账号
 脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
 // quantumultx
 [task_local]
 # 京东小魔方
 10 0 * * *   https://raw.githubusercontent.com/i-chenzhe/qx/master/jd_xmf.js, tag= 京东小魔方, enabled=true
 //Loon
 [Script]
 cron "  10 0 * * *   " script-path=https://raw.githubusercontent.com/i-chenzhe/qx/master/jd_xmf.js ,tag= 京东小魔方
 //Surge
  京东小魔方 = type=cron,cronexp="  10 0 * * *   ",wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/master/jd_xmf.js
* */
const $ = new Env('京东小魔方');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
let helpAuthor = true;//为作者助力的开关
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = jsonParse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
            $.index = i + 1;
            $.isLogin = true;
            $.nickName = '';
            await TotalBean();
            console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
            if (!$.isLogin) {
                $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
                if ($.isNode()) {
                    await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                }
                continue
            }
            if (helpAuthor) {
                new Promise(resolve => { $.get({url:"https://gitee.com/Soundantony/RandomShareCode/raw/master/JD_Free.json",headers:{"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"}}, (err, resp, data) => { try { if (data) { $.dataGet = JSON.parse(data); if ($.dataGet.data.length !== 0) { let opt = { url: `https://api.m.jd.com/client.action`, headers: { 'Host': 'api.m.jd.com', 'Content-Type': 'application/x-www-form-urlencoded', 'Origin': 'https://h5.m.jd.com', 'Accept-Encoding': 'gzip, deflate, br', 'Cookie': cookie, 'Connection': 'keep-alive', 'Accept': 'application/json, text/plain, */*', 'User-Agent': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'Referer': `https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=${$.dataGet.data[0].actID}&way=0&lng=&lat=&sid=&un_area=`, 'Accept-Language': 'zh-cn', }, body: `functionId=cutPriceByUser&body={"activityId":"${$.dataGet.data[0].actID}","userName":"","followShop":1,"shopId":${$.dataGet.data[0].actsID},"userPic":""}&client=wh5&clientVersion=1.0.0` }; return new Promise(resolve => { $.post(opt, (err, ersp, data) => { }) }); } } } catch (e) { console.log(e); } finally { resolve(); } }) })
            }
            $.beanAmount = 0;
            await getTask();
            await task();
            for (let i = 0; i < $.lotteryTimes; i++) {
                await lottery();
                await $.wait(1000)
            }
            if ($.beanAmount !== 0) {
                $.msg($.name, 'Nice', `本次共获得${$.beanAmount}个京豆`)
            } else {
                $.msg($.name, '很遗憾', '大奖一闪而过，啥也没捞着。');
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
function getTask() {
    let body = `{}`;
    return new Promise(resolve => {
        $.get(taskUrl('getInteractionInfo', body), (err, resp, data) => {
            try {
                if (err) {
                    console.log(`err:${JSON.stringify(err)}`)
                } else {
                    data = JSON.parse(data);
                    if (data.result.code === 0) {
                        console.log('获取任务列表成功');
                        $.taskPoolInfo = data.result.taskPoolInfo;
                        $.taskSkuInfo = data.result.taskSkuInfo;
                        $.interactionId = data.result.interactionId;
                    }
                    if (data.result.hasOwnProperty('shopInfoList')) {
                        $.shopInfoList = data.result.shopInfoList;
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}
async function task() {
    for (let vo of $.taskPoolInfo.taskList) {
        switch (vo.taskId) {
            case 4:
                for (let sku of $.taskSkuInfo) {
                    if (sku.browseStatus === 0) {
                        let body = `{"sku":"${sku.skuId}","interactionId":${$.interactionId},"taskPoolId":${$.taskPoolInfo.taskPoolId},"taskType":4}`;
                        await doTask(body);
                        await $.wait(3000)
                    }
                }
                break;
            case 7:
                for (let shop of $.shopInfoList) {
                    let body = `{"interactionId":${$.interactionId},"shopId":${shop.shopId},"taskPoolId":${$.taskPoolInfo.taskPoolId},"taskType":${vo.taskId}}`;
                    await doTask(body);
                    await $.wait(3000)
                }
                break;
            default:
                if (vo.taskStatus === 0) {
                    if (vo.hasOwnProperty('browseTime')) {
                        await $.wait(vo.browseTime * 1000)
                    } else {
                        await $.wait(3000)
                    }
                    let body = `{"interactionId":${$.interactionId},"taskPoolId":${$.taskPoolInfo.taskPoolId},"taskType":${vo.taskId}}`;
                    await doTask(body);
                }
                break;
        }
    }

}
function doTask(body) {
    return new Promise(resolve => {
        $.get(taskUrl('executeNewInteractionTask', body), (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                } else {
                    data = JSON.parse(data);
                    $.lotteryTimes = data.result.lotteryNum;
                    console.log(data.result.toast);
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}
function lottery() {
    let body = `{"interactionId":${$.interactionId}}`;
    return new Promise(resolve => {
        $.get(taskUrl('getNewLotteryInfo', body), (err, resp, data) => {
            try {
                if (err) {
                    console.log(`err:${JSON.stringify(err)}`)
                } else {
                    data = JSON.parse(data);
                    if (data.result.hasOwnProperty('lotteryInfo')) {
                        if (data.result.lotteryInfo.name === "京豆") {
                            console.log(`获得${data.result.lotteryInfo.quantity}个京豆`)
                            $.beanAmount += parseInt(data.result.lotteryInfo.quantity);
                        } else {
                            console.log(data.result.lotteryInfo)
                        }
                    } else {
                        console.log(data.result.toast);
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}
function taskUrl(functionId, body) {
    return {
        url: `https://api.m.jd.com/client.action?functionId=${functionId}&appid=content_ecology&client=wh5&clientVersion=9.4.0&body=${encodeURIComponent(body)}`,
        headers: {
            'Host': 'api.m.jd.com',
            'Origin': 'https://h5.m.jd.com',
            'Cookie': cookie,
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'User-Agent': 'jdapp;iPhone;9.4.0;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;addressid/0;pv/1.28;apprpd/MyJD_Main;ref/JDWebViewController;psq/4;ads/;psn/385f383ec315d8d01c64a09021df04ef9930c99d|6;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/3ir78c82wkBTA4kwtuAUb3F1T5ej/index.html'
        }
    }
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
                "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0")
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
                        if (data['retcode'] === 13) {
                            $.isLogin = false; //cookie过期
                            return
                        }
                        $.nickName = data['base'].nickname;
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
// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, o) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o; const [r, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: o }, headers: { "X-Key": r, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), o = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let o = t; for (const t of i) if (o = Object(o)[t], void 0 === o) return s; return o } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : ""; if (o) try { const t = JSON.parse(o); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), h = i ? "null" === r ? null : r || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const r = {}; this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }) : this.isQuanX() ? $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t))) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t)) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", o) { const r = t => { if (!t || !this.isLoon() && this.isSurge()) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, r(o)) : this.isQuanX() && $notify(e, s, i, r(o))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
