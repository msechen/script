/*
项目名称:小猪赚钱
项目注册地址:http://t.zlnu.cn/5RXXVz?c=210494

需要邀请码才能注册,接码注册不了

青龙、V4、V2P变量填写

变量名 soy_xzzq_data
变量值 0&手机号&密码&User-Agent

其中0为通知控制,1为通知,其他数字为不通知,User-Agent为可选填写

多号用 @ 或 # 或 换行 隔开

定时任务,看容量自行修改
cron '0-59/2 * * * *'

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_xzzq.js

注:能活多久不知道,反正上了再说

*/
const $ = new Env('小猪赚钱');
const notify = $.isNode() ? require('./sendNotify') : '';


(function(_0x183331,_0x256841){const _0x318650=_0x183331();function _0x4a2ac3(_0x397cf0,_0x399af8){return _0x5df6(_0x399af8-'0x2e4',_0x397cf0);}function _0x3ad139(_0x28931e,_0x28d23b){return _0x305d(_0x28931e-0x21f,_0x28d23b);}function _0x4477fd(_0x1a0167,_0x4c6e98){return _0x2dfb(_0x4c6e98-'0x180',_0x1a0167);}while(!![]){try{const _0x106317=-parseInt(_0x4a2ac3(0x50c,'0x52d'))/0x1+-parseInt(_0x4477fd('4)Jk','0x39a'))/0x2+-parseInt(_0x4a2ac3('0x467',0x453))/0x3+-parseInt(_0x4477fd('CXET','0x305'))/0x4+parseInt(_0x3ad139('0x453',0x3fe))/0x5*(-parseInt(_0x4477fd('dm3s',0x319))/0x6)+parseInt(_0x4477fd('3fK9',0x3b7))/0x7+parseInt(_0x4477fd('jVjL',0x3ab))/0x8;if(_0x106317===_0x256841)break;else _0x318650['push'](_0x318650['shift']());}catch(_0x4511bc){_0x318650['push'](_0x318650['shift']());}}}(_0x3bca,0x9965f));let app_soy_xzzq_data=[],Host=_0x494635('@$ML','0x128')+_0x494635('Ybtk','0x119')+_0x29bb00(0x423,0x46a),subTitle='';!(async()=>{function _0x2abcde(_0x4f7cd5,_0x34b8ed){return _0x29bb00(_0x34b8ed,_0x4f7cd5- -'0x578');}function _0x4813ed(_0x59293c,_0xaf841e){return _0x494635(_0x59293c,_0xaf841e- -0x2d3);}function _0x235f05(_0x2d9097,_0x308506){return _0x305d(_0x308506-'0x34e',_0x2d9097);}if(typeof $request!=='undefined'){}else{if(!$[_0x235f05(0x51f,'0x594')]()){if(!$[_0x4813ed('RIb*',-'0x1c7')]('soy_xzzq_d'+_0x2abcde(-'0x11e',-'0x14f'))){console[_0x4813ed('@$ML',-0x1ea)]('\x0a【'+$[_0x2abcde(-0x13e,-0x186)]+('】：未填写\x20soy_'+_0x2abcde(-0x19b,-'0x14a')+'变量'));return;}if($['getdata'](_0x2abcde(-0x197,-'0x1f7')+_0x235f05('0x5a9','0x562'))&&$[_0x235f05(0x53f,0x4e0)]('soy_xzzq_d'+'ata')[_0x4813ed(']2cC',-0x24b)]('@')>-0x1)app_soy_xzzq_data=$['getdata'](_0x235f05(0x49a,0x4e8)+_0x4813ed('9Am[',-0x16c))[_0x2abcde(-'0x190',-'0x194')]('@');else{if($['getdata']('soy_xzzq_d'+_0x4813ed('Lqkc',-'0x1db'))&&$['getdata'](_0x235f05(0x471,'0x4e8')+_0x4813ed('9Am[',-'0x16c'))[_0x2abcde(-'0x19a',-0x1c0)]('#')>-0x1)app_soy_xzzq_data=$[_0x2abcde(-'0x135',-0x10b)]('soy_xzzq_d'+_0x235f05('0x513',0x562))[_0x2abcde(-0x190,-0x192)]('#');else $[_0x4813ed('cO78',-'0x24d')](_0x235f05(0x55a,0x4e8)+_0x4813ed('dm3s',-'0x1b2'))&&$[_0x235f05(0x48f,0x4e0)](_0x4813ed('RIb*',-'0x210')+_0x2abcde(-'0x11e',-0x148))[_0x4813ed('GGlg',-0x232)]('\x0a')>-0x1?app_soy_xzzq_data=$[_0x235f05('0x522','0x4e0')]('soy_xzzq_d'+_0x235f05(0x59a,'0x562'))[_0x2abcde(-'0x190',-0x124)]('\x0a'):app_soy_xzzq_data=$[_0x2abcde(-0x135,-'0x173')]('soy_xzzq_d'+_0x235f05('0x571','0x562'))[_0x2abcde(-0x190,-0x183)]();}}else{if(!process['env'][_0x235f05('0x558',0x4e8)+_0x4813ed('FPpc',-0x176)]){console['log']('\x0a【'+$['name']+(_0x4813ed('3fK9',-0x175)+'xzzq_data\x20'+'变量'));return;}if(process[_0x4813ed('@$ML',-0x207)]['soy_xzzq_d'+_0x4813ed('es5b',-'0x1ce')]&&process[_0x4813ed('A%zY',-0x1ec)][_0x235f05('0x4b9','0x4e8')+_0x4813ed('*%I@',-'0x250')]['indexOf']('@')>-0x1)app_soy_xzzq_data=process['env'][_0x235f05('0x4a5','0x4e8')+'ata'][_0x2abcde(-'0x190',-0x1b0)]('@');else{if(process[_0x4813ed('es5b',-0x1c1)][_0x235f05('0x557','0x4e8')+_0x235f05('0x51a',0x562)]&&process[_0x2abcde(-0xfe,-'0x115')][_0x2abcde(-0x197,-'0x1f3')+'ata'][_0x2abcde(-0x19a,-'0x134')]('#')>-0x1)app_soy_xzzq_data=process[_0x2abcde(-0xfe,-'0xa0')][_0x235f05(0x4da,'0x4e8')+'ata']['split']('#');else process[_0x235f05(0x5bf,0x5a8)][_0x2abcde(-0x197,-'0x1fc')+_0x2abcde(-0x11e,-'0x11f')]&&process[_0x2abcde(-'0xfe',-0xa8)][_0x235f05(0x4ba,'0x4e8')+_0x4813ed('3fK9',-0x1a1)]['indexOf']('\x0a')>-0x1?app_soy_xzzq_data=process['env']['soy_xzzq_d'+'ata'][_0x235f05('0x56d',0x528)]('\x0a'):app_soy_xzzq_data=process[_0x235f05('0x615','0x5a8')]['soy_xzzq_d'+_0x4813ed('[HPl',-'0x169')][_0x4813ed('5$oG',-0x1c2)]();}}console['log']('共'+app_soy_xzzq_data[_0x4813ed('Ung7',-'0x1be')]+'个账号'),console[_0x2abcde(-0x13f,-'0xdc')]('===\x20脚本执行\x20-'+'\x20北京时间：'+new Date(new Date()[_0x2abcde(-'0x140',-0x13c)]()+new Date()[_0x2abcde(-'0x18f',-'0x143')+_0x2abcde(-0x16d,-'0x1dc')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4813ed('Ybtk',-'0x191')+_0x2abcde(-0x1a8,-0x1c2)]()+_0x2abcde(-'0x12c',-0x153)),subTitle='';for(i=0x0;i<app_soy_xzzq_data['length'];i++){$[_0x4813ed('tYoW',-0x1eb)]=i+0x1,soy_xzzq_data=app_soy_xzzq_data[i]['split']('&'),notice=soy_xzzq_data[0x0],soy_xzzq_mobile=soy_xzzq_data[0x1],soy_xzzq_password=soy_xzzq_data[0x2],soy_xzzq_UA=soy_xzzq_data[0x3],console[_0x2abcde(-0x13f,-'0x100')]('\x0a开始【第\x20'+$[_0x4813ed('tYoW',-'0x1eb')]+_0x4813ed('5$(v',-0x237)),await implement();}notice==0x1&&($[_0x4813ed('5^8q',-0x18a)]()&&await notify[_0x235f05(0x592,0x57d)]($[_0x2abcde(-0x13e,-0x115)],subTitle));}})()[_0x494635('qPhV',0xb8)](_0x33dc90=>$[_0x26f3ab(0x225,0x260)](_0x33dc90))[_0x29bb00(0x3bf,'0x3a3')](()=>$[_0x494635('jVjL','0x8c')]());async function implement(){await login(0x0),await login(0x1);}function _0x3bca(){const _0x4a53fb=['WOnzEEEUVowkK+ElN+AaMEodHmoUeG','Ag9Tzs91C2vYlW','W5dcJaq','C3bSAxq','ymo+WOJNMOJLVRlJGQ/dHmo0','ls0T5Ps25y+w6yEr5BIb44croIa','iCokDcWEWP8KWOpdL8k1','getHours','eOffset','nr51','rSkqW6VdLCk3','WOz3jq','CgLNlNP4Exn5lG','z2v0u2vJB25KCW','zgLHBw9Uzd1UDq','\x0a---当前等级：','zgf0yq',';\x20mobile=','Bg9N','p3y9','WODypfdcRmo7WQW7','cI0TlEw9K+wjJEMhKEw4GE+8MG','http://pig','l0VcHG','c8o9W7y','WOrYWQm','mty2mtCXnLHuruvPCW','WRPxra','lCoBgWa+W5mlW7pcNmkLkYLO','407598ShwNng','WQ0hcUAoTEEmUoocQCkCWQS','gdCxWPJdLCoHWPq','WOvUWQm','---提现】:\x20','jM1VyMLSzt0','nmoRW7K/W6e','WO4VWRGkW6e','d8oNW6e','WRpdMY8ZW4blfeG','ls0T55M75B2v44croIa','WRpcOCk5uXC+','WPumkW','BgvUz3rO','W6HfsGdcP8orW4JdR8kzW44','W756WQ/dMGldVHtcPv19','ls0T6Akg5y+w5yIg57QI44croIa','r/receiveS','jMfTB3vUDd0','gf175l;\x20al','post','getMinutes','b8o8W6O5W6H4yL8tWOK','WRzaWOa','getTime','log','name','yJG2yJmZmq','网络请求失败','C2vYDMvYl2nVAq','W55lmSkaWR4GfhDfoa','yxbWBgLJyxrPBW','yxrH','&mobile=','wYLn55wd5OQ15l6b5OcI44cwW6BdQW','getdata','zgvK','---收取金币】:\x20','ALP5W4eeWQ0PW5xcHrnxW57cIa','FcLnrUw/KEwiREE6GUMQI++/HG','W53cLWi','ieRdN+AoNoEpRUobTqKK57+Q57Ui','WODGWQLd','ls0T5lIa5PEL5lIj6Asq44croIa','\x20===\x0a','WPm+WRKg','jNvZzxjPzd0','ueHqu0vtu0Lepq','WRVdSwtdSG','BNvSBdSGAw52Aq','WPuioW0','W65lsGa','BMv0oJK5','kLFcJhXjBSkhWO3cVCkA','&password=','hmkbjMpcVN3dTYTDWQJdPCoXW5ZdUq','WQrVWPVdJbldPLBcRMT9','k8oFytbAWP0PWP7dImk/','ata','C2vUze5VDgLMEq','成功~','已签到','lCksWPjK','WObYWOPjW7nU','mZvXuwXhEMu','---一日三餐】:\x20','5yAhW4xdIHyR5B6e5yMm5yAZ5AY3772+','WONdMLOOgCoflXmzks/dIhe','WQagWOarCmkBWOu5WOeM','C19JAgvJAZ1UDq','6k+35Rgc5AsX6lsL','WRbADZv7qKCIiX4','l;\x20yellow_','WP8iiGK',':99/','nwrLzdm2odu0nW','---登录】:\x20','57+/57QO6k6J5Rka5AAs6lwm','code','iSkEWPb0vSkFWQjBWOxdGG','CMr1CNnUCZC1yW','ll;\x20red_di','AxnoB2rL','WOrEWOO','44kT77+55P2j5Ag15yAZW5bOdtqC','775904UZYRbW','dragon_jin','msg','---签到】:\x20今天','W7C5WPL6','env','z2v0','ls0T55M75B2v44croIdNVzhNU5W','W6fErG','mZbPyZvIyNj1DG','---领取分红】:\x20','i0ZcGa','iCoHwSksW6LI','keep-alive','Dg9gAxHLza','WRhcVCkjzgJcOMZdJCoeeq','server/sig','zw52','5996354qTjYVr','n-log/ctrl','WO5KWRbKW7HLW6/dMdFcQW','iCoRuW','kSooca','p?v=','3236091NuxMLu','W4KrimkMW4iDEq','lNP4Exn5lM5LDa','iexcKmobWPpcSmkQ','---红包状态】:\x20','img=null;\x20','d3uaW7u','sSowEdy','finally','---提现】:\x20网络','ll;\x20type=n','sign_in','5ysbmSomneVLVyJLIRNLHQVLRzlVVQ8','W5vqiSkv','mrVdNa','6kYs5RgO5AEA6lwn','iK7cKCouW4BcNSkGW5G5va','WRhcPCk6uq','W6pdJtJdHq','DwXSoYbJB2LUCW','WQ/dR13dJHKDW51UWOOC','572r57UC6k+35Rgc5AsX6lsL','F8k2a8ofWQW+FLynW74OWOhcTG','W7/KUQZOTjZLJjFKUPJLI4tJGRu','ls0T57QI5yYf54Q25Ocb44croIa','WRfDv1ZdOCk1AW','W5hcJa17uW','---用户信息】:\x20','WRhdSgtdSN8kW60','ay_account','请求失败','576n57UQ6k675Rgx5AsM6lsc','mJGWmde3odretuD5v1m','/login?v=','W5GckG','z2v0zgf0yq','get','Bgu9BNvSBdSGDa','=null;\x20nic','W4rsA8kfW7zJxMLpma','y29Kzq','WQaTumou','W6meW5ykhSkrWPCHWP8pW49y','C295x3H6ENfFza','572p57I16k+F5Rg05As/6lEp','W6xcNCo0WOhdUa','Dgf0DxmUCgHWpW','oYb1C2vYx21VBG','WR/dK8kS','WQhcT8kxxNtcVMtcNSojaq','5lUdW4xdIHyR5B6e5yMm5l6P6Ac3772+','WQ0TsCosda','kI8Q','ring','wer/findPo','cvNcO8kiCq','zgLYzwn0pw51Ba','qtDj57IY5yY154Qf5Ocx44cXluC','hhSwW6nv','token','data','CM0TDxjSzw5JBW','dd0AWQpdJmoVWO/dICk5WOy','emo4l8ov','usGBWOxdH8oSW5VdLSkdWPy','BMfTzq','xzzq_data\x20','indexOf','DKfI57Ms5yY254IQ5OcE44kCW6T2','5PEt5y+85OU75yU3fW','soy_xzzq_d','W5nrma','mGNdLSk8','WRHxohq','W5lcHHCKe8oj','W7eByEETQ+wiP+oaTGTN57YE57U/','BI1SB2CVy3rYBa','split','getTimezon','AxbHEv9Uyw1Lpq','sbTEm8kTbsLsWPDP','amond=null','feVcTG','WR5HWRRdHG','WPzdWOWgibFcJCkgW6FcRW','eZ0e','eSo2jq','ls0T562+5yIW54Q25Ocb44croIa','BxnN','万\x0a---当前余额：','Bg9NrxjY','F8kzwfPNWOLBW4NcGmkY','ssBcLCk2W5pdVLhcUw8q','WQSNAdddHsTsnapcJW','.zxysy.net','wer.php?v=','withdrawal','6Agi5y6A5OIT5yIUgG','sthdNG','WRtdNcG9W5y','W5Pqiq','parse','\x0a---用户昵称：','pig.zxysy.'];_0x3bca=function(){return _0x4a53fb;};return _0x3bca();}function login(_0x44ca27){return new Promise(_0x2f9d83=>{function _0x464f19(_0x48dd52,_0x5075d7){return _0x305d(_0x5075d7-'0x278',_0x48dd52);}function _0x1d8ab2(_0x2268da,_0x3ebbe0){return _0x2dfb(_0x2268da-'0x126',_0x3ebbe0);}let _0x15b3c9={'url':Host+(_0x1d8ab2(0x328,'9Am[')+_0x1e0cb2(-'0xdc',-0xae))+GetTime,'headers':{'Host':_0x1d8ab2(0x2a9,'5$(v')+_0x464f19(0x514,'0x4a0'),'Connection':_0x1d8ab2(0x353,'wA$R'),'Content-Length':(_0x1e0cb2(-0x37,-'0x29')+soy_xzzq_mobile+_0x1e0cb2(-'0x39',-0x14)+soy_xzzq_password)[_0x1d8ab2('0x37b','CXET')],'User-Agent':soy_xzzq_UA,'Content-Type':_0x464f19(0x446,0x48b)+'n/x-www-fo'+_0x1d8ab2('0x2bc','@$ML')+'ded','Accept':_0x1d8ab2(0x2c5,'Tu[Q'),'Origin':_0x1e0cb2('0x12',-0x51)+_0x1e0cb2(-0x5d,-0x71)+_0x1d8ab2('0x306','bf]F'),'X-Requested-With':_0x1d8ab2('0x2f2','aPer')+_0x464f19('0x3f1',0x3e9)},'body':_0x464f19('0x47e','0x471')+soy_xzzq_mobile+_0x1e0cb2(-'0x2',-0x14)+soy_xzzq_password};function _0x1e0cb2(_0x16e5b7,_0x28cf8d){return _0x5df6(_0x28cf8d- -'0x23e',_0x16e5b7);}$[_0x1e0cb2(-'0x34',-0x36)](_0x15b3c9,async(_0x384d6f,_0x5a266a,_0x331507)=>{function _0x5e8b81(_0xfa193f,_0x2891f7){return _0x1d8ab2(_0xfa193f- -'0x39a',_0x2891f7);}function _0x5cc7be(_0xeddb58,_0x229f80){return _0x464f19(_0xeddb58,_0x229f80- -0x49d);}function _0x57147b(_0x2cc1dd,_0x270f6e){return _0x1e0cb2(_0x2cc1dd,_0x270f6e-0x2c2);}try{if(_0x384d6f)console[_0x5e8b81(-0x82,'d80%')]('\x0a【'+$['name']+(_0x5cc7be(0x80,0x2b)+'请求失败')),subTitle+='\x0a【'+$[_0x57147b('0x2c5',0x292)]+(_0x5cc7be('0x4c',0x2b)+'请求失败');else{let _0x1b3311=JSON[_0x5e8b81(-'0x93','aOg1')](_0x331507);if(_0x1b3311[_0x5cc7be(-0x85,-'0x8e')]==0x1){token=_0x1b3311[_0x57147b(0x1e6,'0x22e')];let _0x48a3ed=_0x1b3311[_0x57147b(0x209,0x22f)][_0x5e8b81(-'0x77','tYoW')];ID=_0x1b3311[_0x5e8b81(-'0x4e','R4es')]['id'];let _0x532212=_0x1b3311[_0x5cc7be(-'0x1e',-'0x3e')][_0x5e8b81(-0x7a,'wUIO')],_0x382868=_0x1b3311['data'][_0x5e8b81(-0xeb,'3fK9')],_0x36e4fd=_0x1b3311[_0x57147b('0x1da',0x22f)][_0x5e8b81(-'0xd4','QMCT')],_0x229b78=_0x1b3311[_0x5e8b81(-0xbc,'T0Gx')]['coin']/0x2710,_0x3669b6=_0x1b3311['data'][_0x57147b('0x279',0x2ce)];_0x44ca27==0x0?(console[_0x5cc7be(-0xd,-0x3c)]('\x0a【'+$[_0x5cc7be(-'0x59',-'0x75')]+_0x5cc7be(-'0x66',-0x27)+_0x1b3311[_0x5cc7be(-'0x38',-'0x5e')]),await sign_status(),await Receive(),(0x9>GetHour()>=0x6||0xe>GetHour()>=0xc||0x15>GetHour()>=0x12)&&await Dinner(),_0x3669b6>0x0&&(await BonusMoney(),await findPower())):(console[_0x57147b(0x291,0x291)]('\x0a【'+$[_0x57147b('0x2d3',0x292)]+(_0x57147b('0x1c5',0x20e)+_0x57147b('0x298','0x259'))+_0x48a3ed+_0x57147b('0x28f','0x26a')+_0x532212+_0x5e8b81(-0x59,'*&zB')+_0x36e4fd+_0x5cc7be(-0x21,-'0x39')+_0x229b78[_0x5cc7be(0x59,'0x32')](0x2)+_0x5e8b81(-0xd3,'QMCT')+_0x382868+_0x5e8b81(-0xf9,'[HPl')+_0x3669b6),subTitle+='\x0a【'+$[_0x5e8b81(-'0xbd','KU19')]+(_0x5e8b81(-0x5e,'*&zB')+'\x0a---用户昵称：')+_0x48a3ed+'\x0a---当前等级：'+_0x532212+'\x0a---当前经验：'+_0x36e4fd+_0x5cc7be(-'0x81',-0x39)+_0x229b78['toFixed'](0x2)+_0x57147b(0x21c,0x24c)+_0x382868+_0x5e8b81(-0x3e,'QMCT')+_0x3669b6);}else console[_0x5cc7be(-0x56,-0x3c)]('\x0a【'+$[_0x57147b(0x2bd,'0x292')]+_0x57147b(0x31e,0x2c4)+_0x1b3311[_0x5e8b81(-0x86,'[HPl')]),subTitle+='\x0a【'+$[_0x5cc7be(-'0x14',-0x75)]+_0x5e8b81(-'0x99','0m2!')+_0x1b3311['msg'];}}catch(_0x11db85){}finally{_0x2f9d83();}});});}function findPower(){function _0x4ec5ac(_0xcc8f1f,_0x438588){return _0x29bb00(_0xcc8f1f,_0x438588- -0x26);}let _0x5acfa5=Get_Request(_0x43320e('0x47f','O3Pz')+'hdrawal-po'+_0x4ec5ac(0x376,'0x3ab')+_0x4ec5ac('0x36c',0x3d4)+GetTime());function _0x43320e(_0x20441b,_0x2d6919){return _0x494635(_0x2d6919,_0x20441b-'0x3aa');}return new Promise(_0x2b0eae=>{function _0x247214(_0x15ee6e,_0x58f85d){return _0x4ec5ac(_0x58f85d,_0x15ee6e-'0x75');}$[_0x247214(0x40e,'0x3dc')](_0x5acfa5,async(_0x927c1c,_0x32cbd8,_0x9c7b8b)=>{function _0x276261(_0x2e2dea,_0x288dfc){return _0x2dfb(_0x288dfc-'0x1c7',_0x2e2dea);}function _0x464232(_0x50f158,_0x562780){return _0x305d(_0x50f158- -0x2a5,_0x562780);}function _0x367383(_0x5bbd8b,_0x34d79e){return _0x247214(_0x34d79e-'0x5f',_0x5bbd8b);}try{if(_0x927c1c)console[_0x276261('5^8q','0x3be')]('\x0a【'+$[_0x276261('Ybtk','0x389')]+(_0x367383(0x3fa,'0x44d')+'网络请求失败')),subTitle+='\x0a【'+$[_0x276261('qPhV','0x35f')]+(_0x276261('4)Jk','0x37a')+_0x367383(0x550,'0x4ea'));else{let _0x4e3bbc=JSON[_0x276261('Tu[Q',0x363)](_0x9c7b8b);if(_0x4e3bbc[_0x276261('@$ML',0x343)]==0x64)for(let _0x152485=0x0;_0x152485<0x9;_0x152485++){_0x4e3bbc[_0x276261('R4es',0x3ed)]['status'][_0x152485]==0x1&&await withdrawal(_0x4e3bbc[_0x464232(-'0xbe',-'0x88')][_0x276261('r0Sq','0x40a')+'t'][_0x152485]);}else console[_0x367383(0x559,'0x4e7')]('\x0a【'+$['name']+_0x464232(-'0x11e',-'0x169')+_0x4e3bbc['msg']),subTitle+='\x0a【'+$[_0x276261('Ung7',0x347)]+_0x276261('j4Gf','0x36f')+_0x4e3bbc[_0x276261('5^8q','0x3b7')];}}catch(_0x2ffbde){}finally{_0x2b0eae();}});});}function _0x5df6(_0x128199,_0x4f97e7){const _0x3bca25=_0x3bca();return _0x5df6=function(_0x5df693,_0x39d0e5){_0x5df693=_0x5df693-0x16d;let _0x4ae106=_0x3bca25[_0x5df693];return _0x4ae106;},_0x5df6(_0x128199,_0x4f97e7);}function withdrawal(_0x37e282){let _0x2b70da=Get_Request(_0x3c47ad('0x384','[HPl')+_0x27a808('0x177',0x154)+'?v='+GetTime()+_0xf4120b(-'0x4e',-0xb4)+ID+_0xf4120b(-'0x6a',-0x52)+_0x37e282);function _0xf4120b(_0x3e106b,_0x30582b){return _0x26f3ab(_0x3e106b- -0x2cc,_0x30582b);}function _0x3c47ad(_0x3311b8,_0x467bbc){return _0x494635(_0x467bbc,_0x3311b8-'0x245');}function _0x27a808(_0x354a56,_0x40038b){return _0x29bb00(_0x40038b,_0x354a56- -'0x284');}return new Promise(_0x57111e=>{$['get'](_0x2b70da,async(_0xb20fe3,_0xcc71f5,_0x4db462)=>{function _0x226b89(_0x510af6,_0x542f47){return _0x305d(_0x542f47-0x124,_0x510af6);}function _0x3c7906(_0xad6618,_0xe11d97){return _0x5df6(_0xe11d97- -'0x29f',_0xad6618);}function _0x1c4ce1(_0x1d72b4,_0x165dfc){return _0x2dfb(_0x165dfc-0x18c,_0x1d72b4);}try{if(_0xb20fe3)console['log']('\x0a【'+$[_0x226b89('0x28b','0x2d4')]+(_0x3c7906(-0xc5,-0x127)+_0x3c7906(-0xdf,-'0x112'))),subTitle+='\x0a【'+$['name']+(_0x1c4ce1('@lU!','0x3a9')+_0x226b89('0x36f',0x35e));else{let _0x552526=JSON[_0x3c7906(-'0xef',-0xcb)](_0x4db462);_0x552526[_0x3c7906(-0x8a,-'0x5d')]==0x1?console[_0x3c7906(-'0xfe',-'0x92')]('\x0a【'+$['name']+_0x1c4ce1('9Am[',0x381)+_0x552526['msg']):(console['log']('\x0a【'+$[_0x3c7906(-'0xe1',-0x91)]+_0x3c7906(-'0x70',-'0xa7')+_0x552526['msg']),subTitle+='\x0a【'+$[_0x1c4ce1('R4es',0x3c9)]+'---提现】:\x20'+_0x552526['msg']);}}catch(_0x17b5bb){}finally{_0x57111e();}});});}function sign_status(){function _0x19a3d5(_0x2854dc,_0x55565e){return _0x29bb00(_0x55565e,_0x2854dc- -0x31f);}let _0x125582=Get_Request('server/use'+_0x19a3d5('0x112',0x17d)+_0xa3df9e('0x4d3',0x4da)+'v=');function _0xa3df9e(_0x157ee4,_0x4ac92d){return _0x26f3ab(_0x157ee4-'0x2da',_0x4ac92d);}return new Promise(_0x186926=>{function _0x3343e9(_0x56d845,_0x11e93d){return _0x19a3d5(_0x56d845-'0x1d2',_0x11e93d);}$[_0x3343e9(0x272,'0x274')](_0x125582,async(_0x34d70d,_0x27833d,_0x512026)=>{function _0x22539b(_0xa8370d,_0x55a7b1){return _0x3343e9(_0x55a7b1- -'0x2ca',_0xa8370d);}function _0x1561d9(_0x5a261f,_0x4ef122){return _0x2dfb(_0x5a261f-0x164,_0x4ef122);}function _0x1f4e29(_0x599926,_0x691a42){return _0x305d(_0x599926-'0xb',_0x691a42);}try{if(_0x34d70d)console['log']('\x0a【'+$[_0x1f4e29('0x1bb','0x1ab')]+('---签到状态】:\x20'+_0x1561d9(0x2ff,'OP#P'))),subTitle+='\x0a【'+$[_0x1561d9('0x396','r0Sq')]+('---签到状态】:\x20'+_0x1f4e29('0x18f','0x1a2'));else{let _0x5f4364=JSON[_0x22539b('0x1d',-'0x17')](_0x512026);_0x5f4364[_0x22539b(0x1c,0x57)]==0x64?_0x5f4364[_0x1f4e29('0x1f2','0x201')][_0x22539b(-0x4f,-'0x71')]==0x0?await sign():console[_0x1f4e29(0x1f4,'0x25b')]('\x0a【'+$['name']+(_0x1f4e29(0x1d1,0x18b)+'今天已签到')):(console[_0x1561d9(0x329,'6i[e')]('\x0a【'+$[_0x22539b(0x6e,'0x23')]+_0x1561d9(0x33b,'cO78')+_0x5f4364[_0x1f4e29(0x1d2,0x241)]),subTitle+='\x0a【'+$[_0x1561d9(0x38b,'9Am[')]+'---签到状态】:\x20'+_0x5f4364[_0x22539b(0x26,'0x60')]);}}catch(_0x4b50ec){}finally{_0x186926();}});});}function BonusMoney(){function _0x5a1b8c(_0x3bd5aa,_0x24f2ab){return _0x26f3ab(_0x3bd5aa- -'0x7c',_0x24f2ab);}function _0x4bdf4a(_0x34373b,_0x2464f5){return _0x494635(_0x2464f5,_0x34373b- -'0x21c');}let _0x12485c=Get_Request(_0x5a1b8c(0x1b8,0x1cc)+_0x4bdf4a(-'0xa9','5^8q')+'ney?v='+GetTime());return new Promise(_0x1cfdb0=>{function _0x8995a9(_0x132be8,_0x4d00d0){return _0x5df6(_0x4d00d0- -0xa4,_0x132be8);}$[_0x8995a9('0x10f','0xef')](_0x12485c,async(_0x5e71db,_0x3f60b0,_0x410b3d)=>{function _0x3bbf4d(_0x2eda50,_0x244794){return _0x2dfb(_0x244794- -0x21b,_0x2eda50);}function _0x8fa97a(_0x16c845,_0x32eaf1){return _0x305d(_0x32eaf1-'0x1bf',_0x16c845);}function _0x16a432(_0x5b4e62,_0x2e8fd2){return _0x8995a9(_0x5b4e62,_0x2e8fd2-'0x25d');}try{if(_0x5e71db)console[_0x16a432('0x3df',0x3c6)]('\x0a【'+$['name']+(_0x8fa97a('0x43a','0x3c3')+_0x16a432(0x420,0x3c9))),subTitle+='\x0a【'+$[_0x8fa97a('0x39f','0x36f')]+(_0x8fa97a(0x417,'0x3c3')+_0x8fa97a('0x35f','0x343'));else{let _0x34dcb4=JSON[_0x16a432('0x377','0x38d')](_0x410b3d);_0x34dcb4[_0x3bbf4d('GGlg',0x9)]==0x1?console[_0x8fa97a('0x3b5','0x3a8')]('\x0a【'+$[_0x16a432(0x38e,0x3c7)]+_0x16a432(0x40a,'0x40c')+_0x34dcb4[_0x16a432('0x407',0x404)]):(console['log']('\x0a【'+$[_0x3bbf4d('Ung7',-0x9b)]+'---领取分红】:\x20'+_0x34dcb4[_0x8fa97a('0x32e',0x386)]),subTitle+='\x0a【'+$[_0x8fa97a(0x383,'0x36f')]+'---领取分红】:\x20'+_0x34dcb4[_0x3bbf4d('Wn3G',-'0x5a')]);}}catch(_0x38c17b){}finally{_0x1cfdb0();}});});}function sign(){function _0xf27b03(_0x27811b,_0x1047bb){return _0x29bb00(_0x27811b,_0x1047bb- -0x7);}let _0x2bfd4e=Get_Request(_0xf27b03(0x40a,0x47e)+'n-in/ctrl_'+_0x4febfb(-0x49,'FPpc')+_0x24d107(-'0xcc',-'0xf5'));function _0x24d107(_0x2b66c6,_0x4dc4b4){return _0x26f3ab(_0x2b66c6- -'0x312',_0x4dc4b4);}function _0x4febfb(_0x3b42d0,_0x26d5b1){return _0x494635(_0x26d5b1,_0x3b42d0- -'0x122');}return new Promise(_0x1c4d3e=>{$['get'](_0x2bfd4e,async(_0x660637,_0x55466f,_0x61dc6)=>{function _0x3ad671(_0x69af1c,_0x185667){return _0x305d(_0x185667- -'0x18b',_0x69af1c);}function _0x36906d(_0x3ddaf9,_0x50344d){return _0x5df6(_0x50344d-0x290,_0x3ddaf9);}function _0xf758ae(_0x4bd5ff,_0x50c249){return _0x2dfb(_0x50c249-0x1b1,_0x4bd5ff);}try{if(_0x660637)console[_0x36906d(0x44d,0x49d)]('\x0a【'+$[_0xf758ae('HzpZ','0x332')]+(_0xf758ae('T0Gx',0x36b)+_0x36906d('0x3b1',0x41d))),subTitle+='\x0a【'+$[_0xf758ae('5^8q','0x3cf')]+('---签到】:\x20网络'+_0xf758ae('FPpc','0x32f'));else{let _0x33a99b=JSON[_0xf758ae('j4Gf','0x35a')](_0x61dc6);_0x33a99b[_0x3ad671(-0x68,'0xc')]==0x64?_0x33a99b[_0x36906d('0x45e','0x43b')]['sign_in']==0x0?console['log']('\x0a【'+$[_0x3ad671('0x29',0x25)]+('---签到】:\x20签到'+_0x36906d(0x524,'0x4c0'))):console[_0x3ad671(0x2f,'0x5e')]('\x0a【'+$[_0xf758ae('5$oG',0x3d2)]+(_0x36906d('0x464','0x4dc')+_0x36906d(0x4e7,0x4c1))):(console[_0xf758ae('3fK9','0x38a')]('\x0a【'+$[_0xf758ae('6i[e',0x35f)]+'---签到】:\x20'+_0x33a99b[_0xf758ae('KU19',0x32e)]),subTitle+='\x0a【'+$[_0xf758ae('r0Sq','0x3e3')]+'---签到】:\x20'+_0x33a99b[_0x36906d(0x517,0x4db)]);}}catch(_0x161fa4){}finally{_0x1c4d3e();}});});}function _0x26f3ab(_0xea4fa2,_0x24e78b){return _0x305d(_0xea4fa2-0x5c,_0x24e78b);}function _0x305d(_0x128199,_0x4f97e7){const _0x3bca25=_0x3bca();return _0x305d=function(_0x5df693,_0x39d0e5){_0x5df693=_0x5df693-0x16d;let _0x4ae106=_0x3bca25[_0x5df693];if(_0x305d['PvgUte']===undefined){var _0x4bd01b=function(_0x305d63){const _0x2c4a74='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1ce5b6='',_0x15ebd9='';for(let _0x126a3f=0x0,_0x163de3,_0x423493,_0x2dfb57=0x0;_0x423493=_0x305d63['charAt'](_0x2dfb57++);~_0x423493&&(_0x163de3=_0x126a3f%0x4?_0x163de3*0x40+_0x423493:_0x423493,_0x126a3f++%0x4)?_0x1ce5b6+=String['fromCharCode'](0xff&_0x163de3>>(-0x2*_0x126a3f&0x6)):0x0){_0x423493=_0x2c4a74['indexOf'](_0x423493);}for(let _0xbd741b=0x0,_0x41af4d=_0x1ce5b6['length'];_0xbd741b<_0x41af4d;_0xbd741b++){_0x15ebd9+='%'+('00'+_0x1ce5b6['charCodeAt'](_0xbd741b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x15ebd9);};_0x305d['yppVja']=_0x4bd01b,_0x128199=arguments,_0x305d['PvgUte']=!![];}const _0xc1aabc=_0x3bca25[0x0],_0x15c3f2=_0x5df693+_0xc1aabc,_0x484861=_0x128199[_0x15c3f2];return!_0x484861?(_0x4ae106=_0x305d['yppVja'](_0x4ae106),_0x128199[_0x15c3f2]=_0x4ae106):_0x4ae106=_0x484861,_0x4ae106;},_0x305d(_0x128199,_0x4f97e7);}function _0x2dfb(_0x128199,_0x4f97e7){const _0x3bca25=_0x3bca();return _0x2dfb=function(_0x5df693,_0x39d0e5){_0x5df693=_0x5df693-0x16d;let _0x4ae106=_0x3bca25[_0x5df693];if(_0x2dfb['LOPPqu']===undefined){var _0x4bd01b=function(_0x2c4a74){const _0x1ce5b6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x15ebd9='',_0x126a3f='';for(let _0x163de3=0x0,_0x423493,_0x2dfb57,_0xbd741b=0x0;_0x2dfb57=_0x2c4a74['charAt'](_0xbd741b++);~_0x2dfb57&&(_0x423493=_0x163de3%0x4?_0x423493*0x40+_0x2dfb57:_0x2dfb57,_0x163de3++%0x4)?_0x15ebd9+=String['fromCharCode'](0xff&_0x423493>>(-0x2*_0x163de3&0x6)):0x0){_0x2dfb57=_0x1ce5b6['indexOf'](_0x2dfb57);}for(let _0x41af4d=0x0,_0x542d0f=_0x15ebd9['length'];_0x41af4d<_0x542d0f;_0x41af4d++){_0x126a3f+='%'+('00'+_0x15ebd9['charCodeAt'](_0x41af4d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x126a3f);};const _0x305d63=function(_0x48db5b,_0x35701e){let _0xf422d8=[],_0x33dc90=0x0,_0x44ca27,_0x2f9d83='';_0x48db5b=_0x4bd01b(_0x48db5b);let _0x15b3c9;for(_0x15b3c9=0x0;_0x15b3c9<0x100;_0x15b3c9++){_0xf422d8[_0x15b3c9]=_0x15b3c9;}for(_0x15b3c9=0x0;_0x15b3c9<0x100;_0x15b3c9++){_0x33dc90=(_0x33dc90+_0xf422d8[_0x15b3c9]+_0x35701e['charCodeAt'](_0x15b3c9%_0x35701e['length']))%0x100,_0x44ca27=_0xf422d8[_0x15b3c9],_0xf422d8[_0x15b3c9]=_0xf422d8[_0x33dc90],_0xf422d8[_0x33dc90]=_0x44ca27;}_0x15b3c9=0x0,_0x33dc90=0x0;for(let _0x384d6f=0x0;_0x384d6f<_0x48db5b['length'];_0x384d6f++){_0x15b3c9=(_0x15b3c9+0x1)%0x100,_0x33dc90=(_0x33dc90+_0xf422d8[_0x15b3c9])%0x100,_0x44ca27=_0xf422d8[_0x15b3c9],_0xf422d8[_0x15b3c9]=_0xf422d8[_0x33dc90],_0xf422d8[_0x33dc90]=_0x44ca27,_0x2f9d83+=String['fromCharCode'](_0x48db5b['charCodeAt'](_0x384d6f)^_0xf422d8[(_0xf422d8[_0x15b3c9]+_0xf422d8[_0x33dc90])%0x100]);}return _0x2f9d83;};_0x2dfb['unOnUk']=_0x305d63,_0x128199=arguments,_0x2dfb['LOPPqu']=!![];}const _0xc1aabc=_0x3bca25[0x0],_0x15c3f2=_0x5df693+_0xc1aabc,_0x484861=_0x128199[_0x15c3f2];return!_0x484861?(_0x2dfb['PRIqYI']===undefined&&(_0x2dfb['PRIqYI']=!![]),_0x4ae106=_0x2dfb['unOnUk'](_0x4ae106,_0x39d0e5),_0x128199[_0x15c3f2]=_0x4ae106):_0x4ae106=_0x484861,_0x4ae106;},_0x2dfb(_0x128199,_0x4f97e7);}function Receive(){function _0x54685f(_0x5788b3,_0x1ab48b){return _0x494635(_0x1ab48b,_0x5788b3- -0x164);}let _0x475bb8=Get_Request('server/coi'+_0x4afa5d(0x220,0x1cf)+_0x54685f(-0x44,'wUIO')+'hp?v=');function _0x4afa5d(_0x1b2915,_0x3f7125){return _0x29bb00(_0x1b2915,_0x3f7125- -'0x2b9');}return new Promise(_0x250690=>{$['get'](_0x475bb8,async(_0x4d1f74,_0x5c97b6,_0x194636)=>{function _0x79209(_0x91fe4e,_0x3836da){return _0x305d(_0x3836da- -0x85,_0x91fe4e);}function _0x5f39c7(_0x4ddab4,_0x411a0c){return _0x5df6(_0x4ddab4-'0x123',_0x411a0c);}function _0x2a8e16(_0x2dae70,_0x131436){return _0x2dfb(_0x131436- -'0x252',_0x2dae70);}try{if(_0x4d1f74)console[_0x5f39c7('0x330',0x391)]('\x0a【'+$[_0x2a8e16('PWpA',-0x5)]+(_0x5f39c7('0x33c','0x3b2')+_0x79209(0x13a,'0xff'))),subTitle+='\x0a【'+$[_0x5f39c7(0x331,'0x2b9')]+('---收取金币】:\x20'+'网络请求失败');else{let _0x45beaa=JSON['parse'](_0x194636);_0x45beaa[_0x79209(0x111,0x112)]==0x64?console[_0x79209(0x179,0x164)]('\x0a【'+$[_0x5f39c7('0x331',0x370)]+('---收取金币】:\x20'+_0x2a8e16('FPpc',-0x9e))):(console[_0x2a8e16('RIb*',-'0x8e')]('\x0a【'+$['name']+_0x79209(0xf4,'0x157')+_0x45beaa[_0x5f39c7(0x36e,'0x35b')]),subTitle+='\x0a【'+$[_0x5f39c7(0x331,0x2f6)]+'---收取金币】:\x20'+_0x45beaa[_0x79209(0xcf,'0x142')]);}}catch(_0x1dc8d4){}finally{_0x250690();}});});}function Dinner(){function _0x313f71(_0x38f00b,_0x4ee968){return _0x29bb00(_0x38f00b,_0x4ee968-0x20);}let _0x4ed502=Get_Request(_0x2b60a9(-'0xaa',-0x6d)+_0x2b60a9(-0xf7,-'0xc3')+'_dinner.ph'+_0x313f71(0x387,0x3ba));function _0x2b60a9(_0x2d1e6f,_0xf2f6d9){return _0x26f3ab(_0xf2f6d9- -'0x2da',_0x2d1e6f);}return new Promise(_0x14c5c5=>{function _0x615161(_0x3c8e63,_0x31711d){return _0x2b60a9(_0x3c8e63,_0x31711d-0x55a);}$[_0x615161(0x501,0x52b)](_0x4ed502,async(_0x5a1ba5,_0x36015b,_0x5ec2f0)=>{function _0x16d8a4(_0x2f0d04,_0x14163b){return _0x2dfb(_0x14163b-0xc6,_0x2f0d04);}function _0x18f51e(_0x303ac3,_0x4fe734){return _0x615161(_0x4fe734,_0x303ac3-0xbd);}function _0x3a5772(_0x51b3a3,_0x1e40d0){return _0x5df6(_0x51b3a3- -0x116,_0x1e40d0);}try{if(_0x5a1ba5)console[_0x16d8a4('CXET','0x324')]('\x0a【'+$[_0x3a5772('0xf8','0x10f')]+(_0x18f51e('0x5b8','0x58f')+_0x16d8a4('cO78','0x307'))),subTitle+='\x0a【'+$['name']+('---一日三餐】:\x20'+_0x16d8a4('T0Gx','0x254'));else{let _0x3ba047=JSON[_0x16d8a4('Wn3G',0x26c)](_0x5ec2f0);_0x3ba047[_0x16d8a4('j4Gf','0x23b')]==0x64?console[_0x16d8a4('PtoF','0x257')]('\x0a【'+$['name']+(_0x18f51e(0x5b8,0x5ff)+_0x16d8a4('qPhV','0x296'))):(console[_0x18f51e('0x582','0x5ec')]('\x0a【'+$[_0x3a5772(0xf8,'0xf9')]+_0x3a5772('0x11f',0xbb)+_0x3ba047[_0x18f51e(0x560,0x518)]),subTitle+='\x0a【'+$['name']+_0x18f51e('0x5b8',0x55c)+_0x3ba047[_0x16d8a4('[HPl','0x2b4')]);}}catch(_0xa7f251){}finally{_0x14c5c5();}});});}function _0x29bb00(_0x39ad3d,_0x5d7405){return _0x5df6(_0x5d7405-'0x22c',_0x39ad3d);}function Post_Request(_0x6150a,_0x78f17){function _0xcbd5f1(_0x2e5d9c,_0x5749c7){return _0x494635(_0x2e5d9c,_0x5749c7-0x3d3);}function _0x49679b(_0xd5a4a4,_0x5cfe50){return _0x26f3ab(_0xd5a4a4- -'0x2f8',_0x5cfe50);}function _0x17779a(_0x4e3f34,_0x33b72a){return _0x29bb00(_0x33b72a,_0x4e3f34-0x17e);}return{'url':''+Host+_0x6150a+GetTime,'headers':{'Host':_0x49679b(-'0xb9',-0xbc)+_0xcbd5f1('3fK9',0x4a2),'Connection':_0xcbd5f1(']2cC',0x468),'Content-Length':_0x78f17[_0x49679b(-0x9b,-0x82)],'User-Agent':soy_xzzq_UA,'Content-Type':_0xcbd5f1('wA$R','0x4c6')+'n/x-www-fo'+'rm-urlenco'+_0x49679b(-'0x84',-0x38),'Accept':'*/*','Origin':_0x17779a(0x597,0x574)+_0x49679b(-'0x12b',-'0x147')+':99','X-Requested-With':_0xcbd5f1('dm3s','0x521')+_0x17779a('0x577',0x57f)},'body':_0x78f17};}function Get_Request(_0x444084){function _0x469bf6(_0x435388,_0x181321){return _0x494635(_0x181321,_0x435388- -'0x37');}function _0x2be9bd(_0x48cfa3,_0x4f96e9){return _0x26f3ab(_0x48cfa3- -0x252,_0x4f96e9);}function _0x30211a(_0x5207c1,_0x194358){return _0x29bb00(_0x194358,_0x5207c1-'0x171');}return{'url':''+Host+_0x444084+GetTime,'headers':{'Host':_0x30211a('0x573',0x524)+'net:99','Connection':_0x30211a(0x5f3,'0x5d9'),'TC-Token':token,'TC-Id':ID,'User-Agent':soy_xzzq_UA,'appKey':_0x2be9bd('0x49','0x3')+_0x2be9bd('0x19','0x89'),'Content-type':_0x469bf6(0xa9,'OP#P')+'n/x-www-fo'+_0x2be9bd(-0x4a,-'0x38')+_0x469bf6('0xdf','R4es'),'Accept':_0x2be9bd(-0x53,-0x16),'X-Requested-With':'w2a.W2Apig'+_0x469bf6('0x8e','RIb*'),'Cookie':_0x2be9bd('0x2d',0x6a)+_0x2be9bd('0x5c','0x9e')+_0x2be9bd('0x4e',0x4b)+_0x30211a('0x5a4','0x571')+_0x2be9bd(-'0x38',-'0x62')+'null;\x20alip'+_0x30211a('0x529',0x57a)+'=null;\x20wx_'+_0x30211a('0x511','0x4ad')+_0x2be9bd(-0x4f,-0x80)+_0x30211a(0x5d9,'0x5d2')+_0x2be9bd(-'0x11','0x28')+_0x30211a('0x5e2',0x58a)+_0x30211a('0x55d','0x5b5')+_0x2be9bd(-0x58,0xe)+_0x469bf6('0xaa','A%zY')+_0x2be9bd(0x43,'0x37')+_0x469bf6(0x11a,'T0Gx')+_0x2be9bd(0x2f,'0x8a')+'te_code=nu'+'ll;\x20p_mobi'+_0x2be9bd(-'0x62',-'0x20')+_0x469bf6('0x137','QMCT')+_0x30211a(0x516,0x542)+_0x2be9bd(-'0x74',-0xd8)+_0x30211a('0x532','0x53d')+'kname=null'+';\x20token='+token+_0x30211a('0x585',0x521)+soy_xzzq_mobile+';\x20userid='+ID}};}function _0x494635(_0x2bd0e8,_0x57ae0c){return _0x2dfb(_0x57ae0c- -0xea,_0x2bd0e8);}function GetTime(){let _0x275341=new Date();function _0x4f7000(_0x4eb217,_0x4906db){return _0x494635(_0x4eb217,_0x4906db-'0x269');}let _0x131c9e=_0x275341['getFullYea'+'r'](),_0x4b32f8=_0x275341['getMonth']()+0x1;function _0x2b1acc(_0x366980,_0x462991){return _0x26f3ab(_0x462991- -0x256,_0x366980);}_0x4b32f8=_0x4b32f8<0xa?'0'+_0x4b32f8:_0x4b32f8;let _0x6487fe=_0x275341[_0x4f7000('d80%','0x307')]();_0x6487fe=_0x6487fe<0xa?'0'+_0x6487fe:_0x6487fe;let _0x3b8e32=_0x275341[_0xdb6cbf('0x2fa',0x28b)]();_0x3b8e32=_0x3b8e32<0xa?'0'+_0x3b8e32:_0x3b8e32;let _0x43d07e=_0x275341[_0xdb6cbf(0x325,0x361)]();_0x43d07e=_0x43d07e<0xa?'0'+_0x43d07e:_0x43d07e;let _0x25759b=_0x275341[_0x2b1acc(-'0x7e',-0x16)]();_0x25759b=_0x25759b<0xa?'0'+_0x25759b:_0x25759b;let _0x2c546c=''+_0x131c9e+_0x4b32f8+_0x6487fe+_0x3b8e32+_0x43d07e+_0x25759b;function _0xdb6cbf(_0x154286,_0x254fcb){return _0x29bb00(_0x254fcb,_0x154286- -'0x110');}return _0x2c546c;}function GetHour(){let _0x3e5c41=new Date(),_0x424f54=_0x3e5c41[_0x1868f6('0x57a',0x512)]();function _0x1868f6(_0x4285db,_0x2ac37e){return _0x29bb00(_0x2ac37e,_0x4285db-'0x170');}return _0x424f54=_0x424f54<0xa?'0'+_0x424f54:_0x424f54,_0x424f54;}


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