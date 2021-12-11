/*

软件名称:守卫白菜

项目注册地址:http://share.zdkjlm.com/index.html?shangjiid=3133661

需要支付宝授权验证

小广告游戏,随时会凉,也会黑设备和黑号,能说就上,不上看看就可以了

不到的,一直审核可能就是黑的


必要变量:

变量名 soy_swbc_data
变量值 xxx&xxx
注释:抓包连接上jwk值&抓包请求头上user-agent
抓包找包含有http://app.zdkjlm.com:9080/lvxingapp/,的连接找需要变量,user-agent为可选填

多个号用 # 或 @ 或 换行 隔开

cron "0-59/10 11,12,19,20 * * *"

*/


const $ = new Env('守卫白菜');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodW='jsjiami.com.v6',_0xodW_=['_0xodW'],_0x4a7d=[_0xodW,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x73\x77\x62\x63\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x73\x77\x62\x63\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303\u6216\u6709\u8bef','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x2e\x7a\x64\x6b\x6a\x6c\x6d\x2e\x63\x6f\x6d\x3a\x39\x30\x38\x30\x2f\x6c\x76\x78\x69\x6e\x67\x61\x70\x70\x2f\x68\x61\x6c\x6c\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x63\x68\x61\x6e\x67\x65\x6c\x65\x76\x65\x6c\x3f\x6a\x77\x74\x3d','\x26\x67\x72\x61\x6e\x64\x6c\x65\x76\x65\x6c\x3d\x36\x26\x73\x6d\x61\x6c\x6c\x6c\x65\x76\x65\x6c\x3d\x33','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u7528\u6237\u767b\u5f55\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4e5f\u6709\u53ef\u80fd\x6a\x77\x6b\u8fc7\u671f','\x70\x61\x72\x73\x65','\x65\x72\x72\x63\x6f\x64\x65','\x64\x61\x74\x61','\x75\x73\x65\x72','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\x6c\x61\x6e\x64\x31','\x6c\x61\x6e\x64\x32','\x6c\x61\x6e\x64\x33','\x6c\x61\x6e\x64\x34','\x6c\x61\x6e\x64\x35','\x6c\x61\x6e\x64\x36','\x6c\x61\x6e\x64\x37','\x6c\x61\x6e\x64\x38','\x6c\x61\x6e\x64\x39','\x6c\x61\x6e\x64\x31\x30','\x6c\x61\x6e\x64\x31\x31','\x6c\x61\x6e\x64\x31\x32','\x0a\u571f\u5730\x31\u672a\u89e3\u9501','\x0a\u571f\u5730\x31\u5df2\u89e3\u9501','\x0a\u571f\u5730\x32\u672a\u89e3\u9501','\x0a\u571f\u5730\x32\u5df2\u89e3\u9501','\x0a\u571f\u5730\x33\u672a\u89e3\u9501','\x0a\u571f\u5730\x33\u5df2\u89e3\u9501','\x0a\u571f\u5730\x34\u672a\u89e3\u9501','\x0a\u571f\u5730\x34\u5df2\u89e3\u9501','\x0a\u571f\u5730\x35\u672a\u89e3\u9501','\x0a\u571f\u5730\x35\u5df2\u89e3\u9501','\x0a\u571f\u5730\x36\u672a\u89e3\u9501','\x0a\u571f\u5730\x36\u5df2\u89e3\u9501','\x0a\u571f\u5730\x37\u672a\u89e3\u9501','\x0a\u571f\u5730\x37\u5df2\u89e3\u9501','\x0a\u571f\u5730\x38\u672a\u89e3\u9501','\x0a\u571f\u5730\x38\u5df2\u89e3\u9501','\x0a\u571f\u5730\x39\u672a\u89e3\u9501','\x0a\u571f\u5730\x39\u5df2\u89e3\u9501','\x0a\u571f\u5730\x31\x30\u672a\u89e3\u9501','\x0a\u571f\u5730\x31\x30\u5df2\u89e3\u9501','\x0a\u571f\u5730\x31\x31\u672a\u89e3\u9501','\x0a\u571f\u5730\x31\x31\u5df2\u89e3\u9501','\x0a\u571f\u5730\x31\x32\u672a\u89e3\u9501','\x0a\u571f\u5730\x31\x32\u5df2\u89e3\u9501','\x20\u571f\u5730\u89e3\u9501\u72b6\u6001\u3011\x3a\x20\u67e5\u8be2\u5931\u8d25\x2c\u6709\u53ef\u80fd\x6a\x77\x6b\u5df2\u8fc7\u671f','\x75\x6e\x6c\x6f\x63\x6b\x6c\x61\x6e\x64\x3f\x6a\x77\x74\x3d','\x26\x64\x69\x64\x3d','\x20\u89e3\u9501\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4e5f\u6709\u53ef\u80fd\x6a\x77\x6b\u8fc7\u671f','\x76\x69\x64\x65\x6f\x43\x61\x6c\x6c\x42\x61\x63\x6b\x3f\x6a\x77\x74\x3d','\x26\x72\x65\x77\x61\x72\x64\x5f\x6e\x61\x6d\x65\x3d\x25\x45\x35\x25\x39\x30\x25\x38\x38\x25\x45\x36\x25\x38\x38\x25\x39\x30','\x20\u81ea\u52a8\u5408\u6210\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4e5f\u6709\u53ef\u80fd\x6a\x77\x6b\u8fc7\u671f','\x62\x69\x6e\x64\x73\x68\x61\x6e\x67\x6a\x69\x3f\x6a\x77\x74\x3d','\x26\x73\x6a\x75\x69\x64\x3d\x33\x31\x33\x33\x36\x36\x31','\x62\x75\x79\x64\x6f\x67\x3f\x6a\x77\x74\x3d','\x26\x64\x69\x64\x3d\x31\x26\x74\x3d\x31','\x20\u8d2d\u4e70\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4e5f\u6709\u53ef\u80fd\x6a\x77\x6b\u8fc7\u671f','\x20\u8d2d\u4e70\u3011\x3a\x20\u8d2d\u4e70\u6210\u529f','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u8d2d\u4e70\u3011\x3a\x20','\x65\x72\x72\x6d\x73\x67','\x26\x72\x65\x77\x61\x72\x64\x5f\x6e\x61\x6d\x65\x3d\x25\x45\x39\x25\x38\x37\x25\x39\x31\x25\x45\x35\x25\x42\x38\x25\x38\x31','\x20\u5237\u91d1\u5e01\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4e5f\u6709\u53ef\u80fd\x6a\x77\x6b\u8fc7\u671f','\x20\u5237\u91d1\u5e01\u3011\x3a\x20\u8d2d\u4e70\u6210\u529f','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x2e\x7a\x64\x6b\x6a\x6c\x6d\x2e\x63\x6f\x6d\x3a\x39\x30\x38\x30\x2f\x6c\x76\x78\x69\x6e\x67\x61\x70\x70\x2f\x6d\x69\x6e\x65\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x3f\x6a\x77\x74\x3d','\x26\x69\x64\x3d\x36\x26\x74\x79\x70\x65\x3d\x32','\x69\x64\x65\x6e\x74\x69\x74\x79','\x61\x70\x70\x2e\x7a\x64\x6b\x6a\x6c\x6d\x2e\x63\x6f\x6d\x3a\x39\x30\x38\x30','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x20\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4e5f\u6709\u53ef\u80fd\x6a\x77\x6b\u8fc7\u671f','\x20\u63d0\u73b0\u3011\x3a\x20\u63d0\u73b0\u6210\u529f','\x20\u63d0\u73b0\u3011\x3a\x20','\x6a\x73\x4a\x6a\x49\x57\x69\x61\x59\x6d\x68\x58\x69\x2e\x4f\x78\x4d\x63\x54\x6f\x6d\x4f\x2e\x71\x48\x75\x76\x36\x4e\x3d\x3d'];function _0x3514(_0x2d2fc7,_0x4a1fcd){_0x2d2fc7=~~'0x'['concat'](_0x2d2fc7['slice'](0x0));var _0x372d77=_0x4a7d[_0x2d2fc7];return _0x372d77;};(function(_0x1cdb01,_0x2982e0){var _0x16c556=0x0;for(_0x2982e0=_0x1cdb01['shift'](_0x16c556>>0x2);_0x2982e0&&_0x2982e0!==(_0x1cdb01['pop'](_0x16c556>>0x3)+'')['replace'](/[JIWYhXOxMTOqHuN=]/g,'');_0x16c556++){_0x16c556=_0x16c556^0xc2c0d;}}(_0x4a7d,_0x3514));let app_soy_swbc_data=[];!(async()=>{if(typeof $request!==_0x3514('0')){await get_appdata();}if($[_0x3514('1')]()){if(!process[_0x3514('2')][_0x3514('3')]){console[_0x3514('4')](_0x3514('5'));return;}if(process[_0x3514('2')][_0x3514('3')]&&process[_0x3514('2')][_0x3514('3')][_0x3514('6')]('\x0a')>-0x1){app_soy_swbc_data=process[_0x3514('2')][_0x3514('3')][_0x3514('7')]('\x0a');}else if(process[_0x3514('2')][_0x3514('3')]&&process[_0x3514('2')][_0x3514('3')][_0x3514('6')]('\x23')>-0x1){app_soy_swbc_data=process[_0x3514('2')][_0x3514('3')][_0x3514('7')]('\x23');}else if(process[_0x3514('2')][_0x3514('3')]&&process[_0x3514('2')][_0x3514('3')][_0x3514('6')]('\x40')>-0x1){app_soy_swbc_data=process[_0x3514('2')][_0x3514('3')][_0x3514('7')]('\x40');}else{app_soy_swbc_data=process[_0x3514('2')][_0x3514('3')][_0x3514('7')]();};}else{if(!$[_0x3514('8')](_0x3514('3'))){console[_0x3514('4')](_0x3514('5'));return;}if($[_0x3514('8')](_0x3514('3'))&&$[_0x3514('8')](_0x3514('3'))[_0x3514('6')]('\x23')>-0x1){app_soy_swbc_data=$[_0x3514('8')](_0x3514('3'))[_0x3514('7')]('\x40');}else if($[_0x3514('8')](_0x3514('3'))&&$[_0x3514('8')](_0x3514('3'))[_0x3514('6')]('\x0a')>-0x1){app_soy_swbc_data=$[_0x3514('8')](_0x3514('3'))[_0x3514('7')]('\x0a');}else if($[_0x3514('8')](_0x3514('3'))&&$[_0x3514('8')](_0x3514('3'))[_0x3514('6')]('\x40')>-0x1){app_soy_swbc_data=$[_0x3514('8')](_0x3514('3'))[_0x3514('7')]('\x40');}else{app_soy_swbc_data=$[_0x3514('8')](_0x3514('3'))[_0x3514('7')]();};}console[_0x3514('4')](_0x3514('9')+new Date(new Date()[_0x3514('a')]()+new Date()[_0x3514('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x3514('c')]()+_0x3514('d'));console[_0x3514('4')](_0x3514('e')+app_soy_swbc_data[_0x3514('f')]+_0x3514('10'));subTitle='';for(i=0x0;i<app_soy_swbc_data[_0x3514('f')];i++){soy_swbc_data=app_soy_swbc_data[i][_0x3514('7')]('\x26');soy_swbc_jwt=soy_swbc_data[0x0];soy_swbc_UA=soy_swbc_data[0x1];if(!soy_swbc_jwt){console[_0x3514('4')](_0x3514('11'));return;}if(!soy_swbc_UA){soy_swbc_UA=_0x3514('12');}$[_0x3514('13')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x3514('14')]($[_0x3514('15')],subTitle);}}})()[_0x3514('16')](_0x79f0ac=>$[_0x3514('17')](_0x79f0ac))[_0x3514('18')](()=>$[_0x3514('19')]());async function implement(){host=_0x3514('1a');console[_0x3514('4')](_0x3514('1b')+$[_0x3514('13')]+_0x3514('1c'));await swbc_inof();await swbc_hc();await swbc_yq();await swbc_sjb();await swbc_buydog();await swbc_tx();}function swbc_inof(){let _0x198aa0=Get_request(_0x3514('1d')+soy_swbc_jwt+_0x3514('1e'));return new Promise((_0x20950e,_0x3e2dbe)=>{$[_0x3514('1f')](_0x198aa0,async(_0x44e406,_0x424f42,_0xaf0218)=>{try{if(_0x44e406){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('21'));subTitle+=_0x3514('20')+$[_0x3514('13')]+_0x3514('21');}else{let _0x1b1cf8=JSON[_0x3514('22')](_0xaf0218);if(_0x1b1cf8[_0x3514('23')]==0x0){_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('26')];land1=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('27')];land2=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('28')];land3=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('29')];land4=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('2a')];land5=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('2b')];land6=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('2c')];land7=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('2d')];land8=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('2e')];land9=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('2f')];land10=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('30')];land11=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('31')];land12=_0x1b1cf8[_0x3514('24')][_0x3514('25')][_0x3514('32')];td_info='';if(land1==0x0){td_info+=_0x3514('33');await swbc_unlockland(0x1);}else{td_info+=_0x3514('34');}if(land2==0x0){td_info+=_0x3514('35');await swbc_unlockland(0x2);}else{td_info+=_0x3514('36');}if(land3==0x0){td_info+=_0x3514('37');await swbc_unlockland(0x3);}else{td_info+=_0x3514('38');}if(land4==0x0){td_info+=_0x3514('39');await swbc_unlockland(0x5);}else{td_info+=_0x3514('3a');}if(land5==0x0){td_info+=_0x3514('3b');await swbc_unlockland(0x6);}else{td_info+=_0x3514('3c');}if(land6==0x0){td_info+=_0x3514('3d');await swbc_unlockland(0x6);}else{td_info+=_0x3514('3e');}if(land7==0x0){td_info+=_0x3514('3f');await swbc_unlockland(0x7);}else{td_info+=_0x3514('40');}if(land8==0x0){td_info+=_0x3514('41');await swbc_unlockland(0x8);}else{td_info+=_0x3514('42');}if(land9==0x0){td_info+=_0x3514('43');await swbc_unlockland(0x9);}else{td_info+=_0x3514('44');}if(land10==0x0){td_info+=_0x3514('45');await swbc_unlockland(0xa);}else{td_info+=_0x3514('46');}if(land11==0x0){td_info+=_0x3514('47');await swbc_unlockland(0xb);}else{td_info+=_0x3514('48');}if(land12==0x0){td_info+=_0x3514('49');await swbc_unlockland(0xc);}else{td_info+=_0x3514('4a');}}else{console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('4b'));}}}catch(_0x51a257){console[_0x3514('4')](_0x51a257,_0x424f42);}finally{_0x20950e();}});});}function swbc_unlockland(_0x450c19){let _0x378b9c=Get_request(_0x3514('4c')+soy_swbc_jwt+_0x3514('4d')+_0x450c19);return new Promise((_0x5d8693,_0x154a0c)=>{$[_0x3514('1f')](_0x378b9c,async(_0x5dd557,_0x10857f,_0x1d4068)=>{try{if(_0x5dd557){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('4e'));subTitle+=_0x3514('20')+$[_0x3514('13')]+_0x3514('4e');}else{}}catch(_0x34554b){console[_0x3514('4')](_0x34554b,_0x10857f);}finally{_0x5d8693();}});});}function swbc_hc(){let _0x1a3f92=Get_request(_0x3514('4f')+soy_swbc_jwt+_0x3514('50'));return new Promise((_0x362174,_0x42e6c1)=>{$[_0x3514('1f')](_0x1a3f92,async(_0x35edf0,_0x2a167c,_0x237032)=>{try{if(_0x35edf0){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('51'));subTitle+=_0x3514('20')+$[_0x3514('13')]+_0x3514('51');}else{}}catch(_0x199e10){console[_0x3514('4')](_0x199e10,_0x2a167c);}finally{_0x362174();}});});}function swbc_yq(){let _0x2bb32d=Get_request(_0x3514('52')+soy_swbc_jwt+_0x3514('53'));return new Promise((_0x4ffcd6,_0x50c66e)=>{$[_0x3514('1f')](_0x2bb32d,async(_0x51bb14,_0x4eb8a4,_0xe7579e)=>{try{}catch(_0x476931){console[_0x3514('4')](_0x476931,_0x4eb8a4);}finally{_0x4ffcd6();}});});}function swbc_buydog(){let _0x46a3d9=Get_request(_0x3514('54')+soy_swbc_jwt+_0x3514('55'));return new Promise((_0x324450,_0x5537da)=>{$[_0x3514('1f')](_0x46a3d9,async(_0x5ac3c0,_0x312eca,_0x1e7403)=>{try{if(_0x5ac3c0){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('56'));subTitle+=_0x3514('20')+$[_0x3514('13')]+_0x3514('56');}else{let _0x1f18e4=JSON[_0x3514('22')](_0x1e7403);if(_0x1f18e4[_0x3514('23')]==0x0){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('57'));await $[_0x3514('58')](Math[_0x3514('59')](Math[_0x3514('5a')]()*(0x7d0-0x3e8+0x3e8)+0x3e8));await swbc_buydog();}else{console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('5b')+_0x1f18e4[_0x3514('5c')]);}}}catch(_0x952f86){console[_0x3514('4')](_0x952f86,_0x312eca);}finally{_0x324450();}});});}function swbc_sjb(){let _0x5758e5=Get_request(_0x3514('4f')+soy_swbc_jwt+_0x3514('5d'));return new Promise((_0xd3f927,_0x3ae81b)=>{$[_0x3514('1f')](_0x5758e5,async(_0x500a76,_0x2bae8c,_0x4f1b3c)=>{try{if(_0x500a76){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('5e'));subTitle+=_0x3514('20')+$[_0x3514('13')]+_0x3514('5e');}else{let _0x2c162d=JSON[_0x3514('22')](_0x4f1b3c);if(_0x2c162d[_0x3514('23')]==0x0){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('5f'));}else{console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('5b')+_0x2c162d[_0x3514('5c')]);}}}catch(_0x4fcb4b){console[_0x3514('4')](_0x4fcb4b,_0x2bae8c);}finally{_0xd3f927();}});});}function swbc_tx(){let _0x3c436b={'\x75\x72\x6c':_0x3514('60')+soy_swbc_jwt+_0x3514('61'),'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Encoding':_0x3514('62'),'User-Agent':soy_swbc_UA,'Host':_0x3514('63'),'Connection':_0x3514('64')}};return new Promise((_0x27f7e2,_0x25374b)=>{$[_0x3514('1f')](_0x3c436b,async(_0x169ab1,_0x99ec6d,_0x36be5f)=>{try{if(_0x169ab1){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('65'));subTitle+=_0x3514('20')+$[_0x3514('13')]+_0x3514('65');}else{let _0x3d9d0d=JSON[_0x3514('22')](_0x36be5f);if(_0x3d9d0d[_0x3514('23')]==0x0){console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('66'));}else{console[_0x3514('4')](_0x3514('20')+$[_0x3514('13')]+_0x3514('67')+_0x3d9d0d[_0x3514('5c')]);}}}catch(_0x2e4197){console[_0x3514('4')](_0x2e4197,_0x99ec6d);}finally{_0x27f7e2();}});});}function Get_request(_0x2e8a1e){return{'\x75\x72\x6c':''+host+_0x2e8a1e,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Encoding':_0x3514('62'),'User-Agent':soy_swbc_UA,'Host':_0x3514('63'),'Connection':_0x3514('64')}};};;_0xodW='jsjiami.com.v6';




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