/*

安卓软件名称:鑫生活

项目注册地址:http://app.qdjuyuanxin.com/?num=642609

一天50积分,300积分=3元才可提现,
好像时需要实名,忘记了
一个ip只能挂3个号,否则封号

跑一次只完成一次广告

必要变量:

变量名 soy_xsh_data
变量值 xxx&xxx
注释:手机号&UA(抓包请求头的User-Agent,选填)

多个号用 # 或 @ 或 换行 隔开

cron "25 6-13 * * *"

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_xsh.js

*/

const $ = new Env('鑫生活');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _js='jsjiami.com.v6',_js_=['_js'],a=[_js,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x78\x73\x68\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x78\x73\x68\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x37\x2e\x31\x2e\x32\x3b\x20\x56\x4f\x47\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x4e\x32\x47\x34\x38\x48\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x36\x38\x2e\x30\x2e\x33\x34\x34\x30\x2e\x37\x30\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x78\x68\x2e\x71\x64\x6a\x75\x79\x75\x61\x6e\x78\x69\x6e\x2e\x63\x6f\x6d\x2f\x69\x6e\x64\x65\x78\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x75\x73\x65\x72\x2f\x6d\x79\x5f\x70\x6f\x69\x6e\x74\x73','\x2f\x69\x6e\x64\x65\x78\x2f\x75\x73\x65\x72\x2f\x6d\x79\x5f\x70\x6f\x69\x6e\x74\x73\x3a','\x63\x65\x30\x33\x37\x36\x37\x37\x31\x35\x30\x38\x37\x36\x34\x30','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20\u5df2\u89c2\u770b\u5e7f\u544a\u6b21\u6570\x20','\x64\x61\x74\x61','\x66\x72\x65\x71\x75\x65\x6e\x63\x79\x5f\x63\x6f\x75\x6e\x74','\x20\u5e7f\u770b\u5e7f\u544a\u3011\x3a\x20\u4eca\u65e5\u5df2\u5b8c\u6210','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x75\x73\x65\x72\x2f\x67\x65\x74\x5f\x69\x6e\x74\x65\x67\x72\x61\x6c','\x2f\x69\x6e\x64\x65\x78\x2f\x75\x73\x65\x72\x2f\x67\x65\x74\x5f\x69\x6e\x74\x65\x67\x72\x61\x6c\x3a','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x73\x78\x68\x2e\x71\x64\x6a\x75\x79\x75\x61\x6e\x78\x69\x6e\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x71\x6a\x73\x46\x6a\x43\x69\x61\x6d\x41\x68\x41\x69\x2e\x63\x72\x5a\x68\x6f\x6d\x64\x2e\x76\x36\x70\x65\x55\x4d\x4e\x4b\x3d\x3d'];function b(c,d){c=~~'0x'['concat'](c['slice'](0x0));var e=a[c];return e;};(function(f,g){var h=0x0;for(g=f['shift'](h>>0x2);g&&g!==(f['pop'](h>>0x3)+'')['replace'](/[qFCAhArZhdpeUMNK=]/g,'');h++){h=h^0xc9253;}}(a,b));const AES_DE=require(b('0'));console[b('1')](b('2'));let app_soy_xsh_data=[],soy_xsh_UA='';!(async()=>{if(typeof $request!==b('3')){await get_appdata();}if($[b('4')]()){if(!process[b('5')][b('6')]){console[b('1')](b('7'));return;}if(process[b('5')][b('6')]&&process[b('5')][b('6')][b('8')]('\x0a')>-0x1){app_soy_xsh_data=process[b('5')][b('6')][b('9')]('\x0a');}else if(process[b('5')][b('6')]&&process[b('5')][b('6')][b('8')]('\x23')>-0x1){app_soy_xsh_data=process[b('5')][b('6')][b('9')]('\x23');}else if(process[b('5')][b('6')]&&process[b('5')][b('6')][b('8')]('\x40')>-0x1){app_soy_xsh_data=process[b('5')][b('6')][b('9')]('\x40');}else{app_soy_xsh_data=process[b('5')][b('6')][b('9')]();};}else{if(!$[b('a')](b('6'))){console[b('1')](b('7'));return;}if($[b('a')](b('6'))&&$[b('a')](b('6'))[b('8')]('\x0a')>-0x1){app_soy_xsh_data=$[b('a')](b('6'))[b('9')]('\x0a');}else if($[b('a')](b('6'))&&$[b('a')](b('6'))[b('8')]('\x40')>-0x1){app_soy_xsh_data=$[b('a')](b('6'))[b('9')]('\x40');}else if($[b('a')](b('6'))&&$[b('a')](b('6'))[b('8')]('\x23')>-0x1){app_soy_xsh_data=$[b('a')](b('6'))[b('9')]('\x23');}else{app_soy_xsh_data=$[b('a')](b('6'))[b('9')]();};}console[b('1')](b('b')+new Date(new Date()[b('c')]()+new Date()[b('d')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[b('e')]()+b('f'));console[b('1')](b('10')+app_soy_xsh_data[b('11')]+b('12'));subTitle='';for(i=0x0;i<app_soy_xsh_data[b('11')];i++){soy_xsh_data=app_soy_xsh_data[i][b('9')]('\x26');soy_xsh_phone=soy_xsh_data[0x0];soy_xsh_UA=soy_xsh_data[0x1];if(!soy_xsh_UA){soy_xsh_UA=b('13');}$[b('14')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[b('15')]($[b('16')],subTitle);}}})()[b('17')](c=>$[b('18')](c))[b('19')](()=>$[b('1a')]());async function implement(){host=b('1b');console[b('1')](b('1c')+$[b('14')]+b('1d'));await soy_xsh_get_integral();}function soy_xsh_my_points(){let d=new Date()[b('c')]();let e=Post_request(b('1e'),'\x7b\x7d',AES_Encrypt(b('1f')+d,b('20')));return new Promise((f,g)=>{$[b('21')](e,async(h,i,j)=>{try{if(h){console[b('1')](b('22')+$[b('14')]+b('23'));subTitle+=b('22')+$[b('14')]+b('23');}else{let k=JSON[b('24')](j);if(k[b('25')]==0x1){console[b('1')](b('22')+$[b('14')]+b('26')+k[b('27')][b('28')]+'\x20\u6b21');await soy_xsh_get_integral();if(k[b('27')][b('28')]<0x8){await soy_xsh_get_integral();}else{console[b('1')](b('22')+$[b('14')]+b('29'));}}else{console[b('1')](b('22')+$[b('14')]+b('2a')+k[b('2b')]);}}}catch(l){console[b('1')](l,i);}finally{f();}});});}function soy_xsh_get_integral(){let m=new Date()[b('c')]();let n=Post_request(b('2c'),'\x7b\x7d',AES_Encrypt(b('2d')+m,b('20')));return new Promise((o,p)=>{$[b('21')](n,async(q,r,s)=>{try{if(q){console[b('1')](b('22')+$[b('14')]+b('2e'));subTitle+=b('22')+$[b('14')]+b('2e');}else{let t=JSON[b('24')](s);if(t[b('25')]==0x1){console[b('1')](b('22')+$[b('14')]+b('2f')+t[b('2b')]);if(s[b('8')]('\u606d\u559c')>-0x1){subTitle+=b('22')+$[b('14')]+b('2f')+t[b('2b')];}}else{console[b('1')](b('22')+$[b('14')]+b('2f')+t[b('2b')]);}}}catch(u){console[b('1')](u,r);}finally{o();}});});}function Post_request(v,w,x){return{'\x75\x72\x6c':''+host+v,'\x68\x65\x61\x64\x65\x72\x73':{'authtoken':soy_xsh_phone+'\x3a'+x,'User-Agent':soy_xsh_UA,'Content-Type':b('30'),'Host':b('31'),'Connection':b('32'),'Accept-Encoding':b('33')},'\x62\x6f\x64\x79':w};};function AES_Encrypt(y,z){let A=AES_DE[b('34')][b('35')](AES_DE[b('36')][b('37')][b('24')](y),AES_DE[b('36')][b('37')][b('24')](z),{'\x6d\x6f\x64\x65':AES_DE[b('38')][b('39')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[b('3a')][b('3b')]});return A[b('3c')]();}function MD5_Encrypt(B){function C(B,C){return B<<C|B>>>0x20-C;}function F(B,C){var F,J,K,L,M;return K=0x80000000&B,L=0x80000000&C,F=0x40000000&B,J=0x40000000&C,M=(0x3fffffff&B)+(0x3fffffff&C),F&J?0x80000000^M^K^L:F|J?0x40000000&M?0xc0000000^M^K^L:0x40000000^M^K^L:M^K^L;}function N(B,C,F){return B&C|~B&F;}function R(B,C,F){return B&F|C&~F;}function V(B,C,F){return B^C^F;}function Z(B,C,F){return C^(B|~F);}function a3(B,R,V,Z,a3,a9,aa){return B=F(B,F(F(N(R,V,Z),a3),aa)),F(C(B,a9),R);}function ab(B,N,V,Z,a3,ab,ai){return B=F(B,F(F(R(N,V,Z),a3),ai)),F(C(B,ab),N);}function aj(B,N,R,Z,a3,ab,aj){return B=F(B,F(F(V(N,R,Z),a3),aj)),F(C(B,ab),N);}function ar(B,N,R,V,a3,ab,aj){return B=F(B,F(F(Z(N,R,V),a3),aj)),F(C(B,ab),N);}function az(B){for(var C,F=B[b('11')],N=F+0x8,R=(N-N%0x40)/0x40,V=0x10*(R+0x1),Z=new Array(V-0x1),a3=0x0,ab=0x0;F>ab;)C=(ab-ab%0x4)/0x4,a3=ab%0x4*0x8,Z[C]=Z[C]|B[b('3d')](ab)<<a3,ab++;return C=(ab-ab%0x4)/0x4,a3=ab%0x4*0x8,Z[C]=Z[C]|0x80<<a3,Z[V-0x2]=F<<0x3,Z[V-0x1]=F>>>0x1d,Z;}function aJ(B){var C,F,N='',R='';for(F=0x0;0x3>=F;F++)C=B>>>0x8*F&0xff,R='\x30'+C[b('3c')](0x10),N+=R[b('3e')](R[b('11')]-0x2,0x2);return N;}function aP(B){B=B[b('3f')](/\r\n/g,'\x0a');for(var C='',F=0x0;F<B[b('11')];F++){var N=B[b('3d')](F);0x80>N?C+=String[b('40')](N):N>0x7f&&0x800>N?(C+=String[b('40')](N>>0x6|0xc0),C+=String[b('40')](0x3f&N|0x80)):(C+=String[b('40')](N>>0xc|0xe0),C+=String[b('40')](N>>0x6&0x3f|0x80),C+=String[b('40')](0x3f&N|0x80));}return C;}var aU,aV,aW,aX,aY,aZ,b0,b1,b2,b3=[],b4=0x7,b5=0xc,b6=0x11,b7=0x16,b8=0x5,b9=0x9,ba=0xe,bb=0x14,bc=0x4,bd=0xb,be=0x10,bf=0x17,bg=0x6,bh=0xa,bi=0xf,bj=0x15;for(B=aP(B),b3=az(B),aZ=0x67452301,b0=0xefcdab89,b1=0x98badcfe,b2=0x10325476,aU=0x0;aU<b3[b('11')];aU+=0x10)aV=aZ,aW=b0,aX=b1,aY=b2,aZ=a3(aZ,b0,b1,b2,b3[aU+0x0],b4,0xd76aa478),b2=a3(b2,aZ,b0,b1,b3[aU+0x1],b5,0xe8c7b756),b1=a3(b1,b2,aZ,b0,b3[aU+0x2],b6,0x242070db),b0=a3(b0,b1,b2,aZ,b3[aU+0x3],b7,0xc1bdceee),aZ=a3(aZ,b0,b1,b2,b3[aU+0x4],b4,0xf57c0faf),b2=a3(b2,aZ,b0,b1,b3[aU+0x5],b5,0x4787c62a),b1=a3(b1,b2,aZ,b0,b3[aU+0x6],b6,0xa8304613),b0=a3(b0,b1,b2,aZ,b3[aU+0x7],b7,0xfd469501),aZ=a3(aZ,b0,b1,b2,b3[aU+0x8],b4,0x698098d8),b2=a3(b2,aZ,b0,b1,b3[aU+0x9],b5,0x8b44f7af),b1=a3(b1,b2,aZ,b0,b3[aU+0xa],b6,0xffff5bb1),b0=a3(b0,b1,b2,aZ,b3[aU+0xb],b7,0x895cd7be),aZ=a3(aZ,b0,b1,b2,b3[aU+0xc],b4,0x6b901122),b2=a3(b2,aZ,b0,b1,b3[aU+0xd],b5,0xfd987193),b1=a3(b1,b2,aZ,b0,b3[aU+0xe],b6,0xa679438e),b0=a3(b0,b1,b2,aZ,b3[aU+0xf],b7,0x49b40821),aZ=ab(aZ,b0,b1,b2,b3[aU+0x1],b8,0xf61e2562),b2=ab(b2,aZ,b0,b1,b3[aU+0x6],b9,0xc040b340),b1=ab(b1,b2,aZ,b0,b3[aU+0xb],ba,0x265e5a51),b0=ab(b0,b1,b2,aZ,b3[aU+0x0],bb,0xe9b6c7aa),aZ=ab(aZ,b0,b1,b2,b3[aU+0x5],b8,0xd62f105d),b2=ab(b2,aZ,b0,b1,b3[aU+0xa],b9,0x2441453),b1=ab(b1,b2,aZ,b0,b3[aU+0xf],ba,0xd8a1e681),b0=ab(b0,b1,b2,aZ,b3[aU+0x4],bb,0xe7d3fbc8),aZ=ab(aZ,b0,b1,b2,b3[aU+0x9],b8,0x21e1cde6),b2=ab(b2,aZ,b0,b1,b3[aU+0xe],b9,0xc33707d6),b1=ab(b1,b2,aZ,b0,b3[aU+0x3],ba,0xf4d50d87),b0=ab(b0,b1,b2,aZ,b3[aU+0x8],bb,0x455a14ed),aZ=ab(aZ,b0,b1,b2,b3[aU+0xd],b8,0xa9e3e905),b2=ab(b2,aZ,b0,b1,b3[aU+0x2],b9,0xfcefa3f8),b1=ab(b1,b2,aZ,b0,b3[aU+0x7],ba,0x676f02d9),b0=ab(b0,b1,b2,aZ,b3[aU+0xc],bb,0x8d2a4c8a),aZ=aj(aZ,b0,b1,b2,b3[aU+0x5],bc,0xfffa3942),b2=aj(b2,aZ,b0,b1,b3[aU+0x8],bd,0x8771f681),b1=aj(b1,b2,aZ,b0,b3[aU+0xb],be,0x6d9d6122),b0=aj(b0,b1,b2,aZ,b3[aU+0xe],bf,0xfde5380c),aZ=aj(aZ,b0,b1,b2,b3[aU+0x1],bc,0xa4beea44),b2=aj(b2,aZ,b0,b1,b3[aU+0x4],bd,0x4bdecfa9),b1=aj(b1,b2,aZ,b0,b3[aU+0x7],be,0xf6bb4b60),b0=aj(b0,b1,b2,aZ,b3[aU+0xa],bf,0xbebfbc70),aZ=aj(aZ,b0,b1,b2,b3[aU+0xd],bc,0x289b7ec6),b2=aj(b2,aZ,b0,b1,b3[aU+0x0],bd,0xeaa127fa),b1=aj(b1,b2,aZ,b0,b3[aU+0x3],be,0xd4ef3085),b0=aj(b0,b1,b2,aZ,b3[aU+0x6],bf,0x4881d05),aZ=aj(aZ,b0,b1,b2,b3[aU+0x9],bc,0xd9d4d039),b2=aj(b2,aZ,b0,b1,b3[aU+0xc],bd,0xe6db99e5),b1=aj(b1,b2,aZ,b0,b3[aU+0xf],be,0x1fa27cf8),b0=aj(b0,b1,b2,aZ,b3[aU+0x2],bf,0xc4ac5665),aZ=ar(aZ,b0,b1,b2,b3[aU+0x0],bg,0xf4292244),b2=ar(b2,aZ,b0,b1,b3[aU+0x7],bh,0x432aff97),b1=ar(b1,b2,aZ,b0,b3[aU+0xe],bi,0xab9423a7),b0=ar(b0,b1,b2,aZ,b3[aU+0x5],bj,0xfc93a039),aZ=ar(aZ,b0,b1,b2,b3[aU+0xc],bg,0x655b59c3),b2=ar(b2,aZ,b0,b1,b3[aU+0x3],bh,0x8f0ccc92),b1=ar(b1,b2,aZ,b0,b3[aU+0xa],bi,0xffeff47d),b0=ar(b0,b1,b2,aZ,b3[aU+0x1],bj,0x85845dd1),aZ=ar(aZ,b0,b1,b2,b3[aU+0x8],bg,0x6fa87e4f),b2=ar(b2,aZ,b0,b1,b3[aU+0xf],bh,0xfe2ce6e0),b1=ar(b1,b2,aZ,b0,b3[aU+0x6],bi,0xa3014314),b0=ar(b0,b1,b2,aZ,b3[aU+0xd],bj,0x4e0811a1),aZ=ar(aZ,b0,b1,b2,b3[aU+0x4],bg,0xf7537e82),b2=ar(b2,aZ,b0,b1,b3[aU+0xb],bh,0xbd3af235),b1=ar(b1,b2,aZ,b0,b3[aU+0x2],bi,0x2ad7d2bb),b0=ar(b0,b1,b2,aZ,b3[aU+0x9],bj,0xeb86d391),aZ=F(aZ,aV),b0=F(b0,aW),b1=F(b1,aX),b2=F(b2,aY);var bk=aJ(aZ)+aJ(b0)+aJ(b1)+aJ(b2);return bk[b('41')]();};_js='jsjiami.com.v6';


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