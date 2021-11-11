/*
项目名称:网易严选app

下载地址:各大应用商城或者百度搜 网易严选

属于种树嫖物品的毛

变量说明

手动抓包过滤域名act.you.163.com方便找数据

变量需求

soy_wyyx_token
#在连接上的csrf_token

soy_wyyx_INFO
#在Cookie上的P_OINFO值

soy_wyyx_SESS
#在请求头Cookie上的NTES_OSESS值


v2p配置

没有v2p自动重写,自行手动抓包添加

cron "5 6-23/1 * * *"

注:脚本需要依赖sendNotify库,没有就要拉取
青龙拉取办法ql repo https://gitee.com/soy-tool/app-script.git "soy_" "" "sendNotify.js"

v2p面板直接拉取 https://gitee.com/soy-tool/app-script/raw/master/sendNotify.js

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_wyyx.js

*/
const $ = new Env('网易严选');
// @grant require
const notify = require('./sendNotify');
let app_soy_wyyx_token = [],app_soy_wyyx_INFO = [],app_soy_wyyx_SESS = [],app_soy_wyyx_UA = [];

let tz = ($.getval('tz') || '1');
$.message = '';

!(async () => {
  if (typeof $request !== "undefined") {
    // hxcck()
  } else {
    if (!$.isNode()) {
        
        if(!$.getdata('soy_wyyx_token')){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_token`);
        return;
        };
        
        if(!$.getdata('soy_wyyx_INFO')){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_INFO`);
        return;
        };
        
        if(!$.getdata('soy_wyyx_SESS')){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_SESS`);
        return;
        };
        
        if ($.getdata('soy_wyyx_token') && $.getdata('soy_wyyx_token').indexOf('@') > -1) {
        app_soy_wyyx_token = $.getdata('soy_wyyx_token').split('@');
    } else if ($.getdata('soy_wyyx_token') && $.getdata('soy_wyyx_token').indexOf('\n') > -1) {
        app_soy_wyyx_token = $.getdata('soy_wyyx_token').split('\n');
    } else {
        app_soy_wyyx_token = $.getdata('soy_wyyx_token').split();
    };
    
    if ($.getdata('soy_wyyx_INFO') && $.getdata('soy_wyyx_INFO').indexOf('@') > -1) {
        app_soy_wyyx_INFO = $.getdata('soy_wyyx_INFO').split('@');
    } else if ($.getdata('soy_wyyx_INFO') && $.getdata('soy_wyyx_INFO').indexOf('\n') > -1) {
        app_soy_wyyx_INFO = $.getdata('soy_wyyx_INFO').split('\n');
    } else {
        app_soy_wyyx_INFO = $.getdata('soy_wyyx_INFO').split();
    };
    
    if ($.getdata('soy_wyyx_SESS') && $.getdata('soy_wyyx_SESS').indexOf('@') > -1) {
        app_soy_wyyx_SESS = $.getdata('soy_wyyx_SESS').split('@');
    } else if ($.getdata('soy_wyyx_SESS') && $.getdata('soy_wyyx_SESS').indexOf('\n') > -1) {
        app_soy_wyyx_SESS = $.getdata('soy_wyyx_SESS').split('\n');
    } else {
        app_soy_wyyx_SESS = $.getdata('soy_wyyx_SESS').split();
    };
        

    } else {
        
        if(!process.env.soy_wyyx_token){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_token`);
        return;
        };
        
        if(!process.env.soy_wyyx_INFO){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_INFO`);
        return;
        };
        
        if(!process.env.soy_wyyx_SESS){
        console.log(`\n【${$.name}】：未提供变量 soy_wyyx_SESS`);
        return;
        };
        
        
      if (process.env.soy_wyyx_token && process.env.soy_wyyx_token.indexOf('\n') > -1) {
        soy_wyyx_token = process.env.soy_wyyx_token.split('\n');
      } else {
        soy_wyyx_token = process.env.soy_wyyx_token.split();
      };
      Object.keys(soy_wyyx_token).forEach((item) => {
        if (soy_wyyx_token[item]) {
          app_soy_wyyx_token.push(soy_wyyx_token[item])
        };
      });
      
      if (process.env.soy_wyyx_INFO && process.env.soy_wyyx_INFO.indexOf('\n') > -1) {
        soy_wyyx_INFO = process.env.soy_wyyx_INFO.split('\n');
      } else {
        soy_wyyx_INFO = process.env.soy_wyyx_INFO.split();
      };
      Object.keys(soy_wyyx_INFO).forEach((item) => {
        if (soy_wyyx_INFO[item]) {
          app_soy_wyyx_INFO.push(soy_wyyx_INFO[item])
        };
      });
      
      if (process.env.soy_wyyx_SESS && process.env.soy_wyyx_SESS.indexOf('\n') > -1) {
        soy_wyyx_SESS = process.env.soy_wyyx_SESS.split('\n');
      } else {
        soy_wyyx_SESS = process.env.soy_wyyx_SESS.split();
      };
      Object.keys(soy_wyyx_SESS).forEach((item) => {
        if (soy_wyyx_SESS[item]) {
          app_soy_wyyx_SESS.push(soy_wyyx_SESS[item])
        };
      });
      

    };
    
    console.log(`\n=== 脚本执行 - 北京时间：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000 ).toLocaleString()} ===\n`);
    
    console.log(`===【共 ${app_soy_wyyx_token.length} 个账号】===\n`);
    await implement();
    
    
  };
})().catch((e) => $.logErr(e)).finally(() => $.done());

//要执行的代码
async function implement() {
    for(i = 0; i < app_soy_wyyx_token.length; i++){
        $.index = i + 1;
        console.log(`\n开始【第 ${$.index} 个账号任务】`);
        token=app_soy_wyyx_token[i];
        INFO=app_soy_wyyx_INFO[i];
        SESS=app_soy_wyyx_SESS[i];
        soy_wyyx_UA=app_soy_wyyx_UA[i];
        if(!soy_wyyx_UA){
           soy_wyyx_UA="Mozilla/5.0 (Linux; Android 8.1.0; ALP-AL00 Build/HUAWEIALP-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 baiduboxapp/10.13.0.11 (Baidu; P1 8.1.0)"
        };
        
        soy_wyyx_headers={"Host": "act.you.163.com","Connection": "keep-alive","Accept": "application/json, text/javascript, */*; q=0.01","User-Agent": soy_wyyx_UA,"X-Requested-With": "com.netease.yanxuan","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Referer": "https://act.you.163.com/act/pub/0lgg78TZlisC.html","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":`P_INFO=${INFO};NTES_YD_SESS=${SESS}`};
        //获取心愿ID
        await TreeID();
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //任务列表
        await GetTaskList(0);
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //一日三餐
        await ThreeMealsWater();
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //领取水瓶
        await TomorrowWater()
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //营养签到
        await Nutritional();
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //进心愿城
        await getWishCityReward();
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //奖励列表
        await RewardList(0);
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //施肥
        await fertilizer()
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //浇水
        await waterFertilization();
        //树状态
        await TreeInfo();
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        
        //心愿城用户信息
        await UserBuildingInfo(false);
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //心愿城任务列表
        await fairylandTaskList();
        await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        //可领奖励列表
        await RewardList(1);
        /*await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));//随机延时;
        await UserBuildingInfo(true)*/

    }
    //await message(); //通知;
}

//进心愿城
function getWishCityReward(recordId) {
	return new Promise((resolve) => {
		let Request_data = Request_Post(`https://act.you.163.com/act/napi/wish-tree/getWishCityReward?csrf_token=${token}`,'{}');
		$.post(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("我的心愿物品,API查询请求失败，请检查自身设备网络情况");
					console.log(JSON.stringify(err));
					$.message += err
				} else {
					//console.log(data)
					let result = JSON.parse(data)
					if (result.code == 200) {
					    if(result.data==0){
					        console.log(`\n【${$.name}---进心愿城奖励】:已领取`);
					    }else{
					        console.log(`\n【${$.name}---进心愿城奖励】:领取成功`);
					    };
						
					} else {
						console.log(`\n【${$.name}---进心愿城奖励】:请求失败`);
					};
				};
			} catch (e) {} finally {
				resolve();
			};
		});
	});
};

