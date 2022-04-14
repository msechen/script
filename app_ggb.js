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


var _0xods='jsjiami.com.v6',_0xods_=['‮_0xods'],_0x3b48=[_0xods,'w5laNigD','woPDnSHms6/lh5/lpY7ot6DDlUjov6PlmKxe','XsKCwq7msoflhr3lpqHotLIfd+i/ruWbmRQ=','E8KAGg==','woDmjpXnjoXjgrw/wrk=','cCjCtw==','w4zmjKbnjZnjgpXCocOS','CmNE','dsKswoJbAw==','5o2156a9XcKUw7fotaTljrgd','AeaOvueNmOOBhRYK57yh57mC6Ky95rKM5ae/6LSR','clgYYkI=','e8Oaw54aVg==','w41OVgw=','PlTCtBRK','I1rCtxXCiA==','UirCkQNC','exJx','fFTDiOayvOWGoOWkm+i1lcKkw6rovJrlmJAU','w5nDoT1jWQ==','w6zDkx7Drlo=','SG9xwrHCvg==','w64Ww7xBwp0=','fFTDiOayvOWGoOWkm+i1lcKkw6o=','776n6K2GwqPCgsO2InhK6K265aaYSgHDleW0kuihkeaxs+WFgQ==','wo1FEwI1wpNMW0HDmkc=','w4zDhsKDwojDhgVIDQ==','QcOoHFTCqj5S','Om7Cgw7Cvw==','C8OYwqrDt8O0','woHCoDI=','w55iwpDms5Plhb/lp4LotYhHPA==','WcO1bA==','bsOFIUnCow==','B8OawrhywqE=','w6LCrsKPecOn','FBktR34=','XsKCwq7kvJDnlJnlj7Hlr5Efdw==','w7sQwoLkvbvnl4PljoHlrqdHHg==','wrUIwojCuMKc','K8KFJcKOFw==','QsOcw58maA==','aMO7w6Q8Zg==','LzdRw6jChig=','wpPCiHtuPxPCpMOAXRnDgl5iLcKdworCkDvDocOkw54RG8KjTMOFwrfCrkfDlx/CkgLDs8O2dRMEwol5fRfDucOsUMORHsObLcKFSsKswrDDjzQ6wrl3wrjDrmvCusKkwrsTwqDCpMKFw5YxwpPDlRvChsKKfFbCoMKaw7wPDsKUB8Oza2Nfwq3CjsKgwo5hLsOod1Idw4LDlEDChMKJw7pTUcKUw5QaYcKLwrfDksKow7rCtcOgFsKQQEEFJDpNdcO6wo1Ww6PCrcOUwoPDlMKkwpvDqTYJwo0uRsOKw7RYOH/CvMOewrPCvsOvOcK1w5E4w7RXwqZyYi8uSMKDZMO6wqXDicKUwojDnMKcOcKxwr7CllM4wqbDkcO0bh84wrt8GDUnFMOYwrtkw6LCvxrDjsO3wp/DnArDmsKlw6XDusKew6TCnT5+w5hsB8KsMFNJQMK7aMKD','dRLCphTDjw==','CX9U','w5VJw5BtwpvClFwaWcKgw6c7TcKQTA==','NX3CqTF3','C8KHH8KjPA==','Tip9w6bCjw==','wrABwrLCiMK7','w4lERjZRQk8=','w5vDjMKEwrE=','JMOowoRfwrY=','E2pFw6w0','K03Dsumrneisqui1m+WOsAbDtei/ruWakis=','w5XDpgLDisK/','E8O3wqHDjcOh','wq7CssKbDQ==','w7JeccOEQQ==','V8OpbyI=','wpvCncOlej4=','w4pFw4U=','MGBH6aqk6K+y6ISN5pypwpB5','w7XDu8On6aqa6K286ISF5p+JwrTDtQ==','w5Tjg7fkvZ3ogILmjoPnpYXjg5Tvv7Xpq6Tor7boh6jmnZIZKcK15aeV6LeAb+isreWIu+S9seaVhuiFpeafveS4juS5l+aHnOWEi+WvhsOz','KsOpwqrDjcOq','w4LDrAlz','JjrCjuaXgumEp+mpkOius8OqHQ==','IsOVXeaWsemGsumqluivvQPClg==','f2Rf','wqjCsD1fOA==','wqHCssKY','w7zCuU3kvannlJbljrXlrJvDtmjmsaHmnYvlj7Xlr73lj7Tkvqbnl4A=','BBXClDLCrg==','FcOIwrHDqMOh','w5PDsTXDlU8=','KTNG','w6oew7rkvqLnlpDljbjlrLDDhsON5rOB5pyw5Y6s5a2Q5Y2Y5Lyu55as','w7AKC+S8k+eWlOWNveWurjp35rCS5p2N5YyA5a2J5Yyt5L6Y55Wi','Om3DtsO5wrk=','w43Dlgx0SQ==','LcO2wo5Mwog=','w7jClGhgPUI=','wqfClMKdw6zDmA==','w515DQ==','bCrDnQ==','bcOQw6s5cA==','CsOTwrXDgcOE','w6zDnzXDpWg=','wq7CvMKNDA==','w5jCm8KAfsOE','w4/Dr8KHwrfDhw==','w55Td8OlQA==','WMOpbA==','w55iwpDkvYTnl5vljpLlrqtHPOi8juWZhA0=','wpDDp8Of5LyX55ar5Yyg5a2ZwpXCr+i9oeWZh8KA','w5HCjMKuYsOn','XuOAh+S+oOiBkuaPkeelnOODve+9jumovuitsuiGuuadqA3CocK+5aeK6LalZeisg+WKuuS8uuaVqeiFs+adv+S6r+S4vuaHqeWEieWtil4=','w5AkR8OeYA==','w6VUd8ODSQ==','BH9Hw7k=','JjrCjuS/jeeXgOWOveWutMOqHQ==','TB3Cjw==','HyDDquS+gOeVp+WPueWvqEtk','OWTCmw==','fMKwwoXkvJ7nlKnljrDlrp4qVA==','wpBlw78=','dMKGwqY=','w6Rkw4NvwqM=','BGvCricybsOTw7BFwp3CmQ==','wqpdw41jAA==','wppzw6xEC1cbwqs=','VMOzw5sFVQ==','wovCtiFkGsKFw6h8','wrvCvcK8w67Dvw==','w6Bvwo/Ct8Oc','KMKkKMKrGQ==','cBhiBQDCmMKSZcKAwr4=','ShDChTnDnw==','ZMOdw7oiWMO+YlEySQ==','Xg9tw6XCjA==','RVxtwr7CnQ==','w7/Ck8KMTMO5','bsORw6gNdg==','KDVHEiY=','EsKGG8KjOg==','CFnCmyPCtw==','EnPDoMOdwozCuQ==','ajZBw7/CnHoUwpBp','fj7Dgi7DjsOC','EuaKl+S7jOWImeS/pui2msKPwqjChMKlw5forKfoh4TooLjlrp3oo5HDsg==','TMOXeS4Yw6HCumsvw4pLw6/DuQgiA24ewpLCtwjCtcKMwpzDmsKUwoVgwqdawo9H','w4ZVRhkdBBDCtcOowpTDi0TDrTPDtznCkMKcwoHDmMO0U2Flw4jCpcKIE8O4wqIyd8O7RMOLw6whCMKkRDtHAsKi','Kn9Zw7UsSkt5wrPChcKaVkA1d8Oiw6oDT8ObRxzCjcK5wo8Hwp07KzZAwr7ClVjCkVzDqcKgYMKzwrIXw6pKJcOdTnXCqiHDtsKBwqLDlMKrJMKVVsO0woABGMK+DAoYLyjDtsKqwqVWw7XCmMKDw75Qw4A9NcO/SWwBwr7ClsOUCMK5LMOxf8K2w4TCpmc1wrTDmsKaw5TCmh3DicOewpx3wobCszVBwoPCsmRCYMOeIsOQw6oMTsKdwrEOwpnDuxtpQ8OG','woJDUh/Ck38EYSTDgGsPw6rCtg==','LUoTYgjDoFHCtsKgwodUw6seWx0=','FQXCqyHCnxJqVsKm','wqnCuMKmEcOb','D8KOCcKp','w5Mzw5F8wqs=','O8OjwrfDq8Oy','Fl/ChSrCqg==','IjrCoxPCjw==','wrXCmhh5EQ==','w67DkyR7Uw==','w4jDszfDvsKw','e8KbcmwI','C39E','KsORwr3DlsOkAA==','HHjClwJb','XxJ9HTM=','w4DCmn3Cp8Ke','w5Fswr3CrMOR','UwvCiTBIQwLDjcKzwqDCrQ==','w7gbDMKVw4Y=','w5d+csOo','wrHCu8OeSQ8=','w4zDpRLDkF1k','ICRIAxV7DQPDrDM=','w5fDohHDncKcKyNYwp1BwpbDiw==','VQHCuyBeQx7DuQ==','OEPCgcKqAQ==','w47DjcKB','wp/CvCx2DMKSw6ZLUTxQVQ==','SMOsBXU=','bivCvDrDjw==','JE/ChgXCvg==','IEbCtBBZ','w4XCoMKzdcOV','GVfCkTQJ','LOOCneS8tOiAleaMm+elsOOApu+/h+mrkuiuv+iGt+aeiwfCu1flpp7ot4pI6K2k5YiO5L6U5pau6IWY5p6L5Lqk5Lu/5oSu5YS85ayGBg==','dTXCu23CvA==','NjNYLwZvPCXDpjEuQw==','CHDDgsObwpw=','XwzCrXnCkw==','w6V6ecOPVw==','F+OBi+S+jOiBluaNq+enoOOBnu+/hOmptOitseiHt+afqUfCrFXlppzotKrCgeisi+WJheS/puaVkuiEhOaegeS4uOS6m+aFj+WFiOWuqwA=','Z1VLwpvCsw==','SADCjDFUZRY=','w4FfTA==','5o+N56Whw71+wpbot7zljrjDvg==','Dn5Hw7k4','w77opKXnnIrop4Hpo4Ljga7Dv8OP562E','MX/Cr8KgP8OqRxIh','woFewqQ=','ZBJvFw7CkcKFTsKBwqw1wqY=','dDXCtDbDg8KVKQ==','d3lO','wq3CiHhYNBjCp8KwDFbChh8=','ExnCpA==','w4k2e8OVTA==','woPCp8OFcyrCqMKNw6rDh8O2woLCjg==','UcK4ZHAJ','UgHCkQtLTRLDgcKuwq/CulU=','Q8OjHg==','wpR4w7xsHHYJ','w43Cr8Kx','a8KZwq1ADw==','bjTCqQzDnMK9LcKBwpzDkcKZwqQ=','w51RXgBT','wohVwrzChVgE','SsOiDw==','KMO1NSRd6Iaf5pyq5oqy6KGTwoh0worljY/ku4Hml7bplp3vvoc=','w6B/w4p0woM=','MGnCqDkU','RcKtfE0Uw6hj','Y3xswr3ClQ==','w5vDjCtMTw==','ZxTClgnDig==','N0ArdQ==','w5tLwr0=','IuS4k+i1jOWPpuOAtsK+AMOq','N2TDusOzwq8=','FGBPw7U0','w5R/f8OjSQsY','BQLCsCLCnw8uUsKy','SB/CmnTCgw==','TcOvw4sGdcK5','wrLCgm9gJxc=','w4ReTwnDhA==','woDCmcKO','wqTlvKHlp7njgbnnrIsL','wo1ewrbCh1Q=','w4nCh8KiesOF','S8KcYn4F','w67jgKDoh4jmn47mj7znpZbjgKnvvJ3pqonorKfkuYLpgrDlhbPCt+WOmuiDgeafo+WJveWYpuWMu+WYoh7lpIvpnr/liqvnkJTliL3ljKPpgYXmrIbmiIgddzfCq8OVw57Cjw==','w4JOVQ==','5o6m56WNw798w4botZvljrAc','ccKHwqVMAw==','wobnrZTlipLnirLmg6rjg7FbXee9r+e4nuistuawl+Wkiei3mA==','w4dPVgxf','TjN1w7XCqg==','Anxyw7Ml','RMO0UzET','w595HQ==','wqHjgrPoh63mn6nmjbnnpZHjgK3vvb/mrqDohoXmnYnljqLogbjpnrLpvaPnjLTloY7ot4E=','wrfjgIHohIHmnqrmj6Hnpb7jga/vvaHmrKbohZvmn4HljYXogZfpnJHpv6Dnj4/loJrot7g=','wqjCmgJZJg==','a0okfkPDpg==','UsOObDYV','w7HCl1XCtcKW','YAV/w7rCjw==','cVwEdWnDrEnCvsK1wo0=','GBbCvzQ=','w5l+dcOj','VwTCtVfCsA==','w5k/DMKIw6g=','w6DCv1DCosK4','dsOiw4YlSA==','a8KLwqJFCA==','wpNRwrvClg==','w6YDeMOEQQ==','BHLCgCDCoQ==','wq7CqsKrK8OO','w5tSVxsIQlHCqMO0wpY=','QMKswoVeOA==','OCguSno=','w5hASD7Dtw==','aCnClFnCmg==','LELCqBlT','wrLCiGY=','5o+H56WHO2VE6LeQ5YyQMQ==','woXCmMKNw6HDow==','MuS4veS6guS8teaCluOAtlTCj+e9oue4r+iui+awiuWmmOi1jg==','5oyO56edLCp+6LWZ5Yyyw48=','ZeS5tuS6m+S+keaAjuOAmWRa57+T57qM6K6t5rGg5aSx6LSk','w4/DsQLDkEw=','awBow4HCjg==','wpklwqTCqQ==','wq5VAhQk','LnXCrQ==','wpFDwrfCkEUCXmg=','w4nDqBc=','w6o2w5Rewos=','KeS5ruS6guS9ruaCh+OAhAPDmhDCl8OocBDmmrznpJzvvIA=','Yj7DqTPDg8OJw5HCtQ==','woLCujZCG8KKw7Fx','Ek3DueS9g+mhpu+/uw==','eTrCpDI=','w4vCvXTCs8KO','KsOMwpfDnMO4','YuS4sOS5sOS8nuaAoOOCiRRRTsOZw6oD5pqL56aV772d','UMOnfyY=','w53CssKiZMOUccKDw6E=','CXlAw7cuR0cz','RcOrw5EA','wrjCrsKaGsOqL8O5w4A=','ZCtWw6rCkQ==','w6lmw6R+woQ=','cRF5Jxs=','XgLCvg==','5oy656SaSmlt6LeZ5Y+XIg==','YCpcw6rCkA==','DAgpXHY=','w5PDvxc=','WjrCjFbClg==','wpE6WDU8Ng/DnsKMKMO7FFZ1wrFJOiA=','DGHCsCQU','Fn3Cjgdi','w4MXeMOJTA==','CGrDusOxwoE=','SiLCpATDsw==','w7czw7tpwpc=','5o2n56Sew7fDsMKV6LS/5YyBw5w=','SADCjDFU','5o2w56W/GMKAKOi2v+WNmMOC','w5p4HiAo','w63mjI3njY/jgbnCuWHnv47nubPorbjms7flpqjotoU=','HTsVW1Y=','wobCjcKVGcOR','UQLCvX8=','w5bDvhTDhlE=','dOaPh+eNjOOBhjtG','ZDdf','woNOAyE4','w5rmjprnjbDjg53DlVU=','dcKawqY=','e2R2wrvCnUI=','TR3CrSZ2','KMOWwrXDrcOW','blYN','w4rCvX0=','GwTCtQ==','5o6r56S6woPCn8OF6Le65Y6Fw7A=','Em7DisOXwpA=','Xx7Cvg==','w55AQBpC','6Iat5pyI5oyK56enwpU0w5vot5rljJpA','wqTCs8KbDcO7','N+ess+WKvOOBkMKQwofnr4nli6rmiZvliLxI','5o2+56SbH0QK6LSN5Y+Iw6w=','R+etruWIk+OCjXoG562U5Ymm5oqW5Yi0w5Q=','5o6356SqDsKxbei0gOWPnXY=','T8OjDHXCsw==','YuetpOWLuuODrnXCuA==','S8O+Dw==','b0oN','wqnCssKKK8Ou','Q8OYw4Q0aQ==','KlXCucK8Cw==','fMKwwoXmsonlho3lp6Dotb0qVA==','woHChcKO','SnfCrOayqeWEpuWmlui2ksOgaw==','w4vCoX0=','YsOhw58WWg==','CX1zw6sm','w6V8GyE8','w4LDgDXDr8Kv','I3bCrynCgx5Sw6JCMRBLwpzDk8OMw4DDgw==','UsKne20=','5o2256eoN8O7w5rotZTljLfDhQ==','wpTnrLTliYzniY/mgqTjg5/CiivnvqDnu7XorqDmsIjlpKTotp8=','5o2456e7w6o7wpDotLnljJLCrg==','HxnCtjTCkw==','b+evguWLjOeKsOaDouOCviBU576v57u56K2p5rGr5ae66Le5','TMOww5oqVw==','wodfwrbChw==','SMO5w7oNZMK0K3kTwpE=','G3nChwPCgw==','wr/CuMKXJcOt','fHpowqPCnw==','w7UTw4BRwoc=','w4TCrsKg','5oyd56enw5JFwq7otafljajCjw==','AeevtOWKleeLl+aAgOODgGIw5Lq+5aeW5bSl566R5Yuj','5oy056SKw7/DjwHotYrlj48n','VMOoAF3CpQ==','MnRlw5oS','dDXCtDbDgw==','woHnr73liZ3niqDmgL/jg4XDp8Os','5oy856epeARY6LeN5Y2rNA==','L2nCrQ==','Muinleecs+ikkumhqOOAtlTCj+esnw==','5q6c6I6m5Y+N5Yq2','BUvCjMK0Lg==','SwZZw4zCuA==','VcOiWCY5','c8O+PUDCpg==','J3/CnTxkScKfPcOVw50=','woY0w6hoA1xNw7nCiHDCm1fDjg==','QgLCqm4=','bMORw4geaA==','TsKnbw==','ScKewqx+KA==','CGlLw7kh','w6PDssK0woPDmw==','RMOkw5M=','VcOiEU/CrC1VwoI6H8OZw4Y=','L8ONwpQ=','5o2k56WwUcOUwojot6jljYcr','w50kGMKcw50=','w77nrpnliLHjgJZpX+e+lOe4s+iun+axteWng+i1mw==','wpTCj8K4G8Ox','6ISN5p2h5o2c56W7wofCisKa6Le85Y68woM=','SMOkw4EEeQ==','MuetqeWIiOODhcODB+eskOWKn+aIo+WJrAI=','TMODGUrCsQ==','w6nDkDbDgcKS','w683w5c=','5o2256SQwo8pw4bot4bljpZd','eg5x','cTTCtw==','5o2x56a5QDsT6Ley5Yyqw6w=','w55Kwr7CuMOA','w5Dku6LkuIbkv43mgKLjg57DlcKV','wpc5wqc=','XsK8wol/Kw==','w67CgHLCnMKk','w7PDvyrDiWQ=','ZSjDvC3Di8OEw5I=','w5MtVMOGYMK2w43CkEZcw7NJw4LDgBvClMKnw6wyw5nDow==','M0vCh8KaGw==','w5Z6bsOXcA==','MVLCmCnCkA==','w7jCqcKhRMO1','I07Cj8KxDg==','w55OQR0=','AkjDtMOLwrk=','w41gw6lUwpk=','BcO3wrvDr8OQ','Q+injOefkeimp+mjluOAk8KFwonnvbHnuKDorJzms6blprjotK4=','ZStf','5oyg56eywpEBYOi3qeWMmMKV','CmDCvgQ/','wqPopprnnrvop73poaLjg6JXXee9jee4huitreaxr+Wltei0oQ==','C2HDnMOBwo0=','w5clGMKc','w6xNVj5p','wol5w4t9FlABwqQ=','wpMkwqTCqcKXOsON','w4F7w6ldwqw=','AFnCkyg3','wqtAwp/Ct2U=','wo7op6PnnLnopq/porbjgLoFw6znrr0=','w6bDhxjDqkY=','5q2M6I+t5Y6x5YiY','w5d3DiQ=','wq3CgmRYIw3CrMKMDQ==','MnvCuMKMKg==','w5x0fx5h','OHjCmw==','w49Ew4ZhwpM=','BuaNneePmOOAgcOxag==','w63mjI3njY/jgbnCuWE=','w4BDTA==','GhjCtQ==','5o6f56aGw5Erw47otonlj61U','WwPCvX/Cgw==','w4rmj7Dnj5fjgZV6w58=','w4jDtBc=','VuaOp+eNouOBgMORXQ==','IsOPwps=','AeiliOeeruimp+mikOODgGIw562Y','w5HDnRvDr0E=','PW3CqQ==','D2HCvQ==','w5kVUsOubw==','C8Odwo5yw4zCnTRFw4gFwrZNwqrCrsKbwqx7w75j','VcO2eysVwrXDrnksw6hdwqrDqT0dDgUJwrzCuyPDtcKcw4/Dq8OowqBwwpIZw5Y=','w5tiDjUjbVTCl8KEPcO0GA9uwqhMODZNw7YpHsOYCH/DkcKf','ekZ3wrPCrw==','wrjChcKKA8Oa','wovCqTxZ','wp7CvsOQXT8=','dW1RwqQ=','wqTCgMKFw7HDgw==','GnDDnsOewoHCvxPCpFRJwqnCn2pOw50nw5I4w4s9NMOBVcODWDMKw5gRcSI=','FAARYFE=','w7UpO8KMw5w=','U8OjfwEJwrrDo1Qgw6ZB','C8OqwqZiwqk=','w4lERiRIRUvCpA==','ERLCphXCigki','GWHCtxp2','w4HDkyfDrcK0','w5t/bC7Djw==','w6U0w59UwoE=','w60BAA==','MTNyBBNhMB0=','w4JEw68=','IHjCryNzD8KCMw==','w4xgfi7DrA==','U8O+DWLClCZYwroxEA==','LmHCoAgrbsOewoYVw5LDm8KEwqFHw7MgeMKGaE3DskVKwr/CtzZOwr0ZwrxoS8OwwqcQw6vCj8OOYsKMwrxow7DCjMOfw5nCkcO/wrXDsj8ow5MKFMK1wr7CjcKbUsOcdiZ2VgvCn8OXw6TDqMOqF8KdVGbDjsKXw78CwqzDvCsmF2DDr8KIw63Cq8KfVlE7wpDDu8OBwrlWw7Nbw7JGSMObw7Q9w5HDucKNecODCsKKw5vDocKyd38NYcO7wqc4w51NDmDCo3ZKcSzCh3nDo8KWw4xgaUISw6vDmRHDqTMXBMK9w5XCkVbDjsKSQEw6w7dDwr5KwqwGfcO2FsOmw61Zw7DCsk/Cu8KVasK9bcO4AcOYSsKQwoPDlcKBw4FFwq8aw7vDocKvTxLCisKTH8KNLsOWZzvCn8O0UwY/CQQScSvClsKqScKww4cFT8Kvw490','wrvCp8KNGsO1','KX/CoTTCvw==','w7ZJwrbCqsOd','wrnCsMKdPcOE','FsKiOsKMHw==','w5HDrB5i','L8Oawp7DocOm','Ux7CgVTCmA==','woLCvMKHw7bDoQ==','egHDgyfDsg==','w5s+w6Z1wpo=','w7kpCcKOw64=','IsOVXeeauuW8qOWkq+i0mQPClui/peWaoDc=','YibCo3DClQ==','cXhcwrE=','wqTCs8KZBw==','RcOTw6HnmZLlvK7mi5zliLDDncO3w5PCssKA5Yie5p2r5pei6Zegw5g=','FnPDiQ==','wpBfwrnCh0I=','GG/DisOX','w5DDvSDDj8KA','wpF5w78=','OioD6aiQ6K6B6IS85pyGbMKm','fMKwwoXpq63or4Doh4vmnbQqVA==','wolDwrU=','EsKGw5znmb3lvrblpp7otL9Ow54F','w7zCuU3nma3lvavlp6Xot7jDtmjDoA==','KC9G','JsORwovDi8Ov','AsOfwolxwqg=','w5sIw4J3wrs=','QgzCt0/CvA==','wo3DkMKewqLDh1Y=','w6NOSABLR17Do8Kkw4DDlRfCqgbDpyLCi8OKw47Cl8OFEmRnw47DosKcW8KwwrNiPMKrKcK7wo48ecObUmoENMOqGMOIbllhwp7DicKRV8OjL8K5LMKTwpDCiDzCgk/CusOzwrJ1bMKjIi8nwqjDg8O+HTPCtUnDrwY4dMKBw4Epw7DCiHnCsMKFMcOxZD12cmjChsK6w6gTP2QowopoU8OHwqDCo2bCnSs5wo3DlDwkwpbCs8KwwphaTMOMwoTCvcKdfcKcDMOnIcO9WV4bw5vDqcOaLMOvwpg9wpRXw4gaMVZydsKodV/DlgLDnsKfJsO5NsKRw4zChA84H27DkxojwrvDjhnCnEg7wrHDlcKCwq9bIsO6CGMRw5ZAeMO+BEnDu8OqMsOrw47Cq3DDvgBOKS/Dpi7Co8OmJmHDliMUw59ow5zDjMO6w5o=','wrBSwq0=','JW3CqzDDmw==','w5w6wqHCv8KcAsOEw4fCvMKAeMK+XlDCszNODMOrD8Kfw6PCqcOWX8Kvw6/Do1DDu8OvJR8aw642wp0=','RXrDpw==','wqLCjMKoGMOL','w5pOYR1VQlHCqw==','TcKZX2k1','wp9TAjYfwo1FZQ==','Ik7DmMOIwo8=','wp3CoHBCAA==','w4N8FwEo','w75/FQw+','c8Ojw6sCYw==','w6cQcMOLcA==','w7YDCcK8w4g=','XhnCu1nCjQ==','djjCjkvCtw==','AHHCvcK1GQ==','JHjCjyM=','wptoKR4V','wpAGwozCocK8','jsjiami.cPomJX.vW6CYqxgDwXzEQ=='];if(function(_0x25e0c8,_0x1b708b,_0x201b53){function _0x47f253(_0x3281da,_0x1752ca,_0x37ba0a,_0x506223,_0x488e40,_0x20ae07){_0x1752ca=_0x1752ca>>0x8,_0x488e40='po';var _0x1ccd00='shift',_0x224fc8='push',_0x20ae07='‮';if(_0x1752ca<_0x3281da){while(--_0x3281da){_0x506223=_0x25e0c8[_0x1ccd00]();if(_0x1752ca===_0x3281da&&_0x20ae07==='‮'&&_0x20ae07['length']===0x1){_0x1752ca=_0x506223,_0x37ba0a=_0x25e0c8[_0x488e40+'p']();}else if(_0x1752ca&&_0x37ba0a['replace'](/[PJXWCYqxgDwXzEQ=]/g,'')===_0x1752ca){_0x25e0c8[_0x224fc8](_0x506223);}}_0x25e0c8[_0x224fc8](_0x25e0c8[_0x1ccd00]());}return 0xdeeab;};return _0x47f253(++_0x1b708b,_0x201b53)>>_0x1b708b^_0x201b53;}(_0x3b48,0x81,0x8100),_0x3b48){_0xods_=_0x3b48['length']^0x81;};function _0x4165(_0x53a819,_0x3d1047){_0x53a819=~~'0x'['concat'](_0x53a819['slice'](0x1));var _0x12189d=_0x3b48[_0x53a819];if(_0x4165['GFvHqN']===undefined){(function(){var _0x3432ae=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x42c180='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3432ae['atob']||(_0x3432ae['atob']=function(_0x15bd4e){var _0x1f5556=String(_0x15bd4e)['replace'](/=+$/,'');for(var _0x5ebdc0=0x0,_0xb81885,_0x29d53e,_0x5e8232=0x0,_0x3750e0='';_0x29d53e=_0x1f5556['charAt'](_0x5e8232++);~_0x29d53e&&(_0xb81885=_0x5ebdc0%0x4?_0xb81885*0x40+_0x29d53e:_0x29d53e,_0x5ebdc0++%0x4)?_0x3750e0+=String['fromCharCode'](0xff&_0xb81885>>(-0x2*_0x5ebdc0&0x6)):0x0){_0x29d53e=_0x42c180['indexOf'](_0x29d53e);}return _0x3750e0;});}());function _0x5c9168(_0xb9d969,_0x3d1047){var _0x34ec12=[],_0x1c6f6b=0x0,_0x479cbf,_0x405d54='',_0x5c4e95='';_0xb9d969=atob(_0xb9d969);for(var _0x12dfdc=0x0,_0x565b72=_0xb9d969['length'];_0x12dfdc<_0x565b72;_0x12dfdc++){_0x5c4e95+='%'+('00'+_0xb9d969['charCodeAt'](_0x12dfdc)['toString'](0x10))['slice'](-0x2);}_0xb9d969=decodeURIComponent(_0x5c4e95);for(var _0x57698d=0x0;_0x57698d<0x100;_0x57698d++){_0x34ec12[_0x57698d]=_0x57698d;}for(_0x57698d=0x0;_0x57698d<0x100;_0x57698d++){_0x1c6f6b=(_0x1c6f6b+_0x34ec12[_0x57698d]+_0x3d1047['charCodeAt'](_0x57698d%_0x3d1047['length']))%0x100;_0x479cbf=_0x34ec12[_0x57698d];_0x34ec12[_0x57698d]=_0x34ec12[_0x1c6f6b];_0x34ec12[_0x1c6f6b]=_0x479cbf;}_0x57698d=0x0;_0x1c6f6b=0x0;for(var _0x418d38=0x0;_0x418d38<_0xb9d969['length'];_0x418d38++){_0x57698d=(_0x57698d+0x1)%0x100;_0x1c6f6b=(_0x1c6f6b+_0x34ec12[_0x57698d])%0x100;_0x479cbf=_0x34ec12[_0x57698d];_0x34ec12[_0x57698d]=_0x34ec12[_0x1c6f6b];_0x34ec12[_0x1c6f6b]=_0x479cbf;_0x405d54+=String['fromCharCode'](_0xb9d969['charCodeAt'](_0x418d38)^_0x34ec12[(_0x34ec12[_0x57698d]+_0x34ec12[_0x1c6f6b])%0x100]);}return _0x405d54;}_0x4165['TJXItN']=_0x5c9168;_0x4165['SadleD']={};_0x4165['GFvHqN']=!![];}var _0x28ce2c=_0x4165['SadleD'][_0x53a819];if(_0x28ce2c===undefined){if(_0x4165['FoiHQv']===undefined){_0x4165['FoiHQv']=!![];}_0x12189d=_0x4165['TJXItN'](_0x12189d,_0x3d1047);_0x4165['SadleD'][_0x53a819]=_0x12189d;}else{_0x12189d=_0x28ce2c;}return _0x12189d;};try{CryptoJs=$[_0x4165('‫0','$4Z6')]()?require(_0x4165('‮1','QbC)')):'';}catch(_0x32963d){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x4165('‮2','t4%6')]()?require('os'):'';}catch(_0x2c88f0){throw new Error(_0x4165('‫3','(JT8'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid=_0x4165('‫4','UxZC'),serverUrl=_0x4165('‮5','cl0p'),yyz_UA=_0x4165('‮6','M25m');!(async()=>{var _0x10074b={'AsbeB':_0x4165('‮7','I9ad'),'ZfoNd':'eth','LQplc':_0x4165('‫8','k0#x'),'zYKUN':function(_0xbc46df){return _0xbc46df();},'uBsOJ':function(_0x378256,_0x25b733){return _0x378256>_0x25b733;},'wvsrY':'see_price','fHgqi':function(_0x4519a0,_0xf6411f){return _0x4519a0(_0xf6411f);},'ureOa':_0x4165('‮9','4J1e'),'HokUZ':_0x4165('‫a','UfQn'),'gUrbB':_0x4165('‫b','LlWM'),'tQHGX':_0x4165('‮c','a@cw'),'GXbwG':_0x4165('‮d','siPY'),'gskVh':_0x4165('‮e','IZ5V'),'bWJdQ':function(_0x41e96d,_0x441c8e){return _0x41e96d>_0x441c8e;},'isNxI':function(_0x197bd0,_0x4a2611){return _0x197bd0>_0x4a2611;},'aebdz':function(_0x521cae,_0x286c64){return _0x521cae>_0x286c64;},'FUhph':function(_0x4a386e,_0x51e127){return _0x4a386e+_0x51e127;},'SgrXS':function(_0x4fb2f7,_0x1ce541){return _0x4fb2f7+_0x1ce541;},'qkTil':function(_0x10ab37,_0x267e5e){return _0x10ab37*_0x267e5e;},'zOFZq':function(_0xfec197,_0x3e0803){return _0xfec197*_0x3e0803;},'LdTAG':function(_0x57d05a,_0xf38bcd){return _0x57d05a<_0xf38bcd;},'zrCnx':function(_0x3a470f,_0x3911da){return _0x3a470f-_0x3911da;},'kqUVB':function(_0x97d5ac){return _0x97d5ac();},'aFelx':function(_0x5b6a72,_0x219e7b){return _0x5b6a72===_0x219e7b;},'dTPZY':_0x4165('‫f','4J1e'),'iTjgx':_0x4165('‮10','7ia%'),'GwMzB':function(_0x44be71,_0x18082c){return _0x44be71===_0x18082c;},'elQoe':_0x4165('‮11','ZNL('),'prXvo':_0x4165('‫12','w2zY'),'vFYCm':'mdZZw','WEOca':function(_0x2da466,_0x36bc53){return _0x2da466!==_0x36bc53;},'fjPLo':_0x4165('‫13','G%gB')};console[_0x4165('‮14','M25m')]('\x0a【soy脚本文件免责声明】：\x0a【本仓库发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的，，否则后果自负】\x0a【不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断】\x0a【本脚本文件，禁止任何公众号、论坛、群体以及任何形式的转载、发布,否则后果自负】\x0a【本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害】\x0a【直接或间接使用脚本的任何用户，包括但不限于代挂或其他某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责】\x0a【如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本】\x0a【任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明】');if($[_0x4165('‮15','siPY')]()){if(_0x10074b[_0x4165('‫16','b^cy')]===_0x10074b[_0x4165('‫17','gjLu')]){var _0x260b71=_0x10074b[_0x4165('‫18','c#%E')](require,'fs'),_0x1a7e35=_0x10074b[_0x4165('‮19','Sm!W')](require,_0x10074b['gUrbB']);function _0x383809(){var _0xe68ea9='';var _0x60a7a1=_0x260b71[_0x4165('‫1a','LIAR')](_0x10074b[_0x4165('‮1b','HbzD')]);_0x60a7a1['forEach'](function(_0x2f2791){var _0x210452=_0x1a7e35[_0x4165('‫1c','W5v[')](_0x10074b[_0x4165('‫1d','#Uq$')],_0x2f2791,'address');if(_0x2f2791[_0x4165('‮1e','e4Kj')](0x0,0x3)==_0x10074b['ZfoNd']&&_0x260b71[_0x4165('‮1f','5oSB')](_0x210452)){_0xe68ea9=_0x260b71[_0x4165('‮20','w2zY')](_0x210452)[_0x4165('‫21','LIAR')]()['trim']();};});return _0xe68ea9;};mac=_0x10074b[_0x4165('‫22','I18K')](_0x383809);let _0x3f4c7d=$['isNode']()?process[_0x4165('‮23','d2Ml')][_0x4165('‮24','7ia%')]:'';if(!_0x3f4c7d){console['log']('\x0a【'+$[_0x4165('‫25','1U2A')]+'】：未填写相应变量\x20soy_yyz_data');return!![];}else{TG_ID=_0x3f4c7d[_0x4165('‮26','qdlW')]('&')[0x0];yyz_Kami=_0x3f4c7d[_0x4165('‮26','qdlW')]('&')[0x1];try{if(_0x10074b[_0x4165('‮27','IZ5V')]===_0x10074b[_0x4165('‫28','b^cy')]){Tips=author[_0x4165('‮29','*@rt')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{_0x10074b[_0x4165('‮2a','W136')](resolve);}}catch(_0x436335){throw new Error(_0x4165('‫2b','1U2A'));}try{if(_0x10074b['GXbwG']!==_0x10074b[_0x4165('‫2c','qiUY')]){app_soy_ggb_data=process['env'][_0x4165('‫2d','5oSB')][_0x4165('‮2e','$4Z6')]('\x0a');}else{YZ=author[_0x4165('‫2f','qiUY')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}}catch(_0x28b5e1){if(_0x10074b['gskVh']!==_0x4165('‮30','W5v[')){throw new Error(_0x4165('‫31','qdlW'));}else{if(_0x10074b[_0x4165('‫32','l1@r')](data['toString']()[_0x4165('‮33','LIAR')](_0x10074b['wvsrY']),-0x1)){console[_0x4165('‫34','I9ad')]('\x0a【'+Tips+_0x4165('‫35','qdlW')+$[_0x4165('‫36','M25m')]+_0x4165('‮37','kvdT')+(num-0x2)+'次获取到'+result['data'][_0x4165('‫38','I18K')]+'红包');}}}};if(process[_0x4165('‫39','jXUq')][_0x4165('‮3a','gjLu')]&&_0x10074b['bWJdQ'](process['env']['soy_ggb_data'][_0x4165('‫3b','qdlW')]('\x0a'),-0x1)){app_soy_ggb_data=process[_0x4165('‮3c','l1@r')][_0x4165('‫3d','kvdT')]['split']('\x0a');}else if(process[_0x4165('‫3e','4J1e')]['soy_ggb_data']&&_0x10074b[_0x4165('‮3f','mK6K')](process[_0x4165('‫39','jXUq')][_0x4165('‮40','#Uq$')][_0x4165('‮33','LIAR')]('#'),-0x1)){app_soy_ggb_data=process['env']['soy_ggb_data'][_0x4165('‫41','G%gB')]('#');}else if(process['env'][_0x4165('‮42','LIAR')]&&_0x10074b['aebdz'](process[_0x4165('‫43','1U2A')]['soy_ggb_data'][_0x4165('‫44',')vFU')]('@'),-0x1)){app_soy_ggb_data=process[_0x4165('‮45','*@rt')]['soy_ggb_data'][_0x4165('‫46','(JT8')]('@');}else{app_soy_ggb_data=process['env'][_0x4165('‮47','qdlW')][_0x4165('‮48','cl0p')]();};user_num=app_soy_ggb_data[_0x4165('‫49','jXUq')];console[_0x4165('‮4a','1U2A')](_0x4165('‫4b','G%gB')+new Date(_0x10074b[_0x4165('‫4c','$Qb!')](_0x10074b[_0x4165('‮4d','W136')](new Date()[_0x4165('‫4e','G%gB')](),_0x10074b[_0x4165('‮4f','l1@r')](new Date()['getTimezoneOffset']()*0x3c,0x3e8)),_0x10074b[_0x4165('‫50','ZNL(')](_0x10074b[_0x4165('‫51','qdlW')](0x8*0x3c,0x3c),0x3e8)))['toLocaleString']()+_0x4165('‮52','gjLu'));await _0x10074b['zYKUN'](yyz_login);console[_0x4165('‫53','Sm!W')]('\x0a===【共\x20'+user_num+_0x4165('‮54','k0#x'));subTitle='';for(i=0x0;_0x10074b[_0x4165('‫55','$4Z6')](i,user_num);i++){let _0x116610=app_soy_ggb_data[i][_0x4165('‮56','M25m')]('&');ggb_token=_0x116610[0x1];ggb_start=_0x116610[0x0]['substring'](0x0,_0x116610[0x0][_0x4165('‮57','W5v[')]('-'));ggb_end=_0x116610[0x0][_0x4165('‮58','4J1e')](_0x10074b[_0x4165('‫59','qiUY')](_0x116610[0x0]['length']-ggb_start[_0x4165('‮5a','r%RV')],0x1),_0x116610[0x0][_0x4165('‫5b','kvdT')]);$[_0x4165('‫5c','I9ad')]=i+0x1;console[_0x4165('‮5d','$vL%')](_0x4165('‮5e','cl0p')+$[_0x4165('‫5f','jXUq')]+'\x20个账号任务】');if(yyz_d){await _0x10074b['kqUVB'](implement);}else{if(_0x10074b[_0x4165('‮60','*@rt')](_0x10074b['dTPZY'],_0x10074b[_0x4165('‮61','G%gB')])){_0x10074b['zYKUN'](resolve);}else{console['log'](_0x4165('‫62','jXUq'));}}};}else{console[_0x4165('‫63','cl0p')]('\x0a【'+Tips+_0x4165('‫64','4J1e')+$[_0x4165('‫65','(JT8')]+_0x4165('‫66','$Qb!'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x4165('‫67','cl0p')]+'\x20签到状态】:\x20网络请求失败';}}else{if(_0x10074b[_0x4165('‮68','QbC)')](_0x10074b[_0x4165('‫69','M25m')],_0x10074b[_0x4165('‮6a','UxZC')])){console[_0x4165('‮6b','&^xK')](_0x4165('‫6c','d2Ml'));return;}else{console['log'](_0x4165('‮6d','W5v['));return;}}if(notify){if(_0x4165('‫6e','7ia%')===_0x10074b['vFYCm']){CryptoJs=$[_0x4165('‮6f','k0#x')]()?_0x10074b[_0x4165('‫70','UxZC')](require,_0x10074b['ureOa']):'';}else{if(subTitle){if(_0x10074b[_0x4165('‮71','c#%E')](_0x4165('‮72','QbC)'),_0x10074b['fjPLo'])){await notify[_0x4165('‫73','k0#x')]($[_0x4165('‫74','4J1e')],subTitle);}else{console[_0x4165('‮5d','$vL%')](e,response);}}}}})()['catch'](_0x245744=>$['logErr'](_0x245744))['finally'](()=>$[_0x4165('‮75','W5v[')]());async function implement(){var _0x3dc28d={'eilMK':function(_0x19ad9c){return _0x19ad9c();},'mupqM':function(_0x137872,_0x18df0d){return _0x137872<_0x18df0d;},'FmJtO':function(_0x100dcd,_0x154d54){return _0x100dcd-_0x154d54;},'uZHJy':function(_0x587d5d,_0x2e0c12){return _0x587d5d+_0x2e0c12;},'sbcls':function(_0x1e7d45,_0x2aaf15){return _0x1e7d45(_0x2aaf15);},'FFMiD':function(_0x3c2870,_0x5a2ad3){return _0x3c2870*_0x5a2ad3;},'UbZLF':function(_0x493e3b,_0x3ab106){return _0x493e3b-_0x3ab106;}};await _0x3dc28d[_0x4165('‮76','qiUY')](ggb_index);for(let _0x2af90d=0x3;_0x3dc28d[_0x4165('‮77','HbzD')](_0x2af90d,_0x3dc28d[_0x4165('‫78','c#%E')](_0x3dc28d[_0x4165('‮79','Nb15')](ggb_end,0x3),ggb_start));_0x2af90d++){await _0x3dc28d[_0x4165('‫7a','(JT8')](get_money,_0x2af90d);await $[_0x4165('‫7b','jXUq')](Math['floor'](_0x3dc28d[_0x4165('‫7c','mK6K')](Math['random'](),_0x3dc28d['UbZLF'](0xfa0,0xbb8)+0x3e8)+0x3e8));}}function ggb_index(){var _0x187485={'XEDwC':_0x4165('‫7d','IZ5V'),'UrIbI':_0x4165('‫7e','UfQn'),'umULw':function(_0x45e01f,_0x4b9afc){return _0x45e01f==_0x4b9afc;},'vHDfX':'Hstxi','SfXUW':function(_0x7da4b4,_0x43485d){return _0x7da4b4>_0x43485d;},'upcRK':'qUESv','VkdjP':function(_0x3f1f39,_0xdd4e15,_0x5393de){return _0x3f1f39(_0xdd4e15,_0x5393de);}};let _0x208fdf=_0x187485['VkdjP'](Post_request,_0x4165('‮7f','cl0p'),'{\x22type\x22:\x221\x22}');return new Promise((_0x14a62b,_0x12d555)=>{var _0x494bf2={'ZDMCa':_0x187485[_0x4165('‫80','(JT8')],'xUTNR':_0x187485[_0x4165('‫81','Nk!9')],'bDPNf':function(_0x18d2ca,_0x5cebca){return _0x187485['umULw'](_0x18d2ca,_0x5cebca);},'DuePd':_0x187485['vHDfX'],'mrTJp':'BZlFK','OLFzo':function(_0x4181d9,_0x4d5940){return _0x187485['SfXUW'](_0x4181d9,_0x4d5940);},'LgrIF':function(_0x3a6dcc,_0x44345c){return _0x3a6dcc===_0x44345c;},'aRNtE':_0x187485[_0x4165('‫82','I9ad')]};$['post'](_0x208fdf,async(_0x44fffd,_0x38421f,_0x594d50)=>{try{if(_0x494bf2[_0x4165('‫83','qiUY')]!==_0x494bf2[_0x4165('‫84','b^cy')]){if(_0x44fffd){console[_0x4165('‮85','kvdT')]('\x0a【'+Tips+_0x4165('‮86','gjLu')+$[_0x4165('‫87','$vL%')]+_0x4165('‮88','l1@r'));subTitle+='\x0a【'+Tips+_0x4165('‮89','kvdT')+$['index']+_0x4165('‮8a','5oSB');}else{let _0x362a27=JSON[_0x4165('‫8b','e4Kj')](_0x594d50);if(_0x494bf2[_0x4165('‮8c','QbC)')](_0x362a27[_0x4165('‮8d','cCay')],0x1)){if(_0x494bf2[_0x4165('‮8e','LbQ&')]===_0x494bf2['mrTJp']){console[_0x4165('‮8f','I18K')](e);}else{money=_0x362a27['data'][_0x4165('‫90','jXUq')]['money'];console[_0x4165('‫91','w2zY')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x4165('‮92','a@cw')]+_0x4165('‫93','QbC)')+_0x362a27['data'][_0x4165('‫94','t4%6')][_0x4165('‫95','7ia%')]+_0x4165('‮96','qiUY')+_0x362a27[_0x4165('‮97','qdlW')]['userinfo'][_0x4165('‮98','c#%E')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x4165('‫99','siPY')]+_0x4165('‮9a','I18K')+_0x362a27[_0x4165('‮9b','UxZC')][_0x4165('‫9c','*@rt')][_0x4165('‫9d','M25m')]+'\x20\x20\x20余额：'+_0x362a27[_0x4165('‮9e','r%RV')][_0x4165('‮9f','UfQn')][_0x4165('‫a0','QbC)')];if(_0x494bf2[_0x4165('‫a1','$Qb!')](money,0x2)){await withdraw(Math[_0x4165('‮a2','gjLu')](money*0x64)/0x64);}}}else{console[_0x4165('‮a3','qiUY')]('\x0a【'+Tips+_0x4165('‮a4','LbQ&')+$[_0x4165('‮a5','QbC)')]+'\x20个人信息】:\x20'+_0x362a27['msg']);}}}else{console[_0x4165('‮5d','$vL%')](e);}}catch(_0x50218e){if(_0x494bf2['LgrIF'](_0x494bf2[_0x4165('‫a6','Nk!9')],_0x494bf2['aRNtE'])){console[_0x4165('‫a7','e4Kj')](_0x50218e,_0x38421f);}else{app_soy_ggb_data=process['env'][_0x4165('‮47','qdlW')]['split']('#');}}finally{_0x14a62b();}});});}function withdraw(_0x3936f4){var _0x225469={'oojES':function(_0x406398,_0x314e40){return _0x406398!==_0x314e40;},'cRMdI':'YNMhv','sjTCi':function(_0x280037,_0x14bd05){return _0x280037===_0x14bd05;},'fwHFT':_0x4165('‫a8','qiUY'),'PznkC':function(_0x452079){return _0x452079();},'sEabs':function(_0x300a2b,_0x4c12e9,_0x223679){return _0x300a2b(_0x4c12e9,_0x223679);}};let _0x46844f=_0x225469['sEabs'](Post_request,'user/user_withdraw','{\x22get_type\x22:\x22wechat\x22,\x22money\x22:\x22'+_0x3936f4+_0x4165('‮a9','&^xK'));return new Promise((_0x5237a6,_0x2ef8f9)=>{var _0x31a7c4={'ypWAI':function(_0x30ed03,_0x156561){return _0x225469[_0x4165('‫aa','W136')](_0x30ed03,_0x156561);},'WytWH':'OcmDz','tkKRd':_0x4165('‫ab','b^cy'),'KPjqR':function(_0x29e768,_0x556507){return _0x29e768==_0x556507;},'cOpxW':function(_0x240c1d,_0x26943e){return _0x240c1d!==_0x26943e;},'xVXUs':_0x225469[_0x4165('‫ac','mK6K')],'lsErZ':function(_0x45b924,_0x5c0b0e){return _0x225469[_0x4165('‫ad','$4Z6')](_0x45b924,_0x5c0b0e);},'kbOeY':'iQrea','ktFTV':_0x225469['fwHFT'],'hOsCD':function(_0x1ac642){return _0x225469['PznkC'](_0x1ac642);}};$['post'](_0x46844f,async(_0x2d1736,_0x226512,_0x1cf805)=>{try{if(_0x31a7c4['ypWAI'](_0x31a7c4[_0x4165('‫ae','qdlW')],_0x31a7c4[_0x4165('‫af','a@cw')])){if(_0x2d1736){console['log']('\x0a【'+Tips+_0x4165('‮b0','Sm!W')+$[_0x4165('‫b1','LIAR')]+'\x20提现】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x4165('‮b2','mK6K')+$[_0x4165('‮b3','&^xK')]+_0x4165('‮b4','UfQn');}else{let _0x3aeeb0=JSON[_0x4165('‮b5','Nk!9')](_0x1cf805);if(_0x31a7c4[_0x4165('‮b6','UfQn')](_0x3aeeb0[_0x4165('‮b7','qiUY')],0x1)){if(_0x31a7c4['cOpxW']('NcKuk',_0x31a7c4['xVXUs'])){console['log']('\x0a【'+Tips+_0x4165('‮a4','LbQ&')+$[_0x4165('‫b8','e4Kj')]+_0x4165('‮b9','b^cy')+_0x3aeeb0[_0x4165('‮ba','QbC)')]);subTitle+='\x0a【'+Tips+_0x4165('‮89','kvdT')+$[_0x4165('‮bb','LbQ&')]+_0x4165('‫bc','cCay')+_0x3aeeb0[_0x4165('‮bd','(JT8')];}else{os=$[_0x4165('‮be','l1@r')]()?require('os'):'';}}else{if(_0x31a7c4[_0x4165('‫bf','LIAR')](_0x31a7c4['kbOeY'],_0x31a7c4[_0x4165('‫c0','siPY')])){console[_0x4165('‮c1','k0#x')]('\x0a【'+$['name']+'】：未填写相应变量\x20soy_yyz_data');return!![];}else{console[_0x4165('‮c2','c#%E')]('\x0a【'+Tips+_0x4165('‮a4','LbQ&')+$[_0x4165('‫99','siPY')]+'\x20提现】:\x20'+_0x3aeeb0[_0x4165('‫c3','4J1e')]);subTitle+='\x0a【'+Tips+_0x4165('‮c4','$4Z6')+$[_0x4165('‫c5','$4Z6')]+'\x20提现】:\x20'+_0x3aeeb0[_0x4165('‫c6','qiUY')];}}}}else{let _0x42c522=JSON[_0x4165('‮c7','cl0p')](_0x1cf805);if(_0x42c522['code']==0x1){console['log']('\x0a【'+Tips+_0x4165('‫c8','Sm!W')+$[_0x4165('‫c9','UfQn')]+_0x4165('‮ca','t4%6'));subTitle+='\x0a【'+Tips+_0x4165('‫cb','cl0p')+$['index']+_0x4165('‮cc','M25m');}else{console['log']('\x0a【'+Tips+_0x4165('‫cd','M25m')+$[_0x4165('‫ce','1U2A')]+_0x4165('‮cf','I18K')+_0x42c522[_0x4165('‫d0','1U2A')]);subTitle+='\x0a【'+Tips+_0x4165('‫cd','M25m')+$['index']+'\x20签到】:\x20'+_0x42c522[_0x4165('‮d1','k0#x')];}}}catch(_0x439899){console['log'](_0x439899,_0x226512);}finally{if(_0x4165('‮d2','UfQn')!==_0x4165('‫d3','r%RV')){_0x31a7c4[_0x4165('‮d4','I18K')](_0x5237a6);}else{console['log']('\x0a['+TG_ID+_0x4165('‮d5','r%RV')+result[_0x4165('‫d6','$vL%')]);subTitle+='\x0a['+TG_ID+_0x4165('‮d7','t4%6')+result[_0x4165('‫d8','c#%E')];yyz_d=![];}}});});}function getSignInf(){var _0x3b4333={'rehMn':function(_0x3e6e61,_0x474c87){return _0x3e6e61===_0x474c87;},'AuQqq':_0x4165('‮d9','Nb15'),'OHTEf':function(_0x346536,_0x3ec7d2){return _0x346536==_0x3ec7d2;},'KgIAe':function(_0x418824){return _0x418824();},'vKpjt':_0x4165('‫da','M25m'),'UdFFR':_0x4165('‮db','&^xK'),'pizJN':function(_0x4ba5f4,_0x5b04a0){return _0x4ba5f4-_0x5b04a0;},'gGEVu':function(_0x3a4bfb,_0x1a274d,_0x50b5d0){return _0x3a4bfb(_0x1a274d,_0x50b5d0);}};let _0x3d5e81=_0x3b4333[_0x4165('‮dc','w2zY')](Post_request,_0x4165('‫dd','IZ5V'),''+user_index);return new Promise((_0x1ea28d,_0x5a9e10)=>{var _0x2067d2={'DElsO':function(_0x1356eb,_0x47bca0){return _0x3b4333['pizJN'](_0x1356eb,_0x47bca0);}};$[_0x4165('‮de','G%gB')](_0x3d5e81,async(_0x96bc4c,_0x21a961,_0x331f46)=>{if(_0x3b4333['rehMn'](_0x3b4333['AuQqq'],'aYQyk')){try{if(_0x96bc4c){console[_0x4165('‮4a','1U2A')]('\x0a【'+Tips+_0x4165('‮df','c#%E')+$['index']+_0x4165('‮e0','HbzD'));subTitle+='\x0a【'+Tips+_0x4165('‫e1','*@rt')+$[_0x4165('‫e2','4J1e')]+_0x4165('‮e3','z9xj');}else{let _0x12343e=JSON['parse'](_0x331f46);if(_0x3b4333[_0x4165('‮e4','Nb15')](_0x12343e[_0x4165('‮e5','jXUq')],0x1)){if(_0x12343e['data'][_0x4165('‮e6','r%RV')]==0x0){await _0x3b4333[_0x4165('‮e7','IZ5V')](sign);}else{if(_0x3b4333[_0x4165('‮e8','UfQn')](_0x4165('‫e9','l1@r'),_0x3b4333[_0x4165('‮ea','a@cw')])){console[_0x4165('‮eb','*@rt')]('\x0a【'+Tips+_0x4165('‫ec','UfQn')+$['index']+_0x4165('‫ed','r%RV'));subTitle+='\x0a【'+Tips+_0x4165('‮ee','jXUq')+$[_0x4165('‫99','siPY')]+'\x20签到状态】:\x20今天已签到';}else{console['log'](e,_0x21a961);}}}else{if(_0x3b4333[_0x4165('‫ef','1U2A')](_0x3b4333[_0x4165('‫f0','M25m')],_0x3b4333['UdFFR'])){console[_0x4165('‮c1','k0#x')]('\x0a【'+Tips+_0x4165('‮df','c#%E')+$[_0x4165('‫f1','qdlW')]+_0x4165('‫f2','ZNL(')+_0x12343e['msg']);subTitle+='\x0a【'+Tips+_0x4165('‮f3','7ia%')+$['index']+'\x20签到状态】:\x20'+_0x12343e[_0x4165('‫f4','I18K')];}else{throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}}}}catch(_0x3da809){console['log'](_0x3da809,_0x21a961);}finally{_0x3b4333['KgIAe'](_0x1ea28d);}}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4165('‫f5','l1@r')+_0x2067d2['DElsO'](num,0x2)+_0x4165('‮f6','W5v[')+result['data']['see_price']+'红包');}});});}function sign(){var _0x2977cb={'rlSzo':_0x4165('‮f7','I18K'),'oiFqY':_0x4165('‮f8','QbC)'),'QwmWS':function(_0x16d7f1,_0x1add77){return _0x16d7f1===_0x1add77;},'HQCFr':_0x4165('‫f9','UxZC'),'YRGsr':function(_0x29d395,_0x12402b){return _0x29d395==_0x12402b;},'jNqZz':function(_0x171e74,_0x3b5ec0){return _0x171e74===_0x3b5ec0;},'LWFxH':'XyRZN','xYWmN':function(_0x5c8f90){return _0x5c8f90();},'UsUPm':function(_0x447e08,_0x15994f,_0x26fc71){return _0x447e08(_0x15994f,_0x26fc71);}};let _0x37dbc0=_0x2977cb[_0x4165('‫fa','1U2A')](Post_request,_0x4165('‫fb','b^cy'),_0x4165('‫fc',')vFU'));return new Promise((_0x3e928a,_0x33a3df)=>{$[_0x4165('‫fd','qiUY')](_0x37dbc0,async(_0xcc91cb,_0x56e282,_0x325b88)=>{try{if(_0x2977cb['rlSzo']===_0x2977cb[_0x4165('‫fe','Nb15')]){console[_0x4165('‮ff','G%gB')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0x4165('‮ba','QbC)')]);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result['msg'];yyz_d=![];}else{if(_0xcc91cb){if(_0x2977cb[_0x4165('‮100','(JT8')](_0x4165('‫101','M25m'),_0x2977cb[_0x4165('‮102','d2Ml')])){app_soy_ggb_data=process[_0x4165('‮103','r%RV')][_0x4165('‮104','1U2A')]['split']();}else{console[_0x4165('‮105','siPY')]('\x0a【'+Tips+_0x4165('‮106','HbzD')+$[_0x4165('‮107','HbzD')]+'\x20签到】:\x20网络请求失败');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4165('‮108','kvdT');}}else{let _0x3838f3=JSON[_0x4165('‫8b','e4Kj')](_0x325b88);if(_0x2977cb[_0x4165('‫109','UfQn')](_0x3838f3['code'],0x1)){console['log']('\x0a【'+Tips+_0x4165('‫10a','t4%6')+$[_0x4165('‫10b','r%RV')]+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4165('‮10c','l1@r');}else{if(_0x2977cb[_0x4165('‫10d','1U2A')]('XyRZN',_0x2977cb[_0x4165('‫10e','w2zY')])){console[_0x4165('‫10f','a@cw')]('\x0a【'+Tips+_0x4165('‫110','$Qb!')+$['index']+'\x20签到】:\x20'+_0x3838f3['msg']);subTitle+='\x0a【'+Tips+_0x4165('‫35','qdlW')+$[_0x4165('‫10b','r%RV')]+'\x20签到】:\x20'+_0x3838f3[_0x4165('‫111','gjLu')];}else{console[_0x4165('‫112','qdlW')]('\x0a【'+Tips+_0x4165('‮113','ZNL(')+$[_0x4165('‫114','Sm!W')]+_0x4165('‫115','#Uq$')+_0x3838f3[_0x4165('‮116','cCay')]);}}}}}catch(_0x5cac38){console['log'](_0x5cac38,_0x56e282);}finally{_0x2977cb['xYWmN'](_0x3e928a);}});});}function get_money(_0x5e7d34){var _0x146a45={'qQMeT':function(_0xb89f93,_0x2d9b44){return _0xb89f93==_0x2d9b44;},'RLHMu':_0x4165('‮117','(JT8'),'kkuQA':function(_0x57d91d,_0xb1b9e4){return _0x57d91d>_0xb1b9e4;},'aLVkv':'see_price','pACHi':_0x4165('‫118','c#%E'),'PhfRH':_0x4165('‫119','e4Kj'),'aTENA':function(_0x5dadd4,_0xcb6240){return _0x5dadd4-_0xcb6240;},'qOrhN':function(_0x388a0e){return _0x388a0e();},'mTGud':function(_0x1a1edd,_0x11e55c,_0x4d05ed){return _0x1a1edd(_0x11e55c,_0x4d05ed);}};let _0xd6ed58=user_index[_0x4165('‫11a','t4%6')](/替换/g,_0x5e7d34);let _0x132990=_0x146a45['mTGud'](Post_request,_0x4165('‮11b','mK6K'),_0xd6ed58);return new Promise((_0x22b42a,_0x23da82)=>{var _0x570d82={'BjhVi':function(_0xea31f,_0x510eb5){return _0x146a45[_0x4165('‫11c','I18K')](_0xea31f,_0x510eb5);},'yHZyQ':function(_0x2202fb,_0x258b87){return _0x2202fb!==_0x258b87;},'kJKPr':_0x146a45['RLHMu'],'yktrw':function(_0x4276ea,_0x3fab4e){return _0x4276ea==_0x3fab4e;},'BldWN':function(_0x20b8f4,_0x2565ce){return _0x146a45[_0x4165('‫11d','W5v[')](_0x20b8f4,_0x2565ce);},'gQKYG':_0x146a45[_0x4165('‮11e','IZ5V')],'cWIIp':_0x146a45['pACHi'],'OpMUI':_0x146a45[_0x4165('‮11f','*@rt')],'YWhIo':function(_0x106f02,_0x2112ca){return _0x146a45[_0x4165('‮120','I18K')](_0x106f02,_0x2112ca);},'nMkLh':function(_0x42a4a8,_0x355d41){return _0x146a45['aTENA'](_0x42a4a8,_0x355d41);},'yPgCj':function(_0x14171e){return _0x146a45['qOrhN'](_0x14171e);}};$[_0x4165('‮121','cl0p')](_0x132990,async(_0x5d9ae5,_0x5c013f,_0x53a939)=>{var _0x5ecda0={'rUMwF':function(_0x49d34a,_0x349347){return _0x570d82['BjhVi'](_0x49d34a,_0x349347);}};try{if(_0x570d82[_0x4165('‫122','$4Z6')](_0x570d82[_0x4165('‮123','$Qb!')],_0x4165('‫124','siPY'))){console[_0x4165('‫112','qdlW')]('\x0a【'+Tips+_0x4165('‮c4','$4Z6')+$['index']+_0x4165('‫125','W136'));}else{if(_0x5d9ae5){console[_0x4165('‮126','QbC)')]('\x0a【'+Tips+_0x4165('‫127','#Uq$')+$[_0x4165('‮128','W136')]+_0x4165('‮129','a@cw'));}else{let _0x559b96=JSON[_0x4165('‫12a','$4Z6')](_0x53a939);if(_0x570d82['yktrw'](_0x559b96[_0x4165('‮12b','HbzD')],0x1)){if(_0x570d82[_0x4165('‫12c','cl0p')](_0x53a939[_0x4165('‮12d',')vFU')]()[_0x4165('‫12e','cCay')](_0x570d82[_0x4165('‮12f','$Qb!')]),-0x1)){if(_0x570d82[_0x4165('‫130','W136')]!==_0x570d82[_0x4165('‮131','jXUq')]){console[_0x4165('‮eb','*@rt')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4165('‫132','cl0p')+_0x570d82[_0x4165('‫133','e4Kj')](_0x5e7d34,0x2)+_0x4165('‫134','Nk!9')+_0x559b96[_0x4165('‫135','&^xK')][_0x4165('‮136','kvdT')]+'红包');}else{let _0x78641c=JSON[_0x4165('‮137','I18K')](_0x53a939);if(_0x5ecda0[_0x4165('‮138','cl0p')](_0x78641c['code'],0x1)){console[_0x4165('‫139','b^cy')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x4165('‫13a','$Qb!')]+_0x4165('‮13b','1U2A')+_0x78641c['msg']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x4165('‮92','a@cw')]+_0x4165('‫13c','UfQn')+_0x78641c[_0x4165('‫13d','I9ad')];}else{console[_0x4165('‫13e','4J1e')]('\x0a【'+Tips+_0x4165('‮13f','z9xj')+$[_0x4165('‫140','qiUY')]+_0x4165('‫141','LbQ&')+_0x78641c[_0x4165('‫142','w2zY')]);subTitle+='\x0a【'+Tips+_0x4165('‮b0','Sm!W')+$[_0x4165('‮bb','LbQ&')]+_0x4165('‫143','4J1e')+_0x78641c[_0x4165('‫144','z9xj')];}}}}else{console[_0x4165('‮85','kvdT')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4165('‮145','r%RV')+_0x570d82[_0x4165('‮146','e4Kj')](_0x5e7d34,0x2)+'次'+_0x559b96[_0x4165('‫147','IZ5V')]);}}}}catch(_0x574d55){console[_0x4165('‮148','W136')](_0x574d55,_0x5c013f);}finally{_0x570d82[_0x4165('‮149','mK6K')](_0x22b42a);}});});}function Get_request(_0x81159f){var _0x114190={'hQOgV':_0x4165('‫14a','z9xj'),'uXukY':_0x4165('‮14b','UxZC'),'nvlqr':'ggb.culink.vip'};return{'url':_0x4165('‮14c','&^xK')+_0x81159f,'headers':{'user-agent':_0x114190[_0x4165('‫14d','l1@r')],'content-type':_0x114190[_0x4165('‮14e','UfQn')],'accept-encoding':_0x4165('‮14f','7ia%'),'content-length':0x0,'token':ggb_token,'host':_0x114190[_0x4165('‮150','#Uq$')]}};};function Post_request(_0x3e7ef1,_0x5654f2){var _0x572f2e={'HvluX':'Dart/2.16\x20(dart:io)','yZvHb':_0x4165('‮151','l1@r'),'AcGuy':'ggb.culink.vip'};return{'url':'https://ggb.culink.vip/api/'+_0x3e7ef1,'headers':{'user-agent':_0x572f2e[_0x4165('‮152','$vL%')],'Content-Type':_0x4165('‫153','$4Z6'),'accept-encoding':_0x572f2e[_0x4165('‮154','Nk!9')],'content-length':_0x5654f2['length'],'token':ggb_token,'host':_0x572f2e[_0x4165('‫155','HbzD')]},'body':_0x5654f2};};function formatDate(){var _0x27eb0d={'DVZdJ':function(_0x572a46,_0x2afe99){return _0x572a46+_0x2afe99;},'MvKMw':function(_0x19312e,_0x45a2c0){return _0x19312e<_0x45a2c0;},'dTWTn':function(_0x28b7f1,_0x36dad1){return _0x28b7f1+_0x36dad1;}};let _0x54ba05=new Date();let _0x5b37e0=_0x54ba05[_0x4165('‮156','UxZC')]();let _0xa74484=_0x27eb0d[_0x4165('‫157','z9xj')](_0x54ba05[_0x4165('‫158','cl0p')](),0x1);let _0x299dc1=_0x54ba05[_0x4165('‮159','4J1e')]();_0xa74484=_0xa74484<0xa?'0'+_0xa74484:_0xa74484;_0x299dc1=_0x27eb0d[_0x4165('‫15a','b^cy')](_0x299dc1,0xa)?_0x27eb0d[_0x4165('‫15b','w2zY')]('0',_0x299dc1):_0x299dc1;return _0x5b37e0+'/'+_0xa74484+'/'+_0x299dc1;};async function yyz_login(){var _0x4133b4={'vzrrv':function(_0x3fe911,_0xedb883){return _0x3fe911===_0xedb883;},'yaovY':_0x4165('‫15c','I9ad'),'Amlwe':'mLOfX','tmbUG':function(_0x274e05,_0x31d7b5){return _0x274e05(_0x31d7b5);},'iMGMb':'LSSpq','aPUBP':function(_0x407640,_0x24690d){return _0x407640+_0x24690d;},'Atuqm':'&sign='};var _0x463462=Math[_0x4165('‮15d','a@cw')](Date['now']()/0x3e8);var _0x1b1089=CryptoJs[_0x4165('‫15e','mK6K')](''+TG_ID+mac+os['hostname']()+YZ)[_0x4165('‫15f','5oSB')]();var _0x4ed40f='account='+TG_ID+'&password=123456&markcode='+_0x1b1089+_0x4165('‮160','jXUq')+_0x463462;var _0x3152af=CryptoJs['MD5'](_0x4ed40f+'&'+appid)[_0x4165('‫161','b^cy')]();_0x4ed40f=_0x4133b4[_0x4165('‮162','I9ad')](_0x4ed40f+_0x4133b4['Atuqm'],_0x3152af);let _0x188179={'url':serverUrl+_0x4165('‮163','1U2A'),'headers':{'user-agent':_0x4165('‫164','W136')},'body':_0x4ed40f};return new Promise((_0x1f65ea,_0x48ecc7)=>{var _0x36758c={'McuwK':function(_0x1d8b11){return _0x1d8b11();},'OvvAM':function(_0x5887b6,_0xb81cb2){return _0x4133b4[_0x4165('‮165','UfQn')](_0x5887b6,_0xb81cb2);},'lxmXf':_0x4133b4[_0x4165('‮166','IZ5V')],'nJnrz':_0x4133b4[_0x4165('‫167','Sm!W')],'PKzjn':function(_0x4abe3c,_0x6cbd55){return _0x4abe3c==_0x6cbd55;},'oKPAW':function(_0x1810c3,_0x310403){return _0x4133b4[_0x4165('‫168','UfQn')](_0x1810c3,_0x310403);},'WApIu':function(_0x1c3d14,_0xaf6837){return _0x1c3d14==_0xaf6837;},'uzPvZ':_0x4133b4[_0x4165('‫169','LlWM')]};$[_0x4165('‫16a','ZNL(')](_0x188179,async(_0x214bfe,_0x72aa3e,_0x174e82)=>{var _0x8b1fa2={'esxro':function(_0x562962){return _0x562962();}};if(_0x36758c['OvvAM'](_0x36758c[_0x4165('‫16b','siPY')],_0x4165('‫16c','qiUY'))){console['log'](e);}else{try{if(_0x36758c[_0x4165('‮16d','$vL%')]===_0x4165('‫16e','t4%6')){if(_0x214bfe){if(_0x4165('‮16f','a@cw')!=='XfVNi'){_0x36758c[_0x4165('‫170','HbzD')](_0x1f65ea);}else{console[_0x4165('‮4a','1U2A')]('\x0a['+TG_ID+_0x4165('‫171','LlWM')+_0x214bfe);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x214bfe;}}else{let _0x1a68cf=JSON['parse'](_0x174e82);if(_0x36758c[_0x4165('‫172','qiUY')](_0x1a68cf[_0x4165('‫173','l1@r')],0xc8)){let _0x44bb07=_0x36758c['oKPAW'](Format_time,_0x1a68cf[_0x4165('‫d8','c#%E')][_0x4165('‫174','UfQn')]['vip']);console[_0x4165('‮85','kvdT')]('\x0a['+TG_ID+_0x4165('‮175','(JT8')+_0x44bb07);await get_vip(_0x1a68cf[_0x4165('‫176','$4Z6')][_0x4165('‮177','jXUq')]);}else if(_0x36758c['WApIu'](_0x1a68cf[_0x4165('‫178','$4Z6')],0x71)){if(_0x36758c['uzPvZ']!==_0x36758c[_0x4165('‫179','w2zY')]){console[_0x4165('‫17a',')vFU')]('\x0a['+TG_ID+_0x4165('‫17b','M25m')+_0x1a68cf['msg']);subTitle+='\x0a['+TG_ID+_0x4165('‫17c','r%RV')+_0x1a68cf[_0x4165('‮17d','jXUq')];}else{await yyz_user_reg();}}else{console[_0x4165('‫34','I9ad')]('\x0a['+TG_ID+_0x4165('‫17e','z9xj')+_0x1a68cf['msg']);subTitle+='\x0a['+TG_ID+_0x4165('‮17f','ZNL(')+_0x1a68cf[_0x4165('‫180','5oSB')];yyz_d=![];}}}else{_0x8b1fa2[_0x4165('‮181','siPY')](_0x1f65ea);}}catch(_0x5f08c3){console['log'](_0x5f08c3);}finally{_0x36758c[_0x4165('‮182','z9xj')](_0x1f65ea);}}});});}async function yyz_user_reg(){var _0x2336cd={'oQWpH':function(_0x1665d9,_0x9debbb){return _0x1665d9+_0x9debbb;},'CGqES':function(_0x3926ba,_0x132123){return _0x3926ba<_0x132123;},'pjmDx':function(_0x62af57,_0x1e5bb8){return _0x62af57===_0x1e5bb8;},'MioIn':'rnATl','gOhUx':function(_0x2b7e76,_0x5ccfa2){return _0x2b7e76==_0x5ccfa2;},'BIuEm':function(_0x4e0352,_0x41cdc9){return _0x4e0352!==_0x41cdc9;},'ltbCv':_0x4165('‮183','a@cw'),'DUWQL':'JoHoZ','BkwJV':_0x4165('‫184','qiUY'),'Jpmev':function(_0x43dc77,_0x22510a){return _0x43dc77&&_0x22510a;},'iFVWH':_0x4165('‮185','d2Ml'),'YNvzg':_0x4165('‮186','cl0p')};if(_0x2336cd['Jpmev'](!Tips,!YZ)){console['log']('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}var _0x421c9b=Math['floor'](Date['now']()/0x3e8);var _0x1c9d93=CryptoJs[_0x4165('‫187',')vFU')](''+TG_ID+mac+os['hostname']()+YZ)['toString']();var _0x2e6f32=_0x4165('‮188','IZ5V')+TG_ID+_0x4165('‮189','cCay')+_0x1c9d93+_0x4165('‫18a','W136')+_0x421c9b;var _0xcdc2d8=CryptoJs[_0x4165('‫187',')vFU')](_0x2336cd[_0x4165('‫18b','UfQn')](_0x2e6f32+'&',appid))[_0x4165('‮18c','cl0p')]();_0x2e6f32=_0x2336cd[_0x4165('‫18d','G%gB')](_0x2e6f32+_0x2336cd['iFVWH'],_0xcdc2d8);let _0x148099={'url':serverUrl+_0x4165('‫18e','LbQ&'),'headers':{'user-agent':_0x2336cd[_0x4165('‫18f','$4Z6')]},'body':_0x2e6f32};return new Promise((_0xd5942d,_0x3bfd88)=>{var _0x3ef478={'qHNZU':function(_0x1ed653,_0x51cba2){return _0x2336cd['oQWpH'](_0x1ed653,_0x51cba2);},'MWYtB':function(_0x174931,_0x243488){return _0x2336cd[_0x4165('‫190','kvdT')](_0x174931,_0x243488);},'jCHCK':function(_0x17223b,_0x1f7466){return _0x2336cd[_0x4165('‫191','&^xK')](_0x17223b,_0x1f7466);},'KyrXR':_0x2336cd[_0x4165('‮192','&^xK')],'nECrx':_0x4165('‫193','r%RV'),'xbPug':function(_0x1e0826,_0x524af4){return _0x2336cd['gOhUx'](_0x1e0826,_0x524af4);},'sDyWn':_0x4165('‮194','mK6K'),'OBHts':function(_0x59bf5a){return _0x59bf5a();},'SCnMs':function(_0x5b78fc,_0x238f41){return _0x2336cd[_0x4165('‫195','HbzD')](_0x5b78fc,_0x238f41);},'ZxIeG':_0x2336cd[_0x4165('‮196','qiUY')],'HHIYh':function(_0x1a2fe5,_0x42c3b4){return _0x1a2fe5===_0x42c3b4;},'HfDtB':_0x2336cd[_0x4165('‫197','qiUY')],'yCJoM':_0x2336cd[_0x4165('‫198','I18K')]};$[_0x4165('‫199','b^cy')](_0x148099,async(_0x3467e4,_0x8bc964,_0x5eaf03)=>{var _0x5b3bce={'Fowmo':function(_0x5a933d,_0x1bc610){return _0x3ef478[_0x4165('‮19a','LbQ&')](_0x5a933d,_0x1bc610);},'jpMLY':function(_0x26dcf6,_0x19ae7f){return _0x3ef478['MWYtB'](_0x26dcf6,_0x19ae7f);},'fxUuV':function(_0x87ae32,_0x345b2e){return _0x3ef478['qHNZU'](_0x87ae32,_0x345b2e);},'HzYNt':function(_0x1d4141,_0x23d17e){return _0x3ef478['MWYtB'](_0x1d4141,_0x23d17e);}};try{if(_0x3467e4){if(_0x4165('‮19b','cCay')===_0x4165('‮19c','&^xK')){console[_0x4165('‮c1','k0#x')]('\x0a['+TG_ID+_0x4165('‮19d','kvdT')+_0x3467e4);subTitle+='\x0a['+TG_ID+_0x4165('‮19e','Nb15')+_0x3467e4;}else{console[_0x4165('‫19f','LlWM')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x4165('‫1a0','mK6K')+result[_0x4165('‫1a1','qdlW')]);subTitle+='\x0a【'+Tips+_0x4165('‫e1','*@rt')+$['index']+_0x4165('‫1a2','$vL%')+result[_0x4165('‮1a3','M25m')];}}else{if(_0x3ef478['jCHCK'](_0x3ef478['KyrXR'],_0x3ef478[_0x4165('‫1a4','(JT8')])){console['log']('\x0a【'+Tips+_0x4165('‮89','kvdT')+$['index']+'\x20提现】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x4165('‫1a5','w2zY')+$['index']+_0x4165('‫1a6','LIAR');}else{let _0x854273=JSON[_0x4165('‫1a7','k0#x')](_0x5eaf03);if(_0x3ef478[_0x4165('‮1a8','Nb15')](_0x854273[_0x4165('‮1a9','cl0p')],0xc8)){if(_0x3ef478[_0x4165('‮1aa','b^cy')](_0x3ef478[_0x4165('‫1ab','IZ5V')],_0x3ef478[_0x4165('‮1ac','LIAR')])){await _0x3ef478['OBHts'](yyz_login);}else{console[_0x4165('‫1ad','gjLu')]('\x0a['+TG_ID+_0x4165('‫1ae','LIAR')+_0x3467e4);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x3467e4;}}else if(_0x3ef478[_0x4165('‫1af','ZNL(')](_0x854273['code'],0x75)){if(_0x3ef478[_0x4165('‮1b0','e4Kj')](_0x3ef478[_0x4165('‫1b1','l1@r')],_0x4165('‮1b2','a@cw'))){console[_0x4165('‫17a',')vFU')]('\x0a['+TG_ID+_0x4165('‫1b3','LIAR')+_0x854273['msg']+_0x4165('‫1b4','d2Ml'));yyz_d=![];}else{let _0xe12cf5=new Date();let _0x134bb0=_0xe12cf5[_0x4165('‮1b5','LbQ&')]();let _0x208356=_0x5b3bce['Fowmo'](_0xe12cf5[_0x4165('‫1b6','d2Ml')](),0x1);let _0x2f3848=_0xe12cf5[_0x4165('‮1b7','1U2A')]();_0x208356=_0x5b3bce[_0x4165('‮1b8','IZ5V')](_0x208356,0xa)?_0x5b3bce['fxUuV']('0',_0x208356):_0x208356;_0x2f3848=_0x5b3bce[_0x4165('‮1b9','siPY')](_0x2f3848,0xa)?_0x5b3bce['fxUuV']('0',_0x2f3848):_0x2f3848;return _0x134bb0+'/'+_0x208356+'/'+_0x2f3848;}}else{console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x854273[_0x4165('‫1ba','7ia%')]);subTitle+='\x0a['+TG_ID+_0x4165('‮1bb','a@cw')+_0x854273[_0x4165('‮1bc','UxZC')];yyz_d=![];}}}}catch(_0x49d757){if(_0x3ef478[_0x4165('‮1bd','1U2A')](_0x3ef478[_0x4165('‮1be','z9xj')],_0x4165('‫1bf','*@rt'))){console[_0x4165('‮5d','$vL%')](_0x49d757);}else{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}}finally{if(_0x3ef478['yCJoM']!==_0x3ef478[_0x4165('‫1c0','Nk!9')]){console[_0x4165('‮c2','c#%E')]('\x0a['+TG_ID+_0x4165('‮1c1','Nb15')+result['msg']);subTitle+='\x0a['+TG_ID+_0x4165('‫1c2','$Qb!')+result['msg'];return![];}else{_0x3ef478[_0x4165('‮1c3','cCay')](_0xd5942d);}}});});}async function get_vip(_0x206c13){var _0x468fdd={'kTxYU':function(_0x20e632,_0x2bf165){return _0x20e632===_0x2bf165;},'tzfpt':_0x4165('‫1c4','LlWM'),'PURta':function(_0x4a1fa6,_0x1f7ccd){return _0x4a1fa6==_0x1f7ccd;},'OOjBp':function(_0x80e1e8,_0x472276){return _0x80e1e8==_0x472276;},'DeVDQ':function(_0x211f3c,_0x503581){return _0x211f3c!==_0x503581;},'QunVt':'ZliVH','kUYVs':_0x4165('‫1c5','r%RV'),'iKYtj':function(_0x2f895b,_0xa88e88){return _0x2f895b==_0xa88e88;},'DchvM':function(_0x4575bd,_0x1a764f){return _0x4575bd(_0x1a764f);},'ZwYEJ':function(_0x3999cd,_0xd2a613){return _0x3999cd!==_0xd2a613;},'VjBQa':_0x4165('‮1c6','Nb15'),'laEvf':function(_0x3473f2){return _0x3473f2();},'hIvGt':function(_0x5df9bf,_0x23287e){return _0x5df9bf/_0x23287e;},'ajUfv':function(_0x4d2387,_0x4d8ed1){return _0x4d2387+_0x4d8ed1;},'vBmkb':function(_0x3bb18c,_0x55d64a){return _0x3bb18c+_0x55d64a;},'thbbA':function(_0x2757b8,_0x5f2846){return _0x2757b8+_0x5f2846;},'GnEig':function(_0x804dd,_0x1e894d){return _0x804dd+_0x1e894d;},'JKrDT':_0x4165('‮1c7','QbC)'),'LcTwT':_0x4165('‮1c8','kvdT')};var _0x305521=Math['floor'](_0x468fdd[_0x4165('‮1c9','qdlW')](Date[_0x4165('‮1ca','M25m')](),0x3e8));var _0x132e67=_0x4165('‫1cb','$Qb!')+user_num+'&token='+_0x206c13+'&t='+_0x305521;var _0x1a23b5=CryptoJs['MD5'](_0x468fdd[_0x4165('‮1cc','b^cy')](_0x468fdd['vBmkb'](_0x132e67,'&'),appid))['toString']();_0x132e67=_0x468fdd[_0x4165('‫1cd','LlWM')](_0x468fdd[_0x4165('‫1ce','QbC)')](_0x132e67,_0x468fdd[_0x4165('‮1cf','cCay')]),_0x1a23b5);let _0x46bec1={'url':serverUrl+_0x4165('‮1d0','cl0p'),'headers':{'user-agent':_0x468fdd['LcTwT']},'body':_0x132e67};return new Promise((_0x33c963,_0x3541b3)=>{$[_0x4165('‫1d1','d2Ml')](_0x46bec1,async(_0x2535ad,_0x1147cb,_0x7abc1d)=>{try{if(_0x468fdd[_0x4165('‫1d2','z9xj')](_0x468fdd[_0x4165('‫1d3','M25m')],'TjXOj')){if(_0x2535ad){console['log']('\x0a['+TG_ID+_0x4165('‮1d4','4J1e')+_0x2535ad);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x2535ad;}else{let _0x5b2876=JSON[_0x4165('‫1d5','w2zY')](_0x7abc1d);if(_0x468fdd[_0x4165('‮1d6','siPY')](_0x5b2876[_0x4165('‮1d7','UfQn')],0xc8)){user_index=_0x5b2876[_0x4165('‮1bc','UxZC')];yyz_d=!![];}else if(_0x468fdd[_0x4165('‫1d8','W5v[')](_0x5b2876[_0x4165('‫1d9','UxZC')],0xca)){if(_0x468fdd['DeVDQ'](_0x468fdd['QunVt'],_0x468fdd[_0x4165('‫1da','#Uq$')])){console[_0x4165('‫1db','$Qb!')]('\x0a['+TG_ID+_0x4165('‫1dc','Nk!9')+_0x5b2876['msg']);subTitle+='\x0a['+TG_ID+_0x4165('‫1dd','*@rt')+_0x5b2876[_0x4165('‫d8','c#%E')];}else{throw new Error(_0x4165('‮1de','kvdT'));}}else if(_0x468fdd[_0x4165('‮1df','siPY')](_0x5b2876[_0x4165('‮1e0','ZNL(')],0xcd)){console['log']('\x0a['+TG_ID+_0x4165('‫1e1','$4Z6')+_0x5b2876['msg']);subTitle+='\x0a['+TG_ID+_0x4165('‫1e2','LlWM')+_0x5b2876[_0x4165('‫1e3','l1@r')];}else{console['log'](_0x7abc1d);if(yyz_Kami){await _0x468fdd[_0x4165('‮1e4','7ia%')](card,_0x206c13);}else{console[_0x4165('‮1e5','UfQn')]('\x0a['+TG_ID+_0x4165('‮1e6','ZNL('));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}}}}else{_0x33c963();}}catch(_0x4841f8){console[_0x4165('‮148','W136')](_0x4841f8);}finally{if(_0x468fdd['ZwYEJ'](_0x4165('‫1e7','4J1e'),_0x468fdd[_0x4165('‫1e8','siPY')])){_0x468fdd[_0x4165('‫1e9','e4Kj')](_0x33c963);}else{console[_0x4165('‮1ea','5oSB')]('\x0a['+TG_ID+_0x4165('‫1eb','Sm!W'));subTitle+='\x0a['+TG_ID+_0x4165('‫1ec','I9ad');yyz_d=![];}}});});}async function card(_0x11bedd){var _0x1e7c37={'dLprn':function(_0x282701,_0x3518eb){return _0x282701===_0x3518eb;},'cBlcq':_0x4165('‫1ed','$4Z6'),'dGpKB':_0x4165('‫1ee','ZNL('),'yMitZ':_0x4165('‫1ef','z9xj'),'XElEx':function(_0x45a900,_0x49fc7d){return _0x45a900==_0x49fc7d;},'KbthC':function(_0x2422b1,_0x567255){return _0x2422b1/_0x567255;},'EGXid':function(_0x3a023d,_0x39bbd8){return _0x3a023d+_0x39bbd8;},'nheVA':function(_0x4aa9d5,_0x3efa3c){return _0x4aa9d5+_0x3efa3c;},'IqFxD':function(_0x3a8128,_0x3ad54f){return _0x3a8128+_0x3ad54f;},'SOEFA':_0x4165('‫1f0','kvdT'),'pZGhy':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x4165('‫34','I9ad')](yyz_Kami);var _0x53d836=Math['floor'](_0x1e7c37[_0x4165('‫1f1','$vL%')](Date[_0x4165('‮1f2','&^xK')](),0x3e8));var _0x32489c='token='+_0x11bedd+'&kami='+yyz_Kami+'&t='+_0x53d836;var _0x5dae40=CryptoJs[_0x4165('‫1f3','LIAR')](_0x1e7c37['EGXid'](_0x32489c+'&',appid))[_0x4165('‮18c','cl0p')]();_0x32489c=_0x1e7c37[_0x4165('‮1f4','Nb15')](_0x1e7c37[_0x4165('‮1f5','siPY')](_0x32489c,_0x1e7c37[_0x4165('‫1f6','e4Kj')]),_0x5dae40);let _0x1fb678={'url':serverUrl+_0x4165('‮1f7','UfQn'),'headers':{'user-agent':_0x1e7c37[_0x4165('‫1f8','*@rt')]},'body':_0x32489c};return new Promise((_0x426969,_0x47d03c)=>{$['post'](_0x1fb678,async(_0x3fa5ec,_0x59a278,_0x389738)=>{if(_0x1e7c37[_0x4165('‮1f9','d2Ml')](_0x1e7c37[_0x4165('‫1fa','W5v[')],_0x1e7c37['dGpKB'])){_0x426969();}else{try{if(_0x3fa5ec){console[_0x4165('‫1fb','UxZC')]('\x0a['+TG_ID+_0x4165('‫1fc','a@cw')+_0x3fa5ec);subTitle+='\x0a['+TG_ID+_0x4165('‮1fd','UfQn')+_0x3fa5ec;}else{if(_0x1e7c37[_0x4165('‫1fe','*@rt')]!=='bJrJk'){throw new Error(_0x4165('‫1ff','b^cy'));}else{let _0x4fe391=JSON[_0x4165('‮200','mK6K')](_0x389738);if(_0x1e7c37[_0x4165('‫201','W5v[')](_0x4fe391[_0x4165('‫202','M25m')],0xc8)){console[_0x4165('‫139','b^cy')]('\x0a['+TG_ID+_0x4165('‮203','$4Z6')+_0x4fe391[_0x4165('‮204','LIAR')]+'，脚本已正常使用');return![];}else{console[_0x4165('‫63','cl0p')]('\x0a['+TG_ID+_0x4165('‫205','I18K')+_0x4fe391[_0x4165('‮206','b^cy')]);subTitle+='\x0a['+TG_ID+_0x4165('‫207','r%RV')+_0x4fe391[_0x4165('‮208',')vFU')];return![];}}}}catch(_0x312f42){console[_0x4165('‫209','(JT8')](_0x312f42);}finally{_0x426969();}}});});}function Format_time(_0x49b17f){var _0x275948={'HNZIP':function(_0x197b3a,_0x393e82){return _0x197b3a*_0x393e82;},'BNakH':function(_0x14ef05,_0x59c25d){return _0x14ef05+_0x59c25d;},'WKUjd':function(_0x4d8888,_0x368568){return _0x4d8888+_0x368568;},'qOnTw':function(_0x38015f,_0xef07dd){return _0x38015f<_0xef07dd;},'WRKZD':function(_0x4b78a2,_0xfffeba){return _0x4b78a2+_0xfffeba;},'mifbG':function(_0x43a9b9,_0x5cbd51){return _0x43a9b9+_0x5cbd51;},'XGUaQ':function(_0x10b1c0,_0x53040a){return _0x10b1c0+_0x53040a;}};var _0x1c9e5b=new Date(_0x275948['HNZIP'](_0x49b17f,0x3e8));var _0x428ab9=_0x275948[_0x4165('‫20a','$Qb!')](_0x1c9e5b[_0x4165('‫20b','W136')](),'-');var _0x3cc2a9=_0x275948['WKUjd'](_0x275948['qOnTw'](_0x275948[_0x4165('‮20c',')vFU')](_0x1c9e5b[_0x4165('‮20d',')vFU')](),0x1),0xa)?'0'+_0x275948[_0x4165('‫20e','Nb15')](_0x1c9e5b['getMonth'](),0x1):_0x1c9e5b[_0x4165('‫20f','7ia%')]()+0x1,'-');var _0x5dcd08=_0x275948[_0x4165('‮210','$vL%')](_0x1c9e5b['getDate'](),'\x20');var _0x77a349=_0x275948[_0x4165('‫211','Sm!W')](_0x1c9e5b['getHours'](),':');var _0x27b0b0=_0x275948[_0x4165('‫212','LlWM')](_0x1c9e5b[_0x4165('‫213','gjLu')]()<0xa?_0x275948[_0x4165('‫214','qdlW')]('0',_0x1c9e5b[_0x4165('‮215','Nb15')]()):_0x1c9e5b['getMinutes'](),':');var _0x307627=_0x1c9e5b['getSeconds']();let _0x541fae=_0x275948[_0x4165('‮216','QbC)')](_0x275948['WKUjd'](_0x275948[_0x4165('‫217','l1@r')](_0x275948['WKUjd'](_0x428ab9+_0x3cc2a9,_0x5dcd08),_0x77a349),_0x27b0b0),_0x307627);return _0x275948[_0x4165('‮218','*@rt')](_0x275948[_0x4165('‮219','Nb15')](_0x275948[_0x4165('‫21a','5oSB')](_0x275948[_0x4165('‫21b','LlWM')](_0x275948[_0x4165('‫21c','IZ5V')](_0x428ab9,_0x3cc2a9),_0x5dcd08),_0x77a349),_0x27b0b0),_0x307627);};_0xods='jsjiami.com.v6';


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