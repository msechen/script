/*

软件名称:看看集

项目注册地址:http://bb.ymjoke.net/mpau/promo/red?sence=201&state=904900

属于一个微信阅读类来的,好像也容易黑号啥的,能上赶紧上吧

必要变量:

变量名 soy_kkj_ticket
变量值 抓包连接上的ticket值

选填变量名 soy_kkj_UA 
变量值 请求头上的 User-Agent

域名为:ydt.kxlock.com:443


多个号用 @ 或 # 或 换行 隔开

cron 35 9,19 * * *

*/


const $ = new Env('看看集');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x26f672=_0x46c7,_0x3ea979=_0x515d,_0x2f3b35=_0x3b1a;(function(_0x4df159,_0x4f0b0d){const _0x4062a8=_0x515d,_0x4d1f7e=_0x3b1a,_0xb72e70=_0x46c7,_0x7c61ea=_0x4df159();while(!![]){try{const _0xc3aa57=parseInt(_0xb72e70(0x8c))/0x1*(-parseInt(_0xb72e70(0xe2))/0x2)+parseInt(_0x4d1f7e(0xdf))/0x3+parseInt(_0x4062a8(0xd7,'HNIf'))/0x4*(parseInt(_0xb72e70(0xac))/0x5)+-parseInt(_0x4062a8(0xdc,'$Fzf'))/0x6*(-parseInt(_0xb72e70(0x9f))/0x7)+parseInt(_0x4d1f7e(0x82))/0x8*(-parseInt(_0x4d1f7e(0xd0))/0x9)+parseInt(_0x4062a8(0xea,'49E4'))/0xa+-parseInt(_0x4d1f7e(0xa9))/0xb*(-parseInt(_0x4d1f7e(0xbe))/0xc);if(_0xc3aa57===_0x4f0b0d)break;else _0x7c61ea['push'](_0x7c61ea['shift']());}catch(_0x44a8ff){_0x7c61ea['push'](_0x7c61ea['shift']());}}}(_0x3635,0xc9497));function _0x515d(_0x31bf3c,_0x5af51d){const _0x3635ef=_0x3635();return _0x515d=function(_0x3b1a65,_0x100cc9){_0x3b1a65=_0x3b1a65-0x7e;let _0x985f41=_0x3635ef[_0x3b1a65];if(_0x515d['PYfoQL']===undefined){var _0x2839e5=function(_0x3d3544){const _0x350e4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4c0ac0='',_0x4face8='';for(let _0x9441bc=0x0,_0x1d3fba,_0x515d88,_0x49b8fd=0x0;_0x515d88=_0x3d3544['charAt'](_0x49b8fd++);~_0x515d88&&(_0x1d3fba=_0x9441bc%0x4?_0x1d3fba*0x40+_0x515d88:_0x515d88,_0x9441bc++%0x4)?_0x4c0ac0+=String['fromCharCode'](0xff&_0x1d3fba>>(-0x2*_0x9441bc&0x6)):0x0){_0x515d88=_0x350e4['indexOf'](_0x515d88);}for(let _0x3872e0=0x0,_0x135792=_0x4c0ac0['length'];_0x3872e0<_0x135792;_0x3872e0++){_0x4face8+='%'+('00'+_0x4c0ac0['charCodeAt'](_0x3872e0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4face8);};const _0x46c7fd=function(_0x197da0,_0x8986f0){let _0xc7139b=[],_0x30048e=0x0,_0x2eb915,_0x3d942c='';_0x197da0=_0x2839e5(_0x197da0);let _0x2a9112;for(_0x2a9112=0x0;_0x2a9112<0x100;_0x2a9112++){_0xc7139b[_0x2a9112]=_0x2a9112;}for(_0x2a9112=0x0;_0x2a9112<0x100;_0x2a9112++){_0x30048e=(_0x30048e+_0xc7139b[_0x2a9112]+_0x8986f0['charCodeAt'](_0x2a9112%_0x8986f0['length']))%0x100,_0x2eb915=_0xc7139b[_0x2a9112],_0xc7139b[_0x2a9112]=_0xc7139b[_0x30048e],_0xc7139b[_0x30048e]=_0x2eb915;}_0x2a9112=0x0,_0x30048e=0x0;for(let _0x3938bf=0x0;_0x3938bf<_0x197da0['length'];_0x3938bf++){_0x2a9112=(_0x2a9112+0x1)%0x100,_0x30048e=(_0x30048e+_0xc7139b[_0x2a9112])%0x100,_0x2eb915=_0xc7139b[_0x2a9112],_0xc7139b[_0x2a9112]=_0xc7139b[_0x30048e],_0xc7139b[_0x30048e]=_0x2eb915,_0x3d942c+=String['fromCharCode'](_0x197da0['charCodeAt'](_0x3938bf)^_0xc7139b[(_0xc7139b[_0x2a9112]+_0xc7139b[_0x30048e])%0x100]);}return _0x3d942c;};_0x515d['mjFqwP']=_0x46c7fd,_0x31bf3c=arguments,_0x515d['PYfoQL']=!![];}const _0x53fa4d=_0x3635ef[0x0],_0x43d346=_0x3b1a65+_0x53fa4d,_0x1f60f8=_0x31bf3c[_0x43d346];return!_0x1f60f8?(_0x515d['ncarXC']===undefined&&(_0x515d['ncarXC']=!![]),_0x985f41=_0x515d['mjFqwP'](_0x985f41,_0x100cc9),_0x31bf3c[_0x43d346]=_0x985f41):_0x985f41=_0x1f60f8,_0x985f41;},_0x515d(_0x31bf3c,_0x5af51d);}function _0x46c7(_0x31bf3c,_0x5af51d){const _0x3635ef=_0x3635();return _0x46c7=function(_0x3b1a65,_0x100cc9){_0x3b1a65=_0x3b1a65-0x7e;let _0x985f41=_0x3635ef[_0x3b1a65];if(_0x46c7['MbGZox']===undefined){var _0x2839e5=function(_0x46c7fd){const _0x3d3544='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x350e4='',_0x4c0ac0='';for(let _0x4face8=0x0,_0x9441bc,_0x1d3fba,_0x515d88=0x0;_0x1d3fba=_0x46c7fd['charAt'](_0x515d88++);~_0x1d3fba&&(_0x9441bc=_0x4face8%0x4?_0x9441bc*0x40+_0x1d3fba:_0x1d3fba,_0x4face8++%0x4)?_0x350e4+=String['fromCharCode'](0xff&_0x9441bc>>(-0x2*_0x4face8&0x6)):0x0){_0x1d3fba=_0x3d3544['indexOf'](_0x1d3fba);}for(let _0x49b8fd=0x0,_0x3872e0=_0x350e4['length'];_0x49b8fd<_0x3872e0;_0x49b8fd++){_0x4c0ac0+='%'+('00'+_0x350e4['charCodeAt'](_0x49b8fd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4c0ac0);};_0x46c7['wSpLvz']=_0x2839e5,_0x31bf3c=arguments,_0x46c7['MbGZox']=!![];}const _0x53fa4d=_0x3635ef[0x0],_0x43d346=_0x3b1a65+_0x53fa4d,_0x1f60f8=_0x31bf3c[_0x43d346];return!_0x1f60f8?(_0x985f41=_0x46c7['wSpLvz'](_0x985f41),_0x31bf3c[_0x43d346]=_0x985f41):_0x985f41=_0x1f60f8,_0x985f41;},_0x46c7(_0x31bf3c,_0x5af51d);}let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';!(async()=>{const _0x8febe2=_0x3b1a,_0x23c74a=_0x46c7,_0x44f07=_0x515d;if($[_0x44f07(0xb8,'I31%')]()){if(!process[_0x23c74a(0xb6)][_0x44f07(0x90,'#0sw')]){console[_0x44f07(0x98,'Olc)')]('\x0a【'+$[_0x23c74a(0xc4)]+'】：未填写相应变量\x20soy_kkj_ticket');return;}if(process[_0x23c74a(0xb6)][_0x8febe2(0xaf)]&&process[_0x8febe2(0xed)][_0x44f07(0xc8,'CRs]')][_0x8febe2(0x97)]('@')>-0x1)app_soy_kkj_ticket=process[_0x23c74a(0xb6)][_0x44f07(0xbd,'TyWk')][_0x44f07(0xab,'za*r')]('@');else{if(process[_0x8febe2(0xed)][_0x23c74a(0xd3)]&&process[_0x8febe2(0xed)][_0x23c74a(0xd3)][_0x8febe2(0x97)]('\x0a')>-0x1)app_soy_kkj_ticket=process[_0x8febe2(0xed)][_0x44f07(0x94,'*mOg')][_0x8febe2(0xca)]('\x0a');else process[_0x44f07(0xdb,'gjIt')][_0x44f07(0xf0,'5jd6')]&&process[_0x8febe2(0xed)][_0x8febe2(0xaf)]['indexOf']('#')>-0x1?app_soy_kkj_ticket=process[_0x23c74a(0xb6)][_0x8febe2(0xaf)]['split']('#'):app_soy_kkj_ticket=process[_0x23c74a(0xb6)]['soy_kkj_ticket'][_0x44f07(0x9c,'mbLH')]();};if(process[_0x8febe2(0xed)][_0x23c74a(0xcd)]&&process[_0x23c74a(0xb6)][_0x8febe2(0xe8)][_0x23c74a(0xd4)]('@')>-0x1)app_soy_kkj_UA=process[_0x23c74a(0xb6)][_0x44f07(0xec,'E#Oj')][_0x44f07(0xcf,'sLAN')]('@');else{if(process[_0x44f07(0xdb,'gjIt')][_0x8febe2(0xe8)]&&process[_0x23c74a(0xb6)][_0x23c74a(0xcd)]['indexOf']('\x0a')>-0x1)app_soy_kkj_UA=process[_0x44f07(0xa6,'sLAN')][_0x23c74a(0xcd)][_0x23c74a(0x84)]('\x0a');else process['env']['soy_kkj_UA']&&process[_0x23c74a(0xb6)][_0x44f07(0xef,'hJe!')][_0x44f07(0xf4,'za*r')]('#')>-0x1?app_soy_kkj_UA=process[_0x8febe2(0xed)]['soy_kkj_UA'][_0x23c74a(0x84)]('#'):app_soy_kkj_UA=process['env'][_0x8febe2(0xe8)][_0x23c74a(0x84)]();};}else{if(!$[_0x44f07(0x9d,'gjIt')](_0x8febe2(0xaf))){console[_0x8febe2(0xcb)]('\x0a【'+$['name']+_0x44f07(0xa7,'sLAN'));return;}if($['getdata']('soy_kkj_ticket')&&$[_0x44f07(0x9d,'gjIt')](_0x8febe2(0xaf))[_0x44f07(0xf7,'$fMH')]('@')>-0x1)app_soy_kkj_ticket=$[_0x44f07(0xb1,'&HJL')]('soy_kkj_ticket')[_0x44f07(0xe5,'gjIt')]('@');else{if($['getdata'](_0x23c74a(0xd3))&&$[_0x23c74a(0xee)](_0x44f07(0xad,'GX!H'))['indexOf']('\x0a')>-0x1)app_soy_kkj_ticket=$['getdata'](_0x44f07(0xd6,'TxBN'))[_0x23c74a(0x84)]('\x0a');else $[_0x8febe2(0xe0)](_0x8febe2(0xaf))&&$[_0x8febe2(0xe0)](_0x8febe2(0xaf))[_0x23c74a(0xd4)]('#')>-0x1?app_soy_kkj_ticket=$[_0x8febe2(0xe0)](_0x8febe2(0xaf))['split']('#'):app_soy_kkj_ticket=$['getdata'](_0x23c74a(0xd3))['split']();};if($[_0x8febe2(0xe0)](_0x44f07(0xf3,'CRs]'))&&$[_0x8febe2(0xe0)](_0x8febe2(0xe8))[_0x44f07(0x9e,'A8$X')]('@')>-0x1)app_soy_kkj_UA=$[_0x23c74a(0xee)](_0x8febe2(0xe8))[_0x23c74a(0x84)]('@');else{if($[_0x44f07(0xc5,'$fMH')](_0x44f07(0xa4,'PC3B'))&&$[_0x44f07(0xda,'GX!H')](_0x8febe2(0xe8))[_0x8febe2(0x97)]('\x0a')>-0x1)app_soy_kkj_UA=$['getdata'](_0x23c74a(0xcd))[_0x8febe2(0xca)]('\x0a');else $[_0x23c74a(0xee)]('soy_kkj_UA')&&$[_0x44f07(0xda,'GX!H')]('soy_kkj_UA')[_0x23c74a(0xd4)]('#')>-0x1?app_soy_kkj_UA=$[_0x44f07(0xe7,'TyWk')](_0x23c74a(0xcd))[_0x23c74a(0x84)]('#'):app_soy_kkj_UA=$[_0x44f07(0x95,'Tu[J')](_0x23c74a(0xcd))[_0x23c74a(0x84)]();};}console[_0x44f07(0x81,'A)N7')](_0x8febe2(0xb2)+new Date(new Date()[_0x23c74a(0x8f)]()+new Date()[_0x8febe2(0x80)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x23c74a(0xc1)),console[_0x23c74a(0xf6)](_0x44f07(0xc0,'$Fzf')+app_soy_kkj_ticket['length']+_0x44f07(0xc2,'mQpV'));for(i=0x0;i<app_soy_kkj_ticket[_0x8febe2(0xbf)];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA=_0x23c74a(0xd2)),$[_0x8febe2(0x88)]=i+0x1,await implement();};})()[_0x2f3b35(0xce)](_0x30048e=>$['logErr'](_0x30048e))[_0x3ea979(0x8a,'(92h')](()=>$[_0x26f672(0x91)]());async function implement(){const _0x1f4644=_0x2f3b35,_0x146279=_0x26f672;host=_0x146279(0x85),console[_0x146279(0xf6)]('\x0a开始【第\x20'+$[_0x146279(0x9a)]+'\x20个账号任务】'),await soy_kkj_getTask(),notify&&await notify[_0x1f4644(0xbb)]($['name'],subTitle);}function soy_kkj_getTask(){const _0x33a9ed=_0x26f672;let _0x2eb915=Post_request('getTask?ticket='+soy_kkj_ticket+_0x33a9ed(0x83)+random(),'');return new Promise((_0x3d942c,_0x2a9112)=>{const _0x22b90c=_0x515d;$[_0x22b90c(0x8b,'za*r')](_0x2eb915,async(_0x3938bf,_0x49f155,_0x458234)=>{const _0x30ef55=_0x3b1a,_0x5e7466=_0x46c7,_0x19b644=_0x22b90c;try{if(_0x3938bf)console[_0x19b644(0xeb,'hJe!')]('\x0a【'+$[_0x19b644(0xe3,'mQpV')]+_0x19b644(0xe6,'#0sw')+$[_0x5e7466(0x9a)]+'\x20获取文章】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x30ef55(0xe9)]+_0x30ef55(0xba)+$[_0x19b644(0xb3,'*d0p')]+_0x19b644(0xae,'wTv2');else{let _0x50c6a7=JSON[_0x30ef55(0x9b)](_0x458234);_0x50c6a7[_0x19b644(0x96,'AUP8')]==0xc8?(console[_0x30ef55(0xcb)]('\x0a【'+$[_0x5e7466(0xc4)]+_0x19b644(0xc6,'i@cF')+$[_0x19b644(0xc9,'GX!H')]+_0x5e7466(0xd9)),article=_0x50c6a7[_0x30ef55(0xdd)]['url'],tgid=_0x50c6a7[_0x5e7466(0xa3)]['tgid'],await soy_kkj_read(),await $[_0x19b644(0xf5,'Ik)h')](Math[_0x5e7466(0xd5)](Math[_0x30ef55(0xa5)]()*(0x2710-0x1770+0x3e8)+0x1770)),await soy_kkj_submit()):(console[_0x5e7466(0xf6)]('\x0a【'+$['name']+'---账号\x20'+$[_0x19b644(0x8e,'#0sw')]+_0x19b644(0xc7,'BwN[')+_0x50c6a7[_0x19b644(0xb7,'TxBN')]),subTitle+='\x0a【'+$[_0x5e7466(0xc4)]+'---账号\x20'+$[_0x5e7466(0x9a)]+'\x20获取文章】:\x20'+_0x50c6a7[_0x5e7466(0xa0)]);}}catch(_0x3e27eb){console[_0x5e7466(0xf6)](_0x3e27eb,_0x49f155);}finally{_0x3d942c();}});});}function soy_kkj_read(){return new Promise((_0x55a337,_0x2a9729)=>{$['get']({'url':''+article,'headers':{'User-Agent':soy_kkj_UA},'body':body},async(_0xb8a03c,_0xded4b8,_0x90d003)=>{const _0x32635d=_0x46c7;try{}catch(_0x1b27f4){console[_0x32635d(0xf6)](_0x1b27f4,_0xded4b8);}finally{_0x55a337();}});});}function soy_kkj_submit(){const _0x4e6701=_0x3ea979,_0x347463=_0x26f672,_0x391bc9=_0x2f3b35;let _0x593c62=Post_request(_0x391bc9(0xb4)+soy_kkj_ticket+_0x347463(0xb0)+tgid+_0x4e6701(0xcc,'5jd6')+random(),'');return new Promise((_0x47b685,_0x5f57d9)=>{const _0x59db5a=_0x347463;$[_0x59db5a(0xe4)](_0x593c62,async(_0x37a613,_0x23f1cb,_0x12539e)=>{const _0x1d2b1e=_0x59db5a,_0x15e031=_0x3b1a,_0x3e099a=_0x515d;try{if(_0x37a613)console['log']('\x0a【'+$['name']+_0x3e099a(0xd8,'J!oi')+$[_0x3e099a(0x87,'I31%')]+'\x20提交任务】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x15e031(0xe9)]+_0x15e031(0xba)+$[_0x15e031(0x88)]+'\x20提交任务】:\x20网络请求失败';else{let _0x59f943=JSON[_0x15e031(0x9b)](_0x12539e);_0x59f943['code']==0x0?(console[_0x3e099a(0xde,'AUP8')]('\x0a【'+$['name']+'---账号\x20'+$[_0x15e031(0x88)]+_0x3e099a(0x89,'GX!H')),console['log']('\x0a【'+$['name']+_0x15e031(0xba)+$[_0x1d2b1e(0x9a)]+'\x20用户状态】:\x20\x0a---用户ID：'+_0x59f943[_0x15e031(0xdd)]['inviteCode']+_0x1d2b1e(0xb9)+_0x59f943[_0x3e099a(0xaa,'hJe!')]['dcount']+'\x0a---当前积分：'+_0x59f943[_0x1d2b1e(0xa3)]['points']/0xa),await soy_kkj_getTask()):(console[_0x3e099a(0xc3,'PC3B')]('\x0a【'+$[_0x1d2b1e(0xc4)]+_0x1d2b1e(0x8d)+$['index']+_0x15e031(0x86)+_0x59f943[_0x15e031(0xe1)]),subTitle+='\x0a【'+$[_0x15e031(0xe9)]+_0x1d2b1e(0x8d)+$[_0x1d2b1e(0x9a)]+_0x1d2b1e(0xd1)+_0x59f943[_0x15e031(0xe1)]);}}catch(_0x4e539d){console['log'](_0x4e539d,_0x23f1cb);}finally{_0x47b685();}});});}function Post_request(_0x2cf635,_0x63a783){const _0x2d9c65=_0x2f3b35,_0x2ef0cd=_0x26f672,_0x5064b1=_0x3ea979;return{'url':''+host+_0x2cf635,'headers':{'Host':_0x5064b1(0xa8,'A8$X'),'Connection':'keep-alive','Content-Length':0x0,'Accept':_0x2ef0cd(0xf2),'User-Agent':soy_kkj_UA,'Content-Type':'application/x-www-form-urlencoded','Origin':_0x2d9c65(0xb5),'Referer':_0x2d9c65(0x93),'Accept-Encoding':_0x5064b1(0x7e,'ujf5'),'Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'},'body':_0x63a783};}function _0x3b1a(_0x31bf3c,_0x5af51d){const _0x3635ef=_0x3635();return _0x3b1a=function(_0x3b1a65,_0x100cc9){_0x3b1a65=_0x3b1a65-0x7e;let _0x985f41=_0x3635ef[_0x3b1a65];return _0x985f41;},_0x3b1a(_0x31bf3c,_0x5af51d);};function Get_request(_0x12e7fe){return{'url':_0x12e7fe,'headers':soy_kkj_headers};};function random(){const _0x3da2cf=_0x26f672,_0x2d825d=_0x2f3b35;let _0x316c2a='';for(let _0x5f1394=0x0;_0x5f1394<0x2;_0x5f1394++){_0x316c2a+=Math['floor'](Math[_0x2d825d(0xa5)]()*0xa);}return'0.238'+_0x316c2a+'5'+_0x316c2a+_0x3da2cf(0xbc)+_0x316c2a+'06'+_0x316c2a;}function _0x3635(){const _0x222940=['W4D1svBcNZHoj2pdUG','random','W7WNha','44ki772t5P2a5Ak05yEe55IO5BUZ5yY06ywzWRpcOmo0ACkLomkTfCkgmGGZW5ddRIm','WO41fIVcSGC2pKddQSkTwSo4rNNcIZum','66cbFhtX','WQyMW67dMa','WO8lWOerW4W','mtK1BfHhA1bW','bCojW7C/WRy/WQugm8oeW4tdRmkWWOa','WOROJQNLJ67MLjdNQi3JGBxdSe3NVBJNUztORQVMS6pLPBJOT6q','soy_kkj_ticket','jNrNAwq9','wCohemoIWR0PBG','\x0a===\x20脚本执行\x20-\x20北京时间：','W6FdLmo5W6lcHW','submit?ticket=','http://m.uig9o5wp.shop','zw52','DSoFjW','j8ooxmo4uCkw','cI0TlEMyHEIVU+AvSoMhJ++8MG','---账号\x20','sendNotify','mde4','W75uWPTPW5VdUCozfSoVw3qPxXG','2696508IUnNNM','length','WRmBhUocL+wgJmkX','id09pqO','WOFKU7tOTBVLJPxJGQzoWRdcJH8','W5H1vW','BMfTzq','W4VdGSknaxbanG','WQHkWOBOTy3LJ65u','q+IoIEwnPUAwOUEPQ+obMSotxa','WRpdTrBcU8ocW4pcGJdcSt1Vy8otW6e','h8oiW6OfWQu','split','log','W6ddTsLq','C295x2TRAL9vqq','catch','W6O5bSk2kq','60579oGCXkd','ioApKos6Pos7U+wkOEoaKtOG','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKidGUms4WoYbbtfaTquWWmcbcDwLSzc9ivufxruLbtfaTquWWmdSGD3yPiefWCgXLv2vIs2L0lZuZnY4ZnIaOs0HutuWSigXPA2uGr2vJA28PifzLCNnPB24Vnc4WienOCM9Tzs82nI4WlJmZntKUmti2ie1VyMLSzsbtywzHCMKVntm3lJm2igjHAwr1yM94yxbWlZeWlJaUns4XmsaOqMfPzhu7ifaXidGUms4Wkq','C295x2TRAL90AwnRzxq','Aw5KzxHpzG','zMXVB3i','AmodorRdTrhdPCoowspcVdbVmW','WP3cJSolW77cMmobwmoGqCoI','W5RdMuJOT6xLJjbj','ioIoT+wpLUAwH+EROooaKtOG6i635y+w5OIq5yQF','eCodW7OeWRWGWQ4','iYqK','WR0reSkZWOtdShzDWRJcVW','data','W752W60','3621354vuAnES','getdata','msg','nLHkBu5XAW','W4NcVZah','Cg9ZDa','ntO+WQhdLG','n8ovcEI3KowpUhu','W6PEWPzsW5hdPSos','soy_kkj_UA','name','nCkuWPb1e0LzomkVW70SW6K8','WQ4OW70','cSkMqCo5pSk4hqSXW4S','env','z2v0zgf0yq','WReOW6pdPLBdPSonufJcRa','WRxdHsqYyfnaWQRdS8obW69bWOhcOW','nJa1nZLVr0nyA2q','yxbWBgLJyxrPB24VANnVBIWGDgv4Dc9WBgfPBIWGkI8Q','WRpdTrBcU8ocW4pcGJdcKbu','WPuvWOKDW4ddICox','WRaRmSob','Bg9N','W4xdICkDagL7mq','qbpcUe8HW4xdPSo1cCoNW7xdRNK','mZyYmtm1nhz1qw5fuW','getTimezoneOffset','kcBcTq','1752TwqiQc','jL90pq','C3bSAxq','Ahr0CdOVl3LKDc5REgXVy2SUy29ToJq0mY9JB2rLmda4l3LKDdiV','\x20提交任务】:\x20','j8otDSoYtq','index','vUAnTUs4QUs6M+wjVoobHCo1EEAoL+s4IEAkT+wiMa','WOyuCSohW4XCWRS','WOWuWP4m','ndaZotiZC1j6qKPy','ls0T6lsM5y+3ia','C8kwqmktDW','z2v0vgLTzq','ACkxxCkPzd58oSkqFCoHWQjMfG','zg9Uzq','mtC1mLr3CwLryW','http://m.uig9o5wp.shop/','lbNcL8oLkMhcGtrPWQ7cT8kOmSkB','ueVcGqtdGwCM','W7f2W64/','indexOf','kI0j','W5nklCksW5LrWQvYWO3cTG','Aw5KzxG','parse','eCkTW74geq','is8MWQZdG2dcTG','WP4/bMdcOta8','nZe5nMvgzxL0DG','BxnN','nJzJyKzODfG','oSk2huSmW5ZcG8k+Bqyfd8oH','zgf0yq'];_0x3635=function(){return _0x222940;};return _0x3635();}

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