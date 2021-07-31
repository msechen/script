/*

软件名称:美刻精灵 (安卓版) 一天不固定,大概0.5-0.8不等

软件下载地址: https://gitee.com/soy-tool/app-script/blob/master/picture/mkjl.png

作者qq:1056211611

只做那个只做领取生产气泡和语言气泡和活跃气泡

语言红包一套是14还是15个来的,生产气泡 0 12 18 刷新,每次15个

不会抓包的请绕道,谢谢..不会写 v2p 自动抓取数据包,所以v2p的自行代理抓包然后填变量

不会自己获取 v2p 代理抓包的数据，所以都统一的自行添加

需要变量介绍:

抓包首页 链接中包含 getTotalCoinList 的请求体
export soy_MK_user_boby=''

开语言红包请求体,需要编码状态的,就是有 % 符号(因为有sign验证所以需要)
soy_MK_lang_boby=''

看视频广告的请求体 链接包含 reward_video/reward 如果找不到推出app重新打开
export soy_MK_message=''

cron 5-59/5 0,12,18 * * *

因为广告是15秒刷新,但是这样重发发现有时有效有时无效所以cron设置这个


多号 除了 soy_MK_message 变量 用 @ 或 & 隔开 其他的可以  @ 或 & 或 换行 隔开

由于请求体都是加密,不搞解密,估计兑换和提现也是要添加请求体

*/


const $ = new Env('美刻精灵');
const notify = $.isNode() ? require('./sendNotify') : '';
const logs = 0; //响应日志开关,默认关闭
let subTitle = ``,app_MK_auth=[],soy_MK_auth='',soy_MK_message='',app_MK_message=[],app_MK_lang_boby=[],soy_MK_lang_boby='',soy_MK_user_boby='',app_MK_user_boby=[];


!(async () => {
    if ($.isNode()) {
    apptz = process.env.mkapptz;//是否推送，默认true
    apptx = process.env.mkapptx;//默认提现假,需要自行修改变量 RL_tx=true/false
    
    if (process.env.soy_MK_message && process.env.soy_MK_message.indexOf('@') > -1) {
        MK_message = process.env.soy_MK_message.split('@');
    }else if(process.env.soy_MK_message && process.env.soy_MK_message.indexOf('&') > -1){
        MK_message = process.env.soy_MK_message.split('&');
    }else{
        MK_message = process.env.soy_MK_message.split();
    };
    
    if (process.env.soy_MK_lang_boby && process.env.soy_MK_lang_boby.indexOf('@') > -1) {
        MK_lang_boby = process.env.soy_MK_lang_boby.split('@');
    } else if (process.env.soy_MK_lang_boby && process.env.soy_MK_lang_boby.indexOf('\n') > -1) {
        MK_lang_boby = process.env.soy_MK_lang_boby.split('\n');
    } else if(process.env.soy_MK_lang_boby && process.env.soy_MK_lang_boby.indexOf('&') > -1){
        MK_lang_boby = process.env.soy_MK_lang_boby.split('&');
    }else{
        MK_lang_boby = process.env.soy_MK_lang_boby.split();
    };
    
    if (process.env.soy_MK_user_boby && process.env.soy_MK_user_boby.indexOf('@') > -1) {
        MK_user_boby = process.env.soy_MK_user_boby.split('@');
    } else if (process.env.soy_MK_user_boby && process.env.soy_MK_user_boby.indexOf('\n') > -1) {
        MK_user_boby = process.env.soy_MK_user_boby.split('\n');
    } else if(process.env.soy_MK_user_boby && process.env.soy_MK_user_boby.indexOf('&') > -1){
        MK_user_boby = process.env.soy_MK_user_boby.split('&');
    }else{
        MK_user_boby = process.env.soy_MK_user_boby.split();
    };
   
    
    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};
    
} else {
    apptz = $.getdata('mkapptz');//是否推送，默认true
    apptx = $.getdata('mkapptx');//默认提现假,需要自行修改变量 RL_tx=true/false
    
    if($.getdata('soy_MK_message')&&$.getdata('soy_MK_message').indexOf('@')>-1){
        MK_message=$.getdata('soy_MK_message').split('@');
    }else if($.getdata('soy_MK_message')&&$.getdata('soy_MK_message').indexOf('&')>-1){
        MK_message=$.getdata('soy_MK_message').split('&');
    }else{
        MK_message=$.getdata('soy_MK_message').split();
    };
    
    if($.getdata('soy_MK_lang_boby')&&$.getdata('soy_MK_lang_boby').indexOf('@')>-1){
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split('@');
    }else if($.getdata('soy_MK_lang_boby')&&$.getdata('soy_MK_lang_boby').indexOf('\n')>-1){
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split('\n');
    }else if($.getdata('soy_MK_lang_boby')&&$.getdata('soy_MK_lang_boby').indexOf('&')>-1){
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split('&');
    }else{
        MK_lang_boby=$.getdata('soy_MK_lang_boby').split();
    };
    
    if($.getdata('soy_MK_user_boby')&&$.getdata('soy_MK_user_boby').indexOf('@')>-1){
        MK_user_boby=$.getdata('soy_MK_user_boby').split('@');
    }else if($.getdata('soy_MK_user_boby')&&$.getdata('soy_MK_user_boby').indexOf('\n')>-1){
        MK_user_boby=$.getdata('soy_MK_user_boby').split('\n');
    }else if($.getdata('soy_MK_user_boby')&&$.getdata('soy_MK_user_boby').indexOf('&')>-1){
        MK_user_boby=$.getdata('soy_MK_user_boby').split('&');
    }else{
        MK_user_boby=$.getdata('soy_MK_user_boby').split();
    };
    
    if(!apptz&&apptz==''){apptz=true};
    if(!apptx&&apptx==''){apptx=true};

}

//############################
//配置区域

Object.keys(MK_message).forEach((item) => {
    if (MK_message[item]) {
        app_MK_message.push(MK_message[item]);
    }});
Object.keys(MK_lang_boby).forEach((item) => {
    if (MK_lang_boby[item]) {
        app_MK_lang_boby.push(MK_lang_boby[item]);
    }});
Object.keys(MK_user_boby).forEach((item) => {
    if (MK_user_boby[item]) {
        app_MK_user_boby.push(MK_user_boby[item]);
    }});

if(!app_MK_user_boby||app_MK_user_boby==''){
        console.log(`\n【${$.name}】：未填写相对应的变量,或者填写错误`);
        return;
    }/*else if(app_MK_user_boby.length!=app_MK_message.length||app_MK_user_boby.length!==app_MK_lang_boby.length){
       console.log(`\n【${$.name}】：需要的变量数量不匹配`);
       return; 
    }*/
console.log(`\n============ 共${app_MK_user_boby.length}个账号 ============\n`);



//====================================

for (let i = 0; i < app_MK_user_boby.length; i++) {
    
    soy_MK_message=app_MK_message[i];
    soy_MK_lang_boby=app_MK_lang_boby[i];
    soy_MK_user_boby=app_MK_user_boby[i]
    //去除message中的换行
    soy_MK_message=soy_MK_message.replace(/\n/, "");
    
    soy_MK_user_headers={
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": MK_user_boby.length,
        "Host": "new.api.miikk.com",};
    
    $.index = i + 1;
    await mk_UserInfo();
    console.log(`\n开始【账号 ${nickname} 任务】`);
    
    await mk_showReceiveCoinNum();
    
    if(CoinNum >= 1){
        await mk_Openbubble();
    }else{
        console.log(`\n【${nickname}---广告任务】: 已上限,跳过任务`);
    }
    
    await mk_token(); 
    
    let T = new Date();
    T.getHours()
    T.getMinutes()
    if(T.getHours()==18&&T.getMinutes()>=45){await mk_qp();}
    
}

//推送消息
if(apptz){if ($.isNode() ){await notify.sendNotify($.name, subTitle)}};

})()
.catch((e) => $.logErr(e))
.finally(() => $.done());



