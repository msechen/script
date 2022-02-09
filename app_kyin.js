/*

安卓软件名称:快音

项目注册地址:https://landing.kaixinyf.cn/e30aze?invite_code=2S7B4S&_timestamp=1644398479&sign=15c82c2822432391d8402109a0762609&app_name=kuaiyin&device_id=1148692d61103e7c&client_v=5.03.03&platform=Android&platform_brand=blackshark&utm_source=xiaomi&um_from_appkey=5d91d0ed570df3d8ed000cb9&share_from=weixin&share_position=wuren

声明：会有黑号还是黑设备的状态，注册后登录上去自行提现0.3元，如果能提现到账就可以跑脚本，不能你跑了也没啥用，到最后也提现不了

必要变量:

变量名 soy_kyin_data
变量值示例 device-id值&access-token值&整个请求体

寻找变量方法:听歌时左下角红包图标转一圈就会有,链接是 https://api.kaixinyf.cn/VideoMusic/SendCoin

注释: device-id值 和 access-token值 在请求头里面找,请求体就是全部复制请求体

多个号用 # 或 @ 或 换行 隔开

cron 0-59/10 * * * *

注意:此脚本只刷听歌时长

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_kyin.js
注意:脚本只适配青龙面板,往后也是
注意:脚本只适配青龙面板,往后也是
注意:脚本只适配青龙面板,往后也是
*/


