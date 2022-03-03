/*

项目名称:达赏

项目注册地址:
app地址:http://m.tokshine.com/h5/
交易app地址:http://www.xiangxincapital.com

邀请码:RPRR47

声明：脚本只能作者下级才能跑以及你自己号的自己下级跑(后者未更新)

零撸玩法:
下载app → 登录 → 填邀请码 → 自行吧能做到任务做做(不做也可以,反正没有钻石送)
实名认证(需要人脸) → 进 交易app 选达赏 登录(同app账号同步) → 确权 → 收款方式认证 → 业绩激励 → 申请业绩激励 → 选10股期,确定申请

然后每在app看5分钟视频,得5克拉钻石(第二天释放前一天钻石)

5分钟视频后确保交易app的 业绩激励 上面显示今日月绩进度是否正确

如需要有啥奖励自行查看 业绩激励 界面右上角的规则

399元玩法:

自行查看:https://www.yuque.com/docs/share/622a0d2c-53f6-441c-bad0-9418287eb20b

注:走399元邀请码不支持使用脚本,走我码再走399元的我也没能力扶持,除非有客观收入会联系下级发放

变现:
在交易app里面出售释放出来的股权(可官方回收和自行挂单)

一天2-3次,刷1个小时应该够,不够自己看时长计算
cron 0-59/1 8,17 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_ds.js

变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/ds_variable_data.js

*/


