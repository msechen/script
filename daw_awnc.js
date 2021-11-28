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

const _0x5774cb=_0x3e2e;(function(_0xf13daf,_0x28ec62){const _0x170ffc=_0x3e2e,_0x354460=_0xf13daf();while(!![]){try{const _0x32c2ae=parseInt(_0x170ffc(0x122))/0x1*(parseInt(_0x170ffc(0x10f))/0x2)+parseInt(_0x170ffc(0x124))/0x3*(-parseInt(_0x170ffc(0x10a))/0x4)+parseInt(_0x170ffc(0xd2))/0x5+parseInt(_0x170ffc(0xd0))/0x6+-parseInt(_0x170ffc(0x129))/0x7*(-parseInt(_0x170ffc(0xdf))/0x8)+-parseInt(_0x170ffc(0x126))/0x9+-parseInt(_0x170ffc(0x10b))/0xa*(-parseInt(_0x170ffc(0x114))/0xb);if(_0x32c2ae===_0x28ec62)break;else _0x354460['push'](_0x354460['shift']());}catch(_0x44b4a6){_0x354460['push'](_0x354460['shift']());}}}(_0x2461,0x2963a));let app_soy_daw_data=[],app_soy_daw_UA=[];!(async()=>{const _0x4c16d0=_0x3e2e;typeof $request!==_0x4c16d0(0x137)&&await Get_data();if($[_0x4c16d0(0x115)]()){if(!process['env'][_0x4c16d0(0x13c)]){console[_0x4c16d0(0xe7)]('\x0a【'+$[_0x4c16d0(0x11e)]+_0x4c16d0(0x148));return;}if(process[_0x4c16d0(0x12c)][_0x4c16d0(0x13c)]&&process['env'][_0x4c16d0(0x13c)][_0x4c16d0(0xdb)]('@')>-0x1)app_soy_daw_data=process[_0x4c16d0(0x12c)][_0x4c16d0(0x13c)][_0x4c16d0(0xf1)]('@');else{if(process[_0x4c16d0(0x12c)][_0x4c16d0(0x13c)]&&process[_0x4c16d0(0x12c)][_0x4c16d0(0x13c)][_0x4c16d0(0xdb)]('\x0a')>-0x1)app_soy_daw_data=process['env']['soy_daw_data'][_0x4c16d0(0xf1)]('\x0a');else process['env'][_0x4c16d0(0x13c)]&&process[_0x4c16d0(0x12c)]['soy_daw_data'][_0x4c16d0(0xdb)]('#')>-0x1?app_soy_daw_data=process[_0x4c16d0(0x12c)][_0x4c16d0(0x13c)][_0x4c16d0(0xf1)]('#'):app_soy_daw_data=process[_0x4c16d0(0x12c)]['soy_daw_data'][_0x4c16d0(0xf1)]();};if(process[_0x4c16d0(0x12c)]['soy_daw_UA']){if(process[_0x4c16d0(0x12c)][_0x4c16d0(0x111)]&&process[_0x4c16d0(0x12c)][_0x4c16d0(0x111)][_0x4c16d0(0xdb)]('@')>-0x1)app_soy_daw_UA=process[_0x4c16d0(0x12c)][_0x4c16d0(0x111)][_0x4c16d0(0xf1)]('@');else process[_0x4c16d0(0x12c)][_0x4c16d0(0x111)]&&process[_0x4c16d0(0x12c)]['soy_daw_UA'][_0x4c16d0(0xdb)]('\x0a')>-0x1?app_soy_daw_UA=process['env'][_0x4c16d0(0x111)][_0x4c16d0(0xf1)]('\x0a'):app_soy_daw_UA=process[_0x4c16d0(0x12c)]['soy_daw_UA']['split']();;};}else{if(!$['getdata'](_0x4c16d0(0x13c))){console[_0x4c16d0(0xe7)]('\x0a【'+$[_0x4c16d0(0x11e)]+_0x4c16d0(0x148));return;}if($[_0x4c16d0(0xf9)](_0x4c16d0(0x13c))&&$[_0x4c16d0(0xf9)](_0x4c16d0(0x13c))['indexOf']('@')>-0x1)app_soy_daw_data=$['getdata'](_0x4c16d0(0x13c))[_0x4c16d0(0xf1)]('@');else $[_0x4c16d0(0xf9)](_0x4c16d0(0x13c))&&$[_0x4c16d0(0xf9)](_0x4c16d0(0x13c))[_0x4c16d0(0xdb)]('\x0a')>-0x1?app_soy_daw_data=$[_0x4c16d0(0xf9)](_0x4c16d0(0x13c))['split']('\x0a'):app_soy_daw_data=$['getdata'](_0x4c16d0(0x13c))[_0x4c16d0(0xf1)]();;if(!$[_0x4c16d0(0xf9)]('soy_daw_UA')){if($['getdata'](_0x4c16d0(0x111))&&$[_0x4c16d0(0xf9)](_0x4c16d0(0x111))['indexOf']('@')>-0x1)app_soy_daw_UA=$['getdata'](_0x4c16d0(0x111))['split']('@');else $['getdata'](_0x4c16d0(0x111))&&$[_0x4c16d0(0xf9)](_0x4c16d0(0x111))['indexOf']('\x0a')>-0x1?app_soy_daw_UA=$[_0x4c16d0(0xf9)]('soy_daw_UA')[_0x4c16d0(0xf1)]('\x0a'):app_soy_daw_UA=$[_0x4c16d0(0xf9)](_0x4c16d0(0x111))[_0x4c16d0(0xf1)]();;}}console['log']('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+'\x20===\x0a'),console[_0x4c16d0(0xe7)](_0x4c16d0(0x12d)+app_soy_daw_data[_0x4c16d0(0x14f)]+_0x4c16d0(0x10c));for(i=0x0;i<app_soy_daw_data[_0x4c16d0(0x14f)];i++){soy_daw_data=app_soy_daw_data[i][_0x4c16d0(0xf1)]('&'),soy_awnc_token=soy_daw_data[0x0],soy_awnc_Diamonds=soy_daw_data[0x1];if(!soy_awnc_token||!soy_awnc_Diamonds){console[_0x4c16d0(0xe7)]('\x0a【'+$[_0x4c16d0(0x11e)]+'】：填写变量格式不规范');return;}soy_awnc_UA=app_soy_daw_UA[i],!soy_awnc_UA&&(soy_daw_UA=_0x4c16d0(0xe5)),$[_0x4c16d0(0x139)]=i+0x1,subTitle='',await implement();};})()[_0x5774cb(0xe0)](_0x219d09=>$[_0x5774cb(0x107)](_0x219d09))[_0x5774cb(0x116)](()=>$[_0x5774cb(0x134)]());function _0x2461(){const _0x4005e6=['video_num','code','wait','index.php/home/new/mygold?t=','index.php/home/new/taskList?t=','\x20可提现状态】:\x20网络请求失败','33138GSOkoa','\x20个账号任务】','216875skGUpH','keep-alive','application/x-www-form-urlencoded','index.php/home/new/getMailList?t=','\x20施肥】:\x20网络请求失败','random','\x20分享】:\x20分享成功','cors','】:\x20观看视频成功','indexOf','type=','index.php/home/?c=farm&a=newbuildlv&t=','\x20邮件列表】:\x20网络请求失败','10776laQnWi','catch','data','index.php/home/new/shareAction?t=','\x20账户信息除】:\x20网络请求失败','index.php/home/pay/chongScore?t=','Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','\x20铲除】:\x20土地','log','new_gold','\x20土地状态】:\x20查询失败','\x20铲除】:\x20网络请求失败','https://market.haowusong.com/guoyuan/','\x20升级房屋态】:\x20升级成功','\x20铲除】:\x20铲除土地','\x0a开始【第\x20','\x20领取邮件】:\x20','\x20施肥】:\x20施肥土地','split','round','pid=','\x20播种】:\x20播种土地','price','gold','\x20兑换现金红包】:\x20网络请求失败','\x20升级房屋】:\x20网络请求失败','getdata','index.php/home/video/videoAward?t=','index.php/home/?c=farm&a=scarify&t=','tid=','cost','\x20播种】:\x20网络请求失败','\x20收割】:\x20土地','title','index.php/home/?c=farm&a=dobuildlv&t=','\x20土地状态】:\x20网络请求失败','】:\x20','sign=sdk_','index.php/home/new/award_list?t=','num','logErr','parse','index.php/home/new/taskAward?t=','76KuiZlo','17960VQExiH','\x20个账号】===\x0a','\x20转盘抽奖】:\x20网络请求失败','application/json,\x20text/plain,\x20*/*','134282GejYZu','id=','soy_daw_UA','&sign=sdk_','floor','1529IbqqUJ','isNode','finally','\x20升级房屋】:\x20','index.php/home/?c=farm&a=fertilize&t=','\x20收割】:\x20网络请求失败','\x20播种】:\x20土地','https://market.haowusong.com','】:\x20网络请求失败','\x20转盘抽奖】:\x20','name','\x20施肥】:\x20土地','farm','---账号\x20','2PxukVq','empty','51159TyiOCm','type=1002&sign=sdk_','678006Paminv','msg','\x20邮件列表】:\x20','707woVtiT','】:\x20获得\x20','post','env','===【共\x20','id=1&sign=sdk_','\x20用户信息】:\x20网络请求失败','game_data','\x20分享】:\x20获取失败','place=','index.php/home/?c=farm&a=hervest&t=','done','server_id','money_type=1&sign=sdk_','undefined','index.php/home/new/mailReward?t=','index','market.haowusong.com','level','soy_daw_data','\x20收割】:\x20收割土地','\x20种子','\x20兑换钻石】:\x20兑换成功','\x20任务列表】:\x20网络请求失败','status','index.php/home/new/onlineAward?t=','tid','\x20用户信息】:\x20获取失败','\x20兑换现金红包】:\x20兑换成功','\x20领取邮件】:\x20网络请求失败','index.php/home/pay/withdrawList?t=','】：未填写相应变量\x20soy_daw_data','\x20可提现状态】:\x20','role_name','\x20分享】:\x20网络请求失败','\x20可提现状态】:\x20兑换成功','toString','\x20转盘抽奖】:\x20获得\x20','length','\x20在线奖励】:\x20网络请求失败','getTime','get','\x20升级状态】:\x20网络请求失败'];_0x2461=function(){return _0x4005e6;};return _0x2461();}async function implement(){const _0x3fe4b6=_0x5774cb;host=_0x3fe4b6(0xeb),console[_0x3fe4b6(0xe7)](_0x3fe4b6(0xee)+$[_0x3fe4b6(0x139)]+_0x3fe4b6(0xd1)),await soy_awnc_new(),await soy_awnc_taskList();for(let _0x158a81=0x0;_0x158a81<0x4;_0x158a81++){await soy_awnc_onlineAward(_0x158a81);}await soy_awnc_getMailList(),await soy_awnc_status(),await soy_awnc_newbuildlv();}function soy_awnc_config(){const _0x10f41c=_0x5774cb;let _0x69f969={'url':'https://v3.sdk.haowusong.com/api/red/bag/level/config?game_id=1028','headers':{'Host':'v3.sdk.haowusong.com','accept':_0x10f41c(0x10e),'user-agent':soy_awnc_UA,'token':soy_awnc_token,'origin':'https://v3.h5.haowusong.com','x-requested-with':'com.daw.timeoflove','sec-fetch-site':'same-site','sec-fetch-mode':_0x10f41c(0xd9),'sec-fetch-dest':_0x10f41c(0x123)}};return new Promise((_0x4f20ab,_0x14d7ad)=>{$['get'](_0x69f969,async(_0x47f5ff,_0x147ad9,_0x53b806)=>{const _0x4fc714=_0x3e2e;try{if(_0x47f5ff)console[_0x4fc714(0xe7)]('\x0a【'+$['name']+'---账号\x20'+$[_0x4fc714(0x139)]+_0x4fc714(0x12f)),subTitle+='\x0a【'+$['name']+_0x4fc714(0x121)+$['index']+_0x4fc714(0x12f);else{let _0x4c98ce=JSON[_0x4fc714(0x108)](_0x53b806);_0x4c98ce['code']==0xc8?(game_name=_0x4c98ce['data'][_0x4fc714(0x130)][_0x4fc714(0x14a)],game_id=_0x4c98ce['data'][_0x4fc714(0x130)]['role_id'],money_id=_0x4c98ce['data'][_0x4fc714(0x130)][_0x4fc714(0x135)],game_level=_0x4c98ce[_0x4fc714(0xe1)][_0x4fc714(0x130)][_0x4fc714(0x13b)]):console['log']('\x0a【'+$['name']+'---账号\x20'+$[_0x4fc714(0x139)]+_0x4fc714(0x144));}}catch(_0x123455){console[_0x4fc714(0xe7)](_0x123455,_0x147ad9);}finally{_0x4f20ab();}});});}function soy_awnc_getnew(){const _0x2d0446=_0x5774cb;let _0x48c556=Post_request('index.php/home/new/prize?t='+Math[_0x2d0446(0xf2)](new Date()[_0x2d0446(0xc7)]()/0x3e8)['toString'](),_0x2d0446(0x104)+soy_awnc_token);return new Promise((_0x592a60,_0x45beea)=>{const _0x423e31=_0x2d0446;$[_0x423e31(0x12b)](_0x48c556,async(_0x4fa834,_0x2dc76a,_0x56be4d)=>{const _0x3850b4=_0x423e31;try{if(_0x4fa834)console[_0x3850b4(0xe7)]('\x0a【'+$[_0x3850b4(0x11e)]+_0x3850b4(0x121)+$[_0x3850b4(0x139)]+'\x20转盘抽奖】:\x20网络请求失败'),subTitle+='\x0a【'+$['name']+_0x3850b4(0x121)+$[_0x3850b4(0x139)]+'\x20转盘抽奖】:\x20网络请求失败';else{let _0x1dc16d=JSON['parse'](_0x56be4d);_0x1dc16d[_0x3850b4(0xcb)]==0x1?console['log']('\x0a【'+$[_0x3850b4(0x11e)]+_0x3850b4(0x121)+$['index']+_0x3850b4(0x14e)+_0x1dc16d[_0x3850b4(0xe1)]['text']):console[_0x3850b4(0xe7)]('\x0a【'+$['name']+'---账号\x20'+$['index']+'\x20转盘抽奖】:\x20'+_0x1dc16d[_0x3850b4(0x127)]);}}catch(_0x167b00){console[_0x3850b4(0xe7)](_0x167b00,_0x2dc76a);}finally{_0x592a60();}});});}function _0x3e2e(_0x387dfa,_0x335ddb){const _0x246142=_0x2461();return _0x3e2e=function(_0x3e2eb2,_0x16886a){_0x3e2eb2=_0x3e2eb2-0xc7;let _0x4b7449=_0x246142[_0x3e2eb2];return _0x4b7449;},_0x3e2e(_0x387dfa,_0x335ddb);}function soy_awnc_new(){const _0x2f5460=_0x5774cb;let _0x1a982a=Post_request(_0x2f5460(0x105)+Math['round'](new Date()[_0x2f5460(0xc7)]()/0x3e8)[_0x2f5460(0x14d)](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x5b565b,_0x7c426b)=>{const _0x1b8753=_0x2f5460;$[_0x1b8753(0x12b)](_0x1a982a,async(_0x1103bc,_0x1549a4,_0x45699)=>{const _0x309ec2=_0x1b8753;try{if(_0x1103bc)console[_0x309ec2(0xe7)]('\x0a【'+$['name']+_0x309ec2(0x121)+$[_0x309ec2(0x139)]+_0x309ec2(0x10d)),subTitle+='\x0a【'+$['name']+'---账号\x20'+$[_0x309ec2(0x139)]+_0x309ec2(0x10d);else{let _0x2de843=JSON[_0x309ec2(0x108)](_0x45699);if(_0x2de843['code']==0x1){video_num=_0x2de843[_0x309ec2(0xca)],draw_num=_0x2de843['num'];if(video_num<=0x3)for(let _0x5c404b=0x0;_0x5c404b<video_num;_0x5c404b++){await soy_awnc_videoAward(_0x309ec2(0x125)+soy_awnc_token,'获取抽奖次数'),await $[_0x309ec2(0xcc)](Math[_0x309ec2(0x113)](Math[_0x309ec2(0xd7)]()*(0xbb8-0x3e8+0x3e8)+0x3e8));}for(let _0x5c5c89=0x0;_0x5c5c89<draw_num;_0x5c5c89++){await soy_awnc_getnew();}}else console[_0x309ec2(0xe7)]('\x0a【'+$['name']+_0x309ec2(0x121)+$[_0x309ec2(0x139)]+_0x309ec2(0x11d)+_0x2de843[_0x309ec2(0x127)]);}}catch(_0x25b44e){console[_0x309ec2(0xe7)](_0x25b44e,_0x1549a4);}finally{_0x5b565b();}});});}function soy_awnc_videoAward(_0x59c5a2,_0x4a80be){const _0x934dba=_0x5774cb;let _0x5a2886=Post_request(_0x934dba(0xfa)+Math[_0x934dba(0xf2)](new Date()[_0x934dba(0xc7)]()/0x3e8)[_0x934dba(0x14d)](),_0x59c5a2);return new Promise((_0x5ee5c0,_0x3692d5)=>{$['post'](_0x5a2886,async(_0x157f1a,_0x154d0c,_0x364911)=>{const _0x538149=_0x3e2e;try{if(_0x157f1a)console[_0x538149(0xe7)]('\x0a【'+$[_0x538149(0x11e)]+_0x538149(0x121)+$[_0x538149(0x139)]+'\x20'+_0x4a80be+_0x538149(0x11c)),subTitle+='\x0a【'+$[_0x538149(0x11e)]+_0x538149(0x121)+$['index']+'\x20'+_0x4a80be+'】:\x20网络请求失败';else{let _0x3f9757=JSON['parse'](_0x364911);_0x3f9757[_0x538149(0xcb)]==0x1?console[_0x538149(0xe7)]('\x0a【'+$[_0x538149(0x11e)]+_0x538149(0x121)+$[_0x538149(0x139)]+'\x20'+_0x4a80be+_0x538149(0xda)):console[_0x538149(0xe7)]('\x0a【'+$['name']+_0x538149(0x121)+$[_0x538149(0x139)]+'\x20'+_0x4a80be+_0x538149(0x103)+_0x3f9757[_0x538149(0x127)]);}}catch(_0x26b206){console['log'](_0x26b206,_0x154d0c);}finally{_0x5ee5c0();}});});}function soy_awnc_taskList(){const _0x203db8=_0x5774cb;let _0x334634=Post_request(_0x203db8(0xce)+Math[_0x203db8(0xf2)](new Date()['getTime']()/0x3e8)[_0x203db8(0x14d)](),_0x203db8(0x104)+soy_awnc_token);return new Promise((_0x5739c3,_0x38ff11)=>{$['post'](_0x334634,async(_0x9fc54f,_0xc15d6a,_0xbe742f)=>{const _0x5f5a88=_0x3e2e;try{if(_0x9fc54f)console[_0x5f5a88(0xe7)]('\x0a【'+$['name']+'---账号\x20'+$[_0x5f5a88(0x139)]+_0x5f5a88(0x140)),subTitle+='\x0a【'+$[_0x5f5a88(0x11e)]+_0x5f5a88(0x121)+$[_0x5f5a88(0x139)]+_0x5f5a88(0x140);else{let _0xcd9df2=JSON['parse'](_0xbe742f);if(_0xcd9df2[_0x5f5a88(0xcb)]==0x1)for(taskList of _0xcd9df2[_0x5f5a88(0xe1)]){task_title=taskList[_0x5f5a88(0x100)],task_status=taskList[_0x5f5a88(0x141)],task_id=taskList[_0x5f5a88(0x143)],task_now=taskList['now'],task_id==0x1&&(task_now==0x0&&await soy_awnc_share(),await soy_awnc_taskAward(task_id,task_title)),task_id==0x2&&(task_now==0x0&&await soy_awnc_new(),await soy_awnc_taskAward(task_id,task_title)),task_id==0x3&&(task_now<0x3&&await soy_awnc_videoAward('tid=3&type=1006&sign=sdk_'+soy_awnc_token,task_title),await soy_awnc_taskAward(task_id,task_title));}else console['log']('\x0a【'+$[_0x5f5a88(0x11e)]+'---账号\x20'+$[_0x5f5a88(0x139)]+'\x20任务列表】:\x20'+_0xcd9df2['msg']);}}catch(_0xbab214){console[_0x5f5a88(0xe7)](_0xbab214,_0xc15d6a);}finally{_0x5739c3();}});});}function soy_awnc_share(){const _0x42b7ad=_0x5774cb;let _0x6ddf6e=Post_request(_0x42b7ad(0xe2)+Math[_0x42b7ad(0xf2)](new Date()[_0x42b7ad(0xc7)]()/0x3e8)[_0x42b7ad(0x14d)](),_0x42b7ad(0x104)+soy_awnc_token);return new Promise((_0x1f6c8f,_0x32938c)=>{const _0x5505c6=_0x42b7ad;$[_0x5505c6(0xc8)](_0x6ddf6e,async(_0x596627,_0x1a3828,_0x1b8f6e)=>{const _0x128e44=_0x5505c6;try{if(_0x596627)console[_0x128e44(0xe7)]('\x0a【'+$[_0x128e44(0x11e)]+_0x128e44(0x121)+$[_0x128e44(0x139)]+_0x128e44(0x14b)),subTitle+='\x0a【'+$['name']+_0x128e44(0x121)+$[_0x128e44(0x139)]+_0x128e44(0x14b);else{let _0x25d7eb=JSON[_0x128e44(0x108)](_0x1b8f6e);_0x25d7eb[_0x128e44(0xcb)]==0x1?console[_0x128e44(0xe7)]('\x0a【'+$[_0x128e44(0x11e)]+'---账号\x20'+$['index']+_0x128e44(0xd8)):console[_0x128e44(0xe7)]('\x0a【'+$['name']+_0x128e44(0x121)+$[_0x128e44(0x139)]+_0x128e44(0x131));}}catch(_0x51b60c){console[_0x128e44(0xe7)](_0x51b60c,_0x1a3828);}finally{_0x1f6c8f();}});});}function soy_awnc_taskAward(_0x562331,_0x5c7b3a){const _0x1880e3=_0x5774cb;let _0x10d217=Post_request(_0x1880e3(0x109)+Math['round'](new Date()[_0x1880e3(0xc7)]()/0x3e8)[_0x1880e3(0x14d)](),_0x1880e3(0xfc)+_0x562331+_0x1880e3(0x112)+soy_awnc_token);return new Promise((_0x1cae31,_0x24ae45)=>{$['post'](_0x10d217,async(_0x321a98,_0x3cfd55,_0x5300be)=>{const _0x5722a4=_0x3e2e;try{if(_0x321a98)console['log']('\x0a【'+$['name']+_0x5722a4(0x121)+$[_0x5722a4(0x139)]+'\x20'+_0x5c7b3a+_0x5722a4(0x11c)),subTitle+='\x0a【'+$[_0x5722a4(0x11e)]+_0x5722a4(0x121)+$[_0x5722a4(0x139)]+'\x20'+_0x5c7b3a+'】:\x20网络请求失败';else{let _0x24bc74=JSON['parse'](_0x5300be);_0x24bc74[_0x5722a4(0xcb)]==0x1?console[_0x5722a4(0xe7)]('\x0a【'+$['name']+_0x5722a4(0x121)+$[_0x5722a4(0x139)]+'\x20'+_0x5c7b3a+_0x5722a4(0x12a)+_0x24bc74[_0x5722a4(0xe1)][_0x5722a4(0x106)]+_0x5722a4(0x13e)):console['log']('\x0a【'+$['name']+_0x5722a4(0x121)+$[_0x5722a4(0x139)]+'\x20'+_0x5c7b3a+_0x5722a4(0x103)+_0x24bc74['msg']);}}catch(_0x9b67c6){console[_0x5722a4(0xe7)](_0x9b67c6,_0x3cfd55);}finally{_0x1cae31();}});});}function soy_awnc_onlineAward(_0x4edb3f){const _0x3702d9=_0x5774cb;let _0x1f6290=Post_request(_0x3702d9(0x142)+Math['round'](new Date()[_0x3702d9(0xc7)]()/0x3e8)[_0x3702d9(0x14d)](),_0x3702d9(0xdc)+_0x4edb3f+_0x3702d9(0x112)+soy_awnc_token);return new Promise((_0x2b63cf,_0x207b26)=>{const _0x5df80f=_0x3702d9;$[_0x5df80f(0x12b)](_0x1f6290,async(_0x1d54d7,_0x20cd7b,_0x1019f2)=>{const _0x1d5974=_0x5df80f;try{if(_0x1d54d7)console[_0x1d5974(0xe7)]('\x0a【'+$['name']+_0x1d5974(0x121)+$['index']+_0x1d5974(0x150)),subTitle+='\x0a【'+$[_0x1d5974(0x11e)]+'---账号\x20'+$['index']+_0x1d5974(0x150);else{let _0x2d387b=JSON[_0x1d5974(0x108)](_0x1019f2);_0x2d387b[_0x1d5974(0xcb)]==0x1&&console[_0x1d5974(0xe7)]('\x0a【'+$[_0x1d5974(0x11e)]+_0x1d5974(0x121)+$[_0x1d5974(0x139)]+'\x20在线奖励】:\x20'+_0x2d387b['msg']);}}catch(_0x1394f4){console[_0x1d5974(0xe7)](_0x1394f4,_0x20cd7b);}finally{_0x2b63cf();}});});}function soy_awnc_getMailList(){const _0x463b90=_0x5774cb;let _0x1b888=Post_request(_0x463b90(0xd5)+Math[_0x463b90(0xf2)](new Date()[_0x463b90(0xc7)]()/0x3e8)['toString'](),_0x463b90(0x104)+soy_awnc_token);return new Promise((_0x514f15,_0x3f3428)=>{const _0xb5caeb=_0x463b90;$[_0xb5caeb(0x12b)](_0x1b888,async(_0x32e867,_0x27d246,_0x4178b4)=>{const _0x4f598d=_0xb5caeb;try{if(_0x32e867)console[_0x4f598d(0xe7)]('\x0a【'+$['name']+'---账号\x20'+$[_0x4f598d(0x139)]+_0x4f598d(0xde)),subTitle+='\x0a【'+$[_0x4f598d(0x11e)]+_0x4f598d(0x121)+$[_0x4f598d(0x139)]+'\x20邮件列表】:\x20网络请求失败';else{let _0x2c65c2=JSON[_0x4f598d(0x108)](_0x4178b4);if(_0x2c65c2[_0x4f598d(0xcb)]==0xc8){if(_0x2c65c2[_0x4f598d(0xe1)][_0x4f598d(0x14f)]>0x0)for(MailList of _0x2c65c2[_0x4f598d(0xe1)]){Mail_id=MailList['id'],Mail_title=MailList[_0x4f598d(0x100)],await soy_awnc_mailReward(Mail_id);}}else console[_0x4f598d(0xe7)]('\x0a【'+$[_0x4f598d(0x11e)]+_0x4f598d(0x121)+$['index']+_0x4f598d(0x128)+_0x2c65c2[_0x4f598d(0x127)]);}}catch(_0x4b29ac){console[_0x4f598d(0xe7)](_0x4b29ac,_0x27d246);}finally{_0x514f15();}});});}function soy_awnc_mailReward(_0x5d897c){const _0xee2fce=_0x5774cb;let _0x358139=Post_request(_0xee2fce(0x138)+Math['round'](new Date()[_0xee2fce(0xc7)]()/0x3e8)[_0xee2fce(0x14d)](),_0xee2fce(0x110)+_0x5d897c+'&sign=sdk_'+soy_awnc_token);return new Promise((_0x2f632c,_0x2bf93d)=>{const _0x8d360=_0xee2fce;$[_0x8d360(0x12b)](_0x358139,async(_0x4e4c96,_0x5a561a,_0x56aafc)=>{const _0xd17e5e=_0x8d360;try{if(_0x4e4c96)console[_0xd17e5e(0xe7)]('\x0a【'+$[_0xd17e5e(0x11e)]+_0xd17e5e(0x121)+$[_0xd17e5e(0x139)]+_0xd17e5e(0x146)),subTitle+='\x0a【'+$[_0xd17e5e(0x11e)]+'---账号\x20'+$['index']+_0xd17e5e(0x146);else{let _0x298c67=JSON[_0xd17e5e(0x108)](_0x56aafc);_0x298c67[_0xd17e5e(0xcb)]==0xc8?console[_0xd17e5e(0xe7)]('\x0a【'+$[_0xd17e5e(0x11e)]+_0xd17e5e(0x121)+$[_0xd17e5e(0x139)]+'\x20领取邮件】:\x20'+_0x298c67['data']):console['log']('\x0a【'+$[_0xd17e5e(0x11e)]+_0xd17e5e(0x121)+$['index']+_0xd17e5e(0xef)+_0x298c67['msg']);}}catch(_0x53de1c){console[_0xd17e5e(0xe7)](_0x53de1c,_0x5a561a);}finally{_0x2f632c();}});});}function soy_awnc_status(){const _0x38fa95=_0x5774cb;let _0xa1a7d9=Post_request('index.php/home/?c=farm&a=status&t='+Math['round'](new Date()[_0x38fa95(0xc7)]()/0x3e8)[_0x38fa95(0x14d)](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x3adb80,_0x6c598e)=>{const _0x1d2079=_0x38fa95;$[_0x1d2079(0x12b)](_0xa1a7d9,async(_0x39b5e1,_0x5abfad,_0x1f896c)=>{const _0x55a6c8=_0x1d2079;try{if(_0x39b5e1)console['log']('\x0a【'+$[_0x55a6c8(0x11e)]+_0x55a6c8(0x121)+$[_0x55a6c8(0x139)]+'\x20土地状态】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x55a6c8(0x11e)]+_0x55a6c8(0x121)+$[_0x55a6c8(0x139)]+_0x55a6c8(0x102);else{let _0x16a991=JSON[_0x55a6c8(0x108)](_0x1f896c);if(_0x16a991[_0x55a6c8(0xcb)]==0x1){let _0x2c4203=_0x16a991[_0x55a6c8(0x120)][_0x55a6c8(0x14f)];for(let _0x29f79e=0x0;_0x29f79e<_0x2c4203;_0x29f79e++){await soy_awnc_planting(_0x29f79e),await soy_awnc_fertilize(_0x29f79e),await soy_awnc_hervest(_0x29f79e);}}else console['log']('\x0a【'+$[_0x55a6c8(0x11e)]+_0x55a6c8(0x121)+$[_0x55a6c8(0x139)]+_0x55a6c8(0xe9));}}catch(_0x1b0a77){console['log'](_0x1b0a77,_0x5abfad);}finally{_0x3adb80();}});});}function soy_awnc_planting(_0xf31997){const _0x41123b=_0x5774cb;let _0xec1160=Post_request('index.php/home/?c=farm&a=planting&t='+Math[_0x41123b(0xf2)](new Date()[_0x41123b(0xc7)]()/0x3e8)['toString'](),_0x41123b(0x132)+_0xf31997+_0x41123b(0x112)+soy_awnc_token);return new Promise((_0x3c8456,_0x12c7d2)=>{const _0x1f1a17=_0x41123b;$[_0x1f1a17(0x12b)](_0xec1160,async(_0x5a15af,_0x4e61dd,_0x1649d8)=>{const _0x193793=_0x1f1a17;try{if(_0x5a15af)console[_0x193793(0xe7)]('\x0a【'+$[_0x193793(0x11e)]+_0x193793(0x121)+$[_0x193793(0x139)]+_0x193793(0xfe)),subTitle+='\x0a【'+$['name']+_0x193793(0x121)+$[_0x193793(0x139)]+'\x20播种】:\x20网络请求失败';else{let _0x4b9df1=JSON[_0x193793(0x108)](_0x1649d8);_0x4b9df1['code']==0x1?console[_0x193793(0xe7)]('\x0a【'+$[_0x193793(0x11e)]+'---账号\x20'+$['index']+_0x193793(0xf4)+(_0xf31997+0x1)+'成功'):console[_0x193793(0xe7)]('\x0a【'+$[_0x193793(0x11e)]+_0x193793(0x121)+$[_0x193793(0x139)]+_0x193793(0x11a)+(_0xf31997+0x1)+','+_0x4b9df1[_0x193793(0x127)]);}}catch(_0x3ba727){console[_0x193793(0xe7)](_0x3ba727,_0x4e61dd);}finally{_0x3c8456();}});});}function soy_awnc_hervest(_0x37f68e){const _0x6fc294=_0x5774cb;let _0x3202db=Post_request(_0x6fc294(0x133)+Math[_0x6fc294(0xf2)](new Date()[_0x6fc294(0xc7)]()/0x3e8)[_0x6fc294(0x14d)](),_0x6fc294(0xf3)+_0x37f68e+_0x6fc294(0x112)+soy_awnc_token);return new Promise((_0x53da62,_0x23a0b5)=>{const _0x3355e5=_0x6fc294;$[_0x3355e5(0x12b)](_0x3202db,async(_0x52c00e,_0x21fa65,_0x15fabf)=>{const _0x53e3f1=_0x3355e5;try{if(_0x52c00e)console[_0x53e3f1(0xe7)]('\x0a【'+$['name']+_0x53e3f1(0x121)+$['index']+_0x53e3f1(0x119)),subTitle+='\x0a【'+$[_0x53e3f1(0x11e)]+'---账号\x20'+$[_0x53e3f1(0x139)]+'\x20收割】:\x20网络请求失败';else{let _0x1ae31b=JSON[_0x53e3f1(0x108)](_0x15fabf);_0x1ae31b[_0x53e3f1(0xcb)]==0x1?(console[_0x53e3f1(0xe7)]('\x0a【'+$[_0x53e3f1(0x11e)]+_0x53e3f1(0x121)+$['index']+_0x53e3f1(0x13d)+(_0x37f68e+0x1)+'成功'),await soy_awnc_scarify(_0x37f68e)):console[_0x53e3f1(0xe7)]('\x0a【'+$[_0x53e3f1(0x11e)]+_0x53e3f1(0x121)+$[_0x53e3f1(0x139)]+_0x53e3f1(0xff)+(_0x37f68e+0x1)+','+_0x1ae31b[_0x53e3f1(0x127)]);}}catch(_0x302b1b){console[_0x53e3f1(0xe7)](_0x302b1b,_0x21fa65);}finally{_0x53da62();}});});}function soy_awnc_fertilize(_0x3ee4a0){const _0x1f1b3d=_0x5774cb;let _0x1187c4=Post_request(_0x1f1b3d(0x118)+Math[_0x1f1b3d(0xf2)](new Date()['getTime']()/0x3e8)[_0x1f1b3d(0x14d)](),_0x1f1b3d(0xf3)+_0x3ee4a0+_0x1f1b3d(0x112)+soy_awnc_token);return new Promise((_0x5a44fa,_0x35877f)=>{const _0x46452d=_0x1f1b3d;$[_0x46452d(0x12b)](_0x1187c4,async(_0x757b47,_0x4354f2,_0x111ca3)=>{const _0x1c35aa=_0x46452d;try{if(_0x757b47)console[_0x1c35aa(0xe7)]('\x0a【'+$[_0x1c35aa(0x11e)]+_0x1c35aa(0x121)+$[_0x1c35aa(0x139)]+_0x1c35aa(0xd6)),subTitle+='\x0a【'+$[_0x1c35aa(0x11e)]+_0x1c35aa(0x121)+$[_0x1c35aa(0x139)]+_0x1c35aa(0xd6);else{let _0xfb4394=JSON[_0x1c35aa(0x108)](_0x111ca3);_0xfb4394[_0x1c35aa(0xcb)]==0x1?console[_0x1c35aa(0xe7)]('\x0a【'+$[_0x1c35aa(0x11e)]+_0x1c35aa(0x121)+$['index']+_0x1c35aa(0xf0)+(_0x3ee4a0+0x1)+'成功'):console[_0x1c35aa(0xe7)]('\x0a【'+$['name']+_0x1c35aa(0x121)+$['index']+_0x1c35aa(0x11f)+(_0x3ee4a0+0x1)+','+_0xfb4394[_0x1c35aa(0x127)]);}}catch(_0x280bb4){console[_0x1c35aa(0xe7)](_0x280bb4,_0x4354f2);}finally{_0x5a44fa();}});});}function soy_awnc_scarify(_0x4b4920){const _0x21ae93=_0x5774cb;let _0x1a929a=Post_request(_0x21ae93(0xfb)+Math[_0x21ae93(0xf2)](new Date()[_0x21ae93(0xc7)]()/0x3e8)[_0x21ae93(0x14d)](),'pid='+_0x4b4920+_0x21ae93(0x112)+soy_awnc_token);return new Promise((_0x21b919,_0x17b282)=>{const _0x1f9d1c=_0x21ae93;$[_0x1f9d1c(0x12b)](_0x1a929a,async(_0x4fe040,_0x210183,_0x5b6a55)=>{const _0x2948fe=_0x1f9d1c;try{if(_0x4fe040)console[_0x2948fe(0xe7)]('\x0a【'+$[_0x2948fe(0x11e)]+'---账号\x20'+$['index']+_0x2948fe(0xea)),subTitle+='\x0a【'+$['name']+_0x2948fe(0x121)+$['index']+_0x2948fe(0xea);else{let _0xc81d6=JSON['parse'](_0x5b6a55);_0xc81d6[_0x2948fe(0xcb)]==0x1?console[_0x2948fe(0xe7)]('\x0a【'+$['name']+'---账号\x20'+$[_0x2948fe(0x139)]+_0x2948fe(0xed)+(_0x4b4920+0x1)+'成功'):console[_0x2948fe(0xe7)]('\x0a【'+$[_0x2948fe(0x11e)]+_0x2948fe(0x121)+$[_0x2948fe(0x139)]+_0x2948fe(0xe6)+(_0x4b4920+0x1)+','+_0xc81d6[_0x2948fe(0x127)]);}}catch(_0x9f6545){console[_0x2948fe(0xe7)](_0x9f6545,_0x210183);}finally{_0x21b919();}});});}function soy_awnc_mygold(){const _0xc944bb=_0x5774cb;let _0x2650d4=Post_request(_0xc944bb(0xcd)+Math[_0xc944bb(0xf2)](new Date()[_0xc944bb(0xc7)]()/0x3e8)[_0xc944bb(0x14d)](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x33d6cc,_0x3a0c28)=>{const _0x11b367=_0xc944bb;$[_0x11b367(0x12b)](_0x2650d4,async(_0x2c0c1e,_0x3e1921,_0x542da2)=>{const _0x2d4b79=_0x11b367;try{if(_0x2c0c1e)console['log']('\x0a【'+$['name']+_0x2d4b79(0x121)+$[_0x2d4b79(0x139)]+_0x2d4b79(0xe3)),subTitle+='\x0a【'+$[_0x2d4b79(0x11e)]+_0x2d4b79(0x121)+$[_0x2d4b79(0x139)]+'\x20账户信息】:\x20网络请求失败';else{let _0x1a7766=JSON['parse'](_0x542da2);if(_0x1a7766[_0x2d4b79(0xcb)]==0x1){let _0xd8e0a5=_0x1a7766[_0x2d4b79(0xf6)],_0x2511f6=_0x1a7766['diamonds'],_0x8fb2cf=_0x1a7766[_0x2d4b79(0xe8)];_0x8fb2cf>=0x1&&(soy_awnc_Diamonds==0x1&&await soy_awnc_chong()),await soy_awnc_newbuildlv(_0x2511f6);}else console[_0x2d4b79(0xe7)]('\x0a【'+$[_0x2d4b79(0x11e)]+_0x2d4b79(0x121)+$[_0x2d4b79(0x139)]+'\x20账户信息】:\x20'+_0x1a7766[_0x2d4b79(0x127)]);}}catch(_0x2a91cb){console['log'](_0x2a91cb,_0x3e1921);}finally{_0x33d6cc();}});});}function soy_awnc_chong(){const _0x48eae8=_0x5774cb;let _0x225d77=Post_request('index.php/home/pay/chong?t='+Math[_0x48eae8(0xf2)](new Date()[_0x48eae8(0xc7)]()/0x3e8)[_0x48eae8(0x14d)](),_0x48eae8(0x12e)+soy_awnc_token);return new Promise((_0x9a0e9d,_0x25254a)=>{const _0x3646ae=_0x48eae8;$[_0x3646ae(0x12b)](_0x225d77,async(_0x229fa3,_0x361a0a,_0x495390)=>{const _0x43137d=_0x3646ae;try{if(_0x229fa3)console['log']('\x0a【'+$['name']+_0x43137d(0x121)+$[_0x43137d(0x139)]+'\x20兑换钻石】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x43137d(0x11e)]+'---账号\x20'+$[_0x43137d(0x139)]+'\x20兑换钻石】:\x20网络请求失败';else{let _0x284c12=JSON[_0x43137d(0x108)](_0x495390);_0x284c12[_0x43137d(0xcb)]==0x1?console[_0x43137d(0xe7)]('\x0a【'+$[_0x43137d(0x11e)]+_0x43137d(0x121)+$[_0x43137d(0x139)]+_0x43137d(0x13f)):console[_0x43137d(0xe7)]('\x0a【'+$['name']+'---账号\x20'+$[_0x43137d(0x139)]+'\x20兑换钻石】:\x20'+_0x284c12['msg']);}}catch(_0x155c8d){console[_0x43137d(0xe7)](_0x155c8d,_0x361a0a);}finally{_0x9a0e9d();}});});}function soy_awnc_chongScore(){const _0x6aee85=_0x5774cb;let _0x532ea7=Post_request(_0x6aee85(0xe4)+Math[_0x6aee85(0xf2)](new Date()[_0x6aee85(0xc7)]()/0x3e8)['toString'](),_0x6aee85(0x12e)+soy_awnc_token);return new Promise((_0x30ad0c,_0x1d0fe6)=>{const _0x1dda0c=_0x6aee85;$[_0x1dda0c(0x12b)](_0x532ea7,async(_0x2f9e2a,_0x49cbfb,_0x5ab2b1)=>{const _0x526a51=_0x1dda0c;try{if(_0x2f9e2a)console[_0x526a51(0xe7)]('\x0a【'+$[_0x526a51(0x11e)]+_0x526a51(0x121)+$['index']+_0x526a51(0xf7)),subTitle+='\x0a【'+$[_0x526a51(0x11e)]+'---账号\x20'+$['index']+_0x526a51(0xf7);else{let _0x5c4759=JSON[_0x526a51(0x108)](_0x5ab2b1);_0x5c4759[_0x526a51(0xcb)]==0x1?console[_0x526a51(0xe7)]('\x0a【'+$[_0x526a51(0x11e)]+_0x526a51(0x121)+$[_0x526a51(0x139)]+_0x526a51(0x145)):console[_0x526a51(0xe7)]('\x0a【'+$[_0x526a51(0x11e)]+_0x526a51(0x121)+$[_0x526a51(0x139)]+'\x20兑换现金红包】:\x20'+_0x5c4759[_0x526a51(0x127)]);}}catch(_0x1cc9da){console[_0x526a51(0xe7)](_0x1cc9da,_0x49cbfb);}finally{_0x30ad0c();}});});}function soy_awnc_withdrawList(){const _0x3a966b=_0x5774cb;let _0x3335e8=Post_request(_0x3a966b(0x147)+Math[_0x3a966b(0xf2)](new Date()['getTime']()/0x3e8)[_0x3a966b(0x14d)](),_0x3a966b(0x136)+soy_awnc_token);return new Promise((_0x2937c6,_0x23678a)=>{$['post'](_0x3335e8,async(_0x58ef4b,_0x545473,_0x41dc14)=>{const _0x1dcc73=_0x3e2e;try{if(_0x58ef4b)console[_0x1dcc73(0xe7)]('\x0a【'+$[_0x1dcc73(0x11e)]+_0x1dcc73(0x121)+$[_0x1dcc73(0x139)]+_0x1dcc73(0xcf)),subTitle+='\x0a【'+$[_0x1dcc73(0x11e)]+_0x1dcc73(0x121)+$['index']+'\x20可提现状态】:\x20网络请求失败';else{let _0x41326e=JSON[_0x1dcc73(0x108)](_0x41dc14);_0x41326e[_0x1dcc73(0xcb)]==0x1?console[_0x1dcc73(0xe7)]('\x0a【'+$[_0x1dcc73(0x11e)]+_0x1dcc73(0x121)+$[_0x1dcc73(0x139)]+_0x1dcc73(0x14c)):console[_0x1dcc73(0xe7)]('\x0a【'+$[_0x1dcc73(0x11e)]+'---账号\x20'+$[_0x1dcc73(0x139)]+_0x1dcc73(0x149)+_0x41326e[_0x1dcc73(0x127)]);}}catch(_0xfca2b8){console['log'](_0xfca2b8,_0x545473);}finally{_0x2937c6();}});});}function soy_awnc_newbuildlv(_0x44db12){const _0x138f6d=_0x5774cb;let _0x2d0274=Post_request(_0x138f6d(0xdd)+Math[_0x138f6d(0xf2)](new Date()[_0x138f6d(0xc7)]()/0x3e8)[_0x138f6d(0x14d)](),'sign=sdk_'+soy_awnc_token);return new Promise((_0x1bbcee,_0x4d4243)=>{$['post'](_0x2d0274,async(_0x2a421b,_0x3fd39d,_0x30b1e7)=>{const _0x57eb9f=_0x3e2e;try{if(_0x2a421b)console[_0x57eb9f(0xe7)]('\x0a【'+$['name']+_0x57eb9f(0x121)+$['index']+_0x57eb9f(0xc9)),subTitle+='\x0a【'+$['name']+_0x57eb9f(0x121)+$[_0x57eb9f(0x139)]+_0x57eb9f(0xc9);else{let _0x2e707b=JSON[_0x57eb9f(0x108)](_0x30b1e7);_0x2e707b[_0x57eb9f(0xcb)]==0x1?_0x44db12>=_0x2e707b['data'][0x0][_0x57eb9f(0xfd)][0x0][_0x57eb9f(0xf5)]&&await soy_awnc_dobuildlv():console[_0x57eb9f(0xe7)]('\x0a【'+$[_0x57eb9f(0x11e)]+_0x57eb9f(0x121)+$[_0x57eb9f(0x139)]+'\x20升级状态】:\x20'+_0x2e707b[_0x57eb9f(0x127)]);}}catch(_0x116db6){console['log'](_0x116db6,_0x3fd39d);}finally{_0x1bbcee();}});});}function soy_awnc_dobuildlv(){const _0x236987=_0x5774cb;let _0x50721a=Post_request(_0x236987(0x101)+Math[_0x236987(0xf2)](new Date()['getTime']()/0x3e8)[_0x236987(0x14d)](),_0x236987(0x104)+soy_awnc_token);return new Promise((_0x527e2e,_0x460444)=>{const _0x4136b1=_0x236987;$[_0x4136b1(0x12b)](_0x50721a,async(_0x17efbb,_0x316426,_0x927ed1)=>{const _0x554477=_0x4136b1;try{if(_0x17efbb)console[_0x554477(0xe7)]('\x0a【'+$['name']+_0x554477(0x121)+$[_0x554477(0x139)]+_0x554477(0xf8)),subTitle+='\x0a【'+$['name']+_0x554477(0x121)+$[_0x554477(0x139)]+'\x20升级房屋】:\x20网络请求失败';else{let _0x2b0bfd=JSON[_0x554477(0x108)](_0x927ed1);_0x2b0bfd[_0x554477(0xcb)]==0x1?console[_0x554477(0xe7)]('\x0a【'+$['name']+_0x554477(0x121)+$[_0x554477(0x139)]+_0x554477(0xec)):console[_0x554477(0xe7)]('\x0a【'+$[_0x554477(0x11e)]+'---账号\x20'+$['index']+_0x554477(0x117)+_0x2b0bfd[_0x554477(0x127)]);}}catch(_0x8a8798){console[_0x554477(0xe7)](_0x8a8798,_0x316426);}finally{_0x527e2e();}});});}function Post_request(_0x405eeb,_0x3b6fe8){const _0x4018d4=_0x5774cb;return{'url':''+host+_0x405eeb,'headers':{'Host':_0x4018d4(0x13a),'Connection':_0x4018d4(0xd3),'Content-Length':_0x3b6fe8[_0x4018d4(0x14f)],'User-Agent':soy_awnc_UA,'Content-Type':_0x4018d4(0xd4),'Origin':'https://market.haowusong.com','X-Requested-With':'com.daw.timeoflove','Referer':'https://market.haowusong.com/h621/index.html?token=sdk_'+soy_awnc_token},'body':_0x3b6fe8};};function Get_request(_0xde1567){const _0x30fbc8=_0x5774cb;return{'url':''+host+_0xde1567,'headers':{'Host':_0x30fbc8(0x13a),'Connection':'keep-alive','User-Agent':soy_awnc_UA,'Content-Type':_0x30fbc8(0xd4),'Origin':_0x30fbc8(0x11b)}};};








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