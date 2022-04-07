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

var _0xodN='jsjiami.com.v6',_0xodN_=['‮_0xodN'],_0x5369=[_0xodN,'YuS4jOWLt+WIpeihtOODgRkw576t57qS6K6R5rKf5aeR6Le6','FiNA','AuOBqnXDoyDoh6zmnJrmjpHnpKrCuVDDtui3nOWOlsKf','wojDvQnCqAc=','w4norabphJ3nvo7jgaTCjlHnvZ/nubLorKrmsLflp4Lot6E=','wr7DkCfCoRo=','BcKswqDDjQk=','Mi3CkxvDkcOzGBt/w5pHYnoDbwFI','wpzDk8K2TsK3','w4zDr0jCh8OT','wqbDgz/Cnhc=','MMKtw4LDnlU=','w7fjg4TChMKeD+iHs+acsOaOm+elncKewqsH5YyC6YeX5qG95rW644K/DcKW5p2l5o6v5Li1wq5Aw5bCr8Kz','w6DjgKbCoMKwHeiFsOacsOaOv+elqsOCLMOL6LWi5Y6NwrM=','w4rop7Tnn5jluqDlkK7jgbsmT+e8gee4s+ivtuaypOWltei1nw==','ZuOCmXBnwpHohJLmnK3mjqTnpZXDum7Duei3heWMvMOk','dOilj+eejOW4ieWQpuODrcO2Jue9que7i+iumeaxkOWkmOi3jg==','w6DCqMOjw4BR','KTLCgxfDrA==','wrTDmsKy','YRRiw6kh','VeODlDNNK+iGruadoeaMleenn8KPw7nDvui2qOWOuVQ=','w6PCmsOzRcO0','ZQlh','PgJlamc=','wog4EAxB','FsOrw4gyHg==','NsK3Dk02w5E=','IcKFwqHDuT0=','wpPjgIlOw6Na6ISn5pys5oyF56asGMOPw43otbzlj6E1','UeimrOeduuW6p+WQheODmkVJ','JMO5w4QsBw==','w5xvw7s4Tg==','B8KeOlU2','JhXCrVM8','w4BnOA==','XOOBpHhfw7voh4Xmnp/mja/npasQwrxV6LWT5Y+ieg==','Z+ikneedm+W6jOWThOOBmMK9w4HopIXnnbHmiqLli4Q=','wqrCn8K5wpk9','wqbDtcKre8O+','w7F3WsOjdQ==','w7Baw69/wrI=','wqjCg0hTNA==','MsKxM0cgwpskwqvCgcOHwqw=','D8KMKsKQw4o=','wqk+Qg==','AsO+YOiOleW/heaWm+S6lemQu+aNgMKK5aeZ5p6R5reB6KaG5Zic5oi65b+Aw7zDtAzCgm/DssKJLUPDt27CkCwyw7rDqnvDhjI7w7JET8KGwoE1w58tBsOQwrNKBFN/GMKTw4BPw73DhillBMKeCMK9ecOtw4I=','wpnCtcKDwpA=','wpDCosOJWzXCpAg=','GCJxw7Y=','KcK3wr3DrAk=','wrbCoFo=','woLjgo9yworDs+iHj+afhuaNteekhRvDkBzotKHljoo2','OsOow4vDn2s=','wrTjgpfCncOhw7fohozmnJHmjaznp5wPK8OU6LaU5Y6Aw7o=','wpTCusKTwpQO','w5Pnlp/mi6jkv4vmg6XjgLjDjE/nv4znu7/orJbmsZzlprPot5o=','w7DDoEPDosK5','c8Ozw7/Dtyw=','MVUXwq4m','woBNwoNaPQ==','w6/ChsOlQ8Ojw7tN','XSvDs2jCnw==','XAF4w6nCqA==','Iih9SWc=','wo3DvCTCgQ==','EQLCkHMewoE=','IjbCkg==','DwVUw4vCrA==','w5LDqMKJ','w67jg5BNGBnoh4jmn7PmjJfnp6hTw50t6Leb5Y2nwoc=','wp7nlq/mi5nkva/mg6HjgocHwpw=','w6fCh8Ow','wq3Dj8KUw7nCig==','wp98wpTCviY=','KsK3NMK7w6c=','wpPCv8OK','wocELwp2','w60BYsKmwok=','NyzCkA==','w4nmibnku5nliJzkv4zotobDiMKTN1/DneiuvOiGhuijleWsveijvMKs','w7RYW8OcQg==','w70NAAM8','w43DrlnDusKO','w7DDl8Ktw6vDnQ==','P087wo0L','LMK8S3cz','RcOlw7M=','w5hXw7N/','w6vjgoMewqIG6Iad5p+W5o+/56a4woI0R+i3hOWMnsO6','wojku4PliKHliJzoopHjg5fDuBrnvInnu6forbbms5flpazotJM=','OUknwpEY','w4TkuLvlip/liaDooIjjg4PDpcOn576D57qi6KyH5rGC5aeM6La1','TzlCw6Uf','NsOow5k=','w59nJsKWRMKJwqDCvsK/GcOtXg==','N8K+IsKAw6s=','GQXChnEFwoRV','wpjCmMOawrTDpg==','wozCnMOtwrc=','wrTDtMKbQ8OM','HcKTw4zDkHE=','M8KrJw==','wqXCtsOTwpXDlA==','w4vCjMOjdsOm','WuOAtzDCmxnoharmno7mjrPnpK/Ci8Kpw5/ot6HljYrCgg==','f+S4v+WLoeWIteiguuOCpXfDpQ==','w6tLG8Kgbg==','wrPCqFsVLw==','w4vDqHMHXg==','AsKqB8Kjw4o=','BcKiwqfDjx4=','Gg7DtDTDrQ==','HcKdE2g8','IhzCvMO7dg==','w4vDmVHChsOj','CCbCtUYE','IMKKJcKJw6Y=','FsO7VUrChQ==','woXCo3glJg==','HRTCskAs','C8KpwpDDvRA=','wqTCrsKCwqIO','wp0mZsKgw6Q=','w7DCrsOYw5td','KsKKLGsW','BMKpwq4=','w6/po5TlpozliaHjgI3DnHTnvoDnu7vorpfmsIXlpqnot5c=','wpHjgbZlwqLCieiHq+acguaNreeksVzCtAPot57ljKIm','XOmjseWmouWKo+OBu8OaEOe+qOe4guiunuayr+Wluei2kQ==','w6RAHMKLRQ==','w7TDgMK8w63DgA==','WcOrw6bDjyo=','HcKnw4TDnX4=','wpbDhcKtScOlTcKT','WiXDhA==','w6Pjgo0jwo8M6Iau5p2d5o+e56aUw7BYw57ot6Llj5FE','wrPCoVlaHg==','w6tLDsKnbg==','wo9EwqHCvAsOeQ==','w7bDj8Ktw4zDow==','FC1YesOs','JcKHO8Kyw6c=','GB9FflM=','cOinpeediOW6i+WQquOBocKYQw==','woXCjsO+','w5LjgqXCpsOgwpbohKTmnLPmjbrnp4jChzPDgui0kOWMiQA=','wqppwrBJKQ==','w4rporDlpoXlia7jgbVQPA==','Owds','EBjCkw==','wpHjgbZlwqLCieiHq+acguaNreeksVzCtAPljKDphJrmo4bmtb/jgrZNwoDmnqbmj63kupVQw43CssOywqQ=','FzLCogvDmQ==','HQEW','CcK2wrnDpQ7Dmw9qw77DtsK5w6ZAw458UlXCnsOaHMKSV8O6w4rCry3Dj8OWZsOfUXMs','OcK2Igwjw4EswqvChsODwrrCuMOrJB1HwqPCusKj','JcKSImZ1wr1G','GRoFwqh1w6RQDykjwr3CksKhwrZyJ8OCw5tcQsOtYcOqw59Pw6/CscONdsO8MwHCoMK8','wrwXSsKiw7I=','w4MvecKlwoE=','w4tyNsK5','wpzCpMKHwp0fwop9Pw7DnMOoBcKiNcOKRsOZGsOQIA3DvMOXcsO7worCkj/ClMKlwrgkAg==','HRFuQMKvwp7Dn8OWJ1g=','woDCicOtwqbCn1/CrcOKPAI9M3hjNU3CnDh3FTANBsKMNWlRwrQ5woBUIMK7bg==','w7ovYiPDig==','NcO0w43ClGISd8KZJsK1AsO/F3gvI8Kjwp7DtA==','w6lSw5hawps=','IQDCpzHDig==','wonCrE9WFh8zCkzDtBo=','woTDnD5Pdg==','AcKUNXFs','wpPCgVFtMg==','wodFwrQ=','Dz5iWsOU','wohiwrltNA==','wp49w7TlvKzlpprmjZjmnqvDj2TorojmsrMKPMOQ5aaF6LSc','RivDkVfClA==','DxPCh3g=','LMKwIVY3','VeODlDNNK+iGruadoeaMleenn8KPw7nDvui1n+i2oeS7suOBuMO6w7U=','CW0qwp42','fifDgknCgw==','K8KvwqPDrQA=','JQBqRMO3wqw=','b8KHwqfDkArDry3DjcOOwoYSGFEWw57DsMOKwrjDrMKYwqRbw6F6acOoOsKHw5JEw6co','w7TDtGIVK2rDi8KKPMK5wphSZcO7XcOOFD7CpVQ6woAdCsOkw5jCiMOzDgXDrB7CicOywonCugXCkCZEw4LCuMKHUg==','w7tbw7JiwonCssKdXjlPw6A=','wqbChsOCWjQ=','YA5gw5UR','w4Z+HcKPaQ==','w4/Ch8OlaMOe','wqTCvsO/wpHDvA==','wovDiRnCmQE=','Qjhfw4fCqA==','wprDj8KrUsOk','I8KKcHg/','NMKrIsKaw6Auw67Ch8K+','wpB4wqfCryA=','wp/DmMK4','woIZHw==','w5JNw6s=','wpTCoUwEBQ==','KsKCImAj','WsOuw6fDlg==','w4XCq8O4w5pw','SOODpyVdZeiHiuacj+aPgOenhmNLw7DotLHotLDku5vjgrltwpQ=','D8OmbXzCjWZ1','DsKqwqbDphU=','w5jCsMOu','w6nDvGLCisO/wrvCnsKY','IcONNg==','w4AMJQYd','wpHCtsO3wprDrw==','fBVVw7grwp9YJg==','AydTZ1Y=','wrLChEgRIg==','DBbChmEP','HhjCkGs=','HSdww4jCow==','w5ooLy8=','FwbCsw==','w5xXw6tuwpc=','wp7DpxlzZMKdUHjDmMKqwoHCs8Kz','w5HDv8OURz3CsjjCnih6wpjDjcO3PsOi','XcOlw7/DmSE=','w654VMO4','w658w6Vqwqo=','w7/Dr3IA','a3DCg+eZn+W+pOWmsui2psKywrw=','wqgiQg==','J8O5w6YCGcKP','B8Kdfmk9wrPCjsOraz3Di8KlwopxwqHClcKXfgRXwrZWfWrCjiZxCsKZXFcDDcKZw6/CvyfCqcKxw49YKlrDisO+w7rCs8KhwodvwozDp8OFwonDu8Oew5PDgMOLwojCvy/Dix47wqPDtMKcC3HDs3d+McKeJGTDrcKiwonCgcO8w4ZDw7jDsWplw5PDv8Kkahg8w4zClcOhwolUwpTDnsOmeRjCigvCr8O4eMKSbWIpLk3CncKbw4MYwp/DpU48V8OaI3pqXcKvw7h2MVg0JsOGS8Oxwo4CwrtZw6PCuMOvHMKNTMO2woBZPRt8woFSesOjwqHCl8OIw7zDgcOWSsObPiIJJQIAwqnDvEVOw67Ch8KLwq5zHA==','w7hpTcOgSl5hwqHDv1rCjMOPIjtiI8KPwo58wpIKGRp7wqnDiMOveSbCgMOLPhQ=','wohiwrFcfMKRwoTCnDIa','w549Ijo=','wq7DrGjCgsOkw6g=','DDLCvcOiXg==','OsOAw53DokY=','HCBIYm8=','wqDCtcOrwqLDow==','IwduQsK/','w6kiwrvCo2/CkTvCo0NddsKqw4HCp8OoCcKzwrjCjcKcAgnDu8O7wr3DrsKxPg7DlxB/A8K9woHCn3I=','UBDCqw==','MTPDgQ==','DgTCmDLDvg==','w40oGD4lw57CisOs','Zyh3w5gR','AxfDsxLDvMKlScK2','DBjCh2Y=','wp0CGRRuw6M=','Hh7CtcOkcA==','CMOiYkbCgg==','PMO5w7MGVsOTw6NgSXVAY1zCihUna1ouwpbDuTVnOMOteFPDocK8w57CnMK2w7nCqQ==','wpfCmHsnLg==','w4jCk8O4b8O9','wofDoQ/Dow7DssKbQcOhw453AcKHwoPCs8O4woJDwoQ=','wpzDtsKvw6LCqg==','KwVxX0w=','w45nO8Kw','wqEsMg11','worCnnZGIA==','L8KFw43DnVQ=','w74WdMKLwpM=','ViF4w4PCiw==','wrTCp3DmsIjlh7nmjLzmnLI0wo4=','w60mZg==','w5vDqcKY','McKHOlto','w6MYwqzmsrblhrbmjK/mn7Ngw7bovJ7lmJc=','AhoQwqw6wrg=','wqM9SsK8w7M=','OBt8','wrdowr9JP8Ot','cAA2','wpfCiwg=','WjLDuXLChA==','AgvDhRTDkcK+QsK2','DsOLemDCkg==','csO+w64RAsOB','wr/DkMKhw5DCmVdv','wqrCoE5L','wprDqTHClADDhw==','HMOocXvCjQ==','w5zDqMKKw7c=','QBd1w6c=','w7p2WcOp','HjHCo8O/bg==','w6lww4IGXQ==','wrnDuh7pq7vorqHot7TljKjDvcOy6ZygwqZJwq3kup3ogZrnuKznuKDkvpjnl7roh4jmn7jvv7jls6Hor7Dljq7lr7Dmvobmt4zCtcOxwr8=','Ohts','wprDoRFzdMKo','YcKsOcKUw6B0','C8OLw7nDuHA=','wrPCo1MgDg==','w4fCksOAWsO4','GhvCm30Y','wofDsic=','HCJpw6fCigo=','w77DnsK0w6LChgM=','ED7Cng==','NwgS','wr/DjsK4ecO5','wrHCrcKQwqIF','w6DDu0XCjsON','Cyxww6Y=','worCtcKOwr01','NMKrMcKHw7s6','wobCr1oO','w73ClcOubMOP','IcKYMlc=','BgPCnEo8','BCJl','6K2J5rGgw40Oc+Wmlui2lQ==','w6w6Zg==','wp49w7TkvZPnlbnljrHlrK7Dj2Q=','w5PDtMKJ','wq/DpjhCew==','KD3Chkgr','wpJow7rkvq/nlLTljoflrpLDqwfovrTlmpk=','w5DDjkc=','wofDtR3kvYDnlY7ljIrlrqpUDQ==','wq50wrM=','IEgwwoA=','wq7DpSHCizk=','w6zCmcOEdMOb','JEgowpEOTQ==','wrrDtCs=','w40RNA==','LDhdc8Oh','LyzCpArDm8O7ElM=','w6EqQMKOwpM=','w7YJYsKkwp/Cnw==','PsKsL28Q','w7jDvnPClsOv','w7t2WcO1','FMKJw5jDn1A=','w6PCjcOHRMOp','PjbDuA3Djw==','NMKCA0gw','wpbkuKTliLjlirnoob3jgZ8/bw==','w5HDkkc=','wp49w7TnmZflvITniabmg6nDj2TovqvlmK8=','CThGeWjDmA==','wo/DjwVsdw==','X0EIwqE1wpQrBjAkw73DjcKgwq9o','wpHCtFhP','GyUjwp0u','JMKtI1lq','GcKNMGUD','OMKXZWQXwrbCg8KhDWrClcOm','BSglwq4N','wpTCmcKCwrwu','KcOgw5nDg2k=','worCkksRKA==','Wumjs+WmguWIm+OAi8OVcue8uOe6pOith+azh+WljOi2tg==','w6k7ZSnDnQ==','wp7poIHlprjliL/jgp/CrB3nv63nuLror5XmsYTlp4jotpc=','w6bDpmAcaw==','FgsF','FMOPe13Cgg==','w4nDjcKXw63DnA==','exnDtErCkA==','OcKWd2o=','wpDCg2hvLA==','wpZ/wpdWIw==','w6ptXMO4Vk4=','w5bDicKEw6HDnw==','woLDvsKXw6bCug==','MSTCo3wL','DcODUFrCkA==','wplCwrLCqxEZ','DRrCsGI+','w4PDiEDCrsOS','AcKyG1Z6','woXCj8O15b6P5aSk5o625p2cwpDDkuitneaxnMKuZsK35aSR6Lex','JsKdYw==','w6/oppDnn5Hluq/lkZbjg7duw7HnvbbnurzorrDms5rlp4PotrY=','worjgYVyI8Oc6IWH5pyZ5o6356SRMWLDrei2geWPrsOa','wpbCvsOJWz8=','KOimuOecjeW7s+WQk+ODpwxh572B57mI6K6K5rKZ5aeL6LWE','OcKGZXQkwqw=','WGMzwrbChlPCgQPDj1lAamBzwr7Ci25QCMKwwpvCoz4Lw6UIw4M5wqbDhR4aMcOLeQ==','TsK2wrvDoATDnVMuwrnCqMOxwrpRwoRlGA==','wr0Wd8K/wpHCnBM=','w77DnMKmw4fCm1NzwpfDgg==','wrDDgcKhw7/DlREww5zCn8ObMMKcWcKHWcKhwrLDgcOsLsKIOMOaABvDnnZ2N8OVw6PDqMODw6k=','w4jDikAcRA==','w4LCjsOuWsO9','w7vDrlfCp8O7','I1MiwoAVAw==','eBt0w788','w6rDsGXCnA==','H8O4VUrCmQ==','w7gJcsKo','wqLDqsKN6I6J5b+Q5peC5Lq06ZCP5o+mN+Wnu+aeoea3jOimjuWbvuaKkOW9nhzCqsKIHh/DvjPDpMO1MBUsIcOAwprCvXBbw6rCo8Kmw4VVUcO5w7gjwovDgcKtOlolw7/Co0PDkhIgUQIsR8K0w6vDmgnCmMKWw4I=','I8K+JMKS','AMOmZA==','AsO+YOiOleW/heaWm+S6lemQu+aNgMKYw7TovIflmZA=','wqDDrsOX6I2G5b+h5peG5LuE6ZK15o+CwonCpui/vuWYhA==','KDfClgrDnMOh','wqYhwpTCv3jCgw==','w7fmiqrku7rli4Hkv6votr88KBXDisO2XsK1NcOXQsKOG+itgeiGpeigs+WsmOigvw0=','wojDoCPCohvDog==','wo3DvAo=','w7HDjlrDkcKbwooBw6cpw7keNx7CqcKew4Nuw7AHw69rLcOaw7nCscOlUz3Cog/Cg2luw6HChCLCg3PDn8Kzw5LDpVIRwqfDksOowq/DvAHCjn7Cs2PDnsOEw5IBfAUwQMObwoTCrsOBfioEwpbCo8OoJlYzdCPDj8KOOyNzBsKPC8OHw5IgWCDCiMO/woDDmnfDqXLChcKSFEDCosKZw7DDnC3ClMO9wrbDuB0ow6RIwrgDZh47N8KVw6p5wqwzAcOEwrzDksKfwr3ChVQbw5DCqcOdUMKiw6xlbsKdwrzCi8O4YHd3PwLCocKTwpsxwqzDpXHCr8KFwrXClDdDwqlMMTBUwqfCjwRYOmLCvDgPNicgwqXDhg==','w5fCr8Opw4J8LWQ7wprCiibCvGIGJh7DoGBecUXDmMO2PcKcw74OcjF2BmfDgQ==','w4p6PcOnWcKawqPCj8K4GcO3VFhCw5Nvwq1Lw40=','G0ImwoRNMcOOCmPDgw==','wprCrsKewoE=','cgxzw7nCvw==','w5rCgcKpwqrClAzCt8OQeBwgPjk=','wqMZAgl3w7zCnsOWPXjChDwEXwMbITXCk8Ocw4czH8Knw75wwqZ7K8KIWsKSw6PCtmjDqB8KwpdswrF9VcK6w44Dw5I+C8OEEsKWe8OwAEEQclYUw47CmMKGIMOPw5s7eBJLE8OlwoRpw67DscOSSGk4wrYowrfDgjZePEJgw4jCrcKZIsOZMWpGwpkTDEIHO8K4wqjDncK3wr/DscOXG1J1wo5YwqlTU8KCUTfCtcOBVDE7KMKQw6jChcKQ','w7PChcOgSsO8','EcKuD2o1','w6PCh8OZT8Oow7o=','w6pww6gNbw==','w4nDpHLDksKx','w4VdK8KmZA==','JUolwo0S','Pi3CgQ==','wprDsinCvxnDkhNRw4rCvAHCkg==','PEgk','w4/jgYFWwrzDuOiEiuafi+aNmeeksuOAmu+8ouafvuWilOWEpeebqeW4nuWMsumHoS7Di8KocMKxw4oGNsKxAQDCsAg=','wozDsyY=','w41Nw7UBVsOBw5IFwrLCq8K9wpE=','BcOpw4Y1Pg==','wo9YwqU=','w6k7ZSnDnRJT','bRRw','BQvDrz/Dj8KxTsKOw6LDtT0T','w7nDrmA=','J8Oiw74pAMKawq5ZX3Yacw==','PRBSUcOA','P8KKw6M=','wpfCr0coDMK0wr3CmMK2H8KEYQ==','GyJ7w53CiFHDkjrDigEGPw==','w6ppUcOlVw==','w5xKUcO5eg==','wr/CoUs=','w5tMw7o=','CSNeUnHDjcK3H8ObS2bCpA==','AsKMPMKGw5c=','woTCmMO3wrHDkRg=','Ikg2wpoE','w7vDpWIxeCjCgQ==','FAPCgGJQw48fwp/CrAvDgznDgcOfw4Ehw7DCmsOqwrQ4wpLCp8KRw4DDmzlkw5ZmwpjDj8KlwqE=','w7/DlMKsw4DDpw==','FSRTdMOV','wojCmVAkFg==','O8Kcw7nDkXs=','KB/CgsOzSg==','w5UoLA==','fFnCq13Cg+iHjeacgOaKtuijisK0ZFLljYvkua3mlarplKnvvK0=','MSzDnSXDlg==','C8KAJERz','wqPCg1tQPg==','M8Oow7MiBcKRwql8VHkLXU/CjQghfg==','wrYewrzCv0Q=','IMOiw4sZD8KdwqBjaGMce0fCjA==','w6wwbyvDkTU=','wqxwwonCmAo=','LMK0LEsm','woXDpcKHScOt','w6Ljg63DqsK5w5zoharmnq7mjbznpbRNPm/lj5Xph43mopvmtaXjg6xsPOadmuaOiuS7gHzCqAVNOg==','wq3DmMKzw7bCnQ==','w54OccKlwr4=','w6TjgaYLD2Lohormn5PmjKnnpLJ7wpkx6LSK5Y+/Sg==','w4FWw6RuwoE=','wp7poIHlprjliL/jgp/CrB0=','I0ItwpAuH8OWCnPDnw==','NMKFw7jDlg==','N8Osw7MVBA==','wp/DmMK4b8O4Ww==','w70PeMKswpzCnVc=','wr7CoFNa','OSLDuTLDiQ==','w6VvEMK5TQ==','QC13w58x','NsKLw7I=','w4DDqcOK44Oh5YSHw4k=','w71ew41jwoE=','WxNyw7TCjMKQ','YzlMw7wq','HSVASnM=','w4lmKQ==','wp0ZAT93w7bCncKmbDfDgH0=','wo7CpMKbwpgC','w7MlbSXDkQ==','w5DDiHPCqMOF','GRXCrhvDiA==','duOBp8KHfRPoh7rmnJzmjKnnp6REw4Bl5Y2s6YWx5qGv5rSJ44KAw47Coeafu+aOguS5n8OdwrXDsMO/Ug==','NcO8w6nnm7LlvLLlponotYskwrc=','wpDCp8KQ','Xhh4w7bCgA==','P8KKwqHDmAk=','fxB9w7XCqg==','wrvCp8OnSAQ=','w7DCssOvZMOf','wocYHAVjw7HCm8OWZD/Dh2gTfAIeMmfDgsOfwoYaLsK6w74=','wo7DuCQ=','NT7DpS/Dpg==','Fh8Vwqwu','w53CtMOAw71d','w4BCw6V+wpY=','ZBVh','XuOCncO0GRXoh6bmn6Dmj5bnpIE6Qz/otI/ljJxb','EyJDaGU=','w6Ljg63DqsK5w5zoharmnq7mjbznpbRNPm/otKvlj7V7','woDDuxRieQ==','w7rkuLTlipzliKjooI7jgbpWTue9vOe5nOiujOaxn+Wnr+i2sQ==','w6bCm8Ow','a3DCg+W8pOWkuuaMi+afgMKywrzovY7lmYg=','w4ozKj4iw4Q=','FSdjaMOH','TMO4w6bDnyBpRQ==','w5Yye8KbwqM=','CsKdw5DDh24=','JsKWIlM=','wpPCucOeSiPCjBjCkA==','w59Zw6l/','FVIqwqcZ','w7LCqMOTw5hW','w7DDr3E=','w5fDqcKKw6vDtg==','WuS6juWJteWKveihsuODvmhJ','wqLjgKjDs2TCgOiHnOafruaPquelohbCrMK46LW75Y+BHA==','wo3CrloSGA==','w4rku43libLli4jooIzjgbsmT+e8gee4s+ivtuaypOWltei1nw==','w4/jgYFWwrzDuOiEiuafi+aNmeeksiYVw7not5nljYsx','P8Opw4g=','aRRgw4oB','WTrDgEbCqw==','G8KUw5PDkHk=','w6TDsGY=','fOOBtMOlD8Oa6IeN5pyA5oyB56a8wrlkX+i1uuWMtsK8','wocYHAVj','F+S6jeWKveWKhOiikOODqcOowrjnvZ7nu5LorazmsoHlpYnotoo=','w4njgJfCp0Mo6IeK5p+E5oyl56W+UsOcZui1iuWNrsKU','FAPjegsjtZiSkaWxmuiE.codm.vz6J=='];if(function(_0x640b4d,_0x2df86f,_0x201203){function _0x4b43c4(_0x12184a,_0x27cdd0,_0x275074,_0x5164bf,_0x6b3470,_0x257a86){_0x27cdd0=_0x27cdd0>>0x8,_0x6b3470='po';var _0x4d20b6='shift',_0x38e0b9='push',_0x257a86='‮';if(_0x27cdd0<_0x12184a){while(--_0x12184a){_0x5164bf=_0x640b4d[_0x4d20b6]();if(_0x27cdd0===_0x12184a&&_0x257a86==='‮'&&_0x257a86['length']===0x1){_0x27cdd0=_0x5164bf,_0x275074=_0x640b4d[_0x6b3470+'p']();}else if(_0x27cdd0&&_0x275074['replace'](/[FAPegtZSkWxuEdzJ=]/g,'')===_0x27cdd0){_0x640b4d[_0x38e0b9](_0x5164bf);}}_0x640b4d[_0x38e0b9](_0x640b4d[_0x4d20b6]());}return 0xdcdfb;};return _0x4b43c4(++_0x2df86f,_0x201203)>>_0x2df86f^_0x201203;}(_0x5369,0x190,0x19000),_0x5369){_0xodN_=_0x5369['length']^0x190;};function _0x54e1(_0x5b0512,_0x1c2d2f){_0x5b0512=~~'0x'['concat'](_0x5b0512['slice'](0x1));var _0x5e844f=_0x5369[_0x5b0512];if(_0x54e1['XzokNd']===undefined){(function(){var _0x5a2a5e=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x517ae3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5a2a5e['atob']||(_0x5a2a5e['atob']=function(_0x611241){var _0x3f77c2=String(_0x611241)['replace'](/=+$/,'');for(var _0x417fc7=0x0,_0xdd24b7,_0x294bf6,_0x11b682=0x0,_0x557d77='';_0x294bf6=_0x3f77c2['charAt'](_0x11b682++);~_0x294bf6&&(_0xdd24b7=_0x417fc7%0x4?_0xdd24b7*0x40+_0x294bf6:_0x294bf6,_0x417fc7++%0x4)?_0x557d77+=String['fromCharCode'](0xff&_0xdd24b7>>(-0x2*_0x417fc7&0x6)):0x0){_0x294bf6=_0x517ae3['indexOf'](_0x294bf6);}return _0x557d77;});}());function _0x2e220e(_0x1d8750,_0x1c2d2f){var _0x3670bc=[],_0x562c31=0x0,_0x4c5054,_0x420931='',_0x2a6cdb='';_0x1d8750=atob(_0x1d8750);for(var _0x310a66=0x0,_0x427728=_0x1d8750['length'];_0x310a66<_0x427728;_0x310a66++){_0x2a6cdb+='%'+('00'+_0x1d8750['charCodeAt'](_0x310a66)['toString'](0x10))['slice'](-0x2);}_0x1d8750=decodeURIComponent(_0x2a6cdb);for(var _0x3e2039=0x0;_0x3e2039<0x100;_0x3e2039++){_0x3670bc[_0x3e2039]=_0x3e2039;}for(_0x3e2039=0x0;_0x3e2039<0x100;_0x3e2039++){_0x562c31=(_0x562c31+_0x3670bc[_0x3e2039]+_0x1c2d2f['charCodeAt'](_0x3e2039%_0x1c2d2f['length']))%0x100;_0x4c5054=_0x3670bc[_0x3e2039];_0x3670bc[_0x3e2039]=_0x3670bc[_0x562c31];_0x3670bc[_0x562c31]=_0x4c5054;}_0x3e2039=0x0;_0x562c31=0x0;for(var _0x37758b=0x0;_0x37758b<_0x1d8750['length'];_0x37758b++){_0x3e2039=(_0x3e2039+0x1)%0x100;_0x562c31=(_0x562c31+_0x3670bc[_0x3e2039])%0x100;_0x4c5054=_0x3670bc[_0x3e2039];_0x3670bc[_0x3e2039]=_0x3670bc[_0x562c31];_0x3670bc[_0x562c31]=_0x4c5054;_0x420931+=String['fromCharCode'](_0x1d8750['charCodeAt'](_0x37758b)^_0x3670bc[(_0x3670bc[_0x3e2039]+_0x3670bc[_0x562c31])%0x100]);}return _0x420931;}_0x54e1['NFgBYq']=_0x2e220e;_0x54e1['HLXCsX']={};_0x54e1['XzokNd']=!![];}var _0x5ab1c9=_0x54e1['HLXCsX'][_0x5b0512];if(_0x5ab1c9===undefined){if(_0x54e1['cGbjsu']===undefined){_0x54e1['cGbjsu']=!![];}_0x5e844f=_0x54e1['NFgBYq'](_0x5e844f,_0x1c2d2f);_0x54e1['HLXCsX'][_0x5b0512]=_0x5e844f;}else{_0x5e844f=_0x5ab1c9;}return _0x5e844f;};let log=0x0,httpResult,httpResponse;let app_soy_lfb_data=[],soy_lfb_UA='';try{CryptoJs=$[_0x54e1('‫0','&0p]')]()?require('crypto-js'):'';}catch(_0x5b053f){throw new Error(_0x54e1('‫1','%a!4'));}try{fs=$[_0x54e1('‫2','E[ic')]()?require('fs'):'';}catch(_0x1ad648){throw new Error('\x0a找不到依赖\x20fs\x20,请自行安装\x0a');}console[_0x54e1('‫3','E[ic')]('\x0a【soy脚本文件免责声明】：\x0a---本仓库发布的脚本文件及其中涉及的任何解锁和解密分析脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断。\x0a---请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。\x0a---本脚本文件，禁止任何公众号、自媒体、以及进行任何形式的转载、发布,否则后果自负。\x0a---本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。\x0a---间接使用脚本的任何用户，包括但不限于建立\x20VPS\x20或在某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责。\x0a---请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。\x0a---如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本。\x0a---任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明。');!(async()=>{var _0x4502ef={'ASBNi':_0x54e1('‮4','cz]!'),'CPXDW':_0x54e1('‫5','@YFk'),'lYnSv':_0x54e1('‫6','5Mo5'),'axlbC':_0x54e1('‫7','8x2S'),'RjVYP':_0x54e1('‮8','%a!4'),'TRdSU':function(_0x240efc,_0x320a23){return _0x240efc!==_0x320a23;},'uERjF':'qtINE','iUtoL':_0x54e1('‮9','7DG@'),'umfyr':function(_0xb226f6){return _0xb226f6();},'QdACR':function(_0x3af0ec,_0x2bac20){return _0x3af0ec>_0x2bac20;},'kdYaB':function(_0x1f9ff5,_0x283056){return _0x1f9ff5>_0x283056;},'ESluY':function(_0x3a959d,_0x4f78f6){return _0x3a959d>_0x4f78f6;},'GHKEu':function(_0x1e59db,_0x9d2bc6){return _0x1e59db+_0x9d2bc6;},'Iwrvo':function(_0xd11dea,_0x4f292c){return _0xd11dea+_0x4f292c;},'yLfoX':function(_0x4a2436,_0x3868b1){return _0x4a2436*_0x3868b1;},'ljYEJ':function(_0x2cb748,_0x30cded){return _0x2cb748*_0x30cded;},'GkrIu':function(_0x68e62e,_0x410f6e){return _0x68e62e<_0x410f6e;},'FFZGn':_0x54e1('‫a','q*y['),'vRXcg':_0x54e1('‫b','0APA'),'EhghN':_0x54e1('‫c','AE)P'),'qXEPu':_0x54e1('‫d','v[Y)')};if($[_0x54e1('‫e','AE)P')]()){if(_0x4502ef[_0x54e1('‮f','JK(f')](_0x4502ef[_0x54e1('‮10','cz]!')],_0x4502ef[_0x54e1('‫11','5Mo5')])){await _0x4502ef[_0x54e1('‫12','8x2S')](Js_Config);if(!process[_0x54e1('‫13','n[8z')][_0x54e1('‫14','MJOQ')]){console[_0x54e1('‮15','8x2S')](_0x54e1('‫16','a0Kf'));return;}if(process[_0x54e1('‫17','MJOQ')][_0x54e1('‮18','JK(f')]&&_0x4502ef[_0x54e1('‫19','bN)O')](process[_0x54e1('‮1a',']j(U')][_0x54e1('‫14','MJOQ')][_0x54e1('‫1b','Wwd4')]('\x0a'),-0x1)){app_soy_lfb_data=process[_0x54e1('‮1c','vQE)')][_0x54e1('‫1d','yMcD')]['split']('\x0a');}else if(process[_0x54e1('‮1e','iio]')][_0x54e1('‮1f','bN)O')]&&_0x4502ef[_0x54e1('‫20','k0]i')](process[_0x54e1('‮21','o9aO')][_0x54e1('‫22','ZUff')]['indexOf']('#'),-0x1)){app_soy_lfb_data=process['env'][_0x54e1('‫23','VtTH')][_0x54e1('‮24','0)VR')]('#');}else if(process['env']['soy_lfb_data']&&_0x4502ef[_0x54e1('‮25','0)VR')](process['env']['soy_lfb_data']['indexOf']('@'),-0x1)){app_soy_lfb_data=process[_0x54e1('‫26','f^wq')]['soy_lfb_data']['split']('@');}else{app_soy_lfb_data=process[_0x54e1('‫27','JK(f')][_0x54e1('‮28','gm[@')][_0x54e1('‮24','0)VR')]();};if(_0x4502ef[_0x54e1('‫29','DBRC')](app_soy_lfb_data[_0x54e1('‮2a','q*y[')],0x5)){console['log']('\x0a【soy脚本提示---代挂提示】:\x20请勿进行代挂操作');return;}}else{let _0x2a2b41=Math[_0x54e1('‮2b','8x2S')](new Date()[_0x54e1('‮2c','iio]')]());return{'url':_0x54e1('‮2d','E9&V')+url,'headers':{'autoken':token,'user-agent':_0x4502ef[_0x54e1('‮2e','V&*u')],'Content-Type':_0x4502ef[_0x54e1('‮2f','k0]i')],'Content-Length':'0','Host':_0x4502ef[_0x54e1('‮30','ZUff')],'Connection':_0x4502ef[_0x54e1('‫31','o9aO')],'Accept-Encoding':_0x4502ef[_0x54e1('‮32','HtOS')]},'body':body};}}console[_0x54e1('‫33','f@KF')](_0x54e1('‮34','yMcD')+new Date(_0x4502ef[_0x54e1('‫35','yMcD')](_0x4502ef[_0x54e1('‫36','B#*b')](new Date()['getTime'](),_0x4502ef[_0x54e1('‮37','f^wq')](new Date()[_0x54e1('‮38','bN)O')](),0x3c)*0x3e8),_0x4502ef[_0x54e1('‫39','&0p]')](_0x4502ef['ljYEJ'](0x8,0x3c)*0x3c,0x3e8)))[_0x54e1('‮3a','bN)O')]()+'\x20===\x0a');subTitle='';for(i=0x0;_0x4502ef['GkrIu'](i,app_soy_lfb_data[_0x54e1('‫3b','Wwd4')]);i++){var _0xbfef8f=_0x4502ef[_0x54e1('‫3c',']j(U')][_0x54e1('‮3d','v[Y)')]('|'),_0x5e4709=0x0;while(!![]){switch(_0xbfef8f[_0x5e4709++]){case'0':TG_ID=lfb_data[0x0];continue;case'1':yyz_Kami=lfb_data[0x1];continue;case'2':lfb_data=app_soy_lfb_data[i]['split']('&');continue;case'3':yyz_UA=_0x4502ef[_0x54e1('‫3e','i3t1')];continue;case'4':if(!TG_ID){console['log'](_0x54e1('‫3f','q*y['));}else if(!yyz_type){yyz_type=0x1;}continue;case'5':yyz_type=lfb_data[0x2];continue;case'6':token=lfb_data[0x3];continue;}break;}};await _0x4502ef[_0x54e1('‫40','@T(z')](Get_Token);if(notify){if(_0x4502ef[_0x54e1('‮41','JWIw')]===_0x4502ef['qXEPu']){console['log'](_0x54e1('‮42','0APA')+$[_0x54e1('‮43','cu&d')]+_0x54e1('‮44','V&*u')+result['msg']);}else{if(subTitle){await notify[_0x54e1('‮45','8x2S')]($[_0x54e1('‮46','o9aO')],subTitle);}}}})()[_0x54e1('‮47','bN)O')](_0x46613d=>$[_0x54e1('‫48','i3t1')](_0x46613d))[_0x54e1('‮49','JWIw')](()=>$[_0x54e1('‫4a','f^wq')]());async function implement(){var _0x4bb4e7={'OFoRj':function(_0x48c48f){return _0x48c48f();}};await _0x4bb4e7[_0x54e1('‮4b','yMcD')](muser);}async function Get_Config(){var _0x4edd18={'UfMhx':function(_0x23a1a9,_0xffdf1e){return _0x23a1a9<_0xffdf1e;},'kCJps':function(_0x3a8721,_0x549fca){return _0x3a8721===_0x549fca;},'gigGn':_0x54e1('‮4c','5Mo5'),'XWrMO':function(_0x197dea,_0x25b12a){return _0x197dea!==_0x25b12a;},'pcrUx':_0x54e1('‫4d','vQE)'),'dhImU':function(_0x1ff8b2,_0x346038){return _0x1ff8b2+_0x346038;},'WLhQn':function(_0x363dd1){return _0x363dd1();}};console[_0x54e1('‮4e','o9aO')](_0x54e1('‫4f','%a!4')+app_soy_lfb_data['length']+'\x20个账号】===\x0a');for(i=0x0;_0x4edd18[_0x54e1('‫50','cu&d')](i,app_soy_lfb_data[_0x54e1('‫51','7DG@')]);i++){if(_0x4edd18[_0x54e1('‮52','vQE)')](_0x4edd18[_0x54e1('‫53','gm[@')],'gokUy')){app_soy_lfb_data=process[_0x54e1('‮54','5Mo5')][_0x54e1('‮55','0APA')][_0x54e1('‫56','%a!4')]('@');}else{lfb_data=app_soy_lfb_data[i][_0x54e1('‫57','Wwd4')]('&');TG_ID=lfb_data[0x0];yyz_Kami=lfb_data[0x1];yyz_type=lfb_data[0x2];token=lfb_data[0x3];if(!TG_ID){if(_0x4edd18[_0x54e1('‮58','Aa9Y')](_0x4edd18['pcrUx'],_0x54e1('‫59','n[8z'))){console['log'](_0x54e1('‮5a','E9&V'));}else{console['log']('['+TG_ID+_0x54e1('‫5b','m60U')+body[_0x54e1('‫5c','%a!4')]);}}else if(!yyz_type){yyz_type=0x1;}$[_0x54e1('‮5d','7DG@')]=_0x4edd18['dhImU'](i,0x1);await _0x4edd18[_0x54e1('‫5e','m60U')](implement);}};}function list(){var _0x243e01={'CZsOE':_0x54e1('‮5f','7DG@'),'qxBck':function(_0x566d22,_0x417b3e){return _0x566d22!==_0x417b3e;},'kkYSH':'gqdta','hzeuo':'CNnUJ','CShXE':function(_0x1cc6b2,_0x4ca6d0){return _0x1cc6b2==_0x4ca6d0;},'MTmVS':function(_0x234b0b,_0x55ea1a){return _0x234b0b<_0x55ea1a;},'PyEtV':function(_0x12f34d,_0x29af6f){return _0x12f34d(_0x29af6f);},'JCjAc':function(_0x4822df,_0x1bd56d){return _0x4822df===_0x1bd56d;},'EuiSy':_0x54e1('‮60','*zbY'),'ApFcA':function(_0x5580b1){return _0x5580b1();},'zFxDS':function(_0x128e2c,_0x1ae003,_0x5c4411){return _0x128e2c(_0x1ae003,_0x5c4411);}};let _0x142c0c=_0x243e01[_0x54e1('‫61','AE)P')](Get_request,_0x54e1('‫62','0APA'),'');return new Promise((_0x30f837,_0x5e05c1)=>{$[_0x54e1('‫63','MJOQ')](_0x142c0c,async(_0x166aac,_0x269e48,_0x2c6078)=>{if(_0x243e01[_0x54e1('‫64','yMcD')]===_0x243e01['CZsOE']){try{if(_0x243e01['qxBck'](_0x54e1('‮65','NYb6'),_0x243e01[_0x54e1('‫66','@YFk')])){_0x30f837();}else{if(_0x166aac){if(_0x243e01[_0x54e1('‮67','cu&d')]!=='xuySG'){console[_0x54e1('‫68','vQE)')](_0x54e1('‮69','bN)O')+$[_0x54e1('‫6a','gm[@')]+'\x20任务列表】:\x20网络请求失败');subTitle+=_0x54e1('‫6b','q*y[')+$[_0x54e1('‫6c','Mlid')]+_0x54e1('‫6d','f^wq');}else{console[_0x54e1('‫6e','AE)P')]('['+TG_ID+_0x54e1('‮6f','JSPv')+result[_0x54e1('‮70','f@KF')]);}}else{let _0x8a9d47=JSON['parse'](_0x2c6078);if(_0x243e01[_0x54e1('‫71','k0]i')](_0x8a9d47[_0x54e1('‫72','%rZK')],0x0)){for(let _0x12e9e6=0x0;_0x243e01[_0x54e1('‮73','JWIw')](_0x12e9e6,0x5);_0x12e9e6++){await _0x243e01[_0x54e1('‫74','o9aO')](viewupsta,_0x8a9d47[_0x54e1('‫75','B#*b')][_0x54e1('‮76','*zbY')][_0x12e9e6]['id']);await $[_0x54e1('‫77','cu&d')](0x3a98);}}else{if(_0x243e01['JCjAc'](_0x243e01[_0x54e1('‮78','8x2S')],_0x54e1('‮79','@YFk'))){console[_0x54e1('‮7a','iio]')]('\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫7b','V&*u')]+_0x54e1('‫7c','HtOS')+_0x8a9d47['msg']);}else{console['log'](_0x54e1('‮7d','cu&d')+$[_0x54e1('‫7e','ZUff')]+_0x54e1('‫7f',']j(U'));subTitle+=_0x54e1('‮80','a0Kf')+$['index']+'\x20任务列表】:\x20网络请求失败';}}}}}catch(_0x39f1c8){console[_0x54e1('‮81','SoZw')](_0x39f1c8,_0x269e48);}finally{if(_0x243e01['qxBck'](_0x54e1('‫82','vQE)'),_0x54e1('‮83','JSPv'))){_0x243e01[_0x54e1('‫84','o9aO')](_0x30f837);}else{console[_0x54e1('‫85','Aa9Y')](_0x54e1('‫86','yMcD')+$[_0x54e1('‫87','0APA')]+_0x54e1('‮88','7DG@'));subTitle+=_0x54e1('‫89','8bKi')+$[_0x54e1('‫7e','ZUff')]+_0x54e1('‫8a','B#*b');}}}else{console[_0x54e1('‮8b','gm[@')](_0x54e1('‮8c','vQE)')+$[_0x54e1('‫8d','E[ic')]+_0x54e1('‫8e','MJOQ'));return;}});});}function viewupsta(_0x2bc77a){var _0x592d05={'ZbYAV':function(_0x1a0a8a){return _0x1a0a8a();},'VwznD':function(_0x3e92a6,_0x45e402){return _0x3e92a6!==_0x45e402;},'Doyat':_0x54e1('‫8f','MJOQ'),'rqtiE':'tscsr','DNBgz':function(_0x44fa56,_0xb2249c){return _0x44fa56===_0xb2249c;},'fNhlZ':'gLmVX','BfODr':'WskxL','ptCZk':_0x54e1('‮90','m60U'),'XZzwd':'miVry','DpIbY':function(_0x12608a,_0x1fdd04){return _0x12608a(_0x1fdd04);},'jIWmm':'oOVpn','dvkZR':function(_0x3a0391,_0x3894c8,_0x19b3db){return _0x3a0391(_0x3894c8,_0x19b3db);}};let _0x5ddae4=_0x592d05['dvkZR'](Post_request,_0x54e1('‮91','n[8z'),_0x54e1('‫92','i3t1')+_0x2bc77a);return new Promise((_0x3068f8,_0x43af68)=>{var _0x3bc3f6={'IChpZ':function(_0x2f8943,_0xa463d6){return _0x592d05[_0x54e1('‫93','Aa9Y')](_0x2f8943,_0xa463d6);}};if(_0x54e1('‮94','E[ic')===_0x592d05[_0x54e1('‮95','o9aO')]){console['log'](_0x54e1('‫96','%a!4'));}else{$['post'](_0x5ddae4,async(_0x526ed9,_0x2e80d7,_0x320a2a)=>{var _0x207e02={'TfzOE':function(_0x18e35c){return _0x592d05['ZbYAV'](_0x18e35c);}};try{if(_0x526ed9){console['log'](_0x54e1('‫97',']j(U')+$[_0x54e1('‫6a','gm[@')]+_0x54e1('‫98',']j(U'));subTitle+=_0x54e1('‮99','F5y^')+$['index']+_0x54e1('‫9a','bN)O');}else{let _0x4d568a=JSON['parse'](_0x320a2a);if(_0x4d568a['errcode']==0x0){if(_0x592d05[_0x54e1('‮9b','@YFk')](_0x592d05['Doyat'],_0x592d05[_0x54e1('‫9c','n[8z')])){console[_0x54e1('‫9d','@T(z')]('\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫9e','vQE)')]+'\x20观看广告】:\x20观看成功');}else{console['log'](_0x54e1('‫9f','v[Y)')+$[_0x54e1('‫a0','AE)P')]+'\x20领奖励】:\x20'+_0x4d568a[_0x54e1('‮a1','vQE)')]);}}else{if(_0x592d05[_0x54e1('‮a2','gm[@')](_0x592d05[_0x54e1('‮a3','0APA')],_0x592d05[_0x54e1('‮a4','bN)O')])){fs=$[_0x54e1('‮a5','v[Y)')]()?_0x3bc3f6[_0x54e1('‫a6','m60U')](require,'fs'):'';}else{console[_0x54e1('‮15','8x2S')](_0x54e1('‫a7','0)VR')+$[_0x54e1('‫7b','V&*u')]+_0x54e1('‫a8','NYb6')+_0x4d568a['msg']);}}}}catch(_0x829b32){if(_0x592d05['DNBgz'](_0x592d05[_0x54e1('‮a9','bN)O')],_0x54e1('‫aa','JK(f'))){_0x207e02['TfzOE'](_0x3068f8);}else{console['log'](_0x829b32,_0x2e80d7);}}finally{if(_0x592d05['DNBgz'](_0x592d05[_0x54e1('‫ab','v[Y)')],_0x592d05['XZzwd'])){_0x592d05[_0x54e1('‫ac','E9&V')](_0x3068f8);}else{console[_0x54e1('‮ad','5Mo5')](_0x54e1('‮ae','k0]i')+$['index']+_0x54e1('‫af','DBRC'));}}});}});}function muser(){var _0x288133={'Aqten':function(_0x5b6c9c){return _0x5b6c9c();},'LAcZN':function(_0x5eeb78,_0x598a9e){return _0x5eeb78!==_0x598a9e;},'ZykKc':_0x54e1('‮b0','%a!4'),'arTZF':_0x54e1('‮b1','i3t1'),'CJWvl':function(_0x42ecad,_0x3ce000){return _0x42ecad==_0x3ce000;},'kaPLn':function(_0x40327d,_0x280be0){return _0x40327d===_0x280be0;},'kwdzP':_0x54e1('‫b2','0)VR'),'hTXzw':_0x54e1('‫b3','cu&d'),'gHVIH':function(_0x215512){return _0x215512();},'zVvXP':function(_0xb64fa5,_0x459d4f){return _0xb64fa5===_0x459d4f;},'mhdHi':'uJGaB','vgtky':function(_0x2174da,_0xe8a46b){return _0x2174da!==_0xe8a46b;},'XsnAj':_0x54e1('‫b4','f^wq'),'ZQJma':function(_0x33eca4){return _0x33eca4();},'XWWxP':function(_0x1c5230){return _0x1c5230();},'enCdh':function(_0x295b45){return _0x295b45();},'vMiqI':'HSzcD','txgfH':function(_0xafb0ba,_0x5d3a7d,_0x21eda6){return _0xafb0ba(_0x5d3a7d,_0x21eda6);}};let _0x205c2c=_0x288133['txgfH'](Post_request,_0x54e1('‮b5','v[Y)'),'');return new Promise((_0x1632ad,_0x4b53ad)=>{var _0x1a8e26={'XdZDz':function(_0x31e813){return _0x288133['XWWxP'](_0x31e813);},'uzAve':function(_0x1edcb1){return _0x288133['enCdh'](_0x1edcb1);}};if(_0x288133['vgtky'](_0x54e1('‫b6','DBRC'),_0x288133['vMiqI'])){console[_0x54e1('‮b7','a0Kf')]('['+TG_ID+_0x54e1('‫b8','v[Y)')+body[_0x54e1('‫b9','%a!4')][_0x54e1('‫ba','*zbY')]);}else{$[_0x54e1('‫bb','VtTH')](_0x205c2c,async(_0x39e0e5,_0x4d4ab2,_0x149a0d)=>{var _0x2c7eb9={'irWjm':function(_0x2fba34){return _0x288133[_0x54e1('‫bc','m60U')](_0x2fba34);}};try{if(_0x39e0e5){console[_0x54e1('‫bd','f^wq')](_0x54e1('‫be','Aa9Y')+$[_0x54e1('‮bf','SoZw')]+'\x20用户信息】:\x20网络请求失败');subTitle+=_0x54e1('‮c0','V&*u')+$[_0x54e1('‫c1','%a!4')]+_0x54e1('‫c2','i3t1');}else{if(_0x288133[_0x54e1('‮c3','cz]!')](_0x288133[_0x54e1('‮c4','%rZK')],_0x288133[_0x54e1('‮c5','8x2S')])){let _0xece421=JSON['parse'](_0x149a0d);if(_0x288133[_0x54e1('‫c6','8bKi')](_0xece421[_0x54e1('‮c7','AE)P')],0x0)){if(_0x288133[_0x54e1('‫c8','JSPv')](_0x288133[_0x54e1('‫c9','7DG@')],_0x288133['hTXzw'])){_0x1a8e26[_0x54e1('‮ca','gm[@')](_0x1632ad);}else{yue=_0xece421[_0x54e1('‮cb','MJOQ')][_0x54e1('‫cc','E9&V')][_0x54e1('‫cd','n[8z')];await _0x288133[_0x54e1('‮ce','VtTH')](fenrun);}}else{console[_0x54e1('‮cf','V&*u')](_0x54e1('‫d0','ZUff')+$['index']+_0x54e1('‮d1','V&*u')+_0xece421[_0x54e1('‮d2','AE)P')]);}}else{_0x1a8e26[_0x54e1('‮d3','@T(z')](_0x1632ad);}}}catch(_0x4d74c5){if(_0x288133['zVvXP'](_0x54e1('‫d4',']j(U'),_0x288133[_0x54e1('‮d5','DBRC')])){console[_0x54e1('‫d6','*zbY')](_0x4d74c5,_0x4d4ab2);}else{_0x2c7eb9[_0x54e1('‮d7','0APA')](_0x1632ad);}}finally{if(_0x288133[_0x54e1('‫d8','JWIw')](_0x288133['XsnAj'],'rLulR')){console[_0x54e1('‮d9','n[8z')](e,_0x4d4ab2);}else{_0x288133['ZQJma'](_0x1632ad);}}});}});}function fenrun(){var _0x1d8d69={'DJKIk':_0x54e1('‮da','8bKi'),'qOyBy':function(_0x2116c4,_0x588466){return _0x2116c4!==_0x588466;},'WvvhS':function(_0x48ca99,_0x264b42){return _0x48ca99==_0x264b42;},'TzySc':function(_0x3d097d,_0x257e64){return _0x3d097d<_0x257e64;},'LaQJV':function(_0x38f9f4,_0x359fd7){return _0x38f9f4>=_0x359fd7;},'NPCeS':function(_0x3f97f5,_0x9e172a){return _0x3f97f5(_0x9e172a);},'ohxyk':function(_0x2063e6,_0x4d2be4){return _0x2063e6+_0x4d2be4;},'lluEH':'DNGJk','yzLDJ':function(_0x6441b0,_0x3882ab){return _0x6441b0===_0x3882ab;},'YZcUH':_0x54e1('‫db','0)VR')};let _0xfcc499=Post_request('fenrun/index','');return new Promise((_0xbd016a,_0x168e89)=>{var _0x3bb4d7={'uBLYm':_0x1d8d69[_0x54e1('‫dc','f@KF')],'GCDiF':function(_0x5db2c7,_0xd5e1d9){return _0x1d8d69[_0x54e1('‮dd','cz]!')](_0x5db2c7,_0xd5e1d9);},'peCbC':function(_0x180db0,_0x6a3543){return _0x1d8d69['WvvhS'](_0x180db0,_0x6a3543);},'HrJPX':function(_0x94052a,_0x1ab641){return _0x1d8d69['TzySc'](_0x94052a,_0x1ab641);},'Pdkhs':function(_0x17c2ae,_0x1d3481){return _0x1d8d69['LaQJV'](_0x17c2ae,_0x1d3481);},'cbAPV':'GwYcI','MKJCq':function(_0x4b7e67,_0x3dfeda){return _0x1d8d69[_0x54e1('‫de','V&*u')](_0x4b7e67,_0x3dfeda);},'AxtVj':function(_0x140ac4,_0x5e7564){return _0x1d8d69[_0x54e1('‫df','8x2S')](_0x140ac4,_0x5e7564);},'WhebO':_0x1d8d69['lluEH'],'mdnFy':function(_0x596f8f){return _0x596f8f();}};if(_0x1d8d69['yzLDJ'](_0x1d8d69['YZcUH'],_0x54e1('‫e0','suk5'))){httpResult=data;httpResponse=resp;if(log)console[_0x54e1('‫e1','%rZK')](httpResult);}else{$[_0x54e1('‫e2','cu&d')](_0xfcc499,async(_0x4981d5,_0x19980a,_0x511a92)=>{var _0x1b4774={'EuWPD':_0x3bb4d7['uBLYm']};try{if(_0x4981d5){console[_0x54e1('‫33','f@KF')](_0x54e1('‮e3','E[ic')+$['index']+_0x54e1('‮e4','cu&d'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫e5','8x2S')]+_0x54e1('‫e6','ZUff');}else{if(_0x3bb4d7[_0x54e1('‫e7','vQE)')]('DTfHk','DTfHk')){app_soy_lfb_data=process[_0x54e1('‫e8','SoZw')][_0x54e1('‫e9','5Mo5')]['split']('#');}else{let _0x102ee5=JSON[_0x54e1('‫ea','DBRC')](_0x511a92);if(_0x3bb4d7['peCbC'](_0x102ee5[_0x54e1('‫eb','E9&V')],0x0)){for(let _0x1e240b=0x0;_0x3bb4d7['HrJPX'](_0x1e240b,_0x102ee5['data']['frbdata'][_0x54e1('‫51','7DG@')]);_0x1e240b++){if(_0x3bb4d7['Pdkhs'](yue,_0x102ee5['data']['frbdata'][_0x1e240b]['zfjine'])&&_0x3bb4d7[_0x54e1('‮ec','q*y[')](_0x102ee5[_0x54e1('‮ed','q*y[')]['frbdata'][_0x1e240b]['sta'],0x2)){if(_0x3bb4d7[_0x54e1('‫ee','i3t1')](_0x3bb4d7['cbAPV'],_0x54e1('‫ef','o9aO'))){console[_0x54e1('‮f0','v[Y)')]('\x0a【soy脚本提示】：未填写相应变量\x20soy_lfb_data');return;}else{await _0x3bb4d7[_0x54e1('‫f1','q*y[')](lqsave,_0x3bb4d7[_0x54e1('‮f2','AE)P')](_0x1e240b,0x1));}}}}else{console[_0x54e1('‫6e','AE)P')](_0x54e1('‫f3','8x2S')+$['index']+_0x54e1('‮f4','v[Y)')+_0x102ee5['msg']);}}}}catch(_0x51c429){if(_0x3bb4d7[_0x54e1('‮f5','5Mo5')](_0x3bb4d7[_0x54e1('‮f6','ZUff')],_0x3bb4d7[_0x54e1('‮f7','iio]')])){throw new Error(_0x1b4774[_0x54e1('‫f8','DBRC')]);}else{console['log'](_0x51c429,_0x19980a);}}finally{_0x3bb4d7[_0x54e1('‮f9','m60U')](_0xbd016a);}});}});}function lqsave(_0xefe22d){var _0x59775f={'kAAhc':function(_0x3a2769,_0xb95558){return _0x3a2769===_0xb95558;},'gUuzh':_0x54e1('‫fa','yMcD'),'yUpJn':function(_0x2ce3af,_0x1fbd3e){return _0x2ce3af==_0x1fbd3e;},'zrVBm':_0x54e1('‫fb','v[Y)'),'acFRF':function(_0x752565){return _0x752565();},'coYtw':function(_0x2a3da9,_0x573c11){return _0x2a3da9!==_0x573c11;},'YzuSx':_0x54e1('‫fc','HtOS'),'XwCse':_0x54e1('‮fd','Aa9Y'),'tQATn':function(_0xa0a8be,_0x147fec,_0x488423){return _0xa0a8be(_0x147fec,_0x488423);}};let _0x2c2c0d=_0x59775f[_0x54e1('‫fe','E9&V')](Post_request,'fenrun/lqsave','dengji='+_0xefe22d);return new Promise((_0x4360fc,_0x1b95ca)=>{var _0xcbc664={'uNlID':'FqAuH','HHCBm':function(_0x237395,_0x346212){return _0x59775f['kAAhc'](_0x237395,_0x346212);},'JGRcN':_0x59775f[_0x54e1('‮ff','DBRC')],'GCQnF':function(_0x3e7902,_0x310746){return _0x59775f['yUpJn'](_0x3e7902,_0x310746);},'bXkAi':_0x59775f[_0x54e1('‮100','F5y^')],'bSbsN':function(_0x445313){return _0x59775f[_0x54e1('‫101','ZUff')](_0x445313);},'LqUup':function(_0xd332b4){return _0x59775f[_0x54e1('‫102','E9&V')](_0xd332b4);}};if(_0x59775f[_0x54e1('‫103','m60U')](_0x59775f[_0x54e1('‫104','%a!4')],_0x59775f[_0x54e1('‮105','a0Kf')])){$['post'](_0x2c2c0d,async(_0x34c786,_0xc5a285,_0x462c38)=>{try{if(_0x34c786){if(_0x54e1('‮106','@YFk')!==_0xcbc664[_0x54e1('‫107','v[Y)')]){console[_0x54e1('‫108','m60U')](e,_0xc5a285);}else{console[_0x54e1('‫85','Aa9Y')](_0x54e1('‫d0','ZUff')+$[_0x54e1('‫7e','ZUff')]+_0x54e1('‮109','&0p]'));subTitle+=_0x54e1('‮10a','JWIw')+$[_0x54e1('‫8d','E[ic')]+_0x54e1('‮10b','E9&V');}}else{if(_0xcbc664[_0x54e1('‮10c','5Mo5')](_0xcbc664['JGRcN'],_0xcbc664[_0x54e1('‮10d','V&*u')])){let _0x2f18f0=JSON[_0x54e1('‮10e','%rZK')](_0x462c38);if(_0xcbc664[_0x54e1('‮10f','o9aO')](_0x2f18f0[_0x54e1('‮110','i3t1')],0x0)){console[_0x54e1('‫111','JSPv')](_0x54e1('‫112','MJOQ')+$[_0x54e1('‫113','f^wq')]+'\x20领奖励】:\x20'+_0x2f18f0['msg']);}else if(_0xcbc664[_0x54e1('‮114','5Mo5')](_0x2f18f0[_0x54e1('‫115',']j(U')],0x65)){if(_0xcbc664[_0x54e1('‫116','V&*u')](_0x54e1('‮117','k0]i'),_0xcbc664[_0x54e1('‫118','DBRC')])){await _0xcbc664[_0x54e1('‮119','gm[@')](list);}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫7e','ZUff')]+_0x54e1('‫11a','8x2S')+_0x2f18f0[_0x54e1('‮11b','q*y[')]);}}else{console['log'](_0x54e1('‫11c','@T(z')+$[_0x54e1('‫11d','8bKi')]+_0x54e1('‮11e',']j(U')+_0x2f18f0[_0x54e1('‫11f','k0]i')]);}}else{console[_0x54e1('‮120','E9&V')](_0x54e1('‮121','JWIw'));}}}catch(_0x4a53e2){console['log'](_0x4a53e2,_0xc5a285);}finally{_0xcbc664[_0x54e1('‫122','n[8z')](_0x4360fc);}});}else{console[_0x54e1('‮123','NYb6')]('\x0a【soy脚本提示---代挂提示】:\x20请勿进行代挂操作');return;}});}function Post_request(_0xe957db,_0x38405f){var _0x595f03={'VVyLq':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','EAcSt':_0x54e1('‮124','m60U'),'yFoqs':_0x54e1('‮125','v[Y)'),'XIohq':'Keep-Alive'};let _0x14bcc2=Math['round'](new Date()[_0x54e1('‮126','B#*b')]());return{'url':_0x54e1('‮127','NYb6')+_0xe957db,'headers':{'autoken':token,'user-agent':_0x595f03['VVyLq'],'Content-Type':_0x595f03['EAcSt'],'Content-Length':'0','Host':_0x595f03[_0x54e1('‫128','a0Kf')],'Connection':_0x595f03[_0x54e1('‮129','JWIw')],'Accept-Encoding':_0x54e1('‫12a','5Mo5')},'body':_0x38405f};};function Get_request(_0x32a3ec){var _0x1f2e09={'zzcoo':_0x54e1('‫12b','%a!4'),'AjXQb':_0x54e1('‫12c','k0]i'),'zCPOc':'gzip'};return{'url':_0x54e1('‮12d','q*y[')+_0x32a3ec,'headers':{'autoken':token,'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','Content-Type':_0x1f2e09[_0x54e1('‮12e','Wwd4')],'Content-Length':'0','Host':_0x54e1('‮12f','SoZw'),'Connection':_0x1f2e09[_0x54e1('‮130','cu&d')],'Accept-Encoding':_0x1f2e09[_0x54e1('‮131','n[8z')]}};};function Js_Config(){var _0x44c13c={'YJijV':function(_0x35cc92,_0x24e7e3){return _0x35cc92===_0x24e7e3;},'GCyOp':'KemAe','HzRnn':function(_0x31ed77,_0x331764){return _0x31ed77!=_0x331764;},'eKlWm':_0x54e1('‫132','f^wq'),'Hmamr':'oHaEF','Cijdg':_0x54e1('‮133','Mlid'),'ghEAU':function(_0x2e2114){return _0x2e2114();},'CccCp':'https://gitee.com/soy-tool/app-script/raw/master/config/Config.js'};let _0xbc6e29={'url':_0x44c13c[_0x54e1('‮134','B#*b')],'headers':{'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76'}};return new Promise((_0x7bf5fe,_0x1d8eca)=>{$['get'](_0xbc6e29,async(_0x559f51,_0x20110a,_0x6ee44b)=>{try{if('RCbIi'===_0x54e1('‮135','f^wq')){console[_0x54e1('‮ad','5Mo5')]('['+TG_ID+']:\x20注册授权:\x20'+body[_0x54e1('‫136',']j(U')]);}else{if(_0x559f51){if(_0x44c13c[_0x54e1('‫137','k0]i')](_0x44c13c['GCyOp'],_0x54e1('‮138','8bKi'))){console[_0x54e1('‫e1','%rZK')](_0x54e1('‮80','a0Kf')+$[_0x54e1('‫7b','V&*u')]+'\x20读配置】:\x20网络请求失败');return;}else{console['log']('['+TG_ID+_0x54e1('‫139','8bKi'));}}else{let _0x37f4f9=JSON[_0x54e1('‮13a','JSPv')](_0x6ee44b);if(_0x44c13c['HzRnn'](_0x37f4f9[_0x44c13c['eKlWm']][0x0][_0x54e1('‫13b','E9&V')][_0x54e1('‫13c','v[Y)')],0x1)){console[_0x54e1('‮7a','iio]')](_0x54e1('‮13d','v[Y)')+num['sdsj']['content']);return;}}}}catch(_0x3165e6){if(_0x44c13c[_0x54e1('‫13e','8x2S')](_0x44c13c[_0x54e1('‫13f','JSPv')],_0x44c13c[_0x54e1('‮140','m60U')])){console['log']('['+TG_ID+']:\x20登录状态:\x20返回'+result[_0x54e1('‫141','k0]i')]);}else{console['log'](_0x3165e6,_0x20110a);}}finally{_0x44c13c['ghEAU'](_0x7bf5fe);}});});}let MarkCode='',Token='';let appid=_0x54e1('‮142','o9aO'),serverUrl=_0x54e1('‮143','iio]');async function httpRequest(_0x302ab3,_0x5065c1){var _0x4eeb0e={'jvBFA':_0x54e1('‮144','cu&d'),'LCfGY':function(_0x2cc094,_0xda78ed){return _0x2cc094!==_0xda78ed;},'bTIyt':_0x54e1('‮145','*zbY'),'uNCTP':_0x54e1('‮146','vQE)')};httpResult=null;return new Promise(_0x360e6e=>{var _0x33b327={'GfKco':_0x4eeb0e[_0x54e1('‮147','5Mo5')],'ixtxn':_0x54e1('‫148','AE)P'),'UvAOJ':function(_0x1d1256,_0x4d3097){return _0x4eeb0e[_0x54e1('‮149','q*y[')](_0x1d1256,_0x4d3097);},'zNtpD':_0x4eeb0e[_0x54e1('‫14a','MJOQ')],'oyNLo':_0x4eeb0e[_0x54e1('‮14b','7DG@')]};$[_0x302ab3](_0x5065c1,async(_0xaee64f,_0x383353,_0x21a7e1)=>{var _0x5b8759={'uFbBq':_0x33b327['GfKco']};if(_0x33b327[_0x54e1('‮14c','i3t1')]===_0x33b327[_0x54e1('‮14d','suk5')]){try{if(_0xaee64f){console[_0x54e1('‮ad','5Mo5')](_0x302ab3+'请求API失败');console['log'](JSON[_0x54e1('‮14e','DBRC')](_0xaee64f));}else{if(_0x33b327['UvAOJ'](_0x33b327[_0x54e1('‫14f',']j(U')],_0x33b327['oyNLo'])){httpResult=_0x21a7e1;httpResponse=_0x383353;if(log)console[_0x54e1('‮150','i3t1')](httpResult);}else{console[_0x54e1('‮151','0APA')](e,response);}}}catch(_0x20c6b1){console[_0x54e1('‫152','JK(f')](_0x20c6b1,_0x383353);}finally{_0x360e6e();}}else{let _0x4f8c94=JSON[_0x54e1('‮153','ZUff')](_0x21a7e1);if(_0x4f8c94[_0x5b8759[_0x54e1('‫154','v[Y)')]][0x0][_0x54e1('‮155','%rZK')][_0x54e1('‮156','@YFk')]!=0x1){console[_0x54e1('‮4e','o9aO')](_0x54e1('‫157','B#*b')+num['sdsj'][_0x54e1('‮158','F5y^')]);return;}}});});}async function login(){var _0x1e7467={'yKnLJ':function(_0x108324,_0x909547){return _0x108324+_0x909547;},'yktjK':function(_0x26b5e0,_0x416e64){return _0x26b5e0+_0x416e64;},'VDvfB':function(_0x3aa0fe,_0x27ed38,_0x299ed7){return _0x3aa0fe(_0x27ed38,_0x299ed7);},'ujrJG':function(_0xd9b0b8,_0x5b488b){return _0xd9b0b8==_0x5b488b;},'GIpAY':function(_0x4f3f6b){return _0x4f3f6b();},'FDeaS':function(_0x264177,_0x300ada){return _0x264177==_0x300ada;}};var _0xb4d0aa=Math[_0x54e1('‮159','m60U')](Date[_0x54e1('‫15a','@YFk')]()/0x3e8);var _0x3b09e1=_0x54e1('‮15b','Aa9Y')+TG_ID+'&password=123456&markcode='+MarkCode+'&t='+_0xb4d0aa;var _0x2e6940=CryptoJs[_0x54e1('‫15c','F5y^')](_0x1e7467[_0x54e1('‫15d','f@KF')](_0x1e7467[_0x54e1('‫15e','q*y[')](_0x3b09e1,'&'),appid))[_0x54e1('‫15f','vQE)')]();_0x3b09e1=_0x1e7467['yKnLJ'](_0x1e7467[_0x54e1('‫160','gm[@')](_0x3b09e1,'&sign='),_0x2e6940);let _0x4ed45f={'url':serverUrl+'user_logon','headers':{'user-agent':yyz_UA},'body':_0x3b09e1};await _0x1e7467[_0x54e1('‫161','ZUff')](httpRequest,'post',_0x4ed45f);let _0x445516=httpResponse;if(!_0x445516)return;if(_0x445516['status']==0xc8){let _0xf19616=JSON[_0x54e1('‮162','E9&V')](_0x445516[_0x54e1('‮163','E9&V')]);if(_0x1e7467[_0x54e1('‮164','VtTH')](_0xf19616[_0x54e1('‫165','f@KF')],0xc8)){Token=_0xf19616[_0x54e1('‮166','HtOS')][_0x54e1('‫167','cu&d')];fs[_0x54e1('‮168','Mlid')](_0x54e1('‮169','*zbY'),_0xf19616['msg'][_0x54e1('‮16a','%rZK')]);await $[_0x54e1('‮16b','0)VR')](0x64);await _0x1e7467['GIpAY'](get_vip);}else if(_0x1e7467[_0x54e1('‫16c','cu&d')](_0xf19616[_0x54e1('‫16d','iio]')],0x71)){await user_reg();}else{console['log']('['+TG_ID+_0x54e1('‮16e','JSPv')+_0xf19616[_0x54e1('‮16f','a0Kf')]);}}else{console['log']('['+TG_ID+']:\x20登录失败:\x20返回'+_0x445516[_0x54e1('‮170','bN)O')]);}}async function user_reg(){var _0xf56755={'sXEPN':_0x54e1('‮171','suk5'),'BgoOq':_0x54e1('‫172','0)VR'),'DCzmE':_0x54e1('‫173','8bKi'),'QIVRQ':_0x54e1('‫174','f@KF'),'HHrtF':function(_0x40c6d5,_0x3e5154){return _0x40c6d5/_0x3e5154;},'UGoLW':function(_0x908c76,_0x1ac1a4){return _0x908c76+_0x1ac1a4;},'oRqTH':function(_0x491ea7,_0x24d570){return _0x491ea7+_0x24d570;},'AtLkQ':_0x54e1('‫175','Aa9Y'),'YlMFr':function(_0xdda1d8,_0x23878f){return _0xdda1d8==_0x23878f;},'dkaNj':_0x54e1('‮176','HtOS'),'OZJmn':function(_0x7e5d95,_0x9df90){return _0x7e5d95==_0x9df90;},'PQKyF':function(_0x4fe05c,_0x11c4dd){return _0x4fe05c!==_0x11c4dd;},'uaXnl':'jCOJJ','epbFc':_0x54e1('‮177','SoZw'),'FxMvC':function(_0x19e3ad){return _0x19e3ad();},'pGpzJ':'RUzKD'};var _0x3f0a95=Math[_0x54e1('‮178','gm[@')](_0xf56755[_0x54e1('‮179','q*y[')](Date['now'](),0x3e8));var _0x271d65=_0x54e1('‮17a','k0]i')+TG_ID+_0x54e1('‮17b','&0p]')+MarkCode+_0x54e1('‫17c','yMcD')+_0x3f0a95;var _0x5dd7a8=CryptoJs[_0x54e1('‫17d','E9&V')](_0xf56755[_0x54e1('‫17e','n[8z')](_0x271d65+'&',appid))[_0x54e1('‮17f','f@KF')]();_0x271d65=_0xf56755[_0x54e1('‫180','vQE)')](_0x271d65,_0xf56755['AtLkQ'])+_0x5dd7a8;let _0x34bd25={'url':serverUrl+_0x54e1('‮181','yMcD'),'headers':{'user-agent':yyz_UA},'body':_0x271d65};await httpRequest(_0x54e1('‫182','E9&V'),_0x34bd25);let _0x2a8f24=httpResponse;if(!_0x2a8f24)return;if(_0xf56755['YlMFr'](_0x2a8f24[_0x54e1('‮183','0APA')],0xc8)){if(_0xf56755[_0x54e1('‫184','HtOS')]!==_0xf56755[_0x54e1('‮185','F5y^')]){return{'url':_0x54e1('‫186','bN)O')+url,'headers':{'autoken':token,'user-agent':_0xf56755[_0x54e1('‫187','ZUff')],'Content-Type':_0xf56755[_0x54e1('‮188','AE)P')],'Content-Length':'0','Host':_0x54e1('‫189','E[ic'),'Connection':_0xf56755[_0x54e1('‮18a','@T(z')],'Accept-Encoding':_0xf56755[_0x54e1('‮18b','gm[@')]}};}else{let _0x1b283d=JSON['parse'](_0x2a8f24[_0x54e1('‮18c','5Mo5')]);if(_0xf56755[_0x54e1('‫18d','0APA')](_0x1b283d['code'],0xc8)){if(_0xf56755[_0x54e1('‫18e','f^wq')](_0xf56755[_0x54e1('‫18f','o9aO')],_0xf56755[_0x54e1('‫190','JWIw')])){await $['wait'](0x64);await _0xf56755['FxMvC'](login);}else{yyz_type=0x1;}}else{if(_0x54e1('‫191','7DG@')!==_0xf56755['pGpzJ']){console['log']('['+TG_ID+_0x54e1('‫192','MJOQ')+_0x1b283d[_0x54e1('‮193','Wwd4')]);}else{app_soy_lfb_data=process[_0x54e1('‮194','V&*u')]['soy_lfb_data'][_0x54e1('‮195','B#*b')]('\x0a');}}}}else{console['log']('['+TG_ID+_0x54e1('‫196','JK(f')+_0x2a8f24[_0x54e1('‫197','NYb6')]);}}async function get_vip(){var _0x4fec11={'FEScq':'\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a','lxZVu':function(_0x35cf3f,_0x1be175){return _0x35cf3f+_0x1be175;},'xuGvG':function(_0x49a037,_0x3ae3fe){return _0x49a037+_0x3ae3fe;},'NAJdv':function(_0x1a634b,_0x1b1314){return _0x1a634b+_0x1b1314;},'bByhz':function(_0x49af64,_0x2bf043){return _0x49af64+_0x2bf043;},'rFUQH':function(_0x46ac94,_0x1bdc9f){return _0x46ac94==_0x1bdc9f;},'dDwUt':function(_0x5d3314){return _0x5d3314();},'WRNXg':'tNUMM'};var _0x145986=Math[_0x54e1('‫198','a0Kf')](Date[_0x54e1('‫199','k0]i')]()/0x3e8);var _0x4ab8d6=_0x54e1('‮19a','8bKi')+Token+_0x54e1('‫19b','k0]i')+_0x145986;var _0x335358=CryptoJs[_0x54e1('‮19c','f^wq')](_0x4fec11[_0x54e1('‫19d','JSPv')](_0x4fec11['xuGvG'](_0x4ab8d6,'&'),appid))[_0x54e1('‮19e','yMcD')]();_0x4ab8d6=_0x4fec11['NAJdv'](_0x4fec11[_0x54e1('‫19f','F5y^')](_0x4ab8d6,_0x54e1('‫1a0','bN)O')),_0x335358);let _0x98d9e5={'url':serverUrl+_0x54e1('‮1a1','@T(z'),'headers':{'user-agent':yyz_UA},'body':_0x4ab8d6};await httpRequest(_0x54e1('‫1a2','f^wq'),_0x98d9e5);let _0x422cf0=httpResponse;if(!_0x422cf0)return;if(_0x422cf0[_0x54e1('‮1a3','MJOQ')]==0xc8){let _0x17af99=JSON[_0x54e1('‫1a4','F5y^')](_0x422cf0[_0x54e1('‮1a5','V&*u')]);if(_0x4fec11['rFUQH'](_0x17af99['code'],0xc8)){await $[_0x54e1('‮1a6','7DG@')](0x64);await Get_Config();}else if(_0x17af99[_0x54e1('‫1a7','0)VR')]==0xc9){if(yyz_Kami){await _0x4fec11[_0x54e1('‮1a8','HtOS')](card);}else{await createOrder();}}else{if(_0x4fec11['WRNXg']===_0x4fec11[_0x54e1('‫1a9','JK(f')]){console[_0x54e1('‮4e','o9aO')]('['+TG_ID+_0x54e1('‫1aa','ZUff'));}else{throw new Error(_0x4fec11['FEScq']);}}}else{console[_0x54e1('‮1ab','k0]i')]('['+TG_ID+']:\x20验证账号:\x20返回'+_0x422cf0[_0x54e1('‫1ac','Mlid')]);}}async function card(){var _0xfe571a={'XNeGl':function(_0x492b77,_0x5cab78){return _0x492b77/_0x5cab78;},'LygSs':function(_0x2b5ccd,_0x237cd8){return _0x2b5ccd+_0x237cd8;},'hdDkG':_0x54e1('‮1ad','DBRC'),'kXBvs':'post','wayLC':function(_0x3902cf,_0x1deb7f){return _0x3902cf==_0x1deb7f;},'TWgTV':function(_0x268b8b){return _0x268b8b();},'zthXV':_0x54e1('‮1ae','SoZw'),'FsHEz':function(_0x8fdd15,_0x4d6ba2){return _0x8fdd15!==_0x4d6ba2;},'XkEHY':_0x54e1('‫1af','ZUff'),'TJrZA':_0x54e1('‮1b0','AE)P')};var _0x12129d=Math[_0x54e1('‫1b1','E9&V')](_0xfe571a['XNeGl'](Date[_0x54e1('‮1b2','MJOQ')](),0x3e8));var _0x558335=_0x54e1('‮1b3','VtTH')+Token+_0x54e1('‮1b4','@T(z')+yyz_Kami+_0x54e1('‮1b5','JSPv')+_0x12129d;var _0x3f32f2=CryptoJs[_0x54e1('‫1b6','gm[@')](_0xfe571a[_0x54e1('‫1b7','i3t1')](_0x558335,'&')+appid)['toString']();_0x558335=_0xfe571a[_0x54e1('‮1b8','%a!4')](_0x558335,_0xfe571a[_0x54e1('‮1b9','Aa9Y')])+_0x3f32f2;let _0x49bfb5={'url':serverUrl+_0x54e1('‮1ba','VtTH'),'headers':{'user-agent':yyz_UA},'body':_0x558335};await httpRequest(_0xfe571a['kXBvs'],_0x49bfb5);let _0x47b8f1=httpResponse;if(_0xfe571a[_0x54e1('‮1bb','%a!4')](_0x47b8f1[_0x54e1('‫1bc','DBRC')],0xc8)){let _0x510b80=JSON['parse'](_0x47b8f1[_0x54e1('‮1bd','ZUff')]);if(_0xfe571a[_0x54e1('‫1be','AE)P')](_0x510b80[_0x54e1('‮1bf','B#*b')],0xc8)){await _0xfe571a['TWgTV'](Get_Config);}else{if(_0xfe571a[_0x54e1('‮1c0','E9&V')]!==_0xfe571a['zthXV']){console[_0x54e1('‮1c1','VtTH')](method+_0x54e1('‫1c2','JK(f'));console['log'](JSON['stringify'](err));}else{console[_0x54e1('‮1c3','Wwd4')]('['+TG_ID+_0x54e1('‮1c4','8bKi')+_0x510b80[_0x54e1('‫1c5','V&*u')]);}}}else{if(_0xfe571a[_0x54e1('‫1c6','Mlid')](_0xfe571a['XkEHY'],_0xfe571a[_0x54e1('‮1c7','E9&V')])){console[_0x54e1('‮f0','v[Y)')]('['+TG_ID+_0x54e1('‫1c8','&0p]')+_0x47b8f1['status']);}else{console[_0x54e1('‮1c9','cz]!')]('['+TG_ID+_0x54e1('‫1ca','f^wq')+body[_0x54e1('‫1cb','8bKi')]);}}}async function motion(){var _0x3eaf4b={'pxtoo':function(_0x4ee814){return _0x4ee814();},'zLVCc':function(_0xded69f,_0x58378e){return _0xded69f+_0x58378e;},'ahoMB':function(_0x20d549,_0x52dfe7,_0x3794a2){return _0x20d549(_0x52dfe7,_0x3794a2);},'oCEYz':_0x54e1('‮1cc','8x2S'),'NmMlh':function(_0xdb6da8){return _0xdb6da8();},'iyPde':_0x54e1('‮1cd','MJOQ'),'HRnml':'yqSPa','MuQtn':function(_0x3c1692){return _0x3c1692();},'kFCjb':function(_0x2a8293,_0x601c44){return _0x2a8293!==_0x601c44;},'TLmvA':_0x54e1('‫1ce','AE)P')};var _0x435289=Math['floor'](Date['now']()/0x3e8);var _0x3df300=_0x54e1('‮1cf','8x2S')+Token+_0x54e1('‫1d0','iio]')+_0x435289;var _0x5e9db8=CryptoJs[_0x54e1('‫1d1','Wwd4')](_0x3eaf4b['zLVCc'](_0x3eaf4b[_0x54e1('‮1d2','k0]i')](_0x3df300,'&'),appid))[_0x54e1('‫1d3','n[8z')]();_0x3df300=_0x3eaf4b[_0x54e1('‮1d4','JWIw')](_0x3df300+'&sign=',_0x5e9db8);let _0x4091f2={'url':serverUrl+_0x54e1('‫1d5','JWIw'),'headers':{'user-agent':yyz_UA},'body':_0x3df300};await _0x3eaf4b[_0x54e1('‫1d6','v[Y)')](httpRequest,_0x3eaf4b['oCEYz'],_0x4091f2);let _0x404a0e=httpResponse;if(!_0x404a0e)return;if(_0x404a0e['status']==0xc8){let _0x44d91d=JSON[_0x54e1('‮1d7','Aa9Y')](_0x404a0e[_0x54e1('‮1d8','0)VR')]);if(_0x44d91d['code']==0xc8){await $['wait'](0x64);await _0x3eaf4b[_0x54e1('‫1d9','o9aO')](get_vip);}else{if(_0x3eaf4b[_0x54e1('‫1da','AE)P')]===_0x3eaf4b[_0x54e1('‫1db','yMcD')]){_0x3eaf4b['pxtoo'](resolve);}else{await _0x3eaf4b['MuQtn'](login);}}}else{if(_0x3eaf4b[_0x54e1('‫1dc','v[Y)')](_0x3eaf4b['TLmvA'],_0x3eaf4b['TLmvA'])){console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x54e1('‫1dd','@YFk')+_0x404a0e[_0x54e1('‫1de','cz]!')]);}else{console[_0x54e1('‫e1','%rZK')]('['+TG_ID+_0x54e1('‮1df','8bKi')+_0x404a0e[_0x54e1('‫1e0','gm[@')]);}}}async function Get_Token(){var _0xd6016b={'jKREa':function(_0x484ea7,_0x3505a2){return _0x484ea7===_0x3505a2;},'FIpGQ':_0x54e1('‫1e1','Mlid'),'tFTvB':_0x54e1('‫1e2','NYb6'),'iMuMX':_0x54e1('‮1e3','ZUff'),'zfvyz':function(_0x5a092c,_0x3d484f){return _0x5a092c(_0x3d484f);},'nRufH':'EjNOg'};try{if(_0xd6016b[_0x54e1('‫1e4','NYb6')](_0x54e1('‫1e5','B#*b'),_0xd6016b[_0x54e1('‮1e6','v[Y)')])){Token=fs[_0x54e1('‫1e7','suk5')](_0xd6016b[_0x54e1('‫1e8','NYb6')],_0xd6016b[_0x54e1('‫1e9','%a!4')]);await _0xd6016b[_0x54e1('‫1ea','SoZw')](Get_IP,'m');}else{console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20用户信息】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫6a','gm[@')]+'\x20用户信息】:\x20网络请求失败';}}catch(_0x52c274){if(_0xd6016b[_0x54e1('‫1eb','ZUff')]!=='EjNOg'){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫6c','Mlid')]+_0x54e1('‮1ec','HtOS'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x54e1('‫1ed','Wwd4')]+_0x54e1('‮1ee','V&*u');}else{await _0xd6016b[_0x54e1('‫1ef','iio]')](Get_IP,'l');}}}async function Get_IP(_0x33fbab){var _0x92ac8e={'JLUPJ':function(_0x3607ed,_0x17988f,_0x5d5973){return _0x3607ed(_0x17988f,_0x5d5973);},'OrTqf':_0x54e1('‮1f0','NYb6'),'UxCzr':function(_0x5de510,_0x411f10){return _0x5de510==_0x411f10;},'Nlyyz':_0x54e1('‮1f1','F5y^'),'hNjoQ':_0x54e1('‮1f2','V&*u'),'ZKBiU':function(_0x28c62d,_0x52bcf2){return _0x28c62d!==_0x52bcf2;},'aJSRx':_0x54e1('‮1f3','JSPv'),'qmDpT':function(_0x5f1812,_0x1ce140){return _0x5f1812+_0x1ce140;},'KWAKX':_0x54e1('‫1f4','suk5'),'CEMdf':function(_0x33c5ab){return _0x33c5ab();}};let _0x393cc3={'url':'http://ifconfig.me/ip'};await _0x92ac8e[_0x54e1('‮1f5','f^wq')](httpRequest,_0x92ac8e['OrTqf'],_0x393cc3);let _0x14f8e2=httpResponse;if(!_0x14f8e2)return;if(_0x92ac8e[_0x54e1('‫1f6','8bKi')](_0x14f8e2[_0x54e1('‫1f7','0)VR')],0xc8)){if(_0x92ac8e['Nlyyz']!==_0x92ac8e[_0x54e1('‮1f8','V&*u')]){if(_0x14f8e2['body']){if(_0x92ac8e[_0x54e1('‫1f9','@T(z')](_0x54e1('‮1fa','E9&V'),_0x92ac8e[_0x54e1('‫1fb','F5y^')])){console[_0x54e1('‮1c9','cz]!')]('['+TG_ID+']:\x20登录失败:\x20返回'+_0x14f8e2[_0x54e1('‮1fc',']j(U')]);}else{MarkCode=CryptoJs['MD5'](_0x92ac8e[_0x54e1('‫1fd','E9&V')](TG_ID+_0x14f8e2[_0x54e1('‮1d8','0)VR')],_0x92ac8e[_0x54e1('‮1fe','Aa9Y')]))['toString']();await $['wait'](0x64);if(_0x33fbab=='m'){await _0x92ac8e[_0x54e1('‮1ff','B#*b')](motion);}else if(_0x92ac8e['UxCzr'](_0x33fbab,'l')){await login();}}}else{console['log']('['+TG_ID+_0x54e1('‮200','@T(z'));}}else{console[_0x54e1('‮201','suk5')](_0x54e1('‫be','Aa9Y')+$[_0x54e1('‫6c','Mlid')]+_0x54e1('‮202','&0p]'));subTitle+=_0x54e1('‮203','Wwd4')+$[_0x54e1('‫204','*zbY')]+_0x54e1('‫205','vQE)');}}else{console[_0x54e1('‫68','vQE)')]('['+TG_ID+_0x54e1('‮6f','JSPv')+_0x14f8e2[_0x54e1('‮206','suk5')]);}}async function createOrder(){var _0x1e609b={'TJVyU':function(_0x5cb23f,_0x18955b,_0x25b029){return _0x5cb23f(_0x18955b,_0x25b029);},'Hzyzq':_0x54e1('‫e2','cu&d'),'sqVBq':function(_0x29157e,_0x46e50d){return _0x29157e==_0x46e50d;}};let _0x2bcfde=CryptoJs[_0x54e1('‫17d','E9&V')](''+MarkCode+TG_ID+yyz_type+_0x54e1('‮207','VtTH'))[_0x54e1('‮17f','f@KF')]();let _0x4925ed='payId='+MarkCode+'&type='+yyz_type+_0x54e1('‫208','m60U')+_0x2bcfde+_0x54e1('‫209','JWIw')+TG_ID+_0x54e1('‮20a','@T(z');let _0x253d52={'url':_0x54e1('‮20b','@T(z'),'headers':{'user-agent':yyz_UA},'body':_0x4925ed};await _0x1e609b[_0x54e1('‮20c','iio]')](httpRequest,_0x1e609b[_0x54e1('‫20d','AE)P')],_0x253d52);let _0x428951=httpResponse;if(!_0x428951)return;if(_0x1e609b[_0x54e1('‮20e','Aa9Y')](_0x428951[_0x54e1('‮20f','8x2S')],0xc8)){let _0x41fb86=JSON[_0x54e1('‮210','vQE)')](_0x428951[_0x54e1('‫211','Aa9Y')]);if(_0x1e609b[_0x54e1('‮212','F5y^')](_0x41fb86[_0x54e1('‫213','JWIw')],0x1)){console['log']('['+TG_ID+_0x54e1('‮214','*zbY')+_0x41fb86[_0x54e1('‮215','DBRC')]['orderId']);}else{console[_0x54e1('‫216','F5y^')]('['+TG_ID+_0x54e1('‮217','v[Y)')+_0x41fb86['msg']);}}else{console['log']('['+TG_ID+_0x54e1('‮218','%a!4')+_0x428951[_0x54e1('‮219','n[8z')]);}};_0xodN='jsjiami.com.v6';




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