/*

软件名称:盲盒农场

项目注册地址:http://reg.starlct.com?spread=u0lnpq

说明：0撸周期很长，靠签到和转盘随机有几率获得钻石,需要100钻石才能买种子,50（500钻石）起提

必要变量:

soy_mhnc_username
#手机号/登录账号

soy_mhnc_password
#登录密码


多个号用 @ 或 # 或 换行 隔开

*/


const $ = new Env('盲盒农场');
const notify = $.isNode() ? require('./sendNotify') : '';

let app_soy_mhnc_username=[],app_soy_mhnc_password=[],app_soy_mhnc_UA=[],subTitle=''


!(async () => {
        if ($.isNode()) {
    
    if(!process.env.soy_mhnc_username){
        console.log(`\n【${$.username}】：未填写相应变量 soy_mhnc_username`);
        return;
    }
    if(!process.env.soy_mhnc_password){
        console.log(`\n【${$.username}】：未填写相应变量 soy_mhnc_password`);
        return;
    }
	


    if (process.env.soy_mhnc_password && process.env.soy_mhnc_password.indexOf('@') > -1) {
        soy_mhnc_password = process.env.soy_mhnc_password.split('@');
    } else if (process.env.soy_mhnc_password && process.env.soy_mhnc_password.indexOf('\n') > -1) {
        soy_mhnc_password = process.env.soy_mhnc_password.split('\n');
    } else if(process.env.soy_mhnc_password && process.env.soy_mhnc_password.indexOf('#') > -1){
        soy_mhnc_password = process.env.soy_mhnc_password.split('#');
    }else{
        soy_mhnc_password = process.env.soy_mhnc_password.split();
    };
    

    
    if (process.env.soy_mhnc_username && process.env.soy_mhnc_username.indexOf('@') > -1) {
        soy_mhnc_username = process.env.soy_mhnc_username.split('@');
    } else if (process.env.soy_mhnc_username && process.env.soy_mhnc_username.indexOf('\n') > -1) {
        soy_mhnc_username = process.env.soy_mhnc_username.split('\n');
    } else if(process.env.soy_mhnc_username && process.env.soy_mhnc_username.indexOf('#') > -1){
        soy_mhnc_username = process.env.soy_mhnc_username.split('#');
    }else{
        soy_mhnc_username = process.env.soy_mhnc_username.split();
    };
    

	if(!process.env.soy_mhnc_UA){
		console.log(`\n【${$.username}】：未填写相应变量 soy_mhnc_UA ,将默认分配`);
	}else{
	if (process.env.soy_mhnc_UA && process.env.soy_mhnc_UA.indexOf('@') > -1) {
        soy_mhnc_UA = process.env.soy_mhnc_UA.split('@');
    } else if (process.env.soy_mhnc_UA && process.env.soy_mhnc_UA.indexOf('\n') > -1) {
        soy_mhnc_UA = process.env.soy_mhnc_UA.split('\n');
    } else if(process.env.soy_mhnc_UA && process.env.soy_mhnc_UA.indexOf('#') > -1){
        soy_mhnc_UA = process.env.soy_mhnc_UA.split('#');
    }else{
        soy_mhnc_UA = process.env.soy_mhnc_UA.split();
    };
    Object.keys(soy_mhnc_UA).forEach((item) => {
        if (soy_mhnc_UA[item]) {
            app_soy_mhnc_UA.push(soy_mhnc_UA[item]);
        };
    }); 
    
	}
    
    
    Object.keys(soy_mhnc_password).forEach((item) => {
        if (soy_mhnc_password[item]) {
            app_soy_mhnc_password.push(soy_mhnc_password[item]);
        };
    });
	
Object.keys(soy_mhnc_username).forEach((item) => {
        if (soy_mhnc_username[item]) {
            app_soy_mhnc_username.push(soy_mhnc_username[item]);
        };
    });	

	
    
}else{
    
    
    if(!$.getdata('soy_mhnc_username')){
        console.log(`\n【${$.username}】：未填写相应变量 soy_mhnc_username`);
        return;
    }
    if(!$.getdata('soy_mhnc_password')){
        console.log(`\n【${$.username}】：未填写相应变量 soy_mhnc_password`);
        return;
    }
    
    if ($.getdata('soy_mhnc_password') && $.getdata('soy_mhnc_password').indexOf('@') > -1) {
        app_soy_mhnc_password = $.getdata('soy_mhnc_password').split('@');
    } else if ($.getdata('soy_mhnc_password') && $.getdata('soy_mhnc_password').indexOf('\n') > -1) {
        app_soy_mhnc_password = $.getdata('soy_mhnc_password').split('\n');
    } else if($.getdata('soy_mhnc_password') && $.getdata('soy_mhnc_password').indexOf('#') > -1){
        app_soy_mhnc_password = $.getdata('soy_mhnc_password').split('#');
    }else{
        app_soy_mhnc_password = $.getdata('soy_mhnc_password').split();
    };
    
    
    if ($.getdata('soy_mhnc_username') && $.getdata('soy_mhnc_username').indexOf('@') > -1) {
        app_soy_mhnc_username = $.getdata('soy_mhnc_username').split('@');
    } else if ($.getdata('soy_mhnc_username') && $.getdata('soy_mhnc_username').indexOf('\n') > -1) {
        app_soy_mhnc_username = $.getdata('soy_mhnc_username').split('\n');
    } else if($.getdata('soy_mhnc_username') && $.getdata('soy_mhnc_username').indexOf('#') > -1){
        app_soy_mhnc_username = $.getdata('soy_mhnc_username').split('#');
    }else{
        app_soy_mhnc_username = $.getdata('soy_mhnc_username').split();
    };
    
    if(!$.getdata('soy_mhnc_UA')){
        console.log(`\n【${$.username}】：未填写相应变量 soy_mhnc_UA ,将默认分配`);
    }else{
       if ($.getdata('soy_mhnc_UA') && $.getdata('soy_mhnc_UA').indexOf('@') > -1) {
        app_soy_mhnc_UA = $.getdata('soy_mhnc_UA').split('@');
    } else if ($.getdata('soy_mhnc_UA') && $.getdata('soy_mhnc_UA').indexOf('\n') > -1) {
        app_soy_mhnc_UA = $.getdata('soy_mhnc_UA').split('\n');
    } else if($.getdata('soy_mhnc_UA') && $.getdata('soy_mhnc_UA').indexOf('#') > -1){
        app_soy_mhnc_UA = $.getdata('soy_mhnc_UA').split('#');
    }else{
        app_soy_mhnc_UA = $.getdata('soy_mhnc_UA').split();
    }; 
    }
    
    
}


    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_mhnc_username.length} 个账号】===\n`);
      
for (i = 0; i < app_soy_mhnc_username.length; i++) {
    soy_mhnc_username=app_soy_mhnc_username[i]
    soy_mhnc_password=app_soy_mhnc_password[i]
    soy_mhnc_UA=app_soy_mhnc_UA[i]
    soy_login_body=`c=auth&a=login&username=${soy_mhnc_username}&password=${soy_mhnc_password}`
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    if(app_soy_mhnc_UA.length==0 || !soy_mhnc_UA){
	    console.log(`\n【${$.username}】：开始默认分配 soy_mhnc_UA`);
		soy_mhnc_UA='Mozilla/5.0 (Linux; Android 8.1.0; CLT-AL00 Build/HUAWEICLT-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 baiduboxapp/10.13.0.10 (Baidu; P1 8.1.0)'
	}
    await soy_mhnc_login()
    
    
};

if(notify){
   await notify.sendNotify($.username, subTitle) 
}




})()
.catch((e) => $.logErr(e))
.finally(() => $.done());




function soy_mhnc_login(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : {"Host": "game.starlct.com","Connection": "keep-alive","Content-Length": soy_login_body.length,"Pragma": "no-cache","Cache-Control": "no-cache","User-Agent": soy_mhnc_UA,"Content-Type": "application/x-www-form-urlencoded","Accept": "*/*","Origin": "http://game.starlct.com","X-Requested-With": "com.soyea.rycdkh.mhnc","Referer": "http://game.starlct.com/farm/?token=null","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"},
            body : soy_login_body,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   soy_mhnc_headers={"Host": "game.starlct.com","Connection": "keep-alive","Content-Length": soy_login_body.length,"Pragma": "no-cache","Cache-Control": "no-cache","User-Agent": soy_mhnc_UA,"Content-Type": "application/x-www-form-urlencoded","Accept": "*/*","Origin": "http://game.starlct.com","X-Requested-With": "com.soyea.rycdkh.mhnc","Referer": "http://game.starlct.com/farm/?token=null","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","token":result.data.userInfo.token}
                   console.log(`\n【${$.username}---账号 ${$.index} 用户信息】: ${result.msg}`)
                   //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                   await soy_mhnc_sign()
                   await soy_mhnc_wheel()
                   await soy_mhnc_home()
                   await soy_mhnc_land()
                   
            }else{
                console.log(`\n【${$.username}---账号 ${$.index} 登录】: ${result.msg}`)
            }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

function soy_mhnc_home(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : 'c=home&a=index',
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   diamond=result.data.user.diamond
                   console.log(`\n【${$.username}---账号 ${$.index} 用户信息】: \n---用户昵称：${result.data.user.nickName}\n---用户ID：${result.data.user.userId}\n---房屋等级：${result.data.user.houseLv}\n---当前钻石：${result.data.user.diamond}`)
                   for(let lv=0;lv<result.data.user.houseLv;lv++){
                       await soy_mhnc_getFruit(lv)
                       
                   }
                   await soy_mhnc_warehouse()
                   
                   //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                   
                   }else{
                       console.log(`\n【${$.username}---账号 ${$.index} 用户信息】: ${result.msg}`)
                       
                   }
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//土地信息
function soy_mhnc_land(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : 'c=land&a=index',
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   land_infor=`\n【${$.username}---账号 ${$.index} 土地信息】: \n---`
                   //console.log(land_infor)
                   for(let land_num=0;land_num<result.data.farmItem.length;land_num++){
                       if(!result.data.farmItem[land_num].n){
                           land_infor+=`土地${land_num}: 没有种植东西`
                           await soy_mhnc_getSeedData(land_num)
                       }else{
                           land_infor+=`\n---土地${land_num}: 当前种植 ${result.data.farmItem[land_num].n}`
                           //需要除虫
                           g=result.data.farmItem[1].g
                           if(g==1){
                               await soy_mhnc_icide(land_num)
                              //land_infor+=`\n---土地${land_num}: 需要除虫` 
                              
                           }
                           
                       }
                   }
                   console.log(land_infor)
                   
                   
                   
            }else{
                console.log(`\n【${$.username}---账号 ${$.index} 登录】: ${result.msg}`)
            }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//除虫
function soy_mhnc_icide(landId){
    console.log(landId)
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=land&a=landOp&landId=${landId}&mark=icide`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   
                   console.log(`\n【${$.username}---账号 ${$.index} 除虫】: 土地${result.data.landId} ${result.data.farmItem.n} ${result.msg}`)
                   //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                   //await soy_mhnc_home()
                   
            }else{
                console.log(`\n【${$.username}---账号 ${$.index} 除虫】: ${result.msg}`)
            }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//除草
