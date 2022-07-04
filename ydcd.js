/**
 * 有道词典 
 * cron 12 7 * * *  yml2213_javascript_master/ydcd.js
 * 
 * 有道词典 app  
 * 4-23  完成 开红包 幸运礼盒 功能
 * 签到 什么的暂时没写
 * 
 * 感谢所有测试人员
 * ========= 青龙--配置文件 =========
 * 变量格式: export ydcd_data=' cookie1 @ cookie12 '   多个账号用 @分割 
 * 
 * 抓包： 抓dict.youdao.com , 抓签到包  , 找到有 cookie 的包就行了   ck中 不能有 @
 * 神秘代码: aHR0cHM6Ly90Lm1lL3ltbF90Zw==
 */

const $ = new Env("有道词典");
const notify = $.isNode() ? require('./sendNotify') : '';
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
//////////////////////
let ydcd_dataArr = [];
let ydcd_data = process.env.ydcd_data;
let msg = '';
let ts = Math.round(new Date().getTime()).toString();



!(async () => {

	if (!(await Envs()))  //多账号分割 判断变量是否为空  初步处理多账号
		return;
	else {

		console.log(`\n本地脚本4-23`);

		//  console.log(`\n 脚本已恢复正常状态,请及时更新! `);
		console.log(`\n 脚本测试中,有bug及时反馈! \n`);
		console.log(`\n 脚本测试中,有bug及时反馈! \n`);
		console.log(`\n 脚本测试中,有bug及时反馈! \n`);

		console.log(`\n================================================\n脚本执行 - 北京时间(UTC+8): ${new Date(
			new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()} \n================================================\n`);

		await wyy();


		console.log(`\n=================== 共找到 ${ydcd_dataArr.length} 个账号 ===================`)
		if (debug) {
			console.log(`【debug】 这是你的账号数组:\n ${ydcd_dataArr}`);
		}


		for (let index = 0; index < ydcd_dataArr.length; index++) {


			let num = index + 1
			console.log(`\n========= 开始【第 ${num} 个账号】=========\n`)

			data = ydcd_dataArr[index].split('&');
			if (debug) {
				console.log(`\n 【debug】 这是你第 ${num} 账号信息:\n ${data}\n`);
			}


			console.log('开始 领红包');
			await receive_redpacket();
			await $.wait(2 * 1000);

			console.log('开始 幸运礼盒');
			await box_info();
			await $.wait(2 * 1000);

			// console.log('开始 签到');
			// await sign();
			// await $.wait(2 * 1000);


		}
		await SendMsg(msg);



	}

})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done())



/**
 * 领红包  get
 * https://dict.youdao.com/dictusertask/withdraw/redpacket?pointParam=product,appVersion,keyfrom,mid,screen,keyid,mysticTime,isFinished,bzkro,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid,gdidcwesspvu&yduuid=ebd03285b7d6f3ef&sign=8108fe30ae9fc1217d6ebce3dafb47e6&keyid=dict-usertask-key&mysticTime=1650701557324&isFinished=1&gdidcwesspvu=uxtohgsdbldsqbvok&bzkro=pnmeanwemrbkdcso&product=mdict&appVersion=9.2.4&keyfrom=mdict.9.2.4.android&mid=9&screen=1080x1920&ssid=&network=wifi&abtest=2&vendor=xiaomi&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&model=MI_6&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%253D&oaid=ebd03285b7d6f3ef
 */