const $ = new Env('【达赏】版本:22/03/03_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xodJ='jsjiami.com.v6',_0xodJ_=['_0xodJ'],_0x5638=[_0xodJ,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x73\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x63\x6f\x64\x65','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x73\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x75\x73\x65\x72\x5f\x49\x44','\x74\x6f\x6b\x65\x6e','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x75\x73\x65\x72\x2f\x75\x73\x65\x72\x49\x6e\x66\x6f\x2f\x67\x65\x74\x55\x73\x65\x72\x42\x79\x49\x64','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x64\x61\x74\x61','\x70\x61\x72\x65\x6e\x74\x55\x73\x65\x72\x49\x64','\x31\x33\x38\x39\x39\x37\x37','\x20\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u8be5\u811a\u672c\u5f8b\u5c5e\u4f5c\u8005\u4e0b\u7ea7\u4f7f\u7528\x0a\x2d\x2d\x2d\u8be5\u8d26\u6237\u975e\u4f5c\u8005\u4e0b\u7ea7\x0a\x2d\x2d\x2d\u4f5c\u8005\u9080\u8bf7\u7801\u4e3a\uff1a\x52\x50\x52\x52\x34\x37','\x20\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u8be5\u8d26\u53f7\u975e\u4f60\u81ea\u5df1\u8d26\u53f7\u7684\u4e0b\u7ea7','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x76\x6f\x64\x2f\x76\x69\x64\x65\x6f\x2f\x67\x65\x74\x52\x65\x63\x6f\x6d\x6d\x65\x6e\x64\x4c\x69\x73\x74\x3f\x70\x61\x67\x65\x3d\x33\x26\x73\x69\x7a\x65\x3d\x39','\x20\u89c6\u9891\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x76\x6f\x64','\x20\u89c6\u9891\u5217\u8868\u3011\x3a\x20','\x75\x73\x65\x72\x2f\x63\x6f\x69\x6e\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x2f\x63\x6f\x69\x6e\x4d\x69\x6e\x75\x74\x65\x44\x72\x61\x77\x41\x6d\x6f\x75\x6e\x74\x42\x79\x55\x73\x65\x72\x49\x64\x3f\x73\x65\x63\x6f\x6e\x64\x3d\x37\x32','\x70\x6f\x73\x74','\x20\u89c2\u770b\u89c6\u9891\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u89c2\u770b\u89c6\u9891\u3011\x3a\x20\u5904\u7406\u6210\u529f','\x7b\x22\x64\x61\x74\x61\x22\x3a\x22\x30\x2c\x32\x3b\x22\x2c\x22\x73\x65\x71\x75\x65\x6e\x63\x65\x22\x3a\x33\x32\x2c\x22\x74\x6f\x6b\x65\x6e\x22\x3a\x22','\x20\u89c2\u770b\u89c6\u9891\u3011\x3a\x20','\x76\x6f\x64\x2f\x77\x61\x74\x63\x68\x2f\x67\x65\x74\x54\x6f\x6b\x65\x6e\x2f','\x20\u83b7\u53d6\u540c\u6b65\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u83b7\u53d6\u540c\u6b65\u4fe1\u606f\u3011\x3a\x20','\x76\x6f\x64\x2f\x77\x61\x74\x63\x68\x2f\x77\x61\x74\x63\x68\x52\x65\x70\x6f\x72\x74','\x20\u540c\u6b65\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u540c\u6b65\u4fe1\u606f\u3011\x3a\x20','\x76\x6f\x64\x2f\x77\x61\x74\x63\x68\x2f\x74\x6f\x64\x61\x79\x54\x6f\x74\x61\x6c\x44\x75\x72\x61\x74\x69\x6f\x6e','\x20\u4eca\u65e5\u89c2\u770b\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u4eca\u65e5\u89c2\u770b\u65f6\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u4eca\u65e5\u89c2\u770b\u65f6\u3011\x3a\x20\u603b\u65f6\u957f\x20','\x20\u4eca\u65e5\u89c2\u770b\u65f6\u3011\x3a\x20','\x75\x73\x65\x72\x2f\x63\x6f\x69\x6e\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x2f\x6c\x69\x73\x74\x43\x6f\x69\x6e\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x42\x79\x55\x73\x65\x72\x49\x64\x47\x72\x6f\x75\x70\x42\x79\x4f\x77\x6e\x44\x61\x74\x65','\x7b\x22\x70\x61\x67\x65\x22\x3a\x31\x2c\x22\x73\x69\x7a\x65\x22\x3a\x31\x30\x7d','\x20\u94bb\u77f3\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x73\x74\x61\x74\x75\x73','\x20\u94bb\u77f3\u5217\u8868\u3011\x3a\x20','\x75\x73\x65\x72\x2f\x63\x6f\x69\x6e\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x2f\x75\x70\x43\x6f\x69\x6e\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x53\x74\x61\x74\x65\x3f\x69\x64\x3d','\x20\u9886\u53d6\u94bb\u77f3\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u94bb\u77f3\u3011\x3a\x20\u6210\u529f','\x20\u9886\u53d6\u94bb\u77f3\u3011\x3a\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x77\x2e\x74\x6f\x6b\x73\x68\x69\x6e\x65\x2e\x63\x6f\x6d\x2f\x61\x70\x70\x2f','\x44\x61\x72\x74\x2f\x32\x2e\x31\x35\x20\x28\x64\x61\x72\x74\x3a\x69\x6f\x29','\x67\x7a\x69\x70','\x67\x77\x2e\x74\x6f\x6b\x73\x68\x69\x6e\x65\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x6a\x73\x6a\x69\x67\x61\x45\x6d\x77\x64\x69\x2e\x63\x78\x45\x6f\x6d\x52\x78\x2e\x76\x53\x36\x65\x50\x49\x4b\x59\x54\x65\x3d\x3d'];function _0xdef9(_0x14f2f7,_0x4e07c5){_0x14f2f7=~~'0x'['concat'](_0x14f2f7['slice'](0x0));var _0x5d2fb1=_0x5638[_0x14f2f7];return _0x5d2fb1;};(function(_0x255907,_0x59aa11){var _0x388c0e=0x0;for(_0x59aa11=_0x255907['shift'](_0x388c0e>>0x2);_0x59aa11&&_0x59aa11!==(_0x255907['pop'](_0x388c0e>>0x3)+'')['replace'](/[gEwdxERxSePIKYTe=]/g,'');_0x388c0e++){_0x388c0e=_0x388c0e^0xd4bae;}}(_0x5638,_0xdef9));const fs=require('\x66\x73');const ds_variable=$[_0xdef9('0')]()?require(_0xdef9('1')):'';let UserId='';!(async()=>{if($[_0xdef9('0')]()){if(ds_variable[_0xdef9('2')]!==0xc8){console[_0xdef9('3')](_0xdef9('4'));return;}console[_0xdef9('3')](_0xdef9('5')+new Date(new Date()[_0xdef9('6')]()+new Date()[_0xdef9('7')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xdef9('8')]()+_0xdef9('9'));console[_0xdef9('3')](_0xdef9('a')+ds_variable[_0xdef9('b')][_0xdef9('c')][_0xdef9('d')]+_0xdef9('e'));subTitle='';for(i=0x0;i<ds_variable[_0xdef9('b')][_0xdef9('c')][_0xdef9('d')];i++){let _0x5c7f72=ds_variable[_0xdef9('b')][_0xdef9('c')][i];userid=_0x5c7f72[_0xdef9('f')];token=_0x5c7f72[_0xdef9('10')];$[_0xdef9('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0xdef9('12')]($[_0xdef9('13')],subTitle);}}}})()[_0xdef9('14')](_0x39a374=>$[_0xdef9('15')](_0x39a374))[_0xdef9('16')](()=>$[_0xdef9('17')]());async function implement(){console[_0xdef9('3')](_0xdef9('18')+$[_0xdef9('11')]+_0xdef9('19'));await UserById();}function UserById(){let _0x34de27=Get_request(_0xdef9('1a'));return new Promise((_0x4ffcb1,_0x569b14)=>{$[_0xdef9('1b')](_0x34de27,async(_0x454f42,_0x5c57db,_0x2c58d2)=>{try{if(_0x454f42){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('1d'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('1d');}else{let _0x16255f=JSON[_0xdef9('1e')](_0x2c58d2);if(_0x16255f[_0xdef9('2')]==0xc8){if($[_0xdef9('11')]==0x1){if(_0x16255f[_0xdef9('1f')][_0xdef9('20')]!=_0xdef9('21')){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('22'));return;}else{UserId=_0x16255f[_0xdef9('1f')]['\x69\x64'];await RecommendList();await listCoin();}}else{if(_0x16255f[_0xdef9('1f')][_0xdef9('20')]==UserId){await RecommendList();await listCoin();}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('23'));}}}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('24')+_0x16255f[_0xdef9('25')]);}}}catch(_0x296dbe){console[_0xdef9('3')](_0x296dbe,_0x5c57db);}finally{_0x4ffcb1();}});});}function RecommendList(){let _0x45ce1c=Get_request(_0xdef9('26'));return new Promise((_0x5141ba,_0x341991)=>{$[_0xdef9('1b')](_0x45ce1c,async(_0x4751fa,_0x8b513,_0x51475d)=>{try{if(_0x4751fa){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('27'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('27');}else{let _0x8f1004=JSON[_0xdef9('1e')](_0x51475d);if(_0x8f1004[_0xdef9('2')]==0xc8){let _0x12192c=Math[_0xdef9('28')](Math[_0xdef9('29')]()*0x9);await getToken(_0x8f1004[_0xdef9('1f')][_0x12192c][_0xdef9('2a')]['\x69\x64']);}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('2b')+_0x8f1004[_0xdef9('25')]);}}}catch(_0x573a7d){console[_0xdef9('3')](_0x573a7d,_0x8b513);}finally{_0x5141ba();}});});}function DrawRecord(_0x28d743){let _0x5b74f1=Post_request(_0xdef9('2c'),'');return new Promise((_0x42751e,_0x2b6ec4)=>{$[_0xdef9('2d')](_0x5b74f1,async(_0x190355,_0x842efe,_0x2ff08d)=>{try{if(_0x190355){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('2e'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('2e');}else{let _0x4fa97e=JSON[_0xdef9('1e')](_0x2ff08d);if(_0x4fa97e[_0xdef9('2')]==0xc8){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('2f'));await watchReport(_0xdef9('30')+_0x28d743+'\x22\x7d');}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('31')+_0x4fa97e[_0xdef9('25')]);}}}catch(_0x410a81){console[_0xdef9('3')](_0x410a81,_0x842efe);}finally{_0x42751e();}});});}function getToken(_0x4af68d){let _0xf6c39f=Get_request(_0xdef9('32')+_0x4af68d);return new Promise((_0x44114e,_0xc837ca)=>{$[_0xdef9('1b')](_0xf6c39f,async(_0x10e648,_0x4ea76e,_0x3bc014)=>{try{if(_0x10e648){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('33'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('33');}else{let _0x4b93f8=JSON[_0xdef9('1e')](_0x3bc014);if(_0x4b93f8[_0xdef9('2')]==0xc8){await DrawRecord(_0x4b93f8[_0xdef9('1f')][_0xdef9('10')]);}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('34')+_0x4b93f8[_0xdef9('25')]);}}}catch(_0x472a92){console[_0xdef9('3')](_0x472a92,_0x4ea76e);}finally{_0x44114e();}});});}function watchReport(_0x293f74){let _0x1533f7=Post_request(_0xdef9('35'),_0x293f74);return new Promise((_0xf136fe,_0x20b425)=>{$[_0xdef9('2d')](_0x1533f7,async(_0x1721f4,_0x2225ff,_0x1d2de3)=>{try{if(_0x1721f4){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('36'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('36');}else{let _0xe5e116=JSON[_0xdef9('1e')](_0x1d2de3);if(_0xe5e116[_0xdef9('2')]==0xc8){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('37')+_0xe5e116[_0xdef9('25')]);await todaytime();}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('37')+_0xe5e116[_0xdef9('25')]);}}}catch(_0x57a41f){console[_0xdef9('3')](_0x57a41f,_0x2225ff);}finally{_0xf136fe();}});});}function todaytime(){let _0x19a621=Get_request(_0xdef9('38'));return new Promise((_0x3e3232,_0x3fba61)=>{$[_0xdef9('1b')](_0x19a621,async(_0xd0b36b,_0x572d5c,_0x161873)=>{try{if(_0xd0b36b){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('39'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('3a');}else{let _0x452307=JSON[_0xdef9('1e')](_0x161873);if(_0x452307[_0xdef9('2')]==0xc8){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('3b')+_0x452307[_0xdef9('1f')]+'\x20\u79d2');}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('3c')+_0x452307[_0xdef9('25')]);}}}catch(_0x1a850a){console[_0xdef9('3')](_0x1a850a,_0x572d5c);}finally{_0x3e3232();}});});}function listCoin(){let _0x4a26a4=Post_request(_0xdef9('3d'),_0xdef9('3e'));return new Promise((_0x14390b,_0x2c4578)=>{$[_0xdef9('2d')](_0x4a26a4,async(_0x5ab80c,_0x35cc9f,_0x157958)=>{try{if(_0x5ab80c){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('3f'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('3f');}else{let _0x4fb05b=JSON[_0xdef9('1e')](_0x157958);if(_0x4fb05b[_0xdef9('2')]==0xc8){for(let _0x42251b of _0x4fb05b[_0xdef9('1f')][0x0]){if(_0x42251b[_0xdef9('40')]==0x0){await upCoin(_0x42251b['\x69\x64']);}}}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('41')+_0x4fb05b[_0xdef9('25')]);}}}catch(_0x420652){console[_0xdef9('3')](_0x420652,_0x35cc9f);}finally{_0x14390b();}});});}function upCoin(_0x364c25){let _0x504a97=Post_request(_0xdef9('42')+_0x364c25,'');return new Promise((_0x51772e,_0x81e59f)=>{$[_0xdef9('2d')](_0x504a97,async(_0x38d82d,_0x7726ef,_0xcc1be9)=>{try{if(_0x38d82d){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('43'));subTitle+=_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('43');}else{let _0x130b11=JSON[_0xdef9('1e')](_0xcc1be9);if(_0x130b11[_0xdef9('2')]==0xc8){console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('44'));}else{console[_0xdef9('3')](_0xdef9('1c')+$[_0xdef9('11')]+_0xdef9('45')+_0x130b11[_0xdef9('25')]);}}}catch(_0x11c3a8){console[_0xdef9('3')](_0x11c3a8,_0x7726ef);}finally{_0x51772e();}});});}function Post_request(_0x54b35b,_0x4a59ee){return{'\x75\x72\x6c':_0xdef9('46')+_0x54b35b,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0xdef9('47'),'userid':userid,'accept-encoding':_0xdef9('48'),'host':_0xdef9('49'),'authorization':token,'apptype':'\x31','Content-Type':_0xdef9('4a')},'\x62\x6f\x64\x79':_0x4a59ee};};function Get_request(_0x30ad09){return{'\x75\x72\x6c':_0xdef9('46')+_0x30ad09,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0xdef9('47'),'userid':userid,'accept-encoding':_0xdef9('48'),'host':_0xdef9('49'),'authorization':token,'apptype':'\x31','content-type':_0xdef9('4a')}};};;_0xodJ='jsjiami.com.v6';


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