//查看用户信息
function mk_UserInfo() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/user/getUserInfo`,
            headers : soy_MK_user_headers,
            body : soy_MK_user_boby,
        }, async(error, response, data) => {
            if(error){
                console.log("⛔️API查询请求失败，请检查自身设备网络情况");
                subTitle += "⛔️API查询请求失败，请检查自身设备网络情况"
            }else{
               //console.log(data);
            let result = JSON.parse(data);
            if(result.code==200){
                nickname=result.data.nickname;
            }else{
                console.log(`\n【${nickname}---获取用户信息】: 获取失败`);
                subTitle +=`\n【${nickname}---获取用户信息】: 获取失败`
            }
            
            }
            resolve();
        });
    });
};
//查看精灵币数量
function mk_showReceiveCoinNum() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/Coin/showReceiveCoinNum`,
            headers : soy_MK_user_headers,
            body : soy_MK_user_boby,
        }, async(error, response, data) => {
            if(error){
                console.log("⛔️API查询请求失败，请检查自身设备网络情况");
            }else{
               //console.log(data);
            let result = JSON.parse(data);
            if(result.code==200){
                CoinNum = result.data.content.substring(result.data.content.indexOf("剩余")+2,result.data.content.indexOf("次）"));
                console.log(`\n【${nickname}---广告次数】: ${result.data.content}`);
                
                //console.log(Num)
                
            }else{
                console.log(`\n【${nickname}---广告次数】: ${result.msg}`);
            }
            
            }
            resolve();
        });
    });
};
var _0xodt='jsjiami.com.v6',_0x29ba=[_0xodt,'4pim77m9w47CnMOE5p2q6K2y6Ky45rOz5aWr6La8776H6K215qCM5p6w6IW06Lq/6K2O5aSs57yB57ua5oKu5YWK','IXdmwpvCjlXDkVbDmsOtw6zDpcOXccOBw7YiwpUOTcK3dWTCl8KebloWwozCtSgXUSDClgRqRcKSKsO+SjjDt8OAw7puBcOcwqhtwr9xwqvCjsKiRsOfJknDuBDCk8OFwpbDhcOFc8Ojwp08w5Iew77Cjh3Ctmw8wqM=','wqYSYw==','w6XCoMOxHmA=','woxEV8OIOg==','wqVzwqM=','JWfCq+eevOinrumjouW4sOWQsuODlhfDgeKdgT7liKnmvLzluK/lkY/lp6PliavojKzljpbmiaDliIE=','wozDl8KC','QBQD55+16KaT6aGc5bmt5ZKg44O5EMOh4pyBwpHmv63li5Hluaflko3lp7Dli5TojanljILlp5vot6vCjeaWpemVieafl+WItuaIpOiDveW3vOS5jemZhw==','w5XDgsO+w6bDiw==','GjsjiqaCImiL.cwBWoMmk.EvPYNeB6d=='];(function(_0x98c1de,_0x5e26ba,_0x5aa933){var _0x369c62=function(_0xebf13b,_0x3549ee,_0xbde2a7,_0x3754f5,_0x105e5c){_0x3549ee=_0x3549ee>>0x8,_0x105e5c='po';var _0x4d4a38='shift',_0x544599='push';if(_0x3549ee<_0xebf13b){while(--_0xebf13b){_0x3754f5=_0x98c1de[_0x4d4a38]();if(_0x3549ee===_0xebf13b){_0x3549ee=_0x3754f5;_0xbde2a7=_0x98c1de[_0x105e5c+'p']();}else if(_0x3549ee&&_0xbde2a7['replace'](/[GqCILwBWMkEPYNeBd=]/g,'')===_0x3549ee){_0x98c1de[_0x544599](_0x3754f5);}}_0x98c1de[_0x544599](_0x98c1de[_0x4d4a38]());}return 0x9bb26;};return _0x369c62(++_0x5e26ba,_0x5aa933)>>_0x5e26ba^_0x5aa933;}(_0x29ba,0x104,0x10400));var _0x15b2=function(_0x445762,_0x24f06f){_0x445762=~~'0x'['concat'](_0x445762);var _0x36f27c=_0x29ba[_0x445762];if(_0x15b2['UYkFyO']===undefined){(function(){var _0x58dee5=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4a97d7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x58dee5['atob']||(_0x58dee5['atob']=function(_0x1165ea){var _0x34f54c=String(_0x1165ea)['replace'](/=+$/,'');for(var _0x3fd774=0x0,_0x43a103,_0x48dfbb,_0x17c157=0x0,_0x59f821='';_0x48dfbb=_0x34f54c['charAt'](_0x17c157++);~_0x48dfbb&&(_0x43a103=_0x3fd774%0x4?_0x43a103*0x40+_0x48dfbb:_0x48dfbb,_0x3fd774++%0x4)?_0x59f821+=String['fromCharCode'](0xff&_0x43a103>>(-0x2*_0x3fd774&0x6)):0x0){_0x48dfbb=_0x4a97d7['indexOf'](_0x48dfbb);}return _0x59f821;});}());var _0x18e7f5=function(_0x4bf916,_0x24f06f){var _0xa47c7e=[],_0x1469d3=0x0,_0x4ec936,_0x47d3e4='',_0x12de63='';_0x4bf916=atob(_0x4bf916);for(var _0x2eb0f2=0x0,_0x24430c=_0x4bf916['length'];_0x2eb0f2<_0x24430c;_0x2eb0f2++){_0x12de63+='%'+('00'+_0x4bf916['charCodeAt'](_0x2eb0f2)['toString'](0x10))['slice'](-0x2);}_0x4bf916=decodeURIComponent(_0x12de63);for(var _0x5aedd3=0x0;_0x5aedd3<0x100;_0x5aedd3++){_0xa47c7e[_0x5aedd3]=_0x5aedd3;}for(_0x5aedd3=0x0;_0x5aedd3<0x100;_0x5aedd3++){_0x1469d3=(_0x1469d3+_0xa47c7e[_0x5aedd3]+_0x24f06f['charCodeAt'](_0x5aedd3%_0x24f06f['length']))%0x100;_0x4ec936=_0xa47c7e[_0x5aedd3];_0xa47c7e[_0x5aedd3]=_0xa47c7e[_0x1469d3];_0xa47c7e[_0x1469d3]=_0x4ec936;}_0x5aedd3=0x0;_0x1469d3=0x0;for(var _0x371dca=0x0;_0x371dca<_0x4bf916['length'];_0x371dca++){_0x5aedd3=(_0x5aedd3+0x1)%0x100;_0x1469d3=(_0x1469d3+_0xa47c7e[_0x5aedd3])%0x100;_0x4ec936=_0xa47c7e[_0x5aedd3];_0xa47c7e[_0x5aedd3]=_0xa47c7e[_0x1469d3];_0xa47c7e[_0x1469d3]=_0x4ec936;_0x47d3e4+=String['fromCharCode'](_0x4bf916['charCodeAt'](_0x371dca)^_0xa47c7e[(_0xa47c7e[_0x5aedd3]+_0xa47c7e[_0x1469d3])%0x100]);}return _0x47d3e4;};_0x15b2['bJNNSU']=_0x18e7f5;_0x15b2['puZMVf']={};_0x15b2['UYkFyO']=!![];}var _0x29eece=_0x15b2['puZMVf'][_0x445762];if(_0x29eece===undefined){if(_0x15b2['BJiLGc']===undefined){_0x15b2['BJiLGc']=!![];}_0x36f27c=_0x15b2['bJNNSU'](_0x36f27c,_0x24f06f);_0x15b2['puZMVf'][_0x445762]=_0x36f27c;}else{_0x36f27c=_0x29eece;}return _0x36f27c;};function mk_Openbubble(){var _0x5cf5c4={'agKTH':_0x15b2('0','r)3j'),'cBVcb':function(_0x4cf64f){return _0x4cf64f();}};return new Promise((_0x2a68bd,_0x5bf467)=>{$['post']({'url':_0x15b2('1','D0U9'),'body':soy_MK_message},async(_0x4b02be,_0x15b13c,_0x3f9b30)=>{if(_0x4b02be){console[_0x15b2('2','k6Qa')](_0x5cf5c4[_0x15b2('3','K75n')]);}else{let _0x2564c7=JSON[_0x15b2('4','U$T&')](_0x3f9b30);if(_0x2564c7['code']==0xea67){console[_0x15b2('5','(Uj5')]('\x0a【'+nickname+_0x15b2('6','[J3%'));}else{console[_0x15b2('7','&aS#')]('\x0a【'+nickname+_0x15b2('8','QuZc'));};}_0x5cf5c4[_0x15b2('9','&lv6')](_0x2a68bd);});});};;_0xodt='jsjiami.com.v6';
var _0xodG='jsjiami.com.v6',_0x4ed4=[_0xodG,'fmPCrlzChC4=','ESwb','w5nDkyvCgsO8','OX3CmMKfw6c=','wrRZdV1o','w7U9wqXCuyc=','wpfDqhLkuZXkvJforJXpnI7jgaBAQ+KfqVw=','UMKqwrg=','w4LCsEYRYA==','wpIHwrXCoMOLCh7CosKhXsOsCsOlRnfDq37DhFXCucKzwpJEw6TDjxw=','dMOCw5LDusK9w5/Di8K1w5rCu8OZdsK5DzMjwqrCvU7ChsKAw4ZFKMOOGzrDt0XCgTLCvcO2w6vCp8K6NsOBcMOcPcO0DD3Dp8KXAsKWw4HDjUECdm9twrZRJMKBehwcDsOMFMOMw7wXXcKmw4RXw6XDpsKSw7rCvcKZw6FYwrxMw6DCkMOLYcKYBcOqw53CsjvCiGzDvsOvWlU/QcKKAHZxwq7DpgAvAMKfwqLCjWohwqPDiiU/f8OzwrLDhMKCw73CvMOvwpXDliTCs8O8wr8kw6Mtw7PDj8OaKsOewpTCvERfwpZMJMKCcTZfUMOJH29mAMO+wo1UVQ==','ZnVjw7JAEcKywoUDwpdrw6QJY8Okw5M9wrvDicOLJ8KiPG7DnEfDmsOgwqwhW8OCOw==','FRQoCnU=','dcOTcQTCsQ==','wpHDoVkEIA==','SWM7R8KE','w4EVUsOwKg==','TjsxujQiami.tldyCRcom.gv6gPJ=='];(function(_0x18b6dd,_0x13cb3e,_0x232837){var _0x3ad1ef=function(_0x30760b,_0x4b2929,_0x440262,_0x62db51,_0x2ab26f){_0x4b2929=_0x4b2929>>0x8,_0x2ab26f='po';var _0x15dfb3='shift',_0x2c739a='push';if(_0x4b2929<_0x30760b){while(--_0x30760b){_0x62db51=_0x18b6dd[_0x15dfb3]();if(_0x4b2929===_0x30760b){_0x4b2929=_0x62db51;_0x440262=_0x18b6dd[_0x2ab26f+'p']();}else if(_0x4b2929&&_0x440262['replace'](/[TxuQtldyCRggPJ=]/g,'')===_0x4b2929){_0x18b6dd[_0x2c739a](_0x62db51);}}_0x18b6dd[_0x2c739a](_0x18b6dd[_0x15dfb3]());}return 0x9bb2b;};return _0x3ad1ef(++_0x13cb3e,_0x232837)>>_0x13cb3e^_0x232837;}(_0x4ed4,0x91,0x9100));var _0x3c05=function(_0x5336fa,_0xfd83e8){_0x5336fa=~~'0x'['concat'](_0x5336fa);var _0x34784c=_0x4ed4[_0x5336fa];if(_0x3c05['gdBKia']===undefined){(function(){var _0x1e7150=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x366cd6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1e7150['atob']||(_0x1e7150['atob']=function(_0x3af36f){var _0x5eb69e=String(_0x3af36f)['replace'](/=+$/,'');for(var _0x263590=0x0,_0x23ec23,_0x21db41,_0x49c2c9=0x0,_0x300492='';_0x21db41=_0x5eb69e['charAt'](_0x49c2c9++);~_0x21db41&&(_0x23ec23=_0x263590%0x4?_0x23ec23*0x40+_0x21db41:_0x21db41,_0x263590++%0x4)?_0x300492+=String['fromCharCode'](0xff&_0x23ec23>>(-0x2*_0x263590&0x6)):0x0){_0x21db41=_0x366cd6['indexOf'](_0x21db41);}return _0x300492;});}());var _0x54c358=function(_0x23965e,_0xfd83e8){var _0x146cdb=[],_0x3e1f0f=0x0,_0x3d013f,_0x159611='',_0x3021f7='';_0x23965e=atob(_0x23965e);for(var _0x629d14=0x0,_0x10de93=_0x23965e['length'];_0x629d14<_0x10de93;_0x629d14++){_0x3021f7+='%'+('00'+_0x23965e['charCodeAt'](_0x629d14)['toString'](0x10))['slice'](-0x2);}_0x23965e=decodeURIComponent(_0x3021f7);for(var _0x418764=0x0;_0x418764<0x100;_0x418764++){_0x146cdb[_0x418764]=_0x418764;}for(_0x418764=0x0;_0x418764<0x100;_0x418764++){_0x3e1f0f=(_0x3e1f0f+_0x146cdb[_0x418764]+_0xfd83e8['charCodeAt'](_0x418764%_0xfd83e8['length']))%0x100;_0x3d013f=_0x146cdb[_0x418764];_0x146cdb[_0x418764]=_0x146cdb[_0x3e1f0f];_0x146cdb[_0x3e1f0f]=_0x3d013f;}_0x418764=0x0;_0x3e1f0f=0x0;for(var _0xb64054=0x0;_0xb64054<_0x23965e['length'];_0xb64054++){_0x418764=(_0x418764+0x1)%0x100;_0x3e1f0f=(_0x3e1f0f+_0x146cdb[_0x418764])%0x100;_0x3d013f=_0x146cdb[_0x418764];_0x146cdb[_0x418764]=_0x146cdb[_0x3e1f0f];_0x146cdb[_0x3e1f0f]=_0x3d013f;_0x159611+=String['fromCharCode'](_0x23965e['charCodeAt'](_0xb64054)^_0x146cdb[(_0x146cdb[_0x418764]+_0x146cdb[_0x3e1f0f])%0x100]);}return _0x159611;};_0x3c05['VdlnSO']=_0x54c358;_0x3c05['BMQKuN']={};_0x3c05['gdBKia']=!![];}var _0x2c738c=_0x3c05['BMQKuN'][_0x5336fa];if(_0x2c738c===undefined){if(_0x3c05['QMNvgq']===undefined){_0x3c05['QMNvgq']=!![];}_0x34784c=_0x3c05['VdlnSO'](_0x34784c,_0xfd83e8);_0x3c05['BMQKuN'][_0x5336fa]=_0x34784c;}else{_0x34784c=_0x2c738c;}return _0x34784c;};function mk_token(){var _0x5d4bd6={'DPowm':'⛔️API查询请求失败，请检查自身设备网络情况','aNgDM':function(_0x47c878,_0x2e6d96){return _0x47c878==_0x2e6d96;},'jSsTc':_0x3c05('0','qcJB'),'FECpz':_0x3c05('1','RYUH'),'QTovz':_0x3c05('2','h7qE')};return new Promise((_0xff07bd,_0x1fb7c5)=>{var _0x22aacc={'JLMNj':_0x5d4bd6[_0x3c05('3','e^7$')],'GHNNA':function(_0xd92957,_0x5b37de){return _0x5d4bd6[_0x3c05('4','^2V!')](_0xd92957,_0x5b37de);},'xwyNW':function(_0x530748){return _0x530748();}};$['post']({'url':'http://voiceapi.xinliangxiang.com/v1/user/login','headers':{'Host':_0x5d4bd6[_0x3c05('5','2F[8')],'user-agent':_0x5d4bd6[_0x3c05('6','G(d(')],'content-type':_0x5d4bd6[_0x3c05('7','LuMP')],'content-length':soy_MK_lang_boby[_0x3c05('8','DJf[')]},'body':soy_MK_lang_boby},async(_0xbd59f9,_0x3a5a74,_0xc0a30e)=>{if(_0xbd59f9){console[_0x3c05('9','M&9^')](_0x22aacc['JLMNj']);}else{let _0x3bc739=JSON[_0x3c05('a','Ikk@')](_0xc0a30e);if(_0x22aacc[_0x3c05('b','t]04')](_0x3bc739['code'],0xc8)){token=_0x3bc739['data'][_0x3c05('c','P7#8')];await _0x22aacc[_0x3c05('d','xbu@')](mk_Readad);}else{console['log']('\x0a【'+nickname+_0x3c05('e','Y[(H')+_0x3bc739[_0x3c05('f','XNtD')]);};};_0x22aacc[_0x3c05('10','Y[(H')](_0xff07bd);});});};;_0xodG='jsjiami.com.v6';

