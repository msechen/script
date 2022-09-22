/*
羊了个羊群 资金盘 不要投资

(抓header里面的unionid和token的值)

格式  unionid#token
例如  oEgG85#123456

ck填到yqCookie里，多账号 换行 或者@隔开
*/

const $ = new Env( "羊群" );
let envSplitor = [ "@", "\n" ],
	httpResult, httpReq, httpResp, ckName = "yqCookie",
	userCookie = ( $.isNode() ? process.env[ ckName ] : $.getdata( ckName ) ) || "",
	userList = [],
	userIdx = 0,
	userCount = 0;
class UserInfo {
	constructor( e ) {
		this.index = ++userIdx;
		try {
			this.ck = e.split( "#" ), this.u = this.ck[ 0 ], this.t = this.ck[ 1 ]
		} catch ( s ) {}
	}
	async getuseinfo () {
		try {
			let e = `{"unionid":"${this.u}"}`,
				s;
			await httpRequest( "post", popu( "http://www.ieddoq.cn/user/getuseinfo", {
				unionid: this.u,
				token: this.t,
				"Content-Type": "application/json"
			}, e ) );
			let i = httpResult;
			if ( this.nickname = i.result.nickname, this.money = i.result.money, this.cashnum = i.result.cashnum, !i.result.alipay ) var n = "未绑定";
			if ( i.result.alipay ) {
				var n = "已绑定";
				this.my = 1
			}
			console.log( `用户 ${this.nickname} 余额${this.money} 支付宝${n}` )
		} catch ( o ) {
			console.log( o )
		} finally {
			return Promise.resolve( 1 )
		}
	}
	async addmoney () {
		try {
			let e = `{
  "unionid" : "${this.u}"
}`,
				s;
			await httpRequest( "post", popu( "http://www.ieddoq.cn/user/addmyorder0", {
				unionid: this.u,
				token: this.t,
				"Content-Type": "application/json"
			}, e ) );
			let i = httpResult;
			0 == i.data && console.log( `用户 ${this.nickname} 今天已经领取了` ), this.money >= .2 && 1 == this.my && this.cashnum > 0 ? await this.cash() : console.log( `用户 ${this.nickname} 你今天还可以提现 ${this.cashnum} 次
用户 ${this.nickname} 你的余额不足或者没绑定支付宝 跳过提现` )
		} catch ( n ) {
			console.log( n )
		} finally {
			return Promise.resolve( 1 )
		}
	}
	async cash () {
		try {
			let e = `{
  "unionid" : "${this.money}"
}`,
				s;
			await httpRequest( "post", popu( "http://www.ieddoq.cn/trade/pushcash", {
				unionid: this.u,
				token: this.t,
				"Content-Type": "application/json"
			}, e ) );
			let i = httpResult;
			0 == i.data && console.log( `用户 ${this.nickname} 你没绑定支付宝怎么提现？` ), 1 == i.data && console.log( `用户 ${this.nickname} 提现成功了 具体到账没有请打开支付宝查看吧！` )
		} catch ( n ) {
			console.log( n )
		} finally {
			return Promise.resolve( 1 )
		}
	}
}
async function GetRewrite () {}
async function checkEnv () {
	if ( userCookie ) {
		let e = envSplitor[ 0 ];
		for ( let s of envSplitor )
			if ( userCookie.indexOf( s ) > -1 ) {
				e = s;
				break
			} for ( let i of userCookie.split( e ) ) i && userList.push( new UserInfo( i ) );
		userCount = userList.length
	}
	return console.log( `找到${userCount}个账号` ), !0
}

function popu ( e, s, i = "" ) {
	e.replace( "//", "/" )
		.split( "/" )[ 1 ];
	let n = {
		url: e,
		headers: s,
		timeout: 5e3
	};
	return i && ( n.body = i ), n
}
async function httpRequest ( e, s ) {
	return httpResult = null, httpReq = null, httpResp = null, new Promise( i => {
		$.send( e, s, async ( e, s, n ) => {
			try {
				if ( httpReq = s, httpResp = n, e );
				else if ( n.body ) {
					if ( "object" == typeof n.body ) httpResult = n.body;
					else try {
						httpResult = JSON.parse( n.body )
					} catch ( o ) {
						httpResult = n.body
					}
				}
			} catch ( r ) {
				console.log( r )
			} finally {
				i()
			}
		} )
	} )
}

