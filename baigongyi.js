// 是否开启通知， true 开始， false 不开启.
let notices = false;

let cxName = "百工驿";
let ckName = "xfbgyCk";
const $ = new Env(cxName + "脚本");

// 更换自己的设备型号
let defaultUA = 'Mozilla/5.0 (Linux; Android 11; M2007J1SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36/bocapp(7.2.5);lsta:4;;sessionId:23ea89b9-aa74-4695-87f9-11c593e3e02b;cifNumber:578355507;appSequence:20560;'


let envSplitor = ['@']
let httpResult, httpReq, httpResp

let userCookie = ($.isNode() ? process.env.xfbgyCk : $.getdata('xfbgyCk')) || '';

let userList = []
let userIdx = 0
let userCount = 0

const notify = $.isNode() ? require('./sendNotify') : '';
message = ``


///////////////////////////////////////////////////////////////////

const _0x3aa9=['{\x22objType\x22:\x203,\x22objId\x22:\x20\x22','\x20❌\x20\x0a','\x20❌\x0a','name','dainzan','code','\x20签到:\x20成功\x20\x20✅\x0a','\x20点赞:\x20成功\x20✅\x0a','substring','{\x22pageNum\x22:1,\x22pageSize\x22:6,\x22paramObject\x22:{\x22flag\x22:1}}','https://mapi.baigongyi.com/article/getArticlelistNew','message','records','resolve','\x22,\x22content\x22:\x22','\x22,\x22objType\x22:7,\x22comment\x22:\x22赞赞赞2\x22}','fengxiang','post','data','wait','https://mapi.baigongyi.com/like/add','valid','账号[','https://mapi.baigongyi.com/beans/signIn','index','--------------\x20查询\x20--------------','https://api.qinor.cn/soup/?charset=utf-8','length','\x20评论:\x20成功\x20\x20✅\x0a','all','https://mapi.baigongyi.com/idea/add','\x20评论:\x20成功\x20✅\x0a','sendNotify','https://mapi.baigongyi.com/index/page/adv/new/0','{\x22atUserIds\x22:\x22\x22,\x22activityContent\x22:\x22','get','\x22,\x22likedFlag\x22:\x20true,\x22accountId\x22:\x22c6ef6de9202241c18f86de67481d65c4\x22}','ckValid','withdrawFailCount','catch','fabudongtai','{\x22objType\x22:\x207,\x22objId\x22:\x20\x22','log','push',']CK无效，请检查格式'];const _0x23df=function(_0x3aa9b3,_0x23df50){_0x3aa9b3=_0x3aa9b3-0x0;let _0x4a845e=_0x3aa9[_0x3aa9b3];return _0x4a845e;};class UserInfo{constructor(_0x52e78f){this['index']=++userIdx;this[_0x23df('0x3')]=_0x52e78f;this[_0x23df('0x15')]=![];this[_0x23df('0x26')]=0x0;try{this['ck']=_0x52e78f;this['ckSlice']=_0x52e78f[_0x23df('0x8')](0x0,0x6);this['ckValid']=!![];}catch(_0x118738){this['ckValid']=![];$['logAndNotify'](_0x23df('0x16')+this[_0x23df('0x18')]+_0x23df('0x2c'));}}async['nhLingQu'](){try{let _0x18a461=_0x23df('0x17');let _0x6cec7='';let _0x33c1cf=''+this['ck'];let _0x32be70=populateUrlObject(_0x18a461,_0x33c1cf,_0x6cec7);await httpRequest(_0x23df('0x23'),_0x32be70);let _0x30dc68=httpResult;if(_0x30dc68[_0x23df('0x5')]==0xc8){message+='\x20签到:\x20成功\x20\x20✅\x0a';console[_0x23df('0x2a')](_0x23df('0x6'));}else{message+=_0x30dc68['message']+'\x20❌\x0a';console['log'](_0x30dc68[_0x23df('0xb')]+'\x20❌\x0a');}await this['pinglun12']();}catch(_0x409fd2){console[_0x23df('0x2a')](_0x409fd2);}finally{return Promise['resolve'](0x1);}}async['pinglun12'](){try{let _0x2b3f5d=_0x23df('0x21');let _0x3de9cb='';let _0x80799c=''+this['ck'];let _0xa015=populateUrlObject(_0x2b3f5d,_0x80799c,_0x3de9cb);await httpRequest(_0x23df('0x23'),_0xa015);let _0x163929=httpResult;let _0x83f469=[];let _0x30efda=_0x163929['data'];let _0x53326d=0x0;for(let _0x29313a in _0x30efda){if(_0x53326d>=0x5){continue;}else{_0x83f469[_0x23df('0x2b')](_0x30efda[_0x29313a]['id']);}_0x53326d++;}let _0x2e4189='https://mapi.baigongyi.com/commentRecord/add';for(let _0x2d236c in _0x83f469){_0x3de9cb='{\x22objId\x22:\x22'+_0x83f469[_0x2d236c]+_0x23df('0xf');_0xa015=populateUrlObject2(_0x2e4189,_0x80799c,_0x3de9cb);await httpRequest('post',_0xa015);let _0x2eb9eb=httpResult;if(_0x2eb9eb['code']==0xc8){message+=_0x23df('0x1c');console['log'](_0x23df('0x1f'));}else{message+=_0x2eb9eb['message']+_0x23df('0x2');console['log'](_0x2eb9eb['message']+'\x20❌\x0a');}await $[_0x23df('0x13')](0xa*0x3e8);}await this[_0x23df('0x4')]();}catch(_0x5c3bc0){console[_0x23df('0x2a')](_0x5c3bc0);}finally{return Promise['resolve'](0x1);}}async[_0x23df('0x4')](){try{let _0x4a51c3=_0x23df('0xa');let _0x100401=_0x23df('0x9');let _0x2ea13b=''+this['ck'];let _0x10cb7a=populateUrlObject(_0x4a51c3,_0x2ea13b,_0x100401);await httpRequest('post',_0x10cb7a);let _0x31071e=httpResult;let _0x6f3689=[];let _0x45626=_0x31071e[_0x23df('0x12')][_0x23df('0xc')];for(let _0x5c4e75 in _0x31071e[_0x23df('0x12')][_0x23df('0xc')]){_0x6f3689['push'](_0x45626[_0x5c4e75]['id']);}let _0x1c4cb3=_0x23df('0x14');for(let _0x314830 in _0x6f3689){let _0x13decc=_0x23df('0x0')+_0x6f3689[_0x314830]+_0x23df('0x24');let _0x28eb63=populateUrlObject(_0x1c4cb3,_0x2ea13b,_0x13decc);await httpRequest(_0x23df('0x11'),_0x28eb63);let _0x40927c=httpResult;if(_0x40927c[_0x23df('0x5')]==0xc8){message+='\x20点赞:\x20成功\x20✅\x0a';console['log'](_0x23df('0x7'));}else{message+=_0x40927c['message']+'\x20❌\x0a';console[_0x23df('0x2a')](_0x40927c['message']+'\x20❌\x0a');}await $['wait'](0xa*0x3e8);}await this[_0x23df('0x10')]();}catch(_0x1c32b1){console[_0x23df('0x2a')](_0x1c32b1);}finally{return Promise[_0x23df('0xd')](0x1);}}async['fengxiang'](){try{let _0x365835='https://mapi.baigongyi.com/hotNews/list';let _0xba5ac='{\x22pageNum\x22:1,\x22pageSize\x22:3,\x22paramObject\x22:{\x22type\x22:\x221\x22}}';let _0x40ff4a=''+this['ck'];let _0x161e57=populateUrlObject(_0x365835,_0x40ff4a,_0xba5ac);await httpRequest('post',_0x161e57);let _0x2d5803=httpResult;let _0x371c8b=[];let _0x557119=_0x2d5803[_0x23df('0x12')][_0x23df('0xc')];for(let _0x57d888 in _0x2d5803[_0x23df('0x12')]['records']){_0x371c8b[_0x23df('0x2b')](_0x557119[_0x57d888]['id']);}let _0x2047c4='https://mapi.baigongyi.com/shareRecord';for(let _0x5950c0 in _0x371c8b){let _0x49ec9f=_0x23df('0x29')+_0x371c8b[_0x5950c0]+'\x22,\x22shareDestination\x22:\x201,\x22accountId\x22:\x22c6ef6de9202241c18f86de67481d65c4\x22}';let _0x2c8f9a=populateUrlObject(_0x2047c4,_0x40ff4a,_0x49ec9f);await httpRequest('post',_0x2c8f9a);let _0x1e0e5c=httpResult;if(_0x1e0e5c[_0x23df('0x5')]==0xc8){message+='\x20分享:\x20成功\x20✅\x0a';console[_0x23df('0x2a')]('\x20分享:\x20成功\x20✅\x0a');}else{message+=_0x1e0e5c[_0x23df('0xb')]+_0x23df('0x2');console[_0x23df('0x2a')](_0x1e0e5c[_0x23df('0xb')]+_0x23df('0x2'));}await $['wait'](0xa*0x3e8);}}catch(_0x2f7c43){console[_0x23df('0x2a')](_0x2f7c43);}finally{return Promise['resolve'](0x1);}}async[_0x23df('0x28')](){try{let _0x22b281=0x5;for(var _0x1ebd2a=0x0;_0x1ebd2a<_0x22b281;_0x1ebd2a++){let _0x587265=_0x23df('0x1a');let _0x5a5346='';let _0x125ee9=''+this['ck'];let _0x277cc5=populateUrlObject(_0x587265,_0x125ee9,_0x5a5346);await httpRequest(_0x23df('0x11'),_0x277cc5);let _0x507582=httpResult;let _0x3b85a5=_0x23df('0x1e');let _0x8a9483=_0x23df('0x22')+_0x507582+_0x23df('0xe')+_0x507582+'\x22}';let _0x2c7fcf=''+this['ck'];let _0x53428c=populateUrlObject2(_0x3b85a5,_0x2c7fcf,_0x8a9483);await httpRequest(_0x23df('0x11'),_0x53428c);let _0x524d88=httpResult;if(_0x524d88[_0x23df('0x5')]==0xc8){message+='\x20发布动态:\x20成功\x20✅\x20\x0a';console[_0x23df('0x2a')]('\x20发布动态:\x20成功\x20✅\x20\x0a');}else{message+=_0x524d88[_0x23df('0xb')]+'\x20❌\x20\x0a';console['log'](_0x524d88[_0x23df('0xb')]+_0x23df('0x1'));}await $['wait'](0x6*0x3e8);}}catch(_0xea96fb){console['log'](_0xea96fb);}finally{return Promise[_0x23df('0xd')](0x1);}}}!(async()=>{if(typeof $request!=='undefined'){await GetRewrite();}else{if(!await checkEnv())return;let _0x3ce8a7=[];let _0x5d789a=userList['filter'](_0x36ec91=>_0x36ec91[_0x23df('0x25')]);if(_0x5d789a[_0x23df('0x1b')]>0x0){console['log'](_0x23df('0x19'));_0x3ce8a7=[];for(let _0xf67825 of _0x5d789a){_0x3ce8a7['push'](_0xf67825['nhLingQu']());await $[_0x23df('0x13')](0x3*0x3e8);message+='➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\x0a';}await Promise[_0x23df('0x1d')](_0x3ce8a7);}if(notices){await notify[_0x23df('0x20')](cxName+'脚本运行通知：',''+message);await $['showmsg']();}}})()[_0x23df('0x27')](_0x1e35fe=>console[_0x23df('0x2a')](_0x1e35fe))['finally'](()=>$['done']());