var _0xod9='jsjiami.com.v6',_0x5f52=[_0xod9,'OMOuwplO','wogcYsOC','dMKyw55wwoo=','J8KXwrYj','wpkZTMODwr/Cug==','PMKKwrkvKMOJBn0CSsKQwr0cw7p5wpjClkgPwqBhw4rCi8K2FU7CtcKIw4vCgncyWCV5w4RCJsKHw4MpwrZFw4/DtcO9JFnCiMOJDn1dwprCtElMwq1UwpbCqMKWw78e','wpHCtMOWw6rCjsKzIcOjT8OpwoPDuMKdIyl5ZXFGwogB','ecK9w58Kw4fDo2k3WzQuAcOtw6HDo3vCsX7DkVfDhxpcwqV5EgVowogsVMOVCWUNw5AUw5vDkmlqEQjDhsO2wqEE','wpHDg8Kmw6rChMKxdMK6GsKpw7/Dn8OWNClucwcn','U8OhG8OXMh4C','w4Icwqdw','IHMMw7Y3w78Qwr4=','w6PCihbDgg==','BAoTw68OwqEeKEE=','TEgS','w7sfwrLorIbpn4vlub3lkJborbPjgbUlaOKfv1M=','csOhw79YUA==','WcKqwrrCiMOaw5fCsA==','KcOLaEHDgMO6wrw4w7REw6IiABTCtcKUUUfDn8KPdhvDrWbDgU7DnQ0tw5IBMm/DnMKWwobDmQHCh8OiwrBNGMKww6vChsO+MFDDicO7wqN2ZMKfMMKUw64BWEodWC7Cgkp6wp/CmsOFRkVCMsO9T0dmMz/ClsOHW8KowqXDoxsPwrF0LMK9woDDgQfDk0HClMKLw5HDjBjDpXs1MnITwo1ueC/CmQrDnGPDqsKACx56aEZEHcOCw4AFwq9MwqTDmiHCnMOBwptCPMOIwpTClF09WEgtwrBJwpTCicOkXBd9Ynczw657w4PDmg==','AQ8kw6Fd','wq3CtnB/w4TCvMOHwo9aw4zCoGAyw5RhwrbCqcK7wpB6AsOGQ8K0Vm7DocKswrZ3wrdtw5/CtRTDtMK9GsKpVsKxwptGISbCqQ==','w4QWw7VIDw==','aGQ2b8Kz','w6AvAxNmTsK1wofCpXTCsgYXU8K4w50DwqEbw6ASw71RwrvCsxfClMO8R8O/wrHDlcKH','w6UUEBBo','Q0gRZg==','wrPDjnY=','e8Kewpp8','CsKlQuitlumepOW4qOWQrOivl+OBssO3wrXojZvljbzor7Tpn6bmi57li7pf6K2Q6Zyk6Kyb772r','DBEUjsIjizampwwi.cZboCmMN.v6=='];(function(_0x59ee27,_0x141d4d,_0x675d77){var _0x2aa2fe=function(_0xc2409d,_0x166e65,_0xbeb1b9,_0x17e0dc,_0x4f9bf1){_0x166e65=_0x166e65>>0x8,_0x4f9bf1='po';var _0x396887='shift',_0x142cd3='push';if(_0x166e65<_0xc2409d){while(--_0xc2409d){_0x17e0dc=_0x59ee27[_0x396887]();if(_0x166e65===_0xc2409d){_0x166e65=_0x17e0dc;_0xbeb1b9=_0x59ee27[_0x4f9bf1+'p']();}else if(_0x166e65&&_0xbeb1b9['replace'](/[DBEUIzpwwZbCMN=]/g,'')===_0x166e65){_0x59ee27[_0x142cd3](_0x17e0dc);}}_0x59ee27[_0x142cd3](_0x59ee27[_0x396887]());}return 0x9bb28;};return _0x2aa2fe(++_0x141d4d,_0x675d77)>>_0x141d4d^_0x675d77;}(_0x5f52,0xf9,0xf900));var _0x44c0=function(_0x6ab40c,_0x4b7420){_0x6ab40c=~~'0x'['concat'](_0x6ab40c);var _0x5d649c=_0x5f52[_0x6ab40c];if(_0x44c0['vGMsXh']===undefined){(function(){var _0x3a2b54=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x39e6d8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3a2b54['atob']||(_0x3a2b54['atob']=function(_0x4416c1){var _0x378a34=String(_0x4416c1)['replace'](/=+$/,'');for(var _0x221dee=0x0,_0x5a08e4,_0x561782,_0x11ef59=0x0,_0x311924='';_0x561782=_0x378a34['charAt'](_0x11ef59++);~_0x561782&&(_0x5a08e4=_0x221dee%0x4?_0x5a08e4*0x40+_0x561782:_0x561782,_0x221dee++%0x4)?_0x311924+=String['fromCharCode'](0xff&_0x5a08e4>>(-0x2*_0x221dee&0x6)):0x0){_0x561782=_0x39e6d8['indexOf'](_0x561782);}return _0x311924;});}());var _0x260dfd=function(_0x403442,_0x4b7420){var _0x25fcaf=[],_0x21d2d2=0x0,_0x54cdcc,_0x1beac7='',_0x7c8b05='';_0x403442=atob(_0x403442);for(var _0xea963c=0x0,_0x49dae9=_0x403442['length'];_0xea963c<_0x49dae9;_0xea963c++){_0x7c8b05+='%'+('00'+_0x403442['charCodeAt'](_0xea963c)['toString'](0x10))['slice'](-0x2);}_0x403442=decodeURIComponent(_0x7c8b05);for(var _0x16722a=0x0;_0x16722a<0x100;_0x16722a++){_0x25fcaf[_0x16722a]=_0x16722a;}for(_0x16722a=0x0;_0x16722a<0x100;_0x16722a++){_0x21d2d2=(_0x21d2d2+_0x25fcaf[_0x16722a]+_0x4b7420['charCodeAt'](_0x16722a%_0x4b7420['length']))%0x100;_0x54cdcc=_0x25fcaf[_0x16722a];_0x25fcaf[_0x16722a]=_0x25fcaf[_0x21d2d2];_0x25fcaf[_0x21d2d2]=_0x54cdcc;}_0x16722a=0x0;_0x21d2d2=0x0;for(var _0x19b262=0x0;_0x19b262<_0x403442['length'];_0x19b262++){_0x16722a=(_0x16722a+0x1)%0x100;_0x21d2d2=(_0x21d2d2+_0x25fcaf[_0x16722a])%0x100;_0x54cdcc=_0x25fcaf[_0x16722a];_0x25fcaf[_0x16722a]=_0x25fcaf[_0x21d2d2];_0x25fcaf[_0x21d2d2]=_0x54cdcc;_0x1beac7+=String['fromCharCode'](_0x403442['charCodeAt'](_0x19b262)^_0x25fcaf[(_0x25fcaf[_0x16722a]+_0x25fcaf[_0x21d2d2])%0x100]);}return _0x1beac7;};_0x44c0['nSoPeo']=_0x260dfd;_0x44c0['jOXdQf']={};_0x44c0['vGMsXh']=!![];}var _0x5718b0=_0x44c0['jOXdQf'][_0x6ab40c];if(_0x5718b0===undefined){if(_0x44c0['VIfxSF']===undefined){_0x44c0['VIfxSF']=!![];}_0x5d649c=_0x44c0['nSoPeo'](_0x5d649c,_0x4b7420);_0x44c0['jOXdQf'][_0x6ab40c]=_0x5d649c;}else{_0x5d649c=_0x5718b0;}return _0x5d649c;};function mk_Readad(){var _0x3dd78c={'wGyhO':'8|2|5|6|3|1|4|0|7','kYtRJ':function(_0x4149e6){return _0x4149e6();},'pTAfz':'voiceapi.xinliangxiang.com','XfmoS':function(_0x4590ec,_0x43c77d){return _0x4590ec+_0x43c77d;},'XFlaf':_0x44c0('0','MUNL'),'HCClo':_0x44c0('1','3JR6'),'dKcog':_0x44c0('2','6CKB')};return new Promise((_0x55989d,_0x3fc168)=>{$['post']({'url':_0x44c0('3','^QqA'),'headers':{'Host':_0x3dd78c[_0x44c0('4','lZ7c')],'authorization':_0x3dd78c['XfmoS'](_0x3dd78c['XFlaf'],token),'user-agent':_0x3dd78c[_0x44c0('5','v^O3')],'content-type':_0x44c0('6',')#eX'),'content-length':0x5},'body':_0x3dd78c[_0x44c0('7',')#eX')]},async(_0x9da533,_0x566c47,_0x46f464)=>{let _0x456764=JSON['parse'](_0x46f464);if(_0x456764[_0x44c0('8','v^O3')]==0xc8){var _0x5a4441=_0x3dd78c['wGyhO']['split']('|'),_0x35f738=0x0;while(!![]){switch(_0x5a4441[_0x35f738++]){case'0':console[_0x44c0('9','CTPQ')]('\x0a【'+$[_0x44c0('a','wGu[')]+_0x44c0('b','*CW0')+adContent);continue;case'1':adId=_0x456764[_0x44c0('c','rSSQ')][_0x44c0('d','6NqN')];continue;case'2':logId=_0x456764['data'][_0x44c0('e','bvZ8')];continue;case'3':pageId=_0x456764[_0x44c0('f','QX#Y')][_0x44c0('10','6NqN')];continue;case'4':receive_boby='data=%7B%22adId%22%3A%22'+adId+_0x44c0('11','Aqn!')+logId+_0x44c0('12','cv*F')+pageId+_0x44c0('13','rSSQ')+sloganId+'%22%2C%22titleId%22%3A%22'+titleId+'%22%2C%22voiceContent%22%3A%22'+encodeURI(adContent)+_0x44c0('14','cv*F');continue;case'5':titleId=_0x456764['data'][_0x44c0('15','*CW0')];continue;case'6':sloganId=_0x456764[_0x44c0('16','sUa!')][_0x44c0('17','GGhy')];continue;case'7':await mk_receive();continue;case'8':adContent=_0x456764[_0x44c0('18','%x%!')][_0x44c0('19','6CKB')];continue;}break;}}else{console[_0x44c0('1a','v^O3')]('\x0a【'+nickname+_0x44c0('1b','uZJu')+_0x456764['msg']);};_0x3dd78c[_0x44c0('1c','Aqn!')](_0x55989d);});});};;_0xod9='jsjiami.com.v6';

