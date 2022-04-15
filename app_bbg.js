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


var _0xode='jsjiami.com.v6',_0xode_=['‮_0xode'],_0x29af=[_0xode,'woYKwpUSw6k=','woRtw78LAA==','VsK/A8KGw4U=','w5oNc2t0','fFRpP8O+','bDg9w6oj','wqYoNw3Dqg==','GMKMw7BrwpE=','wqLCiyZ3HA==','woHCucOrCw==','DcO6FVEJ','wrzCgMOMBsO4','ewHDkMOnw5g=','wpF8w5/ClcOW','wox0w54IAg==','fksjG8Ky','wrp7WBXDgA==','F8Kdwp4yDw==','w7zCqzQZwo94dsOLBDtIwozCgQ==','BcO5wr1lHw==','wrNkw4bCqMOU','D8Opw53CtcOh','wrfDv8OCw7rDiA==','wpAADeeYneW/kOWkrui1qlLCjOi9uOWZoAE=','wpUIwrQhw5g=','w5sEw53CqF4=','wp3CucO/','TMK6CMKS','wrFqw68TImg7XUjCtnMNUA==','OwrDssOWwoo=','wr0IXBLCuA==','OcO/w68=','NA/Dsg==','wot+w5rnmLnlv6TmipvlirLDkEMUw4hc5YmD5p6X5pey6ZaGwp8=','wpRswqEPw5Q=','wqt0wqU=','W8K6B8KSw7E=','wpzCq8OpCQ==','w5VECOeZqOW9jeWlpui3ty/Dp8OX','wqE6wrznm6flvYLlpYLot45GNDQ=','wokBw4A=','w4fChsOiw43Cqw==','woQrYiPCqA==','DMOiw4XCjWo=','eHvDl8OKRijDu8OW','w5HClxU/wqY=','wrXDhcOZw7TDpg==','wpDDl8KQJMOOw7zChsO1','w7ocfnglX3TCjw==','w43Dl8K9w4k/TcKa','wodzwoFwcA==','wqvCjMOEGcOL','KcObIHYYw4UVW3zDog==','w5Zfw6g7KQ==','w7s/bWpWw5sWXXYu','wpbCs8OsMhgDaMKeUT0=','eHvDl8OUTCXDoMOQXMKt','R3nDlMOdZw==','wpVdWjzDiw==','wqV+w5XCh8OF','wqJZwoQiw5E=','wqxuw4QBHQ==','w6fCtjo=','CQXColnDvA==','CcOYw7LCs8OM','wpoRMw==','DsOfw6bCksOx','GsKewp3Cs8KW','wp7DisKJAcOM','CDTDlMOIwo4=','w70Mcl9x','MMOAw7DCksOpAlsLY0MgwrZaw4zDtXDDgsO1fyoEw7RKKG7DmmcxYsKaw4tLw7bCmsO3a18jw4bCulYQwpnCi8OLZsKYw7bCj8K2w7zDlsO1wrXCmsK5wp7CqQ3Du8KqwqVCBMKmTsKSwqVmA2UMw5oPw7bDkiYeE1/ChcOgN8KdVyUQw6HChVhZwohRwq/DqHoEw7HCgMKiwqg+TsOrBMKewpwxG8KuXXBpw63Cp8K8HBTCi8KKYsO1FcOJwpHCr8Kuw57DqcKDQMOnw6RewohywqjDplZ9w4V5TMKSew4iwp0sTn7CgMKcw55XZcOPw6ghAWbCqE3CiD/CoQgZXsOgBmMJwovDsFZjw7dNwoszwqrCiCjDvMOXNsOIPETCkkbDv3jCvXI6RsKLdsObw459Z8Kjw41/M8KpJsO4IMKad8KdWl48LsOOwopH','f2UO','L3HDqB1xfUBg','w7o2dkhN','wqhowrU=','wotDw7c=','wpnCucOrCx8McMKP','worCt8OoHsK9','w6cWAS3DoTjDoDLCt8KuYsKMPMKfP8OxwrpCcUvDtSHCr8OBwp/CmsKpw5MgLEJow6DCn8KZwrlA','w6Bzw78=','DcKCwrzCg8KD','AwPDgMOPw4o=','wrXCgsO1PiY=','wrNswpRMTw==','5o+W56SfRDMd6LaC5YyIwos=','wpjpo7rljbPnpbnnuqXph4flu67jgLciEQ==','XlhwHsO4w7DCoA==','w6PpoaHljpnnpq7nu4HphKTluaJs44CUKTY=','w4Efw7pfwofCnDc=','P8O5w6zCrg==','OMOgwo0=','wpsiwqbmso/lh4vlpJ/otbcLDei8seWblEM=','wqAQwrPmsLblhLPlpLTotKvDrEPovozlmrdt','HMO7w77CqcOu','HsOAw67Cng==','w7AJw6PCjnI=','DgHDpcOow44=','w5fCqcOHdH8=','woPDpVLCmzM=','6IaC5p+j5o2u56WNF8ORwr7otJjlj6IB','w5/poYLljZvnp5fnuL/phY3luJTjgbTDpMOT5out5YquNOiNqOW8mw==','K8O3w6vCuw==','w5ESw4HCp2I=','w7bpo4LljKznp7nnuI7phZrluKzjg7tZYg==','wq7CgjxmH8KSBg==','w43po7jlj7nnp7PnuZbphpzluZjCnOODpMOqwrg=','wq8hEArDtw==','ZX/CseaxpeWErOWmgui3iMOnRA==','w6UNTw==','77y16Kyrw6dKJ8O1DSzor7blpqbDscOmwq7ltpnoo6jmsIblh6M=','5o2N56WDJxhn6LSX5Y+3w4c=','LxrDh8OBw54=','44GswpXCqg==','w4fDl8K6w74/XsKa','URUpw589','w7bpo4LljKzmsZbmsZA=','w6jClycCwp0=','cnvDkMO0SCHDqg==','EsKswr/msLLlhqrlp5Hotao3w70=','w4fDgcKu','w4BDKuazneWHhuWkgOi0pcOdwpQ=','w7A1fg==','BcOPDnA0','wrbCrsOqLTs=','DcOuPkoY','dMKhw4lkFMOQKCx9wo/DrsKPw5YnKsKAGhEUw7DCoTjDt8Kad8OOw7dywrrCuXDCucOOwr7Ctkk5dEPCisKETMKjwpLCscONwqXCqcK1worCqMOFRMKaaMKrHBLCosOhw7J5EGozLnnCtTDCp8Kaw47DgMOTU8OofsOQw4DCpcK0wpHCs8KewoDCvCBlcSvCssOEcMKEV8Osw6XClAN+wp/DoMOKJEfCiAEFwpQnNcO/wpZgaF0dTcKcw7/Dh0cCR24FwooBwqZEIy88HE5pw7BJYAUQQcKbKDTDoMKBL8OHUsKywrIVEx7Di8K3woPCsMKJwpPDgHVsPWvCjXt+WAbDu0XDiXMnwoxewq3CicKnNsO+EsKYw7rDqcKmA8KjZh9Dwo/CvcOyEgpewoTCgcOgw5fClE9cfD/DmHTDkMOdQ8OjwrojbcOEw4MwwqrCpw==','w4sfw5fCq2piw5JEelYTdcOJwq/DlQ==','w6cSDzXDtyHCsg==','wooOwrQ=','woFmwqVteA==','wrrCkcOKNsOz','w6zCoMOtA0jClcO9WQ==','aA0iw6AE','woAmw4YMw70=','cEzDk8O9bw==','WUUAGsKK','VT0iw5EC','w7B1w40gGg==','DVnDlAtu','w4U6XXks','wrnCqcOqA8Oa','wrZ3w7UT','dwDDnsOrw5U=','w6zCpMOXJ2k=','LsOsw7LCnGc=','wpBvw7s=','CcK1w4rkvbnnlbPljbzlrr3CnsKH','77yj6IeP5p2A5bSF5q+85biq5L6a55ag','csOvTOS+iOeWt+WNs+Wso8KydQ==','wqBJSg==','wrBED+S8t+eXgeWMrOWun8Obw5U=','wpBZw7Q=','w6VGwoXpqY7or5votLDljJgcOOi/peWbqzs=','GiTCu+mrpeivnui0uuWPmj8Z6L2x5Zmjw5k=','FsK0w49Ywo8=','D+mhk+WOuueljOe4oOmHg+W7pOOCmW8L57yY57in6K2B5rG45aWD6LWe','5o2856WAwqQBw4vot53ljqU0','cemhueWMhOenmue7numGmOW5tuODpit+57y757uH6K+O5rKt5aal6LWT','wqtrw6E=','T8Ksw5dnCQ==','w4FgOeS9mOeUl+WPlOWupRMz5rO85p+U5Yy/5a665Y+U5L6o55Wq','woTCjiVBGw==','DMOGw7XCq08=','VCrDtg==','A8Ohw7PpqYXorI3otoTljr3DqQHov6rlm4Nx','wp7DnW/pqpnorr/ot5PljpQrJei/h+WbiC4=','wq7DgsKUAcOo','JHPDrShV','HsObw57Ct8Oi','SOaIjuS7tuWIgeS8hui0h3sAwpfCs2bCkCfDscKGwqM96K+j6ISz6KGo5ay/6KG4w6E=','wrLCq8O3BcOsw7B0SsOrw53DjREwwpPDpQvClRkIw7IjKBJ4JsKCwpHDjwdKwpFXZm4GSsKzVG7DjHTChTlIFsKow6BbdyMBwrfDlX5Fwo/Du3EfZsKpw7rCihYAWMKeb8OKXwUFw5jClcKHDgPCrilXFMOTwpsHNcKLVsKaU3nCvsKxw74Dwr4fwrx8XcKcwrXDpn8+w6bDtmVDwq7DrcKww4Ynw6bDpBhBwqhUKk/DqCMjwqLDpsO6PMKZw6HCgMOzcwjCoBk/f8OwYB3CkcKxw5wbYw5Qwp4VwoTCkMONbMOeD8OyMsODwqnCvcOSwrbCrcKcZMOyw7DCo2kiwrA/AsK1R8KlRgXCvmQNwrMOFRjCiAfDgA7CtcKmPMOjTTzCgmLDrxB8Ul3Drj1uwrPDhnl5IsKFwoFTwonDknDCqcKuw70mVw==','Xhciw5U3','w4IVw74=','wrJowqlwTzc=','w6BswqN4SDc=','acOiwqI=','DzTDjg==','BcKAw5FZwpk=','Z2U6IcKpX8Ouw4Q=','w5HCvQg7wok=','w4g0w5LCtVY=','w5Uoe10I','wpLCsMOmOcO2','PsORJ08=','wr/Cr8OfJSY=','wojCtB9wFg==','w4BDKuS9iueVouWNkOWvhsOdwpTovIvlmqzDrA==','wp7DnW/kvarnlZbljpTlrqUrJei/h+WbiC4=','wqLDvsKt5LyT55ao5Y+95a+TX8O+','LwPCnA==','772S6IeB5p+/5bS75q6v5bqa5Ly155e7','wrlIwofkvKLnlrDljJLlrLwQVw==','QsKmCw==','wpFzw7s=','w7Jiw4MmNw==','w4Q4WUc/','wpgaMcO2wp4aWcO1wo4hcQ==','GsOKw77CtsOqAE5M','worDi8Odw5LDn2gd','Hl/DiBtq','wpkROAnDpA==','w43Dl8K9w4A3V8KKwp3Cs8O/','GsOKw77CtsOsAE9QMx4=','w6zCvCk+wo9dcMOJBRs=','JsOmw5vCpMOk','wppSw6TCk8OI','w58Ew5LCj20=','wpDDisKTJMOW','XsK2w4RADw==','wqgVLjHDtio=','WsK8w4p9DMOTZGk7','w6fmiIDkuKLlibjkvbTotJt5woLCh8Kpw6jCjsO8w4lUwrkMw7PorpLoh6foop/lrozoo5vCug==','XuaLseS7p+WItuS/hui1i1vDq8O0IADor6noho3oobvlr4noo67Chg==','w6LCqhMCwo5b','w7I1fUISw4cQSA==','Lm3DlQZ7eQ==','w4zmibnku4/liKXkvrzotZw2GxE4wrborZ/oh6XoornlroHoo5Ze','w6hJw4EaFzo=','wqbDg2nCvg==','JeaKq+S5oeWLh+S8gui1hMOFw7g0XyHDm8Ka6K+N6IaY6KC35a+Q6KKGfg==','a1sbPMK/AcK1w4XClgFOKMKvw4V5NMK1woVUw643WlcGw4TDrTYWwqNVw6TDjw==','wpcLMcOAw5FZGsOVwpI6LQbDvMKzfn0LVsONXMOSZMKGXHo+NC/CsMK4KAMmwo3CkUNZIcKLwpHCq8K/wpvCpA==','flJ5BMO1w7vCpEkJckIOQxDCnFxSw7XDnMKAW8ONUsK2GTjDvMKccsKTwobCk0UeImgzM1HCsFAMcMKxE8KFUsOKJXlnX8ONYcK5wqQXwp5Gw5lVHMOif25Rwq3CmGBncMKuwovClUzClsOvw4vDi3hLJQMvw6PCo2fCnHEEw5vDky3DoXHCqcKSWcOOw4N6wr9ewohxE2RAwpbCj8KsIyzCshnCicKQG8K+wqLChn/Cqn5awrt5X8O6w75z','w6Bew6sHFiw0','IkjDrCV6','wozDj8Kcw7XCi39Bwp0FwovCmyc4wrMuw5U=','f8KKZFhAw41RHX/DtHdqNWvCjcOHMcKfw7JOZSzCjHrDlE7DqHvCm8KjfSA=','wqTDr8OMw5nDpw==','d0InfH0=','w7vjg4bDqxAI6IW35pyx5pWt5LuC5YSD6LeG5aGe5put44Oq77yUw67jgJ/mnarkuqDluobljKDluYznmKjoh4XmnInmlqLkua3ljI7lhpDkuKLmt4HljL7nm7bkuLnkvr/ohp7mnp7vvrrku4PnlYTku5Pmt4nor7nlkonlrYbkuKPno57nqITvvZHnpKDmrL/nlqPkuIrllK7kuJfmiJjpnpzms7rnmKznmozvv4XvvaLlkbvli5Plk6nmnILohK3otZzjgaIl44Kh5LuP6ICd5L+v6K6S5YWs5ZG+5rKS5oO144Gb5YaP56O55oGH44OL5a+y5pSe5oKJ5ZGy5pyF5pay5oOx77yd6Ky45qGr5o+Y5oOW5YW06IeQ6KCW5Ymv5pWQ44O1wr7jgr7mnJzohovmnIPmlbjkuKbvvIjnpozmrLnkuaPkvrLlhbjkvK3ljojjgJ/oro/ln6XjgIrnvbDkva7ku6nlj53ku4Hkv5nlvJ3lvqznmqnovrTova3jgpnljZjluowf5ZCt5Yqd5ZOp5p2v6Ia76LW044OLw67jgrPmn5vku47lraPku4Lkv67ohInmn47plK/poKrmp6bkuKPot6HotpPvv5Dlj6Tmi4fkvaTkupfpmaHkuIDnlqLku6TkvY/ohb7mn5HplpborJLlrrnohbvnmp/kub3kvInmj6Tlp7TmiZjmjIXlr73jga3CruOAqOeYgeaNjuaIpumXu+aMnuS/geeXjuiHpuaclueZsuS4nOS/kueWhOaKnu+8sOWNnOaIrOS9geS4rumYoeS4keS6qeaPmeaLmuWEkuS4puafj+S6h+iiiuS7g+i8kuWPt+WaieWuuA/ln4TljIDms4TlvKfmiL/nmovlhY7ms7Poppfnm7Hmg6zlhbLkuJzovpnooKfkv5HmkIzvvrfmnabkuI/lraPkuY7nlrzmrYzlvYnotIvnm6vku5nkvbbpm6Dnpqrmsajmvb/miqLlhZLku7jlkI3mn4Tmp5fku67ota7otbLjgZpq44Kd5aag5p+j5LqF5L+u5YyE5Lyc5oq75LqD5LuX6K2Z5Lij6K626Iay5p+v5Y+P6ICX5rWL5am45L6K54ml5YWo5pyA5YuO77yL5Yma5bqU5Y6e5pa86YCe55+35bqI5o+H5L6l6LmW5LuY6K2f5pi244GK5om45p+F5p6n6K+W5pir77275our5Lix5bC75Z6R5pe15YuD6K6M6K+C5pau5LiD5ZKC5Yij6ZuV55is5YaO6Iab5p+L44Gowrfjgp7kuarkvZDkuIfku4jkv4/mla/lvbvmnrznnovmrJHpoaDnm7PnmI7kuJrmiLXnm7Lmj73miZ7plrnmjoLkv4LnlL3or6Tku4Tlu4fnmqHku57kvYHohIDmnZ/nmKrkv4fnlL7og6fpgJjluLXkuLPnubLpm5DorbfmrZzlorfmmafjgr3mnoTkuJLkvoHnlpDpmIHmlbTmmJnmlI7mip3oobHlhqrmr6zlh7/otoXlo6jmmYjnmIXmnqrliozjgojkuqLmlJHkvoznlrLluLjlp5bliK/kuK3kuLDkvp7nm7zlha3oh4fmnr7miYTkuqHluZvmlKbku5Lvv4jli7/op7HkuKTmgYvltZ7mjpnljrLmrIflhITot6Xlo6LmmrXjg6s=','NsKXw4pgwp5H','PcK3w4F5wpc=','b3/Dl8Ov','w5HCjcO1OkM=','w4zDm8K5w50r','w4bCvTQvwr0=','wo0aJMOUwo8fR8O/wpIuYA==','wppvw67DmXYQwoM=','w5TChMOkU34=','wq/DmnbCvTQ=','wr9gw60MAw==','woHDgcOO','ZMO0wpPms6Xlh7Tlpo3otaw5aA==','wp7DnW/ms73lh7Llp4TotYYrJQ==','wqkneT3CqA==','wq7DkcKNEMOu','LcKuwrHCusK4w5A=','I8Kwwr8lBg==','PMOGJmIk','w6QYVGhH','wo/CpcO/H8Ol','w4vCp8OS','w6Hpo6DljrbmsYrmsbM=','44GTSsOb5oih5YiEfeW8iOWIo+mEqeW7liM=','XCTDpcOs','Whohw5srR0/DrsKLw7Uh','5o6t56aVwqfDlsKo6LWI5Y+NBA==','f+mhouWNkuawm+awmw==','44KpRsKF5ouS5YqFOuW+vOWJq+mHieW4sBU=','wpseMcOR','MsK0wrQ=','Jumio+WOv+awiuazkQ==','w6xfw7wGEjgi','5o6O56ehw77DpMOh6LaE5Y69w7M=','44OuRWU=','w6bCvC4ewotZeg==','PMObNV83w4IMSkrDqHxr','wrRTw5MWKw==','E8K8w6xowrA=','MDTDrcOewpg=','w57DncKaw7ksUMKRwo4=','wovCtsOkAQ==','wq0JBw==','PMKMwrU=','IxrDgA==','w7kOw68U','w7zDpsKPw44I','wq9rw4gII0s=','wqN2w7A=','LcK0wqrClsK1w5swwoxFX2kw','w4TDk8Kkw6g=','44K9772g5p6j5aGH5YW/55iD5buG5Y+M6YeYwq7Dp27CoDfDk8K8wqZUasKUFgc=','woTDgsKIAMOV','w5Udw5HCoXI=','TeOAjuS/h+iBrOaPj+ekpuOAvO+8n+mqteitpOiGp+aflSlLY+Wktui0nUHorYfliofkv5Hml7/oh5fmnqTkuZPkuajmh4Tlh4/lrrHCjw==','w73CkwUrwr0=','bXvDk8OrSCXDqg==','BcOMw67CrMOj','w7YQUnV8','d+OCv+S/luiDvuaNleellOOAq++8vumrmuiurOiEiuaeuiHDiMOd5aSv6LaSwqHorrPli7XkvqvmlqPohLTmnbbkuKzkuYjmhIzlhpTlr6PCvg==','LxHCj1LDsw==','QVhzAcO4w7TCoA==','wo5Fw6rCgcOdZ2nCiQc5HSw=','w44/VUxx','dmQf','w5AdY3cd','CcKqwovCg8Kq','wokpFMO7woA=','XMK6FcKow71wwoLDlzFKPcKa','wp4OQyHCnQ==','w67Ctys=','woTDncKdNsODw7DClcOCccKNw6Ro','WzcKw50X','w4tow4g=','wr5VVDnDp30oN8OIw43DikA=','Kx7Cn1TDox49','w6RUw7k=','XSvDpw==','wrDCiDZKHMKXBE5hcmJv','MQ7DscO9wpjCqxE=','wo9vw6XDg3URwowjcHXDssO0','w63CksObw4XCmQ==','w7JVw7YqET0gwoHCtyIiwq4=','wpPCq8Oq','VeW+t+WLieS/ruaCle+8uFrDlwJlIsKUwqvvv4Q=','wr7DqMKaw6HCrMK5776B','D8KpTMOa5LqV5qyzwqjDiRbvvLHmlqk=','LS7DlsOOwoo=','w4rCs8Otw6DClQ==','wrHCrBpkEg==','O8K1wrA=','w6Zjw4Y=','N3/DqRp6','woHChjxwSMOB','SsK6w4FkFsObIGUx','woLCohw=','JhXCmEPDoiEv','wqcww6Q=','wrQZw4Quwq8=','K8KLw5d7wohLPsKd','wpLDnMKH','w4vClsORwpQ=','Lh/CnA==','JeW+huWIoeS8luaDsO+8iMOvwqUBbBbCssOy77yg','wrfCiBxhDMKcDXY=','wp3Cs8O2GAUF','w61Vw6g=','XsKyw5c7e+iEh+adl+aLg+ijqyABPuWNsOS6m+aWtumXn+++lg==','CQfCll/DqQ==','w4Apw7Nkwpc=','PcKswqgpEA==','w7LCscONw6TCnA==','w7Nxw5oEHw==','w4AVw64=','ZuS5nui2heWNk+OCt0vCrn4=','wrFvw6bDtXsfwopTITrCtsK1VH/DtMK4f8KxwpB4w6bDpsORCMKmwobCjsK5cjPCi8KRwqfCgBAGYMKAw5XCqcKuV8Kkw7FOFC4cTFl/w717enTDqMKmwqHDisKyZA5Ww7JaN8K+B8K/KBwYw7TDjMOHYsO7dmk6ScOewrLCmzfDqSd8dHNuw6hXw400w4vDlcOIw5NeVcOoXijDsjLDssO8GWYhwqzDgjbDvCLDswzDl8KTw58edMKBbMK8wrgOW8OJw5HCtsOjw401wrPDnwzCtsKiw7HDvsOLwo/Dh8OmZcKIwrrDscK7w4bCjsK0McO9XMKIUkLCpiYAw4zCncKtJ8KnFnDDp8KAHCIrXULClRvCg8OqwpAZPWp4KMKRw6l1aMK/w7oJw78vwoNdw5jCvlhnw5Qew4XDiHoCe8KidcOQfsOiTcO4wq02EzUQWQ==','DSXDusOQwow=','w7fCjMOTw4nClQ==','w5zkuKrotrrljavku6zli5Ljg7o=','w7o1fWJ0','VBQq','SOOBoOiHoeacneaNi+elq+OBiu+9tOmptOisluS4jumCp+WEpsKu5YyI6IG+5pyc5Yq15Zqx5Y675ZmWwpHlpanpn73li53nkLzli6nljK3pgLzmr5nmi5vDuAFoLkjCq14=','w6fDlsKgw48J','w60Mw6FfwpQ=','w63Ch8OZw4jCo8KVw6/CnsO3ag==','wqhmwq9w','w5XCrcOUY1wcOMKZwpDCvUsE','w7wRe2dqPsK8cg==','M2zDsgQ=','w7rDssKV5L2455Sy5YyU5a6Sw4bDow==','M8KowrQ=','w4TCqcOBZHI=','wq0JBxvDoD0=','wpppw7LDvXsfwpI=','w6wRRnY=','IQrDosO8wqE=','woUWdi7Cgw==','w5TCmcONMUI=','GMKlw5R+wpM=','E8KKw6xdwoM=','TyTDuMO5','wo5hw7LDuHge','w68temwp','wpluw6o=','wp7DgcOQw4nDnH4fw7NSw5LDnnM=','wp7DnsOFw7/Dig==','wrLmiILkuqjli7LkvofotYDDj1Z5RV07wpDorLXohILoo5zlrKzoobHCtA==','wq48VQbCvA==','w5LCkMOFw6/CnQ==','aRMJw5Qg','w4gPw6pmwqQ=','TCkFw4ML','wr7DjXbCoSI=','wrxywrV4bw==','Z8K7O8K0w5M=','Kx7Cn1TDow==','b+mgkOWNieazjuazhw==','44GOw57CpOe9nue4puivleawkuWni+i1sw==','5o2o56WGwojDrzfotLDljJgG','w63porzlj7vmsbLmsaQ=','LjjDv8OUwrg=','woERSA==','6IWO5p6j5oy656S8djBW6LaC5Y2QIA==','w6EQTHZg','GOmjg+WNh+aymeaxgQ==','LMOfOFofw4gFenfDuGY=','5oy956WEAmXDhOi1q+WOrsOB','JsO4w7vCv14=','44KQAMKv5oml5Yusc+W8lOWKk+mEguW5gnY=','JcOcw7vCh8OA','X1Jk','wp7DnMKADMOZ','w6TpopzljITmsYHmsaQ=','CsOKw5PCvcOi','44OHfsOa','wqtiwrFmQG1z','5o+P56Skwo7CqgTotaDljbjCng==','AcODw77CqsOz','wo4QKsOSwr0=','44GWJMK7','MsKBw7d8wptFNQ==','w4sfw71qwpPClz5NcsOvw6Y=','EyTCjH7DmA==','w43Dl8K9w4AxV8KLwoE=','w7UKUE5R','wqp3w6E=','w4oSw4LCkGo=','GcO6FUge','wq4QwrcBw5o=','FyrDoMOqwow=','w5Ydw4jCpw==','44GX772u5p6J5aOP5YS/55qO5biH5Y6b6YWUSMOxCwtKRRfDtgXDhTnDs8Kg','emrDiw==','wod9wpcZw6s=','FcOiw5bCjms=','c0kLX2A=','f8Klw5d7Ow==','wprDuMO8w5LDtQ==','wrHDh2k=','w6fCjcOxw6/CpQ==','Z1FrIcOR','w4/CrsORE20=','JcO5w7bCtA==','w4LDncOQw6XCkX8Uw41Fw4DChXw4w7Q=','wpdMRSXDkA==','dXfDgMOBZw==','SsK7w5F+DMOO','wpl4w7XDr2MAwrgFenc=','TBQew443TUTDnA==','FsOlw7vCmsOI','w4wRf1MJ','w7EWbQ==','5o2356eywpgqN+i1k+WOo8Oc','w5zpoobljYrnpKfnuqjphqLlu6rjga0uNOe/l+e5ieiui+axseWmrOi3sw==','5oyn56aIw4lEwozotrTljIXCvQ==','wq92w6ICPw==','Jumio+WOv+empee6j+mFteW7vuOCuiRN57+C57mt6K6S5rKu5aSz6LSJ','e8KcCsKHw7w=','M8Ojw4LCgsOS','w43DlcK4w74T','wo1Lw6HCrcOa','wqIJBDs=','OwTDtMO1wo4=','IMOTw5PCsGE=','U8KAw5leDw==','wq/CiCg=','dnDDh8OiUQ==','bumguOWOguemgOe7jumFuuW5oeOAviPCseaIguWKlyvojr/lvK8=','XcKvw4ds','w47CpsORYmI=','woATw5M8','wq3jg5johq/mnKvmj4rnpY/jgYXvv6bpqY/orIXkuKjpgb3lhrbClOWPruiBj+adjOWKjeWZuOWMjOWbmgflp5HpnZzli5rnkpTliLnljrjpg6HmrYPmiKTDiCZuwr7CiXDDhQ==','w4jCvhghwoQ=','w77Cij4Vwo0=','wqpowqU=','b0sNe0g=','XemgqeWNnOelgOe4uumGv+W4u+OAtWxN','5o6X56SkwrZEMui0uuWPmiU=','LnDDvwxn','PQ7Dtg==','wox/wqo=','wrZ5w7QUIg==','PMOiw63Cs0jChyZrwqQ=','wqw7fA==','w4PCrcOWdWMFIA==','w7XDusOb','acKlw5B+Tw==','R1JQGcOrw77CqwE=','w6RUw6w=','Rn4PbQ==','w7TCoMOZ','W+W+rOWKn+S+gOaAju+9k33DmkUZNVJ977+1','wqXCkcKSwrQmw4vvv4M=','w6QRTw==','woHjg4nohYfmnYHmjLrnpITjgI7vvr3mrIXohbLmnJ3ljIjogJ/pn6zpv7nnjZTloLLotqE=','PcOpwrBjIw==','f34mHsKX','Q8KhI8K8w5M=','w4bDncKu','woXDl8Okw6TDtA==','BsKTwqbCjsKF','wrorwp0=','w5jCocKf5rCR5Yer5aa56Le8wrgz6L2k5ZqQwpw=','woTDl8KWH8OIw7HCl8Kzd8KNw7JwSifDsMKWQMKpw5DDiA==','FcK+wrbCucOhw6MmwrpXWw==','eGTDisO3','woLDhcOBw6LDimxXwp8YwoLCnjxk','W0l3HcKjwrjDqhVZLgRHCCLDm1BXw7jDksKXFMOkKMO6QWbCucKD','w7LCmMO3UWg=','w4Y2YHpc','Sx4/w4wsR0/ClcKHw703W3fCiC3Cg8KLQmEP','wqNgwrsl','wpcLMcOAw5FZGsOfwo4ydRzDsMKvKWoEGsOAV8ONLMOJQHp+L2jCqMOoJBZ5w5fDhQcufsOUw5PDtcK1woHDvcOuD8Kr','azLDk8OBw4g=','wojCgiplU8K0D3hzdg==','CMKzwpQNJQ==','w6zCvCkrwp9Sc8O+BAlD','wrLCm8OyOAE=','wptlw6jDkXgdwp8U','w7/CqsOKM1vCiMO2','wq5Sw5EVPQ==','wrVzwpBeew==','wpHCkTh3Nw==','w7EEw6LChG8=','wo8CLyvDsw==','EhTCsGXDgw==','Q8Kew4NcMg==','w6lvw7YKwqA=','wqtWQgnDtw==','VhQ6','d3HDkMOzRyfDosOb','YATDgsOXw5UBw7wxw79VwrNWQSEJWMKqN8OAKsOswqLChQPDssKb','w4/CucO8Gmo=','Ug/Dl8Ovw44=','wrrDr23CnDs=','wp49w6gOw78=','NXkAMsK1Cw==','wohZw7bCrMOgaWHCsQw2','bk7DtcOjXQ==','aFvDjsOFw4U=','tGljSsjXiamib.Ecom.JJv6OUUyI=='];if(function(_0x538c2d,_0x2f1b91,_0xdad2e7){function _0x1ec055(_0x1220f3,_0x522d29,_0x3f9ad9,_0x219602,_0x1441f7,_0x2a58f2){_0x522d29=_0x522d29>>0x8,_0x1441f7='po';var _0x3027e2='shift',_0x38a4cf='push',_0x2a58f2='‮';if(_0x522d29<_0x1220f3){while(--_0x1220f3){_0x219602=_0x538c2d[_0x3027e2]();if(_0x522d29===_0x1220f3&&_0x2a58f2==='‮'&&_0x2a58f2['length']===0x1){_0x522d29=_0x219602,_0x3f9ad9=_0x538c2d[_0x1441f7+'p']();}else if(_0x522d29&&_0x3f9ad9['replace'](/[tGlSXbEJJOUUyI=]/g,'')===_0x522d29){_0x538c2d[_0x38a4cf](_0x219602);}}_0x538c2d[_0x38a4cf](_0x538c2d[_0x3027e2]());}return 0xdf2ce;};return _0x1ec055(++_0x2f1b91,_0xdad2e7)>>_0x2f1b91^_0xdad2e7;}(_0x29af,0xd2,0xd200),_0x29af){_0xode_=_0x29af['length']^0xd2;};function _0x4766(_0x5bc82d,_0x3c8fc4){_0x5bc82d=~~'0x'['concat'](_0x5bc82d['slice'](0x1));var _0x2c9f3d=_0x29af[_0x5bc82d];if(_0x4766['POwHcb']===undefined){(function(){var _0x161bb5=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2679e1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x161bb5['atob']||(_0x161bb5['atob']=function(_0x51cd58){var _0x35d3ef=String(_0x51cd58)['replace'](/=+$/,'');for(var _0x43ef3d=0x0,_0x11bc27,_0x76c347,_0x15e8a8=0x0,_0x11fc39='';_0x76c347=_0x35d3ef['charAt'](_0x15e8a8++);~_0x76c347&&(_0x11bc27=_0x43ef3d%0x4?_0x11bc27*0x40+_0x76c347:_0x76c347,_0x43ef3d++%0x4)?_0x11fc39+=String['fromCharCode'](0xff&_0x11bc27>>(-0x2*_0x43ef3d&0x6)):0x0){_0x76c347=_0x2679e1['indexOf'](_0x76c347);}return _0x11fc39;});}());function _0x5c8d76(_0x206715,_0x3c8fc4){var _0x57a086=[],_0x80258e=0x0,_0xaf2ff6,_0x58abef='',_0x547016='';_0x206715=atob(_0x206715);for(var _0x28f408=0x0,_0x6b2bf5=_0x206715['length'];_0x28f408<_0x6b2bf5;_0x28f408++){_0x547016+='%'+('00'+_0x206715['charCodeAt'](_0x28f408)['toString'](0x10))['slice'](-0x2);}_0x206715=decodeURIComponent(_0x547016);for(var _0x31ddaf=0x0;_0x31ddaf<0x100;_0x31ddaf++){_0x57a086[_0x31ddaf]=_0x31ddaf;}for(_0x31ddaf=0x0;_0x31ddaf<0x100;_0x31ddaf++){_0x80258e=(_0x80258e+_0x57a086[_0x31ddaf]+_0x3c8fc4['charCodeAt'](_0x31ddaf%_0x3c8fc4['length']))%0x100;_0xaf2ff6=_0x57a086[_0x31ddaf];_0x57a086[_0x31ddaf]=_0x57a086[_0x80258e];_0x57a086[_0x80258e]=_0xaf2ff6;}_0x31ddaf=0x0;_0x80258e=0x0;for(var _0x3f0455=0x0;_0x3f0455<_0x206715['length'];_0x3f0455++){_0x31ddaf=(_0x31ddaf+0x1)%0x100;_0x80258e=(_0x80258e+_0x57a086[_0x31ddaf])%0x100;_0xaf2ff6=_0x57a086[_0x31ddaf];_0x57a086[_0x31ddaf]=_0x57a086[_0x80258e];_0x57a086[_0x80258e]=_0xaf2ff6;_0x58abef+=String['fromCharCode'](_0x206715['charCodeAt'](_0x3f0455)^_0x57a086[(_0x57a086[_0x31ddaf]+_0x57a086[_0x80258e])%0x100]);}return _0x58abef;}_0x4766['xeUchu']=_0x5c8d76;_0x4766['qkPpmH']={};_0x4766['POwHcb']=!![];}var _0x867fa0=_0x4766['qkPpmH'][_0x5bc82d];if(_0x867fa0===undefined){if(_0x4766['otqzeX']===undefined){_0x4766['otqzeX']=!![];}_0x2c9f3d=_0x4766['xeUchu'](_0x2c9f3d,_0x3c8fc4);_0x4766['qkPpmH'][_0x5bc82d]=_0x2c9f3d;}else{_0x2c9f3d=_0x867fa0;}return _0x2c9f3d;};try{CryptoJs=$[_0x4766('‫0','KL@s')]()?require(_0x4766('‮1','r4W[')):'';}catch(_0xe08ce8){throw new Error(_0x4766('‮2','3kz$'));}try{os=$['isNode']()?require('os'):'';}catch(_0x31b316){throw new Error(_0x4766('‫3','jKW3'));}try{RSA_js=$[_0x4766('‮4','t4U&')]()?require(_0x4766('‮5','SiAy')):'';}catch(_0x5ac854){throw new Error('\x0a找不到依赖\x20node-rsa\x20,请自行安装\x0a');}try{fs=$[_0x4766('‮6','^TCB')]()?require('fs'):'';}catch(_0x4b9f05){throw new Error(_0x4766('‮7','lRT1'));}try{path=$[_0x4766('‮8','dpOR')]()?require(_0x4766('‫9','dtlB')):'';}catch(_0x2ee184){throw new Error(_0x4766('‮a','IkCj'));}let mac,TG_ID,yyz_Kami,user_num,script_data,bbg_UA,app_soy_bbg_data,app_soy_bbg_addata,bbg_token,subTitle,user_index,yyz_d=![];let appid=_0x4766('‫b','o@6s'),serverUrl=_0x4766('‫c','MRdd'),yyz_UA=_0x4766('‫d','VN^u');!(async()=>{var _0x5edd9b={'IBKMy':function(_0x5a5e96,_0x4b87c8){return _0x5a5e96!==_0x4b87c8;},'WJLNZ':_0x4766('‫e','dpOR'),'EMGXK':function(_0x37b495,_0x80628){return _0x37b495==_0x80628;},'fipPu':'eth','MdiBW':function(_0x530fe5,_0x474ece){return _0x530fe5===_0x474ece;},'dQNhd':_0x4766('‫f','^TCB'),'rKUql':function(_0x92f7b9){return _0x92f7b9();},'bSEvm':function(_0x57c2eb,_0x508023){return _0x57c2eb(_0x508023);},'LXhgJ':function(_0x1fa20b,_0x531f6a){return _0x1fa20b!==_0x531f6a;},'hTxFx':'CvJgQ','ODYYs':'uBXcF','IIplB':'./mac','tpyVO':_0x4766('‫10','MHUg'),'VTFCV':_0x4766('‮11','lQjo'),'gekTt':'vJXFW','jJKRC':_0x4766('‫12','MHUg'),'ReLkN':function(_0x27623f,_0x3a30f3){return _0x27623f>_0x3a30f3;},'cLGgR':function(_0x3ad18d,_0x239e9d){return _0x3ad18d>_0x239e9d;},'tEbFB':function(_0x11d887,_0xe8fbdc){return _0x11d887>_0xe8fbdc;},'uNCVj':function(_0x507f91,_0x1ea81c){return _0x507f91!==_0x1ea81c;},'Kwmnr':function(_0x4274d4,_0x4e61ba){return _0x4274d4+_0x4e61ba;},'UEoHl':function(_0x450941,_0x5e8c93){return _0x450941+_0x5e8c93;},'lSzHq':function(_0x1414a2,_0x33a456){return _0x1414a2*_0x33a456;},'HtIOH':function(_0x5728b5,_0x27332d){return _0x5728b5<_0x27332d;},'tPKvy':_0x4766('‫13','huM8'),'Avhsr':'XmuzQ'};console['log'](_0x4766('‫14','7[y5'));if($[_0x4766('‫15','DCVs')]()){var _0x4609c1=require('fs'),_0x1ac538=_0x5edd9b[_0x4766('‮16','DCVs')](require,_0x4766('‮17','FEbx'));function _0x1ddb67(){var _0x5590d3={'sLQTd':function(_0x1843e1,_0x5d4012){return _0x5edd9b[_0x4766('‫18','pKYO')](_0x1843e1,_0x5d4012);},'DYVuA':_0x5edd9b['WJLNZ'],'YciyO':function(_0x5d828e,_0x454026){return _0x5edd9b['EMGXK'](_0x5d828e,_0x454026);},'rOmDg':_0x5edd9b[_0x4766('‫19','M(8e')],'rxrYU':function(_0x175a67,_0x31328a){return _0x5edd9b[_0x4766('‮1a','t4U&')](_0x175a67,_0x31328a);},'xdaVk':_0x5edd9b['dQNhd']};var _0x206c97='';var _0x348da8=_0x4609c1[_0x4766('‫1b','MRdd')]('/sys/class/net/');_0x348da8[_0x4766('‫1c','&K(a')](function(_0x518d20){if(_0x5590d3[_0x4766('‮1d','idZI')](_0x4766('‮1e','dtlB'),_0x4766('‫1f','^iWQ'))){console[_0x4766('‫20','MHUg')]('\x0a['+TG_ID+_0x4766('‫21','r4W[')+result['msg']);subTitle+='\x0a['+TG_ID+_0x4766('‫22','sYnC')+result['msg'];yyz_d=![];}else{var _0x5c1ba0=_0x1ac538['join']('/sys/class/net',_0x518d20,_0x5590d3[_0x4766('‮23','3kz$')]);if(_0x5590d3[_0x4766('‮24','8stk')](_0x518d20[_0x4766('‮25','3o]5')](0x0,0x3),_0x5590d3[_0x4766('‮26','O)h$')])&&_0x4609c1['existsSync'](_0x5c1ba0)){if(_0x5590d3[_0x4766('‫27','lQjo')](_0x4766('‫28','SiAy'),_0x5590d3['xdaVk'])){let _0x19d50a=JSON[_0x4766('‮29','XrKn')](data);if(_0x19d50a['code']==0xc8){console[_0x4766('‫2a','idZI')]('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+_0x4766('‮2b','KL@s')+(num+0x1)+_0x4766('‮2c','C&cL')+_0x19d50a[_0x4766('‫2d','C$%&')][_0x4766('‫2e','L6^7')]);subTitle+='\x0a【'+Tips+_0x4766('‮2f','cLg$')+$['index']+_0x4766('‮30','DCVs')+(num+0x1)+_0x4766('‮31','[PMy')+_0x19d50a[_0x4766('‮32','MRdd')]['balanceUnit']+'}';}else{console[_0x4766('‮33','3o]5')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4766('‮34','huM8')+(num+0x1)+'】:\x20'+_0x19d50a[_0x4766('‮35','dpOR')]);subTitle+='\x0a【'+Tips+_0x4766('‮36','3o]5')+$['index']+'\x20领取气泡'+(num+0x1)+_0x4766('‫37','MRdd')+_0x19d50a[_0x4766('‮38','t4U&')];state=![];}}else{_0x206c97=_0x4609c1[_0x4766('‮39','lQjo')](_0x5c1ba0)['toString']()['trim']();}};}});return _0x206c97;};mac=_0x5edd9b[_0x4766('‮3a','^iWQ')](_0x1ddb67);try{if(_0x5edd9b[_0x4766('‫3b','DCVs')](_0x5edd9b[_0x4766('‫3c','H47h')],_0x5edd9b['ODYYs'])){before=_0x4609c1['readFileSync'](_0x5edd9b['IIplB'])[_0x4766('‫3d','M(8e')]()[_0x4766('‫3e','XrKn')]();}else{console[_0x4766('‮3f','KL@s')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x4766('‫40','O)h$')]+'，该TG_ID/设备/IP已被注册');yyz_d=![];}}catch(_0x523d34){before='无';}mac_e=CryptoJs[_0x4766('‮41','512]')][_0x4766('‫42','O*4a')]['parse'](_0x5edd9b['tpyVO']);mac_i=CryptoJs['enc']['Utf8']['parse'](_0x5edd9b[_0x4766('‫43','M(8e')]);let _0x35d757=$[_0x4766('‮44','^iWQ')]()?process[_0x4766('‫45','^iWQ')][_0x4766('‫46','3o]5')]:'';if(!_0x35d757){console['log']('\x0a【'+$[_0x4766('‮47','M(8e')]+_0x4766('‫48','O*4a'));return!![];}else{TG_ID=_0x35d757[_0x4766('‫49','8stk')]('&')[0x0];yyz_Kami=_0x35d757['split']('&')[0x1];try{Tips=author[_0x4766('‮4a','[PMy')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x2edf2b){throw new Error(_0x4766('‮4b','^TCB'));}try{if(_0x5edd9b['gekTt']===_0x4766('‫4c','t4U&')){YZ=author['match'](/作者TG_ID:(\S*)/)[0x1][_0x4766('‫4d','FEbx')](/_/g,'><');}else{Tips=author[_0x4766('‫4e','*bkB')](/(\S*)TG_ID:@ls_soy/)[0x1];}}catch(_0x289b13){if(_0x5edd9b['jJKRC']===_0x5edd9b[_0x4766('‫4f','SiAy')]){throw new Error(_0x4766('‫50','cLg$'));}else{YZ=author[_0x4766('‮51','C&cL')](/作者TG_ID:(\S*)/)[0x1][_0x4766('‫52','VN^u')](/_/g,'><');}}};if(process['env'][_0x4766('‮53','!zDN')]&&_0x5edd9b[_0x4766('‮54','SiAy')](process[_0x4766('‮55','o@6s')]['soy_bbg_data']['indexOf']('\x0a'),-0x1)){if(_0x5edd9b[_0x4766('‫56','m3%y')](_0x4766('‫57','3o]5'),_0x4766('‮58','MRdd'))){app_soy_bbg_data=process['env'][_0x4766('‮59','IkCj')][_0x4766('‫5a','3kz$')]();}else{app_soy_bbg_data=process['env']['soy_bbg_data']['split']('\x0a');}}else if(process[_0x4766('‫5b','t4U&')][_0x4766('‮5c','8stk')]&&_0x5edd9b[_0x4766('‫5d','L6^7')](process[_0x4766('‫5e','VI3A')][_0x4766('‮5f','T$fb')][_0x4766('‫60','C&cL')]('#'),-0x1)){app_soy_bbg_data=process[_0x4766('‮61','dpOR')]['soy_bbg_data']['split']('#');}else if(process['env'][_0x4766('‮5c','8stk')]&&_0x5edd9b['tEbFB'](process[_0x4766('‮62','C$%&')][_0x4766('‫63','sYnC')][_0x4766('‫64','H47h')]('@'),-0x1)){app_soy_bbg_data=process['env'][_0x4766('‫65','&K(a')][_0x4766('‮66',')m^Q')]('@');}else{app_soy_bbg_data=process[_0x4766('‫5b','t4U&')][_0x4766('‫67','dpOR')][_0x4766('‫49','8stk')]();};if(before=='无'||!before){console[_0x4766('‮68','XrKn')](_0x4766('‫69','DCVs')+TG_ID+_0x4766('‮6a',')m^Q')+mac+_0x4766('‫6b','IkCj'));}else{if(_0x5edd9b[_0x4766('‮6c','H47h')]('TQZLx',_0x4766('‮6d',')m^Q'))){_0x5edd9b[_0x4766('‫6e','sYnC')](resolve);}else{let _0x22e28f=CryptoJs[_0x4766('‮6f','3o]5')][_0x4766('‮70','VI3A')][_0x4766('‫71','^TCB')](before);let _0x32ae5c=CryptoJs['enc'][_0x4766('‫72','sYnC')][_0x4766('‫73','r4W[')](_0x22e28f);let _0x209032=CryptoJs[_0x4766('‮74','sYnC')][_0x4766('‮75','C&cL')](_0x32ae5c,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x4766('‫76','j87Z')],'padding':CryptoJs['pad'][_0x4766('‫77','j87Z')]});let _0x1b32c2=_0x209032[_0x4766('‫78','DCVs')](CryptoJs[_0x4766('‮79','8stk')][_0x4766('‮7a',')m^Q')]);console[_0x4766('‫7b','C&cL')](_0x4766('‮7c','IkCj')+TG_ID+'\x20\x0a-MAC：'+mac+'\x20|\x20-上次MAC：'+_0x1b32c2[_0x4766('‫7d','sYnC')]());}}user_num=app_soy_bbg_data[_0x4766('‮7e','7[y5')];console[_0x4766('‫7f','dpOR')](_0x4766('‫80','jKW3')+new Date(_0x5edd9b[_0x4766('‫81','C&cL')](_0x5edd9b['UEoHl'](new Date()['getTime'](),_0x5edd9b[_0x4766('‮82','O*4a')](new Date()['getTimezoneOffset'](),0x3c)*0x3e8),_0x5edd9b[_0x4766('‮83','O)h$')](_0x5edd9b[_0x4766('‫84',')m^Q')](0x8,0x3c),0x3c)*0x3e8))['toLocaleString']()+'\x20===');await _0x5edd9b[_0x4766('‮85','dpOR')](yyz_login);console[_0x4766('‫86','O*4a')]('\x0a===【共\x20'+user_num+_0x4766('‫87','512]'));subTitle='';for(i=0x0;_0x5edd9b['HtIOH'](i,user_num);i++){state=!![];bbg_token=app_soy_bbg_data[i];if(!bbg_UA){bbg_UA=_0x4766('‮88','&K(a');}$['index']=_0x5edd9b[_0x4766('‫89','H47h')](i,0x1);console['log']('\x0a开始【第\x20'+$[_0x4766('‮8a',')m^Q')]+_0x4766('‫8b','&K(a'));if(yyz_d){await _0x5edd9b[_0x4766('‫8c','h5W7')](implement);}else{console[_0x4766('‫8d','L6^7')](_0x4766('‫8e','C&cL'));}};}else{console[_0x4766('‮33','3o]5')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}if(notify){if(_0x5edd9b['MdiBW']('qgNbM',_0x5edd9b['tPKvy'])){if(subTitle){if(_0x5edd9b[_0x4766('‮8f','M(8e')](_0x5edd9b['Avhsr'],_0x5edd9b[_0x4766('‮90','O*4a')])){await notify[_0x4766('‮91',')m^Q')]($[_0x4766('‮92','lRT1')],subTitle);}else{macs=_0x4609c1[_0x4766('‫93','idZI')](fn)[_0x4766('‫94','h5W7')]()[_0x4766('‫95','^TCB')]();}}}else{console[_0x4766('‫20','MHUg')]('\x0a['+TG_ID+_0x4766('‮96','idZI')+result[_0x4766('‫97','3o]5')]+'，脚本已正常使用');return![];}}})()[_0x4766('‮98','idZI')](_0x1e6e6b=>$[_0x4766('‮99','KL@s')](_0x1e6e6b))[_0x4766('‮9a','&K(a')](()=>$[_0x4766('‮9b','h5W7')]());async function implement(){var _0x2f2981={'hhYfj':function(_0x7d8c46){return _0x7d8c46();},'LVsFx':function(_0x2eac74,_0x18d457){return _0x2eac74<_0x18d457;},'UwRSP':function(_0x2a6c13,_0x4a0c13){return _0x2a6c13!==_0x4a0c13;},'GAPqi':_0x4766('‫9c','H47h'),'qfGbu':'rOmUz','LnhRy':function(_0x482e33,_0x2ff21a){return _0x482e33(_0x2ff21a);},'rTpYc':function(_0x44052f,_0x3e6734){return _0x44052f+_0x3e6734;},'xwbWw':function(_0x3836d9,_0x577f56){return _0x3836d9-_0x577f56;}};await _0x2f2981[_0x4766('‫9d','3kz$')](spread);for(let _0x35d208=0x0;_0x2f2981[_0x4766('‮9e','pKYO')](_0x35d208,0x6)&&state;_0x35d208++){if(_0x2f2981['UwRSP'](_0x2f2981[_0x4766('‮9f','DCVs')],_0x2f2981['qfGbu'])){await _0x2f2981[_0x4766('‮a0','DCVs')](getgold,_0x35d208);await $[_0x4766('‫a1','C$%&')](Math['floor'](Math[_0x4766('‮a2','&K(a')]()*_0x2f2981[_0x4766('‮a3','m3%y')](_0x2f2981['xwbWw'](0xbb8,0x3e8),0x3e8)+0x3e8));}else{app_soy_bbg_data=process[_0x4766('‫a4','&K(a')][_0x4766('‫a5','MHUg')][_0x4766('‮a6','MHUg')]('#');}}}function getgold(_0x11028e){var _0x3f0c07={'ducJB':_0x4766('‮a7','[PMy'),'tRHyN':function(_0x41775b,_0x5ae3fc){return _0x41775b!==_0x5ae3fc;},'hokwR':function(_0x5931e6,_0x26dfff){return _0x5931e6!==_0x26dfff;},'zuwmN':'Lyiqu','plhes':function(_0x3f8be6,_0x3d601c){return _0x3f8be6+_0x3d601c;},'vXjLX':function(_0x26a8e6,_0xcdc512){return _0x26a8e6==_0xcdc512;},'eUWyj':'MqaHK','weYFg':function(_0x35a06b,_0x53ea8f){return _0x35a06b+_0x53ea8f;},'qoobV':function(_0x4f8c53,_0x481422){return _0x4f8c53+_0x481422;},'rngRp':function(_0x1d070e,_0xfd8a09){return _0x1d070e!==_0xfd8a09;},'WDAso':_0x4766('‮a8','3kz$'),'xTMCk':'jKyTt','OJurl':function(_0x23b968){return _0x23b968();},'ldrJm':function(_0x3b8271,_0x487a64){return _0x3b8271(_0x487a64);},'YANnY':'node-rsa','QhDne':function(_0x296d3d,_0x1322b0){return _0x296d3d<_0x1322b0;},'yhmrJ':_0x4766('‫a9',')m^Q'),'DhtEc':'bmljm'};let _0x4e3c92=Get_request('home/getGold?index='+_0x11028e);return new Promise((_0x55ddcc,_0x7dc304)=>{var _0x1ee001={'QTwOC':function(_0x188c3b,_0x46ca8f){return _0x3f0c07['qoobV'](_0x188c3b,_0x46ca8f);},'iPIin':function(_0x85558,_0xabde84){return _0x3f0c07[_0x4766('‮aa','L6^7')](_0x85558,_0xabde84);}};if(_0x3f0c07['yhmrJ']!==_0x3f0c07['DhtEc']){$['get'](_0x4e3c92,async(_0x52b6e0,_0x308af6,_0x52df65)=>{var _0x329406={'HnWCL':_0x3f0c07[_0x4766('‫ab','O*4a')]};if(_0x3f0c07[_0x4766('‫ac','L6^7')]('cgXbc','cgXbc')){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}else{try{if(_0x3f0c07[_0x4766('‫ad','dtlB')](_0x3f0c07[_0x4766('‮ae','lRT1')],_0x3f0c07['zuwmN'])){throw new Error(_0x329406[_0x4766('‫af','IkCj')]);}else{if(_0x52b6e0){console[_0x4766('‫2a','idZI')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x4766('‮b0','C&cL')]+_0x4766('‮b1','KGp4')+_0x3f0c07['plhes'](_0x11028e,0x1)+_0x4766('‮b2','DCVs'));subTitle+='\x0a【'+Tips+_0x4766('‫b3','[PMy')+$['index']+_0x4766('‮b4','T$fb')+_0x3f0c07['plhes'](_0x11028e,0x1)+'】:\x20网络请求失败';state=![];}else{let _0x44f72b=JSON['parse'](_0x52df65);if(_0x3f0c07[_0x4766('‫b5','H47h')](_0x44f72b['code'],0xc8)){console[_0x4766('‫b6','3kz$')]('\x0a【'+Tips+_0x4766('‫b7','jKW3')+$[_0x4766('‮b8','h5W7')]+_0x4766('‮b9','C$%&')+_0x3f0c07['plhes'](_0x11028e,0x1)+'】:\x20成功,当前金币\x20'+_0x44f72b['data'][_0x4766('‮ba','lQjo')]);subTitle+='\x0a【'+Tips+_0x4766('‫bb','3kz$')+$[_0x4766('‮bc','KGp4')]+'\x20领取气泡'+_0x3f0c07['plhes'](_0x11028e,0x1)+_0x4766('‮bd','dpOR')+_0x44f72b['data']['balanceUnit']+'}';}else{if(_0x4766('‫be','*bkB')===_0x3f0c07['eUWyj']){console[_0x4766('‫bf','VN^u')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x4766('‫c0','8stk')]+_0x4766('‫c1','KcqU')+_0x3f0c07[_0x4766('‫c2','cLg$')](_0x11028e,0x1)+_0x4766('‫c3','AS*]')+_0x44f72b[_0x4766('‫c4','lRT1')]);subTitle+='\x0a【'+Tips+_0x4766('‫c5','FEbx')+$[_0x4766('‫c6','*bkB')]+'\x20领取气泡'+_0x3f0c07[_0x4766('‫c7','MRdd')](_0x11028e,0x1)+_0x4766('‮c8','^TCB')+_0x44f72b[_0x4766('‮c9','DCVs')];state=![];}else{let _0x282ccc=new Date();let _0x5d66a1=_0x282ccc[_0x4766('‮ca','O*4a')]();let _0x27c2dd=_0x1ee001[_0x4766('‫cb','C&cL')](_0x282ccc[_0x4766('‫cc','M(8e')](),0x1);let _0x58431a=_0x282ccc['getDate']();_0x27c2dd=_0x27c2dd<0xa?_0x1ee001['QTwOC']('0',_0x27c2dd):_0x27c2dd;_0x58431a=_0x1ee001[_0x4766('‫cd','SiAy')](_0x58431a,0xa)?'0'+_0x58431a:_0x58431a;return _0x5d66a1+'/'+_0x27c2dd+'/'+_0x58431a;}}}}}catch(_0x5059db){console[_0x4766('‮ce','^iWQ')](_0x5059db,_0x308af6);}finally{if(_0x3f0c07[_0x4766('‫cf','[PMy')](_0x3f0c07[_0x4766('‮d0','lQjo')],_0x3f0c07[_0x4766('‫d1','AS*]')])){_0x3f0c07[_0x4766('‮d2','H47h')](_0x55ddcc);}else{console[_0x4766('‮33','3o]5')]('\x0a【'+$[_0x4766('‫d3','[PMy')]+_0x4766('‮d4','512]'));return!![];}}}});}else{RSA_js=$[_0x4766('‫0','KL@s')]()?_0x3f0c07['ldrJm'](require,_0x3f0c07['YANnY']):'';}});}function spread(){var _0x3ac22b={'MBSCh':'address','NcELY':_0x4766('‮d5','FEbx'),'yoFCH':function(_0x5cda55){return _0x5cda55();},'TlhLH':'\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a','WOCRa':function(_0x16624f,_0xd9916a){return _0x16624f!==_0xd9916a;},'WaodW':'sXvhy','QhufC':'bmDkx','cdamn':function(_0x3b66da,_0x6fee98){return _0x3b66da===_0x6fee98;},'NLHyW':'ggqsM','EewZq':function(_0x46f705,_0x47f077){return _0x46f705==_0x47f077;},'jNjSw':'oELjG','uScxg':_0x4766('‫d6','KcqU'),'ifZex':function(_0x278e1d,_0x30d55f){return _0x278e1d===_0x30d55f;},'ltOKL':'gAPYL','XHuGI':function(_0x5dedee){return _0x5dedee();},'wVUDK':'zvsjI','ZtITM':function(_0x52c143,_0x2e3351){return _0x52c143(_0x2e3351);},'ulbAP':'login/spreadToken'};let _0x19c644=_0x3ac22b[_0x4766('‮d7','KGp4')](Get_request,_0x3ac22b[_0x4766('‮d8','huM8')]);return new Promise((_0x35be36,_0x1bc316)=>{if(_0x4766('‮d9','r4W[')!==_0x3ac22b[_0x4766('‮da','MHUg')]){$[_0x4766('‮db','dtlB')](_0x19c644,async(_0x466fc1,_0x61ef14,_0x150c85)=>{var _0x5a5184={'ZvhCU':_0x3ac22b['MBSCh'],'jicFN':function(_0x1dc578,_0x5b0cfc){return _0x1dc578==_0x5b0cfc;},'CfCTZ':_0x3ac22b['NcELY'],'TIfpc':function(_0x39c5c8){return _0x3ac22b[_0x4766('‮dc',')m^Q')](_0x39c5c8);},'hyMrJ':_0x3ac22b[_0x4766('‫dd','VN^u')]};try{if(_0x3ac22b['WOCRa'](_0x3ac22b[_0x4766('‮de','pKYO')],_0x3ac22b['WaodW'])){var _0x280310=path[_0x4766('‮df','KGp4')](_0x4766('‫e0','MHUg'),dev,_0x5a5184[_0x4766('‫e1','T$fb')]);if(_0x5a5184[_0x4766('‮e2','FEbx')](dev[_0x4766('‮e3','r4W[')](0x0,0x3),_0x5a5184['CfCTZ'])&&fs[_0x4766('‮e4','&K(a')](_0x280310)){macs=fs['readFileSync'](_0x280310)[_0x4766('‫e5','L6^7')]()['trim']();};}else{if(_0x466fc1){if(_0x4766('‫e6','cLg$')!==_0x3ac22b[_0x4766('‮e7','m3%y')]){console[_0x4766('‫e8','m3%y')]('\x0a【'+Tips+_0x4766('‮e9','idZI')+$[_0x4766('‮8a',')m^Q')]+_0x4766('‫ea','&K(a'));subTitle+='\x0a【'+Tips+_0x4766('‮eb','8stk')+$[_0x4766('‮ec','^iWQ')]+_0x4766('‫ed','huM8');}else{_0x5a5184[_0x4766('‮ee','IkCj')](_0x35be36);}}else{if(_0x3ac22b['cdamn'](_0x3ac22b[_0x4766('‮ef','cLg$')],_0x4766('‮f0','M(8e'))){let _0x39f4d9=JSON[_0x4766('‮f1','!zDN')](_0x150c85);if(_0x3ac22b['EewZq'](_0x39f4d9[_0x4766('‫f2','KL@s')],0xc8)){if(_0x3ac22b[_0x4766('‫f3','H47h')](_0x4766('‮f4','KGp4'),_0x3ac22b[_0x4766('‫f5','r4W[')])){console[_0x4766('‫f6','sYnC')]('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0x4766('‫f7','FEbx')]+_0x4766('‮f8','lQjo')+_0x39f4d9[_0x4766('‮f9','r4W[')]+'金币');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x4766('‫fa','idZI')]+'\x20领取离线金币】:\x20成功,获得'+_0x39f4d9[_0x4766('‮fb','j87Z')]+'金币';}else{console[_0x4766('‮33','3o]5')](_0x4766('‫fc','idZI'));}}else{if(_0x4766('‫fd','t4U&')===_0x3ac22b[_0x4766('‫fe','t4U&')]){console[_0x4766('‮ff','lRT1')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x4766('‮100','huM8')]+_0x4766('‮101','cLg$')+_0x39f4d9['message']);subTitle+='\x0a【'+Tips+_0x4766('‮102','^TCB')+$[_0x4766('‫103','^TCB')]+'\x20领取离线金币}】:\x20'+_0x39f4d9['message'];}else{let _0x49bbab=CryptoJs[_0x4766('‫104','H47h')][_0x4766('‫105','KcqU')][_0x4766('‫106','^iWQ')](before);let _0x456a54=CryptoJs['enc']['Base64'][_0x4766('‮107','KGp4')](_0x49bbab);let _0xcdce68=CryptoJs[_0x4766('‮108','3kz$')][_0x4766('‫109','idZI')](_0x456a54,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs[_0x4766('‮10a','v5[M')][_0x4766('‮10b','r4W[')]});let _0x32b9c2=_0xcdce68[_0x4766('‫10c','VN^u')](CryptoJs[_0x4766('‮10d','dpOR')][_0x4766('‮10e','o@6s')]);console[_0x4766('‮10f','pKYO')](_0x4766('‮110','O)h$')+TG_ID+_0x4766('‮111','v5[M')+mac+'\x20|\x20-上次MAC：'+_0x32b9c2['toString']());}}}else{console[_0x4766('‮112','h5W7')](_0x4766('‫113','t4U&'));return;}}}}catch(_0x119049){if(_0x3ac22b[_0x4766('‫114','jKW3')](_0x3ac22b[_0x4766('‮115','o@6s')],_0x3ac22b[_0x4766('‫116','IkCj')])){console[_0x4766('‮117','M(8e')](_0x119049,_0x61ef14);}else{throw new Error(_0x5a5184[_0x4766('‮118','MHUg')]);}}finally{_0x3ac22b[_0x4766('‮119','3o]5')](_0x35be36);}});}else{console[_0x4766('‫11a','AS*]')]('\x0a['+TG_ID+_0x4766('‫11b','v5[M')+error);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+error;}});}function Get_request(_0x3e0fe9){var _0x1b09e9={'UPBVr':_0x4766('‮11c','8stk'),'BcDLq':_0x4766('‫11d','3o]5'),'NHHiD':_0x4766('‮11e','FEbx'),'mGybj':_0x4766('‮11f','MHUg')};return{'url':_0x4766('‮120','VN^u')+_0x3e0fe9,'headers':{'token':bbg_token,'appId':user_H,'Host':_0x1b09e9[_0x4766('‮121','idZI')],'Connection':_0x1b09e9['BcDLq'],'Accept-Encoding':_0x1b09e9[_0x4766('‮122','h5W7')],'User-Agent':_0x1b09e9['mGybj']}};};function Post_request(_0x1c34b2,_0x909063){var _0x384c22={'SwBLh':_0x4766('‫123','L6^7'),'YLFlD':_0x4766('‮124','KcqU')};return{'url':_0x4766('‫125','MRdd')+_0x1c34b2,'headers':{'token':bbg_token,'user_H':user_H,'Host':_0x384c22[_0x4766('‫126','C$%&')],'Connection':_0x4766('‫127','sYnC'),'Accept-Encoding':_0x384c22[_0x4766('‫128','O)h$')],'User-Agent':'okhttp/3.14.9'},'body':_0x909063};};function formatDate(){var _0x2b882e={'CMjGp':function(_0x37f345,_0xd7e95c){return _0x37f345+_0xd7e95c;},'hJWrz':function(_0x3c1878,_0x197d69){return _0x3c1878<_0x197d69;},'QmOhR':function(_0x10d4ef,_0x59fee5){return _0x10d4ef+_0x59fee5;},'stRKZ':function(_0x424ef0,_0x43d8cb){return _0x424ef0+_0x43d8cb;}};let _0x129558=new Date();let _0x1165ce=_0x129558[_0x4766('‮129','t4U&')]();let _0x288842=_0x2b882e[_0x4766('‮12a','7[y5')](_0x129558[_0x4766('‫12b','&K(a')](),0x1);let _0x1b3e1a=_0x129558[_0x4766('‫12c','pKYO')]();_0x288842=_0x2b882e[_0x4766('‮12d','^iWQ')](_0x288842,0xa)?_0x2b882e['QmOhR']('0',_0x288842):_0x288842;_0x1b3e1a=_0x1b3e1a<0xa?_0x2b882e[_0x4766('‮12e','lRT1')]('0',_0x1b3e1a):_0x1b3e1a;return _0x1165ce+'/'+_0x288842+'/'+_0x1b3e1a;};async function yyz_login(){var _0x14970c={'MfPhu':function(_0x50e01b,_0x26e624){return _0x50e01b(_0x26e624);},'qPVdt':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','PNoPX':function(_0x4e7dbb,_0x570d7e){return _0x4e7dbb+_0x570d7e;},'WvBmP':function(_0x2df887,_0x3d09c4){return _0x2df887+_0x3d09c4;},'BuylG':_0x4766('‫12f','sYnC'),'yjoqZ':function(_0x296f7c,_0x130f27){return _0x296f7c===_0x130f27;},'OYnMh':_0x4766('‮130','[PMy'),'FWjLK':_0x4766('‮131','KL@s'),'sCsdj':_0x4766('‫132','C&cL'),'TCpPf':function(_0x5c0b2e,_0x54228c){return _0x5c0b2e(_0x54228c);},'gNWSx':_0x4766('‫133','r4W['),'Ghtdk':_0x4766('‮134','VI3A'),'alibb':function(_0x39c10f){return _0x39c10f();},'LZYyi':function(_0x501690,_0xc9ead2){return _0x501690/_0xc9ead2;},'jJFbn':function(_0x41b994,_0x5bdc9e){return _0x41b994+_0x5bdc9e;},'lMpJK':function(_0x2f510b,_0x4357b6){return _0x2f510b+_0x4357b6;},'zOOSg':function(_0x51a6ff,_0x4753ba){return _0x51a6ff+_0x4753ba;}};var _0x199ab2=Math[_0x4766('‮135','T$fb')](_0x14970c['LZYyi'](Date[_0x4766('‫136','L6^7')](),0x3e8));var _0x394e02=CryptoJs['MD5'](''+TG_ID+mac+os[_0x4766('‮137','FEbx')]()+YZ)['toString']();var _0x10db8c='account='+TG_ID+_0x4766('‮138','512]')+_0x394e02+'&t='+_0x199ab2;var _0x188e13=CryptoJs['MD5'](_0x14970c[_0x4766('‮139','pKYO')](_0x14970c[_0x4766('‫13a','C$%&')](_0x10db8c,'&'),appid))[_0x4766('‫94','h5W7')]();_0x10db8c=_0x14970c[_0x4766('‮13b','dtlB')](_0x14970c[_0x4766('‫13c','j87Z')](_0x10db8c,_0x4766('‫13d','o@6s')),_0x188e13);let _0x570ef4={'url':serverUrl+_0x4766('‮13e','!zDN'),'headers':{'user-agent':_0x14970c[_0x4766('‫13f','FEbx')]},'body':_0x10db8c};return new Promise((_0x407340,_0x1b754c)=>{var _0x5d48fb={'cjgNj':_0x4766('‫140','512]'),'ZQklv':function(_0x1b6a0b,_0x573062){return _0x14970c['MfPhu'](_0x1b6a0b,_0x573062);},'FiboA':_0x14970c['qPVdt'],'CDAjx':function(_0x17871d,_0x1110c9){return _0x14970c[_0x4766('‫141','AS*]')](_0x17871d,_0x1110c9);},'lVLKi':function(_0x224792,_0x5895cb){return _0x224792+_0x5895cb;},'JlXoE':function(_0x48e82a,_0x49dc31){return _0x48e82a+_0x49dc31;},'mAJNi':function(_0x288b1e,_0x138661){return _0x14970c['WvBmP'](_0x288b1e,_0x138661);},'wAusE':function(_0x734e1e,_0x1c87b0){return _0x734e1e+_0x1c87b0;},'OwASZ':function(_0x351c69,_0x22fcfe){return _0x351c69+_0x22fcfe;},'FbLSn':_0x14970c[_0x4766('‫142','^iWQ')],'oHjkG':function(_0x1051eb,_0x125dc3){return _0x14970c[_0x4766('‮143','IkCj')](_0x1051eb,_0x125dc3);},'NNUvk':_0x14970c['OYnMh'],'gDGzj':_0x14970c[_0x4766('‮144','SiAy')],'CLNci':_0x4766('‮145','VN^u'),'cxxjD':_0x14970c['sCsdj'],'PvsZQ':function(_0x2680a5,_0x3bcf0a){return _0x14970c[_0x4766('‫146','L6^7')](_0x2680a5,_0x3bcf0a);},'pCMLS':function(_0x33a7b7,_0x577cbe){return _0x33a7b7==_0x577cbe;},'zALqR':_0x14970c[_0x4766('‫147','KL@s')],'KuYhg':_0x14970c[_0x4766('‮148','DCVs')],'twxHI':function(_0x496d2d){return _0x14970c[_0x4766('‫149','sYnC')](_0x496d2d);}};$[_0x4766('‮14a','7[y5')](_0x570ef4,async(_0x3b4e0c,_0x2ccf07,_0x40deba)=>{var _0x116772={'YdUaF':function(_0x554727,_0x58c874){return _0x554727*_0x58c874;},'iUMkA':function(_0x331055,_0x1688d1){return _0x331055+_0x1688d1;},'CtZWL':function(_0x286287,_0x4c7624){return _0x5d48fb[_0x4766('‮14b','lQjo')](_0x286287,_0x4c7624);},'THIuK':function(_0x5dd828,_0x56e573){return _0x5dd828<_0x56e573;},'ZNHRL':function(_0x55c9fe,_0x1f17c5){return _0x5d48fb[_0x4766('‫14c','XrKn')](_0x55c9fe,_0x1f17c5);},'XkpbX':function(_0x3408f6,_0x3b34ea){return _0x5d48fb[_0x4766('‮14d','C$%&')](_0x3408f6,_0x3b34ea);},'AtCeQ':function(_0x6da981,_0x2c0ed3){return _0x5d48fb[_0x4766('‫14e','!zDN')](_0x6da981,_0x2c0ed3);},'WegNZ':function(_0x5e4585,_0x11a2b0){return _0x5d48fb[_0x4766('‮14f','^iWQ')](_0x5e4585,_0x11a2b0);},'XgwZN':function(_0x134ff2,_0xf2afd7){return _0x5d48fb[_0x4766('‮150','o@6s')](_0x134ff2,_0xf2afd7);},'XTFYz':function(_0x2a4c23,_0x5cab2e){return _0x5d48fb[_0x4766('‫151','T$fb')](_0x2a4c23,_0x5cab2e);},'fCVwT':function(_0x10ab33,_0x38c9f2){return _0x5d48fb['OwASZ'](_0x10ab33,_0x38c9f2);},'jvBfZ':function(_0x2ece29,_0x45316e){return _0x5d48fb['OwASZ'](_0x2ece29,_0x45316e);}};if(_0x5d48fb['FbLSn']!==_0x5d48fb[_0x4766('‮152','O)h$')]){fs[_0x4766('‫153','t4U&')](_0x5d48fb['cjgNj'],Now_mac);}else{try{if(_0x5d48fb['oHjkG']('QvWcD',_0x4766('‮154','jKW3'))){if(_0x3b4e0c){if(_0x5d48fb[_0x4766('‫155','!zDN')]===_0x5d48fb[_0x4766('‮156','*bkB')]){os=$['isNode']()?_0x5d48fb[_0x4766('‮157','MHUg')](require,'os'):'';}else{console['log']('\x0a['+TG_ID+_0x4766('‫158','T$fb')+_0x3b4e0c);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x3b4e0c;}}else{if(_0x5d48fb[_0x4766('‫159','AS*]')]===_0x5d48fb[_0x4766('‮15a','[PMy')]){console[_0x4766('‮15b','7[y5')](e);}else{let _0x13c741=JSON['parse'](_0x40deba);if(_0x13c741[_0x4766('‮15c','IkCj')]==0xc8){try{fs[_0x4766('‫15d','^iWQ')](_0x5d48fb[_0x4766('‮15e','H47h')],Now_mac);}catch(_0x870e6b){}let _0x4ffbdc=_0x5d48fb[_0x4766('‮15f','3kz$')](Format_time,_0x13c741['msg']['info'][_0x4766('‫160','KGp4')]);console[_0x4766('‮161','H47h')]('\x0a['+TG_ID+_0x4766('‮162','AS*]')+_0x4ffbdc);await _0x5d48fb[_0x4766('‮163','KcqU')](get_vip,_0x13c741[_0x4766('‮164','lRT1')][_0x4766('‮165','IkCj')]);}else if(_0x5d48fb['pCMLS'](_0x13c741[_0x4766('‮166','XrKn')],0x71)){if('dWGNG'===_0x5d48fb['zALqR']){bbg_UA=_0x5d48fb['FiboA'];}else{await yyz_user_reg();}}else{console['log']('\x0a['+TG_ID+_0x4766('‮167','h5W7')+_0x13c741['msg']);subTitle+='\x0a['+TG_ID+_0x4766('‮168','&K(a')+_0x13c741[_0x4766('‮169','j87Z')];yyz_d=![];}}}}else{var _0x1015db=new Date(_0x116772[_0x4766('‮16a',')m^Q')](timestamp,0x3e8));var _0x2fbb47=_0x116772[_0x4766('‫16b','3kz$')](_0x1015db['getFullYear'](),'-');var _0xb5f8e3=_0x116772[_0x4766('‮16c','KGp4')](_0x116772['THIuK'](_0x116772['CtZWL'](_0x1015db[_0x4766('‫16d','FEbx')](),0x1),0xa)?_0x116772[_0x4766('‫16e','t4U&')]('0',_0x116772[_0x4766('‮16f','MHUg')](_0x1015db[_0x4766('‫170','8stk')](),0x1)):_0x1015db[_0x4766('‮171','m3%y')]()+0x1,'-');var _0x5bc3ff=_0x116772['AtCeQ'](_0x1015db[_0x4766('‮172','M(8e')](),'\x20');var _0x3b732c=_0x116772[_0x4766('‮173','lRT1')](_0x1015db['getHours'](),':');var _0x14abef=(_0x116772[_0x4766('‮174','XrKn')](_0x1015db[_0x4766('‫175','lQjo')](),0xa)?_0x116772[_0x4766('‮176','dpOR')]('0',_0x1015db[_0x4766('‫177','SiAy')]()):_0x1015db[_0x4766('‫178','7[y5')]())+':';var _0x4e44c3=_0x1015db[_0x4766('‫179','FEbx')]();let _0x1f60a1=_0x116772['WegNZ'](_0x116772[_0x4766('‫17a','FEbx')](_0x116772[_0x4766('‮17b','T$fb')](_0x116772[_0x4766('‫17a','FEbx')](_0x116772['XgwZN'](_0x2fbb47,_0xb5f8e3),_0x5bc3ff),_0x3b732c),_0x14abef),_0x4e44c3);return _0x116772[_0x4766('‮17c','!zDN')](_0x116772[_0x4766('‮17d','KcqU')](_0x116772[_0x4766('‮17e','^iWQ')](_0x2fbb47,_0xb5f8e3),_0x5bc3ff)+_0x3b732c,_0x14abef)+_0x4e44c3;}}catch(_0x64764b){console[_0x4766('‫17f','t4U&')](_0x64764b);}finally{if(_0x5d48fb['KuYhg']===_0x5d48fb[_0x4766('‮180','C&cL')]){_0x5d48fb[_0x4766('‮181','cLg$')](_0x407340);}else{app_soy_bbg_data=process[_0x4766('‫182','MRdd')]['soy_bbg_data'][_0x4766('‮183','cLg$')]('\x0a');}}}});});}async function yyz_user_reg(){var _0x1e402b={'aTtRk':_0x4766('‫184','3o]5'),'BXCyF':function(_0x99fb81,_0x2d7d26){return _0x99fb81==_0x2d7d26;},'aLwGe':function(_0x2cb049,_0x273dc2){return _0x2cb049===_0x273dc2;},'HuFLh':_0x4766('‮185','8stk'),'KqZKE':function(_0xa29453){return _0xa29453();},'nGpTe':'rHeSX','DTmAW':function(_0x21cccb,_0xf9f431){return _0x21cccb==_0xf9f431;},'ahOIP':function(_0x26127c,_0x1f7cda){return _0x26127c+_0x1f7cda;},'toztI':_0x4766('‮186','H47h'),'ukVYn':_0x4766('‮187','h5W7'),'LxpNL':function(_0x177357,_0x5d7bce){return _0x177357+_0x5d7bce;},'eNEPc':function(_0x5d0c4a,_0x5b3160){return _0x5d0c4a+_0x5b3160;},'SYoJO':'&sign=','Ewckl':_0x4766('‮188','cLg$')};if(!Tips&&!YZ){console[_0x4766('‮189','o@6s')]('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}console[_0x4766('‫b6','3kz$')](TG_ID,mac,os[_0x4766('‫18a','^TCB')]());var _0x5f52ba=Math[_0x4766('‫18b','SiAy')](Date[_0x4766('‮18c','lRT1')]()/0x3e8);var _0x1b4ef4=CryptoJs[_0x4766('‮18d','lRT1')](''+TG_ID+mac+os[_0x4766('‮18e','7[y5')]()+YZ)['toString']();var _0x2d34e5=_0x4766('‮18f','XrKn')+TG_ID+_0x4766('‮190','KL@s')+_0x1b4ef4+_0x4766('‫191','lRT1')+_0x5f52ba;var _0xbe8da9=CryptoJs['MD5'](_0x1e402b['ahOIP'](_0x2d34e5+'&',appid))['toString']();_0x2d34e5=_0x1e402b['LxpNL'](_0x1e402b['eNEPc'](_0x2d34e5,_0x1e402b[_0x4766('‫192','3o]5')]),_0xbe8da9);let _0x3d691f={'url':serverUrl+'user_reg','headers':{'user-agent':_0x1e402b[_0x4766('‫193','512]')]},'body':_0x2d34e5};return new Promise((_0x55efdf,_0x2574ba)=>{var _0x352a6c={'UGOMC':function(_0x391db5,_0x473841){return _0x1e402b[_0x4766('‮194','7[y5')](_0x391db5,_0x473841);},'cNzow':function(_0x4ff1db,_0x12475a){return _0x1e402b['ahOIP'](_0x4ff1db,_0x12475a);}};if(_0x1e402b['toztI']===_0x1e402b[_0x4766('‫195','lRT1')]){console[_0x4766('‫7f','dpOR')]('\x0a【'+Tips+_0x4766('‫196','huM8')+$['index']+_0x4766('‫197','[PMy')+result[_0x4766('‮198','VN^u')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4766('‮199','sYnC')+result[_0x4766('‮19a','O*4a')];}else{$[_0x4766('‮19b','KGp4')](_0x3d691f,async(_0x40f091,_0x38422a,_0x3e093d)=>{try{if(_0x40f091){console[_0x4766('‫19c','jKW3')]('\x0a['+TG_ID+_0x4766('‮19d','^iWQ')+_0x40f091);subTitle+='\x0a['+TG_ID+_0x4766('‮19e','!zDN')+_0x40f091;}else{if(_0x1e402b[_0x4766('‫19f','cLg$')]==='EAjma'){user_H=result['msg'];yyz_d=!![];}else{let _0x422085=JSON['parse'](_0x3e093d);if(_0x1e402b['BXCyF'](_0x422085[_0x4766('‮1a0','cLg$')],0xc8)){if(_0x1e402b['aLwGe'](_0x1e402b[_0x4766('‫1a1','[PMy')],_0x1e402b[_0x4766('‮1a2','512]')])){await _0x1e402b['KqZKE'](yyz_login);}else{let _0x20c5b9=JSON[_0x4766('‮1a3','idZI')](_0x3e093d);if(_0x352a6c[_0x4766('‫1a4','dtlB')](_0x20c5b9['code'],0xc8)){console['log']('\x0a【'+Tips+_0x4766('‮1a5','pKYO')+$['index']+_0x4766('‫1a6','XrKn')+_0x20c5b9[_0x4766('‫1a7','KGp4')]+'金币');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x4766('‫1a8','[PMy')]+_0x4766('‫1a6','XrKn')+_0x20c5b9[_0x4766('‫2d','C$%&')]+'金币';}else{console[_0x4766('‫86','O*4a')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4766('‫1a9','AS*]')+_0x20c5b9[_0x4766('‮1aa','sYnC')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x4766('‮ec','^iWQ')]+_0x4766('‮1ab','3kz$')+_0x20c5b9['message'];}}}else if(_0x1e402b['BXCyF'](_0x422085['code'],0x75)){if(_0x1e402b['aLwGe'](_0x1e402b[_0x4766('‫1ac','KL@s')],_0x1e402b['nGpTe'])){console['log']('\x0a['+TG_ID+_0x4766('‫1ad','C$%&')+_0x422085[_0x4766('‫1ae','h5W7')]+_0x4766('‮1af','r4W['));yyz_d=![];}else{console[_0x4766('‫86','O*4a')]('\x0a【'+Tips+_0x4766('‫1b0','m3%y')+$[_0x4766('‮1b1','512]')]+'\x20领取气泡'+(num+0x1)+_0x4766('‫1b2','cLg$')+_0x422085[_0x4766('‫1b3','M(8e')]);subTitle+='\x0a【'+Tips+_0x4766('‫196','huM8')+$[_0x4766('‮1b4','L6^7')]+_0x4766('‫1b5','AS*]')+_0x352a6c[_0x4766('‮1b6','t4U&')](num,0x1)+'】:\x20'+_0x422085[_0x4766('‮1b7','FEbx')];state=![];}}else{console['log']('\x0a['+TG_ID+_0x4766('‫1b8','KGp4')+_0x422085[_0x4766('‮1b9','M(8e')]);subTitle+='\x0a['+TG_ID+_0x4766('‮1ba','m3%y')+_0x422085[_0x4766('‫97','3o]5')];yyz_d=![];}}}}catch(_0x42fa58){console[_0x4766('‮1bb','SiAy')](_0x42fa58);}finally{_0x1e402b[_0x4766('‫1bc','lQjo')](_0x55efdf);}});}});}async function get_vip(_0x3f85f1){var _0x322cd7={'oRpzF':function(_0x233869,_0x3a014c){return _0x233869==_0x3a014c;},'JOiOQ':function(_0xca4066){return _0xca4066();},'mFokG':function(_0x531585,_0x28570b){return _0x531585!==_0x28570b;},'qOBUi':_0x4766('‫1bd','7[y5'),'JGObq':function(_0x1d18e9,_0x5edd3b){return _0x1d18e9===_0x5edd3b;},'XCWLf':_0x4766('‮1be','lQjo'),'FmgoZ':'cmvAJ','WWbvJ':function(_0x11167b){return _0x11167b();},'fMCei':function(_0x1b672f,_0x29d323){return _0x1b672f/_0x29d323;},'GagxY':function(_0x59a0bb,_0x20f95b){return _0x59a0bb+_0x20f95b;},'EUGZs':function(_0x162f19,_0x3fbb1d){return _0x162f19+_0x3fbb1d;},'PvoZA':'&sign=','dTaQe':_0x4766('‫1bf','r4W[')};var _0x2ef29e=Math['floor'](_0x322cd7['fMCei'](Date['now'](),0x3e8));var _0x921777=_0x4766('‮1c0','[PMy')+user_num+_0x4766('‮1c1','KL@s')+_0x3f85f1+_0x4766('‮1c2','O*4a')+_0x2ef29e;var _0x5a21ed=CryptoJs['MD5'](_0x322cd7[_0x4766('‫1c3','lRT1')](_0x322cd7[_0x4766('‫1c4','XrKn')](_0x921777,'&'),appid))[_0x4766('‫1c5','pKYO')]();_0x921777=_0x322cd7['EUGZs'](_0x322cd7['EUGZs'](_0x921777,_0x322cd7[_0x4766('‮1c6','L6^7')]),_0x5a21ed);let _0x242a2b={'url':serverUrl+'get_vip','headers':{'user-agent':_0x322cd7[_0x4766('‫1c7','j87Z')]},'body':_0x921777};return new Promise((_0x28fb6d,_0xf5e6ec)=>{var _0x1575a7={'azmFA':function(_0x2aa30a,_0x14a1ff){return _0x322cd7[_0x4766('‫1c8','FEbx')](_0x2aa30a,_0x14a1ff);},'OEOfu':function(_0x6a395c){return _0x322cd7[_0x4766('‮1c9','o@6s')](_0x6a395c);},'MToUS':function(_0x414631,_0x3ab64b){return _0x322cd7[_0x4766('‫1ca','L6^7')](_0x414631,_0x3ab64b);},'IPKWu':_0x322cd7[_0x4766('‮1cb','dpOR')],'vbdjq':function(_0xe34e5b,_0x21239c){return _0xe34e5b(_0x21239c);},'GijTe':function(_0x1a7c83,_0x5c995e){return _0x322cd7[_0x4766('‮1cc','^TCB')](_0x1a7c83,_0x5c995e);},'GsPES':_0x322cd7[_0x4766('‫1cd','m3%y')],'YpphI':_0x322cd7[_0x4766('‮1ce','XrKn')],'vWuGz':function(_0x7e5db2){return _0x322cd7['WWbvJ'](_0x7e5db2);}};$[_0x4766('‮1cf','^iWQ')](_0x242a2b,async(_0x3775cf,_0x362594,_0x37375d)=>{var _0x47e27f={'ctTLg':function(_0x36bf42){return _0x1575a7[_0x4766('‫1d0','C$%&')](_0x36bf42);}};try{if(_0x3775cf){if(_0x4766('‫1d1','pKYO')!=='tkiPS'){let _0x5cb6cd=JSON['parse'](_0x37375d);if(_0x1575a7[_0x4766('‫1d2','KGp4')](_0x5cb6cd['code'],0xc8)){console[_0x4766('‮1d3','&K(a')]('\x0a['+TG_ID+_0x4766('‫1d4','jKW3')+_0x5cb6cd['msg']+_0x4766('‫1d5','IkCj'));return![];}else{console[_0x4766('‮1bb','SiAy')]('\x0a['+TG_ID+_0x4766('‮1d6','IkCj')+_0x5cb6cd[_0x4766('‮1d7','T$fb')]);subTitle+='\x0a['+TG_ID+_0x4766('‫1d8','3kz$')+_0x5cb6cd[_0x4766('‮1d9','!zDN')];return![];}}else{console[_0x4766('‮ce','^iWQ')]('\x0a['+TG_ID+_0x4766('‫1da','[PMy')+_0x3775cf);subTitle+='\x0a['+TG_ID+_0x4766('‫1db','^TCB')+_0x3775cf;}}else{if(_0x1575a7['MToUS']('GxrRJ',_0x1575a7[_0x4766('‫1dc','DCVs')])){console[_0x4766('‫19c','jKW3')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4766('‫1dd','IkCj'));subTitle+='\x0a【'+Tips+_0x4766('‫1de','O*4a')+$['index']+_0x4766('‮1df','O)h$');}else{let _0x310989=JSON[_0x4766('‮1a3','idZI')](_0x37375d);if(_0x310989['code']==0xc8){user_H=_0x310989[_0x4766('‫1e0','^iWQ')];yyz_d=!![];}else{console[_0x4766('‮189','o@6s')](_0x37375d);if(yyz_Kami){await _0x1575a7[_0x4766('‮1e1','r4W[')](card,_0x3f85f1);}else{console[_0x4766('‫8d','L6^7')]('\x0a['+TG_ID+_0x4766('‮1e2','SiAy'));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}}}}}catch(_0x5d56c3){if(_0x1575a7[_0x4766('‮1e3','sYnC')](_0x4766('‫1e4','KGp4'),_0x1575a7['GsPES'])){console[_0x4766('‫b6','3kz$')](_0x5d56c3);}else{console[_0x4766('‮1e5','C$%&')]('\x0a['+TG_ID+_0x4766('‮1e6','3o]5')+_0x3775cf);subTitle+='\x0a['+TG_ID+_0x4766('‮1e7','sYnC')+_0x3775cf;}}finally{if(_0x1575a7['MToUS'](_0x1575a7[_0x4766('‫1e8','8stk')],_0x4766('‮1e9','^TCB'))){_0x47e27f[_0x4766('‫1ea','cLg$')](_0x28fb6d);}else{_0x1575a7['vWuGz'](_0x28fb6d);}}});});}async function card(_0x186923){var _0x490f52={'pHwwL':_0x4766('‫1eb','C&cL'),'HQqhB':'LsSsZ','mtkUv':function(_0x5b1499){return _0x5b1499();},'ZdUVc':function(_0x482cad,_0x45f9d3){return _0x482cad+_0x45f9d3;},'TGgMT':function(_0x141543,_0x3ce993){return _0x141543+_0x3ce993;},'khSQU':_0x4766('‮1ec','XrKn')};console['log'](yyz_Kami);var _0x242df3=Math[_0x4766('‫1ed','L6^7')](Date[_0x4766('‫1ee','O*4a')]()/0x3e8);var _0x575e0a=_0x4766('‫1ef','lRT1')+_0x186923+_0x4766('‮1f0','lRT1')+yyz_Kami+_0x4766('‫1f1','KGp4')+_0x242df3;var _0x4b08bc=CryptoJs[_0x4766('‫1f2','C&cL')](_0x490f52[_0x4766('‮1f3','DCVs')](_0x575e0a,'&')+appid)[_0x4766('‫1f4','o@6s')]();_0x575e0a=_0x490f52[_0x4766('‫1f5','t4U&')](_0x490f52['TGgMT'](_0x575e0a,'&sign='),_0x4b08bc);let _0x16358b={'url':serverUrl+'card','headers':{'user-agent':_0x490f52['khSQU']},'body':_0x575e0a};return new Promise((_0x309543,_0xef05bd)=>{var _0x20f29a={'NyGZW':_0x490f52[_0x4766('‫1f6','[PMy')],'KSPeh':_0x490f52[_0x4766('‮1f7','m3%y')],'oQXMm':function(_0x42f071){return _0x490f52[_0x4766('‮1f8','XrKn')](_0x42f071);}};$[_0x4766('‫1f9','lQjo')](_0x16358b,async(_0x23a69b,_0x2b2d06,_0x477cbe)=>{var _0x4834b8={'cTuSm':_0x20f29a[_0x4766('‮1fa','7[y5')]};if(_0x20f29a[_0x4766('‫1fb','sYnC')]!==_0x20f29a['KSPeh']){throw new Error(_0x4834b8['cTuSm']);}else{try{if(_0x23a69b){console[_0x4766('‮189','o@6s')]('\x0a['+TG_ID+_0x4766('‮1fc','m3%y')+_0x23a69b);subTitle+='\x0a['+TG_ID+_0x4766('‫1fd','sYnC')+_0x23a69b;}else{let _0x21fc5c=JSON['parse'](_0x477cbe);if(_0x21fc5c['code']==0xc8){console[_0x4766('‫b6','3kz$')]('\x0a['+TG_ID+_0x4766('‮1fe','XrKn')+_0x21fc5c[_0x4766('‮1ff','C&cL')]+_0x4766('‫200','3o]5'));return![];}else{console['log']('\x0a['+TG_ID+_0x4766('‫201','j87Z')+_0x21fc5c[_0x4766('‮202','IkCj')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x21fc5c[_0x4766('‫203','&K(a')];return![];}}}catch(_0x13ba8b){console[_0x4766('‮68','XrKn')](_0x13ba8b);}finally{_0x20f29a['oQXMm'](_0x309543);}}});});}function Format_time(_0x157c02){var _0x405638={'sXLSD':function(_0x5281c3,_0x16a7eb){return _0x5281c3*_0x16a7eb;},'YASru':function(_0x5df53,_0x2a26e4){return _0x5df53+_0x2a26e4;},'XwXWv':function(_0x9007e4,_0x268087){return _0x9007e4<_0x268087;},'NKAko':function(_0x3f4a13,_0x2947bf){return _0x3f4a13+_0x2947bf;},'gxwMw':function(_0x3ad4fd,_0x4a4285){return _0x3ad4fd+_0x4a4285;}};var _0x18211d=new Date(_0x405638[_0x4766('‫204','dpOR')](_0x157c02,0x3e8));var _0x3a7228=_0x405638[_0x4766('‮205','m3%y')](_0x18211d[_0x4766('‮206','MRdd')](),'-');var _0x3755c6=_0x405638['YASru'](_0x18211d['getMonth']()+0x1<0xa?'0'+(_0x18211d[_0x4766('‫207','cLg$')]()+0x1):_0x18211d['getMonth']()+0x1,'-');var _0x3d6337=_0x18211d[_0x4766('‫208','MHUg')]()+'\x20';var _0x5cf4ab=_0x18211d['getHours']()+':';var _0xf003c1=_0x405638[_0x4766('‮209','^TCB')](_0x405638[_0x4766('‮20a','KL@s')](_0x18211d[_0x4766('‫20b','M(8e')](),0xa)?'0'+_0x18211d[_0x4766('‫20c','cLg$')]():_0x18211d['getMinutes'](),':');var _0x4cf2b9=_0x18211d[_0x4766('‫20d','t4U&')]();let _0x4aa3a3=_0x405638['YASru'](_0x405638[_0x4766('‫20e','*bkB')](_0x405638['gxwMw'](_0x405638[_0x4766('‮20f','!zDN')](_0x3a7228,_0x3755c6)+_0x3d6337,_0x5cf4ab),_0xf003c1),_0x4cf2b9);return _0x405638[_0x4766('‮210','[PMy')](_0x405638[_0x4766('‫211','8stk')](_0x405638[_0x4766('‮212','r4W[')](_0x405638['gxwMw'](_0x3a7228,_0x3755c6)+_0x3d6337,_0x5cf4ab),_0xf003c1),_0x4cf2b9);};_0xode='jsjiami.com.v6';


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