async function GetRewrite() {
    if ($request.url.indexOf(`cp-member-integral/add`) > -1) {
        if (!$request.headers) return;
        let token = $request.headers['User-Token']
        if (!token) return false
        let ck = `${token}`
        if (userCookie) {
            if (userCookie.indexOf(ck) == -1) {
                userCookie = userCookie + '@' + ck
                $.setdata(userCookie, ckName);
                ckList = userCookie.split('@')
                $.msg(`获取第${ckList.length}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, ckName);
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

// 公共请求头2
function populateUrlObject2(url, token, body = '') {
    let urlObject = {
        url: url,
        headers: {
            'Authentication': token,
            'accept-encoding': "gzip, deflate, br",
            'connection': "keep-alive",
            'User-Agent': "android",
        },
        timeout: 5000,
    }
//console.log(`${JSON.stringify(urlObject)}`)
    if (body) {
        urlObject.body = body
        // console.log(new Blob([body]).size)
        urlObject.headers['Content-Type'] = 'application/json;'
  
        urlObject.headers['Content-Length'] = Buffer.byteLength(body,'utf8')
    }
    
    return urlObject;
}



// 公共请求头
function populateUrlObject(url, token, body = '') {
    let host = url.replace('//', '/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            'Authentication': token,
            'user-agent': "android",
        },
        timeout: 5000,
    }
//console.log(`${JSON.stringify(urlObject)}`)
    if (body) {
        urlObject.body = body
        urlObject.headers['Content-Type'] = 'application/json;'
        urlObject.headers['Content-Length'] = urlObject.body ? urlObject.body.length : 0
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
