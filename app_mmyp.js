/*

软件名称:满满有品

项目注册地址:http://yg.zzbzb.com/regNew/?invite_code=809887799

需要实名认证

满满有品！注册送100积分！每天签到送5积分！连续签到7天送20积分！连续签到30天送100积分！60天200积分以此内推！
1积分等于一块钱！每天按千分之‰1释放！也就是1000积分每天释放1块钱！购物，充话费，订机票，火车票，推广，都加积分，签到也加积分。积分越多每天钱越多！

必要变量:

变量名 soy_mmyp_data
变量值 xxx&xxx&xxx&xxx
注释:抓包请求头上Authorization&抓包请求头上user_id&绑定的支付宝&抓包请求头上user-agent
注意:
抓包请求头上Authorization不要MALL_U 和空格
抓包请求头上Authorization不要MALL_U 和空格
抓包请求头上Authorization不要MALL_U 和空格

绑定的支付宝不填则不做提现
抓包请求头上user-agent为可选


多个号用 # 或 换行 隔开

v2p重写功能是有在里面,但是我测试没有成功过,自行测试

REWRITE
匹配链接（正则表达式）:http://yg.zzbzb.com/api/ms-member/sso/info
匹配阶段:随意
重写方式:https://gitee.com/soy-tool/app-script/raw/master/app_mmyp.js

MITM
解析域名:yg.zzbzb.com

cron "25 10,13 * * *"

注:不要问为什么你的v2p不能重写,这个我也解决不了,基本上我都不写这个给你
如果能重新的就需要自行手动提现

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_mmyp.js
*/


