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

const _0x3ab4c5=_0x50c6,_0x16387f=_0x3278,_0x82053a=_0x56a2;(function(_0x5aca3e,_0x27a4f6){const _0x2ab51f=_0x50c6,_0x2d6562=_0x3278,_0x4994c9=_0x56a2,_0x53655c=_0x5aca3e();while(!![]){try{const _0x3938f0=-parseInt(_0x4994c9(0x1f0))/0x1+parseInt(_0x2d6562(0x189,'u&sU'))/0x2*(-parseInt(_0x2d6562(0x21b,'iTZa'))/0x3)+parseInt(_0x2ab51f(0x1f1))/0x4*(parseInt(_0x2d6562(0x1b0,'HCJj'))/0x5)+-parseInt(_0x2d6562(0x194,'R0VL'))/0x6*(-parseInt(_0x2ab51f(0x1f9))/0x7)+-parseInt(_0x2ab51f(0x176))/0x8*(parseInt(_0x2d6562(0x207,'Go6['))/0x9)+-parseInt(_0x2ab51f(0x1d7))/0xa*(-parseInt(_0x4994c9(0x1c0))/0xb)+parseInt(_0x4994c9(0x22a))/0xc*(parseInt(_0x2d6562(0x1d4,'DKK#'))/0xd);if(_0x3938f0===_0x27a4f6)break;else _0x53655c['push'](_0x53655c['shift']());}catch(_0x139269){_0x53655c['push'](_0x53655c['shift']());}}}(_0x4a3c,0xc0f7d));let app_soy_yhxq_Authorization=[],app_soy_yhxq_UA=[],subTitle='',withdrawal=![];!(async()=>{const _0xa71088=_0x50c6,_0x3028bd=_0x3278,_0x4a1c61=_0x56a2;if($[_0x4a1c61(0x20c)]()){if(!process[_0x3028bd(0x20f,'MisM')][_0x3028bd(0x1aa,'Go6[')]){console[_0x3028bd(0x195,'iTZa')]('\x0a【'+$[_0x4a1c61(0x240)]+_0xa71088(0x1ee));return;}if(process[_0x4a1c61(0x16a)][_0xa71088(0x1d8)]&&process[_0x4a1c61(0x16a)][_0xa71088(0x1d8)][_0xa71088(0x1ff)]('@')>-0x1)soy_yhxq_Authorization=process[_0x4a1c61(0x16a)][_0x4a1c61(0x201)][_0xa71088(0x1b1)]('@');else{if(process[_0x3028bd(0x1bb,'1[J&')][_0x3028bd(0x208,'1[J&')]&&process[_0xa71088(0x225)]['soy_yhxq_Authorization']['indexOf']('\x0a')>-0x1)soy_yhxq_Authorization=process['env'][_0x4a1c61(0x201)][_0xa71088(0x1b1)]('\x0a');else process[_0x4a1c61(0x16a)][_0xa71088(0x1d8)]&&process['env'][_0x3028bd(0x186,'&BsO')][_0x4a1c61(0x215)]('#')>-0x1?soy_yhxq_Authorization=process[_0x4a1c61(0x16a)]['soy_yhxq_Authorization'][_0x3028bd(0x216,'R0VL')]('#'):soy_yhxq_Authorization=process['env'][_0xa71088(0x1d8)][_0x3028bd(0x1b5,'MisM')]();};if(!process[_0x3028bd(0x18a,'&G8@')][_0xa71088(0x1ab)]){}else{if(process[_0x4a1c61(0x16a)][_0x4a1c61(0x192)]&&process[_0xa71088(0x225)][_0x4a1c61(0x192)][_0xa71088(0x1ff)]('@')>-0x1)soy_yhxq_UA=process['env'][_0x4a1c61(0x192)][_0xa71088(0x1b1)]('@');else{if(process[_0x4a1c61(0x16a)]['soy_yhxq_UA']&&process[_0xa71088(0x225)][_0xa71088(0x1ab)][_0xa71088(0x1ff)]('\x0a')>-0x1)soy_yhxq_UA=process['env'][_0xa71088(0x1ab)]['split']('\x0a');else process[_0xa71088(0x225)]['soy_yhxq_UA']&&process[_0x4a1c61(0x16a)]['soy_yhxq_UA'][_0x3028bd(0x236,'H7D#')]('#')>-0x1?soy_yhxq_UA=process[_0xa71088(0x225)][_0x4a1c61(0x192)][_0xa71088(0x1b1)]('#'):soy_yhxq_UA=process[_0xa71088(0x225)][_0x3028bd(0x1dc,'3*p#')][_0x4a1c61(0x197)]();};Object[_0x3028bd(0x21e,'DKK#')](soy_yhxq_UA)['forEach'](_0xdd83c7=>{const _0x376ee9=_0x3028bd;soy_yhxq_UA[_0xdd83c7]&&app_soy_yhxq_UA[_0x376ee9(0x167,'R0VL')](soy_yhxq_UA[_0xdd83c7]);;});}Object[_0x4a1c61(0x228)](soy_yhxq_Authorization)[_0x3028bd(0x232,'pSU)')](_0xe1c343=>{soy_yhxq_Authorization[_0xe1c343]&&app_soy_yhxq_Authorization['push'](soy_yhxq_Authorization[_0xe1c343]);;});}else{if(!$[_0xa71088(0x185)]('soy_yhxq_Authorization')){console[_0xa71088(0x19f)]('\x0a【'+$[_0x3028bd(0x1eb,'nZ5I')]+_0x4a1c61(0x1a5));return;}if($['getdata'](_0x3028bd(0x1ae,'l0p!'))&&$[_0x3028bd(0x1fc,'pSU)')](_0x4a1c61(0x201))[_0x3028bd(0x1c1,'R0VL')]('@')>-0x1)app_soy_yhxq_Authorization=$[_0x4a1c61(0x1fb)](_0xa71088(0x1d8))[_0x3028bd(0x214,'l^uW')]('@');else{if($[_0x4a1c61(0x1fb)](_0x4a1c61(0x201))&&$[_0x3028bd(0x1be,'MisM')](_0x4a1c61(0x201))['indexOf']('\x0a')>-0x1)app_soy_yhxq_Authorization=$[_0x3028bd(0x231,'&n#N')](_0xa71088(0x1d8))[_0x4a1c61(0x197)]('\x0a');else $[_0xa71088(0x185)](_0x4a1c61(0x201))&&$[_0x4a1c61(0x1fb)](_0xa71088(0x1d8))['indexOf']('#')>-0x1?app_soy_yhxq_Authorization=$[_0xa71088(0x185)](_0xa71088(0x1d8))[_0x3028bd(0x1f6,'oRgJ')]('#'):app_soy_yhxq_Authorization=$[_0xa71088(0x185)](_0x4a1c61(0x201))[_0x4a1c61(0x197)]();};if(!process[_0x3028bd(0x1e1,'Xs&i')]['soy_yhxq_UA']){}else{if($[_0x4a1c61(0x1fb)]('soy_yhxq_UA')&&$['getdata'](_0x3028bd(0x1e2,'Go6['))['indexOf']('@')>-0x1)app_soy_yhxq_UA=$['getdata'](_0xa71088(0x1ab))[_0xa71088(0x1b1)]('@');else{if($['getdata'](_0x4a1c61(0x192))&&$[_0xa71088(0x185)]('soy_yhxq_UA')['indexOf']('\x0a')>-0x1)app_soy_yhxq_UA=$[_0x4a1c61(0x1fb)](_0x3028bd(0x1d5,'l^uW'))['split']('\x0a');else $[_0x4a1c61(0x1fb)]('soy_yhxq_UA')&&$[_0x4a1c61(0x1fb)](_0xa71088(0x1ab))[_0x3028bd(0x1ed,'wkI1')]('#')>-0x1?app_soy_yhxq_UA=$[_0x3028bd(0x21d,'Upzc')](_0x4a1c61(0x192))['split']('#'):app_soy_yhxq_UA=$[_0x4a1c61(0x1fb)](_0x4a1c61(0x192))['split']();};Object[_0xa71088(0x177)](soy_yhxq_UA)[_0x4a1c61(0x1bf)](_0x2b587d=>{const _0x5d98b7=_0x4a1c61;soy_yhxq_UA[_0x2b587d]&&app_soy_yhxq_UA[_0x5d98b7(0x1b6)](soy_yhxq_UA[_0x2b587d]);;});}}console[_0x3028bd(0x1c9,'&G8@')](_0x3028bd(0x1a7,'L5to')+new Date(new Date()['getTime']()+new Date()[_0x4a1c61(0x23a)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+'\x20===\x0a'),console['log']('===【共\x20'+app_soy_yhxq_Authorization[_0x4a1c61(0x1a0)]+_0x3028bd(0x206,'u&sU'));for(i=0x0;i<app_soy_yhxq_Authorization[_0xa71088(0x229)];i++){soy_yhxq_Authorization=app_soy_yhxq_Authorization[i],soy_yhxq_UA=app_soy_yhxq_UA[i],$[_0xa71088(0x1ac)]=i+0x1,console[_0xa71088(0x19f)](_0xa71088(0x1fe)+$[_0x4a1c61(0x1a8)]+_0x4a1c61(0x227)),!soy_yhxq_UA&&(console['log']('\x0a【'+$[_0x4a1c61(0x240)]+_0x3028bd(0x237,'bGGC')),soy_yhxq_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20Authorization\x20Safari/537.36'),await yhxq_sign_state(),await yhxq_petAll(),await yhxq_adv(),await yhxq_steal(),await yhxq_feed_state(),await yhxq_expedition(),await yhxq_account();};})()[_0x82053a(0x172)](_0x4d6e3b=>$[_0x82053a(0x235)](_0x4d6e3b))[_0x16387f(0x17e,'bGGC')](()=>$[_0x3ab4c5(0x1de)]());function yhxq_sign_state(){return new Promise(_0x3fecc3=>{const _0x1dc8af=_0x50c6,_0x1277e9=_0x56a2;let _0x3b43c0=get_request(_0x1277e9(0x17d));$[_0x1dc8af(0x221)](_0x3b43c0,async(_0x1a749a,_0x365fce,_0x4e44ee)=>{const _0xe37cc1=_0x1dc8af,_0xe74d02=_0x3278,_0x5658b7=_0x1277e9;try{if(_0x1a749a)console[_0x5658b7(0x1f8)]('\x0a【'+$[_0xe74d02(0x16b,'l0p!')]+_0x5658b7(0x163)),console[_0x5658b7(0x1f8)](JSON[_0xe37cc1(0x182)](_0x1a749a));else{let _0x21487c=JSON['parse'](_0x4e44ee);_0x21487c[_0x5658b7(0x18f)]==0xc8?_0x21487c[_0x5658b7(0x1d9)][_0xe37cc1(0x238)]==0x1&&await yhxq_sign():console['log']('\x0a【'+$[_0xe74d02(0x1ba,'zjEJ')]+_0xe37cc1(0x211)+_0x21487c[_0xe37cc1(0x202)]);}}catch(_0x47c337){$[_0x5658b7(0x235)](_0x47c337,_0x365fce);}finally{_0x3fecc3();}});});}function _0x3278(_0x201a23,_0x2acff3){const _0x4a3cc4=_0x4a3c();return _0x3278=function(_0x50c613,_0x65c34d){_0x50c613=_0x50c613-0x161;let _0x69cb43=_0x4a3cc4[_0x50c613];if(_0x3278['UUuJHu']===undefined){var _0x51b2a1=function(_0x3a4632){const _0x48d357='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x9291ab='',_0xc223c='';for(let _0x27244f=0x0,_0x4a6235,_0x3278d1,_0x410c26=0x0;_0x3278d1=_0x3a4632['charAt'](_0x410c26++);~_0x3278d1&&(_0x4a6235=_0x27244f%0x4?_0x4a6235*0x40+_0x3278d1:_0x3278d1,_0x27244f++%0x4)?_0x9291ab+=String['fromCharCode'](0xff&_0x4a6235>>(-0x2*_0x27244f&0x6)):0x0){_0x3278d1=_0x48d357['indexOf'](_0x3278d1);}for(let _0xeba007=0x0,_0x24c19e=_0x9291ab['length'];_0xeba007<_0x24c19e;_0xeba007++){_0xc223c+='%'+('00'+_0x9291ab['charCodeAt'](_0xeba007)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xc223c);};const _0x56a22e=function(_0x50f97a,_0x584029){let _0x5dedf2=[],_0xdd83c7=0x0,_0xe1c343,_0x2b587d='';_0x50f97a=_0x51b2a1(_0x50f97a);let _0x4d6e3b;for(_0x4d6e3b=0x0;_0x4d6e3b<0x100;_0x4d6e3b++){_0x5dedf2[_0x4d6e3b]=_0x4d6e3b;}for(_0x4d6e3b=0x0;_0x4d6e3b<0x100;_0x4d6e3b++){_0xdd83c7=(_0xdd83c7+_0x5dedf2[_0x4d6e3b]+_0x584029['charCodeAt'](_0x4d6e3b%_0x584029['length']))%0x100,_0xe1c343=_0x5dedf2[_0x4d6e3b],_0x5dedf2[_0x4d6e3b]=_0x5dedf2[_0xdd83c7],_0x5dedf2[_0xdd83c7]=_0xe1c343;}_0x4d6e3b=0x0,_0xdd83c7=0x0;for(let _0x3fecc3=0x0;_0x3fecc3<_0x50f97a['length'];_0x3fecc3++){_0x4d6e3b=(_0x4d6e3b+0x1)%0x100,_0xdd83c7=(_0xdd83c7+_0x5dedf2[_0x4d6e3b])%0x100,_0xe1c343=_0x5dedf2[_0x4d6e3b],_0x5dedf2[_0x4d6e3b]=_0x5dedf2[_0xdd83c7],_0x5dedf2[_0xdd83c7]=_0xe1c343,_0x2b587d+=String['fromCharCode'](_0x50f97a['charCodeAt'](_0x3fecc3)^_0x5dedf2[(_0x5dedf2[_0x4d6e3b]+_0x5dedf2[_0xdd83c7])%0x100]);}return _0x2b587d;};_0x3278['dVNOJk']=_0x56a22e,_0x201a23=arguments,_0x3278['UUuJHu']=!![];}const _0x4d2923=_0x4a3cc4[0x0],_0x48e990=_0x50c613+_0x4d2923,_0x5ea519=_0x201a23[_0x48e990];return!_0x5ea519?(_0x3278['WxwSvw']===undefined&&(_0x3278['WxwSvw']=!![]),_0x69cb43=_0x3278['dVNOJk'](_0x69cb43,_0x65c34d),_0x201a23[_0x48e990]=_0x69cb43):_0x69cb43=_0x5ea519,_0x69cb43;},_0x3278(_0x201a23,_0x2acff3);}function yhxq_sign(){return new Promise(_0x55c937=>{const _0x55a9b0=_0x56a2,_0x58f732=_0x3278;let _0x24e1a3=get_request(_0x58f732(0x16f,'DKK#'));$[_0x55a9b0(0x21f)](_0x24e1a3,async(_0x491d91,_0x3d8bb0,_0x520432)=>{const _0x4e8413=_0x58f732,_0x2216e0=_0x50c6,_0x7c1e28=_0x55a9b0;try{if(_0x491d91)console[_0x7c1e28(0x1f8)]('\x0a【'+$[_0x2216e0(0x210)]+'---签到提示】:\x20API查询请求失败'),console[_0x2216e0(0x19f)](JSON[_0x7c1e28(0x1a9)](_0x491d91));else{let _0x964247=JSON[_0x2216e0(0x1d0)](_0x520432);_0x964247[_0x2216e0(0x239)]==0xc8?console[_0x4e8413(0x1d1,'J]MM')]('\x0a【'+$[_0x2216e0(0x210)]+_0x2216e0(0x17f)+_0x964247[_0x2216e0(0x202)]):console[_0x4e8413(0x1c6,'oczy')]('\x0a【'+$[_0x4e8413(0x23e,'K)3E')]+'---签到】:\x20'+_0x964247[_0x2216e0(0x202)]);}}catch(_0x3806bc){$['logErr'](_0x3806bc,_0x3d8bb0);}finally{_0x55c937();}});});}function yhxq_petAll(){return new Promise(_0x440004=>{const _0x46943e=_0x50c6;let _0x1e9a61=get_request(_0x46943e(0x168),'getType=229755CF358564A1&numCount=A3BABEB04882B88B');$[_0x46943e(0x21c)](_0x1e9a61,async(_0x410419,_0x11843f,_0xff601f)=>{const _0x5f5b49=_0x56a2,_0x5522cc=_0x3278,_0x432ca6=_0x46943e;try{if(_0x410419)console[_0x432ca6(0x19f)]('\x0a【'+$['name']+_0x5522cc(0x19a,'Rc@p')),console[_0x5522cc(0x222,'Xs&i')](JSON[_0x432ca6(0x182)](_0x410419));else{let _0x2978e0=JSON[_0x432ca6(0x1d0)](_0xff601f);_0x2978e0['code']==0xc8?console['log']('\x0a【'+$[_0x5f5b49(0x240)]+_0x5522cc(0x1af,'!UJI')+_0x2978e0[_0x432ca6(0x1e8)][_0x5522cc(0x23c,'MisM')]+_0x5522cc(0x1bd,'DKK#')+_0x2978e0[_0x432ca6(0x1e8)]['petGoldSumGet']):console[_0x432ca6(0x19f)]('\x0a【'+$[_0x5f5b49(0x240)]+_0x5f5b49(0x234)+_0x2978e0[_0x5522cc(0x178,'9!&S')]);}}catch(_0x759aeb){$['logErr'](_0x759aeb,_0x11843f);}finally{_0x440004();}});});}function yhxq_adv(){return new Promise(_0x103ce7=>{const _0x2c6642=_0x50c6,_0x2a4506=_0x56a2;let _0x2805f7=get_request(_0x2a4506(0x184),_0x2c6642(0x161));$['post'](_0x2805f7,async(_0x269cca,_0x43b629,_0x1ada52)=>{const _0x2175ad=_0x2c6642,_0x580617=_0x2a4506,_0x27925e=_0x3278;try{if(_0x269cca)console[_0x27925e(0x1e7,'n3s1')]('\x0a【'+$[_0x580617(0x240)]+'---偷取提示】:\x20API查询请求失败'),console[_0x580617(0x1f8)](JSON[_0x2175ad(0x182)](_0x269cca));else{let _0x4c2580=JSON[_0x2175ad(0x1d0)](_0x1ada52);_0x4c2580[_0x2175ad(0x239)]==0xc8?(console[_0x27925e(0x1a2,'wkI1')]('\x0a【'+$[_0x580617(0x240)]+_0x27925e(0x1e3,'Upzc')+_0x4c2580['msg']),await yhxq_steal()):console['log']('\x0a【'+$[_0x580617(0x240)]+_0x580617(0x1e0)+_0x4c2580[_0x580617(0x203)]);}}catch(_0x5915d0){$[_0x580617(0x235)](_0x5915d0,_0x43b629);}finally{_0x103ce7();}});});}function _0x50c6(_0x201a23,_0x2acff3){const _0x4a3cc4=_0x4a3c();return _0x50c6=function(_0x50c613,_0x65c34d){_0x50c613=_0x50c613-0x161;let _0x69cb43=_0x4a3cc4[_0x50c613];return _0x69cb43;},_0x50c6(_0x201a23,_0x2acff3);}function _0x56a2(_0x201a23,_0x2acff3){const _0x4a3cc4=_0x4a3c();return _0x56a2=function(_0x50c613,_0x65c34d){_0x50c613=_0x50c613-0x161;let _0x69cb43=_0x4a3cc4[_0x50c613];if(_0x56a2['PhHlnE']===undefined){var _0x51b2a1=function(_0x56a22e){const _0x3a4632='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x48d357='',_0x9291ab='';for(let _0xc223c=0x0,_0x27244f,_0x4a6235,_0x3278d1=0x0;_0x4a6235=_0x56a22e['charAt'](_0x3278d1++);~_0x4a6235&&(_0x27244f=_0xc223c%0x4?_0x27244f*0x40+_0x4a6235:_0x4a6235,_0xc223c++%0x4)?_0x48d357+=String['fromCharCode'](0xff&_0x27244f>>(-0x2*_0xc223c&0x6)):0x0){_0x4a6235=_0x3a4632['indexOf'](_0x4a6235);}for(let _0x410c26=0x0,_0xeba007=_0x48d357['length'];_0x410c26<_0xeba007;_0x410c26++){_0x9291ab+='%'+('00'+_0x48d357['charCodeAt'](_0x410c26)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x9291ab);};_0x56a2['XsLayX']=_0x51b2a1,_0x201a23=arguments,_0x56a2['PhHlnE']=!![];}const _0x4d2923=_0x4a3cc4[0x0],_0x48e990=_0x50c613+_0x4d2923,_0x5ea519=_0x201a23[_0x48e990];return!_0x5ea519?(_0x69cb43=_0x56a2['XsLayX'](_0x69cb43),_0x201a23[_0x48e990]=_0x69cb43):_0x69cb43=_0x5ea519,_0x69cb43;},_0x56a2(_0x201a23,_0x2acff3);}function yhxq_steal(){return new Promise(_0x1766e8=>{const _0xa8e143=_0x50c6;let _0x3a3452=get_request('http://api.yuanhuoxingqiu.com/user/steal');$[_0xa8e143(0x221)](_0x3a3452,async(_0x2fa5f9,_0x10144d,_0x3857ff)=>{const _0x922bac=_0xa8e143,_0xc28728=_0x3278,_0x33b154=_0x56a2;try{if(_0x2fa5f9)console[_0x33b154(0x1f8)]('\x0a【'+$[_0xc28728(0x1ec,'wkI1')]+_0x922bac(0x1b7)),console[_0x922bac(0x19f)](JSON[_0x922bac(0x182)](_0x2fa5f9));else{let _0x4ec4cd=JSON[_0xc28728(0x1c7,'l^uW')](_0x3857ff);_0x4ec4cd[_0xc28728(0x1cf,'wkI1')]==0xc8?(console[_0x922bac(0x19f)]('\x0a【'+$[_0xc28728(0x1ec,'wkI1')]+_0x33b154(0x19c)+_0x4ec4cd[_0xc28728(0x1fa,'&G8@')][_0x922bac(0x226)]+_0x922bac(0x22d)+_0x4ec4cd[_0x33b154(0x1d9)]['stealPetGold']),await yhxq_steal()):console[_0xc28728(0x187,'bGGC')]('\x0a【'+$[_0xc28728(0x1da,'18iA')]+'---偷取】:\x20'+_0x4ec4cd[_0x922bac(0x202)]);}}catch(_0x37bf8f){$['logErr'](_0x37bf8f,_0x10144d);}finally{_0x1766e8();}});});}function yhxq_feed_state(){return new Promise(_0x106ded=>{const _0x108346=_0x56a2,_0x263c45=_0x50c6;let _0x5b0621=get_request(_0x263c45(0x1cc));$[_0x108346(0x21f)](_0x5b0621,async(_0x29d493,_0x5eb9e0,_0x567b40)=>{const _0x138648=_0x263c45,_0x3f4c70=_0x108346,_0x5e9326=_0x3278;try{if(_0x29d493)console[_0x5e9326(0x1c2,'K)3E')]('\x0a【'+$[_0x3f4c70(0x240)]+'---喂养提示】:\x20API查询请求失败'),console[_0x3f4c70(0x1f8)](JSON[_0x3f4c70(0x1a9)](_0x29d493));else{let _0x555f81=JSON['parse'](_0x567b40);_0x555f81[_0x3f4c70(0x18f)]==0xc8?_0x555f81['data'][_0x138648(0x162)]>0x0&&await yhxq_feed():console[_0x5e9326(0x191,'Os)p')]('\x0a【'+$[_0x5e9326(0x1f7,'9!&S')]+_0x138648(0x173)+_0x555f81[_0x5e9326(0x23f,'J]MM')]);}}catch(_0xc61df9){$[_0x5e9326(0x219,'3*p#')](_0xc61df9,_0x5eb9e0);}finally{_0x106ded();}});});}function yhxq_feed(){return new Promise(_0x58d293=>{const _0x44a097=_0x3278,_0x5a734d=_0x50c6;let _0x5e7b0d=get_request(_0x5a734d(0x20a),_0x5a734d(0x19b));$[_0x44a097(0x19d,'5iwH')](_0x5e7b0d,async(_0x49ae97,_0x495e61,_0x49ac39)=>{const _0x5f3643=_0x56a2,_0x2ac9fc=_0x5a734d,_0x3675c4=_0x44a097;try{if(_0x49ae97)console[_0x3675c4(0x174,'!YqW')]('\x0a【'+$[_0x3675c4(0x1b9,'Lu5*')]+_0x2ac9fc(0x23b)),console[_0x3675c4(0x1a6,'zjEJ')](JSON[_0x3675c4(0x1e6,'18iA')](_0x49ae97));else{let _0x47dbce=JSON[_0x2ac9fc(0x1d0)](_0x49ac39);_0x47dbce['code']==0xc8?(console[_0x2ac9fc(0x19f)]('\x0a【'+$[_0x3675c4(0x1ba,'zjEJ')]+_0x5f3643(0x1f5)+_0x47dbce[_0x2ac9fc(0x202)]),await $[_0x2ac9fc(0x220)](Math[_0x5f3643(0x1b3)](Math[_0x3675c4(0x23d,'L5to')]()*(0x7d00-0x6d60+0x3e8)+0x6d60)),await yhxq_feed_state()):console[_0x5f3643(0x1f8)]('\x0a【'+$[_0x2ac9fc(0x210)]+_0x5f3643(0x1f5)+_0x47dbce[_0x5f3643(0x203)]);}}catch(_0x554697){$[_0x3675c4(0x165,'Lu5*')](_0x554697,_0x495e61);}finally{_0x58d293();}});});}function _0x4a3c(){const _0x1599d0=['W79DbSkm','---增加探索】:\x20','cuK8','W6tcOCoRbCogW5nIWOO','W7ZcJcbmWP3cOSo7W7ddGmoaFx/dKvCxWRy/W6nhW5qiW6BcUmo7W6ldRhOsmCkyeH/dVmkQW45QW5tcLfy','W4jhWRZdOG','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI93AxrOzhjHD2fS','y2f0y2G','---喂养】:\x20','rmo7aq','j8k0bSk5W4ZdNSoYfSo0WOxdJbhcU8k5W6dcPSo+WQC','6900128bznbXj','keys','ECkQW7O','rmkDW7uJ','W4xdQJFdJa','h8kvE8kF','W6aBl1y','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI9ZAwDUl2LUzgv4','yqpcM8oyhSootq','---签到】:\x20','y3vYrMLYzuDVBgq','DJxdVhlMJANNTzVMLP/OJQZNOiJNIPBVVRC','stringify','s2vLCc1bBgL2zq','Ahr0CdOVl2fWAs55DwfUAhvVEgLUz3fPDs5JB20VDxnLCI9YzxbSzw5PC2GVzw5LCMD5l2fKDG','getdata','W5JdMae1E1pdKCoNWRdcH8ouW59Ah8owWQ3dOa4OjgGZ','AWxcKG','\x0a---当前火源：','W6FcPCkTb8opW7bxWPddTW','cmkYW6C','ls0T5AkE5yQG5O6I57sI44croIa','s8o7aG4','wSovW4rIb8kO','cSoZm8obWRW/q3a','y29Kzq','---补充能量】:\x20','cmo1pW','C295x3LOEhfFvue','D2L0AgrYyxDHBe1VBMv5pq','x3BcOJ7dS8k/W53dVg7cV2bQWPK','sSk4WRu','---用户信息】:\x20','C3bSAxq','gIZdVmoL','y3vYugv0r29Sza','FmoLaUMJG+wmUoAoLoELNEocUaG5W5xcICo35P+R6k2l6k+E5RkJ5AsC6lwh','advLength=D064C56B00058F20&numCount=D064C56B00058F20','ls0T5yg35y+w44croIdOJRFLVPFNGAVMUPa','mSkGWQq/','application/x-www-form-urlencoded','log','BgvUz3rO','g8kxWO7MJ7FNJ4xMJiRNP6tJGRpdJLWFWPeg5P++6k6T6k6G5RoH5AwM6lwW','yCoEjW','http://api.yuanhuoxingqiu.com/user/expedition/pet','expeditionGoldSum','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv95AhHXx0f1DgHVCML6yxrPB24','D8kBW40','W50RW4xcQY/OHkJMNBVMIQ/OOjfHW7P/5y+i5lUC5PwP6zwJ772L','Aw5KzxG','C3rYAw5NAwz5','d3FcQadcSHhdKwRdMCkqW5GxWRO7a1yvW5ddG3RcJSoo','soy_yhxq_UA','index','WQZdMSkoW7bZl8orCSkO','W6jteSk2W7JdS30ibKGDWOH9W5FdMZ7cHNn6iSktjq','xmozo+MHVowoMoocTSkzWQxOJipLV4dNG5RMUkW','f8o1kCodk8ofWOdcJmkdW7ZdLSkRWQW','split','\x0a---当前兽币：','zMXVB3i','b8kdoSk8','hmo3qq4X','ChvZAa','---偷取提示】:\x20API查询请求失败','uCoFW5C','yX1hsW','DCkvW4Dm','rCksW7C','---探索状态】:\x20\x0a---探索时长：','776y5yAf5BMv','cmoIwqmKW7HU','zM9YrwfJAa','mtu1nZGZmuTXsgzLrG','bcNdTgZcVmodWOK','imo/WRq','FmkTW6NdTNldJt7dTgddOSkAWRddS8oBW7pcHmksWPFdPCoWWRCezIVdGSoCDCoUWQXrW5zWWO3cTgpdPd3cUc4xW71tW63dKCk5nhbCWPa','gzip','WPldL8kVW6G','d8knkq','W5asW4nzW6m','api.yuanhuoxingqiu.com','aCkZW7y','ode1qJvgmJiYntHemtDfqtC4nJm3qZy5nJzdnKq2reu','round','http://api.yuanhuoxingqiu.com/user/pet/feed/index','vCkwBwa5WQJcLCkUE8olW7GVfvnOW7BcVmoxpID/WPu','W7qNWRq','BSoEjbu','parse','ycvo','nJKWmdeYogj6BMjyAG','uSoBW5Dg','WQxdJ2inWPldImkDW7VdHCooiq','W5mCW4H1W7/dOSoJiCo8dcC','http://api.yuanhuoxingqiu.com/user/prop/use/power','30CGwmEC','soy_yhxq_Authorization','zgf0yq','AH3cQ8oF','WRNdUSo4','WRvEW4DsfSkMW6icW5BcGIe','17615EIjugr','done','---探索】:\x20','ls0T5BM/5zgk6kgL5zgk6io96yEp44croIa','j8kIaa','d3FcQadcSHhdKwRdMCkeW6W','WRr5W77LUlRLKkpOOitLK4BOGRRPHBNJG6nPW58','ehFcTG','c0C2W7i','DWJcTmotW6NcJ8kVvmkP','yeXy','data','Bearer\x20','---用户信息提示】:\x20API查询请求失败','or5ihq','y8oqlru','zmoFjbvMss4','】：未填写相应变量\x20soy_yhxq_Authorization','w8ojW4q','mZuXnJK0swnkBw1T','4UtSjbs','nbbbhq','nSkTwW','ls0T5AkE5yQG5O6I57sI5O+q56s644croIbbueNMN6xOR6lOR7FMSylLPlhOTku','ls0T5zAc5yw744croIa','jftcRa/dJW','ESk4W7ddOW','Bg9N','14tfeoYC','cCk9W6vf','z2v0zgf0yq','WRhcQtJcSdVdHmor','iq4s5OYa542+44cYWPtdTG','\x0a开始【第\x20','indexOf','kLrwWQtcPKFdNmk3WPhcT0NcKM5FW78FmG','C295x3LOEhfFqxv0Ag9YAxPHDgLVBG','msg','BxnN','cmojl+MILUwoU+AnS+E3H+AmM+ELVoodQ8oKFYzSuEADKoISSEITLEAWKUwLOUI1PW','h8oOxHm','W7xKUR/OTRNLJPtJGRlcGqBdTmks','rxhcTsxcKHldNa','u8ktW7GDbrxdVwxcVq/dKdqZWOqqqJJdIeTMW6bE','WRT4aKK','http://api.yuanhuoxingqiu.com/user/pet/feed','WRpdGCkB','AxnoB2rL','WO5xDHRMJj/NT4lML6BOJkBNGBFMUBZVV7u','timeAdv=1','cSoPwW','name','---签到状态】:\x20','W4bjWRy','Cg9ZDa','W5mdW51dW7i','Aw5KzxHpzG','hJFdVgdcSa','logErr','WOBcMLxOOi/LHyFOG4BPHABJGOFdLCoM','WQPEW5LihCk8','Keep-Alive','fCoKW6RcOLBcHmkxW4JcMZ/dQW','post','W74XWQCHcbxdRq','W7/cNs1p','z2v0','wait','get','lSkJeq','EMGTq04SEMG7Ct0WlJG','CgfYC2u','env','stealFireGold','ios4QUI0PUwpT+s7U+wkOEoaKq','A2v5CW','length','nJu3nLjlrxDizq','g8kxWO7POQhLJQpMJBJNT7ZJGRpdJLW','expeditionPetGold','，兽币','sSkmCG','\x0a---探索收获兽币：','smk2WR/dVG','qmkAyuDggtu','WRdcOZ7cKtVdK8oy','Fc9DW7GRWQ3dQGBdGq','ls0T6Akg5y+w44croIa','Bg9NrxjY','WRBdGmkyW7XLb8oE','EUAoUUENJ+ocQo+9QoAEIoApPos+OowpHEMgNmoDWO8Hu8koW6tdPmkAAwpcPCkkW78n5Bog6BI/6k2X5yI06yAn','todaySignIn','code','z2v0vgLTzxPVBMvpzMzZzxq','---喂养提示】:\x20API查询请求失败','cCoUxWicW6nJcsJdHKdcJGrh','WQv3WPBdSMbF','iSoXWR7dRa','ytLo','BMfTzq','numCount=962C66843030FB65&advLength=962C66843030FB65','surplusCount','ls0T562+5yIW5O+q56s644croIbbueNMN6xOR6lOR7FMSylLPlhOTku','ifeh6AkO5y2n5O6757sp44gVW6lcQq','yrnnA8oPAW','expeditionTime','htldO2e','http://api.yuanhuoxingqiu.com/user/get/petAll','i07dUoEuTUAjOUs9SUAdL+ocQSkntSoAig7cRUEwGoAkH+AAI+EMQo+8Ga','zw52'];_0x4a3c=function(){return _0x1599d0;};return _0x4a3c();}function yhxq_expedition(){return new Promise(_0x2c0155=>{const _0x4ccd1e=_0x50c6;let _0x5c4fb2=get_request(_0x4ccd1e(0x1a3));$['get'](_0x5c4fb2,async(_0x504816,_0x3d827d,_0x3ca107)=>{const _0x9bd1aa=_0x56a2,_0x3a2aa2=_0x3278,_0x45fa6c=_0x4ccd1e;try{if(_0x504816)console[_0x45fa6c(0x19f)]('\x0a【'+$[_0x3a2aa2(0x17b,'!UJI')]+'---探索提示】:\x20API查询请求失败'),console[_0x45fa6c(0x19f)](JSON[_0x3a2aa2(0x1ad,'H7D#')](_0x504816));else{let _0x526ee6=JSON['parse'](_0x3ca107);_0x526ee6[_0x3a2aa2(0x1f2,'nZ5I')]==0xc8?(console[_0x9bd1aa(0x1f8)]('\x0a【'+$[_0x3a2aa2(0x230,'iTZa')]+_0x45fa6c(0x1bc)+_0x526ee6[_0x9bd1aa(0x1d9)]['expeditionTime']+'\x0a---探索收获源币：'+_0x526ee6['data'][_0x45fa6c(0x22c)]+_0x45fa6c(0x22f)+_0x526ee6[_0x45fa6c(0x1e8)][_0x3a2aa2(0x175,'Xs&i')]+_0x3a2aa2(0x20d,'MJje')+_0x526ee6['data']['expeditionGoldSum']+_0x3a2aa2(0x181,'Go6[')+_0x526ee6[_0x9bd1aa(0x1d9)]['petDebris']),Math['floor'](_0x526ee6[_0x3a2aa2(0x17a,'WAwu')][_0x45fa6c(0x166)]/0x3c)==0x0&&await yhxq_expedition_time(),(_0x526ee6['data']['expeditionPetGold']>0x0||_0x526ee6[_0x3a2aa2(0x179,'1[J&')]['expeditionFireGold']>0x0||_0x526ee6[_0x3a2aa2(0x1d3,'8v6[')][_0x45fa6c(0x1a4)]>0x0||_0x526ee6[_0x9bd1aa(0x1d9)][_0x3a2aa2(0x233,'J]MM')]>0x0)&&await yhxq_expedition_get()):console[_0x9bd1aa(0x1f8)]('\x0a【'+$['name']+_0x45fa6c(0x1df)+_0x526ee6[_0x45fa6c(0x202)]);}}catch(_0xc4e417){$['logErr'](_0xc4e417,_0x3d827d);}finally{_0x2c0155();}});});}function yhxq_expedition_time(){return new Promise(_0x282b74=>{const _0x337192=_0x56a2,_0xb0ef2c=_0x50c6;let _0x32cd57=get_request('http://api.yuanhuoxingqiu.com/user/expedition/add/time',_0xb0ef2c(0x20e));$[_0x337192(0x213)](_0x32cd57,async(_0x599cfe,_0x4a848a,_0x199fc3)=>{const _0x12c8ff=_0x3278,_0x38e856=_0xb0ef2c,_0x2246f1=_0x337192;try{if(_0x599cfe)console[_0x2246f1(0x1f8)]('\x0a【'+$[_0x38e856(0x210)]+_0x2246f1(0x1f4)),console['log'](JSON['stringify'](_0x599cfe));else{let _0x231606=JSON[_0x38e856(0x1d0)](_0x199fc3);_0x231606['code']==0xc8?console['log']('\x0a【'+$[_0x2246f1(0x240)]+_0x2246f1(0x18b)+_0x231606['msg']):console[_0x12c8ff(0x1e4,'Go6[')]('\x0a【'+$[_0x2246f1(0x240)]+_0x38e856(0x16c)+_0x231606[_0x2246f1(0x203)]);}}catch(_0x59344f){$[_0x38e856(0x217)](_0x59344f,_0x4a848a);}finally{_0x282b74();}});});}function yhxq_expedition_get(){return new Promise(_0x2c6010=>{const _0x54ae5a=_0x3278;let _0x550558=get_request(_0x54ae5a(0x1c3,'9!&S'));$[_0x54ae5a(0x1f3,'Rc@p')](_0x550558,async(_0x222be6,_0x817809,_0x3ebda0)=>{const _0xacd674=_0x50c6,_0x2505c2=_0x54ae5a,_0xb94988=_0x56a2;try{if(_0x222be6)console['log']('\x0a【'+$[_0xb94988(0x240)]+_0x2505c2(0x204,'Pk1*')),console[_0x2505c2(0x212,'4B*H')](JSON[_0xb94988(0x1a9)](_0x222be6));else{let _0x3273ba=JSON['parse'](_0x3ebda0);_0x3273ba[_0xb94988(0x18f)]==0xc8?console['log']('\x0a【'+$[_0xacd674(0x210)]+_0x2505c2(0x164,'Lu5*')+_0x3273ba[_0xb94988(0x203)]):console[_0xacd674(0x19f)]('\x0a【'+$[_0xb94988(0x240)]+_0x2505c2(0x22b,'8v6[')+_0x3273ba[_0x2505c2(0x22e,'&n#N')]);}}catch(_0x268044){$['logErr'](_0x268044,_0x817809);}finally{_0x2c6010();}});});}function yhxq_power(){return new Promise(_0xd080d0=>{const _0x3496f5=_0x3278,_0x4fae34=_0x50c6;let _0x4dd238=get_request(_0x4fae34(0x1d6),_0x3496f5(0x1cd,'Pk1*'));$[_0x3496f5(0x205,'MisM')](_0x4dd238,async(_0x3adf78,_0x2d88de,_0x3bf43a)=>{const _0x33208e=_0x4fae34,_0x9d0d68=_0x56a2,_0x117b65=_0x3496f5;try{if(_0x3adf78)console[_0x117b65(0x1db,'u&sU')]('\x0a【'+$[_0x117b65(0x198,'Q9ZB')]+'---补充能量提示】:\x20API查询请求失败'),console[_0x9d0d68(0x1f8)](JSON[_0x9d0d68(0x1a9)](_0x3adf78));else{let _0x57b9ff=JSON[_0x9d0d68(0x224)](_0x3bf43a);_0x57b9ff[_0x117b65(0x209,'ocm1')]==0xc8?console[_0x117b65(0x16d,'4[y9')]('\x0a【'+$[_0x117b65(0x1e5,'4[y9')]+_0x117b65(0x218,'&BsO')+_0x57b9ff[_0x117b65(0x1ce,'Upzc')]):console[_0x33208e(0x19f)]('\x0a【'+$[_0x117b65(0x1c5,'qWrg')]+_0x33208e(0x190)+_0x57b9ff[_0x117b65(0x1ef,'8v6[')]);}}catch(_0x145b84){$[_0x33208e(0x217)](_0x145b84,_0x2d88de);}finally{_0xd080d0();}});});}function yhxq_withdrawal(){return new Promise(_0x4f1ddb=>{const _0x69cee6=_0x3278,_0x126bdd=_0x50c6,_0x5dcece=_0x56a2;let _0x16d1af={'url':_0x5dcece(0x171),'headers':{'Accept-Language':_0x5dcece(0x223),'YhxqSecurity':_0x5dcece(0x1ca),'User-Agent':''+soy_yhxq_UA,'Authorization':_0x126bdd(0x1e9)+soy_yhxq_Authorization,'Content-Type':_0x126bdd(0x19e),'Host':_0x126bdd(0x1c8),'Connection':_0x5dcece(0x183),'Accept-Encoding':_0x126bdd(0x1c4),'Cache-Control':'no-cache'},'body':_0x5dcece(0x193)+money+_0x69cee6(0x200,'n3s1')};$['post'](_0x16d1af,async(_0x5f4006,_0x5d943f,_0x465b8e)=>{const _0x1447a9=_0x126bdd,_0x236f14=_0x5dcece,_0x591643=_0x69cee6;try{if(_0x5f4006)console['log']('\x0a【'+$['name']+_0x591643(0x1a1,'8v6[')),console[_0x591643(0x187,'bGGC')](JSON[_0x236f14(0x1a9)](_0x5f4006));else{$[_0x236f14(0x1f8)](_0x465b8e);let _0x366328=JSON['parse'](_0x465b8e);_0x366328[_0x1447a9(0x239)]==0xc8?(console[_0x591643(0x20b,'H7D#')]('\x0a【'+$[_0x1447a9(0x210)]+_0x591643(0x1fd,'n3s1')+_0x366328[_0x236f14(0x203)]),await yhxq_account()):console[_0x591643(0x1a2,'wkI1')]('\x0a【'+$[_0x236f14(0x240)]+'---提现】:\x20'+_0x366328[_0x236f14(0x203)]);}}catch(_0x4a98f1){$[_0x236f14(0x235)](_0x4a98f1,_0x5d943f);}finally{_0x4f1ddb();}});});}function yhxq_account(){return new Promise(_0x60219c=>{const _0x19ca71=_0x3278;let _0x1a8b31=get_request('http://api.yuanhuoxingqiu.com/user/account');$[_0x19ca71(0x1b8,'8v6[')](_0x1a8b31,async(_0x333759,_0x52cb3b,_0x3d9f91)=>{const _0x591ee2=_0x56a2,_0xcff440=_0x50c6,_0x5004c8=_0x19ca71;try{if(_0x333759)console['log']('\x0a【'+$[_0x5004c8(0x170,'4B*H')]+_0xcff440(0x1ea)),console[_0xcff440(0x19f)](JSON[_0xcff440(0x182)](_0x333759));else{let _0x16a484=JSON[_0xcff440(0x1d0)](_0x3d9f91);_0x16a484[_0x5004c8(0x18c,'!YqW')]==0xc8?(money=_0x16a484[_0x5004c8(0x1b4,'oczy')][_0x591ee2(0x180)],Math[_0xcff440(0x1cb)](money)>=0x32?await yhxq_withdrawal():console['log']('\x0a【'+$[_0x591ee2(0x240)]+_0x5004c8(0x169,'sBXP')+_0x16a484[_0x5004c8(0x17c,'MJje')][_0x5004c8(0x18e,'Os)p')]+_0xcff440(0x188)+_0x16a484[_0xcff440(0x1e8)][_0x591ee2(0x180)]+_0xcff440(0x1b2)+_0x16a484[_0x591ee2(0x1d9)][_0x591ee2(0x199)])):console[_0x591ee2(0x1f8)]('\x0a【'+$[_0x5004c8(0x230,'iTZa')]+_0xcff440(0x196)+_0x16a484[_0xcff440(0x202)]);}}catch(_0x5eea13){$[_0x5004c8(0x18d,'8v6[')](_0x5eea13,_0x52cb3b);}finally{_0x60219c();}});});}function get_request(_0x57db7f,_0x4b4400){const _0x30c29f=_0x3ab4c5,_0x32f8d6=_0x82053a;return{'url':''+_0x57db7f,'headers':{'Accept-Language':_0x32f8d6(0x223),'YhxqSecurity':'5C9C393B02EB4380A5D3CE454C86ED5C','User-Agent':''+soy_yhxq_UA,'Authorization':_0x30c29f(0x1e9)+soy_yhxq_Authorization,'Host':_0x30c29f(0x1c8),'Connection':_0x30c29f(0x21a),'Accept-Encoding':'gzip','Cache-Control':'no-cache'},'body':_0x4b4400};}


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