//心愿物品
function getMyWish(recordId) {
	return new Promise((resolve) => {
		let Request_data = Request_Get(`https://act.you.163.com/act/napi/wish-tree/getMyWish?csrf_token=${token}&recordId=${recordId}&__timestamp=${Math.round(new Date().getTime())}`);
		$.get(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("我的心愿物品,API查询请求失败，请检查自身设备网络情况");
					console.log(JSON.stringify(err));
					$.message += err
				} else {
					//console.log(data)
					let result = JSON.parse(data)
					if (result.code == 200) {
						console.log(`---我的心愿物品：${result.data.name} ${result.data.skuName}`)
						$.message += `\n---我的心愿物品：${result.data.name} ${result.data.skuName}`
					} else {
						console.log(`\n---我的心愿物品：读取失败`)
					};
				};
			} catch (e) {} finally {
				resolve();
			};
		});
	});
};

//获取心愿id
function TreeID() {
	return new Promise((resolve) => {
	    let Request_data=Request_Get(`https://act.you.163.com/act/napi/wish-tree/getUserTreeInfo?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`);
		$.get(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("获取心愿,API查询请求失败，请检查自身设备网络情况");
					console.log(JSON.stringify(err));
					$.message += err;
				} else {
					//console.log(data);
					let result = JSON.parse(data);
					if (result.code == 200) {
						let recordId = result.data.userTreeInfoModel.recordId;
						console.log(`\n【${$.name}---获取心愿】: \n---我的心愿ID：${recordId}`);
						$.message += `\n【${$.name}---获取心愿】: \n---我的心愿ID：${recordId}`
						await getMyWish(recordId);//我的心愿;
					} else {
						console.log(`\n【${$.name}---获取心愿】: ---请求失败`);
						$.message += `\n【${$.name}---获取心愿】: ---请求失败`;
					};
				};

			} catch (e) {} finally {
				resolve()
			};
		});
	});
};

