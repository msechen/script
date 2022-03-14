/*

项目名称:源火星球

项目注册地址:http://yuanhuo.yuanhuojisuban.com/#/?code=WVY4OS
邀请码:WVY4OS


必要变量:

cron 13 0-23/4 * * *

配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/yhxq_variable.js
脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_yhxq.js

*/


const $ = new Env('【源火星球】版本:22/03/14_0');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xod6='jsjiami.com.v6',_0xod6_=['_0xod6'],_0x545a=[_0xod6,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x79\x68\x78\x71\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x2e\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x79\x68\x78\x71\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x74\x6f\x6b\x65\x6e','\x57\x69\x74\x68\x64\x72\x61\x77\x61\x6c','\x57\x69\x74\x68\x64\x72\x61\x77\x61\x6c\x5f\x74\x69\x6d\x65','\x46\x65\x65\x64','\x69\x6e\x64\x65\x78','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x2f\x70\x65\x74\x41\x6c\x6c','\x67\x65\x74\x54\x79\x70\x65\x3d\x32\x32\x39\x37\x35\x35\x43\x46\x33\x35\x38\x35\x36\x34\x41\x31\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x41\x33\x42\x41\x42\x45\x42\x30\x34\x38\x38\x32\x42\x38\x38\x42','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\u706b\u6e90\x20','\x64\x61\x74\x61','\x66\x69\x72\x65\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\uff0c\u552e\u5e01\x20','\x70\x65\x74\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20','\x6d\x73\x67','\x64\x79\x6e\x61\x6d\x69\x63\x2f\x67\x65\x74\x2f\x61\x6c\x6c\x4c\x69\x73\x74\x3f\x70\x61\x67\x65\x4e\x75\x6d\x3d\x31\x26\x70\x61\x67\x65\x53\x69\x7a\x65\x3d\x31\x30','\x67\x65\x74','\x20\u52a8\u6001\u5217\u8868\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x72\x6f\x77\x73','\x69\x73\x4c\x69\x6b\x65','\x64\x79\x6e\x61\x6d\x69\x63\x49\x64','\x20\u62d4\u841d\u535c\u72b6\u6001\u3011\x3a\x20','\x64\x79\x6e\x61\x6d\x69\x63\x2f\x4c\x69\x6b\x65\x2f\x69\x6e\x73\x65\x72\x74','\x75\x73\x65\x72\x49\x64\x3d','\x26\x64\x79\x6e\x61\x6d\x69\x63\x49\x64\x3d','\x26\x75\x73\x65\x72\x73\x49\x64\x3d\x31','\x20\u70b9\u8d5e\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u70b9\u8d5e\u3011\x3a\x20','\x73\x69\x67\x6e\x2f\x69\x6e\x64\x65\x78','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x74\x6f\x64\x61\x79\x53\x69\x67\x6e\x49\x6e','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x67\x65\x74\x50\x65\x74\x47\x6f\x6c\x64\x41\x6e\x64\x50\x72\x6f\x70','\x20\u62d4\u841d\u535c\u72b6\u6001\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x70\x72\x6f\x70','\x72\x61\x64\x69\x73\x68\x2f\x62\x75\x79\x48\x6f\x65','\x68\x6f\x65\x43\x6f\x75\x6e\x74\x3d','\x20\u8d2d\u4e70\u9504\u5934\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u8d2d\u4e70\u9504\u5934\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x67\x65\x74\x48\x6f\x65','\x68\x6f\x65\x43\x6f\x75\x6e\x74\x3d\x31','\x20\u62d4\u841d\u535c\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u62d4\u841d\u535c\u3011\x3a\x20\u83b7\u5f97\x20','\x73\x74\x72','\x20\u62d4\u841d\u535c\u3011\x3a\x20','\x73\x69\x67\x6e','\x2d\x2d\x2d\u7b7e\u5230\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u7b7e\u5230\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x20\u7b7e\u5230\u3011\x3a\x20','\x72\x65\x70\x6c\x65\x6e\x69\x73\x68\x2f\x65\x6e\x65\x72\x67\x79\x2f\x61\x64\x76','\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35\x26\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35','\x20\u770b\u5e7f\u544a\u8865\u80fd\u91cf\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u5e7f\u544a\u8865\u80fd\u91cf\u3011\x3a\x20','\x6d\x61\x74\x63\x68','\x76\x69\x64\x65\x6f\x2f\x70\x65\x74\x2f\x67\x6f\x6c\x64','\x20\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x70\x65\x74\x47\x6f\x6c\x64','\x20\u517d\u5e01','\x72\x65\x73\x69\x64\x75\x65\x43\x6f\x75\x6e\x74','\x20\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20','\x70\x65\x74\x2f\x66\x65\x65\x64','\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30','\x20\u5582\u517b\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u5582\u517b\u3011\x3a\x20','\x69\x6e\x64\x65\x78\x49\x6e\x66\x6f','\x6e\x69\x6b\x65\x4e\x61\x6d\x65','\x63\x75\x72\x50\x65\x74\x47\x6f\x6c\x64','\x63\x75\x72\x46\x69\x72\x65\x47\x6f\x6c\x64','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u706b\u6e90\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u517d\u5e01\uff1a','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x38','\x4d\x44\x35','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x66\x6e\x50\x6a\x73\x6a\x57\x59\x69\x4c\x67\x68\x65\x61\x47\x66\x6d\x70\x69\x6b\x2e\x4a\x63\x6f\x4f\x6d\x2e\x76\x36\x3d\x3d'];function _0x45fc(_0x332611,_0x3e0895){_0x332611=~~'0x'['concat'](_0x332611['slice'](0x0));var _0x14ea47=_0x545a[_0x332611];return _0x14ea47;};(function(_0x4069c1,_0x298f40){var _0x12683a=0x0;for(_0x298f40=_0x4069c1['shift'](_0x12683a>>0x2);_0x298f40&&_0x298f40!==(_0x4069c1['pop'](_0x12683a>>0x3)+'')['replace'](/[fnPWYLgheGfpkJO=]/g,'');_0x12683a++){_0x12683a=_0x12683a^0xd7482;}}(_0x545a,_0x45fc));const crypto=require(_0x45fc('0'));const yhxq_variable=$[_0x45fc('1')]()?require(_0x45fc('2')):'';console[_0x45fc('3')](_0x45fc('4'));!(async()=>{if(yhxq_variable[_0x45fc('5')]!==0xc8){console[_0x45fc('3')](_0x45fc('6'));return;}console[_0x45fc('3')](_0x45fc('7')+new Date(new Date()[_0x45fc('8')]()+new Date()[_0x45fc('9')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x45fc('a')]()+_0x45fc('b'));console[_0x45fc('3')](_0x45fc('c')+yhxq_variable[_0x45fc('d')][_0x45fc('e')][_0x45fc('f')]+_0x45fc('10'));subTitle='';for(i=0x0;i<yhxq_variable[_0x45fc('d')][_0x45fc('e')][_0x45fc('f')];i++){notice=yhxq_variable[_0x45fc('d')][_0x45fc('11')][0x0][_0x45fc('12')];token=yhxq_variable[_0x45fc('d')][_0x45fc('e')][i][_0x45fc('13')];Withdrawal=yhxq_variable[_0x45fc('d')][_0x45fc('e')][i][_0x45fc('14')];Withdrawal_time=yhxq_variable[_0x45fc('d')][_0x45fc('e')][i][_0x45fc('15')];Feed=yhxq_variable[_0x45fc('d')][_0x45fc('e')][i][_0x45fc('16')];UA=yhxq_variable[_0x45fc('d')][_0x45fc('e')][i]['\x55\x41'];$[_0x45fc('17')]=i+0x1;if(!UA){UA=_0x45fc('18');}console[_0x45fc('3')](_0x45fc('19')+$[_0x45fc('17')]+_0x45fc('1a'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x45fc('1b')]($[_0x45fc('1c')],subTitle);}}}})()[_0x45fc('1d')](_0x359559=>$[_0x45fc('1e')](_0x359559))[_0x45fc('1f')](()=>$[_0x45fc('20')]());async function implement(){await yhxq_account(0x1);await yhxq_sign_state();await yhxq_adv();await yhxq_gold();if(Feed){await yhxq_feed();}state=!![];await GoldAndProp();await yhxq_petAll();await yhxq_account(0x0);}function yhxq_petAll(){return new Promise(_0x409a42=>{let _0x55ef22=Post_request(_0x45fc('21'),_0x45fc('22'));$[_0x45fc('23')](_0x55ef22,async(_0x3ca30c,_0x5427c1,_0xc286df)=>{try{if(_0x3ca30c){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('25'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('25');console[_0x45fc('3')](_0x3ca30c);}else{let _0x471393=JSON[_0x45fc('26')](_0xc286df);if(_0x471393[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('27')+_0x471393[_0x45fc('28')][_0x45fc('29')]+_0x45fc('2a')+_0x471393[_0x45fc('28')][_0x45fc('2b')]);}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('2c')+_0x471393[_0x45fc('2d')]);}}}catch(_0x19aa74){$[_0x45fc('1e')](_0x19aa74,_0x5427c1);}finally{_0x409a42();}});});}function dynamic(){return new Promise(_0x40da7a=>{let _0x200113=Get_request(_0x45fc('2e'));$[_0x45fc('2f')](_0x200113,async(_0x3f1773,_0x31caa6,_0x250040)=>{try{if(_0x3f1773){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('30'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('30');console[_0x45fc('3')](_0x3f1773);}else{let _0xe3dd1d=JSON[_0x45fc('26')](_0x250040);if(_0xe3dd1d[_0x45fc('5')]==0xc8){for(let _0x3ce16e of _0xe3dd1d[_0x45fc('31')]){if(_0x3ce16e[_0x45fc('32')]==0x0){console[_0x45fc('3')](_0x3ce16e[_0x45fc('33')]);}}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('34')+_0xe3dd1d[_0x45fc('2d')]);}}}catch(_0x10b775){$[_0x45fc('1e')](_0x10b775,_0x31caa6);}finally{_0x40da7a();}});});}function insert(_0x800623,_0x507687){let _0x290960=Post_request(_0x45fc('35'),_0x45fc('36')+_0x507687+_0x45fc('37')+_0x800623+_0x45fc('38'));return new Promise(_0x1a0a66=>{$[_0x45fc('23')](_0x290960,async(_0x4c46f3,_0x220c02,_0x5e41f0)=>{try{if(_0x4c46f3){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('39'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('39');console[_0x45fc('3')](_0x4c46f3);}else{let _0x4208c6=JSON[_0x45fc('26')](_0x5e41f0);if(_0x4208c6[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('3a')+_0x4208c6[_0x45fc('2d')]);}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('3a')+_0x4208c6[_0x45fc('2d')]);}}}catch(_0x4e8270){$[_0x45fc('1e')](_0x4e8270,_0x220c02);}finally{_0x1a0a66();}});});}function yhxq_sign_state(){let _0x4cb2ea=Get_request(_0x45fc('3b'));return new Promise(_0x26819e=>{$[_0x45fc('2f')](_0x4cb2ea,async(_0x503f22,_0x17336e,_0xdda055)=>{try{if(_0x503f22){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('3c'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('3c');console[_0x45fc('3')](_0x503f22);}else{let _0x11eb40=JSON[_0x45fc('26')](_0xdda055);if(_0x11eb40[_0x45fc('5')]==0xc8){if(_0x11eb40[_0x45fc('28')][_0x45fc('3d')]==0x1){await yhxq_sign();}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('3e')+_0x11eb40[_0x45fc('2d')]);}}}catch(_0x203252){$[_0x45fc('1e')](_0x203252,_0x17336e);}finally{_0x26819e();}});});}function GoldAndProp(){return new Promise(_0x2f408a=>{let _0x2b419d=Get_request(_0x45fc('3f'));$[_0x45fc('2f')](_0x2b419d,async(_0x37feac,_0x2c0b29,_0x252542)=>{try{if(_0x37feac){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('40'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('40');console[_0x45fc('3')](_0x37feac);}else{let _0xc93613=JSON[_0x45fc('26')](_0x252542);if(_0xc93613[_0x45fc('5')]==0xc8){if(_0xc93613[_0x45fc('28')][_0x45fc('41')]<0x1e){await buyHoe(0x1e-_0xc93613[_0x45fc('28')][_0x45fc('41')]);}else{for(let _0x4222f2=0x0;_0x4222f2<_0xc93613[_0x45fc('28')]&&state==(!![])[_0x45fc('41')];_0x4222f2++){await getHoe();}}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('34')+_0xc93613[_0x45fc('2d')]);}}}catch(_0xd4955e){$[_0x45fc('1e')](_0xd4955e,_0x2c0b29);}finally{_0x2f408a();}});});}function buyHoe(_0x2ea060){return new Promise(_0x364547=>{let _0x1558ad=Post_request(_0x45fc('42'),_0x45fc('43')+_0x2ea060);$[_0x45fc('23')](_0x1558ad,async(_0x53ce73,_0x6fc739,_0x1f1c12)=>{try{if(_0x53ce73){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('44'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('44');console[_0x45fc('3')](_0x53ce73);}else{let _0x27c8eb=JSON[_0x45fc('26')](_0x1f1c12);if(_0x27c8eb[_0x45fc('5')]==0xc8){for(let _0x2ea060=0x0;_0x2ea060<0x1e&&state==!![];_0x2ea060++){await getHoe();await $[_0x45fc('45')](Math[_0x45fc('46')](Math[_0x45fc('47')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('48')+_0x27c8eb[_0x45fc('2d')]);}}}catch(_0x54836f){$[_0x45fc('1e')](_0x54836f,_0x6fc739);}finally{_0x364547();}});});}function getHoe(){return new Promise(_0xe61efe=>{let _0x4f2f54=Post_request(_0x45fc('49'),_0x45fc('4a'));$[_0x45fc('23')](_0x4f2f54,async(_0x2f1b10,_0x547f47,_0x1eb62c)=>{try{if(_0x2f1b10){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('4b'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('4b');console[_0x45fc('3')](_0x2f1b10);}else{let _0x66348b=JSON[_0x45fc('26')](_0x1eb62c);if(_0x66348b[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('4c')+_0x66348b[_0x45fc('28')][0x0][_0x45fc('4d')]);}else{state=![];console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('4e')+_0x66348b[_0x45fc('2d')]);}}}catch(_0x6db904){$[_0x45fc('1e')](_0x6db904,_0x547f47);}finally{_0xe61efe();}});});}function yhxq_sign(){return new Promise(_0x40b428=>{let _0x1f9e05=Get_request(_0x45fc('4f'));$[_0x45fc('2f')](_0x1f9e05,async(_0x586903,_0x1cd506,_0x47cf47)=>{try{if(_0x586903){console[_0x45fc('3')]('\x0a\u3010'+$[_0x45fc('1c')]+_0x45fc('50'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('51');console[_0x45fc('3')](JSON[_0x45fc('52')](_0x586903));}else{let _0x8b219d=JSON[_0x45fc('26')](_0x47cf47);if(_0x8b219d[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('53')+_0x8b219d[_0x45fc('2d')]);}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('53')+_0x8b219d[_0x45fc('2d')]);}}}catch(_0x374e5c){$[_0x45fc('1e')](_0x374e5c,_0x1cd506);}finally{_0x40b428();}});});}function yhxq_adv(){return new Promise(_0x42f2ea=>{let _0x4c755d=Post_request(_0x45fc('54'),_0x45fc('55'));$[_0x45fc('23')](_0x4c755d,async(_0x262b52,_0x33ae27,_0x2fead7)=>{try{if(_0x262b52){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('56'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('56');console[_0x45fc('3')](JSON[_0x45fc('52')](_0x262b52));}else{let _0x11357d=JSON[_0x45fc('26')](_0x2fead7);if(_0x11357d[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('57')+_0x11357d[_0x45fc('2d')]);if(_0x11357d[_0x45fc('2d')][_0x45fc('58')](/当日剩余补充次数(\S*)次\(广告\)/)[0x1]>0x0){await $[_0x45fc('45')](Math[_0x45fc('46')](Math[_0x45fc('47')]()*(0x61a8-0x4e20+0x3e8)+0x4e20));await yhxq_adv();}else{await yhxq_petAll();}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('57')+_0x11357d[_0x45fc('2d')]);}}}catch(_0x30bf48){$[_0x45fc('1e')](_0x30bf48,_0x33ae27);}finally{_0x42f2ea();}});});}function yhxq_gold(){return new Promise(_0x3d742e=>{let _0x4051e0=Get_request(_0x45fc('59'));$[_0x45fc('2f')](_0x4051e0,async(_0x19db79,_0x3aa078,_0x47cd15)=>{try{if(_0x19db79){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('5a'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('5b');console[_0x45fc('3')](_0x19db79);}else{let _0x5aa4f9=JSON[_0x45fc('26')](_0x47cd15);if(_0x5aa4f9[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('5c')+_0x5aa4f9[_0x45fc('28')][_0x45fc('5d')]+_0x45fc('5e'));let _0xafd218=_0x5aa4f9[_0x45fc('28')][_0x45fc('5f')];if(_0xafd218>0x0){await $[_0x45fc('45')](Math[_0x45fc('46')](Math[_0x45fc('47')]()*(0x61a8-0x4e20+0x3e8)+0x4e20));await yhxq_gold();}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('60')+_0x5aa4f9[_0x45fc('2d')]);}}}catch(_0x401668){$[_0x45fc('1e')](_0x401668,_0x3aa078);}finally{_0x3d742e();}});});}function yhxq_feed(){return new Promise(_0x4e3778=>{let _0x2b1376=Post_request(_0x45fc('61'),_0x45fc('62'));$[_0x45fc('23')](_0x2b1376,async(_0x3f879a,_0x54aee5,_0x543ac2)=>{try{if(_0x3f879a){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('63'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('63');console[_0x45fc('3')](JSON[_0x45fc('52')](_0x3f879a));}else{let _0x4d25b7=JSON[_0x45fc('26')](_0x543ac2);if(_0x4d25b7[_0x45fc('5')]==0xc8){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('64')+_0x4d25b7[_0x45fc('2d')]);await $[_0x45fc('45')](Math[_0x45fc('46')](Math[_0x45fc('47')]()*(0x7d00-0x6d60+0x3e8)+0x6d60));await yhxq_feed_state();}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('64')+_0x4d25b7[_0x45fc('2d')]);}}}catch(_0x41711d){$[_0x45fc('1e')](_0x41711d,_0x54aee5);}finally{_0x4e3778();}});});}function yhxq_account(_0x360c6f){let _0xa0c6eb=Get_request(_0x45fc('65'));return new Promise(_0x48dd66=>{$[_0x45fc('2f')](_0xa0c6eb,async(_0x2e2006,_0x4b8bdd,_0x3c8e93)=>{try{if(_0x2e2006){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('5b'));subTitle+=_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('5b');console[_0x45fc('3')](_0x2e2006);}else{let _0x155df8=JSON[_0x45fc('26')](_0x3c8e93);if(_0x155df8[_0x45fc('5')]==0xc8){let _0xa1ed69=_0x155df8[_0x45fc('28')][_0x45fc('66')];let _0x3c7ab8=_0x155df8[_0x45fc('28')][_0x45fc('67')];let _0xc46cac=_0x155df8[_0x45fc('28')][_0x45fc('68')];if(_0x360c6f==0x0){console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('69')+_0xa1ed69+_0x45fc('6a')+_0xc46cac+_0x45fc('6b')+_0x3c7ab8);}}else{console[_0x45fc('3')](_0x45fc('24')+$[_0x45fc('17')]+_0x45fc('6c')+_0x155df8[_0x45fc('2d')]);}}}catch(_0x58200b){$[_0x45fc('1e')](_0x58200b,_0x4b8bdd);}finally{_0x48dd66();}});});}function Get_request(_0x3c81d5){let _0x27abc9=new Date()[_0x45fc('8')]();return{'\x75\x72\x6c':_0x45fc('6d')+_0x3c81d5,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':_0x45fc('6e'),'YhxqSecurity':''+crypto[_0x45fc('6f')](token+_0x27abc9)[_0x45fc('70')](),'User-Agent':UA,'Authorization':token,'Host':_0x45fc('71'),'Connection':_0x45fc('72'),'Accept-Encoding':_0x45fc('73'),'Cache-Control':_0x45fc('74')}};}function Post_request(_0x41765c,_0x51c4a6){let _0x5698c2=new Date()[_0x45fc('8')]();return{'\x75\x72\x6c':_0x45fc('6d')+_0x41765c,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':_0x45fc('6e'),'YhxqSecurity':''+crypto[_0x45fc('6f')](token+_0x5698c2)[_0x45fc('70')](),'User-Agent':UA,'Authorization':token,'Host':_0x45fc('71'),'Connection':_0x45fc('72'),'Accept-Encoding':_0x45fc('73'),'Cache-Control':_0x45fc('74'),'Content-Length':_0x51c4a6[_0x45fc('f')]},'\x62\x6f\x64\x79':_0x51c4a6};};_0xod6='jsjiami.com.v6';




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