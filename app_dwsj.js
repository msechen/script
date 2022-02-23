/*

安卓软件名称:电玩世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/10 6-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js
变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/dwsj_variable_data.js

注意:单拉这2个脚本,然后自行修改 raw_master_dwsj_variable_data.js 里面内容
如果不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

*/


const $ = new Env('【电玩世界】版本:22/02/23_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodU='jsjiami.com.v6',_0xodU_=['_0xodU'],_0x550c=[_0xodU,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x64\x77\x73\x6a\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x64\x77\x73\x6a\x5f\x74\x6f\x6b\x65\x6e','\x64\x77\x73\x6a\x5f\x62\x6f\x64\x79','\x64\x77\x73\x6a\x5f\x55\x41','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x75\x73\x65\x72','\x64\x69\x63\x65\x4e\x75\x6d','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\x67\x6f\x6c\x64','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x7b\x22\x6d\x65\x73\x73\x61\x67\x65\x22\x3a\x22','\x22\x2c\x22\x63\x79\x70\x68\x65\x72\x22\x3a\x33\x7d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x54\x6a\x46\x72\x6c\x59\x78\x73\x54\x58\x7a\x6a\x57\x4c\x69\x50\x7a\x61\x6d\x69\x47\x2e\x63\x6f\x4b\x6d\x54\x7a\x2e\x76\x36\x3d\x3d'];function _0x56ae(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x0));var _0x34a12b=_0x550c[_0x2d8f05];return _0x34a12b;};(function(_0x36c6a6,_0x33748d){var _0x3e4c21=0x0;for(_0x33748d=_0x36c6a6['shift'](_0x3e4c21>>0x2);_0x33748d&&_0x33748d!==(_0x36c6a6['pop'](_0x3e4c21>>0x3)+'')['replace'](/[TFrlYxTXzWLPzGKTz=]/g,'');_0x3e4c21++){_0x3e4c21=_0x3e4c21^0xd2c6e;}}(_0x550c,_0x56ae));const fs=require('\x66\x73');const dwsj_variable=$[_0x56ae('0')]()?require(_0x56ae('1')):'';!(async()=>{console[_0x56ae('2')](_0x56ae('3')+new Date(new Date()[_0x56ae('4')]()+new Date()[_0x56ae('5')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x56ae('6')]()+_0x56ae('7'));if(dwsj_variable[_0x56ae('8')]!==0xc8){console[_0x56ae('2')](_0x56ae('9'));return;}console[_0x56ae('2')](_0x56ae('a')+dwsj_variable[_0x56ae('b')][_0x56ae('c')][_0x56ae('d')]+_0x56ae('e'));subTitle='';for(i=0x0;i<dwsj_variable[_0x56ae('b')][_0x56ae('c')][_0x56ae('d')];i++){video_data=dwsj_variable[_0x56ae('b')][_0x56ae('f')];user_ID=dwsj_variable[_0x56ae('b')][_0x56ae('c')][i][_0x56ae('10')];dwsj_token=dwsj_variable[_0x56ae('b')][_0x56ae('c')][i][_0x56ae('11')];dwsj_body=dwsj_variable[_0x56ae('b')][_0x56ae('c')][i][_0x56ae('12')];dwsj_UA=dwsj_variable[_0x56ae('b')][_0x56ae('c')][i][_0x56ae('13')];if(!dwsj_UA){dwsj_UA=_0x56ae('14');}$[_0x56ae('15')]=i+0x1;console[_0x56ae('2')](_0x56ae('16')+$[_0x56ae('15')]+_0x56ae('17'));await implement();};if(notify){if(subTitle){await notify[_0x56ae('18')]($[_0x56ae('19')],subTitle);}}})()[_0x56ae('1a')](_0x4cfe67=>$[_0x56ae('1b')](_0x4cfe67))[_0x56ae('1c')](()=>$[_0x56ae('1d')]());async function implement(){await rollPoint();}function rollPoint(){let _0x26d672=Post_request(_0x56ae('1e'),dwsj_body);return new Promise((_0x69aeb7,_0x5db4b0)=>{$[_0x56ae('1f')](_0x26d672,async(_0x239b12,_0x2b4227,_0x281129)=>{try{if(_0x239b12){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('21'));subTitle+=_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('21');}else{console[_0x56ae('2')](_0x281129);let _0x12066b=JSON[_0x56ae('22')](_0x281129);if(_0x12066b[_0x56ae('8')]==0x1){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('23')+_0x12066b[_0x56ae('24')][_0x56ae('25')][_0x56ae('26')]+_0x56ae('27'));let _0x20559e=_0x12066b[_0x56ae('24')][_0x56ae('28')][_0x56ae('29')];console[_0x56ae('2')](_0x20559e);if(_0x20559e==0x0){await addNewBuilding();}else{await addGoodsBuff();await getBuildingEarn();await buildingLevelUp();}}else if(_0x12066b[_0x56ae('8')]==0x515){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('2a')+_0x12066b[_0x56ae('2b')]);}else{console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('2a')+_0x12066b[_0x56ae('2b')]);}}}catch(_0x4abc77){console[_0x56ae('2')](_0x4abc77,_0x2b4227);}finally{_0x69aeb7();}});});}function addNewBuilding(){let _0x2fb0e4=Post_request(_0x56ae('2c'),dwsj_body);return new Promise((_0x4d00e6,_0x370d86)=>{$[_0x56ae('1f')](_0x2fb0e4,async(_0x16b1ca,_0x5ea472,_0x59181e)=>{try{if(_0x16b1ca){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('2d'));subTitle+=_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('2d');}else{let _0x45a1e7=JSON[_0x56ae('22')](_0x59181e);if(_0x45a1e7[_0x56ae('8')]==0x1){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('2e')+_0x45a1e7[_0x56ae('24')][_0x56ae('2f')][_0x56ae('30')]+_0x56ae('27'));}else{console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('31')+_0x45a1e7[_0x56ae('2b')]);}}}catch(_0x15b200){console[_0x56ae('2')](_0x15b200,_0x5ea472);}finally{_0x4d00e6();}});});}function getBuildingEarn(){let _0x1843b2=Post_request(_0x56ae('32'),dwsj_body);return new Promise((_0x58b06f,_0x563b45)=>{$[_0x56ae('1f')](_0x1843b2,async(_0x2e8759,_0x1dbde2,_0x540530)=>{try{if(_0x2e8759){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('33'));subTitle+=_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('33');}else{let _0x5180f1=JSON[_0x56ae('22')](_0x540530);if(_0x5180f1[_0x56ae('8')]==0x1){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('34')+_0x5180f1[_0x56ae('24')][_0x56ae('2f')][_0x56ae('30')][_0x56ae('35')]+_0x56ae('27'));}else{console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('36')+_0x5180f1[_0x56ae('2b')]);}}}catch(_0x191e91){console[_0x56ae('2')](_0x191e91,_0x1dbde2);}finally{_0x58b06f();}});});}function buildingLevelUp(){let _0x1fa90d=Post_request(_0x56ae('37'),dwsj_body);return new Promise((_0x4853b1,_0x54135e)=>{$[_0x56ae('1f')](_0x1fa90d,async(_0x5640eb,_0x24936a,_0x3d9717)=>{try{if(_0x5640eb){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('38'));subTitle+=_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('38');}else{let _0x1dbf74=JSON[_0x56ae('22')](_0x3d9717);if(_0x1dbf74[_0x56ae('8')]==0x1){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('39')+_0x1dbf74[_0x56ae('24')][_0x56ae('2f')][_0x56ae('30')][_0x56ae('35')]+_0x56ae('27'));}else{console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('3a')+_0x1dbf74[_0x56ae('2b')]);}}}catch(_0x183991){console[_0x56ae('2')](_0x183991,_0x24936a);}finally{_0x4853b1();}});});}function addGoodsBuff(){let _0x1459bb=Post_request(_0x56ae('3b'),dwsj_body);return new Promise((_0x316c8f,_0x2cfea9)=>{$[_0x56ae('1f')](_0x1459bb,async(_0x43dd5b,_0x13cb1f,_0xeaa5e5)=>{try{if(_0x43dd5b){console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('3c'));subTitle+=_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('3c');}else{}}catch(_0x11ca30){console[_0x56ae('2')](_0x11ca30,_0x13cb1f);}finally{_0x316c8f();}});});}function reward_video(){let _0x4d04c8=_0x56ae('3d')+video_data+_0x56ae('3e');let _0xb3795a={'\x75\x72\x6c':_0x56ae('3f'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x56ae('40'),'content-type':_0x56ae('41'),'content-length':_0x4d04c8[_0x56ae('d')],'accept-encoding':_0x56ae('42'),'user-agent':_0x56ae('43'),'\x62\x6f\x64\x79':_0x4d04c8}};return new Promise((_0x432fcc,_0x25c6e6)=>{$[_0x56ae('1f')](_0xb3795a,async(_0x35ed4a,_0x5026aa,_0x117c99)=>{try{if(_0x35ed4a){console[_0x56ae('2')](_0x35ed4a);console[_0x56ae('2')](_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('44'));subTitle+=_0x56ae('20')+$[_0x56ae('15')]+_0x56ae('44');}else{console[_0x56ae('2')](_0x117c99);}}catch(_0x48fd45){console[_0x56ae('2')](_0x48fd45,_0x5026aa);}finally{_0x432fcc();}});});}function Post_request(_0x476688,_0x8d6dd1){return{'\x75\x72\x6c':_0x56ae('45')+_0x476688,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x56ae('46'),'Connection':_0x56ae('47'),'Content-Length':dwsj_body[_0x56ae('d')],'Pragma':_0x56ae('48'),'Cache-Control':_0x56ae('48'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x56ae('49'),'Accept':_0x56ae('4a'),'Origin':_0x56ae('4b'),'X-Requested-With':_0x56ae('4c'),'Sec-Fetch-Site':_0x56ae('4d'),'Sec-Fetch-Mode':_0x56ae('4e'),'Sec-Fetch-Dest':_0x56ae('4f'),'Referer':_0x56ae('50'),'Accept-Encoding':_0x56ae('51'),'Accept-Language':_0x56ae('52')},'\x62\x6f\x64\x79':_0x8d6dd1};};function Get_request(_0x19383e){return{'\x75\x72\x6c':_0x56ae('45')+_0x19383e,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x56ae('46'),'Connection':_0x56ae('47'),'Content-Length':0x0,'Pragma':_0x56ae('48'),'Cache-Control':_0x56ae('48'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x56ae('49'),'Accept':_0x56ae('4a'),'Origin':_0x56ae('4b'),'X-Requested-With':_0x56ae('4c'),'Sec-Fetch-Site':_0x56ae('4d'),'Sec-Fetch-Mode':_0x56ae('4e'),'Sec-Fetch-Dest':_0x56ae('4f'),'Referer':_0x56ae('50'),'Accept-Encoding':_0x56ae('51'),'Accept-Language':_0x56ae('52')}};};;_0xodU='jsjiami.com.v6';



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