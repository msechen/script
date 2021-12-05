/*

软件名称:链萌优选

项目注册地址(微信打开):https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABOSA9,lmyxbox-android#wechat_redirect

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

soy_lmyx_data
#抓包时的请求头上的token


选填变量
soy_lmyx_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 换行 隔开

v2p重写配置如下(不一定行,不能一定不行):

REWRITE 中的 匹配链接（正则表达式）
https://v3.sdk.haowusong.com/api/box/wallet/info 

REWRITE 中的 重写方式
app_lmyx.js

MITM 中的 解析域名
v3.sdk.haowusong.com

cron "3 0,9,17 * * *"

*/


const $ = new Env('链萌优选');
const notify = $.isNode() ? require('./sendNotify') : '';


function _0x54d6(_0x102b7c,_0x7720e7){const _0x569875=_0x5698();return _0x54d6=function(_0x54d6d4,_0x3b14f2){_0x54d6d4=_0x54d6d4-0x15a;let _0x50c5c2=_0x569875[_0x54d6d4];return _0x50c5c2;},_0x54d6(_0x102b7c,_0x7720e7);}const _0x5cac9c=_0x2932;(function(_0x50572a,_0x698808){const _0xc592f8=_0x2932,_0x5a8a72=_0x54d6,_0x6474b2=_0x1e7b,_0x2b9942=_0x50572a();while(!![]){try{const _0x55160f=-parseInt(_0x6474b2('0x1e5'))/0x1+-parseInt(_0x5a8a72('0x168'))/0x2*(parseInt(_0x6474b2(0x1ac))/0x3)+-parseInt(_0x5a8a72('0x198'))/0x4*(parseInt(_0x6474b2(0x1b8))/0x5)+-parseInt(_0xc592f8('0x1e2','M1N('))/0x6*(parseInt(_0x6474b2('0x1d8'))/0x7)+-parseInt(_0xc592f8('0x16d',')HDb'))/0x8+-parseInt(_0xc592f8('0x169','hm^d'))/0x9+parseInt(_0x6474b2(0x1ce))/0xa*(parseInt(_0xc592f8(0x199,'ii!s'))/0xb);if(_0x55160f===_0x698808)break;else _0x2b9942['push'](_0x2b9942['shift']());}catch(_0x2e9f8d){_0x2b9942['push'](_0x2b9942['shift']());}}}(_0x5698,0x9eda6));let app_soy_lmyx_data=[],app_soy_lmyx_UA=[];!(async()=>{const _0x40d764=_0x54d6,_0x395acb=_0x1e7b,_0x2e6814=_0x2932;typeof $request!==_0x2e6814('0x1a4','P4GU')&&await Get_data();if($[_0x2e6814(0x190,'wVn1')]()){if(!process['env'][_0x395acb(0x16f)]){console['log']('\x0a【'+$[_0x2e6814('0x1c3','dJzD')]+_0x2e6814('0x162','%zzg'));return;}if(process[_0x395acb(0x1c7)][_0x395acb('0x16f')]&&process[_0x40d764('0x187')][_0x395acb('0x16f')][_0x395acb(0x18f)]('@')>-0x1)app_soy_lmyx_data=process[_0x40d764('0x187')]['soy_lmyx_data'][_0x395acb('0x17a')]('@');else{if(process[_0x2e6814(0x1ae,'0c19')][_0x395acb(0x16f)]&&process['env'][_0x2e6814(0x167,'4#@v')][_0x395acb(0x18f)]('\x0a')>-0x1)app_soy_lmyx_data=process[_0x395acb('0x1c7')][_0x2e6814('0x179','GX!T')][_0x2e6814('0x15b',')HDb')]('\x0a');else process[_0x2e6814('0x1a9','u1IZ')][_0x2e6814(0x1b3,'M1N(')]&&process[_0x395acb(0x1c7)][_0x40d764('0x171')][_0x2e6814('0x1c8','4#@v')]('#')>-0x1?app_soy_lmyx_data=process[_0x395acb(0x1c7)][_0x40d764(0x171)][_0x40d764(0x1b5)]('#'):app_soy_lmyx_data=process[_0x40d764(0x187)][_0x40d764(0x171)]['split']();};}else{if(!$[_0x395acb('0x161')](_0x2e6814(0x189,'UhGi'))){console[_0x2e6814('0x1c6','IWom')]('\x0a【'+$[_0x40d764(0x1c4)]+_0x2e6814(0x15d,'$!D&'));return;}if($[_0x40d764(0x19b)](_0x395acb(0x16f))&&$['getdata'](_0x395acb(0x16f))[_0x40d764('0x1ab')]('@')>-0x1)app_soy_lmyx_data=$['getdata'](_0x395acb('0x16f'))['split']('@');else{if($['getdata'](_0x40d764(0x171))&&$[_0x40d764('0x19b')](_0x40d764('0x171'))[_0x40d764(0x1ab)]('\x0a')>-0x1)app_soy_lmyx_data=$[_0x395acb(0x161)](_0x40d764('0x171'))['split']('\x0a');else $['getdata'](_0x40d764('0x171'))&&$['getdata'](_0x40d764(0x171))[_0x395acb(0x18f)]('#')>-0x1?app_soy_lmyx_data=$['getdata'](_0x2e6814(0x19e,'1kr@'))[_0x395acb(0x17a)]('#'):app_soy_lmyx_data=$['getdata'](_0x2e6814('0x1be','hm^d'))[_0x395acb('0x17a')]();};}console['log'](_0x40d764('0x188')+new Date(new Date()[_0x2e6814(0x175,'qiO*')]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x395acb(0x18d)]()+'\x20===\x0a'),console[_0x395acb(0x177)](_0x40d764(0x17d)+app_soy_lmyx_data[_0x40d764('0x18c')]+_0x2e6814('0x1d6','kqQ3')),subTitle='';for(i=0x0;i<app_soy_lmyx_data['length'];i++){soy_lmyx_data=app_soy_lmyx_data[i][_0x2e6814(0x1e8,'J#sS')]('&'),soy_lmyx_token=soy_lmyx_data[0x0],soy_lmyx_version=soy_lmyx_data[0x1],soy_lmyx_UA=soy_lmyx_data[0x2],!soy_lmyx_UA&&(soy_lmyx_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'),$[_0x395acb(0x1dd)]=i+0x1,console['log'](_0x395acb('0x1e6')+$[_0x2e6814('0x1af','IWom')]+_0x2e6814('0x1a5','GX!T')),await implement();};notify&&(subTitle&&await notify['sendNotify']($[_0x40d764('0x1c4')],subTitle));})()['catch'](_0x2412ba=>$['logErr'](_0x2412ba))['finally'](()=>$[_0x5cac9c('0x1dc','oE2I')]());function Get_data(){const _0xe7502d=_0x54d6,_0x4ea7fd=_0x1e7b,_0x4d0a7f=_0x5cac9c;if($request['url'][_0x4d0a7f(0x172,'2r6R')](_0x4d0a7f('0x1b0','HTJG'))>-0x1){const _0x2f21e7=$request[_0x4d0a7f('0x1cb','b84g')]['token'];let _0x408dda=$[_0x4ea7fd(0x161)](_0x4ea7fd(0x1c0));if(!_0x408dda){if(_0x2f21e7)$[_0x4ea7fd(0x1da)](_0x2f21e7,_0xe7502d(0x171));}else{if(_0x2f21e7)$[_0x4ea7fd(0x1da)](_0x2f21e7,_0x408dda+_0x4ea7fd('0x15e'));}const _0x1b458f=$request['headers'][_0xe7502d(0x191)];if(_0x1b458f)$[_0x4ea7fd(0x1da)](_0x1b458f,'soy_lmyx_UA');}}async function implement(){const _0x50c523=_0x54d6,_0xfd908e=_0x1e7b,_0x487a3f=_0x5cac9c;host=_0x487a3f('0x1ca','ii!s'),console[_0xfd908e('0x177')](_0x50c523('0x19a')+$['index']+'\x20个账号任务】'),await soy_lmyx_tasklist();}function soy_lmyx_tasklist(){const _0x371f87=_0x54d6,_0x5def36=_0x1e7b;let _0x2f9a06=Get_request(_0x5def36(0x1a1)+soy_lmyx_token+_0x5def36(0x1d3)+soy_lmyx_version+_0x371f87(0x1cc));return new Promise((_0x47698f,_0x44af81)=>{const _0x3b2372=_0x2932;$[_0x3b2372(0x19d,'IWom')](_0x2f9a06,async(_0x56a9a6,_0x550ae2,_0x5f2a26)=>{const _0x3315d3=_0x1e7b,_0x266701=_0x54d6,_0x6acd87=_0x3b2372;try{if(_0x56a9a6)console[_0x6acd87(0x1e0,'kqQ3')](_0x266701('0x1d4')+$[_0x266701(0x1bf)]+'\x20任务列表】:\x20网络请求失败'),subTitle+=_0x6acd87(0x1d2,'A#[T')+$[_0x3315d3(0x1dd)]+'\x20任务列表】:\x20网络请求失败';else{let _0x1710c1=JSON[_0x6acd87('0x17f','#iRi')](_0x5f2a26);if(_0x1710c1['code']==0x0){is_sign=_0x1710c1['data']['is_sign'],is_browse=_0x1710c1[_0x6acd87(0x18e,'UhGi')][_0x3315d3(0x1b9)],look_AD=_0x1710c1[_0x266701('0x1a7')][_0x3315d3('0x15f')];is_sign==0x0&&await soy_lmyx_sign();is_browse==0x0&&await soy_lmyx_browse();for(let _0x3b60d3=0x0;_0x3b60d3<0x5;_0x3b60d3++){await soy_lmyx_video_ad();let _0x22ba54=Math[_0x6acd87('0x185','$!D&')](Math['random']()*(0x7530-0x61a8+0x3e8)+0x61a8);await $[_0x6acd87(0x174,'(ry)')](_0x22ba54);}await soy_lmyx_exchange(),await soy_lmyx_shareholder();}else console[_0x3315d3(0x177)](_0x6acd87('0x192','b84g')+$[_0x266701(0x1bf)]+_0x3315d3('0x1e1'));}}catch(_0x5c620f){console[_0x6acd87('0x1cf',')HDb')](_0x5c620f,_0x550ae2);}finally{_0x47698f();}});});}function soy_lmyx_browse(){const _0x30e1ed=_0x54d6,_0x34839a=_0x5cac9c;let _0x46ccc7=Get_request(_0x34839a('0x1b2','(ry)')+soy_lmyx_token+_0x30e1ed('0x16b')+soy_lmyx_version+_0x34839a(0x184,'1n3]'));return new Promise((_0x13829b,_0x2ef00f)=>{const _0x3e81d8=_0x1e7b;$[_0x3e81d8(0x16e)](_0x46ccc7,async(_0x468983,_0x49117e,_0x72bf0a)=>{const _0x325e89=_0x3e81d8,_0x5d2793=_0x2932,_0xcfac07=_0x54d6;try{if(_0x468983)console[_0xcfac07(0x17b)](_0x5d2793(0x1e3,'$!D&')+$[_0xcfac07(0x1bf)]+_0x5d2793(0x194,'P8@U')),subTitle+=_0x5d2793(0x1bd,'1n3]')+$[_0x325e89('0x1dd')]+'\x20任务列表】:\x20网络请求失败';else{let _0x202a68=JSON['parse'](_0x72bf0a);_0x202a68['code']==0x0?console[_0x5d2793(0x1d9,'w5f3')]('\x0a【soy脚本提示---账号\x20'+$[_0x325e89(0x1dd)]+_0x325e89('0x1bc')+_0x202a68['msg']):console[_0x5d2793(0x1b6,'@9N0')](_0xcfac07(0x1d4)+$['index']+_0xcfac07('0x163')+_0x202a68[_0x325e89(0x15c)]);}}catch(_0x2cf88f){console[_0x325e89(0x177)](_0x2cf88f,_0x49117e);}finally{_0x13829b();}});});}function soy_lmyx_sign(){const _0x12b572=_0x5cac9c,_0xefb077=_0x54d6;let _0x3cd049=Get_request(_0xefb077('0x1aa')+formatDate()+_0x12b572('0x1cd','d[H#')+soy_lmyx_token+'&_version='+soy_lmyx_version+_0x12b572(0x1ba,'kqQ3'));return new Promise((_0x41fbfe,_0x1f69b0)=>{const _0x1d9cda=_0xefb077;$[_0x1d9cda('0x19f')](_0x3cd049,async(_0x46454b,_0x2bd932,_0x2aead6)=>{const _0x5282eb=_0x1d9cda,_0x252a8a=_0x2932,_0x2f8d9=_0x1e7b;try{if(_0x46454b)console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x2f8d9(0x1dd)]+_0x252a8a('0x1c1','K5Mx')),subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x2f8d9(0x1dd)]+_0x5282eb('0x1d1');else{let _0x25c357=JSON[_0x5282eb('0x176')](_0x2aead6);_0x25c357[_0x252a8a(0x1df,'A#[T')]==0x0?console['log'](_0x252a8a('0x164','(ry)')+$['index']+_0x252a8a(0x1bb,'w5f3')+_0x25c357['msg']):console[_0x252a8a('0x1b4','#iRi')](_0x5282eb(0x1d4)+$['index']+_0x5282eb('0x1b1')+_0x25c357[_0x5282eb(0x1de)]);}}catch(_0x1229ed){console[_0x5282eb(0x17b)](_0x1229ed,_0x2bd932);}finally{_0x41fbfe();}});});}function _0x5698(){const _0x79a3a=['WQ4fkW','ios7U+wkOEwiL+IHQooaKtOG6k+75y+w5AsX6lsLlowpR+IdVxrVA2vU5BEY6l+h5PYF','W7ddNaJdMbe/z8kai3TcWP8E','rUoaTWBcQW3OHQ/MNkhMJ47NPiP6FSoq6lE65y+/WQG','W6KHWOFdPG','mtGYnJu0ChzsELfJ','cUw8GowNI+oaKoESRca','WQRdUZBcLJddVSo/smo4ofpcN8o2sSondCojWPdcJcVdRKpdPgxdHftdVY1UlSkaAua','eJBcRSkfWPa','hIpdGSoDWPK','W7FcGmoDk8kb','BxnN','44gD77Y95P2F5AkV5yET55Mn5BQz5y+g6yE/DYdcKSkLv8oKpNNcJmovW5NdHbtdPa','i3nVEv9SBxL4x2rHDge','Bg9VA192AwrLB19Hza','idmv','z2v0zgf0yq','44kc77635PYG5AoH5ysQ55Q15BUg5y2W6ysKW51gaSoeW4ddQmo3pKBcKHZdJSkyFW','\x20任务列表】:\x20','W7/JGzRcTSoDWOtOH6JMNypMJj3NPRdcTbaS6lAL5y6xba','\x20领分红】:\x20网络请求失败','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','DCkvW4BdTKxdGvWNnghdJrBdKq','2rXwPpm','W6RcMComWPJdR3KXWPyBl0yfwcK','CW1H','&_version=','jL9WBgf0zM9YBt13Ea','WRFdHmkaDmofWPGpuKFcHSkbW6i','z2v0','C295x2XTExHFzgf0yq','Ea4Wl8oRjCkvBCkdda','soy_lmyx_data','W4r5AmktfCo8W6K','\x20兑换通行证】:\x20网络请求失败','WOiRWQZdHG','W4JcRmoBW6nSFmoZ','parse','Bg9N','iowfKEAnOUMaMUIHJoIVGEoaKtOG','e8oJW414cxuMDSk/W65flCk1','C3bSAxq','log','WOdJGz7cKmoSWPBOH7xMNBtMJytNP7ZcMColvEI1HEwmVH4','===【共\x20','WQtdNSkjaCk0u3BdL8o6W4q','imo0W4DRW4e','zmo8lq','o8kJFCohtt7dKSkulLFdNq','WPxdUCoJWQWs','WRHEsXO','W5iqiriMcmk5hSoyW6tcRSotW60','kKSAWQSg','ioINGUECI+w5V+wrIUoaKtOG','env','\x0a===\x20脚本执行\x20-\x20北京时间：','Ba1/W7lcR8oqDCkUWPxcTmouFh4','z2v0rNvSBfLLyxi','WPpJG7XWbCkr6iAD5P6N5O2R56sOW7xcUCo26lEg5yYweW','length','Dg9mB2nHBgvtDhjPBMC','EWnYW4W','Aw5KzxHpzG','W51bCKFdQgq','user-agent','rUobJafiqEIfUoAFOUAoHUEKI8k1EcFOT6FLJOz6','WQRdMdjCW5JcV8oBW59bWOJdSmkI','W7VKUj/LIBlLIi7OO6dJG6mqWP3NVP3NUOROROJMS5VLPPNOT60','W6SHrW','nZe0mde3nef3Du9Rua','y29Kzq','2228XAESZf','cSk2WPLRzmoLCCkDW5fXpa','\x0a开始【第\x20','getdata','z3PPCcXJB21WCMvZCYXICIXKzwzSyxrL','W68Baa','AeJcJ3jrW74jeXNdT8o6tb0','get','ioMIHUwiHUE6OUoaKtOG572r57UC6k+35Rgc5AsX6lsL','C3rVCMvFAwq9mszYpwfWAs9ZAgfYzwHVBgrLCI9PBMrLEc9IB251CY1PBMrLEczHy2nLC3nFDg9Rzw49','store_id=1&r=api/shareholder/index/look-video-ad&video_type=0&access_token=','utf-8','t8oEFmoGW6PqW6PfWQW','qos6PUI2KUwpKos6NUwkUEobJG','getDate','data','\x20领分红】:\x20','W68GWPu','store_id=1&r=api/integralmall/integralmall/register&today=','indexOf','ntm5n05LC251sW','mNjyD1bWBq','n08z','W6eqemoJfW','W6pdSCkws8kKt2C','\x20签到】:\x20','WOy+WQRdGmkyWQ0gWQNcT8kOg3pcVGfuCWZdOXn3W7VcGmo4eLZdRmkEW77cQ8ots8kGdNvCuSkfs8okiGbJWQegW5CCW6XLW4z2WQ7cO24Ik8oEW7zIW6C7WO4','WRtcGKxcT0XLkSk5c2PSWOaV','pmo6W5i','split','xqxcOG','z2v0tw9UDgG','nZyZnwjpvuLxCq','AxnFyNjVD3nL','W6q1pmoeW7JcJCofamkTWPdcMsxdPG','W6VNR7xLIBBJG6TJWR0','ios7U+wkOEwiL+IHQooaKtOG','W77JGz8Iet7OHABMN7pMJQhNPPdcPmk+WONOTRpLJiul','WQJdH8keW7hcScD5W5WTkMOgsW','index','C295x2XTExHFDg9LA24','BEETG+wiUEoaICkFyoE+T+E7N+ISGEAWHEwNLEI1SG','WPJdV8kCWOjNxSodb13cLa','zSoYj8ku','name','WQxJG5NdNmoyFoIeI+AEUUAoNUEKSmoidLZOT77LJQuu','W6qreW','zw52','B8kuW5VdJfhdO0m','store_id=1&r=api/shareholder/index/look-video-ad&video_type=1&access_token=','u8o2W5uSjCksfSoLW4XslSonDxC9emkzWQD4WPXqCKC+WRldH8oTjhXxWOLEW7LXW5HJ','jdKtq10qWR0','&_platform=wx','pNieW4DFWPnJjWLeW47dMSoYW7C','mZa3nJbxwe1UD3u','W6JcN8ow','rSotW4rlbgW5yCksW6CzlSkS','\x20签到】:\x20网络请求失败','W6VJGzpcQuj46isG5P2x5O2456EQWQuuyEI0TEwmVSoO','jL92zxjZAw9Upq','\x0a【soy脚本提示---账号\x20','11163312iaMwrv','W6lKUydOTARLJz/JGOJdHmkEuSov','mtq4nZjnsfDQvgu','n0rArenICa','WQFdPce','C2v0zgf0yq','182654pvRzQc','W6GRxqu','Aw5KzxG','msg','WOiSWR5i'];_0x5698=function(){return _0x79a3a;};return _0x5698();}function soy_lmyx_video_ad(){const _0x475b79=_0x5cac9c,_0x22c5e6=_0x54d6;let _0x1ba481=Get_request(_0x22c5e6(0x1a2)+soy_lmyx_token+'&_version='+soy_lmyx_version+_0x475b79(0x1d0,'GX!T'));return new Promise((_0x4c7deb,_0x586c5d)=>{const _0x599d77=_0x22c5e6;$[_0x599d77('0x19f')](_0x1ba481,async(_0x360ae0,_0x1f7de7,_0x4a836a)=>{const _0x1707e8=_0x2932,_0x1e03ae=_0x599d77,_0x240024=_0x1e7b;try{if(_0x360ae0)console[_0x240024(0x177)](_0x240024('0x166')+$[_0x1e03ae('0x1bf')]+'\x20观看广告】:\x20网络请求失败'),subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20观看广告】:\x20网络请求失败';else{let _0x22f1b4=JSON['parse'](_0x4a836a);_0x22f1b4[_0x1707e8('0x183','!c[)')]==0x0?console[_0x1707e8('0x16a','UhGi')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x240024(0x186)+_0x22f1b4['msg']):console[_0x240024(0x177)]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x240024('0x186')+_0x22f1b4[_0x240024('0x15c')]);}}catch(_0x35d84b){console['log'](_0x35d84b,_0x1f7de7);}finally{_0x4c7deb();}});});}function soy_lmyx_exchange(){const _0x46e077=_0x54d6;let _0x2b25aa=Get_request('store_id=1&r=api/shareholder/index/bonus-quota-exchange&access_token='+soy_lmyx_token+'&_version='+soy_lmyx_version+_0x46e077('0x1cc'));return new Promise((_0x535c8f,_0x23b4a9)=>{$['get'](_0x2b25aa,async(_0x2f7096,_0x1181a5,_0x2c3b5c)=>{const _0x1ed404=_0x2932,_0x526f41=_0x1e7b,_0xe56f3c=_0x54d6;try{if(_0x2f7096)console[_0xe56f3c('0x17b')](_0x526f41('0x166')+$[_0xe56f3c('0x1bf')]+_0xe56f3c(0x173)),subTitle+=_0x526f41('0x166')+$[_0xe56f3c(0x1bf)]+_0xe56f3c(0x173);else{let _0x76470c=JSON[_0x1ed404('0x15a','SHtL')](_0x2c3b5c);_0x76470c[_0x1ed404(0x1e4,'u1IZ')]==0x0?console[_0x1ed404(0x180,'dJzD')](_0x1ed404('0x1c5','qiO*')+$['index']+_0x526f41('0x178')+_0x76470c['msg']):console[_0x526f41(0x177)](_0x526f41(0x166)+$[_0xe56f3c('0x1bf')]+_0x526f41('0x178')+_0x76470c[_0x526f41(0x15c)]);}}catch(_0x395f92){console[_0x526f41('0x177')](_0x395f92,_0x1181a5);}finally{_0x535c8f();}});});}function soy_lmyx_shareholder(){const _0x21c3e9=_0x1e7b,_0x5d87f4=_0x5cac9c,_0x477f51=_0x54d6;let _0x4c771e=Get_request(_0x477f51('0x1c9')+soy_lmyx_token+_0x5d87f4('0x17e','HTJG')+soy_lmyx_version+_0x21c3e9('0x16c'));return new Promise((_0x2d9799,_0x475b56)=>{const _0x26455b=_0x5d87f4;$[_0x26455b(0x195,'oE2I')](_0x4c771e,async(_0x237588,_0x139fc7,_0x3c6d31)=>{const _0x38fdf5=_0x1e7b,_0x55b01a=_0x54d6,_0x598536=_0x26455b;try{if(_0x237588)console['log'](_0x598536('0x17c','u1IZ')+$[_0x55b01a('0x1bf')]+_0x55b01a(0x165)),subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x38fdf5('0x1dd')]+_0x38fdf5(0x1a0);else{let _0x46d2d6=JSON['parse'](_0x3c6d31);_0x46d2d6[_0x38fdf5(0x197)]==0x0?console[_0x598536(0x160,'b84g')](_0x38fdf5('0x166')+$[_0x38fdf5('0x1dd')]+_0x55b01a('0x1a8')+_0x46d2d6[_0x55b01a(0x1de)]):console[_0x55b01a('0x17b')](_0x598536('0x18b','v6#k')+$[_0x598536(0x182,'UiB9')]+'\x20领分红】:\x20'+_0x46d2d6['msg']);}}catch(_0x5431f3){console[_0x38fdf5(0x177)](_0x5431f3,_0x139fc7);}finally{_0x2d9799();}});});}function Get_request(_0x4fffea){const _0x1fd9f7=_0x1e7b,_0x1e2532=_0x5cac9c,_0x58e715=_0x54d6;return{'url':''+host+_0x4fffea,'headers':{'Host':'www.lmyx.shop','Connection':'keep-alive','charset':_0x58e715('0x1a3'),'User-Agent':soy_lmyx_UA,'content-type':_0x1e2532('0x1e7','w5f3'),'Accept-Encoding':_0x1fd9f7('0x19c')}};}function _0x1e7b(_0x102b7c,_0x7720e7){const _0x569875=_0x5698();return _0x1e7b=function(_0x54d6d4,_0x3b14f2){_0x54d6d4=_0x54d6d4-0x15a;let _0x50c5c2=_0x569875[_0x54d6d4];if(_0x1e7b['KjTLza']===undefined){var _0x4fef4c=function(_0x1e7b83){const _0x31046f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3a945c='',_0x56425f='';for(let _0x2928d2=0x0,_0x51ab6f,_0x1289ae,_0x293283=0x0;_0x1289ae=_0x1e7b83['charAt'](_0x293283++);~_0x1289ae&&(_0x51ab6f=_0x2928d2%0x4?_0x51ab6f*0x40+_0x1289ae:_0x1289ae,_0x2928d2++%0x4)?_0x3a945c+=String['fromCharCode'](0xff&_0x51ab6f>>(-0x2*_0x2928d2&0x6)):0x0){_0x1289ae=_0x31046f['indexOf'](_0x1289ae);}for(let _0x370dcd=0x0,_0x331f46=_0x3a945c['length'];_0x370dcd<_0x331f46;_0x370dcd++){_0x56425f+='%'+('00'+_0x3a945c['charCodeAt'](_0x370dcd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x56425f);};_0x1e7b['cYQnpb']=_0x4fef4c,_0x102b7c=arguments,_0x1e7b['KjTLza']=!![];}const _0x196a1a=_0x569875[0x0],_0x5243e7=_0x54d6d4+_0x196a1a,_0xf2a0a8=_0x102b7c[_0x5243e7];return!_0xf2a0a8?(_0x50c5c2=_0x1e7b['cYQnpb'](_0x50c5c2),_0x102b7c[_0x5243e7]=_0x50c5c2):_0x50c5c2=_0xf2a0a8,_0x50c5c2;},_0x1e7b(_0x102b7c,_0x7720e7);}function _0x2932(_0x102b7c,_0x7720e7){const _0x569875=_0x5698();return _0x2932=function(_0x54d6d4,_0x3b14f2){_0x54d6d4=_0x54d6d4-0x15a;let _0x50c5c2=_0x569875[_0x54d6d4];if(_0x2932['FowblQ']===undefined){var _0x4fef4c=function(_0x31046f){const _0x3a945c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x56425f='',_0x2928d2='';for(let _0x51ab6f=0x0,_0x1289ae,_0x293283,_0x370dcd=0x0;_0x293283=_0x31046f['charAt'](_0x370dcd++);~_0x293283&&(_0x1289ae=_0x51ab6f%0x4?_0x1289ae*0x40+_0x293283:_0x293283,_0x51ab6f++%0x4)?_0x56425f+=String['fromCharCode'](0xff&_0x1289ae>>(-0x2*_0x51ab6f&0x6)):0x0){_0x293283=_0x3a945c['indexOf'](_0x293283);}for(let _0x331f46=0x0,_0x19ac9a=_0x56425f['length'];_0x331f46<_0x19ac9a;_0x331f46++){_0x2928d2+='%'+('00'+_0x56425f['charCodeAt'](_0x331f46)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2928d2);};const _0x1e7b83=function(_0x2816ee,_0x4bbab6){let _0x421c91=[],_0x2412ba=0x0,_0x2f21e7,_0x408dda='';_0x2816ee=_0x4fef4c(_0x2816ee);let _0x1b458f;for(_0x1b458f=0x0;_0x1b458f<0x100;_0x1b458f++){_0x421c91[_0x1b458f]=_0x1b458f;}for(_0x1b458f=0x0;_0x1b458f<0x100;_0x1b458f++){_0x2412ba=(_0x2412ba+_0x421c91[_0x1b458f]+_0x4bbab6['charCodeAt'](_0x1b458f%_0x4bbab6['length']))%0x100,_0x2f21e7=_0x421c91[_0x1b458f],_0x421c91[_0x1b458f]=_0x421c91[_0x2412ba],_0x421c91[_0x2412ba]=_0x2f21e7;}_0x1b458f=0x0,_0x2412ba=0x0;for(let _0x2f9a06=0x0;_0x2f9a06<_0x2816ee['length'];_0x2f9a06++){_0x1b458f=(_0x1b458f+0x1)%0x100,_0x2412ba=(_0x2412ba+_0x421c91[_0x1b458f])%0x100,_0x2f21e7=_0x421c91[_0x1b458f],_0x421c91[_0x1b458f]=_0x421c91[_0x2412ba],_0x421c91[_0x2412ba]=_0x2f21e7,_0x408dda+=String['fromCharCode'](_0x2816ee['charCodeAt'](_0x2f9a06)^_0x421c91[(_0x421c91[_0x1b458f]+_0x421c91[_0x2412ba])%0x100]);}return _0x408dda;};_0x2932['QOJPJh']=_0x1e7b83,_0x102b7c=arguments,_0x2932['FowblQ']=!![];}const _0x196a1a=_0x569875[0x0],_0x5243e7=_0x54d6d4+_0x196a1a,_0xf2a0a8=_0x102b7c[_0x5243e7];return!_0xf2a0a8?(_0x2932['CjHhtr']===undefined&&(_0x2932['CjHhtr']=!![]),_0x50c5c2=_0x2932['QOJPJh'](_0x50c5c2,_0x3b14f2),_0x102b7c[_0x5243e7]=_0x50c5c2):_0x50c5c2=_0xf2a0a8,_0x50c5c2;},_0x2932(_0x102b7c,_0x7720e7);};function formatDate(){const _0x5b324c=_0x54d6,_0x3c1819=_0x1e7b;let _0x4942c3=new Date(),_0x4530fa=_0x4942c3[_0x3c1819(0x18a)](),_0x1aa41c=_0x4942c3[_0x3c1819(0x1b7)]()+0x1,_0x53dbd3=_0x4942c3[_0x5b324c('0x1a6')]();return _0x1aa41c=_0x1aa41c<0xa?'0'+_0x1aa41c:_0x1aa41c,_0x53dbd3=_0x53dbd3<0xa?'0'+_0x53dbd3:_0x53dbd3,_0x4530fa+'/'+_0x1aa41c+'/'+_0x53dbd3;};



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