/*
项目名称:小猪赚钱
项目注册地址:http://t.zlnu.cn/5RXXVz?c=210494

需要邀请码才能注册,接码注册不了

青龙、V4、V2P变量填写

变量名 soy_xzzq_data
变量值 手机号&密码&User-Agent

其中User-Agent为可选填写

多号用 @ 或 # 或 换行 隔开

定时任务
cron '0-59/2 * * * *'

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_xzzq.js

注:能活多久不知道,反正上了再说

*/
const $ = new Env('小猪赚钱');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x1b66dc=_0x1c2c,_0x1969f5=_0x1081;function _0x1081(_0x5e07ed,_0x97d806){const _0x4c406b=_0x4c40();return _0x1081=function(_0x1081c2,_0x1c5dec){_0x1081c2=_0x1081c2-0xca;let _0x3ff7aa=_0x4c406b[_0x1081c2];return _0x3ff7aa;},_0x1081(_0x5e07ed,_0x97d806);}(function(_0x511322,_0x1940d3){const _0x497c37=_0x5977,_0x5ac21e=_0x1081,_0x4b7c3d=_0x1c2c,_0x5268c6=_0x511322();while(!![]){try{const _0x48a8f4=-parseInt(_0x4b7c3d(0x15a))/0x1+-parseInt(_0x5ac21e(0xf9))/0x2*(parseInt(_0x5ac21e(0x11c))/0x3)+parseInt(_0x497c37(0x149,'QN(D'))/0x4+parseInt(_0x4b7c3d(0xd3))/0x5+parseInt(_0x5ac21e(0xf4))/0x6*(parseInt(_0x4b7c3d(0x110))/0x7)+parseInt(_0x4b7c3d(0x103))/0x8+parseInt(_0x5ac21e(0x14f))/0x9*(parseInt(_0x497c37(0x10e,'RWU@'))/0xa);if(_0x48a8f4===_0x1940d3)break;else _0x5268c6['push'](_0x5268c6['shift']());}catch(_0x52c868){_0x5268c6['push'](_0x5268c6['shift']());}}}(_0x4c40,0xc1d77));let app_soy_xzzq_data=[],Host=_0x1969f5(0x133);!(async()=>{const _0x3d74e1=_0x1c2c,_0xc152c7=_0x1969f5,_0x1ddc9e=_0x5977;if(typeof $request!==_0x1ddc9e(0x100,'[^cj')){}else{if(!$[_0xc152c7(0x12d)]()){if(!$['getdata']('soy_xzzq_data')){console[_0xc152c7(0x14d)]('\x0a【'+$[_0xc152c7(0x13d)]+_0x3d74e1(0x128));return;}if($['getdata'](_0xc152c7(0xcb))&&$[_0x3d74e1(0xf0)](_0xc152c7(0xcb))[_0x1ddc9e(0x11f,'AHK[')]('@')>-0x1)app_soy_xzzq_data=process[_0x3d74e1(0xf7)][_0x1ddc9e(0x120,'RWU@')][_0x3d74e1(0x112)]('@');else{if($[_0x3d74e1(0xf0)](_0x1ddc9e(0x111,'[A91'))&&$[_0x1ddc9e(0xe9,'VJf#')](_0x1ddc9e(0x14c,'Zj8r'))['indexOf']('#')>-0x1)app_soy_xzzq_data=process['env'][_0x3d74e1(0x135)][_0x1ddc9e(0x156,'iMug')]('#');else $[_0x3d74e1(0xf0)](_0x3d74e1(0x135))&&$['getdata']('soy_xzzq_data')[_0xc152c7(0xe0)]('\x0a')>-0x1?app_soy_xzzq_data=process['env'][_0x1ddc9e(0xe6,'AHK[')][_0x3d74e1(0x112)]('\x0a'):app_soy_xzzq_data=process['env'][_0x3d74e1(0x135)][_0x1ddc9e(0x10d,'Yb4v')]();}}else{if(!process['env'][_0x3d74e1(0x135)]){console['log']('\x0a【'+$[_0x1ddc9e(0xeb,'bsoe')]+_0x3d74e1(0x128));return;}if(process[_0x3d74e1(0xf7)][_0x3d74e1(0x135)]&&process[_0x1ddc9e(0x12c,'Q6y(')][_0x3d74e1(0x135)]['indexOf']('@')>-0x1)app_soy_xzzq_data=process['env'][_0x3d74e1(0x135)]['split']('@');else{if(process['env'][_0x1ddc9e(0x15c,'6MgS')]&&process[_0x3d74e1(0xf7)][_0x3d74e1(0x135)][_0x1ddc9e(0x134,'C0og')]('#')>-0x1)app_soy_xzzq_data=process[_0xc152c7(0xee)][_0xc152c7(0xcb)][_0x1ddc9e(0xea,'NDq(')]('#');else process[_0x1ddc9e(0x12f,'W1Tj')]['soy_xzzq_data']&&process[_0x1ddc9e(0x13b,'$[Rl')][_0xc152c7(0xcb)]['indexOf']('\x0a')>-0x1?app_soy_xzzq_data=process[_0x1ddc9e(0x114,'NDq(')][_0x3d74e1(0x135)][_0xc152c7(0x155)]('\x0a'):app_soy_xzzq_data=process['env'][_0xc152c7(0xcb)]['split']();}}console[_0xc152c7(0x14d)]('共'+app_soy_xzzq_data[_0x3d74e1(0xf5)]+_0x1ddc9e(0xe3,'nh4)'));let _0x463d48='';console[_0xc152c7(0x14d)](_0xc152c7(0xe8)+new Date(new Date()[_0xc152c7(0x143)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x1ddc9e(0xd1,'UjIV'));for(i=0x0;i<app_soy_xzzq_data['length'];i++){$[_0x1ddc9e(0x10c,'ioPj')]=i+0x1,soy_xzzq_data=app_soy_xzzq_data[i]['split']('&'),soy_xzzq_mobile=soy_xzzq_data[0x0],soy_xzzq_password=soy_xzzq_data[0x1],soy_xzzq_UA=soy_xzzq_data[0x2],console['log'](_0xc152c7(0x119)+$['index']+_0x1ddc9e(0x147,'Z1k7')),await implement();}$[_0x1ddc9e(0xd4,'$[Rl')]()&&await notify[_0xc152c7(0xfb)]($[_0x3d74e1(0x12a)],_0x463d48);}})()['catch'](_0xccafd5=>$[_0x1b66dc(0x125)](_0xccafd5))['finally'](()=>$[_0x1b66dc(0x14a)]());async function implement(){await login(0x0),await login(0x1);}function _0x5977(_0x5e07ed,_0x97d806){const _0x4c406b=_0x4c40();return _0x5977=function(_0x1081c2,_0x1c5dec){_0x1081c2=_0x1081c2-0xca;let _0x3ff7aa=_0x4c406b[_0x1081c2];if(_0x5977['hjavEq']===undefined){var _0x4994c4=function(_0x36829a){const _0x31e4af='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5f17d6='',_0x3185d1='';for(let _0x247de9=0x0,_0x2be7ca,_0x5977ef,_0x3d7129=0x0;_0x5977ef=_0x36829a['charAt'](_0x3d7129++);~_0x5977ef&&(_0x2be7ca=_0x247de9%0x4?_0x2be7ca*0x40+_0x5977ef:_0x5977ef,_0x247de9++%0x4)?_0x5f17d6+=String['fromCharCode'](0xff&_0x2be7ca>>(-0x2*_0x247de9&0x6)):0x0){_0x5977ef=_0x31e4af['indexOf'](_0x5977ef);}for(let _0x49472b=0x0,_0x47f28f=_0x5f17d6['length'];_0x49472b<_0x47f28f;_0x49472b++){_0x3185d1+='%'+('00'+_0x5f17d6['charCodeAt'](_0x49472b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3185d1);};const _0x1c2cd8=function(_0x517d9a,_0x12097f){let _0x2dde0c=[],_0x463d48=0x0,_0xccafd5,_0x5cc188='';_0x517d9a=_0x4994c4(_0x517d9a);let _0x1fe348;for(_0x1fe348=0x0;_0x1fe348<0x100;_0x1fe348++){_0x2dde0c[_0x1fe348]=_0x1fe348;}for(_0x1fe348=0x0;_0x1fe348<0x100;_0x1fe348++){_0x463d48=(_0x463d48+_0x2dde0c[_0x1fe348]+_0x12097f['charCodeAt'](_0x1fe348%_0x12097f['length']))%0x100,_0xccafd5=_0x2dde0c[_0x1fe348],_0x2dde0c[_0x1fe348]=_0x2dde0c[_0x463d48],_0x2dde0c[_0x463d48]=_0xccafd5;}_0x1fe348=0x0,_0x463d48=0x0;for(let _0x24d5da=0x0;_0x24d5da<_0x517d9a['length'];_0x24d5da++){_0x1fe348=(_0x1fe348+0x1)%0x100,_0x463d48=(_0x463d48+_0x2dde0c[_0x1fe348])%0x100,_0xccafd5=_0x2dde0c[_0x1fe348],_0x2dde0c[_0x1fe348]=_0x2dde0c[_0x463d48],_0x2dde0c[_0x463d48]=_0xccafd5,_0x5cc188+=String['fromCharCode'](_0x517d9a['charCodeAt'](_0x24d5da)^_0x2dde0c[(_0x2dde0c[_0x1fe348]+_0x2dde0c[_0x463d48])%0x100]);}return _0x5cc188;};_0x5977['zSvqHs']=_0x1c2cd8,_0x5e07ed=arguments,_0x5977['hjavEq']=!![];}const _0x83396b=_0x4c406b[0x0],_0x2f3bf4=_0x1081c2+_0x83396b,_0x51a9f7=_0x5e07ed[_0x2f3bf4];return!_0x51a9f7?(_0x5977['HWDXJK']===undefined&&(_0x5977['HWDXJK']=!![]),_0x3ff7aa=_0x5977['zSvqHs'](_0x3ff7aa,_0x1c5dec),_0x5e07ed[_0x2f3bf4]=_0x3ff7aa):_0x3ff7aa=_0x51a9f7,_0x3ff7aa;},_0x5977(_0x5e07ed,_0x97d806);}function login(_0x5cc188){return new Promise(_0x1fe348=>{const _0x494bf5=_0x1081,_0x56723a=_0x1c2c,_0x5e820e=_0x5977;let _0x24d5da={'url':Host+_0x5e820e(0x127,'W1Tj')+GetTime,'headers':{'Host':_0x56723a(0x10b),'Connection':_0x56723a(0x105),'Content-Length':(_0x56723a(0x142)+soy_xzzq_mobile+_0x56723a(0xf8)+soy_xzzq_password)[_0x56723a(0xf5)],'User-Agent':soy_xzzq_UA,'Content-Type':_0x494bf5(0x13e),'Accept':'*/*','Origin':_0x5e820e(0xec,'PRrk'),'X-Requested-With':_0x494bf5(0x148)},'body':_0x56723a(0x142)+soy_xzzq_mobile+_0x494bf5(0x138)+soy_xzzq_password};$[_0x56723a(0xd5)](_0x24d5da,async(_0x422dd2,_0x1a6349,_0x40b03e)=>{const _0x7ce22d=_0x56723a,_0x1abd55=_0x5e820e,_0x5b7372=_0x494bf5;try{if(_0x422dd2)console[_0x5b7372(0x14d)]('\x0a【'+$[_0x1abd55(0xcd,'iMug')]+'---登录】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x7ce22d(0x12a)]+'---登录】:\x20网络请求失败';else{let _0x18a7b8=JSON['parse'](_0x40b03e);if(_0x18a7b8[_0x5b7372(0x11b)]==0x1){token=_0x18a7b8[_0x1abd55(0xce,'Yb4v')];let _0x55a59f=_0x18a7b8[_0x7ce22d(0x115)][_0x1abd55(0xdf,'Ki3!')];ID=_0x18a7b8['data']['id'];let _0x3baa43=_0x18a7b8[_0x1abd55(0x126,'zI2n')][_0x5b7372(0xd6)],_0xf574e4=_0x18a7b8[_0x5b7372(0x159)][_0x5b7372(0x121)],_0xbd02a0=_0x18a7b8['data'][_0x7ce22d(0x140)],_0x1333c6=_0x18a7b8['data'][_0x5b7372(0x11d)]/0x2710;_0x5cc188==0x0?(console[_0x7ce22d(0xd0)]('\x0a【'+$[_0x7ce22d(0x12a)]+_0x1abd55(0xed,'oLJS')+_0x18a7b8['msg']),await sign_status(),await Receive(),(0x9>GetHour()>=0x6||0xe>GetHour()>=0xc||0x15>GetHour()>=0x12)&&await Dinner()):console[_0x1abd55(0x145,'Rdot')]('\x0a【'+$[_0x5b7372(0x13d)]+_0x7ce22d(0x106)+_0x55a59f+_0x5b7372(0x109)+_0x3baa43+_0x7ce22d(0x116)+_0xbd02a0+_0x7ce22d(0xdc)+_0x1333c6[_0x1abd55(0x12e,'zI2n')](0x2)+_0x7ce22d(0xf3)+_0xf574e4+'元');}else console['log']('\x0a【'+$[_0x5b7372(0x13d)]+_0x5b7372(0x108)+_0x18a7b8[_0x7ce22d(0x12b)]),subTitle+='\x0a【'+$[_0x1abd55(0x152,'nh4)')]+_0x5b7372(0x108)+_0x18a7b8[_0x1abd55(0xe1,'zI2n')];}}catch(_0x28e647){}finally{_0x1fe348();}});});}function _0x1c2c(_0x5e07ed,_0x97d806){const _0x4c406b=_0x4c40();return _0x1c2c=function(_0x1081c2,_0x1c5dec){_0x1081c2=_0x1081c2-0xca;let _0x3ff7aa=_0x4c406b[_0x1081c2];if(_0x1c2c['njNsxj']===undefined){var _0x4994c4=function(_0x1c2cd8){const _0x36829a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x31e4af='',_0x5f17d6='';for(let _0x3185d1=0x0,_0x247de9,_0x2be7ca,_0x5977ef=0x0;_0x2be7ca=_0x1c2cd8['charAt'](_0x5977ef++);~_0x2be7ca&&(_0x247de9=_0x3185d1%0x4?_0x247de9*0x40+_0x2be7ca:_0x2be7ca,_0x3185d1++%0x4)?_0x31e4af+=String['fromCharCode'](0xff&_0x247de9>>(-0x2*_0x3185d1&0x6)):0x0){_0x2be7ca=_0x36829a['indexOf'](_0x2be7ca);}for(let _0x3d7129=0x0,_0x49472b=_0x31e4af['length'];_0x3d7129<_0x49472b;_0x3d7129++){_0x5f17d6+='%'+('00'+_0x31e4af['charCodeAt'](_0x3d7129)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5f17d6);};_0x1c2c['jDJYuC']=_0x4994c4,_0x5e07ed=arguments,_0x1c2c['njNsxj']=!![];}const _0x83396b=_0x4c406b[0x0],_0x2f3bf4=_0x1081c2+_0x83396b,_0x51a9f7=_0x5e07ed[_0x2f3bf4];return!_0x51a9f7?(_0x3ff7aa=_0x1c2c['jDJYuC'](_0x3ff7aa),_0x5e07ed[_0x2f3bf4]=_0x3ff7aa):_0x3ff7aa=_0x51a9f7,_0x3ff7aa;},_0x1c2c(_0x5e07ed,_0x97d806);}function sign_status(){const _0xed03db=_0x1969f5;let _0x495043=Get_Request(_0xed03db(0x151));return new Promise(_0x17234f=>{const _0x5b33e5=_0x1c2c;$[_0x5b33e5(0xfa)](_0x495043,async(_0x4865ab,_0x438257,_0x2f8b7)=>{const _0x526869=_0x5b33e5,_0x1b1c2a=_0x1081,_0x4fead3=_0x5977;try{if(_0x4865ab)console[_0x4fead3(0xdd,')oEZ')]('\x0a【'+$[_0x1b1c2a(0x13d)]+_0x4fead3(0x153,'UjIV')),subTitle+='\x0a【'+$[_0x526869(0x12a)]+_0x1b1c2a(0x13a);else{let _0x1a385d=JSON[_0x4fead3(0x15b,'D7#f')](_0x2f8b7);_0x1a385d[_0x526869(0x132)]==0x64?_0x1a385d[_0x1b1c2a(0x159)][_0x526869(0xef)]==0x0?await sign():console[_0x526869(0xd0)]('\x0a【'+$[_0x1b1c2a(0x13d)]+_0x1b1c2a(0xfc)):(console[_0x526869(0xd0)]('\x0a【'+$[_0x526869(0x12a)]+_0x526869(0x10f)+_0x1a385d[_0x526869(0x12b)]),subTitle+='\x0a【'+$[_0x1b1c2a(0x13d)]+_0x1b1c2a(0xd9)+_0x1a385d['msg']);}}catch(_0x36117b){}finally{_0x17234f();}});});}function sign(){const _0x2faf1c=_0x1b66dc;let _0x300546=Get_Request(_0x2faf1c(0xf2));return new Promise(_0x37f7d5=>{$['get'](_0x300546,async(_0x39484d,_0x2b0bd1,_0x3c777a)=>{const _0x1d4bd3=_0x1c2c,_0x19f06c=_0x1081,_0x27f9c2=_0x5977;try{if(_0x39484d)console[_0x27f9c2(0xde,'iPf$')]('\x0a【'+$['name']+_0x27f9c2(0x129,'AHK[')),subTitle+='\x0a【'+$[_0x19f06c(0x13d)]+_0x19f06c(0x113);else{let _0x5edd4b=JSON[_0x19f06c(0x131)](_0x3c777a);_0x5edd4b[_0x1d4bd3(0x132)]==0x64?_0x5edd4b[_0x27f9c2(0x10a,'UEaj')][_0x27f9c2(0x136,'xXyD')]==0x0?console[_0x27f9c2(0x150,'Z1k7')]('\x0a【'+$[_0x19f06c(0x13d)]+_0x1d4bd3(0x118)):console['log']('\x0a【'+$['name']+_0x19f06c(0xe2)):(console[_0x19f06c(0x14d)]('\x0a【'+$[_0x19f06c(0x13d)]+_0x1d4bd3(0x104)+_0x5edd4b['msg']),subTitle+='\x0a【'+$[_0x27f9c2(0x13c,']OWv')]+_0x19f06c(0x117)+_0x5edd4b['msg']);}}catch(_0x2404a8){}finally{_0x37f7d5();}});});}function _0x4c40(){const _0x3fae92=['zw52','jNbHC3n3B3jKpq','12ARHqBK','z2v0','sendNotify','---签到状态】:\x20今天已签到','W4vXaCkfcHqyxq9+oq3cVfKonCo+hSkwgSkuW4PhW6XTttpcNCkCWQW4WQDSeSkoWRK8WOq9mCotW7PBFrtcOmo4CYzAW4RcOL3cGfXJWRDrwSogW7RdOaT5E8khW7uqB3WuWQ3dHx/cPSolEZRdJvRdLmosxCoOW4CHmCkUvmobpfldJ8kcE8oPo8oMgCovWROVW6P9W49NoCkBW50LWQ4uzcPRASkeW7xcTmkRjhKmESoQWR1eW6pcP8oGjmoiy8o9kmoOW5PCWOddMH1CWQlcOcZcKG4xWOqietBdT1/dTIjrW6rFWQddTvr8hI/dHtmxbq5ka8ktuhlcJmkKWR/dRCklW77dVmoFtCovy1vQWQ/cMGBcM8o9lmkOW6O7WPBcUmkxWO/dHCo+WRvVlhRcK8ojWPhdGCoLWP3dN8kbW4VcRZ88ovpdOxvQhM3dLCkvktyjW6JdMJhdSSkCxCkRWPBdH8oUpgfuyanRfCkbD8kEW79QE2ddTmoxjrOJWOHpWQ4QW7FdQSkPWQOXbHOkumoaWRddLmkXWOu','lmkVWOBMLRxLJy7PHQ3LUBFJG4BcLX3NV7BNU5JORyJMS7NLPABOTy0','ls0T5lIa5PEL5lIj6Asq44croIdNVzhNU5ZOR7FMSylLPlhOTku','zbFcN8kBs0rOF2e','WPFdTt7MLi3LJ6VPH4RLUj7JGAWnAW','WO/dQmoueG','ota2nZiWofDjAgzjwq','ls0T562+5yIW44croIa','A2vLCc1HBgL2zq','ls0T55sO5OI35l+H5OgV44croIakls0T55sO5OI35PI156EW77YA','z2v0tw9UDgG','---登录】:\x20','\x0a---当前等级：','iYvcma','CgLNlNP4Exn5lM5LDdO5oq','bCk3W4dcOJS','W5hcT8oLmc8','WRddSIxdHCo9W4FcR8k5WQ3cHq','ls0T562+5yIW54Q25Ocb44croIa','nZmXnZftz3vbrKG','FgOuWODIW5tdGhddTmk6pSkCuW','C3bSAxq','---签到】:\x20网络请求失败','WOhdRG4','zgf0yq','cI0TlEw9K+wjJEE7J+MQJo+8MG','---签到】:\x20','ls0T562+5yIW44croIdNRB7LIldMIjdLIP9+','\x0a开始【第\x20','ku1vWOK','code','608109OBNmRq','coin','ls0T5Ps25y+w6yEr5BIb44croIdNVzhNU5ZOR7FMSylLPlhOTku','o8kiWQ7cQ8kDhCkC','W7VcQM/cQSo8W47cVCkGWRpcOIVdQmoo','money','iYyc5lIj5PAR5lIz6AEH44ozqLW','W6jGW6uJyCkCBJ8','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','Bg9NrxjY','AMPBAa','W5lcT35EeNjXgviZjWenWQpcKaTJlSkS','44cr77YA5PYQ5AgR5yAzihnVEv94ENPXx2rHDgeG5y+y6yEp','F8olW6FNRRdLI5xJGypdGhdNVjJNU6VOR7pMS4xLP7tOTy0','BMfTzq','BxnN','W4dcICkc','isNode','EMrPydz1WPu','W5/cTMu','msg','parse','y29Kzq','http://pig.zxysy.net:99/','WQzsW6ZcISoKW61v','C295x3H6ENfFzgf0yq','W4XckCkxhSkQWOW','W7JcRhhdM8o+W4ZcVSkIWPxdQctdUCoBW63cJ8kg','&password=','mtm4ntiWng5wu0DMwq','---签到状态】:\x20网络请求失败','peZdOG','y8oCW4SU','name','application/x-www-form-urlencoded','extdJq7cUmksWP3dVY7cKW','zxHWzxjPzw5Jzq','kYTr','jM1VyMLSzt0','getTime','WPxcSSk1W6W','eCkfaa','C2vYDMvYl2nVAw4TBg9Nl2n0CMXFCMvJzwL2zs5WAha/DJ0','lEs4JoI3N+wnIos4REwjGEoaTq','w2a.W2Apig.zxysy.net','WQ7cL8oCW4RdOaBdOfnAWRmDWOTr','zg9Uzq','y0FcLmoA','iw3dOZFdTbauWOpcR8oCW63cS8k2','log','oCkJc8kpW5a8jmkLW7BcJmox','2871sEwIco','yuNcNG','server/user/receiveStatus.php?v=','oGRcJCk6','W4DcaoEVR+wiR+EiVEAcREobT2/cJ+E/R+E6HEIUG+AWSUwLH+I0Uq','getHours','split','umoeWOeIxG','C2vUze5VDgLMEq',';\x20userid=','data','oty3mty4Aerbzwz0','mZSkW7Dl','W5/cTKHLWOOfWOddTmkAW5CbWPhdVa','ls0T5Ps25y+w6yEr5BIb44croIa','soy_xzzq_data','W6pcOSoR','tCovWOaU','W5BcQmoIpdu','kI8Q','Bg9N','W4PsemkSfq','z2v0rgf0zq','mJq4otu3nwfVEhzJua','mfhdMGNcJ8kM','Cg9ZDa','level','WRhdSYhdHmkYWOZcR8kvWQ3cOYZdQa','getSeconds','---签到状态】:\x20','dXtdHG','keep-alive','cI0TlEw9K+wjJEMhKEw4GE+8MG','aSoUW7C','W75tEq','W7VcHCkQWQ7dK8oClHC','indexOf','y3Hi','---签到】:\x20今天已签到','5lM+6lwn5yYx','nde0B0rvsvHS','WPFdTt7MLi3LJ6VPH4RLUj7JGAWnA+AuVUwoU+AjSUwjM8kh','iCkjWRpcKCkDkmkairztzCoZWQq','zXddPCoEtYZdV3rtDa','===\x20脚本执行\x20-\x20北京时间：','kvpcNYefW5S8','WPFdSbtcOg8','oSo2WOxcVa','mLrpWO/cV8kHmmk0WPWjWPhcU8oVW7VcOCoKtmohisldGSobW6i','W4ZcPmku55Im5BYU44kCDCk5','env','C2LNBL9PBG','z2v0zgf0yq','http://pig.zxysy.net:99','C2vYDMvYl3nPz24TAw4Vy3rYBf9ZAwDUsw4UCgHWp3y9','5lIhcI0TlEw9K+wjJEs9MEMINE+8MG','414oDUIXl','BgvUz3rO','WPpcSHNdP0ZdTqGErCkmWPGmW6pcSH9OWOVdG8oNfq'];_0x4c40=function(){return _0x3fae92;};return _0x4c40();}function Receive(){const _0x23bbb0=_0x1b66dc;let _0x26319c=Get_Request(_0x23bbb0(0x146));return new Promise(_0x5afc0d=>{$['get'](_0x26319c,async(_0xe452b1,_0x481e5f,_0x359ffa)=>{const _0x4c6700=_0x5977,_0x2b89c7=_0x1c2c,_0x3fa482=_0x1081;try{if(_0xe452b1)console[_0x3fa482(0x14d)]('\x0a【'+$[_0x2b89c7(0x12a)]+_0x2b89c7(0x11e)),subTitle+='\x0a【'+$[_0x2b89c7(0x12a)]+_0x4c6700(0xfe,'T6w%');else{let _0x26d93f=JSON['parse'](_0x359ffa);_0x26d93f[_0x4c6700(0x11a,'h@Dg')]==0x64?console[_0x4c6700(0xcc,'C%so')]('\x0a【'+$[_0x2b89c7(0x12a)]+_0x4c6700(0xe5,'W1Tj')):(console[_0x4c6700(0x141,'UEaj')]('\x0a【'+$['name']+_0x2b89c7(0xca)+_0x26d93f[_0x3fa482(0x130)]),subTitle+='\x0a【'+$[_0x4c6700(0x14b,'Z1k7')]+_0x4c6700(0x101,'W1Tj')+_0x26d93f[_0x3fa482(0x130)]);}}catch(_0x436431){}finally{_0x5afc0d();}});});}function Dinner(){let _0x5362a6=Get_Request('server/coin-log/ctrl_dinner.php?v=');return new Promise(_0xe9b7cb=>{$['get'](_0x5362a6,async(_0x23fe60,_0x43fb04,_0x6fe25f)=>{const _0xdf30cb=_0x1081,_0x55c3bc=_0x5977,_0x4af4ba=_0x1c2c;try{if(_0x23fe60)console['log']('\x0a【'+$[_0x4af4ba(0x12a)]+'---一日三餐】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x55c3bc(0x144,'WMKb')]+_0x4af4ba(0xff);else{let _0x3bd338=JSON[_0xdf30cb(0x131)](_0x6fe25f);_0x3bd338[_0xdf30cb(0x11b)]==0x64?console['log']('\x0a【'+$[_0x4af4ba(0x12a)]+'---一日三餐】:\x20领取成功~'):(console[_0xdf30cb(0x14d)]('\x0a【'+$[_0x55c3bc(0x102,'oLJS')]+'---一日三餐】:\x20'+_0x3bd338[_0x4af4ba(0x12b)]),subTitle+='\x0a【'+$['name']+_0x55c3bc(0x122,'zI2n')+_0x3bd338[_0x55c3bc(0xda,'%Jee')]);}}catch(_0x38a36d){}finally{_0xe9b7cb();}});});}function Post_Request(_0x2a9f1e,_0x463802){const _0x236e01=_0x1b66dc,_0x5771b3=_0x1969f5;return{'url':''+Host+_0x2a9f1e+GetTime,'headers':{'Host':'pig.zxysy.net:99','Connection':_0x5771b3(0xdb),'Content-Length':_0x463802[_0x236e01(0xf5)],'User-Agent':soy_xzzq_UA,'Content-Type':'application/x-www-form-urlencoded','Accept':'*/*','Origin':_0x5771b3(0xf1),'X-Requested-With':_0x5771b3(0x148)},'body':_0x463802};}function Get_Request(_0x18916a){const _0x446cd4=_0x1969f5,_0xa3e98c=_0x1b66dc,_0x1faacc=_0x5977;return{'url':''+Host+_0x18916a+GetTime,'headers':{'Host':_0x1faacc(0x137,'RWU@'),'Connection':'keep-alive','TC-Token':token,'TC-Id':ID,'User-Agent':soy_xzzq_UA,'appKey':'5ded368547b86b331','Content-type':_0xa3e98c(0x124),'Accept':_0xa3e98c(0xcf),'X-Requested-With':_0x1faacc(0xf6,'NDq('),'Cookie':_0x1faacc(0xfd,'Qk(#')+token+';\x20mobile='+soy_xzzq_mobile+_0x446cd4(0x158)+ID}};}function GetTime(){const _0x2879af=_0x1969f5,_0x3f9168=_0x1b66dc,_0x213d88=_0x5977;let _0x4e8364=new Date(),_0x1056fe=_0x4e8364[_0x213d88(0x14e,'9Yc^')](),_0x31cfc1=_0x4e8364[_0x3f9168(0x107)]()+0x1;_0x31cfc1=_0x31cfc1<0xa?'0'+_0x31cfc1:_0x31cfc1;let _0x4150a0=_0x4e8364[_0x3f9168(0xd2)]();_0x4150a0=_0x4150a0<0xa?'0'+_0x4150a0:_0x4150a0;let _0x36fb7d=_0x4e8364['getHours']();_0x36fb7d=_0x36fb7d<0xa?'0'+_0x36fb7d:_0x36fb7d;let _0x2517e5=_0x4e8364[_0x213d88(0x13f,'HhDe')]();_0x2517e5=_0x2517e5<0xa?'0'+_0x2517e5:_0x2517e5;let _0x47e64b=_0x4e8364[_0x2879af(0xd8)]();_0x47e64b=_0x47e64b<0xa?'0'+_0x47e64b:_0x47e64b;let _0x3fd69a=''+_0x1056fe+_0x31cfc1+_0x4150a0+_0x36fb7d+_0x2517e5+_0x47e64b;return _0x3fd69a;}function GetHour(){const _0x7cbb78=_0x1969f5;let _0x4dc1de=new Date(),_0x412566=_0x4dc1de[_0x7cbb78(0x154)]();return _0x412566=_0x412566<0xa?'0'+_0x412566:_0x412566,_0x412566;}async function message(){const _0x32378d=_0x1b66dc;tz==0x1&&$['msg']($[_0x32378d(0x12a)],'',$['message']),$['isNode']()&&await notify[_0x32378d(0x157)]($[_0x32378d(0x12a)],$['message']);}

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