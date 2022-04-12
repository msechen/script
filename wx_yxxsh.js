/*

软件名称:优享鑫生活

项目注册地址(微信打开):https://gitee.com/soy-tool/app-script/blob/master/picture/lmyx.jpg

签到获得分红币,分红模式,目前微信授权,绑定手机号,可能没有毛


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

const author = '作者TG_ID:@ls_soy';

var _0xodA='jsjiami.com.v6',_0xodA_=['‮_0xodA'],_0x3493=[_0xodA,'w7EYUMKNMg==','KsO9wqDCmsKw','w5fDv8KKwrHDjw==','wprDkcOq','772c6Ief5p+l5bWt5q2f5buh5L+t55eh','A+OBj8O2dsO/6IWh5pyw5oyd56WoTRRe6Laq5YyWw6g=','L8O1NMOGw4Q=','U8OewrExw4E=','UMOjUEU=','w7LDoFc=','worjgqrCv8K6w73ohrzmna3mj6vnpqtPw5dF6LWT5Y6lwqM=','w5XDjsODDcKX','ZumgneWJlue4geOCrcO2wrA=','aEPClQ==','MeOCnsK3wpTDieiFkuaeq+aMh+enlF/Dnhrot4/lj7xW','wpshXMOeIA==','woDjg7PCuXJm6Ies5p2B5o2+56e8csOSLui0geWMgMKT','wqrpoprliIrnu7njgq7Cmh4=','w7smw4E=','XAHDiBjCrQ==','bMOpw4cQ','P8KJAMKUwpY=','ccKxwpF8w7g=','w4DCmzvCksKV','woMRw5hiw5DCuw==','dcOBw7kwDg==','aHnCr8Kgw67CrhTDpkI4','w5vCmA7CtMKAw6NHfjDDmGxt','Q8OAS8K+','TsOdV8Krw73Ci0rDpADDlT/Cpx4gXx/Co8KW','N2Mywr3DqhTCicKTwplv','SsOSw6UzLQ==','woc7XsKWYA==','w53DkMOXBMKGI1EtGhgZw5A8wpzCvxtEw5nDrcOVT8Kywqd0RMORLcKrwrMjG2g/','w45eaSrDnA==','OMKxwr3Dr0/Do8K9w6Y/wo/Dv8OGO8OMw7TDtMOBw4soLcOrG8OxH8KHwprDuRkcwo/DtMOxwpHDjV/CtnbDug17woPCrcOxJ35/w5vCv0bChG0lwq3DrG0Cwr9EwrTClEjDhA==','w6LDkkPCkgg=','w4PCs8Otw73CgMKZwo3DlQ==','QAfDohrCpg==','wrXDv8OhB0U=','EcOxw7Q4wqJa','w7rCvsKFw4jCozFrLh7CvkbCt8KVw77CucOiw7EWwoRHw5HCl8Oow6QXwrvChyHCscObw7TDjC/CvMOyY8KrWMOGwrvDukHCqsKIwoPCgjnDgsOiLQbCvnzCtQ/CocKRMEYqw77DlTwIwprCiMKGZn/CjMKQcMO1wpsjwqvDqcKabsK0woU7wpR5SMO8w45kfcOXwp1GeD9/JsKgwpvCssO4MMK2Mz7CosKyY8KTw7JfwqBTwpRTwo7CknJTwoPCo8Kmw6fDkirCqjHChwEYwpkBSgXDmFDCmMKRUWA5C0YhNMOqFsKPw5PCtsO0WD08X8K6L8OreADCh2AOwpDCrw4Swq7DpDnDnDPDoQ9mMMOOw7IOw4DDs8O+wq1hwprDvh3Cg8K9wp86I04qwrg6TcK9SMOYXVbDtyYueMKvTMOMwrZCHxjCsXl/w689w7V6M3PDtw==','eCTDiRfCpw==','QwzCtg==','w6oELQ==','X8Otw64rwqIGw7sp','Lxl+JzcgesO6','w5IFwrVkwqs/IMO+wqttwps/JsOwwqM/wq7DnWE7Zyh/a2RQ','EcO2wqA=','w4HCicKMUnk=','woAawodjwqohIcOr','wokjDCcp','w4HDjG0UbMKaTsOfIgQ=','wqYaAhkA','fgIXw5fDtQ==','XUDCp8OhUw==','UQHDgueZt+W/n+WkkOi2kMOPOF4=','QBDCpg==','YC7DvBXClQ==','FMKiw7nDsMON','YW7CoQ==','CcOVOMOIw5Y=','wq91GOebgOW8jeWkmui1ujbDh+i8quWZiGk=','G8KhcOebmOW/qeWnvei2tcOhbOi/peWYrRA=','CUgAwp3ClQ==','R8Ojw68swqk=','wpchTg==','w4jCrsKIw6tb','XsOcRMK8','UBsy','PsORwrA=','D8KEw7fnmpnlvo/mi7vli6vDkMK+ZcOIdOWKjOaeieaUpemUrho=','wocEQMOiPQ==','wq0bw4DColw=','w5jCscKAw6c=','P8ONwrA=','wrFbSlZm','YMOEe2rCjg==','w5fCscKD','TcOewq4n','IsKkO8KFwoY=','JAlyIDI=','w6PCkMKEcnvCkw==','wpsVMQEZ','w5PCuMO1w6bCvA==','w5DCszrCtsKN','wrHDm8OiFUs=','IR5nEg0=','OTU0FMK7','woLCpcOww5fCgcOK','w6nCucOjw5nCg8KbwpjCkgg8w6bClVrCrj0pw5DCjUxLwrIGHRfDu0LCqgfDscOEwq9Cw7rCi8ODw6XDusOYwqEJwoXDuMK8w7LDgsKHIcK5ccORw4/DmmwqQ8KSwpNHwrhCw5o5w4HCu8KwTynDsjjCjWTDhsO+w75Hw6vDm8OWR1c4wrDCpMO/w5bCpMOUwr/DvytFw4ZDDQBiJk3Du8K5B8KmNHzDjMO1w6LDpAXCjsOCwopmKC5gUHN6wozCm8KcwpDDgWhmCQ08QcOhBsKRw5bCkMK9woDCnsKrcMK2UGcMw7fCjh4yw7/CnMO1w5PCgkBswpI7U8OpPRLDqnkQb1lFw7zDvcKqw5Rhw47DkiQJKsKXEgoVwq54B8KpaSfCtwtvI8KBVsOxQcKjwoFWSmlywr7DssKLwoLCt8K6CCzClmTDohjCmFHDksKGAVHDkcKEw4Q=','w7bDmcOgL8Ku','RxAlw57DiA==','w7TCj3ZJwqc=','w5fCpXd+wpA=','UuOBh+S8j+iBmeaMhOenluOBpe++qempm+issOiFquafgMKOw77Cj+Wmkei0uDDorarlipTkvZrmlrDohprmnLPku4HkupbmhaXlh7flrpQ=','a23CqcK8w6g=','wrQ/ecOYHQ==','WcOdVQ==','w7bDoEPCmcOZw7fCh0s=','HMKJQsKuF8KSwozCuQ==','wqbDisKtwqbDt8ORLknDtV/Di1pGZsK2wpnCtQNKw5DCrsKqwqMrw5Qow63DmsOVwrLCgsK5w5QOUlxY','wprDlMKa','JcKiJA==','bAfDrRXCkw==','PDoxFMKH','QiYow5vDiw==','fRnDqi/CnyNGwrY=','w57Cj3pgwpQ=','D8KEw7fmsIrlhZblp5rotZHDkMK+6L+n5ZmfBA==','w5TCt8Orw4PCig==','wr3DsMOgLHw=','w4FreyPDqg==','XsOcw5YkPQ==','ZMKLwpNEw5U=','wrMhw6Njw5w=','b8Oow4obBg==','G+mgiOWLgue5meOCoXLCp+e+hue4suiuheayseWkhui3jA==','R3XCj0PDhQ==','P2kzwqg=','w69iZMOMw4A=','dU/CpHzDiQ==','w7nDrMK55rGY5YWj5aeG6Lecwocd','UDvDpumpn+itm+i3u+WOsMKlDOi+j+WYvFI=','w4nCuC/pqaTorpnoto7ljJhIGui8keWamsKO','fMOFVcKrw4E=','csOJTk3Cjg==','YFTChQ==','w6gTLuaxvuWEr+Wnjui2pcKBWg==','GMKsHcKQwpo=','W8OLU8K6w6I=','W8OdRQ==','w5LlhJ7mjZrpgqHooJTor6rjgY42w4c=','KmcGXE0=','F+WHk+aPv+mBheiigOiupuOCh3Z2','wp0Xw50=','woZEVXxY','w4QvfMK7','wp7jgpJ8woch6Iay5p+D5o6i56SAw6hpwoPot7bljpA7','wpfnrq/li4/jgrDDtX0=','c8KKwrM=','ZAXDqA==','w57Cv8Kbw4TCtw==','wpETw6NEw5U=','KkjCi2vDpBw=','wrMew4zCokU=','w5rCnh3CucK2w74WYhvDmXFmw544JMO/FA==','w5jDlEQ=','w6DDrVzCnCrDgcKBFQ==','B8ONwr/Cm8K2','SgbCtSAOwpXDpg==','H8ORwq3Ci8K2wocVw4XCqx3CsQTClMOawrrCtE99woDCucKEKcOHCMO4w44wO1VbeXDChcKuwqMnwqYiScOWwqY/w5rCqi3CuMKoFA7CqMKfwrnDllvDj8KIw5XDmMKcwr0QEzUNwpIVb0DCnRrCkcOZQMK6acKlw6sXfsOdbsK2wr3CrQY0FcO0AMOnEMKoPwrCo8KAZcKAwponw5zDhyFTw77DgMORw5PClsOYw4BzwqrDk8OJa8K8wqPDs0TDjsKbwpt1AMKyw4vCh8KDwphFdgHCigbCjU8xU1A8w6TDisKzwoZcDcKVXsOpwq/CqcKhw69Tw7XDqMKew5wlUMOMIMKiSCDCtFLCgU/Ck8OzKx/DiMKawoPClkBCwr0JwpJlF8KrYsO9BsOtw5nCr8Kpw7FiCMOEw7Igw6jDnsKpBzsLw4JICsOVIcODwq7Dgiwbwokyw6V1IMO+LQ==','OWw/worCkw==','T2bCkMKSw6A=','w4zDj8OUHA==','w6fClBnCvMKO','LDQSKsKk','w6fDrMK+wprDpg==','WuODlcK6w7BF6IeD5p6+5oyZ56W2w4fCoMKd6LW05Y2YwrE=','KeWEjuaPp+mAg+ijiuiuuuOAjcO3cg==','UsOgwqDCnsOI','woflhJHmjbrpg4TooJ3orarjgpNRRg==','w5fDmcOq6aqR6K+e6LeQ5Y6awpTDpui+i+WYoSM=','ZsK0w6TpqbforbHota7ljbDDrcOO6L6m5ZitFw==','w6TCssKvXlw=','BgjCmcKRw7g=','e8OXRsKcw6M=','w5ZGasOz','ecOrw6szwoQ=','YsOOZnXCoQ==','wpfDg8KYF8KE','PeOColHCvMOt6Iew5pyI5o2T56SUwpR1w6botZXlj7kM','w7fDoVTCiMOP','wrHnrrzliIHjgKLDrRE=','wpvnrqDli5TjgpMVw7o=','HkoxwpvCiQ==','w7nDvxY=','IcORwq7CvcKjwpMMwpnDtmzDpUXDiMO3','V8OhwqM=','DxTCkcKbw7M=','w5PCqsKQw7Jcw6DDm2Rpw5RyEcO3w4B6CV/ChBvCp8KuKwIMcX3ClyUPwo9owrp0w4PCicKLMcO+wo/DpDXDnSjCnwBtwrfCk8Kdw7XChljCn1kIw4HCgsOCwrUewpPCuA==','wrHDjcOBIWY=','U8KWwq5iw7wow4XClC4RVcO/GMKMByrDhMO4XsKow6PDtz49P2/DoMOobFbChBxBXcKyw6DDrjjDusOZUhTCgsOAd8OUVyNxw49gScO1SCXDi04ZwqVfSMKkwrDDux0HwojCrmHCv8Ofw4TDmsKlRiscwo3CuMO6wonDrRZcAGnDscO5w4DCkcOoSmtow6s6cwoEdsKkLk7DmHsMwrXCmnw0IUodwrA4wqECwoZ5LMO1QMKFwqjDrsKbw5YeJVjCoMKww40YfT3Ch8O5ASN2MnrDl1Fkc8KwMcOTwow/wqx9aQhZwo8OwozCrMKiwrLClcK6EsKaw7bCoTfCgcKxKRQpe8OcYzVtwox1wo7Dj8KvD1wBw4nDqHlIwrtgw7oNw5VOw6gWWU3CnHkwwrbDgzhNQMKoYHV4wo11acK/w53DkcOmPw==','BsKJZg==','woYgU8OeNhY=','YMOvbQ==','JR3DiQ==','wqUDPS4h','KcKtfcKyAA==','fTDDlm3DtBJywqo=','QgfDuRDCrQ==','w5vCr0d+wro=','wrjDvFnCisOZwqs=','w7XChl1/wpg=','KQteOyk=','w5jCmlx2woY=','MDbClsKkw5g=','TcOBw5w/Og==','I8KqwrDDgEXCocOqwrokwrXDqcORJsOO','ei/DqXDDsg==','w7XDqlXCncKaw7fChkfClsKa','a8KNwrImwqg=','w5XDj3gKWsKVQMOMJAXCgBwYQHh6dMO7W1R1DB4Mwo3DvsKGw4JrUAvCtE0=','RcO2U8KKw5I=','JsKmJ8KiwqA=','w4XCrEN5woM=','WArDkuS/n+eUqeWMjeWvoQ3Co+i+leWYnxI=','E0A95Ly355Wq5Yyv5a+Iw71M6L+a5ZuAw7o=','w73CrVY=','eeODi8OCw43DjOiGreaepOaOg+entMOjw6DDr+i3sOWPrMKj','ZG/CosK2w6I=','F+evvOWKreOBjsO2R+e/h+e6kOiuoeazreWnlei3nw==','w53DkWwDSw==','w6bCvsO6w4PCug==','CUoGWEc=','w4vCv8KWw7FK','RcKJOMKt','w6zDlcKr','w6gTLuS/qeeWi+WOnuWthsKBWg==','PcK2wq4=','77+86IW+5p6W5bej5q+H5bux5L6Y55WL','NcOcMeS+peeVjeWOmuWspMOkJA==','w7o6w4E=','LsOhwpHkv53nlp3lj5blrY5pw64=','w63DicKr','Q8ODw7TkvbTnlrjljKXlraLCgTs=','ZCzDog==','w5fCtcOVw6nCvQ==','wrPDucK8KsKH','wpklPjoG','wpUyw4TChkE=','UMOIS8KjwrjCiUvDrl7Diz3CuAAiTgXDoMKCwpfCuXrCucOYw4k=','dcObYcKHw5c=','RArDgGjDjg==','w47CmBvClsKzw6ZHQgbDgHA=','JcK3csK9Kg==','w5jDgRLCoMKU','D8KDZcKXCsKVwpbCtg==','O2MjwoDCqBvCkcKS','M8K9wqXDs1U=','QcKDKMKMb29H','wogIGgYG','wowVAiIAw4ppwrE=','wpPDpcKAK8KMw6h5WzxO','IcO+JMOww5nCr8O/wrUoQg==','QcOfQMKrw4A=','b8O8Q8Kyw4Y=','w6PCkMKFw6N9','URHDpHjDlA==','w4TDsyfCqcKu','WQnDmTPCtQ==','YCzDi3bDoh4=','bnPCv8Kjw67CsmrDtV8=','YuaIp+S7seWLouS8pui2oHPDicKcwq9eTcKAd8K5woPDuHDor7zohaLooIXlr7nooZDDgQ==','WsO/ek/CgsOh','OeaLsuS4ueWIkOS9u+i3kiFDwpjDvcOi6K+U6IeS6KKJ5ayC6KOYwrQ=','NHIjwr3DvVrDisKDwpZww4jDrcKLw44zIR1zRhpkTMOeTTjCucO8B8OEw4/DpMO8RMKpb23CnXV0JMOhHn59','w5TDnnjCp8Ol','wpDDucO5JHY=','w5/CqsKiX0s=','KDYnNA==','dcKrwoBkw70=','wqTDtsOiE2o=','HMKoIcKHwqI=','wpkXw7R+w4DCrA==','w6YDUMKvPQ==','w4XDoMKPwqPDng==','XS7DuBbCig==','aHXCrg==','ZhnDrHbDkQ==','wrMAwqJtwqE=','VMKDPcKsanJQw77Csyoz','dyQqL8O7wo8Yw5LCpMKCX8KCwrjDgsOh','wpDDkcO/JlLCjcOA','w6/DtMKWwqDDnQ==','EcKmKsKZwrw=','wrcMw6hgw6M=','w70mw4/Cmw==','wpMww7nCpFw=','w63DulLCnsODw6Q=','X8OgZsKew50=','w4HCrsOww4PCm8KEwqrDhFNx','w5bCs8O4w5TCqcKewpXDmG5rwrjDlg==','w4svfw==','wpoUwrly','w57CosKxw47Cqzg=','aG/CsA==','aV/ClQ==','w7vDsRzCog==','44Cd77yh5p+I5aGn5YST55uZ5bih5Yyt6YeXXsOcZsKjTDTDt8Ogw6jDhMO6Yh8=','XhPCrRYM','w6Q5w4rCnMK1','eMO0wonCtsOA','a8Onw5odFg==','w6bCjMKt','OeOCnEdPwp/ohp7mnK3mj5znp7HDsMOjDui0nuWMssKr','LnoF','PeOCksOuMMK16IW95p665o6c56WswoLDicOX6LaK5YyZwow=','w7zDvhXCosKj','XsO/Uw==','VsOvwrDCmMOY','MWwSVVTCjcOc','wrbjgrDkv7voga3mjL/npbrjgKHvvYPpq7/orrboha3mn5MXw7nCieWlnei0lsOY6K285YmF5L+T5pem6IaQ5pyt5Lib5LmG5oWH5YWA5a2pRg==','EMKjHw==','G8KJaMKFHMKDwprCrWzDqMKnw49MJQ==','w5rDnmUD','OWgh','wqNERGFOw5fDsWzCicKxwrFbwq7DuA==','HMKjDcKWwopxwo8=','woMLw4NOw53CscKfEG8EZsKkdMOa','w4/DkMOLAcKb','w6XDlMK6','wowxBjsm','JmcU','w6Qmw5/CqsK4esKBwp3ChsK6w41Mw684','Txwmw7PDn8K/w4A=','VsOiQg==','w5fCucOgw6/ClsKPwoHDjlVNwrLDlAbCgw==','KzgqA8KtwpQMw4DCv8KuFMKNwqnDlw==','SA3Ctw==','w6nDlMKowrDDvMOpJw==','w6/CjcK8','I8O1Jg==','TcOCWMKdw6U=','IicpEsKl','BMKJdg==','w7rjgbTohqDmnL3mjbTnp7Pjg7bvvbnmraPohYHmnK7ljK/og73pn6npvZTnjrDloZLotb0=','ZMKzwoRnw4M=','wp8Sw67CjHE=','N8Kgwr3DmUnCtcO+wpApwovDvw==','w5rCtMK7w7PCgA==','LMKTVcKAPQ==','UMOXVsKew7vChFDDqw==','w7PDnBDCt8Ky','NcObwqPCr8K1woUAwoI=','bw/DuxDCrz9Xwrk=','bw/DuxnCoSVG','DzzCiMKaw5TCgyHDmQ==','bw/DuxDCqT9WwqXDnBk=','w63ChsK+UHbCmBjDmsKjLA==','ecKcwqBGw7kqw5HDj35M','JGwWalDCjcOWw7J+HA==','RwnCryki','QFbCpVTDpw==','B8OGwo/ClMK0','Z8OBw4AGHw==','OSMqOsKX','wrxEWg==','wr7CgjVbE+iHrOacjeaLn+iggUrDgxPljbfku4Hml7npl7nvvJk=','w5lAZsOOw4I=','w5vDhcOTPMKGLVU=','a17ClljDo0zDkMKPdxDDikbCvHU+w6vDrg==','XDgSw7rDtA==','w7TDlcKAwrrDp8OHLV7DghbCiAEbNQ==','bkcgdUg=','W8Otw7o=','w5ZNS+OBuuWEnsKf','wrfkuaPotoDljILjg5A/w4TDk8Ok','b8Oqwowow5A=','I8K1wqXDtkg=','EWktwqTCqxnChMOVw5okw5bCvsOMw7sjOgYlCVVVDcObTz7DvsOoT8KMw57CtMK3FMOEHw/CgAQLMsKwXUg1w6bCisOiw69se8K8w6jCvnPDkE4uwpEHRcOWwpbDi2rCkA88wqBdw5DDm8KmNsK7wpvCm8OrwpnDvsKhw5w0dTHDnWXDnHDCsMOhWsKaw6fCihDDrcO2wq5vIcKmDcOsOiHCkmfDtkfCiTjDtsKXwowdWMKvwoDDnMOjw6VpwpLDh8KfL8OdV3HCjsOGwoTCmsKEw6E8wrsoJMOaw7bCqMOgYMKqc8KHwqvDmkTCjsKvR1XDr8OxwonDgsO3C8KXAVvCpTfDrhXDv8KWecKYwqRlHMKHw791wr4Tw4bCgcKpw7DDgcOjwpbCgkXDqR1ZL8OYw7NVPG3CkcOlw5fDvhbCkSPCsWzCicKYwrXDlSbCvWBuEGLDrRAQf8K4bA==','KsO0Nw==','SeW8ieWmqeOAqeesmcOO','F+S6qOi2u+WOqOS4t+WLhuOChw==','w6HDiG0PXg==','wpcBw45Xw5HCpcKLOmI6cA==','w5zCrFR0wro=','w5PDmnwrXMKYVcOQ','w615eB/DnsOUWw==','VMObwqYzw4M=','w7tHQMO3w6Y=','SMOrwqrCn8O+J8Ozwr7CiAs=','a1HCn8OF','IGgWWl0=','w4/ClAHCscKqw6ZS','U8Otw7M6','wpodGhAg','B8KpcMK2Pw==','w7XCl8Klw5nCgw==','BsOuwrzChcKr','wpfDjsOkRgHCqMOBc8OYw5nDuxjCisKKw7VWeVtVwr/CmVzCoD8Swrkgw6BlwoIYQcOZUcKWfsKzccOFw4V2bcKVUcOGwoEXw7fDiH/Drg==','w5YFw5lyw4HCusKUPHM0acKgbsKG','U8KSH8KWwoBNwoAAwpVpA8Otw6Bmw5HCncO3dQoqw79ndMODwqN3woBT','ahXClwwg','w43DrFfCncOc','SEPClcK6w60=','Jhx2EhM=','N8Kgwr0=','TMO0wqvCosOq','w7rDtk0NWQ==','TirCqTkz','ZcOPw4Y4NQ==','Sh0l','TOOCiyPDjMOF6IeW5p685oyL56W2HMOeHei2tuWPmcK6','SsORwqcnw5w=','wq7jg4bDqsOfwpboh63mn5Xmja3npIc/w7vCmOi1lOWMlXQ=','VsKHLsK7aw==','w4rCkgvCtQ==','LOODti/Cp3fohIHmnI7mjb3np7BpfcOG6LSh5Y2zWA==','w7jjgZ9Lw5Qh6ISx5p2z5o+c56edw5PCu2TotYvljZvDtQ==','w6PCjcKueGc=','fOetuOWJp+ODnMO9VQ==','w5nDjG8=','TB3DlnDDsQ==','w5DDj8OA','AcKIdcK/HQ==','KeesoeWKteOAiMK8Ww==','MXUw','wpTjgp9DwoLDjuiGjOafhuaPvuenmsOSPsKh6LWt5Y+KWA==','JxR5LTo=','Veeus+WJmeODosOIHg==','wp88Xw==','QQzCpg==','w4zDuBHms5vlhZvlpIDotoFGLw==','TsOMwqQ=','772Q6K+jA8KKwpg8wqHDleitkeWkjcOJw5fCtOW1heijoeayvOWHvw==','w71mYwLDpQ==','wocfEQ==','csKWwrM=','Hxt/MBs=','RWzCkcK4w6g=','w67CtMK7bnk=','R8KWNcOnfXNDw5/Cryw/wodjw6EKSALCn8KRw7Bew7LDusOJW8OZYMKDw7UtcsOYQMO+w6zDjMKsw58ywqjCkcOpwpjChGxrfDIdFMKvw6TCgxAEwrcyw7UQwqxLUw==','SsOFwqLCssO+','Z2/CnsKGw7A=','w63ChsK+','QX/CtG3Dvw==','w43Dq8OBIcKh','X8OjUw==','YDHDoXzDvg==','wrTopYDnnITlupflkJLjgrnDlVLnvavnuJnorrPms6zlp6HotYI=','w7rjgbTDiX7DneiHk+afi+aOs+ekvXYvw6jotKbljYzDrQ==','NWgzwqjCvw==','GMKHY8KpAA==','wpMLw550','wpwLw50=','wp3jgZnDlcKawrjohJjmn5XmjL7np5TDiMKEAOi2veWOriM=','wpfopJPnn7Tlu57lkoXjgYwwIQ==','VsO9wqM=','UuOBhyAzwq3oh7bmnZjmjaPnp63DnF3Dgei3u+WNgcOu','YQTDqzjCuA==','wr7opY3nnLvlupLlk73jgofDkA4=','w4ozfw==','wpvjg5JCXMKu6ISr5p6I5o6s56S1eXpV6LaA5Y67woQ=','bF7ClsOFeQ==','cuilvOefnOW6neWSkOODuk7Dig==','wpvDjcOq','wrHopIDnnLrluYzlkp3jgKDCnlw=','wpXDkcKDMMKS','w5vCvsKY','d8OcwrAPw68=','ZGLCg37Dhg==','H34Swp/Cqw==','AjZ+GA8=','AcKfHcKpwpM=','FMK9AMOcwoFWwogdwp48XsKvwrwtwprClMOBawIuw7MuecOewqA/woQGV1LCimdcw6XCv8OaFcOSKcOyZMKEw4bCuMOdGcKOwoAtYMOrw4PCncOhQMOO','a17Clg==','LyrCm8Kkw68=','IcKuGsK+wrk=','w6NoZ8OTw5o=','wqPjg60cwr/Cv+iGkOach+aPi+elmcKMLyPot57ljqFx','w4vlhKHmjJTpgbDooKPorb7jgIrDuMK/57+v57i/6K+m5rCT5aan6LSI','JuWHl+aPjOmBpOigsuitj+OAqCLDlOe8j+e6guisheazi+Wlqei2lg==','dcOJwqPCrMOg','J8KDw5rDicOE','EsODO8OIw40=','w5PCh8KFw7Bj','fsO+wqrCk8Oy','D+OAoMKBw4946IW25pyL5o+n56a5bMOsH+i2vuWOk8Og','KOWEu+aPremBh+iijOiukOOAssOrwpk=','w4nCpcO+','wr/jgLl9w7nDmuiHpeaerOaNq+elgMKuw6Ay6LWF5Y+Ifg==','w43CuMO9w5XClw==','wpXlhbjmjazpgozoo6/orL7jgpHCgVo=','wrAHw6XCqFbDow==','bizDiijCrA==','w73DtWfCisOV','wrNRallV','H8K0w5Y=','w5xHasOzw5s=','GsK1w5XDh8ON','buWEq+aNv+mBkuigjuiuj+OAn8O9TA==','GcKiDg==','OcKrwq3DukQ=','w7DnrZXliI3jgK8Nwo8=','GMK+Dg==','MTk3OcKs','w7fDvlLCoMOu','NDg0','wpTjgp/ohKrmn4Hmjafnpqzjg7vvvLTmroToh6XmnL/ljabogrbpna/pv6HnjZHloLrotrw=','ATIwM8K2','w4DCpcKJbks=','VMOGw7INwpw=','w5PjgaTDmMKoS+iGnOach+aOtOenk8OLw5Vb6LaC5Y2Bw5Q=','wpXlhbjmjazpgozoo6/orL7jgpHCgVrnv5LnuJHor6jmsKHlpI7otbs=','wrflhJjmj4Tpg6/ooo3or4Pjg6jDlMOO576057m16K+a5rOZ5aWo6LSm','VsOWRsKhw7HCmVc=','w5HDi2A=','a0rCkXbDug==','HtVjhsjiaminrMf.ufbgfcom.v6=='];if(function(_0x229558,_0x366801,_0x19cc38){function _0x438d7d(_0x51a048,_0x3ecfea,_0xdf4e55,_0x101d3d,_0x182a8d,_0x3126ab){_0x3ecfea=_0x3ecfea>>0x8,_0x182a8d='po';var _0x38d885='shift',_0x1fc929='push',_0x3126ab='‮';if(_0x3ecfea<_0x51a048){while(--_0x51a048){_0x101d3d=_0x229558[_0x38d885]();if(_0x3ecfea===_0x51a048&&_0x3126ab==='‮'&&_0x3126ab['length']===0x1){_0x3ecfea=_0x101d3d,_0xdf4e55=_0x229558[_0x182a8d+'p']();}else if(_0x3ecfea&&_0xdf4e55['replace'](/[HtVhnrMfufbgf=]/g,'')===_0x3ecfea){_0x229558[_0x1fc929](_0x101d3d);}}_0x229558[_0x1fc929](_0x229558[_0x38d885]());}return 0xde675;};return _0x438d7d(++_0x366801,_0x19cc38)>>_0x366801^_0x19cc38;}(_0x3493,0xfb,0xfb00),_0x3493){_0xodA_=_0x3493['length']^0xfb;};function _0x81e9(_0x496094,_0x48bc49){_0x496094=~~'0x'['concat'](_0x496094['slice'](0x1));var _0x3f53ca=_0x3493[_0x496094];if(_0x81e9['krQBZQ']===undefined){(function(){var _0x36f425=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x22404f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36f425['atob']||(_0x36f425['atob']=function(_0x17b4fd){var _0x5c9742=String(_0x17b4fd)['replace'](/=+$/,'');for(var _0x19a22c=0x0,_0x526090,_0x8c597c,_0x463bca=0x0,_0x5b3b87='';_0x8c597c=_0x5c9742['charAt'](_0x463bca++);~_0x8c597c&&(_0x526090=_0x19a22c%0x4?_0x526090*0x40+_0x8c597c:_0x8c597c,_0x19a22c++%0x4)?_0x5b3b87+=String['fromCharCode'](0xff&_0x526090>>(-0x2*_0x19a22c&0x6)):0x0){_0x8c597c=_0x22404f['indexOf'](_0x8c597c);}return _0x5b3b87;});}());function _0x2d1fd6(_0x58de8e,_0x48bc49){var _0x4044d0=[],_0x1577d3=0x0,_0x4e7ec8,_0x47825d='',_0xbcf633='';_0x58de8e=atob(_0x58de8e);for(var _0x3aebb4=0x0,_0x35b13d=_0x58de8e['length'];_0x3aebb4<_0x35b13d;_0x3aebb4++){_0xbcf633+='%'+('00'+_0x58de8e['charCodeAt'](_0x3aebb4)['toString'](0x10))['slice'](-0x2);}_0x58de8e=decodeURIComponent(_0xbcf633);for(var _0x5db8c6=0x0;_0x5db8c6<0x100;_0x5db8c6++){_0x4044d0[_0x5db8c6]=_0x5db8c6;}for(_0x5db8c6=0x0;_0x5db8c6<0x100;_0x5db8c6++){_0x1577d3=(_0x1577d3+_0x4044d0[_0x5db8c6]+_0x48bc49['charCodeAt'](_0x5db8c6%_0x48bc49['length']))%0x100;_0x4e7ec8=_0x4044d0[_0x5db8c6];_0x4044d0[_0x5db8c6]=_0x4044d0[_0x1577d3];_0x4044d0[_0x1577d3]=_0x4e7ec8;}_0x5db8c6=0x0;_0x1577d3=0x0;for(var _0xb37955=0x0;_0xb37955<_0x58de8e['length'];_0xb37955++){_0x5db8c6=(_0x5db8c6+0x1)%0x100;_0x1577d3=(_0x1577d3+_0x4044d0[_0x5db8c6])%0x100;_0x4e7ec8=_0x4044d0[_0x5db8c6];_0x4044d0[_0x5db8c6]=_0x4044d0[_0x1577d3];_0x4044d0[_0x1577d3]=_0x4e7ec8;_0x47825d+=String['fromCharCode'](_0x58de8e['charCodeAt'](_0xb37955)^_0x4044d0[(_0x4044d0[_0x5db8c6]+_0x4044d0[_0x1577d3])%0x100]);}return _0x47825d;}_0x81e9['HyxboK']=_0x2d1fd6;_0x81e9['nzZEGL']={};_0x81e9['krQBZQ']=!![];}var _0x3630d7=_0x81e9['nzZEGL'][_0x496094];if(_0x3630d7===undefined){if(_0x81e9['QwTPKp']===undefined){_0x81e9['QwTPKp']=!![];}_0x3f53ca=_0x81e9['HyxboK'](_0x3f53ca,_0x48bc49);_0x81e9['nzZEGL'][_0x496094]=_0x3f53ca;}else{_0x3f53ca=_0x3630d7;}return _0x3f53ca;};try{CryptoJs=$[_0x81e9('‫0','L!Gl')]()?require(_0x81e9('‮1','2LWJ')):'';}catch(_0x13b827){throw new Error(_0x81e9('‮2','Q4Qc'));}try{os=$[_0x81e9('‫3','wu)w')]()?require('os'):'';}catch(_0x4f7084){throw new Error(_0x81e9('‫4','wu)w'));}let log=0x0,httpResult,httpResponse,mac,TG_ID,yyz_Kami,user_num,script_data,yxxsh_UA,app_soy_yxxsh_data,yxxsh_token,subTitle;let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl=_0x81e9('‮5','aVh('),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0xeeeb79={'ZpicF':function(_0x18f635){return _0x18f635();},'EZCvZ':_0x81e9('‮6',']ULp'),'irGmm':_0x81e9('‫7','bvsj'),'UDwKJ':'address','UnhCh':function(_0x558b15,_0x108b7b){return _0x558b15==_0x108b7b;},'Guvzy':_0x81e9('‮8','%qZg'),'zJPlS':function(_0x9df8ed,_0x40e4be){return _0x9df8ed*_0x40e4be;},'FfEKC':function(_0x87d21f,_0x5a6327){return _0x87d21f+_0x5a6327;},'meDRO':function(_0x32a146,_0x235af9){return _0x32a146<_0x235af9;},'DuDZX':function(_0x33a90d,_0x4831c7){return _0x33a90d+_0x4831c7;},'fLapi':function(_0xcb22c,_0x2bf012){return _0xcb22c+_0x2bf012;},'jjnVZ':function(_0x3fcfda,_0x16fb0a){return _0x3fcfda+_0x16fb0a;},'FNACd':function(_0xe5ae61,_0x314b51){return _0xe5ae61+_0x314b51;},'LmGXm':function(_0x5b4bd7,_0x216e55){return _0x5b4bd7+_0x216e55;},'UxXvn':function(_0x3f95e3,_0x2f0723){return _0x3f95e3+_0x2f0723;},'aGnxa':function(_0x472e48,_0x372127){return _0x472e48+_0x372127;},'atyfC':function(_0x840f18,_0xbf57a3){return _0x840f18+_0xbf57a3;},'eYwCv':function(_0x4587dd,_0x33f885){return _0x4587dd+_0x33f885;},'MneGm':function(_0x5acd2e,_0x495a28){return _0x5acd2e+_0x495a28;},'wdeqg':function(_0x212c66,_0x599767){return _0x212c66+_0x599767;},'NnNaE':function(_0x559c57,_0x2445f0){return _0x559c57+_0x2445f0;},'ImMfW':function(_0x4e00b0,_0x2b1374){return _0x4e00b0(_0x2b1374);},'OxRgF':function(_0x564610,_0x5c75f4){return _0x564610(_0x5c75f4);},'ACHql':_0x81e9('‫9','iJ0)'),'fFBBd':function(_0x425824,_0x33bced){return _0x425824===_0x33bced;},'CzMMp':_0x81e9('‮a','4Mlz'),'fGMnG':function(_0x183a68,_0x54ad01){return _0x183a68>_0x54ad01;},'gApQI':function(_0x1d0984,_0x471aef){return _0x1d0984>_0x471aef;},'XDDwJ':function(_0x5adb6f,_0xd79bc9){return _0x5adb6f>_0xd79bc9;},'zpzNq':_0x81e9('‮b','bvsj'),'lihXa':function(_0x5adf00,_0x39fb8c){return _0x5adf00+_0x39fb8c;},'vntls':function(_0x4f8d60,_0x532833){return _0x4f8d60*_0x532833;},'LUOjt':function(_0x443c50,_0x227385){return _0x443c50<_0x227385;},'lKZzW':function(_0x5e06f7,_0x576a44){return _0x5e06f7+_0x576a44;},'Uweim':function(_0x28e343,_0x4ad5da){return _0x28e343===_0x4ad5da;},'vvvXC':'rvqyD','nZhEi':_0x81e9('‫c','wWA8')};if($[_0x81e9('‮d','(@k!')]()){var _0x5336de=_0xeeeb79['ImMfW'](require,'fs'),_0x4be677=_0xeeeb79['OxRgF'](require,_0xeeeb79[_0x81e9('‫e','Xes4')]);function _0x5d863a(){var _0x58c64a={'oNZuY':function(_0x493f95,_0x2f50a4){return _0x493f95!==_0x2f50a4;},'dkCjN':_0xeeeb79[_0x81e9('‮f','@zc7')],'GhRqG':_0xeeeb79['irGmm'],'JDRcn':_0xeeeb79[_0x81e9('‫10','j9Ol')],'sXhIV':function(_0x5c770b,_0x8daa30){return _0xeeeb79['UnhCh'](_0x5c770b,_0x8daa30);},'hRDMI':_0x81e9('‮11','2LWJ')};if(_0x81e9('‫12','L!Gl')===_0xeeeb79[_0x81e9('‫13','WlXM')]){_0xeeeb79['ZpicF'](resolve);}else{var _0x5592a3='';var _0x468397=_0x5336de[_0x81e9('‫14','5BIz')](_0x81e9('‮15','iJ0)'));_0x468397[_0x81e9('‫16','bvsj')](function(_0x2f4edc){if(_0x58c64a[_0x81e9('‮17','@zc7')](_0x58c64a[_0x81e9('‫18','wWA8')],_0x58c64a[_0x81e9('‮19','(@k!')])){var _0x447849=_0x4be677[_0x81e9('‮1a','^e7@')]('/sys/class/net',_0x2f4edc,_0x58c64a[_0x81e9('‫1b','L3iV')]);if(_0x58c64a['sXhIV'](_0x2f4edc[_0x81e9('‮1c',']ULp')](0x0,0x3),_0x58c64a[_0x81e9('‫1d','1k&p')])&&_0x5336de[_0x81e9('‮1e','1bog')](_0x447849)){_0x5592a3=_0x5336de[_0x81e9('‫1f','1bog')](_0x447849)['toString']()['trim']();};}else{console[_0x81e9('‫20','Xes4')]('\x0a【'+$[_0x81e9('‫21','WlXM')]+'】：未填写相应变量\x20soy_yxxsh_data');return!![];}});return _0x5592a3;}};mac=_0x5d863a();let _0x29aaaf=$[_0x81e9('‮22','(fJe')]()?process[_0x81e9('‫23','2LWJ')]['soy_yyz_data']:'';if(!_0x29aaaf){console[_0x81e9('‮24','9cIZ')]('\x0a【'+$[_0x81e9('‫25','lAk[')]+_0x81e9('‮26','KSjA'));}else{TG_ID=_0x29aaaf[_0x81e9('‫27','C05U')]('&')[0x0];yyz_Kami=_0x29aaaf[_0x81e9('‮28','^e7@')]('&')[0x1];try{if(_0xeeeb79['fFBBd'](_0xeeeb79[_0x81e9('‫29','ZSXx')],_0xeeeb79['CzMMp'])){Tips=author[_0x81e9('‫2a','D[u(')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{console[_0x81e9('‮2b','%qZg')](_0x81e9('‫2c','wu)w')+$['index']+'\x20领分红】:\x20'+result[_0x81e9('‫2d','KXYt')]);subTitle+=_0x81e9('‫2e','rY(f')+$[_0x81e9('‮2f','lAk[')]+'\x20领分红】:\x20'+result[_0x81e9('‮30','wu)w')];}}catch(_0x28d5c8){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}try{YZ=author[_0x81e9('‫31','ZSXx')](/作者TG_ID:(\S*)/)[0x1][_0x81e9('‫32','KXYt')](/_/g,'><');}catch(_0x4539c9){throw new Error(_0x81e9('‫33','TF8r'));}};if(!process[_0x81e9('‮34','wWA8')][_0x81e9('‫35','wK[P')]){console['log']('\x0a【'+$[_0x81e9('‫36','d&BX')]+'】：未填写相应变量\x20soy_yxxsh_data');return!![];}if(process[_0x81e9('‫37','aVh(')]['soy_yxxsh_data']&&_0xeeeb79['fGMnG'](process['env'][_0x81e9('‮38','dzc(')][_0x81e9('‫39','wWA8')]('\x0a'),-0x1)){app_soy_yxxsh_data=process['env'][_0x81e9('‫3a','(@k!')][_0x81e9('‮3b','TF8r')]('\x0a');}else if(process[_0x81e9('‫3c','@zc7')]['soy_yxxsh_data']&&_0xeeeb79[_0x81e9('‮3d','9R[q')](process[_0x81e9('‮3e','KXYt')][_0x81e9('‮3f','^e7@')][_0x81e9('‮40','f$&t')]('#'),-0x1)){app_soy_yxxsh_data=process[_0x81e9('‫41','wu)w')][_0x81e9('‮42','1bog')]['split']('#');}else if(process[_0x81e9('‮34','wWA8')][_0x81e9('‮43','iJ0)')]&&_0xeeeb79['XDDwJ'](process[_0x81e9('‫44','C05U')]['soy_yxxsh_data'][_0x81e9('‫45','@zc7')]('@'),-0x1)){app_soy_yxxsh_data=process[_0x81e9('‮46','%qZg')][_0x81e9('‮42','1bog')]['split']('@');}else{app_soy_yxxsh_data=process[_0x81e9('‮47','x1C!')]['soy_yxxsh_data']['split']();};user_num=app_soy_yxxsh_data['length'];}else{if(_0xeeeb79[_0x81e9('‫48','1k&p')]===_0xeeeb79[_0x81e9('‮49','iJ0)')]){console[_0x81e9('‮4a','wK[P')](_0x81e9('‫4b','(@k!'));return;}else{var _0x10e6fe=new Date(_0xeeeb79[_0x81e9('‮4c','4Mlz')](timestamp,0x3e8));var _0x98fdd2=_0xeeeb79[_0x81e9('‫4d','L3iV')](_0x10e6fe[_0x81e9('‫4e','OY9X')](),'-');var _0x5598e3=(_0xeeeb79[_0x81e9('‮4f','(fJe')](_0xeeeb79[_0x81e9('‫50','wK[P')](_0x10e6fe[_0x81e9('‮51','1k&p')](),0x1),0xa)?'0'+_0xeeeb79[_0x81e9('‫52','lAk[')](_0x10e6fe[_0x81e9('‮53','XSkr')](),0x1):_0xeeeb79['fLapi'](_0x10e6fe[_0x81e9('‫54','j9Ol')](),0x1))+'-';var _0x25da52=_0x10e6fe[_0x81e9('‫55','j9Ol')]()+'\x20';var _0x5ee393=_0xeeeb79['fLapi'](_0x10e6fe[_0x81e9('‫56','Q4Qc')](),':');var _0x310e7f=_0xeeeb79['jjnVZ'](_0x10e6fe[_0x81e9('‮57','j9Ol')]()<0xa?'0'+_0x10e6fe[_0x81e9('‮58','%qZg')]():_0x10e6fe[_0x81e9('‮59','4Mlz')](),':');var _0xd139a7=_0x10e6fe[_0x81e9('‮5a','KXYt')]();let _0x2a2a52=_0xeeeb79[_0x81e9('‫5b','C05U')](_0xeeeb79['FNACd'](_0xeeeb79[_0x81e9('‮5c','KSjA')](_0x98fdd2,_0x5598e3),_0x25da52)+_0x5ee393+_0x310e7f,_0xd139a7);return _0xeeeb79[_0x81e9('‮5d','XSkr')](_0xeeeb79[_0x81e9('‮5e','D[u(')](_0xeeeb79[_0x81e9('‫5f','iJ0)')](_0xeeeb79['eYwCv'](_0xeeeb79['eYwCv'](_0x98fdd2,_0x5598e3),_0x25da52),_0x5ee393),_0x310e7f),_0xd139a7);}}console[_0x81e9('‫60','dzc(')](_0x81e9('‫61','d&BX')+new Date(_0xeeeb79[_0x81e9('‫62','gjb^')](new Date()[_0x81e9('‫63','TF8r')](),_0xeeeb79['zJPlS'](_0xeeeb79['zJPlS'](new Date()[_0x81e9('‮64','KSjA')](),0x3c),0x3e8))+_0xeeeb79[_0x81e9('‮65','f$&t')](_0xeeeb79['vntls'](0x8,0x3c),0x3c)*0x3e8)[_0x81e9('‫66','@zc7')]()+_0x81e9('‮67','gM@y'));console[_0x81e9('‫68','rY(f')](_0x81e9('‫69','9R[q')+user_num+_0x81e9('‫6a','^e7@'));subTitle='';for(i=0x0;_0xeeeb79[_0x81e9('‫6b','JCNI')](i,user_num);i++){yxxsh_data=app_soy_yxxsh_data[i][_0x81e9('‮6c','OY9X')]('&');yxxsh_token=yxxsh_data[0x0];yxxsh_UA=yxxsh_data[0x1];if(!yxxsh_UA){yxxsh_UA=_0x81e9('‫6d','aVh(');}$['index']=_0xeeeb79['lKZzW'](i,0x1);console[_0x81e9('‫6e','x1C!')](_0x81e9('‮6f','KXYt')+$['index']+_0x81e9('‫70','rY(f'));await yyz_login();};if(notify){if(_0xeeeb79[_0x81e9('‮71','d&BX')](_0xeeeb79['vvvXC'],_0xeeeb79['nZhEi'])){let _0x3cfc35=new Date();let _0x36121f=_0x3cfc35[_0x81e9('‮72','(@k!')]();let _0x478414=_0xeeeb79[_0x81e9('‫73','uTA8')](_0x3cfc35[_0x81e9('‫74','d&BX')](),0x1);let _0xcf142d=_0x3cfc35[_0x81e9('‮75',']MJh')]();_0x478414=_0x478414<0xa?_0xeeeb79[_0x81e9('‮76','JCNI')]('0',_0x478414):_0x478414;_0xcf142d=_0xcf142d<0xa?_0xeeeb79[_0x81e9('‮77','gjb^')]('0',_0xcf142d):_0xcf142d;return _0x36121f+'/'+_0x478414+'/'+_0xcf142d;}else{if(subTitle){await notify[_0x81e9('‮78','ZSXx')]($[_0x81e9('‮79','9cIZ')],subTitle);}}}})()[_0x81e9('‫7a','KXYt')](_0x28cc9f=>$['logErr'](_0x28cc9f))[_0x81e9('‫7b','GO8P')](()=>$[_0x81e9('‫7c','rY(f')]());async function implement(){var _0x5f01cf={'HLCCx':function(_0x1430b8){return _0x1430b8();},'qmlzO':function(_0x505c86){return _0x505c86();}};await yxxsh_sign();await _0x5f01cf['HLCCx'](yxxsh_video_ad);await _0x5f01cf[_0x81e9('‫7d','9R[q')](yxxsh_shareholder);await _0x5f01cf['qmlzO'](yxxsh_exchange);}function yxxsh_sign(){var _0x3db0da={'GvVsX':function(_0x364957,_0x28bac6){return _0x364957===_0x28bac6;},'DIReS':_0x81e9('‮7e','wK[P'),'hfkZQ':_0x81e9('‮7f','(fJe'),'TPkgq':function(_0x46b624){return _0x46b624();}};let _0x3b835d=_0x3db0da[_0x81e9('‮80','XSkr')](formatDate);let _0x14a0b4=Get_request(script_data+_0x81e9('‫81','bvsj')+_0x3b835d+_0x81e9('‫82','(@k!')+yxxsh_token+_0x81e9('‫83','wWA8'));return new Promise((_0x2186dd,_0x1052b3)=>{var _0x207fef={'wzoYZ':function(_0x5ca34e,_0x165f21){return _0x3db0da[_0x81e9('‮84','C05U')](_0x5ca34e,_0x165f21);},'NIEkj':_0x81e9('‮85',']ULp'),'cIhFK':_0x3db0da['DIReS'],'hsDUm':function(_0x2c243c,_0x9be219){return _0x2c243c==_0x9be219;},'EGMen':_0x81e9('‮86','2LWJ'),'VjaLr':_0x3db0da[_0x81e9('‮87','gM@y')],'QabxY':function(_0x39e38f){return _0x39e38f();}};$[_0x81e9('‮88','OY9X')](_0x14a0b4,async(_0x7495ed,_0x44f93e,_0x3f01db)=>{try{if(_0x207fef[_0x81e9('‮89','ZSXx')](_0x207fef['NIEkj'],_0x207fef[_0x81e9('‫8a','d&BX')])){if(_0x7495ed){if(_0x207fef[_0x81e9('‮8b','C05U')]===_0x207fef[_0x81e9('‫8c','D[u(')]){console[_0x81e9('‫8d','f$&t')](_0x81e9('‮8e','x1C!')+$[_0x81e9('‮8f','JCNI')]+'\x20签到】:\x20网络请求失败');subTitle+=_0x81e9('‫90','1bog')+$['index']+'\x20签到】:\x20网络请求失败';}else{throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}}else{let _0x54e729=JSON[_0x81e9('‫91','5BIz')](_0x3f01db);if(_0x207fef['hsDUm'](_0x54e729[_0x81e9('‮92','GO8P')],0x0)){console['log'](_0x81e9('‮93','5BIz')+$['index']+'\x20签到】:\x20'+_0x54e729['msg']);subTitle+=_0x81e9('‫94','ErsE')+$[_0x81e9('‫95','%qZg')]+_0x81e9('‫96','aVh(')+_0x54e729[_0x81e9('‮97','d&BX')];}else{if(_0x207fef['wzoYZ'](_0x207fef['EGMen'],_0x81e9('‮98','L!Gl'))){console[_0x81e9('‫99','TF8r')]('\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‫9a','wK[P')]+_0x81e9('‮9b','L!Gl')+_0x54e729[_0x81e9('‮9c','aVh(')]);subTitle+=_0x81e9('‫9d',']ULp')+$[_0x81e9('‫9e','gM@y')]+_0x81e9('‮9f','wWA8')+_0x54e729[_0x81e9('‫a0','ErsE')];}else{console[_0x81e9('‮a1','C05U')](e,_0x44f93e);}}}}else{console['log']('\x0a['+TG_ID+_0x81e9('‮a2','uTA8')+result[_0x81e9('‫a3','JCNI')]+_0x81e9('‮a4','aVh('));return![];}}catch(_0x3f73b8){if(_0x207fef[_0x81e9('‫a5',']MJh')](_0x207fef['VjaLr'],'BFZxL')){console[_0x81e9('‮a6','9R[q')](_0x3f73b8,_0x44f93e);}else{console[_0x81e9('‮a7','4Mlz')](_0x3f73b8,_0x44f93e);}}finally{_0x207fef[_0x81e9('‮a8','gM@y')](_0x2186dd);}});});}function yxxsh_video_ad(){var _0x4e979e={'jnXUj':function(_0x24fa6a){return _0x24fa6a();},'uzXct':function(_0x345c74,_0x8f96ff){return _0x345c74===_0x8f96ff;},'fVDbj':_0x81e9('‫a9','2LWJ'),'tCCmw':_0x81e9('‮aa','%qZg')};let _0x11fe4d=Get_request(script_data+_0x81e9('‮ab','5BIz')+yxxsh_token+'&_version=2.8.9&_platform=wx');return new Promise((_0x211de1,_0x44880f)=>{var _0x378d0b={'nsIlZ':function(_0x19b6e4,_0x43cabb){return _0x19b6e4===_0x43cabb;},'MDVau':_0x81e9('‫ac','ZSXx')};if(_0x4e979e['uzXct'](_0x4e979e['fVDbj'],_0x4e979e['tCCmw'])){_0x4e979e[_0x81e9('‮ad','2LWJ')](_0x211de1);}else{$[_0x81e9('‮ae','%qZg')](_0x11fe4d,async(_0x32bb09,_0x1d187b,_0xed8e94)=>{var _0x3370b4={'aQwVw':function(_0x3233e1){return _0x3233e1();}};try{if(_0x378d0b['nsIlZ'](_0x378d0b[_0x81e9('‮af','KSjA')],_0x81e9('‮b0','TF8r'))){if(_0x32bb09){console[_0x81e9('‫b1','wu)w')](_0x81e9('‮93','5BIz')+$[_0x81e9('‮b2','L!Gl')]+_0x81e9('‫b3','(o#X'));subTitle+=_0x81e9('‮b4','(@k!')+$[_0x81e9('‮b5','aVh(')]+'\x20观看广告】:\x20网络请求失败';}else{let _0x3e9926=JSON[_0x81e9('‮b6','wK[P')](_0xed8e94);if(_0x3e9926[_0x81e9('‮b7','(@k!')]==0x0){console[_0x81e9('‫b8','(@k!')](_0x81e9('‮b9','^e7@')+$['index']+_0x81e9('‮ba','(fJe')+_0x3e9926[_0x81e9('‫bb','ZSXx')]);subTitle+=_0x81e9('‫bc','iJ0)')+$[_0x81e9('‮bd','j9Ol')]+_0x81e9('‫be',']ULp')+_0x3e9926[_0x81e9('‮bf','Xes4')];}else{console['log'](_0x81e9('‫c0','uTA8')+$[_0x81e9('‫c1','9cIZ')]+_0x81e9('‫c2','XSkr')+_0x3e9926[_0x81e9('‫c3','bvsj')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x81e9('‮c4','uTA8')+_0x3e9926['msg'];}}}else{_0x3370b4[_0x81e9('‫c5','#tWi')](_0x211de1);}}catch(_0x4aa8d0){console[_0x81e9('‫c6','(fJe')](_0x4aa8d0,_0x1d187b);}finally{_0x211de1();}});}});}function yxxsh_exchange(){var _0x255d35={'GsgvT':function(_0x419dfd,_0x488c67){return _0x419dfd===_0x488c67;},'VAiEy':_0x81e9('‫c7','JCNI'),'NGgWP':function(_0x33e53f,_0x104ce2){return _0x33e53f!==_0x104ce2;},'TXkkq':'udtfG','rhmwC':function(_0x471bc9,_0x423911){return _0x471bc9==_0x423911;},'EpnhB':_0x81e9('‮c8','KSjA'),'czWgb':_0x81e9('‮c9','aVh('),'iqbMY':'RfJdF','JzOHb':function(_0x2a05dd,_0x132570){return _0x2a05dd!==_0x132570;},'Yecob':_0x81e9('‫ca','gM@y'),'JFCsT':_0x81e9('‫cb','wWA8'),'cDoRP':function(_0x34f2f0){return _0x34f2f0();}};let _0x1895cd=Get_request(script_data+_0x81e9('‮cc','wWA8')+yxxsh_token+'&_version=2.8.9&_platform=wx');return new Promise((_0x12c3c4,_0xcf1471)=>{var _0x54dfef={'ebLJC':function(_0x498274,_0x537861){return _0x498274(_0x537861);},'fFEul':'crypto-js'};$[_0x81e9('‫cd','KSjA')](_0x1895cd,async(_0x2f9caa,_0xde1ccd,_0x4df877)=>{if(_0x255d35[_0x81e9('‫ce','Q4Qc')](_0x81e9('‮cf','wWA8'),_0x255d35[_0x81e9('‫d0','gjb^')])){try{if(_0x2f9caa){console['log'](_0x81e9('‫d1','GO8P')+$['index']+_0x81e9('‫d2','9R[q'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x81e9('‫d3','D[u(');}else{if(_0x255d35[_0x81e9('‫d4','ZSXx')](_0x255d35[_0x81e9('‫d5','rFNe')],_0x255d35[_0x81e9('‫d6','x1C!')])){console[_0x81e9('‫c6','(fJe')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x2f9caa);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x2f9caa;}else{let _0xd2f551=JSON['parse'](_0x4df877);if(_0x255d35['rhmwC'](_0xd2f551['code'],0x0)){if(_0x81e9('‫d7','G]I^')===_0x255d35[_0x81e9('‮d8','ZSXx')]){console[_0x81e9('‮a7','4Mlz')](_0x81e9('‮d9','9cIZ')+$['index']+_0x81e9('‫da','j9Ol')+_0xd2f551[_0x81e9('‫db','1bog')]);subTitle+=_0x81e9('‫dc','gjb^')+$[_0x81e9('‫dd','1bog')]+_0x81e9('‮de','gjb^')+_0xd2f551['msg'];}else{CryptoJs=$[_0x81e9('‮df','L3iV')]()?_0x54dfef['ebLJC'](require,_0x54dfef[_0x81e9('‫e0','j9Ol')]):'';}}else{if(_0x255d35[_0x81e9('‮e1',']ULp')]===_0x255d35[_0x81e9('‫e2','dzc(')]){console[_0x81e9('‫e3','rFNe')](_0x81e9('‮b4','(@k!')+$[_0x81e9('‮e4','gjb^')]+'\x20兑换通行证】:\x20'+_0xd2f551['msg']);subTitle+=_0x81e9('‫d1','GO8P')+$[_0x81e9('‫e5','rFNe')]+_0x81e9('‮e6','gM@y')+_0xd2f551['msg'];}else{console[_0x81e9('‫e7','wWA8')]('\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‫e8','OY9X')]+_0x81e9('‫e9','dzc(')+_0xd2f551[_0x81e9('‮ea','wWA8')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‮eb','iJ0)')]+'\x20签到】:\x20'+_0xd2f551['msg'];}}}}}catch(_0x3bf2d3){if(_0x255d35['NGgWP'](_0x255d35[_0x81e9('‮ec',']ULp')],'JYpvp')){console['log'](_0x3bf2d3,_0xde1ccd);}else{console[_0x81e9('‮ed','iJ0)')](_0x81e9('‫ee',']ULp'));return;}}finally{if(_0x255d35['JzOHb'](_0x255d35[_0x81e9('‫ef','iJ0)')],_0x255d35[_0x81e9('‫f0','%qZg')])){_0x255d35[_0x81e9('‫f1','rY(f')](_0x12c3c4);}else{console['log'](e,_0xde1ccd);}}}else{console[_0x81e9('‫b8','(@k!')](_0x81e9('‫f2','L3iV')+$[_0x81e9('‫9e','gM@y')]+_0x81e9('‫f3','gjb^'));subTitle+=_0x81e9('‮b9','^e7@')+$['index']+_0x81e9('‮f4','^e7@');}});});}function yxxsh_shareholder(){var _0x573598={'JDigd':'/sys/class/net','oHEwh':_0x81e9('‮f5','1k&p'),'ifTBS':function(_0x5b97bc,_0xfcac9a){return _0x5b97bc==_0xfcac9a;},'sGWNp':_0x81e9('‫f6','d&BX'),'msmDU':function(_0x3e8961,_0x26eb53){return _0x3e8961!==_0x26eb53;},'jqEZd':function(_0x27c05f){return _0x27c05f();},'VXHSc':function(_0x4b0393,_0x5ec7b2){return _0x4b0393===_0x5ec7b2;},'vrUGV':'RdJWq','gqszp':function(_0x4c69f2,_0x27eba5){return _0x4c69f2(_0x27eba5);}};let _0x48ec82=_0x573598[_0x81e9('‮f7','KSjA')](Get_request,script_data+'api/shareholder/index/look-video-ad&video_type=1&access_token='+yxxsh_token+'&_version=2.8.9&_platform=wx');return new Promise((_0x51be67,_0x2d8098)=>{var _0x45245f={'HGdIr':function(_0x394a53,_0x3f9205){return _0x573598['msmDU'](_0x394a53,_0x3f9205);},'xCwxj':'WEFdK','TkGEm':function(_0x2b8ff1){return _0x573598['jqEZd'](_0x2b8ff1);}};if(_0x573598[_0x81e9('‮f8','Xes4')](_0x573598['vrUGV'],'RdJWq')){$[_0x81e9('‮ae','%qZg')](_0x48ec82,async(_0x260828,_0x3b6e9d,_0x5e5170)=>{try{if(_0x260828){if(_0x45245f['HGdIr'](_0x45245f[_0x81e9('‫f9','XSkr')],_0x81e9('‫fa','@zc7'))){console[_0x81e9('‫fb','bvsj')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result['msg']+_0x81e9('‮fc','OY9X'));return![];}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‮eb','iJ0)')]+'\x20领分红】:\x20网络请求失败');subTitle+=_0x81e9('‫fd','L!Gl')+$[_0x81e9('‮fe','x1C!')]+'\x20领分红】:\x20网络请求失败';}}else{let _0x10a098=JSON[_0x81e9('‫ff','JCNI')](_0x5e5170);if(_0x10a098[_0x81e9('‫100','wu)w')]==0x0){console[_0x81e9('‫101',']ULp')](_0x81e9('‫102','@zc7')+$[_0x81e9('‫103','TF8r')]+_0x81e9('‮104','x1C!')+_0x10a098[_0x81e9('‮105','9cIZ')]);subTitle+=_0x81e9('‮106','ZSXx')+$[_0x81e9('‮107','ErsE')]+'\x20领分红】:\x20'+_0x10a098[_0x81e9('‮97','d&BX')];}else{console[_0x81e9('‮24','9cIZ')](_0x81e9('‮108','%qZg')+$[_0x81e9('‮107','ErsE')]+'\x20领分红】:\x20'+_0x10a098['msg']);subTitle+=_0x81e9('‫2c','wu)w')+$['index']+_0x81e9('‫109',']MJh')+_0x10a098['msg'];}}}catch(_0x55ca93){console[_0x81e9('‮10a','^e7@')](_0x55ca93,_0x3b6e9d);}finally{_0x45245f[_0x81e9('‮10b','j9Ol')](_0x51be67);}});}else{var _0x439681=path[_0x81e9('‫10c','D[u(')](_0x573598[_0x81e9('‮10d','wWA8')],dev,_0x573598[_0x81e9('‫10e','4Mlz')]);if(_0x573598[_0x81e9('‮10f','GO8P')](dev[_0x81e9('‫110','(@k!')](0x0,0x3),_0x573598[_0x81e9('‫111','D[u(')])&&fs[_0x81e9('‮112','2LWJ')](_0x439681)){macs=fs[_0x81e9('‫113','GO8P')](_0x439681)['toString']()[_0x81e9('‫114','1k&p')]();};}});}function Get_request(_0x1f2fbf){var _0x294110={'LTKMS':_0x81e9('‫115','1k&p'),'DdkTu':_0x81e9('‫116','aVh('),'DBeqc':'gzip,compress,br,deflate'};return{'url':''+_0x1f2fbf,'headers':{'Host':_0x294110[_0x81e9('‮117','D[u(')],'Connection':_0x294110['DdkTu'],'charset':_0x81e9('‫118','ErsE'),'User-Agent':yxxsh_UA,'content-type':_0x81e9('‫119','TF8r'),'Accept-Encoding':_0x294110[_0x81e9('‫11a',']MJh')],'Referer':_0x81e9('‮11b','OY9X')}};};function formatDate(){var _0x4c5029={'vPLzP':function(_0xbbab41,_0x1d9776){return _0xbbab41+_0x1d9776;},'HmmGf':function(_0x3961de,_0x511235){return _0x3961de+_0x511235;},'lgGji':function(_0x19ab56,_0x248f28){return _0x19ab56<_0x248f28;}};let _0x5214a7=new Date();let _0x10934f=_0x5214a7['getFullYear']();let _0x48b709=_0x4c5029[_0x81e9('‫11c','(o#X')](_0x5214a7[_0x81e9('‮11d','1bog')](),0x1);let _0x403da3=_0x5214a7['getDate']();_0x48b709=_0x48b709<0xa?_0x4c5029[_0x81e9('‮11e','j9Ol')]('0',_0x48b709):_0x48b709;_0x403da3=_0x4c5029['lgGji'](_0x403da3,0xa)?'0'+_0x403da3:_0x403da3;return _0x10934f+'/'+_0x48b709+'/'+_0x403da3;};async function yyz_login(){var _0x2b6cd2={'hDsHU':function(_0x5eadcc){return _0x5eadcc();},'OLCbu':'gyHRx','ONhkj':function(_0x14febe,_0x4b335c){return _0x14febe===_0x4b335c;},'cOEAt':function(_0x5c1cd5,_0x5481c3){return _0x5c1cd5===_0x5481c3;},'uKxYe':function(_0x2ea0fa,_0x321186){return _0x2ea0fa(_0x321186);},'ipEXY':function(_0xa4fb5,_0x11153a){return _0xa4fb5==_0x11153a;},'apwhQ':function(_0x436811,_0x5a5090){return _0x436811!==_0x5a5090;},'SHOJh':_0x81e9('‫11f','bvsj'),'Mjtso':function(_0x1133dd,_0x47fd61){return _0x1133dd!==_0x47fd61;},'pNFJg':function(_0x47a2f2,_0x10a283){return _0x47a2f2/_0x10a283;},'HTEOW':function(_0x5041ff,_0x595220){return _0x5041ff+_0x595220;},'KjFOf':function(_0x386160,_0x4eb721){return _0x386160+_0x4eb721;},'bYWpV':function(_0x47416c,_0x545c9f){return _0x47416c+_0x545c9f;},'bSzMF':_0x81e9('‮120','rY(f'),'cabXg':_0x81e9('‫121','(fJe')};var _0x344b55=Math['floor'](_0x2b6cd2[_0x81e9('‫122','j9Ol')](Date[_0x81e9('‮123','C05U')](),0x3e8));var _0x8a5086=CryptoJs[_0x81e9('‮124','Xes4')](''+TG_ID+mac+os[_0x81e9('‮125','rY(f')]()+YZ)['toString']();var _0x528476=_0x81e9('‫126','gM@y')+TG_ID+_0x81e9('‫127','WlXM')+_0x8a5086+_0x81e9('‮128','rY(f')+_0x344b55;var _0x422f89=CryptoJs['MD5'](_0x2b6cd2['HTEOW'](_0x2b6cd2[_0x81e9('‮129','%qZg')](_0x528476,'&'),appid))[_0x81e9('‫12a','WlXM')]();_0x528476=_0x2b6cd2['bYWpV'](_0x528476+_0x2b6cd2[_0x81e9('‫12b','9R[q')],_0x422f89);let _0x834ea0={'url':serverUrl+_0x81e9('‫12c','d&BX'),'headers':{'user-agent':_0x2b6cd2['cabXg']},'body':_0x528476};return new Promise((_0x2a94d0,_0x27e0d8)=>{if(_0x2b6cd2[_0x81e9('‮12d','9R[q')](_0x81e9('‮12e','f$&t'),_0x81e9('‮12f','9cIZ'))){console['log']('\x0a['+TG_ID+_0x81e9('‫130','KSjA')+result['msg']);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0x81e9('‮131','C05U')];return![];}else{$['post'](_0x834ea0,async(_0xb4906e,_0x36078f,_0x205fae)=>{var _0x2e9f46={'UNWPR':function(_0x46aff5){return _0x2b6cd2[_0x81e9('‫132','j9Ol')](_0x46aff5);}};if(_0x2b6cd2['OLCbu']!==_0x81e9('‫133','rFNe')){console[_0x81e9('‮134','2LWJ')](e);}else{try{if(_0xb4906e){if(_0x2b6cd2[_0x81e9('‫135','x1C!')]('qUkOm','qUkOm')){console['log']('\x0a['+TG_ID+_0x81e9('‮136','ErsE')+_0xb4906e);subTitle+='\x0a['+TG_ID+_0x81e9('‮137','x1C!')+_0xb4906e;}else{_0x2e9f46[_0x81e9('‫138','aVh(')](_0x2a94d0);}}else{let _0x51f631=JSON[_0x81e9('‮139','rY(f')](_0x205fae);if(_0x51f631['code']==0xc8){if(_0x2b6cd2['cOEAt']('OUXzh','bUwnw')){app_soy_yxxsh_data=process[_0x81e9('‮13a','ErsE')]['soy_yxxsh_data'][_0x81e9('‮13b','G]I^')]('@');}else{let _0x319494=Format_time(_0x51f631['msg'][_0x81e9('‮13c','1k&p')][_0x81e9('‫13d','f$&t')]);console[_0x81e9('‫13e','XSkr')]('\x0a['+TG_ID+_0x81e9('‫13f','XSkr')+_0x319494);await _0x2b6cd2[_0x81e9('‫140','ErsE')](get_vip,_0x51f631[_0x81e9('‫a3','JCNI')][_0x81e9('‫141','L3iV')]);}}else if(_0x2b6cd2['ipEXY'](_0x51f631[_0x81e9('‫142','G]I^')],0x71)){await _0x2b6cd2['hDsHU'](yyz_user_reg);}else{console[_0x81e9('‮2b','%qZg')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x51f631[_0x81e9('‮143','XSkr')]);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x51f631['msg'];return![];}}}catch(_0x4bb74a){if(_0x2b6cd2[_0x81e9('‮144','dzc(')]('CAldv',_0x2b6cd2[_0x81e9('‫145','wu)w')])){console[_0x81e9('‮146','G]I^')]('\x0a【'+$[_0x81e9('‫147','JCNI')]+'】：未填写相应变量\x20soy_yyz_data');}else{console['log'](_0x4bb74a);}}finally{if(_0x2b6cd2[_0x81e9('‮144','dzc(')](_0x81e9('‫148','wWA8'),_0x81e9('‮149','gM@y'))){_0x2b6cd2['hDsHU'](_0x2a94d0);}else{os=$[_0x81e9('‫14a','%qZg')]()?require('os'):'';}}}});}});}async function yyz_user_reg(){var _0x21db8c={'FgFMG':function(_0x3a7e95){return _0x3a7e95();},'KNmOO':function(_0x186c0e,_0x19c235){return _0x186c0e==_0x19c235;},'KwwxU':function(_0x10addf,_0x4031d2){return _0x10addf!==_0x4031d2;},'XZxZC':_0x81e9('‮14b','9R[q'),'zrGOE':_0x81e9('‮14c','1bog'),'CEYrx':function(_0x5d6bbd){return _0x5d6bbd();},'ZKjZc':function(_0x471e0e,_0x28b4b2){return _0x471e0e===_0x28b4b2;},'ytFpC':'TlaPo','FyXGB':_0x81e9('‮14d','GO8P'),'AEzmh':'isVut','lyqiv':_0x81e9('‫14e','bvsj'),'VohBo':function(_0x547261){return _0x547261();},'OMKSC':_0x81e9('‮14f','gM@y'),'JyGGA':function(_0xa9f48d,_0x3299d6){return _0xa9f48d&&_0x3299d6;},'eMGzp':_0x81e9('‮150','iJ0)'),'FpAcE':function(_0x246e05,_0x366240){return _0x246e05/_0x366240;},'dmbHS':function(_0x4dcff3,_0x5d7bd2){return _0x4dcff3+_0x5d7bd2;},'dTjMl':_0x81e9('‮151','1bog'),'bkANw':_0x81e9('‫152','1bog')};if(_0x21db8c[_0x81e9('‮153','TF8r')](!Tips,!YZ)){if(_0x81e9('‮154','f$&t')!==_0x21db8c[_0x81e9('‮155','uTA8')]){_0x21db8c[_0x81e9('‫156','uTA8')](resolve);}else{console['log'](_0x81e9('‫157','iJ0)'));return![];}}var _0x2ee8d1=Math[_0x81e9('‮158','2LWJ')](_0x21db8c[_0x81e9('‫159','ErsE')](Date[_0x81e9('‫15a','1k&p')](),0x3e8));var _0x49c769=CryptoJs[_0x81e9('‮124','Xes4')](''+TG_ID+mac+os[_0x81e9('‮15b',']ULp')]()+YZ)[_0x81e9('‫15c','wK[P')]();var _0x52dd4d='user='+TG_ID+_0x81e9('‮15d','@zc7')+_0x49c769+_0x81e9('‫15e','TF8r')+_0x2ee8d1;var _0x20a48b=CryptoJs[_0x81e9('‮15f','wK[P')](_0x21db8c[_0x81e9('‮160','j9Ol')](_0x21db8c[_0x81e9('‫161','iJ0)')](_0x52dd4d,'&'),appid))['toString']();_0x52dd4d=_0x52dd4d+_0x21db8c[_0x81e9('‮162','f$&t')]+_0x20a48b;let _0x2a5592={'url':serverUrl+_0x81e9('‮163','j9Ol'),'headers':{'user-agent':_0x21db8c['bkANw']},'body':_0x52dd4d};return new Promise((_0x3a16e4,_0x32dc13)=>{if(_0x21db8c[_0x81e9('‮164','uTA8')]!=='ADbkQ'){$['post'](_0x2a5592,async(_0x1d2ba1,_0x1ac2dc,_0x278e1f)=>{try{if(_0x1d2ba1){console['log']('\x0a['+TG_ID+_0x81e9('‫165','XSkr')+_0x1d2ba1);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x1d2ba1;}else{let _0x28fa95=JSON[_0x81e9('‮166','1bog')](_0x278e1f);if(_0x21db8c[_0x81e9('‮167','bvsj')](_0x28fa95['code'],0xc8)){if(_0x21db8c[_0x81e9('‫168',']MJh')](_0x21db8c[_0x81e9('‫169','D[u(')],_0x21db8c[_0x81e9('‮16a','4Mlz')])){await _0x21db8c[_0x81e9('‫16b','(@k!')](yyz_login);}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‫16c','D[u(')]+'\x20领分红】:\x20网络请求失败');subTitle+=_0x81e9('‮106','ZSXx')+$['index']+_0x81e9('‫16d','ZSXx');}}else if(_0x21db8c[_0x81e9('‮16e','KSjA')](_0x28fa95[_0x81e9('‫16f','aVh(')],0x75)){if(_0x21db8c[_0x81e9('‮170','gjb^')]('TlaPo',_0x21db8c[_0x81e9('‮171','KSjA')])){console['log']('\x0a['+TG_ID+_0x81e9('‮172','1bog')+_0x28fa95['msg']+'，该TG_ID/设备/IP已被注册');return![];}else{console['log']('\x0a['+TG_ID+_0x81e9('‫173','2LWJ')+_0x1d2ba1);subTitle+='\x0a['+TG_ID+_0x81e9('‫174','(o#X')+_0x1d2ba1;}}else{if(_0x21db8c[_0x81e9('‫175','1k&p')](_0x21db8c['FyXGB'],_0x21db8c[_0x81e9('‫176','wu)w')])){console[_0x81e9('‫177','KSjA')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x28fa95[_0x81e9('‫db','1bog')]);subTitle+='\x0a['+TG_ID+_0x81e9('‮178','gjb^')+_0x28fa95['msg'];return![];}else{Tips=author[_0x81e9('‮179','wWA8')](/(\S*)TG_ID:@ls_soy/)[0x1];}}}}catch(_0x4e74be){if(_0x21db8c[_0x81e9('‫17a','1k&p')]===_0x21db8c['lyqiv']){console['log'](_0x4e74be);}else{console[_0x81e9('‫17b','1k&p')]('\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‮2f','lAk[')]+_0x81e9('‮17c','ErsE')+result['msg']);subTitle+=_0x81e9('‫90','1bog')+$[_0x81e9('‮17d','KXYt')]+_0x81e9('‫17e','rY(f')+result[_0x81e9('‮17f','(@k!')];}}finally{_0x21db8c[_0x81e9('‫180','dzc(')](_0x3a16e4);}});}else{let _0x31baef=JSON['parse'](data);if(_0x31baef[_0x81e9('‮181','Xes4')]==0x0){console['log'](_0x81e9('‫182','(o#X')+$[_0x81e9('‫c1','9cIZ')]+_0x81e9('‮183','(fJe')+_0x31baef[_0x81e9('‮30','wu)w')]);subTitle+=_0x81e9('‮8e','x1C!')+$[_0x81e9('‫103','TF8r')]+'\x20签到】:\x20'+_0x31baef[_0x81e9('‮184','4Mlz')];}else{console[_0x81e9('‫185','j9Ol')](_0x81e9('‫d1','GO8P')+$[_0x81e9('‫186','(fJe')]+'\x20签到】:\x20'+_0x31baef[_0x81e9('‮184','4Mlz')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x81e9('‮eb','iJ0)')]+'\x20签到】:\x20'+_0x31baef['msg'];}}});}async function get_vip(_0x12edd6){var _0x10b902={'ejhGT':function(_0x326a96,_0x48023e){return _0x326a96===_0x48023e;},'andRL':'yFldX','KXsfO':_0x81e9('‫187','(@k!'),'BgVAz':function(_0x58009b){return _0x58009b();},'jjgew':function(_0x424db0,_0x34d514){return _0x424db0/_0x34d514;},'yNTMj':function(_0x381a62,_0x3957be){return _0x381a62+_0x3957be;},'Ushyl':_0x81e9('‫188','KSjA')};var _0xa04f2f=Math['floor'](_0x10b902[_0x81e9('‮189','L3iV')](Date['now'](),0x3e8));var _0x34521b=_0x81e9('‮18a','GO8P')+user_num+'&token='+_0x12edd6+'&t='+_0xa04f2f;var _0x5146a3=CryptoJs[_0x81e9('‫18b','lAk[')](_0x10b902['yNTMj'](_0x34521b+'&',appid))[_0x81e9('‮18c','(o#X')]();_0x34521b=_0x34521b+_0x10b902[_0x81e9('‮18d','XSkr')]+_0x5146a3;let _0x5592f4={'url':serverUrl+_0x81e9('‮18e','C05U'),'headers':{'user-agent':_0x81e9('‫18f','XSkr')},'body':_0x34521b};return new Promise((_0x230990,_0x350c51)=>{var _0x2caec1={'NivlH':function(_0x150de7,_0x588d23){return _0x10b902[_0x81e9('‮190','aVh(')](_0x150de7,_0x588d23);},'gVrOb':'cFYJl','nQeCC':_0x10b902['andRL'],'LedOw':function(_0x7133bf,_0x25ad79){return _0x7133bf==_0x25ad79;},'cClqa':_0x10b902['KXsfO'],'BLfVN':function(_0x27f04f,_0x4f9cba){return _0x27f04f(_0x4f9cba);},'gMmIH':function(_0x528799){return _0x10b902[_0x81e9('‫191','2LWJ')](_0x528799);}};$[_0x81e9('‮192','TF8r')](_0x5592f4,async(_0x52e982,_0x381b48,_0x3e6527)=>{try{if(_0x52e982){if(_0x2caec1[_0x81e9('‫193','GO8P')](_0x81e9('‫194','iJ0)'),_0x2caec1[_0x81e9('‮195','@zc7')])){console['log'](_0x81e9('‫196','OY9X')+$[_0x81e9('‫e5','rFNe')]+_0x81e9('‫197','L!Gl')+result[_0x81e9('‫2d','KXYt')]);subTitle+=_0x81e9('‫2c','wu)w')+$[_0x81e9('‫198','ZSXx')]+_0x81e9('‫199','Xes4')+result['msg'];}else{console[_0x81e9('‮ed','iJ0)')]('\x0a['+TG_ID+_0x81e9('‫19a','%qZg')+_0x52e982);subTitle+='\x0a['+TG_ID+_0x81e9('‮19b','ZSXx')+_0x52e982;}}else{if(_0x2caec1[_0x81e9('‫19c','%qZg')]===_0x2caec1[_0x81e9('‮19d','Q4Qc')]){let _0x242a8c=JSON['parse'](_0x3e6527);if(_0x2caec1[_0x81e9('‫19e','1k&p')](_0x242a8c[_0x81e9('‫19f','gjb^')],0xc8)){script_data=_0x242a8c['msg'];await implement();}else{if(_0x2caec1[_0x81e9('‮1a0','rY(f')](_0x81e9('‮1a1','wu)w'),_0x2caec1[_0x81e9('‮1a2','#tWi')])){console[_0x81e9('‫99','TF8r')](_0x81e9('‮1a3','1k&p')+$[_0x81e9('‫1a4',']ULp')]+_0x81e9('‮1a5','uTA8')+_0x242a8c['msg']);subTitle+=_0x81e9('‮b4','(@k!')+$['index']+_0x81e9('‮1a6','G]I^')+_0x242a8c[_0x81e9('‮30','wu)w')];}else{if(yyz_Kami){await _0x2caec1[_0x81e9('‫1a7','aVh(')](card,_0x12edd6);}else{console[_0x81e9('‫1a8','lAk[')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';return![];}}}}else{app_soy_yxxsh_data=process['env'][_0x81e9('‮1a9','XSkr')]['split']('#');}}}catch(_0x2baad3){console[_0x81e9('‫1aa','ZSXx')](_0x2baad3);}finally{_0x2caec1[_0x81e9('‫1ab','Q4Qc')](_0x230990);}});});}async function card(_0x3c3b78){var _0x141ac7={'oMtoV':'youxiang.lglm.shop','gqCsk':_0x81e9('‫1ac','G]I^'),'IXmEQ':function(_0x1da000,_0x419fa0){return _0x1da000===_0x419fa0;},'yZmso':'EUxgE','Xojvc':function(_0x138bc7){return _0x138bc7();},'nvwpr':_0x81e9('‫1ad','bvsj'),'FrfHE':function(_0x4f81cc,_0xb9efad){return _0x4f81cc/_0xb9efad;},'NsKDN':function(_0x15b882,_0x250f4a){return _0x15b882+_0x250f4a;},'AKlhe':function(_0xe70c9c,_0x140a38){return _0xe70c9c+_0x140a38;},'JmvMm':function(_0x2c47b8,_0x310f98){return _0x2c47b8+_0x310f98;},'dDlLO':_0x81e9('‫1ae','4Mlz')};console[_0x81e9('‫13e','XSkr')](yyz_Kami);var _0x46943d=Math['floor'](_0x141ac7['FrfHE'](Date[_0x81e9('‮1af','wK[P')](),0x3e8));var _0x15b18f=_0x81e9('‮1b0','ErsE')+_0x3c3b78+'&kami='+yyz_Kami+_0x81e9('‮1b1','x1C!')+_0x46943d;var _0x427a6a=CryptoJs[_0x81e9('‮1b2','Q4Qc')](_0x141ac7[_0x81e9('‫1b3','9R[q')](_0x141ac7[_0x81e9('‮1b4','wK[P')](_0x15b18f,'&'),appid))[_0x81e9('‮1b5','L!Gl')]();_0x15b18f=_0x141ac7[_0x81e9('‮1b6','j9Ol')](_0x141ac7[_0x81e9('‫1b7','uTA8')](_0x15b18f,_0x81e9('‫1b8',']ULp')),_0x427a6a);let _0x4d1548={'url':serverUrl+'card','headers':{'user-agent':_0x141ac7[_0x81e9('‮1b9','uTA8')]},'body':_0x15b18f};return new Promise((_0x245fac,_0x48e53b)=>{var _0xb900cc={'jaXIc':_0x141ac7['oMtoV'],'rDqYF':_0x141ac7[_0x81e9('‮1ba','gM@y')],'SkNQR':function(_0x56a645,_0x27cb75){return _0x56a645!==_0x27cb75;},'JCdar':'qAlCx','gwmcF':function(_0xfb8019,_0x34594c){return _0xfb8019==_0x34594c;},'scLYR':function(_0x278594,_0x58794a){return _0x141ac7[_0x81e9('‮1bb','uTA8')](_0x278594,_0x58794a);},'GyHLb':_0x141ac7['yZmso'],'MUEqH':function(_0x3d39b0){return _0x141ac7[_0x81e9('‫1bc','Q4Qc')](_0x3d39b0);}};if(_0x81e9('‫1bd','D[u(')===_0x141ac7['nvwpr']){app_soy_yxxsh_data=process[_0x81e9('‮46','%qZg')][_0x81e9('‫1be','OY9X')][_0x81e9('‫1bf','L!Gl')]();}else{$['post'](_0x4d1548,async(_0x2a2bf9,_0x130e50,_0x2f800a)=>{var _0x1f0834={'DOgyu':_0xb900cc['jaXIc'],'rUHPi':_0x81e9('‮1c0',']ULp'),'LFoAs':_0x81e9('‫1c1','4Mlz'),'uQrsS':_0x81e9('‮1c2','d&BX'),'BiCTC':_0xb900cc[_0x81e9('‫1c3','1k&p')]};try{if(_0x2a2bf9){if(_0xb900cc[_0x81e9('‫1c4','wWA8')]('bXwSV',_0x81e9('‮1c5','uTA8'))){console['log']('\x0a['+TG_ID+_0x81e9('‮1c6','9cIZ')+_0x2a2bf9);subTitle+='\x0a['+TG_ID+_0x81e9('‫1c7','gM@y')+_0x2a2bf9;}else{console[_0x81e9('‫1c8','uTA8')](_0x81e9('‮1c9','rFNe')+$[_0x81e9('‫1ca','2LWJ')]+_0x81e9('‮1cb','rY(f'));subTitle+=_0x81e9('‫9d',']ULp')+$[_0x81e9('‫1cc','d&BX')]+'\x20签到】:\x20网络请求失败';}}else{if(_0x81e9('‫1cd','1bog')!==_0xb900cc[_0x81e9('‮1ce','KXYt')]){let _0xd1a874=JSON[_0x81e9('‮1cf','G]I^')](_0x2f800a);if(_0xb900cc['gwmcF'](_0xd1a874[_0x81e9('‮1d0','5BIz')],0xc8)){console[_0x81e9('‫1d1','@zc7')]('\x0a['+TG_ID+_0x81e9('‫1d2','gjb^')+_0xd1a874[_0x81e9('‫1d3','OY9X')]+_0x81e9('‫1d4','(@k!'));return![];}else{console['log']('\x0a['+TG_ID+_0x81e9('‫1d5','wK[P')+_0xd1a874[_0x81e9('‫db','1bog')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0xd1a874[_0x81e9('‮1d6','^e7@')];return![];}}else{console[_0x81e9('‫c6','(fJe')]('\x0a['+TG_ID+_0x81e9('‫1d7','rFNe')+result[_0x81e9('‫1d8','@zc7')]);subTitle+='\x0a['+TG_ID+_0x81e9('‮1d9','4Mlz')+result[_0x81e9('‫1da','L!Gl')];return![];}}}catch(_0x47bb44){if(_0xb900cc[_0x81e9('‮1db','1bog')](_0xb900cc['GyHLb'],_0xb900cc[_0x81e9('‫1dc','#tWi')])){console['log'](_0x47bb44);}else{return{'url':''+url,'headers':{'Host':_0x1f0834['DOgyu'],'Connection':_0x1f0834[_0x81e9('‫1dd','9R[q')],'charset':_0x1f0834[_0x81e9('‮1de','L3iV')],'User-Agent':yxxsh_UA,'content-type':_0x1f0834['uQrsS'],'Accept-Encoding':_0x81e9('‮1df','1k&p'),'Referer':_0x1f0834[_0x81e9('‮1e0','1k&p')]}};}}finally{_0xb900cc[_0x81e9('‫1e1','L!Gl')](_0x245fac);}});}});}function Format_time(_0x50101a){var _0x41a1e4={'ZhXDM':function(_0x1885b2,_0x4ca493){return _0x1885b2*_0x4ca493;},'MQcgO':function(_0x58e3d3,_0xdd81b1){return _0x58e3d3+_0xdd81b1;},'cxlli':function(_0x3ce853,_0xc54958){return _0x3ce853+_0xc54958;},'nwwml':function(_0x1eba72,_0x31a840){return _0x1eba72<_0x31a840;},'CclyP':function(_0xcda455,_0x51f673){return _0xcda455+_0x51f673;},'vmbxT':function(_0x3c42ff,_0x5e7849){return _0x3c42ff+_0x5e7849;},'XNaaR':function(_0x22d606,_0x464b97){return _0x22d606+_0x464b97;},'QcVnu':function(_0x297a53,_0x41c3de){return _0x297a53+_0x41c3de;}};var _0x49495d=new Date(_0x41a1e4['ZhXDM'](_0x50101a,0x3e8));var _0x26c315=_0x41a1e4['MQcgO'](_0x49495d[_0x81e9('‫1e2','GO8P')](),'-');var _0x435177=_0x41a1e4[_0x81e9('‫1e3','wK[P')](_0x41a1e4[_0x81e9('‫1e4','lAk[')](_0x49495d[_0x81e9('‮1e5','wK[P')](),0x1)<0xa?_0x41a1e4['MQcgO']('0',_0x49495d[_0x81e9('‮1e6','aVh(')]()+0x1):_0x49495d['getMonth']()+0x1,'-');var _0x1a3f61=_0x41a1e4[_0x81e9('‮1e7','OY9X')](_0x49495d[_0x81e9('‮1e8','5BIz')](),'\x20');var _0x808a64=_0x41a1e4[_0x81e9('‫1e9','9R[q')](_0x49495d[_0x81e9('‫1ea','9R[q')](),':');var _0x40dfad=(_0x41a1e4['nwwml'](_0x49495d['getMinutes'](),0xa)?_0x41a1e4['CclyP']('0',_0x49495d[_0x81e9('‮1eb','#tWi')]()):_0x49495d['getMinutes']())+':';var _0x3422a9=_0x49495d[_0x81e9('‮1ec','x1C!')]();let _0x3ec2c0=_0x41a1e4[_0x81e9('‮1ed','1k&p')](_0x41a1e4[_0x81e9('‫1ee','1k&p')](_0x41a1e4['XNaaR'](_0x41a1e4[_0x81e9('‮1ef','G]I^')](_0x26c315,_0x435177),_0x1a3f61),_0x808a64),_0x40dfad)+_0x3422a9;return _0x41a1e4[_0x81e9('‫1f0','L!Gl')](_0x41a1e4[_0x81e9('‮1f1','lAk[')](_0x41a1e4['QcVnu'](_0x41a1e4[_0x81e9('‫1f2','j9Ol')](_0x26c315,_0x435177),_0x1a3f61),_0x808a64),_0x40dfad)+_0x3422a9;};_0xodA='jsjiami.com.v6';


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