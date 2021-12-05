/*

软件名称:都爱玩

项目注册地址(微信打开):https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABOSA9,dawbox-android#wechat_redirect

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

soy_daw_token
#抓包时的请求头上的token


选填变量
soy_daw_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 换行 隔开

v2p重写配置如下(不一定行,不能一定不行):

REWRITE 中的 匹配链接（正则表达式）
https://v3.sdk.haowusong.com/api/box/wallet/info 

REWRITE 中的 重写方式
app_daw.js

MITM 中的 解析域名
v3.sdk.haowusong.com

cron "3 0,9,17 * * *"

*/


const $ = new Env('都爱玩');
const notify = $.isNode() ? require('./sendNotify') : '';
function _0x343e(_0x241ed2,_0xb04524){const _0x2727a0=_0x2727();return _0x343e=function(_0x343e31,_0x4641ac){_0x343e31=_0x343e31-0x194;let _0x27717d=_0x2727a0[_0x343e31];return _0x27717d;},_0x343e(_0x241ed2,_0xb04524);}function _0x3d77(_0x241ed2,_0xb04524){const _0x2727a0=_0x2727();return _0x3d77=function(_0x343e31,_0x4641ac){_0x343e31=_0x343e31-0x194;let _0x27717d=_0x2727a0[_0x343e31];if(_0x3d77['zAWpcK']===undefined){var _0x363f6e=function(_0x5c5152){const _0x4c4831='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x111b5b='',_0x221b7d='';for(let _0x32956d=0x0,_0x2d0d25,_0x3d772f,_0x2716c8=0x0;_0x3d772f=_0x5c5152['charAt'](_0x2716c8++);~_0x3d772f&&(_0x2d0d25=_0x32956d%0x4?_0x2d0d25*0x40+_0x3d772f:_0x3d772f,_0x32956d++%0x4)?_0x111b5b+=String['fromCharCode'](0xff&_0x2d0d25>>(-0x2*_0x32956d&0x6)):0x0){_0x3d772f=_0x4c4831['indexOf'](_0x3d772f);}for(let _0x10d90e=0x0,_0xeb298a=_0x111b5b['length'];_0x10d90e<_0xeb298a;_0x10d90e++){_0x221b7d+='%'+('00'+_0x111b5b['charCodeAt'](_0x10d90e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x221b7d);};const _0x25af3d=function(_0x31735e,_0x2c86ed){let _0x47eacb=[],_0x375826=0x0,_0x2ab7ea,_0x408787='';_0x31735e=_0x363f6e(_0x31735e);let _0x56d6a7;for(_0x56d6a7=0x0;_0x56d6a7<0x100;_0x56d6a7++){_0x47eacb[_0x56d6a7]=_0x56d6a7;}for(_0x56d6a7=0x0;_0x56d6a7<0x100;_0x56d6a7++){_0x375826=(_0x375826+_0x47eacb[_0x56d6a7]+_0x2c86ed['charCodeAt'](_0x56d6a7%_0x2c86ed['length']))%0x100,_0x2ab7ea=_0x47eacb[_0x56d6a7],_0x47eacb[_0x56d6a7]=_0x47eacb[_0x375826],_0x47eacb[_0x375826]=_0x2ab7ea;}_0x56d6a7=0x0,_0x375826=0x0;for(let _0x2d537b=0x0;_0x2d537b<_0x31735e['length'];_0x2d537b++){_0x56d6a7=(_0x56d6a7+0x1)%0x100,_0x375826=(_0x375826+_0x47eacb[_0x56d6a7])%0x100,_0x2ab7ea=_0x47eacb[_0x56d6a7],_0x47eacb[_0x56d6a7]=_0x47eacb[_0x375826],_0x47eacb[_0x375826]=_0x2ab7ea,_0x408787+=String['fromCharCode'](_0x31735e['charCodeAt'](_0x2d537b)^_0x47eacb[(_0x47eacb[_0x56d6a7]+_0x47eacb[_0x375826])%0x100]);}return _0x408787;};_0x3d77['IVkiKY']=_0x25af3d,_0x241ed2=arguments,_0x3d77['zAWpcK']=!![];}const _0x3ca6b6=_0x2727a0[0x0],_0x1c7e21=_0x343e31+_0x3ca6b6,_0x3a1182=_0x241ed2[_0x1c7e21];return!_0x3a1182?(_0x3d77['zJBVWK']===undefined&&(_0x3d77['zJBVWK']=!![]),_0x27717d=_0x3d77['IVkiKY'](_0x27717d,_0x4641ac),_0x241ed2[_0x1c7e21]=_0x27717d):_0x27717d=_0x3a1182,_0x27717d;},_0x3d77(_0x241ed2,_0xb04524);}const _0x542d83=_0x343e,_0x5e8a4=_0x3d77,_0x46e24b=_0x25af;function _0x25af(_0x241ed2,_0xb04524){const _0x2727a0=_0x2727();return _0x25af=function(_0x343e31,_0x4641ac){_0x343e31=_0x343e31-0x194;let _0x27717d=_0x2727a0[_0x343e31];if(_0x25af['JTRgFF']===undefined){var _0x363f6e=function(_0x25af3d){const _0x5c5152='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4c4831='',_0x111b5b='';for(let _0x221b7d=0x0,_0x32956d,_0x2d0d25,_0x3d772f=0x0;_0x2d0d25=_0x25af3d['charAt'](_0x3d772f++);~_0x2d0d25&&(_0x32956d=_0x221b7d%0x4?_0x32956d*0x40+_0x2d0d25:_0x2d0d25,_0x221b7d++%0x4)?_0x4c4831+=String['fromCharCode'](0xff&_0x32956d>>(-0x2*_0x221b7d&0x6)):0x0){_0x2d0d25=_0x5c5152['indexOf'](_0x2d0d25);}for(let _0x2716c8=0x0,_0x10d90e=_0x4c4831['length'];_0x2716c8<_0x10d90e;_0x2716c8++){_0x111b5b+='%'+('00'+_0x4c4831['charCodeAt'](_0x2716c8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x111b5b);};_0x25af['DZDjtW']=_0x363f6e,_0x241ed2=arguments,_0x25af['JTRgFF']=!![];}const _0x3ca6b6=_0x2727a0[0x0],_0x1c7e21=_0x343e31+_0x3ca6b6,_0x3a1182=_0x241ed2[_0x1c7e21];return!_0x3a1182?(_0x27717d=_0x25af['DZDjtW'](_0x27717d),_0x241ed2[_0x1c7e21]=_0x27717d):_0x27717d=_0x3a1182,_0x27717d;},_0x25af(_0x241ed2,_0xb04524);}(function(_0x4df92c,_0x2fee68){const _0x98de56=_0x343e,_0x5148df=_0x25af,_0x5b9d4b=_0x3d77,_0x39b954=_0x4df92c();while(!![]){try{const _0x467e76=-parseInt(_0x5b9d4b(0x19f,'A9NU'))/0x1+-parseInt(_0x5148df(0x228))/0x2+parseInt(_0x5b9d4b(0x1d7,'K$zF'))/0x3*(-parseInt(_0x98de56(0x234))/0x4)+parseInt(_0x98de56(0x1c5))/0x5*(parseInt(_0x98de56(0x1da))/0x6)+-parseInt(_0x98de56(0x1a7))/0x7*(-parseInt(_0x5b9d4b(0x205,'z#Cg'))/0x8)+parseInt(_0x98de56(0x209))/0x9+parseInt(_0x5148df(0x1d2))/0xa*(-parseInt(_0x5b9d4b(0x1a2,'*UiL'))/0xb);if(_0x467e76===_0x2fee68)break;else _0x39b954['push'](_0x39b954['shift']());}catch(_0x133ead){_0x39b954['push'](_0x39b954['shift']());}}}(_0x2727,0x39af9));let app_soy_daw_token=[],app_soy_daw_UA=[];!(async()=>{const _0x57dac3=_0x3d77,_0x52bfc7=_0x343e,_0xe72778=_0x25af;typeof $request!==_0xe72778(0x1cb)&&await Get_data();if($[_0x52bfc7(0x204)]()){if(!process[_0xe72778(0x201)][_0x52bfc7(0x1a0)]){console[_0xe72778(0x1f9)]('\x0a【'+$['name']+_0x57dac3(0x1d4,'6FH]'));return;}if(process[_0x57dac3(0x1e1,'QQ*7')]['soy_daw_token']&&process['env'][_0x57dac3(0x1c3,'qL#f')][_0x52bfc7(0x195)]('@')>-0x1)soy_daw_token=process[_0x57dac3(0x19b,'2cto')][_0xe72778(0x212)][_0x57dac3(0x1ad,'3AcI')]('@');else process[_0xe72778(0x201)]['soy_daw_token']&&process[_0xe72778(0x201)][_0x52bfc7(0x1a0)][_0xe72778(0x213)]('\x0a')>-0x1?soy_daw_token=process[_0xe72778(0x201)][_0x52bfc7(0x1a0)]['split']('\x0a'):soy_daw_token=process[_0x57dac3(0x1ac,'$25N')][_0x52bfc7(0x1a0)]['split']();;Object[_0x57dac3(0x20b,'!0HI')](soy_daw_token)['forEach'](_0x375826=>{const _0x400fc9=_0x57dac3;soy_daw_token[_0x375826]&&app_soy_daw_token[_0x400fc9(0x1cc,'QXw$')](soy_daw_token[_0x375826]);;});if(!process['env'][_0x52bfc7(0x19e)])console[_0x52bfc7(0x221)]('\x0a【'+$[_0x57dac3(0x1ce,'6FH]')]+_0x57dac3(0x1ea,'Ma^['));else{if(process[_0x57dac3(0x1d0,'*gF)')][_0xe72778(0x22f)]&&process[_0x57dac3(0x233,'A9NU')][_0x52bfc7(0x19e)]['indexOf']('@')>-0x1)soy_daw_UA=process['env'][_0x52bfc7(0x19e)][_0xe72778(0x1e4)]('@');else process['env'][_0x57dac3(0x1ee,'3FJh')]&&process[_0x57dac3(0x200,'Em9l')][_0x52bfc7(0x19e)][_0x52bfc7(0x195)]('\x0a')>-0x1?soy_daw_UA=process[_0xe72778(0x201)][_0x57dac3(0x215,'[v!]')][_0xe72778(0x1e4)]('\x0a'):soy_daw_UA=process[_0x52bfc7(0x1ca)]['soy_daw_UA'][_0x52bfc7(0x1ba)]();;Object['keys'](soy_daw_UA)[_0xe72778(0x1a5)](_0x2ab7ea=>{const _0x50679f=_0x57dac3;soy_daw_UA[_0x2ab7ea]&&app_soy_daw_UA[_0x50679f(0x1b9,'a^Zg')](soy_daw_UA[_0x2ab7ea]);;});}}else{if(!$[_0xe72778(0x22d)](_0x57dac3(0x1ef,'(d*%'))){console[_0x57dac3(0x1f2,'3FJh')]('\x0a【'+$[_0x57dac3(0x219,'$NO*')]+_0xe72778(0x203));return;}if($[_0x52bfc7(0x1d5)](_0x57dac3(0x223,'a^Zg'))&&$[_0x52bfc7(0x1d5)](_0x52bfc7(0x1a0))[_0x52bfc7(0x195)]('@')>-0x1)app_soy_daw_token=$['getdata'](_0xe72778(0x212))[_0xe72778(0x1e4)]('@');else $[_0x52bfc7(0x1d5)]('soy_daw_token')&&$[_0x57dac3(0x1aa,'wxsZ')]('soy_daw_token')['indexOf']('\x0a')>-0x1?app_soy_daw_token=$[_0x57dac3(0x196,'[v!]')](_0xe72778(0x212))[_0x52bfc7(0x1ba)]('\x0a'):app_soy_daw_token=$[_0x52bfc7(0x1d5)](_0xe72778(0x212))['split']();;if(!$['getdata'](_0xe72778(0x22f)))console[_0xe72778(0x1f9)]('\x0a【'+$[_0x57dac3(0x1d3,'Em9l')]+_0x52bfc7(0x224));else{if($[_0x52bfc7(0x1d5)]('soy_daw_UA')&&$[_0x52bfc7(0x1d5)](_0xe72778(0x22f))[_0x57dac3(0x1e6,'vxJZ')]('@')>-0x1)app_soy_daw_UA=$[_0x57dac3(0x220,'$25N')](_0xe72778(0x22f))[_0x52bfc7(0x1ba)]('@');else $['getdata']('soy_daw_UA')&&$[_0xe72778(0x22d)](_0xe72778(0x22f))[_0x52bfc7(0x195)]('\x0a')>-0x1?app_soy_daw_UA=$[_0x57dac3(0x1a6,'%uAa')](_0xe72778(0x22f))[_0x52bfc7(0x1ba)]('\x0a'):app_soy_daw_UA=$[_0x57dac3(0x1c6,'9)yE')](_0xe72778(0x22f))[_0x57dac3(0x1cd,'z#Cg')]();;}}console[_0x57dac3(0x1c7,'(vR0')](_0x57dac3(0x22e,'XVT]')+new Date(new Date()[_0x57dac3(0x1c1,'3AcI')]()+new Date()[_0x52bfc7(0x235)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xe72778(0x1e3)]()+_0x57dac3(0x1fc,'yC]v')),console[_0x57dac3(0x1be,'vKW*')](_0x57dac3(0x1cf,')Zp[')+app_soy_daw_token['length']+_0x57dac3(0x22c,'c#dy')),subTitle='';for(i=0x0;i<app_soy_daw_token[_0x52bfc7(0x199)];i++){soy_daw_token=app_soy_daw_token[i][_0xe72778(0x1e4)]('#')[0x0],soy_daw_UA=app_soy_daw_UA[i],!soy_daw_UA&&(soy_daw_UA=_0xe72778(0x1e7)),soy_daw_headers={'Host':_0x52bfc7(0x1ec),'user-agent':soy_daw_UA,'token':soy_daw_token,'origin':'https://v3.h5.haowusong.com','x-requested-with':'com.baolai.youqutao','sec-fetch-site':_0x57dac3(0x1c0,'aJKm'),'sec-fetch-mode':_0x57dac3(0x1c8,'3AcI'),'sec-fetch-dest':_0xe72778(0x210)},$[_0x57dac3(0x1a4,'tb*6')]=i+0x1,console[_0xe72778(0x1f9)](_0xe72778(0x211)+$[_0x57dac3(0x1b1,'wxsZ')]+_0xe72778(0x202)),await soy_daw_poollist();};notify&&(subTitle&&await notify['sendNotify']($['name'],subTitle));})()[_0x46e24b(0x1f3)](_0x408787=>$[_0x5e8a4(0x1f8,'2cto')](_0x408787))['finally'](()=>$[_0x542d83(0x1d8)]());function Get_data(){const _0x35ff5e=_0x5e8a4,_0x86bddb=_0x542d83,_0x54a742=_0x46e24b;if($request['url']['indexOf'](_0x54a742(0x1b0))>-0x1){const _0x56d6a7=$request[_0x86bddb(0x1d9)][_0x35ff5e(0x21b,'3AcI')];let _0x2d537b=$[_0x35ff5e(0x232,')Zp[')](_0x35ff5e(0x1a9,'GW]%'));if(!_0x2d537b){if(_0x56d6a7)$['setdata'](_0x56d6a7,_0x35ff5e(0x214,'2cto'));}else{if(_0x56d6a7)$['setdata'](_0x56d6a7,_0x2d537b+_0x54a742(0x22b));}const _0x199bc7=$request[_0x86bddb(0x1d9)][_0x86bddb(0x20d)];if(_0x199bc7)$[_0x35ff5e(0x21c,'c#dy')](_0x199bc7,_0x86bddb(0x19e));}}function soy_daw_poollist(){return new Promise((_0xa1e3c6,_0x14fe1d)=>{$['get']({'url':'https://v3.sdk.haowusong.com/api/channel/integral/pool?channel=dawbox-android','headers':soy_daw_headers},async(_0x4c5b10,_0x478634,_0x3abddc)=>{const _0x2cca8a=_0x343e,_0x48263b=_0x3d77,_0x48df3c=_0x25af;try{let _0x12a708=JSON[_0x48df3c(0x1df)](_0x3abddc);if(_0x12a708['code']==0xc8){ad_num=_0x12a708[_0x48263b(0x19c,'SrkT')][_0x2cca8a(0x194)][_0x48df3c(0x1b3)][0x0][_0x48df3c(0x1f6)],can_num=_0x12a708[_0x48df3c(0x227)][_0x2cca8a(0x1ae)][_0x2cca8a(0x1dd)],integral_num=_0x12a708[_0x48263b(0x230,'tb*6')][_0x48df3c(0x1fa)][_0x48df3c(0x20e)],DBA_num=_0x12a708[_0x48df3c(0x227)]['player'][_0x48df3c(0x1a1)];if(ad_num==0xa){if(can_num==0x1){let _0x2c3f73=Math[_0x2cca8a(0x19a)](_0x12a708[_0x48df3c(0x227)][_0x48263b(0x231,'K$zF')][_0x2cca8a(0x1e9)]/ integral_num)*integral_num;await soy_daw_put(_0x2c3f73);};console[_0x48df3c(0x1f9)]('\x0a【'+$['name']+'---账号\x20'+$[_0x2cca8a(0x1e8)]+_0x48263b(0x1b5,'6sR@')+_0x12a708['data'][_0x48263b(0x19d,'GW]%')]['integral_num']+_0x2cca8a(0x1db)+_0x12a708[_0x48263b(0x1ed,'(vR0')][_0x48263b(0x229,'vxJZ')][_0x48263b(0x1bb,'@gfW')]+_0x48263b(0x216,'vE3N')+_0x12a708['data'][_0x48df3c(0x1fe)]['use_integral_num']),subTitle+='\x0a【'+$['name']+_0x2cca8a(0x22a)+$[_0x48263b(0x1b1,'wxsZ')]+_0x48df3c(0x21e)+_0x12a708['data'][_0x48263b(0x1f5,'pnVk')][_0x2cca8a(0x1e9)]+_0x48263b(0x1b2,'$25N')+_0x12a708[_0x48df3c(0x227)]['player'][_0x48263b(0x237,'K$zF')]+_0x2cca8a(0x1ff)+_0x12a708['data'][_0x2cca8a(0x1ae)][_0x48df3c(0x1fb)];}else{await soy_daw_receive();if(can_num==0x1){let _0x471032=Math[_0x48df3c(0x1fd)](_0x12a708[_0x2cca8a(0x1d1)]['player']['integral_num']/ integral_num)*integral_num;console[_0x48df3c(0x1f9)]('投放'),await soy_daw_put(_0x471032);};};}else console[_0x48263b(0x1b8,'2cto')]('\x0a【'+$[_0x2cca8a(0x1e5)]+_0x48263b(0x20a,'vE3N')+$[_0x48263b(0x1b7,'vKW*')]+_0x48263b(0x1bd,'*$NN'));;}catch(_0xfd3f94){console[_0x48263b(0x1f1,'3AcI')](_0xfd3f94);}finally{_0xa1e3c6();};});});}function _0x2727(){const _0x45ce2f=['e2Wqwq','WRjyAhm7WQy','WQy/rCkCW5Lubq','aCkgAG','8192QTYMLy','getTimezoneOffset','code','WQ9Bz28N','uwVcUubPkmoxBCk1W7JdNCoDWOZdV8kSW7pcLCkhWOWI','WP0klXa+W5BdNur5W5ZcMG','tasks','indexOf','W6hdOXddK8oUCCoW','WOeFoUI0HUwpSCk5','vCkCuX/dUrRdMLCuWQ7dJa','length','floor','W7FcRmoC','C8kycGC','WRjdW6JcLmkmkW','soy_daw_UA','xmoFk8kzW6OOW6pcKuhdU2W','soy_daw_token','Aw50zwDYywXFBNvT','W5CdCmkIz8osW7hdSMlcN0K','EIZcOG','hMmaxCoa','zM9YrwfJAa','kuvWW4NcGmo1WQm','553lSoRsy','error','WRfaW7dcSSknomkyWQZcNSoMsmkrWQ0','WRNcR8ouWPPpW5zW','WP5wuG','W4bUya','FCofW5RcV1O','player','W4G1jmkY5BID5OUR5yU4W4S','yxbPl2jVEa','WRFcPmoeWPTw','WQ8ToWFLJ53MJ7hNJRVPHitPOjFVVla','DMvKAw9FDgfZAW','h8kGb0NcSW','W4NNLOlMIztNIjtMGAVJGA5JDCo/W4y+W43MIPpNMRBcJvhcGUAuKEMhH+++Rq','v8kAuEI2TUwmVb8','e8ozgmo1WRm','W77cRCon','w8k9WPHJ','split','WPnHx0VcSa','WQRMI7lLI5FNUQZLUllJG741W58','WRpKURNLIANLIjBOOABJGl1kv+IVRUwoO+wLGEI1Ra','fSoygW','ls0T6lsM5y+3ia','W5FcQZ42WPlcS8kgW48Y','ACoqW4lcGKFcH2C','WQBdSJyfW54','oJi+j8khjmo4FfpdRmosbmoO','W5ZcQCo8lmk4','73655blCKhY','W4RcISkrxI3cOSok','W6VdKqy','BCoAW4tcPq','ioAkLEwiHUE6OUw4GEoaKtOG5OQv5ywLia','env','Dw5KzwzPBMvK','rf13aa','WRddRYOyW5m','W4jtEKu','W7XNdoodQowhIqa','W68jWQC','data','mJb1BNfQsvC','cCombKG','44k977YO5PY95Agl5yAF55MH5BIH5y+66yEcWPNcSchcMmo7cgrFWO3dR3VdSgio','getdata','WRjaW7RcMq','W7eeoLWoWOBcNKtdIq','done','headers','126iPhOod','\x0a---可提现金额：','y29YCW','can_num','W57cM1lcLLLngXZcKCkfCCkt','CgfYC2u','WOxNU6FNU7VOP6JNNlNLUz7LKyhJG4tcSaRPMiNMNORLUPtML4xcKG','uN99','\x20ms...','Dg9mB2nHBgvtDhjPBMC','C3bSAxq','name','WOeFaCkvzmk0aq','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKidGUmtSGuefslufmmdaGqNvPBgqVsfvbv0vjuefslufmmda7ihD2ksbbChbSzvDLyKTPDc81mZCUmZyGkeTive1mlcbSAwTLieDLy2TVksbwzxjZAw9UlZqUmcbdAhjVBwuVntCUmc4YotG3lJeZmIbnuvfcCM93C2vYlZyUmIbuqLmVmdq0mZa0ig5HBwuGu2fMyxjPlZuZnY4ZnIbnAwnYB01LC3nLBMDLCI82lJCUmY4XmZyWkdb4mJyWnZaZmZmP','index','integral_num','44gk77Y05PYS5Ag15yEz55M05BIf5y6F6yw9WRegjYNcGNWIuw/cMgVdVt7LSAZPUBBOROlLI7xPHii','BMfTzq','v3.sdk.haowusong.com','W6pdNXxdPq','bCkHgNpcR8kvFSkOWPif','uCovlYddGmkcDwO/qWv8bq','WQFMIkVLIAFNUkBLUQFJGQjGWQ7MI4BLH43dJW','ySoAW5e','gSkHba','y2f0y2G','ke9RE23dV8o4m8ox','uXFdHSkkue4','y29TCgXLDgvFBNvT','Ahr0Chm6lY92mY5ZzgSUAgfVD3vZB25NlMnVBs9HCgKVy2HHBM5LBc9PBNrLz3jHBc90yxnRl3jLy2vPDMu','W77cRConsGbG','Bg9N','Cg9VBa','DxnLx2LUDgvNCMfSx251Bq','raPiW5RdKW','zMXVB3i','CgXHEwvY','\x0a---已投DBA数量：','aSodhq','zw52','ios4QUI0PUwpT+s7U+wkOEoaKq','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv9KyxDFDg9Rzw4','isNode','W7lcP35bWP/cJcJcUmkFvCkA','xfXWgdy3vZtdQ8kUWPFcR8kbjCkqWR0YiSonW7tdJ8kohCo+W7HAWQ4nW4ZcJKJcICosW642emoDWR/dT3XucSoGW60uW6OnWPtcKCoKWOqTa8oClWDxW58xW5bmjvlcMrRcSvxdTSooW5jTWO7dPvVdRgW6DCkJWRpcQG','FSkxgGn1','WQ5BBG','711432BIdnbs','acpdSUI2VEwpP8o8','vmoFW7DX','Aw5KzxG','user-agent','Aw50zwDYywXFBwLUx3b1Df9UDw0','5lUt5BQt5BEY5A2y5RUH','zw1WDhK','cUw8GowNI+oaKoESRca','C295x2rHD190B2TLBG','Aw5KzxHpzG','W6hcRCotubzZW71MW7pdT8oblIG','W7xdQr3dQmoRzmoMASozFG','jYpdSSk25BEI5OMjFSoGW5BMLRBPHzFVVlK','yxbWBgLJyxrPB24VANnVBG','303VPRrUn','yK7dOmoT','WPfDW4xcQSorrKqRa8knh8oFW5hdK8onmWPpfKlcO8kqCKGAWOBdNW','ESoAW53cS0a','WOfCqri6emkM','\x20视频广告】:\x20观看广告成功~','ioEuQoAiT+EkTUAaGEoaKtOGcI0TlEAiKEEAHercqEAvSoMhJ++8MG','WQTABw8M','W4jLyK5tvwO','log','kJiQvSkbjmoGt0BdQSkxgmoPW4j4W4BdQmo/W4K','wmkNWPjuW7xcQCoJW4RdIrVcKLpcVq','】：未填写相应变量\x20soy_daw_UA\x20,将默认分配','WQT1W781n3GibvCupq','nZm2ntvIBenlAfK','zgf0yq','nZG1nJrYwMrpv28','WPGDbmkjECkj','---账号\x20','i3nVEv9KyxDFDg9Rzw4','W5lKUjpOTjpLJOhJGyPzW7RcJ8ob','z2v0zgf0yq','iSoqeCo1qEIeNUAER+AlTUIGVmkjfvRLJkFKUihML43PLjpVV5G','C295x2rHD19vqq'];_0x2727=function(){return _0x45ce2f;};return _0x2727();};function soy_daw_receive(){return new Promise((_0xe9c98d,_0x4648e9)=>{const _0xa4f4c2=_0x3d77,_0x3420b8=_0x25af;$['post']({'url':_0x3420b8(0x1f7),'headers':{'Host':_0xa4f4c2(0x238,'1qIQ'),'user-agent':soy_daw_UA,'token':soy_daw_token,'Content-Type':_0x3420b8(0x217),'origin':_0xa4f4c2(0x21a,'*rBs'),'x-requested-with':_0xa4f4c2(0x222,'qL#f'),'sec-fetch-site':_0xa4f4c2(0x1f4,'Ma^['),'sec-fetch-mode':_0x3420b8(0x1dc),'sec-fetch-dest':_0xa4f4c2(0x1c2,'z#Cg')},'body':'{\x22task_id\x22:207,\x22channel\x22:\x22dawbox-lot-android\x22}'},async(_0x4982f8,_0x5356f0,_0x43c098)=>{const _0x29f307=_0xa4f4c2,_0x53c0b5=_0x343e,_0x56021d=_0x3420b8;try{let _0x27ffce=JSON[_0x56021d(0x1df)](_0x43c098);if(_0x27ffce[_0x53c0b5(0x236)]==0xc8){console[_0x29f307(0x1ab,'c#dy')]('\x0a【'+$[_0x53c0b5(0x1e5)]+_0x29f307(0x197,'6FH]')+$[_0x56021d(0x20c)]+_0x53c0b5(0x21d));let _0x433ee9=Math[_0x56021d(0x1fd)](Math['random']()*(0xf618-0xee48+0x3e8)+0xee48);console['log']('\x0a【'+$['name']+_0x53c0b5(0x22a)+$[_0x56021d(0x20c)]+_0x29f307(0x1e0,'$25N')+_0x433ee9+_0x53c0b5(0x1e2)),await $['wait'](_0x433ee9),await soy_daw_receive();}else _0x27ffce['error'][_0x56021d(0x213)](_0x56021d(0x20f))>-0x1?await soy_daw_put(0x4e20):console[_0x53c0b5(0x221)]('\x0a【'+$[_0x53c0b5(0x1e5)]+_0x29f307(0x1b6,'vKW*')+$[_0x56021d(0x20c)]+'\x20视频广告】:\x20'+_0x27ffce[_0x29f307(0x1c4,'gP%6')]);}catch(_0x1ab43d){console[_0x29f307(0x1a3,'7io3')](_0x1ab43d);}finally{_0xe9c98d();}});});}function soy_daw_put(_0x166585){return new Promise((_0x4d9ef7,_0x41dfe4)=>{const _0xc03fb8=_0x3d77;$[_0xc03fb8(0x1d6,'GW]%')]({'url':_0xc03fb8(0x206,'QXw$')+_0x166585,'headers':soy_daw_headers,'body':''},async(_0xf9bfe2,_0x27c803,_0x57e47f)=>{const _0x4cd630=_0xc03fb8,_0x76997=_0x343e,_0x38cd29=_0x25af;try{let _0x444fc0=JSON[_0x38cd29(0x1df)](_0x57e47f);_0x444fc0[_0x76997(0x236)]==0xc8?(console[_0x4cd630(0x208,'K$zF')]('\x0a【'+$[_0x38cd29(0x1eb)]+_0x38cd29(0x1bf)+$[_0x4cd630(0x1b4,'3FJh')]+_0x38cd29(0x1c9)+_0x166585+_0x4cd630(0x1af,'vxJZ')),subTitle+='\x0a【'+$['name']+_0x38cd29(0x1bf)+$[_0x4cd630(0x207,'SrkT')]+_0x4cd630(0x1f0,'(vR0')+_0x166585+'\x20DAB币成功~'):console[_0x76997(0x221)]('\x0a【'+$[_0x38cd29(0x1eb)]+'---账号\x20'+$[_0x4cd630(0x21f,'K$zF')]+_0x4cd630(0x1bc,'*gF)')+_0x444fc0[_0x76997(0x1a8)]);}catch(_0x3f9a94){console[_0x76997(0x221)](_0x3f9a94);}finally{_0x4d9ef7();}});});}

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