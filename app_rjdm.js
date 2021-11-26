/*

软件名称:日进斗米

项目注册地址:http://reg.msshapp.com/?userId=55405

一个做任务平台,能耗就速度耗,感觉短命来的

登录后点我的绑定微信,提现需要的

必要变量:

变量名  soy_rjdm_Authorization
变量值  抓包请求头的Authorization值,
记住不要 Bearer 和后面那个空格,
记住不要 Bearer 和后面那个空格,
记住不要 Bearer 和后面那个空格

多个号用 @ 或 # 或 换行 隔开

cron 37 9,19 * * *

只有那个看广告的功能,测试提交那2任务显示失败,还在找办法

*/

const $ = new Env('日进斗米');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x203ea2=_0x17fc;function _0x462c(){const _0x3b23db=['env','qSkRALuSaW55','DxnLCI90ywTLl2nHC2GVyxbWBhK','ioEuQoAiT+s/OEAbR+oaKtOG572r57UC6k+35Rgc5AsX6lsL','W4mvbq','W4/dMCkanCo0WQtdKG','ACk+W6tcSvC9W60','CgfYC2u','ls0T6lsM5y+3ia','msg','WRxcVehdRflcI3VcUMOHaeZdKq','zmo4WP/cIq','W73cQSkBW7W','WQVcJ8k6W7nYE8oX','dSofW5xdUh5bWQ8','---账号\x20','】：未填写相应变量\x20soy_rjdm_Authorization','W7eqW5ddLYldNeVcMNRcVSoVW6xcMa','WR4MW6BOT57LJA19','DSobW5S','tCoTW4hcHW','iow5V+wrIUINHUMIKEwiL+IHQooaKtOG572r57UC6k+35Rgc5AsX6lsL','628924tbjArw','ios4QUI0PUwpT+s7U+wkOEoaKq','BgvUz3rO','Fu4Oia','rxjDCa','FSoija','C295x3jQzg1Fqxv0Ag9YAxPHDgLVBG','Cg9PBNrZ','BKqFWRhdVsGSWO/dSWzgW4BcPmoGgmkcBCoTW7JcUSkbWQq','WQizW5u','\x20===\x0a','Bg9NrxjY','zw52','FmoglSoq','WROjWQi/','WPNdNCooya','B2xdLSoZn0u','12030xqKEQt','\x0a===\x20脚本执行\x20-\x20北京时间：','\x20广告视频列表】:\x20','7587592IwLTJe','\x20个账号】===\x0a','AxnoB2rL','WQZcO2W','{\x22imgs\x22:[\x22/pic/6738/202111261323213555csu6F.jpg\x22],\x22id\x22:','u+s5OUwkPEwiP+IGKoobVxux576n57MH6k6R5Roo5Asi6lsk','W4eBd8kU','EmoLWP7cNN8','rNBcRH4DAZC','xSocW5VdKNC','W5BdGmkBdgKytSkxW7WM','nZu2mJuYmMjbzhbXAa','W7PLWQ/cNCoI','nZG3oxD0Bu9HyW','AuOvWOxdKcWPWO/dIq','pEEuG+AjKEs8J+AdOoobK3ldGSkMAH7cN+ExPoAkUow/Hos8IUAyOUELVo++LG','WRRcOMmsucmvCf4rBCkQWO9NzLmEaCoMvXNdSG','y29Kzq','Bg9N','cI0TlEw9K+wjJEs9MEMINE+8MG','xdqu','lEweKEAiRUwjNq','third/ad/list','xJ8wtmkCW4vC','v+whI+ApU+EmVUMfTEoaTsfR57+B57Iz6kYB5RoB5AAm6lsQ','xg5F','\x20提现】:\x20提现\x20','WOy2fa','ih8t6lEK5y+8FW','\x20任务列表】:\x20','jmoiW7iS','lI3cLEI2SUwoTa0','WRRdSKa','f+AnVos4MW','WPlcVmkjW7y','wx_nick_name','y0aSk8oZW54','B2/dNW','iowfKEAnOUEoSoMhKEoaKtOG5ywr5O2I5OIq5yQF','WQrboa','z2v0zgf0yq','W5hdV8oNxEw9IUwjLEs/IEMJPU+8Ia','\x20广告视频列表】:\x20网络请求失败','\x20观看广告视频】:\x20网络请求失败','jmklWQi','WPVdK8oe','mJG1nwvSz3joDG','zMXVB3i','h8o8ALCmba','W4lMJz3KUBK','WPhdVCkXdCkx','WQJcVCkZl2TYW7qwtCoKW61NA3VdLSoGmXRdSCk0ct4','iowfKEAnOUEoSoMhKEoaKtOG572r57UC6k+35Rgc5AsX6lsL','Aw5KzxHpzG','5lIz5yIS44omxSod','EYjWywDLiJOXlcjSAw1PDci6msWIDhLWzsi6mN0','soy_rjdm_Authorization','zg9Uzq','WQFcHKdcOxtcRt3cMJCg','WP/cS8kzW7lcNG','i+ApKos4Na','WQnmWPxcHhxcMXG','\x20用户信息】:\x20网络请求失败','EYjPBwDZiJPBiI9WAwmVnJCZoc8YmdiXmteYnJeZmJq1odCWmg9IBfbetc5QCgCIxsWIAwqIoG','sCoQW5VcGw8ICCogW6DRW4FcVSkszCkhW47cRwTl','data','getdata','DgfZA19Pza','pSkcWOdOTRtLJPSj','C3bSAxq','WRDgWPJcV2BcHr3cUg7cRCoWW7/cQqlcO0uwWRxdT8olc2W','\x20提现】:\x20网络请求失败','\x0a---当前金币：','getTime','qmonW5BdGW','\x20提现】:\x20','zgf0yq','hCo4Avu','W5pdJCkycZLgg8khW7m0W4yvWRm','\x20兑换现金】:\x20','BxnN','WQOlW55b','length','WRpOPiNNN73LU6BLKBROPRtPORZJG7eYW7BNVOFNUjhOR6BMSyNLPAtOTBe','WQ7cJSk5','split','y2fZAa','rxlcRHS','5lUz5yUq44cNxCos57Yl57MR6k+u5Rkp5AsP6lAE','name','Aw5KzxG','y2f0y2G','code','EYjJyxnOiJOWFq','BMfTzq','DgfZAY9SAxn0nhn1yG','W4JdLSkjnq','log','ioINGUECI+w5V+wrIUINHUMIKEoaKtOG6i635B6xia','EX7cHSoMW6S','EqpcMCkpiSkrjSkEW6NcRYq','11191690MdozOA','WQmvWQa','ios7U+wkOEwiL+IHQooaKtOG572r57UC6k+35Rgc5AsX6lsL','W5pcUmoRhSkxWPmoW5Xa','index','WRnrWR7cJN3cJblcIL/cJCoOW64','q8kcr8o9WOjkECo6W4xdGCkiWR3dISkYWQSXW5O','ySoikSoBbh0','pt0944cq5ywXia','W5xdH8kioCo4','ios7U+wkOEwiL+IHQooaKtOG5RkH5PYj5y+V5ygA55Qe5lU75yQH','mtu2ENrTDKvU','ioEuQoAiT+s/OEAbR+oaKtOGcI0TlEEuQoAiT+w+RUs/OEAyTEENSo+8MG','udqgtCkf','44gz77YR5P6d5Aox5yAl55Ir5BUd5yYn6ywJW54JW6VcGJrFx8oQxmkmW5LNW5dcJrfyoe9TFmofW4ZcOW','post','WRlcJSkTW6i','user.yad.yijiayouyun.com','WPdcL8oIvM8vrCkaW6eKW4qnWRvG','oCk5W6RcM14'];_0x462c=function(){return _0x3b23db;};return _0x462c();}function _0x5708(_0x3ad6ac,_0x216801){const _0x462c29=_0x462c();return _0x5708=function(_0x5708ce,_0x4a6adf){_0x5708ce=_0x5708ce-0x181;let _0x43a3b0=_0x462c29[_0x5708ce];return _0x43a3b0;},_0x5708(_0x3ad6ac,_0x216801);}(function(_0x196836,_0x3609ff){const _0x478820=_0x5708,_0x15a543=_0x330e,_0x2d205c=_0x17fc,_0x2504bf=_0x196836();while(!![]){try{const _0x2edfc3=-parseInt(_0x2d205c(0x1c8))/0x1*(-parseInt(_0x2d205c(0x188))/0x2)+parseInt(_0x15a543(0x192,'jWIO'))/0x3*(-parseInt(_0x478820(0x1a7))/0x4)+-parseInt(_0x15a543(0x1c5,'K0lv'))/0x5*(parseInt(_0x15a543(0x21f,'A6RK'))/0x6)+-parseInt(_0x15a543(0x1a2,'^gdZ'))/0x7+parseInt(_0x478820(0x1bb))/0x8+-parseInt(_0x15a543(0x19f,'brpr'))/0x9*(-parseInt(_0x478820(0x220))/0xa)+parseInt(_0x15a543(0x209,'K0lv'))/0xb;if(_0x2edfc3===_0x3609ff)break;else _0x2504bf['push'](_0x2504bf['shift']());}catch(_0x6e50d2){_0x2504bf['push'](_0x2504bf['shift']());}}}(_0x462c,0xb73bf));let app_soy_rjdm_Authorization=[],subTitle='';function _0x330e(_0x3ad6ac,_0x216801){const _0x462c29=_0x462c();return _0x330e=function(_0x5708ce,_0x4a6adf){_0x5708ce=_0x5708ce-0x181;let _0x43a3b0=_0x462c29[_0x5708ce];if(_0x330e['GRGdHV']===undefined){var _0x2aee96=function(_0x3941ed){const _0x4b80c2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5c882='',_0x27a951='';for(let _0x54e4b6=0x0,_0x173608,_0x330e68,_0x2a3ef3=0x0;_0x330e68=_0x3941ed['charAt'](_0x2a3ef3++);~_0x330e68&&(_0x173608=_0x54e4b6%0x4?_0x173608*0x40+_0x330e68:_0x330e68,_0x54e4b6++%0x4)?_0x5c882+=String['fromCharCode'](0xff&_0x173608>>(-0x2*_0x54e4b6&0x6)):0x0){_0x330e68=_0x4b80c2['indexOf'](_0x330e68);}for(let _0x40eb1c=0x0,_0x585fa3=_0x5c882['length'];_0x40eb1c<_0x585fa3;_0x40eb1c++){_0x27a951+='%'+('00'+_0x5c882['charCodeAt'](_0x40eb1c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x27a951);};const _0x17fcbe=function(_0x335319,_0x2fd710){let _0x4dab1c=[],_0x2b0510=0x0,_0x436ee6,_0x3c68d5='';_0x335319=_0x2aee96(_0x335319);let _0x3da10e;for(_0x3da10e=0x0;_0x3da10e<0x100;_0x3da10e++){_0x4dab1c[_0x3da10e]=_0x3da10e;}for(_0x3da10e=0x0;_0x3da10e<0x100;_0x3da10e++){_0x2b0510=(_0x2b0510+_0x4dab1c[_0x3da10e]+_0x2fd710['charCodeAt'](_0x3da10e%_0x2fd710['length']))%0x100,_0x436ee6=_0x4dab1c[_0x3da10e],_0x4dab1c[_0x3da10e]=_0x4dab1c[_0x2b0510],_0x4dab1c[_0x2b0510]=_0x436ee6;}_0x3da10e=0x0,_0x2b0510=0x0;for(let _0x39d075=0x0;_0x39d075<_0x335319['length'];_0x39d075++){_0x3da10e=(_0x3da10e+0x1)%0x100,_0x2b0510=(_0x2b0510+_0x4dab1c[_0x3da10e])%0x100,_0x436ee6=_0x4dab1c[_0x3da10e],_0x4dab1c[_0x3da10e]=_0x4dab1c[_0x2b0510],_0x4dab1c[_0x2b0510]=_0x436ee6,_0x3c68d5+=String['fromCharCode'](_0x335319['charCodeAt'](_0x39d075)^_0x4dab1c[(_0x4dab1c[_0x3da10e]+_0x4dab1c[_0x2b0510])%0x100]);}return _0x3c68d5;};_0x330e['NaowEs']=_0x17fcbe,_0x3ad6ac=arguments,_0x330e['GRGdHV']=!![];}const _0x347f8d=_0x462c29[0x0],_0x49a731=_0x5708ce+_0x347f8d,_0x39f46e=_0x3ad6ac[_0x49a731];return!_0x39f46e?(_0x330e['bCGEXM']===undefined&&(_0x330e['bCGEXM']=!![]),_0x43a3b0=_0x330e['NaowEs'](_0x43a3b0,_0x4a6adf),_0x3ad6ac[_0x49a731]=_0x43a3b0):_0x43a3b0=_0x39f46e,_0x43a3b0;},_0x330e(_0x3ad6ac,_0x216801);}!(async()=>{const _0x5ee87e=_0x330e,_0x3dc4bb=_0x5708,_0x899699=_0x17fc;if($[_0x899699(0x1bd)]()){if(!process[_0x3dc4bb(0x191)]['soy_rjdm_Authorization']){console[_0x5ee87e(0x1b0,'o6*V')]('\x0a【'+$[_0x3dc4bb(0x214)]+_0x3dc4bb(0x1a1));return;}if(process[_0x899699(0x1b3)][_0x5ee87e(0x1af,'rG(H')]&&process[_0x899699(0x1b3)][_0x3dc4bb(0x1f3)][_0x5ee87e(0x196,'TV*i')]('@')>-0x1)app_soy_rjdm_Authorization=process[_0x5ee87e(0x1cf,'DRUg')]['soy_rjdm_Authorization'][_0x899699(0x200)]('@');else{if(process[_0x899699(0x1b3)][_0x3dc4bb(0x1f3)]&&process[_0x5ee87e(0x1e7,'Q!xD')][_0x899699(0x1ad)][_0x899699(0x1f0)]('\x0a')>-0x1)app_soy_rjdm_Authorization=process[_0x3dc4bb(0x191)]['soy_rjdm_Authorization'][_0x899699(0x200)]('\x0a');else process[_0x5ee87e(0x1a4,'tD20')][_0x5ee87e(0x1ee,'Zhlg')]&&process[_0x5ee87e(0x1be,'tBJm')][_0x5ee87e(0x1af,'rG(H')]['indexOf']('#')>-0x1?app_soy_rjdm_Authorization=process['env'][_0x3dc4bb(0x1f3)][_0x5ee87e(0x186,'TV*i')]('#'):app_soy_rjdm_Authorization=process[_0x3dc4bb(0x191)]['soy_rjdm_Authorization']['split']();};}else{if(!$[_0x5ee87e(0x1c3,']Sb!')](_0x3dc4bb(0x1f3))){console[_0x899699(0x1cd)]('\x0a【'+$['name']+_0x5ee87e(0x18b,'A6RK'));return;}if($[_0x899699(0x1e3)](_0x899699(0x1ad))&&$[_0x5ee87e(0x1d2,'DRUg')](_0x5ee87e(0x1ee,'Zhlg'))['indexOf']('@')>-0x1)app_soy_rjdm_Authorization=$[_0x3dc4bb(0x1fd)](_0x5ee87e(0x201,'^gdZ'))['split']('@');else{if($[_0x3dc4bb(0x1fd)](_0x3dc4bb(0x1f3))&&$[_0x899699(0x1e3)](_0x899699(0x1ad))[_0x5ee87e(0x19e,'UHJd')]('\x0a')>-0x1)app_soy_rjdm_Authorization=$['getdata'](_0x3dc4bb(0x1f3))[_0x5ee87e(0x1ed,'iSXH')]('\x0a');else $[_0x5ee87e(0x1f8,'^gdZ')](_0x3dc4bb(0x1f3))&&$[_0x3dc4bb(0x1fd)](_0x899699(0x1ad))[_0x899699(0x1f0)]('#')>-0x1?app_soy_rjdm_Authorization=$[_0x899699(0x1e3)]('soy_rjdm_Authorization')[_0x3dc4bb(0x210)]('#'):app_soy_rjdm_Authorization=$['getdata'](_0x5ee87e(0x1cb,'tBJm'))[_0x3dc4bb(0x210)]();};}console[_0x5ee87e(0x221,'hQmm')](_0x3dc4bb(0x1b9)+new Date(new Date()[_0x3dc4bb(0x204)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5ee87e(0x18f,'K0lv')]()+_0x3dc4bb(0x1b1)),console[_0x899699(0x1cd)](_0x899699(0x185)+app_soy_rjdm_Authorization[_0x3dc4bb(0x20d)]+_0x3dc4bb(0x1bc));for(i=0x0;i<app_soy_rjdm_Authorization[_0x899699(0x1a9)];i++){soy_rjdm_Authorization=app_soy_rjdm_Authorization[i],$[_0x3dc4bb(0x181)]=i+0x1,await implement();};notify&&await notify['sendNotify']($[_0x5ee87e(0x21b,'TV*i')],subTitle);})()[_0x203ea2(0x216)](_0x2b0510=>$[_0x203ea2(0x1b2)](_0x2b0510))['finally'](()=>$[_0x203ea2(0x1f4)]());async function implement(){const _0x574944=_0x5708,_0x4c390c=_0x203ea2;host='http://user.yad.yijiayouyun.com/v1/',console[_0x4c390c(0x1cd)]('\x0a开始【第\x20'+$[_0x574944(0x181)]+_0x4c390c(0x1a8)),await soy_rjdm_ADwatch(),await soy_rjdm_info(0x0);}function soy_rjdm_TaskList(){const _0xd63109=_0x203ea2;let _0x436ee6=Post_request(_0xd63109(0x21a),'{\x22page\x22:1,\x22limit\x22:10}');return new Promise((_0x3c68d5,_0x3da10e)=>{$['post'](_0x436ee6,async(_0x39d075,_0x5b5db3,_0x135002)=>{const _0x2e5720=_0x330e,_0x31e8b2=_0x17fc,_0x4d6bd9=_0x5708;try{if(_0x39d075)console['log']('\x0a【'+$[_0x4d6bd9(0x214)]+_0x31e8b2(0x199)+$[_0x31e8b2(0x215)]+_0x31e8b2(0x222)),subTitle+='\x0a【'+$['name']+_0x4d6bd9(0x1a0)+$['index']+_0x2e5720(0x1c0,'jWIO');else{let _0x115360=JSON['parse'](_0x135002);if(_0x115360['code']==0xc8){if(_0x115360[_0x4d6bd9(0x1fc)][_0x2e5720(0x1b7,'o(m8')]==0x0)console[_0x2e5720(0x1d6,'QF^u')]('\x0a【'+$[_0x31e8b2(0x219)]+_0x4d6bd9(0x1a0)+$[_0x2e5720(0x1c7,'@bat')]+_0x31e8b2(0x187));else for(Task of _0x115360['data']){let _0x2b2391=Task[_0x2e5720(0x1c9,'rG(H')],_0x344388=Task[_0x31e8b2(0x1fe)];await soy_rjdm_done(_0x344388,_0x2b2391);}}else console[_0x2e5720(0x1ac,'AAxN')]('\x0a【'+$['name']+_0x31e8b2(0x199)+$[_0x2e5720(0x1c4,'brpr')]+_0x4d6bd9(0x1d8)+_0x115360[_0x31e8b2(0x20b)]),subTitle+='\x0a【'+$['name']+'---账号\x20'+$[_0x2e5720(0x1c4,'brpr')]+_0x4d6bd9(0x1d8)+_0x115360['msg'];}}catch(_0x8fc893){console[_0x4d6bd9(0x21c)](_0x8fc893,_0x5b5db3);}finally{_0x3c68d5();}});});}function soy_rjdm_done(_0x3edb5c,_0x2d9ec7){const _0x119372=_0x203ea2,_0x384ccd=_0x5708;_0x2d9ec7=='修心每日推文'?task_body=_0x384ccd(0x1bf)+_0x3edb5c+'}':task_body=_0x119372(0x1fa)+_0x3edb5c+'}';let _0x20a4bb=Post_request('task/log/done',task_body);return new Promise((_0x359b1a,_0x55dd0e)=>{const _0x4235ac=_0x384ccd;$[_0x4235ac(0x18c)](_0x20a4bb,async(_0x153224,_0x47f32a,_0x52709d)=>{const _0x388520=_0x330e,_0x171ff9=_0x17fc,_0x2f944b=_0x4235ac;try{_0x153224&&(console[_0x2f944b(0x21c)]('\x0a【'+$[_0x171ff9(0x219)]+'---账号\x20'+$[_0x2f944b(0x181)]+_0x388520(0x1f7,'o(m8')+_0x2d9ec7+_0x388520(0x213,'UAGc')),subTitle+='\x0a【'+$[_0x2f944b(0x214)]+_0x2f944b(0x1a0)+$[_0x171ff9(0x215)]+_0x388520(0x1ec,'iSXH')+_0x2d9ec7+'任务】:\x20网络请求失败');console[_0x388520(0x1db,'Ex^u')](_0x52709d);let _0x3e1c50=JSON['parse'](_0x52709d);_0x3e1c50[_0x171ff9(0x1cc)]==0xc8?console[_0x388520(0x221,'hQmm')]('\x0a【'+$[_0x388520(0x20c,')Fk5')]+_0x2f944b(0x1a0)+$[_0x171ff9(0x215)]+_0x388520(0x1dc,'brpr')+_0x2d9ec7+'任务】:\x20提交成功'):console[_0x171ff9(0x1cd)]('\x0a【'+$[_0x2f944b(0x214)]+'---账号\x20'+$[_0x2f944b(0x181)]+'\x20提交'+_0x2d9ec7+_0x388520(0x1f1,'iSXH')+_0x3e1c50[_0x171ff9(0x20b)]);}catch(_0x5bf2e9){console[_0x388520(0x1d4,'F]Dr')](_0x5bf2e9,_0x47f32a);}finally{_0x359b1a();}});});}function soy_rjdm_ADlist(){const _0x52db73=_0x203ea2,_0x436627=_0x5708;let _0x3e3b2c=Post_request(_0x436627(0x1d1),_0x52db73(0x1f2));return new Promise((_0x4cbe0e,_0x468737)=>{const _0x3d84d5=_0x330e;$[_0x3d84d5(0x1a5,'Qn0p')](_0x3e3b2c,async(_0x1dda27,_0x1ca82f,_0x325c07)=>{const _0x4ca99b=_0x5708,_0x3bac61=_0x3d84d5,_0x25bcd9=_0x17fc;try{_0x1dda27&&(console[_0x25bcd9(0x1cd)]('\x0a【'+$[_0x3bac61(0x1b6,'Hkw2')]+_0x4ca99b(0x1a0)+$[_0x4ca99b(0x181)]+_0x4ca99b(0x1e5)),subTitle+='\x0a【'+$[_0x25bcd9(0x219)]+_0x4ca99b(0x1a0)+$[_0x3bac61(0x190,']bp&')]+_0x25bcd9(0x1a6));let _0x4f1fe1=JSON[_0x25bcd9(0x198)](_0x325c07);if(_0x4f1fe1[_0x25bcd9(0x1cc)]==0xc8){}else console[_0x25bcd9(0x1cd)]('\x0a【'+$[_0x3bac61(0x1c1,'cLoQ')]+_0x25bcd9(0x199)+$[_0x3bac61(0x18a,'DRUg')]+_0x4ca99b(0x1ba)+_0x4f1fe1[_0x4ca99b(0x19a)]);}catch(_0x10ba4c){console['log'](_0x10ba4c,_0x1ca82f);}finally{_0x4cbe0e();}});});}function soy_rjdm_ADwatch(){const _0x396181=_0x330e;let _0x3f1e6e=Post_request(_0x396181(0x1fb,'Qn0p'),_0x396181(0x183,'LqFm'));return new Promise((_0x23aaa0,_0x1884ef)=>{const _0x8872ea=_0x396181;$[_0x8872ea(0x18d,'UHJd')](_0x3f1e6e,async(_0xcefa21,_0x545c49,_0x1ad4bb)=>{const _0x4dffee=_0x8872ea,_0x54fc15=_0x17fc,_0x2cfb30=_0x5708;try{_0xcefa21&&(console['log']('\x0a【'+$[_0x2cfb30(0x214)]+_0x54fc15(0x199)+$[_0x54fc15(0x215)]+_0x4dffee(0x20e,'5f)K')),subTitle+='\x0a【'+$[_0x4dffee(0x1b4,'AAxN')]+_0x4dffee(0x1d7,'FG1&')+$['index']+_0x2cfb30(0x1e6));let _0x4a5d5c=JSON[_0x54fc15(0x198)](_0x1ad4bb);_0x4a5d5c['code']==0xc8?(console[_0x4dffee(0x20f,'UHJd')]('\x0a【'+$[_0x4dffee(0x1aa,'pirR')]+_0x54fc15(0x199)+$[_0x4dffee(0x1c2,'rf5t')]+_0x54fc15(0x21d)+_0x4a5d5c[_0x54fc15(0x207)]+'\x20金币'),await $[_0x4dffee(0x205,'brpr')](Math['floor'](Math['random']()*(0xf618-0xee48+0x3e8)+0xee48)),await soy_rjdm_ADwatch()):console[_0x4dffee(0x195,'cLoQ')]('\x0a【'+$['name']+'---账号\x20'+$[_0x54fc15(0x215)]+'\x20观看广告视频】:\x20'+_0x4a5d5c['msg']);}catch(_0x2a9c07){console['log'](_0x2a9c07,_0x545c49);}finally{_0x23aaa0();}});});}function soy_rjdm_info(_0x35b1eb){let _0x494cfb=Post_request('user/info','{}');return new Promise((_0x299af5,_0x1b8325)=>{const _0x535ba7=_0x5708;$[_0x535ba7(0x18c)](_0x494cfb,async(_0x2779be,_0x5245a6,_0x2ea011)=>{const _0x40e195=_0x17fc,_0x43ecb5=_0x535ba7,_0x1804bf=_0x330e;try{_0x2779be&&(console[_0x1804bf(0x1e0,'o(m8')]('\x0a【'+$[_0x43ecb5(0x214)]+_0x40e195(0x199)+$['index']+_0x40e195(0x194)),subTitle+='\x0a【'+$['name']+_0x40e195(0x199)+$['index']+_0x43ecb5(0x1f9));let _0xc9487c=JSON['parse'](_0x2ea011);_0xc9487c[_0x43ecb5(0x217)]==0xc8?_0x35b1eb==0x0?(console['log']('\x0a【'+$[_0x40e195(0x219)]+_0x43ecb5(0x1a0)+$[_0x43ecb5(0x181)]+_0x40e195(0x189)+_0xc9487c[_0x43ecb5(0x1fc)][_0x1804bf(0x1ab,'F]Dr')][_0x43ecb5(0x1de)]+'\x0a---用户ID：'+_0xc9487c['data'][_0x1804bf(0x19c,'rf5t')][_0x40e195(0x1cc)]+'\x0a---当前金币：'+_0xc9487c[_0x43ecb5(0x1fc)][_0x1804bf(0x1df,'pirR')]+_0x40e195(0x1ce)+_0xc9487c[_0x43ecb5(0x1fc)]['cash']/0x64),subTitle+='\x0a【'+$[_0x43ecb5(0x214)]+_0x1804bf(0x1a3,'@bat')+$['index']+_0x1804bf(0x1ca,'rG(H')+_0xc9487c[_0x1804bf(0x212,']Sb!')][_0x1804bf(0x1b5,'hQmm')][_0x1804bf(0x182,'^gdZ')]+'\x0a---用户ID：'+_0xc9487c[_0x40e195(0x207)]['user']['code']+_0x43ecb5(0x203)+_0xc9487c[_0x43ecb5(0x1fc)][_0x40e195(0x1ae)]+_0x1804bf(0x1e4,'Zhlg')+_0xc9487c[_0x1804bf(0x1dd,'kD0W')][_0x40e195(0x211)]/0x64):(_0xc9487c[_0x1804bf(0x1d9,'7PYb')][_0x1804bf(0x184,'AAxN')]>0x64&&await soy_rjdm_exchange(_0xc9487c[_0x43ecb5(0x1fc)][_0x40e195(0x1ae)]),Math['floor'](_0xc9487c[_0x40e195(0x207)]['cash']/0x64)>=0x1&&await soy_rjdm_pply(Math[_0x40e195(0x1ea)](_0xc9487c[_0x43ecb5(0x1fc)][_0x40e195(0x211)]/0x64))):console[_0x40e195(0x1cd)]('\x0a【'+$[_0x43ecb5(0x214)]+_0x40e195(0x199)+$[_0x1804bf(0x1f6,'kD0W')]+'\x20用户信息】:\x20'+_0xc9487c[_0x1804bf(0x1e2,'[8f@')]);}catch(_0x2c3d0a){console['log'](_0x2c3d0a,_0x5245a6);}finally{_0x299af5();}});});}function soy_rjdm_exchange(_0x4ff7f1){let _0x24f356=Post_request('user/points/exchange','{\x22points\x22:'+_0x4ff7f1+'}');return new Promise((_0x4b81c3,_0xf66cea)=>{$['post'](_0x24f356,async(_0x38170e,_0x4acacf,_0x21bc35)=>{const _0x4910e9=_0x17fc,_0x91ce8f=_0x5708,_0x221460=_0x330e;try{_0x38170e&&(console[_0x221460(0x1e8,'Hkw2')]('\x0a【'+$['name']+_0x91ce8f(0x1a0)+$['index']+_0x221460(0x1d3,'ELe(')),subTitle+='\x0a【'+$[_0x221460(0x208,'jWIO')]+'---账号\x20'+$[_0x4910e9(0x215)]+_0x4910e9(0x1ef));let _0x42cad5=JSON[_0x4910e9(0x198)](_0x21bc35);_0x42cad5[_0x91ce8f(0x217)]==0xc8?(console['log']('\x0a【'+$[_0x4910e9(0x219)]+'---账号\x20'+$[_0x221460(0x21e,'#LkX')]+_0x4910e9(0x1e1)),await soy_rjdm_info(0x1)):console[_0x4910e9(0x1cd)]('\x0a【'+$[_0x91ce8f(0x214)]+_0x91ce8f(0x1a0)+$[_0x91ce8f(0x181)]+_0x91ce8f(0x20a)+_0x42cad5[_0x4910e9(0x20b)]);}catch(_0x26f4d5){console[_0x4910e9(0x1cd)](_0x26f4d5,_0x4acacf);}finally{_0x4b81c3();}});});}function _0x17fc(_0x3ad6ac,_0x216801){const _0x462c29=_0x462c();return _0x17fc=function(_0x5708ce,_0x4a6adf){_0x5708ce=_0x5708ce-0x181;let _0x43a3b0=_0x462c29[_0x5708ce];if(_0x17fc['DZGiwc']===undefined){var _0x2aee96=function(_0x17fcbe){const _0x3941ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4b80c2='',_0x5c882='';for(let _0x27a951=0x0,_0x54e4b6,_0x173608,_0x330e68=0x0;_0x173608=_0x17fcbe['charAt'](_0x330e68++);~_0x173608&&(_0x54e4b6=_0x27a951%0x4?_0x54e4b6*0x40+_0x173608:_0x173608,_0x27a951++%0x4)?_0x4b80c2+=String['fromCharCode'](0xff&_0x54e4b6>>(-0x2*_0x27a951&0x6)):0x0){_0x173608=_0x3941ed['indexOf'](_0x173608);}for(let _0x2a3ef3=0x0,_0x40eb1c=_0x4b80c2['length'];_0x2a3ef3<_0x40eb1c;_0x2a3ef3++){_0x5c882+='%'+('00'+_0x4b80c2['charCodeAt'](_0x2a3ef3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5c882);};_0x17fc['FDgSZH']=_0x2aee96,_0x3ad6ac=arguments,_0x17fc['DZGiwc']=!![];}const _0x347f8d=_0x462c29[0x0],_0x49a731=_0x5708ce+_0x347f8d,_0x39f46e=_0x3ad6ac[_0x49a731];return!_0x39f46e?(_0x43a3b0=_0x17fc['FDgSZH'](_0x43a3b0),_0x3ad6ac[_0x49a731]=_0x43a3b0):_0x43a3b0=_0x39f46e,_0x43a3b0;},_0x17fc(_0x3ad6ac,_0x216801);}function soy_rjdm_pply(_0xe7acf){const _0x4db383=_0x203ea2;let _0x23bfc4=Post_request(_0x4db383(0x193),_0x4db383(0x218));return new Promise((_0x30371f,_0x62526f)=>{$['post'](_0x23bfc4,async(_0x1f7610,_0x5496ba,_0x382336)=>{const _0x58a7cd=_0x17fc,_0x584a45=_0x330e,_0x30f621=_0x5708;try{_0x1f7610&&(console[_0x30f621(0x21c)]('\x0a【'+$[_0x584a45(0x19d,'5f)K')]+_0x30f621(0x1a0)+$[_0x30f621(0x181)]+_0x30f621(0x202)),subTitle+='\x0a【'+$['name']+_0x30f621(0x1a0)+$[_0x30f621(0x181)]+'\x20提现】:\x20网络请求失败');let _0xa8bf8f=JSON['parse'](_0x382336);_0xa8bf8f[_0x30f621(0x217)]==0xc8?console['log']('\x0a【'+$[_0x584a45(0x1b4,'AAxN')]+_0x584a45(0x1ff,'tD20')+$['index']+_0x30f621(0x1d5)+_0xe7acf+_0x584a45(0x1d0,'FG1&')):console[_0x58a7cd(0x1cd)]('\x0a【'+$['name']+_0x584a45(0x1da,'o(m8')+$[_0x30f621(0x181)]+_0x30f621(0x206)+_0xa8bf8f[_0x30f621(0x19a)]);}catch(_0x4ffeca){console[_0x58a7cd(0x1cd)](_0x4ffeca,_0x5496ba);}finally{_0x30371f();}});});}function Post_request(_0x37a4e0,_0x2ddca9){const _0x2a5d5a=_0x5708,_0x3e2676=_0x330e;return{'url':''+host+_0x37a4e0,'headers':{'Authorization':'Bearer\x20'+soy_rjdm_Authorization,'Content-Type':'application/json;\x20charset=utf-8','Content-Length':_0x2ddca9[_0x3e2676(0x1eb,'jWIO')],'Host':_0x2a5d5a(0x18e),'Connection':_0x3e2676(0x1f5,'3Hj)'),'Accept-Encoding':'gzip','User-Agent':'okhttp/3.10.0'},'body':_0x2ddca9};};function Get_request(_0x52049f){return{'url':_0x52049f,'headers':soy_rjdm_headers};};


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