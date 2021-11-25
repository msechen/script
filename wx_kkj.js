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


function _0x2502(_0x3258bf,_0x46f3b2){const _0xe62469=_0xe624();return _0x2502=function(_0x4146a1,_0x15aa9b){_0x4146a1=_0x4146a1-0xaf;let _0x53acdd=_0xe62469[_0x4146a1];if(_0x2502['lDrgmq']===undefined){var _0x161f5a=function(_0x1dd156){const _0xfd7f9d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x29ea08='',_0x3709a6='';for(let _0x549612=0x0,_0x454e0a,_0x250245,_0x141f2a=0x0;_0x250245=_0x1dd156['charAt'](_0x141f2a++);~_0x250245&&(_0x454e0a=_0x549612%0x4?_0x454e0a*0x40+_0x250245:_0x250245,_0x549612++%0x4)?_0x29ea08+=String['fromCharCode'](0xff&_0x454e0a>>(-0x2*_0x549612&0x6)):0x0){_0x250245=_0xfd7f9d['indexOf'](_0x250245);}for(let _0x210031=0x0,_0x44f052=_0x29ea08['length'];_0x210031<_0x44f052;_0x210031++){_0x3709a6+='%'+('00'+_0x29ea08['charCodeAt'](_0x210031)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3709a6);};const _0x3c68d6=function(_0x4c5d51,_0x57bd90){let _0x546a71=[],_0x1ef56e=0x0,_0x319f64,_0x3bacec='';_0x4c5d51=_0x161f5a(_0x4c5d51);let _0x4f76a6;for(_0x4f76a6=0x0;_0x4f76a6<0x100;_0x4f76a6++){_0x546a71[_0x4f76a6]=_0x4f76a6;}for(_0x4f76a6=0x0;_0x4f76a6<0x100;_0x4f76a6++){_0x1ef56e=(_0x1ef56e+_0x546a71[_0x4f76a6]+_0x57bd90['charCodeAt'](_0x4f76a6%_0x57bd90['length']))%0x100,_0x319f64=_0x546a71[_0x4f76a6],_0x546a71[_0x4f76a6]=_0x546a71[_0x1ef56e],_0x546a71[_0x1ef56e]=_0x319f64;}_0x4f76a6=0x0,_0x1ef56e=0x0;for(let _0x2c3f70=0x0;_0x2c3f70<_0x4c5d51['length'];_0x2c3f70++){_0x4f76a6=(_0x4f76a6+0x1)%0x100,_0x1ef56e=(_0x1ef56e+_0x546a71[_0x4f76a6])%0x100,_0x319f64=_0x546a71[_0x4f76a6],_0x546a71[_0x4f76a6]=_0x546a71[_0x1ef56e],_0x546a71[_0x1ef56e]=_0x319f64,_0x3bacec+=String['fromCharCode'](_0x4c5d51['charCodeAt'](_0x2c3f70)^_0x546a71[(_0x546a71[_0x4f76a6]+_0x546a71[_0x1ef56e])%0x100]);}return _0x3bacec;};_0x2502['ffgpGK']=_0x3c68d6,_0x3258bf=arguments,_0x2502['lDrgmq']=!![];}const _0x1c3720=_0xe62469[0x0],_0x1d6bd8=_0x4146a1+_0x1c3720,_0x334f77=_0x3258bf[_0x1d6bd8];return!_0x334f77?(_0x2502['ggDGFE']===undefined&&(_0x2502['ggDGFE']=!![]),_0x53acdd=_0x2502['ffgpGK'](_0x53acdd,_0x15aa9b),_0x3258bf[_0x1d6bd8]=_0x53acdd):_0x53acdd=_0x334f77,_0x53acdd;},_0x2502(_0x3258bf,_0x46f3b2);}const _0x50bb45=_0x4146,_0x3070b7=_0x3c68,_0x5b26f1=_0x2502;(function(_0x22e7e1,_0x2ea934){const _0x26aec9=_0x4146,_0x3b23bc=_0x3c68,_0x1605e3=_0x2502,_0x1f1fcf=_0x22e7e1();while(!![]){try{const _0x381761=-parseInt(_0x1605e3(0xc1,'6AE@'))/0x1+-parseInt(_0x1605e3(0x10b,'FjlZ'))/0x2+parseInt(_0x1605e3(0x121,'m7#S'))/0x3*(parseInt(_0x3b23bc(0xf0))/0x4)+parseInt(_0x1605e3(0xb4,'V0#6'))/0x5+parseInt(_0x3b23bc(0xf7))/0x6+-parseInt(_0x1605e3(0x130,'G2Zc'))/0x7+parseInt(_0x26aec9(0xeb))/0x8;if(_0x381761===_0x2ea934)break;else _0x1f1fcf['push'](_0x1f1fcf['shift']());}catch(_0x2d4fb5){_0x1f1fcf['push'](_0x1f1fcf['shift']());}}}(_0xe624,0x604b4));let app_soy_kkj_ticket=[],app_soy_kkj_UA=[],subTitle='';function _0x4146(_0x3258bf,_0x46f3b2){const _0xe62469=_0xe624();return _0x4146=function(_0x4146a1,_0x15aa9b){_0x4146a1=_0x4146a1-0xaf;let _0x53acdd=_0xe62469[_0x4146a1];return _0x53acdd;},_0x4146(_0x3258bf,_0x46f3b2);}!(async()=>{const _0xde2d64=_0x3c68,_0x303e3f=_0x4146,_0x589f4b=_0x2502;if($[_0x589f4b(0x10a,'ORNY')]()){if(!process[_0x303e3f(0x118)][_0x589f4b(0x126,'ZX3I')]){console[_0xde2d64(0xfe)]('\x0a【'+$[_0x589f4b(0x11d,'MT*6')]+'】：未填写相应变量\x20soy_kkj_ticket');return;}if(process[_0x589f4b(0x123,'VG^P')][_0x303e3f(0xfc)]&&process[_0x589f4b(0xb6,'v@1X')][_0x303e3f(0xfc)]['indexOf']('@')>-0x1)app_soy_kkj_ticket=process[_0x303e3f(0x118)][_0x589f4b(0xc7,'R15V')]['split']('@');else{if(process['env'][_0xde2d64(0xf1)]&&process[_0xde2d64(0x10c)]['soy_kkj_ticket'][_0x303e3f(0x124)]('\x0a')>-0x1)app_soy_kkj_ticket=process[_0x589f4b(0xfb,'5VE7')][_0x303e3f(0xfc)]['split']('\x0a');else process[_0xde2d64(0x10c)][_0x589f4b(0x125,'&4Dn')]&&process[_0x303e3f(0x118)]['soy_kkj_ticket']['indexOf']('#')>-0x1?app_soy_kkj_ticket=process[_0x589f4b(0xb7,'G2Zc')]['soy_kkj_ticket'][_0xde2d64(0x100)]('#'):app_soy_kkj_ticket=process[_0x589f4b(0xbd,'G4*Y')][_0x303e3f(0xfc)]['split']();};if(process[_0xde2d64(0x10c)][_0xde2d64(0xf5)]&&process[_0x589f4b(0xbd,'G4*Y')]['soy_kkj_UA'][_0xde2d64(0xbf)]('@')>-0x1)app_soy_kkj_UA=process['env']['soy_kkj_UA'][_0xde2d64(0x100)]('@');else{if(process[_0x303e3f(0x118)][_0x303e3f(0x128)]&&process[_0x303e3f(0x118)][_0x303e3f(0x128)][_0x303e3f(0x124)]('\x0a')>-0x1)app_soy_kkj_UA=process[_0x589f4b(0x10e,'6AE@')][_0x589f4b(0xd3,'R15V')][_0x589f4b(0xc3,'szuY')]('\x0a');else process[_0xde2d64(0x10c)]['soy_kkj_UA']&&process['env'][_0x589f4b(0x116,'Hbb*')][_0x589f4b(0x113,'v@1X')]('#')>-0x1?app_soy_kkj_UA=process['env'][_0x589f4b(0x129,'TI]O')]['split']('#'):app_soy_kkj_UA=process[_0xde2d64(0x10c)]['soy_kkj_UA'][_0x589f4b(0x120,'X5&V')]();};}else{if(!$[_0x589f4b(0xdf,'V#@(')](_0x589f4b(0xef,'[UBp'))){console[_0xde2d64(0xfe)]('\x0a【'+$[_0xde2d64(0xf8)]+_0x589f4b(0x106,'6AE@'));return;}if($[_0xde2d64(0xd1)](_0x303e3f(0xfc))&&$[_0xde2d64(0xd1)](_0x589f4b(0xef,'[UBp'))[_0x589f4b(0xe2,'szuY')]('@')>-0x1)app_soy_kkj_ticket=$['getdata']('soy_kkj_ticket')[_0x303e3f(0xe3)]('@');else{if($[_0x303e3f(0xd6)](_0xde2d64(0xf1))&&$[_0xde2d64(0xd1)](_0xde2d64(0xf1))[_0x303e3f(0x124)]('\x0a')>-0x1)app_soy_kkj_ticket=$['getdata']('soy_kkj_ticket')[_0x303e3f(0xe3)]('\x0a');else $[_0x589f4b(0xfa,'G2Zc')](_0xde2d64(0xf1))&&$['getdata'](_0x303e3f(0xfc))['indexOf']('#')>-0x1?app_soy_kkj_ticket=$[_0xde2d64(0xd1)](_0x589f4b(0xf2,'V0#6'))[_0x589f4b(0x122,'atUf')]('#'):app_soy_kkj_ticket=$[_0x589f4b(0xb8,'&4Dn')](_0xde2d64(0xf1))[_0xde2d64(0x100)]();};if($[_0x303e3f(0xd6)](_0xde2d64(0xf5))&&$[_0xde2d64(0xd1)](_0xde2d64(0xf5))['indexOf']('@')>-0x1)app_soy_kkj_UA=$[_0x589f4b(0x11f,'G4*Y')](_0x303e3f(0x128))[_0x303e3f(0xe3)]('@');else{if($[_0x303e3f(0xd6)](_0x589f4b(0xe5,'f[Pz'))&&$['getdata'](_0x303e3f(0x128))[_0x303e3f(0x124)]('\x0a')>-0x1)app_soy_kkj_UA=$['getdata'](_0xde2d64(0xf5))[_0x589f4b(0x105,'bkid')]('\x0a');else $[_0x303e3f(0xd6)](_0x303e3f(0x128))&&$[_0x589f4b(0x12c,'n$H2')](_0xde2d64(0xf5))[_0x589f4b(0xe2,'szuY')]('#')>-0x1?app_soy_kkj_UA=$[_0x589f4b(0x12e,'4H7*')](_0x303e3f(0x128))['split']('#'):app_soy_kkj_UA=$[_0x589f4b(0xff,'AE34')](_0x589f4b(0x109,'MT*6'))['split']();};}console[_0x589f4b(0xf6,'FjlZ')](_0xde2d64(0xcd)+new Date(new Date()[_0xde2d64(0x127)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x589f4b(0xe4,'BAFW')]()+_0xde2d64(0xb9)),console[_0x303e3f(0x12d)](_0x303e3f(0xb1)+app_soy_kkj_ticket[_0xde2d64(0xe8)]+'\x20个账号】===\x0a');for(i=0x0;i<app_soy_kkj_ticket['length'];i++){soy_kkj_ticket=app_soy_kkj_ticket[i],soy_kkj_UA=app_soy_kkj_UA[i],!soy_kkj_UA&&(soy_kkj_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1.0;\x20ALP-AL00\x20Build/HUAWEIALP-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/66.0.3359.126\x20Mobile\x20Safari/537.36\x20baiduboxapp/10.0.5.11\x20(Baidu;\x20P1\x208.1.0)'),$[_0x303e3f(0x103)]=i+0x1,await implement();};})()[_0x5b26f1(0x110,'YUcU')](_0x1ef56e=>$[_0x3070b7(0xc4)](_0x1ef56e))[_0x50bb45(0xd7)](()=>$['done']());function _0x3c68(_0x3258bf,_0x46f3b2){const _0xe62469=_0xe624();return _0x3c68=function(_0x4146a1,_0x15aa9b){_0x4146a1=_0x4146a1-0xaf;let _0x53acdd=_0xe62469[_0x4146a1];if(_0x3c68['AsGzKW']===undefined){var _0x161f5a=function(_0x3c68d6){const _0x1dd156='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xfd7f9d='',_0x29ea08='';for(let _0x3709a6=0x0,_0x549612,_0x454e0a,_0x250245=0x0;_0x454e0a=_0x3c68d6['charAt'](_0x250245++);~_0x454e0a&&(_0x549612=_0x3709a6%0x4?_0x549612*0x40+_0x454e0a:_0x454e0a,_0x3709a6++%0x4)?_0xfd7f9d+=String['fromCharCode'](0xff&_0x549612>>(-0x2*_0x3709a6&0x6)):0x0){_0x454e0a=_0x1dd156['indexOf'](_0x454e0a);}for(let _0x141f2a=0x0,_0x210031=_0xfd7f9d['length'];_0x141f2a<_0x210031;_0x141f2a++){_0x29ea08+='%'+('00'+_0xfd7f9d['charCodeAt'](_0x141f2a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x29ea08);};_0x3c68['QKKCxi']=_0x161f5a,_0x3258bf=arguments,_0x3c68['AsGzKW']=!![];}const _0x1c3720=_0xe62469[0x0],_0x1d6bd8=_0x4146a1+_0x1c3720,_0x334f77=_0x3258bf[_0x1d6bd8];return!_0x334f77?(_0x53acdd=_0x3c68['QKKCxi'](_0x53acdd),_0x3258bf[_0x1d6bd8]=_0x53acdd):_0x53acdd=_0x334f77,_0x53acdd;},_0x3c68(_0x3258bf,_0x46f3b2);}async function implement(){const _0x986915=_0x5b26f1,_0x17d79f=_0x50bb45;host=_0x17d79f(0x11b),console[_0x986915(0xb5,'Ex%k')](_0x17d79f(0x12b)+$[_0x986915(0x101,'O!25')]+_0x986915(0xe6,'2i9^')),await soy_kkj_getTask(),notify&&await notify[_0x986915(0xca,'2i9^')]($['name'],subTitle);}function soy_kkj_getTask(){let _0x319f64=Post_request('getTask?ticket='+soy_kkj_ticket+'&_t='+random(),'');return new Promise((_0x3bacec,_0x4f76a6)=>{const _0xa0e720=_0x2502;$[_0xa0e720(0xdb,'atUf')](_0x319f64,async(_0x2c3f70,_0x2f57b0,_0x16eb41)=>{const _0x5b5f8b=_0x3c68,_0x4c06a9=_0xa0e720,_0x43c851=_0x4146;try{if(_0x2c3f70)console[_0x43c851(0x12d)]('\x0a【'+$[_0x4c06a9(0xd8,'atUf')]+_0x4c06a9(0xd4,'v@1X')+$['index']+_0x5b5f8b(0xc0)),subTitle+='\x0a【'+$[_0x4c06a9(0x11c,'n$H2')]+_0x4c06a9(0x11a,'ZX3I')+$[_0x4c06a9(0x102,'n$H2')]+_0x5b5f8b(0xc0);else{let _0x53072b=JSON[_0x43c851(0x10f)](_0x16eb41);_0x53072b[_0x5b5f8b(0xe1)]==0x0?(console[_0x43c851(0x12d)]('\x0a【'+$[_0x4c06a9(0xdd,'ZX3I')]+_0x43c851(0xb0)+$[_0x5b5f8b(0xf4)]+_0x5b5f8b(0xcc)),article=_0x53072b[_0x5b5f8b(0xfd)][_0x5b5f8b(0xc9)],tgid=_0x53072b[_0x43c851(0xde)][_0x43c851(0xbe)],await soy_kkj_read(),await $[_0x43c851(0xe0)](Math[_0x4c06a9(0xd0,'ok]J')](Math['random']()*(0x2710-0x1770+0x3e8)+0x1770)),await soy_kkj_submit()):(console[_0x4c06a9(0x115,'G4*Y')]('\x0a【'+$[_0x4c06a9(0xb3,'FjlZ')]+_0x4c06a9(0x114,'5VE7')+$[_0x4c06a9(0xd9,'DTW%')]+_0x43c851(0x10d)+_0x53072b[_0x5b5f8b(0xf9)]),subTitle+='\x0a【'+$[_0x43c851(0xc8)]+'---账号\x20'+$[_0x43c851(0x103)]+_0x5b5f8b(0xcb)+_0x53072b[_0x43c851(0xaf)]);}}catch(_0xa71a11){console[_0x5b5f8b(0xfe)](_0xa71a11,_0x2f57b0);}finally{_0x3bacec();}});});}function soy_kkj_read(){return new Promise((_0x3a962c,_0x54521f)=>{$['get']({'url':''+article,'headers':{'User-Agent':soy_kkj_UA},'body':body},async(_0x225f7a,_0x28651f,_0x3f03bf)=>{try{}catch(_0x568ce4){console['log'](_0x568ce4,_0x28651f);}finally{_0x3a962c();}});});}function _0xe624(){const _0x421d2d=['WR0EvmoqW58OW6dcIe3cPw/cMW','krLWca','FKePpHa','Bg9NrxjY','\x0a---当前积分：','WR1UW5zLWQrYjmoucmo7W6JdMG','WRFdRmk1tGH7yKNcJNVcQhWlWQm','name','DxjS','r8kMnCkmiumbW7Wmxa','ioIoT+wpLUAwH+EROooaKtOG','ioIoT+wpLUAwH+EROooaKtOG6i635y+w5OIq5yQF','cJ09psdOHjRMNkZMIAFOOyWGlsdLJjFKUQZML7BPL7tVVjO','W53dMCoQ','igVcOgFcHKanBguEW5ddUCobsvVdJun4b3RcGmkzWP0','W7ddLMxdQmo+','z2v0zgf0yq','\x20提交任务】:\x20网络请求失败','WRFdRmk1tGH7yKNcR1m','WQ8oW6xOTQ/LJyZdLG','W43cRmot','getdata','finally','m1FcPwe','hSoOW7NcSCks','Aw52AxrLq29Kzq','lvNcU3a','&_t=','dCoKW5Cc','data','WOFcLIBcS8kylCoJ','wait','y29Kzq','zf8HmHWIWQe','split','oCkfWP5rFrdcHspcGgpcJHb1WOq','nrOldmk8etrXBSou','fos7QEI1VEwmN+s6LowkJEobPa','WQ/dPSkPyu5Xzh/cJhC','BgvUz3rO','Cg9ZDa','226894SPyxsq','7301240RWUCst','W6WTWPuNWQLTxSoOsSoCW4VdSCkIDSk8WO9TtCovWP0+WRW','018','random','W7C2WPGiW7GPg8oAemoaW4hdVCo+Bq','ohHowxjtsq','C295x2TRAL90AwnRzxq','WQbDhCkYW7VdNhbusKpcOqblDG','vmocnEI0QEwnJfG','Aw5KzxG','C295x2TRAL9vqq','DXJcUG','mJeXnte2mKXZCND4uq','BMfTzq','BxnN','W5BdK8o5y0rJma','W6FdTte','soy_kkj_ticket','zgf0yq','Bg9N','wCkcW7pdMSoIWRldSW','C3bSAxq','aXhcQCktEG','B3tdIsxdUa','index','WRPtBdpcPwq','nCo5DqXG','44kE77Y25P2i5Akd5yw/55UK5BIN5yYa6yE7W71VWOxdUH4FtMzTWObvWPxcQGrO','ncVcNhxcSxSDW4lcNmk+jKpdNG','C3vIBwL0p3rPy2TLDd0','DSobWRdcLY9rzgBcO0e','mCopWQXqENS','iKddQK7dJwnxhmkyW6/cPZq','zw52','\x20获取文章】:\x20','W6Pcfa','parse','W4lcOSoaW6VcTa','W4PXcCkiaa0PEd/dTsOqWQm','zMXVB3i','W6TnWQZdRmodWRLq','WQ/cTMROT6/LJzDm','W6ZcGCoI','ex3dSs/cN8kHW5pdNwWG','W6pcVbii','env','dcount','tSkOWPFOTyhLJlyx','http://ydt.kxlock.com:443/code008/ydt2/','AhVdGcu','A8opWQtcRq','qdCYW4dcH1m8nu19DwHGu14MW6DwcgRcMmkVW7ZdICkYW7mYW68yFSoFr8k6','W6FcI8oXAbFcMSoh','W6DVzdJdIa','WQ4wpMNdSgOfWP3dH8oHWOXM','lKBcPg0r','WOnGdW','indexOf','m2JcJt3cOr7dOqr8W6JcLgdcMCkl','emoQW4m4WQPCkrHsWOyqieZdIa','z2v0vgLTzq','soy_kkj_UA','Ew8JW4GEeZ3dS8k1wG','DWldG3C','\x0a开始【第\x20','yx/dMstdOtLo','log','rmofhYFdTNrp','W4RMJPFKUk3KUjlLI4xJGzr6sG','WOxcHmk6mXiMymoNWQ8KdSkcWP0','msg','---账号\x20','===【共\x20','code','DrBcSbK','W6ihuCouWQtcJIPsE0lcHIf/','y8oCWO8','W6DnWR4','W5tdMmo7','j2lcGaBcQWhdQG','id09pqO','CgfYC2u','l2xcVwFcKe9gzc0hW5JdQSkD','Cg9PBNrZ','W6xcGmoZ','tgid','Aw5KzxHpzG','ioIoT+wpLUAwH+EROooaKtOG572r57UC6k+35Rgc5AsX6lsL'];_0xe624=function(){return _0x421d2d;};return _0xe624();}function soy_kkj_submit(){const _0x300bc2=_0x50bb45,_0x2603f4=_0x5b26f1,_0x2b05c9=_0x3070b7;let _0x3f6676=Post_request(_0x2b05c9(0x108)+soy_kkj_ticket+_0x2603f4(0x104,'m7#S')+tgid+_0x300bc2(0xdc)+random(),'');return new Promise((_0x377e9c,_0x12e4bf)=>{const _0x224c99=_0x2b05c9;$[_0x224c99(0xe9)](_0x3f6676,async(_0x4e4790,_0x4f5cae,_0x45f948)=>{const _0x39ebe0=_0x4146,_0x4e0ded=_0x2502,_0x1d22f1=_0x224c99;try{if(_0x4e4790)console[_0x1d22f1(0xfe)]('\x0a【'+$[_0x4e0ded(0xc2,'aPpS')]+'---账号\x20'+$[_0x39ebe0(0x103)]+_0x39ebe0(0xd2)),subTitle+='\x0a【'+$['name']+_0x39ebe0(0xb0)+$[_0x39ebe0(0x103)]+'\x20提交任务】:\x20网络请求失败';else{let _0x5a89fd=JSON[_0x1d22f1(0xba)](_0x45f948);_0x5a89fd[_0x39ebe0(0xb2)]==0x0?(console[_0x4e0ded(0xce,'G2Zc')]('\x0a【'+$[_0x4e0ded(0x117,'lV&&')]+'---账号\x20'+$[_0x39ebe0(0x103)]+'\x20提交任务】:\x20提交成功'),console['log']('\x0a【'+$[_0x4e0ded(0x12a,'$rBQ')]+_0x4e0ded(0xf3,'d57C')+$['index']+'\x20用户状态】:\x20\x0a---用户ID：'+_0x5a89fd[_0x39ebe0(0xde)][_0x1d22f1(0xda)]+'\x0a---阅读数量：'+_0x5a89fd['data'][_0x39ebe0(0x119)]+_0x39ebe0(0xc5)+_0x5a89fd[_0x1d22f1(0xfd)][_0x1d22f1(0xbc)]/0xa),await soy_kkj_getTask()):(console[_0x4e0ded(0xd5,'YUcU')]('\x0a【'+$['name']+'---账号\x20'+$['index']+_0x4e0ded(0x12f,'8h@m')+_0x5a89fd[_0x39ebe0(0xaf)]),subTitle+='\x0a【'+$[_0x39ebe0(0xc8)]+'---账号\x20'+$[_0x39ebe0(0x103)]+'\x20提交任务】:\x20'+_0x5a89fd[_0x1d22f1(0xf9)]);}}catch(_0x178e70){console['log'](_0x178e70,_0x4f5cae);}finally{_0x377e9c();}});});}function Post_request(_0x2e7795,_0x5cad84){const _0x230926=_0x5b26f1;return{'url':''+host+_0x2e7795,'headers':{'Host':'ydt.kxlock.com:443','Connection':_0x230926(0xe7,'R15V'),'Content-Length':0x0,'Accept':_0x230926(0x11e,'KiEJ'),'User-Agent':soy_kkj_UA,'Content-Type':'application/x-www-form-urlencoded','Origin':_0x230926(0xec,'[UBp'),'Referer':_0x230926(0xcf,'CL(]'),'Accept-Encoding':_0x230926(0xbb,'CL(]'),'Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'},'body':_0x5cad84};};function Get_request(_0x51c2fc){return{'url':_0x51c2fc,'headers':soy_kkj_headers};};function random(){const _0x272f04=_0x50bb45,_0x3215fb=_0x3070b7;let _0x407df0='';for(let _0x506d61=0x0;_0x506d61<0x2;_0x506d61++){_0x407df0+=Math[_0x3215fb(0x112)](Math[_0x272f04(0xee)]()*0xa);}return'0.238'+_0x407df0+'5'+_0x407df0+_0x272f04(0xed)+_0x407df0+'06'+_0x407df0;}

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