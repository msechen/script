/*
项目名称:小猪赚钱
项目注册地址:http://t.zlnu.cn/5RXXVz?c=210494

需要邀请码才能注册,接码注册不了

青龙、V4、V2P变量填写

变量名 soy_xzzq_data
变量值 手机号&密码&User-Agent

其中User-Agent为可选填写

多号用 @ 或 # 或 换行 隔开

定时任务
cron '0-59/2 * * * *'
*/
const $ = new Env('小猪赚钱');
const notify = $.isNode() ? require('./sendNotify') : '';

const _0x165730=_0x3b17,_0x1aec2d=_0x338e;(function(_0x2ad756,_0x5c5e6d){const _0x50cabe=_0x338e,_0x4dd637=_0x3b17,_0x225346=_0x1f29,_0x3a34ba=_0x2ad756();while(!![]){try{const _0x320bf2=-parseInt(_0x225346(0xd7))/0x1+-parseInt(_0x4dd637(0xa8))/0x2+parseInt(_0x4dd637(0x87))/0x3+-parseInt(_0x225346(0xaa))/0x4*(parseInt(_0x4dd637(0x81))/0x5)+-parseInt(_0x4dd637(0xd0))/0x6+-parseInt(_0x50cabe(0xbb,'wtqw'))/0x7*(parseInt(_0x50cabe(0xc7,'xT8p'))/0x8)+parseInt(_0x225346(0xeb))/0x9;if(_0x320bf2===_0x5c5e6d)break;else _0x3a34ba['push'](_0x3a34ba['shift']());}catch(_0x2b2622){_0x3a34ba['push'](_0x3a34ba['shift']());}}}(_0x4983,0x753fc));function _0x3b17(_0x105dad,_0x3f651a){const _0x4983ae=_0x4983();return _0x3b17=function(_0x1f29df,_0x1f32bf){_0x1f29df=_0x1f29df-0x76;let _0x36f327=_0x4983ae[_0x1f29df];if(_0x3b17['ndVMMf']===undefined){var _0x53dcd4=function(_0x3b17e2){const _0x492e20='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x480e73='',_0x25cef7='';for(let _0x1c8f68=0x0,_0x3f3f23,_0x14137a,_0x338ecc=0x0;_0x14137a=_0x3b17e2['charAt'](_0x338ecc++);~_0x14137a&&(_0x3f3f23=_0x1c8f68%0x4?_0x3f3f23*0x40+_0x14137a:_0x14137a,_0x1c8f68++%0x4)?_0x480e73+=String['fromCharCode'](0xff&_0x3f3f23>>(-0x2*_0x1c8f68&0x6)):0x0){_0x14137a=_0x492e20['indexOf'](_0x14137a);}for(let _0x4d23c6=0x0,_0x4303d6=_0x480e73['length'];_0x4d23c6<_0x4303d6;_0x4d23c6++){_0x25cef7+='%'+('00'+_0x480e73['charCodeAt'](_0x4d23c6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x25cef7);};_0x3b17['IxqDsQ']=_0x53dcd4,_0x105dad=arguments,_0x3b17['ndVMMf']=!![];}const _0x57368b=_0x4983ae[0x0],_0x502425=_0x1f29df+_0x57368b,_0x358454=_0x105dad[_0x502425];return!_0x358454?(_0x36f327=_0x3b17['IxqDsQ'](_0x36f327),_0x105dad[_0x502425]=_0x36f327):_0x36f327=_0x358454,_0x36f327;},_0x3b17(_0x105dad,_0x3f651a);}let app_soy_xzzq_data=[],Host='http://pig.zxysy.net:99/';!(async()=>{const _0x579522=_0x3b17,_0x247843=_0x1f29,_0x903ae6=_0x338e;if(typeof $request!==_0x903ae6(0x8e,'0n[g')){}else{if(!$[_0x247843(0xa5)]()){soy_xzzq_dataArr[_0x247843(0xca)]($['getdata'](_0x579522(0xf8)));if(!$[_0x903ae6(0xb1,'EmmG')](_0x579522(0xf8))){console[_0x903ae6(0xa0,'a[Ry')]('\x0a【'+$[_0x579522(0xcb)]+_0x247843(0xa2));return;}if($[_0x247843(0xe1)]('soy_xzzq_data')&&$[_0x247843(0xe1)](_0x579522(0xf8))[_0x903ae6(0xd3,'QDrl')]('@')>-0x1)app_xzzq_data=process[_0x903ae6(0xee,'DOMz')][_0x903ae6(0xb0,'M5j[')][_0x903ae6(0xf1,'Ga!3')]('@');else{if($[_0x579522(0xc4)](_0x903ae6(0xc9,'6]We'))&&$[_0x579522(0xc4)](_0x579522(0xf8))[_0x903ae6(0xcc,'0n[g')]('#')>-0x1)app_xzzq_data=process['env'][_0x247843(0xb6)][_0x903ae6(0x108,'Y(u]')]('#');else $['getdata'](_0x903ae6(0xe5,'6Yj5'))&&$[_0x903ae6(0x9b,'[jr4')](_0x247843(0xb6))['indexOf']('\x0a')>-0x1?app_xzzq_data=process['env'][_0x579522(0xf8)][_0x903ae6(0x104,'T9J6')]('\x0a'):app_xzzq_data=process[_0x903ae6(0xb8,'$OY[')]['soy_xzzq_data']['split']();}}else{if(!process[_0x247843(0xfe)][_0x903ae6(0x91,'$$#f')]){console[_0x247843(0xd6)]('\x0a【'+$['name']+_0x903ae6(0x7a,'*#^p'));return;}if(process[_0x903ae6(0xf0,'*#^p')][_0x903ae6(0x7c,'T9J6')]&&process[_0x579522(0xaf)]['soy_xzzq_data'][_0x247843(0x7f)]('@')>-0x1)app_soy_xzzq_data=process[_0x247843(0xfe)]['soy_xzzq_data'][_0x579522(0xdd)]('@');else{if(process['env']['soy_xzzq_data']&&process['env']['soy_xzzq_data']['indexOf']('#')>-0x1)app_soy_xzzq_data=process[_0x247843(0xfe)][_0x579522(0xf8)][_0x903ae6(0xf9,'(BCb')]('#');else process[_0x903ae6(0x10a,'i6Db')][_0x247843(0xb6)]&&process[_0x247843(0xfe)][_0x247843(0xb6)][_0x579522(0x10d)]('\x0a')>-0x1?app_soy_xzzq_data=process[_0x903ae6(0x7d,'emLu')][_0x903ae6(0x10c,'^Z2J')][_0x247843(0x9a)]('\x0a'):app_soy_xzzq_data=process[_0x579522(0xaf)][_0x247843(0xb6)]['split']();}}console[_0x903ae6(0xc6,'680D')]('共'+app_soy_xzzq_data[_0x247843(0xfa)]+_0x247843(0xd5));let _0x34bb81='';console[_0x903ae6(0xe4,'1Sgw')]('===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()['getTime']()+new Date()[_0x247843(0xd2)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x903ae6(0x7b,'aO6#')]()+_0x579522(0xa9));for(i=0x0;i<app_soy_xzzq_data[_0x247843(0xfa)];i++){$[_0x903ae6(0xbd,'Wix@')]=i+0x1,soy_xzzq_data=app_soy_xzzq_data[i][_0x903ae6(0x88,'zD52')]('&'),soy_xzzq_mobile=soy_xzzq_data[0x0],soy_xzzq_password=soy_xzzq_data[0x1],soy_xzzq_UA=soy_xzzq_data[0x2],!soy_xzzq_UA&&(soy_xzzq_UA='Mozilla/5.0\x20(Linux;\x20U;\x20Android\x208.1.0;\x20zh-CN;\x20EML-TL00\x20Build/HUAWEIEML-TL00)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.108\x20UCBrowser/11.9.4.974\x20UWS/2.14.0.13\x20Mobile\x20Safari/537.36\x20AliApp(TB/7.10.4)\x20UCBS/2.11.1.1\x20TTID/227200@taobao_android_7.10.4\x20WindVane/8.3.0\x201080X2244'),console['log'](_0x903ae6(0xc8,'@*NV')+$[_0x903ae6(0xdc,'Yhq4')]+_0x579522(0x96)),await implement();}$[_0x247843(0xa5)]()&&await notify[_0x247843(0xa7)]($['name'],_0x34bb81);}})()[_0x1aec2d(0xbc,'erf#')](_0xac2954=>$['logErr'](_0xac2954))[_0x165730(0xad)](()=>$[_0x1aec2d(0xd8,'NOP!')]());async function implement(){await login(0x0),await login(0x1);}function login(_0x51cd2b){return new Promise(_0x476c08=>{const _0x3182ab=_0x1f29,_0xf87e0a=_0x3b17,_0x3e15ff=_0x338e;let _0x465979={'url':Host+_0x3e15ff(0x76,'emLu')+GetTime,'headers':{'Host':'pig.zxysy.net:99','Connection':_0xf87e0a(0xc3),'Content-Length':(_0x3182ab(0xe7)+soy_xzzq_mobile+_0x3182ab(0xb2)+soy_xzzq_password)[_0xf87e0a(0x100)],'User-Agent':soy_xzzq_UA,'Content-Type':'application/x-www-form-urlencoded','Accept':_0xf87e0a(0x8f),'Origin':_0x3e15ff(0xc2,'CA[Q'),'X-Requested-With':_0xf87e0a(0x8b)},'body':_0x3182ab(0xe7)+soy_xzzq_mobile+'&password='+soy_xzzq_password};$['post'](_0x465979,async(_0xcc91ec,_0x3957e3,_0x55771f)=>{const _0x13fc73=_0x3e15ff,_0x444a4c=_0xf87e0a,_0x471212=_0x3182ab;try{if(_0xcc91ec)console[_0x471212(0xd6)]('\x0a【'+$['name']+_0x444a4c(0xf2)),subTitle+='\x0a【'+$[_0x13fc73(0x79,'erf#')]+'---登录】:\x20网络请求失败';else{let _0x5d8ffa=JSON[_0x471212(0xe3)](_0x55771f);if(_0x5d8ffa[_0x13fc73(0x94,'[jr4')]==0x1){token=_0x5d8ffa[_0x444a4c(0x10b)];let _0x38409b=_0x5d8ffa['data'][_0x13fc73(0x99,'i6Db')];ID=_0x5d8ffa['data']['id'];let _0x3a7c14=_0x5d8ffa[_0x471212(0xe6)]['level'],_0xf8c54e=_0x5d8ffa[_0x13fc73(0x8d,'@*NV')][_0x471212(0x8a)],_0x1d57b6=_0x5d8ffa[_0x13fc73(0xb3,'Ga!3')][_0x13fc73(0xf7,'(Cti')],_0x3af2ec=_0x5d8ffa['data'][_0x13fc73(0xe2,'H)!M')]/0x2710;_0x51cd2b==0x0?(console[_0x471212(0xd6)]('\x0a【'+$[_0x13fc73(0xf3,'6Yj5')]+_0x13fc73(0x78,'ydZm')+_0x5d8ffa[_0x444a4c(0xed)]),await sign_status(),await Receive(),(0x9>GetHour()>=0x6||0xe>GetHour()>=0xc||0x15>GetHour()>=0x12)&&await Dinner()):console[_0x13fc73(0xc0,'!BkZ')]('\x0a【'+$[_0x444a4c(0xcb)]+'---用户信息】:\x20\x0a---用户昵称：'+_0x38409b+_0x13fc73(0xde,'dSu&')+_0x3a7c14+_0x444a4c(0x85)+_0x1d57b6+_0x444a4c(0x90)+_0x3af2ec['toFixed'](0x2)+'万\x0a---当前余额：'+_0xf8c54e+'元');}else console[_0x471212(0xd6)]('\x0a【'+$['name']+'---登录】:\x20'+_0x5d8ffa['msg']),subTitle+='\x0a【'+$[_0x13fc73(0xfc,'EE36')]+'---登录】:\x20'+_0x5d8ffa[_0x471212(0xe8)];}}catch(_0x1d4f75){}finally{_0x476c08();}});});}function _0x4983(){const _0x245149=['C295x3H6ENfFzgf0yq','WRquA8oilW','length','W6/dPSoa','WO9IwcC','Bg9N','env','e8o+WPFcRW','BgvUz3rO','fKZdKSobWR1OWQJcK8oBwSoD','---签到状态】:\x20今天已签到','---签到】:\x20','W7jfW60KWQe','get','getHours','W7OByW','W443WPxdIs4','WPNcL8k6sq','WPtcL8k4','Dg9Rzw4','cSoYxmkbW7umW6ToW5ldUx3cNSkh','Aw5KzxHpzG','cCkxg8opW77cQ8kjW78CW4rOWRORWO9cCCkzW7uT','yCoJW4JNRAlLIPlNIi/MGRhJGOxdRdxNVAZNU5dORkJMS4xLPyhOT5W','WRVdNCkY55MC5B6644o3zmoP','WQ3cNmkdDa','44kc77+S5P6G5AoQ5ywQx8owg2pcPmogsCkmW4RcLHVcTSk8emoh5y2w6yAc','BGpcOCkVWRL8BCowh8odic1qxG','W7jAW7GsWQ0eW7OqWPDhyCkofG','bmkwaa','sign_in','indexOf','---收取金币】:\x20网络请求失败','mtC3mJq1vLvAzwPZ','W7FcL8o+W6a','WRXBlG','W6hdGSo+cCk4W5qFWRKPdaldImkPpCk3W6rftSoRW4y','cI0TlEw9K+wjJEE7J+MQJo+8MG','application/x-www-form-urlencoded','mtG5mZa5m2j3Du5psW','WPdcPNChjq','1893093bwuNOK','money','DZjHlLCYqxbPzY56EhLZEs5Uzxq','W5/cMwDCACkBDSoBWPddJq','aWj2EW','WR0Bo1akW7FdRGjb','kI8Q','cI0TlEw9K+wjJEMhKEw4GE+8MG','vHxcMSkPW7fXWQBcUmonrmoyW6nq','W5mMWPtdHq','W67dKmod5PsN5y+56yAZ5BUz44kiWOddM+AvTowpQEAjLUwkJ8kG','hSoWWP7cRW','xSoCWQhNR4xLIQ/JGj7dKCoE','ios4QUI0PUwpT+s7U+wkOEoaKq','yCoJW4JNRAlLIPlJGQJcISk0566O5yIL5OIT5yQtWQe','W4RdMCkJjYCuqmoEDa','WP/cKmkTiYSCqCoE','split','gSo6WO7cRSkRWOau','rmkpWO8','we8M562u5yQN44cDnSol5lI+5AAK5Bw656Ye5yML','WOhcKmkPzJ8fvCoimbBcLe3cNSk/WOLn','153398OExedx','nSk6WR8','getSeconds','】：未填写\x20soy_xzzq_data\x20变量','fG1VtW','lcXK','isNode','ls0T5lIa5PEL5lIj6Asq44croIa','sendNotify','mtCXmJGZnfDrsMfMvW','id09pqO','100jDaBtG','umkYW5FNRRtLI7RNIylMGBtJGRHNWRu','DCkwlh3dGmkBz8oVWQ4gW7pdItddNSkCWRqIxcVcNSo6qxddOmkumrVdQSo0W5RcPgq6','zMLUywXSEq','gWnMtW','zw52','WOFcIMXheSoUWQZcOxZcMuazWP4','umk4nNZcOmkAWOW','&password=','FqiNW6y','W7C4jwj8xL0','mmkzDEEUG+wlQ+ocGNRcGUE/QoE4GEISOEAXI+wLVoI2KW','soy_xzzq_data','W6xcGvW','WPn5mW','WR7cSCk45Pwe5y2/6yss5BIO44cbW4fw','W6ZcSfy','WP3dItOlhSomtCo3WO7dKCoHlW','WQdcNmkACKC','WP7cMmkZsCkV','pig.zxysy.net:99','oYb1C2vYAwq9','W6BcLCkZ','vmkWcoAxQownM+MgP+w6KooaRSk3WR0','W4KOWOqbWRZcGCkUW7mSW7FcISowW4hdRCoafHtcO8ovW7yscZ4','A2vLCc1HBgL2zq','z2v0zgf0yq','WQyumLa','zmkDWOq','WQfSy3jXxM3cRSkW','BEw9O+wNIEoaIUEVMx8','W7VcNuldHSktymkpWQRcISo2WQHFWRa','push','BMfTzq','WQeBo1auW5hdPG','---一日三餐】:\x20','v8kWW5a','W63dQmokW5e','mZyXnZrJDfPjEMq','WPuUfq','getTimezoneOffset','W7JdPqn6W6rIiq','message','个账号','log','577221wyOlUk','ECoBnSky','ls0T5Ps25y+w6yEr5BIb44croIdNVzhNU5ZOR7FMSylLPlhOTku','CgfYC2u','server/coin-log/ctrl_dinner.php?v=','wSkiW7RcVwO','C3bSAxq','W7yjW4iy5B6y5yIu566V57MI77YT','177245VUZejs','PHPSESSID=30ic5bbruvrdursns75cgf175l;\x20alipay_name=null;\x20alipay_account=null;\x20wx_img=null;\x20direct=null;\x20yellow_diamond=null;\x20red_diamond=null;\x20user_money=null;\x20is_check=null;\x20level=null;\x20invite_code=null;\x20p_mobile=null;\x20turn_num=null;\x20type=null;\x20coins=null;\x20nickname=null;\x20token=','getdata','D8kjnx8','parse','h8kEW6S','W4pdJuL8W6nDWRtdH8oMxmoAqse','data','&mobile=','msg','hCkqW6hdNG','mtaWAKrHqNrh','22337181PRPiyK','server/user/receiveStatus.php?v=','BxnN','WO7cRNC','name','W7BcMmo8','AHm/W65h','ls0T55M75B2v44croIdNVzhNU5ZOR7FMSylLPlhOTku','W57dG11g','aaz2','iCk9WOi','WOjSusC','W6xcP0hdOILyrxKdWQu'];_0x4983=function(){return _0x245149;};return _0x4983();}function sign_status(){const _0x59df28=_0x1f29;let _0x4ead50=Get_Request(_0x59df28(0xec));return new Promise(_0x990a2b=>{const _0x63a4d9=_0x59df28;$[_0x63a4d9(0x105)](_0x4ead50,async(_0x50355e,_0x289aa7,_0x3af679)=>{const _0x261670=_0x3b17,_0x3f88c2=_0x63a4d9,_0x412c35=_0x338e;try{if(_0x50355e)console[_0x412c35(0xd1,'aa52')]('\x0a【'+$[_0x412c35(0xe9,'1Sgw')]+'---签到状态】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x3f88c2(0xef)]+_0x412c35(0x77,'!xiD');else{let _0x41d732=JSON['parse'](_0x3af679);_0x41d732['code']==0x64?_0x41d732[_0x3f88c2(0xe6)]['sign_in']==0x0?await sign():console[_0x261670(0xfd)]('\x0a【'+$[_0x3f88c2(0xef)]+_0x3f88c2(0x102)):(console[_0x261670(0xfd)]('\x0a【'+$['name']+_0x412c35(0xab,'[jr4')+_0x41d732[_0x412c35(0xf5,'!xiD')]),subTitle+='\x0a【'+$[_0x412c35(0xc5,'0n[g')]+'---签到状态】:\x20'+_0x41d732['msg']);}}catch(_0x2a37e4){}finally{_0x990a2b();}});});}function sign(){let _0x690f92=Get_Request('server/sign-in/ctrl_signIn.php?v=');return new Promise(_0x39844e=>{const _0x52f49a=_0x338e;$[_0x52f49a(0xf4,'@*NV')](_0x690f92,async(_0x3e242c,_0x13ac63,_0x4c9b40)=>{const _0x37e2e6=_0x1f29,_0x58d684=_0x3b17,_0x282743=_0x52f49a;try{if(_0x3e242c)console['log']('\x0a【'+$[_0x282743(0x92,'Y(u]')]+'---签到】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x282743(0xff,'[jr4')]+_0x282743(0xb5,'NOP!');else{let _0x25bad4=JSON[_0x58d684(0xda)](_0x4c9b40);_0x25bad4['code']==0x64?_0x25bad4[_0x282743(0x82,'*#^p')][_0x37e2e6(0x7e)]==0x0?console[_0x282743(0xfb,'Q%wq')]('\x0a【'+$[_0x37e2e6(0xef)]+_0x282743(0x97,'!xiD')):console['log']('\x0a【'+$['name']+_0x282743(0x9d,'G@A@')):(console[_0x282743(0xa4,'nuJG')]('\x0a【'+$[_0x282743(0x92,'Y(u]')]+_0x37e2e6(0x103)+_0x25bad4[_0x282743(0xb7,'6]We')]),subTitle+='\x0a【'+$['name']+_0x282743(0x95,'1Sgw')+_0x25bad4['msg']);}}catch(_0x28da49){}finally{_0x39844e();}});});}function Receive(){let _0x526129=Get_Request('server/coin-log/ctrl_receive.php?v=');return new Promise(_0x3995bb=>{$['get'](_0x526129,async(_0x205ce6,_0x1d2cb3,_0x4e0ee6)=>{const _0x359508=_0x338e,_0x2af256=_0x3b17,_0x2e8a10=_0x1f29;try{if(_0x205ce6)console[_0x2e8a10(0xd6)]('\x0a【'+$[_0x2af256(0xcb)]+_0x2af256(0xd9)),subTitle+='\x0a【'+$[_0x2af256(0xcb)]+_0x2e8a10(0x80);else{let _0x5505e7=JSON['parse'](_0x4e0ee6);_0x5505e7[_0x359508(0xf6,'EE36')]==0x64?console[_0x359508(0xba,'(Cti')]('\x0a【'+$['name']+_0x359508(0x93,'erf#')):(console[_0x359508(0x107,'hev0')]('\x0a【'+$['name']+_0x359508(0xb9,'E2bN')+_0x5505e7['msg']),subTitle+='\x0a【'+$[_0x359508(0x109,'Wix@')]+_0x359508(0xc1,'^Z2J')+_0x5505e7[_0x359508(0x9c,'m&7y')]);}}catch(_0x5b50d2){}finally{_0x3995bb();}});});}function _0x338e(_0x105dad,_0x3f651a){const _0x4983ae=_0x4983();return _0x338e=function(_0x1f29df,_0x1f32bf){_0x1f29df=_0x1f29df-0x76;let _0x36f327=_0x4983ae[_0x1f29df];if(_0x338e['LlVeaQ']===undefined){var _0x53dcd4=function(_0x492e20){const _0x480e73='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x25cef7='',_0x1c8f68='';for(let _0x3f3f23=0x0,_0x14137a,_0x338ecc,_0x4d23c6=0x0;_0x338ecc=_0x492e20['charAt'](_0x4d23c6++);~_0x338ecc&&(_0x14137a=_0x3f3f23%0x4?_0x14137a*0x40+_0x338ecc:_0x338ecc,_0x3f3f23++%0x4)?_0x25cef7+=String['fromCharCode'](0xff&_0x14137a>>(-0x2*_0x3f3f23&0x6)):0x0){_0x338ecc=_0x480e73['indexOf'](_0x338ecc);}for(let _0x4303d6=0x0,_0x1090be=_0x25cef7['length'];_0x4303d6<_0x1090be;_0x4303d6++){_0x1c8f68+='%'+('00'+_0x25cef7['charCodeAt'](_0x4303d6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1c8f68);};const _0x3b17e2=function(_0x44b54c,_0x136d67){let _0xee8928=[],_0x34bb81=0x0,_0xac2954,_0x51cd2b='';_0x44b54c=_0x53dcd4(_0x44b54c);let _0x476c08;for(_0x476c08=0x0;_0x476c08<0x100;_0x476c08++){_0xee8928[_0x476c08]=_0x476c08;}for(_0x476c08=0x0;_0x476c08<0x100;_0x476c08++){_0x34bb81=(_0x34bb81+_0xee8928[_0x476c08]+_0x136d67['charCodeAt'](_0x476c08%_0x136d67['length']))%0x100,_0xac2954=_0xee8928[_0x476c08],_0xee8928[_0x476c08]=_0xee8928[_0x34bb81],_0xee8928[_0x34bb81]=_0xac2954;}_0x476c08=0x0,_0x34bb81=0x0;for(let _0x465979=0x0;_0x465979<_0x44b54c['length'];_0x465979++){_0x476c08=(_0x476c08+0x1)%0x100,_0x34bb81=(_0x34bb81+_0xee8928[_0x476c08])%0x100,_0xac2954=_0xee8928[_0x476c08],_0xee8928[_0x476c08]=_0xee8928[_0x34bb81],_0xee8928[_0x34bb81]=_0xac2954,_0x51cd2b+=String['fromCharCode'](_0x44b54c['charCodeAt'](_0x465979)^_0xee8928[(_0xee8928[_0x476c08]+_0xee8928[_0x34bb81])%0x100]);}return _0x51cd2b;};_0x338e['mbeXIa']=_0x3b17e2,_0x105dad=arguments,_0x338e['LlVeaQ']=!![];}const _0x57368b=_0x4983ae[0x0],_0x502425=_0x1f29df+_0x57368b,_0x358454=_0x105dad[_0x502425];return!_0x358454?(_0x338e['HLNUvP']===undefined&&(_0x338e['HLNUvP']=!![]),_0x36f327=_0x338e['mbeXIa'](_0x36f327,_0x1f32bf),_0x105dad[_0x502425]=_0x36f327):_0x36f327=_0x358454,_0x36f327;},_0x338e(_0x105dad,_0x3f651a);}function Dinner(){const _0x515ae5=_0x1f29;let _0x574ada=Get_Request(_0x515ae5(0xdb));return new Promise(_0x5db23=>{const _0x555fb4=_0x515ae5;$[_0x555fb4(0x105)](_0x574ada,async(_0x34c10d,_0x4b748f,_0x5bfc3e)=>{const _0x401920=_0x3b17,_0x1cf943=_0x338e,_0x48f87f=_0x555fb4;try{if(_0x34c10d)console[_0x48f87f(0xd6)]('\x0a【'+$[_0x48f87f(0xef)]+'---一日三餐】:\x20网络请求失败'),subTitle+='\x0a【'+$[_0x1cf943(0xff,'[jr4')]+'---一日三餐】:\x20网络请求失败';else{let _0x54f415=JSON[_0x48f87f(0xe3)](_0x5bfc3e);_0x54f415[_0x1cf943(0xa3,'G@A@')]==0x64?console[_0x401920(0xfd)]('\x0a【'+$[_0x48f87f(0xef)]+'---一日三餐】:\x20领取成功~'):(console[_0x48f87f(0xd6)]('\x0a【'+$['name']+_0x48f87f(0xcd)+_0x54f415['msg']),subTitle+='\x0a【'+$[_0x48f87f(0xef)]+_0x401920(0xa6)+_0x54f415[_0x48f87f(0xe8)]);}}catch(_0x24b4b7){}finally{_0x5db23();}});});}function Post_Request(_0x54e460,_0x49ae85){const _0x590f4f=_0x1aec2d,_0x5da79e=_0x165730,_0x5ab8b0=_0x1f29;return{'url':''+Host+_0x54e460+GetTime,'headers':{'Host':_0x5ab8b0(0xbe),'Connection':_0x5da79e(0xc3),'Content-Length':_0x49ae85[_0x5da79e(0x100)],'User-Agent':soy_xzzq_UA,'Content-Type':_0x5ab8b0(0x86),'Accept':_0x590f4f(0x83,'hev0'),'Origin':'http://pig.zxysy.net:99','X-Requested-With':_0x5da79e(0x8b)},'body':_0x49ae85};}function Get_Request(_0x131c01){const _0x12bf1c=_0x165730,_0x3a3536=_0x1f29,_0x4c1b5c=_0x1aec2d;return{'url':''+Host+_0x131c01+GetTime,'headers':{'Host':_0x4c1b5c(0x9e,'i6Db'),'Connection':'keep-alive','TC-Token':token,'TC-Id':ID,'User-Agent':soy_xzzq_UA,'appKey':'5ded368547b86b331','Content-type':_0x4c1b5c(0xac,'H)!M'),'Accept':_0x4c1b5c(0xce,'[jr4'),'X-Requested-With':_0x4c1b5c(0x84,'ydZm'),'Cookie':_0x3a3536(0xe0)+token+_0x4c1b5c(0x98,'i6Db')+soy_xzzq_mobile+_0x12bf1c(0xbf)+ID}};}function _0x1f29(_0x105dad,_0x3f651a){const _0x4983ae=_0x4983();return _0x1f29=function(_0x1f29df,_0x1f32bf){_0x1f29df=_0x1f29df-0x76;let _0x36f327=_0x4983ae[_0x1f29df];return _0x36f327;},_0x1f29(_0x105dad,_0x3f651a);}function GetTime(){const _0x52baf4=_0x1f29,_0x124381=_0x1aec2d;let _0x1b543f=new Date(),_0x578ed9=_0x1b543f['getFullYear'](),_0x3a1711=_0x1b543f['getMonth']()+0x1;_0x3a1711=_0x3a1711<0xa?'0'+_0x3a1711:_0x3a1711;let _0x533a05=_0x1b543f[_0x124381(0xb4,'xT8p')]();_0x533a05=_0x533a05<0xa?'0'+_0x533a05:_0x533a05;let _0x311d0c=_0x1b543f[_0x52baf4(0x106)]();_0x311d0c=_0x311d0c<0xa?'0'+_0x311d0c:_0x311d0c;let _0x40dcfa=_0x1b543f['getMinutes']();_0x40dcfa=_0x40dcfa<0xa?'0'+_0x40dcfa:_0x40dcfa;let _0x491cb0=_0x1b543f[_0x52baf4(0xa1)]();_0x491cb0=_0x491cb0<0xa?'0'+_0x491cb0:_0x491cb0;let _0x32b7af=''+_0x578ed9+_0x3a1711+_0x533a05+_0x311d0c+_0x40dcfa+_0x491cb0;return _0x32b7af;}function GetHour(){let _0x4a8815=new Date(),_0x3f5c5d=_0x4a8815['getHours']();return _0x3f5c5d=_0x3f5c5d<0xa?'0'+_0x3f5c5d:_0x3f5c5d,_0x3f5c5d;}async function message(){const _0x33cece=_0x1f29,_0x49759b=_0x1aec2d;tz==0x1&&$['msg']($[_0x49759b(0xcf,'Q%wq')],'',$['message']),$['isNode']()&&await notify[_0x49759b(0x8c,'wtqw')]($[_0x49759b(0xae,'G@A@')],$[_0x33cece(0xd4)]);}


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