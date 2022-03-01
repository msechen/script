/*

安卓软件名称:旅游联盟链

项目注册地址:http://api.leaguechains.yblylm.com/api/v2/recommend/u?uid=100422537&app_code=master

大佬叫写的毛,不知道有啥子有,自己慢慢玩吧,
抓包 链接带有http://api.leaguechains.yblylm.com/api/v2/ 的,然后复制整个链接填变量,很长的,链接中有手机号那种

必要变量:

变量名 soy_lylm_data
变量值 xxx
注释:整个链接

定时一天2-3次
cron 10 8,15 * * *


*/


const $ = new Env('【旅游联盟链】版本:22/03/01_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodT='jsjiami.com.v6',_0xodT_=['_0xodT'],_0x1bd6=[_0xodT,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6c\x79\x6c\x6d\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6c\x79\x6c\x6d\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x6d\x61\x74\x63\x68','\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x3d','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x74\x61\x73\x6b\x2f\x74\x61\x73\x6b\x49\x6e\x66\x6f\x3f','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u67e5\u8be2\u4efb\u52a1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x74\x6f\x64\x61\x79\x5f\x74\x61\x73\x6b\x5f\x74\x69\x6d\x65\x73','\x20\u67e5\u8be2\u4efb\u52a1\u3011\x3a\x20\u4eca\u65e5\u4efb\u52a1\u5df2\u5b8c\u6210','\x20\u67e5\u8be2\u4efb\u52a1\u3011\x3a\x20','\x6d\x73\x67','\x74\x61\x73\x6b\x2f\x6f\x6e\x41\x64\x56\x69\x64\x65\x6f\x43\x6f\x6d\x70\x6c\x65\x74\x65\x3f\x49\x64\x3d\x31\x26','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x7b\x22\x70\x6c\x61\x74\x66\x6f\x72\x6d\x22\x3a\x33\x7d','\x70\x6f\x73\x74','\x20\u6d3b\u8dc3\u5ea6\u4efb\u52a1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x74\x61\x73\x6b','\x61\x64\x5f\x76\x69\x64\x65\x6f','\x66\x69\x6e\x69\x73\x68\x65\x64','\x74\x6f\x74\x61\x6c\x5f\x63\x6f\x75\x6e\x74','\x26\x74\x79\x70\x65\x3d\x33\x30','\x74\x69\x74\x6c\x65','\x73\x74\x6f\x72\x65\x5f\x70\x72\x6f\x64\x75\x63\x74','\x26\x74\x79\x70\x65\x3d\x31\x30\x33\x36','\x20\u6d3b\u8dc3\u5ea6\u4efb\u52a1\u3011\x3a\x20','\x65\x6e\x65\x72\x67\x79\x2f\x65\x6e\x65\x72\x67\x79\x54\x61\x73\x6b\x52\x65\x77\x61\x72\x64','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20','\x4d\x44\x35','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x6c\x65\x61\x67\x75\x65\x63\x68\x61\x69\x6e\x73\x2e\x79\x62\x6c\x79\x6c\x6d\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x32\x2f','\x6d\x61\x73\x74\x65\x72','\x63\x6f\x6d\x2e\x63\x68\x61\x69\x6e\x2e\x74\x6f\x75\x72\x69\x73\x74\x2e\x6d\x61\x73\x74\x65\x72','\x75\x6e\x69\x6f\x6e','\x61\x70\x69\x2e\x6c\x65\x61\x67\x75\x65\x63\x68\x61\x69\x6e\x73\x2e\x79\x62\x6c\x79\x6c\x6d\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x34\x2e\x39\x2e\x33','\x68\x74\x74\x70\x3a\x2f\x2f\x77\x65\x62\x2e\x70\x72\x6f\x6a\x65\x63\x74\x2e\x79\x63\x74\x6f\x75\x72\x69\x73\x6d\x2e\x6e\x65\x74\x2f\x75\x6e\x69\x6f\x6e\x2f\x61\x70\x69\x2f\x76\x32\x2f\x65\x6e\x65\x72\x67\x79\x2f\x69\x6e\x64\x65\x78','\x77\x65\x62\x2e\x70\x72\x6f\x6a\x65\x63\x74\x2e\x79\x63\x74\x6f\x75\x72\x69\x73\x6d\x2e\x6e\x65\x74','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x68\x74\x74\x70\x3a\x2f\x2f\x77\x65\x62\x2e\x70\x72\x6f\x6a\x65\x63\x74\x2e\x79\x63\x74\x6f\x75\x72\x69\x73\x6d\x2e\x6e\x65\x74','\x68\x74\x74\x70\x3a\x2f\x2f\x77\x65\x62\x2e\x70\x72\x6f\x6a\x65\x63\x74\x2e\x79\x63\x74\x6f\x75\x72\x69\x73\x6d\x2e\x6e\x65\x74\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x61\x41\x62\x42\x63\x43\x64\x44\x65\x45\x66\x46\x67\x47\x68\x48\x69\x49\x6a\x4a\x6b\x4b','\x63\x68\x61\x72\x41\x74','\x51\x4c\x6a\x67\x73\x57\x6a\x69\x61\x45\x6d\x46\x4d\x69\x2e\x63\x6f\x4c\x6d\x2e\x74\x59\x76\x36\x43\x68\x64\x74\x4c\x6c\x3d\x3d'];function _0x305e(_0x3b1e1f,_0x1da886){_0x3b1e1f=~~'0x'['concat'](_0x3b1e1f['slice'](0x0));var _0x4d28a2=_0x1bd6[_0x3b1e1f];return _0x4d28a2;};(function(_0x1497b3,_0x419600){var _0x2dc104=0x0;for(_0x419600=_0x1497b3['shift'](_0x2dc104>>0x2);_0x419600&&_0x419600!==(_0x1497b3['pop'](_0x2dc104>>0x3)+'')['replace'](/[QLgWEFMLtYChdtLl=]/g,'');_0x2dc104++){_0x2dc104=_0x2dc104^0xd4453;}}(_0x1bd6,_0x305e));const crypto=require(_0x305e('0'));let app_soy_lylm_data=[];!(async()=>{if($[_0x305e('1')]()){if(!process[_0x305e('2')][_0x305e('3')]){console[_0x305e('4')](_0x305e('5'));return;}if(process[_0x305e('2')][_0x305e('3')]&&process[_0x305e('2')][_0x305e('3')][_0x305e('6')]('\x0a')>-0x1){app_soy_lylm_data=process[_0x305e('2')][_0x305e('3')][_0x305e('7')]('\x0a');}else if(process[_0x305e('2')][_0x305e('3')]&&process[_0x305e('2')][_0x305e('3')][_0x305e('6')]('\x23')>-0x1){app_soy_lylm_data=process[_0x305e('2')][_0x305e('3')][_0x305e('7')]('\x23');}else if(process[_0x305e('2')][_0x305e('3')]&&process[_0x305e('2')][_0x305e('3')][_0x305e('6')]('\x40')>-0x1){app_soy_lylm_data=process[_0x305e('2')][_0x305e('3')][_0x305e('7')]('\x40');}else{app_soy_lylm_data=process[_0x305e('2')][_0x305e('3')][_0x305e('7')]();};}console[_0x305e('4')](_0x305e('8')+new Date(new Date()[_0x305e('9')]()+new Date()[_0x305e('a')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x305e('b')]()+_0x305e('c'));console[_0x305e('4')](_0x305e('d')+app_soy_lylm_data[_0x305e('e')]+_0x305e('f'));subTitle='';for(i=0x0;i<app_soy_lylm_data[_0x305e('e')];i++){mobile=app_soy_lylm_data[i][_0x305e('10')](/mobile=(\S*)&p/)[0x1];token=app_soy_lylm_data[i][_0x305e('10')](/token=(\S*)&uid/)[0x1];uuid=app_soy_lylm_data[i][_0x305e('10')](/uuid=(\S*)/)[0x1];url_data=_0x305e('11')+app_soy_lylm_data[i][_0x305e('10')](/appVersion=(\S*)/)[0x1];$[_0x305e('12')]=i+0x1;console[_0x305e('4')](_0x305e('13')+$[_0x305e('12')]+_0x305e('14'));await implement();};if(notify){if(subTitle){await notify[_0x305e('15')]($[_0x305e('16')],subTitle);}}})()[_0x305e('17')](_0x5c9bfa=>$[_0x305e('18')](_0x5c9bfa))[_0x305e('19')](()=>$[_0x305e('1a')]());async function implement(){await taskInfo();await energy();}function taskInfo(){let _0x24906a=Get_request(_0x305e('1b')+url_data);return new Promise((_0x46ed40,_0x2f2f99)=>{$[_0x305e('1c')](_0x24906a,async(_0x3d312a,_0x35191a,_0x3624f1)=>{try{if(_0x3d312a){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('1e'));subTitle+=_0x305e('1d')+$[_0x305e('12')]+_0x305e('1e');}else{let _0x3b876f=JSON[_0x305e('1f')](_0x3624f1);if(_0x3b876f[_0x305e('20')]==0x7d0){if(_0x3b876f[_0x305e('21')][_0x305e('22')]==0x5){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('23'));}else{await AdVideo();}}else{console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('24')+_0x3b876f[_0x305e('25')]);}}}catch(_0x575929){console[_0x305e('4')](_0x575929,_0x35191a);}finally{_0x46ed40();}});});}function AdVideo(){let _0x1e64fb=Get_request(_0x305e('26')+url_data);return new Promise((_0x2907b7,_0x591bed)=>{$[_0x305e('1c')](_0x1e64fb,async(_0x2500ef,_0x3efec5,_0x4814ed)=>{try{if(_0x2500ef){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('27'));subTitle+=_0x305e('1d')+$[_0x305e('12')]+_0x305e('27');}else{let _0x2314e6=JSON[_0x305e('1f')](_0x4814ed);if(_0x2314e6[_0x305e('20')]==0x7d0){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('28')+_0x2314e6[_0x305e('25')]);await $[_0x305e('29')](Math[_0x305e('2a')](Math[_0x305e('2b')]()*(0x6d60-0x61a8+0x3e8)+0x61a8));await taskInfo();}else if(_0x2314e6[_0x305e('20')]==0x7d1){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('28')+_0x2314e6[_0x305e('25')]);}else{console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('28')+_0x2314e6[_0x305e('25')]);}}}catch(_0x503aab){console[_0x305e('4')](_0x503aab,_0x3efec5);}finally{_0x2907b7();}});});}function energy(){let _0x36e73c=Post_request_hy('',_0x305e('2c'));return new Promise((_0xcd8bce,_0x442108)=>{$[_0x305e('2d')](_0x36e73c,async(_0x440f28,_0x5c091f,_0x2befa0)=>{try{if(_0x440f28){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('2e'));subTitle+=_0x305e('1d')+$[_0x305e('12')]+_0x305e('2e');}else{let _0x5680eb=JSON[_0x305e('1f')](_0x2befa0);if(_0x5680eb[_0x305e('20')]==0x7d0){if(_0x5680eb[_0x305e('21')][_0x305e('2f')][_0x305e('30')][_0x305e('31')]<_0x5680eb[_0x305e('21')][_0x305e('2f')][_0x305e('30')][_0x305e('32')]){await TaskReward(url_data+_0x305e('33'),_0x5680eb[_0x305e('21')][_0x305e('2f')][_0x305e('30')][_0x305e('34')]);}if(_0x5680eb[_0x305e('21')][_0x305e('2f')][_0x305e('35')][_0x305e('31')]<_0x5680eb[_0x305e('21')][_0x305e('2f')][_0x305e('35')][_0x305e('32')]){await TaskReward(url_data+_0x305e('36'),_0x5680eb[_0x305e('21')][_0x305e('2f')][_0x305e('35')][_0x305e('34')]);}}else{console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+_0x305e('37')+_0x5680eb[_0x305e('25')]);}}}catch(_0x4bc3bc){console[_0x305e('4')](_0x4bc3bc,_0x5c091f);}finally{_0xcd8bce();}});});}function TaskReward(_0x504080,_0x2fe228){let _0x3669d5=Post_request(_0x305e('38'),_0x504080);return new Promise((_0x31dd5b,_0x5bf114)=>{$[_0x305e('2d')](_0x3669d5,async(_0x140e7c,_0x4f5331,_0x3fd5e9)=>{try{if(_0x140e7c){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+'\x20'+_0x2fe228+_0x305e('39'));subTitle+=_0x305e('1d')+$[_0x305e('12')]+'\x20'+_0x2fe228+_0x305e('39');}else{let _0x139833=JSON[_0x305e('1f')](_0x3fd5e9);if(_0x139833[_0x305e('20')]==0x7d0){console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+'\x20'+_0x2fe228+_0x305e('3a')+_0x139833[_0x305e('25')]);}else{console[_0x305e('4')](_0x305e('1d')+$[_0x305e('12')]+'\x20'+_0x2fe228+_0x305e('3a')+_0x139833[_0x305e('25')]);}}}catch(_0x488c27){console[_0x305e('4')](_0x488c27,_0x4f5331);}finally{_0x31dd5b();}});});}function Post_request(_0x3a4979,_0x546fe9){let _0x3bbe66=new Date()[_0x305e('9')]();let _0x26137e=randomString(0x6);let _0x5215d3=crypto[_0x305e('3b')](mobile+_0x3bbe66)[_0x305e('3c')]();return{'\x75\x72\x6c':_0x305e('3d')+_0x3a4979,'\x68\x65\x61\x64\x65\x72\x73':{'app_code':_0x305e('3e'),'app_id':_0x305e('3f'),'noncestr':_0x26137e,'platform':'\x32','source':_0x305e('40'),'timestamp':_0x3bbe66,'token':token,'uuid':uuid,'cipher':'\x5f'+_0x5215d3,'Host':_0x305e('41'),'Connection':_0x305e('42'),'Accept-Encoding':_0x305e('43'),'User-Agent':_0x305e('44')},'\x62\x6f\x64\x79':_0x546fe9};};function Get_request(_0x7263fe){let _0x5b721b=new Date()[_0x305e('9')]();let _0x18becb=randomString(0x6);let _0x104ebf=crypto[_0x305e('3b')](mobile+_0x5b721b)[_0x305e('3c')]();return{'\x75\x72\x6c':_0x305e('3d')+_0x7263fe,'\x68\x65\x61\x64\x65\x72\x73':{'app_code':_0x305e('3e'),'app_id':_0x305e('3f'),'noncestr':_0x18becb,'platform':'\x32','source':_0x305e('40'),'timestamp':_0x5b721b,'token':token,'uuid':uuid,'cipher':'\x5f'+_0x104ebf,'Host':_0x305e('41'),'Connection':_0x305e('42'),'Accept-Encoding':_0x305e('43'),'User-Agent':_0x305e('44')}};};function Post_request_hy(_0x103489,_0x29c64d){let _0x1dda9b=new Date()[_0x305e('9')]();return{'\x75\x72\x6c':_0x305e('45'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x305e('46'),'Connection':_0x305e('47'),'Content-Length':_0x29c64d[_0x305e('e')],'Accept':_0x305e('48'),'timestamp':_0x1dda9b,'Authorization':token,'source':_0x305e('40'),'User-Agent':_0x305e('49'),'Content-Type':_0x305e('4a'),'Origin':_0x305e('4b'),'X-Requested-With':_0x305e('3f'),'Referer':_0x305e('4c'),'Accept-Encoding':_0x305e('4d'),'Accept-Language':_0x305e('4e')},'\x62\x6f\x64\x79':_0x29c64d};};function Get_request_hy(_0x5954c9){let _0x5163a8=new Date()[_0x305e('9')]();return{'\x75\x72\x6c':_0x305e('45'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x305e('46'),'Connection':_0x305e('47'),'Content-Length':0x0,'Accept':_0x305e('48'),'timestamp':_0x5163a8,'Authorization':token,'source':_0x305e('40'),'User-Agent':_0x305e('49'),'Content-Type':_0x305e('4a'),'Origin':_0x305e('4b'),'X-Requested-With':_0x305e('3f'),'Referer':_0x305e('4c'),'Accept-Encoding':_0x305e('4d'),'Accept-Language':_0x305e('4e')}};};function randomString(_0x35f493){let _0x1dd734=_0x305e('4f');let _0x516c5d=_0x1dd734[_0x305e('e')];let _0x41920c='';for(let _0x3f715f=0x0;_0x3f715f<_0x35f493;_0x3f715f++){_0x41920c+=_0x1dd734[_0x305e('50')](Math[_0x305e('2a')](Math[_0x305e('2b')]()*_0x516c5d));}return _0x41920c;};_0xodT='jsjiami.com.v6';



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