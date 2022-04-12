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
变量值:token
注释:token抓包找到带有 https://ggb.culink.vip/api/ 的链接,请求头上的token值，虽然可以写登陆，但是登陆有要重新写配置，懒

多个号用 @ 或 # 换行 隔开

cron 31 9,17 * * * app_ggb.js

脚本地址：https://gitee.com/soy-tool/app-script/raw/master/app_ggb.js

*/


const $ = new Env('【广告吧22/04/12_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodl='jsjiami.com.v6',_0xodl_=['‮_0xodl'],_0x1394=[_0xodl,'w5/CrsORJg==','djxr','Ajtb','w7DDuArDqcKt','CMKLwq07','RHvDmsORwo0=','woZRF8KmdBQ=','UcODGw==','wocZbueZleW/qOWmi+i0gUnDsMOr','w5LCqlg=','wociwpA=','MMOXbQ==','w7wWw7M=','EsOQwpLCqcKF','S8OuL3oA','LMKHw4HCojk=','woc2w4HCiMK6','C+OAm+S/ieiCgOaMr+enh+OCsO+/tOmrpeisguiHp+aevHbDo1Hlp6bot7vDg+iui+WKiOS9oOaWnuiEn+adseS7p+S7uOaHluWGl+WtsQ==','GAlG6aq46K6/6LW85Y+JCR/ov5/lmqst','ZcKAwqnpqYforbLotZvljr9hKui+rOWapB4=','WsOKH1go','E8Kvwog=','w5DChsOk','F8K9w5/CpAUsZzU=','wrnDmAslRA==','a8OACA==','w7TDuxw=','OcObZi7DtsOGw6VD','IsKQwp8mVw==','NHoDw5tyLA==','GydZw6EYwqU7wqk=','SMOVw7rCvw==','YsK/D3Bb','wrxJwrDCj8KcJsOQwqPDlXnDgG4=','bUIMw6zCoA==','HXfCtw==','TcONDkcn','wq1cw5vCihA=','wq/DhAoy','dMOPJV0r','wp1KE8KuRg==','K8K1SMK9Dg==','XMKAw6FI','44Gc776u5pyf5aCx5YSd55mX5bif5Y+86YSKwrMTMMKeHj3CkHYJGwnDt2M=','HzxPw5so','R8Krw4AN','wqNJwq4=','776z6Ky8a1M/EV4M6K+f5aSHdMKSwqvltLPooarmsanlhoE=','w4jCqmbmsbblhZvlpZ3otq8Pw5Q=','wofCu8K6','b8Obwqzms4XlhpPlp7notbfCuMK6','wpY7w6vDnRI=','D8OMwoTCgcKQ','HnXCgV8E','wobCp8K6','woLDgCA=','GOOAmeS8tuiCueaPjOekq+ODlO+9iemrkuiumeiEsOafv38nL+WnjOi2mT/orIzliJHkvLXmlprohoPmnrnkuqTkuazmhqblhJTlro0=','EkFCw6DCsg==','Rzhufg8=','FHbCpg==','wpnCuMKxScOa','woHDnsKdE3Y=','OsK/WMKjKA==','a8OYw6zCisOV','cT59ay8=','w7vCrsK+dRs=','F8ObwobCusKm','U8ODCw==','wpknwpk=','NcOyY8OIwr8=','w4DDsxXDucKH','w7/Dv8K4w7vDtcK1Ow==','JiZSw4cI','wpXDqcK9aMON','K3fCl3MR','wrA+w7rDtjI=','csOOw6bCp8OY','CzNEw6ce','wqLCq8K1Y8OP','e3Uxw5DCjg==','IcOWWCjDiQ==','JMOVwrPCqcKG','w7TDtcKr','EsKhw4s=','77296K+9woRbCBzCu8OK6Kyo5aWtw502woLltq/oooTmsLflhIs=','wpzDsMKNKH4=','wqM0w7TCkcKH','wqDDhAk=','wqZIwq3CtcKD','woZMPcKsaA==','JeeuveWKpueIv+aDlOOBhMK/Kee+r+e4gOiuouazquWlm+i3uA==','wqTDjsKpG0o=','d8K1w6HDi8KZ','QwhA6aiJ6KyV6LWO5YybZyPovLTlmatz','w6TChQnpq77oraXotKbljaFpO+i8lOWYrSo=','wpnDmTPDiVs=','dUsdw6h2','b8ObwqzkvZLnlLfljqnlrpTCuMK65rKy5p6T5Y+p5ayZ5Y6E5Ly955WB','wqxQwozkv6rnlZbljKflrqleJ+azv+acqOWOvOWtieWOt+S/gueUuA==','w6Q1w5dWNA==','wo3DgCPDtg==','VcOJw64=','LCNaw6YI','A1PCvHsh','S8Kaw5nDrcKt','IcK3VMKgPw==','w7zjgp3kvrvogL3mjb7np4rjgL3vvJ3pqJPor73ohJbmnppqw7tC5aSz6Le1wqHorKfliKXkvKDml7rohIPmnIvkuITku6DmhZrlh6TlrYTDhg==','wpQowqTkvYXnl4Plj4flr59uw5rmsbPmnZ/lj5zlr7LljaLkvL3nlZo=','wolZwozkvoXnl4Dlj57lrIZLwrXmsoHmn4rljqzlrYflj6HkvYbnlak=','WnrCrQ==','IMO6w5/msr/lhq/lp4fot4/DrsK76L+u5Zmww54=','bDp8','Vm3DlsOPwo8=','wr3Dm8KTcsO3','BsOiQRDDnQ==','J8OGUMO1wpA=','w4bDsQ/DqcKh','w7/DsmcHw6o=','wqVkw71wwqI=','J3jDvMOiwpHDgA==','w6LDuw7Do8Kx','ADtL','KcOLYcOUwp3DnQ==','wrvCqcKwdwAu','wp/DixQ=','PFzDpQ==','wrDCncKrTcO4','W8OJw6fChMOC','R2bCvMKAw4k=','AcOwTS7DqQ==','KMOtfwvDgg==','UcKAw75J','MsK9w5bCuQcha39hwqQ5wr/Dh8OZYsKPwq9OW8O0wovCrMK8w4vCtVnCrMKbXMOQTzzDrjtFA8K0woYkAMOMD8K+bsKqwp8xw6UjVnbDmsKnb8KJwr1jwpMLw7BoIVrCnjHDtsK/woZhw6DCncKOwptiw40BecKAwpUOWEBswrrDq8KbGhfCp8OGwrLDp8OPH8KQwq57VlnDjsKawobChDXDp8K6wo9Cw5IIwp0Uw5fCvcO6XsK9SyHChURbwrLDngxQaWnCv8OMNGnDqG5Pw7jCuQZpw7wtLcKow4pVHg8Ow7vCvn8ofyQRXsOewoBzw5NMbHBvAMOLLU8Fw6A5wq7DjEfCkEkmc8Kfw4nDhMKKwpfDoCLCpMKUCQ9twqp8w4vDjgnCnQdZw4rDiVd6Y8OKd8KiecKtwrE9A3Q8wppGwpp4wpMkwo0Gw7s=','w7bDjMKcw6/Dsw==','UsKCw5UPwpk=','w7cuw4B6IA==','LMOjZBzDiw==','bMOMw6vCs8Ow','wqPDrsKvEHs=','RGMvw4rCmA==','w7ojYcOIIA==','DcKvwowj','w54Lw5VJCw==','ZcKaIGpw','wo3DgRkxIw==','w5TDnl0Rw4w=','XDHCteS/uueXl+WOnOWtp8OUSei8l+WYo8Kw','wpowwoVMw5w=','E2FPw6fCrg==','OAZYw5sd','XsKOw6s=','w4jCqmbkv6Hnl7/ljI3lrYwPw5Q=','ScK3w4M=','772R6Ia+5pym5bWD5q6Q5buY5L++55ei','wqTCusKcbcOa','wrvCosKMb8Oc','SMK9w6oswp8=','w5XDkE4=','w5nCrUHkv7Pnl6vlj6DlrKvCuhg=','PS8O5L+M55eI5Y2e5a6ia8KZ','dGzDt8Omwrg=','NAVzw5wL','w6YBw5hJOQ==','bHjDsg==','w6LDox/ms7zlh6zlpanotL8ZQQ==','w4XCoMOs5L+b55ar5Y695a6Nw7B56L6W5Zmiwr0=','cF/ClOS+oueWkuWNpuWulcO0T+i9ruWalzQ=','GMO8SMOowrQ=','wofCm8OJw5jCtsK2OcKiw40pw5g=','wpnCnMOcw7rCrg==','f8OBwo1xwpk=','X8OAwpZdwrXDscK9Ng==','JMKgwqouSw==','KsORQRfDq8OBw79M','wpYPw5jDmBEoGww=','VcKEw7hpfsK8Nw==','fMKDw5ACwro=','T8KJAVRxwpnCszI=','bsOkNEEN','wp9Jw7vClx7DkMOdw58LOA==','J8Klwq3Ck8Ov','wq53w7B3woLDiGwgwp/CoQ==','w5HCpcODBA/Cj8OpQ8Ojw7o=','w6g5w7B9B0Zrw6gONA==','w5gQw45LKQ==','woQEwoZow6A=','wrliw4vCnho=','NMOXRMOewpfChQ==','FOaJjOS5reWKteS9iei0vsOMPnHCmcOFJ8KswofDtgfCoVHor4roh5boo7rlrZbooqhL','CWZgw5zChFo=','J+aIm+S6ueWLreS8p+i1kXPCgTzCmmXor6Pohpvoo7flrJ7ooooF','PWIUXRptC1VVRg1nwpVkw48aZQjCscK7AV3Dg1PCriNFwrgiwrrCm8Kf','TMKww5AYw4fCvcKHCcOGw7jDlsOLN28awpV2QcOQw7vCtxrDvFfCv17CqMKRw78uQBbDosKIwrfCi0vCs8KDwooNwpfDqsKj','w5jDvzzDt8K7AMOrGsOBAsOSwqjDhcKHwr8aGcOpDcOFHsKnEsOVcsK4dkDCjsO6AXMOKFtlI8KJe8KewrsDwovDj8OVDMKxw7vCocOANcORUR3Du8K/JgrCrlvChsK/T8OAw43DgMKCw67Dvmtxw5A7SXPCijgywpbDp2Zuw51eHcKhwq7CuA9Xw4vDjcOnQsKBwrdHwopfb8Oqw5EJb0dnZj3CjHwpNUYnVg5FwpfDlsKhGmwpw4YzIMOQwq5+wplt','w7VQN13CksOZSBLCo8K4HcKZe8O/Jw==','e3o1w5B5dMK2Ojk2','wo7Cs8Obw6bCrg==','FnZJw77ChA==','KFhYw6TChA==','woXCjMOMw7DCuQ==','RVjCosKNw7M=','wpo5wqJmw5s=','GnnCuVUf','wrw7w4fDgB8=','LXpUw5rCjFMFfsKMwp0dIl/CuVsRwq07OS5swrTCn8KIAB5rw7xHw6Mww4hgSyrDusKLw51WUcKXwr99wo7CsSNRDE7CqEbCgFgAw5lyLMKgTFp3w4vDlh4oMyAkw7DDkl7DrMKQw4UdwpdZw4Qgw7DCpcK/w7DCnMOzBhnDoRjCisOIesOzTi5qwqXDisKUHcOcwoZyLcKFw4tBEcOxWwt/w5nDoMOHZMKGwo1mwqMZwrMNw6DCrcO/Y8ONMsKbwrXDmcKDw6DDkCvDshzCpsOzwpcLNQViTsOsw77DnCtTw5PDmsKfVMOdwrgVAizCqx3DscO0w4gVU8K6w4wCNFcsIMOObiwhw4BEbwnCqyLDhCjCpGDDkxnDicOvw5FOa2/Dq08bw5xpw5HDtU0OS8KCwq3CsV/DosOVMcK4wrPDvsOFwrh5wrjDsGI=','QcOXwpF/wps=','wr1IwoHCscK4','wrgMw4s=','wpFfw4HCtRPDmw==','wpvDugvDu0A=','wrdBw43Cnz0=','wohNw7vCsg==','SsOAwoN0wr7DtsK7DcKHNsOV','wptNw4zCgjA=','K8ObRx/DpcOMw6M=','T8OSwqzCscOsN8KGCcO5wqjCk8KNYsKa','DsKowpPCrsOcC0U=','w4zCrF1nFCo=','w7jCtsK5','dDpIbjjCiQp0','UMK2w40F','wp/DvsKpV8OKwpU=','TcKCAw==','W8KDDENnwpXCux4XZk7DgQ==','SMKrw4M=','44GM776+5pyg5aOa5YWq55iY5biV5YyS6YSlwrVewo5ZUWfCk8OAaWZ5wpjCrQ==','wqlTIkfDiQ==','woJDLcKqeA==','w7TDnzPDhMKs','w6EXUMOpPQ==','wo7jgofkvL3ogonmjJPnprvjg7zvvprpqrTorbLohaXmnah8PcKW5aSz6LaFNeiuseWJk+S/qeaUpuiEtuafluS6luS7oOaHtOWGqOWtg8O1','wp1HOMKtVhh6w5HDolV4w54=','MUEPWQ==','X8KMw7xURg==','w74KWcOlAw==','ORBRw6st','wqJHwr3Cs8KT','SsOAwpJ8wrvDvMKs','KFISVxY=','fsOtwoZGwqA=','CcOPwrHCp8K7G8KM','TGHDrcOAwow=','DMOVwrDCscKG','wpPDo8KR','w4cvYcOTIsKow4lzwq8TWcOP','w7fDpw3DpcK3','w6zCgUI=','E3pXw6zCh1gGDsOdw5JZYw==','wrwawoB4w5U=','woXDosKeZ8OJwpdOWMO7XXjDlw==','wqXDhQoyAcO9TQ==','ScO4Llop','w7fDuBjDk8Kkw6bCj8OfXMOSCyU=','w6bDoCrDt8Kj','F8KvwpY5','EsOfBUdtw7PDnwfCg8Kww7/Ck1TCow==','w5zDi0E=','XcOdwotjwq7DrMKaJ8KQOw==','w7bDsgDDqMKFw6jCgcOla8OKESc=','ccKsw4XDvcKnPMOrbg==','akAJw6g=','wr9NOA==','CzpK','S8OVw7DClMOUGioEbhkOXw==','wprDosKMf8OF','wrIbw77ClcKN','w7jCrMKn','woDDh8KTDl0CwqvDogxLw5Jb','LsOUZsOYwoc=','IcObUg==','5o2I56agw6HCicKu6Le65Y68w6o=','RAvDkMK4w4I=','5o+056e+wolFw5DotrTljZ9Q','w63DuQXDqcK7','w4rnrrbli63jgLHClHM=','w7jDoyE=','w78Tw45LJQ==','SMOKwrZ0wr0=','GsK8w5o=','w4rDkFAtw4Nnw7QMf8Khwodr','W8KcGXVq','YmTDscOg','w7kWw4RPKA==','McOLbQ==','w5bkuqfkuZ3kv5nmg4Hjg6EWJw==','bSZ8','B8KBwqc5VB0=','VMOKwoU=','w55ewpHDh8OI6Ial5p+s5oiW6KOZAMOuw63ljpbkuqLml4/plrXvvYE=','wrXDjAwgHw==','wp9Jw7vCjh7Dk8ON','w43Dj3sAw54=','w7DDpzPDvsK5','akIyw7fCrg==','C8Kiw77CohE=','C8K9w6DCvwgsZjUHw757w7bCgcOy','DVjCicOg','w4Ubw7TDreODq+WEsMKS','wrXkurrotaDljanjg4ZRwrcI','woY+wpA=','w4PlvJLlpY/jgKrnr4fChg==','w7TCrMK1fxE=','wpnDlMKddsOU','DcKhwo0kRg==','wqrDvsKlHGs=','TgrDkMK4','w7nDvyE=','6ISi5p6W5o2Z56exwp5QZei1veWPvVg=','S+eumuWLueOBjxpV56+F5Yic5oiq5YiMVQ==','CcOPwrHCp8K7','GOevhOWKueODmsKJXeestuWJq+aImuWLpwQ=','wqV9w6M=','UcOLwoZ1wqI=','X8KSw6s=','d1wEw6DCrA==','w6/DtCTDo8Km','cGg/w49M','wojCqcKIU8O+','V+OCtOiEkOaeneaMo+enmuOCkO+/kOaujuiGj+acgeWMi+iDnemdnOm+h+eNheWguei3pw==','wq0XwoJpw5E=','wroTw7/DghI=','GcKKwoE/Yw==','O8K3w6jCqj4=','DMK3w4LCtCUifjkyw7M=','SsKlw4kN','w63DpC/Do8Knw6Q=','w7MYw6BnFw==','w7PDuSjDv8K7AMOz','wqBvwrDCscKK','wrUhw7rCv8Kv','woDCkMKKYcOl','BGvCtW54PMKRwoHDsxI=','H8Kzwq8bSg==','WsOXwq5IwpU=','UsOww6rCgMOd','BcKPwpM8ew==','wp/DvsK4VMOLwpVfbsO4Ug==','BnPCqFc7','wrxzA3fDlw==','w6/DqWMew54=','B8K8wp8oeg==','w7HCmsKHbDM=','VMOVw64=','GAlG5L2L55WW5Yy75a+4CR8=','w7DCscK2','77+W6IS55p2i5bec5q+e5bqC5L2b55Wb','5o2F56aqa8Kzw7rotYrljb0V','FsK8w4jCtRM=','5o+Q56WvNjdn6LeG5Y6TMw==','wrnDoSMOHA==','w5rDkE0X','wozCkcOa','5oy+56aVasK+H+i1g+WPrHo=','wpFCw6vCvw8=','eeS7t+S6uOS8u+aAt+OCvAfDlw==','w7kXw7BhBw==','BOS7ruS4nuS+ieaCkuOCg8KSUA==','VcOWwoU=','woNNPg==','IMK8wocbdg==','JMO3TQ/DvQ==','woNLPMKRRg==','w73CvGQUDQ==','wpPCksKwa8OH','KsKIw7/CpS4=','w5DDvBfDvMKE','wqrDuzc7Dg==','fsOsw7zCv8O1','JcONwoTCoMKQ','N07CpWgR','FlvCm1Qe','ZcKZw75fdw==','wrdVwrDCocKo','CMKUw57CmAw=','w53DmlsHw7U=','wqpCPF3DmA==','wr56w7rCrjE=','VXrCrsKi','w4XCoMOs5L+b55ar5Y695a6Nw7B5','w5vCs8OQ','77+Y6IW55p6A5bSI5q6L5bqH5L6/55WZ','YMKWXOS9i+eVquWPseWttVzDkA==','woJRPg==','wqHDmAk=','LcOLecOF','wq4uw4HCo8Ky','w6Uqw4lbCQ==','w7cgw7lKLQ==','VcK2w5Rkaw==','w7gbw4d9Kg==','LkJ9w77CrA==','JnTCoFcn','E3U8ZTw=','w4DnroDlio3niKjmg4Ljg4tvw5vnv7nnupTorZ3ms6Hlp6Xot7A=','5o6/56e2w5rDscKU6LWe5Y+Bwp0=','aGXDscOgwoc=','wpTnrL7liKjniLrmgYTjg57CkQznvprnuq7or5rms6zlpbzotps=','w7YDdsOmPw==','wohHLcKPZR16w63DlE1k','K8K/WMKeFQ==','SgDDgMKQw5VpJ8Km','wr10w6lYwpw=','ScOKEVY1','VcKEw7hgcMKmJsOq','FHNDw5HClw==','B3Baw77Cj1EQOQ==','JkZGw5TClA==','dUQBw6Vx','w7rCp8KlUgZmwpl3','X8O3w6LCksOe','UXDCvsKKw7HDuQHDvgVe','B3Baw77CiVERJcOcw4A=','L8OBWMOVwqc=','wr3DjMK3SMOC','UmDDl8OSwqU=','DTtYw7Y=','wqhYK8KmZA==','w6A2w6ZlGg==','w5rCr8OQ','wqLDi8KOB14=','ZWrDocOk','wprDm8K1PV8AwrrDlA9E','EmUlWxo=','XsOSwq55wpU=','b8K8w7wOwow=','wqfDuBPDtXc=','5o6J56enL8O3dei2i+WPisOX','QcKCEXlm','TuesquWIjOeIpeaBhuODhmTDruS6kOWnheW0vOesg+WJhA==','wprDhsKONEI=','wp0Fw4s=','5o6t56e6w5J6Dui3kOWMncO0','LF0CUQY=','beeviuWIheeLrOaCheOCvsKxBA==','w5TDjE4=','5o6+56WuEcK+aui3seWOqcOu','w4DnroDlio3niKjmg4Ljg4tvw5s=','w6nDpAY=','w5gvfw==','J8ObwqfCrcK3','wqMpwqBMw6k=','KVwB','wqB8w6BfwpM=','PuetjOWJkOeIs+aDleOBucOWfeS7ieWnieW1h+esreWLsw==','N8O3wpbCrcKn','w7gNw6B0DHvDqVXCmcO8wpbCqMKeasOxPcKgw51+ClvDh8Oqw5R5wr/DrQ==','YDHDscKLw6s=','XE46w7Nx','cHrCksKCw4E=','ZzJ5NCnClQh6ABPClULCvCk=','wpI8woBbw5U=','w7DCvnADAQ==','wo1zw7ZOw4TClDdlw4zDsn7DmVXDvzZIOcO+EQ==','wrnDi8KNBG0=','wqcLw43CkcKNwpDCsxjDsk4=','PsK5wqLCj8ON','dFEZw7J+','FAZuw50d','PcObRi4=','wrN3w5N3wrE=','wqsBw4bDlg0=','asO2w6rCg8OK','5o+R56SxwrjCqMOS6Leb5Y2Ww44=','w5HnrJTlipzjgoREZue8vue6uOivsOawnOWkkOi3uA==','5o6V56SJSxlT6LW85Y+JEw==','wozDn8K1dsO0','CsOqQMOFwrk=','w5YGbcO1Lw==','wqxJwq3CtQ==','w5fDkxDDr8K7','b2UFw4PCpw==','wpsGwpJ5w4o=','5o+o56afw489w7fotrnljL5+','w7wzw71xBUJmw5kOJsO7eA==','wos4w77DmyQ=','L8OwcsOTwoQ=','wop4w7fCuAA=','BMOnIuS+peeVsOWPjOWvu8ONwok=','W2bCrQ==','ecO+woTkvJfnl5Xlj7Plra5Kwp8=','w6Mzw6M=','5oyE56WZwoHDl8OF6LaZ5Yy3UQ==','W8KPw6hIZw==','w7DDrsK4w5TDsMOmZMOlPiXDnsKzw4cBwp47w6lDPQwWH8KGwpzDhgTCjg==','wqLDm8K+KUk=','wp/DjcKENk4N','DsKOwpEGYQ==','QsKow4Fieg==','wo5SKcKleRJ3w4DDmEN4wpIvLyLDhSJoZ3DCrVVawqrChsOAwqo5wqDCl0M=','V2oBw5TCgQ==','DsK8wofCsMOQG1fDiWw6wqfCnxHDtkfCscODw7gjNjnChQbCmnXCgMOFw5cBG8Kf','dXMDw4w=','X8OCwoA+wrnDqsKlN8KQM8KYw6PDpsKj','UMORwpZgwqnCpcOmccKZP8OUwrvDrMKmw5jDpETDiR3DnQMcw5HDrcOrwrvDkg==','w4s9w7ZaTRcqwrdcZ8KnfQbDmhVDa3jCog==','w57CinZDBQ==','E8K3w4LCtx8l','w43DvRLDrMKH','wo00woN5w4zCr39Ow7/Cv2U=','J8OuQALDkg==','CTFIw54owrkqwqY=','w7rCp8KlXghnwo4=','wrbDgQwhMw==','w7/CgMK+Vhw=','ag9uQhw=','FMKzwqA7RsKTwpnCvcO8VA==','w5IDVsOoIg==','wrYIw47CucKE','wqHCvcK/VMOW','OsKDwqcadg==','w6Ezw7M=','wpvDh8KZJVQEwqTDmA==','NHkLw49vZsKqITplG8OhH1tbw4vCmn7CmsKcwrDDgMO2w7HDrMKq','wqLDo1w=','w4IYwrE=','wrDDn8KKV8OW','WcKvHk9y','woxYw4hiwoE=','CMKzwpolfMKawoXCs8O0VA==','wrLCjMKzacOX','w587w4NdGw==','DAZ2w6QL','w5Mhe8ObLg==','woEFw5/DoQ==','c8OOwrhJwqI=','wqUWwq/nmqHlvKLlpo/oto3CkU7ovp/lmK1x','QwhA55u+5b6B5aWZ6LeJZyPovLTlmatz','woRXw4l1wow=','PF3CnVMw','E8K9w4s=','w50ufMOpPQ==','wq/nrKLlirTjgL9YBee9lee5muiuneawheWmvui0vA==','w789w7ZdBw==','wovDnBY0EA==','w6wzw6BL','OjrsjnGiamiF.cqoImkC.Urev6QhA=='];if(function(_0x328d98,_0x2ac3f0,_0x445f3f){function _0x4cf860(_0x42ea9f,_0x30ebea,_0x44157a,_0x2a055a,_0x1b7d9d,_0x23a696){_0x30ebea=_0x30ebea>>0x8,_0x1b7d9d='po';var _0x1480fa='shift',_0x5623f1='push',_0x23a696='‮';if(_0x30ebea<_0x42ea9f){while(--_0x42ea9f){_0x2a055a=_0x328d98[_0x1480fa]();if(_0x30ebea===_0x42ea9f&&_0x23a696==='‮'&&_0x23a696['length']===0x1){_0x30ebea=_0x2a055a,_0x44157a=_0x328d98[_0x1b7d9d+'p']();}else if(_0x30ebea&&_0x44157a['replace'](/[OrnGFqIkCUreQhA=]/g,'')===_0x30ebea){_0x328d98[_0x5623f1](_0x2a055a);}}_0x328d98[_0x5623f1](_0x328d98[_0x1480fa]());}return 0xde5fa;};return _0x4cf860(++_0x2ac3f0,_0x445f3f)>>_0x2ac3f0^_0x445f3f;}(_0x1394,0xbb,0xbb00),_0x1394){_0xodl_=_0x1394['length']^0xbb;};function _0xb1e0(_0x33ed27,_0x27e2b5){_0x33ed27=~~'0x'['concat'](_0x33ed27['slice'](0x1));var _0x1f5cb3=_0x1394[_0x33ed27];if(_0xb1e0['svHqwu']===undefined){(function(){var _0x416663=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x384727='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x416663['atob']||(_0x416663['atob']=function(_0x108fee){var _0x2e60f2=String(_0x108fee)['replace'](/=+$/,'');for(var _0x3dea2e=0x0,_0x508a9a,_0x57436c,_0x4df316=0x0,_0x20c36f='';_0x57436c=_0x2e60f2['charAt'](_0x4df316++);~_0x57436c&&(_0x508a9a=_0x3dea2e%0x4?_0x508a9a*0x40+_0x57436c:_0x57436c,_0x3dea2e++%0x4)?_0x20c36f+=String['fromCharCode'](0xff&_0x508a9a>>(-0x2*_0x3dea2e&0x6)):0x0){_0x57436c=_0x384727['indexOf'](_0x57436c);}return _0x20c36f;});}());function _0x1fee4c(_0x3208fc,_0x27e2b5){var _0xe2b47b=[],_0x28047d=0x0,_0x2e1c4c,_0x5bacbc='',_0x148063='';_0x3208fc=atob(_0x3208fc);for(var _0x8ef11b=0x0,_0x181ee2=_0x3208fc['length'];_0x8ef11b<_0x181ee2;_0x8ef11b++){_0x148063+='%'+('00'+_0x3208fc['charCodeAt'](_0x8ef11b)['toString'](0x10))['slice'](-0x2);}_0x3208fc=decodeURIComponent(_0x148063);for(var _0x1dd611=0x0;_0x1dd611<0x100;_0x1dd611++){_0xe2b47b[_0x1dd611]=_0x1dd611;}for(_0x1dd611=0x0;_0x1dd611<0x100;_0x1dd611++){_0x28047d=(_0x28047d+_0xe2b47b[_0x1dd611]+_0x27e2b5['charCodeAt'](_0x1dd611%_0x27e2b5['length']))%0x100;_0x2e1c4c=_0xe2b47b[_0x1dd611];_0xe2b47b[_0x1dd611]=_0xe2b47b[_0x28047d];_0xe2b47b[_0x28047d]=_0x2e1c4c;}_0x1dd611=0x0;_0x28047d=0x0;for(var _0x84bb0e=0x0;_0x84bb0e<_0x3208fc['length'];_0x84bb0e++){_0x1dd611=(_0x1dd611+0x1)%0x100;_0x28047d=(_0x28047d+_0xe2b47b[_0x1dd611])%0x100;_0x2e1c4c=_0xe2b47b[_0x1dd611];_0xe2b47b[_0x1dd611]=_0xe2b47b[_0x28047d];_0xe2b47b[_0x28047d]=_0x2e1c4c;_0x5bacbc+=String['fromCharCode'](_0x3208fc['charCodeAt'](_0x84bb0e)^_0xe2b47b[(_0xe2b47b[_0x1dd611]+_0xe2b47b[_0x28047d])%0x100]);}return _0x5bacbc;}_0xb1e0['cEpVcL']=_0x1fee4c;_0xb1e0['FvCIGC']={};_0xb1e0['svHqwu']=!![];}var _0x5adf52=_0xb1e0['FvCIGC'][_0x33ed27];if(_0x5adf52===undefined){if(_0xb1e0['krOOgq']===undefined){_0xb1e0['krOOgq']=!![];}_0x1f5cb3=_0xb1e0['cEpVcL'](_0x1f5cb3,_0x27e2b5);_0xb1e0['FvCIGC'][_0x33ed27]=_0x1f5cb3;}else{_0x1f5cb3=_0x5adf52;}return _0x1f5cb3;};try{CryptoJs=$[_0xb1e0('‫0','gST!')]()?require('crypto-js'):'';}catch(_0x25fefd){throw new Error(_0xb1e0('‮1','oean'));}try{os=$[_0xb1e0('‮2','KJpQ')]()?require('os'):'';}catch(_0x49d5f2){throw new Error(_0xb1e0('‫3','n9UG'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index;let appid=_0xb1e0('‮4','TGnH'),serverUrl=_0xb1e0('‮5','NAp$'),yyz_UA=_0xb1e0('‮6','XWO1');!(async()=>{var _0x484cf={'ixJYW':function(_0x539a2b,_0x47ff6f){return _0x539a2b==_0x47ff6f;},'caCXG':_0xb1e0('‫7',')pY#'),'WDmxj':function(_0x367509){return _0x367509();},'HufZl':function(_0x4ec0e5,_0x1a3d24){return _0x4ec0e5==_0x1a3d24;},'ioPKW':_0xb1e0('‮8','E^&*'),'YVOMQ':function(_0x106ab3,_0x11becb){return _0x106ab3==_0x11becb;},'GFuVh':function(_0x406383){return _0x406383();},'iQgTD':function(_0x4301c9,_0x49b5d9){return _0x4301c9(_0x49b5d9);},'tehbP':'crypto-js','uULhr':function(_0x2cbf5e,_0x18ad2a){return _0x2cbf5e!==_0x18ad2a;},'dQmzg':_0xb1e0('‫9','83B8'),'OmBEJ':_0xb1e0('‫a','KJpQ'),'MjxEs':function(_0x28f908,_0x396c87){return _0x28f908===_0x396c87;},'ldeHI':_0xb1e0('‫b','KJpQ'),'MBPkY':function(_0x221a9d,_0x470eda){return _0x221a9d!==_0x470eda;},'pHRHo':'TacVe','UWHex':'MIqAC','mmpyY':_0xb1e0('‮c','83B8'),'FHdVz':function(_0x4d365e,_0x124bcb){return _0x4d365e>_0x124bcb;},'ltesE':_0xb1e0('‮d',']!G4'),'VKwGl':function(_0x2bb563,_0x61735a){return _0x2bb563>_0x61735a;},'lokGk':function(_0x289d77,_0x5dcaab){return _0x289d77!==_0x5dcaab;},'fxRoe':_0xb1e0('‮e','[&T%'),'DImjS':_0xb1e0('‫f','14m#'),'ojZOZ':function(_0x22a6c8,_0x6c4645){return _0x22a6c8!==_0x6c4645;},'poTdg':_0xb1e0('‫10','2Cvr'),'ygbwf':function(_0x33032c,_0x5b87c1){return _0x33032c+_0x5b87c1;},'deXbA':function(_0x301be7,_0x54ee76){return _0x301be7+_0x54ee76;},'WVMCo':function(_0x18bc6f,_0x4e83bf){return _0x18bc6f*_0x4e83bf;},'tpRrz':function(_0x40fdcb,_0x43cc95){return _0x40fdcb*_0x43cc95;},'nBfEU':_0xb1e0('‮11','KJpQ'),'nVJTx':function(_0x5dfa6e,_0x17a873){return _0x5dfa6e+_0x17a873;},'oYzNz':function(_0x57100a){return _0x57100a();},'kcEoe':function(_0x19ce9,_0x4f4bdf){return _0x19ce9===_0x4f4bdf;},'baUsP':_0xb1e0('‫12','Pc[r'),'KySWl':function(_0x45d24a,_0x352531){return _0x45d24a===_0x352531;},'DeDzU':_0xb1e0('‮13','2VjA')};console[_0xb1e0('‮14','c^#8')]('\x0a【soy脚本文件免责声明】：\x0a【本仓库发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的，，否则后果自负】\x0a【不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断】\x0a【本脚本文件，禁止任何公众号、论坛、群体以及任何形式的转载、发布,否则后果自负】\x0a【本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害】\x0a【直接或间接使用脚本的任何用户，包括但不限于代挂或其他某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责】\x0a【如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本】\x0a【任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明】');if($[_0xb1e0('‮15','b2hr')]()){if(_0x484cf[_0xb1e0('‮16','Ofxs')](_0x484cf['dQmzg'],_0x484cf[_0xb1e0('‫17','b2hr')])){var _0x3fd9b3=_0x484cf['iQgTD'](require,'fs'),_0x5d3f9d=require(_0xb1e0('‫18','b2hr'));function _0x535a95(){var _0xb67cd9='';var _0x218973=_0x3fd9b3[_0xb1e0('‮19','Pc[r')](_0x484cf[_0xb1e0('‫1a','b2hr')]);_0x218973[_0xb1e0('‮1b','*mK$')](function(_0x286f4a){var _0x1c57ed=_0x5d3f9d['join'](_0xb1e0('‫1c','KFo]'),_0x286f4a,_0xb1e0('‮1d','uf[j'));if(_0x484cf['ixJYW'](_0x286f4a[_0xb1e0('‫1e','HtfE')](0x0,0x3),_0xb1e0('‫1f','1MFX'))&&_0x3fd9b3['existsSync'](_0x1c57ed)){_0xb67cd9=_0x3fd9b3['readFileSync'](_0x1c57ed)[_0xb1e0('‫20','W$wd')]()[_0xb1e0('‫21','NAp$')]();};});return _0xb67cd9;};mac=_0x535a95();let _0x334737=$[_0xb1e0('‫22','(rdN')]()?process[_0xb1e0('‫23','g2W^')][_0xb1e0('‮24','g2W^')]:'';if(!_0x334737){console[_0xb1e0('‮25','NAp$')]('\x0a【'+$['name']+_0xb1e0('‫26','gST!'));return!![];}else{if(_0x484cf['MjxEs'](_0x484cf['ldeHI'],_0x484cf['ldeHI'])){TG_ID=_0x334737['split']('&')[0x0];yyz_Kami=_0x334737[_0xb1e0('‫27',')pY#')]('&')[0x1];try{Tips=author[_0xb1e0('‫28','EBC6')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x313c8e){if(_0x484cf['MBPkY'](_0x484cf[_0xb1e0('‮29','Frj%')],_0x484cf[_0xb1e0('‫2a','PCOt')])){throw new Error(_0xb1e0('‮2b','Frj%'));}else{macs=_0x3fd9b3[_0xb1e0('‮2c','EBC6')](fn)['toString']()[_0xb1e0('‮2d','TGnH')]();}}try{if(_0x484cf[_0xb1e0('‫2e','Q#Xq')]===_0xb1e0('‮2f','PCOt')){_0x484cf[_0xb1e0('‮30','A%yp')](resolve);}else{YZ=author[_0xb1e0('‮31','2VjA')](/作者TG_ID:(\S*)/)[0x1][_0xb1e0('‫32','Pc[r')](/_/g,'><');}}catch(_0xeb2494){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}else{YZ=author[_0xb1e0('‫33','TGnH')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}};if(process['env']['soy_ggb_data']&&_0x484cf[_0xb1e0('‮34','Pc[r')](process['env']['soy_ggb_data'][_0xb1e0('‫35','KFo]')]('\x0a'),-0x1)){if(_0x484cf[_0xb1e0('‫36','Tv7d')](_0x484cf['ltesE'],_0x484cf[_0xb1e0('‮37','KFo]')])){app_soy_ggb_data=process['env']['soy_ggb_data']['split']('\x0a');}else{app_soy_ggb_data=process[_0xb1e0('‮38','(rdN')][_0xb1e0('‫39','PCOt')][_0xb1e0('‫3a','Frj%')]('#');}}else if(process[_0xb1e0('‫3b','N!99')][_0xb1e0('‮3c','KJpQ')]&&_0x484cf[_0xb1e0('‮3d','[&T%')](process['env'][_0xb1e0('‮3e','(rdN')][_0xb1e0('‮3f','emtn')]('#'),-0x1)){if('tTRnk'===_0xb1e0('‫40','cF4M')){app_soy_ggb_data=process['env'][_0xb1e0('‫41','Frj%')][_0xb1e0('‫42','XWO1')]('#');}else{var _0x3cd505=_0x5d3f9d[_0xb1e0('‫43','ChcA')](_0xb1e0('‫44','cF4M'),dev,'address');if(dev['substr'](0x0,0x3)==_0xb1e0('‫45','yQx!')&&_0x3fd9b3[_0xb1e0('‫46','Pc[r')](_0x3cd505)){macs=_0x3fd9b3[_0xb1e0('‫47','Frj%')](_0x3cd505)[_0xb1e0('‮48','o0eg')]()[_0xb1e0('‫49','oean')]();};}}else if(process[_0xb1e0('‫4a',')pY#')]['soy_ggb_data']&&_0x484cf[_0xb1e0('‮3d','[&T%')](process[_0xb1e0('‮4b','A%yp')][_0xb1e0('‮4c','nc9G')][_0xb1e0('‫35','KFo]')]('@'),-0x1)){if(_0x484cf[_0xb1e0('‮4d','(rdN')](_0x484cf[_0xb1e0('‫4e','c^#8')],_0x484cf['DImjS'])){app_soy_ggb_data=process[_0xb1e0('‮4f','1MFX')][_0xb1e0('‮50','Hv#z')][_0xb1e0('‮51','gST!')]('@');}else{console[_0xb1e0('‫52','*mK$')]('\x0a【'+Tips+_0xb1e0('‫53','8IH1')+$[_0xb1e0('‫54','n9UG')]+'\x20签到】:\x20'+result['msg']);subTitle+='\x0a【'+Tips+_0xb1e0('‮55','NAp$')+$[_0xb1e0('‮56','Frj%')]+_0xb1e0('‮57','1!C@')+result[_0xb1e0('‮58','XWO1')];}}else{if(_0x484cf[_0xb1e0('‮59','mJU$')](_0x484cf[_0xb1e0('‫5a','Pc[r')],'ITkPd')){app_soy_ggb_data=process[_0xb1e0('‮5b','jfmd')][_0xb1e0('‫5c','yQx!')][_0xb1e0('‫5d','g2W^')]();}else{let _0x55799e=JSON['parse'](data);if(_0x484cf['HufZl'](_0x55799e[_0xb1e0('‮5e','Tv7d')],0x1)){data[_0x484cf[_0xb1e0('‮5f','mJU$')]];}else{console[_0xb1e0('‮60','gST!')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0xb1e0('‮61','(rdN')+_0x55799e[_0xb1e0('‫62','W$wd')]);}}};user_num=app_soy_ggb_data[_0xb1e0('‮63','qBs9')];console[_0xb1e0('‮64','Pc[r')](_0xb1e0('‮65','c^#8')+new Date(_0x484cf[_0xb1e0('‫66','emtn')](_0x484cf['deXbA'](new Date()[_0xb1e0('‫67','b2hr')](),_0x484cf['WVMCo'](_0x484cf[_0xb1e0('‫68','yQx!')](new Date()['getTimezoneOffset'](),0x3c),0x3e8)),_0x484cf[_0xb1e0('‮69','Frj%')](_0x484cf[_0xb1e0('‮6a','oean')](_0x484cf[_0xb1e0('‫6b','jfmd')](0x8,0x3c),0x3c),0x3e8)))[_0xb1e0('‫6c','jfmd')]()+_0xb1e0('‫6d','n9UG'));console['log'](_0xb1e0('‫6e','2VjA')+user_num+_0xb1e0('‮6f','XWO1'));subTitle='';for(i=0x0;i<user_num;i++){let _0x2285b3=app_soy_ggb_data[i]['split']('&');ggb_token=_0x2285b3[0x0];ggb_UA=_0x2285b3[0x1];if(!ggb_UA){ggb_UA=_0x484cf['nBfEU'];}$['index']=_0x484cf['nVJTx'](i,0x1);console[_0xb1e0('‮70','[&T%')](_0xb1e0('‮71','%UcZ')+$[_0xb1e0('‮72','1MFX')]+'\x20个账号任务】');await _0x484cf[_0xb1e0('‫73','(rdN')](yyz_login);};}else{let _0x2e0fcc=JSON[_0xb1e0('‫74','ChcA')](data);if(_0x484cf[_0xb1e0('‮75','Hv#z')](_0x2e0fcc[_0xb1e0('‮76','n9UG')],0x1)){console[_0xb1e0('‫77','XWO1')]('\x0a【'+Tips+_0xb1e0('‫78','nc9G')+$['index']+_0xb1e0('‫79','qBs9'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‮7a','KFo]')]+_0xb1e0('‮7b','nc9G');}else{console[_0xb1e0('‮7c','%UcZ')]('\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‮7d','Pc[r')]+'\x20签到】:\x20'+_0x2e0fcc[_0xb1e0('‮7e','Q#Xq')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‮7f','oean')]+'\x20签到】:\x20'+_0x2e0fcc['msg'];}}}else{if(_0x484cf[_0xb1e0('‫80','Frj%')](_0x484cf[_0xb1e0('‫81','E^&*')],_0x484cf[_0xb1e0('‮82','1!C@')])){console['log'](_0xb1e0('‫83','gST!'));return;}else{_0x484cf[_0xb1e0('‮84','[&T%')](resolve);}}if(notify){if(_0x484cf[_0xb1e0('‮85','2Cvr')](_0xb1e0('‮86','qBs9'),_0x484cf[_0xb1e0('‫87','jfmd')])){if(subTitle){await notify[_0xb1e0('‮88','jfmd')]($[_0xb1e0('‫89','NAp$')],subTitle);}}else{CryptoJs=$[_0xb1e0('‫8a','Frj%')]()?_0x484cf['iQgTD'](require,_0x484cf['tehbP']):'';}}})()[_0xb1e0('‮8b','mJU$')](_0x419e57=>$['logErr'](_0x419e57))[_0xb1e0('‫8c','XWO1')](()=>$['done']());async function implement(){await getSignInf();}function ggb_index(){var _0x3496e5={'bsPLi':function(_0x2f5a9e,_0x1d3ac9){return _0x2f5a9e!==_0x1d3ac9;},'brLXO':_0xb1e0('‫8d','2VjA'),'jJcKn':'ADPzd','xOlkX':function(_0x4fd0a1,_0x40ea02){return _0x4fd0a1==_0x40ea02;},'wkxKl':function(_0x5e27b4,_0x287cf9){return _0x5e27b4===_0x287cf9;},'fPMYj':_0xb1e0('‮8e','c^#8'),'TjOXB':'LVarO','jXWAK':function(_0x23d6b7,_0x4e192f,_0x43e048){return _0x23d6b7(_0x4e192f,_0x43e048);}};let _0x3f445d=_0x3496e5[_0xb1e0('‮8f','1!C@')](Post_request,_0xb1e0('‮90','14m#'),'');return new Promise((_0x4c06ed,_0x1a02f0)=>{var _0x7a38be={'VVJlz':function(_0x3906f8,_0x431508){return _0x3496e5[_0xb1e0('‮91','ChcA')](_0x3906f8,_0x431508);},'lXVvZ':_0x3496e5[_0xb1e0('‮92','Pc[r')],'UeVBW':_0x3496e5[_0xb1e0('‮93','nc9G')],'uJMYe':function(_0x50bb14,_0x543038){return _0x3496e5[_0xb1e0('‫94','ChcA')](_0x50bb14,_0x543038);},'HovoE':_0xb1e0('‫95','(rdN')};if(_0x3496e5[_0xb1e0('‮96','14m#')](_0x3496e5[_0xb1e0('‫97',')pY#')],_0x3496e5['TjOXB'])){_0x4c06ed();}else{$['post'](_0x3f445d,async(_0x59f5b7,_0x4cd339,_0x31aa7d)=>{try{if(_0x59f5b7){if(_0x7a38be[_0xb1e0('‮98','yQx!')](_0x7a38be[_0xb1e0('‮99','qBs9')],_0x7a38be[_0xb1e0('‫9a','1MFX')])){console[_0xb1e0('‮9b','nc9G')]('\x0a['+TG_ID+_0xb1e0('‫9c','TGnH')+result[_0xb1e0('‫9d','1MFX')]+_0xb1e0('‮9e',')pY#'));return![];}else{console['log']('\x0a【'+Tips+_0xb1e0('‫9f','XWO1')+$[_0xb1e0('‮a0','jfmd')]+'\x20个人信息】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0xb1e0('‮a1','W$wd')+$[_0xb1e0('‮72','1MFX')]+'\x20个人信息】:\x20网络请求失败';}}else{if(_0x7a38be['UeVBW']===_0x7a38be['UeVBW']){let _0x2006ed=JSON['parse'](_0x31aa7d);if(_0x7a38be[_0xb1e0('‮a2','emtn')](_0x2006ed[_0xb1e0('‮a3','yQx!')],0x1)){_0x31aa7d[_0x7a38be['HovoE']];}else{console[_0xb1e0('‫a4','83B8')]('\x0a【'+Tips+_0xb1e0('‫a5','Ofxs')+$[_0xb1e0('‮a6','b2hr')]+_0xb1e0('‫a7',']1fG')+_0x2006ed[_0xb1e0('‮58','XWO1')]);}}else{console[_0xb1e0('‮9b','nc9G')]('\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‫a8','mJU$')]+_0xb1e0('‮a9','NAp$')+result[_0xb1e0('‮aa','Pc[r')]);}}}catch(_0x1a7059){console[_0xb1e0('‫ab','EBC6')](_0x1a7059,_0x4cd339);}finally{_0x4c06ed();}});}});}function getSignInf(){var _0xc78f51={'FVutF':function(_0x313a56,_0x142e62){return _0x313a56==_0x142e62;},'KXNEV':'Dart/2.16\x20(dart:io)','iCxUy':'application/json;\x20charset=utf-8','mtDXv':'gzip','mwiko':function(_0x1a9d01,_0x4e7e71){return _0x1a9d01*_0x4e7e71;},'lieXV':function(_0x29f133,_0x5c94ed){return _0x29f133+_0x5c94ed;},'ptpkL':function(_0x246394,_0x3289b1){return _0x246394===_0x3289b1;},'tSPdG':'NWSML','yZmKi':function(_0x33d1e7,_0xc2eb39){return _0x33d1e7!==_0xc2eb39;},'ElQbS':function(_0x818d60,_0x51b0cd){return _0x818d60!==_0x51b0cd;},'hGgYI':'ZqjOo','gCKHI':function(_0x34fc57){return _0x34fc57();},'Wxrrh':function(_0x3126ab,_0x2a4d2a){return _0x3126ab===_0x2a4d2a;},'xsyqS':'KxXfq','wFrHg':function(_0x686dc0,_0xa84c5){return _0x686dc0!==_0xa84c5;},'WavfH':function(_0x2f33e9,_0x2166c3,_0x15a0b7){return _0x2f33e9(_0x2166c3,_0x15a0b7);}};let _0x20db1a=_0xc78f51['WavfH'](Post_request,'shake/getSignInfo',''+user_index);return new Promise((_0x15bbe0,_0x106a9c)=>{var _0x17d2ce={'MTEVQ':_0xc78f51[_0xb1e0('‫ac','qBs9')],'NGPOm':_0xc78f51[_0xb1e0('‫ad','*mK$')],'FoXEY':_0xc78f51['mtDXv'],'zMmYZ':function(_0x5af278,_0x35dcf0){return _0xc78f51['mwiko'](_0x5af278,_0x35dcf0);},'AdxYX':function(_0x2af5ea,_0x1ebd7b){return _0x2af5ea<_0x1ebd7b;},'jvMuk':function(_0x180845,_0x281a82){return _0xc78f51['lieXV'](_0x180845,_0x281a82);},'gYmNR':function(_0x155af7,_0xdd02ee){return _0xc78f51[_0xb1e0('‮ae','EBC6')](_0x155af7,_0xdd02ee);},'gWXIt':function(_0x219992,_0x25fc31){return _0x219992+_0x25fc31;},'hbSyU':function(_0x4f82a3,_0x36d910){return _0x4f82a3+_0x36d910;},'FvSpN':function(_0x91003b,_0x6e9752){return _0xc78f51['ptpkL'](_0x91003b,_0x6e9752);},'XWZKz':_0xc78f51[_0xb1e0('‫af','N!99')],'WlpKp':function(_0x5ea571,_0x34c9cb){return _0xc78f51[_0xb1e0('‫b0','1!C@')](_0x5ea571,_0x34c9cb);},'NyEFC':_0xb1e0('‫b1','jfmd'),'cHSWT':function(_0x4be192,_0x6be8e3){return _0xc78f51[_0xb1e0('‫b2','XWO1')](_0x4be192,_0x6be8e3);},'VFZQB':_0xb1e0('‫b3','emtn'),'akOWI':function(_0x46e530,_0x2a825f){return _0xc78f51[_0xb1e0('‮b4','nc9G')](_0x46e530,_0x2a825f);},'Gzrot':function(_0x203c82,_0x109a83){return _0xc78f51[_0xb1e0('‮b5','KFo]')](_0x203c82,_0x109a83);},'pOrae':_0xc78f51['hGgYI'],'QcdVd':function(_0x187ec3,_0x1742f2){return _0xc78f51[_0xb1e0('‮b6','14m#')](_0x187ec3,_0x1742f2);},'WVCod':function(_0x4d095f){return _0xc78f51[_0xb1e0('‮b7','14m#')](_0x4d095f);},'fwLiO':function(_0x144761,_0x1dd0e1){return _0xc78f51[_0xb1e0('‫b8','Q#Xq')](_0x144761,_0x1dd0e1);},'IWTfE':_0xc78f51[_0xb1e0('‮b9','2VjA')]};if(_0xc78f51[_0xb1e0('‮ba','jfmd')](_0xb1e0('‮bb','yQx!'),'deruQ')){let _0x64daf7=JSON[_0xb1e0('‮bc',')pY#')](data);if(_0xc78f51[_0xb1e0('‫bd','b2hr')](_0x64daf7[_0xb1e0('‮be',']!G4')],0xc8)){console['log']('\x0a['+TG_ID+_0xb1e0('‮bf','8IH1')+_0x64daf7[_0xb1e0('‫c0','1O#o')]+_0xb1e0('‫c1','c^#8'));return![];}else{console['log']('\x0a['+TG_ID+_0xb1e0('‫c2','cF4M')+_0x64daf7[_0xb1e0('‮c3','EBC6')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x64daf7[_0xb1e0('‮c4','emtn')];return![];}}else{$[_0xb1e0('‮c5','gST!')](_0x20db1a,async(_0x346d25,_0x5b6351,_0x9c3c01)=>{var _0x16026b={'BCnjz':function(_0x2518aa,_0x37f62f){return _0x17d2ce[_0xb1e0('‮c6','c^#8')](_0x2518aa,_0x37f62f);},'tfmbw':function(_0x50fbac,_0x417656){return _0x50fbac+_0x417656;},'rbZDM':function(_0xf548a6,_0x298042){return _0x17d2ce['AdxYX'](_0xf548a6,_0x298042);},'FShgt':function(_0x27bf34,_0x10f026){return _0x17d2ce[_0xb1e0('‮c7','V1^8')](_0x27bf34,_0x10f026);},'gMkYm':function(_0x284987,_0x39481c){return _0x284987+_0x39481c;},'reRdT':function(_0x4f8cb9,_0xdc7450){return _0x17d2ce[_0xb1e0('‫c8','mJU$')](_0x4f8cb9,_0xdc7450);},'gsKHK':function(_0x2d2be6,_0x106b9f){return _0x17d2ce['gYmNR'](_0x2d2be6,_0x106b9f);},'KAPpl':function(_0xfd107f,_0x7f0283){return _0x17d2ce[_0xb1e0('‫c9','Q#Xq')](_0xfd107f,_0x7f0283);},'SkBWZ':function(_0x2e903b,_0x3b3fe0){return _0x2e903b+_0x3b3fe0;},'SqRPI':function(_0x1b1ed7,_0x33cc11){return _0x17d2ce[_0xb1e0('‫ca','mJU$')](_0x1b1ed7,_0x33cc11);}};if(_0x17d2ce['FvSpN'](_0xb1e0('‫cb','KJpQ'),_0x17d2ce['XWZKz'])){try{if(_0x17d2ce[_0xb1e0('‮cc','14m#')](_0x17d2ce['NyEFC'],'EObmX')){if(_0x346d25){if(_0x17d2ce['cHSWT'](_0x17d2ce[_0xb1e0('‫cd','TGnH')],'qHoNt')){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0xb1e0('‫ce','83B8'));subTitle+='\x0a【'+Tips+_0xb1e0('‮cf','uf[j')+$[_0xb1e0('‮d0','Tv7d')]+_0xb1e0('‫d1','PCOt');}else{var _0x3ce579=new Date(_0x16026b[_0xb1e0('‮d2','PCOt')](timestamp,0x3e8));var _0x11d8d8=_0x3ce579[_0xb1e0('‫d3','EBC6')]()+'-';var _0x3d986b=_0x16026b['tfmbw'](_0x16026b[_0xb1e0('‫d4',']1fG')](_0x16026b['tfmbw'](_0x3ce579[_0xb1e0('‮d5','n9UG')](),0x1),0xa)?_0x16026b[_0xb1e0('‫d6','%UcZ')]('0',_0x16026b[_0xb1e0('‫d7','cF4M')](_0x3ce579[_0xb1e0('‫d8','Q#Xq')](),0x1)):_0x16026b[_0xb1e0('‮d9','KJpQ')](_0x3ce579[_0xb1e0('‮da','KJpQ')](),0x1),'-');var _0x20cb52=_0x16026b[_0xb1e0('‮db','KJpQ')](_0x3ce579['getDate'](),'\x20');var _0x24b59d=_0x16026b[_0xb1e0('‮dc','E^&*')](_0x3ce579[_0xb1e0('‮dd','1MFX')](),':');var _0x407a62=_0x16026b[_0xb1e0('‮de','nc9G')](_0x3ce579[_0xb1e0('‫df',']!G4')]()<0xa?_0x16026b['gMkYm']('0',_0x3ce579[_0xb1e0('‫e0','KJpQ')]()):_0x3ce579[_0xb1e0('‫df',']!G4')](),':');var _0x4ff5f1=_0x3ce579['getSeconds']();let _0x3a1f49=_0x16026b[_0xb1e0('‫e1','gST!')](_0x16026b['reRdT'](_0x16026b['gsKHK'](_0x16026b[_0xb1e0('‮e2','(rdN')](_0x11d8d8,_0x3d986b),_0x20cb52),_0x24b59d),_0x407a62)+_0x4ff5f1;return _0x16026b[_0xb1e0('‮e3','Tv7d')](_0x16026b['SkBWZ'](_0x16026b['SqRPI'](_0x11d8d8+_0x3d986b,_0x20cb52),_0x24b59d),_0x407a62)+_0x4ff5f1;}}else{let _0x217267=JSON['parse'](_0x9c3c01);if(_0x17d2ce['akOWI'](_0x217267[_0xb1e0('‫e4','A%yp')],0x1)){if(_0x17d2ce[_0xb1e0('‮e5','EBC6')]('ZqjOo',_0x17d2ce[_0xb1e0('‫e6','mJU$')])){console[_0xb1e0('‫e7','1O#o')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x346d25);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x346d25;}else{if(_0x17d2ce[_0xb1e0('‮e8','Hv#z')](_0x217267[_0xb1e0('‫e9','Tv7d')][_0xb1e0('‫ea','Hv#z')],0x0)){await _0x17d2ce[_0xb1e0('‫eb','TGnH')](sign);}else{if(_0x17d2ce[_0xb1e0('‫ec','Pc[r')](_0xb1e0('‫ed','NAp$'),_0x17d2ce[_0xb1e0('‫ee','Ofxs')])){console[_0xb1e0('‫ab','EBC6')]('\x0a【'+Tips+_0xb1e0('‫ef',']1fG')+$[_0xb1e0('‮f0','g2W^')]+_0xb1e0('‫f1','A%yp'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‫f2','Hv#z')]+'\x20签到状态】:\x20今天已签到';}else{console[_0xb1e0('‮f3','2Cvr')](e,_0x5b6351);}}}}else{console['log']('\x0a【'+Tips+_0xb1e0('‮f4','ChcA')+$[_0xb1e0('‫f5','TGnH')]+_0xb1e0('‫f6','*mK$')+_0x217267[_0xb1e0('‮f7','yQx!')]);subTitle+='\x0a【'+Tips+_0xb1e0('‫f8','A%yp')+$[_0xb1e0('‫f2','Hv#z')]+_0xb1e0('‮f9','83B8')+_0x217267[_0xb1e0('‫fa','Frj%')];}}}else{console[_0xb1e0('‮fb','PCOt')](e);}}catch(_0x5488c6){console[_0xb1e0('‮f3','2Cvr')](_0x5488c6,_0x5b6351);}finally{if(_0x17d2ce[_0xb1e0('‮fc','KFo]')]('IxWsP',_0xb1e0('‮fd','[&T%'))){console[_0xb1e0('‮fe','TGnH')]('\x0a【'+Tips+_0xb1e0('‫f8','A%yp')+$[_0xb1e0('‮ff','%UcZ')]+_0xb1e0('‮100','oean'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到状态】:\x20今天已签到';}else{_0x17d2ce[_0xb1e0('‮101','KFo]')](_0x15bbe0);}}}else{return{'url':_0xb1e0('‫102','mJU$')+url,'headers':{'user-agent':_0x17d2ce[_0xb1e0('‮103','n9UG')],'content-type':_0x17d2ce[_0xb1e0('‫104','E^&*')],'accept-encoding':_0x17d2ce[_0xb1e0('‮105',']!G4')],'content-length':0x0,'token':ggb_token,'host':_0xb1e0('‫106','W$wd')}};}});}});}function sign(){var _0x4181fa={'zeWMZ':function(_0x1711a1){return _0x1711a1();},'ZkjCs':function(_0x464b07,_0x1ca25a){return _0x464b07===_0x1ca25a;},'RLcHy':_0xb1e0('‫107','[&T%'),'zRRNZ':function(_0xeec9bd,_0x7ca9d3){return _0xeec9bd!==_0x7ca9d3;},'nazAO':_0xb1e0('‮108','N!99'),'bFuyj':function(_0x52addf,_0x4e2d9b){return _0x52addf==_0x4e2d9b;},'BCVql':function(_0x5c4e51,_0xe3b99d){return _0x5c4e51===_0xe3b99d;},'rTxbw':'bsLNx','xTMEA':function(_0x29e679){return _0x29e679();},'QuUSt':_0xb1e0('‮109','%UcZ'),'yCKkn':'application/json;\x20charset=utf-8','fXsNb':'ggb.culink.vip','EckAy':_0xb1e0('‫10a','Hv#z'),'qAPtt':function(_0x413173,_0x57d792,_0x15f024){return _0x413173(_0x57d792,_0x15f024);}};let _0x20bee8=_0x4181fa['qAPtt'](Post_request,_0xb1e0('‫10b','c^#8'),'{\x22page\x22:null}');return new Promise((_0x3b4d63,_0x87436b)=>{var _0x5a9076={'OBLTV':_0x4181fa[_0xb1e0('‮10c','uf[j')],'QsTxs':_0x4181fa['yCKkn'],'sNnQB':_0x4181fa[_0xb1e0('‫10d','E^&*')]};if(_0x4181fa[_0xb1e0('‮10e','A%yp')](_0x4181fa['EckAy'],_0x4181fa['EckAy'])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20个人信息】:\x20网络请求失败');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20个人信息】:\x20网络请求失败';}else{$[_0xb1e0('‫10f','*mK$')](_0x20bee8,async(_0x1a9259,_0x4f3280,_0xcaea52)=>{var _0x1af046={'pIMOe':function(_0x167388){return _0x4181fa[_0xb1e0('‮110','%UcZ')](_0x167388);}};if(_0x4181fa[_0xb1e0('‮111','2Cvr')]('xmwdl',_0x4181fa[_0xb1e0('‮112','nc9G')])){try{if(_0x1a9259){console['log']('\x0a【'+Tips+_0xb1e0('‫113','Tv7d')+$[_0xb1e0('‮56','Frj%')]+_0xb1e0('‫114','2Cvr'));subTitle+='\x0a【'+Tips+_0xb1e0('‮115','TGnH')+$['index']+'\x20签到】:\x20网络请求失败';}else{if(_0x4181fa[_0xb1e0('‮116','(rdN')](_0x4181fa['nazAO'],_0xb1e0('‫117','gST!'))){let _0x31cea7=JSON['parse'](_0xcaea52);if(_0x4181fa[_0xb1e0('‮118','PCOt')](_0x31cea7[_0xb1e0('‫119','2VjA')],0x1)){if(_0x4181fa[_0xb1e0('‫11a','XWO1')](_0xb1e0('‮11b','oean'),_0xb1e0('‮11c','[&T%'))){console[_0xb1e0('‫ab','EBC6')]('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0xb1e0('‮7d','Pc[r')]+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+_0xb1e0('‫11d','Pc[r')+$['index']+'\x20签到】:\x20签到成功~';}else{app_soy_ggb_data=process[_0xb1e0('‮4f','1MFX')][_0xb1e0('‮11e','V1^8')][_0xb1e0('‫42','XWO1')]('@');}}else{if(_0x4181fa[_0xb1e0('‫11f','2Cvr')](_0x4181fa[_0xb1e0('‫120','gST!')],_0x4181fa[_0xb1e0('‮121','b2hr')])){console['log']('\x0a['+TG_ID+_0xb1e0('‫122',']1fG')+_0x31cea7[_0xb1e0('‮123',']!G4')]);subTitle+='\x0a['+TG_ID+_0xb1e0('‫124','NAp$')+_0x31cea7['msg'];return![];}else{console[_0xb1e0('‫125','V1^8')]('\x0a【'+Tips+_0xb1e0('‮126','c^#8')+$[_0xb1e0('‮127','Q#Xq')]+'\x20签到】:\x20'+_0x31cea7[_0xb1e0('‫c0','1O#o')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到】:\x20'+_0x31cea7['msg'];}}}else{return{'url':_0xb1e0('‫128','8IH1')+url,'headers':{'user-agent':_0x5a9076['OBLTV'],'content-type':_0x5a9076[_0xb1e0('‮129','Hv#z')],'accept-encoding':'gzip','content-length':body[_0xb1e0('‫12a','Hv#z')],'token':ggb_token,'host':_0x5a9076[_0xb1e0('‫12b','ChcA')]},'body':body};}}}catch(_0x5387a2){console['log'](_0x5387a2,_0x4f3280);}finally{_0x4181fa['xTMEA'](_0x3b4d63);}}else{_0x1af046[_0xb1e0('‫12c','Q#Xq')](_0x3b4d63);}});}});}function Get_request(_0x309751){var _0x22c9b6={'cAbbe':'Dart/2.16\x20(dart:io)','IXaQU':_0xb1e0('‫12d','EBC6')};return{'url':'https://ggb.culink.vip/api/'+_0x309751,'headers':{'user-agent':_0x22c9b6['cAbbe'],'content-type':_0x22c9b6[_0xb1e0('‮12e','oean')],'accept-encoding':'gzip','content-length':0x0,'token':ggb_token,'host':'ggb.culink.vip'}};};function Post_request(_0x5dbcaa,_0x130c1b){var _0x767eb6={'FYoye':_0xb1e0('‮12f','uf[j'),'aSIWe':_0xb1e0('‮130','E^&*'),'XmTrP':_0xb1e0('‮131','Pc[r')};return{'url':_0xb1e0('‮132','Pc[r')+_0x5dbcaa,'headers':{'user-agent':_0xb1e0('‮133','V1^8'),'content-type':_0x767eb6['FYoye'],'accept-encoding':_0x767eb6[_0xb1e0('‫134','HtfE')],'content-length':_0x130c1b[_0xb1e0('‮135','jfmd')],'token':ggb_token,'host':_0x767eb6[_0xb1e0('‮136','XWO1')]},'body':_0x130c1b};};function formatDate(){var _0x288bd2={'jZuXV':function(_0x448180,_0x3912a2){return _0x448180+_0x3912a2;},'zjbvJ':function(_0x40f934,_0x324c61){return _0x40f934<_0x324c61;},'bBoLu':function(_0x18346f,_0x1c0d24){return _0x18346f<_0x1c0d24;}};let _0x5897dc=new Date();let _0x11c2c6=_0x5897dc[_0xb1e0('‮137','[&T%')]();let _0x5cb4db=_0x288bd2[_0xb1e0('‫138','*mK$')](_0x5897dc[_0xb1e0('‮139','A%yp')](),0x1);let _0xa9ce98=_0x5897dc[_0xb1e0('‮13a','1MFX')]();_0x5cb4db=_0x288bd2[_0xb1e0('‮13b','emtn')](_0x5cb4db,0xa)?_0x288bd2['jZuXV']('0',_0x5cb4db):_0x5cb4db;_0xa9ce98=_0x288bd2[_0xb1e0('‫13c','1MFX')](_0xa9ce98,0xa)?_0x288bd2[_0xb1e0('‮13d','W$wd')]('0',_0xa9ce98):_0xa9ce98;return _0x11c2c6+'/'+_0x5cb4db+'/'+_0xa9ce98;};async function yyz_login(){var _0x5d14ef={'gacWk':_0xb1e0('‮13e','ChcA'),'KkZYx':function(_0x151feb,_0x19b997){return _0x151feb!==_0x19b997;},'pFmgl':_0xb1e0('‫13f','PCOt'),'MEMOg':_0xb1e0('‮140','c^#8'),'Gwxci':function(_0x43954d,_0x48b518){return _0x43954d==_0x48b518;},'iCNLJ':function(_0x1fec8d,_0x3fe57c){return _0x1fec8d(_0x3fe57c);},'JBiVP':'yqCNO','EpOTr':_0xb1e0('‮141','1!C@'),'OzbtI':function(_0x40c3eb){return _0x40c3eb();},'rqGkF':function(_0xf0b94a){return _0xf0b94a();},'JRtYP':function(_0x4e7e90,_0x5eec44){return _0x4e7e90===_0x5eec44;},'PgGsy':'DZgme','bRJwL':_0xb1e0('‮142','ChcA'),'FRmox':function(_0x3d6b52,_0x1fbeaa){return _0x3d6b52+_0x1fbeaa;},'qCkSl':function(_0x3e21f5,_0x1ce8c4){return _0x3e21f5+_0x1ce8c4;},'EJLXj':'&sign=','XDnIy':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x532924=Math['floor'](Date[_0xb1e0('‫143','V1^8')]()/0x3e8);var _0x25be5a=CryptoJs['MD5'](''+TG_ID+mac+os[_0xb1e0('‮144','Hv#z')]()+YZ)['toString']();var _0x430dff='account='+TG_ID+_0xb1e0('‮145','E^&*')+_0x25be5a+_0xb1e0('‮146','Frj%')+_0x532924;var _0x1ecc0c=CryptoJs[_0xb1e0('‫147','V1^8')](_0x5d14ef[_0xb1e0('‮148','(rdN')](_0x430dff,'&')+appid)['toString']();_0x430dff=_0x5d14ef[_0xb1e0('‫149','g2W^')](_0x5d14ef['qCkSl'](_0x430dff,_0x5d14ef[_0xb1e0('‮14a','%UcZ')]),_0x1ecc0c);let _0x2a034d={'url':serverUrl+_0xb1e0('‫14b','ChcA'),'headers':{'user-agent':_0x5d14ef[_0xb1e0('‫14c','1!C@')]},'body':_0x430dff};return new Promise((_0x1ccbec,_0x3a994d)=>{if(_0x5d14ef['JRtYP'](_0x5d14ef[_0xb1e0('‫14d','V1^8')],_0x5d14ef[_0xb1e0('‮14e','A%yp')])){data[_0x5d14ef[_0xb1e0('‮14f','PCOt')]];}else{$[_0xb1e0('‫150','2Cvr')](_0x2a034d,async(_0x458a7f,_0x194291,_0x830a77)=>{try{if(_0x5d14ef[_0xb1e0('‫151','Pc[r')]('VznJC',_0x5d14ef['pFmgl'])){if(_0x458a7f){console[_0xb1e0('‮14','c^#8')]('\x0a['+TG_ID+_0xb1e0('‮152','b2hr')+_0x458a7f);subTitle+='\x0a['+TG_ID+_0xb1e0('‮153','oean')+_0x458a7f;}else{if(_0x5d14ef[_0xb1e0('‮154','%UcZ')]!==_0x5d14ef[_0xb1e0('‫155','14m#')]){console[_0xb1e0('‫156','jfmd')]('\x0a【'+Tips+_0xb1e0('‮115','TGnH')+$[_0xb1e0('‫157','PCOt')]+'\x20签到】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0xb1e0('‮cf','uf[j')+$['index']+_0xb1e0('‫158','V1^8');}else{let _0x25df64=JSON[_0xb1e0('‫159','V1^8')](_0x830a77);if(_0x5d14ef[_0xb1e0('‫15a','emtn')](_0x25df64[_0xb1e0('‮15b','V1^8')],0xc8)){let _0x3b5b34=_0x5d14ef['iCNLJ'](Format_time,_0x25df64['msg'][_0xb1e0('‫15c','1O#o')][_0xb1e0('‫15d','W$wd')]);console[_0xb1e0('‮15e','A%yp')]('\x0a['+TG_ID+']:\x20登录成功:\x20VIP到期时间\x20'+_0x3b5b34);await get_vip(_0x25df64['msg'][_0xb1e0('‫15f','Frj%')]);}else if(_0x25df64[_0xb1e0('‫160','qBs9')]==0x71){if(_0x5d14ef['JBiVP']===_0x5d14ef[_0xb1e0('‫161','Tv7d')]){os=$[_0xb1e0('‮162','EBC6')]()?require('os'):'';}else{await _0x5d14ef['OzbtI'](yyz_user_reg);}}else{console[_0xb1e0('‫163','cF4M')]('\x0a['+TG_ID+_0xb1e0('‫164',')pY#')+_0x25df64['msg']);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x25df64[_0xb1e0('‫165','HtfE')];return![];}}}}else{console['log']('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0xb1e0('‮166','[&T%')]);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0xb1e0('‮167','gST!')];return![];}}catch(_0x317b16){console[_0xb1e0('‫168','mJU$')](_0x317b16);}finally{_0x5d14ef[_0xb1e0('‮169','KFo]')](_0x1ccbec);}});}});}async function yyz_user_reg(){var _0x2869fc={'gQGHl':function(_0x5e0370,_0x2eef95){return _0x5e0370===_0x2eef95;},'jqvIs':'toCWY','UpTPg':function(_0x24f434,_0x4e63bd){return _0x24f434==_0x4e63bd;},'IcYii':function(_0x20733c,_0x459e2a){return _0x20733c!==_0x459e2a;},'rhJgV':_0xb1e0('‮16a','cF4M'),'qhsHo':function(_0x297e16){return _0x297e16();},'rTlSR':function(_0x16fb59,_0x22d6ce){return _0x16fb59===_0x22d6ce;},'ZhuMw':'GmudE','gfclj':function(_0x133370,_0x52c0f6){return _0x133370/_0x52c0f6;},'CxLAQ':function(_0x78c035,_0x2b6b92){return _0x78c035+_0x2b6b92;},'ItVxw':function(_0x225a40,_0x1b17bc){return _0x225a40+_0x1b17bc;},'oUrUm':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(!Tips&&!YZ){if(_0xb1e0('‫16b','jfmd')===_0xb1e0('‮16c','c^#8')){console[_0xb1e0('‫163','cF4M')](_0xb1e0('‫16d','Tv7d'));return![];}else{console[_0xb1e0('‮f3','2Cvr')]('\x0a['+TG_ID+_0xb1e0('‫16e','TGnH')+error);subTitle+='\x0a['+TG_ID+_0xb1e0('‫16f','nc9G')+error;}}var _0x3e2eca=Math['floor'](_0x2869fc[_0xb1e0('‫170','cF4M')](Date[_0xb1e0('‫171','ChcA')](),0x3e8));var _0x186c74=CryptoJs[_0xb1e0('‮172','1MFX')](''+TG_ID+mac+os[_0xb1e0('‫173','jfmd')]()+YZ)['toString']();var _0x14439d=_0xb1e0('‫174','emtn')+TG_ID+'&password=123456&inv=soyyun&markcode='+_0x186c74+_0xb1e0('‫175','*mK$')+_0x3e2eca;var _0x3d5876=CryptoJs[_0xb1e0('‮176','yQx!')](_0x2869fc['CxLAQ'](_0x14439d,'&')+appid)[_0xb1e0('‫177','*mK$')]();_0x14439d=_0x2869fc['ItVxw'](_0x2869fc[_0xb1e0('‫178','qBs9')](_0x14439d,_0xb1e0('‮179','E^&*')),_0x3d5876);let _0x8bc76f={'url':serverUrl+_0xb1e0('‫17a','A%yp'),'headers':{'user-agent':_0x2869fc['oUrUm']},'body':_0x14439d};return new Promise((_0x175bb,_0x1764d1)=>{$[_0xb1e0('‮17b','nc9G')](_0x8bc76f,async(_0x31454a,_0x156fe3,_0x16bb84)=>{if(_0x2869fc['gQGHl'](_0x2869fc['jqvIs'],_0xb1e0('‮17c','g2W^'))){app_soy_ggb_data=process['env'][_0xb1e0('‫17d','2VjA')][_0xb1e0('‫17e','oean')]();}else{try{if(_0x31454a){console[_0xb1e0('‫17f','14m#')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x31454a);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x31454a;}else{let _0x51730d=JSON[_0xb1e0('‫180','cF4M')](_0x16bb84);if(_0x2869fc[_0xb1e0('‫181','b2hr')](_0x51730d[_0xb1e0('‫182','emtn')],0xc8)){if(_0x2869fc[_0xb1e0('‫183','cF4M')](_0x2869fc[_0xb1e0('‮184','EBC6')],_0x2869fc[_0xb1e0('‮185',']1fG')])){console['log']('\x0a【'+$[_0xb1e0('‫186','Q#Xq')]+_0xb1e0('‫187','*mK$'));return!![];}else{await _0x2869fc[_0xb1e0('‫188','A%yp')](yyz_login);}}else if(_0x51730d[_0xb1e0('‫189','NAp$')]==0x75){console[_0xb1e0('‮18a','2VjA')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x51730d['msg']+_0xb1e0('‫18b','HtfE'));return![];}else{console['log']('\x0a['+TG_ID+_0xb1e0('‫18c','XWO1')+_0x51730d[_0xb1e0('‫18d','1!C@')]);subTitle+='\x0a['+TG_ID+_0xb1e0('‫18e','Q#Xq')+_0x51730d['msg'];return![];}}}catch(_0x40545a){if(_0x2869fc[_0xb1e0('‮18f','2Cvr')](_0xb1e0('‫190','KFo]'),_0xb1e0('‮191','14m#'))){console[_0xb1e0('‫192','1!C@')](_0x40545a);}else{console[_0xb1e0('‫193','Ofxs')](_0xb1e0('‫194','E^&*'));return![];}}finally{if(_0x2869fc[_0xb1e0('‫195','KJpQ')](_0x2869fc['ZhuMw'],_0xb1e0('‫196','W$wd'))){_0x175bb();}else{app_soy_ggb_data=process[_0xb1e0('‮197','14m#')][_0xb1e0('‮3c','KJpQ')][_0xb1e0('‮198','1!C@')]('\x0a');}}}});});}async function get_vip(_0x38b669){var _0x338e93={'HrnTO':function(_0x5c78a1){return _0x5c78a1();},'cdZPc':'giaeR','ZoGoF':_0xb1e0('‮199','Hv#z'),'WaczW':'wvtZi','ATVcL':function(_0x270349,_0x334bc5){return _0x270349==_0x334bc5;},'egxtY':_0xb1e0('‫19a',']1fG'),'dBZnk':function(_0x58d4b6,_0x1c9858){return _0x58d4b6(_0x1c9858);},'lbmrM':function(_0x4f1fac,_0x3b9c5f){return _0x4f1fac===_0x3b9c5f;},'DtfkE':_0xb1e0('‮19b','nc9G'),'QirFv':_0xb1e0('‮19c','W$wd'),'wzSxe':function(_0x57a740,_0x195518){return _0x57a740/_0x195518;},'hViyL':function(_0x1406b1,_0x93f9f4){return _0x1406b1+_0x93f9f4;},'mwooC':function(_0x567272,_0x2dea73){return _0x567272+_0x2dea73;},'UcSgP':function(_0x5e7588,_0x2ee40c){return _0x5e7588+_0x2ee40c;},'kipae':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x27f5f8=Math[_0xb1e0('‮19d','1MFX')](_0x338e93[_0xb1e0('‮19e','KFo]')](Date[_0xb1e0('‫19f','cF4M')](),0x3e8));var _0x83ec97='script=ggb&num='+user_num+'&token='+_0x38b669+'&t='+_0x27f5f8;var _0x53e9a7=CryptoJs[_0xb1e0('‮1a0','c^#8')](_0x338e93['hViyL'](_0x338e93[_0xb1e0('‫1a1','gST!')](_0x83ec97,'&'),appid))['toString']();_0x83ec97=_0x338e93['mwooC'](_0x338e93[_0xb1e0('‫1a2','XWO1')](_0x83ec97,'&sign='),_0x53e9a7);let _0x373c34={'url':serverUrl+_0xb1e0('‮1a3','8IH1'),'headers':{'user-agent':_0x338e93['kipae']},'body':_0x83ec97};return new Promise((_0x4b1e6d,_0x20dbe5)=>{var _0x142779={'BwfuO':function(_0x4da6f5){return _0x338e93[_0xb1e0('‫1a4','A%yp')](_0x4da6f5);},'WfCJp':function(_0x549b0b,_0x2c004f){return _0x549b0b===_0x2c004f;},'wWXko':_0x338e93[_0xb1e0('‮1a5','(rdN')],'RvaLI':_0x338e93[_0xb1e0('‫1a6','14m#')],'ckKxx':function(_0x1caea2,_0x39500f){return _0x1caea2!==_0x39500f;},'gBwTj':_0x338e93['WaczW'],'kiSxV':function(_0x1f781b,_0x17ca3d){return _0x338e93[_0xb1e0('‫1a7','2Cvr')](_0x1f781b,_0x17ca3d);},'NhfMt':_0xb1e0('‫1a8','nc9G'),'rKlgv':_0x338e93[_0xb1e0('‮1a9','A%yp')],'SGxuY':function(_0x32a2c4,_0x4599ea){return _0x338e93['dBZnk'](_0x32a2c4,_0x4599ea);},'xjVzg':_0xb1e0('‫1aa','1!C@'),'KVtJY':_0xb1e0('‮1ab','oean')};if(_0x338e93[_0xb1e0('‮1ac','*mK$')](_0x338e93[_0xb1e0('‮1ad','KFo]')],_0x338e93['QirFv'])){console[_0xb1e0('‫1ae','8IH1')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0xb1e0('‫1af','jfmd')]+_0xb1e0('‫1b0','14m#'));return![];}else{$['post'](_0x373c34,async(_0x403ab0,_0x31896b,_0x32f7cb)=>{if(_0x142779['WfCJp'](_0xb1e0('‮1b1','Hv#z'),_0x142779[_0xb1e0('‫1b2','c^#8')])){console[_0xb1e0('‫1b3','emtn')]('\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‮1b4','2VjA')]+'\x20签到状态】:\x20网络请求失败');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0xb1e0('‫1b5','EBC6')]+_0xb1e0('‫1b6','o0eg');}else{try{if(_0x142779[_0xb1e0('‮1b7','Hv#z')](_0xb1e0('‮1b8','o0eg'),_0x142779['RvaLI'])){if(_0x403ab0){console[_0xb1e0('‮15e','A%yp')]('\x0a['+TG_ID+_0xb1e0('‫1b9','oean')+_0x403ab0);subTitle+='\x0a['+TG_ID+_0xb1e0('‮1ba','yQx!')+_0x403ab0;}else{if(_0x142779['ckKxx'](_0xb1e0('‮1bb','Ofxs'),_0x142779[_0xb1e0('‮1bc','E^&*')])){console['log']('\x0a['+TG_ID+_0xb1e0('‫1bd','Q#Xq'));subTitle+='\x0a['+TG_ID+_0xb1e0('‮1be','2Cvr');return![];}else{let _0x4dd891=JSON['parse'](_0x32f7cb);if(_0x142779[_0xb1e0('‫1bf','V1^8')](_0x4dd891[_0xb1e0('‫1c0','Ofxs')],0xc8)){user_index=_0x4dd891[_0xb1e0('‫1c1','nc9G')];await _0x142779[_0xb1e0('‮1c2','A%yp')](implement);}else{if(_0x142779['NhfMt']===_0x142779[_0xb1e0('‮1c3','14m#')]){_0x142779['BwfuO'](_0x4b1e6d);}else{if(yyz_Kami){await _0x142779['SGxuY'](card,_0x38b669);}else{if(_0xb1e0('‫1c4','o0eg')===_0x142779[_0xb1e0('‮1c5',']1fG')]){throw new Error(_0xb1e0('‫1c6','(rdN'));}else{console[_0xb1e0('‮18a','2VjA')]('\x0a['+TG_ID+_0xb1e0('‫1c7','%UcZ'));subTitle+='\x0a['+TG_ID+_0xb1e0('‮1c8','c^#8');return![];}}}}}}}else{console[_0xb1e0('‫1c9',']!G4')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x403ab0);subTitle+='\x0a['+TG_ID+_0xb1e0('‮1ca','ChcA')+_0x403ab0;}}catch(_0x505b26){console[_0xb1e0('‮1cb','W$wd')](_0x505b26);}finally{if(_0x142779[_0xb1e0('‫1cc','Tv7d')](_0x142779[_0xb1e0('‮1cd','(rdN')],_0x142779[_0xb1e0('‮1ce','*mK$')])){_0x4b1e6d();}else{throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}}});}});}async function card(_0x2c5686){var _0x17834d={'nVPKp':function(_0x880994){return _0x880994();},'vFqgd':'MvUvn','dmxsG':function(_0x16531e,_0x4e4fa5){return _0x16531e===_0x4e4fa5;},'aWQFO':_0xb1e0('‮1cf','gST!'),'TvbxC':_0xb1e0('‫1d0','XWO1'),'PFEAA':_0xb1e0('‫1d1','yQx!'),'mKWhX':function(_0x2b1d9b,_0x45eb8e){return _0x2b1d9b!==_0x45eb8e;},'NcyDe':function(_0x376573,_0x2e62d){return _0x376573!==_0x2e62d;},'WuYtf':_0xb1e0('‮1d2','%UcZ'),'ZUvmV':function(_0x3af1b3,_0x398410){return _0x3af1b3+_0x398410;},'csnOq':function(_0x55ccb1,_0x5c3be6){return _0x55ccb1+_0x5c3be6;},'qsvGQ':function(_0x50384f,_0x20a973){return _0x50384f+_0x20a973;},'LDxtm':function(_0x22680d,_0x3bea02){return _0x22680d+_0x3bea02;},'eYJQF':_0xb1e0('‫1d3','Tv7d')};console['log'](yyz_Kami);var _0x238059=Math[_0xb1e0('‮1d4','Frj%')](Date[_0xb1e0('‫1d5','A%yp')]()/0x3e8);var _0x2a7428=_0xb1e0('‮1d6','gST!')+_0x2c5686+_0xb1e0('‮1d7','1MFX')+yyz_Kami+_0xb1e0('‮1d8','yQx!')+_0x238059;var _0x5c6fda=CryptoJs[_0xb1e0('‮1d9','14m#')](_0x17834d[_0xb1e0('‫1da','1!C@')](_0x17834d[_0xb1e0('‮1db','nc9G')](_0x2a7428,'&'),appid))['toString']();_0x2a7428=_0x17834d[_0xb1e0('‫1dc',']!G4')](_0x17834d[_0xb1e0('‮1dd','*mK$')](_0x2a7428,_0x17834d[_0xb1e0('‮1de','*mK$')]),_0x5c6fda);let _0x2ca086={'url':serverUrl+_0xb1e0('‮1df','Q#Xq'),'headers':{'user-agent':_0xb1e0('‫1e0','jfmd')},'body':_0x2a7428};return new Promise((_0x352322,_0x1d24e1)=>{var _0x373a41={'VRdHZ':function(_0x38da28){return _0x17834d[_0xb1e0('‮1e1','8IH1')](_0x38da28);},'NrAMt':function(_0x303c4d,_0x27be8d){return _0x303c4d!==_0x27be8d;},'AjwfZ':_0x17834d[_0xb1e0('‫1e2','NAp$')],'DBPmP':function(_0x31a358,_0x4932b9){return _0x31a358==_0x4932b9;},'LTkMZ':function(_0x4d622,_0x19b6d1){return _0x17834d['dmxsG'](_0x4d622,_0x19b6d1);},'ILqww':_0xb1e0('‮1e3','V1^8'),'staTN':_0x17834d[_0xb1e0('‫1e4','*mK$')],'QjQOr':_0x17834d[_0xb1e0('‮1e5','nc9G')],'lyNDb':_0x17834d[_0xb1e0('‫1e6','Hv#z')],'ugbcG':function(_0x2ee6ca,_0x592264){return _0x17834d['mKWhX'](_0x2ee6ca,_0x592264);},'vxLMF':_0xb1e0('‮1e7','oean'),'iKDig':function(_0xdb7240,_0x26851){return _0x17834d[_0xb1e0('‫1e8','PCOt')](_0xdb7240,_0x26851);},'IRmlW':_0x17834d['WuYtf']};$[_0xb1e0('‫1e9','ChcA')](_0x2ca086,async(_0x1613e5,_0x289a46,_0x4db38e)=>{try{if(_0x1613e5){if(_0x373a41[_0xb1e0('‮1ea','mJU$')](_0xb1e0('‮1eb','g2W^'),_0x373a41[_0xb1e0('‮1ec','emtn')])){Tips=author[_0xb1e0('‮1ed','yQx!')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x1613e5);subTitle+='\x0a['+TG_ID+_0xb1e0('‫1ee','Tv7d')+_0x1613e5;}}else{let _0x49f542=JSON[_0xb1e0('‮1ef','[&T%')](_0x4db38e);if(_0x373a41['DBPmP'](_0x49f542['code'],0xc8)){if(_0x373a41['LTkMZ'](_0x373a41['ILqww'],_0x373a41[_0xb1e0('‮1f0','KJpQ')])){_0x373a41[_0xb1e0('‫1f1','A%yp')](_0x352322);}else{console[_0xb1e0('‮1f2','Q#Xq')]('\x0a['+TG_ID+_0xb1e0('‮1f3','XWO1')+_0x49f542[_0xb1e0('‫1f4','NAp$')]+_0xb1e0('‮1f5','gST!'));return![];}}else{if(_0x373a41[_0xb1e0('‮1f6','1!C@')](_0x373a41[_0xb1e0('‮1f7','1!C@')],_0x373a41[_0xb1e0('‮1f8','NAp$')])){console[_0xb1e0('‫1f9','yQx!')]('\x0a['+TG_ID+_0xb1e0('‫1fa','Frj%')+_0x49f542['msg']);subTitle+='\x0a['+TG_ID+_0xb1e0('‮1fb','KJpQ')+_0x49f542[_0xb1e0('‮c4','emtn')];return![];}else{console[_0xb1e0('‫125','V1^8')](e);}}}}catch(_0x2946fd){if(_0x373a41[_0xb1e0('‮1fc','Tv7d')](_0xb1e0('‮1fd','A%yp'),_0x373a41[_0xb1e0('‫1fe','mJU$')])){console[_0xb1e0('‫1c9',']!G4')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0xb1e0('‫1ff','Tv7d')]);subTitle+='\x0a['+TG_ID+_0xb1e0('‮200','HtfE')+result[_0xb1e0('‫fa','Frj%')];return![];}else{console['log'](_0x2946fd);}}finally{if(_0x373a41['iKDig'](_0x373a41['IRmlW'],_0x373a41['IRmlW'])){console[_0xb1e0('‫1ae','8IH1')]('\x0a['+TG_ID+_0xb1e0('‫201','8IH1')+_0x1613e5);subTitle+='\x0a['+TG_ID+_0xb1e0('‫202','n9UG')+_0x1613e5;}else{_0x352322();}}});});}function Format_time(_0x14739c){var _0x38ffcc={'EXBYG':function(_0x4b1a04,_0x198385){return _0x4b1a04+_0x198385;},'ybadm':function(_0x5206e4,_0x252613){return _0x5206e4<_0x252613;},'GdoaC':function(_0xfbf1e2,_0x27560e){return _0xfbf1e2+_0x27560e;},'ODcpk':function(_0x364edb,_0x3cac03){return _0x364edb+_0x3cac03;},'XGtjG':function(_0x58d46b,_0x4c8208){return _0x58d46b+_0x4c8208;},'SHHuO':function(_0x564edc,_0x305c07){return _0x564edc<_0x305c07;},'HiZOV':function(_0x269a1a,_0x2976af){return _0x269a1a+_0x2976af;},'sccvW':function(_0x18ffd6,_0x5692ac){return _0x18ffd6+_0x5692ac;},'nUqWY':function(_0x785f0d,_0x332f48){return _0x785f0d+_0x332f48;},'ANDDm':function(_0x7c3f12,_0x372dc7){return _0x7c3f12+_0x372dc7;}};var _0x48b80e=new Date(_0x14739c*0x3e8);var _0x585af8=_0x38ffcc[_0xb1e0('‮203','gST!')](_0x48b80e[_0xb1e0('‫204','83B8')](),'-');var _0x3e24c2=(_0x38ffcc[_0xb1e0('‮205','83B8')](_0x38ffcc[_0xb1e0('‮206','Pc[r')](_0x48b80e[_0xb1e0('‮207','Pc[r')](),0x1),0xa)?_0x38ffcc[_0xb1e0('‮208','qBs9')]('0',_0x48b80e[_0xb1e0('‮209','*mK$')]()+0x1):_0x38ffcc['ODcpk'](_0x48b80e[_0xb1e0('‫20a','2Cvr')](),0x1))+'-';var _0x42ac7e=_0x48b80e[_0xb1e0('‫20b','Q#Xq')]()+'\x20';var _0x5ba529=_0x38ffcc[_0xb1e0('‮20c','NAp$')](_0x48b80e[_0xb1e0('‫20d','g2W^')](),':');var _0x2ecf44=_0x38ffcc['XGtjG'](_0x38ffcc[_0xb1e0('‫20e','cF4M')](_0x48b80e[_0xb1e0('‮20f','b2hr')](),0xa)?_0x38ffcc[_0xb1e0('‫210','uf[j')]('0',_0x48b80e[_0xb1e0('‫211','%UcZ')]()):_0x48b80e[_0xb1e0('‮212','1O#o')](),':');var _0x2bfe15=_0x48b80e[_0xb1e0('‫213','V1^8')]();let _0x4cda0c=_0x38ffcc[_0xb1e0('‮214','mJU$')](_0x38ffcc['HiZOV'](_0x38ffcc['HiZOV'](_0x585af8,_0x3e24c2)+_0x42ac7e+_0x5ba529,_0x2ecf44),_0x2bfe15);return _0x38ffcc['sccvW'](_0x38ffcc[_0xb1e0('‫215','[&T%')](_0x38ffcc[_0xb1e0('‫216','b2hr')](_0x38ffcc['ANDDm'](_0x585af8,_0x3e24c2),_0x42ac7e),_0x5ba529),_0x2ecf44)+_0x2bfe15;};_0xodl='jsjiami.com.v6';


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