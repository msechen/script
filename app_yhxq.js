/*

项目名称:源火星球

每天收益不知道
100火源=1元

项目注册地址:http://reg.yuanhuoxingqiu.com/#/?code=W6ESZO

记得走下邀请码哦,谢谢大佬们

必要变量:

soy_yhxq_Authorization
#抓包请求头里面的Authorization,注意不要 Bearer 和空格
#抓包请求头里面的Authorization,注意不要 Bearer 和空格
#抓包请求头里面的Authorization,注意不要 Bearer 和空格

选填变量
soy_yhxq_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 # 或 换行 隔开

支持v2p手动添加变量,不支持v2p重写

cron 13 0-23/2 * * *

*/


const $ = new Env('源火星球');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x5320a4=_0x5b3e,_0x38b5ff=_0x5692;function _0x5692(_0x4c7526,_0x29a989){const _0x57b488=_0x57b4();return _0x5692=function(_0x3c5ec4,_0x460622){_0x3c5ec4=_0x3c5ec4-0x183;let _0x5f0eb9=_0x57b488[_0x3c5ec4];if(_0x5692['NzcRGv']===undefined){var _0x395663=function(_0x5692ef){const _0x2b095c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xaf3ac6='',_0x5e5675='';for(let _0x2ef4f9=0x0,_0x4fda24,_0x5bc711,_0x5b3e7f=0x0;_0x5bc711=_0x5692ef['charAt'](_0x5b3e7f++);~_0x5bc711&&(_0x4fda24=_0x2ef4f9%0x4?_0x4fda24*0x40+_0x5bc711:_0x5bc711,_0x2ef4f9++%0x4)?_0xaf3ac6+=String['fromCharCode'](0xff&_0x4fda24>>(-0x2*_0x2ef4f9&0x6)):0x0){_0x5bc711=_0x2b095c['indexOf'](_0x5bc711);}for(let _0x8126a8=0x0,_0x3950d4=_0xaf3ac6['length'];_0x8126a8<_0x3950d4;_0x8126a8++){_0x5e5675+='%'+('00'+_0xaf3ac6['charCodeAt'](_0x8126a8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5e5675);};_0x5692['tyQvxE']=_0x395663,_0x4c7526=arguments,_0x5692['NzcRGv']=!![];}const _0x51bd22=_0x57b488[0x0],_0x3e756f=_0x3c5ec4+_0x51bd22,_0x5ecaae=_0x4c7526[_0x3e756f];return!_0x5ecaae?(_0x5f0eb9=_0x5692['tyQvxE'](_0x5f0eb9),_0x4c7526[_0x3e756f]=_0x5f0eb9):_0x5f0eb9=_0x5ecaae,_0x5f0eb9;},_0x5692(_0x4c7526,_0x29a989);}(function(_0xba6eef,_0x226a84){const _0x38dc5e=_0x5b3e,_0x583d42=_0x5692,_0x2bb0ef=_0x3c5e,_0x2489c0=_0xba6eef();while(!![]){try{const _0x3a4e14=parseInt(_0x2bb0ef(0x1c0))/0x1+parseInt(_0x583d42('0x1ae'))/0x2+parseInt(_0x583d42('0x1eb'))/0x3+-parseInt(_0x38dc5e('0x1ff',')oB$'))/0x4*(parseInt(_0x2bb0ef(0x244))/0x5)+-parseInt(_0x38dc5e('0x24b','L7yt'))/0x6*(parseInt(_0x2bb0ef('0x240'))/0x7)+-parseInt(_0x38dc5e(0x1b3,'ICj1'))/0x8+-parseInt(_0x38dc5e('0x18e','wK&G'))/0x9;if(_0x3a4e14===_0x226a84)break;else _0x2489c0['push'](_0x2489c0['shift']());}catch(_0x5c9c0e){_0x2489c0['push'](_0x2489c0['shift']());}}}(_0x57b4,0xf2638));function _0x3c5e(_0x4c7526,_0x29a989){const _0x57b488=_0x57b4();return _0x3c5e=function(_0x3c5ec4,_0x460622){_0x3c5ec4=_0x3c5ec4-0x183;let _0x5f0eb9=_0x57b488[_0x3c5ec4];return _0x5f0eb9;},_0x3c5e(_0x4c7526,_0x29a989);}function _0x5b3e(_0x4c7526,_0x29a989){const _0x57b488=_0x57b4();return _0x5b3e=function(_0x3c5ec4,_0x460622){_0x3c5ec4=_0x3c5ec4-0x183;let _0x5f0eb9=_0x57b488[_0x3c5ec4];if(_0x5b3e['HBOChv']===undefined){var _0x395663=function(_0x2b095c){const _0xaf3ac6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5e5675='',_0x2ef4f9='';for(let _0x4fda24=0x0,_0x5bc711,_0x5b3e7f,_0x8126a8=0x0;_0x5b3e7f=_0x2b095c['charAt'](_0x8126a8++);~_0x5b3e7f&&(_0x5bc711=_0x4fda24%0x4?_0x5bc711*0x40+_0x5b3e7f:_0x5b3e7f,_0x4fda24++%0x4)?_0x5e5675+=String['fromCharCode'](0xff&_0x5bc711>>(-0x2*_0x4fda24&0x6)):0x0){_0x5b3e7f=_0xaf3ac6['indexOf'](_0x5b3e7f);}for(let _0x3950d4=0x0,_0x20404d=_0x5e5675['length'];_0x3950d4<_0x20404d;_0x3950d4++){_0x2ef4f9+='%'+('00'+_0x5e5675['charCodeAt'](_0x3950d4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2ef4f9);};const _0x5692ef=function(_0x554978,_0xba8fc){let _0x2a1a9b=[],_0x385491=0x0,_0x287bc6,_0x5e9e51='';_0x554978=_0x395663(_0x554978);let _0x928341;for(_0x928341=0x0;_0x928341<0x100;_0x928341++){_0x2a1a9b[_0x928341]=_0x928341;}for(_0x928341=0x0;_0x928341<0x100;_0x928341++){_0x385491=(_0x385491+_0x2a1a9b[_0x928341]+_0xba8fc['charCodeAt'](_0x928341%_0xba8fc['length']))%0x100,_0x287bc6=_0x2a1a9b[_0x928341],_0x2a1a9b[_0x928341]=_0x2a1a9b[_0x385491],_0x2a1a9b[_0x385491]=_0x287bc6;}_0x928341=0x0,_0x385491=0x0;for(let _0x19add6=0x0;_0x19add6<_0x554978['length'];_0x19add6++){_0x928341=(_0x928341+0x1)%0x100,_0x385491=(_0x385491+_0x2a1a9b[_0x928341])%0x100,_0x287bc6=_0x2a1a9b[_0x928341],_0x2a1a9b[_0x928341]=_0x2a1a9b[_0x385491],_0x2a1a9b[_0x385491]=_0x287bc6,_0x5e9e51+=String['fromCharCode'](_0x554978['charCodeAt'](_0x19add6)^_0x2a1a9b[(_0x2a1a9b[_0x928341]+_0x2a1a9b[_0x385491])%0x100]);}return _0x5e9e51;};_0x5b3e['NPYLQg']=_0x5692ef,_0x4c7526=arguments,_0x5b3e['HBOChv']=!![];}const _0x51bd22=_0x57b488[0x0],_0x3e756f=_0x3c5ec4+_0x51bd22,_0x5ecaae=_0x4c7526[_0x3e756f];return!_0x5ecaae?(_0x5b3e['UDLKJU']===undefined&&(_0x5b3e['UDLKJU']=!![]),_0x5f0eb9=_0x5b3e['NPYLQg'](_0x5f0eb9,_0x460622),_0x4c7526[_0x3e756f]=_0x5f0eb9):_0x5f0eb9=_0x5ecaae,_0x5f0eb9;},_0x5b3e(_0x4c7526,_0x29a989);}let app_soy_yhxq_Authorization=[],app_soy_yhxq_UA=[],subTitle='',withdrawal=![];!(async()=>{const _0x2ee941=_0x3c5e,_0xd6a443=_0x5692,_0xfb9acf=_0x5b3e;if($[_0xfb9acf('0x24e','v1*%')]()){if(!process[_0xd6a443(0x21c)]['soy_yhxq_Authorization']){console[_0xfb9acf('0x1b8','Xz79')]('\x0a【'+$[_0xfb9acf(0x1f9,'o@5k')]+_0x2ee941('0x233'));return;}if(process[_0xd6a443(0x21c)][_0xd6a443(0x1fa)]&&process[_0x2ee941(0x23f)][_0xd6a443('0x1fa')][_0xfb9acf(0x18b,'#JiV')]('@')>-0x1)soy_yhxq_Authorization=process[_0xfb9acf('0x1e2',')oB$')][_0x2ee941(0x1df)][_0xd6a443('0x247')]('@');else{if(process[_0xfb9acf(0x19f,'4BiS')]['soy_yhxq_Authorization']&&process['env'][_0xfb9acf(0x21a,'eBVN')][_0xfb9acf('0x1f3','Qbrd')]('\x0a')>-0x1)soy_yhxq_Authorization=process['env'][_0xfb9acf(0x228,'fc3V')]['split']('\x0a');else process['env']['soy_yhxq_Authorization']&&process['env'][_0xfb9acf(0x1f1,'[UGK')][_0xd6a443('0x1fe')]('#')>-0x1?soy_yhxq_Authorization=process[_0x2ee941(0x23f)]['soy_yhxq_Authorization'][_0x2ee941(0x1dd)]('#'):soy_yhxq_Authorization=process['env'][_0x2ee941('0x1df')]['split']();};if(!process[_0xfb9acf(0x23e,'#JiV')][_0x2ee941('0x1e6')]){}else{if(process['env']['soy_yhxq_UA']&&process[_0xfb9acf(0x1b9,'rk38')][_0x2ee941('0x1e6')][_0xfb9acf('0x201','R7xp')]('@')>-0x1)soy_yhxq_UA=process[_0xd6a443('0x21c')][_0xfb9acf(0x1fc,'vDhT')][_0xd6a443('0x247')]('@');else{if(process['env'][_0xd6a443('0x222')]&&process['env'][_0x2ee941(0x1e6)][_0xd6a443(0x1fe)]('\x0a')>-0x1)soy_yhxq_UA=process[_0x2ee941('0x23f')][_0xd6a443('0x222')]['split']('\x0a');else process[_0x2ee941('0x23f')]['soy_yhxq_UA']&&process[_0xfb9acf(0x1d0,'Xz79')][_0xfb9acf('0x203','#JiV')]['indexOf']('#')>-0x1?soy_yhxq_UA=process[_0xfb9acf(0x21d,'eFbt')][_0xd6a443(0x222)][_0x2ee941('0x1dd')]('#'):soy_yhxq_UA=process[_0xd6a443(0x21c)]['soy_yhxq_UA'][_0x2ee941('0x1dd')]();};Object[_0xd6a443('0x1d5')](soy_yhxq_UA)['forEach'](_0x385491=>{const _0x5a9f4c=_0xd6a443;soy_yhxq_UA[_0x385491]&&app_soy_yhxq_UA[_0x5a9f4c('0x1b7')](soy_yhxq_UA[_0x385491]);;});}Object[_0xd6a443('0x1d5')](soy_yhxq_Authorization)['forEach'](_0x287bc6=>{const _0x310078=_0xfb9acf;soy_yhxq_Authorization[_0x287bc6]&&app_soy_yhxq_Authorization[_0x310078('0x1ec','Z[60')](soy_yhxq_Authorization[_0x287bc6]);;});}else{if(!$['getdata'](_0x2ee941(0x1df))){console[_0xfb9acf(0x1fd,'MmNp')]('\x0a【'+$['name']+_0xfb9acf(0x20c,'L7yt'));return;}if($['getdata']('soy_yhxq_Authorization')&&$['getdata'](_0x2ee941(0x1df))[_0xd6a443(0x1fe)]('@')>-0x1)app_soy_yhxq_Authorization=$[_0xd6a443(0x1a7)](_0x2ee941(0x1df))[_0xfb9acf(0x22f,'3cr4')]('@');else{if($['getdata'](_0xfb9acf('0x218','k!We'))&&$[_0x2ee941(0x18a)](_0xfb9acf(0x1ce,'s)4!'))['indexOf']('\x0a')>-0x1)app_soy_yhxq_Authorization=$[_0xfb9acf('0x219','abBu')](_0xfb9acf(0x1b6,'JRw^'))['split']('\x0a');else $[_0x2ee941(0x18a)](_0xd6a443(0x1fa))&&$[_0xd6a443('0x1a7')](_0xfb9acf(0x202,'58G['))[_0x2ee941('0x1ac')]('#')>-0x1?app_soy_yhxq_Authorization=$[_0xfb9acf('0x20b','#JiV')]('soy_yhxq_Authorization')[_0xd6a443('0x247')]('#'):app_soy_yhxq_Authorization=$['getdata'](_0xd6a443(0x1fa))['split']();};if(!process[_0xfb9acf('0x204','TZhv')]['soy_yhxq_UA']){}else{if($[_0x2ee941(0x18a)](_0xfb9acf('0x191','rk38'))&&$[_0xfb9acf(0x20b,'#JiV')]('soy_yhxq_UA')[_0xd6a443('0x1fe')]('@')>-0x1)app_soy_yhxq_UA=$[_0x2ee941(0x18a)]('soy_yhxq_UA')[_0x2ee941('0x1dd')]('@');else{if($['getdata'](_0x2ee941('0x1e6'))&&$[_0xfb9acf(0x251,'v1*%')]('soy_yhxq_UA')[_0xd6a443('0x1fe')]('\x0a')>-0x1)app_soy_yhxq_UA=$[_0xd6a443(0x1a7)](_0xd6a443(0x222))['split']('\x0a');else $[_0x2ee941(0x18a)]('soy_yhxq_UA')&&$[_0xfb9acf(0x1ba,'y52V')](_0x2ee941('0x1e6'))[_0xd6a443(0x1fe)]('#')>-0x1?app_soy_yhxq_UA=$[_0xd6a443(0x1a7)](_0xfb9acf('0x19d','abBu'))['split']('#'):app_soy_yhxq_UA=$[_0xfb9acf('0x1a2','gF37')](_0x2ee941(0x1e6))[_0x2ee941(0x1dd)]();};Object['keys'](soy_yhxq_UA)[_0xfb9acf(0x24f,'eBVN')](_0x5e9e51=>{const _0x40c640=_0xd6a443;soy_yhxq_UA[_0x5e9e51]&&app_soy_yhxq_UA[_0x40c640('0x1b7')](soy_yhxq_UA[_0x5e9e51]);;});}}console['log']('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()[_0xfb9acf(0x22c,'&S19')]()+new Date()[_0xfb9acf('0x1a0','8p4O')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xfb9acf(0x1b0,'k!We')]()+_0x2ee941('0x1a1')),console[_0xfb9acf(0x19e,'8p4O')](_0x2ee941(0x1ef)+app_soy_yhxq_Authorization[_0x2ee941('0x1fb')]+'\x20个账号】===\x0a');for(i=0x0;i<app_soy_yhxq_Authorization['length'];i++){soy_yhxq_Authorization=app_soy_yhxq_Authorization[i],soy_yhxq_UA=app_soy_yhxq_UA[i],$[_0xd6a443('0x20a')]=i+0x1,console[_0x2ee941('0x212')]('\x0a开始【第\x20'+$['index']+_0x2ee941('0x200')),!soy_yhxq_UA&&(console[_0x2ee941('0x212')]('\x0a【'+$['name']+_0x2ee941('0x188')),soy_yhxq_UA=_0x2ee941(0x22e)),await yhxq_account(0x1),await yhxq_sign_state(),await yhxq_petAll(),await yhxq_steal(),await yhxq_feed_state(),await yhxq_expedition(),await yhxq_adv(),await yhxq_account(0x0);};})()[_0x38b5ff('0x1f4')](_0x928341=>$[_0x38b5ff('0x209')](_0x928341))[_0x38b5ff(0x1f0)](()=>$[_0x5320a4(0x232,'Xym]')]());function yhxq_sign_state(){return new Promise(_0x19add6=>{const _0x27fdc4=_0x3c5e,_0x1e2b8f=_0x5b3e;let _0x48427e=get_request(_0x1e2b8f('0x187','4BiS'));$[_0x27fdc4('0x19b')](_0x48427e,async(_0x534b18,_0x28a580,_0x55f72e)=>{const _0x4bc6a8=_0x5692,_0x409840=_0x1e2b8f,_0x24f389=_0x27fdc4;try{if(_0x534b18)console['log']('\x0a【'+$[_0x24f389('0x1c6')]+_0x24f389(0x220)),console[_0x409840('0x1e7','16R7')](JSON[_0x409840(0x1e3,'y52V')](_0x534b18));else{let _0x1efd60=JSON[_0x24f389(0x195)](_0x55f72e);_0x1efd60[_0x4bc6a8(0x224)]==0xc8?_0x1efd60[_0x409840(0x1c3,'2S%8')][_0x4bc6a8('0x1b2')]==0x1&&await yhxq_sign():console[_0x4bc6a8(0x205)]('\x0a【'+$['name']+_0x4bc6a8('0x207')+_0x1efd60[_0x24f389(0x1d3)]);}}catch(_0x2f91aa){$[_0x24f389(0x23b)](_0x2f91aa,_0x28a580);}finally{_0x19add6();}});});}function yhxq_sign(){return new Promise(_0x5c71b8=>{const _0x54e70c=_0x5692;let _0x317172=get_request(_0x54e70c(0x1bb));$[_0x54e70c('0x21e')](_0x317172,async(_0x294709,_0x38fadf,_0x1a9d4c)=>{const _0x44942b=_0x3c5e,_0x498047=_0x5b3e,_0x3a3354=_0x54e70c;try{if(_0x294709)console[_0x3a3354(0x205)]('\x0a【'+$['name']+_0x498047('0x23d','ICj1')),console[_0x498047('0x1b4','6llw')](JSON['stringify'](_0x294709));else{let _0x3999d1=JSON[_0x44942b(0x195)](_0x1a9d4c);_0x3999d1['code']==0xc8?console['log']('\x0a【'+$[_0x44942b(0x1c6)]+'---签到】:\x20'+_0x3999d1[_0x44942b(0x1d3)]):console['log']('\x0a【'+$[_0x498047(0x1c7,'zzEt')]+_0x44942b(0x215)+_0x3999d1[_0x498047('0x18f','JRw^')]);}}catch(_0x1ae4ba){$[_0x498047(0x189,'vDhT')](_0x1ae4ba,_0x38fadf);}finally{_0x5c71b8();}});});}function yhxq_petAll(){return new Promise(_0x43a3f7=>{const _0x4c29da=_0x5692,_0x19a3c7=_0x5b3e;let _0x4b542a=get_request(_0x19a3c7('0x245',')oB$'),_0x4c29da(0x241));$[_0x4c29da(0x226)](_0x4b542a,async(_0x9ba835,_0x2d4d46,_0x3c9a8b)=>{const _0x18d3f8=_0x4c29da,_0x1baa59=_0x3c5e,_0xa11c48=_0x19a3c7;try{if(_0x9ba835)console[_0xa11c48(0x19e,'8p4O')]('\x0a【'+$['name']+_0x1baa59('0x24a')),console[_0x18d3f8('0x205')](JSON[_0x18d3f8(0x1f8)](_0x9ba835));else{let _0x18df29=JSON['parse'](_0x3c9a8b);if(_0x18df29[_0x18d3f8(0x224)]==0xc8){if(_0x18df29[_0xa11c48('0x192','fc3V')][_0x18d3f8('0x24d')]==0x0){}else console[_0x18d3f8(0x205)]('\x0a【'+$[_0xa11c48(0x184,'R7xp')]+_0x1baa59(0x183)+_0x18df29[_0x1baa59('0x1f5')][_0x1baa59('0x227')]+_0xa11c48('0x249','58G[')+_0x18df29[_0xa11c48(0x248,'vDhT')]['petGoldSumGet']);}else console[_0x1baa59('0x212')]('\x0a【'+$[_0xa11c48(0x1c5,'rk38')]+'---领取】:\x20'+_0x18df29[_0x18d3f8(0x1e1)]);}}catch(_0x17f53d){$[_0x1baa59(0x23b)](_0x17f53d,_0x2d4d46);}finally{_0x43a3f7();}});});}function yhxq_adv(){return new Promise(_0x5baed9=>{const _0x3fd097=_0x5692,_0x2fca0d=_0x5b3e;let _0x4c4492=get_request('http://api.yuanhuoxingqiu.com/user/replenish/energy/adv',_0x2fca0d(0x1ee,'B^gI'));$[_0x3fd097(0x226)](_0x4c4492,async(_0x49955b,_0x374640,_0x365326)=>{const _0x1bc740=_0x3c5e,_0xc112a=_0x2fca0d,_0x4e86ae=_0x3fd097;try{if(_0x49955b)console[_0x4e86ae(0x205)]('\x0a【'+$['name']+_0xc112a(0x1d8,'o@5k')),console['log'](JSON[_0x1bc740('0x1bd')](_0x49955b));else{let _0x1cdea2=JSON[_0x4e86ae(0x1e9)](_0x365326);_0x1cdea2[_0x4e86ae(0x224)]==0xc8?console[_0x4e86ae(0x205)]('\x0a【'+$['name']+_0x1bc740('0x1dc')+_0x1cdea2[_0x1bc740('0x1d3')]):console[_0xc112a(0x1e4,')oB$')]('\x0a【'+$['name']+_0xc112a(0x1c8,'wK&G')+_0x1cdea2['msg']);}}catch(_0x1e3a34){$['logErr'](_0x1e3a34,_0x374640);}finally{_0x5baed9();}});});}function yhxq_steal(){return new Promise(_0x11b372=>{const _0x43b889=_0x3c5e,_0x42b4d7=_0x5692;let _0x2bd74b=get_request(_0x42b4d7('0x221'));$[_0x43b889(0x19b)](_0x2bd74b,async(_0x160e7c,_0x3fc5bc,_0x28204a)=>{const _0x4c40df=_0x42b4d7,_0x3a7da3=_0x5b3e,_0x2daa3c=_0x43b889;try{if(_0x160e7c)console[_0x2daa3c('0x212')]('\x0a【'+$[_0x2daa3c(0x1c6)]+'---偷取提示】:\x20API查询请求失败'),console['log'](JSON['stringify'](_0x160e7c));else{let _0x4e5b28=JSON[_0x3a7da3('0x208','#Jdv')](_0x28204a);_0x4e5b28['code']==0xc8?(console[_0x4c40df('0x205')]('\x0a【'+$[_0x3a7da3(0x1c5,'rk38')]+_0x3a7da3('0x1bf','!Xkk')+_0x4e5b28[_0x3a7da3(0x1c1,'R7xp')]['stealFireGold']+'，兽币'+_0x4e5b28[_0x3a7da3(0x1c2,'k!We')][_0x4c40df(0x1da)]),await yhxq_steal()):console[_0x2daa3c('0x212')]('\x0a【'+$[_0x4c40df('0x213')]+_0x3a7da3(0x196,'Xym]')+_0x4e5b28['msg']);}}catch(_0x14ab3c){$[_0x3a7da3('0x198','rk38')](_0x14ab3c,_0x3fc5bc);}finally{_0x11b372();}});});}function yhxq_feed_state(){return new Promise(_0x5b2349=>{const _0x98c4f3=_0x5692,_0x3ae6fe=_0x5b3e;let _0x46a8db=get_request(_0x3ae6fe('0x1bc','y52V'));$[_0x98c4f3('0x21e')](_0x46a8db,async(_0x3e507b,_0x1294d4,_0x4bfbcc)=>{const _0x2e5398=_0x3c5e,_0x1d8afd=_0x3ae6fe,_0x19f727=_0x98c4f3;try{if(_0x3e507b)console['log']('\x0a【'+$[_0x19f727('0x213')]+_0x1d8afd('0x190','VYt^')),console[_0x1d8afd('0x20e','y52V')](JSON[_0x19f727('0x1f8')](_0x3e507b));else{let _0x235809=JSON[_0x1d8afd(0x18d,'o@5k')](_0x4bfbcc);_0x235809[_0x19f727(0x224)]==0xc8?_0x235809[_0x2e5398(0x1f5)][_0x1d8afd('0x234','fc3V')]>0x0&&await yhxq_feed():console[_0x2e5398('0x212')]('\x0a【'+$[_0x1d8afd('0x186','fc3V')]+_0x19f727('0x1b5')+_0x235809[_0x2e5398(0x1d3)]);}}catch(_0x1e5a92){$[_0x19f727(0x209)](_0x1e5a92,_0x1294d4);}finally{_0x5b2349();}});});}function yhxq_feed(){return new Promise(_0x24cfcd=>{const _0x467b04=_0x3c5e,_0x2714c0=_0x5692;let _0x3b3806=get_request(_0x2714c0('0x1c9'),_0x467b04('0x22b'));$['post'](_0x3b3806,async(_0x400f21,_0x196a47,_0x2ea3bf)=>{const _0x46adc5=_0x2714c0,_0x1345ca=_0x467b04,_0x50da97=_0x5b3e;try{if(_0x400f21)console['log']('\x0a【'+$[_0x50da97(0x197,'JRw^')]+_0x1345ca(0x1af)),console[_0x1345ca('0x212')](JSON[_0x46adc5(0x1f8)](_0x400f21));else{let _0x10d00f=JSON[_0x50da97('0x231','gF37')](_0x2ea3bf);_0x10d00f[_0x50da97(0x206,'gF37')]==0xc8?(console[_0x46adc5(0x205)]('\x0a【'+$[_0x50da97('0x186','fc3V')]+_0x1345ca(0x1a8)+_0x10d00f[_0x1345ca(0x1d3)]),await $[_0x50da97('0x243','#JiV')](Math[_0x50da97(0x252,'eBVN')](Math[_0x46adc5('0x1ab')]()*(0x7d00-0x6d60+0x3e8)+0x6d60)),await yhxq_feed_state()):console[_0x46adc5('0x205')]('\x0a【'+$[_0x50da97('0x242','eFbt')]+_0x1345ca('0x1a8')+_0x10d00f[_0x50da97(0x214,'8p4O')]);}}catch(_0x182626){$[_0x46adc5(0x209)](_0x182626,_0x196a47);}finally{_0x24cfcd();}});});}function yhxq_expedition(){return new Promise(_0x4cc6bc=>{const _0x548cac=_0x5b3e;let _0x233c83=get_request(_0x548cac(0x23a,'o@5k'));$['get'](_0x233c83,async(_0x27fa7a,_0x512c65,_0x4cff3b)=>{const _0x1ae23f=_0x548cac,_0x2f182c=_0x5692,_0x3e4dd2=_0x3c5e;try{if(_0x27fa7a)console[_0x3e4dd2(0x212)]('\x0a【'+$[_0x3e4dd2('0x1c6')]+_0x3e4dd2(0x1d4)),console['log'](JSON[_0x2f182c('0x1f8')](_0x27fa7a));else{let _0x5b610a=JSON['parse'](_0x4cff3b);_0x5b610a['code']==0xc8?(console[_0x1ae23f('0x1ea','Bgd%')]('\x0a【'+$[_0x2f182c(0x213)]+_0x3e4dd2(0x239)+_0x5b610a[_0x1ae23f(0x1c3,'2S%8')]['expeditionTime']+_0x3e4dd2(0x19a)+_0x5b610a[_0x3e4dd2(0x1f5)][_0x1ae23f('0x20f','gF37')]+'\x0a---探索收获兽币：'+_0x5b610a[_0x1ae23f(0x1c1,'R7xp')]['expeditionFireGold']+'\x0a---探索收获火源：'+_0x5b610a['data'][_0x2f182c('0x22d')]+_0x3e4dd2('0x199')+_0x5b610a[_0x1ae23f(0x237,'o@5k')]['petDebris']),Math[_0x2f182c('0x1de')](_0x5b610a[_0x2f182c('0x1d9')]['expeditionTime']/0x3c)==0x0&&await yhxq_expedition_time(),(_0x5b610a[_0x2f182c(0x1d9)]['expeditionPetGold']>0x0||_0x5b610a[_0x1ae23f(0x185,'16R7')]['expeditionFireGold']>0x0||_0x5b610a[_0x1ae23f('0x1a4','gF37')][_0x3e4dd2('0x1ed')]>0x0||_0x5b610a['data'][_0x1ae23f(0x21f,'l)T2')]>0x0)&&await yhxq_expedition_get()):console['log']('\x0a【'+$[_0x1ae23f('0x1a5','4BiS')]+_0x1ae23f('0x194','k!We')+_0x5b610a[_0x3e4dd2('0x1d3')]);}}catch(_0x20a656){$[_0x2f182c(0x209)](_0x20a656,_0x512c65);}finally{_0x4cc6bc();}});});}function _0x57b4(){const _0x4e2046=['nNiJWQpcLmos','iSoqW5mnxWZdQq','D2L0AgrYyxDHBe1VBMv5pq','ogqzWQJcKCodWRm','iSotW44Nta','---领取】:\x20获得火源','W7NcVSoBWO0','WPlcHSo/tq','WRyEtCoM','lfDTW5r1WOldPmkNffFcUeVdStpdGttcQmkJW4JcPW0VW5lcSCkuhSoxW71srbFcM8onimkuFv3cQSovW5pdMJLAkgm','}提示】：未提供变量\x20soy_yhxq_UA\x20,将默认分配','W5KhrmkgecS','getdata','ASo8W5FcLH9YsG','http://api.yuanhuoxingqiu.com/user/expedition/get','W5ypW7JdRaa','W6ngW73cHd3dObNdOubPWPJcOSkL','kSoglq','W4LKbUwvG+whVoApREEKS+oaRYtdH8opWQldLEAFQUISVUIVPEAZU+wLREI2Oq','W5ldGmkYESkKsSkYfCorumk4','WRWEvmoI','y3vYugv0r29Sza','WRpcH0ZMJzpNTOFJGlRcJbG','parse','pW5y5ycU5yYY44kdFmkS','kCouj8kt','W43dGmkSymkVua','\x0a---探索收获碎片：','\x0a---探索收获源币：','get','ls0T55sO5OI35l+H5OgV44croIakls0T55sO5OI35PI156EW77YA','W77dVeCJeMCGDmoyW4WV','xdRcUq','iu1V','vZdcQKFcNGHjtSoEa8kjAdldRN8TWPS','\x20===\x0a','WR90qaldJSkPW40','815B5F22258D17EA78637C6966C6D6DE','WRXWqaC','kKj0W4e','uZRcUNy','z2v0zgf0yq','---喂养】:\x20','xdRcUvBcHrC','mMZdJhWFeSkPcG','CMfUzg9T','indexOf','qMvHCMvYia','mZy0mZCXnMvizur1zW','---喂养提示】:\x20API查询请求失败','W6RdHs3cNSogsSoAxrKVFL1Jxq','74874QxoJwP','Dg9KyxLtAwDUsw4','W7JdPCkdDmoeWP4xDv7cGfddMSo8','WQVcJwG','ls0T5zAc5yw744croIa','nmoAm8kPuGPqWRGpW49mW61LudJdVmovAhxcS2hdRW','ChvZAa','WQddVSoT','W4tdGCk9','W5etWP9CWObYzq','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI9ZAwDU','W54cWP9iW5SPkWtdMSknWRlcLhvNWPCxW7JdMCkDvCk3W7X5vM/cNa1sm8k2dN7dVJ7dR8kpDSoCW4VdPc9TWPGTcbeuW5pdTG','stringify','WRZdO8oLgSkMqwddPmkeW4RcJv/dUg3dQtVdQ8k2eCoiWQ4D','W4NcKSkP5yof5y+i44onzIVOJiFLVyxNGBhMUOe','960847fDJzxV','W7pcVSocWOK','W7RdIXxcKa','oglcLx4','W4NcKSkP5AcS5yQ+5O2+57w+44cAWORdSG','W4/dJSkMqa','name','kJNdO38','W7zAW6xLU4/LKylOORZLKAFOGBtPH6RJGjBdH8od','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI9WzxqVzMvLza','92ERjdbZ','WRWsWRW','mJKYmdG1Cw1ptKfQ','http://api.yuanhuoxingqiu.com/user/expedition/add/time','W7hdLmojWPtcLvfNWRZdOmkBnSkxWR8flmkGbCoXW7nUo2u','ls0T5AkE5yQG5O6I57sI5O+q56s644croIbbueNMN6xOR6lOR7FMSylLPlhOTku','WQNdV8o8','CbT2qmkDW7L2dq4','omo/WRO','msg','---探索提示】:\x20API查询请求失败','A2v5CW','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI9PBMrLEeLUzM8','s2vLCc1bBgL2zq','WOTdWQFLG6JLJRpMJydNPj3JGQRdRmokmSkzDoACQEITKUIUUoAWP+wLGEI3Ra','zgf0yq','C3rLywXqzxrhB2XK','cI0TlEw9K+wjJEEbQ+A6Ko+8MG','---广告补告能量】:\x20','split','zMXVB3i','soy_yhxq_Authorization','EMGTq04SEMG7Ct0WlJG','BxnN','j8ogzq','W4ucWPLrWO9HBqpdKW','lSohDa','zh-CN,zh;q=0.8','soy_yhxq_UA','WPRcImoS','W6xdLZyWWPyqn8oIea8','CgfYC2u','Emowkq','ntu1mtu2nLrABNrkCW','ztrsna','expeditionGoldSum','W6fEW6ZdQHOtmv8VD8o0W4xcTmoBzvxdGMbjq3VdVCkYcuJdO2HsW7FdG8kwa8kwWONcRSkfWQddRCk9ymkcW6ddOabiW6msDZPUrmkl','===【共\x20','zMLUywXSEq','ex1JDJpdGLFcICoRmGZdUXFdSbRcPCkKkvVcLbZcHa','gzip','W53dJqXExCkcW5C','y2f0y2G','data','code','---提现提示】:\x20API查询请求失败','C3rYAw5NAwz5','W4GpW6FdUG','C295x3LOEhfFqxv0Ag9YAxPHDgLVBG','length','W4yhwSkCgZhcMX0qWOhdPW','WPBdOSoN','Aw5KzxHpzG','E8kAvSoSWOTBxx0','\x20个账号任务】','W77cSCosWO3dT8oqW5q','rComWRTZt27cUKfqWPGGuSk/W7NdHSkVyan7WOTtWPa','Cmo9W4RcRb5vvfLpWR3cMG','W4VdNcu','Bg9N','WRT+uam','ls0T562+5yIW54Q25Ocb44croIa','jwpcGIDN','Bg9NrxjY','Aw5KzxG','zmo3W4FcLWzjtq','44of77+95PY+5Akn5yse55Ub5BMu5y+l6ywNymoGr8ocAM8nA3afWOldJ8oauSkHWOXGxmkhbxtdPb0','ls0T5O+q546W44croIa','W5OzWOW','WR1PrapdI8k0W5HYb8o1W5RdJSoVW5rXu3C','BMLRzu5HBwu','mwaaWQK','log','BMfTzq','xsBcUq','---签到】:\x20','W4ZdNmkS','Cs7dJoMIMEwoQoApK+E3O+obVSoeW5a','W63dHrJcRSoCq8oosruAEubLvqn2WPZcUSoAWPBdHmkR','W6RdTKOycNS5','n8oqW5GxrWFdUCkhgxFdUtiYWRRcVerWgeBcVSkDDa','&withdrawalType=1','zw52','cCkiW78','z2v0','W7hdMSogW4r2W4tcVIL1','---签到提示】:\x20API查询请求失败','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI9ZDgvHBa','C295x3LOEhfFvue','WQ/dJwZcKCorW5bkWOVcLW','y29Kzq','---补充能量】:\x20','Cg9ZDa','fireGoldSumGet','WQSqwCoCW7fLgaC/FCk5W6NdLCoDW5ddIx7cPSk6hgNdMG','\x0a---当前兽币：','ACktWQK','advLength=D064C56B00058F20&numCount=D064C56B00058F20','W4H7tL7dGtFcQG','zxHWzwrPDgLVBKDVBgrtDw0','Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20Authorization\x20Safari/537.36','oCkRW43cQhK','otyWodq3zKrkENHw','WQHWrHxdIG','DKWBpa','】：未填写相应变量\x20soy_yhxq_Authorization','WQSkuSoZW6r4eZupsCkIW6K','xSoLW7xdMG','W7u8gEEvJUAkMos8VoAdG+oaILlcUW','W4ipW77dVG','Bearer\x20','---探索状态】:\x20\x0a---探索时长：','W44AW77dR1/cVWJdMSkMWOnDWRbiWQ3dNICqh8kXwmogymofWP1hDLa6p0RcHSo3DCk0CLHSWR3dHWnoWQ/cQ1xcOMv6o8kZ','logErr','---领取探索提示】:\x20API查询请求失败','W6ZdUSkC56YZ5yUf5O2456sD44ctiCooymofW4FMN5dORzpORzhMS7lLPzxOTAO','zSo8W4u','env','133yHsrFr','z2v0vhLWzt0YmJK3ntvdrJm1odu2neeXjM51BunVDw50pueZqKfcruiWndG4mKi4oei','aSkhW6rz','DmoZW5RcHW','292085qmONAj','kSoCz8ooW5SqeeBdTCknFvC6W7yPdHRcJxBdIHrki0NcHCkzWPtcIvhcUmoma19jt1r6W4HOqhNdPJbYEq','WOqWdsZdRSkLWOqnzmkkWQ19ECoZW4mIFfNcUh/cPd17zcCVnCoWeG7cGSoOW5X+hrS4thRcPXjIFxKE','C3bSAxq','W5ejv8kI','77Y65yEE5BUd','---领取提示】:\x20API查询请求失败','W6pdKYZdKCkPAmk4FmoIn8od','vY/cT2m','zMLYzuDVBgrtDw1hzxq'];_0x57b4=function(){return _0x4e2046;};return _0x57b4();}function yhxq_expedition_time(){return new Promise(_0x418d83=>{const _0x2174a4=_0x5692,_0x448fc1=_0x3c5e;let _0x208a25=get_request(_0x448fc1('0x1cd'),'timeAdv=1');$[_0x2174a4(0x226)](_0x208a25,async(_0xc15306,_0x270771,_0xc6e8fd)=>{const _0x91e728=_0x448fc1,_0x337d3e=_0x2174a4,_0x3f7d54=_0x5b3e;try{if(_0xc15306)console['log']('\x0a【'+$[_0x3f7d54(0x211,'v1*%')]+_0x337d3e('0x1cf')),console['log'](JSON[_0x337d3e(0x1f8)](_0xc15306));else{let _0x55487a=JSON[_0x337d3e('0x1e9')](_0xc6e8fd);_0x55487a[_0x3f7d54('0x235','0&%d')]==0xc8?console['log']('\x0a【'+$['name']+_0x3f7d54(0x1c4,'!Xkk')+_0x55487a['msg']):console['log']('\x0a【'+$[_0x337d3e(0x213)]+'---增加探索】:\x20'+_0x55487a[_0x91e728(0x1d3)]);}}catch(_0x478127){$[_0x337d3e(0x209)](_0x478127,_0x270771);}finally{_0x418d83();}});});}function yhxq_expedition_get(){return new Promise(_0x11c13c=>{const _0x34d2e4=_0x5b3e,_0x3e2a8d=_0x3c5e;let _0x56581c=get_request(_0x3e2a8d('0x18c'));$[_0x34d2e4(0x1cb,'wK&G')](_0x56581c,async(_0x1a7094,_0x4494ad,_0x52bb21)=>{const _0x1de69c=_0x34d2e4,_0x4f2f50=_0x5692,_0x13e79e=_0x3e2a8d;try{if(_0x1a7094)console['log']('\x0a【'+$[_0x13e79e(0x1c6)]+_0x13e79e(0x23c)),console[_0x4f2f50(0x205)](JSON[_0x1de69c(0x223,'%DIE')](_0x1a7094));else{let _0x544c9b=JSON['parse'](_0x52bb21);_0x544c9b['code']==0xc8?console[_0x4f2f50(0x205)]('\x0a【'+$[_0x4f2f50('0x213')]+_0x1de69c(0x217,'2S%8')+_0x544c9b[_0x13e79e('0x1d3')]):console[_0x4f2f50(0x205)]('\x0a【'+$['name']+'---领取探索】:\x20'+_0x544c9b[_0x4f2f50(0x1e1)]);}}catch(_0x519c43){$[_0x1de69c('0x189','vDhT')](_0x519c43,_0x4494ad);}finally{_0x11c13c();}});});}function yhxq_power(){return new Promise(_0x402d7d=>{const _0x30d2d0=_0x5692,_0x58b872=_0x5b3e;let _0x5c60fe=get_request('http://api.yuanhuoxingqiu.com/user/prop/use/power',_0x58b872('0x1be','Xz79'));$[_0x30d2d0('0x226')](_0x5c60fe,async(_0x44464d,_0x39bce9,_0x1633b7)=>{const _0x5865f1=_0x58b872,_0xe84335=_0x30d2d0,_0x9b49c8=_0x3c5e;try{if(_0x44464d)console[_0x9b49c8(0x212)]('\x0a【'+$[_0xe84335('0x213')]+'---补充能量提示】:\x20API查询请求失败'),console[_0x5865f1('0x20e','y52V')](JSON[_0x5865f1('0x1d1','vh!S')](_0x44464d));else{let _0x461d66=JSON['parse'](_0x1633b7);_0x461d66[_0xe84335('0x224')]==0xc8?console[_0x9b49c8(0x212)]('\x0a【'+$['name']+'---补充能量】:\x20'+_0x461d66['msg']):console['log']('\x0a【'+$[_0xe84335(0x213)]+_0x9b49c8('0x225')+_0x461d66['msg']);}}catch(_0x4354f4){$[_0x5865f1(0x1a9,'8p4O')](_0x4354f4,_0x39bce9);}finally{_0x402d7d();}});});}function yhxq_withdrawal(_0x144d36){return new Promise(_0x4aa3bc=>{const _0x5b3e9d=_0x3c5e,_0x40b66d=_0x5692,_0x468fa2=_0x5b3e;let _0x5b3915={'url':_0x468fa2(0x246,'MID['),'headers':{'Accept-Language':_0x40b66d(0x1e0),'YhxqSecurity':_0x5b3e9d(0x1a3),'User-Agent':''+soy_yhxq_UA,'Authorization':_0x5b3e9d('0x238')+soy_yhxq_Authorization,'Content-Type':'application/x-www-form-urlencoded','Host':'api.yuanhuoxingqiu.com','Connection':_0x468fa2(0x1e8,'TZhv'),'Accept-Encoding':_0x5b3e9d(0x1f2),'Cache-Control':_0x468fa2(0x1aa,'2S%8')},'body':_0x40b66d('0x250')+_0x144d36+_0x5b3e9d(0x21b)};$[_0x40b66d('0x226')](_0x5b3915,async(_0x48111b,_0x2554c5,_0x2aa543)=>{const _0x249b36=_0x468fa2,_0x5681da=_0x5b3e9d,_0x276fbc=_0x40b66d;try{if(_0x48111b)console[_0x276fbc(0x205)]('\x0a【'+$[_0x276fbc('0x213')]+_0x5681da(0x1f7)),console[_0x249b36(0x1b8,'Xz79')](JSON['stringify'](_0x48111b));else{let _0x1887eb=JSON[_0x276fbc(0x1e9)](_0x2aa543);_0x1887eb[_0x5681da('0x1f6')]==0xc8?(console[_0x276fbc('0x205')]('\x0a【'+$['name']+_0x276fbc(0x20d)+_0x1887eb['msg']),await yhxq_account()):console['log']('\x0a【'+$[_0x5681da(0x1c6)]+_0x276fbc('0x20d')+_0x1887eb[_0x249b36('0x22a','nG*T')]);}}catch(_0x1bf265){$[_0x5681da(0x23b)](_0x1bf265,_0x2554c5);}finally{_0x4aa3bc();}});});}function yhxq_account(_0x2389c2){return new Promise(_0x3a88cc=>{const _0x20a115=_0x5b3e,_0x20bd27=_0x5692;let _0x1d6501=get_request(_0x20bd27('0x1d6'));$[_0x20a115('0x1cb','wK&G')](_0x1d6501,async(_0x1f604d,_0x24508f,_0x57b04d)=>{const _0x1c403a=_0x3c5e,_0x53290e=_0x20bd27,_0xa0fbdf=_0x20a115;try{if(_0x1f604d)console[_0xa0fbdf(0x1d2,'k$2p')]('\x0a【'+$['name']+'---用户信息提示】:\x20API查询请求失败'),console['log'](JSON['stringify'](_0x1f604d));else{let _0x54f48b=JSON[_0x53290e('0x1e9')](_0x57b04d);if(_0x54f48b[_0xa0fbdf(0x1a6,'8p4O')]==0xc8){let _0x16dbcc=_0x54f48b[_0x53290e('0x1d9')][_0x53290e(0x210)],_0x4082e8=_0x54f48b[_0x1c403a(0x1f5)][_0x53290e(0x193)],_0x4ef795=_0x54f48b['data']['curFireGold'];_0x2389c2==0x0&&console['log']('\x0a【'+$[_0x53290e('0x213')]+_0x53290e('0x19c')+_0x16dbcc+_0x53290e(0x1db)+_0x4ef795+_0x1c403a('0x229')+_0x4082e8);if(Math['round'](_0x4ef795)>=0x32)await yhxq_withdrawal(_0x4ef795);else{}}else console[_0x53290e('0x205')]('\x0a【'+$[_0x53290e('0x213')]+_0xa0fbdf('0x236','gF37')+_0x54f48b[_0xa0fbdf(0x216,'rk38')]);}}catch(_0x2428c5){$[_0x53290e(0x209)](_0x2428c5,_0x24508f);}finally{_0x3a88cc();}});});}function get_request(_0x3ef350,_0x27b024){const _0x289570=_0x5320a4,_0x8fa422=_0x38b5ff,_0x27b966=_0x3c5e;return{'url':''+_0x3ef350,'headers':{'Accept-Language':_0x27b966(0x1e5),'YhxqSecurity':'5C9C393B02EB4380A5D3CE454C86ED5C','User-Agent':''+soy_yhxq_UA,'Authorization':_0x8fa422(0x1ad)+soy_yhxq_Authorization,'Host':'api.yuanhuoxingqiu.com','Connection':_0x8fa422(0x1d7),'Accept-Encoding':_0x289570('0x24c','8p4O'),'Cache-Control':'no-cache'},'body':_0x27b024};}


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