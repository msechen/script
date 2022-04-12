/*

软件名称:优享鑫生活

项目注册地址(微信打开):https://gitee.com/soy-tool/app-script/blob/master/picture/lmyx.jpg

签到获得分红币,分红模式,目前微信授权,绑定手机号


固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
注释：
TG频道用户ID关注 @getmyid_bot 机器人获取
激活卡密关注 @soyyun_bot 发送 /start按提示获取，如果支付失效请联系【暂未启用】
TG频道:【暂未启用】


脚本需要的变量:
变量名:soy_yxxsh_data
变量值:token&&UA
注释:token抓包找到带有有 https://youxiang.lglm.shop/web/index.php 的链接,链接上的access_token值即是,UA是请求头上的User-Agent值(选填)


多个号用 @ 或 # 换行 隔开

cron 31 ,9,17 * * * wx_yxxsh.js

*/


const $ = new Env('【优享鑫生活22/04/12_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';


var _0xodJ='jsjiami.com.v6',_0xodJ_=['‮_0xodJ'],_0x16e6=[_0xodJ,'QcKLw5DDpcKdwqoO','wp3DkmDCiw==','wo56KsO4Cw==','ViYzdcKNwqpM','O2UKJ2U=','w7Zhw74KwrVr','QsKcw4vDk8KIwro1wpfDl8Kn','wrNKZmMVfsOvXcKww7hNw7w=','JWQjwoPCh8O0w7lG','TcONKlI=','CMKXw5vDk8OTwqoKwo/DisK3cjZZSg==','w6NfwoHDlMOU','wrDCnlhmOA==','NQsrdg7Cg8O3wrbDkRVY','wpgTwrfCicOr','BEnDlMORXg==','wrNbAA==','w6VNwoc=','w7LjgIfDlDPCgeiHqOacuOaOkOenki3DgUfotIbljbXCrQ==','wpfDicKxfjo=','wqrlhYHmjZ/pgZjooIroraXjg7HDrjo=','VMOMJA==','w4g4JCpK','wpUwf8KWGA==','ecOoNFzCpA==','wrhRE8O5FGnCp8OIw7k9w5s=','d8KTw7bDtMK2','woxoByfCmA==','w5jlhYbmj4XpgYboorTorLPjgIV6w4g=','w4HDj8KP','C+OCtjFDwqzohIvmnL7mjrLnp4cjVsOv6LSc5Y2XHA==','AOWHoeaNqumDneigkeitvOOBhcORwpA=','HgDCoQ==','w74cw67DksOI','wojmip3kuJDliITkv5PotYIFembCvcOL6K+06IeI6KK65a6n6KO7ag==','w7jCp0VDLw==','wrbDoi7ClA4=','w6HDsHjDknc=','wrvClSJuw6fDvlxEwpvCnXAzY1LDs2jDmHwsw4XDlS96w5bDoXXCtsKD','w4/Cq8KvX8O8','LEnDhMOqdg==','b2YId3c=','PWQX','w7HChsOI55us5b655aWj6LaDwpjDrei8geWYqg==','w7XCsMOkeMKmXQ==','w63Dn2rDl2k=','ZjkUaGQ=','KsK1wpcwIQ==','Wy0w','MeevsOWKgOOCjsKFRw==','WjEw','w5rnrr7li6bjg4gow5A=','w6/CkHo=','wq1AYA==','VUNiUcKX','VMOlDXd3','CcKAKsO8','w5TCrsOsdsKA','w5PpoaLliJjnup7jgbp8Hg==','wpPDlMKy','SeODvjLDmFbohKTmn4TmjIHnppTDssKGw6DotZLlj7HDtw==','AQtV','J8KZwoM=','w6/CqsOhacKr','eeOAi8OMDsO86ISA5p2k5o6y56SSw67DgMOh6LSe5Y+bwqk=','SumhqeWJiOe4u+OAsDjCiA==','wq3CmxA=','F+migeWJrOe6neOAq8Knwoc=','w5MPw6XDs8O/','w5pYdTEU','IcOYZ8OBw7o3wpLDssO/w63Dr8KZGlMPcsK3wpY=','UsKQw4TCjcOE','Lxo+YhnDkMKqw4rDmx5JZGvDtnxSNcKQJjPDuMKZwpgQwoQBw7zCuMKLfcO4VHYMT8KoZV4Lw6HDigzDkWbDr8KhI1Qjb8OmwqzCusOawo/Ctys+ISjCjsOQ','CMKuRDPCgQ==','cMKnw5TDmMKr','QTwGSEI=','w4lnwrfDisOT','w4wFRUPDhhPCiQHCpDFzHD3DlMKHw4J4Wzhhw77Dk8Kjaw==','w69bwpTDh8OPJ8Oow6nCjWHDjg==','UGIeclXDs8OTwr0=','wpTCgWp4CjJb','wpHCgVtREw==','w7ccw7nDjcOU','O3nDssOAag==','KXY6HGc=','wp1tC8O9Dw==','wrpOw4sewpY=','wotPFeS+pOeViOWNouWut8K/cQ==','WnQN','w6DorJ/phrrmlqfotrTohaHmnJ0=','w5XCl3dbBXs=','AxzCtcOW','LMK2UCrCsQ==','wrpNPsO3w5I=','US44aMKa','TGZFcMKa','NsOYZQ==','wrfChMOj','w6rCjG5AIHVIUA==','P8KZwrcuIGfCicKd','wrAWwoHChMOKcMKcw6w=','w6dfZnQgYMOsSsKHwrwSwq3Dm8Kaw64qw754wqXDvzQMw4gaw5Mu','wpsxAA==','w7nDvmvDon8=','wqUawrHCn8ONd8KGwrY=','Jg0vVgU=','K2kaBsKu','wrRcYnUMe8OsX8KMw68=','MH3DqhnDkQ==','IXvDt8O0Tg==','wpZyAjbClQk=','FcKtM8O2fw==','wrPDjUDCv8KF','wpVnETHChQ==','wpvDjHnCgsK1','w6zDsmXDg34=','wrfCiR5j','ccKWw7DDg8KM','VcOOM1h6','DxdWbQ==','I0vDsRjDpA==','ZDAxelU=','w78QS1jChA==','wrrDhcKXSSE=','w4LCpsOHXsKw','wr8+VMKXGQ==','LeODtMORw4/CheiHk+adiuaMvuemg8OpcHXotJrlj4nCoQ==','LgAudxI=','w5rpoYbli5DnubvjgIPDisOU576k57uW6K6D5rGz5aaI6LeR','JSRQ55i15b6T5aWl6LSIwrHDhw==','wpwVJ+eZvOW8huWkpui2pgLDg+i9leWbvQ==','KMKEwp0qJmHDisKQwo0=','w7bDs3vDrmY=','ScKLw5U=','NVpF','wqjChwRjCxpcw6g=','w7bCjE5APH1LUg==','H8OPIkxRYGh7UAjDgV7ChgZIfcKJw6nDv3HDq8K9w6w2wqHClEDCrBZmw75dwqYvwrXCmF8=','w55jwpo=','w4vCgMKw','JEo/D24=','CTHCgcODwro=','HUzCh0DDosKVw69m','RBETfsKk','wrvCuT1sw7vCsA==','wplcw74Xwp8=','wqEawpHCnw==','wqXDjg3CtyU=','VS0zfg==','wplqfUo0','JAEudw==','JmoZwoM=','wrAzeOaxreWEmOaOsOacvsOgw5A=','w4hpexgM','w6xnw5IWwqV8','eBU5S8KJ','BhXCosOywrU=','ZMKFY+azl+WGruaOn+adhDMU6L+h5Ziu','wqxABsOLFHY=','wqTCkHRTICk=','GcKoNsObQw==','w4XCisKB','w67CqSZiw6XDuQhSwo3DmDF1fRLCvyPCug==','w5XCkHFXDigD','wrvCvmk=','wrdPPsOuw7o=','w6rCrMKhasOH','wpFpMDbCkhMMCQ==','woTDmzzCiQo=','IR1TQMOG','O3EWwqfCoQ==','w7/DuHrDuWbChC0=','HBdBfA==','wqYUR8KoBQ==','wqxAFcOWD2LCosO3w6U=','FnQ7LHM=','w7vDsmrDgw==','wpBbNsOaDg==','wpkvwqXCjsOq','N1HDsDLDpg==','w4knFg==','Y+WFrOaMqemBkuihpuivjOOAjmHDmee9oue6quitv+azmeWni+i1vA==','MeWHn+aPkumCheijs+iupuOBosOqWee9oee6v+itn+aygeWmlui2mA==','Jj4DYzg=','wphKb24b','wq7DmGHCjMKl','wqhBY2Ir','AOevjuWIuOODlmfCnee8hee4t+ith+axmeWnoui3pA==','BUzCsw==','WkBH6aqO6K+W6LSF5Y6Nw4oK6ZyEwpTDuTfku5Togornuq3nuY/kv6jnlY3ohqbmnJTvvIrlsLnorJPljI3lrqvmvYHmtbN0LWA=','wp3DklfpqpvorqTotZ3lj4bCt07ovbHlmoU=','woDCkH9IHjU=','w7cGwovCjMORIw==','wqbCo31ZJA==','w6DCqMOqY8Kh','w5LCo8Kaa8O9','V8OQNA==','w6bCgxZ6DEY=','w4NyXg==','w4hQwqk=','wrpiA8OIBw==','wq5EFyvCpw==','C2oROsKzJw==','w6BGCXDCng==','bMO4IFpt','w6jDvHzDlXU=','OsOYdsOA','wp03QcKyJw==','P8OGXMO/w6M=','w5/DmT3kvYvnlabljbXlr6MPFQ==','TcODbw==','wolpBA==','woIOR+S/gOeVieWNpOWsjcKrwrw=','AAPCqsOLwrs=','w5vDvsKl5L2z55e75Y2P5a+pPRrovbjlmIE=','wotjw4Yowo3CgQ==','ScODRsKoOcOY','wrUHTMKrFGxcw68i','wpfmirTkuZnliLvkvIjot5sVSMKHw5kyaTRRwqA9wqcg6K636IWO6KOt5a+A6KOQwq4=','Lh0EfQ7Cjw==','HFzDksOSAcOTEMODERZLwpHDqcOlN3g4asO5DMOkw5zDqsKqSsOjwpvCtT/DssKEN8Kmc8OgGUvCsMKuwqrCoQoBw50=','K0AKwqXChQ==','WkEib1A=','bMKdOMOEAF3ChMKww53CrMKEwqMRcg==','dMO6w5g=','wqhwLSPCiA==','wofDnH3CjQ==','w7nCtMKFb8OT','wonDvsK9fRo=','e8OIw4DDvcOJ','w61xw40owrQ=','w5bDsMKcw4LCjQ==','w4h7w6YQwq11w4LCsMK2w5ZvEUXCv1fDk8KRYirDsUjDjw9vw5XDkMKgw4xJdC4tw5xdwrnCm3wCYi3DiB/CpSZuwofDocObUSDDp10Mwp/Dp3U+w7lxwoBQw6TCq8K5I3rDtDfCgz/Di21eHg4dbxUkEcOYVcO2w6Uqf8KYw7zCi8Ojwo3CjCzDmi9/wr7DpxYTw4hLwq/DgMKbwrQEcQtZcGvCp38yQTxwacO4w5nDkzrCu0XDscOLw6DDrMOYwppQb8KtwrTDuGMcN8KVNMOCBkNFwpsjw7gPOWLCjTHDssKkwp7DsMK7UUspw59/elDChnLDpg1+PQoxw58hwpXDsCnCnsOPwpIfw6g4f8OhMF/DpMOsw6jDp8OlAcOlwp8pw6woPFTDmMO9w6TDv0MBQhQGHsKPwr9UFsOVw6fDk2zCi8ODwqY=','wp49woHCoMOe','J0TDgMO2cg==','M8KPcivCiQ==','HMKmwrMcPg==','fjg1TEQ=','UG4YWXY=','wpxbw6kswrc=','wqlew5Azwpo=','McKLIMOTS1fCmsKCw5fCscOI','BFbCnFDDhA==','IMK+OMOxZA==','w4EGPTV8','wojDnxbCgyA=','CQBbe8Oaw7YGEcOiw6Q=','w7LCgm9HKw==','w6XCq8OhaQ==','KsKAJcOSVw==','wovnrIHliJzjgKLDkFA=','wqHjga9fXMKT6IWq5p+K5o6856eubjtC6LWo5YyPw4U=','w7TCpDBuw60=','w5PnrprliK7jgK1RZg==','w6hnw7s=','w6/jgJYQLcKZ6IWg5p2O5o6+56SywpN3E+i1t+WMn8Oy','w5BALkDCtQ==','wpnnrZDlibrjgLTDtxs=','wpVkw4A=','dBUeXW5aAMKvTjvCtsOR','w7E4w68=','44O077yc5p2J5aCp5YW555qC5bu25Y626YeHwp4pUSjCt8Krw6jDoMKlfsO/w73Dog==','w7lgUSsy','VMKUw47DicKI','wrJAflgqb8O7S8KLw55Hw77CnMOP','w6jCpcOoaQ==','w4AmBw==','VMKLw5vDv8KFwrEewp3DkcKbOTlIXw==','w4jDucOz','w5BALkDCtXTCqA==','CRZE','wot4w54DwoHCimwzwoBfwogLVMOj','QExm','w5/Dk8KRw4jClSrDnsORwqXCisKQwpTDkMKJ','OsK6B8OAZQ==','HxdLV8OXw70tG8Okw5h+w6Rlwog=','HwheYcOa','HxzCoQ==','6K6e5rGhwpVkw5nlp43otqQ=','wpbCr8Kx','wrPCnAV+CxxYw6sX','TMOfbw==','Ekc8GMKq','RGgTYEPDpcOfwqZGCMKAfMOYw5o=','wp7ClsKdwrJT','w6TCklx+Kw==','EUbDkA==','RDI7bsKc','NGUG','C3EJEcK/LFXDuMKPBR0SbEI=','wo3Dl8K5cjY=','wpLDk38=','SsOQOmBbb396XGrClA3DgVM=','GlPCuF3DpA==','S8KBw4zDh8KIwqE=','bcOJJQ==','wqIBwoPCn8OKbQ==','QldKeMKL','bMOCRMKuFQ==','JVHCmF3DmA==','axUA','w4wmFRlz','HmjDmA==','UuOCp2HDlsOq6IWM5p+Q5o2F56erwqzCpcOY6LWR5Y6KXA==','MeiljOeeu+W7oOWTteOBtknDsA==','BsKAKQ==','wpfjg5rohY7mnKfmjYXnprfjgKTvvLHmrpHohrrmna7lj7fogqbpnK7pvZPnj6HloITot50=','S8KLw4U=','w6zCuWR2Jg==','wp3CpcKiwo17wp3CkQ==','wpTCkQ5DLw==','bcOGOmto','w5xHwpnDlcOw','FwMDaBo=','BxzCisONwqzCo8OBecKZAMOpw4cjw6s=','w57CmsOoJkg=','wr0awoU=','wph1TOOBrOWFulI=','B+S7jui2hOWNl+ODrcO0W8OTwrM=','wqJOGcOUw44=','KwEt','PeOBkiRowpHoh4PmnJPmj4bnpKTCkcKOYei2luWOs8Ky','w4TDucOhwrRa','VOmiruWKoOe4gOOAqsOGHw==','wprDjm4=','YOODvz3DtljohJjmnoTmjY/np6ppwqlg6LWs5Y6lw78=','wo3poJHlioPnubPjgLMlNA==','MVwJFsKy','CcKNcBrCuA==','w6RRwoc=','UMORJ1pa','WOS4tOi1luWOueS4veWLteOAvA==','w41ccwUX','dB8JZllMDsKZTCM=','w7PCqzlu','woFmP8OAw6ZK','wpzCqcK4wrh+wpzCjQ==','w4zDssOuwrBl','wonCvX9vLg==','M8OfV8OAw4Q=','IzLCtMOpwr0=','R8O3R8KMOg==','w4J6IcO2wrtbEcK7woMIwrTCjsOBSw==','IsKeKMKSHXjCgcK/w5rCusOMwr8VasK6w5vDkx7DpCfDmVsPPAXDmx5vBXIlDMKZZcOiw7nCncO3RsOZCWN7w7bCo8KEEzLDgBxS','wqTCvGtRPGdMWlvCoMOVLRrDmBcYP8KAw7Q4woDDhyhyacK7w4PDsg==','FH7Diw==','wpdiBMORAA==','woDCi2djEj5GcT5Dw4nCicOVw4M=','BgoYUxI=','w67CjHo=','w7/nrYrliZfjgq5bJee+mue5jeitq+awnuWmmOi2pA==','w6FQwoTDpMOC','eOevieWIouOCqMKpdue+ree5ieispuazg+Wmuei3kA==','NicsVj4=','wo7DmCfCsio=','wpjCjFtFPA==','wqzChxA=','UMOResK0OA==','S8KGw4rDucK6','w6HCjHlR','worDrMKgXi8=','w6ddwq/DlcO4','w4fCisKR','woDjgIBOLT/ohr7mn4zmjITnpKABFcOI6LSg5Y2twrc=','aMOIJknCrQ==','U+esjeWLtuOCs8O1w6I=','wrPjgL45SsK06ISh5p+i5oyJ56Whw7ENROi0q+WOpEg=','wqbnrrrlirXjgJ3DqQ4=','KcKBKMOZ','d8O8bsKOMw==','w4obSEHCjwPClQ==','LygoeD4=','Q3UDUg==','w5rCu3h9BQ==','E8OwYcOMw4U=','w5rDs33Dr0Y=','w4HDhH3Dg3s=','d05kYMKq','w5fDmcOywql6','w6rDjsKSw7TCgQ==','wpbDgRXCoA0=','w7JwwpfDucOi','w4nDs8Kgw7zCmQ==','w7LCs8KFe8Oi','woFmPw==','wpLjgo19w4lp6Ie35p2x5o2b56W+dMKiwrvota3ljZU0','woRnPMOgw6w=','w7fjgpsEwpU76IWj5pyZ5oyB56SFw7QfQui1p+WNmMK4','w57opaXnn57luaTlkIjjgoAyVue+tOe6leisgOazuOWmoui0lw==','w7HCpTM=','EXAUK8K+','L+OAsmNNwovoh6jmnI7mjpXnpYHCvcOow53ot5nljbkJ','McOZdsOcw6s=','G2k9FsKT','AMKxwpcvBA==','woh/JMOuFQ==','M8KPM8OESg==','w5hVfA42','O8OYdsOc','H3TDmA==','wojjg7NuWzfohI7mnInmj6XnpI/CsMOKLui0hOWMgQ4=','KlMvLVI=','w7Hoprfnn6nlupTlk7XjgI/DksOx','w4g7Fg==','wpfjg5onZMOs6IaX5pyZ5o+756ePwo1vMOi1veWOi8Oq','Cw8HaAk=','wrHDqjrCgCE=','L8KBJg==','IsKYwoA/Kg==','QOikoeecn+W4gOWSiuODnsO9Ww==','wqxcYA==','B+ikpueeqeW7n+WStuODmFzDjg==','agkA','BcKNYg==','MFIyF1N1ZyjCkWwSw6nDr8Kb','w4lPOFbCqA==','w7TDsmk=','w5cqHeS8veeVruWPheWspsOuOg==','wpfCs8Kx','R8Obe8KwFg==','K3gFIcKI','wq3DgcKgdAw=','d8OEa8OKwrw1wpDDtMKiw7LCp8KbEglT','MHsZw5jChsO1w7ZTUEddNsKMZMKSJcOiwoXDqcOIaU3DhFBtw7TDhsKnLmo0D8OvwqxDdcOFw4rDi8O9wrI5NirDqXHDo0lkAcOcfwrCnQst','BHtYQw7DocKWwqke','w7NTSQkx','QsKQw4o=','GRvClcObwqg=','wrVFS0sg','wpvDkm4=','wrgbwobCjsOH','jPsjYGpIiVami.tRcdbJnfowm.v6=='];if(function(_0x259f18,_0x225e5e,_0x21ff67){function _0x3dd4dc(_0x51290f,_0x261369,_0x88712,_0x430b7a,_0x41dd9f,_0x7d29ff){_0x261369=_0x261369>>0x8,_0x41dd9f='po';var _0x3c73cb='shift',_0x5ae241='push',_0x7d29ff='‮';if(_0x261369<_0x51290f){while(--_0x51290f){_0x430b7a=_0x259f18[_0x3c73cb]();if(_0x261369===_0x51290f&&_0x7d29ff==='‮'&&_0x7d29ff['length']===0x1){_0x261369=_0x430b7a,_0x88712=_0x259f18[_0x41dd9f+'p']();}else if(_0x261369&&_0x88712['replace'](/[PYGpIVtRdbJnfw=]/g,'')===_0x261369){_0x259f18[_0x5ae241](_0x430b7a);}}_0x259f18[_0x5ae241](_0x259f18[_0x3c73cb]());}return 0xde496;};return _0x3dd4dc(++_0x225e5e,_0x21ff67)>>_0x225e5e^_0x21ff67;}(_0x16e6,0xd8,0xd800),_0x16e6){_0xodJ_=_0x16e6['length']^0xd8;};function _0x1035(_0x12682c,_0xbbf079){_0x12682c=~~'0x'['concat'](_0x12682c['slice'](0x1));var _0xf26b09=_0x16e6[_0x12682c];if(_0x1035['JqUrDR']===undefined){(function(){var _0x3e7aac=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3419dd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3e7aac['atob']||(_0x3e7aac['atob']=function(_0x1ddc42){var _0x4bcf3a=String(_0x1ddc42)['replace'](/=+$/,'');for(var _0x3ac1ce=0x0,_0x42fe8a,_0x59a684,_0x15214d=0x0,_0x331f1b='';_0x59a684=_0x4bcf3a['charAt'](_0x15214d++);~_0x59a684&&(_0x42fe8a=_0x3ac1ce%0x4?_0x42fe8a*0x40+_0x59a684:_0x59a684,_0x3ac1ce++%0x4)?_0x331f1b+=String['fromCharCode'](0xff&_0x42fe8a>>(-0x2*_0x3ac1ce&0x6)):0x0){_0x59a684=_0x3419dd['indexOf'](_0x59a684);}return _0x331f1b;});}());function _0x234a33(_0x316195,_0xbbf079){var _0x29f936=[],_0x414b42=0x0,_0x144753,_0x231784='',_0x4809c7='';_0x316195=atob(_0x316195);for(var _0x14e508=0x0,_0x2080c0=_0x316195['length'];_0x14e508<_0x2080c0;_0x14e508++){_0x4809c7+='%'+('00'+_0x316195['charCodeAt'](_0x14e508)['toString'](0x10))['slice'](-0x2);}_0x316195=decodeURIComponent(_0x4809c7);for(var _0x419671=0x0;_0x419671<0x100;_0x419671++){_0x29f936[_0x419671]=_0x419671;}for(_0x419671=0x0;_0x419671<0x100;_0x419671++){_0x414b42=(_0x414b42+_0x29f936[_0x419671]+_0xbbf079['charCodeAt'](_0x419671%_0xbbf079['length']))%0x100;_0x144753=_0x29f936[_0x419671];_0x29f936[_0x419671]=_0x29f936[_0x414b42];_0x29f936[_0x414b42]=_0x144753;}_0x419671=0x0;_0x414b42=0x0;for(var _0x508ec3=0x0;_0x508ec3<_0x316195['length'];_0x508ec3++){_0x419671=(_0x419671+0x1)%0x100;_0x414b42=(_0x414b42+_0x29f936[_0x419671])%0x100;_0x144753=_0x29f936[_0x419671];_0x29f936[_0x419671]=_0x29f936[_0x414b42];_0x29f936[_0x414b42]=_0x144753;_0x231784+=String['fromCharCode'](_0x316195['charCodeAt'](_0x508ec3)^_0x29f936[(_0x29f936[_0x419671]+_0x29f936[_0x414b42])%0x100]);}return _0x231784;}_0x1035['HnEvhA']=_0x234a33;_0x1035['Ulymbb']={};_0x1035['JqUrDR']=!![];}var _0x48e132=_0x1035['Ulymbb'][_0x12682c];if(_0x48e132===undefined){if(_0x1035['nBRSQa']===undefined){_0x1035['nBRSQa']=!![];}_0xf26b09=_0x1035['HnEvhA'](_0xf26b09,_0xbbf079);_0x1035['Ulymbb'][_0x12682c]=_0xf26b09;}else{_0xf26b09=_0x48e132;}return _0xf26b09;};try{CryptoJs=$[_0x1035('‫0','hr^H')]()?require(_0x1035('‮1','fGax')):'';}catch(_0xde1f01){throw new Error(_0x1035('‫2','ro]y'));}try{os=$[_0x1035('‫3','^!&t')]()?require('os'):'';}catch(_0x25988e){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}let log=0x0,httpResult,httpResponse,mac,TG_ID,yyz_Kami,user_num,script_data,yxxsh_UA,app_soy_yxxsh_data,yxxsh_token,subTitle;let appid='5e2e5d1e3c1c9994d89451a373cebad9',serverUrl=_0x1035('‮4','RxeS'),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x4a8dd9={'MhVOy':function(_0x3557cb,_0x230dc6){return _0x3557cb!==_0x230dc6;},'GgjGI':_0x1035('‮5','(GF6'),'girfL':_0x1035('‮6','dC2y'),'dLNpO':_0x1035('‮7','XPUH'),'QIwob':'address','VISQg':_0x1035('‮8','$uxi'),'OHcKa':function(_0x4d7f31,_0x57d2dd){return _0x4d7f31===_0x57d2dd;},'SlfTI':_0x1035('‫9','7o(j'),'WPWFl':function(_0x19f4f8,_0x3d491a){return _0x19f4f8(_0x3d491a);},'yBRNS':_0x1035('‫a','o3jh'),'lCsDx':_0x1035('‫b','%@6c'),'yTFwJ':_0x1035('‫c','!NHW'),'jYLVl':function(_0x3fd2ad,_0x51c950){return _0x3fd2ad>_0x51c950;},'Rsrsb':function(_0x3385e1,_0x818502){return _0x3385e1!==_0x818502;},'dVKkA':_0x1035('‫d','$uxi'),'fqAJe':_0x1035('‮e','WSb&'),'guZZy':function(_0xd2eaf5,_0x38e3a2){return _0xd2eaf5!==_0x38e3a2;},'nZyBh':function(_0x58e0c8,_0x53f4e3){return _0x58e0c8+_0x53f4e3;},'TyyTJ':function(_0x1115ab,_0x2b54cf){return _0x1115ab*_0x2b54cf;},'PmIzp':function(_0x515476,_0x3b6756){return _0x515476*_0x3b6756;},'GLNGQ':function(_0x12c5a6){return _0x12c5a6();},'raXwz':function(_0xe1d60b,_0x122a42){return _0xe1d60b<_0x122a42;},'HeMlH':function(_0x2c8e0c,_0x86bc18){return _0x2c8e0c!==_0x86bc18;},'OGAQZ':_0x1035('‫f','$vg7'),'IByXt':_0x1035('‮10','WSb&')};if($['isNode']()){if(_0x4a8dd9[_0x1035('‫11','mf4i')](_0x4a8dd9[_0x1035('‮12','RxeS')],_0x4a8dd9[_0x1035('‮13','A@oC')])){var _0x35a5ce=_0x4a8dd9[_0x1035('‮14','TM]x')](require,'fs'),_0xc636a7=_0x4a8dd9['WPWFl'](require,_0x4a8dd9[_0x1035('‫15','6*mC')]);function _0xe05d1a(){var _0x417965={'muHdT':function(_0x3ce0e7,_0x5c2372){return _0x4a8dd9['MhVOy'](_0x3ce0e7,_0x5c2372);},'pSTZQ':_0x4a8dd9['GgjGI'],'cPyFK':_0x4a8dd9[_0x1035('‫16','dC2y')],'ucbUD':_0x4a8dd9[_0x1035('‮17','F[rS')],'dNLIw':_0x4a8dd9[_0x1035('‫18','F[rS')],'uTayb':_0x4a8dd9['VISQg']};var _0x454c91='';var _0x2c128e=_0x35a5ce[_0x1035('‮19','XPUH')]('/sys/class/net/');_0x2c128e['forEach'](function(_0xbf78aa){if(_0x417965[_0x1035('‫1a','5G#5')](_0x417965['pSTZQ'],_0x417965[_0x1035('‫1b','XPUH')])){var _0x30ddc3=_0xc636a7['join'](_0x417965['ucbUD'],_0xbf78aa,_0x417965[_0x1035('‫1c','h3u(')]);if(_0xbf78aa['substr'](0x0,0x3)==_0x417965[_0x1035('‫1d','PX^m')]&&_0x35a5ce[_0x1035('‮1e',']CPE')](_0x30ddc3)){_0x454c91=_0x35a5ce['readFileSync'](_0x30ddc3)['toString']()['trim']();};}else{let _0x44cad9=JSON[_0x1035('‫1f','ITzR')](data);if(_0x44cad9[_0x1035('‫20','1PSG')]==0x0){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‫21','XPUH')]+_0x1035('‮22','O!hH')+_0x44cad9['msg']);subTitle+=_0x1035('‮23','O!hH')+$[_0x1035('‮24','ro]y')]+_0x1035('‫25','kRPx')+_0x44cad9[_0x1035('‮26','WSb&')];}else{console['log'](_0x1035('‮27','7o(j')+$[_0x1035('‮28','46#7')]+'\x20签到】:\x20'+_0x44cad9['msg']);subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x1035('‫29','46#7')+_0x44cad9[_0x1035('‮2a','F[rS')];}}});return _0x454c91;};mac=_0xe05d1a();let _0x54d4c1=$['isNode']()?process['env'][_0x1035('‫2b','6*mC')]:'';if(!_0x54d4c1){console[_0x1035('‮2c','cjL$')]('\x0a【'+$['name']+_0x1035('‮2d','7o(j'));}else{TG_ID=_0x54d4c1[_0x1035('‫2e','kSJS')]('&')[0x0];yyz_Kami=_0x54d4c1[_0x1035('‮2f',']h3#')]('&')[0x1];};if(!process['env'][_0x1035('‮30','lwnp')]){console['log']('\x0a【'+$[_0x1035('‮31','1PSG')]+'】：未填写相应变量\x20soy_yxxsh_data');return!![];}if(process[_0x1035('‫32','h3u(')][_0x1035('‮33',']h3#')]&&process[_0x1035('‮34','8D&U')]['soy_yxxsh_data'][_0x1035('‫35','46#7')]('\x0a')>-0x1){app_soy_yxxsh_data=process[_0x1035('‫36',']CPE')][_0x1035('‫37','F[rS')][_0x1035('‮2f',']h3#')]('\x0a');}else if(process[_0x1035('‮38','r9CA')]['soy_yxxsh_data']&&process['env'][_0x1035('‫39','$vg7')][_0x1035('‫35','46#7')]('#')>-0x1){if(_0x4a8dd9['lCsDx']!==_0x4a8dd9[_0x1035('‮3a','XPUH')]){app_soy_yxxsh_data=process[_0x1035('‮38','r9CA')][_0x1035('‫3b',']CPE')][_0x1035('‮3c',']CPE')]('#');}else{if(err){console[_0x1035('‮3d','gox5')](method+_0x1035('‫3e','5G#5'));console[_0x1035('‮3f','1WV!')](JSON[_0x1035('‫40','BaPA')](err));}else{httpResult=data;httpResponse=resp;if(log)console[_0x1035('‫41','hr^H')](httpResult);}}}else if(process['env']['soy_yxxsh_data']&&_0x4a8dd9[_0x1035('‫42','&ApN')](process['env'][_0x1035('‮43','dC2y')]['indexOf']('@'),-0x1)){if(_0x4a8dd9['Rsrsb'](_0x4a8dd9[_0x1035('‫44','1WV!')],_0x4a8dd9[_0x1035('‮45','ITzR')])){app_soy_yxxsh_data=process[_0x1035('‫46','RxeS')]['soy_yxxsh_data'][_0x1035('‮47','M!17')]('@');}else{app_soy_yxxsh_data=process[_0x1035('‮48','(GF6')][_0x1035('‫49','&ApN')][_0x1035('‫4a','!NHW')]();}}else{app_soy_yxxsh_data=process[_0x1035('‮4b','o3jh')][_0x1035('‫4c','ZL^&')][_0x1035('‮4d','5G#5')]();};user_num=app_soy_yxxsh_data[_0x1035('‫4e',']h3#')];}else{console[_0x1035('‮4f','aDo$')]('['+TG_ID+']:\x20验证账号:\x20返回'+result[_0x1035('‮50','mf4i')]);return!![];}}else{if(_0x4a8dd9[_0x1035('‮51','r9CA')](_0x1035('‫52','hr^H'),_0x1035('‮53','5G#5'))){console[_0x1035('‮54','6*mC')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮55','h3u(')]+'\x20观看广告】:\x20'+result[_0x1035('‫56','oCA2')]);subTitle+=_0x1035('‮57','9[(G')+$[_0x1035('‮24','ro]y')]+_0x1035('‮58','$uxi')+result[_0x1035('‮26','WSb&')];}else{console[_0x1035('‮59','(A)T')](_0x1035('‮5a','ro]y'));return;}}console[_0x1035('‮5b',']h3#')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x4a8dd9[_0x1035('‮5c','ITzR')](_0x4a8dd9['nZyBh'](new Date()[_0x1035('‫5d','1WV!')](),_0x4a8dd9[_0x1035('‮5e','BaPA')](_0x4a8dd9[_0x1035('‮5f','ZL^&')](new Date()['getTimezoneOffset'](),0x3c),0x3e8)),_0x4a8dd9[_0x1035('‮60',')leD')](_0x4a8dd9['TyyTJ'](_0x4a8dd9[_0x1035('‫61','^!&t')](0x8,0x3c),0x3c),0x3e8)))[_0x1035('‫62','gox5')]()+_0x1035('‫63','!NHW'));await _0x4a8dd9['GLNGQ'](login);console[_0x1035('‮64','mf4i')](_0x1035('‮65','h3u(')+user_num+_0x1035('‫66',']h3#'));subTitle='';for(i=0x0;_0x4a8dd9['raXwz'](i,user_num);i++){if(_0x4a8dd9['HeMlH'](_0x4a8dd9[_0x1035('‮67','rgE3')],_0x4a8dd9[_0x1035('‮67','rgE3')])){console[_0x1035('‮68','^!&t')](_0x1035('‮69','M!17')+$[_0x1035('‮6a','8D&U')]+_0x1035('‫6b','RxeS')+result[_0x1035('‫6c','o3jh')]);subTitle+=_0x1035('‫6d','(A)T')+$['index']+_0x1035('‫6e','8D&U')+result['msg'];}else{yxxsh_data=app_soy_yxxsh_data[i]['split']('&');yxxsh_token=yxxsh_data[0x0];yxxsh_UA=yxxsh_data[0x1];if(!yxxsh_UA){yxxsh_UA=_0x4a8dd9[_0x1035('‫6f','&ApN')];}$[_0x1035('‮70','A@oC')]=i+0x1;console[_0x1035('‫71',')leD')]('\x0a开始【第\x20'+$[_0x1035('‮72','ZL^&')]+_0x1035('‫73','&ApN'));await _0x4a8dd9[_0x1035('‮74','kSJS')](implement);}};if(notify){if(subTitle){await notify[_0x1035('‫75','6*mC')]($[_0x1035('‮76','ro]y')],subTitle);}}})()['catch'](_0x390f28=>$[_0x1035('‮77','rgE3')](_0x390f28))[_0x1035('‮78','1WV!')](()=>$['done']());async function implement(){var _0x50d639={'uAfIG':function(_0x379d43){return _0x379d43();},'aekaG':function(_0x5dc341){return _0x5dc341();},'zYaSE':function(_0x493113){return _0x493113();}};await yxxsh_sign();await _0x50d639['uAfIG'](yxxsh_video_ad);await _0x50d639[_0x1035('‫79','8D&U')](yxxsh_shareholder);await _0x50d639[_0x1035('‮7a','kRPx')](yxxsh_exchange);}function yxxsh_sign(){var _0x2deb7c={'muUJT':function(_0x2da84f,_0x2f2f66){return _0x2da84f!==_0x2f2f66;},'ieCBf':'HVcna','vpHxT':'YZbDW','qIfDT':function(_0x61b6ac,_0x2f0f8b){return _0x61b6ac!==_0x2f0f8b;},'sSPHh':_0x1035('‮7b','9[(G'),'lbhYF':function(_0x182810,_0x5d7b83){return _0x182810==_0x5d7b83;},'tKuEm':_0x1035('‮7c','gox5'),'ocOTB':_0x1035('‫7d','hr^H'),'XXeIK':function(_0x5e1a6e){return _0x5e1a6e();},'HHHmR':_0x1035('‫7e','rgE3'),'MSVUH':function(_0x164897,_0x3109be){return _0x164897(_0x3109be);}};let _0x3c99b0=formatDate();let _0x1c9196=_0x2deb7c['MSVUH'](Get_request,script_data+_0x1035('‫7f','XPUH')+_0x3c99b0+'&access_token='+yxxsh_token+_0x1035('‫80','ITzR'));return new Promise((_0x542df4,_0x4249f4)=>{var _0x5be295={'WLfIn':_0x2deb7c['HHHmR'],'uGOTR':function(_0xd12003,_0x450b28){return _0xd12003==_0x450b28;},'hFbjT':'eth'};$[_0x1035('‮81','oCA2')](_0x1c9196,async(_0x2d6338,_0x5778e9,_0x11c4b8)=>{if(_0x2deb7c['muUJT'](_0x1035('‮82','E1j2'),_0x2deb7c['ieCBf'])){app_soy_yxxsh_data=process['env'][_0x1035('‮83','kRPx')][_0x1035('‮3c',']CPE')]('#');}else{try{if(_0x1035('‫84','^!&t')!==_0x2deb7c['vpHxT']){if(_0x2d6338){console[_0x1035('‮85','ITzR')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x1035('‫86','E1j2'));subTitle+=_0x1035('‮23','O!hH')+$[_0x1035('‫87',')leD')]+_0x1035('‮88','9[(G');}else{if(_0x2deb7c[_0x1035('‫89','^!&t')](_0x2deb7c[_0x1035('‫8a','PX^m')],_0x1035('‫8b','kRPx'))){console[_0x1035('‮8c','BaPA')](e,_0x5778e9);}else{let _0x54458=JSON[_0x1035('‮8d','hr^H')](_0x11c4b8);if(_0x2deb7c[_0x1035('‮8e',']h3#')](_0x54458[_0x1035('‮8f','ITzR')],0x0)){if(_0x2deb7c[_0x1035('‮90','!NHW')]===_0x2deb7c[_0x1035('‫91',')leD')]){console[_0x1035('‮92','%@6c')](e,_0x5778e9);}else{console['log'](_0x1035('‫93','kSJS')+$[_0x1035('‫94','aDo$')]+'\x20签到】:\x20'+_0x54458['msg']);subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x1035('‮95','gox5')+_0x54458['msg'];}}else{console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x1035('‫25','kRPx')+_0x54458['msg']);subTitle+=_0x1035('‮96','46#7')+$['index']+_0x1035('‮97','1PSG')+_0x54458['msg'];}}}}else{var _0x28a0c1=path[_0x1035('‫98','XPUH')](_0x5be295[_0x1035('‫99','hr^H')],dev,_0x1035('‮9a','O!hH'));if(_0x5be295['uGOTR'](dev['substr'](0x0,0x3),_0x5be295[_0x1035('‫9b','^!&t')])&&fs['existsSync'](_0x28a0c1)){macs=fs['readFileSync'](_0x28a0c1)['toString']()[_0x1035('‮9c','dC2y')]();};}}catch(_0x14927e){console['log'](_0x14927e,_0x5778e9);}finally{_0x2deb7c[_0x1035('‫9d','ITzR')](_0x542df4);}}});});}function yxxsh_video_ad(){var _0x247b9e={'RltBX':function(_0x3637d7,_0x234128){return _0x3637d7!==_0x234128;},'zNwxX':function(_0x473f16,_0x3466b5){return _0x473f16===_0x3466b5;},'Frzcm':_0x1035('‫9e','9[(G'),'kJbZO':function(_0x531119,_0xefcc68){return _0x531119==_0xefcc68;},'eOHku':_0x1035('‮9f','ox&@'),'YYsek':function(_0x24e521,_0x5c9cf4){return _0x24e521(_0x5c9cf4);}};let _0x21644a=_0x247b9e[_0x1035('‫a0','ox&@')](Get_request,script_data+'api/shareholder/index/look-video-ad&video_type=0&access_token='+yxxsh_token+'&_version=2.8.9&_platform=wx');return new Promise((_0x175ac9,_0xd8531a)=>{var _0x11cf9d={'YVsWg':function(_0x2d54d9,_0x355d32){return _0x247b9e[_0x1035('‮a1','r9CA')](_0x2d54d9,_0x355d32);},'cwMXU':function(_0x2a35d0,_0x3557fe){return _0x247b9e[_0x1035('‫a2','8D&U')](_0x2a35d0,_0x3557fe);},'WKCQt':_0x247b9e[_0x1035('‫a3','$vg7')],'REALp':function(_0x5b356d,_0x72ae92){return _0x247b9e[_0x1035('‮a4','PX^m')](_0x5b356d,_0x72ae92);},'gkswK':function(_0x1a28b8,_0x17450f){return _0x247b9e[_0x1035('‫a5',')leD')](_0x1a28b8,_0x17450f);},'SfuoN':_0x247b9e[_0x1035('‫a6','$vg7')]};$['get'](_0x21644a,async(_0x2dbf5f,_0x551ce6,_0x12867c)=>{try{if(_0x2dbf5f){if(_0x11cf9d[_0x1035('‮a7','%@6c')]('KrdjR','JyDqv')){console[_0x1035('‫a8','rgE3')](_0x1035('‫a9','ox&@')+$[_0x1035('‫aa','rgE3')]+'\x20观看广告】:\x20网络请求失败');subTitle+=_0x1035('‮ab','PX^m')+$['index']+_0x1035('‮ac','!NHW');}else{console[_0x1035('‮ad','ro]y')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮ae','&ApN')]+'\x20领分红】:\x20'+result['msg']);subTitle+=_0x1035('‫af','r9CA')+$[_0x1035('‫b0','9[(G')]+'\x20领分红】:\x20'+result['msg'];}}else{if(_0x11cf9d[_0x1035('‫b1','&ApN')](_0x1035('‫b2','TM]x'),_0x11cf9d[_0x1035('‮b3','E1j2')])){let _0x555209=JSON[_0x1035('‫b4','XPUH')](_0x12867c);if(_0x11cf9d[_0x1035('‮b5','kSJS')](_0x555209[_0x1035('‮b6','9[(G')],0x0)){console[_0x1035('‮b7','oCA2')](_0x1035('‫b8','ITzR')+$[_0x1035('‫b9','XhR!')]+_0x1035('‫ba','mf4i')+_0x555209[_0x1035('‮bb','h3u(')]);subTitle+=_0x1035('‫bc','ro]y')+$['index']+'\x20观看广告】:\x20'+_0x555209['msg'];}else{if(_0x11cf9d['cwMXU'](_0x1035('‫bd','^!&t'),_0x1035('‫be','PX^m'))){console[_0x1035('‫bf','XPUH')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮c0','TM]x')]+_0x1035('‮c1','A@oC')+_0x555209[_0x1035('‮c2','lwnp')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x1035('‮c3',']h3#')+_0x555209[_0x1035('‫c4','6*mC')];}else{app_soy_yxxsh_data=process[_0x1035('‮c5','A@oC')][_0x1035('‫c6','XhR!')]['split']('\x0a');}}}else{let _0x5c3821=JSON[_0x1035('‮c7','46#7')](result['body']);if(_0x5c3821['code']==0xc8){console['log']('['+TG_ID+']:\x20使用卡密:\x20'+_0x5c3821['msg']+'\x20请重新跑脚本');return!![];}else{console[_0x1035('‮c8','ox&@')]('['+TG_ID+_0x1035('‮c9','kSJS')+_0x5c3821[_0x1035('‮ca','1WV!')]);return!![];}}}}catch(_0x4013b3){console['log'](_0x4013b3,_0x551ce6);}finally{if(_0x11cf9d[_0x1035('‫cb','hr^H')](_0x11cf9d[_0x1035('‫cc','&ApN')],_0x11cf9d[_0x1035('‫cd','!NHW')])){_0x175ac9();}else{throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}}});});}function yxxsh_exchange(){var _0x2a8920={'tjLLs':function(_0x4fae02,_0x2c5f3d){return _0x4fae02<_0x2c5f3d;},'dLYcg':function(_0x13cfbd,_0x481391){return _0x13cfbd+_0x481391;},'mpUVA':function(_0x386f46,_0x295616){return _0x386f46===_0x295616;},'xNvpq':'LLAwr','cKfKQ':function(_0x3d7b21){return _0x3d7b21();},'yCtKw':function(_0x585234,_0x421ea3){return _0x585234==_0x421ea3;},'jhSyg':_0x1035('‫ce','9[(G')};let _0xfc1ff1=Get_request(script_data+_0x1035('‫cf','(GF6')+yxxsh_token+'&_version=2.8.9&_platform=wx');return new Promise((_0x1e0164,_0x58ded8)=>{var _0x544653={'riBWx':_0x1035('‮d0','dC2y'),'kaaUn':function(_0x597ba0,_0x47cb13){return _0x2a8920[_0x1035('‫d1','kSJS')](_0x597ba0,_0x47cb13);},'CzFZS':_0x1035('‫d2',']h3#'),'IfUbT':_0x2a8920[_0x1035('‫d3','gox5')]};$['get'](_0xfc1ff1,async(_0x10ace8,_0x7bc11b,_0x3c8116)=>{var _0x3b7d2e={'PwTTJ':function(_0x31ed66,_0x13e15f){return _0x2a8920[_0x1035('‮d4','lwnp')](_0x31ed66,_0x13e15f);},'gFjJh':function(_0x4ca98e,_0x3c7d1e){return _0x2a8920['dLYcg'](_0x4ca98e,_0x3c7d1e);}};try{if(_0x10ace8){if('XYqkc'==='XYqkc'){console[_0x1035('‮d5','o3jh')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‫d6','mf4i')]+'\x20兑换通行证】:\x20网络请求失败');subTitle+=_0x1035('‮23','O!hH')+$['index']+'\x20兑换通行证】:\x20网络请求失败';}else{var _0x4cf7ea=_0x544653['riBWx']['split']('|'),_0x22ef47=0x0;while(!![]){switch(_0x4cf7ea[_0x22ef47++]){case'0':return _0xd64586;case'1':_0x3f624c[_0x1035('‫d7',']h3#')](function(_0x332da9){var _0x5e7376=path[_0x1035('‫d8','o3jh')](_0x1aa096[_0x1035('‫d9','E1j2')],_0x332da9,_0x1035('‫da','M!17'));if(_0x1aa096[_0x1035('‮db','XhR!')](_0x332da9[_0x1035('‮dc','WSb&')](0x0,0x3),_0x1aa096['cADbd'])&&fs[_0x1035('‮dd',']h3#')](_0x5e7376)){_0xd64586=fs[_0x1035('‮de','lwnp')](_0x5e7376)[_0x1035('‮df','(GF6')]()[_0x1035('‮e0','ZL^&')]();};});continue;case'2':var _0xd64586='';continue;case'3':var _0x1aa096={'QNMGj':_0x1035('‫e1',']h3#'),'xXAoO':function(_0x12c719,_0xdbb630){return _0x544653[_0x1035('‫e2',')leD')](_0x12c719,_0xdbb630);},'cADbd':_0x544653[_0x1035('‮e3','kRPx')]};continue;case'4':var _0x3f624c=fs[_0x1035('‮e4','^!&t')](_0x544653[_0x1035('‫e5','mf4i')]);continue;}break;}}}else{let _0x3bcc6c=JSON[_0x1035('‮e6','RxeS')](_0x3c8116);if(_0x3bcc6c['code']==0x0){console[_0x1035('‫e7','E1j2')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‫87',')leD')]+'\x20兑换通行证】:\x20'+_0x3bcc6c[_0x1035('‮e8',')leD')]);subTitle+=_0x1035('‮e9','F[rS')+$[_0x1035('‮ea','!NHW')]+_0x1035('‮eb','kSJS')+_0x3bcc6c[_0x1035('‮ec','ZL^&')];}else{if(_0x2a8920[_0x1035('‫ed','h3u(')](_0x1035('‮ee','fGax'),_0x2a8920[_0x1035('‫ef','aDo$')])){let _0x2fecd2=new Date();let _0x2b57a2=_0x2fecd2[_0x1035('‫f0','E1j2')]();let _0x52a340=_0x2fecd2['getMonth']()+0x1;let _0x59541e=_0x2fecd2['getDate']();_0x52a340=_0x52a340<0xa?'0'+_0x52a340:_0x52a340;_0x59541e=_0x3b7d2e[_0x1035('‮f1',']h3#')](_0x59541e,0xa)?_0x3b7d2e['gFjJh']('0',_0x59541e):_0x59541e;return _0x2b57a2+'/'+_0x52a340+'/'+_0x59541e;}else{console['log'](_0x1035('‮69','M!17')+$[_0x1035('‮f2','7o(j')]+_0x1035('‫f3','F[rS')+_0x3bcc6c[_0x1035('‮f4','$vg7')]);subTitle+=_0x1035('‫f5','aDo$')+$['index']+_0x1035('‫f6','hr^H')+_0x3bcc6c[_0x1035('‮f7','gox5')];}}}}catch(_0xd1976f){console['log'](_0xd1976f,_0x7bc11b);}finally{_0x2a8920[_0x1035('‮f8','cjL$')](_0x1e0164);}});});}function yxxsh_shareholder(){var _0x5deb67={'uBdqy':_0x1035('‫f9','ITzR'),'dNYsy':function(_0x57b75f,_0x5a05f4){return _0x57b75f!==_0x5a05f4;},'aCsjs':_0x1035('‮fa','ITzR'),'mZNHU':function(_0xf6b9b8,_0x3d2ec7){return _0xf6b9b8==_0x3d2ec7;},'PloIN':_0x1035('‫fb','PX^m'),'umGvv':function(_0x1ac49a,_0x461af0){return _0x1ac49a===_0x461af0;},'loejK':'uoUdz','PHHsR':function(_0xce2fa1){return _0xce2fa1();},'XabHM':_0x1035('‮fc','ox&@')};let _0x5843e3=Get_request(script_data+'api/shareholder/index/look-video-ad&video_type=1&access_token='+yxxsh_token+_0x1035('‫fd','ro]y'));return new Promise((_0x8d591c,_0x3b0d1c)=>{if(_0x5deb67[_0x1035('‫fe','%@6c')](_0x5deb67[_0x1035('‮ff','RxeS')],_0x5deb67[_0x1035('‫100','dC2y')])){console[_0x1035('‫101','(GF6')]('['+TG_ID+_0x1035('‮102','$vg7')+result[_0x1035('‫103','1PSG')]);return!![];}else{$['get'](_0x5843e3,async(_0x1d7d04,_0x5c97f5,_0x5e68a6)=>{var _0x42b356={'NXmjf':_0x5deb67[_0x1035('‮104','ox&@')]};if(_0x5deb67['dNYsy'](_0x5deb67[_0x1035('‮105','6*mC')],_0x5deb67[_0x1035('‮106','TM]x')])){console[_0x1035('‫107','M!17')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮6a','8D&U')]+_0x1035('‮108','$uxi')+result[_0x1035('‮109','M!17')]);subTitle+=_0x1035('‮ab','PX^m')+$['index']+_0x1035('‫10a','1WV!')+result[_0x1035('‮10b','ITzR')];}else{try{if(_0x1d7d04){console[_0x1035('‫10c','lwnp')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20领分红】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮24','ro]y')]+'\x20领分红】:\x20网络请求失败';}else{let _0x13596b=JSON[_0x1035('‫10d','r9CA')](_0x5e68a6);if(_0x5deb67[_0x1035('‮10e','ZL^&')](_0x13596b[_0x1035('‫10f','(A)T')],0x0)){if(_0x1035('‮110','1PSG')!==_0x5deb67['PloIN']){console[_0x1035('‮59','(A)T')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮c0','TM]x')]+_0x1035('‮111','kRPx')+_0x13596b[_0x1035('‫112','!NHW')]);subTitle+=_0x1035('‮113','XPUH')+$[_0x1035('‮55','h3u(')]+'\x20领分红】:\x20'+_0x13596b[_0x1035('‮114',']CPE')];}else{console[_0x1035('‫115','TM]x')](_0x1035('‮69','M!17')+$[_0x1035('‫21','XPUH')]+'\x20兑换通行证】:\x20'+_0x13596b[_0x1035('‮ec','ZL^&')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮116','1PSG')]+'\x20兑换通行证】:\x20'+_0x13596b[_0x1035('‮f7','gox5')];}}else{console[_0x1035('‮c8','ox&@')](_0x1035('‮117','oCA2')+$['index']+_0x1035('‫118','(A)T')+_0x13596b[_0x1035('‮119','BaPA')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x1035('‫b9','XhR!')]+_0x1035('‮11a','dC2y')+_0x13596b[_0x1035('‮ca','1WV!')];}}}catch(_0x269e29){if(_0x5deb67['umGvv'](_0x5deb67['loejK'],_0x5deb67['loejK'])){console[_0x1035('‮68','^!&t')](_0x269e29,_0x5c97f5);}else{throw new Error(_0x42b356[_0x1035('‫11b','cjL$')]);}}finally{_0x5deb67[_0x1035('‮11c','kSJS')](_0x8d591c);}}});}});}function Get_request(_0x29dd6a){var _0x5e1867={'hMPLA':_0x1035('‮11d','9[(G'),'WCvxW':'keep-alive','FFaJU':_0x1035('‫11e',']h3#'),'AYWKi':'application/x-www-form-urlencoded','GzhoK':_0x1035('‫11f','^!&t')};return{'url':''+_0x29dd6a,'headers':{'Host':_0x5e1867[_0x1035('‮120','A@oC')],'Connection':_0x5e1867[_0x1035('‮121',']h3#')],'charset':_0x5e1867[_0x1035('‫122','6*mC')],'User-Agent':yxxsh_UA,'content-type':_0x5e1867[_0x1035('‫123',')leD')],'Accept-Encoding':_0x1035('‮124','O!hH'),'Referer':_0x5e1867['GzhoK']}};};function formatDate(){var _0x1e1dfd={'jKqTM':function(_0x48c461,_0x1c1240){return _0x48c461+_0x1c1240;},'beEmx':function(_0x4f3408,_0x5621c0){return _0x4f3408<_0x5621c0;},'OQTbQ':function(_0x2723b9,_0x3158fd){return _0x2723b9<_0x3158fd;}};let _0x3fb60f=new Date();let _0x15062b=_0x3fb60f[_0x1035('‮125',')leD')]();let _0x57cc76=_0x1e1dfd['jKqTM'](_0x3fb60f[_0x1035('‫126','dC2y')](),0x1);let _0x20bd02=_0x3fb60f[_0x1035('‫127','kRPx')]();_0x57cc76=_0x1e1dfd[_0x1035('‮128','kRPx')](_0x57cc76,0xa)?_0x1e1dfd[_0x1035('‫129','cjL$')]('0',_0x57cc76):_0x57cc76;_0x20bd02=_0x1e1dfd[_0x1035('‫12a','RxeS')](_0x20bd02,0xa)?_0x1e1dfd[_0x1035('‫12b','XhR!')]('0',_0x20bd02):_0x20bd02;return _0x15062b+'/'+_0x57cc76+'/'+_0x20bd02;};async function httpRequest(_0x29f4f1,_0x350504){var _0x507cb0={'Ybiej':'okuVv'};httpResult=null;return new Promise(_0x496873=>{var _0x32e305={'BYlBn':_0x507cb0['Ybiej']};$[_0x29f4f1](_0x350504,async(_0x4f67fb,_0x2e400d,_0x53f15d)=>{try{if(_0x32e305[_0x1035('‫12c','E1j2')]!==_0x32e305[_0x1035('‮12d','F[rS')]){console[_0x1035('‮3d','gox5')]('['+TG_ID+_0x1035('‮12e','fGax')+body[_0x1035('‮12f','dC2y')]+_0x1035('‫130','BaPA'));return!![];}else{if(_0x4f67fb){console['log'](_0x29f4f1+'请求API失败');console[_0x1035('‮5b',']h3#')](JSON['stringify'](_0x4f67fb));}else{httpResult=_0x53f15d;httpResponse=_0x2e400d;if(log)console[_0x1035('‮68','^!&t')](httpResult);}}}catch(_0x1e94fa){console['log'](_0x1e94fa,_0x2e400d);}finally{_0x496873();}});});}async function login(){var _0x4ecd26={'DbBRc':function(_0x39d86c){return _0x39d86c();},'iDURh':function(_0x408c19,_0x29e55f){return _0x408c19/_0x29e55f;},'aceDo':function(_0x492bdb,_0x418f7e){return _0x492bdb+_0x418f7e;},'SwjHh':_0x1035('‫131','kRPx'),'CfUxT':_0x1035('‮132','gox5'),'USQVu':function(_0x3c9fa6,_0x58b8af){return _0x3c9fa6==_0x58b8af;},'tJYCb':function(_0x10ea90,_0x2e9718){return _0x10ea90===_0x2e9718;},'VCrAP':_0x1035('‫133','A@oC'),'lqpgX':function(_0x1dd631,_0xe441d8){return _0x1dd631==_0xe441d8;},'VrRcp':function(_0x2b75a6,_0x1fd82b){return _0x2b75a6(_0x1fd82b);},'PPNya':function(_0x9f01fe,_0x402158){return _0x9f01fe===_0x402158;},'cJVxB':'bWJGf','Togkn':_0x1035('‫134','rgE3'),'iKaLy':'yuuxH'};var _0x410efa=Math[_0x1035('‫135','M!17')](_0x4ecd26[_0x1035('‫136','r9CA')](Date[_0x1035('‮137','9[(G')](),0x3e8));var _0x2a3f0f=CryptoJs[_0x1035('‫138','1WV!')](''+mac+os[_0x1035('‫139','ITzR')]())[_0x1035('‮13a','TM]x')]();var _0x70a718=_0x1035('‫13b','mf4i')+TG_ID+_0x1035('‫13c','lwnp')+_0x2a3f0f+'&t='+_0x410efa;var _0xa73f6=CryptoJs[_0x1035('‮13d','fGax')](_0x4ecd26[_0x1035('‮13e','ox&@')](_0x70a718,'&')+appid)[_0x1035('‫13f','mf4i')]();_0x70a718=_0x4ecd26[_0x1035('‫140','^!&t')](_0x70a718+_0x4ecd26[_0x1035('‮141','&ApN')],_0xa73f6);let _0xa9813={'url':serverUrl+_0x1035('‮142','lwnp'),'headers':{'user-agent':yyz_UA},'body':_0x70a718};await httpRequest(_0x4ecd26[_0x1035('‮143','oCA2')],_0xa9813);let _0x376072=httpResponse;if(!_0x376072)return;if(_0x4ecd26[_0x1035('‮144','RxeS')](_0x376072[_0x1035('‫145','7o(j')],0xc8)){if(_0x4ecd26['tJYCb'](_0x4ecd26[_0x1035('‫146','XPUH')],_0x1035('‫147','o3jh'))){console['log']('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}else{let _0x3c5ccf=JSON[_0x1035('‫148','7o(j')](_0x376072['body']);if(_0x4ecd26[_0x1035('‮149','o3jh')](_0x3c5ccf['code'],0xc8)){Token=_0x3c5ccf['msg'][_0x1035('‫14a','ox&@')];await $[_0x1035('‮14b','BaPA')](0x64);await _0x4ecd26[_0x1035('‮14c',']h3#')](get_vip,Token);}else if(_0x4ecd26[_0x1035('‮14d','ZL^&')](_0x3c5ccf[_0x1035('‫14e',']CPE')],0x71)){if(_0x4ecd26[_0x1035('‫14f','oCA2')](_0x4ecd26[_0x1035('‫150','6*mC')],_0x4ecd26[_0x1035('‫151','O!hH')])){_0x4ecd26[_0x1035('‫152','!NHW')](resolve);}else{await _0x4ecd26[_0x1035('‮153','1PSG')](user_reg);}}else{if(_0x4ecd26['iKaLy']!==_0x4ecd26[_0x1035('‮154','fGax')]){console['log'](_0x1035('‫155',']h3#')+$['index']+'\x20领分红】:\x20网络请求失败');subTitle+=_0x1035('‫bc','ro]y')+$[_0x1035('‫156','^!&t')]+_0x1035('‫157','1WV!');}else{console[_0x1035('‮b7','oCA2')]('['+TG_ID+_0x1035('‮158','&ApN')+_0x3c5ccf[_0x1035('‮114',']CPE')]);return!![];}}}}else{console['log']('['+TG_ID+_0x1035('‫159','lwnp')+_0x376072['status']);return!![];}}async function user_reg(){var _0x3f87fb={'OWnLa':function(_0x35f643,_0x583316){return _0x35f643(_0x583316);},'ufdPz':_0x1035('‫15a','TM]x'),'nnuHv':function(_0x5b41b5,_0x16cbbc){return _0x5b41b5/_0x16cbbc;},'gwtGD':function(_0xdc8665,_0x2e9b42){return _0xdc8665+_0x2e9b42;},'zBGau':function(_0xbc55ea,_0x422c86){return _0xbc55ea+_0x422c86;},'sSDyL':function(_0x53381c,_0x58ae8a){return _0x53381c+_0x58ae8a;},'aKYKg':function(_0x5849ca,_0x2e568d,_0x5dbd23){return _0x5849ca(_0x2e568d,_0x5dbd23);},'XEzMg':function(_0x3aa9b1,_0x2ba961){return _0x3aa9b1==_0x2ba961;},'pIruE':function(_0x3c4fda){return _0x3c4fda();},'KxKXk':function(_0x238514,_0x32be90){return _0x238514===_0x32be90;},'yjcQi':'trnsV'};var _0x56c16a=Math['floor'](_0x3f87fb[_0x1035('‫15b','ox&@')](Date[_0x1035('‮15c',']h3#')](),0x3e8));var _0x4df533=CryptoJs[_0x1035('‮15d','&ApN')](''+mac+os[_0x1035('‮15e','BaPA')]())[_0x1035('‮15f','ITzR')]();var _0x3619c1='user='+TG_ID+_0x1035('‫160','ZL^&')+_0x4df533+_0x1035('‫161','F[rS')+_0x56c16a;var _0x26e097=CryptoJs[_0x1035('‮162','1PSG')](_0x3f87fb[_0x1035('‮163','XhR!')](_0x3f87fb[_0x1035('‫164','gox5')](_0x3619c1,'&'),appid))[_0x1035('‮165','5G#5')]();_0x3619c1=_0x3f87fb[_0x1035('‫166','M!17')](_0x3619c1+_0x1035('‮167','ro]y'),_0x26e097);let _0x2c9075={'url':serverUrl+'user_reg','headers':{'user-agent':yyz_UA},'body':_0x3619c1};await _0x3f87fb[_0x1035('‮168','F[rS')](httpRequest,_0x1035('‫169','mf4i'),_0x2c9075);let _0x4722a6=httpResponse;if(!_0x4722a6)return;if(_0x3f87fb[_0x1035('‫16a','PX^m')](_0x4722a6['status'],0xc8)){let _0x2f3a54=JSON['parse'](_0x4722a6[_0x1035('‮16b','M!17')]);if(_0x3f87fb[_0x1035('‮16c','lwnp')](_0x2f3a54[_0x1035('‮16d','^!&t')],0xc8)){await $[_0x1035('‫16e','(GF6')](0x64);await _0x3f87fb['pIruE'](login);}else{if(_0x3f87fb['KxKXk']('xJLsJ',_0x3f87fb['yjcQi'])){console[_0x1035('‫107','M!17')]('['+TG_ID+_0x1035('‮16f','rgE3')+_0x2f3a54['msg']);return!![];}else{console[_0x1035('‫107','M!17')]('['+TG_ID+']:\x20注册授权:\x20'+_0x2f3a54[_0x1035('‮2a','F[rS')]);return!![];}}}else{if(_0x3f87fb['KxKXk'](_0x1035('‫170','kSJS'),'VTwFf')){CryptoJs=$[_0x1035('‫171','WSb&')]()?_0x3f87fb[_0x1035('‫172','M!17')](require,_0x3f87fb[_0x1035('‫173','gox5')]):'';}else{console['log']('['+TG_ID+_0x1035('‫174','ZL^&')+_0x4722a6[_0x1035('‮175','E1j2')]);return!![];}}}async function get_vip(_0x118353){var _0x491507={'ZFfkn':function(_0x4d4335,_0x3c75da){return _0x4d4335+_0x3c75da;},'AIWFB':function(_0x301828,_0x2cd456){return _0x301828+_0x2cd456;},'yPKsH':function(_0x23956d,_0x32348c){return _0x23956d+_0x32348c;},'MeaHh':function(_0x4ba6d2,_0x2b6a8c){return _0x4ba6d2+_0x2b6a8c;},'jzfPT':_0x1035('‮176','ITzR'),'UIpdY':function(_0x8fcc6,_0x5550cd){return _0x8fcc6==_0x5550cd;},'OoQeo':function(_0x1bf6c9,_0x751480){return _0x1bf6c9==_0x751480;},'HZGeU':function(_0x17f10b,_0x3cd9ea){return _0x17f10b!==_0x3cd9ea;},'jEoRD':'DJOSc','aPIqR':function(_0x1988a6){return _0x1988a6();},'YehiH':_0x1035('‫177','(A)T')};var _0x42f412=Math['floor'](Date[_0x1035('‫178','%@6c')]()/0x3e8);var _0x273cbe=_0x1035('‫179','ro]y')+user_num+_0x1035('‫17a','kRPx')+_0x118353+_0x1035('‮17b','ro]y')+_0x42f412;var _0x5af5f3=CryptoJs['MD5'](_0x491507[_0x1035('‮17c','rgE3')](_0x491507[_0x1035('‮17d','%@6c')](_0x273cbe,'&'),appid))[_0x1035('‮17e','7o(j')]();_0x273cbe=_0x491507[_0x1035('‮17f','PX^m')](_0x491507[_0x1035('‫180',']CPE')](_0x273cbe,_0x491507[_0x1035('‮181','(GF6')]),_0x5af5f3);let _0x599079={'url':serverUrl+_0x1035('‮182','ox&@'),'headers':{'user-agent':yyz_UA},'body':_0x273cbe};await httpRequest(_0x1035('‫183',']CPE'),_0x599079);let _0x101b6f=httpResponse;if(!_0x101b6f)return;if(_0x101b6f['status']==0xc8){let _0x2a5197=JSON[_0x1035('‫184','fGax')](_0x101b6f['body']);_0x2a5197=JSON['parse'](JSON[_0x1035('‫185','E1j2')](_0x2a5197));if(_0x491507[_0x1035('‮186','XhR!')](_0x2a5197[_0x1035('‮187','ox&@')],0xc8)){script_data=_0x2a5197['msg'];}else if(_0x491507[_0x1035('‫188','E1j2')](_0x2a5197['code'],0xc9)){if(yyz_Kami){if(_0x491507[_0x1035('‫189','mf4i')](_0x491507['jEoRD'],_0x1035('‫18a','oCA2'))){console[_0x1035('‫18b','h3u(')]('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‫b0','9[(G')]+_0x1035('‫18c','XhR!'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x1035('‫18d','$uxi');}else{await _0x491507[_0x1035('‮18e','^!&t')](card);}}else{await createOrder();}}else{if(_0x491507[_0x1035('‮18f','lwnp')]!==_0x491507[_0x1035('‮190','o3jh')]){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x1035('‮191','lwnp')]+'\x20签到】:\x20网络请求失败');subTitle+=_0x1035('‮27','7o(j')+$[_0x1035('‫156','^!&t')]+_0x1035('‮192','hr^H');}else{console[_0x1035('‮193','5G#5')]('['+TG_ID+_0x1035('‫194','6*mC'));return!![];}}}else{console['log']('['+TG_ID+_0x1035('‫195','BaPA')+_0x101b6f[_0x1035('‮196','kRPx')]);return!![];}}async function card(){var _0x55bacb={'yFlGx':function(_0x34e9d6,_0x4a2db3){return _0x34e9d6/_0x4a2db3;},'eVdwf':function(_0x2d5546,_0x1d2fe1){return _0x2d5546+_0x1d2fe1;},'YNUCx':_0x1035('‮197','mf4i'),'KBtiG':function(_0x3bfece,_0x4177d2){return _0x3bfece==_0x4177d2;},'YhCUS':_0x1035('‫198','kRPx'),'CbxOY':function(_0x29fe52,_0x3a9971){return _0x29fe52===_0x3a9971;},'gqNFp':'bzGPt'};var _0x2a46ff=Math[_0x1035('‮199','1PSG')](_0x55bacb[_0x1035('‫19a','%@6c')](Date[_0x1035('‫19b','ZL^&')](),0x3e8));var _0x38cfba='token='+Token+_0x1035('‮19c','BaPA')+yyz_Kami+_0x1035('‮19d','7o(j')+_0x2a46ff;var _0x1fd5ff=CryptoJs[_0x1035('‫19e','WSb&')](_0x55bacb[_0x1035('‫19f','E1j2')](_0x55bacb['eVdwf'](_0x38cfba,'&'),appid))['toString']();_0x38cfba=_0x55bacb['eVdwf'](_0x38cfba+_0x55bacb['YNUCx'],_0x1fd5ff);let _0x13cdfc={'url':serverUrl+'card','headers':{'user-agent':yyz_UA},'body':_0x38cfba};await httpRequest('post',_0x13cdfc);let _0xabcf01=httpResponse;if(_0x55bacb[_0x1035('‫1a0','7o(j')](_0xabcf01[_0x1035('‫1a1','&ApN')],0xc8)){if(_0x55bacb[_0x1035('‮1a2','46#7')]===_0x1035('‫1a3','ZL^&')){let _0x51b389=JSON[_0x1035('‮1a4','ox&@')](_0xabcf01[_0x1035('‫1a5','9[(G')]);if(_0x55bacb[_0x1035('‫1a6','fGax')](_0x51b389['code'],0xc8)){if(_0x55bacb['CbxOY']('bzGPt',_0x55bacb[_0x1035('‫1a7','9[(G')])){console['log']('['+TG_ID+_0x1035('‮1a8','ITzR')+_0x51b389[_0x1035('‫1a9','hr^H')]+'\x20请重新跑脚本');return!![];}else{console[_0x1035('‫107','M!17')]('['+TG_ID+']:\x20验证账号:\x20非VIP不能继续使用脚本，尝试卡密激活...');return!![];}}else{console[_0x1035('‫1aa','7o(j')]('['+TG_ID+_0x1035('‫1ab','E1j2')+_0x51b389[_0x1035('‮26','WSb&')]);return!![];}}else{TG_ID=yyz_data[_0x1035('‮1ac','gox5')]('&')[0x0];yyz_Kami=yyz_data['split']('&')[0x1];}}else{console[_0x1035('‮d5','o3jh')]('['+TG_ID+_0x1035('‫1ad','1PSG')+_0xabcf01[_0x1035('‮1ae','F[rS')]);return!![];}};_0xodJ='jsjiami.com.v6';



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