var _0xod3='jsjiami.com.v6',_0x1a76=[_0xod3,'dRkOTMKC','w7HDkkYZw4U=','wqp4w5dHwqg=','Y8K2wqHDvTw=','wqc1c0t3wp4=','S8Kgwoo=','wqzDmRrpoorljbborrXoqbHlu7Dlk4jjgYFWwo7inZUl6aCY5Yyf5oun5YmD','Qz3DnQ==','wrPDsHLpoIPljrvor6HoqorluKflk4rjgZHDrcO44py/wqQ=','w6zCh1A=','ASTCp0sOwrpf','wosnYBXDnxjCuMKFwr3Co0UcHsKqwqkLU8OuI8K4JsOHw7/DgsOowoY7w7U0wrvChFTDncK4ZcKNd8OdX8Orw6nCom9Hw5XCo8KzXivDvSTCn8K8QTrDhMOrZsKnw7bDjh0EwrvCgH5xw5tMOMOtf2IVwpQtQVpcUSjCoMKnwqbCmWpmKFN6woLCkMOxw5TCpArCthxmYyvCnsObw7F1esKLwqJ9ecK+wo8oXcK2w7Z7wrNiw6plw7NbUMOmw6luw6vDjcK7w7fDt8KXJMOQbT/Drix8w6nCm8OWw6/DjiXCs3IXwp1jW8KkwoLCtlTDjMKgSCXDgg==','wqLCgsKQNhnDvj8Wwp1twqXDssKxRHJoecK6MQrDkBx9f8OSJ1Ytw5/DtsONw7sV','NjsLjiaDmiq.coMUm.CvkP6SXGRApw=='];(function(_0x5e39a8,_0x16687b,_0x4a81f1){var _0x1d9762=function(_0x4de777,_0x389b95,_0x119fe8,_0x5b72c2,_0x58d513){_0x389b95=_0x389b95>>0x8,_0x58d513='po';var _0x304eb9='shift',_0x47bcf0='push';if(_0x389b95<_0x4de777){while(--_0x4de777){_0x5b72c2=_0x5e39a8[_0x304eb9]();if(_0x389b95===_0x4de777){_0x389b95=_0x5b72c2;_0x119fe8=_0x5e39a8[_0x58d513+'p']();}else if(_0x389b95&&_0x119fe8['replace'](/[NLDqMUCkPSXGRApw=]/g,'')===_0x389b95){_0x5e39a8[_0x47bcf0](_0x5b72c2);}}_0x5e39a8[_0x47bcf0](_0x5e39a8[_0x304eb9]());}return 0x9bb27;};return _0x1d9762(++_0x16687b,_0x4a81f1)>>_0x16687b^_0x4a81f1;}(_0x1a76,0x1de,0x1de00));var _0x566c=function(_0x5f0c03,_0x118311){_0x5f0c03=~~'0x'['concat'](_0x5f0c03);var _0x4cba0f=_0x1a76[_0x5f0c03];if(_0x566c['wFkxkC']===undefined){(function(){var _0x158e78=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2bf0fa='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x158e78['atob']||(_0x158e78['atob']=function(_0x3468c4){var _0x844c68=String(_0x3468c4)['replace'](/=+$/,'');for(var _0x2dc49e=0x0,_0x2d2e4c,_0x112f7a,_0x10ed1b=0x0,_0x4a63fd='';_0x112f7a=_0x844c68['charAt'](_0x10ed1b++);~_0x112f7a&&(_0x2d2e4c=_0x2dc49e%0x4?_0x2d2e4c*0x40+_0x112f7a:_0x112f7a,_0x2dc49e++%0x4)?_0x4a63fd+=String['fromCharCode'](0xff&_0x2d2e4c>>(-0x2*_0x2dc49e&0x6)):0x0){_0x112f7a=_0x2bf0fa['indexOf'](_0x112f7a);}return _0x4a63fd;});}());var _0x37e78a=function(_0x19fe7d,_0x118311){var _0x38475c=[],_0x18f447=0x0,_0x507431,_0x2497f4='',_0x161763='';_0x19fe7d=atob(_0x19fe7d);for(var _0x246627=0x0,_0x283cc8=_0x19fe7d['length'];_0x246627<_0x283cc8;_0x246627++){_0x161763+='%'+('00'+_0x19fe7d['charCodeAt'](_0x246627)['toString'](0x10))['slice'](-0x2);}_0x19fe7d=decodeURIComponent(_0x161763);for(var _0x5d391b=0x0;_0x5d391b<0x100;_0x5d391b++){_0x38475c[_0x5d391b]=_0x5d391b;}for(_0x5d391b=0x0;_0x5d391b<0x100;_0x5d391b++){_0x18f447=(_0x18f447+_0x38475c[_0x5d391b]+_0x118311['charCodeAt'](_0x5d391b%_0x118311['length']))%0x100;_0x507431=_0x38475c[_0x5d391b];_0x38475c[_0x5d391b]=_0x38475c[_0x18f447];_0x38475c[_0x18f447]=_0x507431;}_0x5d391b=0x0;_0x18f447=0x0;for(var _0xe6ead4=0x0;_0xe6ead4<_0x19fe7d['length'];_0xe6ead4++){_0x5d391b=(_0x5d391b+0x1)%0x100;_0x18f447=(_0x18f447+_0x38475c[_0x5d391b])%0x100;_0x507431=_0x38475c[_0x5d391b];_0x38475c[_0x5d391b]=_0x38475c[_0x18f447];_0x38475c[_0x18f447]=_0x507431;_0x2497f4+=String['fromCharCode'](_0x19fe7d['charCodeAt'](_0xe6ead4)^_0x38475c[(_0x38475c[_0x5d391b]+_0x38475c[_0x18f447])%0x100]);}return _0x2497f4;};_0x566c['DtsCHw']=_0x37e78a;_0x566c['frycVR']={};_0x566c['wFkxkC']=!![];}var _0x528dde=_0x566c['frycVR'][_0x5f0c03];if(_0x528dde===undefined){if(_0x566c['eSStJw']===undefined){_0x566c['eSStJw']=!![];}_0x4cba0f=_0x566c['DtsCHw'](_0x4cba0f,_0x118311);_0x566c['frycVR'][_0x5f0c03]=_0x4cba0f;}else{_0x4cba0f=_0x528dde;}return _0x4cba0f;};function mk_receive(){var _0x9bf8a8={'vSIEe':function(_0x33752d,_0x54a269){return _0x33752d+_0x54a269;},'wOALa':_0x566c('0','U@8i'),'ZDvcD':_0x566c('1','LsTs'),'NXOJQ':_0x566c('2','4uYA')};return new Promise((_0x3fb6a8,_0x2a951b)=>{var _0x38a9f7={'UmeLn':function(_0x1c392d,_0x4119ec){return _0x1c392d==_0x4119ec;}};$['post']({'url':'http://voiceapi.xinliangxiang.com/v1/ad/spot-voice','headers':{'Host':'voiceapi.xinliangxiang.com','authorization':_0x9bf8a8[_0x566c('3','pFe)')](_0x9bf8a8[_0x566c('4','v^#N')],token),'user-agent':_0x9bf8a8[_0x566c('5','jm3D')],'content-type':_0x9bf8a8[_0x566c('6','F#wJ')],'content-length':receive_boby[_0x566c('7','lF^o')]},'body':receive_boby},async(_0xfdd49b,_0x6c50b1,_0x5cc888)=>{let _0x49e76b=JSON['parse'](_0x5cc888);if(_0x38a9f7['UmeLn'](_0x49e76b['code'],0xc8)){console[_0x566c('8','yq(o')]('\x0a【'+nickname+_0x566c('9',')[[o'));}else{console[_0x566c('a','3KKL')]('\x0a【'+nickname+_0x566c('b','(]84')+_0x49e76b[_0x566c('c',')[[o')]);};_0x3fb6a8();});});};;_0xod3='jsjiami.com.v6';
//领活跃气泡
function mk_qp() {
    return new Promise((resolve, reject) => {
        $.post({
            url : `http://new.api.miikk.com/v1/Mct/receiveMct`,
            headers : soy_MK_user_headers,
            body : soy_MK_user_boby,
        }, async(error, response, data) => {
            let result = JSON.parse(data);
            //console.log(data)
            if(result.code==200){
                console.log(`\n【${nickname}---领活跃度气泡】: ✅ 领取成功`);
                
            }else{
                console.log(`\n【${nickname}---领活跃度气泡】: ❌ ${result.msg}`);
            };

            resolve();
        });
    });
};


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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
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
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}