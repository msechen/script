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

const _0x3e7840=_0x2213,_0x4ef736=_0x465a;function _0x2213(_0x317fe3,_0x1df5ca){const _0x11e248=_0x11e2();return _0x2213=function(_0x5e3b93,_0x85e27c){_0x5e3b93=_0x5e3b93-0x18b;let _0x52809e=_0x11e248[_0x5e3b93];if(_0x2213['JfaVRX']===undefined){var _0x2adb2b=function(_0x446bef){const _0x92af7c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x268be0='',_0x4dc4f9='';for(let _0x1faec4=0x0,_0x2fa578,_0x2213e5,_0x59c600=0x0;_0x2213e5=_0x446bef['charAt'](_0x59c600++);~_0x2213e5&&(_0x2fa578=_0x1faec4%0x4?_0x2fa578*0x40+_0x2213e5:_0x2213e5,_0x1faec4++%0x4)?_0x268be0+=String['fromCharCode'](0xff&_0x2fa578>>(-0x2*_0x1faec4&0x6)):0x0){_0x2213e5=_0x92af7c['indexOf'](_0x2213e5);}for(let _0x396af6=0x0,_0x162e29=_0x268be0['length'];_0x396af6<_0x162e29;_0x396af6++){_0x4dc4f9+='%'+('00'+_0x268be0['charCodeAt'](_0x396af6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4dc4f9);};const _0x465ade=function(_0x17dd1a,_0x3cc120){let _0x59ecf6=[],_0x7c2b23=0x0,_0x4d4666,_0x41914e='';_0x17dd1a=_0x2adb2b(_0x17dd1a);let _0x59f73d;for(_0x59f73d=0x0;_0x59f73d<0x100;_0x59f73d++){_0x59ecf6[_0x59f73d]=_0x59f73d;}for(_0x59f73d=0x0;_0x59f73d<0x100;_0x59f73d++){_0x7c2b23=(_0x7c2b23+_0x59ecf6[_0x59f73d]+_0x3cc120['charCodeAt'](_0x59f73d%_0x3cc120['length']))%0x100,_0x4d4666=_0x59ecf6[_0x59f73d],_0x59ecf6[_0x59f73d]=_0x59ecf6[_0x7c2b23],_0x59ecf6[_0x7c2b23]=_0x4d4666;}_0x59f73d=0x0,_0x7c2b23=0x0;for(let _0x5e0602=0x0;_0x5e0602<_0x17dd1a['length'];_0x5e0602++){_0x59f73d=(_0x59f73d+0x1)%0x100,_0x7c2b23=(_0x7c2b23+_0x59ecf6[_0x59f73d])%0x100,_0x4d4666=_0x59ecf6[_0x59f73d],_0x59ecf6[_0x59f73d]=_0x59ecf6[_0x7c2b23],_0x59ecf6[_0x7c2b23]=_0x4d4666,_0x41914e+=String['fromCharCode'](_0x17dd1a['charCodeAt'](_0x5e0602)^_0x59ecf6[(_0x59ecf6[_0x59f73d]+_0x59ecf6[_0x7c2b23])%0x100]);}return _0x41914e;};_0x2213['kIYWtp']=_0x465ade,_0x317fe3=arguments,_0x2213['JfaVRX']=!![];}const _0x1d4c5e=_0x11e248[0x0],_0x54ec17=_0x5e3b93+_0x1d4c5e,_0xeec255=_0x317fe3[_0x54ec17];return!_0xeec255?(_0x2213['ECHWHV']===undefined&&(_0x2213['ECHWHV']=!![]),_0x52809e=_0x2213['kIYWtp'](_0x52809e,_0x85e27c),_0x317fe3[_0x54ec17]=_0x52809e):_0x52809e=_0xeec255,_0x52809e;},_0x2213(_0x317fe3,_0x1df5ca);}(function(_0x51a4ff,_0x577507){const _0x35d90b=_0x465a,_0x4e7201=_0x2213,_0x16d784=_0x5e3b,_0x109b3c=_0x51a4ff();while(!![]){try{const _0x3b9cdb=parseInt(_0x16d784(0x1d3))/0x1+-parseInt(_0x4e7201(0x1fd,'CoaK'))/0x2*(-parseInt(_0x4e7201(0x19c,'C4xx'))/0x3)+-parseInt(_0x4e7201(0x1d4,'AyER'))/0x4+-parseInt(_0x35d90b(0x19f))/0x5+parseInt(_0x35d90b(0x1b4))/0x6*(-parseInt(_0x16d784(0x1e8))/0x7)+parseInt(_0x35d90b(0x1ec))/0x8+parseInt(_0x16d784(0x1a0))/0x9;if(_0x3b9cdb===_0x577507)break;else _0x109b3c['push'](_0x109b3c['shift']());}catch(_0x43b754){_0x109b3c['push'](_0x109b3c['shift']());}}}(_0x11e2,0x913ef));let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';function _0x465a(_0x317fe3,_0x1df5ca){const _0x11e248=_0x11e2();return _0x465a=function(_0x5e3b93,_0x85e27c){_0x5e3b93=_0x5e3b93-0x18b;let _0x52809e=_0x11e248[_0x5e3b93];if(_0x465a['xMFmML']===undefined){var _0x2adb2b=function(_0x465ade){const _0x446bef='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x92af7c='',_0x268be0='';for(let _0x4dc4f9=0x0,_0x1faec4,_0x2fa578,_0x2213e5=0x0;_0x2fa578=_0x465ade['charAt'](_0x2213e5++);~_0x2fa578&&(_0x1faec4=_0x4dc4f9%0x4?_0x1faec4*0x40+_0x2fa578:_0x2fa578,_0x4dc4f9++%0x4)?_0x92af7c+=String['fromCharCode'](0xff&_0x1faec4>>(-0x2*_0x4dc4f9&0x6)):0x0){_0x2fa578=_0x446bef['indexOf'](_0x2fa578);}for(let _0x59c600=0x0,_0x396af6=_0x92af7c['length'];_0x59c600<_0x396af6;_0x59c600++){_0x268be0+='%'+('00'+_0x92af7c['charCodeAt'](_0x59c600)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x268be0);};_0x465a['myfzgg']=_0x2adb2b,_0x317fe3=arguments,_0x465a['xMFmML']=!![];}const _0x1d4c5e=_0x11e248[0x0],_0x54ec17=_0x5e3b93+_0x1d4c5e,_0xeec255=_0x317fe3[_0x54ec17];return!_0xeec255?(_0x52809e=_0x465a['myfzgg'](_0x52809e),_0x317fe3[_0x54ec17]=_0x52809e):_0x52809e=_0xeec255,_0x52809e;},_0x465a(_0x317fe3,_0x1df5ca);}!(async()=>{const _0x42a466=_0x2213,_0x4e43e6=_0x5e3b,_0x4501b9=_0x465a;if($['isNode']()){if(!process['env'][_0x4501b9(0x1e6)]){console[_0x4e43e6(0x1cc)]('\x0a【'+$[_0x42a466(0x1bc,'Yc$n')]+_0x4e43e6(0x1f1));return;}if(process[_0x42a466(0x1b9,'ccy#')][_0x4e43e6(0x1ed)]&&process[_0x4501b9(0x199)][_0x4e43e6(0x1ed)][_0x4e43e6(0x1a8)]('@')>-0x1)app_soy_kkj_ticket=process[_0x4e43e6(0x1be)][_0x4501b9(0x1e6)][_0x4501b9(0x1dd)]('@');else{if(process[_0x4e43e6(0x1be)]['soy_kkj_ticket']&&process['env'][_0x42a466(0x1c8,'3k(W')][_0x4e43e6(0x1a8)]('\x0a')>-0x1)app_soy_kkj_ticket=process['env'][_0x42a466(0x1d2,'*Hjg')][_0x4e43e6(0x1d1)]('\x0a');else process['env']['soy_kkj_ticket']&&process[_0x4501b9(0x199)]['soy_kkj_ticket'][_0x42a466(0x1bd,'AyER')]('#')>-0x1?app_soy_kkj_ticket=process[_0x4501b9(0x199)][_0x42a466(0x1b3,'C4xx')][_0x42a466(0x1b1,'O*sF')]('#'):app_soy_kkj_ticket=process[_0x4501b9(0x199)][_0x4501b9(0x1e6)][_0x42a466(0x19d,'!B87')]();};if(process[_0x4e43e6(0x1be)][_0x4501b9(0x1b2)]&&process[_0x42a466(0x1b9,'ccy#')][_0x4501b9(0x1b2)][_0x4501b9(0x1f2)]('@')>-0x1)app_soy_kkj_UA=process['env'][_0x42a466(0x1b0,'LRx(')]['split']('@');else{if(process['env'][_0x42a466(0x194,'pvAL')]&&process[_0x4e43e6(0x1be)][_0x4e43e6(0x1d5)][_0x4e43e6(0x1a8)]('\x0a')>-0x1)app_soy_kkj_UA=process[_0x4e43e6(0x1be)][_0x4e43e6(0x1d5)][_0x4e43e6(0x1d1)]('\x0a');else process[_0x4e43e6(0x1be)][_0x4501b9(0x1b2)]&&process[_0x42a466(0x18c,'AyER')]['soy_kkj_UA'][_0x42a466(0x1c3,'d3X7')]('#')>-0x1?app_soy_kkj_UA=process[_0x42a466(0x1e5,'CoaK')][_0x4e43e6(0x1d5)][_0x4501b9(0x1dd)]('#'):app_soy_kkj_UA=process[_0x4e43e6(0x1be)][_0x4501b9(0x1b2)][_0x4e43e6(0x1d1)]();};}else{if(!$[_0x4501b9(0x1b5)]('soy_kkj_ticket')){console[_0x42a466(0x1ad,'6dw#')]('\x0a【'+$[_0x42a466(0x19a,'CoaK')]+_0x4e43e6(0x1f1));return;}if($[_0x42a466(0x1a5,'$MPU')]('soy_kkj_ticket')&&$[_0x42a466(0x1d8,'7II3')](_0x42a466(0x1da,'SAT2'))[_0x42a466(0x1b8,'!(Jh')]('@')>-0x1)app_soy_kkj_ticket=$[_0x42a466(0x18f,'LRx(')](_0x4501b9(0x1e6))[_0x4501b9(0x1dd)]('@');else{if($['getdata']('soy_kkj_ticket')&&$[_0x42a466(0x1d9,'8C1o')]('soy_kkj_ticket')[_0x4e43e6(0x1a8)]('\x0a')>-0x1)app_soy_kkj_ticket=$[_0x4e43e6(0x1f9)]('soy_kkj_ticket')[_0x42a466(0x191,'fLD]')]('\x0a');else $[_0x42a466(0x1f0,'dmG!')]('soy_kkj_ticket')&&$[_0x4e43e6(0x1f9)](_0x42a466(0x1dc,'pvAL'))[_0x4501b9(0x1f2)]('#')>-0x1?app_soy_kkj_ticket=$[_0x4e43e6(0x1f9)]('soy_kkj_ticket')[_0x42a466(0x190,'d3X7')]('#'):app_soy_kkj_ticket=$['getdata'](_0x42a466(0x19e,'u)Lp'))[_0x42a466(0x1a2,'*Hjg')]();};if($[_0x4e43e6(0x1f9)](_0x4e43e6(0x1d5))&&$['getdata']('soy_kkj_UA')['indexOf']('@')>-0x1)app_soy_kkj_UA=$['getdata'](_0x4e43e6(0x1d5))[_0x4501b9(0x1dd)]('@');else{if($[_0x4501b9(0x1b5)]('soy_kkj_UA')&&$[_0x4501b9(0x1b5)](_0x4501b9(0x1b2))['indexOf']('\x0a')>-0x1)app_soy_kkj_UA=$['getdata'](_0x4e43e6(0x1d5))['split']('\x0a');else $[_0x42a466(0x1a9,'eokL')](_0x4e43e6(0x1d5))&&$[_0x4e43e6(0x1f9)](_0x42a466(0x1bb,'EOST'))['indexOf']('#')>-0x1?app_soy_kkj_UA=$[_0x42a466(0x1f0,'dmG!')](_0x42a466(0x1a1,'I^]Y'))['split']('#'):app_soy_kkj_UA=$[_0x4501b9(0x1b5)]('soy_kkj_UA')[_0x4e43e6(0x1d1)]();};}console[_0x4501b9(0x1ba)]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()['getTime']()+new Date()[_0x4e43e6(0x192)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4501b9(0x1e7)]()+_0x4e43e6(0x1c4)),console['log'](_0x4e43e6(0x1fe)+app_soy_kkj_ticket[_0x42a466(0x1e1,'u)Lp')]+'\x20个账号】===\x0a');for(i=0x0;i<app_soy_kkj_ticket[_0x42a466(0x1ca,'7II3')];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA=_0x4501b9(0x1f6)),$[_0x42a466(0x198,'$MPU')]=i+0x1,await implement();};notify&&await notify[_0x4e43e6(0x1c5)]($['name'],subTitle);})()[_0x4ef736(0x1f3)](_0x7c2b23=>$[_0x3e7840(0x1e9,'6!V5')](_0x7c2b23))['finally'](()=>$[_0x4ef736(0x1fb)]());async function implement(){const _0x1f9553=_0x3e7840,_0x521f09=_0x5e3b;host=_0x521f09(0x1af),console[_0x521f09(0x1cc)]('\x0a开始【第\x20'+$[_0x521f09(0x1a3)]+_0x1f9553(0x1a6,'6dw#')),await soy_kkj_getTask();}function _0x11e2(){const _0x53255c=['===【共\x20','DSkRaCoegXy','BMfTzq','W4BcJ08','WOSWymoXWQurW7VcPMSeW7hdHSooEwLwWObQhhzyW6pdOSoQW7apCxxdQSk6xSo9W5a','dcount','W6RcKCo1uY/cUSkq','cwZcQmoYWQi','i8kVcSoecW','getTimezoneOffset','\x20提交任务】:\x20网络请求失败','i8o5WPSYhGRcUwK+W6O','WOBcNrSBFmk2WR8hW7TW','http://m.uig9o5wp.shop','WQJcTmk8','WPZdVSkEW7K6','zw52','W7/cHaf4','\x20用户状态】:\x20\x0a---用户ID：','WRFcOCk2CSoukCoFENGQWPRcKXW','gCkWW5Oqya','WRFcTmkIWPFcM8oFjriTW59Kls7cVG','mJu2odq4nurnywnKrG','1935306bKRqow','umknb8oHwSkrWRnWhmkS','ibK+vsO','index','WOrmhmkv','WPldTCkoW7GJDW8','bUs4G+I0TownLos5REwkPoocJq','WPLfa8kyW64bWOpcMmkMWO0','indexOf','WPDoaCkvW7SqWQe','ls0T6lsM5y+3ia','W4NOJzBLJPFMLQJNQRtJG77dVvNOJ5xLJARMIyBLIOW','application/json,\x20text/plain,\x20*/*','sKz1','mNfstgrlAW','http://ydt.kxlock.com:443/code008/ydt2/','W77cM8o4AcxcPCkBxs7cPa','WRTSrdqj','C295x2TRAL9vqq','W7FdVSo2fmklCSkau0asWPpcKd43','nNvODe54sq','z2v0zgf0yq','Aw5KzxG','FKr/6lsA5y6PnG','xSkFWO3cNetdVJ0','WOZcJZC','Bg9N','WPKVACocWQCzW7dcJvCQ','WO0Ssb8','W4RcJ13dLga5xW','env','EXnXWOK','---账号\x20','name','D2fPDa','e3lcOmo+WQ7dNMa','\x20===\x0a','sendNotify','cI0TlEw9K+wjJEENR+wiHU+8MG','W6FdLvng6zMu6kYS5PAJ6yAH776x','WPqLW6byg1pcL1HvW5LyW7lcImoZ','W6evWQ5zWOq','bmkgW4ldG2KE','jmkPW4vx','log','BxnN','xmk2W6ny','WPNcGdnCmq','a+AmSUs7MUs5HEwkKoodQ8oJdW','split','iayRyZv9gLa7W5ddTKjdW5K','485825nPiFOa','WPFdKa7cHcPgcCoYW77dNvzTpq','soy_kkj_UA','z2v0vgfZAZ90AwnRzxq9','ioApKos6Pos7U+wkOEoaKtOG572r57UC6k+35Rgc5AsX6lsL','d8kgW5JdGhWcW6e','WQHyW5WWFSoLvG','WP7cLWC0oSk8WRKXW7L8WOO6kZ0','WQJdUSo0','i8o5WPSYhGRcUwKFW4ldIcFcK8os','C3bSAxq','WPOEf8oeEG','code','WOpcMrmo','WQJcVSk1WQ/cHmoC','Cg9PBNrZ','W47OJAVLJONML4xNQAhJG6fIWRdNV6/NU5VORBRMSzVLPQROTAq','W6lcSSkT6lA15yYBWOC','W7tcIXO','C295x2TRAL90AwnRzxq','Dg9mB2nHBgvtDhjPBMC','3539641DaLqQF','WRBdSeNcMq9B','W5BcK1u','jL90ptaUotq2ndCXnJa2mJG2mZq4nq','nZm5mJC0nhr5CurjDG','soy_kkj_ticket','ioIoT+wpLUAwH+EROooaKtOG','ioApKos6Pos7U+wkOEoaKtOG','CHDOWOGOdCk0','】：未填写相应变量\x20soy_kkj_ticket','Aw5KzxHpzG','y2f0y2G','C3vIBwL0p3rPy2TLDd0','Ahr0CdOVl20UDwLNow81D3aUC2HVCc8','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKidGUms4WoYbbtfaTquWWmcbcDwLSzc9ivufxruLbtfaTquWWmdSGD3yPiefWCgXLv2vIs2L0lZuZnY4ZnIaOs0HutuWSigXPA2uGr2vJA28PifzLCNnPB24Vnc4WienOCM9Tzs82nI4WlJmZntKUmti2ie1VyMLSzsbtywzHCMKVntm3lJm2igjHAwr1yM94yxbWlZeWlJaUns4XmsaOqMfPzhu7ifaXidGUms4Wkq','post','WPZdL8oKdSkFEbhdHCoNWPKuwSoc','getdata','\x20提交任务】:\x20提交成功','zg9Uzq','data','WQpcLd5rWPxcRXC'];_0x11e2=function(){return _0x53255c;};return _0x11e2();}function soy_kkj_getTask(){const _0x3cb60c=_0x4ef736;let _0x4d4666=Post_request(_0x3cb60c(0x1d6)+soy_kkj_ticket+_0x3cb60c(0x1eb));return new Promise((_0x41914e,_0x59f73d)=>{const _0xdeb13=_0x2213;$[_0xdeb13(0x1cb,'58wP')](_0x4d4666,async(_0x5e0602,_0x3c42f7,_0xd80b08)=>{const _0x553a25=_0xdeb13,_0x5f1460=_0x5e3b,_0x946531=_0x465a;try{if(_0x5e0602)console[_0x946531(0x1ba)]('\x0a【'+$['name']+'---账号\x20'+$['index']+'\x20获取文章】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x5f1460(0x1c1)]+_0x5f1460(0x1c0)+$['index']+_0x553a25(0x1e3,'D]kI');else{let _0x55983b=JSON[_0x553a25(0x1cf,'ccy#')](_0xd80b08);_0x55983b[_0x5f1460(0x1df)]==0x0?(console[_0x553a25(0x197,'u)Lp')]('\x0a【'+$[_0x553a25(0x1e0,'SAT2')]+_0x946531(0x1aa)+$[_0x946531(0x1b6)]+_0x553a25(0x1ab,'ccy#')),article=_0x55983b[_0x5f1460(0x1fc)][_0x553a25(0x1ea,'AyER')],tgid=_0x55983b['data'][_0x553a25(0x1a4,'eokL')],await soy_kkj_read(),await $[_0x946531(0x1c2)](Math['floor'](Math['random']()*(0x2710-0x1f40+0x3e8)+0x1f40)),await soy_kkj_submit()):(console['log']('\x0a【'+$[_0x553a25(0x1bf,'dmG!')]+_0x5f1460(0x1c0)+$['index']+_0x946531(0x1ee)+_0x55983b['msg']),subTitle+='\x0a【'+$[_0x553a25(0x1ce,'Z$2J')]+'---账号\x20'+$[_0x5f1460(0x1a3)]+'\x20获取文章】:\x20'+_0x55983b['msg']);}}catch(_0x261018){console[_0x946531(0x1ba)](_0x261018,_0x3c42f7);}finally{_0x41914e();}});});}function soy_kkj_read(){return new Promise((_0x22ad58,_0x27d708)=>{const _0x403f37=_0x2213;$[_0x403f37(0x1db,'SnYZ')]({'url':''+article,'headers':{'User-Agent':soy_kkj_UA}},async(_0x330420,_0x5264f2,_0x432c64)=>{const _0x1b1e45=_0x465a;try{}catch(_0x1aa4a4){console[_0x1b1e45(0x1ba)](_0x1aa4a4,_0x5264f2);}finally{_0x22ad58();}});});}function soy_kkj_submit(){const _0x4b5081=_0x3e7840,_0x3aa2e9=_0x4ef736;let _0x351b07=Post_request(_0x3aa2e9(0x1f4)+soy_kkj_ticket+_0x4b5081(0x1ff,'fLD]')+tgid+'&_t=0.48665388536520227');return new Promise((_0x1481e3,_0x13e64d)=>{const _0xff77e7=_0x5e3b;$[_0xff77e7(0x1f7)](_0x351b07,async(_0x4f146e,_0x198cbc,_0x5dd387)=>{const _0xe218c9=_0x465a,_0x13af49=_0x2213,_0x2093a1=_0xff77e7;try{if(_0x4f146e)console['log']('\x0a【'+$[_0x2093a1(0x1c1)]+_0x13af49(0x1b7,'*Hjg')+$[_0x2093a1(0x1a3)]+_0x2093a1(0x193)),subTitle+='\x0a【'+$[_0xe218c9(0x18b)]+_0x2093a1(0x1c0)+$[_0x13af49(0x1c9,'EFwN')]+_0xe218c9(0x1d7);else{let _0x140375=JSON[_0x13af49(0x1de,'$i&M')](_0x5dd387);_0x140375[_0x2093a1(0x1df)]==0x0?(console[_0xe218c9(0x1ba)]('\x0a【'+$['name']+_0x2093a1(0x1c0)+$[_0x2093a1(0x1a3)]+_0x2093a1(0x1fa)),console[_0x2093a1(0x1cc)]('\x0a【'+$['name']+_0x13af49(0x1e4,'SnYZ')+$[_0x2093a1(0x1a3)]+_0x2093a1(0x19b)+_0x140375['data'][_0x13af49(0x1a7,'eokL')]+_0x13af49(0x1c7,'SAT2')+_0x140375[_0x2093a1(0x1fc)][_0x2093a1(0x18e)]+_0xe218c9(0x1c6)+_0x140375[_0x2093a1(0x1fc)][_0xe218c9(0x1e2)]/0xa),await soy_kkj_getTask()):(console[_0x2093a1(0x1cc)]('\x0a【'+$['name']+_0x2093a1(0x1c0)+$['index']+_0xe218c9(0x1ef)+_0x140375[_0xe218c9(0x1cd)]),subTitle+='\x0a【'+$[_0x2093a1(0x1c1)]+_0xe218c9(0x1aa)+$[_0xe218c9(0x1b6)]+_0x13af49(0x1d0,'I^]Y')+_0x140375['msg']);}}catch(_0x312b22){console['log'](_0x312b22,_0x198cbc);}finally{_0x1481e3();}});});}function _0x5e3b(_0x317fe3,_0x1df5ca){const _0x11e248=_0x11e2();return _0x5e3b=function(_0x5e3b93,_0x85e27c){_0x5e3b93=_0x5e3b93-0x18b;let _0x52809e=_0x11e248[_0x5e3b93];return _0x52809e;},_0x5e3b(_0x317fe3,_0x1df5ca);}function Post_request(_0x3eb62c){const _0x1c2308=_0x4ef736,_0x5f4b51=_0x5e3b,_0x57bb8d=_0x3e7840;return{'url':''+host+_0x3eb62c,'headers':{'Host':'ydt.kxlock.com:443','Connection':_0x57bb8d(0x195,'SAT2'),'Content-Length':0x0,'Accept':_0x5f4b51(0x1ac),'User-Agent':soy_kkj_UA,'Content-Type':_0x57bb8d(0x18d,'EOST'),'Origin':_0x5f4b51(0x196),'Referer':_0x1c2308(0x1f5),'Accept-Encoding':'gzip,\x20deflate','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'}};};function Get_request(_0x5b3e24){return{'url':_0x5b3e24,'headers':soy_kkj_headers};};


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