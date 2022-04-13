/*

软件名称:利分宝

项目注册地址:http://frb.quancankeji.com/?tgsbma=TGM-16477181944254496432

注册id：WD2RDWQG

需要实名认证，而且人脸

自行进行交易，收益不祥，可以叫大佬些注册机玩玩

必要变量:

变量名 soy_lfb_data
变量值 TG_ID&卡密&支付方式(1微信,2支付宝)&token
token自行抓包 http://frb.quancankeji.com 的链接请求头上的autoken


多个号用 # 或 @ 或 换行 隔开

cron 0-59/20 10,13,30 * * * app_lfb.js

*/


const $ = new Env('利分宝');
const notify = $.isNode() ? require('./sendNotify') : '';
const author = '作者TG_ID:@ls_soy';

var _0xodH='jsjiami.com.v6',_0xodH_=['‮_0xodH'],_0x446c=[_0xodH,'w47DqAHnm4vlvZ3lpbfot4Mfw6V/','asO1w5s=','bh7CrsODwr8Sf1jDhmoWw48=','woEdwr59cMKEAnQ=','FsKywoPCmg==','wqwmH8K5w60=','w6hVwoQMHQ==','JMKSw7rDkAk=','w4JLwrwgMA==','SsOpw4bCtsK0w5AHwo3DjsOKYXDCqkzChVwXw6B8w4RAw7lBQA0NbcKILzjDqXFpJUzDt1rCkcO9YsK7S25hOzx9w6zDiRxVfFbDgMKpDAxjN2zCo3ZYw6jCnsOHDzlsw4J4wpnDoMOewoXCrmXDqT5wwq3Dn8K0RnDClU7DlMO4wqjDvhLCkMKew5FcT0nDg8OvPkLCmHnCowTCnMObfsO2w5TCgBDDvMOzw7ciH8K/w6nDghhAw7tHw6DCm8OtNwkTNlrDvmfCgMOXOcKSKUnClxRqMENjw5tAw7rCoSB6w6zCmRBlFTRywpYRwq1Yw4rCrsKDLU3CkMOgw7keHMKswoQxw7sDAgZSbcKkYWfClMO8ZsKJAMONYWzCrXHCtMORw5VqwovDilfCtWhfw7QeUMORwpYzw5FsNsOFDMO2w5HClXkW','w7/jgrTkv7nogp7mj6znpobjgI7vv67pqLvorrXohIzmn6Zpw5Fd5aS56LaLVOiuruWKt+S9ieaXq+iEjuadtuS4mOS7ruaEoOWFmuWtvw==','W8KyHcK9IQ==','N0DDgsKHHg==','U0Yy','BsKdwoE=','wq5+w4rDkS3CkDXCgA==','aBTCnMOTwosSfVo=','HBEhwr8P','M8OUwo12GxQCXsOVw4ZLVUM+woLDlDbDocO+OmLCocK/w4rDswEWwq/CncKlwozDt8OAw5kOw47DhA==','Og/Dsg==','w7ZnLA==','elDCtMOWw4E=','woNYw6vDkxM=','w5pIwrgQGsOTDhs=','w6x8wpggFg==','wqwoBMK7w6U=','VDbCo8Ozwrs=','NVvCoDXClw==','woTClcOkw7II','wrY+wqHCugQ=','e8Klw74i','wq5fw7Fcw5g=','wqg4w6EpUw==','JFA2w6kl','wojChcOl','772K6K+NQ8KUMF4iW+iulOWmpMO4c8KP5bWn6KCU5rKw5YaU','HcO7w4Q+Xw==','MW/DucKqIw==','wrvDhsOvw7Rk','wpFww41hw7A=','w7/CvUY=','DeOClsOPwrDCoeiGpuadiuaNsuengcOJfH3otqTlj7fDjA==','w5PpobPlp7bliJfjgYUQZOe/sue5huiukOawouWln+i2iw==','Z+OCisOFIkPoh4HmnZnmj77nporDssKHw4not5TljrUZ','w5XpoKLlp7PliKrjgK3Chj/nvqXnuavoroPmsZTlp7votJ8=','SgdMWsK7','XC1iUQ==','wowawqZaVA==','B+S5iuWIjuWLg+igvOODjVMd572Z57m+6KyC5rKP5aae6LWs','GDtAwpFr','wq7Dj8KA5rGO5YeY5aSb6LWhwpnCug==','77yr6K2Uw7vCkwvClS0S6K625aalw5rChMO/5ba76KKS5rGl5YeS','D8Kew6fDsyA=','w4NRwrMNCg==','VFoLwonCv8OX','bAzCixkq','wp/CmsOH','YMOkUuawuuWHn+Wluui2nCHCmg==','JsKqw5M=','FsOjwpTmsaLlh6blpbHotoTCsCM=','w7bCnMK1','AcO1w5E=','SMO5wro8MQ==','wrjCjMOj','VsOwwq3pq5ror5fotqfljaLDhsKM6L6g5ZucaQ==','w6YZOemqnuispei0o+WPmxDCvei9guWZgQo=','wqUGw4k7','DiEswr1z','E1Q+wrAd','cMOLwpnDlQ8=','w7LCl8Orw5XDrsORQQ==','w7wrwo8=','w5XChsOJw4E6Fw==','XkotRyfCiMK/','TCfDgMOuw5jDrScHw5LCusKWw7jCq8KYw5XDjlpcW1bDtR9tCMK2Gn5vNQbCtsOiWsO3IjZvAxwgWBTDqSDCmlx6w6/DnsOFw6V9w53Dk33CvcOgDgxKwpnClsOKwrDDqcKmLcKrYUFrXsOUayHDi27DiS5xPHkDwpYybnPDphYQD8O4wo7DgwotSMKsXcOYwpTDuMOpcSxRw4XDhBMAw6fDsMOcGADDtT3CklfDgz9AwqxMw6xVTwDCizsgXFvCmwzDh8OvBWhND8KDw4U5O1jCrcOiF1DCr8KSDMOdw6bDm8KTw6jClcOrw7XDtAfDucOSQ8K8XMKkwqDDocKXw5jCmV3DhH/Dq8OYw5MsRsK2VsKZMno2F20gDmZAWMK2wrU+w7s9Pn9RwrsKMwPCucKGN8KVFRRHw5LDkglRw6wewpc7','GnTCnBfCvA==','ZcOEwoE7DQ==','UyxgWsKq','TBpCQsKG','asKFw4USbA==','dmXDpsKmXg==','S0jDhcKx','wrAmA8KHw4k=','wqXCs8OLw7bDpA==','QsOlw4zCkhc=','wrvCncO5w5Iu','HzYpMj1owqbDi8OCOMO5w77Dg3QUaTzDnMO2wq0Zwp3CusKoO0wxw6kQX0PCkMKvw6k=','wqRQw7bDtCU=','GHrCkMKlLsKcOcKNwo8ZbyjDp8KVwrvCksO6wqRy','wp/ChsOhw47CpsO+EMOxw6HClw==','GzAWwoZZ','ODpQwoNX','WsK8wpzkvqDnl7Dlj53lrqDCmMOb6Lyw5ZqPcA==','FsOjwpTkv7XnlYLljKHlrafCsCPovLnlmZhV','asOLwpU=','GxI36amf6K6u6LSx5Y6RTgrovbflmIka','fynCucOewpU=','woTCt8OEw64j','Yngm5L2L55eh5Yyk5a+HesOt','ZERC','77296IWP5pyI5bSG5q2w5bid5L6F55Sc','wqTDk8Ozwq/DlQ==','f07Dt8KAUQ==','wrohwoJ4Tg==','w5NvAg==','BwFq5L6455Wx5Y2S5a27w51/5rCV5p+g5Y+z5a2U5Y2h5Lyw55S7','YDjDl+S/pueWn+WMl+WtjAx45rCO5pyH5Y+55a6N5Y6Z5LyT55aU','wpYhMQ==','woHDp8Kkw5JW','UcKcw54FXg==','VTdUXsKH','d8OVw4nCnTs=','MHIPw7wG','JcKuawfCmQ==','GGTCncOkLQ==','w4FUwqo=','wrd0w5V9w7DDkQ==','w7Y/wqrCjgLDkQ==','wrXCphw=','w5tUwo4WN8OIBRs=','wqLDnMOTw5lb','wobCl8Oww68=','f0kaXR4=','w5N1AcO3fQ==','Qn7Dl8KgTA==','wrfCgsOPw6cu','LnPDp8KuEg==','fsOGwrljGw==','MsKZwrPComE=','w77CmsKWRcKz','wo0sw4IEIA==','csO6Ixs=','wo/DicO7wqjDgg==','XloRXRc=','dcOQwr8gJg==','UDrDscOWw6E=','wpbCjcOww6QH','w6YZOeS9reeXjOWNpOWvqhDCvei9guWZgQo=','w7IBw73kvJ3nla3lj4Dlrq1GwoPovqPlmZnCoA==','OsK4XhXCmw==','KUPDtcKCPw==','UkzCm8OKw7s=','wqV+w53DgA==','w5wFSA==','WVV45L2v55WN5Y2f5ayuwpLDuA==','77yx6ISz5p2p5bSU5q645bqK5Lyx55eW','BsOIw4QEfg==','GxI35L6s55WH5Y225a6gTgo=','WsK8wpzkvqDnl7Dlj53lrqDCmMOb','w50ZSA==','w4tibFnCiA==','fxfCpQQP','wojDnMKg','Y8KSw78ZUw==','w6LCrcK2SMKG','w4ALXRQo','wqZpw4x7w7HCiHQ=','w7DjgZ4lwr3DmeiFouadl+aNhOels8O5PXHotovljKrDlg==','F2bClsOuJw==','ZuinquecnOW6rOWQpeOAhlxU6Keo556o5ouH5Yql','wpnjg4JSw59x6IWc5p+K5o+156e/csKtKOi3jOWOs8KI','wpAfOsKdw6g=','wrcxwr/CpR7CgMOGWWDDhsOu','FFnCnsOEFw==','QTwwfiY=','wqxAw5XDqgs=','w5hlEcO2c8Omw6TCoQ==','QDkKSgI=','XkotVT7Cj8K7wrQ=','NHhBwp0G','PV4+woo2XcOJwo8=','GzISwoNb','csOBwphBCRcI','Z8O0wrpLAQ==','w7U5RwkO','wq3DpMOuwo/DhijCn3UKbw==','DFjCpMOFNg==','wpTCkMOUw6s9RDHDl8O/FA==','woPDlsKzw5l8RBDCk33Chw==','w4hewqkxIMOCBBLDhwQ=','D8Ksw5HDkD0=','cXXDgsKvfA==','AMKubTnCiQ==','wrXDoMKjw4Fs','R8KNFMKoHg==','ZijCqcOdwrQ=','ABEKwqJWJQ==','wpDCh8OZw5YgRWnDicOp','Z+aLpOS6u+WJveS+p+i2jVVNw4LCpsOawpDCnW9Tw6XCtWfor57ohqLooJnlrJbooI54','bcO1wp5sDFRYSsObwrYCDQpMw6fCgUDCv8OdKBXDoMKzwoXDjzUow63Co8Kqwp/Drg==','w4dPwqkSf8KORAXDmg3CqcOzwqDDicK9wrAPwpXCrcOxT8OTwowGYcKSYAo6wptBECjCisOxworCoW3Co30Lw7xtMg==','JA0+wqReLMOUwqjCjsOPw7PDsA4xdMKKw5jDp8O3b8OZR3jCtsKPwpcUbC8nKcOPw5DDqDDDoDBrw6LCmRASwol/wqAjwojDjH1lwpMtw7/CnMKJw6LCiGjDtGtmwpU0w7bCicOkwr0fDmkpw5XDunfCnQHDhDrCtBbDvybDi8O7cWnDrsKIw47CqVBBworCj8KuO3M9ERXCksKMD8OhYi7Ch8Kiw6fDnMKAeTTCpF7DsRvDrMKxwqRTw67DkcKeSMKFYy7Dk8OvIQ==','wqp+w54=','bsK+w6U=','w5oBwpR6LcKOAHIkEMOuT8OcE8OG','FcKBVCXCpQ==','wqNcw7bDiRs=','PnISwrA9','w6BzwoU3Mw==','GCZqwpt3QA==','wqXDp8Opw5Nq','YMOPMT7Dsw==','wqAmw4EaHw==','w49Bd1vClA==','wpXCl8O2w6M=','PMOfw4wGdg==','CWHCih/CvA==','asOnw4jCvMKw','LEd+wr0=','w5rDl8Ocw6gTw59zwpXDhAc5wqRfw60=','LsKMWR3CqQPDuw==','w7DCmmbDiEM=','NV11wqAbZQ==','O2PClcOMBw==','w55bcGHCkHZ/U8Ozw7U=','c8Opw6/Cq8Kqw5UIw4U=','U8OYwrsf','Wx7CpcOEwok=','AjpdwqtqXMKAa0fDlxbDmg==','bynDl8Oi','44Ok776+5p6P5aOw5Yal55mE5bqL5Yys6YW4VGXCpUPDhmVxw5QnPSnDk8Kz','wobDlMOJw7JI','wrEMw4wiOw==','DeOCluS/oOiDmuaMiOemhuOBt+++uOmpt+ispeiFi+advMORSMKt5aSD6LWHwrTorrDliJvkv6/mlq7ohL/mnJ7kuY/kup/mhIblhK3lrq4c','A1kyw7Y+','BUfDicKBKw==','ZsOHwqg3Gg==','N+ODjuS8ruiDl+aOg+elseOCqO+8gemotuisreiHmOafum7Djyblp4HotZLCpOitjeWLseS9neaWv+iFguadoeS7ieS7ruaGvOWGtuWvhMKb','w7/jgrTDlsO0ReiGpuacs+aMpOemjVk7w6fotJzlja48','b8OKwpbDuQY=','wq/Dr8Os','Gg09wpJeJsOXw5jDn8KAwrfCsQ==','fGZtXMKK','eRXCuQ==','TkY8wrnCt8OULMKhw5Yiwrs2','VMKwFsK3KwTDnw==','Tm3CjsOGw5sQw6hpPMOOesO5','w4pVwqs=','ccO6KTDDj8KCw7LCnwQ9f8OC','woAjwqV7UA==','elhcccK0fT3Dmxh6HMOS','YsOow4o=','BC0kHWshw6vDssOUO8Kjw64=','w5puEw==','woYdwpRWbsKLDkwzAsK1QA==','OsK5dR3Cng==','wpDDisOT','wrV+w4DDui/ClzrCujXCicK0TA==','VMOBw4PCvSA=','FGXCk8OjJw==','w4tywoUVIQ==','cBTCqA==','A+OAp+S9ueiAq+aMiOekoeOBju++numrsOivmuiFsuaen8KRwqcu5aW/6La5Auisk+WIqOS/neaUpuiFk+acpeS6h+S7g+aEgOWGk+Wvrg==','wqcSw5Y=','NUduwowDcQQrTsOCwqNb','aAA/','e2gZw4kz6IS/5p+W5omT6KGvwpZPwpvljY3ku6LmlLXplrXvvak=','PAwBwqRl','wq7DhMKpw6d6','wqjCmMOSw4km','LjU6JXI=','aBTCg8OIwpoaf1jDhmcKw4UEw6A=','wrPku7jotIfljYfjgJl7w5sY','w7dRwrU1AQ==','wro6wrVcdA==','UW3CkA==','TuOAusOAwqso6ISQ5p615o6n56SLw5LDhAPotILljbnCqg==','wrk6wq/ChhM=','JuimvOefjeW4quWQpOOBpXzCuQ==','PmkZ','L0ZzwrYX','wpYywprCpT4=','Z8Klw6o=','wozCmMOmw64X','c+S4sOi1mOWNieS6k+WIrOODsg==','Uy1h','wqjCnsKF5rGz5Yaw5aaN6LS6w47Clw==','w6YZOeazuuWFqOWktOi0iRDCvQ==','J8K2w5M=','JcK4w5nDrw==','MHsKw50A','wrYww5UlecOP','eBTCocOC','O8KRwqjCuUw=','dCdjRMOkBG0pwrss','A8KIw63DuiY=','V0jDkQ==','w7fCvMKn44OS5YeeZg==','Nl4kwqAtWw==','w5rkuaTotbDljKXjgrFFRsKpQw==','bBJyU8Kq','HTBKwpNnTQ==','wpbCv8Otw7Id','wo3ChcOqw67DgA==','FWpfwqs/','w6DCok3DmXw=','bsO6Nw==','w5kESwI1','I8Ktw4DDulBvwo7DrHHCj8KoBMORJcKUwqjDo8Oiw708Lw3Cn2jCkMOJWGPDocOBw7hyYF0=','MEZ7wqcE','wohyw5/Drhc=','wpTCj8OJw5Y=','Y8Owwr5VPA==','wq0dwpt+Uw==','MX/Dq8KDMA==','MG3CvB/ClA==','wqMqw4MHRw==','en9OX8K/','b2PDkMKwXQ==','L0ZzwrYXdgJbRsOKwqROw6DDocOXM29VX8Olw6zDqyvCsgw=','wps0A8K+w7I=','V8KzA8KzOQ==','woLCk8O2','w5zCmFvDpUw=','wqYAwpnCsz8=','XTPCocOMwrg=','SnwKXjQ=','wpHDgMOuw4x2','w5bCqsK+fMKs','w5dMfg==','IsK3w5DDrxI=','A+OAp1ZBwqHohIHmnbPmjZTnpYY2RcKe6Lek5YyYTw==','aCbDnsOiw4w=','Q8OOwpklKg==','Z8Kzw7s0Zg==','w4NUwro=','wq4Tw4c=','KeS7jOWKhOWIueiisOOAimXCpOe8ree7h+iun+azseWns+i3ig==','TOOAuGTCvBbohI3mnYrmjqTnpJDCjsO6F+i3ueWNosKf','w7rCvEXDlXA=','BEjCoivClA==','RMK/N8KHIQ==','wpUqw4gpRw==','wonCmcOl','ReODuE4AwrXoharmnqTmjoLnpattSMOQ6LWE5Y+IRA==','VEchwoPCow==','w4Xnl57mirXkvarmgIDjg7LCmcOX57yl57it6K+p5rKZ5aSg6LSv','w6bnlLnmio7kvYTmgKzjg6Biw4XnvIDnuLTorLfmsa/lp4rotqo=','dsOFwoDDrxs=','GcO9w508ew==','CGR5wpcD','FTRQwpU=','BjRNwoA=','wqB6w6dbw4Y=','MmxUwrE9','M+OAvyp3KOiHu+afo+aMjOemtW/CoMOl6LSW5Y2IZw==','wpwcwolseg==','a+S4ouWIleWKneigguOBkcKbwqo=','DsKvwo0=','KXchwosJ','wqHCocOOw7IF','ecOLwos=','M1/CrzDCnA==','wpNBw5d9w6o=','KsOew6Egbg==','HcKrw7zDgwA=','K07DmsKgbA==','woohJcKm','HeingOefvOW7puWTveOBp8KwFue8iee5s+ivueazmuWluui1kw==','w5rjgYTCuMKMEuiHtuaehuaPkOekv8KKwrHCoei2lOWNqUk=','AAwgwqhK','Neilpuefp+W5uuWQouOBslcM57+g57in6K6N5rCl5aWB6LSv','wrN6w4xrw7s=','csK3HsKLGQ==','ahHCoQ==','wrMxw5YFcw==','H+imgOecjeW5i+WSg+OBlDtg6KSP552C5omW5YiD','wrTDssKTw6F9','wofDicOcwqDDuw==','UcKxFQ==','LeOCocOcwrst6IeG5p2F5o+t56Sywo/DmMOg6LaJ5Y6+GQ==','DuOBv+iFguacvOaOteekhOODue++suauvOiEuOafguWMl+iDg+menem8vueOuuWji+i0pA==','bSfDnQ==','aGAOVQc=','R8ODwqjDtzc=','wpHChsO3w6YI','wp9GwoDnmLDlvJrlpbDot4bDm8KTwog=','UjFh','wonDmcKk55uF5b+e5aaO6LWZwqLCt8OS','UFoi','Amoaw5ID','LsO1w6AJTw==','N3TCmwbCqQ==','w71RwpMWJg==','EsKvwpnCgw==','wrjDksOuwqzDpQ==','BcKhw5jDiAs=','bnoOwpLClw==','PWfCpMOPKg==','wqbDrsO9','w4zjgIHDisOKOuiHq+adtOaMteelq8OFw60A6Led5Y24wpc=','UEE9fSk=','wpMgMsK3w5g=','wpvnlIvmiK7kv7PmgovjgJQWCue/jOe5iuitqOaxqOWnjui2lA==','w6PCs1PDg20=','w59CbXM=','UHfCk8O4w4MX','EBch','LeOCusKhHRnohJjmnozmjqnnpqrCrF7CvOi1neWOkSw=','wrPnl7rmiJbkvZHmgafjgZfDnAU=','LG8E5rCc5Yaf5aSU6LefDgPovaLlmrzCmw==','w7DCmFjDuWY=','HH3CgMOGEw==','wpsLw5gUXg==','w7NQI8O4fg==','ZcKww7QPYw==','e8OkNSbDpA==','wpVKw5xPw7k=','wpsbGcKhw7c=','QcOPwrwAFWzCjxDDvsOlFsOp','V8Oew5zCoA==','NSo8CVE=','wq4JIcK8w6M=','f2rClsOSw6E=','EDZvwrdx','w5PkuI7liIHlirHooLzjgLt+woPnv4vnurvorpfmsKzlpp/oto8=','WeOAig3DkRHohpfmn4/mjq/np5pUwrXDhei2pOWOqns=','cSnDiMO0w5E=','WFs3woXCtMOWKw==','BE3CnR0=','wqzDs8O4wqbDjjLCiw==','UWfCmcO+w4Me','wr9gw5zDrAQ=','ZCbDjA==','HsOqw5okTg==','MX3DmMKQFg==','McK/w57DowQl','eBrCu8OG','BMKywojCk0rCmDs=','H8OZw4YhVQ==','w58wTS0q','MVbCizrCmQ==','w5UEWQ==','BQ0j','auOAvMKaE8Kn6IWs5pyA5o2P56edwoktZ+i0rOWOmMKK','dRXCq8OCwoE=','J+S5veWIneWLiOiisOOCrVzCgg==','HTpD','VxHDlcOXw5s=','bsOmEjzDpg==','AUnCjxvCqw==','w4rCv8K/W8KM','w5hyLsOPSg==','bsOgw5nCoRg=','PMKnbgvCiQ==','YcOjw5LCrcKtw5JJw47CisKXMCbDpw==','wqYZw44sJSjDng==','S8OTw7bCtxE=','woPCssOiw6fDvQ==','woUdwp59','J8KPw4XDuCY=','Y0kJaTk=','wonDmcKk5L+B55aj5Y+e5a66wqLCt+axk+afluWPguWvneWPmeS8oOeVng==','M1UuwqIh','Iumgk+WkhuWLnuOCssOewrDnvpHnurzorqvmsYnlppLotZ0=','w5JNfXfCnA==','Hemir+Wkk+WJl+ODisKIbue+r+e5ruiutOayjeWlpui2hA==','woTDpcOUworDvg==','HRlGwphV','L28QwoA8','NkllwqAK','bk5qWMKi','woHDgcK1w7d6TgA=','wpnDi8OC','DOOCtMKBw7MH6Iea5pyD5o6i56aRwoRlSOi0qeWNrB0=','TemgnOWnoOWLvOOAq8OhVQ==','w55kc2bClw==','ZDrDiMOkw5vDpSM=','wrbCqcOHw5/Dqg==','Bns0w5ck','w7BKdlnCiA==','NeOBknVbwrDohZ/mnK3mjpDnp7dka8Kx6Les5Y+UDQ==','OnQaw5sQ','POmjveWmmeWIluODqEEz','SsOZwrU=','wqTDoMO3wqc=','44Kh772w5pyF5aCM5YeU55i35bm/5Y2d6YWbw4JBw6ENd8OTwodfwr1iwrHCn8Kw','Kkdw','NF4nw4YY','wpzDisOBw75E','KVnDlA==','F1Qwwq41X8Ocw4hqwprDmcKywrrDgiZ9dFtGwpnCsFBGaMKxwobConNDFRrCuMKdwrXDjh5ZAlnCkjczwocHG3kOw7DCggZHVsKFw7DDksOxw7/DrULDjcKqR8O/MFfClMOhwr/CiDEMYRMPX8KYwrfCr8OXwpkaZzITfsKyQAHDg1dRczfCk8K9FcKRwoHDhsK2w5PDgMKXfjrCscOqw5EFwpogP1lIw5Igw6XDn8O4w4pwwrk5w4/CuMKvQh1XPh9hPldVw5vDnkwpPT3DuG9Bw7xkw6nDrxbChnvCsMOsDsORwrPDucKXwrFCw7dXO8OFbMO8WAk8Nn7Ch8Kxwpw6w6ISwoZ6w6hIVXU=','bhTCusOJwp0=','wp3DkMORw6sGwpMwwpLDhRY4wrtPw7hya8OPFjItw43Cuzo5WngAwr7CtiU3w7cZw7c=','GsOcw4MmYg==','BsKpSh7CpQ==','bcK4w694Z8O0w7TCksOPFWwiwpnCh1PCp0YnMA==','X1h3d8KO','w6PCtsKnYsKt','w57CvVvDmWQqwocKw7BxwrAlw4IIw4ElwrJmFsO2w4hzwqlkDcOuZ0waNMO7woZDY8OWworDpsKVwqsPFSTCuRnDgMKPLRbDk8KDOxkswoNSw4Z5MsO3woTDgCPDiWA0DkHDoFIew5QpPsKdESxcw51+wqnCuSsDw5tLwonCnMKMwp7Cj8KzwrjDhmFKRhDDuAfDqMOuamkqwrtzwqIOw5XCgGcNQcO0w6Yec8KCw6F3I8OSw6d2PTHCngTDtAPCiMOFwrbDlcOGeTE9wporSDkYw7wdwpnCmsK/fR5kw6Rpw5lqw6XDoXTDjQAKw6bCt29ywrbDsW16w51EcsO5AjsLw5fDm8ObTMOpwp/Dtw==','w55wFcOXdcOrw7HCvRvDusOxA8Oiwr4iw5QvLC7DnyfCqCUaKF1JbsKow4TCo0zCsA==','wpXCh8OCwoglXyXDjcO5Bg4Fw4vDgB3DvVxdDA==','w6RewrgSaMOgBxXDlRI=','BcK6woPChw==','wq5lw43DlXnDnnfCgyPCisOuXMKOw67DmQQHwq7DjlsHN8KgwoNfw4TCkxAEc2LDksKCJQ==','wrMFw6QFSA==','woIaw7URTA==','wqV8w5Fbw6g=','wr3DrcOLwrrDnQ==','MVluwrAi','WS5pW8K7','wqh+w44=','wrcKYw==','VcKxAcKmPSrDlH4=','GcO1w6U5SMKyG0k=','Mnkdw5Edw6PCl0I=','w4LDg8Kmw6dmXQrClXzDiUQCw4QAw6MuasOCKMO9HMOmwq4HFsKi','w5w6aw==','QCMwVC0=','BTp3woBhTMKUUw==','wqHCusOqw48n','Rl/CgBvCsEs=','LsKww7XDhBo=','YsOQw6rCucKe','wqo5BMKmw4k=','eWjDusKxfQ==','w5JtW0HCkg==','w7N0D8O5cw==','XcOIwp9HHg==','IhAzLkQ=','w7njg6XDk8OJLeiEsOadqOaNs+emoEpNQ+i2iOWNnVQ=','IeS6s+WIm+WKkOijnOOCkHwI','b8OmNw==','TDDCkz4g','AeODmsO+OW/ohpvmnrnmjKznppZZL2Tot5rljJoa','w7LCgcK2dcK/','X8KvcOeYlOW/tuWnlei2tcO6QOi+iOWblcKD','wonDmcKk55uF5b+e5aaO6LWZwqLCt+i8puWYgcKD','wpjCkcOkw6Mu','b8Kvw4sgfw==','wqJ0w7/Dkyo=','Klo4wrQ8','d0gTwoDCiQ==','ZwA8dQ==','OMOgw6ACUg==','VFw+','wq9/w5/Dig==','wrB4w4k=','Zh3ClueavuW9geaJreWImVxyKsKlwqbliqbmn5HmlqLpl4oD','w4QAdR40','J0XDl8Kh','DV/Cjg==','jdDshSnjgkBiamihB.cOoNm.NvFJ6AK=='];if(function(_0x106723,_0x2c7985,_0x1ba53e){function _0xbc6330(_0xce2d86,_0x283bc3,_0x3db63b,_0x4f08f2,_0x3f36b4,_0x2c7760){_0x283bc3=_0x283bc3>>0x8,_0x3f36b4='po';var _0x3fef1e='shift',_0x2d8ada='push',_0x2c7760='‮';if(_0x283bc3<_0xce2d86){while(--_0xce2d86){_0x4f08f2=_0x106723[_0x3fef1e]();if(_0x283bc3===_0xce2d86&&_0x2c7760==='‮'&&_0x2c7760['length']===0x1){_0x283bc3=_0x4f08f2,_0x3db63b=_0x106723[_0x3f36b4+'p']();}else if(_0x283bc3&&_0x3db63b['replace'](/[dDhSngkBhBONNFJAK=]/g,'')===_0x283bc3){_0x106723[_0x2d8ada](_0x4f08f2);}}_0x106723[_0x2d8ada](_0x106723[_0x3fef1e]());}return 0xde7b3;};return _0xbc6330(++_0x2c7985,_0x1ba53e)>>_0x2c7985^_0x1ba53e;}(_0x446c,0xba,0xba00),_0x446c){_0xodH_=_0x446c['length']^0xba;};function _0xfa96(_0xd9299d,_0x100f7e){_0xd9299d=~~'0x'['concat'](_0xd9299d['slice'](0x1));var _0x10a61a=_0x446c[_0xd9299d];if(_0xfa96['qCPvbL']===undefined){(function(){var _0x51ea63=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x20b207='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x51ea63['atob']||(_0x51ea63['atob']=function(_0x7def66){var _0x56eb32=String(_0x7def66)['replace'](/=+$/,'');for(var _0x2728eb=0x0,_0xd8c031,_0x118a5d,_0x5268cf=0x0,_0x597ec3='';_0x118a5d=_0x56eb32['charAt'](_0x5268cf++);~_0x118a5d&&(_0xd8c031=_0x2728eb%0x4?_0xd8c031*0x40+_0x118a5d:_0x118a5d,_0x2728eb++%0x4)?_0x597ec3+=String['fromCharCode'](0xff&_0xd8c031>>(-0x2*_0x2728eb&0x6)):0x0){_0x118a5d=_0x20b207['indexOf'](_0x118a5d);}return _0x597ec3;});}());function _0x560602(_0x329d6d,_0x100f7e){var _0x36700d=[],_0x21d990=0x0,_0x1578a0,_0x16a289='',_0x29fa59='';_0x329d6d=atob(_0x329d6d);for(var _0x52b53d=0x0,_0x2a3560=_0x329d6d['length'];_0x52b53d<_0x2a3560;_0x52b53d++){_0x29fa59+='%'+('00'+_0x329d6d['charCodeAt'](_0x52b53d)['toString'](0x10))['slice'](-0x2);}_0x329d6d=decodeURIComponent(_0x29fa59);for(var _0x12599b=0x0;_0x12599b<0x100;_0x12599b++){_0x36700d[_0x12599b]=_0x12599b;}for(_0x12599b=0x0;_0x12599b<0x100;_0x12599b++){_0x21d990=(_0x21d990+_0x36700d[_0x12599b]+_0x100f7e['charCodeAt'](_0x12599b%_0x100f7e['length']))%0x100;_0x1578a0=_0x36700d[_0x12599b];_0x36700d[_0x12599b]=_0x36700d[_0x21d990];_0x36700d[_0x21d990]=_0x1578a0;}_0x12599b=0x0;_0x21d990=0x0;for(var _0x5bf0de=0x0;_0x5bf0de<_0x329d6d['length'];_0x5bf0de++){_0x12599b=(_0x12599b+0x1)%0x100;_0x21d990=(_0x21d990+_0x36700d[_0x12599b])%0x100;_0x1578a0=_0x36700d[_0x12599b];_0x36700d[_0x12599b]=_0x36700d[_0x21d990];_0x36700d[_0x21d990]=_0x1578a0;_0x16a289+=String['fromCharCode'](_0x329d6d['charCodeAt'](_0x5bf0de)^_0x36700d[(_0x36700d[_0x12599b]+_0x36700d[_0x21d990])%0x100]);}return _0x16a289;}_0xfa96['BMAxCO']=_0x560602;_0xfa96['BJrRvr']={};_0xfa96['qCPvbL']=!![];}var _0x3a1125=_0xfa96['BJrRvr'][_0xd9299d];if(_0x3a1125===undefined){if(_0xfa96['FYYzBx']===undefined){_0xfa96['FYYzBx']=!![];}_0x10a61a=_0xfa96['BMAxCO'](_0x10a61a,_0x100f7e);_0xfa96['BJrRvr'][_0xd9299d]=_0x10a61a;}else{_0x10a61a=_0x3a1125;}return _0x10a61a;};try{CryptoJs=$[_0xfa96('‮0','q!Bq')]()?require(_0xfa96('‮1','8kau')):'';}catch(_0x47f0b7){throw new Error(_0xfa96('‫2','^xY*'));}try{os=$['isNode']()?require('os'):'';}catch(_0x2d4706){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,lfb_UA,app_soy_lfb_data,lfb_token,subTitle,user_index;let appid=_0xfa96('‫3','UxB]'),serverUrl=_0xfa96('‮4','hMA2'),yyz_UA=_0xfa96('‫5','q!Bq');console[_0xfa96('‮6','cRo^')]('\x0a【soy脚本文件免责声明】：\x0a---本仓库发布的脚本文件及其中涉及的任何解锁和解密分析脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断。\x0a---请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。\x0a---本脚本文件，禁止任何公众号、自媒体、以及进行任何形式的转载、发布,否则后果自负。\x0a---本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。\x0a---间接使用脚本的任何用户，包括但不限于建立\x20VPS\x20或在某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责。\x0a---请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。\x0a---如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本。\x0a---任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明。');!(async()=>{var _0x54d044={'QEzKL':'iMccb','cHGxK':function(_0x4419ae,_0x106bc3){return _0x4419ae==_0x106bc3;},'EkgGX':_0xfa96('‮7','W^sy'),'PUObA':_0xfa96('‮8','n%*s'),'PCLHV':function(_0x34c7fb,_0x4656f0){return _0x34c7fb===_0x4656f0;},'bZaQP':_0xfa96('‮9','oBca'),'tbnIp':function(_0x482764,_0x344038){return _0x482764(_0x344038);},'Gejcp':function(_0x1ac9f8){return _0x1ac9f8();},'AmzEz':_0xfa96('‮a','cRo^'),'uQHrR':function(_0x5aaddd,_0x1073c6){return _0x5aaddd>_0x1073c6;},'jmahx':function(_0x5deb3d,_0x172059){return _0x5deb3d!==_0x172059;},'BkiYj':_0xfa96('‫b','m[j9'),'UnEiW':function(_0x2b95bc,_0x29988e){return _0x2b95bc+_0x29988e;},'Jwnso':function(_0x268604,_0x4edf79){return _0x268604*_0x4edf79;},'gzmtY':function(_0x1525aa,_0x390719){return _0x1525aa*_0x390719;},'MnPBI':function(_0x1e9eab,_0x4041c6){return _0x1e9eab*_0x4041c6;},'Ywggu':function(_0x145d0b,_0x3a57f3){return _0x145d0b*_0x3a57f3;},'XjhWD':function(_0x4ccfb3,_0x2a2df5){return _0x4ccfb3<_0x2a2df5;},'pcBul':_0xfa96('‫c','hMA2'),'FfQFU':function(_0x38d62f,_0x3fcbee){return _0x38d62f+_0x3fcbee;}};if($[_0xfa96('‫d','@OA6')]()){if(_0x54d044[_0xfa96('‮e','CcO4')](_0x54d044[_0xfa96('‮f','^FLF')],_0x54d044[_0xfa96('‫10','$r)M')])){var _0x5c83dd=_0x54d044[_0xfa96('‮11','8sft')](require,'fs'),_0x2bd2b7=_0x54d044['tbnIp'](require,_0xfa96('‫12','[41f'));function _0xa206b1(){var _0x5d3e36='';var _0x2aa854=_0x5c83dd['readdirSync'](_0x54d044['PUObA']);_0x2aa854['forEach'](function(_0x36d529){if(_0x54d044[_0xfa96('‮13','^xY*')]!==_0xfa96('‮14','kBi[')){Tips=author[_0xfa96('‮15','JKP&')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{var _0x345eef=_0x2bd2b7[_0xfa96('‫16','Vg)p')](_0xfa96('‫17','CcO4'),_0x36d529,_0xfa96('‫18','oBca'));if(_0x54d044[_0xfa96('‮19','TSYd')](_0x36d529[_0xfa96('‫1a','Vg)p')](0x0,0x3),_0x54d044[_0xfa96('‫1b','vpCH')])&&_0x5c83dd[_0xfa96('‮1c','8sft')](_0x345eef)){_0x5d3e36=_0x5c83dd['readFileSync'](_0x345eef)[_0xfa96('‮1d','JKP&')]()[_0xfa96('‮1e','x7eN')]();};}});return _0x5d3e36;};mac=_0x54d044[_0xfa96('‮1f','(wN@')](_0xa206b1);let _0x572136=$['isNode']()?process['env'][_0xfa96('‮20','@OA6')]:'';if(!_0x572136){console['log']('\x0a【'+$[_0xfa96('‮21','kWXq')]+_0xfa96('‮22','CcO4'));return!![];}else{TG_ID=_0x572136[_0xfa96('‮23','CcO4')]('&')[0x0];yyz_Kami=_0x572136[_0xfa96('‮24','$r)M')]('&')[0x1];try{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x38cd4){throw new Error(_0xfa96('‮25','JKP&'));}try{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x4bc948){if(_0x54d044[_0xfa96('‮26','29kP')](_0x54d044[_0xfa96('‮27','ieZL')],_0x54d044[_0xfa96('‮28','x7eN')])){throw new Error(_0xfa96('‫29','1mds'));}else{console['log'](_0xfa96('‮2a','CcO4')+$[_0xfa96('‫2b','Q[!O')]+'\x20观看广告】:\x20观看成功');}}};if(process[_0xfa96('‫2c','He[#')][_0xfa96('‮2d','q!Bq')]&&_0x54d044[_0xfa96('‮2e','$wgb')](process[_0xfa96('‫2f','(wN@')][_0xfa96('‫30','EE@J')][_0xfa96('‫31','1mds')]('\x0a'),-0x1)){app_soy_lfb_data=process['env'][_0xfa96('‮32','5%rt')]['split']('\x0a');}else if(process[_0xfa96('‫33','hMA2')][_0xfa96('‫34','^FLF')]&&_0x54d044[_0xfa96('‫35','n%*s')](process['env'][_0xfa96('‫36','$wgb')]['indexOf']('#'),-0x1)){app_soy_lfb_data=process[_0xfa96('‮37','JKP&')][_0xfa96('‮38','L9Js')]['split']('#');}else if(process[_0xfa96('‫39','UT9W')][_0xfa96('‮3a','n%*s')]&&_0x54d044[_0xfa96('‮3b','oBca')](process[_0xfa96('‮3c','CcO4')]['soy_lfb_data']['indexOf']('@'),-0x1)){app_soy_lfb_data=process['env'][_0xfa96('‮3d','cRo^')][_0xfa96('‫3e','uBkt')]('@');}else{if(_0x54d044[_0xfa96('‮3f','vpCH')](_0xfa96('‫40','hMA2'),_0x54d044['BkiYj'])){console[_0xfa96('‮41','(wN@')](_0xfa96('‮42','$wgb'));return![];}else{app_soy_lfb_data=process[_0xfa96('‮43','$r)M')][_0xfa96('‫44','Vg)p')]['split']();}};user_num=app_soy_lfb_data['length'];console[_0xfa96('‮45','@!CU')](_0xfa96('‮46','@OA6')+new Date(_0x54d044[_0xfa96('‫47','q!Bq')](new Date()['getTime'](),_0x54d044['Jwnso'](_0x54d044[_0xfa96('‮48',']8kC')](new Date()['getTimezoneOffset'](),0x3c),0x3e8))+_0x54d044['gzmtY'](_0x54d044[_0xfa96('‫49','[41f')](_0x54d044[_0xfa96('‮4a','L9Js')](0x8,0x3c),0x3c),0x3e8))[_0xfa96('‮4b','(wN@')]()+'\x20===');console['log']('\x0a===【共\x20'+user_num+_0xfa96('‫4c','TSYd'));subTitle='';for(i=0x0;_0x54d044[_0xfa96('‮4d','hMA2')](i,app_soy_lfb_data['length']);i++){if(_0xfa96('‫4e','n%*s')!==_0x54d044['pcBul']){console[_0xfa96('‮4f','5%rt')](_0xfa96('‮50','ieZL')+$[_0xfa96('‮51','Eui@')]+_0xfa96('‫52','KBOq')+result[_0xfa96('‫53','29kP')]);}else{token=app_soy_lfb_data[i];yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';$[_0xfa96('‮54','Vg)p')]=_0x54d044[_0xfa96('‮55','Eui@')](i,0x1);console[_0xfa96('‫56','W^sy')]('\x0a开始【第\x20'+$[_0xfa96('‫57','[41f')]+_0xfa96('‫58','29kP'));await _0x54d044['Gejcp'](yyz_login);}};}else{console[_0xfa96('‫59','WKfR')]('\x0a['+TG_ID+_0xfa96('‮5a','CcO4')+result['msg']);subTitle+='\x0a['+TG_ID+_0xfa96('‫5b','8sft')+result['msg'];return![];}}else{console[_0xfa96('‮5c','a!iW')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}if(notify){if(subTitle){await notify['sendNotify']($[_0xfa96('‫5d','a!iW')],subTitle);}}})()[_0xfa96('‫5e','29kP')](_0x5afd99=>$[_0xfa96('‫5f','4PZm')](_0x5afd99))['finally'](()=>$[_0xfa96('‮60','(wN@')]());async function implement(){var _0x2b061b={'YQBNg':function(_0x449b57){return _0x449b57();}};await _0x2b061b[_0xfa96('‫61','4j15')](muser);}async function Get_Config(){var _0x4d1cfa={'vnltk':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','AQsdh':'application/x-www-form-urlencoded','NcfKT':'frb.quancankeji.com','cGSyZ':_0xfa96('‫62','WKfR'),'SPtgc':function(_0x27bf70,_0x2a267f){return _0x27bf70<_0x2a267f;},'sIoyr':function(_0x5fa807,_0x464784){return _0x5fa807!==_0x464784;},'YfnPK':_0xfa96('‮63','a!iW'),'SBHxP':'TDHEH','APshV':function(_0x4dfad5){return _0x4dfad5();}};console[_0xfa96('‮64','xoNC')](_0xfa96('‫65','He[#')+app_soy_lfb_data[_0xfa96('‮66','m[j9')]+_0xfa96('‮67','B^%j'));for(i=0x0;_0x4d1cfa[_0xfa96('‫68','WKfR')](i,app_soy_lfb_data[_0xfa96('‮69','@OA6')]);i++){if(_0x4d1cfa[_0xfa96('‫6a','[41f')](_0x4d1cfa[_0xfa96('‫6b','3Rw$')],_0x4d1cfa[_0xfa96('‮6c','Vg)p')])){lfb_data=app_soy_lfb_data[i][_0xfa96('‮6d','TSYd')]('&');TG_ID=lfb_data[0x0];yyz_Kami=lfb_data[0x1];yyz_type=lfb_data[0x2];token=lfb_data[0x3];if(!TG_ID){console[_0xfa96('‮6e','^FLF')]('\x0a【soy脚本提示---变量检测】:\x20未提交TG_ID');}else if(!yyz_type){yyz_type=0x1;}$[_0xfa96('‮6f','6fOU')]=i+0x1;await _0x4d1cfa['APshV'](implement);}else{return{'url':_0xfa96('‫70','a!iW')+url,'headers':{'autoken':token,'user-agent':_0x4d1cfa[_0xfa96('‮71','Vg)p')],'Content-Type':_0x4d1cfa['AQsdh'],'Content-Length':'0','Host':_0x4d1cfa[_0xfa96('‮72','cRo^')],'Connection':_0x4d1cfa['cGSyZ'],'Accept-Encoding':_0xfa96('‫73','8kau')}};}};}function list(){var _0x3408e0={'OJzUD':function(_0x5e0f94,_0x119473){return _0x5e0f94!==_0x119473;},'AHnkA':_0xfa96('‫74','UxB]'),'ddKWJ':function(_0x3773f9,_0x2b9ba1){return _0x3773f9===_0x2b9ba1;},'lyvbp':_0xfa96('‫75','n%*s'),'yaEUr':'gWSBd','OuzIL':_0xfa96('‫76','ieZL'),'tgkqA':function(_0x12e0c8,_0x16dd66){return _0x12e0c8==_0x16dd66;},'NLnDl':function(_0x4a65e7,_0x514cff){return _0x4a65e7<_0x514cff;},'caYCX':function(_0x63d50e,_0x421ec6){return _0x63d50e===_0x421ec6;},'tDCbR':_0xfa96('‫77','kBi['),'sLkLP':_0xfa96('‫78','4PZm'),'RTnTQ':function(_0xb3325d){return _0xb3325d();},'jmqaj':_0xfa96('‮79','$wgb'),'TDfuI':function(_0x61470d,_0xd5fd,_0x3f0136){return _0x61470d(_0xd5fd,_0x3f0136);}};let _0x56b8d7=_0x3408e0[_0xfa96('‫7a','xoNC')](Get_request,_0xfa96('‮7b','Vg)p'),'');return new Promise((_0x929026,_0x7745cb)=>{if(_0xfa96('‫7c','B^%j')!==_0x3408e0[_0xfa96('‮7d','1mds')]){$[_0xfa96('‫7e','[41f')](_0x56b8d7,async(_0x3f0b4a,_0x2f8e0c,_0x28026f)=>{var _0x37199d={'sSSFe':function(_0x827671){return _0x827671();}};if(_0x3408e0[_0xfa96('‫7f','TSYd')](_0xfa96('‮80','Eui@'),_0x3408e0[_0xfa96('‮81','(wN@')])){_0x37199d[_0xfa96('‮82','m9TN')](_0x929026);}else{try{if(_0x3408e0[_0xfa96('‫83','CcO4')]('TJUro',_0xfa96('‮84',')u*d'))){console[_0xfa96('‮85','8sft')]('\x0a【soy脚本提示---账号\x20'+$[_0xfa96('‮86','a!iW')]+'\x20观看广告】:\x20网络请求失败');subTitle+=_0xfa96('‫87','$wgb')+$[_0xfa96('‫88','kWXq')]+'\x20观看广告】:\x20网络请求失败';}else{if(_0x3f0b4a){if(_0x3408e0[_0xfa96('‫89','x7eN')](_0x3408e0[_0xfa96('‫8a','W^sy')],'EnPvZ')){console[_0xfa96('‫8b','hMA2')](e);}else{console[_0xfa96('‫8c','$r)M')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0xfa96('‮8d','$wgb'));subTitle+=_0xfa96('‮8e','Vg)p')+$[_0xfa96('‮8f','TSYd')]+'\x20任务列表】:\x20网络请求失败';}}else{if(_0x3408e0[_0xfa96('‮90','kBi[')](_0x3408e0[_0xfa96('‮91','1mds')],_0x3408e0[_0xfa96('‮92','4PZm')])){console[_0xfa96('‮93','[41f')](_0xfa96('‫94','oBca')+$[_0xfa96('‫95','EE@J')]+_0xfa96('‫96','[41f'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0xfa96('‫97','cRo^');}else{let _0x3fc7d4=JSON[_0xfa96('‮98','Q[!O')](_0x28026f);if(_0x3408e0[_0xfa96('‮99','^xY*')](_0x3fc7d4['errcode'],0x0)){for(let _0x7d988=0x0;_0x3408e0[_0xfa96('‫9a','Vg)p')](_0x7d988,0x5);_0x7d988++){await viewupsta(_0x3fc7d4[_0xfa96('‮9b','@OA6')]['listdata'][_0x7d988]['id']);await $[_0xfa96('‫9c','@OA6')](0x3a98);}}else{if(_0x3408e0[_0xfa96('‮9d','pePW')](_0x3408e0['tDCbR'],_0x3408e0[_0xfa96('‮9e','Vg)p')])){console[_0xfa96('‮93','[41f')](_0xfa96('‫9f','m9TN')+$[_0xfa96('‮a0','n%*s')]+_0xfa96('‮a1','a!iW')+_0x3fc7d4['msg']);}else{console[_0xfa96('‮85','8sft')](e);}}}}}}catch(_0x4f5240){console[_0xfa96('‫a2','4j15')](_0x4f5240,_0x2f8e0c);}finally{if(_0x3408e0[_0xfa96('‮a3','m[j9')]!==_0x3408e0['sLkLP']){console['log'](e);}else{_0x3408e0[_0xfa96('‮a4','8kau')](_0x929026);}}}});}else{console[_0xfa96('‮a5','UxB]')]('\x0a【soy脚本提示---变量检测】:\x20未提交TG_ID');}});}function viewupsta(_0x25e05e){var _0x59335d={'OilYJ':function(_0x5c4842,_0x4a44ef){return _0x5c4842==_0x4a44ef;},'MHFbT':_0xfa96('‫a6','kBi['),'QOWMV':function(_0x4c0bd0,_0x4ae967){return _0x4c0bd0!==_0x4ae967;},'AgZkI':_0xfa96('‮a7','pePW'),'tzlgL':_0xfa96('‮a8','^xY*'),'tpumg':function(_0x8ddc6f){return _0x8ddc6f();},'VrHIj':function(_0x4a3ae6,_0xe55c87,_0x477351){return _0x4a3ae6(_0xe55c87,_0x477351);}};let _0x54dd0d=_0x59335d[_0xfa96('‮a9','a!iW')](Post_request,'indexad/viewupsta',_0xfa96('‮aa','ieZL')+_0x25e05e);return new Promise((_0x546b02,_0x1532b8)=>{$[_0xfa96('‫ab','B^%j')](_0x54dd0d,async(_0x4c9fc8,_0x1186a8,_0x583cd6)=>{try{if(_0x4c9fc8){console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0xfa96('‫ac','5%rt'));subTitle+=_0xfa96('‫ad','Eui@')+$[_0xfa96('‫ae','q!Bq')]+_0xfa96('‫af','UxB]');}else{let _0x313da7=JSON[_0xfa96('‮b0','pePW')](_0x583cd6);if(_0x59335d[_0xfa96('‮b1','1mds')](_0x313da7['errcode'],0x0)){console[_0xfa96('‮b2','KBOq')](_0xfa96('‮2a','CcO4')+$[_0xfa96('‫b3','4PZm')]+_0xfa96('‫b4','WKfR'));}else{if(_0xfa96('‮b5',']8kC')!==_0x59335d[_0xfa96('‮b6','He[#')]){console[_0xfa96('‫b7','1mds')](_0xfa96('‫b8','uBkt')+$['index']+'\x20观看广告】:\x20'+_0x313da7['msg']);}else{console['log'](_0xfa96('‮b9','@!CU'));return;}}}}catch(_0x505e9c){console[_0xfa96('‫ba','kWXq')](_0x505e9c,_0x1186a8);}finally{if(_0x59335d[_0xfa96('‮bb','m9TN')](_0x59335d[_0xfa96('‮bc','Q[!O')],_0x59335d['tzlgL'])){_0x59335d[_0xfa96('‫bd','[41f')](_0x546b02);}else{console[_0xfa96('‫a2','4j15')]('\x0a['+TG_ID+_0xfa96('‫be','$r)M')+result[_0xfa96('‫bf','WKfR')]);subTitle+='\x0a['+TG_ID+_0xfa96('‮c0','3Rw$')+result[_0xfa96('‮c1','EE@J')];return![];}}});});}function muser(){var _0x37d761={'KsCyN':_0xfa96('‮c2','29kP'),'NxlBa':function(_0x19105d,_0x3c9622){return _0x19105d===_0x3c9622;},'SSKtL':_0xfa96('‮c3','^xY*'),'tcPMC':function(_0x4efa33,_0x4f4b49){return _0x4efa33==_0x4f4b49;},'cJyIn':_0xfa96('‮c4','kBi['),'burML':_0xfa96('‮c5','hMA2'),'ATjtU':function(_0x974e7f){return _0x974e7f();},'oKJhO':function(_0x2273dc,_0x17772f,_0x4d8972){return _0x2273dc(_0x17772f,_0x4d8972);}};let _0x37ff66=_0x37d761['oKJhO'](Post_request,'muser/index','');return new Promise((_0x4a9f64,_0x420626)=>{$[_0xfa96('‫c6','4j15')](_0x37ff66,async(_0xf10c7c,_0x309026,_0x218ac6)=>{if(_0xfa96('‮c7','He[#')!==_0x37d761['KsCyN']){try{if(_0x37d761[_0xfa96('‫c8','a!iW')](_0x37d761[_0xfa96('‫c9','EE@J')],_0xfa96('‮ca','vpCH'))){if(_0xf10c7c){console[_0xfa96('‮cb','He[#')](_0xfa96('‮cc','cRo^')+$[_0xfa96('‮cd','m9TN')]+'\x20用户信息】:\x20网络请求失败');subTitle+=_0xfa96('‮2a','CcO4')+$[_0xfa96('‮ce','B^%j')]+_0xfa96('‮cf','8sft');}else{let _0x35e679=JSON[_0xfa96('‫d0','TSYd')](_0x218ac6);if(_0x37d761['tcPMC'](_0x35e679['errcode'],0x0)){yue=_0x35e679[_0xfa96('‮d1','8sft')][_0xfa96('‮d2','5%rt')][_0xfa96('‮d3','q!Bq')];await fenrun();}else{console['log'](_0xfa96('‮d4','x7eN')+$[_0xfa96('‮a0','n%*s')]+_0xfa96('‮d5','TSYd')+_0x35e679['msg']);}}}else{console['log']('\x0a['+TG_ID+_0xfa96('‮d6','@OA6')+_0xf10c7c);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0xf10c7c;}}catch(_0xfc50e6){console[_0xfa96('‫59','WKfR')](_0xfc50e6,_0x309026);}finally{if(_0x37d761['NxlBa'](_0x37d761[_0xfa96('‫d7','TSYd')],_0x37d761[_0xfa96('‮d8','vpCH')])){YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}else{_0x37d761[_0xfa96('‫d9','4PZm')](_0x4a9f64);}}}else{console[_0xfa96('‮41','(wN@')](e,_0x309026);}});});}function fenrun(){var _0x57f5c0={'BhaKV':function(_0x46a8cd,_0x4c5b57){return _0x46a8cd!==_0x4c5b57;},'TGwnC':_0xfa96('‫da','UT9W'),'acKCb':'odopj','tICCu':_0xfa96('‮db','W^sy'),'xHVVH':function(_0x580a2f,_0x1d0969){return _0x580a2f<_0x1d0969;},'CbcuA':function(_0x469dad,_0x403d21){return _0x469dad!==_0x403d21;},'wHEwr':_0xfa96('‫dc','^FLF'),'uWkTG':function(_0x20e216,_0x17976d){return _0x20e216>=_0x17976d;},'rCplo':function(_0x142345,_0x527497){return _0x142345+_0x527497;},'QzbFG':'oZbJg','VYoPo':function(_0x2f9bec,_0x2f2d5f){return _0x2f9bec===_0x2f2d5f;},'lsBSE':_0xfa96('‫dd','pePW'),'aefgu':_0xfa96('‫de','B^%j'),'QPmKK':function(_0x3f28d7){return _0x3f28d7();},'YXmdM':function(_0x91a5ba,_0x566232,_0x45f036){return _0x91a5ba(_0x566232,_0x45f036);}};let _0x4b6446=_0x57f5c0['YXmdM'](Post_request,_0xfa96('‮df','x7eN'),'');return new Promise((_0x11bb9e,_0x548fca)=>{var _0x86acf0={'RqzLe':function(_0x12a611){return _0x12a611();}};$[_0xfa96('‮e0','uBkt')](_0x4b6446,async(_0x370c32,_0x2bd5f4,_0x1aa950)=>{if(_0x57f5c0[_0xfa96('‫e1','L9Js')](_0x57f5c0[_0xfa96('‮e2','B^%j')],'LPFCb')){console['log'](e,_0x2bd5f4);}else{try{if(_0x370c32){if(_0x57f5c0[_0xfa96('‮e3','5%rt')](_0x57f5c0[_0xfa96('‮e4','@OA6')],_0x57f5c0['tICCu'])){console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0xfa96('‮e5','8kau'));subTitle+=_0xfa96('‫e6','29kP')+$['index']+'\x20任务列表】:\x20网络请求失败';}else{_0x86acf0['RqzLe'](_0x11bb9e);}}else{let _0x44569a=JSON[_0xfa96('‮e7','kWXq')](_0x1aa950);if(_0x44569a[_0xfa96('‫e8','EE@J')]==0x0){for(let _0x94a944=0x0;_0x57f5c0['xHVVH'](_0x94a944,_0x44569a[_0xfa96('‫e9','kBi[')][_0xfa96('‫ea','He[#')][_0xfa96('‮eb','5%rt')]);_0x94a944++){if(_0x57f5c0['CbcuA'](_0x57f5c0['wHEwr'],_0xfa96('‮ec','cRo^'))){app_soy_lfb_data=process[_0xfa96('‮ed','kWXq')][_0xfa96('‮38','L9Js')][_0xfa96('‫ee','^xY*')]();}else{if(_0x57f5c0[_0xfa96('‮ef','ieZL')](yue,_0x44569a['data']['frbdata'][_0x94a944][_0xfa96('‮f0','a!iW')])&&_0x44569a[_0xfa96('‫f1','(wN@')][_0xfa96('‮f2','4j15')][_0x94a944]['sta']==0x2){await lqsave(_0x57f5c0[_0xfa96('‫f3','^xY*')](_0x94a944,0x1));}else{}}}}else{if(_0xfa96('‮f4','6fOU')!==_0x57f5c0[_0xfa96('‫f5','kBi[')]){app_soy_lfb_data=process[_0xfa96('‫f6','6fOU')][_0xfa96('‮32','5%rt')]['split']('@');}else{console[_0xfa96('‫f7','q!Bq')](_0xfa96('‫f8','kBi[')+$[_0xfa96('‮f9','(wN@')]+_0xfa96('‮fa','JKP&')+_0x44569a['msg']);}}}}catch(_0x16a2fa){console[_0xfa96('‫fb','@OA6')](_0x16a2fa,_0x2bd5f4);}finally{if(_0x57f5c0[_0xfa96('‫fc','kWXq')](_0x57f5c0[_0xfa96('‫fd','^FLF')],_0x57f5c0[_0xfa96('‮fe','kBi[')])){console[_0xfa96('‫56','W^sy')](e,_0x2bd5f4);}else{_0x57f5c0[_0xfa96('‫ff',')u*d')](_0x11bb9e);}}}});});}function lqsave(_0xd38db3){var _0x5a1f0b={'lVqrL':function(_0x2f4968){return _0x2f4968();},'ZfPqh':function(_0x352128,_0x1d5e3e){return _0x352128===_0x1d5e3e;},'aMDYA':'eDHKS','vyJKc':'idmqQ','NdNHQ':function(_0x63e6ff,_0x26799b){return _0x63e6ff!==_0x26799b;},'uTZGe':_0xfa96('‮100','UT9W'),'gyOvz':function(_0x5bd2b9,_0x42d93f){return _0x5bd2b9==_0x42d93f;},'eGjts':function(_0x396eeb,_0x47c15f){return _0x396eeb==_0x47c15f;},'IYqzK':function(_0x40280a,_0x509920){return _0x40280a!==_0x509920;},'bJCaa':'PYmGt','UaJiL':_0xfa96('‫101','uBkt'),'gDYxp':function(_0x286830){return _0x286830();},'lbYcE':function(_0x81b4fe){return _0x81b4fe();},'dowCy':function(_0x3db065,_0x1df753){return _0x3db065!==_0x1df753;},'WQfYv':_0xfa96('‮102','oBca')};let _0x374b80=Post_request(_0xfa96('‮103','JKP&'),_0xfa96('‮104','$r)M')+_0xd38db3);return new Promise((_0x5653a7,_0x271b4e)=>{var _0x4922af={'tMLDB':function(_0x571424){return _0x5a1f0b[_0xfa96('‫105','uBkt')](_0x571424);}};if(_0x5a1f0b['dowCy']('QibkR',_0x5a1f0b[_0xfa96('‮106','3Rw$')])){$[_0xfa96('‮107','n%*s')](_0x374b80,async(_0x5484f1,_0x34b3d0,_0xd7eec)=>{var _0x12615a={'KioKl':function(_0x5f489f){return _0x5a1f0b[_0xfa96('‫108','a!iW')](_0x5f489f);}};try{if(_0x5484f1){if(_0x5a1f0b[_0xfa96('‮109','m9TN')](_0x5a1f0b['aMDYA'],_0x5a1f0b['vyJKc'])){console[_0xfa96('‫fb','@OA6')]('\x0a['+TG_ID+_0xfa96('‫10a','3Rw$'));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';return![];}else{console[_0xfa96('‫ba','kWXq')]('\x0a【soy脚本提示---账号\x20'+$[_0xfa96('‮10b','m[j9')]+_0xfa96('‫10c','^FLF'));subTitle+=_0xfa96('‫e6','29kP')+$[_0xfa96('‮10d','8sft')]+_0xfa96('‮10e','EE@J');}}else{if(_0x5a1f0b[_0xfa96('‫10f','He[#')](_0xfa96('‮110','@OA6'),_0x5a1f0b[_0xfa96('‮111','m[j9')])){let _0xca8f31=JSON[_0xfa96('‫112','Vg)p')](_0xd7eec);if(_0x5a1f0b[_0xfa96('‮113','$wgb')](_0xca8f31[_0xfa96('‮114',']8kC')],0x0)){console[_0xfa96('‫115','CcO4')](_0xfa96('‫116','Q[!O')+$['index']+_0xfa96('‫117','^xY*')+_0xca8f31['msg']);}else if(_0x5a1f0b[_0xfa96('‫118','8sft')](_0xca8f31[_0xfa96('‫119','kWXq')],0x65)){if(_0x5a1f0b['IYqzK'](_0x5a1f0b[_0xfa96('‫11a','3Rw$')],_0x5a1f0b[_0xfa96('‮11b','29kP')])){await _0x5a1f0b['lVqrL'](list);}else{_0x12615a[_0xfa96('‫11c','8sft')](_0x5653a7);}}else{console[_0xfa96('‫115','CcO4')](_0xfa96('‫11d','WKfR')+$[_0xfa96('‫11e','29kP')]+_0xfa96('‮11f','(wN@')+_0xca8f31[_0xfa96('‮120','x7eN')]);}}else{_0x4922af['tMLDB'](_0x5653a7);}}}catch(_0x2bdc02){if('ezypr'!=='ezypr'){console['log']('\x0a【'+$[_0xfa96('‫121','He[#')]+_0xfa96('‮122','6fOU'));return!![];}else{console[_0xfa96('‮123','Vg)p')](_0x2bdc02,_0x34b3d0);}}finally{_0x5a1f0b[_0xfa96('‫124','29kP')](_0x5653a7);}});}else{console[_0xfa96('‮cb','He[#')](_0xfa96('‮50','ieZL')+$[_0xfa96('‮125','CcO4')]+_0xfa96('‫117','^xY*')+result[_0xfa96('‫126','ieZL')]);}});}function Post_request(_0x921b42,_0x57f513){var _0x3cd265={'wFukX':_0xfa96('‫127','m[j9'),'IAwqi':'application/x-www-form-urlencoded','VoRYV':'Keep-Alive','xYurj':'gzip'};let _0x2b8dcb=Math[_0xfa96('‫128','(wN@')](new Date()['getTime']());return{'url':_0xfa96('‮129','CcO4')+_0x921b42,'headers':{'autoken':token,'user-agent':_0x3cd265[_0xfa96('‮12a','^xY*')],'Content-Type':_0x3cd265[_0xfa96('‮12b','oBca')],'Content-Length':'0','Host':_0xfa96('‫12c','W^sy'),'Connection':_0x3cd265[_0xfa96('‫12d','$wgb')],'Accept-Encoding':_0x3cd265[_0xfa96('‮12e',')u*d')]},'body':_0x57f513};};function Get_request(_0x2114a2){var _0x2a88b6={'VqHbJ':_0xfa96('‮12f','TSYd'),'iZVeC':_0xfa96('‮130','UT9W'),'XEGqG':_0xfa96('‫131','8kau'),'IarcY':_0xfa96('‫132','hMA2'),'fgoCv':_0xfa96('‮133','4j15')};return{'url':_0xfa96('‮134','cRo^')+_0x2114a2,'headers':{'autoken':token,'user-agent':_0x2a88b6['VqHbJ'],'Content-Type':_0x2a88b6[_0xfa96('‫135','4PZm')],'Content-Length':'0','Host':_0x2a88b6[_0xfa96('‮136','4PZm')],'Connection':_0x2a88b6['IarcY'],'Accept-Encoding':_0x2a88b6[_0xfa96('‮137','pePW')]}};};async function yyz_login(){var _0x226754={'PwRti':_0xfa96('‫138','He[#'),'BOLti':_0xfa96('‫139','Vg)p'),'iNBSv':function(_0x5b2c0e,_0x42fbca){return _0x5b2c0e==_0x42fbca;},'LtjBo':function(_0x8bac35,_0x2bb59c){return _0x8bac35(_0x2bb59c);},'HlsBv':function(_0x3019aa,_0x51c629){return _0x3019aa==_0x51c629;},'CPiwx':function(_0x252045){return _0x252045();},'wTvoq':function(_0x3af4c6,_0x313af9){return _0x3af4c6+_0x313af9;},'DLhDH':function(_0xec3c80,_0x152ed9){return _0xec3c80+_0x152ed9;},'eiANp':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x3a7485=Math[_0xfa96('‮13a','WKfR')](Date[_0xfa96('‫13b','cRo^')]()/0x3e8);var _0x1a5fc2=CryptoJs[_0xfa96('‫13c','B^%j')](''+TG_ID+mac+os[_0xfa96('‮13d','1mds')]()+YZ)[_0xfa96('‫13e','^xY*')]();var _0x27df9d=_0xfa96('‮13f','29kP')+TG_ID+_0xfa96('‫140',']8kC')+_0x1a5fc2+_0xfa96('‫141','B^%j')+_0x3a7485;var _0x4269ba=CryptoJs['MD5'](_0x226754['wTvoq'](_0x226754[_0xfa96('‮142','@!CU')](_0x27df9d,'&'),appid))[_0xfa96('‫143','@OA6')]();_0x27df9d=_0x226754[_0xfa96('‮144','[41f')](_0x27df9d,_0xfa96('‮145','kBi['))+_0x4269ba;let _0x6cd45c={'url':serverUrl+'user_logon','headers':{'user-agent':_0x226754[_0xfa96('‫146','a!iW')]},'body':_0x27df9d};return new Promise((_0x23eb35,_0x26c094)=>{var _0x15e11b={'URnlC':_0xfa96('‮147','JKP&'),'IYaQr':_0x226754[_0xfa96('‫148','B^%j')],'kdDEz':function(_0x5d3457,_0x4a6517){return _0x5d3457===_0x4a6517;},'deFvi':_0x226754[_0xfa96('‫149','xoNC')],'JaVfR':function(_0x28908e,_0x37d804){return _0x226754[_0xfa96('‫14a','8sft')](_0x28908e,_0x37d804);},'UzVOh':function(_0x2f0382,_0x1c0285){return _0x226754[_0xfa96('‮14b','UT9W')](_0x2f0382,_0x1c0285);},'tjZyy':function(_0x2fc006,_0x1556ca){return _0x226754[_0xfa96('‫14c','UxB]')](_0x2fc006,_0x1556ca);},'VhIkM':function(_0x56c22f){return _0x226754['CPiwx'](_0x56c22f);}};$[_0xfa96('‮e0','uBkt')](_0x6cd45c,async(_0x4cee4c,_0x3d2b19,_0x4eb6ba)=>{if(_0x15e11b[_0xfa96('‫14d','L9Js')]!=='eVVfF'){console[_0xfa96('‮b2','KBOq')](_0xfa96('‮14e','8kau')+$['index']+_0xfa96('‮14f','kWXq')+result[_0xfa96('‮150','^FLF')]);}else{try{if(_0x15e11b['IYaQr']===_0xfa96('‫151','KBOq')){console[_0xfa96('‮93','[41f')](_0xfa96('‫152','W^sy')+$[_0xfa96('‫153',')u*d')]+'\x20领奖励】:\x20'+result[_0xfa96('‫53','29kP')]);}else{if(_0x4cee4c){console['log']('\x0a['+TG_ID+_0xfa96('‮154','^FLF')+_0x4cee4c);subTitle+='\x0a['+TG_ID+_0xfa96('‮155','3Rw$')+_0x4cee4c;}else{if(_0x15e11b[_0xfa96('‫156','8kau')](_0x15e11b[_0xfa96('‫157','W^sy')],_0x15e11b[_0xfa96('‫158','cRo^')])){let _0x2c8a1a=JSON[_0xfa96('‮159','m[j9')](_0x4eb6ba);if(_0x15e11b[_0xfa96('‮15a','EE@J')](_0x2c8a1a[_0xfa96('‫15b','@!CU')],0xc8)){let _0x5562a1=_0x15e11b[_0xfa96('‫15c','^xY*')](Format_time,_0x2c8a1a[_0xfa96('‮15d','m9TN')][_0xfa96('‫15e','cRo^')][_0xfa96('‮15f','cRo^')]);console[_0xfa96('‮85','8sft')]('\x0a['+TG_ID+_0xfa96('‮160','xoNC')+_0x5562a1);await get_vip(_0x2c8a1a['msg']['token']);}else if(_0x15e11b[_0xfa96('‮161','6fOU')](_0x2c8a1a[_0xfa96('‮162','ieZL')],0x71)){await yyz_user_reg();}else{console['log']('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x2c8a1a[_0xfa96('‫163','kBi[')]);subTitle+='\x0a['+TG_ID+_0xfa96('‫164','TSYd')+_0x2c8a1a[_0xfa96('‮165','JKP&')];return![];}}else{macs=fs[_0xfa96('‫166','(wN@')](fn)[_0xfa96('‫167','n%*s')]()[_0xfa96('‫168','4j15')]();}}}}catch(_0x230791){console[_0xfa96('‫56','W^sy')](_0x230791);}finally{_0x15e11b[_0xfa96('‫169','B^%j')](_0x23eb35);}}});});}async function yyz_user_reg(){var _0x26e652={'XOLTO':function(_0x4a5c44,_0x473d05){return _0x4a5c44(_0x473d05);},'CGEBS':'rgSIX','VfRiE':_0xfa96('‮16a','hMA2'),'HMlTB':function(_0x33ee1a,_0x23e6d7){return _0x33ee1a==_0x23e6d7;},'UwIII':_0xfa96('‫16b','a!iW'),'acfyg':_0xfa96('‮16c','hMA2'),'fjjYo':function(_0x28b11c){return _0x28b11c();},'kJjQc':'YMmWd','sjqCO':function(_0x11afaa,_0x5a22d4){return _0x11afaa/_0x5a22d4;},'GRCOv':function(_0x2eca7c,_0x57c5a9){return _0x2eca7c+_0x57c5a9;},'EIRvP':function(_0x4abbb5,_0x5e642f){return _0x4abbb5+_0x5e642f;},'LOpMR':_0xfa96('‫16d','JKP&')};if(!Tips&&!YZ){if(_0x26e652['kJjQc']!==_0x26e652['kJjQc']){console[_0xfa96('‫ba','kWXq')](e,response);}else{console[_0xfa96('‮b2','KBOq')](_0xfa96('‮16e','CcO4'));return![];}}var _0xb62539=Math[_0xfa96('‫16f','1mds')](_0x26e652[_0xfa96('‮170','ieZL')](Date[_0xfa96('‫171','EE@J')](),0x3e8));var _0x5f2ddc=CryptoJs[_0xfa96('‮172','a!iW')](''+TG_ID+mac+os[_0xfa96('‮173','cRo^')]()+YZ)[_0xfa96('‫174','(wN@')]();var _0x91464b=_0xfa96('‮175','q!Bq')+TG_ID+_0xfa96('‮176','UxB]')+_0x5f2ddc+_0xfa96('‮177','(wN@')+_0xb62539;var _0xdf53d4=CryptoJs[_0xfa96('‮178','8sft')](_0x26e652[_0xfa96('‮179','5%rt')](_0x26e652[_0xfa96('‮17a','cRo^')](_0x91464b,'&'),appid))['toString']();_0x91464b=_0x91464b+'&sign='+_0xdf53d4;let _0x3a14dc={'url':serverUrl+_0xfa96('‮17b','hMA2'),'headers':{'user-agent':_0x26e652['LOpMR']},'body':_0x91464b};return new Promise((_0x2ff4d4,_0x40524f)=>{var _0xcc35a5={'jrMLD':function(_0x5d0e9d,_0x1a210c){return _0x26e652['XOLTO'](_0x5d0e9d,_0x1a210c);},'mDODF':_0x26e652[_0xfa96('‫17c','hMA2')],'wJHWM':_0x26e652[_0xfa96('‮17d','B^%j')],'uEJnr':function(_0x111267,_0x72a6c6){return _0x26e652[_0xfa96('‮17e','(wN@')](_0x111267,_0x72a6c6);},'eSeqw':function(_0x2a8e5d,_0x410dcf){return _0x2a8e5d!==_0x410dcf;},'yhKSV':_0x26e652[_0xfa96('‮17f','kBi[')],'DGSyJ':function(_0x9b314f,_0x539b32){return _0x9b314f===_0x539b32;},'ljnoO':'OfCZe','KVMkb':_0x26e652[_0xfa96('‫180','[41f')],'oShNQ':function(_0x4a7d21){return _0x26e652[_0xfa96('‮181','Eui@')](_0x4a7d21);}};$[_0xfa96('‫182','W^sy')](_0x3a14dc,async(_0x1e672,_0x222955,_0x14dae9)=>{if(_0xcc35a5[_0xfa96('‮183','pePW')]===_0xfa96('‫184','4PZm')){try{if(_0x1e672){if(_0xcc35a5['wJHWM']===_0xcc35a5[_0xfa96('‫185','29kP')]){console[_0xfa96('‮41','(wN@')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x1e672);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x1e672;}else{console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0xfa96('‫186','[41f')]+_0xfa96('‮187','Vg)p'));return![];}}else{let _0x2a9dc3=JSON[_0xfa96('‮188','^xY*')](_0x14dae9);if(_0xcc35a5[_0xfa96('‮189','ieZL')](_0x2a9dc3['code'],0xc8)){if(_0xfa96('‫18a','CcO4')===_0xfa96('‫18b','pePW')){console[_0xfa96('‮18c','TSYd')](_0xfa96('‫18d','JKP&')+$['index']+_0xfa96('‮18e','8kau'));subTitle+=_0xfa96('‫18f','^xY*')+$[_0xfa96('‮cd','m9TN')]+_0xfa96('‮190','CcO4');}else{await yyz_login();}}else if(_0xcc35a5[_0xfa96('‮191','WKfR')](_0x2a9dc3[_0xfa96('‮192','WKfR')],0x75)){if(_0xcc35a5['eSeqw'](_0xcc35a5[_0xfa96('‫193','n%*s')],_0xcc35a5['yhKSV'])){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0xfa96('‫153',')u*d')]+_0xfa96('‮194','uBkt'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0xfa96('‫195','@OA6')]+'\x20任务列表】:\x20网络请求失败';}else{console['log']('\x0a['+TG_ID+_0xfa96('‫196','8kau')+_0x2a9dc3[_0xfa96('‫186','[41f')]+_0xfa96('‫197','uBkt'));return![];}}else{if(_0xcc35a5[_0xfa96('‮198','a!iW')](_0xcc35a5[_0xfa96('‮199','hMA2')],_0xcc35a5['KVMkb'])){os=$[_0xfa96('‫19a','EE@J')]()?_0xcc35a5[_0xfa96('‮19b','KBOq')](require,'os'):'';}else{console[_0xfa96('‫19c','8kau')]('\x0a['+TG_ID+_0xfa96('‫19d','1mds')+_0x2a9dc3[_0xfa96('‫19e','a!iW')]);subTitle+='\x0a['+TG_ID+_0xfa96('‫19f','a!iW')+_0x2a9dc3[_0xfa96('‮1a0',')u*d')];return![];}}}}catch(_0x48a492){console[_0xfa96('‫1a1','^xY*')](_0x48a492);}finally{_0xcc35a5[_0xfa96('‫1a2','x7eN')](_0x2ff4d4);}}else{console[_0xfa96('‫1a3','3Rw$')]('\x0a['+TG_ID+_0xfa96('‫1a4','W^sy')+_0x1e672);subTitle+='\x0a['+TG_ID+_0xfa96('‫1a5','8sft')+_0x1e672;}});});}async function get_vip(_0x45f8c1){var _0x2e948b={'zXukb':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','BnSIm':_0xfa96('‫1a6','$r)M'),'OaBSH':function(_0x3a95f8,_0x1d8c77){return _0x3a95f8!==_0x1d8c77;},'lnfnc':_0xfa96('‫1a7','q!Bq'),'sXDvO':_0xfa96('‮1a8','m[j9'),'IUnMa':function(_0x585419,_0x5c2f4b){return _0x585419==_0x5c2f4b;},'ufSzw':function(_0x9f2b49,_0x4e3d34){return _0x9f2b49===_0x4e3d34;},'aOHDz':'ApGYD','MBPcJ':'DiAEE','ogJZA':_0xfa96('‫1a9','Q[!O'),'iyjMt':'DDYOC','kXEkT':function(_0x2b3cda,_0x7595a4){return _0x2b3cda+_0x7595a4;}};var _0x35be1a=Math['floor'](Date['now']()/0x3e8);var _0x2ca929='script=ggb&num='+user_num+_0xfa96('‫1aa','3Rw$')+_0x45f8c1+_0xfa96('‮1ab','4PZm')+_0x35be1a;var _0x10fb40=CryptoJs['MD5'](_0x2e948b['kXEkT'](_0x2ca929,'&')+appid)['toString']();_0x2ca929=_0x2e948b['kXEkT'](_0x2ca929,_0xfa96('‮1ac','8kau'))+_0x10fb40;let _0x82f4a1={'url':serverUrl+_0xfa96('‮1ad','m9TN'),'headers':{'user-agent':_0xfa96('‫1ae','kWXq')},'body':_0x2ca929};return new Promise((_0x4d6de3,_0x5427b3)=>{var _0x11f8e4={'JhUUi':_0x2e948b[_0xfa96('‫1af','kBi[')],'qPOHo':_0x2e948b[_0xfa96('‫1b0','x7eN')],'eTcFC':function(_0x4afa36){return _0x4afa36();},'rRRKk':function(_0x5c52c3,_0x364f6a){return _0x2e948b['OaBSH'](_0x5c52c3,_0x364f6a);},'HhYtz':_0x2e948b[_0xfa96('‮1b1','WKfR')],'LZVCX':_0x2e948b[_0xfa96('‮1b2','WKfR')],'cRvyl':function(_0x21a977,_0x26c63f){return _0x2e948b['IUnMa'](_0x21a977,_0x26c63f);},'tFFtO':function(_0x1c9aa5,_0x21e75b){return _0x2e948b['ufSzw'](_0x1c9aa5,_0x21e75b);},'Cgxuf':_0x2e948b[_0xfa96('‫1b3','W^sy')],'nRimz':_0x2e948b[_0xfa96('‮1b4','xoNC')],'OSoqL':_0x2e948b['ogJZA'],'TyYJt':_0x2e948b['iyjMt']};$[_0xfa96('‫1b5','xoNC')](_0x82f4a1,async(_0x4145f2,_0x3e5d01,_0x34acea)=>{var _0x4f1528={'bAOQf':_0x11f8e4[_0xfa96('‫1b6','B^%j')],'EKIRN':'application/x-www-form-urlencoded','HYgMJ':_0x11f8e4[_0xfa96('‮1b7','3Rw$')],'pRJKa':function(_0x41d5ff){return _0x11f8e4[_0xfa96('‫1b8','uBkt')](_0x41d5ff);}};if(_0x11f8e4['rRRKk'](_0x11f8e4[_0xfa96('‫1b9','8kau')],_0x11f8e4['HhYtz'])){let _0x1dc879=Math['round'](new Date()['getTime']());return{'url':_0xfa96('‫1ba','L9Js')+url,'headers':{'autoken':token,'user-agent':_0x4f1528[_0xfa96('‫1bb','cRo^')],'Content-Type':_0x4f1528['EKIRN'],'Content-Length':'0','Host':_0xfa96('‫1bc','vpCH'),'Connection':_0xfa96('‫1bd','3Rw$'),'Accept-Encoding':_0x4f1528['HYgMJ']},'body':body};}else{try{if(_0x11f8e4[_0xfa96('‫1be','q!Bq')](_0x11f8e4['LZVCX'],_0xfa96('‫1bf','@OA6'))){console['log']('\x0a['+TG_ID+_0xfa96('‫1c0','JKP&')+_0x4145f2);subTitle+='\x0a['+TG_ID+_0xfa96('‮1c1','a!iW')+_0x4145f2;}else{if(_0x4145f2){console[_0xfa96('‮1c2','Q[!O')]('\x0a['+TG_ID+_0xfa96('‫1a4','W^sy')+_0x4145f2);subTitle+='\x0a['+TG_ID+_0xfa96('‫1c3','Vg)p')+_0x4145f2;}else{let _0x5d46a4=JSON['parse'](_0x34acea);if(_0x11f8e4[_0xfa96('‮1c4','(wN@')](_0x5d46a4['code'],0xc8)){if(_0x11f8e4['tFFtO'](_0x11f8e4['Cgxuf'],_0xfa96('‫1c5','[41f'))){console['log']('\x0a['+TG_ID+_0xfa96('‫1c6','WKfR')+_0x5d46a4[_0xfa96('‫1c7','$wgb')]+_0xfa96('‮1c8','@OA6'));return![];}else{user_index=_0x5d46a4['msg'];await implement();}}else{if(_0x11f8e4[_0xfa96('‮1c9','He[#')]===_0xfa96('‫1ca','xoNC')){if(yyz_Kami){if(_0x11f8e4['rRRKk'](_0x11f8e4[_0xfa96('‫1cb','n%*s')],_0x11f8e4['TyYJt'])){await card(_0x45f8c1);}else{console[_0xfa96('‫1cc','UT9W')](e);}}else{console['log']('\x0a['+TG_ID+_0xfa96('‮1cd','m[j9'));subTitle+='\x0a['+TG_ID+_0xfa96('‫1ce','5%rt');return![];}}else{_0x4f1528['pRJKa'](_0x4d6de3);}}}}}catch(_0x51ab42){console[_0xfa96('‮1cf','B^%j')](_0x51ab42);}finally{_0x11f8e4[_0xfa96('‫1d0',']8kC')](_0x4d6de3);}}});});}async function card(_0x5038de){var _0x47272a={'FfCEO':function(_0x172183){return _0x172183();},'ludLa':'\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a','xBxsL':function(_0x1a66f2,_0x226fe0){return _0x1a66f2!==_0x226fe0;},'QgWhO':_0xfa96('‫1d1','W^sy'),'jYTjC':_0xfa96('‫1d2','WKfR'),'kbUfs':function(_0xae63a4,_0x196071){return _0xae63a4==_0x196071;},'Yshew':function(_0xa36c6,_0x47e015){return _0xa36c6===_0x47e015;},'PYYUJ':_0xfa96('‮1d3','uBkt'),'euDUt':function(_0x4fd167,_0x5035ee){return _0x4fd167!==_0x5035ee;},'OPbOo':_0xfa96('‫1d4','29kP'),'Pgshx':_0xfa96('‫1d5','oBca'),'pHZII':function(_0x1f8c4a,_0x3cbb3e){return _0x1f8c4a+_0x3cbb3e;},'WxvBg':function(_0x60c2bc,_0x1e7311){return _0x60c2bc+_0x1e7311;}};console['log'](yyz_Kami);var _0x4ed336=Math[_0xfa96('‫1d6','vpCH')](Date[_0xfa96('‮1d7','hMA2')]()/0x3e8);var _0xe75442=_0xfa96('‫1d8','pePW')+_0x5038de+_0xfa96('‫1d9','Eui@')+yyz_Kami+_0xfa96('‫1da','TSYd')+_0x4ed336;var _0xc082b6=CryptoJs['MD5'](_0x47272a['pHZII'](_0xe75442,'&')+appid)[_0xfa96('‫1db','hMA2')]();_0xe75442=_0x47272a[_0xfa96('‫1dc','CcO4')](_0xe75442,'&sign=')+_0xc082b6;let _0x24d8ff={'url':serverUrl+_0xfa96('‫1dd','[41f'),'headers':{'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'},'body':_0xe75442};return new Promise((_0x470793,_0x38ab5b)=>{var _0xff5459={'WWeYU':function(_0x38bfad){return _0x47272a[_0xfa96('‮1de','m9TN')](_0x38bfad);},'EHajm':_0x47272a[_0xfa96('‫1df','UT9W')],'guHEF':function(_0x39445c,_0x35dbb2){return _0x47272a['xBxsL'](_0x39445c,_0x35dbb2);},'CcPYy':_0xfa96('‫1e0','xoNC'),'RrJQM':_0x47272a['QgWhO'],'RzmRF':_0xfa96('‮1e1','[41f'),'uPczW':'hLLba','miFFn':_0x47272a[_0xfa96('‫1e2','ieZL')],'oNlSL':function(_0x5ba951,_0xbf177e){return _0x47272a[_0xfa96('‫1e3','UxB]')](_0x5ba951,_0xbf177e);},'kRrID':function(_0x144a15,_0x330a9b){return _0x47272a['Yshew'](_0x144a15,_0x330a9b);},'ZKESx':_0x47272a[_0xfa96('‮1e4','4j15')],'hXrOE':function(_0x3fe46c,_0x116884){return _0x47272a[_0xfa96('‫1e5',')u*d')](_0x3fe46c,_0x116884);},'yBdXA':_0x47272a[_0xfa96('‫1e6','$r)M')],'tUyiM':_0x47272a['Pgshx']};$[_0xfa96('‮1e7','^FLF')](_0x24d8ff,async(_0x5109ce,_0x2bc76f,_0x4ebe43)=>{var _0x5b791f={'exPBS':function(_0x48c06e){return _0x48c06e();},'pAuKl':function(_0x568831){return _0xff5459['WWeYU'](_0x568831);},'IfCDc':_0xff5459[_0xfa96('‮1e8','He[#')]};try{if(_0xff5459[_0xfa96('‮1e9','m9TN')](_0xff5459['CcPYy'],_0xff5459['RrJQM'])){if(_0x5109ce){if(_0xff5459[_0xfa96('‮1ea','x7eN')]===_0xfa96('‫1eb','kWXq')){_0x5b791f[_0xfa96('‫1ec','8kau')](_0x470793);}else{console[_0xfa96('‫1cc','UT9W')]('\x0a['+TG_ID+_0xfa96('‮1ed','8sft')+_0x5109ce);subTitle+='\x0a['+TG_ID+_0xfa96('‮1ee','hMA2')+_0x5109ce;}}else{if(_0xff5459[_0xfa96('‮1ef','oBca')]!==_0xff5459[_0xfa96('‫1f0','ieZL')]){let _0x364ea7=JSON['parse'](_0x4ebe43);if(_0xff5459[_0xfa96('‫1f1','5%rt')](_0x364ea7[_0xfa96('‮1f2','cRo^')],0xc8)){console[_0xfa96('‮1f3','6fOU')]('\x0a['+TG_ID+_0xfa96('‮1f4','@!CU')+_0x364ea7['msg']+_0xfa96('‮1f5','EE@J'));return![];}else{if(_0xff5459[_0xfa96('‫1f6','^xY*')]('PdfIo',_0xff5459['ZKESx'])){console['log']('\x0a['+TG_ID+_0xfa96('‮1f7','Vg)p')+_0x364ea7['msg']);subTitle+='\x0a['+TG_ID+_0xfa96('‮1f8','JKP&')+_0x364ea7[_0xfa96('‮1f9','6fOU')];return![];}else{_0x5b791f[_0xfa96('‮1fa','8sft')](_0x470793);}}}else{console[_0xfa96('‮5c','a!iW')](e,_0x2bc76f);}}}else{throw new Error(_0x5b791f['IfCDc']);}}catch(_0x291c53){if('KwNlV'===_0xfa96('‫1fb','KBOq')){yyz_type=0x1;}else{console[_0xfa96('‫1fc',']8kC')](_0x291c53);}}finally{if(_0xff5459[_0xfa96('‮1fd','W^sy')](_0xff5459[_0xfa96('‮1fe',')u*d')],_0xff5459['tUyiM'])){_0x470793();}else{let _0x2bad10=JSON[_0xfa96('‮1ff','6fOU')](_0x4ebe43);if(_0x2bad10[_0xfa96('‫200','pePW')]==0x0){console[_0xfa96('‫1fc',']8kC')](_0xfa96('‫201','B^%j')+$[_0xfa96('‫202','vpCH')]+_0xfa96('‫203','Vg)p'));}else{console['log'](_0xfa96('‫204','TSYd')+$[_0xfa96('‫88','kWXq')]+'\x20观看广告】:\x20'+_0x2bad10[_0xfa96('‫bf','WKfR')]);}}}});});}function Format_time(_0x13efee){var _0xb6aa30={'jQlOH':function(_0x57324d,_0x18861f){return _0x57324d+_0x18861f;},'EShnC':function(_0x1d652a,_0x2c6955){return _0x1d652a<_0x2c6955;},'DVRZg':function(_0xfd9d69,_0x51dae6){return _0xfd9d69+_0x51dae6;},'rPVNi':function(_0x1022c2,_0x1e73ee){return _0x1022c2+_0x1e73ee;},'DueZW':function(_0xf1f892,_0x6ce3c6){return _0xf1f892+_0x6ce3c6;},'hgYGI':function(_0x3dbfaf,_0x23227c){return _0x3dbfaf+_0x23227c;},'JRtjh':function(_0x948f18,_0x563e46){return _0x948f18+_0x563e46;},'OFPVE':function(_0x407bb3,_0x5ac3b5){return _0x407bb3+_0x5ac3b5;},'QSdUy':function(_0x423b77,_0x1bd2b6){return _0x423b77+_0x1bd2b6;},'zSfzM':function(_0x2ea92b,_0x218862){return _0x2ea92b+_0x218862;},'VLwGQ':function(_0x55a3e,_0x299be9){return _0x55a3e+_0x299be9;}};var _0x30de93=new Date(_0x13efee*0x3e8);var _0x3a2649=_0xb6aa30[_0xfa96('‫205','B^%j')](_0x30de93[_0xfa96('‮206','Eui@')](),'-');var _0x501c37=_0xb6aa30[_0xfa96('‮207','vpCH')](_0xb6aa30[_0xfa96('‫208','@!CU')](_0xb6aa30[_0xfa96('‮209','cRo^')](_0x30de93[_0xfa96('‮20a','UT9W')](),0x1),0xa)?_0xb6aa30[_0xfa96('‮20b','@!CU')]('0',_0xb6aa30['DVRZg'](_0x30de93[_0xfa96('‫20c','m9TN')](),0x1)):_0xb6aa30[_0xfa96('‮20d','Vg)p')](_0x30de93[_0xfa96('‮20e','m[j9')](),0x1),'-');var _0x184ac0=_0xb6aa30[_0xfa96('‮20f','q!Bq')](_0x30de93[_0xfa96('‮210','UxB]')](),'\x20');var _0x38e8d3=_0xb6aa30[_0xfa96('‮211','UxB]')](_0x30de93['getHours'](),':');var _0x5f5066=(_0xb6aa30[_0xfa96('‮212','6fOU')](_0x30de93[_0xfa96('‫213','He[#')](),0xa)?_0xb6aa30[_0xfa96('‮214','vpCH')]('0',_0x30de93[_0xfa96('‫215','8kau')]()):_0x30de93[_0xfa96('‮216',']8kC')]())+':';var _0x187bf2=_0x30de93[_0xfa96('‮217','hMA2')]();let _0x44b1a7=_0xb6aa30[_0xfa96('‮218','a!iW')](_0xb6aa30['hgYGI'](_0xb6aa30[_0xfa96('‮219','xoNC')](_0xb6aa30[_0xfa96('‫21a','oBca')](_0xb6aa30[_0xfa96('‮21b',']8kC')](_0x3a2649,_0x501c37),_0x184ac0),_0x38e8d3),_0x5f5066),_0x187bf2);return _0xb6aa30['QSdUy'](_0xb6aa30[_0xfa96('‫21c','1mds')](_0xb6aa30[_0xfa96('‮21d','(wN@')](_0xb6aa30['VLwGQ'](_0x3a2649,_0x501c37),_0x184ac0)+_0x38e8d3,_0x5f5066),_0x187bf2);};_0xodH='jsjiami.com.v6';


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