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
变量值:延时&token
注释:延时填1则1秒2则2秒,建议10秒以上,加上内置取1-3秒不等延时,token抓包找到带有 https://ggb.culink.vip/api/ 的链接,请求头上的token值，虽然可以写登陆，但是登陆有要重新写配置，懒
注意:次脚本需要跑较长时间,循环250次左右,自己看情况设置延时

多个号用 @ 或 # 换行 隔开

一天一次
cron 31 17 * * * app_ggb.js

脚本地址：https://gitee.com/soy-tool/app-script/raw/master/app_ggb.js

*/


const $ = new Env('【广告吧22/04/14_1】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodR='jsjiami.com.v6',_0xodR_=['‮_0xodR'],_0x39da=[_0xodR,'IcK7w5HDk1U=','Y8OIbwHDuRnDisOL','PcKDw6fCkQ==','dz5wGV0=','5oyZ56Sdw7B2wpbotK7lj7PCmw==','BcOQwoZYw5M=','QOesi+WJneeJtuaDr+OBpMONDue8tee5t+itseawoOWmm+i3jw==','KsKew6rCmQ==','UxDDm8OSw4g=','Q8Kbw4zCrXg=','aAVABVM=','TsOpwps=','5o6b56ehw5TCpUzotZHlj4jCgg==','TOevgOWLkueKi+aCquOAjMOmwqXkuITlpZPltIvnr5rli4Q=','5o6w56WPQMOtw4PotZPljIAO','ElokMgg=','wofDkF5hwo8=','cMOCSDjDpB7DkMOE','RcOjwojDhMKmdcOk','TsOvw7EDwrU=','dsOVwprDkcKF','J8KXw73Dj1k=','IMKfw6rCmVk=','aeeuj+WKvueJiuaAoOOAusKeSw==','w53Cu8KF','5o6f56eyRTwx6LS05Y+2eg==','wq7nr6vli6Lni6PmgZDjgYIqwoE=','ccONw5c=','DBoK','L8KOw6nDil0=','LsO/woxRw4o=','bsO+bTrDow==','YRDDg8OUwrw=','diltDks=','ACd1wppSwqApWcO4dgEmKg==','WcKQw6rCnQ==','X1HCscKEwqs=','EUEf','5o2e56avw794fOi1teWPp8KB','5o6q56avw6PCrsKR6Lek5YywaA==','cCRWbg0=','I8KnDw==','w71Mwoo=','77yN6IWo5p2T5bap5q6x5bm25Lyj55ef','KRzCrMOZbA==','w6F7w7olVw==','FcOew5tl','AiPCsR0f','WDhdDFw=','w7xQwoo=','aBwbPsKq','w4HnrofliIPjgZfCvsKo56+J5Yuq5oqL5YqLwqQ=','w5nCpsKGwoHCjQ==','OeestOWIguOAmk8p56+L5YqR5oqj5Yi0wrk=','RQY0L8KH','woXDm09Gwok=','O8O8w5xDeQ==','EBQfwrPCiw==','w7jCq2bkvbfnlpXljLrlr4zChsO4','DQYK','77yg6Ia05pyc5bSf5qyR5bqQ5L6S55af','dMO5R+S/keeWi+WPnuWsksKYw6M=','AcONwoU=','IsK7Dw==','5o2156arayXCkOi1veWPvcKc','wpDnrrbli5Ljg7XDjy4=','PsKNfw==','5o+k56SXCiTDiOi1ouWOu0Y=','JsKmDHRk','wq7nr6vli6LjgYRrcw==','w6smw5o0Vg==','w77CnMKZw5bCvA==','C1cewrrCsQ==','w6QTY17Dqg==','esOUw4Ixwro=','w5l4wpRPwr4=','A8Kzw7zCr2Q=','SxHDvsO6w4cWw78=','H8OWwoNWw44ywr7Dt8K7CcKRw7vCk0dAwr/CpsO1wrzDrBY=','V8Otw6AKwo4=','IVx0wq/DqA==','w4JEw4wAUQ==','SS57Zhs=','d8OCwr7Ds8KJ','w4jCqcKew6fCgw==','OEQZIB0=','B8Kfw5bClXA=','w6hfw6hNwqs=','w5zCp8KF','worDi8K6','w6hEwofnm7Plvp3lpo7otJVUw6HDhw==','w59dw4w=','a0rCicKE','5o2Q56WxwptMCei2huWPosKX','Dnt6wovDmg==','a+ikmeefsuiljumjsOOBpgXCgue8s+e7peivvuawreWlkOi0vQ==','RCHDnxlZ','w5FBw48p','ZSXDvcOLwro=','w6Vcw7s1YA==','w6wgw70paw==','5o+L56Sfw5fDncOT6La25Yy6w4w=','HA7Cngwu','FOimgueepuimrOmireOBqMOtMuevgQ==','5q+y5rCi5pyx6I6H5Yyb5Yuu57uf5Yyn','w4Ezw6LDscKh','Ceikveeekuikr+mih+OBncKfwqTnrKs=','aEDCn8Kvwo7DosKkwo/DuQ==','w6HCrsKow6LCvw==','w4PjgLfoh4fmnbfmjavnpLLjgJXvvqHmrKTohrnmnIXljqfogrPpnLzpvKPnjrvlo6botqE=','5oyx56eDHmvCqei2ruWNgMO6','JsKowp4=','SkDCiMKXwp0=','czbDvMOFw6M=','F2pi','w6LDusK1','Oi8+6ami6K2j6LSP5Y2xcTLovLXlm7Fx','bAtcZzY=','cExVfcOKdmJXw7vDnQPDq8Kawq7CicKGVDDDgQ==','w6kIWHrDjDbCoD7Dj1cgawHDusOWByJFZXAzIXwZw4XCgzgqw5zDgh4=','Xg7Dp8Om','wqFTwqkrw4gyK8KUJ8OES2MtG8OWfQsbU8O0ZSk3QALDqsOr','wpfCjcOGZSI=','w4w5woHCisOVAWAXw5txwoIaw7XDvnXCs8KRw6Iu','wpPDnsKVIWY=','wq5dwrQr','DBADwqfCmh0=','wrUaXMKVwoIVNsKhwoPCv8OZ','UyXDmSdTF8Kjeg==','I8K7w5HDnFfDmMKR','woHCscO4ZgE=','AlwxAyM=','wrUJwpfDtXE=','PsK1wqvDgSI=','NsKIw7bDgHk=','woIDwpXDnUM=','YsKtw4zDv1jCkQ==','w79Bw5EldHxdw45Vw6cVB0DCuz9lw6zCiMOvPMK4wpTCmVI6UcODwpNhwoTDuBbCpMOgw73CqlfCrsO2L8OYRSzDgCbChhzDjmDDm8OIw6JNwogmw6jDgcOXwodRS8OBG8KdJMOcw7jCj8OKCMONSCpDw6rDki/CoAslwq7CtsKdwqUYw7NkHWoqFMKtKgvCllADwqTClsOXaVbDu8O3w69QwpgDw43ChsOBGTfCoMKrwqjCjMOxd8KXRi3CgC8kT8K0w6/ClS3DgsKMLQfDncKBw5fDtMKPwpBww4DDhcO5Bx1fQ8KWNzJjw4VbWFPCrnLDqzHCiSVwwoJiw4ZiSMO4w7gawpoBU2LCvsO/wox2a8Ozw4zDncOhbsKHUyk+w67DiTJrI8Opw6HCicKMBATCtcO+Y8Ojw44BURPCrBDCpMKQw4HDjcOaOgZPOzhSdg==','esOSw58dwrE=','FHsWwrvCsQ==','wqzCvQY=','c0rCicKEwpDDscKgwok=','UxTDhw==','YcOqBQ==','w5FDw74naw==','woLClGYtw7c=','w7wXe2LDlzzCry0=','Z0Y4cns=','OFbDn8O7Qg==','LxjCkMOLTw==','DkclJS9PBA/Dmjw=','AMOgw6pRRQ==','wo/CrsOqTCU=','F3pwwozDhg==','PcOzw5BIZg==','dMOxwqTDscK3','DsKOwr7DgAs=','TSl3D24=','YcOOXRfDhA==','w6PDqA1Fw7A=','w707w4zDnMKt','w4F7w6o7cg==','WQxN55ml5b2A5aaz6LWKbMOQ6L+O5ZqBwow=','KFrDmueYkuW8g+WnlOi1tcO+wobov73lmoBS','w6FNw4gZfw==','w5jCpcKTw7/CgA==','WcKew6vCmnM=','w4bDviJt','ciXDuThk','wr4KwoXDhn0=','PMKWesK3Hg==','wqQWWA==','J8K0wp4=','w63DssOC55qf5b6g5oie5Ympw7vDpMO/dcOy5Yu25p6U5pW56ZWbGw==','w6JQwoRW','wqAuwoTDpVk=','wrxJwo8Sw7g=','CRsJwqXClg==','QOaOpeePneODkcOUVQ==','FOaPveeOl+OAmMOfZA==','wpJ+w4fnm4zlvablpJnotJcZw7vCjQ==','dmnCtOebuuW+vuWkhui1sMKxcR8=','FnZi','w6UrwpQ=','ByzCtQMv','Hw/Cswsc','fRXDvMOiwolHwrTDmcOLDHnDoFbDtsOUw4nCnC7Dug==','w4nCsMK4w5Y=','KMKvCj9/Z20zccOfQcOoY8K+','w55sw5dewot/HR3Crw==','W8OuwqnDo8KD','wr0rwovDvVE=','bcK5w4DCr2I=','AUhfwoJx','A8KPAmRw','asOjX8KJPA==','TTBTRDI=','Vx9GZCU=','aHTCssKywpM=','PuOAveS9u+iAjOaMteelvuOBne+9vOmpgeisvOiEseaeo8KowpTCvOWmjei0mHPorJ/lirLkv7Pml47ohJTmnZrkuarkuoDmhZjlh6Tlr6w=','w6AswofCjsKJCWEJwoo2w4hQw7fDuW3DoMKWw6Ypwo8UEsK3wpZxw73Dow==','FBDCigU/woYxwrDDj0YwXcK9w6HCshINwpV3U8KfwrjDpmfDpm5YZcO0w5bCsg==','w5J2w41vwrM=','RcKmCcOJw5fDlw==','wr5kwqQCw7g=','w6bDusKABz8=','PcKRbw==','w7Bawps=','SsOpwo/DtMKpYMOswqc=','YsOUWQfCtg==','PVXCm8KDwo3Dp8Kiwp7DuEprw6gIwrzClMKvHwlUw7LCvsKNw6XCh8KpXQLDtMKawpgIw4nCisOELhM0','dcKKJQ==','wp/CnsOqTgk=','STzDkMOEwp0=','w5LCp8KmwqHCgw==','w5E4w4PDssKK','wrvCtMO6cDhtSU0=','BMOMwrRPw58=','w6TCkMKzwq3Csw==','HcOYw5xobw==','L2wRHjY=','w5hTwoVRZQ==','woduwrc8w70=','wqIwS8KqwoQ=','w4Jiw5gfTw==','5o+O56WqOVEI6LWQ5Y+1w54=','RcOAVMKICg==','NA7CuQ==','AlwVNDQ=','BEfDvuaxguWGheWnmui1osOJBui+l+WasMOR','KFrDmuaygeWHmuWnlOi1tcO+wobov73lmoBS','w57CusKhw5zCgA==','w7A7w4Ybdg==','F3Rswp3Dhw==','T8OBVMKI','wr4QTw==','wqBJwrk+w4M=','w6/mjpTnjZfjgqYJCA==','w6ULTw==','wqLCqMO4','5o2R56SFw40eO+i0uOWNmBA=','w5wQw4PDrcKw','w4HmjKnnjoPjgZfCvsKo','VeaOsOeNiuOBuGzDhQ==','wr7DsF8=','H8KhAnNE','J8Kxw4HDvQ==','PsOTwpfDhcOI','44Cl772a5p6H5aCB5Yal55qB5bmD5Y+K6YSiCShNfCBuFMK9w6sSHsKaeQ==','TsOfw4k/wqk=','w6Mkw5IE','Fkcn','77+r6K2dwok0dkQNwrToranlpq8wZhnltqroobjmsKnlh7U=','K8KLwp/ms6jlhoblp6fotbvDqEc=','BhzCquaxv+WGoOWkjei2sMOUEA==','RcODesKkHQ==','w545RkTDog==','Jg5g5Lyo55WY5Y2C5a6tUsKV6L6G5Zugw6g=','w73CrcKQw77CmA==','wpNewqcCw5U=','IMKCw4DCk0VO','wqV0wr8uw60=','w5fCr8K6woXCtw==','VRvDqQ==','VAfDqQ==','GcOkwoXmsbDlhrrlpp3ot5E+Gg==','dsO0csK7JQ==','w7M9w6/Dq8KK','w7TCgMKNwoLCgA==','woIrwp3Dnl9EUwzDrsKDwr1MDcKRbsKswr8iw6dVw5PCksO0C8OGXMOdw5MsVcKSw6spdMOEwpLCmcOfcMK6csK0KB1wwoJfw7fCm8KnWynCpSjCpcOaw51FVWTCscK2Pi/ChQjCt8OxwpfClcKfw4oiRlXClMOeXgpnWn/CmcKKwonDq8KzAWjDvsKFBsKKw4BAe3vDo8OcZQjCl8OPw5NvEMKRwpTCqiATa8OLwqjDv8O0S1Nzwps4wofDs8KFwqDCisOqwrTDlik6X0zCo8Kdw77DnsKHw5HCqsOKw7jCn39lWWrCjSPDv8OoPzhTwrdXKW3Cn0DCh8OeGcKcwpnDjFQsHsKnMsOsO8OjZinCmzR0DcKKBiZ1bMOUXcOpwo/CtcOOWk7CtcKPw4DDhMOAbcOgDDBUwpfCqzTDg8OIRQpHWhV0w5cwwrPCsyrDj8O8wok=','bsOuwr3DscKw','wr3DrE8=','WDDDpsOowptDaMOsNl3DscOpOTRP','JwZC','O8O1woo=','IRMgwqrCnw==','UwfDo8O6w5I=','wqgdwrfDu38=','D8KMw7DCjnhx','HcOwwrrDnMOKwqvCtw==','w6Ezw7oNRg==','ccOhwqnDlcK/','wqrCiFYKw5Y=','wqNgwrU5w78=','HMK/A1dO','OMOSwrtew48=','QF0OZG8=','w54tw6DDsMK+','QUVkf8K9','WMKWw6HCm1E=','bAs7IsKG','wqHop73nn6vop7XpoofjgI/ClRDnrao=','5q245rOc5p+X6Iyd5Y+f5Yub57ul5Y+2','wr7CqMOsdg==','Tw9dYQQ=','w4tJw4p3wpc=','w6Mxw6A7fg==','w6B9w60AUA==','RHAS6aqH6K606LSv5Y2CwpvCk+i9v+WYmTw=','aRcH6aqF6Kyk6LWi5Y67XMOt6Lyp5Zu1wq8=','Gx7CvcO6eQ==','bA3DnyVY','w4JPw5k/fQ==','Yh0bPg==','w5Iib0fDqA==','RApTLWg=','wr8MTw==','cMORw5c=','IeesjOWJj+eLreaDk+OBn2bDlw==','MBPCusOPcQ==','FOetk+WIl+eKv+aDpOOBlXZG','FwXCqAoe','WldFR8KH','HsOwwpB2w70=','w4sHw48wTw==','w6Akwo7kvZHnl5fljbHlr7ZNw7zmsqzmn6zljKXlrpnlj4TkvbLnlYY=','WQxN5L2h55S95Y+j5a6pbMOQ5rK75p2W5Y+N5a+d5Y2S5Ly755eG','ez5i','OsKew7fCo0ZMw4Y0wrrDgsKMw6I=','DcKYwrHDqyM=','W+aPpOePsOOBhkoD57y657q06K2C5rCQ5aSP6Let','5oy356aCw7BeBOi0q+WOvsK7','w4fCpMK1w4PCqg==','R+aPheeOruODv8KYCee/l+e6l+ivpeayo+Wknui1tA==','w4rDhcK+Nzg=','UMOCw5ZnZMOr','FVs3','DsO6wqXDpsOSw78=','VzDDlRx0','MDrCrcOcTw==','wrEeWsK3','w4U1woXCrsKJ','AsKNwpLDrDY=','M8Ofw7BhZQ==','w6BQwp55','a8KgBMOFw5Y=','w4d7w755wqU=','dFcfbXA=','wqPCtMO4','772V6IWn5p+y5bWY5q2q5buT5Ly455eb','w40Fw43kvbLnl5rlj4blr4TCgMKb','wpJ+w4fkv4jnlJvljYnlr7QZw7s=','5o6D56eENcO5XOi0h+WOmT4=','XUNDbMKd','wqHnrYHli5DnioXmgJfjgI/ClRDkuozlpoPltYTnrqjli6U=','w67nrrnliq/nirTmgabjgI4WCuS6lOWmtOW1veesjOWIlA==','bRJBbiY=','w5NZwopbfw==','U0hTT8KQKCA/wqjCnFk=','GsKKwqvDjik=','CsKhw4DCtVk=','w6cuw4IsS8OOYcOf','YDXDgw1l','I8K7w5HDlVnDgsKAbA==','OG0AwoHChA==','HcOwwrrDjsOTwqzCsyA=','C8ObwpZ5w4ppwrk=','AHBqwqbDjVzDtDg=','wqnCosOrTw5xWV47w64=','W8OhwrnDtMKP','w4wZw6LDvMKA','w4R5w6tawrc=','HsKKwq/DnCs=','H8KLLmVb','b1XCvcKjwqg=','woLCi0o2w7DDp8KawrDDqA==','w4zDoghnw5k+','I+aKgeS6lOWLmeS+i+i0msKFw4tUd03orYnohq/ooYblrZTooYYz','w7bDhMKgPDVkJcOHw4bCk2jDngXCj8KgEGVpG0XDsHTCg8Ocw6ZiwqsIw6InL8Ku','w6bDocKmJWt8P8OYw5XCpD7DhxDCsMKJBltwIk7DimnCgcKaw4oNwosEw4F2L8Ksw5zDlMOeO8KDLsKJwrjCmAoScw==','FknDsMO+QFDDtMOBBcKfJcOWwr/CjDvCs8KLbgbDrsOewrDCucKTw67ChcKKM8Orw6cpCXkLwqrCisKQCsOSw47DnENncA3DicOie3tBw7TDpwXCgSvDkSrCj1PCrsKbbsKzY0BvTcKkBcKQw5JPwo9Ab8OnXsOTNyN1w6jDjwFSw5tGwpTDmjvDpcO5w6fCp2YIw7XDnMOWdMKNw745wr5XFcKSG8KYw43DvUjDtlHCpcKAw4nCl8O/NsOCVG00wobDrCYLwo0vw7A=','Ul0BwqvDjj/DicOCDsO+wpPCqsO9w5c=','woDCnVc0w6HDu8OE','wqowwo8=','ADLCmwgy','GzPDlBkTGsK7c8KeWnRMYAs4','QsKAKMOEw6Q=','S8Kew6vCm1A=','w502woDCmMK8','GzPCmA4S','B8K6wpLDuQ4=','d0rCnQ==','w4Tjg5fDrG0e6ISF5pyA5pat5Lqo5YeQ6Las5aKC5piq44G377+7wpbjgZLmn6jku5nlu4zljbXluILnmKfohKTmnormlL7kuJ7ljanlh4nkuo7mt6fljKvnmrLku4Xkv4bohrjmn4nvv4fkuo/nlrnkuqrmtY3orZjlk6rlravku4znoornqrLvvoTnpZbmrZPnl6zkuIfllrjkuKTmi4XpnL7msq/nmrDnmYnvva3vv63lkZLli6zlkbHmnIXohqDotJPjgIXDg+ODoOS5ruiAjuS8r+itmeWFtOWQtOaxvOaDkeODteWHg+eivOaDneOCt+WvhuaXteaBvOWSuOafi+aUgOaDre+9veisveahs+aOpuaDveWHg+iFpeigkeWKq+aWs+OCol3jgK7mnp3oh73mnIjmlpjkurPvvaPnpJzmr7fkuL/kv7XlhrPkvbHljafjg6jorrnlnYLjgaXnv7/kv7LkuYfljqbku7/kv6zlvYrlvqLnm43ovYnov6jjg7rlj47lu5bCjOWQmuWJluWQmuael+iGhui2j+OAlMKn44O65p225Lmy5a+u5Lmm5Ly+6ISy5p226Za/6aOW5qa05LmJ6Les6LeG77y65YyJ5oqD5L2m5Lm36Zu85LmK55SR5LuE5Lyk6IaN5p2f6ZaV6K+o5a2R6Ie555i+5LqU5Lyy5o2L5aWx5omM5o2/5aya44G0w4fjgKznm6/mj6vmi7PplYjmjbzkv4fnl6Xoho/mnonnm7LkuK7kvoLnlYvmiZHvv4/lj6PmiJDkvq/kuKDpmYfku7nkuqjmjLzmiZHlhaTkuoDmn77kuK3ooIfkuoTovYLlj6Dlm6nlrbjDoOWfkeWMh+axseW9g+aLvOealeWFpeaxiOimh+eboOaDvOWGjeS6g+i8t+iit+S8neaSnu+8guadiOS7nOWvueS6tueUpuaviOW+vui2ueeap+S4oOS8lOmakOelqOazoOa9tuaJpeWEveS6h+WQkOafo+amieS7u+i0q+i1r+ODrW7jgoPlpqzmnK7kuITkvK/ljoPkvJXmibnkuYXkuajorKbkuqzorZ7ohp7mn7vljrHogb/mt7DlqZnkvqPnibblhqDmnInliKTvv7Tli6Plua7ljYrml5bpgI7nn53luoPmj5/kvZHoupDkuYLorqrmmqnjgrTmiZzmnqXmnKDorZXmm4vvvJnmirjkubnlsa3ln7LmlJvli5nor6roraHml7bkuqLlkILli73pm6TnmIvlhrPohonmnJPjgJtC44Cu5LuF5LyW5LiB5Lqi5L6J5peT5by05p6X55yO5q6f6aC055uv55iX5Lmf5oqA55is5o2k5ouT6ZSL5oyd5Lyx55en6K6D5LiN5bux55qg5LqU5L+K6Ieq5p2D55uj5L2x55ez6IGS6YG65bi25Lq557mn6ZuJ6Kyv5q2b5aOm5pmR44Kv5pyp5Lig5L6Y55e96Zi55pWz5pm15peh5oqf6KC25YeM5q2h5YWt6LWk5aGz5puP55mo5p6s5Yuz44C65LqW5pW05L6q55aH5bqn5aa35YmN5Luh5Lmt5Lym55mP5Ye36Iaz5p6u5oi05Lii5bmM5ped5Lq477+M5Yqk6KW95LiW5oKw5beO5o2x5Y2u5qyA5YS36LaR5aCP5pum44CY','wrrDsHZfwqnCuw==','w7Aqw4IJ','w4UZw64XYA==','w5wQw63DnMKQ','wrkOwoPDtmc=','w4jCpcKjw6PCs2Nn','w6TDusK7Ow==','w7sMw4XDgsKB','FhLCjsOefA==','CHBnwohBwrc=','w6ttw6EHVw==','YU4EbWHDsTwvwp55','QC/Dvh5OEMK5dQ==','P8KpwpDDpQ==','KMKxw4I=','PcK8w6DDrn0=','UcOpwoXDn8K+eMO7wp3CkcONwpnDrA==','RCAnLcKW','wp/Dm1l1wrs=','wrweRcK2','44OC776Z5pyS5aGb5YWU55im5bup5Y+66YSOwogxAg50AGfCsRJEDcOuZg==','wo3CllQ=','BcOBw5Npfg==','w4ozworCq8Kb','GQ/CnQ==','T8O1wps=','776E6K6dfFHDuhzChWXorJjlpL9hDTvltbvooJLmsoHlhpU=','EE8MwrvCiQ==','wq/jgoHkvJrogI3mja3npaHjgJvvvqbpqZTorbLohY3mnpF4w4dV5aa96LWPw4/orIXliJjkvJvml7nohrzmnZPkuIjkuJPmhKLlhJHlrIor','w6vjg6nkva/ogYPmjZTnprLjgqbvv4DpqJfor5Xoh4Dmna43w6ZA5aSI6LSFwrHorY7liIDkvqTmlY/oh7/mn4jkuYvkuZPmho7lhInlr6U5','BcOew4ZfbcKxPMKNA8KrBsOx','JsK8BWRq','XBrDuA==','w4fCpMK1w4PCqk9p','NhnCh8OEaA==','IkEBBT4=','w4PCp8KbwrvCkmnClMKewqDDiEjDgw==','OMKrwpXDoRU=','wrcRXg==','aErCg8KvwpnDt8KvwrPDuBYuwrs=','fDTDnMObwow=','w5XCpsKU','IMKRYcKLFkYMQRfDsMOMCA==','aBwbPsKqATo=','DBPCrcOMTw==','FcODwp/DgMO9','WMOCw5NBwphhw6zDucO8','w4PCuMKOwo3CgQ==','Zx0NHsKzLTQ=','wo3Dl8K0HQ==','BsKMw6DCmjkvw4nDpXQkTsOQIH4=','AR0OwqvCnw==','CEEiJARR','wpTDs25Hwo4=','w6JawoxpwrTDjm7Dn8OoMMKfw5s=','dR0sL8KgJzLCkA==','w5HDoy9l','BcKpwpvDgig=','FsKLIlpT','LsK1wo8=','ch0GBMK1KT7CqMOnCQTDpw==','OsKBw6LClVU=','ScOARg==','wqEQUcKMwpAeOMKnwoLCv8OfHg==','R0JeVsKCIy45wqnCnF/Drg==','w6EWTHPDnRrCpw==','wpTDl8KkLE5qK8OEwrPDiWtO','b8OOw5wbwrc=','wqMrwoA=','ERjDh8ONw57ohormn6Hmiovoo5BXd8O65Yys5Lik5pWX6ZWt77yj','GksMwozCiDHDgA==','EcOUw4tUY8K7O8KoCMKkF8Ofw6NVwqJmw70=','VsOpwrDDr8KkYMOtwqfCpsOYwp/DpHx/','JcKew6k=','wrrDtcOfw5njg6Xlhb/Dlg==','w5ksfmDDnA==','d0YBd2E=','QlDCu8KiwrA=','H3c5Gic=','FOW9kOWnn+OBrOesiVY=','wrsRTMK2wo8=','w4Hku5PotJXljrHkub/liKnjgqY=','wogOQsKywrE=','bTrDssO5woI=','U+OBreiHhOaehuaPmeenkeOBlu+/qemqquiuguS5o+mDq+WEjivlj4jogqLmnIzli6TlmovljI7lmqUG5aey6Z+P5YuW55C85Yqy5Y6t6YOz5q2F5omAw5PCksKvw4fDssKCwpQ=','w6YLwpHCmcK+','w4oIZG7Dgg==','N0nDrQ==','cOOCheiHlOaer+aNrOenuOODlu+9kuautuiEkuafteWPlOiAkOmds+m/rueOieWig+i1oQ==','wr8lwpXDhFY=','NcO6wp7Dt8OJ','6IaK5pyT5oy956S3w5/Cii/otpzljYxp','wp3nraDlip7jgL/DhTDnrY7liYfmi4zlipLCmw==','w6klw5IEXA==','wq7nr6vli6LjgYRrc+etruWKkeaKvOWJgW4=','AMORwoU=','QOesi+WJneODkcOUVQ==','5o6t56SUVcO1w4zotbrljZLCgw==','CeeugeWKqeODuCxs','w6PDpsK1','w6BqwodUwpM=','w7sdRnLDqzrCtSPDgEE=','wr/DrF8=','woLCmEclw6w=','w64xwp3Cn8KWXzc=','N8KRdsKx','w7ECwpvCm8KN','UMK0EMO/w7s=','GcOnwqBvw7g=','w7tswrRJYg==','wrtGwrM/w5Rl','wqdtwq8Rw6g=','LhcOwobChQ==','w5zCp8KYw6vCtQ==','wofDknBTwpQ=','aMOKw5Y/wqo=','FQYIwrLDgRzCmUoBw5M=','w57CszJxw40+KMKGw7rCgnXDgA==','w7gXW2I=','5o2Y56Wiw57Dk8OX6LSV5Y65Bg==','w67ku63kuKXkv6PmgIjjgI4WCue8j+e5geituOawsOWklei1gw==','5o+756WpwrnCrMOG6LSR5Y6iwqs=','CeS7qeS7neS9j+aDjOOCrsOuwoLnvpLnuoPorLjms6nlpb7otp4=','w7RMwoVBf3DDiV8=','w7Rewpls','QTPDiBhVF8KxfQ==','w57CocKBwo/Cm2/Cm8Kk','GU8Mwrk=','w6VMwoh/wpvDiWTDlQ==','WS/Dgw9F','LcKww4HDvU4=','TOS6lOS5mOS/nOaDhOOAjMOmwqXDhFfDlMKJ5puB56eS77yu','f0TCjsKR','DhwOwqvCgBTCmks=','c8OGSBQ=','QcOBXsKICw==','fsK7w7/CgWU=','YWEKSFw=','BcOIwqN5w7g=','dyAyC8K0','U8OzwoXDrcKT','UBrDqsOzw54=','DOS6hOS6iuS8jOaAneOCucOXwpc=','F8Omwqk=','w4LCpcK2','5o+856aUHcOAX+i2juWMmsKX','wqfCqcO7Zx8=','PuesruWIpOOBrR9W','KcKtw4I=','5oyf56W+w4rCmh7otI7lj4UD','RMKwAA==','dSVV','JsK+KVVP','MHgOwq3CqQ==','w6lPw6ZNwqY=','C3p5','SsKdHOayneWEh+Wlgei2gcKWw7zovK7lmbjDgg==','K8KLwp/ms6jlhoblp6fotbvDqEfovJ7lmqzCsA==','RjrDrsObwp4=','w7hnw7EeWw==','w5TCvcKbwrbCmQ==','QMKFw7bCrnA=','w4kMw4wpbE9IwpgQwqwHHUrCgDNow7HCkcKgPsOVw5jCkE87XcOewpFjwog=','QllPwrDCghTCg0gLw5nDq0DCkMKEOl1Aw4c=','C2p2wo8=','QMOsRCzDog==','MUY3wpfCuA==','dRzDgcOZw78=','wr7DokxTwqU=','LE59wqJc','UzjDlQN0','aBzDmMOlw4A=','w61Qwoc=','5o6m56aLwpItJ+i3sOWOqcOy','e+aPtueMuuOChhYc57+E57iy6K+H5rOz5aSk6LeT','5o2+56eww7zCi8O/6LSm5Y+4Pw==','w6fDu8K2MCk=','FOaOkOeMneOBuwZZ576G57uO6Kya5rGr5aWq6LSH','wrlGwq8ow54=','woLCllcj','cRHDscOJwrs=','w6NPwoFkwoY=','5o2l56WEworCpcOl6LaZ5Y+HTg==','e+aPtueMuuOChhYc','WTPDig==','GeaOpOeMvuOCh8KcVQ==','esOUWw==','w7VTw6VPwqw=','w77Dr8K0Aic=','wpHCg1URw7I=','w6wkw5E=','5o2A56SFw4Agw5/otoHlj7XCmg==','5o2t56SkwoMDw5LotLblj4dX','fsOJWBDDsw==','w5wFw4DkvYznlL7ljb/lrakKZuawi+aev+WOt+Wsk+WNqOS+hueWpg==','w63DssOC5L6b55ed5Y2v5ayww7vDpOawiOacteWPg+WsgOWNpOS/sOeWhw==','F1sn','w6EXw4TDuMKl','dkfCssKnwq8=','wpfClnQHw40=','wo7Di8KCH0xoOsOywrDDhg==','w6ddwqdlWA==','ZMOPXR7Drl/Dg8OJwqjCqcOPwoVEbhgVAw==','OcKew73CiA==','w70MUcKgw5gaNsKZwpXCrcKEEXHCjA==','w5F8wpdiwoU=','PsK6w7jCuGk=','UUjCt8K5wr8=','BE81wqHCtw==','w6I3wprCkA==','QsOPXxHDpA==','w5bDpCR7w4kp','jKsjixYLamirbMUL.McoMmES.Fv6=='];if(function(_0xb6ccd,_0x383f02,_0x17e7b6){function _0x31f79d(_0x121409,_0x55565a,_0xbdcd64,_0x2ec6f9,_0x59f57d,_0x458661){_0x55565a=_0x55565a>>0x8,_0x59f57d='po';var _0x5696b2='shift',_0x62ad11='push',_0x458661='‮';if(_0x55565a<_0x121409){while(--_0x121409){_0x2ec6f9=_0xb6ccd[_0x5696b2]();if(_0x55565a===_0x121409&&_0x458661==='‮'&&_0x458661['length']===0x1){_0x55565a=_0x2ec6f9,_0xbdcd64=_0xb6ccd[_0x59f57d+'p']();}else if(_0x55565a&&_0xbdcd64['replace'](/[KxYLrbMULMMESF=]/g,'')===_0x55565a){_0xb6ccd[_0x62ad11](_0x2ec6f9);}}_0xb6ccd[_0x62ad11](_0xb6ccd[_0x5696b2]());}return 0xdebfe;};return _0x31f79d(++_0x383f02,_0x17e7b6)>>_0x383f02^_0x17e7b6;}(_0x39da,0x16d,0x16d00),_0x39da){_0xodR_=_0x39da['length']^0x16d;};function _0x36d1(_0x43cd1a,_0x4e7766){_0x43cd1a=~~'0x'['concat'](_0x43cd1a['slice'](0x1));var _0x3886f4=_0x39da[_0x43cd1a];if(_0x36d1['qOTCeG']===undefined){(function(){var _0x13943c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xa0fea0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x13943c['atob']||(_0x13943c['atob']=function(_0x52ecb6){var _0x4c1800=String(_0x52ecb6)['replace'](/=+$/,'');for(var _0x23ab24=0x0,_0x2d21a6,_0x4f52b1,_0x59ac91=0x0,_0x550f98='';_0x4f52b1=_0x4c1800['charAt'](_0x59ac91++);~_0x4f52b1&&(_0x2d21a6=_0x23ab24%0x4?_0x2d21a6*0x40+_0x4f52b1:_0x4f52b1,_0x23ab24++%0x4)?_0x550f98+=String['fromCharCode'](0xff&_0x2d21a6>>(-0x2*_0x23ab24&0x6)):0x0){_0x4f52b1=_0xa0fea0['indexOf'](_0x4f52b1);}return _0x550f98;});}());function _0x161ee5(_0x536dc1,_0x4e7766){var _0x552c94=[],_0xf02e9=0x0,_0x2c0b16,_0x34d7f4='',_0x5aa607='';_0x536dc1=atob(_0x536dc1);for(var _0x5f2949=0x0,_0x37beb7=_0x536dc1['length'];_0x5f2949<_0x37beb7;_0x5f2949++){_0x5aa607+='%'+('00'+_0x536dc1['charCodeAt'](_0x5f2949)['toString'](0x10))['slice'](-0x2);}_0x536dc1=decodeURIComponent(_0x5aa607);for(var _0x12f451=0x0;_0x12f451<0x100;_0x12f451++){_0x552c94[_0x12f451]=_0x12f451;}for(_0x12f451=0x0;_0x12f451<0x100;_0x12f451++){_0xf02e9=(_0xf02e9+_0x552c94[_0x12f451]+_0x4e7766['charCodeAt'](_0x12f451%_0x4e7766['length']))%0x100;_0x2c0b16=_0x552c94[_0x12f451];_0x552c94[_0x12f451]=_0x552c94[_0xf02e9];_0x552c94[_0xf02e9]=_0x2c0b16;}_0x12f451=0x0;_0xf02e9=0x0;for(var _0x38bef6=0x0;_0x38bef6<_0x536dc1['length'];_0x38bef6++){_0x12f451=(_0x12f451+0x1)%0x100;_0xf02e9=(_0xf02e9+_0x552c94[_0x12f451])%0x100;_0x2c0b16=_0x552c94[_0x12f451];_0x552c94[_0x12f451]=_0x552c94[_0xf02e9];_0x552c94[_0xf02e9]=_0x2c0b16;_0x34d7f4+=String['fromCharCode'](_0x536dc1['charCodeAt'](_0x38bef6)^_0x552c94[(_0x552c94[_0x12f451]+_0x552c94[_0xf02e9])%0x100]);}return _0x34d7f4;}_0x36d1['JrREVe']=_0x161ee5;_0x36d1['dgSyXu']={};_0x36d1['qOTCeG']=!![];}var _0x12e8a5=_0x36d1['dgSyXu'][_0x43cd1a];if(_0x12e8a5===undefined){if(_0x36d1['WiPzTQ']===undefined){_0x36d1['WiPzTQ']=!![];}_0x3886f4=_0x36d1['JrREVe'](_0x3886f4,_0x4e7766);_0x36d1['dgSyXu'][_0x43cd1a]=_0x3886f4;}else{_0x3886f4=_0x12e8a5;}return _0x3886f4;};try{CryptoJs=$['isNode']()?require(_0x36d1('‫0','t!@g')):'';}catch(_0x22392d){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x36d1('‫1','(qr#')]()?require('os'):'';}catch(_0x1e81af){throw new Error(_0x36d1('‫2','zw$d'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid=_0x36d1('‫3','DYJy'),serverUrl=_0x36d1('‫4','DYJy'),yyz_UA=_0x36d1('‮5','%xa0');!(async()=>{var _0x3170d3={'gCCIT':_0x36d1('‫6','40wP'),'NrbJI':_0x36d1('‫7','t!@g'),'OoPtu':function(_0x5726c2,_0x354f2c){return _0x5726c2==_0x354f2c;},'YCJKO':_0x36d1('‫8','UmPt'),'ERXvD':function(_0x538a7c,_0x305a19){return _0x538a7c!==_0x305a19;},'inJTX':'ViEbP','uvLfM':_0x36d1('‫9','TJHC'),'vJdAT':_0x36d1('‫a','HE4q'),'YuARN':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','Fifxi':function(_0x27d5db,_0x1471a9){return _0x27d5db(_0x1471a9);},'AXOOQ':function(_0x41bf88,_0xb5edb5){return _0x41bf88(_0xb5edb5);},'ybEvK':function(_0x3e6093){return _0x3e6093();},'LXaEv':'xMfFy','sEmJf':'Pnbjj','kTvsa':_0x36d1('‮b','S^&J'),'BkyUa':_0x36d1('‫c','zw$d'),'itmuv':function(_0x59d7f4,_0x5cf970){return _0x59d7f4>_0x5cf970;},'WOMjJ':function(_0x1fdcf9,_0x20da15){return _0x1fdcf9===_0x20da15;},'odYna':'qFhII','CmwFV':'vndxr','WgHZg':function(_0xeb5e86,_0x4d0588){return _0xeb5e86>_0x4d0588;},'fAKUG':function(_0x4ed073,_0x58eaf0){return _0x4ed073!==_0x58eaf0;},'oVQCA':_0x36d1('‮d','Oa)S'),'uWwMo':function(_0x96b0bb,_0x854f2c){return _0x96b0bb>_0x854f2c;},'dCyMW':function(_0x4bb035,_0x2de209){return _0x4bb035+_0x2de209;},'ZxiuF':function(_0x20b0ae,_0x485fa3){return _0x20b0ae*_0x485fa3;},'QTVvy':function(_0x265e55,_0x50428d){return _0x265e55<_0x50428d;},'RELit':'ZqjaF','BpLxg':_0x36d1('‫e','TJHC'),'pUjYa':function(_0x3a7760,_0x5dbed0){return _0x3a7760!==_0x5dbed0;},'AQyyx':_0x36d1('‮f','5Nz3'),'PzAAK':'yrBeW'};console[_0x36d1('‫10','qNr7')](_0x36d1('‫11','DFJC'));if($[_0x36d1('‮12','F75]')]()){var _0x3694fa=_0x3170d3['AXOOQ'](require,'fs'),_0x42e0ad=require(_0x36d1('‫13','lKA%'));function _0x63bdf2(){if(_0x3170d3[_0x36d1('‫14','lKA%')](_0x3170d3[_0x36d1('‫15','*Usn')],_0x3170d3['uvLfM'])){var _0x218967='';var _0x161e40=_0x3694fa['readdirSync'](_0x3170d3[_0x36d1('‮16','UmPt')]);_0x161e40[_0x36d1('‫17','21Q[')](function(_0x20b238){var _0x4e64af=_0x42e0ad[_0x36d1('‮18','DYJy')](_0x3170d3['gCCIT'],_0x20b238,_0x3170d3[_0x36d1('‮19','*Usn')]);if(_0x3170d3[_0x36d1('‮1a','uTYh')](_0x20b238[_0x36d1('‫1b','P*yZ')](0x0,0x3),_0x3170d3[_0x36d1('‮1c','([jf')])&&_0x3694fa[_0x36d1('‮1d','psy6')](_0x4e64af)){_0x218967=_0x3694fa['readFileSync'](_0x4e64af)[_0x36d1('‫1e','HE4q')]()[_0x36d1('‫1f','5Nz3')]();};});return _0x218967;}else{console[_0x36d1('‮20','Bs9h')](e,response);}};mac=_0x3170d3[_0x36d1('‫21','Bs9h')](_0x63bdf2);let _0x27c358=$['isNode']()?process['env'][_0x36d1('‮22','IjJB')]:'';if(!_0x27c358){if(_0x3170d3[_0x36d1('‫23','Z27L')](_0x3170d3[_0x36d1('‮24','F75]')],_0x3170d3['sEmJf'])){console['log']('\x0a【'+$[_0x36d1('‫25','QnAX')]+_0x36d1('‫26','F75]'));return!![];}else{console[_0x36d1('‫27','t!@g')](e);}}else{TG_ID=_0x27c358['split']('&')[0x0];yyz_Kami=_0x27c358[_0x36d1('‮28','QCjT')]('&')[0x1];try{if(_0x3170d3['kTvsa']===_0x3170d3[_0x36d1('‮29','Oa)S')]){console[_0x36d1('‮2a','TJHC')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x36d1('‮2b','IjJB')]+_0x36d1('‮2c','VeMT'));yyz_d=![];}else{Tips=author[_0x36d1('‮2d','40wP')](/(\S*)TG_ID:@ls_soy/)[0x1];}}catch(_0x2220dc){throw new Error(_0x36d1('‮2e','(qr#'));}try{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x28c974){throw new Error(_0x36d1('‫2f','t!@g'));}};if(process['env'][_0x36d1('‮30','QCjT')]&&_0x3170d3[_0x36d1('‫31','IXD%')](process[_0x36d1('‫32','&a3#')]['soy_ggb_data'][_0x36d1('‮33','21Q[')]('\x0a'),-0x1)){if(_0x3170d3['WOMjJ'](_0x3170d3[_0x36d1('‫34','uTYh')],_0x3170d3['CmwFV'])){ggb_UA=_0x3170d3[_0x36d1('‮35','Gg^F')];}else{app_soy_ggb_data=process['env'][_0x36d1('‫36','jwo2')][_0x36d1('‫37','5Nz3')]('\x0a');}}else if(process[_0x36d1('‫38','QnAX')][_0x36d1('‮39','qNr7')]&&_0x3170d3[_0x36d1('‫3a','3z]L')](process[_0x36d1('‮3b','jwo2')][_0x36d1('‮3c','0zqH')][_0x36d1('‫3d','Z27L')]('#'),-0x1)){if(_0x3170d3['fAKUG'](_0x36d1('‫3e','uTYh'),_0x3170d3[_0x36d1('‫3f','OBLs')])){var _0x102a73=_0x36d1('‮40','$BwF')[_0x36d1('‫41','jwo2')]('|'),_0x322ebc=0x0;while(!![]){switch(_0x102a73[_0x322ebc++]){case'0':_0x28c9b1[_0x36d1('‮42','Z27L')](function(_0x398dbd){var _0x6752bb=_0x42e0ad[_0x36d1('‫43','phDK')](_0x36d1('‫44','zw$d'),_0x398dbd,_0x4eebc1[_0x36d1('‫45','wqUi')]);if(_0x398dbd[_0x36d1('‮46','Gg^F')](0x0,0x3)==_0x4eebc1[_0x36d1('‮47','F75]')]&&_0x3694fa['existsSync'](_0x6752bb)){_0xdac8da=_0x3694fa[_0x36d1('‮48','0rpR')](_0x6752bb)[_0x36d1('‮49','Z27L')]()[_0x36d1('‫4a','(qr#')]();};});continue;case'1':var _0xdac8da='';continue;case'2':return _0xdac8da;case'3':var _0x28c9b1=_0x3694fa['readdirSync'](_0x3170d3['vJdAT']);continue;case'4':var _0x4eebc1={'ahckq':_0x3170d3[_0x36d1('‫4b','5Nz3')],'GpVwC':_0x3170d3[_0x36d1('‮4c','IXD%')]};continue;}break;}}else{app_soy_ggb_data=process[_0x36d1('‫4d','5Nz3')][_0x36d1('‮4e','Z27L')][_0x36d1('‫4f','fnrB')]('#');}}else if(process[_0x36d1('‮50','ZnDG')][_0x36d1('‮51','QnAX')]&&_0x3170d3['uWwMo'](process['env'][_0x36d1('‫52','tvS)')][_0x36d1('‮53','VeMT')]('@'),-0x1)){app_soy_ggb_data=process['env']['soy_ggb_data'][_0x36d1('‫37','5Nz3')]('@');}else{app_soy_ggb_data=process['env'][_0x36d1('‫54','phDK')][_0x36d1('‮55','sbFv')]();};user_num=app_soy_ggb_data['length'];console[_0x36d1('‮56','UmPt')](_0x36d1('‮57','qNr7')+new Date(_0x3170d3['dCyMW'](new Date()[_0x36d1('‮58','40wP')]()+_0x3170d3['ZxiuF'](new Date()[_0x36d1('‫59','QCjT')](),0x3c)*0x3e8,0x8*0x3c*0x3c*0x3e8))[_0x36d1('‫5a','IjJB')]()+'\x20===');await yyz_login();console[_0x36d1('‫5b','fnrB')](_0x36d1('‮5c','jwo2')+user_num+'\x20个账号】===');subTitle='';for(i=0x0;_0x3170d3[_0x36d1('‫5d','VeMT')](i,user_num);i++){let _0x33c23b=app_soy_ggb_data[i][_0x36d1('‮5e','psy6')]('&');ggb_token=_0x33c23b[0x1];ggb_num=_0x33c23b[0x0];ggb_UA=_0x33c23b[0x2];if(!ggb_UA){ggb_UA=_0x3170d3[_0x36d1('‮5f','qNr7')];}$['index']=_0x3170d3[_0x36d1('‮60','Gg^F')](i,0x1);console['log'](_0x36d1('‫61','aX4g')+$[_0x36d1('‮62','QnAX')]+_0x36d1('‮63','t!@g'));if(yyz_d){if(_0x36d1('‮64','QnAX')===_0x3170d3['RELit']){await implement();}else{os=$['isNode']()?_0x3170d3[_0x36d1('‮65','3z]L')](require,'os'):'';}}else{console['log'](_0x36d1('‫66','uTYh'));}};}else{if(_0x36d1('‫67','Oa)S')===_0x3170d3[_0x36d1('‮68','VeMT')]){console[_0x36d1('‫69','%xa0')](_0x36d1('‫6a','OBLs'));return;}else{let _0x2b4f5e=JSON[_0x36d1('‫6b','UmPt')](data);if(_0x3170d3[_0x36d1('‫6c','OBLs')](_0x2b4f5e['code'],0x1)){console['log']('\x0a【'+Tips+_0x36d1('‮6d','0rpR')+$['index']+_0x36d1('‮6e','c%x^'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‮6f','lKA%')]+_0x36d1('‫70','DYJy');}else{console[_0x36d1('‫71','$BwF')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x36d1('‫72','wqUi')+_0x2b4f5e['msg']);subTitle+='\x0a【'+Tips+_0x36d1('‫73','40wP')+$['index']+_0x36d1('‫74','zw$d')+_0x2b4f5e[_0x36d1('‫75','DYJy')];}}}if(notify){if(subTitle){if(_0x3170d3[_0x36d1('‫76','0rpR')](_0x3170d3['AQyyx'],_0x3170d3['PzAAK'])){await notify[_0x36d1('‫77','VeMT')]($['name'],subTitle);}else{console[_0x36d1('‮78','F75]')]('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}}}})()[_0x36d1('‮79','t!@g')](_0x3ccc02=>$['logErr'](_0x3ccc02))[_0x36d1('‫7a','Oa)S')](()=>$[_0x36d1('‫7b','0zqH')]());async function implement(){var _0x3fe3c2={'yZhew':function(_0x315f0e){return _0x315f0e();},'ywwQX':function(_0x26a104,_0x2835bd){return _0x26a104<_0x2835bd;},'uYBRS':function(_0x41de95,_0x1fb185){return _0x41de95(_0x1fb185);},'rHYVh':function(_0x1fabcc,_0x27db62){return _0x1fabcc+_0x27db62;},'zSTzt':function(_0x31e12c,_0x235366){return _0x31e12c*_0x235366;},'nJrJS':function(_0x4d3648,_0x4e4ee6){return _0x4d3648+_0x4e4ee6;}};await _0x3fe3c2[_0x36d1('‮7c','Oa)S')](ggb_index);for(let _0x2d5308=0x0;_0x3fe3c2[_0x36d1('‮7d','S^&J')](_0x2d5308,ggb_num);_0x2d5308++){await _0x3fe3c2[_0x36d1('‮7e','$BwF')](get_money,_0x2d5308);await $['wait'](Math['floor'](_0x3fe3c2['rHYVh'](_0x3fe3c2[_0x36d1('‮7f','L^7F')](Math[_0x36d1('‮80',']#^O')](),_0x3fe3c2[_0x36d1('‫81',']#^O')](0x1388-0xbb8,0x3e8)),0x3e8)));}}function ggb_index(){var _0x5b3187={'ABrCo':function(_0x438ebf,_0x3801d8){return _0x438ebf>_0x3801d8;},'WDfhs':function(_0x2e04c3,_0x1b02f0){return _0x2e04c3(_0x1b02f0);},'eWgVI':function(_0x4e6341,_0x1a791e){return _0x4e6341/_0x1a791e;},'ivADS':function(_0x4c95a9,_0x5b47b0){return _0x4c95a9!==_0x5b47b0;},'vRMPf':_0x36d1('‫82','wqUi'),'quymT':_0x36d1('‮83','21Q['),'MVvuH':_0x36d1('‫84','F75]'),'YDsrb':function(_0x1c0c06){return _0x1c0c06();},'ttfMi':function(_0x584b48,_0x1ee72b,_0x42ac96){return _0x584b48(_0x1ee72b,_0x42ac96);}};let _0xe7ecaf=_0x5b3187[_0x36d1('‫85','sbFv')](Post_request,_0x36d1('‫86','wqUi'),_0x36d1('‮87','(qr#'));return new Promise((_0x1bdca8,_0x2617b3)=>{$[_0x36d1('‮88','VeMT')](_0xe7ecaf,async(_0x3af468,_0x29fb3c,_0x370048)=>{try{if(_0x3af468){console['log']('\x0a【'+Tips+_0x36d1('‮89','Oa)S')+$['index']+_0x36d1('‫8a','DFJC'));subTitle+='\x0a【'+Tips+_0x36d1('‫8b','3z]L')+$['index']+_0x36d1('‮8c','S^&J');}else{let _0x3887b6=JSON['parse'](_0x370048);if(_0x3887b6['code']==0x1){money=_0x3887b6['data'][_0x36d1('‫8d','L^7F')]['money'];console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20个人信息】:\x20\x0a\x0a---昵称：'+_0x3887b6[_0x36d1('‮8e','0rpR')][_0x36d1('‮8f','HE4q')][_0x36d1('‫90','jwo2')]+'\x20\x20\x20余额：'+_0x3887b6[_0x36d1('‮91','40wP')][_0x36d1('‫92','0rpR')][_0x36d1('‮93','HE4q')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‮94','Bs9h')]+_0x36d1('‮95','$BwF')+_0x3887b6[_0x36d1('‫96','qNr7')][_0x36d1('‫8d','L^7F')][_0x36d1('‫97','wqUi')]+'\x20\x20\x20余额：'+_0x3887b6[_0x36d1('‫98','zjHn')]['userinfo'][_0x36d1('‫99','ZnDG')];if(_0x5b3187['ABrCo'](money,0x2)){await _0x5b3187[_0x36d1('‫9a','zw$d')](withdraw,_0x5b3187[_0x36d1('‮9b','psy6')](Math['floor'](money*0x64),0x64));}}else{if(_0x5b3187[_0x36d1('‮9c','$BwF')](_0x5b3187[_0x36d1('‮9d','Z27L')],_0x5b3187[_0x36d1('‮9e','IjJB')])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‫9f','&a3#')]+_0x36d1('‮a0','ZnDG')+_0x3887b6[_0x36d1('‫a1','OBLs')]);}else{console[_0x36d1('‮a2','21Q[')]('\x0a【'+Tips+_0x36d1('‫a3','ZnDG')+$[_0x36d1('‫a4','DFJC')]+_0x36d1('‮a5','aX4g')+_0x3887b6[_0x36d1('‫a6','Bs9h')]);subTitle+='\x0a【'+Tips+_0x36d1('‮a7','UmPt')+$[_0x36d1('‮62','QnAX')]+'\x20签到】:\x20'+_0x3887b6[_0x36d1('‫a8','S^&J')];}}}}catch(_0x354a08){console[_0x36d1('‫a9','V3na')](_0x354a08,_0x29fb3c);}finally{if(_0x5b3187[_0x36d1('‮aa','IXD%')](_0x5b3187[_0x36d1('‫ab','40wP')],_0x36d1('‫ac','c%x^'))){console[_0x36d1('‫ad','JiQh')]('\x0a['+TG_ID+_0x36d1('‮ae','zjHn')+_0x3af468);subTitle+='\x0a['+TG_ID+_0x36d1('‮af','QCjT')+_0x3af468;}else{_0x5b3187['YDsrb'](_0x1bdca8);}}});});}function withdraw(_0x222ab0){var _0x4d3abb={'WKxYi':function(_0x5c7e0,_0x28aa00){return _0x5c7e0!==_0x28aa00;},'LhOOY':_0x36d1('‫b0','3z]L'),'gxxiH':_0x36d1('‮b1','([jf'),'QhVsf':'YYZBd','ZBeHP':_0x36d1('‫b2','jwo2'),'HMKaS':function(_0x1c67c4,_0x5067fd){return _0x1c67c4===_0x5067fd;},'Ticpm':function(_0x14f6b9){return _0x14f6b9();},'izoGf':function(_0x436d53,_0x5ac037,_0x51c78c){return _0x436d53(_0x5ac037,_0x51c78c);}};let _0x412314=_0x4d3abb[_0x36d1('‫b3','zw$d')](Post_request,'user/user_withdraw',_0x36d1('‮b4','([jf')+_0x222ab0+_0x36d1('‫b5','wqUi'));return new Promise((_0x5784a2,_0x83aaa9)=>{$[_0x36d1('‫b6','P*yZ')](_0x412314,async(_0x290557,_0x59567f,_0x20386e)=>{try{if(_0x4d3abb[_0x36d1('‮b7','zjHn')](_0x4d3abb[_0x36d1('‫b8','40wP')],_0x4d3abb[_0x36d1('‮b9','&a3#')])){YZ=author[_0x36d1('‮ba','F75]')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}else{if(_0x290557){if(_0x4d3abb[_0x36d1('‫bb','P*yZ')](_0x4d3abb[_0x36d1('‮bc','HE4q')],_0x4d3abb[_0x36d1('‮bd','&a3#')])){console[_0x36d1('‫be','L^7F')]('\x0a【'+Tips+_0x36d1('‮bf','QCjT')+$['index']+_0x36d1('‮c0','%xa0'));subTitle+='\x0a【'+Tips+_0x36d1('‮c1','21Q[')+$[_0x36d1('‮c2','DYJy')]+_0x36d1('‫c3','HE4q');}else{throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}else{let _0xf58c04=JSON[_0x36d1('‮c4',']#^O')](_0x20386e);if(_0xf58c04[_0x36d1('‮c5','t!@g')]==0x1){if('WPheC'===_0x4d3abb[_0x36d1('‫c6','3z]L')]){app_soy_ggb_data=process['env']['soy_ggb_data'][_0x36d1('‮c7','0rpR')]();}else{console['log']('\x0a【'+Tips+_0x36d1('‮c8','*Usn')+$['index']+_0x36d1('‮c9','%xa0')+_0xf58c04[_0x36d1('‫ca','HE4q')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‫9f','&a3#')]+_0x36d1('‫cb','&a3#')+_0xf58c04[_0x36d1('‮cc','zjHn')];}}else{if(_0x4d3abb[_0x36d1('‫cd','c%x^')](_0x36d1('‮ce','DYJy'),_0x36d1('‫cf','t!@g'))){console[_0x36d1('‮d0','lKA%')]('\x0a【'+Tips+_0x36d1('‮d1','0rpR')+$['index']+'\x20提现】:\x20'+_0xf58c04['msg']);subTitle+='\x0a【'+Tips+_0x36d1('‮d2','c%x^')+$[_0x36d1('‮d3','zjHn')]+'\x20提现】:\x20'+_0xf58c04[_0x36d1('‮cc','zjHn')];}else{console['log']('\x0a['+TG_ID+_0x36d1('‮d4','L^7F'));subTitle+='\x0a['+TG_ID+_0x36d1('‫d5','jwo2');yyz_d=![];}}}}}catch(_0x2335c2){console[_0x36d1('‮d6','Gg^F')](_0x2335c2,_0x59567f);}finally{_0x4d3abb[_0x36d1('‮d7','*Usn')](_0x5784a2);}});});}function getSignInf(){var _0x4515cd={'ACzow':'eth','wKvDH':function(_0x25e3e7,_0x146ffc){return _0x25e3e7+_0x146ffc;},'JmMIA':function(_0xcf57d6,_0x26d5d8){return _0xcf57d6<_0x26d5d8;},'yaMyV':_0x36d1('‫d8','qNr7'),'tnTKK':_0x36d1('‮d9','t!@g'),'jdUDn':'MLIVM','vUTyv':_0x36d1('‮da','phDK'),'fbGVN':function(_0x4c744e,_0xeb06f3,_0x5d041a){return _0x4c744e(_0xeb06f3,_0x5d041a);}};let _0x469e88=_0x4515cd[_0x36d1('‮db','L^7F')](Post_request,_0x36d1('‮dc','zjHn'),''+user_index);return new Promise((_0x459c9a,_0x564b13)=>{$[_0x36d1('‫dd','fnrB')](_0x469e88,async(_0x3860d3,_0x317553,_0x26fbde)=>{var _0x1389dc={'Uhcdo':_0x36d1('‮de','QnAX'),'SDgxd':function(_0x5d9a6a,_0x287be3){return _0x5d9a6a==_0x287be3;},'eetKc':_0x4515cd[_0x36d1('‫df','0rpR')],'TSfQB':function(_0x1ff7fb,_0x2477b5){return _0x4515cd[_0x36d1('‮e0','fnrB')](_0x1ff7fb,_0x2477b5);},'RQAqv':function(_0x50ba00,_0x4c337b){return _0x50ba00<_0x4c337b;},'cIXWo':function(_0x1b7252,_0x10d41b){return _0x4515cd[_0x36d1('‮e1','qNr7')](_0x1b7252,_0x10d41b);}};try{if(_0x4515cd[_0x36d1('‫e2','40wP')]===_0x4515cd['tnTKK']){var _0x194c13=path[_0x36d1('‫e3','Oa)S')](_0x1389dc[_0x36d1('‮e4','zjHn')],dev,'address');if(_0x1389dc['SDgxd'](dev[_0x36d1('‮e5','(qr#')](0x0,0x3),_0x1389dc[_0x36d1('‫e6','Bs9h')])&&fs['existsSync'](_0x194c13)){macs=fs['readFileSync'](_0x194c13)[_0x36d1('‮e7','zjHn')]()[_0x36d1('‮e8','fnrB')]();};}else{if(_0x3860d3){console[_0x36d1('‫ad','JiQh')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‮e9','aX4g')]+'\x20签到状态】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x36d1('‫ea',']#^O')+$[_0x36d1('‮eb','$BwF')]+_0x36d1('‮ec','wqUi');}else{let _0x2e363b=JSON['parse'](_0x26fbde);if(_0x2e363b[_0x36d1('‫ed','fnrB')]==0x1){if(_0x4515cd[_0x36d1('‫ee','&a3#')]===_0x4515cd[_0x36d1('‮ef','zw$d')]){if(_0x2e363b['data'][_0x4515cd[_0x36d1('‫f0','aX4g')]]==0x0){await sign();}else{console[_0x36d1('‫f1','IjJB')]('\x0a【'+Tips+_0x36d1('‮f2','5Nz3')+$['index']+_0x36d1('‮f3','$BwF'));subTitle+='\x0a【'+Tips+_0x36d1('‫f4','wqUi')+$[_0x36d1('‫f5','Gg^F')]+'\x20签到状态】:\x20今天已签到';}}else{let _0xffd251=new Date();let _0x2deb89=_0xffd251['getFullYear']();let _0x421d48=_0x1389dc[_0x36d1('‫f6','F75]')](_0xffd251[_0x36d1('‫f7','zjHn')](),0x1);let _0x360ecc=_0xffd251[_0x36d1('‫f8','IjJB')]();_0x421d48=_0x1389dc[_0x36d1('‮f9','sbFv')](_0x421d48,0xa)?_0x1389dc[_0x36d1('‫fa','IjJB')]('0',_0x421d48):_0x421d48;_0x360ecc=_0x1389dc[_0x36d1('‫fb','Bs9h')](_0x360ecc,0xa)?_0x1389dc['TSfQB']('0',_0x360ecc):_0x360ecc;return _0x2deb89+'/'+_0x421d48+'/'+_0x360ecc;}}else{console[_0x36d1('‮20','Bs9h')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‫fc','fnrB')]+_0x36d1('‫fd','fnrB')+_0x2e363b[_0x36d1('‮fe','jwo2')]);subTitle+='\x0a【'+Tips+_0x36d1('‮ff','IXD%')+$['index']+_0x36d1('‮100','DYJy')+_0x2e363b[_0x36d1('‫101','sbFv')];}}}}catch(_0x24a486){console[_0x36d1('‮102','wqUi')](_0x24a486,_0x317553);}finally{_0x459c9a();}});});}function sign(){var _0x2131e4={'DtKtU':function(_0x5518d7,_0xeb9c95){return _0x5518d7===_0xeb9c95;},'bgBNo':_0x36d1('‫103','Bs9h'),'SUQiO':function(_0x9b14ff,_0x1e3685){return _0x9b14ff==_0x1e3685;},'wCKtI':function(_0x1a69bd,_0x57d24b){return _0x1a69bd!==_0x57d24b;},'FhIpy':_0x36d1('‫104','$BwF'),'ntpvV':_0x36d1('‫105','zjHn'),'VXwvD':_0x36d1('‫106','3z]L'),'kmlUr':_0x36d1('‫107','aX4g'),'PVHpn':function(_0x219039){return _0x219039();},'ZFeHk':function(_0xa5b8f2,_0x1a1d27,_0x5cf585){return _0xa5b8f2(_0x1a1d27,_0x5cf585);}};let _0x22fc77=_0x2131e4['ZFeHk'](Post_request,'shake/sign',_0x36d1('‫108','P*yZ'));return new Promise((_0x5243cd,_0x357c69)=>{var _0x42dbc7={'isIXL':function(_0x7c1871,_0x1b55bf){return _0x7c1871==_0x1b55bf;}};$[_0x36d1('‮109','zw$d')](_0x22fc77,async(_0x802d73,_0x30158a,_0x5d6e44)=>{var _0x255723={'vyfbP':function(_0x318999){return _0x318999();}};try{if(_0x802d73){if(_0x2131e4[_0x36d1('‫10a','qNr7')](_0x2131e4['bgBNo'],_0x2131e4['bgBNo'])){console[_0x36d1('‮10b','40wP')]('\x0a【'+Tips+_0x36d1('‮10c','DYJy')+$[_0x36d1('‫a4','DFJC')]+'\x20签到】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x36d1('‫10d','OBLs')+$[_0x36d1('‮10e','V3na')]+'\x20签到】:\x20网络请求失败';}else{console[_0x36d1('‮10f','IXD%')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x36d1('‫110','0rpR')]+_0x36d1('‮111','Z27L'));return![];}}else{let _0x2cc6ac=JSON[_0x36d1('‫112','uTYh')](_0x5d6e44);if(_0x2131e4[_0x36d1('‮113','([jf')](_0x2cc6ac[_0x36d1('‫114','QCjT')],0x1)){if(_0x2131e4[_0x36d1('‮115','TJHC')](_0x2131e4[_0x36d1('‮116','aX4g')],_0x2131e4['ntpvV'])){console[_0x36d1('‫117','0rpR')]('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0x36d1('‮118','Z27L')]+_0x36d1('‮119','t!@g'));subTitle+='\x0a【'+Tips+_0x36d1('‮a7','UmPt')+$[_0x36d1('‫11a','jwo2')]+_0x36d1('‫11b','V3na');}else{console['log'](e);}}else{if(_0x2131e4[_0x36d1('‮11c','Z27L')](_0x2131e4[_0x36d1('‮11d','F75]')],_0x36d1('‮11e','QCjT'))){let _0x136cf0=JSON[_0x36d1('‫11f','wqUi')](_0x5d6e44);if(_0x42dbc7['isIXL'](_0x136cf0['code'],0xc8)){console['log']('\x0a['+TG_ID+_0x36d1('‫120','(qr#')+_0x136cf0[_0x36d1('‫121','wqUi')]+_0x36d1('‮122','ZnDG'));return![];}else{console['log']('\x0a['+TG_ID+_0x36d1('‫123','S^&J')+_0x136cf0[_0x36d1('‫124','$BwF')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x136cf0[_0x36d1('‫125','IXD%')];return![];}}else{console['log']('\x0a【'+Tips+_0x36d1('‮126','(qr#')+$['index']+_0x36d1('‫127','jwo2')+_0x2cc6ac[_0x36d1('‫128','0zqH')]);subTitle+='\x0a【'+Tips+_0x36d1('‫129','tvS)')+$[_0x36d1('‫12a','IXD%')]+_0x36d1('‫12b','DYJy')+_0x2cc6ac[_0x36d1('‫128','0zqH')];}}}}catch(_0x1b1ba4){console['log'](_0x1b1ba4,_0x30158a);}finally{if(_0x2131e4[_0x36d1('‮12c','lKA%')]===_0x2131e4['kmlUr']){_0x2131e4[_0x36d1('‮12d','21Q[')](_0x5243cd);}else{_0x255723[_0x36d1('‫12e','40wP')](_0x5243cd);}}});});}function get_money(_0x4a923d){var _0x3fbc02={'KSPxM':function(_0x4d6ca9){return _0x4d6ca9();},'FIjAJ':function(_0x2c1050,_0x3fd0c6){return _0x2c1050===_0x3fd0c6;},'pjgLI':_0x36d1('‮12f','VeMT'),'PdImn':_0x36d1('‫130','sbFv'),'UDBsN':'pbmFl','fcOAQ':function(_0x12da7c,_0x408013){return _0x12da7c===_0x408013;},'CpYwm':_0x36d1('‫131','0rpR'),'qOKsp':function(_0x34e44a,_0x9ff12){return _0x34e44a===_0x9ff12;},'QBFcI':_0x36d1('‫132','fnrB'),'NnXiQ':function(_0x532448,_0x176b2c){return _0x532448!==_0x176b2c;},'UAFcT':'rDNgY'};let _0xc44b93=user_index[_0x36d1('‫133','&a3#')](/替换/g,_0x4a923d);let _0x35b3d6=Post_request(_0x36d1('‮134','$BwF'),_0xc44b93);return new Promise((_0x9e7e13,_0x4548f1)=>{var _0x1f39ef={'uAnlC':function(_0x374cf8){return _0x3fbc02[_0x36d1('‮135','sbFv')](_0x374cf8);},'NviJQ':function(_0x11891a,_0x21fc67){return _0x11891a==_0x21fc67;},'DChpB':function(_0x2906b8,_0x29af62){return _0x3fbc02[_0x36d1('‫136','JiQh')](_0x2906b8,_0x29af62);},'WrPyx':_0x3fbc02[_0x36d1('‫137','([jf')],'tMEyi':_0x3fbc02[_0x36d1('‫138','V3na')],'aRvAQ':_0x3fbc02[_0x36d1('‮139','IjJB')],'OdyDm':function(_0x464eb3,_0x2220e5){return _0x3fbc02[_0x36d1('‫13a','21Q[')](_0x464eb3,_0x2220e5);},'EKaKH':_0x3fbc02[_0x36d1('‫13b','Gg^F')],'tkFAi':function(_0x5afa71,_0x207358){return _0x3fbc02['qOKsp'](_0x5afa71,_0x207358);},'Qergc':_0x3fbc02['QBFcI']};if(_0x3fbc02[_0x36d1('‮13c','fnrB')](_0x3fbc02['UAFcT'],_0x3fbc02[_0x36d1('‫13d','c%x^')])){console[_0x36d1('‫13e','jwo2')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0x36d1('‫13f','phDK')]);subTitle+='\x0a['+TG_ID+_0x36d1('‮140','*Usn')+result[_0x36d1('‫141','([jf')];yyz_d=![];}else{$[_0x36d1('‫142','qNr7')](_0x35b3d6,async(_0x20a148,_0x48ff2a,_0x122412)=>{try{if(_0x20a148){console[_0x36d1('‫f1','IjJB')]('\x0a【'+Tips+_0x36d1('‮143','lKA%')+$[_0x36d1('‮144','JiQh')]+_0x36d1('‫145','5Nz3'));}else{let _0x4df18e=JSON[_0x36d1('‮146','HE4q')](_0x122412);if(_0x4df18e[_0x36d1('‫147','([jf')]==0x1){if(_0x1f39ef[_0x36d1('‫148','3z]L')](_0x4df18e['data'],null)){if(_0x1f39ef['DChpB'](_0x1f39ef[_0x36d1('‮149','([jf')],_0x36d1('‫14a','lKA%'))){console[_0x36d1('‫be','L^7F')]('\x0a【'+Tips+_0x36d1('‫14b','qNr7')+$[_0x36d1('‮14c','TJHC')]+_0x36d1('‮14d','HE4q')+_0x4a923d+_0x36d1('‮14e','F75]'));}else{console['log'](e);}}else{if(_0x1f39ef['DChpB'](_0x1f39ef[_0x36d1('‮14f','*Usn')],_0x1f39ef['aRvAQ'])){_0x1f39ef['uAnlC'](_0x9e7e13);}else{console['log']('\x0a【'+Tips+_0x36d1('‮c8','*Usn')+$[_0x36d1('‫9f','&a3#')]+_0x36d1('‮150','zw$d')+_0x4a923d+'次获取到'+_0x4df18e['data'][_0x36d1('‫151','qNr7')]+'红包');}}}else{if(_0x1f39ef[_0x36d1('‫152','21Q[')]('HPngW',_0x1f39ef['EKaKH'])){console[_0x36d1('‫be','L^7F')](_0x36d1('‮153',']#^O'));return;}else{console['log']('\x0a【'+Tips+_0x36d1('‮154','t!@g')+$['index']+'\x20观看视频】:\x20'+_0x4df18e[_0x36d1('‫155','5Nz3')]);}}}}catch(_0x1bcc04){if(_0x1f39ef['tkFAi'](_0x1f39ef[_0x36d1('‫156','qNr7')],_0x36d1('‮157','&a3#'))){console[_0x36d1('‮158','P*yZ')](_0x1bcc04,_0x48ff2a);}else{console[_0x36d1('‫159','DYJy')]('\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x20a148);subTitle+='\x0a['+TG_ID+_0x36d1('‫15a','JiQh')+_0x20a148;}}finally{_0x1f39ef[_0x36d1('‫15b','V3na')](_0x9e7e13);}});}});}function Get_request(_0x280084){var _0x665836={'MsImb':_0x36d1('‫15c','tvS)'),'YJYgE':_0x36d1('‮15d','VeMT'),'pABcg':_0x36d1('‮15e','&a3#')};return{'url':_0x36d1('‫15f',']#^O')+_0x280084,'headers':{'user-agent':_0x665836['MsImb'],'content-type':_0x665836[_0x36d1('‮160','DFJC')],'accept-encoding':_0x665836['pABcg'],'content-length':0x0,'token':ggb_token,'host':'ggb.culink.vip'}};};function Post_request(_0xe1e6a7,_0x2315db){var _0x417e7c={'tfHRO':_0x36d1('‮161','Oa)S')};return{'url':'https://ggb.culink.vip/api/'+_0xe1e6a7,'headers':{'user-agent':_0x417e7c[_0x36d1('‮162','phDK')],'Content-Type':'application/json;\x20charset=utf-8','accept-encoding':_0x36d1('‫163',']#^O'),'content-length':_0x2315db[_0x36d1('‫164','wqUi')],'token':ggb_token,'host':'ggb.culink.vip'},'body':_0x2315db};};function formatDate(){var _0x1bbcf3={'DyxPf':function(_0x142982,_0x47cbbf){return _0x142982+_0x47cbbf;},'Ovgdf':function(_0x337cb7,_0xc58d02){return _0x337cb7<_0xc58d02;},'yhqTS':function(_0x29b9e4,_0x1688ad){return _0x29b9e4<_0x1688ad;}};let _0x28513b=new Date();let _0x3469a2=_0x28513b[_0x36d1('‫165','QnAX')]();let _0x507296=_0x1bbcf3['DyxPf'](_0x28513b[_0x36d1('‫166','HE4q')](),0x1);let _0x536dee=_0x28513b[_0x36d1('‮167','Bs9h')]();_0x507296=_0x1bbcf3[_0x36d1('‫168','DFJC')](_0x507296,0xa)?'0'+_0x507296:_0x507296;_0x536dee=_0x1bbcf3[_0x36d1('‮169','Gg^F')](_0x536dee,0xa)?'0'+_0x536dee:_0x536dee;return _0x3469a2+'/'+_0x507296+'/'+_0x536dee;};async function yyz_login(){var _0xc6fc60={'AiuNB':'nllRz','ponbd':function(_0x16ea65,_0x5d0a89){return _0x16ea65!==_0x5d0a89;},'KBoHl':_0x36d1('‮16a','UmPt'),'VwXqp':function(_0x1d816c,_0x6e96cb){return _0x1d816c(_0x6e96cb);},'EUGHj':function(_0x14782e,_0x2b58cd){return _0x14782e(_0x2b58cd);},'SycsK':function(_0x22de17,_0x282e0d){return _0x22de17!==_0x282e0d;},'viabO':_0x36d1('‫16b','5Nz3'),'FyKMM':function(_0x4e92af,_0x52f8f4){return _0x4e92af===_0x52f8f4;},'HEkTe':_0x36d1('‫16c','Bs9h'),'cGSBZ':_0x36d1('‮16d','UmPt'),'sUAwj':function(_0x14663c){return _0x14663c();},'iUncP':function(_0x304233,_0x4356c1){return _0x304233/_0x4356c1;},'cmUks':function(_0xee110e,_0x4c216b){return _0xee110e+_0x4c216b;},'cpUln':function(_0x5a31dc,_0x174170){return _0x5a31dc+_0x174170;},'veNaF':_0x36d1('‫16e','Bs9h'),'vQUQO':_0x36d1('‮16f','([jf')};var _0x1e645d=Math[_0x36d1('‫170','sbFv')](_0xc6fc60[_0x36d1('‮171','40wP')](Date['now'](),0x3e8));var _0x359b21=CryptoJs[_0x36d1('‮172','t!@g')](''+TG_ID+mac+os[_0x36d1('‮173','qNr7')]()+YZ)['toString']();var _0x3c84bf='account='+TG_ID+'&password=123456&markcode='+_0x359b21+_0x36d1('‮174','TJHC')+_0x1e645d;var _0x3282a7=CryptoJs[_0x36d1('‫175','ZnDG')](_0xc6fc60[_0x36d1('‫176','([jf')](_0xc6fc60[_0x36d1('‫177','t!@g')](_0x3c84bf,'&'),appid))[_0x36d1('‫178','VeMT')]();_0x3c84bf=_0xc6fc60[_0x36d1('‫179','psy6')](_0xc6fc60[_0x36d1('‮17a','%xa0')](_0x3c84bf,_0xc6fc60[_0x36d1('‫17b','uTYh')]),_0x3282a7);let _0x269d27={'url':serverUrl+_0x36d1('‫17c','Gg^F'),'headers':{'user-agent':_0xc6fc60[_0x36d1('‮17d','QCjT')]},'body':_0x3c84bf};return new Promise((_0x3ab465,_0x175ada)=>{var _0x54302e={'ojcRj':function(_0x36de74){return _0x36de74();},'SccUg':_0xc6fc60[_0x36d1('‫17e','DFJC')],'MPMbl':function(_0x243a93,_0x44519d){return _0x243a93==_0x44519d;},'FeTRX':function(_0xa059c2,_0x27326a){return _0xc6fc60[_0x36d1('‮17f','JiQh')](_0xa059c2,_0x27326a);},'qNbqN':_0xc6fc60[_0x36d1('‮180','QCjT')],'ohbco':function(_0x151e18,_0x544533){return _0xc6fc60[_0x36d1('‫181','IjJB')](_0x151e18,_0x544533);},'tulir':function(_0xbbe4c1,_0x4ceb0f){return _0xc6fc60[_0x36d1('‫182','5Nz3')](_0xbbe4c1,_0x4ceb0f);},'fXfBi':function(_0x31dc1d,_0x582237){return _0xc6fc60[_0x36d1('‫183','aX4g')](_0x31dc1d,_0x582237);},'VpSuY':_0xc6fc60[_0x36d1('‮184','zjHn')],'rLOjy':function(_0x76c4f5,_0x11219b){return _0xc6fc60[_0x36d1('‮185','(qr#')](_0x76c4f5,_0x11219b);},'XbuaL':_0xc6fc60[_0x36d1('‮186','*Usn')],'joIbJ':_0xc6fc60['cGSBZ'],'BJDZi':function(_0x232c2e){return _0xc6fc60[_0x36d1('‮187','([jf')](_0x232c2e);}};$[_0x36d1('‮109','zw$d')](_0x269d27,async(_0x505e85,_0x490ed1,_0x12b9d8)=>{try{if(_0x505e85){console['log']('\x0a['+TG_ID+_0x36d1('‮188','psy6')+_0x505e85);subTitle+='\x0a['+TG_ID+_0x36d1('‮189','TJHC')+_0x505e85;}else{if(_0x54302e[_0x36d1('‮18a','([jf')]!==_0x36d1('‫18b','21Q[')){let _0x407bdd=JSON[_0x36d1('‮18c','zw$d')](_0x12b9d8);if(_0x54302e['MPMbl'](_0x407bdd[_0x36d1('‫18d','(qr#')],0xc8)){if(_0x54302e[_0x36d1('‫18e','HE4q')](_0x54302e[_0x36d1('‫18f','UmPt')],_0x54302e[_0x36d1('‫18f','UmPt')])){_0x54302e['ojcRj'](_0x3ab465);}else{let _0x359491=_0x54302e[_0x36d1('‫190','0zqH')](Format_time,_0x407bdd['msg']['info'][_0x36d1('‫191','QnAX')]);console[_0x36d1('‫192','5Nz3')]('\x0a['+TG_ID+_0x36d1('‮193','jwo2')+_0x359491);await _0x54302e['tulir'](get_vip,_0x407bdd[_0x36d1('‫a8','S^&J')]['token']);}}else if(_0x407bdd[_0x36d1('‫194','L^7F')]==0x71){await _0x54302e[_0x36d1('‮195','UmPt')](yyz_user_reg);}else{if(_0x54302e['fXfBi'](_0x36d1('‮196',']#^O'),_0x54302e['VpSuY'])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‮197','wqUi')]+_0x36d1('‮198','wqUi')+_0x407bdd['msg']);subTitle+='\x0a【'+Tips+_0x36d1('‮bf','QCjT')+$['index']+_0x36d1('‮199','tvS)')+_0x407bdd['msg'];}else{console[_0x36d1('‮d6','Gg^F')]('\x0a['+TG_ID+_0x36d1('‫19a','UmPt')+_0x407bdd[_0x36d1('‫13f','phDK')]);subTitle+='\x0a['+TG_ID+_0x36d1('‫19b','3z]L')+_0x407bdd[_0x36d1('‮19c','P*yZ')];yyz_d=![];}}}else{console[_0x36d1('‮56','UmPt')]('\x0a【'+Tips+_0x36d1('‮f2','5Nz3')+$[_0x36d1('‮10e','V3na')]+'\x20观看视频】:\x20'+result[_0x36d1('‮19d','Oa)S')]);}}}catch(_0x373eb2){console['log'](_0x373eb2);}finally{if(_0x54302e[_0x36d1('‮19e','TJHC')](_0x54302e['XbuaL'],_0x54302e[_0x36d1('‫19f','TJHC')])){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}else{_0x54302e['BJDZi'](_0x3ab465);}}});});}async function yyz_user_reg(){var _0x2d26b7={'mznuY':_0x36d1('‫1a0','&a3#'),'ohcAL':_0x36d1('‮1a1','21Q['),'wCyYC':_0x36d1('‮1a2','IXD%'),'aWZvy':_0x36d1('‫1a3','c%x^'),'TXQIF':function(_0x1e2759,_0x172493){return _0x1e2759===_0x172493;},'IOrKN':_0x36d1('‮1a4','IjJB'),'kiche':_0x36d1('‮1a5','UmPt'),'Ylebs':_0x36d1('‮1a6','zw$d'),'yDPVj':function(_0xbfcb3a){return _0xbfcb3a();},'NIjgF':'imJIo','twagh':_0x36d1('‮1a7','P*yZ'),'pOcys':'FiljA','BTLEe':function(_0x151f94,_0x1f2cc8){return _0x151f94===_0x1f2cc8;},'pLsSW':_0x36d1('‫1a8','IXD%'),'AoHcw':'Lqmwd','TzaOG':function(_0x4123bd,_0x4b52e2){return _0x4123bd&&_0x4b52e2;},'NUtoP':_0x36d1('‫1a9','ZnDG'),'hoRRn':function(_0x2d7c7c,_0x24c156){return _0x2d7c7c/_0x24c156;},'QYuLn':function(_0x388240,_0x4e2fe1){return _0x388240+_0x4e2fe1;},'boDEv':function(_0x535900,_0x4fc318){return _0x535900+_0x4fc318;},'dFdzB':'&sign=','hrVrt':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(_0x2d26b7[_0x36d1('‫1aa','V3na')](!Tips,!YZ)){if(_0x2d26b7[_0x36d1('‮1ab','V3na')]!==_0x36d1('‮1ac','qNr7')){console[_0x36d1('‮20','Bs9h')](_0x36d1('‫1ad','tvS)'));return![];}else{return{'url':_0x36d1('‫1ae','Oa)S')+url,'headers':{'user-agent':_0x2d26b7['mznuY'],'Content-Type':_0x36d1('‫1af','TJHC'),'accept-encoding':_0x2d26b7[_0x36d1('‮1b0','c%x^')],'content-length':body[_0x36d1('‮1b1','S^&J')],'token':ggb_token,'host':_0x2d26b7[_0x36d1('‫1b2',']#^O')]},'body':body};}}var _0x18c39f=Math['floor'](_0x2d26b7[_0x36d1('‮1b3','DYJy')](Date[_0x36d1('‮1b4','0zqH')](),0x3e8));var _0xab26ea=CryptoJs[_0x36d1('‫1b5','c%x^')](''+TG_ID+mac+os[_0x36d1('‫1b6','IjJB')]()+YZ)['toString']();var _0x4c9b05=_0x36d1('‮1b7','zjHn')+TG_ID+_0x36d1('‫1b8','qNr7')+_0xab26ea+_0x36d1('‫1b9','0zqH')+_0x18c39f;var _0x10869a=CryptoJs['MD5'](_0x2d26b7[_0x36d1('‮1ba','DFJC')](_0x2d26b7[_0x36d1('‮1bb','3z]L')](_0x4c9b05,'&'),appid))['toString']();_0x4c9b05=_0x2d26b7[_0x36d1('‮1bc','jwo2')](_0x4c9b05,_0x2d26b7[_0x36d1('‫1bd','*Usn')])+_0x10869a;let _0x4e3326={'url':serverUrl+_0x36d1('‮1be','DFJC'),'headers':{'user-agent':_0x2d26b7[_0x36d1('‮1bf','$BwF')]},'body':_0x4c9b05};return new Promise((_0xcd5ded,_0x3e7238)=>{var _0x2c3000={'lSbuV':function(_0x389614,_0xcb25f4){return _0x389614(_0xcb25f4);},'ggXaB':_0x2d26b7['aWZvy'],'BnkfB':function(_0x4ccc68,_0x31feea){return _0x2d26b7[_0x36d1('‫1c0','jwo2')](_0x4ccc68,_0x31feea);},'aITNH':_0x2d26b7['IOrKN'],'pppzR':_0x2d26b7[_0x36d1('‫1c1','QCjT')],'PijbX':function(_0x6e773e,_0x39555a){return _0x6e773e==_0x39555a;},'idmIQ':function(_0x2d071d,_0x1d221f){return _0x2d26b7[_0x36d1('‮1c2','Gg^F')](_0x2d071d,_0x1d221f);},'rASAK':_0x2d26b7[_0x36d1('‫1c3','L^7F')],'KKaQO':function(_0x386a06){return _0x2d26b7['yDPVj'](_0x386a06);},'RayMj':function(_0xa7b654,_0x3f138e){return _0xa7b654==_0x3f138e;},'VAnRG':_0x2d26b7[_0x36d1('‫1c4',']#^O')],'SgAXJ':_0x2d26b7['twagh'],'ZyzYn':_0x2d26b7[_0x36d1('‫1c5','QnAX')]};if(_0x2d26b7['BTLEe'](_0x2d26b7[_0x36d1('‫1c6','([jf')],_0x2d26b7['AoHcw'])){console[_0x36d1('‫ad','JiQh')]('\x0a【'+Tips+_0x36d1('‫1c7','aX4g')+$[_0x36d1('‮1c8','ZnDG')]+'\x20提现】:\x20'+result[_0x36d1('‫1c9','uTYh')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x36d1('‮e9','aX4g')]+'\x20提现】:\x20'+result[_0x36d1('‫141','([jf')];}else{$['post'](_0x4e3326,async(_0x2e57ec,_0x23810f,_0x5c488c)=>{if(_0x2c3000['BnkfB'](_0x36d1('‮1ca','Gg^F'),_0x2c3000['aITNH'])){try{if(_0x2e57ec){console[_0x36d1('‮10b','40wP')]('\x0a['+TG_ID+_0x36d1('‫1cb','uTYh')+_0x2e57ec);subTitle+='\x0a['+TG_ID+_0x36d1('‫1cc','TJHC')+_0x2e57ec;}else{if(_0x2c3000[_0x36d1('‫1cd','21Q[')]!==_0x2c3000[_0x36d1('‮1ce','lKA%')]){let _0x19b833=JSON[_0x36d1('‫1cf','JiQh')](_0x5c488c);if(_0x19b833[_0x36d1('‫1d0','ZnDG')]==0x1){console[_0x36d1('‮1d1','QnAX')]('\x0a【'+Tips+_0x36d1('‫14b','qNr7')+$[_0x36d1('‫1d2',']#^O')]+_0x36d1('‫1d3','UmPt')+_0x19b833[_0x36d1('‫a6','Bs9h')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20提现】:\x20'+_0x19b833[_0x36d1('‮1d4','VeMT')];}else{console[_0x36d1('‮1d5','DFJC')]('\x0a【'+Tips+_0x36d1('‮1d6','L^7F')+$[_0x36d1('‮1d7','*Usn')]+_0x36d1('‮1d8','t!@g')+_0x19b833[_0x36d1('‫a1','OBLs')]);subTitle+='\x0a【'+Tips+_0x36d1('‫a3','ZnDG')+$[_0x36d1('‮eb','$BwF')]+_0x36d1('‮1d9','TJHC')+_0x19b833[_0x36d1('‮1da','F75]')];}}else{let _0x3fd895=JSON['parse'](_0x5c488c);if(_0x2c3000[_0x36d1('‮1db','IXD%')](_0x3fd895[_0x36d1('‫1dc','Bs9h')],0xc8)){if(_0x2c3000['idmIQ'](_0x2c3000['rASAK'],_0x36d1('‮1dd','OBLs'))){await _0x2c3000['KKaQO'](yyz_login);}else{console[_0x36d1('‫be','L^7F')]('\x0a【'+$['name']+_0x36d1('‮1de','HE4q'));return!![];}}else if(_0x2c3000[_0x36d1('‮1df','sbFv')](_0x3fd895[_0x36d1('‮1e0','lKA%')],0x75)){console[_0x36d1('‫27','t!@g')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x3fd895[_0x36d1('‫1e1','Gg^F')]+_0x36d1('‮1e2','phDK'));yyz_d=![];}else{console[_0x36d1('‫27','t!@g')]('\x0a['+TG_ID+_0x36d1('‮1e3','QCjT')+_0x3fd895['msg']);subTitle+='\x0a['+TG_ID+_0x36d1('‫1e4','%xa0')+_0x3fd895['msg'];yyz_d=![];}}}}catch(_0x1aad4b){if(_0x36d1('‫1e5','ZnDG')!==_0x2c3000[_0x36d1('‫1e6','VeMT')]){console['log']('\x0a['+TG_ID+_0x36d1('‫1e7','Gg^F')+_0x2e57ec);subTitle+='\x0a['+TG_ID+_0x36d1('‫1e7','Gg^F')+_0x2e57ec;}else{console[_0x36d1('‮20','Bs9h')](_0x1aad4b);}}finally{if(_0x2c3000[_0x36d1('‮1e8','21Q[')]===_0x2c3000[_0x36d1('‮1e9',']#^O')]){CryptoJs=$[_0x36d1('‫1ea','fnrB')]()?_0x2c3000[_0x36d1('‮1eb',']#^O')](require,_0x2c3000[_0x36d1('‫1ec','jwo2')]):'';}else{_0x2c3000['KKaQO'](_0xcd5ded);}}}else{console[_0x36d1('‮1ed','&a3#')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x36d1('‮1ee','&a3#')]);subTitle+='\x0a['+TG_ID+_0x36d1('‮1ef','Bs9h')+result[_0x36d1('‫101','sbFv')];yyz_d=![];}});}});}async function get_vip(_0x5200c5){var _0x50bd7b={'SgUUx':function(_0x4216c1,_0xe5a57d){return _0x4216c1!==_0xe5a57d;},'UOKFy':'prwsm','SwkFR':function(_0x26483e,_0x57ab37){return _0x26483e===_0x57ab37;},'TlYcd':function(_0x2094ff,_0x4e3b81){return _0x2094ff(_0x4e3b81);},'Dkczz':_0x36d1('‮1f0','ZnDG'),'kSGxv':_0x36d1('‮1f1','*Usn'),'uhCvX':function(_0x14a8b1,_0x4f4b33){return _0x14a8b1===_0x4f4b33;},'qixrG':_0x36d1('‫1f2','jwo2'),'LhAqw':function(_0x11549b,_0x43bc92){return _0x11549b/_0x43bc92;},'AfMjq':function(_0x1015a2,_0x481a95){return _0x1015a2+_0x481a95;},'jsmlt':function(_0x5e1ec7,_0x19d785){return _0x5e1ec7+_0x19d785;},'gYPLL':function(_0x5b1a60,_0x17297){return _0x5b1a60+_0x17297;},'axLlb':_0x36d1('‮1f3','UmPt')};var _0x2ce9f1=Math['floor'](_0x50bd7b[_0x36d1('‮1f4','IjJB')](Date[_0x36d1('‫1f5','F75]')](),0x3e8));var _0x55c330=_0x36d1('‫1f6','3z]L')+user_num+'&token='+_0x5200c5+_0x36d1('‮1f7','Z27L')+_0x2ce9f1;var _0x1c06bf=CryptoJs[_0x36d1('‫1f8','QCjT')](_0x50bd7b[_0x36d1('‮1f9','wqUi')](_0x50bd7b[_0x36d1('‫1fa','&a3#')](_0x55c330,'&'),appid))[_0x36d1('‮49','Z27L')]();_0x55c330=_0x50bd7b['gYPLL'](_0x50bd7b[_0x36d1('‮1fb','UmPt')](_0x55c330,_0x36d1('‮1fc','zw$d')),_0x1c06bf);let _0x30c2e0={'url':serverUrl+_0x36d1('‮1fd','OBLs'),'headers':{'user-agent':_0x50bd7b[_0x36d1('‫1fe','lKA%')]},'body':_0x55c330};return new Promise((_0x240e7e,_0x13ae37)=>{var _0x4f1c3c={'nzbNb':function(_0xa233c,_0x287f22){return _0x50bd7b[_0x36d1('‫1ff','IjJB')](_0xa233c,_0x287f22);},'VEojq':_0x50bd7b['UOKFy'],'vWdYh':_0x36d1('‮200','t!@g'),'RSFLH':_0x36d1('‫201',']#^O'),'BccPp':function(_0x1f6bb9,_0x5ec23e){return _0x50bd7b[_0x36d1('‫202','IXD%')](_0x1f6bb9,_0x5ec23e);},'beRcH':function(_0x5a2f17,_0x13ee79){return _0x50bd7b[_0x36d1('‮203','$BwF')](_0x5a2f17,_0x13ee79);},'rNrKV':_0x50bd7b[_0x36d1('‫204','psy6')],'YvHTd':_0x50bd7b[_0x36d1('‮205','*Usn')]};if(_0x50bd7b[_0x36d1('‫206','tvS)')](_0x50bd7b[_0x36d1('‫207','zw$d')],_0x36d1('‫208','Z27L'))){console['log']('\x0a【'+Tips+_0x36d1('‫73','40wP')+$[_0x36d1('‫9f','&a3#')]+_0x36d1('‮209','L^7F')+num+_0x36d1('‮20a','uTYh'));}else{$[_0x36d1('‮20b','DFJC')](_0x30c2e0,async(_0x1e92b9,_0x58341b,_0x20629e)=>{var _0x3c3ff9={'KLyQk':function(_0x33da1f){return _0x33da1f();}};if(_0x4f1c3c['nzbNb'](_0x4f1c3c[_0x36d1('‮20c','V3na')],_0x4f1c3c[_0x36d1('‮20d','c%x^')])){try{if(_0x36d1('‫20e','lKA%')!==_0x4f1c3c[_0x36d1('‮20f','([jf')]){if(_0x1e92b9){console['log']('\x0a['+TG_ID+_0x36d1('‮210','V3na')+_0x1e92b9);subTitle+='\x0a['+TG_ID+_0x36d1('‫211','tvS)')+_0x1e92b9;}else{if(_0x4f1c3c[_0x36d1('‮212','uTYh')]('NNRuR',_0x36d1('‫213','HE4q'))){_0x240e7e();}else{let _0x4e9a09=JSON[_0x36d1('‮214','([jf')](_0x20629e);if(_0x4e9a09[_0x36d1('‮215','Z27L')]==0xc8){if(_0x36d1('‮216','VeMT')===_0x36d1('‮217','aX4g')){user_index=_0x4e9a09[_0x36d1('‫218','QnAX')];yyz_d=!![];}else{console[_0x36d1('‫219','sbFv')]('\x0a【'+Tips+_0x36d1('‮89','Oa)S')+$[_0x36d1('‮1c8','ZnDG')]+_0x36d1('‮21a','Z27L')+_0x4e9a09['msg']);subTitle+='\x0a【'+Tips+_0x36d1('‮bf','QCjT')+$[_0x36d1('‮21b','uTYh')]+_0x36d1('‫21c','tvS)')+_0x4e9a09[_0x36d1('‫128','0zqH')];}}else{if(yyz_Kami){await _0x4f1c3c[_0x36d1('‫21d','TJHC')](card,_0x5200c5);}else{if(_0x4f1c3c[_0x36d1('‮21e','tvS)')](_0x4f1c3c[_0x36d1('‫21f','$BwF')],_0x4f1c3c['rNrKV'])){_0x3c3ff9[_0x36d1('‮220','lKA%')](_0x240e7e);}else{console[_0x36d1('‮56','UmPt')]('\x0a['+TG_ID+_0x36d1('‫221','c%x^'));subTitle+='\x0a['+TG_ID+_0x36d1('‫222','psy6');yyz_d=![];}}}}}}else{app_soy_ggb_data=process[_0x36d1('‫223','aX4g')][_0x36d1('‫224','fnrB')]['split']('#');}}catch(_0x2d0b39){console[_0x36d1('‫117','0rpR')](_0x2d0b39);}finally{if(_0x4f1c3c['YvHTd']!==_0x36d1('‮225','5Nz3')){console['log']('\x0a【'+Tips+_0x36d1('‮1d6','L^7F')+$[_0x36d1('‮c2','DYJy')]+_0x36d1('‫226','Gg^F'));subTitle+='\x0a【'+Tips+_0x36d1('‫227','phDK')+$[_0x36d1('‮228','21Q[')]+_0x36d1('‮229','JiQh');}else{_0x240e7e();}}}else{console[_0x36d1('‮10f','IXD%')]('\x0a【'+Tips+_0x36d1('‮bf','QCjT')+$[_0x36d1('‮1d7','*Usn')]+'\x20个人信息】:\x20'+result['msg']);}});}});}async function card(_0x1ba19a){var _0x2ebbc2={'IVkdW':_0x36d1('‮22a','DYJy'),'EnOao':function(_0x5be796){return _0x5be796();},'vCSdH':function(_0x267f7e,_0x5df56c){return _0x267f7e/_0x5df56c;},'cpxvH':function(_0x3c8cb7,_0x133edf){return _0x3c8cb7+_0x133edf;},'iGsvF':function(_0x3b911f,_0x1cec43){return _0x3b911f+_0x1cec43;},'NcAkw':_0x36d1('‮22b','QCjT'),'MmvPs':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x36d1('‫a9','V3na')](yyz_Kami);var _0x155ade=Math['floor'](_0x2ebbc2['vCSdH'](Date[_0x36d1('‫22c','Gg^F')](),0x3e8));var _0x37395a=_0x36d1('‮22d','OBLs')+_0x1ba19a+'&kami='+yyz_Kami+'&t='+_0x155ade;var _0x382af4=CryptoJs[_0x36d1('‫175','ZnDG')](_0x2ebbc2['cpxvH'](_0x37395a+'&',appid))['toString']();_0x37395a=_0x2ebbc2[_0x36d1('‫22e','HE4q')](_0x2ebbc2[_0x36d1('‮22f','uTYh')](_0x37395a,_0x2ebbc2['NcAkw']),_0x382af4);let _0x637d32={'url':serverUrl+_0x36d1('‫230','QnAX'),'headers':{'user-agent':_0x2ebbc2[_0x36d1('‮231','Oa)S')]},'body':_0x37395a};return new Promise((_0x4173b9,_0x4ecb37)=>{var _0x2d1ee3={'Bccku':_0x2ebbc2[_0x36d1('‫232','5Nz3')],'tXseS':function(_0x577747){return _0x2ebbc2[_0x36d1('‮233','QCjT')](_0x577747);}};$[_0x36d1('‮234','0rpR')](_0x637d32,async(_0x3afffd,_0x4282af,_0x47a250)=>{try{if(_0x2d1ee3[_0x36d1('‮235','S^&J')]!==_0x36d1('‮236','c%x^')){if(_0x3afffd){console[_0x36d1('‮d0','lKA%')]('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x3afffd);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x3afffd;}else{if('bTbuy'==='bTbuy'){let _0x345cc5=JSON[_0x36d1('‫237','psy6')](_0x47a250);if(_0x345cc5[_0x36d1('‫18d','(qr#')]==0xc8){console[_0x36d1('‮10f','IXD%')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x345cc5[_0x36d1('‮238','DFJC')]+_0x36d1('‮239','uTYh'));return![];}else{console['log']('\x0a['+TG_ID+_0x36d1('‫23a','0rpR')+_0x345cc5['msg']);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x345cc5['msg'];return![];}}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x36d1('‫124','$BwF')]);subTitle+='\x0a['+TG_ID+_0x36d1('‮23b','UmPt')+result[_0x36d1('‮2b','IjJB')];return![];}}}else{console[_0x36d1('‮10f','IXD%')]('\x0a【'+Tips+_0x36d1('‫23c','0zqH')+$[_0x36d1('‫23d','tvS)')]+_0x36d1('‮23e','L^7F'));subTitle+='\x0a【'+Tips+_0x36d1('‫14b','qNr7')+$['index']+_0x36d1('‫23f','DFJC');}}catch(_0x17f894){console[_0x36d1('‮78','F75]')](_0x17f894);}finally{_0x2d1ee3[_0x36d1('‮240','V3na')](_0x4173b9);}});});}function Format_time(_0x1c593c){var _0x4cf105={'Rfjhi':function(_0x3f144b,_0x5935e8){return _0x3f144b*_0x5935e8;},'oDggk':function(_0x11e052,_0x20d876){return _0x11e052+_0x20d876;},'QQRFH':function(_0x4bb7b,_0x2aa891){return _0x4bb7b+_0x2aa891;},'pFSVe':function(_0x55146b,_0x2fc928){return _0x55146b<_0x2fc928;},'CPNIx':function(_0x432b59,_0x542d8c){return _0x432b59+_0x542d8c;},'TungY':function(_0x4d6bd3,_0x89d8e4){return _0x4d6bd3+_0x89d8e4;},'ECxYe':function(_0xbdcba4,_0x82e106){return _0xbdcba4+_0x82e106;},'ygEtH':function(_0x3b4bc5,_0x92bc9f){return _0x3b4bc5+_0x92bc9f;},'BiPwB':function(_0x2dfebe,_0x4c4e91){return _0x2dfebe<_0x4c4e91;},'UQVTJ':function(_0x3d464e,_0x518c1e){return _0x3d464e+_0x518c1e;},'PCFtG':function(_0x2c9409,_0x38a451){return _0x2c9409+_0x38a451;},'WRIjD':function(_0x52817b,_0xc88406){return _0x52817b+_0xc88406;},'tpGSV':function(_0x5c1a80,_0x591ec2){return _0x5c1a80+_0x591ec2;}};var _0x2b5e8c=new Date(_0x4cf105[_0x36d1('‫241','L^7F')](_0x1c593c,0x3e8));var _0x36899f=_0x4cf105['oDggk'](_0x2b5e8c[_0x36d1('‮242','tvS)')](),'-');var _0x2cbd4c=_0x4cf105[_0x36d1('‮243','5Nz3')](_0x4cf105['pFSVe'](_0x4cf105[_0x36d1('‫244','fnrB')](_0x2b5e8c[_0x36d1('‫245','lKA%')](),0x1),0xa)?_0x4cf105[_0x36d1('‮246','HE4q')]('0',_0x2b5e8c[_0x36d1('‮247','Bs9h')]()+0x1):_0x4cf105[_0x36d1('‫248','40wP')](_0x2b5e8c[_0x36d1('‮249','OBLs')](),0x1),'-');var _0x2c8f35=_0x2b5e8c[_0x36d1('‮24a','$BwF')]()+'\x20';var _0x1f89fe=_0x4cf105['ygEtH'](_0x2b5e8c[_0x36d1('‫24b','JiQh')](),':');var _0x17748d=(_0x4cf105['BiPwB'](_0x2b5e8c['getMinutes'](),0xa)?_0x4cf105['ygEtH']('0',_0x2b5e8c['getMinutes']()):_0x2b5e8c[_0x36d1('‫24c','DFJC')]())+':';var _0x5a7927=_0x2b5e8c['getSeconds']();let _0x9676fd=_0x4cf105[_0x36d1('‮24d','IjJB')](_0x4cf105[_0x36d1('‫24e','*Usn')](_0x4cf105[_0x36d1('‮24f','c%x^')](_0x36899f,_0x2cbd4c),_0x2c8f35)+_0x1f89fe,_0x17748d)+_0x5a7927;return _0x4cf105[_0x36d1('‮250','5Nz3')](_0x4cf105['UQVTJ'](_0x4cf105[_0x36d1('‫251','IXD%')](_0x4cf105['WRIjD'](_0x4cf105[_0x36d1('‫252','qNr7')](_0x36899f,_0x2cbd4c),_0x2c8f35),_0x1f89fe),_0x17748d),_0x5a7927);};_0xodR='jsjiami.com.v6';


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