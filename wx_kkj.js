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

const _0x2f3364=_0x5b7d,_0xc2e8ee=_0x5b08;function _0x5b08(_0x3013ec,_0xdce505){const _0xe8b6a3=_0xe8b6();return _0x5b08=function(_0x5b7dbc,_0x5732a9){_0x5b7dbc=_0x5b7dbc-0x116;let _0x54ede6=_0xe8b6a3[_0x5b7dbc];if(_0x5b08['KaKGtW']===undefined){var _0x343ad3=function(_0x19d3e1){const _0x50a9de='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x312b4e='',_0x28dc2d='';for(let _0x5d265f=0x0,_0xbcc5ac,_0x5b08d2,_0x2b4a06=0x0;_0x5b08d2=_0x19d3e1['charAt'](_0x2b4a06++);~_0x5b08d2&&(_0xbcc5ac=_0x5d265f%0x4?_0xbcc5ac*0x40+_0x5b08d2:_0x5b08d2,_0x5d265f++%0x4)?_0x312b4e+=String['fromCharCode'](0xff&_0xbcc5ac>>(-0x2*_0x5d265f&0x6)):0x0){_0x5b08d2=_0x50a9de['indexOf'](_0x5b08d2);}for(let _0x13bd6d=0x0,_0xc42054=_0x312b4e['length'];_0x13bd6d<_0xc42054;_0x13bd6d++){_0x28dc2d+='%'+('00'+_0x312b4e['charCodeAt'](_0x13bd6d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x28dc2d);};const _0x36fa0c=function(_0x448166,_0x7f0b36){let _0x5f35c0=[],_0x511a88=0x0,_0x180747,_0x39cba8='';_0x448166=_0x343ad3(_0x448166);let _0x6e9d10;for(_0x6e9d10=0x0;_0x6e9d10<0x100;_0x6e9d10++){_0x5f35c0[_0x6e9d10]=_0x6e9d10;}for(_0x6e9d10=0x0;_0x6e9d10<0x100;_0x6e9d10++){_0x511a88=(_0x511a88+_0x5f35c0[_0x6e9d10]+_0x7f0b36['charCodeAt'](_0x6e9d10%_0x7f0b36['length']))%0x100,_0x180747=_0x5f35c0[_0x6e9d10],_0x5f35c0[_0x6e9d10]=_0x5f35c0[_0x511a88],_0x5f35c0[_0x511a88]=_0x180747;}_0x6e9d10=0x0,_0x511a88=0x0;for(let _0x495c47=0x0;_0x495c47<_0x448166['length'];_0x495c47++){_0x6e9d10=(_0x6e9d10+0x1)%0x100,_0x511a88=(_0x511a88+_0x5f35c0[_0x6e9d10])%0x100,_0x180747=_0x5f35c0[_0x6e9d10],_0x5f35c0[_0x6e9d10]=_0x5f35c0[_0x511a88],_0x5f35c0[_0x511a88]=_0x180747,_0x39cba8+=String['fromCharCode'](_0x448166['charCodeAt'](_0x495c47)^_0x5f35c0[(_0x5f35c0[_0x6e9d10]+_0x5f35c0[_0x511a88])%0x100]);}return _0x39cba8;};_0x5b08['skPiWH']=_0x36fa0c,_0x3013ec=arguments,_0x5b08['KaKGtW']=!![];}const _0x8c091a=_0xe8b6a3[0x0],_0x1d3a81=_0x5b7dbc+_0x8c091a,_0x3cbe0c=_0x3013ec[_0x1d3a81];return!_0x3cbe0c?(_0x5b08['dzNcWs']===undefined&&(_0x5b08['dzNcWs']=!![]),_0x54ede6=_0x5b08['skPiWH'](_0x54ede6,_0x5732a9),_0x3013ec[_0x1d3a81]=_0x54ede6):_0x54ede6=_0x3cbe0c,_0x54ede6;},_0x5b08(_0x3013ec,_0xdce505);}function _0x5b7d(_0x3013ec,_0xdce505){const _0xe8b6a3=_0xe8b6();return _0x5b7d=function(_0x5b7dbc,_0x5732a9){_0x5b7dbc=_0x5b7dbc-0x116;let _0x54ede6=_0xe8b6a3[_0x5b7dbc];return _0x54ede6;},_0x5b7d(_0x3013ec,_0xdce505);}(function(_0x1abef9,_0x58d78e){const _0xaaf81b=_0x5b7d,_0x2cb02c=_0x5b08,_0x131887=_0x36fa,_0x98f33c=_0x1abef9();while(!![]){try{const _0x5beddf=parseInt(_0x131887(0x184))/0x1*(parseInt(_0x131887(0x15d))/0x2)+-parseInt(_0x2cb02c(0x120,'OV@f'))/0x3+-parseInt(_0xaaf81b(0x170))/0x4+parseInt(_0xaaf81b(0x123))/0x5+parseInt(_0x2cb02c(0x155,'uu^c'))/0x6+parseInt(_0xaaf81b(0x152))/0x7+parseInt(_0x2cb02c(0x153,'ni6p'))/0x8;if(_0x5beddf===_0x58d78e)break;else _0x98f33c['push'](_0x98f33c['shift']());}catch(_0x5fdb2d){_0x98f33c['push'](_0x98f33c['shift']());}}}(_0xe8b6,0x7d324));let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';function _0x36fa(_0x3013ec,_0xdce505){const _0xe8b6a3=_0xe8b6();return _0x36fa=function(_0x5b7dbc,_0x5732a9){_0x5b7dbc=_0x5b7dbc-0x116;let _0x54ede6=_0xe8b6a3[_0x5b7dbc];if(_0x36fa['yRVNfD']===undefined){var _0x343ad3=function(_0x36fa0c){const _0x19d3e1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x50a9de='',_0x312b4e='';for(let _0x28dc2d=0x0,_0x5d265f,_0xbcc5ac,_0x5b08d2=0x0;_0xbcc5ac=_0x36fa0c['charAt'](_0x5b08d2++);~_0xbcc5ac&&(_0x5d265f=_0x28dc2d%0x4?_0x5d265f*0x40+_0xbcc5ac:_0xbcc5ac,_0x28dc2d++%0x4)?_0x50a9de+=String['fromCharCode'](0xff&_0x5d265f>>(-0x2*_0x28dc2d&0x6)):0x0){_0xbcc5ac=_0x19d3e1['indexOf'](_0xbcc5ac);}for(let _0x2b4a06=0x0,_0x13bd6d=_0x50a9de['length'];_0x2b4a06<_0x13bd6d;_0x2b4a06++){_0x312b4e+='%'+('00'+_0x50a9de['charCodeAt'](_0x2b4a06)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x312b4e);};_0x36fa['WnnyUK']=_0x343ad3,_0x3013ec=arguments,_0x36fa['yRVNfD']=!![];}const _0x8c091a=_0xe8b6a3[0x0],_0x1d3a81=_0x5b7dbc+_0x8c091a,_0x3cbe0c=_0x3013ec[_0x1d3a81];return!_0x3cbe0c?(_0x54ede6=_0x36fa['WnnyUK'](_0x54ede6),_0x3013ec[_0x1d3a81]=_0x54ede6):_0x54ede6=_0x3cbe0c,_0x54ede6;},_0x36fa(_0x3013ec,_0xdce505);}function _0xe8b6(){const _0xdd7fb7=['FdiJ','\x20获取文章】:\x20网络请求失败','WQPnr8oYFGy6bsdcUdNcRmkkW5S','getdata','soy_kkj_UA','302272brXSRj','1654541bzuLms','W6WWWPKhWQFdLWtdQ8kBWOxdK8kp','ioApKos6Pos7U+wkOEoaKtOG','ovRdMmkoW43dIu1QW7hcQeuw','wConqrmC','EIZdIW','z2v0vgfZAZ90AwnRzxq9','C295x2TRAL9vqq','aSogW47dRG','585486eUyJGC','rNTxrxjXcg7cV0TjW695WPy','mJK3ndu0sgL4q0Hg','pt0944cq5ywXia','W5pdKqi','z8k9rgdcJCowW4q','Eweina','W73dRmk5A8ojWQG','W7G9mIBcKdnmdLHhpcFdVCoIpaC6cCoKW7C7WOpdGwPgoSonn1ZcTSo+WQpdOSoXb8oks1ygW49Llwqai8kdz1ddOGtcKmkPWRZdUsBdOIvWWOHmewvSWROBcmopl8oqsSkBvtSxWOtcRCkRuCoMW6GtW6ldU8odf8oDW5tdP8kXoY3cKCk7mbiErIjjW5FdQbu4mCk3zcKJvmkKzSk+y8koWO/cOSktmX9ewW3cTgNdOq7cNeSfqvdcL0lcI8ovkHxdSSoaW67dKCotumoAdSkxW554WQHfWPWbFNFdTCoWWOD0At3cQZnWe1hdQSo/WPHJW4/dOSooz8kmC2qHuSobeX7dVmkzW6qJkSkTmmkjWPbPEComEMeLW7VdR0tcICoGfa','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv9RA2PFDgLJA2v0','Bg9N','getTimezoneOffset','zw52','W6ZdRmkJBmoo','AWFcMCoEWPtcI0K','BxnN','nZm0mdeWvwvArwDs','index','m2jCWRddUZ/cNGVdRxC','soy_kkj_ticket','3fwMWoJ','1565148iIqamJ','BMfTzq','W6pdQmk5AmosWQ0','Ahr0CdOVl20Um3jKBhvKCduUC2HVCc8','Aw5KzxHpzG','pZKdn+w9IUwjL+EMJEwiT++/Kq','W4BdQYdcVW','Aw52AxrLq29Kzq','WQ7dJcjZE8krnSoGWOmSgSoIWQH5','h8kuW6zm','log','name','env','W5m7jI7cKdnu','jL90ptaUotq2ndCXnJa2mJG2mZq4nq','W7DDm3iyASo2WP7cQXW','length','logErr','w+AmPEs4TUs7LUwiS+obLSouzoAnQos7G+AkKEwlTW','uhPy','m2z3tvDVsG','WPBdOre','cJ09psdOHjRMNkZMIAFOOyWGlsdLJjFKUQZML7BPL7tVVjO','ACk2vghcLmoTW4m','W5nZB8k0pmkwWO5auMWSDWjW','yvtcLrBdKayzuXuWevmgW4W','CgfYC2u','z2v0','\x20个账号任务】','application/x-www-form-urlencoded','zgnVDw50','data','W7NMJ7lKUPRKUzBLIRtJGBXQEUE8HEE4JEIUREAYHEwNNUI2IG','z2v0zgf0yq','zgOsFWb3WPjZACoTWQddVWKAWQ0lzmkp','W7dLV6ZLP7FJGlNNRPqM','wICjW5StkM/dNftcTmkfva','W5D+W6NdSSo4dSkt','C295x2TRAL90AwnRzxq','1654260KOiLKO','W7/cV8oH','C3bSAxq','w3vdFW','BEAnOEs5G+s7O+wiUEocSCk4WQ0','wdiGnHaghmoKBSoA','---账号\x20','W7ZdOSkUumonWQ44prCw','ios4QUI0PUwpT+oaKt09pqO','Aw5KzxG','zMXVB3i','n8ozW4PBW5BcJmo4W6xcK8ozW6JcMY98W6SZWPFcPrpdKaDvW4iSW4lcTKxdGXRdJ8kGnwpcPbC','orHe','44kE776x5P+95AgK5ys/55I95BUg5y666yAnD2Wyjwf0gCkhtSoBWR3cMNddLYy','split','CY3dMG','zSkNvhxdJ8k2WO3cS1BcObBcTKNcU8oCeIZdLCk/lCoyEajchCoRzalcLe1UW5JcUwpcVbfKc8k5','W4u9oZS','ls0T6lsM5y+3ia','wXiMvuS','WRVcR8omWPGIW6xcICkCrmoSWQdcVSoSW5W','WQPsuSoeyq','indexOf','W7tcPNbJW55zAdiRCa','W7FdI8oLWOdcPCk9e8kxEWNcJ8oaWQFcONKuWPZcS8k3EmkHdq','\x20获取文章】:\x20获取成功','jNrNAwq9jL90ptaUndG2nJuZodG1mZy1mJaYmJC','W6ZdKmoOWQ/dTmo5vSkLahS','mty1ndi2meTpAuXltW','A2vLCc1HBgL2zq','Cg9PBNrZ','A8owWRdcU8kObCkx','xZivbHGmgSoEAmoVA8ovW4Pd','ioIoT+wpLUAwH+EROooaKtOG','W6LLpwyJ','ioEuQoAiT+EkTUAaGEoaKtOGcI0TlEEuQoAiT0Le77YA','BSkXeG','DgDPza','sYpcPSkNhW','W5FcO1VOTlZLJO4J','\x20提交任务】:\x20网络请求失败'];_0xe8b6=function(){return _0xdd7fb7;};return _0xe8b6();}!(async()=>{const _0x3da477=_0x5b08,_0x1f7e5c=_0x36fa,_0x4a090c=_0x5b7d;if($['isNode']()){if(!process[_0x4a090c(0x17c)][_0x4a090c(0x16e)]){console['log']('\x0a【'+$[_0x1f7e5c(0x171)]+_0x1f7e5c(0x164));return;}if(process[_0x4a090c(0x17c)][_0x1f7e5c(0x122)]&&process[_0x1f7e5c(0x167)][_0x4a090c(0x16e)][_0x1f7e5c(0x174)]('@')>-0x1)app_soy_kkj_ticket=process[_0x4a090c(0x17c)][_0x4a090c(0x16e)][_0x3da477(0x156,'DOel')]('@');else{if(process[_0x3da477(0x124,'pq#!')]['soy_kkj_ticket']&&process[_0x1f7e5c(0x167)]['soy_kkj_ticket']['indexOf']('\x0a')>-0x1)app_soy_kkj_ticket=process[_0x3da477(0x12f,'6M$P')]['soy_kkj_ticket']['split']('\x0a');else process[_0x1f7e5c(0x167)]['soy_kkj_ticket']&&process[_0x4a090c(0x17c)][_0x3da477(0x178,'RLYR')][_0x1f7e5c(0x174)]('#')>-0x1?app_soy_kkj_ticket=process[_0x1f7e5c(0x167)][_0x3da477(0x137,'tVsZ')][_0x3da477(0x149,'P*Xb')]('#'):app_soy_kkj_ticket=process[_0x3da477(0x14c,'tjeu')][_0x3da477(0x188,'j4E6')]['split']();};if(process[_0x1f7e5c(0x167)][_0x3da477(0x13a,'D%16')]&&process[_0x1f7e5c(0x167)]['soy_kkj_UA'][_0x1f7e5c(0x174)]('@')>-0x1)app_soy_kkj_UA=process['env'][_0x3da477(0x12a,'3JWu')]['split']('@');else{if(process[_0x1f7e5c(0x167)][_0x4a090c(0x150)]&&process['env'][_0x1f7e5c(0x159)][_0x4a090c(0x139)]('\x0a')>-0x1)app_soy_kkj_UA=process[_0x1f7e5c(0x167)]['soy_kkj_UA'][_0x1f7e5c(0x125)]('\x0a');else process[_0x3da477(0x183,'Zl!$')][_0x4a090c(0x150)]&&process[_0x1f7e5c(0x167)]['soy_kkj_UA'][_0x1f7e5c(0x174)]('#')>-0x1?app_soy_kkj_UA=process[_0x3da477(0x157,'ABrJ')][_0x3da477(0x13e,'&m%1')][_0x3da477(0x138,'tjlU')]('#'):app_soy_kkj_UA=process[_0x4a090c(0x17c)][_0x4a090c(0x150)]['split']();};}else{if(!$[_0x1f7e5c(0x11d)](_0x3da477(0x14e,'tjlU'))){console[_0x1f7e5c(0x165)]('\x0a【'+$[_0x3da477(0x126,'Zl!$')]+_0x3da477(0x130,'3JWu'));return;}if($['getdata'](_0x1f7e5c(0x122))&&$[_0x3da477(0x187,'Jc9x')](_0x1f7e5c(0x122))['indexOf']('@')>-0x1)app_soy_kkj_ticket=$[_0x4a090c(0x14f)](_0x4a090c(0x16e))[_0x4a090c(0x131)]('@');else{if($[_0x4a090c(0x14f)](_0x1f7e5c(0x122))&&$['getdata'](_0x3da477(0x15c,'Zl!$'))['indexOf']('\x0a')>-0x1)app_soy_kkj_ticket=$[_0x1f7e5c(0x11d)](_0x4a090c(0x16e))[_0x3da477(0x136,'4kF]')]('\x0a');else $[_0x3da477(0x121,'i0UL')](_0x4a090c(0x16e))&&$['getdata']('soy_kkj_ticket')[_0x1f7e5c(0x174)]('#')>-0x1?app_soy_kkj_ticket=$['getdata']('soy_kkj_ticket')['split']('#'):app_soy_kkj_ticket=$['getdata']('soy_kkj_ticket')[_0x4a090c(0x131)]();};if($[_0x4a090c(0x14f)]('soy_kkj_UA')&&$[_0x3da477(0x169,'uu^c')](_0x4a090c(0x150))[_0x3da477(0x160,'Jc9x')]('@')>-0x1)app_soy_kkj_UA=$[_0x4a090c(0x14f)]('soy_kkj_UA')[_0x1f7e5c(0x125)]('@');else{if($[_0x3da477(0x187,'Jc9x')](_0x3da477(0x128,'o94l'))&&$[_0x4a090c(0x14f)](_0x1f7e5c(0x159))['indexOf']('\x0a')>-0x1)app_soy_kkj_UA=$[_0x4a090c(0x14f)](_0x1f7e5c(0x159))[_0x4a090c(0x131)]('\x0a');else $[_0x4a090c(0x14f)](_0x1f7e5c(0x159))&&$[_0x4a090c(0x14f)](_0x1f7e5c(0x159))[_0x4a090c(0x139)]('#')>-0x1?app_soy_kkj_UA=$[_0x1f7e5c(0x11d)](_0x4a090c(0x150))[_0x1f7e5c(0x125)]('#'):app_soy_kkj_UA=$[_0x1f7e5c(0x11d)](_0x3da477(0x17f,'#qf7'))[_0x1f7e5c(0x125)]();};}console['log'](_0x1f7e5c(0x186)+new Date(new Date()[_0x3da477(0x142,'sj25')]()+new Date()[_0x4a090c(0x166)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x3da477(0x143,'o94l')]()+'\x20===\x0a'),console[_0x4a090c(0x17a)](_0x1f7e5c(0x15e)+app_soy_kkj_ticket[_0x4a090c(0x180)]+_0x1f7e5c(0x12b));for(i=0x0;i<app_soy_kkj_ticket[_0x3da477(0x172,'3JWu')];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA=_0x3da477(0x163,'2tyO')),$[_0x1f7e5c(0x12c)]=i+0x1,await implement();};notify&&await notify[_0x3da477(0x16d,'f@es')]($[_0x4a090c(0x17b)],subTitle);})()[_0xc2e8ee(0x168,'3JWu')](_0x511a88=>$[_0x2f3364(0x181)](_0x511a88))[_0xc2e8ee(0x17d,'2tyO')](()=>$[_0xc2e8ee(0x161,'r3L5')]());async function implement(){const _0x1504f9=_0x2f3364,_0xe898be=_0xc2e8ee;host=_0xe898be(0x133,'Jc9x'),console[_0xe898be(0x132,'ABrJ')](_0xe898be(0x11f,'nddi')+$['index']+_0x1504f9(0x118)),await soy_kkj_getTask();}function soy_kkj_getTask(){const _0x5b48a7=_0x36fa;let _0x180747=Post_request(_0x5b48a7(0x158)+soy_kkj_ticket+_0x5b48a7(0x17e));return new Promise((_0x39cba8,_0x6e9d10)=>{const _0x33eba1=_0x5b08;$[_0x33eba1(0x134,'2tyO')](_0x180747,async(_0x495c47,_0x3dbcca,_0x47d9b8)=>{const _0x139867=_0x5b7d,_0x539f35=_0x36fa,_0x3f79a7=_0x33eba1;try{if(_0x495c47)console[_0x3f79a7(0x185,'SDhN')]('\x0a【'+$['name']+_0x539f35(0x135)+$['index']+'\x20获取文章】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x539f35(0x171)]+'---账号\x20'+$['index']+_0x139867(0x14d);else{let _0x44892f=JSON['parse'](_0x47d9b8);_0x44892f[_0x3f79a7(0x15a,'9lZR')]==0x0?(console[_0x3f79a7(0x15f,'*Za@')]('\x0a【'+$[_0x539f35(0x171)]+'---账号\x20'+$[_0x139867(0x16c)]+_0x139867(0x13c)),article=_0x44892f['data']['url'],tgid=_0x44892f[_0x139867(0x11b)][_0x539f35(0x148)],await soy_kkj_read(),await $['wait'](Math[_0x539f35(0x12d)](Math[_0x3f79a7(0x162,'3JWu')]()*(0x2710-0x1f40+0x3e8)+0x1f40)),await soy_kkj_submit()):(console[_0x539f35(0x165)]('\x0a【'+$['name']+_0x539f35(0x135)+$[_0x139867(0x16c)]+_0x539f35(0x144)+_0x44892f['msg']),subTitle+='\x0a【'+$[_0x139867(0x17b)]+'---账号\x20'+$[_0x3f79a7(0x145,'7V)M')]+_0x539f35(0x144)+_0x44892f[_0x539f35(0x16a)]);}}catch(_0x275fcc){console[_0x539f35(0x165)](_0x275fcc,_0x3dbcca);}finally{_0x39cba8();}});});}function soy_kkj_read(){return new Promise((_0x1a04cd,_0x539faf)=>{const _0x385b1e=_0x36fa;$[_0x385b1e(0x117)]({'url':''+article,'headers':{'User-Agent':soy_kkj_UA}},async(_0x3556b2,_0x4bcdb6,_0x58aa15)=>{const _0x48d2c6=_0x5b08;try{}catch(_0x23e408){console[_0x48d2c6(0x147,'@qG$')](_0x23e408,_0x4bcdb6);}finally{_0x1a04cd();}});});}function soy_kkj_submit(){const _0x7c8d7a=_0x36fa,_0x4fa7bc=_0xc2e8ee;let _0x4ab901=Post_request(_0x4fa7bc(0x189,'2TD2')+soy_kkj_ticket+_0x7c8d7a(0x13d));return new Promise((_0x543ab6,_0x3c5663)=>{$['post'](_0x4ab901,async(_0x3e5258,_0x237bd3,_0x20cc2d)=>{const _0x45977e=_0x5b08,_0x4caa7b=_0x36fa,_0x5191d6=_0x5b7d;try{if(_0x3e5258)console[_0x5191d6(0x17a)]('\x0a【'+$[_0x4caa7b(0x171)]+_0x5191d6(0x129)+$[_0x5191d6(0x16c)]+_0x45977e(0x11c,'tjlU')),subTitle+='\x0a【'+$[_0x5191d6(0x17b)]+_0x4caa7b(0x135)+$[_0x4caa7b(0x12c)]+_0x5191d6(0x14b);else{let _0x3e22cb=JSON[_0x4caa7b(0x116)](_0x20cc2d);_0x3e22cb['code']==0x0?(console['log']('\x0a【'+$['name']+_0x5191d6(0x129)+$['index']+_0x45977e(0x182,'JU*9')),console['log']('\x0a【'+$[_0x45977e(0x176,'RIDF')]+_0x45977e(0x14a,'SDhN')+$[_0x4caa7b(0x12c)]+_0x4caa7b(0x146)+_0x3e22cb['data'][_0x4caa7b(0x177)]+'\x0a---阅读数量：'+_0x3e22cb[_0x5191d6(0x11b)][_0x4caa7b(0x11a)]+_0x45977e(0x175,'Zl!$')+_0x3e22cb[_0x45977e(0x179,'JU*9')][_0x4caa7b(0x141)]/0xa),await soy_kkj_getTask()):(console[_0x4caa7b(0x165)]('\x0a【'+$[_0x4caa7b(0x171)]+'---账号\x20'+$[_0x5191d6(0x16c)]+_0x45977e(0x127,'%^l&')+_0x3e22cb[_0x4caa7b(0x16a)]),subTitle+='\x0a【'+$['name']+_0x4caa7b(0x135)+$[_0x5191d6(0x16c)]+_0x4caa7b(0x154)+_0x3e22cb['msg']);}}catch(_0x5de692){console[_0x5191d6(0x17a)](_0x5de692,_0x237bd3);}finally{_0x543ab6();}});});}function Post_request(_0x1b8403){const _0x2852ee=_0x2f3364,_0x1a720a=_0x36fa,_0x4f095e=_0xc2e8ee;return{'url':''+host+_0x1b8403,'headers':{'Host':_0x4f095e(0x11e,'r3L5'),'Connection':_0x1a720a(0x140),'Content-Length':0x0,'Accept':'application/json,\x20text/plain,\x20*/*','User-Agent':soy_kkj_UA,'Content-Type':_0x2852ee(0x119),'Origin':_0x4f095e(0x13b,'&m%1'),'Referer':_0x1a720a(0x173),'Accept-Encoding':'gzip,\x20deflate','Accept-Language':_0x4f095e(0x12e,'%^l&')}};};function Get_request(_0x417e6c){return{'url':_0x417e6c,'headers':soy_kkj_headers};};


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