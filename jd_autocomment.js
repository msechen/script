const $=new Env('自动评价');
const notify=$.isNode()?require('./sendNotify'):'';
const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
let cookiesArr=[],cookie='';
Object.keys(jdCookieNode).forEach(_0xde758f=>{
	cookiesArr.push(jdCookieNode[_0xde758f]);
});
if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
let userKeyWords=[];
let wordcount=6;
let defKeyWords=['很垃圾','质量差','此用户未填写评价内容'];
let defcommentlist=['网上购物这么激烈，没想到店家的服务这么好，商品质量好而价低廉，我太感谢你了。','质量非常好，真出乎我的意料，包装非常仔细，非常感谢，祝生意兴隆。','这家店还好吧，来买过几次了，服务老客户非常周到，以后还常来。','卖家的服务态度真好，发货很快。商品质量也相当不错。太喜欢了，谢谢。','几以前几乎从未认真评价过，也不知道浪费了多少分。我听说评价中有100多个单词，基本上是每周访问一次。在京东购物太方便了，根本停不下来。从那时起，购买日用品时首先想到的就是京东，它是真正的。起初我很担心。现在我习惯了，这真的很好。现在我必须给更多的折扣。我下次会再来。我一直在购物。它仍然是一个非常好的宝贝。真的很好。这是值得的。网上买一次也没用。它还没有安装。我一次买了两个。大品牌值得信赖。','我真的非常喜欢它，非常支持它，质量非常好，和卖家描述的一模一样，我非常满意。我真的很喜欢它，它完全超出了预期的价值，交货速度非常快，包装非常仔细和紧凑，物流公司有一个良好的服务态度，交货速度非常快，我非常满意购物','质量非常好，与卖家描述的完全一致，非常满意，真 的很喜欢，完全超出期望值，发货速度非常快，包 装非常仔细、严实，物流公司服务态度很好，运送 速度很快，很满意的一次购质量很好，希望更多的 朋友信赖．店主态度特好，我会再次光顾的，可不 可以再便宜点，我带朋友来你家','东西收到，很满意！！京东平台真的是超级好的卖家，解答疑问不厌其烦，细致认真，关键是东西好，而且货物发得超快，包装仔细，值得信赖！','这个价格仍然很划算。经济、便宜、质量非常好，与卖方描述的完全一样。非常满意，完全出乎意料，超划算，划算，购物比实体店便宜多了，非常满意网上购物。我希望卖家的生意会越来越红火，物流会越来越快，包装会越来越结实。六星表扬，多一星不怕你骄傲，犹豫不决的朋友会很快下单，这是良心的推荐。它真的很好，而且价格也很高，所以你将来可以在这里买。给三个好评就满足了！满意了！满意了','让我们先说说商品的质量：产品总体上是好的，包装很紧。让我们来谈谈商家服务：喜欢它。最后，快递：快递非常快。毕竟，廉价商品更真实。我希望商店能提供更多的折扣，及时通知老客户，并促进回购。祝你生意兴隆。'];
!(async()=>{
	for(let _0x3d7f2d=0;_0x3d7f2d<cookiesArr.length;_0x3d7f2d++){
		UA='jdapp;iPhone;10.0.8;14.6;'+uuidRandom()+';network/wifi;JDEbook/openapp.jdreader;model/iPhone9,2;addressid/2214222493;appBuild/168841;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16E158;supportJDSHWK/1';
		if(cookiesArr[_0x3d7f2d]){
			cookie=cookiesArr[_0x3d7f2d];
			$.UserName=decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/)&&cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
			$.index=_0x3d7f2d+1;
			console.log('\n******开始【京东账号'+$.index+'】'+($.nickName||$.UserName)+'*********\n');
			try{
				await main();
			}catch(_0x2151d5){
				console.log(_0x2151d5);
			}
		}
		console.log('冷却中...');
		await $.wait(10000);
	}
})().catch(_0x480d4e=>{
	$.log('','❌ '+$.name+', 失败! 原因: '+_0x480d4e+'!','');
}).finally(()=>{
	$.done();
});
async function main(){
	let _0x49b07b=[];
	let _0x1d723c=[];
	let _0x1fc884=[];
	let _0x2f8013='1';
	let _0x492390=await task('getCommentWareList',{'status':'1','planType':'1','pageIndex':_0x2f8013,'pageSize':'10'});
	_0x2f8013=_0x492390.commentWareListInfo.maxPage;
	await $.wait(1000);
	_0x492390=await task('getCommentWareList',{'status':'1','planType':'1','pageIndex':_0x2f8013,'pageSize':'10'});
	let _0x1123b5=_0x492390.commentWareListInfo.commentWareList.reverse()[0];
	if(_0x1123b5){
		let _0x452122=await task('getCommentListWithCard',{'sortType':'5','isCurrentSku':false,'sku':_0x1123b5.wareId,'pictureCommentType':'A','shieldCurrentComment':'1','shopType':'0','type':'4','shadowMainSku':'0','offset':'1','num':'10'});
		console.log('开始获取评论内容...准备借鉴中...');
		let _0x1d6767=_0x452122.commentInfoList;
		await $.wait(1000);
		for(const _0x16a306 of _0x1d6767){
			if(_0x16a306.commentInfo.pictureInfoList){
				for(const _0x35b3b9 of _0x16a306.commentInfo.pictureInfoList||{}){
					if(_0x35b3b9.mediaType!='2'){
						if(_0x35b3b9.picURL.indexOf('dpg')!==-1){
							picURL=_0x35b3b9.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).dpg/g,'$1');
						}else if(_0x35b3b9.picURL.indexOf('webp')!==-1){
							picURL=_0x35b3b9.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).webp/g,'$1');
						}else if(_0x35b3b9.picURL.indexOf('avif')!==-1){
							picURL=_0x35b3b9.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).avif/g,'$1');
						}
						_0x49b07b.push(picURL);
					};
				};
			};
			if(_0x16a306.commentInfo.commentScore==='5'&&_0x16a306.commentInfo.commentData.length>wordcount){
				_0x1d723c.push(_0x16a306.commentInfo.commentData);
			};
		};
		nullKeyword='';
		for(let _0x452122 of defKeyWords)userKeyWords.push(_0x452122);
		for(let _0x5e3823 of _0x1d723c){
			if(userKeyWords.some(_0x3cb62a=>_0x5e3823.includes(_0x3cb62a)?nullKeyword=_0x3cb62a:'')){
				console.log('评价内容被过滤，含有关键词-【'+nullKeyword+'】');
			}else{
				_0x1fc884.push(_0x5e3823);
			};
		};
		let _0x1e25a0=random(_0x1fc884);
		let _0x38dce5=[{'picUrl':_0x49b07b[0]},{'picUrl':_0x49b07b[1]}];
		let _0x332fec=random(defcommentlist);
		if(_0x49b07b.length>=2&&_0x1fc884.length>=2){
			console.log('借鉴中：'+_0x1123b5.wname+'\n成功获取到图片，去带图评价!\n评论内容：'+_0x1e25a0+'\n');
			await task('jch_pubComment',{'isCommentTagContent':'1','orderId':_0x1123b5.orderId,'anonymousFlag':'0','productId':_0x1123b5.wareId,'isServicePlus':'0','commentData':_0x1e25a0,'commentScore':'5','addPictureFlag':'0','voucherStatus':'0','pictureInfoList':_0x38dce5,'categoryList':_0x1123b5.categoryList});
		}else if(_0x49b07b.length>=2&&_0x1fc884.length<2){
			console.log('借鉴中：'+_0x1123b5.wname+'\n成功获取到图片，且没有获取到评价内容，采用脚本自带评价，去带图评价!\n评论内容：'+_0x332fec+'\n');
			await task('jch_pubComment',{'isCommentTagContent':'1','orderId':_0x1123b5.orderId,'anonymousFlag':'0','productId':_0x1123b5.wareId,'isServicePlus':'0','commentData':_0x332fec,'commentScore':'5','addPictureFlag':'0','voucherStatus':'0','pictureInfoList':_0x38dce5,'categoryList':_0x1123b5.categoryList});
		}else if(_0x49b07b.length<2&&_0x1fc884.length>=2){
			console.log('借鉴中：'+_0x1123b5.wname+'\n没有获取到图片，且获取到评价，去评价!\n评论内容：'+_0x1e25a0+'\n');
			await task('jch_pubComment',{'isCommentTagContent':'1','orderId':_0x1123b5.orderId,'anonymousFlag':'0','productId':_0x1123b5.wareId,'isServicePlus':'0','commentData':_0x1e25a0,'commentScore':'5','addPictureFlag':'0','voucherStatus':'0','pictureInfoList':'','categoryList':_0x1123b5.categoryList});
		}else if(_0x1d6767.length<=1){
			console.log('借鉴中：'+_0x1123b5.wname+'\n没有获取到评价内容,采用脚本自带评价\n评论内容：'+_0x332fec+'\n');
			await task('jch_pubComment',{'isCommentTagContent':'1','orderId':_0x1123b5.orderId,'anonymousFlag':'0','productId':_0x1123b5.wareId,'isServicePlus':'0','commentData':_0x332fec,'commentScore':'5','addPictureFlag':'0','voucherStatus':'0','pictureInfoList':'','categoryList':_0x1123b5.categoryList});
		};
	}else{
		console.log('没有待评价!!');
	}
}
async function task(_0x505a3d,_0x31c032){
	return s=await getSign(_0x505a3d,_0x31c032),opt={'url':'https://api.m.jd.com/client.action?functionId='+_0x505a3d,'body':s.body,'headers':{'Host':'api.m.jd.com','content-type':'application/x-www-form-urlencoded','accept':'*/*','user-agent':UA,'accept-language':'zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6','Cookie':cookie}},new Promise(_0xae776=>{
		$.post(opt,(_0x226faf,_0x1d8767,_0x1ad207)=>{
			try{
				_0x226faf?console.log(_0x226faf):_0x1ad207=JSON.parse(_0x1ad207);
				if(_0x1ad207&&_0x1ad207.code==='0'&&_0x1ad207.commentSuccessInfo&&_0x1ad207.commentSuccessInfo.auditPromptText){
					console.log('评论：'+_0x1ad207.commentSuccessInfo.commentSuccessMainText+'\n审核：'+_0x1ad207.commentSuccessInfo.auditPromptText);
				}else if(_0x1ad207&&_0x1ad207.code==='0'&&_0x1ad207.commentSuccessInfo){
					console.log('评论：'+_0x1ad207.commentSuccessInfo.commentSuccessMainText+'\n审核：'+_0x1ad207.commentSuccessInfo.commentJingBeanText);
				}
			}catch(_0xcdccfd){
				console.log(_0xcdccfd);
			}finally{
				_0xae776(_0x1ad207||'');
			}
		});
	});
}
function uuidRandom(){
	return Math.random().toString(16).slice(2,10)+Math.random().toString(16).slice(2,10)+Math.random().toString(16).slice(2,10)+Math.random().toString(16).slice(2,10)+Math.random().toString(16).slice(2,10);
}
function random(_0xe460be){
	return _0xe460be[Math.floor(Math.random()*_0xe460be.length)];
}
function getSign(_0x568fed,_0x5d8a1b,_0x23da94='sign'){
	'jch_pubComment'===_0x568fed&&(_0x23da94='jchsign');
	let _0x5eaeb3={'url':'http://fakermetaverse.xyz/'+_0x23da94,'body':JSON.stringify({'fn':_0x568fed,'body':_0x5d8a1b}),'headers':{'Content-Type':'application/json'}};
	return new Promise(_0x568fed=>{
		$.post(_0x5eaeb3,async(_0x5d8a1b,_0x23da94,_0x5eaeb3)=>{
			try{
				_0x5d8a1b?console.log(_0x5d8a1b):_0x5eaeb3=JSON.parse(_0x5eaeb3);
			}catch(_0x460bb8){
				$.logErr(_0x460bb8,_0x23da94);
			}finally{
				_0x568fed(_0x5eaeb3||'');
			}
		});
	});
};
function Env(t,e){
	"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);
	class s{
		constructor(t){
			this.env=t
		}send(t,e="GET"){
			t="string"==typeof t?{url:t}:t;
			let s=this.get;
			return "POST"===e&&(s=this.post),new Promise((e,i)=>{
				s.call(this,t,(t,s,r)=>{
					t?i(t):e(s)
				})
			})
		}get(t){
			return this.send.call(this.env,t)
		}post(t){
			return this.send.call(this.env,t,"POST")
		}
	}return new class{
		constructor(t,e){
			this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)
		}isNode(){
			return "undefined"!=typeof module&&!!module.exports
		}isQuanX(){
			return "undefined"!=typeof $task
		}isSurge(){
			return "undefined"!=typeof $httpClient&&"undefined"==typeof $loon
		}isLoon(){
			return "undefined"!=typeof $loon
		}toObj(t,e=null){
			try{
				return JSON.parse(t)
			}catch{
				return e
			}
		}toStr(t,e=null){
			try{
				return JSON.stringify(t)
			}catch{
				return e
			}
		}getjson(t,e){
			let s=e;
			const i=this.getdata(t);
			if(i)try{
				s=JSON.parse(this.getdata(t))
			}
			catch{}return s
		}setjson(t,e){
			try{
				return this.setdata(JSON.stringify(t),e)
			}catch{
				return!1
			}
		}getScript(t){
			return new Promise(e=>{
				this.get({url:t},(t,s,i)=>e(i))
			})
		}runScript(t,e){
			return new Promise(s=>{
				let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i=i?i.replace(/\n/g,"").trim():i;
				let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r=r?1*r:20,r=e&&e.timeout?e.timeout:r;
				const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};
				this.post(n,(t,e,i)=>s(i))
			}).catch(t=>this.logErr(t))
		}loaddata(){
			if(!this.isNode())return{};
			{
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);
				if(!s&&!i)return{};
				{
					const i=s?t:e;
					try{
						return JSON.parse(this.fs.readFileSync(i))
					}catch(t){
						return{}
					}
				}
			}
		}writedata(){
			if(this.isNode()){
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);
				s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)
			}
		}lodash_get(t,e,s){
			const i=e.replace(/\[(\d+)\]/g,".$1").split(".");
			let r=t;
			for(const t of i)if(r=Object(r)[t],void 0===r)return s;
			return r
		}lodash_set(t,e,s){
			return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)
		}getdata(t){
			let e=this.getval(t);
			if(/^@/.test(t)){
				const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";
				if(r)try{
					const t=JSON.parse(r);
					e=t?this.lodash_get(t,i,""):e
				}
				catch(t){
					e=""
				}
			}
			return e
		}setdata(t,e){
			let s=!1;
			if(/^@/.test(e)){
				const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";
				try{
					const e=JSON.parse(h);
					this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)
				}catch(e){
					const o={};
					this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)
				}
			}else s=this.setval(t,e);
			return s
		}getval(t){
			return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null
		}setval(t,e){
			return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null
		}initGotEnv(t){
			this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))
		}get(t,e=(()=>{})){
			t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{
				try{
					if(t.headers["set-cookie"]){
						const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar
					}
				}catch(t){
					this.logErr(t)
				}
			}).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>{
				const{message:s,response:i}=t;
				e(s,i,i&&i.body)
			}))
		}post(t,e=(()=>{})){
			if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t));else if(this.isNode()){
				this.initGotEnv(t);
				const{url:s,...i}=t;
				this.got.post(s,i).then(t=>{
					const{statusCode:s,statusCode:i,headers:r,body:o}=t;
					e(null,{status:s,statusCode:i,headers:r,body:o},o)
				},t=>{
					const{message:s,response:i}=t;
					e(s,i,i&&i.body)
				})
			}
		}time(t,e=null){
			const s=e?new Date(e):new Date;
			let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};
			/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));
			for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));
			return t
		}msg(e=t,s="",i="",r){
			const o=t=>{
				if(!t)return t;
				if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}
				:this.isSurge()?{url:t}:void 0;
				if("object"==typeof t){
					if(this.isLoon()){
						let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];
						return{openUrl:e,mediaUrl:s}
					}
					if(this.isQuanX()){
						let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;
						return{"open-url":e,"media-url":s}
					}
					if(this.isSurge()){
						let e=t.url||t.openUrl||t["open-url"];
						return{url:e}
					}
				}
			};
			if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){
				let t=["","==============📣系统通知📣=============="];
				t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)
			}
		}log(...t){
			t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))
		}logErr(t,e){
			const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();
			s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)
		}wait(t){
			return new Promise(e=>setTimeout(e,t))
		}done(t={}){
			const e=(new Date).getTime(),s=(e-this.startTime)/1e3;
			this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)
		}
	}(t,e)
};