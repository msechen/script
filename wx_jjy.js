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


const $ = new Env('【佳佳衣22/04/22_0】');
const notify = $.isNode() ? require('./sendNotify') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodU='jsjiami.com.v6',_0xodU_=['‮_0xodU'],_0x337b=[_0xodU,'w4sUTxLDrQ==','DXlSJcKl','FlkkS8O9','c8KLKiJo','eiMA','5o6G56eHwrTDlnTotY/lj40L','wrbnr5HliqHjgLBfZeaJqeWKig==','5oyT56afYsK6b+i1r+WMi8OM','w6p+RyR2','wpPnr4rliYzjgq9owqPmi5nlibo=','YG3CiQ==','5o+B56erw5/DkcKY6La65YyuwrI=','LOetvOWLnuODm14T5omD5Yma','S3ZH6amW6K2i6LSW5YyXdcKT6L2i5ZuSVw==','wpJfw5Hpq6/or7DotLnljJhIWOi9ruWZssOU','B2MKVMOR','Fx8qeQg=','JsOvwrRM','w7RBwp1ww4M=','wrrDgMKJwrfCpw==','w4xcXiB5','wq7Dlig=','OQfCsEkH','wrRjcUw=','wo7Dr0HpqJ/or5zohJPmnZLDlws=','GHoT','Qm8uMQ==','BTVpXm4=','wq0GZMOMLA==','5o+V56aSwpLCm8Ki6LaS5Y2pwow=','w7fnrbLliKXjgLjCrAnmiYzlirw=','QDHDmg==','YMKcwr3mlIzphbfpq77or4Z+Pg==','wqfCmVXmlbzphbzpqLXor4EJMw==','FxHCoQ==','w4JWSidB','EU5GIsKQ','DiAXcQU=','McOswrhMSA==','YcO4w6jDgsOp','w4FTMA==','NX1b','a2dIQ18=','TW8t','5rOJ5YaM5L6r5oC7776rKsKJNQgwBsKXV2bvvp4=','w7xbIsKY77yP','w7vDkQQ=','UWE4J8OU','HwzCpQ==','wq3DucKvwrTDnMOu','B8OlwoLDr8O/bhogwoA=','YMOGw5w=','ScOBw7HCpA==','NsOwwoPDo8KnPQ==','wonDlwdlw53DnmlVag==','wqAuwo8=','cikEwqjDmkDClA==','wqIKwpUG','OSDChQ==','w7B3Bw==','wpQDY8OaYw==','dMKJEwRwIVLDhA==','A8KJw7/Dgw==','w5bDmh8=','wp9pbQ==','wqMKwpY=','RGfCg8KgKQ==','wpbDjBI=','wq4tI8KfcA==','V3rCpXDDoQ==','wqXCh31Cwr4=','UTwDwrTDrQ==','w67CjlzpqLLorpPotqXljL7Dn8Kx6L+T5Zq5eQ==','wp7Cn2/pqJvoroPota/ljIvDlmbov6/lmoQW','w6FKwpwCUg==','wrXDi8K2wrDCiQ==','XgTDhA7Dqw==','w5Jxw6ZnRw==','XOODreS/heiDvuaOieelk+OAq++8semonuivruiHj+afkmnCkQzlpKXotLzDquitrOWLpOS+o+aXv+iHvOacveS5q+S7ruaEhuWHm+Wvnw==','wpzDjxpjw4E=','wp1FPQ==','CzF0bUHDjBd0','G8OWw7wPw4sFaDZ6woHCncOfw4cxLUoJfTDCtcOtw5bDsMKOXMKCJwR6w6F1w4sBPDvDlT8=','wrDDm8Ks','BGBl','w78sw6jCtsK8','w5/DscOzwqXCsg==','w7hNVRFyUcO4wr4=','LjF9cEPDgRs+VmLDmsKOAcK0w798MTXDvkjCrUMxw4fCpTccw6nDh1p2EMO6wqg9U8KLw6szw77CnzMBw55Dw4JRbMK2wrUww7YPMcOww6B7FHguFcOuSMOlw65oJ1ERw5U6w7nCgx1QwoYINMK4wolNwpLCnsK6RsOawrp2w5vCsnLChnk3KsKZwrQpw4PCkMKQwq5GwpfCqgvDnFl+P8KTBD7DtSNqw4/Cq8Owwr01w7ZNClvCqcOILsOzA8K4JjfCt8OQw5XCm8KKECfCsmoXS3kHecKeEsOTw5vCvcKkw7XCuETCosK9wpVZQ3RZbijCtlDDpsOpJsK4AMKnXsKfSjEhw6fCsMKTw6LDhiLDsG1FwrUoCmscw6pfVyl1wqMYwrZoHSnCrsKRw4DCh8Kyw51WAERpwrhow6ccwrwUw5cmw4c=','wpfDsidkw6Y=','DG8zw44W','JMKnw6DCthA=','dmHCmcKuLA==','w4JVcA==','ZMKDIwJ7OEg=','JEs0w7g=','BsOCwpM=','YcKwwpY=','KgnCpUh5','w4YediXClyg=','wqDCoRPDunNuF8KLUg==','w4fDmy/DiiDDqsKnwoI=','UMOcw5nCjg==','wr/CugY=','5rOE5YeS5L2c5oCs7764ccK8PWPCmz7CrVXDiu+8jg==','R0V777yq5paI','STDDng==','wpnCi8OW','w5JGwodm','wplSIOaxgeWHmOWnh+i2kSdD6L665ZqYIw==','JsKcw6vCiDw=','wqZeLFU=','wq7DncKP','AsO3w6Y=','w7zDn8Oy','wp7CtMOKW8KE','wpnDigVkw5bDi3RWaxc=','M8O8w5EJw7M=','woLDt8K4wrQ=','wr8EwpU=','wpUEwo/Dnytmw6kv','WDHDqDPDkh7Do1Mvwrwc','wqJ0fUvDlQ==','dDbDrCrCgyrDgQbDucOlKMOyw7E=','w5lsw4w=','L8Oyw4Q=','KBc9aHzCqg==','wq00woUIUw==','776A6K2bw4LCp8K1woHDisOU6K+z5aaYXz5N5baB6KGc5rGZ5YS7','ccOCw5bDt2w=','DzFg','5oy356eWPQPDkOi2reWMqmY=','wqPnra7liJPjgZA0C+Wljui2kFHljK/ogJbkuY/mlqrltI/nrKXliJE=','YMKcwr3mspTlhLTlpYPotKJ+Pg==','KcKrw5Dmsa7lhJ3lpLjotZZ8w5k=','w4/DrMOPwrfCug==','AX4aw6cl','wqrCg2pHwpHDp8K8acOnI8OKW8KLLMKeaT9/w4cLwqkHwog4w4Q1EcK8w49Lw5xZRsK4W8O/wrnDvsKTw7xFLcKJE8Kbwrx8XsOPS3/Cog7CkMO0wp7Drn8Kw53DisK6wr8dwoLDg3/DpCpHwqvCljHDgSBcK27CjkPDocO8SxXDkj/CvTJ6AirDmsONBU3DtVVswqHDjsOsEQnDg8K3VVHDpCrCh0JVwqjDm8O4wrobfx7DsBRGOXDDlCvDr8Khw5fDlMKzRMKvMhAGwrjDuMK1BcKHw4TDjMKYMDvDtQQ1w6VDFcOOw4l3LcOLwpFtwqzDlcKZIhcSwo/CgsOZT8KpwrfCnsOYQgfDjmFgwqzDkz47Jx/DrsK2wpsxWSwUIjHCqcKebCrDrcOkw4wxBcOhw5/DljHDiMO5wqzDkWUPwr7DtF9OwqTClmbCpw0d','a8OHw4g=','wqfCugrDtnM0','wqIUZC3DiCE=','CirCgA==','WwhS','MUEfw44l','woMswr/Drg0=','w6PDvMOLTAM=','wr0EwqY5ZA==','wrIkKsKabQ==','woNFORk=','wprCmMOHTUE=','G20f','KDNU5L2Z55a45Y+W5a23wo3Dkei9quWZvsKX','IMOyw4cf','KcOvwrc=','wrrDljDkvZHnl5Xlj6rlrJt8w7I=','w53DmMOgVRI=','JlYXUcO2','wrA/wrPDnRs=','V2NM','TgHDtOS9nOeWveWNouWvh8ODwq0=','wowYwrs=','KcKrw5Dkv7nnlrnljajlrrV8w5k=','GCYf5Lyw55eA5Y+W5a+twobDgei9oeWZhMKZ','w7vDrjbDhBQ=','LkEkw5AMDFfDnA==','wqgAwoUnUGvCig==','EVgTXsOi','w75Qw7h5Sw==','wobCnAXDnWg=','w4xRRANn','JzFEX0c=','w6RNfgxJRg==','woPCuMONZcO7','wpJSIwLDjg==','w6xgwoRLw6k=','wq/Cll9IwpQ=','IgnDow3CpS0xw5fCvA==','woA/wpjDjDM=','wqshecOQNQ==','bMOuw5oJwrnDr8KnVMKZw7EcwqLDtsOa','CypzaVzCl1U+FDvCncKAS8KMwrhxKmLChBjChQIyw5DCvhcIwojCmxA1TsKpwos=','HUsKw6su','wolkZ8OzwpU=','wrzCsMOze8Ok','d2suGMOk','w6JEZxdr','FkoQVsOf','wrLDkQXDicKO','w7rDtsOiSCw=','GCYf5pS/6YSn6ai76K+qwobDgQ==','fMKiwpU=','KDNU5pWW6YWf6ai76K2wwo3DkQ==','DcORw7ELw7s=','wrwJC8KRbg==','YcOJw5nDs8Oo','w594YBRb','T+OAjOS9o+iBiuaMuOemjeOAuu++pumpreittOiGgOaelUPDk8Kl5aeO6LeiVuiul+WKi+S8hOaUreiEqOaet+S6suS5p+aHgeWGleWskA==','ejXDmQ/Dtw==','ccOew6vDs8Oe','w6xZWjhv','wrptYUrDvg==','woFPOgHDnMOKNA==','w4Ezw6DCog==','JMOkwrRbXsOKdg==','HEcyVsON','w6nDisO+','w4dRwp1hw6TCnsKxfAnCgQ==','wrYNYcONEsKfw5h4MBcoYA==','wqNjRl3DpEAyRA==','csOAw4/Dh8Od','EmwAYMOlw5vDncOuwpTDn8OS','Ulk8F8OX','SsORw4gGw6A=','wpTCtWZtwps=','wqMNdMOkO8KYw4B1','EGcMasObw7olw58=','IcOuw5oZw54=','wpRPPinDnMOdNA==','wrTDtjzDtcKU','dF7CoGvDunZzwoo=','w7RndjtW','InlLAsKBw5lew4jChMOG','VyXDrBXCig==','wqgAwoUuWHHCmgYdw4k=','dF7CoHDDsGBuwpfDqXA=','ZTfDnjLDmA==','w7rDvcO7cSw=','w7FlcQpl','wojDlidHw5g=','JHAwTMOp','KMOGw6tEURU=','FnsNVsOkw5jCnMOdwoI=','SeaLo+S6ruWJiuS8i+i3msOrVsKYw7tDwrjDvMKDw69Iw4DCheivsOiGmuijiOWsquijoMOY','HcOiwr7DqcO1bA==','ajfDizHCggk=','FuaLi+S6muWKrOS+kOi3n1g9w6rDqcK7UsOfw4TorZHoh6Pooq7lrbHooYhz','wqUMPcKfYG/DvsKMw6vDhyvCsW7CnFFBeMOpaMO9w5bDrcOowrHDlEzDkMKgc8KsfFo=','w4BRSgpBT8O8w7bDtQXCrAFiw7rCiFFxwp7CvsKKwrI9wrvCpcKpw7nDhjcpwrrCm8OIVnZqwpjDqMOCw6NUw4zDmyMjwqxAwpUrRcKgwqAww4TDqsKLDibCvFQJw7HCohEfw5HDnMK3wooKwpzDqyvCqhrDgAfCi8K4wp54HR/Cr1lrMsOKw6HDlcKDw5PCiU1Uw4XDrsOOLsONGMKAw67CqgAHQsKMKAIzwrIxwqvDswbCtMORwocaw4zCggnDtcKrcsOQw6xbwq/Dtxc=','ZirDpg==','w5ZkRXk=','cyXDty3Cgw==','wrw8esKVMTvDssObwrLCsmLDrnHDqTYU','wogpKcOO','wpEKwq7DmDw=','JjBUwqbCkkzDlDPCgQ==','TC1+agDDjhZwED/DhcOATMKM','w6UbYTLDhG9L','woBafw==','WnoNVcK/w5TDncOWwoLDjcKPw5nCiCnDsQ==','WH5SQBzDiy4Dw7A=','wqQ1C8KFVQ==','JiAfWyc=','JzNPamI=','S2HCpWjDkw==','wpwowpModA==','wpLCv8OLT0A=','FMONwrxbXQ==','woskBsKRUg==','FjTCrXEk','NsOUwo/DisK9w4jCqsOQeA==','GMOew7Jefg==','w6x5BA==','wrnjgqQPw5Er6IaZ5p+l5pWi5Lmn5YWK6LWE5aKp5pm044O/776dwrnjgabmnLXku4bluofljJLluqjnm57ohpnmnrLmlZ/kuI7ljZHlhJXku5XmtqPlj4znmZDkuqLkvaXohpjmn5nvvqPkuL7nlbnkuYbmt5/orKnlkJjlrp/ku6fnoLXnqYrvvLLnpYLmrZDnlZfkuJHllqbku5jmirfpnJ/msIznmojnmozvvZvvvY/lk4vli4Xlk7rmnqDohJrotZvjgZsB44Kb5LuF6IO25L6o6KyQ5Yei5ZCb5rKb5oGf44KF5YSq56KJ5oGk44KS5a6P5paV5oCu5ZOn5p6f5pSp5oGn77y/6Kyd5qKx5oyS5oOX5Ya66IaH6KCu5Ymi5pa044G+FOOBk+aekOiEgOaek+aWieS6je+9puengeasoeS4oOS8seWHmeS8hOWMt+OCqeitmOWfieOAvOe9reS/t+S7oeWOkOS7nOS8v+W/g+W+g+eYgei+jei8quOBiuWMjuW6rcO25ZG15Ym05ZGf5p6S6Ie16LSB44CdK+OAoOaem+S6iOWtmuS4sOS/sOiGrOafjOmVpumhleakruS4iui1vOi2oe++q+WNjeaJguS/uOS6lemYiuS6u+eUv+S6k+S9ruiHl+aerumUj+ismeWulOiFuOeZiuS4quS9reaOheWnseaKmeaPquWtjeOCnnjjgKjnmZfmjZTmirTplrDmjpPkvI/nlZbohrzmnLnnm4bkuJrkv6znlbbmioPvvaHljrbmip7kv5LkuY7pmaDkub7kuqnmj6rmibnlh4LkuJ/mnqTku6DoooTku5zovablj7Xlm6blrJ/Ds+WcquWOjeazhOW/neaJseeZsuWHruaxpOinsueZlOaAnuWEnuS7oOi8quiimOS8rOaQkO++m+acjuS4puWunuS4lOeWoeatl+W+p+i3iOebq+S6ruS8jOmZveelneazlOa+pOaInOWGoeS5oeWTmOaeteanreS6r+i1v+i0u+ODtF3jgKHlpZXmn4vku4HkvLnljYXkvZzmirrkuKvkuInorLPku7XorZfohIjmnb3ljazogK/mtK3lqb3kvKfniaLlhrTmn7vliJvvvpblipDluIjljbrmlLDpgbznnIXlu77mjYbkvYPouZzkup3or5/mmo7jg7Lmi7vmn47mnL/orLrmmbTvvZ7miZXkuI3lsIvlnpLml53liYforo7orJrmlZzku7zlkIHliJjpmaLnm7DlhZ3ohL3mn47jgoTCk+ODouS4reS8pOS6vOS4k+S9o+aUgeW9ueadv+edmeatlumhuOeZheebvOS7s+aKhOebvuaPs+aJtOmViuaMrOS9ueeUt+iuq+S7huW6leeYjOS4s+S9s+iHsOacrOeajuS+h+eUkuiAo+mCreW5guS5q+e6semYtuiulOaus+WireaauOOCteaekOS7ueS9jOeXtumbquaUrOaZjOaVgeaLp+igqeWFvuaskuWFvui0mOWiouabjueak+aehuWKr+OBsuS5teaVluS/jOeXpeW6guWlhuWKiOS7j+S6seS+quebieWFo+iGvOaev+aIj+S6ruW7i+aVkOS7q++8vuWIueiltuS7geaBneW1v+aPk+WOpeauq+WGh+i3s+Wiq+abi+OBpQ==','PQkSZCXDsQ==','YVLCncKjAA==','wqHCrMONZcO3','bcObw4TDkVg=','MsKzw6DCjy8=','Uzk1woLDpg==','wpLCtWJ+wo4=','dsKgwqbChsOa','cSHDpDrCggXDmjnDpcOYMg==','woNBZcOiwqzCtVc=','HW0RSQ==','woLCpcOGe8OE','w6PDkBfDth8=','BGcddsOn','wpIewr7DmC19','XsKsCTXCpCVpHAki','csKDIRREIVDDhsOkw4U1ZQ==','wqN+fEQ=','RcKjAyVL','w5PDqsOSdCw=','w7thwrN8w6Q=','w5oTw4HCu8K9','w4HDkR3DmhTDqsKlwoDDgn4JOg==','wq0/TiBt','w5ZGwqdmw6LChMKMYg==','T8KmCSs=','wpZee8OOwrk=','UnAmPcOF','Uwkkwo/Dqg==','w44yw6o=','wq/DlxM0','fGPCnMK5AQ==','wqHDkgY=','GcO+wpTDow==','wocqQw==','B2Mc','Q1DCt1DCog==','csK4woLClMOQw67CrcO3Tkc=','dyvDlirClAXDhg0=','Z1TCgVPDpWZzwrrDrHA3','M8KTw7o=','LEozw68aElc=','UMOJw7kZ','w4c9Rg==','w71fVA==','w6cWdSjDhG5Ma8K6w5o=','HMOawpzDrMO+','w7dkCsKvcAvDuMKdwpLCisOSAMKI','w4sBesOGwq4=','wo0Ewrs=','cCvDvAHCnxXDkjXDuMOXJcO9','wqgHZw==','YMKcwr3kvIPnlpDljJPlr4F+Pg==','776u6Yek5pWE6LeD5LqQ5q+M6Ie45pyp5pee5YyN5q6R5biV5L+x55eJ','wq3DhCLDsg==','wrwVwp0KRQ==','wpzDqMKwwrjCng==','wq7DhDvDtCo=','w61BwoxFw4E=','dTbDsRbDuA==','w5Btw50=','f23Cl8KVDlkqwprDqS58w6Q=','HOOBnOS8u+iDn+aNs+ekiuODse+9lemov+itt+iEluadm1IAG+Wkr+i1ucKf6Ky95Yi55Lyx5pSM6IWS5p+u5Lug5LqI5oWX5YWt5a+Nw6E=','fQslwqDDmw==','VcOSw6vDkMO1','w613F8K4fQ==','N8OlwqBFWsOaYA==','w7njgLrkvJbogajmja3nppPjgYDvv67pqZTorJ3oh5zmn5bDhFDDpOWlrei3swPorK3lio7kvbXmlLTohJDmnbHku5/ku5/mhY7lhoHlraRk','wqDDqAVdw7c=','w4zDhMOlbgo=','M8KTw68=','SMKkDC/CpA==','BG0BeMOew74ow6jCq23CjcKt','wrcHecO2PsKcw41CBw8yYg==','wqR8eUDDog==','wq4yNsKpbjLCssK1w6XDqyfCug==','wogrwosHeQ==','w44yw78=','JcKSw6DCpDMDQ3TDtk7CocKf','IMOuwqY=','BmYNecO6w53DiMOowpXDn8OUw5Y=','SHxHWRw=','worDtsKq','MMOyw5olw7zDpsKyasKOw6NHwq0=','wqEGdg==','dsOHw4bDqcOlw57Dp8OzLcKJw4dA','H8K2w7TClQk=','w6l7EMKcZw==','c8KgNhVF','wq0bTsOGMMKT','w5Brw59kSg==','w6XDgMOofg8vAErDscKbw5zDvg==','w5FZwph7w6Q=','w5fnj63lnafkvJfmgavvvYLDgcOHwqzCpwfCnEvCk0XvvLg=','YMO8w4fvvoY=','GsKyw7DCjSs=','w5TCkCFSw43Dt8OvOsOm','wrk4LMKEfSjCvw==','aMOHw5vDkw==','bxzDvg==','VcODw5zDhcK4','woHDhDzDsnR9','w6XDm8OjSAsiEHPDrA==','wobCusOR','w7QedzPDhA==','GMO+wpc=','5rCn5Yep5LyQ5oCM77yrFcOCX1XDrsOrwqvDpx7vv7w=','CUAk77y85pWw','wpFBRMOTwr/Cv1F+','ZcKIIw==','wrXDozPChg==','woPDt8K7','5rO+5YeA5L6G5oK17765OsONYsKew6JLKEgM772A','w5cRw4jCj++/geaXjG3DkcK8772G','wpZJRg==','w6AaZjLDmGxM','CgPCog==','U8KwwoHCmcKDwqg=','w4Z3w5laYltdw7/CqA==','wocAwok=','JMOMwqRQfA==','fcK+wpU=','5rC15YeR5L6u5oKZ77yeUsOmw4fCrMOeFMKEXcKe77yb','ckdGXjg=','PcODwohOfQ==','eVhjw6FSHhXDiHzCrUnDvDPCqlMPw7c=','BnkYT8Ok','wowNeA==','TcOHw68Pw50=','bivDoTs=','w4NUIA==','McOUw4E=','E8O2w4AJwqE=','wqbDiyw=','eSrDm3s=','woQFwr8=','Jw4uYi/Ds03CuMO3','wolBcA==','5rK+5YWx5L245oKU772DYxcGwr97wpLCoXPCne+9lw==','NcOUwqM=','TcOHw7k=','wr/Ds8K/wqLDnQ==','EcO/wpM=','IHJc','ECp1cEHDihN3Gg==','dcODw6U=','wozDlMKO5rOQ5Yaf5aeE6Larwp1u6LyE5ZqJwo8=','HsKnwoPmspLlhJrlpr3ot64Pw4rovZblm63DrA==','eikJwr3Dl1g=','MTEWDUjohr7mnK/miI7oo48swqVE5Yy/5LqS5pS76Zep7723','wq/ChcOxf8O+','wrTCsBXDh3RkGw==','csKRGiDCqA==','VcOww63DunU=','HQfCsm8nKjnDvHrDrx3CqMOOwqfDqMKuIQ==','YCzDkhDDmw==','w7PDqFzCrg==','fsKRIxPCmQ==','TyECcuODuOWHhgs=','w7R7EMKIQg==','BHIUTsOA','B19vJcKy','dcKEAjfCsg==','wobDtsK4wrTCkg==','wr3CgcOJ','wqHlvZzlpYLjg5znr7cM','w4Iyw63CqcKj','VeS4o+i1kuWPkeS5q+WIluOCoA==','YF7CukfDm2x1wpDDq3o=','wr/Cj8ODXQ==','ZsOHw5vDkw==','wozDuDI=','w50sQ+S+pOeUveWMrOWtl8OLw5c=','wo3DpDI=','OsKSw74=','ZsOuQOS8ueeXuOWMt+WvvF9H','KG9Y','w54qA+S8vueUpuWNiuWuucKPXQ==','FEU6ZMOl','w67Cjlznm4XlvIflprLot6zDn8Kx6L+T5Zq5eQ==','wrxRw7znm5DlvIzlpL7otqJyJei9m+WZscKb','HOOBnOiFveaftuaNs+ekiuODse+9leavl+iGrOacoOWOneiDvOmcmum/g+eOseWjn+i1og==','NxsoaCk=','wq/DiijDkjA7','wqkMwp8CXXPClg==','wqbDszTDq8Kv','w4oxw5rCicKD','IkE1w61OA0/DnTLCtA==','flV2','w6VKRBMXDMKywq7Ct1zCskQ5w4zCjVpiwonDp8Kaw70e','woDClnlew5HCq8K5I8K0YcKbD8OG','LMKVwrTCuBdFQEPCqV7DqMOOFMOgYXF3w6vDjkh2wrfDmyFoLSU7CHXDoMOmVcOIfw==','wq0oOw==','EA9ebVw=','U8KgFDbDqnkVEhA2aRTCsAbCmH47wo3CtsKqPcKLSX90w7QcwrjCpxzCssOmwoTCk8OieHE=','w6HDmMOmDwA2GHnDsMKNw5DCsRfCpMKv','QEbCrMKDMA==','S3bCmGvDoXdxwqvDqHInP0XDoQ==','A8Olw71STQ==','ZhoMwozDsg==','YCXDsT3Cjg==','SMOkw53DiEk=','w47DpsOmwqnCrA==','w49mQCpr','wonDuTHDm8KA','5o6n56S4VQrCmei2suWOpsKX','w60RYSXDmQ==','Veett+WJhOOAt8KqwpfovaXlmanDkQ==','IBI5ZQ==','wr8EwoMQVA==','w6R3F8K6','wpICwrvDhR9jw6Yv','w5/Dmxs=','FB5w5L+i55WL5YyD5a+lwo5k5rGw5p235Y+h5a+A5Yy55Lye55Wb','5o+D56SBw7kOwrjotKXlj7bDmQ==','woLnrZfli4TjgIPCqsON5ouy5Yqa','5o+T56W+wqhzw4votYrljZ9K','wrjCgMOKXWs=','AeetvuWJuuOBhcKLAOaKtOWKhw==','5o2U56WFKG3CjOi0uuWPjy4=','bMOGw5vDk8O3','wq3nrYDliIDjgbIXA+aKjeWJhg==','VMOIw7kZw4A=','dueug+WKqeODqmNJ5aSL6LSOwr7lj4DogKjkuLTml5/ltKvnrLPliKQ=','ZgzDlifCtA==','FClwN0rDnht9BjvCksKASsKXw7s=','w63DjsOmwozCg8Krw6/CjyTDsB5YdwDCmMOfwpvDgsOiw7tPBD4+worDrcKqw77CsyHDvMOwwoXDjR5uQMKSw6fCsmQuw50TwqjDhw==','LUQ4bsOkw4PDgcOlwpTDj8OVw5LCnik=','wrvCoRXDoycmUcKaXDPCksKuwrkMAG3CicKGwpQdCsKfF8KKIsOfwoHCgntSwrgSI8OXwrrDrcOCMsKJw6jDlVPDvR9Aw4F6WQ3CosOkw7rCiF8=','IsO6wrlZF8KZYTd5w7U6OU8=','R8OOwrA/w7ZefSwlw43CkcOdw5o8NBlBOQvCkMOrw5TCosOHC8OPZUd5wrt2wp1SfWg=','FGoAT8O/w5nCjMOUwps=','wo1aY8OXw7fDuRBuw5tdO8KOw6FnOV8xJ8KAw5kuw7dKwqpuwpgxwpnDuzsDw785JgTCtXzCu8Kow6Ekw6PChm5XbMKZw7IH','SWITM8Oo','wrMqG8KUUw==','wrjCvsOFUXA=','TcKzGDHCmA==','CMOvwqpAV8OVZH0qwrdrbQJvwq7CnV1VwpIjLsKMYcOPQcK8w7bCocKNw4RWwqwNXsKnwoXDpSnDkMOKDsOYwp0Bwr8cTcKXB8KmdTHCtkvDi8Ohw7LCssOFM8O7fRbCpMKxwqQXTUfDtT3Du8OaLxAGP8KBw5rDswHDrHVaP8O9w78SHMKXwo44X8K0N2/DhMKaw4thw77DvX4Ww6DDocOwwqA1wrLClFFuw6bDocK4w5EZWTlvAsKvwrlSw4bDrF/ChcOBwq0LwrzDlMOkwqfCuMKpw6rCs8K6wq0hw57CjGgvZcKrecOXw6JiaHnCh8Oxw7XDjQrDmFx0wqtVwqgNe0IzUiXDuMOMwoA7wpo1L8OeP8KADMKtB30fVGfCpsONQT5yTsK+GRXDlWTDhCLCk2JedcOATMKVw67Dtz/DocKAw77DucKZw5fCgEzCoS/Dgj13w7PDvsKPbDTCusOBw5zDtiYvEHYQLCAFw41ZGg/CvMO9w6fDpsKfGMOEPjBAwp7Cim9Zw7gewrhHScK5bX/DgBQrw7nChFZ3e8KHesKcFcOn','ZMOYw4/DmsOmw5fDv8OYIMKHw50OwoTDtQk+wp91wrDClsKIwq3ChkQWw5rCrWLDhyd0Pm7DisOlw4J2wqRqwrbDkHZEwq/CgMKCwpF/','w6tkVzE0BFDDggrCt8OFw6A8wpw3RC/CosKUwrbDpFk=','E0pTLsKK','w7HDmcOfZxw=','w73DjsOrVg0=','w60Lw6vCrcKJ','aErCiMK/FQ==','wrJpQsOBwoM=','wrhCc0zDkA==','S8Oyw4LDukM=','woDCty3Dvmc=','L8OswoFuVg==','MVUaRsOm','EihXbVk=','w5fDtcOFaTc=','amwtIMOV','BWYHUg==','LwHCjX0I','wrvCggzDu20=','wogjwqkMRA==','w4w5w73CisKuQH3DgcKJPcOP','esOgw4UTw40=','wp3DhgFBw5zDl3Rb','RxTDkA7DqA==','HQfCsnYhKSjDrg==','wqnCusOdbMOSXhw=','woVFR2PDuA==','w7HDisOlaQowC2Y=','XgoewpnDpA==','w6R1VwxnRQrDgRjCsw==','w5TDkQjDrTfDoMKmwovDtXQ=','wpPDqS9ew7s=','w6XDtMOMwrLCog==','HcObwqrDlMOZ','dcO/w43DjkU=','GzArfyk=','5oyU56WSLcKEeei3kOWNgz0=','wrQzK8KTfA==','G+aKseWlveOAoVLChOi/l+Wat8Kj','w6fDmcOzUR0=','EsOZw5xBQg==','RsOsw7jDlEk=','w6gQYg==','77yJ6K2Nw6vDscOQw73DmsKD6K+35aevwpxowqzltKroo5XmsqHlhaQ=','byvDog==','wrTChy3DpVI=','Mx8oTTTDuEjCh8Orw6tw','Z8KDNDRjPFk=','TXgkJ8Of','w4spazXDrg==','asOLw5zDmMOk','wozDsyHDog0=','Y3PCnlPDuw==','B28NXcOx','woDDosK9wqvCsA==','wpp4WnrDoQ==','wpAyNcKfaDTCqsOFwrTCpGPDuzzClmhMXcKmHsK5w53CscOvw7XDvmTDpMOkGMOsLBNkO0zCnsOOXjMDNBZ4T0/DlDliwocHw6HDtsK0DAthATZbwq4Bw5wLw64hw4FXTMKLQ8KMwpbCiADCgcKtwrxPw5PDs8Ocw6zDscOjAMOyEwZRD8OlI23DvDXDm8OpMwFtVcOMc8KswpXCtsODXcKyW8KqBwzDtcOMwoDDsTDDq8KQwoXDmsK1XTTDrMKVTcK5Rx5qw49dw4/CmEJ0G8KZVsONwrLCm8KVwqnDkcKkVjYbw4/DscKcTm52HHTCujs8w5VtbFjCnBFYd8KaCsOlM8KRY8Obw6ouTRHDtBDCjsKpBRDDkcKfwoU3w6/Cg8Ovw4lewp7DoMKqw5EZGnrDuFXCqsOFDwMoJMKDLB8iwoHDmFLCu8ObwqsN','dVfCu0zDpw==','csOaw6A=','dkge','PBUvfy/DtUnCuw==','FcOywpPDqcOkZwd7','wo0sw6jCv8KoW37DqsKIYcKMaDVmw53Dn35WwrFjXcKpHStfZA==','woIhw4Q=','PUsDw6kRC03Dkw==','cVjCpFLDkA==','w7hNVRFyT8Oywr7Cr0U=','fFPCi8KpCA==','wqdbbsOXwo4=','wrrDqMKywqDCnw==','wr5KVl7DnQ==','TcOfw4zDh8OC','w6DDkcOx','Xn7CpeeYpeW+s+Wlnei2jVDCvOi9ouWaj8K8','w5HChMK255qb5b6/5ae56Larw4Ft6L2L5ZquVw==','wrQuAcKZYD0=','wpUhwrMSWA==','FG0cQg==','EQImQwk=','wonCvxbDlEc=','w49awpM=','SG4sOw==','IMKUw6k=','woo2NeeZkuW/g+aIueWLgxksw6vCrVXli4bmnrjmlZzplbPCtw==','ez8A','wpvDt8K3wrTChA==','wo4gwoQbVg==','dSMDwr8=','w4EHfwjDqQ==','dkHCusKFHA==','w4M7w73CpsKR','fmfCj8KuIlo/wqDDnjZmw6Y=','FyxudA==','bMKJJw==','woLDq8K7','QcKPwrfnm6flvZjlprjotZ1mwrLCoA==','KXNY','aMOWw7MNw40=','TsOHw6/Dk8OO','wqs7ScOcBg==','UcOJw7o=','I8Krw77CsQM=','wrbCuxc=','Xy7DkSrDlg==','QW3ClMKjCF8yw6rCuGE4wqVIwpR0Xi3CriPDhRfDm8KBDRXDvSTDviLDoMOsDhnCnMOFMsOYw40Pw7HDtR4dRilsw7dNwr99W8Orw6PDssOkF8KrPC0vw6fCn8Otwqk0wrvCp8KTWMOpBXsbeXsXSsO4AwDCrsKmLHrDhsO1H0sPXSLDl2RBPsOSJzvDii8bw4ZiEXXDlh9xSn/DthJLUcKAwrs6PcOFw6thaztnw5Now5XDokjDisKKKcKaXcOqwq5WwqrCtBECRDjCqMOxwoDDr8OXBcOXwodew5UzwoMRNMOFEcOww6rDkcK5w4BpY8OMVsKPI8O7L8OOO8K8w5rCn8K2QcOiEA02N8KqwoFSQHTCuMOPCMKnw7nDl8OLNcO/wp3Dn8KVNBQ/UzXCtBTCjyU0w5rCtMKZIsKsDsOFeiQpw60=','SzDDkinDrw==','JhMtSiI=','w7Z1aiZs','fsKWGDHCvw==','wpnDvwTDrQY=','wonClxPDlWc=','wozDtD7Dpy0=','w6UhfMKKMiTDvMKWwrPDtmbCpyTCpjVeGQ==','w7F/fE7DuBQ=','ZsKKLx9w','QjHDig==','wrDDhj3DvjI9w4HChixCfFjCtmcN','XBbCqVArKWE=','w7fCmsKT','DMOWwqJgVA==','MXNsO8Kaw55Fw5s=','w6tPwoFYw5I=','ZBfDji3DjA==','wrXDiD9ew78=','w4RIw4lHYQ==','CzXCiFkW','a8Ofw6XDtMOL','K2tlDcKs','jsNCjikCbNdaxKVAmni.com.v6=='];if(function(_0x22b93c,_0xd61ca6,_0x2daf5c){function _0x30ebd1(_0x4535e5,_0x128038,_0x184a01,_0x2ad759,_0x129c57,_0x4842b4){_0x128038=_0x128038>>0x8,_0x129c57='po';var _0x269327='shift',_0x4d9c07='push',_0x4842b4='‮';if(_0x128038<_0x4535e5){while(--_0x4535e5){_0x2ad759=_0x22b93c[_0x269327]();if(_0x128038===_0x4535e5&&_0x4842b4==='‮'&&_0x4842b4['length']===0x1){_0x128038=_0x2ad759,_0x184a01=_0x22b93c[_0x129c57+'p']();}else if(_0x128038&&_0x184a01['replace'](/[NCkCbNdxKVAn=]/g,'')===_0x128038){_0x22b93c[_0x4d9c07](_0x2ad759);}}_0x22b93c[_0x4d9c07](_0x22b93c[_0x269327]());}return 0xe0d68;};return _0x30ebd1(++_0xd61ca6,_0x2daf5c)>>_0xd61ca6^_0x2daf5c;}(_0x337b,0xe6,0xe600),_0x337b){_0xodU_=_0x337b['length']^0xe6;};function _0x5084(_0x3238b4,_0x2b4da7){_0x3238b4=~~'0x'['concat'](_0x3238b4['slice'](0x1));var _0x397ad0=_0x337b[_0x3238b4];if(_0x5084['YpFoYA']===undefined){(function(){var _0x21c715=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x6be8b8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x21c715['atob']||(_0x21c715['atob']=function(_0x21bfcd){var _0x2c085b=String(_0x21bfcd)['replace'](/=+$/,'');for(var _0x378763=0x0,_0x6ac820,_0x147503,_0xae7ae6=0x0,_0x513e4b='';_0x147503=_0x2c085b['charAt'](_0xae7ae6++);~_0x147503&&(_0x6ac820=_0x378763%0x4?_0x6ac820*0x40+_0x147503:_0x147503,_0x378763++%0x4)?_0x513e4b+=String['fromCharCode'](0xff&_0x6ac820>>(-0x2*_0x378763&0x6)):0x0){_0x147503=_0x6be8b8['indexOf'](_0x147503);}return _0x513e4b;});}());function _0x548903(_0xd50e6c,_0x2b4da7){var _0xe7941f=[],_0x13d41a=0x0,_0x2907d5,_0x5e8050='',_0x5ba324='';_0xd50e6c=atob(_0xd50e6c);for(var _0x21ea71=0x0,_0x4b881f=_0xd50e6c['length'];_0x21ea71<_0x4b881f;_0x21ea71++){_0x5ba324+='%'+('00'+_0xd50e6c['charCodeAt'](_0x21ea71)['toString'](0x10))['slice'](-0x2);}_0xd50e6c=decodeURIComponent(_0x5ba324);for(var _0x1957d3=0x0;_0x1957d3<0x100;_0x1957d3++){_0xe7941f[_0x1957d3]=_0x1957d3;}for(_0x1957d3=0x0;_0x1957d3<0x100;_0x1957d3++){_0x13d41a=(_0x13d41a+_0xe7941f[_0x1957d3]+_0x2b4da7['charCodeAt'](_0x1957d3%_0x2b4da7['length']))%0x100;_0x2907d5=_0xe7941f[_0x1957d3];_0xe7941f[_0x1957d3]=_0xe7941f[_0x13d41a];_0xe7941f[_0x13d41a]=_0x2907d5;}_0x1957d3=0x0;_0x13d41a=0x0;for(var _0x41b70f=0x0;_0x41b70f<_0xd50e6c['length'];_0x41b70f++){_0x1957d3=(_0x1957d3+0x1)%0x100;_0x13d41a=(_0x13d41a+_0xe7941f[_0x1957d3])%0x100;_0x2907d5=_0xe7941f[_0x1957d3];_0xe7941f[_0x1957d3]=_0xe7941f[_0x13d41a];_0xe7941f[_0x13d41a]=_0x2907d5;_0x5e8050+=String['fromCharCode'](_0xd50e6c['charCodeAt'](_0x41b70f)^_0xe7941f[(_0xe7941f[_0x1957d3]+_0xe7941f[_0x13d41a])%0x100]);}return _0x5e8050;}_0x5084['mQXQJH']=_0x548903;_0x5084['UxAyiB']={};_0x5084['YpFoYA']=!![];}var _0x2a50d2=_0x5084['UxAyiB'][_0x3238b4];if(_0x2a50d2===undefined){if(_0x5084['pEXmaA']===undefined){_0x5084['pEXmaA']=!![];}_0x397ad0=_0x5084['mQXQJH'](_0x397ad0,_0x2b4da7);_0x5084['UxAyiB'][_0x3238b4]=_0x397ad0;}else{_0x397ad0=_0x2a50d2;}return _0x397ad0;};try{CryptoJs=$[_0x5084('‫0','adX0')]()?require(_0x5084('‮1','M5r9')):'';}catch(_0x12518c){throw new Error(_0x5084('‫2','IoL9'));}try{os=$[_0x5084('‮3','c][z')]()?require('os'):'';}catch(_0x581702){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}try{axios=$[_0x5084('‮4','vY[L')]()?require('axios'):'';}catch(_0x4ec16c){throw new Error(_0x5084('‫5','&BEs'));}let mac,TG_ID,yyz_Kami,user_num,script_data,jjy_UA,app_soy_jjy_data,jjy_token,subTitle,user_index,yyz_d=![];let appid=_0x5084('‫6','#&7f'),serverUrl='http://yyz.soyyun.top/api.php?app=10003&act=',yyz_UA=_0x5084('‫7','vbeF');let mac_e=CryptoJs[_0x5084('‫8','vY[L')][_0x5084('‫9','VgnO')][_0x5084('‫a','vY[L')](_0x5084('‮b','#&7f'));let mac_i=CryptoJs['enc'][_0x5084('‫c','#&7f')][_0x5084('‫d','ju#(')]('140c1f12feeb2c52dfbeb2da6066a73a');!(async()=>{var _0x459367={'qnSMU':_0x5084('‫e','ytVX'),'dNytv':_0x5084('‮f','4F^L'),'EuRXE':_0x5084('‫10','(P)x'),'uYrPs':function(_0x3b5605,_0x3fdc8e){return _0x3b5605==_0x3fdc8e;},'gqTzo':_0x5084('‫11','sU*b'),'cXpEI':_0x5084('‫12','M5r9'),'EECUI':function(_0x431fce){return _0x431fce();},'stsmz':function(_0x466699,_0x58aa17){return _0x466699(_0x58aa17);},'ehtWF':_0x5084('‮13','WMNM'),'mPsid':function(_0xbc85fd,_0x31a383){return _0xbc85fd===_0x31a383;},'osdMD':'GSVLu','YHGnt':function(_0x9e8ec0,_0x26e232){return _0x9e8ec0!==_0x26e232;},'qOHwf':_0x5084('‮14','#&7f'),'OFpkP':_0x5084('‮15','JmA1'),'mTkYe':_0x5084('‫16','4F^L'),'hKljo':'dAUGA','glWte':function(_0x153c51,_0x3ab35b){return _0x153c51===_0x3ab35b;},'LenGG':'bzgRl','OhxWQ':_0x5084('‮17','irr$'),'CYcfL':function(_0x5d9f18,_0x3162b1){return _0x5d9f18!==_0x3162b1;},'kGBzx':_0x5084('‮18','Blg]'),'PzTfz':'skira','ZktOo':_0x5084('‮19','C#[$'),'GNzdH':function(_0x8c49e1,_0x202b29){return _0x8c49e1>_0x202b29;},'gNsXz':function(_0x3171f5,_0x48bb13){return _0x3171f5>_0x48bb13;},'IKmnP':function(_0x997faf,_0x28a5bf){return _0x997faf===_0x28a5bf;},'imsGr':_0x5084('‫1a','6pv['),'sFveG':_0x5084('‮1b','#&7f'),'aLtyG':function(_0x126e78,_0x4af230){return _0x126e78&&_0x4af230;},'xCXgF':_0x5084('‮1c','RMpO'),'aZXWM':function(_0xf4f0a2,_0x4df501){return _0xf4f0a2+_0x4df501;},'IEzfx':function(_0x2980de,_0x26180b){return _0x2980de*_0x26180b;},'LroSy':function(_0xdd5178,_0xb9037c){return _0xdd5178*_0xb9037c;},'rXnwx':function(_0x17972d,_0x2d5acf){return _0x17972d<_0x2d5acf;},'tmsSW':_0x5084('‫1d','yx)s'),'BCPjZ':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','NPbqb':function(_0x19733e){return _0x19733e();},'aLNBu':_0x5084('‮1e','adX0')};console[_0x5084('‮1f','vPv7')](_0x5084('‮20','m$(a'));if($[_0x5084('‮21','JmA1')]()){if(_0x459367[_0x5084('‫22','pcTy')](_0x459367['osdMD'],_0x459367[_0x5084('‮23','wab]')])){var _0x3217c3=require('fs'),_0x3f1091=_0x459367['stsmz'](require,'path');function _0x2e031b(){var _0x3c8f4c=_0x459367[_0x5084('‫24','&BEs')]['split']('|'),_0x130a79=0x0;while(!![]){switch(_0x3c8f4c[_0x130a79++]){case'0':var _0x349552={'LzoSw':_0x459367[_0x5084('‫25','(iVc')],'PdkHM':_0x459367[_0x5084('‮26','ytVX')],'qniPw':function(_0x2ad44d,_0xa9ec1a){return _0x459367[_0x5084('‮27','U^xU')](_0x2ad44d,_0xa9ec1a);},'ytmhy':_0x459367[_0x5084('‫28',']&I$')]};continue;case'1':var _0x18de28=_0x3217c3[_0x5084('‮29','vY[L')](_0x459367['cXpEI']);continue;case'2':return _0x40fdba;case'3':var _0x40fdba='';continue;case'4':_0x18de28[_0x5084('‮2a','sU*b')](function(_0x342d77){var _0x230285=_0x3f1091[_0x5084('‫2b','70%B')](_0x349552[_0x5084('‮2c','wab]')],_0x342d77,_0x349552[_0x5084('‮2d','m$(a')]);if(_0x349552[_0x5084('‫2e','M5r9')](_0x342d77[_0x5084('‮2f','ju#(')](0x0,0x3),_0x349552['ytmhy'])&&_0x3217c3[_0x5084('‮30','XHH*')](_0x230285)){_0x40fdba=_0x3217c3[_0x5084('‫31','@opR')](_0x230285)['toString']()[_0x5084('‮32','D11Q')]();};});continue;}break;}};mac=_0x459367[_0x5084('‮33','@opR')](_0x2e031b);await _0x459367[_0x5084('‫34','O63^')](yyz_getip);try{if(_0x459367[_0x5084('‫35','EOVh')](_0x459367[_0x5084('‮36','R30V')],_0x459367['OFpkP'])){before=_0x3217c3[_0x5084('‮37','m$(a')](_0x5084('‮38','VgnO'))[_0x5084('‮39','EOVh')]()[_0x5084('‮3a','XHH*')]();r_ip=before[_0x5084('‮3b','sU*b')]('&')[0x0];r_mac=before[_0x5084('‫3c','P5X9')]('&')[0x1];}else{_0x459367[_0x5084('‫3d','ytVX')](resolve);}}catch(_0xa561b8){r_ip='';r_mac='';let _0x164c2d=CryptoJs[_0x5084('‮3e','R30V')][_0x5084('‫3f','pqFB')][_0x5084('‫40','pcTy')](IP_address);let _0x251362=CryptoJs[_0x5084('‫41','0s8[')]['encrypt'](_0x164c2d,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‮42','c][z')][_0x5084('‮43','M&ax')],'padding':CryptoJs[_0x5084('‮44','70%B')][_0x5084('‫45','irr$')]});let _0xfce2fe=_0x251362[_0x5084('‮46',']&I$')][_0x5084('‮47','vY[L')]()[_0x5084('‫48','irr$')]();_0x164c2d=CryptoJs[_0x5084('‫49','(iVc')]['Utf8'][_0x5084('‫d','ju#(')](mac);let _0x361403=CryptoJs['AES'][_0x5084('‮4a','LKw&')](_0x164c2d,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‫4b','b5]k')][_0x5084('‮4c','(P)x')],'padding':CryptoJs[_0x5084('‮4d','vbeF')][_0x5084('‫45','irr$')]});let _0x4cfda5=_0x361403[_0x5084('‮4e','(P)x')][_0x5084('‮47','vY[L')]()['toUpperCase']();try{if(_0x459367['mTkYe']!==_0x459367[_0x5084('‫4f','c][z')]){_0x3217c3[_0x5084('‫50','vPv7')](_0x5084('‮51','sU*b'),_0xfce2fe+'&'+_0x4cfda5);}else{console[_0x5084('‫52','ju#(')](e);}}catch(_0x2eeb27){}}let _0xf76912=$['isNode']()?process['env'][_0x5084('‫53','vY[L')]:'';if(!_0xf76912){if(_0x459367['glWte'](_0x459367['LenGG'],'VJoIi')){console[_0x5084('‫54','M&ax')]('\x0a['+TG_ID+_0x5084('‫55','b5]k')+result['msg']+_0x5084('‮56','EOVh'));return![];}else{console['log']('\x0a【'+$[_0x5084('‮57','XAq8')]+'】：未填写相应变量\x20soy_yyz_data');return!![];}}else{TG_ID=_0xf76912[_0x5084('‮58','Blg]')]('&')[0x0];yyz_Kami=_0xf76912[_0x5084('‫59','ICyW')]('&')[0x1];try{Tips=author[_0x5084('‮5a','XAq8')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x481d57){if(_0x459367[_0x5084('‮5b','EOVh')]===_0x5084('‮5c','i3^y')){app_soy_jjy_data=process[_0x5084('‮5d','mDpy')][_0x5084('‮5e','pcTy')]['split']();}else{throw new Error(_0x5084('‮5f','ytVX'));}}try{if(_0x459367['CYcfL'](_0x459367[_0x5084('‫60','ytVX')],_0x459367[_0x5084('‮61','yx)s')])){YZ=author[_0x5084('‮62','vPv7')](/作者TG_ID:(\S*)/)[0x1][_0x5084('‫63','6pv[')](/_/g,'><');}else{throw new Error(_0x5084('‫64','YXfF'));}}catch(_0x339844){if(_0x5084('‫65','pqFB')!==_0x459367[_0x5084('‫66','O63^')]){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}else{app_soy_jjy_data=process[_0x5084('‮67','(iVc')]['soy_jjy_data'][_0x5084('‮68','XHH*')]('@');}}};if(process['env'][_0x5084('‫69','70%B')]&&process['env'][_0x5084('‮6a','M&ax')]['indexOf']('\x0a')>-0x1){app_soy_jjy_data=process['env']['soy_jjy_data'][_0x5084('‮6b','D11Q')]('\x0a');}else if(process['env'][_0x5084('‫6c','#&7f')]&&_0x459367[_0x5084('‮6d','Blg]')](process[_0x5084('‫6e','R30V')][_0x5084('‮6f','(iVc')]['indexOf']('#'),-0x1)){app_soy_jjy_data=process[_0x5084('‮70','6pv[')][_0x5084('‫71','M5r9')][_0x5084('‮72','WMNM')]('#');}else if(process[_0x5084('‮73','ICyW')][_0x5084('‫74','IoL9')]&&_0x459367['gNsXz'](process[_0x5084('‫75','M&ax')][_0x5084('‫76','yx)s')]['indexOf']('@'),-0x1)){app_soy_jjy_data=process['env']['soy_jjy_data']['split']('@');}else{if(_0x459367[_0x5084('‫77','(iVc')](_0x459367[_0x5084('‫78','vPv7')],_0x459367[_0x5084('‮79','@opR')])){CryptoJs=$[_0x5084('‫7a','M&ax')]()?_0x459367['stsmz'](require,_0x459367[_0x5084('‫7b','mDpy')]):'';}else{app_soy_jjy_data=process['env'][_0x5084('‫7c','O63^')][_0x5084('‮7d','EOVh')]();}};console['log'](_0x5084('‮7e','#&7f')+TG_ID+'|MAC：'+mac+_0x5084('‫7f','&BEs')+IP_address);if(!r_ip){if('LOivr'===_0x5084('‮80','(iVc')){var _0x7ed57=_0x5084('‮81','U^xU')[_0x5084('‫3c','P5X9')]('|'),_0x1a730e=0x0;while(!![]){switch(_0x7ed57[_0x1a730e++]){case'0':var _0x47eea5=CryptoJs['AES'][_0x5084('‮82','#&7f')](_0x164c2d,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‮83','yx)s')][_0x5084('‮84','i3^y')],'padding':CryptoJs['pad'][_0x5084('‮85','yx)s')]});continue;case'1':var _0x164c2d=CryptoJs['enc'][_0x5084('‮86','XAq8')][_0x5084('‫87','O63^')](_0x1c11a3);continue;case'2':reg_mac=_0x47eea5['toString'](CryptoJs['enc']['Utf8']);continue;case'3':var _0x1c11a3=CryptoJs['enc'][_0x5084('‫88','wab]')][_0x5084('‫89','(P)x')](r_mac);continue;case'4':console[_0x5084('‮8a','c][z')](_0x5084('‮8b','Blg]')+TG_ID+'|MAC：'+reg_mac+_0x5084('‫8c','M5r9'));continue;}break;}}else{IP_address=data;}}else if(!r_mac){var _0x34935c='4|3|2|0|1'['split']('|'),_0x295a1c=0x0;while(!![]){switch(_0x34935c[_0x295a1c++]){case'0':reg_ip=_0x47eea5[_0x5084('‫8d','sU*b')](CryptoJs[_0x5084('‫8e','@opR')][_0x5084('‮8f','0s8[')]);continue;case'1':console[_0x5084('‮90','ICyW')](_0x5084('‮91','ytVX')+TG_ID+_0x5084('‮92','R30V')+reg_ip);continue;case'2':var _0x47eea5=CryptoJs[_0x5084('‮93','D11Q')][_0x5084('‫94','(P)x')](_0x164c2d,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs[_0x5084('‮95','RMpO')]['Pkcs7']});continue;case'3':var _0x164c2d=CryptoJs['enc'][_0x5084('‮96',']&I$')][_0x5084('‫97','mDpy')](_0x1c11a3);continue;case'4':var _0x1c11a3=CryptoJs['enc'][_0x5084('‮98','Blg]')]['parse'](r_ip);continue;}break;}}else if(_0x459367[_0x5084('‫99','6pv[')](!r_mac,!r_ip)){console[_0x5084('‮9a',']&I$')](_0x5084('‮9b','#&7f')+TG_ID+'|MAC：无|IP：无');}else{if(_0x459367[_0x5084('‫9c','WMNM')]('lVkJj',_0x459367[_0x5084('‮9d','6pv[')])){var _0x354166=_0x5084('‫9e','LKw&')[_0x5084('‮9f','M5r9')]('|'),_0x12dc20=0x0;while(!![]){switch(_0x354166[_0x12dc20++]){case'0':var _0x1c11a3=CryptoJs['enc'][_0x5084('‮a0','M&ax')][_0x5084('‮a1','b5]k')](r_ip);continue;case'1':var _0x47eea5=CryptoJs['AES']['decrypt'](_0x164c2d,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‮a2','vY[L')][_0x5084('‫a3','vPv7')],'padding':CryptoJs[_0x5084('‮a4','adX0')][_0x5084('‮a5','IoL9')]});continue;case'2':reg_mac=_0x47eea5['toString'](CryptoJs[_0x5084('‮a6','XAq8')][_0x5084('‮a7','i3^y')]);continue;case'3':var _0x164c2d=CryptoJs[_0x5084('‮a8','ju#(')]['Base64'][_0x5084('‮a9','JmA1')](_0x1c11a3);continue;case'4':console[_0x5084('‮aa','sU*b')](_0x5084('‫ab','(iVc')+TG_ID+'|MAC：'+reg_mac+'|IP：'+reg_ip);continue;case'5':var _0x47eea5=CryptoJs[_0x5084('‮ac','c][z')]['decrypt'](_0x164c2d,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‮42','c][z')]['CBC'],'padding':CryptoJs[_0x5084('‮ad','b5]k')][_0x5084('‫ae','ICyW')]});continue;case'6':reg_ip=_0x47eea5['toString'](CryptoJs[_0x5084('‫af','c][z')]['Utf8']);continue;case'7':var _0x164c2d=CryptoJs[_0x5084('‮b0','qT][')]['Base64'][_0x5084('‮b1','4F^L')](_0x1c11a3);continue;case'8':var _0x1c11a3=CryptoJs['enc'][_0x5084('‫b2','b5]k')]['parse'](r_mac);continue;}break;}}else{console[_0x5084('‮90','ICyW')]('\x0a['+TG_ID+_0x5084('‫b3','C#[$')+error);subTitle+='\x0a['+TG_ID+_0x5084('‮b4','IoL9')+error;}}user_num=app_soy_jjy_data[_0x5084('‮b5','ytVX')];console['log'](_0x5084('‮b6','WMNM')+new Date(_0x459367[_0x5084('‫b7','wab]')](new Date()[_0x5084('‮b8','z^$k')](),_0x459367[_0x5084('‫b9','XHH*')](_0x459367[_0x5084('‫ba','&BEs')](new Date()[_0x5084('‮bb','RMpO')](),0x3c),0x3e8))+_0x459367[_0x5084('‫bc','i3^y')](0x8,0x3c)*0x3c*0x3e8)['toLocaleString']()+_0x5084('‫bd','z^$k'));await _0x459367[_0x5084('‮be','XHH*')](yyz_login);console['log'](_0x5084('‫bf','qT][')+user_num+'\x20个账号】===');subTitle='';if(yyz_d){for(i=0x0;_0x459367['rXnwx'](i,user_num);i++){var _0x21b7aa=_0x459367[_0x5084('‫c0','vPv7')][_0x5084('‮c1','70%B')]('|'),_0x3603b0=0x0;while(!![]){switch(_0x21b7aa[_0x3603b0++]){case'0':if(!jjy_UA){jjy_UA=_0x459367[_0x5084('‫c2','qT][')];}continue;case'1':await _0x459367[_0x5084('‮c3','XHH*')](implement);continue;case'2':$[_0x5084('‮c4','ICyW')]=i+0x1;continue;case'3':jjy_cookie=app_soy_jjy_data[i];continue;case'4':console[_0x5084('‮c5','C#[$')](_0x5084('‫c6','R30V')+$[_0x5084('‫c7','R30V')]+_0x5084('‫c8','M5r9'));continue;}break;}}if(notify){if(subTitle){await notify[_0x5084('‮c9','irr$')]($[_0x5084('‮ca','C#[$')],subTitle);}}}}else{let _0x408d5d=JSON[_0x5084('‫89','(P)x')](data);if(_0x459367['uYrPs'](_0x408d5d[_0x5084('‮cb','yx)s')],0xc8)){console[_0x5084('‫cc','0s8[')]('\x0a['+TG_ID+_0x5084('‫cd','vPv7')+_0x408d5d[_0x5084('‫ce','0s8[')]+'，重新跑一次脚本方可正常使用');return![];}else{console[_0x5084('‫cf','(iVc')]('\x0a['+TG_ID+_0x5084('‮d0','XHH*')+_0x408d5d[_0x5084('‮d1','qT][')]);subTitle+='\x0a['+TG_ID+_0x5084('‫d2','VgnO')+_0x408d5d['msg'];return![];}}}else{if(_0x459367['CYcfL'](_0x459367[_0x5084('‫d3','M5r9')],_0x459367['aLNBu'])){console[_0x5084('‮1f','vPv7')]('\x0a['+TG_ID+_0x5084('‮d4','m$(a')+error);subTitle+='\x0a['+TG_ID+_0x5084('‮d5','ju#(')+error;}else{console['log'](_0x5084('‫d6','ytVX'));return;}}})()[_0x5084('‮d7','JmA1')](_0x4b7efe=>$[_0x5084('‫d8','XAq8')](_0x4b7efe))[_0x5084('‫d9','Blg]')](()=>$['done']());async function implement(){var _0x5a749f={'sQiRh':function(_0x3e9171){return _0x3e9171();}};await _0x5a749f['sQiRh'](adventures);}async function sign(){var _0x28f322={'TQJTD':function(_0x535861,_0x57efa3){return _0x535861===_0x57efa3;},'BXpIF':_0x5084('‮da','0s8['),'lRrGO':_0x5084('‮db','R30V'),'sQYts':function(_0x4d67b3,_0x4c2968){return _0x4d67b3(_0x4c2968);},'LDBIT':_0x5084('‮dc','LKw&'),'QFRpA':_0x5084('‮dd','JmA1'),'dPUhw':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20SKW-A0\x20Build/SKYW2103030CN00MQ5;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/3211\x20MMWEBSDK/20211202\x20Mobile\x20Safari/537.36\x20MMWEBID/7499\x20MicroMessenger/8.0.18.2060(0x28001257)\x20Process/toolsmp\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64','Qsayl':_0x5084('‮de','vbeF'),'VLFCp':_0x5084('‫df','U^xU'),'BPXyx':_0x5084('‮e0','(iVc'),'pVkVQ':_0x5084('‮e1','#&7f')};await _0x28f322[_0x5084('‫e2','4F^L')](axios,{'url':_0x5084('‫e3','XHH*'),'headers':{'Host':_0x5084('‫e4','O63^'),'Connection':_0x28f322[_0x5084('‫e5','pcTy')],'Content-Length':0x0,'Accept':_0x28f322['QFRpA'],'User-Agent':_0x28f322['dPUhw'],'X-Requested-With':_0x5084('‫e6','irr$'),'Origin':_0x28f322['Qsayl'],'Referer':'http://www.esalewx.com/2018/sign/2927','Accept-Encoding':_0x28f322['VLFCp'],'Accept-Language':_0x28f322[_0x5084('‮e7','adX0')],'Cookie':connect_sid+jjy_cookie},'method':_0x28f322[_0x5084('‫e8','ytVX')],'data':''})[_0x5084('‮e9','vY[L')](function(_0x341e5b){if(_0x28f322[_0x5084('‮ea','&BEs')](_0x28f322[_0x5084('‫eb','@Ek@')],_0x28f322[_0x5084('‫ec','vbeF')])){console[_0x5084('‫cf','(iVc')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x5084('‫ed','0s8[')]+'\x20签到】:\x20返回\x20'+_0x341e5b);subTitle+='\x0a【'+Tips+_0x5084('‫ee','70%B')+$[_0x5084('‮ef','(P)x')]+_0x5084('‮f0','M5r9')+_0x341e5b;}else{connect_sid=result['msg'];yyz_d=!![];}})[_0x5084('‫f1','JmA1')](function(_0x20714b){let _0x1af13f=JSON[_0x5084('‫f2','Blg]')](_0x20714b[_0x5084('‮f3','vPv7')]);if(_0x1af13f[_0x5084('‮f4','ju#(')]){if(_0x28f322['lRrGO']!==_0x28f322['lRrGO']){console[_0x5084('‮f5','m$(a')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+_0x5084('‫f6','LKw&');return![];}else{console['log']('【'+Tips+_0x5084('‮f7','irr$')+$[_0x5084('‮ef','(P)x')]+_0x5084('‫f8','EOVh'));subTitle+='\x0a【'+Tips+_0x5084('‫f9','vY[L')+$[_0x5084('‫fa','C#[$')]+_0x5084('‮fb','P5X9');}}else{console['log']('【'+Tips+_0x5084('‫fc','(P)x')+$[_0x5084('‫fd','yx)s')]+_0x5084('‫fe','vbeF'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5084('‮ff','b5]k')]+_0x5084('‫100','(iVc');}});}function adventures(){var _0x875eb0={'WGUfN':function(_0x28b22f,_0x2f2775){return _0x28b22f+_0x2f2775;},'oNfeF':function(_0x434522,_0x3a3aa1){return _0x434522<_0x3a3aa1;},'SbLmz':function(_0x3922fc,_0x2935df){return _0x3922fc+_0x2935df;},'jlQGm':function(_0x597243,_0x5c6f3c){return _0x597243<_0x5c6f3c;},'FWbaR':function(_0x2e1478,_0x23d12e){return _0x2e1478+_0x23d12e;},'qvPtv':_0x5084('‫101','vY[L'),'AZTHR':function(_0x16af8b,_0x485429){return _0x16af8b!==_0x485429;},'DdPxg':'NpaYW','hbYgY':_0x5084('‮102','4F^L'),'nwTbW':'keep-alive','iPkic':_0x5084('‮103','@Ek@'),'vgxwH':_0x5084('‮104','M5r9'),'VVlab':_0x5084('‫105','z^$k'),'gvNFy':_0x5084('‮106','6pv['),'kazwh':_0x5084('‮107','b5]k'),'dHfuq':_0x5084('‮108','M5r9')};let _0x518991={'url':_0x5084('‮109','sU*b'),'headers':{'Host':_0x875eb0[_0x5084('‮10a','P5X9')],'Connection':_0x875eb0[_0x5084('‫10b','#&7f')],'Content-Length':0x9,'Accept':_0x875eb0[_0x5084('‮10c','C#[$')],'X-Requested-With':_0x875eb0[_0x5084('‮10d','XHH*')],'User-Agent':_0x5084('‮10e','6pv['),'Content-Type':_0x5084('‫10f','yx)s'),'Origin':_0x5084('‮110','VgnO'),'Referer':_0x875eb0[_0x5084('‮111','qT][')],'Accept-Encoding':_0x875eb0[_0x5084('‮112','O63^')],'Accept-Language':_0x875eb0[_0x5084('‫113','O63^')],'Cookie':_0x875eb0[_0x5084('‫114','R30V')](connect_sid,jjy_cookie)},'body':_0x875eb0[_0x5084('‫115','pcTy')]};return new Promise((_0x52e003,_0x10a2d0)=>{var _0x650341={'GFXou':function(_0x2a1879,_0x4b2f0a){return _0x875eb0[_0x5084('‫116','sU*b')](_0x2a1879,_0x4b2f0a);},'rCJKu':function(_0x5212fe,_0x55b659){return _0x875eb0[_0x5084('‫117','D11Q')](_0x5212fe,_0x55b659);},'Qnfkl':function(_0x25c4b0,_0x9540bc){return _0x875eb0[_0x5084('‫118','&BEs')](_0x25c4b0,_0x9540bc);},'kJmMJ':function(_0x35c38b,_0x528ec7){return _0x35c38b+_0x528ec7;},'RIRJn':function(_0x1d14c2,_0x4b3ac1){return _0x875eb0[_0x5084('‫119','z^$k')](_0x1d14c2,_0x4b3ac1);},'iJZRH':function(_0x320b3b,_0x3cce2b){return _0x320b3b+_0x3cce2b;},'HFyCG':function(_0x30b57f,_0x1e34d4){return _0x875eb0[_0x5084('‮11a','6pv[')](_0x30b57f,_0x1e34d4);},'OJwth':function(_0x286d10,_0x31b29d){return _0x875eb0[_0x5084('‫11b','70%B')](_0x286d10,_0x31b29d);},'UcKFF':function(_0x34d9d1,_0x2390c7){return _0x34d9d1===_0x2390c7;},'hWmhp':_0x875eb0[_0x5084('‮11c','4F^L')],'qvbpx':function(_0x3cd341,_0x39318a){return _0x875eb0[_0x5084('‮11d','O63^')](_0x3cd341,_0x39318a);},'Slyjw':_0x875eb0['DdPxg'],'ZYoHD':_0x5084('‫11e','P5X9'),'gRLvO':function(_0x2a343){return _0x2a343();}};$[_0x5084('‫11f','M5r9')](_0x518991,async(_0x4540d8,_0x281469,_0x452f7c)=>{try{if(_0x4540d8){if(_0x650341[_0x5084('‫120','RMpO')]('HCHnV',_0x650341[_0x5084('‫121','z^$k')])){var _0xbdd24c=new Date(timestamp*0x3e8);var _0x58ebca=_0x650341[_0x5084('‮122','Blg]')](_0xbdd24c[_0x5084('‮123','R30V')](),'-');var _0x54d56c=(_0x650341['rCJKu'](_0x650341[_0x5084('‫124','b5]k')](_0xbdd24c[_0x5084('‫125','pqFB')](),0x1),0xa)?_0x650341['Qnfkl']('0',_0x650341['Qnfkl'](_0xbdd24c['getMonth'](),0x1)):_0x650341[_0x5084('‫126','i3^y')](_0xbdd24c[_0x5084('‫127','RMpO')](),0x1))+'-';var _0x1fcdad=_0x650341[_0x5084('‫126','i3^y')](_0xbdd24c[_0x5084('‫128','wab]')](),'\x20');var _0x32a703=_0x650341[_0x5084('‮129','D11Q')](_0xbdd24c[_0x5084('‫12a','O63^')](),':');var _0x58a250=_0x650341['iJZRH'](_0x650341[_0x5084('‫12b','ytVX')](_0xbdd24c['getMinutes'](),0xa)?'0'+_0xbdd24c[_0x5084('‫12c','VgnO')]():_0xbdd24c['getMinutes'](),':');var _0x1cc2f9=_0xbdd24c[_0x5084('‫12d','m$(a')]();let _0x3e53f4=_0x650341[_0x5084('‫12e','pqFB')](_0x650341[_0x5084('‫12f','@Ek@')](_0x650341[_0x5084('‫130','c][z')](_0x650341[_0x5084('‮131','&BEs')](_0x58ebca,_0x54d56c),_0x1fcdad)+_0x32a703,_0x58a250),_0x1cc2f9);return _0x650341[_0x5084('‮132','JmA1')](_0x58ebca+_0x54d56c+_0x1fcdad,_0x32a703)+_0x58a250+_0x1cc2f9;}else{console['log']('\x0a【'+Tips+_0x5084('‫133','M&ax')+$[_0x5084('‮134','#&7f')]+_0x5084('‮135','WMNM')+_0x4540d8);}}else{if(_0x650341[_0x5084('‮136','O63^')](_0x650341[_0x5084('‫137','adX0')],_0x650341[_0x5084('‮138','&BEs')])){console[_0x5084('‮139','(P)x')](_0x452f7c);}else{console[_0x5084('‮90','ICyW')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result['msg']+_0x5084('‮13a','yx)s'));return![];}}}catch(_0x4acc0b){console[_0x5084('‫13b','vY[L')](_0x4acc0b,_0x281469);}finally{_0x650341[_0x5084('‫13c','z^$k')](_0x52e003);}});});}function formatDate(){var _0x13ca60={'dGIaQ':function(_0x1b8f1d,_0x4aba61){return _0x1b8f1d+_0x4aba61;},'lxnsn':function(_0x377d66,_0x35486f){return _0x377d66<_0x35486f;},'OVnuO':function(_0x2ba16c,_0x3a7321){return _0x2ba16c+_0x3a7321;},'occnk':function(_0x3a7a6f,_0x587aff){return _0x3a7a6f<_0x587aff;}};let _0x2b1c7e=new Date();let _0x159808=_0x2b1c7e[_0x5084('‮13d','JmA1')]();let _0x20ca32=_0x13ca60['dGIaQ'](_0x2b1c7e['getMonth'](),0x1);let _0x399a0c=_0x2b1c7e[_0x5084('‮13e','@opR')]();_0x20ca32=_0x13ca60[_0x5084('‮13f','P5X9')](_0x20ca32,0xa)?_0x13ca60[_0x5084('‮140','(P)x')]('0',_0x20ca32):_0x20ca32;_0x399a0c=_0x13ca60[_0x5084('‫141','yx)s')](_0x399a0c,0xa)?_0x13ca60[_0x5084('‮142','XAq8')]('0',_0x399a0c):_0x399a0c;return _0x159808+'/'+_0x20ca32+'/'+_0x399a0c;};async function yyz_login(){var _0x1a7e80={'Upnqu':function(_0x5da627,_0x4a062a){return _0x5da627===_0x4a062a;},'IBiXj':function(_0x28d5c5,_0x408311){return _0x28d5c5!==_0x408311;},'HwsqM':'MFZta','EcmIa':_0x5084('‮143','irr$'),'jlzQC':function(_0x568938,_0x498ab4){return _0x568938==_0x498ab4;},'ExzHH':function(_0x2a264e,_0x154413){return _0x2a264e!==_0x154413;},'gLsAC':_0x5084('‮144','70%B'),'ZjwGZ':function(_0x115381,_0x40c5f5){return _0x115381(_0x40c5f5);},'pQecl':function(_0x5caf74,_0xee566e){return _0x5caf74(_0xee566e);},'hgtjJ':function(_0x47066a){return _0x47066a();},'KoPeA':'CIGRN','oSIuR':_0x5084('‫145','ICyW'),'MyBOw':_0x5084('‫146','D11Q'),'BuypC':function(_0x412d64){return _0x412d64();},'PoCbI':function(_0x5414cd,_0x343295){return _0x5414cd+_0x343295;},'bcpqE':'&sign=','GSpXr':_0x5084('‫147','#&7f')};var _0x26d529=Math[_0x5084('‮148','irr$')](Date[_0x5084('‮149','&BEs')]()/0x3e8);var _0x57d690=CryptoJs[_0x5084('‮14a','WMNM')](''+TG_ID+mac+os[_0x5084('‮14b','JmA1')]()+YZ)['toString']();var _0x5ac4bf=_0x5084('‮14c','c][z')+TG_ID+_0x5084('‫14d','R30V')+_0x57d690+'&t='+_0x26d529;var _0x430d78=CryptoJs[_0x5084('‮14e','Blg]')](_0x1a7e80['PoCbI'](_0x5ac4bf,'&')+appid)[_0x5084('‫14f','LKw&')]();_0x5ac4bf=_0x1a7e80['PoCbI'](_0x5ac4bf+_0x1a7e80[_0x5084('‮150','irr$')],_0x430d78);let _0x3f3c19={'url':serverUrl+_0x5084('‮151','vbeF'),'headers':{'user-agent':_0x1a7e80['GSpXr']},'body':_0x5ac4bf};return new Promise((_0xdf23f2,_0x448f00)=>{var _0xaea964={'ZDBqi':function(_0x3b469c,_0x597c9e){return _0x1a7e80[_0x5084('‮152','pcTy')](_0x3b469c,_0x597c9e);},'AEuxg':function(_0x5a1011){return _0x1a7e80[_0x5084('‫153','sU*b')](_0x5a1011);}};$['post'](_0x3f3c19,async(_0x2aad72,_0x27c772,_0x59e2cd)=>{try{if(_0x1a7e80[_0x5084('‫154','ICyW')]('iFCwK',_0x5084('‮155','D11Q'))){if(_0x2aad72){if(_0x1a7e80['IBiXj'](_0x1a7e80[_0x5084('‫156','yx)s')],_0x1a7e80['EcmIa'])){console[_0x5084('‫157','@Ek@')]('\x0a['+TG_ID+_0x5084('‮158','vY[L')+_0x2aad72);subTitle+='\x0a['+TG_ID+_0x5084('‫159','@Ek@')+_0x2aad72;}else{os=$[_0x5084('‮15a','#&7f')]()?_0xaea964[_0x5084('‮15b','Blg]')](require,'os'):'';}}else{let _0x157797=JSON['parse'](_0x59e2cd);if(_0x1a7e80['jlzQC'](_0x157797[_0x5084('‮15c','70%B')],0xc8)){if(_0x1a7e80[_0x5084('‫15d','JmA1')](_0x1a7e80['gLsAC'],'ZlTNz')){let _0x5c4685=_0x1a7e80[_0x5084('‫15e','z^$k')](Format_time,_0x157797[_0x5084('‮15f','EOVh')][_0x5084('‮160','P5X9')][_0x5084('‮161','(iVc')]);console['log']('\x0a['+TG_ID+_0x5084('‮162','D11Q')+_0x5c4685);await _0x1a7e80['pQecl'](get_vip,_0x157797[_0x5084('‫163','ytVX')][_0x5084('‮164','ICyW')]);}else{_0xaea964[_0x5084('‫165','Blg]')](_0xdf23f2);}}else if(_0x157797[_0x5084('‫166','ytVX')]==0x71){if(_0x1a7e80[_0x5084('‮167','(P)x')](_0x5084('‮168','pcTy'),'onrgP')){await _0x1a7e80[_0x5084('‫169','R30V')](yyz_user_reg);}else{macs=fs[_0x5084('‮16a','pcTy')](fn)['toString']()[_0x5084('‮16b','4F^L')]();}}else{console[_0x5084('‫16c','@opR')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x157797[_0x5084('‫16d','ICyW')]);subTitle+='\x0a['+TG_ID+_0x5084('‫16e','&BEs')+_0x157797['msg'];return![];}}}else{console[_0x5084('‫16f','qT][')](_0x59e2cd);}}catch(_0x96bb9d){if(_0x1a7e80[_0x5084('‫170','b5]k')](_0x1a7e80[_0x5084('‮171','yx)s')],_0x1a7e80[_0x5084('‮172','M&ax')])){_0xdf23f2();}else{console[_0x5084('‫173','b5]k')](_0x96bb9d);}}finally{if(_0x5084('‫174','(iVc')===_0x1a7e80['MyBOw']){app_soy_jjy_data=process[_0x5084('‫175','z^$k')]['soy_jjy_data'][_0x5084('‫176','i3^y')]('\x0a');}else{_0x1a7e80['BuypC'](_0xdf23f2);}}});});}async function get_vip(_0x57dee7){var _0x1ac26b={'OkJRL':_0x5084('‮177','pcTy'),'HemjM':function(_0x2b864c,_0x1fabd2){return _0x2b864c===_0x1fabd2;},'cPPmm':_0x5084('‫178','i3^y'),'smjRj':'TKTZu','CevrI':function(_0x531374,_0x1b16cc){return _0x531374==_0x1b16cc;},'VhibS':function(_0x1aa2da,_0x28a2ee){return _0x1aa2da!==_0x28a2ee;},'UXUfM':_0x5084('‫179','JmA1'),'AbnCT':'XReAv','HKZBT':_0x5084('‫17a','VgnO'),'fknGA':'pfCXa','AFifO':_0x5084('‮17b','XHH*'),'TRymx':function(_0x3a1556,_0x34543d){return _0x3a1556!==_0x34543d;},'tlhes':_0x5084('‫17c','XAq8'),'DAqSt':function(_0x3be354,_0x6426af){return _0x3be354===_0x6426af;},'BkmlC':_0x5084('‫17d','z^$k'),'GpdnN':_0x5084('‫17e','XAq8'),'WaoMU':function(_0x197461){return _0x197461();},'qKbtm':_0x5084('‮17f','#&7f'),'qWNbX':function(_0x151fd4,_0x4f637a){return _0x151fd4===_0x4f637a;},'IVrIo':function(_0x336789,_0x1612eb){return _0x336789+_0x1612eb;},'IfuJB':function(_0x10e885,_0x59e54e){return _0x10e885+_0x59e54e;},'sdxjJ':function(_0x3e477f,_0x4b9547){return _0x3e477f+_0x4b9547;},'HIsnn':_0x5084('‮180','D11Q')};var _0x2b028b=Math[_0x5084('‮181','@opR')](Date[_0x5084('‮182','i3^y')]()/0x3e8);var _0x58a166=_0x5084('‫183','XAq8')+user_num+_0x5084('‫184','RMpO')+_0x57dee7+_0x5084('‮185','C#[$')+_0x2b028b;var _0x5d76f6=CryptoJs['MD5'](_0x1ac26b[_0x5084('‫186','6pv[')](_0x1ac26b['IVrIo'](_0x58a166,'&'),appid))[_0x5084('‫187','qT][')]();_0x58a166=_0x1ac26b[_0x5084('‮188','EOVh')](_0x1ac26b['sdxjJ'](_0x58a166,_0x1ac26b[_0x5084('‮189','i3^y')]),_0x5d76f6);let _0x1e7731={'url':serverUrl+'get_vip','headers':{'user-agent':_0x1ac26b[_0x5084('‫18a','pqFB')]},'body':_0x58a166};return new Promise((_0x5345ff,_0x284f88)=>{var _0x48f597={'dPWtf':_0x1ac26b[_0x5084('‮18b','mDpy')]};if(_0x1ac26b[_0x5084('‫18c','RMpO')](_0x5084('‫18d','yx)s'),_0x5084('‮18e','qT]['))){$['post'](_0x1e7731,async(_0xd64880,_0x5d46fa,_0x4a2993)=>{var _0x33e314={'uwszZ':_0x1ac26b[_0x5084('‮18f','(P)x')]};try{if(_0xd64880){if(_0x1ac26b[_0x5084('‫190','qT][')](_0x1ac26b[_0x5084('‮191','M5r9')],_0x1ac26b[_0x5084('‫192','@opR')])){let _0x1f04d8=JSON['parse'](_0x4a2993['data']);if(_0x1f04d8['signFlag']){console[_0x5084('‫193','ytVX')]('【'+Tips+_0x5084('‮194','(iVc')+$['index']+_0x5084('‫195','O63^'));subTitle+='\x0a【'+Tips+_0x5084('‫196','XAq8')+$[_0x5084('‮197','VgnO')]+_0x5084('‫198','m$(a');}else{console[_0x5084('‮199','pcTy')]('【'+Tips+_0x5084('‮19a',']&I$')+$['index']+_0x5084('‮19b','pcTy'));subTitle+='\x0a【'+Tips+_0x5084('‮194','(iVc')+$['index']+'\x20签到】:\x20失败,可能今日已签到';}}else{console[_0x5084('‮f5','m$(a')]('\x0a['+TG_ID+_0x5084('‫19c','ytVX')+_0xd64880);subTitle+='\x0a['+TG_ID+_0x5084('‫19d','Blg]')+_0xd64880;}}else{let _0x4b7b38=JSON[_0x5084('‫19e','70%B')](_0x4a2993);if(_0x1ac26b[_0x5084('‮19f','JmA1')](_0x4b7b38[_0x5084('‮1a0','6pv[')],0xc8)){if(_0x1ac26b[_0x5084('‫1a1','EOVh')](_0x1ac26b[_0x5084('‮1a2','ICyW')],_0x1ac26b[_0x5084('‮1a3','vbeF')])){connect_sid=_0x4b7b38[_0x5084('‫1a4','XAq8')];yyz_d=!![];}else{jjy_UA=_0x33e314['uwszZ'];}}else if(_0x1ac26b[_0x5084('‫1a5','RMpO')](_0x4b7b38[_0x5084('‮1a6','D11Q')],0xca)){console['log']('\x0a['+TG_ID+_0x5084('‫1a7','z^$k')+_0x4b7b38['msg']);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x4b7b38[_0x5084('‫1a8','M5r9')];}else if(_0x1ac26b['CevrI'](_0x4b7b38[_0x5084('‮1a9','P5X9')],0xcd)){if(_0x1ac26b['HemjM'](_0x1ac26b['HKZBT'],_0x1ac26b[_0x5084('‫1aa','4F^L')])){console[_0x5084('‮f5','m$(a')]('【'+Tips+'提示---账号\x20'+$[_0x5084('‮1ab','M&ax')]+'\x20签到】:\x20成功');subTitle+='\x0a【'+Tips+_0x5084('‫1ac','yx)s')+$['index']+_0x5084('‮1ad','D11Q');}else{console[_0x5084('‮1ae','i3^y')]('\x0a['+TG_ID+_0x5084('‮1af','b5]k')+_0x4b7b38['msg']);subTitle+='\x0a['+TG_ID+_0x5084('‫1b0','pqFB')+_0x4b7b38[_0x5084('‫1b1','RMpO')];}}else{if(_0x1ac26b[_0x5084('‮1b2','VgnO')]===_0x1ac26b['AFifO']){if(!yyz_Kami){console[_0x5084('‮aa','sU*b')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+_0x5084('‫f6','LKw&');return![];}else{if(_0x1ac26b[_0x5084('‮1b3','qT][')](_0x5084('‮1b4','JmA1'),_0x1ac26b[_0x5084('‫1b5','6pv[')])){var _0x5093dc=_0x48f597[_0x5084('‫1b6','yx)s')]['split']('|'),_0x28b1c6=0x0;while(!![]){switch(_0x5093dc[_0x28b1c6++]){case'0':var _0x273034=CryptoJs[_0x5084('‮1b7','vPv7')]['decrypt'](_0x47288d,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs[_0x5084('‫1b8','qT][')][_0x5084('‮1b9','WMNM')]});continue;case'1':console[_0x5084('‫1ba','P5X9')](_0x5084('‫1bb','P5X9')+TG_ID+_0x5084('‫1bc','vPv7')+reg_mac+'|IP：'+reg_ip);continue;case'2':var _0x35e825=CryptoJs['enc'][_0x5084('‮1bd','m$(a')][_0x5084('‫1be','P5X9')](r_mac);continue;case'3':var _0x47288d=CryptoJs[_0x5084('‮1bf','RMpO')][_0x5084('‫1c0','ICyW')][_0x5084('‫1c1','c][z')](_0x35e825);continue;case'4':reg_mac=_0x273034[_0x5084('‫14f','LKw&')](CryptoJs[_0x5084('‫1c2','yx)s')][_0x5084('‫1c3','&BEs')]);continue;case'5':var _0x47288d=CryptoJs[_0x5084('‫8','vY[L')][_0x5084('‫1c4','c][z')][_0x5084('‫1c5','pqFB')](_0x35e825);continue;case'6':var _0x273034=CryptoJs[_0x5084('‮1c6','ju#(')][_0x5084('‫1c7','ytVX')](_0x47288d,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‮1c8','Blg]')][_0x5084('‫1c9','RMpO')],'padding':CryptoJs[_0x5084('‮1ca','vPv7')][_0x5084('‫1cb','M&ax')]});continue;case'7':reg_ip=_0x273034[_0x5084('‮1cc','@opR')](CryptoJs['enc'][_0x5084('‫1cd','(iVc')]);continue;case'8':var _0x35e825=CryptoJs[_0x5084('‮1ce','m$(a')][_0x5084('‫1cf','D11Q')]['parse'](r_ip);continue;}break;}}else{await card(_0x57dee7);}}}else{console[_0x5084('‮1d0','Blg]')](e);}}}}catch(_0x364a9c){if(_0x1ac26b[_0x5084('‫1d1','pcTy')]('DDUFB','DDUFB')){console[_0x5084('‮1d2','pqFB')](_0x364a9c);}else{app_soy_jjy_data=process['env']['soy_jjy_data'][_0x5084('‫1d3','#&7f')]('#');}}finally{if(_0x1ac26b[_0x5084('‮1d4','irr$')](_0x1ac26b[_0x5084('‫1d5','U^xU')],_0x1ac26b[_0x5084('‫1d6','ytVX')])){console[_0x5084('‫1ba','P5X9')]('\x0a['+TG_ID+_0x5084('‮1d7','m$(a')+_0xd64880);subTitle+='\x0a['+TG_ID+_0x5084('‫1d8','XAq8')+_0xd64880;}else{_0x1ac26b['WaoMU'](_0x5345ff);}}});}else{_0x5345ff();}});}async function yyz_user_reg(){var _0xf75a09={'uxhbC':function(_0x17ba5a,_0x8f2201){return _0x17ba5a===_0x8f2201;},'qagej':'EuZtr','HYvGO':_0x5084('‫1d9','Blg]'),'CowXa':function(_0x315ff5){return _0x315ff5();},'bQtkb':function(_0x46e73e,_0x2c52b4){return _0x46e73e==_0x2c52b4;},'GAVQg':function(_0x3b895b,_0x32f2de){return _0x3b895b===_0x32f2de;},'mwAka':_0x5084('‮1da','ICyW'),'CRYWP':function(_0x314c5f){return _0x314c5f();},'mQRhU':'4|1|0|2|3','EKcSu':function(_0x25575c,_0xdb0388){return _0x25575c!==_0xdb0388;},'Vwhwi':_0x5084('‮1db','i3^y'),'grMTK':function(_0x441406,_0x1261fd){return _0x441406&&_0x1261fd;},'Tpazg':function(_0x580200,_0x2bab0e){return _0x580200+_0x2bab0e;},'iFpRT':function(_0x44bc6f,_0x3eda4e){return _0x44bc6f+_0x3eda4e;},'SOeEX':'&sign='};if(_0xf75a09[_0x5084('‫1dc','mDpy')](!Tips,!YZ)){console[_0x5084('‫54','M&ax')](_0x5084('‫1dd','(iVc'));return![];}await yyz_getip();var _0x5bb1b7=Math[_0x5084('‫1de','pqFB')](Date[_0x5084('‮1df','YXfF')]()/0x3e8);var _0x54e0ab=CryptoJs['MD5'](''+TG_ID+mac+os[_0x5084('‮1e0','4F^L')]()+YZ)['toString']();var _0x152c71='user='+TG_ID+_0x5084('‫1e1','b5]k')+_0x54e0ab+_0x5084('‫1e2','O63^')+_0x5bb1b7;var _0x50d124=CryptoJs[_0x5084('‮1e3','LKw&')](_0xf75a09['Tpazg'](_0xf75a09[_0x5084('‮1e4','R30V')](_0x152c71,'&'),appid))[_0x5084('‮47','vY[L')]();_0x152c71=_0xf75a09['Tpazg'](_0xf75a09['iFpRT'](_0x152c71,_0xf75a09[_0x5084('‮1e5','@Ek@')]),_0x50d124);let _0x46b73d={'url':serverUrl+_0x5084('‮1e6','vbeF'),'headers':{'user-agent':_0x5084('‮1e7','4F^L')},'body':_0x152c71};return new Promise((_0x5d4703,_0x2e25f0)=>{var _0x4daa31={'zcwdH':_0xf75a09[_0x5084('‫1e8','pqFB')]};if(_0xf75a09[_0x5084('‫1e9','LKw&')](_0x5084('‫1ea','(iVc'),_0xf75a09['Vwhwi'])){var _0x15cdee=_0x4daa31[_0x5084('‮1eb','pcTy')]['split']('|'),_0x122162=0x0;while(!![]){switch(_0x15cdee[_0x122162++]){case'0':var _0x5614b0=CryptoJs[_0x5084('‫1ec','VgnO')][_0x5084('‮1ed','@opR')](_0x278782,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‮1ee','LKw&')][_0x5084('‫1ef','6pv[')],'padding':CryptoJs[_0x5084('‮1f0',']&I$')][_0x5084('‫1f1','RMpO')]});continue;case'1':var _0x278782=CryptoJs['enc'][_0x5084('‫1f2','(P)x')][_0x5084('‫1f3','z^$k')](_0x1a5d4f);continue;case'2':_0x54e0ab=_0x5614b0[_0x5084('‫1f4','m$(a')](CryptoJs['enc'][_0x5084('‮1f5','yx)s')]);continue;case'3':console[_0x5084('‮1f6','z^$k')](_0x5084('‫1f7','i3^y')+TG_ID+_0x5084('‫1bc','vPv7')+_0x54e0ab+_0x5084('‫1f8','WMNM'));continue;case'4':var _0x1a5d4f=CryptoJs[_0x5084('‮1f9','i3^y')][_0x5084('‮1fa','C#[$')]['parse'](r_mac);continue;}break;}}else{$[_0x5084('‮1fb','EOVh')](_0x46b73d,async(_0x98af29,_0x48c66e,_0x2a868d)=>{try{if(_0x98af29){console[_0x5084('‮139','(P)x')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x98af29);subTitle+='\x0a['+TG_ID+_0x5084('‮1fc','M&ax')+_0x98af29;}else{let _0x5e2bca=JSON[_0x5084('‮1fd','(iVc')](_0x2a868d);if(_0x5e2bca['code']==0xc8){let _0x10e3be=CryptoJs['enc'][_0x5084('‮1fe','YXfF')]['parse'](IP_address);let _0xaedf84=CryptoJs[_0x5084('‫1ff','ICyW')]['encrypt'](_0x10e3be,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x5084('‮200','adX0')],'padding':CryptoJs[_0x5084('‮201','@Ek@')][_0x5084('‮202','wab]')]});let _0x421716=_0xaedf84[_0x5084('‮203','pqFB')]['toString']()['toUpperCase']();_0x10e3be=CryptoJs['enc']['Utf8'][_0x5084('‫204','IoL9')](mac);let _0x44d501=CryptoJs['AES']['encrypt'](_0x10e3be,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5084('‫205','ICyW')]['CBC'],'padding':CryptoJs[_0x5084('‫206','Blg]')]['Pkcs7']});let _0x11c173=_0x44d501['ciphertext'][_0x5084('‫207','ju#(')]()[_0x5084('‮208','i3^y')]();try{if(_0xf75a09[_0x5084('‫209','D11Q')](_0xf75a09['qagej'],_0xf75a09['qagej'])){fs[_0x5084('‫20a','vY[L')](_0xf75a09['HYvGO'],_0x421716+'&'+_0x11c173);}else{console[_0x5084('‫20b','mDpy')](e,_0x48c66e);}}catch(_0xfa5640){}console[_0x5084('‫20c','IoL9')]('\x0a['+TG_ID+']:\x20注册成功:\x20IP=>'+IP_address+_0x5084('‫20d','JmA1')+mac);await _0xf75a09['CowXa'](yyz_login);}else if(_0xf75a09[_0x5084('‮20e','Blg]')](_0x5e2bca[_0x5084('‮1a0','6pv[')],0x75)){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x5e2bca['msg']+_0x5084('‫20f','@Ek@'));return![];}else{if(_0xf75a09['GAVQg']('iNVMH',_0xf75a09[_0x5084('‮210','&BEs')])){console[_0x5084('‫211','4F^L')]('【'+Tips+_0x5084('‫212','U^xU')+$[_0x5084('‫fd','yx)s')]+_0x5084('‫fe','vbeF'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x5084('‫213','VgnO');}else{console[_0x5084('‫cf','(iVc')]('\x0a['+TG_ID+_0x5084('‫214','b5]k')+_0x5e2bca['msg']);subTitle+='\x0a['+TG_ID+_0x5084('‮215','c][z')+_0x5e2bca['msg'];return![];}}}}catch(_0x5670ab){console[_0x5084('‫211','4F^L')](_0x5670ab);}finally{_0xf75a09[_0x5084('‫216','@Ek@')](_0x5d4703);}});}});}async function card(_0x392e6c){var _0x3d1255={'CeGHm':function(_0x3d10a2,_0x24181c){return _0x3d10a2(_0x24181c);},'uSZmf':function(_0x4252a5,_0x247c71){return _0x4252a5<_0x247c71;},'raWZU':'EMkpv','Iknbk':function(_0x582600,_0x497c75){return _0x582600!==_0x497c75;},'zremj':_0x5084('‫217','LKw&'),'oyeli':'tYxrh','Mpcrr':'dKRMp','ENORX':function(_0x4598df,_0xdf43de){return _0x4598df/_0xdf43de;},'uJWSS':function(_0x22bf9e,_0x583682){return _0x22bf9e+_0x583682;},'xeOSF':function(_0x1508d3,_0x2f4e85){return _0x1508d3+_0x2f4e85;},'bGcET':_0x5084('‫218','U^xU')};var _0x1a01b9=Math[_0x5084('‮181','@opR')](_0x3d1255['ENORX'](Date[_0x5084('‮219','yx)s')](),0x3e8));var _0x4c2f85=_0x5084('‫21a','z^$k')+_0x392e6c+_0x5084('‫21b','(P)x')+yyz_Kami+_0x5084('‮21c','i3^y')+_0x1a01b9;var _0x44d303=CryptoJs[_0x5084('‮21d','ytVX')](_0x3d1255['uJWSS'](_0x4c2f85+'&',appid))['toString']();_0x4c2f85=_0x3d1255[_0x5084('‮21e','LKw&')](_0x3d1255['xeOSF'](_0x4c2f85,'&sign='),_0x44d303);let _0x42bca6={'url':serverUrl+'card','headers':{'user-agent':_0x3d1255[_0x5084('‫21f','ju#(')]},'body':_0x4c2f85};return new Promise((_0x4c8972,_0xa12785)=>{var _0x2b4b5c={'MgdMH':function(_0x2104ae,_0x431687){return _0x3d1255['CeGHm'](_0x2104ae,_0x431687);},'KviuR':function(_0x19b856,_0x1e4277){return _0x3d1255[_0x5084('‮220','O63^')](_0x19b856,_0x1e4277);},'dqWRH':function(_0x3f244b,_0x3f484c){return _0x3f244b==_0x3f484c;},'Kwqtw':function(_0x29535d,_0x1cfd68){return _0x29535d===_0x1cfd68;},'QTovB':_0x3d1255[_0x5084('‫221','Blg]')],'EMTQa':function(_0x1a2221,_0x239346){return _0x3d1255['Iknbk'](_0x1a2221,_0x239346);},'kKFfW':_0x3d1255['zremj'],'OAgBi':_0x3d1255[_0x5084('‫222','#&7f')],'DoCFh':_0x3d1255['Mpcrr']};$[_0x5084('‫223','YXfF')](_0x42bca6,async(_0x9f6643,_0x2f09ed,_0x1e3217)=>{var _0x3eb323={'fZkyV':function(_0x435e47,_0x5c8eda){return _0x2b4b5c[_0x5084('‫224','C#[$')](_0x435e47,_0x5c8eda);},'KSSJG':function(_0x3545bd,_0x34640b){return _0x3545bd<_0x34640b;},'UIdNu':function(_0x509e1a,_0x55a065){return _0x509e1a+_0x55a065;}};try{if(_0x9f6643){console[_0x5084('‮225','70%B')]('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x9f6643);subTitle+='\x0a['+TG_ID+_0x5084('‫226','M5r9')+_0x9f6643;}else{let _0x3f50f2=JSON[_0x5084('‮a1','b5]k')](_0x1e3217);if(_0x2b4b5c['dqWRH'](_0x3f50f2[_0x5084('‮227','IoL9')],0xc8)){console[_0x5084('‫228','6pv[')]('\x0a['+TG_ID+_0x5084('‮229','U^xU')+_0x3f50f2['msg']+'，重新跑一次脚本方可正常使用');return![];}else{if(_0x2b4b5c[_0x5084('‫22a','O63^')](_0x2b4b5c[_0x5084('‫22b','70%B')],_0x2b4b5c[_0x5084('‫22c','ju#(')])){console[_0x5084('‫22d','WMNM')]('\x0a['+TG_ID+_0x5084('‮22e','irr$')+_0x3f50f2[_0x5084('‫22f','ju#(')]);subTitle+='\x0a['+TG_ID+_0x5084('‫230','c][z')+_0x3f50f2['msg'];return![];}else{console[_0x5084('‮90','ICyW')]('\x0a['+TG_ID+_0x5084('‮231','qT][')+_0x9f6643);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x9f6643;}}}}catch(_0x2d16c5){if(_0x2b4b5c['EMTQa'](_0x2b4b5c['kKFfW'],_0x5084('‫232','m$(a'))){let _0x2151bc=new Date();let _0x5a639a=_0x2151bc[_0x5084('‮123','R30V')]();let _0xa5671b=_0x2151bc[_0x5084('‫233','LKw&')]()+0x1;let _0x311cfe=_0x2151bc[_0x5084('‫234','Blg]')]();_0xa5671b=_0x3eb323[_0x5084('‮235','70%B')](_0xa5671b,0xa)?'0'+_0xa5671b:_0xa5671b;_0x311cfe=_0x3eb323[_0x5084('‫236','mDpy')](_0x311cfe,0xa)?_0x3eb323[_0x5084('‮237','z^$k')]('0',_0x311cfe):_0x311cfe;return _0x5a639a+'/'+_0xa5671b+'/'+_0x311cfe;}else{console['log'](_0x2d16c5);}}finally{if(_0x2b4b5c[_0x5084('‮238','VgnO')]===_0x2b4b5c[_0x5084('‫239','4F^L')]){axios=$[_0x5084('‮23a','vbeF')]()?_0x2b4b5c[_0x5084('‮23b','wab]')](require,_0x5084('‮23c','YXfF')):'';}else{_0x4c8972();}}});});}function yyz_getip(){var _0x15363b={'roZSW':_0x5084('‫23d','EOVh'),'VkdLU':function(_0x9283f2,_0x16be46){return _0x9283f2!==_0x16be46;},'aTDVe':_0x5084('‫23e','U^xU'),'RFPwv':_0x5084('‫23f','irr$'),'cEaXE':'AdHOl','NLRqm':function(_0x1601b8,_0x4ebb23){return _0x1601b8===_0x4ebb23;},'dafEg':_0x5084('‫240','ju#('),'tvTEQ':_0x5084('‫241','M&ax'),'ToZvM':_0x5084('‮242','IoL9')};let _0x498e19={'url':_0x5084('‮243','4F^L')};return new Promise((_0x96e6e8,_0x4b6519)=>{var _0x1a3ee9={'rYuWL':_0x15363b[_0x5084('‫244','LKw&')],'kEJqy':function(_0x148b43,_0x51d519){return _0x148b43==_0x51d519;}};$['get'](_0x498e19,async(_0x31b50e,_0x4fb580,_0xd79568)=>{var _0x5ba812={'cCdpO':function(_0xb63071){return _0xb63071();}};if(_0x5084('‮245','sU*b')!==_0x15363b[_0x5084('‫246','wab]')]){try{if(_0x15363b[_0x5084('‮247','P5X9')]('HzOfi',_0x15363b[_0x5084('‫248','VgnO')])){_0x5ba812[_0x5084('‫249','M5r9')](_0x96e6e8);}else{if(_0x31b50e){IP_address=_0x15363b[_0x5084('‫24a','0s8[')];}else{if(_0x15363b['cEaXE']!==_0x5084('‮24b','O63^')){IP_address=_0xd79568;}else{console['log']('\x0a['+TG_ID+_0x5084('‫24c','qT][')+result[_0x5084('‮24d',']&I$')]);subTitle+='\x0a['+TG_ID+_0x5084('‫24e','M5r9')+result['msg'];}}}}catch(_0x461d2b){if(_0x15363b[_0x5084('‮24f','IoL9')](_0x5084('‮250','#&7f'),_0x15363b[_0x5084('‫251','yx)s')])){IP_address=_0x15363b[_0x5084('‫252','vbeF')];console['log'](_0x461d2b,_0x4fb580);}else{console[_0x5084('‮c5','C#[$')](_0x5084('‮253','qT]['));return![];}}finally{if(_0x15363b[_0x5084('‮254','i3^y')](_0x15363b[_0x5084('‫255','yx)s')],_0x5084('‮256','VgnO'))){YZ=author[_0x5084('‫257','D11Q')](/作者TG_ID:(\S*)/)[0x1][_0x5084('‫258','YXfF')](/_/g,'><');}else{_0x96e6e8();}}}else{var _0x3fc139=path[_0x5084('‫259','R30V')](_0x1a3ee9['rYuWL'],dev,_0x5084('‮25a','6pv['));if(_0x1a3ee9[_0x5084('‫25b','70%B')](dev['substr'](0x0,0x3),_0x5084('‮25c','@Ek@'))&&fs[_0x5084('‮25d','EOVh')](_0x3fc139)){macs=fs[_0x5084('‫25e','M&ax')](_0x3fc139)[_0x5084('‮25f','D11Q')]()['trim']();};}});});}function Format_time(_0x6a6002){var _0x3a85ed={'whpqR':function(_0x5674ed,_0x171a88){return _0x5674ed*_0x171a88;},'ivnid':function(_0x4f2fec,_0x310980){return _0x4f2fec+_0x310980;},'sYvCf':function(_0xd7844f,_0x3a40c5){return _0xd7844f+_0x3a40c5;},'wwUzX':function(_0xf11316,_0x4b932b){return _0xf11316<_0x4b932b;},'bsycH':function(_0x14a321,_0x5ebb0b){return _0x14a321+_0x5ebb0b;},'TaiKl':function(_0x36cb42,_0x221b9a){return _0x36cb42+_0x221b9a;},'Iicqz':function(_0x2c9a70,_0x5effd3){return _0x2c9a70+_0x5effd3;},'lRjPI':function(_0x1a0958,_0x259959){return _0x1a0958+_0x259959;},'ruRKk':function(_0x58b47f,_0x5c9c49){return _0x58b47f+_0x5c9c49;},'QyDjy':function(_0x4a8e85,_0x7a7556){return _0x4a8e85+_0x7a7556;}};var _0xdb7984=new Date(_0x3a85ed[_0x5084('‮260','yx)s')](_0x6a6002,0x3e8));var _0x13f4b9=_0x3a85ed['ivnid'](_0xdb7984[_0x5084('‫261','M5r9')](),'-');var _0xb54ea0=_0x3a85ed[_0x5084('‫262','P5X9')](_0x3a85ed[_0x5084('‮263','b5]k')](_0x3a85ed[_0x5084('‫264','U^xU')](_0xdb7984[_0x5084('‫265','M&ax')](),0x1),0xa)?_0x3a85ed['sYvCf']('0',_0x3a85ed['sYvCf'](_0xdb7984[_0x5084('‮266','70%B')](),0x1)):_0x3a85ed['sYvCf'](_0xdb7984['getMonth'](),0x1),'-');var _0x145861=_0x3a85ed[_0x5084('‫267','IoL9')](_0xdb7984[_0x5084('‫268','YXfF')](),'\x20');var _0x98eee4=_0x3a85ed[_0x5084('‫269','0s8[')](_0xdb7984[_0x5084('‮26a','irr$')](),':');var _0x2d3d93=(_0x3a85ed[_0x5084('‮26b','VgnO')](_0xdb7984[_0x5084('‮26c','qT][')](),0xa)?_0x3a85ed[_0x5084('‮26d','vY[L')]('0',_0xdb7984['getMinutes']()):_0xdb7984[_0x5084('‫26e','Blg]')]())+':';var _0x137b42=_0xdb7984[_0x5084('‫26f','irr$')]();let _0x1da5be=_0x3a85ed[_0x5084('‫270','i3^y')](_0x3a85ed[_0x5084('‫271','O63^')](_0x3a85ed[_0x5084('‫272','VgnO')](_0x13f4b9,_0xb54ea0),_0x145861)+_0x98eee4+_0x2d3d93,_0x137b42);return _0x3a85ed[_0x5084('‫273','pqFB')](_0x3a85ed[_0x5084('‫274','M5r9')](_0x13f4b9,_0xb54ea0),_0x145861)+_0x98eee4+_0x2d3d93+_0x137b42;};_0xodU='jsjiami.com.v6';



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