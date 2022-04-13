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


const $ = new Env('【广告吧22/04/13_1】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodZ='jsjiami.com.v6',_0xodZ_=['‮_0xodZ'],_0x3632=[_0xodZ,'S8Ozwrfms5Tlh57lpZ3otorDqMOA','TMKOTA==','UnXCsgxF','Vh5Je1c=','w4MIw5jCig==','esO3w7sCwog=','w6h0w6fDuMOd','w5jCuS3DrsKh','woXopqfnn6vopqPpo6PjgKgCwpPnrow=','wrMVaB/CksKn','Peimreeeuuimhumgu+OBgcOaw4/nrL4=','5q+06I6X5Yy05YqJ','w5vCjAHDig==','QsO0SsOXwqbDpTLDsMKv','AsKlKsKECQ==','w4YMU8Opw6Y=','w6fCh2bDpcOv','KDsRL8KP','RcOGScOxwpA=','wqnCvcK95Lyf55aT5Yyn5a25w4nCmw==','XMOiSA==','QX/Cl+S8qOeXnuWNuOWvkcKrw7g=','5oyk56a9wrBNwpbotaDljYjDkw==','eOinnOefrOinnOmituOApcKswpQ=','wpdcd8KKw4o=','w7fCti7nmaTlvY3lpInotZHDvQfDiw==','T2fCpw==','CMOOwoU=','XxpxZntBwqjCvsKLek5OwonCicKLw4stAiRWw4nDkC4TwqcNTkHCqzvClQ==','w7pYw6zDmA==','MsKRRxMow7vDlcOHCcKTKAZ5wrk=','ZcKcWcKMAT7DvS5Yw7rDjWLDssOxw7hxNcKFw4M=','TMOow7/DksOq','AGXCnzTDlg==','fTXDhzvCn3p2w6XCsSbDnFvCgTwOVsK9H8K+Dg9OwpIRITnDhh43OEA=','UH9SwpjDgSzCq8Ohw6I7EcKENwYJasKjw5zCvHQOZcKCw6LDrcOewqg=','U3p3woLDpQ==','aWxJwoLDng==','woEGw4NYYh4=','egjDk27DiSXCjMKGfGU/wqDCo00=','w6xGOCkVw4M1L31Hw5g=','eyDDgxrCmXdjw7k=','w5DCrADDjMKz','wqkNw6YfXg==','wpPDlcOlHj0=','wqIJw6JoP8KZw41yPMKWwpTDiMKZwqw=','wq0oQgTCow==','OlTDk3Br','wqAMw5dWehrDl8Odwo1hfsOJX8OvwpQqwqLDgMOWwr8Ywo5AdWIRw4fCsUhbeHbDt8KUw5gGbMK0wpjClMO8wqsBwpjCv8KnwqzDu0gsEW7DozZzw6zCqmzDrwrCrmHCkMK7BMKIw4RmaMKzFsKwIELClW4uwqgqZQUKSh0MwphHE8KnwrzDlMKRUwzDgMK0woDCjcK7BxPDp8Oow6XCtMOGw5PDlE3DrzzDkgdfZcOYwpLCnT/DtcOgTMOSVsOZY8O8CB4FwrfDpMKRYcOsDMKdAcOlMRcwwpXDrcOrw67Dm8OPCkcDasOZw6Z+wqTDoSXDkCjDpcKZGCV6w6HCrXw+LWQ8dsKLw6AUwovCsyPDoMOOKcKZwqRVwqTCisOcBCAewr4ANAMnK8KuSMKXeHrClV9ow6bCjMKWw7Jtw57CthHChB9gw6xWfcKAMnc=','wrNMwo3DlsO+','IsK7I8KbFQ==','w5phw5A=','KcKFTg==','MHHClG5JVcO7w5E=','w6lNw5bDnMOWwo4YIQ==','wowAw45QYxjDgsOP','MMK5w7ZPIRvDgMKgwoQew746w6/Dr8Okw4g6wrA1EMORIMOTN8KNWw==','w5rDoMKt','wqAnwpg=','w4Btw53CoMKk','YsKmw4RIIAXDgcK1','dRbCqFBu','UDvDusOBwoEG','aBzDlDLDtTzCj8KIfWA=','SUHCigdD','wp3DpMOgFTDCqcOYw5nCiMOxw5wJKMKiw4vCnMOQw7Bxw57CrAHCqwd0w4jDowDCoRfDpw==','ZA7DnSfDvQ==','VRnDpCLDrA==','IsO0w7t1GA==','W33CjxpL','wp9rRMKvw4c=','w6HCu1ppwo8=','wrAWcAfCmA==','bkVuwozDow==','w7vCu0lhwpk=','eMKCNm1O','HGfDgktgJ8KmDMOsw6/Dr8KZKFTDlQF5diXCtsO6wqrDnAPDimbClw==','wrjDtcOiDXbDuMKXwpzDl8K+wppCI8Kjw5DDiMKCwr87','GMKVUnIE','McOWwpLCj10=','w7jCqUZgwpwQ','WMOdw5nDqcOL','w6oGw6jCo8Kc','UgrDsTzChQ==','wonCqDnnm4Tlvbnlp4TotoMjwoTov4vlmI8F','w7tCPhwF','wo1QZcK6','ERJjwqDDrg==','w6ZQKw==','f8O8w5gL','wpQ0w48=','wpjDqMO6','w6k0wofnmojlvpPmi4flir9PwrDCp11W5Yim5p+S5pWk6ZWpUw==','AHzDnV59','B8KuH8Kz','FXHCo1JK','wptBwrPDj8O6','CMOMBeeZhuW8nuWmv+i2nMKUR8OY','wpHDp8O3','XirDogrDrg==','wq3Dp8OgNy4=','woAPw7R9Xw==','w4sGw4s=','w4AYwqXnm5Plv7Hlp5botZN8wqDovIvlmpUx','w5FCw53CisKE','GlfDh3d6','FMODOTsd','wphPwpjDkMOgbnTCicKIw6ciDcO6w602w5rDt8O9cXwjRz7CpjfDrcORQcO7a8Kkw5HCkjsnQ8O6w44Ow6dpw7kbBH/Dr3MGwrLCk8O/LRfDr8KPMyh1bMKew57CpCjDoArCuMKnVTx5wrjDgMOXf0Mow4TDm8KneFDDhcO3wpnDr8KHwp0HdABiwo0Pw7rDlcO8TRvDkWBPQsOmw7zDnjtAw4TDsMKSw4bChMKWw4DDlcOqw498wrvDrRLDmnVNw69rwqbDlSfDkMOgw6HCjcKPwqRrZB7DksKUw6LDtQnCgcK8bwfClMKMJkXCocKMDAsBw5E7w7XDt8OXw5FgZcKVw6LCocOow4RUFcKPQmUFe8OswpnCgSDDrTvCvsKbwrNLRk5yTsKZwpkODMKGVsOoAMK4wpzCnsKWVVtvWMKuVgDDizYQwqYsR8KTwobDqh8DwrrDgA==','wpk2YAbCjA==','XmdJwofDgA==','eMKmw6A=','b8K3TQ==','w7zCo1tzwoYZG8OM','wppQUsKrw4DCshBq','wqHDoXzDjRE=','JwXCs3B/wrzDgcOOQMKUw4HCtcKcwqNuwodsRQXDp17DucOSwr54H8OvwpwhahzCr8OGeXTDjzw=','F8OFag==','ccKvwoDCk34=','J2nCujvDiw==','wo7DqsOuN8O5','w45jw5TCpMKE','w4BNPycv','RMK+CW1SwpDCkMOn','G8KUNnVH','FsOewpPCkXQ=','w4xMHwUZ','HsK1MGpG','w48dwoYXGQ==','NcOJwq/CjlE=','woPDoE3DuX0=','cRrCoXc=','AFjCgHVj','CBQaMcK4','wr/DpVjDh3U=','TsOcw58AwqU=','w4IfwrgdAw==','wo4yw5g=','R3sp5rON5YS/5aeR6LaqO3vovLblmbPDvA==','w5HCggvmsrjlhrTlpaHot7okw7Xov5flm7fDhw==','w5PCghI=','5o6056e7VsO7Xei2tOWMg3M=','5oy+56SFLMOywp/ot73ljokt','w5bCgxHDjsKv','AuaPhOeNsOOBrhrDuQ==','w5bCmzzDpcKd','dhjDsDjDsw==','w6NUw6bCoMKH','QsKPwpHCkks=','HFrDsVR9','5q205rGX5pys6I6K5Y6d5Yq+57ib5Y6r','MSwqEsKg','77yQ6K6gw6MQwqlQU8K+6K2m5aWOwp09wrvltr3oo4rms5DlhIo=','wqTDksO3Fh0=','w4smV8KEwrA=','VG1hwrDDiw==','XOOBhOS9quiDqOaNpuelnOODpe+/gOmpp+isn+iEnuacu2zCpW7lpYjotp5S6Kyd5Yis5Lyd5pa46IWp5p+M5Lqa5LqZ5oWh5YWl5a6MwqM=','MDTDr+ayseWEiOWllei3nCXDtA==','woNMZg==','B8K7f+ayq+WHmOWnqei1sRPCuA==','w7YaaQ==','fsO7w7ENwoc=','w7nCpDfDksKF','wpJ9w47ClMKow6o=','cwV7Y35OwqjDpcOXOxBBw4vCtsKNw4tjWnwew6nDjDkEwrxZXxXDtTjCnMOzwroDw77Dm1ojwphTKMOow6Nzw6rDkcOGw5cQw4NVw4PCgFvCk8KBwoTDoMOLw6dua8OwwrYHw6XChA7Dq8KLV8OmNAnDhcO3bVsqJgzCozJ2GlDCtsO9YTEzWHfCkcKKEmMALcOjDsO0PMO4CiQWwpjCuMKgw7fDrsK9w6cKHMOXSybCpsOSwqJIbDtCw65hAcKQZsOrwp9AwrBEwq3Dnz/CklPCqWbCncOvwrofcS/DiC5VKBnDm8OgG8OsR1tUXBIlbMKvw5Fqw4bCiMKBEMOQNcKQISNHFklTGsKdw70Rw77DisKkw4fCvj3CtMOmwoDDi8OURznClX43wp/Cj2jDtkFANMOjaFo7wrnCgsKsX8OBwrMHZF7DiQ==','w7tOw6rDh8OW','cwDDhg==','Hm3CvTDDtBDDhHjCs8OOwqrCtsO6J8KV','aMK4MHJ2Y1c=','PDU0','FR5W','wqk8QxnCvQ==','VsO4w5XDvcOc','wrEBw5MyLsKFw498','W8OdZXnDvw==','w6PDrEkjfA==','w6xGODAWw4Yp','wqFHwqjDvsOB','wroHw7VMew==','w6HCnX9iwpk=','NMOrHi8V','wqxrwrTDkMOc','fMKuw4RWEQ==','w4kfw6XCjcKe','eMKPA09e','IgHDocO2wq4=','ZsOyw5Xpqb3or7DotIflj6vChcKE6L2w5Zu9w7M=','KSnClumqt+ivkui0u+WNvhnCq+i9nOWZk8KX','ZsOzw4wXwoc=','Lxd1wo/DgQ==','IlHCpG1T','CMKuHA==','M8OvOyYs','Aeeug+WIm+ODqRQs576C57uD6K6Z5rKY5aeU6LSj','5o6G56WuG8OAwpvotYDljIPDug==','wornr7LliL7jgI4iGOe8pee4m+ivkOayqeWmiOi0jQ==','I8OFMxYT','IR4PCcKt','deaMpueOleOArHHCrg==','GzvDtA==','PeaOv+eMgeOBkcKQcA==','TsKcHw==','bMKrD+S/t+eXvuWPtuWuncKpw6rmsobmnJ7lj5rlrJ/ljZDkvJnnl44=','PMKKw5A=','CcKBB1xk','IGfDvnFZ','wobjgqjkvbfogZXmj6jnparjg47vvITpqZnor4LohLPmn4vDg08Y5aac6LaywoXorqzliKfkv4Lml6vohYjmnpLkuI/kupTmhL/lhZnlr4Y=','M8K3L8KEKg==','w7cMWMOHw7k=','JHLDuWx4','dsKWw57Dq1DDuA==','OTJbwprDpw==','wrrDvW4=','w7jDl0A1Vm0=','w7wSGw==','w6otwpk=','w717w7bCkMKL','wowMw6IKEw==','aQDDojTDmDnCjsKI','aMKfScK0YQ==','w4LCpmTDhcOe','wp/DtcOiHQ==','KMKbK8KGOg==','wp4Fw4NXdQ==','w6sGfcK3','N8OQMBcS','OMOPCwYX','PwrDnMOBwqE=','wohoZcKUw6Q=','cMOFw5ovwrQ=','w7E9w7rCrMKi','TcKSTA==','S8OzwrfkvYPnlbrljI3lranDqMOA6L+35ZiRKA==','c8OIVX/DqA==','CMOMBeS9gueVo+WPr+Wtv8KURw==','XMK+Cw==','776G6Ieq5pye5bWy5q+b5bqD5L6R55eu','a05FwpvDsA==','UWVCwo3Dig==','wofnrJflipzniZ3mg7DjgbQJwq/nv77nurXorrLms67lpYHot48=','G+eutuWLheeJh+aAsOOAsCbCn+e/tee5uOivlOaykeWmmei1nw==','BWBD5Lyj55eC5Y2v5a6lw5DDrg==','OydR','w7pTwozkvpTnl5nljITlr7XCtcKP','w4ERwq4sMw==','w65Sw7LDuMOd','w63ClUbDhsONw5fCgsKfw4oNaQ==','w5ALVsO2w4A=','YMKxD8Oiw5A=','WQ91R31Mwr3Cog==','w7kjRMOpw6xtdg0=','w7lzw7DDg8Om','wpvDscOkNDbCpMONw4U=','CV/CujLDhg==','A8KkD8KSEcOmwpE=','QMKcH1Nc','w4IAwpQoG1dNw4fDhcOq','woXDlsOuLMOq','VsKoGFJkwozCgMO0w7PCqQ==','WQ91R3tMwrzCvsKHZg==','JMKnVnEa','KcOkNgYB','BMODw5BKJg==','acOzw7bDrcOj','dMKFccKpfw==','wosuw7EcYMKG','w75Qw7zDmMOQwohbLMOz','w4wWwq4KFlw=','UuaJoOS7quWIquS+uui1osK2w7vDicKVD+ivluiEp+iil+WumOigvMOV','wpZuc8K2w5bDrEtrw5/DjsKWw6PDnmt2w4XCv3NmJsKTw47CksOaBj0OOmxxwrE+','XcOvw4jDjsOXeUg=','w73Cq1lxwoI=','WsO/w7vDr8OK','c8OhfsOswoM=','H8KdSXUY','UMKdw51pGg==','wqotURvCjg==','wrHDu8OqEDXCpsOYwoLDlMKwwoIGasKdw43CnMKewqgpwpbCjB3CvBBvwpzDslTDvxTDrsKJw4oLC8O8w7DDtRzCohnCuk04XyvCisKvw4TDu8O3w7vDj1Evw5lFw6U8UcKVwrZtF1TDisO8WsOiwppJdHrDuSJ3wq7Di8OCDsOLwq9MZcOlw4vDnsO1w5gYwpZjBcObaFDCr8OMcx98BwfCjmjDpsOFwrMVSArCgMKFP8OgwosdNSogw4nDp8KBwqBxwowcw6wuNcKcwqNleX/DgMO1FsOhG8OdwojDmcKvC8OpwoRvIcKsw5c6DHPCmsK2wq0MVcOhbQYfwqjCoMKiwpRgw6FewqURTw3DlApVwprCqMKbw5jCrkF6w4/CmMOww7HDslDDozY7PsOJw7IYwpNJwrrDh8OQcX8tbUhaCgpvKQ3CgMKCD8O9wpfCmMKGLMOE','ZwzDvhLDsg==','esO9w5k=','VcO4w6LDk8OWbw==','w6HDtnlqTQ==','CcKcHlt/','HXzCt3R1','wqXDqMOLM8Ox','GsKaV3E9','w5pmw6TDvMOB','wp7DjsOADws=','dyfCo0RN','wqQvw7lFYA==','w6bCpXrDhMO5','J8OQw7lPOg==','MnfDj3N+','wosMw596dxXDng==','MMOuNi0=','XcOie8OEwoc=','QsOkTcO7wqLDpQ==','w43CqRbDjcKZ','w7haw6zDm8OQwpQlP8Ouwrw=','w6xALzUB','TMOTw4PDjMOY','wpIFw5ADbg==','w4kKwoc=','wobDosO8BMO9L8OTwpbDqDZTw7Q=','T8K6wpzCnA==','GXLDglh7','bwrDgSzDizPChQ==','w7HCol4=','chrCq1x1wrLDlMOjQMOIwoTDpg==','w4TDrWN6','44CS776z5pyN5aGn5YSU55iF5buD5Y276YaswqvCrMKZwp3CjEzCp8OgGSUbTU8=','IsOLw6ZyAw==','wrnDs23DnEQ=','FuOBleS/q+iBkuaMpueko+OAhu++i+mplOiuiOiGqOadmMK4ByDlpInotqMT6Kyq5YqZ5L6A5pSF6Ie75p2Y5Lm45Lu/5oa85Yev5a+oHw==','JsKqw5bDilY=','ESPDncOwwro=','RUHCghJo','O+ODneS8sOiAmuaPneenmOODpO++mumomuism+iHmuacvnwzw4HlppLotZzCgOivu+WIqeS/iOaVheiHmOacgOS7seS6ruaGtuWHneWttBM=','A2/Cojw=','w7soRg==','B3zDj2R0esOrfMOvw6nDucOW','CGDCuQ==','QsO+VsOXwrHDsDnDjMKuRmPDmg==','w4bCuWlMwqw=','w65Nw7zDt8ODwoAUGcOkwr4/cA==','w5YVwowMBg==','w7hSPCoK','K8KiKQ==','FsOSwpvCnGBxwqHDuGdgJMOt','w44Hw4jCjsKJKlU=','ZsOtw5jDvcOl','ZcO9w4c7woXDqcKQwoXCh0/DlxM=','bRrCtQ==','w44Hw4jCjsKJ','GOaPm+eOluODucKINue/lee4kuitsuawnuWlgui2jw==','cy9tQMOL','WcOlw5o=','w4dhw57CrMKhwrBCKsO0wpBgZw==','wp3DqcO5BcODCcOZ','PMKFa1Ivw6s=','KzUaA8KNaQHCtcKqNcKqw4w=','w602XMONw7c=','R3rCtg==','XcO+SA==','C0jDrz4s6IeR5p6C5oub6KGowonDncKn5Y645Li75pat6ZWF772Q','R8KdLsODw5I=','wr0DUiTCn8KvYg==','woQgw4NuWA==','W8Ouw5jDqMObZ17CuAQewoDDv3PCjsK1wpQA','ScKnFMOkw4I=','HRzDv8OQwp4=','JMOMw7BRPQ==','PHjCimo=','AWHCqA==','wq1UwpHDluODoeWElBM=','w5hvw7DDu8OP','ZcOiw5INwpY=','wqg5w4MHCw==','wp3DqcO5BcOD','GifDtA==','VwRlb2o=','wofkuYPotorljJzkuIrli4TjgKI=','V8KnwpI=','5o+K56W7JAjCnui3huWNuCE=','BGDCqzzDvA==','AuS4vuS5uuS+nuaBj+ODiCLDog==','KcOjPAIh','N17DsFFS','w5DjgbbohLzmnZzmjKbnp7jjgJbvvonmrbnohrHmn6rljorog7LpnLPpv4Dnj7TloJXotb0=','BHLDhEh2','FSfDt8OD','5o+R56WPw78uIei3reWNmcKc','VOetreWKhuOAqik956+35YiT5oqb5YiXw7M=','5oyy56WnwpJeKei3heWNqQQ=','woQNw4labg==','ROeuv+WJi+ODh0rCsg==','w5LCnhI=','woszw5sWfA==','HOevteWKnOOCrcKIKg==','e8K6w7A=','VmpLwo0=','fyTDgzTCng==','NsOuOAYmwqo=','csKmw7lZ','wovDtcO5DQ==','wpjDhMOYEMOK','ewPDni/DmA==','w6nDj2MKcA==','ByV5wqbDnA==','Q8OwQcOswrnDug==','a8OHQH/Dqw==','IGrDnH54','w4Jow7DCo8KS','w5AWwoUXXVBWw5fDhcOh','w6/Drlx+wpgdVMKTSgluw58=','w4wsw6vCssK9','LMKLCMK7Og==','FsKIJX9Q','w5zDnXgdXg==','wrlPwoU=','6Ial5p+B5o6l56aRw7rDv8Or6LSB5Y6BAg==','PMKYQVgz','wrTnrrLliJjjgJbDkljnrIjlipnmibjliqcy','5o6K56a7cm556Le+5Y6jCQ==','BXDDrEFn','HTvDl8ODwoA=','5oyE56aoNMKSAei3k+WNkTk=','PzpSwojDjg==','POS5r+S4jeS+tuaCmeOAiC3Csee+iee6leitheawtuWnmui1qg==','5o6I56WgTnHDh+i0qOWOlMOK','IeS5n+S5qOS/ouaBo+ODmsKUwpznvbXnubXorIfms4Xlpp7otrI=','w74HeA==','bgDDiB/DjTfCgsKwdm9lwrc=','SMK4wpnCmEU=','aiB7VsOW','Z8OJRMObwp0=','YMOGQ2k=','wpjDtcOkGA==','ScO4w4nDjsObZF3CrQ==','OztYwojDjw==','OjtR','w51gw4PClsK+','RnXCtB4=','w64aa8KxwoHCpMOASw==','woBWYsK0w5zCuhNo','PU/CkeS8memgt++9ig==','PH/Ck3s=','aBzDlDLDgz7ChsKA','w7BNw6vDjcOd','asOHQ2nDtQ==','w5Tkuq3kuKfkvoHmg5TjgZfChcOTwrFiEMK65pui56Sp77+G','IMKlPHJ9bAdK','w7pGBuS8qemhq++/mA==','wokCw5le','UcOkw4LDmcOL','KcOxwrfCrEQ=','PnLCiHVV','UMOkw4s=','IeS5n+S5qOS/ouaBo+ODmsKUwpw=','woAQw4o=','DxHDmsOfwqc=','woEMw4o=','SMKTT8KdVg==','VOS4ueS4jOS/muaBvOOAjMKzA+e/mue5lOituuazteWluui0hA==','5oyV56WUwq1rcei3iuWNljs=','S8KdHMO3w4s=','AuS7meS7guS9s+aDnOOArBse57yn57iS6Kyo5rGH5aeU6LSD','TnvCpw==','UsKdwqzCiGc=','UMKDKlpD','wr5Mw6cjKMKzw5ViIsKYwpjChMOSwqvCrGPCmyDCkcKxfMOGKcOiw7PDm8K+w43Ds8KT','C3vCgRvDnA==','C1XCrnds','wo7DpGPDh28=','wqgeTDTCpQ==','w7jCo08=','5o+s56axwoHCkcKf6LSs5Y+Mw6I=','WMKjCHp1','EeaNgeeOn+OCmcOswrfnvIrnuY/orL3msaXlpKbotp4=','5o2k56S0worDnsOr6Lex5Y+XVQ==','w6PCnlbDpcOA','wormjZznjr7jgI4iGOe8pee4m+ivkOayqeWmiOi0jQ==','WRZmR8OS','w7gGasKm','w5hhw4A=','DMOTwobCpn8=','eOaPjueNl+OAix0U','w4wLwoQACg==','UMKLEsOWw6A=','VcOlw4jDmcOK','w5zopZbnnpvopr/po4jjg5vCg8KN576w57mC6K2F5rGk5aWz6Le0','w7IpVw==','5o+x56eHBsOVA+i0quWMpD8=','w7coVMOBw7s=','wqvmj7Pnj7zjgb5awo8=','BSTDh+mqluivpui0kuWNocKOwrrovaHlm70B','Lw10wr7DjA==','w60uUcOPw6YsZQAYwrzDjsOEUMKnHE0g','VRtZV8Oa','w592OQoK','w6Fqw5bCvcKT','woQQw7JTcxPDhcKbw58h','C2TCuQnDog==','AjshP8Kl','wp7mirLkuKXliLfkvbXotK5Ww4oaQTzDljTDkxXChsOlDOiuj+iGrOihoeWvo+ihnMOI','wpDDu8O3','Eeevr+WIn+eIvuaDl+OChmHCs+e+m+e7u+ivoOazueWnqOi2mg==','5o2N56SYwqjChcKJ6LeB5Y6BZg==','duesquWIhueJm+aCt+OBt8OOw7rnvrrnuILor7PmsZXlpI7ot4g=','wqoHVAPCkw==','GMK3w5nDqnQ=','XMKqwqbCnUg=','ZRTCpmI=','ZMK5w7BsGA==','5o+h56e3QTIg6LeE5YyCwqA=','w7Tnr6zliKnniInmgK3jg6TCnDnkua7lpLbltKPnrZvliak=','w43nrJ3lip3nionmgJfjgafCjMOS5Lmy5aWm5ba8566X5YmH','5o+G56ezwroRf+i1iuWNmMOy','wr3DvH3DmlQ=','euevv+WJr+eLteaBleODiW4J','OcKLw5PDqUY=','N8OyOA==','CcOSwoU=','w4nCuhLDk8K0','fMOCw78pwq8=','wq7DmU/DrGY=','JQ7DuMOowo4=','UMOvTELDrA==','wrpMwqfDnMOW','cA5/S8Og','w7MhwosLJg==','fMO+VcOhwrrDuzrCvMO/CSfCm8Oxw7MPwojCgAtxQMKdw4/Ds8KRF8Ogw4LChMKFwrNYwqo8IiMew5fCjRlYFsK2N17DinMTZcOjwrfDuH1Rw4nDhsONwq7CvcOew5grVsO6JD9+NgjCqMK0w5bDqsOawqTDln/Do8KiwprCl8OgbHlobDzDiw1VYsKFw4rDp8KydMKjwrcya8O/wpvDsEoLw57Dg2rCgnI9w7PDvcOuw6x4ewvCvVh6N0xFHMKSUn5Twqt4P8OSK8KGw5TDsSHDiRfDngp4IMOSw6kyH8K3w7HCmsOTw5jCoDHDmMKswqfCu8Kzwo3Ds08Bw7rDoMO7UMOlTsKjasKFwpkzwr3DhAVgw7nDtVjClHgdw4jCs8KYAl/DucOswoR1csOWJMO5wrUowrHCtcOcwr/DtA3DtkgBFMONGQTDmkc7EAYBHcKFwpB0','w7zDl1gk','HGLCnzHDsw==','wrfDhHXDu2Q=','O0jCi15v','OcKZQg==','5o+y56eJVcK/wp7otJvlj5Ye','Eeevr+WIn+OCmcOswrfnvIrnuY/orL3msaXlpKbotp4=','WMKBw4NzOg==','wrZPwobDnA==','w7RMw6HDjcOc','w6/Dk0wpQQ==','NDUE','duesquWIhuODvMKMRg==','S8O5w4rDjMOY','w73DlHs4Tw==','wr8bw7huWg==','P3bCmgjDiA==','VkHCtSdj','FuOBleiGreadu+aMpueko+OAhu++i+auvOiFk+aenuWOnuiAlumcnem/uOeOl+Wghei3rg==','w7UVXwPDmcKha8OybsOYw6kOahU=','UMKpCG1owpHChg==','QsOjYVnDmA==','w43CiAXDh8K2wrHCow==','wrpKVMKxw6g=','I8KNw5bDp1vDqsOAHcOPwpRQO27CpBMlwrVEcjxO','wpTDhsODCwM=','w40uX8ODw7k=','W8ORw6wOwqA=','wpPDiMOnOsO3','B8KUSn4k','RyTCgVRv','c0VRwobDhw==','w4vDrEYCdQ==','dsKLwqfCm3M=','VXxywo3DpQ==','w7YvasKiwoQ=','VsKcQ8KbSQ==','Vz/DgC/DnA==','PsKjLG0=','dMK5RMKaVw==','Xn1swrvDtQ==','wr9uwo7DjsOp','W8KiBXE=','wrdJwrvDi8Or','cgDCsHB4wrk=','c8K9w78=','eBfDmDPDniPCs8KWfG0=','Q8KoDXtLwovCmcOlw4XCo8KucQ==','YsO9w60QwpDDp8Kcwr0=','w5Mbw4XChg==','w7XClkRiwrs=','fcOBw6rDqcOn','w6dMKw==','OMOVw65+Dw==','VuimiueemOiloOmhvuOAqsOiwq3nvYbnuKrorqrmsKblpbTotY8=','GjxYqtXCsxpjPifhami.comz.v6=='];if(function(_0x1b4cf4,_0x562150,_0x4aef70){function _0x123708(_0x28270b,_0x3323c7,_0xbd2fd9,_0x20c22f,_0x437d8d,_0x5413c6){_0x3323c7=_0x3323c7>>0x8,_0x437d8d='po';var _0x25e42e='shift',_0x22db62='push',_0x5413c6='‮';if(_0x3323c7<_0x28270b){while(--_0x28270b){_0x20c22f=_0x1b4cf4[_0x25e42e]();if(_0x3323c7===_0x28270b&&_0x5413c6==='‮'&&_0x5413c6['length']===0x1){_0x3323c7=_0x20c22f,_0xbd2fd9=_0x1b4cf4[_0x437d8d+'p']();}else if(_0x3323c7&&_0xbd2fd9['replace'](/[GxYqtXCxpPfhz=]/g,'')===_0x3323c7){_0x1b4cf4[_0x22db62](_0x20c22f);}}_0x1b4cf4[_0x22db62](_0x1b4cf4[_0x25e42e]());}return 0xde975;};return _0x123708(++_0x562150,_0x4aef70)>>_0x562150^_0x4aef70;}(_0x3632,0x108,0x10800),_0x3632){_0xodZ_=_0x3632['length']^0x108;};function _0x161b(_0x47e5af,_0xfb6fe0){_0x47e5af=~~'0x'['concat'](_0x47e5af['slice'](0x1));var _0x411ea1=_0x3632[_0x47e5af];if(_0x161b['ArVpYJ']===undefined){(function(){var _0x4c76df=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x571246='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4c76df['atob']||(_0x4c76df['atob']=function(_0x90c32b){var _0x122d66=String(_0x90c32b)['replace'](/=+$/,'');for(var _0xb170fa=0x0,_0x3c3061,_0xe7abb6,_0x530e1f=0x0,_0x1613ae='';_0xe7abb6=_0x122d66['charAt'](_0x530e1f++);~_0xe7abb6&&(_0x3c3061=_0xb170fa%0x4?_0x3c3061*0x40+_0xe7abb6:_0xe7abb6,_0xb170fa++%0x4)?_0x1613ae+=String['fromCharCode'](0xff&_0x3c3061>>(-0x2*_0xb170fa&0x6)):0x0){_0xe7abb6=_0x571246['indexOf'](_0xe7abb6);}return _0x1613ae;});}());function _0x17f87b(_0x45b303,_0xfb6fe0){var _0x501b89=[],_0xbb2a49=0x0,_0x17d417,_0xac751e='',_0x49024a='';_0x45b303=atob(_0x45b303);for(var _0xc9e0d0=0x0,_0x5023fb=_0x45b303['length'];_0xc9e0d0<_0x5023fb;_0xc9e0d0++){_0x49024a+='%'+('00'+_0x45b303['charCodeAt'](_0xc9e0d0)['toString'](0x10))['slice'](-0x2);}_0x45b303=decodeURIComponent(_0x49024a);for(var _0x320087=0x0;_0x320087<0x100;_0x320087++){_0x501b89[_0x320087]=_0x320087;}for(_0x320087=0x0;_0x320087<0x100;_0x320087++){_0xbb2a49=(_0xbb2a49+_0x501b89[_0x320087]+_0xfb6fe0['charCodeAt'](_0x320087%_0xfb6fe0['length']))%0x100;_0x17d417=_0x501b89[_0x320087];_0x501b89[_0x320087]=_0x501b89[_0xbb2a49];_0x501b89[_0xbb2a49]=_0x17d417;}_0x320087=0x0;_0xbb2a49=0x0;for(var _0x369097=0x0;_0x369097<_0x45b303['length'];_0x369097++){_0x320087=(_0x320087+0x1)%0x100;_0xbb2a49=(_0xbb2a49+_0x501b89[_0x320087])%0x100;_0x17d417=_0x501b89[_0x320087];_0x501b89[_0x320087]=_0x501b89[_0xbb2a49];_0x501b89[_0xbb2a49]=_0x17d417;_0xac751e+=String['fromCharCode'](_0x45b303['charCodeAt'](_0x369097)^_0x501b89[(_0x501b89[_0x320087]+_0x501b89[_0xbb2a49])%0x100]);}return _0xac751e;}_0x161b['aXjJil']=_0x17f87b;_0x161b['AMQhjr']={};_0x161b['ArVpYJ']=!![];}var _0x4d47eb=_0x161b['AMQhjr'][_0x47e5af];if(_0x4d47eb===undefined){if(_0x161b['ZTscyv']===undefined){_0x161b['ZTscyv']=!![];}_0x411ea1=_0x161b['aXjJil'](_0x411ea1,_0xfb6fe0);_0x161b['AMQhjr'][_0x47e5af]=_0x411ea1;}else{_0x411ea1=_0x4d47eb;}return _0x411ea1;};try{CryptoJs=$[_0x161b('‫0','C*i)')]()?require(_0x161b('‫1','T#Dx')):'';}catch(_0x420815){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x161b('‫2','NZZ*')]()?require('os'):'';}catch(_0x5ebf3a){throw new Error(_0x161b('‮3','f@lQ'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index;let appid=_0x161b('‮4','uHF^'),serverUrl='http://yyz.soyyun.top/api.php?app=10003&act=',yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x2dcc0d={'HLlOp':'/sys/class/net','OlrLv':_0x161b('‫5','7TMI'),'GDaTe':function(_0x249707,_0xe563f6){return _0x249707==_0xe563f6;},'bZPvR':'eth','vRqGA':_0x161b('‫6','Jm85'),'ILTzv':function(_0x20deea,_0x2ff0a1){return _0x20deea!==_0x2ff0a1;},'lUHDA':'wwaFq','vksTM':_0x161b('‫7','7TMI'),'FdyHm':'/sys/class/net/','sqpEj':function(_0x4b0637){return _0x4b0637();},'edKTt':function(_0x3d6c6b,_0x18371d){return _0x3d6c6b!==_0x18371d;},'KzwuU':_0x161b('‫8','atiw'),'GPABl':_0x161b('‮9','GC%*'),'EbPnR':function(_0x1039b5,_0x2ed8af){return _0x1039b5(_0x2ed8af);},'QoVSJ':'path','SsNln':function(_0x3beead){return _0x3beead();},'vOaFh':function(_0x14ad97,_0x58d233){return _0x14ad97!==_0x58d233;},'gkNVU':'uZktJ','gUBmH':_0x161b('‮a','bLBW'),'HxRzY':function(_0x192eca,_0x4d517a){return _0x192eca>_0x4d517a;},'RuAKD':function(_0x413996,_0x29527){return _0x413996===_0x29527;},'hcAfI':'nPSOp','ANATh':function(_0x518966,_0x30328c){return _0x518966>_0x30328c;},'ELDyE':_0x161b('‮b','[TO$'),'enVQa':function(_0x2c975d,_0x40cf21){return _0x2c975d+_0x40cf21;},'CFpYB':function(_0x54b69c,_0x51545c){return _0x54b69c*_0x51545c;},'iCnQN':function(_0x4d8a21,_0x25c628){return _0x4d8a21*_0x25c628;},'kTlvq':function(_0x137b7a,_0x20025b){return _0x137b7a*_0x20025b;},'uwzJJ':function(_0x2e1569,_0x6010de){return _0x2e1569*_0x6010de;},'EMuSk':function(_0x4cf6d4,_0x12f181){return _0x4cf6d4<_0x12f181;},'mWCAW':_0x161b('‮c','@ruH'),'VWRMd':function(_0x5197ce){return _0x5197ce();},'sbcAu':_0x161b('‫d','UgpB')};console[_0x161b('‮e','m0ri')]('\x0a【soy脚本文件免责声明】：\x0a【本仓库发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的，，否则后果自负】\x0a【不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断】\x0a【本脚本文件，禁止任何公众号、论坛、群体以及任何形式的转载、发布,否则后果自负】\x0a【本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害】\x0a【直接或间接使用脚本的任何用户，包括但不限于代挂或其他某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责】\x0a【如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本】\x0a【任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明】');if($[_0x161b('‮f','7TMI')]()){if(_0x2dcc0d['edKTt'](_0x2dcc0d[_0x161b('‮10','9#Bz')],_0x2dcc0d[_0x161b('‫11','Lws(')])){var _0x51403e=_0x2dcc0d[_0x161b('‮12','f@lQ')](require,'fs'),_0x46c413=_0x2dcc0d['EbPnR'](require,_0x2dcc0d[_0x161b('‮13','RUzr')]);function _0x2f06f5(){var _0x5964a4={'aPFJH':_0x2dcc0d['HLlOp'],'QPgiG':_0x2dcc0d[_0x161b('‮14','GC%*')],'lsTLQ':function(_0x346a6a,_0x4a2f94){return _0x2dcc0d[_0x161b('‫15','T#Dx')](_0x346a6a,_0x4a2f94);},'rDcfN':_0x2dcc0d[_0x161b('‫16','@ruH')],'gccZa':function(_0x858de9,_0x36b029){return _0x858de9!==_0x36b029;},'pXopj':_0x2dcc0d[_0x161b('‫17','bmkJ')]};if(_0x2dcc0d[_0x161b('‫18','*FGm')](_0x2dcc0d[_0x161b('‮19','VcQu')],_0x2dcc0d[_0x161b('‮1a','#zxn')])){var _0x1c7c19='';var _0x4c3844=_0x51403e['readdirSync'](_0x2dcc0d[_0x161b('‮1b','GcQi')]);_0x4c3844[_0x161b('‮1c','*FGm')](function(_0x2a0701){var _0x443f51=_0x46c413[_0x161b('‫1d','hz(J')](_0x5964a4['aPFJH'],_0x2a0701,_0x5964a4['QPgiG']);if(_0x5964a4[_0x161b('‮1e','atiw')](_0x2a0701[_0x161b('‮1f','atiw')](0x0,0x3),_0x5964a4[_0x161b('‮20','cOsk')])&&_0x51403e[_0x161b('‮21','T#Dx')](_0x443f51)){if(_0x5964a4[_0x161b('‫22','5b#X')](_0x5964a4[_0x161b('‮23','7TMI')],_0x5964a4[_0x161b('‫24','C*i)')])){console[_0x161b('‫25','NZZ*')](e,response);}else{_0x1c7c19=_0x51403e[_0x161b('‫26','RUzr')](_0x443f51)['toString']()[_0x161b('‫27','8JU8')]();}};});return _0x1c7c19;}else{YZ=author[_0x161b('‫28','GcQi')](/作者TG_ID:(\S*)/)[0x1][_0x161b('‮29','UgpB')](/_/g,'><');}};mac=_0x2dcc0d['SsNln'](_0x2f06f5);let _0x4783bd=$['isNode']()?process[_0x161b('‮2a','Jm85')][_0x161b('‫2b','bmkJ')]:'';if(!_0x4783bd){console['log']('\x0a【'+$[_0x161b('‮2c','9#Bz')]+_0x161b('‮2d','m&h4'));return!![];}else{TG_ID=_0x4783bd[_0x161b('‮2e','#zxn')]('&')[0x0];yyz_Kami=_0x4783bd['split']('&')[0x1];try{Tips=author[_0x161b('‮2f','1Wii')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x3fe851){throw new Error(_0x161b('‮30','sGq!'));}try{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x19fc16){if(_0x2dcc0d[_0x161b('‫31','ydVP')](_0x2dcc0d[_0x161b('‫32','di@p')],_0x2dcc0d[_0x161b('‮33','p8Ed')])){throw new Error(_0x161b('‮34','!RB8'));}else{console['log']('\x0a【'+$[_0x161b('‫35','%hVd')]+'】：未填写相应变量\x20soy_yyz_data');return!![];}}};if(process[_0x161b('‮36','p)KP')][_0x161b('‮37','GcQi')]&&_0x2dcc0d['HxRzY'](process[_0x161b('‮38','%hVd')][_0x161b('‫39','atiw')]['indexOf']('\x0a'),-0x1)){if(_0x2dcc0d[_0x161b('‮3a','Jm85')](_0x2dcc0d['hcAfI'],_0x2dcc0d['hcAfI'])){app_soy_ggb_data=process['env'][_0x161b('‫3b','T#Dx')][_0x161b('‮3c','NZZ*')]('\x0a');}else{_0x2dcc0d[_0x161b('‫3d','5b#X')](resolve);}}else if(process['env']['soy_ggb_data']&&_0x2dcc0d['ANATh'](process[_0x161b('‫3e','Lws(')][_0x161b('‫3f','qCsE')][_0x161b('‮40','Z8mL')]('#'),-0x1)){if(_0x2dcc0d['RuAKD']('ZftAW',_0x161b('‫41','7TMI'))){app_soy_ggb_data=process['env'][_0x161b('‫42','m0ri')]['split']('#');}else{console[_0x161b('‫43','bmkJ')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫44','Z8mL')]+_0x161b('‫45','yGMk'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫46','TZLA')]+'\x20提现】:\x20网络请求失败';}}else if(process[_0x161b('‮47','7TMI')][_0x161b('‮48','GXxk')]&&_0x2dcc0d['ANATh'](process['env']['soy_ggb_data'][_0x161b('‫49','RUzr')]('@'),-0x1)){if('FJHjb'===_0x2dcc0d['ELDyE']){os=$[_0x161b('‮4a','GC%*')]()?require('os'):'';}else{app_soy_ggb_data=process[_0x161b('‮2a','Jm85')][_0x161b('‮4b','GV]V')][_0x161b('‫4c','p)KP')]('@');}}else{app_soy_ggb_data=process[_0x161b('‮4d','p8Ed')][_0x161b('‮48','GXxk')]['split']();};user_num=app_soy_ggb_data['length'];console[_0x161b('‫4e','atiw')](_0x161b('‫4f','bmkJ')+new Date(_0x2dcc0d[_0x161b('‮50','^Nj)')](new Date()[_0x161b('‫51','[TO$')](),_0x2dcc0d['CFpYB'](_0x2dcc0d[_0x161b('‫52','*FGm')](new Date()[_0x161b('‫53','7TMI')](),0x3c),0x3e8))+_0x2dcc0d[_0x161b('‮54','^Nj)')](_0x2dcc0d[_0x161b('‫55','di@p')](_0x2dcc0d[_0x161b('‮56','#zxn')](0x8,0x3c),0x3c),0x3e8))['toLocaleString']()+_0x161b('‫57','sGq!'));console[_0x161b('‮58','%hVd')](_0x161b('‫59','Z8mL')+user_num+'\x20个账号】===');subTitle='';for(i=0x0;_0x2dcc0d[_0x161b('‮5a','T#Dx')](i,user_num);i++){let _0x208baf=app_soy_ggb_data[i][_0x161b('‮5b','m0ri')]('&');ggb_token=_0x208baf[0x1];ggb_num=_0x208baf[0x0];ggb_UA=_0x208baf[0x2];if(!ggb_UA){ggb_UA=_0x2dcc0d[_0x161b('‫5c','eZ^I')];}$[_0x161b('‮5d','RUzr')]=i+0x1;console[_0x161b('‫5e','di@p')]('\x0a开始【第\x20'+$[_0x161b('‫5f','%jbY')]+_0x161b('‮60','Z8mL'));await _0x2dcc0d['VWRMd'](yyz_login);};}else{console[_0x161b('‮61','8JU8')]('\x0a【'+Tips+_0x161b('‮62','TZLA')+$[_0x161b('‮63','%hVd')]+_0x161b('‫64','p8Ed')+result['msg']);}}else{if(_0x2dcc0d[_0x161b('‫65','hz(J')]!==_0x161b('‫66','GcQi')){console['log'](_0x161b('‫67','[TO$'));return;}else{let _0x56eb9e=JSON[_0x161b('‫68','GcQi')](data);if(_0x56eb9e[_0x161b('‮69','di@p')]==0x1){console['log']('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+_0x161b('‮6a','bmkJ')+$['index']+_0x161b('‫6b','GcQi');}else{console[_0x161b('‫4e','atiw')]('\x0a【'+Tips+_0x161b('‫6c','C*i)')+$[_0x161b('‮6d','*FGm')]+_0x161b('‫6e','y$hK')+_0x56eb9e[_0x161b('‫6f','cOsk')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫70','C*i)')]+_0x161b('‮71','7TMI')+_0x56eb9e[_0x161b('‮72','bLBW')];}}}if(notify){if(subTitle){await notify['sendNotify']($[_0x161b('‮73','yGMk')],subTitle);}}})()[_0x161b('‮74','sGq!')](_0x2a8a8a=>$[_0x161b('‮75','hz(J')](_0x2a8a8a))['finally'](()=>$[_0x161b('‮76','bLBW')]());async function implement(){var _0xffc852={'svcgf':function(_0x127760,_0x14bd2d){return _0x127760(_0x14bd2d);},'lCEpq':function(_0x25d3f6,_0xe142fc){return _0x25d3f6*_0xe142fc;},'ewHZH':function(_0x2ab033,_0x539163){return _0x2ab033+_0x539163;},'QqOKj':function(_0x534317,_0x1c0175){return _0x534317*_0x1c0175;},'hngsf':function(_0x2698a1,_0x5d3371){return _0x2698a1+_0x5d3371;},'oAcms':function(_0x2f9a38,_0x7730a0){return _0x2f9a38-_0x7730a0;}};for(let _0x3b12e4=0x2;_0x3b12e4<0xfa;_0x3b12e4++){await _0xffc852['svcgf'](get_money,_0x3b12e4);await $[_0x161b('‫77','@ruH')](_0xffc852[_0x161b('‫78','RUzr')](ggb_num,0x3e8)+Math[_0x161b('‫79','UgpB')](_0xffc852[_0x161b('‫7a','ryo6')](_0xffc852[_0x161b('‮7b','kxkY')](Math[_0x161b('‮7c','atiw')](),_0xffc852[_0x161b('‮7d','m&h4')](_0xffc852['oAcms'](0x1388,0x3e8),0x3e8)),0x3e8)));}await ggb_index();}function ggb_index(){var _0x30d180={'oafTe':function(_0x876cca,_0x26c883){return _0x876cca===_0x26c883;},'SBxgi':_0x161b('‮7e','GcQi'),'HSvsT':function(_0x40dae5,_0x30d5bc){return _0x40dae5==_0x30d5bc;},'IRocp':function(_0x5219b7,_0x29d476){return _0x5219b7/_0x29d476;},'vfWPT':function(_0xde7e06,_0x1194e1,_0x50ea3f){return _0xde7e06(_0x1194e1,_0x50ea3f);}};let _0x5d3fe2=_0x30d180[_0x161b('‮7f','GXxk')](Post_request,_0x161b('‮80','NZZ*'),_0x161b('‮81','Jm85'));return new Promise((_0x252da7,_0x350784)=>{var _0x428c86={'HJsmJ':function(_0x1c095f,_0x3a43bf){return _0x30d180['oafTe'](_0x1c095f,_0x3a43bf);},'PeSMf':_0x30d180['SBxgi'],'ksDeo':_0x161b('‮82','Z8mL'),'VXkSK':function(_0x477115,_0x22018c){return _0x30d180['HSvsT'](_0x477115,_0x22018c);},'LLUoC':function(_0x5e12de,_0x12d1c0){return _0x30d180['IRocp'](_0x5e12de,_0x12d1c0);},'yYIyH':'aJOhL','iUYyV':function(_0x5f548c){return _0x5f548c();}};$['post'](_0x5d3fe2,async(_0x3a17d2,_0x21ad5d,_0x2db906)=>{try{if(_0x428c86[_0x161b('‫83','y$hK')](_0x161b('‮84','Lws('),_0x428c86[_0x161b('‮85','ryo6')])){console[_0x161b('‮86','eBrI')]('\x0a【'+Tips+_0x161b('‮87','cOsk')+$[_0x161b('‫88','GC%*')]+_0x161b('‫89','Jm85'));subTitle+='\x0a【'+Tips+_0x161b('‫8a','hz(J')+$['index']+'\x20签到】:\x20签到成功~';}else{if(_0x3a17d2){if(_0x161b('‮8b','GcQi')!==_0x428c86[_0x161b('‫8c','di@p')]){console['log']('\x0a【'+Tips+_0x161b('‮8d','1Wii')+$[_0x161b('‫8e','kxkY')]+_0x161b('‮8f','sGq!'));subTitle+='\x0a【'+Tips+_0x161b('‮90','GV]V')+$['index']+_0x161b('‮91','bmkJ');}else{app_soy_ggb_data=process[_0x161b('‫92','UDX(')][_0x161b('‫93','UgpB')][_0x161b('‫94','8JU8')]('\x0a');}}else{let _0x3b4ba7=JSON[_0x161b('‫95','TZLA')](_0x2db906);if(_0x428c86[_0x161b('‫96','atiw')](_0x3b4ba7[_0x161b('‮97','m&h4')],0x1)){money=_0x3b4ba7[_0x161b('‫98','@ruH')][_0x161b('‫99','7TMI')][_0x161b('‫9a','kxkY')];console[_0x161b('‫9b','kxkY')]('\x0a【'+Tips+_0x161b('‮8d','1Wii')+$[_0x161b('‮9c','GXxk')]+'\x20个人信息】:\x20\x0a\x0a---昵称：'+_0x3b4ba7[_0x161b('‮9d','p8Ed')][_0x161b('‫9e','UDX(')][_0x161b('‮9f','uHF^')]+_0x161b('‮a0','UgpB')+_0x3b4ba7[_0x161b('‫a1','f@lQ')][_0x161b('‮a2','UgpB')][_0x161b('‮a3','T#Dx')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫a4','m&h4')]+_0x161b('‫a5','RUzr')+_0x3b4ba7['data']['userinfo'][_0x161b('‮a6','Lws(')]+_0x161b('‫a7','[TO$')+_0x3b4ba7[_0x161b('‮a8','*FGm')][_0x161b('‮a2','UgpB')][_0x161b('‮a9','7TMI')];await withdraw(_0x428c86[_0x161b('‫aa','qCsE')](Math[_0x161b('‮ab','f@lQ')](money*0x64),0x64));}else{console[_0x161b('‫ac','7TMI')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x161b('‮ad','bmkJ')+_0x3b4ba7[_0x161b('‮ae','*FGm')]);}}}}catch(_0x33bffa){if(_0x428c86[_0x161b('‮af','di@p')]!==_0x428c86['yYIyH']){console[_0x161b('‫b0','*FGm')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫b1','aX^%')]+_0x161b('‫b2','GcQi'));subTitle+='\x0a【'+Tips+_0x161b('‮b3','eZ^I')+$[_0x161b('‮b4','^Nj)')]+_0x161b('‮b5','^Nj)');}else{console[_0x161b('‫b6','p8Ed')](_0x33bffa,_0x21ad5d);}}finally{_0x428c86[_0x161b('‫b7','8JU8')](_0x252da7);}});});}function withdraw(_0x22d530){var _0x497f39={'fuNBX':function(_0x4109af,_0x403728){return _0x4109af!==_0x403728;},'SKImK':'YtOlb','ZvzxC':_0x161b('‫b8','!RB8'),'nvJHO':function(_0x1f2202,_0x3b8b3f){return _0x1f2202==_0x3b8b3f;}};let _0x43ae38=Post_request('user/user_withdraw',_0x161b('‫b9','eZ^I')+_0x22d530+'\x22,\x22platform\x22:null}');return new Promise((_0xe43d9b,_0x242484)=>{var _0x1ef652={'Dkgny':function(_0x10c10d,_0x210cd1){return _0x497f39[_0x161b('‫ba','%hVd')](_0x10c10d,_0x210cd1);},'CWoba':_0x497f39[_0x161b('‫bb','f@lQ')],'HriZR':_0x497f39[_0x161b('‫bc','1Wii')],'TlwTk':function(_0x4898f9,_0x502923){return _0x497f39['nvJHO'](_0x4898f9,_0x502923);},'FUJKF':_0x161b('‫bd','[TO$')};$['post'](_0x43ae38,async(_0x23ca03,_0x45884b,_0x504219)=>{try{if(_0x23ca03){console[_0x161b('‮be','Jm85')]('\x0a【'+Tips+_0x161b('‫bf','7TMI')+$[_0x161b('‫c0','!RB8')]+_0x161b('‮c1','atiw'));subTitle+='\x0a【'+Tips+_0x161b('‮c2','GXxk')+$[_0x161b('‫c3','VcQu')]+_0x161b('‮c4','9#Bz');}else{if(_0x1ef652['Dkgny'](_0x1ef652[_0x161b('‮c5','TZLA')],_0x1ef652['HriZR'])){let _0x17a824=JSON['parse'](_0x504219);if(_0x1ef652['TlwTk'](_0x17a824[_0x161b('‮c6','UDX(')],0x1)){console[_0x161b('‮c7','GXxk')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‮c8','qCsE')]+_0x161b('‫c9','f@lQ')+_0x17a824['msg']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫ca','NZZ*')]+'\x20提现】:\x20'+_0x17a824['msg'];}else{if(_0x1ef652['FUJKF']!==_0x161b('‫cb','^Nj)')){console[_0x161b('‫4e','atiw')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‮cc','7TMI')]+_0x161b('‫cd','@ruH'));}else{console[_0x161b('‫ce','p)KP')]('\x0a【'+Tips+_0x161b('‫cf','aX^%')+$[_0x161b('‫d0','p)KP')]+'\x20提现】:\x20'+_0x17a824['msg']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫88','GC%*')]+_0x161b('‮d1','5b#X')+_0x17a824['msg'];}}}else{console[_0x161b('‫43','bmkJ')]('\x0a['+TG_ID+_0x161b('‫d2','f@lQ')+_0x23ca03);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x23ca03;}}}catch(_0x2b12d0){console['log'](_0x2b12d0,_0x45884b);}finally{_0xe43d9b();}});});}function getSignInf(){var _0x34a9f3={'OZPri':function(_0x1dfb62,_0x1e25e3){return _0x1dfb62===_0x1e25e3;},'TUuej':'cIxKQ','UdqNU':'WFHeK','fjvPf':function(_0x51f06c,_0x103c2a){return _0x51f06c!==_0x103c2a;},'yYBSz':function(_0x219a3e,_0x1734c4,_0x3bfeaa){return _0x219a3e(_0x1734c4,_0x3bfeaa);}};let _0x44d047=_0x34a9f3[_0x161b('‫d3','kxkY')](Post_request,_0x161b('‮d4','p)KP'),''+user_index);return new Promise((_0x45d1dc,_0x5efb7b)=>{var _0x28e9b1={'SFkNa':function(_0xf25b5a){return _0xf25b5a();},'BnmNJ':function(_0xa4db0a,_0x2b4d14){return _0x34a9f3[_0x161b('‫d5','TZLA')](_0xa4db0a,_0x2b4d14);},'WLEbh':_0x34a9f3[_0x161b('‮d6','5b#X')],'ZaBcO':_0x34a9f3[_0x161b('‫d7','GXxk')],'HRnfJ':function(_0x5a70cf,_0x5c0fe7){return _0x5a70cf==_0x5c0fe7;},'gbSly':function(_0xf5fa5a,_0x2ff94f){return _0xf5fa5a==_0x2ff94f;},'rpgPJ':_0x161b('‮d8','*FGm'),'vWgxc':function(_0x2afc27,_0x52a59f){return _0x34a9f3[_0x161b('‫d9','%hVd')](_0x2afc27,_0x52a59f);},'jPAMM':'zKVSJ'};$['post'](_0x44d047,async(_0x45c69a,_0xbded1e,_0x2a2a30)=>{if(_0x28e9b1['BnmNJ'](_0x28e9b1['WLEbh'],_0x28e9b1[_0x161b('‮da','GV]V')])){throw new Error(_0x161b('‫db','Jm85'));}else{try{if(_0x45c69a){console[_0x161b('‮dc','@ruH')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫70','C*i)')]+_0x161b('‮dd','atiw'));subTitle+='\x0a【'+Tips+_0x161b('‮de','T#Dx')+$['index']+_0x161b('‫df','kxkY');}else{let _0x24912f=JSON[_0x161b('‮e0','[TO$')](_0x2a2a30);if(_0x28e9b1[_0x161b('‮e1','ydVP')](_0x24912f['code'],0x1)){if(_0x28e9b1[_0x161b('‫e2','8JU8')](_0x24912f[_0x161b('‫e3','bmkJ')][_0x28e9b1[_0x161b('‮e4','bLBW')]],0x0)){await sign();}else{console['log']('\x0a【'+Tips+_0x161b('‫e5','!RB8')+$['index']+_0x161b('‫e6','1Wii'));subTitle+='\x0a【'+Tips+_0x161b('‮b3','eZ^I')+$[_0x161b('‮c8','qCsE')]+_0x161b('‮e7','*FGm');}}else{console['log']('\x0a【'+Tips+_0x161b('‫e8','bLBW')+$[_0x161b('‫e9','1Wii')]+_0x161b('‮ea','hz(J')+_0x24912f[_0x161b('‮ae','*FGm')]);subTitle+='\x0a【'+Tips+_0x161b('‫8a','hz(J')+$[_0x161b('‮eb','ydVP')]+'\x20签到状态】:\x20'+_0x24912f[_0x161b('‫ec','hz(J')];}}}catch(_0x1a59b0){console[_0x161b('‮ed','qCsE')](_0x1a59b0,_0xbded1e);}finally{if(_0x28e9b1[_0x161b('‫ee','cOsk')](_0x28e9b1[_0x161b('‫ef','m0ri')],_0x161b('‮f0','1Wii'))){_0x28e9b1[_0x161b('‫f1','di@p')](_0x45d1dc);}else{_0x28e9b1[_0x161b('‫f2','m&h4')](_0x45d1dc);}}}});});}function sign(){var _0x227aaf={'qlPhw':function(_0x4bec32,_0x41deae){return _0x4bec32===_0x41deae;},'cVlDH':'KKqop','NHTOh':function(_0xe4ad3,_0x480a78){return _0xe4ad3==_0x480a78;},'ckgyy':_0x161b('‮f3','eBrI'),'RxUQL':_0x161b('‮f4','TZLA'),'tUuXC':function(_0x1a52ab){return _0x1a52ab();},'VDknT':function(_0x7beb1d,_0x26f3c0,_0x41961d){return _0x7beb1d(_0x26f3c0,_0x41961d);}};let _0x5ba427=_0x227aaf[_0x161b('‫f5','NZZ*')](Post_request,'shake/sign','{\x22page\x22:null}');return new Promise((_0x2dc585,_0x39d769)=>{var _0x1489b5={'YVHYk':_0x161b('‮f6','atiw')};$[_0x161b('‫f7','ryo6')](_0x5ba427,async(_0x7e934b,_0x15df72,_0x447467)=>{var _0x115db8={'wrfpj':function(_0x4c28ce){return _0x4c28ce();}};if(_0x227aaf[_0x161b('‮f8','%hVd')](_0x227aaf[_0x161b('‮f9','1Wii')],_0x227aaf[_0x161b('‫fa','f@lQ')])){try{if(_0x7e934b){console[_0x161b('‮fb','GC%*')]('\x0a【'+Tips+_0x161b('‮fc','^Nj)')+$[_0x161b('‫88','GC%*')]+'\x20签到】:\x20网络请求失败');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x161b('‮fd','atiw');}else{let _0x528eb3=JSON['parse'](_0x447467);if(_0x227aaf[_0x161b('‮fe','bLBW')](_0x528eb3[_0x161b('‮ff','eBrI')],0x1)){console[_0x161b('‮61','8JU8')]('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+_0x161b('‫bf','7TMI')+$[_0x161b('‫100','T#Dx')]+'\x20签到】:\x20签到成功~';}else{if(_0x227aaf['ckgyy']===_0x227aaf[_0x161b('‫101','ryo6')]){console[_0x161b('‫102','GV]V')]('\x0a【'+Tips+_0x161b('‮c2','GXxk')+$['index']+_0x161b('‫103','kxkY')+_0x528eb3['msg']);subTitle+='\x0a【'+Tips+_0x161b('‫e8','bLBW')+$[_0x161b('‮c8','qCsE')]+'\x20签到】:\x20'+_0x528eb3['msg'];}else{_0x115db8[_0x161b('‫104','7TMI')](_0x2dc585);}}}}catch(_0x5a15a0){console[_0x161b('‮86','eBrI')](_0x5a15a0,_0x15df72);}finally{if(_0x227aaf[_0x161b('‮105','ryo6')](_0x227aaf[_0x161b('‮106','*FGm')],_0x227aaf[_0x161b('‮107','%hVd')])){_0x227aaf[_0x161b('‫108','p8Ed')](_0x2dc585);}else{console[_0x161b('‫25','NZZ*')](_0x161b('‫109','sGq!'));return;}}}else{ggb_UA=_0x1489b5['YVHYk'];}});});}function get_money(_0x5bda64){var _0x45b231={'hRSrZ':_0x161b('‮10a','[TO$'),'VIKha':_0x161b('‮10b','!RB8'),'Shogz':'crypto-js','MCRjB':function(_0x56df31,_0x395fd5){return _0x56df31!==_0x395fd5;},'gOzZL':'EJPMG','FQSWc':_0x161b('‮10c','m&h4'),'KNwnu':'JXpNf','GTmRM':'yAOJE','mFdal':function(_0x21135c){return _0x21135c();},'wahcg':function(_0x44217b,_0xb62b1c){return _0x44217b===_0xb62b1c;},'JPqov':'ZyLBH','TuUnZ':function(_0x5e13e8,_0x1e7ad1,_0x7a9a60){return _0x5e13e8(_0x1e7ad1,_0x7a9a60);}};let _0x29abeb=user_index[_0x161b('‮10d','cOsk')](/替换/g,_0x5bda64);let _0x29a9c6=_0x45b231[_0x161b('‮10e','uHF^')](Post_request,_0x161b('‫10f','ydVP'),_0x29abeb);return new Promise((_0x3cac55,_0x599aa6)=>{var _0x37c6f2={'biYrg':_0x45b231[_0x161b('‮110','@ruH')],'bEiAq':_0x45b231['VIKha'],'MuZUU':_0x45b231[_0x161b('‮111','p)KP')],'htHqE':function(_0x2fe5a1,_0x2693be){return _0x2fe5a1==_0x2693be;},'leEfj':function(_0x2a1cfc,_0x1009e1){return _0x45b231[_0x161b('‫112','m0ri')](_0x2a1cfc,_0x1009e1);},'UDoby':_0x45b231[_0x161b('‫113','RUzr')],'fvJSG':_0x161b('‮114','GC%*'),'aZleS':function(_0x55a387,_0x5b7bea){return _0x55a387===_0x5b7bea;},'AszpM':_0x45b231[_0x161b('‫115','bmkJ')],'uVbPy':_0x45b231[_0x161b('‮116','yGMk')],'gTXEv':_0x45b231[_0x161b('‮117','ryo6')],'fdQRy':function(_0x242fd0,_0x50be42){return _0x45b231[_0x161b('‫118','8JU8')](_0x242fd0,_0x50be42);},'XJcMe':_0x161b('‫119','yGMk'),'ycvUx':function(_0x56002f){return _0x45b231[_0x161b('‫11a','UDX(')](_0x56002f);}};if(_0x45b231[_0x161b('‫11b','aX^%')](_0x45b231['JPqov'],_0x45b231[_0x161b('‫11c','UgpB')])){$[_0x161b('‫11d','Lws(')](_0x29a9c6,async(_0x51b942,_0x165526,_0x8d1575)=>{var _0x2952cc={'tWfyF':function(_0x5c9ea4,_0x37f4df){return _0x37c6f2['htHqE'](_0x5c9ea4,_0x37f4df);}};if(_0x37c6f2['leEfj'](_0x37c6f2[_0x161b('‫11e','aX^%')],'ZrfTB')){try{if(_0x37c6f2[_0x161b('‫11f','yGMk')]===_0x161b('‫120','eBrI')){var _0x3f6029=path[_0x161b('‫121','!RB8')](_0x37c6f2[_0x161b('‫122','eBrI')],dev,_0x37c6f2['bEiAq']);if(dev[_0x161b('‮123','bmkJ')](0x0,0x3)==_0x161b('‮124','bLBW')&&fs[_0x161b('‮125','UgpB')](_0x3f6029)){macs=fs[_0x161b('‮126','!RB8')](_0x3f6029)[_0x161b('‮127','m0ri')]()[_0x161b('‮128','Z8mL')]();};}else{if(_0x51b942){if(_0x37c6f2[_0x161b('‮129','Jm85')](_0x161b('‫12a','7TMI'),_0x37c6f2['AszpM'])){console[_0x161b('‮12b','5b#X')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‮12c','#zxn')]+_0x161b('‮12d','di@p'));}else{console[_0x161b('‫9b','kxkY')]('\x0a['+TG_ID+_0x161b('‮12e','bLBW')+result[_0x161b('‫12f','aX^%')]+'，该TG_ID/设备/IP已被注册');return![];}}else{let _0x266abd=JSON[_0x161b('‮130','p8Ed')](_0x8d1575);if(_0x37c6f2[_0x161b('‫131','%jbY')](_0x266abd['code'],0x1)){if(_0x266abd[_0x161b('‮132','Z8mL')]==null){if(_0x37c6f2[_0x161b('‮133','m0ri')](_0x37c6f2[_0x161b('‮134','T#Dx')],_0x37c6f2[_0x161b('‮135','cOsk')])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x161b('‮136','NZZ*')+_0x5bda64+'次没有获取到红包');}else{CryptoJs=$[_0x161b('‮137','[TO$')]()?require(_0x37c6f2['MuZUU']):'';}}else{console['log']('\x0a【'+Tips+_0x161b('‮fc','^Nj)')+$[_0x161b('‫5f','%jbY')]+_0x161b('‫138','UgpB')+_0x5bda64+_0x161b('‫139','eBrI')+_0x266abd[_0x161b('‮13a','cOsk')][_0x161b('‫13b','atiw')]+'红包');}}else{if(_0x37c6f2[_0x161b('‮13c','y$hK')](_0x37c6f2[_0x161b('‮13d','p)KP')],_0x161b('‮13e','VcQu'))){let _0x36c5b0=JSON[_0x161b('‮13f','GV]V')](_0x8d1575);if(_0x2952cc[_0x161b('‮140','atiw')](_0x36c5b0['code'],0xc8)){console[_0x161b('‫ac','7TMI')]('\x0a['+TG_ID+_0x161b('‫141','RUzr')+_0x36c5b0['msg']+'，脚本已正常使用');return![];}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x36c5b0[_0x161b('‮142','atiw')]);subTitle+='\x0a['+TG_ID+_0x161b('‫143','sGq!')+_0x36c5b0['msg'];return![];}}else{console['log']('\x0a【'+Tips+_0x161b('‫144','RUzr')+$[_0x161b('‫70','C*i)')]+_0x161b('‮145','f@lQ')+_0x266abd['msg']);}}}}}catch(_0x4319df){console[_0x161b('‮e','m0ri')](_0x4319df,_0x165526);}finally{_0x37c6f2[_0x161b('‫146','uHF^')](_0x3cac55);}}else{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}});}else{console[_0x161b('‮e','m0ri')]('\x0a['+TG_ID+_0x161b('‫147','9#Bz')+result[_0x161b('‮148','p8Ed')]);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+result[_0x161b('‮149','qCsE')];return![];}});}function Get_request(_0xf5602d){var _0x18905c={'aJPLB':_0x161b('‫14a','%jbY'),'pcSnX':_0x161b('‫14b','T#Dx'),'mkPmR':_0x161b('‮14c','GC%*')};return{'url':'https://ggb.culink.vip/api/'+_0xf5602d,'headers':{'user-agent':_0x161b('‫14d','aX^%'),'content-type':_0x18905c['aJPLB'],'accept-encoding':_0x18905c[_0x161b('‮14e','7TMI')],'content-length':0x0,'token':ggb_token,'host':_0x18905c[_0x161b('‮14f','%hVd')]}};};function Post_request(_0x1940ac,_0x199e60){var _0x4f5c41={'kqQjW':'Dart/2.16\x20(dart:io)','Qgojl':_0x161b('‫150','sGq!')};return{'url':_0x161b('‮151','yGMk')+_0x1940ac,'headers':{'user-agent':_0x4f5c41[_0x161b('‫152','yGMk')],'Content-Type':_0x4f5c41[_0x161b('‮153','yGMk')],'accept-encoding':'gzip','content-length':_0x199e60[_0x161b('‫154','*FGm')],'token':ggb_token,'host':_0x161b('‫155','UgpB')},'body':_0x199e60};};function formatDate(){var _0xd91e4a={'oAugd':function(_0x4e41c9,_0x28f5c5){return _0x4e41c9<_0x28f5c5;},'KPYlZ':function(_0x5d0b00,_0x2cb2c1){return _0x5d0b00+_0x2cb2c1;}};let _0x4a4c3e=new Date();let _0x4a5067=_0x4a4c3e[_0x161b('‮156','5b#X')]();let _0x3707d2=_0x4a4c3e[_0x161b('‮157','sGq!')]()+0x1;let _0x7f141a=_0x4a4c3e['getDate']();_0x3707d2=_0xd91e4a[_0x161b('‫158','cOsk')](_0x3707d2,0xa)?_0xd91e4a[_0x161b('‫159','C*i)')]('0',_0x3707d2):_0x3707d2;_0x7f141a=_0xd91e4a[_0x161b('‮15a','@ruH')](_0x7f141a,0xa)?'0'+_0x7f141a:_0x7f141a;return _0x4a5067+'/'+_0x3707d2+'/'+_0x7f141a;};async function yyz_login(){var _0x43e1fb={'yalgW':'gzip','HvUbF':_0x161b('‫15b','eZ^I'),'sOqno':function(_0x1765ab){return _0x1765ab();},'OXRxR':function(_0x27930a,_0x151c36){return _0x27930a===_0x151c36;},'yiOek':function(_0x17701f,_0x136d7e){return _0x17701f!==_0x136d7e;},'Roovc':_0x161b('‫15c','[TO$'),'qTEpu':_0x161b('‫15d','GcQi'),'uwrng':'mJxKj','FzXMe':function(_0x78d758,_0x73ab10){return _0x78d758/_0x73ab10;},'tczSb':function(_0x2236c4,_0x288ff4){return _0x2236c4+_0x288ff4;},'kUJxc':_0x161b('‫15e','*FGm')};var _0x5cf4cc=Math[_0x161b('‮15f','eBrI')](_0x43e1fb[_0x161b('‫160','y$hK')](Date[_0x161b('‮161','GXxk')](),0x3e8));var _0x566196=CryptoJs[_0x161b('‫162','y$hK')](''+TG_ID+mac+os[_0x161b('‮163','f@lQ')]()+YZ)[_0x161b('‮164','T#Dx')]();var _0x5a66fb=_0x161b('‫165','*FGm')+TG_ID+_0x161b('‮166','bLBW')+_0x566196+_0x161b('‫167','@ruH')+_0x5cf4cc;var _0x3dd080=CryptoJs[_0x161b('‮168','*FGm')](_0x43e1fb[_0x161b('‮169','GXxk')](_0x5a66fb,'&')+appid)[_0x161b('‮16a','bLBW')]();_0x5a66fb=_0x43e1fb['tczSb'](_0x43e1fb[_0x161b('‫16b','bmkJ')](_0x5a66fb,_0x161b('‮16c','di@p')),_0x3dd080);let _0x3afd5e={'url':serverUrl+_0x161b('‮16d','UgpB'),'headers':{'user-agent':_0x43e1fb[_0x161b('‮16e','p8Ed')]},'body':_0x5a66fb};return new Promise((_0x273d21,_0x3ff6bb)=>{var _0x177d10={'McwOO':_0x161b('‫16f','@ruH'),'TkpLZ':_0x43e1fb[_0x161b('‮170','UgpB')],'dVuUy':_0x43e1fb[_0x161b('‮171','UgpB')],'jpVwn':function(_0x383b59){return _0x43e1fb[_0x161b('‮172','#zxn')](_0x383b59);},'VNHdQ':function(_0xda8090,_0x104707){return _0x43e1fb['OXRxR'](_0xda8090,_0x104707);},'MoDHm':function(_0x3fefe5,_0x25b14e){return _0x43e1fb[_0x161b('‫173','p8Ed')](_0x3fefe5,_0x25b14e);},'NOFks':_0x43e1fb['Roovc'],'FPzfK':'jnfbw','GFUMX':function(_0x389917,_0x4147dd){return _0x389917(_0x4147dd);},'dKmFa':_0x43e1fb[_0x161b('‫174','uHF^')],'CESJD':function(_0x573303,_0x3766c0){return _0x573303===_0x3766c0;},'QspNw':_0x43e1fb[_0x161b('‫175','Jm85')],'BDNxn':function(_0x1af646){return _0x43e1fb['sOqno'](_0x1af646);}};$['post'](_0x3afd5e,async(_0x5f1dea,_0x5e97b8,_0x284d37)=>{var _0x3471c7={'cqSRh':function(_0x1a64df){return _0x177d10[_0x161b('‮176','[TO$')](_0x1a64df);}};if(_0x177d10[_0x161b('‫177','yGMk')](_0x161b('‮178','Jm85'),_0x161b('‮179','!RB8'))){return{'url':_0x161b('‮17a','GcQi')+url,'headers':{'user-agent':_0x161b('‫17b','@ruH'),'Content-Type':_0x177d10[_0x161b('‮17c','GC%*')],'accept-encoding':_0x177d10[_0x161b('‫17d','qCsE')],'content-length':body[_0x161b('‮17e','Jm85')],'token':ggb_token,'host':_0x177d10[_0x161b('‮17f','7TMI')]},'body':body};}else{try{if(_0x5f1dea){if(_0x177d10[_0x161b('‫180','Z8mL')](_0x177d10[_0x161b('‮181','sGq!')],_0x177d10['FPzfK'])){console[_0x161b('‮58','%hVd')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x5f1dea);subTitle+='\x0a['+TG_ID+_0x161b('‫182','1Wii')+_0x5f1dea;}else{_0x3471c7['cqSRh'](_0x273d21);}}else{let _0x29a9a3=JSON[_0x161b('‮183','5b#X')](_0x284d37);if(_0x29a9a3[_0x161b('‫184','uHF^')]==0xc8){let _0x3e107b=_0x177d10[_0x161b('‮185','kxkY')](Format_time,_0x29a9a3[_0x161b('‫186','5b#X')][_0x161b('‫187','m0ri')][_0x161b('‮188','C*i)')]);console[_0x161b('‮189','RUzr')]('\x0a['+TG_ID+_0x161b('‫18a','GXxk')+_0x3e107b);await get_vip(_0x29a9a3['msg'][_0x161b('‫18b','GcQi')]);}else if(_0x29a9a3[_0x161b('‫18c','y$hK')]==0x71){await _0x177d10['jpVwn'](yyz_user_reg);}else{if(_0x177d10[_0x161b('‫18d','f@lQ')](_0x177d10['dKmFa'],_0x161b('‮18e','eBrI'))){console[_0x161b('‮189','RUzr')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x29a9a3[_0x161b('‮148','p8Ed')]);subTitle+='\x0a['+TG_ID+_0x161b('‫18f','GC%*')+_0x29a9a3[_0x161b('‫190','@ruH')];return![];}else{console[_0x161b('‫ac','7TMI')](e,_0x5e97b8);}}}}catch(_0x22ae69){console[_0x161b('‮ed','qCsE')](_0x22ae69);}finally{if(_0x177d10[_0x161b('‮191','UgpB')](_0x177d10[_0x161b('‮192','@ruH')],_0x161b('‮193','*FGm'))){console[_0x161b('‫194','Z8mL')]('\x0a['+TG_ID+_0x161b('‮195','T#Dx')+_0x5f1dea);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x5f1dea;}else{_0x177d10['BDNxn'](_0x273d21);}}}});});}async function yyz_user_reg(){var _0xa852db={'ZfTMi':_0x161b('‮196','GXxk'),'scqRs':function(_0x19f91a,_0x5eb0bc){return _0x19f91a!==_0x5eb0bc;},'GoSjy':_0x161b('‮197','GcQi'),'PyosU':_0x161b('‫198','hz(J'),'jxfrk':function(_0x26fb1b,_0x5ee9f7){return _0x26fb1b==_0x5ee9f7;},'PtMMV':'ttcsA','WrTFQ':function(_0x69715c){return _0x69715c();},'CPFvz':function(_0x26be01,_0x1c456e){return _0x26be01&&_0x1c456e;},'JgubO':function(_0x37291f,_0x5b09e1){return _0x37291f+_0x5b09e1;},'zmsWB':function(_0x705f26,_0x576c73){return _0x705f26+_0x576c73;},'KnsHO':'&sign=','UXilT':_0x161b('‮199','eBrI')};if(_0xa852db[_0x161b('‮19a','[TO$')](!Tips,!YZ)){console[_0x161b('‮12b','5b#X')]('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}var _0x4d704d=Math[_0x161b('‫19b','yGMk')](Date[_0x161b('‫19c','bLBW')]()/0x3e8);var _0x4a5463=CryptoJs[_0x161b('‮19d','^Nj)')](''+TG_ID+mac+os[_0x161b('‫19e','Jm85')]()+YZ)[_0x161b('‫19f','uHF^')]();var _0x2f798a=_0x161b('‫1a0','1Wii')+TG_ID+_0x161b('‫1a1','bmkJ')+_0x4a5463+'&t='+_0x4d704d;var _0x1874f9=CryptoJs[_0x161b('‫1a2','hz(J')](_0xa852db[_0x161b('‫1a3','8JU8')](_0xa852db[_0x161b('‫1a4','%hVd')](_0x2f798a,'&'),appid))['toString']();_0x2f798a=_0xa852db[_0x161b('‮1a5','RUzr')](_0xa852db[_0x161b('‫1a6','GXxk')](_0x2f798a,_0xa852db[_0x161b('‮1a7','5b#X')]),_0x1874f9);let _0x3c2cba={'url':serverUrl+_0x161b('‫1a8','!RB8'),'headers':{'user-agent':_0xa852db[_0x161b('‫1a9','Lws(')]},'body':_0x2f798a};return new Promise((_0xdc5503,_0x4790ce)=>{var _0x366d3c={'XFgoD':function(_0x31328b,_0x2a6877){return _0x31328b===_0x2a6877;},'RFNcT':_0xa852db['ZfTMi'],'kwAxY':function(_0x1eb9b4,_0x1c786f){return _0xa852db[_0x161b('‮1aa','qCsE')](_0x1eb9b4,_0x1c786f);},'XNadG':_0xa852db[_0x161b('‫1ab','5b#X')],'gzXxq':_0xa852db[_0x161b('‫1ac','Lws(')],'ivINJ':function(_0x25db44,_0x2a5bed){return _0xa852db[_0x161b('‮1ad','NZZ*')](_0x25db44,_0x2a5bed);},'WZASA':_0xa852db[_0x161b('‫1ae','qCsE')],'hIGon':function(_0x5d48c4){return _0x5d48c4();},'hiOie':function(_0x5166be){return _0xa852db[_0x161b('‫1af','1Wii')](_0x5166be);}};$[_0x161b('‮1b0','bmkJ')](_0x3c2cba,async(_0x1453ca,_0x5296fe,_0xe11f3c)=>{try{if(_0x366d3c[_0x161b('‮1b1','f@lQ')](_0x366d3c['RFNcT'],_0x161b('‫1b2','GV]V'))){console['log'](e);}else{if(_0x1453ca){if(_0x366d3c[_0x161b('‮1b3','1Wii')](_0x366d3c[_0x161b('‫1b4','m0ri')],_0x366d3c[_0x161b('‮1b5','NZZ*')])){console[_0x161b('‮1b6','C*i)')]('\x0a['+TG_ID+_0x161b('‮1b7','TZLA')+_0x1453ca);subTitle+='\x0a['+TG_ID+_0x161b('‮1b8','ryo6')+_0x1453ca;}else{console[_0x161b('‮1b9','cOsk')]('\x0a【'+Tips+_0x161b('‮1ba','y$hK')+$['index']+'\x20提现】:\x20'+result[_0x161b('‫186','5b#X')]);subTitle+='\x0a【'+Tips+_0x161b('‮1bb','uHF^')+$[_0x161b('‫1bc','cOsk')]+_0x161b('‫1bd','p8Ed')+result[_0x161b('‮148','p8Ed')];}}else{let _0x3752b8=JSON['parse'](_0xe11f3c);if(_0x366d3c[_0x161b('‫1be','cOsk')](_0x3752b8['code'],0xc8)){if(_0x366d3c[_0x161b('‮1bf','UgpB')](_0x366d3c[_0x161b('‮1c0','GXxk')],_0x161b('‫1c1','8JU8'))){await _0x366d3c[_0x161b('‮1c2','GcQi')](yyz_login);}else{console[_0x161b('‮c7','GXxk')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫46','TZLA')]+'\x20观看视频】:\x20第'+num+_0x161b('‫1c3','GC%*'));}}else if(_0x366d3c[_0x161b('‮1c4','GV]V')](_0x3752b8['code'],0x75)){console[_0x161b('‫4e','atiw')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x3752b8['msg']+_0x161b('‮1c5','sGq!'));return![];}else{if(_0x366d3c[_0x161b('‮1c6','@ruH')](_0x161b('‫1c7','UDX('),_0x161b('‮1c8','yGMk'))){throw new Error(_0x161b('‫1c9','kxkY'));}else{console['log']('\x0a['+TG_ID+_0x161b('‫1ca','%hVd')+_0x3752b8[_0x161b('‮1cb','uHF^')]);subTitle+='\x0a['+TG_ID+_0x161b('‮1cc','hz(J')+_0x3752b8[_0x161b('‮1cd','UDX(')];return![];}}}}}catch(_0x418c51){console['log'](_0x418c51);}finally{_0x366d3c[_0x161b('‫1ce','m0ri')](_0xdc5503);}});});}async function get_vip(_0x4f5735){var _0x57815b={'tgJGM':function(_0x2e4308,_0x56fad4){return _0x2e4308!==_0x56fad4;},'WdXsm':'rEmrq','uQWeq':_0x161b('‫1cf','cOsk'),'HplIa':function(_0x1ef22a,_0x1eb6c6){return _0x1ef22a==_0x1eb6c6;},'JzwWF':function(_0x3046da,_0x2200cd){return _0x3046da===_0x2200cd;},'yKViP':'OVHhQ','nxsAz':'GPaqL','jgSjC':function(_0x2940d0,_0x1c0c7f){return _0x2940d0(_0x1c0c7f);},'IBoPS':function(_0x1c13dc){return _0x1c13dc();},'sZeiK':function(_0x294c97,_0x3c16f1){return _0x294c97+_0x3c16f1;},'jsyAn':function(_0x2e5dd5,_0x32172b){return _0x2e5dd5+_0x32172b;},'XtBur':function(_0x473055,_0x49eb7f){return _0x473055+_0x49eb7f;},'oTbsD':_0x161b('‮1d0','GXxk'),'vNDEl':_0x161b('‫1d1','%jbY')};var _0x2b07b3=Math[_0x161b('‫1d2','T#Dx')](Date[_0x161b('‫1d3','UgpB')]()/0x3e8);var _0x2a9ac4=_0x161b('‫1d4','%hVd')+user_num+_0x161b('‫1d5','Lws(')+_0x4f5735+_0x161b('‮1d6','TZLA')+_0x2b07b3;var _0x46d87a=CryptoJs[_0x161b('‫1d7','GV]V')](_0x57815b[_0x161b('‮1d8','[TO$')](_0x57815b[_0x161b('‫1d9','7TMI')](_0x2a9ac4,'&'),appid))[_0x161b('‮1da','eZ^I')]();_0x2a9ac4=_0x57815b[_0x161b('‮1db','m&h4')](_0x2a9ac4,_0x57815b[_0x161b('‮1dc','ryo6')])+_0x46d87a;let _0xe8fc75={'url':serverUrl+_0x161b('‮1dd','5b#X'),'headers':{'user-agent':_0x57815b['vNDEl']},'body':_0x2a9ac4};return new Promise((_0xec0315,_0x9fe74d)=>{var _0x1b9311={'TIrPA':function(_0x51d891,_0x53bed4){return _0x57815b[_0x161b('‮1de','eBrI')](_0x51d891,_0x53bed4);},'HpAEf':_0x57815b[_0x161b('‮1df','*FGm')],'FAyPz':_0x57815b[_0x161b('‮1e0','Jm85')],'yCCbw':function(_0x472931,_0x57b718){return _0x57815b['HplIa'](_0x472931,_0x57b718);},'tztJH':function(_0x4e6331){return _0x4e6331();},'Yvpve':function(_0x5cab1e,_0x3f9a42){return _0x57815b['JzwWF'](_0x5cab1e,_0x3f9a42);},'zOCwt':_0x161b('‮1e1','hz(J'),'WvksE':_0x57815b[_0x161b('‫1e2','eBrI')],'yDlUG':_0x57815b['nxsAz'],'sHZFF':function(_0x8db7d,_0xac365){return _0x57815b[_0x161b('‮1e3','bLBW')](_0x8db7d,_0xac365);},'GMXEw':function(_0x374bc6,_0x2f3673){return _0x57815b['JzwWF'](_0x374bc6,_0x2f3673);},'rKoCn':_0x161b('‫1e4','Z8mL'),'TtHJJ':function(_0x2c0137){return _0x57815b[_0x161b('‮1e5','!RB8')](_0x2c0137);}};$['post'](_0xe8fc75,async(_0x2ec2bc,_0x174cad,_0xf1420f)=>{if(_0x1b9311[_0x161b('‫1e6','di@p')](_0x1b9311['HpAEf'],_0x1b9311['FAyPz'])){try{if(_0x2ec2bc){console['log']('\x0a['+TG_ID+_0x161b('‫1e7','8JU8')+_0x2ec2bc);subTitle+='\x0a['+TG_ID+_0x161b('‮1e8','GcQi')+_0x2ec2bc;}else{let _0x149b97=JSON[_0x161b('‮1e9','m0ri')](_0xf1420f);if(_0x1b9311[_0x161b('‮1ea','kxkY')](_0x149b97[_0x161b('‮97','m&h4')],0xc8)){user_index=_0x149b97['msg'];await _0x1b9311['tztJH'](implement);}else{if(_0x1b9311['Yvpve'](_0x1b9311[_0x161b('‮1eb','f@lQ')],_0x1b9311['WvksE'])){console[_0x161b('‮1ec','y$hK')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x161b('‫1ed','hz(J')]+_0x161b('‫1ee','aX^%'));subTitle+='\x0a【'+Tips+_0x161b('‮1ef','kxkY')+$['index']+_0x161b('‫1f0','9#Bz');}else{if(yyz_Kami){if(_0x1b9311[_0x161b('‫1f1','hz(J')]!==_0x1b9311[_0x161b('‫1f2','GV]V')]){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x161b('‫1f3','GC%*')+_0x149b97[_0x161b('‫1f4','di@p')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x161b('‫1f5','UgpB')+_0x149b97['msg'];}else{await _0x1b9311['sHZFF'](card,_0x4f5735);}}else{console[_0x161b('‫1f6','^Nj)')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+_0x161b('‮1f7','atiw');return![];}}}}}catch(_0x3f9944){console[_0x161b('‮1f8','ydVP')](_0x3f9944);}finally{if(_0x1b9311[_0x161b('‫1f9','Lws(')]('nvIfo',_0x1b9311['rKoCn'])){_0x1b9311[_0x161b('‫1fa','GcQi')](_0xec0315);}else{console[_0x161b('‮58','%hVd')](e,_0x174cad);}}}else{console[_0x161b('‮be','Jm85')](_0x161b('‫1fb','ryo6'));return![];}});});}async function card(_0x25e8f2){var _0x471df4={'mQoTF':function(_0xdb5222){return _0xdb5222();},'bNTEC':function(_0x5de939,_0x1d969f){return _0x5de939===_0x1d969f;},'IBOgN':_0x161b('‫1fc','y$hK'),'uQjQb':function(_0x27f9eb,_0x597c19){return _0x27f9eb!==_0x597c19;},'fWdKV':'QOcOy','FgvkJ':function(_0x110aad,_0x1a40b0){return _0x110aad==_0x1a40b0;},'gDNMg':_0x161b('‮1fd','p)KP'),'sfnhc':_0x161b('‫1fe','GcQi'),'ofmwQ':function(_0x29be9a,_0x48ca48){return _0x29be9a/_0x48ca48;},'IuQcM':function(_0x59a354,_0x3db20d){return _0x59a354+_0x3db20d;},'IbbLO':function(_0x46124c,_0x4b1a9f){return _0x46124c+_0x4b1a9f;},'HVVEf':_0x161b('‮1ff','ydVP'),'LZPPJ':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x161b('‫43','bmkJ')](yyz_Kami);var _0x125baf=Math['floor'](_0x471df4[_0x161b('‮200','kxkY')](Date[_0x161b('‮201','1Wii')](),0x3e8));var _0x2d5378=_0x161b('‫202','ryo6')+_0x25e8f2+'&kami='+yyz_Kami+_0x161b('‮203','[TO$')+_0x125baf;var _0x5cf219=CryptoJs[_0x161b('‫204','Z8mL')](_0x471df4[_0x161b('‫205','GXxk')](_0x471df4[_0x161b('‫206','eZ^I')](_0x2d5378,'&'),appid))[_0x161b('‫207','UgpB')]();_0x2d5378=_0x471df4[_0x161b('‮208','aX^%')](_0x2d5378+_0x471df4[_0x161b('‮209','VcQu')],_0x5cf219);let _0x2a7801={'url':serverUrl+_0x161b('‮20a','@ruH'),'headers':{'user-agent':_0x471df4[_0x161b('‮20b','y$hK')]},'body':_0x2d5378};return new Promise((_0x4b3196,_0x53a73f)=>{if(_0x471df4['sfnhc']===_0x471df4[_0x161b('‮20c','*FGm')]){$[_0x161b('‮20d','UDX(')](_0x2a7801,async(_0x1f964e,_0x353ae2,_0x227c36)=>{var _0x22e14c={'VTVGS':function(_0x18b61d){return _0x471df4[_0x161b('‮20e','hz(J')](_0x18b61d);}};if(_0x471df4[_0x161b('‮20f','hz(J')](_0x471df4['IBOgN'],_0x471df4[_0x161b('‮210','di@p')])){try{if(_0x471df4['uQjQb'](_0x471df4[_0x161b('‫211','uHF^')],_0x471df4[_0x161b('‮212','m0ri')])){_0x22e14c[_0x161b('‮213','Z8mL')](_0x4b3196);}else{if(_0x1f964e){console[_0x161b('‫214','aX^%')]('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x1f964e);subTitle+='\x0a['+TG_ID+_0x161b('‮215','bLBW')+_0x1f964e;}else{let _0x4833dd=JSON[_0x161b('‮216','m&h4')](_0x227c36);if(_0x471df4['FgvkJ'](_0x4833dd['code'],0xc8)){console[_0x161b('‮61','8JU8')]('\x0a['+TG_ID+_0x161b('‮217','GC%*')+_0x4833dd[_0x161b('‫218','!RB8')]+_0x161b('‮219','VcQu'));return![];}else{if(_0x471df4['gDNMg']===_0x161b('‫21a','yGMk')){console['log']('\x0a【'+Tips+_0x161b('‮90','GV]V')+$[_0x161b('‮21b','yGMk')]+_0x161b('‮21c','Z8mL'));subTitle+='\x0a【'+Tips+_0x161b('‫e8','bLBW')+$[_0x161b('‮eb','ydVP')]+_0x161b('‫21d','8JU8');}else{console['log']('\x0a['+TG_ID+_0x161b('‮21e','GV]V')+_0x4833dd[_0x161b('‮21f','kxkY')]);subTitle+='\x0a['+TG_ID+_0x161b('‫220','Z8mL')+_0x4833dd['msg'];return![];}}}}}catch(_0x221e5c){console[_0x161b('‮ed','qCsE')](_0x221e5c);}finally{_0x4b3196();}}else{console[_0x161b('‮189','RUzr')](e);}});}else{console[_0x161b('‫b0','*FGm')](e);}});}function Format_time(_0x49a7ed){var _0x32ca16={'dtNIA':function(_0x5c3e05,_0x5dbc76){return _0x5c3e05*_0x5dbc76;},'spwPy':function(_0x129c7a,_0x1a13a6){return _0x129c7a+_0x1a13a6;},'NMfRC':function(_0x3a4316,_0x1d3d84){return _0x3a4316+_0x1d3d84;},'BBwpc':function(_0x36841f,_0x97288){return _0x36841f+_0x97288;},'dQukB':function(_0x3c99e6,_0x30ed73){return _0x3c99e6+_0x30ed73;},'qQsLQ':function(_0x198c0e,_0x182dd5){return _0x198c0e+_0x182dd5;},'seiEU':function(_0x2db7bb,_0x28d706){return _0x2db7bb+_0x28d706;},'UxZQQ':function(_0x2ba21e,_0x2e2fc1){return _0x2ba21e+_0x2e2fc1;}};var _0x2e776b=new Date(_0x32ca16[_0x161b('‮221','NZZ*')](_0x49a7ed,0x3e8));var _0x1c909b=_0x32ca16[_0x161b('‫222','T#Dx')](_0x2e776b[_0x161b('‮223','VcQu')](),'-');var _0x1e2382=_0x32ca16[_0x161b('‮224','p)KP')](_0x32ca16[_0x161b('‫225','^Nj)')](_0x2e776b[_0x161b('‮226','%jbY')](),0x1)<0xa?_0x32ca16['BBwpc']('0',_0x2e776b[_0x161b('‮227','p)KP')]()+0x1):_0x32ca16[_0x161b('‮228','T#Dx')](_0x2e776b[_0x161b('‮229','@ruH')](),0x1),'-');var _0x173ee8=_0x32ca16[_0x161b('‮22a','%hVd')](_0x2e776b[_0x161b('‮22b','y$hK')](),'\x20');var _0x137d13=_0x2e776b['getHours']()+':';var _0x202043=_0x32ca16[_0x161b('‮22c','!RB8')](_0x2e776b[_0x161b('‮22d','NZZ*')]()<0xa?_0x32ca16[_0x161b('‫22e','RUzr')]('0',_0x2e776b[_0x161b('‫22f','!RB8')]()):_0x2e776b[_0x161b('‫230','%jbY')](),':');var _0x4a7909=_0x2e776b['getSeconds']();let _0x4120ce=_0x32ca16[_0x161b('‫231','GC%*')](_0x32ca16[_0x161b('‫232','hz(J')](_0x32ca16[_0x161b('‮233','#zxn')](_0x32ca16['UxZQQ'](_0x1c909b,_0x1e2382),_0x173ee8)+_0x137d13,_0x202043),_0x4a7909);return _0x32ca16[_0x161b('‫234','7TMI')](_0x32ca16['UxZQQ'](_0x32ca16[_0x161b('‮235','aX^%')](_0x1c909b+_0x1e2382,_0x173ee8),_0x137d13),_0x202043)+_0x4a7909;};_0xodZ='jsjiami.com.v6';


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