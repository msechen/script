/*

软件名称:满满有品

项目注册地址:http://yg.zzbzb.com/regNew/?invite_code=809887799

需要实名认证

满满有品！注册送100积分！每天签到送5积分！连续签到7天送20积分！连续签到30天送100积分！60天200积分以此内推！
1积分等于一块钱！每天按千分之‰1释放！也就是1000积分每天释放1块钱！购物，充话费，订机票，火车票，推广，都加积分，签到也加积分。积分越多每天钱越多！

必要变量:

变量名 soy_mmyp_data
变量值 xxx&xxx&xxx&xxx
注释:注册的手机号&登录密码&绑定的支付宝&抓包请求头上user-agent
注意:
绑定的支付宝不填则不做提现
抓包请求头上user-agent为可选变量

注意:需要自行在app/我的/修改密码 里面设置密码后才能密码登录,密码不能包含&和#字符
注意:需要自行在app/我的/修改密码 里面设置密码后才能密码登录,密码不能包含&和#字符
注意:需要自行在app/我的/修改密码 里面设置密码后才能密码登录,密码不能包含&和#字符

多个号用 # 或 换行 隔开

cron "25 10,13 * * *"

*/


const $ = new Env('满满有品');
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xod0='jsjiami.com.v6',_0xod0_=['_0xod0'],_0x318d=[_0xod0,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6d\x6d\x79\x70\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6d\x6d\x79\x70\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x79\x67\x2e\x7a\x7a\x62\x7a\x62\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x6d\x73\x2d\x6d\x65\x6d\x62\x65\x72\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x73\x6f\x2f\x6e\x65\x77\x4c\x6f\x67\x69\x6e\x3f\x70\x68\x6f\x6e\x65\x3d','\x26\x63\x6f\x64\x65\x3d\x30\x26\x6c\x6f\x67\x69\x6e\x3d\x31\x26\x70\x61\x73\x73\x3d','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u7528\u6237\u767b\u5f55\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x75\x73\x65\x72\x6e\x61\x6d\x65','\x74\x6f\x6b\x65\x6e','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x73\x69\x67\x6e\x49\x6e\x2f\x69\x73\x53\x69\x67\x6e\x49\x6e\x3f\x75\x69\x64\x3d','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x53\x55\x43\x43\x45\x53\x53','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7b7e\u5230\u5929\u6570\uff1a','\x64\x61\x79','\x0a\x2d\x2d\x2d\u5f53\u524d\u79ef\u5206\uff1a','\x69\x6e\x74\x65\x67\x72\x61\x6c','\x73\x69\x67\x6e\x49\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x3f\x75\x69\x64\x3d','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7b7e\u5230\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7b7e\u5230\u5929\u6570\uff1a','\x20\u7b7e\u5230\u3011\x3a\x20','\x6c\x6f\x67\x49\x6e\x74\x65\x67\x72\x61\x6c\x45\x61\x72\x69\x6e\x67\x2f\x67\x65\x74\x4d\x79\x4c\x6f\x67\x49\x6e\x74\x65\x67\x72\x61\x6c\x45\x61\x72\x69\x6e\x67\x3f\x70\x61\x67\x65\x53\x69\x7a\x65\x3d\x31\x35\x26\x70\x61\x67\x65\x4e\x75\x6d\x3d\x31\x26\x75\x69\x64\x3d','\x20\u7ea2\u5305\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7ea2\u5305\u5217\u8868\u3011\x3a\x20\u6ca1\u6709\u91ca\u653e\u5230\u7ea2\u5305\x2c\u8bf7\u660e\u5929\u518d\u8bd5','\x74\x79\x70\x65','\x20\u7ea2\u5305\u5217\u8868\u3011\x3a\x20','\x6c\x6f\x67\x49\x6e\x74\x65\x67\x72\x61\x6c\x45\x61\x72\x69\x6e\x67\x2f\x67\x65\x74\x4c\x6f\x67\x49\x6e\x74\x65\x67\x72\x61\x6c\x3f\x69\x64\x3d','\x20\u9886\u53d6\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u7ea2\u5305\u3011\x3a\x20','\x73\x73\x6f\x2f\x67\x65\x74\x4d\x79\x77\x61\x6c\x6c\x65\x74\x3f\x69\x64\x3d','\x26\x74\x79\x70\x65\x3d\x31','\x20\u7528\u6237\u94b1\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x62\x61\x6c\x61\x6e\x63\x65','\x20\u7528\u6237\u94b1\u5305\u3011\x3a\x20\u672a\u63d0\u4f9b\u652f\u4ed8\u5b9d\u8d26\u53f7\x2c\u65e0\u6cd5\u63d0\u73b0','\x2d\x2d\x2d\u5f53\u524d\u4f59\u989d\uff1a','\x20\u7528\u6237\u94b1\u5305\u3011\x3a\x20\u83b7\u53d6\u6570\u636e\u5931\u8d25','\x68\x74\x74\x70\x3a\x2f\x2f\x79\x67\x2e\x7a\x7a\x62\x7a\x62\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x6d\x73\x2d\x73\x6c\x69\x64\x65\x2f\x73\x6c\x69\x64\x65\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x3f\x72\x6d\x62\x3d','\x26\x6e\x61\x6d\x65\x3d','\x26\x74\x79\x70\x65\x3d\x31\x26\x75\x69\x64\x3d','\x26\x62\x61\x6e\x62\x65\x6e\x3d\x31\x30\x30','\x4d\x41\x4c\x4c\x5f\x55\x20','\x55\x53\x45\x52','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x79\x67\x2e\x7a\x7a\x62\x7a\x62\x2e\x63\x6f\x6d','\x20\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u63d0\u73b0\u3011\x3a\x20','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x61\x63\x77\x5f\x74\x63\x3d','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x50\x43\x6a\x62\x73\x62\x6a\x48\x69\x6e\x4b\x61\x6d\x69\x2e\x44\x63\x71\x6f\x6d\x2e\x68\x76\x59\x6e\x68\x36\x58\x4f\x68\x3d\x3d'];function _0x9e81(_0x2d5fca,_0x1cc569){_0x2d5fca=~~'0x'['concat'](_0x2d5fca['slice'](0x0));var _0x211977=_0x318d[_0x2d5fca];return _0x211977;};(function(_0x11388c,_0x25ee69){var _0x3d1381=0x0;for(_0x25ee69=_0x11388c['shift'](_0x3d1381>>0x2);_0x25ee69&&_0x25ee69!==(_0x11388c['pop'](_0x3d1381>>0x3)+'')['replace'](/[PCbbHnKDqhYnhXOh=]/g,'');_0x3d1381++){_0x3d1381=_0x3d1381^0xc8bea;}}(_0x318d,_0x9e81));let app_soy_mmyp_data=[];!(async()=>{if(typeof $request!==_0x9e81('0')){await get_appdata();}if($[_0x9e81('1')]()){if(!process[_0x9e81('2')][_0x9e81('3')]){console[_0x9e81('4')](_0x9e81('5'));return;}if(process[_0x9e81('2')][_0x9e81('3')]&&process[_0x9e81('2')][_0x9e81('3')][_0x9e81('6')]('\x0a')>-0x1){app_soy_mmyp_data=process[_0x9e81('2')][_0x9e81('3')][_0x9e81('7')]('\x0a');}else if(process[_0x9e81('2')][_0x9e81('3')]&&process[_0x9e81('2')][_0x9e81('3')][_0x9e81('6')]('\x23')>-0x1){app_soy_mmyp_data=process[_0x9e81('2')][_0x9e81('3')][_0x9e81('7')]('\x23');}else{app_soy_mmyp_data=process[_0x9e81('2')][_0x9e81('3')][_0x9e81('7')]();};}else{if(!$[_0x9e81('8')](_0x9e81('3'))){console[_0x9e81('4')](_0x9e81('5'));return;}if($[_0x9e81('8')](_0x9e81('3'))&&$[_0x9e81('8')](_0x9e81('3'))[_0x9e81('6')]('\x23')>-0x1){app_soy_mmyp_data=$[_0x9e81('8')](_0x9e81('3'))[_0x9e81('7')]('\x40');}else if($[_0x9e81('8')](_0x9e81('3'))&&$[_0x9e81('8')](_0x9e81('3'))[_0x9e81('6')]('\x0a')>-0x1){app_soy_mmyp_data=$[_0x9e81('8')](_0x9e81('3'))[_0x9e81('7')]('\x0a');}else{app_soy_mmyp_data=$[_0x9e81('8')](_0x9e81('3'))[_0x9e81('7')]();};}console[_0x9e81('4')](_0x9e81('9')+new Date(new Date()[_0x9e81('a')]()+new Date()[_0x9e81('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x9e81('c')]()+_0x9e81('d'));console[_0x9e81('4')](_0x9e81('e')+app_soy_mmyp_data[_0x9e81('f')]+_0x9e81('10'));subTitle='';for(i=0x0;i<app_soy_mmyp_data[_0x9e81('f')];i++){soy_mmyp_data=app_soy_mmyp_data[i][_0x9e81('7')]('\x26');soy_mmyp_phone=soy_mmyp_data[0x0];soy_mmyp_pass=soy_mmyp_data[0x1];soy_mmyp_Collection=soy_mmyp_data[0x2];soy_mmyp_UA=soy_mmyp_data[0x3];if(!soy_mmyp_phone||!soy_mmyp_pass){console[_0x9e81('4')](_0x9e81('11'));return;}if(!soy_mmyp_UA){soy_mmyp_UA=_0x9e81('12');}$[_0x9e81('13')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x9e81('14')]($[_0x9e81('15')],subTitle);}}})()[_0x9e81('16')](_0x2e3b43=>$[_0x9e81('17')](_0x2e3b43))[_0x9e81('18')](()=>$[_0x9e81('19')]());async function implement(){host=_0x9e81('1a');console[_0x9e81('4')](_0x9e81('1b')+$[_0x9e81('13')]+_0x9e81('1c'));await mmyp_newLogin();}function mmyp_newLogin(){soy_mmyp_token='';soy_mmyp_user_id='';soy_mmyp_cookie='';let _0x1b6e69=Get_request(_0x9e81('1d')+soy_mmyp_phone+_0x9e81('1e')+soy_mmyp_pass);return new Promise((_0x5bcce7,_0x40a650)=>{$[_0x9e81('1f')](_0x1b6e69,async(_0x3a257d,_0x4bfaca,_0x2f5e31)=>{try{if(_0x3a257d){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('21'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('21');}else{let _0x298ce2=JSON[_0x9e81('22')](_0x2f5e31);if(_0x298ce2[_0x9e81('23')]==0xc8){username=_0x298ce2[_0x9e81('24')][_0x9e81('25')];soy_mmyp_user_id=_0x298ce2[_0x9e81('24')]['\x69\x64'];soy_mmyp_token=_0x298ce2[_0x9e81('24')][_0x9e81('26')];soy_mmyp_cookie=await MD5_Encrypt(soy_mmyp_phone+soy_mmyp_user_id);await soy_mmyp_pageSlist();await $[_0x9e81('27')](Math[_0x9e81('28')](Math[_0x9e81('29')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await soy_mmyp_wallet();await $[_0x9e81('27')](Math[_0x9e81('28')](Math[_0x9e81('29')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await soy_mmyp_isSignIn();}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('2a')+_0x298ce2[_0x9e81('2b')]);}}}catch(_0x40b04b){console[_0x9e81('4')](_0x40b04b,_0x4bfaca);}finally{_0x5bcce7();}});});}function soy_mmyp_isSignIn(){let _0x473828=Get_request(_0x9e81('2c')+soy_mmyp_user_id);return new Promise((_0x2ad6da,_0x56fe33)=>{$[_0x9e81('1f')](_0x473828,async(_0x436fd5,_0x34f5b2,_0x1880cd)=>{try{if(_0x436fd5){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('2d'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('2d');}else{let _0xa7e144=JSON[_0x9e81('22')](_0x1880cd);if(_0xa7e144[_0x9e81('23')]==0xc8){if(_0xa7e144[_0x9e81('2b')]==_0x9e81('2e')){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('2f')+_0xa7e144[_0x9e81('24')][_0x9e81('30')]+_0x9e81('31')+_0xa7e144[_0x9e81('24')][_0x9e81('32')]);subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('2f')+_0xa7e144[_0x9e81('24')][_0x9e81('30')]+_0x9e81('31')+_0xa7e144[_0x9e81('24')][_0x9e81('32')];}else{await soy_mmyp_SignIn();}}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('2a')+_0xa7e144[_0x9e81('2b')]);}}}catch(_0x39062a){console[_0x9e81('4')](_0x39062a,_0x34f5b2);}finally{_0x2ad6da();}});});}function soy_mmyp_SignIn(){let _0x549841=Get_request(_0x9e81('33')+soy_mmyp_user_id);return new Promise((_0x2d2056,_0x52a694)=>{$[_0x9e81('1f')](_0x549841,async(_0x2c9a7c,_0x11d384,_0x5374a2)=>{try{if(_0x2c9a7c){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('34'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('34');}else{let _0x275425=JSON[_0x9e81('22')](_0x5374a2);if(_0x275425[_0x9e81('23')]==0xc8){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('35')+_0x275425[_0x9e81('24')][_0x9e81('30')]+_0x9e81('31')+_0x275425[_0x9e81('24')][_0x9e81('32')]);subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('35')+_0x275425[_0x9e81('24')][_0x9e81('30')]+_0x9e81('31')+_0x275425[_0x9e81('24')][_0x9e81('32')];}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('36')+_0x275425[_0x9e81('2b')]);}}}catch(_0x59750b){console[_0x9e81('4')](_0x59750b,_0x11d384);}finally{_0x2d2056();}});});}function soy_mmyp_pageSlist(){let _0x5198a2=Get_request(_0x9e81('37')+soy_mmyp_user_id);return new Promise((_0x14285d,_0xcb5000)=>{$[_0x9e81('1f')](_0x5198a2,async(_0x37ffb7,_0x1e762c,_0x4bf8ed)=>{try{if(_0x37ffb7){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('38'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('38');}else{let _0x4622ea=JSON[_0x9e81('22')](_0x4bf8ed);if(_0x4622ea[_0x9e81('23')]==0xc8){if(_0x4622ea[_0x9e81('24')][_0x9e81('f')]==0x0){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('39'));}else{for(pageSlist of _0x4622ea[_0x9e81('24')]){let _0x8c57af=pageSlist['\x69\x64'];let _0x4898b2=pageSlist[_0x9e81('3a')];if(_0x4898b2==0x0){await soy_mmyp_openpage(_0x8c57af);let _0x5d4c19=Math[_0x9e81('28')](Math[_0x9e81('29')]()*(0x7530-0x6d60+0x3e8)+0x6d60);await $[_0x9e81('27')](_0x5d4c19);}}}}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('3b')+_0x4622ea[_0x9e81('2b')]);}}}catch(_0x39b6ae){console[_0x9e81('4')](_0x39b6ae,_0x1e762c);}finally{_0x14285d();}});});}function soy_mmyp_openpage(_0x4a0755){let _0x186cd6=Get_request(_0x9e81('3c')+_0x4a0755);return new Promise((_0x3edc65,_0x2518bf)=>{$[_0x9e81('1f')](_0x186cd6,async(_0x29840e,_0x417ad9,_0x13d0a5)=>{try{if(_0x29840e){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('3d'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('3d');}else{let _0x46a4af=JSON[_0x9e81('22')](_0x13d0a5);if(_0x46a4af[_0x9e81('23')]==0xc8){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('3e')+_0x46a4af[_0x9e81('2b')]);}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('3e')+_0x46a4af[_0x9e81('2b')]);}}}catch(_0x3402f2){console[_0x9e81('4')](_0x3402f2,_0x417ad9);}finally{_0x3edc65();}});});}function soy_mmyp_wallet(){let _0x4cd4cd=Get_request(_0x9e81('3f')+soy_mmyp_user_id+_0x9e81('40'));return new Promise((_0xf5d5c,_0xe0cdba)=>{$[_0x9e81('1f')](_0x4cd4cd,async(_0x29aea0,_0x3719dc,_0x39dc59)=>{try{if(_0x29aea0){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('41'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('41');}else{let _0x1b9307=JSON[_0x9e81('22')](_0x39dc59);if(_0x39dc59[_0x9e81('6')](''+soy_mmyp_user_id)>-0x1){if(_0x1b9307[_0x9e81('42')]>=0xa){if(soy_mmyp_Collection){await soy_mmyp_withdraw(_0x1b9307[_0x9e81('42')]-_0x1b9307[_0x9e81('42')]*0.05+0x1);}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('43'));}}else{console[_0x9e81('4')](_0x9e81('44')+_0x1b9307[_0x9e81('42')]);}}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('45'));}}}catch(_0xb996d7){console[_0x9e81('4')](_0xb996d7,_0x3719dc);}finally{_0xf5d5c();}});});}function soy_mmyp_withdraw(_0x3675d9){let _0x22bceb={'\x75\x72\x6c':_0x9e81('46')+_0x3675d9+_0x9e81('47')+soy_mmyp_Collection+_0x9e81('48')+soy_mmyp_user_id+_0x9e81('49'),'\x68\x65\x61\x64\x65\x72\x73':{'Authorization':_0x9e81('4a')+soy_mmyp_token,'user_id':soy_mmyp_user_id,'token_type':_0x9e81('4b'),'Content-Type':_0x9e81('4c'),'user-agent':soy_mmyp_UA,'Host':_0x9e81('4d')}};return new Promise((_0x44db54,_0x3d4692)=>{$[_0x9e81('1f')](_0x22bceb,async(_0x19e27e,_0x2e01fb,_0x51d702)=>{try{if(_0x19e27e){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('4e'));subTitle+=_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('4e');}else{let _0x24393a=JSON[_0x9e81('22')](_0x51d702);if(_0x24393a[_0x9e81('23')]==0xc8){console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('4f')+_0x24393a[_0x9e81('2b')]);}else{console[_0x9e81('4')](_0x9e81('20')+$[_0x9e81('13')]+_0x9e81('4f')+_0x24393a[_0x9e81('2b')]);}}}catch(_0x404e22){console[_0x9e81('4')](_0x404e22,_0x2e01fb);}finally{_0x44db54();}});});}function Get_request(_0x555426){return{'\x75\x72\x6c':''+host+_0x555426,'\x68\x65\x61\x64\x65\x72\x73':{'Authorization':_0x9e81('4a')+soy_mmyp_token,'user_id':soy_mmyp_user_id,'token_type':_0x9e81('4b'),'Content-Type':_0x9e81('4c'),'user-agent':soy_mmyp_UA,'Host':_0x9e81('4d'),'Connection':_0x9e81('50'),'Accept-Encoding':_0x9e81('51'),'Cookie':_0x9e81('52')+soy_mmyp_cookie}};};function MD5_Encrypt(_0x5accd6){function _0xb48be2(_0x5accd6,_0xb48be2){return _0x5accd6<<_0xb48be2|_0x5accd6>>>0x20-_0xb48be2;}function _0xc34a02(_0x5accd6,_0xb48be2){var _0xc34a02,_0xd3dcfc,_0x231b11,_0x12c765,_0x262c91;return _0x231b11=0x80000000&_0x5accd6,_0x12c765=0x80000000&_0xb48be2,_0xc34a02=0x40000000&_0x5accd6,_0xd3dcfc=0x40000000&_0xb48be2,_0x262c91=(0x3fffffff&_0x5accd6)+(0x3fffffff&_0xb48be2),_0xc34a02&_0xd3dcfc?0x80000000^_0x262c91^_0x231b11^_0x12c765:_0xc34a02|_0xd3dcfc?0x40000000&_0x262c91?0xc0000000^_0x262c91^_0x231b11^_0x12c765:0x40000000^_0x262c91^_0x231b11^_0x12c765:_0x262c91^_0x231b11^_0x12c765;}function _0x2bd30e(_0x5accd6,_0xb48be2,_0xc34a02){return _0x5accd6&_0xb48be2|~_0x5accd6&_0xc34a02;}function _0x580e75(_0x5accd6,_0xb48be2,_0xc34a02){return _0x5accd6&_0xc34a02|_0xb48be2&~_0xc34a02;}function _0x2478fb(_0x5accd6,_0xb48be2,_0xc34a02){return _0x5accd6^_0xb48be2^_0xc34a02;}function _0x5cbdb4(_0x5accd6,_0xb48be2,_0xc34a02){return _0xb48be2^(_0x5accd6|~_0xc34a02);}function _0x48f14a(_0x5accd6,_0x580e75,_0x2478fb,_0x5cbdb4,_0x48f14a,_0x298a77,_0x3b89ec){return _0x5accd6=_0xc34a02(_0x5accd6,_0xc34a02(_0xc34a02(_0x2bd30e(_0x580e75,_0x2478fb,_0x5cbdb4),_0x48f14a),_0x3b89ec)),_0xc34a02(_0xb48be2(_0x5accd6,_0x298a77),_0x580e75);}function _0x42a737(_0x5accd6,_0x2bd30e,_0x2478fb,_0x5cbdb4,_0x48f14a,_0x42a737,_0x566268){return _0x5accd6=_0xc34a02(_0x5accd6,_0xc34a02(_0xc34a02(_0x580e75(_0x2bd30e,_0x2478fb,_0x5cbdb4),_0x48f14a),_0x566268)),_0xc34a02(_0xb48be2(_0x5accd6,_0x42a737),_0x2bd30e);}function _0x504a1f(_0x5accd6,_0x2bd30e,_0x580e75,_0x5cbdb4,_0x48f14a,_0x42a737,_0x504a1f){return _0x5accd6=_0xc34a02(_0x5accd6,_0xc34a02(_0xc34a02(_0x2478fb(_0x2bd30e,_0x580e75,_0x5cbdb4),_0x48f14a),_0x504a1f)),_0xc34a02(_0xb48be2(_0x5accd6,_0x42a737),_0x2bd30e);}function _0x198eff(_0x5accd6,_0x2bd30e,_0x580e75,_0x2478fb,_0x48f14a,_0x42a737,_0x504a1f){return _0x5accd6=_0xc34a02(_0x5accd6,_0xc34a02(_0xc34a02(_0x5cbdb4(_0x2bd30e,_0x580e75,_0x2478fb),_0x48f14a),_0x504a1f)),_0xc34a02(_0xb48be2(_0x5accd6,_0x42a737),_0x2bd30e);}function _0x30c42d(_0x5accd6){for(var _0xb48be2,_0xc34a02=_0x5accd6[_0x9e81('f')],_0x2bd30e=_0xc34a02+0x8,_0x580e75=(_0x2bd30e-_0x2bd30e%0x40)/0x40,_0x2478fb=0x10*(_0x580e75+0x1),_0x5cbdb4=new Array(_0x2478fb-0x1),_0x48f14a=0x0,_0x42a737=0x0;_0xc34a02>_0x42a737;)_0xb48be2=(_0x42a737-_0x42a737%0x4)/0x4,_0x48f14a=_0x42a737%0x4*0x8,_0x5cbdb4[_0xb48be2]=_0x5cbdb4[_0xb48be2]|_0x5accd6[_0x9e81('53')](_0x42a737)<<_0x48f14a,_0x42a737++;return _0xb48be2=(_0x42a737-_0x42a737%0x4)/0x4,_0x48f14a=_0x42a737%0x4*0x8,_0x5cbdb4[_0xb48be2]=_0x5cbdb4[_0xb48be2]|0x80<<_0x48f14a,_0x5cbdb4[_0x2478fb-0x2]=_0xc34a02<<0x3,_0x5cbdb4[_0x2478fb-0x1]=_0xc34a02>>>0x1d,_0x5cbdb4;}function _0x29abcd(_0x5accd6){var _0xb48be2,_0xc34a02,_0x2bd30e='',_0x580e75='';for(_0xc34a02=0x0;0x3>=_0xc34a02;_0xc34a02++)_0xb48be2=_0x5accd6>>>0x8*_0xc34a02&0xff,_0x580e75='\x30'+_0xb48be2[_0x9e81('54')](0x10),_0x2bd30e+=_0x580e75[_0x9e81('55')](_0x580e75[_0x9e81('f')]-0x2,0x2);return _0x2bd30e;}function _0x39ef1e(_0x5accd6){_0x5accd6=_0x5accd6[_0x9e81('56')](/\r\n/g,'\x0a');for(var _0xb48be2='',_0xc34a02=0x0;_0xc34a02<_0x5accd6[_0x9e81('f')];_0xc34a02++){var _0x2bd30e=_0x5accd6[_0x9e81('53')](_0xc34a02);0x80>_0x2bd30e?_0xb48be2+=String[_0x9e81('57')](_0x2bd30e):_0x2bd30e>0x7f&&0x800>_0x2bd30e?(_0xb48be2+=String[_0x9e81('57')](_0x2bd30e>>0x6|0xc0),_0xb48be2+=String[_0x9e81('57')](0x3f&_0x2bd30e|0x80)):(_0xb48be2+=String[_0x9e81('57')](_0x2bd30e>>0xc|0xe0),_0xb48be2+=String[_0x9e81('57')](_0x2bd30e>>0x6&0x3f|0x80),_0xb48be2+=String[_0x9e81('57')](0x3f&_0x2bd30e|0x80));}return _0xb48be2;}var _0x1b6bdd,_0x17e939,_0x41b9cd,_0x1510f5,_0x24f722,_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327=[],_0x337c9a=0x7,_0x4ca343=0xc,_0x179777=0x11,_0x5cd482=0x16,_0x3d578d=0x5,_0x4d6b1d=0x9,_0x16e7ca=0xe,_0x15b7ad=0x14,_0x36688e=0x4,_0x416e28=0xb,_0x2575c5=0x10,_0xc32523=0x17,_0x4f356d=0x6,_0x12dd81=0xa,_0x596200=0xf,_0x160d19=0x15;for(_0x5accd6=_0x39ef1e(_0x5accd6),_0x708327=_0x30c42d(_0x5accd6),_0x367311=0x67452301,_0x31cca9=0xefcdab89,_0x2a2e7d=0x98badcfe,_0x4c4edb=0x10325476,_0x1b6bdd=0x0;_0x1b6bdd<_0x708327[_0x9e81('f')];_0x1b6bdd+=0x10)_0x17e939=_0x367311,_0x41b9cd=_0x31cca9,_0x1510f5=_0x2a2e7d,_0x24f722=_0x4c4edb,_0x367311=_0x48f14a(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x0],_0x337c9a,0xd76aa478),_0x4c4edb=_0x48f14a(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x1],_0x4ca343,0xe8c7b756),_0x2a2e7d=_0x48f14a(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x2],_0x179777,0x242070db),_0x31cca9=_0x48f14a(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x3],_0x5cd482,0xc1bdceee),_0x367311=_0x48f14a(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x4],_0x337c9a,0xf57c0faf),_0x4c4edb=_0x48f14a(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x5],_0x4ca343,0x4787c62a),_0x2a2e7d=_0x48f14a(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x6],_0x179777,0xa8304613),_0x31cca9=_0x48f14a(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x7],_0x5cd482,0xfd469501),_0x367311=_0x48f14a(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x8],_0x337c9a,0x698098d8),_0x4c4edb=_0x48f14a(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x9],_0x4ca343,0x8b44f7af),_0x2a2e7d=_0x48f14a(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xa],_0x179777,0xffff5bb1),_0x31cca9=_0x48f14a(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0xb],_0x5cd482,0x895cd7be),_0x367311=_0x48f14a(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0xc],_0x337c9a,0x6b901122),_0x4c4edb=_0x48f14a(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0xd],_0x4ca343,0xfd987193),_0x2a2e7d=_0x48f14a(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xe],_0x179777,0xa679438e),_0x31cca9=_0x48f14a(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0xf],_0x5cd482,0x49b40821),_0x367311=_0x42a737(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x1],_0x3d578d,0xf61e2562),_0x4c4edb=_0x42a737(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x6],_0x4d6b1d,0xc040b340),_0x2a2e7d=_0x42a737(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xb],_0x16e7ca,0x265e5a51),_0x31cca9=_0x42a737(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x0],_0x15b7ad,0xe9b6c7aa),_0x367311=_0x42a737(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x5],_0x3d578d,0xd62f105d),_0x4c4edb=_0x42a737(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0xa],_0x4d6b1d,0x2441453),_0x2a2e7d=_0x42a737(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xf],_0x16e7ca,0xd8a1e681),_0x31cca9=_0x42a737(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x4],_0x15b7ad,0xe7d3fbc8),_0x367311=_0x42a737(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x9],_0x3d578d,0x21e1cde6),_0x4c4edb=_0x42a737(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0xe],_0x4d6b1d,0xc33707d6),_0x2a2e7d=_0x42a737(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x3],_0x16e7ca,0xf4d50d87),_0x31cca9=_0x42a737(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x8],_0x15b7ad,0x455a14ed),_0x367311=_0x42a737(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0xd],_0x3d578d,0xa9e3e905),_0x4c4edb=_0x42a737(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x2],_0x4d6b1d,0xfcefa3f8),_0x2a2e7d=_0x42a737(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x7],_0x16e7ca,0x676f02d9),_0x31cca9=_0x42a737(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0xc],_0x15b7ad,0x8d2a4c8a),_0x367311=_0x504a1f(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x5],_0x36688e,0xfffa3942),_0x4c4edb=_0x504a1f(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x8],_0x416e28,0x8771f681),_0x2a2e7d=_0x504a1f(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xb],_0x2575c5,0x6d9d6122),_0x31cca9=_0x504a1f(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0xe],_0xc32523,0xfde5380c),_0x367311=_0x504a1f(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x1],_0x36688e,0xa4beea44),_0x4c4edb=_0x504a1f(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x4],_0x416e28,0x4bdecfa9),_0x2a2e7d=_0x504a1f(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x7],_0x2575c5,0xf6bb4b60),_0x31cca9=_0x504a1f(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0xa],_0xc32523,0xbebfbc70),_0x367311=_0x504a1f(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0xd],_0x36688e,0x289b7ec6),_0x4c4edb=_0x504a1f(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x0],_0x416e28,0xeaa127fa),_0x2a2e7d=_0x504a1f(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x3],_0x2575c5,0xd4ef3085),_0x31cca9=_0x504a1f(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x6],_0xc32523,0x4881d05),_0x367311=_0x504a1f(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x9],_0x36688e,0xd9d4d039),_0x4c4edb=_0x504a1f(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0xc],_0x416e28,0xe6db99e5),_0x2a2e7d=_0x504a1f(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xf],_0x2575c5,0x1fa27cf8),_0x31cca9=_0x504a1f(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x2],_0xc32523,0xc4ac5665),_0x367311=_0x198eff(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x0],_0x4f356d,0xf4292244),_0x4c4edb=_0x198eff(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x7],_0x12dd81,0x432aff97),_0x2a2e7d=_0x198eff(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xe],_0x596200,0xab9423a7),_0x31cca9=_0x198eff(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x5],_0x160d19,0xfc93a039),_0x367311=_0x198eff(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0xc],_0x4f356d,0x655b59c3),_0x4c4edb=_0x198eff(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0x3],_0x12dd81,0x8f0ccc92),_0x2a2e7d=_0x198eff(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0xa],_0x596200,0xffeff47d),_0x31cca9=_0x198eff(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x1],_0x160d19,0x85845dd1),_0x367311=_0x198eff(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x8],_0x4f356d,0x6fa87e4f),_0x4c4edb=_0x198eff(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0xf],_0x12dd81,0xfe2ce6e0),_0x2a2e7d=_0x198eff(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x6],_0x596200,0xa3014314),_0x31cca9=_0x198eff(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0xd],_0x160d19,0x4e0811a1),_0x367311=_0x198eff(_0x367311,_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x708327[_0x1b6bdd+0x4],_0x4f356d,0xf7537e82),_0x4c4edb=_0x198eff(_0x4c4edb,_0x367311,_0x31cca9,_0x2a2e7d,_0x708327[_0x1b6bdd+0xb],_0x12dd81,0xbd3af235),_0x2a2e7d=_0x198eff(_0x2a2e7d,_0x4c4edb,_0x367311,_0x31cca9,_0x708327[_0x1b6bdd+0x2],_0x596200,0x2ad7d2bb),_0x31cca9=_0x198eff(_0x31cca9,_0x2a2e7d,_0x4c4edb,_0x367311,_0x708327[_0x1b6bdd+0x9],_0x160d19,0xeb86d391),_0x367311=_0xc34a02(_0x367311,_0x17e939),_0x31cca9=_0xc34a02(_0x31cca9,_0x41b9cd),_0x2a2e7d=_0xc34a02(_0x2a2e7d,_0x1510f5),_0x4c4edb=_0xc34a02(_0x4c4edb,_0x24f722);var _0x4b2a47=_0x29abcd(_0x367311)+_0x29abcd(_0x31cca9)+_0x29abcd(_0x2a2e7d)+_0x29abcd(_0x4c4edb);return _0x4b2a47[_0x9e81('58')]();};_0xod0='jsjiami.com.v6';
 


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