/*

项目名称:宝贝狗

项目注册地址:http://zoosoft.net/#/register?inviteCode=7F5FD6

不知道这么玩,属于币链来的应该
现在只知道看广告,和零气泡的金币,金币拿去学习获得提现点后才能提现,能不能撸我也不知道
提现看了下是币链和微信,没有转增功能.只支持163和qq邮箱注册,
需要实名,找同名也可以

不知道有没有钱撸,请根据情况自行判断上不上,他又6个这个app,这只是其中一个

固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
注释：

激活卡密获得 @DGR0076 @ls_soy
TG频道:【暂未启用】


脚本需要的变量:
变量名:soy_bbg_data
变量值:token
注释:token抓包找到带有 http://service.babydog.link 的链接,请求头上的token值

多个号用 @ 或 # 换行 隔开

cron 31 0-59/1 * * * app_bbg.js


*/


const $ = new Env('【宝贝狗22/04/15_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodP='jsjiami.com.v6',_0xodP_=['‮_0xodP'],_0x48b3=[_0xodP,'wrzDk8OrR8Ksw7vCij8Yfhw=','wqXDscKYDRE=','w5rCgMOcw4zCojPDsMKw','EDbChVsF','wrrDmsOua8Ka','C8OfSD1vQCQ=','O8OSX8KHwqEgw4fDsw==','L3/Cv8KNCw==','wpLDhcK4wpfCrg==','w7PDosO5Mx3CsG41wrMc','w6nCn8OLw57Cpw==','NMK7UMKhVQ==','OsOpTDdJ','w4LDlMO9MDM=','w4vCl8OFw7fCiA==','w4XCr8OMw4LCoA==','PlJAwo/DiQ==','asOpLeeamuW8geWljOi3izUawr8=','w7jDpcOb55qZ5b+d5aSU6LeUC0LDvw==','ZcO0w5s=','w7/jg5DkvaXogZrmjKPnpInjg6LvvKPpq4Torbbohr3mnpx7woF+5aa66LanwrDor4jli4vkvqvml7nohYfmnInkuYXkuafmh7blhL3lr7bChQ==','YwIvTmY=','J8ODVyYJ','J8O2woXDhsOK','UsKHw4VvTw==','wrjDqcKswoTChn1yc8KtYSMcw7/DmsOQKcO/PXDDkm3DjMKnw5Maw7/Cj8KGdMO0YQUTwrXDn30aw40dw5TDksOLc8K+QBJhYBbCscOKwo/DocOSF2cCw5/Cq8OGU3xDw4EDcsORHMOww5XDhwPDqldVeyXDkMKce8OYw6wYwp3CkALCqVzDmMOZZCAXwooVZMOiBsKhAMOawojCj2vDhMOybcOFcsKFScKHw6fDlFdewr3CvcKww4MsSTLDr8OLYS/DgWfCosOOwrsFbcK4wqsAw4LCm8OYXsOGwrdJLcKpcXhNwqVzwpzCucKlwosETQh8w4LDisKGGjjDjBsWw6BCwpc5wpd8w5goGT9lw6PDn8KvVcOfwoEnw687V8K/wo8CwpNmw5EAw7jDl8O4YUvDvMO7w5zDrMOZTMK4GMOMw7snw5McS0PDm8O8wrgYwpAyFw==','OnzCqA==','JMOwdjIM','AHVa','w4nCisODw6TCo2A=','K8O5RsKwK8Oy','SG4Q','w44Ww7g=','KkNSLGDDqH9G','w4nCuMK2wpHCoA4=','VMKyf8KF','woHCkkoawrA=','R8K8fsKV','wozDqcOxw5nDuQ==','JcOWX8K1wok=','wp3DqsOQw7rDhw==','bMKEw6h1Yg==','wq3DkMKuChA=','P8Oiwq9RfXo=','FWBqH0s=','HsOWwpdoUw==','FMKxXQ==','AxYh5Lyn55S65Y+g5a+XG8KR6L+C5Zm5w6Q=','JnLCvcKtCw==','QcK4worDnw==','w5DCk8Ojw4TCvQ==','wqPDp8O7SsKa','wosVwqvkv7Dnl57lj6Plr4DDuMKu','bMOzUw==','77+56Iac5p+65bSf5q6J5bip5L2s55W0','wpwRVjFL','wqPpo5TljJvmsajmsbM=','5o+K56ahwpPCisKD6Le+5Y+vw5o=','44GHKcOv5ouO5YuxfOW/o+WIp+mHkeW7jsOB','W8K8ag==','5o+Y56a9wpFmYei2g+WNukM=','woXpoZnljK3ms7bmsak=','BcOATAt/','44CHwpku','AcOfTwpvUyQ=','5o+d56aoCsOwb+i3qeWPhMK2','w4zClMOFw4vCmg==','HemhieWMqOaxsuazlA==','T8Kywp3DicKJwpLCgg==','AcKNC+S+sOeXpuWMtOWts8K6w4k=','eAvDjQ==','wqjCvMO25L6S55eC5Y2w5a+VZsK4','UMK8wpk=','MsOVYMKpwrQ=','E8OVwqfDiMOU','w4jCicOG','wo/DksK1wpjCmQ==','wqjDmmbDgsKy','AV3CpcKpAQ==','fsK5wqoyeg==','w4nClcOG','R8Khwp7kv5jnlobljrnlr57DgMK85rCR5p+f5Yy/5a2T5Y6T5L2K55eO','asOpLeS+nueVvOWMnOWsqDUa5rC+5pyE5Y+S5aya5YyY5L6G55Ww','JMKJNMKuwqw=','w4LCusKPwqTDvUnCnWgHwr4B','EcOKwonDp8OO','w4Y/wrfCqMK9wr3CmMOP','wq7DvMOVw5fDqA==','RcKywprDt8KHwpvCk8Kd','wrtnw7jDmcKy','asO3U8KQLcKhR8O+','BsKPMMKzwqrDmH4=','woEVZxxR','aA0UYlXDnsOqLxQt','wrvDtF/DpMKm','w7RHwpzCi8Km','wpDCs00bwoU=','wo7DrMORw4rDuQ==','w4QpwrfCocKk','w5EbwrHCvcKQ','KMOYwozDm8OS','BcOJchZqUQ==','wozCucKmwobCulwzGsOI','w5zmiZHkuoblir/kvavot5QmwqHDvBNRw5HDgx3ChlsMwrDorZHohozooYDlrYboo7Ru','w73DtMODERDCuw==','B2ljwrHDuzg=','wp3miqbkubnlioDkvYjot5Jbwq0OwplJ6K2n6Iad6KGl5ayx6KOMMQ==','w4LCjFHDqj/Dsw==','w6Hmi6Hkuqjlir7kvJLotY3ChwNnwr7DoBJO6K+g6IaV6KKV5a2z6KOjUA==','wrjDqcKswoTChn1yc8KtYSMcw7/DgcOQKcOuKjzCgQzDrMKXwoFEwqbDhcKWd8O6B1ddw5PCqhQXw7Rnw5DDi8OLcMK7WRJgGDvChsOAwrHDkMK0chVnw5zDmcK8Q2QzwqkgScK0EMKRw4nDngTDqiB3fA3DksKHfcONwpxHw4HDjFnDrFvCqsKmHl11wpIDMcK5Q8O9GcK9wr7CjWbDisKpJMK8IsOEDcOAwrvCjFgvw7fDqsK/wrlzFW3CrMKffi3DhGfCpcOW','OcOQd8OqUMKzw4bCi8OPwpQQwqzDqcOO','wqXDucKNFTc2wrc=','J8Omwow=','NFtZwpbDpw==','Q8OJRQohVy3CsMKnw4nCgsKlw4jDscOq','w7MzwrkU','wpPDisOFw6DCrg==','BcOlwoXDrsOn','EDvDgVJzw4HCpG7CgsO5PxcITARd','wobClsKMw6RA','JnvCvMKHJA==','C8OxwrzDksO5','BcO8ThJe','LcODwqvDs8O1','wqLDnXvDu8Kd','e8KcdcKIMg==','D+ODmcOcd1noh7Hmno3mlJvku7Llh7Xot5nlo6bmmaPjgY/vvK5P44Ox5p2o5Lmf5bqG5Y2s5biM55qE6IeF5p2G5pS05LqC5Y215YSj5Lqg5rSt5Y2255qI5LqM5L6N6ISe5py/77+j5LqM55eY5LqQ5ran6K6Y5ZCj5a2L5Li156Ou56iE772+56ag5q+Y55Wa5LiC5ZWE5Lmq5ou46ZyX5rKR55mU55ms772877+U5ZKH5Ym25ZOi5p6M6ISH6LWU44GMwp/jgIPkurzogIrkvJLorZ3lhYDlkILmsabmg4jjgL3lhbTno6vmgJjjgrnlrYzmlqTmgI7lk7Dmna3ml53mgbbvv7XorbrmoZzmj5TmgJHlhrvohb3ooYflibjmlqXjgJrCruOBreaenuiHleacm+aWtOS6l++9hOenn+asoeS7geS/jeWEquS/m+WMveOCjuitiuWdkuOBqOe/hOS9vOS7vuWNkOS7leS9nOW/heW/t+earui8k+i9s+ODp+WNhuW4i2HlkY/lipXlkb7mn6TohLXotbLjgKUz44Oa5p2R5Lqy5ayw5LmJ5L6O6IWW5p616ZSm6aKm5qSA5Lu+6Laf6LSg776E5Y2B5omN5L2n5LiU6Zqb5Lqz55ax5LqL5L6o6IeU5p616Za26K6c5a2J6ISp55qJ5Lq25L2J5o2L5aew5oq55o2w5a6644OZwqbjg4vnm4jmjrbmiZ7plZ/mjLTkvpDnlaPohYzmnp/nm4Tku4Hkv5XnlL7mi5zvvqLlj4bmiZbkv6rkuYzpmYDkuJnku6Hmj6PmiYDlhIPkurvmnY/kuIrooIPkubXovqDljJrlmKjlr6td5Z2J5Y+05rCR5byX5ouF55iq5Yau5rGM6KWQ55m/5oCz5YeY5Lmt6L6p6KCG5L625pOD776c5p+z5Lmp5a695LmU55Wj5q+W5b2Y6LeJ55uv5LqK5L6l6Zuk56Ws5rCm5r6b5omP5YeB5LuT5ZKS5py35qWg5LuG6Le36LaM44K9woHjgYzlpa7mnKDkuZTkv7vlj5TkvrnmiqPkuJbku77or5TkuIDorrLoh6/mnL3ljY7ogbzmtbLlqrjkv5/nirLlhI/mnoXli5Pvv5jli4Dlu4bljLjmlYrpgJXnnLnlurLmjK7kv4jouYTkup3orrfmmK7jgbXmi6XmnanmnLDorK7mmojvvYLmiL/ku6/lsILln6XmlonliZLorY7or53mlaXkuJPlkKLlibbpm7TnmJnlhK/ohYzmn5PjgaTCveOAouS7jeS/teS6jeS7kOS+iuaWpOW9leacjeefhuaumemjiOeYgeebkeS6kuaKvueYi+aOu+aKlOmXt+aPjeS8oOeWteitruS7tuW4i+ebhuS4l+S8puiGu+adrOebleS9o+eWrOiAuumBn+W4keS4kee5vembqeiuiuasveWimOaZqOODv+afr+S7juS+qOeUoumbreaVl+aYn+aUs+aIu+iiuOWGiuaspOWEgui0vOWgqOabr+eZi+ael+WKnOOCn+S5neaUoeS8teeUnOW6jeWlnOWLiuS5rOS5j+S+nueZvuWHkuiHvOafqOaLs+S7veW5reaUiuS6pO++s+WJruiluOS7guaCjeW1o+aMmuWNreavmuWHjOi0guWhiuaZkeOApg==','K8OZdRE8Yg==','woLDk8KlwrXCvA==','VMOmTMKkNA==','CMKZQ8KGRw==','Cn5IHGM=','wqZJw7nDhcK7','w43CkG3DgDrDtU8=','YsOow5Ul','PsKEfcK+RQ==','w6/ClMKDwo/Dmg==','IsKfTsKZaA==','dcOvZ8KeEsK1wqTDrw==','SELCiuS8tueVmeWMruWtqw/Dq+i8tuWZvnk=','C8Krw4HkvYHnlLHljb7lr6PDqx3ovorlmrMc','wpDCkVQ8woo=','w6w2WMOOwqfDucOyMg==','wrvDrGPDgQ==','wpHDqcKPXw==','ATvChkIj','w7PCjsOKw7jCig==','w7HDqcOu','wqrCosOQJw==','w6g4ecOJwrA=','SMK5TcO2w7g=','fAvDpCYVKg==','w5bCsMKCwr3DsVzCi24Gwr4HPw==','YgLDsyo6','w6HDgMObFTw=','w7jDqMOq','44G9776g5pyW5aCS5YaX55uM5buV5YyJ6YSbwprDnsKkw5TDmsK8XiHCl8KSw71NBw==','w6bDosOsGjLCt3ckwoUWFcKQ','fMOow68/PsOMw6ME','wpDCrEIW','acOrw5LDjsOa','wqnDvMKdBDo=','wqHjg6/kvYPogoDmjovnpqzjgLbvvK3pq7borJjohabmn50iw5VD5aS36LWST+isluWJj+S/k+aVs+iEhOadu+S4quS5s+aEiOWHneWvoQo=','w5rCuVfDvBU=','JsKfHMKZwqw=','eBnDnioZ','d8Ksw590QcKIw4Q=','wrzDqAvDnsKV','wpbDncOUcMKs','w47CkWk=','w7lGwphQdcKMw6o6fXtxTQ==','FGRED2o=','HXVUwoHDvT8Kw7nDh8Ohwrdy','S8K5worDn8KQwrrCgQ==','WcOdw6fDlcOk','wpjDsA7DgMKELw==','w5Y0wrUyw4Y=','w4DCscKN','wozCpsOadm4=','BMKEMg==','wozCucOPQHg0cnLCk8OWZcKB','woJWw6jChsOn','w6VDwr8=','LUN4B3DDo3Z+w5V3w5PCpQ==','woHCsF0=','wpfCrkcSew==','acO0w4fDuMOMwrp/wqXDuMORwqI/','wqrDsHw=','JcO+wphhe31Cwo5ZPxld','ZMO8Q8K4OsKAVQ==','O0J3','woYPXj1H','JMOYb8KNwqs=','TsKgwoc5V8OewopcCWRHw5M=','L8OHR8Kmwro=','w6Ywwokqw65oBcOjFHfCgQE=','w6fDt8OhFwA=','Mw7CukEj','HTXCkw==','wrhTJsO3wpTDk+++hg==','w5UDEnnkuLnmrK9Uw7zDiu++jeaWlQ==','BMKEJw==','wqzCu1M=','Hntfwq3Dug==','wo7DscOG','wrfCoUo6w4UH','TsK7wowPW8ObwoRlFA==','W8Oew60=','wqDDuMKKFSs1wrA=','FcKxXsK0','w5fDhcOO','MsOLXw==','ewczW07DmcOxPA==','AMOVWw==','BeW8u+WIreS/juaBk+++qsKVdiUZw6fCt8Of77yJ','w5/DnMKbUlsV77yP','KMO7wpxm5LmG5q6Ew4AiF+++kQ==','wqjDuMKHACYt','N8Oyw4NbFeiGpuafgeaJpOigoSUewpLljp3kuKnml6XplaTvvIE=','w4TDjcO9Mho=','w788f8OuwrzDvcO5','BcODwqh2Qw==','IRjCjEIU','KMOYZ8Kgwq00w5nDpcK6w7PDrcO7wo5q','X8K8w6F5Tg==','wqHDgiLCuOOBi+WHpwc=','w4vkurXotoPljbnjgp4mwppO','wqPDhg/DvMKu','w7HCjcKowqjDkA==','RMKSwpnDssKA','wp3Do8OOdMKv','S8KQew==','w5DClsOP','FcKtXQ==','wq3Ds8KNAio=','HOW+o+WnheOCieetk8Ow','fBbDjiwJ','QeS7gOi1ouWMgOS4sOWIjeOAig==','w5nDvcOGEwc=','bcOvUw==','SOOCguiHvuaej+aNjeemsuODs+++jOmrjeisnuS5mOmDqOWHgF3ljZvog6jmnYPliavlm5Dljo/lm4/CseWnqumcmuWKsOeQmuWJrOWOkumBsOauneaKjjDCniVCeMKbwq8=','AkHCnMKUNg==','dMOHeMOaJw==','wrnDksOpQsKB','wofCv8KrwobDtBwxA8Oew7zDgy81fsKDQMOrwrgnw4nDocKxw4DCnmNhX8O4','KsKPIcKHw6bDrXfDg8OZGg==','wotFw4jCs8ObMMOMc8OTKcKOw50k','OsO+woY=','wq02ZBVp','w4zDjsObPy4=','eBwFYHs=','w4jCm8OVw43Cig==','TsKqwpACe8OTwplqC3w=','w7nCuRnDlQ==','CMOGwoPDhMOn','YsOhQMKJCA==','OnzCqMKbHCI=','OsOeRcKuwqI5w4w=','wqvDsWTDiQ==','TsKEwqXDnsKd','woDCmMKywqbClg==','FcOdZcK7wow=','Z8OHV8OYCg==','w4PCumXDpzw=','w4fCicOsw77CmA==','CsK/VMK1fyM=','PFx4Hno=','wqjCs2A8eA==','woTCk8KPw7RL','M8KOEMKiwps=','QMKaaA==','L8OkwqrDq8Oz','w7EnwoQtw6E=','VcOFdsK5Fg==','wpjDsMKYwqXChA==','wpXDicKCFyQ=','wqDDlyvDn8KW','wrfDmcO4','5o6856aAEVQj6LSS5Y62w7E=','F+mhleWPm+azteaytQ==','44O6wqXChee/n+e5k+ivrOazpeWlgui0ow==','5o2E56a9wqBTWei3uOWPrGE=','w4Tpoqjljbbms5PmsY4=','NMOSfSsK','44CUw7PCj+e9iee7vOisnOazo+Wmrei0oQ==','TcKuwowVUA==','AsKFIMKS','w4pZwq7Ch8Ku','wrDCsH42Qg==','R8K5wo0=','w4hIwrE=','wqjDq8OZ','w4hIwpJqIcOa','w5jCi23DrDXDsU5RAw==','wrTDg8KF','BcKPJ8KFwrLDnG8=','WsK8acKE','RsKLw6w=','woUeVg==','wqfCi8K2w4YP','U8KQT8OQw6VSwpfDpw==','w7AxwpM=','w59dwoc3','w5HCisOP','w4Xlv43liYfkvY3mgqvvvLrDpsKewpTDusOvwpAF776h','w4Qkwo3CisOuA++/uQ==','InzCnMKqHDnDng0=','6IWE5pyA5o+R56WiP8KsPOi0h+WNhjY=','w6o8wqkZw6o=','woXpobzljbfmsrrmsIM=','44Ocwr/CmuaLjeWKoiflvrTliYTphq/lup9m','awkUTg==','PE1tOXzDonR0w59/w5M=','5o+356eFMcKJwrrotJ3ljI7CoA==','wpbCuMOSemI=','MnLCu8K/','AcKVaMKnaQ==','aMOuUMKPGA==','KOmggeWNquaxn+ayrQ==','44O1w6QL','5o2F56Wlw51YwqHotKzljpXCnA==','wo3CsE8edw==','w6TpoJvljL/msbPmsrM=','w7lvwqpXfQ==','44K0w6XDmw==','L8O3wpfDkMO8w6/Chw==','MMOYTA==','w7vCvMKyTMKYw5Tvv7w=','wrUjw5BY5LqG5qyrL8O9M++8jOaUlQ==','RsK8wqjDncKj','DcKFIw==','5o+G56aZI8K0Uui3tuWNncOK','w4zCscKfwofDsA==','YMKjwpjDt8KA','44CcwqgH576M57qe6Ky45rGx5aan6LWg','44CHwpku57+I57qj6Kyn5rOo5aeb6LaZ','wrjCkmk9wrY=','wpPDj8OoVcK9','awM4V3M=','EsOiwrdWdQ==','w5IrwqQSw4k=','KcO5wqjDrsO2','O1fDhygS','wrTDgDfDiMKi','L1lMwpvDlg==','fMOkw5EDIA==','w7ZbwozCkMKd','RcK0wrrDuMKN','w5HCscOvw7zCrw==','TynDkAch','Z8KqesK1EQ==','ZsKUwovDkMKw','wqTDscORw6/DhA==','woPCpMK4','5oyL56aMwrIsw7TotrHljJFG','woLDscOBw6vDtw==','wovpobnlj4nmspHmsro=','44CEQsKK','w4jCn8OSw53Cg8Oqw7A=','5o6x56eQacOaw6botorlj6zCig==','wo1Aw4TCosOX','w7vpoLDljYnmsJXmsLg=','w5vCvRvDpMKT','44CeUkA=','w4jCusKIwpHDqULClA==','w61MwpU=','fcOBw40HHA==','wrJiw63Ct8Or','UcOvW8O1OQ==','wpPCucOR','w7bCucKRwq/DnA==','wqXDs8KfwoLCvQ==','w7kwwpc=','5oyh56a5bcKCw43otazlj4Ux','w77CthDDlcKt','w4/poY3ljInnpY3nubHph6LluJ/jgaHCgcKu57+k57qa6K6h5rGZ5aac6LSH','5o2756eFMsKodui2sOWPkBc=','NumgpeWPmOekoue7gOmEgeW6q+ODu8KGw4fnva7nuJ7orbvms7jlpIrotoc=','esKwwrbDlcKc','VMK8acKE','ZMOow5s=','6IeX5p6p5o2q56enECbDiui0r+WOicK+','w7wxwpQQw7Q=','w4TpoZjlj73np4DnurDph4rluonjgIlTwqHmi4nlir/ChuiOj+W9iQ==','w7PCuQDDkQ==','woXpobzljbfnpJXnuZ3phZzlupTjg6kbReaIleWKkGHojZPlvro=','w4HCvsKPwoM=','wrpAw6w=','w6NHwoVqbw==','F+mhleWPm+elmue7q+mGrOW7r+OAngDCvw==','eB3DmToQKMOI','5oyU56anw4RKf+i1o+WMs34=','YcOpw5guNA==','wrjpo5/lj53npIHnuarphYHlup0o44KnTMKu','w7XCs8KPwonDgw==','ITbCgFoN','wpvCj8Ky','FDTCgg==','w7NCwrDCnMKmUcO4wol4wpFGwoc=','H0VyEks=','wqjDssKO','SOOCuuiEoeadkuaOiOekveODmu++gemou+itpOS7k+mAkeWEgAPljqrogq/mnb7li5nlmqfljrLlmqLDp+WmsumequWIgeeTn+WLq+WOvumCn+avs+aKvcK8w7LCmB/DtVTDnw==','wqjDk8Otd8Kww7TCg0gffgzDmw5oQ8ORXcOhw4/CjQ==','wqPDp8KAFw==','DcKrdMKfdg==','w7cyY8OOwqHDoMKzZsKYR8K6w4hh','asOoTsKt','w7/CrADDgMOvwqtUwrgYw4sTw7kUTMKWa1rDimjDpcK0w7xOOsO9w4hpIDzDpsO/SiXDuTB4cMOewp3CgFUYKcOyXMKrdA==','wrrDpiXDn8ONC154X8O3','UQLDphEa','ecKFwr8HdA==','w7DCvQDDtsKgw6gXwpIYw5gX','wrHCtUAtRw==','wpDChcKhw7FZwowC','wqDDrcK9wrvCog==','acKgwoYifQ==','w5rCtw7DmcK5w6gaw6RIwpdVwrBfZcORZ07DkCrCocKaw7UEJMO7w49mL2zCp8KjFCrDjhReGsOwwr3DlFpRBcOjUMK/LcOGPGY4PgBDwq7CgkrDhcOPCsOdX8Omw7rClsOMZwRhw4HCr8KYw7TDlW/CucKZw7fChsOqwohewr8LciZcDyocwpAzw7M+Y8KJL8OOWMK1w4MGW2rCv8OkIcKXFMO4w7bCo00zPMKXacOtABZdw5hcwqMTBxNuw5fDlcKgwrkGMsO/w7rDgMOEenbDnzfColzDucKGJiLCmsKlw7hpAVsdXjLDoMK2w4nDknvCnsKeQ8OPM2rCi1TCrcKTKsO2IS/Dgw0GwoUwwrLCnWPCvy7DrlZhw4BiwpZJCAbDgsOiScOVw6sATl5nbWlGJjLCt2wow5TCisOpw6kudsO8w4jDqsO8','wpMTXTtB','fiQ1WWk=','wopBw5c=','wqbDm8KQ','BMOVTw1gVSzCtA==','wpDDoCPDgMKVJEYs','eFxgK2HDtn5Tw5UrwpbDtsKUQSRUw6fCnsOtwoDCgCzDpcOoFRc=','w5nDg8K4','wrnDqsOpwqlPYsKJbg==','wrrCgnsxwqY=','wrrDhcOdw6zDlw==','K19kKk3DrX5Gw554','JsO+wpJK','VuaLieS4puWLv+S9k+i0g8KVw6bCmsKnwrPoraXohIrooYHlro3ooK3Dqg==','w5jCvHjDqSk=','wpjDnMOCw6LDvQ==','wqFYw4bDiMKw','wqzDrcO2w7nDiA==','w7DCrQbDo8K8','cBbDnA==','JcOkGueaquW9heWlv+i0iSTCqei/jeWYuWg=','LGDDlOeZiuW8k+Wmk+i2uGXCkei8leWbkAI=','F2pPDFc=','dhfDjiw=','AsKELMKxwqQ=','w7rCqxM=','GHNd','wp3DrCc=','esOFPOebn+W/guaIq+WJpsK6wozDhMOldeWJmuadpuaUmumUisKu','wobDm8Osw7TDhQ==','NsO9wo/DhsOz','w6gcwo3CscKX','w4bCsMKfwoc=','wpPCqWY8SQ==','AsO+wpl6UQ==','w7zClwLDt8Kw','w7gswpc=','w55ow63nmIflv4flpaLotbbDlMOFJw==','woLCuMK4','UlJA5rOH5Yaw5aaB6La6YVHovorlmabDng==','wqfCiMKxw4Rv','woJmw5PDrsKA','ZcOGfMOvFsKzw4/DhMOewoZdwrvDqMOVXMKMwpzDnTxR','wqDDtWLDmMKwUMODwoDDrsKMwoTDt3g=','SOaLrOS7qeWKk+S8gOi3nsOCw5kSw7956KyF6IWZ6KC95ay96KOQRA==','w4tfwpVLQg==','LMKJFsKZwoA=','wonCiG0WSQ==','fsOGY8KxEA==','wqnDtMOSw7TDgw==','V8O0w4TDjsOCwrR5w5XCqcKew6Z+wr0wXMKIDcKNFhLDnQ/CgcKGLMOPwr7DixMSSsOoRsO6d8K8LhtZNMK/E8K5wrDDi2/CoxkpwpUPTwQSwr3ClcOHOcOPDU4WwpzCgsO0VQ/CvEnCqMKDPkMawrQ0w5TDqsO1fncvQMO0wrrDuMKkFsO9VsObwqbDrCJIwo3CnzvCn8OLwovDh8ObeGvCm3nCtcKWRcO3C8K3w4bDu298wrnDncOEw6QVwr7Ds8KZPMOSwp7DlcOtZsOGFMOXwpDCrWU8JMO2wqZ0worDt2AXVAx3w5bDisKBw6fCvMK/ZR/DpxzDoFRvw5YSw5hfE8KqFTvDiijDukMywp1Aw4PDiMK3VMOmSsKXw4UwwqHCviXCpMO/fmNxcnbCssK5woA/VMKlw6/DsQXDlMKewqHCkjPCg8KKw44BZSrDj2jCkcKUw6PCsw==','w6h+wrlbbg==','w5zDkMOAED8=','LsO9woM=','SOOCuuS9p+iBu+aOiOekveODmu++gemou+itpOiHhOacpyBnBOWlo+i1llTorLjli5Lkvqzml7LohKrmnobkurLkuKLmh4Tlh4zlrKY=','ch3Dng8EI8OBbMKuwoPDkg==','w54Wwr8fw64=','AnVK','wp3DqcKlwpnChHB+OQ==','w7Mzwp8aw74=','bsKUwozDlsKJ','w4vCsMKM','D8OWw5E=','w5HClcOyw5rCkMOkw7vCnw==','wqNcw67DvcOL','w5PCsFgswoBEwpxLLMKKwpbCghvDvQrCvcKkw7VRQnjCszJcEcOpwpfCniLDrsK8eMOyPsKBE8OI','cMOlw5w=','D8OuDg==','IcOAwo5IXQ==','w7QDwqIKw5Y=','wrLCjE4Hwps=','w6fCmcKswoDDrA==','eA8DQEQ=','w4fCkHg=','44OH77y15p6h5aOk5YWv55m65bqS5Yya6YWBSlLDisOVb8KVUVbDg8OCB3jCrg==','ZRfDmT0=','w4sUQ8Oxwoc=','OVZoKA==','FHhXwqjDpw==','LGDDlOazmeWHiuWmk+i2uGXCkei8leWbkAI=','F8KqbcKefQ==','wp3CtE0vw4kcw5xKLcOFw5HDmUvCrBHDqcOjw75GUCrCp3NJAcOywpLClyfDoMKjdsK+NsKAAsKywpscw71OwpdQw6o4wqJN','aiYTTW8=','w5rCncO6w5nCoQ==','wpbCtMOhang=','w4DDicOhKTs=','wpvDvsOXw73Dqg==','w7s2b8Of','wpTCncOnTnY=','wrgcYDp4','wpTCs1oFwpI=','wqLDswfDm8Kl','D8OVWBw=','wqzCuWDmsYflhazlpbvotJcrCQ==','wrbDhcO4','77ya6K2GWsOeIMKZw67DheisguWnoBDCi8Oc5bWI6KKQ5rGK5YW8','BVF8wo/Dsw==','w7AdXsONwq0=','D8KMJcK1wpg=','JcOkGuawueWGnOWlv+i0iSTCqQ==','d8Oow5k=','w4jCrMKc','wo/Ct8OEbH8=','cQzDjzAz','XsKgwpoD','w6xCwq4=','6Ie+5pyC5o2w56e9woJtw47otabljIo4','woXpoZnljK3npZnnuLfph7Tlu7DjgKBYw7/miaPli4EX6Iyv5byL','wpEeRjU=','5oy/56exw7LDm8Oj6LSV5Y+pUA==','OumgneWNqOeknOe4kemEieW4meODq8KmwpDmi4bli4HCueiPi+W+og==','w6RMwr3Cog==','5o6h56Wgw5kca+i2hOWNqn8=','wrLDmMO7ZMKh','YumgrOWPreenhee7p+mHluW7iuOCisKNwoU=','w4w/wrDClsKzwrTCiQ==','5o2Q56SXw6TDrsOp6LSV5Y2ow7Y=','w7vpoLDljYnnprrnuabphYblu6cb44GsJU4=','YMO3VMKuI8KoVg==','wpLDpMKtLDM=','wqfDmH/DjsK2','woPDmcOQw6zDvQ==','w4LCkXvDoCM=','aMKsw5xrQcKMw4Q=','TsKReMOBw68=','wqPpo5TljJvnp4fnuK3phoLluZLCk+ODtD3CoA==','w7rCvQfDg8K0w6Me','D2lOwoTDvg==','w7o/Z8OywoI=','w7MRwrkDw40=','wqxawohoecOT','aQQPQE4=','eMOMeQ==','w7lKwpNmZ8KawrAHe30jQnl2w7Q=','MMOXMw==','WDzCnw==','NMO4aMKDwq0=','wqxiw5/DqcKf','w5HCsMKowpbDukzCn1Y=','woLDsXDDhcKoTMKNwpzDtcKTwoDDuWnDt8OmaAXDv8OWw4fDusKTwrrDgkcpwqfCicKCwpTDpMKOwpPCscKiw48Gwr5hfAt2YSjDrcO1PsO9McO3PMOXwr3CtcKLXFDDv3ArPmXDrwXCs1AoMDI8O8KSw4TDscKRw7vCmMKmDyvDrkV/wp/Cu2XDkMKZTwHDjzLDsyg4wqFiw57DnsOjIADCu29OMRwTwobDlBMjw4vDsV14wrJcJcOyHQcWwpfDr8Kkw7wVDAfDjzxWw6nCgsKswq3DnFp+bVFLw7vDhRdqJC0lZH3Dt8OWw5txeAwZwo/Dv100BMKAARnDjMKHE8KXw71Uwqt/w7fDtgDDhlDDosOwXzgAIEDCm3vDkHdNwrVNVMKxYWDCu0c5G3FJAsK+PcKKwp5MDEA+fg/CusOlG8K8H08i','w7hRwrFrdg==','BsKfNcKawog=','UMKvwr7DnsKJ','c8OiYsODCg==','GcOWVjpc','BsO1wqNHTg==','VcK9XsKMDA==','w7rDlsOIJgE=','wp7DmsK6NTw=','GWXCjcKzAA==','wpbDrAXDucKu','HnVewqo=','NcOISigX','SsOZccKSJw==','esKEwqgpUA==','wobCjMK/6aqN6KyY6Lax5YyRXF3ov4vlmrDCgg==','w7bDhT/pqInorprotrDlj5ANWui8jeWaosOR','wqlbw6vCgcOr','Gx3ChXgE','wr3DpMOIwq5Y','wq7DqsOewrg=','A2lK','wqHDqsOd','wrrCksKAw6NQ','dsO0w5k=','wpnCp8OJ5LyY55W65Yyk5ayCZC/ms7fmnZrljojlr5Llj5LkvZHnlbU=','w7bDhT/kv7rnlbPlj7flr6ENWuaxuOadteWOkOWut+WNsuS9veeUrg==','L8OewrLDmsOu','CsK7W8K1dCdeTcOwd8KE','bcOZQg13ZMKnw7rDhMOWw7FlFltq','w4c1wrHCoMKzwrDChA==','wq7DssKACQ==','IsOhXsKubcKsX8O3NkbDocKLQMKE','wq7Dum7DnsKhU8Kf','d8Kgw7hTVg==','M8Olwok=','w69Rwoh8Y8Kdw54cd3k=','VcKafcOAw5FSwpXDpcO/w6vDgkY=','w5U1wpDCkcKgwrrCgsOA','bsOpw5fDig==','esOMaQ==','w5V/wr/ClsKL','FsKIeMKFcw==','VjsrXjiUampihMUTwL.eKcHom.v6=='];if(function(_0x10e295,_0x76ec1a,_0x24c439){function _0x2c120d(_0x1f664b,_0x97601f,_0x3165bd,_0x46d25f,_0x7a4d8e,_0x47a27a){_0x97601f=_0x97601f>>0x8,_0x7a4d8e='po';var _0x2d36db='shift',_0x4f5e54='push',_0x47a27a='‮';if(_0x97601f<_0x1f664b){while(--_0x1f664b){_0x46d25f=_0x10e295[_0x2d36db]();if(_0x97601f===_0x1f664b&&_0x47a27a==='‮'&&_0x47a27a['length']===0x1){_0x97601f=_0x46d25f,_0x3165bd=_0x10e295[_0x7a4d8e+'p']();}else if(_0x97601f&&_0x3165bd['replace'](/[VrXUphMUTwLeKH=]/g,'')===_0x97601f){_0x10e295[_0x4f5e54](_0x46d25f);}}_0x10e295[_0x4f5e54](_0x10e295[_0x2d36db]());}return 0xdf4b1;};return _0x2c120d(++_0x76ec1a,_0x24c439)>>_0x76ec1a^_0x24c439;}(_0x48b3,0x65,0x6500),_0x48b3){_0xodP_=_0x48b3['length']^0x65;};function _0x651d(_0x26a148,_0x5ac6ce){_0x26a148=~~'0x'['concat'](_0x26a148['slice'](0x1));var _0x1e7f15=_0x48b3[_0x26a148];if(_0x651d['NXfZUb']===undefined){(function(){var _0x2acf27=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5aad10='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2acf27['atob']||(_0x2acf27['atob']=function(_0xa68215){var _0x50205c=String(_0xa68215)['replace'](/=+$/,'');for(var _0x151021=0x0,_0x57a9b4,_0x4de2c5,_0x5a02f9=0x0,_0x142482='';_0x4de2c5=_0x50205c['charAt'](_0x5a02f9++);~_0x4de2c5&&(_0x57a9b4=_0x151021%0x4?_0x57a9b4*0x40+_0x4de2c5:_0x4de2c5,_0x151021++%0x4)?_0x142482+=String['fromCharCode'](0xff&_0x57a9b4>>(-0x2*_0x151021&0x6)):0x0){_0x4de2c5=_0x5aad10['indexOf'](_0x4de2c5);}return _0x142482;});}());function _0x13c6f6(_0x16817a,_0x5ac6ce){var _0x1d53d5=[],_0x5d3db0=0x0,_0x49f53a,_0x4f9dd6='',_0xce167f='';_0x16817a=atob(_0x16817a);for(var _0x17cf36=0x0,_0x1fd095=_0x16817a['length'];_0x17cf36<_0x1fd095;_0x17cf36++){_0xce167f+='%'+('00'+_0x16817a['charCodeAt'](_0x17cf36)['toString'](0x10))['slice'](-0x2);}_0x16817a=decodeURIComponent(_0xce167f);for(var _0x578a3d=0x0;_0x578a3d<0x100;_0x578a3d++){_0x1d53d5[_0x578a3d]=_0x578a3d;}for(_0x578a3d=0x0;_0x578a3d<0x100;_0x578a3d++){_0x5d3db0=(_0x5d3db0+_0x1d53d5[_0x578a3d]+_0x5ac6ce['charCodeAt'](_0x578a3d%_0x5ac6ce['length']))%0x100;_0x49f53a=_0x1d53d5[_0x578a3d];_0x1d53d5[_0x578a3d]=_0x1d53d5[_0x5d3db0];_0x1d53d5[_0x5d3db0]=_0x49f53a;}_0x578a3d=0x0;_0x5d3db0=0x0;for(var _0x5db943=0x0;_0x5db943<_0x16817a['length'];_0x5db943++){_0x578a3d=(_0x578a3d+0x1)%0x100;_0x5d3db0=(_0x5d3db0+_0x1d53d5[_0x578a3d])%0x100;_0x49f53a=_0x1d53d5[_0x578a3d];_0x1d53d5[_0x578a3d]=_0x1d53d5[_0x5d3db0];_0x1d53d5[_0x5d3db0]=_0x49f53a;_0x4f9dd6+=String['fromCharCode'](_0x16817a['charCodeAt'](_0x5db943)^_0x1d53d5[(_0x1d53d5[_0x578a3d]+_0x1d53d5[_0x5d3db0])%0x100]);}return _0x4f9dd6;}_0x651d['EEswcd']=_0x13c6f6;_0x651d['hDzfNB']={};_0x651d['NXfZUb']=!![];}var _0x5e1f0c=_0x651d['hDzfNB'][_0x26a148];if(_0x5e1f0c===undefined){if(_0x651d['aQSYNC']===undefined){_0x651d['aQSYNC']=!![];}_0x1e7f15=_0x651d['EEswcd'](_0x1e7f15,_0x5ac6ce);_0x651d['hDzfNB'][_0x26a148]=_0x1e7f15;}else{_0x1e7f15=_0x5e1f0c;}return _0x1e7f15;};try{CryptoJs=$[_0x651d('‫0','CwnY')]()?require(_0x651d('‮1','l6GH')):'';}catch(_0x5c600f){throw new Error(_0x651d('‮2','EHgc'));}try{os=$[_0x651d('‮3','SDe9')]()?require('os'):'';}catch(_0x8e190f){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}try{fs=$[_0x651d('‮4','qIHZ')]()?require('fs'):'';}catch(_0x2e170a){throw new Error(_0x651d('‫5','Tg0G'));}try{path=$[_0x651d('‫6','TwKW')]()?require('path'):'';}catch(_0x391140){throw new Error(_0x651d('‮7','zM[H'));}let mac,TG_ID,yyz_Kami,user_num,script_data,bbg_UA,app_soy_bbg_data,app_soy_bbg_addata,bbg_token,subTitle,user_index,yyz_d=![];let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl='http://yyz.soyyun.top/api.php?app=10003&act=',yyz_UA=_0x651d('‮8','ieO5');!(async()=>{var _0x24d699={'reEpu':_0x651d('‫9','pkLs'),'pGyWW':_0x651d('‮a','DWQ%'),'TRIDq':_0x651d('‮b','URHE'),'nfEQl':function(_0x2d2bda,_0x8ee668){return _0x2d2bda===_0x8ee668;},'NYNlG':_0x651d('‮c','qIHZ'),'pfrJM':_0x651d('‮d','CwnY'),'pIrLK':function(_0x53bb79,_0xd14920){return _0x53bb79(_0xd14920);},'KSMVe':function(_0x2bf827){return _0x2bf827();},'ZuNan':function(_0x29374d){return _0x29374d();},'UfxNT':_0x651d('‫e','S9LK'),'OdoAU':'gzip','JTggz':_0x651d('‫f','4jMG'),'wUsXV':function(_0x5962fe,_0x405ed5){return _0x5962fe(_0x405ed5);},'bicrP':_0x651d('‫10','URHE'),'VtkVh':_0x651d('‮11','Kkzl'),'oFQRo':'140c1f12feeb2c52dfbeb2da6066a73a','mGjos':function(_0x4ba0b7,_0x1faf35){return _0x4ba0b7!==_0x1faf35;},'uGVkH':'QpyvY','qFHyN':'VdZtT','GuXng':_0x651d('‮12','Io$R'),'nAIQq':function(_0x3d8a1e,_0x45fc93){return _0x3d8a1e===_0x45fc93;},'MkKqu':_0x651d('‮13','HR)T'),'JHEWx':function(_0x2ba62a,_0x21d139){return _0x2ba62a>_0x21d139;},'iTRpa':function(_0x41ef2a,_0x481664){return _0x41ef2a===_0x481664;},'gEVZM':'xpfBs','CFYrJ':'PGMbu','fxHAH':function(_0x32fe90,_0x349906){return _0x32fe90>_0x349906;},'zMZTf':_0x651d('‮14','URHE'),'xoDBe':'IXfMq','BTNpe':function(_0x4be994,_0x196e89){return _0x4be994==_0x196e89;},'PJpLn':function(_0x46e9f5,_0xf64ed0){return _0x46e9f5+_0xf64ed0;},'qyoiw':function(_0x499a9f,_0x17a9e3){return _0x499a9f+_0x17a9e3;},'XkAUn':function(_0x2a190a,_0x5096e4){return _0x2a190a*_0x5096e4;},'SRIHZ':function(_0x418886,_0x5ac855){return _0x418886*_0x5ac855;},'PBxsR':function(_0x2114b7,_0x4dba41){return _0x2114b7*_0x4dba41;},'REOSN':function(_0x4c6dff,_0x1f4a1e){return _0x4c6dff<_0x1f4a1e;},'TRSJX':function(_0x3dcdb2,_0x593416){return _0x3dcdb2!==_0x593416;},'fEwHh':_0x651d('‮15','CwnY'),'MzKms':function(_0x260683){return _0x260683();},'bdvCX':_0x651d('‮16','URHE'),'XIVAZ':function(_0x244aab,_0x15ac02){return _0x244aab!==_0x15ac02;},'gUHKw':_0x651d('‮17',')ini'),'qBhEQ':_0x651d('‮18','g@3Y')};console['log'](_0x651d('‮19','MDA3'));if($[_0x651d('‮1a','a&%t')]()){var _0x130813=require('fs'),_0x3a000e=_0x24d699[_0x651d('‮1b','ieO5')](require,_0x24d699[_0x651d('‫1c','f!Zp')]);function _0x1505a5(){var _0x20e3c1={'ZQWNT':_0x24d699['reEpu'],'rRpJW':_0x24d699[_0x651d('‮1d','@xOT')],'FZGoU':_0x24d699[_0x651d('‫1e','BtV9')],'JKxmR':function(_0x343d5b,_0x3101a1){return _0x24d699['nfEQl'](_0x343d5b,_0x3101a1);},'bdsVM':_0x24d699['NYNlG']};var _0x52bec3='';var _0x36db94=_0x130813['readdirSync'](_0x24d699[_0x651d('‮1f','EHgc')]);_0x36db94[_0x651d('‮20','TwKW')](function(_0x20f91a){var _0x2cf427=_0x3a000e[_0x651d('‫21','MP6!')](_0x20e3c1['ZQWNT'],_0x20f91a,_0x20e3c1['rRpJW']);if(_0x20f91a['substr'](0x0,0x3)==_0x20e3c1[_0x651d('‮22','@xOT')]&&_0x130813['existsSync'](_0x2cf427)){if(_0x20e3c1[_0x651d('‮23','bjGP')](_0x651d('‫24','@xOT'),_0x20e3c1['bdsVM'])){_0x52bec3=_0x130813['readFileSync'](_0x2cf427)[_0x651d('‮25','f!Zp')]()['trim']();}else{console['log']('\x0a['+TG_ID+_0x651d('‫26','pUdV')+error);subTitle+='\x0a['+TG_ID+_0x651d('‮27','[Tg(')+error;}};});return _0x52bec3;};mac=_0x1505a5();try{if(_0x651d('‮28','!TBm')!==_0x24d699['bicrP']){before=_0x130813['readFileSync']('./mac')[_0x651d('‫29','2*Mu')]()[_0x651d('‫2a',')ini')]();}else{os=$[_0x651d('‮3','SDe9')]()?_0x24d699['pIrLK'](require,'os'):'';}}catch(_0x48563c){before='无';}mac_e=CryptoJs['enc'][_0x651d('‮2b','DWQ%')][_0x651d('‫2c','Kkzl')](_0x24d699[_0x651d('‫2d','cnpa')]);mac_i=CryptoJs[_0x651d('‮2e','SDe9')][_0x651d('‮2f','ErG$')][_0x651d('‫30','2*Mu')](_0x24d699[_0x651d('‫31','fnqE')]);let _0x4a4caf=$[_0x651d('‫32','pUdV')]()?process['env'][_0x651d('‮33','bjGP')]:'';if(!_0x4a4caf){if(_0x24d699['mGjos'](_0x651d('‫34','pUdV'),_0x24d699[_0x651d('‮35','SDe9')])){console[_0x651d('‮36','SDe9')]('\x0a【'+$['name']+_0x651d('‫37','CwnY'));return!![];}else{macs=_0x130813[_0x651d('‮38','SDe9')](fn)[_0x651d('‫39','MP6!')]()[_0x651d('‫3a','6s#X')]();}}else{TG_ID=_0x4a4caf['split']('&')[0x0];yyz_Kami=_0x4a4caf[_0x651d('‫3b','D[wY')]('&')[0x1];try{Tips=author[_0x651d('‮3c','DWQ%')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x36d00f){throw new Error(_0x651d('‮3d','TwKW'));}try{if(_0x24d699[_0x651d('‮3e','TwKW')]===_0x24d699[_0x651d('‮3f','$d#&')]){_0x24d699['KSMVe'](resolve);}else{YZ=author[_0x651d('‫40','pUdV')](/作者TG_ID:(\S*)/)[0x1][_0x651d('‫41','MDA3')](/_/g,'><');}}catch(_0x19f040){if(_0x24d699['nAIQq'](_0x24d699[_0x651d('‮42','o%QB')],_0x24d699[_0x651d('‫43','o1Or')])){throw new Error(_0x651d('‮3d','TwKW'));}else{_0x24d699['ZuNan'](resolve);}}};if(process[_0x651d('‫44','TwKW')][_0x651d('‮45','^1Fm')]&&_0x24d699[_0x651d('‫46','BtV9')](process['env'][_0x651d('‫47','qIHZ')][_0x651d('‮48','sLDt')]('\x0a'),-0x1)){if(_0x24d699['iTRpa'](_0x24d699['gEVZM'],_0x24d699[_0x651d('‮49','D[wY')])){_0x3a000e=$[_0x651d('‮4a','o%QB')]()?require(_0x24d699[_0x651d('‮4b','S9LK')]):'';}else{app_soy_bbg_data=process[_0x651d('‮4c','bjGP')]['soy_bbg_data'][_0x651d('‮4d','ErG$')]('\x0a');}}else if(process[_0x651d('‮4e','$d#&')][_0x651d('‮4f','ErG$')]&&_0x24d699[_0x651d('‫50','r#3M')](process[_0x651d('‮51','g())')][_0x651d('‮52','BtV9')]['indexOf']('#'),-0x1)){app_soy_bbg_data=process[_0x651d('‮53','6s#X')]['soy_bbg_data'][_0x651d('‫54','6s#X')]('#');}else if(process['env'][_0x651d('‫55','D[wY')]&&process[_0x651d('‮56',')ini')][_0x651d('‮57','[Tg(')][_0x651d('‮58','*4P!')]('@')>-0x1){app_soy_bbg_data=process[_0x651d('‫59','BtV9')]['soy_bbg_data'][_0x651d('‫5a','[0SF')]('@');}else{if(_0x24d699['mGjos'](_0x24d699['zMZTf'],_0x24d699[_0x651d('‮5b','#Xm3')])){app_soy_bbg_data=process['env'][_0x651d('‫5c','#Hya')][_0x651d('‫5d','#Xm3')]();}else{app_soy_bbg_data=process['env'][_0x651d('‫5e','BH^]')][_0x651d('‫5f','SDe9')]();}};if(_0x24d699[_0x651d('‮60','Kkzl')](before,'无')||!before){console[_0x651d('‫61','Kkzl')]('\x0a当前信息：\x0a-TG_ID：'+TG_ID+_0x651d('‮62','2*Mu')+mac+_0x651d('‮63','[0SF'));}else{let _0x28c57c=CryptoJs[_0x651d('‮64','$d#&')][_0x651d('‫65','6s#X')][_0x651d('‮66','qIHZ')](before);let _0xce8648=CryptoJs[_0x651d('‮67','zM[H')][_0x651d('‫68','!TBm')][_0x651d('‫69','#Hya')](_0x28c57c);let _0x4b5e5d=CryptoJs[_0x651d('‮6a','D[wY')][_0x651d('‫6b','DWQ%')](_0xce8648,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x651d('‫6c','@xOT')][_0x651d('‫6d','SDe9')],'padding':CryptoJs[_0x651d('‫6e','a&%t')]['Pkcs7']});let _0x4491dd=_0x4b5e5d[_0x651d('‫6f',')gp5')](CryptoJs['enc']['Utf8']);console[_0x651d('‮70','CwnY')](_0x651d('‮71',')gp5')+TG_ID+_0x651d('‫72','ErG$')+mac+_0x651d('‮73','MP6!')+_0x4491dd[_0x651d('‮25','f!Zp')]());}user_num=app_soy_bbg_data[_0x651d('‫74','DWQ%')];console['log'](_0x651d('‫75','#Hya')+new Date(_0x24d699[_0x651d('‫76','SDe9')](_0x24d699['qyoiw'](new Date()[_0x651d('‫77','2*Mu')](),_0x24d699['XkAUn'](_0x24d699['SRIHZ'](new Date()['getTimezoneOffset'](),0x3c),0x3e8)),_0x24d699[_0x651d('‫78','[Tg(')](_0x24d699['SRIHZ'](_0x24d699[_0x651d('‮79','Kkzl')](0x8,0x3c),0x3c),0x3e8)))[_0x651d('‮7a','#Xm3')]()+'\x20===');await _0x24d699[_0x651d('‮7b','MDA3')](yyz_login);console['log'](_0x651d('‫7c','TwKW')+user_num+_0x651d('‮7d','zM[H'));subTitle='';for(i=0x0;_0x24d699[_0x651d('‫7e','o%QB')](i,user_num);i++){state=!![];bbg_token=app_soy_bbg_data[i];if(!bbg_UA){if(_0x24d699[_0x651d('‫7f','bjGP')](_0x24d699[_0x651d('‮80','sLDt')],_0x651d('‫81','o1Or'))){bbg_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)';}else{console[_0x651d('‮82','fnqE')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x651d('‮83','4jMG')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x651d('‮84','@xOT')];return![];}}$[_0x651d('‮85','DWQ%')]=_0x24d699['qyoiw'](i,0x1);console['log'](_0x651d('‫86','pkLs')+$[_0x651d('‫87','pUdV')]+_0x651d('‫88','$d#&'));if(yyz_d){await _0x24d699[_0x651d('‫89','SDe9')](implement);}else{console[_0x651d('‮8a','f!Zp')](_0x651d('‮8b','URHE'));}};}else{if(_0x24d699[_0x651d('‫8c','HR)T')](_0x24d699[_0x651d('‫8d','pkLs')],_0x24d699[_0x651d('‫8e','o1Or')])){return{'url':_0x651d('‮8f','l6GH')+url,'headers':{'token':bbg_token,'appId':user_H,'Host':'service.babydog.link','Connection':_0x651d('‮90','$d#&'),'Accept-Encoding':_0x24d699['OdoAU'],'User-Agent':_0x651d('‮91','r#3M')}};}else{console[_0x651d('‫92','[Tg(')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}}if(notify){if(_0x24d699[_0x651d('‫93','[0SF')](_0x24d699['gUHKw'],_0x24d699['qBhEQ'])){if(subTitle){if(_0x24d699[_0x651d('‫94','SDe9')](_0x651d('‮95',')gp5'),'wteOG')){Tips=author[_0x651d('‮96','cnpa')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{await notify[_0x651d('‫97','#Hya')]($[_0x651d('‮98','Tg0G')],subTitle);}}}else{_0x130813['writeFileSync'](_0x24d699[_0x651d('‮99','URHE')],Now_mac);}}})()[_0x651d('‫9a','f!Zp')](_0x5dc865=>$[_0x651d('‮9b','HR)T')](_0x5dc865))[_0x651d('‮9c','#Xm3')](()=>$[_0x651d('‫9d',')ini')]());async function implement(){var _0x3fc8b8={'oSmPX':function(_0x4a3eab,_0x5ac97c){return _0x4a3eab===_0x5ac97c;},'qdYAu':_0x651d('‮9e','sLDt'),'hEzbg':function(_0x374d9e,_0x4284df){return _0x374d9e(_0x4284df);},'pVFXw':function(_0x141ca5,_0x5f3048){return _0x141ca5+_0x5f3048;},'bsMPz':function(_0x395c44,_0x47128f){return _0x395c44*_0x47128f;}};await spread();for(let _0x6d2f13=0x0;_0x6d2f13<0x6&&state;_0x6d2f13++){if(_0x3fc8b8[_0x651d('‫9f','l6GH')](_0x651d('‮a0','#Xm3'),_0x3fc8b8[_0x651d('‫a1','pkLs')])){console['log'](e);}else{await _0x3fc8b8[_0x651d('‮a2','TwKW')](getgold,_0x6d2f13);await $['wait'](Math['floor'](_0x3fc8b8['pVFXw'](_0x3fc8b8[_0x651d('‫a3','cnpa')](Math[_0x651d('‮a4','@xOT')](),0xbb8-0x3e8+0x3e8),0x3e8)));}}}function getgold(_0x41e54f){var _0x78f8f0={'mvNHn':function(_0x5d6f0b,_0x476e39){return _0x5d6f0b!==_0x476e39;},'sPvRj':_0x651d('‫a5','BtV9'),'TEBSv':'dtPWR','QTkpv':'szDOx','vxFUR':function(_0xa16bae,_0x3517b4){return _0xa16bae+_0x3517b4;},'Gtksj':function(_0x41c9b3,_0x56a187){return _0x41c9b3==_0x56a187;},'JtgDj':function(_0x2343b7,_0x10824a){return _0x2343b7!==_0x10824a;},'TnUMM':'OpoNu','oBWeH':function(_0x1fc133,_0x5f29cb){return _0x1fc133+_0x5f29cb;},'sFKXj':function(_0x4c994a,_0xa365bc){return _0x4c994a+_0xa365bc;},'yKRvy':_0x651d('‮a6','6s#X'),'dkFgK':function(_0x8ff706){return _0x8ff706();},'RdTUP':'\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a','XaVOd':function(_0x22273b,_0x1038e2){return _0x22273b+_0x1038e2;},'ssZAs':function(_0x346901,_0x36ae75){return _0x346901(_0x36ae75);}};let _0x199e93=_0x78f8f0[_0x651d('‮a7','Io$R')](Get_request,'home/getGold?index='+_0x41e54f);return new Promise((_0x5a3d5f,_0x42738a)=>{var _0x2a8f03={'yCArK':_0x78f8f0[_0x651d('‫a8','$d#&')],'BtvMh':function(_0x5b5e5a,_0x17ca47){return _0x78f8f0['XaVOd'](_0x5b5e5a,_0x17ca47);}};$[_0x651d('‫a9','fnqE')](_0x199e93,async(_0x2db318,_0x11d727,_0x38c9ae)=>{if(_0x78f8f0[_0x651d('‫aa','URHE')](_0x78f8f0['sPvRj'],'oypZa')){try{if(_0x651d('‮ab','S9LK')!==_0x78f8f0[_0x651d('‫ac','f!Zp')]){if(_0x2db318){if(_0x78f8f0[_0x651d('‮ad','ieO5')](_0x78f8f0[_0x651d('‮ae','DWQ%')],_0x78f8f0[_0x651d('‫af','o%QB')])){console[_0x651d('‫b0','o1Or')](e,_0x11d727);}else{console[_0x651d('‫b0','o1Or')]('\x0a【'+Tips+_0x651d('‮b1','CwnY')+$['index']+_0x651d('‫b2','g@3Y')+(_0x41e54f+0x1)+_0x651d('‮b3','zM[H'));subTitle+='\x0a【'+Tips+_0x651d('‮b4','SDe9')+$['index']+_0x651d('‫b5','r#3M')+_0x78f8f0[_0x651d('‫b6','a&%t')](_0x41e54f,0x1)+_0x651d('‮b7','MDA3');state=![];}}else{let _0x5a674a=JSON[_0x651d('‮b8','#Hya')](_0x38c9ae);if(_0x78f8f0['Gtksj'](_0x5a674a[_0x651d('‮b9','$d#&')],0xc8)){if(_0x78f8f0[_0x651d('‫ba','g())')]('OpoNu',_0x78f8f0[_0x651d('‫bb','6s#X')])){let _0x251b02=CryptoJs[_0x651d('‫bc','sLDt')][_0x651d('‫bd','g())')]['parse'](before);let _0x3b67db=CryptoJs[_0x651d('‫be','WHmW')][_0x651d('‫bf','^1Fm')][_0x651d('‫c0','TwKW')](_0x251b02);let _0x36db21=CryptoJs[_0x651d('‮c1','ieO5')][_0x651d('‮c2','$d#&')](_0x3b67db,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x651d('‫c3','g@3Y')][_0x651d('‮c4','MDA3')],'padding':CryptoJs[_0x651d('‫c5','[0SF')][_0x651d('‮c6','Io$R')]});let _0x365b11=_0x36db21[_0x651d('‫c7','fnqE')](CryptoJs[_0x651d('‮c8','BH^]')][_0x651d('‮c9','^1Fm')]);console[_0x651d('‫ca','4jMG')](_0x651d('‮cb',')ini')+TG_ID+_0x651d('‮cc','r#3M')+mac+'\x20|\x20-上次MAC：'+_0x365b11[_0x651d('‫cd','HR)T')]());}else{console['log']('\x0a【'+Tips+_0x651d('‮ce','BtV9')+$[_0x651d('‮cf','S9LK')]+_0x651d('‫d0','cnpa')+_0x78f8f0['oBWeH'](_0x41e54f,0x1)+_0x651d('‫d1','WHmW')+_0x5a674a[_0x651d('‫d2',')gp5')][_0x651d('‮d3','BtV9')]);subTitle+='\x0a【'+Tips+_0x651d('‫d4','fnqE')+$[_0x651d('‫d5','ErG$')]+'\x20领取气泡'+_0x78f8f0['sFKXj'](_0x41e54f,0x1)+'】:\x20成功,当前金币\x20'+_0x5a674a[_0x651d('‮d6','HR)T')]['balanceUnit']+'}';}}else{if(_0x78f8f0['yKRvy']===_0x78f8f0[_0x651d('‫d7','@xOT')]){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x651d('‫d8','f!Zp')]+_0x651d('‮d9','MP6!')+(_0x41e54f+0x1)+_0x651d('‫da','6s#X')+_0x5a674a['message']);subTitle+='\x0a【'+Tips+_0x651d('‮db','BH^]')+$[_0x651d('‮dc','6s#X')]+_0x651d('‫dd','DWQ%')+_0x78f8f0[_0x651d('‫de','^1Fm')](_0x41e54f,0x1)+_0x651d('‫df','bjGP')+_0x5a674a[_0x651d('‫e0','URHE')];state=![];}else{throw new Error(_0x2a8f03['yCArK']);}}}}else{console[_0x651d('‫e1','#Xm3')]('\x0a当前信息：\x0a-TG_ID：'+TG_ID+_0x651d('‫e2','o1Or')+mac+_0x651d('‫e3','BH^]'));}}catch(_0x501e96){console['log'](_0x501e96,_0x11d727);}finally{_0x78f8f0[_0x651d('‮e4','sLDt')](_0x5a3d5f);}}else{console[_0x651d('‫e5','$d#&')]('\x0a【'+Tips+_0x651d('‮e6','pkLs')+$[_0x651d('‮e7','bjGP')]+'\x20领取气泡'+_0x2a8f03[_0x651d('‮e8','sLDt')](_0x41e54f,0x1)+_0x651d('‫e9','*4P!'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20领取气泡'+_0x2a8f03['BtvMh'](_0x41e54f,0x1)+_0x651d('‫ea','pkLs');state=![];}});});}function spread(){var _0x4a0259={'LeoTF':function(_0x4fef19,_0x2cb073){return _0x4fef19+_0x2cb073;},'ECwgB':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','ctSjw':_0x651d('‮eb','!TBm'),'ACaEI':_0x651d('‫ec','o1Or'),'tcmHl':_0x651d('‫ed',')gp5'),'vvESY':'RYklB','gcTBe':function(_0x2dd4a9,_0x4d214e){return _0x2dd4a9===_0x4d214e;},'tKNRM':'ylUBN','PywTE':function(_0x48ee3b){return _0x48ee3b();},'DCejX':'ZLBcg','OntaK':_0x651d('‫ee','[Tg('),'GtTgE':function(_0x3852cd,_0x3e6c40){return _0x3852cd(_0x3e6c40);},'kkLMk':'login/spreadToken'};let _0x35c00a=_0x4a0259[_0x651d('‫ef','BH^]')](Get_request,_0x4a0259[_0x651d('‮f0','URHE')]);return new Promise((_0x529654,_0x3b4f8a)=>{var _0x4a33bd={'rBfpj':_0x651d('‫f1','pUdV'),'BdytT':_0x4a0259[_0x651d('‫f2','o%QB')],'uFqLP':function(_0x442235,_0x8afb0b){return _0x442235===_0x8afb0b;},'WQMkt':function(_0x434054,_0xec22a7){return _0x434054!==_0xec22a7;},'SfjMT':_0x4a0259['ctSjw'],'PuIoW':_0x4a0259[_0x651d('‫f3','qIHZ')],'XgXot':_0x4a0259[_0x651d('‮f4','MP6!')],'PltkK':_0x4a0259[_0x651d('‫f5','g())')],'AisJY':function(_0xa98992,_0x410b2c){return _0x4a0259[_0x651d('‫f6','sLDt')](_0xa98992,_0x410b2c);},'VNqCt':_0x4a0259[_0x651d('‮f7','cnpa')],'jayyM':_0x651d('‫f8','pUdV'),'IUMIh':function(_0x5675dc){return _0x4a0259[_0x651d('‫f9','g@3Y')](_0x5675dc);}};if(_0x4a0259[_0x651d('‫fa','sLDt')]===_0x4a0259[_0x651d('‮fb','zM[H')]){console[_0x651d('‮fc','l6GH')]('\x0a【'+Tips+_0x651d('‮fd','o1Or')+$[_0x651d('‮fe','zM[H')]+_0x651d('‮ff','TwKW')+(num+0x1)+_0x651d('‫100','pUdV')+result[_0x651d('‮101','cnpa')]);subTitle+='\x0a【'+Tips+_0x651d('‮102','$d#&')+$[_0x651d('‫103','r#3M')]+_0x651d('‮104','o1Or')+_0x4a0259[_0x651d('‮105','Tg0G')](num,0x1)+_0x651d('‫106',')gp5')+result[_0x651d('‫107','bjGP')];state=![];}else{$[_0x651d('‮108','^1Fm')](_0x35c00a,async(_0x286cd2,_0x4cce2c,_0x48dcb6)=>{if(_0x4a33bd[_0x651d('‮109','MP6!')](_0x651d('‫10a','r#3M'),_0x651d('‮10b','pkLs'))){console[_0x651d('‮10c','ErG$')](e,_0x4cce2c);}else{try{if(_0x4a33bd['WQMkt'](_0x4a33bd[_0x651d('‮10d','bjGP')],_0x4a33bd[_0x651d('‮10e','ieO5')])){if(_0x286cd2){console[_0x651d('‮10f','BH^]')]('\x0a【'+Tips+_0x651d('‫110','o%QB')+$[_0x651d('‮111','Tg0G')]+_0x651d('‮112','l6GH'));subTitle+='\x0a【'+Tips+_0x651d('‮113','TwKW')+$['index']+_0x651d('‮114','pkLs');}else{if('qeSXM'===_0x4a33bd[_0x651d('‮115','sLDt')]){before=fs['readFileSync'](_0x4a33bd['rBfpj'])[_0x651d('‮25','f!Zp')]()['trim']();}else{let _0x199d16=JSON['parse'](_0x48dcb6);if(_0x199d16[_0x651d('‫116','g@3Y')]==0xc8){console[_0x651d('‮117','MP6!')]('\x0a【'+Tips+_0x651d('‮118','WHmW')+$[_0x651d('‮119','BH^]')]+_0x651d('‫11a','6s#X')+_0x199d16[_0x651d('‫11b','Tg0G')]+'金币');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x651d('‮11c','cnpa')+_0x199d16[_0x651d('‫11d','bjGP')]+'金币';}else{console[_0x651d('‮11e','EHgc')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x651d('‫11f','^1Fm')]+_0x651d('‮120','g@3Y')+_0x199d16[_0x651d('‫121','pUdV')]);subTitle+='\x0a【'+Tips+_0x651d('‫122','DWQ%')+$[_0x651d('‮123','MP6!')]+_0x651d('‮124','2*Mu')+_0x199d16['message'];}}}}else{bbg_UA=_0x4a33bd['BdytT'];}}catch(_0x42d5c8){if(_0x4a33bd[_0x651d('‮125','bjGP')]===_0x4a33bd[_0x651d('‫126','Kkzl')]){console[_0x651d('‫127','Io$R')](_0x42d5c8,_0x4cce2c);}else{app_soy_bbg_data=process[_0x651d('‮128','Kkzl')][_0x651d('‫129','g())')]['split']('@');}}finally{if(_0x4a33bd[_0x651d('‮12a','BtV9')](_0x4a33bd['VNqCt'],_0x4a33bd['jayyM'])){console[_0x651d('‮12b','DWQ%')](_0x651d('‫12c','a&%t'));}else{_0x4a33bd['IUMIh'](_0x529654);}}}});}});}function Get_request(_0x29f0c6){var _0xd28791={'iWhrR':_0x651d('‫12d','o1Or'),'uuNNf':_0x651d('‫12e','DWQ%')};return{'url':'http://service.babydog.link/'+_0x29f0c6,'headers':{'token':bbg_token,'appId':user_H,'Host':_0xd28791['iWhrR'],'Connection':'Keep-Alive','Accept-Encoding':_0xd28791[_0x651d('‫12f','@xOT')],'User-Agent':_0x651d('‮130','2*Mu')}};};function Post_request(_0x58c4bc,_0x13efeb){var _0x1a020e={'CNtth':_0x651d('‫12d','o1Or'),'DzLXk':_0x651d('‫131','*4P!'),'DJAaA':'okhttp/3.14.9'};return{'url':_0x651d('‮132','Tg0G')+_0x58c4bc,'headers':{'token':bbg_token,'user_H':user_H,'Host':_0x1a020e['CNtth'],'Connection':_0x651d('‫133','o%QB'),'Accept-Encoding':_0x1a020e[_0x651d('‫134','pUdV')],'User-Agent':_0x1a020e[_0x651d('‫135','#Hya')]},'body':_0x13efeb};};function formatDate(){var _0x103fe7={'UkkVH':function(_0x316e83,_0x2031b2){return _0x316e83+_0x2031b2;},'sfXTr':function(_0x13b0b6,_0x2a78b8){return _0x13b0b6<_0x2a78b8;}};let _0x57b81c=new Date();let _0x2699f1=_0x57b81c[_0x651d('‮136','Tg0G')]();let _0x1adf53=_0x103fe7[_0x651d('‮137','6s#X')](_0x57b81c['getMonth'](),0x1);let _0x563576=_0x57b81c[_0x651d('‫138','Io$R')]();_0x1adf53=_0x1adf53<0xa?_0x103fe7[_0x651d('‮139','ieO5')]('0',_0x1adf53):_0x1adf53;_0x563576=_0x103fe7['sfXTr'](_0x563576,0xa)?_0x103fe7['UkkVH']('0',_0x563576):_0x563576;return _0x2699f1+'/'+_0x1adf53+'/'+_0x563576;};async function yyz_login(){var _0x312096={'wwMGF':function(_0x362572,_0x4d69d2){return _0x362572===_0x4d69d2;},'GrSwG':'dgroh','gurSi':'OexXB','IFNTE':function(_0x41ff9a,_0x1d103c){return _0x41ff9a==_0x1d103c;},'cnhFo':'./mac','mDIzJ':function(_0x42f856,_0x21963e){return _0x42f856(_0x21963e);},'PhdqW':function(_0x3c5749){return _0x3c5749();},'kOvGe':_0x651d('‫13a','#Hya'),'qLUvU':function(_0x36afac,_0x24cf77){return _0x36afac/_0x24cf77;},'OBBnU':function(_0x31cadf,_0x4b433b){return _0x31cadf+_0x4b433b;},'QZxbX':'&sign=','DZOMa':_0x651d('‫13b','Tg0G')};var _0x13b803=Math[_0x651d('‮13c','[0SF')](_0x312096[_0x651d('‫13d',')gp5')](Date[_0x651d('‮13e','r#3M')](),0x3e8));var _0xb4ce67=CryptoJs[_0x651d('‮13f','zM[H')](''+TG_ID+mac+os[_0x651d('‮140','CwnY')]()+YZ)['toString']();var _0x2a4936=_0x651d('‮141','o%QB')+TG_ID+_0x651d('‮142','BtV9')+_0xb4ce67+'&t='+_0x13b803;var _0x23bba5=CryptoJs[_0x651d('‫143','SDe9')](_0x2a4936+'&'+appid)[_0x651d('‫144','WHmW')]();_0x2a4936=_0x312096[_0x651d('‫145','!TBm')](_0x2a4936,_0x312096[_0x651d('‫146','zM[H')])+_0x23bba5;let _0x3f5c92={'url':serverUrl+_0x651d('‫147','BtV9'),'headers':{'user-agent':_0x312096['DZOMa']},'body':_0x2a4936};return new Promise((_0xa05798,_0x2db4e4)=>{$[_0x651d('‫148','[Tg(')](_0x3f5c92,async(_0x109d2e,_0x4f2e5d,_0x2d28a3)=>{var _0x34c673={'TIXav':_0x651d('‮149','#Xm3')};if(_0x312096['wwMGF'](_0x651d('‮14a','TwKW'),_0x651d('‮14b','zM[H'))){try{if(_0x312096[_0x651d('‫14c','EHgc')](_0x312096[_0x651d('‮14d','zM[H')],_0x312096[_0x651d('‮14e','Tg0G')])){app_soy_bbg_data=process[_0x651d('‮14f','pUdV')][_0x651d('‮52','BtV9')]['split']('\x0a');}else{if(_0x109d2e){console['log']('\x0a['+TG_ID+_0x651d('‫150','@xOT')+_0x109d2e);subTitle+='\x0a['+TG_ID+_0x651d('‫151','Kkzl')+_0x109d2e;}else{let _0x189372=JSON['parse'](_0x2d28a3);if(_0x312096[_0x651d('‮152','BtV9')](_0x189372[_0x651d('‫153','pUdV')],0xc8)){try{fs['writeFileSync'](_0x312096[_0x651d('‫154','$d#&')],Now_mac);}catch(_0x50fed7){}let _0x3b5846=Format_time(_0x189372[_0x651d('‮155','Tg0G')]['info'][_0x651d('‮156','qIHZ')]);console[_0x651d('‮157','o%QB')]('\x0a['+TG_ID+_0x651d('‫158','fnqE')+_0x3b5846);await _0x312096[_0x651d('‮159','zM[H')](get_vip,_0x189372['msg'][_0x651d('‫15a','URHE')]);}else if(_0x312096[_0x651d('‮15b','6vFK')](_0x189372[_0x651d('‫15c','bjGP')],0x71)){await _0x312096['PhdqW'](yyz_user_reg);}else{if(_0x312096[_0x651d('‮15d','6s#X')](_0x651d('‫15e','[Tg('),_0x312096[_0x651d('‫15f','Tg0G')])){console[_0x651d('‮82','fnqE')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x189372[_0x651d('‫160','BH^]')]);subTitle+='\x0a['+TG_ID+_0x651d('‮161','S9LK')+_0x189372[_0x651d('‫162','l6GH')];yyz_d=![];}else{console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x109d2e);subTitle+='\x0a['+TG_ID+_0x651d('‫163',')gp5')+_0x109d2e;}}}}}catch(_0x3e1200){console['log'](_0x3e1200);}finally{_0x312096[_0x651d('‮164','Io$R')](_0xa05798);}}else{throw new Error(_0x34c673[_0x651d('‫165','EHgc')]);}});});}async function yyz_user_reg(){var _0xa57c36={'kuJpi':function(_0x2267d6,_0x1306c2){return _0x2267d6+_0x1306c2;},'KIOjb':function(_0x215ffa,_0x41a84c){return _0x215ffa+_0x41a84c;},'ZsEFq':function(_0x2dc3f4,_0x3c519c){return _0x2dc3f4<_0x3c519c;},'hRwgD':_0x651d('‫166','pkLs'),'SMHKR':'Keep-Alive','SRPgT':_0x651d('‫167',')ini'),'zbzvx':_0x651d('‮168','URHE'),'otWOm':_0x651d('‫169','^1Fm'),'kKQQl':function(_0x303ea9,_0x2320bd){return _0x303ea9===_0x2320bd;},'ofPdR':_0x651d('‮16a','$d#&'),'ascZa':function(_0x134a74){return _0x134a74();},'uqSYx':function(_0x305074,_0x406ca4){return _0x305074==_0x406ca4;},'nfaBS':'hDUwx','VyDKa':function(_0x180446,_0x3e5a0b){return _0x180446!==_0x3e5a0b;},'hFubr':_0x651d('‮16b','6s#X'),'BFWbd':function(_0x33d9f1,_0x111caa){return _0x33d9f1===_0x111caa;},'UkwYa':'eXsKs','ZdCBs':function(_0x22436f,_0x226c4b){return _0x22436f&&_0x226c4b;},'bWXTy':_0x651d('‫16c','*4P!'),'HWMnK':_0x651d('‫16d','zM[H'),'LCbla':function(_0x2f82f4,_0x128eb1){return _0x2f82f4/_0x128eb1;},'wQovD':function(_0x739875,_0x547573){return _0x739875+_0x547573;},'GLwXh':function(_0x3327b4,_0x195423){return _0x3327b4+_0x195423;},'XzchS':_0x651d('‫16e','D[wY')};if(_0xa57c36['ZdCBs'](!Tips,!YZ)){if(_0xa57c36[_0x651d('‮16f','^1Fm')]!==_0xa57c36[_0x651d('‫170','SDe9')]){console[_0x651d('‫171','URHE')](_0x651d('‮172','a&%t'));return![];}else{let _0x501510=new Date();let _0x61caa9=_0x501510[_0x651d('‫173','pUdV')]();let _0x1e6ee5=_0xa57c36['kuJpi'](_0x501510['getMonth'](),0x1);let _0x32845b=_0x501510['getDate']();_0x1e6ee5=_0x1e6ee5<0xa?_0xa57c36[_0x651d('‫174','BH^]')]('0',_0x1e6ee5):_0x1e6ee5;_0x32845b=_0xa57c36['ZsEFq'](_0x32845b,0xa)?'0'+_0x32845b:_0x32845b;return _0x61caa9+'/'+_0x1e6ee5+'/'+_0x32845b;}}console[_0x651d('‫175','qIHZ')](TG_ID,mac,os[_0x651d('‮176','ieO5')]());var _0x5314ec=Math[_0x651d('‮177','BH^]')](_0xa57c36[_0x651d('‮178','sLDt')](Date[_0x651d('‫179','bjGP')](),0x3e8));var _0x4354d6=CryptoJs[_0x651d('‫17a','URHE')](''+TG_ID+mac+os['hostname']()+YZ)[_0x651d('‫17b','cnpa')]();var _0x39cc08=_0x651d('‫17c','EHgc')+TG_ID+_0x651d('‫17d','!TBm')+_0x4354d6+_0x651d('‫17e','[Tg(')+_0x5314ec;var _0x533d9b=CryptoJs[_0x651d('‮17f','a&%t')](_0xa57c36[_0x651d('‫180','[Tg(')](_0x39cc08+'&',appid))['toString']();_0x39cc08=_0xa57c36[_0x651d('‮181','S9LK')](_0xa57c36[_0x651d('‮182','!TBm')](_0x39cc08,'&sign='),_0x533d9b);let _0x5898b7={'url':serverUrl+'user_reg','headers':{'user-agent':_0xa57c36['XzchS']},'body':_0x39cc08};return new Promise((_0x3bca19,_0x4b078b)=>{var _0x10a5a2={'dteyB':function(_0x565dff,_0x2e832e){return _0x565dff==_0x2e832e;}};if(_0xa57c36[_0x651d('‫183','bjGP')](_0xa57c36['UkwYa'],_0x651d('‫184',')gp5'))){console[_0x651d('‫185','TwKW')]('\x0a【'+$['name']+_0x651d('‫186','EHgc'));return!![];}else{$[_0x651d('‮187','pUdV')](_0x5898b7,async(_0x54c208,_0x3445e0,_0x4d63d9)=>{var _0x27a604={'eNsbS':_0xa57c36['hRwgD'],'gxRXl':_0xa57c36[_0x651d('‫188','2*Mu')],'ibWub':_0x651d('‫189','BtV9'),'TNlWO':_0xa57c36['SRPgT'],'SpGtE':_0xa57c36[_0x651d('‮18a','qIHZ')]};try{if(_0x54c208){console[_0x651d('‮36','SDe9')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x54c208);subTitle+='\x0a['+TG_ID+_0x651d('‫18b','Kkzl')+_0x54c208;}else{if(_0xa57c36[_0x651d('‮18c','@xOT')]!==_0xa57c36['otWOm']){return{'url':_0x651d('‫18d','!TBm')+url,'headers':{'token':bbg_token,'user_H':user_H,'Host':_0x27a604[_0x651d('‮18e',')gp5')],'Connection':_0x27a604[_0x651d('‮18f','4jMG')],'Accept-Encoding':_0x27a604[_0x651d('‫190','ErG$')],'User-Agent':_0x27a604[_0x651d('‫191','SDe9')]},'body':body};}else{let _0x209d43=JSON[_0x651d('‫192','zM[H')](_0x4d63d9);if(_0x209d43[_0x651d('‫193','2*Mu')]==0xc8){if(_0xa57c36[_0x651d('‫194','ErG$')](_0x651d('‫195','[0SF'),_0xa57c36['ofPdR'])){await _0xa57c36[_0x651d('‮196','!TBm')](yyz_login);}else{throw new Error(_0x27a604[_0x651d('‮197','o%QB')]);}}else if(_0xa57c36['uqSYx'](_0x209d43[_0x651d('‫198','CwnY')],0x75)){console['log']('\x0a['+TG_ID+_0x651d('‮199','o%QB')+_0x209d43[_0x651d('‫19a','o1Or')]+_0x651d('‮19b','pkLs'));yyz_d=![];}else{if(_0xa57c36[_0x651d('‫19c','qIHZ')](_0x651d('‫19d','2*Mu'),_0xa57c36[_0x651d('‫19e','$d#&')])){console['log']('\x0a['+TG_ID+_0x651d('‫19f','@xOT')+_0x209d43[_0x651d('‮1a0','D[wY')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x209d43[_0x651d('‮1a1','bjGP')];yyz_d=![];}else{let _0x17aca0=JSON[_0x651d('‮1a2','ErG$')](_0x4d63d9);if(_0x10a5a2[_0x651d('‮1a3','pUdV')](_0x17aca0[_0x651d('‮1a4','#Hya')],0xc8)){console[_0x651d('‫1a5','g())')]('\x0a【'+Tips+_0x651d('‮1a6','r#3M')+$[_0x651d('‫11f','^1Fm')]+_0x651d('‮1a7','bjGP')+_0x17aca0[_0x651d('‫1a8','[0SF')]+'金币');subTitle+='\x0a【'+Tips+_0x651d('‫1a9','l6GH')+$[_0x651d('‮dc','6s#X')]+_0x651d('‫1aa','D[wY')+_0x17aca0[_0x651d('‮1ab','g())')]+'金币';}else{console[_0x651d('‮157','o%QB')]('\x0a【'+Tips+_0x651d('‮1ac','Kkzl')+$[_0x651d('‫1ad','o1Or')]+_0x651d('‫1ae','a&%t')+_0x17aca0[_0x651d('‫1af','6vFK')]);subTitle+='\x0a【'+Tips+_0x651d('‫1b0','g())')+$[_0x651d('‮fe','zM[H')]+_0x651d('‫1b1','o1Or')+_0x17aca0[_0x651d('‫1b2','*4P!')];}}}}}}catch(_0x19207b){if(_0xa57c36[_0x651d('‫1b3','DWQ%')](_0xa57c36[_0x651d('‮1b4',')ini')],_0xa57c36[_0x651d('‫1b5','zM[H')])){console[_0x651d('‫ca','4jMG')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x651d('‫1b6','TwKW')]+'\x20领取离线金币】:\x20'+result[_0x651d('‫1b7','MDA3')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x651d('‮1b8','fnqE')]+_0x651d('‫1b9','S9LK')+result[_0x651d('‫1ba','Tg0G')];}else{console['log'](_0x19207b);}}finally{_0xa57c36[_0x651d('‫1bb','qIHZ')](_0x3bca19);}});}});}async function get_vip(_0x4fdebf){var _0x4663f9={'FgBQi':function(_0x8b9885,_0x56d52a){return _0x8b9885+_0x56d52a;},'rxPda':function(_0x56745e,_0x119873){return _0x56745e+_0x119873;},'guqmC':function(_0x589171,_0x549153){return _0x589171<_0x549153;},'eAlZu':function(_0x509c30,_0x134648){return _0x509c30<_0x134648;},'uljCR':function(_0x4046d4,_0xb13cf2){return _0x4046d4+_0xb13cf2;},'PdByW':function(_0x45f52f,_0x1b7e6a){return _0x45f52f===_0x1b7e6a;},'bnSmX':_0x651d('‫1bc','2*Mu'),'bqfAr':'PIzam','nQEXu':'qZIZl','ZGSRn':'hJLKV','OvBmn':_0x651d('‫1bd','BH^]'),'hOCLc':function(_0x263264,_0x3b7cc9){return _0x263264+_0x3b7cc9;},'zMTfi':function(_0x35d9b3,_0x53097b){return _0x35d9b3+_0x53097b;},'sZsTr':function(_0x1df5a5,_0x5051a1){return _0x1df5a5+_0x5051a1;},'JCXQx':_0x651d('‮1be','^1Fm')};var _0x4e01c3=Math[_0x651d('‮1bf',')gp5')](Date[_0x651d('‫1c0','pkLs')]()/0x3e8);var _0x4c889a=_0x651d('‮1c1','^1Fm')+user_num+'&token='+_0x4fdebf+_0x651d('‮1c2','pkLs')+_0x4e01c3;var _0x2cebb1=CryptoJs[_0x651d('‫1c3','pUdV')](_0x4663f9[_0x651d('‫1c4','#Xm3')](_0x4663f9[_0x651d('‮1c5','EHgc')](_0x4c889a,'&'),appid))[_0x651d('‫1c6','bjGP')]();_0x4c889a=_0x4663f9['zMTfi'](_0x4663f9['sZsTr'](_0x4c889a,_0x4663f9['JCXQx']),_0x2cebb1);let _0x15d4a0={'url':serverUrl+'get_vip','headers':{'user-agent':_0x651d('‮1c7',')ini')},'body':_0x4c889a};return new Promise((_0x3d4230,_0x357ed9)=>{var _0x4cd136={'mLVys':function(_0x10e23f,_0x1db439){return _0x10e23f==_0x1db439;},'URvUO':function(_0x1733c5,_0x5af881){return _0x1733c5*_0x5af881;},'nVBTc':function(_0x2bae96,_0x3c9bb4){return _0x4663f9['FgBQi'](_0x2bae96,_0x3c9bb4);},'uOnaU':function(_0x11cff1,_0x3680ee){return _0x4663f9[_0x651d('‮1c8','^1Fm')](_0x11cff1,_0x3680ee);},'AAlnA':function(_0x4dac7c,_0x271307){return _0x4663f9[_0x651d('‮1c9','$d#&')](_0x4dac7c,_0x271307);},'alqjC':function(_0x2399e3,_0x16c952){return _0x4663f9[_0x651d('‮1ca','sLDt')](_0x2399e3,_0x16c952);},'ylpSe':function(_0x2c0929,_0x42bc86){return _0x4663f9[_0x651d('‫1cb','pkLs')](_0x2c0929,_0x42bc86);},'gCnzD':function(_0x3f9438,_0x301e81){return _0x4663f9['uljCR'](_0x3f9438,_0x301e81);},'LejpE':function(_0x46e541,_0x12a3da){return _0x4663f9['uljCR'](_0x46e541,_0x12a3da);},'VSpNG':function(_0x71f5da,_0x184ffa){return _0x4663f9[_0x651d('‫1cc','CwnY')](_0x71f5da,_0x184ffa);},'wbqVO':function(_0x1389f0,_0x4b3efa){return _0x4663f9[_0x651d('‮1cd','[Tg(')](_0x1389f0,_0x4b3efa);},'GKVOe':_0x4663f9[_0x651d('‮1ce','g@3Y')],'MuKFD':function(_0x1e7803,_0x1266c7){return _0x1e7803!==_0x1266c7;},'jGqIB':_0x4663f9['bqfAr'],'Dvhgj':_0x4663f9[_0x651d('‮1cf','SDe9')],'MrUVh':function(_0x57980a,_0x1a9ab5){return _0x57980a(_0x1a9ab5);},'Hklzy':_0x4663f9[_0x651d('‮1d0','DWQ%')],'nmdYj':_0x4663f9[_0x651d('‫1d1','HR)T')],'xJdCm':_0x651d('‮1d2','o%QB'),'PHmQV':function(_0x1b30ab){return _0x1b30ab();}};$[_0x651d('‫1d3','qIHZ')](_0x15d4a0,async(_0x162279,_0x179b65,_0x105814)=>{if(_0x4cd136[_0x651d('‮1d4','a&%t')](_0x4cd136[_0x651d('‮1d5','*4P!')],_0x4cd136[_0x651d('‮1d6','#Hya')])){try{if(_0x162279){console['log']('\x0a['+TG_ID+_0x651d('‫1d7','o1Or')+_0x162279);subTitle+='\x0a['+TG_ID+_0x651d('‮1d8','TwKW')+_0x162279;}else{if(_0x4cd136[_0x651d('‮1d9','r#3M')](_0x4cd136[_0x651d('‮1da','Kkzl')],_0x4cd136['Dvhgj'])){let _0x515582=JSON[_0x651d('‫1db','WHmW')](_0x105814);if(_0x515582[_0x651d('‮1dc','WHmW')]==0xc8){user_H=_0x515582[_0x651d('‮1dd','qIHZ')];yyz_d=!![];}else{console[_0x651d('‮1de','WHmW')](_0x105814);if(yyz_Kami){await _0x4cd136[_0x651d('‫1df','Io$R')](card,_0x4fdebf);}else{console[_0x651d('‮1e0','D[wY')]('\x0a['+TG_ID+_0x651d('‫1e1','DWQ%'));subTitle+='\x0a['+TG_ID+_0x651d('‮1e2','TwKW');yyz_d=![];}}}else{var _0x3ce1de={'riWKv':function(_0x1b0004,_0x473c14){return _0x4cd136[_0x651d('‫1e3','URHE')](_0x1b0004,_0x473c14);}};var _0x150adb='';var _0x66a54d=fs[_0x651d('‮1e4','@xOT')](_0x651d('‫1e5','a&%t'));_0x66a54d[_0x651d('‮1e6','6vFK')](function(_0x51fe1d){var _0x43c464=path[_0x651d('‮1e7','DWQ%')](_0x651d('‮1e8','*4P!'),_0x51fe1d,_0x651d('‫1e9',')ini'));if(_0x3ce1de[_0x651d('‮1ea','MDA3')](_0x51fe1d['substr'](0x0,0x3),_0x651d('‫1eb','[Tg('))&&fs[_0x651d('‫1ec','^1Fm')](_0x43c464)){_0x150adb=fs[_0x651d('‮1ed','fnqE')](_0x43c464)[_0x651d('‫1ee','6vFK')]()[_0x651d('‫1ef','D[wY')]();};});return _0x150adb;}}}catch(_0xb8424d){if(_0x4cd136['wbqVO'](_0x4cd136['Hklzy'],'hJLKV')){console[_0x651d('‫1f0','pkLs')](_0xb8424d);}else{var _0x957766=new Date(_0x4cd136[_0x651d('‫1f1','g())')](timestamp,0x3e8));var _0x2f7fe3=_0x4cd136[_0x651d('‮1f2','@xOT')](_0x957766[_0x651d('‫1f3','o1Or')](),'-');var _0x5e947e=_0x4cd136['uOnaU'](_0x4cd136['AAlnA'](_0x4cd136[_0x651d('‫1f4','DWQ%')](_0x957766[_0x651d('‮1f5','4jMG')](),0x1),0xa)?_0x4cd136[_0x651d('‫1f6','Kkzl')]('0',_0x957766['getMonth']()+0x1):_0x4cd136[_0x651d('‫1f7','o1Or')](_0x957766['getMonth'](),0x1),'-');var _0x13a540=_0x957766[_0x651d('‫1f8','CwnY')]()+'\x20';var _0x39d85f=_0x4cd136['alqjC'](_0x957766[_0x651d('‮1f9','#Xm3')](),':');var _0x28b7fe=_0x4cd136['alqjC'](_0x4cd136[_0x651d('‫1fa','HR)T')](_0x957766['getMinutes'](),0xa)?_0x4cd136[_0x651d('‫1fb','ieO5')]('0',_0x957766['getMinutes']()):_0x957766[_0x651d('‮1fc','SDe9')](),':');var _0x36a8f6=_0x957766['getSeconds']();let _0x430ae0=_0x4cd136[_0x651d('‮1fd','cnpa')](_0x4cd136['LejpE'](_0x2f7fe3,_0x5e947e)+_0x13a540,_0x39d85f)+_0x28b7fe+_0x36a8f6;return _0x4cd136[_0x651d('‮1fe','@xOT')](_0x4cd136[_0x651d('‮1ff','CwnY')](_0x4cd136[_0x651d('‮200','SDe9')](_0x2f7fe3+_0x5e947e,_0x13a540),_0x39d85f)+_0x28b7fe,_0x36a8f6);}}finally{if(_0x4cd136[_0x651d('‮201','cnpa')]!==_0x4cd136[_0x651d('‫202','4jMG')]){_0x4cd136[_0x651d('‮203','qIHZ')](_0x3d4230);}else{console[_0x651d('‫127','Io$R')]('\x0a['+TG_ID+_0x651d('‫204','g@3Y')+result['msg']);subTitle+='\x0a['+TG_ID+_0x651d('‮205','bjGP')+result[_0x651d('‮206','MP6!')];yyz_d=![];}}}else{throw new Error(_0x651d('‫207','!TBm'));}});});}async function card(_0x8f1db6){var _0x1c26e3={'gvTWv':function(_0x58e999,_0xdb0d4){return _0x58e999(_0xdb0d4);},'yatzG':_0x651d('‮1','l6GH'),'vuutH':function(_0x58443e,_0xb7f05a){return _0x58443e==_0xb7f05a;},'AhIAb':function(_0x5bd7ee,_0x2d8b34){return _0x5bd7ee+_0x2d8b34;},'iMGmB':'anxMk','mFCgO':function(_0x4cda51,_0xfd357){return _0x4cda51==_0xfd357;},'xgOSk':function(_0x223cdc,_0x4f7e74){return _0x223cdc!==_0x4f7e74;},'xQdKC':_0x651d('‫208',')gp5'),'nbKfz':function(_0x596306,_0xe64754){return _0x596306!==_0xe64754;},'QGCkI':_0x651d('‮209','a&%t'),'KthfE':_0x651d('‮20a','URHE'),'zTcus':function(_0x2288f3,_0x53b2ab){return _0x2288f3===_0x53b2ab;},'gDlnv':_0x651d('‮20b','MDA3'),'CvTTO':function(_0x1f1ba2){return _0x1f1ba2();},'fZMLT':function(_0x5e3d75,_0x3e62ca){return _0x5e3d75/_0x3e62ca;},'tRsEC':_0x651d('‫20c','ieO5')};console[_0x651d('‫20d','HR)T')](yyz_Kami);var _0x2bc9cc=Math['floor'](_0x1c26e3[_0x651d('‮20e','a&%t')](Date[_0x651d('‮20f','qIHZ')](),0x3e8));var _0x330328=_0x651d('‮210','4jMG')+_0x8f1db6+_0x651d('‫211','*4P!')+yyz_Kami+_0x651d('‫212','qIHZ')+_0x2bc9cc;var _0x174a75=CryptoJs[_0x651d('‫213','S9LK')](_0x330328+'&'+appid)[_0x651d('‫214','BtV9')]();_0x330328=_0x330328+_0x651d('‫215','l6GH')+_0x174a75;let _0x408529={'url':serverUrl+_0x651d('‮216','g@3Y'),'headers':{'user-agent':_0x1c26e3[_0x651d('‫217','!TBm')]},'body':_0x330328};return new Promise((_0x4a7a30,_0x24e779)=>{$[_0x651d('‫218','g@3Y')](_0x408529,async(_0x3ddbae,_0x3a1c19,_0x5c40d6)=>{var _0x4a521e={'KLkGY':function(_0x238a4f,_0x3441b1){return _0x1c26e3[_0x651d('‮219','zM[H')](_0x238a4f,_0x3441b1);},'HGvVJ':_0x1c26e3[_0x651d('‫21a','#Xm3')],'HQylX':function(_0x5dd8b1,_0xec3474){return _0x1c26e3[_0x651d('‫21b','zM[H')](_0x5dd8b1,_0xec3474);},'LGhHb':function(_0x4661f9,_0x4e6bd5){return _0x4661f9+_0x4e6bd5;},'izprq':function(_0x5e330f,_0x227da4){return _0x1c26e3['AhIAb'](_0x5e330f,_0x227da4);}};if(_0x1c26e3[_0x651d('‫21c','MDA3')]!==_0x1c26e3[_0x651d('‮21d','DWQ%')]){CryptoJs=$[_0x651d('‮21e','[Tg(')]()?_0x4a521e[_0x651d('‮21f','BtV9')](require,_0x4a521e[_0x651d('‫220','[Tg(')]):'';}else{try{if(_0x3ddbae){console[_0x651d('‫221','@xOT')]('\x0a['+TG_ID+_0x651d('‮222','BtV9')+_0x3ddbae);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x3ddbae;}else{let _0x14623b=JSON[_0x651d('‫223','HR)T')](_0x5c40d6);if(_0x1c26e3['mFCgO'](_0x14623b[_0x651d('‮224','sLDt')],0xc8)){if(_0x1c26e3['xgOSk'](_0x651d('‫225','4jMG'),_0x1c26e3[_0x651d('‫226','o1Or')])){console['log']('\x0a['+TG_ID+_0x651d('‮227','EHgc')+_0x14623b[_0x651d('‫228','f!Zp')]+_0x651d('‮229','ieO5'));return![];}else{let _0x1b4e07=JSON[_0x651d('‫30','2*Mu')](_0x5c40d6);if(_0x4a521e['HQylX'](_0x1b4e07['code'],0xc8)){console['log']('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0x651d('‮22a','[0SF')]+_0x651d('‫22b','S9LK')+_0x4a521e['LGhHb'](num,0x1)+'】:\x20成功,当前金币\x20'+_0x1b4e07[_0x651d('‮1ab','g())')]['balanceUnit']);subTitle+='\x0a【'+Tips+_0x651d('‫22c','D[wY')+$['index']+_0x651d('‫22b','S9LK')+(num+0x1)+_0x651d('‮22d','HR)T')+_0x1b4e07['data']['balanceUnit']+'}';}else{console[_0x651d('‫22e','g@3Y')]('\x0a【'+Tips+_0x651d('‮22f','MP6!')+$['index']+_0x651d('‮230','bjGP')+_0x4a521e[_0x651d('‮231','CwnY')](num,0x1)+_0x651d('‮232','pkLs')+_0x1b4e07[_0x651d('‫233','CwnY')]);subTitle+='\x0a【'+Tips+_0x651d('‫234','*4P!')+$[_0x651d('‫235','cnpa')]+_0x651d('‫236','#Hya')+(num+0x1)+'】:\x20'+_0x1b4e07[_0x651d('‫237','sLDt')];state=![];}}}else{console[_0x651d('‮157','o%QB')]('\x0a['+TG_ID+_0x651d('‫238','#Xm3')+_0x14623b[_0x651d('‮239','pUdV')]);subTitle+='\x0a['+TG_ID+_0x651d('‫23a','ieO5')+_0x14623b[_0x651d('‫23b','#Hya')];return![];}}}catch(_0x3365ea){if(_0x1c26e3[_0x651d('‫23c','#Xm3')](_0x1c26e3[_0x651d('‫23d','URHE')],_0x1c26e3['KthfE'])){console[_0x651d('‫221','@xOT')](_0x3365ea);}else{user_H=result[_0x651d('‫23e','cnpa')];yyz_d=!![];}}finally{if(_0x1c26e3[_0x651d('‫23f','ieO5')](_0x1c26e3[_0x651d('‮240',')ini')],_0x651d('‮241','HR)T'))){_0x1c26e3[_0x651d('‮242','#Hya')](_0x4a7a30);}else{console[_0x651d('‫243','cnpa')]('\x0a['+TG_ID+_0x651d('‮244','D[wY'));subTitle+='\x0a['+TG_ID+_0x651d('‮245','g@3Y');yyz_d=![];}}}});});}function Format_time(_0x35545f){var _0x595c14={'UHMUK':function(_0x10f60c,_0x4ce5c6){return _0x10f60c*_0x4ce5c6;},'EcpYg':function(_0x271cc4,_0x3b36e9){return _0x271cc4+_0x3b36e9;},'SXmDS':function(_0x2032dc,_0x387aff){return _0x2032dc<_0x387aff;},'mHsVD':function(_0x58f360,_0xd48ef7){return _0x58f360+_0xd48ef7;},'tjUHb':function(_0x4452a6,_0xc20a1a){return _0x4452a6+_0xc20a1a;},'estDv':function(_0x2ba2d3,_0x3273dc){return _0x2ba2d3+_0x3273dc;},'pArXB':function(_0x13b47b,_0x5de731){return _0x13b47b+_0x5de731;},'jJhxO':function(_0x38e635,_0x22fb7e){return _0x38e635+_0x22fb7e;}};var _0x320f98=new Date(_0x595c14['UHMUK'](_0x35545f,0x3e8));var _0x19c925=_0x595c14[_0x651d('‫246','$d#&')](_0x320f98[_0x651d('‮247','bjGP')](),'-');var _0x46de87=(_0x595c14[_0x651d('‮248','URHE')](_0x320f98[_0x651d('‫249','6vFK')]()+0x1,0xa)?_0x595c14[_0x651d('‮24a','zM[H')]('0',_0x595c14['EcpYg'](_0x320f98[_0x651d('‫24b','sLDt')](),0x1)):_0x595c14[_0x651d('‮24c','EHgc')](_0x320f98[_0x651d('‫24d','*4P!')](),0x1))+'-';var _0x227c6e=_0x320f98[_0x651d('‫24e','$d#&')]()+'\x20';var _0x3244e0=_0x320f98['getHours']()+':';var _0x4e52b7=(_0x595c14['SXmDS'](_0x320f98['getMinutes'](),0xa)?_0x595c14[_0x651d('‮24f','[0SF')]('0',_0x320f98['getMinutes']()):_0x320f98[_0x651d('‫250',')gp5')]())+':';var _0x16a071=_0x320f98['getSeconds']();let _0x5f567a=_0x595c14[_0x651d('‮251',')ini')](_0x595c14[_0x651d('‮252','g())')](_0x595c14[_0x651d('‫253','!TBm')](_0x595c14[_0x651d('‮254','zM[H')](_0x19c925,_0x46de87),_0x227c6e),_0x3244e0),_0x4e52b7)+_0x16a071;return _0x595c14[_0x651d('‫255','6vFK')](_0x595c14['pArXB'](_0x595c14[_0x651d('‫256','6vFK')](_0x595c14[_0x651d('‮257','URHE')](_0x19c925,_0x46de87)+_0x227c6e,_0x3244e0),_0x4e52b7),_0x16a071);};_0xodP='jsjiami.com.v6';


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