function receive_redpacket(timeout = 3 * 1000) {
	let _sign = `abtest=2&appVersion=9.2.4&bzkro=pnmeanwemrbkdcso&client=android&gdidcwesspvu=uxtohgsdbldsqbvok&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&isFinished=1&keyfrom=mdict.9.2.4.android&keyid=dict-usertask-key&mid=9&model=MI_6&mysticTime=${ts}&network=wifi&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%3D&oaid=ebd03285b7d6f3ef&product=mdict&screen=1080x1920&vendor=xiaomi&yduuid=ebd03285b7d6f3ef&key=ttfMFaa7tiPyAc3DanKeIMzEejm`
	let sign = MD5Encrypt(_sign)
	return new Promise((resolve) => {
		let url = {
			url: `https://dict.youdao.com/dictusertask/withdraw/redpacket?pointParam=product,appVersion,keyfrom,mid,screen,keyid,mysticTime,isFinished,bzkro,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid,gdidcwesspvu&yduuid=ebd03285b7d6f3ef&sign=${sign}&keyid=dict-usertask-key&mysticTime=${ts}&isFinished=1&gdidcwesspvu=uxtohgsdbldsqbvok&bzkro=pnmeanwemrbkdcso&product=mdict&appVersion=9.2.4&keyfrom=mdict.9.2.4.android&mid=9&screen=1080x1920&ssid=&network=wifi&abtest=2&vendor=xiaomi&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&model=MI_6&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%253D&oaid=ebd03285b7d6f3ef`,
			headers: {
				'Host': 'dict.youdao.com',
				'Cookie': data,
				'User-Agent': 'youdao_dict_android'
			},
		}

		if (debug) {
			console.log(`\n 【debug】=============== 这是 领红包 请求 url ===============`);
			console.log(url);
		}
		$.get(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 领红包 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.code == 0) {

					console.log(`\领红包 成功 🎉 \n本次获得 ${result.data.redPacketAmount} 元 , 共有${result.data.todayRedPackets} 元 \n`);
					if (result.data.getRedPacketTimes < 4) {

						await $.wait(65 * 1000);
						await receive_redpacket();

					}

				} else {

					console.log(`\n 领红包:  失败 ❌ 了呢,原因未知！\n ${data} \n `)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}



/**
 * 幸运礼盒查询  get
 * https://dict.youdao.com/dictusertask/lottery/info?pointParam=product,appVersion,keyfrom,pxkbxktiymxbjzynl,mid,screen,keyid,mysticTime,network,abtest,yduuid,vendor,client,imei,xrwnrrpokxcswmkycn,model,newImei,oaid&yduuid=ebd03285b7d6f3ef&pxkbxktiymxbjzynl=jsqlp&sign=83993b33018eb7a1fcf2027e22f0bf38&keyid=dict-usertask-key&xrwnrrpokxcswmkycn=cuaueflzuoauwne&mysticTime=1650727535059&product=mdict&appVersion=9.2.4&keyfrom=mdict.9.2.4.android&mid=9&screen=1080x1920&ssid=&network=wifi&abtest=2&vendor=xiaomi&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&model=MI_6&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%253D&oaid=ebd03285b7d6f3ef
 */
function box_info(timeout = 3 * 1000) {
	let _sign = `abtest=2&appVersion=9.2.4&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&keyfrom=mdict.9.2.4.android&keyid=dict-usertask-key&mid=9&model=MI_6&mysticTime=${ts}&network=wifi&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%3D&oaid=ebd03285b7d6f3ef&product=mdict&pxkbxktiymxbjzynl=jsqlp&screen=1080x1920&vendor=xiaomi&xrwnrrpokxcswmkycn=cuaueflzuoauwne&yduuid=ebd03285b7d6f3ef&key=ttfMFaa7tiPyAc3DanKeIMzEejm`
	let sign = MD5Encrypt(_sign)
	return new Promise((resolve) => {
		let url = {
			url: `https://dict.youdao.com/dictusertask/lottery/info?pointParam=product,appVersion,keyfrom,pxkbxktiymxbjzynl,mid,screen,keyid,mysticTime,network,abtest,yduuid,vendor,client,imei,xrwnrrpokxcswmkycn,model,newImei,oaid&yduuid=ebd03285b7d6f3ef&pxkbxktiymxbjzynl=jsqlp&sign=${sign}&keyid=dict-usertask-key&xrwnrrpokxcswmkycn=cuaueflzuoauwne&mysticTime=${ts}&product=mdict&appVersion=9.2.4&keyfrom=mdict.9.2.4.android&mid=9&screen=1080x1920&ssid=&network=wifi&abtest=2&vendor=xiaomi&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&model=MI_6&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%253D&oaid=ebd03285b7d6f3ef`,
			headers: {
				'Host': 'dict.youdao.com',
				'Cookie': data,
			},
		}

		if (debug) {
			console.log(`\n 【debug】=============== 这是 幸运礼盒查询 请求 url ===============`);
			console.log(url);
		}
		$.get(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 幸运礼盒查询 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.code == 0) {

					console.log(`\n 幸运礼盒查询 成功 🎉 `);
					if (result.data.lotteryInfo.freeTimes !== 0) {

						console.log(`\n 你可以开幸运礼盒 ${result.data.lotteryInfo.freeTimes} 次`);
						await $.wait(2 * 1000);
						await open_box();

					}

				} else {

					console.log(`\n 幸运礼盒查询:  失败 ❌ 了呢,原因未知！\n ${data} \n `)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}






/**
 * 开幸运礼盒  post
 * 
 * https://dict.youdao.com/dictusertask/lottery/execute?product=mdict&appVersion=9.2.4&keyfrom=mdict.9.2.4.android&mid=9&screen=1080x1920&ssid=&network=wifi&abtest=2&vendor=xiaomi&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&model=MI_6&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%253D&oaid=ebd03285b7d6f3ef
 * 
 * https://dict.youdao.com/dictusertask/lottery/execute
 */
function open_box(timeout = 3 * 1000) {
	let _sign = `abtest=2&appVersion=9.2.4&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&jjoetkn=erywktadrclyuqfpo&keyfrom=mdict.9.2.4.android&keyid=dict-usertask-key&lotteryType=0&mid=9&model=MI_6&mysticTime=${ts}&network=wifi&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%3D&oaid=ebd03285b7d6f3ef&product=mdict&screen=1080x1920&vendor=xiaomi&yduuid=ebd03285b7d6f3ef&ygikhjmv=vcrbqzkib&key=ttfMFaa7tiPyAc3DanKeIMzEejm`
	let sign = MD5Encrypt(_sign)
	return new Promise((resolve) => {
		let url = {
			url: `https://dict.youdao.com/dictusertask/lottery/execute?product=mdict&appVersion=9.2.4&keyfrom=mdict.9.2.4.android&mid=9&screen=1080x1920&ssid=&network=wifi&abtest=2&vendor=xiaomi&client=android&imei=a1946f7d-b716-48cb-8112-3eb1e993a42c&model=MI_6&newImei=CQk5YTM0ZmEzZmIxZjY5MWExCXVua25vd24%253D&oaid=ebd03285b7d6f3ef`,
			headers: {

				'Host': 'dict.youdao.com',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
				'Cookie': data,
			},
			body: `pointParam=product,appVersion,jjoetkn,keyfrom,mid,screen,keyid,ygikhjmv,mysticTime,lotteryType,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&jjoetkn=erywktadrclyuqfpo&yduuid=ebd03285b7d6f3ef&sign=${sign}&keyid=dict-usertask-key&ygikhjmv=vcrbqzkib&mysticTime=${ts}&lotteryType=0`,
		}

		if (debug) {
			console.log(`\n 【debug】=============== 这是 开幸运礼盒 请求 url ===============`);
			console.log(url);
		}
		$.post(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 开幸运礼盒 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.code == 0) {
					console.log(`\n 开幸运礼盒: ${result.msg} 🎉 \n获得奖品类型 ${result.data.goodsType} , 奖品为 ${result.data.debrisInfo.goodsName}  ${result.data.debrisInfo.num} 个,  奖品描述 ${result.data.debrisInfo.goodsDesc} \n`);

				} else if (result.code == 110) {

					console.log(`\n 开幸运礼盒: ${result.msg} \n`);

				} else {

					console.log(`\n 开幸运礼盒:  失败 ❌ 了呢,原因未知！\n ${data} \n `)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}






/**
 * 签到  get
 * https://dict.youdao.com/dictusertask/cheese/collect?mysticTime=1650730647002&ebhwaaj=xnbuuylbbidxfqtfwne&sign=4de296444b9328448a526534c45cd5bd&keyid=dict-usertask-key&vdxqjnirjqlttfs=nhdtuygvjmxqjml&yduuid=10e04df06aa7b9f865a645f0e2b34005&missionId=8888&pointParam=ssid,screen,mid,keyid,vdxqjnirjqlttfs,yduuid,missionId,newImei,ebhwaaj,mysticTime,network,appVersion,imei,keyfrom,client,abtest,vendor,product,model&network=wifi&ssid=wireless&screen=720x1280&appVersion=9.1.18&imei=10e04df06aa7b9f865a645f0e2b34005&mid=5.1.1&keyfrom=mdict.9.1.18.android&client=android&abtest=0&vendor=tencent&newImei=010306024494030&model=TAS-AN00&product=mdict
 */
function sign(timeout = 3 * 1000) {
	let _sign = `abtest=0&appVersion=9.1.18&client=android&ebhwaaj=xnbuuylbbidxfqtfwne&imei=10e04df06aa7b9f865a645f0e2b34005&keyfrom=mdict.9.1.18.android&keyid=dict-usertask-key&mid=5.1.1&missionId=8888&model=TAS-AN00&mysticTime=${ts}&network=wifi&newImei=010306024494030&product=mdict&screen=720x1280&ssid=wireless&vdxqjnirjqlttfs=nhdtuygvjmxqjml&vendor=tencent&yduuid=10e04df06aa7b9f865a645f0e2b34005&key=ttfMFaa7tiPyAc3DanKeIMzEejm`
	let sign = MD5Encrypt(_sign)
	return new Promise((resolve) => {
		let url = {
			url: `https://dict.youdao.com/dictusertask/cheese/collect?mysticTime=${ts}&ebhwaaj=xnbuuylbbidxfqtfwne&sign=${sign}&keyid=dict-usertask-key&vdxqjnirjqlttfs=nhdtuygvjmxqjml&yduuid=10e04df06aa7b9f865a645f0e2b34005&missionId=8888&pointParam=ssid,screen,mid,keyid,vdxqjnirjqlttfs,yduuid,missionId,newImei,ebhwaaj,mysticTime,network,appVersion,imei,keyfrom,client,abtest,vendor,product,model&network=wifi&ssid=wireless&screen=720x1280&appVersion=9.1.18&imei=10e04df06aa7b9f865a645f0e2b34005&mid=5.1.1&keyfrom=mdict.9.1.18.android&client=android&abtest=0&vendor=tencent&newImei=010306024494030&model=TAS-AN00&product=mdict`,
			headers: {
				'Host': 'dict.youdao.com',
				'Cookie': data,
			},
		}

		if (debug) {
			console.log(`\n 【debug】=============== 这是 签到 请求 url ===============`);
			console.log(url);
		}
		$.get(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 签到 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.code == 0) {

					console.log(`\n 签到 成功 🎉 `);
					if (result.data.lotteryInfo.freeTimes !== 0) {

						console.log(`\n 你可以开幸运礼盒 ${result.data.lotteryInfo.freeTimes} 次`);
						await $.wait(2 * 1000);
						await open_box();

					}

				} else {

					console.log(`\n 签到:  失败 ❌ 了呢,原因未知！\n ${data} \n `)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}

