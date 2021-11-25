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

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/wx_kkj.js

*/


const $ = new Env('看看集');
const notify = $.isNode() ? require('./sendNotify') : '';

function _0x56cf(_0x528cf0,_0xa76d5d){const _0x2ccc64=_0x2ccc();return _0x56cf=function(_0x27195f,_0x87cbec){_0x27195f=_0x27195f-0x100;let _0x538c48=_0x2ccc64[_0x27195f];if(_0x56cf['aZTvRO']===undefined){var _0x31672d=function(_0x56cf26){const _0x30be8a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x45cc05='',_0x5a434a='';for(let _0x3fa7c9=0x0,_0x377046,_0x4b4ceb,_0x4c10db=0x0;_0x4b4ceb=_0x56cf26['charAt'](_0x4c10db++);~_0x4b4ceb&&(_0x377046=_0x3fa7c9%0x4?_0x377046*0x40+_0x4b4ceb:_0x4b4ceb,_0x3fa7c9++%0x4)?_0x45cc05+=String['fromCharCode'](0xff&_0x377046>>(-0x2*_0x3fa7c9&0x6)):0x0){_0x4b4ceb=_0x30be8a['indexOf'](_0x4b4ceb);}for(let _0x992eb9=0x0,_0x1cdd19=_0x45cc05['length'];_0x992eb9<_0x1cdd19;_0x992eb9++){_0x5a434a+='%'+('00'+_0x45cc05['charCodeAt'](_0x992eb9)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5a434a);};_0x56cf['xVnzOC']=_0x31672d,_0x528cf0=arguments,_0x56cf['aZTvRO']=!![];}const _0x1852bb=_0x2ccc64[0x0],_0x1e9909=_0x27195f+_0x1852bb,_0x98d2be=_0x528cf0[_0x1e9909];return!_0x98d2be?(_0x538c48=_0x56cf['xVnzOC'](_0x538c48),_0x528cf0[_0x1e9909]=_0x538c48):_0x538c48=_0x98d2be,_0x538c48;},_0x56cf(_0x528cf0,_0xa76d5d);}function _0x2ccc(){const _0x22e504=['DxjS','i8kUrSkmW53cLWW','ptfrWO3dHXxdOCoOvmkB','WOBcICk6cSohW4FdPW','Aw5KzxHpzG','ioApKos6Pos7U+wkOEoaKtOG','WQddQsn4WR3dVvxcNLFcQr3cLv0','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','soy_kkj_ticket','WOCcWQWCjMPS','split','A2vLCc1HBgL2zq','iCkLra','Ahr0CdOVl20Um3jKBhvKCduUC2HVCc8','logErr','W5FcH8oYWRC','aMXL','C295x2TRAL9vqq','】：未填写相应变量\x20soy_kkj_ticket','xG7dOt5tdLpcKv1IWQiUp23dMLzBWRldVCo8dCogWRLSr07cPSkOW5JdHSoeydXOjq','points','W65YDSkGvCkxW4dcRmoPW43cG8otW5i','BgvUz3rO','http://ydt.kxlock.com:443/code008/ydt2/','y2f0y2G','j8kYWPe','dcount','W69IbGZdRKqyhSkbsq','\x0a---阅读数量：','DCkaW4tcJG','wCoKW6BdPa','h3NdLEI2JUwmJ1i','vEImM+wmQEAvV+EPGEocPwzX','ksrbWQlcGf7dR8osz8k2eCk0WRe','env','mZyZC1jTr1jV','Bg9N','W4RcSftcHW','wKddHxL/','zMXVB3i','WP3dIepdRKFdPmka','W7VcSxqTW7C','zgf0yq','WPZcL8kYbSol','ewrd','xtuXWP3cJmoSWQNdOSoy','indexOf','wa/dJoI2P+wpG8o4','z2v0','imo0W4u','W5JdMmkAyHT1ASoJeSkmEdy4l8kbWPfuW5i4uSoYj0ZcQGK3W4Hba00Dpmoi','Cg9ZDa','zg9Uzq','WQFcUMW','soy_kkj_UA','C295x2TRAL90AwnRzxq','rXtdKSkXbSoTBXrRp8kBWQz6','W787umo2AaNdQqyqcSoVdG','isNode','odGYnJCYmeLdvejftq','http://m.3rdludp5.shop','WQKMl8oY','BMfTzq','3006094XkDIwM','mJq2mZj3rgH2zKG','x8kGy8orfGxdJ8kQD8ok','W6KHWQlcOae','vEEwHoAlIoEjJUAcOoocPwzXF8kiW7ZdNUEvNUAkRhOI776W','ioIoT+wpLUAwH+EROooaKtOG572r57UC6k+35Rgc5AsX6lsL','W55in0FcJmkXW5y','CMfUzg9T','W7FcSwy','qow/JEwLU+ocJEEUV3q','ioApKos6Pos7U+wkOEoaKtOG572r57UC6k+35Rgc5AsX6lsL','nuDOtuDwvG','cJ09psdOHjRMNkZMIAFOOyWGlsdLJjFKUQZML7BPL7tVVjO','zw52','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKidGUms4WoYbbtfaTquWWmcbcDwLSzc9ivufxruLbtfaTquWWmdSGD3yPiefWCgXLv2vIs2L0lZuZnY4ZnIaOs0HutuWSigXPA2uGr2vJA28PifzLCNnPB24Vnc4WienOCM9Tzs82nI4WlJmZntKUmti2ie1VyMLSzsbtywzHCMKVntm3lJm2igjHAwr1yM94yxbWlZeWlJaUns4XmsaOqMfPzhu7ifaXidGUms4Wkq','Aw5KzxG','747845xTeAvJ','z2v0zgf0yq','\x20个账号任务】','WRZOJRRLJQNML5tNQAxJGl5iyEInO+wpNUAkMUwkUq','c210','W5dcImo7WRFdRa','W5ldKcrVW5JcNh/cQSojuvNcTgLZ','WOScWR4','bmogWPuIksztW7NdUv4JWPe8W7C','W5btWOb3eCkWWPddJSkcm3ldNImr','W718E8kRzG','Mozilla/5.0\x20(Linux;\x20Android\x208.1.0;\x20ALP-AL00\x20Build/HUAWEIALP-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/66.0.3359.126\x20Mobile\x20Safari/537.36\x20baiduboxapp/10.0.5.11\x20(Baidu;\x20P1\x208.1.0)','W6hcSgKxW6tcOWBcJ3tcOHtcHe/cOq','length','mJe1mteZmNnNr0rqvG','W4DEW7/dR8oBoMK6Fd3cQSoifW','rmoQW7ldNSoIWQBdH8o6k8kV','haVcQq','lSkZWOa','WPlcJ20gWOpdJIhcRCowFhpcQee','getTime','WRTGhSkrn1FdUW0GcG','getTask?ticket=','WONdGK7dLu3dU8klW63cHGvgWQCZCG','W6qNW5O4DmoSW4e','data','heZcHCoKta','WQTGa8kR','WQNcG8kXtG','qtVcGCo3WPmzv1iwW5O','W4RdH8kturL9yCoid8kkDxi3ka','finally','WP0dWReMnu5GW5BdMtrunx/cNq','C3bSAxq','vXBcObrP','WP0CWQqqkG','index','8826720ICTBEM','W6/dUtFOTOlLJ7CR','WRxcTxpdKa','log','---账号\x20','CttdIgC9W7FdT24RWQlcIdCnW7e','oSkPaa','W4FcV0tcG14nBG','baVcGG8spa8hlXK6imoAdG','getdata','msg','\x20提交任务】:\x20提交成功','name','WPNMJ73KU6FKU5JLIyZJG5tcJCkw572057Ib6k+x5RkO5AsZ6lAY','ls0T6lsM5y+3ia','WOZdR8kcqZvaxq','hwX7WRhcTCoQWOtdR8odW7pcQ38nza','submit?ticket='];_0x2ccc=function(){return _0x22e504;};return _0x2ccc();}const _0x4f8462=_0x2719,_0x5504e6=_0x56cf;(function(_0x50fbdd,_0x4e46c8){const _0x2d45a8=_0x56cf,_0x5b9451=_0x4c10,_0x1d57af=_0x2719,_0x10094=_0x50fbdd();while(!![]){try{const _0x17e1dc=parseInt(_0x1d57af(0x175))/0x1+parseInt(_0x5b9451(0x102,'4iM0'))/0x2+parseInt(_0x2d45a8(0x149))/0x3*(-parseInt(_0x2d45a8(0x166))/0x4)+parseInt(_0x2d45a8(0x170))/0x5*(parseInt(_0x2d45a8(0x183))/0x6)+parseInt(_0x5b9451(0x13b,']7Df'))/0x7+-parseInt(_0x2d45a8(0x161))/0x8+-parseInt(_0x5b9451(0x15e,'clp]'))/0x9;if(_0x17e1dc===_0x4e46c8)break;else _0x10094['push'](_0x10094['shift']());}catch(_0x4684e0){_0x10094['push'](_0x10094['shift']());}}}(_0x2ccc,0xe5c4d));let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';function _0x4c10(_0x528cf0,_0xa76d5d){const _0x2ccc64=_0x2ccc();return _0x4c10=function(_0x27195f,_0x87cbec){_0x27195f=_0x27195f-0x100;let _0x538c48=_0x2ccc64[_0x27195f];if(_0x4c10['JoKCPw']===undefined){var _0x31672d=function(_0x30be8a){const _0x45cc05='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5a434a='',_0x3fa7c9='';for(let _0x377046=0x0,_0x4b4ceb,_0x4c10db,_0x992eb9=0x0;_0x4c10db=_0x30be8a['charAt'](_0x992eb9++);~_0x4c10db&&(_0x4b4ceb=_0x377046%0x4?_0x4b4ceb*0x40+_0x4c10db:_0x4c10db,_0x377046++%0x4)?_0x5a434a+=String['fromCharCode'](0xff&_0x4b4ceb>>(-0x2*_0x377046&0x6)):0x0){_0x4c10db=_0x45cc05['indexOf'](_0x4c10db);}for(let _0x1cdd19=0x0,_0xb05d60=_0x5a434a['length'];_0x1cdd19<_0xb05d60;_0x1cdd19++){_0x3fa7c9+='%'+('00'+_0x5a434a['charCodeAt'](_0x1cdd19)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3fa7c9);};const _0x56cf26=function(_0x45076c,_0x10c004){let _0x49603c=[],_0x439c67=0x0,_0x12f40a,_0x7ec11a='';_0x45076c=_0x31672d(_0x45076c);let _0x27acee;for(_0x27acee=0x0;_0x27acee<0x100;_0x27acee++){_0x49603c[_0x27acee]=_0x27acee;}for(_0x27acee=0x0;_0x27acee<0x100;_0x27acee++){_0x439c67=(_0x439c67+_0x49603c[_0x27acee]+_0x10c004['charCodeAt'](_0x27acee%_0x10c004['length']))%0x100,_0x12f40a=_0x49603c[_0x27acee],_0x49603c[_0x27acee]=_0x49603c[_0x439c67],_0x49603c[_0x439c67]=_0x12f40a;}_0x27acee=0x0,_0x439c67=0x0;for(let _0x45031b=0x0;_0x45031b<_0x45076c['length'];_0x45031b++){_0x27acee=(_0x27acee+0x1)%0x100,_0x439c67=(_0x439c67+_0x49603c[_0x27acee])%0x100,_0x12f40a=_0x49603c[_0x27acee],_0x49603c[_0x27acee]=_0x49603c[_0x439c67],_0x49603c[_0x439c67]=_0x12f40a,_0x7ec11a+=String['fromCharCode'](_0x45076c['charCodeAt'](_0x45031b)^_0x49603c[(_0x49603c[_0x27acee]+_0x49603c[_0x439c67])%0x100]);}return _0x7ec11a;};_0x4c10['XeBJHc']=_0x56cf26,_0x528cf0=arguments,_0x4c10['JoKCPw']=!![];}const _0x1852bb=_0x2ccc64[0x0],_0x1e9909=_0x27195f+_0x1852bb,_0x98d2be=_0x528cf0[_0x1e9909];return!_0x98d2be?(_0x4c10['vRnsfp']===undefined&&(_0x4c10['vRnsfp']=!![]),_0x538c48=_0x4c10['XeBJHc'](_0x538c48,_0x87cbec),_0x528cf0[_0x1e9909]=_0x538c48):_0x538c48=_0x98d2be,_0x538c48;},_0x4c10(_0x528cf0,_0xa76d5d);}function _0x2719(_0x528cf0,_0xa76d5d){const _0x2ccc64=_0x2ccc();return _0x2719=function(_0x27195f,_0x87cbec){_0x27195f=_0x27195f-0x100;let _0x538c48=_0x2ccc64[_0x27195f];return _0x538c48;},_0x2719(_0x528cf0,_0xa76d5d);}!(async()=>{const _0x53bcb9=_0x4c10,_0x5f2b8d=_0x56cf,_0x1c2308=_0x2719;if($[_0x1c2308(0x160)]()){if(!process[_0x5f2b8d(0x172)][_0x1c2308(0x12e)]){console[_0x1c2308(0x117)]('\x0a【'+$['name']+_0x1c2308(0x138));return;}if(process[_0x5f2b8d(0x172)][_0x53bcb9(0x181,'Zr2S')]&&process[_0x53bcb9(0x179,'dA&Y')][_0x1c2308(0x12e)]['indexOf']('@')>-0x1)app_soy_kkj_ticket=process[_0x1c2308(0x148)][_0x1c2308(0x12e)][_0x53bcb9(0x151,'Q(g4')]('@');else{if(process[_0x53bcb9(0x132,'19tu')][_0x1c2308(0x12e)]&&process[_0x53bcb9(0x157,'t@@W')][_0x5f2b8d(0x15d)]['indexOf']('\x0a')>-0x1)app_soy_kkj_ticket=process[_0x53bcb9(0x17c,'if5G')][_0x53bcb9(0x119,'6jpn')][_0x53bcb9(0x14c,'P8d8')]('\x0a');else process[_0x1c2308(0x148)]['soy_kkj_ticket']&&process[_0x1c2308(0x148)]['soy_kkj_ticket'][_0x5f2b8d(0x12a)]('#')>-0x1?app_soy_kkj_ticket=process[_0x1c2308(0x148)][_0x53bcb9(0x106,'&PDZ')]['split']('#'):app_soy_kkj_ticket=process[_0x5f2b8d(0x172)][_0x53bcb9(0x17d,'4^Bz')][_0x1c2308(0x130)]();};if(process[_0x53bcb9(0x15b,'Bo&Q')][_0x5f2b8d(0x137)]){if(process[_0x5f2b8d(0x172)][_0x5f2b8d(0x137)]&&process[_0x53bcb9(0x13f,'#SUk')]['soy_kkj_UA'][_0x5f2b8d(0x12a)]('@')>-0x1)app_soy_kkj_UA=process['env'][_0x5f2b8d(0x137)][_0x1c2308(0x130)]('@');else{if(process[_0x53bcb9(0x11a,'zJCq')][_0x1c2308(0x15c)]&&process[_0x5f2b8d(0x172)][_0x5f2b8d(0x137)][_0x5f2b8d(0x12a)]('\x0a')>-0x1)app_soy_kkj_UA=process[_0x1c2308(0x148)][_0x53bcb9(0x185,'qHe9')][_0x1c2308(0x130)]('\x0a');else process[_0x53bcb9(0x16d,'Zr2S')]['soy_kkj_UA']&&process[_0x1c2308(0x148)][_0x53bcb9(0x141,'mf*d')][_0x1c2308(0x154)]('#')>-0x1?app_soy_kkj_UA=process[_0x5f2b8d(0x172)][_0x53bcb9(0x185,'qHe9')]['split']('#'):app_soy_kkj_UA=process[_0x1c2308(0x148)]['soy_kkj_UA'][_0x5f2b8d(0x110)]();};}}else{if(!$[_0x1c2308(0x11d)](_0x53bcb9(0x17b,'4iM0'))){console[_0x53bcb9(0x136,'dA&Y')]('\x0a【'+$[_0x53bcb9(0x135,'k$1u')]+_0x1c2308(0x138));return;}if($['getdata'](_0x53bcb9(0x17e,'TukF'))&&$[_0x1c2308(0x11d)](_0x1c2308(0x12e))[_0x1c2308(0x154)]('@')>-0x1)app_soy_kkj_ticket=$[_0x5f2b8d(0x176)](_0x5f2b8d(0x15d))[_0x5f2b8d(0x110)]('@');else{if($['getdata'](_0x53bcb9(0x10d,'x0YL'))&&$[_0x5f2b8d(0x176)](_0x5f2b8d(0x15d))[_0x1c2308(0x154)]('\x0a')>-0x1)app_soy_kkj_ticket=$[_0x5f2b8d(0x176)](_0x53bcb9(0x124,'dA&Y'))[_0x1c2308(0x130)]('\x0a');else $[_0x53bcb9(0x127,'19tu')](_0x5f2b8d(0x15d))&&$[_0x53bcb9(0x14e,'&PDZ')]('soy_kkj_ticket')[_0x53bcb9(0x11b,'hkaA')]('#')>-0x1?app_soy_kkj_ticket=$[_0x5f2b8d(0x176)](_0x5f2b8d(0x15d))['split']('#'):app_soy_kkj_ticket=$['getdata'](_0x53bcb9(0x10f,'if5G'))[_0x53bcb9(0x111,'u7$M')]();};if($[_0x1c2308(0x11d)](_0x53bcb9(0x128,')G1!'))){if($[_0x1c2308(0x11d)](_0x1c2308(0x15c))&&$[_0x53bcb9(0x16b,'V9^6')]('soy_kkj_UA')[_0x53bcb9(0x107,'dPM)')]('@')>-0x1)app_soy_kkj_UA=$['getdata'](_0x1c2308(0x15c))[_0x1c2308(0x130)]('@');else{if($['getdata']('soy_kkj_UA')&&$[_0x5f2b8d(0x176)](_0x5f2b8d(0x137))[_0x53bcb9(0x129,'Q(g4')]('\x0a')>-0x1)app_soy_kkj_UA=$['getdata'](_0x1c2308(0x15c))['split']('\x0a');else $['getdata']('soy_kkj_UA')&&$['getdata'](_0x53bcb9(0x10c,'&7CE'))[_0x53bcb9(0x12f,'if5G')]('#')>-0x1?app_soy_kkj_UA=$['getdata'](_0x53bcb9(0x104,'I*HZ'))[_0x1c2308(0x130)]('#'):app_soy_kkj_UA=$['getdata'](_0x5f2b8d(0x137))[_0x53bcb9(0x112,'if5G')]();};}}console['log'](_0x5f2b8d(0x171)+new Date(new Date()[_0x1c2308(0x103)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x53bcb9(0x11c,'l*FF')]()+_0x53bcb9(0x17f,']7Df')),console[_0x5f2b8d(0x14a)]('===【共\x20'+app_soy_kkj_ticket['length']+'\x20个账号】===\x0a');for(i=0x0;i<app_soy_kkj_ticket[_0x5f2b8d(0x13c)];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],app_soy_kkj_UA[_0x1c2308(0x182)]==0x0?soy_kkj_UA=_0x1c2308(0x180):(soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA=_0x5f2b8d(0x173))),$[_0x53bcb9(0x14f,'Zr2S')]=i+0x1,await implement();};notify&&await notify['sendNotify']($[_0x5f2b8d(0x164)],subTitle);})()[_0x5504e6(0x13e)](_0x439c67=>$[_0x4f8462(0x134)](_0x439c67))[_0x4f8462(0x10e)](()=>$[_0x5504e6(0x15a)]());async function implement(){const _0xa6918d=_0x4c10,_0x1abd5f=_0x5504e6,_0x36b930=_0x4f8462;host=_0x36b930(0x13d),console[_0x1abd5f(0x14a)](_0xa6918d(0x16e,'SQ1t')+$[_0xa6918d(0x17a,'k$1u')]+_0x36b930(0x177)),await soy_kkj_getTask();}function soy_kkj_getTask(){const _0x5d0979=_0x4f8462;let _0x12f40a=Post_request(_0x5d0979(0x105)+soy_kkj_ticket+'&_t=0.9464716062863485');return new Promise((_0x7ec11a,_0x27acee)=>{const _0x47494f=_0x56cf;$[_0x47494f(0x159)](_0x12f40a,async(_0x45031b,_0x40b94a,_0x212459)=>{const _0x25ae86=_0x47494f,_0x16b2ee=_0x4c10,_0x1da268=_0x2719;try{if(_0x45031b)console['log']('\x0a【'+$[_0x1da268(0x120)]+_0x16b2ee(0x115,'Bo&Q')+$[_0x16b2ee(0x109,'clp]')]+_0x25ae86(0x16a)),subTitle+='\x0a【'+$[_0x25ae86(0x164)]+_0x25ae86(0x122)+$[_0x1da268(0x113)]+'\x20获取文章】:\x20网络请求失败';else{let _0x469d4b=JSON['parse'](_0x212459);_0x469d4b[_0x16b2ee(0x10a,'I*HZ')]==0x0?(console['log']('\x0a【'+$[_0x16b2ee(0x10b,'ct$s')]+_0x25ae86(0x122)+$[_0x1da268(0x113)]+_0x16b2ee(0x178,'mf*d')),article=_0x469d4b['data'][_0x25ae86(0x126)],tgid=_0x469d4b[_0x1da268(0x108)][_0x16b2ee(0x163,']7Df')],await soy_kkj_read(),await $[_0x16b2ee(0x116,'Bo&Q')](Math[_0x25ae86(0x14d)](Math[_0x25ae86(0x16c)]()*(0x2ee0-0x2710+0x3e8)+0x2710)),await soy_kkj_submit()):(console[_0x1da268(0x117)]('\x0a【'+$[_0x1da268(0x120)]+_0x1da268(0x118)+$[_0x1da268(0x113)]+'\x20获取文章】:\x20'+_0x469d4b[_0x1da268(0x11e)]),subTitle+='\x0a【'+$['name']+_0x25ae86(0x122)+$[_0x25ae86(0x174)]+_0x16b2ee(0x146,'q(10')+_0x469d4b[_0x1da268(0x11e)]);}}catch(_0x53aff4){console['log'](_0x53aff4,_0x40b94a);}finally{_0x7ec11a();}});});}function soy_kkj_read(){return new Promise((_0x1c8448,_0x34d3a1)=>{const _0x38e756=_0x56cf;$[_0x38e756(0x156)]({'url':''+article,'headers':{'User-Agent':soy_kkj_UA}},async(_0x41d74c,_0x52193f,_0x33cb0f)=>{const _0xa9a1ae=_0x4c10;try{}catch(_0x1e351e){console[_0xa9a1ae(0x152,'H]FM')](_0x1e351e,_0x52193f);}finally{_0x1c8448();}});});}function soy_kkj_submit(){const _0x5dd7a0=_0x4f8462;let _0x5661da=Post_request(_0x5dd7a0(0x125)+soy_kkj_ticket+'&tgid=&_t=0.48665388536520227');return new Promise((_0x232a49,_0x562a33)=>{const _0x4d51a6=_0x56cf;$[_0x4d51a6(0x159)](_0x5661da,async(_0x3b8c37,_0x1261fd,_0x59b19c)=>{const _0x5cd2ee=_0x4d51a6,_0x4a97fc=_0x2719,_0x22e157=_0x4c10;try{if(_0x3b8c37)console[_0x22e157(0x101,'#SUk')]('\x0a【'+$[_0x4a97fc(0x120)]+_0x22e157(0x155,'clp]')+$[_0x5cd2ee(0x174)]+_0x22e157(0x121,'V9^6')),subTitle+='\x0a【'+$[_0x4a97fc(0x120)]+_0x5cd2ee(0x122)+$[_0x22e157(0x168,'!nQ5')]+_0x5cd2ee(0x16f);else{let _0x1781d0=JSON['parse'](_0x59b19c);_0x1781d0[_0x22e157(0x143,'iWJ7')]==0x0?(console['log']('\x0a【'+$[_0x5cd2ee(0x164)]+_0x4a97fc(0x118)+$[_0x5cd2ee(0x174)]+_0x4a97fc(0x11f)),console[_0x5cd2ee(0x14a)]('\x0a【'+$[_0x5cd2ee(0x164)]+_0x4a97fc(0x118)+$[_0x4a97fc(0x113)]+_0x22e157(0x169,'q(10')+_0x1781d0['data'][_0x22e157(0x167,'c5#C')]+_0x4a97fc(0x142)+_0x1781d0[_0x22e157(0x14b,'hkaA')][_0x4a97fc(0x140)]+'\x0a---当前积分：'+_0x1781d0[_0x5cd2ee(0x150)][_0x4a97fc(0x13a)]/0xa),await soy_kkj_getTask()):(console[_0x4a97fc(0x117)]('\x0a【'+$[_0x22e157(0x144,'qHe9')]+'---账号\x20'+$[_0x4a97fc(0x113)]+'\x20提交任务】:\x20'+_0x1781d0['msg']),subTitle+='\x0a【'+$['name']+_0x22e157(0x145,'&7CE')+$[_0x4a97fc(0x113)]+_0x5cd2ee(0x12b)+_0x1781d0['msg']);}}catch(_0x4722a0){console[_0x22e157(0x100,'l*FF')](_0x4722a0,_0x1261fd);}finally{_0x232a49();}});});}function Post_request(_0x5e3cf4){const _0x310bcd=_0x4f8462,_0x225782=_0x4c10,_0x1fa9e0=_0x5504e6;return{'url':''+host+_0x5e3cf4,'headers':{'Host':'ydt.kxlock.com:443','Connection':_0x1fa9e0(0x131),'Content-Length':0x0,'Accept':_0x225782(0x158,'x0YL'),'User-Agent':soy_kkj_UA,'Content-Type':_0x1fa9e0(0x12d),'Origin':_0x310bcd(0x162),'Referer':_0x1fa9e0(0x133),'Accept-Encoding':_0x225782(0x147,')G1!'),'Accept-Language':_0x225782(0x139,'u7$M')}};};function Get_request(_0xbffbdc){return{'url':_0xbffbdc,'headers':soy_kkj_headers};};

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