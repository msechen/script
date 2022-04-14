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


const $ = new Env('【广告吧22/04/14_2】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';

var _0xodo='jsjiami.com.v6',_0xodo_=['‮_0xodo'],_0x222d=[_0xodo,'w5LDjAPCgMOw','woMGAMOjwqk=','wrFMwq1hRA==','wqEMKMOlwok=','VWbCr8Oawr4CLw==','DcOYwr7Dl8KlwojDjsKZw7cpw406SSwqw5psw4XDpUIV','DGLDoMKwdw==','DsOfwqzDiA==','DsOEwp3DqMKG','XMOHAcOsFg==','woXDocKa','woDDkMKX5L2s55Sv5Y6f5a6owpXDlg==','UMOCKQ==','776m6IWS5pya5beQ5q2p5bit5Lyg55SS','woNhTcO9wo8=','wqJYwrl9TQ==','5o6y56Wkw6jClHnot5jljKPDjw==','wr80J8Ojwp4=','w4rCsSbDjSM=','wrfDpExc','6IWJ5p6x5o+B56WjAsOja+i3juWMksOt','wqXnr4vlirDjgb/DvSfnrqnliIrmiZ/lib7Cgw==','5oyK56SvSw7Ciui2meWOgVs=','wqDCvcK2wqsK','B+etveWLr+OCp8OlQeestOWKpeaKiOWLicKC','D8Ksw54=','w6jDhsOn','PsOudg==','w6zCvsKgPsKH','w7/nronlibLjgKzCoHc=','5o2f56e2w7VRw5/otIjljaXDvg==','wpIhB8OiwoY=','wqfnrqbliI/jg7vCs8Oo','woTDvcKa','w6rCjnEgYQ==','wrDCt8Kkwpsz','wrl6AkY=','UxZxwp5h','w4rCtcK+FcKi','UATDpMKO','w5nCtMK9NsKI','L8OKwrt0w7o=','wqDDkcKlPsKN','wqY7McO1woM=','w4IbUlh7','w6zCo8K8GQ==','Q+aMk+eMieOBgSbDog==','w6rCq1g=','wp3mjqfnj4fjg6ZEw4U=','w5F5Zw==','5oyR56WOw4TDtF/ot6/ljKDCgA==','w5VkZHYL','w6N1HA==','XuaNoOeNr+OCrcO6woc=','FjHClxAm','ZOinkueej+ikkemis+OAk8KGwrPnroM=','5q+V5rGc5pyi6Iyx5Y2Z5Yms57ib5Y+y','wobCpMKAwrkn','wo4DwrvCric=','wrfCpcOCa3A=','w7/opLXnnYnop7vpoIvjgYbDkcK056ym','w7TCvVrCtcO5wro8w4Zi','w6vCt1g=','5o6u56alw7kTwqDotKDljpJ0','Tm3Cu8OTwqc=','w6zmjKPnjpbjgLXDrU7nvqDnu4Tor6bmsI/lpYLotIw=','w4JMNMKew6w=','X+aOj+eNg+OBpGTDn+e9v+e5qOitmuaztuWluOi0sg==','wrwzw5oF','GDjCkVs9wopCw53Dg8OfZ2HDq0w=','wrhewoHCqQ0=','OsORwq3DiMOvwpXCgsOawrR6wo0BTzsqwr9ow4XCog==','AFcaw5RgYndYwpZqwqJaw74fV0ERbmM5w6TDscKAw4rChxrDhMKtw4ExFg==','wqFDbcOe','wrJhElPDlMKFWVTDiMOUH1Zfwqoaw7fCiR4wD1Eow4TDkjcPwqo=','wrrCimRrwpw=','w5DCswHDhDYQ','w5pIPMKpw6M=','wpwqF8OKwpFqwoYP','w7bCslPCuMO+','w4bDtAHCpsOO','w6BKbcOJwpjDow==','w4PCn8KD','LxrDsA==','w7LCgHAnallAbA==','wrzCn2Igd09Ce0HDpcOsSsOCZGxrw40QNsKJXkXDosK7wrIO','wpsDSg==','wqnChMOdUn0=','wq8nw5k0eQ==','w7wjFsKQDw==','NH/Dt8Kj','wpLDtMKmF8Ks','wqPDgVJdwqY=','PsO5wpnnmKvlvYnlp7PotZnCswpd','wqTCoMK1','woLDjWLnmYblv4/lpabot47CrirovpvlmZzCmg==','w48HS+eZieW+uuWkkOi0pcKew7zov5flmIvCgg==','w61pH8KX','SiB4wpM=','wqnDhwvnm73lv5rmiYzliKbDjWZTRsKI5Ymd5p2l5pSl6Zesbg==','aiXCusOpw4o=','wqIbwo3CvA==','wr7ClAIjw5A=','aV/CsOealOW/vOWmpei0n8OaworDtQ==','wrY6w5Q=','w5M8W+eaieW9t+WmjOi3jsOubBY=','Tj15','wrPCmCU=','w7nCpks4TA==','w6PDu8ONHcKh','FBvCncO9Ew==','wpxXSMOKwpg=','wrzCnGo0agU=','wotWfsOHwprCskoJwpzCuMOeFz7DsgFNwpRmwqt+XUrCgwtswqxXccKhbcOxw6rCojPDnMO5wqZjw4J6OcOGw4rDg2nDvzXCsGQNwq4Lw7cULkrCtsK+bcOcw7hQWMO5wrTDp8Kbd8KzOcKNczjCqCbDlMOIw4ZWwrFjesOswqfDiGtiUybDjcOBwqTCvMKGXADCnsOXB2ZDUsOFZsKVw6ElE1tLw5zDmyt4woPCmMKcw7PDj8OOwozCusOUax0awprDvcO+UsKFw4DDncKjK8K8w7Vdwp/Do8KgwoNQVMO8wrhfw7XDkyEGw41ofQTCrMK6BcKAw4VuDsOWw4xldMKuw4EJasOxwoHDo8KDe8KXSMOWwpd6wrEFw5AwKyIHw4kkwoDDuhcawoTCmcKKw5UbwpbCtsKBw4MUw4HDi8OFwqwCw7d/w47DsnrCs8Kfwo9jLlEHwow/','wqpWYw==','LeOAk+S+g+iCs+aMj+elm+OBm+++j+molOiul+iHpuacqcOZSMOf5aek6Le7wo/orrPlibzkvZDmlrXohrLmnKrkuqnkuZ3mh43lh6blrbA=','TzVnbzU=','wpUgFA==','M8Obw6E=','wqFCwqlsQsOSFX4=','woDCknjDssO9NcOXwpA=','wprCpg7DkDEPw7vDqyMxK8KDZkTCvMOJYQtuT8Obw6wEAsODwprCv8OqBETCt8OEdsKZBHtQ','w5fCqzY=','wpxbBHvDvQ==','w7DCgcKBwrbCnw==','FjHClsONJsKXwrrCiA==','wqYMwpnCuD4=','wpnDv8K1A8Ku','IsKlw74pXw==','U1LCh8OTwos=','wokRwobCqxg=','w5tkG2HCmQ==','woosw6YyVw==','woTCkljDsg==','w7smUkNQ','BRDCscOpHA==','fnQ+5rCU5Yar5aav6La2DsO56L6b5Zqbw50=','wrReF1N/','N38cw69D','HcOLwrBuw5c=','BTDDjQXCsQ==','wrbCvGB0wqE=','wosMGcOowrY=','wqTDiFJWwqU=','w5BlZw==','woZzwpPkvIrnlKvljYflrZrCr8Kz6Lyr5ZiXEw==','GSrCpOS+qOeUiuWNo+WtusKpwo/ovoflm6TCjw==','HcOfwrvDmQ==','LzXCrsOvGg==','wq/Di2TmsrzlhJjlpofot43DsRs=','WRbDtw==','77+F6Ky2wobCiS3DkcOqwrPorIPlpLzCg1885bWa6KK/5rKw5YWE','wrZ6AQ==','EsOwwrM=','w7rCisKW','TyF5','wqs8bumqrOivp+i1g+WMt3nCnui8p+WYoMK2','wrAPBcOWwpQ=','wps1OcOvworCj3EBUsO5w7Q2WsOCSB/Dj8K7c8KKdcOHwrXCgCcVw5FnHcKuAMOFw7PDkMKOWnZtw7LDiFwjLcK1VsOGG8OBb8O+QcOoXVnCqsKTw5xTDHXDnlnCi8OUKEZkLcKHccKaQAcCccKGwqDDrsODO8OFwqB9wpDDlMO0A1I7wrMWw4sGBcKgbsOsBsOnJj5aw6bCgsKEw4zDjg3DsDzDpMOSW3Nxw5oULcKXXHg5SxE4w68zwrdPKBvDgcKEwqbDnCzCjMKoch4Nw6Vtw4HCg8KSwqQHw6E/wrtfL8OGwqEEw6zClcOEA8O6w6rDvjpFUMKqwoLCogZvw5wmwp/CkGnDjsK+VsO+w48FFMKja8KZGgg6P8OYRUbCrsOgKMKrwrVTw40ELcKfO0zDqx7Ck3nDu8OVw4EkwrPCu8KKw69lwpTCosOSwqg=','wrfDgnJ3woM=','w7AuLMOtwoPCjS0=','w507Xg==','wr8Hw4MESQ==','w4hcCsKeTA==','wqI1EMOywpTCin5J','w7vCmcOedGnDgw==','BTvCscOmIsKXwqQ=','MjfDujTCtg==','NA7CujM5','w4IfYWVz','LUTDsMKyeg==','wqFuQ8OKwpA=','w6fCjMOpw65n','Sh5cdSM=','wrVqwofCkSE=','WcOFKMOqPA==','wp7Ch23DkcOV','w6zDncKj6ait6K+26Lai5Yy2fCjov7LlmLR3','w5rDoh/pqaborYjot67ljqLCnyfov7Tlm7c3','w4TCqMKwHsKd','BMOIwr7Dn8Ki','WTh6cyI=','wr7DvEpVwpo=','w6XCu8K6EMKF','LMOBwp7DmMKZ','w6BNV+S+iOeVluWOhOWtosKjO+azl+aej+WOh+WtteWMtOS8n+eXkg==','w4PjgL3oh4DmnLTmj7znponjganvvIHmrL/ohZHmnKXlj5TogprpnoTpvbnnjp/lornotJM=','w4k5T1h9','wrnDqlxawoU=','DMO6wqRSw6xlAA==','wobCmErDosOJNcOVwpIVfGHCuw==','CzDCoAEswpZAw5M=','wobCgy05','wqhJwr5qScOACw==','Q2jCk8Oiwq0=','CX/DvsK+Tm7DncK8wpp9CsKPwpsKLi50al9Tw4Aww7XDrAojw63CqMOgBF4mZDohwoIGw5tOEiTDv8KVCcKSRy0MwqDCo8OKY0/DgsOlLQkLBcKMLw9vwpjCssKqw4HDvDM4NMOVw4JOIyfDksK8w73Dm8OdwrPDsF7CtG/DqsOjwoU+LRDCiMOfQ8KAMArDucOxGUfCocOewrkbW8OgwqjCsMOqKg4fwqBMwrbDl2/CicK6OcKlwql2wrXDvTHDsMKsZj/DvcKkw7fCgsOzCsOhbMO1AxoBw6RSwp7CkhMXwrvCq8KWw6hOwrI4w5zDjcKBwpfDiRHDscKfPsOMPcKpw7YawozCg8KhwqbDlDMVw5AxwpbCsh/Dp8Omw44PwoZIw7PDl8KXEsO6w7XDnMKxw7jDs8OXw6TCgg7Dql41w5AfUUJSw6/Dq8OHw6DCvsKnw68hwq7DoMKe','w6hqFMKdUA==','w4QnQQ==','CsOfwrTDmcKuwpo=','D3saw6pCZw==','w4NCTg==','KXnDrMKOcg==','wpE7AcOMwpI=','w6XCicK1wrxh','wpfCnFnDog==','wrvCrGHDksOi','w4jCr8KSO8Kd','G8Orwrw=','G8Kgw7YHRA==','w5vCgcK4wpvCoA==','L3zDrMKGRQ==','w7zDlwrCo8Os','wo4Kw7ggQg==','KhzCuCAf','w4xlc2c=','woU7T1EldjNbwo7Cowd3wqzDkQ==','BmTDocK5TA==','JRPCtzoM','w6XChB7DpC0=','wohgN2LDpg==','w5xzKsKzYw==','w4YnUQ==','w4bCjzbkvaPnlJDljLvlrLnCsSPovpPlmI/ChA==','awlrbC4=','wrXCuj4Xw6A=','w7bDtQHCgcOx','wqhTRsOhwpA=','wqhhSsObwqY=','ZHkKw6ZC','w5EOB8KZHw==','w73DsTjCq8Od','woHChCYnw6DDhA==','ezLCuMO/w5AqwrRdwobClw==','wrjCnHVQwqUHwp9/','wq87w5oY','w7dyFuS9neeUouWNtOWumQDDnQ==','wpY8BA==','wql6H3zDgMOYFCTDi8OSCRk=','w6HDl3h1dQ==','wpPCmF/Di8OgMsONwp8=','w4LCg8Ozw5NF','wrE/N8OLwonCjWRG','wrVddMOcwoQ=','w5bCgsO3w6xYw6rCtS4=','w5bCgsO3w6lYw7HCszU=','wpgBLcOOwqg=','w5HDnUdkdg==','wpwqF8OKwpdqwocTM08=','woJyKUfDgQ==','w5tvdF4awr7DoFPDvAk=','w73CincebVZYfUDCqw==','wrRtwr3Cly7CtsOLDcK0w7I=','wqvCpA89w60=','woNALUrDng==','JgrCuBwn','XRbDnsKAw43DsQ==','w4hQKcKLw6DDh1DDgAM=','w5QEOcKYGsKA','wrbmibTkuI3liKPkv67otobCtWjDilpC6K646Iaa6KOQ5a6I6KOxJw==','w5TCohvDk3hXwrvDoD52NMOCOgnDsMKKKUx0VsKWwrAKC8OTw4HCocKkGRrCpMOfZcOLUS5dw4pwwrHDkx07wow=','wotWfsOHwprCskoJwpzCuMOeFz7DqQFNwoVxw6ctPGrCs1kyw7UdYcKiY8KXwrjDrFXCqcKQwqtawrh+IMOGw4nDhnDDvzTDiEk6wqQ1w4ZySzjDk8K9H8Kmw6hIKMKRwpfDnMO+e8OSJcKUdDjDnwTDk8Ogw4RNwrd2CsKzw7vClDAnVFTCssK7w5nDnsKeSlXDhcKSW38kZMOHa8KbwrpsagsKwpjCnHcgwozDqcOWwqTDgMK0w5PDpsKLKEkFwpjDuMO+VcKd','WsOlKsOXNQ==','dxbDvsKow4o=','wpfChSw=','w7XDoWR6VA==','w4bDvcKEK8OYacO4w4vDksKGw7jDn38zwoA=','EUYew5A=','wqXCsA5Ww6g=','wobDg09Qwr8=','DRbCjcOMAg==','JTjCscOXJA==','GcOPdhpJ','EsOKwovDr8KR','woouw5QMQA==','FOOBmsKiw6PDneiFg+afi+aWo+S4nuWGuei2vuWiluaYtOOCle+/rsOa44G+5pys5LmL5bqe5Yyj5bug55u86IaT5p2c5paM5Lup5Y+/5YSy5LiM5rWq5YyS55ir5LiL5L+U6ISO5pyk776w5Lm955e55Lqq5rSa6K6D5ZGi5ayp5Lu556Ci56mI772u56S45q+b55eF5Lq85ZWR5LqS5ouU6Z6m5rOB55uR55mD77yT77+t5ZGQ5YiV5ZKL5p6P6IWE6LW544K2aOOAluS4pOiCv+S/uOiuqeWEpOWStOazlOaBpeODo+WFm+egv+aAheOAguWvsuaUnOaCvuWRguack+aVtOaAl++/n+ishOaisOaOqeaBiOWGhOiFvuijtuWKkeaXteOBkMKT44Ct5pyb6IeA5pyd5peY5Lqb77+q56eB5qyn5LuV5Lyi5YSu5Ly05Y+f44GE6KyJ5Z+O44Ct57y35L+f5LqQ5Y2X5LiM5L+U5byv5b6N55mg6L+R6Lyf44C55Yyk5bi4w6/lkIvliYflkJ3mn5zoh6bot4vjgq8c44GV5p205Lqi5a2U5Luh5LyD6Ieq5p2k6ZWn6aOk5qeM5Lq66LeP6Leb772R5Yy75oif5L2E5Lqq6ZuH5LmT55W45Lm/5L+F6Ie15py86Zeg6Ky75a+86Iar55iP5Lql5L2D5o2D5aSC5oqp5o2g5a+X44CoOeOAj+eakeaMoeaJhOmVi+aNieS/nOeVleiFr+acmeebu+S4o+S9jOeWq+aJpu+9mOWPueaKs+S/ieS7uumYp+S4ouS4reaNteaLl+WHj+S5qOafrOS6nOighuS7vOi8vOWMuOWbouWsqwTln5rlj5DmsoHlvrjmi67nmJzlhpfmsJXop5Dnm4bmg7Tlh5fkuK7ov6DooKPkva/mkZTvvojmnbLkupTlrJzku6Lnlormr6flv7votpLnm5rkuK3kvbPpmpvnpIDmsa/mvLPmiZnlh5nkuqvlkY7mnKrmpqDkuJbotZPotpzjgYLCmeOCpOWmiuael+S5tOS+u+WOh+S9u+aIqOS5t+S5neispeS7l+isgeiFueaep+WOt+iAt+a0iOWqhOS+p+eKq+WHouafueWLr++9tOWKpeW7luWNoeaWgemBjeedoeW5k+aOmOS+rei4vOS6reits+aapeODqOaKv+adgOadvOiujuaZru++tuaKieS6ruWzkOWdu+aXjuWLluiupeitruaUt+S4qOWRleWIsOmYj+eZneWEkeiHoeaegOOCmMOm44Ku5Lqx5L6N5Lqa5Lif5L+O5pao5b6O5p2e552l5q6Z6aC055mu55i35LiW5oi755md5o265oix6ZWW5o2b5LyC55eQ6K2c5Lqc5bi855uX5LqB5L+16ISX5p6R55uv5LyJ55a86IGM6YG65bqb5Lmu57mp6ZiO6K+l5qyV5aKP5pqs44Ko5p2L5LiA5L2n55ac6ZqA5peG5pu55paC5omw6KO05YWA5q+w5Ya76Laf5aKc5pqz55ms5p2i5Yit44OB5Lu05pau5Lye55SB5bi55aSK5Yma5Lia5Liz5L2T55il5YaR6ISe5p6g5omh5Lqw5bmU5pef5LqO77yh5Yim6KeW5LiH5oKt5baK5o+95Y+15q6f5YeN6LWj5aC25pqz44C5','w6bCoMKtwoJv','wqweJcOkwr8=','U1TCk8ORwrc=','W8OePMOfHMODdQ==','wrBFwp7Cnik=','GsKuw4EgbA==','KWPDow==','77+W6K+wMmTDuMO2MlTorJHlprRSMWzltK3oo53msbblhas=','wrTDhm9vFznCk8OqcDTDvsOKwrIq','wpF5woJhWQ==','TsOELMOpCcOS','w4DDkcOiKsKe','w6rCtMKxD8KGXcOBwqclwoA=','w7TDkxTCusOk','RATCncOhw6c=','w6DCnVEfbw==','w6nDmsOn','5o2e56S8VsOfD+i2m+WMnMO0','w77Cl8KVwrLCqw==','VMOfKsO/BQ==','w7Pnrbbli7nnibLmgYrjg4TCnkPkuJrlpqjltZrnrr7liJM=','wrMRwojCvTTCoMK7w4VbGMOGw4o=','wrUbwrrCrQDCoMK5w4c=','wrUGwoDCtA==','w4LCj3bCm8OO','w7LCl8KH','w6jDmm9DQSPChcOUZybCpcOF','w47CmlTChcOk','44KG77+j5p+b5aK85YWK55mU5bqe5YyV6Ye1wp9icMOfwpQ6wqwbRsOjWMK3wrE=','WyfCvsO0w4U=','wr5XS8OYwp4=','wrcmw5Q=','wrInw5cQew==','w7/DvcOLJ8Ku','w5heQlYD','wrvjgq7kvKfog4fmjZXnpL3jgr7vvLTpqJTor4DohKfmn4bCh8ORCuWnj+i3pcKC6Kyc5YiC5L+L5paQ6ISC5pyW5Liq5Li+5oSG5YSj5ay4ZA==','a8OiDMOKMw==','wqdcJk9e','w5EYEA==','TuOAgOiGnuafu+aPsuekuOOCre++iemoo+iukuS4t+mCteWHgGrljqjogr3mnIzlirPlmIzlj6zlmaFy5aST6Z6e5Yu755GM5Yqp5Y2/6YOY5qyU5oiRXSgZP8KjRMOj','w79cH1HChw==','woDClDQ4w7XDlcKN','wrZmwr8=','GjHChQ==','RwrDqcKww47Ds1jCv8OOwrQ8Rg==','w4JMNMKew6zDpxs=','QAdpwopF','KSrCtS0d','Nm4Jw7Fi','wp/CgiM=','w6zDm8OkC8K/','wrnDuE8=','wofCklLDmcOoO8ObwqgiZHvCuQ==','wqg5w58cdw==','w6DDm8O2','wprDocKEB8KQbcO2w7XDhcKUwqPDkA==','wq4hwoHCvDE=','wr4nw4U=','EkgTw6duZnRzwptkwrgU','w5gZAQ==','w7zCo8KhI8KVScOwwoEvwoLCuw0=','VwpawpBV','wq7ChcOOTGDCmQzDsMKSf8KvXg==','w4MmUkdyWjk=','BEkc','Bj7DhinCs1HCmMOxw7vCgMKqwrg=','w6nCn286cA==','wrrCvMKrwpEVw7/DjMODw5law5h3','wog/D8Ouwoo=','D8Kmw5c3aMKq','w5F0wo5II+iEvOaesOaLsuijn8Ofw6QT5Y+85Lii5pWH6ZWv7721','wp81DsOkwoo=','B8KFw60ZZg==','wpFjOnRPCMKlOcORwp3Cm8OZB8OVw60aaQ==','wq1rwo5RVg==','w44OYmtw','J8OyXTZMwq8qwo3CtsK5YMOoChY=','ZC3CucOq','w6JpHA==','wpDDkj5u44CU5YWJDQ==','BiHDkx/CoA==','OsOzdTxX','wqrDqsK2FMK3','QH4fw6JT','woXDu8KuEcK9','w6HCh8KDwr9S','w67Dp25IUg==','w5DCuQg=','wp7CniM=','CzDCocOcLA==','wrLChCU=','wqgawo3CvAo=','wpzmjIbnj5/jgrJ4WA==','DFQN','wpcgBA==','ZANPwrVM','wqgsw50RTUnDqMO8w7XChg==','wpzCkCkx','wrHChcOQ','w40tQmR/eTNjwpjCsVo=','wr/CtU5CwoU=','w6jCqcKsMcKdQMOmwrY=','w6LDkMO0I8KoacKjUg==','EjTDizvCu1jCjsOG','EjTDizLCtULCnw==','wqzDoMK1BcKNwq3Ci8Ox','w51/LX/Cvw==','WsOUOsOXFMOOaA3CrCs=','wrRtwr3CiSLCu8ORF8K1w7I=','wpBIFFdn','eATCi8O7w6U=','w5kNGsKUCg==','w5LDnw/CocOt','RSdwwp1Lw7LDqg==','w6ppFcKX','w4XCvcKyMsKH','wq10D1c=','GMOcwrDDk8Ky','LcO5woZ5w7s=','EcKiw5c0c8Kv','wrdrwprCohM=','N1zDnsKFQw==','w58FAsKWFQ==','wqrChCdPwrU+woXDsG83','DzDCgAE=','w7nDklRGfw==','wqzCsnnDtMOn','HF/DlsKlSg==','DUgN','w4TCnsKQwpd+','w7/ku53ku7jkv5zmg7XjgYbDkcK0572b57qT6K215rO45aWn6La3','5oyN56eQwpo+Kui3mOWOmcKP','dyTCtcOpw5w=','wrfku5PkuYvkvLbmgrzjgr0ww63nvavnuaPor6bmsZ3lppfot64=','QHXCu8OjwqY=','w54YE8KS','w44pQkM=','w5zDkRXCp8O8','UcOeKQ==','5o6u56aKw7LCkcOt6LaB5Y2bw4s=','w5jCicOnw4RP','wpzkuKDkurrkv7LmgJzjg4HCrwfCk3BDYl3mmqnnp7HvvK4=','wr50EkI=','wqZ7wqzCtiLCu8OCDA==','wopoFuS9u+mil++8jw==','E8OfwrHDmcK5','5oyW56SDKcKDw5vot7jlj5wG','wqBDwr59VA==','IHHDsMK2','wqHDuE1LwoTCtXEY','TSd9wpdJw7/DvlE=','w6zDkwbkvb3poYrvvbQ=','w5HCuQHDhjs=','w6t3JGTChA==','MWkGw49i','wrrCn8KIwpwT','w5jDkB/Cp8O9','wovkuIjku6rkvJrmg7vjgrlHwoo=','w7bDhnE=','EsOfwrg=','F8OxwrBbw7U=','wp3nrInliYfjg6ZEw4Xnr5rliqnmiIvli6nDuA==','w41iDcK5bA==','QipcbCU=','wp3DvcK8L8Ky','w6DCl3F5TAXCi8OycyLDs8Kew7UpUgXCicKwOcKsBDpsw6rDvC3CmAPDkzU=','wpPCklnCssOpZsObSMO3c1DDiMOuw7c+wpLCrMOT','DirCrcO3Ng==','woXCg19OwrM=','S2zCuA==','wq/CmDFJ','wrw1OsORwqQ=','wq3CisKWwpYe','fC/DmMKJw58=','w6DCn8KOwptqGcKnNlAJIwTDqMKdwrjDtiJtDMK1RWHDrUwywrc1M8OQwq5PZ0LDgURJe8OXZcKbX0IhO1zCgHJsLWTCnMK8ZMOAwq3DiVVTw6NBW8OIaMOHOX5Lw7HDvsKvNcO5w6Q7w555V8OZRcKKSsKmw6bDrlPClXdnccKkwo3ClsKvw5zDjMKOf8OmfUnDjztfwrtdacK+bsOvUEYhO0vDim/DtXXDjl3CqWJVw45uEHXDkE3DomrCrksyYhN2fcObwqbCl8K2LcKIwr0dbMOgPsKyc2bClgnDjivDqsKKBMO1FcK0byrCujLChcKxEcO7w49EwqjCkcKCwo9JIMO4w4/DjicUaHVBQsO5QWthw7HDpsOjdznCoQzDjErCh8OVaMOhG2xRwovDt8KMwoHCuA/DvMOSAAotOwooLw==','w7/mjKfnj7LjgKzCoHfnvrrnuYjor73msI3lprPotp8=','w4TCnsKlwp/CvQ==','w5LCiMOnw4Q=','P8Oydg==','w7rmj4Xnj5bjgLLCncKf','5oyZ56SXw7c1Aei2leWOjzs=','X+aOj+eNg+OBpGTDnw==','wpnCjkw=','FMOpwp9Yw78=','woV9wrdSRA==','w7EnGsK9Fg==','5o+556SqVsKqBui1vOWNgcKv','E8ODwrg=','5o6l56WrwpJbw7notJDljI3Cjg==','w5bmj5bnj77jgLEcRQ==','SiB6wplf','w6nnrq3li6Ljg59Iwrjnv7/nuYDorYrmsbnlpp3otLM=','5oyP56eNbxDCt+i1seWMnMK0','w6bCosK8GcKK','wqXnr4vlirDjgb/DvSfnvobnu6borrjmsqPlp4zot7Y=','wpDCow8Cw4c=','UcODwqbDj8Ovw4TDgMKKw7EpwooLSz1x','JXTDoMKlR3HDjw==','wrp7wpbCqC7CsMOXCsK3w68=','wqNFNE7DjA==','wrbCmGLDisO7','w71uGsKZR8KSwozCsThlLcKDw49Aw67DvsOW','wqUewrvCozY=','wqrDhsO5HcOoZMK7WzzCksOSwr1KSg==','SDp0wpRN','MjrDiSXCsQ==','w7LDkDXCicOy','wonCvWt+wr8=','w7bDkMOxAcKz','woBAC1No','wq3Ch1/DksOo','wrZWd8Oa','WcO1KMOePw==','RFUew7NY','w7TCq8Omw7Rb','5oyr56W1TsKqw5PotKLljIVH','wrTChMOTdn8=','X+esoeWLg+eLg+aBn+ODrhTClOe/vOe5qOiuvuaxleWms+i0mQ==','5o2h56aEVsOvwqjotKHljZgO','w4MmUkdy','w4HDnwnCscOg','VitZwp1+','HcOwwrBb','wr/Co8K0wpsB','w6tEMmfCrA==','wqfCpHxCwrQ=','wrdHwpnCrCk=','wqxuwrVuZQ==','wrfnrofli4HniaHmg5Ljgr0ww63ku7Dlppblt6PnraHlipY=','CsKtw501ZA==','QuesoOWLteeIj+aBleODr8Ouw4/ku6nlpKbltrznrLTliJU=','dmzCt8KrE37CjMOvwps=','EMKzw5U5aA==','wrnCmDB4w7s0woM=','bGTCk8O5wpw=','w6rCpVQcQQ==','woVPwpzCpj4=','wolvRcONwqU=','F8Ksw6okbsKrEsOu','wrJLbcOD','wr0RAMOUwq8=','C8O4wpDDhcKS','AzzDpw7Ckw==','wqhvwqNBfw==','dXnChcO+wo8=','wp9oKkVe','w6HnrIrli5nnia/mgbPjg5jDrcKA','w5zClMOk','5o6v56Wlw55Yc+i3meWPmcKU','wpHnrpnlirPniJfmgLbjgpXDu2Y=','w4HjgpXkvp3ogYjmjLLnp6Ljg6jvvpjpqYTorJPoh4Dmnp4ow6ln5aeJ6LaPw5Hor7Tlia3kvILmlr3oh4HmnJ/kuaLkuarmhJflhYnlrZUh','wrfCicOAV1M=','woYAwrHCtzQ=','wqfDqsKm','w5LDtsO45LyD55ea5Y2P5a2Uw6Rr','wqHCgEE=','w6EwIOS9rOeVm+WOseWtkx3CuQ==','wqHmiZzkuZ3li4vkvInot75dw4kCDsKvAVrCn2nDhxJz6K2Q6IS26KCc5a6l6KGfw6Q=','w6HDpXV6Wg==','wqXCq8O+eXU=','CQ7Chx4x','w5bDksKEwpNhEMOkIwtSf0jCvQ==','w6LCoXPCk8Ox','wrEbwprCrQ==','wprCg8O5WWw=','wqTDt8KFFsKH','VT9qwr5B','WBReWjU=','wqXCvMK1','5o2K56eVLn4p6LSe5Y+aKQ==','wq/nrrLli6jjga3DiA7nv4PnuILorrzmsqHlp77otYk=','5oyb56a/w6xgw4/ot77ljI7Cog==','wq/CljBOw78=','wrZxwoXCvTM=','wrA6wr/CjQQ=','wqTCssKmwq0a','w4HCn8KT','6Iad5p+05o+v56eQwqTDpXjotoPlj7AA','wrbCmSZYw6I=','5o+O56Www7zCocKJ6LW/5YyQBA==','FOesm+WKoOODvsKTwrTnrYTli5DmirrliYo2','w4XCvsKVNcK7','w43CqnLCo8OA','Heils+edheilnOmjrOOCsSdZ56+l','5qyI5rKx5p2y6Iyw5Y+95Ymq57iU5Y6K','wrjDpE8=','5o2656WyGw8n6LSz5Y6oGg==','X+esoeWLg+OBpGTDnw==','wpt1KQ==','w6/CvMKBwp5N','w4g7G8K+Jg==','wr3CklHDosOV','w49DJMKa','wq7op4TnnbDopLTporPjgqzDkcO0562g','5q+t5rGS5pyv6I6T5YyB5Yme57mT5Yyd','wr9nwq4=','5q+T6I2G5Y6S5Ymk','WnUew5hbKMOfw6zChQ==','w7bCgGQ=','ASzCvMOJIMKRw7nChVA=','jsjNiamBpedXdiutL.Ecofmuz.v6=='];if(function(_0x2d8f05,_0x4b81bb,_0x4d74cb){function _0x32719f(_0x2dc776,_0x362d54,_0x2576f4,_0x5845c1,_0x4fbc7a,_0x6c88bf){_0x362d54=_0x362d54>>0x8,_0x4fbc7a='po';var _0x151bd2='shift',_0x558098='push',_0x6c88bf='‮';if(_0x362d54<_0x2dc776){while(--_0x2dc776){_0x5845c1=_0x2d8f05[_0x151bd2]();if(_0x362d54===_0x2dc776&&_0x6c88bf==='‮'&&_0x6c88bf['length']===0x1){_0x362d54=_0x5845c1,_0x2576f4=_0x2d8f05[_0x4fbc7a+'p']();}else if(_0x362d54&&_0x2576f4['replace'](/[NBpedXdutLEfuz=]/g,'')===_0x362d54){_0x2d8f05[_0x558098](_0x5845c1);}}_0x2d8f05[_0x558098](_0x2d8f05[_0x151bd2]());}return 0xdec27;};return _0x32719f(++_0x4b81bb,_0x4d74cb)>>_0x4b81bb^_0x4d74cb;}(_0x222d,0xff,0xff00),_0x222d){_0xodo_=_0x222d['length']^0xff;};function _0x9df7(_0x69351a,_0x4f2c4f){_0x69351a=~~'0x'['concat'](_0x69351a['slice'](0x1));var _0x4ce456=_0x222d[_0x69351a];if(_0x9df7['eCNBEt']===undefined){(function(){var _0x5a65ac=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1eaa9d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5a65ac['atob']||(_0x5a65ac['atob']=function(_0x2e2be0){var _0x3f3b79=String(_0x2e2be0)['replace'](/=+$/,'');for(var _0x698891=0x0,_0x48f886,_0x454aad,_0x2aa7fe=0x0,_0x38c0a4='';_0x454aad=_0x3f3b79['charAt'](_0x2aa7fe++);~_0x454aad&&(_0x48f886=_0x698891%0x4?_0x48f886*0x40+_0x454aad:_0x454aad,_0x698891++%0x4)?_0x38c0a4+=String['fromCharCode'](0xff&_0x48f886>>(-0x2*_0x698891&0x6)):0x0){_0x454aad=_0x1eaa9d['indexOf'](_0x454aad);}return _0x38c0a4;});}());function _0x332ad4(_0x4b1f38,_0x4f2c4f){var _0x431bcb=[],_0x391ee0=0x0,_0x3887f7,_0x599c2c='',_0x4cb6a5='';_0x4b1f38=atob(_0x4b1f38);for(var _0x330bab=0x0,_0xd538fb=_0x4b1f38['length'];_0x330bab<_0xd538fb;_0x330bab++){_0x4cb6a5+='%'+('00'+_0x4b1f38['charCodeAt'](_0x330bab)['toString'](0x10))['slice'](-0x2);}_0x4b1f38=decodeURIComponent(_0x4cb6a5);for(var _0x45d3fd=0x0;_0x45d3fd<0x100;_0x45d3fd++){_0x431bcb[_0x45d3fd]=_0x45d3fd;}for(_0x45d3fd=0x0;_0x45d3fd<0x100;_0x45d3fd++){_0x391ee0=(_0x391ee0+_0x431bcb[_0x45d3fd]+_0x4f2c4f['charCodeAt'](_0x45d3fd%_0x4f2c4f['length']))%0x100;_0x3887f7=_0x431bcb[_0x45d3fd];_0x431bcb[_0x45d3fd]=_0x431bcb[_0x391ee0];_0x431bcb[_0x391ee0]=_0x3887f7;}_0x45d3fd=0x0;_0x391ee0=0x0;for(var _0x415971=0x0;_0x415971<_0x4b1f38['length'];_0x415971++){_0x45d3fd=(_0x45d3fd+0x1)%0x100;_0x391ee0=(_0x391ee0+_0x431bcb[_0x45d3fd])%0x100;_0x3887f7=_0x431bcb[_0x45d3fd];_0x431bcb[_0x45d3fd]=_0x431bcb[_0x391ee0];_0x431bcb[_0x391ee0]=_0x3887f7;_0x599c2c+=String['fromCharCode'](_0x4b1f38['charCodeAt'](_0x415971)^_0x431bcb[(_0x431bcb[_0x45d3fd]+_0x431bcb[_0x391ee0])%0x100]);}return _0x599c2c;}_0x9df7['ilIQWe']=_0x332ad4;_0x9df7['pQfKmg']={};_0x9df7['eCNBEt']=!![];}var _0x4b655f=_0x9df7['pQfKmg'][_0x69351a];if(_0x4b655f===undefined){if(_0x9df7['fQwbHe']===undefined){_0x9df7['fQwbHe']=!![];}_0x4ce456=_0x9df7['ilIQWe'](_0x4ce456,_0x4f2c4f);_0x9df7['pQfKmg'][_0x69351a]=_0x4ce456;}else{_0x4ce456=_0x4b655f;}return _0x4ce456;};try{CryptoJs=$[_0x9df7('‫0','KD2C')]()?require(_0x9df7('‫1','&%n@')):'';}catch(_0xe67454){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x9df7('‮2','LeGL')]()?require('os'):'';}catch(_0xb0de75){throw new Error(_0x9df7('‮3','snsx'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl=_0x9df7('‫4','Z5t@'),yyz_UA=_0x9df7('‮5','aR84');!(async()=>{var _0x2ce005={'cMWZb':function(_0x11cca7,_0x1c6465){return _0x11cca7===_0x1c6465;},'ymxpp':_0x9df7('‫6','0^4('),'nobXh':_0x9df7('‮7','KD2C'),'JXoHu':'address','XTXyu':function(_0x45f88f,_0x14405d){return _0x45f88f==_0x14405d;},'EdbDY':_0x9df7('‫8','uNGn'),'Emoxa':function(_0x59c9b1,_0x53a1f9){return _0x59c9b1===_0x53a1f9;},'ZNLmC':_0x9df7('‫9','Lts9'),'zrRLk':'ZJxUU','tWLgh':_0x9df7('‮a','D5m%'),'sFhfR':function(_0x56b0c1,_0x297dbc){return _0x56b0c1+_0x297dbc;},'OBFMP':function(_0x5cd5b8,_0x398142){return _0x5cd5b8<_0x398142;},'fNZwA':function(_0x38cc48,_0x2e9d28){return _0x38cc48+_0x2e9d28;},'dzmct':function(_0x3671cc,_0x226b8e){return _0x3671cc+_0x226b8e;},'KPYpi':function(_0x16f783,_0x3bdaba){return _0x16f783(_0x3bdaba);},'WQFcA':_0x9df7('‫b','Sy5h'),'EWIqG':function(_0x428f89){return _0x428f89();},'IBkom':_0x9df7('‫c','AYnx'),'HLdew':_0x9df7('‫d','U]fr'),'zHKIi':function(_0x1d0d8c,_0x66779b){return _0x1d0d8c!==_0x66779b;},'dTBEp':_0x9df7('‮e','plgH'),'aYiJd':function(_0x5d4a72,_0x2fe354){return _0x5d4a72!==_0x2fe354;},'QZhox':'VSBPN','cIwvb':function(_0x4d144e,_0xe0e3f2){return _0x4d144e===_0xe0e3f2;},'VuFXC':'jjkPY','oUheC':_0x9df7('‫f','plgH'),'zIWRs':_0x9df7('‮10','J%y^'),'tDDlr':function(_0x54e9e9,_0x42a751){return _0x54e9e9>_0x42a751;},'dFTIz':function(_0x1cb28b,_0x16e65c){return _0x1cb28b*_0x16e65c;},'aowYU':function(_0x1d3171,_0x9ee088){return _0x1d3171+_0x9ee088;},'luSIJ':_0x9df7('‫11','uckK'),'OWKIg':function(_0x48f600,_0x42815c){return _0x48f600!==_0x42815c;},'DdYVN':_0x9df7('‮12','judi'),'uRxTj':'WRjMj','JvfMN':function(_0xb05c3f,_0x266da6){return _0xb05c3f!==_0x266da6;},'GMQIk':'zgMrl','kOZXH':'lxLpV','DxKCQ':function(_0x5693b1,_0x47f2d5){return _0x5693b1===_0x47f2d5;}};console['log'](_0x9df7('‮13','PzY6'));if($['isNode']()){var _0x3feccc=_0x2ce005[_0x9df7('‫14','%Wza')](require,'fs'),_0x41484d=require(_0x2ce005[_0x9df7('‮15','o*Nx')]);function _0x198444(){var _0x2a6c32='';var _0x546d4d=_0x3feccc['readdirSync'](_0x2ce005[_0x9df7('‫16','WXsT')]);_0x546d4d[_0x9df7('‮17','0^4(')](function(_0x38f031){if(_0x2ce005[_0x9df7('‮18','rjzP')](_0x2ce005[_0x9df7('‮19','^$ig')],_0x2ce005['nobXh'])){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x9df7('‫1a','rAJ9')]+_0x9df7('‫1b','4njr'));yyz_d=![];}else{var _0x4bd34b=_0x41484d['join'](_0x9df7('‫1c','Lts9'),_0x38f031,_0x2ce005['JXoHu']);if(_0x2ce005[_0x9df7('‫1d','MdMd')](_0x38f031[_0x9df7('‮1e','0^4(')](0x0,0x3),_0x2ce005[_0x9df7('‫1f','sc!a')])&&_0x3feccc[_0x9df7('‮20','y(W%')](_0x4bd34b)){if(_0x2ce005[_0x9df7('‮21','i$Kf')](_0x2ce005[_0x9df7('‮22','PzY6')],_0x2ce005[_0x9df7('‫23','YZ2h')])){console[_0x9df7('‮24','sc!a')]('\x0a【'+Tips+_0x9df7('‫25','[gUQ')+$[_0x9df7('‫26','05[g')]+'\x20签到状态】:\x20今天已签到');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫27','0^4(')]+_0x9df7('‮28','rjzP');}else{_0x2a6c32=_0x3feccc[_0x9df7('‮29','C(c1')](_0x4bd34b)[_0x9df7('‫2a','C(c1')]()[_0x9df7('‮2b','C(c1')]();}};}});return _0x2a6c32;};mac=_0x2ce005[_0x9df7('‮2c','6yxT')](_0x198444);let _0x142b41=$['isNode']()?process[_0x9df7('‮2d','05[g')][_0x9df7('‮2e','Lts9')]:'';if(!_0x142b41){if('zGLkr'===_0x2ce005[_0x9df7('‫2f','6yxT')]){console['log']('\x0a【'+$['name']+_0x9df7('‫30','05[g'));return!![];}else{throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}}else{TG_ID=_0x142b41['split']('&')[0x0];yyz_Kami=_0x142b41['split']('&')[0x1];try{if(_0x2ce005[_0x9df7('‮31','PzY6')](_0x2ce005['HLdew'],_0x9df7('‫32','aR84'))){console[_0x9df7('‫33','judi')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫34','judi')]+'\x20观看视频】:\x20网络请求失败');}else{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}}catch(_0x38a9df){if(_0x2ce005[_0x9df7('‫35','sc!a')](_0x2ce005[_0x9df7('‮36','snsx')],_0x2ce005[_0x9df7('‮36','snsx')])){os=$['isNode']()?require('os'):'';}else{throw new Error(_0x9df7('‮37','i$Kf'));}}try{if(_0x2ce005['aYiJd'](_0x9df7('‮38','0^4('),_0x2ce005[_0x9df7('‫39','gvkl')])){console[_0x9df7('‮3a','LeGL')](_0x9df7('‫3b','rAJ9'));}else{YZ=author[_0x9df7('‫3c','*[!P')](/作者TG_ID:(\S*)/)[0x1][_0x9df7('‮3d','uNGn')](/_/g,'><');}}catch(_0x2ed5f2){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}};if(process[_0x9df7('‮3e','rjzP')]['soy_ggb_data']&&process[_0x9df7('‮3f','TT@V')][_0x9df7('‮40','KD2C')][_0x9df7('‫41','&%n@')]('\x0a')>-0x1){if(_0x2ce005[_0x9df7('‫42','6aVX')](_0x2ce005[_0x9df7('‫43','TT@V')],_0x9df7('‫44','Sy5h'))){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到状态】:\x20'+result[_0x9df7('‫45','uNGn')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫46','sc!a')]+'\x20签到状态】:\x20'+result[_0x9df7('‮47','U]fr')];}else{app_soy_ggb_data=process['env'][_0x9df7('‫48','Emy$')][_0x9df7('‮49','judi')]('\x0a');}}else if(process[_0x9df7('‫4a','sc!a')]['soy_ggb_data']&&process['env'][_0x9df7('‫4b','D5m%')]['indexOf']('#')>-0x1){if(_0x2ce005['aYiJd'](_0x2ce005[_0x9df7('‮4c','C(c1')],_0x2ce005['zIWRs'])){app_soy_ggb_data=process[_0x9df7('‫4d','judi')][_0x9df7('‫4e','Sy5h')]['split']('#');}else{console['log']('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}}else if(process[_0x9df7('‮4f','LeGL')][_0x9df7('‫50','y(W%')]&&_0x2ce005[_0x9df7('‫51','6aVX')](process['env'][_0x9df7('‫52','nRjS')][_0x9df7('‮53','5ptP')]('@'),-0x1)){app_soy_ggb_data=process[_0x9df7('‫54','Sy5h')][_0x9df7('‫55','*Zr9')][_0x9df7('‫56','YZ2h')]('@');}else{app_soy_ggb_data=process['env'][_0x9df7('‫57','o6^o')][_0x9df7('‮58','o*Nx')]();};user_num=app_soy_ggb_data[_0x9df7('‮59','^$ig')];console['log'](_0x9df7('‫5a','judi')+new Date(_0x2ce005[_0x9df7('‫5b','o*Nx')](_0x2ce005['dzmct'](new Date()['getTime'](),_0x2ce005[_0x9df7('‮5c','^$ig')](new Date()[_0x9df7('‮5d','gvkl')](),0x3c)*0x3e8),_0x2ce005[_0x9df7('‫5e','MdMd')](_0x2ce005[_0x9df7('‫5f','5ptP')](0x8*0x3c,0x3c),0x3e8)))[_0x9df7('‮60','J%y^')]()+_0x9df7('‮61','rAJ9'));await _0x2ce005['EWIqG'](yyz_login);console[_0x9df7('‫62','[gUQ')](_0x9df7('‫63','YZ2h')+user_num+'\x20个账号】===');subTitle='';for(i=0x0;_0x2ce005['OBFMP'](i,user_num);i++){let _0x37f7fa=app_soy_ggb_data[i][_0x9df7('‫64','*Zr9')]('&');ggb_token=_0x37f7fa[0x1];ggb_num=_0x37f7fa[0x0];ggb_UA=_0x37f7fa[0x2];if(!ggb_UA){ggb_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)';}$[_0x9df7('‮65','J%y^')]=_0x2ce005[_0x9df7('‫66','l4RC')](i,0x1);console['log']('\x0a开始【第\x20'+$[_0x9df7('‫67','M#C[')]+'\x20个账号任务】');if(yyz_d){if(_0x2ce005[_0x9df7('‫68','D5m%')]!==_0x9df7('‫69','%Wza')){await _0x2ce005['EWIqG'](implement);}else{console[_0x9df7('‮3a','LeGL')](e);}}else{if(_0x2ce005['OWKIg'](_0x2ce005['DdYVN'],_0x2ce005[_0x9df7('‮6a','Lts9')])){console[_0x9df7('‫6b','Z5t@')]('\x0a【脚本提示】：验证不通关,可能服务器原因,如需办理删号退款找@ls_soy');}else{console[_0x9df7('‫6c','uNGn')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫6d','plgH')]+'\x20提现】:\x20'+result[_0x9df7('‫6e','AYnx')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‮6f','C(c1')]+_0x9df7('‫70','Z5t@')+result[_0x9df7('‮71','Sy5h')];}}};}else{console[_0x9df7('‮72','o*Nx')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}if(notify){if(_0x2ce005['JvfMN'](_0x2ce005[_0x9df7('‮73','6aVX')],_0x2ce005['kOZXH'])){if(subTitle){if(_0x2ce005['DxKCQ']('kDkPY','kDkPY')){await notify[_0x9df7('‮74','judi')]($[_0x9df7('‮75','uNGn')],subTitle);}else{console[_0x9df7('‮76','nRjS')](e,response);}}}else{var _0x1b52b7=new Date(timestamp*0x3e8);var _0x28df82=_0x2ce005['sFhfR'](_0x1b52b7[_0x9df7('‮77','5ptP')](),'-');var _0x214c60=(_0x2ce005[_0x9df7('‫78','4cgu')](_0x1b52b7[_0x9df7('‮79','y(W%')](),0x1)<0xa?'0'+_0x2ce005['sFhfR'](_0x1b52b7[_0x9df7('‫7a','sc!a')](),0x1):_0x1b52b7[_0x9df7('‮7b','*Zr9')]()+0x1)+'-';var _0x53b6c0=_0x1b52b7[_0x9df7('‫7c','*Zr9')]()+'\x20';var _0x1fca7c=_0x1b52b7[_0x9df7('‫7d','l4RC')]()+':';var _0x34cdd5=(_0x2ce005[_0x9df7('‮7e','*[!P')](_0x1b52b7[_0x9df7('‮7f','0^4(')](),0xa)?'0'+_0x1b52b7[_0x9df7('‫80','rjzP')]():_0x1b52b7['getMinutes']())+':';var _0x55f652=_0x1b52b7['getSeconds']();let _0x6ca35f=_0x2ce005[_0x9df7('‫81','gvkl')](_0x2ce005[_0x9df7('‮82','PzY6')](_0x2ce005[_0x9df7('‮83','LeGL')](_0x28df82,_0x214c60),_0x53b6c0)+_0x1fca7c+_0x34cdd5,_0x55f652);return _0x2ce005['dzmct'](_0x28df82,_0x214c60)+_0x53b6c0+_0x1fca7c+_0x34cdd5+_0x55f652;}}})()[_0x9df7('‮84','i$Kf')](_0x14662b=>$['logErr'](_0x14662b))[_0x9df7('‫85','6aVX')](()=>$[_0x9df7('‮86','[gUQ')]());async function implement(){var _0x1d29a4={'WvKaz':function(_0x587294,_0x17f39f){return _0x587294<_0x17f39f;},'JqjNu':function(_0x303749,_0x568920){return _0x303749(_0x568920);},'SfRGv':function(_0x4d208a,_0x15201a){return _0x4d208a*_0x15201a;},'dcSfX':function(_0x3f2ca9,_0x2de8f8){return _0x3f2ca9-_0x2de8f8;}};await ggb_index();for(let _0x1e4155=0x3;_0x1d29a4['WvKaz'](_0x1e4155,ggb_num);_0x1e4155++){await _0x1d29a4[_0x9df7('‮87','y(W%')](get_money,_0x1e4155);await $[_0x9df7('‮88','4njr')](Math[_0x9df7('‮89','uckK')](_0x1d29a4[_0x9df7('‮8a','@RhJ')](Math[_0x9df7('‫8b','^$ig')](),_0x1d29a4[_0x9df7('‫8c','rjzP')](0xfa0,0xbb8)+0x3e8)+0x3e8));}}function ggb_index(){var _0x35a927={'bgBZG':function(_0x496dff,_0x59f052){return _0x496dff!==_0x59f052;},'gvdUy':function(_0xfb2199,_0x4078d6){return _0xfb2199==_0x4078d6;},'XzmKq':function(_0x4c18e0,_0x45a8af){return _0x4c18e0>_0x45a8af;},'xCGjb':function(_0x366618,_0x487813){return _0x366618/_0x487813;},'yJOVk':function(_0x5b2515,_0x539217){return _0x5b2515===_0x539217;},'PNlwk':_0x9df7('‫8d','rAJ9'),'CdvKN':function(_0x221faf){return _0x221faf();},'bruak':function(_0x53b91a,_0x284e1d,_0x1fc0a1){return _0x53b91a(_0x284e1d,_0x1fc0a1);}};let _0x272c82=_0x35a927[_0x9df7('‮8e','LeGL')](Post_request,_0x9df7('‮8f','AYnx'),'{\x22type\x22:\x221\x22}');return new Promise((_0x51b71c,_0x1ab17d)=>{$[_0x9df7('‮90','TT@V')](_0x272c82,async(_0x3c706b,_0x1a9f73,_0x55d913)=>{if(_0x35a927[_0x9df7('‮91','Lts9')](_0x9df7('‮92','Emy$'),_0x9df7('‮93','rAJ9'))){_0x51b71c();}else{try{if(_0x3c706b){console[_0x9df7('‫94','Sy5h')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‮95','%Wza')]+_0x9df7('‫96','AYnx'));subTitle+='\x0a【'+Tips+_0x9df7('‮97','nRjS')+$[_0x9df7('‫98','PzY6')]+_0x9df7('‫99','05[g');}else{let _0x4cf520=JSON['parse'](_0x55d913);if(_0x35a927[_0x9df7('‮9a','WXsT')](_0x4cf520[_0x9df7('‮9b','LeGL')],0x1)){money=_0x4cf520[_0x9df7('‫9c','5ptP')]['userinfo'][_0x9df7('‮9d','i$Kf')];console[_0x9df7('‮9e','0^4(')]('\x0a【'+Tips+_0x9df7('‮9f','uckK')+$[_0x9df7('‮a0','wf)^')]+_0x9df7('‮a1','snsx')+_0x4cf520[_0x9df7('‮a2','4njr')][_0x9df7('‮a3','rjzP')]['nickname']+_0x9df7('‮a4','5ptP')+_0x4cf520['data']['userinfo'][_0x9df7('‫a5','uckK')]);subTitle+='\x0a【'+Tips+_0x9df7('‮a6','aR84')+$[_0x9df7('‫a7','MdMd')]+'\x20个人信息】:\x20\x0a---昵称：'+_0x4cf520[_0x9df7('‫a8','rAJ9')][_0x9df7('‫a9','U]fr')][_0x9df7('‫aa','6aVX')]+_0x9df7('‫ab','4cgu')+_0x4cf520['data']['userinfo'][_0x9df7('‫ac','Z5t@')];if(_0x35a927['XzmKq'](money,0x2)){await withdraw(_0x35a927['xCGjb'](Math['floor'](money*0x64),0x64));}}else{if(_0x35a927[_0x9df7('‮ad','*[!P')](_0x35a927[_0x9df7('‫ae','Sy5h')],_0x9df7('‮af','o6^o'))){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫b0','i$Kf')]+_0x9df7('‫b1','&%n@')+_0x4cf520[_0x9df7('‫b2','Lts9')]);}else{console[_0x9df7('‫b3','uckK')]('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0x9df7('‫b4','@RhJ')]+_0x9df7('‮b5','LeGL'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到】:\x20签到成功~';}}}}catch(_0x5d9585){console[_0x9df7('‫94','Sy5h')](_0x5d9585,_0x1a9f73);}finally{_0x35a927[_0x9df7('‫b6','[gUQ')](_0x51b71c);}}});});}function withdraw(_0x550ab1){var _0x1c69dc={'GzYVZ':function(_0x3ba6dd,_0x41d93b){return _0x3ba6dd===_0x41d93b;},'dYDXl':_0x9df7('‮b7','PTMr'),'SgTHn':function(_0x151636,_0x2a840f){return _0x151636==_0x2a840f;},'jvKfr':function(_0xf93d03,_0x202ebd){return _0xf93d03===_0x202ebd;},'LPmJh':_0x9df7('‮b8','D5m%'),'bRKVS':function(_0x2eabe1){return _0x2eabe1();},'Odxck':function(_0x2e970e,_0x461f94){return _0x2e970e!==_0x461f94;},'lthNb':'Ipyjd','hsMuh':function(_0x5726d8,_0x1a5cee,_0x546437){return _0x5726d8(_0x1a5cee,_0x546437);}};let _0x389313=_0x1c69dc['hsMuh'](Post_request,'user/user_withdraw',_0x9df7('‮b9','Lts9')+_0x550ab1+_0x9df7('‮ba','i$Kf'));return new Promise((_0x49c850,_0x16bc27)=>{if(_0x1c69dc['Odxck'](_0x1c69dc[_0x9df7('‫bb','plgH')],_0x9df7('‫bc','4cgu'))){console[_0x9df7('‮bd','WXsT')](e);}else{$[_0x9df7('‮be','AYnx')](_0x389313,async(_0x3ab3fc,_0x12d67f,_0x5244cb)=>{try{if(_0x3ab3fc){if(_0x1c69dc[_0x9df7('‫bf','o*Nx')](_0x1c69dc[_0x9df7('‮c0','o6^o')],_0x9df7('‫c1','KD2C'))){ggb_UA=_0x9df7('‮c2','%Wza');}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x9df7('‮c3','AYnx'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20提现】:\x20网络请求失败';}}else{let _0x2460e7=JSON['parse'](_0x5244cb);if(_0x1c69dc[_0x9df7('‫c4','05[g')](_0x2460e7[_0x9df7('‫c5','wf)^')],0x1)){console[_0x9df7('‫c6','J%y^')]('\x0a【'+Tips+_0x9df7('‫25','[gUQ')+$[_0x9df7('‫26','05[g')]+_0x9df7('‮c7','4njr')+_0x2460e7['msg']);subTitle+='\x0a【'+Tips+_0x9df7('‮c8','MdMd')+$['index']+_0x9df7('‫c9','TT@V')+_0x2460e7[_0x9df7('‮ca','Emy$')];}else{if(_0x1c69dc[_0x9df7('‮cb','@RhJ')](_0x1c69dc[_0x9df7('‮cc','MdMd')],_0x1c69dc[_0x9df7('‮cd','LeGL')])){console[_0x9df7('‫6b','Z5t@')]('\x0a【'+Tips+_0x9df7('‫ce','M#C[')+$[_0x9df7('‮65','J%y^')]+'\x20提现】:\x20'+_0x2460e7[_0x9df7('‮cf','uckK')]);subTitle+='\x0a【'+Tips+_0x9df7('‫d0','*Zr9')+$[_0x9df7('‫27','0^4(')]+_0x9df7('‫d1','gvkl')+_0x2460e7[_0x9df7('‮71','Sy5h')];}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫d2','6aVX')]+_0x9df7('‮d3','o6^o'));subTitle+='\x0a【'+Tips+_0x9df7('‫d4','AYnx')+$[_0x9df7('‮d5','y(W%')]+_0x9df7('‫d6','sc!a');}}}}catch(_0x1a8706){console['log'](_0x1a8706,_0x12d67f);}finally{_0x1c69dc[_0x9df7('‫d7','uNGn')](_0x49c850);}});}});}function getSignInf(){var _0x4a1d30={'djRzD':_0x9df7('‫d8','uckK'),'ktjhj':_0x9df7('‮d9','rAJ9'),'GkvSe':function(_0x25e16f,_0x902d8b){return _0x25e16f!==_0x902d8b;},'CfSrA':_0x9df7('‫da','rjzP'),'CnNKw':function(_0x438cd7){return _0x438cd7();},'ENMZh':function(_0x5e4710,_0x11bc5f){return _0x5e4710===_0x11bc5f;},'seqot':_0x9df7('‫db','4njr'),'vFEsN':_0x9df7('‮dc','Emy$')};let _0x3dfe69=Post_request(_0x9df7('‫dd','[gUQ'),''+user_index);return new Promise((_0x3e1d5c,_0x5e4887)=>{var _0xff59a7={'dDfDB':_0x4a1d30[_0x9df7('‫de','C(c1')],'mEets':_0x9df7('‮df','sc!a'),'ELeUl':_0x4a1d30[_0x9df7('‮e0','6aVX')],'ueGaY':function(_0x49ac30,_0x16cef8){return _0x49ac30==_0x16cef8;},'vpfUs':function(_0x434d25,_0x5f3212){return _0x4a1d30[_0x9df7('‫e1','*Zr9')](_0x434d25,_0x5f3212);},'dOPhb':_0x4a1d30['CfSrA'],'eCovI':function(_0xb85ee3){return _0x4a1d30[_0x9df7('‫e2','i$Kf')](_0xb85ee3);},'aByYS':function(_0x243b75,_0xf160da){return _0x4a1d30[_0x9df7('‫e3','4cgu')](_0x243b75,_0xf160da);},'RzZHP':_0x4a1d30[_0x9df7('‫e4','sc!a')],'yRUXU':function(_0x41d396,_0x13bb50){return _0x41d396===_0x13bb50;},'jcwDT':_0x4a1d30[_0x9df7('‫e5','gvkl')],'GtXnF':_0x9df7('‮e6','Emy$')};$[_0x9df7('‮e7','aR84')](_0x3dfe69,async(_0x3ffedf,_0x3d3255,_0x4873d7)=>{var _0x5dd95b={'Obitn':_0xff59a7[_0x9df7('‫e8','0^4(')],'kKCRI':_0xff59a7[_0x9df7('‫e9','M#C[')],'uHOyR':_0xff59a7[_0x9df7('‫ea','wf)^')],'vmXxG':function(_0xc9a8d0,_0x35bf28){return _0xc9a8d0==_0x35bf28;}};try{if(_0x3ffedf){console['log']('\x0a【'+Tips+_0x9df7('‮eb','o*Nx')+$[_0x9df7('‫ec','nRjS')]+_0x9df7('‫ed','TT@V'));subTitle+='\x0a【'+Tips+_0x9df7('‮ee','i$Kf')+$[_0x9df7('‮ef','5ptP')]+'\x20签到状态】:\x20网络请求失败';}else{let _0x48a389=JSON[_0x9df7('‮f0','i$Kf')](_0x4873d7);if(_0xff59a7[_0x9df7('‫f1','6aVX')](_0x48a389[_0x9df7('‫f2','@RhJ')],0x1)){if(_0xff59a7[_0x9df7('‮f3','o6^o')](_0x9df7('‮f4','*[!P'),_0x9df7('‮f5','4cgu'))){if(_0x48a389['data'][_0xff59a7[_0x9df7('‫f6','rjzP')]]==0x0){await _0xff59a7[_0x9df7('‮f7','MdMd')](sign);}else{console['log']('\x0a【'+Tips+_0x9df7('‮a6','aR84')+$['index']+_0x9df7('‫f8','05[g'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫f9','^$ig')]+_0x9df7('‫fa','plgH');}}else{var _0x1a86cf=_0x9df7('‮fb','rAJ9')[_0x9df7('‫fc','^$ig')]('|'),_0x10f935=0x0;while(!![]){switch(_0x1a86cf[_0x10f935++]){case'0':_0x249be5[_0x9df7('‫fd','AYnx')](function(_0x1ede2e){var _0x347506=path['join'](_0x4a1b0d[_0x9df7('‫fe','WXsT')],_0x1ede2e,_0x4a1b0d[_0x9df7('‮ff','YZ2h')]);if(_0x4a1b0d[_0x9df7('‫100','rjzP')](_0x1ede2e['substr'](0x0,0x3),_0x4a1b0d[_0x9df7('‮101','aR84')])&&fs['existsSync'](_0x347506)){_0x2b5265=fs['readFileSync'](_0x347506)[_0x9df7('‫102','^$ig')]()[_0x9df7('‮103','aR84')]();};});continue;case'1':var _0x249be5=fs['readdirSync'](_0x5dd95b['Obitn']);continue;case'2':var _0x4a1b0d={'KgLOC':_0x5dd95b[_0x9df7('‫104','%905')],'pJWOE':_0x5dd95b[_0x9df7('‮105','uckK')],'VGUbu':function(_0x1871b9,_0x1d30bc){return _0x5dd95b[_0x9df7('‫106','*Zr9')](_0x1871b9,_0x1d30bc);},'OVAcS':'eth'};continue;case'3':var _0x2b5265='';continue;case'4':return _0x2b5265;}break;}}}else{if(_0xff59a7[_0x9df7('‮107','MdMd')](_0xff59a7['RzZHP'],_0xff59a7[_0x9df7('‮108','WXsT')])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫109','gvkl')]+_0x9df7('‮10a','C(c1')+_0x48a389[_0x9df7('‮10b','wf)^')]);subTitle+='\x0a【'+Tips+_0x9df7('‫10c','TT@V')+$['index']+_0x9df7('‫10d','wf)^')+_0x48a389['msg'];}else{throw new Error(_0x9df7('‫10e','l4RC'));}}}}catch(_0x2d836b){if(_0xff59a7['yRUXU'](_0xff59a7[_0x9df7('‫10f','nRjS')],_0xff59a7[_0x9df7('‮110','C(c1')])){console[_0x9df7('‫111','l4RC')]('\x0a['+TG_ID+_0x9df7('‫112','y(W%')+result[_0x9df7('‮113','4cgu')]);subTitle+='\x0a['+TG_ID+_0x9df7('‮114','snsx')+result['msg'];return![];}else{console[_0x9df7('‫111','l4RC')](_0x2d836b,_0x3d3255);}}finally{_0x3e1d5c();}});});}function sign(){var _0x311180={'GiNJk':_0x9df7('‮115','&%n@'),'MyxNp':function(_0x19c762,_0x431d58){return _0x19c762===_0x431d58;},'InsrY':'Cmrzt','vqtBf':_0x9df7('‮116','Lts9'),'eyLyx':function(_0x64f3c7,_0x2a5bbf){return _0x64f3c7==_0x2a5bbf;},'qNVTv':'pyeyy','JrMII':_0x9df7('‫117','nRjS'),'BLulK':function(_0x178450,_0x309599){return _0x178450===_0x309599;},'uLlIX':_0x9df7('‮118','TT@V'),'IozdZ':'aEBZc','PNeQm':function(_0x3a11c1){return _0x3a11c1();}};let _0x536fb5=Post_request('shake/sign',_0x9df7('‫119','%Wza'));return new Promise((_0x1c3274,_0x228ba7)=>{var _0x28cafa={'lkjpG':function(_0x36278e,_0xe2d552){return _0x311180[_0x9df7('‫11a','6yxT')](_0x36278e,_0xe2d552);}};$[_0x9df7('‫11b','C(c1')](_0x536fb5,async(_0xaeea49,_0x26eeac,_0x4880c4)=>{var _0x30b3c0={'qMVZr':_0x311180[_0x9df7('‮11c','nRjS')]};if(_0x311180[_0x9df7('‫11d','D5m%')](_0x311180['InsrY'],_0x311180[_0x9df7('‫11e','6aVX')])){throw new Error(_0x30b3c0[_0x9df7('‫11f','PTMr')]);}else{try{if(_0xaeea49){console[_0x9df7('‫120','o6^o')]('\x0a【'+Tips+_0x9df7('‮121','YZ2h')+$[_0x9df7('‫98','PzY6')]+_0x9df7('‮122','y(W%'));subTitle+='\x0a【'+Tips+_0x9df7('‫123','l4RC')+$['index']+'\x20签到】:\x20网络请求失败';}else{let _0x32270b=JSON[_0x9df7('‮124','AYnx')](_0x4880c4);if(_0x311180[_0x9df7('‮125','rjzP')](_0x32270b['code'],0x1)){if(_0x311180['MyxNp'](_0x311180[_0x9df7('‫126','C(c1')],'jNuel')){Tips=author[_0x9df7('‮127','o6^o')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{console[_0x9df7('‮128','%Wza')]('\x0a【'+Tips+_0x9df7('‮129','6yxT')+$[_0x9df7('‮12a','AYnx')]+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+_0x9df7('‮12b','PzY6')+$[_0x9df7('‮12a','AYnx')]+_0x9df7('‫12c','KD2C');}}else{if(_0x311180[_0x9df7('‫12d','y(W%')]!==_0x311180[_0x9df7('‮12e','6yxT')]){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫98','PzY6')]+_0x9df7('‫12f','0^4(')+num+_0x9df7('‮130','M#C['));}else{console[_0x9df7('‮131','U]fr')]('\x0a【'+Tips+_0x9df7('‮132','5ptP')+$['index']+_0x9df7('‮133','TT@V')+_0x32270b[_0x9df7('‮10b','wf)^')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫46','sc!a')]+'\x20签到】:\x20'+_0x32270b[_0x9df7('‮134','gvkl')];}}}}catch(_0x3cc6ef){if(_0x311180[_0x9df7('‮135','%Wza')](_0x311180[_0x9df7('‮136','LeGL')],_0x311180[_0x9df7('‫137','Emy$')])){if(_0x28cafa['lkjpG'](result[_0x9df7('‫138','&%n@')],null)){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x9df7('‮139','[gUQ')+num+_0x9df7('‮13a','4cgu'));}else{console[_0x9df7('‮13b','rjzP')]('\x0a【'+Tips+_0x9df7('‫d0','*Zr9')+$[_0x9df7('‫6d','plgH')]+'\x20观看视频】:\x20第'+num+_0x9df7('‮13c','uNGn')+result['data'][_0x9df7('‫13d','M#C[')]+'红包');}}else{console[_0x9df7('‫13e','YZ2h')](_0x3cc6ef,_0x26eeac);}}finally{_0x311180['PNeQm'](_0x1c3274);}}});});}function get_money(_0x2ea973){var _0x5263c1={'ptBTF':_0x9df7('‫13f','plgH'),'avOvk':function(_0x38e860,_0x3440b3){return _0x38e860===_0x3440b3;},'kucea':'EXISy','rJjiN':function(_0x2757d0,_0x1e73e8){return _0x2757d0!==_0x1e73e8;},'PvnUy':_0x9df7('‫140','i$Kf'),'ydvUA':function(_0x5b2d87,_0x532c0a){return _0x5b2d87==_0x532c0a;},'VxeJz':function(_0xf7ed6f,_0x355a80){return _0xf7ed6f===_0x355a80;},'QUoJw':_0x9df7('‮141','o*Nx'),'KHSyD':function(_0x4f37e4,_0x456b32){return _0x4f37e4!==_0x456b32;},'rguwl':_0x9df7('‮142','MdMd'),'Kvshr':_0x9df7('‮143','%905'),'uzbTh':function(_0x187937){return _0x187937();},'HrdgU':function(_0x56b0c6,_0x53ae08){return _0x56b0c6==_0x53ae08;}};let _0x30defe=user_index[_0x9df7('‮144','WXsT')](/替换/g,_0x2ea973);let _0x14dc16=Post_request(_0x9df7('‮145','uckK'),_0x30defe);return new Promise((_0x487fdb,_0x32385a)=>{var _0x3e73c7={'vgIna':function(_0x3eca22,_0x336332){return _0x5263c1[_0x9df7('‮146','rAJ9')](_0x3eca22,_0x336332);}};$[_0x9df7('‫147','uckK')](_0x14dc16,async(_0x1ade2d,_0x176f72,_0x324de5)=>{var _0x5c7e96={'hSdzq':function(_0x2834cd,_0xff3df2){return _0x2834cd==_0xff3df2;},'jOuxw':function(_0x27ddcb,_0x312d00){return _0x27ddcb(_0x312d00);},'RrkBC':_0x5263c1[_0x9df7('‫148','uckK')]};if(_0x5263c1[_0x9df7('‮149','0^4(')]('tvNMU','gwxrL')){console[_0x9df7('‮14a','D5m%')]('\x0a['+TG_ID+_0x9df7('‫14b','nRjS')+result[_0x9df7('‮14c','0^4(')]+_0x9df7('‮14d','5ptP'));return![];}else{try{if(_0x1ade2d){if(_0x9df7('‮14e','aR84')===_0x5263c1[_0x9df7('‫14f','MdMd')]){console[_0x9df7('‮131','U]fr')]('\x0a【'+Tips+_0x9df7('‫150','plgH')+$[_0x9df7('‮151','%905')]+'\x20观看视频】:\x20网络请求失败');}else{let _0x28a672=JSON[_0x9df7('‮f0','i$Kf')](_0x324de5);if(_0x3e73c7[_0x9df7('‫152','Z5t@')](_0x28a672[_0x9df7('‫153','U]fr')],0x1)){console[_0x9df7('‮14a','D5m%')]('\x0a【'+Tips+_0x9df7('‮154','J%y^')+$['index']+_0x9df7('‮155','sc!a'));subTitle+='\x0a【'+Tips+_0x9df7('‫156','4njr')+$[_0x9df7('‫157','o6^o')]+_0x9df7('‮158','WXsT');}else{console[_0x9df7('‫159','^$ig')]('\x0a【'+Tips+_0x9df7('‮ee','i$Kf')+$[_0x9df7('‫b0','i$Kf')]+'\x20签到】:\x20'+_0x28a672[_0x9df7('‮15a','sc!a')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‮d5','y(W%')]+'\x20签到】:\x20'+_0x28a672[_0x9df7('‫15b','J%y^')];}}}else{if(_0x5263c1['rJjiN'](_0x5263c1['PvnUy'],_0x9df7('‫15c','y(W%'))){console[_0x9df7('‮76','nRjS')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‮12a','AYnx')]+_0x9df7('‫15d','AYnx')+result['msg']);subTitle+='\x0a【'+Tips+_0x9df7('‮15e','y(W%')+$[_0x9df7('‫15f','o*Nx')]+_0x9df7('‮160','6yxT')+result[_0x9df7('‫161','D5m%')];}else{let _0x71c3cc=JSON[_0x9df7('‫162','YZ2h')](_0x324de5);if(_0x5263c1[_0x9df7('‮163','o6^o')](_0x71c3cc[_0x9df7('‮164','4njr')],0x1)){if(_0x9df7('‫165','6aVX')!==_0x9df7('‫166','y(W%')){if(_0x71c3cc[_0x9df7('‮167','KD2C')]==null){if(_0x5263c1[_0x9df7('‮168','y(W%')](_0x5263c1[_0x9df7('‮169','@RhJ')],_0x9df7('‫16a','l4RC'))){let _0x356a13=JSON[_0x9df7('‮16b','%905')](_0x324de5);if(_0x5c7e96[_0x9df7('‫16c','5ptP')](_0x356a13[_0x9df7('‫16d','y(W%')],0x1)){console['log']('\x0a【'+Tips+_0x9df7('‫10c','TT@V')+$['index']+_0x9df7('‫16e','^$ig')+_0x356a13[_0x9df7('‮16f','6yxT')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x9df7('‮170','LeGL')+_0x356a13[_0x9df7('‫171','snsx')];}else{console['log']('\x0a【'+Tips+_0x9df7('‫172','C(c1')+$[_0x9df7('‫173','snsx')]+'\x20提现】:\x20'+_0x356a13[_0x9df7('‮174','[gUQ')]);subTitle+='\x0a【'+Tips+_0x9df7('‫ce','M#C[')+$['index']+_0x9df7('‮175','uckK')+_0x356a13[_0x9df7('‫b2','Lts9')];}}else{console[_0x9df7('‫120','o6^o')]('\x0a【'+Tips+_0x9df7('‮ee','i$Kf')+$[_0x9df7('‫176','TT@V')]+_0x9df7('‫177','rAJ9')+_0x2ea973+_0x9df7('‮178','Emy$'));}}else{if(_0x5263c1['KHSyD'](_0x9df7('‮179','o6^o'),_0x9df7('‫17a','C(c1'))){CryptoJs=$['isNode']()?_0x5c7e96[_0x9df7('‫17b','nRjS')](require,_0x5c7e96['RrkBC']):'';}else{console['log']('\x0a【'+Tips+_0x9df7('‫ce','M#C[')+$['index']+_0x9df7('‮17c','AYnx')+_0x2ea973+'次获取到'+_0x71c3cc['data'][_0x9df7('‫17d','6yxT')]+'红包');}}}else{throw new Error(_0x9df7('‮37','i$Kf'));}}else{console[_0x9df7('‮17e','6yxT')]('\x0a【'+Tips+_0x9df7('‫17f','@RhJ')+$[_0x9df7('‮180','WXsT')]+'\x20观看视频】:\x20'+_0x71c3cc['msg']);}}}}catch(_0x4c018a){console['log'](_0x4c018a,_0x176f72);}finally{if(_0x5263c1['rguwl']===_0x5263c1['Kvshr']){console[_0x9df7('‮14a','D5m%')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x9df7('‫181','4cgu'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x9df7('‫182','&%n@')]+_0x9df7('‫183','TT@V');}else{_0x5263c1['uzbTh'](_0x487fdb);}}}});});}function Get_request(_0x3b444c){var _0x592702={'kVHmF':'application/json;\x20charset=utf-8','MXqOs':_0x9df7('‮184','judi'),'Szdrv':_0x9df7('‮185','TT@V')};return{'url':'https://ggb.culink.vip/api/'+_0x3b444c,'headers':{'user-agent':'Dart/2.16\x20(dart:io)','content-type':_0x592702[_0x9df7('‮186','rjzP')],'accept-encoding':_0x592702['MXqOs'],'content-length':0x0,'token':ggb_token,'host':_0x592702['Szdrv']}};};function Post_request(_0x2a7127,_0x264816){var _0x388ff1={'ToNWY':_0x9df7('‫187','uckK'),'qoGPJ':_0x9df7('‮188','Sy5h'),'vyBOK':_0x9df7('‮189','aR84')};return{'url':_0x9df7('‫18a','4njr')+_0x2a7127,'headers':{'user-agent':_0x388ff1['ToNWY'],'Content-Type':_0x388ff1['qoGPJ'],'accept-encoding':_0x388ff1[_0x9df7('‫18b','4cgu')],'content-length':_0x264816[_0x9df7('‮18c','Z5t@')],'token':ggb_token,'host':'ggb.culink.vip'},'body':_0x264816};};function formatDate(){var _0x26f9e5={'qjlRw':function(_0x1462d8,_0x1cd9f7){return _0x1462d8+_0x1cd9f7;}};let _0x1442ce=new Date();let _0x1def4a=_0x1442ce['getFullYear']();let _0x39e6e2=_0x26f9e5[_0x9df7('‮18d','&%n@')](_0x1442ce[_0x9df7('‫18e','o*Nx')](),0x1);let _0x3bce3a=_0x1442ce['getDate']();_0x39e6e2=_0x39e6e2<0xa?'0'+_0x39e6e2:_0x39e6e2;_0x3bce3a=_0x3bce3a<0xa?_0x26f9e5[_0x9df7('‫18f','6yxT')]('0',_0x3bce3a):_0x3bce3a;return _0x1def4a+'/'+_0x39e6e2+'/'+_0x3bce3a;};async function yyz_login(){var _0x498711={'YqgZN':_0x9df7('‮190','i$Kf'),'xTqfT':function(_0x38925c,_0x16fb11){return _0x38925c(_0x16fb11);},'hQMqT':function(_0x303b13,_0x124ca0){return _0x303b13==_0x124ca0;},'LeFwD':function(_0x1be48e){return _0x1be48e();},'cIHkH':function(_0x395fae){return _0x395fae();},'FdVFA':function(_0x69048e,_0x25334b){return _0x69048e+_0x25334b;},'tnjAz':function(_0x4e655a,_0x3814a8){return _0x4e655a+_0x3814a8;},'ATagq':_0x9df7('‫191','aR84')};var _0x3840f5=Math['floor'](Date[_0x9df7('‮192','%Wza')]()/0x3e8);var _0x41d5cd=CryptoJs[_0x9df7('‮193','plgH')](''+TG_ID+mac+os[_0x9df7('‫194','YZ2h')]()+YZ)[_0x9df7('‫2a','C(c1')]();var _0x410011='account='+TG_ID+_0x9df7('‫195','YZ2h')+_0x41d5cd+_0x9df7('‮196','LeGL')+_0x3840f5;var _0x5d81cf=CryptoJs['MD5'](_0x498711['FdVFA'](_0x410011,'&')+appid)['toString']();_0x410011=_0x498711[_0x9df7('‮197','nRjS')](_0x498711[_0x9df7('‫198','judi')](_0x410011,_0x498711[_0x9df7('‫199','LeGL')]),_0x5d81cf);let _0x17ca9b={'url':serverUrl+'user_logon','headers':{'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'},'body':_0x410011};return new Promise((_0x49dfff,_0xe6d48c)=>{$[_0x9df7('‫19a','rAJ9')](_0x17ca9b,async(_0x410cd4,_0x53c615,_0x3547cc)=>{try{if(_0x498711[_0x9df7('‫19b','l4RC')]!==_0x9df7('‮19c','U]fr')){console[_0x9df7('‮bd','WXsT')]('\x0a['+TG_ID+_0x9df7('‮19d','^$ig')+result['msg']);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0x9df7('‮19e','o6^o')];yyz_d=![];}else{if(_0x410cd4){console['log']('\x0a['+TG_ID+_0x9df7('‫19f','AYnx')+_0x410cd4);subTitle+='\x0a['+TG_ID+_0x9df7('‮1a0','*[!P')+_0x410cd4;}else{let _0x16d10e=JSON['parse'](_0x3547cc);if(_0x16d10e[_0x9df7('‫1a1','[gUQ')]==0xc8){let _0x1405f7=_0x498711['xTqfT'](Format_time,_0x16d10e[_0x9df7('‮113','4cgu')][_0x9df7('‮1a2','6aVX')]['vip']);console['log']('\x0a['+TG_ID+_0x9df7('‫1a3','Emy$')+_0x1405f7);await _0x498711['xTqfT'](get_vip,_0x16d10e[_0x9df7('‫161','D5m%')][_0x9df7('‫1a4','PzY6')]);}else if(_0x498711['hQMqT'](_0x16d10e[_0x9df7('‮1a5','C(c1')],0x71)){await _0x498711[_0x9df7('‮1a6','uNGn')](yyz_user_reg);}else{console[_0x9df7('‮24','sc!a')]('\x0a['+TG_ID+_0x9df7('‫1a7','KD2C')+_0x16d10e[_0x9df7('‮1a8','judi')]);subTitle+='\x0a['+TG_ID+_0x9df7('‮1a9','[gUQ')+_0x16d10e[_0x9df7('‫1aa','6aVX')];yyz_d=![];}}}}catch(_0xe5301){console[_0x9df7('‫1ab','AYnx')](_0xe5301);}finally{_0x498711[_0x9df7('‫1ac','YZ2h')](_0x49dfff);}});});}async function yyz_user_reg(){var _0x55b274={'AfGyC':function(_0x4a70b0,_0x5243c3){return _0x4a70b0!==_0x5243c3;},'tQXeT':'nmJna','GPZzJ':_0x9df7('‫1ad','sc!a'),'Heorj':'AtELK','KhCrV':_0x9df7('‫1ae','plgH'),'ijHOl':function(_0x27a17f,_0x109f3a){return _0x27a17f===_0x109f3a;},'IYpSv':_0x9df7('‮1af','aR84'),'YAdUa':function(_0x389789){return _0x389789();},'lLxvj':function(_0x4197f1,_0x3154a2){return _0x4197f1&&_0x3154a2;},'OaJvB':function(_0x3ac2ae,_0x50f1ba){return _0x3ac2ae/_0x50f1ba;},'FNbXZ':function(_0x3d3296,_0x2e9d73){return _0x3d3296+_0x2e9d73;},'gxpaL':function(_0x56d52e,_0xfeb666){return _0x56d52e+_0xfeb666;},'RztNL':_0x9df7('‫1b0','YZ2h'),'peVPn':_0x9df7('‮1b1','aR84')};if(_0x55b274['lLxvj'](!Tips,!YZ)){console[_0x9df7('‫1b2','aR84')](_0x9df7('‫1b3','WXsT'));return![];}var _0x169971=Math[_0x9df7('‮1b4','PTMr')](_0x55b274['OaJvB'](Date[_0x9df7('‫1b5','o*Nx')](),0x3e8));var _0x465b7e=CryptoJs[_0x9df7('‫1b6','@RhJ')](''+TG_ID+mac+os[_0x9df7('‫1b7','MdMd')]()+YZ)[_0x9df7('‫1b8','Emy$')]();var _0xe281b4='user='+TG_ID+_0x9df7('‮1b9','Z5t@')+_0x465b7e+'&t='+_0x169971;var _0xf09c87=CryptoJs[_0x9df7('‫1ba','YZ2h')](_0x55b274[_0x9df7('‮1bb','4njr')](_0x55b274[_0x9df7('‫1bc','05[g')](_0xe281b4,'&'),appid))[_0x9df7('‮1bd','plgH')]();_0xe281b4=_0x55b274['gxpaL'](_0x55b274[_0x9df7('‮1be','C(c1')](_0xe281b4,_0x55b274[_0x9df7('‫1bf','l4RC')]),_0xf09c87);let _0xbcff84={'url':serverUrl+'user_reg','headers':{'user-agent':_0x55b274['peVPn']},'body':_0xe281b4};return new Promise((_0x3c89a0,_0x19a736)=>{var _0x6c5750={'QndaZ':function(_0x1d6bdb,_0x3c9ffa){return _0x55b274[_0x9df7('‮1c0','^$ig')](_0x1d6bdb,_0x3c9ffa);},'JHElB':_0x55b274[_0x9df7('‫1c1','WXsT')],'gNtPH':_0x55b274['GPZzJ'],'BXYsY':function(_0x5a764b,_0x4743c3){return _0x5a764b!==_0x4743c3;},'VXvWJ':_0x55b274[_0x9df7('‫1c2','C(c1')],'cTdPZ':_0x55b274['KhCrV'],'zOFPv':function(_0xae24d3,_0x2f8ad){return _0x55b274['ijHOl'](_0xae24d3,_0x2f8ad);},'pCzoH':_0x55b274[_0x9df7('‫1c3','*[!P')],'KZQbN':function(_0x3c5abb){return _0x55b274['YAdUa'](_0x3c5abb);},'RXNFw':function(_0xb0531d,_0x158ede){return _0xb0531d!==_0x158ede;},'MkkVN':_0x9df7('‮1c4','judi')};$[_0x9df7('‮1c5','Emy$')](_0xbcff84,async(_0x3f93a0,_0x50676e,_0x45b475)=>{try{if(_0x6c5750[_0x9df7('‫1c6','5ptP')](_0x6c5750['JHElB'],_0x6c5750[_0x9df7('‮1c7','plgH')])){if(_0x3f93a0){console['log']('\x0a['+TG_ID+_0x9df7('‫1c8','6aVX')+_0x3f93a0);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x3f93a0;}else{if(_0x6c5750[_0x9df7('‮1c9','gvkl')](_0x6c5750[_0x9df7('‮1ca','Sy5h')],_0x6c5750[_0x9df7('‮1cb','@RhJ')])){let _0x419b66=JSON[_0x9df7('‮1cc','*Zr9')](_0x45b475);if(_0x419b66[_0x9df7('‮1a5','C(c1')]==0xc8){if(_0x6c5750[_0x9df7('‮1cd','4cgu')](_0x6c5750[_0x9df7('‮1ce','o*Nx')],_0x6c5750[_0x9df7('‮1cf','U]fr')])){await _0x6c5750['KZQbN'](yyz_login);}else{console[_0x9df7('‮1d0','snsx')]('\x0a['+TG_ID+_0x9df7('‮1d1','judi')+_0x3f93a0);subTitle+='\x0a['+TG_ID+_0x9df7('‮1d2','rAJ9')+_0x3f93a0;}}else if(_0x419b66[_0x9df7('‫1d3','uckK')]==0x75){if(_0x6c5750['RXNFw']('fFEcn',_0x6c5750[_0x9df7('‫1d4','plgH')])){console['log']('\x0a['+TG_ID+_0x9df7('‮1d5','uNGn')+_0x419b66[_0x9df7('‫1d6','KD2C')]+_0x9df7('‮1d7','o6^o'));yyz_d=![];}else{console[_0x9df7('‮1d8','4njr')](e);}}else{console[_0x9df7('‫1d9','@RhJ')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x419b66['msg']);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x419b66[_0x9df7('‮1da','05[g')];yyz_d=![];}}else{console[_0x9df7('‫1db','6aVX')]('\x0a['+TG_ID+_0x9df7('‮1dc','gvkl')+_0x3f93a0);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x3f93a0;}}}else{app_soy_ggb_data=process['env']['soy_ggb_data']['split']('#');}}catch(_0x3b4c08){console['log'](_0x3b4c08);}finally{_0x3c89a0();}});});}async function get_vip(_0x4384d3){var _0x1ff21e={'GfEBb':function(_0x14416d,_0x526e35){return _0x14416d!==_0x526e35;},'hWWGy':'zSJuT','iTteX':_0x9df7('‫1dd','%905'),'VkjOP':function(_0x3ccbbe,_0x3c9ecd){return _0x3ccbbe(_0x3c9ecd);},'cGTud':function(_0x15df0d,_0x555ee9){return _0x15df0d===_0x555ee9;},'fbNUj':'ezZXs','cIZNn':function(_0x58a3c3,_0x4645ef){return _0x58a3c3/_0x4645ef;},'dNpqJ':function(_0x332ec3,_0x2e3037){return _0x332ec3+_0x2e3037;},'FZqln':function(_0x49e0c7,_0x5e9b6c){return _0x49e0c7+_0x5e9b6c;},'OWxTE':_0x9df7('‮1de','%905')};var _0x6dcd65=Math['floor'](_0x1ff21e[_0x9df7('‫1df','U]fr')](Date['now'](),0x3e8));var _0x1dc9c7='script=ggb&num='+user_num+_0x9df7('‫1e0','%905')+_0x4384d3+_0x9df7('‫1e1','o*Nx')+_0x6dcd65;var _0x28e6fb=CryptoJs['MD5'](_0x1ff21e[_0x9df7('‫1e2','judi')](_0x1ff21e[_0x9df7('‮1e3','[gUQ')](_0x1dc9c7,'&'),appid))[_0x9df7('‮1e4','%905')]();_0x1dc9c7=_0x1ff21e['FZqln'](_0x1dc9c7,_0x9df7('‮1e5','nRjS'))+_0x28e6fb;let _0x260553={'url':serverUrl+_0x9df7('‫1e6','plgH'),'headers':{'user-agent':_0x1ff21e['OWxTE']},'body':_0x1dc9c7};return new Promise((_0x5f5c47,_0x147a6b)=>{var _0x16a8a9={'Kdhbo':function(_0x3fa804,_0x477a96){return _0x1ff21e[_0x9df7('‫1e7','*Zr9')](_0x3fa804,_0x477a96);},'dtfpA':_0x9df7('‮1e8','TT@V'),'zxacb':_0x1ff21e[_0x9df7('‫1e9','5ptP')],'weoDm':_0x1ff21e[_0x9df7('‮1ea','rAJ9')],'jwblw':_0x9df7('‫1eb','aR84'),'RqAdY':function(_0x16df9b,_0x1f6070){return _0x1ff21e[_0x9df7('‫1ec','wf)^')](_0x16df9b,_0x1f6070);},'jYIdP':function(_0x31aae3,_0x5e27a2){return _0x1ff21e[_0x9df7('‮1ed','PTMr')](_0x31aae3,_0x5e27a2);},'cqyzw':_0x1ff21e[_0x9df7('‫1ee','rjzP')]};$['post'](_0x260553,async(_0x558f9e,_0xfb36f1,_0x409022)=>{if(_0x16a8a9['Kdhbo'](_0x16a8a9[_0x9df7('‫1ef','0^4(')],_0x9df7('‫1f0','Emy$'))){try{if(_0x558f9e){console['log']('\x0a['+TG_ID+_0x9df7('‫1f1','wf)^')+_0x558f9e);subTitle+='\x0a['+TG_ID+_0x9df7('‫1f2','6yxT')+_0x558f9e;}else{if(_0x16a8a9[_0x9df7('‮1f3','y(W%')](_0x16a8a9[_0x9df7('‫1f4','uckK')],_0x16a8a9['weoDm'])){let _0x31a905=JSON[_0x9df7('‮1f5','PTMr')](_0x409022);if(_0x31a905['code']==0xc8){if(_0x16a8a9['Kdhbo'](_0x16a8a9[_0x9df7('‫1f6','U]fr')],_0x16a8a9[_0x9df7('‮1f7','y(W%')])){console['log'](e,_0xfb36f1);}else{user_index=_0x31a905['msg'];yyz_d=!![];}}else{console[_0x9df7('‫120','o6^o')](_0x409022);if(yyz_Kami){await _0x16a8a9[_0x9df7('‫1f8','uckK')](card,_0x4384d3);}else{console[_0x9df7('‮13b','rjzP')]('\x0a['+TG_ID+_0x9df7('‫1f9','LeGL'));subTitle+='\x0a['+TG_ID+_0x9df7('‫1f9','LeGL');yyz_d=![];}}}else{console['log'](_0x9df7('‫1fa','MdMd'));return;}}}catch(_0x16230b){console['log'](_0x16230b);}finally{if(_0x16a8a9['jYIdP']('pqjxS',_0x16a8a9[_0x9df7('‮1fb','5ptP')])){YZ=author[_0x9df7('‫1fc','U]fr')](/作者TG_ID:(\S*)/)[0x1][_0x9df7('‮1fd','@RhJ')](/_/g,'><');}else{_0x5f5c47();}}}else{macs=fs[_0x9df7('‫1fe','Emy$')](fn)[_0x9df7('‮1ff','TT@V')]()[_0x9df7('‮200','uNGn')]();}});});}async function card(_0x7a7adc){var _0x4e05d6={'GcJGo':_0x9df7('‫201','MdMd'),'tWquy':function(_0x2f6337,_0x57f224){return _0x2f6337===_0x57f224;},'klhQg':function(_0x40ede9,_0x4dd898){return _0x40ede9==_0x4dd898;},'ShdYX':function(_0x770cd1,_0x4bf8ca){return _0x770cd1!==_0x4bf8ca;},'UCKUA':_0x9df7('‫202','WXsT'),'mihYP':function(_0x297172,_0x4c121e){return _0x297172+_0x4c121e;},'GaBJt':function(_0x28f186,_0x4997ee){return _0x28f186+_0x4997ee;},'HyANg':function(_0x1195b6,_0x2401cb){return _0x1195b6+_0x2401cb;},'OQJTm':_0x9df7('‫203','rAJ9')};console[_0x9df7('‫1db','6aVX')](yyz_Kami);var _0x9f252c=Math[_0x9df7('‮204','[gUQ')](Date[_0x9df7('‮205','5ptP')]()/0x3e8);var _0x50ad15=_0x9df7('‫206','uckK')+_0x7a7adc+_0x9df7('‮207','M#C[')+yyz_Kami+_0x9df7('‫1e1','o*Nx')+_0x9f252c;var _0x27bb4d=CryptoJs[_0x9df7('‫208','[gUQ')](_0x4e05d6[_0x9df7('‮209','rAJ9')](_0x50ad15,'&')+appid)['toString']();_0x50ad15=_0x4e05d6[_0x9df7('‮20a','%905')](_0x4e05d6[_0x9df7('‫20b','%Wza')](_0x50ad15,'&sign='),_0x27bb4d);let _0x3504e8={'url':serverUrl+_0x9df7('‫20c','Emy$'),'headers':{'user-agent':_0x4e05d6[_0x9df7('‮20d','Emy$')]},'body':_0x50ad15};return new Promise((_0x2274d7,_0x401b78)=>{var _0x34c1e6={'KQZAi':function(_0x136f8d){return _0x136f8d();},'Btenn':_0x4e05d6[_0x9df7('‫20e','y(W%')],'ZLDOR':_0x9df7('‫20f','@RhJ'),'YRqGo':function(_0x5349cc,_0x2093b4){return _0x5349cc===_0x2093b4;},'RuQAA':_0x9df7('‫210','^$ig'),'BPcli':function(_0x2a15dc,_0x1279ff){return _0x4e05d6['tWquy'](_0x2a15dc,_0x1279ff);},'GKzCt':_0x9df7('‫211','05[g'),'fopAy':function(_0xc971da,_0x2b47e5){return _0x4e05d6[_0x9df7('‮212','rAJ9')](_0xc971da,_0x2b47e5);},'njBOf':function(_0x371f62,_0x170cf8){return _0x371f62!==_0x170cf8;},'nXNuP':_0x9df7('‫213','i$Kf')};if(_0x4e05d6['ShdYX'](_0x4e05d6[_0x9df7('‫214','judi')],_0x4e05d6[_0x9df7('‮215','TT@V')])){user_index=result[_0x9df7('‮19e','o6^o')];yyz_d=!![];}else{$[_0x9df7('‮216','snsx')](_0x3504e8,async(_0x5b5da0,_0x5ca588,_0x3930c5)=>{var _0x11abe1={'lypna':_0x9df7('‫217','5ptP'),'zsxGe':_0x34c1e6[_0x9df7('‫218','rAJ9')],'LOCiX':function(_0x2437a9,_0x28cfc8){return _0x2437a9==_0x28cfc8;},'auSrF':_0x34c1e6[_0x9df7('‮219','TT@V')]};try{if(_0x5b5da0){if(_0x34c1e6[_0x9df7('‫21a','Z5t@')](_0x34c1e6[_0x9df7('‫21b','4njr')],_0x34c1e6[_0x9df7('‮21c','[gUQ')])){console[_0x9df7('‫21d','5ptP')]('\x0a['+TG_ID+_0x9df7('‫21e','Lts9')+_0x5b5da0);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x5b5da0;}else{_0x34c1e6['KQZAi'](_0x2274d7);}}else{if(_0x34c1e6[_0x9df7('‫21f','PTMr')](_0x34c1e6[_0x9df7('‮220','uNGn')],_0x34c1e6[_0x9df7('‮221','i$Kf')])){let _0x2e212e=JSON['parse'](_0x3930c5);if(_0x34c1e6['fopAy'](_0x2e212e['code'],0xc8)){console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x2e212e['msg']+'，脚本已正常使用');return![];}else{if(_0x34c1e6[_0x9df7('‮222','aR84')](_0x34c1e6[_0x9df7('‫223','aR84')],_0x9df7('‮224','M#C['))){var _0x3ac645=path['join'](_0x11abe1[_0x9df7('‫225','LeGL')],dev,_0x11abe1['zsxGe']);if(_0x11abe1[_0x9df7('‫226','i$Kf')](dev[_0x9df7('‫227','uNGn')](0x0,0x3),_0x11abe1['auSrF'])&&fs[_0x9df7('‮228','PzY6')](_0x3ac645)){macs=fs['readFileSync'](_0x3ac645)[_0x9df7('‫229','4cgu')]()[_0x9df7('‫22a','judi')]();};}else{console['log']('\x0a['+TG_ID+_0x9df7('‫22b','5ptP')+_0x2e212e[_0x9df7('‮22c','o*Nx')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x2e212e['msg'];return![];}}}else{app_soy_ggb_data=process['env'][_0x9df7('‮22d','4njr')]['split']('\x0a');}}}catch(_0x189e3d){console[_0x9df7('‮13b','rjzP')](_0x189e3d);}finally{_0x34c1e6['KQZAi'](_0x2274d7);}});}});}function Format_time(_0x44f4c9){var _0x275688={'zbniM':function(_0x575837,_0x58b614){return _0x575837+_0x58b614;},'sdprr':function(_0x45ba43,_0x111d04){return _0x45ba43+_0x111d04;},'cNNIV':function(_0x161f18,_0x352873){return _0x161f18+_0x352873;},'JhQxN':function(_0xb66b5c,_0x15c235){return _0xb66b5c<_0x15c235;},'XgOdf':function(_0x23b26e,_0x32a896){return _0x23b26e+_0x32a896;},'YUKiy':function(_0x195bd,_0x55445d){return _0x195bd+_0x55445d;}};var _0x30d146=new Date(_0x44f4c9*0x3e8);var _0xb553a5=_0x275688[_0x9df7('‫22e','Lts9')](_0x30d146['getFullYear'](),'-');var _0x128644=(_0x275688['sdprr'](_0x30d146[_0x9df7('‫22f','Emy$')](),0x1)<0xa?_0x275688['sdprr']('0',_0x275688[_0x9df7('‮230','wf)^')](_0x30d146[_0x9df7('‮231','%905')](),0x1)):_0x275688[_0x9df7('‫232','aR84')](_0x30d146[_0x9df7('‮233','wf)^')](),0x1))+'-';var _0x5789ca=_0x275688['cNNIV'](_0x30d146['getDate'](),'\x20');var _0x45a7ce=_0x275688['cNNIV'](_0x30d146[_0x9df7('‮234','wf)^')](),':');var _0x473d99=_0x275688[_0x9df7('‫235','o*Nx')](_0x275688[_0x9df7('‮236','Lts9')](_0x30d146[_0x9df7('‮237','o*Nx')](),0xa)?_0x275688[_0x9df7('‮238','4njr')]('0',_0x30d146[_0x9df7('‮239','snsx')]()):_0x30d146[_0x9df7('‫23a','YZ2h')](),':');var _0x2fa951=_0x30d146[_0x9df7('‫23b','rjzP')]();let _0x3657a7=_0x275688[_0x9df7('‮23c','uNGn')](_0x275688[_0x9df7('‮23d','4njr')](_0x275688['YUKiy'](_0xb553a5+_0x128644,_0x5789ca),_0x45a7ce),_0x473d99)+_0x2fa951;return _0x275688[_0x9df7('‮23e','TT@V')](_0x275688[_0x9df7('‮23e','TT@V')](_0x275688['YUKiy'](_0xb553a5,_0x128644),_0x5789ca)+_0x45a7ce,_0x473d99)+_0x2fa951;};_0xodo='jsjiami.com.v6';


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