//任务列表
function GetTaskList(identification) {
	//0为心愿树,1为心愿城
	if (identification == 0) {
		Request_data = Request_Get(`https://act.you.163.com/act/napi/wish-tree/getTaskList?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`);
	} else {
		Request_data = Request_Get(`https://act.you.163.com/act/napi/fairyland/getTaskList?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`);
	};
	return new Promise((resolve) => {
		$.get(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("任务列表,API查询请求失败，请检查自身设备网络情况");
					$.message += "任务列表,API查询请求失败，请检查自身设备网络情况";
				} else {
					//console.log(data)
					let result = JSON.parse(data);
					if (result.code == 200) {
						for (let Task of result.data) {
							let Taskfinished = Task.finishedChance;
							let TaskID = Task.id;
							let TaskType = Task.taskType;
							let TaskName = Task.taskName;
							//签到
							if (TaskID == 0) {
								if (Taskfinished == 1) {
									console.log(`\n【${$.name}---${TaskName}】: 今日已签到过`);
									//$.message += `\n【${$.name}---${TaskName}】: 今日已签到过`;
								} else {
									await GetfinishTask(`https://act.you.163.com/act/napi/wish-tree/finishTask?csrf_token=${soy_wyyx_token}`,`{"taskType":10,"taskId":"0"}`);
									if (!data_packet) {
										console.log(`\n【${$.name}---${TaskName}】: 返回数据为空,签到状态失败`);
										$.message += `\n【${$.name}---${TaskName}】: 返回数据为空,签到状态失败`;
									} else {
										//console.log(data_packet);
										let result = JSON.parse(data_packet);
										if (result.code == 200) {
											console.log(`\n【${$.name}---${TaskName}】: 签到成功,获得 ${result.data.waterValue} 水滴`);
										} else {
											console.log(`\n【${$.name}---${TaskName}】: ${result.msg}`);
										};
									};
								};
							};
							//浏览商品10秒
							if (TaskID == 1) {
								if (TaskType == 20) {
								    
									if (Taskfinished >= 3) {
										console.log(`\n【${$.name}---${TaskName}】: 今日已完成`);
									} else {
										for (let num = 0; num < 3; num++) {
										    await fairylandID(`https://you.163.com/act/napi/wish-tree/finishTask?_=${Math.round(new Date().getTime())}`,`{"taskType":"20","taskId":"1"}`,TaskName);
										    await $.wait(Math.floor(Math.random() * (12000 - 10000 + 1000) + 10000));
										
										};
									};
								};
							};
							//点击商品
							if (TaskID == 4) {
								if (Taskfinished >= 2) {
									console.log(`\n【${$.name}---${TaskName}】: 今日已完成`);
								} else {
									for (let frequency = 0; frequency < 5; frequency++) {
										await fairylandID(`https://you.163.com/act/napi/wish-tree/finishTask?_=${Math.round(new Date().getTime())}`,`{"taskType":70,"taskId":"4"}`,TaskName);
										await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));
									};
								};
							};
							//发现严选好物
							if (TaskID == 6) {
								if (Taskfinished == 1) {
									console.log(`\n【${$.name}---发现严选好物}】: 今日已完成`);
								} else {
									await GetfinishTask(`https://act.you.163.com/act/napi/wish-tree/finishTask?csrf_token=${soy_wyyx_token}`,`{"taskType":90,"taskId":"6"}`);
									if (!data_packet) {
										console.log(`\n【${$.name}---${TaskName}】: 返回数据为空,签到状态失败`);
										$.message += `\n【${$.name}---${TaskName}】: 返回数据为空,签到状态失败`;
									} else {
										//console.log(data_packet);
										let result = JSON.parse(data_packet);
										if (result.code == 200) {
											console.log(`\n【${$.name}---发现严选好物】: 浏览成功`);
										} else {
											console.log(`\n【${$.name}---发现严选好物】: ${result.msg}`);
										};
									};
								};
							};
						};
					} else {
						console.log(`\n【${$.name}---任务列表】: 请求失败`);
						$.message += `\n【${$.name}---任务列表】: 请求失败`;
					};
				};
			} catch (e) {} finally {
				resolve();
			};
		});
	});
};

