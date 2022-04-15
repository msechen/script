/*

项目名称:君凤煌

项目注册地址:https://wap.jfh6688.cn/share/app3?inviteCode=

需要人脸实名认证,或者照片

看广告得贡献，贡献按比例每日释放成红包，注册送16888贡献值,每日安卓一定比率进行释放得到红包(需要扣除10%手续费)，然后红包按照100：1兑换成余额，余额记得不能提现，只能购买东西。充值之类

好像记得token每天会过期一次，还是啥，还是跑任务需要激活app，反正有点限制


固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
注释：
激活卡密获取 @DGR0076 @ls_soy
TG频道:【暂未启用】


脚本需要的变量:
变量名:soy_jfh_data
变量值:token
注释:token抓包找到带有 http://api.jfh6688.cn 的链接,链接上的token值

多个号用 # 换行 隔开

一天1或2次
cron 31 6,17 * * * app_jfh.js


*/

const $ = new Env('【君风煌22/04/15_0】');
const notify = $.isNode() ? require('./sendNotify') : '';
const author = '作者TG_ID:@ls_soy';


var _0xod6='jsjiami.com.v6',_0xod6_=['‮_0xod6'],_0x5802=[_0xod6,'akzCncOD','YwIh','wrDDi0LCozA=','bR4iw5c=','P0R56auh6K6l6IaW5p2qw4TCkg==','Dw0+','wqJ3wqo=','AADCknI=','wozDpcOBDzY=','woTDlMOsBiA=','KMKoauaXlemFiOmpsuivqzxb','VGjCjA==','IcK4J+aUo+mFgOmpnuiunXDDrg==','w7jCnz7DsCQ=','w791w5RzbQ==','wrLDkcOvNjs=','wr0Jw6M=','77+A6K2Aw7kqN8Kgwq7DrOivteWlk8KRIxTltrHoor3msrzlh5k=','ccKeIcKtwo8=','E8OLczbDjQ==','wrnCr8K45Lyk55W95Y625a6jGlPmsKvmn4Xlj6Xlr4nljLLkv5LnlLk=','ZCHDi+S+gueXv+WMjuWvqVfCveazuuadjOWNpOWtleWPouS/kOeWug==','w4DChiE=','eTjDt+S8ieeWlOWOj+WvjMKyw5nmsqLmnoLljoHlrZfljazkv7znlJk=','wo3Du8O8Pi0=','w6/li43mlp3jgoFDwrLnv5bnu5jorZTmsI/lpZLot552ZcKmw4forrfmsYTlp4fot7I=','5oyy56agDcOeU+i1meWNigw=','TsK1JmZR','MuWIuuaVs+OAhzLDsee9s+e7q+ivq+azv+WngOi0pXLDskrCguivj+axq+Wljei0kA==','ZiPDpcKSMw==','w5zCkA3DgDo=','wo/Cqlc=','5oyc56af44K877235p2C5aKC5YWz55i75buf5Y6M6YWxSjcsbws/woLCrXvCuGFGHA==','RcKiw5IvAQ==','Uhkm','w4/DsMK15pSJ6YaW6aq46K2Dw5cg','wqjDiDE=','KcO3ZuaUvumFremppuisvwx8','wp/ChxY=','O8OgDMOcw6E=','UcKaPMKbwq8=','w5vCvRHDoBM=','wqnDusOiMjnCuwQPRsKkw7zCpCfCkcOEf8KdWMOaw5XDvw7CsBjCgMKzwoEzBcK6Ci5ow4RcA1HDtMO5OwjCqEfDpV9Aw7MoK8Odw5rDnjnCt8Kqw7LDkzXCmmfCrMKNCsK6ecOTwqsBMi53csO6dcOJTMKjw5pSwqLDuTdBwoQsw6ZNwrbDh8KyPEnDpR0FeAzCk8Kyw5fDqcO2PsOFwoFvM8Khw7Vtw7LCpiB+I8KmDicKMMKhw6ZswrzDj8KDwqpzwrXCs8KiXHLCli/CqMOtKcKKw4Uaw4DCncOyakVyYG7Cl1FjwogQfgDCrmLCp8O4w5sPETJcwrMOU1LCh8OQwrFxbcORw6oBFsOyV8KAwr1kb8KTwoFIw6nDjsO6ecKrwr5rDcKpwqTCqMOzw7N0w5lSw4UbbzDCpcORw63CsgtIwpMVwrXCkcK1w60Rwq7Cgw==','WMOLXA==','YcKwwqsKwq0=','WsOLTA==','GB0gVDXCtQ==','woBNwpg=','wr/CsEQ=','UFnCksKbwpQ=','eh4Vw4YfdMKkfg==','GwDDv8KHf8K/','wofDtMOqPw==','wqLDisOBwqPCng==','wrwLw50lVA==','w6TCvcOwPBE=','RFQ9w7oW','VcO/w6RBfA==','wqzDshDDtsKq','Si7CkBnDmA==','wqbCnFfDiC8=','BMKiNTo=','G8OHB8OBw7I=','wolXwo8qbQ==','w77CpcOy','w4zCgHXkvIDnl5vlj5HlrafCsMKW6L2C5ZujNQ==','esOhYuS9vOeUgeWNteWsnsOZwqnov5PlmLYp','eTjDt+S8ieeWlOWOj+WvjMKyw5k=','77yY6IWp5p655baO5q675biX5Ly055ey','wqnDlDE=','TmPCu8KRwqc=','wppmwok5QA==','PcO4wrNfWg==','wrY+RsKZ','YsOGbwwV','QhHDgRnCrg==','wqvClcKU5L6E55eY5YyY5a+XOAM=','wonDpsO/','wqLCm1nDsxE=','bE1e','wozDj23Clws=','Yh4h','5o+X56emw6lIw7LotpLlj6AY','SOadv+isleS7sOWKvueLnOaDkuOBv8OCwpk=','w7Jpw696aw==','BRstKxHDoCrCp8OXWy0=','U2Urw60L','wp03S8KZbA==','w5BPw4rClMKf','cxbDoTHCt0E/wrI=','Sj0Kw6Uv','wqhhwrkgal7Di30=','Z3TCgVRm','w57CpBDDmC0=','UQPDk8KtOcK7w7bDkg==','woXDv1TCvhcRw4hYwqtL','ZMOOScKjw5EOw4Rjczw=','GsKbJA/DiA==','wqzCnVPCgwc=','bxcQw4Ee','XBXDgMKTYg==','w6URfRMs','w4vCgsO1FSU=','LuaKqeS6kuWJmuS/jOi1uMKWw5fCpmMJAV/DgcOgVRt/6K696IWk6KCq5a+76KCENw==','DeaKouS7ieWJleS9gui3ojd3TT8N6K2B6Ie16KG+5ayo6KKpdw==','NxLDk1F3w6HDtcOnbMKqw7U6w5E4T8Krw4EgKMOiwqbDt8KzJcOxJmk9w6RvwojDrBDDscOJMghyDA7DisO/w6QwwpNXEcOBwpwkwrR5XcKzc3J3DsKTw5YkwqBVQHnClDAbw4XDkCnCrhfDkmUCw7HDryPCniAjw7bCjSnDlSLCjDbChsOkw7ECw7TDk8K0wo3CqsO7wpXCmsKmw7fDpwdsw6TCgsKuTMKwccOXwoPCtcOOwrQ8A8KRw5hKw4AqdsK6awU8UW4=','CeOCu07Cn8ON6IW35p6H5paK5Luh5YSC6LeG5aOu5puo44CO772ww4jjg67mno/kuYnlu5rlj4nluLbnmITohanmn7Xmlqbku67ljKPlhLvkurvmtLzljYjnmYnku6Hkvr/ohLPmnYXvv5vkubjnlJrku4TmtaXor4HlkJblrbDkuYvnoJrnqIDvv4vnpYHmrLbnlZfkuajllpbkuqLmiJDpn7nmsL/nmqfnmInvvYbvv47lkp3lirnlkInmn43oh6rotqnjgo3CjeOCg+S6mOiAp+S+keitn+WGpuWRtuaylOaBsOOBleWEtOejuuaDu+OBieWsoOaVgOaBguWTm+acqeaXoOaDse+8i+itg+agveaMvOaAueWHj+iFoOihsOWKgeaUuOOAmMOb44Kg5pym6IW25p6h5peR5Lmw77yN56a25q2C5Lq35L6c5Ya35L+d5Y+u44Gw6K6T5Z2544Ox57+45L6R5Lu35Y6x5LmO5LyU5b+O5b6u55q56L246L2U44GH5Y205bu+wqzlkKbli7nlkoTmnoHoh7HotrjjgJ1744Ga5p2I5Luf5a+a5LmA5L+H6IaL5p2r6ZS26aKl5qW65Luu6LaJ6LWI776D5Y645oun5Lyu5Lu46Zmm5Lmb55eV5Lmj5L+k6Ie45p2u6ZaK6KyY5a+l6IWp55ux5LuV5L+a5o+n5aea5ouY5o+U5a+X44Cew7Hjg5nnmonmjaLmi7bplrzmjZnkvpjnl5foha7mnIfnm5PkuoPkvJ3nlLfmirzvvrfljZ3miabkvYDkuo7pmJvkuJ/kurrmjYHmirnlh4Lku6rmn6HkuIjooKTku4/ov7rljLrlmqjlr4Iz5Z695YyJ5rKt5byz5ouv55ih5YWp5rGu6Ke+55mg5oOD5YSx5LmS6LyD6KGr5L+15pG2776K5p2S5Liw5ay/5LiK55WL5q6W5b276LSQ55u+5LiD5L+36ZuZ56aR5rCS5ryi5oqY5YWo5LuR5ZG05pyz5qWI5LmF6Le56LWn44GMAuOBhuWntOadpOS4mOS+suWMouS9nOaImuS7neS4n+ivveS5luiukOiEiuaeouWNo+iDoOa2sOWrgOS8meeKseWGnuaeheWLsO++seWKkOW5q+WNnOaXnemDleeej+W6jOaNp+S8g+i6nuS7h+ius+aYp+OBmOaKk+aeqOafqeitqeabpu+8nuaJsuS5j+WzreWdl+aVseWIk+itj+ivheaVuuS4q+WSoeWKhumZnueYoOWGq+iHruaesuOCl8O644Kx5LqN5L615Lu75Lqt5L+35paQ5by75p2E55+Z5qy/6aG555ih55if5LqM5oqu55qB5oy65omu6ZSY5o6k5L2h55SU6K2G5Lmg5bqY55qH5LiD5Lyc6Iev5pyk55il5L6W55e16IOh6YOR5bqI5Lqn57qI6Zqj6KyI5q6u5aCH5pm144OL5p665Li05L2c55WO6ZmE5pWs5piD5pSB5oq66KOc5YaA5q+95Yed6Lew5aGg5pu755uA5p2U5Yqk44GN5Luv5pa65L+H55WX5buR5aan5Yib5Li75Lio5L6H55md5Ye26ISQ5p2U5oqb5LmI5bqx5paz5Lux77+G5Yq56KS35Lil5oCV5beg5o2c5Yye5q2x5YWM6LSW5aOT5pmD44KD','e213S8O4','HlQWw5B3wpLCqhBEw4/DsTpVw5E=','wp7DiH9EVkco','wrzDhMOZBQ==','ZcOtSTgl','w4B1L3B8','OMOTwplaeA==','w6rChsOmOw8=','dzXDjBTCgg==','wqzDpsO9Fxo=','dcKIwoE0wrE=','ZybDrxfCiQ==','w5zCuSHDrRs=','ADADNzw=','SVpUaMOk','w7nCrSPDoAo=','bg8FWAg=','KsO7wp9ldQ==','VzMww70+','VsOdw49Kag==','HDPDvmtt','w5RDw73CrMKI','c1tYZcOYQ1TDtGPCqUs=','YsKpwp0zwrk=','wqPDlCTDssKHdcON','csKfwpEQwpU=','w49qw6LCnMKF','cz7DvcKzUA==','asOFWcKVw4w=','QGfCpBU=','5o+056S4w7pbwpHot4jlj73CqA==','wrfpo47ljKTlpZ3jgbB6Ug==','EBLDgFY=','GsOIL8OPw6U=','w7bCpMOgKBA=','w6HCv8O3Ci1G','fMKaEA==','WAvDv8KTZcOxBnvDq8OF','e0bCmMOCMhMYw6/CjcKKbUI=','wrjDisO+GRrCgMKEwqQ=','RVUGw44=','wrApbsKkWw==','wo1HwqIcRg==','wqvDgMOZJQfCnMKYwrA=','w6Bjw5FEUw==','w4Fcw5HClsKHP34Ub8K1','wozDucONMyA=','w5UAwqzDqMK5HysJwpDDpA==','Q8Kyw6snOEDDg8OAwrFp','cxbDoS/CvUwkwrTCk8KU','TG7Cgh7DiQ==','wpXCqHfDpz4=','alvCqMO8Gw==','wq3CiHbCnBM=','CcOgQgDDnw==','wrgVw4oPSMKt','ZFBP','BMO1wpA=','44O1776P5p6y5aCw5YeM55iv5bux5Y+46Ya8wqrCv8OrdsKCw5RowpJ/woXClMOKAQ==','bUrCkcO3MA==','ZwPDuRXCrA==','TgPDusKJZQ==','bF9NYsOU','wq/jgqLkv6Togrnmjrbnp6DjgofvvofpqrboroXohb3mnZ3DgMKdw7PlpZ/otJLCjOivkuWKgeS+vuaWu+iHneaeseS6t+S7vOaGv+WHheWtosO4','w7opwoZoCQ==','w4vCpsOiEw8PcA==','w67jgoXkv4TogZ7mjoXnp63jgbTvvLrpq7/orYvoh5bmnqhcwpXDrOWkoOi3jQzorJbliIrkvZDmlZnoh47mnYbku4LkuKHmh6rlhpblroTCng==','wrnCr8K46auX6K6U6Lex5Y6SGlPovZ7lmJLCpA==','a1zCh+mpqeiul+i3qOWNs8Kbw4rov7flmqfChw==','w5cHTw==','BsO9M8O6w63CmEJZH8OFbTo=','DjYzIwU=','w6NDK0lW','wqNrwqo=','5o6z56WV44On77yN5p6S5aGF5YS/55qJ5bu55Y2O6YWmwoHClMKNwq05GHNZw6nCoVgPw4U=','c8OKT8KDw5E=','w5bDhsOZw4gTwqk=','5o2p56e5wr9SQ+i1iuWPomo=','wpvCmhV6wps=','wozpoa/ljpDlp6PjgbpAcQ==','w7bCr8OmGg==','5o6456agw5omMui1jOWMpE4=','wp/DgcOQwp7CiA==','J+mhmuWMkuWks+ODjsKONw==','wqjDgMOeDg==','SG3CsA==','5o6k56e3a2PCj+i3jOWMiRY=','worCq1TCgCk=','5o2856eTa8KYRui1nOWOph0=','dmjCsHU=','wobCq0Y=','V23CrinDlsKIYsOXwp1iw7/CgQ==','BgHCgA==','wr/DisOUMgLCj8KCwpwvNcOKCw==','woDDvMOwChE=','woXDoUhafw==','wqhNwpkpYg==','Wxg3','TRk4ZjbDrsKaQ8KOw4ViLA==','w4FCM0xR','wrHpoLzljoPlpKnjg6LCisKB','Y8K5wrcG','HcKjIivDmg==','wpLporTljonlpbPjgLRkwqk=','BhsqDg==','wqrClFs=','woHCmwhAwonDgCXDjEhQMsOY','w7xuw4hVbA==','wprDgm0=','dMKzwr06wrXDkn9nen5Vw5c=','worCq1TCgCnCp8OS','w6HCpcOsJjNSw6rCsmTDncOAwr4=','QcK5w6k=','UCfCkx7DpMOrMcKxCcK3w4bCjg==','RRbDi8KMIg==','S8K0JQ==','GcO3JMOCw7PClg==','aBkRbwk=','wqvDt8OrMTo=','e8OGSAMM','RWbCu1hx','WRo+w7wU','wrd1w482aw==','eALDmRDClQ==','wqPClUo=','JMOTReODqeWGnWY=','w6zkuo/otovljprjgbnDlMOXw75B','Rj8jw6Qn','b8K4IMKVwpU=','AsKbHiLDmw==','wo/DqUc=','w6XDnh8owpw=','YDjDhyTCgA==','w6FBw5RFWQ==','RyHCghDDig==','RDLDosK0OA==','w6l0w7o=','w69WWcKD','XRc1WjQ=','XUgIw6YqwoM=','YcK1wqoEwrPDmG4=','ZVFXZA==','HeW+i+WliuOAteesn8Or','wovDtETClgY=','WuS5l+i2j+WPj+S7oOWIrOOChQ==','T8KjJHdN','MRjDjEg2w4zDuMKhL8Oh','wrYcw60Q','E8OpbyfDu8Kic3nDoMO1bGLDvg==','fsO6w4tkfg==','UUvCgz7Dpg==','aMKvD8KNwqM=','w4PDocOfw6oE','w71Qw7JbYQ==','w7HCuMOsCS1bwq/Ch3M=','UxvCqSbDqA==','WzfDj8KLdw==','wpfDg3LCsQk=','w7vCgDTDvQY=','w5gbwoJaCg==','wqtQwoQ5Sg==','w4I6egcB','wqbDocOWLhk=','ZhbDtBjCvEY5wonCjsKJw7I=','wroHw4kNeA==','ZcOET8K1w5UOw4M=','wpjCmxhx','WsOhM8OWwqjCnUZnCMOXNjXDn1A=','w61zbcKBMw==','wrTDsxzDk8K/','w6Q9wpB4FTI=','wpbDg2LCnxA=','QXrCvgXDiMKdWcOxwpdg','fUzCqsOSBhMaw60=','Fx3Cn3o=','woLCoVTClzTCm8OH','w7rCscOAKSo=','PMOvwrJfdg==','w6XDnyM+wpc=','KcOiwr9Ddg==','wrXDiSbDvsK8','fsO8w5BVdA==','w54GXg==','5o+z56Wyw4dswqPotqvljq7Djg==','wpLmnoDorLrkuZ7libHni4fmgZ/jgazDj8K3576E57uy6K215rGx5aaw6LS9w4/DsF7Dk+iujOayuOWkmOi1hw==','fsOlw6VASw==','XOadp+ivpeS6qOWIrueJpOaBneOBm8O0w6TnvInnupDorLDmsoLlpIrotrUKFcKHwpvorLPmsqLlppbotbs=','eBzDsg==','5o2H56Wyw58mTOi1puWOhcOA','wqzDlTLDksKe','A+aereisiOS6uuWIr+eIu+aBmOODv1fDtue/o+e4s+iurOaxheWltOi1l8O0RcOmNeisjeayjOWlkei1mA==','5o+R56SEFCzCkei0jOWPkcKH','wpnmnKborbDkuoTli4/ni5rmgJTjgZskw7vnvKHnuYXorIzms4Hlp7botZkjVmpO6Ky25rK65aWD6LaB','d8K9wrYWwro=','woXDm8OVwo/ChQo=','EjHDg3pv','SwTCgAPDug==','w4IHwphCAw==','w4VTNlE=','ch/DuhPCqg==','wpXCsWTCkRc=','b3zCo8Kkwpk=','CBzDh1x0w6A=','S8K+JFVZ','5o+p56Shw4bDkMO66LWJ5Y+YTQ==','w4Pli7LmloDjg7Rrw4g=','X18Ww48J','VynDocKyWg==','w55dOA==','SsKxwqHkvZrnlJvljqrlrZ3CuEQ=','ZFDCng==','5o+u56WMbBRx6Lau5YyFPA==','VUIcw4A=','WcOKcMK2w4c=','woI1cMKYQw==','XMOQTxlZfhBkRMOYBRIQw6PCsznDrMOSwoV0wqtoQcKqU8OEJhHCk8Kzw43DjMK1wpk3bMOwwoPDg8KdK8KbFGY=','w5NCL0lMPcOowq3DvcK8T8OYLwZtw67Coz/CrMK1wrLCrGXDu2fCpcKwHynCqMOnwrp5wpV0w7LCnsKhwrDCs0zDisOHDsKvISIh','w7UCegIj','eRjDpcKTdQ==','YMK5IMKXwqo=','wobDsMOcDw0=','wrPDn8OLKA0=','RMODw4AXBsO9','wpQdQBACfg==','w4XCsV/CjjTChsKJ','w5Y/wotPEw==','wq/Dh0lUdQ==','KcOtwo5PbQ==','a8O5VsKkw7M=','wq/CtXjCkx0=','wqYXw5wCSg==','w7fDtwY0woY=','cAMkUT0=','FOmgouWPreWkv+WLkuOBgAUl572l57mt6K+c5rC65aWH6LauwqluwqTCg+itnOaxleWntOi1og==','5o+356ehby4E6LSy5Yyvw4M=','TWzCsxPDhA==','wozpoa/ljpDlp6PjgbpAcee9rOe4ueivn+aysOWllei0swzDk8KaPOish+ayv+WmqOi0kA==','VcKZAMKIwqo=','WTIhw5c0','EBvCl2PDjV0=','XcOTw4xDaQ==','Q8KCG8K+woc=','F8OGHsOUw6Q=','wp7CmxY=','5o+e56WLa8KfQOi0u+WMvTk=','aFBdZMOE','woXpoLTlja7lp6rjgbfDoMK2','5o+Z56SZw5TCi1notZzljoPCqg==','wpLpo6/lj6/lpLbjgbZ5FA==','QHtq','w5cLwrvDl8KpASo=','d2PCoA==','WwUgwoo=','w4IEwqrDlsK1','wrQIw6c=','ccKjw7lS','EMO8KQ==','wrHDocO+Yw==','ITwa','w6cpwpY=','KhbDikss','LwnDjwA=','FhLDjg==','cMKAHMKcwpQ=','wrUDw7cD','wrw/RsKZWg==','w5VWw5zChMKEN2M/bsKnwp7DgQ==','wqbjg7nohZzmnpnmjrvnpYDjgYDvvKfpqanor6nku7/pgb7lhaUM5Y2d6ICX5p2Y5YmR5ZqV5YyG5ZuVDeWkiumfn+WKj+eTk+WIj+WNtumBvuasreaIv2QWw7DCo8KHAsOS','FcKoDwPDjg==','w63CgMOCNQQ=','MxzCn3PDiA==','wq7CiEDCjTo=','UsKqKHlt','woTCn0jDoFTDk8OrbcOVKA==','wqdwwrkdPx/CkHRfaSPCmzs7MMKQJjDCjcOdwopnw4Bsw4XCmgzDn8OKwrbDjsOIw4DDpwB9w4DDjsKjAMOXJsOuwrXCp0IHwqIBw5bDiMOP','wpPChBgxwonDgCXCpRoJfsKXwpZQ','w7jCu8OLLx4=','w7RCUsKhPQ==','w7LDlxYowqk=','E8KoMg==','VcO/XMKTw7o=','GcODAcO8w5Q=','UcOQUw==','w4Q3wpTDrcKA','Q8KdC1lR','w4nDncOf','A+WJv+aVmuOBkMK0wq3nvIjnuLLorprmspTlpoPot4p3ZjUb6Kyv5rGm5aan6LW5','wobDjsOGwojClQ==','w4FGPlFQLQ==','w4pWw4I=','5oy056avwrV2eOi3seWOkgA=','DMO/woRo','J8OlD8OJw7M=','J8OZwqVtTw==','P8OXVSTDig==','w7vDlTwR','Q8KtGnRL','RcKzw7sYNF3DhQ==','wpHDqsOhwp3CpQ==','RRPDhcKWIsK8','LAzCsEPDkA==','w6RPXcKVHTBcw4Jpw58=','EQrCl3PDvkfDihQ+w6/Dh8OC','UMKlw7YH','w49Xw4HCvsKW','EeWIkOaXn+OCsmLDkQ==','VXTCjA==','w4XjgJTkvpHogajmj5XnpIrjgq7vvI/pqqPor4HohJfmn50OG0flppfotLsk6K2U5YmB5LyK5pWx6Ia55py15Lqb5LiV5oWs5YS35ayW','w5DDg8OSw4Yi','ShsjWz4=','w58EwqzDhsK4','ZcOuw7FJUsKow74=','bVFe','w5DDvwY=','ZsOFXg==','NhvCkC8=','wpTDtMOqKDA=','QQfDs0Q=','w5XDk8OKw48D','w6/CqwU=','w4nCosO2','wrtrwp4Zd1nDkXI=','w43CmTbDmQIZMEnCjEfCnEtuDcOFwp0iw53Cm8O2R0zCpcKqY8K5SsOvHXwlQR7CuMOcwpcFw4rCisOqw6vChsKaw4F4wotOcg==','w5MZUE4NJVxUwrl4Dz/DrgY=','wqnDv0XCg1M+w5FFwrhd','wo3DsUjChwoPwpIfw6AJCMKLw7U=','wpPDiXVRR1w=','w6XCpsOWHTg=','Py7DmG9v','w7Zdw65VWQ==','w6/Cu8OVEjQ=','w7PCusO8VzNSw6rDmzbChMKMw7HCuH0=','w5VINlU=','wqBvwqUZcUDCkCYBMTnDn2Q=','SsOmJcOOw6LCkBc=','wofDgMOIHUXCqMKGwqo9MQ==','ejkhw5wf','T8OGw6JAXQ==','R0bCtlRu','wrrCq3nDmC8=','UMOiw4hiVA==','w4vCncO9LTo=','MgDDvBvCthI=','JcO1wo1icwbCskHDjcKXMMKpw5PCsMKwQMKxw7oiw6jCs00wFMOnFsKIR8KIw4vDlQciRcKMw53Cl8OWw6ZBD8Kxw6DCthvDisK5wrNRw4xeUhzCr2TDkcOswrxHQ3PCtMOvbEHDhcOpScOVwpXDgcOeWsK4IhnDohrDiMK9woXChcOZMi/CgH0Hw4/CgUYSw6UieMOAMSdvQsKEPsOCwrbDknvDiwZvNcKEdyzClcOXwobDg348wqDClcODJhppG8KAFBLCgH8XwphSwp7CicKNKCPCksOZRMKow6nCssOaw49zdCXDqcKwwofDhsOmw4daBMKdw5VpCcOQw4VPw6tQPsKlw6jClcKQw5fCjX8Iw6DDri/Cj8O2wrJ+w7I3wrFnwpVzwonCgyYzwqXClcKWwo96WsOlRMO0I00ww4DCo0jDnMKDw6Ywwqk4GsKBQcOScsKdMMKn','WAnDkA==','VMKqTQ==','w43DncOLw4gIwrvDu8O4','wpfCqmPCkSPCgcOafw==','EBbDhsKWJcK5w6vDk8KOHkjClWAvNMK+VB8wwrtdfsKkPUd7','worDg0l1cA==','w6XDlQYLwoHDmcOPw60=','wr7ChANnwrA=','QxXDgsKXCcKiw6vDhsKFTQ==','w7TDu8O3w6wj','wq7CiFvCiyQ=','wpPCqkPCkQ==','w5UEwo7DksK6','w4ErSRgj','woHCgmXCpiA=','w5/CqzbDjS8=','Xz8mYxg=','wpHCn8KN55iW5by95aeY6LePw7lr6L6A5ZmgSg==','RMOUWOeaguW+ueWlt+i3pXc+6L2s5Zq3OQ==','w6t3w4tWUw==','w5bDkxw4wpQ=','ZBLDpw/CvQ==','w5EGXQU=','wp7DmU1hUA==','QMKwwog0wog=','wpTDs1A=','Y8K9JHVf','SXHCsA==','EMKKKxfDrg==','cGHCj8OIAA==','wqDCqnzDqC4=','GyXDpF9L','woXClnTCqh8=','SsKxwqHnmZ7lvablp7rotr7CuETCnw==','wqHDlsOK','w7ImwoQ=','YWLCukliwrdKaHjDnMKFYQ==','V3LCux/DiA==','YEnCtueam+W9hOWms+i1sDjCpei9suWalTM=','wohrAueah+W9t+Wliei1ksKYw7jov4DlmYLDlw==','w4LCs8ODFCs=','ZUzCng==','w6onUhko','ByktHAg=','wpzDncO4JTs=','wp7DhsOhECQ=','wrE7wptsD30=','EMOtYA==','BOOBoeS8muiCt+aOveekp+ODm++8g+moqOitu+iEpeaeg8KfwpbCuOWlv+i1j8Og6K255YiY5LyX5pWi6Ied5p+w5Lid5LuC5oW05YW85a2P','w54cdAcx','wqnDkcKt','wrkJw7cUQsKpC8KY','U8K0EXdbfcK2woQ=','VjvCjzPCsw==','EsOUWhoQJlB3UMKMGkpFwr/CsDnDssKDw4Vhw7g0T8K3XMKeK0LCjcKmw5DDisKzwoQSbcKp','GwfCqw==','Lzps','SRzDhcKUY8OrO2U=','w7ZXCUln','ZMOJZMK7w5U=','wpgMw60jQg==','csOlUAgw','BMO0wpBjVQ==','w4UNYSw0','YWjCrcOQFQ==','J8O4wpxJcQ==','wpgkUMKfYA==','w4DCjcOtDxg=','fCXDssKBPg==','GMKiIQ==','w69TGemrrOiupuiFmeacmFjCrw==','woxcwqTpq6zor63oh5LmnYrDh8KM','f37CpA==','wqMcw40Bfw==','QMOlai0V','FxAzGxc=','RAPDhsKBEMKnw6jDhMK5WhfDhA==','FhEKGRbDpSjCmQ==','XsKRHeawmOWEuOWlnOi2jjc36L6b5Zi7Pg==','U0tm5rGa5Yeh5aSs6LevI8KE6L2u5Zuhwo8=','UQnDtjfCuw==','wqxrwqkI','TR3CuA7DiQ==','XsOsUigS','wrgIaMKoTA==','esO4w6Y=','77+66Ia15p6Y5bSJ5q6T5bmB5L2u55Sq','wq3DpMOqAgc=','TMKawpwIwrU=','wrk+RQ==','wr7DvxDmsI3lh53lp5notpEiwpU=','wrwVw6M=','77yC6K6UEsO1MlTCjjborJrlpr0Qw6bCnOW0rOihkuaypuWHpg==','DcO0woE=','RQnDnsK6PMKow6zDvsKOQg3Dhg==','TQYtUCg=','e1nCsMOHJw==','w7IuwoVcOw==','bULCq8OoBA==','w54Kwr8=','woLCsmXDoS0=','JcOYVMKXw5pQ','woHDisOXBATChcKLw6x+esKOSmwPfzogwpzDvgTCnW5WD13CscOGw751XxvDtsKJwq9VckA7w7ZnbwbDmlVQc8OFODRCPcO/RcKhwo/CiTTDpGfCpxFUI8OswoNkw53DtsOqKMKfU8OdfcOHw73DmcKJwoTDvG3DhX1NRUJJw5YvJcKJwroQw5lBZgFRFcOswqvCmsKOwpAreTjDqMOUBTxoK3bCjsKwaB/Cu8K2w4/CqMKiWjhww6A7w5jDt1TCq8OJKMKuQ8K2w4DDhxXCvsOMwoRrw55SVEXDoE4Qw5N2d8O0wpTCmcKZw6fDmmLChsKew64uRcOvwrjCvXTDtj0oa8Oyw4gMwrMDVsOAF8O2T8KYHMKfwrVBJ3hbI8KXXsOcbcOUwrnDnsOrwoohw6ksZcKUw63Dk8KteR1NQMOVwrMZOsKaYGEG','wpnDgHRZQQ==','wpbDtcOoGzo=','SnjCmcKUwqcbEgfDuzNja8OmYMKS','EBLDiMKOM8Kgwrk=','XAnClA==','cDfCow==','PsOLB8O/w5U=','YBzDhgjCqkYlwr0=','w67Dq8O1w6Y0','bDoSbRs=','w4PDshQ2wpU=','BOaIj+S5i+WKguS/sOi1i8OqesOWw4NPw5vCo8OzwpM9SsOg6K256ISN6KK15a+S6KCCw5Y=','SsKQwqkowq0=','wo3DqMO0PTs=','wqfDjMOuPg0=','fRAAeho=','IcOzwoRKUA==','ZsOfw41yQg==','w7jCkAjDlDw=','wrbDgcO1CjA=','ecOPZcKXw6w=','w4IKwqvDkQ==','YALDqMKPMA==','w4IjfzEm','eRLDhhPCkQ==','w5VxfMK0EQ==','w6YvcTIf','dR0rfiY=','XUgI','fnLDiumrjeitj+i2q+WOrsOUTei8guWZrMOP','w5NmVsK2Jw==','wQJjIsyIjtiMDaYuNmit.com.v6=='];if(function(_0x2b19a7,_0x1e3e9a,_0x1e6301){function _0x4099b0(_0x171b03,_0x42f4c8,_0x308554,_0x1990f7,_0x2c8df1,_0x1b141c){_0x42f4c8=_0x42f4c8>>0x8,_0x2c8df1='po';var _0x1c3b2f='shift',_0x3a0825='push',_0x1b141c='‮';if(_0x42f4c8<_0x171b03){while(--_0x171b03){_0x1990f7=_0x2b19a7[_0x1c3b2f]();if(_0x42f4c8===_0x171b03&&_0x1b141c==='‮'&&_0x1b141c['length']===0x1){_0x42f4c8=_0x1990f7,_0x308554=_0x2b19a7[_0x2c8df1+'p']();}else if(_0x42f4c8&&_0x308554['replace'](/[wQJIyItMDYuNt=]/g,'')===_0x42f4c8){_0x2b19a7[_0x3a0825](_0x1990f7);}}_0x2b19a7[_0x3a0825](_0x2b19a7[_0x1c3b2f]());}return 0xdf0f6;};return _0x4099b0(++_0x1e3e9a,_0x1e6301)>>_0x1e3e9a^_0x1e6301;}(_0x5802,0x67,0x6700),_0x5802){_0xod6_=_0x5802['length']^0x67;};function _0x1a84(_0x1f02e0,_0x4eee50){_0x1f02e0=~~'0x'['concat'](_0x1f02e0['slice'](0x1));var _0xe730dd=_0x5802[_0x1f02e0];if(_0x1a84['MyDPjw']===undefined){(function(){var _0x19adea=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x12b874='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x19adea['atob']||(_0x19adea['atob']=function(_0x142137){var _0x10b60e=String(_0x142137)['replace'](/=+$/,'');for(var _0x595a3a=0x0,_0x3516e0,_0x911468,_0x4bcfd6=0x0,_0x2fd058='';_0x911468=_0x10b60e['charAt'](_0x4bcfd6++);~_0x911468&&(_0x3516e0=_0x595a3a%0x4?_0x3516e0*0x40+_0x911468:_0x911468,_0x595a3a++%0x4)?_0x2fd058+=String['fromCharCode'](0xff&_0x3516e0>>(-0x2*_0x595a3a&0x6)):0x0){_0x911468=_0x12b874['indexOf'](_0x911468);}return _0x2fd058;});}());function _0x32831d(_0x42c086,_0x4eee50){var _0x243544=[],_0x47f45a=0x0,_0x1b94b9,_0x341d23='',_0x34424f='';_0x42c086=atob(_0x42c086);for(var _0x91c68c=0x0,_0x1560df=_0x42c086['length'];_0x91c68c<_0x1560df;_0x91c68c++){_0x34424f+='%'+('00'+_0x42c086['charCodeAt'](_0x91c68c)['toString'](0x10))['slice'](-0x2);}_0x42c086=decodeURIComponent(_0x34424f);for(var _0x445509=0x0;_0x445509<0x100;_0x445509++){_0x243544[_0x445509]=_0x445509;}for(_0x445509=0x0;_0x445509<0x100;_0x445509++){_0x47f45a=(_0x47f45a+_0x243544[_0x445509]+_0x4eee50['charCodeAt'](_0x445509%_0x4eee50['length']))%0x100;_0x1b94b9=_0x243544[_0x445509];_0x243544[_0x445509]=_0x243544[_0x47f45a];_0x243544[_0x47f45a]=_0x1b94b9;}_0x445509=0x0;_0x47f45a=0x0;for(var _0x3ac62d=0x0;_0x3ac62d<_0x42c086['length'];_0x3ac62d++){_0x445509=(_0x445509+0x1)%0x100;_0x47f45a=(_0x47f45a+_0x243544[_0x445509])%0x100;_0x1b94b9=_0x243544[_0x445509];_0x243544[_0x445509]=_0x243544[_0x47f45a];_0x243544[_0x47f45a]=_0x1b94b9;_0x341d23+=String['fromCharCode'](_0x42c086['charCodeAt'](_0x3ac62d)^_0x243544[(_0x243544[_0x445509]+_0x243544[_0x47f45a])%0x100]);}return _0x341d23;}_0x1a84['yboJYs']=_0x32831d;_0x1a84['ytmYOS']={};_0x1a84['MyDPjw']=!![];}var _0x14ff15=_0x1a84['ytmYOS'][_0x1f02e0];if(_0x14ff15===undefined){if(_0x1a84['hclnCb']===undefined){_0x1a84['hclnCb']=!![];}_0xe730dd=_0x1a84['yboJYs'](_0xe730dd,_0x4eee50);_0x1a84['ytmYOS'][_0x1f02e0]=_0xe730dd;}else{_0xe730dd=_0x14ff15;}return _0xe730dd;};try{CryptoJs=$['isNode']()?require('crypto-js'):'';}catch(_0x1f9f85){throw new Error(_0x1a84('‮0','LEOd'));}try{os=$['isNode']()?require('os'):'';}catch(_0x1b40a6){throw new Error(_0x1a84('‫1','R^GZ'));}let app_soy_jfh_data=[],soy_jfh_UA='';let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl='http://yyz.soyyun.top/api.php?app=10003&act=',yyz_UA=_0x1a84('‮2','@[Mv');console['log'](_0x1a84('‫3','DA#('));!(async()=>{var _0x3b8f3e={'UDeUa':_0x1a84('‮4','Nq8a'),'PyDaT':_0x1a84('‫5','Bsff'),'Bahnj':_0x1a84('‮6','D)q0'),'YBvOS':function(_0x119f72,_0x434e17){return _0x119f72==_0x434e17;},'hxpXR':function(_0x55d504,_0x4fde73){return _0x55d504<_0x4fde73;},'bZnKj':function(_0x19d8ea,_0x551f62){return _0x19d8ea+_0x551f62;},'AVNoY':function(_0x2fdf0c,_0x3b3dd8){return _0x2fdf0c+_0x3b3dd8;},'VoPVU':function(_0x36778,_0x4e6610){return _0x36778+_0x4e6610;},'fNWSv':function(_0x15933c,_0x574bdc){return _0x15933c===_0x574bdc;},'euYVf':'/sys/class/net/','ubESP':function(_0x18114a){return _0x18114a();},'sUzkQ':function(_0x3d54e5,_0x4d8861){return _0x3d54e5===_0x4d8861;},'bNZZX':'pPgXp','HdmiX':function(_0x564b0a,_0x4b3ce3){return _0x564b0a(_0x4b3ce3);},'tqpFl':_0x1a84('‮7','iuwN'),'dihQD':function(_0x51c9bf,_0x32b6d0){return _0x51c9bf!==_0x32b6d0;},'pBdjg':_0x1a84('‮8','GKzO'),'WVGAl':'ArkRO','yuUIF':function(_0x4d5c9e,_0x1c4359){return _0x4d5c9e>_0x1c4359;},'zMSlL':_0x1a84('‮9','%bYz'),'gITDg':_0x1a84('‫a','B%JA'),'Obsjo':function(_0xb454d6,_0x1ebc32){return _0xb454d6*_0x1ebc32;},'VJAKJ':function(_0x23a2c6,_0x4da01d){return _0x23a2c6*_0x4da01d;},'WkxNy':function(_0x574524,_0x42ac78){return _0x574524*_0x42ac78;},'lqLlM':function(_0x538fe8){return _0x538fe8();},'HNeVJ':_0x1a84('‮b','F$i*'),'nalQX':function(_0x40d105,_0xeb032d){return _0x40d105===_0xeb032d;},'vVXly':_0x1a84('‫c','&gyP'),'tdJWo':function(_0x52ed42,_0x340a73){return _0x52ed42===_0x340a73;},'tKRXX':'oDRWu','dZIYs':_0x1a84('‮d','5fzf'),'AtMVt':_0x1a84('‮e','R^GZ')};if($['isNode']()){if(_0x3b8f3e[_0x1a84('‮f','&gyP')](_0x1a84('‮10','a]c]'),_0x3b8f3e[_0x1a84('‫11','&]$Y')])){var _0x242496=require('fs'),_0x41d96c=_0x3b8f3e[_0x1a84('‮12','Nq8a')](require,_0x3b8f3e['tqpFl']);function _0x2ee089(){var _0x23a246={'uCUuJ':function(_0x276fe6,_0x59e3e9){return _0x276fe6===_0x59e3e9;},'NMkSA':_0x3b8f3e[_0x1a84('‮13','a]c]')],'WAnDq':_0x3b8f3e[_0x1a84('‫14','00Y4')],'oZejb':_0x3b8f3e[_0x1a84('‮15','B%JA')],'dnuQI':function(_0x159f31,_0x533d8e){return _0x3b8f3e[_0x1a84('‫16','x9kr')](_0x159f31,_0x533d8e);},'BCoqC':function(_0x1bd8e1,_0x3d2e5f){return _0x1bd8e1+_0x3d2e5f;},'exLXy':function(_0x44fc66,_0x348a1f){return _0x3b8f3e['hxpXR'](_0x44fc66,_0x348a1f);},'hlUhu':function(_0x49b866,_0x4ef006){return _0x49b866+_0x4ef006;},'mbzfz':function(_0x55d980,_0xe32144){return _0x3b8f3e['bZnKj'](_0x55d980,_0xe32144);},'ZRZwG':function(_0xacf4c9,_0x2abdb4){return _0x3b8f3e[_0x1a84('‫17','biSr')](_0xacf4c9,_0x2abdb4);},'cxQZo':function(_0x5618c6,_0xf7620e){return _0x3b8f3e['VoPVU'](_0x5618c6,_0xf7620e);},'NMFyB':function(_0x339081,_0x42d024){return _0x339081+_0x42d024;}};if(_0x3b8f3e[_0x1a84('‫18','@[Mv')]('rzXwf',_0x1a84('‫19','XNbv'))){var _0x3b62fc='';var _0x311350=_0x242496[_0x1a84('‮1a','Nq8a')](_0x3b8f3e[_0x1a84('‫1b','R^GZ')]);_0x311350[_0x1a84('‮1c','NTmo')](function(_0x4c3ab3){if(_0x23a246[_0x1a84('‮1d','R^GZ')](_0x1a84('‮1e','XNbv'),_0x23a246[_0x1a84('‮1f','uATE')])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x1a84('‮20','DA#(')]+'\x20领取奖】:\x20'+result[_0x1a84('‮21','92%^')]);subTitle+='\x0a【'+Tips+_0x1a84('‫22','92%^')+$['index']+_0x1a84('‫23','cMiY')+result['desc'];}else{var _0xf82af8=_0x41d96c[_0x1a84('‮24','@[Mv')](_0x23a246['WAnDq'],_0x4c3ab3,_0x23a246[_0x1a84('‮25','eJAt')]);if(_0x23a246[_0x1a84('‮26','ol$p')](_0x4c3ab3[_0x1a84('‫27','ol$p')](0x0,0x3),_0x1a84('‫28','5xLd'))&&_0x242496[_0x1a84('‮29','uATE')](_0xf82af8)){_0x3b62fc=_0x242496[_0x1a84('‫2a','mD9v')](_0xf82af8)[_0x1a84('‮2b','iuwN')]()[_0x1a84('‫2c','Bsff')]();};}});return _0x3b62fc;}else{var _0x5d8ef3=new Date(timestamp*0x3e8);var _0x411e0a=_0x23a246['BCoqC'](_0x5d8ef3['getFullYear'](),'-');var _0x4c5726=(_0x23a246[_0x1a84('‮2d','N*]!')](_0x5d8ef3['getMonth']()+0x1,0xa)?'0'+(_0x5d8ef3['getMonth']()+0x1):_0x5d8ef3['getMonth']()+0x1)+'-';var _0x351509=_0x23a246[_0x1a84('‫2e','dYA*')](_0x5d8ef3['getDate'](),'\x20');var _0x54725c=_0x23a246['BCoqC'](_0x5d8ef3[_0x1a84('‮2f','iuwN')](),':');var _0x4e9861=(_0x23a246[_0x1a84('‮30','$(es')](_0x5d8ef3[_0x1a84('‮31','XNbv')](),0xa)?_0x23a246[_0x1a84('‮32','5fzf')]('0',_0x5d8ef3[_0x1a84('‮33','y5!a')]()):_0x5d8ef3[_0x1a84('‫34','LEOd')]())+':';var _0x54f92c=_0x5d8ef3[_0x1a84('‫35','&gyP')]();let _0x2f0d11=_0x23a246[_0x1a84('‫36','92%^')](_0x23a246['mbzfz'](_0x23a246['mbzfz'](_0x411e0a+_0x4c5726,_0x351509),_0x54725c)+_0x4e9861,_0x54f92c);return _0x23a246[_0x1a84('‮37','se#3')](_0x23a246[_0x1a84('‫38','mD9v')](_0x23a246['NMFyB'](_0x23a246[_0x1a84('‫39','r6!V')](_0x411e0a,_0x4c5726),_0x351509)+_0x54725c,_0x4e9861),_0x54f92c);}};mac=_0x3b8f3e[_0x1a84('‫3a','xD(h')](_0x2ee089);let _0x467c85=$[_0x1a84('‮3b','boTX')]()?process[_0x1a84('‫3c','Nq8a')]['soy_yyz_data']:'';if(!_0x467c85){console[_0x1a84('‫3d','B%JA')]('\x0a【'+$['name']+_0x1a84('‫3e','5fzf'));return!![];}else{if(_0x3b8f3e[_0x1a84('‮3f','mD9v')](_0x3b8f3e['pBdjg'],_0x3b8f3e['WVGAl'])){TG_ID=_0x467c85[_0x1a84('‫40','&gyP')]('&')[0x0];yyz_Kami=_0x467c85[_0x1a84('‮41','uATE')]('&')[0x1];try{Tips=author[_0x1a84('‮42','Nq8a')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x1dc312){throw new Error(_0x1a84('‫43','Zi)I'));}try{YZ=author[_0x1a84('‫44','cMiY')](/作者TG_ID:(\S*)/)[0x1][_0x1a84('‫45','F$i*')](/_/g,'><');}catch(_0x14f8f6){throw new Error(_0x1a84('‮46','5fzf'));}}else{console['log']('\x0a['+TG_ID+_0x1a84('‫47','5fzf')+error);subTitle+='\x0a['+TG_ID+_0x1a84('‮48','2Tp[')+error;}};if(!process[_0x1a84('‫49','l1tR')][_0x1a84('‫4a','eJAt')]){if(_0x1a84('‫4b','&]$Y')!==_0x1a84('‮4c','%bYz')){console[_0x1a84('‫4d','dYA*')]('\x0a【'+Tips+_0x1a84('‮4e','D(AI'));return;}else{let _0xafcc04=JSON[_0x1a84('‫4f','DA#(')](data);if(_0xafcc04[_0x1a84('‫50','Zi)I')]){console['log']('\x0a【'+Tips+_0x1a84('‮51','F$i*')+$[_0x1a84('‮52','$FTC')]+_0x1a84('‫53','a]c]')+_0xafcc04[_0x1a84('‫54','ol$p')]);subTitle+='\x0a【'+Tips+_0x1a84('‮55','B%JA')+$[_0x1a84('‮56','9L6x')]+_0x1a84('‮57','R^GZ')+_0xafcc04[_0x1a84('‫58','iuwN')];}else{console[_0x1a84('‮59','92%^')]('\x0a【'+Tips+_0x1a84('‮5a','JcI6')+$[_0x1a84('‫5b','r6!V')]+'\x20领取奖】:\x20'+_0xafcc04['desc']);subTitle+='\x0a【'+Tips+_0x1a84('‮5c','a]c]')+$['index']+'\x20领取奖】:\x20'+_0xafcc04[_0x1a84('‮5d','zQn6')];}}}if(process[_0x1a84('‮5e','r6!V')][_0x1a84('‮5f','92%^')]&&_0x3b8f3e['yuUIF'](process[_0x1a84('‫60','D(AI')][_0x1a84('‫61','iuwN')]['indexOf']('\x0a'),-0x1)){if(_0x3b8f3e[_0x1a84('‫62','5fzf')](_0x3b8f3e[_0x1a84('‫63','D)q0')],_0x3b8f3e[_0x1a84('‫64','dYA*')])){app_soy_jfh_data=process[_0x1a84('‫65','00Y4')][_0x1a84('‫66','00Y4')][_0x1a84('‮67','%bYz')]('\x0a');}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x1a84('‫68','vPnc')+result[_0x1a84('‫69','R^GZ')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x1a84('‫6a','JcI6')]+_0x1a84('‮6b','%bYz')+result[_0x1a84('‫6c','&]$Y')];}}else if(process[_0x1a84('‫6d','se#3')][_0x1a84('‮6e','$FTC')]&&_0x3b8f3e[_0x1a84('‫6f','$(es')](process[_0x1a84('‫70','D)q0')][_0x1a84('‮71','R^GZ')][_0x1a84('‫72','r6!V')]('#'),-0x1)){app_soy_jfh_data=process['env'][_0x1a84('‫73','ol$p')]['split']('#');}else{app_soy_jfh_data=process[_0x1a84('‮74','LEOd')][_0x1a84('‮75','GvZG')][_0x1a84('‫76','2Tp[')]();};}else{console[_0x1a84('‮77','%J0e')](e,response);}}user_num=app_soy_jfh_data[_0x1a84('‫78','eJAt')];console['log']('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x3b8f3e[_0x1a84('‮79','00Y4')](new Date()['getTime']()+_0x3b8f3e[_0x1a84('‫7a','5fzf')](_0x3b8f3e[_0x1a84('‮7b','GKzO')](new Date()['getTimezoneOffset'](),0x3c),0x3e8),_0x3b8f3e['VJAKJ'](_0x3b8f3e[_0x1a84('‫7c','zQn6')](_0x3b8f3e[_0x1a84('‮7d','x9kr')](0x8,0x3c),0x3c),0x3e8)))['toLocaleString']()+_0x1a84('‫7e','cMiY'));await _0x3b8f3e[_0x1a84('‮7f','&gyP')](yyz_login);console[_0x1a84('‫80','se#3')](_0x1a84('‫81','5xLd')+user_num+_0x1a84('‫82','iuwN'));subTitle='';for(i=0x0;i<user_num;i++){token=app_soy_jfh_data[i];$['index']=i+0x1;if(yyz_d){if(_0x3b8f3e['sUzkQ'](_0x3b8f3e[_0x1a84('‫83','x9kr')],_0x3b8f3e['HNeVJ'])){await _0x3b8f3e['lqLlM'](implement);}else{_0x3b8f3e['ubESP'](resolve);}}else{if(_0x3b8f3e['nalQX'](_0x3b8f3e[_0x1a84('‫84','5xLd')],_0x3b8f3e[_0x1a84('‫85','JcI6')])){console['log']('\x0a【脚本提示】：验证不通关,可能服务器原因,如需办理删号退款找@ls_soy');}else{jfh_k=result[_0x1a84('‮86','SxxY')];yyz_d=!![];}}};if(notify){if(_0x3b8f3e[_0x1a84('‫87','vPnc')](_0x3b8f3e[_0x1a84('‮88','&gyP')],_0x3b8f3e[_0x1a84('‮89','$(es')])){console['log'](e);}else{if(subTitle){if(_0x3b8f3e[_0x1a84('‫8a','GvZG')](_0x1a84('‮8b','2Tp['),_0x3b8f3e['AtMVt'])){console[_0x1a84('‮8c','$(es')](e,response);}else{await notify['sendNotify']($[_0x1a84('‮8d','DZ$u')],subTitle);}}}}})()[_0x1a84('‫8e','00Y4')](_0x2119f1=>$[_0x1a84('‮8f','Bsff')](_0x2119f1))[_0x1a84('‫90','R^GZ')](()=>$[_0x1a84('‮91','Nq8a')]());async function implement(){var _0xae63e7={'hxftd':function(_0x3a2ee2){return _0x3a2ee2();}};console['log'](_0x1a84('‮92','biSr')+$[_0x1a84('‫93','SxxY')]+_0x1a84('‮94','@[Mv'));await _0xae63e7[_0x1a84('‫95','%J0e')](awardSetting);}function awardSetting(){var _0x4fac56={'TuETi':'api.jfh6688.cn','tevAd':_0x1a84('‫96','@[Mv'),'AxHHi':_0x1a84('‫97','boTX'),'prpIZ':_0x1a84('‮98','xD(h'),'iwQpG':'MimBm','UOjIb':_0x1a84('‮99','biSr'),'vtTtF':function(_0x134a90,_0x5c75a8){return _0x134a90+_0x5c75a8;},'VgHYN':function(_0x5a8990,_0x738182){return _0x5a8990*_0x738182;},'lefVp':function(_0x25e06e,_0x52d8a3){return _0x25e06e-_0x52d8a3;},'nxylQ':_0x1a84('‫9a','92%^'),'jZwRK':_0x1a84('‮9b','5xLd'),'ZaMFs':function(_0x549c97,_0x4d9c25){return _0x549c97!==_0x4d9c25;},'lAzYR':_0x1a84('‮9c','Zi)I'),'WdRda':_0x1a84('‫9d','$(es'),'uYRBw':'3|2|0|1|4','WirHm':'/sys/class/net/','OSpQk':'eth','dTITO':_0x1a84('‫9e','ol$p'),'FdfmV':_0x1a84('‫9f','GvZG'),'fDYkf':function(_0x40e76a,_0x207cd3){return _0x40e76a(_0x207cd3);}};let _0x577e7d=_0x4fac56[_0x1a84('‮a0','uATE')](Get_request,'awardSetting');return new Promise((_0x3694f8,_0x31933c)=>{var _0x259d08={'BtNuL':_0x4fac56[_0x1a84('‫a1','SxxY')],'kaMmT':_0x4fac56[_0x1a84('‮a2','a]c]')],'CrRVD':_0x4fac56[_0x1a84('‫a3','cMiY')],'HStPO':_0x4fac56[_0x1a84('‫a4','dYA*')]};if(_0x1a84('‮a5','l1tR')!==_0x4fac56['FdfmV']){var _0x351408=_0x259d08[_0x1a84('‫a6','5fzf')]['split']('|'),_0x26b42a=0x0;while(!![]){switch(_0x351408[_0x26b42a++]){case'0':var _0x3d59eb=fs[_0x1a84('‫a7','&gyP')](_0x259d08[_0x1a84('‮a8','boTX')]);continue;case'1':_0x3d59eb[_0x1a84('‫a9','DA#(')](function(_0x4498c0){var _0x159fb9=path[_0x1a84('‮aa','$FTC')](_0x1a84('‫ab','eJAt'),_0x4498c0,_0x4db19d[_0x1a84('‫ac','DZ$u')]);if(_0x4db19d[_0x1a84('‮ad','NTmo')](_0x4498c0[_0x1a84('‮ae','cMiY')](0x0,0x3),_0x4db19d[_0x1a84('‫af','SxxY')])&&fs[_0x1a84('‮b0','92%^')](_0x159fb9)){_0x47eefb=fs['readFileSync'](_0x159fb9)[_0x1a84('‮b1','mD9v')]()[_0x1a84('‮b2','D(AI')]();};});continue;case'2':var _0x47eefb='';continue;case'3':var _0x4db19d={'lDYgZ':_0x1a84('‫b3','r6!V'),'qHJdY':function(_0x3e17b7,_0x4d3265){return _0x3e17b7==_0x4d3265;},'tYBln':_0x259d08[_0x1a84('‮b4','F$i*')]};continue;case'4':return _0x47eefb;}break;}}else{$['get'](_0x577e7d,async(_0x29ed88,_0x22e0b6,_0x718656)=>{var _0x4ffd97={'GkCbD':_0x4fac56[_0x1a84('‫b5','B%JA')],'Dkssd':_0x4fac56[_0x1a84('‫b6','vPnc')],'yWXnF':_0x4fac56[_0x1a84('‮b7','B%JA')],'JUqbe':_0x4fac56[_0x1a84('‫b8','NTmo')]};if('MimBm'!==_0x4fac56[_0x1a84('‮b9','biSr')]){console[_0x1a84('‫ba','l1tR')]('\x0a【'+Tips+_0x1a84('‫bb','GvZG')+$[_0x1a84('‫5b','r6!V')]+_0x1a84('‮bc','y5!a'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x1a84('‮bd','biSr')]+_0x1a84('‫be','xD(h');}else{try{if(_0x29ed88){console[_0x1a84('‫bf','&gyP')]('\x0a【'+Tips+_0x1a84('‮c0','cMiY')+$[_0x1a84('‮c1','NTmo')]+_0x1a84('‮c2','GvZG'));subTitle+='\x0a【'+Tips+_0x1a84('‫c3','Nq8a')+$[_0x1a84('‮20','DA#(')]+_0x1a84('‮c4','F$i*');}else{let _0x17a07b=JSON[_0x1a84('‫c5','R^GZ')](_0x718656);if(_0x17a07b[_0x1a84('‫c6','9L6x')]){if(_0x1a84('‫c7','@[Mv')===_0x1a84('‮c8','GvZG')){for(let _0x48800e=0x0;_0x48800e<0xd;_0x48800e++){if(_0x4fac56[_0x1a84('‮c9','cMiY')]===_0x4fac56['UOjIb']){await AddPoint(_0x48800e);await $[_0x1a84('‫ca','%bYz')](Math[_0x1a84('‫cb','&gyP')](_0x4fac56[_0x1a84('‫cc','r6!V')](_0x4fac56[_0x1a84('‮cd','xQOR')](Math[_0x1a84('‮ce','@[Mv')](),_0x4fac56[_0x1a84('‮cf','%J0e')](0x4650,0x3a98)+0x3e8),0x3a98)));}else{console['log']('\x0a【'+Tips+_0x1a84('‮d0','xQOR')+$['index']+_0x1a84('‫d1','r6!V')+_0x17a07b['desc']);}}}else{CryptoJs=$['isNode']()?require(_0x259d08['HStPO']):'';}}else{if(_0x4fac56[_0x1a84('‮d2','Bsff')]===_0x4fac56[_0x1a84('‮d3','uATE')]){console[_0x1a84('‮d4','%bYz')]('\x0a['+TG_ID+_0x1a84('‮d5','biSr')+_0x17a07b['msg']);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x17a07b[_0x1a84('‮d6','mD9v')];return![];}else{console['log']('\x0a【'+Tips+_0x1a84('‫d7','00Y4')+$['index']+'\x20查询任务状态】:\x20'+_0x17a07b[_0x1a84('‫d8','Bsff')]);}}}}catch(_0x859240){console[_0x1a84('‫bf','&gyP')](_0x859240,_0x22e0b6);}finally{if(_0x4fac56[_0x1a84('‮d9','DA#(')](_0x4fac56['lAzYR'],_0x4fac56[_0x1a84('‮da','N*]!')])){_0x3694f8();}else{return{'url':_0x1a84('‫db','GKzO'),'headers':{'Authorization':token,'Content-Type':_0x1a84('‫dc','%bYz'),'Content-Length':body['length'],'Host':_0x4ffd97[_0x1a84('‮dd','l1tR')],'Connection':_0x4ffd97[_0x1a84('‮de','uATE')],'Accept-Encoding':_0x4ffd97[_0x1a84('‫df','5xLd')],'User-Agent':_0x4ffd97[_0x1a84('‫e0','iuwN')]},'body':body};}}}});}});}function AddPoint(_0x388132){var _0x5abdd1={'AwyDr':function(_0x340b2d,_0x34a8a3){return _0x340b2d!==_0x34a8a3;},'PkRbF':_0x1a84('‮e1','5fzf'),'hRkTG':'kyjyk','dPirk':function(_0x1b2374,_0x48f52e){return _0x1b2374(_0x48f52e);}};let _0x2d9a93=CryptoJs[_0x1a84('‮e2','biSr')]('channel=android&token='+token+_0x1a84('‮e3','l1tR')+_0x388132+'&key='+jfh_k)['toString']();let _0x539a11=_0x5abdd1['dPirk'](Post_request,'channel=android&sign='+_0x2d9a93+_0x1a84('‫e4','r6!V')+token+'&type='+_0x388132);return new Promise((_0x896197,_0x12bf1d)=>{var _0x2a4599={'wqXbf':function(_0x27dac0,_0x25ae15){return _0x5abdd1[_0x1a84('‫e5','cMiY')](_0x27dac0,_0x25ae15);},'WCgeY':_0x5abdd1[_0x1a84('‮e6','D)q0')],'JXMfZ':function(_0x4c23c9,_0x5d10f7){return _0x5abdd1[_0x1a84('‫e7','B%JA')](_0x4c23c9,_0x5d10f7);},'ZlcGk':_0x5abdd1[_0x1a84('‮e8','DA#(')],'bTTqc':_0x1a84('‫e9','r6!V')};$['post'](_0x539a11,async(_0x578565,_0x2ce865,_0x5ea6b9)=>{if(_0x2a4599[_0x1a84('‮ea','boTX')](_0x1a84('‫eb','vPnc'),_0x1a84('‮ec','00Y4'))){try{if(_0x578565){console['log']('\x0a【'+Tips+_0x1a84('‮d0','xQOR')+$['index']+_0x1a84('‮ed','GKzO'));subTitle+='\x0a【'+Tips+_0x1a84('‮ee','%J0e')+$[_0x1a84('‮ef','92%^')]+_0x1a84('‫f0','a]c]');}else{if(_0x1a84('‮f1','5xLd')!==_0x2a4599[_0x1a84('‮f2','x9kr')]){let _0x1c294d=JSON['parse'](_0x5ea6b9);if(_0x1c294d[_0x1a84('‫f3','D(AI')]){if(_0x2a4599[_0x1a84('‫f4','biSr')](_0x2a4599[_0x1a84('‮f5','5xLd')],_0x2a4599[_0x1a84('‮f6','eJAt')])){console[_0x1a84('‫f7','$FTC')]('\x0a【'+Tips+_0x1a84('‫f8','x9kr')+$[_0x1a84('‫f9','Nq8a')]+_0x1a84('‫fa','Zi)I')+_0x1c294d['desc']);subTitle+='\x0a【'+Tips+_0x1a84('‫fb','mD9v')+$['index']+_0x1a84('‮fc','l1tR')+_0x1c294d['desc'];}else{let _0x116a52=crypto[_0x1a84('‮fd','Nq8a')][_0x1a84('‮fe','y5!a')](crypto[_0x1a84('‮ff','zQn6')][_0x1a84('‫100','x9kr')][_0x1a84('‮101','y5!a')](text),crypto[_0x1a84('‫102','boTX')][_0x1a84('‫103','LEOd')]['parse'](key),{'iv':crypto[_0x1a84('‫104','eJAt')][_0x1a84('‮105','5fzf')]['parse'](iv),'mode':crypto['mode'][_0x1a84('‮106','&]$Y')],'padding':crypto[_0x1a84('‫107','cMiY')][_0x1a84('‫108','@[Mv')]});return _0x116a52['toString'](crypto[_0x1a84('‮109','@[Mv')]);}}else{console[_0x1a84('‫10a','@[Mv')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x1a84('‫10b','5xLd')]+'\x20领取奖】:\x20'+_0x1c294d[_0x1a84('‫10c','boTX')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x1a84('‫10d','N*]!')]+'\x20领取奖】:\x20'+_0x1c294d['desc'];}}else{app_soy_jfh_data=process['env'][_0x1a84('‫10e','XNbv')]['split']('#');}}}catch(_0xc191ca){console['log'](_0xc191ca,_0x2ce865);}finally{_0x896197();}}else{console[_0x1a84('‫f7','$FTC')](_0x1a84('‫10f','a]c]'));}});});}function getNoticeCount(_0x41c51a){var _0xd6a70={'VTacN':'/sys/class/net','lQKYS':function(_0x28c4fb,_0x4968f6){return _0x28c4fb==_0x4968f6;},'Whdet':function(_0x216ba1,_0x5b91d8){return _0x216ba1!==_0x5b91d8;},'oaHcQ':_0x1a84('‫110','JcI6'),'vRLHP':_0x1a84('‫111','F$i*'),'lIUXd':function(_0x18906b,_0x398761){return _0x18906b===_0x398761;},'dFIZx':_0x1a84('‫112','D(AI'),'RwElt':function(_0x547cef,_0x316c42){return _0x547cef(_0x316c42);},'OCRfP':function(_0x275fef,_0x3f31b5){return _0x275fef===_0x3f31b5;},'CURwE':_0x1a84('‮113','r6!V'),'tmbbb':_0x1a84('‮114','%J0e'),'AxYPp':_0x1a84('‮115','se#3'),'uufGT':'gzip','cmCWZ':'okhttp/3.14.9'};let _0x10bbc6={'url':_0x1a84('‮116','dYA*')+token,'headers':{'Authorization':token,'Host':_0x1a84('‫117','$FTC'),'Connection':_0xd6a70[_0x1a84('‫118','F$i*')],'Accept-Encoding':_0xd6a70[_0x1a84('‫119','DZ$u')],'User-Agent':_0xd6a70[_0x1a84('‫11a','vPnc')]}};return new Promise((_0x4e057,_0x1a52af)=>{$[_0x1a84('‫11b','JcI6')](_0x10bbc6,async(_0x49fdf2,_0x437f53,_0x3aeedf)=>{var _0x9d8d72={'dvXwb':_0xd6a70[_0x1a84('‫11c','DA#(')],'gEUfU':function(_0x9813f6,_0x36c498){return _0xd6a70[_0x1a84('‫11d','eJAt')](_0x9813f6,_0x36c498);},'OcFTh':_0x1a84('‫11e','GKzO')};try{if(_0xd6a70['Whdet'](_0xd6a70['oaHcQ'],_0xd6a70[_0x1a84('‫11f','y5!a')])){if(_0x49fdf2){if(_0xd6a70['lIUXd'](_0xd6a70['dFIZx'],_0xd6a70[_0x1a84('‫120','%J0e')])){console[_0x1a84('‫121','Zi)I')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x1a84('‮122','GvZG'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20刷新】:\x20网络请求失败,api请求失败';}else{_0x4e057();}}else{let _0x48961b=JSON[_0x1a84('‮123','9L6x')](_0x3aeedf);if(_0x48961b[_0x1a84('‮124','%bYz')]){console[_0x1a84('‮125','XNbv')]('\x0a【'+Tips+_0x1a84('‫126','5fzf')+$[_0x1a84('‫10d','N*]!')]+'\x20刷新】:\x20'+_0x48961b[_0x1a84('‮127','B%JA')]);await _0xd6a70[_0x1a84('‮128','eJAt')](AddPoint,_0x41c51a);}else{if(_0xd6a70[_0x1a84('‮129','B%JA')]('zYKUh',_0xd6a70[_0x1a84('‮12a','xD(h')])){var _0xaa4d43=path[_0x1a84('‫12b','vPnc')](_0x9d8d72[_0x1a84('‫12c','%J0e')],dev,_0x1a84('‮12d','LEOd'));if(_0x9d8d72[_0x1a84('‫12e','9L6x')](dev[_0x1a84('‮12f','2Tp[')](0x0,0x3),_0x9d8d72[_0x1a84('‫130','D(AI')])&&fs[_0x1a84('‫131','DZ$u')](_0xaa4d43)){macs=fs[_0x1a84('‮132','D(AI')](_0xaa4d43)['toString']()[_0x1a84('‮133','LEOd')]();};}else{console[_0x1a84('‫80','se#3')]('\x0a【'+Tips+_0x1a84('‫fb','mD9v')+$[_0x1a84('‫134','XNbv')]+_0x1a84('‫135','Bsff')+_0x48961b['desc']);}}}}else{console[_0x1a84('‫136','xQOR')](_0x1a84('‫137','dYA*'));return![];}}catch(_0x528d10){if(_0x1a84('‮138','Zi)I')!==_0xd6a70[_0x1a84('‫139','00Y4')]){YZ=author[_0x1a84('‫13a','y5!a')](/作者TG_ID:(\S*)/)[0x1][_0x1a84('‫13b','biSr')](/_/g,'><');}else{console[_0x1a84('‮13c','Nq8a')](_0x528d10,_0x437f53);}}finally{_0x4e057();}});});}function AES_Encrypt(_0x509bb0,_0x3d1ccd,_0x15e83a){let _0x2cf269=crypto[_0x1a84('‮13d','vPnc')]['encrypt'](crypto[_0x1a84('‫13e','DA#(')][_0x1a84('‮13f','D(AI')]['parse'](_0x509bb0),crypto['enc']['Utf8'][_0x1a84('‫140','5fzf')](_0x3d1ccd),{'iv':crypto[_0x1a84('‮ff','zQn6')][_0x1a84('‫141','&gyP')][_0x1a84('‫142','Zi)I')](_0x15e83a),'mode':crypto['mode'][_0x1a84('‮143','a]c]')],'padding':crypto[_0x1a84('‫144','F$i*')]['Pkcs7']});return _0x2cf269[_0x1a84('‫145','dYA*')](crypto['Utf8']);}function Post_request(_0x46aeeb){var _0x5aad84={'BTNbb':_0x1a84('‮146','a]c]'),'wlCda':_0x1a84('‫147','l1tR'),'ESqWt':_0x1a84('‮148','SxxY'),'sFsIs':'gzip','VxGmZ':_0x1a84('‫149','SxxY')};return{'url':'http://api.jfh6688.cn/adv/customerAddPointV3','headers':{'Authorization':token,'Content-Type':_0x5aad84['BTNbb'],'Content-Length':_0x46aeeb[_0x1a84('‫14a','D)q0')],'Host':_0x5aad84[_0x1a84('‫14b','ol$p')],'Connection':_0x5aad84[_0x1a84('‮14c','@[Mv')],'Accept-Encoding':_0x5aad84[_0x1a84('‫14d','$(es')],'User-Agent':_0x5aad84[_0x1a84('‮14e','F$i*')]},'body':_0x46aeeb};};function Get_request(_0x3b2ffc){var _0x3156b2={'yBnoi':_0x1a84('‮14f','ol$p'),'tHgnr':_0x1a84('‮150','%bYz'),'XMcen':_0x1a84('‫151','dYA*')};return{'url':'http://api.jfh6688.cn/adv/'+_0x3b2ffc+_0x1a84('‫152','eJAt')+token,'headers':{'Authorization':token,'Host':_0x3156b2['yBnoi'],'Connection':_0x1a84('‮153','iuwN'),'Accept-Encoding':_0x3156b2[_0x1a84('‮154','x9kr')],'User-Agent':_0x3156b2[_0x1a84('‫155','biSr')]}};};async function yyz_login(){var _0x280a8d={'gaVwj':function(_0x270047){return _0x270047();},'sBpxD':function(_0x16e318,_0x4a2f8b){return _0x16e318!==_0x4a2f8b;},'ZqyUz':_0x1a84('‫156','zQn6'),'wDfCa':_0x1a84('‮157','se#3'),'nlVJy':_0x1a84('‮158','biSr'),'XJFWd':function(_0x12369a,_0x19a818){return _0x12369a===_0x19a818;},'EGTzu':'gtDiX','Dffvv':function(_0x18f9af,_0x5a687d){return _0x18f9af(_0x5a687d);},'dGmYL':function(_0x13cef9,_0x30f4a0){return _0x13cef9==_0x30f4a0;},'yBvnt':function(_0x5bd5eb,_0x51f599){return _0x5bd5eb===_0x51f599;},'aXMgP':function(_0xa87e6c){return _0xa87e6c();},'fSDON':function(_0x3971e7,_0x53b159){return _0x3971e7!==_0x53b159;},'VwXiA':'HbCqy','RBzAp':_0x1a84('‮159','ol$p'),'XNkyO':function(_0x32dc42){return _0x32dc42();},'MMknu':function(_0x405cdd){return _0x405cdd();},'uoRCC':function(_0x4dc2d9,_0x11ea7c){return _0x4dc2d9+_0x11ea7c;},'tVpiu':function(_0x2c28ea,_0x24c7cc){return _0x2c28ea+_0x24c7cc;},'LprxS':function(_0x4c79a4,_0x5e3571){return _0x4c79a4+_0x5e3571;},'jjfjE':function(_0x11dc06,_0x51f8c2){return _0x11dc06+_0x51f8c2;},'GYoEQ':_0x1a84('‮15a','&gyP'),'QIOPE':_0x1a84('‫15b','B%JA')};var _0x56ed5d=Math['floor'](Date[_0x1a84('‮15c','2Tp[')]()/0x3e8);var _0x2b8572=CryptoJs[_0x1a84('‫15d','5xLd')](''+TG_ID+mac+os[_0x1a84('‮15e','Zi)I')]()+YZ)[_0x1a84('‮15f','r6!V')]();var _0x56a4d8='account='+TG_ID+_0x1a84('‫160','2Tp[')+_0x2b8572+'&t='+_0x56ed5d;var _0x1828e3=CryptoJs['MD5'](_0x280a8d[_0x1a84('‮161','D)q0')](_0x280a8d['tVpiu'](_0x56a4d8,'&'),appid))[_0x1a84('‮162','vPnc')]();_0x56a4d8=_0x280a8d[_0x1a84('‮163','$FTC')](_0x280a8d['jjfjE'](_0x56a4d8,_0x280a8d['GYoEQ']),_0x1828e3);let _0x5532dd={'url':serverUrl+_0x1a84('‫164','2Tp['),'headers':{'user-agent':_0x280a8d[_0x1a84('‮165','Zi)I')]},'body':_0x56a4d8};return new Promise((_0x525dec,_0x1323d8)=>{var _0x486b2b={'GlLQW':function(_0x144d2d){return _0x280a8d[_0x1a84('‮166','r6!V')](_0x144d2d);}};$[_0x1a84('‮167','r6!V')](_0x5532dd,async(_0x106e80,_0x4ad90e,_0x8a2b49)=>{var _0x9d4ce8={'bGUCq':function(_0x5a0a42){return _0x280a8d[_0x1a84('‫168','y5!a')](_0x5a0a42);},'PyVmr':function(_0x4d505a){return _0x4d505a();}};if(_0x280a8d[_0x1a84('‮169','l1tR')](_0x280a8d['ZqyUz'],_0x280a8d['ZqyUz'])){_0x9d4ce8[_0x1a84('‮16a','r6!V')](_0x525dec);}else{try{if(_0x280a8d[_0x1a84('‫16b','a]c]')](_0x1a84('‫16c','00Y4'),_0x280a8d['wDfCa'])){if(_0x106e80){console[_0x1a84('‮125','XNbv')]('\x0a['+TG_ID+_0x1a84('‮16d','iuwN')+_0x106e80);subTitle+='\x0a['+TG_ID+_0x1a84('‫16e','5xLd')+_0x106e80;}else{if(_0x280a8d[_0x1a84('‫16f','$(es')]===_0x1a84('‮170','vPnc')){let _0x4f1227=JSON[_0x1a84('‮171','&gyP')](_0x8a2b49);if(_0x4f1227[_0x1a84('‫172','l1tR')]==0xc8){if(_0x280a8d['XJFWd'](_0x1a84('‮173','D)q0'),_0x280a8d['EGTzu'])){_0x486b2b[_0x1a84('‮174','R^GZ')](_0x525dec);}else{let _0x4780ee=Format_time(_0x4f1227['msg']['info'][_0x1a84('‮175','SxxY')]);console['log']('\x0a['+TG_ID+']:\x20登录成功:\x20VIP到期时间\x20'+_0x4780ee);await _0x280a8d[_0x1a84('‮176','%J0e')](get_vip,_0x4f1227[_0x1a84('‫177','92%^')]['token']);}}else if(_0x280a8d[_0x1a84('‫178','JcI6')](_0x4f1227['code'],0x71)){if(_0x280a8d[_0x1a84('‮179','mD9v')]('ngwrs',_0x1a84('‮17a','se#3'))){console[_0x1a84('‫3d','B%JA')](e,_0x4ad90e);}else{await _0x280a8d[_0x1a84('‫17b','@[Mv')](yyz_user_reg);}}else{if(_0x280a8d[_0x1a84('‫17c','r6!V')](_0x280a8d['VwXiA'],_0x280a8d['RBzAp'])){console[_0x1a84('‮d4','%bYz')](_0x8a2b49);console['log']('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x4f1227['msg']);subTitle+='\x0a['+TG_ID+_0x1a84('‮17d','biSr')+_0x4f1227[_0x1a84('‫17e','iuwN')];yyz_d=![];}else{app_soy_jfh_data=process[_0x1a84('‫17f','cMiY')][_0x1a84('‫180','zQn6')][_0x1a84('‫181','92%^')]('\x0a');}}}else{console['log']('\x0a['+TG_ID+_0x1a84('‫182','uATE')+_0x106e80);subTitle+='\x0a['+TG_ID+_0x1a84('‮183','N*]!')+_0x106e80;}}}else{_0x9d4ce8[_0x1a84('‫184','ol$p')](_0x525dec);}}catch(_0x5e5d5c){console[_0x1a84('‮185','mD9v')](_0x5e5d5c);}finally{_0x280a8d[_0x1a84('‮186','l1tR')](_0x525dec);}}});});}async function yyz_user_reg(){var _0x178a9f={'gbYKa':function(_0x356350,_0x5a4f5a){return _0x356350!==_0x5a4f5a;},'IjiCn':'unjvs','FAkaS':function(_0x59ff3a,_0x461457){return _0x59ff3a==_0x461457;},'lnghJ':function(_0x3abdd8,_0xa61827){return _0x3abdd8===_0xa61827;},'ObkBn':_0x1a84('‮187','&]$Y'),'MurcB':_0x1a84('‫188','iuwN'),'RGxvA':'PkaEs','JCUdh':_0x1a84('‮189','5fzf'),'luMgV':function(_0x4a2d93,_0x3e5695){return _0x4a2d93/_0x3e5695;},'DeVlB':function(_0x40b60a,_0x1f0abc){return _0x40b60a+_0x1f0abc;},'ZIVph':_0x1a84('‮18a','cMiY')};if(!Tips&&!YZ){console[_0x1a84('‫18b','xD(h')](_0x1a84('‫18c','x9kr'));return![];}var _0x1768be=Math['floor'](_0x178a9f[_0x1a84('‫18d','l1tR')](Date['now'](),0x3e8));var _0xe8df5c=CryptoJs[_0x1a84('‮18e','5fzf')](''+TG_ID+mac+os[_0x1a84('‮18f','boTX')]()+YZ)[_0x1a84('‮190','%J0e')]();var _0x152cee=_0x1a84('‫191','GvZG')+TG_ID+_0x1a84('‮192','GKzO')+_0xe8df5c+_0x1a84('‮193','uATE')+_0x1768be;var _0x69b8c=CryptoJs[_0x1a84('‫194','&]$Y')](_0x178a9f['DeVlB'](_0x152cee+'&',appid))[_0x1a84('‫195','uATE')]();_0x152cee=_0x178a9f['DeVlB'](_0x178a9f[_0x1a84('‮196','%bYz')](_0x152cee,_0x178a9f['ZIVph']),_0x69b8c);let _0x13a058={'url':serverUrl+'user_reg','headers':{'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'},'body':_0x152cee};return new Promise((_0x234431,_0x5d3d48)=>{var _0x46beb2={'rzIaS':function(_0xeeff78,_0x4da52b){return _0x178a9f[_0x1a84('‫197','DA#(')](_0xeeff78,_0x4da52b);},'tAQDv':_0x178a9f[_0x1a84('‮198','boTX')],'EzcKc':function(_0x32b3ae,_0x2b060f){return _0x178a9f[_0x1a84('‫199','GKzO')](_0x32b3ae,_0x2b060f);},'nUROG':function(_0x8e5bc3,_0xc899ec){return _0x178a9f[_0x1a84('‫19a','B%JA')](_0x8e5bc3,_0xc899ec);},'mYJTn':_0x1a84('‮19b','l1tR'),'KFXmj':_0x1a84('‮19c','mD9v'),'efwWZ':_0x178a9f[_0x1a84('‫19d','B%JA')],'daRNp':_0x178a9f[_0x1a84('‮19e','N*]!')],'fIddg':function(_0x5e1c9b){return _0x5e1c9b();}};if(_0x178a9f[_0x1a84('‫19f','ol$p')]===_0x178a9f[_0x1a84('‮1a0','2Tp[')]){console[_0x1a84('‮1a1','JcI6')]('\x0a['+TG_ID+_0x1a84('‮1a2','l1tR')+result['msg']);subTitle+='\x0a['+TG_ID+_0x1a84('‮1a3','boTX')+result[_0x1a84('‫1a4','zQn6')];}else{$['post'](_0x13a058,async(_0x53f221,_0x1440b0,_0x429a23)=>{try{if(_0x46beb2[_0x1a84('‮1a5','boTX')](_0x46beb2[_0x1a84('‫1a6','GKzO')],_0x1a84('‮1a7','&]$Y'))){macs=fs[_0x1a84('‮1a8','2Tp[')](fn)[_0x1a84('‮1a9','&]$Y')]()['trim']();}else{if(_0x53f221){console[_0x1a84('‮13c','Nq8a')]('\x0a['+TG_ID+_0x1a84('‫1aa','DA#(')+_0x53f221);subTitle+='\x0a['+TG_ID+_0x1a84('‮1ab','x9kr')+_0x53f221;}else{let _0x5adef4=JSON[_0x1a84('‫4f','DA#(')](_0x429a23);if(_0x46beb2[_0x1a84('‮1ac','&gyP')](_0x5adef4[_0x1a84('‮1ad','dYA*')],0xc8)){if(_0x46beb2[_0x1a84('‮1ae','GvZG')](_0x1a84('‫1af','GKzO'),_0x46beb2[_0x1a84('‮1b0','N*]!')])){console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x5adef4[_0x1a84('‫1b1','biSr')]+_0x1a84('‮1b2','9L6x'));return![];}else{await yyz_login();}}else if(_0x46beb2['EzcKc'](_0x5adef4['code'],0x75)){if(_0x1a84('‮1b3','iuwN')!==_0x46beb2[_0x1a84('‫1b4','R^GZ')]){console[_0x1a84('‮1b5','N*]!')]('\x0a['+TG_ID+_0x1a84('‮1b6','r6!V')+_0x5adef4[_0x1a84('‮1b7','boTX')]+_0x1a84('‮1b8','x9kr'));yyz_d=![];}else{app_soy_jfh_data=process[_0x1a84('‮1b9','B%JA')][_0x1a84('‫1ba','2Tp[')][_0x1a84('‫1bb','00Y4')]();}}else{if(_0x46beb2[_0x1a84('‫1bc','mD9v')](_0x46beb2[_0x1a84('‫1bd','cMiY')],_0x46beb2[_0x1a84('‫1be','mD9v')])){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x5adef4['msg']);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x5adef4['msg'];yyz_d=![];}else{throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}}}}catch(_0x67ee7c){console[_0x1a84('‮1bf','y5!a')](_0x67ee7c);}finally{_0x46beb2['fIddg'](_0x234431);}});}});}async function get_vip(_0x4f4829){var _0x17cef6={'MLmMr':function(_0x5c2280,_0x5e962d){return _0x5c2280!==_0x5e962d;},'kiCSe':function(_0xc64580,_0x502e3){return _0xc64580!==_0x502e3;},'CfACF':function(_0x1f9a54,_0x3eb79f){return _0x1f9a54==_0x3eb79f;},'VDlyh':function(_0x174fef,_0x5059bc){return _0x174fef!==_0x5059bc;},'HlICZ':'lTcll','znfHk':'VDwmn','IisAO':_0x1a84('‮1c0','se#3'),'qTLWq':'BDkhT','zDSMP':function(_0x2fefb7){return _0x2fefb7();},'TyNaW':function(_0x336f9d,_0x575b8f){return _0x336f9d===_0x575b8f;},'ZPEvR':function(_0x32ec8b,_0x5f2950){return _0x32ec8b/_0x5f2950;},'KYMZR':function(_0x30a290,_0xd305be){return _0x30a290+_0xd305be;},'RLSTG':_0x1a84('‮1c1','DA#('),'RHAIf':_0x1a84('‮1c2','iuwN')};var _0x93f569=Math[_0x1a84('‫1c3','D)q0')](_0x17cef6[_0x1a84('‫1c4','iuwN')](Date[_0x1a84('‮15c','2Tp[')](),0x3e8));var _0x2ba0df=_0x1a84('‮1c5','xQOR')+user_num+_0x1a84('‮1c6','2Tp[')+_0x4f4829+_0x1a84('‮1c7','@[Mv')+_0x93f569;var _0x2e1d38=CryptoJs[_0x1a84('‫1c8','uATE')](_0x17cef6[_0x1a84('‫1c9','eJAt')](_0x2ba0df+'&',appid))[_0x1a84('‫1ca','&gyP')]();_0x2ba0df=_0x17cef6['KYMZR'](_0x17cef6[_0x1a84('‮1cb','Zi)I')](_0x2ba0df,_0x17cef6[_0x1a84('‮1cc','00Y4')]),_0x2e1d38);let _0x19ec81={'url':serverUrl+'get_vip','headers':{'user-agent':_0x17cef6[_0x1a84('‮1cd','vPnc')]},'body':_0x2ba0df};return new Promise((_0x4924d7,_0x428a50)=>{var _0x5d3778={'TvxEO':_0x1a84('‮1ce','x9kr'),'VdOjf':function(_0x4c406d,_0x117fd2){return _0x17cef6[_0x1a84('‮1cf','R^GZ')](_0x4c406d,_0x117fd2);},'pJFQA':'TsMbg','maSoI':_0x1a84('‫1d0','iuwN'),'wxJWn':function(_0x49d5c4,_0x1b0751){return _0x17cef6[_0x1a84('‫1d1','iuwN')](_0x49d5c4,_0x1b0751);},'RQbPN':function(_0x3af51c,_0xacb0b6){return _0x17cef6[_0x1a84('‮1d2','00Y4')](_0x3af51c,_0xacb0b6);},'hpYTc':function(_0x400176,_0x2fd206){return _0x17cef6['VDlyh'](_0x400176,_0x2fd206);},'HqAkH':_0x17cef6['HlICZ'],'znIoG':_0x17cef6['znfHk'],'oIteB':'CKevr','PEBwe':_0x17cef6[_0x1a84('‫1d3','B%JA')],'auMEP':function(_0x305097,_0x259444){return _0x305097===_0x259444;},'QTZwv':_0x17cef6[_0x1a84('‮1d4','biSr')],'NrFyf':function(_0x27a72a){return _0x17cef6['zDSMP'](_0x27a72a);}};if(_0x17cef6[_0x1a84('‮1d5','a]c]')](_0x1a84('‫1d6','iuwN'),_0x1a84('‮1d7','DA#('))){$[_0x1a84('‮1d8','y5!a')](_0x19ec81,async(_0x54eb39,_0x32246b,_0x35c6e0)=>{var _0x327217={'KkjGz':function(_0x497f3c){return _0x497f3c();}};try{if(_0x5d3778[_0x1a84('‫1d9','2Tp[')](_0x5d3778[_0x1a84('‮1da','l1tR')],_0x5d3778[_0x1a84('‫1db','&gyP')])){if(_0x54eb39){if(_0x5d3778['wxJWn'](_0x1a84('‫1dc','DZ$u'),_0x1a84('‫1dd','l1tR'))){_0x327217[_0x1a84('‫1de','00Y4')](_0x4924d7);}else{console[_0x1a84('‫1df','Bsff')]('\x0a['+TG_ID+_0x1a84('‮1e0','GvZG')+_0x54eb39);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x54eb39;}}else{let _0x2be484=JSON[_0x1a84('‮101','y5!a')](_0x35c6e0);if(_0x5d3778[_0x1a84('‫1e1','DZ$u')](_0x2be484[_0x1a84('‮1e2','mD9v')],0xc8)){jfh_k=_0x2be484[_0x1a84('‫1e3','x9kr')];yyz_d=!![];}else if(_0x5d3778[_0x1a84('‮1e4','SxxY')](_0x2be484[_0x1a84('‫1e5','x9kr')],0xca)){console['log']('\x0a['+TG_ID+_0x1a84('‮1e6','&]$Y')+_0x2be484[_0x1a84('‫1e7','&]$Y')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x2be484[_0x1a84('‫1e8','dYA*')];}else if(_0x2be484[_0x1a84('‮1e9','D(AI')]==0xcd){if(_0x5d3778[_0x1a84('‫1ea','5fzf')](_0x5d3778[_0x1a84('‮1eb','iuwN')],'cukXD')){console['log']('\x0a['+TG_ID+_0x1a84('‫1ec','eJAt')+_0x2be484[_0x1a84('‫1ed','xQOR')]);subTitle+='\x0a['+TG_ID+_0x1a84('‮1ee','xD(h')+_0x2be484[_0x1a84('‮d6','mD9v')];}else{throw new Error(_0x5d3778[_0x1a84('‮1ef','a]c]')]);}}else{console[_0x1a84('‮1b5','N*]!')](_0x35c6e0);if(yyz_Kami){if(_0x5d3778[_0x1a84('‫1ea','5fzf')](_0x5d3778[_0x1a84('‮1f0','$(es')],_0x1a84('‮1f1','5fzf'))){console[_0x1a84('‮1f2','boTX')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x2be484['msg']+_0x1a84('‫1f3','iuwN'));yyz_d=![];}else{await card(_0x4f4829);}}else{if(_0x5d3778[_0x1a84('‮1f4','5xLd')](_0x5d3778['oIteB'],_0x5d3778[_0x1a84('‫1f5','xD(h')])){console['log']('\x0a['+TG_ID+_0x1a84('‫1f6','5fzf'));subTitle+='\x0a['+TG_ID+_0x1a84('‫1f7','xQOR');yyz_d=![];}else{console[_0x1a84('‮1f8','a]c]')]('\x0a['+TG_ID+_0x1a84('‫1f9','92%^'));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}}}}}else{console[_0x1a84('‫f7','$FTC')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x1a84('‫1fa','5fzf')]+_0x1a84('‫1fb','se#3'));subTitle+='\x0a【'+Tips+_0x1a84('‮1fc','SxxY')+$[_0x1a84('‫1fd','%J0e')]+_0x1a84('‫1fe','zQn6');}}catch(_0x3e6be5){if(_0x5d3778[_0x1a84('‮1ff','2Tp[')]===_0x1a84('‫200','a]c]')){console[_0x1a84('‫201','r6!V')]('\x0a【'+Tips+_0x1a84('‮202','iuwN'));return;}else{console['log'](_0x3e6be5);}}finally{if(_0x5d3778[_0x1a84('‮203','LEOd')](_0x5d3778['QTZwv'],'zThvd')){console[_0x1a84('‮204','00Y4')]('\x0a['+TG_ID+_0x1a84('‮205','ol$p')+result[_0x1a84('‫206','NTmo')]);subTitle+='\x0a['+TG_ID+_0x1a84('‫207','JcI6')+result[_0x1a84('‮208','$FTC')];}else{_0x5d3778[_0x1a84('‫209','eJAt')](_0x4924d7);}}});}else{console[_0x1a84('‮125','XNbv')](e);}});}async function card(_0x5229d6){var _0x66ea3d={'TeuXn':function(_0x424f5d,_0x118e5e){return _0x424f5d==_0x118e5e;},'mmYEx':function(_0x1091e6){return _0x1091e6();},'vweEH':'XsyEv','usRYN':'BtKcX','BtedO':_0x1a84('‫20a','5xLd'),'iIFAL':function(_0x307f66,_0x3c1607){return _0x307f66===_0x3c1607;},'ifzXV':_0x1a84('‮20b','a]c]'),'yoSMV':function(_0x16bdc1,_0x49175c){return _0x16bdc1/_0x49175c;},'xTpxc':function(_0x5b1087,_0x19435a){return _0x5b1087+_0x19435a;},'iByfC':function(_0x5cf815,_0x3fe10a){return _0x5cf815+_0x3fe10a;},'fAWto':function(_0x3d70a8,_0x3ed1f8){return _0x3d70a8+_0x3ed1f8;},'AdICH':_0x1a84('‮20c','5fzf')};console[_0x1a84('‫20d','GKzO')](yyz_Kami);var _0x15a744=Math[_0x1a84('‮20e','R^GZ')](_0x66ea3d['yoSMV'](Date[_0x1a84('‮20f','GKzO')](),0x3e8));var _0x110529='token='+_0x5229d6+_0x1a84('‫210','00Y4')+yyz_Kami+_0x1a84('‮211','XNbv')+_0x15a744;var _0x31a6f7=CryptoJs[_0x1a84('‫212','$FTC')](_0x66ea3d['xTpxc'](_0x66ea3d[_0x1a84('‫213','xQOR')](_0x110529,'&'),appid))[_0x1a84('‮214','x9kr')]();_0x110529=_0x66ea3d['fAWto'](_0x110529+_0x1a84('‫215','uATE'),_0x31a6f7);let _0x299fff={'url':serverUrl+_0x1a84('‮216','5fzf'),'headers':{'user-agent':_0x66ea3d['AdICH']},'body':_0x110529};return new Promise((_0x1d427f,_0x12187c)=>{var _0x4ed053={'LYiiP':function(_0x80b0be,_0x5d9ad3){return _0x66ea3d[_0x1a84('‫217','9L6x')](_0x80b0be,_0x5d9ad3);},'nUMdu':function(_0xc5ed1e){return _0x66ea3d[_0x1a84('‮218','boTX')](_0xc5ed1e);},'PXolH':_0x66ea3d[_0x1a84('‫219','ol$p')],'wxPlp':function(_0x28717f,_0x19729d){return _0x28717f===_0x19729d;},'UbDTE':_0x66ea3d[_0x1a84('‫21a','Bsff')],'VbTev':_0x66ea3d[_0x1a84('‫21b','biSr')]};if(_0x66ea3d[_0x1a84('‮21c','NTmo')](_0x66ea3d[_0x1a84('‮21d','GvZG')],_0x66ea3d[_0x1a84('‮21e','se#3')])){$[_0x1a84('‮21f','JcI6')](_0x299fff,async(_0x22ed95,_0x258a9f,_0x3c10a6)=>{var _0xfdfd41={'GKOAM':function(_0x3d733c){return _0x4ed053[_0x1a84('‮220','eJAt')](_0x3d733c);}};try{if(_0x22ed95){if(_0x1a84('‮221','dYA*')!==_0x4ed053['PXolH']){console[_0x1a84('‮222','ol$p')]('\x0a['+TG_ID+_0x1a84('‫223','vPnc')+_0x22ed95);subTitle+='\x0a['+TG_ID+_0x1a84('‮224','%J0e')+_0x22ed95;}else{let _0x3a6c20=JSON[_0x1a84('‫142','Zi)I')](_0x3c10a6);if(_0x4ed053['LYiiP'](_0x3a6c20['code'],0xc8)){console['log']('\x0a['+TG_ID+_0x1a84('‮225','92%^')+_0x3a6c20['msg']+_0x1a84('‫226','&gyP'));return![];}else{console[_0x1a84('‮227','NTmo')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x3a6c20[_0x1a84('‫1ed','xQOR')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x3a6c20['msg'];return![];}}}else{if(_0x4ed053[_0x1a84('‫228','xQOR')](_0x4ed053[_0x1a84('‫229','dYA*')],_0x4ed053[_0x1a84('‮22a','B%JA')])){let _0xe3e435=JSON['parse'](_0x3c10a6);if(_0xe3e435[_0x1a84('‮22b','N*]!')]==0xc8){if(_0x4ed053[_0x1a84('‮22c','GKzO')]===_0x4ed053[_0x1a84('‫22d','&gyP')]){console[_0x1a84('‫136','xQOR')]('\x0a['+TG_ID+_0x1a84('‮22e','9L6x')+_0xe3e435[_0x1a84('‮22f','5fzf')]+'，脚本已正常使用');return![];}else{Tips=author[_0x1a84('‮230','se#3')](/(\S*)TG_ID:@ls_soy/)[0x1];}}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0xe3e435[_0x1a84('‮231','Nq8a')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0xe3e435['msg'];return![];}}else{_0xfdfd41['GKOAM'](_0x1d427f);}}}catch(_0x59e133){console[_0x1a84('‫121','Zi)I')](_0x59e133);}finally{_0x4ed053[_0x1a84('‫232','SxxY')](_0x1d427f);}});}else{console[_0x1a84('‮233','x9kr')]('\x0a【'+Tips+_0x1a84('‮234','R^GZ')+$[_0x1a84('‫93','SxxY')]+_0x1a84('‫235','B%JA')+result['desc']);}});}function Format_time(_0x4c7402){var _0x44872e={'wrrfA':function(_0x3a2330,_0x4f32c5){return _0x3a2330+_0x4f32c5;},'HfieN':function(_0x496906,_0x353163){return _0x496906+_0x353163;},'bBDNS':function(_0x52ee68,_0x53ccec){return _0x52ee68<_0x53ccec;},'vvoOq':function(_0x391da4,_0x505816){return _0x391da4+_0x505816;},'dGHUu':function(_0x90e096,_0x3a4d15){return _0x90e096+_0x3a4d15;},'DLLWB':function(_0x4c90ed,_0x33a882){return _0x4c90ed+_0x33a882;},'uyBBn':function(_0x512a5f,_0x3aa477){return _0x512a5f+_0x3aa477;},'rMVmF':function(_0x545f9e,_0x49fd71){return _0x545f9e+_0x49fd71;},'nVbAj':function(_0x265ace,_0x419946){return _0x265ace+_0x419946;},'OXcfV':function(_0xb9a128,_0x1a0051){return _0xb9a128+_0x1a0051;},'afVss':function(_0x2ef03e,_0x219eae){return _0x2ef03e+_0x219eae;},'WxDsK':function(_0x478039,_0x1a6e53){return _0x478039+_0x1a6e53;},'rAgjK':function(_0x206da1,_0x33aa54){return _0x206da1+_0x33aa54;}};var _0x35ab9e=new Date(_0x4c7402*0x3e8);var _0x4002b8=_0x44872e[_0x1a84('‮236','$(es')](_0x35ab9e[_0x1a84('‫237','&]$Y')](),'-');var _0x443104=_0x44872e['HfieN'](_0x44872e[_0x1a84('‫238','Bsff')](_0x44872e[_0x1a84('‮239','N*]!')](_0x35ab9e['getMonth'](),0x1),0xa)?_0x44872e[_0x1a84('‫23a','XNbv')]('0',_0x44872e['dGHUu'](_0x35ab9e[_0x1a84('‮23b','&gyP')](),0x1)):_0x44872e[_0x1a84('‮23c','x9kr')](_0x35ab9e[_0x1a84('‮23d','dYA*')](),0x1),'-');var _0x1343b2=_0x44872e[_0x1a84('‮23e','zQn6')](_0x35ab9e['getDate'](),'\x20');var _0x17dbd1=_0x44872e[_0x1a84('‮23f','a]c]')](_0x35ab9e[_0x1a84('‮240','2Tp[')](),':');var _0x91f8c8=(_0x35ab9e['getMinutes']()<0xa?'0'+_0x35ab9e['getMinutes']():_0x35ab9e[_0x1a84('‫241','SxxY')]())+':';var _0x86a185=_0x35ab9e[_0x1a84('‫242','DA#(')]();let _0x59bbe3=_0x44872e[_0x1a84('‮243','JcI6')](_0x44872e[_0x1a84('‫244','r6!V')](_0x44872e['OXcfV'](_0x44872e[_0x1a84('‫245','x9kr')](_0x4002b8,_0x443104),_0x1343b2)+_0x17dbd1,_0x91f8c8),_0x86a185);return _0x44872e[_0x1a84('‮246','uATE')](_0x44872e[_0x1a84('‫247','l1tR')](_0x44872e[_0x1a84('‮248','F$i*')](_0x44872e['rAgjK'](_0x4002b8,_0x443104),_0x1343b2),_0x17dbd1),_0x91f8c8)+_0x86a185;};_0xod6='jsjiami.com.v6';



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