function soy_mhnc_hcide(landId){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=land&a=landOp&landId=${landId}&mark=hcide`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   
                   console.log(`\n【${$.username}---账号 ${$.index} 除草】: 土地${result.data.landId} ${result.data.farmItem.n} ${result.msg}`)
                   //await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000))
                   //await soy_mhnc_home()
                   
            }else{
                console.log(`\n【${$.username}---账号 ${$.index} 除草】: ${result.msg}`)
            }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//签到
function soy_mhnc_sign(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=sign&a=sign`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               
                console.log(`\n【${$.username}---账号 ${$.index} 签到】: ${result.msg}`)
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//转盘状态
function soy_mhnc_wheel(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=wheel&a=goods`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   console.log(`\n【${$.username}---账号 ${$.index} 转盘状态】: 剩余次数 ${result.data.hasNum} 次`)
                   if(result.data.hasNum>=1){
                       //for(let zpcs=0;zpcs<result.data.hasNum;zpcs++){
                       
                           await soy_mhnc_draw()
                           //await $.wait(Math.floor(Math.random() * (32000 - 28000 + 1000) + 28000))
                       //}
                   }
               }else{
                console.log(`\n【${$.username}---账号 ${$.index} 转盘状态】: ${result.msg}`)
               }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//转盘
function soy_mhnc_draw(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=wheel&a=draw`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   console.log(`\n【${$.username}---账号 ${$.index} 转盘】: ${result.msg} ${result.data.title}`)
                   await $.wait(Math.floor(Math.random() * (32000 - 28000 + 1000) + 28000))
                   await soy_mhnc_draw()
                   
               }else{
                console.log(`\n【${$.username}---账号 ${$.index} 转盘】: ${result.msg}`)
               }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//仓库种子状态
function soy_mhnc_getSeedData(landId){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=user&a=getSeedData`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   if(result.data.length==0){
                       console.log(`\n【${$.username}---账号 ${$.index} 种子】: 仓库没有可用种子`)
                       if(diamond>=100){
                           await soy_mhnc_pay()
                       }else{
                           console.log(`\n【${$.username}---账号 ${$.index} 购买种子】: 钻石不足,无法购买`)
                       }
                       
                   }else{
                       await soy_mhnc_addSeed(landId)
                   }
                   
               }else{
                console.log(`\n【${$.username}---账号 ${$.index} 转盘】: ${result.msg}`)
               }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//种菜
function soy_mhnc_addSeed(landId){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=land&a=addSeed&landId=${landId}&goodsId=100`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
                console.log(`\n【${$.username}---账号 ${$.index} 种植】: ${result.msg}`)
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}


//收割
function soy_mhnc_getFruit(landId){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=land&a=getFruit&landId=${landId}`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   console.log(`\n【${$.username}---账号 ${$.index} 收割】: 土地${result.data.landId} ${result.msg} 获得 ${result.data.data.output} ${result.data.farmItem.n}`)
                  
               }else{
                console.log(`\n【${$.username}---账号 ${$.index} 收割】: ${result.msg}`)
               }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//仓库信息
function soy_mhnc_warehouse(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=user&a=warehouse`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
               if(result.code==0){
                   console.log(`\n【${$.username}---账号 ${$.index} 仓库信息】: \n---苹果数量：${result.data[0].num}\n---萝卜数量：${result.data[1].num}\n---辣椒数量：${result.data[2].num}`)
                   let lbid=result.data[1].cId
                   let pgid=result.data[0].cId
                   let ljid=result.data[2].cId
                   if(result.data[0].num>=100){
                       await soy_mhnc_sale(pgid,result.data[0].num)
                   }
                   if(result.data[1].num>=100){
                       await soy_mhnc_sale(lbid,result.data[1].num)
                   }
                   if(result.data[2].num>=100){
                       await soy_mhnc_sale(ljid,result.data[2].num)
                   }
                       
                   
                  
               }else{
                console.log(`\n【${$.username}---账号 ${$.index} 仓库信息】: ${result.msg}`)
               }
            
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//出售
function soy_mhnc_sale(sid,num){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=team&a=sale&sid=${sid}&num=${num}}`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
              
                console.log(`\n【${$.username}---账号 ${$.index} 出售商品】: ${result.msg}`)
                
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}

//购买
function soy_mhnc_pay(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://game.starlct.com/game.api`,
            headers : soy_mhnc_headers,
            body : `c=order&a=pay&tId=100&nums=1`,
        }, async(error, response, data) => {
           try {
            //console.log(data)
            if(error){
               console.log(`\n【${$.username}---账号 ${$.index} 错误】: 网络请求错误`) 
            }else{
               let result = JSON.parse(data)
              
                console.log(`\n【${$.username}---账号 ${$.index} 购买种子】: ${result.msg}`)
                
            }
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response)
           } finally {
               resolve();
           }
        })
    })

}


function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      this.username = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.username}, \u5f00\u59cb!`)
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
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
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
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
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
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
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
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
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
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
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
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
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
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
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
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.username}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.username}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.username}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}