function Env ( e, s ) {
	return "undefined" != typeof process && JSON.stringify( process.env )
		.indexOf( "GITHUB" ) > -1 && process.exit( 0 ), new class {
			constructor( e, s ) {
				this.name = e, this.notifyStr = "", this.startTime = ( new Date )
					.getTime(), Object.assign( this, s ), console.log( `${this.name} 开始运行：
` )
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
			getdata( e ) {
				let s = this.getval( e );
				if ( /^@/.test( e ) ) {
					let [ , i, n ] = /^@(.*?)\.(.*?)$/.exec( e ), o = i ? this.getval( i ) : "";
					if ( o ) try {
						let r = JSON.parse( o );
						s = r ? this.lodash_get( r, n, "" ) : s
					} catch ( a ) {
						s = ""
					}
				}
				return s
			}
			setdata( e, s ) {
				let i = !1;
				if ( /^@/.test( s ) ) {
					let [ , n, o ] = /^@(.*?)\.(.*?)$/.exec( s ), r = this.getval( n );
					try {
						let a = JSON.parse( n ? "null" === r ? null : r || "{}" : "{}" );
						this.lodash_set( a, o, e ), i = this.setval( JSON.stringify( a ), n )
					} catch ( l ) {
						let u = {};
						this.lodash_set( u, o, e ), i = this.setval( JSON.stringify( u ), n )
					}
				} else i = this.setval( e, s );
				return i
			}
			getval( e ) {
				return this.isSurge() || this.isLoon() ? $persistentStore.read( e ) : this.isQuanX() ? $prefs.valueForKey( e ) : this.isNode() ? ( this.data = this.loaddata(), this.data[ e ] ) : this.data && this.data[ e ] || null
			}
			setval( e, s ) {
				return this.isSurge() || this.isLoon() ? $persistentStore.write( e, s ) : this.isQuanX() ? $prefs.setValueForKey( e, s ) : this.isNode() ? ( this.data = this.loaddata(), this.data[ s ] = e, this.writedata(), !0 ) : this.data && this.data[ s ] || null
			}
			send( e, s, i = () => {} ) {
				if ( "get" != e && "post" != e && "put" != e && "delete" != e ) {
					console.log( `无效的http方法：${e}` );
					return
				}
				if ( "get" == e && s.headers ? ( delete s.headers[ "Content-Type" ], delete s.headers[ "Content-Length" ] ) : s.body && s.headers && ( s.headers[ "Content-Type" ] || ( s.headers[ "Content-Type" ] = "application/x-www-form-urlencoded" ) ), this.isSurge() || this.isLoon() ) {
					this.isSurge() && this.isNeedRewrite && ( s.headers = s.headers || {}, Object.assign( s.headers, {
						"X-Surge-Skip-Scripting": !1
					} ) );
					let n = {
						method: e,
						url: s.url,
						headers: s.headers,
						timeout: s.timeout,
						data: s.body
					};
					"get" == e && delete n.data, $axios( n )
						.then( e => {
							let {
								status: s,
								request: n,
								headers: o,
								data: r
							} = e;
							i( null, n, {
								statusCode: s,
								headers: o,
								body: r
							} )
						} )
						.catch( e => console.log( e ) )
				} else if ( this.isQuanX() ) s.method = e.toUpperCase(), this.isNeedRewrite && ( s.opts = s.opts || {}, Object.assign( s.opts, {
						hints: !1
					} ) ), $task.fetch( s )
					.then( e => {
						let {
							statusCode: s,
							request: n,
							headers: o,
							body: r
						} = e;
						i( null, n, {
							statusCode: s,
							headers: o,
							body: r
						} )
					}, e => i( e ) );
				else if ( this.isNode() ) {
					this.got = this.got ? this.got : require( "got" );
					let {
						url: o,
						...r
					} = s;
					this.instance = this.got.extend( {
							followRedirect: !1
						} ), this.instance[ e ]( o, r )
						.then( e => {
							let {
								statusCode: s,
								request: n,
								headers: o,
								body: r
							} = e;
							i( null, n, {
								statusCode: s,
								headers: o,
								body: r
							} )
						}, e => {
							let {
								message: s,
								response: n
							} = e;
							i( s, n, n && n.body )
						} )
				}
			}
			time( e ) {
				let s = {
					"M+": ( new Date )
						.getMonth() + 1,
					"d+": ( new Date )
						.getDate(),
					"h+": ( new Date )
						.getHours(),
					"m+": ( new Date )
						.getMinutes(),
					"s+": ( new Date )
						.getSeconds(),
					"q+": Math.floor( ( ( new Date )
						.getMonth() + 3 ) / 3 ),
					S: ( new Date )
						.getMilliseconds()
				};
				for ( let i in /(y+)/.test( e ) && ( e = e.replace( RegExp.$1, ( ( new Date )
						.getFullYear() + "" )
					.substr( 4 - RegExp.$1.length ) ) ), s ) RegExp( "(" + i + ")" )
					.test( e ) && ( e = e.replace( RegExp.$1, 1 == RegExp.$1.length ? s[ i ] : ( "00" + s[ i ] )
						.substr( ( "" + s[ i ] )
							.length ) ) );
				return e
			}
			async showmsg () {
				if ( !this.notifyStr ) return;
				let e = this.name + " 运行通知\n\n" + this.notifyStr;
				if ( $.isNode() ) {
					var s = require( "./sendNotify" );
					console.log( "\n============== 推送 ==============" ), await s.sendNotify( this.name, e )
				} else this.msg( e )
			}
			logAndNotify( e ) {
				console.log( e ), this.notifyStr += e, this.notifyStr += "\n"
			}
			msg( e = t, s = "", i = "", n ) {
				let o = e => {
					if ( !e ) return e;
					if ( "string" == typeof e ) return this.isLoon() ? e : this.isQuanX() ? {
						"open-url": e
					} : this.isSurge() ? {
						url: e
					} : void 0;
					if ( "object" == typeof e ) {
						if ( this.isLoon() ) {
							let s;
							return {
								openUrl: e.openUrl || e.url || e[ "open-url" ],
								mediaUrl: e.mediaUrl || e[ "media-url" ]
							}
						}
						if ( this.isQuanX() ) {
							let i;
							return {
								"open-url": e[ "open-url" ] || e.url || e.openUrl,
								"media-url": e[ "media-url" ] || e.mediaUrl
							}
						}
						if ( this.isSurge() ) return {
							url: e.url || e.openUrl || e[ "open-url" ]
						}
					}
				};
				this.isMute || ( this.isSurge() || this.isLoon() ? $notification.post( e, s, i, o( n ) ) : this.isQuanX() && $notify( e, s, i, o( n ) ) );
				let r = [ "", "============== 系统通知 ==============" ];
				r.push( e ), s && r.push( s ), i && r.push( i ), console.log( r.join( "\n" ) )
			}
			getMin( e, s ) {
				return e < s ? e : s
			}
			getMax( e, s ) {
				return e < s ? s : e
			}
			padStr( e, s, i = "0" ) {
				let n = String( e ),
					o = s > n.length ? s - n.length : 0,
					r = "";
				for ( let a = 0; a < o; a++ ) r += i;
				return r + n
			}
			json2str( e, s, i = !1 ) {
				let n = [];
				for ( let o of Object.keys( e )
					.sort() ) {
					let r = e[ o ];
					r && i && ( r = encodeURIComponent( r ) ), n.push( o + "=" + r )
				}
				return n.join( s )
			}
			str2json( e, s = !1 ) {
				let i = {};
				for ( let n of e.split( "#" ) ) {
					if ( !n ) continue;
					let o = n.indexOf( "=" );
					if ( -1 == o ) continue;
					let r = n.substr( 0, o ),
						a = n.substr( o + 1 );
					s && ( a = decodeURIComponent( a ) ), i[ r ] = a
				}
				return i
			}
			randomString( e, s = "abcdef0123456789" ) {
				let i = "";
				for ( let n = 0; n < e; n++ ) i += s.charAt( Math.floor( Math.random() * s.length ) );
				return i
			}
			randomList( e ) {
				return e[ Math.floor( Math.random() * e.length ) ]
			}
			wait( e ) {
				return new Promise( s => setTimeout( s, e ) )
			}
			done( e = {} ) {
				let s = ( ( new Date )
					.getTime() - this.startTime ) / 1e3;
				console.log( `
${this.name} 运行结束，共运行了 ${s} 秒！` ), ( this.isSurge() || this.isQuanX() || this.isLoon() ) && $done( e )
			}
		}( e, s )
}( async () => {
	if ( "undefined" != typeof $request ) await GetRewrite();
	else {
		if ( !await checkEnv() ) return;
		if ( userList.length > 0 ) {
			for ( let e of ( console.log( "\n------- 登陆和余额 -------\n" ), taskall = [], userList ) ) taskall.push( e.getuseinfo() );
			await Promise.all( taskall )
		}
		if ( userList.length > 0 ) {
			for ( let s of ( console.log( "\n------- 分红和提现 -------\n" ), taskall = [], userList ) ) taskall.push( s.addmoney() );
			await Promise.all( taskall )
		}
	}
} )()
.catch( e => console.log( e ) )
	.finally( () => $.done() );