const $ = new Env('快音');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodT='jsjiami.com.v6',_0xodT_=['_0xodT'],_0x2b6e=[_0xodT,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6b\x79\x69\x6e\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x38\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x30\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x33\x39\x34\x36\x34\x39\x38\x31\x31\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x43\x30\x32\x38\x35\x32\x38\x33\x46\x33\x31\x38\x36\x41\x43\x42\x30\x46\x35\x30\x43\x31\x38\x46\x39\x34\x45\x34\x37\x34\x39\x32\x32\x31\x37\x42\x44\x45\x42\x38\x35\x37\x45\x38\x41\x37\x42\x30\x44\x43\x42\x36\x34\x39\x32\x36\x45\x31\x45\x44\x39\x36\x41\x39','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x45\x55\x4f\x4e\x42\x58\x6a\x66\x73\x6a\x54\x50\x6e\x4e\x69\x54\x42\x61\x4f\x6d\x58\x68\x5a\x47\x69\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x19a3(_0x2a18fb,_0x28d567){_0x2a18fb=~~'0x'['concat'](_0x2a18fb['slice'](0x0));var _0x41b821=_0x2b6e[_0x2a18fb];return _0x41b821;};(function(_0x3f8e0a,_0x5c0665){var _0x533968=0x0;for(_0x5c0665=_0x3f8e0a['shift'](_0x533968>>0x2);_0x5c0665&&_0x5c0665!==(_0x3f8e0a['pop'](_0x533968>>0x3)+'')['replace'](/[EUONBXfTPnNTBOXhZG=]/g,'');_0x533968++){_0x533968=_0x533968^0xcfcee;}}(_0x2b6e,_0x19a3));const CryptoJS=require(_0x19a3('0'));const fs=require('\x66\x73');let app_soy_kyin_data=[],soy_kyin_UA='';!(async()=>{if($[_0x19a3('1')]()){if(!process[_0x19a3('2')][_0x19a3('3')]){console[_0x19a3('4')](_0x19a3('5'));return;}if(process[_0x19a3('2')][_0x19a3('3')]&&process[_0x19a3('2')][_0x19a3('3')][_0x19a3('6')]('\x0a')>-0x1){app_soy_kyin_data=process[_0x19a3('2')][_0x19a3('3')][_0x19a3('7')]('\x0a');}else if(process[_0x19a3('2')][_0x19a3('3')]&&process[_0x19a3('2')][_0x19a3('3')][_0x19a3('6')]('\x23')>-0x1){app_soy_kyin_data=process[_0x19a3('2')][_0x19a3('3')][_0x19a3('7')]('\x23');}else if(process[_0x19a3('2')][_0x19a3('3')]&&process[_0x19a3('2')][_0x19a3('3')][_0x19a3('6')]('\x40')>-0x1){app_soy_kyin_data=process[_0x19a3('2')][_0x19a3('3')][_0x19a3('7')]('\x40');}else{app_soy_kyin_data=process[_0x19a3('2')][_0x19a3('3')][_0x19a3('7')]();};}else{if(!$[_0x19a3('8')](_0x19a3('3'))){console[_0x19a3('4')](_0x19a3('5'));return;}if($[_0x19a3('8')](_0x19a3('3'))&&$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('6')]('\x0a')>-0x1){app_soy_kyin_data=$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('7')]('\x0a');}else if($[_0x19a3('8')](_0x19a3('3'))&&$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('6')]('\x40')>-0x1){app_soy_kyin_data=$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('7')]('\x40');}else if($[_0x19a3('8')](_0x19a3('3'))&&$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('6')]('\x23')>-0x1){app_soy_kyin_data=$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('7')]('\x23');}else{app_soy_kyin_data=$[_0x19a3('8')](_0x19a3('3'))[_0x19a3('7')]();};}console[_0x19a3('4')](_0x19a3('9')+new Date(new Date()[_0x19a3('a')]()+new Date()[_0x19a3('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x19a3('c')]()+_0x19a3('d'));console[_0x19a3('4')](_0x19a3('e')+app_soy_kyin_data[_0x19a3('f')]+_0x19a3('10'));subTitle='';for(i=0x0;i<app_soy_kyin_data[_0x19a3('f')];i++){let _0x9555e7=app_soy_kyin_data[i][_0x19a3('7')]('\x26');device=_0x9555e7[0x0];token=_0x9555e7[0x1];platform=_0x9555e7[0x5];client_v=_0x9555e7[0x6];$[_0x19a3('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x19a3('12')]($[_0x19a3('13')],subTitle);}}})()[_0x19a3('14')](_0x4d60be=>$[_0x19a3('15')](_0x4d60be))[_0x19a3('16')](()=>$[_0x19a3('17')]());async function implement(){host=_0x19a3('18');console[_0x19a3('4')](_0x19a3('19')+$[_0x19a3('11')]+_0x19a3('1a'));await SendCoin();}function SendCoin(){let _0xf32e39=new Date()[_0x19a3('a')]();let _0x4f2e3b=Post_request(_0x19a3('1b'),_0x19a3('1c'));return new Promise((_0x1211ee,_0x51f87f)=>{$[_0x19a3('1d')](_0x4f2e3b,async(_0x65f67b,_0x224747,_0x27b6b4)=>{try{if(_0x65f67b){console[_0x19a3('4')](_0x19a3('1e')+$[_0x19a3('11')]+_0x19a3('1f'));subTitle+=_0x19a3('1e')+$[_0x19a3('11')]+_0x19a3('1f');}else{let _0x3185bb=JSON[_0x19a3('20')](_0x27b6b4);if(_0x3185bb[_0x19a3('21')]==0x0){console[_0x19a3('4')](_0x19a3('1e')+$[_0x19a3('11')]+_0x19a3('22')+_0x3185bb[_0x19a3('23')][_0x19a3('24')]+_0x19a3('25'));}else{console[_0x19a3('4')](_0x19a3('1e')+$[_0x19a3('11')]+_0x19a3('26')+_0x3185bb[_0x19a3('27')]);}}}catch(_0x4dbecb){console[_0x19a3('4')](_0x4dbecb,_0x224747);}finally{_0x1211ee();}});});}function Post_request(_0x647bfe,_0x2de11c){return{'\x75\x72\x6c':''+host+_0x647bfe,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x19a3('28'),'content-length':_0x2de11c[_0x19a3('f')],'accept-encoding':_0x19a3('29'),'user-agent':_0x19a3('2a'),'platform':platform,'client-v':client_v,'device-id':device,'access-token':token,'user-agent':_0x19a3('2b')},'\x62\x6f\x64\x79':_0x2de11c};};function AES_Encrypt(_0x1cab2a,_0x26744a){let _0x2aa223=AES_DE[_0x19a3('2c')][_0x19a3('2d')](AES_DE[_0x19a3('2e')][_0x19a3('2f')][_0x19a3('20')](_0x1cab2a),AES_DE[_0x19a3('2e')][_0x19a3('2f')][_0x19a3('20')](_0x26744a),{'\x6d\x6f\x64\x65':AES_DE[_0x19a3('30')][_0x19a3('31')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0x19a3('32')][_0x19a3('33')]});return _0x2aa223[_0x19a3('34')]();}function MD5_Encrypt(_0x7b4f5b){function _0x592453(_0x7b4f5b,_0x592453){return _0x7b4f5b<<_0x592453|_0x7b4f5b>>>0x20-_0x592453;}function _0x28b4b7(_0x7b4f5b,_0x592453){var _0x28b4b7,_0x3e9440,_0x32e284,_0x48ae49,_0x115ac1;return _0x32e284=0x80000000&_0x7b4f5b,_0x48ae49=0x80000000&_0x592453,_0x28b4b7=0x40000000&_0x7b4f5b,_0x3e9440=0x40000000&_0x592453,_0x115ac1=(0x3fffffff&_0x7b4f5b)+(0x3fffffff&_0x592453),_0x28b4b7&_0x3e9440?0x80000000^_0x115ac1^_0x32e284^_0x48ae49:_0x28b4b7|_0x3e9440?0x40000000&_0x115ac1?0xc0000000^_0x115ac1^_0x32e284^_0x48ae49:0x40000000^_0x115ac1^_0x32e284^_0x48ae49:_0x115ac1^_0x32e284^_0x48ae49;}function _0x32a4cd(_0x7b4f5b,_0x592453,_0x28b4b7){return _0x7b4f5b&_0x592453|~_0x7b4f5b&_0x28b4b7;}function _0x2f3b13(_0x7b4f5b,_0x592453,_0x28b4b7){return _0x7b4f5b&_0x28b4b7|_0x592453&~_0x28b4b7;}function _0x14bd44(_0x7b4f5b,_0x592453,_0x28b4b7){return _0x7b4f5b^_0x592453^_0x28b4b7;}function _0x2aab69(_0x7b4f5b,_0x592453,_0x28b4b7){return _0x592453^(_0x7b4f5b|~_0x28b4b7);}function _0x55f292(_0x7b4f5b,_0x2f3b13,_0x14bd44,_0x2aab69,_0x55f292,_0x5e2715,_0x55c062){return _0x7b4f5b=_0x28b4b7(_0x7b4f5b,_0x28b4b7(_0x28b4b7(_0x32a4cd(_0x2f3b13,_0x14bd44,_0x2aab69),_0x55f292),_0x55c062)),_0x28b4b7(_0x592453(_0x7b4f5b,_0x5e2715),_0x2f3b13);}function _0x2ad6d6(_0x7b4f5b,_0x32a4cd,_0x14bd44,_0x2aab69,_0x55f292,_0x2ad6d6,_0x36d047){return _0x7b4f5b=_0x28b4b7(_0x7b4f5b,_0x28b4b7(_0x28b4b7(_0x2f3b13(_0x32a4cd,_0x14bd44,_0x2aab69),_0x55f292),_0x36d047)),_0x28b4b7(_0x592453(_0x7b4f5b,_0x2ad6d6),_0x32a4cd);}function _0x126f41(_0x7b4f5b,_0x32a4cd,_0x2f3b13,_0x2aab69,_0x55f292,_0x2ad6d6,_0x126f41){return _0x7b4f5b=_0x28b4b7(_0x7b4f5b,_0x28b4b7(_0x28b4b7(_0x14bd44(_0x32a4cd,_0x2f3b13,_0x2aab69),_0x55f292),_0x126f41)),_0x28b4b7(_0x592453(_0x7b4f5b,_0x2ad6d6),_0x32a4cd);}function _0x2f58a8(_0x7b4f5b,_0x32a4cd,_0x2f3b13,_0x14bd44,_0x55f292,_0x2ad6d6,_0x126f41){return _0x7b4f5b=_0x28b4b7(_0x7b4f5b,_0x28b4b7(_0x28b4b7(_0x2aab69(_0x32a4cd,_0x2f3b13,_0x14bd44),_0x55f292),_0x126f41)),_0x28b4b7(_0x592453(_0x7b4f5b,_0x2ad6d6),_0x32a4cd);}function _0x39cd6f(_0x7b4f5b){for(var _0x592453,_0x28b4b7=_0x7b4f5b[_0x19a3('f')],_0x32a4cd=_0x28b4b7+0x8,_0x2f3b13=(_0x32a4cd-_0x32a4cd%0x40)/0x40,_0x14bd44=0x10*(_0x2f3b13+0x1),_0x2aab69=new Array(_0x14bd44-0x1),_0x55f292=0x0,_0x2ad6d6=0x0;_0x28b4b7>_0x2ad6d6;)_0x592453=(_0x2ad6d6-_0x2ad6d6%0x4)/0x4,_0x55f292=_0x2ad6d6%0x4*0x8,_0x2aab69[_0x592453]=_0x2aab69[_0x592453]|_0x7b4f5b[_0x19a3('35')](_0x2ad6d6)<<_0x55f292,_0x2ad6d6++;return _0x592453=(_0x2ad6d6-_0x2ad6d6%0x4)/0x4,_0x55f292=_0x2ad6d6%0x4*0x8,_0x2aab69[_0x592453]=_0x2aab69[_0x592453]|0x80<<_0x55f292,_0x2aab69[_0x14bd44-0x2]=_0x28b4b7<<0x3,_0x2aab69[_0x14bd44-0x1]=_0x28b4b7>>>0x1d,_0x2aab69;}function _0x721e0(_0x7b4f5b){var _0x592453,_0x28b4b7,_0x32a4cd='',_0x2f3b13='';for(_0x28b4b7=0x0;0x3>=_0x28b4b7;_0x28b4b7++)_0x592453=_0x7b4f5b>>>0x8*_0x28b4b7&0xff,_0x2f3b13='\x30'+_0x592453[_0x19a3('34')](0x10),_0x32a4cd+=_0x2f3b13[_0x19a3('36')](_0x2f3b13[_0x19a3('f')]-0x2,0x2);return _0x32a4cd;}function _0x3882c2(_0x7b4f5b){_0x7b4f5b=_0x7b4f5b[_0x19a3('37')](/\r\n/g,'\x0a');for(var _0x592453='',_0x28b4b7=0x0;_0x28b4b7<_0x7b4f5b[_0x19a3('f')];_0x28b4b7++){var _0x32a4cd=_0x7b4f5b[_0x19a3('35')](_0x28b4b7);0x80>_0x32a4cd?_0x592453+=String[_0x19a3('38')](_0x32a4cd):_0x32a4cd>0x7f&&0x800>_0x32a4cd?(_0x592453+=String[_0x19a3('38')](_0x32a4cd>>0x6|0xc0),_0x592453+=String[_0x19a3('38')](0x3f&_0x32a4cd|0x80)):(_0x592453+=String[_0x19a3('38')](_0x32a4cd>>0xc|0xe0),_0x592453+=String[_0x19a3('38')](_0x32a4cd>>0x6&0x3f|0x80),_0x592453+=String[_0x19a3('38')](0x3f&_0x32a4cd|0x80));}return _0x592453;}var _0x9b5a3f,_0x14e4bc,_0x1ae2ae,_0x845abd,_0x7bb4a6,_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9=[],_0x5d0f68=0x7,_0xad8a3e=0xc,_0x132643=0x11,_0x1e1045=0x16,_0x3cf151=0x5,_0x34803c=0x9,_0x233240=0xe,_0x44d891=0x14,_0x124ab7=0x4,_0x23e637=0xb,_0x11090a=0x10,_0x5725ee=0x17,_0x3698aa=0x6,_0x4a55ba=0xa,_0x3e3087=0xf,_0x1d8f34=0x15;for(_0x7b4f5b=_0x3882c2(_0x7b4f5b),_0x3d98d9=_0x39cd6f(_0x7b4f5b),_0x39f0d7=0x67452301,_0x1b918f=0xefcdab89,_0x512b41=0x98badcfe,_0x508385=0x10325476,_0x9b5a3f=0x0;_0x9b5a3f<_0x3d98d9[_0x19a3('f')];_0x9b5a3f+=0x10)_0x14e4bc=_0x39f0d7,_0x1ae2ae=_0x1b918f,_0x845abd=_0x512b41,_0x7bb4a6=_0x508385,_0x39f0d7=_0x55f292(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x0],_0x5d0f68,0xd76aa478),_0x508385=_0x55f292(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x1],_0xad8a3e,0xe8c7b756),_0x512b41=_0x55f292(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x2],_0x132643,0x242070db),_0x1b918f=_0x55f292(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x3],_0x1e1045,0xc1bdceee),_0x39f0d7=_0x55f292(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x4],_0x5d0f68,0xf57c0faf),_0x508385=_0x55f292(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x5],_0xad8a3e,0x4787c62a),_0x512b41=_0x55f292(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x6],_0x132643,0xa8304613),_0x1b918f=_0x55f292(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x7],_0x1e1045,0xfd469501),_0x39f0d7=_0x55f292(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x8],_0x5d0f68,0x698098d8),_0x508385=_0x55f292(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x9],_0xad8a3e,0x8b44f7af),_0x512b41=_0x55f292(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xa],_0x132643,0xffff5bb1),_0x1b918f=_0x55f292(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0xb],_0x1e1045,0x895cd7be),_0x39f0d7=_0x55f292(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0xc],_0x5d0f68,0x6b901122),_0x508385=_0x55f292(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0xd],_0xad8a3e,0xfd987193),_0x512b41=_0x55f292(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xe],_0x132643,0xa679438e),_0x1b918f=_0x55f292(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0xf],_0x1e1045,0x49b40821),_0x39f0d7=_0x2ad6d6(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x1],_0x3cf151,0xf61e2562),_0x508385=_0x2ad6d6(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x6],_0x34803c,0xc040b340),_0x512b41=_0x2ad6d6(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xb],_0x233240,0x265e5a51),_0x1b918f=_0x2ad6d6(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x0],_0x44d891,0xe9b6c7aa),_0x39f0d7=_0x2ad6d6(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x5],_0x3cf151,0xd62f105d),_0x508385=_0x2ad6d6(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0xa],_0x34803c,0x2441453),_0x512b41=_0x2ad6d6(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xf],_0x233240,0xd8a1e681),_0x1b918f=_0x2ad6d6(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x4],_0x44d891,0xe7d3fbc8),_0x39f0d7=_0x2ad6d6(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x9],_0x3cf151,0x21e1cde6),_0x508385=_0x2ad6d6(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0xe],_0x34803c,0xc33707d6),_0x512b41=_0x2ad6d6(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x3],_0x233240,0xf4d50d87),_0x1b918f=_0x2ad6d6(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x8],_0x44d891,0x455a14ed),_0x39f0d7=_0x2ad6d6(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0xd],_0x3cf151,0xa9e3e905),_0x508385=_0x2ad6d6(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x2],_0x34803c,0xfcefa3f8),_0x512b41=_0x2ad6d6(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x7],_0x233240,0x676f02d9),_0x1b918f=_0x2ad6d6(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0xc],_0x44d891,0x8d2a4c8a),_0x39f0d7=_0x126f41(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x5],_0x124ab7,0xfffa3942),_0x508385=_0x126f41(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x8],_0x23e637,0x8771f681),_0x512b41=_0x126f41(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xb],_0x11090a,0x6d9d6122),_0x1b918f=_0x126f41(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0xe],_0x5725ee,0xfde5380c),_0x39f0d7=_0x126f41(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x1],_0x124ab7,0xa4beea44),_0x508385=_0x126f41(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x4],_0x23e637,0x4bdecfa9),_0x512b41=_0x126f41(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x7],_0x11090a,0xf6bb4b60),_0x1b918f=_0x126f41(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0xa],_0x5725ee,0xbebfbc70),_0x39f0d7=_0x126f41(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0xd],_0x124ab7,0x289b7ec6),_0x508385=_0x126f41(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x0],_0x23e637,0xeaa127fa),_0x512b41=_0x126f41(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x3],_0x11090a,0xd4ef3085),_0x1b918f=_0x126f41(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x6],_0x5725ee,0x4881d05),_0x39f0d7=_0x126f41(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x9],_0x124ab7,0xd9d4d039),_0x508385=_0x126f41(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0xc],_0x23e637,0xe6db99e5),_0x512b41=_0x126f41(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xf],_0x11090a,0x1fa27cf8),_0x1b918f=_0x126f41(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x2],_0x5725ee,0xc4ac5665),_0x39f0d7=_0x2f58a8(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x0],_0x3698aa,0xf4292244),_0x508385=_0x2f58a8(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x7],_0x4a55ba,0x432aff97),_0x512b41=_0x2f58a8(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xe],_0x3e3087,0xab9423a7),_0x1b918f=_0x2f58a8(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x5],_0x1d8f34,0xfc93a039),_0x39f0d7=_0x2f58a8(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0xc],_0x3698aa,0x655b59c3),_0x508385=_0x2f58a8(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0x3],_0x4a55ba,0x8f0ccc92),_0x512b41=_0x2f58a8(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0xa],_0x3e3087,0xffeff47d),_0x1b918f=_0x2f58a8(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x1],_0x1d8f34,0x85845dd1),_0x39f0d7=_0x2f58a8(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x8],_0x3698aa,0x6fa87e4f),_0x508385=_0x2f58a8(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0xf],_0x4a55ba,0xfe2ce6e0),_0x512b41=_0x2f58a8(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x6],_0x3e3087,0xa3014314),_0x1b918f=_0x2f58a8(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0xd],_0x1d8f34,0x4e0811a1),_0x39f0d7=_0x2f58a8(_0x39f0d7,_0x1b918f,_0x512b41,_0x508385,_0x3d98d9[_0x9b5a3f+0x4],_0x3698aa,0xf7537e82),_0x508385=_0x2f58a8(_0x508385,_0x39f0d7,_0x1b918f,_0x512b41,_0x3d98d9[_0x9b5a3f+0xb],_0x4a55ba,0xbd3af235),_0x512b41=_0x2f58a8(_0x512b41,_0x508385,_0x39f0d7,_0x1b918f,_0x3d98d9[_0x9b5a3f+0x2],_0x3e3087,0x2ad7d2bb),_0x1b918f=_0x2f58a8(_0x1b918f,_0x512b41,_0x508385,_0x39f0d7,_0x3d98d9[_0x9b5a3f+0x9],_0x1d8f34,0xeb86d391),_0x39f0d7=_0x28b4b7(_0x39f0d7,_0x14e4bc),_0x1b918f=_0x28b4b7(_0x1b918f,_0x1ae2ae),_0x512b41=_0x28b4b7(_0x512b41,_0x845abd),_0x508385=_0x28b4b7(_0x508385,_0x7bb4a6);var _0x47fba6=_0x721e0(_0x39f0d7)+_0x721e0(_0x1b918f)+_0x721e0(_0x512b41)+_0x721e0(_0x508385);return _0x47fba6[_0x19a3('39')]();};_0xodT='jsjiami.com.v6';


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