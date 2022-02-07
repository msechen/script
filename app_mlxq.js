/*

软件名称:米粒星球

项目注册地址:http://app.milixingqiu.com/Re.oh/i/7USV

需要实名认证,提现是到微信的,所以要绑定微信提现的是0.3元
需要去玩一个试玩游戏后才能领取分红(推荐免安装的金币大富翁,税收首富,反正就玩这些模拟商业类的游戏比较快)



必要变量:

变量名 soy_mlxq_data
变量值 xxx&xxx
注释:抓包带有app.milixingqiu.com域名的链接说的token&抓包请求头上user-agent


多个号用 # 或 @ 换行 隔开

cron "25 0-59/1 * * *"

声明:之适配青龙使用
声明:之适配青龙使用
声明:之适配青龙使用

*/


const $ = new Env('米粒星球');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodO='jsjiami.com.v6',_0xodO_=['_0xodO'],_0x5c29=[_0xodO,'\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6d\x6c\x78\x71\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6d\x6c\x78\x71\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x2e\x6d\x69\x6c\x69\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x66\x65\x6e\x68\x6f\x6e\x67\x2f','\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x77\x61\x74\x63\x68\x41\x64\x3f\x74\x6f\x6b\x65\x6e\x3d','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u770b\u5e7f\u544a\u89c6\u9891\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x73\x74\x61\x74\x75\x73','\x20\u770b\u5e7f\u544a\u89c6\u9891\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x67\x65\x74\x46\x65\x6e\x68\x6f\x6e\x67\x3f\x74\x6f\x6b\x65\x6e\x3d','\x20\u63d0\u53d6\u5206\u7ea2\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u63d0\u53d6\u5206\u7ea2\u3011\x3a\x20','\x6c\x69\x6e\x67\x71\x75\x3f\x74\x6f\x6b\x65\x6e\x3d','\x20\u9886\u53d6\u5206\u7ea2\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u53d6\u5206\u7ea2\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x2e\x6d\x69\x6c\x69\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6e\x2f\x61\x70\x69\x5f\x75\x73\x65\x72\x69\x73\x74\x69\x2e\x6f\x68\x3f\x74\x6f\x6b\x65\x6e\x3d','\x26\x6d\x6f\x6e\x65\x79\x3d\x30\x2e\x33\x26\x70\x61\x79\x5f\x74\x79\x70\x65\x3d\x32','\x61\x70\x70\x2e\x6d\x69\x6c\x69\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6e','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x20\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u63d0\u73b0\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x2e\x6d\x69\x6c\x69\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x67\x61\x6d\x65\x2f\x75\x73\x65\x72\x49\x6e\x66\x6f\x3f\x74\x6f\x6b\x65\x6e\x3d','\x20\u7528\u6237\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x64\x61\x74\x61','\x72\x65\x6c\x31','\x20\u7528\u6237\u72b6\u6001\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x2e\x6d\x69\x6c\x69\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x47\x61\x6d\x65\x2f\x62\x69\x6e\x64\x52\x65\x6c\x31\x3f\x74\x6f\x6b\x65\x6e\x3d','\x26\x63\x6f\x64\x65\x3d\x37\x55\x53\x56','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x5a\x6a\x73\x6a\x70\x69\x70\x61\x6d\x69\x78\x2e\x77\x63\x50\x6f\x6d\x2e\x71\x6e\x76\x51\x4a\x36\x58\x51\x68\x71\x59\x3d\x3d'];function _0x26fa(_0x580a8c,_0xf42008){_0x580a8c=~~'0x'['concat'](_0x580a8c['slice'](0x0));var _0x552241=_0x5c29[_0x580a8c];return _0x552241;};(function(_0x3666fb,_0x470f91){var _0x190f41=0x0;for(_0x470f91=_0x3666fb['shift'](_0x190f41>>0x2);_0x470f91&&_0x470f91!==(_0x3666fb['pop'](_0x190f41>>0x3)+'')['replace'](/[ZppxwPqnQJXQhqY=]/g,'');_0x190f41++){_0x190f41=_0x190f41^0xcf6d6;}}(_0x5c29,_0x26fa));let app_soy_mlxq_data=[],soy_mlxq_UA='';console[_0x26fa('0')](_0x26fa('1'));!(async()=>{if($[_0x26fa('2')]()){if(!process[_0x26fa('3')][_0x26fa('4')]){console[_0x26fa('0')](_0x26fa('5'));return;}if(process[_0x26fa('3')][_0x26fa('4')]&&process[_0x26fa('3')][_0x26fa('4')][_0x26fa('6')]('\x0a')>-0x1){app_soy_mlxq_data=process[_0x26fa('3')][_0x26fa('4')][_0x26fa('7')]('\x0a');}else if(process[_0x26fa('3')][_0x26fa('4')]&&process[_0x26fa('3')][_0x26fa('4')][_0x26fa('6')]('\x23')>-0x1){app_soy_mlxq_data=process[_0x26fa('3')][_0x26fa('4')][_0x26fa('7')]('\x23');}else if(process[_0x26fa('3')][_0x26fa('4')]&&process[_0x26fa('3')][_0x26fa('4')][_0x26fa('6')]('\x40')>-0x1){app_soy_mlxq_data=process[_0x26fa('3')][_0x26fa('4')][_0x26fa('7')]('\x40');}else{app_soy_mlxq_data=process[_0x26fa('3')][_0x26fa('4')][_0x26fa('7')]();};}console[_0x26fa('0')](_0x26fa('8')+new Date(new Date()[_0x26fa('9')]()+new Date()[_0x26fa('a')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x26fa('b')]()+_0x26fa('c'));console[_0x26fa('0')](_0x26fa('d')+app_soy_mlxq_data[_0x26fa('e')]+_0x26fa('f'));subTitle='';for(i=0x0;i<app_soy_mlxq_data[_0x26fa('e')];i++){let _0x24d0b0=app_soy_mlxq_data[i][_0x26fa('7')]('\x26');token=_0x24d0b0[0x0];soy_mlxq_UA=_0x24d0b0[0x1];if(!soy_mlxq_UA){soy_mlxq_UA=_0x26fa('10');}$[_0x26fa('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x26fa('12')]($[_0x26fa('13')],subTitle);}}})()[_0x26fa('14')](_0x56f272=>$[_0x26fa('15')](_0x56f272))[_0x26fa('16')](()=>$[_0x26fa('17')]());async function implement(){host=_0x26fa('18');console[_0x26fa('0')](_0x26fa('19')+$[_0x26fa('11')]+_0x26fa('1a'));await watchAd();await getFenhong();await linqu();await seetx();await userInfo();}function watchAd(){let _0x1951ff=Get_request(_0x26fa('1b')+token);return new Promise((_0x37ab78,_0x3c922d)=>{$[_0x26fa('1c')](_0x1951ff,async(_0x355cfe,_0x4c3840,_0x283b6d)=>{try{if(_0x355cfe){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('1e'));subTitle+=_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('1e');}else{let _0x4fa0ea=JSON[_0x26fa('1f')](_0x283b6d);if(_0x4fa0ea[_0x26fa('20')]==0x1){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('21')+_0x4fa0ea[_0x26fa('22')]);}else{console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('21')+_0x4fa0ea[_0x26fa('22')]);}}}catch(_0x2e2b7a){console[_0x26fa('0')](_0x2e2b7a,_0x4c3840);}finally{_0x37ab78();}});});}function getFenhong(){let _0x2766db=Get_request(_0x26fa('23')+token);return new Promise((_0x14e607,_0x32e314)=>{$[_0x26fa('1c')](_0x2766db,async(_0x3109a9,_0x5dd097,_0x4e0986)=>{try{if(_0x3109a9){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('24'));subTitle+=_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('24');}else{let _0x1fc50c=JSON[_0x26fa('1f')](_0x4e0986);if(_0x1fc50c[_0x26fa('20')]==0x1){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('25')+_0x1fc50c[_0x26fa('22')]);}else{console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('25')+_0x1fc50c[_0x26fa('22')]);}}}catch(_0x2de1aa){console[_0x26fa('0')](_0x2de1aa,_0x5dd097);}finally{_0x14e607();}});});}function linqu(){let _0x213bb7=Get_request(_0x26fa('26')+token);return new Promise((_0x44c44a,_0x547a07)=>{$[_0x26fa('1c')](_0x213bb7,async(_0x5a5b2e,_0x4bdac1,_0x3d0a2b)=>{try{if(_0x5a5b2e){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('27'));subTitle+=_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('27');}else{let _0x1c0fc9=JSON[_0x26fa('1f')](_0x3d0a2b);if(_0x1c0fc9[_0x26fa('20')]==0x1){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('28')+_0x1c0fc9[_0x26fa('22')]);}else{console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('28')+_0x1c0fc9[_0x26fa('22')]);}}}catch(_0x23e4b3){console[_0x26fa('0')](_0x23e4b3,_0x4bdac1);}finally{_0x44c44a();}});});}function seetx(){let _0x4cbdd5={'\x75\x72\x6c':_0x26fa('29')+token+_0x26fa('2a'),'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':soy_mlxq_UA,'Host':_0x26fa('2b'),'Connection':_0x26fa('2c'),'Accept-Encoding':_0x26fa('2d')}};return new Promise((_0x1d12b4,_0x491f14)=>{$[_0x26fa('1c')](_0x4cbdd5,async(_0x2e973a,_0x34b11f,_0x4f10be)=>{try{if(_0x2e973a){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('2e'));subTitle+=_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('2e');}else{let _0x5f102a=JSON[_0x26fa('1f')](_0x4f10be);if(_0x5f102a[_0x26fa('20')]==0x1){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('2f')+_0x5f102a[_0x26fa('22')]);}else{console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('2f')+_0x5f102a[_0x26fa('22')]);}}}catch(_0x13d368){console[_0x26fa('0')](_0x13d368,_0x34b11f);}finally{_0x1d12b4();}});});}function userInfo(){let _0x17e371={'\x75\x72\x6c':_0x26fa('30')+token,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':soy_mlxq_UA,'Host':_0x26fa('2b'),'Connection':_0x26fa('2c'),'Accept-Encoding':_0x26fa('2d')}};return new Promise((_0x2a4cb9,_0x3e1733)=>{$[_0x26fa('1c')](_0x17e371,async(_0x5e9481,_0x192bec,_0x454c9e)=>{try{if(_0x5e9481){console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('31'));subTitle+=_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('31');}else{let _0xfbdbba=JSON[_0x26fa('1f')](_0x454c9e);if(_0xfbdbba[_0x26fa('20')]==0x1){if(_0xfbdbba[_0x26fa('32')][_0x26fa('33')]==0x0){await bindRel1();}}else{console[_0x26fa('0')](_0x26fa('1d')+$[_0x26fa('11')]+_0x26fa('34')+_0xfbdbba[_0x26fa('22')]);}}}catch(_0x6638e1){console[_0x26fa('0')](_0x6638e1,_0x192bec);}finally{_0x2a4cb9();}});});}function bindRel1(){let _0x440a59={'\x75\x72\x6c':_0x26fa('35')+token+_0x26fa('36'),'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':soy_mlxq_UA,'Host':_0x26fa('2b'),'Connection':_0x26fa('2c'),'Accept-Encoding':_0x26fa('2d')}};return new Promise((_0x2e0459,_0x2e237d)=>{$[_0x26fa('1c')](_0x440a59,async(_0x21332a,_0x5b7255,_0x587143)=>{try{if(_0x21332a){}else{let _0x2c1a10=JSON[_0x26fa('1f')](_0x587143);}}catch(_0x2fdb39){console[_0x26fa('0')](_0x2fdb39,_0x5b7255);}finally{_0x2e0459();}});});}function Post_request(_0x10438a,_0x309dd4){return{'\x75\x72\x6c':''+host+_0x10438a,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':soy_mlxq_UA,'Host':_0x26fa('2b'),'Connection':_0x26fa('2c'),'Accept-Encoding':_0x26fa('2d'),'Content-Length':_0x309dd4[_0x26fa('e')]},'\x62\x6f\x64\x79':_0x309dd4};};function Get_request(_0x1d273d){return{'\x75\x72\x6c':''+host+_0x1d273d,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':soy_mlxq_UA,'Host':_0x26fa('2b'),'Connection':_0x26fa('2c'),'Accept-Encoding':_0x26fa('2d')}};};function getCurrentTime(){let _0x598385=new Date();let _0x4d1842=_0x598385[_0x26fa('37')]();let _0x5d434c=_0x598385[_0x26fa('38')]()+0x1;let _0x3f55cc=_0x598385[_0x26fa('39')]();let _0x159a7e=_0x598385[_0x26fa('3a')]();let _0x4abaf8=_0x26fa('3b')+_0x26fa('3c')[_0x26fa('3d')](_0x598385[_0x26fa('3a')]());let _0x28b122=_0x598385[_0x26fa('3e')]();let _0x4bef65=_0x598385[_0x26fa('3f')]();let _0x16e9e7=_0x598385[_0x26fa('40')]();let _0x2083ca=_0x598385[_0x26fa('41')]();if(_0x5d434c<0xa){_0x5d434c='\x30'+_0x5d434c;}if(_0x3f55cc<0xa){_0x3f55cc='\x30'+_0x3f55cc;}if(_0x28b122<0xa){_0x28b122='\x30'+_0x28b122;}if(_0x4bef65<0xa){_0x4bef65='\x30'+_0x4bef65;}if(_0x16e9e7<0xa){_0x16e9e7='\x30'+_0x16e9e7;}if(_0x2083ca<0xa){_0x2083ca='\x30\x30'+_0x2083ca;}else if(_0x2083ca<0x64){_0x2083ca='\x30'+_0x2083ca;}return _0x4d1842+'\x2d'+_0x5d434c+'\x2d'+_0x3f55cc+'\x20'+_0x28b122+'\x3a'+_0x4bef65+'\x3a'+_0x16e9e7;}function MD5_Encrypt(_0x313024){function _0x468cde(_0x313024,_0x468cde){return _0x313024<<_0x468cde|_0x313024>>>0x20-_0x468cde;}function _0x17e64f(_0x313024,_0x468cde){var _0x17e64f,_0x18c336,_0x2a8dc5,_0x39fca0,_0x4b9cd9;return _0x2a8dc5=0x80000000&_0x313024,_0x39fca0=0x80000000&_0x468cde,_0x17e64f=0x40000000&_0x313024,_0x18c336=0x40000000&_0x468cde,_0x4b9cd9=(0x3fffffff&_0x313024)+(0x3fffffff&_0x468cde),_0x17e64f&_0x18c336?0x80000000^_0x4b9cd9^_0x2a8dc5^_0x39fca0:_0x17e64f|_0x18c336?0x40000000&_0x4b9cd9?0xc0000000^_0x4b9cd9^_0x2a8dc5^_0x39fca0:0x40000000^_0x4b9cd9^_0x2a8dc5^_0x39fca0:_0x4b9cd9^_0x2a8dc5^_0x39fca0;}function _0xa40fd2(_0x313024,_0x468cde,_0x17e64f){return _0x313024&_0x468cde|~_0x313024&_0x17e64f;}function _0x5811e7(_0x313024,_0x468cde,_0x17e64f){return _0x313024&_0x17e64f|_0x468cde&~_0x17e64f;}function _0x224450(_0x313024,_0x468cde,_0x17e64f){return _0x313024^_0x468cde^_0x17e64f;}function _0x3d585e(_0x313024,_0x468cde,_0x17e64f){return _0x468cde^(_0x313024|~_0x17e64f);}function _0x15e428(_0x313024,_0x5811e7,_0x224450,_0x3d585e,_0x15e428,_0xfa1849,_0x2d5562){return _0x313024=_0x17e64f(_0x313024,_0x17e64f(_0x17e64f(_0xa40fd2(_0x5811e7,_0x224450,_0x3d585e),_0x15e428),_0x2d5562)),_0x17e64f(_0x468cde(_0x313024,_0xfa1849),_0x5811e7);}function _0x541376(_0x313024,_0xa40fd2,_0x224450,_0x3d585e,_0x15e428,_0x541376,_0x1955c1){return _0x313024=_0x17e64f(_0x313024,_0x17e64f(_0x17e64f(_0x5811e7(_0xa40fd2,_0x224450,_0x3d585e),_0x15e428),_0x1955c1)),_0x17e64f(_0x468cde(_0x313024,_0x541376),_0xa40fd2);}function _0x1282ca(_0x313024,_0xa40fd2,_0x5811e7,_0x3d585e,_0x15e428,_0x541376,_0x1282ca){return _0x313024=_0x17e64f(_0x313024,_0x17e64f(_0x17e64f(_0x224450(_0xa40fd2,_0x5811e7,_0x3d585e),_0x15e428),_0x1282ca)),_0x17e64f(_0x468cde(_0x313024,_0x541376),_0xa40fd2);}function _0x579fcf(_0x313024,_0xa40fd2,_0x5811e7,_0x224450,_0x15e428,_0x541376,_0x1282ca){return _0x313024=_0x17e64f(_0x313024,_0x17e64f(_0x17e64f(_0x3d585e(_0xa40fd2,_0x5811e7,_0x224450),_0x15e428),_0x1282ca)),_0x17e64f(_0x468cde(_0x313024,_0x541376),_0xa40fd2);}function _0x2ef274(_0x313024){for(var _0x468cde,_0x17e64f=_0x313024[_0x26fa('e')],_0xa40fd2=_0x17e64f+0x8,_0x5811e7=(_0xa40fd2-_0xa40fd2%0x40)/0x40,_0x224450=0x10*(_0x5811e7+0x1),_0x3d585e=new Array(_0x224450-0x1),_0x15e428=0x0,_0x541376=0x0;_0x17e64f>_0x541376;)_0x468cde=(_0x541376-_0x541376%0x4)/0x4,_0x15e428=_0x541376%0x4*0x8,_0x3d585e[_0x468cde]=_0x3d585e[_0x468cde]|_0x313024[_0x26fa('42')](_0x541376)<<_0x15e428,_0x541376++;return _0x468cde=(_0x541376-_0x541376%0x4)/0x4,_0x15e428=_0x541376%0x4*0x8,_0x3d585e[_0x468cde]=_0x3d585e[_0x468cde]|0x80<<_0x15e428,_0x3d585e[_0x224450-0x2]=_0x17e64f<<0x3,_0x3d585e[_0x224450-0x1]=_0x17e64f>>>0x1d,_0x3d585e;}function _0xa1603f(_0x313024){var _0x468cde,_0x17e64f,_0xa40fd2='',_0x5811e7='';for(_0x17e64f=0x0;0x3>=_0x17e64f;_0x17e64f++)_0x468cde=_0x313024>>>0x8*_0x17e64f&0xff,_0x5811e7='\x30'+_0x468cde[_0x26fa('43')](0x10),_0xa40fd2+=_0x5811e7[_0x26fa('44')](_0x5811e7[_0x26fa('e')]-0x2,0x2);return _0xa40fd2;}function _0x340f8c(_0x313024){_0x313024=_0x313024[_0x26fa('45')](/\r\n/g,'\x0a');for(var _0x468cde='',_0x17e64f=0x0;_0x17e64f<_0x313024[_0x26fa('e')];_0x17e64f++){var _0xa40fd2=_0x313024[_0x26fa('42')](_0x17e64f);0x80>_0xa40fd2?_0x468cde+=String[_0x26fa('46')](_0xa40fd2):_0xa40fd2>0x7f&&0x800>_0xa40fd2?(_0x468cde+=String[_0x26fa('46')](_0xa40fd2>>0x6|0xc0),_0x468cde+=String[_0x26fa('46')](0x3f&_0xa40fd2|0x80)):(_0x468cde+=String[_0x26fa('46')](_0xa40fd2>>0xc|0xe0),_0x468cde+=String[_0x26fa('46')](_0xa40fd2>>0x6&0x3f|0x80),_0x468cde+=String[_0x26fa('46')](0x3f&_0xa40fd2|0x80));}return _0x468cde;}var _0x4f189f,_0x21d0ff,_0x48f2cc,_0x3b6e5c,_0x2f8949,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859=[],_0x2e3d79=0x7,_0x3da40c=0xc,_0x206e82=0x11,_0x33616f=0x16,_0x167201=0x5,_0x2448d7=0x9,_0xca7978=0xe,_0x363b76=0x14,_0x179026=0x4,_0x39e005=0xb,_0x52ce62=0x10,_0x47fbfa=0x17,_0x5dcd4f=0x6,_0x4cd2da=0xa,_0x40ec30=0xf,_0x372a0e=0x15;for(_0x313024=_0x340f8c(_0x313024),_0x5d7859=_0x2ef274(_0x313024),_0xd708ca=0x67452301,_0x2ccbf9=0xefcdab89,_0xb4f563=0x98badcfe,_0x354274=0x10325476,_0x4f189f=0x0;_0x4f189f<_0x5d7859[_0x26fa('e')];_0x4f189f+=0x10)_0x21d0ff=_0xd708ca,_0x48f2cc=_0x2ccbf9,_0x3b6e5c=_0xb4f563,_0x2f8949=_0x354274,_0xd708ca=_0x15e428(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x0],_0x2e3d79,0xd76aa478),_0x354274=_0x15e428(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x1],_0x3da40c,0xe8c7b756),_0xb4f563=_0x15e428(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x2],_0x206e82,0x242070db),_0x2ccbf9=_0x15e428(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x3],_0x33616f,0xc1bdceee),_0xd708ca=_0x15e428(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x4],_0x2e3d79,0xf57c0faf),_0x354274=_0x15e428(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x5],_0x3da40c,0x4787c62a),_0xb4f563=_0x15e428(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x6],_0x206e82,0xa8304613),_0x2ccbf9=_0x15e428(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x7],_0x33616f,0xfd469501),_0xd708ca=_0x15e428(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x8],_0x2e3d79,0x698098d8),_0x354274=_0x15e428(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x9],_0x3da40c,0x8b44f7af),_0xb4f563=_0x15e428(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xa],_0x206e82,0xffff5bb1),_0x2ccbf9=_0x15e428(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0xb],_0x33616f,0x895cd7be),_0xd708ca=_0x15e428(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0xc],_0x2e3d79,0x6b901122),_0x354274=_0x15e428(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0xd],_0x3da40c,0xfd987193),_0xb4f563=_0x15e428(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xe],_0x206e82,0xa679438e),_0x2ccbf9=_0x15e428(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0xf],_0x33616f,0x49b40821),_0xd708ca=_0x541376(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x1],_0x167201,0xf61e2562),_0x354274=_0x541376(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x6],_0x2448d7,0xc040b340),_0xb4f563=_0x541376(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xb],_0xca7978,0x265e5a51),_0x2ccbf9=_0x541376(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x0],_0x363b76,0xe9b6c7aa),_0xd708ca=_0x541376(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x5],_0x167201,0xd62f105d),_0x354274=_0x541376(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0xa],_0x2448d7,0x2441453),_0xb4f563=_0x541376(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xf],_0xca7978,0xd8a1e681),_0x2ccbf9=_0x541376(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x4],_0x363b76,0xe7d3fbc8),_0xd708ca=_0x541376(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x9],_0x167201,0x21e1cde6),_0x354274=_0x541376(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0xe],_0x2448d7,0xc33707d6),_0xb4f563=_0x541376(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x3],_0xca7978,0xf4d50d87),_0x2ccbf9=_0x541376(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x8],_0x363b76,0x455a14ed),_0xd708ca=_0x541376(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0xd],_0x167201,0xa9e3e905),_0x354274=_0x541376(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x2],_0x2448d7,0xfcefa3f8),_0xb4f563=_0x541376(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x7],_0xca7978,0x676f02d9),_0x2ccbf9=_0x541376(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0xc],_0x363b76,0x8d2a4c8a),_0xd708ca=_0x1282ca(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x5],_0x179026,0xfffa3942),_0x354274=_0x1282ca(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x8],_0x39e005,0x8771f681),_0xb4f563=_0x1282ca(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xb],_0x52ce62,0x6d9d6122),_0x2ccbf9=_0x1282ca(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0xe],_0x47fbfa,0xfde5380c),_0xd708ca=_0x1282ca(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x1],_0x179026,0xa4beea44),_0x354274=_0x1282ca(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x4],_0x39e005,0x4bdecfa9),_0xb4f563=_0x1282ca(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x7],_0x52ce62,0xf6bb4b60),_0x2ccbf9=_0x1282ca(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0xa],_0x47fbfa,0xbebfbc70),_0xd708ca=_0x1282ca(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0xd],_0x179026,0x289b7ec6),_0x354274=_0x1282ca(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x0],_0x39e005,0xeaa127fa),_0xb4f563=_0x1282ca(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x3],_0x52ce62,0xd4ef3085),_0x2ccbf9=_0x1282ca(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x6],_0x47fbfa,0x4881d05),_0xd708ca=_0x1282ca(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x9],_0x179026,0xd9d4d039),_0x354274=_0x1282ca(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0xc],_0x39e005,0xe6db99e5),_0xb4f563=_0x1282ca(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xf],_0x52ce62,0x1fa27cf8),_0x2ccbf9=_0x1282ca(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x2],_0x47fbfa,0xc4ac5665),_0xd708ca=_0x579fcf(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x0],_0x5dcd4f,0xf4292244),_0x354274=_0x579fcf(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x7],_0x4cd2da,0x432aff97),_0xb4f563=_0x579fcf(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xe],_0x40ec30,0xab9423a7),_0x2ccbf9=_0x579fcf(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x5],_0x372a0e,0xfc93a039),_0xd708ca=_0x579fcf(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0xc],_0x5dcd4f,0x655b59c3),_0x354274=_0x579fcf(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0x3],_0x4cd2da,0x8f0ccc92),_0xb4f563=_0x579fcf(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0xa],_0x40ec30,0xffeff47d),_0x2ccbf9=_0x579fcf(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x1],_0x372a0e,0x85845dd1),_0xd708ca=_0x579fcf(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x8],_0x5dcd4f,0x6fa87e4f),_0x354274=_0x579fcf(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0xf],_0x4cd2da,0xfe2ce6e0),_0xb4f563=_0x579fcf(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x6],_0x40ec30,0xa3014314),_0x2ccbf9=_0x579fcf(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0xd],_0x372a0e,0x4e0811a1),_0xd708ca=_0x579fcf(_0xd708ca,_0x2ccbf9,_0xb4f563,_0x354274,_0x5d7859[_0x4f189f+0x4],_0x5dcd4f,0xf7537e82),_0x354274=_0x579fcf(_0x354274,_0xd708ca,_0x2ccbf9,_0xb4f563,_0x5d7859[_0x4f189f+0xb],_0x4cd2da,0xbd3af235),_0xb4f563=_0x579fcf(_0xb4f563,_0x354274,_0xd708ca,_0x2ccbf9,_0x5d7859[_0x4f189f+0x2],_0x40ec30,0x2ad7d2bb),_0x2ccbf9=_0x579fcf(_0x2ccbf9,_0xb4f563,_0x354274,_0xd708ca,_0x5d7859[_0x4f189f+0x9],_0x372a0e,0xeb86d391),_0xd708ca=_0x17e64f(_0xd708ca,_0x21d0ff),_0x2ccbf9=_0x17e64f(_0x2ccbf9,_0x48f2cc),_0xb4f563=_0x17e64f(_0xb4f563,_0x3b6e5c),_0x354274=_0x17e64f(_0x354274,_0x2f8949);var _0x1c4cc7=_0xa1603f(_0xd708ca)+_0xa1603f(_0x2ccbf9)+_0xa1603f(_0xb4f563)+_0xa1603f(_0x354274);return _0x1c4cc7[_0x26fa('47')]();};_0xodO='jsjiami.com.v6';



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