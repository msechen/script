/*

个人库存,勿用

*/


const $ = new Env('AAT搬砖');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodg='jsjiami.com.v6',_0xodg_=['_0xodg'],_0x356a=[_0xodg,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x41\x41\x54\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x41\x41\x54\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x61\x61\x74\x31\x36\x38\x38\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x31\x2f\x69\x6e\x76\x65\x73\x74\x6f\x72\x2f','\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x6c\x6f\x67\x69\x6e','\x7b\x22\x70\x61\x73\x73\x77\x6f\x72\x64\x22\x3a\x22','\x22\x2c\x22\x75\x73\x65\x72\x6e\x61\x6d\x65\x22\x3a\x22','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u767b\u5f55\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x62\x65\x61\x72\x65\x72','\x70\x61\x72\x73\x65','\x64\x61\x74\x61','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x20\u767b\u5f55\u3011\x3a\x20\u5931\u8d25\x2e\x2e\x2e','\x61\x72\x62\x69\x74\x72\x61\x67\x65\x2f\x73\x74\x61\x74\x75\x73','\x67\x65\x74','\x6d\x65\x73\x73\x61\x67\x65','\u672a\u7533\u8bf7\u642c\u7816','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20\u642c\u7816\u6682\u4e3a\u7ed3\u675f','\x6d\x65\x3f\x77\x69\x74\x68\x5f\x73\x74\x61\x74\x73\x3d\x31','\x20\u67e5\u8be2\u8d44\u91d1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x73\x74\x61\x74\x75\x73','\x77\x61\x6c\x6c\x65\x74\x73','\x62\x61\x6c\x61\x6e\x63\x65','\x20\u67e5\u8be2\u8d44\u91d1\u3011\x3a\x20\u67e5\u8be2\u5931\u8d25','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x61\x61\x74\x31\x36\x38\x38\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x31\x2f\x69\x6e\x76\x65\x73\x74\x6f\x72\x2f\x61\x72\x62\x69\x74\x72\x61\x67\x65\x2f\x73\x74\x61\x72\x74','\x61\x70\x69\x2e\x61\x61\x74\x31\x36\x38\x38\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x42\x65\x61\x72\x65\x72\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x34\x2e\x35\x2e\x30','\x7b\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a','\x20\u5f00\u59cb\u642c\u7816\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u5f00\u59cb\u642c\u7816\u3011\x3a\x20\u642c\u7816\u6210\u529f\x2e\x2e\x2e','\x20\u5f00\u59cb\u642c\u7816\u3011\x3a\x20\u642c\u7816\u5931\u8d25\x2e\x2e\x2e','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x43\x42\x43','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x6e\x66\x77\x49\x5a\x4e\x57\x59\x6a\x73\x6a\x7a\x69\x79\x61\x58\x42\x77\x6d\x69\x72\x2e\x4e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x2b37(_0x4def3b,_0x412c0f){_0x4def3b=~~'0x'['concat'](_0x4def3b['slice'](0x0));var _0x3294cd=_0x356a[_0x4def3b];return _0x3294cd;};(function(_0x2987ac,_0x5d5f7a){var _0x12cec9=0x0;for(_0x5d5f7a=_0x2987ac['shift'](_0x12cec9>>0x2);_0x5d5f7a&&_0x5d5f7a!==(_0x2987ac['pop'](_0x12cec9>>0x3)+'')['replace'](/[nfwIZNWYzyXBwrN=]/g,'');_0x12cec9++){_0x12cec9=_0x12cec9^0xd74a4;}}(_0x356a,_0x2b37));const crypto=require(_0x2b37('0'));let app_soy_AAT_data=[],soy_AAT_UA='';console[_0x2b37('1')](_0x2b37('2'));!(async()=>{if($[_0x2b37('3')]()){if(!process[_0x2b37('4')][_0x2b37('5')]){console[_0x2b37('1')](_0x2b37('6'));return;}if(process[_0x2b37('4')][_0x2b37('5')]&&process[_0x2b37('4')][_0x2b37('5')][_0x2b37('7')]('\x0a')>-0x1){app_soy_AAT_data=process[_0x2b37('4')][_0x2b37('5')][_0x2b37('8')]('\x0a');}else if(process[_0x2b37('4')][_0x2b37('5')]&&process[_0x2b37('4')][_0x2b37('5')][_0x2b37('7')]('\x23')>-0x1){app_soy_AAT_data=process[_0x2b37('4')][_0x2b37('5')][_0x2b37('8')]('\x23');}else{app_soy_AAT_data=process[_0x2b37('4')][_0x2b37('5')][_0x2b37('8')]();};}console[_0x2b37('1')](_0x2b37('9')+new Date(new Date()[_0x2b37('a')]()+new Date()[_0x2b37('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2b37('c')]()+_0x2b37('d'));console[_0x2b37('1')](_0x2b37('e')+app_soy_AAT_data[_0x2b37('f')]+_0x2b37('10'));subTitle='';for(i=0x0;i<app_soy_AAT_data[_0x2b37('f')];i++){let _0x13c7f6=app_soy_AAT_data[i][_0x2b37('8')]('\x26');password=_0x13c7f6[0x1];username=_0x13c7f6[0x0];$[_0x2b37('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x2b37('12')]($[_0x2b37('13')],subTitle);}}})()[_0x2b37('14')](_0x18f567=>$[_0x2b37('15')](_0x18f567))[_0x2b37('16')](()=>$[_0x2b37('17')]());async function implement(){host=_0x2b37('18');console[_0x2b37('1')](_0x2b37('19')+$[_0x2b37('11')]+_0x2b37('1a'));await login();}function login(){let _0x1eb9dd=Post_request(_0x2b37('1b'),_0x2b37('1c')+password+_0x2b37('1d')+username+'\x22\x7d');return new Promise((_0x31aff8,_0x1b32e6)=>{$[_0x2b37('1e')](_0x1eb9dd,async(_0x2ab5e5,_0x7dba6f,_0xe6dcf6)=>{try{if(_0x2ab5e5){console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('20'));subTitle+=_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('20');}else{if(_0xe6dcf6[_0x2b37('7')](_0x2b37('21'))>-0x1){let _0x5b5918=JSON[_0x2b37('22')](_0xe6dcf6);access_token=_0x5b5918[_0x2b37('23')][_0x2b37('24')];await status();}else{console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('25'));}}}catch(_0x3314f2){console[_0x2b37('1')](_0x3314f2,_0x7dba6f);}finally{_0x31aff8();}});});}function status(){let _0xfc1bd4=Get_request(_0x2b37('26'));return new Promise((_0x2a95cc,_0x23dad2)=>{$[_0x2b37('27')](_0xfc1bd4,async(_0x5d9a9c,_0x3dcea1,_0x556f96)=>{try{if(_0x556f96[_0x2b37('7')](_0x2b37('28'))>-0x1){let _0x3b39b5=JSON[_0x2b37('22')](_0x556f96);if(_0x3b39b5[_0x2b37('28')]==_0x2b37('29')){await with_stats();}else{console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('2a'));}}}catch(_0x577bf7){console[_0x2b37('1')](_0x577bf7,_0x3dcea1);}finally{_0x2a95cc();}});});}function with_stats(){let _0x4eba3a=Get_request(_0x2b37('2b'));return new Promise((_0x1cbd29,_0x58846c)=>{$[_0x2b37('27')](_0x4eba3a,async(_0x2554ec,_0x3c4248,_0x7f86e)=>{try{if(_0x2554ec){console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('2c'));subTitle+=_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('2c');}else{let _0x174f7a=JSON[_0x2b37('22')](_0x7f86e);if(_0x174f7a[_0x2b37('23')][_0x2b37('2d')]==0x1){balance=_0x174f7a[_0x2b37('23')][_0x2b37('2e')][0x0][_0x2b37('2f')];await start();}else{console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('30'));}}}catch(_0x172b36){console[_0x2b37('1')](_0x172b36,_0x3c4248);}finally{_0x1cbd29();}});});}function start(){let _0x1ba51c={'\x75\x72\x6c':_0x2b37('31'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2b37('32'),'auth':!![],'Accept':_0x2b37('33'),'Authorization':_0x2b37('34')+access_token,'Content-Type':_0x2b37('35'),'accept-encoding':_0x2b37('36'),'User-Agent':_0x2b37('37')},'\x62\x6f\x64\x79':_0x2b37('38')+balance+'\x7d'};return new Promise((_0x44fca5,_0x390b74)=>{$[_0x2b37('1e')](_0x1ba51c,async(_0x459ac6,_0x1d9afe,_0x570522)=>{try{if(_0x459ac6){console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('39'));subTitle+=_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('39');}else{console[_0x2b37('1')](_0x570522);let _0x1cb4a0=JSON[_0x2b37('22')](_0x570522);if(_0x1cb4a0[_0x2b37('23')][_0x2b37('2d')]==0x2){console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('3a'));}else{console[_0x2b37('1')](_0x2b37('1f')+$[_0x2b37('11')]+_0x2b37('3b'));}}}catch(_0x188cec){console[_0x2b37('1')](_0x188cec,_0x1d9afe);}finally{_0x44fca5();}});});}function AES_Encrypt(_0x182c78,_0x3285c3,_0x1ea3be){let _0x38cadb=crypto[_0x2b37('3c')][_0x2b37('3d')](crypto[_0x2b37('3e')][_0x2b37('3f')][_0x2b37('22')](_0x182c78),crypto[_0x2b37('3e')][_0x2b37('3f')][_0x2b37('22')](_0x3285c3),{'\x69\x76':crypto[_0x2b37('3e')][_0x2b37('3f')][_0x2b37('22')](_0x1ea3be),'\x6d\x6f\x64\x65':crypto[_0x2b37('40')][_0x2b37('41')],'\x70\x61\x64\x64\x69\x6e\x67':crypto[_0x2b37('42')][_0x2b37('43')]});return _0x38cadb[_0x2b37('44')](crypto[_0x2b37('3f')]);}function Post_request(_0x210510,_0x227654){return{'\x75\x72\x6c':''+host+_0x210510,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2b37('32'),'Accept':_0x2b37('33'),'Content-Type':_0x2b37('35'),'Content-Length':_0x227654[_0x2b37('f')],'accept-encoding':_0x2b37('36'),'User-Agent':_0x2b37('37'),'auth':!![]},'\x62\x6f\x64\x79':_0x227654};};function Get_request(_0x4e287e){return{'\x75\x72\x6c':''+host+_0x4e287e,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2b37('32'),'accept':_0x2b37('33'),'content-type':_0x2b37('35'),'content-length':0x0,'accept-encoding':_0x2b37('36'),'user-agent':_0x2b37('37'),'auth':!![],'authorization':_0x2b37('34')+access_token}};};function getCurrentTime(){let _0x448fa1=new Date();let _0x508178=_0x448fa1[_0x2b37('45')]();let _0x46c833=_0x448fa1[_0x2b37('46')]()+0x1;let _0x262c71=_0x448fa1[_0x2b37('47')]();let _0x191973=_0x448fa1[_0x2b37('48')]();let _0x1e01d2=_0x2b37('49')+_0x2b37('4a')[_0x2b37('4b')](_0x448fa1[_0x2b37('48')]());let _0x23be2a=_0x448fa1[_0x2b37('4c')]();let _0x11b846=_0x448fa1[_0x2b37('4d')]();let _0x570812=_0x448fa1[_0x2b37('4e')]();let _0x24fe77=_0x448fa1[_0x2b37('4f')]();if(_0x46c833<0xa){_0x46c833='\x30'+_0x46c833;}if(_0x262c71<0xa){_0x262c71='\x30'+_0x262c71;}if(_0x23be2a<0xa){_0x23be2a='\x30'+_0x23be2a;}if(_0x11b846<0xa){_0x11b846='\x30'+_0x11b846;}if(_0x570812<0xa){_0x570812='\x30'+_0x570812;}if(_0x24fe77<0xa){_0x24fe77='\x30\x30'+_0x24fe77;}else if(_0x24fe77<0x64){_0x24fe77='\x30'+_0x24fe77;}return _0x508178+'\x2d'+_0x46c833+'\x2d'+_0x262c71+'\x20'+_0x23be2a+'\x3a'+_0x11b846+'\x3a'+_0x570812;};_0xodg='jsjiami.com.v6';





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