/*

脚本名称:电玩世界扫码登录脚本

执行脚本,看日志复制链接浏览器打开,然后微信扫码,只能扫码,不能微信识图

cron 随便填,禁用,手动执行

*/


const $ = new Env('电玩世界扫码登录');


var _0xodn='jsjiami.com.v6',_0xodn_=['_0xodn'],_0x15a2=[_0xodn,'\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x69\x73\x4e\x6f\x64\x65','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u5f00\u59cb\u626b\u7801\u4efb\u52a1\u3011','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x6f\x70\x65\x6e\x2e\x77\x65\x69\x78\x69\x6e\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x63\x6f\x6e\x6e\x65\x63\x74\x2f\x61\x70\x70\x2f\x71\x72\x63\x6f\x6e\x6e\x65\x63\x74\x3f\x61\x70\x70\x69\x64\x3d\x77\x78\x31\x39\x39\x66\x34\x65\x64\x39\x62\x66\x33\x34\x33\x34\x61\x32\x26\x62\x75\x6e\x64\x6c\x65\x69\x64\x3d\x28\x6e\x75\x6c\x6c\x29\x26\x73\x63\x6f\x70\x65\x3d\x73\x6e\x73\x61\x70\x69\x5f\x75\x73\x65\x72\x69\x6e\x66\x6f\x26\x73\x74\x61\x74\x65\x3d\x77\x26\x66\x72\x6f\x6d\x3d\x6d\x65\x73\x73\x61\x67\x65\x26\x69\x73\x61\x70\x70\x69\x6e\x73\x74\x61\x6c\x6c\x65\x64\x3d\x30','\x6f\x70\x65\x6e\x2e\x77\x65\x69\x78\x69\x6e\x2e\x71\x71\x2e\x63\x6f\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x38\x5f\x30\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x30\x2e\x31\x2e\x34\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x74\x6f\x6b\x65\x6e\x2f\x31\x32\x41\x33\x36\x35\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x35\x2e\x34\x2e\x31\x20\x4e\x65\x74\x54\x79\x70\x65\x2f\x57\x49\x46\x49\x20\x57\x65\x62\x56\x69\x65\x77\x2f\x64\x6f\x63','\x67\x7a\x69\x70','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u83b7\u53d6\u4e8c\u7ef4\u7801\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x72\x65\x70\x6c\x61\x63\x65','\x69\x6e\x64\x65\x78\x4f\x66','\x75\x75\x69\x64','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x75\x75\x69\x64\x3a\x22','\x22\x2c\x61\x70\x70\x69\x64','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u4e8c\u7ef4\u7801\u94fe\u63a5\u3011\x3a\x20\x0a\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x70\x65\x6e\x2e\x77\x65\x69\x78\x69\x6e\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x63\x6f\x6e\x6e\x65\x63\x74\x2f\x71\x72\x63\x6f\x64\x65\x2f','\x0a\x0a\u8bf7\u590d\u5236\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u7136\u540e\u626b\u7801\u5373\u53ef','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u83b7\u53d6\u4e8c\u7ef4\u7801\u3011\x3a\x20\u65e0\u6cd5\u627e\u5230\u6570\u636e\x2c\u53ef\u80fd\u63a5\u53e3\u5931\u6548\u4e86','\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x6e\x67\x2e\x6f\x70\x65\x6e\x2e\x77\x65\x69\x78\x69\x6e\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x63\x6f\x6e\x6e\x65\x63\x74\x2f\x6c\x2f\x71\x72\x63\x6f\x6e\x6e\x65\x63\x74\x3f\x75\x75\x69\x64\x3d','\x26\x5f\x3d','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u83b7\u53d6\x63\x6f\x64\x65\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x77\x78\x5f\x65\x72\x72\x63\x6f\x64\x65\x3d','\x77\x78\x5f\x65\x72\x72\x63\x6f\x64\x65\x3d\x34\x30\x34','\x77\x61\x69\x74','\x77\x78\x5f\x65\x72\x72\x63\x6f\x64\x65\x3d\x34\x30\x35','\x77\x78\x5f\x63\x6f\x64\x65\x3d\x27','\x6c\x65\x6e\x67\x74\x68','\x77\x78\x5f\x65\x72\x72\x63\x6f\x64\x65\x3d\x34\x30\x38','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u83b7\u53d6\x63\x6f\x64\x65\u3011\x3a\x20\u65e0\u6cd5\u83b7\u53d6\u5230\u626b\u7801\u6570\u636e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f\x77\x78\x6c\x6f\x67\x69\x6e\x3f\x61\x70\x70\x69\x64\x3d\x77\x78\x31\x39\x39\x66\x34\x65\x64\x39\x62\x66\x33\x34\x33\x34\x61\x32\x26\x63\x6f\x64\x65\x3d','\x26\x63\x68\x61\x6e\x6e\x65\x6c\x3d\x31\x35\x35\x30\x32\x26\x6c\x6f\x67\x69\x6e\x54\x79\x70\x65\x3d\x30','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x38\x2e\x31','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u5fae\u4fe1\u767b\u5f55\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x72\x65\x73\x75\x6c\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u5fae\u4fe1\u767b\u5f55\u3011\x3a\x20\u767b\u5f55\u6210\u529f\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x6e\x69\x63\x6b','\x0a\x2d\x2d\x2d\u7528\u6237\x49\x44\uff1a','\x0a\x2d\x2d\x2d\u7528\u6237\x74\x6f\x6b\x65\x6e\uff1a','\x74\x6f\x6b\x65\x6e','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u7535\u73a9\u4e16\u754c\u5fae\u4fe1\u767b\u5f55\u3011\x3a\x20\u65e0\u6cd5\u83b7\u53d6\u5230\u626b\u7801\u6570\u636e','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6c\x6a\x4f\x62\x73\x6e\x6a\x69\x61\x74\x6d\x7a\x69\x2e\x63\x4e\x6f\x6d\x2e\x76\x36\x55\x53\x51\x77\x71\x3d\x3d'];function _0x371e(_0x5d128e,_0x530599){_0x5d128e=~~'0x'['concat'](_0x5d128e['slice'](0x0));var _0x15cca6=_0x15a2[_0x5d128e];return _0x15cca6;};(function(_0x3cd57b,_0x369bc5){var _0x52b0c4=0x0;for(_0x369bc5=_0x3cd57b['shift'](_0x52b0c4>>0x2);_0x369bc5&&_0x369bc5!==(_0x3cd57b['pop'](_0x52b0c4>>0x3)+'')['replace'](/[lObntzNUSQwq=]/g,'');_0x52b0c4++){_0x52b0c4=_0x52b0c4^0xd428d;}}(_0x15a2,_0x371e));console[_0x371e('0')](_0x371e('1'));!(async()=>{if($[_0x371e('2')]()){console[_0x371e('0')](_0x371e('3')+new Date(new Date()[_0x371e('4')]()+new Date()[_0x371e('5')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x371e('6')]()+_0x371e('7'));console[_0x371e('0')](_0x371e('8'));await get_QR();}})()[_0x371e('9')](_0x158823=>$[_0x371e('a')](_0x158823))[_0x371e('b')](()=>$[_0x371e('c')]());function get_QR(){let _0xfe2482={'url':_0x371e('d'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x371e('e'),'user-agent':_0x371e('f'),'accept-encoding':_0x371e('10')}};return new Promise((_0x102f0c,_0x324510)=>{$[_0x371e('11')](_0xfe2482,async(_0x4eea04,_0x28cfbb,_0x2892cd)=>{try{if(_0x4eea04){console[_0x371e('0')](_0x371e('12'));console[_0x371e('0')](_0x4eea04);}else{_0x2892cd=_0x2892cd[_0x371e('13')](/[ ]|[\r\n]/g,'');if(_0x2892cd[_0x371e('14')](_0x371e('15'))>-0x1){uuid=_0x2892cd[_0x371e('16')](_0x2892cd[_0x371e('14')](_0x371e('17'))+0x6,_0x2892cd[_0x371e('14')](_0x371e('18')));console[_0x371e('0')](_0x371e('19')+uuid+_0x371e('1a'));await code_data();}else{console[_0x371e('0')](_0x371e('1b'));}}}catch(_0x52f399){console[_0x371e('0')](_0x52f399,_0x28cfbb);}finally{_0x102f0c();}});});}function code_data(){let _0x1d9308=new Date()[_0x371e('4')]();let _0x5506f8={'\x75\x72\x6c':_0x371e('1c')+uuid+_0x371e('1d')+_0x1d9308,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x371e('e'),'user-agent':_0x371e('f'),'accept-encoding':_0x371e('10')}};return new Promise((_0x347dbf,_0x21be2f)=>{$[_0x371e('11')](_0x5506f8,async(_0x298d1a,_0x326235,_0x4dfc73)=>{try{if(_0x298d1a){console[_0x371e('0')](_0x371e('1e'));console[_0x371e('0')](_0x298d1a);}else{if(_0x4dfc73[_0x371e('14')](_0x371e('1f'))>-0x1){if(_0x4dfc73[_0x371e('14')](_0x371e('20'))>-0x1){await $[_0x371e('21')](0xbb8);await code_data(uuid);}else if(_0x4dfc73[_0x371e('14')](_0x371e('22'))>-0x1){code=_0x4dfc73[_0x371e('16')](_0x4dfc73[_0x371e('14')](_0x371e('23'))+0x9,_0x4dfc73[_0x371e('24')])[_0x371e('16')](0x0,0x20);await wxlogin();}else if(_0x4dfc73[_0x371e('14')](_0x371e('25'))>-0x1){await $[_0x371e('21')](0xbb8);await code_data(uuid);}else{console[_0x371e('0')](_0x371e('26'));}}else{console[_0x371e('0')](_0x371e('26'));}}}catch(_0x4c0464){console[_0x371e('0')](_0x4c0464,_0x326235);}finally{_0x347dbf();}});});}function wxlogin(){let _0x5e4ee8={'\x75\x72\x6c':_0x371e('27')+code+_0x371e('28'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x371e('29'),'accept-encoding':_0x371e('10'),'user-agent':_0x371e('2a')}};return new Promise((_0x4949ba,_0x2bca6a)=>{$[_0x371e('11')](_0x5e4ee8,async(_0x4971f7,_0x532857,_0x1a804d)=>{try{if(_0x4971f7){console[_0x371e('0')](_0x371e('2b'));console[_0x371e('0')](_0x4971f7);}else{let _0x467cf0=JSON[_0x371e('2c')](_0x1a804d);if(_0x467cf0[_0x371e('2d')]==0x1){console[_0x371e('0')](_0x371e('2e')+_0x467cf0[_0x371e('2f')]+_0x371e('30')+_0x467cf0['\x69\x64']+_0x371e('31')+_0x467cf0[_0x371e('32')]);}else{console[_0x371e('0')](_0x371e('33'));}}}catch(_0x377d35){console[_0x371e('0')](_0x377d35,_0x532857);}finally{_0x4949ba();}});});}function getCurrentTime(){let _0x54ade8=new Date();let _0x3ee710=_0x54ade8[_0x371e('34')]();let _0x49ec9e=_0x54ade8[_0x371e('35')]()+0x1;let _0x53f824=_0x54ade8[_0x371e('36')]();let _0x29e2af=_0x54ade8[_0x371e('37')]();let _0x359790=_0x371e('38')+_0x371e('39')[_0x371e('3a')](_0x54ade8[_0x371e('37')]());let _0x6f784a=_0x54ade8[_0x371e('3b')]();let _0x9a6803=_0x54ade8[_0x371e('3c')]();let _0x592d9f=_0x54ade8[_0x371e('3d')]();let _0x33cfde=_0x54ade8[_0x371e('3e')]();if(_0x49ec9e<0xa){_0x49ec9e='\x30'+_0x49ec9e;}if(_0x53f824<0xa){_0x53f824='\x30'+_0x53f824;}if(_0x6f784a<0xa){_0x6f784a='\x30'+_0x6f784a;}if(_0x9a6803<0xa){_0x9a6803='\x30'+_0x9a6803;}if(_0x592d9f<0xa){_0x592d9f='\x30'+_0x592d9f;}if(_0x33cfde<0xa){_0x33cfde='\x30\x30'+_0x33cfde;}else if(_0x33cfde<0x64){_0x33cfde='\x30'+_0x33cfde;}return _0x3ee710+'\x2d'+_0x49ec9e+'\x2d'+_0x53f824+'\x20'+_0x6f784a+'\x3a'+_0x9a6803+'\x3a'+_0x592d9f;}function MD5_Encrypt(_0x293ab1){function _0x41005a(_0x293ab1,_0x41005a){return _0x293ab1<<_0x41005a|_0x293ab1>>>0x20-_0x41005a;}function _0x2bf4af(_0x293ab1,_0x41005a){var _0x2bf4af,_0x2bf604,_0x398eba,_0xa9eb25,_0x47673b;return _0x398eba=0x80000000&_0x293ab1,_0xa9eb25=0x80000000&_0x41005a,_0x2bf4af=0x40000000&_0x293ab1,_0x2bf604=0x40000000&_0x41005a,_0x47673b=(0x3fffffff&_0x293ab1)+(0x3fffffff&_0x41005a),_0x2bf4af&_0x2bf604?0x80000000^_0x47673b^_0x398eba^_0xa9eb25:_0x2bf4af|_0x2bf604?0x40000000&_0x47673b?0xc0000000^_0x47673b^_0x398eba^_0xa9eb25:0x40000000^_0x47673b^_0x398eba^_0xa9eb25:_0x47673b^_0x398eba^_0xa9eb25;}function _0x27c6b2(_0x293ab1,_0x41005a,_0x2bf4af){return _0x293ab1&_0x41005a|~_0x293ab1&_0x2bf4af;}function _0x3ea84c(_0x293ab1,_0x41005a,_0x2bf4af){return _0x293ab1&_0x2bf4af|_0x41005a&~_0x2bf4af;}function _0x4e0dd7(_0x293ab1,_0x41005a,_0x2bf4af){return _0x293ab1^_0x41005a^_0x2bf4af;}function _0x5f0428(_0x293ab1,_0x41005a,_0x2bf4af){return _0x41005a^(_0x293ab1|~_0x2bf4af);}function _0x553454(_0x293ab1,_0x3ea84c,_0x4e0dd7,_0x5f0428,_0x553454,_0x4c8301,_0x5c345a){return _0x293ab1=_0x2bf4af(_0x293ab1,_0x2bf4af(_0x2bf4af(_0x27c6b2(_0x3ea84c,_0x4e0dd7,_0x5f0428),_0x553454),_0x5c345a)),_0x2bf4af(_0x41005a(_0x293ab1,_0x4c8301),_0x3ea84c);}function _0x3d9196(_0x293ab1,_0x27c6b2,_0x4e0dd7,_0x5f0428,_0x553454,_0x3d9196,_0x555dd4){return _0x293ab1=_0x2bf4af(_0x293ab1,_0x2bf4af(_0x2bf4af(_0x3ea84c(_0x27c6b2,_0x4e0dd7,_0x5f0428),_0x553454),_0x555dd4)),_0x2bf4af(_0x41005a(_0x293ab1,_0x3d9196),_0x27c6b2);}function _0x1dd6ac(_0x293ab1,_0x27c6b2,_0x3ea84c,_0x5f0428,_0x553454,_0x3d9196,_0x1dd6ac){return _0x293ab1=_0x2bf4af(_0x293ab1,_0x2bf4af(_0x2bf4af(_0x4e0dd7(_0x27c6b2,_0x3ea84c,_0x5f0428),_0x553454),_0x1dd6ac)),_0x2bf4af(_0x41005a(_0x293ab1,_0x3d9196),_0x27c6b2);}function _0x3552ad(_0x293ab1,_0x27c6b2,_0x3ea84c,_0x4e0dd7,_0x553454,_0x3d9196,_0x1dd6ac){return _0x293ab1=_0x2bf4af(_0x293ab1,_0x2bf4af(_0x2bf4af(_0x5f0428(_0x27c6b2,_0x3ea84c,_0x4e0dd7),_0x553454),_0x1dd6ac)),_0x2bf4af(_0x41005a(_0x293ab1,_0x3d9196),_0x27c6b2);}function _0xe1b8c3(_0x293ab1){for(var _0x41005a,_0x2bf4af=_0x293ab1[_0x371e('24')],_0x27c6b2=_0x2bf4af+0x8,_0x3ea84c=(_0x27c6b2-_0x27c6b2%0x40)/0x40,_0x4e0dd7=0x10*(_0x3ea84c+0x1),_0x5f0428=new Array(_0x4e0dd7-0x1),_0x553454=0x0,_0x3d9196=0x0;_0x2bf4af>_0x3d9196;)_0x41005a=(_0x3d9196-_0x3d9196%0x4)/0x4,_0x553454=_0x3d9196%0x4*0x8,_0x5f0428[_0x41005a]=_0x5f0428[_0x41005a]|_0x293ab1[_0x371e('3f')](_0x3d9196)<<_0x553454,_0x3d9196++;return _0x41005a=(_0x3d9196-_0x3d9196%0x4)/0x4,_0x553454=_0x3d9196%0x4*0x8,_0x5f0428[_0x41005a]=_0x5f0428[_0x41005a]|0x80<<_0x553454,_0x5f0428[_0x4e0dd7-0x2]=_0x2bf4af<<0x3,_0x5f0428[_0x4e0dd7-0x1]=_0x2bf4af>>>0x1d,_0x5f0428;}function _0x1eded9(_0x293ab1){var _0x41005a,_0x2bf4af,_0x27c6b2='',_0x3ea84c='';for(_0x2bf4af=0x0;0x3>=_0x2bf4af;_0x2bf4af++)_0x41005a=_0x293ab1>>>0x8*_0x2bf4af&0xff,_0x3ea84c='\x30'+_0x41005a[_0x371e('40')](0x10),_0x27c6b2+=_0x3ea84c[_0x371e('41')](_0x3ea84c[_0x371e('24')]-0x2,0x2);return _0x27c6b2;}function _0x2ff5a0(_0x293ab1){_0x293ab1=_0x293ab1[_0x371e('13')](/\r\n/g,'\x0a');for(var _0x41005a='',_0x2bf4af=0x0;_0x2bf4af<_0x293ab1[_0x371e('24')];_0x2bf4af++){var _0x27c6b2=_0x293ab1[_0x371e('3f')](_0x2bf4af);0x80>_0x27c6b2?_0x41005a+=String[_0x371e('42')](_0x27c6b2):_0x27c6b2>0x7f&&0x800>_0x27c6b2?(_0x41005a+=String[_0x371e('42')](_0x27c6b2>>0x6|0xc0),_0x41005a+=String[_0x371e('42')](0x3f&_0x27c6b2|0x80)):(_0x41005a+=String[_0x371e('42')](_0x27c6b2>>0xc|0xe0),_0x41005a+=String[_0x371e('42')](_0x27c6b2>>0x6&0x3f|0x80),_0x41005a+=String[_0x371e('42')](0x3f&_0x27c6b2|0x80));}return _0x41005a;}var _0x4932f4,_0x4d2d23,_0x4f1954,_0x4f043a,_0xfcce90,_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb=[],_0x21b645=0x7,_0x485e82=0xc,_0x52ed56=0x11,_0x4c05ed=0x16,_0x279fbc=0x5,_0x1bb7cf=0x9,_0x242f56=0xe,_0x1c6190=0x14,_0x30ce90=0x4,_0x1c6580=0xb,_0x1fe7c3=0x10,_0x3b42ea=0x17,_0x24ba84=0x6,_0x379c29=0xa,_0x127b39=0xf,_0x38efe2=0x15;for(_0x293ab1=_0x2ff5a0(_0x293ab1),_0x545fdb=_0xe1b8c3(_0x293ab1),_0x556563=0x67452301,_0x4b31db=0xefcdab89,_0x1028a0=0x98badcfe,_0x1a3b70=0x10325476,_0x4932f4=0x0;_0x4932f4<_0x545fdb[_0x371e('24')];_0x4932f4+=0x10)_0x4d2d23=_0x556563,_0x4f1954=_0x4b31db,_0x4f043a=_0x1028a0,_0xfcce90=_0x1a3b70,_0x556563=_0x553454(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x0],_0x21b645,0xd76aa478),_0x1a3b70=_0x553454(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x1],_0x485e82,0xe8c7b756),_0x1028a0=_0x553454(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x2],_0x52ed56,0x242070db),_0x4b31db=_0x553454(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x3],_0x4c05ed,0xc1bdceee),_0x556563=_0x553454(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x4],_0x21b645,0xf57c0faf),_0x1a3b70=_0x553454(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x5],_0x485e82,0x4787c62a),_0x1028a0=_0x553454(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x6],_0x52ed56,0xa8304613),_0x4b31db=_0x553454(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x7],_0x4c05ed,0xfd469501),_0x556563=_0x553454(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x8],_0x21b645,0x698098d8),_0x1a3b70=_0x553454(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x9],_0x485e82,0x8b44f7af),_0x1028a0=_0x553454(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xa],_0x52ed56,0xffff5bb1),_0x4b31db=_0x553454(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0xb],_0x4c05ed,0x895cd7be),_0x556563=_0x553454(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0xc],_0x21b645,0x6b901122),_0x1a3b70=_0x553454(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0xd],_0x485e82,0xfd987193),_0x1028a0=_0x553454(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xe],_0x52ed56,0xa679438e),_0x4b31db=_0x553454(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0xf],_0x4c05ed,0x49b40821),_0x556563=_0x3d9196(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x1],_0x279fbc,0xf61e2562),_0x1a3b70=_0x3d9196(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x6],_0x1bb7cf,0xc040b340),_0x1028a0=_0x3d9196(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xb],_0x242f56,0x265e5a51),_0x4b31db=_0x3d9196(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x0],_0x1c6190,0xe9b6c7aa),_0x556563=_0x3d9196(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x5],_0x279fbc,0xd62f105d),_0x1a3b70=_0x3d9196(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0xa],_0x1bb7cf,0x2441453),_0x1028a0=_0x3d9196(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xf],_0x242f56,0xd8a1e681),_0x4b31db=_0x3d9196(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x4],_0x1c6190,0xe7d3fbc8),_0x556563=_0x3d9196(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x9],_0x279fbc,0x21e1cde6),_0x1a3b70=_0x3d9196(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0xe],_0x1bb7cf,0xc33707d6),_0x1028a0=_0x3d9196(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x3],_0x242f56,0xf4d50d87),_0x4b31db=_0x3d9196(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x8],_0x1c6190,0x455a14ed),_0x556563=_0x3d9196(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0xd],_0x279fbc,0xa9e3e905),_0x1a3b70=_0x3d9196(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x2],_0x1bb7cf,0xfcefa3f8),_0x1028a0=_0x3d9196(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x7],_0x242f56,0x676f02d9),_0x4b31db=_0x3d9196(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0xc],_0x1c6190,0x8d2a4c8a),_0x556563=_0x1dd6ac(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x5],_0x30ce90,0xfffa3942),_0x1a3b70=_0x1dd6ac(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x8],_0x1c6580,0x8771f681),_0x1028a0=_0x1dd6ac(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xb],_0x1fe7c3,0x6d9d6122),_0x4b31db=_0x1dd6ac(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0xe],_0x3b42ea,0xfde5380c),_0x556563=_0x1dd6ac(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x1],_0x30ce90,0xa4beea44),_0x1a3b70=_0x1dd6ac(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x4],_0x1c6580,0x4bdecfa9),_0x1028a0=_0x1dd6ac(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x7],_0x1fe7c3,0xf6bb4b60),_0x4b31db=_0x1dd6ac(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0xa],_0x3b42ea,0xbebfbc70),_0x556563=_0x1dd6ac(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0xd],_0x30ce90,0x289b7ec6),_0x1a3b70=_0x1dd6ac(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x0],_0x1c6580,0xeaa127fa),_0x1028a0=_0x1dd6ac(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x3],_0x1fe7c3,0xd4ef3085),_0x4b31db=_0x1dd6ac(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x6],_0x3b42ea,0x4881d05),_0x556563=_0x1dd6ac(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x9],_0x30ce90,0xd9d4d039),_0x1a3b70=_0x1dd6ac(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0xc],_0x1c6580,0xe6db99e5),_0x1028a0=_0x1dd6ac(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xf],_0x1fe7c3,0x1fa27cf8),_0x4b31db=_0x1dd6ac(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x2],_0x3b42ea,0xc4ac5665),_0x556563=_0x3552ad(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x0],_0x24ba84,0xf4292244),_0x1a3b70=_0x3552ad(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x7],_0x379c29,0x432aff97),_0x1028a0=_0x3552ad(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xe],_0x127b39,0xab9423a7),_0x4b31db=_0x3552ad(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x5],_0x38efe2,0xfc93a039),_0x556563=_0x3552ad(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0xc],_0x24ba84,0x655b59c3),_0x1a3b70=_0x3552ad(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0x3],_0x379c29,0x8f0ccc92),_0x1028a0=_0x3552ad(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0xa],_0x127b39,0xffeff47d),_0x4b31db=_0x3552ad(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x1],_0x38efe2,0x85845dd1),_0x556563=_0x3552ad(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x8],_0x24ba84,0x6fa87e4f),_0x1a3b70=_0x3552ad(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0xf],_0x379c29,0xfe2ce6e0),_0x1028a0=_0x3552ad(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x6],_0x127b39,0xa3014314),_0x4b31db=_0x3552ad(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0xd],_0x38efe2,0x4e0811a1),_0x556563=_0x3552ad(_0x556563,_0x4b31db,_0x1028a0,_0x1a3b70,_0x545fdb[_0x4932f4+0x4],_0x24ba84,0xf7537e82),_0x1a3b70=_0x3552ad(_0x1a3b70,_0x556563,_0x4b31db,_0x1028a0,_0x545fdb[_0x4932f4+0xb],_0x379c29,0xbd3af235),_0x1028a0=_0x3552ad(_0x1028a0,_0x1a3b70,_0x556563,_0x4b31db,_0x545fdb[_0x4932f4+0x2],_0x127b39,0x2ad7d2bb),_0x4b31db=_0x3552ad(_0x4b31db,_0x1028a0,_0x1a3b70,_0x556563,_0x545fdb[_0x4932f4+0x9],_0x38efe2,0xeb86d391),_0x556563=_0x2bf4af(_0x556563,_0x4d2d23),_0x4b31db=_0x2bf4af(_0x4b31db,_0x4f1954),_0x1028a0=_0x2bf4af(_0x1028a0,_0x4f043a),_0x1a3b70=_0x2bf4af(_0x1a3b70,_0xfcce90);var _0x478eaa=_0x1eded9(_0x556563)+_0x1eded9(_0x4b31db)+_0x1eded9(_0x1028a0)+_0x1eded9(_0x1a3b70);return _0x478eaa[_0x371e('43')]();};_0xodn='jsjiami.com.v6';


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