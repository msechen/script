/*

项目名称:佳佳衣

项目注册地址:http://weixin.qq.com/q/02_SBZwwUyd6H1sNgyxyc2

群友投稿的,就一个签到得积分,抽奖概率低,积分在公众 微信商城 积分商城兑换

固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
如已有就不用动


脚本需要的变量:
变量名:soy_jjy_data
变量值:xxx
注释:抓包找到带有 http://www.esalewx.com/2018/sign/2927 的链接,请求头上的cookie里面的connect.sid=值

多个号用 @ 或 # 换行 隔开

一天一次
cron 31 17 * * * app_jjy.js


*/


const $ = new Env('【佳佳衣22/04/29_0】');
const notify = $.isNode() ? require('./sendNotify') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodd='jsjiami.com.v6',_0xodd_=['‮_0xodd'],_0x19b4=[_0xodd,'Z8KKGxjCuQ==','w50SJsOXwqrCpsOGwoU=','eHNMEwA=','VArCnjJz','LsKjBVJ6','w4YKM8O5wq0=','w6xnw5Udwr0=','w5rDkcOPbz4=','V8OrwpU2Sw==','GMOKOW/DncK9woNRw6A7w6XDng==','wp3Dt8OBFcKE','I8KrSw==','w7RHVeebmOW+jeWnvui2jcOYwq/ov4/lmJAV','d3DCkeebruW8g+WllOi0nToe6L2K5Ziow6Y=','RMObP8K8w5A=','asK7CDXCqQ==','fwzCmg==','eCxXw64=','AVPDhg==','XXAY55qp5b+g5oii5YiQfMKdGHIO5Yu85p285pet6ZeJAg==','w4tYQw==','wrJZHXHCvg==','E8KQBnh3','B8OfwrbCoQ==','ccKWLx3ChA==','LsK4G19b','w7BNZsKXMw==','wp5occK6Qg==','eiJR55i55byI5aaK6La7QsO7eg==','wpAtwro=','bsKpf+ebquW/mOWmg+i1vQDCi1o=','HknDuMKxw6HDkQ==','dwtTw4bDhw==','w6V3wrE=','el04JiVeMGhoEcOlEw==','MW/DgMKxw4M=','w7ZKwpEzFw==','J3DCsAvDmA==','OsKMWxV9wrI=','SMKqYnvCoBTDssKlw7pIMcKbwqXDgsOI','w5sqwrLCnsO6Wwg=','wpsDw6M=','On7Cgw==','w4TDoMOpaSM=','wrN7ZsKPVA==','YcO6CsKtw64=','wqcDwo9CAg==','Y8OjLMKMw5Y=','V8K2cxtL','TxjDnsOCFw==','a8OFwrIsYA==','w7TCtEnDh2I=','w69Dwr4pCw==','woxZOH3ChQ==','LeOAiOS8reiBh+aOjeemgeOCj++9oumpl+ium+iEs+afpDlNNuWkp+i1rH/orLrlirfkv6Pmlb/oh43mnpTkupvku5Tmh7flh6/lrYrCow==','w5ZEV8Kp','WMO2bumro+isnei0seWNh8O5wqvovKvlmaM1','wqBkw73pqbnorZ7otJPlj4Juw4TovpjlmZYC','YSNDw7LDpA==','OMK/w4bDp8Oh','w4VEQMK4','bTlf','ZDhCOzM=','C0vCkgI=','acKjKQ==','QcOFEumrvuivkuiGleafhcKoeQ==','w6fDlMO/','w5jCsMKgesKI','aMK/KQ==','YypeIBM=','dcOoHMKMw48=','K8KVw5fkv7nnlbPlj4XlrZ7DgsK+5rOc5p6F5Y2M5a+x5Y2g5L2055es','d3DCkeS/queVvuWMhOWvvjoe5rC/5p+/5Y6n5ayC5Y2b5L+855SI','fsKHfDlj','XcOmJ8OPcw==','ecKQXuebs+W9rOWml+i0mxodw7k=','G8OcwpA=','WC3Chz9x','a8OywqU=','R8OYB8O4TcOJE0pO','Ol/DlcKrw5I=','X1REDhs=','YMOrHcKLw7U=','NsOlHcO9wpE=','buOCoOS+juiDgeaMp+ekuOODge+8v+moj+isoOiEq+afv8KjwrvDjeWlvui2p2Horqzlip7kvJ/ml4zohYrmn5bkuq7ku6Xmh4Xlhqjlrq8=','w5bCkBbCtMOW','R04TwpDClA==','SsOFCQ==','w7rClSU=','w6LDiMOrbR4Wwqo+','I8K8LxzCr2DDn8Kxw6/DgsKMJ8O+wpzCoGU6w7c+w73CjcKRMUjCtMOTwoPChcOnw6bDksO7e3MUw4AU','w5/CkTJZwrMcw77CiQ==','AkQ5wprCvh8=','ZDFUw7PDnsOOeMKz','XsOBAEPCvg==','w6XCkT7CjsOS','OQlDADM=','w47DvcOuQDY=','w53DqcO9QCo=','eRXCmj9V','Z8OiMcOVw4Y=','f8KCf1/Cvw==','w6x2wqA=','w63DhlnmsLPlhKjlpbvotpHCkVvovqjlm7DCrA==','R10SFSA=','fcOEMMOow6A=','WivDg8OmMw==','bMOeMULCkQ==','wovCpj/CjA==','WQV2woDDlw==','wpEuwrJtJw==','Z8O8DcO8w5s=','ckhN','bsK9dio=','aw/Dog==','w6pPw78awpcmw4c=','G8OAwpPDow==','w6nDvMK2','w4jClxFFwqQHw6TCi8Kow5w=','cUM2w4U=','FsK7A1lc','KWHCpQ==','wo3CpzjCm8O9wohI','HMK5w7M=','w4DCnR0=','wr1jIsOEw5jDm0hXwqMY','wolTRMKLdcOANxk=','H8OKFUDDh8KywohNw6Upw7Q=','w64dWcOXw7vCi8KLw5R1BMOOWk8=','wpTCpDrCisK5w4Y=','JcOKHMOOwqA=','wrwqwpA=','GsKeZOaxjOWFp+WliOi2tiLDlQ==','77+S6K+vBsOrw6LDoHgd6K2l5aWrw6zCiMK75beQ6KOv5rKt5YeK','VyZ6w7DDiw==','BcK1FU8=','w7/ChBB/wqo=','w5PDisKvw4ht','VMONN8OKTw==','B8OKJw==','w58xF+axueWEt+Wlq+i3pMKgwrg=','wrd5HMODw5nDjA==','wrMvwpTCl8OV','wrdbHlDCvQ==','w6BNw77msaflh5Hlpobot7TDlTU=','w694UA==','w7sRBOawteWHr+Wkjui2oBvChg==','ReaKuuS4oeWKreS/t+i2rnHCj8O/wqTDk8OhwrUoYsKgbQXor53ohIrooIjlrKXoooB7','w7MZworDgTo=','S3cW','NsKfYOS9j+eWn+WOtuWsvDTCpA==','wqtFEQ==','w6PDgnQSw5Y=','QsK8PjrCjw==','UUnDn8K5w6vCiQ==','K8K1C0NVw67CiVliUCwWw7UywrZNfsO8OcOww55WBcK/LcKuHhPCgQvCp8OJVcO/w5XDlMKcwrIow5UMIjHCtcOLw5HDgjsHHD3CvMOtwprDrG9EIDbCrcOfDcKIEH0Uw6w0OcONLsOdPzwAVcO8C8KpZMKfK8KcbwXCt8OAfsK7wot7wpHCjcOcw5vCujnDhcKTDMOBwooswoTDpxNbwoHDlcK+QCVxw6fCtcOhXRLDqMKRwqx5T8KKw4fCu8Oew7LDpMO8w751SsOaw5/DkQtqU8OFwrpfwqtaw64tDMKMNSoCw6Qaw6cROsK1cMKPeSsww6zDhcOYdsOpEcOMwqPDn0DCvSZAwqhxwqpSXkPDkjzCl8Oyw43Dr8Kww7/Dl8K4SsOcNsKwDSjCuh/CsMOYIQ9nwrvCmsKiwr9ua8OecsKDwqTChVJwwrLCqx3Dt8KZ','w48RGsOMwqo=','w6NkdMKqLA==','FcO4PsO8w6TCjw==','wqR/Cg==','w6tvEQ==','w6FMdsODw7E=','wr1NE8O+w7c=','w57DkcKmw5p8AsKKwrM=','w4kFwo3DrR8=','w77DlcOLezI=','PsOnMcOdwpI=','w6nDhsOqfQ==','w6HDpEw0w68=','fksNNxs=','EcKjPWRt','w5zCkx4=','wrN0bsKdfg==','EXTCpzDDkA==','w5XDl3ETw58=','wrJlNQ==','w7fChMOV5L+R55Sm5YyK5ayiw65j6L265ZqHwoc=','wq5rIMOfw5g=','C1/CocO6w5w=','w7oAVMOG','ZV0m','KgDCluS+oeeWreWPleWtlsOOwrs=','F2DCkQ==','77+x6Yex5pan6LSu5LiH5q6I6IWD5p2S5pSK5Y6Y5q675biE5L6o55et','w53Cjx4=','WMO2bumro+isneiEjeaenMO5wqs=','KgDClumpkuithOiGruaevMOOwrs=','5oyy56adwq5tw4HotbrljJsC','wrdkNsOJw4U=','wozmiLrlpbbjgZXCoEjovajlmqPDnw==','NcOhw7E8NcKyVQrDgA==','XThhMRA=','wpvCjMOCwoA+RcOUw7py','bcK4Oh/Cry3Cn8Osw7zCiMOKO8Kvw5zCuzBywrERw7vDmcONOVTCucOvwp3DosOuw6PDksO1a28=','YsKpOg==','wrQmwrBgGw==','ZRDCtBZa','wpjDjMOoM8K+','w40Gwq3Dmgg=','w7NpwqsMNg==','wpEAwqQ=','NHjDtQ==','P8KlSA==','A8K0Eg==','QlJIWQ==','w4NFRw==','VFYiwo7CtQ==','VUddBGYx','5rOC5YeG5L2Q5oO6772MbxUtE8OKwrHCmcKNw7Dvvpk=','w4vCnFHDo++8lA==','bjbCre+9n+aXtg==','w4Ffw50gYmUfw5/Dgw==','woIuwrbDlwI=','wo7DiMOk','w77ChkjDsUQ=','wrnCuhjCscO1','w74KRMOlw6vCocKOw6F1NsOF','wqHDhcO2EsKW','w4vDolQJw7UGw4gV','w6VJUcKPGQ==','QcOdN3jCmmnCocO2','wrlvJsOhw5LDh0ha','w63DgsOsXREDwqI=','A8OVwqbCjMKYd8KiVg==','wpQLwo/Cv8Ou','cENaLDlrwrjCpnw/','wpo7wqnCuMO2W0AgwoE/','wp9HBcO1w4Q=','wq/DisO6JcKJ','wpM+wq5HAA==','QcKvHB3Cng==','M1nDpMKsw4c=','ZMOvwrswccKhSRzChw==','IOaItOS6vOWKpeS/i+i0sxhjTMOnwobCssKrwpnDqVPCrsOc6K6H6Iej6KG65a2D6KCiFw==','w5QEwpDDoDnDkg==','wog8wphnNnwawpfCmMK1w7JmPsORIGMkw4LDrVfCj8Ovw7d0RSNywqVeXUvCnw==','DMOEwqbCtMONLcO/XMO6wpsfwqDCn8KKw7U6w6xjLw7CgcOaMcKKw6owwrpFZsOkDB0WFMOZw6bDqcOww7A2w6lJWHQ=','DUrClQ==','wrfDk8OleA==','wrEtw7cGczfDgMOiwrQhLcK8FsKlOxrCvMONwo1rw5wlw77DvT1mDX7DkcK7XXE=','OFVXEn9mwqHCs2o/UMOQw6tB','w5XCiBE=','XHIHwrfCvA==','PFDCkCR1','YS5cwqDDkEHDvA==','w4xsw6rDm8KvGwV6w5U=','w7rDhsOscQ==','w4ohwpDDng8=','wpMcwrt8MQ==','wr3DrMOcHcK9','K1HCvcOFw4M=','wpzCigrCpMOH','RkbChcKiwrfDiMKgwojCrw==','dhtkMDQ=','EcOEdknDhnvDpcOiwqAkEcKwZwvDnS4y','w6/Di00Cw50=','bCVf','w7rjgb3CmWEr6IWR5pyD5pW25LiE5Ya16Lap5aO85pmK44KG772qCuOBpOafmeS5s+W6oOWMlOW7nueYkOiFmOacrOaXpeS7lOWMi+WFu+S4nua2o+WMp+ebueS7tOS9nuiEieadi++/kuS7r+eUg+S4j+a1l+iuoeWRgeWtr+S5keeiveepie++iOelrOauveeVquS5lOWWnOS6qOaLqOmckOawmOebvueYse+8vO++r+WSjOWJlOWRmuaen+iGiOi2juOBlmbjgIzku6LogJvkvLforK/lhrblkp/msqrmgKfjgLLlhq7no6Tmgavjg6/lraXml6rmg7HlkZDmn4zmlI7mg4zvvYXorrDmoqbmjIfmgqPlhaLoh4joop/li5fml7TjgZcE44Cd5pyF6IWZ5pyu5pSF5LiX77yX56SR5q+B5Lqk5L2j5YeM5L2f5Y6y44Ci6K275Z6U44Kv576P5L2u5Lqn5Y2m5Lus5LyZ5b2O5b+m55uT6L2I6L+T44G85Y2X5bmCS+WSp+WIt+WQquacneiFhui2mOOBp8O944CJ5p+t5LqU5ayC5LuL5L686Ia15p286ZSR6aCH5qei5Lu36LWM6Le1772e5Y6w5omL5L6M5LqM6ZuX5LmC55Ws5LiO5L+46Ia85p2A6ZeC6KyP5a+b6Iad55m75LuE5L6g5o6L5aeq5oqM5o6/5a+S44Ogw7PjgYnnmbjmjrbmiKzplpTmjpzkv47nl7XohJLmnYLnmq7ku6/kvZ3nlb/mip7vvabljafmiaPkvIDkuYPpm4jku4fkuafmj6Pmi7TlhbXkuqPmn5DkupfooofkuIXov4LljZXlmLjlr7vDs+WcvOWPheaxs+W9qeaIquebv+WHheayiOinrueZl+aAkuWEu+S4oei+tOiivuS+peaQn+++v+acmuS7iOWvl+S4r+eWmeavquW+mui2vueZvuS5l+S9n+mbguemk+axnOa/jeaKl+WFoeS7peWTl+afuOalo+S5hui3iOi2leODosOq44KO5aWt5p2/5Lq25L6k5Y6y5L+l5ouK5Lir5Luw6K2x5Liy6K2t6Iem5p2D5YyI6IKX5rar5amY5L2Y54q65YaK5pyH5Yma776S5Yuh5bi+5Y2j5pSZ6YCi55+N5bqE5o+M5L2M6Lqs5Lmg6Ky45pmO44Kp5omS5p+z5p2z6KyZ5pmv77665oiy5Lq45bGU5Z+H5pe55Ymo6KyB6K6B5pSa5LiL5ZOi5Yue6ZqS55uA5Yaf6Iez5p6S44Kiw5fjgY3ku7Xkvpvkurrku77kvbDmlrXlvIXmnp/nn5PmrJ7poZrnm5rnmpPku4rmirbnmZrmjonmiobplY7mj6fkv6vnl47or7vkuoXlupjnm5fku6nkv5Loha7mnJTnmLPkvaLnlZzogobpg7HluIjkuILnuqXpmKDor77mr7jloJrmma7jgbTmnbvkuLLkvp7nlIPpmp/mlrPmmbbml7vmi7LooY7lhb3mrL7lhpPot7PloKXmmp3nmKzmn4vliZfjg7TkuoTmlYPkvpbnlbblurHlp7vliabkuJTkuqfkvoznmozlhZfohLzmnJDmibPkupPluZrml5rku6LvvJ3liL7op4fkuqXmgLXlt4vmj7Dljabmr5flhqTotpnloJ/mmYzjgqY=','eDF/w67DpcOZ','YCbClQ9C','woUJwqFCGA==','wo/Dl8OsGsKe','VMOTwoQpQA==','DMKMZ8O7AA==','VlIxwpnCtEvCjMKoRsKYwp0=','w4fCuiLCmsKrwptQw5LDsDY1w6XCtWrClw==','w48SB8OmwrnCrMOA','TXcYLA==','wpR+BE3Clw==','wonCrT/Cm8OhwotP','BcOgwrzDgSo=','V0Iywo7CpFA=','OsKcVMO8IQ==','IsOcLcOXwp8Kw4BhwpvDjw==','YDLCmjVf','UsO2LWHCtA==','w5sYFMOHwp7CpsOEwofDnGLCoFY=','wqplAcOYw4/DgFJV','w7wBRg==','PMKrVcOCAMKSKMKzw6nCvMOXw7Q=','w5ZNWcOdw7M=','w5jDpMOvYQM=','ZhR/w5DDkw==','CHbCl8ORw6BMKsK7wobCqhvDuQ==','EsK1Il5Lw6vChhE=','fUAoFA==','wpHDl8OvKcKY','NMOUKMONwp8=','w65kUA==','L8Kaw4LDkcOo','wodzJQ==','w6fDiMO8fA==','woV0NQ==','w77DiMONaQASwrUYTsOxwrI=','wqNYFQ==','PsORJgg=','RMKJHQ==','wpUDwol8Kztb','w5rCvnTDhQ==','w7PCvjo=','wqAkwpM=','w7ZkZMOlw4kzwq/DvQ==','woXDkQxMwqI=','w4PDjcK7w4FqDg==','wqMqwo7DixNNGcOHfsOhwoXDhA==','eUdDBA==','44KT77yR5pyd5aO65YSi55qi5bmV5Y2C6YWXwqsRHxYoDxcNAcO8OsO/fg==','wrcmwobDug8=','esOFOcOBw7g=','w5TjgJrkvI7ogqnmja3nppPjgK3vvKjpqZforq3oh5nmn63CuGoF5aW06LWjw5jorqTlirHkv4/mlYrohZHmnrvku6/ku7Lmhrflh6flrYE=','w4TCoXzDiXo=','QMOjM8O4w7k=','b24XwqnChw==','w5TCoEHDkm0=','wpzDosOMGMK2w5nClTvDs8OmFHA=','REE3Pgc=','w77DlcOxdA==','b8KPXhtn','CWPCmsOcw5I=','McOuIcOewqw=','OknDs8K3w4M=','dsKQWxw=','VsOnNw==','bEooCjtHGk5iEw==','w4LCmRjCv8OiI8OYw44oBUDDrw==','woQCwrl6ICJBwpY=','AsOdwp7Dqw==','ZFM1Gic=','YBrCjSl3wqXDng==','w7gVI8OKwpo=','YeOCteS8nOiAteaNp+enreODq++8lOmoiOium+iGi+aekybDocKj5aax6LWeC+isnOWKoOS/i+aXhOiHr+acqOS6iuS7qOaFheWEjuWso8O6','5o2a56adwrU0Xei1keWMsHs=','wpDmiYHlpK/jg4rCnmrovaDlmbVb','QnYH','w5VEXcKCCVXDvH7DghzDpFA=','VDxzHSgWSMOSFXTCi8K8','T8OWJ1DCjUjCsw==','SMKmaU3CugrCtsKQw7RQY8KU','VGgdKyk=','ZyPDqMOQDw==','FFXDksK7','e0lJ','WMO2buS8kOeXtOWNtuWttsO5wqs=','CcODwrU=','w6bDiMO/','T0XDneS8uueUvuWOp+WtvTB1','SmsW','OcKKw7Lkvrvnl5/ljaPlrJYfwqM=','XsOgOA==','ckhY','ZElXPjpvwrTCjX0tC8Of','YznDpcOYIA==','wovDvsO/OMKD','wod/JcOVw7c=','PMO8woPCp8KE','wrVZD0vCuhnCtsOww6TCki/DtA==','QDZ+BDcQXcOUFHTCjQ==','DMKOTsOrDA==','w6dIZ8Olw6M=','bwFiwqfDog==','w6pPw6o=','G0vCjzjDv8KLw6cSw7AsI8OI','SSJDLyQ=','wonDj8OrAcKY','wrTDgMOnOcKf','fMKdYHPCnQ==','w4TCvmnDv2Rnw6TDoFLCnMOWw6g=','w7F7W8O4w48=','w5sYFMOHwrzCpsOawrHDtnXCrQ==','VzjCmip/','wpYCwphLMyhH','w4bDqEkq','UsK8VmXCgw==','w5bCssKxRsKg','wo5JdcKMc8Ob','CcOAwr3CnsKF','ecKHWwFnw7zCusOrN8Kz','FsOVwrPCoMKxa8K8QMOQwphfwrA=','wrJZJWDCohrCocOI','XsKnZg==','w6oAScO8w7TCp8Kbw6d0NsODVQ==','QsOhJMKHw6o=','wqpZEQ==','wqznjpvlnIzkvLzmgIzvvKXCjwzCi1DDhHZawrcT772N','w75CZ+++iw==','wpgwwr4=','w65OXA==','N8OFNsOXwo4=','w6V3wqQ=','S1MyHHkA','w7NtwrUMLDbCmMK2wqs=','c0NNEyl1wrk=','XMO+LMKL','w741wp0=','eVMl','dzhpMXU=','wrvDs8OLRA==','Szxt','5rOZ5YSd5L6p5oKB776EwrlRaMKMJ8Kow5pVwp3vv7c=','WH4A77+n5pSw','bsK+Ch7CrQ==','RsOwNcOETQ==','w6NOw7s=','RsOIDMOceA==','XsKncw==','wrU7wqU=','QcOwOsKdw7s=','w45kw48=','RyXDlcOw','aQjDsg==','w6kOVA==','UCFbwqHCgg==','wqDDhsOwJcOaaA==','5rCV5YeS5Ly85oKa776FPxh5w4kYw499V2HvvKM=','WHoRwr7vv4rml4LCgsKyb++/rA==','w5UkU8Okw4c=','wpzCiivCr8Oq','w4nCsMKubcKz','5rCG5YSL5L2M5oCT77+qwrrDlHPCjcOLPUwfP++/rQ==','f8OuJEzCmQ==','fht2w7LDrA==','w5nDjsKZw4d6','aMKQYQZhw6bCh8O1','Qj1p','w6gDwrjCtw==','5rGY5YWw5L6Y5oK0776+QMKZwoZWKGnDk8O3w7Pvvog=','bQ9ww4Lvvps=','w63DgnM=','AMOVwrHCtsKOcsKk','wr5+VA==','VFY0','woAuwpTDp10=','N8OqwqQ=','ZcO6AA==','CnLCkg==','a8Kic2HDpw==','DsOLIw==','w6jDn8KGw4s4Xw==','VGwDKzPDnMO3HsKi','H33ClQ==','w7LCnQrCvsKSfg==','NMOQNsONwoUew7p+wow=','VsO9PA==','w77CigcV','dCxS','w4/DkMKW','bMOPBg==','eVMzCio=','NXvDt8KOw5U=','G1XDkQ==','wqDCg8OIwpMu6IWx5p+I5oqz6KCPwo50wofljrvkuqvml4fplILvv6Y=','C8K+WMO3Gw==','EcOKwoPDkjLDicO9','woxIGcOvw4Q=','blc1LSZZLE1jHsO0PVouwqDDq8OX','w4dLwo8SCA==','GMKpw7jDlcOH','w5zCicKgdMKz','AsOAwrvDqTjDhcO0wp3DjQnDvkRZw6g=','S0I3wqnCqg==','w5EYwrk=','5o2256SRCcOwTui0meWNsgE=','bMKiKgrCpA==','V+ethOWKhuODj8K/wpTlpqHot5HCt+WPhuiBmuS7heaUo+W3p+esneWLuA==','5o2856a9DWnCt+i1juWNi10=','w4IRw5pyYTcbwo3Dgw==','wrVGGn3CpA==','BsOFwrjCt8KP','NsKVw5TDh8O1','w7UAVw==','w7flvZ7lpJbjg6XnrrMV','TVk0wpjCqA==','MeS5qOi0l+WNtuS5uuWIneOAjA==','wqpzIcOew4g=','DmrChcOHw5M=','FcK/H053w63CnB8xBw==','X8OwJcKL','wpFTcA==','QyRtGDc=','QwZVwpTDsg==','wr1rJsOPw5U=','wps3wrPClMOzWUw=','K8KrQsO4','GsOewoXDjjw=','w73DlMK2w4da','wobDs8OZDMOKwp/DlinDl8OoVHYlGsKbaMOBUkvDhcOsw5TCi8OKwrNuNg7CpTTDth0rwpXCjg9T','eRrCmDU7wqfDl2MjJA==','w5pGe8OZw48uwrHDiMO9w7oXFRwD','Q8OQF8O4FcKGWkVbwrXCr8OpIg==','DVLCm8Kdw4vCmMOqwpzCoFjCmj/DqCxPwq3ClsOuEMOGwo97w4lYw6LConDCsA/Do8Kfw43ChcKSVw==','w5vCixU=','woojwp1fHg==','O20b','wqgIwq/Ck8Or','TMOeCsO4A8KJEVdKwq7DoMO4NF4pwpHCiMKMUsKkwpo7','wpgZwp5+aGQAwobChcKPwqRpN8O2HGUDwo3CjlDCqsKwwrtwMFMaw65+Wk3Cg1I9MiFQ','cMKQVQ==','wpQwwrnCkMOn','5o+Z56SIbFRi6LSS5Y6+Fw==','H8OBwpPDoyM=','asOawosxaA==','w5PCsGTDgQ==','T8KmQ2bCognCocKo','bMKiKgrCpFjDlg==','Y1RbBA==','w4pEQw==','5oyA56W/w5rCuUfotJLljpTCuA==','MeesvOWIgeOCkMK7wpzmiI3liYs=','5o2L56ehw4Uuw5TotLfljYrDlw==','fkhKBCg=','wpfnrq/liKDjgrE0LeaKjeWIoA==','w7JkbsOAw4I=','LMO9wrHDsBA=','Y3cDNj4=','ScKscXbClgnCo8Kqw4NIecKW','wprDqMO+CMKCw5nClzk=','M8OWLcOJ','E+evreWJr+OCgMK3wpLlpanotJ/Ch+WOleiBp+S4keaWpOW2luetruWKmQ==','aCZ5wrnDvA==','w4owwonDtx8=','dyvCmSdc','XC1Lw6jDrcOQfMO7w5bDmHlXw7R3wo7CiyJIw5kkwpTDicKtYwRUTxnDpxPCnxsmHMOmby4hw7nCpsKwZlfDh8OJFMOQwp1NNGXChMOwwqArGizCqlfCr2o0SRQQCyfCqRvDii/DosKlwrvDicKfOcOPek4gw44zw6fCr8O6MxPCusO0wopZMMOFFUzClsOAw6PDiFVVw5bCsxF9w6oRwp0nSmQ1JMKRdH3CswxBw68zwoDDp3wRPsO7w7rCkRzChWFwPDbCkQ/DscOnwpLDiBVEWcOpX8O5wobDgMK4woM9HcKTN8KxwqnDhcO4w5ELwrHDnFzDrSs4YMOww6DDgkDCnUpLN3PCrcKOwoc8B8OwL8OdXsKBSTPCi8KHwpzDpMK+HjUtLl7Cm8OowqkVSBw3w6rDpMOowrfCvS/DsV5UBDrDuGdTbyPDk3PCj8OmwrQNw7/CqXs9wqZJDcKEwpnCuS8sMwBISsOVworDi8OXwo3Ds8OzC8OwfMOgwrJtw7/Clm0wdnrCgXPDlF/DkMKnFMKkw5nChjLCscKSLGpdwqc=','PsKLw4DDjsOkw7zCm8KXZxrDjMOaWMOTw5TDqsOqTUstfMOrwovDjmgxO0nClisdwogjG8KGw7FFwoVbw6pcw6hFS8KjZ8KlaQ==','N8KPw4TDksK3wrDDlcKUeQLCjMKQU8Kfw4/DuMOqGAMhYcOr','w6VxXsOhwpd6wqXDv8O+w6cDBAo=','wqHDsMOKGcKg','XcKBAifCqGPDgMKRw67CjsOIcMK+w5w=','wo5gHcOfw5E=','L8Kzw4TDtcOl','w6bCjSPCk8Oc','BsK1w6nDpcO3','SynDhcO8OQsFY1Q=','TFUowqzCkw==','wrs3wrDDmwY=','woTCpjw=','5o2f56SbwrFFw4PotbDljYTCrw==','MeaLv+Wlp+OCkMK7wpzov4nlmIrDgw==','IcOmPMODwoY=','wpvCgS7Cg8Ow','b8K3Rxhn','K8OLIw==','w7HCvQDmlLTphZXpq6Torb1Hw58=','w6rDqzDml5Dph4HpqoHorZzChRY=','w4bCjQY=','w6pKfsKHLQ==','w43Dm8KBw6h7B8KIwo0mw48r','QH0FDzLDlcOqEA==','wqFTAlDCsQfCqg==','bmYRAyc=','w7l+wr0jGg==','w5onQsO0w48=','wqbDjcOPOcKH','woHCvQ3CncO3','w7rCo8KBbMKK','w6bCkRtEwq0Zw7HDgcOlwobDuCMowovCrnbDkcOxTcO3cMKuwrMHcUITYTYGFMOXwrs7LMO6AHHDicOww5LDiMOkJMOfwr/Dtjg1eVTCqcOWwqvDkMKVw4hpwprDszjCrQFFw6QSNXBHQsKlwqYkbz3Cm03Cp8KCXMOWfQrCplXCil9QXcKfw6k2w6oFwqwhX2LCvwzDtjPClhDDrcOAw77Dqn7DvsOPw5wVw53CmmsywplGTcOaw74+wpTDvsKCwrrDl3vCm8Kew4UiC8OXOMOSw7HCkSBRw5cJCcKIHcK/e8O1QQXCtRcTWEdlw7DCuhRQalXCh8OywpY9CMKeWMOqIlBjw7vCsBPCkx5vGywow4ZJw68dY8OUFcK9TsOsw6Btw7ltSMKzw5J/bhJQNMKEW0HCq8OEw4bCvXBDwrHCsRzCiMKoZ1Ak','w5HCvX/Dj3w=','MMKtPXJ4','w5bCn8Od','HEvCpRPDp8KIw7Aq','Akcxwo7Co1XCkcKJW8OLw48pwoXDp2hfw7RVwrfDscKOw4DCtsOoUhA=','XGfDiw==','w6jDocONbhU=','fxOejsbjWiNanfmnWUVtxJi.coBfm.v6=='];if(function(_0x530c49,_0x12cab1,_0x2dacf8){function _0x1bcd37(_0x3fbbe2,_0x28a933,_0x25a10b,_0x1649d3,_0x1afa75,_0x37751c){_0x28a933=_0x28a933>>0x8,_0x1afa75='po';var _0x4b7b01='shift',_0x245e84='push',_0x37751c='‮';if(_0x28a933<_0x3fbbe2){while(--_0x3fbbe2){_0x1649d3=_0x530c49[_0x4b7b01]();if(_0x28a933===_0x3fbbe2&&_0x37751c==='‮'&&_0x37751c['length']===0x1){_0x28a933=_0x1649d3,_0x25a10b=_0x530c49[_0x1afa75+'p']();}else if(_0x28a933&&_0x25a10b['replace'](/[fxOebWNnfnWUVtxJBf=]/g,'')===_0x28a933){_0x530c49[_0x245e84](_0x1649d3);}}_0x530c49[_0x245e84](_0x530c49[_0x4b7b01]());}return 0xe2e2b;};return _0x1bcd37(++_0x12cab1,_0x2dacf8)>>_0x12cab1^_0x2dacf8;}(_0x19b4,0xe8,0xe800),_0x19b4){_0xodd_=_0x19b4['length']^0xe8;};function _0x1da8(_0x432792,_0x186bdb){_0x432792=~~'0x'['concat'](_0x432792['slice'](0x1));var _0x2163bf=_0x19b4[_0x432792];if(_0x1da8['pkVWFa']===undefined){(function(){var _0x2ef7c6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3b81a2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2ef7c6['atob']||(_0x2ef7c6['atob']=function(_0xc79460){var _0x194f8b=String(_0xc79460)['replace'](/=+$/,'');for(var _0x4fa612=0x0,_0x191e6a,_0x12bb33,_0x173bbb=0x0,_0x459249='';_0x12bb33=_0x194f8b['charAt'](_0x173bbb++);~_0x12bb33&&(_0x191e6a=_0x4fa612%0x4?_0x191e6a*0x40+_0x12bb33:_0x12bb33,_0x4fa612++%0x4)?_0x459249+=String['fromCharCode'](0xff&_0x191e6a>>(-0x2*_0x4fa612&0x6)):0x0){_0x12bb33=_0x3b81a2['indexOf'](_0x12bb33);}return _0x459249;});}());function _0x4ee0cf(_0x190946,_0x186bdb){var _0x3371af=[],_0x4b40e6=0x0,_0x5b0cbb,_0x2467e5='',_0x4d3902='';_0x190946=atob(_0x190946);for(var _0x54c74e=0x0,_0x3b806b=_0x190946['length'];_0x54c74e<_0x3b806b;_0x54c74e++){_0x4d3902+='%'+('00'+_0x190946['charCodeAt'](_0x54c74e)['toString'](0x10))['slice'](-0x2);}_0x190946=decodeURIComponent(_0x4d3902);for(var _0x2c8482=0x0;_0x2c8482<0x100;_0x2c8482++){_0x3371af[_0x2c8482]=_0x2c8482;}for(_0x2c8482=0x0;_0x2c8482<0x100;_0x2c8482++){_0x4b40e6=(_0x4b40e6+_0x3371af[_0x2c8482]+_0x186bdb['charCodeAt'](_0x2c8482%_0x186bdb['length']))%0x100;_0x5b0cbb=_0x3371af[_0x2c8482];_0x3371af[_0x2c8482]=_0x3371af[_0x4b40e6];_0x3371af[_0x4b40e6]=_0x5b0cbb;}_0x2c8482=0x0;_0x4b40e6=0x0;for(var _0x4879bb=0x0;_0x4879bb<_0x190946['length'];_0x4879bb++){_0x2c8482=(_0x2c8482+0x1)%0x100;_0x4b40e6=(_0x4b40e6+_0x3371af[_0x2c8482])%0x100;_0x5b0cbb=_0x3371af[_0x2c8482];_0x3371af[_0x2c8482]=_0x3371af[_0x4b40e6];_0x3371af[_0x4b40e6]=_0x5b0cbb;_0x2467e5+=String['fromCharCode'](_0x190946['charCodeAt'](_0x4879bb)^_0x3371af[(_0x3371af[_0x2c8482]+_0x3371af[_0x4b40e6])%0x100]);}return _0x2467e5;}_0x1da8['aasDvQ']=_0x4ee0cf;_0x1da8['vGAIUW']={};_0x1da8['pkVWFa']=!![];}var _0x47a693=_0x1da8['vGAIUW'][_0x432792];if(_0x47a693===undefined){if(_0x1da8['SNIjYZ']===undefined){_0x1da8['SNIjYZ']=!![];}_0x2163bf=_0x1da8['aasDvQ'](_0x2163bf,_0x186bdb);_0x1da8['vGAIUW'][_0x432792]=_0x2163bf;}else{_0x2163bf=_0x47a693;}return _0x2163bf;};try{CryptoJs=$['isNode']()?require(_0x1da8('‫0','ZgkN')):'';}catch(_0x26eef1){throw new Error(_0x1da8('‫1','SFkz'));}try{os=$[_0x1da8('‫2','mfoD')]()?require('os'):'';}catch(_0x2f432b){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}try{axios=$['isNode']()?require('axios'):'';}catch(_0x5f5d3e){throw new Error('\x0a找不到依赖\x20axios\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,jjy_UA,app_soy_jjy_data,jjy_token,subTitle,user_index,yyz_d=![];let appid=_0x1da8('‫3','$BNn'),serverUrl=_0x1da8('‫4',']0e9'),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';let mac_e=CryptoJs['enc']['Utf8']['parse']('aa5c5c913815e376');let mac_i=CryptoJs[_0x1da8('‫5','PC(H')][_0x1da8('‫6','^Q!T')]['parse'](_0x1da8('‫7','UXjg'));!(async()=>{var _0x391e1d={'iuFwS':_0x1da8('‫8','pE[^'),'udKLJ':function(_0x385a6e,_0x31c908){return _0x385a6e==_0x31c908;},'mpoZr':_0x1da8('‫9','WcoR'),'SNFiE':function(_0x49f065,_0x28c280){return _0x49f065===_0x28c280;},'CHKfj':_0x1da8('‫a','U7]a'),'MsvGH':_0x1da8('‮b','nXic'),'XsTmO':_0x1da8('‮c','lMeH'),'pTGsc':function(_0x210216,_0x18fb9f){return _0x210216==_0x18fb9f;},'MiYEY':function(_0x46151d,_0x5ce7e3){return _0x46151d==_0x5ce7e3;},'CJbvf':function(_0x3b9563,_0x322db3){return _0x3b9563+_0x322db3;},'eCPtX':function(_0x1e26c8,_0x9fae37){return _0x1e26c8<_0x9fae37;},'oKZuW':function(_0x44c708,_0x5908f4){return _0x44c708+_0x5908f4;},'EGgoi':'/sys/class/net/','RkFnJ':function(_0x3160b2,_0x25bda8){return _0x3160b2(_0x25bda8);},'BAAPP':function(_0x389004){return _0x389004();},'ktGOo':_0x1da8('‫d','t!@m'),'kaVLu':function(_0x3eb118,_0x48c66e){return _0x3eb118(_0x48c66e);},'rYhJT':_0x1da8('‫e','G!lF'),'TFnLH':function(_0x33127a){return _0x33127a();},'RCwxs':_0x1da8('‮f','mfoD'),'HAyOU':function(_0x1d8da4,_0x428986){return _0x1d8da4===_0x428986;},'KYGTW':_0x1da8('‫10','$BNn'),'vJezG':function(_0x134913,_0x204e53){return _0x134913===_0x204e53;},'MsEiF':'qwKJS','Tizoa':_0x1da8('‫11','8fvZ'),'QhViB':'LrlzB','IsTMv':function(_0x1a6f1e,_0x298226){return _0x1a6f1e>_0x298226;},'eyRDs':function(_0x3ab37b,_0x3f87fa){return _0x3ab37b!==_0x3f87fa;},'XLQcs':_0x1da8('‮12','Oqwy'),'nqImf':function(_0x41ba2c,_0x44814f){return _0x41ba2c>_0x44814f;},'khhAt':function(_0x446666,_0xa0c59a){return _0x446666!==_0xa0c59a;},'Vgdys':_0x1da8('‫13','MY($'),'krDqq':function(_0x2399a9,_0x254c7c){return _0x2399a9===_0x254c7c;},'bbrTA':_0x1da8('‮14','PLCC'),'LKcGY':function(_0x12a0af,_0x2d8581){return _0x12a0af!==_0x2d8581;},'tCpFn':_0x1da8('‫15','86l2'),'oYGsm':_0x1da8('‫16','uz1Y'),'Dztjq':function(_0x54b21e,_0x303797){return _0x54b21e+_0x303797;},'cFTOv':function(_0x5db41a,_0x36e5d6){return _0x5db41a+_0x36e5d6;},'duAdp':function(_0x6978,_0x5778e4){return _0x6978*_0x5778e4;},'RBKCy':function(_0x8ba188,_0x1e2b17){return _0x8ba188*_0x1e2b17;},'GRHwJ':function(_0x33f472,_0x588bf6){return _0x33f472*_0x588bf6;},'bujsx':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','tysru':'atbTr','dwgZu':_0x1da8('‫17','xE3f')};console[_0x1da8('‮18','lMeH')](_0x1da8('‫19','$BNn'));if($[_0x1da8('‮1a','0)Y5')]()){var _0x4fcd1f=_0x391e1d['RkFnJ'](require,'fs'),_0x48e620=_0x391e1d['kaVLu'](require,_0x391e1d[_0x1da8('‫1b','nXic')]);function _0x431da4(){var _0x4f7d2e={'RHrYG':_0x391e1d['iuFwS'],'sOKGq':function(_0x293d78,_0x6859d2){return _0x391e1d[_0x1da8('‮1c','$BNn')](_0x293d78,_0x6859d2);},'uXxaK':_0x391e1d[_0x1da8('‮1d','^Q!T')],'rMgpI':function(_0xfd302b,_0x2187cf){return _0x391e1d[_0x1da8('‫1e','ZgkN')](_0xfd302b,_0x2187cf);},'tNnTA':_0x391e1d[_0x1da8('‫1f','E)(4')]};var _0x43a5f4='';var _0x3da512=_0x4fcd1f[_0x1da8('‫20','U7]a')](_0x1da8('‮21','MY($'));_0x3da512[_0x1da8('‮22','6R9l')](function(_0x1084fc){var _0x32b892=_0x48e620[_0x1da8('‮23','bwVi')](_0x4f7d2e[_0x1da8('‫24','FT[1')],_0x1084fc,_0x1da8('‮25','MY($'));if(_0x4f7d2e[_0x1da8('‮26','NTF*')](_0x1084fc[_0x1da8('‮27','U7]a')](0x0,0x3),_0x4f7d2e[_0x1da8('‫28','E)(4')])&&_0x4fcd1f[_0x1da8('‫29','^GX5')](_0x32b892)){if(_0x4f7d2e[_0x1da8('‮2a','nXic')](_0x4f7d2e[_0x1da8('‮2b','uz1Y')],_0x4f7d2e['tNnTA'])){_0x43a5f4=_0x4fcd1f[_0x1da8('‫2c','6R9l')](_0x32b892)[_0x1da8('‫2d','cILC')]()['trim']();}else{app_soy_jjy_data=process[_0x1da8('‮2e','ioti')][_0x1da8('‫2f','E)(4')]['split']('#');}};});return _0x43a5f4;};mac=_0x391e1d[_0x1da8('‫30','o8E^')](_0x431da4);await _0x391e1d['TFnLH'](yyz_getip);try{if(_0x391e1d[_0x1da8('‫31','G!lF')]===_0x1da8('‮32','0)Y5')){before=_0x4fcd1f[_0x1da8('‫33','Oqwy')](_0x391e1d['MsvGH'])[_0x1da8('‮34','&Iaz')]()[_0x1da8('‮35','glUs')]();r_ip=before[_0x1da8('‮36','^Q!T')]('&')[0x0];r_mac=before[_0x1da8('‮37','^GX5')]('&')[0x1];}else{console[_0x1da8('‮38','o8E^')](e,response);}}catch(_0x227773){r_ip='';r_mac='';let _0x5cc51e=CryptoJs['enc']['Utf8'][_0x1da8('‮39','CEv3')](IP_address);let _0x1dc5c3=CryptoJs[_0x1da8('‫3a','FT[1')]['encrypt'](_0x5cc51e,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1da8('‫3b','G!lF')][_0x1da8('‫3c','FT[1')],'padding':CryptoJs['pad']['Pkcs7']});let _0x58b955=_0x1dc5c3['ciphertext']['toString']()[_0x1da8('‮3d','G!lF')]();_0x5cc51e=CryptoJs[_0x1da8('‮3e','FT[1')][_0x1da8('‫3f','h)ra')]['parse'](mac);let _0x5b708b=CryptoJs[_0x1da8('‮40','x4Mk')][_0x1da8('‮41','$BNn')](_0x5cc51e,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1da8('‮42','nMCn')][_0x1da8('‮43','WcoR')],'padding':CryptoJs[_0x1da8('‫44','si5[')]['Pkcs7']});let _0x4fce3=_0x5b708b['ciphertext'][_0x1da8('‮45','o8E^')]()['toUpperCase']();try{_0x4fcd1f['writeFileSync'](_0x1da8('‮46','gJKw'),_0x58b955+'&'+_0x4fce3);}catch(_0x365cbd){}}let _0x2c18ee=$[_0x1da8('‫47','AlR%')]()?process['env'][_0x1da8('‮48','si5[')]:'';if(!_0x2c18ee){console['log']('\x0a【'+$[_0x1da8('‮49','pE[^')]+_0x1da8('‮4a','o8E^'));return!![];}else{if(_0x391e1d['HAyOU'](_0x1da8('‮4b','si5['),_0x1da8('‫4c','Ub4A'))){console['log'](_0x1da8('‫4d','cILC'));return![];}else{TG_ID=_0x2c18ee[_0x1da8('‮4e','nMCn')]('&')[0x0];yyz_Kami=_0x2c18ee[_0x1da8('‮4f','Ub4A')]('&')[0x1];try{if(_0x391e1d[_0x1da8('‮50','U7]a')]!==_0x1da8('‫51','nMCn')){before=_0x4fcd1f[_0x1da8('‮52','8fvZ')](_0x391e1d[_0x1da8('‮53','glUs')])['toString']()[_0x1da8('‮54','G!lF')]();r_ip=before[_0x1da8('‮55','m$40')]('&')[0x0];r_mac=before[_0x1da8('‫56','Oqwy')]('&')[0x1];}else{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}}catch(_0x566c94){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}try{if(_0x391e1d[_0x1da8('‫57','^GX5')](_0x391e1d[_0x1da8('‮58','PLCC')],_0x391e1d['Tizoa'])){var _0xd06cd9=_0x48e620[_0x1da8('‮59','m$40')]('/sys/class/net',dev,_0x391e1d['XsTmO']);if(_0x391e1d['pTGsc'](dev['substr'](0x0,0x3),_0x1da8('‮5a','Ub4A'))&&_0x4fcd1f[_0x1da8('‮5b','glUs')](_0xd06cd9)){macs=_0x4fcd1f[_0x1da8('‮5c','WcoR')](_0xd06cd9)[_0x1da8('‫5d','$BNn')]()[_0x1da8('‫5e','NTF*')]();};}else{YZ=author[_0x1da8('‮5f','glUs')](/作者TG_ID:(\S*)/)[0x1][_0x1da8('‮60','nXic')](/_/g,'><');}}catch(_0x3ba8d9){if(_0x391e1d['vJezG'](_0x391e1d[_0x1da8('‫61','6R9l')],_0x391e1d['QhViB'])){throw new Error(_0x1da8('‮62','h)ra'));}else{console['log']('\x0a【'+Tips+_0x1da8('‫63','G!lF')+$['index']+_0x1da8('‮64','WcoR')+error);}}}};if(process[_0x1da8('‫65','bwVi')][_0x1da8('‮66','jUWt')]&&process['env'][_0x1da8('‮67','86l2')][_0x1da8('‫68','uz1Y')]('\x0a')>-0x1){if('zwyvl'!=='gVJwN'){app_soy_jjy_data=process['env'][_0x1da8('‮69','YG%j')][_0x1da8('‫6a','bwVi')]('\x0a');}else{let _0x28dc8d=JSON['parse'](data);if(_0x391e1d[_0x1da8('‮6b','SFkz')](_0x28dc8d[_0x1da8('‫6c','PLCC')],0xc8)){console[_0x1da8('‫6d','pE[^')]('\x0a['+TG_ID+_0x1da8('‮6e','x4Mk')+_0x28dc8d[_0x1da8('‮6f',']0e9')]+'，重新跑一次脚本方可正常使用');return![];}else{console[_0x1da8('‫70','G!lF')]('\x0a['+TG_ID+_0x1da8('‮71','nXic')+_0x28dc8d[_0x1da8('‮72','bwVi')]);subTitle+='\x0a['+TG_ID+_0x1da8('‮73',']0e9')+_0x28dc8d[_0x1da8('‮74','Ub4A')];return![];}}}else if(process[_0x1da8('‮75','pE[^')][_0x1da8('‫76','pE[^')]&&_0x391e1d[_0x1da8('‫77','SFkz')](process['env'][_0x1da8('‫2f','E)(4')]['indexOf']('#'),-0x1)){if(_0x391e1d[_0x1da8('‫78','8fvZ')](_0x1da8('‫79','cILC'),_0x391e1d[_0x1da8('‮7a',']0e9')])){app_soy_jjy_data=process['env'][_0x1da8('‮7b','FT[1')]['split']('#');}else{let _0x203814=new Date();let _0x5cfe0b=_0x203814[_0x1da8('‫7c','86l2')]();let _0x2b9d64=_0x391e1d[_0x1da8('‮7d','E)(4')](_0x203814['getMonth'](),0x1);let _0x1569f8=_0x203814['getDate']();_0x2b9d64=_0x391e1d[_0x1da8('‫7e','o8E^')](_0x2b9d64,0xa)?'0'+_0x2b9d64:_0x2b9d64;_0x1569f8=_0x1569f8<0xa?_0x391e1d[_0x1da8('‮7f','lMeH')]('0',_0x1569f8):_0x1569f8;return _0x5cfe0b+'/'+_0x2b9d64+'/'+_0x1569f8;}}else if(process[_0x1da8('‫80','DE(R')][_0x1da8('‮81','PC(H')]&&_0x391e1d[_0x1da8('‮82','86l2')](process['env']['soy_jjy_data']['indexOf']('@'),-0x1)){if(_0x391e1d[_0x1da8('‮83','^Q!T')](_0x391e1d[_0x1da8('‮84','^Q!T')],_0x1da8('‮85','YG%j'))){app_soy_jjy_data=process['env'][_0x1da8('‫86','nMCn')][_0x1da8('‮87','o8E^')]('@');}else{var _0x4076e6='';var _0x9dc371=_0x4fcd1f[_0x1da8('‫88','6R9l')](_0x391e1d[_0x1da8('‫89','nXic')]);_0x9dc371[_0x1da8('‮8a','$BNn')](function(_0x2981c3){var _0x1ecd1b=_0x48e620[_0x1da8('‫8b','xE3f')](_0x391e1d[_0x1da8('‮8c','YG%j')],_0x2981c3,'address');if(_0x391e1d[_0x1da8('‮8d','(omk')](_0x2981c3[_0x1da8('‫8e','[Q%R')](0x0,0x3),_0x391e1d[_0x1da8('‫8f',']0e9')])&&_0x4fcd1f[_0x1da8('‫90','m$40')](_0x1ecd1b)){_0x4076e6=_0x4fcd1f[_0x1da8('‫91',']0e9')](_0x1ecd1b)[_0x1da8('‫92','FT[1')]()['trim']();};});return _0x4076e6;}}else{app_soy_jjy_data=process[_0x1da8('‫93','YG%j')][_0x1da8('‮94','ioti')][_0x1da8('‫95','Qt2u')]();};console[_0x1da8('‫96','FT[1')](_0x1da8('‮97','jUWt')+TG_ID+'|MAC：'+mac+_0x1da8('‫98','o8E^')+IP_address);if(!r_ip){var _0x2e8a09=CryptoJs[_0x1da8('‫99','t!@m')][_0x1da8('‫9a','jUWt')][_0x1da8('‮9b','^GX5')](r_mac);var _0x5cc51e=CryptoJs[_0x1da8('‫9c','UXjg')][_0x1da8('‫9d','glUs')][_0x1da8('‫9e','UXjg')](_0x2e8a09);var _0x11d626=CryptoJs['AES'][_0x1da8('‮9f','pE[^')](_0x5cc51e,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1da8('‮a0','Qt2u')][_0x1da8('‫a1','mfoD')],'padding':CryptoJs[_0x1da8('‫a2','glUs')][_0x1da8('‫a3','86l2')]});reg_mac=_0x11d626['toString'](CryptoJs['enc'][_0x1da8('‮a4','8fvZ')]);console[_0x1da8('‫a5','86l2')](_0x1da8('‫a6','Qt2u')+TG_ID+'|MAC：'+reg_mac+_0x1da8('‮a7','U7]a'));}else if(!r_mac){if(_0x391e1d[_0x1da8('‫a8','x4Mk')](_0x1da8('‫a9','$GCP'),'VDPvQ')){console[_0x1da8('‫aa','DE(R')](e);}else{var _0x1f0623=_0x391e1d[_0x1da8('‫ab','$GCP')]['split']('|'),_0x45158a=0x0;while(!![]){switch(_0x1f0623[_0x45158a++]){case'0':reg_ip=_0x11d626['toString'](CryptoJs[_0x1da8('‮ac','YG%j')]['Utf8']);continue;case'1':var _0x2e8a09=CryptoJs['enc'][_0x1da8('‮ad','t!@m')][_0x1da8('‫ae','Qt2u')](r_ip);continue;case'2':var _0x11d626=CryptoJs[_0x1da8('‮af','DE(R')]['decrypt'](_0x5cc51e,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1da8('‫b0','SFkz')][_0x1da8('‮b1','SFkz')],'padding':CryptoJs[_0x1da8('‮b2','ioti')][_0x1da8('‫b3','lMeH')]});continue;case'3':var _0x5cc51e=CryptoJs['enc'][_0x1da8('‮b4','^Q!T')]['stringify'](_0x2e8a09);continue;case'4':console['log'](_0x1da8('‮b5','t!@m')+TG_ID+_0x1da8('‮b6','U7]a')+reg_ip);continue;}break;}}}else if(!r_mac&&!r_ip){if(_0x391e1d[_0x1da8('‫b7','ioti')](_0x391e1d[_0x1da8('‮b8','MY($')],_0x391e1d['tCpFn'])){os=$[_0x1da8('‫47','AlR%')]()?_0x391e1d[_0x1da8('‮b9','(omk')](require,'os'):'';}else{console['log'](_0x1da8('‫ba','8fvZ')+TG_ID+'|MAC：无|IP：无');}}else{if('YVgyl'===_0x1da8('‮bb','uz1Y')){var _0x2fa879=_0x391e1d[_0x1da8('‮bc','0)Y5')][_0x1da8('‫bd','AlR%')]('|'),_0x3a8e88=0x0;while(!![]){switch(_0x2fa879[_0x3a8e88++]){case'0':reg_ip=_0x11d626[_0x1da8('‮be','m$40')](CryptoJs[_0x1da8('‮bf','86l2')][_0x1da8('‮c0','mfoD')]);continue;case'1':console['log'](_0x1da8('‫c1','WcoR')+TG_ID+_0x1da8('‫c2','0)Y5')+reg_mac+'|IP：'+reg_ip);continue;case'2':var _0x11d626=CryptoJs[_0x1da8('‫c3','xE3f')][_0x1da8('‮c4',']0e9')](_0x5cc51e,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x1da8('‫c5','[Q%R')],'padding':CryptoJs[_0x1da8('‮c6','U7]a')][_0x1da8('‫c7','si5[')]});continue;case'3':var _0x11d626=CryptoJs[_0x1da8('‮c8','NTF*')][_0x1da8('‮c4',']0e9')](_0x5cc51e,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x1da8('‫c9','uz1Y')],'padding':CryptoJs[_0x1da8('‫ca','Oqwy')][_0x1da8('‮cb','YG%j')]});continue;case'4':var _0x5cc51e=CryptoJs[_0x1da8('‫cc','h)ra')][_0x1da8('‮cd','AlR%')][_0x1da8('‮ce','bwVi')](_0x2e8a09);continue;case'5':var _0x5cc51e=CryptoJs[_0x1da8('‮cf','Oqwy')][_0x1da8('‮d0','WcoR')][_0x1da8('‮d1','^GX5')](_0x2e8a09);continue;case'6':reg_mac=_0x11d626['toString'](CryptoJs[_0x1da8('‫d2','Ub4A')][_0x1da8('‮d3','gJKw')]);continue;case'7':var _0x2e8a09=CryptoJs[_0x1da8('‫d4','0)Y5')]['Hex']['parse'](r_ip);continue;case'8':var _0x2e8a09=CryptoJs[_0x1da8('‮d5','AlR%')][_0x1da8('‫d6','$GCP')][_0x1da8('‫d7','glUs')](r_mac);continue;}break;}}else{_0x391e1d[_0x1da8('‮d8','PLCC')](resolve);}}user_num=app_soy_jjy_data['length'];console[_0x1da8('‮d9','PLCC')](_0x1da8('‮da','AlR%')+new Date(_0x391e1d[_0x1da8('‫db','E)(4')](_0x391e1d['cFTOv'](new Date()[_0x1da8('‮dc','NTF*')](),_0x391e1d['duAdp'](_0x391e1d[_0x1da8('‫dd','cILC')](new Date()[_0x1da8('‫de','glUs')](),0x3c),0x3e8)),_0x391e1d[_0x1da8('‮df','UXjg')](_0x391e1d[_0x1da8('‮e0','CEv3')](_0x391e1d[_0x1da8('‮e1','(omk')](0x8,0x3c),0x3c),0x3e8)))[_0x1da8('‫e2','NTF*')]()+'\x20===');await yyz_login();console[_0x1da8('‮d9','PLCC')]('\x0a===【共\x20'+user_num+'\x20个账号】===');subTitle='';if(yyz_d){if(_0x1da8('‫e3','U7]a')!=='ougTz'){console[_0x1da8('‮e4','mfoD')]('【'+Tips+_0x1da8('‫e5','jUWt')+$[_0x1da8('‫e6','x4Mk')]+_0x1da8('‫e7','PLCC'));subTitle+='\x0a【'+Tips+_0x1da8('‮e8','xE3f')+$['index']+'\x20签到】:\x20失败,可能今日已签到';}else{for(i=0x0;i<user_num;i++){var _0x90de22=_0x1da8('‫e9','$BNn')[_0x1da8('‫ea','FT[1')]('|'),_0x4fb8b7=0x0;while(!![]){switch(_0x90de22[_0x4fb8b7++]){case'0':if(!jjy_UA){jjy_UA=_0x391e1d[_0x1da8('‮eb',']0e9')];}continue;case'1':await implement();continue;case'2':jjy_cookie=app_soy_jjy_data[i];continue;case'3':$[_0x1da8('‫ec','CEv3')]=_0x391e1d['cFTOv'](i,0x1);continue;case'4':console[_0x1da8('‫ed','ioti')](_0x1da8('‮ee','t!@m')+$[_0x1da8('‫ef','U7]a')]+_0x1da8('‮f0','0)Y5'));continue;}break;}}if(notify){if(_0x391e1d['krDqq'](_0x391e1d[_0x1da8('‮f1','cILC')],_0x391e1d[_0x1da8('‫f2','Oqwy')])){if(subTitle){await notify[_0x1da8('‫f3','&Iaz')]($[_0x1da8('‮f4','Qt2u')],subTitle);}}else{IP_address=_0x391e1d['ktGOo'];console[_0x1da8('‮f5','[Q%R')](e,response);}}}}}else{if(_0x391e1d[_0x1da8('‫f6','86l2')]!==_0x1da8('‮f7','lMeH')){console[_0x1da8('‮38','o8E^')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}else{console['log']('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}}})()[_0x1da8('‮f8','cILC')](_0x438f10=>$['logErr'](_0x438f10))[_0x1da8('‫f9','t!@m')](()=>$[_0x1da8('‫fa','E)(4')]());async function implement(){var _0x293c40={'lqrHg':function(_0x3da54d){return _0x3da54d();}};await sign();await _0x293c40[_0x1da8('‮fb','NTF*')](adventures);}async function sign(){var _0xe6f122={'mGIqm':function(_0x54ae6b,_0x34e6f9){return _0x54ae6b>_0x34e6f9;},'poYQy':function(_0x42d359,_0x20c7e8){return _0x42d359===_0x20c7e8;},'ZRFvK':_0x1da8('‫fc','AlR%'),'jEBOq':'pAljY','fUPHK':function(_0x1bc42f,_0x4a4c62){return _0x1bc42f(_0x4a4c62);},'FzOhU':_0x1da8('‫fd','8fvZ'),'zNwQL':'www.esalewx.com','yxTRJ':_0x1da8('‫fe','nXic'),'vqZBs':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20SKW-A0\x20Build/SKYW2103030CN00MQ5;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/3211\x20MMWEBSDK/20211202\x20Mobile\x20Safari/537.36\x20MMWEBID/7499\x20MicroMessenger/8.0.18.2060(0x28001257)\x20Process/toolsmp\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64','UVrft':_0x1da8('‫ff','o8E^'),'scZmv':_0x1da8('‮100','$GCP'),'qjDyy':_0x1da8('‫101','PLCC'),'pPTtE':function(_0x460913,_0x6226da){return _0x460913+_0x6226da;},'xdLZy':_0x1da8('‮102','gJKw')};await _0xe6f122['fUPHK'](axios,{'url':_0xe6f122['FzOhU'],'headers':{'Host':_0xe6f122[_0x1da8('‮103','$BNn')],'Connection':_0xe6f122['yxTRJ'],'Content-Length':0x0,'Accept':_0x1da8('‮104','0)Y5'),'User-Agent':_0xe6f122['vqZBs'],'X-Requested-With':_0xe6f122[_0x1da8('‫105','t!@m')],'Origin':_0x1da8('‫106','$GCP'),'Referer':_0x1da8('‮107','$BNn'),'Accept-Encoding':_0xe6f122['scZmv'],'Accept-Language':_0xe6f122['qjDyy'],'Cookie':_0xe6f122['pPTtE'](connect_sid,jjy_cookie)},'method':_0xe6f122['xdLZy'],'data':''})['catch'](function(_0x283e93){console[_0x1da8('‫108','m$40')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x1da8('‫109','t!@m')]+'\x20签到】:\x20返回\x20'+_0x283e93);subTitle+='\x0a【'+Tips+_0x1da8('‮10a','glUs')+$[_0x1da8('‫10b','NTF*')]+'\x20签到】:\x20返回\x20'+_0x283e93;})['then'](function(_0x146e78){if(_0xe6f122[_0x1da8('‮10c','ZgkN')](_0x146e78[_0x1da8('‮10d','nMCn')][_0x1da8('‫10e','YG%j')]()[_0x1da8('‮10f','x4Mk')](_0x1da8('‫110','pE[^')),-0x1)){console[_0x1da8('‮111','jUWt')]('【'+Tips+_0x1da8('‫112','si5[')+$[_0x1da8('‫ec','CEv3')]+_0x1da8('‫113','0)Y5'));subTitle+='\x0a【'+Tips+_0x1da8('‮114','(omk')+$[_0x1da8('‮115','pE[^')]+_0x1da8('‫116','nMCn');}else{if(_0xe6f122[_0x1da8('‫117','o8E^')](_0xe6f122[_0x1da8('‫118','NTF*')],_0xe6f122[_0x1da8('‮119','glUs')])){macs=fs[_0x1da8('‫11a','YG%j')](fn)[_0x1da8('‫11b','8fvZ')]()[_0x1da8('‫11c','^GX5')]();}else{console['log']('【'+Tips+_0x1da8('‫e5','jUWt')+$['index']+_0x1da8('‮11d','Ub4A'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到】:\x20失败,可能今日已签到';}}});}function adventures(){var _0x2068b5={'ZZYJB':function(_0x4d01f5,_0x1585a6){return _0x4d01f5!==_0x1585a6;},'hbxQC':_0x1da8('‫11e','lMeH'),'krGOl':_0x1da8('‫11f','mfoD'),'fBxgm':function(_0x4419bf,_0x1eb56b){return _0x4419bf===_0x1eb56b;},'sHujt':_0x1da8('‮120','nXic'),'LaZZN':function(_0x2bc2b0){return _0x2bc2b0();},'CWIYL':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','PjOsl':_0x1da8('‫121','0)Y5'),'pHtWh':_0x1da8('‫122','CEv3'),'VqZHx':_0x1da8('‫123','CEv3'),'CshuN':'http://www.esalewx.com/activity/slyder_adventures/2927','EBVin':_0x1da8('‫124','o8E^'),'YNYGz':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'};let _0x5a32c7={'url':'http://www.esalewx.com/activity/slyder_adventures','headers':{'Host':'www.esalewx.com','Connection':'keep-alive','Content-Length':0x9,'Accept':_0x2068b5[_0x1da8('‫125','^Q!T')],'X-Requested-With':_0x1da8('‫126','x4Mk'),'User-Agent':_0x2068b5[_0x1da8('‫127','cILC')],'Content-Type':_0x2068b5[_0x1da8('‮128','CEv3')],'Origin':_0x2068b5[_0x1da8('‫129','WcoR')],'Referer':_0x2068b5['CshuN'],'Accept-Encoding':_0x2068b5['EBVin'],'Accept-Language':_0x2068b5[_0x1da8('‫12a','CEv3')],'Cookie':connect_sid+jjy_cookie},'body':_0x1da8('‫12b','SFkz')};return new Promise((_0x40eab5,_0x256e70)=>{$['post'](_0x5a32c7,async(_0x257313,_0x244255,_0x31ee3f)=>{try{if(_0x2068b5['ZZYJB'](_0x2068b5[_0x1da8('‮12c','U7]a')],_0x2068b5[_0x1da8('‫12d','si5[')])){if(_0x257313){console[_0x1da8('‫12e','MY($')]('\x0a【'+Tips+_0x1da8('‮12f','DE(R')+$[_0x1da8('‫10b','NTF*')]+_0x1da8('‮130','0)Y5')+_0x257313);}else{}}else{if(_0x257313){IP_address='127.0.0.1';}else{IP_address=_0x31ee3f;}}}catch(_0x563193){if(_0x2068b5[_0x1da8('‫131','^GX5')](_0x2068b5[_0x1da8('‮132','MY($')],_0x2068b5[_0x1da8('‮133','m$40')])){console['log'](_0x563193,_0x244255);}else{console[_0x1da8('‫134','^GX5')]('\x0a['+TG_ID+_0x1da8('‫135','xE3f')+result['msg']);subTitle+='\x0a['+TG_ID+_0x1da8('‮136','nMCn')+result[_0x1da8('‮137','gJKw')];}}finally{_0x2068b5[_0x1da8('‮138','jUWt')](_0x40eab5);}});});}function formatDate(){var _0x1cf914={'gTPzh':function(_0x52e4d1,_0x1ec1a8){return _0x52e4d1+_0x1ec1a8;},'ygzFX':function(_0x2da08d,_0x2a213){return _0x2da08d+_0x2a213;}};let _0x41e65c=new Date();let _0x234eaa=_0x41e65c[_0x1da8('‮139','AlR%')]();let _0xdea0a=_0x41e65c[_0x1da8('‮13a','bwVi')]()+0x1;let _0x4eb5ed=_0x41e65c[_0x1da8('‫13b','FT[1')]();_0xdea0a=_0xdea0a<0xa?_0x1cf914[_0x1da8('‫13c','glUs')]('0',_0xdea0a):_0xdea0a;_0x4eb5ed=_0x4eb5ed<0xa?_0x1cf914[_0x1da8('‫13d','UXjg')]('0',_0x4eb5ed):_0x4eb5ed;return _0x234eaa+'/'+_0xdea0a+'/'+_0x4eb5ed;};async function yyz_login(){var _0x4a0e28={'PvWvN':_0x1da8('‮13e','ioti'),'uJwRN':function(_0x3dfa19,_0x43977d){return _0x3dfa19==_0x43977d;},'owFZu':function(_0x42c664,_0x308f38){return _0x42c664(_0x308f38);},'tZarX':function(_0x102641){return _0x102641();},'Hbjub':function(_0x13445e,_0x4e9153){return _0x13445e!==_0x4e9153;},'VfBJP':'BaMtx','cTfEE':'AIEnl','Tgdrr':_0x1da8('‮13f','8fvZ'),'fIbGF':_0x1da8('‮140','MY($'),'cFIuS':_0x1da8('‫141','(omk'),'VwLXA':function(_0x5a7c7c,_0x347035){return _0x5a7c7c/_0x347035;},'bFUwe':function(_0x1a4e69,_0xf0057a){return _0x1a4e69+_0xf0057a;},'Qwbhq':function(_0x2c0b0c,_0x34afec){return _0x2c0b0c+_0x34afec;},'oUbrP':function(_0x3f055f,_0x38e787){return _0x3f055f+_0x38e787;},'Fucwe':'&sign=','HytxC':_0x1da8('‮142','gJKw')};var _0xbd1e32=Math[_0x1da8('‫143','nMCn')](_0x4a0e28[_0x1da8('‮144','&Iaz')](Date['now'](),0x3e8));var _0x10b772=CryptoJs[_0x1da8('‮145','(omk')](''+TG_ID+mac+os['hostname']()+YZ)[_0x1da8('‮146','PC(H')]();var _0x430202='account='+TG_ID+_0x1da8('‫147','U7]a')+_0x10b772+_0x1da8('‮148','Oqwy')+_0xbd1e32;var _0x56bf64=CryptoJs['MD5'](_0x4a0e28[_0x1da8('‮149','G!lF')](_0x4a0e28[_0x1da8('‮14a','x4Mk')](_0x430202,'&'),appid))[_0x1da8('‫14b','6R9l')]();_0x430202=_0x4a0e28['Qwbhq'](_0x4a0e28[_0x1da8('‫14c','pE[^')](_0x430202,_0x4a0e28[_0x1da8('‫14d','nXic')]),_0x56bf64);let _0x1d4444={'url':serverUrl+'user_logon','headers':{'user-agent':_0x4a0e28[_0x1da8('‮14e','&Iaz')]},'body':_0x430202};return new Promise((_0xa1e7d8,_0x3594fd)=>{var _0x233e7d={'ENWgj':function(_0x2597cd,_0x21ce4e){return _0x4a0e28[_0x1da8('‫14f','6R9l')](_0x2597cd,_0x21ce4e);},'CCQnU':_0x4a0e28[_0x1da8('‫150','DE(R')]};$['post'](_0x1d4444,async(_0x3ab388,_0x3de9b4,_0x2676cc)=>{if(_0x4a0e28[_0x1da8('‫151','G!lF')]!==_0x4a0e28[_0x1da8('‫152','ZgkN')]){app_soy_jjy_data=process['env'][_0x1da8('‫153','h)ra')][_0x1da8('‫154','8fvZ')]('\x0a');}else{try{if(_0x3ab388){console[_0x1da8('‮155','E)(4')]('\x0a['+TG_ID+_0x1da8('‫156','6R9l')+_0x3ab388);subTitle+='\x0a['+TG_ID+_0x1da8('‮157','SFkz')+_0x3ab388;}else{let _0x13331c=JSON['parse'](_0x2676cc);if(_0x4a0e28[_0x1da8('‫158','Qt2u')](_0x13331c['code'],0xc8)){let _0x1e43f3=_0x4a0e28[_0x1da8('‮159','x4Mk')](Format_time,_0x13331c[_0x1da8('‮15a','nXic')][_0x1da8('‮15b','0)Y5')][_0x1da8('‮15c','PLCC')]);console['log']('\x0a['+TG_ID+_0x1da8('‫15d','lMeH')+_0x1e43f3);await get_vip(_0x13331c[_0x1da8('‮15e','jUWt')][_0x1da8('‫15f','FT[1')]);}else if(_0x4a0e28[_0x1da8('‫160','&Iaz')](_0x13331c[_0x1da8('‫161',']0e9')],0x71)){await _0x4a0e28[_0x1da8('‮162','x4Mk')](yyz_user_reg);}else{if(_0x4a0e28[_0x1da8('‮163','&Iaz')](_0x4a0e28[_0x1da8('‮164','jUWt')],_0x4a0e28[_0x1da8('‮165','[Q%R')])){console[_0x1da8('‫12e','MY($')]('\x0a['+TG_ID+_0x1da8('‮166','bwVi')+_0x13331c[_0x1da8('‮167','t!@m')]);subTitle+='\x0a['+TG_ID+_0x1da8('‮168','Ub4A')+_0x13331c['msg'];return![];}else{axios=$[_0x1da8('‫169','PLCC')]()?_0x233e7d['ENWgj'](require,_0x233e7d['CCQnU']):'';}}}}catch(_0x1b7b7f){if(_0x4a0e28['Tgdrr']!==_0x4a0e28[_0x1da8('‫16a','0)Y5')]){console[_0x1da8('‫134','^GX5')](_0x1b7b7f);}else{app_soy_jjy_data=process[_0x1da8('‮16b','UXjg')][_0x1da8('‮16c','glUs')]['split']();}}finally{_0x4a0e28['tZarX'](_0xa1e7d8);}}});});}async function get_vip(_0x2b57d6){var _0x30c6b8={'WneLP':function(_0x4af7c9,_0x5e28bb){return _0x4af7c9==_0x5e28bb;},'pZeJR':_0x1da8('‮16d','PLCC'),'BPGRm':function(_0x54ef4f,_0x37398c){return _0x54ef4f!==_0x37398c;},'RrdbH':'xyaTr','KIAiX':function(_0x3b8dcd,_0x1145d8){return _0x3b8dcd(_0x1145d8);},'eRoWA':_0x1da8('‫16e','UXjg'),'lXple':_0x1da8('‮16f','PC(H'),'CeYgl':function(_0x47dc89,_0x187b90){return _0x47dc89!==_0x187b90;},'oZyLI':'JoNiU','qBpsz':function(_0x2fcc8a,_0x5b28b2){return _0x2fcc8a/_0x5b28b2;},'NGqpS':function(_0x5ae384,_0x5a2d20){return _0x5ae384+_0x5a2d20;},'NOjVc':_0x1da8('‫170','m$40'),'PkBCp':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x309dbb=Math['floor'](_0x30c6b8['qBpsz'](Date['now'](),0x3e8));var _0x3dfe7f=_0x1da8('‮171','YG%j')+user_num+_0x1da8('‮172','t!@m')+_0x2b57d6+_0x1da8('‮173','mfoD')+_0x309dbb;var _0x78a041=CryptoJs[_0x1da8('‮174','PLCC')](_0x3dfe7f+'&'+appid)['toString']();_0x3dfe7f=_0x30c6b8[_0x1da8('‮175','G!lF')](_0x30c6b8[_0x1da8('‫176','[Q%R')](_0x3dfe7f,_0x30c6b8['NOjVc']),_0x78a041);let _0x13328c={'url':serverUrl+'get_vip','headers':{'user-agent':_0x30c6b8[_0x1da8('‮177','Qt2u')]},'body':_0x3dfe7f};return new Promise((_0x1f8591,_0x369a25)=>{var _0x21bcc8={'gDvEl':function(_0x43bca7,_0x497214){return _0x30c6b8[_0x1da8('‮178','$BNn')](_0x43bca7,_0x497214);},'CkHyq':function(_0x490c11,_0x22b028){return _0x490c11==_0x22b028;},'DyTbQ':_0x30c6b8['pZeJR'],'bxNKp':function(_0x493650,_0x5a7eef){return _0x30c6b8['BPGRm'](_0x493650,_0x5a7eef);},'yLYGJ':_0x30c6b8[_0x1da8('‮179','Qt2u')],'JRzzg':function(_0x5656a9,_0x52cde2){return _0x30c6b8[_0x1da8('‮17a','m$40')](_0x5656a9,_0x52cde2);},'gvOXa':_0x30c6b8[_0x1da8('‮17b','SFkz')],'rZpRQ':_0x30c6b8[_0x1da8('‮17c','ZgkN')]};if(_0x30c6b8[_0x1da8('‮17d','nMCn')](_0x30c6b8[_0x1da8('‫17e','UXjg')],_0x1da8('‫17f','FT[1'))){throw new Error(_0x1da8('‫180','bwVi'));}else{$[_0x1da8('‫181','jUWt')](_0x13328c,async(_0x50fc9f,_0x327ae9,_0x6ae154)=>{try{if(_0x50fc9f){console[_0x1da8('‮e4','mfoD')]('\x0a['+TG_ID+_0x1da8('‮182','x4Mk')+_0x50fc9f);subTitle+='\x0a['+TG_ID+_0x1da8('‫183','t!@m')+_0x50fc9f;}else{let _0x17c022=JSON[_0x1da8('‮184','0)Y5')](_0x6ae154);if(_0x21bcc8[_0x1da8('‫185','CEv3')](_0x17c022[_0x1da8('‫186','jUWt')],0xc8)){connect_sid=_0x17c022[_0x1da8('‫187','lMeH')];yyz_d=!![];}else if(_0x21bcc8[_0x1da8('‫188','86l2')](_0x17c022[_0x1da8('‫189','PC(H')],0xca)){console[_0x1da8('‮18a','x4Mk')]('\x0a['+TG_ID+_0x1da8('‫18b','m$40')+_0x17c022[_0x1da8('‮167','t!@m')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x17c022[_0x1da8('‮18c','G!lF')];}else if(_0x21bcc8[_0x1da8('‫18d','(omk')](_0x17c022['code'],0xcd)){console['log']('\x0a['+TG_ID+_0x1da8('‮136','nMCn')+_0x17c022['msg']);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x17c022[_0x1da8('‫18e','x4Mk')];}else{if(_0x21bcc8[_0x1da8('‫18f','86l2')]!==_0x21bcc8[_0x1da8('‫190','Qt2u')]){connect_sid=_0x17c022[_0x1da8('‮74','Ub4A')];yyz_d=!![];}else{if(!yyz_Kami){console[_0x1da8('‮155','E)(4')]('\x0a['+TG_ID+_0x1da8('‫191','NTF*'));subTitle+='\x0a['+TG_ID+_0x1da8('‫192','SFkz');return![];}else{if(_0x21bcc8[_0x1da8('‮193','m$40')](_0x21bcc8['yLYGJ'],_0x21bcc8[_0x1da8('‫194','$GCP')])){console[_0x1da8('‫70','G!lF')]('\x0a['+TG_ID+_0x1da8('‮195','$GCP')+_0x17c022['msg']);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x17c022[_0x1da8('‫196','NTF*')];return![];}else{await _0x21bcc8[_0x1da8('‮197','nXic')](card,_0x2b57d6);}}}}}}catch(_0x3eaa04){if(_0x21bcc8['gvOXa']===_0x21bcc8['rZpRQ']){console[_0x1da8('‮198','ZgkN')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';return![];}else{console['log'](_0x3eaa04);}}finally{_0x1f8591();}});}});}async function yyz_user_reg(){var _0x8252fe={'xyCvK':_0x1da8('‫199','$GCP'),'WNeYZ':function(_0x599bfd,_0x248fcc){return _0x599bfd!==_0x248fcc;},'UmGUv':_0x1da8('‮19a','PLCC'),'DZvYF':function(_0x20cee8){return _0x20cee8();},'wamDm':'pgIBv','kjgzC':_0x1da8('‫19b','pE[^'),'TqnDK':_0x1da8('‮19c','Qt2u'),'TkwWR':_0x1da8('‮19d','^GX5'),'AynLJ':function(_0x228c59,_0x11e03a){return _0x228c59&&_0x11e03a;},'cyCmD':function(_0xa153ed,_0xbd2e51){return _0xa153ed/_0xbd2e51;},'swcCc':function(_0x6bb895,_0x1ade6b){return _0x6bb895+_0x1ade6b;},'HofDj':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(_0x8252fe['AynLJ'](!Tips,!YZ)){console[_0x1da8('‫96','FT[1')](_0x1da8('‫19e',']0e9'));return![];}await yyz_getip();var _0x3e50df=Math[_0x1da8('‫19f','WcoR')](_0x8252fe[_0x1da8('‫1a0','U7]a')](Date[_0x1da8('‮1a1','$GCP')](),0x3e8));var _0x1dc830=CryptoJs[_0x1da8('‮1a2','nMCn')](''+TG_ID+mac+os[_0x1da8('‮1a3','G!lF')]()+YZ)[_0x1da8('‫2d','cILC')]();var _0x7a0f47='user='+TG_ID+_0x1da8('‫1a4','x4Mk')+_0x1dc830+'&t='+_0x3e50df;var _0x578f00=CryptoJs['MD5'](_0x7a0f47+'&'+appid)[_0x1da8('‫1a5','gJKw')]();_0x7a0f47=_0x8252fe['swcCc'](_0x7a0f47+_0x1da8('‫1a6','U7]a'),_0x578f00);let _0x59cea1={'url':serverUrl+_0x1da8('‫1a7','0)Y5'),'headers':{'user-agent':_0x8252fe['HofDj']},'body':_0x7a0f47};return new Promise((_0x10fd88,_0x4e6a5e)=>{var _0x47c832={'DKoMo':_0x8252fe[_0x1da8('‫1a8','uz1Y')],'Jfrwd':function(_0x4901da,_0x4b67ff){return _0x4901da==_0x4b67ff;},'YONRb':function(_0x3626fe,_0x35da39){return _0x8252fe['WNeYZ'](_0x3626fe,_0x35da39);},'ToRmV':_0x8252fe[_0x1da8('‮1a9','WcoR')],'qeUmz':_0x1da8('‫1aa','pE[^'),'bnXjK':function(_0x4b2a46){return _0x8252fe[_0x1da8('‮1ab','G!lF')](_0x4b2a46);},'FdKqJ':function(_0x4b91d6,_0x100a8f){return _0x4b91d6==_0x100a8f;},'TzqRk':function(_0x25aa02,_0x4448b8){return _0x25aa02===_0x4448b8;},'ytZfc':_0x8252fe['wamDm'],'nSfiZ':function(_0x56aee0,_0x573641){return _0x8252fe[_0x1da8('‫1ac','G!lF')](_0x56aee0,_0x573641);},'qmhDm':_0x8252fe[_0x1da8('‫1ad','nXic')],'SfoUz':function(_0xb11896,_0x317e9f){return _0xb11896!==_0x317e9f;},'NnTNg':_0x8252fe[_0x1da8('‮1ae','Ub4A')],'PWuNf':_0x8252fe['TkwWR']};$['post'](_0x59cea1,async(_0x5cb830,_0x56e9a9,_0x21e7a9)=>{var _0x5b81c1={'NqIbJ':function(_0xe0c73d,_0x296886){return _0xe0c73d(_0x296886);},'HdNgb':_0x47c832[_0x1da8('‮1af','YG%j')]};try{if(_0x5cb830){console[_0x1da8('‫1b0','UXjg')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x5cb830);subTitle+='\x0a['+TG_ID+_0x1da8('‮1b1','WcoR')+_0x5cb830;}else{if(_0x1da8('‫1b2','glUs')!==_0x1da8('‮1b3','Ub4A')){let _0x236ea5=JSON[_0x1da8('‮1b4','SFkz')](_0x21e7a9);if(_0x47c832[_0x1da8('‮1b5','uz1Y')](_0x236ea5[_0x1da8('‮1b6','MY($')],0xc8)){if(_0x47c832[_0x1da8('‫1b7','lMeH')](_0x1da8('‮1b8','$BNn'),_0x47c832[_0x1da8('‫1b9','Ub4A')])){let _0x6bc348=CryptoJs[_0x1da8('‫1ba','pE[^')][_0x1da8('‫1bb','YG%j')]['parse'](IP_address);let _0x2a48f8=CryptoJs[_0x1da8('‫1bc','SFkz')][_0x1da8('‫1bd','DE(R')](_0x6bc348,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1da8('‫1be','NTF*')][_0x1da8('‮1bf','AlR%')],'padding':CryptoJs['pad']['Pkcs7']});let _0x39ff35=_0x2a48f8[_0x1da8('‫1c0','gJKw')]['toString']()['toUpperCase']();_0x6bc348=CryptoJs[_0x1da8('‫99','t!@m')][_0x1da8('‮1c1','U7]a')][_0x1da8('‮1c2','&Iaz')](mac);let _0x3b81f1=CryptoJs[_0x1da8('‮1c3','PC(H')][_0x1da8('‮1c4','MY($')](_0x6bc348,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1da8('‫1be','NTF*')][_0x1da8('‮1c5','CEv3')],'padding':CryptoJs[_0x1da8('‮1c6','WcoR')]['Pkcs7']});let _0x387f7d=_0x3b81f1[_0x1da8('‫1c7','cILC')][_0x1da8('‮1c8','[Q%R')]()[_0x1da8('‫1c9','h)ra')]();try{fs[_0x1da8('‮1ca','ioti')](_0x47c832['qeUmz'],_0x39ff35+'&'+_0x387f7d);}catch(_0xecff8b){}console['log']('\x0a['+TG_ID+']:\x20注册成功:\x20IP=>'+IP_address+_0x1da8('‮1cb','MY($')+mac);await _0x47c832[_0x1da8('‫1cc','^GX5')](yyz_login);}else{console[_0x1da8('‫1cd','si5[')]('\x0a['+TG_ID+_0x1da8('‮1ce','^GX5')+_0x236ea5[_0x1da8('‫18e','x4Mk')]+_0x1da8('‫1cf','cILC'));return![];}}else if(_0x47c832[_0x1da8('‫1d0','0)Y5')](_0x236ea5[_0x1da8('‮1d1','&Iaz')],0x75)){if(_0x47c832[_0x1da8('‮1d2','gJKw')](_0x47c832[_0x1da8('‫1d3','AlR%')],_0x1da8('‫1d4','$GCP'))){console[_0x1da8('‮1d5','h)ra')]('\x0a['+TG_ID+_0x1da8('‮1d6','o8E^')+_0x236ea5['msg']+'，该TG_ID/设备/IP已被注册');return![];}else{CryptoJs=$[_0x1da8('‫1d7','cILC')]()?_0x5b81c1[_0x1da8('‮1d8','t!@m')](require,_0x5b81c1['HdNgb']):'';}}else{if(_0x47c832['nSfiZ'](_0x47c832['qmhDm'],_0x47c832[_0x1da8('‫1d9','FT[1')])){_0x10fd88();}else{console['log']('\x0a['+TG_ID+_0x1da8('‮1da','mfoD')+_0x236ea5[_0x1da8('‮1db','o8E^')]);subTitle+='\x0a['+TG_ID+_0x1da8('‫1dc','jUWt')+_0x236ea5['msg'];return![];}}}else{throw new Error(_0x1da8('‮1dd','E)(4'));}}}catch(_0x23a5ba){console[_0x1da8('‮198','ZgkN')](_0x23a5ba);}finally{if(_0x47c832['SfoUz'](_0x47c832[_0x1da8('‫1de','mfoD')],_0x47c832['PWuNf'])){_0x10fd88();}else{console[_0x1da8('‮1df','bwVi')]('\x0a['+TG_ID+_0x1da8('‫1e0','h)ra')+result[_0x1da8('‮1e1','FT[1')]);subTitle+='\x0a['+TG_ID+_0x1da8('‫1e0','h)ra')+result[_0x1da8('‮15a','nXic')];return![];}}});});}async function card(_0x446f83){var _0x40cc7b={'NHyby':function(_0x7200ce,_0x3dcbaf){return _0x7200ce===_0x3dcbaf;},'yPQWE':'nTief','RaHqf':_0x1da8('‮1e2','xE3f'),'qLWOz':function(_0x374274,_0x2094dd){return _0x374274==_0x2094dd;},'sIItf':function(_0x33fe5f){return _0x33fe5f();},'Mclpu':function(_0x3067cf,_0x515f90){return _0x3067cf!==_0x515f90;},'wyLNT':_0x1da8('‫1e3','x4Mk'),'EOPwO':function(_0x1bae04,_0x54cbf5){return _0x1bae04/_0x54cbf5;},'cGARJ':function(_0x31c3b8,_0x852777){return _0x31c3b8+_0x852777;},'trSbB':function(_0x35384a,_0x311136){return _0x35384a+_0x311136;},'yCuyy':_0x1da8('‮1e4','PLCC'),'PDKmJ':_0x1da8('‫1e5','&Iaz')};var _0x18a26=Math[_0x1da8('‫1e6','6R9l')](_0x40cc7b[_0x1da8('‫1e7','jUWt')](Date['now'](),0x3e8));var _0x34927f='token='+_0x446f83+_0x1da8('‫1e8','Ub4A')+yyz_Kami+_0x1da8('‫1e9','o8E^')+_0x18a26;var _0x590a5c=CryptoJs[_0x1da8('‫1ea','jUWt')](_0x40cc7b[_0x1da8('‮1eb','o8E^')](_0x40cc7b[_0x1da8('‫1ec','cILC')](_0x34927f,'&'),appid))[_0x1da8('‮1ed','AlR%')]();_0x34927f=_0x40cc7b[_0x1da8('‫1ee','mfoD')](_0x40cc7b[_0x1da8('‮1ef','G!lF')](_0x34927f,_0x40cc7b[_0x1da8('‮1f0','^GX5')]),_0x590a5c);let _0x574f5a={'url':serverUrl+_0x1da8('‫1f1','G!lF'),'headers':{'user-agent':_0x40cc7b['PDKmJ']},'body':_0x34927f};return new Promise((_0x458b50,_0x57e990)=>{if(_0x40cc7b[_0x1da8('‫1f2','xE3f')](_0x40cc7b[_0x1da8('‮1f3','glUs')],_0x40cc7b[_0x1da8('‫1f4','&Iaz')])){console[_0x1da8('‫1f5','WcoR')](e);}else{$['post'](_0x574f5a,async(_0x2015e9,_0x1c1f66,_0x283f3d)=>{if(_0x40cc7b[_0x1da8('‫1f6','[Q%R')](_0x40cc7b[_0x1da8('‫1f7','PC(H')],_0x40cc7b[_0x1da8('‫1f8','xE3f')])){try{if(_0x2015e9){console[_0x1da8('‫1f9','cILC')]('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x2015e9);subTitle+='\x0a['+TG_ID+_0x1da8('‮1fa','AlR%')+_0x2015e9;}else{if(_0x40cc7b['RaHqf']!=='BsPjD'){let _0x3c1350=JSON[_0x1da8('‮1fb','cILC')](_0x283f3d);if(_0x40cc7b[_0x1da8('‫1fc','Oqwy')](_0x3c1350[_0x1da8('‫1fd','ioti')],0xc8)){console[_0x1da8('‮1fe','glUs')]('\x0a['+TG_ID+_0x1da8('‮1ff','PLCC')+_0x3c1350[_0x1da8('‫200','Oqwy')]+_0x1da8('‮201','[Q%R'));return![];}else{console[_0x1da8('‫70','G!lF')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x3c1350['msg']);subTitle+='\x0a['+TG_ID+_0x1da8('‮71','nXic')+_0x3c1350[_0x1da8('‮202','WcoR')];return![];}}else{console[_0x1da8('‫134','^GX5')]('\x0a['+TG_ID+_0x1da8('‮203','x4Mk')+result[_0x1da8('‮1db','o8E^')]);subTitle+='\x0a['+TG_ID+_0x1da8('‫204','PLCC')+result['msg'];}}}catch(_0xdb57c7){console[_0x1da8('‮18a','x4Mk')](_0xdb57c7);}finally{_0x40cc7b['sIItf'](_0x458b50);}}else{if(_0x2015e9){console['log']('\x0a【'+Tips+_0x1da8('‮205','^Q!T')+$[_0x1da8('‮206','cILC')]+_0x1da8('‮207','xE3f')+_0x2015e9);}else{}}});}});}function yyz_getip(){var _0x6fee74={'DKZnI':_0x1da8('‮208','ZgkN'),'woISL':function(_0x12eecd,_0x1b20f7){return _0x12eecd!==_0x1b20f7;},'UOgSd':_0x1da8('‫209','86l2'),'RkACh':_0x1da8('‫20a','AlR%'),'IWXQJ':function(_0x588d1c){return _0x588d1c();}};let _0x27fe98={'url':_0x1da8('‫20b','x4Mk')};return new Promise((_0x358b47,_0x357e70)=>{$[_0x1da8('‫20c','x4Mk')](_0x27fe98,async(_0x4e289f,_0x1401fb,_0x32a6b4)=>{var _0x21cd83={'pqsUU':_0x6fee74[_0x1da8('‮20d','$BNn')]};try{if(_0x4e289f){if(_0x6fee74[_0x1da8('‮20e','nXic')](_0x1da8('‫20f','^Q!T'),_0x6fee74['UOgSd'])){var _0x1ac712=_0x21cd83[_0x1da8('‫210','mfoD')][_0x1da8('‮211','UXjg')]('|'),_0x5689f3=0x0;while(!![]){switch(_0x1ac712[_0x5689f3++]){case'0':var _0x1c4fc4=CryptoJs[_0x1da8('‮212','si5[')]['decrypt'](_0x4799d5,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x1da8('‫213','PLCC')],'padding':CryptoJs[_0x1da8('‮214','E)(4')]['Pkcs7']});continue;case'1':reg_mac=_0x1c4fc4[_0x1da8('‮be','m$40')](CryptoJs[_0x1da8('‫215','&Iaz')][_0x1da8('‫216','pE[^')]);continue;case'2':var _0x51eb91=CryptoJs[_0x1da8('‫217','jUWt')]['Hex'][_0x1da8('‮218','U7]a')](r_mac);continue;case'3':var _0x4799d5=CryptoJs[_0x1da8('‫215','&Iaz')][_0x1da8('‫219','pE[^')]['stringify'](_0x51eb91);continue;case'4':console[_0x1da8('‮111','jUWt')](_0x1da8('‫21a','SFkz')+TG_ID+_0x1da8('‫21b','nMCn')+reg_mac+_0x1da8('‮21c','nXic'));continue;}break;}}else{IP_address=_0x1da8('‮21d','$BNn');}}else{IP_address=_0x32a6b4;}}catch(_0x433856){IP_address=_0x6fee74[_0x1da8('‮21e','si5[')];console[_0x1da8('‫21f','^Q!T')](_0x433856,_0x1401fb);}finally{_0x6fee74[_0x1da8('‮220','nMCn')](_0x358b47);}});});}function Format_time(_0x35bd3b){var _0x2c0ad0={'QsCXq':function(_0x495fcf,_0x5c37c4){return _0x495fcf*_0x5c37c4;},'CbuRz':function(_0x45109e,_0x350da5){return _0x45109e+_0x350da5;},'iURJq':function(_0x4e3f12,_0x135a12){return _0x4e3f12+_0x135a12;},'bsgBK':function(_0x57da8f,_0x476c9a){return _0x57da8f+_0x476c9a;},'vsfVw':function(_0x2e8e13,_0x494684){return _0x2e8e13+_0x494684;},'AMWYy':function(_0x23a453,_0xe98bc4){return _0x23a453+_0xe98bc4;},'cSDIR':function(_0x562725,_0x8c5705){return _0x562725+_0x8c5705;},'DcRrB':function(_0x57f5c6,_0x28ef84){return _0x57f5c6+_0x28ef84;}};var _0x4a70f5=new Date(_0x2c0ad0[_0x1da8('‫221','MY($')](_0x35bd3b,0x3e8));var _0x110a60=_0x4a70f5[_0x1da8('‫222','ioti')]()+'-';var _0x5671db=_0x2c0ad0['CbuRz'](_0x2c0ad0[_0x1da8('‮223','^Q!T')](_0x4a70f5[_0x1da8('‫224','xE3f')](),0x1)<0xa?_0x2c0ad0[_0x1da8('‮225','jUWt')]('0',_0x2c0ad0['CbuRz'](_0x4a70f5[_0x1da8('‮226','uz1Y')](),0x1)):_0x4a70f5[_0x1da8('‫227','cILC')]()+0x1,'-');var _0x2d2b40=_0x4a70f5[_0x1da8('‮228','G!lF')]()+'\x20';var _0x3be372=_0x2c0ad0['iURJq'](_0x4a70f5[_0x1da8('‮229',']0e9')](),':');var _0x223483=_0x2c0ad0[_0x1da8('‮22a','t!@m')](_0x4a70f5[_0x1da8('‮22b','pE[^')]()<0xa?_0x2c0ad0['bsgBK']('0',_0x4a70f5['getMinutes']()):_0x4a70f5[_0x1da8('‫22c','t!@m')](),':');var _0x1335d5=_0x4a70f5['getSeconds']();let _0x350f4d=_0x2c0ad0['vsfVw'](_0x110a60+_0x5671db+_0x2d2b40,_0x3be372)+_0x223483+_0x1335d5;return _0x2c0ad0[_0x1da8('‫22d','cILC')](_0x2c0ad0[_0x1da8('‫22e','8fvZ')](_0x2c0ad0[_0x1da8('‮22f','$BNn')](_0x2c0ad0[_0x1da8('‮230','x4Mk')](_0x2c0ad0[_0x1da8('‮231','PLCC')](_0x110a60,_0x5671db),_0x2d2b40),_0x3be372),_0x223483),_0x1335d5);};_0xodd='jsjiami.com.v6';



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