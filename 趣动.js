/*
软件:趣动Will Go 苹果安卓都有
抓取https://capi.wewillpro.com/开头的保里面找到app_imei和token用#连接，多账号用@隔开。
变量名:Qdck
一天跑一次就行
*/
const _0x41a3f5=_0x411b;(function(_0xa39309,_0x184911){const _0xa9f92e=_0x411b,_0x5ca76f=_0xa39309();while(!![]){try{const _0x1d5a59=parseInt(_0xa9f92e(0x1fc))/0x1+parseInt(_0xa9f92e(0x1c3))/0x2+-parseInt(_0xa9f92e(0x1b6))/0x3*(-parseInt(_0xa9f92e(0x1eb))/0x4)+parseInt(_0xa9f92e(0x1bc))/0x5*(parseInt(_0xa9f92e(0x1d8))/0x6)+parseInt(_0xa9f92e(0x1ac))/0x7+parseInt(_0xa9f92e(0x220))/0x8*(parseInt(_0xa9f92e(0x218))/0x9)+-parseInt(_0xa9f92e(0x214))/0xa*(parseInt(_0xa9f92e(0x19c))/0xb);if(_0x1d5a59===_0x184911)break;else _0x5ca76f['push'](_0x5ca76f['shift']());}catch(_0x355978){_0x5ca76f['push'](_0x5ca76f['shift']());}}}(_0x5552,0xd72d4));function _0x411b(_0x42ebb5,_0x2a7df1){const _0x55524a=_0x5552();return _0x411b=function(_0x411b50,_0x151b55){_0x411b50=_0x411b50-0x16b;let _0x5010ca=_0x55524a[_0x411b50];return _0x5010ca;},_0x411b(_0x42ebb5,_0x2a7df1);}const $=new Env('趣动');let envSplitor=['@','\x0a'],result,resurq,resurp,index,userList=[],usid=0x0,userCount=0x0,OooOo=_0x41a3f5(0x1f5),userCookie=($[_0x41a3f5(0x21a)]()?process['env'][OooOo]:$[_0x41a3f5(0x1ba)](OooOo))||'';const getNowDate=()=>{const _0x22d17a=_0x41a3f5;var _0x52a86e=new Date(),_0x369b81=_0x52a86e[_0x22d17a(0x1a7)](),_0x244868=_0x52a86e[_0x22d17a(0x1e3)]()+0x1,_0x502e50=_0x52a86e[_0x22d17a(0x1ce)]();return _0x244868>=0x1&&_0x244868<=0x9&&(_0x244868='0'+_0x244868),_0x502e50>=0x0&&_0x502e50<=0x9&&(_0x502e50='0'+_0x502e50),_0x369b81+''+_0x244868+_0x502e50;};let qd=[...Array(0xc)][_0x41a3f5(0x1cd)]((_0x177372,_0x245a85)=>_0x245a85+0x1),rd=[...Array(0xf)]['map']((_0x5560d2,_0x42c2d5)=>_0x42c2d5+0x1),cashnum='20000';class UserInfo{constructor(_0x36e190){const _0xd8e715=_0x41a3f5;this['_']=++usid,this['f']=_0xd8e715(0x1e2)+this['_']+']\x20',this['p']=_0x36e190[_0xd8e715(0x19d)]('#')[0x1],this['i']=$[_0xd8e715(0x213)](0x20);}async[_0x41a3f5(0x191)](){const _0x406822=_0x41a3f5;await this['goldWithdrawal'](),await this['uploadstep'](),await this[_0x406822(0x206)]();for(let _0x11ac58 of qd){this['vid']=_0x11ac58,await this['signvideo'](),await this[_0x406822(0x1c4)]();if(this['fx']==0x1)break;}for(let _0x1c72cd of rd){await this['cj']();if(this['b']==0x1)break;}}async[_0x41a3f5(0x20c)](){const _0x452873=_0x41a3f5;this['ts']=Math[_0x452873(0x228)](Date[_0x452873(0x1c2)]()/0x3e8),this[_0x452873(0x171)]=getNowDate(),this['sign']=MD5Encrypt(_0x452873(0x177)+this['i']+_0x452873(0x1b1)+cashnum+_0x452873(0x18b)+this['ts']+'\x22,\x22token\x22:\x22'+this['p']+_0x452873(0x17b)),this['data']=_0x452873(0x1cc)+this['i']+_0x452873(0x1de)+cashnum+_0x452873(0x1b5)+this[_0x452873(0x1e0)]+_0x452873(0x21d)+this['ts']+_0x452873(0x22c)+this['p'],await httpRequest('post',popu(_0x452873(0x19f),this['data'])),result['code']==0xc8&&console['log'](this['f']+'['+cashnum*0.0001+_0x452873(0x1ae)),result['code']!==0xc8&&console[_0x452873(0x1ed)](this['f']+'['+cashnum*0.0001+_0x452873(0x17d)+result['msg']);}async['uploadstep'](){const _0x4ae437=_0x41a3f5;this['ts']=Math[_0x4ae437(0x228)](Date['now']()/0x3e8),this['nyr']=getNowDate(),this['sign']=MD5Encrypt(_0x4ae437(0x177)+this['i']+_0x4ae437(0x1a4)+this['ts']+'\x22,\x22request_time\x22:\x22'+this['ts']+'\x22,\x22token\x22:\x22'+this['p']+_0x4ae437(0x17b)),this['data']=_0x4ae437(0x201)+this['i']+'&app_type=2&app_version=3.0.8&request_time='+this['ts']+_0x4ae437(0x179)+this[_0x4ae437(0x1e0)]+'&sport_type=0&step_count=20480&time_str='+this['ts']+'&time_zone=GMT%2B8&token='+this['p'],await httpRequest(_0x4ae437(0x1d4),popu(_0x4ae437(0x216),this['data'])),result[_0x4ae437(0x1c7)]==0xc8&&console[_0x4ae437(0x1ed)](this['f']+_0x4ae437(0x1c1));}async[_0x41a3f5(0x206)](){const _0x1de5de=_0x41a3f5;this['ts']=Math[_0x1de5de(0x228)](Date[_0x1de5de(0x1c2)]()/0x3e8),this[_0x1de5de(0x171)]=getNowDate(),this[_0x1de5de(0x1e0)]=MD5Encrypt(_0x1de5de(0x177)+this['i']+_0x1de5de(0x170)+this['ts']+_0x1de5de(0x1c8)+this['p']+_0x1de5de(0x17b)),this[_0x1de5de(0x19b)]=_0x1de5de(0x1cc)+this['i']+_0x1de5de(0x1b0)+this['sign']+_0x1de5de(0x1bd)+this['ts']+_0x1de5de(0x198)+this['p'],await httpRequest(_0x1de5de(0x1d4),popu(_0x1de5de(0x1d2),this['data']));for(let _0x22678c of result['data']){this['id']=_0x22678c['id'],this['task_id']=_0x22678c[_0x1de5de(0x178)],this[_0x1de5de(0x180)]=_0x22678c[_0x1de5de(0x1a9)],await $[_0x1de5de(0x20b)](0x5dc),await this['dotask'](),await $[_0x1de5de(0x20b)](0x5dc);}}async[_0x41a3f5(0x183)](){const _0x112efa=_0x41a3f5;this['ts']=Math['round'](Date[_0x112efa(0x1c2)]()/0x3e8),this['nyr']=getNowDate(),this[_0x112efa(0x1e0)]=MD5Encrypt(_0x112efa(0x177)+this['i']+_0x112efa(0x1d6)+this[_0x112efa(0x171)]+_0x112efa(0x1ee)+this['id']+'\x22,\x22model\x22:\x22Redmi\x20Note\x207\x22,\x22os_version\x22:\x22Android10\x22,\x22task_id\x22:\x22'+this['task_id']+'\x22,\x22time_str\x22:\x22'+this['ts']+_0x112efa(0x1c8)+this['p']+_0x112efa(0x17b)),this[_0x112efa(0x19b)]=_0x112efa(0x16f)+this[_0x112efa(0x171)]+_0x112efa(0x1e8)+this['i']+_0x112efa(0x1b0)+this[_0x112efa(0x1e0)]+_0x112efa(0x203)+this[_0x112efa(0x178)]+'&model=Redmi%20Note%207&id='+this['id']+_0x112efa(0x215)+this['ts']+_0x112efa(0x198)+this['p'],await httpRequest(_0x112efa(0x1d4),popu(_0x112efa(0x212),this[_0x112efa(0x19b)])),this['vfb']=result['data']['gold'],console[_0x112efa(0x1ed)](this['f']+_0x112efa(0x1ea)+this[_0x112efa(0x180)]+']\x20'+result[_0x112efa(0x1f3)]),await $['wait'](0x1d4c),await this[_0x112efa(0x21c)]();}async[_0x41a3f5(0x21c)](){const _0x39ed24=_0x41a3f5;this['ts']=Math[_0x39ed24(0x228)](Date['now']()/0x3e8),this['nyr']=getNowDate(),this[_0x39ed24(0x1e0)]=MD5Encrypt(_0x39ed24(0x177)+this['i']+_0x39ed24(0x227)+this['vfb']+_0x39ed24(0x1e5)+this[_0x39ed24(0x178)]+_0x39ed24(0x202)+this['ts']+_0x39ed24(0x1c8)+this['p']+_0x39ed24(0x17b)),this[_0x39ed24(0x19b)]=_0x39ed24(0x1f9)+this[_0x39ed24(0x1e0)]+_0x39ed24(0x203)+this[_0x39ed24(0x178)]+_0x39ed24(0x215)+this['ts']+_0x39ed24(0x1a6)+this['p']+_0x39ed24(0x1af)+this['i']+_0x39ed24(0x1d3)+this[_0x39ed24(0x17e)]+_0x39ed24(0x20a),await httpRequest('post',popu(_0x39ed24(0x1ff),this['data'])),console[_0x39ed24(0x1ed)](this['f']+'观看\x20['+this[_0x39ed24(0x180)]+']任务视频\x20'+result['msg']+'\x0a'),await $[_0x39ed24(0x20b)](0x1d4c);}async[_0x41a3f5(0x195)](){const _0x1c31e1=_0x41a3f5;this['ts']=Math[_0x1c31e1(0x228)](Date[_0x1c31e1(0x1c2)]()/0x3e8),this[_0x1c31e1(0x171)]=getNowDate(),this[_0x1c31e1(0x1e0)]=MD5Encrypt(_0x1c31e1(0x177)+this['i']+_0x1c31e1(0x174)+this['vid']+'\x22,\x22is_adv\x22:\x222\x22,\x22model\x22:\x22Redmi\x20Note\x207\x22,\x22os_version\x22:\x22Android10\x22,\x22time_str\x22:\x22'+this['ts']+_0x1c31e1(0x1c8)+this['p']+'\x22}willgoapi_beijing_api_key'),this['data']=_0x1c31e1(0x189)+this['i']+_0x1c31e1(0x1b0)+this[_0x1c31e1(0x1e0)]+_0x1c31e1(0x200)+this[_0x1c31e1(0x210)]+_0x1c31e1(0x215)+this['ts']+_0x1c31e1(0x198)+this['p'],await httpRequest(_0x1c31e1(0x1d4),popu(_0x1c31e1(0x187),this[_0x1c31e1(0x19b)])),await $[_0x1c31e1(0x20b)](0x1d4c),console[_0x1c31e1(0x1ed)](this['f']+'签到\x20'+result['msg']);if(result[_0x1c31e1(0x1f3)]==_0x1c31e1(0x226))this['fx']=0x1;}async[_0x41a3f5(0x1c4)](){const _0x5ad1dc=_0x41a3f5;this['ts']=Math[_0x5ad1dc(0x228)](Date[_0x5ad1dc(0x1c2)]()/0x3e8),this[_0x5ad1dc(0x171)]=getNowDate(),this[_0x5ad1dc(0x1e0)]=MD5Encrypt(_0x5ad1dc(0x177)+this['i']+_0x5ad1dc(0x174)+this[_0x5ad1dc(0x210)]+_0x5ad1dc(0x1ab)+this['ts']+'\x22,\x22token\x22:\x22'+this['p']+_0x5ad1dc(0x17b)),this[_0x5ad1dc(0x19b)]=_0x5ad1dc(0x1dc)+this['i']+'&app_type=1&app_version=3.0.1&os_version=Android10&sign='+this[_0x5ad1dc(0x1e0)]+'&model=Redmi%20Note%207&id='+this[_0x5ad1dc(0x210)]+'&time_str='+this['ts']+_0x5ad1dc(0x198)+this['p'],await httpRequest(_0x5ad1dc(0x1d4),popu(_0x5ad1dc(0x187),this[_0x5ad1dc(0x19b)])),await $[_0x5ad1dc(0x20b)](0x1964),console['log'](this['f']+_0x5ad1dc(0x1f1)+result[_0x5ad1dc(0x1f3)]);}async['cj'](){const _0xa616b6=_0x41a3f5;this[_0xa616b6(0x19b)]=_0xa616b6(0x224)+this['p'],await httpRequest(_0xa616b6(0x1d4),popu('https://capi.wewillpro.com/wheel/make_draw',this[_0xa616b6(0x19b)])),this['fb']=result[_0xa616b6(0x19b)][_0xa616b6(0x1a1)],this['bs']=result['data'][_0xa616b6(0x229)],console['log'](this['f']+_0xa616b6(0x175)+result['msg']),await $['wait'](0x9c4),await this['cjfb']();}async[_0x41a3f5(0x185)](){const _0x27c13a=_0x41a3f5;this['data']='token='+this['p']+_0x27c13a(0x17a)+this['fb']+_0x27c13a(0x182)+this['bs'],await httpRequest('post',popu(_0x27c13a(0x1bf),this['data'])),this['fb']=result[_0x27c13a(0x19b)][_0x27c13a(0x1a1)],console[_0x27c13a(0x1ed)](this['f']+_0x27c13a(0x175)+result[_0x27c13a(0x1f3)]),await $['wait'](0x1d4c);}}!(async()=>{const _0x531f8e=_0x41a3f5;if(!await checkEnv())return;for(let _0x2252c2 of userList)await _0x2252c2[_0x531f8e(0x191)]();})()[_0x41a3f5(0x1da)](_0x5f9c54=>console[_0x41a3f5(0x1ed)](_0x5f9c54))[_0x41a3f5(0x1b9)](()=>$['done']());function encrypt(_0x221f75){const _0xa1ad16=_0x41a3f5;return CryptoJS[_0xa1ad16(0x1b7)]['encrypt'](_0x221f75,CryptoJS[_0xa1ad16(0x1ca)][_0xa1ad16(0x1df)]['parse'](key),{'iv':CryptoJS[_0xa1ad16(0x1ca)][_0xa1ad16(0x1df)][_0xa1ad16(0x1b3)](iv),'mode':CryptoJS[_0xa1ad16(0x16d)][_0xa1ad16(0x22a)],'padding':CryptoJS[_0xa1ad16(0x222)][_0xa1ad16(0x17c)]})[_0xa1ad16(0x1a3)]();}function decrypt(_0x32d511){const _0x4b7c95=_0x41a3f5;return CryptoJS['AES'][_0x4b7c95(0x16c)](_0x32d511,CryptoJS[_0x4b7c95(0x1ca)]['Utf8'][_0x4b7c95(0x1b3)](key),{'iv':CryptoJS[_0x4b7c95(0x1ca)]['Utf8']['parse'](iv),'mode':CryptoJS[_0x4b7c95(0x16d)][_0x4b7c95(0x22a)],'padding':CryptoJS[_0x4b7c95(0x222)][_0x4b7c95(0x17c)]})[_0x4b7c95(0x1a3)](CryptoJS[_0x4b7c95(0x1ca)][_0x4b7c95(0x1df)]);}function randomInt(_0x5be030,_0x1c2cf8){const _0x8efa18=_0x41a3f5;return Math[_0x8efa18(0x228)](Math[_0x8efa18(0x20e)]()*(_0x1c2cf8-_0x5be030)+_0x5be030);}function MD5Encrypt(_0x329cf4){const _0x43ccf3=_0x41a3f5;function _0x1e7d38(_0x3b794a,_0x4cabb2){return _0x3b794a<<_0x4cabb2|_0x3b794a>>>0x20-_0x4cabb2;}function _0x4deacf(_0x3db345,_0x48d1a1){var _0x2fc2a6,_0x581b5f,_0x141422,_0x414047,_0x39628e;return _0x141422=0x80000000&_0x3db345,_0x414047=0x80000000&_0x48d1a1,_0x2fc2a6=0x40000000&_0x3db345,_0x581b5f=0x40000000&_0x48d1a1,_0x39628e=(0x3fffffff&_0x3db345)+(0x3fffffff&_0x48d1a1),_0x2fc2a6&_0x581b5f?0x80000000^_0x39628e^_0x141422^_0x414047:_0x2fc2a6|_0x581b5f?0x40000000&_0x39628e?0xc0000000^_0x39628e^_0x141422^_0x414047:0x40000000^_0x39628e^_0x141422^_0x414047:_0x39628e^_0x141422^_0x414047;}function _0x44d2e6(_0x1e2e43,_0x58259a,_0x2868b6,_0x265509,_0x537605,_0x4c08ca,_0x41efae){var _0x3653c4,_0x11c3e1;return _0x1e2e43=_0x4deacf(_0x1e2e43,_0x4deacf(_0x4deacf((_0x3653c4=_0x58259a)&(_0x11c3e1=_0x2868b6)|~_0x3653c4&_0x265509,_0x537605),_0x41efae)),_0x4deacf(_0x1e7d38(_0x1e2e43,_0x4c08ca),_0x58259a);}function _0x2827ea(_0x2d0a36,_0x421144,_0x575cf6,_0x299baf,_0xd22bd5,_0x430aed,_0x3f08e3){var _0x379d04,_0x3a4a05,_0x60e850;return _0x2d0a36=_0x4deacf(_0x2d0a36,_0x4deacf(_0x4deacf((_0x379d04=_0x421144,_0x3a4a05=_0x575cf6,_0x379d04&(_0x60e850=_0x299baf)|_0x3a4a05&~_0x60e850),_0xd22bd5),_0x3f08e3)),_0x4deacf(_0x1e7d38(_0x2d0a36,_0x430aed),_0x421144);}function _0x39901c(_0x23f51e,_0x5b12d8,_0x368892,_0x44cfb3,_0x1e5d05,_0x8fbd17,_0x2d0f9a){var _0x5d143a,_0xd314e9;return _0x23f51e=_0x4deacf(_0x23f51e,_0x4deacf(_0x4deacf((_0x5d143a=_0x5b12d8)^(_0xd314e9=_0x368892)^_0x44cfb3,_0x1e5d05),_0x2d0f9a)),_0x4deacf(_0x1e7d38(_0x23f51e,_0x8fbd17),_0x5b12d8);}function _0x44f625(_0x241c3d,_0x32fd28,_0x168fc6,_0x533d2c,_0x27e68c,_0x4524ce,_0x407626){var _0x136c37,_0x291d36;return _0x241c3d=_0x4deacf(_0x241c3d,_0x4deacf(_0x4deacf((_0x136c37=_0x32fd28,(_0x291d36=_0x168fc6)^(_0x136c37|~_0x533d2c)),_0x27e68c),_0x407626)),_0x4deacf(_0x1e7d38(_0x241c3d,_0x4524ce),_0x32fd28);}function _0x21a46b(_0xbb72c0){const _0x58bf63=_0x411b;var _0x14b744,_0x24a1a7='',_0x59b618='';for(_0x14b744=0x0;0x3>=_0x14b744;_0x14b744++)_0x24a1a7+=(_0x59b618='0'+(_0xbb72c0>>>0x8*_0x14b744&0xff)[_0x58bf63(0x1a3)](0x10))[_0x58bf63(0x207)](_0x59b618[_0x58bf63(0x205)]-0x2,0x2);return _0x24a1a7;}var _0x195f84,_0x31f524,_0x31d3cf,_0x1c019c,_0x5d094b,_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097=[];for(_0x372097=function(_0x9d8266){const _0xf7d0f4=_0x411b;for(var _0x2bef3b,_0x441ce1=_0x9d8266[_0xf7d0f4(0x205)],_0x5aef40=_0x441ce1+0x8,_0x3475c6=0x10*((_0x5aef40-_0x5aef40%0x40)/0x40+0x1),_0x4fad62=Array(_0x3475c6-0x1),_0x1400eb=0x0,_0x294ba9=0x0;_0x441ce1>_0x294ba9;)_0x2bef3b=(_0x294ba9-_0x294ba9%0x4)/0x4,_0x1400eb=_0x294ba9%0x4*0x8,_0x4fad62[_0x2bef3b]=_0x4fad62[_0x2bef3b]|_0x9d8266[_0xf7d0f4(0x16b)](_0x294ba9)<<_0x1400eb,_0x294ba9++;return _0x2bef3b=(_0x294ba9-_0x294ba9%0x4)/0x4,_0x1400eb=_0x294ba9%0x4*0x8,_0x4fad62[_0x2bef3b]=_0x4fad62[_0x2bef3b]|0x80<<_0x1400eb,_0x4fad62[_0x3475c6-0x2]=_0x441ce1<<0x3,_0x4fad62[_0x3475c6-0x1]=_0x441ce1>>>0x1d,_0x4fad62;}(_0x329cf4=function(_0x37c1ad){const _0x3604b3=_0x411b;_0x37c1ad=_0x37c1ad[_0x3604b3(0x1e9)](/\r\n/g,'\x0a');for(var _0x358dc9='',_0xacadf4=0x0;_0xacadf4<_0x37c1ad[_0x3604b3(0x205)];_0xacadf4++){var _0x531dd9=_0x37c1ad[_0x3604b3(0x16b)](_0xacadf4);0x80>_0x531dd9?_0x358dc9+=String['fromCharCode'](_0x531dd9):_0x531dd9>0x7f&&0x800>_0x531dd9?(_0x358dc9+=String[_0x3604b3(0x1e1)](_0x531dd9>>0x6|0xc0),_0x358dc9+=String[_0x3604b3(0x1e1)](0x3f&_0x531dd9|0x80)):(_0x358dc9+=String[_0x3604b3(0x1e1)](_0x531dd9>>0xc|0xe0),_0x358dc9+=String[_0x3604b3(0x1e1)](_0x531dd9>>0x6&0x3f|0x80),_0x358dc9+=String[_0x3604b3(0x1e1)](0x3f&_0x531dd9|0x80));}return _0x358dc9;}(_0x329cf4)),_0xfa5e1b=0x67452301,_0x38c426=0xefcdab89,_0x252a0c=0x98badcfe,_0x3c6aa0=0x10325476,_0x195f84=0x0;_0x195f84<_0x372097[_0x43ccf3(0x205)];_0x195f84+=0x10)_0x31f524=_0xfa5e1b,_0x31d3cf=_0x38c426,_0x1c019c=_0x252a0c,_0x5d094b=_0x3c6aa0,_0xfa5e1b=_0x44d2e6(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x0],0x7,0xd76aa478),_0x3c6aa0=_0x44d2e6(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x1],0xc,0xe8c7b756),_0x252a0c=_0x44d2e6(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x2],0x11,0x242070db),_0x38c426=_0x44d2e6(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x3],0x16,0xc1bdceee),_0xfa5e1b=_0x44d2e6(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x4],0x7,0xf57c0faf),_0x3c6aa0=_0x44d2e6(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x5],0xc,0x4787c62a),_0x252a0c=_0x44d2e6(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x6],0x11,0xa8304613),_0x38c426=_0x44d2e6(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x7],0x16,0xfd469501),_0xfa5e1b=_0x44d2e6(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x8],0x7,0x698098d8),_0x3c6aa0=_0x44d2e6(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x9],0xc,0x8b44f7af),_0x252a0c=_0x44d2e6(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xa],0x11,0xffff5bb1),_0x38c426=_0x44d2e6(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0xb],0x16,0x895cd7be),_0xfa5e1b=_0x44d2e6(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0xc],0x7,0x6b901122),_0x3c6aa0=_0x44d2e6(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0xd],0xc,0xfd987193),_0x252a0c=_0x44d2e6(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xe],0x11,0xa679438e),_0x38c426=_0x44d2e6(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0xf],0x16,0x49b40821),_0xfa5e1b=_0x2827ea(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x1],0x5,0xf61e2562),_0x3c6aa0=_0x2827ea(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x6],0x9,0xc040b340),_0x252a0c=_0x2827ea(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xb],0xe,0x265e5a51),_0x38c426=_0x2827ea(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x0],0x14,0xe9b6c7aa),_0xfa5e1b=_0x2827ea(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x5],0x5,0xd62f105d),_0x3c6aa0=_0x2827ea(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0xa],0x9,0x2441453),_0x252a0c=_0x2827ea(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xf],0xe,0xd8a1e681),_0x38c426=_0x2827ea(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x4],0x14,0xe7d3fbc8),_0xfa5e1b=_0x2827ea(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x9],0x5,0x21e1cde6),_0x3c6aa0=_0x2827ea(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0xe],0x9,0xc33707d6),_0x252a0c=_0x2827ea(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x3],0xe,0xf4d50d87),_0x38c426=_0x2827ea(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x8],0x14,0x455a14ed),_0xfa5e1b=_0x2827ea(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0xd],0x5,0xa9e3e905),_0x3c6aa0=_0x2827ea(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x2],0x9,0xfcefa3f8),_0x252a0c=_0x2827ea(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x7],0xe,0x676f02d9),_0x38c426=_0x2827ea(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0xc],0x14,0x8d2a4c8a),_0xfa5e1b=_0x39901c(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x5],0x4,0xfffa3942),_0x3c6aa0=_0x39901c(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x8],0xb,0x8771f681),_0x252a0c=_0x39901c(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xb],0x10,0x6d9d6122),_0x38c426=_0x39901c(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0xe],0x17,0xfde5380c),_0xfa5e1b=_0x39901c(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x1],0x4,0xa4beea44),_0x3c6aa0=_0x39901c(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x4],0xb,0x4bdecfa9),_0x252a0c=_0x39901c(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x7],0x10,0xf6bb4b60),_0x38c426=_0x39901c(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0xa],0x17,0xbebfbc70),_0xfa5e1b=_0x39901c(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0xd],0x4,0x289b7ec6),_0x3c6aa0=_0x39901c(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x0],0xb,0xeaa127fa),_0x252a0c=_0x39901c(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x3],0x10,0xd4ef3085),_0x38c426=_0x39901c(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x6],0x17,0x4881d05),_0xfa5e1b=_0x39901c(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x9],0x4,0xd9d4d039),_0x3c6aa0=_0x39901c(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0xc],0xb,0xe6db99e5),_0x252a0c=_0x39901c(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xf],0x10,0x1fa27cf8),_0x38c426=_0x39901c(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x2],0x17,0xc4ac5665),_0xfa5e1b=_0x44f625(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x0],0x6,0xf4292244),_0x3c6aa0=_0x44f625(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x7],0xa,0x432aff97),_0x252a0c=_0x44f625(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xe],0xf,0xab9423a7),_0x38c426=_0x44f625(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x5],0x15,0xfc93a039),_0xfa5e1b=_0x44f625(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0xc],0x6,0x655b59c3),_0x3c6aa0=_0x44f625(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0x3],0xa,0x8f0ccc92),_0x252a0c=_0x44f625(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0xa],0xf,0xffeff47d),_0x38c426=_0x44f625(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x1],0x15,0x85845dd1),_0xfa5e1b=_0x44f625(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x8],0x6,0x6fa87e4f),_0x3c6aa0=_0x44f625(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0xf],0xa,0xfe2ce6e0),_0x252a0c=_0x44f625(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x6],0xf,0xa3014314),_0x38c426=_0x44f625(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0xd],0x15,0x4e0811a1),_0xfa5e1b=_0x44f625(_0xfa5e1b,_0x38c426,_0x252a0c,_0x3c6aa0,_0x372097[_0x195f84+0x4],0x6,0xf7537e82),_0x3c6aa0=_0x44f625(_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x252a0c,_0x372097[_0x195f84+0xb],0xa,0xbd3af235),_0x252a0c=_0x44f625(_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x38c426,_0x372097[_0x195f84+0x2],0xf,0x2ad7d2bb),_0x38c426=_0x44f625(_0x38c426,_0x252a0c,_0x3c6aa0,_0xfa5e1b,_0x372097[_0x195f84+0x9],0x15,0xeb86d391),_0xfa5e1b=_0x4deacf(_0xfa5e1b,_0x31f524),_0x38c426=_0x4deacf(_0x38c426,_0x31d3cf),_0x252a0c=_0x4deacf(_0x252a0c,_0x1c019c),_0x3c6aa0=_0x4deacf(_0x3c6aa0,_0x5d094b);return(_0x21a46b(_0xfa5e1b)+_0x21a46b(_0x38c426)+_0x21a46b(_0x252a0c)+_0x21a46b(_0x3c6aa0))['toLowerCase']();}function _0x5552(){const _0x1f2624=['246023xFXrmm','object','open-url','https://capi.wewillpro.com/task/viewAdComplete','&model=Redmi%20Note%207&id=','app_channel=Apple_iPhone15%2C2_16.1&app_imei=','\x22,\x22time_str\x22:\x22','&task_id=','isLoon','length','gettasklist','substr','fetch','lodash_get','&model=Redmi%20Note%207&brand=xiaomi','wait','goldWithdrawal','floor','random','timeout','vid','getSeconds','https://capi.wewillpro.com/task/pickTaskReward','randomString','50oMvxyP','&time_str=','https://capi.wewillpro.com/sport/addSportRecord','body','18iJVVNG','Content-Type','isNode','env','videotask','&pay_type=1&model=ONEPLUS%20A6000&time_str=','headers','got','2384592CfDrSR','method','pad','无效的http方法：','token=','name','今日任务已经做完','\x22,\x22app_type\x22:\x221\x22,\x22app_version\x22:\x223.0.1\x22,\x22award_amount\x22:\x22','round','award_multi_num','CBC','isMute','&brand=OnePlus&token=','send','charCodeAt','decrypt','mode','string','date=','\x22,\x22app_type\x22:\x221\x22,\x22app_version\x22:\x223.0.1\x22,\x22brand\x22:\x22xiaomi\x22,\x22model\x22:\x22Redmi\x20Note\x207\x22,\x22os_version\x22:\x22Android10\x22,\x22time_str\x22:\x22','nyr','gzip','\x0a==============\x20推送\x20==============','\x22,\x22app_type\x22:\x221\x22,\x22app_version\x22:\x223.0.1\x22,\x22brand\x22:\x22xiaomi\x22,\x22id\x22:\x22','抽奖\x20','padStr','{\x22app_imei\x22:\x22','task_id','&sign=','&award_type=gold&award_amount=','\x22}willgoapi_beijing_api_key','ZeroPadding',']元\x20提现失败\x20','vfb','openUrl','idnm','instance','&multi=','dotask','join','cjfb','toUpperCase','https://capi.wewillpro.com/gold/user_gold_sign','lodash_set','is_adv=2&app_imei=','assign','\x22,\x22os_version\x22:\x22Android10\x22,\x22pay_type\x22:\x221\x22,\x22time_str\x22:\x22','application/x-www-form-urlencoded','isNeedRewrite','get','str2json','stringify','task','getMax','loaddata','read','signvideo','\x20运行通知\x0a\x0a','done','&brand=xiaomi&token=','isQuanX','randomList','data','5867598aMgAJn','split','url','https://capi.wewillpro.com/balance/goldWithdrawal','setdata','award_amount','test','toString','\x22,\x22app_type\x22:\x222\x22,\x22app_version\x22:\x223.0.1\x22,\x22time_zone\x22:\x22GMT%2B8\x22,\x22app_channel\x22:\x22Apple_iPhone15%2C2_16.1\x22,\x22sport_type\x22:\x220\x22,\x22sport_\x20count\x22:\x2210000\x22,\x22time_str\x22:\x22','writedata','&award_type=gold&token=','getFullYear','valueForKey','task_description','个账号','\x22,\x22is_adv\x22:\x221\x22,\x22model\x22:\x22Redmi\x20Note\x207\x22,\x22os_version\x22:\x22Android10\x22,\x22time_str\x22:\x22','1193395yGoivv','push',']元\x20提现成功','&multi=3&app_imei=','&app_type=1&app_version=3.0.1&os_version=Android10&sign=','\x22,\x22app_type\x22:\x221\x22,\x22app_version\x22:\x223.0.0\x22,\x22brand\x22:\x22OnePlus\x22,\x22model\x22:\x22ONEPLUS\x20A6000\x22,\x22num\x22:\x22','getTime','parse','getMin','&os_version=Android10&sign=','4055001UPcKbk','AES','setValueForKey','finally','getdata','startTime','10eEucTj','&model=Redmi%20Note%207&time_str=','setval','https://capi.wewillpro.com/wheel/view_ad_complete','isSurge','运动\x20上传成功','now','1791894LloukJ','signvideofb','\x20运行结束，共运行了\x20','sort','code','\x22,\x22token\x22:\x22','null','enc','mediaUrl','app_imei=','map','getDate','\x20开始运行：\x0a','extend','media-url','https://capi.wewillpro.com/task/getTodayTaskList','&award_amount=','post','opts','\x22,\x22app_type\x22:\x221\x22,\x22app_version\x22:\x223.0.1\x22,\x22brand\x22:\x22xiaomi\x22,\x22date\x22:\x22','then','864552YWbHjI','sendNotify','catch','indexOf','is_adv=1&app_imei=','getval','&app_type=1&app_version=3.0.0&num=','Utf8','sign','fromCharCode','账号\x20[','getMonth','getHours','\x22,\x22award_type\x22:\x22gold\x22,\x22brand\x22:\x22xiaomi\x22,\x22model\x22:\x22Redmi\x20Note\x207\x22,\x22multi\x22:\x223\x22,\x22os_version\x22:\x22Android10\x22,\x22task_id\x22:\x22','write','charAt','&app_imei=','replace','去完成\x20[','4yotnNI','put','log','\x22,\x22id\x22:\x22','exit','abcdef0123456789','观看签到视频\x20','./sendNotify','msg','getMinutes','Qdck','delete','notifyStr','exec','app_type=1&app_version=3.0.1&os_version=Android10&sign=','undefined','keys'];_0x5552=function(){return _0x1f2624;};return _0x5552();}async function checkEnv(){const _0x1ddcbb=_0x41a3f5;if(userCookie){let _0x393142=envSplitor[0x0];for(let _0xa3d95b of envSplitor)if(userCookie['indexOf'](_0xa3d95b)>-0x1){_0x393142=_0xa3d95b;break;}for(let _0x476210 of userCookie[_0x1ddcbb(0x19d)](_0x393142))_0x476210&&userList[_0x1ddcbb(0x1ad)](new UserInfo(_0x476210));userCount=userList[_0x1ddcbb(0x205)];}else console[_0x1ddcbb(0x1ed)]('未找到任何账号');return console[_0x1ddcbb(0x1ed)]('找到\x20'+userCount+_0x1ddcbb(0x1aa)),!0x0;}function popu(_0x57ac85,_0x56ffde=''){const _0x13be07=_0x41a3f5;_0x57ac85[_0x13be07(0x1e9)]('//','/')[_0x13be07(0x19d)]('/')[0x1];let _0x5ef69c={'url':_0x57ac85,'headers':{'deviceid':this['i'],'accept-encoding':_0x13be07(0x172),'Content-Type':_0x13be07(0x18c),'appversion':'3.0.1','Host':'capi.wewillpro.com','brand':'xiaomi','Accept-Language':'zh-Hans-CN;q=1,\x20ja-CN;q=0.9'},'timeout':0x2ee0};return _0x56ffde&&(_0x5ef69c[_0x13be07(0x217)]=_0x56ffde,_0x5ef69c[_0x13be07(0x21e)]['Content-Length']=_0x56ffde?.[_0x13be07(0x205)]||0x0),_0x5ef69c;}async function httpRequest(_0x45c129,_0x2dcd66){return result=null,resurq=null,resurp=null,new Promise(_0x4b3b32=>{const _0x16b0cc=_0x411b;$[_0x16b0cc(0x22d)](_0x45c129,_0x2dcd66,async(_0x36e728,_0x1ee56,_0x49ebcc)=>{const _0x4af428=_0x16b0cc;try{if(resurq=_0x1ee56,resurp=_0x49ebcc,_0x36e728);else{if(_0x49ebcc[_0x4af428(0x217)]){if(_0x4af428(0x1fd)==typeof _0x49ebcc['body'])result=_0x49ebcc[_0x4af428(0x217)];else try{result=JSON[_0x4af428(0x1b3)](_0x49ebcc[_0x4af428(0x217)]);}catch(_0x8f45e){result=_0x49ebcc['body'];}}}}catch(_0x5d8b10){console[_0x4af428(0x1ed)](_0x5d8b10);}finally{_0x4b3b32();}});});}function Env(_0x3057aa,_0x4e3576){const _0x23c2ba=_0x41a3f5;return _0x23c2ba(0x1fa)!=typeof process&&JSON[_0x23c2ba(0x190)](process[_0x23c2ba(0x21b)])[_0x23c2ba(0x1db)]('GITHUB')>-0x1&&process[_0x23c2ba(0x1ef)](0x0),new class{constructor(_0x26e7a5,_0x1412ca){const _0x276a7f=_0x23c2ba;this['name']=_0x26e7a5,this[_0x276a7f(0x1f7)]='',this[_0x276a7f(0x1bb)]=new Date()[_0x276a7f(0x1b2)](),Object[_0x276a7f(0x18a)](this,_0x1412ca),console[_0x276a7f(0x1ed)](this[_0x276a7f(0x225)]+_0x276a7f(0x1cf));}[_0x23c2ba(0x21a)](){return'undefined'!=typeof module&&!!module['exports'];}['isQuanX'](){const _0x14b09d=_0x23c2ba;return _0x14b09d(0x1fa)!=typeof $task;}[_0x23c2ba(0x1c0)](){const _0x449c7a=_0x23c2ba;return'undefined'!=typeof $httpClient&&_0x449c7a(0x1fa)==typeof $loon;}[_0x23c2ba(0x204)](){const _0xdd920d=_0x23c2ba;return _0xdd920d(0x1fa)!=typeof $loon;}[_0x23c2ba(0x1ba)](_0x3bcfe5){const _0x1f36f1=_0x23c2ba;let _0x4cbec5=this['getval'](_0x3bcfe5);if(/^@/[_0x1f36f1(0x1a2)](_0x3bcfe5)){let [,_0xc2178d,_0xb31b3f]=/^@(.*?)\.(.*?)$/[_0x1f36f1(0x1f8)](_0x3bcfe5),_0x128930=_0xc2178d?this[_0x1f36f1(0x1dd)](_0xc2178d):'';if(_0x128930)try{let _0x3de977=JSON[_0x1f36f1(0x1b3)](_0x128930);_0x4cbec5=_0x3de977?this[_0x1f36f1(0x209)](_0x3de977,_0xb31b3f,''):_0x4cbec5;}catch(_0x5425bb){_0x4cbec5='';}}return _0x4cbec5;}[_0x23c2ba(0x1a0)](_0x240286,_0x324505){const _0x407962=_0x23c2ba;let _0x2a6aba=!0x1;if(/^@/[_0x407962(0x1a2)](_0x324505)){let [,_0x30a86a,_0x398419]=/^@(.*?)\.(.*?)$/['exec'](_0x324505),_0x86a693=this['getval'](_0x30a86a);try{let _0x5bc2fd=JSON[_0x407962(0x1b3)](_0x30a86a?_0x407962(0x1c9)===_0x86a693?null:_0x86a693||'{}':'{}');this[_0x407962(0x188)](_0x5bc2fd,_0x398419,_0x240286),_0x2a6aba=this['setval'](JSON[_0x407962(0x190)](_0x5bc2fd),_0x30a86a);}catch(_0x5f1c2e){let _0x19f131={};this[_0x407962(0x188)](_0x19f131,_0x398419,_0x240286),_0x2a6aba=this[_0x407962(0x1be)](JSON[_0x407962(0x190)](_0x19f131),_0x30a86a);}}else _0x2a6aba=this[_0x407962(0x1be)](_0x240286,_0x324505);return _0x2a6aba;}[_0x23c2ba(0x1dd)](_0x4be052){const _0x1300af=_0x23c2ba;return this[_0x1300af(0x1c0)]()||this[_0x1300af(0x204)]()?$persistentStore[_0x1300af(0x194)](_0x4be052):this[_0x1300af(0x199)]()?$prefs[_0x1300af(0x1a8)](_0x4be052):this['isNode']()?(this[_0x1300af(0x19b)]=this[_0x1300af(0x193)](),this['data'][_0x4be052]):this[_0x1300af(0x19b)]&&this[_0x1300af(0x19b)][_0x4be052]||null;}[_0x23c2ba(0x1be)](_0x3761b9,_0x12b981){const _0x24ed7f=_0x23c2ba;return this[_0x24ed7f(0x1c0)]()||this['isLoon']()?$persistentStore[_0x24ed7f(0x1e6)](_0x3761b9,_0x12b981):this[_0x24ed7f(0x199)]()?$prefs[_0x24ed7f(0x1b8)](_0x3761b9,_0x12b981):this[_0x24ed7f(0x21a)]()?(this[_0x24ed7f(0x19b)]=this[_0x24ed7f(0x193)](),this['data'][_0x12b981]=_0x3761b9,this[_0x24ed7f(0x1a5)](),!0x0):this[_0x24ed7f(0x19b)]&&this['data'][_0x12b981]||null;}['send'](_0x43abdb,_0xb76292,_0x33bb7a=()=>{}){const _0x50645b=_0x23c2ba;if(_0x50645b(0x18e)!=_0x43abdb&&_0x50645b(0x1d4)!=_0x43abdb&&_0x50645b(0x1ec)!=_0x43abdb&&_0x50645b(0x1f6)!=_0x43abdb){console[_0x50645b(0x1ed)](_0x50645b(0x223)+_0x43abdb);return;}if(_0x50645b(0x18e)==_0x43abdb&&_0xb76292[_0x50645b(0x21e)]?(delete _0xb76292['headers'][_0x50645b(0x219)],delete _0xb76292[_0x50645b(0x21e)]['Content-Length']):_0xb76292[_0x50645b(0x217)]&&_0xb76292[_0x50645b(0x21e)]&&(_0xb76292[_0x50645b(0x21e)][_0x50645b(0x219)]||(_0xb76292[_0x50645b(0x21e)]['Content-Type']='application/x-www-form-urlencoded')),this[_0x50645b(0x1c0)]()||this[_0x50645b(0x204)]()){this[_0x50645b(0x1c0)]()&&this[_0x50645b(0x18d)]&&(_0xb76292[_0x50645b(0x21e)]=_0xb76292['headers']||{},Object[_0x50645b(0x18a)](_0xb76292['headers'],{'X-Surge-Skip-Scripting':!0x1}));let _0x36cb33={'method':_0x43abdb,'url':_0xb76292[_0x50645b(0x19e)],'headers':_0xb76292[_0x50645b(0x21e)],'timeout':_0xb76292[_0x50645b(0x20f)],'data':_0xb76292[_0x50645b(0x217)]};_0x50645b(0x18e)==_0x43abdb&&delete _0x36cb33[_0x50645b(0x19b)],$axios(_0x36cb33)['then'](_0x3bad67=>{let {status:_0x54a2e0,request:_0x9a2540,headers:_0x8a2124,data:_0x38b0dc}=_0x3bad67;_0x33bb7a(null,_0x9a2540,{'statusCode':_0x54a2e0,'headers':_0x8a2124,'body':_0x38b0dc});})[_0x50645b(0x1da)](_0x18f029=>console[_0x50645b(0x1ed)](_0x18f029));}else{if(this[_0x50645b(0x199)]())_0xb76292[_0x50645b(0x221)]=_0x43abdb[_0x50645b(0x186)](),this[_0x50645b(0x18d)]&&(_0xb76292[_0x50645b(0x1d5)]=_0xb76292['opts']||{},Object[_0x50645b(0x18a)](_0xb76292['opts'],{'hints':!0x1})),$task[_0x50645b(0x208)](_0xb76292)[_0x50645b(0x1d7)](_0x48a3b8=>{let {statusCode:_0x203419,request:_0x59bd14,headers:_0x5003ba,body:_0x328c99}=_0x48a3b8;_0x33bb7a(null,_0x59bd14,{'statusCode':_0x203419,'headers':_0x5003ba,'body':_0x328c99});},_0x5b27b2=>_0x33bb7a(_0x5b27b2));else{if(this[_0x50645b(0x21a)]()){this['got']=this[_0x50645b(0x21f)]?this['got']:require(_0x50645b(0x21f));let {url:_0x237376,..._0x2b1480}=_0xb76292;this[_0x50645b(0x181)]=this[_0x50645b(0x21f)][_0x50645b(0x1d0)]({'followRedirect':!0x1}),this[_0x50645b(0x181)][_0x43abdb](_0x237376,_0x2b1480)[_0x50645b(0x1d7)](_0x56cac5=>{let {statusCode:_0xbd72ca,request:_0x7a38ce,headers:_0x41a2d0,body:_0x6cfb83}=_0x56cac5;_0x33bb7a(null,_0x7a38ce,{'statusCode':_0xbd72ca,'headers':_0x41a2d0,'body':_0x6cfb83});},_0x1a6300=>{let {message:_0x193277,response:_0x1abdf4}=_0x1a6300;_0x33bb7a(_0x193277,_0x1abdf4,_0x1abdf4&&_0x1abdf4['body']);});}}}}['time'](_0x4cddae){const _0x8f863f=_0x23c2ba;let _0x251499={'M+':new Date()['getMonth']()+0x1,'d+':new Date()[_0x8f863f(0x1ce)](),'h+':new Date()[_0x8f863f(0x1e4)](),'m+':new Date()[_0x8f863f(0x1f4)](),'s+':new Date()[_0x8f863f(0x211)](),'q+':Math[_0x8f863f(0x20d)]((new Date()['getMonth']()+0x3)/0x3),'S':new Date()['getMilliseconds']()};for(let _0x46331a in(/(y+)/[_0x8f863f(0x1a2)](_0x4cddae)&&(_0x4cddae=_0x4cddae['replace'](RegExp['$1'],(new Date()[_0x8f863f(0x1a7)]()+'')['substr'](0x4-RegExp['$1'][_0x8f863f(0x205)]))),_0x251499))RegExp('('+_0x46331a+')')['test'](_0x4cddae)&&(_0x4cddae=_0x4cddae[_0x8f863f(0x1e9)](RegExp['$1'],0x1==RegExp['$1']['length']?_0x251499[_0x46331a]:('00'+_0x251499[_0x46331a])[_0x8f863f(0x207)]((''+_0x251499[_0x46331a])[_0x8f863f(0x205)])));return _0x4cddae;}async['showmsg'](){const _0x19c7a0=_0x23c2ba;if(!this[_0x19c7a0(0x1f7)])return;let _0x29941f=this[_0x19c7a0(0x225)]+_0x19c7a0(0x196)+this[_0x19c7a0(0x1f7)];if($[_0x19c7a0(0x21a)]()){var _0x437651=require(_0x19c7a0(0x1f2));console[_0x19c7a0(0x1ed)](_0x19c7a0(0x173)),await _0x437651[_0x19c7a0(0x1d9)](this['name'],_0x29941f);}else this['msg'](_0x29941f);}['logAndNotify'](_0x2a46f7){const _0x55d59d=_0x23c2ba;console[_0x55d59d(0x1ed)](_0x2a46f7),this[_0x55d59d(0x1f7)]+=_0x2a46f7,this['notifyStr']+='\x0a';}[_0x23c2ba(0x1f3)](_0x301ddc=t,_0x1ffac0='',_0x2649a2='',_0xce8fa9){const _0x24391b=_0x23c2ba;let _0x577007=_0x5814f9=>{const _0x1063e5=_0x411b;if(!_0x5814f9)return _0x5814f9;if(_0x1063e5(0x16e)==typeof _0x5814f9)return this[_0x1063e5(0x204)]()?_0x5814f9:this[_0x1063e5(0x199)]()?{'open-url':_0x5814f9}:this[_0x1063e5(0x1c0)]()?{'url':_0x5814f9}:void 0x0;if(_0x1063e5(0x1fd)==typeof _0x5814f9){if(this[_0x1063e5(0x204)]()){let _0x242965;return{'openUrl':_0x5814f9[_0x1063e5(0x17f)]||_0x5814f9[_0x1063e5(0x19e)]||_0x5814f9[_0x1063e5(0x1fe)],'mediaUrl':_0x5814f9[_0x1063e5(0x1cb)]||_0x5814f9[_0x1063e5(0x1d1)]};}if(this[_0x1063e5(0x199)]()){let _0x5384d3;return{'open-url':_0x5814f9[_0x1063e5(0x1fe)]||_0x5814f9[_0x1063e5(0x19e)]||_0x5814f9[_0x1063e5(0x17f)],'media-url':_0x5814f9[_0x1063e5(0x1d1)]||_0x5814f9['mediaUrl']};}if(this['isSurge']())return{'url':_0x5814f9[_0x1063e5(0x19e)]||_0x5814f9[_0x1063e5(0x17f)]||_0x5814f9[_0x1063e5(0x1fe)]};}};this[_0x24391b(0x22b)]||(this[_0x24391b(0x1c0)]()||this[_0x24391b(0x204)]()?$notification[_0x24391b(0x1d4)](_0x301ddc,_0x1ffac0,_0x2649a2,_0x577007(_0xce8fa9)):this[_0x24391b(0x199)]()&&$notify(_0x301ddc,_0x1ffac0,_0x2649a2,_0x577007(_0xce8fa9)));let _0x280981=['','==============\x20系统通知\x20=============='];_0x280981[_0x24391b(0x1ad)](_0x301ddc),_0x1ffac0&&_0x280981[_0x24391b(0x1ad)](_0x1ffac0),_0x2649a2&&_0x280981[_0x24391b(0x1ad)](_0x2649a2),console['log'](_0x280981[_0x24391b(0x184)]('\x0a'));}[_0x23c2ba(0x1b4)](_0x1a43c1,_0x43d79b){return _0x1a43c1<_0x43d79b?_0x1a43c1:_0x43d79b;}[_0x23c2ba(0x192)](_0x3c1673,_0x5808b2){return _0x3c1673<_0x5808b2?_0x5808b2:_0x3c1673;}[_0x23c2ba(0x176)](_0x3e27ae,_0x2f14c0,_0x521e70='0'){const _0x24f735=_0x23c2ba;let _0x273394=String(_0x3e27ae),_0x2cea29=_0x2f14c0>_0x273394[_0x24f735(0x205)]?_0x2f14c0-_0x273394[_0x24f735(0x205)]:0x0,_0x1ab384='';for(let _0x15014d=0x0;_0x15014d<_0x2cea29;_0x15014d++)_0x1ab384+=_0x521e70;return _0x1ab384+_0x273394;}['json2str'](_0x2f460b,_0x254ee4,_0xe65771=!0x1){const _0x14ec09=_0x23c2ba;let _0x55bfb8=[];for(let _0x2ba53c of Object[_0x14ec09(0x1fb)](_0x2f460b)[_0x14ec09(0x1c6)]()){let _0x45d50e=_0x2f460b[_0x2ba53c];_0x45d50e&&_0xe65771&&(_0x45d50e=encodeURIComponent(_0x45d50e)),_0x55bfb8['push'](_0x2ba53c+'='+_0x45d50e);}return _0x55bfb8[_0x14ec09(0x184)](_0x254ee4);}[_0x23c2ba(0x18f)](_0x491e97,_0x55dd86=!0x1){const _0x4dfe76=_0x23c2ba;let _0x31dcd7={};for(let _0xb69e9e of _0x491e97['split']('#')){if(!_0xb69e9e)continue;let _0x5360e9=_0xb69e9e[_0x4dfe76(0x1db)]('=');if(-0x1==_0x5360e9)continue;let _0xee2b61=_0xb69e9e['substr'](0x0,_0x5360e9),_0x77d651=_0xb69e9e[_0x4dfe76(0x207)](_0x5360e9+0x1);_0x55dd86&&(_0x77d651=decodeURIComponent(_0x77d651)),_0x31dcd7[_0xee2b61]=_0x77d651;}return _0x31dcd7;}[_0x23c2ba(0x213)](_0x1dd08a,_0x1c7978=_0x23c2ba(0x1f0)){const _0x510631=_0x23c2ba;let _0x5ab470='';for(let _0x1c1254=0x0;_0x1c1254<_0x1dd08a;_0x1c1254++)_0x5ab470+=_0x1c7978[_0x510631(0x1e7)](Math[_0x510631(0x20d)](Math[_0x510631(0x20e)]()*_0x1c7978[_0x510631(0x205)]));return _0x5ab470;}[_0x23c2ba(0x19a)](_0x3567c8){const _0x2c8381=_0x23c2ba;return _0x3567c8[Math[_0x2c8381(0x20d)](Math[_0x2c8381(0x20e)]()*_0x3567c8['length'])];}[_0x23c2ba(0x20b)](_0x3efc61){return new Promise(_0x4b031a=>setTimeout(_0x4b031a,_0x3efc61));}[_0x23c2ba(0x197)](_0x63664f={}){const _0x237bc4=_0x23c2ba;let _0x1887a9=(new Date()[_0x237bc4(0x1b2)]()-this[_0x237bc4(0x1bb)])/0x3e8;console[_0x237bc4(0x1ed)]('\x0a'+this[_0x237bc4(0x225)]+_0x237bc4(0x1c5)+_0x1887a9+'\x20秒！'),(this[_0x237bc4(0x1c0)]()||this['isQuanX']()||this['isLoon']())&&$done(_0x63664f);}}(_0x3057aa,_0x4e3576);}
