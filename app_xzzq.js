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


function _0x5b5f(_0x62628e,_0x357cfe){const _0x1ed5a1=_0x1ed5();return _0x5b5f=function(_0x19953b,_0x5464a4){_0x19953b=_0x19953b-0xf9;let _0xf3a131=_0x1ed5a1[_0x19953b];if(_0x5b5f['FANIUD']===undefined){var _0x27aa07=function(_0x5b5f05){const _0x4f1d87='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x27a475='',_0x4e39bd='';for(let _0x3a568f=0x0,_0x397e5c,_0x72e96d,_0x5a5880=0x0;_0x72e96d=_0x5b5f05['charAt'](_0x5a5880++);~_0x72e96d&&(_0x397e5c=_0x3a568f%0x4?_0x397e5c*0x40+_0x72e96d:_0x72e96d,_0x3a568f++%0x4)?_0x27a475+=String['fromCharCode'](0xff&_0x397e5c>>(-0x2*_0x3a568f&0x6)):0x0){_0x72e96d=_0x4f1d87['indexOf'](_0x72e96d);}for(let _0x2bcdb8=0x0,_0x105096=_0x27a475['length'];_0x2bcdb8<_0x105096;_0x2bcdb8++){_0x4e39bd+='%'+('00'+_0x27a475['charCodeAt'](_0x2bcdb8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4e39bd);};_0x5b5f['hzXrRb']=_0x27aa07,_0x62628e=arguments,_0x5b5f['FANIUD']=!![];}const _0x8b9bb6=_0x1ed5a1[0x0],_0xdf8b15=_0x19953b+_0x8b9bb6,_0x2b292b=_0x62628e[_0xdf8b15];return!_0x2b292b?(_0xf3a131=_0x5b5f['hzXrRb'](_0xf3a131),_0x62628e[_0xdf8b15]=_0xf3a131):_0xf3a131=_0x2b292b,_0xf3a131;},_0x5b5f(_0x62628e,_0x357cfe);}const _0xf687c6=_0x1995,_0x450542=_0x5b5f;function _0x1995(_0x62628e,_0x357cfe){const _0x1ed5a1=_0x1ed5();return _0x1995=function(_0x19953b,_0x5464a4){_0x19953b=_0x19953b-0xf9;let _0xf3a131=_0x1ed5a1[_0x19953b];return _0xf3a131;},_0x1995(_0x62628e,_0x357cfe);}(function(_0x1b2ac8,_0x53bcf7){const _0x553e67=_0x5b5f,_0x2931a4=_0x5a58,_0x3d01cd=_0x1995,_0x5390df=_0x1b2ac8();while(!![]){try{const _0xf2b8b0=-parseInt(_0x3d01cd('0x139'))/0x1*(parseInt(_0x2931a4(0x178,'2VsV'))/0x2)+parseInt(_0x553e67(0x18d))/0x3+parseInt(_0x553e67(0x179))/0x4+-parseInt(_0x2931a4(0x184,'GD&5'))/0x5*(parseInt(_0x3d01cd(0x10b))/0x6)+parseInt(_0x553e67(0x12f))/0x7*(parseInt(_0x3d01cd('0x12c'))/0x8)+-parseInt(_0x2931a4(0x12e,'t4eo'))/0x9+parseInt(_0x2931a4(0x148,'5Yyj'))/0xa*(parseInt(_0x553e67(0x173))/0xb);if(_0xf2b8b0===_0x53bcf7)break;else _0x5390df['push'](_0x5390df['shift']());}catch(_0x16e5dd){_0x5390df['push'](_0x5390df['shift']());}}}(_0x1ed5,0x76470));let app_soy_xzzq_data=[],Host=_0x450542(0x143),subTitle='';!(async()=>{const _0x5ae5ef=_0x5a58,_0x2e956b=_0x1995,_0x4b39c8=_0x450542;if(typeof $request!==_0x4b39c8(0x14f)){}else{if(!$[_0x2e956b('0x181')]()){if(!$[_0x2e956b('0x12b')]('soy_xzzq_data')){console[_0x2e956b('0x16a')]('\x0a【'+$[_0x2e956b('0x18e')]+_0x2e956b('0x1a2'));return;}if($['getdata'](_0x5ae5ef('0x156','(lrB'))&&$['getdata'](_0x2e956b('0x19c'))['indexOf']('@')>-0x1)app_soy_xzzq_data=$[_0x5ae5ef('0xfe','c@lk')](_0x5ae5ef('0x15e','wPz0'))[_0x5ae5ef(0x11b,'D^$b')]('@');else{if($[_0x4b39c8(0x17a)](_0x2e956b('0x19c'))&&$[_0x2e956b(0x12b)](_0x5ae5ef(0x165,'Ry19'))[_0x2e956b('0x172')]('#')>-0x1)app_soy_xzzq_data=$[_0x5ae5ef('0x193','gRaF')](_0x5ae5ef(0x132,'q7ER'))[_0x5ae5ef(0x164,'5Yyj')]('#');else $[_0x2e956b('0x12b')](_0x4b39c8('0x11c'))&&$[_0x4b39c8('0x17a')](_0x5ae5ef(0x11e,'mCs6'))[_0x2e956b(0x172)]('\x0a')>-0x1?app_soy_xzzq_data=$[_0x5ae5ef(0x16f,'a$w)')]('soy_xzzq_data')['split']('\x0a'):app_soy_xzzq_data=$[_0x4b39c8('0x17a')](_0x4b39c8('0x11c'))['split']();}}else{if(!process['env']['soy_xzzq_data']){console[_0x2e956b(0x16a)]('\x0a【'+$[_0x4b39c8(0x18b)]+'】：未填写\x20soy_xzzq_data\x20变量');return;}if(process[_0x5ae5ef('0x17b','$2yT')][_0x2e956b(0x19c)]&&process[_0x5ae5ef('0x14a','aIwW')][_0x4b39c8(0x11c)]['indexOf']('@')>-0x1)app_soy_xzzq_data=process[_0x2e956b(0x112)][_0x2e956b(0x19c)]['split']('@');else{if(process[_0x2e956b('0x112')][_0x2e956b('0x19c')]&&process['env']['soy_xzzq_data']['indexOf']('#')>-0x1)app_soy_xzzq_data=process[_0x2e956b('0x112')][_0x2e956b('0x19c')]['split']('#');else process[_0x2e956b(0x112)][_0x5ae5ef('0x140','$7o9')]&&process['env'][_0x5ae5ef('0x12a','gMo4')][_0x2e956b('0x172')]('\x0a')>-0x1?app_soy_xzzq_data=process[_0x4b39c8(0x13e)]['soy_xzzq_data'][_0x4b39c8('0x103')]('\x0a'):app_soy_xzzq_data=process[_0x5ae5ef(0x114,'6wr5')][_0x5ae5ef('0x14e','HmAx')][_0x2e956b(0x169)]();}}console['log']('共'+app_soy_xzzq_data[_0x2e956b('0x11f')]+_0x2e956b('0x162')),console[_0x2e956b(0x16a)](_0x4b39c8(0x15b)+new Date(new Date()['getTime']()+new Date()[_0x5ae5ef('0x122','gRaF')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2e956b(0x174)]()+_0x5ae5ef('0x15a','$7o9')),subTitle='';for(i=0x0;i<app_soy_xzzq_data[_0x2e956b(0x11f)];i++){$[_0x4b39c8('0x109')]=i+0x1,soy_xzzq_data=app_soy_xzzq_data[i][_0x2e956b(0x169)]('&'),notice=soy_xzzq_data[0x0],soy_xzzq_mobile=soy_xzzq_data[0x1],soy_xzzq_password=soy_xzzq_data[0x2],soy_xzzq_UA=soy_xzzq_data[0x3],console[_0x2e956b('0x16a')](_0x4b39c8('0x14c')+$[_0x5ae5ef('0xfd','@xgA')]+_0x2e956b('0x176')),await implement();}notice==0x1&&($[_0x2e956b('0x181')]()&&await notify['sendNotify']($['name'],subTitle));}})()[_0xf687c6('0x144')](_0x2c5796=>$['logErr'](_0x2c5796))['finally'](()=>$[_0x450542('0x155')]());async function implement(){await login(0x0),await login(0x1);}function login(_0x1b74d4){return new Promise(_0x1259ba=>{const _0x4cc1c2=_0x5a58,_0xc35d23=_0x5b5f,_0x4ebb51=_0x1995;let _0x41bb12={'url':Host+_0x4ebb51(0x134)+GetTime,'headers':{'Host':'pig.zxysy.net:99','Connection':_0xc35d23('0x146'),'Content-Length':(_0x4cc1c2('0x142','cjvd')+soy_xzzq_mobile+_0x4cc1c2('0x198','[E9e')+soy_xzzq_password)[_0x4cc1c2(0x13d,'jrJn')],'User-Agent':soy_xzzq_UA,'Content-Type':_0x4ebb51('0x17e'),'Accept':_0x4ebb51(0x177),'Origin':'http://pig.zxysy.net:99','X-Requested-With':'w2a.W2Apig.zxysy.net'},'body':_0xc35d23('0x161')+soy_xzzq_mobile+_0x4ebb51('0x19b')+soy_xzzq_password};$[_0x4cc1c2(0x17c,'PlnY')](_0x41bb12,async(_0x3b3969,_0x20e428,_0x5fd0ef)=>{const _0x4a81a8=_0x4cc1c2,_0x564aee=_0x4ebb51,_0x59d44f=_0xc35d23;try{if(_0x3b3969)console[_0x59d44f(0x15d)]('\x0a【'+$[_0x59d44f('0x18b')]+_0x59d44f('0x152')),subTitle+='\x0a【'+$[_0x59d44f(0x18b)]+_0x564aee(0x183);else{let _0x5e36df=JSON[_0x564aee(0x196)](_0x5fd0ef);if(_0x5e36df['code']==0x1){token=_0x5e36df[_0x564aee(0x16b)];let _0x7242d1=_0x5e36df['data'][_0x59d44f(0x1a0)];ID=_0x5e36df[_0x4a81a8(0x154,'$7o9')]['id'];let _0x387a29=_0x5e36df['data'][_0x59d44f(0xfc)],_0x31966d=_0x5e36df[_0x59d44f('0x141')][_0x4a81a8(0x15c,'2^GA')],_0x176a9c=_0x5e36df[_0x564aee('0x160')][_0x59d44f(0x16e)],_0x4d1f1a=_0x5e36df[_0x564aee('0x160')][_0x4a81a8(0x133,'PlnY')]/0x2710,_0x1c9b46=_0x5e36df['data'][_0x564aee(0x116)];_0x1b74d4==0x0?(console[_0x59d44f('0x15d')]('\x0a【'+$['name']+'---登录】:\x20'+_0x5e36df[_0x59d44f('0x163')]),await sign_status(),await Receive(),(0x9>GetHour()>=0x6||0xe>GetHour()>=0xc||0x15>GetHour()>=0x12)&&await Dinner(),_0x1c9b46>0x0&&(await BonusMoney(),await findPower())):(console[_0x59d44f(0x15d)]('\x0a【'+$[_0x59d44f('0x18b')]+_0x564aee(0x14b)+_0x7242d1+'\x0a---当前等级：'+_0x387a29+_0x59d44f(0x113)+_0x176a9c+'\x0a---当前金币：'+_0x4d1f1a[_0x564aee(0x13a)](0x2)+'万\x0a---当前余额：'+_0x31966d+_0x564aee(0x1a4)+_0x1c9b46),subTitle+='\x0a【'+$[_0x59d44f(0x18b)]+'---用户信息】:\x20\x0a---用户昵称：'+_0x7242d1+_0x59d44f(0x108)+_0x387a29+_0x59d44f(0x113)+_0x176a9c+'\x0a---当前金币：'+_0x4d1f1a['toFixed'](0x2)+_0x4a81a8(0x11a,'P!$B')+_0x31966d+_0x564aee('0x1a4')+_0x1c9b46);}else console['log']('\x0a【'+$[_0x59d44f(0x18b)]+_0x564aee(0x128)+_0x5e36df[_0x4a81a8('0x19a','GD&5')]),subTitle+='\x0a【'+$['name']+_0x564aee(0x128)+_0x5e36df[_0x564aee(0x151)];}}catch(_0x109cb7){}finally{_0x1259ba();}});});}function _0x1ed5(){const _0x40b1db=['sNuO5lIy5Pst5lUB6AEa44gweCoe','WOJdTeW','getSeconds','---签到】:\x20','WPBdHNFdIG','Bgv2zwW','fSoVW6RcUaa','W70me8o+yCotdW','kSksWPZdLffwW4FcM8oCWQddI37cLa','WPRdTmoE57M35y+T54IL5OgE44gEWRVcMq','iCoQW4NPO6tLJPpLI7JNUOFJGjxcOhdNVj/NUkFORRVMSAlLPkFOTOa','CSkYgoAoHEEpT+oaIMRdHG','C3bSAxq','gmoKW7O','ls0T6Akg5y+w5yIg57QI44croIa','ubf+aG','---一日三餐】:\x20网络请求失败','cI0TlEw9K+wjJEETIEE6P++8MG','Aw5KzxG','C2vYDMvYl2nVAw4TBg9Nl2n0CMXFCMvJzwL2zs5WAha/DJ0','12JNHgCf','CgfYC2u','fHpdPH0','emo3WOVMJzpNJPtJG6DhooE/OoE7OEIUJEAZVEwNHoI2JW','---签到状态】:\x20今天已签到','jSkfWR1QW67dP8oiomksW6akjW','vSkGlYhdNdmwja','env','cI0TlEw9K+wjJEE7J+MQJo+8MG','wX5L','---收取金币】:\x20网络请求失败','dragon_jin','ff85','server/user/receiveStatus.php?v=','hMLNv28','5lQzBmoLcCkn5B2Z5yUR5lY26Ao/776o','WOVdL3BdHSom','C295x3H6ENfFzgf0yq','---一日三餐】:\x20','BmoEW70fWQ7cRCoCbCkDW4O4hh8','length','WO7dHCko57UE5y+U54Ua5OoJ44oEWQPv57+Z57I46k2o5Rc25AAk6lEX','WRDjW5G','W4GYW45cW50rdCkjWOJdS8k3C8kjjCkxW79E','WRzvW5G','ls0T5lIa5PEL5lIj6Asq44croIdPOOBLJ5BMIjdLIP9+','bHZdMCkk','C2LNBL9PBG','mhqR','---登录】:\x20','W4/cH8oe','W53cLc/dIuBdTgNdQhpdQI7cIsG','getdata','949080nLPNSO','code','AIH7DXenESoOWPq5W4fVjq','ntzYAxrcz1a','phZcJmkd','E8oeW58','W6JdVSo0WP0+WPTSW4r/WRpdTuKG','emo4nCo3','home/index/login?v=','BgvUz3rO','W7ylWPlNRAJLI7JJGOHUeEE/JUE5OoIVNEAYRUwNOUI1Mq','oYb1C2vYAwq9','bmkLba','58295RiHrhd','toFixed','mtbjBKfqt1G','ctLOFq','WP4aW5flW5ldSW','zw52','---签到状态】:\x20网络请求失败','W5uku8kJsmkXabJdKh/cKJqF','zgf0yq','tHddM8knW7xcKCk7W5q','Ahr0CdOVl3bPzY56EhLZEs5Uzxq6otKV','catch','EKldNq','A2vLCc1HBgL2zq','ls0T57QI5yYf54Q25Ocb44croIa','WRytW47cP8oKWPZdOf0','get','eCorWOK','---用户信息】:\x20\x0a---用户昵称：','cUw8GowNI+oaKoESRca','---收取金币】:\x20收取成功~','rxRdUmkKhCkSFmkAW70vomk2FG','Dw5KzwzPBMvK','getHours','msg','ls0T55M75B2v44croIdNVzhNU5ZOR7FMSylLPlhOTku','e8oAWOT7WPRcNrFcMq','W4iexSkD','zg9Uzq','W40uWPpdJ11hDmoYWP/dKLeSWQS','oYbTB2jPBgu9','CCoqW6K/','---收取金币】:\x20','WOzyf8oboG','pt09ioIeMUACRoAjP+IHJcaTiowmL+s6RoAxTUMxTo+8MG','rXlcPmozxG','Bg9N','WR/dRmoCzvT1WQWuWRP0r2ldGq','y29Kzq','data','jM1VyMLSzt0','个账号','BxnN','W7rtW6VcOmor','vrb1W6tcLCoFW67dKxhcLbn1W6m','z2v0rNvSBfLLyxi','zKZdImk/W7a','W5xcIJFNR5hLIOJNIBZMGQpJGPdcJ8kU576o57QP6kY+5Rco5Awl6lsy','split','log','token','ueHqu0vtu0LeptmWAwm1yMjYDxzYzhvYC25ZnZvJz2yXnZvSoYbHBgLWyxLFBMfTzt1UDwXSoYbHBgLWyxLFywnJB3vUDd1UDwXSoYb3Ef9PBwC9BNvSBdSGzgLYzwn0pw51BgW7ihLLBgXVD19KAwfTB25Kpw51BgW7ihjLzf9KAwfTB25Kpw51BgW7ihvZzxjFBw9UzxK9BNvSBdSGAxnFy2HLy2S9BNvSBdSGBgv2zwW9BNvSBdSGAw52AxrLx2nVzgu9BNvSBdSGCf9TB2jPBgu9BNvSBdSGDhvYBL9UDw09BNvSBdSGDhLWzt1UDwXSoYbJB2LUCZ1UDwXSoYbUAwnRBMfTzt1UDwXSoYb0B2TLBJ0','z2v0twLUDxrLCW','zxHWzxjPzw5Jzq','ASkRW4pcMgO4W64','dXldK8k3W6NcHx7dSNlcRgvzghNdHCoZmmo1W4pdUa','wCoZvmo8W6ldOCkMW6hcGftcOXNdVW','indexOf','ntm2otm0mMDOqNvYvq','toLocaleString','WPtdIh0','\x20个账号任务】','*/*','wCo4kmkpWQZcMCoIW44','mtq3oty0mfjTrKDstq','z2v0zgf0yq','ECopW50','a8o4l8oT','server/withdrawal-power/findPower.php?v=','application/x-www-form-urlencoded','CgLNlNP4Exn5lM5LDdO5oq','uSkSWQpML6VLJQ7PHzFLU6lJGONdU1/NVlRNUOBOR4FMSONLPRFOTOS','isNode','WQ9uWOjQW6HhW6uj','---登录】:\x20网络请求失败','WPldKCkutSoDrSoxWOldHH/dLmkbW6S','nwrLzdm2odu0n2i4nMiZmZe','WRyrW4ZcImoDWOtdNMC','status','c1iH5O2R542D44k0WQ7cGa','pig.zxysy.net:99','WPnwW4FMJydNJPxJGkW0WQpNVPhNUAROR4FMSjRLP7VOTlW','BMfTzq','vq3cN+EVP+wkJUEiGEAaVUocKYhdQW','mtu3nde2ovrywhDvuW','name','---签到】:\x20今天已签到','W6rmW6pcRa','DZjHlLCYqxbPzY56EhLZEs5Uzxq','CSoaW4BcHG','W4GYW45YW5uicq','WRvhW5jZ','ls0T562+5yIW44croIdNRB7LIldMIjdLIP9+','parse','z2v0','WPhcQCksWQBcM8oKmd3dPCke','---领取分红】:\x20','W47cM8oe','&password=','soy_xzzq_data','Ahr0CdOVl3bPzY56EhLZEs5Uzxq6otK','W6TmW6a','---领取分红】:\x20网络请求失败','BMLJA25HBwu','cehdGmoQW5S','】：未填写\x20soy_xzzq_data\x20变量','getDate','元\x0a---当前元宝：'];_0x1ed5=function(){return _0x40b1db;};return _0x1ed5();}function findPower(){const _0x3df603=_0xf687c6;let _0x21254c=Get_Request(_0x3df603('0x17d')+GetTime());return new Promise(_0x408618=>{const _0x599d91=_0x5a58;$[_0x599d91('0x104','@xgA')](_0x21254c,async(_0x582b41,_0x5c4565,_0xd19b82)=>{const _0x519ab4=_0x1995,_0x12e172=_0x599d91,_0x3c2e2e=_0x5b5f;try{if(_0x582b41)console[_0x3c2e2e(0x15d)]('\x0a【'+$['name']+'---红包状态】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x12e172(0x192,'$2yT')]+_0x12e172('0x120','GD&5');else{let _0x29fb88=JSON[_0x519ab4('0x196')](_0xd19b82);if(_0x29fb88['code']==0x64)for(let _0x54a777=0x0;_0x54a777<0x9;_0x54a777++){_0x29fb88[_0x12e172(0x130,'qutM')][_0x519ab4(0x187)][_0x54a777]==0x1&&await withdrawal(_0x29fb88[_0x3c2e2e('0x141')]['amount_list'][_0x54a777]);}else console['log']('\x0a【'+$[_0x3c2e2e(0x18b)]+_0x3c2e2e('0x147')+_0x29fb88[_0x519ab4('0x151')]),subTitle+='\x0a【'+$[_0x519ab4(0x18e)]+_0x12e172(0x100,'[E9e')+_0x29fb88['msg'];}}catch(_0x20e394){}finally{_0x408618();}});});}function withdrawal(_0x28fcca){const _0xdd79f6=_0x5a58;let _0x4d8a0b=Get_Request('home/user/withdrawal?v='+GetTime()+'&userid='+ID+_0xdd79f6('0x111','azW8')+_0x28fcca);return new Promise(_0x33b568=>{const _0x1c6e10=_0x1995;$[_0x1c6e10(0x149)](_0x4d8a0b,async(_0x487c48,_0x478480,_0x47df52)=>{const _0x1dfe1d=_0x5a58,_0x2117b1=_0x1c6e10,_0x16a295=_0x5b5f;try{if(_0x487c48)console[_0x16a295('0x15d')]('\x0a【'+$[_0x2117b1(0x18e)]+_0x1dfe1d('0x10e','q6Dl')),subTitle+='\x0a【'+$[_0x16a295(0x18b)]+_0x1dfe1d(0x18a,'(lrB');else{let _0xd7cde3=JSON['parse'](_0x47df52);_0xd7cde3[_0x16a295(0x15f)]==0x1?console[_0x16a295(0x15d)]('\x0a【'+$['name']+_0x1dfe1d('0x102','gQEp')+_0xd7cde3[_0x2117b1(0x151)]):(console[_0x1dfe1d(0x138,'2VsV')]('\x0a【'+$['name']+'---提现】:\x20'+_0xd7cde3[_0x16a295(0x163)]),subTitle+='\x0a【'+$[_0x16a295('0x18b')]+_0x1dfe1d(0x188,'Ry19')+_0xd7cde3[_0x2117b1('0x151')]);}}catch(_0x7e7002){}finally{_0x33b568();}});});}function sign_status(){const _0x43f592=_0xf687c6;let _0x1c5b08=Get_Request(_0x43f592(0x118));return new Promise(_0xa38e0d=>{const _0x40d9e6=_0x43f592;$[_0x40d9e6('0x149')](_0x1c5b08,async(_0x4df053,_0x3f772e,_0x49d95f)=>{const _0xe5f1b4=_0x5a58,_0x2044b1=_0x40d9e6,_0x8c4b78=_0x5b5f;try{if(_0x4df053)console[_0x8c4b78(0x15d)]('\x0a【'+$['name']+_0x2044b1('0x13f')),subTitle+='\x0a【'+$[_0x2044b1('0x18e')]+_0xe5f1b4(0x168,'D^$b');else{let _0x3af7f1=JSON[_0xe5f1b4('0x167','MhNI')](_0x49d95f);_0x3af7f1[_0x8c4b78(0x15f)]==0x64?_0x3af7f1[_0x8c4b78(0x141)][_0x8c4b78('0x126')]==0x0?await sign():console['log']('\x0a【'+$[_0xe5f1b4('0x13c','GHJv')]+_0x2044b1(0x10f)):(console[_0xe5f1b4(0x145,'MhNI')]('\x0a【'+$['name']+'---签到状态】:\x20'+_0x3af7f1[_0x8c4b78(0x163)]),subTitle+='\x0a【'+$['name']+_0xe5f1b4(0x18c,'yi5C')+_0x3af7f1[_0xe5f1b4(0x123,'cVXx')]);}}catch(_0x1adb5a){}finally{_0xa38e0d();}});});}function BonusMoney(){let _0x510970=Get_Request('home/user/getBonusMoney?v='+GetTime());return new Promise(_0x4eb4ef=>{const _0xa8520=_0x5b5f;$[_0xa8520(0x197)](_0x510970,async(_0x35f1ec,_0x185055,_0x4498ce)=>{const _0x35879e=_0x1995,_0x1bfcab=_0xa8520,_0x24a576=_0x5a58;try{if(_0x35f1ec)console[_0x24a576('0x19e','5Yyj')]('\x0a【'+$[_0x1bfcab(0x18b)]+_0x35879e('0x19f')),subTitle+='\x0a【'+$[_0x24a576(0x125,'cjvd')]+_0x24a576('0x101','I^wg');else{let _0x58a2da=JSON[_0x24a576(0x1a1,'yi5C')](_0x4498ce);_0x58a2da[_0x1bfcab(0x15f)]==0x1?console['log']('\x0a【'+$[_0x24a576(0x194,'cVXx')]+'---领取分红】:\x20'+_0x58a2da[_0x35879e(0x151)]):(console[_0x35879e(0x16a)]('\x0a【'+$[_0x24a576('0xfb','D^$b')]+_0x1bfcab('0x105')+_0x58a2da[_0x1bfcab('0x163')]),subTitle+='\x0a【'+$[_0x35879e(0x18e)]+_0x35879e(0x199)+_0x58a2da['msg']);}}catch(_0x59b108){}finally{_0x4eb4ef();}});});}function sign(){let _0x2a39bd=Get_Request('server/sign-in/ctrl_signIn.php?v=');return new Promise(_0x150223=>{$['get'](_0x2a39bd,async(_0x5549a9,_0x254efd,_0x7bb4fb)=>{const _0x17ff70=_0x5a58,_0x159e09=_0x5b5f,_0x3e5b5d=_0x1995;try{if(_0x5549a9)console['log']('\x0a【'+$[_0x3e5b5d('0x18e')]+'---签到】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x159e09('0x18b')]+_0x17ff70(0x136,'cVXx');else{let _0x51fa0e=JSON[_0x159e09('0x10c')](_0x7bb4fb);_0x51fa0e[_0x17ff70(0x190,'5Yyj')]==0x64?_0x51fa0e[_0x3e5b5d(0x160)]['sign_in']==0x0?console[_0x159e09(0x15d)]('\x0a【'+$[_0x17ff70('0x106','6wr5')]+_0x159e09('0x195')):console[_0x17ff70(0x129,'GD&5')]('\x0a【'+$[_0x17ff70('0x158','mCs6')]+_0x3e5b5d(0x18f)):(console[_0x159e09(0x15d)]('\x0a【'+$[_0x159e09(0x18b)]+_0x3e5b5d(0xfa)+_0x51fa0e[_0x3e5b5d(0x151)]),subTitle+='\x0a【'+$[_0x159e09('0x18b')]+_0x3e5b5d('0xfa')+_0x51fa0e[_0x159e09(0x163)]);}}catch(_0x137813){}finally{_0x150223();}});});}function Receive(){const _0x2f40e1=_0x450542;let _0x3c9f08=Get_Request(_0x2f40e1('0x10a'));return new Promise(_0x15cea2=>{const _0x26a23d=_0x5a58;$[_0x26a23d(0x131,'$2yT')](_0x3c9f08,async(_0x2e06c8,_0xc4158b,_0xc5608a)=>{const _0x3a780c=_0x1995,_0x1465d2=_0x5b5f,_0x3df67a=_0x26a23d;try{if(_0x2e06c8)console[_0x3df67a('0x127','t4eo')]('\x0a【'+$[_0x3df67a(0x10d,'M8[[')]+_0x3df67a('0x180','@xgA')),subTitle+='\x0a【'+$[_0x1465d2('0x18b')]+_0x3a780c(0x115);else{let _0x10bac2=JSON['parse'](_0xc5608a);_0x10bac2[_0x1465d2(0x15f)]==0x64?console[_0x1465d2(0x15d)]('\x0a【'+$[_0x3a780c(0x18e)]+_0x3a780c('0x14d')):(console[_0x3df67a(0x175,'D^$b')]('\x0a【'+$[_0x1465d2('0x18b')]+_0x3a780c('0x159')+_0x10bac2['msg']),subTitle+='\x0a【'+$[_0x1465d2('0x18b')]+_0x3a780c(0x159)+_0x10bac2[_0x3a780c(0x151)]);}}catch(_0x416710){}finally{_0x15cea2();}});});}function Dinner(){let _0x1952cd=Get_Request('server/coin-log/ctrl_dinner.php?v=');return new Promise(_0x26ebc2=>{const _0x15422f=_0x5b5f;$[_0x15422f(0x197)](_0x1952cd,async(_0x37947c,_0x35619f,_0x526a98)=>{const _0x22a9f1=_0x15422f,_0x9b9c7=_0x1995,_0x3b612e=_0x5a58;try{if(_0x37947c)console[_0x3b612e(0x121,'cVXx')]('\x0a【'+$[_0x9b9c7(0x18e)]+_0x9b9c7('0x107')),subTitle+='\x0a【'+$['name']+'---一日三餐】:\x20网络请求失败';else{let _0x103547=JSON[_0x3b612e(0x119,'IMQa')](_0x526a98);_0x103547[_0x9b9c7(0x12d)]==0x64?console['log']('\x0a【'+$[_0x9b9c7('0x18e')]+_0x22a9f1('0x124')):(console[_0x9b9c7('0x16a')]('\x0a【'+$['name']+_0x3b612e('0x1a5','GHJv')+_0x103547['msg']),subTitle+='\x0a【'+$[_0x9b9c7('0x18e')]+_0x9b9c7('0x11d')+_0x103547['msg']);}}catch(_0x45bb05){}finally{_0x26ebc2();}});});}function _0x5a58(_0x62628e,_0x357cfe){const _0x1ed5a1=_0x1ed5();return _0x5a58=function(_0x19953b,_0x5464a4){_0x19953b=_0x19953b-0xf9;let _0xf3a131=_0x1ed5a1[_0x19953b];if(_0x5a58['srDvRj']===undefined){var _0x27aa07=function(_0x4f1d87){const _0x27a475='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4e39bd='',_0x3a568f='';for(let _0x397e5c=0x0,_0x72e96d,_0x5a5880,_0x2bcdb8=0x0;_0x5a5880=_0x4f1d87['charAt'](_0x2bcdb8++);~_0x5a5880&&(_0x72e96d=_0x397e5c%0x4?_0x72e96d*0x40+_0x5a5880:_0x5a5880,_0x397e5c++%0x4)?_0x4e39bd+=String['fromCharCode'](0xff&_0x72e96d>>(-0x2*_0x397e5c&0x6)):0x0){_0x5a5880=_0x27a475['indexOf'](_0x5a5880);}for(let _0x105096=0x0,_0x108ef5=_0x4e39bd['length'];_0x105096<_0x108ef5;_0x105096++){_0x3a568f+='%'+('00'+_0x4e39bd['charCodeAt'](_0x105096)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3a568f);};const _0x5b5f05=function(_0x486c6b,_0x4c3645){let _0x71be02=[],_0x2c5796=0x0,_0x1b74d4,_0x1259ba='';_0x486c6b=_0x27aa07(_0x486c6b);let _0x41bb12;for(_0x41bb12=0x0;_0x41bb12<0x100;_0x41bb12++){_0x71be02[_0x41bb12]=_0x41bb12;}for(_0x41bb12=0x0;_0x41bb12<0x100;_0x41bb12++){_0x2c5796=(_0x2c5796+_0x71be02[_0x41bb12]+_0x4c3645['charCodeAt'](_0x41bb12%_0x4c3645['length']))%0x100,_0x1b74d4=_0x71be02[_0x41bb12],_0x71be02[_0x41bb12]=_0x71be02[_0x2c5796],_0x71be02[_0x2c5796]=_0x1b74d4;}_0x41bb12=0x0,_0x2c5796=0x0;for(let _0x3b3969=0x0;_0x3b3969<_0x486c6b['length'];_0x3b3969++){_0x41bb12=(_0x41bb12+0x1)%0x100,_0x2c5796=(_0x2c5796+_0x71be02[_0x41bb12])%0x100,_0x1b74d4=_0x71be02[_0x41bb12],_0x71be02[_0x41bb12]=_0x71be02[_0x2c5796],_0x71be02[_0x2c5796]=_0x1b74d4,_0x1259ba+=String['fromCharCode'](_0x486c6b['charCodeAt'](_0x3b3969)^_0x71be02[(_0x71be02[_0x41bb12]+_0x71be02[_0x2c5796])%0x100]);}return _0x1259ba;};_0x5a58['WqOVMz']=_0x5b5f05,_0x62628e=arguments,_0x5a58['srDvRj']=!![];}const _0x8b9bb6=_0x1ed5a1[0x0],_0xdf8b15=_0x19953b+_0x8b9bb6,_0x2b292b=_0x62628e[_0xdf8b15];return!_0x2b292b?(_0x5a58['UnRIba']===undefined&&(_0x5a58['UnRIba']=!![]),_0xf3a131=_0x5a58['WqOVMz'](_0xf3a131,_0x5464a4),_0x62628e[_0xdf8b15]=_0xf3a131):_0xf3a131=_0x2b292b,_0xf3a131;},_0x5a58(_0x62628e,_0x357cfe);}function Post_Request(_0x296c5f,_0x315395){const _0x28846a=_0x5a58,_0x129731=_0x450542,_0x4416ed=_0xf687c6;return{'url':''+Host+_0x296c5f+GetTime,'headers':{'Host':_0x4416ed(0x189),'Connection':'keep-alive','Content-Length':_0x315395[_0x129731('0x135')],'User-Agent':soy_xzzq_UA,'Content-Type':'application/x-www-form-urlencoded','Accept':_0x28846a(0x117,'6wr5'),'Origin':_0x129731(0x19d),'X-Requested-With':_0x28846a(0x170,'yi5C')},'body':_0x315395};}function Get_Request(_0x1d8ab0){const _0xd29fc0=_0x5a58,_0x474624=_0xf687c6,_0x33c115=_0x450542;return{'url':''+Host+_0x1d8ab0+GetTime,'headers':{'Host':_0x33c115(0x17f),'Connection':'keep-alive','TC-Token':token,'TC-Id':ID,'User-Agent':soy_xzzq_UA,'appKey':_0x33c115('0x185'),'Content-type':_0x474624('0x17e'),'Accept':_0xd29fc0(0x1a6,'(zJW'),'X-Requested-With':_0x33c115(0x191),'Cookie':_0x33c115(0x16c)+token+_0x33c115(0x157)+soy_xzzq_mobile+_0x33c115('0x137')+ID}};}function GetTime(){const _0x2f6b78=_0xf687c6,_0x301635=_0x5a58,_0x241c86=_0x450542;let _0xfa53a8=new Date(),_0x2a873d=_0xfa53a8[_0x241c86('0x166')](),_0x136859=_0xfa53a8[_0x301635(0x153,'aIwW')]()+0x1;_0x136859=_0x136859<0xa?'0'+_0x136859:_0x136859;let _0x48d32d=_0xfa53a8[_0x2f6b78(0x1a3)]();_0x48d32d=_0x48d32d<0xa?'0'+_0x48d32d:_0x48d32d;let _0x44f76c=_0xfa53a8[_0x2f6b78('0x150')]();_0x44f76c=_0x44f76c<0xa?'0'+_0x44f76c:_0x44f76c;let _0x20c83d=_0xfa53a8[_0x241c86(0x16d)]();_0x20c83d=_0x20c83d<0xa?'0'+_0x20c83d:_0x20c83d;let _0x1e4342=_0xfa53a8[_0x2f6b78(0xf9)]();_0x1e4342=_0x1e4342<0xa?'0'+_0x1e4342:_0x1e4342;let _0x224654=''+_0x2a873d+_0x136859+_0x48d32d+_0x44f76c+_0x20c83d+_0x1e4342;return _0x224654;}function GetHour(){let _0x16535e=new Date(),_0x2f2708=_0x16535e['getHours']();return _0x2f2708=_0x2f2708<0xa?'0'+_0x2f2708:_0x2f2708,_0x2f2708;}



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