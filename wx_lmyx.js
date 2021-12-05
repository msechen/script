/*

软件名称:链萌优选

项目注册地址(微信打开):https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx592b7bf2a9f7f003&redirect_uri=https://v3.sdk.haowusong.com/api/auth/wechat/sharelogin&response_type=code&scope=snsapi_userinfo&state=AAABOSA9,lmyxbox-android#wechat_redirect

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

soy_lmyx_data
#抓包时的请求头上的token


选填变量
soy_lmyx_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 换行 隔开

v2p重写配置如下(不一定行,不能一定不行):

REWRITE 中的 匹配链接（正则表达式）
https://v3.sdk.haowusong.com/api/box/wallet/info 

REWRITE 中的 重写方式
app_lmyx.js

MITM 中的 解析域名
v3.sdk.haowusong.com

cron "3 0,9,17 * * *"

*/


const $ = new Env('链萌优选');
const notify = $.isNode() ? require('./sendNotify') : '';


const _0x5758fc=_0x69f2,_0x338c18=_0xa029;(function(_0x13cce4,_0x45072f){const _0x16c3de=_0x4ffe,_0x362309=_0xa029,_0x2bb64b=_0x69f2,_0x4856d0=_0x13cce4();while(!![]){try{const _0x3a9334=parseInt(_0x2bb64b('0xef'))/0x1*(-parseInt(_0x2bb64b('0xe8'))/0x2)+parseInt(_0x2bb64b(0xfd))/0x3*(parseInt(_0x362309(0x107))/0x4)+-parseInt(_0x362309('0xb6'))/0x5+-parseInt(_0x2bb64b(0xbe))/0x6*(-parseInt(_0x2bb64b('0x11a'))/0x7)+parseInt(_0x362309('0x127'))/0x8*(-parseInt(_0x2bb64b('0xbb'))/0x9)+-parseInt(_0x16c3de('0x109','UppI'))/0xa+parseInt(_0x362309(0xc1))/0xb*(parseInt(_0x2bb64b('0xf8'))/0xc);if(_0x3a9334===_0x45072f)break;else _0x4856d0['push'](_0x4856d0['shift']());}catch(_0x52a2b7){_0x4856d0['push'](_0x4856d0['shift']());}}}(_0x55a0,0x660b3));let app_soy_lmyx_data=[],app_soy_lmyx_UA=[];function _0x4ffe(_0x28e5e8,_0x2b675b){const _0x55a028=_0x55a0();return _0x4ffe=function(_0xa02974,_0x3a9e14){_0xa02974=_0xa02974-0xb6;let _0x213e5c=_0x55a028[_0xa02974];if(_0x4ffe['DWboES']===undefined){var _0x4d6a75=function(_0x170a56){const _0x3198f2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x162bf7='',_0x2edfff='';for(let _0x46c447=0x0,_0x2b1592,_0x4ffe15,_0x46d354=0x0;_0x4ffe15=_0x170a56['charAt'](_0x46d354++);~_0x4ffe15&&(_0x2b1592=_0x46c447%0x4?_0x2b1592*0x40+_0x4ffe15:_0x4ffe15,_0x46c447++%0x4)?_0x162bf7+=String['fromCharCode'](0xff&_0x2b1592>>(-0x2*_0x46c447&0x6)):0x0){_0x4ffe15=_0x3198f2['indexOf'](_0x4ffe15);}for(let _0x612f93=0x0,_0x5edbff=_0x162bf7['length'];_0x612f93<_0x5edbff;_0x612f93++){_0x2edfff+='%'+('00'+_0x162bf7['charCodeAt'](_0x612f93)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2edfff);};const _0x69f2f6=function(_0x2bb35b,_0x51a5a8){let _0x51fe42=[],_0x3ea52e=0x0,_0x54a624,_0x49d55f='';_0x2bb35b=_0x4d6a75(_0x2bb35b);let _0x2d1aaa;for(_0x2d1aaa=0x0;_0x2d1aaa<0x100;_0x2d1aaa++){_0x51fe42[_0x2d1aaa]=_0x2d1aaa;}for(_0x2d1aaa=0x0;_0x2d1aaa<0x100;_0x2d1aaa++){_0x3ea52e=(_0x3ea52e+_0x51fe42[_0x2d1aaa]+_0x51a5a8['charCodeAt'](_0x2d1aaa%_0x51a5a8['length']))%0x100,_0x54a624=_0x51fe42[_0x2d1aaa],_0x51fe42[_0x2d1aaa]=_0x51fe42[_0x3ea52e],_0x51fe42[_0x3ea52e]=_0x54a624;}_0x2d1aaa=0x0,_0x3ea52e=0x0;for(let _0x5d1e85=0x0;_0x5d1e85<_0x2bb35b['length'];_0x5d1e85++){_0x2d1aaa=(_0x2d1aaa+0x1)%0x100,_0x3ea52e=(_0x3ea52e+_0x51fe42[_0x2d1aaa])%0x100,_0x54a624=_0x51fe42[_0x2d1aaa],_0x51fe42[_0x2d1aaa]=_0x51fe42[_0x3ea52e],_0x51fe42[_0x3ea52e]=_0x54a624,_0x49d55f+=String['fromCharCode'](_0x2bb35b['charCodeAt'](_0x5d1e85)^_0x51fe42[(_0x51fe42[_0x2d1aaa]+_0x51fe42[_0x3ea52e])%0x100]);}return _0x49d55f;};_0x4ffe['ZmiuGP']=_0x69f2f6,_0x28e5e8=arguments,_0x4ffe['DWboES']=!![];}const _0x406b93=_0x55a028[0x0],_0x543a12=_0xa02974+_0x406b93,_0x496341=_0x28e5e8[_0x543a12];return!_0x496341?(_0x4ffe['sJBxAs']===undefined&&(_0x4ffe['sJBxAs']=!![]),_0x213e5c=_0x4ffe['ZmiuGP'](_0x213e5c,_0x3a9e14),_0x28e5e8[_0x543a12]=_0x213e5c):_0x213e5c=_0x496341,_0x213e5c;},_0x4ffe(_0x28e5e8,_0x2b675b);}!(async()=>{const _0x5ef6ce=_0x69f2,_0x1461f3=_0xa029,_0x48051f=_0x4ffe;typeof $request!==_0x48051f(0xe0,'*SqA')&&await Get_data();if($[_0x1461f3('0xf0')]()){if(!process[_0x48051f(0xd1,']Y7N')][_0x48051f('0x131','5%81')]){console[_0x5ef6ce('0x10e')]('\x0a【'+$[_0x5ef6ce('0x102')]+_0x48051f(0x10c,'cOOJ'));return;}if(process[_0x5ef6ce('0x120')][_0x5ef6ce(0xf5)]&&process['env'][_0x5ef6ce('0xf5')]['indexOf']('@')>-0x1)app_soy_lmyx_data=process[_0x5ef6ce('0x120')][_0x48051f('0xe4','JdSa')][_0x5ef6ce('0xc6')]('@');else{if(process[_0x5ef6ce('0x120')][_0x5ef6ce(0xf5)]&&process[_0x1461f3(0x10f)]['soy_lmyx_data']['indexOf']('\x0a')>-0x1)app_soy_lmyx_data=process[_0x48051f(0x11b,'Rc&B')][_0x48051f('0x106','lbLy')][_0x5ef6ce(0xc6)]('\x0a');else process[_0x1461f3('0x10f')][_0x1461f3(0xd5)]&&process[_0x48051f(0x125,'5%81')][_0x5ef6ce(0xf5)]['indexOf']('#')>-0x1?app_soy_lmyx_data=process[_0x1461f3(0x10f)]['soy_lmyx_data'][_0x48051f(0x137,'EU&*')]('#'):app_soy_lmyx_data=process[_0x1461f3(0x10f)][_0x48051f('0x139','60s0')][_0x5ef6ce(0xc6)]();};}else{if(!$[_0x1461f3(0xe1)]('soy_lmyx_data')){console[_0x1461f3('0xe7')]('\x0a【'+$[_0x5ef6ce('0x102')]+'】：未填写相应变量\x20soy_lmyx_data');return;}if($[_0x5ef6ce(0xb8)](_0x48051f(0xf2,'ARFH'))&&$[_0x5ef6ce(0xb8)](_0x1461f3(0xd5))[_0x5ef6ce(0xc4)]('@')>-0x1)app_soy_lmyx_data=$[_0x48051f('0x129','yc88')](_0x48051f('0xc2','CzZ$'))[_0x48051f('0xf4','5%81')]('@');else{if($['getdata'](_0x1461f3(0xd5))&&$[_0x48051f(0x124,'vUUG')]('soy_lmyx_data')[_0x5ef6ce(0xc4)]('\x0a')>-0x1)app_soy_lmyx_data=$[_0x1461f3(0xe1)](_0x48051f(0x108,'oe)r'))[_0x1461f3(0x13c)]('\x0a');else $[_0x5ef6ce(0xb8)](_0x1461f3('0xd5'))&&$['getdata']('soy_lmyx_data')[_0x5ef6ce('0xc4')]('#')>-0x1?app_soy_lmyx_data=$[_0x1461f3(0xe1)](_0x5ef6ce(0xf5))[_0x1461f3(0x13c)]('#'):app_soy_lmyx_data=$['getdata'](_0x48051f('0xc8',']Y7N'))[_0x48051f('0xfa','o4SP')]();};}console[_0x5ef6ce(0x10e)](_0x1461f3('0xf3')+new Date(new Date()[_0x5ef6ce(0xf6)]()+new Date()[_0x48051f('0xcd','8S(v')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x48051f('0x132','ahVL')),console[_0x5ef6ce('0x10e')](_0x48051f(0xdc,'kpYZ')+app_soy_lmyx_data[_0x5ef6ce(0xd4)]+'\x20个账号】===\x0a'),subTitle='';for(i=0x0;i<app_soy_lmyx_data[_0x1461f3('0x11c')];i++){soy_lmyx_data=app_soy_lmyx_data[i][_0x1461f3('0x13c')]('&'),soy_lmyx_token=soy_lmyx_data[0x0],soy_lmyx_version=soy_lmyx_data[0x1],soy_lmyx_UA=soy_lmyx_data[0x2],!soy_lmyx_UA&&(soy_lmyx_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'),$[_0x5ef6ce('0x119')]=i+0x1,console[_0x1461f3('0xe7')]('\x0a开始【第\x20'+$[_0x1461f3('0x121')]+_0x48051f('0xe2','kpYZ')),await implement();};notify&&(subTitle&&await notify['sendNotify']($[_0x48051f(0xcf,'l78D')],subTitle));})()['catch'](_0x3ea52e=>$[_0x338c18('0xe9')](_0x3ea52e))['finally'](()=>$[_0x5758fc('0xc5')]());function Get_data(){const _0x2ecc15=_0x338c18,_0x160cde=_0x5758fc,_0x26885f=_0x4ffe;if($request['url']['indexOf'](_0x26885f(0xcb,'[l$M'))>-0x1){const _0x54a624=$request[_0x26885f(0x123,'KKq$')][_0x160cde(0xd9)];let _0x49d55f=$[_0x160cde(0xb8)](_0x26885f('0xd8','8nGY'));if(!_0x49d55f){if(_0x54a624)$['setdata'](_0x54a624,_0x2ecc15('0xd5'));}else{if(_0x54a624)$[_0x26885f('0x117','Qo*W')](_0x54a624,_0x49d55f+_0x26885f('0x10a','KZBk'));}const _0x2d1aaa=$request[_0x160cde(0x135)]['user-agent'];if(_0x2d1aaa)$['setdata'](_0x2d1aaa,_0x160cde('0x128'));}}function _0x69f2(_0x28e5e8,_0x2b675b){const _0x55a028=_0x55a0();return _0x69f2=function(_0xa02974,_0x3a9e14){_0xa02974=_0xa02974-0xb6;let _0x213e5c=_0x55a028[_0xa02974];if(_0x69f2['akEQvu']===undefined){var _0x4d6a75=function(_0x69f2f6){const _0x170a56='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3198f2='',_0x162bf7='';for(let _0x2edfff=0x0,_0x46c447,_0x2b1592,_0x4ffe15=0x0;_0x2b1592=_0x69f2f6['charAt'](_0x4ffe15++);~_0x2b1592&&(_0x46c447=_0x2edfff%0x4?_0x46c447*0x40+_0x2b1592:_0x2b1592,_0x2edfff++%0x4)?_0x3198f2+=String['fromCharCode'](0xff&_0x46c447>>(-0x2*_0x2edfff&0x6)):0x0){_0x2b1592=_0x170a56['indexOf'](_0x2b1592);}for(let _0x46d354=0x0,_0x612f93=_0x3198f2['length'];_0x46d354<_0x612f93;_0x46d354++){_0x162bf7+='%'+('00'+_0x3198f2['charCodeAt'](_0x46d354)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x162bf7);};_0x69f2['PLwBAC']=_0x4d6a75,_0x28e5e8=arguments,_0x69f2['akEQvu']=!![];}const _0x406b93=_0x55a028[0x0],_0x543a12=_0xa02974+_0x406b93,_0x496341=_0x28e5e8[_0x543a12];return!_0x496341?(_0x213e5c=_0x69f2['PLwBAC'](_0x213e5c),_0x28e5e8[_0x543a12]=_0x213e5c):_0x213e5c=_0x496341,_0x213e5c;},_0x69f2(_0x28e5e8,_0x2b675b);}function _0x55a0(){const _0x1193c5=['WQrKW4NdOfa','yJRdJG','\x20签到】:\x20','m0TUqM1UCq','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','W67KUBVLIRJLIB/OOlhJGjiBxEISPowpRowML+I2R1VLJlROGBzJvJGNW4tLT7FOVyBMNBO','W6xJGl8te8kV6isk5P6k5O6m56sDWPagmEI2VowoSSoy','eCoQW74','BMfTzq','W58dfSkwimorCgVdMYC','W7ddSsPGtsxdPM0TfuqaWPldH0XmDM/dUGddPSoUyxfvtstdTKdcOSkrW7RcIq','WRZcRdi','WQDLymo2W6/dUdioWQvMkt/cTG','2330236ACaLup','amkXiSkmWOtdPhzrjdVdLdlcTW','WPBdGI80W57cGW3cML9Xyb3cVW','CmklWRhdICoVWRfdvCkwWRpdPqaUaa','ioETVUwiSooaKtOG572r57UC6k+35Rgc5AsX6lsL','44c1772y5P2/5AkM5yEF55UC5BMk5y296yAqWOBdHNPItNa3m8ofWRuzW5NcNs4','D+ocLCoQFcNOHR3MN7dMJ7JNP7ytWPXF6lw75yYRCG','Bg9N','env','&_platform=wx','look_video_ad','y29Kzq','WQLzwwldGGXk','WPNPOzhLI7NNURZJGAHJsa','WOZcLYhcSJa','WO/cMYpdHNT1lNThWQBcH8og','WQJcRdicWRjYW6i','msg','Aw5KzxG','n1jYugTXuG','nLJcJa','length','WQrGW4RdU0hcImkgWQxcJmkIkXVcOfxdUGhcQmoJWOuzW4HGWOqkWQGYW4FcOCorAfbxW5XAWRtdMeWlxbvIWRtdSmogW4JdVmk4kCoalCotWROPWQhcNSogkmkziY5yW7FcV8kJzmokzIhdGNzZW7KUDGG','W5VKUQxLIzpLIQtOOPZJGy7dOmk8','\x20任务列表】:\x20网络请求失败','zw52','index','D2fPDa','khNdRbXlfda','W7BdPc5OrtldPG','WP/cMMG','eUodNSogW5JcG+IgVoADR+ApOUEMPCkvW7mJ6lsz5y2Anq','48WmukLG','C295x2XTExHFvue','bCkbgrqwFJC','\x0a【soy脚本提示---账号\x20','W53JGitdLSoMxEIhJEAFG+AmKEEMI8k+ietOTRVLJ4pcQG','z2v0tw9UDgG','jL9WBgf0zM9YBt13Ea','ioMIHUwiHUE6OUoaKtOG572r57UC6k+35Rgc5AsX6lsL','A2vLCc1HBgL2zq','WQxLH7JMJQRPGlpOOBdORiNJGOxdSsW','WONcM2DIW6b3WRHNm2tdKK/cOa','ystdOaFdJq','rY0XWQG','yYBdJG','AgvHzgvYCW','WRpJG4FcJhea6iwd5P2e5O+M56sRW6ldS8o86lwl5y2ZWQS','WQ/dN2r4WQa','jL92zxjZAw9Upq','ECoHW4fsW4NdQmkWWPLmkqNdU8oF','parse','get','split','592470FoOTue','W6RJGl7dTmoWkUIgLUAETEAnT+ELNmkyteNOT7FLJ4hcNq','z2v0zgf0yq','W57JGjPQW4BdUUIgJ+ADP+AoPUENGc9LzUI3SEwmL8kC','3KnBmnq','nZq5mti0uxjxtxr5','ios7U+wkOEwiL+IHQooaKtOG572r57UC6k+35Rgc5AsX6lsL','mJmZmdiZnKfdyuX1Ca','mJiWnZiYA0vksfnp','z8o9W58','WPyTWPu','22QqzvwE','W6rTW7ldNSkad1FcISkBpmo8CKS','\x20观看广告】:\x20','Aw5KzxHpzG','zg9Uzq','C3bSAxq','W6NdHSkV','WOGXWOVdRmkymSkJW6rVWRpcV8oBwW','2WaafgF','WR1NW5BdJCkIBmkhWO8ZmCo/Fsy4','rctcR23dRSowoq','WO/JGRNcU0zf6iEs5P645OYB56s2W5tcIsNOTlVLJkddGq','W6SFWOusWPTlWRlcMCkdoSk5tsddUHXrW68','jehcJwNdUSkdrCoJW6tdPfJcT10','m8oMj8ov','W4lcN3W','WP4WWOq','zgf0yq','W5q6WPOQhmkpiCowWR0GxqXC','BgvUz3rO','soy_lmyx_data','\x20领分红】:\x20网络请求失败','W6a4WOC','W61KuM3dHrbHW5xcVwxdJ8kkn8oi','Dg9Rzw4','W6RLVk7LPyZJGO/NRB/cRa','pmk4W5NdKZrthd0Xs8kHa8kp','W5iOfoodVowhRtS','W7TTW6W','mN3dOXXbcW','https://www.lmyx.shop/web/index.php?','WOBcS8o/WOT4WRJcVqyo','getdata','W4/KUl/OTi/LJjVKUAFLIRRJGku','W6SYWPq','WOOZgCkSpSopyhZdQN7dSNdcVq','W5NKUQFLI4hLI6tOOlRJGRmJja','BxnN','log','mLDHywzNrG','logErr','ioINGUECI+w5V+wrIUoaKtOG572r57UC6k+35Rgc5AsX6lsL','WOGQWP3dGCkramkZW7GnW6BdUmoDb2qgjCoysSormqtdUeTCWQBcOCowW50eW6tdLvy0W6xdNmk4W7Tcn8omge/cNCoGWR49WPxdOu4YyCkEtwSvEsVdRmoYWPddLmkytvBcV8o7x3VdM2JdH03cVCk6dW','W7jKta','cEobQbPjm+IfUEADT+AmUEEMVhW1WQ7OTRxLJ5JdUq','WP7cRSo8','ntqWnteXEe9pC0D1','isNode','gzip,compress,br,deflate','vcVcRCocySoKzqtcHmoltcvB','\x0a===\x20脚本执行\x20-\x20北京时间：','WONcHhjuW7G','C295x2XTExHFzgf0yq','z2v0vgLTzq','ioINGUECI+w5V+wrIUoaKtOG','mta2otiWmtj4BLLTt3G','iowfKEAnOUMaMUIHJoIVGEoaKtOG572r57UC6k+35Rgc5AsX6lsL'];_0x55a0=function(){return _0x1193c5;};return _0x55a0();}async function implement(){const _0x587e7c=_0x5758fc,_0x1ba448=_0x4ffe,_0x5b4e33=_0x338c18;host=_0x5b4e33('0xdf'),console['log'](_0x1ba448('0xda','O5md')+$[_0x587e7c(0x119)]+'\x20个账号任务】'),await soy_lmyx_tasklist();}function soy_lmyx_tasklist(){const _0x2f3e07=_0x5758fc,_0x19ae2a=_0x4ffe;let _0x5d1e85=Get_request('store_id=1&r=api/shareholder/index/bonus-index&access_token='+soy_lmyx_token+_0x19ae2a(0x103,'JdSa')+soy_lmyx_version+_0x2f3e07('0x12d'));return new Promise((_0xea617,_0x40a9ed)=>{const _0x4a6479=_0x19ae2a;$[_0x4a6479(0xe3,'&LCF')](_0x5d1e85,async(_0x27d60d,_0x1816f2,_0x5cace0)=>{const _0x735556=_0x69f2,_0x38e528=_0xa029,_0x2a77b7=_0x4a6479;try{if(_0x27d60d)console[_0x2a77b7('0xdd','CzZ$')](_0x2a77b7('0x100','jfd7')+$[_0x38e528('0x121')]+_0x38e528('0x11f')),subTitle+=_0x38e528(0x12a)+$[_0x735556(0x119)]+'\x20任务列表】:\x20网络请求失败';else{console[_0x2a77b7(0xec,'8nGY')](_0x5cace0);let _0x216b17=JSON['parse'](_0x5cace0);if(_0x216b17['code']==0x0){is_sign=_0x216b17[_0x735556('0xd2')]['is_sign'],is_browse=_0x216b17['data']['is_browse'],look_AD=_0x216b17[_0x735556('0xd2')][_0x38e528('0x111')];is_sign==0x0&&await soy_lmyx_sign();is_browse==0x0&&await soy_lmyx_browse();for(let _0x3c99d8=0x0;_0x3c99d8<0x5;_0x3c99d8++){await soy_lmyx_video_ad();let _0x2f2587=Math['floor'](Math[_0x2a77b7('0xde','KKq$')]()*(0x7530-0x61a8+0x3e8)+0x61a8);await $[_0x735556(0x122)](_0x2f2587);}await soy_lmyx_exchange(),await soy_lmyx_shareholder();}else console[_0x2a77b7(0x101,'#sLg')](_0x2a77b7('0x126','z1r*')+$[_0x38e528('0x121')]+_0x2a77b7('0xff','uBqi'));}}catch(_0x165cb4){console[_0x735556('0x10e')](_0x165cb4,_0x1816f2);}finally{_0xea617();}});});}function soy_lmyx_browse(){let _0x3ea247=Get_request('store_id=1&r=api/shareholder/index/browse-bonus&access_token='+soy_lmyx_token+'&_version='+soy_lmyx_version+'&_platform=wx');return new Promise((_0x59c1f8,_0x3cd563)=>{const _0x90af38=_0x4ffe;$[_0x90af38('0x105','Qo*W')](_0x3ea247,async(_0x55ebc6,_0x115732,_0x27e7b4)=>{const _0x2349de=_0x90af38,_0x393e13=_0x69f2,_0x566631=_0xa029;try{if(_0x55ebc6)console['log'](_0x566631('0x12a')+$['index']+_0x393e13(0xbc)),subTitle+=_0x2349de(0x10d,'#sLg')+$[_0x566631('0x121')]+_0x566631('0x11f');else{console[_0x566631(0xe7)](_0x27e7b4);let _0x50332a=JSON[_0x566631(0x13a)](_0x27e7b4);_0x50332a['code']==0x0?console['log'](_0x2349de(0x12b,'o4SP')+$[_0x566631('0x121')]+_0x2349de('0xe5','JdSa')+_0x50332a[_0x2349de(0xc0,']Y7N')]):console[_0x566631('0xe7')](_0x393e13(0xfe)+$[_0x2349de('0x115','hd1b')]+_0x2349de(0x11e,']Y7N')+_0x50332a[_0x566631('0x118')]);}}catch(_0x22a3ca){console[_0x566631('0xe7')](_0x22a3ca,_0x115732);}finally{_0x59c1f8();}});});}function soy_lmyx_sign(){const _0x250e7c=_0x4ffe;let _0x55510c=Get_request('store_id=1&r=api/integralmall/integralmall/register&today='+formatDate()+'&access_token='+soy_lmyx_token+'&_version='+soy_lmyx_version+_0x250e7c(0xdb,'5hjL'));return new Promise((_0x506f5a,_0x5a24bc)=>{$['get'](_0x55510c,async(_0x5a99cd,_0x3d6e22,_0x5a4a30)=>{const _0x1dc23d=_0x4ffe,_0x568100=_0xa029,_0x4d332f=_0x69f2;try{if(_0x5a99cd)console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x4d332f(0x10b)),subTitle+=_0x4d332f(0xfe)+$[_0x568100('0x121')]+'\x20签到】:\x20网络请求失败';else{console['log'](_0x5a4a30);let _0x1e4820=JSON['parse'](_0x5a4a30);_0x1e4820['code']==0x0?console[_0x1dc23d('0xd7','&LCF')](_0x568100('0x12a')+$[_0x568100('0x121')]+_0x568100('0xfc')+_0x1e4820[_0x568100(0x118)]):console[_0x1dc23d(0xc7,'4AWT')](_0x1dc23d('0x136','H06*')+$[_0x4d332f('0x119')]+'\x20签到】:\x20'+_0x1e4820['msg']);}}catch(_0x3090e5){console[_0x1dc23d('0x134','pSG@')](_0x3090e5,_0x3d6e22);}finally{_0x506f5a();}});});}function soy_lmyx_video_ad(){const _0x18bd28=_0x5758fc,_0xf4674f=_0x4ffe;let _0x527af3=Get_request(_0xf4674f(0xeb,']Y7N')+soy_lmyx_token+_0x18bd28('0x138')+soy_lmyx_version+_0x18bd28(0x12d));return new Promise((_0x15963a,_0x2b8e05)=>{const _0x297dee=_0xa029;$[_0x297dee('0x13b')](_0x527af3,async(_0x2cf0f3,_0x4d3171,_0x5cb565)=>{const _0x352031=_0x69f2,_0x2d9730=_0x297dee,_0x5c9465=_0x4ffe;try{if(_0x2cf0f3)console['log'](_0x5c9465(0xb9,'lbLy')+$[_0x2d9730(0x121)]+_0x352031('0xea')),subTitle+=_0x352031(0xfe)+$['index']+_0x352031('0xea');else{console[_0x2d9730('0xe7')](_0x5cb565);let _0x3ee497=JSON[_0x2d9730('0x13a')](_0x5cb565);_0x3ee497[_0x352031('0x112')]==0x0?console['log'](_0x2d9730('0x12a')+$['index']+_0x352031('0xf7')+_0x3ee497[_0x5c9465('0xee','*SqA')]):console[_0x2d9730(0xe7)](_0x2d9730('0x12a')+$[_0x352031('0x119')]+_0x2d9730('0xc3')+_0x3ee497[_0x352031(0xe6)]);}}catch(_0x2a1748){console[_0x2d9730(0xe7)](_0x2a1748,_0x4d3171);}finally{_0x15963a();}});});}function soy_lmyx_exchange(){const _0x44f1d5=_0x4ffe;let _0x565180=Get_request('store_id=1&r=api/shareholder/index/bonus-quota-exchange&access_token='+soy_lmyx_token+'&_version='+soy_lmyx_version+_0x44f1d5('0xd3','ZVJD'));return new Promise((_0x5f1b62,_0xce147c)=>{const _0x1ea296=_0xa029;$[_0x1ea296(0x13b)](_0x565180,async(_0x45eaf8,_0x2d4b02,_0xf8b9e0)=>{const _0x32baa5=_0x1ea296,_0x42efdf=_0x69f2,_0x4b47cb=_0x4ffe;try{if(_0x45eaf8)console['log'](_0x4b47cb('0xed','g#Hb')+$['index']+_0x42efdf(0xf9)),subTitle+=_0x32baa5(0x12a)+$[_0x32baa5(0x121)]+'\x20兑换通行证】:\x20网络请求失败';else{console['log'](_0xf8b9e0);let _0x5b6e06=JSON[_0x32baa5(0x13a)](_0xf8b9e0);_0x5b6e06['code']==0x0?console[_0x32baa5('0xe7')](_0x4b47cb(0xb7,'O5md')+$[_0x32baa5('0x121')]+'\x20兑换通行证】:\x20'+_0x5b6e06[_0x42efdf('0xe6')]):console[_0x32baa5(0xe7)]('\x0a【soy脚本提示---账号\x20'+$[_0x42efdf('0x119')]+_0x4b47cb('0x130','4AWT')+_0x5b6e06[_0x4b47cb(0xbf,'60s0')]);}}catch(_0x373476){console[_0x32baa5(0xe7)](_0x373476,_0x2d4b02);}finally{_0x5f1b62();}});});}function soy_lmyx_shareholder(){const _0x3b4b7d=_0x338c18,_0x59a5b0=_0x5758fc,_0x597d1a=_0x4ffe;let _0xa1dd7c=Get_request(_0x597d1a(0x11d,'o4SP')+soy_lmyx_token+_0x59a5b0('0x138')+soy_lmyx_version+_0x3b4b7d('0x110'));return new Promise((_0x49f0d5,_0x502389)=>{$['get'](_0xa1dd7c,async(_0x35c45f,_0x361c45,_0x5db637)=>{const _0x347361=_0x4ffe,_0x2fe6f0=_0xa029,_0x4445e4=_0x69f2;try{if(_0x35c45f)console[_0x4445e4(0x10e)]('\x0a【soy脚本提示---账号\x20'+$[_0x4445e4('0x119')]+_0x4445e4(0x12e)),subTitle+=_0x4445e4('0xfe')+$['index']+_0x2fe6f0(0xd6);else{console[_0x4445e4(0x10e)](_0x5db637);let _0xb07040=JSON['parse'](_0x5db637);_0xb07040[_0x347361('0x133','cOOJ')]==0x0?console[_0x4445e4(0x10e)](_0x347361(0xcc,'4AWT')+$[_0x2fe6f0('0x121')]+'\x20领分红】:\x20'+_0xb07040[_0x2fe6f0(0x118)]):console[_0x347361('0xd0','UppI')](_0x2fe6f0('0x12a')+$[_0x4445e4(0x119)]+_0x347361(0x114,'H06*')+_0xb07040[_0x347361(0xfb,'pSG@')]);}}catch(_0x19f013){console[_0x2fe6f0(0xe7)](_0x19f013,_0x361c45);}finally{_0x49f0d5();}});});}function Get_request(_0x37fd3b){const _0x25ef1d=_0x338c18,_0x199593=_0x5758fc,_0x28b7d7=_0x4ffe;return{'url':''+host+_0x37fd3b,'headers':{'Host':_0x28b7d7('0xce','Rc&B'),'Connection':_0x199593('0x12f'),'charset':'utf-8','User-Agent':soy_lmyx_UA,'content-type':_0x28b7d7('0x104','vUUG'),'Accept-Encoding':_0x25ef1d(0xf1)}};}function _0xa029(_0x28e5e8,_0x2b675b){const _0x55a028=_0x55a0();return _0xa029=function(_0xa02974,_0x3a9e14){_0xa02974=_0xa02974-0xb6;let _0x213e5c=_0x55a028[_0xa02974];return _0x213e5c;},_0xa029(_0x28e5e8,_0x2b675b);};function formatDate(){const _0x3aabb8=_0x5758fc;let _0x4e2bda=new Date(),_0x4f1794=_0x4e2bda['getFullYear'](),_0x217c50=_0x4e2bda[_0x3aabb8('0x12c')]()+0x1,_0x5bcde6=_0x4e2bda['getDate']();return _0x217c50=_0x217c50<0xa?'0'+_0x217c50:_0x217c50,_0x5bcde6=_0x5bcde6<0xa?'0'+_0x5bcde6:_0x5bcde6,_0x4f1794+'/'+_0x217c50+'/'+_0x5bcde6;};


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