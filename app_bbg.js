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


const $ = new Env('【宝贝狗22/04/17_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodb='jsjiami.com.v6',_0xodb_=['‮_0xodb'],_0x2457=[_0xodb,'wp3DiHzCqcOtW8Ojw53ClQ==','w4oAw6E=','CwkPJw==','wqrCjHpHJA==','WsOKWEE=','I+S9i+iCpOaMvuekvAPnjKznmZDlvJjCpRVND3BH5ZGk5rGu5YW35pSP55mmHnbCqE7DpsOt6YKf5Lu25Y636YSRwqroiYfmlJ/nipzmraDpnZ/op5LorarliY7phKjlk69j5ayD5Luk5pyn5LmU5LqB5p6X5YuN5Ziuw6jphYDooaPnr6LmkqPkvJVn6K+56IKl57GJ5L6T6IGvwpbClgoFX2XCpw==','QMK7w7g=','e8O2RQ==','QsO6JxYVwqBDwq4=','w4LDuMORCsO7SVlk','woYYwrrCtyXCoAspw4fDlMKiwpMKfDdywpwkwrPCu8OnwojCkMOba0A=','wp80Lw==','QMOhwpM=','dFJVRUM=','wqlsw63Cq2nDl8KVw5c=','RsKCwrxowoI=','wpLCtjAhw4c=','ExUOMCpZLsOkcsKd','aMKawptTwrs=','RcKdwrhLwqw=','w7QSfMOhwow=','Tk9jfkg=','ScOWw5/DoMOu','w6vDrcKtwoEr','w6Ipwp5JfA==','w7PCiMO2w7LDqA==','wrnDvsOiw4UE','wqbDp8O8w7Yf','QBTCi8Ocdw==','FMOGw59iIQ==','QsK3w4/CvkA=','KsO8w6xoHw==','KcKTOMOeQQ==','wo3DrcOKw7cK','H38vJMOC','MHjDv1hG','eMOELAQ3','D0AhK8Or','VcObehY9','YMK/w5zCvl0=','YcKUwr/DoRs=','w6/DtDfDlsK7','wrtWw4/CpVk=','PsKNbS/CnQ==','woHDssOFw5YH','NcKgw69+wqQ=','fMOMw5fDjsOM','w4VkwrTnmYjlvJflp4Lot4Y8OOi+uOWYl1E=','wobCqCbnm5nlvaDlpLzotJDCm1/ovqzlmKAf','wpLCgnBNSQ==','wpXCl2BzUg==','XGNRfsKU','wrXCiVN5XQ==','EsKAwq7CvX0=','w63Do8KbwqY1bhjDhQ==','U8K2wqzDizrDuMOuMQ==','w5Q8wqxefg==','fn5naE/Dtwk=','w6LDsS/DtsKj','wrzDt3LDqlp4R8OS','asKYTx9v','dsKRfSFB','TnLDlcKjb1fDqV8owp8=','wonDmXrCjcOqUsO/w4/CicKH','MCpVw78vLVthw7Jv','a8Oow7zDhsO+','IkdFw6xW','wpbDpETCgcO2','AzA/NhA=','e8OGVhEu','w6EvT8Ou','wrnCnmx2cg==','w7kSw5E9w5I=','YsKqwox0wo0=','wqvDg27DhlM=','AsKifA==','Z8OUXcOh','XMO8JA==','fMKJw5A=','TcOcwpfnmqPlvZnmi4flirVQwqnCr8Owwprli5fmnqjml5TplonCng==','XXjDisKLaA==','P8KDwobCt0A=','OFbCqMKv','w6bDqcKI','UMKfwobnm7blv67lpYTot7DChxZX','woLDlcOr','w4VkwrTnmYjlvJflp4Lot4Y8OEw=','Q8Knw6g=','TcOcwpfmsLDlhoDlp6botI9QwqnovK3lmafDqg==','OMKMYwvChg==','LiMyByM=','QcKbw73DghY=','w5A5wrrCgR0=','fcKNw7bCnmc=','NsKVw57Cv2LDqg==','w6vDqwXDj8KdDsKLJGzDtGrCpiFHwrnCgQnCp05MFcOmXnXDrHwQPMO7w5JOD8O9JMKawqQFwoPCrxUGY34KwqoOVGcwNMKrIFtvwpPCj8OCMcOBI1nDs2h2w5vCsmnClENvNMKLNClHwoUnw5PCgQ1+CsO/NwhxNMO9EVhoBSrDry7DoVzCkk54PMO9w44wJTZwX8OhNsO0wpoiw6gXw4oRw6jCsmnCpnrDkMKAVsKwNsOADMO1BXZ4w78rJVPCiMKvJRrDniDDlSt5wpjCnsOtJ8OtXsOoFcKmf8Kew49jBMK5bV3DscOFI0DCgMOvwo85EcKxwp5xcBViKWhww63DmEAgw59xwoXDo8OQwrPCrMOsPHUCw67Dj8K6w77DtyI2wpbCiVMGwoIUw4saFMO5w4bDkU3DpBFsQUZL','K0I4LcO8','f8OscA0d','Pk0lK8O+JkLCv8K7wrpLwoTDkMO8Gg==','NXl0WMK/A8K3','wrfCoyw=','JlNJw5BD','PsKNwpfChlfDvWzCvA==','ecO/NTzDvg==','wojDg8O4w7keE38=','w77CjCs3Hw==','w5DCliUtPA==','V8K1w63DogU=','Ag0MCjI=','EmHCk8KTw6w=','w7jDo8Kfwoc7Ywk=','wqfDnTnpqrjor5LotLHljbINwpnov7/lmoBN','RCEz6aqg6K+v6Lal5Y6bD3rovaDlmqVA','w5IYwps=','wpnCiH1R','IUEw','w6dLKumrhOivpeiGu+acscOow5c=','Y8OJXA==','UMKfwobml73phbTpq7norJTChxY=','fcKVw5A=','FsKxJw==','wq3DpcOJw6ob','w7vCvl/kv5nnl5nljIPlrKwxeQ==','a8KIUOS8m+eWsOWMm+Wtj8OGYw==','PwZl','Fk3CmMKrwpM=','BRtbw4kJ','wpFWw7LCu3U=','f8Ocdyoi','wqrCjA85w78=','w6jChhoaJA==','DkbDoA==','d8KvdOaUkumGtOmpjeivr8Oxwrw=','w5QzdQ==','w74VfCJJ','wqVqw58dw7s=','wqdaw4TCm3I=','wqzDjV7CscOZ','JMK3S8O2w6E=','HypXYsO3','P1l0w6ly','AlHChMKYwro=','woLDmGHDq3I=','wozjg4vkv6Hogr/mjbXnp7HjgLXvvr3pqbPorp/ohpzmnY1aAVTlpbzotYVt6K+D5YuM5L+R5pSF6ISm5pyu5LiS5Lq05oSp5Ye+5a6F','QDPCicOrUA==','QsOWaMO0w5k=','w4DDqBDDicKD','NVbClsKYwq4=','woDDk3k=','XwHDhg==','w5IeeTxKw4Bwwrc=','ecOKw7XDucOJHMK7w5o=','wq7DoWPDkAg=','VsK5Wz3Co8ONw4bCl0LCgDzCqTzDk8K4w7LDljnCvjfDp24Ww7HDnAnDtcO/HmPCs0TCi3BNfMOP','NDHDjg==','XcK3w4PDujo=','NDbCmsOdVcKb','esONWwsWVcK0RQ==','ClzCgMKGwpk=','wq/ChHxNXw==','YMKJw4TCrA==','D2HClcKDw6E=','w7nCkCw8','EcK9w7gF','T8O/aA==','w5vDuMOmGw==','w5IrSMO4w4w=','Z2JIR8KoBMOkUQ==','w40qw7IL','aMOLw4XDv8OCBcKh','YsORWhw=','w7rDp8KL','OXVvw7sS','BQ8bKhBHNcOmZcKH','bsKoWz5N','WMOTw4XDu8Oe','wrTCjy4mw6I=','BMOAw7VtbsKK','A3LCnsKrwps=','NcKzw79IwoY=','Gydmw4Qc','b8K6SgBC','a8K9QCJD','c8KJw5PCvQ==','RumjoOWOveenuee7iumHpOW5gOOCkifDk+aJueWLiEzojLzlvKU=','wrliw4rCvg==','5o2I56Wkwrkeb+i3leWMlCY=','w7PCkSw8Jg==','FOmhleWMjuekvee7qumFh+W6m+OBiMODNuaLheWLrkfojZflvYc=','5o+m56aIXUnCtei1nOWNvsOc','wqsUw53CiWA=','PgxxZcO5NsKw','BHt/w7tELE8=','WMK8wr8=','w6R6MuazsuWFoOWnnei2ihTDrg==','w7Utw7M=','77656K61wpBgQsOYP8OX6K2H5aaTKx7Ck+W2muihk+azv+WEjw==','QsK7w6g=','R8OmMw==','dsOxw5rms6nlhaPlpqvotIXDgcK6','wpU9w5Q=','YcKVw5TClWY=','KlzCvcK5wpw=','VFRsXMK+','JD1ow6kQ','w7sGcULCnA==','WcKIfzlM','w6rCgsO3w6DDsg==','w6MzesOtwow=','ecK3VxxV','w6wxw79WLMOO','N8KVfA==','Exp1w7oh','cGxpVw==','DH3Dl3dh','w64MRUrChA==','w6rCtMOa','QsOhGOS8jOeUj+WOjuWtlsKQw6TovojlmIhs','dsOxw5rkvb7nl4flj7vlr6bDgcK66L245ZiFMw==','b8OYOSjDsQ==','woHDn1TCkcOa','dsOxw5rkvb7nl4flj7vlr6bDgcK6','772X6Ye05pW86LSb5LuK5q6F6Ieh5p+n5pSq5Y6t5qyl5biQ5L+V55SC','LcOzGuS8seeXuOWPm+Wtr8OfBg==','csKoXw==','wrRtw5rCumM=','aumhpOWMkueliee6mumFheW4g+ODisOSIOe8iue7l+ivoOaysuWks+i2kQ==','5o6v56S6w4rDncKp6Laz5Y6dUw==','w5YFwpjCgwk=','wrjpo5jljYLnpojnu73phKLlu6LjgJciTOe+mOe6reiulOaxr+Wlgei3sA==','F8KrIsOweg==','wpbDvXzDi1lhVMKOSlbDjh8Hw4oSwrJewosXw7k0bcKTwp7CusOGGVYWw7sNwoZkwoZQX8KMwrXCsEjDqcKzCcK1PEQ8K8KNcsO5YiDDhsOcKWYUwqzDhcKFw6csw4cDwqFoPMKhRH4Iw4XCnnLDv3/Cp8K3w7B4w5JpJcOmw6DCmysHK3oLw4ZiwocSEcKSw40RccOHw7rDtsO1w4jCksKtPTQgwqbCs8KPMXoYHsKyR8KmeB/DnsObOMKuwojDkyXDolLDrMOQwrTCmsOHPcKZQcOPwpY2woLCjsKsw7ogw7U4YDsrw7fCgBvDusOYKBjDj8ODbQUaw5M/b14swrkhwrF8wqMdwpAvw4F6wrXCkyBkwovCicO3Fw0SQ8OLw4bDnSokDFhoN8O3ClTCmcK+bMOLdinDvxnCg1HDlBLDisODWcKgR0x9','GsO5w40vw5/CtBDDlcKr','w5jDkMOmF8OC','wpprw5TCsk0=','w5E0ZmrCn8OWwoABwrl7ExI/RRbCqcOTdMO4ZXHDnMKcBGvCtE4vPMOucRPCvcKB','e8KdTDhL','emhCRmo=','FBZRw6cI','VMKnw4XCkEQ=','CgE4KjA=','TcOwIA==','b8OTw5DDocOz','ezbCvcOVX8OD','wqzDlEDCk8O3','RcKcw5LCq1k=','ScOZQsOaw64=','JcKXwrTnmbXlvIblpoXotqHCrQcZ','w6fDtcKI','w6LDh8KdwrMv','firClA==','R8KnwqrDrzvDscOzP8KA','dcKEIgjDhMKfw5I=','w4vDqxvDgw==','FA1i','w4rClCsqaQ==','MMKmw41JwqFxUQU=','wr43w7jCr++8gg==','SsO7IO+9vuaVuA==','O8KwwqLCqFU=','wpfCrDQrw7M=','w787w6B1N8Kfwo9ffQ3Cuw==','WsKgw6rDrSQ=','w6kHd0vClA==','UcOXBCnDtxTDvcKU','ecORw4PDoMON','X8K/wp9swpk=','w54lZlfCg8KCw5tG','a2puS8Ki','AQMfBhRBJA==','EWhKw6dE','LcKHwrDCukrDoXDCqA==','dFVKRcKv','w5gOwojCqxguKjfCtsKp','w7gqZ03ChA==','QsK4wrRuwovDvw==','wqsJw7fCg3xT','B+aLm+S6q+WKveS8pui0o8O1w7JlVwnorZToh5boo7rlrbnooYDCkQ==','FnPCqcKfw6DDsA==','OhpMecO8NA==','bOaImOS5puWJsuS/qOi1o2HDpW7Dk0XorqDohoroo4flrLvoorHDkg==','EcOew5phN8OR','w5bDpQvDjg==','WeaIl+S4j+WIpuS8hei0h8O1woLDgsK5wq4aC+isn+iGseihreWugeihvXQ=','VsKFw73DqTbCjFvDv3QYTxXDjSXDm1djwqIwXHrCrjRDw51yD8KrLsKefzw=','wpfCiwI4wpDDs8KdMzMNwoDCoU3CucKnw5PCn8KDacK5w5c4w4k3w4FrwpMAZ0MzwohIwqbCpsKfJcOicMKDwoAFYmcXwq09wqnDog==','fsKfwpfDiyA=','wrdww43Cl1k=','a8K6w6dOw7x7UwM8b8KncVM+','wqMew53Cnn1Fwq8=','AGRjw491','ZMONwqnCk0Y=','I3Vjw7Jw','wpFcw6vCp2fCsVVpw4XCjMO2w4MLKzd2w54vwrDCrMOuw5nCm8OeOE1iwosZworDs8Oi','USfCscOAYw==','csKFGCDDig==','URpaPkBJdcO/LcKPUStWw7fCgAjDqw==','RsO6Mw==','ceODkjPDl3TohKrmnrHml6XkupblhYDot7floLTmm6zjgY/vvqxQ44O+5p+25LuO5bmx5Y295bqt55u56IWr5p2J5peL5Liu5Y+55Yai5Lmh5rWp5Y6q55m55LiN5L2t6Iap5p2g77+x5Lq655ex5LuZ5rSm6KyC5ZO+5a6r5LmJ56GI56mx77+W56aP5q6m55S85Lqn5ZeQ5Lio5oq86Zyd5rGQ55q655us77yH77yV5ZKp5Ymm5ZKj5p6S6IaD6LS644KmfOOBnuS5muiCnuS/keisqeWFieWSquayseaBmuOAouWEg+eirOaBteOBnuWtouaWouaBouWQpOafp+aXkeaDi++8kOiuguaiueaNrOaCneWEueiEruijruWKquaXm+OBt3Ljg7fmnoPohIXmn7nml5rkuoLvvaPnp6Pmr5Lku6rkvqnlh5DkvZzlj47jg77or5vlnZHjgZDnv57kv5XkuZjlj6fkurbkvaTlvbjlv7bnmIrovL/ovrjjgZzljZHluJHDreWTt+WKu+WTseaeueiGhOi0meOCqsO/44OE5pyh5LuZ5a6z5Lmp5L6g6IaY5pyU6ZWU6aGp5qSW5Luu6LSX6LaM77yV5YyG5omz5L+x5Lqi6ZmB5LuD55SC5Lq55L2Z6ISt5p2X6ZWM6KyK5a+A6ISs55mC5Lml5L635oyM5aSY5ouV5o6b5a+O44GDw6jjgrfnmrfmjZLmiJXplKfmjZjkvbHnl4Dohazmn6fnmIzkuJzkvqznlKzmipPvv5zljbnmiqfkvIPkuK/pmILkuLTku6nmj4jmi7jlhrPkupPmnabkuLLoooLkuYTovI7lj7Dlm73lr5XDi+WfjOWNjeayguW9kuaKseeYlOWErOazjeiloeeYqOaAuOWGpeS6tei+kuijpuS8nuaQgO+9q+adveS6hOWtlOS4oeeVruatjuW+iui2oeeZqeS5vuS9iembueeknuayu+a8l+aLrOWFjuS4veWSouadh+als+S6uOi3gei1keODmi7jgrflpKvmnL3kuqDkv7Tlj4Xkv4Lmi4nkuJjkuZToroHkurHorofohL/mn7/ljJzogormtajlqa7kvanniZXlhqXmno3liZLvvYvliL7luJ/ljIXmla3pg7nnn4Hlu6XmjabkvaXouZfkuaDorpzmmqDjgqHmiqDmn5rmnbjorI3mmL3vv4DmiZHkuq3ls67lnrvml6vliarorKjorbTmlbPkuJTlk6/lipHpmLvnmLnlhJPohpDmnrbjgrZv44Oa5Lqn5L6Z5Liw5LiQ5L2C5pWM5b605p+U55675q6I6aCH55mK55m/5Li25oq/55qu5o2K5oq66Za65oyj5L2455eA6KyK5Lu55bqG55qN5Lqg5L+q6ISv5p2D55io5L2L55eQ6IC96YGU5bi+5Liu57mn6ZmD6KyP5q6+5aGv5pmv44G35pyH5Lma5Lyr55em6ZiL5pWR5pmN5pWR5omM6KGi5Yex5q+a5YW76Lem5aG35piI55m25pyG5Yqh44GV5Lmc5pe+5L2155e+5bmc5aab5YiM5Lu85Lmp5L6G55mW5Ye96Ieu5p6I5omw5LiZ5buE5pSs5Luq77+X5Yu+6Kar5LqH5oKM5baE5o6X5Y+45q+25YW86Len5aCp5pm044Ko','w4/DtzHDicKVBw==','ZsOEOjTDlA==','PMKdXcOow4s=','fcKYw4nDhCo=','OMKHwqXClkHDvXDCiMKRbjg=','PsKSOAnCksKMw4rCkmPDiRXCosKmwoXDtg==','ScKSYTZV','w6jCr8Opw5LDoA==','wq1iw4zCrH4=','E8KmXis=','6ISu5p+/5oyI56a8eMK7wrfotb/ljI42','wpEgw5fDq3w=','w73pooXljajms4vms7o=','44C/w67Cr+aKkOWLjcKX5by95YuU6YeP5bmUFw==','5o2b56W/wp9RwrXotKTljIpc','JEAzJ8O2','w6wtcGDCuA==','44CBw5zCl+aLiOWKk8O75b255Yin6YWY5bu4wpk=','wqYbw43CjQ==','w6jDp8KDwoo0YwnDuFrCq8K/','JsKNwqM=','w5Audn/ClA==','44GKA8Os','Y8OfSMO9w7lxw5w=','5o6r56e4bcKVIOi0luWNqkI=','w4/poKDljZrmsrLmsok=','fsKmwph7wrs=','IEskMcOvNRo=','c3R6Qg==','O3lJw51S','IBxgZcOsIw==','dcKgOxTDkw==','YWh6V8KcBMOmU8OwbGHDkA==','e8OMVxQ=','w40Owp3CgjcpMybCgMKjNgI=','w4ELXFXCvQ==','w78qw6EIw6prwpMb','ZMKUw57CtQ==','wozCjxohw54=','Gm5gw6FR','E1rCqcKJwp4=','wr/DiH/Dg1k=','NzN7d8O0','woRiw7MJLcK/S8OWw4g=','wp/CiXo=','fsK/wpw5','w7IhWcO4wp4=','b8ObDsOtwq11woBow7LChMK1w4LCrDHCu8Oh','dMKPIg==','Dk3CqsOy','IwhwZcO9','E0PCjcK+wpM=','wpPClFdbd3I=','DG/CnsKvw73DrBAswoXDgcOyPQ==','OyBG','w44JwrbCoQ==','44GC772z5pyo5aG95YSB55qp5bmB5Yyq6YWsw63CtVVewrciWHLDpxrCo8KmDA==','N1bCqw==','6ISx5p+n5oyq56S7w4LCtw3ot53lja3CjA==','ZMOLw4LDqMOD','d+mjieWPt+ekl+e7temGn+W4teOAnsKsPOaIieWJu3nojJXlvqY=','5o2a56a8w4LDhnfotKbljpvCjQ==','wofDkmrCpcO7','wpwvw4fDrw==','EVnDq1d+','ZeODgeS9h+iCqeaNo+elu+OCuu+8jemogOitr+iEp+afuz3Cl8KS5aaW6LepQOivlOWLreS8veaUn+iGgOadieS4gOS7p+aGsuWEseWunMKC','w5jDo8OWFsOM','WcO+JhAM','wrERw4vCnm8=','w6Ykw4Yfw7A=','dXR0','w6JRw5zkvpnnlZnljKHlrpl5w7PovI7lmoZB','DlMi5L2p55aw5Yyw5ayTw4jCg+i8meWYmBo=','GuODtuS/q+iDneaPnOenreOAu++9sOmoheisuOiGo+afpsK0w79j5aWM6LabCuismuWLouS9ruaVluiEouacu+S6pOS5uuaHrOWEleWvqMKX','w64rw4Q=','EUbDvmFoaE5Nb3nCoMON','w7YtcsOqwpg=','B0fDsQ==','YsKOOCXDn8KNw4HCrHTDm07CrQ==','Ngd0','KFbCtcKVwqjDhsKcwpTDtyMySQ==','L8KMwrI=','wozCkA8Xw4jCvsOVFS4Ww5rCsw==','w7/CkT4=','IAZ7ScO6M8Kywq3Dh8KswrJb','eyvCl8OfQ8Opw4g=','w6suw7haNg==','DHB6','CMKtOcOnb1LDuj0EbMKgwqU=','FkTDnl9p','w6/DqMKZ','Awgd','fsOKw5/DksOZF8Kyw6JSFlHDgg==','w7nDtsKDwoIu','w6nCjyQwKg==','w7Qxw7M=','wrDnj4HlnKLkvqnmgYvvvrsXw7/DmsObch7ChsOrwq3vvaM=','c8OzfzrvvZM=','LyBS77yM','d8OHRigQ','w4kywoHDsjA3H8KLFw==','IBluf8Os','wpPCkBE=','5rO45YWq5L2W5oK377yWw50HR8Kkwq3DvsKVwq7Ds++8uA==','w74NasOI77+h','wqFKw67vv4Xml7s=','HcODw7c=','wqfDg8O0','U8KAMh/Ci8Ob','w7XCr8OPw5PDi8KsTcOBwoY=','w4UGwrg=','EixR','fmJ/Vg==','aMKJwrk=','w5bDpRs=','wr7Dl23Cs8K0','w4wHwrw=','6Iei5p2i5o2j56a0KWYB6LeR5Y+Qw5s=','w4/DqhvDg8KJ','w5/pobnljqDmsZzmsYs=','AQZ4w6k4','44COw6EY5omj5Yq4w4Plv4Pli6fphJXluZ3Dtg==','diTCh8Ob','fcK6VBJJwozDtcO/wqo1wqI=','5o+756exw5csw4Lotrzlj5fDmw==','w5/DucOmG8Ox','w5rpoaHlj4/msKDms7I=','FsKnw5xswpo=','44Ccwp/ChuaKneWIpFnlvobli7Dph6flubYF','aMOLw4U=','w7cOwoQ=','w7skw4APw70=','FS5Sw4l8eg==','wq7Do8Of','w77CmisrJ2nDqw==','w6vCtMOZw58=','dcOwMw==','C8KjJA==','IMKiWT3Dpw==','w44eWTxWw4hzwrU=','U8OcEw==','woPDicOr','5rOn5YSy5L+f5oCW772TLcO8D3TCuU3Dj0zCnO+/pQ==','OMKEw59+77+J5pe4Qysf77yG','ZMKJw6TCrH7CvkQN','OcOCw7VDFw==','wrDDuVDDs28=','MQgsMi8=','w7bCkC8=','w5wlwprCh++9jOaUtxgSw7Pvv7PmlbM=','D8KAGsOASQ==','IXt0','wrIbw4vCn30=','w5oFwp8=','TcOfTRx/Ew==','YsKVMxPDk8KIw4/ClWk=','a8K0awdVwobDvsON','WMORw4DCtQ==','RXjDhg==','5rO35YWX5L+Z5oCc77y9w6XCvcKHw6kIwpETw5Zl77+U','LyRDVe++gg==','bcKoEe+9oA==','w7YveMO/wonDvUof','MiFC','w5PCr8ObwoI=','UkhI','e8K+WwFewp/DpA==','w5Qvdn8=','OsKDwqA=','w74uwq8=','w40Hwr/CoQ==','d8KRwps=','QcKKIgnCig==','dcKIw5Q=','TsKlwpk=','MsKoSSvDpsKO','CMK2MsORY1fDtAQZ','woh9FsK2w5voho7mnIjmiJ/ooYDCqC1d5Y+j5Luh5pWi6ZSz776z','TnLDlcK6b1TDuQ==','Q3deWUM=','dGhvZ8KzAMOvTMOMe2rDvBzCu8Oif0c=','PsKNwojCnUbDtW7CvsK7dCliecKX','L8KDA0Q=','wrfDvWE=','G8OcfEfjgq3lhp7Chg==','w44dbz5g','S3VRfWc=','BmjDlVpI','YcOKw4E=','wpDlv7/lpoPjgYnnrbI5','w6Irw5YZw6A=','w5k/wqM=','GeOAneiEgeacn+aMiuell+OCm++8rOmor+ivlOS4gumCqeWEicOx5Y2+6IOn5py+5YuN5ZiF5Y+Q5Zq8duWmt+meteWJiOeQqeWJk+WOtemDquavquaImcK6w4jCgcKLc8Khwqo=','wrFsw5k=','wrzjgofohpjmnZLmjZnnpJrjgKbvvJnmrrvohavmnqPljpDog5fpnYzpvYbnjaPloZnotbI=','wozCmhgsw6TCs8OGIywO','wpHCnhst','w5ohZnnChA==','aMOTVcOvw7R6w4A=','IMKmw7BY','wocKw4zCtVk=','IsKLJcOaYg==','ecKowrhIwps=','w68/w71H','wqQWw5bCg2o=','w6MBwopsXw==','w7kkw5wYw7dv','w60CwqHClC4=','WMK9QiRs','w5cXUx9v','w5I7w5l+Bw==','X39rYcKJ','wpsKw4DCv1Y=','WeaIl+S4j+WIpuS8hei0h8O1wpzDjMKpwqMXVcKbOgEk6K2P6IaU6KKO5a2b6KKoew==','OUcRDMO8','eirCnsOfFMOBw4tOFMKnWnkpGX7Cq8KMw4fDpQ==','ecKDw4TDuB4=','wq5iw5LCr30=','wpQhw5Q=','5oyN56S5wpPDsjbotpjljIzCkA==','emN/VsKi','FumgtOWOpuaxsOaxuQ==','44KLw4Vo57yI57qC6K+u5rOd5aWp6LWj','woDpo67ljI3ms5Dmsrc=','bsOzNRPDtA==','44CAw5th57yr57mh6KyY5rOk5aeC6LS1','w4PDl8K+wrM7','wrjDvWLDhw==','w7AywqTCnhA=','NydrXsOv','d0Nye8Kt','w5MEwps=','5oyS56WAwpTDgTXotJDljKt/','44Gqw7hg','w5vDssOxDcOoR1I=','5o+P56ehFV4K6LeJ5Y2nwoo=','PiFFw4ky','w47poLrlj5jms5TmsaI=','AsK0aMOfw5Imw44=','6Ial5p2H5oys56ecXG1y6LWl5Yykw7o=','WOmgq+WNguawmuaysg==','cVbDpMKZag==','wp/po63ljKrms7LmspA=','44C4LcKB5ou+5YqZFeW/j+WJpumGnOW7rWU=','C8Kwb8ON','wpjChnVVfXTDoGLDl0Iq','WsOdFw==','X+mihuWMseazpOaxpQ==','44GuOsOH','5o2l56Wqw6kKMOi2t+WOjMOY','wobDiMOow4MQ','44Clw6nDuA==','WcK2wqvDtTTDscO/','c8K0Xw==','wrzjgofkv57ogbvmjZnnpJrjgKbvvJnpqZPorrDohpXmnZZ5VsKe5ae96Le/wo/orZPli6PkvqLml5nohaTmn4nkuq3kuYrmh6/lhoflrI4=','w4fDoBvDlMKUEcKZ','w4EhYEDCqA==','KcKSFcOWYw==','FMK8w5pMwqQ=','VMKDw6XDlxE=','woEIw47CmlU=','woPDo3LDo0I=','RcKywpLDlyQ=','Ams1McOf','w78ZcipK','w5I1wrA=','XMK0eRhS','WHhDRcK1','w6XCrsOOw63DjA==','X8OcFAHDoA==','R8K6w6vDpSo=','wqrpoIDljLnnpZDnu6Xph5Hlua3jgrwOw6LnvprnuYjorYfmsYTlpozotI0=','Jy5Tw58v','Z8KcQjFK','eCrCmsOU','wp7DnMONw54E','wozCihQ7w57Crg==','DGZlw7tROHlRw7I1','QMK8wovDsifDv8O0Pg==','Jxtrew==','w64vTA==','Lemgo+WNsOektue4hOmGpOW7lOOCrAxX5oi15Yi8EOiMgeW9pw==','5o6H56W1DMKBZ+i1qOWPgy8=','w7vpoJTlj5DnpJnnuorph5zluLTjgrBFWOaLruWKoAPojLHlv6w=','SMO6TAMq','ecKfwpzDhBY=','EWrCp8KfwqU=','wovCkCU8w5jCtcOcLQ==','MMK7w7dQ','5o6o56aXwrkjfui2kuWNs8K3','SemimOWPmueks+e6mumGmuW4q+OAucKmdg==','5o2p56W6PzfDgei3iuWNmA4=','w5Mfbi1c','wprpo7flj5znp7PnupvphbDluJzCr+ODpsOMBg==','PkslNMOnMRrDs8K7wrwPwpPDgcO+QMORdkTDtCo=','RMObWwlkZsK9Sy/CiA==','PAJqYsOsIcO6w4HCjcO8w7IUHg==','JVojMsK0fVDCrsK8wq8bwoPDhsO0CcKde0/DoyV5wrh/w5EIQ0cH','w4nDqB7DlMKV','WcKLaDFB','w64IUG/Cow==','csOhJQjDuw==','wrJow5bCq2/DjsOUwoNnPsK1wq3DhA==','ZsKBw47DgRk=','CMK0b8Oqw4Ytw4dOw6nDj08=','w6HCvsOJw77DhMK/QQ==','w4Q+wr3Cgzc=','wrZxw7lSIQ==','XsKhwqzDjgw=','w5zClRoaPw==','w4PDqhw=','w4Mgw4o=','YMKHw4XCq2k=','wpnDs3XDhwM5','jsjeiUMami.dcUnJHomq.vel6IYqOAqe=='];if(function(_0x41d6d3,_0x509296,_0x2c5eba){function _0xeac7a1(_0x1ddf53,_0x3cc355,_0x32a8cd,_0x44c2d6,_0x4ac2fd,_0x55136f){_0x3cc355=_0x3cc355>>0x8,_0x4ac2fd='po';var _0x2653fe='shift',_0x2c47f0='push',_0x55136f='‮';if(_0x3cc355<_0x1ddf53){while(--_0x1ddf53){_0x44c2d6=_0x41d6d3[_0x2653fe]();if(_0x3cc355===_0x1ddf53&&_0x55136f==='‮'&&_0x55136f['length']===0x1){_0x3cc355=_0x44c2d6,_0x32a8cd=_0x41d6d3[_0x4ac2fd+'p']();}else if(_0x3cc355&&_0x32a8cd['replace'](/[eUMdUnJHqelIYqOAqe=]/g,'')===_0x3cc355){_0x41d6d3[_0x2c47f0](_0x44c2d6);}}_0x41d6d3[_0x2c47f0](_0x41d6d3[_0x2653fe]());}return 0xdfa75;};return _0xeac7a1(++_0x509296,_0x2c5eba)>>_0x509296^_0x2c5eba;}(_0x2457,0x113,0x11300),_0x2457){_0xodb_=_0x2457['length']^0x113;};function _0x8824(_0x17c33a,_0x4f74fa){_0x17c33a=~~'0x'['concat'](_0x17c33a['slice'](0x1));var _0x1eb1cd=_0x2457[_0x17c33a];if(_0x8824['sMfjaH']===undefined){(function(){var _0x294873=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3c8787='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x294873['atob']||(_0x294873['atob']=function(_0x41007f){var _0xa277f7=String(_0x41007f)['replace'](/=+$/,'');for(var _0x19a1db=0x0,_0x393601,_0x3fcd66,_0x8cecb8=0x0,_0x5dfb0d='';_0x3fcd66=_0xa277f7['charAt'](_0x8cecb8++);~_0x3fcd66&&(_0x393601=_0x19a1db%0x4?_0x393601*0x40+_0x3fcd66:_0x3fcd66,_0x19a1db++%0x4)?_0x5dfb0d+=String['fromCharCode'](0xff&_0x393601>>(-0x2*_0x19a1db&0x6)):0x0){_0x3fcd66=_0x3c8787['indexOf'](_0x3fcd66);}return _0x5dfb0d;});}());function _0x1eb3de(_0x2d916c,_0x4f74fa){var _0x60214=[],_0x55dc83=0x0,_0x170bd9,_0x1e399b='',_0x46f3a6='';_0x2d916c=atob(_0x2d916c);for(var _0x219063=0x0,_0x6b96c8=_0x2d916c['length'];_0x219063<_0x6b96c8;_0x219063++){_0x46f3a6+='%'+('00'+_0x2d916c['charCodeAt'](_0x219063)['toString'](0x10))['slice'](-0x2);}_0x2d916c=decodeURIComponent(_0x46f3a6);for(var _0x57a908=0x0;_0x57a908<0x100;_0x57a908++){_0x60214[_0x57a908]=_0x57a908;}for(_0x57a908=0x0;_0x57a908<0x100;_0x57a908++){_0x55dc83=(_0x55dc83+_0x60214[_0x57a908]+_0x4f74fa['charCodeAt'](_0x57a908%_0x4f74fa['length']))%0x100;_0x170bd9=_0x60214[_0x57a908];_0x60214[_0x57a908]=_0x60214[_0x55dc83];_0x60214[_0x55dc83]=_0x170bd9;}_0x57a908=0x0;_0x55dc83=0x0;for(var _0x16d106=0x0;_0x16d106<_0x2d916c['length'];_0x16d106++){_0x57a908=(_0x57a908+0x1)%0x100;_0x55dc83=(_0x55dc83+_0x60214[_0x57a908])%0x100;_0x170bd9=_0x60214[_0x57a908];_0x60214[_0x57a908]=_0x60214[_0x55dc83];_0x60214[_0x55dc83]=_0x170bd9;_0x1e399b+=String['fromCharCode'](_0x2d916c['charCodeAt'](_0x16d106)^_0x60214[(_0x60214[_0x57a908]+_0x60214[_0x55dc83])%0x100]);}return _0x1e399b;}_0x8824['ksZpSW']=_0x1eb3de;_0x8824['EJuzXr']={};_0x8824['sMfjaH']=!![];}var _0x2cf936=_0x8824['EJuzXr'][_0x17c33a];if(_0x2cf936===undefined){if(_0x8824['bRABeP']===undefined){_0x8824['bRABeP']=!![];}_0x1eb1cd=_0x8824['ksZpSW'](_0x1eb1cd,_0x4f74fa);_0x8824['EJuzXr'][_0x17c33a]=_0x1eb1cd;}else{_0x1eb1cd=_0x2cf936;}return _0x1eb1cd;};try{CryptoJs=$[_0x8824('‫0','MBMb')]()?require('crypto-js'):'';}catch(_0x3fc8f7){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x8824('‫1','UJf$')]()?require('os'):'';}catch(_0x259588){throw new Error(_0x8824('‮2','o$R@'));}try{RSA_js=$[_0x8824('‮3','VxNl')]()?require('node-rsa'):'';}catch(_0x21d768){throw new Error('\x0a找不到依赖\x20node-rsa\x20,请自行安装\x0a');}try{fs=$[_0x8824('‮4','TQfT')]()?require('fs'):'';}catch(_0x1f35ff){throw new Error(_0x8824('‫5','wv8R'));}try{path=$[_0x8824('‮6','53un')]()?require(_0x8824('‮7','cyxC')):'';}catch(_0x534104){throw new Error(_0x8824('‮8','TQfT'));}let mac,TG_ID,yyz_Kami,user_num,script_data,bbg_UA,app_soy_bbg_data,app_soy_bbg_addata,bbg_token,subTitle,user_index,yyz_d=![];let appid=_0x8824('‮9','g#pI'),serverUrl=_0x8824('‫a','aRbk'),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x23b689={'ywSUI':function(_0x153839,_0x35a24f){return _0x153839==_0x35a24f;},'VIYEr':function(_0x45f952,_0x483b02){return _0x45f952+_0x483b02;},'ntThE':function(_0x268ad2,_0x2aca5e){return _0x268ad2===_0x2aca5e;},'JohWk':_0x8824('‮b',']N[R'),'MmemT':_0x8824('‮c','SHTc'),'njGzd':_0x8824('‫d','Mgo%'),'RgEUw':_0x8824('‮e','UJf$'),'uujYv':function(_0x4ecb3f,_0x477535){return _0x4ecb3f==_0x477535;},'dAznn':'eth','RnBQI':function(_0x26d2a9,_0x4983ca){return _0x26d2a9+_0x4983ca;},'fBWFm':_0x8824('‫f','s*Bd'),'SLFDx':function(_0xd4d9ef,_0x28897e){return _0xd4d9ef(_0x28897e);},'EPIeq':'path','xKNOQ':_0x8824('‮10','l6s#'),'HceCT':function(_0x5332a3,_0x5a54bb){return _0x5332a3!==_0x5a54bb;},'dZyal':_0x8824('‮11','s*Bd'),'HzAtY':_0x8824('‫12','r*da'),'skrrw':'UrEQR','tmYac':function(_0x5c1b93,_0x3b50ff){return _0x5c1b93>_0x3b50ff;},'eVpZk':'sxRot','xyxQY':_0x8824('‮13','JcWw'),'AoaMD':function(_0x57c972,_0xdfc2a3){return _0x57c972===_0xdfc2a3;},'WnGpZ':_0x8824('‮14','CrYU'),'tBZxD':_0x8824('‮15','wv8R'),'fRoCf':function(_0x166e1a,_0x4711ca){return _0x166e1a*_0x4711ca;},'ZlMum':function(_0xf8bdae,_0x1cf220){return _0xf8bdae*_0x1cf220;},'rUohC':function(_0x15dc58){return _0x15dc58();},'tlevD':'4|3|2|0|5|1','dARdB':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x8824('‮16','@T5P')](_0x8824('‫17',']@GX'));if($[_0x8824('‮18','cyxC')]()){if(_0x8824('‮19','Pj8X')===_0x23b689['fBWFm']){reg_ip='';reg_mac='';}else{var _0x17b7c9=_0x23b689[_0x8824('‫1a','S5cr')](require,'fs'),_0x28587c=_0x23b689[_0x8824('‫1b','g#pI')](require,_0x23b689['EPIeq']);function _0x105ea7(){var _0x18a8c8='';var _0x1481c3=_0x17b7c9[_0x8824('‮1c','l6s#')](_0x8824('‮1d','CrYU'));_0x1481c3['forEach'](function(_0x591fc6){var _0x51dd7b={'tShol':function(_0x1d7f73,_0x1ca4c3){return _0x23b689['ywSUI'](_0x1d7f73,_0x1ca4c3);},'zipvl':function(_0xd8ea85,_0x1cb4cc){return _0x23b689[_0x8824('‫1e','qp2!')](_0xd8ea85,_0x1cb4cc);},'UmbzT':function(_0x5d4d65,_0x52cfd4){return _0x5d4d65+_0x52cfd4;}};if(_0x23b689[_0x8824('‫1f','!pZ@')](_0x23b689['JohWk'],_0x23b689['MmemT'])){let _0x4d877d=JSON[_0x8824('‮20','SHTc')](data);if(_0x51dd7b['tShol'](_0x4d877d[_0x8824('‫21','2N!V')],0xc8)){console['log']('\x0a【'+Tips+_0x8824('‫22',']N[R')+$[_0x8824('‮23','DtSV')]+_0x8824('‫24','SHTc')+_0x51dd7b['zipvl'](num,0x1)+_0x8824('‮25','g#pI')+_0x4d877d['data']['balanceUnit']);subTitle+='\x0a【'+Tips+_0x8824('‫26','!wbu')+$[_0x8824('‮27','pamx')]+'\x20领取气泡'+_0x51dd7b[_0x8824('‫28','PIDA')](num,0x1)+_0x8824('‫29','N6ZF')+_0x4d877d[_0x8824('‫2a','UJf$')][_0x8824('‮2b','0bRD')]+'}';}else{console[_0x8824('‮2c','l6s#')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x8824('‫2d','PIDA')]+'\x20领取气泡'+_0x51dd7b['UmbzT'](num,0x1)+_0x8824('‮2e','cuBe')+_0x4d877d[_0x8824('‫2f','3ZZ0')]);subTitle+='\x0a【'+Tips+_0x8824('‫30',']@GX')+$['index']+_0x8824('‫31','*!3)')+_0x51dd7b[_0x8824('‫32','MBMb')](num,0x1)+'】:\x20'+_0x4d877d[_0x8824('‫33','pamx')];state=![];}}else{var _0x194ac2=_0x28587c[_0x8824('‮34','A&MA')](_0x23b689['njGzd'],_0x591fc6,_0x23b689[_0x8824('‮35','s*Bd')]);if(_0x23b689['uujYv'](_0x591fc6[_0x8824('‮36','TQfT')](0x0,0x3),_0x23b689[_0x8824('‮37','CrYU')])&&_0x17b7c9['existsSync'](_0x194ac2)){_0x18a8c8=_0x17b7c9[_0x8824('‮38','bFJ5')](_0x194ac2)['toString']()[_0x8824('‮39','L5Md')]();};}});return _0x18a8c8;};mac=_0x105ea7();await yyz_getip();try{before=_0x17b7c9[_0x8824('‫3a','iXIB')](_0x23b689[_0x8824('‫3b','PIDA')])[_0x8824('‮3c','!wbu')]()[_0x8824('‮3d','N6ZF')]();reg_ip=before[_0x8824('‮3e','aRbk')]('&')[0x0];reg_mac=before[_0x8824('‫3f','s*Bd')]('&')[0x1];}catch(_0x4ad119){if(_0x23b689[_0x8824('‫40','cuBe')](_0x23b689[_0x8824('‮41','tq4[')],_0x23b689[_0x8824('‫42','TQfT')])){if(error){IP_address=_0x8824('‮43','Zw5b');}else{IP_address=data;}}else{reg_ip='';reg_mac='';}}mac_e=CryptoJs[_0x8824('‫44','S0Q5')][_0x8824('‮45','MBMb')][_0x8824('‫46','n#zL')](_0x8824('‫47','3ZZ0'));mac_i=CryptoJs[_0x8824('‮48','CrYU')][_0x8824('‫49','cuBe')][_0x8824('‮4a','TQfT')](_0x23b689[_0x8824('‫4b','cuBe')]);let _0x263057=$[_0x8824('‮4c','S0Q5')]()?process['env'][_0x8824('‫4d','VxNl')]:'';if(!_0x263057){console[_0x8824('‫4e','*$F[')]('\x0a【'+$[_0x8824('‮4f','r*da')]+_0x8824('‮50','TQfT'));return!![];}else{if('AeULJ'!=='AeULJ'){console[_0x8824('‮51','cuBe')]('\x0a【'+Tips+_0x8824('‮52','MBMb')+$[_0x8824('‫53','o$R@')]+_0x8824('‫54','*$F[')+result['data']+'金币');subTitle+='\x0a【'+Tips+_0x8824('‫55','0bRD')+$[_0x8824('‮56','Ia%B')]+'\x20领取离线金币】:\x20成功,获得'+result[_0x8824('‫57','DtSV')]+'金币';}else{TG_ID=_0x263057['split']('&')[0x0];yyz_Kami=_0x263057[_0x8824('‮58','OTld')]('&')[0x1];try{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x26db3b){throw new Error(_0x8824('‫59','S5cr'));}try{if(_0x23b689[_0x8824('‫5a','D5M4')](_0x23b689[_0x8824('‮5b','@T5P')],_0x23b689[_0x8824('‫5c','UJf$')])){YZ=author[_0x8824('‮5d','!wbu')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}else{console[_0x8824('‫5e','A&MA')]('\x0a['+TG_ID+_0x8824('‮5f','iXIB')+error);subTitle+='\x0a['+TG_ID+_0x8824('‮60','TQfT')+error;}}catch(_0x13a3b7){throw new Error(_0x8824('‫61','N6ZF'));}}};if(process[_0x8824('‫62','!wbu')][_0x8824('‫63','OTld')]&&_0x23b689[_0x8824('‮64','n#zL')](process[_0x8824('‫65','OTld')][_0x8824('‮66','CrYU')]['indexOf']('\x0a'),-0x1)){app_soy_bbg_data=process[_0x8824('‮67','TQfT')][_0x8824('‫68','cuBe')]['split']('\x0a');}else if(process[_0x8824('‮69','l6s#')][_0x8824('‮6a','aRbk')]&&process[_0x8824('‮6b','v!aY')][_0x8824('‫6c','TQfT')][_0x8824('‫6d','JcWw')]('#')>-0x1){app_soy_bbg_data=process[_0x8824('‫65','OTld')]['soy_bbg_data'][_0x8824('‫6e','bqtL')]('#');}else if(process[_0x8824('‮6f','s*Bd')][_0x8824('‮70',']@GX')]&&_0x23b689[_0x8824('‫71','OTld')](process[_0x8824('‮72','0bRD')]['soy_bbg_data']['indexOf']('@'),-0x1)){app_soy_bbg_data=process[_0x8824('‫73','wv8R')][_0x8824('‫74','o$R@')][_0x8824('‫75','0bRD')]('@');}else{app_soy_bbg_data=process[_0x8824('‫65','OTld')]['soy_bbg_data'][_0x8824('‮76','v!aY')]();};console[_0x8824('‮77','bqtL')](_0x8824('‫78','ZnlK')+TG_ID+_0x8824('‫79','L5Md')+mac+_0x8824('‮7a','TQfT')+IP_address);if(!reg_ip){if(_0x23b689['eVpZk']!==_0x23b689[_0x8824('‮7b','L5Md')]){var _0x687e14=_0x8824('‮7c','DtSV')[_0x8824('‮7d','TQfT')]('|'),_0x130f0a=0x0;while(!![]){switch(_0x687e14[_0x130f0a++]){case'0':console[_0x8824('‮7e','aRbk')](_0x8824('‮7f','N6ZF')+TG_ID+_0x8824('‫80','n#zL')+mac+_0x8824('‫81','SHTc'));continue;case'1':var _0x4e9758=CryptoJs[_0x8824('‫82','53un')][_0x8824('‫83','*!3)')]['parse'](reg_mac);continue;case'2':var _0x5b00d2=CryptoJs['enc'][_0x8824('‮84','CrYU')][_0x8824('‮85','!pZ@')](_0x4e9758);continue;case'3':var _0x5a415f=_0x41741a['toString'](CryptoJs[_0x8824('‫86','r*da')]['Utf8']);continue;case'4':var _0x41741a=CryptoJs[_0x8824('‮87','TQfT')]['decrypt'](_0x5b00d2,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‮88','bFJ5')][_0x8824('‫89','MBMb')],'padding':CryptoJs[_0x8824('‮8a','cyxC')][_0x8824('‮8b','Ia%B')]});continue;}break;}}else{console[_0x8824('‫8c','r*da')]('\x0a【'+Tips+_0x8824('‫8d','DtSV')+$[_0x8824('‫8e','cyxC')]+_0x8824('‮8f','aRbk')+_0x23b689[_0x8824('‫90','*$F[')](num,0x1)+_0x8824('‮91','qp2!')+result[_0x8824('‮92','JcWw')][_0x8824('‮93','qp2!')]);subTitle+='\x0a【'+Tips+_0x8824('‮94','MBMb')+$[_0x8824('‮95','D5M4')]+_0x8824('‫96','S0Q5')+_0x23b689[_0x8824('‮97','Mgo%')](num,0x1)+_0x8824('‮98','o$R@')+result['data']['balanceUnit']+'}';}}else if(!reg_mac){var _0x4e9758=CryptoJs[_0x8824('‫99','o$R@')][_0x8824('‫9a','iXIB')][_0x8824('‫9b','!wbu')](reg_ip);var _0x5b00d2=CryptoJs['enc'][_0x8824('‫9c','*$F[')]['stringify'](_0x4e9758);var _0x41741a=CryptoJs[_0x8824('‮9d','*!3)')][_0x8824('‫9e','v!aY')](_0x5b00d2,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‮9f','!pZ@')][_0x8824('‮a0','Pj8X')],'padding':CryptoJs[_0x8824('‮a1',']@GX')][_0x8824('‮a2','2N!V')]});var _0x5a415f=_0x41741a[_0x8824('‮a3','ZnlK')](CryptoJs[_0x8824('‮a4','Pj8X')]['Utf8']);console[_0x8824('‮a5','*!3)')](_0x8824('‫a6','L5Md')+TG_ID+_0x8824('‮a7','Mgo%')+_0x5a415f[_0x8824('‫a8','N6ZF')]());}else if(!reg_mac&&!reg_ip){if(_0x23b689[_0x8824('‫a9','53un')](_0x8824('‮aa','tq4['),_0x23b689[_0x8824('‮ab','wv8R')])){console[_0x8824('‮16','@T5P')](e,response);}else{console[_0x8824('‫ac','v!aY')]('注册信息：\x0a---TG_ID：'+TG_ID+_0x8824('‫ad','r*da'));}}else{var _0x564dce=_0x23b689[_0x8824('‫ae',']@GX')]['split']('|'),_0x324546=0x0;while(!![]){switch(_0x564dce[_0x324546++]){case'0':var _0x4e9758=CryptoJs['enc'][_0x8824('‫af','s*Bd')][_0x8824('‮b0','UJf$')](reg_mac);continue;case'1':var _0x5b00d2=CryptoJs[_0x8824('‫b1','iXIB')][_0x8824('‮b2','L5Md')][_0x8824('‮b3','CrYU')](_0x4e9758);continue;case'2':var _0x39723d=_0x41741a[_0x8824('‫b4','qp2!')](CryptoJs['enc'][_0x8824('‫b5','o$R@')]);continue;case'3':console[_0x8824('‫b6','(aew')](_0x8824('‮b7','qp2!')+TG_ID+_0x8824('‮b8','TQfT')+_0x39723d+_0x8824('‮b9','CrYU')+_0x59e153);continue;case'4':var _0x59e153=_0x41741a[_0x8824('‮ba','n#zL')](CryptoJs[_0x8824('‫bb','*$F[')][_0x8824('‮bc','!pZ@')]);continue;case'5':var _0x41741a=CryptoJs[_0x8824('‫bd','bFJ5')][_0x8824('‮be','qp2!')](_0x5b00d2,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‫bf','PIDA')]['CBC'],'padding':CryptoJs[_0x8824('‮c0','l6s#')][_0x8824('‮a2','2N!V')]});continue;case'6':var _0x41741a=CryptoJs[_0x8824('‮c1','iXIB')]['decrypt'](_0x5b00d2,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‫c2','r*da')][_0x8824('‮c3',']N[R')],'padding':CryptoJs['pad'][_0x8824('‮c4','CrYU')]});continue;case'7':var _0x4e9758=CryptoJs[_0x8824('‮c5','N6ZF')][_0x8824('‫83','*!3)')]['parse'](reg_ip);continue;case'8':var _0x5b00d2=CryptoJs[_0x8824('‮c6','MBMb')][_0x8824('‫c7','2N!V')][_0x8824('‫c8',']@GX')](_0x4e9758);continue;}break;}}user_num=app_soy_bbg_data['length'];console['log'](_0x8824('‫c9','n#zL')+new Date(_0x23b689['RnBQI'](new Date()[_0x8824('‮ca','(aew')]()+_0x23b689['fRoCf'](_0x23b689[_0x8824('‫cb','A&MA')](new Date()[_0x8824('‫cc','bFJ5')](),0x3c),0x3e8),_0x23b689['ZlMum'](0x8*0x3c*0x3c,0x3e8)))[_0x8824('‫cd','l6s#')]()+_0x8824('‫ce','L5Md'));await _0x23b689['rUohC'](yyz_login);console[_0x8824('‫cf','tq4[')](_0x8824('‮d0','CrYU')+user_num+'\x20个账号】===');subTitle='';if(yyz_d){for(i=0x0;i<user_num;i++){var _0x50a01d=_0x23b689[_0x8824('‮d1','ZnlK')][_0x8824('‫75','0bRD')]('|'),_0x400865=0x0;while(!![]){switch(_0x50a01d[_0x400865++]){case'0':$[_0x8824('‫2d','PIDA')]=_0x23b689[_0x8824('‫d2','A&MA')](i,0x1);continue;case'1':await implement();continue;case'2':if(!bbg_UA){bbg_UA=_0x23b689[_0x8824('‮d3','OTld')];}continue;case'3':bbg_token=app_soy_bbg_data[i];continue;case'4':state=!![];continue;case'5':console[_0x8824('‫d4','o$R@')](_0x8824('‫d5','v!aY')+$[_0x8824('‮d6','!wbu')]+'\x20个账号任务】');continue;}break;}}}else{console[_0x8824('‮d7','Zw5b')](_0x8824('‫d8','bFJ5'));}}}else{console[_0x8824('‮d9','SHTc')](_0x8824('‫da','D5M4'));return;}if(notify){if(subTitle){await notify[_0x8824('‫db','aRbk')]($[_0x8824('‮dc','aRbk')],subTitle);}}})()[_0x8824('‫dd','PIDA')](_0x4ce8b1=>$['logErr'](_0x4ce8b1))[_0x8824('‫de','3ZZ0')](()=>$[_0x8824('‫df','Mgo%')]());async function implement(){var _0xd00606={'EpuYA':function(_0xb33441){return _0xb33441();},'YIebo':function(_0x5c7434,_0x400035){return _0x5c7434<_0x400035;},'RcBIt':function(_0x3b28ef,_0x59fe57){return _0x3b28ef(_0x59fe57);},'VQNKB':function(_0x5d4338,_0x5701c0){return _0x5d4338*_0x5701c0;},'MjzPx':function(_0x2ba080,_0x72e052){return _0x2ba080+_0x72e052;},'GfzWK':function(_0x29a6e4,_0x26fb83){return _0x29a6e4-_0x26fb83;}};await _0xd00606[_0x8824('‮e0','UJf$')](spread);for(let _0x5014c4=0x0;_0xd00606[_0x8824('‮e1',']@GX')](_0x5014c4,0x6)&&state;_0x5014c4++){await _0xd00606[_0x8824('‫e2','MBMb')](getgold,_0x5014c4);await $[_0x8824('‫e3','bqtL')](Math[_0x8824('‮e4','UJf$')](_0xd00606[_0x8824('‫e5','Zw5b')](Math[_0x8824('‮e6','!wbu')](),_0xd00606[_0x8824('‫e7','r*da')](_0xd00606[_0x8824('‮e8','qp2!')](0xbb8,0x3e8),0x3e8))+0x3e8));}}function getgold(_0x43fb46){var _0x1b978b={'WWKxL':_0x8824('‮e9','ZnlK'),'tGCbg':_0x8824('‫ea','bqtL'),'salpf':_0x8824('‮eb','bFJ5'),'XAEwl':function(_0x5a3287,_0x1a17c7){return _0x5a3287+_0x1a17c7;},'OYXxa':function(_0x23e4e5,_0x242138){return _0x23e4e5!==_0x242138;},'dNiHw':_0x8824('‫ec','UJf$'),'PqPNQ':function(_0x5bba92,_0x420985){return _0x5bba92+_0x420985;},'BVIPe':function(_0x2a05c6){return _0x2a05c6();},'AIDVH':_0x8824('‫ed','TQfT'),'tiFNr':function(_0x7577e2,_0x2426ac){return _0x7577e2(_0x2426ac);}};let _0x4d987f=_0x1b978b[_0x8824('‫ee','pamx')](Get_request,_0x8824('‫ef','JcWw')+_0x43fb46);return new Promise((_0x5cbc94,_0x2dba64)=>{var _0x31b6ff={'IQQXa':_0x1b978b['AIDVH']};$['get'](_0x4d987f,async(_0xa722aa,_0x3a762f,_0x41e19d)=>{var _0x5aee20={'sQmkx':function(_0x2bc471,_0x593b24){return _0x2bc471+_0x593b24;}};if(_0x1b978b[_0x8824('‮f0','g#pI')]!==_0x1b978b['tGCbg']){try{if(_0xa722aa){if(_0x1b978b[_0x8824('‮f1','SHTc')]!=='HnFEi'){console[_0x8824('‫f2','DtSV')]('\x0a【'+Tips+_0x8824('‫f3','SHTc')+$[_0x8824('‫f4','bFJ5')]+_0x8824('‫f5','Pj8X')+(_0x43fb46+0x1)+_0x8824('‫f6','v!aY'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x8824('‮f7','r*da')+_0x1b978b[_0x8824('‫f8','Pj8X')](_0x43fb46,0x1)+_0x8824('‮f9','CrYU');state=![];}else{throw new Error(_0x31b6ff[_0x8824('‮fa','0bRD')]);}}else{let _0x4f9afd=JSON['parse'](_0x41e19d);if(_0x4f9afd[_0x8824('‮fb','tq4[')]==0xc8){if(_0x1b978b[_0x8824('‮fc','iXIB')](_0x1b978b[_0x8824('‫fd','TQfT')],_0x1b978b[_0x8824('‫fe','bFJ5')])){console[_0x8824('‫ff','iXIB')]('\x0a【'+Tips+_0x8824('‮100','UJf$')+$['index']+'\x20领取气泡'+_0x5aee20['sQmkx'](_0x43fb46,0x1)+_0x8824('‫101',']@GX')+_0x4f9afd[_0x8824('‫102','D5M4')]);subTitle+='\x0a【'+Tips+_0x8824('‫103','qp2!')+$[_0x8824('‮104','*$F[')]+_0x8824('‮105','Ia%B')+(_0x43fb46+0x1)+'】:\x20'+_0x4f9afd[_0x8824('‮106','S5cr')];state=![];}else{console['log']('\x0a【'+Tips+_0x8824('‫107','iXIB')+$['index']+_0x8824('‫108','53un')+_0x1b978b[_0x8824('‮109','(aew')](_0x43fb46,0x1)+'】:\x20成功,当前金币\x20'+_0x4f9afd['data']['balanceUnit']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x8824('‮10a','iXIB')+_0x1b978b['PqPNQ'](_0x43fb46,0x1)+_0x8824('‫10b','(aew')+_0x4f9afd[_0x8824('‫10c','S5cr')][_0x8824('‮10d','S0Q5')]+'}';}}else{console[_0x8824('‫10e','Pj8X')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x8824('‮10f','VxNl')+_0x1b978b['PqPNQ'](_0x43fb46,0x1)+_0x8824('‮110','VxNl')+_0x4f9afd['message']);subTitle+='\x0a【'+Tips+_0x8824('‮111','Zw5b')+$[_0x8824('‫112','*!3)')]+_0x8824('‮8f','aRbk')+_0x1b978b['PqPNQ'](_0x43fb46,0x1)+_0x8824('‮113',']N[R')+_0x4f9afd[_0x8824('‫114',']N[R')];state=![];}}}catch(_0x19a0d3){console[_0x8824('‫b6','(aew')](_0x19a0d3,_0x3a762f);}finally{_0x1b978b['BVIPe'](_0x5cbc94);}}else{console[_0x8824('‮115','qp2!')](_0x8824('‫116','D5M4'));return![];}});});}function spread(){var _0x50bd39={'CrwvM':_0x8824('‫117','cyxC'),'XqtAw':function(_0x1b95f0,_0x131f0e){return _0x1b95f0!==_0x131f0e;},'qaJQq':'FhetW','OEbsQ':function(_0x1cf584,_0x3b22f6){return _0x1cf584==_0x3b22f6;},'XRADW':_0x8824('‮118','PIDA'),'Ehxbn':function(_0x564617,_0x1aee21){return _0x564617===_0x1aee21;},'YHlmd':_0x8824('‮119',']@GX'),'PuDqw':function(_0x3ca119,_0x500d59){return _0x3ca119(_0x500d59);},'zWjWC':'login/spreadToken'};let _0x25beb0=_0x50bd39[_0x8824('‮11a','Mgo%')](Get_request,_0x50bd39[_0x8824('‫11b','g#pI')]);return new Promise((_0x175697,_0x549b3c)=>{var _0x4e3978={'CoAku':_0x50bd39[_0x8824('‫11c','UJf$')],'KuXvo':function(_0x1172d1,_0x251781){return _0x50bd39[_0x8824('‮11d','tq4[')](_0x1172d1,_0x251781);},'cusWi':_0x50bd39[_0x8824('‮11e',']N[R')],'mDFQo':function(_0x128472,_0x434f8a){return _0x50bd39[_0x8824('‮11f','pamx')](_0x128472,_0x434f8a);},'NinaR':_0x50bd39['XRADW'],'GDrzc':function(_0x778051,_0x2bc63e){return _0x50bd39[_0x8824('‮120','ZnlK')](_0x778051,_0x2bc63e);},'JSkUo':_0x50bd39['YHlmd']};$[_0x8824('‫121','Zw5b')](_0x25beb0,async(_0x148427,_0x5da000,_0x520103)=>{var _0x4711a9={'qzAxl':_0x4e3978[_0x8824('‮122','qp2!')],'VtjmW':function(_0x536e63,_0x878fb1){return _0x536e63==_0x878fb1;},'whRER':'eth'};if(_0x4e3978[_0x8824('‮123','bFJ5')](_0x4e3978[_0x8824('‮124','!pZ@')],_0x4e3978['cusWi'])){IP_address=_0x520103;}else{try{if(_0x148427){console['log']('\x0a【'+Tips+_0x8824('‮111','Zw5b')+$[_0x8824('‮125','Pj8X')]+'\x20领取离线金币】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x8824('‫26','!wbu')+$[_0x8824('‫126','g#pI')]+_0x8824('‮127','0bRD');}else{let _0x4f2aae=JSON[_0x8824('‮128','*$F[')](_0x520103);if(_0x4e3978['mDFQo'](_0x4f2aae['code'],0xc8)){if(_0x4e3978['NinaR']===_0x8824('‫129','qp2!')){var _0x651f4c=path[_0x8824('‮12a','JcWw')]('/sys/class/net',dev,_0x4711a9[_0x8824('‮12b','*!3)')]);if(_0x4711a9['VtjmW'](dev[_0x8824('‫12c','aRbk')](0x0,0x3),_0x4711a9['whRER'])&&fs[_0x8824('‮12d','s*Bd')](_0x651f4c)){macs=fs['readFileSync'](_0x651f4c)[_0x8824('‫12e',']N[R')]()[_0x8824('‫12f','TQfT')]();};}else{console[_0x8824('‫130','n#zL')]('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0x8824('‫8e','cyxC')]+_0x8824('‮131','o$R@')+_0x4f2aae['data']+'金币');subTitle+='\x0a【'+Tips+_0x8824('‫132','*$F[')+$['index']+_0x8824('‮133','tq4[')+_0x4f2aae['data']+'金币';}}else{if(_0x4e3978[_0x8824('‫134','L5Md')](_0x8824('‮135',']N[R'),_0x4e3978[_0x8824('‫136','cuBe')])){macs=fs['readFileSync'](fn)[_0x8824('‫137','aRbk')]()[_0x8824('‫138','Mgo%')]();}else{console[_0x8824('‫4e','*$F[')]('\x0a【'+Tips+_0x8824('‮139','53un')+$['index']+_0x8824('‫13a','s*Bd')+_0x4f2aae['message']);subTitle+='\x0a【'+Tips+_0x8824('‮13b','PIDA')+$[_0x8824('‮13c','ZnlK')]+_0x8824('‫13d','ZnlK')+_0x4f2aae['message'];}}}}catch(_0x4485aa){console[_0x8824('‫ff','iXIB')](_0x4485aa,_0x5da000);}finally{_0x175697();}}});});}function Get_request(_0x2d0288){var _0x1e1099={'olard':_0x8824('‫13e','pamx'),'FPPBf':_0x8824('‮13f','L5Md'),'WHBuO':'gzip','DSUlc':_0x8824('‫140','TQfT')};return{'url':_0x8824('‮141','pamx')+_0x2d0288,'headers':{'token':bbg_token,'appId':user_H,'Host':_0x1e1099[_0x8824('‮142','cyxC')],'Connection':_0x1e1099[_0x8824('‫143','qp2!')],'Accept-Encoding':_0x1e1099[_0x8824('‮144','PIDA')],'User-Agent':_0x1e1099[_0x8824('‫145','Pj8X')]}};};function Post_request(_0x1e7cf2,_0x20ea5c){var _0x4de0b2={'HUAAK':'Keep-Alive','ofBet':_0x8824('‮146','SHTc')};return{'url':'http://service.babydog.link/home/getGold?index='+_0x1e7cf2,'headers':{'token':bbg_token,'user_H':user_H,'Host':'service.babydog.link','Connection':_0x4de0b2[_0x8824('‫147','g#pI')],'Accept-Encoding':'gzip','User-Agent':_0x4de0b2['ofBet']},'body':_0x20ea5c};};function formatDate(){var _0x2f896c={'dVfGa':function(_0x474f3a,_0x2fd32f){return _0x474f3a+_0x2fd32f;}};let _0x500991=new Date();let _0x2245ba=_0x500991[_0x8824('‫148','S5cr')]();let _0x2fbaf5=_0x2f896c['dVfGa'](_0x500991['getMonth'](),0x1);let _0x58b299=_0x500991[_0x8824('‫149','!pZ@')]();_0x2fbaf5=_0x2fbaf5<0xa?'0'+_0x2fbaf5:_0x2fbaf5;_0x58b299=_0x58b299<0xa?_0x2f896c[_0x8824('‮14a','r*da')]('0',_0x58b299):_0x58b299;return _0x2245ba+'/'+_0x2fbaf5+'/'+_0x58b299;};async function yyz_login(){var _0x406c1e={'nVBJC':_0x8824('‮14b','bqtL'),'vRWjw':function(_0x565c13){return _0x565c13();},'WTpRf':function(_0x477349,_0x39acbb){return _0x477349+_0x39acbb;},'DsymU':function(_0x5b0eac,_0x1196b9){return _0x5b0eac+_0x1196b9;},'JJoKs':function(_0x4e405b,_0x5a12d9){return _0x4e405b!==_0x5a12d9;},'UJJgb':'vtmYj','akBjq':function(_0x57cd2b,_0x270756){return _0x57cd2b!==_0x270756;},'uGLpR':'yrpNl','WyZna':_0x8824('‫14c',']N[R'),'NhJwo':function(_0x145f95,_0x297a23){return _0x145f95(_0x297a23);},'uSKHM':function(_0x3eaa01){return _0x3eaa01();},'VXncl':_0x8824('‮14d','v!aY'),'IApPw':function(_0x20e44a){return _0x20e44a();},'jEqgv':function(_0x397d3e,_0x175a4e){return _0x397d3e!=_0x175a4e;},'mIFim':function(_0x2eb83c,_0x2c7985){return _0x2eb83c+_0x2c7985;},'CQaRT':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0xa14345=CryptoJs[_0x8824('‮14e','cyxC')][_0x8824('‮14f','!wbu')][_0x8824('‮150','N6ZF')](reg_ip);var _0x244850=CryptoJs['enc'][_0x8824('‫151','tq4[')][_0x8824('‫152','Ia%B')](_0xa14345);var _0xd0eaea=CryptoJs[_0x8824('‫153','!wbu')]['decrypt'](_0x244850,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‫154','wv8R')]['CBC'],'padding':CryptoJs['pad'][_0x8824('‮155','S0Q5')]});var _0x199dd2=_0xd0eaea[_0x8824('‫12e',']N[R')](CryptoJs[_0x8824('‫bb','*$F[')][_0x8824('‮156','L5Md')]);if(_0x406c1e['jEqgv'](IP_address,_0x199dd2)&&r_mac!==mac){console['log'](_0x8824('‮157','(aew'));return!![];}var _0x121d9b=Math['floor'](Date[_0x8824('‫158','g#pI')]()/0x3e8);var _0x279ce7=CryptoJs[_0x8824('‮159','Pj8X')](''+TG_ID+mac+os[_0x8824('‫15a','@T5P')]()+YZ)[_0x8824('‫15b','D5M4')]();var _0x3cf351='account='+TG_ID+_0x8824('‮15c','r*da')+_0x279ce7+_0x8824('‮15d','PIDA')+_0x121d9b;var _0x35618b=CryptoJs[_0x8824('‮15e','o$R@')](_0x406c1e['mIFim'](_0x406c1e[_0x8824('‮15f','A&MA')](_0x3cf351,'&'),appid))[_0x8824('‫160','SHTc')]();_0x3cf351=_0x406c1e[_0x8824('‮161','MBMb')](_0x406c1e[_0x8824('‮162','aRbk')](_0x3cf351,'&sign='),_0x35618b);let _0x14c363={'url':serverUrl+_0x8824('‫163','wv8R'),'headers':{'user-agent':_0x406c1e[_0x8824('‫164','MBMb')]},'body':_0x3cf351};return new Promise((_0x46f1b6,_0x307470)=>{var _0x318215={'uaBEe':_0x406c1e[_0x8824('‫165','MBMb')],'AbsvE':function(_0x4a1b0b){return _0x406c1e[_0x8824('‮166','n#zL')](_0x4a1b0b);},'RQxfL':function(_0x4dd7b6,_0x222aef){return _0x4dd7b6+_0x222aef;},'lkKlr':function(_0x3fa2a6,_0x3e2ce2){return _0x3fa2a6<_0x3e2ce2;},'bKFQb':function(_0x561c34,_0x2d0c49){return _0x561c34<_0x2d0c49;},'Bnvie':function(_0x508709,_0x123a52){return _0x508709+_0x123a52;},'ZeDot':function(_0x4d8799,_0x46c7ee){return _0x406c1e[_0x8824('‫167','A&MA')](_0x4d8799,_0x46c7ee);},'pYkfQ':function(_0x2b4b3a,_0x17b928){return _0x406c1e[_0x8824('‮168','o$R@')](_0x2b4b3a,_0x17b928);},'UGggN':function(_0x2d64d1,_0x12eb38){return _0x2d64d1+_0x12eb38;},'IpHpJ':function(_0x2afe07,_0x27844f){return _0x406c1e['JJoKs'](_0x2afe07,_0x27844f);},'nTIpo':function(_0x3006a8,_0x46fb09){return _0x3006a8===_0x46fb09;},'qiqCw':_0x406c1e['UJJgb'],'opyGA':function(_0x5f4e80,_0x3389c){return _0x406c1e[_0x8824('‮169','0bRD')](_0x5f4e80,_0x3389c);},'OnJMN':_0x406c1e['uGLpR'],'CyuBa':function(_0x55137e,_0x576af3){return _0x406c1e['akBjq'](_0x55137e,_0x576af3);},'Iavub':_0x406c1e[_0x8824('‫16a','Zw5b')],'pQhdf':function(_0x430b94,_0x4c95f5){return _0x406c1e['NhJwo'](_0x430b94,_0x4c95f5);},'FUEkE':function(_0x1541ff){return _0x406c1e[_0x8824('‫16b','!pZ@')](_0x1541ff);},'rWNSJ':function(_0x4beaaa,_0x381640){return _0x4beaaa!==_0x381640;},'HEYEV':_0x406c1e[_0x8824('‫16c','*!3)')],'oOrBD':function(_0x17d8ce){return _0x406c1e[_0x8824('‫16d','*!3)')](_0x17d8ce);}};$['post'](_0x14c363,async(_0x2ce9d5,_0x20cdf4,_0x3bdf48)=>{var _0x59652f={'heiyZ':'127.0.0.1','XbjOX':function(_0x4cf6b7,_0x3eea8e){return _0x318215[_0x8824('‮16e','JcWw')](_0x4cf6b7,_0x3eea8e);},'brdeD':function(_0x172f0e,_0x2e4d2a){return _0x318215[_0x8824('‮16f','53un')](_0x172f0e,_0x2e4d2a);},'nyrTU':function(_0x79ca32,_0x1241e0){return _0x318215[_0x8824('‫170','N6ZF')](_0x79ca32,_0x1241e0);},'alhyc':function(_0x502699,_0x4a1133){return _0x318215[_0x8824('‮171','53un')](_0x502699,_0x4a1133);},'DuPPR':function(_0x26fa33,_0x2520eb){return _0x26fa33+_0x2520eb;},'uCwlH':function(_0x2fe323,_0x4affcc){return _0x318215[_0x8824('‫172',']@GX')](_0x2fe323,_0x4affcc);},'sseGI':function(_0x3d0028,_0x4097ab){return _0x318215[_0x8824('‫173','*!3)')](_0x3d0028,_0x4097ab);},'iJERf':function(_0x830fd7,_0x299066){return _0x318215[_0x8824('‮174','pamx')](_0x830fd7,_0x299066);},'fMZKE':function(_0x4e7f8b,_0x2cf5ec){return _0x318215[_0x8824('‮175','OTld')](_0x4e7f8b,_0x2cf5ec);},'KYIds':function(_0x4093a9,_0x29a0cd){return _0x318215[_0x8824('‫176','@T5P')](_0x4093a9,_0x29a0cd);},'xXJAu':function(_0x3bb95d,_0x3d52b3){return _0x3bb95d+_0x3d52b3;},'bCDfE':function(_0x204e94,_0x2e4f10){return _0x318215[_0x8824('‫177','pamx')](_0x204e94,_0x2e4f10);},'eVTte':function(_0x3a3f11,_0x2d874e){return _0x318215['Bnvie'](_0x3a3f11,_0x2d874e);},'txhhg':function(_0x593a52,_0x59e753){return _0x318215[_0x8824('‫178','L5Md')](_0x593a52,_0x59e753);},'QkxWh':function(_0x4e3652,_0x47f384){return _0x318215[_0x8824('‮179','N6ZF')](_0x4e3652,_0x47f384);},'RHocq':function(_0xa3b5e9,_0x297181){return _0x318215[_0x8824('‮17a',']N[R')](_0xa3b5e9,_0x297181);}};try{if(_0x318215[_0x8824('‮17b','cyxC')](_0x8824('‫17c','SHTc'),_0x8824('‫17d','2N!V'))){if(_0x2ce9d5){if(_0x318215[_0x8824('‮17e','*!3)')](_0x318215[_0x8824('‫17f','Mgo%')],_0x318215[_0x8824('‮180','o$R@')])){console['log']('\x0a['+TG_ID+_0x8824('‮181','bqtL')+_0x2ce9d5);subTitle+='\x0a['+TG_ID+_0x8824('‫182','tq4[')+_0x2ce9d5;}else{IP_address=_0x59652f[_0x8824('‫183','S0Q5')];}}else{if(_0x318215[_0x8824('‮184','S0Q5')](_0x318215[_0x8824('‮185','bFJ5')],_0x318215[_0x8824('‮186','S0Q5')])){var _0x2c9541=new Date(timestamp*0x3e8);var _0xc84136=_0x2c9541['getFullYear']()+'-';var _0x4bfb91=_0x59652f[_0x8824('‮187','l6s#')](_0x59652f['brdeD'](_0x2c9541[_0x8824('‮188','0bRD')]()+0x1,0xa)?'0'+(_0x2c9541[_0x8824('‫189',']N[R')]()+0x1):_0x59652f['nyrTU'](_0x2c9541['getMonth'](),0x1),'-');var _0x414683=_0x59652f[_0x8824('‫18a','Zw5b')](_0x2c9541[_0x8824('‮18b','A&MA')](),'\x20');var _0x40308b=_0x59652f[_0x8824('‫18c','cyxC')](_0x2c9541[_0x8824('‫18d','tq4[')](),':');var _0x5032f0=_0x59652f[_0x8824('‫18e','qp2!')](_0x59652f['sseGI'](_0x2c9541['getMinutes'](),0xa)?_0x59652f[_0x8824('‮18f','qp2!')]('0',_0x2c9541[_0x8824('‫190','(aew')]()):_0x2c9541[_0x8824('‫191','Ia%B')](),':');var _0x29508a=_0x2c9541[_0x8824('‮192','*$F[')]();let _0x1efc7f=_0x59652f[_0x8824('‫193','o$R@')](_0x59652f[_0x8824('‫194','s*Bd')](_0x59652f[_0x8824('‮195','Ia%B')](_0x59652f['bCDfE'](_0x59652f[_0x8824('‮196','wv8R')](_0xc84136,_0x4bfb91),_0x414683),_0x40308b),_0x5032f0),_0x29508a);return _0x59652f[_0x8824('‮197','L5Md')](_0x59652f['QkxWh'](_0x59652f['QkxWh'](_0x59652f['RHocq'](_0xc84136+_0x4bfb91,_0x414683),_0x40308b),_0x5032f0),_0x29508a);}else{let _0x4aac1e=JSON['parse'](_0x3bdf48);if(_0x4aac1e[_0x8824('‮198','n#zL')]==0xc8){if(_0x318215[_0x8824('‮199','S0Q5')](_0x8824('‮19a','!wbu'),_0x318215[_0x8824('‮19b','MBMb')])){let _0x1b4c01=_0x318215[_0x8824('‮19c','tq4[')](Format_time,_0x4aac1e[_0x8824('‫19d','S5cr')][_0x8824('‮19e','3ZZ0')][_0x8824('‫19f','@T5P')]);console[_0x8824('‮1a0','N6ZF')]('\x0a['+TG_ID+_0x8824('‫1a1','N6ZF')+_0x1b4c01);await get_vip(_0x4aac1e[_0x8824('‫19d','S5cr')][_0x8824('‫1a2','(aew')]);}else{fs['writeFileSync'](_0x318215[_0x8824('‮1a3','l6s#')],Now_ip+'&'+Now_mac);}}else if(_0x4aac1e[_0x8824('‫1a4','cuBe')]==0x71){await _0x318215['FUEkE'](yyz_user_reg);}else{console[_0x8824('‫1a5','0bRD')]('\x0a['+TG_ID+_0x8824('‮1a6','o$R@')+_0x4aac1e[_0x8824('‮1a7','*!3)')]);subTitle+='\x0a['+TG_ID+_0x8824('‮1a8','bqtL')+_0x4aac1e[_0x8824('‮1a9','g#pI')];return![];}}}}else{console['log']('\x0a['+TG_ID+_0x8824('‮1aa','N6ZF')+_0x2ce9d5);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x2ce9d5;}}catch(_0x1546ee){if(_0x318215['rWNSJ'](_0x318215[_0x8824('‫1ab','2N!V')],_0x318215[_0x8824('‫1ac','wv8R')])){_0x318215['AbsvE'](_0x46f1b6);}else{console['log'](_0x1546ee);}}finally{_0x318215[_0x8824('‮1ad','g#pI')](_0x46f1b6);}});});}async function get_vip(_0x5d18c8){var _0x4aba18={'Jimtb':function(_0x695a65){return _0x695a65();},'LXHGT':function(_0x2b9f18,_0x12dbc1){return _0x2b9f18!==_0x12dbc1;},'yabbW':'dkgHG','BCELs':_0x8824('‮1ae','r*da'),'UsyqU':function(_0x465926,_0x284394){return _0x465926===_0x284394;},'MtTaY':_0x8824('‫1af','N6ZF'),'pbISk':function(_0x6338b6,_0x111bd4){return _0x6338b6(_0x111bd4);},'ryRCz':'EDSgQ','pRNtT':function(_0x332fb5,_0x5acb7b){return _0x332fb5/_0x5acb7b;},'pOpnf':function(_0x31917c,_0x1444cc){return _0x31917c+_0x1444cc;},'OMEXf':function(_0x4d71ba,_0x1f816c){return _0x4d71ba+_0x1f816c;},'meaTH':_0x8824('‮1b0','N6ZF'),'dscnA':_0x8824('‮1b1','cyxC')};var _0x19c96e=Math[_0x8824('‫1b2','pamx')](_0x4aba18[_0x8824('‫1b3','L5Md')](Date['now'](),0x3e8));var _0x5aa442=_0x8824('‫1b4','pamx')+user_num+_0x8824('‮1b5','bFJ5')+_0x5d18c8+'&t='+_0x19c96e;var _0x288f2b=CryptoJs[_0x8824('‫1b6','S0Q5')](_0x4aba18['pOpnf'](_0x4aba18[_0x8824('‫1b7','s*Bd')](_0x5aa442,'&'),appid))[_0x8824('‮1b8','l6s#')]();_0x5aa442=_0x4aba18[_0x8824('‮1b9','Pj8X')](_0x5aa442+_0x4aba18['meaTH'],_0x288f2b);let _0x47baed={'url':serverUrl+_0x8824('‮1ba','*!3)'),'headers':{'user-agent':_0x4aba18[_0x8824('‮1bb','v!aY')]},'body':_0x5aa442};return new Promise((_0x34f2fd,_0x2e57ba)=>{$['post'](_0x47baed,async(_0x5d4f4c,_0x261fe1,_0x2954df)=>{var _0x11e975={'LULdn':function(_0x33f834){return _0x4aba18[_0x8824('‮1bc','v!aY')](_0x33f834);}};try{if(_0x5d4f4c){if(_0x4aba18['LXHGT'](_0x4aba18[_0x8824('‮1bd','g#pI')],_0x8824('‮1be','wv8R'))){YZ=author[_0x8824('‮1bf','VxNl')](/作者TG_ID:(\S*)/)[0x1][_0x8824('‫1c0','0bRD')](/_/g,'><');}else{console[_0x8824('‫4e','*$F[')]('\x0a['+TG_ID+_0x8824('‫1c1','S0Q5')+_0x5d4f4c);subTitle+='\x0a['+TG_ID+_0x8824('‮1c2','A&MA')+_0x5d4f4c;}}else{let _0x44e6f8=JSON['parse'](_0x2954df);if(_0x44e6f8[_0x8824('‫21','2N!V')]==0xc8){user_H=_0x44e6f8[_0x8824('‫1c3','iXIB')];yyz_d=!![];}else if(_0x44e6f8[_0x8824('‫1c4','S0Q5')]==0xca){console[_0x8824('‮1c5','pamx')]('\x0a['+TG_ID+_0x8824('‮1c6','ZnlK')+_0x44e6f8[_0x8824('‫1c7','3ZZ0')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x44e6f8['msg'];}else if(_0x44e6f8['code']==0xcd){console[_0x8824('‫d4','o$R@')]('\x0a['+TG_ID+_0x8824('‮1c8','o$R@')+_0x44e6f8[_0x8824('‮1c9','N6ZF')]);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x44e6f8[_0x8824('‫1ca',']@GX')];}else{if('pQaEK'!==_0x4aba18[_0x8824('‮1cb','*!3)')]){console[_0x8824('‫8c','r*da')]('\x0a['+TG_ID+_0x8824('‫1cc','cyxC')+_0x44e6f8[_0x8824('‮1c9','N6ZF')]);subTitle+='\x0a['+TG_ID+_0x8824('‮1cd','Pj8X')+_0x44e6f8['msg'];return![];}else{if(!yyz_Kami){console[_0x8824('‫1ce','TQfT')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';return![];}else{if(_0x4aba18['UsyqU'](_0x4aba18[_0x8824('‫1cf','cuBe')],_0x8824('‮1d0','*$F['))){_0x11e975[_0x8824('‮1d1','SHTc')](_0x34f2fd);}else{await _0x4aba18[_0x8824('‫1d2','L5Md')](card,_0x5d18c8);}}}}}}catch(_0x1f802e){if(_0x4aba18[_0x8824('‮1d3','aRbk')](_0x4aba18['ryRCz'],_0x4aba18[_0x8824('‫1d4','v!aY')])){console['log'](_0x1f802e);}else{console[_0x8824('‫1d5','OTld')]('\x0a['+TG_ID+_0x8824('‫1d6','@T5P')+result['msg']);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+result[_0x8824('‫1d7','PIDA')];}}finally{_0x34f2fd();}});});}async function yyz_user_reg(){var _0x3cb1fd={'RvzQk':function(_0x5dab19){return _0x5dab19();},'sQgZD':function(_0x3c45d3,_0x326235){return _0x3c45d3==_0x326235;},'qscMj':function(_0xa0d8a3,_0x32058f){return _0xa0d8a3!==_0x32058f;},'KpXnH':_0x8824('‫1d8','ZnlK'),'iMpRK':_0x8824('‫1d9','!wbu'),'zxUbO':function(_0x41c1f8){return _0x41c1f8();},'XKRaQ':function(_0x1fd9c0,_0x305d4d){return _0x1fd9c0===_0x305d4d;},'qzauU':_0x8824('‮1da','SHTc'),'LhGhV':_0x8824('‮1db','Ia%B'),'qeqsV':_0x8824('‫1dc','S5cr'),'srIEZ':function(_0x506222){return _0x506222();},'UceyL':'\x0a找不到依赖\x20fs\x20,请自行安装\x0a','VGxaW':function(_0x5cef36,_0x70b05){return _0x5cef36&&_0x70b05;},'YhHRp':function(_0x34857a,_0x195f28){return _0x34857a===_0x195f28;},'YJgIG':_0x8824('‫1dd','TQfT'),'LlSzA':function(_0x12b3f3){return _0x12b3f3();},'noZRd':function(_0x5cb4dd,_0x426bd6){return _0x5cb4dd/_0x426bd6;},'scLzh':function(_0x120641,_0x8b0b44){return _0x120641+_0x8b0b44;},'KoxSc':function(_0x3b12e9,_0x3fac84){return _0x3b12e9+_0x3fac84;},'wxkJw':function(_0x550a27,_0x90f363){return _0x550a27+_0x90f363;},'KbNoT':function(_0x3652d7,_0x37588f){return _0x3652d7+_0x37588f;},'QeLLS':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(_0x3cb1fd[_0x8824('‫1de','s*Bd')](!Tips,!YZ)){if(_0x3cb1fd[_0x8824('‫1df','cuBe')](_0x3cb1fd['YJgIG'],_0x3cb1fd[_0x8824('‮1e0','tq4[')])){console[_0x8824('‮7e','aRbk')](_0x8824('‫1e1','!pZ@'));return![];}else{_0x3cb1fd[_0x8824('‮1e2','JcWw')](resolve);}}await _0x3cb1fd[_0x8824('‫1e3','3ZZ0')](yyz_getip);var _0x4c0f12=Math[_0x8824('‮1e4','cyxC')](_0x3cb1fd[_0x8824('‮1e5','cuBe')](Date[_0x8824('‫1e6','Ia%B')](),0x3e8));var _0x2d252c=CryptoJs[_0x8824('‮1e7','JcWw')](''+TG_ID+mac+os[_0x8824('‮1e8','ZnlK')]()+YZ)[_0x8824('‫1e9','o$R@')]();var _0x29c315=_0x8824('‫1ea','tq4[')+TG_ID+_0x8824('‮1eb','2N!V')+_0x2d252c+_0x8824('‮1ec','JcWw')+_0x4c0f12;var _0x50e796=CryptoJs[_0x8824('‫1b6','S0Q5')](_0x3cb1fd[_0x8824('‮1ed','g#pI')](_0x3cb1fd['KoxSc'](_0x29c315,'&'),appid))['toString']();_0x29c315=_0x3cb1fd['wxkJw'](_0x3cb1fd['KbNoT'](_0x29c315,_0x8824('‫1ee','JcWw')),_0x50e796);let _0x3ad49b={'url':serverUrl+_0x8824('‫1ef','L5Md'),'headers':{'user-agent':_0x3cb1fd[_0x8824('‮1f0','cuBe')]},'body':_0x29c315};return new Promise((_0x293cd2,_0x518a8a)=>{var _0x1b7172={'tfxQd':function(_0x575e0d,_0x26176e){return _0x575e0d==_0x26176e;},'BFcXp':_0x3cb1fd[_0x8824('‫1f1','S0Q5')]};$[_0x8824('‫1f2','N6ZF')](_0x3ad49b,async(_0x355882,_0xede66b,_0x4cd11e)=>{try{if(_0x355882){console[_0x8824('‫10e','Pj8X')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x355882);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x355882;}else{let _0x2d333d=JSON[_0x8824('‮1f3','VxNl')](_0x4cd11e);if(_0x3cb1fd['sQgZD'](_0x2d333d[_0x8824('‮1f4','v!aY')],0xc8)){let _0x593cd6=CryptoJs[_0x8824('‫44','S0Q5')][_0x8824('‫1f5','Mgo%')][_0x8824('‮1f3','VxNl')](IP_address);let _0x4e264f=CryptoJs[_0x8824('‮1f6','3ZZ0')]['encrypt'](_0x593cd6,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‫1f7','D5M4')][_0x8824('‮a0','Pj8X')],'padding':CryptoJs['pad'][_0x8824('‮1f8','n#zL')]});let _0x29b2cc=_0x4e264f['ciphertext'][_0x8824('‮1f9','bFJ5')]()['toUpperCase']();_0x593cd6=CryptoJs['enc'][_0x8824('‮1fa','bqtL')]['parse'](mac);let _0x26025c=CryptoJs['AES'][_0x8824('‫1fb','o$R@')](_0x593cd6,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‫1fc','L5Md')]['CBC'],'padding':CryptoJs[_0x8824('‮1fd','0bRD')][_0x8824('‮1fe','s*Bd')]});let _0x4aa9b9=_0x26025c[_0x8824('‫1ff','wv8R')]['toString']()['toUpperCase']();try{if(_0x3cb1fd[_0x8824('‮200','qp2!')](_0x8824('‫201','o$R@'),_0x3cb1fd[_0x8824('‮202','aRbk')])){fs['writeFileSync'](_0x3cb1fd['iMpRK'],_0x29b2cc+'&'+_0x4aa9b9);}else{console[_0x8824('‮51','cuBe')](e);}}catch(_0x5bcafe){}console['log']('\x0a['+TG_ID+']:\x20注册成功:\x20IP=>'+IP_address+_0x8824('‮203','53un')+mac);await _0x3cb1fd['zxUbO'](yyz_login);}else if(_0x2d333d['code']==0x75){if(_0x3cb1fd[_0x8824('‮204','cuBe')](_0x3cb1fd[_0x8824('‮205','Mgo%')],_0x3cb1fd[_0x8824('‮206','*$F[')])){let _0xa1d1da=JSON[_0x8824('‫207','qp2!')](_0x4cd11e);if(_0x1b7172[_0x8824('‫208','qp2!')](_0xa1d1da[_0x8824('‫209','N6ZF')],0xc8)){console[_0x8824('‮2c','l6s#')]('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+_0x8824('‫20a','wv8R')+_0xa1d1da[_0x8824('‮20b','SHTc')]+'金币');subTitle+='\x0a【'+Tips+_0x8824('‮20c','bqtL')+$[_0x8824('‫20d','v!aY')]+_0x8824('‮20e',']N[R')+_0xa1d1da[_0x8824('‫10c','S5cr')]+'金币';}else{console[_0x8824('‮16','@T5P')]('\x0a【'+Tips+_0x8824('‫20f','Pj8X')+$[_0x8824('‫210','UJf$')]+'\x20领取离线金币】:\x20'+_0xa1d1da[_0x8824('‮211','TQfT')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20领取离线金币}】:\x20'+_0xa1d1da[_0x8824('‮212','s*Bd')];}}else{console[_0x8824('‫213',']N[R')]('\x0a['+TG_ID+_0x8824('‮214','PIDA')+_0x2d333d[_0x8824('‮215','bqtL')]+_0x8824('‫216','Zw5b'));return![];}}else{console[_0x8824('‫217','g#pI')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x2d333d[_0x8824('‮218','@T5P')]);subTitle+='\x0a['+TG_ID+_0x8824('‮219','MBMb')+_0x2d333d[_0x8824('‫21a','DtSV')];return![];}}}catch(_0x4acda8){console[_0x8824('‫d4','o$R@')](_0x4acda8);}finally{if(_0x3cb1fd[_0x8824('‫21b','N6ZF')](_0x3cb1fd[_0x8824('‮21c','cuBe')],_0x8824('‮21d','bFJ5'))){_0x3cb1fd[_0x8824('‮21e','*$F[')](_0x293cd2);}else{throw new Error(_0x1b7172[_0x8824('‫21f','PIDA')]);}}});});}async function card(_0x3003a6){var _0x1d01eb={'nTPIk':function(_0x3e0055,_0xf46183){return _0x3e0055!==_0xf46183;},'WLWPh':_0x8824('‫220','qp2!'),'oVNoU':'auHrk','YjILi':function(_0x2f41fd,_0xe86401){return _0x2f41fd!==_0xe86401;},'ocZQY':_0x8824('‫221','!pZ@'),'libHw':function(_0x58e185,_0x24aa20){return _0x58e185===_0x24aa20;},'BijSv':_0x8824('‮222','n#zL'),'PPPPE':function(_0x90cfa7){return _0x90cfa7();},'kTpxU':function(_0x2a53f6,_0x1bec07){return _0x2a53f6/_0x1bec07;},'DUTVk':function(_0x435a7a,_0x1a9c82){return _0x435a7a+_0x1a9c82;},'oZgAt':function(_0x3f2f48,_0x140b1c){return _0x3f2f48+_0x140b1c;},'GMdrO':'&sign=','lwjkx':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x11c388=Math[_0x8824('‮223','qp2!')](_0x1d01eb['kTpxU'](Date['now'](),0x3e8));var _0x37364d=_0x8824('‮224','bqtL')+_0x3003a6+'&kami='+yyz_Kami+_0x8824('‫225','CrYU')+_0x11c388;var _0x951ce7=CryptoJs[_0x8824('‮159','Pj8X')](_0x1d01eb[_0x8824('‫226','*$F[')](_0x37364d+'&',appid))['toString']();_0x37364d=_0x1d01eb['DUTVk'](_0x1d01eb['oZgAt'](_0x37364d,_0x1d01eb['GMdrO']),_0x951ce7);let _0x6f9342={'url':serverUrl+_0x8824('‮227','bFJ5'),'headers':{'user-agent':_0x1d01eb['lwjkx']},'body':_0x37364d};return new Promise((_0x443164,_0x207187)=>{$['post'](_0x6f9342,async(_0x48a267,_0x57a456,_0x431c2c)=>{try{if(_0x1d01eb[_0x8824('‮228','OTld')](_0x1d01eb[_0x8824('‫229','PIDA')],_0x1d01eb['oVNoU'])){if(_0x48a267){console[_0x8824('‮22a','!pZ@')]('\x0a['+TG_ID+_0x8824('‮22b','qp2!')+_0x48a267);subTitle+='\x0a['+TG_ID+_0x8824('‫22c','MBMb')+_0x48a267;}else{let _0x527409=JSON['parse'](_0x431c2c);if(_0x527409['code']==0xc8){if(_0x1d01eb[_0x8824('‮22d','Pj8X')]('lYJZW',_0x1d01eb[_0x8824('‫22e','Ia%B')])){console[_0x8824('‮7e','aRbk')](e,_0x57a456);}else{console['log']('\x0a['+TG_ID+_0x8824('‫22f','MBMb')+_0x527409['msg']+_0x8824('‫230','cuBe'));return![];}}else{console[_0x8824('‫1a5','0bRD')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x527409['msg']);subTitle+='\x0a['+TG_ID+_0x8824('‫231','2N!V')+_0x527409[_0x8824('‮232','qp2!')];return![];}}}else{console[_0x8824('‮77','bqtL')]('\x0a【'+Tips+_0x8824('‫55','0bRD')+$[_0x8824('‫233','SHTc')]+_0x8824('‫234','l6s#'));subTitle+='\x0a【'+Tips+_0x8824('‫235','VxNl')+$[_0x8824('‮236','iXIB')]+_0x8824('‮237','bqtL');}}catch(_0x3c2265){if(_0x1d01eb[_0x8824('‮238',']@GX')](_0x1d01eb['BijSv'],'aWbVa')){console['log'](_0x3c2265);}else{console[_0x8824('‮22a','!pZ@')](_0x3c2265);}}finally{_0x1d01eb['PPPPE'](_0x443164);}});});}function yyz_getip(){var _0x2e2083={'bguHn':_0x8824('‮239','tq4['),'dFtKl':function(_0x40eb03,_0xa6334a){return _0x40eb03(_0xa6334a);},'csQjD':_0x8824('‮23a','MBMb'),'CYpKB':_0x8824('‫23b','D5M4'),'DArHH':_0x8824('‮23c','SHTc'),'tKELu':'thpoA','lgShE':function(_0x2820f1){return _0x2820f1();}};let _0x148727={'url':_0x8824('‮23d','PIDA')};return new Promise((_0xa99a37,_0x4990f5)=>{var _0x1b4986={'qRfZp':_0x2e2083['bguHn'],'gNVaI':function(_0x57f93f,_0x713445){return _0x2e2083[_0x8824('‫23e','qp2!')](_0x57f93f,_0x713445);},'hArXu':_0x2e2083[_0x8824('‮23f','A&MA')],'ZMmFm':function(_0x42aff1,_0x3388b5){return _0x42aff1===_0x3388b5;},'GcyTv':'qeymh','ZjUmh':'rcoVi','NwZpY':_0x2e2083[_0x8824('‮240','*$F[')],'xQNxc':_0x2e2083[_0x8824('‮241','N6ZF')],'AdTcJ':_0x2e2083['tKELu'],'hSBcY':function(_0x302d8f){return _0x2e2083[_0x8824('‫242','wv8R')](_0x302d8f);}};$[_0x8824('‮243','@T5P')](_0x148727,async(_0x567c47,_0x41f324,_0x37f8c2)=>{var _0xf64651={'BhNSt':function(_0x59f1fd,_0x3627f8){return _0x1b4986['gNVaI'](_0x59f1fd,_0x3627f8);}};try{if(_0x567c47){if(_0x8824('‫244','o$R@')==='UKFpx'){os=$[_0x8824('‮245','JcWw')]()?_0xf64651[_0x8824('‮246','Ia%B')](require,'os'):'';}else{IP_address=_0x1b4986['hArXu'];}}else{if(_0x1b4986['ZMmFm'](_0x8824('‮247','N6ZF'),_0x1b4986[_0x8824('‫248','3ZZ0')])){console[_0x8824('‮1c5','pamx')]('\x0a['+TG_ID+_0x8824('‫249','53un')+result['msg']);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0x8824('‮24a','0bRD')];return![];}else{IP_address=_0x37f8c2;}}}catch(_0x4cf9a4){if(_0x1b4986['ZjUmh']!==_0x1b4986['NwZpY']){IP_address=_0x1b4986[_0x8824('‫24b','0bRD')];console[_0x8824('‮24c','JcWw')](_0x4cf9a4,_0x41f324);}else{var _0x7df9f9=CryptoJs['enc']['Hex'][_0x8824('‮4a','TQfT')](reg_mac);var _0x4a55d1=CryptoJs['enc'][_0x8824('‫9c','*$F[')][_0x8824('‫24d',']N[R')](_0x7df9f9);var _0x2ef857=CryptoJs['AES'][_0x8824('‫24e','CrYU')](_0x4a55d1,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x8824('‮24f','cyxC')][_0x8824('‮250','*$F[')],'padding':CryptoJs['pad'][_0x8824('‫251','v!aY')]});var _0x283a39=_0x2ef857[_0x8824('‮252','Mgo%')](CryptoJs['enc'][_0x8824('‮1fa','bqtL')]);console['log']('注册信息：\x0a---TG_ID：'+TG_ID+_0x8824('‫253','UJf$')+mac+_0x8824('‫254','Pj8X'));}}finally{if(_0x1b4986['xQNxc']===_0x1b4986['AdTcJ']){bbg_UA=_0x1b4986[_0x8824('‮255','l6s#')];}else{_0x1b4986[_0x8824('‮256','aRbk')](_0xa99a37);}}});});}function Format_time(_0xb9e253){var _0x2dbc80={'rogYB':function(_0x4ab3bd,_0x2579d3){return _0x4ab3bd*_0x2579d3;},'ttemv':function(_0x57f701,_0x9ad323){return _0x57f701+_0x9ad323;},'PGeQx':function(_0x3e0131,_0x5b754b){return _0x3e0131<_0x5b754b;},'xguxx':function(_0x5a7b1d,_0x305bd7){return _0x5a7b1d+_0x305bd7;},'xvFoa':function(_0x40de20,_0x2c1087){return _0x40de20+_0x2c1087;},'gXQvu':function(_0x5b8b8c,_0x5375b8){return _0x5b8b8c<_0x5375b8;},'cHuLJ':function(_0x2ec9aa,_0x312d5f){return _0x2ec9aa+_0x312d5f;},'AjuWh':function(_0x3ae71a,_0x12dfeb){return _0x3ae71a+_0x12dfeb;}};var _0x38b02b=new Date(_0x2dbc80['rogYB'](_0xb9e253,0x3e8));var _0x4d58eb=_0x2dbc80['ttemv'](_0x38b02b[_0x8824('‮257','bqtL')](),'-');var _0x4c8952=_0x2dbc80[_0x8824('‮258','g#pI')](_0x2dbc80[_0x8824('‮259','PIDA')](_0x38b02b[_0x8824('‮25a','Pj8X')]()+0x1,0xa)?_0x2dbc80[_0x8824('‫25b','o$R@')]('0',_0x2dbc80[_0x8824('‮25c','MBMb')](_0x38b02b['getMonth'](),0x1)):_0x2dbc80['ttemv'](_0x38b02b[_0x8824('‮25d','PIDA')](),0x1),'-');var _0xfa3b16=_0x2dbc80[_0x8824('‮25e','bFJ5')](_0x38b02b[_0x8824('‫25f','wv8R')](),'\x20');var _0x143240=_0x2dbc80[_0x8824('‫260','s*Bd')](_0x38b02b[_0x8824('‮261','l6s#')](),':');var _0x13f5b9=(_0x2dbc80[_0x8824('‮262','bFJ5')](_0x38b02b['getMinutes'](),0xa)?'0'+_0x38b02b['getMinutes']():_0x38b02b[_0x8824('‫263','iXIB')]())+':';var _0x4abfc2=_0x38b02b['getSeconds']();let _0x461ecb=_0x4d58eb+_0x4c8952+_0xfa3b16+_0x143240+_0x13f5b9+_0x4abfc2;return _0x2dbc80['cHuLJ'](_0x2dbc80['AjuWh'](_0x2dbc80[_0x8824('‫264','PIDA')](_0x2dbc80['AjuWh'](_0x4d58eb,_0x4c8952)+_0xfa3b16,_0x143240),_0x13f5b9),_0x4abfc2);};_0xodb='jsjiami.com.v6';


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