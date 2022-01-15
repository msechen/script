/*

软件名称:金猪钱罐

项目注册地址:http://appapi.jinzhuqianguan.com/home/index?uucode=GHRJK0MA00&channel=10000


必要变量:

变量名 soy_jzqg_data
变量值 
注释：抓包带有 http://appapi.jinzhuqianguan.com 链接的请求头上的 Authorization 值

多个号用 # 或 换行 隔开

cron "0-59/30 * * *"

*/


const $ = new Env('金猪钱罐');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodx='jsjiami.com.v6',_0xodx_=['_0xodx'],_0xb96e=[_0xodx,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6a\x7a\x71\x67\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6a\x7a\x71\x67\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x61\x70\x69\x2e\x6a\x69\x6e\x7a\x68\x75\x71\x69\x61\x6e\x67\x75\x61\x6e\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x4d\x65\x6d\x62\x65\x72\x2f\x67\x65\x74\x43\x6f\x69\x6e','\x7b\x22\x62\x72\x61\x6e\x64\x22\x3a\x22\x76\x69\x76\x6f\x22\x2c\x22\x70\x6c\x61\x74\x66\x6f\x72\x6d\x22\x3a\x22\x61\x6e\x64\x72\x6f\x69\x64\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x22\x31\x30\x30\x30\x30\x22\x2c\x22\x75\x75\x63\x6f\x64\x65\x22\x3a\x22\x22\x7d','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u6536\u53d6\u91d1\u5e01\u3011\x3a\x20\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x73\x74\x61\x74\x75\x73','\x20\u6536\u53d6\u91d1\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u6536\u53d6\u91d1\u5e01\u3011\x3a\x20','\x6d\x73\x67','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x70\x61\x70\x69\x2e\x6a\x69\x6e\x7a\x68\x75\x71\x69\x61\x6e\x67\x75\x61\x6e\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x2f\x4d\x65\x6d\x62\x65\x72\x2f\x62\x61\x6e\x64\x50\x61\x72\x65\x6e\x74','\x55\x4e\x49\x2d\x41\x50\x50\x2f\x31\x2e\x30','\x61\x70\x70\x61\x70\x69\x2e\x6a\x69\x6e\x7a\x68\x75\x71\x69\x61\x6e\x67\x75\x61\x6e\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x69\x6e\x76\x69\x74\x65\x63\x6f\x64\x65\x3d\x47\x48\x52\x4a\x4b\x30\x4d\x41\x30\x30\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x63\x68\x61\x6e\x6e\x65\x6c\x3d\x31\x30\x30\x30\x30\x26\x75\x75\x63\x6f\x64\x65\x3d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6a\x73\x6b\x6b\x50\x6a\x69\x61\x4c\x58\x6d\x69\x2e\x70\x50\x63\x45\x66\x6e\x49\x6f\x4d\x58\x6d\x51\x75\x2e\x76\x36\x3d\x3d'];function _0x4395(_0x7a1df3,_0x36eff2){_0x7a1df3=~~'0x'['concat'](_0x7a1df3['slice'](0x0));var _0x59b16c=_0xb96e[_0x7a1df3];return _0x59b16c;};(function(_0x1dbd54,_0x1990a4){var _0x5c617d=0x0;for(_0x1990a4=_0x1dbd54['shift'](_0x5c617d>>0x2);_0x1990a4&&_0x1990a4!==(_0x1dbd54['pop'](_0x5c617d>>0x3)+'')['replace'](/[kkPLXpPEfnIMXQu=]/g,'');_0x5c617d++){_0x5c617d=_0x5c617d^0xcbbcc;}}(_0xb96e,_0x4395));let app_soy_jzqg_data=[];!(async()=>{if(typeof $request!==_0x4395('0')){await get_appdata();}if($[_0x4395('1')]()){if(!process[_0x4395('2')][_0x4395('3')]){console[_0x4395('4')](_0x4395('5'));return;}if(process[_0x4395('2')][_0x4395('3')]&&process[_0x4395('2')][_0x4395('3')][_0x4395('6')]('\x0a')>-0x1){app_soy_jzqg_data=process[_0x4395('2')][_0x4395('3')][_0x4395('7')]('\x0a');}else if(process[_0x4395('2')][_0x4395('3')]&&process[_0x4395('2')][_0x4395('3')][_0x4395('6')]('\x23')>-0x1){app_soy_jzqg_data=process[_0x4395('2')][_0x4395('3')][_0x4395('7')]('\x23');}else if(process[_0x4395('2')][_0x4395('3')]&&process[_0x4395('2')][_0x4395('3')][_0x4395('6')]('\x40')>-0x1){app_soy_jzqg_data=process[_0x4395('2')][_0x4395('3')][_0x4395('7')]('\x40');}else{app_soy_jzqg_data=process[_0x4395('2')][_0x4395('3')][_0x4395('7')]();};}else{if(!$[_0x4395('8')](_0x4395('3'))){console[_0x4395('4')](_0x4395('5'));return;}if($[_0x4395('8')](_0x4395('3'))&&$[_0x4395('8')](_0x4395('3'))[_0x4395('6')]('\x23')>-0x1){app_soy_jzqg_data=$[_0x4395('8')](_0x4395('3'))[_0x4395('7')]('\x23');}else if($[_0x4395('8')](_0x4395('3'))&&$[_0x4395('8')](_0x4395('3'))[_0x4395('6')]('\x0a')>-0x1){app_soy_jzqg_data=$[_0x4395('8')](_0x4395('3'))[_0x4395('7')]('\x0a');}else if($[_0x4395('8')](_0x4395('3'))&&$[_0x4395('8')](_0x4395('3'))[_0x4395('6')]('\x40')>-0x1){app_soy_jzqg_data=$[_0x4395('8')](_0x4395('3'))[_0x4395('7')]('\x40');}else{app_soy_jzqg_data=$[_0x4395('8')](_0x4395('3'))[_0x4395('7')]();};}console[_0x4395('4')](_0x4395('9')+new Date(new Date()[_0x4395('a')]()+new Date()[_0x4395('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4395('c')]()+_0x4395('d'));console[_0x4395('4')](_0x4395('e')+app_soy_jzqg_data[_0x4395('f')]+_0x4395('10'));subTitle='';for(i=0x0;i<app_soy_jzqg_data[_0x4395('f')];i++){jzqg_data=app_soy_jzqg_data[i][_0x4395('7')]('\x26');jzqg_Authorization=jzqg_data[0x0];$[_0x4395('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x4395('12')]($[_0x4395('13')],subTitle);}}})()[_0x4395('14')](_0x2a4cf3=>$[_0x4395('15')](_0x2a4cf3))[_0x4395('16')](()=>$[_0x4395('17')]());async function implement(){host=_0x4395('18');console[_0x4395('4')](_0x4395('19')+$[_0x4395('11')]+_0x4395('1a'));await getCoin();await bandParent();}function getCoin(){let _0x28537f=Post_request(_0x4395('1b'),_0x4395('1c'));return new Promise((_0x3c96a6,_0x2678c2)=>{$[_0x4395('1d')](_0x28537f,async(_0x21ab20,_0x50b446,_0x55a757)=>{try{if(_0x21ab20){console[_0x4395('4')](_0x4395('1e')+$[_0x4395('11')]+_0x4395('1f'));subTitle+=_0x4395('1e')+$[_0x4395('11')]+_0x4395('1f');}else{let _0x29d11c=JSON[_0x4395('20')](_0x55a757);if(_0x29d11c[_0x4395('21')]==0xc8){console[_0x4395('4')](_0x4395('1e')+$[_0x4395('11')]+_0x4395('22')+_0x29d11c[_0x4395('23')]+_0x4395('24'));}else{console[_0x4395('4')](_0x4395('1e')+$[_0x4395('11')]+_0x4395('25')+_0x29d11c[_0x4395('26')]);}}}catch(_0x2239b0){console[_0x4395('4')](_0x2239b0,_0x50b446);}finally{_0x3c96a6();}});});}function bandParent(){let _0x24359a={'\x75\x72\x6c':_0x4395('27'),'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0x4395('28'),'Authorization':jzqg_Authorization,'Host':_0x4395('29'),'Connection':_0x4395('2a'),'Content-Type':_0x4395('2b'),'Content-Length':0x3c,'Accept-Encoding':_0x4395('2c')},'\x62\x6f\x64\x79':_0x4395('2d')};return new Promise((_0x18380f,_0xecc62d)=>{$[_0x4395('1d')](_0x24359a,async(_0x58d4a3,_0x1b2a7d,_0x3c61bf)=>{try{if(_0x58d4a3){}else{}}catch(_0x3f811c){console[_0x4395('4')](_0x3f811c,_0x1b2a7d);}finally{_0x18380f();}});});}function Post_request(_0x58ff6c,_0x2d1c1f){return{'\x75\x72\x6c':''+host+_0x58ff6c,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0x4395('28'),'Authorization':jzqg_Authorization,'Host':_0x4395('29'),'Connection':_0x4395('2a'),'Content-Type':_0x4395('2e'),'Content-Length':_0x2d1c1f[_0x4395('f')],'Accept-Encoding':_0x4395('2c')},'\x62\x6f\x64\x79':_0x2d1c1f};};function Get_request(_0xdd9b62){return{'\x75\x72\x6c':''+host+_0xdd9b62,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0x4395('28'),'Authorization':jzqg_Authorization,'Host':_0x4395('29'),'Connection':_0x4395('2a'),'Content-Type':_0x4395('2e'),'Content-Length':0x0,'Accept-Encoding':_0x4395('2c')}};};function MD5_Encrypt(_0x337aaf){function _0x3e67f1(_0x337aaf,_0x3e67f1){return _0x337aaf<<_0x3e67f1|_0x337aaf>>>0x20-_0x3e67f1;}function _0x4aab4d(_0x337aaf,_0x3e67f1){var _0x4aab4d,_0x47885c,_0x24ce85,_0x56a5b9,_0x1dc10e;return _0x24ce85=0x80000000&_0x337aaf,_0x56a5b9=0x80000000&_0x3e67f1,_0x4aab4d=0x40000000&_0x337aaf,_0x47885c=0x40000000&_0x3e67f1,_0x1dc10e=(0x3fffffff&_0x337aaf)+(0x3fffffff&_0x3e67f1),_0x4aab4d&_0x47885c?0x80000000^_0x1dc10e^_0x24ce85^_0x56a5b9:_0x4aab4d|_0x47885c?0x40000000&_0x1dc10e?0xc0000000^_0x1dc10e^_0x24ce85^_0x56a5b9:0x40000000^_0x1dc10e^_0x24ce85^_0x56a5b9:_0x1dc10e^_0x24ce85^_0x56a5b9;}function _0x5b61bb(_0x337aaf,_0x3e67f1,_0x4aab4d){return _0x337aaf&_0x3e67f1|~_0x337aaf&_0x4aab4d;}function _0x3644e2(_0x337aaf,_0x3e67f1,_0x4aab4d){return _0x337aaf&_0x4aab4d|_0x3e67f1&~_0x4aab4d;}function _0x11acee(_0x337aaf,_0x3e67f1,_0x4aab4d){return _0x337aaf^_0x3e67f1^_0x4aab4d;}function _0x1a2088(_0x337aaf,_0x3e67f1,_0x4aab4d){return _0x3e67f1^(_0x337aaf|~_0x4aab4d);}function _0x497b37(_0x337aaf,_0x3644e2,_0x11acee,_0x1a2088,_0x497b37,_0x5e77c1,_0x28ee22){return _0x337aaf=_0x4aab4d(_0x337aaf,_0x4aab4d(_0x4aab4d(_0x5b61bb(_0x3644e2,_0x11acee,_0x1a2088),_0x497b37),_0x28ee22)),_0x4aab4d(_0x3e67f1(_0x337aaf,_0x5e77c1),_0x3644e2);}function _0x38505b(_0x337aaf,_0x5b61bb,_0x11acee,_0x1a2088,_0x497b37,_0x38505b,_0xf196d9){return _0x337aaf=_0x4aab4d(_0x337aaf,_0x4aab4d(_0x4aab4d(_0x3644e2(_0x5b61bb,_0x11acee,_0x1a2088),_0x497b37),_0xf196d9)),_0x4aab4d(_0x3e67f1(_0x337aaf,_0x38505b),_0x5b61bb);}function _0xc3d96b(_0x337aaf,_0x5b61bb,_0x3644e2,_0x1a2088,_0x497b37,_0x38505b,_0xc3d96b){return _0x337aaf=_0x4aab4d(_0x337aaf,_0x4aab4d(_0x4aab4d(_0x11acee(_0x5b61bb,_0x3644e2,_0x1a2088),_0x497b37),_0xc3d96b)),_0x4aab4d(_0x3e67f1(_0x337aaf,_0x38505b),_0x5b61bb);}function _0x2f40e0(_0x337aaf,_0x5b61bb,_0x3644e2,_0x11acee,_0x497b37,_0x38505b,_0xc3d96b){return _0x337aaf=_0x4aab4d(_0x337aaf,_0x4aab4d(_0x4aab4d(_0x1a2088(_0x5b61bb,_0x3644e2,_0x11acee),_0x497b37),_0xc3d96b)),_0x4aab4d(_0x3e67f1(_0x337aaf,_0x38505b),_0x5b61bb);}function _0x3082eb(_0x337aaf){for(var _0x3e67f1,_0x4aab4d=_0x337aaf[_0x4395('f')],_0x5b61bb=_0x4aab4d+0x8,_0x3644e2=(_0x5b61bb-_0x5b61bb%0x40)/0x40,_0x11acee=0x10*(_0x3644e2+0x1),_0x1a2088=new Array(_0x11acee-0x1),_0x497b37=0x0,_0x38505b=0x0;_0x4aab4d>_0x38505b;)_0x3e67f1=(_0x38505b-_0x38505b%0x4)/0x4,_0x497b37=_0x38505b%0x4*0x8,_0x1a2088[_0x3e67f1]=_0x1a2088[_0x3e67f1]|_0x337aaf[_0x4395('2f')](_0x38505b)<<_0x497b37,_0x38505b++;return _0x3e67f1=(_0x38505b-_0x38505b%0x4)/0x4,_0x497b37=_0x38505b%0x4*0x8,_0x1a2088[_0x3e67f1]=_0x1a2088[_0x3e67f1]|0x80<<_0x497b37,_0x1a2088[_0x11acee-0x2]=_0x4aab4d<<0x3,_0x1a2088[_0x11acee-0x1]=_0x4aab4d>>>0x1d,_0x1a2088;}function _0x374805(_0x337aaf){var _0x3e67f1,_0x4aab4d,_0x5b61bb='',_0x3644e2='';for(_0x4aab4d=0x0;0x3>=_0x4aab4d;_0x4aab4d++)_0x3e67f1=_0x337aaf>>>0x8*_0x4aab4d&0xff,_0x3644e2='\x30'+_0x3e67f1[_0x4395('30')](0x10),_0x5b61bb+=_0x3644e2[_0x4395('31')](_0x3644e2[_0x4395('f')]-0x2,0x2);return _0x5b61bb;}function _0x1d0980(_0x337aaf){_0x337aaf=_0x337aaf[_0x4395('32')](/\r\n/g,'\x0a');for(var _0x3e67f1='',_0x4aab4d=0x0;_0x4aab4d<_0x337aaf[_0x4395('f')];_0x4aab4d++){var _0x5b61bb=_0x337aaf[_0x4395('2f')](_0x4aab4d);0x80>_0x5b61bb?_0x3e67f1+=String[_0x4395('33')](_0x5b61bb):_0x5b61bb>0x7f&&0x800>_0x5b61bb?(_0x3e67f1+=String[_0x4395('33')](_0x5b61bb>>0x6|0xc0),_0x3e67f1+=String[_0x4395('33')](0x3f&_0x5b61bb|0x80)):(_0x3e67f1+=String[_0x4395('33')](_0x5b61bb>>0xc|0xe0),_0x3e67f1+=String[_0x4395('33')](_0x5b61bb>>0x6&0x3f|0x80),_0x3e67f1+=String[_0x4395('33')](0x3f&_0x5b61bb|0x80));}return _0x3e67f1;}var _0x53507f,_0x1c8e60,_0x4a75b4,_0x266599,_0xafb04b,_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445=[],_0x38745f=0x7,_0x11ce71=0xc,_0x44e0bb=0x11,_0x18b48b=0x16,_0x3b9d56=0x5,_0x39804d=0x9,_0x37e9a3=0xe,_0x3aba13=0x14,_0x3c9e8c=0x4,_0x2fad81=0xb,_0x18be3e=0x10,_0x47aa65=0x17,_0x3773af=0x6,_0x408068=0xa,_0x6f81ce=0xf,_0x4f3f88=0x15;for(_0x337aaf=_0x1d0980(_0x337aaf),_0x153445=_0x3082eb(_0x337aaf),_0x433b6d=0x67452301,_0x2ee690=0xefcdab89,_0xabd353=0x98badcfe,_0x34c2b1=0x10325476,_0x53507f=0x0;_0x53507f<_0x153445[_0x4395('f')];_0x53507f+=0x10)_0x1c8e60=_0x433b6d,_0x4a75b4=_0x2ee690,_0x266599=_0xabd353,_0xafb04b=_0x34c2b1,_0x433b6d=_0x497b37(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x0],_0x38745f,0xd76aa478),_0x34c2b1=_0x497b37(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x1],_0x11ce71,0xe8c7b756),_0xabd353=_0x497b37(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x2],_0x44e0bb,0x242070db),_0x2ee690=_0x497b37(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x3],_0x18b48b,0xc1bdceee),_0x433b6d=_0x497b37(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x4],_0x38745f,0xf57c0faf),_0x34c2b1=_0x497b37(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x5],_0x11ce71,0x4787c62a),_0xabd353=_0x497b37(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x6],_0x44e0bb,0xa8304613),_0x2ee690=_0x497b37(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x7],_0x18b48b,0xfd469501),_0x433b6d=_0x497b37(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x8],_0x38745f,0x698098d8),_0x34c2b1=_0x497b37(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x9],_0x11ce71,0x8b44f7af),_0xabd353=_0x497b37(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xa],_0x44e0bb,0xffff5bb1),_0x2ee690=_0x497b37(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0xb],_0x18b48b,0x895cd7be),_0x433b6d=_0x497b37(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0xc],_0x38745f,0x6b901122),_0x34c2b1=_0x497b37(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0xd],_0x11ce71,0xfd987193),_0xabd353=_0x497b37(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xe],_0x44e0bb,0xa679438e),_0x2ee690=_0x497b37(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0xf],_0x18b48b,0x49b40821),_0x433b6d=_0x38505b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x1],_0x3b9d56,0xf61e2562),_0x34c2b1=_0x38505b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x6],_0x39804d,0xc040b340),_0xabd353=_0x38505b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xb],_0x37e9a3,0x265e5a51),_0x2ee690=_0x38505b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x0],_0x3aba13,0xe9b6c7aa),_0x433b6d=_0x38505b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x5],_0x3b9d56,0xd62f105d),_0x34c2b1=_0x38505b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0xa],_0x39804d,0x2441453),_0xabd353=_0x38505b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xf],_0x37e9a3,0xd8a1e681),_0x2ee690=_0x38505b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x4],_0x3aba13,0xe7d3fbc8),_0x433b6d=_0x38505b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x9],_0x3b9d56,0x21e1cde6),_0x34c2b1=_0x38505b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0xe],_0x39804d,0xc33707d6),_0xabd353=_0x38505b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x3],_0x37e9a3,0xf4d50d87),_0x2ee690=_0x38505b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x8],_0x3aba13,0x455a14ed),_0x433b6d=_0x38505b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0xd],_0x3b9d56,0xa9e3e905),_0x34c2b1=_0x38505b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x2],_0x39804d,0xfcefa3f8),_0xabd353=_0x38505b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x7],_0x37e9a3,0x676f02d9),_0x2ee690=_0x38505b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0xc],_0x3aba13,0x8d2a4c8a),_0x433b6d=_0xc3d96b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x5],_0x3c9e8c,0xfffa3942),_0x34c2b1=_0xc3d96b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x8],_0x2fad81,0x8771f681),_0xabd353=_0xc3d96b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xb],_0x18be3e,0x6d9d6122),_0x2ee690=_0xc3d96b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0xe],_0x47aa65,0xfde5380c),_0x433b6d=_0xc3d96b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x1],_0x3c9e8c,0xa4beea44),_0x34c2b1=_0xc3d96b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x4],_0x2fad81,0x4bdecfa9),_0xabd353=_0xc3d96b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x7],_0x18be3e,0xf6bb4b60),_0x2ee690=_0xc3d96b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0xa],_0x47aa65,0xbebfbc70),_0x433b6d=_0xc3d96b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0xd],_0x3c9e8c,0x289b7ec6),_0x34c2b1=_0xc3d96b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x0],_0x2fad81,0xeaa127fa),_0xabd353=_0xc3d96b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x3],_0x18be3e,0xd4ef3085),_0x2ee690=_0xc3d96b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x6],_0x47aa65,0x4881d05),_0x433b6d=_0xc3d96b(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x9],_0x3c9e8c,0xd9d4d039),_0x34c2b1=_0xc3d96b(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0xc],_0x2fad81,0xe6db99e5),_0xabd353=_0xc3d96b(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xf],_0x18be3e,0x1fa27cf8),_0x2ee690=_0xc3d96b(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x2],_0x47aa65,0xc4ac5665),_0x433b6d=_0x2f40e0(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x0],_0x3773af,0xf4292244),_0x34c2b1=_0x2f40e0(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x7],_0x408068,0x432aff97),_0xabd353=_0x2f40e0(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xe],_0x6f81ce,0xab9423a7),_0x2ee690=_0x2f40e0(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x5],_0x4f3f88,0xfc93a039),_0x433b6d=_0x2f40e0(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0xc],_0x3773af,0x655b59c3),_0x34c2b1=_0x2f40e0(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0x3],_0x408068,0x8f0ccc92),_0xabd353=_0x2f40e0(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0xa],_0x6f81ce,0xffeff47d),_0x2ee690=_0x2f40e0(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x1],_0x4f3f88,0x85845dd1),_0x433b6d=_0x2f40e0(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x8],_0x3773af,0x6fa87e4f),_0x34c2b1=_0x2f40e0(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0xf],_0x408068,0xfe2ce6e0),_0xabd353=_0x2f40e0(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x6],_0x6f81ce,0xa3014314),_0x2ee690=_0x2f40e0(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0xd],_0x4f3f88,0x4e0811a1),_0x433b6d=_0x2f40e0(_0x433b6d,_0x2ee690,_0xabd353,_0x34c2b1,_0x153445[_0x53507f+0x4],_0x3773af,0xf7537e82),_0x34c2b1=_0x2f40e0(_0x34c2b1,_0x433b6d,_0x2ee690,_0xabd353,_0x153445[_0x53507f+0xb],_0x408068,0xbd3af235),_0xabd353=_0x2f40e0(_0xabd353,_0x34c2b1,_0x433b6d,_0x2ee690,_0x153445[_0x53507f+0x2],_0x6f81ce,0x2ad7d2bb),_0x2ee690=_0x2f40e0(_0x2ee690,_0xabd353,_0x34c2b1,_0x433b6d,_0x153445[_0x53507f+0x9],_0x4f3f88,0xeb86d391),_0x433b6d=_0x4aab4d(_0x433b6d,_0x1c8e60),_0x2ee690=_0x4aab4d(_0x2ee690,_0x4a75b4),_0xabd353=_0x4aab4d(_0xabd353,_0x266599),_0x34c2b1=_0x4aab4d(_0x34c2b1,_0xafb04b);var _0x3e5cad=_0x374805(_0x433b6d)+_0x374805(_0x2ee690)+_0x374805(_0xabd353)+_0x374805(_0x34c2b1);return _0x3e5cad[_0x4395('34')]();};_0xodx='jsjiami.com.v6';


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