/*

软件名称:满满有品

项目注册地址:http://yg.zzbzb.com/regNew/?invite_code=809887799

需要实名认证

满满有品！注册送100积分！每天签到送5积分！连续签到7天送20积分！连续签到30天送100积分！60天200积分以此内推！
1积分等于一块钱！每天按千分之‰1释放！也就是1000积分每天释放1块钱！购物，充话费，订机票，火车票，推广，都加积分，签到也加积分。积分越多每天钱越多！

必要变量:

变量名 soy_mmyp_data
变量值 xxx&xxx&xxx&xxx
注释:注册的手机号&登录密码&绑定的支付宝&抓包请求头上user-agent
注意:
绑定的支付宝不填则不做提现
抓包请求头上user-agent为可选变量

注意:需要自行在app/我的/修改密码 里面设置密码后才能密码登录,密码不能包含&和#字符
注意:需要自行在app/我的/修改密码 里面设置密码后才能密码登录,密码不能包含&和#字符
注意:需要自行在app/我的/修改密码 里面设置密码后才能密码登录,密码不能包含&和#字符

多个号用 # 或 换行 隔开

cron "25 10,13 * * *"

*/


const $ = new Env('满满有品');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x3b070d=_0x4957;(function(_0x2d3d57,_0x5b5c0c){const _0x154c58=_0x5c11,_0x2e60c1=_0x4957,_0x1639fc=_0xb82f,_0x583bea=_0x2d3d57();while(!![]){try{const _0x5f0473=-parseInt(_0x1639fc(0x19b))/0x1+-parseInt(_0x2e60c1('0x1e6'))/0x2+-parseInt(_0x2e60c1('0x19e'))/0x3*(parseInt(_0x1639fc('0x1c7'))/0x4)+-parseInt(_0x154c58('0x1be','erBG'))/0x5*(-parseInt(_0x154c58(0x1a1,'V$Hn'))/0x6)+-parseInt(_0x154c58('0x1ad','M*J!'))/0x7+-parseInt(_0x2e60c1('0x185'))/0x8+-parseInt(_0x154c58(0x179,'Rd#t'))/0x9*(-parseInt(_0x154c58(0x181,'I8p)'))/0xa);if(_0x5f0473===_0x5b5c0c)break;else _0x583bea['push'](_0x583bea['shift']());}catch(_0x3ab570){_0x583bea['push'](_0x583bea['shift']());}}}(_0x3878,0xafc78));let app_soy_mmyp_data=[];function _0x4957(_0x4cefd8,_0x42267d){const _0x38783a=_0x3878();return _0x4957=function(_0xb82f17,_0x487777){_0xb82f17=_0xb82f17-0x16d;let _0x52dae2=_0x38783a[_0xb82f17];if(_0x4957['gOxynj']===undefined){var _0x4d739a=function(_0x495770){const _0x537eec='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2f1f4d='',_0x1bdf4d='';for(let _0x2c3317=0x0,_0x2a76a2,_0x3fc962,_0x5c113a=0x0;_0x3fc962=_0x495770['charAt'](_0x5c113a++);~_0x3fc962&&(_0x2a76a2=_0x2c3317%0x4?_0x2a76a2*0x40+_0x3fc962:_0x3fc962,_0x2c3317++%0x4)?_0x2f1f4d+=String['fromCharCode'](0xff&_0x2a76a2>>(-0x2*_0x2c3317&0x6)):0x0){_0x3fc962=_0x537eec['indexOf'](_0x3fc962);}for(let _0x389106=0x0,_0x3c7b67=_0x2f1f4d['length'];_0x389106<_0x3c7b67;_0x389106++){_0x1bdf4d+='%'+('00'+_0x2f1f4d['charCodeAt'](_0x389106)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1bdf4d);};_0x4957['IzcnMD']=_0x4d739a,_0x4cefd8=arguments,_0x4957['gOxynj']=!![];}const _0x2fafd5=_0x38783a[0x0],_0x5339ee=_0xb82f17+_0x2fafd5,_0x1977d0=_0x4cefd8[_0x5339ee];return!_0x1977d0?(_0x52dae2=_0x4957['IzcnMD'](_0x52dae2),_0x4cefd8[_0x5339ee]=_0x52dae2):_0x52dae2=_0x1977d0,_0x52dae2;},_0x4957(_0x4cefd8,_0x42267d);}!(async()=>{const _0xce534f=_0xb82f,_0x383a41=_0x4957,_0xdc6f55=_0x5c11;typeof $request!=='undefined'&&await get_appdata();if($['isNode']()){if(!process[_0xdc6f55('0x188','KsG9')]['soy_mmyp_data']){console[_0xdc6f55('0x171','JRrL')](_0x383a41(0x1cf));return;}if(process['env']['soy_mmyp_data']&&process['env'][_0x383a41('0x1ae')]['indexOf']('\x0a')>-0x1)app_soy_mmyp_data=process['env'][_0xdc6f55(0x1b0,'0wjE')][_0xce534f(0x17d)]('\x0a');else process[_0x383a41('0x1c1')][_0xdc6f55('0x1de','1PU1')]&&process[_0xdc6f55('0x1ba','njdw')][_0x383a41(0x1ae)][_0xce534f('0x1af')]('#')>-0x1?app_soy_mmyp_data=process[_0x383a41(0x1c1)][_0xdc6f55('0x1b5','le&(')][_0xce534f(0x17d)]('#'):app_soy_mmyp_data=process['env'][_0xdc6f55('0x1e0','V$Hn')]['split']();;}else{if(!$[_0xce534f(0x1aa)](_0x383a41(0x1ae))){console[_0xce534f(0x189)]('\x0a【soy脚本提示】：未填写相应变量\x20soy_mmyp_data');return;}if($[_0xdc6f55(0x1d6,'o]gR')](_0x383a41('0x1ae'))&&$[_0xdc6f55('0x1ee','(Gdv')]('soy_mmyp_data')[_0x383a41('0x1d1')]('#')>-0x1)app_soy_mmyp_data=$[_0x383a41('0x172')](_0xdc6f55(0x1d5,'e!P&'))[_0x383a41('0x1ce')]('@');else $[_0x383a41(0x172)](_0xce534f(0x16d))&&$[_0x383a41('0x172')](_0xce534f(0x16d))[_0x383a41('0x1d1')]('\x0a')>-0x1?app_soy_mmyp_data=$[_0xdc6f55('0x1b7','TGwO')](_0xdc6f55('0x1de','1PU1'))[_0xce534f('0x17d')]('\x0a'):app_soy_mmyp_data=$[_0xce534f(0x1aa)]('soy_mmyp_data')['split']();;}console[_0xce534f('0x189')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()[_0xce534f(0x16f)]()+new Date()[_0xce534f(0x1ab)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xce534f(0x170)]()+_0xce534f(0x195)),console[_0xce534f(0x189)](_0x383a41('0x1d2')+app_soy_mmyp_data[_0xdc6f55('0x1ef','jFHa')]+'\x20个账号】===\x0a'),subTitle='';for(i=0x0;i<app_soy_mmyp_data[_0xce534f('0x1e2')];i++){soy_mmyp_data=app_soy_mmyp_data[i]['split']('&'),soy_mmyp_phone=soy_mmyp_data[0x0],soy_mmyp_pass=soy_mmyp_data[0x1],soy_mmyp_Collection=soy_mmyp_data[0x2],soy_mmyp_UA=soy_mmyp_data[0x3];if(!soy_mmyp_phone||!soy_mmyp_pass){console[_0x383a41(0x192)]('\x0a【soy脚本提示】：填写变量格式不规范');return;}!soy_mmyp_UA&&(soy_mmyp_UA=_0x383a41(0x17b)),$['index']=i+0x1,await implement();};notify&&(subTitle&&await notify['sendNotify']($['name'],subTitle));})()['catch'](_0x562bef=>$[_0x3b070d(0x1f2)](_0x562bef))['finally'](()=>$['done']());async function implement(){const _0x2dd3a8=_0x3b070d,_0x28ebae=_0xb82f;host=_0x28ebae(0x1ed),console[_0x2dd3a8('0x192')](_0x2dd3a8(0x1d7)+$[_0x2dd3a8(0x1b2)]+_0x28ebae(0x1e7)),await mmyp_newLogin();}function _0x5c11(_0x4cefd8,_0x42267d){const _0x38783a=_0x3878();return _0x5c11=function(_0xb82f17,_0x487777){_0xb82f17=_0xb82f17-0x16d;let _0x52dae2=_0x38783a[_0xb82f17];if(_0x5c11['LLazjs']===undefined){var _0x4d739a=function(_0x537eec){const _0x2f1f4d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1bdf4d='',_0x2c3317='';for(let _0x2a76a2=0x0,_0x3fc962,_0x5c113a,_0x389106=0x0;_0x5c113a=_0x537eec['charAt'](_0x389106++);~_0x5c113a&&(_0x3fc962=_0x2a76a2%0x4?_0x3fc962*0x40+_0x5c113a:_0x5c113a,_0x2a76a2++%0x4)?_0x1bdf4d+=String['fromCharCode'](0xff&_0x3fc962>>(-0x2*_0x2a76a2&0x6)):0x0){_0x5c113a=_0x2f1f4d['indexOf'](_0x5c113a);}for(let _0x3c7b67=0x0,_0x285688=_0x1bdf4d['length'];_0x3c7b67<_0x285688;_0x3c7b67++){_0x2c3317+='%'+('00'+_0x1bdf4d['charCodeAt'](_0x3c7b67)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2c3317);};const _0x495770=function(_0x333292,_0x57b6a1){let _0x204794=[],_0x562bef=0x0,_0x3b5028,_0x5d69c9='';_0x333292=_0x4d739a(_0x333292);let _0x11f088;for(_0x11f088=0x0;_0x11f088<0x100;_0x11f088++){_0x204794[_0x11f088]=_0x11f088;}for(_0x11f088=0x0;_0x11f088<0x100;_0x11f088++){_0x562bef=(_0x562bef+_0x204794[_0x11f088]+_0x57b6a1['charCodeAt'](_0x11f088%_0x57b6a1['length']))%0x100,_0x3b5028=_0x204794[_0x11f088],_0x204794[_0x11f088]=_0x204794[_0x562bef],_0x204794[_0x562bef]=_0x3b5028;}_0x11f088=0x0,_0x562bef=0x0;for(let _0x3b7ff1=0x0;_0x3b7ff1<_0x333292['length'];_0x3b7ff1++){_0x11f088=(_0x11f088+0x1)%0x100,_0x562bef=(_0x562bef+_0x204794[_0x11f088])%0x100,_0x3b5028=_0x204794[_0x11f088],_0x204794[_0x11f088]=_0x204794[_0x562bef],_0x204794[_0x562bef]=_0x3b5028,_0x5d69c9+=String['fromCharCode'](_0x333292['charCodeAt'](_0x3b7ff1)^_0x204794[(_0x204794[_0x11f088]+_0x204794[_0x562bef])%0x100]);}return _0x5d69c9;};_0x5c11['lRrLsH']=_0x495770,_0x4cefd8=arguments,_0x5c11['LLazjs']=!![];}const _0x2fafd5=_0x38783a[0x0],_0x5339ee=_0xb82f17+_0x2fafd5,_0x1977d0=_0x4cefd8[_0x5339ee];return!_0x1977d0?(_0x5c11['UGygUz']===undefined&&(_0x5c11['UGygUz']=!![]),_0x52dae2=_0x5c11['lRrLsH'](_0x52dae2,_0x487777),_0x4cefd8[_0x5339ee]=_0x52dae2):_0x52dae2=_0x1977d0,_0x52dae2;},_0x5c11(_0x4cefd8,_0x42267d);}function _0xb82f(_0x4cefd8,_0x42267d){const _0x38783a=_0x3878();return _0xb82f=function(_0xb82f17,_0x487777){_0xb82f17=_0xb82f17-0x16d;let _0x52dae2=_0x38783a[_0xb82f17];return _0x52dae2;},_0xb82f(_0x4cefd8,_0x42267d);}function mmyp_newLogin(){const _0x53671d=_0x5c11,_0x2999ff=_0x3b070d;soy_mmyp_token='',soy_mmyp_user_id='';let _0x3b5028=Get_request(_0x2999ff(0x184)+soy_mmyp_phone+_0x53671d('0x1e8','1PU1')+soy_mmyp_pass);return new Promise((_0x5d69c9,_0x11f088)=>{const _0x12618f=_0x53671d;$[_0x12618f(0x1cb,'SPYM')](_0x3b5028,async(_0x3b7ff1,_0x5cc70d,_0x62e6ba)=>{const _0x491820=_0x12618f,_0x380c15=_0xb82f,_0x4d9e15=_0x4957;try{if(_0x3b7ff1)console[_0x4d9e15(0x192)](_0x4d9e15(0x1f0)+$[_0x4d9e15(0x1b2)]+'\x20用户登录】:\x20网络请求失败'),subTitle+=_0x380c15('0x1e5')+$[_0x4d9e15('0x1b2')]+'\x20用户登录】:\x20网络请求失败';else{let _0x5e70d7=JSON[_0x491820(0x1ca,'#2U4')](_0x62e6ba);_0x5e70d7[_0x4d9e15('0x194')]==0xc8?(username=_0x5e70d7[_0x4d9e15(0x175)][_0x380c15(0x1a5)],soy_mmyp_user_id=_0x5e70d7['data']['id'],soy_mmyp_token=_0x5e70d7['data'][_0x4d9e15('0x174')],await soy_mmyp_pageSlist(),await $['wait'](Math[_0x380c15(0x1c0)](Math[_0x380c15(0x1c8)]()*(0xbb8-0x3e8+0x3e8)+0x3e8)),await soy_mmyp_wallet(),await $[_0x380c15('0x1c2')](Math[_0x4d9e15('0x19c')](Math[_0x380c15(0x1c8)]()*(0xbb8-0x3e8+0x3e8)+0x3e8)),await soy_mmyp_SignIn()):console[_0x380c15(0x189)](_0x380c15('0x1e5')+$[_0x380c15('0x199')]+_0x4d9e15('0x1b1')+_0x5e70d7[_0x380c15('0x16e')]);}}catch(_0x276027){console[_0x380c15('0x189')](_0x276027,_0x5cc70d);}finally{_0x5d69c9();}});});}function soy_mmyp_SignIn(){const _0x2f9a9f=_0xb82f;let _0x41dd4a=Get_request(_0x2f9a9f('0x18a')+soy_mmyp_user_id);return new Promise((_0x5934ea,_0x445f21)=>{const _0x397599=_0x4957;$[_0x397599('0x196')](_0x41dd4a,async(_0x4fc748,_0x165b04,_0x10c9c1)=>{const _0x3061f6=_0x5c11,_0x19d3a9=_0x397599,_0x39112d=_0xb82f;try{if(_0x4fc748)console[_0x39112d(0x189)]('\x0a【soy脚本提示---账号\x20'+$[_0x19d3a9('0x1b2')]+_0x39112d('0x190')),subTitle+=_0x19d3a9(0x1f0)+$['index']+_0x39112d(0x190);else{let _0x104a00=JSON[_0x19d3a9(0x1a2)](_0x10c9c1);_0x104a00[_0x39112d('0x1bf')]==0xc8?(console[_0x39112d('0x189')]('\x0a【soy脚本提示---账号\x20'+$[_0x3061f6('0x1e3','RZmL')]+_0x3061f6(0x1df,'Gl1i')+_0x104a00[_0x39112d(0x1c5)]['day']+'\x0a---当前积分：'+_0x104a00['data']['integral']),subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20签到】:\x20\x0a---签到天数：'+_0x104a00[_0x3061f6(0x1b8,'abq6')][_0x39112d(0x1dd)]+_0x39112d('0x198')+_0x104a00['data']['integral']):console[_0x39112d('0x189')](_0x3061f6(0x1ac,'&Nu%')+$[_0x39112d('0x199')]+_0x19d3a9(0x19d)+_0x104a00['msg']);}}catch(_0x496894){console[_0x19d3a9(0x192)](_0x496894,_0x165b04);}finally{_0x5934ea();}});});}function _0x3878(){const _0x1adf04=['D8k2dHXA','\x20签到】:\x20网络请求失败','D8kxCa','Bg9N','W7ldISk/W7qYW7VcVW','y29Kzq','\x20===\x0a','z2v0','oMdcPf0tzmkf','\x0a---当前积分：','index','jM5HBwu9','113182OQPCIE','zMXVB3i','ioETVUwiSooaKtOG','nZy4ndqXBuHoAvnn','b+obIJ8KWRJOHABMNk7MJAdNP7BcImkEWPFOTB/LJkNcVG','WO50hsz0','ru3cICoXW49IqxaEtSkCgW','CgfYC2u','Ahr0CdOVl3LNlNP6yNPIlMnVBs9HCgKVBxmTC2XPzguVC2XPzguVD2L0AgrYyxC/CM1Ipq','WRrAW4OU','username','WQhcN8o8WPHYWQ3cUGXhbSk5mmo9','6798519qtyKzq','\x20红包列表】:\x20没有释放到红包,请明天再试','ASkAW69KWOa','getdata','getTimezoneOffset','W5xJGl9WxmkV6iA65P+W5O6h56wjjGdcT+I2M+wpHf4','AJNcM8oLcaBcLCoqmSoQW6rcwW','C295x21TExbFzgf0yq','indexOf','be7cKu4HxmoCwmoEWOhdJSoxW7K','ioETVUwiSoEkTUAaGEoaKtOG','Aw5KzxG','tqZdGWRdTH7dVNGBz2fF','W6euW7vDCW','oglcJJBdQc/cRM9QW4j5EtO','WQdMJB7NJ7NJG6fbyUE+NEE7SUITHEAWQ+wLGoI1OG','ySk8dXzFnmk0','WQK3Cgm','W7RdLdiJW7tdHIO','WOO1kq','W6FdLcdcGa','WPFMJyxNJ47JGB7cKCkZ','CMfUzg9T','WRJdRmocdmo4WRmhWRRdKa','code','floor','zw52','wait','v+MIP+wmVUE6S+wnIEoaOmkFca','zSk2hXC','data','Bmk3hXDg','12TTuJwr','random','WQX/hdmHWRbKtq/cVG','W6pdImk6W5GJ','WQqoWQa','BflcMSowmW','ioE6OUwmHEwiL+IHQooaKtOG','C3bSAxq','cUoaKhnVEEIeMUACRoApKoEKUUoaKE+8MUACQUwHQ+wgMEEBUow6LowpMoMhJYbZB3LFBw15Cf9KyxrH','\x20用户钱包】:\x20网络请求失败','Aw5KzxHpzG','pt0944cq5ywXia','ioMIHUwpLUE6OUwmHEoaKtOG572r57UC6k+35Rgc5AsX6lsL','balance','W7SvW6HNzSoKW7ZcL2bDWQdcMCo3','c8otzbNcHaxcPG','cUw8GowNI+oaKoESRca','W7/cI8kbzhFcGSoqymobW6lcLCkI','get','type','ioE6OUwmHEwiL+IHQooaKtOG572r57UC6k+35Rgc5AsX6lsL','parse','day','W77dNLNcLKZcQSosWRacW54krcC','W4FNRAtLIyNJGzi2W5eccvtdTUETTUwiG+wNHEAxRU+9PW','brpdGmkAWPu5EwCQr8kokmou','C3nVl2DLDe15D2fSBgv0p2LKpq','length','lmk/W5JcQYO','WRXxjmkW','\x0a【soy脚本提示---账号\x20','mJy0mZq1oeP2tg1luq','\x20个账号任务】','WQVdKK/cRutdUSkBW6yXW5umwsJcJKXys8k+cXZcVW','EwCUENPIEMiUy29T','lEEvSUAjU+MtUUwpHoobRtJcKoE+NEE5UEITHoAZUowLQoI3UW','xqxcIrxdTa','toE4LowmLEwjQUIIJEobOmo9WQ/NVyJNU5xORQhMSBJLPQ3OTOC','http://yg.zzbzb.com/api/ms-member/','uW7cMrtdRqJdPq','W68rpmozWQJcNW','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','logIntegralEaring/getLogIntegral?id=','Bg9NrxjY','soy_mmyp_data','msg','getTime','toLocaleString','WPBcG8kS','z2v0zgf0yq','uoE6NEwpV+wlJ+IGJoocKmoBFq','Dg9Rzw4','zgf0yq','WOFJGQftWQzy6iED5P6h5OYq56wNWPDghEI1OownHf0','z8k4fXnqi8kW','WONJGAqHW5hcPEIhREAFTUApREELKJldT0dOT6pLJ4Sd','CmkrySoFdMxcRbJcUxG','W6ZdGs4','tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKidGUmtSGuefslufmmdaGqNvPBgqVsfvbv0vjuefslufmmda7ihD2ksbbChbSzvDLyKTPDc81mZCUmZyGkeTive1mlcbSAwTLieDLy2TVksbwzxjZAw9UlZqUmcbdAhjVBwuVntCUmc4YotG3lJeZmIbnuvfcCM93C2vYlZyUmIbuqLmVmdq0mZa0ig5HBwuGu2fMyxjPlZuZnY4ZnIbnAwnYB01LC3nLBMDLCI82lJCUmY4XmZyWkdb4mJyWnZaZmZmP','Et3dH17dJWdcKvLnW4C','split','WRZcGbpdUbNdTCoKWPenW7KIDq','162050KlJHsd','310476AgkmsG','qqNdImoOuCkXWQOXWQ/dGr5c','W6DdW5S','wrJcIG','C3nVl25LD0XVz2LUp3bOB25Lpq','odeWmJqZmKPhzKDVza','logIntegralEaring/getMyLogIntegralEaring?pageSize=15&pageNum=1&uid=','&type=1&uid=','WRvvW4G','log','signIn/signIn?uid=','WQ1yW4vhBfSG','USER','W4FdTaWCW44','application/json'];_0x3878=function(){return _0x1adf04;};return _0x3878();}function soy_mmyp_pageSlist(){const _0xd9f09f=_0xb82f;let _0x1c4367=Get_request(_0xd9f09f('0x186')+soy_mmyp_user_id);return new Promise((_0x1a25d5,_0x472823)=>{$['get'](_0x1c4367,async(_0x77a9d0,_0x1ca1ea,_0x31eeef)=>{const _0x464c13=_0x5c11,_0x593de5=_0x4957,_0x12311f=_0xb82f;try{if(_0x77a9d0)console[_0x12311f(0x189)](_0x12311f(0x1e5)+$[_0x593de5('0x1b2')]+_0x464c13('0x1ec','o]gR')),subTitle+=_0x464c13('0x176','1PU1')+$[_0x464c13(0x1eb,'(Gdv')]+_0x593de5(0x1db);else{let _0x287130=JSON['parse'](_0x31eeef);if(_0x287130[_0x12311f('0x1bf')]==0xc8){if(_0x287130[_0x12311f(0x16e)]=='SUCCESS'){if(_0x287130[_0x12311f(0x1c5)][_0x12311f('0x1e2')]==0x0)console[_0x12311f(0x189)]('\x0a【soy脚本提示---账号\x20'+$[_0x464c13(0x1cc,'CkAk')]+_0x12311f('0x1a8'));else for(pageSlist of _0x287130[_0x464c13(0x1a4,'KsG9')]){let _0x43585a=pageSlist['id'],_0x1d80ec=pageSlist[_0x12311f('0x1da')];if(_0x1d80ec==0x0){await soy_mmyp_openpage(_0x43585a);let _0x53bf97=Math['floor'](Math[_0x593de5(0x1bd)]()*(0x7530-0x6d60+0x3e8)+0x6d60);await $[_0x464c13('0x1e4','Sw9u')](_0x53bf97);}}}else console[_0x12311f(0x189)]('\x0a【soy脚本提示---账号\x20'+$[_0x12311f('0x199')]+_0x593de5(0x1cd)+_0x287130['msg']);}else console[_0x12311f('0x189')]('\x0a【soy脚本提示---账号\x20'+$[_0x12311f(0x199)]+_0x464c13('0x173','I8p)')+_0x287130[_0x12311f(0x16e)]);}}catch(_0x4bf425){console[_0x464c13('0x191',')Scd')](_0x4bf425,_0x1ca1ea);}finally{_0x1a25d5();}});});}function soy_mmyp_openpage(_0x4e9df4){const _0xf7da24=_0xb82f;let _0x207904=Get_request(_0xf7da24('0x1f1')+_0x4e9df4);return new Promise((_0x696802,_0x5b20a6)=>{const _0x5136e3=_0xf7da24;$[_0x5136e3(0x1d9)](_0x207904,async(_0x682f28,_0x2ed4bc,_0x366113)=>{const _0x715252=_0x5136e3,_0x4221cd=_0x5c11,_0x9ae24b=_0x4957;try{if(_0x682f28)console[_0x9ae24b('0x192')](_0x4221cd(0x19f,'(fpH')+$[_0x4221cd('0x1b4','e!P&')]+'\x20领取红包】:\x20网络请求失败'),subTitle+=_0x715252(0x1e5)+$['index']+_0x9ae24b(0x1d3);else{let _0x5b8df1=JSON[_0x4221cd('0x18d','HxjQ')](_0x366113);_0x5b8df1['code']==0xc8?console[_0x4221cd(0x17a,'qQ7f')](_0x9ae24b(0x1f0)+$[_0x4221cd('0x1c6','TGwO')]+_0x4221cd(0x1c3,'0wjE')+_0x5b8df1[_0x715252('0x16e')]):console[_0x9ae24b(0x192)]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20领取红包】:\x20'+_0x5b8df1[_0x4221cd('0x183','(Gdv')]);}}catch(_0x548b2f){console['log'](_0x548b2f,_0x2ed4bc);}finally{_0x696802();}});});}function soy_mmyp_wallet(){const _0x4903f2=_0x5c11,_0x2d6f84=_0x3b070d;let _0x3200da=Get_request(_0x2d6f84('0x1e1')+soy_mmyp_user_id+_0x4903f2('0x18b','NKVo'));return new Promise((_0x2b09f1,_0x39c529)=>{const _0x2d33e9=_0xb82f;$[_0x2d33e9('0x1d9')](_0x3200da,async(_0x34c743,_0x374f41,_0x4b2c80)=>{const _0x31c9d8=_0x5c11,_0x16723e=_0x4957,_0x447bed=_0x2d33e9;try{if(_0x34c743)console[_0x447bed('0x189')](_0x16723e(0x1f0)+$[_0x16723e('0x1b2')]+_0x447bed('0x1d0')),subTitle+=_0x31c9d8(0x178,'jFHa')+$[_0x16723e('0x1b2')]+_0x31c9d8(0x1ea,'(fpH');else{let _0x33a124=JSON[_0x447bed('0x1dc')](_0x4b2c80);_0x4b2c80['indexOf'](''+soy_mmyp_user_id)>-0x1?_0x33a124['balance']>=0xa?soy_mmyp_Collection?await soy_mmyp_withdraw(Math[_0x31c9d8(0x18f,'TGwO')](_0x33a124[_0x31c9d8('0x177','TGwO')])):console[_0x16723e('0x192')](_0x447bed('0x1e5')+$[_0x31c9d8(0x1a9,']hUc')]+'\x20用户钱包】:\x20未提供支付宝账号,无法提现'):console[_0x447bed('0x189')]('---当前余额：'+_0x33a124[_0x447bed(0x1d4)]):console[_0x16723e(0x192)](_0x16723e(0x1f0)+$[_0x31c9d8(0x1a0,'Gl1i')]+'\x20用户钱包】:\x20获取数据失败');}}catch(_0x4987e3){console['log'](_0x4987e3,_0x374f41);}finally{_0x2b09f1();}});});}function soy_mmyp_withdraw(_0x4dcfe7){const _0x56c1fc=_0x5c11,_0x226756=_0xb82f,_0x7143b0=_0x3b070d;let _0x5d919c={'url':_0x7143b0('0x1a3')+_0x4dcfe7+_0x7143b0('0x19a')+soy_mmyp_Collection+_0x226756('0x187')+soy_mmyp_user_id+'&banben=100','headers':{'Authorization':_0x56c1fc(0x197,'0wjE')+soy_mmyp_token,'user_id':soy_mmyp_user_id,'token_type':_0x226756('0x18c'),'Content-Type':'application/json','user-agent':soy_mmyp_UA,'Host':_0x7143b0(0x1e9)}};return new Promise((_0x5420ff,_0xd4fa06)=>{$['get'](_0x5d919c,async(_0x1bc01b,_0x25d530,_0x51d444)=>{const _0x1aef93=_0xb82f,_0x4d7d22=_0x5c11,_0x51f523=_0x4957;try{if(_0x1bc01b)console[_0x51f523('0x192')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20提现】:\x20网络请求失败'),subTitle+=_0x51f523('0x1f0')+$['index']+_0x4d7d22(0x1b6,'qQ7f');else{let _0x85f2a6=JSON[_0x51f523(0x1a2)](_0x51d444);_0x85f2a6[_0x4d7d22('0x1c4','TGwO')]==0xc8?console[_0x4d7d22('0x182','NKVo')](_0x51f523('0x1f0')+$['index']+'\x20提现】:\x20'+_0x85f2a6[_0x4d7d22('0x183','(Gdv')]):console['log'](_0x51f523('0x1f0')+$['index']+_0x4d7d22(0x1bc,'HxjQ')+_0x85f2a6[_0x1aef93('0x16e')]);}}catch(_0x131148){console[_0x1aef93(0x189)](_0x131148,_0x25d530);}finally{_0x5420ff();}});});}function Get_request(_0x2c7575){const _0x1f4d7e=_0xb82f,_0x2bfd1a=_0x5c11;return{'url':''+host+_0x2c7575,'headers':{'Authorization':_0x2bfd1a(0x1b9,'HxjQ')+soy_mmyp_token,'user_id':soy_mmyp_user_id,'token_type':'USER','Content-Type':_0x1f4d7e('0x18e'),'user-agent':soy_mmyp_UA,'Host':_0x2bfd1a('0x1b3','(Gdv'),'Connection':_0x2bfd1a('0x1c9','Gl1i'),'Accept-Encoding':_0x2bfd1a('0x1bb','qQ7f'),'Cookie':_0x2bfd1a(0x193,'#2U4')}};};



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