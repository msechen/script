/*
项目名称:小猪赚钱
项目注册地址:http://t.zlnu.cn/5RXXVz?c=210494

需要邀请码才能注册,接码注册不了

青龙、V4、V2P变量填写

变量名 soy_xzzq_data
变量值 手机号&密码&User-Agent

其中User-Agent为可选填写

多号用 @ 或 # 或 换行 隔开

定时任务
cron '0-59/2 * * * *'

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_xzzq.js

注:能活多久不知道,反正上了再说

*/
const $ = new Env('小猪赚钱');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x31e6f5=_0x33b2,_0x169a72=_0x522b,_0x48d42a=_0x2c1d;(function(_0x189c02,_0x1b25b5){const _0x1fd8ad=_0x522b,_0x38b1f2=_0x33b2,_0x47d115=_0x2c1d,_0x750afb=_0x189c02();while(!![]){try{const _0x5b8926=-parseInt(_0x47d115(0x10d))/0x1+-parseInt(_0x47d115(0x114))/0x2+parseInt(_0x38b1f2(0x13a))/0x3+parseInt(_0x38b1f2(0xd8))/0x4*(parseInt(_0x47d115(0x102))/0x5)+-parseInt(_0x1fd8ad(0xc5,'CZ#N'))/0x6*(-parseInt(_0x47d115(0x137))/0x7)+parseInt(_0x1fd8ad(0x12b,'(eKO'))/0x8*(parseInt(_0x1fd8ad(0xd5,']@Y5'))/0x9)+-parseInt(_0x1fd8ad(0xeb,'(%wE'))/0xa*(parseInt(_0x47d115(0x103))/0xb);if(_0x5b8926===_0x1b25b5)break;else _0x750afb['push'](_0x750afb['shift']());}catch(_0xf9eda9){_0x750afb['push'](_0x750afb['shift']());}}}(_0x5d8e,0xe3c32));let app_soy_xzzq_data=[],Host='http://pig.zxysy.net:99/';function _0x522b(_0x3a1444,_0x59ff29){const _0x5d8e2c=_0x5d8e();return _0x522b=function(_0x33b202,_0xfe75cc){_0x33b202=_0x33b202-0xb5;let _0x347dec=_0x5d8e2c[_0x33b202];if(_0x522b['RlCfww']===undefined){var _0xe8398e=function(_0x198105){const _0xb571de='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x11d00d='',_0x319fbd='';for(let _0x585e0e=0x0,_0x857b07,_0x522b60,_0xecba25=0x0;_0x522b60=_0x198105['charAt'](_0xecba25++);~_0x522b60&&(_0x857b07=_0x585e0e%0x4?_0x857b07*0x40+_0x522b60:_0x522b60,_0x585e0e++%0x4)?_0x11d00d+=String['fromCharCode'](0xff&_0x857b07>>(-0x2*_0x585e0e&0x6)):0x0){_0x522b60=_0xb571de['indexOf'](_0x522b60);}for(let _0x551057=0x0,_0x369fc5=_0x11d00d['length'];_0x551057<_0x369fc5;_0x551057++){_0x319fbd+='%'+('00'+_0x11d00d['charCodeAt'](_0x551057)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x319fbd);};const _0x2c1d6b=function(_0x2367d0,_0x549513){let _0x5b51bc=[],_0x4eac20=0x0,_0x374db4,_0x5442af='';_0x2367d0=_0xe8398e(_0x2367d0);let _0x56f255;for(_0x56f255=0x0;_0x56f255<0x100;_0x56f255++){_0x5b51bc[_0x56f255]=_0x56f255;}for(_0x56f255=0x0;_0x56f255<0x100;_0x56f255++){_0x4eac20=(_0x4eac20+_0x5b51bc[_0x56f255]+_0x549513['charCodeAt'](_0x56f255%_0x549513['length']))%0x100,_0x374db4=_0x5b51bc[_0x56f255],_0x5b51bc[_0x56f255]=_0x5b51bc[_0x4eac20],_0x5b51bc[_0x4eac20]=_0x374db4;}_0x56f255=0x0,_0x4eac20=0x0;for(let _0x3d4c19=0x0;_0x3d4c19<_0x2367d0['length'];_0x3d4c19++){_0x56f255=(_0x56f255+0x1)%0x100,_0x4eac20=(_0x4eac20+_0x5b51bc[_0x56f255])%0x100,_0x374db4=_0x5b51bc[_0x56f255],_0x5b51bc[_0x56f255]=_0x5b51bc[_0x4eac20],_0x5b51bc[_0x4eac20]=_0x374db4,_0x5442af+=String['fromCharCode'](_0x2367d0['charCodeAt'](_0x3d4c19)^_0x5b51bc[(_0x5b51bc[_0x56f255]+_0x5b51bc[_0x4eac20])%0x100]);}return _0x5442af;};_0x522b['Vboukd']=_0x2c1d6b,_0x3a1444=arguments,_0x522b['RlCfww']=!![];}const _0x1ea40b=_0x5d8e2c[0x0],_0xc21b9d=_0x33b202+_0x1ea40b,_0x334c03=_0x3a1444[_0xc21b9d];return!_0x334c03?(_0x522b['rmvteO']===undefined&&(_0x522b['rmvteO']=!![]),_0x347dec=_0x522b['Vboukd'](_0x347dec,_0xfe75cc),_0x3a1444[_0xc21b9d]=_0x347dec):_0x347dec=_0x334c03,_0x347dec;},_0x522b(_0x3a1444,_0x59ff29);}!(async()=>{const _0x24009a=_0x33b2,_0x26b38c=_0x2c1d,_0x30bde7=_0x522b;if(typeof $request!==_0x30bde7(0xf7,'U]6(')){}else{if(!$[_0x30bde7(0xdb,'RPQ(')]()){if(!$['getdata'](_0x30bde7(0x100,'tw7l'))){console[_0x26b38c(0xe4)]('\x0a【'+$[_0x26b38c(0xf6)]+'】：未填写\x20soy_xzzq_data\x20变量');return;}if($[_0x30bde7(0xca,'zkkQ')](_0x30bde7(0x136,'XN99'))&&$[_0x24009a(0x104)](_0x24009a(0xda))['indexOf']('@')>-0x1)app_soy_xzzq_data=$[_0x30bde7(0xe9,'nqQ1')](_0x30bde7(0x138,'(%wE'))[_0x26b38c(0xfa)]('@');else{if($['getdata'](_0x30bde7(0x119,'RPQ('))&&$[_0x24009a(0x104)](_0x26b38c(0x108))[_0x26b38c(0xc9)]('#')>-0x1)app_soy_xzzq_data=$['getdata'](_0x26b38c(0x108))[_0x24009a(0x11f)]('#');else $[_0x26b38c(0x11e)](_0x24009a(0xda))&&$[_0x26b38c(0x11e)]('soy_xzzq_data')['indexOf']('\x0a')>-0x1?app_soy_xzzq_data=$[_0x24009a(0x104)](_0x26b38c(0x108))[_0x30bde7(0xc3,'CZ#N')]('\x0a'):app_soy_xzzq_data=$['getdata'](_0x30bde7(0x100,'tw7l'))[_0x26b38c(0xfa)]();}}else{if(!process['env'][_0x24009a(0xda)]){console['log']('\x0a【'+$[_0x24009a(0x13d)]+_0x24009a(0xbc));return;}if(process[_0x24009a(0x101)]['soy_xzzq_data']&&process['env'][_0x30bde7(0xe7,'RLQM')][_0x24009a(0x129)]('@')>-0x1)app_soy_xzzq_data=process[_0x24009a(0x101)][_0x24009a(0xda)][_0x26b38c(0xfa)]('@');else{if(process[_0x26b38c(0x117)][_0x30bde7(0xe5,'docS')]&&process['env'][_0x26b38c(0x108)][_0x26b38c(0xc9)]('#')>-0x1)app_soy_xzzq_data=process[_0x24009a(0x101)][_0x26b38c(0x108)][_0x24009a(0x11f)]('#');else process[_0x26b38c(0x117)]['soy_xzzq_data']&&process['env'][_0x24009a(0xda)][_0x24009a(0x129)]('\x0a')>-0x1?app_soy_xzzq_data=process[_0x26b38c(0x117)][_0x30bde7(0x119,'RPQ(')][_0x30bde7(0xfe,'yQMe')]('\x0a'):app_soy_xzzq_data=process['env'][_0x30bde7(0xf2,']@Y5')][_0x24009a(0x11f)]();}}console[_0x24009a(0xcc)]('共'+app_soy_xzzq_data[_0x26b38c(0xf5)]+_0x30bde7(0xed,'(%wE'));let _0x4eac20='';console[_0x24009a(0xcc)](_0x26b38c(0x121)+new Date(new Date()['getTime']()+new Date()[_0x26b38c(0xd7)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x26b38c(0xdf)]()+'\x20===\x0a');for(i=0x0;i<app_soy_xzzq_data[_0x26b38c(0xf5)];i++){$[_0x24009a(0xcb)]=i+0x1,soy_xzzq_data=app_soy_xzzq_data[i][_0x26b38c(0xfa)]('&'),soy_xzzq_mobile=soy_xzzq_data[0x0],soy_xzzq_password=soy_xzzq_data[0x1],soy_xzzq_UA=soy_xzzq_data[0x2],console[_0x26b38c(0xe4)](_0x24009a(0x115)+$[_0x30bde7(0x12a,'YNpv')]+_0x30bde7(0xcf,'YNpv')),await implement();}$['isNode']()&&await notify['sendNotify']($['name'],_0x4eac20);}})()[_0x48d42a(0x13b)](_0x374db4=>$[_0x169a72(0xe0,'55h3')](_0x374db4))['finally'](()=>$[_0x31e6f5(0xbf)]());async function implement(){await login(0x0),await login(0x1);}function login(_0x5442af){return new Promise(_0x56f255=>{const _0x156523=_0x33b2,_0x38ce18=_0x522b,_0x27346e=_0x2c1d;let _0x3d4c19={'url':Host+_0x27346e(0xe8)+GetTime,'headers':{'Host':_0x27346e(0xe2),'Connection':_0x38ce18(0x109,'c[#a'),'Content-Length':(_0x156523(0xe1)+soy_xzzq_mobile+_0x27346e(0xd6)+soy_xzzq_password)['length'],'User-Agent':soy_xzzq_UA,'Content-Type':_0x27346e(0x106),'Accept':_0x27346e(0x10f),'Origin':_0x27346e(0xb9),'X-Requested-With':_0x27346e(0xfb)},'body':'&mobile='+soy_xzzq_mobile+_0x156523(0x11b)+soy_xzzq_password};$[_0x156523(0xc1)](_0x3d4c19,async(_0x586c7b,_0x3fcb4b,_0x1b10b2)=>{const _0x564254=_0x38ce18,_0x1c3894=_0x156523,_0x1f03e2=_0x27346e;try{if(_0x586c7b)console[_0x1f03e2(0xe4)]('\x0a【'+$[_0x1f03e2(0xf6)]+'---登录】:\x20网络请求失败'),subTitle+='\x0a【'+$['name']+_0x1c3894(0x11c);else{let _0x79e8b3=JSON[_0x1f03e2(0xee)](_0x1b10b2);if(_0x79e8b3['code']==0x1){token=_0x79e8b3['token'];let _0x57808f=_0x79e8b3['data'][_0x564254(0x10b,'6*hs')];ID=_0x79e8b3[_0x1f03e2(0xc2)]['id'];let _0x54c528=_0x79e8b3[_0x1f03e2(0xc2)][_0x1c3894(0x139)],_0x46a691=_0x79e8b3[_0x564254(0xd3,'kXEh')][_0x564254(0x11d,'(%wE')],_0x1601f2=_0x79e8b3['data']['experience'],_0x48fefa=_0x79e8b3['data']['coin']/0x2710;_0x5442af==0x0?(console['log']('\x0a【'+$[_0x1c3894(0x13d)]+_0x1c3894(0x133)+_0x79e8b3[_0x1f03e2(0xf9)]),await sign_status(),await Receive(),(0x9>GetHour()>=0x6||0xe>GetHour()>=0xc||0x15>GetHour()>=0x12)&&await Dinner()):console[_0x564254(0xba,'5X8c')]('\x0a【'+$[_0x1f03e2(0xf6)]+'---用户信息】:\x20\x0a---用户昵称：'+_0x57808f+_0x1f03e2(0xff)+_0x54c528+_0x1f03e2(0xdd)+_0x1601f2+_0x1f03e2(0x12d)+_0x48fefa['toFixed'](0x2)+_0x1f03e2(0x112)+_0x46a691+'元');}else console[_0x564254(0xc4,'(eKO')]('\x0a【'+$[_0x1f03e2(0xf6)]+'---登录】:\x20'+_0x79e8b3['msg']),subTitle+='\x0a【'+$[_0x1f03e2(0xf6)]+'---登录】:\x20'+_0x79e8b3[_0x1f03e2(0xf9)];}}catch(_0x90c777){}finally{_0x56f255();}});});}function _0x33b2(_0x3a1444,_0x59ff29){const _0x5d8e2c=_0x5d8e();return _0x33b2=function(_0x33b202,_0xfe75cc){_0x33b202=_0x33b202-0xb5;let _0x347dec=_0x5d8e2c[_0x33b202];return _0x347dec;},_0x33b2(_0x3a1444,_0x59ff29);}function sign_status(){const _0x1c0681=_0x48d42a;let _0x1c6482=Get_Request(_0x1c0681(0x11a));return new Promise(_0x935b94=>{const _0x3bd74c=_0x522b;$[_0x3bd74c(0xf8,'zkkQ')](_0x1c6482,async(_0x1bfe12,_0x3d3911,_0x5c9dc2)=>{const _0x4ddfed=_0x3bd74c,_0x251d29=_0x2c1d,_0x415f90=_0x33b2;try{if(_0x1bfe12)console[_0x415f90(0xcc)]('\x0a【'+$[_0x251d29(0xf6)]+_0x251d29(0x126)),subTitle+='\x0a【'+$[_0x4ddfed(0x113,'5X8c')]+_0x415f90(0xce);else{let _0x4d4569=JSON[_0x4ddfed(0xd9,'4unc')](_0x5c9dc2);_0x4d4569[_0x415f90(0x116)]==0x64?_0x4d4569[_0x4ddfed(0xf3,'yQMe')]['sign_in']==0x0?await sign():console[_0x415f90(0xcc)]('\x0a【'+$['name']+'---签到状态】:\x20今天已签到'):(console[_0x4ddfed(0xd4,'3cx&')]('\x0a【'+$[_0x4ddfed(0xbd,'HFCq')]+'---签到状态】:\x20'+_0x4d4569[_0x4ddfed(0xc7,'5X8c')]),subTitle+='\x0a【'+$[_0x251d29(0xf6)]+_0x4ddfed(0xb6,'RUU3')+_0x4d4569[_0x4ddfed(0x110,'z7jk')]);}}catch(_0x3857ad){}finally{_0x935b94();}});});}function sign(){let _0x26ad0b=Get_Request('server/sign-in/ctrl_signIn.php?v=');return new Promise(_0x28bcc0=>{const _0x2b66f1=_0x2c1d;$[_0x2b66f1(0xfc)](_0x26ad0b,async(_0x132208,_0xa47701,_0x3eb5bf)=>{const _0x10e91=_0x33b2,_0x1ded1a=_0x2b66f1,_0x1a9f20=_0x522b;try{if(_0x132208)console[_0x1a9f20(0x124,'55h3')]('\x0a【'+$[_0x1ded1a(0xf6)]+'---签到】:\x20网络请求失败'),subTitle+='\x0a【'+$['name']+_0x1a9f20(0xc0,'UT5J');else{let _0x45d78a=JSON['parse'](_0x3eb5bf);_0x45d78a[_0x1a9f20(0xc6,']@Y5')]==0x64?_0x45d78a['data'][_0x1a9f20(0x118,'WziR')]==0x0?console[_0x1a9f20(0x123,'*KMV')]('\x0a【'+$[_0x10e91(0x13d)]+_0x10e91(0xb7)):console['log']('\x0a【'+$['name']+_0x1a9f20(0xcd,'Zenl')):(console[_0x1ded1a(0xe4)]('\x0a【'+$[_0x1ded1a(0xf6)]+_0x10e91(0xec)+_0x45d78a['msg']),subTitle+='\x0a【'+$[_0x1ded1a(0xf6)]+'---签到】:\x20'+_0x45d78a[_0x1ded1a(0xf9)]);}}catch(_0x5db2ef){}finally{_0x28bcc0();}});});}function _0x2c1d(_0x3a1444,_0x59ff29){const _0x5d8e2c=_0x5d8e();return _0x2c1d=function(_0x33b202,_0xfe75cc){_0x33b202=_0x33b202-0xb5;let _0x347dec=_0x5d8e2c[_0x33b202];if(_0x2c1d['rPlEGm']===undefined){var _0xe8398e=function(_0x2c1d6b){const _0x198105='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xb571de='',_0x11d00d='';for(let _0x319fbd=0x0,_0x585e0e,_0x857b07,_0x522b60=0x0;_0x857b07=_0x2c1d6b['charAt'](_0x522b60++);~_0x857b07&&(_0x585e0e=_0x319fbd%0x4?_0x585e0e*0x40+_0x857b07:_0x857b07,_0x319fbd++%0x4)?_0xb571de+=String['fromCharCode'](0xff&_0x585e0e>>(-0x2*_0x319fbd&0x6)):0x0){_0x857b07=_0x198105['indexOf'](_0x857b07);}for(let _0xecba25=0x0,_0x551057=_0xb571de['length'];_0xecba25<_0x551057;_0xecba25++){_0x11d00d+='%'+('00'+_0xb571de['charCodeAt'](_0xecba25)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x11d00d);};_0x2c1d['vnttEl']=_0xe8398e,_0x3a1444=arguments,_0x2c1d['rPlEGm']=!![];}const _0x1ea40b=_0x5d8e2c[0x0],_0xc21b9d=_0x33b202+_0x1ea40b,_0x334c03=_0x3a1444[_0xc21b9d];return!_0x334c03?(_0x347dec=_0x2c1d['vnttEl'](_0x347dec),_0x3a1444[_0xc21b9d]=_0x347dec):_0x347dec=_0x334c03,_0x347dec;},_0x2c1d(_0x3a1444,_0x59ff29);}function Receive(){let _0x237142=Get_Request('server/coin-log/ctrl_receive.php?v=');return new Promise(_0x1e81d9=>{const _0x5ade15=_0x522b;$[_0x5ade15(0xf4,'CZ#N')](_0x237142,async(_0x112c79,_0xd78570,_0xa9ec3e)=>{const _0x214648=_0x5ade15,_0xe3f2aa=_0x33b2,_0x144391=_0x2c1d;try{if(_0x112c79)console[_0x144391(0xe4)]('\x0a【'+$[_0x144391(0xf6)]+_0x144391(0xbe)),subTitle+='\x0a【'+$[_0xe3f2aa(0x13d)]+_0xe3f2aa(0xf1);else{let _0x343257=JSON['parse'](_0xa9ec3e);_0x343257[_0x214648(0xe3,'docS')]==0x64?console[_0x144391(0xe4)]('\x0a【'+$[_0x214648(0xb8,'2kqh')]+_0x214648(0xea,'tYal')):(console['log']('\x0a【'+$['name']+_0x144391(0x131)+_0x343257[_0x144391(0xf9)]),subTitle+='\x0a【'+$['name']+'---收取金币】:\x20'+_0x343257[_0x214648(0x12c,'l#Hr')]);}}catch(_0x2c83ef){}finally{_0x1e81d9();}});});}function Dinner(){const _0x23f4cc=_0x169a72;let _0x17fead=Get_Request(_0x23f4cc(0x10c,'tw7l'));return new Promise(_0x254843=>{const _0x80ea58=_0x33b2;$[_0x80ea58(0x13f)](_0x17fead,async(_0x23d09a,_0x5e8973,_0x2b9960)=>{const _0x43577a=_0x522b,_0xa04609=_0x80ea58,_0xade8de=_0x2c1d;try{if(_0x23d09a)console[_0xade8de(0xe4)]('\x0a【'+$['name']+_0xa04609(0x12e)),subTitle+='\x0a【'+$['name']+_0xa04609(0x12e);else{let _0x33a820=JSON['parse'](_0x2b9960);_0x33a820[_0xade8de(0xc8)]==0x64?console[_0xa04609(0xcc)]('\x0a【'+$[_0xade8de(0xf6)]+'---一日三餐】:\x20领取成功~'):(console[_0xade8de(0xe4)]('\x0a【'+$[_0x43577a(0x120,'R6*$')]+'---一日三餐】:\x20'+_0x33a820[_0xade8de(0xf9)]),subTitle+='\x0a【'+$[_0xade8de(0xf6)]+_0xa04609(0x127)+_0x33a820['msg']);}}catch(_0x9b117a){}finally{_0x254843();}});});}function Post_Request(_0x219314,_0xbce07f){const _0x1072ff=_0x169a72,_0x2ef11e=_0x48d42a,_0x151a6e=_0x31e6f5;return{'url':''+Host+_0x219314+GetTime,'headers':{'Host':_0x151a6e(0x107),'Connection':_0x2ef11e(0x128),'Content-Length':_0xbce07f[_0x151a6e(0x13e)],'User-Agent':soy_xzzq_UA,'Content-Type':'application/x-www-form-urlencoded','Accept':'*/*','Origin':_0x1072ff(0x132,'yQMe'),'X-Requested-With':_0x151a6e(0x122)},'body':_0xbce07f};}function Get_Request(_0x3db82f){const _0xc7ad32=_0x31e6f5,_0x7260bc=_0x169a72;return{'url':''+Host+_0x3db82f+GetTime,'headers':{'Host':_0x7260bc(0x12f,'YNpv'),'Connection':'keep-alive','TC-Token':token,'TC-Id':ID,'User-Agent':soy_xzzq_UA,'appKey':'5ded368547b86b331','Content-type':_0x7260bc(0x130,'HFCq'),'Accept':'*/*','X-Requested-With':_0x7260bc(0x111,'qDWA'),'Cookie':_0x7260bc(0xd1,'ML$y')+token+_0xc7ad32(0xfd)+soy_xzzq_mobile+_0xc7ad32(0xd2)+ID}};}function _0x5d8e(){const _0x4cf90=['C2vYDMvYl3vZzxiVCMvJzwL2zvn0yxr1CY5WAha/DJ0','&password=','---登录】:\x20网络请求失败','WQnkygxdSW','z2v0zgf0yq','split','WOPOWQlcSq','pt09ioIeMUACRoAjP+IHJcaTiowmL+s6RoAxTUMxTo+8MG','w2a.W2Apig.zxysy.net','W6ntWQ8','WR3dQMi','getDate','ls0T562+5yIW54Q25Ocb44croIdNVzhNU5ZOR7FMSylLPlhOTku','---一日三餐】:\x20','A2vLCc1HBgL2zq','indexOf','WO/cVdldTmod','WOLGnv0yWPuzWOLr','W7SbW5W','cI0TlEw9K+wjJEMhKEw4GE+8MG','---一日三餐】:\x20网络请求失败','WPBcUZhcV8obW77cV3rvs8omkJtdNtCg','bbBcMcRcTSkHWQBdGSodW48oo1lcM8oQv8kqWONcIgtdM8kpW5jqkmkqt8oeW6Pfj1Wj','ls0T5Ps25y+w6yEr5BIb44croIa','sSkXkriHgWT+s0TeWRZcNmkYvhVdRMuNpX3dNf0','---登录】:\x20','wCo4k8oUBSoWs3G','sendNotify','orpdRr0onb1PWPzKW43dJCoQ','oty3otzADffJwhO','WR1kD1/dSSk+naLLW4xdHmkwmW','level','3743610mROLEh','y2f0y2G','isNode','name','length','get','getSeconds','eCopWRdNRiJLIi7NIOZMGjBJGPhdNuO','---签到】:\x20签到成功~','W67cQmkIhG','Ahr0CdOVl3bPzY56EhLZEs5Uzxq6otK','WRRcS8k0','72310LDYpRa','】：未填写\x20soy_xzzq_data\x20变量','cWFcHsm','ls0T5Ps25y+w6yEr5BIb44croIdNVzhNU5ZOR7FMSylLPlhOTku','done','ccCa56+O5yMw44giW5JcK+E9OoE5OoIVHoAZLUwKJUI2TG','post','zgf0yq','W5dcQ8kaDLe','W5a8za','WPddQ8oCD03cHwlcJ8kF','nSoOcxe','WRVcR8k0','y29Kzq','Aw5KzxHpzG','WOZdLXiSka/cHG','index','log','dmkwWQlNR5JLIl7JGAZcOmog5lMP5AsW5Bw8566D5yUS','---签到状态】:\x20网络请求失败','W4BKU7JOTBdLJABKUydLIkFJG5C','getHours','pefwg8o8WQqkBCkoW6n5W7VdHYFdVW9sjcOXW5RdJ0PfesZcVqPCWO01A8ktkCo1le/cJSkOuwNcU8o5r2pcLvldTCkrWOTbtfJdVSkva8kfEmktWR9GbgDkmWdcVZbdWR5MxMVcI8kEW6tdRrhcG8oHwg8xfCopl8oIjCo/fCoOr1ddT0ZcSCoUW7RdO2G3tSoWW5BdUfNcKmoJbaDgWRtdRCkhW7W0W43dR8kHW5/cPSkuW6xcVCkvW71+WR/dImkxfSk7CYCKWQ52pMVcGwj4mNNdHuddLSo/W4T5WQddKdVcVSk/cWr1WRdcNSk9mmoFCcGCq8kJzCkzWOCsWQaHkSk+hSoKo2tdVCoIWPTOqbdcSCo0W6pcR8kGDSksW7qxWRdcN3fHWQRdLMfvk8kYWOZcJSkEbSkTWOJdGCkPB17dL8k3W6NdL3VcS3VcOSk0iSo+i1ddQCotW5WIW6/dUXZdTv8EWRr0W5FdG8kKoYVdNmkinHDBn8krW4mZW7GBi8oCl8o8gHabW5njBSkiwty4WQFdKCkimtOhW4xdPG',';\x20userid=','q8osE8kb','lZ7cRG','zmk2vcWqpWqJlCk4W7/dLW','jNbHC3n3B3jKpq','z2v0vgLTzxPVBMvpzMzZzxq','4WDYUWL','W5NdICokcIq','soy_xzzq_data','W5ddOwPoiK8','WOO7e8oshwBcJhFcM3/cUmocWPW','cI0TlEw9K+wjJEE7J+MQJo+8MG','mJq0nZiZmeXjvNvZCq','Dg9mB2nHBgvtDhjPBMC','WR3dQMlcHfGf','&mobile=','CgLNlNP4Exn5lM5LDdO5oq','v8oOlmkl','Bg9N','r8oOmCkXevlcOvjwW4DsCmo6','536BZWaqV','W5eqW4nYWPxdI8oLW4NcPYe6zbm','Ag9Tzs9PBMrLEc9SB2DPBJ92pq','W55Pu8kfsIpdNq','WPxdVJpMLj7LJQpPH5FLUyVJG4yXxUAvG+wpVUAlOUwlOru','W7WroJFcUmo3FJrZW7FdKmkriW','---签到】:\x20','5lUK6lsd5y+5','CgfYC2u','WQrhWOpcRSoWWOddR1JcQCoDWQxcLSoa','119898PxsCUG','---收取金币】:\x20网络请求失败','jSoOfeTrFs4QaCkFW4VdPcO','rSkKkqm','W4tcVSky','BgvUz3rO','BMfTzq','WO98CuxcSK/cQ8kjrW','WOZdLXi','BxnN','C3bSAxq','DZjHlLCYqxbPzY56EhLZEs5Uzxq','z2v0',';\x20mobile=','uCk1mqTV','cI0TlEw9K+wjJEETIEE6P++8MG','krxdG8kFbqdcH8owW6KIWRldNSok','env','mJu4nta4mejiywfzuq','nZDSD2P6vLu','getdata','qmowE8kTCbz7kq','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','pig.zxysy.net:99','C295x3H6ENfFzgf0yq','lt3dMw7dTx7cJmojCmkE','BwvZC2fNzq','BCklWQW8FSk4FSou','kr/dImk2gaJdKSoeW5KVWR3cH8ohEgtdKSoCWRNcT2bgemkmW4pcHXOCl8knzmoUubGa','nJy2nZmWzu9YC2fq','z2v0rNvSBfLLyxi','kI8Q','kMxcSW','WQ1ReX4gW6n1aCkBtw7cSwRcQJ7cNICtWRqm','5lIhcI0TlEw9K+wjJEs9MEMINE+8MG','WRJcVCk+W7q','nZiZmtbmrfLWuMe','\x0a开始【第\x20','code','zw52','uCkZDmoUcYtdNW','W4RdVv1+pLaPW403W4v8kGq'];_0x5d8e=function(){return _0x4cf90;};return _0x5d8e();}function GetTime(){const _0x208109=_0x31e6f5,_0x45c858=_0x169a72,_0x2a4f59=_0x48d42a;let _0x1b1b82=new Date(),_0x2ba7a0=_0x1b1b82[_0x2a4f59(0x10e)](),_0x225c02=_0x1b1b82[_0x45c858(0x105,'kXEh')]()+0x1;_0x225c02=_0x225c02<0xa?'0'+_0x225c02:_0x225c02;let _0x2b4af9=_0x1b1b82[_0x208109(0x125)]();_0x2b4af9=_0x2b4af9<0xa?'0'+_0x2b4af9:_0x2b4af9;let _0x4f63d5=_0x1b1b82['getHours']();_0x4f63d5=_0x4f63d5<0xa?'0'+_0x4f63d5:_0x4f63d5;let _0x5f10fb=_0x1b1b82['getMinutes']();_0x5f10fb=_0x5f10fb<0xa?'0'+_0x5f10fb:_0x5f10fb;let _0x656163=_0x1b1b82[_0x208109(0xb5)]();_0x656163=_0x656163<0xa?'0'+_0x656163:_0x656163;let _0x10a4e7=''+_0x2ba7a0+_0x225c02+_0x2b4af9+_0x4f63d5+_0x5f10fb+_0x656163;return _0x10a4e7;}function GetHour(){const _0x724a4c=_0x31e6f5;let _0x59d8b6=new Date(),_0x5e7675=_0x59d8b6[_0x724a4c(0xd0)]();return _0x5e7675=_0x5e7675<0xa?'0'+_0x5e7675:_0x5e7675,_0x5e7675;}async function message(){const _0x2f35dc=_0x31e6f5,_0x43b0d9=_0x48d42a;tz==0x1&&$[_0x43b0d9(0xf9)]($[_0x2f35dc(0x13d)],'',$[_0x43b0d9(0x10a)]),$[_0x2f35dc(0x13c)]()&&await notify[_0x2f35dc(0x135)]($[_0x43b0d9(0xf6)],$['message']);}


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