/*

软件名称:奇遇商城

项目注册地址:https://gitee.com/soy-tool/app-script/raw/master/picture/qysc.jpg

必要变量:

变量名 soy_qysc_data
变量值 京东ck(就是京东那个pt_pin=xxx;pt_key=xxx;)

多个号用 # 或 @ 或 换行 隔开

cron 25 10,13 * * *

*/


const $ = new Env('【奇遇商城】版本:22/03/24_0');
const notify = $.isNode() ? require('./sendNotify.js') : '';


var _0xodq='jsjiami.com.v6',_0xodq_=['‮_0xodq'],_0x4b44=[_0xodq,'ZMKAZMKAwoQ=','KnvCmg==','JsOewq9HW8K7YQ/CmDfDrHvDsQ==','cH7Dnwwo','VsK9fA==','RMK2W8KVJSHDiH7DrMOlwrzDi8K/','VizDtcOQw7g=','w40fVQ9lb8O6w6TCogojIsOy','w6R5wq5Fw48=','c8K0wrY=','KVQCcArCi8KN','WMK2wqHDmsKv','w5XDnMKeFCk=','wqBnLg==','FsO9SXbCiA==','TjUQ','eOOBiMOPw79O6Ie35p+S5o2M56W/HEkR6LSo5Y2owpE=','N8KIwozClSU=','MeeUkuaInuS/r+aCuOOAjVtX576H57qu6K265rOd5aWX6LSP','w5vDoRAkdw==','wrjnlofmi4rkvprmgLHjgIzCq8KB576P57ig6Kym5rCn5aet6Lad','DMKTwqDCmQ4=','WsKubcKuGA==','PzTCvsO4w4k=','wo0bSMKIwoFDwp43woAvw4nCl3Yfw4kMUMOAw7hYw5EiciHCgcOIw7gLw4hfU8OlWl1+wp/CjcKCwpTDoAfDh8OIBSIbPMOGUMKNRg==','XMK8R8K6eTnDl3TDhcOk','Y3TCtsKDw6U=','dgw4wqbCjsKOS8Oow4PDn8OOwo1VwpXCncOn','cxQWw6Ia','WHHCsA==','woxdwqk1w4I=','w7TCusK9wqwv','FALDkcOURw==','w4cZw6gwwrU=','MQ4cf8K3w7QOMhIew5txHMKjKMKGAw==','DMOFRMKkCw==','MMOAw4nCjB0=','fsK2QMKdPA==','w57DoBM=','FsO2w4/jgqvlhL7Dow==','N8Oyw5fCnCEh','BeS5tui2v+WNjuOCnU5pHsKV','w602biZi','RcOHwoMRJ8Kh','LHYUQgA=','woXDicOcOMOe','JGItw79j','wpo7asOYPg==','w6DDhcKJw4/ClGdqwp86w5o4w7rCoA==','R00+csKcwp7CmMKuw7LDiQ==','wqkzdGPCgMKsAg==','A8O9WsK2','6ZiS6K6H5o2P5a2Q5YWi5a2U','LyjCvMOBw54=','YcKQUcKOMA==','FsKpwpDCqSw=','woI1YGvCgMKsGsOiw705w5rDvhrDt8Kkw5bDg8Omwpx8M8Kqw57CqsKbwoHCqcO/I8ODw4fCnMOBwpXCq118wrNiwqjCuMKTY197wqDDlyw2dWofS8KrwpTDrBvDksO1wobCtcKVw47CiAJmw6/Cn8Kxw6BPZDgywpDCmjDCuMK7wrZ7wrTDpsKpw6XCoWgaw7FyMzkVLXjCksKNwqjCpcKSw6Uvw5xRwrpSQVEDwrLDuSfChcKrGcOOTi3CpynDgMKqw6VgwrZZwobDv3FUw6fDsnQcSsOkwrhvw4ACwoENIMKmAX7Cv8OfwoHDlwRNcUDClcO5w4E6b8K6SmPDlw8jwqvCi1w2wo94wqfDvyYKwrRObwzCuVbCvcOCKGnDnTXDoD3DiMKhwpTDqxhGcsKlw5g0wqXClHlrw6HDgjZ6wpDDvMO+FsOye0ZSwqonw7PCpQfCpsK9wovDgsK/SMOKBxfCmMOKIMK7wrzCvMKYwqUlHMKDw7c6w6YIBHsMwq5PKmPDrlRvVTPCu8OlexfCsWA3w5lSG8KswpjChBzDlx4Awp85wp8pHsO5wqBawpPDvsKwNgQVw4BrDz3Cu8K6w4IbLsK3wrbDj8KCw78sw6MJw63DrwdjQcOZeAnCmCPDm8K1wpNhwo1QwrLCrsOyaMKrwqYWCcOTwrENDcODKxFkf2bCng==','w7AYYRJ8','U3vCo8Kyw5spdw==','WW7CssK/w5A=','w7RGBMOpM8O+w4UYw43DgzTDi2fChwrDkRpQIUNMRcKLwqsuayfCh8K+EDXDlMOUwp/Chnwpa8KyYX4NFE0SV1LDucOzw57CiFXDusKBw6HCoh9ERsK/Z8KGwqLDq0PDq8KUw5DCs8OgH8KRPcK1FGvDpMKgRy/CnMOvJsO6P104ZMOZK8KtXcObw5U=','w7LDmsKAw7zCjH14wogMw5E3wqHCqwBOw54=','JXg9w6poP3LCt8O+YcOqwoNiS8OGw67CuMOkccOHN0rDh8KMVnHCnwo4w7XDusOIw4A7wrgOAAwjw4vCn0Q4wrFowrjCqW84dH5QwqvDqsOOeS7Dj8KSwo7Do8KXwqQ=','w5zDqBc5Yw==','TEXCo8O0wqQ=','fcOUw6HCssOR','Kmk9','W8K2RQ==','MsO5w53Cni0=','PwUMTsKm','w6/nlbLmiK3kv6PmgoPjg5FBw63nvpnnu4vorJ3mspzlpIPotp4=','NBHCt8K4w6U=','w6HDmcKgw6bCtQ==','w4p0wrJkw4jDrTbDiMOm','w4HDhcKBw4TCrw==','QRwNw7Mo','wqHCu0TCt3hew7V6','wrs7aWnCv8KvDsK/wqtywr/CrF4=','ZsKbwqXDiBc=','w7jCkCIAfcKrw6fDvAw=','woUgQ8ONJg==','wrFoKzJeVMOkw6fCo1Ai','wrFoKzJOQsOAw6s=','QH/CpMKNw6ErZ1gowrvCsMOFwpw=','R8KyecKqwqDClsKpAyg=','FBbCp8Kpw40=','w5vDuMKlDQk=','wp4Xd8OcLMONw4/CpcKvdik=','ecKDRsKvOg==','SMKnwpzDqyw=','w7jDtTM=','M0oKfAY=','f0HCkcOfwpc=','M3XDusKKw7nCs8K4wpQ=','wrLDhMOPwpjDucO5B8K0XXTDpzrDkQ==','w5jCisKCwrYjw6R1woEH','fzY9wq/Cng==','6KWj552I6KWD6aOl','aCvDjsOUw4Q=','wqBtwpYvw57DnGlbwqxnw4o=','BjnDj8O7ZMKCwovDriZUMU5i','b8KfwrnDk8KUUcKSw67Chw==','MQ4cf8K3w7QO','wq4qcyzCgcOuEcKpw6Z0woXCsw==','LnDCu8KCfw==','XcOTwr4eOw==','wqHDnsOGwr3CpMOxIcONw5DCq8Otw7DDmQF3BB5Xw6/ClcOTLxHDqw==','wqc4ecKzwps=','w7DDq8KGw5/CjA==','KcOUQ3PCtw==','woYZYw==','woHnlavmirLkvpXmgqrjgJbDvmg=','N8O4w54=','UlTDlAM3','RXbDpBQ5','WMKkwovDpD7CusOIScKqwpjDsBkS','IVTCrcKgRw==','w59FMw==','cifCvw==','wqssS0PCpw==','W8K5e8Kqwpw=','FgzDrcOaWA==','cEptYcKDfRIcw7AQw6LDux8XZyDDsBvCuzrCtsKywoXCsxnCpUrCq8OteMONw6zCkMOrHXrDnzJ+wr3CjhHCm8OKwpDCj202eDvDqsO6wrtYcFDDrQdlwqx5woXCuGtua8OpHC1CeyHCnlIjwqPCgVrClxzCocK/wqA=','M8Oow7IOwrhmPjNVwqs8woxowrLDkcOXPsOae8OaPw==','T8KfwqPDsSA=','w4zCt8KcSsKbfMKlwrAt','CMOWe8KZGQ==','w6vCjcKdwosi','eWzCmMKew5o=','YlHCsMOQwpw=','bEnCpsKww6I=','dsKZwofDusKF','E3bDmsK3w4U=','N2TCg8KCTQ==','wo7DoMOa','Lw7CisOAw6U=','b2HDlA==','w6PjgpXDnQDDleiEouaer+aMlOekqsKawoXCjui0muWNvsKW','XXDCs8KDw4o=','wq/Di8OYwpbDkg==','b+OCnVZwwoXoh57mnLHmjLDnp43jgJTvvKnmnaTloKXlh7nnmILlu5zlj5vphZ52VcOYcBTDmBAgwoZLw4dZaz8=','w6vCh8Kzwr8z','XMKHwp/Dgyg=','wojDjcOsP8Op','w4Isw6ER','OcOewrE=','w7nDjMKJEih0w6XDmMKTwo/Ctg==','NnvChcKlUg==','woo+ccKBwrU=','w6Zmwo9Hw74=','w681w4gBwqQ=','MsKJwo8=','AueVsuaJgOS9guaApeOBjMOgNg==','wrF+wpcJw6nDlA==','wrhjwoI=','KeOAjsOODcOw6IWm5p+F5o+e56ahwrlWwrzotKPljq8w','44O7TCQ=','RygFw645Og==','SVPDkxjDmw==','P8KWwoHDnjDCixE2D1vCpw8=','wqfDlMOfwqHDocOxL8OUw4nCtsOmwqzDgF56GA==','VMK2fsKVwp3CksK4','QcOWwpkGIMOzCsKuw5ZnHsKpJ8OswqnCosK1w7YbbQZtOC/DhGNiMnbDnCAow5x9LMKywqvDhi3CmWzCpsODw6LDrAbDrHlSwpMC','Jn8jRiI=','w7/DlcKUC3J+w77DjMKuwo7CtBbCr8KUw5jClUJ5w5LDssKuw5sCBQ==','SMOSwoRYPsOnT8Olwpl0GMOq','ST8Sw5NnPMK2f2XCug==','Ygguw6fDnw==','w5kKRSA4dcOmw6rCjRwnJcOgE8Opwoo0EsK6wpHCk3Qaw5A=','LFUB','wqvjgZPDthvCvOiEneafqOaXj+S7l+WGmOi2mOWiguaZvuOBju++rcKNw77ChcKr6Iag5p285pWu5LuZ5Y2S55ei5LiJ5Yas6LWc5LuT5rWXIsOew5RZ6IeP5p+45pWJ5Li15Lin5L6b5LiX5Lic5b+W55eL5Lm35ZSW5Lu+5LuA5Y6g6Z6h5rKe55Wg6YGCBsO2w4YK6IeA5py85pa+5Lql5Li96L+m6K2X55Wm5ZGyAcKG5bO75pWZ5YSz6IaE6KOh5YiU6Zmwwo3DuzpV5ZqZ5L6L55ar6Iaf5p2W5paT5LmP6YCO5oui5L+055aH6IKI5Lig5Y+25LqP5LyD572H56iF5biH5Y+L55mV5Lqn5Yio5o2d5aWB55u555Wj5Lyf55es6IGL5oqz5omQwpHCoRBP6ISA5pyp5peM5Lqa5ae45py85Li65oSJ6KOf56GN6KWa5oqG5L6b5pWv55mN5p+656K+6KSe5oqJ5L6+5peE6IKg5oqy5oqyTcOmw4bDt+WkpeS6tOaNteWPlOavteacleauk+isvueqr+WMuOWJqumaruiEreaenOaXvuS7gQ==','QWrCscOLwoo=','f8Oiw5DCqcO2S8KmwrBHwphRHcOMDMKmwq3DojwiQ8KZPUFfN1x8bVtsSEctMX3CnsK3dMOKwqzCkB4efcOSRAPDhR7CpDLCginDsCjCuBtPVcKSQTw3Y8OwJcOBw6TCoUXCk8OLwrfDqGTCpsK8HcOfaCPDjiDCscONwpYow7bCqMKfVMKfwrvDvcOyBMK6wqgvw48JWsKba1/DisORw7rCnsK2VWdwYsOcTMOCCVlccMK2w49Qw5/DiMKsWAJ0woMhwqLDssOPTFDDvgPDjMKgwrdTX8KLwp1ZH1pbUVzDtno8w5XDpwfCqWkgw70+bcKYfBjDiXPDu8OHWBlLIzYYD8KawrTDqETDmwRKF8ODwojChHXDqsObTcKIXhk3fMOzJsKES2DDosKUwpzDtVDChsOMKMOsI3jDhl92GBBswr3DssOvMxfCjx7CvMOpw6HCk8KCZXTClMKAwpF3wpMZBMKabMOkw43Ct8KvIMOew7rDtULCrnIOLMKBcMKxJcOBPT/CtMKpw5rDkcKmwrjDkSJlRV97A8KuwpzClsK1TRhwPUbDhsKgchnCgMK9w6nDo3QKw47CpHgMwqczw59DwovCuQ5Uw7PDnMKow7PCmmMTw5bDhsKswqjCgwEsXMKmRsKAwr89w6vDi3zDtlvCnMOnw7HChcKFflY=','w4Y5w6wEw6lkwqslUcKnw54BA3PDlcO1w7/DjMOjw5w8wohbw50=','woHDscOaH8OfAsKsw6tjw5LDmsOVVcOqw5Nkw47CimhFwoDCjFY1w6l4w4gvwpIeNRpZCMKrw5fCt8KbUDfCt8OPO8KbRk/DtDfDgcKHwoLDqQHDsMOeAX/CicOqwrRHw4I0','eMOSwqpHIw==','PVQGw7l6','Mnw3RTk=','ccKLQMKNHQ==','XHh/VMKO','Vn3CvMOqwrI=','em9GdsKA','TsKlwoQ=','LcKJwpHCryzDnAgxflzCqRbCnw==','VcKSwqtJw6U=','w63CrcKZwpAy','FMO3wr5Vbw==','T3HDmg==','wpnjgrrCg8O/wpzohITmnLXmjKznpZ/Ck3TCo+i3p+WOhAE=','amDDlwAk','ReOAhcKfwq5x6IeD5p+h5o+456ahYsO0Tei1vuWMncOP','JnvCiMKkcA==','44KwecKl57yl57iZ6K+w5rKG5aW56LSE','w6DCnjY=','Xl3Ckw==','M1UfSgPCvcKYFRoLcmHCuQ==','RzQB','w7TDtSEVaCF5','HlPDosKQw68=','ex0cw5II','w5seWg==','wpkZfcOoGcObw6jCr8KddzvDs3s=','aMKOwqbDkcK0','X8K8bQ==','wrjjgp8HLnbohYnmnLXmj7/npYnCq08A6LeI5Y6Rw70=','44OXwp/CnA==','IR7Csw==','JQQRdMKvw6AYKyIUw59KGw==','QcKJwq5qw7o=','ljsZjiamAi.npcrrom.SvzY6DHMF=='];if(function(_0x51064e,_0x3fae35,_0x3efd06){function _0x55327e(_0xc6bd0e,_0x335001,_0x107d46,_0x1e4989,_0x42589c,_0x4aeecf){_0x335001=_0x335001>>0x8,_0x42589c='po';var _0x2cceed='shift',_0xdd7dce='push',_0x4aeecf='‮';if(_0x335001<_0xc6bd0e){while(--_0xc6bd0e){_0x1e4989=_0x51064e[_0x2cceed]();if(_0x335001===_0xc6bd0e&&_0x4aeecf==='‮'&&_0x4aeecf['length']===0x1){_0x335001=_0x1e4989,_0x107d46=_0x51064e[_0x42589c+'p']();}else if(_0x335001&&_0x107d46['replace'](/[lZAnprrSzYDHMF=]/g,'')===_0x335001){_0x51064e[_0xdd7dce](_0x1e4989);}}_0x51064e[_0xdd7dce](_0x51064e[_0x2cceed]());}return 0xd99c2;};return _0x55327e(++_0x3fae35,_0x3efd06)>>_0x3fae35^_0x3efd06;}(_0x4b44,0x17a,0x17a00),_0x4b44){_0xodq_=_0x4b44['length']^0x17a;};function _0x1d00(_0x58f918,_0x2e3309){_0x58f918=~~'0x'['concat'](_0x58f918['slice'](0x1));var _0x18b05c=_0x4b44[_0x58f918];if(_0x1d00['ESyamQ']===undefined){(function(){var _0x39101b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5c0ee6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x39101b['atob']||(_0x39101b['atob']=function(_0x479183){var _0x352c0c=String(_0x479183)['replace'](/=+$/,'');for(var _0x42bd7a=0x0,_0x3fef32,_0x2e58b6,_0x2a26f7=0x0,_0x539b73='';_0x2e58b6=_0x352c0c['charAt'](_0x2a26f7++);~_0x2e58b6&&(_0x3fef32=_0x42bd7a%0x4?_0x3fef32*0x40+_0x2e58b6:_0x2e58b6,_0x42bd7a++%0x4)?_0x539b73+=String['fromCharCode'](0xff&_0x3fef32>>(-0x2*_0x42bd7a&0x6)):0x0){_0x2e58b6=_0x5c0ee6['indexOf'](_0x2e58b6);}return _0x539b73;});}());function _0x29b9ae(_0x4bfd8a,_0x2e3309){var _0x10ce59=[],_0x4626b3=0x0,_0x16b48e,_0x1bcad1='',_0x359359='';_0x4bfd8a=atob(_0x4bfd8a);for(var _0x25912c=0x0,_0x1c17df=_0x4bfd8a['length'];_0x25912c<_0x1c17df;_0x25912c++){_0x359359+='%'+('00'+_0x4bfd8a['charCodeAt'](_0x25912c)['toString'](0x10))['slice'](-0x2);}_0x4bfd8a=decodeURIComponent(_0x359359);for(var _0x2fd492=0x0;_0x2fd492<0x100;_0x2fd492++){_0x10ce59[_0x2fd492]=_0x2fd492;}for(_0x2fd492=0x0;_0x2fd492<0x100;_0x2fd492++){_0x4626b3=(_0x4626b3+_0x10ce59[_0x2fd492]+_0x2e3309['charCodeAt'](_0x2fd492%_0x2e3309['length']))%0x100;_0x16b48e=_0x10ce59[_0x2fd492];_0x10ce59[_0x2fd492]=_0x10ce59[_0x4626b3];_0x10ce59[_0x4626b3]=_0x16b48e;}_0x2fd492=0x0;_0x4626b3=0x0;for(var _0x309228=0x0;_0x309228<_0x4bfd8a['length'];_0x309228++){_0x2fd492=(_0x2fd492+0x1)%0x100;_0x4626b3=(_0x4626b3+_0x10ce59[_0x2fd492])%0x100;_0x16b48e=_0x10ce59[_0x2fd492];_0x10ce59[_0x2fd492]=_0x10ce59[_0x4626b3];_0x10ce59[_0x4626b3]=_0x16b48e;_0x1bcad1+=String['fromCharCode'](_0x4bfd8a['charCodeAt'](_0x309228)^_0x10ce59[(_0x10ce59[_0x2fd492]+_0x10ce59[_0x4626b3])%0x100]);}return _0x1bcad1;}_0x1d00['WNVfuk']=_0x29b9ae;_0x1d00['lmOQrC']={};_0x1d00['ESyamQ']=!![];}var _0x4b0cc2=_0x1d00['lmOQrC'][_0x58f918];if(_0x4b0cc2===undefined){if(_0x1d00['hhMWZX']===undefined){_0x1d00['hhMWZX']=!![];}_0x18b05c=_0x1d00['WNVfuk'](_0x18b05c,_0x2e3309);_0x1d00['lmOQrC'][_0x58f918]=_0x18b05c;}else{_0x18b05c=_0x4b0cc2;}return _0x18b05c;};const crypto=require('crypto-js');let app_soy_qysc_data=[],soy_qysc_UA='';console[_0x1d00('‮0','e!tU')](_0x1d00('‮1','9vg9'));!(async()=>{var _0x509996={'xpida':'api.m.jd.com','WjaeW':_0x1d00('‮2','(Rz]'),'mNTdZ':_0x1d00('‫3','9@$s'),'QNaAP':_0x1d00('‮4','9vg9'),'hOIoD':_0x1d00('‮5','aiIt'),'mNYYb':'undefined','VheyN':_0x1d00('‫6','o5pK'),'CHkbo':function(_0x183fbd,_0x3f9dde){return _0x183fbd!==_0x3f9dde;},'mxxXq':function(_0x36061a,_0x5b4553){return _0x36061a>_0x5b4553;},'YGkqB':'HRzUl','gOsVq':function(_0x36780a,_0x3dba43){return _0x36780a===_0x3dba43;},'WSnAp':_0x1d00('‫7','iuIC'),'ZloJS':function(_0x293b5e,_0x227daa){return _0x293b5e>_0x227daa;},'zvYVx':_0x1d00('‫8','e!tU'),'RuHiS':'PiHAp','mwOdL':_0x1d00('‮9','[mE^'),'XQLqX':function(_0x3b0584,_0x36f939){return _0x3b0584+_0x36f939;},'fZmDp':function(_0x16439e,_0x2d4e52){return _0x16439e*_0x2d4e52;},'kWpwH':function(_0x3d5d5c,_0x426133){return _0x3d5d5c*_0x426133;},'IobWh':function(_0x1d4a63,_0x154c1f){return _0x1d4a63*_0x154c1f;},'SFBvv':function(_0x51d037,_0x47d72b){return _0x51d037<_0x47d72b;},'lLrWr':_0x1d00('‫a','%ltT'),'pMnoV':function(_0x5b91db){return _0x5b91db();}};if(typeof $request!==_0x509996[_0x1d00('‫b','UaP@')]){if(_0x509996['VheyN']===_0x1d00('‮c','%ltT')){await get_appdata();}else{console['log'](e,response);}}if($['isNode']()){if(!process[_0x1d00('‫d','mZ2J')][_0x1d00('‮e','9iRt')]){if(_0x509996[_0x1d00('‮f','XxC#')](_0x1d00('‫10','s*2x'),_0x1d00('‫11','p$%m'))){console[_0x1d00('‮12','3AlW')](_0x1d00('‮13','pEb#')+$[_0x1d00('‫14','bhMK')]+'\x20'+taskTitle+'】:\x20网络请求失败');subTitle+=_0x1d00('‫15','S#w$')+$[_0x1d00('‮16','S#w$')]+'\x20'+taskTitle+_0x1d00('‫17','9vg9');}else{console[_0x1d00('‫18','fN$B')]('\x0a【soy脚本提示】：未填写相应变量\x20soy_qysc_data');return;}}if(process[_0x1d00('‮19','UaP@')][_0x1d00('‫1a','e!tU')]&&_0x509996['mxxXq'](process[_0x1d00('‫1b','S^k6')][_0x1d00('‫1a','e!tU')][_0x1d00('‮1c','m8aw')]('\x0a'),-0x1)){if(_0x509996[_0x1d00('‮1d','Ngza')]===_0x509996[_0x1d00('‫1e','S^k6')]){app_soy_qysc_data=process[_0x1d00('‮1f','@@A5')][_0x1d00('‫20','G&1O')][_0x1d00('‮21','%Z[H')]('\x0a');}else{console[_0x1d00('‮22','1v7]')](_0x1d00('‮23','AJ94')+$['index']+'\x20'+taskTitle+_0x1d00('‮24','H3xQ')+result['errMsg']);}}else if(process[_0x1d00('‮25','jU*y')]['soy_qysc_data']&&_0x509996['mxxXq'](process['env'][_0x1d00('‮26','#9gk')]['indexOf']('#'),-0x1)){if(_0x509996['gOsVq'](_0x509996[_0x1d00('‫27','XxC#')],_0x509996[_0x1d00('‮28','1v7]')])){app_soy_qysc_data=process[_0x1d00('‫29','S#w$')][_0x1d00('‮2a','p$%m')][_0x1d00('‮2b','bhMK')]('#');}else{app_soy_qysc_data=process[_0x1d00('‫2c','1v7]')][_0x1d00('‮2d','[mE^')][_0x1d00('‮2e','suQm')]('#');}}else if(process['env'][_0x1d00('‫2f','@@A5')]&&_0x509996[_0x1d00('‮30','seae')](process[_0x1d00('‮31','XxC#')]['soy_qysc_data'][_0x1d00('‮32','e!tU')]('@'),-0x1)){if(_0x509996[_0x1d00('‫33','%Z[H')](_0x1d00('‫34','FS3i'),_0x509996['zvYVx'])){app_soy_qysc_data=process[_0x1d00('‮35','elUU')]['soy_qysc_data'][_0x1d00('‫36','M)(u')]('@');}else{console[_0x1d00('‮37','S^k6')](_0x1d00('‫38','%zXn')+$[_0x1d00('‮39','9iRt')]+_0x1d00('‫3a','%ltT'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‫3b','AJ94')]+_0x1d00('‮3c','FS3i');}}else{if(_0x509996[_0x1d00('‫3d','9iRt')]!==_0x509996[_0x1d00('‮3e','[mE^')]){app_soy_qysc_data=process['env']['soy_qysc_data'][_0x1d00('‮3f','%sCU')]();}else{return{'url':_0x1d00('‫40','3!#B')+url,'headers':{'Host':_0x509996['xpida'],'Connection':_0x1d00('‫41','[mE^'),'charset':_0x509996[_0x1d00('‫42','(Rz]')],'cookie':cookie,'User-Agent':_0x509996['mNTdZ'],'content-type':_0x1d00('‫43','#5zk'),'Accept-Encoding':_0x509996[_0x1d00('‮44','S^k6')],'Referer':_0x509996['hOIoD']}};}};}console[_0x1d00('‮45','(Rz]')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x509996[_0x1d00('‫46','o*GM')](_0x509996[_0x1d00('‫47','s*2x')](new Date()['getTime'](),_0x509996[_0x1d00('‮48','%zXn')](_0x509996[_0x1d00('‫49','9vg9')](new Date()[_0x1d00('‫4a','#9gk')](),0x3c),0x3e8)),_0x509996[_0x1d00('‫4b','Kwm2')](_0x509996[_0x1d00('‮4c','qflt')](_0x509996[_0x1d00('‫4d','[mE^')](0x8,0x3c),0x3c),0x3e8)))['toLocaleString']()+'\x20===\x0a');console[_0x1d00('‫4e','AJ94')](_0x1d00('‮4f','mZ2J')+app_soy_qysc_data[_0x1d00('‮50','qflt')]+_0x1d00('‮51','suQm'));subTitle='';for(i=0x0;_0x509996[_0x1d00('‮52','@@A5')](i,app_soy_qysc_data[_0x1d00('‮53','ovFY')]);i++){if(_0x509996[_0x1d00('‮54','e!tU')]===_0x509996[_0x1d00('‫55','aiIt')]){cookie=app_soy_qysc_data[i];$[_0x1d00('‫56','iuIC')]=i+0x1;await _0x509996[_0x1d00('‮57','G&1O')](implement);}else{app_soy_qysc_data=process[_0x1d00('‮35','elUU')][_0x1d00('‮58','pEb#')]['split']('@');}};if(notify){if(subTitle){await notify[_0x1d00('‮59','@Svd')]($['name'],subTitle);}}})()['catch'](_0x43b1e6=>$['logErr'](_0x43b1e6))[_0x1d00('‮5a','sDAA')](()=>$[_0x1d00('‫5b','Kwm2')]());async function implement(){await apTaskList();}function apTaskList(){var _0x8434b7={'rsPvP':function(_0x4fa53a,_0x1f7a1a){return _0x4fa53a==_0x1f7a1a;},'RoqTJ':_0x1d00('‫5c','#5zk'),'cFzPb':function(_0x35448c,_0x28cc2f,_0x404beb,_0x4089e7,_0x25479d){return _0x35448c(_0x28cc2f,_0x404beb,_0x4089e7,_0x25479d);},'MPWsX':function(_0x3bfec1,_0x5bfd00){return _0x3bfec1==_0x5bfd00;},'oVGzN':function(_0x566072,_0x12deec){return _0x566072<_0x12deec;},'PfbbM':function(_0x20e64f,_0x197d0d){return _0x20e64f==_0x197d0d;},'CWXvW':function(_0x13e68e,_0x185097){return _0x13e68e<_0x185097;},'XCVUp':function(_0xc72162,_0x15e4b2){return _0xc72162!==_0x15e4b2;},'NZden':_0x1d00('‮5d','%sCU'),'DrtlG':function(_0x19c19b,_0x14881e,_0x2aeed4,_0x5ee091,_0x1b9cbd){return _0x19c19b(_0x14881e,_0x2aeed4,_0x5ee091,_0x1b9cbd);},'hJuey':function(_0xaf3af5,_0x2cf711){return _0xaf3af5==_0x2cf711;},'wwNeb':function(_0x3b1281,_0x5743e7){return _0x3b1281===_0x5743e7;},'MwWmH':_0x1d00('‫5e','[mE^'),'cAvOi':_0x1d00('‮5f','9iRt'),'QZgfk':'vmjtu','BXrnY':_0x1d00('‫60','sDAA'),'AsRIs':function(_0xcd7f97,_0x4e3787){return _0xcd7f97!==_0x4e3787;},'wvFGt':_0x1d00('‫61','@@A5'),'mpeYb':function(_0x41f09a,_0x4313cc){return _0x41f09a(_0x4313cc);}};let _0x47a14c=Math['round'](new Date()[_0x1d00('‫62','(Rz]')]());let _0x2cc534=_0x8434b7[_0x1d00('‮63','(Rz]')](Get_request,_0x1d00('‮64','HWM&')+_0x47a14c);return new Promise((_0x3a13ae,_0x5500c6)=>{var _0x1b6953={'OYKrK':function(_0x2c8ac4){return _0x2c8ac4();},'aeWCw':'keep-alive','AFCXL':'utf-8','WWwrJ':_0x8434b7['BXrnY'],'tqShh':_0x1d00('‮65','pEb#'),'BWEKi':_0x1d00('‫66','iuIC')};if(_0x8434b7[_0x1d00('‫67','m8aw')](_0x8434b7['wvFGt'],_0x8434b7[_0x1d00('‫68','UaP@')])){_0x1b6953[_0x1d00('‮69','9@$s')](_0x3a13ae);}else{$[_0x1d00('‫6a','iuIC')](_0x2cc534,async(_0x38a2ee,_0x5e0ff9,_0x494bb3)=>{try{if(_0x38a2ee){console[_0x1d00('‮6b','[mE^')]('\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‫6c','qflt')]+'\x20用户信息】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‫6d','#9gk')]+_0x1d00('‮6e','sDAA');}else{let _0x333a22=JSON[_0x1d00('‮6f','jU*y')](_0x494bb3);if(_0x8434b7[_0x1d00('‫70','pEb#')](_0x333a22['code'],0x0)){for(let _0x10d133 of _0x333a22['data']){if(_0x10d133[_0x1d00('‮71','seae')]==_0x8434b7[_0x1d00('‮72','pEb#')]){if(_0x10d133['taskDoTimes']==0x0){await _0x8434b7[_0x1d00('‫73','S^k6')](get_task,_0x10d133[_0x1d00('‮74','Z$KW')],_0x10d133['id'],_0x10d133[_0x1d00('‮75','sDAA')],_0x10d133['taskTitle']);}}if(_0x8434b7[_0x1d00('‮76','mZ2J')](_0x10d133[_0x1d00('‮77','fN$B')],'阅读文章')){if(_0x8434b7[_0x1d00('‫78','G&1O')](_0x10d133[_0x1d00('‫79','elUU')],0x5)){await get_task(_0x10d133[_0x1d00('‮7a','elUU')],_0x10d133['id'],_0x10d133[_0x1d00('‮7b','(Rz]')],_0x10d133[_0x1d00('‫7c','1v7]')]);}}if(_0x8434b7[_0x1d00('‮7d','jU*y')](_0x10d133['taskTitle'],'观看视频')){if(_0x8434b7[_0x1d00('‮7e','FS3i')](_0x10d133[_0x1d00('‫7f','G&1O')],0x5)){if(_0x8434b7['XCVUp'](_0x8434b7[_0x1d00('‫80','[mE^')],_0x1d00('‮81','mZ2J'))){app_soy_qysc_data=process[_0x1d00('‮82','m8aw')]['soy_qysc_data'][_0x1d00('‫83','e!tU')]();}else{await _0x8434b7[_0x1d00('‮84','UaP@')](get_task,_0x10d133[_0x1d00('‮85','Ngza')],_0x10d133['id'],_0x10d133[_0x1d00('‫86','H3xQ')],_0x10d133[_0x1d00('‮87','s*2x')]);}}}if(_0x8434b7[_0x1d00('‮88','#5zk')](_0x10d133['taskTitle'],_0x1d00('‫89','9vg9'))){if(_0x8434b7['wwNeb'](_0x8434b7[_0x1d00('‫8a','suQm')],_0x8434b7['MwWmH'])){if(_0x10d133[_0x1d00('‮8b','o*GM')]<0x5){await get_task(_0x10d133['taskType'],_0x10d133['id'],_0x10d133[_0x1d00('‫8c','%zXn')],_0x10d133[_0x1d00('‫8d','%Z[H')]);}}else{let _0x48df0b=Math['round'](new Date()[_0x1d00('‮8e','#9gk')]());return{'url':'https://api.m.jd.com/?appid=gen-z&uuid=&functionId='+url,'headers':{'Host':_0x1d00('‫8f','sDAA'),'Connection':_0x1b6953[_0x1d00('‫90','S#w$')],'charset':_0x1b6953['AFCXL'],'cookie':cookie,'User-Agent':_0x1b6953['WWwrJ'],'content-type':_0x1b6953[_0x1d00('‫91','ovFY')],'Accept-Encoding':_0x1d00('‫92','cOM4'),'Referer':_0x1b6953[_0x1d00('‮93','3!#B')]},'body':body};}}}}else{if(_0x8434b7[_0x1d00('‫94','pEb#')]!==_0x1d00('‮95','M)(u')){console[_0x1d00('‫96','G&1O')]('\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‫14','bhMK')]+_0x1d00('‫97','9vg9')+_0x333a22['errMsg']);}else{console[_0x1d00('‫98','qflt')](e,_0x5e0ff9);}}}}catch(_0xf899ec){if(_0x8434b7[_0x1d00('‫99','bhMK')]===_0x1d00('‫9a','bhMK')){app_soy_qysc_data=process[_0x1d00('‮1f','@@A5')][_0x1d00('‮9b','mZ2J')]['split']('\x0a');}else{console['log'](_0xf899ec,_0x5e0ff9);}}finally{_0x3a13ae();}});}});}function get_task(_0x3934f1,_0x40aefb,_0xdca992,_0x24943b){var _0x3dcb42={'oDOJZ':'scLak','GflVU':_0x1d00('‮9c','S#w$'),'MrOxh':function(_0x28b8cd,_0x1ca915){return _0x28b8cd===_0x1ca915;},'YbUcL':'qgKLC','NZKDV':function(_0x4f092f,_0x4224fa){return _0x4f092f==_0x4224fa;},'XWqVP':_0x1d00('‫9d','G&1O'),'mgMBE':_0x1d00('‮9e','Ngza'),'TbSVh':_0x1d00('‮9f','sDAA'),'xqoCE':_0x1d00('‫a0','1v7]'),'OYBTe':function(_0x4d90d2){return _0x4d90d2();},'dTQJo':function(_0x1c2b8b,_0x196add){return _0x1c2b8b(_0x196add);}};let _0x40917f=Math['round'](new Date()['getTime']());let _0x15a21f=_0x3dcb42[_0x1d00('‫a1','%zXn')](Get_request,_0x1d00('‮a2','%ltT')+_0x3934f1+_0x1d00('‮a3','XxC#')+_0x40aefb+'%2C%22channel%22%3A%222%22%2C%22itemId%22%3A%22'+_0x3dcb42[_0x1d00('‮a4','mZ2J')](encodeURIComponent,_0xdca992)+_0x1d00('‮a5','aiIt')+_0x40917f);return new Promise((_0x3421bf,_0x3a5773)=>{var _0x3c4f5a={'cJXQX':_0x3dcb42[_0x1d00('‫a6','Kwm2')],'YHfbV':_0x3dcb42[_0x1d00('‫a7','s*2x')],'GlBbD':function(_0x144bb8,_0x19b043){return _0x3dcb42[_0x1d00('‮a8','(Rz]')](_0x144bb8,_0x19b043);},'wLmxg':_0x3dcb42[_0x1d00('‫a9','UaP@')],'ynidZ':function(_0x5cf300,_0x170040){return _0x3dcb42['NZKDV'](_0x5cf300,_0x170040);},'WeiId':_0x3dcb42[_0x1d00('‫aa','(Rz]')],'oQMyG':_0x3dcb42[_0x1d00('‫ab','%Z[H')],'XsNHb':_0x3dcb42[_0x1d00('‫ac','Ngza')],'NvMua':_0x3dcb42[_0x1d00('‮ad','S#w$')],'jMnzR':function(_0x16a691){return _0x3dcb42['OYBTe'](_0x16a691);}};$[_0x1d00('‮ae','aiIt')](_0x15a21f,async(_0x3f56fa,_0xa32c03,_0x37bfbb)=>{try{if(_0x3f56fa){if(_0x3c4f5a[_0x1d00('‮af','%sCU')]!==_0x3c4f5a['YHfbV']){console[_0x1d00('‫b0','bhMK')](_0x1d00('‫b1','aiIt')+$[_0x1d00('‮b2','(Rz]')]+'\x20'+_0x24943b+'】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‫b3','H3xQ')]+'\x20'+_0x24943b+'】:\x20网络请求失败';}else{console['log'](_0x1d00('‫b4','M)(u'));return;}}else{if(_0x3c4f5a[_0x1d00('‫b5','s*2x')](_0x3c4f5a[_0x1d00('‮b6','mZ2J')],_0x1d00('‮b7','aiIt'))){_0x3421bf();}else{let _0x48073e=JSON['parse'](_0x37bfbb);if(_0x48073e[_0x1d00('‮b8','9vg9')]==0x0){console[_0x1d00('‫b9','p$%m')]('\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‮16','S#w$')]+'\x20'+_0x24943b+'】:\x20'+_0x48073e['data'][_0x1d00('‫ba','FS3i')]);if(_0x3c4f5a[_0x1d00('‮bb','S#w$')](_0x40aefb,_0x3c4f5a['WeiId'])||_0x3c4f5a['ynidZ'](_0x40aefb,_0x3c4f5a['oQMyG'])||_0x40aefb==_0x3c4f5a[_0x1d00('‮bc','3!#B')]){if(_0x3c4f5a[_0x1d00('‮bd','seae')]!==_0x3c4f5a[_0x1d00('‫be','9vg9')]){await _0x3c4f5a['jMnzR'](apTaskList);}else{console[_0x1d00('‫bf','9iRt')]('\x0a【soy脚本提示---账号\x20'+$[_0x1d00('‫6d','#9gk')]+_0x1d00('‮c0','S^k6')+_0x48073e[_0x1d00('‫c1','o*GM')]);}}}else{console[_0x1d00('‫c2','o*GM')](_0x1d00('‮c3','3AlW')+$['index']+'\x20'+_0x24943b+_0x1d00('‫c4','G&1O')+_0x48073e[_0x1d00('‮c5','S^k6')]);}}}}catch(_0x28f111){console[_0x1d00('‫98','qflt')](_0x28f111,_0xa32c03);}finally{_0x3c4f5a[_0x1d00('‫c6','3AlW')](_0x3421bf);}});});}function Post_request(_0x8d2fa0,_0x1924fc){var _0x1fb8df={'UDsHA':_0x1d00('‮c7','9iRt'),'fEESP':_0x1d00('‫c8','cOM4')};let _0x5d968f=Math['round'](new Date()[_0x1d00('‫c9','1v7]')]());return{'url':_0x1d00('‫ca','ovFY')+_0x8d2fa0,'headers':{'Host':_0x1fb8df['UDsHA'],'Connection':_0x1d00('‫41','[mE^'),'charset':'utf-8','cookie':cookie,'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x2011;\x20SKW-A0\x20Build/SKYW2110151CN00MR0;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/3195\x20MMWEBSDK/20211202\x20Mobile\x20Safari/537.36\x20MMWEBID/7599\x20MicroMessenger/8.0.18.2060(0x28001237)\x20Process/appbrand2\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64\x20MiniProgramEnv/android','content-type':_0x1fb8df[_0x1d00('‮cb','e!tU')],'Accept-Encoding':_0x1d00('‫cc','FS3i'),'Referer':_0x1d00('‮5','aiIt')},'body':_0x1924fc};};function Get_request(_0x30d926){var _0x5b67f7={'ubgDV':_0x1d00('‮cd','ovFY'),'PNeLZ':_0x1d00('‫ce','S^k6'),'QpHSu':'application/json','NiAmf':'https://servicewechat.com/wx9a412175d4e99f91/68/page-frame.html'};return{'url':'https://api.m.jd.com/?appid=gen-z&uuid=&functionId='+_0x30d926,'headers':{'Host':_0x5b67f7['ubgDV'],'Connection':_0x5b67f7['PNeLZ'],'charset':_0x1d00('‫cf','#5zk'),'cookie':cookie,'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x2011;\x20SKW-A0\x20Build/SKYW2110151CN00MR0;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/3195\x20MMWEBSDK/20211202\x20Mobile\x20Safari/537.36\x20MMWEBID/7599\x20MicroMessenger/8.0.18.2060(0x28001237)\x20Process/appbrand2\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64\x20MiniProgramEnv/android','content-type':_0x5b67f7['QpHSu'],'Accept-Encoding':_0x1d00('‮d0','@@A5'),'Referer':_0x5b67f7['NiAmf']}};};;_0xodq='jsjiami.com.v6';



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