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

const _0x151743=_0x5a0d,_0xef9662=_0x4553,_0x5919a0=_0x2b53;(function(_0x26b56e,_0x774560){const _0x29d3be=_0x5a0d,_0x33714a=_0x2b53,_0x4d31d7=_0x4553,_0x1e2a66=_0x26b56e();while(!![]){try{const _0x3a482e=parseInt(_0x4d31d7(0x214,'oNuA'))/0x1*(-parseInt(_0x33714a(0x278))/0x2)+parseInt(_0x29d3be(0x1ad))/0x3+parseInt(_0x29d3be(0x1a4))/0x4+-parseInt(_0x4d31d7(0x19d,'wZBK'))/0x5+parseInt(_0x29d3be(0x29a))/0x6+parseInt(_0x4d31d7(0x212,'L&)U'))/0x7+parseInt(_0x33714a(0x20c))/0x8*(-parseInt(_0x33714a(0x22f))/0x9);if(_0x3a482e===_0x774560)break;else _0x1e2a66['push'](_0x1e2a66['shift']());}catch(_0xaaf4b){_0x1e2a66['push'](_0x1e2a66['shift']());}}}(_0x278a,0xd560c));function _0x5a0d(_0x58742f,_0x5a1915){const _0x278a25=_0x278a();return _0x5a0d=function(_0x5a0d3d,_0x81baf4){_0x5a0d3d=_0x5a0d3d-0x179;let _0x3a4fe1=_0x278a25[_0x5a0d3d];return _0x3a4fe1;},_0x5a0d(_0x58742f,_0x5a1915);}function _0x2b53(_0x58742f,_0x5a1915){const _0x278a25=_0x278a();return _0x2b53=function(_0x5a0d3d,_0x81baf4){_0x5a0d3d=_0x5a0d3d-0x179;let _0x3a4fe1=_0x278a25[_0x5a0d3d];if(_0x2b53['hfOXjm']===undefined){var _0x2fb577=function(_0x2b539f){const _0x45daf6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4f47e4='',_0x216549='';for(let _0x5d4821=0x0,_0x3bf43e,_0x16a56c,_0x4553c0=0x0;_0x16a56c=_0x2b539f['charAt'](_0x4553c0++);~_0x16a56c&&(_0x3bf43e=_0x5d4821%0x4?_0x3bf43e*0x40+_0x16a56c:_0x16a56c,_0x5d4821++%0x4)?_0x4f47e4+=String['fromCharCode'](0xff&_0x3bf43e>>(-0x2*_0x5d4821&0x6)):0x0){_0x16a56c=_0x45daf6['indexOf'](_0x16a56c);}for(let _0xeee1ca=0x0,_0x3f8955=_0x4f47e4['length'];_0xeee1ca<_0x3f8955;_0xeee1ca++){_0x216549+='%'+('00'+_0x4f47e4['charCodeAt'](_0xeee1ca)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x216549);};_0x2b53['Qfdlsg']=_0x2fb577,_0x58742f=arguments,_0x2b53['hfOXjm']=!![];}const _0x1f2832=_0x278a25[0x0],_0xab5cfd=_0x5a0d3d+_0x1f2832,_0x317408=_0x58742f[_0xab5cfd];return!_0x317408?(_0x3a4fe1=_0x2b53['Qfdlsg'](_0x3a4fe1),_0x58742f[_0xab5cfd]=_0x3a4fe1):_0x3a4fe1=_0x317408,_0x3a4fe1;},_0x2b53(_0x58742f,_0x5a1915);}let app_soy_daw_data=[],app_soy_daw_UA=[];!(async()=>{const _0x27fcdd=_0x4553,_0x51cc2d=_0x5a0d,_0x1efecf=_0x2b53;typeof $request!==_0x1efecf(0x29b)&&await Get_data();if($[_0x51cc2d(0x1a3)]()){if(!process['env']['soy_daw_data']){console[_0x51cc2d(0x28e)](_0x1efecf(0x181));return;}if(process[_0x27fcdd(0x244,'O@%3')]['soy_daw_data']&&process[_0x1efecf(0x20f)][_0x51cc2d(0x235)][_0x27fcdd(0x1aa,'zHlT')]('@')>-0x1)app_soy_daw_data=process[_0x51cc2d(0x207)]['soy_daw_data'][_0x1efecf(0x18a)]('@');else{if(process[_0x51cc2d(0x207)]['soy_daw_data']&&process[_0x27fcdd(0x288,'d0fU')][_0x1efecf(0x270)][_0x1efecf(0x223)]('\x0a')>-0x1)app_soy_daw_data=process[_0x51cc2d(0x207)][_0x1efecf(0x270)]['split']('\x0a');else process[_0x1efecf(0x20f)][_0x27fcdd(0x1eb,'^OBz')]&&process[_0x27fcdd(0x1b1,'%jA2')]['soy_daw_data'][_0x1efecf(0x223)]('#')>-0x1?app_soy_daw_data=process[_0x27fcdd(0x1af,'h[[W')][_0x1efecf(0x270)][_0x27fcdd(0x224,'zw81')]('#'):app_soy_daw_data=process[_0x1efecf(0x20f)][_0x51cc2d(0x235)][_0x27fcdd(0x19c,'tAct')]();};if(process['env']['soy_daw_UA']){if(process[_0x51cc2d(0x207)]['soy_daw_UA']&&process[_0x27fcdd(0x204,'3YwF')][_0x1efecf(0x265)][_0x51cc2d(0x25d)]('@')>-0x1)app_soy_daw_UA=process[_0x51cc2d(0x207)][_0x51cc2d(0x276)][_0x27fcdd(0x1e7,'r(Z^')]('@');else{if(process[_0x27fcdd(0x18f,'eNNS')][_0x51cc2d(0x276)]&&process[_0x51cc2d(0x207)]['soy_daw_UA'][_0x27fcdd(0x1b0,'H@a0')]('\x0a')>-0x1)app_soy_daw_UA=process[_0x27fcdd(0x1c1,'H@a0')][_0x51cc2d(0x276)]['split']('\x0a');else process['env']['soy_daw_UA']&&process[_0x27fcdd(0x1af,'h[[W')]['soy_daw_UA'][_0x51cc2d(0x25d)]('#')>-0x1?app_soy_daw_UA=process[_0x27fcdd(0x285,'wk!x')][_0x1efecf(0x265)][_0x27fcdd(0x1b8,'wZBK')]('#'):app_soy_daw_UA=process[_0x51cc2d(0x207)]['soy_daw_UA'][_0x1efecf(0x18a)]();};};}else{if(!$[_0x1efecf(0x208)](_0x27fcdd(0x21d,'%jA2'))){console[_0x27fcdd(0x274,'&49h')](_0x51cc2d(0x220));return;}if($['getdata']('soy_daw_data')&&$[_0x27fcdd(0x241,'tAct')]('soy_daw_data')[_0x27fcdd(0x1aa,'zHlT')]('@')>-0x1)app_soy_daw_data=$['getdata'](_0x51cc2d(0x235))['split']('@');else $[_0x1efecf(0x208)](_0x51cc2d(0x235))&&$[_0x27fcdd(0x1f7,'J@xv')]('soy_daw_data')[_0x51cc2d(0x25d)]('\x0a')>-0x1?app_soy_daw_data=$[_0x1efecf(0x208)](_0x51cc2d(0x235))[_0x27fcdd(0x22e,'D@sG')]('\x0a'):app_soy_daw_data=$[_0x27fcdd(0x20d,'4ov)')](_0x51cc2d(0x235))[_0x1efecf(0x18a)]();;if($[_0x27fcdd(0x245,'Ty#q')](_0x27fcdd(0x199,'oNuA'))){if($[_0x1efecf(0x208)](_0x1efecf(0x265))&&$[_0x1efecf(0x208)](_0x1efecf(0x265))[_0x1efecf(0x223)]('@')>-0x1)app_soy_daw_UA=$[_0x27fcdd(0x1ef,'6q&K')](_0x1efecf(0x265))[_0x1efecf(0x18a)]('@');else{if($[_0x51cc2d(0x28b)](_0x51cc2d(0x276))&&$[_0x51cc2d(0x28b)](_0x51cc2d(0x276))[_0x51cc2d(0x25d)]('\x0a')>-0x1)app_soy_daw_UA=$[_0x27fcdd(0x192,'ys93')](_0x27fcdd(0x280,'Ty#q'))[_0x27fcdd(0x22d,'Q5cB')]('\x0a');else $[_0x51cc2d(0x28b)]('soy_daw_UA')&&$['getdata'](_0x1efecf(0x265))[_0x27fcdd(0x1fd,'gkpK')]('#')>-0x1?app_soy_daw_UA=$['getdata'](_0x51cc2d(0x276))[_0x1efecf(0x18a)]('#'):app_soy_daw_UA=$[_0x27fcdd(0x246,'3YwF')](_0x27fcdd(0x1d0,'L&)U'))[_0x1efecf(0x18a)]();};}}console[_0x1efecf(0x1b9)](_0x27fcdd(0x20e,'&49h')+new Date(new Date()['getTime']()+new Date()[_0x27fcdd(0x1e5,'ys93')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+'\x20===\x0a'),console[_0x1efecf(0x1b9)](_0x27fcdd(0x19a,'0dnD')+app_soy_daw_data[_0x51cc2d(0x1bd)]+_0x27fcdd(0x255,'f7B@')),subTitle='';for(i=0x0;i<app_soy_daw_data[_0x51cc2d(0x1bd)];i++){soy_daw_data=app_soy_daw_data[i]['split']('&'),soy_awnc_token=soy_daw_data[0x0],soy_awnc_Diamonds=soy_daw_data[0x1];if(!soy_awnc_token||!soy_awnc_Diamonds){console[_0x51cc2d(0x28e)]('\x0a【soy脚本提示】：填写变量格式不规范');return;}$[_0x1efecf(0x208)]('soy_daw_UA')||process[_0x27fcdd(0x191,'LhBR')][_0x1efecf(0x265)]?(soy_awnc_UA=app_soy_daw_UA[i],!soy_awnc_UA&&(soy_awnc_UA=_0x27fcdd(0x1fc,'zw81'))):soy_awnc_UA=_0x27fcdd(0x27f,'&!Qr'),$[_0x51cc2d(0x299)]=i+0x1,await implement();};notify&&(subTitle&&await notify[_0x27fcdd(0x188,'fpTa')]($['name'],subTitle));})()[_0x5919a0(0x230)](_0x5b52de=>$[_0xef9662(0x23a,'gkpK')](_0x5b52de))['finally'](()=>$[_0x151743(0x283)]());async function implement(){const _0x281873=_0xef9662,_0x18ec82=_0x5919a0,_0x14cfbc=_0x151743;host=_0x14cfbc(0x1ee),console[_0x14cfbc(0x28e)](_0x14cfbc(0x273)+$[_0x18ec82(0x23c)]+_0x281873(0x1de,'oNuA')),await soy_awnc_new(),await soy_awnc_taskList();for(let _0x2622a5=0x0;_0x2622a5<0x4;_0x2622a5++){await soy_awnc_onlineAward(_0x2622a5);}await soy_awnc_getMailList(),await soy_awnc_status(),await soy_awnc_mygold(),await soy_awnc_newbuildlv();}function soy_awnc_config(){const _0xc140f6=_0x151743,_0x4269ec=_0x5919a0,_0x70e9c6=_0xef9662;let _0x17ec74={'url':_0x70e9c6(0x1e3,'$Kxd'),'headers':{'Host':_0x4269ec(0x28f),'accept':_0xc140f6(0x24a),'user-agent':soy_awnc_UA,'token':soy_awnc_token,'origin':_0x70e9c6(0x1e1,'ys93'),'x-requested-with':'com.daw.timeoflove','sec-fetch-site':_0x70e9c6(0x292,'zw81'),'sec-fetch-mode':_0x4269ec(0x1bf),'sec-fetch-dest':_0xc140f6(0x22b)}};return new Promise((_0x3f1c8f,_0x2525c8)=>{const _0xc55dd0=_0xc140f6;$[_0xc55dd0(0x1cc)](_0x17ec74,async(_0x3f8572,_0x3ca196,_0x3c678a)=>{const _0x1a4d7d=_0x4553,_0x106503=_0xc55dd0,_0x5475f0=_0x2b53;try{if(_0x3f8572)console[_0x5475f0(0x1b9)](_0x106503(0x1b4)+$[_0x1a4d7d(0x225,'zw81')]+_0x5475f0(0x26d)),subTitle+=_0x5475f0(0x251)+$[_0x106503(0x299)]+'\x20用户信息】:\x20网络请求失败';else{let _0x35cbfc=JSON[_0x106503(0x1b3)](_0x3c678a);_0x35cbfc[_0x5475f0(0x297)]==0xc8?(game_name=_0x35cbfc['data']['game_data'][_0x106503(0x1a5)],game_id=_0x35cbfc[_0x106503(0x1c7)]['game_data'][_0x5475f0(0x25e)],money_id=_0x35cbfc[_0x5475f0(0x1c9)][_0x5475f0(0x19f)][_0x5475f0(0x237)],game_level=_0x35cbfc[_0x5475f0(0x1c9)][_0x5475f0(0x19f)]['level']):console[_0x106503(0x28e)](_0x106503(0x1b4)+$['index']+_0x1a4d7d(0x19b,'^OBz'));}}catch(_0xc5202b){console['log'](_0xc5202b,_0x3ca196);}finally{_0x3f1c8f();}});});}function soy_awnc_getnew(){const _0x33b2ed=_0x5919a0,_0x4a29ab=_0xef9662,_0x403981=_0x151743;let _0x5250ae=Post_request(_0x403981(0x28d)+Math[_0x403981(0x1ac)](new Date()[_0x4a29ab(0x17b,'Td&)')]()/0x3e8)[_0x33b2ed(0x26c)](),_0x33b2ed(0x27e)+soy_awnc_token);return new Promise((_0x933d4d,_0x1d1e98)=>{$['post'](_0x5250ae,async(_0x530565,_0x53b7ef,_0x3e66a1)=>{const _0x3bc0e0=_0x2b53,_0x4feddd=_0x4553,_0xfe1db3=_0x5a0d;try{if(_0x530565)console[_0xfe1db3(0x28e)](_0x4feddd(0x202,'G0eQ')+$[_0x3bc0e0(0x23c)]+_0x3bc0e0(0x232)),subTitle+=_0x3bc0e0(0x251)+$[_0xfe1db3(0x299)]+_0x3bc0e0(0x232);else{let _0x3e0a9f=JSON[_0x3bc0e0(0x298)](_0x3e66a1);_0x3e0a9f[_0x4feddd(0x1ed,'Zh]y')]==0x1?console[_0x3bc0e0(0x1b9)](_0x3bc0e0(0x251)+$[_0x4feddd(0x1e4,'r(Z^')]+_0x4feddd(0x1e0,'Zf4T')+_0x3e0a9f[_0x4feddd(0x180,'!K)^')][_0xfe1db3(0x1fe)]):console[_0xfe1db3(0x28e)](_0x3bc0e0(0x251)+$[_0xfe1db3(0x299)]+_0x4feddd(0x1cf,'#GPo')+_0x3e0a9f[_0x3bc0e0(0x1b5)]);}}catch(_0x59c87a){console['log'](_0x59c87a,_0x53b7ef);}finally{_0x933d4d();}});});}function soy_awnc_new(){const _0x3441b6=_0x151743,_0x10d73b=_0x5919a0;let _0x4f24be=Post_request(_0x10d73b(0x193)+Math[_0x10d73b(0x26e)](new Date()[_0x10d73b(0x1ab)]()/0x3e8)[_0x3441b6(0x294)](),_0x3441b6(0x210)+soy_awnc_token);return new Promise((_0x3ab6e5,_0x1cc6cd)=>{const _0x1aef44=_0x3441b6;$[_0x1aef44(0x1cd)](_0x4f24be,async(_0x1e2436,_0x572c09,_0x59aaa7)=>{const _0x213125=_0x1aef44,_0x16760e=_0x4553,_0x1b90f0=_0x2b53;try{if(_0x1e2436)console[_0x1b90f0(0x1b9)](_0x1b90f0(0x251)+$['index']+_0x16760e(0x23b,'o91r')),subTitle+=_0x1b90f0(0x251)+$[_0x16760e(0x1d5,'3YwF')]+_0x1b90f0(0x232);else{let _0x315718=JSON['parse'](_0x59aaa7);if(_0x315718[_0x1b90f0(0x297)]==0x1){video_num=_0x315718[_0x16760e(0x252,')ZmY')],draw_num=_0x315718[_0x213125(0x25a)];if(video_num<=0x3)for(let _0x5b0a55=0x0;_0x5b0a55<video_num;_0x5b0a55++){await soy_awnc_videoAward('type=1002&sign=sdk_'+soy_awnc_token,'获取抽奖次数'),await $[_0x1b90f0(0x1da)](Math[_0x16760e(0x21a,'m9Ai')](Math[_0x16760e(0x24c,'YOID')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));}for(let _0x31dda2=0x0;_0x31dda2<draw_num;_0x31dda2++){await soy_awnc_getnew();}}else console[_0x1b90f0(0x1b9)](_0x1b90f0(0x251)+$[_0x1b90f0(0x23c)]+_0x213125(0x1d3)+_0x315718['msg']);}}catch(_0x5945fe){console['log'](_0x5945fe,_0x572c09);}finally{_0x3ab6e5();}});});}function soy_awnc_videoAward(_0x371427,_0x3c3117){let _0x144ba9=Post_request('index.php/home/video/videoAward?t='+Math['round'](new Date()['getTime']()/0x3e8)['toString'](),_0x371427);return new Promise((_0x89cc16,_0x49bbf7)=>{const _0x6199be=_0x2b53;$[_0x6199be(0x22a)](_0x144ba9,async(_0x529458,_0x529ef0,_0x3c3be8)=>{const _0x4f5121=_0x5a0d,_0x35727a=_0x6199be,_0x162b13=_0x4553;try{if(_0x529458)console[_0x162b13(0x229,'hVez')](_0x35727a(0x251)+$['index']+'\x20'+_0x3c3117+_0x35727a(0x23e)),subTitle+=_0x4f5121(0x1b4)+$[_0x4f5121(0x299)]+'\x20'+_0x3c3117+_0x162b13(0x1c4,'Q5cB');else{let _0x6bc196=JSON['parse'](_0x3c3be8);_0x6bc196[_0x4f5121(0x21c)]==0x1?console[_0x4f5121(0x28e)]('\x0a【soy脚本提示---账号\x20'+$[_0x35727a(0x23c)]+'\x20'+_0x3c3117+_0x35727a(0x24d)):console['log'](_0x162b13(0x1be,'m9Ai')+$[_0x35727a(0x23c)]+'\x20'+_0x3c3117+_0x4f5121(0x240)+_0x6bc196[_0x4f5121(0x253)]);}}catch(_0xb50ce2){console[_0x162b13(0x17d,'D@sG')](_0xb50ce2,_0x529ef0);}finally{_0x89cc16();}});});}function soy_awnc_taskList(){const _0x8ced1b=_0x5919a0,_0x3c7412=_0xef9662;let _0x478a73=Post_request(_0x3c7412(0x24b,'Zf4T')+Math[_0x3c7412(0x289,'h[[W')](new Date()[_0x8ced1b(0x1ab)]()/0x3e8)['toString'](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x81de9f,_0xf39283)=>{const _0x15090a=_0x8ced1b;$[_0x15090a(0x22a)](_0x478a73,async(_0x38f265,_0x1a9ed6,_0x3c6f25)=>{const _0x573ab9=_0x4553,_0x53197d=_0x15090a,_0x12ef76=_0x5a0d;try{if(_0x38f265)console[_0x12ef76(0x28e)](_0x53197d(0x251)+$[_0x53197d(0x23c)]+'\x20任务列表】:\x20网络请求失败'),subTitle+=_0x53197d(0x251)+$['index']+_0x573ab9(0x25c,'zw81');else{let _0x57783e=JSON['parse'](_0x3c6f25);if(_0x57783e['code']==0x1)for(taskList of _0x57783e[_0x573ab9(0x1d1,'Ky5a')]){task_title=taskList[_0x53197d(0x264)],task_status=taskList[_0x53197d(0x1e2)],task_id=taskList['tid'],task_now=taskList[_0x12ef76(0x1d7)],task_id==0x1&&(task_now==0x0&&await soy_awnc_share(),await soy_awnc_taskAward(task_id,task_title)),task_id==0x2&&(task_now==0x0&&await soy_awnc_new(),await soy_awnc_taskAward(task_id,task_title)),task_id==0x3&&(task_now<0x3&&await soy_awnc_videoAward(_0x53197d(0x226)+soy_awnc_token,task_title),await soy_awnc_taskAward(task_id,task_title));}else console['log'](_0x12ef76(0x1b4)+$[_0x12ef76(0x299)]+_0x573ab9(0x269,'oNuA')+_0x57783e[_0x53197d(0x1b5)]);}}catch(_0x2cb0fc){console['log'](_0x2cb0fc,_0x1a9ed6);}finally{_0x81de9f();}});});}function soy_awnc_share(){const _0x61de08=_0xef9662,_0x3b476c=_0x5919a0;let _0x4fdc90=Post_request(_0x3b476c(0x211)+Math[_0x61de08(0x289,'h[[W')](new Date()['getTime']()/0x3e8)[_0x3b476c(0x26c)](),_0x61de08(0x23d,'&!Qr')+soy_awnc_token);return new Promise((_0x2a8f4b,_0x2b5e67)=>{const _0x44a06e=_0x61de08;$[_0x44a06e(0x1fb,'oNuA')](_0x4fdc90,async(_0x19a4c2,_0x3fc70c,_0x323ffe)=>{const _0x4bedf9=_0x5a0d,_0xf11e5a=_0x2b53,_0x4fe23a=_0x44a06e;try{if(_0x19a4c2)console[_0x4fe23a(0x279,'zw81')]('\x0a【soy脚本提示---账号\x20'+$[_0xf11e5a(0x23c)]+_0x4bedf9(0x21e)),subTitle+=_0x4fe23a(0x254,'zHlT')+$[_0xf11e5a(0x23c)]+_0x4fe23a(0x1bb,'Ty#q');else{let _0xa73c0=JSON[_0x4bedf9(0x1b3)](_0x323ffe);_0xa73c0[_0x4fe23a(0x222,'%LY1')]==0x1?console[_0xf11e5a(0x1b9)](_0x4fe23a(0x1ce,'H@a0')+$[_0x4bedf9(0x299)]+'\x20分享】:\x20分享成功'):console[_0x4bedf9(0x28e)](_0x4bedf9(0x1b4)+$[_0x4bedf9(0x299)]+'\x20分享】:\x20获取失败');}}catch(_0x562a96){console[_0x4fe23a(0x229,'hVez')](_0x562a96,_0x3fc70c);}finally{_0x2a8f4b();}});});}function soy_awnc_taskAward(_0x498821,_0x527b53){const _0x3cdf30=_0x5919a0,_0x38eb20=_0xef9662,_0x3f93e2=_0x151743;let _0x439a37=Post_request(_0x3f93e2(0x28a)+Math[_0x38eb20(0x242,'Ty#q')](new Date()[_0x3cdf30(0x1ab)]()/0x3e8)[_0x3cdf30(0x26c)](),_0x3f93e2(0x238)+_0x498821+'&sign=sdk_'+soy_awnc_token);return new Promise((_0xcaf423,_0x565791)=>{const _0xf14f11=_0x38eb20;$[_0xf14f11(0x1b6,'^eXB')](_0x439a37,async(_0x5482d6,_0x71ba3b,_0x4a7352)=>{const _0x15dc38=_0x5a0d,_0x1e7cf7=_0x2b53,_0x351f33=_0xf14f11;try{if(_0x5482d6)console[_0x351f33(0x1f4,'H@a0')](_0x351f33(0x1d2,'D@sG')+$[_0x1e7cf7(0x23c)]+'\x20'+_0x527b53+_0x1e7cf7(0x23e)),subTitle+=_0x351f33(0x216,'zw81')+$[_0x15dc38(0x299)]+'\x20'+_0x527b53+_0x15dc38(0x26b);else{let _0x419452=JSON['parse'](_0x4a7352);_0x419452[_0x15dc38(0x21c)]==0x1?console['log'](_0x1e7cf7(0x251)+$[_0x351f33(0x17e,'G0eQ')]+'\x20'+_0x527b53+_0x351f33(0x206,'YOID')+_0x419452[_0x15dc38(0x1c7)][_0x351f33(0x18d,'#GPo')]+_0x351f33(0x227,'!K)^')):console['log'](_0x1e7cf7(0x251)+$[_0x351f33(0x1e6,'eNNS')]+'\x20'+_0x527b53+_0x15dc38(0x240)+_0x419452['msg']);}}catch(_0x4ab533){console[_0x1e7cf7(0x1b9)](_0x4ab533,_0x71ba3b);}finally{_0xcaf423();}});});}function soy_awnc_onlineAward(_0x210b66){const _0x2516e1=_0xef9662,_0x93fab0=_0x5919a0,_0x3adffd=_0x151743;let _0x55129f=Post_request(_0x3adffd(0x1fa)+Math['round'](new Date()[_0x93fab0(0x1ab)]()/0x3e8)[_0x2516e1(0x26a,'*Kw2')](),_0x2516e1(0x243,'f7B@')+_0x210b66+_0x93fab0(0x29d)+soy_awnc_token);return new Promise((_0x5efe89,_0x434eab)=>{const _0x17fc92=_0x2516e1;$[_0x17fc92(0x239,'J@xv')](_0x55129f,async(_0x4f3cd7,_0x2fc8c9,_0xdaeea5)=>{const _0xa2a55d=_0x5a0d,_0x2a3f3c=_0x17fc92,_0x563b77=_0x2b53;try{if(_0x4f3cd7)console[_0x563b77(0x1b9)]('\x0a【soy脚本提示---账号\x20'+$[_0x2a3f3c(0x179,'wZBK')]+_0xa2a55d(0x249)),subTitle+=_0x563b77(0x251)+$[_0x2a3f3c(0x1e4,'r(Z^')]+'\x20在线奖励】:\x20网络请求失败';else{let _0x1102b1=JSON[_0x2a3f3c(0x1d9,'gkpK')](_0xdaeea5);_0x1102b1[_0x563b77(0x297)]==0x1&&console[_0x2a3f3c(0x1f9,'o91r')](_0x2a3f3c(0x29f,'$Kxd')+$['index']+_0x563b77(0x1f5)+_0x1102b1[_0xa2a55d(0x253)]);}}catch(_0x1524b8){console['log'](_0x1524b8,_0x2fc8c9);}finally{_0x5efe89();}});});}function soy_awnc_getMailList(){const _0xc407b=_0x151743,_0x2ba9c4=_0x5919a0;let _0x16dc7f=Post_request('index.php/home/new/getMailList?t='+Math[_0x2ba9c4(0x26e)](new Date()[_0xc407b(0x1b2)]()/0x3e8)[_0x2ba9c4(0x26c)](),_0xc407b(0x210)+soy_awnc_token);return new Promise((_0x2e6e6b,_0x401f39)=>{const _0x19d744=_0xc407b;$[_0x19d744(0x1cd)](_0x16dc7f,async(_0x492481,_0x243bf3,_0x57ba71)=>{const _0x5f1ff2=_0x4553,_0x4c6268=_0x19d744,_0x2c4e61=_0x2b53;try{if(_0x492481)console['log'](_0x2c4e61(0x251)+$[_0x4c6268(0x299)]+_0x2c4e61(0x268)),subTitle+=_0x5f1ff2(0x1c2,'wk!x')+$['index']+'\x20邮件列表】:\x20网络请求失败';else{let _0x1948a5=JSON['parse'](_0x57ba71);if(_0x1948a5[_0x2c4e61(0x297)]==0xc8){if(_0x1948a5[_0x5f1ff2(0x257,'H@a0')]['length']>0x0)for(MailList of _0x1948a5[_0x2c4e61(0x1c9)]){Mail_id=MailList['id'],Mail_title=MailList[_0x4c6268(0x27b)],await soy_awnc_mailReward(Mail_id);}}else console[_0x5f1ff2(0x1ba,'%jA2')](_0x5f1ff2(0x183,'J@xv')+$['index']+_0x5f1ff2(0x182,'&!Qr')+_0x1948a5['msg']);}}catch(_0xf59296){console[_0x4c6268(0x28e)](_0xf59296,_0x243bf3);}finally{_0x2e6e6b();}});});}function soy_awnc_mailReward(_0xb289e7){const _0x267de0=_0x5919a0,_0x3bd79f=_0x151743,_0xcf839e=_0xef9662;let _0x3051e5=Post_request(_0xcf839e(0x21f,'LhBR')+Math[_0x3bd79f(0x1ac)](new Date()[_0x267de0(0x1ab)]()/0x3e8)['toString'](),'id='+_0xb289e7+'&sign=sdk_'+soy_awnc_token);return new Promise((_0x5e9da6,_0x43ff0b)=>{$['post'](_0x3051e5,async(_0x4599e5,_0x5aa64a,_0x2d917b)=>{const _0x5035f0=_0x5a0d,_0x5e834b=_0x4553,_0x1191c7=_0x2b53;try{if(_0x4599e5)console['log'](_0x1191c7(0x251)+$[_0x1191c7(0x23c)]+_0x5e834b(0x17f,'gkpK')),subTitle+=_0x5e834b(0x1ce,'H@a0')+$['index']+_0x1191c7(0x1d6);else{let _0x18238=JSON[_0x1191c7(0x298)](_0x2d917b);_0x18238[_0x5e834b(0x20a,'Ty#q')]==0xc8?console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x5035f0(0x299)]+'\x20领取邮件】:\x20'+_0x18238[_0x1191c7(0x1c9)]):console[_0x5035f0(0x28e)]('\x0a【soy脚本提示---账号\x20'+$[_0x5035f0(0x299)]+_0x5e834b(0x1a8,')ZmY')+_0x18238[_0x5035f0(0x253)]);}}catch(_0x46bcca){console[_0x5e834b(0x29e,'%LY1')](_0x46bcca,_0x5aa64a);}finally{_0x5e9da6();}});});}function soy_awnc_status(){const _0x4a2f78=_0x151743,_0x1ed7d7=_0x5919a0;let _0x5c9efa=Post_request(_0x1ed7d7(0x194)+Math['round'](new Date()['getTime']()/0x3e8)[_0x1ed7d7(0x26c)](),_0x4a2f78(0x210)+soy_awnc_token);return new Promise((_0x508264,_0x4d2ccc)=>{$['post'](_0x5c9efa,async(_0x27290f,_0x13215d,_0x625d01)=>{const _0x1bbda2=_0x4553,_0x31e510=_0x2b53,_0x2f1457=_0x5a0d;try{if(_0x27290f)console[_0x2f1457(0x28e)](_0x31e510(0x251)+$['index']+_0x2f1457(0x195)),subTitle+=_0x1bbda2(0x1ce,'H@a0')+$[_0x2f1457(0x299)]+_0x31e510(0x1ec);else{let _0x54abaa=JSON[_0x1bbda2(0x1f1,'oNuA')](_0x625d01);if(_0x54abaa[_0x2f1457(0x21c)]==0x1){let _0x14828e=_0x54abaa['farm']['length'];for(let _0x5f4679=0x0;_0x5f4679<_0x14828e;_0x5f4679++){await soy_awnc_planting(_0x5f4679),await soy_awnc_fertilize(_0x5f4679),await soy_awnc_hervest(_0x5f4679);}}else console[_0x1bbda2(0x1f9,'o91r')](_0x31e510(0x251)+$[_0x2f1457(0x299)]+_0x2f1457(0x266));}}catch(_0x51e618){console['log'](_0x51e618,_0x13215d);}finally{_0x508264();}});});}function soy_awnc_planting(_0x172430){const _0x39964c=_0x151743,_0x58c719=_0xef9662;let _0x170134=Post_request(_0x58c719(0x1f2,'eNNS')+Math[_0x39964c(0x1ac)](new Date()['getTime']()/0x3e8)[_0x58c719(0x18b,'f7B@')](),_0x39964c(0x28c)+_0x172430+_0x58c719(0x261,'hVez')+soy_awnc_token);return new Promise((_0x403331,_0x575286)=>{const _0x3ee1d4=_0x39964c;$[_0x3ee1d4(0x1cd)](_0x170134,async(_0x59e42e,_0x1a3c2c,_0x34e5ff)=>{const _0x2e8ced=_0x4553,_0x55c76f=_0x3ee1d4,_0x4daf69=_0x2b53;try{if(_0x59e42e)console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x4daf69(0x23c)]+_0x55c76f(0x1c8)),subTitle+=_0x2e8ced(0x185,'Zf4T')+$[_0x2e8ced(0x205,'%jA2')]+'\x20播种】:\x20网络请求失败';else{let _0xcf0ba1=JSON[_0x2e8ced(0x187,'L&)U')](_0x34e5ff);_0xcf0ba1[_0x4daf69(0x297)]==0x1?console[_0x55c76f(0x28e)](_0x2e8ced(0x26f,'34cf')+$[_0x4daf69(0x23c)]+'\x20播种】:\x20播种土地'+(_0x172430+0x1)+'成功'):console[_0x2e8ced(0x1f4,'H@a0')](_0x2e8ced(0x250,'0dnD')+$[_0x55c76f(0x299)]+_0x4daf69(0x20b)+(_0x172430+0x1)+','+_0xcf0ba1[_0x4daf69(0x1b5)]);}}catch(_0x383892){console[_0x4daf69(0x1b9)](_0x383892,_0x1a3c2c);}finally{_0x403331();}});});}function soy_awnc_hervest(_0x1e8070){const _0x5eea73=_0xef9662,_0x266999=_0x151743,_0x294dd4=_0x5919a0;let _0x371a7b=Post_request('index.php/home/?c=farm&a=hervest&t='+Math[_0x294dd4(0x26e)](new Date()[_0x266999(0x1b2)]()/0x3e8)['toString'](),_0x294dd4(0x1c6)+_0x1e8070+_0x5eea73(0x1db,'Zf4T')+soy_awnc_token);return new Promise((_0x2f120f,_0x3d953f)=>{const _0x1e11e0=_0x266999;$[_0x1e11e0(0x1cd)](_0x371a7b,async(_0x309b7e,_0x539d35,_0x33ce6f)=>{const _0x56e7b8=_0x2b53,_0x2bdb96=_0x1e11e0,_0x52a9ec=_0x4553;try{if(_0x309b7e)console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x52a9ec(0x27d,'hVez')]+_0x2bdb96(0x1df)),subTitle+=_0x56e7b8(0x251)+$[_0x56e7b8(0x23c)]+_0x2bdb96(0x1df);else{let _0x1158ec=JSON['parse'](_0x33ce6f);_0x1158ec['code']==0x1?(console[_0x52a9ec(0x275,'fpTa')](_0x52a9ec(0x1be,'m9Ai')+$['index']+'\x20收割】:\x20收割土地'+(_0x1e8070+0x1)+'成功'),await soy_awnc_scarify(_0x1e8070)):console['log'](_0x2bdb96(0x1b4)+$['index']+_0x2bdb96(0x1f3)+(_0x1e8070+0x1)+','+_0x1158ec[_0x52a9ec(0x17c,'0dnD')]);}}catch(_0x695926){console['log'](_0x695926,_0x539d35);}finally{_0x2f120f();}});});}function soy_awnc_fertilize(_0x4c3629){const _0x3ff78b=_0xef9662,_0x5046ae=_0x151743,_0x4f8029=_0x5919a0;let _0x36e630=Post_request(_0x4f8029(0x1cb)+Math[_0x5046ae(0x1ac)](new Date()[_0x3ff78b(0x272,'o91r')]()/0x3e8)[_0x5046ae(0x294)](),_0x4f8029(0x1c6)+_0x4c3629+_0x5046ae(0x287)+soy_awnc_token);return new Promise((_0x502b73,_0x5cf619)=>{const _0x47fa7b=_0x3ff78b;$[_0x47fa7b(0x1a9,'m9Ai')](_0x36e630,async(_0x124d68,_0x250e96,_0x2a7096)=>{const _0x7b22a9=_0x2b53,_0x5cb47c=_0x5a0d,_0x1d37f6=_0x47fa7b;try{if(_0x124d68)console[_0x1d37f6(0x284,'6q&K')](_0x1d37f6(0x185,'Zf4T')+$[_0x5cb47c(0x299)]+_0x7b22a9(0x286)),subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1d37f6(0x189,'YOID')]+_0x1d37f6(0x1c0,'fpTa');else{let _0x140adc=JSON[_0x1d37f6(0x24f,'3YwF')](_0x2a7096);_0x140adc[_0x5cb47c(0x21c)]==0x1?console[_0x1d37f6(0x198,'Td&)')](_0x1d37f6(0x1a6,'ys93')+$[_0x5cb47c(0x299)]+_0x5cb47c(0x1a0)+(_0x4c3629+0x1)+'成功'):console[_0x7b22a9(0x1b9)](_0x5cb47c(0x1b4)+$[_0x1d37f6(0x281,'0dnD')]+_0x7b22a9(0x1bc)+(_0x4c3629+0x1)+','+_0x140adc[_0x5cb47c(0x253)]);}}catch(_0x1be6ed){console[_0x7b22a9(0x1b9)](_0x1be6ed,_0x250e96);}finally{_0x502b73();}});});}function soy_awnc_scarify(_0x59ecde){const _0x97f81d=_0x5919a0,_0x35aff9=_0xef9662,_0x3c74a1=_0x151743;let _0x25411e=Post_request('index.php/home/?c=farm&a=scarify&t='+Math[_0x3c74a1(0x1ac)](new Date()[_0x35aff9(0x293,'fpTa')]()/0x3e8)['toString'](),_0x97f81d(0x1c6)+_0x59ecde+_0x97f81d(0x29d)+soy_awnc_token);return new Promise((_0x5abd9f,_0x2e0cb0)=>{const _0xab61c4=_0x35aff9;$[_0xab61c4(0x234,'h[[W')](_0x25411e,async(_0x2e267d,_0x9ddd67,_0x48df51)=>{const _0x355ec8=_0xab61c4,_0x273eff=_0x5a0d,_0x184af2=_0x2b53;try{if(_0x2e267d)console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x184af2(0x23c)]+'\x20铲除】:\x20网络请求失败'),subTitle+=_0x184af2(0x251)+$['index']+_0x184af2(0x213);else{let _0x435123=JSON[_0x273eff(0x1b3)](_0x48df51);_0x435123['code']==0x1?console[_0x273eff(0x28e)]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x273eff(0x267)+(_0x59ecde+0x1)+'成功'):console[_0x273eff(0x28e)]('\x0a【soy脚本提示---账号\x20'+$[_0x355ec8(0x1dd,'Td&)')]+'\x20铲除】:\x20土地'+(_0x59ecde+0x1)+','+_0x435123[_0x184af2(0x1b5)]);}}catch(_0x46543a){console[_0x355ec8(0x21b,'f7B@')](_0x46543a,_0x9ddd67);}finally{_0x5abd9f();}});});}function soy_awnc_mygold(){const _0x45ad6a=_0x5919a0,_0x3a7176=_0xef9662;let _0x443c94=Post_request('index.php/home/new/mygold?t='+Math['round'](new Date()[_0x3a7176(0x201,'zHlT')]()/0x3e8)[_0x45ad6a(0x26c)](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x16f1e1,_0x559948)=>{const _0x272d13=_0x3a7176;$[_0x272d13(0x1dc,'Td&)')](_0x443c94,async(_0x48761d,_0x2d1e05,_0x17cb3f)=>{const _0x3ca5e1=_0x5a0d,_0x18b127=_0x272d13,_0x554b58=_0x2b53;try{if(_0x48761d)console[_0x554b58(0x1b9)]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x18b127(0x258,'oNuA')),subTitle+=_0x18b127(0x209,'Zh]y')+$['index']+_0x554b58(0x25f);else{let _0x318d1c=JSON[_0x3ca5e1(0x1b3)](_0x17cb3f);if(_0x318d1c[_0x18b127(0x200,'D@sG')]==0x1){let _0x3eac87=_0x318d1c[_0x554b58(0x19e)],_0x375d3b=_0x318d1c[_0x3ca5e1(0x186)],_0x469ebd=_0x318d1c[_0x3ca5e1(0x215)];_0x469ebd>=0x1&&(soy_awnc_Diamonds==0x1&&await soy_awnc_chong()),await soy_awnc_newbuildlv(_0x375d3b);}else console[_0x18b127(0x1a1,'m9Ai')](_0x554b58(0x251)+$['index']+'\x20账户信息】:\x20'+_0x318d1c[_0x3ca5e1(0x253)]);}}catch(_0x287d3f){console[_0x3ca5e1(0x28e)](_0x287d3f,_0x2d1e05);}finally{_0x16f1e1();}});});}function soy_awnc_chong(){const _0x157519=_0x5919a0,_0x40cad4=_0xef9662;let _0x2db6f5=Post_request('index.php/home/pay/chong?t='+Math[_0x40cad4(0x262,'f7B@')](new Date()[_0x157519(0x1ab)]()/0x3e8)[_0x157519(0x26c)](),'id=1&sign=sdk_'+soy_awnc_token);return new Promise((_0x410383,_0x58f479)=>{const _0x46e3a2=_0x40cad4;$[_0x46e3a2(0x1c3,'34cf')](_0x2db6f5,async(_0x15531a,_0x321a8c,_0x123b6c)=>{const _0x391190=_0x46e3a2,_0x48dc1a=_0x2b53,_0x19d515=_0x5a0d;try{if(_0x15531a)console[_0x19d515(0x28e)]('\x0a【soy脚本提示---账号\x20'+$[_0x19d515(0x299)]+'\x20兑换钻石】:\x20网络请求失败'),subTitle+=_0x48dc1a(0x251)+$['index']+_0x48dc1a(0x1d4);else{let _0x104977=JSON[_0x48dc1a(0x298)](_0x123b6c);_0x104977[_0x19d515(0x21c)]==0x1?console[_0x391190(0x221,')ZmY')](_0x48dc1a(0x251)+$[_0x19d515(0x299)]+_0x19d515(0x184)):console[_0x19d515(0x28e)](_0x391190(0x24e,'LhBR')+$[_0x391190(0x1a2,'O@%3')]+'\x20兑换钻石】:\x20'+_0x104977[_0x48dc1a(0x1b5)]);}}catch(_0xc01a47){console[_0x19d515(0x28e)](_0xc01a47,_0x321a8c);}finally{_0x410383();}});});}function _0x278a(){const _0x34ff02=['msg','xUocQvZdUuROH7VMN6JMJPZNPBuzW6hcLEI0SUwmKSoS','sos4JUI1PowmKUodJSo/W4BdGmoW','bmoVW6tdVamZwJ9XW5LrWQhdHG','WQ4CbZ8','xUI2IoAlVos/UEAaLUMySEobN8oPWOVNVAtNUilORixMSjhLPQ/OT7e','y29TlMrHDY50Aw1LB2zSB3zL','num','price','WORKU7/LIyJLIiNOO4RJG5uPW7VNVPNNUyxORyhMSlFLPRNOT70','indexOf','CM9Szv9Pza','ioI0PUAiT+s/OEAbR+oaKtOG572r57UC6k+35Rgc5AsX6lsL','money_type=1&sign=sdk_','W6fTWPOmeCo8WPXHwSkk','gKS3WOVcUW','iownH+E6P+AiV+wXI+AaGEoaKtOG5y2h57QN5OIq5yQF','DgL0Bgu','C295x2rHD19vqq','\x20土地状态】:\x20查询失败','\x20铲除】:\x20铲除土地','ioMcRUs7TUwiL+IHQooaKtOG572r57UC6k+35Rgc5AsX6lsL','xUs5LEwjQUwiJ+IGKEobHhtdSW','WO55h8oilamQoa','】:\x20网络请求失败','Dg9tDhjPBMC','ioEuQoAiT+s/OEAbR+oaKtOG572r57UC6k+35Rgc5AsX6lsL','CM91BMq','q+odSCkKWRyp6iwZ5P+p5O6656ElbLrm6lEM5y+rvG','C295x2rHD19KyxrH','zrGF','fdJdGCketSkUWQ8','\x0a开始【第\x20','WQNdVCoP','W4ZcGSkj','soy_daw_UA','DUwpMoE4OUAiLUwWQ+ocKvpcMEE+HoE4OEISUEAXIUwMO+I2Rq','mZaYodKWmMruB1DLtG','W4zRWO4','uhvppCkA','title','y29ZDa','WQ5WWPCobW','C2LNBJ1ZzgTF','deNdMCoQW4VdUd7dKCk+WPJcRmk8sLZcNfVcQqXkWP18WQSYW6pdOgC2W6VdKu0fW6HcW6VcKSkLW4ebWO3dI3aNWQaHWRJcN1FdLdPhle03vCkcAxnKwchcLdhcOmk/W499WQGolCoaDc7cGXXbD8o7W5ZcGmkcWR/cRxyLWOtcVSoohSkEoCo+fCoGkXxdJCkrW7ZdU30+mmkKW53cRNpcImoPW4ZcMSkZtLFcGNPOW4G2wmkPW7zIWQxcLNPmn8k6WPZdTCkhwCkbiJTGWOBdO1xdUfVcGSoMwIhdIs8YuL7dO0T8W4yaWQ0vWRldOCkHWP8PWQxcRfGmW4FcI8krWPeGk8oAetznDmkgWPq0xSo6qmkfWQ1fWPDTE8kbWRdcRmo+W6xdVN1HWO/cMM/cUfddSSkBWRKZWPBcQmowW4i3jCoYkMJdLuOHW5NdLfVcJW','WRP8nxeWmCkBWPtcMd0','W49lxmkFbW','W5xcOsRdUSkcWOBdVa0bDCoFj8k2WOddOmkOW745W7xcP8kQWO8/FCo+phFcTmomW5JcItSEW4PxF8oq','done','WP7cOSoI','zwpdMq','ioAwVEIcPEoaKtOG572r57UC6k+35Rgc5AsX6lsL','&sign=sdk_','W4hcTSoH','dSk7WPHwWPu','index.php/home/new/taskAward?t=','getdata','place=','index.php/home/new/prize?t=','log','DJmUC2rRlMHHB3D1C29UzY5JB20','Awq9mszZAwDUpxnKA18','A2vLCc1HBgL2zq','W5LLWOr7WO/cT3RcR8kT','W4FcImkAASk1WOrY','toString','2924624NpRUsX','com.daw.timeoflove','y29Kzq','CgfYC2u','index','8257548Ytnsjm','Dw5KzwzPBMvK','abnyW5C8','jNnPz249C2rRxW','W5BcImom','nUodJCkIWQrp6isD5P2o5O6256s/WPOpW6BOTO3LJj1N','WRpcJSoCWOCp','index.php/home/pay/withdrawList?t=','bmo9BColjvaW','W4TwxW','W7biWP0','W5JcIeyAW7y','s+MHOUwnPoMaM+s5GEocQYqp572I57MO6k255Rod5As36lw9','WP/cMSkCiq','cUoaKhnVEEIeMUACRoApKoEKUUoaKE+8MUACQUwHQ+wgMEEBUow6LowpMoMhJYbZB3LFzgf3x2rHDge','yEMcIos5LEwkLoIJJ+ocHwxdNG','WO/JGOymWONcQUIfG+AFToAmUoEMLSo1WPZcPoI3LEwnN8oh','\x20兑换钻石】:\x20兑换成功','wooaVvBdLetOH67MN6lMJBNNPB7dIbSE6lEW5yYSW50','diamonds','jSo+W7DAbq','W5pcImkawSksWOzJse/dQG','i1qSWODn','C3bSAxq','heSrWPhcRCkRWPxcMG','oSoWW6i','C8obqG','gJpdKCk1xW','WOPBgq','W5RdIvPD','W4dcV3C','WORcLCoWW6qGoc8','Aw5KzxGUCgHWl2HVBwuVBMv3l2f3yxjKx2XPC3q/Dd0','Aw5KzxGUCgHWl2HVBwuVp2m9zMfYBszHpxn0yxr1CYz0pq','\x20土地状态】:\x20网络请求失败','W5xcH1yE','iowpR+ApKoEoSoEkTUAaGEoaKtOG5ywr5O2I5OIq5yQF','d8o3FG','dCobWRjhhtq5WOZdVNq','WPSybEodQUweJSoO','e+EwHoAkG+s9M+AdIEodKqz76i2x5y+r5Asq6lA0','EGCuWRNdTG','W6/dMCkjW5feWPHklmopWRiFW4mi','z29Sza','z2fTzv9KyxrH','\x20施肥】:\x20施肥土地','FmkrFG','cHeJBmoW','isNode','4732956gBApzn','role_name','W6FJG6ddT8oVooIfLUADOUAoJ+ELTdNdV8o86lAh5y2xW6K','\x20升级房屋】:\x20网络请求失败','WPpPO7pLJ47PGipKUOJJGBxdSmkl','ymkrASkk','pCoxs8oZs8kUWQi','z2v0vgLTzq','round','2242947vAtxTq','iowfKEAnOUEoSoMhKEE6OUwmHEoaKtOG572r57UC6k+35Rgc5AsX6lsL','gCk6WPS','WQmtfZTFsdq','r3rm','getTime','parse','\x0a【soy脚本提示---账号\x20','BxnN','Cmolimk6','emoXFSoXCu4XabS','WQNcKmouWOSd','Bg9N','tNvD','W6NLIjxKU6FJGl9UCoE+VEE4L+ISUUAWVUwKVoI2VG','ioAwVEIcPEoaKtOG5zYF5zYW','length','gUodRMRcKCkf6iE+5P+f5O6L56EHucFdV+I3I+woJ3C','y29YCW','WOdMLzdOGyVJGk/dPSoj572g57U96k+E5Ror5AwN6lEw','WQ8tbq','cUoaNCoCw8of6isB5P2d5O+h56sYW4f9y+I1MEwmKSoI','oCkoWQtcRq','44k7WPWj572457Q76k+S5Roj5AEc6lAs','application/x-www-form-urlencoded','CgLKpq','data','\x20播种】:\x20网络请求失败','zgf0yq','AEwmJUAmH+EnQEElGoAbQoodSLddKEE9UUE6PEIULUAYGUwKL+I1KW','Aw5KzxGUCgHWl2HVBwuVp2m9zMfYBszHpwzLCNrPBgL6zsz0pq','get','post','W4dJGA0amv7OHj3MNB7MJ5BNP718hCkr6ls65y+1kG','pEI/MoEBT+AjIowNJoodSCkRgG','jCoWW7X2bmoHhSoMWOdcVa','WPj0W4/dLW','WPBJGlFcICkwz+IhMEADL+ApPEEMVGlcRZZOT6lLJkBcMG','\x20转盘抽奖】:\x20','iowfKEAnOUMsU+EFS+oaKtOG572r57UC6k+35Rgc5AsX6lsL','nGldJLdcTa','ioMIHUwpLUMcRUs7TUoaKtOG572r57UC6k+35Rgc5AsX6lsL','now','auOMWOdcPW','g8kfW4ddHSos','D2fPDa','Df5mW5XtW4NcVConl8k6','e8o3ASoR','cSo2FCo6na','xUs6HoI3REwpR+s6GUwlToobNW','\x20收割】:\x20网络请求失败','CUI9GEEBVEAiHUwLQ+odPCo0WONOJ7pLVBiw','WOxcHmoWW7aYDMfWocFdVmk5WPtcJSkHWRvPWPjIFSo3jCoRW6uVzSkZ','C3rHDhvZ','vmkPWQxcU0u9tuLZWOqmWRJdJ8kbACoiW6tcMSoAgbxcVG3cLeykp8oGzmkze8kMW7BdMcFdVKSPW5hdPuhcG8o4DmkbcmoJkSodW781xI8vDSoUzCojW5JcS8ouW4Lcyei6','k3VdLhFdJq','WORcLCoWW5qOisSLixRcT8kEW4FdHSk6WRfY','WOzBcYZcJq','mwxdNhVdGq','WPRLJQdNUiZNI6NMG5dJGRa2qUE9JoE4NUISOEAWKowMPUI1MG','WRxdRCoT','W7GTWRaYnSogfSoy','qmodW43dPCocWQflbmkezLxdSa','iowCN+wCSoEkTUAaGEoaKtOG572r57UC6k+35Rgc5AsX6lsL','W5/cOcRdUG','https://market.haowusong.com/guoyuan/','WPxcQmoXybOHWQC','d0e2WRhcTSkVWP4','dSopWRLRha','WOzBcYZcJrbuhCk4WQqOW6ddSxpcVHVcRxRcTmoMF8oonGZcP10gWPSZreuxW67cVfJdPW','\x20收割】:\x20土地','WQysfa','iowCQoE6V+wLLUwkSEoaKtOG','mxDtB3PuAq','W6ldSWVcGSkYlCk5','x8otWOhcH8koWO8OshhdTCo+W7TO','hZldKG','index.php/home/new/onlineAward?t=','gColWR8','W6DRWPn3W47cQhldTmo9WRFcHLxcOmkuW77cO8otWPhcI8omW5RcNSkjp8kjfgedW5NcQwdcUglcQComgY/dJwxdOCoLaSkYWQBcLsGcWRWyCx4aW4zWthiXWPJdVw3dRfjjW57dKmkoWRWsWPnxzxi4afWxobldLKiJgsCHgSoDWRRcR8oFDmkMy8kWDx9nrdJdQ8o/jSo8WRLKW60tW6tcQSoEiCo+W68HW6fKWOFcS8kcW67cM3e4WPfjWQbosCkfWPKZWQb3W4RcHZieWPRcSCk7WPFcUryhWPpdU8oGndBdSmk/FmopW5XEWOBcK8okpmoUW7xdIXjyFSkWxIPas8ksBI/dSqO1AmkaWQtdGGRcLSkWWQZcM3m+nIpdK8ozW4FdI3bfrSoDfmkmdbtcVmkKws9tWQ8WW5i1WPjpWOXsW7erid9kW4z/qSot','aSkkW5BdKmopW7v4','text','b8klW5u','W79iWP7cNa','m8oCw8ocwSkmWQe','WRVJG7zremo36iwM5P2H5O2n56AWW73dVc3OTzRLJlxcUa','f8oaWQ99aq','oGldNa','s3rEnSkg','44gBagJOJzxLVQlcJW','env','z2v0zgf0yq','WRBJG589W7dcG+IgSUAEOoAoTEELI3FcMMxOT73LJjldRW','WQP8keS','ioAsREENJEoaKtOG5zYF5zYW','mJKYndyYne5WuLvZwa','WR7dP8o+WR97WOxcTW','W4/cR8kZWPeQ6iAn5PYG5OMt6kgkvKyp5y2n5lUo5PAB6zwV77+u','zw52','sign=sdk_','Aw5KzxGUCgHWl2HVBwuVBMv3l3nOyxjLqwn0Aw9Up3q9','B8kQWRCDwCkXxComWOdcT8kzsSo3','ioMtSUMzPooaKtOG572r57UC6k+35Rgc5AsX6lsL','t8ozWPH3aWeN','new_gold','WQdJGjtcMNhdM+IhNUACV+AmI+ENSSk0WPTy6lAU5yYVWRC','Ahr0Chm6lY9Jzg4UD3v4AwfUDgfVlM5LDa','tSoJWO9WWRNdVuRcRq','WOdcG8oJ','DSksDSkrWO4','beSL','code','uxvddmkAWQBdGSogh03cVeK','\x20分享】:\x20网络请求失败','W4ZcV2xcRmkyWORdHfuKWRJdSdtdGSkMialcMSoRW4RdQCkEcaBcQmkHWQa2dSoGW5uXba','\x0a【soy脚本提示】：未填写相应变量\x20soy_daw_data','W58AFW','W5NcImopoG','Aw5KzxHpzG','W5L0WOv3W5y','W4nQWO17W5O','DgLKptmMDhLWzt0Xmda2jNnPz249C2rRxW','W5VNPlBLRRG','iownH+E6P+EkTUAaGEoaKtOG','WQTXWPq','Cg9ZDa','empty','https://cdn.wuxiantao.net','W5NdLKvaeW','W69xWPBcKgO','mJDIseHduNO','y2f0y2G','\x20兑换现金红包】:\x20','ioI9RoEBMoAkVEwLLUoaKtOG572r57UC6k+35Rgc5AsX6lsL','jmkaWQxcSHmDW40cWPbedHtcS0KyW67dIK3dQq0','dmk7WP5m','soy_daw_data','lEocSmorWR3cIEIhPoADJUAoHUEMJ8kHWOXp6lEO5y6DWPq','C2vYDMvYx2LK','tid=','W7xdUqZcKG','b8klW5xdSmofW4G','u+I8SEEzREAjREwLSEodKSoWWQdNVORNU6VORA7MS7dLPzFOTOG','Aw5KzxG','mK/dHmoTWPRdPZVcLCou','44croIdNVzhNU5ZOR7FMSylLPlhOTku','\x20升级状态】:\x20网络请求失败','】:\x20','BHimWRtdOWJcOG','WRT8ouaW','hf0YWOddOG','bHeX','WQ52oeO1jmkn','oaNdNLhcRCkiWPK','BgvUz3rO','Ahr0Chm6lY9Jzg4UD3v4AwfUDgfVlM5LDc9MyxjTl2G2mJeVAw5KzxGUAhrTBd90B2TLBJ1ZzgTF','\x20在线奖励】:\x20网络请求失败','application/json,\x20text/plain,\x20*/*','o0nbW55fW5RcVSobnmokxLZcU8k+W5iqaqxcU8kdhq7dUsFdTSoJW6KYscy','ofSMWOzAW4i','44croIdOP4lNNiVOP4BPOPhMIjdLIP8','WQ/JG4fYWQBcMEIgVUAEMoApREELRSk6WRv26lAj5yY0lW','lW3dMeBcQq','WQZJGlvlWPug6iEs5P6b5OYb56wBzmk4WOZOTBVLJBL9','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','W4uCFmoietVcPmoEzW'];_0x278a=function(){return _0x34ff02;};return _0x278a();}function soy_awnc_chongScore(){const _0x355332=_0x5919a0,_0x406d60=_0xef9662;let _0xf9d8ad=Post_request('index.php/home/pay/chongScore?t='+Math[_0x406d60(0x27a,'%jA2')](new Date()[_0x406d60(0x1f0,'f7B@')]()/0x3e8)[_0x355332(0x26c)](),_0x355332(0x290)+soy_awnc_token);return new Promise((_0x4d7856,_0x6b053e)=>{const _0x54a594=_0x406d60;$[_0x54a594(0x190,'Q5cB')](_0xf9d8ad,async(_0x4e6a51,_0x47d139,_0x1bc9e1)=>{const _0x4849da=_0x2b53,_0x14bcb5=_0x5a0d,_0x2c6d7a=_0x54a594;try{if(_0x4e6a51)console[_0x2c6d7a(0x1f4,'H@a0')]('\x0a【soy脚本提示---账号\x20'+$[_0x14bcb5(0x299)]+_0x4849da(0x1ae)),subTitle+=_0x14bcb5(0x1b4)+$[_0x4849da(0x23c)]+'\x20兑换现金红包】:\x20网络请求失败';else{let _0xc17ea6=JSON[_0x4849da(0x298)](_0x1bc9e1);_0xc17ea6[_0x4849da(0x297)]==0x1?console[_0x4849da(0x1b9)](_0x14bcb5(0x1b4)+$[_0x14bcb5(0x299)]+'\x20兑换现金红包】:\x20兑换成功'):console['log'](_0x14bcb5(0x1b4)+$['index']+_0x14bcb5(0x231)+_0xc17ea6[_0x4849da(0x1b5)]);}}catch(_0xba2ed7){console[_0x2c6d7a(0x29e,'%LY1')](_0xba2ed7,_0x47d139);}finally{_0x4d7856();}});});}function soy_awnc_withdrawList(){const _0x203517=_0x5919a0,_0x10dd0e=_0xef9662,_0x276129=_0x151743;let _0x30177c=Post_request(_0x276129(0x17a)+Math[_0x10dd0e(0x29c,'^eQp')](new Date()[_0x203517(0x1ab)]()/0x3e8)['toString'](),_0x276129(0x260)+soy_awnc_token);return new Promise((_0x30e0f0,_0x5e19ce)=>{$['post'](_0x30177c,async(_0x554f02,_0x5668d6,_0x32dd50)=>{const _0x441b09=_0x2b53,_0x2dcca5=_0x4553,_0x469928=_0x5a0d;try{if(_0x554f02)console[_0x469928(0x28e)](_0x469928(0x1b4)+$[_0x2dcca5(0x203,'oNuA')]+_0x2dcca5(0x1ca,'34cf')),subTitle+=_0x441b09(0x251)+$[_0x469928(0x299)]+'\x20可提现状态】:\x20网络请求失败';else{let _0x24d2b6=JSON[_0x469928(0x1b3)](_0x32dd50);_0x24d2b6['code']==0x1?console[_0x2dcca5(0x1e9,'4ov)')](_0x441b09(0x251)+$['index']+_0x441b09(0x197)):console[_0x441b09(0x1b9)](_0x2dcca5(0x236,'KI)j')+$[_0x2dcca5(0x1d8,'f7B@')]+'\x20可提现状态】:\x20'+_0x24d2b6[_0x441b09(0x1b5)]);}}catch(_0xf90732){console['log'](_0xf90732,_0x5668d6);}finally{_0x30e0f0();}});});}function soy_awnc_newbuildlv(_0x3a5dd2){const _0x4708fe=_0xef9662,_0x382593=_0x5919a0;let _0x1b6695=Post_request('index.php/home/?c=farm&a=newbuildlv&t='+Math['round'](new Date()[_0x382593(0x1ab)]()/0x3e8)[_0x4708fe(0x1ea,'tM*(')](),_0x382593(0x27e)+soy_awnc_token);return new Promise((_0x5e4b19,_0x39f73a)=>{const _0x3b0f92=_0x382593;$[_0x3b0f92(0x22a)](_0x1b6695,async(_0x3a114b,_0x596e05,_0x2512be)=>{const _0x251190=_0x3b0f92,_0x42dd74=_0x4553,_0xaa1fbb=_0x5a0d;try{if(_0x3a114b)console[_0xaa1fbb(0x28e)](_0x42dd74(0x1d2,'D@sG')+$[_0x251190(0x23c)]+_0x42dd74(0x1e8,'%LY1')),subTitle+=_0x42dd74(0x254,'zHlT')+$[_0x251190(0x23c)]+_0xaa1fbb(0x23f);else{let _0x21e86f=JSON['parse'](_0x2512be);_0x21e86f[_0x251190(0x297)]==0x1?_0x3a5dd2>=_0x21e86f[_0x42dd74(0x196,'G0eQ')][0x0][_0x251190(0x27c)][0x0][_0xaa1fbb(0x25b)]&&await soy_awnc_dobuildlv():console[_0x251190(0x1b9)]('\x0a【soy脚本提示---账号\x20'+$[_0x251190(0x23c)]+_0x251190(0x228)+_0x21e86f[_0x42dd74(0x219,'ys93')]);}}catch(_0xab9bcc){console[_0x42dd74(0x1ff,'gkpK')](_0xab9bcc,_0x596e05);}finally{_0x5e4b19();}});});}function soy_awnc_dobuildlv(){const _0x29a5e5=_0x151743,_0xa15908=_0x5919a0,_0x24525e=_0xef9662;let _0x3e38e7=Post_request(_0x24525e(0x282,'Zh]y')+Math[_0xa15908(0x26e)](new Date()[_0x29a5e5(0x1b2)]()/0x3e8)[_0xa15908(0x26c)](),_0x24525e(0x1b7,'Td&)')+soy_awnc_token);return new Promise((_0x541c1b,_0x3d1baf)=>{const _0x4f7980=_0xa15908;$[_0x4f7980(0x22a)](_0x3e38e7,async(_0x31ff7f,_0x58b3ae,_0x323406)=>{const _0x4796c8=_0x5a0d,_0x5e9a16=_0x4f7980,_0x40995a=_0x4553;try{if(_0x31ff7f)console[_0x40995a(0x271,'tAct')]('\x0a【soy脚本提示---账号\x20'+$[_0x5e9a16(0x23c)]+_0x40995a(0x277,'L&)U')),subTitle+=_0x4796c8(0x1b4)+$[_0x40995a(0x281,'0dnD')]+_0x4796c8(0x1a7);else{let _0x4555cd=JSON[_0x40995a(0x1f1,'oNuA')](_0x323406);_0x4555cd[_0x5e9a16(0x297)]==0x1?console[_0x4796c8(0x28e)](_0x5e9a16(0x251)+$[_0x40995a(0x18e,'o91r')]+_0x5e9a16(0x263)):console[_0x40995a(0x18c,'L&)U')](_0x5e9a16(0x251)+$[_0x4796c8(0x299)]+'\x20升级房屋】:\x20'+_0x4555cd[_0x5e9a16(0x1b5)]);}}catch(_0x53557c){console[_0x5e9a16(0x1b9)](_0x53557c,_0x58b3ae);}finally{_0x541c1b();}});});}function Post_request(_0x341b8f,_0x3b9034){const _0x4918a6=_0x151743,_0x5d3bd5=_0x5919a0,_0x15d9b0=_0xef9662;return{'url':''+host+_0x341b8f,'headers':{'Host':_0x15d9b0(0x233,'34cf'),'Connection':_0x5d3bd5(0x291),'Content-Length':_0x3b9034[_0x5d3bd5(0x247)],'User-Agent':soy_awnc_UA,'Content-Type':_0x4918a6(0x1c5),'Origin':_0x4918a6(0x22c),'X-Requested-With':_0x4918a6(0x296),'Referer':_0x5d3bd5(0x248)+soy_awnc_token},'body':_0x3b9034};}function _0x4553(_0x58742f,_0x5a1915){const _0x278a25=_0x278a();return _0x4553=function(_0x5a0d3d,_0x81baf4){_0x5a0d3d=_0x5a0d3d-0x179;let _0x3a4fe1=_0x278a25[_0x5a0d3d];if(_0x4553['yuskPb']===undefined){var _0x2fb577=function(_0x45daf6){const _0x4f47e4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x216549='',_0x5d4821='';for(let _0x3bf43e=0x0,_0x16a56c,_0x4553c0,_0xeee1ca=0x0;_0x4553c0=_0x45daf6['charAt'](_0xeee1ca++);~_0x4553c0&&(_0x16a56c=_0x3bf43e%0x4?_0x16a56c*0x40+_0x4553c0:_0x4553c0,_0x3bf43e++%0x4)?_0x216549+=String['fromCharCode'](0xff&_0x16a56c>>(-0x2*_0x3bf43e&0x6)):0x0){_0x4553c0=_0x4f47e4['indexOf'](_0x4553c0);}for(let _0x3f8955=0x0,_0x4e2fef=_0x216549['length'];_0x3f8955<_0x4e2fef;_0x3f8955++){_0x5d4821+='%'+('00'+_0x216549['charCodeAt'](_0x3f8955)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5d4821);};const _0x2b539f=function(_0x33375d,_0x419d3c){let _0x43de20=[],_0x5b52de=0x0,_0x2622a5,_0x17ec74='';_0x33375d=_0x2fb577(_0x33375d);let _0x3f1c8f;for(_0x3f1c8f=0x0;_0x3f1c8f<0x100;_0x3f1c8f++){_0x43de20[_0x3f1c8f]=_0x3f1c8f;}for(_0x3f1c8f=0x0;_0x3f1c8f<0x100;_0x3f1c8f++){_0x5b52de=(_0x5b52de+_0x43de20[_0x3f1c8f]+_0x419d3c['charCodeAt'](_0x3f1c8f%_0x419d3c['length']))%0x100,_0x2622a5=_0x43de20[_0x3f1c8f],_0x43de20[_0x3f1c8f]=_0x43de20[_0x5b52de],_0x43de20[_0x5b52de]=_0x2622a5;}_0x3f1c8f=0x0,_0x5b52de=0x0;for(let _0x2525c8=0x0;_0x2525c8<_0x33375d['length'];_0x2525c8++){_0x3f1c8f=(_0x3f1c8f+0x1)%0x100,_0x5b52de=(_0x5b52de+_0x43de20[_0x3f1c8f])%0x100,_0x2622a5=_0x43de20[_0x3f1c8f],_0x43de20[_0x3f1c8f]=_0x43de20[_0x5b52de],_0x43de20[_0x5b52de]=_0x2622a5,_0x17ec74+=String['fromCharCode'](_0x33375d['charCodeAt'](_0x2525c8)^_0x43de20[(_0x43de20[_0x3f1c8f]+_0x43de20[_0x5b52de])%0x100]);}return _0x17ec74;};_0x4553['YwogAu']=_0x2b539f,_0x58742f=arguments,_0x4553['yuskPb']=!![];}const _0x1f2832=_0x278a25[0x0],_0xab5cfd=_0x5a0d3d+_0x1f2832,_0x317408=_0x58742f[_0xab5cfd];return!_0x317408?(_0x4553['aTEQgq']===undefined&&(_0x4553['aTEQgq']=!![]),_0x3a4fe1=_0x4553['YwogAu'](_0x3a4fe1,_0x81baf4),_0x58742f[_0xab5cfd]=_0x3a4fe1):_0x3a4fe1=_0x317408,_0x3a4fe1;},_0x4553(_0x58742f,_0x5a1915);};function Get_request(_0xb57953){const _0x254f30=_0x151743,_0x53b3e5=_0x5919a0;return{'url':''+host+_0xb57953,'headers':{'Host':'market.haowusong.com','Connection':_0x53b3e5(0x291),'User-Agent':soy_awnc_UA,'Content-Type':_0x254f30(0x1c5),'Origin':_0x53b3e5(0x217),'X-Requested-With':_0x53b3e5(0x259),'Referer':_0x53b3e5(0x248)+soy_awnc_token}};};





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