const jobname = '黑色科技'

const $ = Env(jobname)



//循环次数  每次运行1次循环 
let num =1

//刷金循环次数   一次循环刷10次元宝刷广告
let num2=10

//元宝控制   每次刷0.5元宝
let coin=0.5



//欢乐养猪ID 1  养猪先锋 ID 12   猜成语ID 10

//换号刷必须先改id  再重新捉ck

let id=($.isNode() ? process.env.userid : $.getdata('userid'));


//无法提现 提现异常 只需要保持0-0-0  全部设置为0
//即可洗白



let userid = ($.isNode() ? process.env.userid : $.getdata('userid'));
let useridArr = []



//金额定义
let RedPacket=0,money=0


!(async () => {
    
	if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {
    if(!await CheckEnv()) return
    $.log(`\n--元宝控制${coin}每次--`)
    $.log(`\n--循环控制${num}次--`)
    $.log(`\n--运行控制${num2}次--`)
    $.log(`\n运行过程中可以打开小程序\n自动刷视频广告`)
    $.log(`\n设置刷金额度越多，洗白时间越久`)
    $.log(`\n金币控制可以任意设置0-100000`)
    $.log(`\n如速度过快次数太多  可能黑号`)
    $.log(`黑号无所谓\n停下来脚本广告跟运行次数设置为0\n间隔一段时间就可以提现了\n记得每天登陆转换一下余额，做一下转换任务。`)

    
    for(userIdx=0; userIdx<useridArr.length; userIdx++) {
        let ant = useridArr[userIdx].split('#');
        $.log(`\n-第${userIdx+1}个`)
        
        userid = useridArr[userIdx]
          await $.wait(3000)
		await basedata(userid)
          await online(userid)      
		let money1=money
		await $.wait(500)
		for (let j = 0; j < num; j++) {
			await shuashua(userid)
			await $.wait(300)
			$.log(`\n------开始刷第${j+1}次循环------`)
			for (let f = 0; f < num2; f++) {
				await $.wait(1000)
				$.log(`\n------开始刷元宝第${f+1}次------`)
				await addmoney(userid)
			}
			await online(userid)
		}
		await basedata(userid)
          await level(userid)
		let money2=money
		let money3=money2-money1
		console.log(`\n本次增加:${money3}\n`)
		//if (money2>45)
			await convertmoney(userid)
		await cash(userid)
	}
	}
})()
    .catch((e) => {
       // $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function CheckEnv() {
    if(userid) {
        if(userid.indexOf('@') > -1) {
            let userids = userid.split('@')
            for(let i=0; i<userids.length; i++) {
                useridP = userids[i]
                if(useridP.indexOf('account=') > -1) {
                    useridP = useridP.match(/account=(\S{11})/)[1]
                }
                useridArr.push(useridP)
            }
        }else if(userid.indexOf('\n') > -1) {
            let userids = userid.split('\n')
			console.log('你使用的是\\n分割')
            for(let i=0; i<userids.length; i++) {
                useridP = userids[i]
                if(useridP.indexOf('account=') > -1) {
                    useridP = useridP.match(/account=(\S{11})/)[1]
                }
                useridArr.push(useridP)
            }
        } else {
            useridP = userid
            if(useridP.indexOf('account=') > -1) {
                useridP = useridP.match(/account=(\S{11})/)[1]
            }
            useridArr.push(useridP)
        }
    }
	else {
        console.log('没有找到账户信息')
        if (useridArr.length<1)return false
    }
    
    return true
}

async function GetRewrite() {
    

if($request.url.indexOf(`https://heisekeji.cn/game/`) > -1) {
        const cookie = JSON.parse($request.body)
          if (cookie) $.setdata(cookie.OpenId, `userid`)
          $.msg(`获取成功`)  
		
	}
}




    //刷钱模块
    function addmoney(userid, key) {
        return new Promise((resolve, reject) => {
            const url = `https://heisekeji.cn/game/add_game_player_money`;
			const method = `POST`;
			const headers = {
				'Accept-Encoding' : `gzip,compress,br,deflate`,
				'content-type' : `application/json`,
				'Connection' : `keep-alive`,
				'Referer' : `https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html`,
				'Host' : `heisekeji.cn`,
				'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`
			}
			let body = `{"GameId":${id},"OpenId":"${userid}","Money":${coin}}`;

            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                result = JSON.parse(data);
            try {
                if (code=1) {
      RedPacket=result.data.Money
                    console.log(`开始刷钱：+${coin} 元宝: ${result.data.Money} `);
                }else console.log(`${JSON.stringify(result)}`)
            } catch (e) {
            }
            resolve();
            })
        })
    }

    //刷广告模块
    function shuashua(userid) {
        return new Promise((resolve, reject) => {
            const url = `https://heisekeji.cn/game/ad_video_callback`;
			const headers = {
				'Accept-Encoding' : `gzip,compress,br,deflate`,
				'content-type' : `application/json`,
				'Connection' : `keep-alive`,
				'Referer' : `https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html`,
				'Host' : `heisekeji.cn`,
				'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`
			}
			const body = `{"OpenId":"${userid}","GameId":${id},"Id":10007}`;

            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                 result = JSON.parse(data);
            try {
                if (code=1) {
                    console.log(`刷视频广告：${result.msg}`);
                }
            } catch (e) {
                //$.log(e)
            }
            resolve();
            })
        })
    }
    //保持在线模块
    function online(userid) {
        return new Promise((resolve, reject) => {
            const url = `https://heisekeji.cn/game/on_show_call`;
			const headers = {
				'Accept-Encoding' : `gzip,compress,br,deflate`,
				'content-type' : `application/json`,
				'Connection' : `keep-alive`,
				'Referer' : `https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html`,
				'Host' : `heisekeji.cn`,
				'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`
			}
			const body = `{"OpenId":"${userid}","GameId":${id}}`;

            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                 result = JSON.parse(data);
            try {
                if (code=1) {
                    console.log(`online在线状态：${result.msg}`);
                }
            } catch (e) {
                //$.log(e)
            }
            resolve();
            })
        })
    }



    //升级
    function level(userid) {
        return new Promise((resolve, reject) => {
            const url = `https://heisekeji.cn/game/async_player_level`;
			const headers = {
				'Accept-Encoding' : `gzip,compress,br,deflate`,
				'content-type' : `application/json`,
				'Connection' : `keep-alive`,
				'Referer' : `https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html`,
				'Host' : `heisekeji.cn`,
				'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`
			}
			const body = `{"GameId":${id},"Level":155,"OpenId":"${userid}"}`;

            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                 result = JSON.parse(data);
            try {
                if (code=1) {
                    console.log(`成功升级：${result.data.Level}`);
                }
            } catch (e) {
                //$.log(e)
            }
            resolve();
            })
        })
    }
    function basedata(userid) {
        return new Promise((resolve, reject) => {
            const url = `https://heisekeji.cn/game/get_player_base_data`;
			const headers = {
				'Accept-Encoding' : `gzip,compress,br,deflate`,
				'content-type' : `application/json`,
				'Connection' : `keep-alive`,
				'Referer' : `https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html`,
				'Host' : `heisekeji.cn`,
				'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`
			}
			const body = `{"OpenId":"${userid}","GameId":${id}}`;

            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                 result = JSON.parse(data);
            try {
                if (code=1) {
					money=result.data.MoneyValue
                    console.log(`元宝数量：${result.data.MoneyValue}`);
                }
            } catch (e) {
                //$.log(e)
            }
            resolve();
            })
        })
    }
   //元宝转换余额
    function convertmoney(userid) {
        return new Promise((resolve, reject) => {
            const url = `https://heisekeji.cn/game/user_money_convert_redpacket`;
			const headers = {
				'Accept-Encoding' : `gzip,compress,br,deflate`,
				'content-type' : `application/json`,
				'Connection' : `keep-alive`,
				'Referer' : `https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html`,
				'Host' : `heisekeji.cn`,
				'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`
			}
			const body = `{"GameId":${id},"OpenId":"${userid}","GameCashConfigId":7,"CashType":2}`;
            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                 result = JSON.parse(data);
            try {
                if (code=1) {
                    console.log(`转换成功 余额 ${result.data.RedPacket} 剩余元宝：${result.data.Money}`);
                }else console.log(`${result.errors.msg}`)
            } catch (e) {
                //$.log(e)
            }
            resolve();
            })
        })
    }


    //提现模块
    function cash(userid) {
        return new Promise((resolve, reject) => {
            const url = "https://heisekeji.cn/game/cash_redpacket";
            const headers = {"Accept-Encoding": "gzip,compress,br,deflate","Connection": "keep-alive","Host": "heisekeji.cn","Referer": "https://servicewechat.com/wxec09f19a63fab867/5/page-frame.html","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN","content-type": "application/json"};
            let body = `{"GameId":${id},"OpenId":"${userid}","RedPacket":30,"Desc":"jzack黑色科技"}`;
            const request = {
                url: url,
                headers: headers,
                body: body
            };

            $.post(request, async (error, response, data) => {
                 result = JSON.parse(data);
				 console.log(`${JSON.stringify(result)}`)
            try {
                if (result.code=1) {
                    console.log(`提现成功 余额 ${result.data.Money}`);
                }else console.log(`${result}`)
            } catch (e) {
                //$.log(e)
            }
            resolve();
            })
        })
    }


    async function httpRequest(method,url) {
        httpResult = null
        return new Promise((resolve) => {
            $[method](url, async (err, resp, data) => {
                try {
                    if (err) {
                       // console.log(`${method}请求失败`);
                        console.log(JSON.stringify(err));
                        $.logErr(err);
                    } else {
                        httpResult = resp;
                    }
                } catch (e) {
                   // $.logErr(e, resp);
                } finally {
                    resolve();
                }
            });
        });
    }










    function Env(t, e) {
        class s {
            constructor(t) {
                this.env = t
            }
            send(t, e = "GET") {
                t = "string" == typeof t ? {
                    url: t
                }
                    : t;
                let s = this.get;
                return "POST" === e && (s = this.post),
                    new Promise((e, i) => {
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
                this.name = t,
                    this.http = new s(this),
                    this.data = null,
                    this.dataFile = "box.dat",
                    this.logs = [],
                    this.isMute = !1,
                    this.isNeedRewrite = !1,
                    this.logSeparator = "\n",
                    this.startTime = (new Date).getTime(),
                    Object.assign(this, e),
                    this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
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
                if (i)
                    try {
                        s = JSON.parse(this.getdata(t))
                    } catch { }
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
                    r = r ? 1 * r : 20,
                        r = e && e.timeout ? e.timeout : r;
                    const [o, h] = i.split("@"),
                        a = {
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
                if (!this.isNode())
                    return {}; {
                    this.fs = this.fs ? this.fs : require("fs"),
                        this.path = this.path ? this.path : require("path");
                    const t = this.path.resolve(this.dataFile),
                        e = this.path.resolve(process.cwd(), this.dataFile),
                        s = this.fs.existsSync(t),
                        i = !s && this.fs.existsSync(e);
                    if (!s && !i)
                        return {}; {
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
                    this.fs = this.fs ? this.fs : require("fs"),
                        this.path = this.path ? this.path : require("path");
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
                    if (r = Object(r)[t], void 0 === r)
                        return s;
                return r
            }
            lodash_set(t, e, s) {
                return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
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
                } else
                    s = this.setval(t, e);
                return s
            }
            getval(t) {
                return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
            }
            setval(t, e) {
                return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
            }
            initGotEnv(t) {
                this.got = this.got ? this.got : require("got"),
                    this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                    this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                    t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
            }
            get(t, e = (() => { })) {
                t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                    this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                        !t && s && (s.body = i, s.statusCode = s.status),
                            e(t, s, i)
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
                                this.ckjar.setCookieSync(s, null),
                                    e.cookieJar = this.ckjar
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
            post(t, e = (() => { })) {
                if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                    this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                        !t && s && (s.body = i, s.statusCode = s.status),
                            e(t, s, i)
                    });
                else if (this.isQuanX())
                    t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
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
                for (let s in e)
                    new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
                return t
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
                let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
                h.push(e),
                    s && h.push(s),
                    i && h.push(i),
                    console.log(h.join("\n")),
                    this.logs = this.logs.concat(h)
            }
            log(...t) {
                t.length > 0 && (this.logs = [...this.logs, ...t]),
                    console.log(t.join(this.logSeparator))
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
                this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                    this.log(),
                    (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
            }
        }
            (t, e)
    }
