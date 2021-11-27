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

const _0x54422e=_0x3b77;(function(_0x4e57eb,_0x129598){const _0x23c728=_0x3b77,_0xca481=_0x4e57eb();while(!![]){try{const _0x5ee6b1=-parseInt(_0x23c728(0x205))/0x1*(-parseInt(_0x23c728(0x1e1))/0x2)+parseInt(_0x23c728(0x1e8))/0x3+-parseInt(_0x23c728(0x1e0))/0x4+-parseInt(_0x23c728(0x1d3))/0x5*(-parseInt(_0x23c728(0x1e4))/0x6)+-parseInt(_0x23c728(0x1d8))/0x7+parseInt(_0x23c728(0x1ed))/0x8+-parseInt(_0x23c728(0x1dc))/0x9;if(_0x5ee6b1===_0x129598)break;else _0xca481['push'](_0xca481['shift']());}catch(_0x223ba1){_0xca481['push'](_0xca481['shift']());}}}(_0x40ea,0x34d88));let app_soy_rjdm_Authorization=[],subTitle='';!(async()=>{const _0x1c3bbe=_0x3b77;if($[_0x1c3bbe(0x1bf)]()){if(!process[_0x1c3bbe(0x1d0)]['soy_rjdm_Authorization']){console[_0x1c3bbe(0x1c7)]('\x0a【'+$[_0x1c3bbe(0x1f7)]+_0x1c3bbe(0x207));return;}if(process[_0x1c3bbe(0x1d0)][_0x1c3bbe(0x1be)]&&process[_0x1c3bbe(0x1d0)][_0x1c3bbe(0x1be)]['indexOf']('@')>-0x1)app_soy_rjdm_Authorization=process[_0x1c3bbe(0x1d0)]['soy_rjdm_Authorization'][_0x1c3bbe(0x1dd)]('@');else{if(process[_0x1c3bbe(0x1d0)]['soy_rjdm_Authorization']&&process[_0x1c3bbe(0x1d0)][_0x1c3bbe(0x1be)][_0x1c3bbe(0x1f1)]('\x0a')>-0x1)app_soy_rjdm_Authorization=process[_0x1c3bbe(0x1d0)]['soy_rjdm_Authorization'][_0x1c3bbe(0x1dd)]('\x0a');else process['env'][_0x1c3bbe(0x1be)]&&process['env'][_0x1c3bbe(0x1be)]['indexOf']('#')>-0x1?app_soy_rjdm_Authorization=process['env']['soy_rjdm_Authorization']['split']('#'):app_soy_rjdm_Authorization=process[_0x1c3bbe(0x1d0)]['soy_rjdm_Authorization'][_0x1c3bbe(0x1dd)]();};}else{if(!$['getdata'](_0x1c3bbe(0x1be))){console['log']('\x0a【'+$[_0x1c3bbe(0x1f7)]+'】：未填写相应变量\x20soy_rjdm_Authorization');return;}if($['getdata']('soy_rjdm_Authorization')&&$[_0x1c3bbe(0x1ff)](_0x1c3bbe(0x1be))['indexOf']('@')>-0x1)app_soy_rjdm_Authorization=$['getdata'](_0x1c3bbe(0x1be))[_0x1c3bbe(0x1dd)]('@');else{if($[_0x1c3bbe(0x1ff)](_0x1c3bbe(0x1be))&&$[_0x1c3bbe(0x1ff)](_0x1c3bbe(0x1be))[_0x1c3bbe(0x1f1)]('\x0a')>-0x1)app_soy_rjdm_Authorization=$[_0x1c3bbe(0x1ff)](_0x1c3bbe(0x1be))[_0x1c3bbe(0x1dd)]('\x0a');else $[_0x1c3bbe(0x1ff)]('soy_rjdm_Authorization')&&$[_0x1c3bbe(0x1ff)]('soy_rjdm_Authorization')[_0x1c3bbe(0x1f1)]('#')>-0x1?app_soy_rjdm_Authorization=$[_0x1c3bbe(0x1ff)]('soy_rjdm_Authorization')['split']('#'):app_soy_rjdm_Authorization=$[_0x1c3bbe(0x1ff)](_0x1c3bbe(0x1be))[_0x1c3bbe(0x1dd)]();};}console[_0x1c3bbe(0x1c7)](_0x1c3bbe(0x1ea)+new Date(new Date()[_0x1c3bbe(0x1fd)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1c3bbe(0x1c1)]()+_0x1c3bbe(0x1c0)),console[_0x1c3bbe(0x1c7)](_0x1c3bbe(0x1ba)+app_soy_rjdm_Authorization[_0x1c3bbe(0x1b6)]+_0x1c3bbe(0x1bc));for(i=0x0;i<app_soy_rjdm_Authorization[_0x1c3bbe(0x1b6)];i++){soy_rjdm_Authorization=app_soy_rjdm_Authorization[i],$['index']=i+0x1,await implement();};notify&&await notify[_0x1c3bbe(0x1cb)]($[_0x1c3bbe(0x1f7)],subTitle);})()[_0x54422e(0x1b3)](_0x140601=>$[_0x54422e(0x1c8)](_0x140601))[_0x54422e(0x1de)](()=>$[_0x54422e(0x1ec)]());async function implement(){const _0x41c26f=_0x54422e;host=_0x41c26f(0x1e5),console[_0x41c26f(0x1c7)](_0x41c26f(0x1da)+$[_0x41c26f(0x1df)]+'\x20个账号任务】'),await soy_rjdm_ADwatch(),await soy_rjdm_TaskList(),await soy_rjdm_info(0x1),await soy_rjdm_info(0x0);}function soy_rjdm_TaskList(){const _0x582950=_0x54422e;let _0x77a834=Post_request(_0x582950(0x1cf),_0x582950(0x1fc));return new Promise((_0xdbf2d3,_0x5c079a)=>{const _0x48976c=_0x582950;$[_0x48976c(0x1f3)](_0x77a834,async(_0xdd68d7,_0x43e98c,_0x54fca7)=>{const _0x10e909=_0x48976c;try{if(_0xdd68d7)console['log']('\x0a【'+$[_0x10e909(0x1f7)]+_0x10e909(0x1bb)+$['index']+_0x10e909(0x1f6)),subTitle+='\x0a【'+$[_0x10e909(0x1f7)]+_0x10e909(0x1bb)+$[_0x10e909(0x1df)]+_0x10e909(0x1f6);else{let _0x1fa37=JSON[_0x10e909(0x1f4)](_0x54fca7);if(_0x1fa37[_0x10e909(0x1c2)]==0xc8){if(_0x1fa37[_0x10e909(0x204)][_0x10e909(0x1b6)]==0x0)console['log']('\x0a【'+$['name']+_0x10e909(0x1bb)+$[_0x10e909(0x1df)]+'\x20任务列表】:\x20没有可做的任务');else for(Task of _0x1fa37['data']){let _0xbc300e=Task[_0x10e909(0x1bd)],_0x9355be=Task[_0x10e909(0x1ee)];await soy_rjdm_save(_0x9355be,_0xbc300e);}}else console['log']('\x0a【'+$['name']+_0x10e909(0x1bb)+$[_0x10e909(0x1df)]+_0x10e909(0x1c9)+_0x1fa37['msg']),subTitle+='\x0a【'+$['name']+_0x10e909(0x1bb)+$[_0x10e909(0x1df)]+'\x20任务列表】:\x20'+_0x1fa37[_0x10e909(0x1e2)];}}catch(_0x42e7b0){console[_0x10e909(0x1c7)](_0x42e7b0,_0x43e98c);}finally{_0xdbf2d3();}});});}function soy_rjdm_save(_0x159969,_0x59a1c2){const _0x4e1420=_0x54422e;let _0x2cabcd=Post_request(_0x4e1420(0x1e6),_0x4e1420(0x1d1)+_0x159969+'}');return new Promise((_0x46b8fb,_0x8a0069)=>{const _0x19af67=_0x4e1420;$[_0x19af67(0x1f3)](_0x2cabcd,async(_0x2bce7c,_0x5818e5,_0x2e28a1)=>{const _0x46cab4=_0x19af67;try{_0x2bce7c&&(console[_0x46cab4(0x1c7)]('\x0a【'+$[_0x46cab4(0x1f7)]+_0x46cab4(0x1bb)+$[_0x46cab4(0x1df)]+_0x46cab4(0x1c6)),subTitle+='\x0a【'+$[_0x46cab4(0x1f7)]+'---账号\x20'+$['index']+_0x46cab4(0x1c6));let _0x2a1740=JSON[_0x46cab4(0x1f4)](_0x2e28a1);if(_0x2a1740['code']==0xc8){let _0x3fe59b=_0x2a1740['data'][_0x46cab4(0x1e3)][_0x46cab4(0x1b9)],_0x33892a=_0x2a1740[_0x46cab4(0x204)]['task_log']['task_id'];await soy_rjdm_done(_0x3fe59b,_0x33892a,''+_0x59a1c2);}else console[_0x46cab4(0x1c7)]('\x0a【'+$[_0x46cab4(0x1f7)]+_0x46cab4(0x1bb)+$[_0x46cab4(0x1df)]+_0x46cab4(0x1c5)+_0x59a1c2+_0x46cab4(0x202)+_0x2a1740[_0x46cab4(0x1e2)]);}catch(_0x57285d){console[_0x46cab4(0x1c7)](_0x57285d,_0x5818e5);}finally{_0x46b8fb();}});});}function soy_rjdm_done(_0x37991e,_0x3993f5,_0x25d8af){const _0x5d4589=_0x54422e;_0x25d8af=='修心每日推文'?task_body=_0x5d4589(0x1b2)+_0x37991e+'/202111261323213555csu6F.jpg\x22],\x22id\x22:'+_0x3993f5+'}':task_body=_0x5d4589(0x1b2)+_0x37991e+_0x5d4589(0x1c4)+_0x3993f5+'}';let _0x17d500=Post_request(_0x5d4589(0x1b8),task_body);return new Promise((_0x1ee6ff,_0x2f17db)=>{const _0x203205=_0x5d4589;$[_0x203205(0x1f3)](_0x17d500,async(_0x3c1cad,_0x5afb68,_0x40587b)=>{const _0x159ab8=_0x203205;try{_0x3c1cad&&(console[_0x159ab8(0x1c7)]('\x0a【'+$[_0x159ab8(0x1f7)]+'---账号\x20'+$[_0x159ab8(0x1df)]+'\x20提交任务】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x159ab8(0x1f7)]+_0x159ab8(0x1bb)+$['index']+'\x20提交任务】:\x20网络请求失败');let _0x5df52d=JSON[_0x159ab8(0x1f4)](_0x40587b);_0x5df52d[_0x159ab8(0x1c2)]==0xc8?console['log']('\x0a【'+$[_0x159ab8(0x1f7)]+_0x159ab8(0x1bb)+$[_0x159ab8(0x1df)]+'\x20提交'+_0x25d8af+_0x159ab8(0x1cc)):console[_0x159ab8(0x1c7)]('\x0a【'+$['name']+_0x159ab8(0x1bb)+$[_0x159ab8(0x1df)]+_0x159ab8(0x1c5)+_0x25d8af+_0x159ab8(0x202)+_0x5df52d['msg']);}catch(_0x52ea5d){console['log'](_0x52ea5d,_0x5afb68);}finally{_0x1ee6ff();}});});}function soy_rjdm_ADlist(){const _0x4b70a6=_0x54422e;let _0x3764b7=Post_request(_0x4b70a6(0x1c3),_0x4b70a6(0x1d4));return new Promise((_0x283bdb,_0x1e49d7)=>{const _0x5eca66=_0x4b70a6;$[_0x5eca66(0x1f3)](_0x3764b7,async(_0x25481d,_0x3cb88b,_0x3d3306)=>{const _0x205fbd=_0x5eca66;try{_0x25481d&&(console[_0x205fbd(0x1c7)]('\x0a【'+$[_0x205fbd(0x1f7)]+_0x205fbd(0x1bb)+$['index']+_0x205fbd(0x1e9)),subTitle+='\x0a【'+$[_0x205fbd(0x1f7)]+_0x205fbd(0x1bb)+$[_0x205fbd(0x1df)]+_0x205fbd(0x1e9));let _0x7dcfa3=JSON[_0x205fbd(0x1f4)](_0x3d3306);if(_0x7dcfa3[_0x205fbd(0x1c2)]==0xc8){}else console[_0x205fbd(0x1c7)]('\x0a【'+$[_0x205fbd(0x1f7)]+_0x205fbd(0x1bb)+$[_0x205fbd(0x1df)]+'\x20广告视频列表】:\x20'+_0x7dcfa3[_0x205fbd(0x1e2)]);}catch(_0x1cad1d){console[_0x205fbd(0x1c7)](_0x1cad1d,_0x3cb88b);}finally{_0x283bdb();}});});}function soy_rjdm_ADwatch(){const _0x382a28=_0x54422e;let _0x2bdbbe=Post_request('third/ad/log/create',_0x382a28(0x200));return new Promise((_0x3fbf80,_0x3c9d0f)=>{const _0x138762=_0x382a28;$[_0x138762(0x1f3)](_0x2bdbbe,async(_0x1a0c5d,_0x1a8e45,_0x4ae2ad)=>{const _0x3092e4=_0x138762;try{_0x1a0c5d&&(console[_0x3092e4(0x1c7)]('\x0a【'+$[_0x3092e4(0x1f7)]+'---账号\x20'+$[_0x3092e4(0x1df)]+'\x20观看广告视频】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x3092e4(0x1f7)]+'---账号\x20'+$[_0x3092e4(0x1df)]+_0x3092e4(0x1b5));let _0x5900f6=JSON[_0x3092e4(0x1f4)](_0x4ae2ad);_0x5900f6[_0x3092e4(0x1c2)]==0xc8?(console[_0x3092e4(0x1c7)]('\x0a【'+$['name']+_0x3092e4(0x1bb)+$[_0x3092e4(0x1df)]+_0x3092e4(0x206)+_0x5900f6[_0x3092e4(0x204)]+_0x3092e4(0x1b4)),await $['wait'](Math['floor'](Math[_0x3092e4(0x1d5)]()*(0xf618-0xee48+0x3e8)+0xee48)),await soy_rjdm_ADwatch()):console['log']('\x0a【'+$[_0x3092e4(0x1f7)]+_0x3092e4(0x1bb)+$[_0x3092e4(0x1df)]+'\x20观看广告视频】:\x20'+_0x5900f6['msg']);}catch(_0x5a8d90){console[_0x3092e4(0x1c7)](_0x5a8d90,_0x1a8e45);}finally{_0x3fbf80();}});});}function soy_rjdm_info(_0x1f912b){let _0x115931=Post_request('user/info','{}');return new Promise((_0xbece4f,_0x340016)=>{const _0x47bda9=_0x3b77;$[_0x47bda9(0x1f3)](_0x115931,async(_0x5f5376,_0x4604c8,_0x191abc)=>{const _0x591add=_0x47bda9;try{_0x5f5376&&(console[_0x591add(0x1c7)]('\x0a【'+$[_0x591add(0x1f7)]+_0x591add(0x1bb)+$[_0x591add(0x1df)]+'\x20用户信息】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x591add(0x1f7)]+_0x591add(0x1bb)+$[_0x591add(0x1df)]+'\x20用户信息】:\x20网络请求失败');let _0x5601a2=JSON[_0x591add(0x1f4)](_0x191abc);_0x5601a2['code']==0xc8?_0x1f912b==0x0?(console[_0x591add(0x1c7)]('\x0a【'+$[_0x591add(0x1f7)]+_0x591add(0x1bb)+$['index']+_0x591add(0x203)+_0x5601a2[_0x591add(0x204)]['user'][_0x591add(0x1cd)]+_0x591add(0x1ca)+_0x5601a2['data'][_0x591add(0x1fa)][_0x591add(0x1c2)]+_0x591add(0x1fe)+_0x5601a2[_0x591add(0x204)][_0x591add(0x1ef)]+_0x591add(0x1d2)+_0x5601a2['data'][_0x591add(0x1d7)]/0x64),subTitle+='\x0a【'+$['name']+_0x591add(0x1bb)+$[_0x591add(0x1df)]+_0x591add(0x203)+_0x5601a2['data'][_0x591add(0x1fa)]['wx_nick_name']+_0x591add(0x1ca)+_0x5601a2[_0x591add(0x204)][_0x591add(0x1fa)][_0x591add(0x1c2)]+_0x591add(0x1fe)+_0x5601a2[_0x591add(0x204)]['points']+'\x0a---当前余额：'+_0x5601a2[_0x591add(0x204)][_0x591add(0x1d7)]/0x64):(_0x5601a2['data'][_0x591add(0x1ef)]>0x64&&await soy_rjdm_exchange(_0x5601a2[_0x591add(0x204)][_0x591add(0x1ef)]),_0x5601a2[_0x591add(0x204)][_0x591add(0x1d7)]>=0x64&&await soy_rjdm_pply()):console['log']('\x0a【'+$[_0x591add(0x1f7)]+_0x591add(0x1bb)+$[_0x591add(0x1df)]+'\x20用户信息】:\x20'+_0x5601a2[_0x591add(0x1e2)]);}catch(_0x3404b4){console[_0x591add(0x1c7)](_0x3404b4,_0x4604c8);}finally{_0xbece4f();}});});}function _0x3b77(_0x228280,_0x3f31d2){const _0x40ea21=_0x40ea();return _0x3b77=function(_0x3b77e9,_0x1b79fc){_0x3b77e9=_0x3b77e9-0x1b2;let _0x3167ac=_0x40ea21[_0x3b77e9];return _0x3167ac;},_0x3b77(_0x228280,_0x3f31d2);}function soy_rjdm_exchange(_0x174a00){const _0x38f4fd=_0x54422e;let _0x4a2071=Post_request(_0x38f4fd(0x1fb),_0x38f4fd(0x201)+_0x174a00+'}');return new Promise((_0x113b2e,_0x4b5649)=>{const _0x50f610=_0x38f4fd;$[_0x50f610(0x1f3)](_0x4a2071,async(_0x1e0292,_0x43d51b,_0x48f52e)=>{const _0x17f31a=_0x50f610;try{_0x1e0292&&(console['log']('\x0a【'+$[_0x17f31a(0x1f7)]+'---账号\x20'+$['index']+_0x17f31a(0x1db)),subTitle+='\x0a【'+$[_0x17f31a(0x1f7)]+_0x17f31a(0x1bb)+$['index']+'\x20兑换现金】:\x20网络请求失败');let _0x170cf6=JSON['parse'](_0x48f52e);_0x170cf6[_0x17f31a(0x1c2)]==0xc8?(console[_0x17f31a(0x1c7)]('\x0a【'+$['name']+_0x17f31a(0x1bb)+$[_0x17f31a(0x1df)]+_0x17f31a(0x1e7)),await soy_rjdm_info(0x1)):console[_0x17f31a(0x1c7)]('\x0a【'+$[_0x17f31a(0x1f7)]+_0x17f31a(0x1bb)+$[_0x17f31a(0x1df)]+_0x17f31a(0x1f9)+_0x170cf6['msg']);}catch(_0x50565c){console['log'](_0x50565c,_0x43d51b);}finally{_0x113b2e();}});});}function soy_rjdm_pply(_0x57aa1b){const _0x1873a8=_0x54422e;let _0x2910ed=Post_request(_0x1873a8(0x1f5),_0x1873a8(0x1d9));return new Promise((_0x776b27,_0x3adb3c)=>{const _0x2ef2a7=_0x1873a8;$[_0x2ef2a7(0x1f3)](_0x2910ed,async(_0x5e8143,_0x3c78e1,_0xe0214b)=>{const _0x21f31c=_0x2ef2a7;try{_0x5e8143&&(console[_0x21f31c(0x1c7)]('\x0a【'+$[_0x21f31c(0x1f7)]+_0x21f31c(0x1bb)+$[_0x21f31c(0x1df)]+_0x21f31c(0x1eb)),subTitle+='\x0a【'+$[_0x21f31c(0x1f7)]+_0x21f31c(0x1bb)+$[_0x21f31c(0x1df)]+_0x21f31c(0x1eb));let _0x43dd3e=JSON['parse'](_0xe0214b);_0x43dd3e[_0x21f31c(0x1c2)]==0xc8?console[_0x21f31c(0x1c7)]('\x0a【'+$[_0x21f31c(0x1f7)]+_0x21f31c(0x1bb)+$[_0x21f31c(0x1df)]+_0x21f31c(0x1f0)):console[_0x21f31c(0x1c7)]('\x0a【'+$['name']+_0x21f31c(0x1bb)+$[_0x21f31c(0x1df)]+'\x20提现】:\x20'+_0x43dd3e['msg']);}catch(_0x2938a4){console[_0x21f31c(0x1c7)](_0x2938a4,_0x3c78e1);}finally{_0x776b27();}});});}function Post_request(_0x5244eb,_0x427b72){const _0x3d5c30=_0x54422e;return{'url':''+host+_0x5244eb,'headers':{'Authorization':'Bearer\x20'+soy_rjdm_Authorization,'Content-Type':_0x3d5c30(0x1ce),'Content-Length':_0x427b72[_0x3d5c30(0x1b6)],'Host':_0x3d5c30(0x1b7),'Connection':_0x3d5c30(0x1f8),'Accept-Encoding':_0x3d5c30(0x1f2),'User-Agent':_0x3d5c30(0x1d6)},'body':_0x427b72};};function Get_request(_0xe79cc9){return{'url':_0xe79cc9,'headers':soy_rjdm_headers};};function _0x40ea(){const _0x22c0cb=['\x0a---用户ID：','sendNotify','任务】:\x20提交成功','wx_nick_name','application/json;\x20charset=utf-8','task/list4sub','env','{\x22id\x22:','\x0a---当前余额：','2415tQemAj','{\x22page\x22:1,\x22limit\x22:1,\x22type\x22:2}','random','okhttp/3.10.0','cash','2175152QHljuH','{\x22cash\x22:100}','\x0a开始【第\x20','\x20兑换现金】:\x20网络请求失败','3034674mMWzNt','split','finally','index','746432fEzTUk','3580tGpQZY','msg','task_log','4098kMWpHE','http://user.yad.yijiayouyun.com/v1/','task/log/save','\x20兑换现金】:\x20兑换成功','883692OTfTJZ','\x20广告视频列表】:\x20网络请求失败','\x0a===\x20脚本执行\x20-\x20北京时间：','\x20提现】:\x20网络请求失败','done','2352584eTEsUr','task_id','points','\x20提现】:\x20提现提交成功','indexOf','gzip','post','parse','user/take/cash/apply','\x20任务列表】:\x20网络请求失败','name','Keep-Alive','\x20兑换现金】:\x20','user','user/points/exchange','{\x22page\x22:1,\x22limit\x22:10}','getTime','\x0a---当前金币：','getdata','{\x22id\x22:\x201,\x22type\x22:\x201,\x22nonce\x22:\x20\x22831638015419323\x22,\x22md5\x22:\x22FDAD4193E5FFE22ACCA71BDA84883B32\x22}','{\x22points\x22:','任务】:\x20','\x20用户信息】:\x20\x0a---用户微信昵称：','data','74psONlW','\x20观看广告视频】:\x20获得\x20','】：未填写相应变量\x20soy_rjdm_Authorization','{\x22imgs\x22:[\x22/pic/','catch','\x20金币','\x20观看广告视频】:\x20网络请求失败','length','user.yad.yijiayouyun.com','task/log/done','user_id','===【共\x20','---账号\x20','\x20个账号】===\x0a','task_name','soy_rjdm_Authorization','isNode','\x20===\x0a','toLocaleString','code','third/ad/list','/20211126132458700oblPDL.jpg\x22],\x22id\x22:','\x20提交','\x20领取任务】:\x20网络请求失败','log','logErr','\x20任务列表】:\x20'];_0x40ea=function(){return _0x22c0cb;};return _0x40ea();}


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