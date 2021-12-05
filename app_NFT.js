/*

软件名称:NFT博物馆

项目注册地址:http://nftwatches.net
填写邀请码：680966	送一个雕像,不知道有没有效,我找不到入口,自己进好友界面看看

变量抓取:

必要变量:
变量名 soy_NFT_data
变量值 用户token&视频code2
注释:用户token抓包时域名service.nftbwg.net连接请求头上token值,code2是观看视频是域名cpu-openapi.baidu.com连接上的code2值
注意:点关口视频时提示视频缓存失败质量的是没有这个code2值的

多个号用 @ 或 # 或 换行 隔开

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_NFT.js

*/


const $ = new Env('NFT博物馆');
const notify = $.isNode() ? require('./sendNotify') : '';

function _0x5b5d(_0x2c321f,_0x1c946e){const _0x4175bd=_0x4175();return _0x5b5d=function(_0x5b5dd8,_0x52cba8){_0x5b5dd8=_0x5b5dd8-0x1d1;let _0xfd3aa8=_0x4175bd[_0x5b5dd8];return _0xfd3aa8;},_0x5b5d(_0x2c321f,_0x1c946e);}function _0x1910(_0x2c321f,_0x1c946e){const _0x4175bd=_0x4175();return _0x1910=function(_0x5b5dd8,_0x52cba8){_0x5b5dd8=_0x5b5dd8-0x1d1;let _0xfd3aa8=_0x4175bd[_0x5b5dd8];if(_0x1910['dLOhkl']===undefined){var _0xe8057b=function(_0x3d3985){const _0x1eb3f0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e7ba5='',_0x82b623='';for(let _0x2caf10=0x0,_0x140be7,_0x191021,_0x4bb736=0x0;_0x191021=_0x3d3985['charAt'](_0x4bb736++);~_0x191021&&(_0x140be7=_0x2caf10%0x4?_0x140be7*0x40+_0x191021:_0x191021,_0x2caf10++%0x4)?_0x2e7ba5+=String['fromCharCode'](0xff&_0x140be7>>(-0x2*_0x2caf10&0x6)):0x0){_0x191021=_0x1eb3f0['indexOf'](_0x191021);}for(let _0x205004=0x0,_0x571a76=_0x2e7ba5['length'];_0x205004<_0x571a76;_0x205004++){_0x82b623+='%'+('00'+_0x2e7ba5['charCodeAt'](_0x205004)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x82b623);};const _0x4d7e5c=function(_0x1cb267,_0x2f70d3){let _0x60eb2a=[],_0x66928c=0x0,_0x5cd857,_0x138f0d='';_0x1cb267=_0xe8057b(_0x1cb267);let _0x2cf8c1;for(_0x2cf8c1=0x0;_0x2cf8c1<0x100;_0x2cf8c1++){_0x60eb2a[_0x2cf8c1]=_0x2cf8c1;}for(_0x2cf8c1=0x0;_0x2cf8c1<0x100;_0x2cf8c1++){_0x66928c=(_0x66928c+_0x60eb2a[_0x2cf8c1]+_0x2f70d3['charCodeAt'](_0x2cf8c1%_0x2f70d3['length']))%0x100,_0x5cd857=_0x60eb2a[_0x2cf8c1],_0x60eb2a[_0x2cf8c1]=_0x60eb2a[_0x66928c],_0x60eb2a[_0x66928c]=_0x5cd857;}_0x2cf8c1=0x0,_0x66928c=0x0;for(let _0x3fe7f8=0x0;_0x3fe7f8<_0x1cb267['length'];_0x3fe7f8++){_0x2cf8c1=(_0x2cf8c1+0x1)%0x100,_0x66928c=(_0x66928c+_0x60eb2a[_0x2cf8c1])%0x100,_0x5cd857=_0x60eb2a[_0x2cf8c1],_0x60eb2a[_0x2cf8c1]=_0x60eb2a[_0x66928c],_0x60eb2a[_0x66928c]=_0x5cd857,_0x138f0d+=String['fromCharCode'](_0x1cb267['charCodeAt'](_0x3fe7f8)^_0x60eb2a[(_0x60eb2a[_0x2cf8c1]+_0x60eb2a[_0x66928c])%0x100]);}return _0x138f0d;};_0x1910['omBmKw']=_0x4d7e5c,_0x2c321f=arguments,_0x1910['dLOhkl']=!![];}const _0x20d23a=_0x4175bd[0x0],_0x40e913=_0x5b5dd8+_0x20d23a,_0x43aa18=_0x2c321f[_0x40e913];return!_0x43aa18?(_0x1910['OHPNAS']===undefined&&(_0x1910['OHPNAS']=!![]),_0xfd3aa8=_0x1910['omBmKw'](_0xfd3aa8,_0x52cba8),_0x2c321f[_0x40e913]=_0xfd3aa8):_0xfd3aa8=_0x43aa18,_0xfd3aa8;},_0x1910(_0x2c321f,_0x1c946e);}const _0x4d4e27=_0x4d7e,_0x1e7651=_0x1910,_0xe9ba26=_0x5b5d;(function(_0xdb1af6,_0x3f12b6){const _0x1503ff=_0x4d7e,_0x3341ea=_0x5b5d,_0x36e5e4=_0x1910,_0x178f67=_0xdb1af6();while(!![]){try{const _0x494eb4=parseInt(_0x36e5e4('0x291','jxOf'))/0x1+parseInt(_0x3341ea('0x23d'))/0x2*(-parseInt(_0x1503ff('0x266'))/0x3)+-parseInt(_0x1503ff('0x26f'))/0x4+-parseInt(_0x1503ff(0x246))/0x5*(parseInt(_0x3341ea(0x251))/0x6)+-parseInt(_0x1503ff('0x1e3'))/0x7+-parseInt(_0x36e5e4(0x212,'$GEU'))/0x8*(parseInt(_0x1503ff(0x220))/0x9)+parseInt(_0x1503ff('0x296'))/0xa*(parseInt(_0x3341ea('0x1f8'))/0xb);if(_0x494eb4===_0x3f12b6)break;else _0x178f67['push'](_0x178f67['shift']());}catch(_0x1a7de2){_0x178f67['push'](_0x178f67['shift']());}}}(_0x4175,0xf1b73));function _0x4d7e(_0x2c321f,_0x1c946e){const _0x4175bd=_0x4175();return _0x4d7e=function(_0x5b5dd8,_0x52cba8){_0x5b5dd8=_0x5b5dd8-0x1d1;let _0xfd3aa8=_0x4175bd[_0x5b5dd8];if(_0x4d7e['AVaYGf']===undefined){var _0xe8057b=function(_0x4d7e5c){const _0x3d3985='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1eb3f0='',_0x2e7ba5='';for(let _0x82b623=0x0,_0x2caf10,_0x140be7,_0x191021=0x0;_0x140be7=_0x4d7e5c['charAt'](_0x191021++);~_0x140be7&&(_0x2caf10=_0x82b623%0x4?_0x2caf10*0x40+_0x140be7:_0x140be7,_0x82b623++%0x4)?_0x1eb3f0+=String['fromCharCode'](0xff&_0x2caf10>>(-0x2*_0x82b623&0x6)):0x0){_0x140be7=_0x3d3985['indexOf'](_0x140be7);}for(let _0x4bb736=0x0,_0x205004=_0x1eb3f0['length'];_0x4bb736<_0x205004;_0x4bb736++){_0x2e7ba5+='%'+('00'+_0x1eb3f0['charCodeAt'](_0x4bb736)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2e7ba5);};_0x4d7e['zEcNoB']=_0xe8057b,_0x2c321f=arguments,_0x4d7e['AVaYGf']=!![];}const _0x20d23a=_0x4175bd[0x0],_0x40e913=_0x5b5dd8+_0x20d23a,_0x43aa18=_0x2c321f[_0x40e913];return!_0x43aa18?(_0xfd3aa8=_0x4d7e['zEcNoB'](_0xfd3aa8),_0x2c321f[_0x40e913]=_0xfd3aa8):_0xfd3aa8=_0x43aa18,_0xfd3aa8;},_0x4d7e(_0x2c321f,_0x1c946e);}let NFT_count='',app_soy_NFT_data=[],user_name='',statue='',subTitle='';!(async()=>{const _0x558829=_0x5b5d,_0x1ec1f9=_0x4d7e,_0x11bafa=_0x1910;if(typeof $request!==_0x11bafa('0x1e1','Kurn'))await NFT_getdata();else{if($[_0x11bafa('0x276','KYrS')]()){if(!process[_0x1ec1f9('0x1ed')][_0x558829('0x227')]){console[_0x558829(0x205)]('\x0a【'+$[_0x11bafa(0x1d1,'Hko3')]+_0x1ec1f9('0x1f4'));return;}if(process['env'][_0x558829('0x227')]&&process['env'][_0x11bafa('0x216','lZXH')]['indexOf']('@')>-0x1)app_soy_NFT_data=process[_0x11bafa('0x26e','Kurn')][_0x11bafa(0x1e9,'[crq')][_0x1ec1f9('0x265')]('@');else{if(process['env'][_0x1ec1f9(0x1d6)]&&process[_0x11bafa('0x22d','tli8')][_0x558829('0x227')]['indexOf']('\x0a')>-0x1)app_soy_NFT_data=process[_0x558829('0x254')][_0x558829(0x227)][_0x558829('0x217')]('\x0a');else process['env'][_0x558829(0x227)]&&process[_0x558829('0x254')]['soy_NFT_data'][_0x11bafa(0x27d,'0&f#')]('#')>-0x1?app_soy_NFT_data=process['env'][_0x11bafa(0x247,'8G0u')][_0x11bafa(0x268,'XC0t')]('#'):app_soy_NFT_data=process['env']['soy_NFT_data']['split']();};}else{if(!$[_0x11bafa('0x21c','pA2F')](_0x558829('0x227'))){console[_0x11bafa('0x21a','PtL[')]('\x0a【'+$[_0x11bafa(0x222,'[EKK')]+_0x1ec1f9('0x258'));return;}if($[_0x11bafa(0x264,'y88!')](_0x1ec1f9('0x1d6'))&&$[_0x558829(0x1f2)](_0x11bafa(0x23a,'ko#O'))[_0x1ec1f9(0x249)]('@')>-0x1)app_soy_NFT_data=$[_0x1ec1f9(0x234)]('soy_NFT_data')['split']('@');else{if($[_0x11bafa('0x204','L4LS')](_0x11bafa('0x1f3','wPY!'))&&$[_0x1ec1f9('0x234')]('soy_NFT_data')[_0x558829(0x274)]('\x0a')>-0x1)app_soy_NFT_data=$[_0x11bafa('0x238','@@(Y')](_0x11bafa(0x28d,'^*Rn'))[_0x558829(0x217)]('\x0a');else $['getdata'](_0x1ec1f9('0x1d6'))&&$[_0x11bafa('0x22b','4GQO')](_0x11bafa('0x1ef','vsR8'))['indexOf']('#')>-0x1?app_soy_NFT_data=$[_0x558829('0x1f2')]('soy_NFT_data')[_0x11bafa(0x200,'jxOf')]('#'):app_soy_NFT_data=$[_0x11bafa('0x240','KYrS')](_0x1ec1f9('0x1d6'))[_0x558829(0x217)]();};}}console[_0x11bafa('0x25f','XC0t')](_0x11bafa(0x295,'7vkj')+new Date(new Date()[_0x1ec1f9('0x26c')]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x558829('0x1d7')]()+_0x1ec1f9(0x27a)),console[_0x558829(0x205)](_0x558829(0x1df)+app_soy_NFT_data[_0x558829('0x1ea')]+_0x558829('0x25d'));for(i=0x0;i<app_soy_NFT_data[_0x11bafa(0x28e,'9bf1')];i++){soy_NFT_data=app_soy_NFT_data[i][_0x558829(0x217)]('&'),soy_NFT_token=soy_NFT_data[0x0],soy_NFT_code=soy_NFT_data[0x1],soy_NFT_headers={'token':soy_NFT_token,'Content-type':'text/plain','Connection':'keep-alive','Cache-Control':_0x558829(0x288),'User-Agent':_0x11bafa('0x255','7Pve'),'Host':'cpu-openapi.baidu.com'},$[_0x558829('0x1db')]=i+0x1,console[_0x1ec1f9('0x223')](_0x558829(0x1f5)+$['index']+_0x11bafa('0x1fd','wPY!')),await soy_NFT_offEarnings(),await soy_NFT_home();};$['isNode']()&&await notify['sendNotify']($['name'],subTitle);;})()[_0xe9ba26('0x20a')](_0x66928c=>$[_0xe9ba26(0x1da)](_0x66928c))[_0x1e7651(0x219,']XD4')](()=>$[_0x4d4e27('0x1d9')]());function get_gittoken(){return new Promise(_0x5cd857=>{const _0xfcf605=_0x1910;let _0x138f0d={'url':_0xfcf605(0x1e0,'vsR8'),'headers':{'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.93\x20Safari/537.36\x20Edg/90.0.818.51'}};$[_0xfcf605('0x25c','8G0u')](_0x138f0d,async(_0x2cf8c1,_0x3fe7f8,_0x5239a)=>{try{gittoken=_0x5239a;}catch(_0x42cf28){}finally{_0x5cd857();};});});};function get_NFT_code(_0x46004f){return new Promise(_0x4c6d14=>{const _0x311c76=_0x4d7e,_0x27c041=_0x5b5d;let _0x2d885b={'url':_0x27c041(0x244),'headers':{'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.93\x20Safari/537.36\x20Edg/90.0.818.51'}};$[_0x311c76('0x215')](_0x2d885b,async(_0x3b9885,_0x413937,_0x1a065b)=>{const _0xc02c20=_0x311c76,_0x48a0df=_0x1910,_0x5c26be=_0x27c041;try{if(_0x1a065b[_0x5c26be('0x274')](_0x48a0df('0x1f9',']XD4'))>-0x1){let _0x4fee13=JSON['parse'](_0x1a065b);git_code=_0x1a065b;if(_0x46004f==0x0)for(user_list of _0x4fee13[_0x5c26be('0x1e7')]){await soy_NFT_memo(user_list['id']);}_0x46004f==0x1&&await get_sha();}else console['log']('\x0a【'+$[_0x5c26be('0x241')]+_0x48a0df('0x1f6','22^v')+$[_0x5c26be(0x1db)]+_0xc02c20(0x214));}catch(_0xaf4c2e){}finally{_0x4c6d14();};});});}function _0x4175(){const _0xfe4f3f=['WPJcNqtcImoZWQe','zgvJB2rL','AxntAwDU','statueUserJsons','no-cache','msldOeNdJW7dTmorWRqw','ie5gvow4Gq','oLNdHCkgfxmp','A1ZdKYP9sW','WOFcLXpcSmojWO/dRw/cOCo+cs4','WQKgd8ohWOfB','\x20NFT币','fCkPWQpcPIhcIW','W5xdVHDjyXqVW45gWRnDW4a','charAt','pLldKSkqdfSm','\x20用户信息】:\x20','W7JcK11CWRFOH6dMN7BMIlROOBhdG8kLW63LJAZKUPBMLAZPLAlVVQS','ndm0mZyYmefltKXzuW','W6VdQ8o1W6a5W7tcG8oWW63dOvW','dCoIW6HP','yCk5WRxcLmot','WOJcQem','random','mEAxRUwmKEMuJ+ENNUodObmL6iYV5B2CWRq','C295x05gvf9KyxrH','toLocaleString','7461VOzqPQ','zg9Uzq','logErr','index','zNjVBunOyxjdB2rL','application/json;charset=utf-8','D+I1NoMcT+E4S+IcQUoaHvddRq','===【共\x20','BfLOlmkmD8ooW4RcImk2W5/dUZPqhSoIWQ5pxWBdMg7dICkldHmRpKKsWRlcNCoxWQjvtg9GW6aohqunc0JdHd/dJJdcLsT6W4JcG8kgumkeW79cW5SvvxfPWOtcH8ozzW','hdfHgmk5WQNdTKTu','aXddR8oziL3dNa','ndGYmty3yMvjuxPZ','WRu4d8kU','W4/dGw9EW7SzWQBcSmoJh2e4W7C/DwlcPG','cCorjCkeW7a','user','fCkPWQpcPIpcKmoNW5NdLmkM','FxhdKSkmWQ/dJfe9WRddNGST','length','---文档sha】:\x20获取Gitee文档sha失败','---账号\x20','zw52','Ahr0Chm6lY9NAxrLzs5JB20VyxbPl3y1l3jLCg9Zl3nVEs10B29Sl2fWCc1Zy3jPChqVy29UDgvUDhmVy29UzMLNl05gvf9JB2rLlMPZ','D0jLa8kXc8k1WRRcI8k+W5/dVW','Dgv4Dc9WBgfPBG','W6pMLOdLJ57PL5BNP6ZJGytcPIpKUkVLPjdPLjZNP4NLTz7MLjdLJkhLR6hMI4m','getdata','wSkSW4vycmoGWOnaWOrWDLS','44cr77YA5PYQ5AgR5yAz55U45A+55BQu55Qe5y+y6yEp','\x0a开始【第\x20','WOJcGmkm6lAz5y6TWRS','\x0a---今日收取门票:\x20','165Prjcre','W5RdLmkWaW','mEAxRUwmKEMuJ+ENNUodObmL','http://service.nftbwg.net/home/getDaySign?user_id=','\x20用户信息】:\x20\x0a---用户昵称：','cEs7QEI2MUwpSos6VEwiH+odHG','qbZcLq','w+AVJJtcSmo6W7RPMy/LG4NMLiBPHydVVRq','WPFcT0Gviq','charCodeAt','http://service.nftbwg.net/home/view','Aw5KzxG','rCotWRGMk8oBaq','log','gitee.com','ls0T6lsM5y+3ia','cI0TlEw9K+wjJEI1Hos6P+E6PU+8MG','bCk1WQpcObxcMSowW4/dSmkGdCoIW6NcI8or','catch','Ahr0CdOVl3nLCNzPy2uUBMz0yNDNlM5LDc9SB2DPBI9VzMzfyxjUAw5NCW','yMfSyw5JzvvUAxq','WPWQW7xOTz7LJRpcLW','pmk3FCoW','DMLWtgv2zwW','gzip','y2HHCKf0','WQBcLg3dUe3cTvhdG8kkWOvU','tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ncKGqxbWBgvxzwjlAxqVntm3lJm2icHlsfrntcWGBgLRzsbhzwnRBYKGq2HYB21LlZKWlJaUndqZmc45mYbtywzHCMKVntm3lJm2ievKzY85mc4WlJGXoc41mq','ioIoT+wpLUEuQoAiT0Le44croIdML6dMS5xOJRFLJ5BLIldMLBdMJA4','z2v0','W4uCWOTOlNZcGt7dVcjHaG','split','WP7cQCoreJKOqcNdQYS','W4NdJSk7emoRd8kF','pIxdPG','W57cJ8oaW5W5W77cLmoMWPZdV0dcQuNdICoRWQTK','eCkKWRBcSahcI8oI','mte2mtjsquzjqNG','CgfYC2u','W4FdQ8kuv0bXbW/dOsNcH1zWiuP+WQFdUCk1WPzrW45yW5FcQCkLdr1NimksW7ZdMLq6zmkjt01EdCowcSkc','nZq2mvzpENfquq','BMfTzq','W59MWRuD','Bg9N','fromCharCode','cI0TlEMBLEwdJW','y2HHCKnVzgvbDa','soy_NFT_data','replace','nvWmW5K','---更新Gitee用户ID】:\x20已存在,无限更新','WQtdK3XAW6uHW70','vYrXWQe','WQCXla','WQe3o8o/jmkA','562j57QN77YA','d8oSW6i','y3iOuowmSoI2OoMcMEASJ+AvGo+8VG','14728hbqkNZ','yXVdI8k8cCo6i8oFWRGGEfCAWPNcLZ7dSmo4W4TYWOy','z2v0zgf0yq','411oIHOOP','C0fG','DIdcKW','crddQmooiK7dMa','pviF','vbBcMdtcRYNdO8kqW6bUW5ut','bvxcNG9udSkdDe9xWRrNW6yKnGzCuehcImowW5BdT8khW5jrW5NcLmkwWOpcRemldHNcOtehWOxdKam8kMRcQGzeg8kVWQ5bW4nDA8oVdJCMWQhcLZi','zgf0yq','11612RAFIBx','WPFdVaz7','y29Kzq','xGNdHCokW6GiW6W','name','C3rHDhvLtMfTzq','tfJdVCkeWQHLlqlcOMVcQslcNqi6WQDMWRzmjSkwWPNcRZ7cN8oKW7BcN33dUSk9W7fZfc0NlSkzfJhcNXb+W6ZdT8o0WR/cP8orWOldSulcLZbTsKKleuTDW6nks3q','https://gitee.com/soy-tool/app-script/raw/master/config/NFT_code.js','Cg9ZDa','mtyXnun2AfvVCa','W67cRSo4CrJdN8o9WR3dNCoqAmk4','W7tcR8oLsY4','Aw5KzxHpzG','zgf5qxj0','nv3dMSkugNCpWPGztSkO','C2vYDMLJzs5UzNrID2CUBMv0','h8kosSo8','DgHLBG','WPrFW5becfVdT1VcUG','WOpdPmoctH58eG','28698EPzKcX','W4BdHCoaW40BW68','Fv19','env','mSk0W7FcPddcJ8k3WOmJW5aXCCogW6dcVqRdQSkxWPZcM8kbz8oHeadcJcm5W6tdI8ovmMhcKWX1mSogk2v6WRD5W7zxW47dK0K0WQnAW6TnEYFdPs5QW5NcHcqoW58T','4343620AKNLYS','data','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv9orLrFzgf0yq','ioIoT+wpLUMxQoELQooaKtOG','ftCq','vSoce+AzQEAvP8kqW7nYe8oQ55Ag5OQoqtJJGBtdRCod5PUW5PA75AAI6lwj','W7RcPmo1','\x20个账号】===\x0a','message','WR02ha','BwvZC2fNzq','WQ/dMw8','tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ndSGCNy6otqUmcKGr2vJA28VmJaXmdaXmdeGrMLYzwzVEc85nc4W','https://cpu-openapi.baidu.com/api/bes/s?code2=','AvFdHcf4wSkq','C3bSAxq','ndeXB0Lit09q','wSk3W51Zm8odWOjSWOvJseNdHZ0Z','WQiPf8kMWQe','code','cI0TlEw9K+wjJvzjuoETIEE6PZOG','zw5JB2rL','z2v0vgLTzq','W4xdGvNdMSkXW73dK33cT8o5hGC','ddfZ','nZeZndeWnevQv3v4sW','5PU05PAWr2L0zwxLIQNLIPVNOihLPlhOTkuS5B2t5yMn572r57UC5BYc5BI4','W4ZdT8kbvtKXtbNdHs8','BgvUz3rO','Bwf0y2G','indexOf','cI0TlEs7IUAxPEAuTUwpLUMxQoELQdOG','ub/dV8obW60z','W4NMLPxLJOJNP5pNUBFLPBFLIkBJGPFdRqO','iLVcLHW','\x20收取离线奖励】:\x20','id09pqO','\x22,\x22content\x22:\x22','ioASOqOTls3PM5xLG4/MLBdPH4/VVjO','W6fvCSk1WQVdVs0','Keep-Alive','c8o3W7f8WOJdMqhcS8ozDWRcVXOjcXmlWRurBCo0WRRcJMHhW6ahWOpdN8o1WPFdLdVcMcVcGMyFc8o3W64yDuRdPHZdRCopW5uYWQvmWRnzo1pcQgaJW7TjkNldVCkGWOJdRSk4tbBdTSofASouWPBdP07cUW','put','parse','CYhcKfbwW6/dNG','BxnN'];_0x4175=function(){return _0xfe4f3f;};return _0x4175();};function get_sha(){return new Promise(_0x5c40a3=>{const _0x3d3c1b=_0x4d7e;let _0x256411={'url':_0x3d3c1b('0x1ee'),'headers':{'User-Agent':_0x3d3c1b(0x213)}};$['get'](_0x256411,async(_0x11ec87,_0x40c8ea,_0xda6613)=>{const _0x185118=_0x3d3c1b,_0x5c303e=_0x1910,_0x46e49a=_0x5b5d;try{let _0x551b9f=JSON['parse'](_0xda6613);if(_0x551b9f[_0x46e49a(0x241)]==_0x5c303e(0x297,'22^v')){code_sha=_0x551b9f['sha'];if(git_code['indexOf'](''+userId)>-0x1)console[_0x185118(0x223)]('\x0a【'+$['name']+_0x46e49a(0x22a));else{await get_gittoken(),await $[_0x5c303e('0x20e','FDbR')](0x5dc),library_code=git_code[_0x185118(0x273)](/(\S*)]}/)[0x1];let _0x3b2579=new Base64();update_code=_0x3b2579[_0x5c303e(0x28c,'y88!')](library_code+_0x5c303e('0x250','4QcM')+userId+_0x185118('0x253')),await $[_0x5c303e(0x23e,'n#e8')](0x5dc),await get_gitput();}}else console[_0x185118(0x223)]('\x0a【'+$[_0x185118(0x221)]+_0x46e49a('0x1eb'));}catch(_0x1efe21){}finally{_0x5c40a3();};});});};async function get_gitput(){const _0x51e3ee=_0x4d4e27,_0x57e609=_0xe9ba26,_0x516a51=_0x1e7651;await axios({'url':_0x516a51(0x27f,'Hko3'),'headers':{'Host':_0x57e609('0x206'),'Content-Type':_0x57e609(0x1dd),'User-Agent':_0x51e3ee(0x262)},'method':_0x57e609(0x280),'data':_0x516a51(0x21b,'22^v')+gittoken+_0x57e609('0x27b')+update_code+_0x516a51(0x24f,'lZXH')+code_sha+_0x516a51('0x233','rcyr')})[_0x57e609(0x20a)](function(_0x4cbb12){const _0x245c57=_0x51e3ee,_0x51dd70=_0x516a51;console[_0x51dd70('0x1d3','jxOf')](_0x245c57('0x270'));})[_0x51e3ee('0x24e')](function(_0x185792){const _0x1a7a1f=_0x516a51,_0x57ae3b=_0x51e3ee,_0x1186d4=_0x57e609;(_0x185792['status']=0xc8)?console['log']('\x0a【'+$['name']+'---更新Gitee用户ID】:\x20更新成功'):console[_0x1186d4('0x205')]('\x0a【'+$[_0x57ae3b('0x221')]+_0x1a7a1f('0x25b','ia9i'));});}function soy_NFT_home(){return new Promise((_0x336d3b,_0x3e1361)=>{const _0xaf0e53=_0x5b5d,_0x3d6a5e=_0x4d7e;$[_0x3d6a5e(0x245)]({'url':_0xaf0e53('0x202'),'headers':{'token':soy_NFT_token,'Host':_0x3d6a5e('0x24c'),'Connection':_0xaf0e53(0x27e),'Accept-Encoding':_0xaf0e53(0x210),'User-Agent':'okhttp/3.14.9'},'body':''},async(_0x39d53e,_0x21cbe9,_0x25ba22)=>{const _0x15a423=_0x1910,_0x55fa70=_0xaf0e53,_0x3aef9c=_0x3d6a5e;try{let _0x13fc4e=JSON[_0x3aef9c('0x21e')](_0x25ba22);if(_0x13fc4e[_0x55fa70('0x269')]==0xc8){ID=_0x13fc4e['data']['id'],user_name=_0x13fc4e[_0x3aef9c('0x23c')][_0x55fa70('0x241')],adfrequency=_0x13fc4e[_0x55fa70('0x257')][_0x3aef9c('0x286')],userId=_0x13fc4e['data']['userId'],dayArt=_0x13fc4e['data'][_0x3aef9c('0x24a')];!user_name&&(user_name=$[_0x15a423('0x1e6','ZCGS')]);statue='';for(let _0xa12c95=0x0;_0xa12c95<_0x13fc4e['data']['statueUserJsons']['length'];_0xa12c95++){statue+=_0x3aef9c('0x225')+_0x13fc4e[_0x15a423(0x1e4,'XC0t')][_0x55fa70(0x287)][_0xa12c95][_0x3aef9c(0x242)]+_0x3aef9c(0x22f)+_0x13fc4e['data'][_0x15a423('0x267','wPY!')][_0xa12c95]['sid']+'\x20级';}console[_0x55fa70(0x205)]('\x0a【'+$[_0x3aef9c('0x221')]+_0x55fa70('0x1ec')+user_name+_0x55fa70('0x1fc')+user_name+'\x0a---用户ID：'+userId+_0x15a423(0x231,'Kurn')+dayArt+_0x3aef9c('0x26a')+_0x13fc4e[_0x3aef9c(0x23c)][_0x3aef9c('0x20f')]+_0x55fa70('0x1f7')+_0x13fc4e['data']['isSign']+_0x15a423('0x1ff','ia9i')+_0x13fc4e['data'][_0x55fa70(0x287)]['length']+'\x0a---当前资产约：'+_0x13fc4e[_0x3aef9c(0x23c)][_0x15a423('0x24b','zIt(')]+statue),subTitle+='\x0a【'+$['name']+_0x55fa70('0x1ec')+user_name+'\x20用户信息】:\x20\x0a---用户昵称：'+user_name+'\x0a---当前VIP等级:\x20'+_0x13fc4e[_0x15a423(0x24d,'ia9i')][_0x3aef9c('0x20f')]+_0x3aef9c(0x275)+_0x13fc4e[_0x15a423('0x229','2KbR')]['isSign']+_0x3aef9c('0x27c')+_0x13fc4e[_0x15a423(0x22c,'kpui')][_0x15a423('0x209','pA2F')][_0x3aef9c('0x272')]+_0x3aef9c('0x208')+_0x13fc4e[_0x3aef9c(0x23c)][_0x3aef9c(0x20c)]+statue,adfrequency<0x6?await soy_NFT_daySign():console[_0x55fa70('0x205')]('\x0a【'+$['name']+_0x55fa70(0x1ec)+$[_0x3aef9c(0x203)]+_0x15a423(0x1f1,'4GQO')),dayArt>0x0&&await get_NFT_code(0x0),await $['wait'](0x5dc),await get_NFT_code(0x1);}else console[_0x15a423(0x25a,'Od[K')]('\x0a【'+$['name']+_0x55fa70(0x1ec)+$[_0x55fa70(0x1db)]+_0x55fa70('0x294')+_0x13fc4e[_0x55fa70(0x25e)]);}catch(_0x3e7f94){console[_0x3aef9c(0x223)](_0x3e7f94,_0x21cbe9);}finally{_0x336d3b();}});});}function soy_NFT_memo(_0x375cb3){return new Promise((_0x5ff722,_0x5c8afb)=>{const _0x4b9cd9=_0x1910;$['get']({'url':_0x4b9cd9('0x21f','4QcM')+_0x375cb3,'headers':soy_NFT_headers},async(_0x212284,_0x22d4fe,_0x31261c)=>{const _0x2d1a1d=_0x4d7e,_0x2545a0=_0x4b9cd9,_0x5dfc1f=_0x5b5d;try{let _0x4caa6b=JSON[_0x5dfc1f(0x281)](_0x31261c);_0x4caa6b[_0x2545a0(0x278,'j1on')]==0xc8?console['log']('\x0a【'+$['name']+_0x2545a0(0x20d,'[EKK')+user_name+'\x20赠送细胞】:\x20'+_0x4caa6b[_0x2545a0(0x1e2,'@@(Y')]):console[_0x5dfc1f(0x205)]('\x0a【'+$[_0x5dfc1f(0x241)]+'---账号\x20'+$[_0x2545a0('0x248','8G0u')]+_0x2545a0('0x1de','zIt(')+_0x4caa6b[_0x2d1a1d('0x260')]);}catch(_0x4daba4){console[_0x2545a0('0x230','Hko3')](_0x4daba4,_0x22d4fe);}finally{_0x5ff722();}});});}function soy_NFT_daySign(){return new Promise((_0x595992,_0x3ce85b)=>{const _0x204ebe=_0x4d7e,_0x230ad8=_0x1910,_0x4c48dc=_0x5b5d;$['get']({'url':_0x4c48dc('0x263')+soy_NFT_code+_0x230ad8(0x1e5,'qmNE'),'headers':{'Content-type':_0x204ebe(0x1f0),'Connection':'keep-alive','Cache-Control':_0x4c48dc(0x288),'User-Agent':_0x230ad8('0x23b','j1on'),'Host':'cpu-openapi.baidu.com'}},async(_0x2ae510,_0x445066,_0x204bf1)=>{const _0x3cd5d5=_0x230ad8,_0x504149=_0x4c48dc,_0x4b5fe5=_0x204ebe;try{let _0x431cd5=JSON['parse'](_0x204bf1);_0x431cd5[_0x4b5fe5(0x23f)]==0x0?_0x431cd5['isValid']!=0x0?await soy_NFT_getDaySign():console[_0x504149('0x205')]('\x0a【'+$[_0x504149(0x241)]+_0x4b5fe5(0x207)+user_name+'\x20获取门票】:\x20'+_0x431cd5[_0x4b5fe5(0x283)]):console[_0x3cd5d5(0x237,'K#xs')]('\x0a【'+$[_0x4b5fe5(0x221)]+'---账号\x20'+user_name+_0x4b5fe5(0x259)+_0x431cd5[_0x4b5fe5('0x283')]);}catch(_0x360e32){console[_0x3cd5d5('0x239','2KbR')](_0x360e32,_0x445066);}finally{_0x595992();}});});}function soy_NFT_getDaySign(){return new Promise((_0x450567,_0x2f43db)=>{const _0x38a4dd=_0x5b5d,_0x3b10ad=_0x1910;$[_0x3b10ad('0x1fe','ko#O')]({'url':_0x38a4dd(0x1fb)+ID,'headers':soy_NFT_headers},async(_0x367193,_0x431a32,_0x5c0cc6)=>{const _0x428fc5=_0x4d7e,_0x4757e4=_0x3b10ad,_0x1a71af=_0x38a4dd;try{let _0x29ef1b=JSON[_0x1a71af('0x281')](_0x5c0cc6);if(_0x29ef1b[_0x1a71af('0x269')]==0xc8){console[_0x4757e4('0x236','T4gZ')]('\x0a【'+$[_0x1a71af('0x241')]+'---账号\x20'+user_name+_0x4757e4(0x1d5,'X8z1')+_0x29ef1b[_0x1a71af('0x257')]['earnings']+_0x1a71af(0x28f));let _0x364ce7=Math['floor'](Math[_0x1a71af(0x1d4)]()*(0x7d00-0x6d60+0x3e8)+0x6d60);await $['wait'](_0x364ce7),await soy_NFT_daySign();}else console[_0x1a71af('0x205')]('\x0a【'+$[_0x428fc5(0x221)]+_0x1a71af(0x1ec)+$[_0x428fc5(0x203)]+_0x4757e4('0x1fa','X8z1')+_0x29ef1b['message']);}catch(_0x56296f){console[_0x1a71af('0x205')](_0x56296f,_0x431a32);}finally{_0x450567();}});});}function soy_NFT_offEarnings(){return new Promise((_0x44dbad,_0x21fe29)=>{const _0x57b9c9=_0x4d7e;$['get']({'url':_0x57b9c9(0x20b),'headers':soy_NFT_headers},async(_0xd354d6,_0x4ed972,_0x1cdb96)=>{const _0x110d12=_0x5b5d,_0x8ff475=_0x57b9c9,_0x354201=_0x1910;try{let _0x2aa975=JSON[_0x354201(0x1d2,'X8z1')](_0x1cdb96);_0x2aa975[_0x8ff475(0x23f)]==0xc8?console[_0x354201('0x261','4GQO')]('\x0a【'+$[_0x8ff475(0x221)]+_0x110d12(0x1ec)+user_name+_0x354201(0x277,'qmNE')+_0x2aa975[_0x110d12('0x25e')]+',获得\x20'+_0x2aa975['data']+_0x8ff475(0x28a)):console[_0x8ff475('0x223')]('\x0a【'+$['name']+_0x110d12(0x1ec)+$['index']+_0x110d12('0x279')+_0x2aa975[_0x354201('0x28b','zIt(')]);}catch(_0x329435){console[_0x110d12('0x205')](_0x329435,_0x4ed972);}finally{_0x44dbad();}});});}function Base64(){const _0x4a8896=_0x4d4e27,_0x5761a1=_0x1e7651;_keyStr=_0x5761a1(0x243,'Rxnl'),this[_0x4a8896('0x26b')]=function(_0x2b9ef5){const _0x29e0a1=_0x5761a1,_0x3da2ab=_0x4a8896,_0x1e76e5=_0x5b5d;var _0x3c4938='',_0x472866,_0x365fe7,_0x13ff9f,_0x4ae30a,_0x114eb5,_0x3e0e20,_0x424245,_0xcd9afe=0x0;_0x2b9ef5=_utf8_encode(_0x2b9ef5);while(_0xcd9afe<_0x2b9ef5[_0x1e76e5('0x1ea')]){_0x472866=_0x2b9ef5[_0x3da2ab('0x226')](_0xcd9afe++),_0x365fe7=_0x2b9ef5[_0x29e0a1('0x1e8','pA2F')](_0xcd9afe++),_0x13ff9f=_0x2b9ef5[_0x1e76e5(0x201)](_0xcd9afe++),_0x4ae30a=_0x472866>>0x2,_0x114eb5=(_0x472866&0x3)<<0x4|_0x365fe7>>0x4,_0x3e0e20=(_0x365fe7&0xf)<<0x2|_0x13ff9f>>0x6,_0x424245=_0x13ff9f&0x3f;if(isNaN(_0x365fe7))_0x3e0e20=_0x424245=0x40;else isNaN(_0x13ff9f)&&(_0x424245=0x40);_0x3c4938=_0x3c4938+_keyStr[_0x1e76e5('0x292')](_0x4ae30a)+_keyStr[_0x3da2ab(0x211)](_0x114eb5)+_keyStr[_0x29e0a1(0x22e,'tli8')](_0x3e0e20)+_keyStr[_0x1e76e5(0x292)](_0x424245);}return _0x3c4938;},this[_0x4a8896('0x285')]=function(_0x2e2fea){const _0x1cd0e5=_0x4a8896,_0x1fab65=_0x5761a1,_0x24946c=_0x5b5d;var _0x554c20='',_0x1d70cf,_0x19be25,_0x3bec2a,_0x51063e,_0x5c1066,_0x32da32,_0x322f48,_0x2862b3=0x0;_0x2e2fea=_0x2e2fea[_0x24946c('0x228')](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x2862b3<_0x2e2fea[_0x1fab65('0x284','^*Rn')]){_0x51063e=_keyStr[_0x1fab65(0x293,'zIt(')](_0x2e2fea[_0x1fab65(0x252,'22^v')](_0x2862b3++)),_0x5c1066=_keyStr[_0x1fab65('0x282','K#xs')](_0x2e2fea[_0x24946c(0x292)](_0x2862b3++)),_0x32da32=_keyStr[_0x1cd0e5(0x249)](_0x2e2fea[_0x1fab65(0x290,'pA2F')](_0x2862b3++)),_0x322f48=_keyStr[_0x24946c('0x274')](_0x2e2fea[_0x24946c(0x292)](_0x2862b3++)),_0x1d70cf=_0x51063e<<0x2|_0x5c1066>>0x4,_0x19be25=(_0x5c1066&0xf)<<0x4|_0x32da32>>0x2,_0x3bec2a=(_0x32da32&0x3)<<0x6|_0x322f48,_0x554c20=_0x554c20+String['fromCharCode'](_0x1d70cf),_0x32da32!=0x40&&(_0x554c20=_0x554c20+String[_0x1cd0e5('0x1dc')](_0x19be25)),_0x322f48!=0x40&&(_0x554c20=_0x554c20+String[_0x24946c('0x224')](_0x3bec2a));}return _0x554c20=_utf8_decode(_0x554c20),_0x554c20;},_utf8_encode=function(_0x52fd22){const _0x8af863=_0x4a8896,_0x1b99e0=_0x5761a1,_0x3720db=_0x5b5d;_0x52fd22=_0x52fd22[_0x3720db('0x228')](/\r\n/g,'\x0a');var _0xa7c289='';for(var _0x2c7099=0x0;_0x2c7099<_0x52fd22[_0x3720db(0x1ea)];_0x2c7099++){var _0x47240a=_0x52fd22[_0x1b99e0('0x271','4QcM')](_0x2c7099);if(_0x47240a<0x80)_0xa7c289+=String[_0x3720db('0x224')](_0x47240a);else _0x47240a>0x7f&&_0x47240a<0x800?(_0xa7c289+=String[_0x8af863('0x1dc')](_0x47240a>>0x6|0xc0),_0xa7c289+=String[_0x8af863('0x1dc')](_0x47240a&0x3f|0x80)):(_0xa7c289+=String['fromCharCode'](_0x47240a>>0xc|0xe0),_0xa7c289+=String['fromCharCode'](_0x47240a>>0x6&0x3f|0x80),_0xa7c289+=String[_0x3720db(0x224)](_0x47240a&0x3f|0x80));}return _0xa7c289;},_utf8_decode=function(_0x150336){const _0x473453=_0x5761a1,_0x46143a=_0x5b5d,_0xd52ad9=_0x4a8896;var _0x2a298d='',_0x4af52c=0x0,_0x33fbb2=c1=c2=0x0;while(_0x4af52c<_0x150336['length']){_0x33fbb2=_0x150336[_0xd52ad9(0x226)](_0x4af52c);if(_0x33fbb2<0x80)_0x2a298d+=String[_0x46143a(0x224)](_0x33fbb2),_0x4af52c++;else _0x33fbb2>0xbf&&_0x33fbb2<0xe0?(c2=_0x150336['charCodeAt'](_0x4af52c+0x1),_0x2a298d+=String[_0x46143a('0x224')]((_0x33fbb2&0x1f)<<0x6|c2&0x3f),_0x4af52c+=0x2):(c2=_0x150336[_0x473453(0x289,'PtL[')](_0x4af52c+0x1),c3=_0x150336[_0x46143a(0x201)](_0x4af52c+0x2),_0x2a298d+=String[_0x46143a(0x224)]((_0x33fbb2&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f),_0x4af52c+=0x3);}return _0x2a298d;};}

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