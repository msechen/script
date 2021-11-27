/*

软件名称:日进斗米

项目注册地址:http://reg.msshapp.com/?userId=55405

一个做任务平台,能耗就速度耗,感觉短命来的

登录后点我的绑定微信,提现需要的

V4、青龙、V2P手动添加变量（没有重写，懒，不想，也不会写）
必要变量:

变量名  soy_rjdm_Authorization
变量值  抓包请求头的Authorization值,
记住不要 Bearer 和后面那个空格,
记住不要 Bearer 和后面那个空格,
记住不要 Bearer 和后面那个空格

多个号用 @ 或 # 或 换行 隔开

cron 37 9,19 * * *

只有那个看广告的功能,测试提交那2任务显示失败,还在找办法

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_rjdm.js
*/

const $ = new Env('日进斗米');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x462270=_0x6274;function _0x6274(_0x4d7dea,_0x582618){const _0x1bd8a2=_0x1bd8();return _0x6274=function(_0x627470,_0x2f68da){_0x627470=_0x627470-0x84;let _0x47878a=_0x1bd8a2[_0x627470];return _0x47878a;},_0x6274(_0x4d7dea,_0x582618);}(function(_0x1e90a0,_0x120bd6){const _0x4bc78c=_0x6274,_0x5ba318=_0x1e90a0();while(!![]){try{const _0x5ac847=-parseInt(_0x4bc78c(0xc4))/0x1*(-parseInt(_0x4bc78c(0xb9))/0x2)+-parseInt(_0x4bc78c(0x8f))/0x3+-parseInt(_0x4bc78c(0xce))/0x4+parseInt(_0x4bc78c(0xaa))/0x5*(-parseInt(_0x4bc78c(0xcb))/0x6)+parseInt(_0x4bc78c(0x9b))/0x7+parseInt(_0x4bc78c(0xda))/0x8+-parseInt(_0x4bc78c(0xd0))/0x9*(parseInt(_0x4bc78c(0x93))/0xa);if(_0x5ac847===_0x120bd6)break;else _0x5ba318['push'](_0x5ba318['shift']());}catch(_0x4b6ac7){_0x5ba318['push'](_0x5ba318['shift']());}}}(_0x1bd8,0x56e72));let app_soy_rjdm_Authorization=[],subTitle='';!(async()=>{const _0x357be4=_0x6274;if($['isNode']()){if(!process[_0x357be4(0x9a)][_0x357be4(0xbe)]){console[_0x357be4(0xb7)]('\x0a【'+$[_0x357be4(0xd9)]+_0x357be4(0xc6));return;}if(process[_0x357be4(0x9a)][_0x357be4(0xbe)]&&process['env'][_0x357be4(0xbe)][_0x357be4(0xae)]('@')>-0x1)app_soy_rjdm_Authorization=process[_0x357be4(0x9a)]['soy_rjdm_Authorization'][_0x357be4(0xd2)]('@');else{if(process['env'][_0x357be4(0xbe)]&&process[_0x357be4(0x9a)][_0x357be4(0xbe)][_0x357be4(0xae)]('\x0a')>-0x1)app_soy_rjdm_Authorization=process[_0x357be4(0x9a)]['soy_rjdm_Authorization'][_0x357be4(0xd2)]('\x0a');else process[_0x357be4(0x9a)][_0x357be4(0xbe)]&&process['env'][_0x357be4(0xbe)]['indexOf']('#')>-0x1?app_soy_rjdm_Authorization=process['env'][_0x357be4(0xbe)][_0x357be4(0xd2)]('#'):app_soy_rjdm_Authorization=process[_0x357be4(0x9a)][_0x357be4(0xbe)][_0x357be4(0xd2)]();};}else{if(!$[_0x357be4(0x85)](_0x357be4(0xbe))){console['log']('\x0a【'+$[_0x357be4(0xd9)]+_0x357be4(0xc6));return;}if($[_0x357be4(0x85)]('soy_rjdm_Authorization')&&$[_0x357be4(0x85)](_0x357be4(0xbe))['indexOf']('@')>-0x1)app_soy_rjdm_Authorization=$[_0x357be4(0x85)](_0x357be4(0xbe))[_0x357be4(0xd2)]('@');else{if($[_0x357be4(0x85)](_0x357be4(0xbe))&&$[_0x357be4(0x85)]('soy_rjdm_Authorization')[_0x357be4(0xae)]('\x0a')>-0x1)app_soy_rjdm_Authorization=$[_0x357be4(0x85)](_0x357be4(0xbe))[_0x357be4(0xd2)]('\x0a');else $[_0x357be4(0x85)](_0x357be4(0xbe))&&$['getdata'](_0x357be4(0xbe))[_0x357be4(0xae)]('#')>-0x1?app_soy_rjdm_Authorization=$[_0x357be4(0x85)](_0x357be4(0xbe))[_0x357be4(0xd2)]('#'):app_soy_rjdm_Authorization=$['getdata']('soy_rjdm_Authorization')[_0x357be4(0xd2)]();};}console[_0x357be4(0xb7)](_0x357be4(0x9c)+new Date(new Date()[_0x357be4(0xc0)]()+new Date()[_0x357be4(0xc9)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x357be4(0x86)),console[_0x357be4(0xb7)](_0x357be4(0x87)+app_soy_rjdm_Authorization[_0x357be4(0xd7)]+_0x357be4(0xa6));for(i=0x0;i<app_soy_rjdm_Authorization['length'];i++){soy_rjdm_Authorization=app_soy_rjdm_Authorization[i],$[_0x357be4(0xa3)]=i+0x1,await implement();};notify&&await notify['sendNotify']($['name'],subTitle);})()[_0x462270(0xb6)](_0x7da690=>$[_0x462270(0x9d)](_0x7da690))['finally'](()=>$[_0x462270(0xca)]());async function implement(){const _0x4a77f9=_0x462270;host=_0x4a77f9(0xc3),console[_0x4a77f9(0xb7)](_0x4a77f9(0x88)+$[_0x4a77f9(0xa3)]+_0x4a77f9(0xdc)),await soy_rjdm_ADwatch(),await soy_rjdm_TaskList(),await soy_rjdm_info(0x1),await soy_rjdm_info(0x0);}function soy_rjdm_TaskList(){const _0x5634e0=_0x462270;let _0x395a58=Post_request(_0x5634e0(0xc8),_0x5634e0(0xb3));return new Promise((_0x4e1a98,_0x14bc1f)=>{const _0x28e663=_0x5634e0;$[_0x28e663(0x8e)](_0x395a58,async(_0x4bb099,_0x17ecbc,_0x37bf95)=>{const _0x1bf3e0=_0x28e663;try{if(_0x4bb099)console[_0x1bf3e0(0xb7)]('\x0a【'+$[_0x1bf3e0(0xd9)]+'---账号\x20'+$[_0x1bf3e0(0xa3)]+'\x20任务列表】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x1bf3e0(0xd9)]+_0x1bf3e0(0x89)+$[_0x1bf3e0(0xa3)]+_0x1bf3e0(0xc2);else{let _0x57fc2b=JSON['parse'](_0x37bf95);if(_0x57fc2b[_0x1bf3e0(0x8a)]==0xc8){if(_0x57fc2b[_0x1bf3e0(0xb1)][_0x1bf3e0(0xd7)]==0x0)console[_0x1bf3e0(0xb7)]('\x0a【'+$[_0x1bf3e0(0xd9)]+_0x1bf3e0(0x89)+$[_0x1bf3e0(0xa3)]+_0x1bf3e0(0x91));else for(Task of _0x57fc2b['data']){let _0x2e4837=Task['task_name'],_0x2687c3=Task['task_id'];await soy_rjdm_save(id,_0x2e4837);}}else console[_0x1bf3e0(0xb7)]('\x0a【'+$[_0x1bf3e0(0xd9)]+'---账号\x20'+$[_0x1bf3e0(0xa3)]+_0x1bf3e0(0xd6)+_0x57fc2b['msg']),subTitle+='\x0a【'+$[_0x1bf3e0(0xd9)]+_0x1bf3e0(0x89)+$[_0x1bf3e0(0xa3)]+_0x1bf3e0(0xd6)+_0x57fc2b[_0x1bf3e0(0xa1)];}}catch(_0x15ee41){console[_0x1bf3e0(0xb7)](_0x15ee41,_0x17ecbc);}finally{_0x4e1a98();}});});}function soy_rjdm_save(_0x2985b7,_0x4580a9){const _0x35de12=_0x462270;let _0x2c16a9=Post_request(_0x35de12(0x8b),_0x35de12(0xcf)+_0x2985b7+'}');return new Promise((_0x1c2f45,_0x48d28a)=>{const _0x216e33=_0x35de12;$[_0x216e33(0x8e)](_0x2c16a9,async(_0x2762ba,_0xed84d0,_0x39a948)=>{const _0x18c600=_0x216e33;try{_0x2762ba&&(console[_0x18c600(0xb7)]('\x0a【'+$['name']+_0x18c600(0x89)+$[_0x18c600(0xa3)]+_0x18c600(0xcd)),subTitle+='\x0a【'+$[_0x18c600(0xd9)]+_0x18c600(0x89)+$[_0x18c600(0xa3)]+_0x18c600(0xcd));let _0xabd22b=JSON[_0x18c600(0xb5)](_0x39a948);if(_0xabd22b[_0x18c600(0x8a)]==0xc8){let _0x1d4e59=_0xabd22b['data']['task_log']['user_id'],_0x21c7e1=_0xabd22b[_0x18c600(0xb1)][_0x18c600(0x8d)][_0x18c600(0x84)];await soy_rjdm_done(_0x1d4e59,_0x21c7e1,''+_0x4580a9);}else console['log']('\x0a【'+$[_0x18c600(0xd9)]+_0x18c600(0x89)+$[_0x18c600(0xa3)]+_0x18c600(0xc5)+_0x4580a9+_0x18c600(0xcc)+_0xabd22b['msg']);}catch(_0x4aac0c){console[_0x18c600(0xb7)](_0x4aac0c,_0xed84d0);}finally{_0x1c2f45();}});});}function soy_rjdm_done(_0x1ad0c0,_0x4d832c,_0x38f027){const _0x3de875=_0x462270;_0x38f027==_0x3de875(0x94)?task_body=_0x3de875(0xb4)+_0x1ad0c0+_0x3de875(0x99)+_0x4d832c+'}':task_body=_0x3de875(0xb4)+_0x1ad0c0+_0x3de875(0xd4)+_0x4d832c+'}';let _0x3e5648=Post_request(_0x3de875(0xba),task_body);return new Promise((_0x11b70d,_0x358915)=>{const _0x4b9683=_0x3de875;$[_0x4b9683(0x8e)](_0x3e5648,async(_0x276a87,_0xaaaa4c,_0x1fb377)=>{const _0x124257=_0x4b9683;try{_0x276a87&&(console[_0x124257(0xb7)]('\x0a【'+$[_0x124257(0xd9)]+_0x124257(0x89)+$[_0x124257(0xa3)]+_0x124257(0xc7)),subTitle+='\x0a【'+$[_0x124257(0xd9)]+_0x124257(0x89)+$['index']+_0x124257(0xc7));console[_0x124257(0xb7)](_0x1fb377);let _0x36afcd=JSON[_0x124257(0xb5)](_0x1fb377);_0x36afcd['code']==0xc8?console[_0x124257(0xb7)]('\x0a【'+$[_0x124257(0xd9)]+_0x124257(0x89)+$[_0x124257(0xa3)]+'\x20提交'+_0x38f027+'任务】:\x20提交成功'):console[_0x124257(0xb7)]('\x0a【'+$[_0x124257(0xd9)]+_0x124257(0x89)+$['index']+_0x124257(0xc5)+_0x38f027+_0x124257(0xcc)+_0x36afcd['msg']);}catch(_0x19ead8){console['log'](_0x19ead8,_0xaaaa4c);}finally{_0x11b70d();}});});}function soy_rjdm_ADlist(){const _0x35ac2c=_0x462270;let _0x3051a5=Post_request(_0x35ac2c(0x8c),_0x35ac2c(0x95));return new Promise((_0x1adb4b,_0x5d09ff)=>{const _0x6692c1=_0x35ac2c;$[_0x6692c1(0x8e)](_0x3051a5,async(_0x5d770e,_0x17ab18,_0x567abc)=>{const _0x62203a=_0x6692c1;try{_0x5d770e&&(console[_0x62203a(0xb7)]('\x0a【'+$['name']+_0x62203a(0x89)+$[_0x62203a(0xa3)]+_0x62203a(0xbd)),subTitle+='\x0a【'+$[_0x62203a(0xd9)]+'---账号\x20'+$['index']+_0x62203a(0xbd));let _0x1c1b3c=JSON[_0x62203a(0xb5)](_0x567abc);if(_0x1c1b3c[_0x62203a(0x8a)]==0xc8){}else console[_0x62203a(0xb7)]('\x0a【'+$[_0x62203a(0xd9)]+'---账号\x20'+$['index']+_0x62203a(0xc1)+_0x1c1b3c['msg']);}catch(_0x1f4d8d){console[_0x62203a(0xb7)](_0x1f4d8d,_0x17ab18);}finally{_0x1adb4b();}});});}function soy_rjdm_ADwatch(){const _0x5e6aca=_0x462270;let _0x2b4680=Post_request(_0x5e6aca(0xa9),'{\x22id\x22:\x201,\x22type\x22:\x201,\x22nonce\x22:\x20\x22831638015419323\x22,\x22md5\x22:\x22FDAD4193E5FFE22ACCA71BDA84883B32\x22}');return new Promise((_0x1b407d,_0x2f4215)=>{const _0x36a8b0=_0x5e6aca;$[_0x36a8b0(0x8e)](_0x2b4680,async(_0x29d97f,_0x11d6c2,_0x1a6bcf)=>{const _0x4b795d=_0x36a8b0;try{_0x29d97f&&(console[_0x4b795d(0xb7)]('\x0a【'+$[_0x4b795d(0xd9)]+_0x4b795d(0x89)+$[_0x4b795d(0xa3)]+'\x20观看广告视频】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x4b795d(0xd9)]+_0x4b795d(0x89)+$['index']+_0x4b795d(0x97));let _0x2490a7=JSON[_0x4b795d(0xb5)](_0x1a6bcf);_0x2490a7['code']==0xc8?(console[_0x4b795d(0xb7)]('\x0a【'+$[_0x4b795d(0xd9)]+'---账号\x20'+$[_0x4b795d(0xa3)]+_0x4b795d(0xac)+_0x2490a7[_0x4b795d(0xb1)]+'\x20金币'),await $[_0x4b795d(0xb0)](Math[_0x4b795d(0xbb)](Math[_0x4b795d(0xad)]()*(0xf618-0xee48+0x3e8)+0xee48)),await soy_rjdm_ADwatch()):console[_0x4b795d(0xb7)]('\x0a【'+$[_0x4b795d(0xd9)]+'---账号\x20'+$[_0x4b795d(0xa3)]+_0x4b795d(0xa4)+_0x2490a7['msg']);}catch(_0x281740){console[_0x4b795d(0xb7)](_0x281740,_0x11d6c2);}finally{_0x1b407d();}});});}function _0x1bd8(){const _0x5548e1=['name','4871824vvUkqs','points','\x20个账号任务】','task_id','getdata','\x20===\x0a','===【共\x20','\x0a开始【第\x20','---账号\x20','code','task/log/save','third/ad/list','task_log','post','1629987mZecPE','\x20用户信息】:\x20','\x20任务列表】:\x20没有可做的任务','\x20兑换现金】:\x20兑换成功','10nSzeYp','修心每日推文','{\x22page\x22:1,\x22limit\x22:1,\x22type\x22:2}','\x20提现】:\x20网络请求失败','\x20观看广告视频】:\x20网络请求失败','{\x22cash\x22:100}','/202111261323213555csu6F.jpg\x22],\x22id\x22:','env','4347091CItzpL','\x0a===\x20脚本执行\x20-\x20北京时间：','logErr','\x20用户信息】:\x20网络请求失败','cash','user/take/cash/apply','msg','\x20提现】:\x20','index','\x20观看广告视频】:\x20','application/json;\x20charset=utf-8','\x20个账号】===\x0a','\x0a---当前余额：','user/info','third/ad/log/create','4490oyfiHi','\x0a---当前金币：','\x20观看广告视频】:\x20获得\x20','random','indexOf','\x20提现】:\x20提现提交成功','wait','data','\x0a---用户ID：','{\x22page\x22:1,\x22limit\x22:10}','{\x22imgs\x22:[\x22/pic/','parse','catch','log','okhttp/3.10.0','2758HWhKXr','task/log/done','floor','\x20兑换现金】:\x20','\x20广告视频列表】:\x20网络请求失败','soy_rjdm_Authorization','\x20用户信息】:\x20\x0a---用户微信昵称：','getTime','\x20广告视频列表】:\x20','\x20任务列表】:\x20网络请求失败','http://user.yad.yijiayouyun.com/v1/','359wxQyla','\x20提交','】：未填写相应变量\x20soy_rjdm_Authorization','\x20提交任务】:\x20网络请求失败','task/list4sub','getTimezoneOffset','done','420iWzTjF','任务】:\x20','\x20领取任务】:\x20网络请求失败','473292pxFMqm','{\x22id\x22:','5801274xtfsPl','wx_nick_name','split','user.yad.yijiayouyun.com','/20211126132458700oblPDL.jpg\x22],\x22id\x22:','\x20兑换现金】:\x20网络请求失败','\x20任务列表】:\x20','length','user'];_0x1bd8=function(){return _0x5548e1;};return _0x1bd8();}function soy_rjdm_info(_0x3f1e5c){const _0x2714e0=_0x462270;let _0x465ca5=Post_request(_0x2714e0(0xa8),'{}');return new Promise((_0xed642d,_0x53c572)=>{const _0x4e2b8a=_0x2714e0;$[_0x4e2b8a(0x8e)](_0x465ca5,async(_0x4d9639,_0xb7b581,_0x4e8055)=>{const _0x51e31a=_0x4e2b8a;try{_0x4d9639&&(console[_0x51e31a(0xb7)]('\x0a【'+$[_0x51e31a(0xd9)]+_0x51e31a(0x89)+$[_0x51e31a(0xa3)]+_0x51e31a(0x9e)),subTitle+='\x0a【'+$['name']+'---账号\x20'+$[_0x51e31a(0xa3)]+_0x51e31a(0x9e));let _0x26cb65=JSON[_0x51e31a(0xb5)](_0x4e8055);_0x26cb65[_0x51e31a(0x8a)]==0xc8?_0x3f1e5c==0x0?(console[_0x51e31a(0xb7)]('\x0a【'+$['name']+_0x51e31a(0x89)+$['index']+_0x51e31a(0xbf)+_0x26cb65[_0x51e31a(0xb1)][_0x51e31a(0xd8)][_0x51e31a(0xd1)]+_0x51e31a(0xb2)+_0x26cb65[_0x51e31a(0xb1)]['user'][_0x51e31a(0x8a)]+_0x51e31a(0xab)+_0x26cb65[_0x51e31a(0xb1)][_0x51e31a(0xdb)]+_0x51e31a(0xa7)+_0x26cb65[_0x51e31a(0xb1)]['cash']/0x64),subTitle+='\x0a【'+$[_0x51e31a(0xd9)]+'---账号\x20'+$[_0x51e31a(0xa3)]+_0x51e31a(0xbf)+_0x26cb65['data'][_0x51e31a(0xd8)]['wx_nick_name']+'\x0a---用户ID：'+_0x26cb65[_0x51e31a(0xb1)][_0x51e31a(0xd8)][_0x51e31a(0x8a)]+'\x0a---当前金币：'+_0x26cb65[_0x51e31a(0xb1)][_0x51e31a(0xdb)]+'\x0a---当前余额：'+_0x26cb65[_0x51e31a(0xb1)][_0x51e31a(0x9f)]/0x64):(_0x26cb65['data'][_0x51e31a(0xdb)]>0x64&&await soy_rjdm_exchange(_0x26cb65[_0x51e31a(0xb1)]['points']),_0x26cb65[_0x51e31a(0xb1)][_0x51e31a(0x9f)]>=0x64&&await soy_rjdm_pply()):console['log']('\x0a【'+$['name']+'---账号\x20'+$[_0x51e31a(0xa3)]+_0x51e31a(0x90)+_0x26cb65[_0x51e31a(0xa1)]);}catch(_0x5acd7c){console['log'](_0x5acd7c,_0xb7b581);}finally{_0xed642d();}});});}function soy_rjdm_exchange(_0x343ce2){let _0x53e08e=Post_request('user/points/exchange','{\x22points\x22:'+_0x343ce2+'}');return new Promise((_0x123c59,_0x224afc)=>{const _0x43ea95=_0x6274;$[_0x43ea95(0x8e)](_0x53e08e,async(_0xd95585,_0x58bf9b,_0x4133e0)=>{const _0x258100=_0x43ea95;try{_0xd95585&&(console['log']('\x0a【'+$[_0x258100(0xd9)]+_0x258100(0x89)+$['index']+_0x258100(0xd5)),subTitle+='\x0a【'+$[_0x258100(0xd9)]+_0x258100(0x89)+$[_0x258100(0xa3)]+_0x258100(0xd5));let _0x2a81fe=JSON[_0x258100(0xb5)](_0x4133e0);_0x2a81fe[_0x258100(0x8a)]==0xc8?(console[_0x258100(0xb7)]('\x0a【'+$[_0x258100(0xd9)]+_0x258100(0x89)+$[_0x258100(0xa3)]+_0x258100(0x92)),await soy_rjdm_info(0x1)):console[_0x258100(0xb7)]('\x0a【'+$[_0x258100(0xd9)]+_0x258100(0x89)+$['index']+_0x258100(0xbc)+_0x2a81fe[_0x258100(0xa1)]);}catch(_0x1b3fcf){console[_0x258100(0xb7)](_0x1b3fcf,_0x58bf9b);}finally{_0x123c59();}});});}function soy_rjdm_pply(_0x41aeea){const _0x1f91cf=_0x462270;let _0x49e756=Post_request(_0x1f91cf(0xa0),_0x1f91cf(0x98));return new Promise((_0x4fcdca,_0x511885)=>{$['post'](_0x49e756,async(_0x5d6bb6,_0x2f98aa,_0x566d1c)=>{const _0x4a8734=_0x6274;try{_0x5d6bb6&&(console['log']('\x0a【'+$[_0x4a8734(0xd9)]+_0x4a8734(0x89)+$[_0x4a8734(0xa3)]+'\x20提现】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x4a8734(0xd9)]+_0x4a8734(0x89)+$['index']+_0x4a8734(0x96));let _0x1bdba3=JSON[_0x4a8734(0xb5)](_0x566d1c);_0x1bdba3[_0x4a8734(0x8a)]==0xc8?console[_0x4a8734(0xb7)]('\x0a【'+$[_0x4a8734(0xd9)]+_0x4a8734(0x89)+$['index']+_0x4a8734(0xaf)):console[_0x4a8734(0xb7)]('\x0a【'+$[_0x4a8734(0xd9)]+_0x4a8734(0x89)+$['index']+_0x4a8734(0xa2)+_0x1bdba3[_0x4a8734(0xa1)]);}catch(_0xf24a09){console[_0x4a8734(0xb7)](_0xf24a09,_0x2f98aa);}finally{_0x4fcdca();}});});}function Post_request(_0x5ca175,_0x28d7c5){const _0x137774=_0x462270;return{'url':''+host+_0x5ca175,'headers':{'Authorization':'Bearer\x20'+soy_rjdm_Authorization,'Content-Type':_0x137774(0xa5),'Content-Length':_0x28d7c5[_0x137774(0xd7)],'Host':_0x137774(0xd3),'Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':_0x137774(0xb8)},'body':_0x28d7c5};};function Get_request(_0x150401){return{'url':_0x150401,'headers':soy_rjdm_headers};};


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