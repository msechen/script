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


var _0xodU='jsjiami.com.v6',_0xodU_=['_0xodU'],_0x277f=[_0xodU,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x79\x68\x78\x71\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x2e\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x79\x68\x78\x71\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x74\x69\x63\x65','\x74\x6f\x6b\x65\x6e','\x57\x69\x74\x68\x64\x72\x61\x77\x61\x6c','\x57\x69\x74\x68\x64\x72\x61\x77\x61\x6c\x5f\x74\x69\x6d\x65','\x46\x65\x65\x64','\x69\x6e\x64\x65\x78','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x2f\x70\x65\x74\x41\x6c\x6c','\x67\x65\x74\x54\x79\x70\x65\x3d\x32\x32\x39\x37\x35\x35\x43\x46\x33\x35\x38\x35\x36\x34\x41\x31\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x41\x33\x42\x41\x42\x45\x42\x30\x34\x38\x38\x32\x42\x38\x38\x42','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\u706b\u6e90\x20','\x64\x61\x74\x61','\x66\x69\x72\x65\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\uff0c\u552e\u5e01\x20','\x70\x65\x74\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20','\x6d\x73\x67','\x64\x79\x6e\x61\x6d\x69\x63\x2f\x67\x65\x74\x2f\x61\x6c\x6c\x4c\x69\x73\x74\x3f\x70\x61\x67\x65\x4e\x75\x6d\x3d\x31\x26\x70\x61\x67\x65\x53\x69\x7a\x65\x3d\x31\x30','\x67\x65\x74','\x20\u52a8\u6001\u5217\u8868\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x72\x6f\x77\x73','\x69\x73\x4c\x69\x6b\x65','\x64\x79\x6e\x61\x6d\x69\x63\x49\x64','\x20\u62d4\u841d\u535c\u72b6\u6001\u3011\x3a\x20','\x64\x79\x6e\x61\x6d\x69\x63\x2f\x4c\x69\x6b\x65\x2f\x69\x6e\x73\x65\x72\x74','\x75\x73\x65\x72\x49\x64\x3d','\x26\x64\x79\x6e\x61\x6d\x69\x63\x49\x64\x3d','\x26\x75\x73\x65\x72\x73\x49\x64\x3d\x31','\x20\u70b9\u8d5e\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u70b9\u8d5e\u3011\x3a\x20','\x73\x69\x67\x6e\x2f\x69\x6e\x64\x65\x78','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x74\x6f\x64\x61\x79\x53\x69\x67\x6e\x49\x6e','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x67\x65\x74\x50\x65\x74\x47\x6f\x6c\x64\x41\x6e\x64\x50\x72\x6f\x70','\x20\u62d4\u841d\u535c\u72b6\u6001\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x70\x72\x6f\x70','\x72\x61\x64\x69\x73\x68\x2f\x62\x75\x79\x48\x6f\x65','\x68\x6f\x65\x43\x6f\x75\x6e\x74\x3d\x31','\x20\u8d2d\u4e70\u9504\u5934\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u8d2d\u4e70\u9504\u5934\u3011\x3a\x20','\x67\x61\x6d\x65\x2f\x67\x65\x74\x48\x6f\x65','\x20\u62d4\u841d\u535c\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u62d4\u841d\u535c\u3011\x3a\x20\u83b7\u5f97\x20','\x73\x74\x72','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u62d4\u841d\u535c\u3011\x3a\x20','\x73\x69\x67\x6e','\x2d\x2d\x2d\u7b7e\u5230\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u7b7e\u5230\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x20\u7b7e\u5230\u3011\x3a\x20','\x72\x65\x70\x6c\x65\x6e\x69\x73\x68\x2f\x65\x6e\x65\x72\x67\x79\x2f\x61\x64\x76','\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35\x26\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35','\x20\u770b\u5e7f\u544a\u8865\u80fd\u91cf\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u5e7f\u544a\u8865\u80fd\u91cf\u3011\x3a\x20','\x6d\x61\x74\x63\x68','\x76\x69\x64\x65\x6f\x2f\x70\x65\x74\x2f\x67\x6f\x6c\x64','\x20\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x70\x65\x74\x47\x6f\x6c\x64','\x20\u517d\u5e01','\x72\x65\x73\x69\x64\x75\x65\x43\x6f\x75\x6e\x74','\x20\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20','\x70\x65\x74\x2f\x66\x65\x65\x64','\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30','\x20\u5582\u517b\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x20\u5582\u517b\u3011\x3a\x20','\x69\x6e\x64\x65\x78\x49\x6e\x66\x6f','\x6e\x69\x6b\x65\x4e\x61\x6d\x65','\x63\x75\x72\x50\x65\x74\x47\x6f\x6c\x64','\x63\x75\x72\x46\x69\x72\x65\x47\x6f\x6c\x64','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u706b\u6e90\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u517d\u5e01\uff1a','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x38','\x4d\x44\x35','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x6a\x55\x79\x54\x45\x4c\x73\x6a\x69\x7a\x4c\x61\x6d\x69\x7a\x74\x2e\x74\x63\x77\x6f\x6d\x44\x52\x6b\x2e\x49\x76\x4f\x36\x3d\x3d'];function _0x2f9f(_0x571f7d,_0x7859ce){_0x571f7d=~~'0x'['concat'](_0x571f7d['slice'](0x0));var _0x5754bb=_0x277f[_0x571f7d];return _0x5754bb;};(function(_0x5a8cc2,_0x20c3f1){var _0x4f131c=0x0;for(_0x20c3f1=_0x5a8cc2['shift'](_0x4f131c>>0x2);_0x20c3f1&&_0x20c3f1!==(_0x5a8cc2['pop'](_0x4f131c>>0x3)+'')['replace'](/[UyTELzLzttwDRkIO=]/g,'');_0x4f131c++){_0x4f131c=_0x4f131c^0xd75b0;}}(_0x277f,_0x2f9f));const crypto=require(_0x2f9f('0'));const yhxq_variable=$[_0x2f9f('1')]()?require(_0x2f9f('2')):'';console[_0x2f9f('3')](_0x2f9f('4'));!(async()=>{if(yhxq_variable[_0x2f9f('5')]!==0xc8){console[_0x2f9f('3')](_0x2f9f('6'));return;}console[_0x2f9f('3')](_0x2f9f('7')+new Date(new Date()[_0x2f9f('8')]()+new Date()[_0x2f9f('9')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2f9f('a')]()+_0x2f9f('b'));console[_0x2f9f('3')](_0x2f9f('c')+yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][_0x2f9f('f')]+_0x2f9f('10'));subTitle='';for(i=0x0;i<yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][_0x2f9f('f')];i++){notice=yhxq_variable[_0x2f9f('d')][_0x2f9f('11')][0x0][_0x2f9f('12')];token=yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][i][_0x2f9f('13')];Withdrawal=yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][i][_0x2f9f('14')];Withdrawal_time=yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][i][_0x2f9f('15')];Feed=yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][i][_0x2f9f('16')];UA=yhxq_variable[_0x2f9f('d')][_0x2f9f('e')][i]['\x55\x41'];$[_0x2f9f('17')]=i+0x1;if(!UA){UA=_0x2f9f('18');}console[_0x2f9f('3')](_0x2f9f('19')+$[_0x2f9f('17')]+_0x2f9f('1a'));await implement();};if(notify){if(notice){if(subTitle){await notify[_0x2f9f('1b')]($[_0x2f9f('1c')],subTitle);}}}})()[_0x2f9f('1d')](_0x57f116=>$[_0x2f9f('1e')](_0x57f116))[_0x2f9f('1f')](()=>$[_0x2f9f('20')]());async function implement(){await yhxq_account(0x1);await yhxq_sign_state();await yhxq_adv();await yhxq_gold();if(Feed){await yhxq_feed();}state=!![];await GoldAndProp();await yhxq_petAll();await yhxq_account(0x0);}function yhxq_petAll(){return new Promise(_0x2d9f19=>{let _0x3a0e79=Post_request(_0x2f9f('21'),_0x2f9f('22'));$[_0x2f9f('23')](_0x3a0e79,async(_0x5d02ae,_0xc0d8ae,_0x230a0c)=>{try{if(_0x5d02ae){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('25'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('25');console[_0x2f9f('3')](_0x5d02ae);}else{let _0x461f93=JSON[_0x2f9f('26')](_0x230a0c);if(_0x461f93[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('27')+_0x461f93[_0x2f9f('28')][_0x2f9f('29')]+_0x2f9f('2a')+_0x461f93[_0x2f9f('28')][_0x2f9f('2b')]);}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('2c')+_0x461f93[_0x2f9f('2d')]);}}}catch(_0x21a2e6){$[_0x2f9f('1e')](_0x21a2e6,_0xc0d8ae);}finally{_0x2d9f19();}});});}function dynamic(){return new Promise(_0x593f2f=>{let _0x36e2bb=Get_request(_0x2f9f('2e'));$[_0x2f9f('2f')](_0x36e2bb,async(_0xd9a58e,_0x46292e,_0x22659f)=>{try{if(_0xd9a58e){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('30'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('30');console[_0x2f9f('3')](_0xd9a58e);}else{let _0x5315d1=JSON[_0x2f9f('26')](_0x22659f);if(_0x5315d1[_0x2f9f('5')]==0xc8){for(let _0x5cf944 of _0x5315d1[_0x2f9f('31')]){if(_0x5cf944[_0x2f9f('32')]==0x0){console[_0x2f9f('3')](_0x5cf944[_0x2f9f('33')]);}}}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('34')+_0x5315d1[_0x2f9f('2d')]);}}}catch(_0x156fa5){$[_0x2f9f('1e')](_0x156fa5,_0x46292e);}finally{_0x593f2f();}});});}function insert(_0x46b3d2,_0x56393a){let _0x152953=Post_request(_0x2f9f('35'),_0x2f9f('36')+_0x56393a+_0x2f9f('37')+_0x46b3d2+_0x2f9f('38'));return new Promise(_0x18d255=>{$[_0x2f9f('23')](_0x152953,async(_0x33db47,_0x510cca,_0x1c8335)=>{try{if(_0x33db47){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('39'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('39');console[_0x2f9f('3')](_0x33db47);}else{let _0x5b5828=JSON[_0x2f9f('26')](_0x1c8335);if(_0x5b5828[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('3a')+_0x5b5828[_0x2f9f('2d')]);}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('3a')+_0x5b5828[_0x2f9f('2d')]);}}}catch(_0x2c2cc8){$[_0x2f9f('1e')](_0x2c2cc8,_0x510cca);}finally{_0x18d255();}});});}function yhxq_sign_state(){let _0x5026e7=Get_request(_0x2f9f('3b'));return new Promise(_0x464149=>{$[_0x2f9f('2f')](_0x5026e7,async(_0x28a0ab,_0x4577d0,_0x12e01d)=>{try{if(_0x28a0ab){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('3c'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('3c');console[_0x2f9f('3')](_0x28a0ab);}else{let _0x1d2607=JSON[_0x2f9f('26')](_0x12e01d);if(_0x1d2607[_0x2f9f('5')]==0xc8){if(_0x1d2607[_0x2f9f('28')][_0x2f9f('3d')]==0x1){await yhxq_sign();}}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('3e')+_0x1d2607[_0x2f9f('2d')]);}}}catch(_0x27f7cd){$[_0x2f9f('1e')](_0x27f7cd,_0x4577d0);}finally{_0x464149();}});});}function GoldAndProp(){return new Promise(_0x2d1af7=>{let _0x2e2d38=Get_request(_0x2f9f('3f'));$[_0x2f9f('2f')](_0x2e2d38,async(_0xbcc5b2,_0x50342d,_0x1d3d46)=>{try{if(_0xbcc5b2){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('40'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('40');console[_0x2f9f('3')](_0xbcc5b2);}else{let _0x3ccf70=JSON[_0x2f9f('26')](_0x1d3d46);if(_0x3ccf70[_0x2f9f('5')]==0xc8){if(_0x3ccf70[_0x2f9f('28')][_0x2f9f('41')]==0x0){await buyHoe();}}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('34')+_0x3ccf70[_0x2f9f('2d')]);}}}catch(_0x3329e4){$[_0x2f9f('1e')](_0x3329e4,_0x50342d);}finally{_0x2d1af7();}});});}function buyHoe(){return new Promise(_0x2dfb6a=>{let _0xfe9c71=Post_request(_0x2f9f('42'),_0x2f9f('43'));$[_0x2f9f('23')](_0xfe9c71,async(_0x156347,_0x46f22b,_0xbc3f90)=>{try{if(_0x156347){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('44'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('44');console[_0x2f9f('3')](_0x156347);}else{let _0xe2ff12=JSON[_0x2f9f('26')](_0xbc3f90);if(_0xe2ff12[_0x2f9f('5')]==0xc8){await getHoe();}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('45')+_0xe2ff12[_0x2f9f('2d')]);}}}catch(_0x1d296f){$[_0x2f9f('1e')](_0x1d296f,_0x46f22b);}finally{_0x2dfb6a();}});});}function getHoe(){return new Promise(_0x376e4c=>{let _0x29b029=Post_request(_0x2f9f('46'),_0x2f9f('43'));$[_0x2f9f('23')](_0x29b029,async(_0x3b9908,_0x8c2ed,_0x1dce90)=>{try{if(_0x3b9908){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('47'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('47');console[_0x2f9f('3')](_0x3b9908);}else{let _0x4c1273=JSON[_0x2f9f('26')](_0x1dce90);if(_0x4c1273[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('48')+_0x4c1273[_0x2f9f('28')][0x0][_0x2f9f('49')]);await $[_0x2f9f('4a')](Math[_0x2f9f('4b')](Math[_0x2f9f('4c')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await GoldAndProp();}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('4d')+_0x4c1273[_0x2f9f('2d')]);}}}catch(_0x134976){$[_0x2f9f('1e')](_0x134976,_0x8c2ed);}finally{_0x376e4c();}});});}function yhxq_sign(){return new Promise(_0x2ecd5b=>{let _0x4dda82=Get_request(_0x2f9f('4e'));$[_0x2f9f('2f')](_0x4dda82,async(_0x2054a0,_0x25fec0,_0xf54339)=>{try{if(_0x2054a0){console[_0x2f9f('3')]('\x0a\u3010'+$[_0x2f9f('1c')]+_0x2f9f('4f'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('50');console[_0x2f9f('3')](JSON[_0x2f9f('51')](_0x2054a0));}else{let _0x10bc55=JSON[_0x2f9f('26')](_0xf54339);if(_0x10bc55[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('52')+_0x10bc55[_0x2f9f('2d')]);}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('52')+_0x10bc55[_0x2f9f('2d')]);}}}catch(_0x36c899){$[_0x2f9f('1e')](_0x36c899,_0x25fec0);}finally{_0x2ecd5b();}});});}function yhxq_adv(){return new Promise(_0x287b71=>{let _0x23b0a0=Post_request(_0x2f9f('53'),_0x2f9f('54'));$[_0x2f9f('23')](_0x23b0a0,async(_0x4e0376,_0x28eff3,_0x3f080e)=>{try{if(_0x4e0376){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('55'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('55');console[_0x2f9f('3')](JSON[_0x2f9f('51')](_0x4e0376));}else{let _0x28d6c2=JSON[_0x2f9f('26')](_0x3f080e);if(_0x28d6c2[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('56')+_0x28d6c2[_0x2f9f('2d')]);if(_0x28d6c2[_0x2f9f('2d')][_0x2f9f('57')](/当日剩余补充次数(\S*)次\(广告\)/)[0x1]>0x0){await $[_0x2f9f('4a')](Math[_0x2f9f('4b')](Math[_0x2f9f('4c')]()*(0x61a8-0x4e20+0x3e8)+0x4e20));await yhxq_adv();}else{await yhxq_petAll();}}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('56')+_0x28d6c2[_0x2f9f('2d')]);}}}catch(_0x2b757a){$[_0x2f9f('1e')](_0x2b757a,_0x28eff3);}finally{_0x287b71();}});});}function yhxq_gold(){return new Promise(_0x2b042f=>{let _0x67fd0=Get_request(_0x2f9f('58'));$[_0x2f9f('2f')](_0x67fd0,async(_0x121ac9,_0x2e0237,_0xbfcd5e)=>{try{if(_0x121ac9){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('59'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('5a');console[_0x2f9f('3')](_0x121ac9);}else{let _0x3f928d=JSON[_0x2f9f('26')](_0xbfcd5e);if(_0x3f928d[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('5b')+_0x3f928d[_0x2f9f('28')][_0x2f9f('5c')]+_0x2f9f('5d'));let _0x2e7cc7=_0x3f928d[_0x2f9f('28')][_0x2f9f('5e')];if(_0x2e7cc7>0x0){await $[_0x2f9f('4a')](Math[_0x2f9f('4b')](Math[_0x2f9f('4c')]()*(0x61a8-0x4e20+0x3e8)+0x4e20));await yhxq_gold();}}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('5f')+_0x3f928d[_0x2f9f('2d')]);}}}catch(_0x39f67e){$[_0x2f9f('1e')](_0x39f67e,_0x2e0237);}finally{_0x2b042f();}});});}function yhxq_feed(){return new Promise(_0x1d429f=>{let _0x4429be=Post_request(_0x2f9f('60'),_0x2f9f('61'));$[_0x2f9f('23')](_0x4429be,async(_0x28f7a1,_0x111068,_0x478382)=>{try{if(_0x28f7a1){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('62'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('62');console[_0x2f9f('3')](JSON[_0x2f9f('51')](_0x28f7a1));}else{let _0x2a13c1=JSON[_0x2f9f('26')](_0x478382);if(_0x2a13c1[_0x2f9f('5')]==0xc8){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('63')+_0x2a13c1[_0x2f9f('2d')]);}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('63')+_0x2a13c1[_0x2f9f('2d')]);}}}catch(_0x387e2c){$[_0x2f9f('1e')](_0x387e2c,_0x111068);}finally{_0x1d429f();}});});}function yhxq_account(_0x15da87){let _0x51948c=Get_request(_0x2f9f('64'));return new Promise(_0xe11c4e=>{$[_0x2f9f('2f')](_0x51948c,async(_0xa1e666,_0xb6941f,_0xc7452c)=>{try{if(_0xa1e666){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('5a'));subTitle+=_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('5a');console[_0x2f9f('3')](_0xa1e666);}else{let _0x1257c9=JSON[_0x2f9f('26')](_0xc7452c);if(_0x1257c9[_0x2f9f('5')]==0xc8){let _0x27d348=_0x1257c9[_0x2f9f('28')][_0x2f9f('65')];let _0x11d189=_0x1257c9[_0x2f9f('28')][_0x2f9f('66')];let _0x2f607e=_0x1257c9[_0x2f9f('28')][_0x2f9f('67')];if(_0x15da87==0x0){console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('68')+_0x27d348+_0x2f9f('69')+_0x2f607e+_0x2f9f('6a')+_0x11d189);}}else{console[_0x2f9f('3')](_0x2f9f('24')+$[_0x2f9f('17')]+_0x2f9f('6b')+_0x1257c9[_0x2f9f('2d')]);}}}catch(_0x40fcb4){$[_0x2f9f('1e')](_0x40fcb4,_0xb6941f);}finally{_0xe11c4e();}});});}function Get_request(_0x44b8ee){let _0x5585e4=new Date()[_0x2f9f('8')]();return{'\x75\x72\x6c':_0x2f9f('6c')+_0x44b8ee,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':_0x2f9f('6d'),'YhxqSecurity':''+crypto[_0x2f9f('6e')](token+_0x5585e4)[_0x2f9f('6f')](),'User-Agent':UA,'Authorization':token,'Host':_0x2f9f('70'),'Connection':_0x2f9f('71'),'Accept-Encoding':_0x2f9f('72'),'Cache-Control':_0x2f9f('73')}};}function Post_request(_0x5d0b6f,_0x41830c){let _0x4aa83e=new Date()[_0x2f9f('8')]();return{'\x75\x72\x6c':_0x2f9f('6c')+_0x5d0b6f,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':_0x2f9f('6d'),'YhxqSecurity':''+crypto[_0x2f9f('6e')](token+_0x4aa83e)[_0x2f9f('6f')](),'User-Agent':UA,'Authorization':token,'Host':_0x2f9f('70'),'Connection':_0x2f9f('71'),'Accept-Encoding':_0x2f9f('72'),'Cache-Control':_0x2f9f('73'),'Content-Length':_0x41830c[_0x2f9f('f')]},'\x62\x6f\x64\x79':_0x41830c};};_0xodU='jsjiami.com.v6';



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