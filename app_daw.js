/*

软件名称:都爱玩

项目注册地址(微信打开):https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABOSA9,dawbox-android#wechat_redirect

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

soy_daw_token
#抓包时的请求头上的token


选填变量
soy_daw_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 换行 隔开

v2p重写配置如下(不一定行,不能一定不行):

REWRITE 中的 匹配链接（正则表达式）
https://v3.sdk.haowusong.com/api/box/wallet/info 

REWRITE 中的 重写方式
app_daw.js

MITM 中的 解析域名
v3.sdk.haowusong.com

cron "3 0,9,17 * * *"

*/


const $ = new Env('都爱玩');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x9375b2=_0x53e0,_0xd341ac=_0x4f50;(function(_0x540680,_0x9ad38a){const _0x47e72e=_0x4f50,_0x256731=_0x8338,_0x4f4a39=_0x53e0,_0xd5c9=_0x540680();while(!![]){try{const _0x1e189a=-parseInt(_0x4f4a39(0xf6))/0x1*(parseInt(_0x256731(0xea))/0x2)+-parseInt(_0x256731(0x134))/0x3+parseInt(_0x47e72e('0x151','ajo*'))/0x4+parseInt(_0x47e72e(0x112,'RWIi'))/0x5+-parseInt(_0x47e72e('0x102','c!Mz'))/0x6+-parseInt(_0x47e72e('0x129','MQtH'))/0x7+parseInt(_0x47e72e('0x175','Ahf4'))/0x8;if(_0x1e189a===_0x9ad38a)break;else _0xd5c9['push'](_0xd5c9['shift']());}catch(_0x207b06){_0xd5c9['push'](_0xd5c9['shift']());}}}(_0x25db,0xd4722));function _0x4f50(_0x4bc803,_0x45dde0){const _0x25db8b=_0x25db();return _0x4f50=function(_0x83383f,_0x53d4bc){_0x83383f=_0x83383f-0xe2;let _0x55bb50=_0x25db8b[_0x83383f];if(_0x4f50['tSMCuT']===undefined){var _0x229ad7=function(_0x3a01c2){const _0x358e8e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c277a='',_0xc61073='';for(let _0x215d4f=0x0,_0x385e65,_0x4f50e5,_0x3b0900=0x0;_0x4f50e5=_0x3a01c2['charAt'](_0x3b0900++);~_0x4f50e5&&(_0x385e65=_0x215d4f%0x4?_0x385e65*0x40+_0x4f50e5:_0x4f50e5,_0x215d4f++%0x4)?_0x2c277a+=String['fromCharCode'](0xff&_0x385e65>>(-0x2*_0x215d4f&0x6)):0x0){_0x4f50e5=_0x358e8e['indexOf'](_0x4f50e5);}for(let _0x5603f7=0x0,_0x415f8e=_0x2c277a['length'];_0x5603f7<_0x415f8e;_0x5603f7++){_0xc61073+='%'+('00'+_0x2c277a['charCodeAt'](_0x5603f7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xc61073);};const _0x53e082=function(_0x2adcd3,_0x262764){let _0x37608d=[],_0x2568a0=0x0,_0x47e853,_0x5962c9='';_0x2adcd3=_0x229ad7(_0x2adcd3);let _0x21be5b;for(_0x21be5b=0x0;_0x21be5b<0x100;_0x21be5b++){_0x37608d[_0x21be5b]=_0x21be5b;}for(_0x21be5b=0x0;_0x21be5b<0x100;_0x21be5b++){_0x2568a0=(_0x2568a0+_0x37608d[_0x21be5b]+_0x262764['charCodeAt'](_0x21be5b%_0x262764['length']))%0x100,_0x47e853=_0x37608d[_0x21be5b],_0x37608d[_0x21be5b]=_0x37608d[_0x2568a0],_0x37608d[_0x2568a0]=_0x47e853;}_0x21be5b=0x0,_0x2568a0=0x0;for(let _0x2991ba=0x0;_0x2991ba<_0x2adcd3['length'];_0x2991ba++){_0x21be5b=(_0x21be5b+0x1)%0x100,_0x2568a0=(_0x2568a0+_0x37608d[_0x21be5b])%0x100,_0x47e853=_0x37608d[_0x21be5b],_0x37608d[_0x21be5b]=_0x37608d[_0x2568a0],_0x37608d[_0x2568a0]=_0x47e853,_0x5962c9+=String['fromCharCode'](_0x2adcd3['charCodeAt'](_0x2991ba)^_0x37608d[(_0x37608d[_0x21be5b]+_0x37608d[_0x2568a0])%0x100]);}return _0x5962c9;};_0x4f50['GbPUIi']=_0x53e082,_0x4bc803=arguments,_0x4f50['tSMCuT']=!![];}const _0xbcca9c=_0x25db8b[0x0],_0x274d5f=_0x83383f+_0xbcca9c,_0x49d570=_0x4bc803[_0x274d5f];return!_0x49d570?(_0x4f50['uGHlUS']===undefined&&(_0x4f50['uGHlUS']=!![]),_0x55bb50=_0x4f50['GbPUIi'](_0x55bb50,_0x53d4bc),_0x4bc803[_0x274d5f]=_0x55bb50):_0x55bb50=_0x49d570,_0x55bb50;},_0x4f50(_0x4bc803,_0x45dde0);}let app_soy_daw_token=[],app_soy_daw_UA=[];!(async()=>{const _0x57baa3=_0x4f50,_0x13e21c=_0x8338,_0x23da6a=_0x53e0;typeof $request!=='undefined'&&await Get_data();if($[_0x23da6a(0x11a)]()){if(!process[_0x13e21c(0x11f)][_0x23da6a('0x141')]){console[_0x57baa3(0xe7,'es6a')]('\x0a【'+$[_0x13e21c(0x165)]+_0x13e21c(0x15a));return;}if(process[_0x57baa3(0xf2,'txEC')][_0x57baa3(0xed,'6fy1')]&&process[_0x23da6a('0x12f')]['soy_daw_token']['indexOf']('@')>-0x1)soy_daw_token=process[_0x13e21c(0x11f)]['soy_daw_token'][_0x57baa3(0x136,'AV1r')]('@');else process[_0x23da6a(0x12f)][_0x57baa3('0x104','dF[i')]&&process[_0x23da6a('0x12f')][_0x23da6a('0x141')]['indexOf']('\x0a')>-0x1?soy_daw_token=process[_0x13e21c(0x11f)][_0x13e21c(0x130)][_0x13e21c('0x16f')]('\x0a'):soy_daw_token=process['env']['soy_daw_token'][_0x57baa3(0x140,'X*3X')]();;Object[_0x13e21c('0xfc')](soy_daw_token)[_0x13e21c(0x149)](_0x2568a0=>{const _0x21e74c=_0x57baa3;soy_daw_token[_0x2568a0]&&app_soy_daw_token[_0x21e74c(0x115,'aoN)')](soy_daw_token[_0x2568a0]);;});if(!process['env']['soy_daw_UA'])console[_0x23da6a('0x155')]('\x0a【'+$[_0x57baa3(0x171,'p*IG')]+_0x13e21c('0x111'));else{if(process[_0x13e21c('0x11f')]['soy_daw_UA']&&process['env']['soy_daw_UA']['indexOf']('@')>-0x1)soy_daw_UA=process['env'][_0x13e21c('0x142')]['split']('@');else process[_0x23da6a('0x12f')][_0x23da6a(0xf0)]&&process[_0x13e21c(0x11f)][_0x13e21c('0x142')][_0x57baa3('0x127','%&xc')]('\x0a')>-0x1?soy_daw_UA=process[_0x13e21c('0x11f')][_0x23da6a('0xf0')][_0x23da6a('0x110')]('\x0a'):soy_daw_UA=process['env'][_0x57baa3('0x106','bJP6')][_0x57baa3('0xeb','#YM@')]();;Object[_0x13e21c(0xfc)](soy_daw_UA)[_0x57baa3(0x16a,'s5Km')](_0x47e853=>{soy_daw_UA[_0x47e853]&&app_soy_daw_UA['push'](soy_daw_UA[_0x47e853]);;});}}else{if(!$['getdata'](_0x23da6a(0x141))){console[_0x57baa3('0x125','HC%W')]('\x0a【'+$[_0x13e21c('0x165')]+_0x23da6a(0x147));return;}if($[_0x23da6a(0x16e)]('soy_daw_token')&&$[_0x13e21c(0x173)](_0x57baa3(0x16d,'RWIi'))[_0x13e21c(0x119)]('@')>-0x1)app_soy_daw_token=$[_0x23da6a('0x16e')]('soy_daw_token')['split']('@');else $[_0x13e21c(0x173)](_0x13e21c(0x130))&&$[_0x13e21c(0x173)](_0x23da6a('0x141'))['indexOf']('\x0a')>-0x1?app_soy_daw_token=$['getdata'](_0x23da6a('0x141'))[_0x57baa3(0x10b,'LWML')]('\x0a'):app_soy_daw_token=$[_0x57baa3(0xfe,'1xFt')](_0x23da6a(0x141))[_0x57baa3('0x159','1xFt')]();;if(!$[_0x23da6a(0x16e)](_0x57baa3('0xe8','tmVh')))console[_0x57baa3('0x150','zTZK')]('\x0a【'+$['name']+'】：未填写相应变量\x20soy_daw_UA\x20,将默认分配');else{if($['getdata'](_0x13e21c(0x142))&&$[_0x23da6a('0x16e')](_0x23da6a(0xf0))[_0x23da6a(0x152)]('@')>-0x1)app_soy_daw_UA=$[_0x57baa3('0x109','p*IG')](_0x57baa3(0x167,'#YM@'))[_0x13e21c('0x16f')]('@');else $['getdata']('soy_daw_UA')&&$[_0x57baa3(0xe5,'aoN)')](_0x13e21c('0x142'))[_0x23da6a(0x152)]('\x0a')>-0x1?app_soy_daw_UA=$['getdata'](_0x23da6a(0xf0))[_0x57baa3('0x132','txEC')]('\x0a'):app_soy_daw_UA=$[_0x13e21c(0x173)](_0x23da6a(0xf0))['split']();;}}console['log'](_0x57baa3('0x10a','%K2n')+new Date(new Date()[_0x23da6a('0xe6')]()+new Date()[_0x13e21c(0x12a)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x23da6a('0x122')]()+_0x57baa3('0xfa','ajo*')),console[_0x23da6a('0x155')](_0x13e21c(0xf1)+app_soy_daw_token[_0x13e21c('0x15e')]+_0x23da6a('0x124')),subTitle='';for(i=0x0;i<app_soy_daw_token[_0x13e21c(0x15e)];i++){soy_daw_token=app_soy_daw_token[i]['split']('#')[0x0],soy_daw_UA=app_soy_daw_UA[i],!soy_daw_UA&&(soy_daw_UA=_0x57baa3(0x118,'(Dsz')),soy_daw_headers={'Host':'v3.sdk.haowusong.com','user-agent':soy_daw_UA,'token':soy_daw_token,'origin':_0x13e21c(0x13b),'x-requested-with':'com.baolai.youqutao','sec-fetch-site':_0x57baa3(0x13c,']m&t'),'sec-fetch-mode':_0x23da6a(0x11e),'sec-fetch-dest':_0x13e21c('0x15b')},$[_0x57baa3(0x14e,'C9Lq')]=i+0x1,console['log'](_0x23da6a(0x15c)+$['index']+_0x23da6a(0x158)),await soy_daw_poollist();};notify&&(subTitle&&await notify[_0x13e21c('0x148')]($[_0x13e21c('0x165')],subTitle));})()[_0xd341ac(0xe9,'#YM@')](_0x5962c9=>$[_0x9375b2('0x101')](_0x5962c9))[_0x9375b2(0xe3)](()=>$[_0x9375b2(0x16b)]());function _0x25db(){const _0xde8370=['zg9Uzq','\x20ms...','WRJdNCoEW5aObmknWPKFWRKZfea','z2v0zgf0yq','split','data','weTKWR4','WP4/WO/dMbrBW7bAEh/dReG','getdata','xxpdPSok','uetdOmkvWPq0DCkCfCkKW4aBuSoY','WO52jq','zMLUywXSEq','W7P5aNhdLCkXfb02W5pdJrS3W710W5y','W7XSbNNdNCkMfa','z2v0vgLTzq','pZfI','WPf2o8kmeCkbW7/cTu7cRa','eCodWOxdV8kP','30530xHMDlt','aCosWP3dTCk1','cCoNW60tBCkZ','ve/cMsmhisyJWOntW6iQCG','W5JcOcT6W4S','ioAkLEwiHUE6OUw4GEoaKtOG5OQv5ywLia','C295x2rHD19vqq','===【共\x20','WPpdLuC','FCoVWQrHWPC','W6pKU6FLIkVLIOJOOj3JGk7cO2NOR6BLJRFLPi7OTBS','WQlcSmonWOxdQ8kvW4n5WRXi','mta3s1nTD2jM','---账号\x20','headers','code','zq/dHSkjW7C','ioAkLEwiHUE6OUw4GEoaKtOG','keys','WOZdVwi6WOrxW7RcTmkAA8kMW6LYba','w8kRW5CaamogkW','setdata','rhldRCoddq','Bg9NrxjY','WPv5WRLhW59xWOZcOMtcRc7dPSk2','CMfUzg9T','dtxcGmkSdSkbys7cOCo+W51JW6y','Aw50zwDYywXFBNvT','WR4onSk+k3hdSCkNW4tdSG','soy_daw_toekn','index','uu99WR8LWOtdHa','WRFdSgyZWPlOHBVMN6BMI6pOORuOW4NcQowmNos7PUAvNEMvLE+8NG','cSo7W6adFa','z2v0','vedio_task','can_num','vmkMWQhOTyZLJ7/dOq','C3bSAxq','】：未填写相应变量\x20soy_daw_UA\x20,将默认分配','W7NcHCkEWRH6umopWQ4QWRGmjf8','W7/cK2xdOxtdJ0WmhSkPWRxcVmkoWO4','ioEuQoAiT+EkTUAaGEoaKtOGcI0TlEAiKEEAHercqEAvSoMhJ++8MG','W6T8axu','post','W7aSWR/cRevhW5eewq1l','CSo6t1GTlGFcGCksW459W5tcTd7dT8kjkqnWWQFdHCkXlH4sqmkHjXFcNSoaW6GwAs/dNKu1WP9BsCoOtCk7h8oqmCkGFCorb0rcW7RcJmo3jCkZW6FdOCo2W47cImk4wCkRW7dcI8k9W6dcV10BymocW7ursCk5E8knW7b3W77dPmkFWODlWQdcGhqtESkkW5eeW7OIW4n5W7e2W6v9eq50lCkPWOddG8ofW7eZWOhcKCknh8ktW6NdUSoysHBdHmk2W7xcQ2NdQtKyWQH6W7L1W4SuWRPZhmkQhmoizfjMpW0VWQhdSW7dL0NdRCkdWQxdNWhdSCkeW5/dNLhcM1lcMSogWPK6W7TMrCk/xYNcPNrRW7e0W5OSsthdOgTjW7C2W6XVomoZW4mltrRcGL8bW55YmSk9W7ZdIb3cNmkqW58+W5/dLSkSuCoYW6tcON3cQG','indexOf','AxnoB2rL','\x0a---可提现金额：','Ahr0Chm6lY92mY5Ons5Oyw93DxnVBMCUy29T','parse','y29YCW','env','mJC5nZy1nwHbBLrvCq','woAlJEwjQoE7GUw7OEodIcJcHEAiR+weMmoY','Dg9mB2nHBgvtDhjPBMC','ioINHUMIKEw5V+wrIUoaKtOG6kEc55Yl5BM/5zgk5OIq5yQFFG','ios4QUI0PUwpT+oaKt09pqO','oCk2Ca','floor','etykbCkyWPz0','Emo0oUI3RUwpKxq','hSoyWQFcKIxcOsFdQNddQ3pdSSkeDW','getTimezoneOffset','W5NdHqBdMW','W48GW74AWOOrW5VcGuNcKZ3dUW','Cg9ZDa','lfZcJ8orWPPOWPXad8kUh3JcKufMd1yoW4Kj','zw52','soy_daw_token','WQ9ZW60','WOxdI13cHCkz','Bw9UzxK','2244921crQdPy','zgf0yq','nCkQW6LXCa','cors','ioINHUMIKEw5V+wrIUoaKtOG','l8oWga3dLw4','WQKQA2nOW4CmWQznrmk9CSoapSkkpSkIfbe','https://v3.h5.haowusong.com','WP1GWPpdUI7cQNJcLWq','tasks','EYj0yxnRx2LKiJOYmdCSiMnOyw5UzwWIoIjKyxDIB3GTBg90lwfUzhjVAwqIFq','api/box','W4FdKY/cM0S','C295x2rHD190B2TLBG','soy_daw_UA','C2fTzs1ZAxrL','ls0T6lsM5y+3ia','WO7dRCkpW4FLTBxMIz/dQ03dGoAuIEMhUE+/PG','ioE7P+E7REINGUECI+w5V+wrIUoaKtOG6zQp5PY65BU25PE2ia','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv9KyxDFDg9Rzw4','sendNotify','forEach','player','DJmUC2rRlMHHB3D1C29UzY5JB20','yCoHESk1WPO','WOHNWQW','W6T5F0SG','wait','WQyQyq','CWBdI8kdW4SIW4vda8kueL/cOa','Aw5KzxHpzG','DxnLx2LUDgvNCMfSx251Bq','WPiAW7/cTW','Bg9N','log','W6NcQmoPW7JdKdO','ios4QUI0PUwpT+s7U+wkOEoaKq','t8k+W48nfq','】：未填写相应变量\x20soy_daw_token','empty','cUw8GowNI+oaKoESRca','W446W74pWP5zWPxdGMddJMBdPCkGWQldOSoOECkUW7pdM8khnuRcQSksW6BcVWhdGuyvnuxcMqhdJNRcHX3dVG/dNdJdOq8sWOddOSkdW6T0W6pcRCkqF8kWWRZcNZFcJGax','length','W7dcTrVcJ1y','\x20用户状态】:\x20\x0a---我的DBA数量：','f8o7W44DW4xdQL0fnCobWPBcV8kU','zxjYB3i','BMfTzq','CgXHEwvY','name','h8orDhpLUydMIzlLI7NdKa','aConWOJdG8kLWR3cPtCrla','CgfYC2u','Aw5KzxG','WOjNWRK6mKNcSq'];_0x25db=function(){return _0xde8370;};return _0x25db();}function Get_data(){const _0x6e2192=_0x9375b2,_0x293b07=_0x8338;if($request['url'][_0x293b07('0x119')](_0x293b07('0x13f'))>-0x1){const _0x21be5b=$request['headers']['token'];let _0x2991ba=$[_0x293b07('0x173')](_0x293b07('0x107'));if(!_0x2991ba){if(_0x21be5b)$['setdata'](_0x21be5b,_0x6e2192(0x141));}else{if(_0x21be5b)$[_0x293b07('0xff')](_0x21be5b,_0x2991ba+'#soy_daw_token');}const _0x32fe8a=$request[_0x293b07(0xf8)]['user-agent'];if(_0x32fe8a)$['setdata'](_0x32fe8a,_0x6e2192('0xf0'));}}function soy_daw_poollist(){return new Promise((_0xec84b0,_0x13584e)=>{const _0x484561=_0x53e0;$[_0x484561(0x10c)]({'url':'https://v3.sdk.haowusong.com/api/channel/integral/pool?channel=dawbox-android','headers':soy_daw_headers},async(_0x270dec,_0x220fdf,_0x1091be)=>{const _0xa1cf63=_0x484561,_0x2550e9=_0x4f50,_0x1a454d=_0x8338;try{let _0x26ba2f=JSON[_0x1a454d('0x11d')](_0x1091be);if(_0x26ba2f[_0x1a454d('0xf9')]==0xc8){ad_num=_0x26ba2f[_0x1a454d('0x170')][_0x1a454d('0x13d')][_0x1a454d(0x10d)][0x0]['complete_num'],can_num=_0x26ba2f[_0x1a454d(0x170)][_0x2550e9(0xec,'LWML')][_0x1a454d('0x10e')],integral_num=_0x26ba2f[_0x1a454d(0x170)][_0x2550e9('0x174','M6JO')][_0x2550e9('0x12e','ajo*')],DBA_num=_0x26ba2f[_0x1a454d('0x170')][_0xa1cf63(0x164)][_0x2550e9('0x12c','c!Mz')];if(ad_num==0xa){if(can_num==0x1){let _0x14d4e8=Math['floor'](_0x26ba2f['data'][_0x1a454d('0x14a')][_0xa1cf63('0x105')]/ integral_num)*integral_num;await soy_daw_put(_0x14d4e8);};console[_0x2550e9(0x14d,'s5Km')]('\x0a【'+$['name']+_0xa1cf63(0x144)+$['index']+_0xa1cf63(0x114)+_0x26ba2f[_0x1a454d('0x170')][_0x2550e9(0x139,'C(]B')][_0xa1cf63(0x105)]+_0x1a454d('0x11b')+_0x26ba2f[_0x2550e9(0x154,'6Qgj')][_0x1a454d(0x14a)]['money']+'\x0a---已投DBA数量：'+_0x26ba2f[_0xa1cf63(0x135)]['player']['use_integral_num']),subTitle+='\x0a【'+$[_0xa1cf63(0x163)]+_0xa1cf63(0x144)+$[_0xa1cf63('0x169')]+_0x1a454d(0x160)+_0x26ba2f[_0x1a454d('0x170')][_0x2550e9(0x157,'Rm0N')][_0x2550e9('0x172',']z!R')]+_0x1a454d('0x11b')+_0x26ba2f['data']['player'][_0xa1cf63(0x133)]+_0x2550e9(0x145,'bsD6')+_0x26ba2f['data'][_0x1a454d(0x14a)][_0xa1cf63('0x153')];}else{await soy_daw_receive();if(can_num==0x1){let _0x44e9d3=Math[_0x2550e9('0x14c','I4hD')](_0x26ba2f[_0x2550e9(0x12b,'wvCc')][_0xa1cf63(0x164)]['integral_num']/ integral_num)*integral_num;await soy_daw_put(_0x44e9d3);};};}else console['log']('\x0a【'+$['name']+_0xa1cf63(0x144)+$[_0xa1cf63(0x169)]+_0x2550e9(0xf4,'sy7i'));;}catch(_0x3dea98){console['log'](_0x3dea98);}finally{_0xec84b0();};});});};function _0x8338(_0x4bc803,_0x45dde0){const _0x25db8b=_0x25db();return _0x8338=function(_0x83383f,_0x53d4bc){_0x83383f=_0x83383f-0xe2;let _0x55bb50=_0x25db8b[_0x83383f];return _0x55bb50;},_0x8338(_0x4bc803,_0x45dde0);}function _0x53e0(_0x4bc803,_0x45dde0){const _0x25db8b=_0x25db();return _0x53e0=function(_0x83383f,_0x53d4bc){_0x83383f=_0x83383f-0xe2;let _0x55bb50=_0x25db8b[_0x83383f];if(_0x53e0['DScmUj']===undefined){var _0x229ad7=function(_0x53e082){const _0x3a01c2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x358e8e='',_0x2c277a='';for(let _0xc61073=0x0,_0x215d4f,_0x385e65,_0x4f50e5=0x0;_0x385e65=_0x53e082['charAt'](_0x4f50e5++);~_0x385e65&&(_0x215d4f=_0xc61073%0x4?_0x215d4f*0x40+_0x385e65:_0x385e65,_0xc61073++%0x4)?_0x358e8e+=String['fromCharCode'](0xff&_0x215d4f>>(-0x2*_0xc61073&0x6)):0x0){_0x385e65=_0x3a01c2['indexOf'](_0x385e65);}for(let _0x3b0900=0x0,_0x5603f7=_0x358e8e['length'];_0x3b0900<_0x5603f7;_0x3b0900++){_0x2c277a+='%'+('00'+_0x358e8e['charCodeAt'](_0x3b0900)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2c277a);};_0x53e0['yUHaFt']=_0x229ad7,_0x4bc803=arguments,_0x53e0['DScmUj']=!![];}const _0xbcca9c=_0x25db8b[0x0],_0x274d5f=_0x83383f+_0xbcca9c,_0x49d570=_0x4bc803[_0x274d5f];return!_0x49d570?(_0x55bb50=_0x53e0['yUHaFt'](_0x55bb50),_0x4bc803[_0x274d5f]=_0x55bb50):_0x55bb50=_0x49d570,_0x55bb50;},_0x53e0(_0x4bc803,_0x45dde0);}function soy_daw_receive(){return new Promise((_0x2ef0cc,_0xbbb747)=>{const _0x2ffc5d=_0x8338,_0x26e03d=_0x4f50,_0x1d4772=_0x53e0;$[_0x1d4772('0x12d')]({'url':_0x26e03d(0x15d,'c!Mz'),'headers':{'Host':_0x1d4772(0x14b),'user-agent':soy_daw_UA,'token':soy_daw_token,'Content-Type':_0x26e03d('0xe4','aoN)'),'origin':_0x1d4772('0x11c'),'x-requested-with':_0x26e03d(0x13a,'zTZK'),'sec-fetch-site':_0x1d4772('0x143'),'sec-fetch-mode':_0x2ffc5d('0x137'),'sec-fetch-dest':_0x26e03d('0xee','%K2n')},'body':_0x1d4772('0x13e')},async(_0x35f410,_0x50cb8f,_0x1f7913)=>{const _0x43a08c=_0x1d4772,_0x1b8dcb=_0x2ffc5d,_0xbb5be8=_0x26e03d;try{let _0x364272=JSON[_0xbb5be8('0xf3','FVCu')](_0x1f7913);if(_0x364272[_0x1b8dcb('0xf9')]==0xc8){console[_0x43a08c(0x155)]('\x0a【'+$[_0x43a08c(0x163)]+_0xbb5be8('0x128','HC%W')+$[_0x1b8dcb('0x108')]+_0x43a08c(0x123));let _0x28ee4e=Math[_0x1b8dcb('0x126')](Math[_0x43a08c(0x103)]()*(0xf618-0xee48+0x3e8)+0xee48);console[_0x1b8dcb('0x156')]('\x0a【'+$[_0x1b8dcb('0x165')]+_0x1b8dcb('0xf7')+$['index']+_0x43a08c('0x146')+_0x28ee4e+_0x1b8dcb(0x16c)),await $[_0x1b8dcb('0x14f')](_0x28ee4e),await soy_daw_receive();}else _0x364272[_0x43a08c('0x162')]['indexOf']('仓库已存满')>-0x1?await soy_daw_put(0x4e20):console[_0xbb5be8('0xe2','tmVh')]('\x0a【'+$['name']+_0x43a08c(0x144)+$[_0x1b8dcb(0x108)]+_0x43a08c(0x138)+_0x364272[_0x43a08c(0x162)]);}catch(_0x51ceff){console[_0xbb5be8('0x131','sy7i')](_0x51ceff);}finally{_0x2ef0cc();}});});}function soy_daw_put(_0x3d352a){return new Promise((_0x33d025,_0x452af2)=>{const _0xfcabeb=_0x4f50,_0x24dd0d=_0x8338;$[_0x24dd0d(0x116)]({'url':'https://v3.sdk.haowusong.com/api/channel/integral/put?channel=dawbox-lot-android&num='+_0x3d352a+_0xfcabeb('0xf5','bsD6'),'headers':soy_daw_headers,'body':''},async(_0x1bfc5f,_0x2a5edf,_0x4990d6)=>{const _0x4e706b=_0xfcabeb,_0x27ef5f=_0x24dd0d,_0x1f9899=_0x53e0;try{let _0x3f4928=JSON[_0x1f9899(0x168)](_0x4990d6);_0x3f4928[_0x27ef5f('0xf9')]==0xc8?(console[_0x27ef5f('0x156')]('\x0a【'+$['name']+_0x1f9899(0x144)+$[_0x4e706b('0x100','M6JO')]+_0x4e706b(0x121,'%&xc')+_0x3d352a+_0x4e706b('0x166','(Dsz')),subTitle+='\x0a【'+$[_0x27ef5f(0x165)]+_0x4e706b(0x10f,'LWML')+$[_0x4e706b('0x15f','BO2I')]+_0x1f9899(0xef)+_0x3d352a+'\x20DAB币成功~'):console['log']('\x0a【'+$['name']+_0x1f9899(0x144)+$[_0x1f9899(0x169)]+_0x1f9899(0xfb)+_0x3f4928[_0x1f9899('0x162')]);}catch(_0x2b9f8b){console[_0x1f9899(0x155)](_0x2b9f8b);}finally{_0x33d025();}});});}

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