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

const _0x33098f=_0x5bb9,_0x57c175=_0x3219;function _0x5bb9(_0x1fd279,_0x59117c){const _0x4308f8=_0x4308();return _0x5bb9=function(_0x321969,_0x18aa96){_0x321969=_0x321969-0xdf;let _0x229b38=_0x4308f8[_0x321969];if(_0x5bb9['KhfHQt']===undefined){var _0x58b1b1=function(_0x5b7633){const _0x508748='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x28e62a='',_0x2c2326='';for(let _0x354f7b=0x0,_0x22f4d7,_0x5bb996,_0x523cca=0x0;_0x5bb996=_0x5b7633['charAt'](_0x523cca++);~_0x5bb996&&(_0x22f4d7=_0x354f7b%0x4?_0x22f4d7*0x40+_0x5bb996:_0x5bb996,_0x354f7b++%0x4)?_0x28e62a+=String['fromCharCode'](0xff&_0x22f4d7>>(-0x2*_0x354f7b&0x6)):0x0){_0x5bb996=_0x508748['indexOf'](_0x5bb996);}for(let _0x151624=0x0,_0xb6b28f=_0x28e62a['length'];_0x151624<_0xb6b28f;_0x151624++){_0x2c2326+='%'+('00'+_0x28e62a['charCodeAt'](_0x151624)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2c2326);};const _0x15dba=function(_0x3af29d,_0x44e309){let _0x126cc9=[],_0x3159d6=0x0,_0x4e5d22,_0x2c662e='';_0x3af29d=_0x58b1b1(_0x3af29d);let _0x26125d;for(_0x26125d=0x0;_0x26125d<0x100;_0x26125d++){_0x126cc9[_0x26125d]=_0x26125d;}for(_0x26125d=0x0;_0x26125d<0x100;_0x26125d++){_0x3159d6=(_0x3159d6+_0x126cc9[_0x26125d]+_0x44e309['charCodeAt'](_0x26125d%_0x44e309['length']))%0x100,_0x4e5d22=_0x126cc9[_0x26125d],_0x126cc9[_0x26125d]=_0x126cc9[_0x3159d6],_0x126cc9[_0x3159d6]=_0x4e5d22;}_0x26125d=0x0,_0x3159d6=0x0;for(let _0x111ad1=0x0;_0x111ad1<_0x3af29d['length'];_0x111ad1++){_0x26125d=(_0x26125d+0x1)%0x100,_0x3159d6=(_0x3159d6+_0x126cc9[_0x26125d])%0x100,_0x4e5d22=_0x126cc9[_0x26125d],_0x126cc9[_0x26125d]=_0x126cc9[_0x3159d6],_0x126cc9[_0x3159d6]=_0x4e5d22,_0x2c662e+=String['fromCharCode'](_0x3af29d['charCodeAt'](_0x111ad1)^_0x126cc9[(_0x126cc9[_0x26125d]+_0x126cc9[_0x3159d6])%0x100]);}return _0x2c662e;};_0x5bb9['rxycLu']=_0x15dba,_0x1fd279=arguments,_0x5bb9['KhfHQt']=!![];}const _0x5114c9=_0x4308f8[0x0],_0x4435f1=_0x321969+_0x5114c9,_0x2ce25e=_0x1fd279[_0x4435f1];return!_0x2ce25e?(_0x5bb9['dvcyAK']===undefined&&(_0x5bb9['dvcyAK']=!![]),_0x229b38=_0x5bb9['rxycLu'](_0x229b38,_0x18aa96),_0x1fd279[_0x4435f1]=_0x229b38):_0x229b38=_0x2ce25e,_0x229b38;},_0x5bb9(_0x1fd279,_0x59117c);}(function(_0x531017,_0x580698){const _0xc3ad0=_0x3219,_0x5386aa=_0x15db,_0x185d5c=_0x5bb9,_0x7703c8=_0x531017();while(!![]){try{const _0x56dc3b=-parseInt(_0x185d5c(0x15b,'Aq9W'))/0x1+parseInt(_0x5386aa(0xe1))/0x2+parseInt(_0x185d5c(0x120,'FjLC'))/0x3*(-parseInt(_0xc3ad0(0x126))/0x4)+parseInt(_0xc3ad0(0x137))/0x5*(-parseInt(_0xc3ad0(0x143))/0x6)+-parseInt(_0x185d5c(0x13f,'04H0'))/0x7*(-parseInt(_0x5386aa(0xfc))/0x8)+parseInt(_0x185d5c(0xf3,'W#ga'))/0x9+-parseInt(_0x185d5c(0xea,'vnU['))/0xa*(-parseInt(_0x5386aa(0x121))/0xb);if(_0x56dc3b===_0x580698)break;else _0x7703c8['push'](_0x7703c8['shift']());}catch(_0x3a70fb){_0x7703c8['push'](_0x7703c8['shift']());}}}(_0x4308,0x97320));let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';!(async()=>{const _0x3a9c62=_0x3219,_0x1c0861=_0x15db,_0x138401=_0x5bb9;if($[_0x138401(0xf4,'gW!7')]()){if(!process[_0x138401(0xe6,'@wPQ')]['soy_kkj_ticket']){console[_0x1c0861(0x160)]('\x0a【'+$['name']+'】：未填写相应变量\x20soy_kkj_ticket');return;}if(process[_0x1c0861(0x105)][_0x1c0861(0x12f)]&&process['env']['soy_kkj_ticket'][_0x1c0861(0x145)]('@')>-0x1)app_soy_kkj_ticket=process['env'][_0x1c0861(0x12f)][_0x1c0861(0xff)]('@');else{if(process[_0x1c0861(0x105)]['soy_kkj_ticket']&&process[_0x1c0861(0x105)][_0x138401(0x15d,'VCr&')][_0x3a9c62(0x12c)]('\x0a')>-0x1)app_soy_kkj_ticket=process['env'][_0x138401(0x154,'!zAJ')][_0x1c0861(0xff)]('\x0a');else process['env']['soy_kkj_ticket']&&process[_0x138401(0x114,']QWP')][_0x3a9c62(0x104)][_0x1c0861(0x145)]('#')>-0x1?app_soy_kkj_ticket=process['env'][_0x3a9c62(0x104)][_0x138401(0x10e,'qRRo')]('#'):app_soy_kkj_ticket=process[_0x138401(0x157,'8F]o')]['soy_kkj_ticket'][_0x138401(0x148,'5KGu')]();};if(process[_0x3a9c62(0x150)]['soy_kkj_UA']&&process['env'][_0x138401(0x12a,'g%N(')]['indexOf']('@')>-0x1)app_soy_kkj_UA=process[_0x3a9c62(0x150)][_0x3a9c62(0x123)]['split']('@');else{if(process[_0x138401(0x132,'O1sI')][_0x138401(0x159,'5KGu')]&&process[_0x1c0861(0x105)][_0x1c0861(0x102)][_0x3a9c62(0x12c)]('\x0a')>-0x1)app_soy_kkj_UA=process[_0x138401(0x134,'if(B')][_0x138401(0x14e,'OS*i')][_0x138401(0x13e,'7k9(')]('\x0a');else process[_0x3a9c62(0x150)][_0x3a9c62(0x123)]&&process[_0x1c0861(0x105)][_0x138401(0x135,'@wPQ')][_0x1c0861(0x145)]('#')>-0x1?app_soy_kkj_UA=process[_0x138401(0x151,'VCr&')]['soy_kkj_UA'][_0x138401(0x115,'um2F')]('#'):app_soy_kkj_UA=process[_0x1c0861(0x105)]['soy_kkj_UA'][_0x1c0861(0xff)]();};}else{if(!$['getdata'](_0x138401(0x130,'JCtJ'))){console[_0x1c0861(0x160)]('\x0a【'+$[_0x138401(0x131,'vnU[')]+'】：未填写相应变量\x20soy_kkj_ticket');return;}if($['getdata']('soy_kkj_ticket')&&$[_0x3a9c62(0x14c)]('soy_kkj_ticket')['indexOf']('@')>-0x1)app_soy_kkj_ticket=$[_0x1c0861(0x109)](_0x138401(0xe5,'um2F'))[_0x1c0861(0xff)]('@');else{if($[_0x3a9c62(0x14c)]('soy_kkj_ticket')&&$[_0x1c0861(0x109)](_0x1c0861(0x12f))[_0x138401(0x13b,'ec4e')]('\x0a')>-0x1)app_soy_kkj_ticket=$['getdata'](_0x138401(0x130,'JCtJ'))['split']('\x0a');else $[_0x1c0861(0x109)](_0x138401(0x138,'TBtc'))&&$[_0x3a9c62(0x14c)](_0x3a9c62(0x104))[_0x3a9c62(0x12c)]('#')>-0x1?app_soy_kkj_ticket=$[_0x3a9c62(0x14c)](_0x138401(0x13d,'@xS^'))[_0x138401(0x136,'(9J#')]('#'):app_soy_kkj_ticket=$['getdata'](_0x3a9c62(0x104))[_0x3a9c62(0x15f)]();};if($[_0x3a9c62(0x14c)](_0x138401(0x159,'5KGu'))&&$[_0x1c0861(0x109)](_0x138401(0xf5,'BzEI'))[_0x3a9c62(0x12c)]('@')>-0x1)app_soy_kkj_UA=$[_0x1c0861(0x109)](_0x138401(0xfa,'VCr&'))[_0x1c0861(0xff)]('@');else{if($[_0x3a9c62(0x14c)](_0x1c0861(0x102))&&$[_0x3a9c62(0x14c)]('soy_kkj_UA')[_0x3a9c62(0x12c)]('\x0a')>-0x1)app_soy_kkj_UA=$[_0x3a9c62(0x14c)](_0x1c0861(0x102))[_0x3a9c62(0x15f)]('\x0a');else $[_0x138401(0x111,'qRRo')](_0x1c0861(0x102))&&$['getdata'](_0x3a9c62(0x123))[_0x138401(0x11d,'PZ(j')]('#')>-0x1?app_soy_kkj_UA=$[_0x1c0861(0x109)]('soy_kkj_UA')[_0x1c0861(0xff)]('#'):app_soy_kkj_UA=$[_0x138401(0x12b,'!zAJ')]('soy_kkj_UA')[_0x3a9c62(0x15f)]();};}console[_0x3a9c62(0x146)]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()[_0x3a9c62(0x127)]()+new Date()[_0x1c0861(0x13a)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x3a9c62(0xe0)),console[_0x138401(0x124,'nk9F')](_0x1c0861(0x144)+app_soy_kkj_ticket[_0x138401(0x133,'BzEI')]+_0x3a9c62(0xdf));for(i=0x0;i<app_soy_kkj_ticket[_0x3a9c62(0x11a)];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1.0;\x20ALP-AL00\x20Build/HUAWEIALP-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/66.0.3359.126\x20Mobile\x20Safari/537.36\x20baiduboxapp/10.0.5.11\x20(Baidu;\x20P1\x208.1.0)'),$[_0x1c0861(0xe8)]=i+0x1,await implement();};notify&&await notify[_0x1c0861(0x153)]($[_0x1c0861(0x107)],subTitle);})()['catch'](_0x3159d6=>$[_0x57c175(0x140)](_0x3159d6))[_0x33098f(0xef,'BzEI')](()=>$[_0x33098f(0x155,'04H0')]());async function implement(){const _0x1b41c6=_0x33098f,_0x13e11d=_0x57c175;host=_0x13e11d(0x15a),console[_0x1b41c6(0xe4,'B@EX')](_0x1b41c6(0x14b,'04H0')+$[_0x1b41c6(0xf9,'!4hZ')]+'\x20个账号任务】'),await soy_kkj_getTask();}function soy_kkj_getTask(){let _0x4e5d22=Post_request('getTask?ticket='+soy_kkj_ticket+'&_t='+random());return new Promise((_0x2c662e,_0x26125d)=>{$['post'](_0x4e5d22,async(_0x111ad1,_0x3a755d,_0x24e546)=>{const _0x1f844d=_0x15db,_0x3ecaf4=_0x3219,_0x56c286=_0x5bb9;try{if(_0x111ad1)console[_0x56c286(0x12e,'vnU[')]('\x0a【'+$['name']+_0x3ecaf4(0xee)+$[_0x1f844d(0xe8)]+_0x56c286(0xe2,'O1sI')),subTitle+='\x0a【'+$[_0x1f844d(0x107)]+'---账号\x20'+$[_0x3ecaf4(0x10a)]+_0x3ecaf4(0x11f);else{let _0x113ac0=JSON[_0x3ecaf4(0xe7)](_0x24e546);_0x113ac0[_0x3ecaf4(0xeb)]==0x0?(console[_0x1f844d(0x160)]('\x0a【'+$['name']+'---账号\x20'+$[_0x3ecaf4(0x10a)]+_0x56c286(0x103,'!4hZ')),article=_0x113ac0['data'][_0x56c286(0x15c,'vnU[')],tgid=_0x113ac0[_0x56c286(0xf8,'&)]v')][_0x1f844d(0x118)],await soy_kkj_read(),await $[_0x1f844d(0x12d)](Math[_0x1f844d(0x11e)](Math[_0x56c286(0x10d,'8pe0')]()*(0x2710-0x1770+0x3e8)+0x1770)),await soy_kkj_submit()):(console['log']('\x0a【'+$[_0x1f844d(0x107)]+_0x3ecaf4(0xee)+$[_0x56c286(0x106,'(9J#')]+_0x3ecaf4(0x141)+_0x113ac0[_0x56c286(0x161,'@xS^')]),subTitle+='\x0a【'+$[_0x3ecaf4(0xec)]+'---账号\x20'+$[_0x56c286(0x110,'Aq9W')]+_0x1f844d(0xf1)+_0x113ac0['msg']);}}catch(_0x855d69){console[_0x56c286(0x116,'Ld14')](_0x855d69,_0x3a755d);}finally{_0x2c662e();}});});}function soy_kkj_read(){return new Promise((_0x565ad9,_0x59078f)=>{const _0x5f21cd=_0x3219;$[_0x5f21cd(0xfe)]({'url':''+article,'headers':{'User-Agent':soy_kkj_UA}},async(_0x26e3ed,_0x57d2f7,_0x2b5584)=>{const _0x173632=_0x15db;try{}catch(_0x37ef0f){console[_0x173632(0x160)](_0x37ef0f,_0x57d2f7);}finally{_0x565ad9();}});});}function soy_kkj_submit(){const _0x22228c=_0x15db;let _0x3c983d=Post_request(_0x22228c(0x129)+soy_kkj_ticket+_0x22228c(0x156)+tgid+_0x22228c(0x15e)+random());return new Promise((_0x24e04b,_0x12e526)=>{const _0x10cfd9=_0x3219;$[_0x10cfd9(0x117)](_0x3c983d,async(_0x49e305,_0x1ab205,_0x49ecab)=>{const _0x174b7d=_0x5bb9,_0x229c0d=_0x15db,_0x4bf1f4=_0x10cfd9;try{if(_0x49e305)console[_0x4bf1f4(0x146)]('\x0a【'+$[_0x4bf1f4(0xec)]+_0x229c0d(0xf7)+$[_0x229c0d(0xe8)]+_0x229c0d(0x11b)),subTitle+='\x0a【'+$[_0x229c0d(0x107)]+_0x4bf1f4(0xee)+$[_0x4bf1f4(0x10a)]+'\x20提交任务】:\x20网络请求失败';else{let _0x4186f5=JSON['parse'](_0x49ecab);_0x4186f5[_0x4bf1f4(0xeb)]==0x0?(console[_0x4bf1f4(0x146)]('\x0a【'+$[_0x4bf1f4(0xec)]+_0x174b7d(0x10f,'i%[C')+$[_0x4bf1f4(0x10a)]+_0x4bf1f4(0x122)),console[_0x229c0d(0x160)]('\x0a【'+$[_0x229c0d(0x107)]+'---账号\x20'+$[_0x174b7d(0x147,'s6#I')]+_0x229c0d(0xed)+_0x4186f5[_0x174b7d(0xe3,'uP1K')][_0x174b7d(0x14d,'B@EX')]+_0x174b7d(0x149,'21&T')+_0x4186f5['data']['dcount']+_0x229c0d(0xf2)+_0x4186f5[_0x4bf1f4(0x128)][_0x229c0d(0x108)]/0xa),await soy_kkj_getTask()):(console['log']('\x0a【'+$[_0x4bf1f4(0xec)]+_0x4bf1f4(0xee)+$[_0x229c0d(0xe8)]+_0x174b7d(0x101,'oLjH')+_0x4186f5[_0x4bf1f4(0x10c)]),subTitle+='\x0a【'+$[_0x229c0d(0x107)]+_0x4bf1f4(0xee)+$['index']+_0x229c0d(0x11c)+_0x4186f5[_0x229c0d(0x125)]);}}catch(_0x49d71c){console[_0x229c0d(0x160)](_0x49d71c,_0x1ab205);}finally{_0x24e04b();}});});}function _0x15db(_0x1fd279,_0x59117c){const _0x4308f8=_0x4308();return _0x15db=function(_0x321969,_0x18aa96){_0x321969=_0x321969-0xdf;let _0x229b38=_0x4308f8[_0x321969];if(_0x15db['ftNVTp']===undefined){var _0x58b1b1=function(_0x15dba){const _0x5b7633='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x508748='',_0x28e62a='';for(let _0x2c2326=0x0,_0x354f7b,_0x22f4d7,_0x5bb996=0x0;_0x22f4d7=_0x15dba['charAt'](_0x5bb996++);~_0x22f4d7&&(_0x354f7b=_0x2c2326%0x4?_0x354f7b*0x40+_0x22f4d7:_0x22f4d7,_0x2c2326++%0x4)?_0x508748+=String['fromCharCode'](0xff&_0x354f7b>>(-0x2*_0x2c2326&0x6)):0x0){_0x22f4d7=_0x5b7633['indexOf'](_0x22f4d7);}for(let _0x523cca=0x0,_0x151624=_0x508748['length'];_0x523cca<_0x151624;_0x523cca++){_0x28e62a+='%'+('00'+_0x508748['charCodeAt'](_0x523cca)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x28e62a);};_0x15db['fsZXmv']=_0x58b1b1,_0x1fd279=arguments,_0x15db['ftNVTp']=!![];}const _0x5114c9=_0x4308f8[0x0],_0x4435f1=_0x321969+_0x5114c9,_0x2ce25e=_0x1fd279[_0x4435f1];return!_0x2ce25e?(_0x229b38=_0x15db['fsZXmv'](_0x229b38),_0x1fd279[_0x4435f1]=_0x229b38):_0x229b38=_0x2ce25e,_0x229b38;},_0x15db(_0x1fd279,_0x59117c);}function Post_request(_0x420d38){const _0x5e9014=_0x33098f,_0x3a7376=_0x15db,_0x2b8d60=_0x57c175;return{'url':''+host+_0x420d38,'headers':{'Host':'ydt.kxlock.com:443','Connection':_0x2b8d60(0x14a),'Content-Length':0x0,'Accept':_0x2b8d60(0x100),'User-Agent':soy_kkj_UA,'Content-Type':_0x3a7376(0x14f),'Origin':_0x5e9014(0x158,'Aq9W'),'Referer':_0x3a7376(0xf0),'Accept-Encoding':'gzip,\x20deflate','Accept-Language':_0x3a7376(0xfd)}};}function _0x4308(){const _0x5bee8e=['indexOf','D2fPDa','hulcUG','C295x2TRAL90AwnRzxq','wSkVEWqVmCo/WRCVgSoyW6NdHSoN','h0ZcSmkn','WOy7yW','W6/cUazHWO3dIa','zbeC','D8kVE8k4gmo3WQNdSSoalW','W4NdLYS2WOO','963825cogcUL','ucxdQepdKSoAtCozihNcTeXzCq','WQlcKaiMWOG','z2v0vgLTzxPVBMvpzMzZzxq','WRRdUSo7W7tcLLpdTa','3122867KmkfSR','WPvMtW4AW6PqFq/dOKKdW41J','W4hcP8kpW77dUq','W7BdJqCgWQ/cUsPu','logErr','\x20获取文章】:\x20','CNtcPmkzCgO','6oOThXd','pt0944cq5ywXia','Aw5KzxHpzG','log','WRVcSeldPSoS','W5pcN8obWRXN','WRWfWRJcOEMzO+ITG+AwVEMgO++/MG','keep-alive','W47LV7ZLPQBJGzNNR5BdVa','getdata','AxVcVmkuA2ldHddcTmon','W7hdSmo2WP/cTCo6WQ9GySkI','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','env','W4dcV8o7','70SElwkj','C2vUze5VDgLMEq','F8kcsgZdOSkVW7qNl8kBDSofWPLa','WQdcKWmS','jNrNAwq9','bsNcPa','hSkPW7xdQrZdLH7cSCkTsCoDkmoGW5NdI0/cPrXWW63cU8oF','W5pcGmouWOP4W7NdICoDfvS','http://ydt.kxlock.com:443/code008/ydt2/','tSoTWRtcRbpdI3FcS8out8oHaq','bf/cSq','W5BcVSo0nmkdvSoHr8kMqZCUW7OL','jL90pq','split','Bg9N','WOT6uq','\x20个账号】===\x0a','\x20===\x0a','mZaWotuYD1L6DKv5','W4pOJ6lLJ4pMLzVNQiZJG4zhWRVNV7/NUiROR7pMSlJLPjpOTBO','W4vqWPhcOq','BhRcRq','WPddJNxdSgWYwSkYtSoIamktWRP9','yCkUDa','parse','Aw5KzxG','4383tGoDlL','rH3cJSkTi8kIWPzQ','code','name','ioEuQoAiT+EkTUAaGEoaKtOGcI0TlEEuQoAiT0Le77YA','---账号\x20','W6xcTazNWPxdJmk6','Ahr0CdOVl20UDwLNow81D3aUC2HVCc8','ioIoT+wpLUAwH+EROooaKtOG','cI0TlEw9K+wjJEENR+wiHU+8MG','uvrSb8o9bmoipw3dTWFdRSoL','W4NcUmo9btZdRW','W7dcSHfzWPldI8kPfZpcSq','WRvwvSoYWO4hAq','ls0T6lsM5y+3ia','zmkHvmoq','WQZcMmk4W7Pb','W5BcVSo0nmkdvSoHr8khAW','AmoGrLLQWOTzmG','mte1ndy4mhrlqNP4sG','EMGTq04SEMG7Ct0WlJKSzw4Tvvm7Ct0WlJGSzw47Ct0WlJC','get','C3bSAxq','application/json,\x20text/plain,\x20*/*','WP3MJi7KUkRKU4ZLIlRJG7jsqW','C295x2TRAL9vqq','W6xOJyhLJiRMLjJNQ5NJGQDDWPxOJjJLJllMIABLI5K','soy_kkj_ticket','zw52','W5pdIsm6WOy','BMfTzq','Cg9PBNrZ','z2v0zgf0yq','index','WOuyWQxcTvpcISk6nCk6C8ktWP4','msg','W4xcN8kCW4xdK8oS','vcVcVxtdHG','vIvr6lwD5y6Mgq','h8kZW6xdVf4','qd7cPxNdK8ooWQm','0.238','imkLAa','mfbt','WPddKwddHNm','vSosW7m','post','DgDPza','1059894FnnGTe','length','ioApKos6Pos7U+wkOEoaKtOG572r57UC6k+35Rgc5AsX6lsL','ioApKos6Pos7U+wkOEoaKtOG','lSkIWQddH8oIW5u4','zMXVB3i','\x20获取文章】:\x20网络请求失败','WQrelSoIxd3dL8oGlSo0','mZeYmJG2n0TTA2ztuG','\x20提交任务】:\x20提交成功','soy_kkj_UA','W7CBqW','BxnN','2932GUWvkG','getTime','data','C3vIBwL0p3rPy2TLDd0','zgZdU1BcNLRdTY3dIu4','A8kirvFdQmkWW78'];_0x4308=function(){return _0x5bee8e;};return _0x4308();}function _0x3219(_0x1fd279,_0x59117c){const _0x4308f8=_0x4308();return _0x3219=function(_0x321969,_0x18aa96){_0x321969=_0x321969-0xdf;let _0x229b38=_0x4308f8[_0x321969];return _0x229b38;},_0x3219(_0x1fd279,_0x59117c);};function Get_request(_0x5b9deb){return{'url':_0x5b9deb,'headers':soy_kkj_headers};};function random(){const _0x5bbf55=_0x57c175,_0x2067f8=_0x33098f;let _0x475a5f='';for(let _0x135f42=0x0;_0x135f42<0x2;_0x135f42++){_0x475a5f+=Math[_0x2067f8(0x139,'04H0')](Math[_0x2067f8(0x142,'B@EX')]()*0xa);}return _0x5bbf55(0x112)+_0x475a5f+'5'+_0x475a5f+_0x2067f8(0x113,'Ji%c')+_0x475a5f+'06'+_0x475a5f;}


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