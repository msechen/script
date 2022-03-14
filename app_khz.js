/*

项目名称:垦荒者

卷轴模式,怎么玩我还不知道,交易和之前那个达赏交易一起的

好像是兑换到交易所然后卖的

需要人脸实名

想玩的就玩,不需要的就不要理

变量填写

变量名:soy_khz_data
变量值:抓包的请求头上token值(注意:不要Bearer和空格)

脚本地址:https://gitee.com/soy-tool/app-script/rawmaster/app_khz.js

*/


const $ = new Env('【垦荒者】版本:22/03/14_0');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xod1='jsjiami.com.v6',_0xod1_=['_0xod1'],_0x3467=[_0xod1,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6b\x68\x7a\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6b\x68\x7a\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x6a\x69\x61\x64\x69\x61\x6e\x2d\x70\x6f\x77\x65\x72\x2f\x61\x64\x76\x65\x72\x74\x69\x73\x65\x2f\x63\x68\x65\x63\x6b\x5f\x73\x68\x6f\x77\x5f\x61\x64\x76\x65\x72\x74\x5f\x63\x6f\x75\x6e\x74','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x6a\x69\x61\x64\x69\x61\x6e\x2d\x70\x6f\x77\x65\x72\x2f\x61\x64\x76\x65\x72\x74\x69\x73\x65\x2f\x63\x6f\x6e\x66\x69\x72\x6d\x5f\x73\x68\x6f\x77\x5f\x61\x64\x76\x65\x72\x74','\x7b\x22\x61\x64\x54\x79\x70\x65\x22\x3a\x22\x31\x30\x30\x38\x36\x22\x2c\x22\x63\x68\x65\x63\x6b\x53\x74\x72\x69\x6e\x67\x22\x3a\x22\x64\x32\x63\x35\x39\x63\x30\x31\x37\x32\x32\x63\x34\x38\x38\x64\x38\x62\x30\x38\x61\x39\x39\x66\x39\x33\x37\x34\x66\x30\x36\x37\x22\x2c\x22\x74\x79\x70\x65\x22\x3a\x22\x32\x22\x7d','\x70\x6f\x73\x74','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6a\x69\x61\x64\x69\x61\x6e\x2d\x70\x6f\x77\x65\x72\x2f\x70\x6f\x77\x65\x72\x2f\x67\x65\x74\x2f\x70\x6f\x77\x65\x72\x2f\x70\x61\x67\x65\x3f\x70\x61\x67\x65\x4e\x75\x6d\x62\x65\x72\x3d\x31\x26\x70\x61\x67\x65\x53\x69\x7a\x65\x3d\x31\x30','\x20\u67e5\u8be2\u9886\u53d6\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x72\x65\x63\x6f\x72\x64\x73','\x63\x72\x65\x61\x74\x65\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x74\x65','\x20\u67e5\u8be2\u72b6\u6001\u3011\x3a\x20\u4eca\u65e5\u4efb\u52a1\u5df2\u5b8c\u6210','\x20\u67e5\u8be2\u9886\u53d6\u5217\u8868\u3011\x3a\x20\u67e5\u8be2\u5931\u8d25','\x6a\x69\x61\x64\x69\x61\x6e\x2d\x70\x6f\x77\x65\x72\x2f\x70\x6f\x77\x65\x72\x2f\x67\x72\x61\x6e\x74\x2f\x70\x6f\x77\x65\x72','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u53d6\u6536\u76ca\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x6b\x65\x6e\x2e\x6e\x75\x6f\x66\x61\x6e\x67\x74\x69\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f','\x55\x53\x45\x52','\x42\x65\x61\x72\x65\x72\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x6b\x65\x6e\x2e\x6e\x75\x6f\x66\x61\x6e\x67\x74\x69\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x34\x2e\x39\x2e\x30','\x66\x6a\x77\x73\x6a\x65\x69\x4a\x61\x6d\x44\x69\x59\x2e\x63\x47\x6f\x66\x59\x6d\x2e\x76\x36\x44\x56\x67\x55\x3d\x3d'];function _0x1ea3(_0x188b1d,_0x523ef0){_0x188b1d=~~'0x'['concat'](_0x188b1d['slice'](0x0));var _0x3671c0=_0x3467[_0x188b1d];return _0x3671c0;};(function(_0xc2158c,_0x105934){var _0x2b0a0f=0x0;for(_0x105934=_0xc2158c['shift'](_0x2b0a0f>>0x2);_0x105934&&_0x105934!==(_0xc2158c['pop'](_0x2b0a0f>>0x3)+'')['replace'](/[fweJDYGfYDVgU=]/g,'');_0x2b0a0f++){_0x2b0a0f=_0x2b0a0f^0xd75ad;}}(_0x3467,_0x1ea3));const crypto=require(_0x1ea3('0'));let app_soy_khz_data=[],soy_khz_UA='';console[_0x1ea3('1')](_0x1ea3('2'));!(async()=>{if($[_0x1ea3('3')]()){if(!process[_0x1ea3('4')][_0x1ea3('5')]){console[_0x1ea3('1')](_0x1ea3('6'));return;}if(process[_0x1ea3('4')][_0x1ea3('5')]&&process[_0x1ea3('4')][_0x1ea3('5')][_0x1ea3('7')]('\x0a')>-0x1){app_soy_khz_data=process[_0x1ea3('4')][_0x1ea3('5')][_0x1ea3('8')]('\x0a');}else if(process[_0x1ea3('4')][_0x1ea3('5')]&&process[_0x1ea3('4')][_0x1ea3('5')][_0x1ea3('7')]('\x23')>-0x1){app_soy_khz_data=process[_0x1ea3('4')][_0x1ea3('5')][_0x1ea3('8')]('\x23');}else{app_soy_khz_data=process[_0x1ea3('4')][_0x1ea3('5')][_0x1ea3('8')]();};}console[_0x1ea3('1')](_0x1ea3('9')+new Date(new Date()[_0x1ea3('a')]()+new Date()[_0x1ea3('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1ea3('c')]()+_0x1ea3('d'));console[_0x1ea3('1')](_0x1ea3('e')+app_soy_khz_data[_0x1ea3('f')]+_0x1ea3('10'));subTitle='';for(i=0x0;i<app_soy_khz_data[_0x1ea3('f')];i++){token=app_soy_khz_data[i];$[_0x1ea3('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x1ea3('12')]($[_0x1ea3('13')],subTitle);}}})()[_0x1ea3('14')](_0x4fb68e=>$[_0x1ea3('15')](_0x4fb68e))[_0x1ea3('16')](()=>$[_0x1ea3('17')]());async function implement(){console[_0x1ea3('1')](_0x1ea3('18')+$[_0x1ea3('11')]+_0x1ea3('19'));await advert_count();}function advert_count(){let _0x1f5974=Get_request(_0x1ea3('1a'));return new Promise((_0x2093cf,_0x22f7f3)=>{$[_0x1ea3('1b')](_0x1f5974,async(_0x2e821c,_0x23fc83,_0x31db3a)=>{try{if(_0x2e821c){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('1d'));subTitle+=_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('1d');}else{let _0x43560b=JSON[_0x1ea3('1e')](_0x31db3a);if(_0x43560b[_0x1ea3('1f')]==0xc8){if(_0x43560b[_0x1ea3('20')]<0x6){await show_advert();}else{await power_page();}}else{console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('21')+_0x43560b[_0x1ea3('22')]);}}}catch(_0xcfb101){console[_0x1ea3('1')](_0xcfb101,_0x23fc83);}finally{_0x2093cf();}});});}function show_advert(){let _0x29f16a=Post_request(_0x1ea3('23'),_0x1ea3('24'));return new Promise((_0x46a972,_0x3d5d72)=>{$[_0x1ea3('25')](_0x29f16a,async(_0x3e9a60,_0x427f6f,_0x1069ed)=>{try{if(_0x3e9a60){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('26'));subTitle+=_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('26');}else{let _0x4741ab=JSON[_0x1ea3('1e')](_0x1069ed);if(_0x4741ab[_0x1ea3('1f')]==0xc8){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('27')+_0x4741ab[_0x1ea3('22')]);await $[_0x1ea3('28')](Math[_0x1ea3('29')](Math[_0x1ea3('2a')]()*(0x6d60-0x61a8+0x3e8)+0x61a8));await advert_count();}else{console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('27')+_0x4741ab[_0x1ea3('22')]);}}}catch(_0x4865f5){console[_0x1ea3('1')](_0x4865f5,_0x427f6f);}finally{_0x46a972();}});});}function power_page(){let _0x1ec138=Get_request(_0x1ea3('2b'));return new Promise((_0x18c62a,_0x5f20bc)=>{$[_0x1ea3('1b')](_0x1ec138,async(_0x4f2c63,_0x9b006,_0x44d4d6)=>{try{if(_0x4f2c63){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('2c'));subTitle+=_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('2c');}else{let _0x435480=JSON[_0x1ea3('1e')](_0x44d4d6);if(_0x435480[_0x1ea3('1f')]==0xc8){if(_0x435480[_0x1ea3('20')][_0x1ea3('2d')][0x0][_0x1ea3('2e')][_0x1ea3('7')](new Date()[_0x1ea3('2f')]())>-0x1){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('30'));}else{await grant_power();}}else{console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('31'));}}}catch(_0x5387d9){console[_0x1ea3('1')](_0x5387d9,_0x9b006);}finally{_0x18c62a();}});});}function grant_power(){let _0x5796d5=Post_request(_0x1ea3('32'),'\x7b\x7d');return new Promise((_0x2ab4bd,_0x3396ed)=>{$[_0x1ea3('25')](_0x5796d5,async(_0x390c21,_0x3f9383,_0x230a67)=>{try{if(_0x390c21){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('33'));subTitle+=_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('33');}else{let _0x1eacf2=JSON[_0x1ea3('1e')](_0x230a67);if(_0x1eacf2[_0x1ea3('1f')]==0xc8){console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('34')+_0x1eacf2[_0x1ea3('22')]);}else{console[_0x1ea3('1')](_0x1ea3('1c')+$[_0x1ea3('11')]+_0x1ea3('34')+_0x1eacf2[_0x1ea3('22')]);}}}catch(_0x5b9fb2){console[_0x1ea3('1')](_0x5b9fb2,_0x3f9383);}finally{_0x2ab4bd();}});});}function Post_request(_0xfc8804,_0x36215e){return{'\x75\x72\x6c':_0x1ea3('35')+_0xfc8804,'\x68\x65\x61\x64\x65\x72\x73':{'token_type':_0x1ea3('36'),'Authorization':_0x1ea3('37')+token,'token':_0x1ea3('37')+token,'Content-Type':_0x1ea3('38'),'Content-Length':_0x36215e[_0x1ea3('f')],'Host':_0x1ea3('39'),'Connection':_0x1ea3('3a'),'Accept-Encoding':_0x1ea3('3b'),'User-Agent':_0x1ea3('3c')},'\x62\x6f\x64\x79':_0x36215e};};function Get_request(_0x3ca4e7){return{'\x75\x72\x6c':_0x1ea3('35')+_0x3ca4e7,'\x68\x65\x61\x64\x65\x72\x73':{'token_type':_0x1ea3('36'),'Authorization':_0x1ea3('37')+token,'token':_0x1ea3('37')+token,'Content-Type':_0x1ea3('38'),'Content-Length':0x0,'Host':_0x1ea3('39'),'Connection':_0x1ea3('3a'),'Accept-Encoding':_0x1ea3('3b'),'User-Agent':_0x1ea3('3c')}};};;_0xod1='jsjiami.com.v6';



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