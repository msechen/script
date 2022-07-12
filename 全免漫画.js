
/*
扫码下载APP
抓包查看域名  task.3456mh.com   请求头access-token
变量mhcookie

定时 corn 0 8 * * *

一天一次


export mhcookie='抓的access-token'

例如
export mhcookie='v1_0w5Ctr0000000000000000000000000000000000000'



[MITM]
hostname = task.3456mh.com

v2/rewards/list url script-request-header mmx.js




打开app 自动获取ck


多账号回车隔开

*/

const $ = new Env("漫画");

let envSplitor = ['\n']
let httpResult, httpReq, httpResp

let userCookie = ($.isNode() ? process.env.mhcookie : $.getdata('mhcookie')) || '';

let userList = []
let userIdx = 0
let userCount = 0
alipay = 0
let defaultUA = 'okhttp/3.12.12'

///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {
        this.index = ++userIdx
        this.name = this.index
        this.valid = false

        try {
            this.ck = str
            this.ckValid = true
        } catch (e) {
            this.ckValid = false
            $.logAndNotify(`账号[${this.index}]CK无效，请检查格式`)
        }
    }




    async userinfo() {
        try {
            let url = `http://task.3456mh.com/v2/rewards/list?productname=qmmh&platformname=android`
            let body = ``
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('get', urlObject)
            let result = httpResult;
            this.video = 8 - result.data.video.used_number
            this.videoid = result.data.video.task_id
            this.share = 3 - result.data.share.used_number
            console.log(`账号[${this.name}] ` + `看视频得积分还需要：` + this.video + ` 次 分享得积分还需要 ` + this.share + ` 次`)
            for (let i = 0; i < this.video; i++) {
                await this.rew();
            }
            for (let i = 0; i < this.share; i++) {
                await this.rewt();
            }
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async rew() {
        try {
            let url = `http://task.3456mh.com/v2/rewards/validate`
            let body = `task_id=1&productname=qmmh&platformname=android`
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('post', urlObject)
            let result = httpResult;
            this.getscore = result.data.getscore
            console.log(`账号[${this.name}] ` + `看视频得到积分：` + this.getscore)
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async rewt() {
        try {
            let url = `http://task.3456mh.com/v2/rewards/validate`
            let body = `task_id=2&productname=qmmh&platformname=android`
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('post', urlObject)
            let result = httpResult;
            this.getscore = result.data.getscore
            console.log(`账号[${this.name}] ` + `分享得到积分：` + this.getscore)
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async luck() {
        try {
            let url = `http://task.3456mh.com/v2/luckdraw/luckdraw`
            let body = `productname=qmmh&platformname=android`
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('post', urlObject)
            let result = httpResult;

                await this.rewe();
            


        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async rewe() {
        try {
            let url = `http://task.3456mh.com/v2/rewards/validate`
            let body = `task_id=${this.tranid}&productname=qmmh&platformname=android`
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('post', urlObject)
            let result = httpResult;
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }




    async si() {
        try {
            let url = `http://task.3456mh.com/v2/usersign/continue`
            let body = `sign_type=1&productname=qmmh&platformname=android`
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('post', urlObject)
            let result = httpResult;
            if (result.data.msg == 'ok') {
                console.log(`账号[${this.name}] ` + ` 签到成功 `)
                
            } else if (result.data.msg !== 'ok') console.log(`账号[${this.name}]  已签到`)
            await this.do();
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async do() {
        try {
            let url = `http://task.3456mh.com/v2/usersign/continue/advertiseaddscore`
            let body = `advertise_id=4729&position=0&times=44&productname=qmmh&platformname=andr`
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('post', urlObject)
            let result = httpResult;
            console.log(`账号[${this.name}]  开始翻倍 ` + result.msg)
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async account() {
        try {
            let url = `http://spread.3456mh.com/v2/user/account?productname=qmmh&platformname=android`
            let body = ``
            let token = `${this.ck}`
            let urlObject = populateUrlObject(url, token, body)
            await httpRequest('get', urlObject)
            let result = httpResult;
            console.log(`账号[${this.name}] ` + `总积分 ` + result.data.score + ' 今日积分 ' + result.data.total_score)
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }


}

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    } else {
        if (!(await checkEnv())) return;
        let taskall = []
        let validList = userList.filter(x => x.ckValid)

        if (validList.length > 0) {
            console.log('\n-------------- 签到 --------------\n')
            taskall = []
            for (let user of validList) {
                taskall.push(user.si())
            }
            await Promise.all(taskall)
            console.log('\n-------------- 任务 --------------\n')
            taskall = []
            for (let user of validList) {
                taskall.push(user.userinfo())
            }
            await Promise.all(taskall)
            console.log('\n-------------- 查询 --------------\n')
            taskall = []
            for (let user of validList) {
                taskall.push(user.account())
            }
            await Promise.all(taskall)

        }

        await $.showmsg();
    }
})()
    .catch((e) => console.log(e))
    .finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function GetRewrite() {
    if ($request.url.indexOf(`v2/rewards/list`) > -1) {
        if (!$request.headers) return;
        let token = $request.headers['access-token']
        //if (!token) return false
        let ck = `${token}`

        console.log(ck)
        if (userCookie) {
            if (userCookie.indexOf(ck) == -1) {
                userCookie = userCookie + '\n' + ck
                $.setdata(userCookie, 'mhcookie');
                ckList = userCookie.split('\n')
                $.msg(`获取第${ckList.length}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, 'mhcookie');
            $.msg(`获取第1个ck成功: ${ck}`)
        }
    }
}
async function checkEnv() {
    if (userCookie) {
        let splitor = envSplitor[0];
        for (let sp of envSplitor) {
            if (userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for (let userCookies of userCookie.split(splitor)) {
            if (userCookies) userList.push(new UserInfo(userCookies))
        }
        userCount = userList.length
    } else {
        console.log('未找到CK')
        return;
    }

    console.log(`共找到${userCount}个账号`)
    return true
}
////////////////////////////////////////////////////////////////////
function populateUrlObject(url, token, body = '') {
    let host = url.replace('//', '/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            'Host': host,
            'Cache-Control': "no-cache",
            'Connection': "close",
            'Accept-Encoding': "gzip",
            'm-request-did': "0ksBWuYy/YeVTT1/NYPIgPPGb9Sxq69Pue/WdH1HcHI=",
            'm-request-id': "3e364eb2e6a0188aab51ccd849225058",
            'Content-Type': "application/x-www-form-urlencoded",
            'access-token': token,
            'User-Agent': defaultUA,
        },
        timeout: 5000,
    }
    if (body) {
        urlObject.body = body
    }

    return urlObject;
}

async function httpRequest(method, url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    //console.log(`${method}请求失败`);
                    //console.log(JSON.stringify(err));
                } else {
                    if (resp.body) {
                        if (typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

////////////////////////////////////////////////////////////////////
function Env(name, env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name, env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this, env)
            console.log(`${this.name} 开始运行：\n`)
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
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
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
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => { })) {
            if (m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if (m == 'get' && t.headers) {
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if (t.body && t.headers) {
                if (!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 });
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if (m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })),
                    $task.fetch(t).then(t => {
                        const {
                            statusCode: i,
                            request: q,
                            headers: r,
                            body: o
                        } = t;
                        e(null, q, {
                            statusCode: i,
                            headers: r,
                            body: o
                        })
                    }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
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
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if (!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if ($.isNode()) {
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
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
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n"))
        }
        getMin(a, b) {
            return ((a < b) ? a : b)
        }
        getMax(a, b) {
            return ((a < b) ? b : a)
        }
        padStr(num, length, padding = '0') {
            let numStr = String(num)
            let numPad = (length > numStr.length) ? (length - numStr.length) : 0
            let retStr = ''
            for (let i = 0; i < numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj, c, encodeUrl = false) {
            let ret = []
            for (let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if (v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys + '=' + v)
            }
            return ret.join(c);
        }
        str2json(str, decodeUrl = false) {
            let ret = {}
            for (let item of str.split('&')) {
                if (!item) continue;
                let idx = item.indexOf('=')
                if (idx == -1) continue;
                let k = item.substr(0, idx)
                let v = item.substr(idx + 1)
                if (decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len, charset = 'abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random() * a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name, env)
}
