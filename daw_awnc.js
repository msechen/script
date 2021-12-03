/*

软件名称:都爱玩之省钱农场

项目注册地址(微信打开):https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABOSA9,dawbox-android#wechat_redirect

都爱玩里面的小游戏,一个种菜的,感觉没啥用,
新用户进去后第二天提现0.3,之后的就是靠等级

必要变量:

变量名 soy_daw_data
变量值 xxx&1
注释:抓包请求头上的token(复制都爱玩就可以)&兑换钻石(0代表不兑换,1代表兑换)

 

选填变量
变量名 soy_daw_UA
变量值 User-Agent


多个号用 @ 或 # 或 换行 隔开

没有v2p重写功能,只有自己抓包填写

cron "25 6-21 * * *"

*/


const $ = new Env('都爱玩之省钱农场');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x15fdd6=_0x156a,_0x190f6b=_0x1404;(function(_0x59512c,_0x386bf6){const _0x23f7e3=_0x1bf5,_0x51c0c9=_0x156a,_0x5bbe60=_0x1404,_0x582580=_0x59512c();while(!![]){try{const _0x5afccb=-parseInt(_0x5bbe60(0xf8))/0x1*(-parseInt(_0x5bbe60(0x173))/0x2)+-parseInt(_0x5bbe60(0xaa))/0x3*(-parseInt(_0x5bbe60(0x131))/0x4)+parseInt(_0x5bbe60(0x134))/0x5+-parseInt(_0x51c0c9(0x114))/0x6+parseInt(_0x23f7e3(0x16e,'^6OD'))/0x7+-parseInt(_0x23f7e3(0x157,'Xjd*'))/0x8*(parseInt(_0x51c0c9(0x144))/0x9)+-parseInt(_0x23f7e3(0x13f,'Jhhi'))/0xa;if(_0x5afccb===_0x386bf6)break;else _0x582580['push'](_0x582580['shift']());}catch(_0x25ec25){_0x582580['push'](_0x582580['shift']());}}}(_0x4d36,0x33a16));let app_soy_daw_data=[],app_soy_daw_UA=[];!(async()=>{const _0x12ddf1=_0x1bf5,_0x279398=_0x156a,_0x5ac9eb=_0x1404;typeof $request!==_0x5ac9eb(0xcd)&&await Get_data();if($['isNode']()){if(!process[_0x279398(0x162)][_0x5ac9eb(0x137)]){console[_0x12ddf1(0x12d,'^6OD')](_0x279398(0x17f));return;}if(process[_0x5ac9eb(0x13d)][_0x12ddf1(0x196,'eu5p')]&&process[_0x279398(0x162)][_0x5ac9eb(0x137)][_0x279398(0xd8)]('@')>-0x1)app_soy_daw_data=process[_0x12ddf1(0x103,'hOQM')][_0x12ddf1(0x120,'6G&u')][_0x279398(0x14c)]('@');else{if(process['env'][_0x12ddf1(0x177,'$yrb')]&&process['env'][_0x12ddf1(0x1c8,'7#2M')][_0x5ac9eb(0xde)]('\x0a')>-0x1)app_soy_daw_data=process['env'][_0x12ddf1(0xe3,'6SXr')]['split']('\x0a');else process[_0x279398(0x162)][_0x279398(0x158)]&&process[_0x12ddf1(0xf3,'6SXr')][_0x5ac9eb(0x137)][_0x5ac9eb(0xde)]('#')>-0x1?app_soy_daw_data=process[_0x12ddf1(0x10f,'KH76')][_0x12ddf1(0x16d,'OvuH')][_0x5ac9eb(0x174)]('#'):app_soy_daw_data=process[_0x5ac9eb(0x13d)][_0x279398(0x158)][_0x12ddf1(0xe8,'(zBM')]();};if(process[_0x12ddf1(0xe9,'@Nr*')]['soy_daw_UA']){if(process[_0x5ac9eb(0x13d)][_0x5ac9eb(0xd1)]&&process[_0x5ac9eb(0x13d)][_0x12ddf1(0x110,'r#l7')][_0x12ddf1(0xdc,'Xjd*')]('@')>-0x1)app_soy_daw_UA=process[_0x12ddf1(0x101,'L^Gn')][_0x279398(0x10b)]['split']('@');else{if(process[_0x279398(0x162)][_0x279398(0x10b)]&&process[_0x279398(0x162)][_0x279398(0x10b)]['indexOf']('\x0a')>-0x1)app_soy_daw_UA=process['env'][_0x12ddf1(0x190,'Jhhi')][_0x5ac9eb(0x174)]('\x0a');else process[_0x5ac9eb(0x13d)][_0x5ac9eb(0xd1)]&&process[_0x279398(0x162)][_0x5ac9eb(0xd1)][_0x12ddf1(0x15b,'7#2M')]('#')>-0x1?app_soy_daw_UA=process['env'][_0x5ac9eb(0xd1)]['split']('#'):app_soy_daw_UA=process['env'][_0x279398(0x10b)][_0x5ac9eb(0x174)]();};};}else{if(!$[_0x12ddf1(0x147,'el16')]('soy_daw_data')){console['log'](_0x5ac9eb(0x1af));return;}if($['getdata'](_0x279398(0x158))&&$[_0x12ddf1(0x145,'muap')](_0x12ddf1(0xf4,'9IfY'))[_0x279398(0xd8)]('@')>-0x1)app_soy_daw_data=$['getdata'](_0x279398(0x158))['split']('@');else $['getdata'](_0x12ddf1(0xea,'Xjd*'))&&$[_0x5ac9eb(0x156)](_0x12ddf1(0xf0,'NCLX'))['indexOf']('\x0a')>-0x1?app_soy_daw_data=$[_0x279398(0x11c)](_0x279398(0x158))[_0x279398(0x14c)]('\x0a'):app_soy_daw_data=$[_0x5ac9eb(0x156)](_0x5ac9eb(0x137))[_0x279398(0x14c)]();;if($[_0x5ac9eb(0x156)](_0x12ddf1(0x19e,'d4T!'))){if($[_0x12ddf1(0x194,'^6OD')](_0x5ac9eb(0xd1))&&$[_0x279398(0x11c)]('soy_daw_UA')[_0x279398(0xd8)]('@')>-0x1)app_soy_daw_UA=$[_0x5ac9eb(0x156)](_0x5ac9eb(0xd1))[_0x279398(0x14c)]('@');else{if($[_0x5ac9eb(0x156)](_0x279398(0x10b))&&$[_0x12ddf1(0x167,'dCp%')]('soy_daw_UA')[_0x279398(0xd8)]('\x0a')>-0x1)app_soy_daw_UA=$[_0x279398(0x11c)](_0x12ddf1(0x1aa,'L^Gn'))[_0x12ddf1(0x117,'lgn2')]('\x0a');else $[_0x12ddf1(0xeb,'d4T!')](_0x279398(0x10b))&&$['getdata'](_0x5ac9eb(0xd1))['indexOf']('#')>-0x1?app_soy_daw_UA=$[_0x12ddf1(0xbd,'$yrb')](_0x279398(0x10b))['split']('#'):app_soy_daw_UA=$[_0x12ddf1(0x167,'dCp%')](_0x12ddf1(0x153,'jXC&'))[_0x5ac9eb(0x174)]();};}}console[_0x279398(0xaf)](_0x12ddf1(0x168,'Y[^(')+new Date(new Date()[_0x12ddf1(0x179,'6SXr')]()+new Date()[_0x5ac9eb(0x1a0)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x5ac9eb(0x1a2)),console[_0x12ddf1(0xb7,'L^Gn')](_0x279398(0x1bb)+app_soy_daw_data[_0x5ac9eb(0x12b)]+_0x279398(0xab)),subTitle='';for(i=0x0;i<app_soy_daw_data[_0x279398(0xb2)];i++){soy_daw_data=app_soy_daw_data[i]['split']('&'),soy_awnc_token=soy_daw_data[0x0],soy_awnc_Diamonds=soy_daw_data[0x1];if(!soy_awnc_token||!soy_awnc_Diamonds){console[_0x12ddf1(0x176,'^vwu')](_0x12ddf1(0xb6,'fk2%'));return;}$[_0x12ddf1(0x1cc,'L^Gn')](_0x5ac9eb(0xd1))||process[_0x279398(0x162)][_0x279398(0x10b)]?(soy_awnc_UA=app_soy_daw_UA[i],!soy_awnc_UA&&(soy_awnc_UA=_0x279398(0x12f))):soy_awnc_UA=_0x279398(0x12f),$[_0x279398(0xd7)]=i+0x1,await implement();};notify&&(subTitle&&await notify['sendNotify']($[_0x5ac9eb(0xe5)],subTitle));})()[_0x190f6b(0x129)](_0xfedd1=>$[_0x15fdd6(0x105)](_0xfedd1))['finally'](()=>$['done']());async function implement(){const _0x116077=_0x190f6b,_0x4e81d2=_0x15fdd6;host='https://market.haowusong.com/guoyuan/',console[_0x4e81d2(0xaf)](_0x4e81d2(0x195)+$[_0x116077(0xa1)]+'\x20个账号任务】'),await soy_awnc_new(),await soy_awnc_taskList();for(let _0x294867=0x0;_0x294867<0x4;_0x294867++){await soy_awnc_onlineAward(_0x294867);}await soy_awnc_getMailList(),await soy_awnc_status(),await soy_awnc_mygold(),await soy_awnc_newbuildlv();}function soy_awnc_config(){const _0xcb4625=_0x190f6b,_0x1b809a=_0x15fdd6,_0x3e0cd9=_0x1bf5;let _0x508df4={'url':'https://v3.sdk.haowusong.com/api/red/bag/level/config?game_id=1028','headers':{'Host':_0x3e0cd9(0x188,'KH76'),'accept':_0x1b809a(0x136),'user-agent':soy_awnc_UA,'token':soy_awnc_token,'origin':_0x1b809a(0x125),'x-requested-with':_0x3e0cd9(0xbc,'lgn2'),'sec-fetch-site':_0x3e0cd9(0x10c,'yE4U'),'sec-fetch-mode':_0x3e0cd9(0x11d,'eu5p'),'sec-fetch-dest':_0xcb4625(0x154)}};return new Promise((_0x28958e,_0x52610a)=>{const _0x388711=_0x1b809a;$[_0x388711(0x116)](_0x508df4,async(_0x536950,_0x12382e,_0x2c76ec)=>{const _0x4a9c55=_0x1404,_0x5c922=_0x388711,_0x51bb0e=_0x1bf5;try{if(_0x536950)console[_0x51bb0e(0x1be,'eu5p')]('\x0a【soy脚本提示---账号\x20'+$[_0x5c922(0xd7)]+_0x4a9c55(0x16b)),subTitle+=_0x4a9c55(0x1d2)+$[_0x51bb0e(0x127,'9n2p')]+_0x5c922(0x19c);else{let _0x33ef57=JSON[_0x51bb0e(0x128,'6SXr')](_0x2c76ec);_0x33ef57[_0x5c922(0xd9)]==0xc8?(game_name=_0x33ef57['data'][_0x4a9c55(0x10e)][_0x4a9c55(0x123)],game_id=_0x33ef57[_0x51bb0e(0x1a9,'9IfY')]['game_data'][_0x4a9c55(0x15e)],money_id=_0x33ef57['data'][_0x5c922(0xa9)][_0x5c922(0x111)],game_level=_0x33ef57[_0x5c922(0xb5)][_0x51bb0e(0x14b,'Xjd*')][_0x4a9c55(0x1d1)]):console[_0x5c922(0xaf)](_0x51bb0e(0x1c2,'Qj!s')+$[_0x5c922(0xd7)]+'\x20用户信息】:\x20获取失败');}}catch(_0x587f9d){console[_0x5c922(0xaf)](_0x587f9d,_0x12382e);}finally{_0x28958e();}});});}function soy_awnc_getnew(){const _0x35b78f=_0x15fdd6,_0x5c783d=_0x1bf5,_0xff052=_0x190f6b;let _0x10cec2=Post_request('index.php/home/new/prize?t='+Math[_0xff052(0x164)](new Date()['getTime']()/0x3e8)[_0x5c783d(0x1b4,'$yrb')](),_0x35b78f(0x1bc)+soy_awnc_token);return new Promise((_0x833a61,_0x4fad49)=>{$['post'](_0x10cec2,async(_0x44fcde,_0x5df9ed,_0x449c9d)=>{const _0x26c9e1=_0x1404,_0x44b7f1=_0x1bf5,_0x7b9762=_0x156a;try{if(_0x44fcde)console[_0x7b9762(0xaf)](_0x44b7f1(0x14f,'fOF&')+$[_0x7b9762(0xd7)]+_0x7b9762(0x14e)),subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20转盘抽奖】:\x20网络请求失败';else{let _0x3d9a3f=JSON[_0x7b9762(0x12c)](_0x449c9d);_0x3d9a3f[_0x44b7f1(0xae,'ZUs!')]==0x1?console[_0x7b9762(0xaf)](_0x7b9762(0xc9)+$['index']+_0x26c9e1(0xe4)+_0x3d9a3f[_0x26c9e1(0xba)][_0x44b7f1(0x1ad,'b1cv')]):console[_0x26c9e1(0x122)]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x44b7f1(0x193,'el16')+_0x3d9a3f['msg']);}}catch(_0x15001a){console[_0x7b9762(0xaf)](_0x15001a,_0x5df9ed);}finally{_0x833a61();}});});}function soy_awnc_new(){const _0x405867=_0x15fdd6,_0x35e8d7=_0x1bf5;let _0xa066f9=Post_request('index.php/home/new/award_list?t='+Math['round'](new Date()['getTime']()/0x3e8)[_0x35e8d7(0x172,'Xjd*')](),_0x405867(0x1bc)+soy_awnc_token);return new Promise((_0x4dbf2e,_0x3e7f0d)=>{$['post'](_0xa066f9,async(_0x1f6d8b,_0x110e72,_0x2abc38)=>{const _0x417387=_0x156a,_0x51471a=_0x1404,_0x17fe0f=_0x1bf5;try{if(_0x1f6d8b)console[_0x17fe0f(0x14d,'biNB')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x51471a(0x165)),subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x51471a(0x165);else{let _0x264814=JSON[_0x51471a(0x178)](_0x2abc38);if(_0x264814[_0x51471a(0x119)]==0x1){video_num=_0x264814[_0x51471a(0x18f)],draw_num=_0x264814[_0x51471a(0xa4)];if(video_num<=0x3)for(let _0x160330=0x0;_0x160330<video_num;_0x160330++){await soy_awnc_videoAward(_0x417387(0x1b9)+soy_awnc_token,_0x17fe0f(0xbe,'dCp%')),await $['wait'](Math[_0x51471a(0x130)](Math[_0x51471a(0x1bf)]()*(0xbb8-0x3e8+0x3e8)+0x3e8));}for(let _0x4ce772=0x0;_0x4ce772<draw_num;_0x4ce772++){await soy_awnc_getnew();}}else console[_0x17fe0f(0x1a5,'NCLX')](_0x417387(0xc9)+$[_0x17fe0f(0x16c,'fk2%')]+_0x51471a(0x187)+_0x264814[_0x417387(0x141)]);}}catch(_0x3dc6a2){console[_0x417387(0xaf)](_0x3dc6a2,_0x110e72);}finally{_0x4dbf2e();}});});}function soy_awnc_videoAward(_0x732f61,_0x2f4e95){const _0x472d72=_0x190f6b,_0x279dbc=_0x15fdd6;let _0x28129e=Post_request(_0x279dbc(0xfb)+Math['round'](new Date()[_0x472d72(0x1a7)]()/0x3e8)[_0x472d72(0xf1)](),_0x732f61);return new Promise((_0x23c4dc,_0x50d06d)=>{const _0x114703=_0x279dbc;$[_0x114703(0x102)](_0x28129e,async(_0x2f0750,_0x290f78,_0xf428f0)=>{const _0x2b6e41=_0x114703,_0x707afe=_0x1404,_0x133329=_0x1bf5;try{if(_0x2f0750)console[_0x133329(0x124,'fk2%')](_0x133329(0x15f,'^6OD')+$['index']+'\x20'+_0x2f4e95+_0x133329(0x1a4,'NCLX')),subTitle+=_0x707afe(0x1d2)+$[_0x133329(0x13e,'yE4U')]+'\x20'+_0x2f4e95+'】:\x20网络请求失败';else{let _0x151967=JSON[_0x133329(0x1ae,'Qj!s')](_0xf428f0);_0x151967['code']==0x1?console[_0x2b6e41(0xaf)](_0x133329(0x139,'EuJi')+$[_0x707afe(0xa1)]+'\x20'+_0x2f4e95+_0x133329(0xbf,'fk2%')):console[_0x707afe(0x122)](_0x707afe(0x1d2)+$[_0x707afe(0xa1)]+'\x20'+_0x2f4e95+_0x707afe(0xb3)+_0x151967[_0x133329(0x109,'hOQM')]);}}catch(_0x4d5e53){console['log'](_0x4d5e53,_0x290f78);}finally{_0x23c4dc();}});});}function _0x1404(_0x265b85,_0x5d3741){const _0x4d3666=_0x4d36();return _0x1404=function(_0x156af3,_0x40596e){_0x156af3=_0x156af3-0xa1;let _0x4150da=_0x4d3666[_0x156af3];if(_0x1404['ciMXyD']===undefined){var _0x58b545=function(_0x1404df){const _0x589651='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1ae965='',_0x3ec15c='';for(let _0x4a76a3=0x0,_0x420b89,_0x23cbb5,_0x1bf585=0x0;_0x23cbb5=_0x1404df['charAt'](_0x1bf585++);~_0x23cbb5&&(_0x420b89=_0x4a76a3%0x4?_0x420b89*0x40+_0x23cbb5:_0x23cbb5,_0x4a76a3++%0x4)?_0x1ae965+=String['fromCharCode'](0xff&_0x420b89>>(-0x2*_0x4a76a3&0x6)):0x0){_0x23cbb5=_0x589651['indexOf'](_0x23cbb5);}for(let _0x486413=0x0,_0x197ffd=_0x1ae965['length'];_0x486413<_0x197ffd;_0x486413++){_0x3ec15c+='%'+('00'+_0x1ae965['charCodeAt'](_0x486413)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3ec15c);};_0x1404['zhCDgt']=_0x58b545,_0x265b85=arguments,_0x1404['ciMXyD']=!![];}const _0x3d5c2f=_0x4d3666[0x0],_0x173191=_0x156af3+_0x3d5c2f,_0x24440b=_0x265b85[_0x173191];return!_0x24440b?(_0x4150da=_0x1404['zhCDgt'](_0x4150da),_0x265b85[_0x173191]=_0x4150da):_0x4150da=_0x24440b,_0x4150da;},_0x1404(_0x265b85,_0x5d3741);}function soy_awnc_taskList(){const _0x430223=_0x190f6b,_0x21e7db=_0x1bf5;let _0x4f9d20=Post_request(_0x21e7db(0xee,'biNB')+Math['round'](new Date()[_0x21e7db(0x1c0,'Qj!s')]()/0x3e8)['toString'](),_0x430223(0x19a)+soy_awnc_token);return new Promise((_0x1b2650,_0x3ec47f)=>{const _0x4f1c4f=_0x430223;$[_0x4f1c4f(0x1cd)](_0x4f9d20,async(_0x3bce50,_0xdbfe50,_0x6dd548)=>{const _0x1257c5=_0x1bf5,_0x1fef44=_0x156a,_0x5449b5=_0x4f1c4f;try{if(_0x3bce50)console[_0x5449b5(0x122)](_0x1fef44(0xc9)+$[_0x5449b5(0xa1)]+_0x1257c5(0xc2,'el16')),subTitle+=_0x1fef44(0xc9)+$[_0x1257c5(0xfd,'OvuH')]+_0x1fef44(0x183);else{let _0x3b13a1=JSON[_0x1257c5(0xb4,'^vwu')](_0x6dd548);if(_0x3b13a1['code']==0x1)for(taskList of _0x3b13a1['data']){task_title=taskList[_0x1fef44(0xfa)],task_status=taskList[_0x5449b5(0x1cf)],task_id=taskList[_0x5449b5(0x1b3)],task_now=taskList['now'],task_id==0x1&&(task_now==0x0&&await soy_awnc_share(),await soy_awnc_taskAward(task_id,task_title)),task_id==0x2&&(task_now==0x0&&await soy_awnc_new(),await soy_awnc_taskAward(task_id,task_title)),task_id==0x3&&(task_now<0x3&&await soy_awnc_videoAward(_0x5449b5(0x19f)+soy_awnc_token,task_title),await soy_awnc_taskAward(task_id,task_title));}else console[_0x1fef44(0xaf)]('\x0a【soy脚本提示---账号\x20'+$[_0x5449b5(0xa1)]+_0x5449b5(0xd6)+_0x3b13a1[_0x1fef44(0x141)]);}}catch(_0x4c32a7){console['log'](_0x4c32a7,_0xdbfe50);}finally{_0x1b2650();}});});}function soy_awnc_share(){const _0xba1d9f=_0x190f6b,_0x4b31f8=_0x15fdd6;let _0x33d34a=Post_request(_0x4b31f8(0xac)+Math[_0x4b31f8(0x138)](new Date()['getTime']()/0x3e8)['toString'](),_0xba1d9f(0x19a)+soy_awnc_token);return new Promise((_0x5b45cb,_0x558271)=>{$['get'](_0x33d34a,async(_0xb6fe96,_0x1b3401,_0x334d00)=>{const _0x58411e=_0x156a,_0x29d420=_0x1bf5,_0x45f4f7=_0x1404;try{if(_0xb6fe96)console[_0x45f4f7(0x122)](_0x29d420(0x161,'n6oP')+$[_0x29d420(0xd3,'Jhhi')]+_0x58411e(0x11f)),subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x58411e(0x11f);else{let _0x3c5e37=JSON[_0x45f4f7(0x178)](_0x334d00);_0x3c5e37[_0x58411e(0xd9)]==0x1?console[_0x29d420(0xa5,'jXC&')](_0x45f4f7(0x1d2)+$[_0x58411e(0xd7)]+_0x45f4f7(0x186)):console[_0x58411e(0xaf)](_0x58411e(0xc9)+$['index']+_0x29d420(0x182,'r#l7'));}}catch(_0x3c5af5){console[_0x29d420(0x126,'FK6n')](_0x3c5af5,_0x1b3401);}finally{_0x5b45cb();}});});}function soy_awnc_taskAward(_0x143401,_0x43f3bf){const _0x512941=_0x1bf5,_0x43b984=_0x190f6b;let _0x65f31f=Post_request('index.php/home/new/taskAward?t='+Math['round'](new Date()['getTime']()/0x3e8)[_0x43b984(0xf1)](),_0x512941(0x140,'NCLX')+_0x143401+_0x43b984(0x1a8)+soy_awnc_token);return new Promise((_0x15ed10,_0x59c90b)=>{const _0x5dfe89=_0x512941;$[_0x5dfe89(0x150,'jXC&')](_0x65f31f,async(_0x5c28d4,_0x1a5028,_0x186c3f)=>{const _0x5a8ced=_0x156a,_0x567035=_0x1404,_0x5287be=_0x5dfe89;try{if(_0x5c28d4)console[_0x5287be(0x17d,'ZUs!')]('\x0a【soy脚本提示---账号\x20'+$[_0x567035(0xa1)]+'\x20'+_0x43f3bf+_0x5287be(0x115,'Yq)6')),subTitle+=_0x5287be(0x16f,'Y[^(')+$[_0x567035(0xa1)]+'\x20'+_0x43f3bf+_0x5a8ced(0xe1);else{let _0x94fe29=JSON[_0x5a8ced(0x12c)](_0x186c3f);_0x94fe29[_0x567035(0x119)]==0x1?console[_0x567035(0x122)]('\x0a【soy脚本提示---账号\x20'+$[_0x567035(0xa1)]+'\x20'+_0x43f3bf+'】:\x20获得\x20'+_0x94fe29['data'][_0x5a8ced(0x133)]+_0x567035(0xdd)):console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x5287be(0xdf,'9IfY')]+'\x20'+_0x43f3bf+'】:\x20'+_0x94fe29[_0x5287be(0xad,'V$DD')]);}}catch(_0x3c3a38){console[_0x5287be(0x126,'FK6n')](_0x3c3a38,_0x1a5028);}finally{_0x15ed10();}});});}function _0x4d36(){const _0x38b844=['48ogPUPb','DSk2WOFcHYRdVGZcPcCidCkmW7JcQZxdOSk+W55kj8klW6ybWPS7z8klCqrnWRfCW7C','W7aEurJcSKpcVGe','mZyYnJjXB0v6sgi','C3bSAxq','W4NdTw/dTsS','W6dcMxO','f8oInCkGW6yWWO8CWRzIW7ZcSa','CgfYC2u','ySkrvmo3WPb6sa','W5lcSSkjW78','W6xcMhNdQCkpW7ThW7j2WOnvybHWdf0LWPOjgfSbdNVdHtVcLW','\x20铲除】:\x20网络请求失败','ta9f','ioI0PUAiT+s/OEAbR+oaKtOG572r57UC6k+35Rgc5AsX6lsL','\x0a【soy脚本提示】：未填写相应变量\x20soy_daw_data','\x20兑换钻石】:\x20','W7vcDmooWOK','W4/LI7/KUA7JGAmeWRtOJzdLJyJLPAtOT6G','\x20任务列表】:\x20网络请求失败','WOpJGO5XWPnP6iwf5P2q5O+X56sdoMJcTEI2NowmQ8k3','W7tcJSoRz8kGWO3dTJNcJmozWPuuWOSEBXGGW67dHmk3WQlcKa','iowiHUs6Q+oaKtOG5yIg5lQR5OIq5yQF','ioI9RoEBMoAkVEwLLUoaKtOG','W6ZcT0FdPeBcR8ocWQhcJSkKuvtcJKfnWRDAa8k0WR4','W6xJGlldPSo3W4xOHPhMN5pMJBZNPATKWQj/6lsm5y+Kwa','WOjrW7i','W5dMKjtNPOxJG4pcQ37NVPBNUl3OR5ZMSBVLPi7OTPu','rSkrWQBdKG','BwfYA2v0lMHHB3D1C29UzY5JB20','iowpR+ApKoEoSoEkTUAaGEoaKtOG572r57UC6k+35Rgc5AsX6lsL','DMLKzw9FBNvT','WOddVmkfoCkIn8oUiCoKyq','id=1&sign=sdk_','WRX2WP/cHSkJetO','W4/OVy7NMy3MIkxLP6RJGPRdHCkm','bbL3WQPiW7JdTW','\x0a开始【第\x20','ptNcSb3dHwtcImkbugVdGsq','dCk9W60zWRNdJmo8','Aw5KzxGUCgHWl2HVBwuVp2m9zMfYBszHpwrVyNvPBgrSDIz0pq','iownH+E6P+EkTUAaGEoaKtOG572r57UC6k+35Rgc5AsX6lsL','C2LNBJ1ZzgTF','smkxWQBcSqm','\x20用户信息】:\x20网络请求失败','sfdcTG','dwZcJSkgWRafbSokWOaU','DgLKptmMDhLWzt0Xmda2jNnPz249C2rRxW','z2v0vgLTzxPVBMvpzMzZzxq','vfdcOL0','id09pqO','ioI0PUAiT+s/OEAbR+oaKtOG','44okkCol576d57Iw6k6l5RcD5Aw76lwZ','WRD8WOW','W53cSSkk','z2v0vgLTzq','jNnPz249C2rRxW','W5fusCkc','rCkrWQZdUuT0y8orWRFcTG','t8kfW51mW5i','mJGZmZK4nu9Sww1VEG','WOtdRHuY','yCoMWP7cOSos','cUoaKhnVEEIeMUACRoApKoEKUUoaKE+8MUACQUwHQ+wgMEEBUow6LowpMoMhJYbZB3LFzgf3x2rHDge','W6JdQXZdUuy','\x20领取邮件】:\x20网络请求失败','W7pdQG3dSLO','DgLK','emoIh8klW7a4WPyK','yoodImoQiSkP6iA75P615O+r56ENW69PfUI2LUwmJWG','WPuExG','Fmo0WOS','p+AxRUwkKEodS2JdSoAvIUwkVUwDIowCLW','type=1002&sign=sdk_','u1HxB8oWCSoqWQhdICoB','===【共\x20','sign=sdk_','\x20铲除】:\x20铲除土地','iJNcRG','CMfUzg9T','DSoIWPJcHCoEFuq','W4NdTw/dTsVdHbpdQtGdWQeUWQzlpCkJnmkoW5OLpSotW4qqW5S/Bxv8WQldOJxcM8k3','g+ocL8kFWR7dJUIeIUACJEAmHUEKHhPPW4VOTBdLJy/cIa','roobHSk6lCoy6isF5P+t5OYo56soj8kyAoI0VEwpLKS','\x20兑换现金红包】:\x20','mtmXmdm0nMPXwKz2tG','W4zeb8kQWO0','price','aYFdJZjYsSkXrYriWPis','\x20施肥】:\x20施肥土地','roMaO+s6UUwlQoIJQUobGmocyW','\x20领取邮件】:\x20','uCkBWQhdGK5HDq','Cg9ZDa','\x20邮件列表】:\x20网络请求失败','C3rHDhvZ','W7xLH4VMJOdNJPxPHlNNUQFLJlJJGlacWRFLHiVMJARMIA/LI6a','Bgv2zwW','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','Aw5KzxG','W7pdQG3dSLRdQSkCWQhcN8oKtK7cKeSmWR4rf8o0WRZdVSk5W6FcRttcNrPhW7pcOLbHWPu','getTime','BNvT','WPfUW7u','W4vut8kqfG','W6NcQgdcS8oZW5HMWPi','W67dU3BcQhKYgq','game_data','nJe0mvP5tuvYyG','\x20个账号】===\x0a','index.php/home/new/shareAction?t=','WRxdRee','qW9gpq','log','https://market.haowusong.com','BxnN','length','44croIa','W7ZcL2/dV8ks','data','sUoaLmk7gCoT6iE15PYz5O6p56Ex44oa77+a5AcE5yAO5y2G6yAh5QcH5B2u5lQC6kwW6i2x','wSkrWRi','id=','index.php/home/?c=farm&a=planting&t=','zgf0yq','bownUoE5TUAiLUwWR+AbToobNCkKwowpG+E4HoAiUEwlHa','W7RcJSoOlmk9WRpdTw7cImovW4vaW4ilAHa4WRy','a8oOomkBW6mLWPK','6i2B5y+Z5OM35AAZ5QYr5PAb','44grpSoO6kA0556F6ksP6AkK5OMp5yMY','WRj9WO/cT8kYuI8IjSkdctpcOGJdKCo3jvqdwCkNWQ1mWRRcKmoegmkr','iowfKEAnOUMsU+EFS+oaKtOG5ywr5O2I5OIq5yQF','W4/KU5NLIltLIO/OO5tJGPRdHCkm57Ya57Qv6k245Rcq5AsB6ls2','WQtML4ZOGQFJGB3dUGRLN4/LNzy','\x20兑换钻石】:\x20网络请求失败','dCoJkmkAW7O','fmoSpSkmW6C','W4fABSkxartcKCog','iowCQoE6V+wLLUwkSEoaKtOG572r57UC6k+35Rgc5AsX6lsL','\x0a【soy脚本提示---账号\x20','W6/dMSo4kmko','W6JcP8kldYJcR8ofuIiHW7FdO1a','WPrVW7yqgJNcQ28qtslcMmosWOJdGaBdICkhpSkvW6CAW7POqtHsWRtcUmkHF8kA','Dw5KzwzPBMvK','W6uaWQldS8ot','W6VcK2NdMmkEWRHs','&sign=sdk_','C295x2rHD19vqq','a8oOomkRW6S8WP0','WPRdVCkya8k+','dgxdRfBcUSkChCkeWRfjW5RdNmkeimkzW7TSomkhoq','WOpcLSkI','ios7U+wkOEwiL+IHQooaKtOG','index','indexOf','code','nJe0nJGYAgvfquLx','WRb/W6y','W60FzGNcUgxcTG','ioENJEwTKa','Aw5KzxHpzG','W5XBwCkgcW','W5lJGO9vWQJdGEIgKEACNoAmJUENLxxcTsxOTRlLJABdIa','】:\x20网络请求失败','W60FzGNcUa','DSkBwCo8WP12wIiDW5LqW6K','ioI9RoEBMoAkVEwLLUoaKtOG6i635B6xia','BMfTzq','W7tdM8oPi8ks','W4ZLJAlNUA3NIzpMGlhJG6ddTI4','s01EDSkP','WRNdSmoi','W7CEEZpcPeVcPZNdGr9xgG','gwBcG8k9WRuqea','W6xcMhNdQCkp','https://market.haowusong.com/h621/index.html?token=sdk_','t8kfW51mW5jHoNLMW5GrhX3cMCk+reRdQfhcNSkUhN3dLbXpyYiUiq','W5hJGipcMmk9WRpOHABMNBpMJPRNPAZcGuXX6lEP5y6AW54','WQH8WPlcJCkUhsGvmSonft0','Dg9tDhjPBMC','z29Sza','ymkAvG','W4zArmk8fXZcImo+WPldKqXo','\x20播种】:\x20播种土地','bSk3W74','W6xdSwu','mtDgDeTtvKW','index.php/home/?c=farm&a=hervest&t=','title','index.php/home/video/videoAward?t=','W4/MLjtLI6FJGONcHSkR5z+G5z6C','WPNdLYZcT8oP','y29TlMrHDY50Aw1LB2zSB3zL','WQDiBComW5RdJZDblL0','kUobSfe3W6FOHjlMNQVMJyFNPi3dHwWi6lEp5yYeWRC','u8kqWQm','post','twGz','uowDOoE4IEwKU+wkP+oaUSo8ooE8KEE7TEISKEAWSEwNIEI2TG','logErr','ySoUWOVcV8kky0xcVwe','\x20可提现状态】:\x20','DaHTo0K','rxui','iUoaLHXuWRBOH4NMNl7MJiRNPO4IzxpOTRFLJ5VcGG','soy_daw_UA','W5G1W73cHgSVimkQAG','C8k3WOq','z2fTzv9KyxrH','W7/dQH8','WPZcLSk8lvRdTCkqW4eaWOW','server_id','Ahr0Chm6lY9TyxjRzxqUAgfVD3vZB25NlMnVBq','Aw5KzxGUCgHWl2HVBwuVp2m9zMfYBszHpwzLCNrPBgL6zsz0pq','1310346jqZFvN','44k6lmod57YG57IX6k2G5Rok5Asm6lwB','get','W6RcKCoPA8kT','1075915oHLxvY','y29Kzq','ltNcRsC','wCkxWRFcUG','getdata','ltNcUZe','xgK8t8k9WRP8WR0','\x20分享】:\x20网络请求失败','gCk3W6asWRtdGmoUxSk5WQmWwG','place=','Bg9N','CM9Szv9Uyw1L','lgVcRW','https://v3.h5.haowusong.com','gSkvrW','tvhcTuWC','DCkvuSoqWPW','y2f0y2G','WPZdPaO','BgvUz3rO','parse','dXnK','iowpR+ApKoEoSoEkTUAaGEoaKtOG5ywr5O2I5OIq5yQF','Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','zMXVB3i','nZK2rMjWtfLU','zgLHBw9Uzhm','num','mta3ntKXnw9ithH2wq','WOBJG6zUW6pcJUIhJ+ACM+AnIUEKVmkbeclOTzpLJ6id','application/json,\x20text/plain,\x20*/*','C295x2rHD19KyxrH','round','f+obTNOXsoIfSEAEL+AnGEELQSofeLROT4xLJz9A','BmkArmogWOe5xrujWPDmW6C1W7X7W6yQWQviW7xcMdZdPh3dP8oHAmk7WPenW77dTSkfkmkg','iowCN+wCSoEkTUAaGEoaKtOG5P+L6k+I5AsX6lsL','\x20收割】:\x20网络请求失败','zw52','W4i6W7tcHd4','W4FcQSojx8oWz8kPkSoWurJdMG8','WQ96WO/dRW','msg','toString','eCkFvhhcPSoJW5q','614682heEAIW','W5BcUmkzW75Nxua','index.php/home/pay/withdrawList?t=','WOHhW6hdVmoDW7/cNG','y29ZDa','qEAwUEIaU+oaRmoLW4JNVAlNUldORkFMSAtLPPZOTOW','Aw5KzxGUCgHWl2HVBwuVp2m9zMfYBszHpw5LD2j1AwXKBhyMDd0','W6mqBWNcN07cSrldHa','split','sSkeW54','\x20转盘抽奖】:\x20网络请求失败','WQxJGlOqWQdcJoIeIoADL+AnNEEMRcffWQhOTyRLJ5nP','WO1UW6eb','ioAsREENJEoaKtOG5zYF5zYW','W6xJG6NcTH1h6iAo5P+l5O2o56wVW6bOW4/OTytLJyjv','WO5UW6SQbNBcRfG1iW','zw1WDhK','W5xdOmkvaCkOA8oQgSoAFW','z2v0zgf0yq','WRbjBqVcKh/cGaq','soy_daw_data','Fbz5mLGiW5RdPtNcH1fyWPVcHq0zvmo0ESkdAfFdJe4gwdzJW4X7W6pcTCoY','sfjbAW','gsBdKGHUzmkG','WQZMKzVNP5dJGP3dJCo1572M57Mg6k+X5RoU5Asm6lsQ','W7RcJSoHzW','CM9Szv9Pza','AEobRhdcOvdOHPBMNRRMJzZNPAFcVvFdJEI1PownKCk2','index.php/home/pay/chongScore?t=','fEodImkqWO0R6iEk5P2q5OYC56wTcKJdJUI2S+wmUtO','env','W6NcGmo3CCk8','CM91BMq','ioI9RoEBMoAkVEwLLUoaKtOG572r57UC6k+35Rgc5AsX6lsL','zMfYBq','WOTaWR7cGvhcHCkT','W6PzqKew6iAo5P2V5OUK6kofWOVdLNBLJAVKUl/MLBVPLPNVV7m','W6BcRmoqe8oADfjKqSoFoa','iownH+E6P+AiV+wXI+oaKtOG572r57UC6k+35Rgc5AsX6lsL','ioEuQoAiT+s/OEAbR+oaKtOG572r57UC6k+35Rgc5AsX6lsL','kwRcRbpdRa','WOpdLJhcJCo1p8kWWR5pweVdKq','uuqWW70qWRtcO8odmCojf8kpoa','W6RJGBqme0/OHO7MNA/MJzpNPRpcHSowE+I1MUwnPmkT'];_0x4d36=function(){return _0x38b844;};return _0x4d36();}function soy_awnc_onlineAward(_0x3da160){const _0x42e92c=_0x190f6b,_0x196d7b=_0x15fdd6,_0x566810=_0x1bf5;let _0x33cb9a=Post_request(_0x566810(0xa2,'KH76')+Math['round'](new Date()[_0x566810(0xa8,'UT!M')]()/0x3e8)[_0x196d7b(0x142)](),_0x566810(0x181,'C9ln')+_0x3da160+_0x42e92c(0x1a8)+soy_awnc_token);return new Promise((_0x2af9c0,_0x32956b)=>{const _0x248f22=_0x196d7b;$[_0x248f22(0x102)](_0x33cb9a,async(_0x2c729a,_0x2c3066,_0x1a4be1)=>{const _0x5b54e9=_0x1404,_0x10313c=_0x1bf5;try{if(_0x2c729a)console[_0x10313c(0x1a6,'muap')](_0x10313c(0x1b5,'6G&u')+$[_0x5b54e9(0xa1)]+_0x10313c(0x104,'7#2M')),subTitle+=_0x10313c(0x189,'el16')+$['index']+_0x5b54e9(0xc8);else{let _0x1cb89a=JSON[_0x5b54e9(0x178)](_0x1a4be1);_0x1cb89a[_0x5b54e9(0x119)]==0x1&&console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20在线奖励】:\x20'+_0x1cb89a[_0x10313c(0x1b7,'Qj!s')]);}}catch(_0x393d90){console[_0x5b54e9(0x122)](_0x393d90,_0x2c3066);}finally{_0x2af9c0();}});});}function soy_awnc_getMailList(){const _0x3400c9=_0x190f6b,_0x5d4b37=_0x1bf5;let _0x3f51e9=Post_request(_0x5d4b37(0x171,'n6oP')+Math[_0x3400c9(0x164)](new Date()[_0x5d4b37(0x143,'FK6n')]()/0x3e8)['toString'](),_0x5d4b37(0x106,'Qj!s')+soy_awnc_token);return new Promise((_0x4105a1,_0x1ffd3d)=>{const _0x15af9e=_0x3400c9;$[_0x15af9e(0x1cd)](_0x3f51e9,async(_0x55809c,_0x55b689,_0x31a0e2)=>{const _0x317dea=_0x15af9e,_0xd8529a=_0x1bf5,_0xfeb9ee=_0x156a;try{if(_0x55809c)console[_0xfeb9ee(0xaf)](_0xd8529a(0xe0,'V$DD')+$['index']+_0xfeb9ee(0x1ce)),subTitle+=_0x317dea(0x1d2)+$['index']+'\x20邮件列表】:\x20网络请求失败';else{let _0x19f032=JSON[_0xd8529a(0xa6,'9IfY')](_0x31a0e2);if(_0x19f032['code']==0xc8){if(_0x19f032[_0xfeb9ee(0xb5)][_0x317dea(0x12b)]>0x0)for(MailList of _0x19f032['data']){Mail_id=MailList['id'],Mail_title=MailList[_0xfeb9ee(0xfa)],await soy_awnc_mailReward(Mail_id);}}else console[_0x317dea(0x122)](_0xd8529a(0xe0,'V$DD')+$[_0x317dea(0xa1)]+_0xd8529a(0x1ca,'$yrb')+_0x19f032[_0xfeb9ee(0x141)]);}}catch(_0x221abe){console[_0xd8529a(0x14d,'biNB')](_0x221abe,_0x55b689);}finally{_0x4105a1();}});});}function soy_awnc_mailReward(_0x4f99a2){const _0xce0638=_0x15fdd6,_0x397ab0=_0x190f6b,_0x484278=_0x1bf5;let _0xcab610=Post_request(_0x484278(0xcc,'jXC&')+Math[_0x484278(0xca,'eyo7')](new Date()['getTime']()/0x3e8)[_0x397ab0(0xf1)](),_0xce0638(0xb8)+_0x4f99a2+'&sign=sdk_'+soy_awnc_token);return new Promise((_0xb3e3e7,_0x5d47e2)=>{const _0x45b1bf=_0xce0638;$[_0x45b1bf(0x102)](_0xcab610,async(_0x362c18,_0x555562,_0x493ae3)=>{const _0x15a25a=_0x1bf5,_0x101530=_0x1404,_0x4bac4a=_0x45b1bf;try{if(_0x362c18)console[_0x4bac4a(0xaf)]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20领取邮件】:\x20网络请求失败'),subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x101530(0xa1)]+_0x4bac4a(0x1b1);else{let _0xc3a662=JSON[_0x4bac4a(0x12c)](_0x493ae3);_0xc3a662[_0x101530(0x119)]==0xc8?console[_0x4bac4a(0xaf)](_0x4bac4a(0xc9)+$[_0x101530(0xa1)]+'\x20领取邮件】:\x20'+_0xc3a662[_0x101530(0xba)]):console[_0x15a25a(0x10d,'n6oP')](_0x4bac4a(0xc9)+$[_0x15a25a(0xce,')xb(')]+_0x4bac4a(0x1cb)+_0xc3a662[_0x101530(0xb1)]);}}catch(_0x2a729){console[_0x101530(0x122)](_0x2a729,_0x555562);}finally{_0xb3e3e7();}});});}function soy_awnc_status(){const _0x34fa23=_0x1bf5;let _0x43ae7d=Post_request(_0x34fa23(0x1c1,'z1MJ')+Math[_0x34fa23(0x1b0,'KH76')](new Date()[_0x34fa23(0x192,'NCLX')]()/0x3e8)[_0x34fa23(0xc7,'9IfY')](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x27e5c6,_0x36bd84)=>{$['post'](_0x43ae7d,async(_0x2b79ec,_0x1c5125,_0xafcd80)=>{const _0x52705a=_0x1404,_0x271667=_0x156a,_0x4317b2=_0x1bf5;try{if(_0x2b79ec)console[_0x4317b2(0xf6,'6G&u')](_0x4317b2(0x14f,'fOF&')+$[_0x4317b2(0x108,'EuJi')]+'\x20土地状态】:\x20网络请求失败'),subTitle+=_0x271667(0xc9)+$[_0x271667(0xd7)]+'\x20土地状态】:\x20网络请求失败';else{let _0x196c0c=JSON[_0x4317b2(0x163,'lgn2')](_0xafcd80);if(_0x196c0c[_0x4317b2(0x11a,'eu5p')]==0x1){let _0x9aac68=_0x196c0c[_0x52705a(0x166)][_0x271667(0xb2)];for(let _0x543e1d=0x0;_0x543e1d<_0x9aac68;_0x543e1d++){await soy_awnc_planting(_0x543e1d),await soy_awnc_fertilize(_0x543e1d),await soy_awnc_hervest(_0x543e1d);}}else console[_0x4317b2(0x1be,'eu5p')]('\x0a【soy脚本提示---账号\x20'+$[_0x4317b2(0xec,'^vwu')]+_0x52705a(0x13b));}}catch(_0x33fcdf){console[_0x52705a(0x122)](_0x33fcdf,_0x1c5125);}finally{_0x27e5c6();}});});}function soy_awnc_planting(_0x647acf){const _0x2e01d5=_0x190f6b,_0x42e291=_0x15fdd6;let _0x1b96a0=Post_request(_0x42e291(0xb9)+Math[_0x42e291(0x138)](new Date()['getTime']()/0x3e8)[_0x2e01d5(0xf1)](),_0x42e291(0x121)+_0x647acf+'&sign=sdk_'+soy_awnc_token);return new Promise((_0x241457,_0xbc8b17)=>{const _0xc386ff=_0x1bf5;$[_0xc386ff(0x15a,'(zBM')](_0x1b96a0,async(_0x3629b2,_0x375870,_0x20918e)=>{const _0x4bf4a1=_0x156a,_0x22920c=_0x1404,_0xbb9742=_0xc386ff;try{if(_0x3629b2)console[_0xbb9742(0xd5,'r#l7')](_0x22920c(0x1d2)+$['index']+_0xbb9742(0x18b,'OvuH')),subTitle+=_0xbb9742(0x135,'^vwu')+$[_0xbb9742(0x1ab,'biNB')]+_0xbb9742(0x15c,'^vwu');else{let _0x2423b0=JSON[_0x22920c(0x178)](_0x20918e);_0x2423b0[_0x22920c(0x119)]==0x1?console[_0x4bf4a1(0xaf)](_0xbb9742(0x1c3,'eu5p')+$[_0x22920c(0xa1)]+_0x4bf4a1(0xf5)+(_0x647acf+0x1)+'成功'):console[_0x22920c(0x122)](_0x22920c(0x1d2)+$[_0xbb9742(0x175,'z1MJ')]+_0x22920c(0x151)+(_0x647acf+0x1)+','+_0x2423b0[_0x22920c(0xb1)]);}}catch(_0x20ec15){console[_0x22920c(0x122)](_0x20ec15,_0x375870);}finally{_0x241457();}});});}function _0x156a(_0x265b85,_0x5d3741){const _0x4d3666=_0x4d36();return _0x156a=function(_0x156af3,_0x40596e){_0x156af3=_0x156af3-0xa1;let _0x4150da=_0x4d3666[_0x156af3];return _0x4150da;},_0x156a(_0x265b85,_0x5d3741);}function soy_awnc_hervest(_0x5b8d68){const _0x2341a2=_0x1bf5,_0x17dacb=_0x190f6b,_0x1971e7=_0x15fdd6;let _0x2eb43c=Post_request(_0x1971e7(0xf9)+Math[_0x17dacb(0x164)](new Date()[_0x1971e7(0xa3)]()/0x3e8)[_0x1971e7(0x142)](),'pid='+_0x5b8d68+_0x2341a2(0x155,'Jhhi')+soy_awnc_token);return new Promise((_0x32c3f5,_0x15299a)=>{const _0x612e2f=_0x2341a2;$[_0x612e2f(0x1a1,'9n2p')](_0x2eb43c,async(_0x348913,_0x142cec,_0x4d1cd6)=>{const _0x20520b=_0x612e2f,_0x3daf32=_0x156a,_0xd3d2a7=_0x1404;try{if(_0x348913)console[_0xd3d2a7(0x122)](_0xd3d2a7(0x1d2)+$['index']+_0x3daf32(0x13c)),subTitle+=_0x20520b(0x152,'r#l7')+$[_0x3daf32(0xd7)]+_0x3daf32(0x13c);else{let _0x441f3e=JSON[_0xd3d2a7(0x178)](_0x4d1cd6);_0x441f3e[_0x20520b(0x11b,'u7SG')]==0x1?(console[_0x20520b(0xd5,'r#l7')](_0xd3d2a7(0x1d2)+$[_0x20520b(0x1c6,'fOF&')]+_0x20520b(0x1b8,'n6oP')+(_0x5b8d68+0x1)+'成功'),await soy_awnc_scarify(_0x5b8d68)):console['log'](_0xd3d2a7(0x1d2)+$[_0x20520b(0xe6,'eyo7')]+_0x20520b(0xfc,'el16')+(_0x5b8d68+0x1)+','+_0x441f3e['msg']);}}catch(_0x1f81d1){console[_0xd3d2a7(0x122)](_0x1f81d1,_0x142cec);}finally{_0x32c3f5();}});});}function _0x1bf5(_0x265b85,_0x5d3741){const _0x4d3666=_0x4d36();return _0x1bf5=function(_0x156af3,_0x40596e){_0x156af3=_0x156af3-0xa1;let _0x4150da=_0x4d3666[_0x156af3];if(_0x1bf5['hbHWwA']===undefined){var _0x58b545=function(_0x589651){const _0x1ae965='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3ec15c='',_0x4a76a3='';for(let _0x420b89=0x0,_0x23cbb5,_0x1bf585,_0x486413=0x0;_0x1bf585=_0x589651['charAt'](_0x486413++);~_0x1bf585&&(_0x23cbb5=_0x420b89%0x4?_0x23cbb5*0x40+_0x1bf585:_0x1bf585,_0x420b89++%0x4)?_0x3ec15c+=String['fromCharCode'](0xff&_0x23cbb5>>(-0x2*_0x420b89&0x6)):0x0){_0x1bf585=_0x1ae965['indexOf'](_0x1bf585);}for(let _0x197ffd=0x0,_0xa7ff72=_0x3ec15c['length'];_0x197ffd<_0xa7ff72;_0x197ffd++){_0x4a76a3+='%'+('00'+_0x3ec15c['charCodeAt'](_0x197ffd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a76a3);};const _0x1404df=function(_0x3c81e8,_0x4e9510){let _0xd11dc1=[],_0xfedd1=0x0,_0x294867,_0x508df4='';_0x3c81e8=_0x58b545(_0x3c81e8);let _0x28958e;for(_0x28958e=0x0;_0x28958e<0x100;_0x28958e++){_0xd11dc1[_0x28958e]=_0x28958e;}for(_0x28958e=0x0;_0x28958e<0x100;_0x28958e++){_0xfedd1=(_0xfedd1+_0xd11dc1[_0x28958e]+_0x4e9510['charCodeAt'](_0x28958e%_0x4e9510['length']))%0x100,_0x294867=_0xd11dc1[_0x28958e],_0xd11dc1[_0x28958e]=_0xd11dc1[_0xfedd1],_0xd11dc1[_0xfedd1]=_0x294867;}_0x28958e=0x0,_0xfedd1=0x0;for(let _0x52610a=0x0;_0x52610a<_0x3c81e8['length'];_0x52610a++){_0x28958e=(_0x28958e+0x1)%0x100,_0xfedd1=(_0xfedd1+_0xd11dc1[_0x28958e])%0x100,_0x294867=_0xd11dc1[_0x28958e],_0xd11dc1[_0x28958e]=_0xd11dc1[_0xfedd1],_0xd11dc1[_0xfedd1]=_0x294867,_0x508df4+=String['fromCharCode'](_0x3c81e8['charCodeAt'](_0x52610a)^_0xd11dc1[(_0xd11dc1[_0x28958e]+_0xd11dc1[_0xfedd1])%0x100]);}return _0x508df4;};_0x1bf5['htFGSE']=_0x1404df,_0x265b85=arguments,_0x1bf5['hbHWwA']=!![];}const _0x3d5c2f=_0x4d3666[0x0],_0x173191=_0x156af3+_0x3d5c2f,_0x24440b=_0x265b85[_0x173191];return!_0x24440b?(_0x1bf5['DHXEnM']===undefined&&(_0x1bf5['DHXEnM']=!![]),_0x4150da=_0x1bf5['htFGSE'](_0x4150da,_0x40596e),_0x265b85[_0x173191]=_0x4150da):_0x4150da=_0x24440b,_0x4150da;},_0x1bf5(_0x265b85,_0x5d3741);}function soy_awnc_fertilize(_0x136eb5){const _0x1ab48a=_0x1bf5,_0x29cd64=_0x15fdd6,_0x223691=_0x190f6b;let _0xbac5bd=Post_request(_0x223691(0x113)+Math['round'](new Date()[_0x29cd64(0xa3)]()/0x3e8)[_0x29cd64(0x142)](),'pid='+_0x136eb5+_0x1ab48a(0xff,'C9ln')+soy_awnc_token);return new Promise((_0x1921c1,_0x28ca74)=>{const _0x27e47f=_0x29cd64;$[_0x27e47f(0x102)](_0xbac5bd,async(_0x7b6903,_0x2c4ce5,_0x4b130c)=>{const _0x4f3054=_0x1bf5,_0x5da2f4=_0x1404,_0x542daa=_0x27e47f;try{if(_0x7b6903)console[_0x542daa(0xaf)](_0x5da2f4(0x1d2)+$[_0x5da2f4(0xa1)]+'\x20施肥】:\x20网络请求失败'),subTitle+=_0x5da2f4(0x1d2)+$[_0x5da2f4(0xa1)]+_0x4f3054(0x149,'lAF[');else{let _0x4ecd2c=JSON[_0x5da2f4(0x178)](_0x4b130c);_0x4ecd2c[_0x542daa(0xd9)]==0x1?console[_0x4f3054(0x10d,'n6oP')](_0x4f3054(0xef,'NCLX')+$['index']+_0x542daa(0x1c9)+(_0x136eb5+0x1)+'成功'):console[_0x5da2f4(0x122)](_0x5da2f4(0x1d2)+$[_0x4f3054(0xe2,'Xjd*')]+_0x4f3054(0xc3,'Xjd*')+(_0x136eb5+0x1)+','+_0x4ecd2c[_0x5da2f4(0xb1)]);}}catch(_0x7fe87d){console['log'](_0x7fe87d,_0x2c4ce5);}finally{_0x1921c1();}});});}function soy_awnc_scarify(_0x5219ac){const _0x1cc73f=_0x15fdd6,_0xf1d855=_0x1bf5;let _0x4d1452=Post_request(_0xf1d855(0x13a,'6SXr')+Math[_0xf1d855(0x19b,'u7SG')](new Date()[_0x1cc73f(0xa3)]()/0x3e8)[_0xf1d855(0x11e,'hOQM')](),'pid='+_0x5219ac+_0x1cc73f(0xd0)+soy_awnc_token);return new Promise((_0x47744e,_0x1eacdc)=>{const _0x5e56da=_0x1404;$[_0x5e56da(0x1cd)](_0x4d1452,async(_0x3bf55f,_0x4f2169,_0x4d5db3)=>{const _0x30e7c7=_0x156a,_0x3bbf3b=_0x5e56da,_0x26fc15=_0x1bf5;try{if(_0x3bf55f)console['log'](_0x26fc15(0x189,'el16')+$[_0x3bbf3b(0xa1)]+_0x30e7c7(0x17c)),subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20铲除】:\x20网络请求失败';else{let _0x28dc8d=JSON[_0x26fc15(0xc6,'$yrb')](_0x4d5db3);_0x28dc8d[_0x3bbf3b(0x119)]==0x1?console[_0x26fc15(0x12a,'b1cv')](_0x3bbf3b(0x1d2)+$['index']+_0x30e7c7(0x1bd)+(_0x5219ac+0x1)+'成功'):console[_0x30e7c7(0xaf)]('\x0a【soy脚本提示---账号\x20'+$[_0x30e7c7(0xd7)]+'\x20铲除】:\x20土地'+(_0x5219ac+0x1)+','+_0x28dc8d['msg']);}}catch(_0x43d9c7){console[_0x3bbf3b(0x122)](_0x43d9c7,_0x4f2169);}finally{_0x47744e();}});});}function soy_awnc_mygold(){const _0x4d4260=_0x190f6b,_0x32b9c1=_0x15fdd6,_0x193f23=_0x1bf5;let _0x4d1294=Post_request(_0x193f23(0xc0,'NCLX')+Math[_0x32b9c1(0x138)](new Date()[_0x193f23(0xcf,'^vwu')]()/0x3e8)['toString'](),_0x4d4260(0x19a)+soy_awnc_token);return new Promise((_0x7a5453,_0x395793)=>{$['post'](_0x4d1294,async(_0x310226,_0x2763a5,_0x487178)=>{const _0x1cfe31=_0x1404,_0x28d5cd=_0x1bf5,_0x34177d=_0x156a;try{if(_0x310226)console[_0x34177d(0xaf)]('\x0a【soy脚本提示---账号\x20'+$[_0x28d5cd(0x1c6,'fOF&')]+'\x20账户信息除】:\x20网络请求失败'),subTitle+=_0x1cfe31(0x1d2)+$['index']+_0x1cfe31(0x17e);else{let _0x1872cc=JSON[_0x34177d(0x12c)](_0x487178);if(_0x1872cc[_0x28d5cd(0x17a,'muap')]==0x1){let _0x17bf01=_0x1872cc[_0x1cfe31(0xf2)],_0x123fb1=_0x1872cc[_0x1cfe31(0x132)],_0x29912d=_0x1872cc['new_gold'];console[_0x1cfe31(0x122)](_0x29912d+'第1'),_0x29912d>=0x1&&(console[_0x34177d(0xaf)](_0x29912d+'第2'),soy_awnc_Diamonds==0x1&&(console['log'](_0x29912d+'第3'),await soy_awnc_chong())),await soy_awnc_newbuildlv(_0x123fb1);}else console[_0x34177d(0xaf)](_0x34177d(0xc9)+$[_0x34177d(0xd7)]+_0x1cfe31(0x1a3)+_0x1872cc[_0x1cfe31(0xb1)]);}}catch(_0x4b460a){console[_0x34177d(0xaf)](_0x4b460a,_0x2763a5);}finally{_0x7a5453();}});});}function soy_awnc_chong(){const _0xfaca58=_0x190f6b,_0x236d98=_0x15fdd6,_0x2cb96c=_0x1bf5;let _0x1963bd=Post_request(_0x2cb96c(0x17b,'^vwu')+Math[_0x236d98(0x138)](new Date()[_0x2cb96c(0xd2,'$yrb')]()/0x3e8)[_0xfaca58(0xf1)](),_0x236d98(0x191)+soy_awnc_token);return new Promise((_0xd84169,_0x17af7)=>{const _0x47a2e3=_0x2cb96c;$[_0x47a2e3(0x18c,'L^Gn')](_0x1963bd,async(_0x16cbe7,_0x44fcdd,_0x18de2c)=>{const _0x4916d6=_0x156a,_0x3973e9=_0x1404,_0x163f72=_0x47a2e3;try{if(_0x16cbe7)console[_0x163f72(0x19d,'9n2p')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20兑换钻石】:\x20网络请求失败'),subTitle+=_0x3973e9(0x1d2)+$[_0x3973e9(0xa1)]+_0x4916d6(0xc4);else{let _0x370649=JSON['parse'](_0x18de2c);_0x370649[_0x4916d6(0xd9)]==0x1?console[_0x163f72(0xf7,'UT!M')](_0x4916d6(0xc9)+$[_0x163f72(0x127,'9n2p')]+_0x3973e9(0xc1)):console[_0x3973e9(0x122)]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x4916d6(0x180)+_0x370649[_0x163f72(0x18a,'el16')]);}}catch(_0x2ebbb9){console[_0x3973e9(0x122)](_0x2ebbb9,_0x44fcdd);}finally{_0xd84169();}});});}function soy_awnc_chongScore(){const _0x4e40cd=_0x15fdd6;let _0x18565d=Post_request(_0x4e40cd(0x160)+Math['round'](new Date()[_0x4e40cd(0xa3)]()/0x3e8)[_0x4e40cd(0x142)](),_0x4e40cd(0x191)+soy_awnc_token);return new Promise((_0x926ce3,_0x49e423)=>{const _0x1f5eff=_0x1404;$[_0x1f5eff(0x1cd)](_0x18565d,async(_0x4bebc0,_0x523623,_0x483509)=>{const _0x5849ed=_0x156a,_0x289bb8=_0x1f5eff,_0x1cedc9=_0x1bf5;try{if(_0x4bebc0)console[_0x1cedc9(0x1b6,'rcBz')](_0x1cedc9(0x1c3,'eu5p')+$[_0x289bb8(0xa1)]+'\x20兑换现金红包】:\x20网络请求失败'),subTitle+=_0x1cedc9(0x184,'UT!M')+$[_0x5849ed(0xd7)]+'\x20兑换现金红包】:\x20网络请求失败';else{let _0x5ce684=JSON['parse'](_0x483509);_0x5ce684[_0x5849ed(0xd9)]==0x1?console['log'](_0x1cedc9(0x14f,'fOF&')+$[_0x289bb8(0xa1)]+_0x1cedc9(0x1d0,'dGIT')):console[_0x289bb8(0x122)](_0x5849ed(0xc9)+$[_0x289bb8(0xa1)]+_0x5849ed(0x1c4)+_0x5ce684[_0x289bb8(0xb1)]);}}catch(_0x16edb0){console[_0x289bb8(0x122)](_0x16edb0,_0x523623);}finally{_0x926ce3();}});});}function soy_awnc_withdrawList(){const _0x3376d8=_0x1bf5,_0x1e9965=_0x190f6b,_0x65d2f8=_0x15fdd6;let _0x12a96a=Post_request(_0x65d2f8(0x146)+Math[_0x1e9965(0x164)](new Date()[_0x65d2f8(0xa3)]()/0x3e8)['toString'](),_0x3376d8(0x185,'lgn2')+soy_awnc_token);return new Promise((_0x2e88c6,_0x82ec23)=>{const _0x595914=_0x1e9965;$[_0x595914(0x1cd)](_0x12a96a,async(_0x31ac2a,_0x3ed607,_0x3143d5)=>{const _0x2a709a=_0x1bf5,_0x5391d9=_0x156a,_0x597926=_0x595914;try{if(_0x31ac2a)console[_0x597926(0x122)](_0x5391d9(0xc9)+$['index']+_0x597926(0x18e)),subTitle+=_0x2a709a(0x100,'ZUs!')+$[_0x597926(0xa1)]+'\x20可提现状态】:\x20网络请求失败';else{let _0x299357=JSON['parse'](_0x3143d5);_0x299357[_0x2a709a(0x15d,'lgn2')]==0x1?console[_0x5391d9(0xaf)](_0x2a709a(0x10a,'hOQM')+$[_0x2a709a(0x1b2,'KH76')]+_0x597926(0x12e)):console[_0x5391d9(0xaf)](_0x5391d9(0xc9)+$['index']+_0x5391d9(0x107)+_0x299357[_0x2a709a(0xdb,'WPXP')]);}}catch(_0xf6b67c){console['log'](_0xf6b67c,_0x3ed607);}finally{_0x2e88c6();}});});}function soy_awnc_newbuildlv(_0x45b0c2){const _0x4d6315=_0x1bf5,_0x7bad6d=_0x190f6b;let _0x2aef3b=Post_request(_0x7bad6d(0x14a)+Math[_0x7bad6d(0x164)](new Date()[_0x4d6315(0x197,'6G&u')]()/0x3e8)['toString'](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x49f6ea,_0x4c1f47)=>{const _0x319750=_0x156a;$[_0x319750(0x102)](_0x2aef3b,async(_0x10e57b,_0x5875ef,_0x181991)=>{const _0x1e90b0=_0x319750,_0x13545d=_0x1bf5,_0x4e9db5=_0x1404;try{if(_0x10e57b)console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x4e9db5(0x199)),subTitle+=_0x4e9db5(0x1d2)+$[_0x13545d(0xe2,'Xjd*')]+'\x20升级状态】:\x20网络请求失败';else{let _0x3533d8=JSON[_0x13545d(0xa6,'9IfY')](_0x181991);_0x3533d8['code']==0x1?_0x45b0c2>=_0x3533d8[_0x4e9db5(0xba)][0x0][_0x4e9db5(0x148)][0x0][_0x1e90b0(0x1c7)]&&await soy_awnc_dobuildlv():console[_0x1e90b0(0xaf)](_0x4e9db5(0x1d2)+$['index']+_0x13545d(0xe7,'dCp%')+_0x3533d8['msg']);}}catch(_0x2ae529){console[_0x1e90b0(0xaf)](_0x2ae529,_0x5875ef);}finally{_0x49f6ea();}});});}function soy_awnc_dobuildlv(){const _0x596f7b=_0x15fdd6,_0x8965a5=_0x190f6b;let _0x49ec50=Post_request(_0x8965a5(0x198)+Math[_0x596f7b(0x138)](new Date()['getTime']()/0x3e8)[_0x596f7b(0x142)](),_0x8965a5(0x19a)+soy_awnc_token);return new Promise((_0xbf1a1f,_0x209ee0)=>{$['post'](_0x49ec50,async(_0x51e88c,_0x31b027,_0x3462da)=>{const _0x3f5d32=_0x1404,_0x35c970=_0x1bf5,_0x12cb0d=_0x156a;try{if(_0x51e88c)console[_0x12cb0d(0xaf)](_0x12cb0d(0xc9)+$[_0x35c970(0xc5,'$yrb')]+_0x3f5d32(0x16a)),subTitle+=_0x12cb0d(0xc9)+$['index']+_0x3f5d32(0x16a);else{let _0x3f7f2c=JSON[_0x12cb0d(0x12c)](_0x3462da);_0x3f7f2c['code']==0x1?console['log'](_0x12cb0d(0xc9)+$['index']+_0x35c970(0xbb,'9n2p')):console[_0x12cb0d(0xaf)](_0x35c970(0x1c2,'Qj!s')+$['index']+'\x20升级房屋】:\x20'+_0x3f7f2c[_0x3f5d32(0xb1)]);}}catch(_0x2c1dab){console['log'](_0x2c1dab,_0x31b027);}finally{_0xbf1a1f();}});});}function Post_request(_0x3d9277,_0x4981a7){const _0xac7fe6=_0x15fdd6,_0x2eac91=_0x190f6b;return{'url':''+host+_0x3d9277,'headers':{'Host':_0x2eac91(0x18d),'Connection':'keep-alive','Content-Length':_0x4981a7[_0xac7fe6(0xb2)],'User-Agent':soy_awnc_UA,'Content-Type':'application/x-www-form-urlencoded','Origin':_0xac7fe6(0xb0),'X-Requested-With':_0x2eac91(0xfe),'Referer':_0xac7fe6(0xed)+soy_awnc_token},'body':_0x4981a7};};function Get_request(_0x359861){const _0x503d9e=_0x190f6b,_0x663169=_0x1bf5;return{'url':''+host+_0x359861,'headers':{'Host':_0x663169(0xd4,'lAF['),'Connection':_0x663169(0x1ba,'(zBM'),'User-Agent':soy_awnc_UA,'Content-Type':_0x663169(0x159,'EuJi'),'Origin':_0x503d9e(0x112)}};};






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