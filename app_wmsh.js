/*

软件名称:完美生活

一个分红模式,分红数量有限,
需要支付宝授权

项目注册地址:http://reg.msshapp.com/?userId=55405

别人说尽量去个人中心绑定收款支付宝
限量封号,没啥用感觉,不过可以卖积分需要的人
你可以可以问问别人q653307545

必要变量:

变量名 soy_wmsh_data
变量值 抓包请求头token值&微信号&图片连接

(任务六需要提交微信和分享连接)

进app,首页,美事积分抓取数据(好像没有根证书抓包没网络,自行测试),v2p重写不写了,懒

多个号用 @ 或 # 或 换行 隔开

cron 35 9,19 * * *

*/


const $ = new Env('完美生活');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x24e5ca=_0xbb92,_0x4c1a4b=_0x1ea2,_0x23ade4=_0xc95b;function _0x1535(){const _0x3b8344=['zCkQWRVcOG','yxbWBgLJyxrPB24VANnVBG','ioEuQoAiT+s/OEAbR+oaKtOG572r57UC6k+35Rgc5AsX6lsL','W4tdPSos6lwI5y+vtW','CgfYC2u','Cg9ZDa','\x20申请任务】:\x20今天任务已申请','WQlcTLFdR8kl','app.ztxzz.cn','---账号\x20','WRhcIHu','split','zw52','WRJcQf/dO8kh','20130coWrIT','BMfTzq','】:\x20','i23dREI2SUwpP2S','nZDz','44gG77225P+o5Agf5ywN55MA5BQ75y2n6yEXW7KKc8kEW4BdP8kwjSk9WRPxb8kcBW','2106792Qfcjcj','indexOf','Bg9N','y2f0y2G','W5S3W40','WOFcQSksiq','ios4QUI0PUwpT+oaKt09pqO','ioApKos6Pa','index','ls0T6lsM5y+3ia','W6RdUSkEj0C','\x20用户信息】:\x20','WP3cLCkqW5tdG8kKWPrt','W4JdG8kt','W74eWO3OTRdLJi3cKW','y29Kzq','W5VdUSopCHvwWPjcjNGQW7VdPq','Keep-Alive','xoApJ+s7R+s4KUwjNoocNCkKWQtNV7ZNU7lORzFMSAlLPzROTBK','sc59W5RdImk7W6JdISoav8oYsa','4065396qFJQVu','CCo5lbP+hKRcOCk3WRb8W656jSo/WOnX','cJ09psdOHjRMNkZMIAFOOyWGlsdLJjFKUQZML7BPL7tVVjO','WR7cQ1BdUmk2WRqdf8oQW6LQW6i9W5DOW5WoWQzkWPddSry','(自行翻译)','isNode','EmkKWQ/cMmkaW47cKmk4W53cHSk+WRldJW','q8oUy8okkmkCWRKyuLNdVadcVW','data','CoAoQ+s6UEs7V+wlJUobU8kvcEE8Q+E7UEITP+AXM+wMOoI3La','WPJdH1VdNSoGh8oGWQtcO0qIasy','uHJdN8oc','C3bSAxq','oIvZWOqDW5RdIW','b8k1W5TMW5jQW64','WOxcRSkri1yh','feLyWQy','ioEuS+IVT+s7U+wkOEoaKtOG572r57UC6k+35Rgc5AsX6lsL','env','WR94W4JcTq','ECkNWPJOTy3LJzZdMa','W4hdOCo6EstdKLlcHSkeW6SVkSk4ua','p8ofjq','code','koAoHEs6RW','zgf0yq','dmk/W4G','W71NzIRdGG','nmopnSksW47cNb8','Aw5KzxHpzG','oKOjWOBcKG','floor','ioEuS+IVT+s7U+wkOEoaKtOG55sZ6k+35lU75yQH5OIq5yQF','AcNcRSo1FcDR','W4/cSCoN','aN7dTu1ieCkO','F8oYpcTV','kcHsBSo/','done','tNtdR1C7','W7tMJltKU4C','ychcRCoX','soy_wmsh_data','parse','mJaXoty0mg1qr3bOva','WR3cIGCWyW','c3RdReW','getdata','W4ldIaBcImkLWPfecCk/WQVcRCknza','BgvUz3rO','usableIntegral','name','nmoqk8kg','\x20申请任务】:\x20','sZbS','7rWvEmA','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv93BxnOx2rHDge','WOjsAri','xcldPwTrc8k6lG','WONdRCoEidWLo8kidSoMv1hcMW','W4dcMaRcGSkU','z2v0zgf0yq','\x20任务列表】:\x20网络请求失败','WQ3dOxW','jWVcO8oJ','2019640mPGphT','W5RcMrFcUmkHqCkRWOxcLfOunH0','wUEuGoAiGUs8OUAbQoodQ3ze','BxnN','44croIa','xh1UW7VdTCkQdCorhCosDmkOhCopvCkHW7Tpir0','C295x3DTC2HFzgf0yq','W5xdONvmcHOB','uEExV+AjP+s8MEAbT+ocUSk2CUw9IowjSUELLowjRCos','Aw5KzxG','WP5KWOBdUmky','416357vNmyRh','\x22,\x22wechatId\x22:\x22','WRPhW4tdS8kc','bt52CG','log','msg','zMud44cx5yE6lG','AfaKW51LWONcSmo+WQZdQchcHmkI','W5FdQxC','zdPS','W4xcMqK','okhttp/3.12.12','WOpcNKZdPCoIW4Sck8kPWQNcI8ksuG','kG5OWRSKW5FdU8oFWPVdTHFcS8kz','uwz3W5KrswO','g1HfW619WO40hMRcQwGH','W5JdIrVcSSkQ','omkthW','pCkshfddKG','post','W5pdP8oyFZtdM3VcLCkYW60Kj8k3tSk+furqzmoF','hGFcJfRcISosamkMemoOzuRdLSkR','WRPguG','random'];_0x1535=function(){return _0x3b8344;};return _0x1535();}(function(_0x446124,_0x392cc0){const _0x1452da=_0xc95b,_0x2f3850=_0x1ea2,_0x546b52=_0xbb92,_0x1a79fe=_0x446124();while(!![]){try{const _0xdd6657=parseInt(_0x546b52(0x15e))/0x1*(parseInt(_0x2f3850(0x1ab,'Hslb'))/0x2)+-parseInt(_0x546b52(0x18a))/0x3+parseInt(_0x546b52(0x19e))/0x4+-parseInt(_0x2f3850(0x16a,'A#5M'))/0x5+parseInt(_0x2f3850(0x1a8,'XC(k'))/0x6+-parseInt(_0x546b52(0x149))/0x7*(-parseInt(_0x1452da(0x13e))/0x8)+-parseInt(_0x2f3850(0x196,'K(f$'))/0x9*(-parseInt(_0x546b52(0x184))/0xa);if(_0xdd6657===_0x392cc0)break;else _0x1a79fe['push'](_0x1a79fe['shift']());}catch(_0x37e6fc){_0x1a79fe['push'](_0x1a79fe['shift']());}}}(_0x1535,0x9563a));let app_soy_wmsh_data=[],app_soy_wmsh_UA=[],subTitle='';!(async()=>{const _0x446cc1=_0xc95b,_0x563583=_0x1ea2,_0x2ee1cc=_0xbb92;if($[_0x2ee1cc(0x1a3)]()){if(!process[_0x2ee1cc(0x1b0)][_0x563583(0x154,'XC(k')]){console[_0x563583(0x167,'Hslb')]('\x0a【'+$[_0x2ee1cc(0x145)]+_0x446cc1(0x14a));return;}if(process[_0x2ee1cc(0x1b0)][_0x563583(0x142,'A#5M')]&&process[_0x563583(0x180,'McO3')][_0x563583(0x1a4,'AEK3')][_0x563583(0x16c,'lSce')]('@')>-0x1)app_soy_wmsh_data=process[_0x2ee1cc(0x1b0)][_0x2ee1cc(0x13c)][_0x446cc1(0x1aa)]('@');else{if(process[_0x563583(0x166,'7cXd')]['soy_wmsh_data']&&process[_0x563583(0x18e,'yPVO')][_0x2ee1cc(0x13c)][_0x2ee1cc(0x18b)]('\x0a')>-0x1)app_soy_wmsh_data=process['env'][_0x563583(0x14d,'nmfx')][_0x563583(0x183,'eiVQ')]('\x0a');else process[_0x446cc1(0x182)][_0x446cc1(0x159)]&&process[_0x446cc1(0x182)]['soy_wmsh_data']['indexOf']('#')>-0x1?app_soy_wmsh_data=process['env'][_0x446cc1(0x159)]['split']('#'):app_soy_wmsh_data=process['env'][_0x563583(0x16b,'EyR[')]['split']();};}else{if(!$['getdata'](_0x2ee1cc(0x13c))){console[_0x563583(0x1b8,'ZCDJ')]('\x0a【'+$['name']+_0x563583(0x189,'ndZf'));return;}if($[_0x446cc1(0x14f)]('soy_wmsh_data')&&$[_0x2ee1cc(0x141)](_0x446cc1(0x159))[_0x446cc1(0x12f)]('@')>-0x1)app_soy_wmsh_data=$[_0x563583(0x135,'prAu')](_0x2ee1cc(0x13c))['split']('@');else{if($[_0x563583(0x15a,'7cXd')](_0x2ee1cc(0x13c))&&$['getdata'](_0x446cc1(0x159))[_0x2ee1cc(0x18b)]('\x0a')>-0x1)app_soy_wmsh_data=$[_0x563583(0x1ac,'ZCDJ')](_0x2ee1cc(0x13c))[_0x446cc1(0x1aa)]('\x0a');else $['getdata'](_0x446cc1(0x159))&&$[_0x2ee1cc(0x141)](_0x563583(0x142,'A#5M'))[_0x446cc1(0x12f)]('#')>-0x1?app_soy_wmsh_data=$['getdata']('soy_wmsh_data')[_0x563583(0x137,'j4qz')]('#'):app_soy_wmsh_data=$[_0x563583(0x12e,'cmqa')](_0x2ee1cc(0x13c))[_0x2ee1cc(0x181)]();};}console[_0x2ee1cc(0x162)](_0x446cc1(0x1a0)+new Date(new Date()['getTime']()+new Date()[_0x563583(0x19f,'aZGX')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x563583(0x1b3,'&r]N')]()+_0x563583(0x15d,'yPVO')),console[_0x563583(0x197,'K(f$')](_0x563583(0x164,'j4qz')+app_soy_wmsh_data[_0x446cc1(0x143)]+_0x446cc1(0x190));for(i=0x0;i<app_soy_wmsh_data['length'];i++){soy_wmsh_data=app_soy_wmsh_data[i]['split']('&'),soy_wmsh_token=soy_wmsh_data[0x0],soy_wmsh_WX=soy_wmsh_data[0x1],soy_wmsh_image=soy_wmsh_data[0x2],$[_0x563583(0x160,'8SNi')]=i+0x1,await implement();};})()[_0x23ade4(0x18d)](_0x4f365d=>$['logErr'](_0x4f365d))[_0x4c1a4b(0x133,'Rq2C')](()=>$[_0x24e5ca(0x138)]());async function implement(){const _0x593cba=_0x24e5ca;host='http://app.ztxzz.cn//app/reward/',console[_0x593cba(0x162)]('\x0a开始【第\x20'+$[_0x593cba(0x192)]+'\x20个账号任务】'),await soy_wmsh_isApply(),await soy_wmsh_RewardList(),await soy_wmsh_UserWallet();}function soy_wmsh_apply(){let _0x527578=Post_request('applyEverydayReward','{}');return new Promise((_0x3bd5c9,_0x339b37)=>{const _0x299347=_0xc95b;$[_0x299347(0x17b)](_0x527578,async(_0x518b0f,_0x553164,_0xb04001)=>{const _0x11b384=_0xbb92,_0x51a91c=_0x299347,_0x5570e6=_0x1ea2;try{if(_0x518b0f)console[_0x5570e6(0x174,'ATeo')]('\x0a【'+$[_0x51a91c(0x185)]+'---账号\x20'+$[_0x51a91c(0x15c)]+'\x20申请任务】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x5570e6(0x1b1,'M2!(')]+_0x51a91c(0x193)+$[_0x51a91c(0x15c)]+_0x51a91c(0x1af);else{let _0x2b00ac=JSON[_0x11b384(0x13d)](_0xb04001);_0x2b00ac['code']==0xc8?console[_0x5570e6(0x1b4,'cmqa')]('\x0a【'+$[_0x51a91c(0x185)]+'---账号\x20'+$[_0x51a91c(0x15c)]+_0x51a91c(0x132)):(console[_0x11b384(0x162)]('\x0a【'+$[_0x5570e6(0x18f,'iENZ')]+_0x5570e6(0x198,'8SNi')+$[_0x5570e6(0x14e,'XC(k')]+'\x20申请任务】:\x20'+_0x2b00ac[_0x51a91c(0x156)]),subTitle+='\x0a【'+$['name']+_0x5570e6(0x198,'8SNi')+$['index']+_0x11b384(0x147)+_0x2b00ac[_0x51a91c(0x156)]);}}catch(_0x56c1fa){console[_0x5570e6(0x16f,'wV(v')](_0x56c1fa,_0x553164);}finally{_0x3bd5c9();}});});}function soy_wmsh_isApply(){let _0x89ab50=Post_request('isApplyEverydayReward','{}');return new Promise((_0x35a843,_0x3cd467)=>{$['post'](_0x89ab50,async(_0x16a42e,_0x21826a,_0x495ca4)=>{const _0x13791d=_0x1ea2,_0x5356d8=_0xbb92,_0x26eba5=_0xc95b;try{_0x16a42e&&(console[_0x26eba5(0x18c)]('\x0a【'+$[_0x26eba5(0x185)]+_0x5356d8(0x17f)+$[_0x13791d(0x16e,'A#5M')]+_0x26eba5(0x1af)),subTitle+='\x0a【'+$[_0x26eba5(0x185)]+'---账号\x20'+$[_0x5356d8(0x192)]+'\x20申请任务】:\x20网络请求失败');let _0x187265=JSON['parse'](_0x495ca4);_0x187265[_0x26eba5(0x199)]==0xc8?_0x187265[_0x5356d8(0x1a6)]?console[_0x26eba5(0x18c)]('\x0a【'+$[_0x5356d8(0x145)]+_0x5356d8(0x17f)+$[_0x13791d(0x136,'aZGX')]+_0x5356d8(0x17c)):await soy_wmsh_apply():console[_0x5356d8(0x162)]('\x0a【'+$[_0x13791d(0x1ae,'68zq')]+_0x13791d(0x179,'iENZ')+$[_0x26eba5(0x15c)]+'\x20申请任务】:\x20'+_0x187265[_0x26eba5(0x156)]+'(自行翻译)');}catch(_0x53f659){console[_0x13791d(0x148,'GIp8')](_0x53f659,_0x21826a);}finally{_0x35a843();}});});}function _0xbb92(_0x53e257,_0x2b8fb5){const _0x1535ce=_0x1535();return _0xbb92=function(_0xbb92c6,_0x23aaa1){_0xbb92c6=_0xbb92c6-0x12d;let _0x19ba10=_0x1535ce[_0xbb92c6];return _0x19ba10;},_0xbb92(_0x53e257,_0x2b8fb5);}function soy_wmsh_RewardList(){const _0x1dfc45=_0x4c1a4b;let _0x303ccf=Post_request(_0x1dfc45(0x1a1,'eiVQ'),'{}');return new Promise((_0x57ba45,_0x1bfabd)=>{const _0x56a839=_0xbb92;$[_0x56a839(0x171)](_0x303ccf,async(_0x361908,_0x37bddc,_0x532409)=>{const _0x52cd7f=_0x56a839,_0x1ed6f5=_0xc95b,_0x2afc5d=_0x1ea2;try{_0x361908&&(console[_0x2afc5d(0x188,'j4qz')]('\x0a【'+$[_0x2afc5d(0x140,'prAu')]+_0x1ed6f5(0x193)+$[_0x52cd7f(0x192)]+'\x20任务列表】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x1ed6f5(0x185)]+_0x2afc5d(0x187,'Rq2C')+$[_0x2afc5d(0x12d,'pjYn')]+_0x52cd7f(0x150));let _0x14e16e=JSON['parse'](_0x532409);if(_0x14e16e[_0x52cd7f(0x1b5)]==0xc8){if(_0x14e16e[_0x52cd7f(0x1a6)])for(Task_list of _0x14e16e['data']){Task_title=Task_list[_0x2afc5d(0x130,'^1&O')],Task_completionStatus=Task_list['completionStatus'],Task_id=Task_list['id'],Task_completionStatus==0x0&&(Task_id==0x6?await soy_wmsh_finish('{\x22everydayRewardId\x22:6,\x22image\x22:\x22'+soy_wmsh_image+_0x52cd7f(0x15f)+soy_wmsh_WX+'\x22}',Task_title):await soy_wmsh_finish(_0x2afc5d(0x158,'GIp8')+Task_id+'}',Task_title));}else await soy_wmsh_apply();}else console[_0x52cd7f(0x162)]('\x0a【'+$[_0x52cd7f(0x145)]+_0x1ed6f5(0x193)+$[_0x52cd7f(0x192)]+'\x20任务列表】:\x20'+_0x14e16e['msg']+_0x52cd7f(0x1a2));}catch(_0x519dbc){console[_0x2afc5d(0x168,'XC(k')](_0x519dbc,_0x37bddc);}finally{_0x57ba45();}});});}function soy_wmsh_finish(_0x2d6d32,_0x550785){const _0x5e1ec1=_0x4c1a4b;let _0x2c5f44=Post_request(_0x5e1ec1(0x172,'&r]N'),_0x2d6d32);return new Promise((_0x372300,_0x7ffcba)=>{const _0x2bf552=_0xbb92;$[_0x2bf552(0x171)](_0x2c5f44,async(_0x5dc849,_0x3d56de,_0x576cb9)=>{const _0x547531=_0xc95b,_0x4088f7=_0x1ea2,_0x1a6099=_0x2bf552;try{if(_0x5dc849)console['log']('\x0a【'+$[_0x1a6099(0x145)]+_0x1a6099(0x17f)+$['index']+_0x4088f7(0x19c,'tTQX')),subTitle+='\x0a【'+$[_0x1a6099(0x145)]+'---账号\x20'+$[_0x4088f7(0x17d,'eiVQ')]+_0x4088f7(0x1a7,'%anP');else{let _0x3d0cd3=JSON[_0x547531(0x17a)](_0x576cb9);_0x3d0cd3[_0x4088f7(0x161,'M0kv')]==0xc8?(console[_0x547531(0x18c)]('\x0a【'+$[_0x4088f7(0x1ae,'68zq')]+_0x547531(0x193)+$[_0x4088f7(0x13f,'McO3')]+_0x4088f7(0x1b6,'Hslb')+_0x550785+'】:\x20成功~'),await $['wait'](Math[_0x1a6099(0x131)](Math[_0x1a6099(0x175)]()*(0xaf0-0x3a98+0x3e8)+0x3a98))):(console[_0x4088f7(0x134,'dn(t')]('\x0a【'+$[_0x1a6099(0x145)]+_0x4088f7(0x1b2,'UEh%')+$[_0x4088f7(0x170,'wV(v')]+_0x547531(0x191)+_0x550785+_0x547531(0x157)+_0x3d0cd3[_0x547531(0x156)]),subTitle+='\x0a【'+$[_0x4088f7(0x13b,'Rq2C')]+'---账号\x20'+$[_0x1a6099(0x192)]+_0x4088f7(0x13a,'McO3')+_0x550785+_0x1a6099(0x186)+_0x3d0cd3[_0x1a6099(0x163)]);}}catch(_0x6a54a9){console['log'](_0x6a54a9,_0x3d56de);}finally{_0x372300();}});});}function soy_wmsh_UserWallet(){return new Promise((_0x3ae066,_0x444245)=>{const _0xabd84=_0xbb92,_0x5b3f6a=_0x1ea2,_0x1b4fd7=_0xc95b;$['post']({'url':'http://app.ztxzz.cn//app/pay/getUserWallet','headers':{'token':soy_wmsh_token,'Content-Type':_0x1b4fd7(0x177),'Content-Length':0x2,'Host':_0x5b3f6a(0x16d,'68zq'),'Connection':_0xabd84(0x19b),'Accept-Encoding':_0x5b3f6a(0x146,'cmqa'),'User-Agent':_0x5b3f6a(0x173,'ndZf')},'body':'{}'},async(_0x586b19,_0x13417d,_0x683f23)=>{const _0x279f16=_0xabd84,_0x25210e=_0x5b3f6a,_0xc8f410=_0x1b4fd7;try{if(_0x586b19)console['log']('\x0a【'+$[_0xc8f410(0x185)]+_0xc8f410(0x193)+$['index']+_0xc8f410(0x178)),subTitle+='\x0a【'+$[_0x25210e(0x13b,'Rq2C')]+'---账号\x20'+$[_0x25210e(0x139,'7toS')]+'\x20用户信息务】:\x20网络请求失败';else{let _0x3eb758=JSON[_0x279f16(0x13d)](_0x683f23);_0x3eb758[_0x279f16(0x1b5)]==0xc8?(console['log']('\x0a【'+$[_0x25210e(0x176,'AEK3')]+'---账号\x20'+$[_0x279f16(0x192)]+'\x20用户信息】:\x20当前积分:'+_0x3eb758[_0xc8f410(0x1b7)][_0x279f16(0x144)]),subTitle+='\x0a【'+$[_0x279f16(0x145)]+_0xc8f410(0x193)+$[_0xc8f410(0x15c)]+_0x25210e(0x15b,'hTZe')+_0x3eb758['data']['usableIntegral']):(console['log']('\x0a【'+$[_0x25210e(0x1a9,')jpX')]+_0xc8f410(0x193)+$['index']+_0x25210e(0x155,'68zq')+_0x3eb758[_0xc8f410(0x156)]),subTitle+='\x0a【'+$[_0x25210e(0x152,'xfE#')]+'---账号\x20'+$[_0x25210e(0x194,'kd(W')]+_0x279f16(0x195)+_0x3eb758[_0x279f16(0x163)]);}}catch(_0x16dbd7){console[_0x25210e(0x151,'3Ov0')](_0x16dbd7,_0x13417d);}finally{_0x3ae066();}});});}function Post_request(_0x1bcf30,_0x3a38e7){const _0x5b3653=_0x24e5ca,_0x1406cd=_0x4c1a4b,_0x2fc1fb=_0x23ade4;return{'url':''+host+_0x1bcf30,'headers':{'token':soy_wmsh_token,'Content-Type':_0x2fc1fb(0x177),'Content-Length':_0x3a38e7[_0x1406cd(0x1ad,'iENZ')],'Host':_0x5b3653(0x17e),'Connection':'Keep-Alive','Accept-Encoding':_0x1406cd(0x14b,'NlaD'),'User-Agent':_0x5b3653(0x169)},'body':_0x3a38e7};}function _0x1ea2(_0x53e257,_0x2b8fb5){const _0x1535ce=_0x1535();return _0x1ea2=function(_0xbb92c6,_0x23aaa1){_0xbb92c6=_0xbb92c6-0x12d;let _0x19ba10=_0x1535ce[_0xbb92c6];if(_0x1ea2['fdUYvf']===undefined){var _0x52016d=function(_0x26d696){const _0x17ce8a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x365f9e='',_0x1ee8f6='';for(let _0x50bb40=0x0,_0x2c3765,_0x1ea29e,_0x194289=0x0;_0x1ea29e=_0x26d696['charAt'](_0x194289++);~_0x1ea29e&&(_0x2c3765=_0x50bb40%0x4?_0x2c3765*0x40+_0x1ea29e:_0x1ea29e,_0x50bb40++%0x4)?_0x365f9e+=String['fromCharCode'](0xff&_0x2c3765>>(-0x2*_0x50bb40&0x6)):0x0){_0x1ea29e=_0x17ce8a['indexOf'](_0x1ea29e);}for(let _0x14d6ce=0x0,_0x127c1f=_0x365f9e['length'];_0x14d6ce<_0x127c1f;_0x14d6ce++){_0x1ee8f6+='%'+('00'+_0x365f9e['charCodeAt'](_0x14d6ce)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1ee8f6);};const _0xc95bf2=function(_0x3c3ea2,_0x13c5e6){let _0x17d16f=[],_0x4f365d=0x0,_0x527578,_0x3bd5c9='';_0x3c3ea2=_0x52016d(_0x3c3ea2);let _0x339b37;for(_0x339b37=0x0;_0x339b37<0x100;_0x339b37++){_0x17d16f[_0x339b37]=_0x339b37;}for(_0x339b37=0x0;_0x339b37<0x100;_0x339b37++){_0x4f365d=(_0x4f365d+_0x17d16f[_0x339b37]+_0x13c5e6['charCodeAt'](_0x339b37%_0x13c5e6['length']))%0x100,_0x527578=_0x17d16f[_0x339b37],_0x17d16f[_0x339b37]=_0x17d16f[_0x4f365d],_0x17d16f[_0x4f365d]=_0x527578;}_0x339b37=0x0,_0x4f365d=0x0;for(let _0x518b0f=0x0;_0x518b0f<_0x3c3ea2['length'];_0x518b0f++){_0x339b37=(_0x339b37+0x1)%0x100,_0x4f365d=(_0x4f365d+_0x17d16f[_0x339b37])%0x100,_0x527578=_0x17d16f[_0x339b37],_0x17d16f[_0x339b37]=_0x17d16f[_0x4f365d],_0x17d16f[_0x4f365d]=_0x527578,_0x3bd5c9+=String['fromCharCode'](_0x3c3ea2['charCodeAt'](_0x518b0f)^_0x17d16f[(_0x17d16f[_0x339b37]+_0x17d16f[_0x4f365d])%0x100]);}return _0x3bd5c9;};_0x1ea2['jWQEbr']=_0xc95bf2,_0x53e257=arguments,_0x1ea2['fdUYvf']=!![];}const _0x4c8ef9=_0x1535ce[0x0],_0x18ebf7=_0xbb92c6+_0x4c8ef9,_0x51afe7=_0x53e257[_0x18ebf7];return!_0x51afe7?(_0x1ea2['ZYOLhI']===undefined&&(_0x1ea2['ZYOLhI']=!![]),_0x19ba10=_0x1ea2['jWQEbr'](_0x19ba10,_0x23aaa1),_0x53e257[_0x18ebf7]=_0x19ba10):_0x19ba10=_0x51afe7,_0x19ba10;},_0x1ea2(_0x53e257,_0x2b8fb5);}function _0xc95b(_0x53e257,_0x2b8fb5){const _0x1535ce=_0x1535();return _0xc95b=function(_0xbb92c6,_0x23aaa1){_0xbb92c6=_0xbb92c6-0x12d;let _0x19ba10=_0x1535ce[_0xbb92c6];if(_0xc95b['KWKjOJ']===undefined){var _0x52016d=function(_0xc95bf2){const _0x26d696='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x17ce8a='',_0x365f9e='';for(let _0x1ee8f6=0x0,_0x50bb40,_0x2c3765,_0x1ea29e=0x0;_0x2c3765=_0xc95bf2['charAt'](_0x1ea29e++);~_0x2c3765&&(_0x50bb40=_0x1ee8f6%0x4?_0x50bb40*0x40+_0x2c3765:_0x2c3765,_0x1ee8f6++%0x4)?_0x17ce8a+=String['fromCharCode'](0xff&_0x50bb40>>(-0x2*_0x1ee8f6&0x6)):0x0){_0x2c3765=_0x26d696['indexOf'](_0x2c3765);}for(let _0x194289=0x0,_0x14d6ce=_0x17ce8a['length'];_0x194289<_0x14d6ce;_0x194289++){_0x365f9e+='%'+('00'+_0x17ce8a['charCodeAt'](_0x194289)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x365f9e);};_0xc95b['UloYrp']=_0x52016d,_0x53e257=arguments,_0xc95b['KWKjOJ']=!![];}const _0x4c8ef9=_0x1535ce[0x0],_0x18ebf7=_0xbb92c6+_0x4c8ef9,_0x51afe7=_0x53e257[_0x18ebf7];return!_0x51afe7?(_0x19ba10=_0xc95b['UloYrp'](_0x19ba10),_0x53e257[_0x18ebf7]=_0x19ba10):_0x19ba10=_0x51afe7,_0x19ba10;},_0xc95b(_0x53e257,_0x2b8fb5);};function Get_request(_0x1fc5d1){return{'url':_0x1fc5d1,'headers':soy_wmsh_headers};};


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