//做任务
function GetfinishTask(url,taskbody) {
	//0为心愿树,1为心愿城
	Request_data = Request_Post(url,taskbody)
	return new Promise((resolve) => {
		$.post(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("⛔️API查询请求失败，请检查自身设备网络情况");
					$.message += "⛔️API查询请求失败，请检查自身设备网络情况";
				} else {
					data_packet = data;
				};
			} catch (e) {} finally {
				resolve();
			};
		});
	});

};

//领奖励
function GetreceiveReward(identification,RewardId,RewardType,RewardName) {
    if(identification==0){
        Request_data = Request_Post(`https://act.you.163.com/act/napi/wish-tree/receiveReward?csrf_token=${token}`,`{"rewardIds":["${RewardId}"],"taskType":${RewardType}}`);
    }else{
        Request_data = Request_Post(`https://act.you.163.com/act/napi/fairyland/receiveReward?csrf_token=${token}`,`{"rewardIds":["${RewardId}"],"taskType":${RewardType}}`);
    }
  return new Promise((resolve) => {
    $.post(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("领取奖励,API查询请求失败，请检查自身设备网络情况");
              $.message += "领取奖励,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  if(identification==0){
                      console.log(`\n【${$.name}---领取${RewardName}奖励】: 获得 ${result.data.rewardWaterValue} 水滴`);
                  }else{
                      console.log(`\n【${$.name}---领取${RewardName}奖励】: 获得 ${result.data.wishValue} 心愿值`);
                  }
                  
                  
              }else{
                 console.log(`\n【${$.name}---领取${RewardName}】: ${result.msg}`); 
              };
              
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//可领奖励列表
function RewardList(identification) {
    if(identification==0){
         Request_data = Request_Get(`https://act.you.163.com/act/napi/wish-tree/getFinishedAwardList?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`); 
      }else{
         Request_data = Request_Get(`https://act.you.163.com/act/napi/fairyland/getFinishedAwardList?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`); 
      };
  return new Promise((resolve) => {
    $.get(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("奖励列表,API查询请求失败，请检查自身设备网络情况");
              $.message += "奖励列表,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  if(result.data.length==0){
                      console.log(`\n【${$.name}---奖励列表】: 没有奖励可以领取`);
                  }else{
                      for(Reward of result.data){
                          let Reward_Id=Reward.id
                          let Reward_Type=Reward.taskType
                          
                          if(Reward_Type==20){
                              Reward_Name='浏览活动页面10秒'
                          }else if(Reward_Type==70){
                              Reward_Name='点击5个商品'
                          }else if(Reward_Type==90){
                              Reward_Name='发现严选好物'
                          }else{
                            Reward_Name='未知奖励'  
                          };
                          
                          await GetreceiveReward(identification,Reward_Id,Reward_Type,Reward_Name);
                          
                      };
                  };
                  
              }else{
                 console.log(`\n【${$.name}---奖励列表】: ${result.msg}`); 
              };
              
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//浇水
function waterFertilization() {
    Request_data = Request_Post(`https://act.you.163.com/act/napi/wish-tree/waterFertilization?csrf_token=${token}`,`{"type":1,"waste":false}`); 
  return new Promise((resolve) => {
    $.post(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("浇水,API查询请求失败，请检查自身设备网络情况");
              $.message += "浇水,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  console.log(`\n【${$.name}---浇水】: 成功,剩余水滴 ${result.data.kettleWater}`);
                  await waterFertilization();
                  
              }else{
                 console.log(`\n【${$.name}---浇水】: ${result.msg}`); 
              };
              
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//树状态
function TreeInfo() {
    Request_data = Request_Get(`https://act.you.163.com/act/napi/wish-tree/getUserTreeInfo`);
  return new Promise((resolve) => {
    $.get(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("树状态,API查询请求失败，请检查自身设备网络情况");
              $.message += "树状态,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  console.log(`\n\n【${$.name}---心愿树信息】: \n---心愿树等级：${result.data.userTreeInfoModel.treeLevel}\n---剩余水滴：${result.data.userTreeInfoModel.kettleWaterValue}\n---营养值：${result.data.userTreeInfoModel.nutritionValue}`);
                  $.message+=`\n\n【${$.name}---心愿树信息】: \n---心愿树等级：${result.data.userTreeInfoModel.treeLevel}\n---剩余水滴：${result.data.userTreeInfoModel.kettleWaterValue}\n---营养值：${result.data.userTreeInfoModel.nutritionValue}`;
                  
              }else{
                 console.log(`\n【${$.name}---心愿树信息】: ${result.msg}`); 
              };
              
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//营养值签到
function Nutritional() {
   Request_data = Request_Post(`https://act.you.163.com/act/napi/wish-tree/finishTask?csrf_token=${token}`,`{"taskType":80,"taskId":"5"}`);  
  return new Promise((resolve) => {
    $.post(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("营养值签到,API查询请求失败，请检查自身设备网络情况");
              $.message += "营养值签到,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data_packet);
              let result = JSON.parse(data);
              if(result.code==200){
                  console.log(`\n【${$.name}---营养值签到】: 签到成功`);
                    
              }else{
                  console.log(`\n【${$.name}---营养值签到】: ${result.msg}`);
                  
              };
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//使用肥料
function fertilizer() {
   Request_data = Request_Post(`https://act.you.163.com/act/napi/wish-tree/waterFertilization?csrf_token=${token}`,`{"type":2,"waste":false}`);  
  return new Promise((resolve) => {
    $.post(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("施肥,API查询请求失败，请检查自身设备网络情况");
              $.message += "施肥,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data);
              let result = JSON.parse(data);
              if(result.code==200){
                  console.log(`\n【${$.name}---施肥】: 成功~`);
                  await fertilizer();
                    
              }else{
                  console.log(`\n【${$.name}---施肥】: ${result.msg}`);
                  
              };
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//一日三餐
function ThreeMealsWater() {
    Request_data = Request_Get(`https://act.you.163.com/act/napi/wish-tree/waterFertilization?csrf_token=${token}`); 
  return new Promise((resolve) => {
    $.get(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("一日三餐,API查询请求失败，请检查自身设备网络情况");
              $.message += "一日三餐,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  
                  console.log(`\n【${$.name}---一日三餐】: 获得 ${result.rewardThreeMealsWater} 水滴`);
              }else{
                console.log(`\n【${$.name}---一日三餐】: ${result.msg}`);  
              };
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//领取水瓶
function TomorrowWater() {
    Request_data = Request_Get(`https://act.you.163.com/act/napi/wish-tree/getTomorrowWater?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`); 
  return new Promise((resolve) => {
    $.get(Request_data, async (err, resp, data) => {
      try {
          if(err){
              console.log("领取水瓶,API查询请求失败，请检查自身设备网络情况");
              $.message += "领取水瓶,API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  
                  console.log(`\n【${$.name}---领取水瓶】: 获得 ${result.kettleWater} 水滴`);
              }else{
                console.log(`\n【${$.name}---领取水瓶】: ${result.msg}`);  
              };
              
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};

//心愿城用户信息
function UserBuildingInfo(state) {
	Request_data = Request_Get(`https://act.you.163.com/act/napi/fairyland/getUserBuildingInfo?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`);
	return new Promise((resolve) => {
		$.get(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("⛔️API查询请求失败，请检查自身设备网络情况");
					$.message += "⛔️API查询请求失败，请检查自身设备网络情况";
				} else {
					//console.log(data)
					let result = JSON.parse(data);
					if (result.code == 200) {
						nickName = result.data.userAccount.nickName
						goldCoinNum = result.data.userAccount.goldCoinNum
						wishValue = result.data.userAccount.wishValue
						BuildingInfo = result.data.userBuildingInfo.length

						if (state) {
							console.log(`\n【${$.name}---心愿城用户信息】: \n---用户昵称：${nickName}\n---用户金币：${goldCoinNum}\n---用户心愿值：${wishValue}`);
							$.message += `\n【${$.name}---心愿城用户信息】: \n---用户昵称：${nickName}\n---用户金币：${goldCoinNum}\n---用户心愿值：${wishValue}`
						} else {
							for (let num = 0; num < BuildingInfo; num++) {
								let buildingName = result.data.userBuildingInfo[num].buildingName;
								//console.log(`{"buildingId":${num+1}}`)
								await GetfinishTask(`https://act.you.163.com/act/napi/fairyland/receiveGoldCoin?csrf_token=${soy_wyyx_token}`,`{"buildingId":${num+1}}`);
								if (!data_packet) {
									console.log(`\n【${$.name}---收取${buildingName}金币】: 返回数据为空,失败`);
									$.message += `\n【${$.name}---收取${buildingName}金币】: 返回数据为空,失败`;
								} else {
									//console.log(data_packet);
									let result = JSON.parse(data_packet);
									if (result.code == 200) {
										console.log(`\n【${$.name}---收取${buildingName}金币】: 获得 ${result.data.addCoin} 水滴`);
									} else {
										console.log(`\n【${$.name}---收取${buildingName}金币】: ${result.msg}`);
									};
								};
							};
						};
					}else{
					    console.log(`\n【${$.name}---心愿城用户信息】: ${result.msg}`);
					    
					}
				};
			} catch (e) {} finally {
				resolve();
			};
		});
	});

};

//心愿城任务列表
function fairylandTaskList() {
	Request_data = Request_Get(`https://act.you.163.com/act/napi/fairyland/getTaskList?csrf_token=${token}&__timestamp=${Math.round(new Date().getTime())}`);
	return new Promise((resolve) => {
		$.get(Request_data, async (err, resp, data) => {
			try {
				if (err) {
					console.log("心愿城任务列表,API查询请求失败，请检查自身设备网络情况");
					$.message += "心愿城任务列表,️API查询请求失败，请检查自身设备网络情况";
				} else {
					//console.log(data)
					let result = JSON.parse(data);
					if (result.code == 200) {

						for (let Task of result.data) {
							let Taskfinished = Task.finishedChance;
							let TaskID = Task.id;
							let TaskType = Task.taskType;
							let TaskName = Task.taskName;

							//签到
							if (TaskID == 0) {
								if (TaskType == 10) {
									if (Taskfinished == 1) {
										console.log(`\n【${$.name}---${TaskName}】: 今日已打卡过`);
										//$.message += `\n【${$.name}---${TaskName}】: 今日已签到过`;
									} else {
										await GetfinishTask(`https://act.you.163.com/act/napi/fairyland/finishTask?csrf_token=${soy_wyyx_token}`, `{"taskType":10,"taskId":"0"}`);
										if (!data_packet) {
											console.log(`\n【${$.name}---${TaskName}】: 返回数据为空,签到状态失败`);
											$.message += `\n【${$.name}---${TaskName}】: 返回数据为空,签到状态失败`;
										} else {
											//console.log(data_packet);
											let result = JSON.parse(data_packet);
											if (result.code == 200) {
												console.log(`\n【${$.name}---${TaskName}】: 打卡成功,获得 ${result.data.waterValue} 心愿值`);
											} else {
												console.log(`\n【${$.name}---${TaskName}】: ${result.msg}`);
											};
										};
									};
								};

							};

							//浏览商品10秒
							if (TaskID == 1) {

								if (Taskfinished >= 5) {
									console.log(`\n【${$.name}---${TaskName}】: 今日已完成`);
								} else {
									for (let num = 0; num < 5; num++) {
										await fairylandID(`https://you.163.com/act/napi/fairyland/finishTask?_=${Math.round(new Date().getTime())}`, `{"taskType":"2000","taskId":"1"}`, TaskName);
										await $.wait(Math.floor(Math.random() * (12000 - 10000 + 1000) + 10000));
									};
								};
							};

							//点击商品
							if (TaskID == 2) {
								if (Taskfinished >= 5) {
									console.log(`\n【${$.name}---${TaskName}】: 今日已完成`);
								} else {
									for (let num = 0; num < 5; num++) {
										await fairylandID(`https://you.163.com/act/napi/fairyland/finishTask?_=${Math.round(new Date().getTime())}`, `{"taskType":"3000","taskId":"2"}`, TaskName);
										await $.wait(Math.floor(Math.random() * (3000 - 1000 + 1000) + 1000));
									};

								};
							};


						};

					} else {
						console.log(`\n【${$.name}---任务列表】: 请求失败`);
						$.message += `\n【${$.name}---任务列表】: 请求失败`;

					};

				};

			} catch (e) {} finally {
				resolve();
			};
		});
	});
};

//获取任务id
function fairylandID(url_data,taskbody,TaskName) {
  return new Promise((resolve) => {
    let url = {
      url: url_data,
      headers: {"Host": "you.163.com","Connection": "keep-alive","Accept": "application/json, text/javascript, */*; q=0.01","User-Agent": soy_wyyx_UA,"Content-Type": "application/json","Origin": "https://you.163.com","X-Requested-With": "com.netease.yanxuan","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie": `NTES_OSESS=${SESS};P_OINFO=${INFO}`},
      body: taskbody,
        
    };
    $.post(url, async (err, resp, data) => {
      try {
          if(err){
              console.log("⛔️API查询请求失败，请检查自身设备网络情况");
              $.message += "⛔️API查询请求失败，请检查自身设备网络情况";
          }else{
              //console.log(data)
              let result = JSON.parse(data);
              if(result.code==200){
                  console.log(`\n【${$.name}---获取${TaskName}任务ID】: 成功`);
                  //await fairylandTask(`{"taskType":2000,"taskId":"1"}`);
                  //await GetfairylandRewardReward(`${result.data.rewardId}`,2000,'浏览商品')
                  
              }else{
                  console.log(`\n【${$.name}---获取${TaskName}任务ID】: ${result.msg}`);
              };
              
            };
      } catch (e) {
      } finally {
        resolve();
      };
    });
  });

};


//通知
async function message() {
if(notify){
    if($.message){await notify.sendNotify($.name, $.message)};
};
};


function Request_Get(url){
  return {
    url: `${url}`,
    headers: {"Host": "act.you.163.com","Connection": "keep-alive","Accept": "application/json, text/javascript, */*; q=0.01","User-Agent": soy_wyyx_UA,"Content-Type": "application/json","Origin": "https://act.you.163.com","X-Requested-With": "com.netease.yanxuan","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie": `NTES_OSESS=${SESS};P_OINFO=${INFO}`},
  };
};

function Request_Post(url,body){
  return {
    url: `${url}`,
    headers: {"Host": "act.you.163.com","Connection": "keep-alive","Accept": "application/json, text/javascript, */*; q=0.01","User-Agent": soy_wyyx_UA,"Content-Type": "application/json","Origin": "https://act.you.163.com","X-Requested-With": "com.netease.yanxuan","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie": `NTES_OSESS=${SESS};P_OINFO=${INFO}`},
    body: `${body}`,
  };
};

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}