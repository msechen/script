/*

软件名称:我的城堡

项目注册地址:http://wdcb.xajiujiu.cn:82/tower/#/qr/index?c=104997

一个游戏类型的,有分红模式

必要变量:
变量名 soy_wdcb_data
变量值 注册的手机号&登录密码

选填变量
变量名 soy_wdcb_UA
变量值 需抓包请求头上的user-agent


多个号用 @ 或 # 或 换行 隔开

cron "35 10 * * *"

*/


const $ = new Env('我的城堡');
const notify = $.isNode() ? require('./sendNotify') : '';


function _0x133b(){const _0x159245=['odCWmty2t0L4t3jM','z3PPCa','Bw9UzxK','WPxdPMRdI8odWQ8','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','split','ioMIHUwpLUwiHUE6OUoaKtOG','y2fZDgXLlNP4Exn5lM5LDdO4mG','iCoWW5VcM8krzSoUwmoPA8ku','\x20===\x0a','WP58W7CScmkdWR7cHSkjWP3dNq','W4FNMONLVRhJGiusWQdNVk7NU7xORiVMSB7LPzlOTOq','log','eCo2wNBcV8ocW6f3WQddLCow','index','pSk7W5azWOrLla','y2fZDgXL','msg','W5jCW7NdHLu','WOdcL8kqCeNdTb4','tw96AwXSys81lJaGkeXPBNv4oYbvoYbbBMrYB2LKidGUms4WoYb6Ac1dtJSGru1mlufmmdaGqNvPBgqVsfvbv0vjru1mlufmmdaPiefWCgXLv2vIs2L0lZuZnY4ZnIaOs0HutuWSigXPA2uGr2vJA28PifzLCNnPB24Vnc4WienOCM9Tzs81nY4WlJi5odCUmta4ifvdqNjVD3nLCI8Xms45lJqUotC0ifvxuY8YlJeZlJeUndGGtw9IAwXLifnHzMfYAs81mZCUmZyGqwXPqxbWkerPBMDuywXRlZqUns4XmsKGy29TlMfSAwjHyMeUyw5KCM9Pzc5YAw1LDc8Xmdq4nZqZosbdAgfUBMvSlZiYnZiWmcbSyw5NDwfNzs96Ac1dtG','CgfYC2u','odG1mJuYteXTtwPO','WOHHW7JdK3e','qmofW7nLWPnHW5SzbSko','pbtdOKK','WPNdOmkcWPhdVef8','yJRdULmtCq','10078985gxPCQA','length','W5hdKHC','mMLNvw9fzq','http://castle.zxysy.net:82/','ioEzU+w9LEoaKtOG572r57UC6k+35Rgc5AsX6lsL','W5DDW7O','WPFdN8ovbHq','C295x3DKy2jFvue','\x0a【soy脚本提示---账号\x20','\x20个账号任务】','W63JG4nOWR0l6isq5P+J5O6956sGB03cS+I1HEwpRwe','oKfzWORdKCk6qa','t3f7aaPmW4qysGddSq','u8kPeX7dSmkFWROGWPJdUmohW7WXWQS','lbtdV3pcSSkdW5NcSYu2W7e','z2v0zgf0yq','WPZdSxBcVrbJWQmiohHc','pmo6dY8rsmob','W6RcMhZdHMFcMXy','W49ilG','ioMIHUwpLUs7U+wkOEoaKtOG572r57UC6k+35Rgc5AsX6lsL','Ffi2cW','Keep-Alive','qZG4WO4OW7VdQu7cR3WM','DfWL','parse','done','W5uNWR5lsSoxWPRcRCk7WRVdIvm','6927090tmLxfD','W4zjpW','WO3dTCkAWPZdQq','getTimezoneOffset','token','\x0a开始【第\x20','mZmWody0ngHzEg1JyG','indexOf','Aw5KzxHpzG','870166OIxOrf','WO7cNmkaCva','Fv00','getdata','Aw5KzxG','z2v0vgLTzq','WR0wDcldI8k8FCopFfTUrSkQ','WOq8cmkgWQ8','C3bSAxq','eH5Vr+w9H+wlQUMeS+w4MU++Na','y29PBNm','WRhJGkldRSomvoIeQUADJEAnH+EMU3tcMmkb6lE45y6oCW','gCk/asK+phRcNmk7fmkeW6n2','dmoYooobJowgVSkU','\x20个账号】===\x0a','W7/JGOxcSmkWx+IgUEAEMoAmP+ENV+oaGo+8ToAFOUwGNUweG+EAQow7MUwoT+MgJmkkBCk2WPpcICk1FexdQw5QWPyQEq','W7f1WO3dTmokWQxcGJ9nmmkrj8oN','Bg9N','dSkXdbC','laVdQKxcSq','x8o2WPzQCSodWR/dRmoCW5fOfSooxgzhqqVcRmkLovtcKa','WRhcGZVcOW','zMLUywXSEq','\x0a---当前余额：','Mozilla/5.0\x20(Linux;\x20U;\x20Android\x208.1.0;\x20zh-CN;\x20EML-AL00\x20Build/HUAWEIEML-AL00)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.108\x20UCBrowser/11.9.4.974\x20UWS/2.13.1.48\x20Mobile\x20Safari/537.36\x20AliApp(DingTalk/4.5.11)\x20com.alibaba.android.rimet/10487439\x20Channel/227200\x20language/zh-CN','ioEzU+w9LEoaKtOG','WPpdTSkr','C295x3DKy2jFzgf0yq','zgf0yq','W71kpuxcISoSkSofEKDIuCkP','WRNdIJVcMJ7dMexcNWT7DJVdTG','\x0a【soy脚本提示】：填写变量不规范','iCoVW47cRCks','wSoQWPW','env','Cg9ZDa','AoocIvbgWRhOHRZMNQ7MJ4xNP4xJGPhVVO3MNPxLOiVLHBpNMPlLUOlLJARPH69BfmoatSoyuwqKWPjHcxGwWPK','soy_wdcb_UA','soy_wdcb_data','W5bimmkXnedcMSk/CYhcLa','castle.zxysy.net:82','\x20用户信息】:\x20\x0a---用户ID：','WQBcG8k7DUw/RUwjUUs9HoMJKU+8QG','WPFdQ8ksWPddPxP7','zw52','muTk','W5JdKWy','k8kNcG'];_0x133b=function(){return _0x159245;};return _0x133b();}function _0x4467(_0x19c7bc,_0x588427){const _0x133b03=_0x133b();return _0x4467=function(_0x12e9c3,_0x158324){_0x12e9c3=_0x12e9c3-0x1c0;let _0x32fbed=_0x133b03[_0x12e9c3];if(_0x4467['kRajmF']===undefined){var _0x4e7042=function(_0x44674e){const _0x22b09f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1b9272='',_0x565723='';for(let _0x4a0c1c=0x0,_0x317906,_0x5e771e,_0x552f54=0x0;_0x5e771e=_0x44674e['charAt'](_0x552f54++);~_0x5e771e&&(_0x317906=_0x4a0c1c%0x4?_0x317906*0x40+_0x5e771e:_0x5e771e,_0x4a0c1c++%0x4)?_0x1b9272+=String['fromCharCode'](0xff&_0x317906>>(-0x2*_0x4a0c1c&0x6)):0x0){_0x5e771e=_0x22b09f['indexOf'](_0x5e771e);}for(let _0x2e8d52=0x0,_0xc2acc4=_0x1b9272['length'];_0x2e8d52<_0xc2acc4;_0x2e8d52++){_0x565723+='%'+('00'+_0x1b9272['charCodeAt'](_0x2e8d52)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x565723);};_0x4467['syRmlw']=_0x4e7042,_0x19c7bc=arguments,_0x4467['kRajmF']=!![];}const _0x501b8d=_0x133b03[0x0],_0x4808f6=_0x12e9c3+_0x501b8d,_0x59fdb8=_0x19c7bc[_0x4808f6];return!_0x59fdb8?(_0x32fbed=_0x4467['syRmlw'](_0x32fbed),_0x19c7bc[_0x4808f6]=_0x32fbed):_0x32fbed=_0x59fdb8,_0x32fbed;},_0x4467(_0x19c7bc,_0x588427);}const _0xacafc9=_0x12e9,_0x9ef13=_0x4467,_0x5cc298=_0x552f;(function(_0x5dced8,_0x4a0c21){const _0x50618a=_0x12e9,_0x1943e2=_0x552f,_0x25d65f=_0x4467,_0x536adb=_0x5dced8();while(!![]){try{const _0x42876e=parseInt(_0x25d65f(0x22f))/0x1+-parseInt(_0x25d65f(0x1dc))/0x2*(parseInt(_0x25d65f(0x1d3))/0x3)+parseInt(_0x1943e2(0x21c,'ybTd'))/0x4+-parseInt(_0x1943e2(0x1f5,'LVsR'))/0x5+-parseInt(_0x50618a(0x1f6))/0x6+parseInt(_0x1943e2(0x1e7,'H)Mn'))/0x7+parseInt(_0x1943e2(0x21d,'dVE$'))/0x8*(-parseInt(_0x1943e2(0x1cc,'Be02'))/0x9);if(_0x42876e===_0x4a0c21)break;else _0x536adb['push'](_0x536adb['shift']());}catch(_0x4893ea){_0x536adb['push'](_0x536adb['shift']());}}}(_0x133b,0xe254e));let app_soy_wdcb_data=[],app_soy_wdcb_UA,subTitle='';!(async()=>{const _0x44bf54=_0x4467,_0x54a5b6=_0x552f,_0x4fffde=_0x12e9;if($['isNode']()){if(!process[_0x4fffde(0x221)][_0x54a5b6(0x20f,'A^4)')]){console[_0x54a5b6(0x1db,'Y)JT')](_0x54a5b6(0x223,'H)Mn'));return;}if(process[_0x4fffde(0x221)][_0x44bf54(0x21a)]&&process[_0x54a5b6(0x1f7,'dt!W')]['soy_wdcb_data']['indexOf']('@')>-0x1)app_soy_wdcb_data=process[_0x54a5b6(0x201,'E^tM')][_0x44bf54(0x21a)]['split']('@');else{if(process['env'][_0x4fffde(0x225)]&&process['env'][_0x54a5b6(0x205,'ybTd')][_0x4fffde(0x1fd)]('\x0a')>-0x1)app_soy_wdcb_data=process[_0x44bf54(0x22b)][_0x4fffde(0x225)][_0x54a5b6(0x1f8,'8Mxf')]('\x0a');else process[_0x54a5b6(0x22d,'Y)JT')][_0x4fffde(0x225)]&&process[_0x44bf54(0x22b)]['soy_wdcb_data'][_0x4fffde(0x1fd)]('#')>-0x1?app_soy_wdcb_data=process['env'][_0x44bf54(0x21a)][_0x4fffde(0x1c2)]('#'):app_soy_wdcb_data=process[_0x44bf54(0x22b)][_0x4fffde(0x225)][_0x54a5b6(0x21f,'&(Hf')]();};if(process['env'][_0x4fffde(0x224)]){if(process[_0x4fffde(0x221)][_0x4fffde(0x224)][_0x54a5b6(0x22a,'8Mxf')]('@')>-0x1)app_soy_wdcb_UA=process['env'][_0x54a5b6(0x1e6,']myG')][_0x54a5b6(0x1d4,'M4%H')]('@');else{if(process[_0x54a5b6(0x22e,'*oVU')][_0x54a5b6(0x226,'dt!W')][_0x4fffde(0x1fd)]('\x0a')>-0x1)app_soy_wdcb_UA=process['env'][_0x54a5b6(0x1ca,'H)Mn')][_0x4fffde(0x1c2)]('\x0a');else process[_0x44bf54(0x22b)][_0x54a5b6(0x1e8,'u@Kj')][_0x44bf54(0x1fe)]('#')>-0x1?app_soy_wdcb_UA=process['env'][_0x54a5b6(0x1f1,'%vbG')]['split']('#'):app_soy_wdcb_UA=process['env']['soy_wdcb_UA']['split']();};}}else{if(!$[_0x54a5b6(0x1e5,'1YqA')](_0x44bf54(0x21a))){console[_0x44bf54(0x210)](_0x54a5b6(0x20e,'L0MT'));return;}if($[_0x54a5b6(0x1d7,'8Mxf')]('soy_wdcb_data')&&$[_0x44bf54(0x1e9)](_0x54a5b6(0x20b,'#$Is'))['indexOf']('@')>-0x1)app_soy_wdcb_data=$[_0x4fffde(0x202)](_0x44bf54(0x21a))['split']('@');else{if($[_0x44bf54(0x1e9)](_0x44bf54(0x21a))&&$[_0x44bf54(0x1e9)](_0x44bf54(0x21a))['indexOf']('\x0a')>-0x1)app_soy_wdcb_data=$[_0x44bf54(0x1e9)]('soy_wdcb_data')[_0x4fffde(0x1c2)]('\x0a');else $[_0x44bf54(0x1e9)](_0x4fffde(0x225))&&$[_0x54a5b6(0x1eb,'MIXm')](_0x4fffde(0x225))[_0x4fffde(0x1fd)]('#')>-0x1?app_soy_wdcb_data=$['getdata'](_0x4fffde(0x225))[_0x54a5b6(0x212,'u@Kj')]('#'):app_soy_wdcb_data=$[_0x54a5b6(0x1ec,'dVE$')](_0x4fffde(0x225))['split']();};if($['getdata'](_0x44bf54(0x1e1))&&$[_0x4fffde(0x202)](_0x44bf54(0x1e1))[_0x44bf54(0x1fe)]('@')>-0x1)app_soy_wdcb_UA=$[_0x44bf54(0x1e9)]('soy_wdcb_UA')[_0x4fffde(0x1c2)]('@');else{if($[_0x44bf54(0x1e9)](_0x44bf54(0x1e1))&&$['getdata'](_0x54a5b6(0x1f1,'%vbG'))['indexOf']('\x0a')>-0x1)app_soy_wdcb_UA=$[_0x4fffde(0x202)](_0x54a5b6(0x1c5,'&(Hf'))[_0x54a5b6(0x206,'vgbL')]('\x0a');else $['getdata'](_0x54a5b6(0x1c7,'LVsR'))&&$[_0x54a5b6(0x1d0,'zM4O')](_0x54a5b6(0x1e6,']myG'))['indexOf']('#')>-0x1?app_soy_wdcb_UA=$['getdata']('soy_wdcb_UA')[_0x44bf54(0x207)]('#'):app_soy_wdcb_UA=$['getdata']('soy_wdcb_UA')[_0x4fffde(0x1c2)]();};}console[_0x44bf54(0x210)]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()[_0x44bf54(0x204)]()+new Date()[_0x4fffde(0x1f9)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x4fffde(0x1c6)),console[_0x44bf54(0x210)](_0x54a5b6(0x20c,'i)9C')+app_soy_wdcb_data[_0x4fffde(0x1da)]+_0x4fffde(0x20d));for(i=0x0;i<app_soy_wdcb_data[_0x54a5b6(0x1c0,'totD')];i++){soy_wdcb_data=app_soy_wdcb_data[i][_0x4fffde(0x1c2)]('&'),soy_wdcb_mobile=soy_wdcb_data[0x0],soy_wdcb_password=soy_wdcb_data[0x1];app_soy_wdcb_UA?(soy_wdcb_UA=app_soy_wdcb_UA[i],!soy_wdcb_UA&&(soy_wdcb_UA=_0x44bf54(0x1d1))):soy_wdcb_UA=_0x4fffde(0x217);if(!soy_wdcb_mobile||!soy_wdcb_password){console[_0x54a5b6(0x22c,'1YqA')](_0x4fffde(0x21e));return;}else $[_0x54a5b6(0x200,'zM4O')]=i+0x1,await implement();};})()[_0x5cc298(0x1e0,'%VrR')](_0x1cacea=>$[_0x5cc298(0x1d8,']C(B')](_0x1cacea))[_0x9ef13(0x215)](()=>$[_0xacafc9(0x1f4)]());async function implement(){const _0x1a40f9=_0x5cc298,_0x209db2=_0xacafc9;host=_0x209db2(0x1dd),console[_0x1a40f9(0x1df,'F4vQ')](_0x209db2(0x1fb)+$['index']+_0x209db2(0x1e3)),await soy_wdcb_login(0x1),await soy_wdcb_login(0x0);}function soy_wdcb_login(_0x3e3c6e){const _0x52e625=_0x5cc298;ID='',token='';let _0x12198c=Post_request('home/index/login',_0x52e625(0x1ea,'UO%(')+soy_wdcb_mobile+'\x22,\x22password\x22:\x22'+soy_wdcb_password+'\x22}');return new Promise((_0x366a8d,_0x543d75)=>{const _0x2327e7=_0x4467;$[_0x2327e7(0x222)](_0x12198c,async(_0x53484c,_0x3cc942,_0x1d1113)=>{const _0x3dc497=_0x2327e7,_0x1bb6c1=_0x552f,_0x31a087=_0x12e9;try{if(_0x53484c)console[_0x31a087(0x1c9)](_0x31a087(0x1e2)+$['index']+_0x1bb6c1(0x1c8,'zM4O')),subTitle+=_0x3dc497(0x1c1)+$[_0x31a087(0x1cb)]+_0x3dc497(0x1de);else{let _0xcc6911=JSON[_0x31a087(0x1f3)](_0x1d1113);_0xcc6911[_0x1bb6c1(0x1d6,'u@Kj')]==0x1?(ID=_0xcc6911[_0x1bb6c1(0x1ef,'E^tM')]['id'],token=_0xcc6911[_0x31a087(0x1fa)],coins=_0xcc6911['data'][_0x3dc497(0x209)],money=_0xcc6911[_0x1bb6c1(0x211,'#$Is')][_0x3dc497(0x231)],castle=_0xcc6911[_0x3dc497(0x21b)][_0x3dc497(0x1cd)],_0x3e3c6e==0x0?(console[_0x3dc497(0x210)]('\x0a【soy脚本提示---账号\x20'+$[_0x1bb6c1(0x1cf,'F4vQ')]+_0x31a087(0x228)+ID+_0x1bb6c1(0x208,'E^tM')+coins+_0x31a087(0x216)+money+'\x0a---当前圣杯：'+castle),subTitle+=_0x1bb6c1(0x20a,'F4vQ')+$['index']+'\x20用户信息】:\x20\x0a---用户ID：'+ID+'\x0a---当前金币：'+coins+_0x1bb6c1(0x229,'z*q%')+money+'\x0a---当前圣杯：'+castle):await soy_wdcb_getBonusMoney()):(console[_0x3dc497(0x210)]('\x0a【soy脚本提示---账号\x20'+$[_0x3dc497(0x203)]+_0x3dc497(0x218)+_0xcc6911[_0x1bb6c1(0x219,'8Mxf')]),subTitle+=_0x3dc497(0x1c1)+$[_0x3dc497(0x203)]+_0x3dc497(0x218)+_0xcc6911[_0x1bb6c1(0x220,'9f@h')]);}}catch(_0x5f1381){console[_0x1bb6c1(0x1f2,'E^tM')](_0x5f1381,_0x3cc942);}finally{_0x366a8d();}});});}function _0x12e9(_0x19c7bc,_0x588427){const _0x133b03=_0x133b();return _0x12e9=function(_0x12e9c3,_0x158324){_0x12e9c3=_0x12e9c3-0x1c0;let _0x32fbed=_0x133b03[_0x12e9c3];return _0x32fbed;},_0x12e9(_0x19c7bc,_0x588427);}function soy_wdcb_getBonusMoney(){const _0x5bd3fd=_0x5cc298;let _0xc6faee=Get_request(_0x5bd3fd(0x213,'9f@h'));return new Promise((_0x1f2a3d,_0xeb5a55)=>{$['get'](_0xc6faee,async(_0x4fd9ad,_0x50ea5c,_0x39c419)=>{const _0x4832e2=_0x552f,_0x60a5d7=_0x4467,_0x18e70e=_0x12e9;try{_0x4fd9ad&&(console['log'](_0x18e70e(0x1e2)+$[_0x18e70e(0x1cb)]+'\x20领取任务】:\x20网络请求失败'),subTitle+=_0x60a5d7(0x1c1)+$[_0x18e70e(0x1cb)]+_0x60a5d7(0x1ee));let _0x5bb839=JSON[_0x60a5d7(0x1d2)](_0x39c419);_0x5bb839[_0x4832e2(0x214,'FEb7')]==0x1?console[_0x18e70e(0x1c9)](_0x4832e2(0x1e4,'UO%(')+$['index']+_0x60a5d7(0x1c3)+_0x5bb839[_0x18e70e(0x1ce)]):console[_0x4832e2(0x1ed,'dt!W')](_0x60a5d7(0x1c1)+$[_0x18e70e(0x1cb)]+'\x20领取分红】:\x20'+_0x5bb839[_0x18e70e(0x1ce)]);}catch(_0x69d045){console[_0x60a5d7(0x210)](_0x69d045,_0x50ea5c);}finally{_0x1f2a3d();}});});}function Post_request(_0x17fc5c,_0x5c5cca){const _0x45974a=_0x5cc298,_0x5a2531=_0xacafc9;return{'url':''+host+_0x17fc5c,'headers':{'TC-Id':''+ID,'TC-Token':''+token,'user-agent':''+soy_wdcb_UA,'Content-Type':'application/json','Host':_0x5a2531(0x227),'Connection':_0x45974a(0x1d5,'ntUx'),'Accept-Encoding':'gzip','Content-Length':_0x5c5cca[_0x5a2531(0x1da)]},'body':_0x5c5cca};}function _0x552f(_0x19c7bc,_0x588427){const _0x133b03=_0x133b();return _0x552f=function(_0x12e9c3,_0x158324){_0x12e9c3=_0x12e9c3-0x1c0;let _0x32fbed=_0x133b03[_0x12e9c3];if(_0x552f['UuANHy']===undefined){var _0x4e7042=function(_0x22b09f){const _0x1b9272='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x565723='',_0x4a0c1c='';for(let _0x317906=0x0,_0x5e771e,_0x552f54,_0x2e8d52=0x0;_0x552f54=_0x22b09f['charAt'](_0x2e8d52++);~_0x552f54&&(_0x5e771e=_0x317906%0x4?_0x5e771e*0x40+_0x552f54:_0x552f54,_0x317906++%0x4)?_0x565723+=String['fromCharCode'](0xff&_0x5e771e>>(-0x2*_0x317906&0x6)):0x0){_0x552f54=_0x1b9272['indexOf'](_0x552f54);}for(let _0xc2acc4=0x0,_0x4e7660=_0x565723['length'];_0xc2acc4<_0x4e7660;_0xc2acc4++){_0x4a0c1c+='%'+('00'+_0x565723['charCodeAt'](_0xc2acc4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a0c1c);};const _0x44674e=function(_0x195830,_0x1dd813){let _0x4c3716=[],_0x1cacea=0x0,_0x3e3c6e,_0x12198c='';_0x195830=_0x4e7042(_0x195830);let _0x366a8d;for(_0x366a8d=0x0;_0x366a8d<0x100;_0x366a8d++){_0x4c3716[_0x366a8d]=_0x366a8d;}for(_0x366a8d=0x0;_0x366a8d<0x100;_0x366a8d++){_0x1cacea=(_0x1cacea+_0x4c3716[_0x366a8d]+_0x1dd813['charCodeAt'](_0x366a8d%_0x1dd813['length']))%0x100,_0x3e3c6e=_0x4c3716[_0x366a8d],_0x4c3716[_0x366a8d]=_0x4c3716[_0x1cacea],_0x4c3716[_0x1cacea]=_0x3e3c6e;}_0x366a8d=0x0,_0x1cacea=0x0;for(let _0x543d75=0x0;_0x543d75<_0x195830['length'];_0x543d75++){_0x366a8d=(_0x366a8d+0x1)%0x100,_0x1cacea=(_0x1cacea+_0x4c3716[_0x366a8d])%0x100,_0x3e3c6e=_0x4c3716[_0x366a8d],_0x4c3716[_0x366a8d]=_0x4c3716[_0x1cacea],_0x4c3716[_0x1cacea]=_0x3e3c6e,_0x12198c+=String['fromCharCode'](_0x195830['charCodeAt'](_0x543d75)^_0x4c3716[(_0x4c3716[_0x366a8d]+_0x4c3716[_0x1cacea])%0x100]);}return _0x12198c;};_0x552f['JsXgmk']=_0x44674e,_0x19c7bc=arguments,_0x552f['UuANHy']=!![];}const _0x501b8d=_0x133b03[0x0],_0x4808f6=_0x12e9c3+_0x501b8d,_0x59fdb8=_0x19c7bc[_0x4808f6];return!_0x59fdb8?(_0x552f['hkfYfR']===undefined&&(_0x552f['hkfYfR']=!![]),_0x32fbed=_0x552f['JsXgmk'](_0x32fbed,_0x158324),_0x19c7bc[_0x4808f6]=_0x32fbed):_0x32fbed=_0x59fdb8,_0x32fbed;},_0x552f(_0x19c7bc,_0x588427);};function Get_request(_0x37ff41){const _0x4c4475=_0xacafc9,_0x12575b=_0x9ef13;return{'url':''+host+_0x37ff41,'headers':{'TC-Id':''+ID,'TC-Token':''+token,'user-agent':''+soy_wdcb_UA,'Host':_0x12575b(0x1c4),'Connection':_0x4c4475(0x1f0),'Accept-Encoding':_0x12575b(0x230)}};};


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