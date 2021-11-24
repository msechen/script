/*
项目名称:小猪赚钱
项目注册地址:http://t.zlnu.cn/5RXXVz?c=210494

需要邀请码才能注册,接码注册不了

青龙、V4、V2P变量填写

变量名 soy_xzzq_data
变量值 0&手机号&密码&User-Agent

其中0为通知控制,1为通知,其他数字为不通知,User-Agent为可选填写

多号用 @ 或 # 或 换行 隔开

定时任务,看容量自行修改
cron '0-59/2 * * * *'

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_xzzq.js

注:能活多久不知道,反正上了再说

*/
const $ = new Env('小猪赚钱');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x501143=_0x1437,_0x2dd4cc=_0x452c;(function(_0x48d880,_0x196588){const _0x2fbdc2=_0x1437,_0x2e4324=_0x452c,_0x2b66af=_0x1191,_0x3a8837=_0x48d880();while(!![]){try{const _0x12d848=-parseInt(_0x2b66af(0x1de))/0x1+parseInt(_0x2e4324(0x1b2))/0x2*(-parseInt(_0x2e4324(0x1c7))/0x3)+-parseInt(_0x2fbdc2(0x1b6,'e0hS'))/0x4*(parseInt(_0x2b66af(0x180))/0x5)+parseInt(_0x2fbdc2(0x1bb,'rlEt'))/0x6+-parseInt(_0x2fbdc2(0x161,'7q7K'))/0x7+-parseInt(_0x2b66af(0x1b3))/0x8*(parseInt(_0x2b66af(0x186))/0x9)+parseInt(_0x2fbdc2(0x19e,'*Nzp'))/0xa*(parseInt(_0x2b66af(0x18e))/0xb);if(_0x12d848===_0x196588)break;else _0x3a8837['push'](_0x3a8837['shift']());}catch(_0x137106){_0x3a8837['push'](_0x3a8837['shift']());}}}(_0x56c9,0x96eab));function _0x1191(_0x458b21,_0x32baf2){const _0x56c95b=_0x56c9();return _0x1191=function(_0x11919a,_0x5ac9d0){_0x11919a=_0x11919a-0x158;let _0x3d74a7=_0x56c95b[_0x11919a];return _0x3d74a7;},_0x1191(_0x458b21,_0x32baf2);}let app_soy_xzzq_data=[],Host=_0x2dd4cc(0x1b0),subTitle='';!(async()=>{const _0x27036a=_0x1437,_0x3e4d40=_0x2dd4cc,_0x577984=_0x1191;if(typeof $request!=='undefined'){}else{if(!$['isNode']()){if(!$[_0x577984(0x1a9)]('soy_xzzq_data')){console[_0x3e4d40(0x1d8)]('\x0a【'+$[_0x3e4d40(0x1a0)]+'】：未填写\x20soy_xzzq_data\x20变量');return;}if($[_0x3e4d40(0x16d)](_0x577984(0x169))&&$[_0x27036a(0x172,'#d&]')]('soy_xzzq_data')[_0x27036a(0x1c5,'Pm%B')]('@')>-0x1)app_soy_xzzq_data=$['getdata'](_0x27036a(0x170,'#W@e'))['split']('@');else{if($['getdata'](_0x577984(0x169))&&$[_0x577984(0x1a9)](_0x3e4d40(0x16f))[_0x27036a(0x1ce,'5$Cp')]('#')>-0x1)app_soy_xzzq_data=$['getdata'](_0x577984(0x169))[_0x577984(0x1a3)]('#');else $['getdata']('soy_xzzq_data')&&$[_0x3e4d40(0x16d)](_0x27036a(0x1bf,'92)M'))[_0x577984(0x191)]('\x0a')>-0x1?app_soy_xzzq_data=$[_0x577984(0x1a9)](_0x577984(0x169))[_0x577984(0x1a3)]('\x0a'):app_soy_xzzq_data=$['getdata'](_0x577984(0x169))[_0x3e4d40(0x19c)]();}}else{if(!process[_0x577984(0x1d6)][_0x577984(0x169)]){console[_0x27036a(0x177,'yg89')]('\x0a【'+$[_0x27036a(0x1d7,'2GDA')]+_0x577984(0x1a4));return;}if(process[_0x27036a(0x163,'R(Eo')][_0x577984(0x169)]&&process['env'][_0x3e4d40(0x16f)][_0x3e4d40(0x1d3)]('@')>-0x1)app_soy_xzzq_data=process[_0x577984(0x1d6)][_0x3e4d40(0x16f)][_0x27036a(0x17b,'FjFz')]('@');else{if(process[_0x577984(0x1d6)][_0x3e4d40(0x16f)]&&process[_0x577984(0x1d6)][_0x3e4d40(0x16f)][_0x577984(0x191)]('#')>-0x1)app_soy_xzzq_data=process[_0x3e4d40(0x1af)][_0x577984(0x169)]['split']('#');else process['env']['soy_xzzq_data']&&process[_0x3e4d40(0x1af)][_0x577984(0x169)][_0x577984(0x191)]('\x0a')>-0x1?app_soy_xzzq_data=process[_0x27036a(0x194,'Kq!q')][_0x3e4d40(0x16f)][_0x3e4d40(0x19c)]('\x0a'):app_soy_xzzq_data=process[_0x3e4d40(0x1af)][_0x577984(0x169)][_0x27036a(0x18f,'Or93')]();}}console[_0x3e4d40(0x1d8)]('共'+app_soy_xzzq_data[_0x27036a(0x199,'rlEt')]+_0x27036a(0x1da,'YxCV')),console[_0x577984(0x1d5)](_0x3e4d40(0x176)+new Date(new Date()['getTime']()+new Date()[_0x577984(0x193)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x577984(0x1b8)),subTitle='';for(i=0x0;i<app_soy_xzzq_data[_0x27036a(0x160,'Nako')];i++){$['index']=i+0x1,soy_xzzq_data=app_soy_xzzq_data[i][_0x27036a(0x165,'XJQc')]('&'),notice=soy_xzzq_data[0x0],soy_xzzq_mobile=soy_xzzq_data[0x1],soy_xzzq_password=soy_xzzq_data[0x2],soy_xzzq_UA=soy_xzzq_data[0x3],console[_0x3e4d40(0x1d8)](_0x577984(0x196)+$[_0x577984(0x1c9)]+'\x20个账号任务】'),await implement();}notice==0x1&&($[_0x27036a(0x164,'GT5q')]()&&await notify['sendNotify']($[_0x577984(0x19a)],subTitle));}})()['catch'](_0x1ead92=>$[_0x2dd4cc(0x185)](_0x1ead92))[_0x2dd4cc(0x1b7)](()=>$[_0x501143(0x182,'(!)]')]());async function implement(){await login(0x0),await login(0x1);}function login(_0x5eb693){return new Promise(_0x2f553a=>{const _0x1edbdb=_0x1191,_0x11e1b6=_0x452c,_0x4b773a=_0x1437;let _0x3f24da={'url':Host+_0x4b773a(0x1d1,'HNAm')+GetTime,'headers':{'Host':_0x11e1b6(0x16c),'Connection':_0x11e1b6(0x1b9),'Content-Length':('&mobile='+soy_xzzq_mobile+'&password='+soy_xzzq_password)[_0x11e1b6(0x1ba)],'User-Agent':soy_xzzq_UA,'Content-Type':_0x1edbdb(0x1a7),'Accept':_0x1edbdb(0x173),'Origin':'http://pig.zxysy.net:99','X-Requested-With':_0x11e1b6(0x188)},'body':_0x4b773a(0x195,'rlEt')+soy_xzzq_mobile+_0x1edbdb(0x1bd)+soy_xzzq_password};$['post'](_0x3f24da,async(_0x1a2f57,_0x415bf5,_0x23c726)=>{const _0x1b088f=_0x11e1b6,_0x13a45a=_0x1edbdb,_0x366917=_0x4b773a;try{if(_0x1a2f57)console['log']('\x0a【'+$[_0x366917(0x179,'GT5q')]+_0x13a45a(0x16b)),subTitle+='\x0a【'+$['name']+_0x13a45a(0x16b);else{let _0x571f3d=JSON[_0x1b088f(0x166)](_0x23c726);if(_0x571f3d[_0x13a45a(0x15d)]==0x1){token=_0x571f3d[_0x1b088f(0x192)];let _0x369470=_0x571f3d[_0x366917(0x18b,'(bD5')]['nickname'];ID=_0x571f3d[_0x13a45a(0x1db)]['id'];let _0x2b7ef7=_0x571f3d[_0x366917(0x168,'i^HJ')][_0x1b088f(0x18d)],_0x2a97ee=_0x571f3d['data'][_0x1b088f(0x190)],_0x563457=_0x571f3d['data'][_0x1b088f(0x1a1)],_0x507f8c=_0x571f3d[_0x366917(0x15b,'IALT')][_0x13a45a(0x183)]/0x2710;_0x5eb693==0x0?(console[_0x13a45a(0x1d5)]('\x0a【'+$[_0x1b088f(0x1a0)]+_0x1b088f(0x1bc)+_0x571f3d['msg']),await sign_status(),await Receive(),(0x9>GetHour()>=0x6||0xe>GetHour()>=0xc||0x15>GetHour()>=0x12)&&await Dinner()):(console[_0x366917(0x1cb,'s[*T')]('\x0a【'+$['name']+_0x366917(0x187,'$x]9')+_0x369470+_0x1b088f(0x1df)+_0x2b7ef7+'\x0a---当前经验：'+_0x563457+_0x13a45a(0x158)+_0x507f8c['toFixed'](0x2)+'万\x0a---当前余额：'+_0x2a97ee+'元'),subTitle+='\x0a【'+$['name']+_0x1b088f(0x1c1)+_0x369470+'\x0a---当前等级：'+_0x2b7ef7+_0x1b088f(0x1cd)+_0x563457+'\x0a---当前金币：'+_0x507f8c[_0x1b088f(0x1ab)](0x2)+_0x13a45a(0x1c2)+_0x2a97ee+'元');}else console['log']('\x0a【'+$['name']+_0x366917(0x1cf,'#W@e')+_0x571f3d[_0x13a45a(0x1dc)]),subTitle+='\x0a【'+$['name']+_0x366917(0x15e,'YgR*')+_0x571f3d[_0x366917(0x1c4,'YI2V')];}}catch(_0x3cb836){}finally{_0x2f553a();}});});}function sign_status(){const _0x3e39a0=_0x1191;let _0x4dae77=Get_Request(_0x3e39a0(0x1d0));return new Promise(_0x29f8ed=>{const _0xcc28c4=_0x1437;$[_0xcc28c4(0x1d4,'YxCV')](_0x4dae77,async(_0x86088f,_0x807383,_0x269aa3)=>{const _0x31bf27=_0x1191,_0x1a8b18=_0x452c,_0x42c735=_0xcc28c4;try{if(_0x86088f)console['log']('\x0a【'+$[_0x42c735(0x1a6,'e0hS')]+'---签到状态】:\x20网络请求失败'),subTitle+='\x0a【'+$['name']+_0x42c735(0x1a2,'#d&]');else{let _0x40b9cc=JSON[_0x1a8b18(0x166)](_0x269aa3);_0x40b9cc[_0x1a8b18(0x178)]==0x64?_0x40b9cc[_0x31bf27(0x1db)][_0x1a8b18(0x1ac)]==0x0?await sign():console[_0x1a8b18(0x1d8)]('\x0a【'+$[_0x31bf27(0x19a)]+_0x31bf27(0x1aa)):(console[_0x31bf27(0x1d5)]('\x0a【'+$[_0x1a8b18(0x1a0)]+'---签到状态】:\x20'+_0x40b9cc[_0x1a8b18(0x16a)]),subTitle+='\x0a【'+$[_0x1a8b18(0x1a0)]+_0x31bf27(0x1b1)+_0x40b9cc[_0x31bf27(0x1dc)]);}}catch(_0x3affaf){}finally{_0x29f8ed();}});});}function sign(){const _0x4c78fc=_0x1191;let _0x4e7a0b=Get_Request(_0x4c78fc(0x162));return new Promise(_0x20aec1=>{const _0x44d0b1=_0x452c;$[_0x44d0b1(0x159)](_0x4e7a0b,async(_0x2e59bb,_0x2bfa33,_0x9bcfa3)=>{const _0x4e92cf=_0x44d0b1,_0x242921=_0x1437,_0xe924c5=_0x1191;try{if(_0x2e59bb)console['log']('\x0a【'+$['name']+'---签到】:\x20网络请求失败'),subTitle+='\x0a【'+$['name']+'---签到】:\x20网络请求失败';else{let _0x19b8ea=JSON[_0xe924c5(0x174)](_0x9bcfa3);_0x19b8ea[_0xe924c5(0x15d)]==0x64?_0x19b8ea[_0x242921(0x1c8,'YI2V')][_0xe924c5(0x1d9)]==0x0?console[_0x242921(0x1c6,'IALT')]('\x0a【'+$[_0x242921(0x1ae,'(!)]')]+'---签到】:\x20签到成功~'):console[_0xe924c5(0x1d5)]('\x0a【'+$[_0xe924c5(0x19a)]+_0xe924c5(0x1c0)):(console[_0xe924c5(0x1d5)]('\x0a【'+$[_0x4e92cf(0x1a0)]+_0x4e92cf(0x17f)+_0x19b8ea[_0x4e92cf(0x16a)]),subTitle+='\x0a【'+$[_0xe924c5(0x19a)]+'---签到】:\x20'+_0x19b8ea[_0xe924c5(0x1dc)]);}}catch(_0x3a0e30){}finally{_0x20aec1();}});});}function _0x56c9(){const _0x5880b1=['W6rkzSkD','soy_xzzq_data','BxnN','---登录】:\x20网络请求失败','CgLNlNP4Exn5lM5LDdO5oq','z2v0zgf0yq','getFullYear','C295x3H6ENfFzgf0yq','tCkzcCozW4FdRmkdf8o4ggddMCk4','ls0T5lIa5PEL5lIj6Asq44croIdPOOBLJ5BMIjdLIP9+','W4NdH8kEebBcTx0','*/*','parse','keep-alive','pt09ioIeMUACRoAjP+IHJcaTiowmL+s6RoAxTUMxTo+8MG','AvBdOa','y29Kzq','vvH5W5G','t8klzUs7QEAwHEs6NUMMU+ocG309','W4WvWQBdMSkf','W7dcUSkWbXddQ8k6kCk7awTY','udbL','7070371UaskYG','ls0T562+5yIW44croIa','871435lrBMTZ','dWWSWOxdKSktWRtdSmoGmmk1WP4','bSojjCkm','coin','kI8Q','Bg9NrxjY','258615qgsPJc','WONcSSoT55wr5OQJ5l+D5OkY44oXgCoPf3RcJ2JNLOFMIlZMMiFNPzBVVPO','DZjHlLCYqxbPzY56EhLZEs5Uzxq','ndG3mdeYCgX6Du1n','5ded368547b86b331','j1JcM8ko','W4ZcG8k7zCkmvJH9EJJcGmo3','Bgv2zwW','737BAsIDJ','W4hdP8kiBc4','Bw9UzxK','indexOf','Dg9Rzw4','getTimezoneOffset','WPJdLCo8','iCoKW4K7tmo+ESor','\x0a开始【第\x20','getMonth','pmozWO8','A8oSW4G+uCo6','name','---收取金币】:\x20','C3bSAxq','getDate','WRW1mJPrEvSTW7hdP3KV','w2a.W2Apig.zxysy.net','BMfTzq','zxHWzxjPzw5Jzq','WOpcJ8oh56Yk5yMh54M35OcD44k4ycFNVPZNUQZORlRMSBdLPAdOTzO','split','】：未填写\x20soy_xzzq_data\x20变量','BH/dNvu','ACkwWOVcTq','application/x-www-form-urlencoded','get','getdata','---签到状态】:\x20今天已签到','Dg9gAxHLza','C2LNBL9PBG','W5tcHSka','dmohjSkm','zw52','Ahr0CdOVl3bPzY56EhLZEs5Uzxq6otKV','---签到状态】:\x20','ngHQzhfbAW','232cALzoU','u8otEhhdQCkBB0tdTSoTWPOoWQhdQvFdImkQWQnOW7ddLqnC','eCktW6f2uSkkWQK','m8krWOJcKGdcGY8','zMLUywXSEq','\x20===\x0a','A2vLCc1HBgL2zq','BgvUz3rO','nSk5WPDTe8kHl8kVWP7dTIC6W6W','ls0T55M75B2v44croIa','&password=','---收取金币】:\x20网络请求失败','CNmhW7FcSSosjMr5Fd00nG','---签到】:\x20今天已签到','ls0T55sO5OI35l+H5OgV44croIakls0T55sO5OI35PI156EW77YA','万\x0a---当前余额：','W7izW6ldSCoWzw/dGmos','EquO','W5hcH8kdj8kxW73cNW','avPc','mtGXmJy5CKz5q09M','CbC7W4S','index','ls0T5lIa5PEL5lIj6Asq44croIdNVzhNU5ZOR7FMSylLPlhOTku','W7ZdSw0','W4NdH8kEor7cR2NdNt90','cI0TlEw9K+wjJEE7J+MQJo+8MG','W6qFW5aNW4xdSGG','e8oBxEEBVEw/QUocH8odrG','server/user/receiveStatus.php?v=','mtFcPmkjWR0FyJxcQGFdLmoxn8onCeKsW6hcJa','mtaXndyZmenQzuP3Ba','Aw5KzxHpzG','wZP2','log','env','WRFcM0xcQW','Bg9N','sign_in','5lIw6lw55y+1','data','msg','z2v0sg91CNm','487012plzuMM','cI0TlEw9K+wjJEETIEE6P++8MG','\x0a---当前金币：','z2v0','exiV5lQO5Pwl5lQp6Awv44gVWRbr','cvrrnG','C2vYDMvYl2nVAw4TBg9Nl2n0CMXFCMvJzwL2zs5WAha/DJ0','code','bHL955Ix5B6t44kPbYO','ALPL5PAC5yYE6yw25BUz44cAeCok','kXiMW43cVmop','B8oBW4tcQd/dVCo+W5tdLLJcMSkJW6y','server/sign-in/ctrl_signIn.php?v=','zrddHG','uKPAW5lcJ8og','zmoWAuBdGG','CgfYC2u','W67dNSorW40ifudcO8keW6KzbmoBnmoaW4JdVZhdQLNdJw92g8oWjqpcOulcGJa/yW'];_0x56c9=function(){return _0x5880b1;};return _0x56c9();}function Receive(){const _0x3d5ca6=_0x2dd4cc;let _0x1bceb5=Get_Request(_0x3d5ca6(0x15c));return new Promise(_0xbd02a0=>{const _0x2eb72e=_0x1191;$[_0x2eb72e(0x1a8)](_0x1bceb5,async(_0x56cdd4,_0xaeda22,_0x51bb01)=>{const _0x5c1977=_0x1437,_0x23b9c3=_0x2eb72e,_0x2116d5=_0x452c;try{if(_0x56cdd4)console['log']('\x0a【'+$[_0x2116d5(0x1a0)]+_0x23b9c3(0x1be)),subTitle+='\x0a【'+$['name']+'---收取金币】:\x20网络请求失败';else{let _0x24d33a=JSON['parse'](_0x51bb01);_0x24d33a['code']==0x64?console[_0x2116d5(0x1d8)]('\x0a【'+$[_0x23b9c3(0x19a)]+'---收取金币】:\x20收取成功~'):(console[_0x23b9c3(0x1d5)]('\x0a【'+$[_0x23b9c3(0x19a)]+_0x5c1977(0x15f,'Nako')+_0x24d33a[_0x2116d5(0x16a)]),subTitle+='\x0a【'+$['name']+_0x23b9c3(0x19b)+_0x24d33a[_0x5c1977(0x198,'0w@k')]);}}catch(_0x4a640b){}finally{_0xbd02a0();}});});}function Dinner(){let _0x56f7ce=Get_Request('server/coin-log/ctrl_dinner.php?v=');return new Promise(_0x4a8810=>{const _0x197cd0=_0x1191;$[_0x197cd0(0x1a8)](_0x56f7ce,async(_0x164e7e,_0x52eee0,_0x45ce99)=>{const _0x4c41e9=_0x197cd0,_0x28b439=_0x452c,_0x1786d4=_0x1437;try{if(_0x164e7e)console[_0x1786d4(0x17d,'YxCV')]('\x0a【'+$[_0x1786d4(0x1a5,'R(Eo')]+_0x28b439(0x1ca)),subTitle+='\x0a【'+$['name']+'---一日三餐】:\x20网络请求失败';else{let _0x5024ea=JSON['parse'](_0x45ce99);_0x5024ea[_0x28b439(0x178)]==0x64?console[_0x1786d4(0x1ad,'Pm%B')]('\x0a【'+$['name']+_0x28b439(0x171)):(console[_0x28b439(0x1d8)]('\x0a【'+$[_0x28b439(0x1a0)]+_0x1786d4(0x17a,'(!)]')+_0x5024ea[_0x28b439(0x16a)]),subTitle+='\x0a【'+$[_0x4c41e9(0x19a)]+_0x1786d4(0x15a,'YxCV')+_0x5024ea['msg']);}}catch(_0x2b6b1f){}finally{_0x4a8810();}});});}function _0x1437(_0x458b21,_0x32baf2){const _0x56c95b=_0x56c9();return _0x1437=function(_0x11919a,_0x5ac9d0){_0x11919a=_0x11919a-0x158;let _0x3d74a7=_0x56c95b[_0x11919a];if(_0x1437['MFKbUR']===undefined){var _0x22ec2f=function(_0x376089){const _0x1e7e24='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4ee870='',_0x4a4b31='';for(let _0x5740a8=0x0,_0x350b25,_0x14373c,_0x135093=0x0;_0x14373c=_0x376089['charAt'](_0x135093++);~_0x14373c&&(_0x350b25=_0x5740a8%0x4?_0x350b25*0x40+_0x14373c:_0x14373c,_0x5740a8++%0x4)?_0x4ee870+=String['fromCharCode'](0xff&_0x350b25>>(-0x2*_0x5740a8&0x6)):0x0){_0x14373c=_0x1e7e24['indexOf'](_0x14373c);}for(let _0x122c50=0x0,_0x54d6ca=_0x4ee870['length'];_0x122c50<_0x54d6ca;_0x122c50++){_0x4a4b31+='%'+('00'+_0x4ee870['charCodeAt'](_0x122c50)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a4b31);};const _0x452c58=function(_0x288ce2,_0xf0943){let _0x299b43=[],_0x1ead92=0x0,_0x5eb693,_0x2f553a='';_0x288ce2=_0x22ec2f(_0x288ce2);let _0x3f24da;for(_0x3f24da=0x0;_0x3f24da<0x100;_0x3f24da++){_0x299b43[_0x3f24da]=_0x3f24da;}for(_0x3f24da=0x0;_0x3f24da<0x100;_0x3f24da++){_0x1ead92=(_0x1ead92+_0x299b43[_0x3f24da]+_0xf0943['charCodeAt'](_0x3f24da%_0xf0943['length']))%0x100,_0x5eb693=_0x299b43[_0x3f24da],_0x299b43[_0x3f24da]=_0x299b43[_0x1ead92],_0x299b43[_0x1ead92]=_0x5eb693;}_0x3f24da=0x0,_0x1ead92=0x0;for(let _0x1a2f57=0x0;_0x1a2f57<_0x288ce2['length'];_0x1a2f57++){_0x3f24da=(_0x3f24da+0x1)%0x100,_0x1ead92=(_0x1ead92+_0x299b43[_0x3f24da])%0x100,_0x5eb693=_0x299b43[_0x3f24da],_0x299b43[_0x3f24da]=_0x299b43[_0x1ead92],_0x299b43[_0x1ead92]=_0x5eb693,_0x2f553a+=String['fromCharCode'](_0x288ce2['charCodeAt'](_0x1a2f57)^_0x299b43[(_0x299b43[_0x3f24da]+_0x299b43[_0x1ead92])%0x100]);}return _0x2f553a;};_0x1437['iDgrXF']=_0x452c58,_0x458b21=arguments,_0x1437['MFKbUR']=!![];}const _0x1338fb=_0x56c95b[0x0],_0x16bdbd=_0x11919a+_0x1338fb,_0x4a966c=_0x458b21[_0x16bdbd];return!_0x4a966c?(_0x1437['BGDQrx']===undefined&&(_0x1437['BGDQrx']=!![]),_0x3d74a7=_0x1437['iDgrXF'](_0x3d74a7,_0x5ac9d0),_0x458b21[_0x16bdbd]=_0x3d74a7):_0x3d74a7=_0x4a966c,_0x3d74a7;},_0x1437(_0x458b21,_0x32baf2);}function Post_Request(_0x1bb84d,_0x1a6882){const _0x46b124=_0x501143,_0xda1304=_0x2dd4cc;return{'url':''+Host+_0x1bb84d+GetTime,'headers':{'Host':_0xda1304(0x16c),'Connection':_0xda1304(0x1b9),'Content-Length':_0x1a6882['length'],'User-Agent':soy_xzzq_UA,'Content-Type':_0x46b124(0x167,'5yY2'),'Accept':'*/*','Origin':_0x46b124(0x1b4,'QP4a'),'X-Requested-With':_0xda1304(0x188)},'body':_0x1a6882};}function _0x452c(_0x458b21,_0x32baf2){const _0x56c95b=_0x56c9();return _0x452c=function(_0x11919a,_0x5ac9d0){_0x11919a=_0x11919a-0x158;let _0x3d74a7=_0x56c95b[_0x11919a];if(_0x452c['hTmOTU']===undefined){var _0x22ec2f=function(_0x452c58){const _0x376089='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1e7e24='',_0x4ee870='';for(let _0x4a4b31=0x0,_0x5740a8,_0x350b25,_0x14373c=0x0;_0x350b25=_0x452c58['charAt'](_0x14373c++);~_0x350b25&&(_0x5740a8=_0x4a4b31%0x4?_0x5740a8*0x40+_0x350b25:_0x350b25,_0x4a4b31++%0x4)?_0x1e7e24+=String['fromCharCode'](0xff&_0x5740a8>>(-0x2*_0x4a4b31&0x6)):0x0){_0x350b25=_0x376089['indexOf'](_0x350b25);}for(let _0x135093=0x0,_0x122c50=_0x1e7e24['length'];_0x135093<_0x122c50;_0x135093++){_0x4ee870+='%'+('00'+_0x1e7e24['charCodeAt'](_0x135093)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4ee870);};_0x452c['LYOZDJ']=_0x22ec2f,_0x458b21=arguments,_0x452c['hTmOTU']=!![];}const _0x1338fb=_0x56c95b[0x0],_0x16bdbd=_0x11919a+_0x1338fb,_0x4a966c=_0x458b21[_0x16bdbd];return!_0x4a966c?(_0x3d74a7=_0x452c['LYOZDJ'](_0x3d74a7),_0x458b21[_0x16bdbd]=_0x3d74a7):_0x3d74a7=_0x4a966c,_0x3d74a7;},_0x452c(_0x458b21,_0x32baf2);}function Get_Request(_0x4dd32f){const _0x14861b=_0x501143,_0x1beaf0=_0x1191,_0x3625d2=_0x2dd4cc;return{'url':''+Host+_0x4dd32f+GetTime,'headers':{'Host':_0x3625d2(0x16c),'Connection':_0x1beaf0(0x175),'TC-Token':token,'TC-Id':ID,'User-Agent':soy_xzzq_UA,'appKey':_0x1beaf0(0x18a),'Content-type':'application/x-www-form-urlencoded','Accept':_0x3625d2(0x184),'X-Requested-With':_0x1beaf0(0x19f),'Cookie':'PHPSESSID=30ic5bbruvrdursns75cgf175l;\x20alipay_name=null;\x20alipay_account=null;\x20wx_img=null;\x20direct=null;\x20yellow_diamond=null;\x20red_diamond=null;\x20user_money=null;\x20is_check=null;\x20level=null;\x20invite_code=null;\x20p_mobile=null;\x20turn_num=null;\x20type=null;\x20coins=null;\x20nickname=null;\x20token='+token+_0x14861b(0x1c3,'*xfn')+soy_xzzq_mobile+';\x20userid='+ID}};}function GetTime(){const _0x4a0daf=_0x501143,_0x49f3ea=_0x2dd4cc,_0x417983=_0x1191;let _0x5423c2=new Date(),_0x18e6ea=_0x5423c2[_0x417983(0x16e)](),_0x108246=_0x5423c2[_0x417983(0x197)]()+0x1;_0x108246=_0x108246<0xa?'0'+_0x108246:_0x108246;let _0x5ef74a=_0x5423c2[_0x417983(0x19d)]();_0x5ef74a=_0x5ef74a<0xa?'0'+_0x5ef74a:_0x5ef74a;let _0x2d2093=_0x5423c2[_0x49f3ea(0x1dd)]();_0x2d2093=_0x2d2093<0xa?'0'+_0x2d2093:_0x2d2093;let _0x3a74d2=_0x5423c2[_0x4a0daf(0x1cc,'#d&]')]();_0x3a74d2=_0x3a74d2<0xa?'0'+_0x3a74d2:_0x3a74d2;let _0x18ed89=_0x5423c2['getSeconds']();_0x18ed89=_0x18ed89<0xa?'0'+_0x18ed89:_0x18ed89;let _0x240457=''+_0x18e6ea+_0x108246+_0x5ef74a+_0x2d2093+_0x3a74d2+_0x18ed89;return _0x240457;}function GetHour(){let _0x148db6=new Date(),_0x1f5dc8=_0x148db6['getHours']();return _0x1f5dc8=_0x1f5dc8<0xa?'0'+_0x1f5dc8:_0x1f5dc8,_0x1f5dc8;}

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