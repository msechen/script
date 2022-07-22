/*
[MITM]
hostname = www.chongpar.cn
https://www.chongpar.cn/member/cp-member-integral/add url script-request-header https://kireinasakura.coding.net/p/could/d/there/git/raw/master/liuliu.js


微信需绑定手机号 完善用户信息授权微信后 自动获取账号数据

提现秒到  多账号可绑定同个

*/

const $ = new Env("溜ta");

let envSplitor = ['@']
let httpResult, httpReq, httpResp

let userCookie = ($.isNode() ? process.env.llcookie : $.getdata('llcookie')) || '';

let userList = []
let userIdx = 0
let userCount = 0

let phone = ($.isNode() ? process.env.llphonecookie : $.getdata('llphonecookie')) || '';


let name = "" //姓名


let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN'

///////////////////////////////////////////////////////////////////
class UserInfo {
	constructor(str) {
		this.index = ++userIdx
		this.name = this.index
		this.valid = false
		this.withdrawFailCount = 0

		try {
			this.ck = str
			this.ckValid = true
		} catch (e) {
			this.ckValid = false
			$.logAndNotify(`账号[${this.index}]CK无效，请检查格式`)
		}
	}

	async kong() {
		try {
			let url = `https://www.chongpar.cn/member/cp-member/index?`
			let body = ``
			let token = `${this.ck}`
			let urlObject = populateUrlObject(url, token, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			this.nickname = result.info.nickname
			await this.userinfo()
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}


async getid() {
		try {
			let url = `https://www.chongpar.cn/member/cp-member-integral-award-rule/index?startTime=2022-07-22%2000%3A00%3A00&endTime=2022-08-22%2000%3A00%3A00`
			let body = ``
			let token = `${this.ck}`
			let urlObject = populateUrlObject(url, token, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
for (let i=0;i<3;i++){
let z = JSON.stringify(result[i])
               let x = JSON.parse(z)
               let t = x.id
			this.mini = t
			await this.add()
}
			
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async userinfo() {
		try {
			let url = `https://www.chongpar.cn/member/cp-member-integral/add`
			let body = `{"type":0}`
			let token = `${this.ck}`
			let urlObject = populateUrlObject(url, token, body)
			await httpRequest('post', urlObject)
			let result = httpResult;
			this.code = httpResp.statusCode
			if (this.code == 400) {
				console.log(`账号[${this.name}] ` + this.nickname + ` 已签到`)
			} else console.log(`账号[${this.name}] ` + this.nickname + ` 签到成功`)
               await this.getid()

			

			

		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async add() {
		try {
			let url = `https://www.chongpar.cn/member/cp-member-integral-award-rule/judge?id=${this.mini}`
			let body = ``
			let token = `${this.ck}`
			let urlObject = populateUrlObject(url, token, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			this.brief = result.brief
			if (result.orderId) {
				this.id = result.orderId
				await this.confirm()
			}
			if (result.popUp == 1) {
				console.log(`\n账号[${this.name}] ${this.mini} 提现结果查询 ` + this.brief)
			} else if(result.todayStatus==1){
console.log(`账号[${this.name}] ${this.mini} ${result.brief}`)
}
		} catch (e) {} finally {
			return Promise.resolve(1);
		}
	}


	async confirm() {
		try {
			let url = `https://www.chongpar.cn/member/cp-member-integral-award-rule/confirm`
			let body = `{"phone":"${phone}","id":"${this.id}","realName":"${name}"}`

			let token = `${this.ck}`

			let urlObject = populateUrlObject(url, token, body)
			await httpRequest('post', urlObject)
			let result = httpResult;
			if (httpResp.statusCode == 400) {
				console.log(`账号[${this.name}] 绑定支付宝 已经绑定支付宝`)
			} else if (httpResp.statusCode == 200) {
				console.log(`\n账号[${this.name}] ` + `签到奖励` + result.price * 0.01 + `元`);
			}
		} catch (e) {
			//console.log(e)
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

			console.log('-------------- 查询 --------------')
			taskall = []
			for (let user of validList) {
				taskall.push(user.kong())
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
	if ($request.url.indexOf(`cp-member-integral/add`) > -1) {
		if (!$request.headers) return;
		let token = $request.headers['User-Token']
		if (!token) return false
		let ck = `${token}`

		console.log(ck)
		if (userCookie) {
			if (userCookie.indexOf(ck) == -1) {
				userCookie = userCookie + '@' + ck
				$.setdata(userCookie, 'llcookie');
				ckList = userCookie.split('@')
				$.msg(`获取第${ckList.length}个ck成功: ${ck}`)
			}
		} else {
			$.setdata(ck, 'llcookie');
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
	let host = url.replace('//', '/')
		.split('/')[1]
	let urlObject = {
		url: url,
		headers: {
			'Host': host,
			'Connection': 'keep-alive',
			'Referer': 'https://servicewechat.com/wxf85576319c33dd1b/35/page-frame.htm',
			'Accept-Encoding': 'gzip,compress,br,deflate',
			'User-Token': token,
			'User-Agent': defaultUA,
		},
		timeout: 5000,
	}
	//console.log(`${JSON.stringify(urlObject)}`)
	if (body) {
		urlObject.body = body
		urlObject.headers['Content-Type'] = 'application/json;'
		//urlObject.headers['Content-Length'] = urlObject.body ? urlObject.body.length : 0
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
	"undefined" != typeof process && JSON.stringify(process.env)
		.indexOf("GITHUB") > -1 && process.exit(0);
	return new class {
		constructor(name, env) {
			this.name = name
			this.notifyStr = ''
			this.startTime = (new Date)
				.getTime()
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
			} else {
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
		send(m, t, e = (() => {})) {
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
					Object.assign(t.headers, {
						"X-Surge-Skip-Scripting": !1
					});
				}
				let conf = {
					method: m,
					url: t.url,
					headers: t.headers,
					timeout: t.timeout,
					data: t.body
				};
				if (m == 'get') delete conf.data
				$axios(conf)
					.then(t => {
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
					})
					.catch(err => console.log(err))
			} else if (this.isQuanX()) {
				t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
						hints: !1
					})),
					$task.fetch(t)
					.then(t => {
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
				this.instance[m](s, i)
					.then(t => {
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
				"M+": (new Date)
					.getMonth() + 1,
				"d+": (new Date)
					.getDate(),
				"h+": (new Date)
					.getHours(),
				"m+": (new Date)
					.getMinutes(),
				"s+": (new Date)
					.getSeconds(),
				"q+": Math.floor(((new Date)
					.getMonth() + 3) / 3),
				S: (new Date)
					.getMilliseconds()
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date)
					.getFullYear() + "")
				.substr(4 - RegExp.$1.length)));
			for (let s in e)
				new RegExp("(" + s + ")")
				.test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s])
					.substr(("" + e[s])
						.length)));
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
						} :
						this.isSurge() ? {
							url: t
						} :
						void 0;
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
			for (let keys of Object.keys(obj)
				.sort()) {
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
			const e = (new Date)
				.getTime(),
				s = (e - this.startTime) / 1e3;
			console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
			if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
		}
	}(name, env)
}