const $ = new Env('满满有品');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x49ab20=_0x45c9,_0x4f6a2c=_0x12fd;(function(_0x136dcc,_0x58640b){const _0x3d9bed=_0x12fd,_0x589e2f=_0x281c,_0x235348=_0x45c9,_0x5e112d=_0x136dcc();while(!![]){try{const _0x45ef37=-parseInt(_0x235348('0x22b'))/0x1+parseInt(_0x589e2f(0x23e))/0x2+-parseInt(_0x3d9bed('0x1e8','aHrt'))/0x3+-parseInt(_0x235348(0x218))/0x4*(parseInt(_0x3d9bed(0x245,'$12v'))/0x5)+-parseInt(_0x3d9bed('0x1de','88c&'))/0x6*(parseInt(_0x589e2f('0x1df'))/0x7)+parseInt(_0x3d9bed(0x20e,'Mo]B'))/0x8*(-parseInt(_0x3d9bed(0x240,'0si^'))/0x9)+parseInt(_0x589e2f('0x22c'))/0xa*(parseInt(_0x235348('0x25d'))/0xb);if(_0x45ef37===_0x58640b)break;else _0x5e112d['push'](_0x5e112d['shift']());}catch(_0x551ba1){_0x5e112d['push'](_0x5e112d['shift']());}}}(_0x4e7c,0xe7bc0));let app_soy_mmyp_data=[],app_soy_mmyp_UA=[];!(async()=>{const _0x3c8c57=_0x12fd,_0x87221e=_0x281c,_0x402c1e=_0x45c9;typeof $request!==_0x402c1e('0x237')&&await get_appdata();if($[_0x402c1e('0x25b')]()){if(!process[_0x87221e('0x24f')][_0x3c8c57(0x260,'$12v')]){console[_0x402c1e(0x1e6)](_0x87221e(0x255));return;}if(process[_0x87221e(0x24f)][_0x402c1e(0x1ef)]&&process[_0x87221e('0x24f')][_0x3c8c57(0x205,'#g4k')]['indexOf']('\x0a')>-0x1)app_soy_mmyp_data=process[_0x402c1e('0x21a')][_0x402c1e(0x1ef)][_0x402c1e(0x1f3)]('\x0a');else process[_0x3c8c57(0x223,'lRar')][_0x402c1e('0x1ef')]&&process[_0x87221e(0x24f)][_0x3c8c57('0x22e','nD7E')][_0x402c1e(0x1ed)]('#')>-0x1?app_soy_mmyp_data=process[_0x402c1e('0x21a')][_0x402c1e('0x1ef')][_0x87221e('0x1e7')]('#'):app_soy_mmyp_data=process[_0x3c8c57('0x242','gCER')]['soy_mmyp_data'][_0x3c8c57(0x208,']%HE')]();;}else{if(!$[_0x402c1e(0x20d)](_0x87221e(0x24e))){console['log'](_0x3c8c57('0x1f7','IRrm'));return;}if($[_0x402c1e('0x20d')](_0x3c8c57('0x1f8','C^g]'))&&$[_0x3c8c57('0x235','!ZnG')](_0x402c1e(0x1ef))[_0x402c1e('0x1ed')]('#')>-0x1)app_soy_mmyp_data=$['getdata'](_0x402c1e(0x1ef))['split']('@');else $[_0x402c1e('0x20d')](_0x87221e('0x24e'))&&$[_0x87221e(0x1eb)](_0x87221e('0x24e'))[_0x402c1e(0x1ed)]('\x0a')>-0x1?app_soy_mmyp_data=$[_0x402c1e('0x20d')]('soy_mmyp_data')['split']('\x0a'):app_soy_mmyp_data=$[_0x3c8c57('0x233','%!IZ')](_0x87221e(0x24e))['split']();;}console['log']('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x3c8c57('0x22d','$6lF')),console[_0x402c1e('0x1e6')](_0x87221e('0x241')+app_soy_mmyp_data[_0x3c8c57(0x211,'EsXO')]+_0x3c8c57(0x247,'sukj')),subTitle='';for(i=0x0;i<app_soy_mmyp_data[_0x87221e('0x201')];i++){if(app_soy_mmyp_data[i][_0x3c8c57('0x226','C^g]')]('{')>-0x1){let _0x10f6b5=JSON['parse'](app_soy_mmyp_data[i]);soy_mmyp_Authorization=_0x10f6b5['Authorization'],soy_mmyp_Collection=soy_mmyp_data[0x2],soy_mmyp_UA=_0x10f6b5[_0x87221e('0x1f0')],soy_mmyp_user_id=_0x10f6b5[_0x402c1e('0x210')];}else soy_mmyp_data=app_soy_mmyp_data[i]['split']('&'),soy_mmyp_user_id=soy_mmyp_data[0x0],soy_mmyp_Authorization=soy_mmyp_data[0x1],soy_mmyp_Collection=soy_mmyp_data[0x2],soy_mmyp_UA=soy_mmyp_data[0x3];if(!soy_mmyp_user_id||!soy_mmyp_Authorization){console[_0x3c8c57(0x23d,'FfKl')](_0x402c1e(0x209));return;}!soy_mmyp_UA&&(soy_mmyp_UA=_0x87221e(0x25e)),$['index']=i+0x1,await implement();};notify&&(subTitle&&await notify['sendNotify']($[_0x402c1e(0x265)],subTitle));})()[_0x4f6a2c(0x1e0,'nD7E')](_0x2a8814=>$['logErr'](_0x2a8814))['finally'](()=>$[_0x49ab20('0x21c')]());async function implement(){const _0x47c618=_0x281c,_0x5bce84=_0x4f6a2c;host=_0x5bce84(0x1f2,'lRar'),console[_0x5bce84('0x219','Mo]B')](_0x5bce84(0x1f6,'lRar')+$[_0x5bce84(0x1f1,'C^g]')]+_0x47c618(0x203)),await soy_mmyp_pageSlist(),await soy_mmyp_isSignIn(),await soy_mmyp_wallet();}function _0x281c(_0x26ec9b,_0x2eccf9){const _0x4e7c66=_0x4e7c();return _0x281c=function(_0x45c9c3,_0x476a12){_0x45c9c3=_0x45c9c3-0x1db;let _0x1d8478=_0x4e7c66[_0x45c9c3];if(_0x281c['cvYLMu']===undefined){var _0x116730=function(_0x281cd9){const _0x5340fb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x10d7dd='',_0x1ba0d2='';for(let _0x4fd974=0x0,_0x81af2f,_0x3e986a,_0x12fdd7=0x0;_0x3e986a=_0x281cd9['charAt'](_0x12fdd7++);~_0x3e986a&&(_0x81af2f=_0x4fd974%0x4?_0x81af2f*0x40+_0x3e986a:_0x3e986a,_0x4fd974++%0x4)?_0x10d7dd+=String['fromCharCode'](0xff&_0x81af2f>>(-0x2*_0x4fd974&0x6)):0x0){_0x3e986a=_0x5340fb['indexOf'](_0x3e986a);}for(let _0x5d751f=0x0,_0x4b6cfe=_0x10d7dd['length'];_0x5d751f<_0x4b6cfe;_0x5d751f++){_0x1ba0d2+='%'+('00'+_0x10d7dd['charCodeAt'](_0x5d751f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1ba0d2);};_0x281c['oXcZJf']=_0x116730,_0x26ec9b=arguments,_0x281c['cvYLMu']=!![];}const _0x3ebb3b=_0x4e7c66[0x0],_0x179ce5=_0x45c9c3+_0x3ebb3b,_0x181288=_0x26ec9b[_0x179ce5];return!_0x181288?(_0x1d8478=_0x281c['oXcZJf'](_0x1d8478),_0x26ec9b[_0x179ce5]=_0x1d8478):_0x1d8478=_0x181288,_0x1d8478;},_0x281c(_0x26ec9b,_0x2eccf9);}function _0x12fd(_0x26ec9b,_0x2eccf9){const _0x4e7c66=_0x4e7c();return _0x12fd=function(_0x45c9c3,_0x476a12){_0x45c9c3=_0x45c9c3-0x1db;let _0x1d8478=_0x4e7c66[_0x45c9c3];if(_0x12fd['OXVZzA']===undefined){var _0x116730=function(_0x5340fb){const _0x10d7dd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1ba0d2='',_0x4fd974='';for(let _0x81af2f=0x0,_0x3e986a,_0x12fdd7,_0x5d751f=0x0;_0x12fdd7=_0x5340fb['charAt'](_0x5d751f++);~_0x12fdd7&&(_0x3e986a=_0x81af2f%0x4?_0x3e986a*0x40+_0x12fdd7:_0x12fdd7,_0x81af2f++%0x4)?_0x1ba0d2+=String['fromCharCode'](0xff&_0x3e986a>>(-0x2*_0x81af2f&0x6)):0x0){_0x12fdd7=_0x10d7dd['indexOf'](_0x12fdd7);}for(let _0x4b6cfe=0x0,_0x4e6c57=_0x1ba0d2['length'];_0x4b6cfe<_0x4e6c57;_0x4b6cfe++){_0x4fd974+='%'+('00'+_0x1ba0d2['charCodeAt'](_0x4b6cfe)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4fd974);};const _0x281cd9=function(_0x392bfc,_0x19a46a){let _0x44b0c1=[],_0x10f6b5=0x0,_0x2a8814,_0x9812df='';_0x392bfc=_0x116730(_0x392bfc);let _0x4471c6;for(_0x4471c6=0x0;_0x4471c6<0x100;_0x4471c6++){_0x44b0c1[_0x4471c6]=_0x4471c6;}for(_0x4471c6=0x0;_0x4471c6<0x100;_0x4471c6++){_0x10f6b5=(_0x10f6b5+_0x44b0c1[_0x4471c6]+_0x19a46a['charCodeAt'](_0x4471c6%_0x19a46a['length']))%0x100,_0x2a8814=_0x44b0c1[_0x4471c6],_0x44b0c1[_0x4471c6]=_0x44b0c1[_0x10f6b5],_0x44b0c1[_0x10f6b5]=_0x2a8814;}_0x4471c6=0x0,_0x10f6b5=0x0;for(let _0x515116=0x0;_0x515116<_0x392bfc['length'];_0x515116++){_0x4471c6=(_0x4471c6+0x1)%0x100,_0x10f6b5=(_0x10f6b5+_0x44b0c1[_0x4471c6])%0x100,_0x2a8814=_0x44b0c1[_0x4471c6],_0x44b0c1[_0x4471c6]=_0x44b0c1[_0x10f6b5],_0x44b0c1[_0x10f6b5]=_0x2a8814,_0x9812df+=String['fromCharCode'](_0x392bfc['charCodeAt'](_0x515116)^_0x44b0c1[(_0x44b0c1[_0x4471c6]+_0x44b0c1[_0x10f6b5])%0x100]);}return _0x9812df;};_0x12fd['cwBztE']=_0x281cd9,_0x26ec9b=arguments,_0x12fd['OXVZzA']=!![];}const _0x3ebb3b=_0x4e7c66[0x0],_0x179ce5=_0x45c9c3+_0x3ebb3b,_0x181288=_0x26ec9b[_0x179ce5];return!_0x181288?(_0x12fd['mMrTYk']===undefined&&(_0x12fd['mMrTYk']=!![]),_0x1d8478=_0x12fd['cwBztE'](_0x1d8478,_0x476a12),_0x26ec9b[_0x179ce5]=_0x1d8478):_0x1d8478=_0x181288,_0x1d8478;},_0x12fd(_0x26ec9b,_0x2eccf9);}function _0x45c9(_0x26ec9b,_0x2eccf9){const _0x4e7c66=_0x4e7c();return _0x45c9=function(_0x45c9c3,_0x476a12){_0x45c9c3=_0x45c9c3-0x1db;let _0x1d8478=_0x4e7c66[_0x45c9c3];return _0x1d8478;},_0x45c9(_0x26ec9b,_0x2eccf9);}function soy_mmyp_isSignIn(){let _0x9812df=Get_request('signIn/isSignIn?uid='+soy_mmyp_user_id);return new Promise((_0x4471c6,_0x515116)=>{const _0x5ca38e=_0x281c;$[_0x5ca38e(0x22a)](_0x9812df,async(_0x2d6836,_0x148c36,_0x48b298)=>{const _0x571d30=_0x5ca38e,_0x32bff0=_0x12fd,_0x335030=_0x45c9;try{if(_0x2d6836)console[_0x335030('0x1e6')]('\x0a【soy脚本提示---账号\x20'+$[_0x32bff0(0x20f,'zvpY')]+_0x571d30('0x225')),subTitle+=_0x335030('0x21b')+$['index']+_0x571d30('0x225');else{let _0xf4ac69=JSON[_0x335030(0x206)](_0x48b298);_0xf4ac69[_0x571d30(0x25f)]==0xc8?_0xf4ac69[_0x32bff0(0x20c,'G$i1')]=='SUCCESS'?console[_0x32bff0(0x264,'#g4k')]('\x0a【soy脚本提示---账号\x20'+$[_0x335030('0x258')]+_0x571d30(0x217)+_0xf4ac69[_0x571d30('0x1f5')][_0x571d30(0x228)]+_0x32bff0(0x253,'nD7E')+_0xf4ac69[_0x335030('0x224')]['integral']):console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x335030(0x258)]+_0x335030('0x248')+_0xf4ac69[_0x32bff0('0x236','VuJg')]):console[_0x335030(0x1e6)](_0x32bff0(0x23b,'Hi4R')+$[_0x32bff0('0x212','88c&')]+_0x571d30('0x249')+_0xf4ac69['msg']);}}catch(_0x57ac76){console[_0x335030(0x1e6)](_0x57ac76,_0x148c36);}finally{_0x4471c6();}});});}function soy_mmyp_pageSlist(){const _0x2fdaad=_0x4f6a2c;let _0x26b1e3=Get_request(_0x2fdaad(0x1fd,'*gCv')+soy_mmyp_user_id);return new Promise((_0x17939f,_0x26cc47)=>{const _0x2e8fdb=_0x281c;$[_0x2e8fdb(0x22a)](_0x26b1e3,async(_0x5d0da6,_0xac56f9,_0x23b21b)=>{const _0x23e817=_0x45c9,_0x4a88e9=_0x2e8fdb,_0xc4e9fb=_0x12fd;try{if(_0x5d0da6)console[_0xc4e9fb('0x234','hm06')](_0x4a88e9('0x243')+$[_0x23e817('0x258')]+'\x20红包列表】:\x20网络请求失败'),subTitle+=_0x23e817('0x21b')+$[_0x23e817(0x258)]+_0x23e817(0x227);else{let _0x386622=JSON[_0x4a88e9(0x24a)](_0x23b21b);if(_0x386622['code']==0xc8){if(_0x386622['msg']=='SUCCESS'){if(_0x386622['data'][_0x23e817(0x251)]==0x0)console[_0x23e817('0x1e6')](_0x23e817(0x21b)+$[_0x4a88e9('0x259')]+'\x20红包列表】:\x20没有释放到红包,请明天再试');else for(pageSlist of _0x386622[_0xc4e9fb(0x244,'nqHg')]){let _0x466a99=pageSlist['id'],_0x22be4c=pageSlist[_0x23e817(0x231)];if(_0x22be4c==0x0){await soy_mmyp_openpage(_0x466a99);let _0x2dc18b=Math[_0x23e817(0x200)](Math[_0x4a88e9(0x252)]()*(0x7530-0x6d60+0x3e8)+0x6d60);await $['wait'](_0x2dc18b);}}}else console[_0x4a88e9(0x20a)](_0xc4e9fb(0x220,'DQAg')+$[_0x4a88e9(0x259)]+_0x23e817('0x1e3')+_0x386622[_0x4a88e9(0x25a)]);}else console[_0x23e817('0x1e6')](_0xc4e9fb('0x257','bLpr')+$[_0xc4e9fb(0x24c,'*G8L')]+'\x20红包列表】:\x20'+_0x386622['msg']);}}catch(_0x1c8330){console['log'](_0x1c8330,_0xac56f9);}finally{_0x17939f();}});});}function soy_mmyp_openpage(_0x5bb0d9){let _0x2f4429=Get_request('logIntegralEaring/getLogIntegral?id='+_0x5bb0d9);return new Promise((_0x3b222e,_0x58ca95)=>{const _0x1da145=_0x281c;$[_0x1da145('0x22a')](_0x2f4429,async(_0x2475de,_0x4f2347,_0x59638f)=>{const _0x278f7b=_0x45c9,_0x47f416=_0x1da145,_0x59b26a=_0x12fd;try{if(_0x2475de)console[_0x59b26a('0x207','mJqb')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x59b26a('0x1e9','sukj')),subTitle+=_0x59b26a(0x22f,'%!IZ')+$[_0x59b26a('0x262','Hi4R')]+_0x47f416('0x1fb');else{let _0x350f85=JSON[_0x59b26a(0x229,'#N0K')](_0x59638f);_0x350f85[_0x278f7b(0x239)]==0xc8?console[_0x278f7b(0x1e6)]('\x0a【soy脚本提示---账号\x20'+$[_0x47f416(0x259)]+_0x47f416('0x1fa')+_0x350f85[_0x47f416('0x25a')]):console[_0x59b26a(0x1e5,'C^g]')](_0x47f416('0x243')+$[_0x59b26a('0x1dd','%!IZ')]+_0x278f7b('0x261')+_0x350f85[_0x278f7b('0x230')]);}}catch(_0x4a1b7f){console[_0x278f7b('0x1e6')](_0x4a1b7f,_0x4f2347);}finally{_0x3b222e();}});});}function soy_mmyp_wallet(){const _0x2e5fa1=_0x49ab20,_0x1ab7d6=_0x4f6a2c;let _0x28cdb6=Get_request(_0x1ab7d6(0x1ff,'aHrt')+soy_mmyp_user_id+_0x2e5fa1('0x263'));return new Promise((_0x407d05,_0x2f367c)=>{const _0x28417c=_0x2e5fa1;$[_0x28417c('0x1dc')](_0x28cdb6,async(_0x19d090,_0x39cbab,_0x393eaa)=>{const _0x31f3b7=_0x12fd,_0x3e9f09=_0x28417c,_0x129b0b=_0x281c;try{if(_0x19d090)console[_0x129b0b(0x20a)](_0x129b0b(0x243)+$[_0x129b0b(0x259)]+_0x129b0b('0x24d')),subTitle+=_0x3e9f09('0x21b')+$[_0x3e9f09('0x258')]+'\x20用户钱包】:\x20网络请求失败';else{let _0x58ad4c=JSON[_0x31f3b7(0x1fc,'5vLH')](_0x393eaa);_0x393eaa['indexOf'](''+soy_mmyp_user_id)>-0x1?_0x58ad4c[_0x31f3b7(0x250,'vOzs')]>=0xa?soy_mmyp_Collection?await soy_mmyp_withdraw(Math[_0x129b0b(0x23f)](_0x58ad4c[_0x3e9f09(0x222)])):console['log'](_0x31f3b7('0x214','Pb[U')+$['index']+'\x20用户钱包】:\x20未提供支付宝账号,无法提现'):console[_0x31f3b7('0x216','^wgp')](_0x129b0b(0x1e2)+_0x58ad4c['balance']):console['log'](_0x31f3b7(0x220,'DQAg')+$[_0x129b0b('0x259')]+_0x3e9f09(0x256));}}catch(_0x1f58f4){console['log'](_0x1f58f4,_0x39cbab);}finally{_0x407d05();}});});}function soy_mmyp_withdraw(_0x4daf02){const _0x3fdd13=_0x281c,_0x2acbc6=_0x4f6a2c,_0x2c83bd=_0x49ab20;let _0x676501={'url':_0x2c83bd(0x1f4)+_0x4daf02+_0x2c83bd(0x232)+soy_mmyp_Collection+_0x2acbc6('0x21f','#N0K')+soy_mmyp_user_id+_0x3fdd13('0x215'),'headers':{'Authorization':_0x2c83bd(0x1f9)+soy_mmyp_Authorization,'user_id':soy_mmyp_user_id,'token_type':_0x2acbc6(0x204,'Bz2n'),'Content-Type':'application/json','user-agent':soy_mmyp_UA,'Host':'yg.zzbzb.com'}};return new Promise((_0x3f70c6,_0x4d636f)=>{$['get'](_0x676501,async(_0x3801ee,_0x3b3972,_0x4426ec)=>{const _0x3e787f=_0x12fd,_0x21efd9=_0x45c9,_0x45342a=_0x281c;try{if(_0x3801ee)console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x45342a('0x259')]+'\x20提现】:\x20网络请求失败'),subTitle+=_0x21efd9('0x21b')+$['index']+_0x3e787f('0x23c','ERc4');else{let _0x101114=JSON[_0x45342a('0x24a')](_0x4426ec);_0x101114[_0x3e787f('0x25c','0si^')]==0xc8?console[_0x3e787f(0x219,'Mo]B')](_0x45342a(0x243)+$[_0x45342a(0x259)]+_0x3e787f('0x221','*gCv')+_0x101114[_0x3e787f('0x266','sukj')]):console['log'](_0x3e787f('0x1ec','$12v')+$['index']+_0x45342a(0x254)+_0x101114[_0x21efd9('0x230')]);}}catch(_0x245b48){console[_0x45342a('0x20a')](_0x245b48,_0x3b3972);}finally{_0x3f70c6();}});});}function _0x4e7c(){const _0xa64e7c=['455KccOcV','z2v0zgf0yq','WPZJGyLjWPfw6iEc5P275O+D56sHsZZcVEI2GUwoTN8','indexOf','gMtdPfFdL8kTAa','soy_mmyp_data','DxnLCI1Hz2vUDa','W40vW67cPuG','FJ3dOmoaWRxcMbvNj8ofW71Mdg3dSCo0WRpdP2ZcMXVcOmoEFxJcT8orD8k3W5VdSYxcO8o1','split','http://yg.zzbzb.com/api/ms-slide/slide/withdraw?rmb=','zgf0yq','how9IEwLN+ocOoEUO8kx','W7NJGRNcIrVcREIfLEACLUAnRUENIooaLE+9RUACLowHUowfQ+EyJUw6LUwnSUMeJqNdPcLtW43dLCkxW6ZcVCoiECkJt8kv','W5CuW7pcN10TaCoffMNdPSkKW4a','MALL_U\x20','ioMIHUwpLUE6OUwmHEoaKtOG','ioMIHUwpLUE6OUwmHEoaKtOG572r57UC6k+35Rgc5AsX6lsL','WO9zESk9DG','y8kNW48OWRxcLmoLWP0yomo1Eartu8oMDMCRn8kBcCohWRfnW5pdLSogq8oRW7BcVaz0W6lcSgrQW70TWQZcOcntW6RcNbTWW5hdQvFdUmoZsZldHSolWRvIW6jXW7r/W6/cJmo/qG','W798WRaDjCoPWPq','W7ddHaGTWRJcNCotWOCSW7fhnmkRxGmSW797bq','floor','BgvUz3rO','setdata','ios4QUI0PUwpT+s7U+wkOEoaKq','v8kpeCou','zv7dHbJdKmkqxtPXCCknWQBdPq','parse','ydNcKq','W6XZySoMqq','\x0a【soy脚本提示】：填写变量格式不规范','Bg9N','WPpdJCoCwNq+W4CAlG8KWRVcRau','W6KZWQu','getdata','ACoxWOnrimkIkq','W6bJtmkXrW','user_id','AraaW53dHSko','WPNcICkHFey','68070yxGTZF','y+oaJJRcJCk76iAw5P235O2x56soWOiXdUI2T+wmQmoj','jMjHBMjLBJ0Xmda','pYBdVq','ioETVUwiSoEkTUAaGEoaKtOGcI0TlEETVUwiSowKQEAvSo+8MG','554412sFJeCG','pCoHWOu','env','\x0a【soy脚本提示---账号\x20','done','vvnfuG','jmo8WO4','C8ovxmkFW5XLW6dcV8k3kSk3lW','EooaKCo2xmol6iEf5PY35O6s56sAmbfh6lA85yY+Cq','l+AmMoEmMoobSmoHW4a','balance','CYFdOG','data','ioETVUwiSoEkTUAaGEoaKtOG572r57UC6k+35Rgc5AsX6lsL','W40vW67cPuGphG','\x20红包列表】:\x20网络请求失败','zgf5','jCoav8kCW5W','z2v0','1717718iYJjSg','ntbSDMPuy1G','qmk2WRZcRZy','W6v9WQ0NmmolWOTCW4y0WQ0Zka','W7VJG47cPre96iAO5P6E5O+U56wiW55wW6ROTj7LJQ0g','msg','type','&name=','WPBcU8kIgIxdHSot','ECkDWOG','lCkvawygsbq','WOVcGmkC','undefined','DxnLCL9Pza','code','36147YbmNwz','WPxJGk5NiSkn6ise5PYP5O6c56Eab8kXWOxOT73LJAtdJG','W63MJzBNJ6BJG6tcTYtNVytNUzhORPdMS5RLPkJOT7S','WRnlW48','mZeYotyXneTerfzxBG','CM91BMq','WPLJW7SBW7NdKXhcIdXGW53dMZBdNG','pt0944cq5ywXia','W5hcQSoG','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','ttlcLmkj','WQm3tCkuzmktia','WORdJSoudSkUluddNmoCzXTt','W7RKUANOTRRLJQFJG7/cICoRp8ks','\x20签到状态】:\x20','ioETVUwiSoEkTUAaGEoaKtOG','CgfYC2u','ofLHDMrsra','W4zjW63dM1m','ioEuQoAiT+MsSEwmHEoaKtOG572r57UC6k+35Rgc5AsX6lsL','C295x21TExbFzgf0yq','zw52','WOldL8k1cmkNgCkK','length','CMfUzg9T','WPW/W7Lv5BYo5yUR56sD5yIQ776d','ioApKoEoSooaKtOG','cUoaKhnVEEIeMUACRoApKoEKUUoaKE+8MUACQUwHQ+wgMEEBUow6LowpMoMhJYbZB3LFBw15Cf9KyxrH','\x20用户钱包】:\x20获取数据失败','WQJJG6JcMGy56isu5P+z5O+956wFBwxdMoI3MUwoNxy','index','Aw5KzxG','BxnN','isNode','W4S5WQPn','8175585shxLlI','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKidGUmtSGuefslufmmdaGqNvPBgqVsfvbv0vjuefslufmmda7ihD2ksbbChbSzvDLyKTPDc81mZCUmZyGkeTive1mlcbSAwTLieDLy2TVksbwzxjZAw9UlZqUmcbdAhjVBwuVntCUmc4YotG3lJeZmIbnuvfcCM93C2vYlZyUmIbuqLmVmdq0mZa0ig5HBwuGu2fMyxjPlZuZnY4ZnIbnAwnYB01LC3nLBMDLCI82lJCUmY4XmZyWkdb4mJyWnZaZmZmP','y29Kzq','W6u2q8kHqSk1lN1eaNddPmof','\x20领取红包】:\x20','W7zqCcJcJa','&type=1','EL7dMG','name','WRCWW7S','\x0a该用户已存在','get','WPJcSmkYgZW','W4BdN8o1lG7cHL1hnmkZWPq','ndu1s2nJt2nw','W7vZWQaBnq','yxbWBgLJyxrPB24VANnVBG','ls0T5B2t5yMn5l2z6AkD77YA','\x20红包列表】:\x20','3129614KDDVWn','W4GuW60','log','C3bSAxq','WRdcGvy2W6JcOCofWQCBW7fC','W7RPO4xLJyRNU7lLJ6VJGQxdRclNV4NNUOFORPtMS7NLPAFOT60'];_0x4e7c=function(){return _0xa64e7c;};return _0x4e7c();}function Get_request(_0x34f1ac){const _0x34bfa2=_0x4f6a2c,_0xc88838=_0x281c;return{'url':''+host+_0x34f1ac,'headers':{'Authorization':'MALL_U\x20'+soy_mmyp_Authorization,'user_id':soy_mmyp_user_id,'token_type':_0xc88838('0x21d'),'Content-Type':_0xc88838('0x1e1'),'user-agent':soy_mmyp_UA,'Host':_0x34bfa2('0x246','IRrm')}};};function get_appdata(){const _0x438069=_0x49ab20,_0x58fd43=_0x281c,_0x1d0c92=_0x4f6a2c;$request[_0x1d0c92(0x21e,'Mo]B')]['indexOf']('sso/info')>-0x1&&(soy_mmyp_data=JSON['stringify']($request['headers']),soy_mmyp_data&&($[_0x58fd43('0x1eb')]('soy_mmyp_data')?$['getdata'](_0x438069('0x1ef'))[_0x1d0c92(0x1fe,'nD7E')](''+$request[_0x1d0c92(0x1ee,'DQAg')][_0x58fd43(0x238)])>-0x1?console['log'](_0x438069(0x1db)):(soy_mmyp_data=$[_0x438069('0x20d')](_0x438069('0x1ef'))+'#'+soy_mmyp_data,$['setdata'](soy_mmyp_data,_0x438069('0x1ef'))):$[_0x438069(0x202)](soy_mmyp_data,'soy_mmyp_data')));}


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