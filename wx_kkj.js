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

const _0x230cd9=_0x19a0,_0x38bdc=_0xc9d1;function _0x4662(){const _0x3c6b33=['ydt.kxlock.com:443','WRVcRSku','EMGTq04SEMG7Ct0WlJKSzw4Tvvm7Ct0WlJGSzw47Ct0WlJC','log','l2e1qKv3qG','WQaKWOWbD8oGW5q','9688RlnNqV','\x20提交任务】:\x20','yCoVlSkLW7hdU8kvW5vbtaJcLmotWQu','umkDtUI2H+wmS3a','mtK3nJmXmeHzwM5Jwa','BxnN','zMJcNmko','\x20提交任务】:\x20网络请求失败','W5j/na','Bg9N','WOiMFwe/WQhcK8oeWOvKcZOoeq','Aw5KzxHpzG','DIDTWOtdVq','BGRcSa','soy_kkj_UA','finally','WQ9eDNlcSWD/WOxdImoX','sqbrt8k7','A2vLCc1HBgL2zq','WRNcPCkwWPvOWPug','mde4','ls0T6lsM5y+3ia','CgfYC2u','getTimezoneOffset','hSoFb8oe','pdVdGSoAWPdcObhdN8kzW5xcUuif','z2v0vgfZAZ90AwnRzxq9','WQKGWPua','Aw5KzxG','BMfTzq','ndiZmtu2mhD0uM9mCG','done','WQiVWO4','sH9ouG','D2fPDa','mJm5ndC0owXhtMjxqW','dmkeW4dcP8oI','WR8sv35hjW','code','W5D+jCkSWRvZCCkGWP0h','WPBMJ6FKURxKUBhLI4NJGkxdLZxNVRhNUO/ORPpMS4ZLPkNOTky','pt0944cq5ywXia','zrxcUf0e','5589RfGqqw','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv9RA2PFDgLJA2v0','W5ldG8kwWO/cNa','WOhMJApKUz7KUj3LIyNJGkXaWQi','zw52','lLRdRa','nJe2C1j6ugDu','oSk4W5K','WOuuW5FdIW','cau0nSoedCoC','fc7cG+I0H+wnKSoh','zgnVDw50','W6tcKsu','262BsFQSa','wwhcQW','C3bSAxq','DmoItSkIbG','nxrMsLPbuq','WRTeBhlcNbXQ','fY9C','ntC3odK2swTLB1fY','z3PPCcWGzgvMBgf0zq','\x20用户状态】:\x20\x0a---用户ID：','indexOf','8191jMPjtu','BSo8rSkUcG','C295x2TRAL90AwnRzxq','Es7cQCooxCo1WOJdN8kRo2HCWR5vW6Wtjb7cNCkaut3cL8o9WPxdQGRdLSo1p04mCW','ioIoT+wpLUAwH+EROooaKtOG572r57UC6k+35Rgc5AsX6lsL','WQasswrEpSoGW73dJSoZ','W6/dVdKSzwhcU8kWnNa','zgf0yq','Ahr0CdOVl20UDwLNow81D3aUC2HVCa','length','mc4YmZG','WRxcRmku','iLRdVKi+','zmoCyq','iXPjAZ/cSCkw','rmk7nuNcImkfWPVcGmooW7ldJHpcNZu','soy_kkj_ticket','W6ZdS8oBW4u+W5vEWRhdRG7cRmkqia','url','W5ymntVLVQ7LIkxNP6tLI6RVVRq','getTime','\x20获取文章】:\x20网络请求失败','WRvpFhpcHsDT','44on77Y75PYY5Ag95ywK55Qq5BQF5yY06ywHWQHIvSoEWQBdGSk4W6nvW5xdPSkiobBdOG','W7VcIYbWrWlcIeXHWQ9rDSo5W7a','AYj86lsb5y+kga','BgvUz3rO','dSoFgSo+WQ87WO14hftdT1PcW54','data','o1xdQfqJ','WRqyrf9uiCoR','1976310HYZncX','CMfUzg9T','odHbD0zjqK0','t2dcPmo8W4XqW4ldLtZcOq','name','cJ09psdOHjRMNkZMIAFOOyWGlsdLJjFKUQZML7BPL7tVVjO','index','ode5mwPnugP0Dq','\x0a开始【第\x20','WQGnWPK','C295x2TRAL9vqq','v2ldG0q','getdata','WR8svW','W7ujv1jrAa','z2v0zgf0yq','vbfqqW','split','rCkavCkrW7aPWQTscuJdHG','WRnAqEI3KEwmN3a','env','xMBdMG','\x20获取文章】:\x20','\x20===\x0a'];_0x4662=function(){return _0x3c6b33;};return _0x4662();}(function(_0x5702b8,_0xa39262){const _0x36c4ed=_0xc9d1,_0x2a70ae=_0x19a0,_0x1d6389=_0x4d92,_0x1bccb8=_0x5702b8();while(!![]){try{const _0x492639=parseInt(_0x1d6389(0x192))/0x1*(-parseInt(_0x2a70ae(0x161))/0x2)+-parseInt(_0x36c4ed(0x19d,'q[ZZ'))/0x3*(parseInt(_0x1d6389(0x18d))/0x4)+parseInt(_0x36c4ed(0x17a,'3vRS'))/0x5*(-parseInt(_0x1d6389(0x147))/0x6)+-parseInt(_0x1d6389(0x14c))/0x7+-parseInt(_0x2a70ae(0x1a9))/0x8*(-parseInt(_0x2a70ae(0x154))/0x9)+-parseInt(_0x2a70ae(0x18b))/0xa+-parseInt(_0x1d6389(0x15a))/0xb*(-parseInt(_0x1d6389(0x168))/0xc);if(_0x492639===_0xa39262)break;else _0x1bccb8['push'](_0x1bccb8['shift']());}catch(_0x565e29){_0x1bccb8['push'](_0x1bccb8['shift']());}}}(_0x4662,0x83c74));let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';function _0x4d92(_0x3465da,_0xba74ab){const _0x4662bb=_0x4662();return _0x4d92=function(_0x19a0ad,_0x385ba5){_0x19a0ad=_0x19a0ad-0x136;let _0x266530=_0x4662bb[_0x19a0ad];if(_0x4d92['MUjoXc']===undefined){var _0x10c143=function(_0x4d9272){const _0x527ed6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1e26b5='',_0x3254b5='';for(let _0xe27e11=0x0,_0x4a7696,_0x848ced,_0xc9d1e9=0x0;_0x848ced=_0x4d9272['charAt'](_0xc9d1e9++);~_0x848ced&&(_0x4a7696=_0xe27e11%0x4?_0x4a7696*0x40+_0x848ced:_0x848ced,_0xe27e11++%0x4)?_0x1e26b5+=String['fromCharCode'](0xff&_0x4a7696>>(-0x2*_0xe27e11&0x6)):0x0){_0x848ced=_0x527ed6['indexOf'](_0x848ced);}for(let _0x260372=0x0,_0x3e3c43=_0x1e26b5['length'];_0x260372<_0x3e3c43;_0x260372++){_0x3254b5+='%'+('00'+_0x1e26b5['charCodeAt'](_0x260372)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3254b5);};_0x4d92['jeoqYQ']=_0x10c143,_0x3465da=arguments,_0x4d92['MUjoXc']=!![];}const _0x351c88=_0x4662bb[0x0],_0xf3da84=_0x19a0ad+_0x351c88,_0x1b94be=_0x3465da[_0xf3da84];return!_0x1b94be?(_0x266530=_0x4d92['jeoqYQ'](_0x266530),_0x3465da[_0xf3da84]=_0x266530):_0x266530=_0x1b94be,_0x266530;},_0x4d92(_0x3465da,_0xba74ab);}!(async()=>{const _0x2fe5bc=_0x4d92,_0x1f60a0=_0xc9d1,_0x3f3fb4=_0x19a0;if($['isNode']()){if(!process['env'][_0x3f3fb4(0x17c)]){console[_0x1f60a0(0x194,'B$MP')]('\x0a【'+$[_0x2fe5bc(0x146)]+_0x2fe5bc(0x155));return;}if(process[_0x2fe5bc(0x158)][_0x2fe5bc(0x16e)]&&process[_0x1f60a0(0x159,'PePC')][_0x3f3fb4(0x17c)]['indexOf']('@')>-0x1)app_soy_kkj_ticket=process[_0x1f60a0(0x1a4,'D6[$')][_0x1f60a0(0x187,'q[ZZ')]['split']('@');else{if(process['env'][_0x3f3fb4(0x17c)]&&process[_0x3f3fb4(0x19f)]['soy_kkj_ticket']['indexOf']('\x0a')>-0x1)app_soy_kkj_ticket=process[_0x3f3fb4(0x19f)][_0x2fe5bc(0x16e)][_0x2fe5bc(0x163)]('\x0a');else process[_0x3f3fb4(0x19f)]['soy_kkj_ticket']&&process['env'][_0x2fe5bc(0x16e)][_0x1f60a0(0x182,'K!DL')]('#')>-0x1?app_soy_kkj_ticket=process[_0x1f60a0(0x162,'*42f')]['soy_kkj_ticket'][_0x1f60a0(0x164,'3#mr')]('#'):app_soy_kkj_ticket=process[_0x3f3fb4(0x19f)]['soy_kkj_ticket'][_0x2fe5bc(0x163)]();};if(process[_0x2fe5bc(0x158)][_0x1f60a0(0x171,'1#(&')]&&process[_0x1f60a0(0x15b,'s1qi')][_0x2fe5bc(0x195)][_0x3f3fb4(0x16b)]('@')>-0x1)app_soy_kkj_UA=process[_0x3f3fb4(0x19f)][_0x2fe5bc(0x195)][_0x3f3fb4(0x19c)]('@');else{if(process[_0x2fe5bc(0x158)][_0x3f3fb4(0x137)]&&process[_0x2fe5bc(0x158)][_0x2fe5bc(0x195)]['indexOf']('\x0a')>-0x1)app_soy_kkj_UA=process[_0x1f60a0(0x149,'LY^e')][_0x2fe5bc(0x195)][_0x2fe5bc(0x163)]('\x0a');else process['env'][_0x2fe5bc(0x195)]&&process[_0x3f3fb4(0x19f)][_0x2fe5bc(0x195)][_0x2fe5bc(0x1b4)]('#')>-0x1?app_soy_kkj_UA=process[_0x2fe5bc(0x158)]['soy_kkj_UA'][_0x3f3fb4(0x19c)]('#'):app_soy_kkj_UA=process[_0x2fe5bc(0x158)][_0x2fe5bc(0x195)][_0x2fe5bc(0x163)]();};}else{if(!$['getdata'](_0x2fe5bc(0x16e))){console[_0x3f3fb4(0x1a6)]('\x0a【'+$[_0x2fe5bc(0x146)]+_0x1f60a0(0x183,'K!DL'));return;}if($[_0x2fe5bc(0x19a)](_0x1f60a0(0x17b,']wr['))&&$[_0x2fe5bc(0x19a)]('soy_kkj_ticket')[_0x1f60a0(0x15d,'JGuK')]('@')>-0x1)app_soy_kkj_ticket=$[_0x3f3fb4(0x197)](_0x3f3fb4(0x17c))[_0x1f60a0(0x13a,'IdGY')]('@');else{if($['getdata'](_0x2fe5bc(0x16e))&&$[_0x2fe5bc(0x19a)]('soy_kkj_ticket')[_0x2fe5bc(0x1b4)]('\x0a')>-0x1)app_soy_kkj_ticket=$['getdata'](_0x3f3fb4(0x17c))[_0x3f3fb4(0x19c)]('\x0a');else $[_0x1f60a0(0x166,'K!DL')](_0x2fe5bc(0x16e))&&$[_0x2fe5bc(0x19a)](_0x1f60a0(0x1ab,'ss^L'))[_0x1f60a0(0x1a7,'7r]e')]('#')>-0x1?app_soy_kkj_ticket=$['getdata']('soy_kkj_ticket')[_0x2fe5bc(0x163)]('#'):app_soy_kkj_ticket=$[_0x3f3fb4(0x197)](_0x2fe5bc(0x16e))[_0x2fe5bc(0x163)]();};if($[_0x2fe5bc(0x19a)](_0x1f60a0(0x18e,'*42f'))&&$['getdata'](_0x2fe5bc(0x195))[_0x2fe5bc(0x1b4)]('@')>-0x1)app_soy_kkj_UA=$['getdata'](_0x2fe5bc(0x195))[_0x1f60a0(0x156,'nR3B')]('@');else{if($['getdata'](_0x2fe5bc(0x195))&&$[_0x2fe5bc(0x19a)]('soy_kkj_UA')[_0x2fe5bc(0x1b4)]('\x0a')>-0x1)app_soy_kkj_UA=$[_0x1f60a0(0x1a8,'LY^e')](_0x3f3fb4(0x137))[_0x2fe5bc(0x163)]('\x0a');else $[_0x1f60a0(0x13c,'D6[$')]('soy_kkj_UA')&&$[_0x1f60a0(0x18a,'1#(&')](_0x2fe5bc(0x195))['indexOf']('#')>-0x1?app_soy_kkj_UA=$[_0x3f3fb4(0x197)](_0x3f3fb4(0x137))[_0x3f3fb4(0x19c)]('#'):app_soy_kkj_UA=$[_0x3f3fb4(0x197)](_0x1f60a0(0x172,'v6FV'))[_0x1f60a0(0x1b5,'VnGL')]();};}console[_0x2fe5bc(0x1b2)](_0x2fe5bc(0x190)+new Date(new Date()[_0x3f3fb4(0x180)]()+new Date()[_0x3f3fb4(0x140)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1f60a0(0x1b3,'ikJn')]()+_0x3f3fb4(0x1a2)),console[_0x1f60a0(0x167,'8BHc')](_0x2fe5bc(0x152)+app_soy_kkj_ticket[_0x3f3fb4(0x175)]+'\x20个账号】===\x0a');for(i=0x0;i<app_soy_kkj_ticket[_0x2fe5bc(0x186)];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1.0;\x20ALP-AL00\x20Build/HUAWEIALP-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/66.0.3359.126\x20Mobile\x20Safari/537.36\x20baiduboxapp/10.0.5.11\x20(Baidu;\x20P1\x208.1.0)'),$[_0x3f3fb4(0x191)]=i+0x1,await implement();};notify&&await notify[_0x1f60a0(0x139,'K!DL')]($[_0x1f60a0(0x1af,'RHIe')],subTitle);})()['catch'](_0x11ac2d=>$[_0x38bdc(0x14e,'1#(&')](_0x11ac2d))[_0x230cd9(0x138)](()=>$[_0x230cd9(0x148)]());async function implement(){const _0xbc299f=_0x38bdc,_0x510952=_0x230cd9;host='http://ydt.kxlock.com:443/code008/ydt2/',console['log'](_0x510952(0x193)+$[_0xbc299f(0x14d,'o^L4')]+'\x20个账号任务】'),await soy_kkj_getTask();}function soy_kkj_getTask(){const _0x331e1b=_0x38bdc,_0x33f3f0=_0x4d92;let _0xa0cc73=Post_request(_0x33f3f0(0x143)+soy_kkj_ticket+_0x331e1b(0x15c,'9p7I')+random());return new Promise((_0x21e473,_0x236305)=>{$['post'](_0xa0cc73,async(_0x454ce2,_0xb76579,_0x3a4292)=>{const _0x446643=_0x4d92,_0x2f9beb=_0x19a0,_0x28fba9=_0xc9d1;try{if(_0x454ce2)console[_0x28fba9(0x179,'eV2Z')]('\x0a【'+$['name']+_0x28fba9(0x185,'7r]e')+$[_0x2f9beb(0x191)]+_0x2f9beb(0x181)),subTitle+='\x0a【'+$[_0x2f9beb(0x18f)]+'---账号\x20'+$[_0x2f9beb(0x191)]+_0x446643(0x170);else{let _0x4258f2=JSON[_0x28fba9(0x189,'PePC')](_0x3a4292);_0x4258f2[_0x2f9beb(0x14f)]==0x0?(console['log']('\x0a【'+$[_0x2f9beb(0x18f)]+_0x28fba9(0x1ac,'q[ZZ')+$['index']+'\x20获取文章】:\x20获取成功'),article=_0x4258f2['data'][_0x2f9beb(0x17e)],tgid=_0x4258f2[_0x2f9beb(0x188)]['tgid'],await soy_kkj_read(),await $[_0x446643(0x14b)](Math[_0x28fba9(0x153,'SjWd')](Math['random']()*(0x2710-0x1770+0x3e8)+0x1770)),await soy_kkj_submit()):(console[_0x28fba9(0x177,'kbVY')]('\x0a【'+$['name']+'---账号\x20'+$['index']+_0x2f9beb(0x1a1)+_0x4258f2[_0x28fba9(0x136,'SjWd')]),subTitle+='\x0a【'+$[_0x28fba9(0x19b,'IdGY')]+_0x28fba9(0x19e,'UyPz')+$[_0x446643(0x145)]+'\x20获取文章】:\x20'+_0x4258f2['msg']);}}catch(_0xed94a){console['log'](_0xed94a,_0xb76579);}finally{_0x21e473();}});});}function _0xc9d1(_0x3465da,_0xba74ab){const _0x4662bb=_0x4662();return _0xc9d1=function(_0x19a0ad,_0x385ba5){_0x19a0ad=_0x19a0ad-0x136;let _0x266530=_0x4662bb[_0x19a0ad];if(_0xc9d1['yvRCKR']===undefined){var _0x10c143=function(_0x527ed6){const _0x1e26b5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3254b5='',_0xe27e11='';for(let _0x4a7696=0x0,_0x848ced,_0xc9d1e9,_0x260372=0x0;_0xc9d1e9=_0x527ed6['charAt'](_0x260372++);~_0xc9d1e9&&(_0x848ced=_0x4a7696%0x4?_0x848ced*0x40+_0xc9d1e9:_0xc9d1e9,_0x4a7696++%0x4)?_0x3254b5+=String['fromCharCode'](0xff&_0x848ced>>(-0x2*_0x4a7696&0x6)):0x0){_0xc9d1e9=_0x1e26b5['indexOf'](_0xc9d1e9);}for(let _0x3e3c43=0x0,_0x581944=_0x3254b5['length'];_0x3e3c43<_0x581944;_0x3e3c43++){_0xe27e11+='%'+('00'+_0x3254b5['charCodeAt'](_0x3e3c43)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xe27e11);};const _0x4d9272=function(_0x56c4b3,_0x562233){let _0x24be84=[],_0x11ac2d=0x0,_0xa0cc73,_0x21e473='';_0x56c4b3=_0x10c143(_0x56c4b3);let _0x236305;for(_0x236305=0x0;_0x236305<0x100;_0x236305++){_0x24be84[_0x236305]=_0x236305;}for(_0x236305=0x0;_0x236305<0x100;_0x236305++){_0x11ac2d=(_0x11ac2d+_0x24be84[_0x236305]+_0x562233['charCodeAt'](_0x236305%_0x562233['length']))%0x100,_0xa0cc73=_0x24be84[_0x236305],_0x24be84[_0x236305]=_0x24be84[_0x11ac2d],_0x24be84[_0x11ac2d]=_0xa0cc73;}_0x236305=0x0,_0x11ac2d=0x0;for(let _0x454ce2=0x0;_0x454ce2<_0x56c4b3['length'];_0x454ce2++){_0x236305=(_0x236305+0x1)%0x100,_0x11ac2d=(_0x11ac2d+_0x24be84[_0x236305])%0x100,_0xa0cc73=_0x24be84[_0x236305],_0x24be84[_0x236305]=_0x24be84[_0x11ac2d],_0x24be84[_0x11ac2d]=_0xa0cc73,_0x21e473+=String['fromCharCode'](_0x56c4b3['charCodeAt'](_0x454ce2)^_0x24be84[(_0x24be84[_0x236305]+_0x24be84[_0x11ac2d])%0x100]);}return _0x21e473;};_0xc9d1['LZZftI']=_0x4d9272,_0x3465da=arguments,_0xc9d1['yvRCKR']=!![];}const _0x351c88=_0x4662bb[0x0],_0xf3da84=_0x19a0ad+_0x351c88,_0x1b94be=_0x3465da[_0xf3da84];return!_0x1b94be?(_0xc9d1['xqGtll']===undefined&&(_0xc9d1['xqGtll']=!![]),_0x266530=_0xc9d1['LZZftI'](_0x266530,_0x385ba5),_0x3465da[_0xf3da84]=_0x266530):_0x266530=_0x1b94be,_0x266530;},_0xc9d1(_0x3465da,_0xba74ab);}function soy_kkj_read(){return new Promise((_0x4f1ee1,_0xd8c521)=>{const _0x5cb1e3=_0xc9d1;$[_0x5cb1e3(0x1a0,'BcS$')]({'url':''+article,'headers':{'User-Agent':soy_kkj_UA},'body':body},async(_0x25f24a,_0x32e325,_0x43a02b)=>{const _0xf43ae4=_0x19a0;try{}catch(_0x1d0796){console[_0xf43ae4(0x1a6)](_0x1d0796,_0x32e325);}finally{_0x4f1ee1();}});});}function soy_kkj_submit(){const _0x33d381=_0x38bdc;let _0x4746d4=Post_request(_0x33d381(0x184,'P(nn')+soy_kkj_ticket+_0x33d381(0x199,'1#(&')+tgid+'&_t='+random());return new Promise((_0x91e21f,_0x16aacb)=>{const _0x1bc145=_0x33d381;$[_0x1bc145(0x14a,'IdGY')](_0x4746d4,async(_0x2c4ab7,_0x5503c8,_0x11742d)=>{const _0x1f04af=_0x19a0,_0x69e69a=_0x4d92,_0x4fad9c=_0x1bc145;try{if(_0x2c4ab7)console[_0x4fad9c(0x1b1,'^DK%')]('\x0a【'+$[_0x4fad9c(0x144,'LY^e')]+'---账号\x20'+$[_0x69e69a(0x145)]+_0x1f04af(0x1b0)),subTitle+='\x0a【'+$[_0x69e69a(0x146)]+_0x69e69a(0x13e)+$[_0x4fad9c(0x16d,'3#mr')]+_0x4fad9c(0x151,'X@Cl');else{let _0x49c096=JSON[_0x69e69a(0x13f)](_0x11742d);_0x49c096[_0x4fad9c(0x141,'q[ZZ')]==0x0?(console['log']('\x0a【'+$['name']+_0x4fad9c(0x15e,'BcS$')+$[_0x1f04af(0x191)]+'\x20提交任务】:\x20提交成功'),console[_0x4fad9c(0x160,'P(nn')]('\x0a【'+$[_0x1f04af(0x18f)]+'---账号\x20'+$['index']+_0x1f04af(0x16a)+_0x49c096[_0x69e69a(0x173)][_0x4fad9c(0x150,'^DK%')]+'\x0a---阅读数量：'+_0x49c096[_0x1f04af(0x188)][_0x69e69a(0x15f)]+_0x4fad9c(0x17f,'K!DL')+_0x49c096[_0x1f04af(0x188)]['points']/0xa),await soy_kkj_getTask()):(console[_0x4fad9c(0x198,'1#(&')]('\x0a【'+$[_0x4fad9c(0x196,'BcS$')]+_0x69e69a(0x13e)+$[_0x1f04af(0x191)]+_0x1f04af(0x1aa)+_0x49c096[_0x69e69a(0x1ae)]),subTitle+='\x0a【'+$[_0x1f04af(0x18f)]+'---账号\x20'+$[_0x4fad9c(0x178,'PePC')]+_0x4fad9c(0x157,'nR3B')+_0x49c096['msg']);}}catch(_0x32dba6){console['log'](_0x32dba6,_0x5503c8);}finally{_0x91e21f();}});});}function Post_request(_0x15c28e){const _0x48cf07=_0x38bdc,_0x5aaf15=_0x4d92,_0x13dff0=_0x230cd9;return{'url':''+host+_0x15c28e,'headers':{'Host':_0x13dff0(0x1a3),'Connection':_0x5aaf15(0x13b),'Content-Length':0x0,'Accept':_0x48cf07(0x16f,'xx6)'),'User-Agent':soy_kkj_UA,'Content-Type':'application/x-www-form-urlencoded','Origin':_0x5aaf15(0x174),'Referer':'http://m.uig9o5wp.shop/','Accept-Encoding':_0x5aaf15(0x169),'Accept-Language':_0x5aaf15(0x1a5)}};}function _0x19a0(_0x3465da,_0xba74ab){const _0x4662bb=_0x4662();return _0x19a0=function(_0x19a0ad,_0x385ba5){_0x19a0ad=_0x19a0ad-0x136;let _0x266530=_0x4662bb[_0x19a0ad];return _0x266530;},_0x19a0(_0x3465da,_0xba74ab);};function Get_request(_0x41037e){return{'url':_0x41037e,'headers':soy_kkj_headers};};function random(){const _0x33b1ae=_0x4d92;let _0x3458b3='';for(let _0xbc9cf2=0x0;_0xbc9cf2<0x2;_0xbc9cf2++){_0x3458b3+=Math['floor'](Math[_0x33b1ae(0x18c)]()*0xa);}return _0x33b1ae(0x176)+_0x3458b3+'5'+_0x3458b3+_0x33b1ae(0x13d)+_0x3458b3+'06'+_0x3458b3;}


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