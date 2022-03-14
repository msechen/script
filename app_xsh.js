/*

安卓软件名称:鑫生活

项目注册地址:https://jyxapp.juyuanxinkeji.com/dist/#/regist/642609

邀请码:642609

333积分=3元才可提现,

一个ip只能挂3个号,否则封号

必要变量:

变量名 soy_xsh_data
变量值 微信阅读的code&抓包app的请求头token
注释:参数一:阅读code,app阅读后跳抓包微信链接 带有 api.gezs.cc/read/index 的链接上的请求数据中的code值(此值只有2小时)
参数二:抓包app 带有 jyxtest.juyuanxinkeji.com 链接的请求头是 token 值

阅读需要每跑一次(过期)就要补一次,然后不想做只填一个token参数即可

多个号用 # 或 @ 或 换行 隔开

cron 25 5,15 * * *

*/


const $ = new Env('鑫生活');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';




var _0xodr='jsjiami.com.v6',_0xodr_=['_0xodr'],_0x5f12=[_0xodr,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x78\x73\x68\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x78\x73\x68\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x37\x2e\x31\x2e\x32\x3b\x20\x56\x4f\x47\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x4e\x32\x47\x34\x38\x48\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x36\x38\x2e\x30\x2e\x33\x34\x34\x30\x2e\x37\x30\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6a\x79\x78\x74\x65\x73\x74\x2e\x6a\x75\x79\x75\x61\x6e\x78\x69\x6e\x6b\x65\x6a\x69\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x31\x2e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x65\x7a\x73\x2e\x63\x63\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x61\x64\x76\x65\x72\x74\x5f\x74\x79\x70\x65\x2f\x69\x6e\x64\x65\x78','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4efb\u52a1\u72b6\u51b5\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x61\x64\x76\x65\x72\x74','\x6e\x75\x6d\x62\x65\x72\x5f\x76\x69\x65\x77\x73','\x20\u4efb\u52a1\u72b6\u51b5\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u5b8c\u6210\x2c\u4e0d\u505a\u9605\u8bfb\u4efb\u52a1','\x20\u4efb\u52a1\u72b6\u51b5\u3011\x3a\x20\u4eca\u65e5\u4efb\u52a1\u5df2\u5b8c\u6210','\x20\u4efb\u52a1\u72b6\u51b5\u3011\x3a\x20','\x6d\x73\x67','\x75\x73\x65\x72\x2f\x69\x6e\x64\x65\x78','\x20\u7528\u6237\u72b6\u51b5\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u72b6\u51b5\u3011\x3a\x20','\x72\x65\x61\x64\x2f\x69\x6e\x64\x65\x78','\x7b\x22\x63\x68\x61\x6e\x6e\x65\x6c\x5f\x69\x64\x22\x3a\x22\x63\x61\x78\x63\x64\x37\x22\x2c\x22\x75\x73\x65\x72\x5f\x69\x64\x22\x3a\x22','\x22\x2c\x22\x75\x72\x6c\x5f\x63\x6f\x64\x65\x22\x3a\x22','\x20\u83b7\u53d6\x69\x64\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x6f\x70\x65\x6e\x69\x64','\x75\x6e\x69\x74\x65\x5f\x69\x64','\x61\x72\x74\x69\x63\x6c\x65','\x20\u83b7\u53d6\x69\x64\u3011\x3a\x20','\x72\x65\x61\x64\x2f\x74\x69\x6d\x65\x53\x74\x61\x72\x74\x5f\x32','\x7b\x22\x61\x72\x74\x69\x63\x6c\x65\x5f\x69\x64\x22\x3a','\x2c\x22\x6f\x70\x65\x6e\x69\x64\x22\x3a\x22','\x22\x2c\x22\x75\x6e\x69\x74\x65\x5f\x69\x64\x22\x3a\x22','\x20\u63d0\u4ea4\u9605\u8bfb\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u63d0\u4ea4\u9605\u8bfb\u3011\x3a\x20','\x61\x64\x76\x65\x72\x74\x5f\x72\x65\x63\x6f\x72\x64\x2f\x73\x61\x76\x65','\x7b\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\x20\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u5e7f\u544a\u3011\x3a\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6a\x79\x78\x74\x65\x73\x74\x2e\x6a\x75\x79\x75\x61\x6e\x78\x69\x6e\x6b\x65\x6a\x69\x2e\x63\x6f\x6d','\x61\x70\x69\x2e\x67\x65\x7a\x73\x2e\x63\x63','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x31\x3b\x20\x53\x4b\x57\x2d\x41\x30\x20\x42\x75\x69\x6c\x64\x2f\x53\x4b\x59\x57\x32\x31\x31\x30\x31\x35\x31\x43\x4e\x30\x30\x4d\x52\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x38\x36\x2e\x30\x2e\x34\x32\x34\x30\x2e\x39\x39\x20\x58\x57\x45\x42\x2f\x33\x31\x38\x35\x20\x4d\x4d\x57\x45\x42\x53\x44\x4b\x2f\x32\x30\x32\x31\x31\x32\x30\x32\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x4d\x57\x45\x42\x49\x44\x2f\x37\x35\x39\x39\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x38\x2e\x30\x2e\x31\x38\x2e\x32\x30\x36\x30\x28\x30\x78\x32\x38\x30\x30\x31\x32\x33\x37\x29\x20\x50\x72\x6f\x63\x65\x73\x73\x2f\x74\x6f\x6f\x6c\x73\x6d\x70\x20\x57\x65\x43\x68\x61\x74\x2f\x61\x72\x6d\x36\x34\x20\x57\x65\x69\x78\x69\x6e\x20\x4e\x65\x74\x54\x79\x70\x65\x2f\x57\x49\x46\x49\x20\x4c\x61\x6e\x67\x75\x61\x67\x65\x2f\x7a\x68\x5f\x43\x4e\x20\x41\x42\x49\x2f\x61\x72\x6d\x36\x34','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x68\x74\x74\x70\x3a\x2f\x2f\x63\x68\x32\x39\x2e\x63\x68\x65\x63\x6b\x73\x68\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x74\x65\x6e\x63\x65\x6e\x74\x2e\x6d\x6d','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x6a\x6e\x73\x6a\x66\x67\x51\x69\x6b\x45\x75\x61\x6d\x5a\x74\x69\x2e\x63\x59\x6f\x6d\x55\x2e\x57\x58\x48\x76\x36\x4a\x4d\x3d\x3d'];function _0x2181(_0x2699a9,_0x501e82){_0x2699a9=~~'0x'['concat'](_0x2699a9['slice'](0x0));var _0x4a9879=_0x5f12[_0x2699a9];return _0x4a9879;};(function(_0x589c6d,_0x5b08bd){var _0x4ef491=0x0;for(_0x5b08bd=_0x589c6d['shift'](_0x4ef491>>0x2);_0x5b08bd&&_0x5b08bd!==(_0x589c6d['pop'](_0x4ef491>>0x3)+'')['replace'](/[nfgQkEuZtYUWXHJM=]/g,'');_0x4ef491++){_0x4ef491=_0x4ef491^0xd75bf;}}(_0x5f12,_0x2181));const AES_DE=require(_0x2181('0'));let app_soy_xsh_data=[],soy_xsh_UA='';!(async()=>{if(typeof $request!==_0x2181('1')){await get_appdata();}if($[_0x2181('2')]()){if(!process[_0x2181('3')][_0x2181('4')]){console[_0x2181('5')](_0x2181('6'));return;}if(process[_0x2181('3')][_0x2181('4')]&&process[_0x2181('3')][_0x2181('4')][_0x2181('7')]('\x0a')>-0x1){app_soy_xsh_data=process[_0x2181('3')][_0x2181('4')][_0x2181('8')]('\x0a');}else if(process[_0x2181('3')][_0x2181('4')]&&process[_0x2181('3')][_0x2181('4')][_0x2181('7')]('\x23')>-0x1){app_soy_xsh_data=process[_0x2181('3')][_0x2181('4')][_0x2181('8')]('\x23');}else if(process[_0x2181('3')][_0x2181('4')]&&process[_0x2181('3')][_0x2181('4')][_0x2181('7')]('\x40')>-0x1){app_soy_xsh_data=process[_0x2181('3')][_0x2181('4')][_0x2181('8')]('\x40');}else{app_soy_xsh_data=process[_0x2181('3')][_0x2181('4')][_0x2181('8')]();};}else{if(!$[_0x2181('9')](_0x2181('4'))){console[_0x2181('5')](_0x2181('6'));return;}if($[_0x2181('9')](_0x2181('4'))&&$[_0x2181('9')](_0x2181('4'))[_0x2181('7')]('\x0a')>-0x1){app_soy_xsh_data=$[_0x2181('9')](_0x2181('4'))[_0x2181('8')]('\x0a');}else if($[_0x2181('9')](_0x2181('4'))&&$[_0x2181('9')](_0x2181('4'))[_0x2181('7')]('\x40')>-0x1){app_soy_xsh_data=$[_0x2181('9')](_0x2181('4'))[_0x2181('8')]('\x40');}else if($[_0x2181('9')](_0x2181('4'))&&$[_0x2181('9')](_0x2181('4'))[_0x2181('7')]('\x23')>-0x1){app_soy_xsh_data=$[_0x2181('9')](_0x2181('4'))[_0x2181('8')]('\x23');}else{app_soy_xsh_data=$[_0x2181('9')](_0x2181('4'))[_0x2181('8')]();};}console[_0x2181('5')](_0x2181('a')+new Date(new Date()[_0x2181('b')]()+new Date()[_0x2181('c')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2181('d')]()+_0x2181('e'));console[_0x2181('5')](_0x2181('f')+app_soy_xsh_data[_0x2181('10')]+_0x2181('11'));subTitle='';for(i=0x0;i<app_soy_xsh_data[_0x2181('10')];i++){soy_xsh_data=app_soy_xsh_data[i][_0x2181('8')]('\x26');if(soy_xsh_data[_0x2181('10')]==0x2){code=soy_xsh_data[0x0];token=soy_xsh_data[0x1];}else{token=soy_xsh_data[0x0];code='';}if(!soy_xsh_UA){soy_xsh_UA=_0x2181('12');}$[_0x2181('13')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x2181('14')]($[_0x2181('15')],subTitle);}}})()[_0x2181('16')](_0x400735=>$[_0x2181('17')](_0x400735))[_0x2181('18')](()=>$[_0x2181('19')]());async function implement(){host=_0x2181('1a');host_wx=_0x2181('1b');console[_0x2181('5')](_0x2181('1c')+$[_0x2181('13')]+_0x2181('1d'));await advert_type();}function advert_type(){let _0xa179f7=Post_request(_0x2181('1e'),'');return new Promise((_0x7bec22,_0x5814b1)=>{$[_0x2181('1f')](_0xa179f7,async(_0x47674b,_0x336e82,_0x10ffb7)=>{try{if(_0x47674b){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('21'));subTitle+=_0x2181('20')+$[_0x2181('13')]+_0x2181('21');}else{let _0x1ed7c3=JSON[_0x2181('22')](_0x10ffb7);if(_0x1ed7c3[_0x2181('23')]==0x1){if(_0x1ed7c3[_0x2181('24')][_0x2181('25')][0x0][_0x2181('26')]<0x8){await save();}else{if(!code){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('27'));}else{if(_0x1ed7c3[_0x2181('24')][_0x2181('25')][0x1][_0x2181('26')]<0x14){await user();}else{console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('28'));}}}}else{console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('29')+_0x1ed7c3[_0x2181('2a')]);}}}catch(_0x296d9d){console[_0x2181('5')](_0x296d9d,_0x336e82);}finally{_0x7bec22();}});});}function user(){let _0x47f4e3=Post_request(_0x2181('2b'),'');return new Promise((_0x427c1f,_0x3f9083)=>{$[_0x2181('1f')](_0x47f4e3,async(_0x164f2e,_0x2bfd3a,_0x3b0893)=>{try{if(_0x164f2e){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('2c'));subTitle+=_0x2181('20')+$[_0x2181('13')]+_0x2181('2c');}else{let _0x50d960=JSON[_0x2181('22')](_0x3b0893);if(_0x50d960[_0x2181('23')]==0x1){user_id=_0x50d960[_0x2181('24')][_0x2181('24')]['\x69\x64'];await get_id();}else if(_0x50d960[_0x2181('23')]==0x195){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('2d')+_0x50d960[_0x2181('2a')]);}else{console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('2d')+_0x50d960[_0x2181('2a')]);}}}catch(_0x470946){console[_0x2181('5')](_0x470946,_0x2bfd3a);}finally{_0x427c1f();}});});}function get_id(){let _0x418d61=Post_request_wx(_0x2181('2e'),_0x2181('2f')+user_id+_0x2181('30')+code+'\x22\x7d');return new Promise((_0x1ae9d6,_0x205795)=>{$[_0x2181('1f')](_0x418d61,async(_0x835072,_0x33bc56,_0xb3b918)=>{try{if(_0x835072){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('31'));subTitle+=_0x2181('20')+$[_0x2181('13')]+_0x2181('31');}else{let _0x28c764=JSON[_0x2181('22')](_0xb3b918);if(_0x28c764[_0x2181('23')]==0xc8){await timeStart_2(_0x28c764[_0x2181('24')][_0x2181('32')],_0x28c764[_0x2181('24')][_0x2181('33')],_0x28c764[_0x2181('24')][_0x2181('34')]['\x69\x64']);}else{console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('35')+_0x28c764[_0x2181('2a')]);}}}catch(_0x23dd97){console[_0x2181('5')](_0x23dd97,_0x33bc56);}finally{_0x1ae9d6();}});});}function timeStart_2(_0x143d6b,_0x579ceb,_0x4f4b2d){let _0x26be1c=Post_request_wx(_0x2181('36'),_0x2181('37')+_0x4f4b2d+_0x2181('38')+_0x143d6b+_0x2181('39')+_0x579ceb+'\x22\x7d');return new Promise((_0x3bb197,_0x32c21b)=>{$[_0x2181('1f')](_0x26be1c,async(_0x4a041b,_0x1fb851,_0xa148bb)=>{try{if(_0x4a041b){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('3a'));subTitle+=_0x2181('20')+$[_0x2181('13')]+_0x2181('3a');}else{let _0x1dbb46=JSON[_0x2181('22')](_0xa148bb);if(_0x1dbb46[_0x2181('23')]==0xc8){await $[_0x2181('3b')](Math[_0x2181('3c')](Math[_0x2181('3d')]()*(0x1f40-0x1770+0x3e8)+0x1770));console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('3e')+_0x1dbb46[_0x2181('2a')]);await get_id();}else{console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('3e')+_0x1dbb46[_0x2181('2a')]);}}}catch(_0x5e66ec){console[_0x2181('5')](_0x5e66ec,_0x1fb851);}finally{_0x3bb197();}});});}function save(){let _0x1e76a2=Post_request(_0x2181('3f'),_0x2181('40'));return new Promise((_0x1ec5c8,_0xfae505)=>{$[_0x2181('1f')](_0x1e76a2,async(_0x16c0f2,_0x1ef556,_0x594f65)=>{try{if(_0x16c0f2){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('41'));subTitle+=_0x2181('20')+$[_0x2181('13')]+_0x2181('41');console[_0x2181('5')](_0x16c0f2);}else{let _0xd4f2d1=JSON[_0x2181('22')](_0x594f65);if(_0xd4f2d1[_0x2181('23')]==0x1){console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('42')+_0xd4f2d1[_0x2181('2a')]);await $[_0x2181('3b')](Math[_0x2181('3c')](Math[_0x2181('3d')]()*(0x3a98-0x2710+0x3e8)+0x2710));await advert_type();}else{console[_0x2181('5')](_0x2181('20')+$[_0x2181('13')]+_0x2181('42')+_0xd4f2d1[_0x2181('2a')]);}}}catch(_0x5d6b20){console[_0x2181('5')](_0x5d6b20,_0x1ef556);}finally{_0x1ec5c8();}});});}function Post_request(_0x1bcc87,_0x38c1d5){return{'\x75\x72\x6c':_0x2181('1a')+_0x1bcc87,'\x68\x65\x61\x64\x65\x72\x73':{'Content-Type':_0x2181('43'),'Accept-encoding':_0x2181('44'),'Content-Length':_0x38c1d5[_0x2181('10')],'Host':_0x2181('45'),'Token':token},'\x62\x6f\x64\x79':_0x38c1d5};};function Post_request_wx(_0x5df0f5,_0xcd0380){return{'\x75\x72\x6c':''+host_wx+_0x5df0f5,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2181('46'),'Connection':_0x2181('47'),'Content-Length':_0xcd0380[_0x2181('10')],'Accept':_0x2181('48'),'User-Agent':_0x2181('49'),'Content-Type':_0x2181('4a'),'Origin':_0x2181('4b'),'X-Requested-With':_0x2181('4c'),'Sec-Fetch-Site':_0x2181('4d'),'Sec-Fetch-Mode':_0x2181('4e'),'Sec-Fetch-Dest':_0x2181('4f'),'Accept-Encoding':_0x2181('50'),'Accept-Language':_0x2181('51')},'\x62\x6f\x64\x79':_0xcd0380};};;_0xodr='jsjiami.com.v6';



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