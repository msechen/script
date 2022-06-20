/*
小程序:贝好多农场
支持:QX、V2P、青龙
6.20日在维护，现在进不去，早点就能进去了，给小鸡喂食下鸡蛋，鸡蛋兑换商品，之前有100个鸡蛋兑换的，现在只有400了。挂青龙吧，我之前兑换100鸡蛋是正常到的。
添加重写，正常登陆小程序后重新进入小程序首页获取变量，变量名bhdtk。青龙手动抓取任何一条链接里面的jwt=后面的部分。
本地重写:
server/Index/getUserInfo? url script-request-header bhdnc.js
hostname = farm.weiyanwy.com
boxjs地址:
https://raw.githubusercontent.com/danchaofan12138/danchaofan/main/ziyong/danchaofan.json
脚本地址:
https://raw.githubusercontent.com/danchaofan12138/danchaofan/main/ziyong/beihaoduo/bhdnc.js
*/

const $ = new Env("贝好多农场");
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
const debug = 0			//0为关闭调试,1为打开调试,默认为0
//---------------------------------------------------------------------------------------------------------
let ckStr = ($.isNode() ? process.env.bhdtk : $.getdata("bhdtk")) || "";
let msg, ck;
let n = 3;
let m = 10;
//---------------------------------------------------------------------------------------------------------
let VersionCheck = "0.0.1";
let Change = "支持QX、V2P、青龙";
//let thank = `\n感谢 蛋炒饭大佬的脚本\n`;
//---------------------------------------------------------------------------------------------------------

async function tips(ckArr) {
	let Version = `\n📌 本地脚本: V 0.0.1 `;
	DoubleLog(`${Version}\n📌 🆙 更新内容: ${Change}`);
	//DoubleLog(`${thank}`);
	await wyy();
	DoubleLog(`\n========== 共找到 ${ckArr.length} 个账号 ==========`);
	debugLog(`【debug】 这是你的账号数组:\n ${ckArr}`);
}

!(async () => {
	if (typeof $request !== "undefined") {
		// 严格不相等
		await GetRewrite();
	} else {
		let ckArr = await Variable_Check(ckStr, "bhdtk");
		await tips(ckArr);
		for (let index = 0; index < ckArr.length; index++) {
			let num = index + 1;
			DoubleLog(`\n-------- 开始【第 ${num} 个账号】--------`);
			ck = ckArr[index].split("&");
			debugLog(`【debug】 这是你第 ${num} 账号信息:\n ${ck}`);
			await start();
		}
		await SendMsg(msg);
	}
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done());

async function start() {
console.log("\n开始 🐤签到🐤");
	await bhdqd();
	await bhdqdlq();
   await $.wait(1000);
   console.log("\n开始 🐤看广告🐤");
	await bhdkgg();
	await bhdkgglq();
   await $.wait(1000);
	console.log("\n开始  🐤健康日签🐤");
	await bhdjkrq();
	await bhdjkrqlq();
   await $.wait(1000);
console.log("\n开始  🐤查看流水🐤");
	await bhdckls();
	await bhdcklslq();
   await $.wait(1000);
console.log("\n开始  🐤日行一善🐤");
for (let j = 0; j < n; j++) {
	await bhdrxys();
		}
	await bhdrxyslq();
   await $.wait(1000);
console.log("\n开始  🐤每日答题🐤");
for (let j = 0; j < m; j++) {
	await bhdmrdt();
		}
	await bhdmrdtlq();
   await $.wait(1000);
console.log("\n开始  🐤给好友鸡鸡加餐🐤");
	await bhdxjjc();
	await bhdxjjclq();
   await $.wait(1000);
console.log("\n开始  🐤每日5000步🐤");
	await bhd5000();
	await bhd5000lq();
   await $.wait(1000);
console.log("\n开始  🐤浏览晒蛋🐤");
	await bhdllsd();
	await bhdllsdlq();
   await $.wait(1000);
console.log("\n开始  🐤赠送鸡蛋🐤");
	await bhdzsjd();
	await bhdzsjdlq();
   await $.wait(1000);
console.log("\n开始  🐤清理鸡屎🐤");
	await bhdqljs();
   await $.wait(1000);
console.log("\n开始  🐤喂小鸡🐤");
	await bhdwxj();
   await $.wait(1000);
console.log("\n开始  🐤给小鸡加餐🐤");
	await bhdjc();
   await $.wait(1000);
console.log("\n开始  🐤收取鸡蛋🐤");
	await bhdsjd();
   await $.wait(1000);
	
}

// 重写 
async function GetRewrite() {
	if ($request.url.indexOf("server/Index/getUserInfo?") > -1) {
		const ck = $request.url.match(/jwt=(\w+)/)[1]
		if (ckStr) {
			if (ckStr.indexOf(ck) == -1) { // 找不到返回 -1
				ckStr = ckStr + "@" + ck;
				$.setdata(ckStr, "bhdtk");
				ckList = ckStr.split("@");
				$.msg($.name + ` 获取第${ckList.length}个 ck 成功: ${ck} ,不用请自行关闭重写!`);
			}
		} else {
			$.setdata(ck, "bhdtk");
			$.msg($.name + ` 获取第1个 ck 成功: ${ck} ,不用请自行关闭重写!`);
		}
	}
}


//签到
async function bhdqd() {
	let Options = {
		url: `https://farm.weiyanwy.com/server/Task/finishTask?jwt=${ck[0]}&type=1`,
		headers: {
	'Referer' : `https://servicewechat.com/wxa537746dcd832b1c/1/page-frame.html`,
'Connection' : `keep-alive`,
'Host' : `farm.weiyanwy.com`,
'content-type' : `application/json`,
'Accept-Encoding' : `gzip,compress,br,deflate`
		},
		
	};
	let result = await PublicRequests('get', Options);
	if (result.errcode == 0) {
		DoubleLog(`签到成功:获得 ${result.data.feed}g粮食🌾`);
		//await wait(3);
	} else {
		DoubleLog(`签到失败: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}
async function bhdqdlq() {
	let Options = {
		url: `https://farm.weiyanwy.com/server/Task/drawFeed?jwt=${ck[0]}&type=1&is_video=1`,
		headers: {
	'Referer' : `https://servicewechat.com/wxa537746dcd832b1c/1/page-frame.html`,
'Connection' : `keep-alive`,
'Host' : `farm.weiyanwy.com`,
'content-type' : `application/json`,
'Accept-Encoding' : `gzip,compress,br,deflate`
		},	
	};
	let result = await PublicRequests('get', Options);
	if (result.errcode == 0) {
		DoubleLog(`领取粮食🌾成功`);
		//await wait(3);
	} else {
		DoubleLog(`${result.errmsg}`);
		//console.log(result);
	}
}

//看广告
async function bhdkgg() {
	let Options = {
		url: `https://farm.weiyanwy.com/server/Task/finishTask?jwt=${ck[0]}&type=2`,
		heade
