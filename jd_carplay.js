const $=new Env('头文字j');
const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
const notify=$.isNode()?require('./sendNotify'):'';
let cookiesArr=[],cookie='',message='';
const CryptoJS=require('crypto-js');
let ownCode=null;
if($.isNode()){
    Object.keys(jdCookieNode).forEach(_0x2ace0b=>{
        cookiesArr.push(jdCookieNode[_0x2ace0b]);
    });
    if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
}else{
    let cookiesData=$.getdata('CookiesJD')||'[]';
    cookiesData=JSON.parse(cookiesData);
    cookiesArr=cookiesData.map(_0x5cb13c=>_0x5cb13c.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'),$.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr=cookiesArr.filter(_0xc5b062=>!!_0xc5b062);
}
!(async()=>{
    if(!cookiesArr[0]){
        $.msg($.name,'【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取','https://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});
        return;
    }
    $.actCode=0;
    console.log('活动准备...随机延迟');
    let _0x1e9653=[];
    for(let _0x5be6cd=0;_0x5be6cd<cookiesArr.length;_0x5be6cd+=15){
        _0x1e9653.push(cookiesArr.slice(_0x5be6cd,_0x5be6cd+15));
    }
    for(let _0x573b9a=0;_0x573b9a<_0x1e9653.length;_0x573b9a++){
        try{
            let _0x466011=_0x1e9653[_0x573b9a];
            const _0x4942de=_0x466011.map((_0x34c388,_0x194e4d)=>main(_0x34c388));
            await Promise.all(_0x4942de);
        }catch(_0x363399){}
    }
    if($.actCode===1){
        for(let _0xb19eeb=0;_0xb19eeb<cookiesArr.length;_0xb19eeb++){
            if(cookiesArr[_0xb19eeb]){
                cookie=cookiesArr[_0xb19eeb];
                originCookie=cookiesArr[_0xb19eeb];
                newCookie='';
                $.UserName=decodeURIComponent(cookie.match(/pt_pin=(.+?);/)&&cookie.match(/pt_pin=(.+?);/)[1]);
                $.index=_0xb19eeb+1;
                $.isLogin=true;
                $.nickName='';
                await checkCookie();
                console.log('\n******开始【京东账号'+$.index+'】'+($.nickName||$.UserName)+'*********\n');
                if(!$.isLogin){
                    $.msg($.name,'【提示】cookie已失效','京东账号'+$.index+' '+($.nickName||$.UserName)+'\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});
                    if($.isNode()){}
                    continue;
                }
                $.bean=0;
                $.ADID=getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',1);
                $.UUID=getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
                authorCodeList=[''];
                $.appkey='21699045';
                $.userId='10299171';
                $.actId='1760007';
                $.authorCode=ownCode?ownCode:authorCodeList[random(0,authorCodeList.length)];
                await mpdz();
                await $.wait(2000);
                if($.bean>0){
                    message+='\n【京东账号'+$.index+'】'+($.nickName||$.UserName)+' \n       └ 获得 '+$.bean+' 京豆。';
                }
            }
        }
    }
})().catch(_0x3b4819=>{
    $.log('','❌ '+$.name+', 失败! 原因: '+_0x3b4819+'!','');
}).finally(()=>{
    $.done();
});
async function mpdz(){
    $.token=null;
    $.buyerNick=null;
    $.activityInfo=null;
    $.taskList=null;
    await getToken();
    console.log($.token);
    if($.token){
        await $.wait(2000);
        await task('activity/load',{'inviteNick':$.authorCode,'jdToken':$.token,'shopId':null},0);
        await $.wait(2000);
        if($.buyerNick){
            console.log('1.助力码 -> '+$.buyerNick);
            if($.index===1){
                ownCode=$.buyerNick;
                console.log('后面的将给这个助力码助力 -> '+ownCode);
            }
            await $.wait(2000);
            console.log('2.去助力 ->');
            await task('mission/completeMission',{'missionType':'shareAct','inviterNick':$.authorCode});
            await $.wait(2000);
            console.log('3.获取任务列表 ->');
            await task('mission/completeState',{});
            for(const _0x4ebf1f of $.taskList){
                if(_0x4ebf1f.type==='bingCar'||_0x4ebf1f.type==='openCard'||_0x4ebf1f.type==='payTrade'||_0x4ebf1f.type==='shareAct'){
                    continue;
                }
                await $.wait(2000);
                if(_0x4ebf1f.isComplete===false){
                    console.log(_0x4ebf1f.missionName);
                    if(_0x4ebf1f.type==='collectShop'){
                        await task('cusShop/getCusShop',{});
                        console.log('关注店铺ID '+$.getCusShopshopId);
                        await task('mission/completeMission',{'missionType':_0x4ebf1f.type,'shopId':$.getCusShopshopId});
                        break;
                    }else if(_0x4ebf1f.type==='addCart'){
                        await task('cusShop/getCusShopProduct',{});
                        await task('mission/completeMission',{'missionType':_0x4ebf1f.type,'goodsNumId':$.getCusShopProductnumId});
                    }else{
                        await task('mission/completeMission',{'missionType':_0x4ebf1f.type});
                    }
                }else{
                    console.log(_0x4ebf1f.missionName+' 任务已经完成');
                }
            }
            await $.wait(2000);
            if($.remainChance!=0){
                console.log('4.玩游戏 ->');
                await task('game/playGame',{'carId':1,'carName':'电瓶车'});
                await $.wait(1000);
                await task('report/temporary',{'type':'kaiShiYouXi','remark':'1_电瓶车'});
                await $.wait(2000);
                await task('game/sendGameAward',{'gameLogId':$.gameLogId,'point':200});
            }
        }else{
            $.log('没有成功获取到用户信息');
        }
    }else{
        $.log('没有成功获取到用户鉴权信息');
    }
}
function task(_0x1b27d0,_0x1a4c00,_0x4992c8=1){
    body={'jsonRpc':'2.0','params':{'commonParameter':{'appkey':$.appkey,'m':'POST','userId':$.userId},'admJson':{'actId':$.actId,'method':'/jdCardRunning/'+_0x1b27d0,'userId':$.userId,'buyerNick':$.buyerNick?$.buyerNick:''}}};
    Object.assign(body.params.admJson,_0x1a4c00);
    let _0x2d748b=getSign(body.params.admJson);
    body.params.commonParameter.sign=_0x2d748b.sign;
    body.params.commonParameter.timestamp=_0x2d748b.timeStamp;
    return new Promise(_0x2ad461=>{
        $.post(taskUrl(_0x1b27d0,body,_0x4992c8),async(_0x48289a,_0x25c366,_0x5543ca)=>{
            try{
                if(_0x48289a){
                    $.log(_0x48289a);
                }else{
                    if(_0x5543ca){
                        _0x5543ca=JSON.parse(_0x5543ca);
                        if(_0x5543ca.success){
                            if(_0x5543ca.data.status){
                                switch(_0x1b27d0){
                                    case 'activity/load':
                                        $.buyerNick=_0x5543ca.data.data.missionCustomer.buyerNick;
                                        $.user_id=_0x5543ca.data.data.cusActivity.actUpLoadId;
                                        $.missionCustomer=_0x5543ca.data.data.missionCustomer;
                                        $.remainChance=_0x5543ca.data.data.missionCustomer.remainChance;
                                        break;
                                    case 'mission/completeMission':
                                        if(_0x5543ca.data.status===500){
                                            console.log(_0x5543ca.data.msg);
                                        }else if(_0x5543ca.data.status===200){
                                            console.log(_0x5543ca.data.data.remark);
                                        }
                                        break;
                                    case 'mission/completeState':
                                        if(_0x5543ca.data.status){
                                            $.taskList=_0x5543ca.data.data;
                                        }
                                        break;
                                    case 'cusShop/getCusShop':
                                        if(_0x5543ca.data.status){
                                            $.getCusShopshopId=_0x5543ca.data.data.cusShop.shopId;
                                        }
                                        break;
                                    case 'cusShop/getCusShopProduct':
                                        if(_0x5543ca.data.status){
                                            $.getCusShopProductnumId=_0x5543ca.data.data.cusShopProduct.numId;
                                        }
                                        break;
                                    case 'game/playGame':
                                        if(_0x5543ca.data.status){
                                            $.gameLogId=_0x5543ca.data.data.gameLogId;
                                        }
                                        break;
                                    case 'report/temporary':
                                        if(_0x5543ca.data.status){
                                            console.log(_0x5543ca.data);
                                        }
                                        break;
                                    case 'game/sendGameAward':
                                        if(_0x5543ca.data.status){
                                            console.log(_0x5543ca.data);
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }else{
                        $.log('京东没有返回数据');
                    }
                }
            }catch(_0x3f3f51){
                $.log(_0x3f3f51);
            }finally{
                _0x2ad461();
            }
        });
    });
}
async function main(_0x15c1aa){
    $.actCode=1;
    $.appidSign='activities_platform';
    const _0x40126e=[''];
    let _0x52a018=_0x40126e[Math.floor(Math.random()*_0x40126e.length)];
    let _0x74ad76={'url':'https://api.m.jd.com/','body':'functionId=TaskInviteService&body='+JSON.stringify({'method':'participateInviteTask','data':{'channel':'1','encryptionInviterPin':encodeURIComponent(_0x52a018),'type':1}})+'&appid=market-task-h5&uuid=&_t='+Date.now(),'headers':{'Host':'api.m.jd.com','Accept':'application/json, text/plain, */*','Content-Type':'application/x-www-form-urlencoded','Origin':'https://assignment.jd.com','Accept-Language':'zh-CN,zh-Hans;q=0.9','User-Agent':$.isNode()?process.env.JS_USER_AGENT?process.env.JS_USER_AGENT:require('./JS_USER_AGENTS').USER_AGENT:$.getdata('JSUA')?$.getdata('JSUA'):'\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1','Referer':'https://assignment.jd.com/','Accept-Encoding':'gzip, deflate, br','Cookie':_0x15c1aa}};
    $.post(_0x74ad76,(_0x17d27c,_0x157a1e,_0x129272)=>{});
}
function getShopOpenCardInfo(_0x377dea,_0x53cc3b){
    let _0x5e7e73={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body='+encodeURIComponent(JSON.stringify(_0x377dea))+'&client=H5&clientVersion=9.2.0&uuid=88888','headers':{'Host':'api.m.jd.com','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'jdapp;iPhone;9.5.4;13.6;'+$.UUID+';network/wifi;ADID/'+$.ADID+';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1','Accept-Language':'zh-cn','Referer':'https://shopmember.m.jd.com/shopcard/?venderId='+_0x53cc3b+'}&channel=801&returnUrl='+encodeURIComponent($.activityUrl),'Accept-Encoding':'gzip, deflate, br'}};
    return new Promise(_0x2ac40c=>{
        $.get(_0x5e7e73,(_0x5cbc73,_0x31f1de,_0x470f33)=>{
            try{
                if(_0x5cbc73){
                    console.log(_0x5cbc73);
                }else{
                    res=JSON.parse(_0x470f33);
                    if(res.success){
                        if(res.result.interestsRuleList){
                            $.openCardActivityId=res.result.interestsRuleList[0].interestsInfo.activityId;
                        }
                    }
                }
            }catch(_0x1cf0a4){
                console.log(_0x1cf0a4);
            }finally{
                _0x2ac40c();
            }
        });
    });
}
async function bindWithVender(_0x24b853,_0x4bcfd5){
    return h5st=await geth5st('bindWithVender',_0x24b853),opt={'url':'https://api.m.jd.com/client.action?'+h5st,'headers':{'Host':'api.m.jd.com','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'jdapp;iPhone;9.5.4;13.6;'+$.UUID+';network/wifi;ADID/'+$.ADID+';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1','Accept-Language':'zh-cn','Referer':'https://shopmember.m.jd.com/shopcard/?venderId='+_0x4bcfd5+'}&channel=401&returnUrl='+encodeURIComponent($.activityUrl),'Accept-Encoding':'gzip, deflate, br'}},new Promise(_0x4b4165=>{
        $.get(opt,(_0x4ed2da,_0xbf68ad,_0x582cc9)=>{
            try{
                if(_0x4ed2da){
                    console.log(_0x4ed2da);
                }else{
                    res=JSON.parse(_0x582cc9);
                    if(res.success){
                        console.log(res);
                        $.bindWithVendermessage=res.message;
                    }
                }
            }catch(_0x474fa6){
                console.log(_0x474fa6);
            }finally{
                _0x4b4165();
            }
        });
    });
}
function taskUrl(_0x1160a6,_0x5727b9,_0x3d002=1){
    return{'url':_0x3d002?'https://mpdz-car-dz.isvjcloud.com/dm/front/jdCardRunning/'+_0x1160a6+'?open_id=&mix_nick='+($.buyerNick?$.buyerNick:'')+'&user_id='+($.user_id?$.user_id:''):'https://mpdz-car-dz.isvjcloud.com/dm/front/jdCardRunning/'+_0x1160a6+'?open_id=&mix_nick='+($.buyerNick?$.buyerNick:'')+'&push_way=1&user_id='+($.user_id?$.user_id:''),'headers':{'Host':'mpdz-car-dz.isvjcloud.com','Accept':'application/json','X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip, deflate, br','Content-Type':'application/json; charset=utf-8','Origin':'https://mpdz-car-dz.isvjcloud.com','User-Agent':'jdapp;iPhone;9.5.4;13.6;'+$.UUID+';network/wifi;ADID/'+$.ADID+';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1','Connection':'keep-alive','Referer':'https://mpdz-car-dz.isvjcloud.com/jdbeverage/pages/paoku/paoku?bizExtString=&from=kouling&sid=&un_area=','Cookie':cookie},'body':JSON.stringify(_0x5727b9)};
}
function getToken(){
    let _0x805c98={'url':'https://api.m.jd.com/client.action?functionId=isvObfuscator','headers':{'Host':'api.m.jd.com','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)','Accept-Language':'zh-Hans-CN;q=1','Accept-Encoding':'gzip, deflate, br'},'body':'body=%7B%22url%22%3A%20%22https%3A//lzkj-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=hjudwgohxzVu96krv&client=apple&clientVersion=9.4.0&st=1620476162000&sv=111&sign=f9d1b7e3b943b6a136d54fe4f892af05'};
    return new Promise(_0x14efd4=>{
        $.post(_0x805c98,(_0x326486,_0x25ef79,_0x259d33)=>{
            try{
                if(_0x326486){
                    $.log(_0x326486);
                }else{
                    if(_0x259d33){
                        _0x259d33=JSON.parse(_0x259d33);
                        if(_0x259d33.code==='0'){
                            $.token=_0x259d33.token;
                        }
                    }else{
                        $.log('京东返回了空数据');
                    }
                }
            }catch(_0x2e519e){
                $.log(_0x2e519e);
            }finally{
                _0x14efd4();
            }
        });
    });
}
function random(_0x3ba179,_0x349b9e){
    return Math.floor(Math.random()*(_0x349b9e-_0x3ba179))+_0x3ba179;
}
function getUUID(_0x2b893c='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',_0x523cc1=0){
    return _0x2b893c.replace(/[xy]/g,function(_0x4c63ad){
        var _0x11d2d0=Math.random()*0x10|0x0,_0x16fa86=_0x4c63ad=='x'?_0x11d2d0:_0x11d2d0&0x3|0x8;
        if(_0x523cc1){
            uuid=_0x16fa86.toString(36).toUpperCase();
        }else{
            uuid=_0x16fa86.toString(36);
        }
        return uuid;
    });
}
function checkCookie(){
    const _0x25fb3d={'url':'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion','headers':{'Host':'me-api.jd.com','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1','Accept-Language':'zh-cn','Referer':'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&','Accept-Encoding':'gzip, deflate, br'}};
    return new Promise(_0x1536e8=>{
        $.get(_0x25fb3d,(_0x5e1e88,_0x23ab1f,_0x52d1b9)=>{
            try{
                if(_0x5e1e88){
                    $.logErr(_0x5e1e88);
                }else{
                    if(_0x52d1b9){
                        _0x52d1b9=JSON.parse(_0x52d1b9);
                        if(_0x52d1b9.retcode==='1001'){
                            $.isLogin=false;
                            return;
                        }
                        if(_0x52d1b9.retcode==='0'&&_0x52d1b9.data.hasOwnProperty('userInfo')){
                            $.nickName=_0x52d1b9.data.userInfo.baseInfo.nickname;
                        }
                    }else{
                        $.log('京东返回了空数据');
                    }
                }
            }catch(_0x181059){
                $.logErr(_0x181059);
            }finally{
                _0x1536e8();
            }
        });
    });
}
function geth5st(_0x4e4475,_0x1b958a){
    return new Promise(async _0x4c3cea=>{
        let _0x1c54fd={'appId':'8adfb','body':{'appid':'jd_shop_member','functionId':_0x4e4475,'body':JSON.stringify(_0x1b958a),'clientVersion':'9.2.0','client':'H5','activityId':$.actId},'callbackAll':true};
        let _0x51d078='';
        let _0x3cc766=['jdsign.cf'];
        if(process.env.SIGN_URL){
            _0x51d078=process.env.SIGN_URL;
        }else{
            _0x51d078=_0x3cc766[Math.floor(Math.random()*_0x3cc766.length)];
        }
        let _0x243a44={'url':'https://cdn.nz.lu/geth5st','body':JSON.stringify(_0x1c54fd),'headers':{'Host':_0x51d078,'Content-Type':'application/json'},'timeout':30*1000};
        $.post(_0x243a44,async(_0x45da1f,_0x1dfd50,_0x1c54fd)=>{
            try{
                if(_0x45da1f){
                    _0x1c54fd=await geth5st.apply(this,arguments);
                }else{}
            }catch(_0x44a3e3){
                $.logErr(_0x44a3e3,_0x1dfd50);
            }finally{
                _0x4c3cea(_0x1c54fd);
            }
        });
    });
}
function getSign(_0x5f32f6){
    var _0x1cb446=new Date().valueOf(),_0xff5fc5='85623312044258464325227666883546',_0x59be36='25747717',_0x5b4c36=JSON.stringify(_0x5f32f6),_0x1d809a=encodeURIComponent(_0x5b4c36),_0xb73611=new RegExp('\'','g'),_0x3695d0=new RegExp('~','g'),_0x1d809a=_0x1d809a.replace(_0xb73611,'%27'),_0x1d809a=_0x1d809a.replace(_0x3695d0,'%7E'),_0x4b7ab2=_0x59be36+'appKey'+_0x59be36+'admJson'+_0x1d809a+'timestamp'+_0x1cb446+_0xff5fc5;
    return{'sign':CryptoJS.MD5(_0x4b7ab2.toLowerCase()).toString(),'timeStamp':_0x1cb446};
};
!function(n){
    "use strict";
    function t(n,t){
        var r=(65535&n)+(65535&t);
        return(n>>16)+(t>>16)+(r>>16)<<16|65535&r
    }
    function r(n,t){
        return n<<t|n>>>32-t
    }
    function e(n,e,o,u,c,f){
        return t(r(t(t(e,n),t(u,f)),c),o)
    }
    function o(n,t,r,o,u,c,f){
        return e(t&r|~t&o,n,t,u,c,f)
    }
    function u(n,t,r,o,u,c,f){
        return e(t&o|r&~o,n,t,u,c,f)
    }
    function c(n,t,r,o,u,c,f){
        return e(t^r^o,n,t,u,c,f)
    }
    function f(n,t,r,o,u,c,f){
        return e(r^(t|~o),n,t,u,c,f)
    }
    function i(n,r){
        n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;
        var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;
        for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);
        return[l,g,v,m]
    }
    function a(n){
        var t,r="",e=32*n.length;
        for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
        return r
    }
    function d(n){
        var t,r=[];
        for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
        var e=8*n.length;
        for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
        return r
    }
    function h(n){
        return a(i(d(n),8*n.length))
    }
    function l(n,t){
        var r,e,o=d(n),u=[],c=[];
        for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];
        return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))
    }
    function g(n){
        var t,r,e="";
        for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);
        return e
    }
    function v(n){
        return unescape(encodeURIComponent(n))
    }
    function m(n){
        return h(v(n))
    }
    function p(n){
        return g(m(n))
    }
    function s(n,t){
        return l(v(n),v(t))
    }
    function C(n,t){
        return g(s(n,t))
    }
    function A(n,t,r){
        return t?r?s(t,n):C(t,n):r?m(n):p(n)
    }
    $.md5=A
}(this);
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