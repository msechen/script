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


const $ = new Env('【广告吧22/04/13_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodt='jsjiami.com.v6',_0xodt_=['‮_0xodt'],_0x550c=[_0xodt,'K2bCvsKPbsKBVcO8bHkswpjDlXXClcKoXBrChcKNJsKUAlkbO8OQHlfCrU7Cti/Dq8K8w5bDncO7wrjCjBYsw6XDjQ==','LlQEwobDinsic8O0','wo3DtDZRBVdLeEXCoWEpwrnCjWg=','wrrCo2EfFMKqWA5ew6NLcMOCwq8=','QFoLw5M=','eMO7MhBX','XH8Xw5rCng==','YSvChMOtAVrCiVt3wpfDiMOBInbCjH/Cp8KHAsKkG1nDpcOTPMK1w57CrC3CocKocVbDjcOAw7zCviXCm8OzM3jClQTDncKFwqgSUsKAw5cPwq7CtMO0wo5FwqXDlsOjw47CicKAfCXCiSDDlkAdVsO9wpFywoLClMOsLsOowpIGN3jCuMOmwrctw5LDiCI3w4/CljXDpMKFb1s9wrLDmnXDu8KWw5FkIAQbesKjw7nDtiXDrS8UOALCg8KFw4xNMMKjG8OZNi8qf2fDrBASZMKPWMKnFGLDlh8nwoHDoBIVw6UYw5DChmzDgMKiw5B5w4DDv3TCmHjCsMKUSxI5KsKOw5rCg8KDcMOtYibCog7CgsKmcMO/wpDCpAfCiyXCvMKpQMKfwrrDlwLDlsKRfW/DnWXCpsKYwo9HFzcHX0XDlMKAeMOswpfChhh2JmwdXsK1','w63CmHvCkwA=','C3UL','X+OCjG16E+iHjuaekeaUg+S4mOWHqOi0geWjrOabtOOBqe+8g8K444G85pyk5Lmq5bqT5Y+a5bqi55u46ISp5p2D5pS/5LiI5Y6c5YWf5Luz5re05Y+q55iK5LqZ5Lyf6Iec5py277yA5Lqn55S/5LiY5rWV6K+t5ZK35a6l5Luu56Cm56m6772156Sy5qy955Sr5Lmb5ZSs5Lqd5ouK6Z6J5rKR55qz55iA776477y95ZKi5Yqa5ZGK5p2w6IWM6Le344KGw6TjgYbkuZzogrDkvIXorIXlhLvlk4zmsbPmgIvjg5/lh4znoLTmgqHjgqLlr4PmlK/mgKnlkoTmnb3mlJ/mg6vvvIDorrHmo7Dmj7vmgoPlhrPoh5XooKTliYPmlZDjgIsm44CK5p6c6IaS5p+w5pS/5LiF77y/56W15qyO5Lmv5Lyx5YeL5L275Y+f44G06K+o5Zyk44Ok57+e5Ly15Lq15Y2l5Liu5L+f5by/5b2E55qh6L2D6Lyp44Gq5Y6X5biVBeWQs+WJmuWRtuafoOiHiei0v+OCmA/jgp3mnYjkuLvlraDkuYzkvLPohLnmnITplIXpoofmp6XkurDotYrotorvv7jlj6PmiK7kv5nkuLjpmprku6rnlrfkuovkvq/oh6nmn7fplYnor5HlrKToh6znmLvkuZfkvLzmj6DlpbPmiJjmjZXlrLzjgKzCt+ODleeZgOaMuOaKvumVoeaPv+S/hueWr+iFruaeieebteS4reS8g+eVouaIru+9ouWMseaLiuS/iOS7hemYruS6s+S4n+aNpuaJk+WFmuS6muafj+S5veijiOS6hOi+seWOreWZgOWvrC7ln4Tljo7msaDlvKfmib3nmrrlhavms4LoppbnmJjmgpnlh4PkuILovbDoobzkvp7mk5nvvbzmnpPkua/lr7nku4vnlbTmrpzlvrXotrbnmY7ku6HkvrnpmrvnpabmsYHmv7TmipvlhL3kuo7lkonmnaDmpaDku7/otZLotLbjgYwk44C/5ae75p6+5LqW5LyJ5Yyp5L6Y5oir5LmG5LiY6K2i5Lqq6KyK6IW15pyN5Y+r6IOi5rWi5amd5L6y54ib5YSF5pyc5YuL77+T5Ymg5bqN5Yyo5pS36YCB55235bmg5o+w5LyP6Lmj5Luf6K2i5pmU44GN5oqb5p2u5p6k6K2x5pq477y95omw5LmM5bKv5Zyf5pWH5Yq86K6v6K6j5pSd5LqJ5ZGu5Yud6ZuU55uO5YWH6Iaj5p6x44Kow6XjgpLkuKzkv7zkuZXkubXkv6PmlbzlvLHmnJvnn4zmrYbpoLfnmLHnmLrku4Dmi7Hnm5vmjarmi4HplYLmjKrkvKHnlYborJHkuLfluIDnmLXkuorkv5LohIDmnZznmYvkv5nnlpzogpzpgZbluLbkuo/nu6jpmqXorb7mr7rloa/mmKjjgIXmnbzkuJjkv7bnla3pm4bml6vmm4Dmlo/miIzoorDlhJzmr7blh4Dotq7lob3mm4rnmKrmnYflip/jgpPkuoXmlYjkv7znlIXluJflp5XlirzkuoDku6bkvp7nm7Xlhpfoh6/mnrvmirTkuInluK3ml4jku5TvvI7lirjop7rku5TmgbfltqXmj53ljonmrovlhp3otozloabmmaDjgJI=','wqYDw6TDj8KP','w6dQw6ZJw6U=','w7rCh2TCoDI=','wqgmYnfDoQ==','w4ZNLiDDr3bDog==','w7d8w7hI','Vntawo3CjA==','w4PDoytQT0dU','wrYrw4LDqcKN','XxMZw7QfK8OVw4TDsgg=','UUktAcOaY8KZw7HCuVvDocOg','worDlsK/P3w=','HcObEsOfTsOd','esKsdQ==','w7DDlMKM','c0lYwp8=','44OK77ya5p6W5aKy5YaO55u85bqa5Y+z6YeFwo/CqGgfwobDsMOYMFXCnsOsRAw=','UFwgDMOo','RMOjRVkx','wph3HDZa','CnsYf8K6','GeOCouS9t+iAhuaOleemmOOAh++/tOmoo+itteiEqOaciMKew4FN5aWc6LSJwqnorJrliqXkv5Lml5nohrzmn7vku67ku7rmhablhZ3lr6xO','IlbCtcObHA==','AErDrDBf','w7PChF8DXA==','EsO8G8OfTQ==','CX4rwpDCpgpPwoV+w47ChsKl','FGoAdcKm','wrhfwp/ChMO9BsKnbVDCrR4p','I8Oaw4s=','Z3XCrD3DtQ==','c2MUw7zCrA==','LMO9FsOIWQ==','wr4Bw4Q=','w4TDpTs=','w7zCn1DCoCw=','MMOyaA==','w60FI2QJEXU8bsKAwq7Cjw==','VVUJ','KnzCrsKaLMOhHA==','wr5uw4o=','w6o6w5ETF8KVw5fCgnzCnsKPbA==','QsObw48=','LBXDjF3Dp8OCWTkUwqzChMO5','eEZD','MH3Cs8KgM8OJGMOacWJ2woo=','w7cEPl4WOXE=','w7sELA==','w5NSMAzDug==','wozDtsOH','fkACwqfCveiGuuaeseaKseihm0XCjMOR5Y6R5LmG5paW6Zaq77y5','w6jCikjCnTHDmBQ=','AH8YSMK7w7BNfWzDtcKRaBvCtsKAw7NN','eH3CoBrDpA==','cnkjwqvDgQ==','RAhMVmI=','w6HCv1QDWMKoWAp+w6QWd8OJwrw=','P8O/Pkk=','B+S6n+i2n+WMuOODgTMufg==','RXE9w7zCtw==','w5R6w7pVw5M=','wpNGOQdb','esOcT2Y9','w4jDpSnCtMOy','w7/kuavotIzljILkurfli67jgq4=','NXrCqMKIJg==','w7lJFgLDqA==','VEzCtTfDsw==','wrzjg7DohILmnLTmjofnpZ7jgpPvvZXmrLjoh5nmn6vljbfog7DpnpfpvKDnjrnloYXotoc=','VsOMGw==','VHsr','f+imuOeevuinhOmgkeOCtAFG','w6oww4YoPsKdw4HCtH7Chg==','woXDp8KjAg==','LFbCtcObHA==','ISx+wqfCils=','QcOcw5fCrsK8Ymo=','wr85YHs=','wqrDmMOoKcKA','w640w4E4','wqnDssKFN3Q=','w6tQw5Zzw6E=','PMK5w5jChB8=','DsOnw5HCl8OfVg==','w4rDuMKoZA8=','LEDCrsOhEw==','DH7DiwNr','Pzl7w4nDsw==','wpsgWMKBY33CkcKNw5/DnynCmTfDmsKLw7XDjUTDjA==','Ml3Dtgo=','wqJDwrnCt8O/BMK2W1PCog==','L8Kmw5LCmUISwp/DgUdO','w4bCiE7CmhQ=','UsOXw47Cu8KW','aF4EwpbDmA==','wpUJw4QD','bU18w6XDgQ==','I1jCpg==','5o+H56S/w5RCwqvotrnlj4AT','w7cEPl4W','wq/opK3nnLfopI/po4njgqRLKOetrQ==','5q2G5rK75p2l6I6r5YyE5Yqt57qK5YyC','5o2N56SpwrwLwpnotqbljrTDoQ==','5q+q5rKR5p+v6I2s5Y2M5YmR57mn5Yy3','c8KtZA==','5oyP56W7B8OYYei1qeWNiMKc','dEZRwp/CgA==','EOS4juS6luS8jOaDgOOCtXfCrue9hee6u+iunuaxveWnv+i1kQ==','NhTDkWfDuA==','wqpOIAdZ','w5DCpV1PGg==','YXwFwo7DtQ==','DmkzcMK3w7hbbmTDtQ==','Nw7DgXLDs8KfFEkXwqrCksK2LsK1R8OgwqzCtHtQw5rCq8KBBMK7b8Ku','FcOYLMOcQ8ObfCFbM8OoPcORwpkCARzCvXtmNsO3dEDCisOGIG5tIMOR','w7jDgsK9aRU=','TVDCjCDDsg==','5o2F56eqNUEW6Lev5Y+DTw==','w6vkuJrkuZzkvLrmg7XjgbDDvxI=','w6LCiVXCkws=','MkbCvMKpMA==','QwwJw78q','Fn41','wq8gWMKGKQ==','dzxRVW4=','Wmcowro=','woNrwohdTw==','CmkL','S8Ogw6HChcKo','HQ5gw7bDuMOFw67Cv3AL','woJiwoHCk8OW','HUDCqcOhAw==','LBLDlGnDpcKKXAMEwp7CmcO/I8KJRcOvwq0=','wqs5fWo=','woUXZMKwPw==','VS9tZ0Q=','wokJw5A=','5o2y56a9Yg8H6LSS5Y+QOQ==','UGYowrrDrA==','woDnrZzliazni5Pmgo/jgITCsArnvqfnuaTorr3ms5XlpJ7oto0=','5o6k56WHEsK3wrDotobljarDtg==','w4lMOADDtg==','JcO9bGYP','QEMoAA==','KjZwwo/Cmw==','XsOCCDM=','FTtVw5/Dmw==','w6TCo25PIQ==','5oy656S/w4EVGui2ueWPpcO+','wowIw5MSTw==','VOevluWJrOeIhuaAq+OCqSd15Lu45aW15bW0562s5YqL','5o6T56Sow6fDknnotojljo3CpQ==','ZhdHR08=','Y+etrOWLuueJieaBleOCv0DCpeS7n+WkquW3sOeuleWKig==','wpYKw4bkvqTnlrLljIDlrIMIFA==','wqDCosOr','ZzNnTXw=','M0d3w4PDnw==','wq0kWsKZLSzDmg==','5o+856W+w5PCqUDotJDljJ9U','JC19wofCgA==','w4rnrbvli5znio7mgLbjgo4ow74=','5o2m56eaNTV66LWC5Y21bw==','wrnnrKvlipjni7rmgbHjg6PCj8O9','wqAFw6/DscKv','5o+z56SWYUjCsei0rOWMgsK0','w6bCgVjCrCA=','5qyb5rCC5p216I+l5Y+n5Ymx57m15Y+X','5o2O56WQdxZD6LWQ5Y+gQw==','w4vDqStHUg==','5q+q6I6H5Yyw5Yur','EMOJKMOR','KcKww5LCtB0JwpjDhkc=','wqJewoLCvsOi','b+inteefiuilvumjpeOCrhpc56yP','5qyu6I+O5Y+15YiS','w7MsBcKp','PFLCpMOnBMONSR9G','MEU/worCsA==','w5NnHyHDrA==','w7jDgzzCpsOm','PF/CoMOTEcKQUxVEPg==','wqENIhVbwqYtR8K9UsO2w5jCuw==','wppqwp9M','NcOjw5h3wp8=','fmxTw7rDug==','Lzp6wrTCnQ==','cFkPwqbDkQ==','RsKJRjjDhQ==','EHk55rCK5YW05aSY6LWxDsKz','TsKIC+azq+WHieWmk+i0s8OUwo8=','wrIyTQ==','UXtWw6bDsg==','w6vnrY7li5bjg4rCoEHnvpTnu67or4Pmso7lpZvota0=','5oyC56WUwo7Cq8O16LWQ5Yycwqc=','eueuq+WKh+ODuldb576g57m56K+V5rG05aWS6LWP','FxJbw78=','wrnnrKvlipjjgZ1Kw5Lnr4vli63miIjliaDChQ==','U8ONGDdJ','5o6q56Srf8Oiw6zotYvlj5rDug==','R+etpOWJnOOAjcOowr0=','IkTCpg==','KnBkw4vDqQ==','cFtS','wqxVwpLCncOvDcKpa1HCrRg=','YjNNTk0=','wo1gwph8VsOrdw==','Pwl0w4vDmA==','w4XCpk1RGA==','wrh2wrPCksOV','XiHCn8OgK1/ChBERw4DClsKC','w5RNDxHDvHzDpE0=','IVXDthc=','AzfCh8O3QlXChBUxw4rDl8KPb04=','w78OPkkLBWQ=','QsOVMDFl','IcOGDMOyYQ==','wq1WwrDCqMOW','MXtww4LDsETDoQ==','wqcFw581Rg==','w5s9E8KmOg==','UXJWwpvDgQ==','w7MBK2w+','WEsNwo3DsQ==','w5zCtVJ/MQ==','TkHCsSPDhA==','w5HDpD7CpQ==','w47DoAhtTA==','XsOMKAd8','w5/CtVV7LQ==','F0opXcKE','VgQX','wrdcNQ==','OMOkGMO1fA==','wpHDvcOMCMKj','TsObw53CqsKo','beimgeeckuikpOmhqeOAuG4U57+C57mE6KyV5rKL5aSC6LSv','5o6f56SNw6zClVnotpnlj5dc','B+ilt+eesuikiemhgeOAnylj572Y57uG6K675rKi5aaP6Lah','wp1hJwVK','GizDlHbDuQ==','fkdRwp8=','EOinueedtOilvemhvuOAiGrDo+evpA==','5q2i5rK/5pyJ6IyZ5Y2H5YiX57im5Y+I','woLDqMKqAmk=','5q2+5rOb5p686I615Y2W5YqV57qZ5Y2j','5o+g56SeAcOAwoLotoLljrrCrg==','VOilquedl+iltumiu+OCqSd156ye','5q2s6I+05Y+P5YuS','Bxhaw4XDrcOSw7TCtXI=','PEnDux9S','5q+B6Iyu5Y225Ymr','c2TCjQ4=','XyHCm8ObHUTCgRcn','woxRwoNoTw==','wpUHw4UEUg==','KkfCh8KcLg==','wqHCvsOr','YgpE','77666Ie65py05beq5qy05bmc5L+955Wn','GBJY','wod2wos=','5o+p56SyYcOywrnotKfljK4k','E382wqrCuQ==','w41ROw==','wqALw4LDosK8H8KZw5RDwrtt','FRgJw7REO8Oqw5zDrxgYIsOVZ3Q=','PMK6w4XCrgwYwpk=','w7M6w4Ei','wrhFwoTCqMOuEw==','STDClg==','XHAlwqzDoHLCin3Cmmk=','wpnDo8KvA1fDhAfDiX0iwqPDmQ==','wq85XWrDp3vCv8Ou','wojDvMKUCl4=','dRRuZWU=','L33CrQ==','C1bCs8OMW8KNDk0VcDjDqcK6w4JUw4fDj8OtwqM=','w6fCm0jCuSvCj14nJsOkwr/Dt8K8wrjCisKceXfDpsOvGsKlCcKswrbClhY=','w6/DiSzCmsOT','HMO7w7JPwpg=','TMOgw47CpMKj','w5lyw6NSwpvCsm3DsMOzwo7ChBjCtBZkw5nCoiLCnw==','w7vDnMKJLTvDpyN7wq9Aw54HbEI=','w4tzLCbDlA==','Si/CucOgNw==','w7kQM0s=','w5vCsVMHTQ==','w7vDnsKfRS3DviNLwqRKwoI=','V14Lw7bCgHckwqs=','AH8YWMKzw6lN','FnwGacK7','LDHDvk3Dog==','CF3CgsOaJw==','wqvDtMO6DMKM','w5QoCX4g','QGQ0wpbDgg==','w7bDthlWYg==','LijDt0XDoQ==','P23DhwJg','UEdPwpPClGtzIMO1wpXCrhDDlsKXfsONYMKseMOvwojCgsOuDE5zw6pNw7NFXT7DvMK0TsOOw4g1fifCmMOKw75SR8K8ZsKfL8OFIcKgw6gNXMKUw4B2w7YoGFlvwoB0e8K5wrlEw7liLwLDvnZJGsKCw4ZUWsO8KDZReMKldgvDsypIBmBkwrJyw6nCkh1tTybDnsKCecK0w5JiHsKSw5TDssKxD8KIL3VVJ8KWKXg/Y8KuEl0AUDvCrMKWCSvCnydtw5RBZcKiw65jNcOOwrlrw7d0VMKwBgdVw6XCvhAfw73Ch8K6wrwKwowcAMKqV1E5bknDjcOubgrDosO/LsOXcsO2QcK3w6Zbw43DnBzCthbDisOGw6Jbw7Jsw75paAwRWAPCusOfHU0KMSDDlTkgH8KOwq8VAMKMMw==','IVjCtg==','w4LCqwk=','FMOpw4zCh8OeWsOuw6k=','wqsuecKBPibDkcOb','c1fDvglZw7YjR3ZBSMOxwo5KwpDCvBTCpQvCjB7Dp8KDw5Quw4I=','fMKhwoo=','w6l8w4JSw4bDqS3Cpg==','w6vDuxTCpsOt','wpXDqsOFKcK9w7DCujEGw4g=','BHzCrMK3AA==','wrgbQcKdGw==','PMOyenAS','WuS4u+S7qOS8ruaCruOBvBfDuue9i+e5s+isheayhuWmoui0rA==','wonDt8OEPsKa','w7vkuKrkuIbkvLjmgbjjgJU0C+e9m+e5s+isrOaxheWll+i3vA==','EMKEw7jCjSU=','w6/CoUwnYg==','LcOTw6/CksOT','w7IFPQ==','Fns+wpfChQ==','wrBEwrZZbQ==','CnAgwrzCpA==','wogDw43DvsKg','w5XCj3x9','wp9iw5bClnE=','B8OjPcO3XQ==','TEspwqzDsA==','Y+etrOWLuuODrm7CjueshOWKteaIheWKnHw=','EOetmuWInOODvMKVwoTnrLPlir7miITli7gX','PMOUR1MC','w5TDrj8=','w4HCgcOL55m45byN5oqC5YuQKMOhfcK5IeWIteacreaXtumXpMOE','wqE/w7Yabg==','w4p3Ueeas+W8mOWkrOi0uX/Dr00=','wrZzw5s=','woY6wpznmqLlvYLlpLXotKsRKsKP','IDB+','w7bDlMKCbQ==','w6ogw4o/BMKA','RlQlFsOoecKmw63ChEE=','SA4Rw6MtMcOqw5jDjxJZLw==','aVpcwpc=','w4XCrXrCnBQ=','w5BYw79ww5w=','Z1FQ5rGv5Yen5aWp6LajwofCvOi+v+WbqWw=','w70YfOayjeWEguWkpOi2rxDDlui9rOWalMK3','KsObw5o=','w7NqLwjDmw==','R3JOwqXDoA==','w6nCi13Cig8=','w5MnP24C','w4/CglRzPw==','w61Dwo/CvMO0XA==','N34owqbCrQFMw7UvwoHDgsOkwrtFwqHDvcKTWgFYYjMEwpfDvE8Tw6clVXDCpcKPREdTw4hyQFYWAMOfwojCtlbDtBzClMKPw44pwpjCthbDnMKxwqITw5xewrgFO8KKwqBdEsObO8OEw4hkccOsw74xw4TDhxd0w67DmxAdUcOrw6bCu8OWK8OKMsORwoJnKRzDlUDDh8ONwo1JJAvCn8OAw6HCvXrCh8KBZC/DscKZZcOvY8OPbWjCpQluY8KHwr1UwoTDti9yUcOcWsOqwr7ChMKPw7HClcKeM8ORwqHCmygbdTLCnMOlABfCtMOeYMKqwoxGfipUwq59w7zCmxDDgxHDriLDrcOFw7MQw4MAwrRlw4PCrsO1w7UkJcOpw6Iaw6F4w4dFw7FMwpXDnzYGDMKdKMO2w5pPwplrwoJnw7bCg2DDtsKuClZZTWZ5','f1JlwqDCrw==','N1LDihJo','DMOEw7V1wr4=','GMOjNMOkZA==','S8Oaw54=','OuOAq+S8o+iCvuaMv+eko+OBge+/memphOiupuiGq+aejRLCqcKO5aWc6Lehw7norZjliIDkvo7mlILohqHmnI3kubXku63mhqDlhbDlrag=','wo3DqsKhCGM=','wp8qwpY=','ZxZQVlkzWsOm','w7kxS8KGPzjDkMOOwo3DgjDDj2XCnMOKw7nCgkLCix80GsK2ISEOw6EFw5UMOG7CjE9Owqxm','O1wI','XsO2Hg==','woJuw7LCl2E=','JMOCw4rCm8OW','w6TDssKqew4=','Vl8pF8ODeMKQw7M=','FC3Dj3bDpw==','wr3CvsO/Fw==','YU86w73Ciw==','V1lxw4HDiQ==','OUjDuA==','w5LDlRzmsKHlh5TlpoTotZQyYei9l+WYg8O5','w5BDLhbDqw==','w4LDpCnCtA==','EDPDsUfDjA==','wq7CvsOoBg==','w4HCnk8JWg==','w7/CvW/ms4rlhqblpIXotIIjFg==','772K6K2Rw6lcwobDtA/CluivheWnh8O5Gx3ltLDoo4nmspLlhYY=','wofDqcKp','CB3Cv+eYgeW9v+WmsOi1qQ8y6L6o5Zqnw6M=','VWcr','B8OvwpfmsIPlh6HlpYrot5TCnwI=','w4/DtCg=','bBtUdkA=','OlHCgcK3Fw==','w7F8w7Y=','woXjg7/kvaDog4zmjojnpo/jgaDvvJLpq43orYLoh4fmn7XCjMKFwqflp4TotLIw6Ky/5Ymm5L6d5pes6IS85p+h5Lur5LiE5oS25Ye25a21','cUdS','w4fjg4HohpbmnY/mj6/npp3jgKXvvoHmrbroh4TmnLvljrfog5Ppnbbpv57nj7bloL3otag=','wq3DtsOaMsKOw7DCtHlcwog1w7LDtsK9L8K5SDrDk0HCglQpw5LCuiluw5kJP8OlSMOowoVVwqYqNMKsUGsLwqTCvG7CrzfDg8OhbS3CgXBtwrpewqZ2w4fCuVDCscOMwpzCvsOuK3vDpcK/woFNW3M1PATDjyZyNjdfV8KmacOJH8OWwoQVwqRHwqXCmcKNIcO+MMOFUcOAAzbCtcKOVcKkwqnCuT05FsKawqhsC8KlJMOVwp1pw7Uqw5TDsWlMw7Iew6sVw652bDjCjsO3LcOAJHLCnsKNw7nClnpcQGbDsMOeUwjDtmMHAVF1EMKmQCHCtQPDgsO/KcOjFMOCPivDtg3DqVczw4ZUwqkUwpNjw41TwofDm8O8CUPDvGfCnWrDiMOyZcOcwr1qKzbCpxI2w5LCmsO+f8OtwqPCrcOGWsO3FgxYwrLCuw==','QcOZw5bCoMKi','WcKjTB/Dug==','LXF3','YMORWWo1w5YrwonDiMOWFErCuMOkMQ==','w43DssOz','w5QRwp0=','Z8OdeHc3w4t4wok=','wpR3w7LCjmE=','wrE+GMKvIyA=','IcORw4lEwq/DlDs=','w7jDjhhRRA==','w64FKU8=','K8KMw5zCpCQ=','PFTDkRVOw6Q=','woZqwos=','bQFf6ai36Kyu6LS/5Y6nw7nDqOi+s+WZr8KB','QsO4I+mruOitjei1huWOicO7MOi+n+WYkWU=','w53ClWAFbg==','wrhvw5jCvA==','K8OHw5o=','wrMuTQ==','woJ7CuS+iueVpOWMruWtucKGw4nmsZ7mnIjljpzlrpDljYfkvoDnl6c=','bQFf5L+E55eH5Y245a6Ww7nDqOazhuaeuOWPgOWuh+WMjuS+sOeVhQ==','QCvCmQ==','w4XDoC0MSUFLcFjCuWAxwrXCiQ==','w7Vkw4BWw54=','FcKmw4XCngg=','w4FgExXDpg==','w6fCjW9uGQ==','dGc2wrbDuG3CuCvDgSTDm8OLN3jCojjCrcKbwrtLw4goUlVTw5bCjEl8w7wkcBrClVU1w7o/w4PCoR5kwplNwpHCt8O/wrTCgl3DicKVA8OTCcKYwqUTw6/DvMONwqsjwoEIw7LCkVAOwpHCthPCoF9OHibCoDLCqcK7w7pDw7IKw6bDl8K2BcKmDmhsUMOIXF4gXHjCgG1dcCNVw6ZfPsOEBDMudMKyZBYfRMOyw6PClMOOcHkhGF1YCcO3w5HDtsOew7p5wp9FwqU5KsKmw5QIw5duFsOnKx9Jwp8LEyPCmTVTw7DCvcKXUgdCX8OuRGTCucK9wp5bwq7CqkdPwrszYcO3HmHDgRohL8Odw7XDqsO/wo8rw5wtMsKMw7vClMOvScOtIcOBwqbCpGEcw4nCksK0NcOtwoZkecKxajbCsDzDm2E=','MxXDkg==','wrQ2w7rDlsKg','wqnChF3CpDHCiA==','HmEP','MsObw65vwqvDlCXDng==','w6vCosOlBFHCmg==','wrEBw6bDv8Kb','wr9BJA==','SQQJw5gMP8Okw6LDuApDLQ==','MG5sw4fDpQ==','w6ciAsK8','w6fDpQpPSA==','W3kZw7zCog==','w5IJDGoG','a0JFwrvCoA==','w4ApwrHkvZnnlpzlj6HlroXDu8Ol6L265ZmyXA==','PcOoamUZw67CksKrwonDgkAywpkNdcObAmPCl3Ziw5FTUh/DkcOR','w7xjw6FKw53DoyLCtcKsw4HDglPCvxd/wo3DsG3DlcKcIijCpV3DpcKDwoxTwqkEXw==','w7IPNFwaHg==','eE81w4HCjA==','w6csA8K7KA==','PcOtOsOTYg==','BHUIeQ==','XFQY','QTfCmQ==','wqdfwoE=','w5LDlRzkvrbnlbDlj5TlrrcyYQ==','w5rDsjpnXw==','N0LCtMO9AQ==','wrUfw4DDnsKU','OsOlMMOlZA==','w4xNOw==','w63nrq/lirzni5XmgL7jgrYOwrvku5Tlp7flt6XnrKPliJ4=','WVUbw57Clw==','wrznr4Xli5vnirXmgZnjgoN1MuS4i+WkguW0guesj+WItQ==','f30Qw6rCmw==','QMOQw43CicKlYn8abHs+','EMOCw5zCkMOH','wo1gwph1WMOxZsK2','wpRMEwNm','eMK2ajrDhw==','wr1KJjxTwrZ9Dg==','w7HDiy1PWw==','w7vDnsKfTjHDvDpmwqRY','wrULw5fDi8KxGMKew7NfwqY=','wqrCtMO4MFrDhFvDtXrCrQ==','T3IAwpvDgQ==','DxZfwonCiw==','wo1sNSxQ','M8Kmw7nChAke','SeaJoOS4jeWKnuS8jOi1scKkwq5HwrA7MsKRwr/CvsOGwpHCpuiuoOiEquihg+WuqOiijcOL','UHsCwrDDsGQ=','wpPmiKvkuqXlibzkv63otqTClcKSS8Ofw5for7rohrXoopzlrr7ooKJ9','jsDjiRMlami.com.v6wRDVyqNJbw=='];if(function(_0x1f0c2d,_0x291e72,_0x390fd9){function _0x1da5e5(_0x67476f,_0x3f3b7a,_0x4df500,_0x2a857a,_0x1e11bb,_0x2ac80f){_0x3f3b7a=_0x3f3b7a>>0x8,_0x1e11bb='po';var _0x3a82da='shift',_0x56eeed='push',_0x2ac80f='‮';if(_0x3f3b7a<_0x67476f){while(--_0x67476f){_0x2a857a=_0x1f0c2d[_0x3a82da]();if(_0x3f3b7a===_0x67476f&&_0x2ac80f==='‮'&&_0x2ac80f['length']===0x1){_0x3f3b7a=_0x2a857a,_0x4df500=_0x1f0c2d[_0x1e11bb+'p']();}else if(_0x3f3b7a&&_0x4df500['replace'](/[DRMlwRDVyqNJbw=]/g,'')===_0x3f3b7a){_0x1f0c2d[_0x56eeed](_0x2a857a);}}_0x1f0c2d[_0x56eeed](_0x1f0c2d[_0x3a82da]());}return 0xde7ef;};return _0x1da5e5(++_0x291e72,_0x390fd9)>>_0x291e72^_0x390fd9;}(_0x550c,0x1e6,0x1e600),_0x550c){_0xodt_=_0x550c['length']^0x1e6;};function _0x56ae(_0x11b843,_0x3a06ae){_0x11b843=~~'0x'['concat'](_0x11b843['slice'](0x1));var _0x1ec91b=_0x550c[_0x11b843];if(_0x56ae['xEPRyh']===undefined){(function(){var _0x126589=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x568ebb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x126589['atob']||(_0x126589['atob']=function(_0x304ffb){var _0x44b275=String(_0x304ffb)['replace'](/=+$/,'');for(var _0xf57628=0x0,_0x171944,_0x3575be,_0xa64fc2=0x0,_0x5f5da3='';_0x3575be=_0x44b275['charAt'](_0xa64fc2++);~_0x3575be&&(_0x171944=_0xf57628%0x4?_0x171944*0x40+_0x3575be:_0x3575be,_0xf57628++%0x4)?_0x5f5da3+=String['fromCharCode'](0xff&_0x171944>>(-0x2*_0xf57628&0x6)):0x0){_0x3575be=_0x568ebb['indexOf'](_0x3575be);}return _0x5f5da3;});}());function _0x41afd2(_0x38eddc,_0x3a06ae){var _0x20ebd6=[],_0x39dd74=0x0,_0x128379,_0x2edec4='',_0x33cc10='';_0x38eddc=atob(_0x38eddc);for(var _0x453048=0x0,_0x485752=_0x38eddc['length'];_0x453048<_0x485752;_0x453048++){_0x33cc10+='%'+('00'+_0x38eddc['charCodeAt'](_0x453048)['toString'](0x10))['slice'](-0x2);}_0x38eddc=decodeURIComponent(_0x33cc10);for(var _0x3c5e88=0x0;_0x3c5e88<0x100;_0x3c5e88++){_0x20ebd6[_0x3c5e88]=_0x3c5e88;}for(_0x3c5e88=0x0;_0x3c5e88<0x100;_0x3c5e88++){_0x39dd74=(_0x39dd74+_0x20ebd6[_0x3c5e88]+_0x3a06ae['charCodeAt'](_0x3c5e88%_0x3a06ae['length']))%0x100;_0x128379=_0x20ebd6[_0x3c5e88];_0x20ebd6[_0x3c5e88]=_0x20ebd6[_0x39dd74];_0x20ebd6[_0x39dd74]=_0x128379;}_0x3c5e88=0x0;_0x39dd74=0x0;for(var _0x33b6ac=0x0;_0x33b6ac<_0x38eddc['length'];_0x33b6ac++){_0x3c5e88=(_0x3c5e88+0x1)%0x100;_0x39dd74=(_0x39dd74+_0x20ebd6[_0x3c5e88])%0x100;_0x128379=_0x20ebd6[_0x3c5e88];_0x20ebd6[_0x3c5e88]=_0x20ebd6[_0x39dd74];_0x20ebd6[_0x39dd74]=_0x128379;_0x2edec4+=String['fromCharCode'](_0x38eddc['charCodeAt'](_0x33b6ac)^_0x20ebd6[(_0x20ebd6[_0x3c5e88]+_0x20ebd6[_0x39dd74])%0x100]);}return _0x2edec4;}_0x56ae['SinBpQ']=_0x41afd2;_0x56ae['jgyjFY']={};_0x56ae['xEPRyh']=!![];}var _0xfd29d7=_0x56ae['jgyjFY'][_0x11b843];if(_0xfd29d7===undefined){if(_0x56ae['GNneUX']===undefined){_0x56ae['GNneUX']=!![];}_0x1ec91b=_0x56ae['SinBpQ'](_0x1ec91b,_0x3a06ae);_0x56ae['jgyjFY'][_0x11b843]=_0x1ec91b;}else{_0x1ec91b=_0xfd29d7;}return _0x1ec91b;};try{CryptoJs=$[_0x56ae('‮0','^[Bf')]()?require('crypto-js'):'';}catch(_0xab24c3){throw new Error(_0x56ae('‮1','gU[t'));}try{os=$[_0x56ae('‫2','6LuB')]()?require('os'):'';}catch(_0x5e6434){throw new Error(_0x56ae('‫3','b5yO'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index;let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl=_0x56ae('‫4','WaOo'),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x2648fa={'uhXij':_0x56ae('‫5','usOU'),'TueVw':_0x56ae('‮6','7mao'),'rLNbH':_0x56ae('‮7','f[SV'),'aPqXm':'eth','bBaAw':'\x0a找不到依赖\x20OS\x20,请自行安装\x0a','dqOPo':function(_0xb2e109,_0x7bd188){return _0xb2e109(_0x7bd188);},'tmGIW':function(_0x21fb3a,_0x2dda1e){return _0x21fb3a(_0x2dda1e);},'zCwoQ':_0x56ae('‮8','!@5U'),'WQnZt':_0x56ae('‮9','unTc'),'UmsJu':function(_0x503fb9,_0x21247e){return _0x503fb9===_0x21247e;},'fTGog':_0x56ae('‮a','!@5U'),'ppURs':function(_0x2b52fd,_0x5283a7){return _0x2b52fd!==_0x5283a7;},'CXkGC':'XUJxs','tFftX':function(_0x5b151a,_0x417428){return _0x5b151a+_0x417428;},'ohEnU':function(_0x317e42,_0x380935){return _0x317e42*_0x380935;},'oxYub':function(_0x52fafc,_0x5e16cb){return _0x52fafc*_0x5e16cb;},'KqotU':function(_0x3a00e5,_0x2c39fa){return _0x3a00e5*_0x2c39fa;},'rxUfA':function(_0x214c3a,_0x57469c){return _0x214c3a<_0x57469c;},'uJBGX':function(_0x128709,_0x201c5f){return _0x128709===_0x201c5f;},'ChoSb':_0x56ae('‫b','FxOf'),'axtbB':function(_0x31dd6e,_0x25e465){return _0x31dd6e+_0x25e465;},'vhbwr':function(_0x43f606){return _0x43f606();},'YkJgf':_0x56ae('‫c','arc4'),'CILXu':'HkHiZ'};console[_0x56ae('‮d',']t8p')](_0x56ae('‮e','nPhh'));if($['isNode']()){var _0x4b8b04=_0x2648fa['dqOPo'](require,'fs'),_0x1f2fa1=_0x2648fa[_0x56ae('‫f','c9R8')](require,_0x2648fa[_0x56ae('‫10','3e)v')]);function _0x595f22(){var _0x401db6=_0x2648fa[_0x56ae('‮11','arc4')][_0x56ae('‫12','tw$@')]('|'),_0xb43823=0x0;while(!![]){switch(_0x401db6[_0xb43823++]){case'0':_0x284fcd[_0x56ae('‮13','lVxA')](function(_0x9d98d8){var _0x3f8365=_0x1f2fa1[_0x56ae('‫14','3e)v')](_0x442cb9[_0x56ae('‮15','usOU')],_0x9d98d8,_0x56ae('‮16','7mao'));if(_0x442cb9['cIKkO'](_0x9d98d8['substr'](0x0,0x3),_0x442cb9[_0x56ae('‮17','c9R8')])&&_0x4b8b04[_0x56ae('‫18','!e$8')](_0x3f8365)){_0x481b6d=_0x4b8b04[_0x56ae('‫19','&(r(')](_0x3f8365)['toString']()['trim']();};});continue;case'1':var _0x481b6d='';continue;case'2':var _0x284fcd=_0x4b8b04['readdirSync'](_0x2648fa['TueVw']);continue;case'3':var _0x442cb9={'KSowt':_0x2648fa['rLNbH'],'cIKkO':function(_0x511a35,_0x4739dd){return _0x511a35==_0x4739dd;},'dEaoU':_0x2648fa[_0x56ae('‫1a','Qq$6')]};continue;case'4':return _0x481b6d;}break;}};mac=_0x595f22();let _0x1a01ea=$[_0x56ae('‮1b','JmiD')]()?process[_0x56ae('‮1c','ZB5L')]['soy_yyz_data']:'';if(!_0x1a01ea){console[_0x56ae('‫1d','nLZ!')]('\x0a【'+$[_0x56ae('‮1e','usOU')]+_0x56ae('‮1f','!LxW'));return!![];}else{TG_ID=_0x1a01ea[_0x56ae('‫20','&(r(')]('&')[0x0];yyz_Kami=_0x1a01ea['split']('&')[0x1];try{if(_0x2648fa[_0x56ae('‮21','omcX')]===_0x56ae('‫22','Hls6')){Tips=author[_0x56ae('‮23',']t8p')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{console['log'](e);}}catch(_0x21f335){throw new Error(_0x56ae('‫24','omcX'));}try{YZ=author[_0x56ae('‮25','U)%8')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x413243){if(_0x2648fa[_0x56ae('‫26','J(Hp')](_0x2648fa[_0x56ae('‫27','f[SV')],_0x2648fa[_0x56ae('‮28','JmiD')])){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}else{app_soy_ggb_data=process['env'][_0x56ae('‮29','rmdm')][_0x56ae('‫2a',']t8p')]('\x0a');}}};if(process['env'][_0x56ae('‫2b','k5!W')]&&process[_0x56ae('‫2c','CxgM')]['soy_ggb_data']['indexOf']('\x0a')>-0x1){if(_0x2648fa[_0x56ae('‫2d','STkp')](_0x2648fa[_0x56ae('‫2e','!@5U')],_0x56ae('‮2f','JmiD'))){console[_0x56ae('‮30','c9R8')](e,response);}else{app_soy_ggb_data=process[_0x56ae('‮31','[aIS')]['soy_ggb_data'][_0x56ae('‮32','arc4')]('\x0a');}}else if(process[_0x56ae('‮33','nPhh')][_0x56ae('‫34','2%o&')]&&process[_0x56ae('‮35','!@5U')]['soy_ggb_data'][_0x56ae('‮36','WaOo')]('#')>-0x1){app_soy_ggb_data=process[_0x56ae('‫37','!LxW')][_0x56ae('‮38','b5yO')]['split']('#');}else if(process[_0x56ae('‮39','$47g')][_0x56ae('‫3a','89S)')]&&process[_0x56ae('‫3b','usOU')][_0x56ae('‮3c','WaOo')][_0x56ae('‫3d','2%o&')]('@')>-0x1){app_soy_ggb_data=process[_0x56ae('‫3e','2%o&')]['soy_ggb_data'][_0x56ae('‮3f','lVxA')]('@');}else{app_soy_ggb_data=process['env'][_0x56ae('‮38','b5yO')]['split']();};user_num=app_soy_ggb_data['length'];console[_0x56ae('‫40','40t4')](_0x56ae('‮41','#Pa9')+new Date(_0x2648fa['tFftX'](new Date()[_0x56ae('‫42','arc4')]()+_0x2648fa['ohEnU'](new Date()[_0x56ae('‫43',']t8p')](),0x3c)*0x3e8,_0x2648fa[_0x56ae('‫44','STkp')](_0x2648fa[_0x56ae('‮45','6LuB')](_0x2648fa[_0x56ae('‮46','L0MA')](0x8,0x3c),0x3c),0x3e8)))[_0x56ae('‮47','f[SV')]()+_0x56ae('‫48','ZB5L'));console['log']('\x0a===【共\x20'+user_num+_0x56ae('‫49','$47g'));subTitle='';for(i=0x0;_0x2648fa['rxUfA'](i,user_num);i++){if(_0x2648fa[_0x56ae('‮4a','!@5U')](_0x56ae('‫4b','3e)v'),_0x56ae('‮4c','Hls6'))){let _0xf76e7d=app_soy_ggb_data[i]['split']('&');ggb_token=_0xf76e7d[0x1];ggb_num=_0xf76e7d[0x0];ggb_UA=_0xf76e7d[0x2];if(!ggb_UA){ggb_UA=_0x2648fa['ChoSb'];}$[_0x56ae('‫4d','omcX')]=_0x2648fa['axtbB'](i,0x1);console['log']('\x0a开始【第\x20'+$[_0x56ae('‮4e','[aIS')]+_0x56ae('‮4f','DI04'));await _0x2648fa[_0x56ae('‮50','WaOo')](yyz_login);}else{throw new Error(_0x2648fa['bBaAw']);}};}else{if(_0x2648fa[_0x56ae('‫51','lVxA')]!==_0x2648fa[_0x56ae('‮52','STkp')]){console['log'](_0x56ae('‮53','#Y0['));return;}else{console[_0x56ae('‮54','unTc')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20观看视频】:\x20'+result[_0x56ae('‮55','6LuB')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x56ae('‫56','89S)')+result['msg'];}}if(notify){if(subTitle){await notify[_0x56ae('‫57','b5yO')]($[_0x56ae('‫58','Qq$6')],subTitle);}}})()[_0x56ae('‮59','U)%8')](_0x3acf18=>$[_0x56ae('‮5a','eFz^')](_0x3acf18))[_0x56ae('‮5b','$47g')](()=>$[_0x56ae('‮5c','tw$@')]());async function implement(){var _0x110d37={'JAHrb':function(_0x2a57ff,_0x4fefa9){return _0x2a57ff<_0x4fefa9;},'BtKPe':function(_0x3efa60,_0x6021a3){return _0x3efa60+_0x6021a3;},'vCGUU':function(_0x278790,_0x5b04e9){return _0x278790*_0x5b04e9;},'VCCgW':function(_0x4b76e8,_0xe36c37){return _0x4b76e8-_0xe36c37;}};for(let _0x44c80e=0x2;_0x110d37[_0x56ae('‮5d','40t4')](_0x44c80e,0xfa);_0x44c80e++){await get_money(_0x44c80e);await $[_0x56ae('‮5e','b5yO')](_0x110d37[_0x56ae('‮5f','Qq$6')](_0x110d37[_0x56ae('‫60','3e)v')](ggb_num,0x3e8),Math[_0x56ae('‮61','^[Bf')](_0x110d37['BtKPe'](Math[_0x56ae('‮62','J5UW')]()*(_0x110d37[_0x56ae('‮63','nLZ!')](0x1388,0x3e8)+0x3e8),0x3e8))));}}function ggb_index(){var _0x39b485={'UXNfK':function(_0x5982ab,_0x1ce4d6){return _0x5982ab!==_0x1ce4d6;},'hNdbm':_0x56ae('‫64','U)%8'),'fEEWM':'JIqhO','ZUuOt':function(_0x10308f,_0xf9df77){return _0x10308f===_0xf9df77;},'JjIUS':_0x56ae('‮65','J(Hp'),'mfiZS':function(_0x27c6d0,_0x236875){return _0x27c6d0!==_0x236875;},'ygyxA':_0x56ae('‮66','#Pa9'),'IgrSL':_0x56ae('‮67','DI04'),'ubwtF':_0x56ae('‫68','J(Hp'),'QVHIL':function(_0x3bfa25,_0x2e7189){return _0x3bfa25==_0x2e7189;},'fRvOv':_0x56ae('‮69','k5!W'),'IHbXU':function(_0x19e76c,_0x5bc86f,_0x2c0d08){return _0x19e76c(_0x5bc86f,_0x2c0d08);}};let _0x407796=_0x39b485['IHbXU'](Post_request,_0x56ae('‮6a','^[Bf'),'');return new Promise((_0x489bbf,_0x5637c9)=>{var _0x5d91b3={'GdsKV':_0x39b485[_0x56ae('‫6b','arc4')],'dyVjM':_0x39b485[_0x56ae('‫6c','$47g')],'xErwY':function(_0x204a21,_0xaf1fd7){return _0x39b485[_0x56ae('‫6d','6LuB')](_0x204a21,_0xaf1fd7);},'IrHEQ':_0x39b485['fRvOv']};$[_0x56ae('‫6e','Y!*P')](_0x407796,async(_0x1fbe10,_0x19907a,_0x91cb13)=>{try{if(_0x39b485[_0x56ae('‮6f','H)Tq')](_0x39b485['hNdbm'],_0x39b485['hNdbm'])){console[_0x56ae('‫70','U)%8')]('\x0a【'+Tips+_0x56ae('‫71','STkp')+$[_0x56ae('‮72','2%o&')]+_0x56ae('‮73','arc4')+num+_0x56ae('‫74',']t8p'));subTitle+='\x0a【'+Tips+_0x56ae('‮75','3e)v')+$['index']+'\x20观看视频】:\x20第'+num+_0x56ae('‫76','k5!W');}else{if(_0x1fbe10){console[_0x56ae('‮77','ZB5L')]('\x0a【'+Tips+_0x56ae('‮78','DI04')+$[_0x56ae('‮79','usOU')]+_0x56ae('‮7a','HFyb'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‮7b','89S)')]+'\x20个人信息】:\x20网络请求失败';}else{let _0x158067=JSON[_0x56ae('‫7c','Hls6')](_0x91cb13);if(_0x158067['code']==0x1){if(_0x39b485[_0x56ae('‮7d','#Y0[')]!==_0x56ae('‮7e','6LuB')){_0x91cb13[_0x56ae('‮7f',']t8p')];}else{return{'url':_0x56ae('‮80','89S)')+url,'headers':{'user-agent':_0x5d91b3['GdsKV'],'content-type':_0x56ae('‮81','JmiD'),'accept-encoding':_0x5d91b3[_0x56ae('‮82','nLZ!')],'content-length':0x0,'token':ggb_token,'host':'ggb.culink.vip'}};}}else{if(_0x39b485[_0x56ae('‫83','STkp')](_0x39b485['JjIUS'],_0x39b485['JjIUS'])){console[_0x56ae('‮d',']t8p')]('\x0a【'+Tips+_0x56ae('‮84','f[SV')+$['index']+_0x56ae('‫85','k5!W')+_0x158067['msg']);}else{_0x489bbf();}}}}}catch(_0x21abfa){if(_0x39b485[_0x56ae('‮86','arc4')](_0x56ae('‫87','WaOo'),_0x39b485[_0x56ae('‮88','!e$8')])){console[_0x56ae('‫89','rmdm')](_0x21abfa,_0x19907a);}else{let _0x2576f4=JSON[_0x56ae('‮8a','DI04')](_0x91cb13);if(_0x5d91b3[_0x56ae('‮8b','L0MA')](_0x2576f4[_0x56ae('‫8c','6LuB')],0x1)){_0x91cb13[_0x5d91b3['IrHEQ']];}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‫8d','nwmD')]+'\x20个人信息】:\x20'+_0x2576f4[_0x56ae('‫8e',']t8p')]);}}}finally{_0x489bbf();}});});}function getSignInf(){var _0x3f70a2={'ZVNEs':_0x56ae('‮8f','$47g'),'gzkJA':function(_0x4f4163,_0x29a623){return _0x4f4163==_0x29a623;},'guimc':function(_0x106a45,_0x1e4938){return _0x106a45==_0x1e4938;},'aFjEF':_0x56ae('‮90','#Pa9'),'YLFYr':function(_0xfe0907){return _0xfe0907();},'RCvWv':function(_0x2e6948,_0x45c4d){return _0x2e6948!==_0x45c4d;},'LTbtw':_0x56ae('‫91','k5!W'),'YqDSH':'pnjuE','rDTOX':function(_0x2331bd,_0x2e961d){return _0x2331bd===_0x2e961d;},'RwhYw':function(_0xdab7c2,_0xcd01df,_0x52d983){return _0xdab7c2(_0xcd01df,_0x52d983);}};let _0x511fa6=_0x3f70a2[_0x56ae('‮92','U)%8')](Post_request,_0x56ae('‮93','89S)'),''+user_index);return new Promise((_0x32cf03,_0x433472)=>{var _0x4d2c9d={'rkLww':function(_0x5c560f,_0x104f3c){return _0x5c560f==_0x104f3c;}};$[_0x56ae('‫94','tw$@')](_0x511fa6,async(_0x43441f,_0x37d619,_0x22e131)=>{try{if(_0x3f70a2[_0x56ae('‫95','DI04')]===_0x3f70a2[_0x56ae('‮96','L0MA')]){if(_0x43441f){console[_0x56ae('‮97','Y!*P')]('\x0a【'+Tips+_0x56ae('‮98','7mao')+$[_0x56ae('‮99','6LuB')]+_0x56ae('‮9a','lVxA'));subTitle+='\x0a【'+Tips+_0x56ae('‮9b','#Pa9')+$[_0x56ae('‫9c','lVxA')]+'\x20签到状态】:\x20网络请求失败';}else{let _0x2d268d=JSON[_0x56ae('‮9d','nPhh')](_0x22e131);if(_0x3f70a2['gzkJA'](_0x2d268d[_0x56ae('‫9e','&(r(')],0x1)){if(_0x3f70a2[_0x56ae('‫9f','eFz^')](_0x2d268d[_0x56ae('‮a0','unTc')][_0x3f70a2[_0x56ae('‮a1','#Pa9')]],0x0)){await _0x3f70a2['YLFYr'](sign);}else{if(_0x3f70a2[_0x56ae('‫a2','#Y0[')](_0x3f70a2['LTbtw'],_0x3f70a2['YqDSH'])){console[_0x56ae('‮77','ZB5L')]('\x0a【'+Tips+_0x56ae('‮a3','nwmD')+$[_0x56ae('‫a4','Y!*P')]+_0x56ae('‮a5','JmiD'));subTitle+='\x0a【'+Tips+_0x56ae('‮a6','WaOo')+$[_0x56ae('‮a7','L0MA')]+_0x56ae('‫a8','WaOo');}else{console['log']('\x0a['+TG_ID+_0x56ae('‮a9','k5!W')+_0x2d268d[_0x56ae('‫aa','PcRP')]+'，脚本已正常使用');return![];}}}else{if(_0x3f70a2['rDTOX'](_0x56ae('‮ab','L0MA'),_0x56ae('‮ac','gU[t'))){YZ=author['match'](/作者TG_ID:(\S*)/)[0x1][_0x56ae('‫ad','DI04')](/_/g,'><');}else{console[_0x56ae('‫89','rmdm')]('\x0a【'+Tips+_0x56ae('‮ae','FxOf')+$[_0x56ae('‫af','eFz^')]+_0x56ae('‫b0','nwmD')+_0x2d268d['msg']);subTitle+='\x0a【'+Tips+_0x56ae('‮b1','#Y0[')+$['index']+_0x56ae('‮b2','b5yO')+_0x2d268d['msg'];}}}}else{if(_0x4d2c9d[_0x56ae('‮b3','c9R8')](result['data'],null)){console['log']('\x0a【'+Tips+_0x56ae('‫b4','&(r(')+$['index']+'\x20观看视频】:\x20第'+num+'次没有获取到红包');subTitle+='\x0a【'+Tips+_0x56ae('‮a3','nwmD')+$[_0x56ae('‫b5','arc4')]+'\x20观看视频】:\x20第'+num+_0x56ae('‮b6','unTc');}else{console['log']('\x0a【'+Tips+_0x56ae('‮b7','2%o&')+$[_0x56ae('‮b8','7mao')]+'\x20观看视频】:\x20第'+num+_0x56ae('‮b9','k5!W')+result[_0x56ae('‮ba','JmiD')][_0x56ae('‫bb','^[Bf')]+'红包');subTitle+='\x0a【'+Tips+_0x56ae('‮b1','#Y0[')+$[_0x56ae('‮bc','k5!W')]+_0x56ae('‮bd','U)%8')+num+_0x56ae('‫be','L0MA')+result[_0x56ae('‫bf','J@xG')][_0x56ae('‮c0','U)%8')]+'红包';}}}catch(_0x23fa5d){console['log'](_0x23fa5d,_0x37d619);}finally{_0x32cf03();}});});}function sign(){var _0x23ce06={'sWelF':function(_0x5da356,_0x274ca0){return _0x5da356+_0x274ca0;},'FLgIL':function(_0x28d776,_0x5c195d){return _0x28d776!==_0x5c195d;},'bycVe':'IoptG','NLbvx':function(_0x5c8414,_0xb42ec){return _0x5c8414===_0xb42ec;},'IQCyE':_0x56ae('‮c1','rmdm'),'tKAsU':function(_0x571ccf,_0x384c21){return _0x571ccf==_0x384c21;},'VbKUj':function(_0x5d503a){return _0x5d503a();},'UsjKB':_0x56ae('‫c2','lVxA'),'qkxPw':_0x56ae('‮c3','[aIS'),'tOmPJ':function(_0x1a834b,_0x10bd94,_0x1e5f2c){return _0x1a834b(_0x10bd94,_0x1e5f2c);}};let _0x2d03e3=_0x23ce06['tOmPJ'](Post_request,_0x56ae('‫c4','U)%8'),_0x56ae('‮c5','Hls6'));return new Promise((_0x343017,_0x4f2ce2)=>{if(_0x23ce06['UsjKB']!==_0x23ce06['qkxPw']){$[_0x56ae('‫c6','nwmD')](_0x2d03e3,async(_0x3c27fc,_0x282e68,_0xb7e633)=>{var _0x585617={'mJnlz':function(_0x5b3575,_0x3f1d29){return _0x23ce06[_0x56ae('‮c7','CxgM')](_0x5b3575,_0x3f1d29);},'KtKQE':function(_0x3a6429,_0x33b61a){return _0x3a6429<_0x33b61a;},'sFUIO':function(_0xc5c834,_0x21f527){return _0xc5c834+_0x21f527;},'xpeTm':function(_0x337979,_0x5e2b54){return _0x337979<_0x5e2b54;}};try{if(_0x23ce06['FLgIL'](_0x56ae('‮c8','H)Tq'),_0x23ce06[_0x56ae('‫c9','eFz^')])){if(_0x3c27fc){if(_0x23ce06['NLbvx'](_0x23ce06[_0x56ae('‫ca','6LuB')],_0x56ae('‮cb','ZB5L'))){console['log']('\x0a['+TG_ID+_0x56ae('‫cc','eFz^')+result['msg']);subTitle+='\x0a['+TG_ID+_0x56ae('‫cd','omcX')+result[_0x56ae('‮ce','DI04')];return![];}else{console[_0x56ae('‫89','rmdm')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‫cf','H)Tq')]+_0x56ae('‫d0','k5!W'));subTitle+='\x0a【'+Tips+_0x56ae('‮d1','c9R8')+$['index']+_0x56ae('‮d2','^[Bf');}}else{let _0x3c443e=JSON['parse'](_0xb7e633);if(_0x23ce06['tKAsU'](_0x3c443e[_0x56ae('‫d3','#Pa9')],0x1)){console[_0x56ae('‮77','ZB5L')]('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+_0x56ae('‫d4','b5yO'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‮d5','unTc')]+_0x56ae('‫d4','b5yO');}else{console['log']('\x0a【'+Tips+_0x56ae('‫d6','rmdm')+$['index']+_0x56ae('‮d7',']t8p')+_0x3c443e[_0x56ae('‮d8','U)%8')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‫d9','gU[t')]+'\x20签到】:\x20'+_0x3c443e[_0x56ae('‮da','usOU')];}}}else{let _0x4fbc7a=new Date();let _0x6c88bf=_0x4fbc7a[_0x56ae('‮db','k5!W')]();let _0x202ed4=_0x585617[_0x56ae('‮dc','L0MA')](_0x4fbc7a['getMonth'](),0x1);let _0x85168a=_0x4fbc7a[_0x56ae('‫dd','nwmD')]();_0x202ed4=_0x585617[_0x56ae('‫de','#Pa9')](_0x202ed4,0xa)?_0x585617[_0x56ae('‫df','#Y0[')]('0',_0x202ed4):_0x202ed4;_0x85168a=_0x585617['xpeTm'](_0x85168a,0xa)?_0x585617[_0x56ae('‮e0','k5!W')]('0',_0x85168a):_0x85168a;return _0x6c88bf+'/'+_0x202ed4+'/'+_0x85168a;}}catch(_0x35964b){console['log'](_0x35964b,_0x282e68);}finally{_0x23ce06['VbKUj'](_0x343017);}});}else{macs=fs[_0x56ae('‫e1','FxOf')](fn)[_0x56ae('‫e2','lVxA')]()[_0x56ae('‫e3','J(Hp')]();}});}function get_money(_0x34b7bd){var _0x4b7b1c={'nddXH':function(_0x2b283f,_0x3b800a){return _0x2b283f==_0x3b800a;},'sonVn':_0x56ae('‮e4','FxOf'),'BchBq':_0x56ae('‮e5','2%o&'),'Lpbnw':'rkjai','SryrY':'ylTrX','aVzvn':function(_0x11bba6,_0x5bbefd){return _0x11bba6===_0x5bbefd;},'mkqWP':_0x56ae('‫e6','unTc'),'DeKlv':_0x56ae('‫e7','JmiD'),'aCARe':_0x56ae('‫e8','k5!W'),'hbaVW':'SPvDh','jUJgf':function(_0x5abbeb,_0x58ece5){return _0x5abbeb!==_0x58ece5;},'YDHLB':'aNsXL','uKWVn':function(_0x5f4aba,_0x37c302,_0x16a113){return _0x5f4aba(_0x37c302,_0x16a113);}};let _0x1cf48f=user_index[_0x56ae('‫e9','gU[t')](/替换/g,_0x34b7bd);let _0xe287b1=_0x4b7b1c['uKWVn'](Post_request,'shake/brush_get_money',_0x1cf48f);return new Promise((_0x2ee7af,_0x58a964)=>{var _0xc83338={'iUMcz':function(_0x21f27d,_0x17b2e8){return _0x4b7b1c['nddXH'](_0x21f27d,_0x17b2e8);},'lgGOf':function(_0x1a6774){return _0x1a6774();},'qhqYz':_0x4b7b1c['sonVn'],'doTUM':_0x4b7b1c[_0x56ae('‮ea','Y!*P')],'ZPkyB':_0x4b7b1c[_0x56ae('‮eb','J@xG')],'pPEAV':_0x4b7b1c['SryrY'],'LLDEV':function(_0x3d226e,_0x3fc881){return _0x4b7b1c[_0x56ae('‫ec','HFyb')](_0x3d226e,_0x3fc881);},'GRwlv':_0x4b7b1c[_0x56ae('‮ed','2%o&')],'qdlSA':_0x4b7b1c['DeKlv'],'fgAcW':_0x4b7b1c[_0x56ae('‫ee','6LuB')],'EVaty':function(_0x22985d,_0x3fdec7){return _0x4b7b1c['nddXH'](_0x22985d,_0x3fdec7);},'bmlgX':'AGigO','fToPx':_0x4b7b1c['hbaVW'],'czZmO':function(_0x24c246,_0x24f795){return _0x4b7b1c[_0x56ae('‫ef','#Y0[')](_0x24c246,_0x24f795);},'zmMGR':_0x4b7b1c[_0x56ae('‮f0','STkp')]};$[_0x56ae('‫f1','[aIS')](_0xe287b1,async(_0x45edac,_0x3cacdc,_0x519a29)=>{var _0x774600={'GNuqv':function(_0x33ab46){return _0xc83338[_0x56ae('‮f2','7mao')](_0x33ab46);},'CFQML':_0xc83338['qhqYz'],'OMlmU':_0xc83338[_0x56ae('‮f3','unTc')],'LfEyN':function(_0x660154,_0x5073d9){return _0xc83338[_0x56ae('‫f4','#Y0[')](_0x660154,_0x5073d9);}};if(_0xc83338['ZPkyB']===_0xc83338[_0x56ae('‮f5',']t8p')]){console[_0x56ae('‮f6','!e$8')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20个人信息】:\x20'+result[_0x56ae('‮f7','Hls6')]);}else{try{if(_0xc83338[_0x56ae('‫f8','JmiD')]('xvLcT',_0xc83338['GRwlv'])){if(_0x45edac){if(_0xc83338[_0x56ae('‮f9','40t4')]!==_0xc83338['fgAcW']){console['log']('\x0a【'+Tips+_0x56ae('‫b4','&(r(')+$[_0x56ae('‮fa','$47g')]+_0x56ae('‫fb','eFz^'));subTitle+='\x0a【'+Tips+_0x56ae('‮fc','U)%8')+$['index']+_0x56ae('‫fd','$47g');}else{_0x774600[_0x56ae('‫fe','Hls6')](_0x2ee7af);}}else{let _0x377a30=JSON['parse'](_0x519a29);if(_0xc83338[_0x56ae('‮ff','89S)')](_0x377a30[_0x56ae('‫100','usOU')],0x1)){if(_0x377a30['data']==null){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x56ae('‫101','!@5U')+_0x34b7bd+_0x56ae('‮102','gU[t'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‫103','Qq$6')]+'\x20观看视频】:\x20第'+_0x34b7bd+_0x56ae('‫104','89S)');}else{console[_0x56ae('‮77','ZB5L')]('\x0a【'+Tips+_0x56ae('‮105','HFyb')+$['index']+_0x56ae('‫106','JmiD')+_0x34b7bd+_0x56ae('‮107','eFz^')+_0x377a30['data'][_0x56ae('‮108','#Pa9')]+'红包');subTitle+='\x0a【'+Tips+_0x56ae('‮b1','#Y0[')+$[_0x56ae('‫109','J(Hp')]+'\x20观看视频】:\x20第'+_0x34b7bd+_0x56ae('‮10a','40t4')+_0x377a30[_0x56ae('‫10b','STkp')][_0x56ae('‫10c','FxOf')]+'红包';}}else{if(_0xc83338['bmlgX']===_0xc83338[_0x56ae('‫10d','nwmD')]){let _0x3dd15e=JSON[_0x56ae('‮10e','Y!*P')](_0x519a29);if(_0xc83338[_0x56ae('‫10f','WaOo')](_0x3dd15e['code'],0xc8)){console[_0x56ae('‫110','PcRP')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x3dd15e[_0x56ae('‫111','L0MA')]+_0x56ae('‮112','#Y0['));return![];}else{console[_0x56ae('‫113','#Pa9')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x3dd15e[_0x56ae('‫114','nwmD')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x3dd15e['msg'];return![];}}else{console['log']('\x0a【'+Tips+_0x56ae('‮98','7mao')+$[_0x56ae('‮b8','7mao')]+'\x20观看视频】:\x20'+_0x377a30['msg']);subTitle+='\x0a【'+Tips+_0x56ae('‫115','6LuB')+$[_0x56ae('‫116','rmdm')]+'\x20观看视频】:\x20'+_0x377a30[_0x56ae('‮117','lVxA')];}}}}else{var _0x4b81bb='';var _0x4d74cb=fs[_0x56ae('‫118','c9R8')](_0x56ae('‫119','!e$8'));_0x4d74cb[_0x56ae('‫11a','^[Bf')](function(_0x32719f){var _0x2dc776=path[_0x56ae('‫11b','b5yO')](_0x774600['CFQML'],_0x32719f,_0x774600['OMlmU']);if(_0x774600['LfEyN'](_0x32719f[_0x56ae('‮11c','k5!W')](0x0,0x3),_0x56ae('‮11d','FxOf'))&&fs[_0x56ae('‮11e','6LuB')](_0x2dc776)){_0x4b81bb=fs[_0x56ae('‮11f','Qq$6')](_0x2dc776)[_0x56ae('‮120','tw$@')]()['trim']();};});return _0x4b81bb;}}catch(_0x1a3bcb){if(_0xc83338[_0x56ae('‫121','Qq$6')](_0xc83338[_0x56ae('‫122','L0MA')],_0xc83338['zmMGR'])){_0x2ee7af();}else{console[_0x56ae('‮123','WaOo')](_0x1a3bcb,_0x3cacdc);}}finally{_0x2ee7af();}}});});}function Get_request(_0x167f07){var _0x5e771b={'NBaKY':_0x56ae('‮124','U)%8'),'spnWP':'application/json;\x20charset=utf-8','ZOOTA':'gzip','kUwks':'ggb.culink.vip'};return{'url':_0x56ae('‫125','arc4')+_0x167f07,'headers':{'user-agent':_0x5e771b[_0x56ae('‫126','[aIS')],'content-type':_0x5e771b['spnWP'],'accept-encoding':_0x5e771b[_0x56ae('‮127','CxgM')],'content-length':0x0,'token':ggb_token,'host':_0x5e771b[_0x56ae('‫128','$47g')]}};};function Post_request(_0x58ad8a,_0x3ba5e6){var _0x43f449={'kQpCZ':_0x56ae('‮129','3e)v'),'fkGdZ':'application/json;\x20charset=utf-8','NaKkv':_0x56ae('‮12a','nLZ!')};return{'url':_0x56ae('‫125','arc4')+_0x58ad8a,'headers':{'user-agent':_0x43f449[_0x56ae('‫12b','lVxA')],'Content-Type':_0x43f449[_0x56ae('‮12c','FxOf')],'accept-encoding':_0x56ae('‫12d','2%o&'),'content-length':_0x3ba5e6['length'],'token':ggb_token,'host':_0x43f449[_0x56ae('‫12e','f[SV')]},'body':_0x3ba5e6};};function formatDate(){var _0x159b75={'ruPdf':function(_0x464b48,_0x2de2eb){return _0x464b48+_0x2de2eb;},'qfjui':function(_0x34205e,_0x17fe84){return _0x34205e<_0x17fe84;},'sKKOb':function(_0x2b9e9c,_0x539baa){return _0x2b9e9c+_0x539baa;}};let _0x47ce66=new Date();let _0x1eee77=_0x47ce66[_0x56ae('‮12f','nLZ!')]();let _0x9ced80=_0x159b75['ruPdf'](_0x47ce66[_0x56ae('‫130','!@5U')](),0x1);let _0x5ef45d=_0x47ce66[_0x56ae('‫131',']t8p')]();_0x9ced80=_0x159b75[_0x56ae('‮132',']t8p')](_0x9ced80,0xa)?_0x159b75['sKKOb']('0',_0x9ced80):_0x9ced80;_0x5ef45d=_0x159b75['qfjui'](_0x5ef45d,0xa)?_0x159b75[_0x56ae('‫133','89S)')]('0',_0x5ef45d):_0x5ef45d;return _0x1eee77+'/'+_0x9ced80+'/'+_0x5ef45d;};async function yyz_login(){var _0x244d16={'JQOfH':function(_0x50df1f,_0x2da540){return _0x50df1f!==_0x2da540;},'QUPac':_0x56ae('‫134','U)%8'),'diUhU':function(_0x262a9f,_0x5efede){return _0x262a9f!==_0x5efede;},'ZAZaZ':'xzYlJ','Zmnxx':function(_0x16270e,_0x483e16){return _0x16270e==_0x483e16;},'DbjOf':function(_0x21b616,_0x2cf404){return _0x21b616===_0x2cf404;},'sKaGw':_0x56ae('‮135','40t4'),'uCesd':_0x56ae('‮136','2%o&'),'iHYFh':function(_0x99f3e3,_0x15ea9c){return _0x99f3e3(_0x15ea9c);},'DYAmY':function(_0x2251fb,_0x2cf3b1){return _0x2251fb==_0x2cf3b1;},'XCyuZ':function(_0x54acaa){return _0x54acaa();},'MKnVh':_0x56ae('‮137','6LuB'),'xADZX':function(_0x5da229,_0x2379f8){return _0x5da229!==_0x2379f8;},'SHsmU':_0x56ae('‮138','7mao'),'wVbHO':_0x56ae('‫139','89S)'),'OjMGP':function(_0xf46c8){return _0xf46c8();},'gZkhW':_0x56ae('‫13a','J(Hp'),'JpYwg':function(_0x4a1ef9,_0x156929){return _0x4a1ef9+_0x156929;},'GnfHT':_0x56ae('‫13b','usOU')};var _0x2c4d67=Math['floor'](Date[_0x56ae('‫13c','U)%8')]()/0x3e8);var _0x164970=CryptoJs[_0x56ae('‮13d','arc4')](''+TG_ID+mac+os[_0x56ae('‮13e','J5UW')]()+YZ)[_0x56ae('‮13f','DI04')]();var _0x2f97f7='account='+TG_ID+_0x56ae('‮140','J(Hp')+_0x164970+_0x56ae('‮141','^[Bf')+_0x2c4d67;var _0x18ce98=CryptoJs['MD5'](_0x2f97f7+'&'+appid)[_0x56ae('‫142','3e)v')]();_0x2f97f7=_0x244d16[_0x56ae('‫143','[aIS')](_0x2f97f7+'&sign=',_0x18ce98);let _0x1b74ee={'url':serverUrl+_0x56ae('‫144','40t4'),'headers':{'user-agent':_0x244d16[_0x56ae('‫145','WaOo')]},'body':_0x2f97f7};return new Promise((_0x163faa,_0x11f994)=>{if(_0x244d16['xADZX'](_0x244d16[_0x56ae('‫146','DI04')],_0x244d16['gZkhW'])){console[_0x56ae('‮77','ZB5L')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‫147','nPhh')]+_0x56ae('‫148','rmdm'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‮149','40t4')]+_0x56ae('‫14a','!LxW');}else{$['post'](_0x1b74ee,async(_0x102599,_0x239af6,_0x173482)=>{try{if(_0x244d16[_0x56ae('‫14b','^[Bf')](_0x56ae('‫14c','f[SV'),_0x244d16[_0x56ae('‮14d','J5UW')])){if(_0x102599){console[_0x56ae('‮14e','2%o&')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x102599);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x102599;}else{if(_0x244d16['diUhU'](_0x56ae('‮14f','rmdm'),_0x244d16[_0x56ae('‫150','nwmD')])){let _0x1903ee=JSON[_0x56ae('‮151','rmdm')](_0x173482);if(_0x244d16[_0x56ae('‫152','c9R8')](_0x1903ee[_0x56ae('‮153','#Y0[')],0xc8)){if(_0x244d16[_0x56ae('‮154','!LxW')](_0x244d16[_0x56ae('‫155','JmiD')],_0x244d16[_0x56ae('‮156','6LuB')])){console[_0x56ae('‮97','Y!*P')]('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+_0x56ae('‮157','WaOo'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x56ae('‫158','HFyb');}else{let _0x2ca739=_0x244d16[_0x56ae('‫159','nPhh')](Format_time,_0x1903ee[_0x56ae('‫8e',']t8p')]['info'][_0x56ae('‮15a','7mao')]);console[_0x56ae('‫89','rmdm')]('\x0a['+TG_ID+_0x56ae('‫15b','nLZ!')+_0x2ca739);await get_vip(_0x1903ee['msg']['token']);}}else if(_0x244d16[_0x56ae('‫15c','Y!*P')](_0x1903ee['code'],0x71)){await _0x244d16['XCyuZ'](yyz_user_reg);}else{console['log']('\x0a['+TG_ID+_0x56ae('‮15d','J@xG')+_0x1903ee[_0x56ae('‮15e','!LxW')]);subTitle+='\x0a['+TG_ID+_0x56ae('‮15f','!LxW')+_0x1903ee[_0x56ae('‮160','eFz^')];return![];}}else{console['log'](e,_0x239af6);}}}else{var _0x362d54=path[_0x56ae('‫161','nLZ!')]('/sys/class/net',dev,'address');if(dev[_0x56ae('‮162','b5yO')](0x0,0x3)=='eth'&&fs[_0x56ae('‮163','&(r(')](_0x362d54)){macs=fs[_0x56ae('‮164','!e$8')](_0x362d54)['toString']()[_0x56ae('‮165','usOU')]();};}}catch(_0x8b681f){if(_0x244d16['DbjOf'](_0x56ae('‫166','arc4'),_0x244d16[_0x56ae('‮167','3e)v')])){console['log']('\x0a['+TG_ID+_0x56ae('‫168','!e$8')+_0x102599);subTitle+='\x0a['+TG_ID+_0x56ae('‮169','lVxA')+_0x102599;}else{console[_0x56ae('‮16a','CxgM')](_0x8b681f);}}finally{if(_0x244d16['xADZX'](_0x244d16[_0x56ae('‮16b','lVxA')],_0x244d16[_0x56ae('‮16c','HFyb')])){_0x244d16['OjMGP'](_0x163faa);}else{throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}});}});}async function yyz_user_reg(){var _0x2761ea={'lKhTN':function(_0x4e3bd0){return _0x4e3bd0();},'QtEFd':function(_0x382f49,_0x1f857a){return _0x382f49!==_0x1f857a;},'tfNgJ':_0x56ae('‮16d','arc4'),'oLCBC':'khizg','OIDEL':function(_0xc39de){return _0xc39de();},'TNWea':'JAogj','cbwTw':function(_0x3f4b69,_0x3b8011){return _0x3f4b69===_0x3b8011;},'yCKHC':_0x56ae('‮16e','2%o&'),'IqBid':'MCMEc','bzPZW':function(_0x240d75,_0x36e1b0){return _0x240d75&&_0x36e1b0;},'buUhB':'TnqlX','JpHng':_0x56ae('‫16f','#Y0['),'Zgekh':function(_0x493351,_0xf5c6a7){return _0x493351/_0xf5c6a7;},'YnNNv':function(_0x5d8fdb,_0x2bee5a){return _0x5d8fdb+_0x2bee5a;},'XDuhf':function(_0xc45a1f,_0x5c3213){return _0xc45a1f+_0x5c3213;},'xIAxV':_0x56ae('‮170','k5!W'),'KWztg':_0x56ae('‮171','rmdm')};if(_0x2761ea[_0x56ae('‮172','usOU')](!Tips,!YZ)){if(_0x2761ea[_0x56ae('‫173','J(Hp')]===_0x2761ea[_0x56ae('‮174','CxgM')]){_0x2761ea[_0x56ae('‫175','JmiD')](resolve);}else{console[_0x56ae('‫176','$47g')](_0x56ae('‮177','!@5U'));return![];}}var _0x3551ae=Math[_0x56ae('‫178','Qq$6')](_0x2761ea['Zgekh'](Date['now'](),0x3e8));var _0x28073f=CryptoJs[_0x56ae('‫179','c9R8')](''+TG_ID+mac+os[_0x56ae('‮17a','L0MA')]()+YZ)['toString']();var _0x5a2966='user='+TG_ID+_0x56ae('‫17b','DI04')+_0x28073f+_0x56ae('‮17c','usOU')+_0x3551ae;var _0x5522fa=CryptoJs[_0x56ae('‫17d','omcX')](_0x2761ea[_0x56ae('‫17e','!LxW')](_0x5a2966,'&')+appid)['toString']();_0x5a2966=_0x2761ea[_0x56ae('‫17f','J5UW')](_0x2761ea['XDuhf'](_0x5a2966,_0x2761ea[_0x56ae('‮180','nLZ!')]),_0x5522fa);let _0x2cfc86={'url':serverUrl+_0x56ae('‮181','&(r('),'headers':{'user-agent':_0x2761ea[_0x56ae('‮182','89S)')]},'body':_0x5a2966};return new Promise((_0x21acc1,_0x124700)=>{$[_0x56ae('‫183','PcRP')](_0x2cfc86,async(_0x196192,_0x5130a0,_0x3bac5f)=>{if(_0x2761ea[_0x56ae('‫184','!@5U')](_0x2761ea['tfNgJ'],'IROZo')){try{if(_0x2761ea[_0x56ae('‮185','H)Tq')]==='khizg'){if(_0x196192){console[_0x56ae('‮186','J(Hp')]('\x0a['+TG_ID+_0x56ae('‮187','arc4')+_0x196192);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x196192;}else{let _0x1dc5d2=JSON[_0x56ae('‮188','lVxA')](_0x3bac5f);if(_0x1dc5d2[_0x56ae('‫189','[aIS')]==0xc8){await _0x2761ea[_0x56ae('‮18a','89S)')](yyz_login);}else if(_0x1dc5d2[_0x56ae('‮18b','PcRP')]==0x75){if('jEPSM'!==_0x2761ea[_0x56ae('‫18c','f[SV')]){console['log']('\x0a['+TG_ID+_0x56ae('‫18d','7mao')+_0x1dc5d2['msg']+_0x56ae('‫18e','CxgM'));return![];}else{console[_0x56ae('‮18f','Qq$6')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x196192);subTitle+='\x0a['+TG_ID+_0x56ae('‫190','J(Hp')+_0x196192;}}else{console[_0x56ae('‫191','6LuB')]('\x0a['+TG_ID+_0x56ae('‮192','^[Bf')+_0x1dc5d2[_0x56ae('‫193','7mao')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x1dc5d2['msg'];return![];}}}else{_0x21acc1();}}catch(_0x19de85){if(_0x2761ea[_0x56ae('‫194','L0MA')](_0x2761ea[_0x56ae('‫195','WaOo')],_0x2761ea['IqBid'])){console[_0x56ae('‫196','3e)v')](_0x56ae('‫197','arc4'));return![];}else{console[_0x56ae('‮198','usOU')](_0x19de85);}}finally{_0x21acc1();}}else{console[_0x56ae('‮198','usOU')](_0x56ae('‮199','PcRP'));return;}});});}async function get_vip(_0x267c2b){var _0x37697d={'ZIWsn':'YxmTX','kgfYc':function(_0x52eed2,_0x1e9ec1){return _0x52eed2===_0x1e9ec1;},'xrRjl':'OaYsS','WfIbP':'OZZyN','FaOkv':function(_0x48d98c,_0x5b8542){return _0x48d98c/_0x5b8542;},'YLHOT':function(_0x2c5c15,_0x373eab){return _0x2c5c15+_0x373eab;},'MgOoV':function(_0x4f8823,_0x3c8518){return _0x4f8823+_0x3c8518;},'OwNWv':function(_0xb7d4af,_0x320db0){return _0xb7d4af+_0x320db0;},'zPLQM':_0x56ae('‮19a','40t4')};var _0x316fe8=Math[_0x56ae('‫19b','$47g')](_0x37697d[_0x56ae('‮19c','ZB5L')](Date[_0x56ae('‮19d','gU[t')](),0x3e8));var _0x34bb47=_0x56ae('‫19e','omcX')+user_num+'&token='+_0x267c2b+_0x56ae('‮19f','Qq$6')+_0x316fe8;var _0x295167=CryptoJs[_0x56ae('‮1a0','b5yO')](_0x37697d['YLHOT'](_0x37697d['MgOoV'](_0x34bb47,'&'),appid))[_0x56ae('‮1a1','omcX')]();_0x34bb47=_0x37697d['OwNWv'](_0x37697d[_0x56ae('‫1a2','!LxW')](_0x34bb47,_0x56ae('‫1a3','J@xG')),_0x295167);let _0x2e473e={'url':serverUrl+_0x56ae('‮1a4','CxgM'),'headers':{'user-agent':_0x37697d['zPLQM']},'body':_0x34bb47};return new Promise((_0x3730e6,_0x5e1055)=>{var _0x557e0b={'qYkOI':_0x37697d[_0x56ae('‮1a5','7mao')],'HExiU':function(_0x2ce5c6,_0x1feb6d){return _0x2ce5c6==_0x1feb6d;},'iAhhy':function(_0x168753){return _0x168753();},'xbLXy':function(_0x103b7e){return _0x103b7e();}};if(_0x37697d['kgfYc'](_0x37697d['xrRjl'],_0x37697d['WfIbP'])){console[_0x56ae('‫191','6LuB')](e);}else{$[_0x56ae('‫1a6','2%o&')](_0x2e473e,async(_0x2fc0c7,_0x193418,_0x6e208e)=>{try{if(_0x2fc0c7){if('YOTFr'===_0x557e0b[_0x56ae('‫1a7','^[Bf')]){os=$[_0x56ae('‫1a8','J(Hp')]()?require('os'):'';}else{console[_0x56ae('‫1a9','nwmD')]('\x0a['+TG_ID+_0x56ae('‮1aa','!@5U')+_0x2fc0c7);subTitle+='\x0a['+TG_ID+_0x56ae('‮1ab','ZB5L')+_0x2fc0c7;}}else{let _0x14b7d7=JSON['parse'](_0x6e208e);if(_0x557e0b[_0x56ae('‫1ac','f[SV')](_0x14b7d7[_0x56ae('‮1ad','!LxW')],0xc8)){user_index=_0x14b7d7[_0x56ae('‮1ae','CxgM')];await _0x557e0b['iAhhy'](implement);}else{if(yyz_Kami){await card(_0x267c2b);}else{console[_0x56ae('‮1af','DI04')]('\x0a['+TG_ID+_0x56ae('‫1b0','DI04'));subTitle+='\x0a['+TG_ID+_0x56ae('‮1b1','!@5U');return![];}}}}catch(_0x46e494){console[_0x56ae('‮1b2','FxOf')](_0x46e494);}finally{_0x557e0b['xbLXy'](_0x3730e6);}});}});}async function card(_0x4cf56e){var _0x287d26={'EbEmb':'gzip','gwMIQ':_0x56ae('‫1b3','7mao'),'kBfGM':function(_0x205b5f,_0x32f20e){return _0x205b5f!==_0x32f20e;},'LcVQh':_0x56ae('‮1b4','3e)v'),'vjpAX':'AglYf','IEfcH':function(_0x1ecd20,_0xffe28b){return _0x1ecd20==_0xffe28b;},'xuuEu':function(_0x20faa8,_0x4baaa9){return _0x20faa8===_0x4baaa9;},'cajif':_0x56ae('‫1b5','^[Bf'),'NMlUN':_0x56ae('‮1b6','lVxA'),'coEyC':_0x56ae('‫1b7','#Y0['),'fXYPx':function(_0x31827c,_0x174efe){return _0x31827c/_0x174efe;},'ZhIkN':function(_0x93d909,_0xea28f6){return _0x93d909+_0xea28f6;},'mmnNS':function(_0x54dafa,_0x1f7e16){return _0x54dafa+_0x1f7e16;},'FVweC':_0x56ae('‫1b8','6LuB')};console[_0x56ae('‮1b9','89S)')](yyz_Kami);var _0x1b2848=Math['floor'](_0x287d26[_0x56ae('‮1ba','c9R8')](Date['now'](),0x3e8));var _0x493ba4='token='+_0x4cf56e+_0x56ae('‫1bb','arc4')+yyz_Kami+_0x56ae('‫1bc','H)Tq')+_0x1b2848;var _0x434f00=CryptoJs['MD5'](_0x287d26['ZhIkN'](_0x287d26['ZhIkN'](_0x493ba4,'&'),appid))[_0x56ae('‫1bd','CxgM')]();_0x493ba4=_0x287d26['mmnNS'](_0x493ba4+_0x56ae('‫1be','PcRP'),_0x434f00);let _0x4449be={'url':serverUrl+'card','headers':{'user-agent':_0x287d26['FVweC']},'body':_0x493ba4};return new Promise((_0x31a7ac,_0x3074a0)=>{if(_0x287d26['coEyC']!==_0x287d26[_0x56ae('‫1bf','c9R8')]){app_soy_ggb_data=process[_0x56ae('‮1c0','Hls6')][_0x56ae('‫1c1','!e$8')][_0x56ae('‮1c2','gU[t')]();}else{$[_0x56ae('‫1c3','J@xG')](_0x4449be,async(_0x2a3d7a,_0x2b7061,_0x2a3302)=>{var _0x8d9097={'ShPJZ':'Dart/2.16\x20(dart:io)','mRNdY':_0x287d26[_0x56ae('‮1c4','7mao')],'HtJzc':_0x287d26['gwMIQ']};try{if(_0x2a3d7a){if(_0x287d26[_0x56ae('‫1c5','!@5U')](_0x287d26[_0x56ae('‫1c6','2%o&')],_0x287d26[_0x56ae('‮1c7','usOU')])){console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x2a3d7a);subTitle+='\x0a['+TG_ID+_0x56ae('‫1c8','3e)v')+_0x2a3d7a;}else{return{'url':_0x56ae('‮1c9','nPhh')+url,'headers':{'user-agent':_0x8d9097['ShPJZ'],'Content-Type':_0x56ae('‮1ca','3e)v'),'accept-encoding':_0x8d9097['mRNdY'],'content-length':body[_0x56ae('‫1cb','2%o&')],'token':ggb_token,'host':_0x8d9097[_0x56ae('‮1cc','!@5U')]},'body':body};}}else{let _0x45be7b=JSON[_0x56ae('‫1cd','J@xG')](_0x2a3302);if(_0x287d26[_0x56ae('‮1ce','JmiD')](_0x45be7b[_0x56ae('‫1cf',']t8p')],0xc8)){console[_0x56ae('‫1d0','!@5U')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x45be7b[_0x56ae('‮1d1','FxOf')]+'，脚本已正常使用');return![];}else{console[_0x56ae('‫1d2','k5!W')]('\x0a['+TG_ID+_0x56ae('‮1d3','arc4')+_0x45be7b[_0x56ae('‫114','nwmD')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x45be7b[_0x56ae('‮d8','U)%8')];return![];}}}catch(_0x41bd63){if(_0x287d26[_0x56ae('‫1d4','7mao')]('Osrue',_0x287d26['cajif'])){console[_0x56ae('‮1af','DI04')](_0x41bd63);}else{console[_0x56ae('‮16a','CxgM')](_0x41bd63);}}finally{if(_0x287d26[_0x56ae('‮1d5','U)%8')](_0x56ae('‮1d6','c9R8'),_0x287d26[_0x56ae('‮1d7','JmiD')])){console[_0x56ae('‮1d8','lVxA')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x56ae('‫1d9','PcRP'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x56ae('‫1da','!@5U')]+_0x56ae('‮1db','nLZ!');}else{_0x31a7ac();}}});}});}function Format_time(_0x5f15f5){var _0x2dcb43={'OFoQt':function(_0x150957,_0x449d62){return _0x150957+_0x449d62;},'lDccw':function(_0x1dd09a,_0x5b1c46){return _0x1dd09a+_0x5b1c46;},'NcAwZ':function(_0x13e22a,_0x2cc953){return _0x13e22a+_0x2cc953;},'gtiNK':function(_0x5882e9,_0x183774){return _0x5882e9+_0x183774;},'vzLDU':function(_0x3e2f21,_0x3e22b7){return _0x3e2f21+_0x3e22b7;},'SLbmq':function(_0x301b54,_0x246f0c){return _0x301b54<_0x246f0c;},'BUFks':function(_0x352f9a,_0x204ace){return _0x352f9a+_0x204ace;},'WCgXl':function(_0x1e523b,_0x2216db){return _0x1e523b+_0x2216db;}};var _0x3a9372=new Date(_0x5f15f5*0x3e8);var _0x2743f5=_0x2dcb43[_0x56ae('‮1dc','!@5U')](_0x3a9372[_0x56ae('‫1dd','$47g')](),'-');var _0x3e9f3c=(_0x2dcb43[_0x56ae('‮1de','J5UW')](_0x3a9372['getMonth'](),0x1)<0xa?'0'+(_0x3a9372['getMonth']()+0x1):_0x2dcb43['lDccw'](_0x3a9372[_0x56ae('‫1df','nwmD')](),0x1))+'-';var _0x307a2b=_0x2dcb43[_0x56ae('‫1e0','Hls6')](_0x3a9372['getDate'](),'\x20');var _0x2ab7df=_0x2dcb43[_0x56ae('‫1e1','ZB5L')](_0x3a9372[_0x56ae('‫1e2','Hls6')](),':');var _0x5a9480=_0x2dcb43['vzLDU'](_0x2dcb43[_0x56ae('‮1e3','7mao')](_0x3a9372['getMinutes'](),0xa)?'0'+_0x3a9372[_0x56ae('‮1e4','nLZ!')]():_0x3a9372[_0x56ae('‫1e5','c9R8')](),':');var _0x422623=_0x3a9372[_0x56ae('‮1e6','PcRP')]();let _0x35b5d1=_0x2dcb43['vzLDU'](_0x2dcb43[_0x56ae('‮1e7','6LuB')](_0x2743f5,_0x3e9f3c),_0x307a2b)+_0x2ab7df+_0x5a9480+_0x422623;return _0x2dcb43[_0x56ae('‮1e7','6LuB')](_0x2dcb43[_0x56ae('‫1e8','eFz^')](_0x2dcb43[_0x56ae('‫1e9','Hls6')](_0x2743f5,_0x3e9f3c)+_0x307a2b,_0x2ab7df),_0x5a9480)+_0x422623;};_0xodt='jsjiami.com.v6';

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