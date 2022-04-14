/*

项目名称:广告吧

项目注册地址:https://ggb.culink.vip//index/user/appregister?agent_id=275754&token=McTxYp0hOpTc4MTQxMAO0O0OO0O0O

收益不祥，由马大佬投稿的，他说毛很大的，因为测试性能，暂时只有签到

固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
注释：
TG频道用户ID关注 @getmyid_bot 机器人获取
激活卡密关注 @soyyun_bot 发送 /start按提示获取，如果支付失效请联系【暂未启用，脚本暂时只对TG群内启用】
TG频道讨论群:【暂未启用】


脚本需要的变量:
变量名:soy_ggb_data
变量值:循环次数&token
注释:循环次数之前是默认250次,现在改了自己定义,从第3个开始,填建议100以上加上内置取3-5秒不等延时,token抓包找到带有 https://ggb.culink.vip/api/ 的链接,请求头上的token值，虽然可以写登陆，但是登陆有要重新写配置，懒


多个号用 @ 或 # 换行 隔开

注意:次脚本需要跑较长时间,多号自己算延时定时
cron 31 17 * * * app_ggb.js

脚本地址：https://gitee.com/soy-tool/app-script/raw/master/app_ggb.js

*/


const $ = new Env('【广告吧22/04/14_3】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xod6='jsjiami.com.v6',_0xod6_=['‮_0xod6'],_0x1332=[_0xod6,'5o+R56SZwpvCqcOQ6LeX5Y2sBw==','O2PDpemphOitvui3teWNoyTDgei/g+WZlFE=','w7bCnnc=','5oyA56Sqw7Z4UOi1luWNpF4=','ReetjOWJleeLjeaDoOOBkDp2','5o6M56a7E3zDt+i3oeWNhUk=','w4M3w77DpMOq','wr/nrJ7li5HniaHmgo/jgJHCtcK6','bGTDvA==','wq3DjsK7','wpXjgbDoh7vmn7vmjZ7npLrjgp7vvoDmrLvohq3mnYrljo/og7jpnIfpvbjnjb7loarotqo=','LybCs8K0w4k=','H8O4wpkWIg==','w4nDnD9vw6g=','w5o2w6nDtQ==','AMO8wrIFNQ==','wrnDpWZ1w7g=','XMOhw6YCeA==','wofjgqvohovmnJrmjbTnpL3jgKrvvpDpqo7orJXkuIfpg5HlhJpT5Y+z6IKD5p+I5YiJ5ZiF5Y+l5ZmPworlpY3pnrrliKTnk7DliIzljJXpgJrmrrvmiobClMKTAnnDkcOtKg==','w7YOwoXCssO2','PeesneWLp+ODlMOxwpznvJrnuoXorbvmsrvlp7jotaM=','DzfCocKtw4c=','w7nnrIbliZ3jgY9HwoHnv4nnuILorJrmsJDlpbHotZ4=','AgJ3W0s=','cQzCsA==','6IWG5p6t5o+u56Wrw7fDqsKf6LWP5YyYPA==','GHHCkS7Cug==','X+esq+WJpOOBokLDm+eviuWLneaKruWIiGA=','5o6v56WveV5V6Led5Y2Dw40=','dHjCncOiwpw=','wpjnr6/liaLjgJTClwjnrpLliJ7mi7XlibbDow==','5o2L56SPI0PDlei3vuWNtyo=','ETTCgMKUw6c=','cOevheWLpeOBsX5i','5o+u56WZKjtl6Lee5Y69wrs=','OcOVwrEFPA==','w7nnrIbliZ3jgY9HwoE=','wojDq1A=','w45EYB/Ctg==','w47CtcKpRMOcJMKo','w4nDosOUesOc','BwVXU2HCqBTDtGnDp8OSSDfDgVTDhjXDicOQcjQ=','PsK7wpsYwqU=','w5nChMKVXMOF','cXjDqMKQ','w5dcw7M=','5o6o56Wgw4nDnMKy6Let5Y6fFg==','aE3DksOhwoU=','XBlTw6jDmw==','w4k2w77DpA==','w7NSw7MOGA==','Ph5cWl0=','wozDtlPCnsO9','wrvop7fnnIXopqjpoanjg4nCuirnrrE=','5qyN5rKv5p+76IyD5Y+K5Yid57qy5Y6u','IeinoeeeveilgumhrOODoMKhB+evrQ==','w79Ueg8=','HA7CsMK0','Tklc','776X6ISv5pyi5bac5q6b5bug5L+/55Si','NcO7w4U=','wqZzReS9queXvuWPl+WsjcKCw7g=','wpzCm8O85L2e55SJ5Y2G5ayswpRM','QX3ClQ==','5o6256Wjw6jDpcKS6Le15Y2jPg==','cGXCng==','w6E0cA==','B8KSwpYtwrU=','XC3Cu+S+m+eVoOWMqOWtl8O0wp7ovpzlma3Crg==','wqZzReS9queXvuWPl+WsjcKCw7jovZnlm59o','w6jDvcOhdcOq','w5nDoSJpw4RLwo1awozChsOzc8ORwrhuw4XCiTfCikhoWcKeUcKnwqbCi8OxQMK1wqg=','ASPCrMK4','woLDv1XDlcOmaCnDgMKQwqbDrsOEwq7Cpg==','wo3DrEPCi8O2J2rChsKZwqrCosKcwqTCowh/FBchwq3DpMKjFsKkU8KEwoM=','Q8O3w67ChcKD','YMOZw6/CqsK0','w4zDvT5Sw6o=','Y8O6w4XCucOiw5cnwqxiw4Biw7jCiWzCssKjBMKYwqM=','wpo5FXnCv8OVwqrDjMKxw6JvZxolwqnDuR3Cli/DsMKkQkzClkYjaWTDpyRT','HiUNNA==','wqnDlcKoUVIdw4XCgQs3wrB5TMKnGMOeN8Kiwo1nXTwFacObelQ=','w77CoV7Ch1Y=','wo7DoFszJw==','wpLDl8KPYGw=','EwhCfnHDqxrDn3nDtcOI','wr4dGRMSw4/DrMK2','Nj/CncK6w5Q=','wrA6HVfCgg==','wp/CjsOYw6LDkw==','w4hYdwvCiw==','w69tdcO3wpM=','w7zCnX/Cp0E=','EcOFCw==','w4jCv8KKXMOPLsKjw78=','WRHCtcKiw4tRw5zCrB8fw5UgISUxbSTDl8OgcsOsw5VRA8KDFA==','wprCpMOk','w59jegLCkg==','U8O0w6TCucK/woxnw7o=','OwMgHxI=','w7XDvihsw4FEwo0Bw5DDh8KtfMKTwodow4XDh2/DkgBIRcKJRsK8w7LCmsKlHsK2wqHCgSXDqiHDr0XCgA/CksKVIl7Dq8OWCcOVL2Ngw6sJX8KFw6DCvsOsCcKOwo/Dt1LDqcK1wpoow7gDwqsCw6zCjClqGGTDo8KWwqppYwLDgGvCplkdwoHCkB/DgsKkwqTDm1MbJcKiwqB6woVIw68UNlsKfmsVw6Z7FMKew4Muw5szXsOEWMK1wpjCqkcqSSUSTcKhw482R8OEDMKFw7/DvsOScMO/M8KEZQFbX0Bbw451w5JNIMO6w5Aqw6F9w5w5D8OAwqogwo9mwp8pOR3Dh2V4K2PClCpIBivCpsKYdsOYw7vDosO0wqnDp8OwaAtHVArCpjlCClRqG8OjCG4FLcKZPMO7CkvDh8OAwpvCqcOhJyJP','BjDCmsKUw64=','Ly/CvMKgw5c=','RWTCh8OZbw==','w5DCv8K+','dcOdw6I4','wqZzReeZruW+g+Wmh+i3rsKCw7jovZnlm59o','FMO8w4QqwoE=','w5BeSSDCjg==','PMOUwrI=','MMO6w4Yswrw=','wqBxwqkmGA==','w5/Cv8K9TQ==','w7JybMOuwqk=','asOBw5UKcQ==','dcOfwosAVQ==','CEEC','w5XCvsK/Rw==','wobDon8=','csOYwo0=','wq3CsS/nmYDlv4HmiJjliJcXJsOJKMOe5Yi65p645pWs6ZalFA==','Czo/FhY=','PsOxw5YPwrEjT37Dm25W','wpPCqMOYw73DhMOuw6dP','w7PCvcOCwogm','w4jCi8OmwrQw','w5hcw7A6','S27DnsKGLQ==','GAJR','O2PDpeeas+W/quWnoui2sSTDgTc=','QFnDt+eavuW+nuWmjei1rmPCrMOZ','P8KLw78=','RMKFbAMG','UC5yej0=','w7TCvGXCpEY=','FyEgAwvDgcKbw4LDmcOwfMKcbcKUXMKHMsOmJMKBT8OWGMOSM8K6OA==','w7xHwqhFw6g=','wpwzDGU=','wonDvVnCnMOxdQ==','wpPCqsOOwp7DiMO1w79OVsKfwpF4UMKl','w4h5wph4w4Q=','N8OHdgPCgg==','HcOTw6oiwoA=','wr/nr4Tlib3jgqfDkVk=','woDDo28=','SlRfw6XDkg==','M8KGwoE0wpY=','w4DDlMOrX8OIa1rCpTfDujrDq0EzdRDCsMOQVlrDrsOIwqvDiMOVwp9Iw4IiwqvDicOvw58hZ8Owwq8SwrjCh0fCmAvCjRvClMOHDSzCncOLUsKVw5JOY3rCtMO7MAwBfQpGwqXCuMONOFLCtsOmwpYtBzA2MsKpC0pMwpfCjcO/w5jDulkuwqXDjwDCmcOUwrTDjsObwoxcwqBnw7fCmGk4w4/DhMKxw6PDkMKLwoNOwrpgwpF2dsOMwpXCp0V/w77DmhfCgFwnT1TCvzonwqLDmn/CpMOLWcKswrDChn8GCsO5w4PCksOUdjhpOMKHw6LCn8O0w4jDlQjDhcO2w7jCry9fFDHCsy3Dm0DDoMKoUiPDp8O+wo/DmWbDicO/w7rDgMKuwp4MwrdUwq4RX8Kiw6J5w5sFw5otw5wHwptNwpTDmlZUwo7CuMK8w67CocOPwqPDn8KuDMKkw6/DsQ==','w73CrMOiwrIi','c+OBj+S8uOiBgeaMm+eljuODve+9semrruiunOiHs+afvHHDpMKw5aaA6LWvwr/oroXliZ3kvJ3mlrLohpfmn5vkubLkuormhKHlhLXlrp0=','w7nCvkHCiXg=','woPDv38=','SMO2wqQ=','w4I2w6nDtcO8wprDscKa','BXDCpj/CsMOwRCc=','BGzCkDnDvw==','Q0IECMKSNm8kAMKWR8KrwrXCisOjAGwbZcKcw7ItccKmKEgSYMO/wqTDkQzCrzTDrl7Djw==','woVhwqkhFA==','B1UpCMK1','Vklew7LDtcKMWzA=','bhxXw77DgA==','woXDhlh4w70=','Mw0RI8K8','bQzCpMKx','w4UBw7RERw==','QFnDt+awreWFh+Wmjei1rmPCrOi8reWYl2Y=','KAwzBio=','BAxES2E=','GjAAIQ==','VMOXKuayiOWHj+Wlqui1vMK+YQ==','77636K+Ww4AYIngweeitmeWns8K8Q8KS5bS86KGS5rCp5YaS','w5DCgcKx5rOe5YSo5aS26LSewrAi','w6XCq3Lms63lhKHlpJnot4kUw4U=','w6wGw4k=','Ezoz','5o2d56WhOsOXfui1ieWNvsOd','bMOcw7UpWA==','w5rCg8KyRcOR','w4DCtMO/wpw1','wr8UPD0M','SGrCnsOVZQ==','NDAeLcKnGMKNRFdzw5nDsArDoMKYw58/w6tJwoLCssOlw6nChTAYSsKQHD/CmRfCsGYDBFsgwrpOw5sjJsOswoEpw6xYXC9Ww5nCucKUw4EidlrCj8OOwpbCjX0NV2gKVsOifMK1csK/wpDCm8OpwrfCjyLCozQXw7hGYcKLwqjDjz93LwkCLRnDisO+w4vDlsKwQQfCgMOVw7vDpMKVw6TCokPCtHzCjMKqwrpwGGcGwobCqz7DncKMw498woYNwqs6w5jCjFDClcOjwoEqW1NUwr5awrJVw7LDncKlw5fCpGNtG2zCtlrDmkdxw498wpvDp8KLKiIPMcKYbHV/CsO5OUcmwrlkw4E6EsKYGyg7DcOKRcOXVMOyVHIvwrlxwpUDwpTDhyA6LhXCjsOGw5NZFnx1wqbDucOTwox+w47Cv8Klw40QXQ==','w7/CocO/','IcKbw6oWw6lnwpwJIsOuw6vCpsKcDsOX','J2PDtMKPLSfCrA==','w7Zkw6Y=','OSkD','wobCp8OJw7rDpA==','wpnDv1skIcKGf8O3','AcKdw7wZw7E=','DDADNgo=','anrDq8KBDw==','R0HCscOafw==','NTsSM8Kf','MRMTCh0=','wqrDoG04Ag==','YSRBw43Diw==','FjswFgA=','PeS5ieS5reS8pOaCpOOCrXF557+d57il6Ky+5rCE5aWX6Lel','PeS4vOS5g+S9puaCi+OCizlY57+J57un6K2Q5rOv5aem6LaA','woTCosOfw4Q=','w6N/wqlcw50=','wpEIHV/Cjg==','w4fDizDpqYTor7LotbjljavCuFjovKXlmYB3','PcKDwocSwoA=','N8Oxw6Yzwp4=','wroXCTs=','w6lDwqU=','w5BhN+mptuiukuiFteaepcOHw4g=','w6HDqsO56aqk6K286IWd5p+hwqLDrQ==','w7haags=','w6HDqsO55pWY6YWy6auL6KyMwqLDrQ==','bFDDkQ==','S1AZ5pe66YWN6aiJ6K6/wpVm','cGvCjcOGw7w=','5o6l56ahwonDgcO06LSc5Yy3cw==','woTDvmw1Kw==','PeS5ieS5reS8pOaCpOOCrXF5','w7MPwoY=','JWDDhOS+jueWt+WOquWurgx75rGI5p+05YyR5a+o5Y2W5LyE55aY','JGVE5Ly755ej5YyV5ayqUULms7zmn6DljrHlr6TljYPkvo7nlpk=','EjQgEBA=','wpcmAg==','bCh7w6TDkA==','w6tWSMOxwrI=','H8KXw6IWw7V/w4BBcMKiw73DqMOBL8KDbcKFaMKKCsO6AMOJNHDCvgDCjWQ1IMKlw4U3csOOS8OQwqU0wqLCjB/CnXfCksKpZyDDmgvCnUDCo8KZOCbDmsO3HXjCkwZKwpLCnMOIw6tecMOLEsOUCnY6PsKsw57CnMK2ZTZQw5hGwpHDqsK6RsOvIytGw7jCr2RBw4QIw6JQC8KIYEXDlsKSKMO0W8OTwoLDvmXDgMOOB8KLwo4dw5k/wpgZVcOCRsOdQMOAwqXDjwjCmGFLwrnCpj9Mw5vClcKKw6DDgcK3wpgfCB1kdcKCw4JPwppGw6PDi8KfNTw7eyrDqMKmw5g2IRt5w4vClsKow7HDjsOsPsKeBMKDITMJw7NCw7JpHnbCu03DtDnDs3cUMsOAX8OnwoAZHR0uSVsOw4VUw7LDuzZ0QcKyw5QUcw==','cAZWw6XDsA==','JsKXw7Maw7cu','Q0ZY','FMOQwpc=','TnNDw5LDkA==','bcOew67ClcKG','Cw7Ch8Klw4pPw53CuQ==','GcKgw6Iaw40=','w5hSw6Y7','TV/CvcO1woA=','UmjCocOZw64=','wqLDn1wmNw==','GMORXSTClw==','w49kQyLCnA==','w4sxwqzCm8Oq','B8KSwoENwqQ=','EFwcN8Kl','ZU/Dh8ONwpg=','S8O0w5A=','w5BhN+S+heeVu+WMjuWtj8OHw4jovrvlmYpl','wosoF2bCsw==','BTbCocKt','w7djwrrkv77nlrrljprlrZrDhcKW','wp3DuGg=','wrU1AxAT','AcOyw48nwow=','44CG77yg5p+M5aOV5YS055m05bqA5Y2N6YejaRLCm8KNwqvCumvDvcOWwp4hw701','fgAb5L+/55aC5Y6f5a+4bcKo','AcK7HuS8rueXsuWOpuWttFPDjw==','PsKXw78=','esKhwpfkvrLnl6XljoTlr4/Cp3Q=','XBnCluS/u+eXleWOkOWtnR3DoQ==','KsO7w5sWwqMoQXjDmm5QGQ==','w74re8KTJw==','EsO+w5DCqsKsVsKsChvDuFA=','cF/CksOzw4LDomDDvQ==','wpPCjsOUw4DDvw==','ATzCscKFw5DCvcOgdg==','KsOQwqA4Kw==','wqbDhMKobE5Jwp7Dhg==','Z33CjMOfwos=','RF9Pw4jDhcKLTCQ=','w6s6dcKpIQ==','E8O6w4bCv8Kr','w7bCq8O8wok9wofDhsO/wqpW','N8OewqEtLSzDqMKdwovCpg==','wpPCqMOYw6PDjsOjw7xJXMKH','w57DsDBWw58=','GTQ2IAo=','b8KMaDMx','PydCYmU=','wqbDmnwKMg==','A8Kzw7EKw5s=','DEErFMKFJA==','fhHCrsK1wr/Dk2Yzw78=','HMOow6rCg8K9Xw==','fuaIk+S4u+WIiOS+mei3kVbDiU/CtMKW6K+g6Ia66KOo5a6p6KGcUg==','RjJ1fyzDj3/DvcOsYsKmw7dnw7EPwq/Dn8KaT8OYw5PCp8O1AcO0e8OwJHt+wp3DjQ==','GWvCgTvDuMK2BTl7eDZnbsOiL8OYE8OCwr7Dm2UYJsOOw6YJwrRGZsKQHkvDvsOKw6HCgsKge8OwwrdKURUw','wrDDiTTDhcOEGsKfw7HCh8K4b8OUPgQ=','bMKZYg==','JsKecxNsODXDpTLDisOuw5rDt1NN','w5hBw60vCV5ZPMKU','cXbDr8KM','w5rDthzDv8K9','wpMVCBEs','w6Uuw5XDrsOF','w5Fhwo1lFw==','wr7CpsO/w6rDog==','woHDv28=','b2DDrsKBIg==','MsOtwrwtCw==','w5TDvjU=','wpXjgqrkvJHogrPmjLvnpYPjg6LvvorpqbjorIrohZrmnpYIOFDlp6zotK976K2m5Yid5L2X5paI6Iez5p2Q5LiW5Lmj5oSH5YWZ5ayU','F1cEH8KFKHIFHcOFFQ==','w59wSxjCiw==','DMKZwr0Swq1UYw==','HSIfPxM=','wobCqMONw5TDrcOpw79Ca8KNw5Ft','LcO7w7E9wrYmTUA=','w49Bw70y','OMKXw7ER','w7bDlAV1w4Q=','TWrClsOGeV5j','wqbDk1HCj8Ow','X3vCkMOHaF8=','EMOjw43Cn8KtScKTKhDDug==','dXjDiMKQOiDDv8Kp','FhLCmsK+w5xD','ZHnDrQ==','w6zDlTTDqcKSAMKJw4/CkMKqNMOb','wpjCosOL','ScO6w5rCqA==','44C977yU5p+Y5aOf5YaF55uV5bqE5Y2z6YW/eDNlYgHCmAjDosOYwo5Pw45U','w6nCgXzCoUc=','w6YLeMKgAA==','PcK+w5cKw7o=','w6RGwqF0NA==','TAZ3einCmy8=','w6Qtw47DlMOe','Ugxg','d8OZwo4rTg==','wpnCvsOL','5o2656WjwrfCrMK/6Led5Y2rw58=','eeaNhOeMkuOBmMO+bw==','w6hfwqU=','deOBheS8iOiBtuaOqOengeOCpe+/t+mosuitluiEhOaenl3CqXHlp5/otbnCoeivveWIiOS/iOaWn+iEreaen+S5ruS4qOaEmOWGkeWutsKV','wrwWGw==','ZQVAw5XDpcOiHMOwIsOSw6jCgQ==','acOiwrsUZg==','LCJeSUw=','OcOvSA==','dsOdw6gTRzvCnEbDrV0yw7o=','NcOVwqM=','BsO0w53Cs8K+XcKiDBrDuFbCrw==','Zk1Iw4zDqA==','w55dw6I=','AnDCjBTCpcO+SB9mY2x1','O8KWw7waw6Fcw4c=','w4vDoT5sw5k=','w6g1YQ==','FTbCvMKXw5jCtMO2QcKFdsO+EA==','PMO6w5Q=','bnnCgMOYwoPDvWEnw7xaw5PDjA==','clPDmsOtwok=','LCtuSk8=','woDDv2oiPg==','CV0C','5o2r56SJwrlyUOi0l+WOg3Y=','DFwBHsKZ','w4XopZrnnLzopL3poJTjgIx/wonnr5I=','5q245rC15p6r6I++5YyS5Ym/57qB5Yyi','w4hcw60AGlYWCcKDwpXDp2s=','ZErCisOXw5k=','w7MFwo/CsMO6aA==','HQfDm8KDwo3ohpbmnLjmi7LooaBpTMOU5Y+j5LmY5pS16Zem776d','G8KCwosRwpU=','LcO1ehfCgw==','GDAgJxHClsOR','w6o+Y8KuOgLDrMKHwocBw7EKwotLFWdZ','GTA/Jwg=','acOdw4UKaw==','Cw7CmMK+w5tHw5/CuyhWwpZ7fHY=','fMK8A2w=','w7QpwoLCtMOs','wrUXCg==','c2JZeeODm+WEhcOM','KeS7h+i0rOWOl+OBkmZkwrk=','FgpCc14=','w5vDnxt3w7k=','fcO5wqM8Yg==','BghXXGDDrgTDlWXDusOZ','GQ7CpsKUw5lFw5s=','HgJfVg==','RlrDgcKhEQ==','w7ESwqbChcOq','D8KOwqYkwrhEWMOMKxY=','IsOewrQEAivDscKMwr3CrMKnwoo=','wq0XPioPw4jDtsK5','FkIJEsKV','Fg/CsMK0w4A=','cFfDssOCwqQ=','w7PDlSo=','wpXlvrrlpobjgqbnr4dZ','fOS6q+i0mOWOpuS4oeWJpuOCow==','wpAABnbCtA==','bXjDvA==','e+OAj+iHr+adp+aMkuemo+OAu++9mumqjuivg+S4lemAjuWFssK35Y656IGQ5p2w5YmN5Zqi5Yyr5Zu1G+WnhemevuWIkeeQoeWLpOWPmemAluaukeaIgXvDosKEwo/DgcO/Mg==','bUzDkQ==','JuOAnuiHqOaemOaPjOekl+OAge++seavlOiFguadrOWPoOiDpumcjOm9uOePnuWgm+i1lg==','Zjl9VQU=','wofDs1TCnMOf','bFVVw6fDmA==','fSNaw6nDoA==','PMKZw7Ua','w6pGwqF0NA==','eMOewoQvWiTDkg==','EcO0w4rCiQ==','H8OQwq0LFw==','w5PCt8Oywos3','CDQ9Bw==','woPCtcOmw57Dug==','w5JqQMOewoM=','w4rDsDxhw4JF','S3NDw47Dog==','b2PDgsKMPw==','MMOuWQ==','5o+Z56eXJ01u6LW95Y6uwqQ=','wpInAXDCrg==','VOimr+ecveinvumileOClkzCpuaTkeS/iOWstuaIh3zkuqTlhZHotYjotrc=','w6ERXMKYGw==','PsOBwro4IA==','WX3Cl8OGM0R+w4/DlSA=','wovCqXtCw6RtwqoXJMKuQ8Oz','dxZJQQo=','w6/CpWrCmko=','fMK5cDI6','w7HCtMKQasOw','wrHDp0BZw7E=','w6HDlMO2','w7bCk8KqWsOx','w5Tku6fkuJbkvZHmg4TjgpHCqQfnvannuKjorYjmsYzlpIjot7A=','w7EUw5xEYA==','DikvNsKd','RMO0w5PCqA==','EcO6w5DCjQ==','H8KFwqolwqVZbcOa','TlVVw6XDkw==','w6VIwrI=','5oyr56WzSDjDu+i2kOWMvMKY','KeS7h+S6sOS+geaArOOBimPCpEvCs8OswpnCv+aYkuemku+8uA==','w5Vaw7c0E1AZMw==','B8K7wpfkvpTpoZDvv78=','DSnCgcKDw7bCpQ5Z','5o+V56aIwrxhDei1uuWMiTk=','w5Tku6fkuJbkvZHmg4TjgpHCqQcyw5nCkiPmmIznpKXvvoU=','YcOTw6Ut','ChLCscKjw5FIw5XCsQ==','w6PDksOyXcOKZlbDrw==','esOWwp4v','AMOow4HCnsKwVMKmPA==','fsKUaAMv','WBJ3w4PDtw==','VsO+w4clZQ==','w51fw7swDw==','5o2s56eqw7QFwpDotaHljLrCuA==','w5HDvzZgw5U=','wqXnrZLli7LjgKDCiwjnv7PnuLLoroPmsLXlpYnotLk=','w77Cn8KLUsOq','MDfCkcKJw5Q=','5o6J56auwo9kw6notanlj5QH','fwRdw6/Dug==','VeS6seS4nuS8jeaCtuOAq8O6cw==','w7ITwoY=','w5PjgajkvLHogZvmjq3nppvjgonvv4TpqaHorpPohZrmnZfCnAoG5aW/6LWmM+isj+WKjeS8luaUpuiGjuacl+S5gOS7peaEpeWGt+Wuq8K0','T1Vc','woRCTeaytuWHseWmkOi2vcOkw40=','w5XDojU=','w5gWw6Lms5nlhL3lpJnotofDlFQ=','dQ1Dw6zDqA==','H8KCwqEEwrU=','H8OrZxPCgA==','w50aTsKuEQ==','w5vCqMKXecON','A3jCg8KUw6vClBxPK8KMw59KDMOOHsOTw4XCj8OcW8K7wogKARc4AjDCsm0=','S3LDjcK0Lg==','FcOpejLCnw==','wo/DhUQHGw==','w4zDsCTDmsKk','w5XDqS/DusKv','wrwyBhER','FjbCtsK8','dcO2w6YnTw==','JgBPT0s=','RmDCncO7RQ==','Ew7Csw==','X+esq+WJpOeLheaBueODqsKOw43nv6/nuYvor6nms7DlpL/ot4Q=','w5XCvsK9TcOF','acOdw7Y=','5o2V56SWw68cwpzotI7ljZXDjg==','NcOvWjTCog==','wqXmj7znjbLjgKDCiwjnv7PnuLLoroPmsLXlpYnotLk=','V8O9wr4jXA==','w4vDtxrDmsKi','w49TQRzCtw==','e1XCgQ==','A8KYwqsywrQ=','Weimneedr+imgumhmuOBpcOWS+etjg==','CjbCog==','5o2K56eLPcOlHui1uOWNq8Ki','5q6d6I2n5YyP5YiY','woPDrmpkw6R6w6FOYw==','ZgtLw7nDpw==','w4tQw7MSEA==','w5vDvjZg','wrx/wrw=','5o+N56WZw7rDqMOm6Laa5Y68eQ==','TsO1w5PCqMK1','wr/mjrDnjZHjg4bCtCA=','HGzCkg==','wrHmjJ7njLjjg5Vuw4k=','ZMKebQ==','A+aPqueOi+OCkcKQw54=','IeaPh+eMq+ODtXJp','exle','RcKqZAQZ','GcO0w4M=','w6DDiMO2','RWDClsORZA==','wrrmjKHnjqDjg5kJfg==','FTAD','wpwRLGXCuw==','w5Qdw7Xms7/lh5DlpKnotJvDiwM=','UxBg','772e6Kydw4w4w4Zaw6VB6K+75aaLw6LCgcK55baR6KGB5rOr5YW8','w4HDliRww6c=','FiYLHx3CnsOHwoTDmcO5','w5TDgCpXw5s=','wqsvKhAo','HsOEw7AAwr4=','QsKoeTMa','XxDCssKSwoo=','w74SwoTCmsOb','QGHClQ==','wonDt1A=','5o+z56SAFsKtwofot5jlj4l3','w7PCn3TCrUs=','wpjnr6/liaLnirPmgqzjgLnDlg7nvrTnuLXorarmsJ7lporot64=','5o+N56Ssw5TCqsOJ6La85Y+0WA==','wrAWCTsF','WeesoeWJlOeLsuaDiuOBpcOWS+e8s+e6geisnuaykuWkk+i2iQ==','KcO1w5A6wqE=','JnnCuCrChg==','wpPDpGte','UTprw4PDuA==','WQ91w4/DsA==','ZMOBw50FRQ==','FX7CgSo=','WeesoeWJlOeLsuaDiuOBpcOWS+S6qOWltOW0m+euruWIkg==','jsjKigaECmxViA.codmTk.wXvBy6=='];if(function(_0xebca76,_0x180ba6,_0x5834f4){function _0x4c365e(_0x577e4b,_0x44aa53,_0x24a543,_0x1bad72,_0x567478,_0x1bd82d){_0x44aa53=_0x44aa53>>0x8,_0x567478='po';var _0x2ed69b='shift',_0x44e9a6='push',_0x1bd82d='‮';if(_0x44aa53<_0x577e4b){while(--_0x577e4b){_0x1bad72=_0xebca76[_0x2ed69b]();if(_0x44aa53===_0x577e4b&&_0x1bd82d==='‮'&&_0x1bd82d['length']===0x1){_0x44aa53=_0x1bad72,_0x24a543=_0xebca76[_0x567478+'p']();}else if(_0x44aa53&&_0x24a543['replace'](/[KgECxVAdTkwXBy=]/g,'')===_0x44aa53){_0xebca76[_0x44e9a6](_0x1bad72);}}_0xebca76[_0x44e9a6](_0xebca76[_0x2ed69b]());}return 0xdef2a;};return _0x4c365e(++_0x180ba6,_0x5834f4)>>_0x180ba6^_0x5834f4;}(_0x1332,0x117,0x11700),_0x1332){_0xod6_=_0x1332['length']^0x117;};function _0x3c5b(_0x25e483,_0x53fcf2){_0x25e483=~~'0x'['concat'](_0x25e483['slice'](0x1));var _0x48a166=_0x1332[_0x25e483];if(_0x3c5b['RSANgs']===undefined){(function(){var _0xeaa674=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x52f3a6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xeaa674['atob']||(_0xeaa674['atob']=function(_0x4433d7){var _0x412850=String(_0x4433d7)['replace'](/=+$/,'');for(var _0xbd089e=0x0,_0x277b4c,_0x5c017b,_0x262dd5=0x0,_0x25dcaf='';_0x5c017b=_0x412850['charAt'](_0x262dd5++);~_0x5c017b&&(_0x277b4c=_0xbd089e%0x4?_0x277b4c*0x40+_0x5c017b:_0x5c017b,_0xbd089e++%0x4)?_0x25dcaf+=String['fromCharCode'](0xff&_0x277b4c>>(-0x2*_0xbd089e&0x6)):0x0){_0x5c017b=_0x52f3a6['indexOf'](_0x5c017b);}return _0x25dcaf;});}());function _0x1b3c57(_0x11d802,_0x53fcf2){var _0x49d60f=[],_0x5194e6=0x0,_0x4db25c,_0x41fd28='',_0x2aaef5='';_0x11d802=atob(_0x11d802);for(var _0x3ce7de=0x0,_0x2d0b53=_0x11d802['length'];_0x3ce7de<_0x2d0b53;_0x3ce7de++){_0x2aaef5+='%'+('00'+_0x11d802['charCodeAt'](_0x3ce7de)['toString'](0x10))['slice'](-0x2);}_0x11d802=decodeURIComponent(_0x2aaef5);for(var _0x2e48b6=0x0;_0x2e48b6<0x100;_0x2e48b6++){_0x49d60f[_0x2e48b6]=_0x2e48b6;}for(_0x2e48b6=0x0;_0x2e48b6<0x100;_0x2e48b6++){_0x5194e6=(_0x5194e6+_0x49d60f[_0x2e48b6]+_0x53fcf2['charCodeAt'](_0x2e48b6%_0x53fcf2['length']))%0x100;_0x4db25c=_0x49d60f[_0x2e48b6];_0x49d60f[_0x2e48b6]=_0x49d60f[_0x5194e6];_0x49d60f[_0x5194e6]=_0x4db25c;}_0x2e48b6=0x0;_0x5194e6=0x0;for(var _0x25dce6=0x0;_0x25dce6<_0x11d802['length'];_0x25dce6++){_0x2e48b6=(_0x2e48b6+0x1)%0x100;_0x5194e6=(_0x5194e6+_0x49d60f[_0x2e48b6])%0x100;_0x4db25c=_0x49d60f[_0x2e48b6];_0x49d60f[_0x2e48b6]=_0x49d60f[_0x5194e6];_0x49d60f[_0x5194e6]=_0x4db25c;_0x41fd28+=String['fromCharCode'](_0x11d802['charCodeAt'](_0x25dce6)^_0x49d60f[(_0x49d60f[_0x2e48b6]+_0x49d60f[_0x5194e6])%0x100]);}return _0x41fd28;}_0x3c5b['TKEJtP']=_0x1b3c57;_0x3c5b['SAPPPA']={};_0x3c5b['RSANgs']=!![];}var _0x3a7984=_0x3c5b['SAPPPA'][_0x25e483];if(_0x3a7984===undefined){if(_0x3c5b['WVzHjh']===undefined){_0x3c5b['WVzHjh']=!![];}_0x48a166=_0x3c5b['TKEJtP'](_0x48a166,_0x53fcf2);_0x3c5b['SAPPPA'][_0x25e483]=_0x48a166;}else{_0x48a166=_0x3a7984;}return _0x48a166;};try{CryptoJs=$[_0x3c5b('‫0','&4JJ')]()?require(_0x3c5b('‫1','FvZ4')):'';}catch(_0x768a73){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x3c5b('‫2','QQk4')]()?require('os'):'';}catch(_0x3defc8){throw new Error(_0x3c5b('‮3','yTt6'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid=_0x3c5b('‫4','^4L0'),serverUrl=_0x3c5b('‫5','BGkS'),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x3c727f={'bwKLk':'ClDKA','NEWpi':_0x3c5b('‮6','(0u!'),'CKftu':function(_0x4026c1,_0x13a936){return _0x4026c1==_0x13a936;},'nrGRd':_0x3c5b('‮7','eREG'),'DEEvs':_0x3c5b('‮8','eREG'),'VdsYo':_0x3c5b('‮9','3MJi'),'GMZEY':function(_0x5d9a80,_0x23f0f3){return _0x5d9a80==_0x23f0f3;},'kIccb':function(_0x390b9c){return _0x390b9c();},'FNtpR':function(_0x4f0bfa,_0x134106){return _0x4f0bfa===_0x134106;},'nwuej':'VbNMS','LzVhW':function(_0x42eb7b,_0x5ae47b){return _0x42eb7b(_0x5ae47b);},'MycvT':function(_0x25d55c,_0x908bfa){return _0x25d55c(_0x908bfa);},'qGYOX':_0x3c5b('‫a','e(X$'),'oFOuc':_0x3c5b('‮b','(0u!'),'NtTUL':'tIYdm','SYCqb':_0x3c5b('‮c','*ZWo'),'EwsLB':function(_0x1b4f94,_0x1f2723){return _0x1b4f94>_0x1f2723;},'XOhqH':_0x3c5b('‮d','jc&D'),'BXsQg':function(_0x12ba85,_0x3e3c79){return _0x12ba85>_0x3e3c79;},'mobrm':_0x3c5b('‮e','(AO]'),'qtDFY':function(_0x2ee438,_0x41cc9f){return _0x2ee438+_0x41cc9f;},'fekTp':function(_0x383bca,_0x38fadc){return _0x383bca*_0x38fadc;},'loTFK':function(_0x5278ad,_0x5d7599){return _0x5278ad*_0x5d7599;},'bgtKZ':function(_0x13a620,_0xef9bb3){return _0x13a620<_0xef9bb3;},'cNIrT':_0x3c5b('‫f','98My'),'XZzCM':function(_0x3fceda,_0x1f313e){return _0x3fceda!==_0x1f313e;},'Oongr':'bkcgZ'};console[_0x3c5b('‮10','D^*z')]('\x0a【soy脚本文件免责声明】：\x0a【本仓库发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的，，否则后果自负】\x0a【不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断】\x0a【本脚本文件，禁止任何公众号、论坛、群体以及任何形式的转载、发布,否则后果自负】\x0a【本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害】\x0a【直接或间接使用脚本的任何用户，包括但不限于代挂或其他某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责】\x0a【如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本】\x0a【任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明】');if($['isNode']()){if(_0x3c727f['FNtpR'](_0x3c727f[_0x3c5b('‫11','e(X$')],_0x3c5b('‮12','!$ga'))){console[_0x3c5b('‮13','55Z0')](_0x3c5b('‮14','(0u!'));return![];}else{var _0x42424d=_0x3c727f['LzVhW'](require,'fs'),_0x1e9622=_0x3c727f['MycvT'](require,_0x3c727f['qGYOX']);function _0x3d73b9(){var _0x43b285='';var _0x23c282=_0x42424d[_0x3c5b('‮15','&4JJ')](_0x3c727f[_0x3c5b('‫16',']iGX')]);_0x23c282[_0x3c5b('‮17','IH3e')](function(_0x549af8){if('ClDKA'!==_0x3c727f[_0x3c5b('‮18',')E)l')]){_0x43b285=_0x42424d[_0x3c5b('‮19','98My')](_0x45d1c3)[_0x3c5b('‮1a','rcRP')]()[_0x3c5b('‫1b','3MJi')]();}else{var _0x45d1c3=_0x1e9622[_0x3c5b('‫1c','xX2m')](_0x3c727f[_0x3c5b('‮1d','55Z0')],_0x549af8,_0x3c5b('‫1e','v(cH'));if(_0x3c727f[_0x3c5b('‮1f','y2MD')](_0x549af8[_0x3c5b('‮20','v(cH')](0x0,0x3),_0x3c727f['nrGRd'])&&_0x42424d[_0x3c5b('‮21','QQk4')](_0x45d1c3)){_0x43b285=_0x42424d['readFileSync'](_0x45d1c3)[_0x3c5b('‮22','e(X$')]()['trim']();};}});return _0x43b285;};mac=_0x3d73b9();let _0x33ea72=$[_0x3c5b('‮23','@*Mi')]()?process[_0x3c5b('‫24','e(X$')][_0x3c5b('‫25','(0u!')]:'';if(!_0x33ea72){console[_0x3c5b('‫26','98My')]('\x0a【'+$[_0x3c5b('‮27','(D4u')]+_0x3c5b('‮28','v(cH'));return!![];}else{TG_ID=_0x33ea72['split']('&')[0x0];yyz_Kami=_0x33ea72[_0x3c5b('‫29','*OPz')]('&')[0x1];try{if(_0x3c5b('‮2a','y4X(')!==_0x3c727f[_0x3c5b('‫2b','xX2m')]){Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}else{CryptoJs=$[_0x3c5b('‫0','&4JJ')]()?require(_0x3c727f['VdsYo']):'';}}catch(_0x4ec218){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}try{YZ=author[_0x3c5b('‫2c','(AO]')](/作者TG_ID:(\S*)/)[0x1][_0x3c5b('‮2d','^4L0')](/_/g,'><');}catch(_0xdc549e){if(_0x3c727f[_0x3c5b('‫2e','jc&D')]===_0x3c727f['SYCqb']){console[_0x3c5b('‮2f','^4L0')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫30','lXjx')]+'\x20提现】:\x20'+result[_0x3c5b('‫31','98My')]);subTitle+='\x0a【'+Tips+_0x3c5b('‫32','jc&D')+$['index']+_0x3c5b('‫33','rcRP')+result[_0x3c5b('‫34','*VjR')];}else{throw new Error(_0x3c5b('‮35',')E)l'));}}};if(process[_0x3c5b('‮36','*ZWo')][_0x3c5b('‮37','ZRN]')]&&_0x3c727f['EwsLB'](process['env']['soy_ggb_data']['indexOf']('\x0a'),-0x1)){if(_0x3c5b('‫38','lXjx')===_0x3c727f[_0x3c5b('‮39','yTt6')]){app_soy_ggb_data=process[_0x3c5b('‫3a','P$$G')]['soy_ggb_data']['split']();}else{app_soy_ggb_data=process[_0x3c5b('‫3a','P$$G')][_0x3c5b('‮3b','ycCW')]['split']('\x0a');}}else if(process[_0x3c5b('‫3c','!$ga')][_0x3c5b('‫3d','QQk4')]&&_0x3c727f[_0x3c5b('‮3e','[g!W')](process[_0x3c5b('‫3f','3MJi')][_0x3c5b('‫40','BGkS')][_0x3c5b('‮41','xX2m')]('#'),-0x1)){app_soy_ggb_data=process['env']['soy_ggb_data'][_0x3c5b('‫42','55Z0')]('#');}else if(process[_0x3c5b('‮36','*ZWo')][_0x3c5b('‫3d','QQk4')]&&_0x3c727f['BXsQg'](process[_0x3c5b('‫43','y4X(')][_0x3c5b('‮44','t2hf')]['indexOf']('@'),-0x1)){app_soy_ggb_data=process[_0x3c5b('‫45','rcRP')][_0x3c5b('‫46','EeBI')][_0x3c5b('‫47','jaNx')]('@');}else{if(_0x3c5b('‮48','yTt6')!==_0x3c727f[_0x3c5b('‮49','D^*z')]){console[_0x3c5b('‫4a','&4JJ')]('\x0a【'+Tips+_0x3c5b('‫4b','3MJi')+$[_0x3c5b('‮4c','&4JJ')]+_0x3c5b('‮4d','y2MD')+num+_0x3c5b('‫4e','rcRP'));}else{app_soy_ggb_data=process['env'][_0x3c5b('‫4f','3MJi')][_0x3c5b('‫50','Ea0i')]();}};user_num=app_soy_ggb_data[_0x3c5b('‮51','lj!C')];console[_0x3c5b('‮2f','^4L0')](_0x3c5b('‮52','Ea0i')+new Date(_0x3c727f[_0x3c5b('‮53','IH3e')](_0x3c727f[_0x3c5b('‫54','P$$G')](new Date()[_0x3c5b('‫55',')E)l')](),_0x3c727f['fekTp'](new Date()[_0x3c5b('‮56','y4X(')](),0x3c)*0x3e8),_0x3c727f[_0x3c5b('‫57',')E)l')](_0x3c727f[_0x3c5b('‫58','ycCW')](0x8,0x3c)*0x3c,0x3e8)))[_0x3c5b('‫59','@*Mi')]()+_0x3c5b('‫5a','P$$G'));await _0x3c727f[_0x3c5b('‮5b','lj!C')](yyz_login);console[_0x3c5b('‫5c','*ZWo')](_0x3c5b('‫5d','2g3G')+user_num+_0x3c5b('‮5e','eREG'));subTitle='';for(i=0x0;_0x3c727f[_0x3c5b('‮5f','yTt6')](i,user_num);i++){if(_0x3c727f[_0x3c5b('‫60','55Z0')]!==_0x3c727f[_0x3c5b('‮61','lXjx')]){var _0x4b4cf6='';var _0x259e3e=_0x42424d[_0x3c5b('‮62','yTt6')]('/sys/class/net/');_0x259e3e[_0x3c5b('‫63','@*Mi')](function(_0x2f3e5b){var _0x11f2f3=_0x1e9622[_0x3c5b('‮64','yTt6')](_0x3c5b('‮6','(0u!'),_0x2f3e5b,'address');if(_0x3c727f[_0x3c5b('‫65','e(X$')](_0x2f3e5b['substr'](0x0,0x3),_0x3c727f[_0x3c5b('‮66','lj!C')])&&_0x42424d[_0x3c5b('‮67','IH3e')](_0x11f2f3)){_0x4b4cf6=_0x42424d[_0x3c5b('‮68','!$ga')](_0x11f2f3)[_0x3c5b('‫69','*ZWo')]()['trim']();};});return _0x4b4cf6;}else{let _0x3ebd28=app_soy_ggb_data[i][_0x3c5b('‫6a','&4JJ')]('&');ggb_token=_0x3ebd28[0x1];ggb_start=_0x3ebd28[0x0];$[_0x3c5b('‫6b','@*Mi')]=_0x3c727f[_0x3c5b('‮6c','jaNx')](i,0x1);console[_0x3c5b('‫6d','(0u!')](_0x3c5b('‮6e','(0u!')+$['index']+_0x3c5b('‫6f','P$$G'));if(yyz_d){await _0x3c727f[_0x3c5b('‮70','7@fL')](implement);}else{console[_0x3c5b('‫71','e(X$')](_0x3c5b('‮72','BGkS'));}}};}}else{console[_0x3c5b('‫73','jaNx')](_0x3c5b('‫74','v(cH'));return;}if(notify){if(subTitle){if(_0x3c727f[_0x3c5b('‮75','^4L0')](_0x3c5b('‮76','y2MD'),_0x3c727f[_0x3c5b('‫77','[g!W')])){_0x3c727f[_0x3c5b('‮78','ZRN]')](resolve);}else{await notify['sendNotify']($[_0x3c5b('‫79','xX2m')],subTitle);}}}})()[_0x3c5b('‮7a','(AO]')](_0x5d89c7=>$['logErr'](_0x5d89c7))[_0x3c5b('‫7b','lXjx')](()=>$[_0x3c5b('‫7c','QQk4')]());async function implement(){var _0x349518={'OkxkS':function(_0x409464){return _0x409464();},'ByzOc':function(_0x50367f,_0x2f71c5){return _0x50367f(_0x2f71c5);},'wxJnQ':function(_0x1249f9,_0x319f0a){return _0x1249f9+_0x319f0a;},'JiyFe':function(_0x181be6,_0x392d99){return _0x181be6*_0x392d99;},'hIxNH':function(_0x18db4f,_0x55ef6d){return _0x18db4f+_0x55ef6d;},'ntYhw':function(_0x44e025,_0x2e461f){return _0x44e025-_0x2e461f;}};await _0x349518[_0x3c5b('‫7d','!$ga')](ggb_index);let _0x59f2c8=0x0;for(let _0x45471e=0x3;_0x45471e<ggb_start;_0x45471e++){await _0x349518[_0x3c5b('‫7e','Q^vv')](get_money,_0x45471e);await $[_0x3c5b('‮7f',')E)l')](Math['floor'](_0x349518[_0x3c5b('‫80','98My')](_0x349518[_0x3c5b('‫81','&(f*')](Math[_0x3c5b('‫82','55Z0')](),_0x349518[_0x3c5b('‮83','[g!W')](_0x349518[_0x3c5b('‮84','e(X$')](0xfa0,0xbb8),0x3e8)),0x3e8)));}console[_0x3c5b('‫85','P$$G')]('\x0a【'+Tips+_0x3c5b('‮86','eREG')+$[_0x3c5b('‫87','7@fL')]+_0x3c5b('‫88','yTt6')+_0x59f2c8+'次');}function ggb_index(){var _0x130ea3={'MdIBM':function(_0xe06904,_0x27e3ba){return _0xe06904!==_0x27e3ba;},'VJbwf':'AlObe','JCsrL':_0x3c5b('‮89','y4X('),'wvKrV':function(_0x3e99b9,_0x5ec9cb){return _0x3e99b9==_0x5ec9cb;},'wybcl':function(_0x4a87fd,_0x273021){return _0x4a87fd>_0x273021;},'BORzW':function(_0x26a5fe,_0x41a2c7){return _0x26a5fe!==_0x41a2c7;},'NxNIu':'lOfHv','gLLOO':'lFNNq','Ffert':function(_0x217c97,_0xacb08a){return _0x217c97(_0xacb08a);},'SLViE':function(_0x57ea68,_0x102a5b){return _0x57ea68/_0x102a5b;},'idGbt':function(_0x594949,_0x5c96c1){return _0x594949*_0x5c96c1;},'IuNWB':function(_0x249366,_0x9fed61){return _0x249366===_0x9fed61;},'uTzRy':_0x3c5b('‮8a','!$ga'),'LDaos':function(_0xf22d95,_0x138a07,_0x2b69e5){return _0xf22d95(_0x138a07,_0x2b69e5);}};let _0x54641e=_0x130ea3['LDaos'](Post_request,_0x3c5b('‫8b','v(cH'),_0x3c5b('‮8c','kIe^'));return new Promise((_0x3ac22f,_0x3c1d46)=>{if(_0x130ea3[_0x3c5b('‮8d','^4L0')](_0x130ea3[_0x3c5b('‮8e','*OPz')],_0x130ea3[_0x3c5b('‮8f','eREG')])){$['post'](_0x54641e,async(_0x4e12fd,_0x48c00b,_0x483902)=>{try{if(_0x130ea3[_0x3c5b('‫90','0u44')](_0x130ea3['VJbwf'],_0x3c5b('‮91','kIe^'))){console[_0x3c5b('‮92','g3Rk')](e);}else{if(_0x4e12fd){if('SEeuu'!==_0x130ea3[_0x3c5b('‫93','0u44')]){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫30','lXjx')]+_0x3c5b('‮94','98My'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20个人信息】:\x20网络请求失败';}else{console[_0x3c5b('‫85','P$$G')](e,_0x48c00b);}}else{let _0x345bdd=JSON[_0x3c5b('‫95','2o($')](_0x483902);if(_0x130ea3[_0x3c5b('‮96','2g3G')](_0x345bdd[_0x3c5b('‮97','(D4u')],0x1)){money=_0x345bdd[_0x3c5b('‮98','QQk4')][_0x3c5b('‫99','IH3e')][_0x3c5b('‫9a','[g!W')];console[_0x3c5b('‮9b','(AO]')]('\x0a【'+Tips+_0x3c5b('‫9c','7@fL')+$['index']+_0x3c5b('‮9d','eREG')+_0x345bdd['data']['userinfo'][_0x3c5b('‫9e','3MJi')]+_0x3c5b('‮9f','(D4u')+_0x345bdd['data'][_0x3c5b('‮a0','9hXx')]['money']);subTitle+='\x0a【'+Tips+_0x3c5b('‫a1','ycCW')+$['index']+_0x3c5b('‮a2','98My')+_0x345bdd[_0x3c5b('‫a3','ycCW')][_0x3c5b('‮a4','@*Mi')][_0x3c5b('‮a5','g3Rk')]+'\x20\x20\x20余额：'+_0x345bdd[_0x3c5b('‮a6','lXjx')][_0x3c5b('‫a7','QQk4')]['money'];if(_0x130ea3[_0x3c5b('‫a8','eREG')](money,0x2)){if(_0x130ea3['BORzW'](_0x130ea3[_0x3c5b('‫a9','ZRN]')],_0x130ea3['gLLOO'])){await _0x130ea3['Ffert'](withdraw,_0x130ea3[_0x3c5b('‮aa','ycCW')](Math[_0x3c5b('‮ab','3MJi')](_0x130ea3['idGbt'](money,0x64)),0x64));}else{console['log']('\x0a【'+Tips+_0x3c5b('‮ac','0u44')+$[_0x3c5b('‫ad','55Z0')]+'\x20签到】:\x20网络请求失败');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x3c5b('‮ae','*VjR');}}}else{if(_0x130ea3[_0x3c5b('‮af','0u44')]('klbzY',_0x3c5b('‮b0','t2hf'))){console['log']('\x0a【'+Tips+_0x3c5b('‫b1','rcRP')+$[_0x3c5b('‫b2','ZRN]')]+_0x3c5b('‮b3','QQk4')+_0x345bdd[_0x3c5b('‮b4','lj!C')]);}else{throw new Error(_0x3c5b('‫b5','*ZWo'));}}}}}catch(_0x88c6e1){console['log'](_0x88c6e1,_0x48c00b);}finally{_0x3ac22f();}});}else{console[_0x3c5b('‫b6','[g!W')]('\x0a['+TG_ID+_0x3c5b('‮b7','*ZWo')+result[_0x3c5b('‫b8','55Z0')]);subTitle+='\x0a['+TG_ID+_0x3c5b('‫b9','*VjR')+result['msg'];yyz_d=![];}});}function withdraw(_0x1c1384){var _0x24af8c={'qLgZW':function(_0x363eb7,_0x293b3a){return _0x363eb7!==_0x293b3a;},'IhDcE':_0x3c5b('‫ba','ZRN]'),'bULWH':function(_0x398b03,_0x422f4d){return _0x398b03===_0x422f4d;},'SJilO':_0x3c5b('‫bb','IH3e'),'JSbLD':'QQisw','DHshr':_0x3c5b('‫bc','P$$G'),'ZSLKM':function(_0x227eef){return _0x227eef();},'eJkOl':_0x3c5b('‮bd','y4X('),'gxNQp':function(_0x584532,_0x500a40,_0x1d1562){return _0x584532(_0x500a40,_0x1d1562);}};let _0x5ab253=_0x24af8c[_0x3c5b('‫be','0u44')](Post_request,'user/user_withdraw',_0x3c5b('‮bf','9hXx')+_0x1c1384+'\x22,\x22platform\x22:null}');return new Promise((_0x1bec1c,_0x2c4ebd)=>{var _0x488a8f={'TfOrO':function(_0x31dc83,_0x1af6f9){return _0x31dc83==_0x1af6f9;},'bBzNN':function(_0x412a36,_0xb54e51){return _0x24af8c['qLgZW'](_0x412a36,_0xb54e51);},'pDwko':_0x3c5b('‮c0','e(X$'),'jnoOY':_0x24af8c[_0x3c5b('‮c1','P$$G')],'IJTmj':function(_0x31a0cb,_0x9f0950){return _0x24af8c[_0x3c5b('‫c2','D^*z')](_0x31a0cb,_0x9f0950);},'TMWlI':_0x24af8c[_0x3c5b('‫c3','(0u!')],'GdtpI':_0x24af8c[_0x3c5b('‫c4','(0u!')],'pcgMm':function(_0x57ee56,_0x14ab73){return _0x57ee56==_0x14ab73;},'LGndZ':_0x24af8c['DHshr'],'gXIpm':function(_0x5d70e4){return _0x24af8c['ZSLKM'](_0x5d70e4);}};if('RGmRb'!==_0x24af8c[_0x3c5b('‫c5','*ZWo')]){$[_0x3c5b('‮c6','t2hf')](_0x5ab253,async(_0x5da008,_0x5b0b4a,_0x4a1667)=>{if(_0x488a8f['bBzNN']('mXNpO',_0x488a8f[_0x3c5b('‮c7','ycCW')])){try{if(_0x5da008){if(_0x3c5b('‫c8','yTt6')===_0x488a8f[_0x3c5b('‫c9','v(cH')]){console[_0x3c5b('‮ca','@*Mi')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x3c5b('‫cb',')E)l'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‮cc','0u44')]+'\x20签到状态】:\x20网络请求失败';}else{console[_0x3c5b('‫cd','ycCW')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫ad','55Z0')]+'\x20提现】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x3c5b('‫ce','*VjR')+$[_0x3c5b('‫cf','P$$G')]+_0x3c5b('‮d0','*VjR');}}else{if(_0x488a8f[_0x3c5b('‫d1','lXjx')](_0x488a8f[_0x3c5b('‮d2','(0u!')],_0x488a8f['GdtpI'])){if(_0x488a8f[_0x3c5b('‫d3',']iGX')](result['data'],null)){console[_0x3c5b('‮d4','Ea0i')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‮d5','IH3e')]+_0x3c5b('‫d6','2g3G')+num+'次没有获取到红包');}else{console[_0x3c5b('‫d7','t2hf')]('\x0a【'+Tips+_0x3c5b('‮d8','*OPz')+$['index']+'\x20观看视频】:\x20第'+num+_0x3c5b('‮d9','0u44')+result['data'][_0x3c5b('‮da','kIe^')]+'红包');}}else{let _0x1c61ce=JSON[_0x3c5b('‫db','ZRN]')](_0x4a1667);if(_0x488a8f[_0x3c5b('‮dc','3MJi')](_0x1c61ce[_0x3c5b('‫dd','55Z0')],0x1)){console[_0x3c5b('‮de','6hn#')]('\x0a【'+Tips+_0x3c5b('‫df','FvZ4')+$[_0x3c5b('‫e0','(D4u')]+_0x3c5b('‮e1','lj!C')+_0x1c61ce[_0x3c5b('‮e2','BGkS')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x3c5b('‮e3','Q^vv')+_0x1c61ce[_0x3c5b('‮e4','eREG')];}else{console['log']('\x0a【'+Tips+_0x3c5b('‫a1','ycCW')+$['index']+_0x3c5b('‫e5','[g!W')+_0x1c61ce['msg']);subTitle+='\x0a【'+Tips+_0x3c5b('‮86','eREG')+$[_0x3c5b('‮4c','&4JJ')]+_0x3c5b('‫e6','e(X$')+_0x1c61ce[_0x3c5b('‫e7','ZRN]')];}}}}catch(_0x5ace3b){if('CjYBZ'!==_0x488a8f[_0x3c5b('‫e8','eREG')]){console[_0x3c5b('‮e9','QQk4')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20提现】:\x20'+result[_0x3c5b('‫ea','g3Rk')]);subTitle+='\x0a【'+Tips+_0x3c5b('‫9c','7@fL')+$[_0x3c5b('‫eb','v(cH')]+_0x3c5b('‮ec','*OPz')+result[_0x3c5b('‮b4','lj!C')];}else{console[_0x3c5b('‫ed','2g3G')](_0x5ace3b,_0x5b0b4a);}}finally{_0x488a8f[_0x3c5b('‫ee','7@fL')](_0x1bec1c);}}else{console['log']('\x0a['+TG_ID+_0x3c5b('‫ef','(AO]')+result[_0x3c5b('‮f0','^4L0')]+_0x3c5b('‫f1','xX2m'));yyz_d=![];}});}else{_0x488a8f['gXIpm'](_0x1bec1c);}});}function getSignInf(){var _0x9c43fb={'XfbqH':_0x3c5b('‫f2','55Z0'),'areMU':'lBFpZ','WfMaD':function(_0x2842f8,_0x14412f){return _0x2842f8==_0x14412f;},'GPRIz':function(_0x1bb342,_0x15fa1a){return _0x1bb342!==_0x15fa1a;},'gDchI':_0x3c5b('‮f3',')E)l'),'KEsSY':_0x3c5b('‫f4','55Z0'),'BseWA':'vFqAe','rWGNU':function(_0xd7a7d8,_0x476f92,_0x38cba2){return _0xd7a7d8(_0x476f92,_0x38cba2);}};let _0x2c651a=_0x9c43fb[_0x3c5b('‮f5','*ZWo')](Post_request,'shake/getSignInfo',''+user_index);return new Promise((_0x41a8af,_0x2878b7)=>{if(_0x9c43fb[_0x3c5b('‮f6','rcRP')](_0x9c43fb[_0x3c5b('‫f7','eREG')],_0x9c43fb[_0x3c5b('‮f8','FvZ4')])){$['post'](_0x2c651a,async(_0x13cc45,_0x3f4c54,_0x5517b4)=>{try{if(_0x13cc45){if(_0x9c43fb['XfbqH']===_0x9c43fb[_0x3c5b('‮f9','lj!C')]){console[_0x3c5b('‮fa','v(cH')](e,_0x3f4c54);}else{console[_0x3c5b('‫fb','y2MD')]('\x0a【'+Tips+_0x3c5b('‮fc','[g!W')+$[_0x3c5b('‮fd','*OPz')]+_0x3c5b('‫fe','55Z0'));subTitle+='\x0a【'+Tips+_0x3c5b('‫ff','EeBI')+$[_0x3c5b('‮100','*ZWo')]+_0x3c5b('‮101','2g3G');}}else{let _0x29f9a0=JSON[_0x3c5b('‫102','rcRP')](_0x5517b4);if(_0x9c43fb[_0x3c5b('‮103','BGkS')](_0x29f9a0[_0x3c5b('‫104','kIe^')],0x1)){if(_0x9c43fb[_0x3c5b('‫105','ZRN]')](_0x3c5b('‮106','ZRN]'),_0x3c5b('‮107','ycCW'))){if(_0x9c43fb['WfMaD'](_0x29f9a0[_0x3c5b('‮108','BGkS')][_0x9c43fb['gDchI']],0x0)){await sign();}else{console[_0x3c5b('‮d4','Ea0i')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x3c5b('‫109','2g3G'));subTitle+='\x0a【'+Tips+_0x3c5b('‫10a','jaNx')+$['index']+'\x20签到状态】:\x20今天已签到';}}else{console['log']('\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x13cc45);subTitle+='\x0a['+TG_ID+_0x3c5b('‫10b','t2hf')+_0x13cc45;}}else{console[_0x3c5b('‫10c','*OPz')]('\x0a【'+Tips+_0x3c5b('‮10d','6hn#')+$[_0x3c5b('‮100','*ZWo')]+_0x3c5b('‫10e','&4JJ')+_0x29f9a0['msg']);subTitle+='\x0a【'+Tips+_0x3c5b('‫10f','P$$G')+$[_0x3c5b('‮110','jc&D')]+_0x3c5b('‫111','lj!C')+_0x29f9a0[_0x3c5b('‮112','e(X$')];}}}catch(_0x55b6ac){console['log'](_0x55b6ac,_0x3f4c54);}finally{_0x41a8af();}});}else{console[_0x3c5b('‫113','xAhF')](_0x3c5b('‮114','lj!C'));return;}});}function sign(){var _0x373ec6={'VmbPZ':_0x3c5b('‫115','@*Mi'),'IniNl':_0x3c5b('‮116','!$ga'),'YSwNX':_0x3c5b('‫117','55Z0'),'voAcO':function(_0x522126,_0xef696c){return _0x522126==_0xef696c;},'UqnqN':function(_0x556e9b){return _0x556e9b();}};let _0x4a9c34=Post_request('shake/sign','{\x22page\x22:null}');return new Promise((_0x2446ae,_0x552abe)=>{$[_0x3c5b('‮118','jc&D')](_0x4a9c34,async(_0x27c1d1,_0x4e8067,_0x2909dd)=>{if(_0x3c5b('‫119','!$ga')!==_0x373ec6['VmbPZ']){_0x2446ae();}else{try{if(_0x373ec6[_0x3c5b('‫11a','kIe^')]===_0x373ec6[_0x3c5b('‮11b','ycCW')]){console['log'](_0x3c5b('‮11c','g3Rk'));}else{if(_0x27c1d1){console[_0x3c5b('‫26','98My')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‮11d','lj!C')]+_0x3c5b('‫11e','FvZ4'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫11f','t2hf')]+_0x3c5b('‫120','*ZWo');}else{let _0x51e1ad=JSON[_0x3c5b('‫102','rcRP')](_0x2909dd);if(_0x373ec6[_0x3c5b('‮121','yTt6')](_0x51e1ad[_0x3c5b('‮97','(D4u')],0x1)){console[_0x3c5b('‫122','FvZ4')]('\x0a【'+Tips+_0x3c5b('‮123','P$$G')+$[_0x3c5b('‫124','BGkS')]+_0x3c5b('‫125',')E)l'));subTitle+='\x0a【'+Tips+_0x3c5b('‫126',')E)l')+$[_0x3c5b('‫127','EeBI')]+_0x3c5b('‫128','55Z0');}else{console['log']('\x0a【'+Tips+_0x3c5b('‫129',']iGX')+$[_0x3c5b('‮12a','9hXx')]+_0x3c5b('‫12b','!$ga')+_0x51e1ad[_0x3c5b('‮f0','^4L0')]);subTitle+='\x0a【'+Tips+_0x3c5b('‫12c','^4L0')+$[_0x3c5b('‮12d','!$ga')]+_0x3c5b('‮12e','*ZWo')+_0x51e1ad[_0x3c5b('‫12f','y2MD')];}}}}catch(_0x3ffc96){console[_0x3c5b('‫10c','*OPz')](_0x3ffc96,_0x4e8067);}finally{_0x373ec6[_0x3c5b('‮130',']iGX')](_0x2446ae);}}});});}function get_money(_0x2b167c){var _0x4bfebf={'TMTOi':function(_0x16799c,_0x57a076){return _0x16799c==_0x57a076;},'SSpsp':'HnfhD','eTLtx':function(_0x389ae1){return _0x389ae1();},'DYELx':function(_0x3c63cf,_0x2dbfaf,_0x341c18){return _0x3c63cf(_0x2dbfaf,_0x341c18);}};let _0x3adf0f=user_index[_0x3c5b('‫131','0u44')](/替换/g,_0x2b167c);let _0x5532f8=_0x4bfebf[_0x3c5b('‮132','g3Rk')](Post_request,_0x3c5b('‮133','yTt6'),_0x3adf0f);return new Promise((_0x41673c,_0x26414a)=>{var _0x4b8861={'JsjbY':function(_0x2e6b94,_0x4dcf5d){return _0x4bfebf[_0x3c5b('‫134','IH3e')](_0x2e6b94,_0x4dcf5d);},'jBdoJ':_0x4bfebf['SSpsp'],'HagQe':'StcAo','eFpCN':function(_0x36f094){return _0x4bfebf[_0x3c5b('‫135','0u44')](_0x36f094);}};$[_0x3c5b('‮136','e(X$')](_0x5532f8,async(_0x4e4410,_0x10b157,_0x573f0a)=>{try{if(_0x4e4410){console[_0x3c5b('‫137','3MJi')]('\x0a【'+Tips+_0x3c5b('‫138','9hXx')+$[_0x3c5b('‮139','jaNx')]+'\x20观看视频】:\x20网络请求失败');}else{let _0x2b327b=JSON['parse'](_0x573f0a);if(_0x4b8861[_0x3c5b('‮13a','ZRN]')](_0x2b327b[_0x3c5b('‮13b','jc&D')],0x1)){if(_0x4b8861['jBdoJ']!==_0x4b8861[_0x3c5b('‫13c','3MJi')]){if(_0x4b8861[_0x3c5b('‫13d','yTt6')](_0x2b327b['data'],null)){console[_0x3c5b('‫85','P$$G')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫13e','y2MD')]+_0x3c5b('‮13f',']iGX')+_0x2b167c+_0x3c5b('‮140','v(cH'));}else{console[_0x3c5b('‫4a','&4JJ')]('\x0a【'+Tips+_0x3c5b('‫ff','EeBI')+$['index']+_0x3c5b('‮141','jaNx')+_0x2b167c+'次获取到'+_0x2b327b[_0x3c5b('‫142',']iGX')]['see_price']+'红包');}}else{let _0x19a4a1=JSON[_0x3c5b('‫102','rcRP')](_0x573f0a);if(_0x19a4a1[_0x3c5b('‫143','@*Mi')]==0xc8){console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x19a4a1[_0x3c5b('‮144','[g!W')]+_0x3c5b('‫145',']iGX'));return![];}else{console[_0x3c5b('‮146','rcRP')]('\x0a['+TG_ID+_0x3c5b('‮147','7@fL')+_0x19a4a1['msg']);subTitle+='\x0a['+TG_ID+_0x3c5b('‮148','xAhF')+_0x19a4a1[_0x3c5b('‫149','v(cH')];return![];}}}else{console[_0x3c5b('‫10c','*OPz')]('\x0a【'+Tips+_0x3c5b('‫14a','t2hf')+$['index']+'\x20观看视频】:\x20'+_0x2b327b[_0x3c5b('‮14b','EeBI')]);}}}catch(_0x37a1d1){console[_0x3c5b('‮14c','y4X(')](_0x37a1d1,_0x10b157);}finally{if(_0x3c5b('‫14d','IH3e')!=='mdYzy'){console[_0x3c5b('‫137','3MJi')]('\x0a['+TG_ID+_0x3c5b('‫14e','e(X$')+_0x4e4410);subTitle+='\x0a['+TG_ID+_0x3c5b('‮14f','7@fL')+_0x4e4410;}else{_0x4b8861[_0x3c5b('‫150','g3Rk')](_0x41673c);}}});});}function Get_request(_0x42ac5f){var _0x2ef520={'dlYHN':'Dart/2.16\x20(dart:io)','XvnDj':_0x3c5b('‮151','55Z0'),'GBXgy':_0x3c5b('‫152','t2hf'),'tllWG':_0x3c5b('‫153','y2MD')};return{'url':_0x3c5b('‮154','y2MD')+_0x42ac5f,'headers':{'user-agent':_0x2ef520[_0x3c5b('‫155','(D4u')],'content-type':_0x2ef520['XvnDj'],'accept-encoding':_0x2ef520[_0x3c5b('‫156','(D4u')],'content-length':0x0,'token':ggb_token,'host':_0x2ef520[_0x3c5b('‫157','55Z0')]}};};function Post_request(_0xc423b2,_0x5b0ae8){var _0x560dd5={'zYjmE':_0x3c5b('‮158','(D4u'),'dPNOe':_0x3c5b('‮159','7@fL'),'cpSct':_0x3c5b('‮15a','2g3G'),'SvSAM':'ggb.culink.vip'};return{'url':_0x3c5b('‫15b','xAhF')+_0xc423b2,'headers':{'user-agent':_0x560dd5['zYjmE'],'Content-Type':_0x560dd5[_0x3c5b('‮15c','*OPz')],'accept-encoding':_0x560dd5[_0x3c5b('‫15d','D^*z')],'content-length':_0x5b0ae8['length'],'token':ggb_token,'host':_0x560dd5[_0x3c5b('‮15e','xAhF')]},'body':_0x5b0ae8};};function formatDate(){var _0xc388f2={'NeyKK':function(_0x3a023e,_0x52b58e){return _0x3a023e+_0x52b58e;},'KsxBT':function(_0x3f4103,_0x28349b){return _0x3f4103<_0x28349b;}};let _0x27d9e5=new Date();let _0x5a89ca=_0x27d9e5[_0x3c5b('‫15f','yTt6')]();let _0x8495b9=_0xc388f2['NeyKK'](_0x27d9e5[_0x3c5b('‮160','*ZWo')](),0x1);let _0x1a4ae6=_0x27d9e5['getDate']();_0x8495b9=_0xc388f2['KsxBT'](_0x8495b9,0xa)?_0xc388f2[_0x3c5b('‫161','9hXx')]('0',_0x8495b9):_0x8495b9;_0x1a4ae6=_0xc388f2[_0x3c5b('‮162','7@fL')](_0x1a4ae6,0xa)?'0'+_0x1a4ae6:_0x1a4ae6;return _0x5a89ca+'/'+_0x8495b9+'/'+_0x1a4ae6;};async function yyz_login(){var _0x2e06ac={'MhfcE':function(_0x597dee,_0x3f0c6e){return _0x597dee!==_0x3f0c6e;},'puAlZ':'KkGNv','sOwYg':function(_0x11eb0e,_0xc57dfe){return _0x11eb0e==_0xc57dfe;},'jqUvO':_0x3c5b('‮163','98My'),'khaNc':function(_0x67ce3d,_0x2b66ae){return _0x67ce3d(_0x2b66ae);},'JyEbe':function(_0x510bac){return _0x510bac();},'nMulu':'ZoSAS','MUZIu':function(_0x243738,_0x352493){return _0x243738!==_0x352493;},'yQNEV':'Dart/2.16\x20(dart:io)','PNhqo':_0x3c5b('‮164',']iGX'),'ijums':_0x3c5b('‮165','&(f*'),'DVtlj':function(_0xf654f7,_0x30ddbd){return _0xf654f7+_0x30ddbd;}};var _0x49e735=Math[_0x3c5b('‫166','*OPz')](Date['now']()/0x3e8);var _0x4d9872=CryptoJs[_0x3c5b('‮167','P$$G')](''+TG_ID+mac+os['hostname']()+YZ)[_0x3c5b('‮168','0u44')]();var _0x50fd3e='account='+TG_ID+_0x3c5b('‮169','@*Mi')+_0x4d9872+_0x3c5b('‫16a','0u44')+_0x49e735;var _0xf8d6aa=CryptoJs['MD5'](_0x2e06ac[_0x3c5b('‮16b',']iGX')](_0x50fd3e,'&')+appid)[_0x3c5b('‫16c','(D4u')]();_0x50fd3e=_0x2e06ac['DVtlj'](_0x2e06ac[_0x3c5b('‫16d',')E)l')](_0x50fd3e,'&sign='),_0xf8d6aa);let _0x2390b0={'url':serverUrl+'user_logon','headers':{'user-agent':_0x3c5b('‮16e','55Z0')},'body':_0x50fd3e};return new Promise((_0x19057e,_0x17a6f6)=>{var _0xc0fa={'IQULG':_0x2e06ac[_0x3c5b('‫16f','@*Mi')],'ykjtY':'application/json;\x20charset=utf-8'};if(_0x2e06ac[_0x3c5b('‮170','@*Mi')]===_0x2e06ac[_0x3c5b('‮171','v(cH')]){console[_0x3c5b('‮172','0u44')](e);}else{$[_0x3c5b('‫173','ycCW')](_0x2390b0,async(_0x57df95,_0x1acb88,_0x4f9e2f)=>{var _0x76807e={'kcgwm':function(_0x4c9775,_0x112944){return _0x4c9775+_0x112944;},'bsJLr':function(_0x321797,_0xc8ec81){return _0x321797<_0xc8ec81;},'YEnpd':function(_0x4fa464,_0x125cba){return _0x4fa464+_0x125cba;}};try{if(_0x57df95){console['log']('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x57df95);subTitle+='\x0a['+TG_ID+_0x3c5b('‮174','7@fL')+_0x57df95;}else{if(_0x2e06ac[_0x3c5b('‫175','rcRP')](_0x2e06ac['puAlZ'],_0x3c5b('‮176',']iGX'))){console[_0x3c5b('‮177','!$ga')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫178','rcRP')]+'\x20观看视频】:\x20网络请求失败');}else{let _0x2b5757=JSON[_0x3c5b('‮179','6hn#')](_0x4f9e2f);if(_0x2e06ac['sOwYg'](_0x2b5757[_0x3c5b('‮17a','0u44')],0xc8)){if(_0x2e06ac[_0x3c5b('‫17b','&(f*')]!==_0x3c5b('‫17c','ycCW')){let _0x513e13=_0x2e06ac[_0x3c5b('‮17d','lXjx')](Format_time,_0x2b5757[_0x3c5b('‫17e','&4JJ')][_0x3c5b('‫17f','0u44')][_0x3c5b('‫180','kIe^')]);console[_0x3c5b('‮181','lXjx')]('\x0a['+TG_ID+_0x3c5b('‫182','kIe^')+_0x513e13);await _0x2e06ac['khaNc'](get_vip,_0x2b5757['msg'][_0x3c5b('‫183',')E)l')]);}else{let _0x2c3a82=new Date();let _0x502bb6=_0x2c3a82[_0x3c5b('‫184','rcRP')]();let _0xf9307e=_0x76807e['kcgwm'](_0x2c3a82[_0x3c5b('‫185','98My')](),0x1);let _0x4b01be=_0x2c3a82['getDate']();_0xf9307e=_0xf9307e<0xa?'0'+_0xf9307e:_0xf9307e;_0x4b01be=_0x76807e[_0x3c5b('‫186','Q^vv')](_0x4b01be,0xa)?_0x76807e[_0x3c5b('‫187','Q^vv')]('0',_0x4b01be):_0x4b01be;return _0x502bb6+'/'+_0xf9307e+'/'+_0x4b01be;}}else if(_0x2b5757[_0x3c5b('‫188','3MJi')]==0x71){await _0x2e06ac[_0x3c5b('‮189','e(X$')](yyz_user_reg);}else{console[_0x3c5b('‫18a','yTt6')](_0x4f9e2f);console[_0x3c5b('‮de','6hn#')]('\x0a['+TG_ID+_0x3c5b('‮18b','t2hf')+_0x2b5757['msg']);subTitle+='\x0a['+TG_ID+_0x3c5b('‫18c','FvZ4')+_0x2b5757[_0x3c5b('‮18d','xX2m')];yyz_d=![];}}}}catch(_0x134a1d){if(_0x2e06ac[_0x3c5b('‫18e','eREG')](_0x2e06ac[_0x3c5b('‮18f','^4L0')],_0x2e06ac[_0x3c5b('‮190','*OPz')])){return{'url':_0x3c5b('‮191',')E)l')+url,'headers':{'user-agent':_0xc0fa['IQULG'],'Content-Type':_0xc0fa[_0x3c5b('‫192','*VjR')],'accept-encoding':_0x3c5b('‮193','7@fL'),'content-length':body[_0x3c5b('‮194','y2MD')],'token':ggb_token,'host':_0x3c5b('‫195','98My')},'body':body};}else{console[_0x3c5b('‫4a','&4JJ')](_0x134a1d);}}finally{if(_0x2e06ac[_0x3c5b('‮196','*VjR')](_0x3c5b('‮197','P$$G'),_0x3c5b('‮198','rcRP'))){_0x19057e();}else{console[_0x3c5b('‫4a','&4JJ')]('\x0a【'+Tips+_0x3c5b('‫df','FvZ4')+$['index']+_0x3c5b('‮199','(0u!')+result[_0x3c5b('‮19a','D^*z')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫19b','[g!W')]+'\x20签到】:\x20'+result['msg'];}}});}});}async function yyz_user_reg(){var _0x3c9b65={'sObFW':_0x3c5b('‮19c','IH3e'),'lbjvv':function(_0x3a7b44,_0x5aaa5e){return _0x3a7b44&&_0x5aaa5e;},'cOQAK':function(_0x3a719f,_0x510146){return _0x3a719f/_0x510146;},'SAQGg':function(_0x2a87e6,_0x45dbc0){return _0x2a87e6+_0x45dbc0;},'Uqrti':function(_0x23821a,_0x12a7c5){return _0x23821a+_0x12a7c5;},'bgLsT':'&sign=','xvntB':_0x3c5b('‮19d','g3Rk')};if(_0x3c9b65[_0x3c5b('‮19e','Q^vv')](!Tips,!YZ)){console['log'](_0x3c5b('‮19f','2g3G'));return![];}var _0x430fe2=Math['floor'](_0x3c9b65[_0x3c5b('‮1a0','*OPz')](Date[_0x3c5b('‮1a1','D^*z')](),0x3e8));var _0x36e55f=CryptoJs[_0x3c5b('‮1a2','ycCW')](''+TG_ID+mac+os[_0x3c5b('‮1a3','jc&D')]()+YZ)[_0x3c5b('‫1a4','BGkS')]();var _0x52e10f=_0x3c5b('‮1a5','BGkS')+TG_ID+_0x3c5b('‫1a6','&4JJ')+_0x36e55f+'&t='+_0x430fe2;var _0xa4f918=CryptoJs['MD5'](_0x3c9b65['SAQGg'](_0x52e10f+'&',appid))['toString']();_0x52e10f=_0x3c9b65['SAQGg'](_0x3c9b65[_0x3c5b('‫1a7','6hn#')](_0x52e10f,_0x3c9b65[_0x3c5b('‮1a8','&4JJ')]),_0xa4f918);let _0x4810fc={'url':serverUrl+_0x3c5b('‫1a9','[g!W'),'headers':{'user-agent':_0x3c9b65[_0x3c5b('‫1aa','ZRN]')]},'body':_0x52e10f};return new Promise((_0x2d6f87,_0xeee75a)=>{var _0x3c76a6={'DtZsB':_0x3c5b('‫1ab','kIe^'),'WYguR':_0x3c5b('‮1ac','2g3G'),'Thkec':_0x3c9b65['sObFW']};$[_0x3c5b('‫1ad','FvZ4')](_0x4810fc,async(_0x33b919,_0x338003,_0x3763fc)=>{try{if(_0x3c76a6[_0x3c5b('‫1ae','2o($')]===_0x3c76a6['DtZsB']){if(_0x33b919){console[_0x3c5b('‮13','55Z0')]('\x0a['+TG_ID+_0x3c5b('‫1af','FvZ4')+_0x33b919);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x33b919;}else{if(_0x3c76a6[_0x3c5b('‮1b0',')E)l')]===_0x3c76a6['Thkec']){console['log'](e,_0x338003);}else{let _0x1485ec=JSON[_0x3c5b('‮1b1','yTt6')](_0x3763fc);if(_0x1485ec['code']==0xc8){await yyz_login();}else if(_0x1485ec[_0x3c5b('‫1b2','2g3G')]==0x75){console['log']('\x0a['+TG_ID+_0x3c5b('‫1b3','eREG')+_0x1485ec[_0x3c5b('‮112','e(X$')]+_0x3c5b('‮1b4','3MJi'));yyz_d=![];}else{console[_0x3c5b('‮172','0u44')]('\x0a['+TG_ID+_0x3c5b('‫1b5','g3Rk')+_0x1485ec['msg']);subTitle+='\x0a['+TG_ID+_0x3c5b('‮1b6','55Z0')+_0x1485ec[_0x3c5b('‫1b7','2o($')];yyz_d=![];}}}}else{console[_0x3c5b('‫1b8',')E)l')]('\x0a【'+Tips+_0x3c5b('‫1b9','y4X(')+$[_0x3c5b('‮1ba','ycCW')]+'\x20观看视频】:\x20'+result['msg']);}}catch(_0x337ec3){console[_0x3c5b('‫4a','&4JJ')](_0x337ec3);}finally{_0x2d6f87();}});});}async function get_vip(_0x154f71){var _0x5fd380={'kOCnc':_0x3c5b('‫1bb','0u44'),'aHEix':_0x3c5b('‮1bc','Q^vv'),'LdvwT':function(_0x3653ed,_0x2e6c59){return _0x3653ed===_0x2e6c59;},'jiGUM':'OXmkw','NFGye':_0x3c5b('‫1bd','*ZWo'),'GpehQ':function(_0x20f0a2,_0x27d47f){return _0x20f0a2===_0x27d47f;},'wNxGI':'YfFgv','QPrpV':_0x3c5b('‫1be','v(cH'),'KdATI':function(_0xb23943,_0x4fe6d0){return _0xb23943/_0x4fe6d0;},'rjeJO':function(_0xd9db1c,_0x16b8ff){return _0xd9db1c+_0x16b8ff;},'LPhnE':function(_0x4071a9,_0x21b110){return _0x4071a9+_0x21b110;},'Sedfh':function(_0x13b639,_0x25cb28){return _0x13b639+_0x25cb28;},'seWEr':function(_0x27f013,_0x1680db){return _0x27f013+_0x1680db;},'rwbxd':'&sign=','kmpeG':_0x3c5b('‮1bf','2g3G')};var _0x2a0502=Math['floor'](_0x5fd380['KdATI'](Date[_0x3c5b('‫1c0','Q^vv')](),0x3e8));var _0x45c574=_0x3c5b('‫1c1','xX2m')+user_num+_0x3c5b('‮1c2','e(X$')+_0x154f71+_0x3c5b('‮1c3','6hn#')+_0x2a0502;var _0x402be8=CryptoJs[_0x3c5b('‫1c4','yTt6')](_0x5fd380[_0x3c5b('‮1c5','98My')](_0x5fd380['LPhnE'](_0x45c574,'&'),appid))[_0x3c5b('‫1c6','D^*z')]();_0x45c574=_0x5fd380[_0x3c5b('‫1c7','xX2m')](_0x5fd380[_0x3c5b('‮1c8',')E)l')](_0x45c574,_0x5fd380['rwbxd']),_0x402be8);let _0x38631d={'url':serverUrl+'get_vip','headers':{'user-agent':_0x5fd380[_0x3c5b('‮1c9','e(X$')]},'body':_0x45c574};return new Promise((_0x4a9023,_0x1a8b33)=>{var _0x18bb13={'jAxJX':_0x5fd380[_0x3c5b('‫1ca','v(cH')],'WuHEL':_0x5fd380['aHEix'],'gQkxQ':function(_0x2b65b2,_0x338971){return _0x5fd380[_0x3c5b('‮1cb','2g3G')](_0x2b65b2,_0x338971);},'qdQEK':'uJyHP','ZpJGh':_0x5fd380['jiGUM'],'JlGNu':_0x5fd380[_0x3c5b('‮1cc',')E)l')]};if(_0x5fd380[_0x3c5b('‮1cd','D^*z')](_0x5fd380[_0x3c5b('‫1ce','ZRN]')],_0x5fd380['QPrpV'])){console[_0x3c5b('‮10','D^*z')]('\x0a【'+Tips+_0x3c5b('‫df','FvZ4')+$[_0x3c5b('‫1cf',')E)l')]+_0x3c5b('‫1d0','FvZ4'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x3c5b('‫87','7@fL')]+_0x3c5b('‫1d1','EeBI');}else{$[_0x3c5b('‮1d2','98My')](_0x38631d,async(_0x11aa89,_0x2e1f05,_0x22a8ab)=>{var _0x2a95b0={'lnHNi':function(_0x53a4ed){return _0x53a4ed();}};try{if(_0x11aa89){if(_0x3c5b('‫1d3','*VjR')!==_0x18bb13[_0x3c5b('‮1d4','7@fL')]){_0x2a95b0['lnHNi'](_0x4a9023);}else{console[_0x3c5b('‫26','98My')]('\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x11aa89);subTitle+='\x0a['+TG_ID+_0x3c5b('‮1d5','*OPz')+_0x11aa89;}}else{if(_0x18bb13[_0x3c5b('‫1d6','IH3e')]===_0x3c5b('‮1d7','rcRP')){console[_0x3c5b('‫1b8',')E)l')](e,_0x2e1f05);}else{let _0x19401d=JSON[_0x3c5b('‫102','rcRP')](_0x22a8ab);if(_0x19401d[_0x3c5b('‮1d8','*ZWo')]==0xc8){user_index=_0x19401d['msg'];yyz_d=!![];}else if(_0x19401d['code']==0xca){console[_0x3c5b('‮1d9','*VjR')]('\x0a['+TG_ID+_0x3c5b('‫1da','y4X(')+_0x19401d['msg']);subTitle+='\x0a['+TG_ID+_0x3c5b('‮1db','0u44')+_0x19401d['msg'];}else if(_0x19401d[_0x3c5b('‫1dc',']iGX')]==0xcd){console['log']('\x0a['+TG_ID+_0x3c5b('‫1dd','0u44')+_0x19401d[_0x3c5b('‫1de','jaNx')]);subTitle+='\x0a['+TG_ID+_0x3c5b('‫1df','ZRN]')+_0x19401d[_0x3c5b('‮144','[g!W')];}else{console[_0x3c5b('‫122','FvZ4')](_0x22a8ab);if(yyz_Kami){if(_0x18bb13[_0x3c5b('‫1e0','Ea0i')]('uJyHP',_0x18bb13['qdQEK'])){await card(_0x154f71);}else{console['log']('\x0a【'+Tips+_0x3c5b('‫1e1','QQk4')+$[_0x3c5b('‫1e2','D^*z')]+_0x3c5b('‮1e3','FvZ4')+_0x19401d[_0x3c5b('‮e4','eREG')]);}}else{console[_0x3c5b('‫1e4','lj!C')]('\x0a['+TG_ID+_0x3c5b('‫1e5','9hXx'));subTitle+='\x0a['+TG_ID+_0x3c5b('‮1e6','2g3G');yyz_d=![];}}}}}catch(_0xb91b8){if(_0x18bb13['ZpJGh']===_0x18bb13['JlGNu']){YZ=author[_0x3c5b('‫1e7',')E)l')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}else{console[_0x3c5b('‫1e8','7@fL')](_0xb91b8);}}finally{_0x4a9023();}});}});}async function card(_0x423859){var _0x2bdf37={'ERGgC':_0x3c5b('‫1e9','ZRN]'),'AtPFq':_0x3c5b('‫1ea','&(f*'),'mIxRz':function(_0x3863f0,_0x2f0ef9){return _0x3863f0+_0x2f0ef9;},'JEYXK':function(_0x53e88b,_0x147cb6){return _0x53e88b+_0x147cb6;},'KXzeT':'&sign=','PIDrd':_0x3c5b('‫1eb','xX2m')};console[_0x3c5b('‮2f','^4L0')](yyz_Kami);var _0x41e331=Math[_0x3c5b('‮1ec','ZRN]')](Date['now']()/0x3e8);var _0x573e6e=_0x3c5b('‮1ed','xX2m')+_0x423859+'&kami='+yyz_Kami+_0x3c5b('‮1ee','&4JJ')+_0x41e331;var _0x47ea16=CryptoJs[_0x3c5b('‮1ef','rcRP')](_0x2bdf37[_0x3c5b('‫1f0','[g!W')](_0x2bdf37[_0x3c5b('‮1f1','(D4u')](_0x573e6e,'&'),appid))[_0x3c5b('‮1f2','@*Mi')]();_0x573e6e=_0x2bdf37['JEYXK'](_0x573e6e,_0x2bdf37[_0x3c5b('‮1f3','xX2m')])+_0x47ea16;let _0x45ecb0={'url':serverUrl+_0x3c5b('‮1f4','3MJi'),'headers':{'user-agent':_0x2bdf37[_0x3c5b('‫1f5','EeBI')]},'body':_0x573e6e};return new Promise((_0x2b7241,_0x1ac3ba)=>{var _0x9a00e7={'DPcuM':function(_0x1db0c7,_0x1cb4c0){return _0x1db0c7===_0x1cb4c0;},'TQMLd':'xPNhs','mdNZh':function(_0x483564,_0x3bbfdf){return _0x483564!==_0x3bbfdf;},'unyLD':_0x2bdf37[_0x3c5b('‮1f6','Ea0i')],'lMnNn':_0x2bdf37['AtPFq'],'XfmnH':_0x3c5b('‫1f7','D^*z')};$['post'](_0x45ecb0,async(_0x125013,_0x7f41dd,_0x155f61)=>{if(_0x9a00e7[_0x3c5b('‮1f8','P$$G')](_0x9a00e7[_0x3c5b('‫1f9',']iGX')],_0x9a00e7[_0x3c5b('‫1fa','lj!C')])){try{if(_0x9a00e7[_0x3c5b('‮1fb','IH3e')](_0x9a00e7[_0x3c5b('‮1fc','&4JJ')],_0x3c5b('‫1fd','jaNx'))){if(_0x125013){console[_0x3c5b('‮1fe','(D4u')]('\x0a['+TG_ID+_0x3c5b('‮14f','7@fL')+_0x125013);subTitle+='\x0a['+TG_ID+_0x3c5b('‫1ff','y4X(')+_0x125013;}else{let _0x42cb33=JSON[_0x3c5b('‫200','7@fL')](_0x155f61);if(_0x42cb33[_0x3c5b('‮201','t2hf')]==0xc8){console['log']('\x0a['+TG_ID+_0x3c5b('‮202','jc&D')+_0x42cb33[_0x3c5b('‫203','kIe^')]+'，脚本已正常使用');return![];}else{if(_0x9a00e7['DPcuM'](_0x9a00e7[_0x3c5b('‫204','*ZWo')],_0x9a00e7[_0x3c5b('‮205','rcRP')])){console[_0x3c5b('‫fb','y2MD')]('\x0a【'+$['name']+_0x3c5b('‫206','Ea0i'));return!![];}else{console[_0x3c5b('‮e9','QQk4')]('\x0a['+TG_ID+_0x3c5b('‮207','[g!W')+_0x42cb33['msg']);subTitle+='\x0a['+TG_ID+_0x3c5b('‫208','P$$G')+_0x42cb33[_0x3c5b('‫1de','jaNx')];return![];}}}}else{console[_0x3c5b('‫209','xX2m')]('\x0a['+TG_ID+_0x3c5b('‫20a','(D4u')+result['msg']);subTitle+='\x0a['+TG_ID+_0x3c5b('‮20b','jaNx')+result['msg'];return![];}}catch(_0x4eb4b6){console[_0x3c5b('‮e9','QQk4')](_0x4eb4b6);}finally{_0x2b7241();}}else{app_soy_ggb_data=process['env'][_0x3c5b('‮20c','rcRP')][_0x3c5b('‫20d','y4X(')]('#');}});});}function Format_time(_0x573092){var _0x3bffa1={'yvRfJ':function(_0x45f9fb,_0x203ebc){return _0x45f9fb*_0x203ebc;},'gCxpT':function(_0x2cd362,_0x2147c2){return _0x2cd362+_0x2147c2;},'zkuXo':function(_0x1d33e8,_0x438965){return _0x1d33e8+_0x438965;},'fabSr':function(_0x4b1c87,_0x2495de){return _0x4b1c87+_0x2495de;},'dbgSs':function(_0x175289,_0x47f2c3){return _0x175289<_0x47f2c3;},'KJtZa':function(_0xce82a5,_0x49f4ff){return _0xce82a5+_0x49f4ff;},'QKiuB':function(_0x556fd2,_0x2ae9a9){return _0x556fd2+_0x2ae9a9;}};var _0x547af0=new Date(_0x3bffa1['yvRfJ'](_0x573092,0x3e8));var _0x43ba14=_0x3bffa1['gCxpT'](_0x547af0[_0x3c5b('‮20e','QQk4')](),'-');var _0x36c5c9=(_0x3bffa1['gCxpT'](_0x547af0[_0x3c5b('‫20f','Ea0i')](),0x1)<0xa?'0'+_0x3bffa1[_0x3c5b('‫210','98My')](_0x547af0[_0x3c5b('‮211','t2hf')](),0x1):_0x3bffa1[_0x3c5b('‮212','!$ga')](_0x547af0[_0x3c5b('‫213','xAhF')](),0x1))+'-';var _0x5ea5bf=_0x3bffa1['zkuXo'](_0x547af0['getDate'](),'\x20');var _0x365b9f=_0x3bffa1[_0x3c5b('‫214','EeBI')](_0x547af0[_0x3c5b('‫215','[g!W')](),':');var _0xe6484d=_0x3bffa1[_0x3c5b('‫216','y4X(')](_0x3bffa1['dbgSs'](_0x547af0['getMinutes'](),0xa)?_0x3bffa1[_0x3c5b('‫217','QQk4')]('0',_0x547af0[_0x3c5b('‮218','Q^vv')]()):_0x547af0[_0x3c5b('‫219','!$ga')](),':');var _0x2a8b23=_0x547af0[_0x3c5b('‮21a','98My')]();let _0x37d46b=_0x3bffa1[_0x3c5b('‮21b','55Z0')](_0x3bffa1[_0x3c5b('‫21c',')E)l')](_0x3bffa1[_0x3c5b('‫21d','eREG')](_0x43ba14,_0x36c5c9),_0x5ea5bf)+_0x365b9f+_0xe6484d,_0x2a8b23);return _0x3bffa1[_0x3c5b('‮21e','yTt6')](_0x3bffa1[_0x3c5b('‫21f','D^*z')](_0x3bffa1[_0x3c5b('‫220','xX2m')](_0x3bffa1['QKiuB'](_0x43ba14,_0x36c5c9),_0x5ea5bf)+_0x365b9f,_0xe6484d),_0x2a8b23);};_0xod6='jsjiami.com.v6';


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