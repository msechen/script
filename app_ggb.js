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


var _0xod6='jsjiami.com.v6',_0xod6_=['‮_0xod6'],_0x86a6=[_0xod6,'FE/DoA4w','w4EgM2LDjg==','wqHCpDV7','WMOGDQ==','acKTSuS8n+eUgOWOoeWtjsOKdw==','w6p9wr0=','wq7CpDY=','W0No5L6455e65Y+l5ayWwonDgQ==','O0g+','w7gDwpbkvIfnlIjljqLlraQXLw==','wq/CuDY=','wo1vXMOnwpU=','E8KvFMOMQQ==','IEjDrA==','5o2156SqfQxn6LWl5Y27MA==','f+S7q+S7pOS9qeaBrOOCq1HDg+e8q+e5nOitiuawnuWkkei0hQ==','5o2b56evSMKtw5Xot7Tlj598','ScKhZwvCmQ==','wrzkuITkuLnkvbjmgbjjgr/CohznvbHnuqHorJPmsLLlpazot6g=','w7VjwoXCusKo','V8OGw63DiEc=','w6vCu1Ec','O8KgKsOp','cwotwrXCu8OqwrbDnA==','ByPDu3vCpA==','5o++56ekV8Khw7DotLTljpzCqg==','R8KwHsOpwqU=','OVTDrh0xw4I9w4c=','woY3OeS8t+mik++9oA==','asK4LzE=','YDMew7BW','dsOHZMO1wqA=','w7DkuJnkuoXkv5rmgYXjgZ1aw7coP8OqP+aZouelsO+/lg==','wrTCuwVVwrg6Z1k=','asOaZcOiwrHDn1vCoA==','woxLw7jDlVw=','wpt3Rl9h','S8KuRwnCsw==','SMKyFcOjwq8=','w5B8w4FQw4g=','FEMiMhA=','fcOfAg9K','QMK/F8Op','44K077yj5p6c5aCT5Ya555i75bi25Y+16YeAwqjDmTvDsHI9wpAMw5Atw5vCnsOx','woUIwr7DnSA=','woXkuLrku6rkv4DmgKXjgZLCtjA=','w4PCqC8=','woMtwqc=','RFXDuA==','ZyYdw6N1','aMKfw4PCsEw=','w7Fdw5DDvXE=','ecKewoVPwr4=','wphQw6fDsXjCqTjCh8OLBcOBG8KBeVTCtzjDhsOZQzXCnzAuwojDgMKDwrojG2Y=','wprDhA4p','wrlRbsKswrrCsWzDtMKHwootfsOzdw==','w7zClwzDicK0','w4Rpwo3CiMK8','ZsOwAQh+','w5XDuS9HWXE1UUnCsxDDlcOdMMKWwpsWKsK0w4VCEsKicxAbXjHCocOA','PmzDgR4i','wo9nw7XDklM=','w75fw756w4A=','LhxdwpzCuQ==','wrxYw7MK','Q13DlMKfw7o=','w6xpwpHClHU=','wpBuccK/Hg==','w5Jwwq7ChMKj','FcKTTSYV','wr9Cw6LDhFg=','MV4qMAc=','U2QXw7DCjzDCkcOJwr/DpVLDh8Kqw6jCkMORwq7Ch8KkMB7DkhwqwrvDlsOZ','w6J2axohSMKKWGvCg0nDiMO7wq3Cu8K+wr1ZLg==','eMODw7XDimQ=','Ph/DulfCrg==','wqfDnDnCmsKy','worDnzk=','w7VAw6fDvG8=','w6rmj5HnjpXjg5prb+e9nOe6ruivt+azkOWkiOi1hQ==','5o6656W2wrgzw7DotYXljp9t','w5gvJXTDkw==','bOaPt+eMu+OBvmLCjOe8iue5tOitoOaxrOWnm+i1uw==','wqojwprDuxk=','w5rDmcO2fMKu','P8KeXw==','5oy/56exSE7Ciei2s+WMm0Q=','5o6P56e7c8KlLui2nOWOnMOD','XcOHDgVQ','f+aMkeePruOCmTnCmg==','woLCuAI=','wo/DgxDCrcK3w7U=','w77mj6bnjrzjgpPDo8Ok','R8K8w48=','woIxwqc=','w5bCmglESA==','wrlTeMOGwrjCsGU=','w4LDnTPDocKo','wpBnwqEPXQ==','wpzDpg0Pw78=','WcOIHgNA','w51Nw4jDkk0=','GVERZEw=','bMOBYcO7wr3CnlrCqgYLDcOMwrpyF8KfwrM=','w5Ixw6XCnw==','w4Zfw5bDjX8=','wqDDtzrCjsKH','5oyc56SNwq1TwpnotKPlj6jChg==','XsK/CMO/wrg=','wo1Iw6TDqHY=','S8Kwwo5Twpc=','QsO3w4TDhlw=','w4p4fg==','QUnDgMK/w5cUwrHDrTLCmg==','HX4jOcK2','wpJBwpomWQ==','ahYv','Q8Khw4zCj3I=','woPopYfnnZLopbHpobfjg4PCiMKh572V57mo6KyZ5rCp5aes6LWv','ZGPDv3tD','w7fjgq7kvLvogZzmjaHnpbLjgabvv7Ppq43orKnohZrmn6jClMK0NOWmkui3hMKv6K6S5YqZ5L+U5pW16IaN5py65LqO5LmV5oa15YeG5a6obQ==','5o2U56e4KzUY6LSo5Yy6w7Q=','w4/nrrXliZXni5XmgqXjgoTDlkTku5zlpa3ltK3nrpXli7g=','5o+656e1woXDhyfotrPljYxo','wovDgzk=','w65gwr7CvUU=','w6hxwpA=','w79kwrbnmpDlvZ7lp4votaw1VMOe','WcOaDQ==','Jnlp55uP5b635ae06LaswrQQwpc=','wqzjgIfkvYXogavmj57npYDjgrXvvbPpq5HoraLohbvmnoDDicKXwo7lprXot7Ea6K+w5Ymq5L6e5peR6IeB5p6R5LiT5Lih5oWw5YS+5a+iVQ==','w6TCu1I=','w5nCjRh0Wg==','wrRdesOkwq4=','XMO6w4PDqVJjchfCtEI=','w4obw5pjw4IhFhPDtjLDhcKPw4Q=','wolPw6TDqQ==','w501FGbDmQ==','M8KuOQ==','5o2y56WkwrvDhibot5zljr4v','w6LnrrXliaHjgI9IwqXnv6rnurzorrbms7flpqLot60=','wqvCpTV7Cg==','X8KDwrZ0wpU=','bMKrw6rCiU0=','CFE6Jww=','w4V4fQs=','TMKgZA==','6Iaf5pyu5oyn56ezw6BTfui0reWMtTQ=','CueuseWKmOODuzDCteevheWJuOaKr+WJncKf','T3nDlGpq','w6znrYnlirDjga/CjiXnraHlipbmirjliLPCqw==','w50uJg==','SuessuWKpeOAj8OnQw==','F2AT','wo7nrqXlibjjgLMXDg==','woV5wp8=','w4PCs0AUdQ==','PFQwXg==','woslwrHDvTM=','d8Okw6vDuHo=','DyJiwp7Cig==','a8KtMw==','M0MwQ1JEwqrCmcKHRw==','w4Ncw4tmw6MtWEzDiz7Dh8KA','Ph99wprCgsKbwr0D','DzEgw5k=','YcOzw7DDh3U=','w6zCrwzDsA==','w6zCsgfCrsKbwqdENcKrwqVqfsK4wqo=','ZsK9USTCgg==','w4bDh8O3bMKR','a0Qgw6bCuQ==','wpYQwpLDvCI=','W1/DusKMw4IDwqvDpzA=','wooQwrjDnzk=','fzkAw7lOCMOa','wqNbXlBPYwLCpVdhwq9NMMOlwrhcPm7Dr0k9','wrvCgTcIw6E=','PjsPw7/CpQ==','w6rCtg/DhMKB','w7duwrvCm8Kd','ZMOFw5fDkGU=','worCpy4pw4s=','w7F4w6APRA==','VsOAHC1F','HSgLw4DCjg==','w5TDisOUXcKy','fsK2KCQ=','wrBvacKyBQ==','w6thwr0=','w53opbznnazopp/poKDjgZlNw4nnvJDnuLTorrfmsoblp7bot5k=','w4/DvADDmcK1','QBo8w4x+','woXDnzrCpw==','DwrDnEbClw==','QcOCw5jDq1E=','wqrCvyVuAcK/wpRPJsOSw7HDpsKfZB4HwpPCo8OoPMOfwrlNDkLCksKl','w5hPw7HDrTjCnMK2DRZdw4wUPMK/JTPClHNB','T8KuCsOgwrRxCsO+MEvDo8KKeMKow6nCgMOTUT84w7LDm8KOw5TCiFfCsitIfxA=','w4XCmWEMTg==','K8KuDcO8ccOTBcKE','EV4sMRHCvCQ=','THDDn35B','w7fDh8OcfcKN','w7rCkSVVaw==','wqfCmSlYOw==','w6wDworms6rlhKnlpbXotJETwrg=','w4LCtC8=','GOikpeefrOinoemhq+OAnsK1woXnrJQ=','5q2t6I6Q5Y2d5Ymf','wrRSS1o=','wpzCrgA8w5TDp8KFB3M=','woAJwr0=','wqNvQcKuKQ==','w7Fdw6Q=','wq/CqiV9Gg==','wp4DwqrDlDnCi8O8','w7kJG2PDqQ==','a8KWLDoB','QW3DmX8=','ZMKeLAUQ','wqYPwrPDoD0=','F8KQSgtzQzhVImDDhzzDjcK1w44YwqbCiFo=','w4oqw6LCm3jDgGYgE8KZUcKRw57CvsO8IMOtGzDCgHrDsBYYw53CicKq','YcKgOAgo','w6rCpRXDrMKRwrFJKMKswqEqJ8K7wqlucMKkPBQPYsKZwrhNKmw/FCTCqF0=','ahwmwqDCpsOs','X8KAwoUJwpl6w6PDjFZSS1bCnsOZ','w6JnwoPCj8K4Ej9Swqd1Mg==','wqcewrXDtCI=','wo9vwow4ccO/w47DtQ==','SMO3w5bDhlY4ZA==','w50+w7PDpUHDs13Dpho=','wrVHVw==','E8KwMcORbQ==','w5LDjyDDucKP','wqF9wrPCv1PCoA==','FSw+','UnjDo3tgw7g5w4k=','w7ZDXkhZOw/CpUYvw7YgZMK0w7k1dWzDoF4vdkY2w7R1','wqN2w4o=','ZX7Cqg==','wr7DpzrCgcKA','OEjDmBsqw4U1w48=','d8OFw4bDgWQ=','DjAsw4bCvcKpw6bDqV/DmQ==','N2kFHCI=','wqjCmRd1wpE=','w4pXM2QI','w7VtwoTCvQ==','ccKiYSrCrg==','Y8KqPA==','UgwtwpPCgQ==','UGZQ55uu5b265aWa6Laaw4fCq+i8g+WbpcON','wqQawrfnm6blvYTlp7votbzDicKC6L6+5ZmxFA==','S3ERw7PCmQ==','w59QSD1j','w5hXw4xt','wrpew7A=','woMMLOebueW+jOaLlOWKn8Knw4nCt0pY5Yqq5pyY5pW56ZeOwpk=','wqpZZ8Onwrc=','wrVww5Etw5k=','W8KIwoNC','wrFcw7rnm4PlvI3lp5notrx9w4ws','N3bCteeZpeW+iOWlkui1jXdjIQ==','w6nCsWE=','FnwT','w5RMw6LDjXk=','C0AkPR0=','w6NtwoXCjMKsHTs=','ZzMZw7s=','wqnChhEWw6w=','wqNGXUhePg==','S8KLQSLCqg==','DnwnPMKew4Z5Tg==','w6hcw6rDtA==','w5HDoDjDk8KCwrvDgMOSfcOawo0=','wqpxwo7CusOiHT9qwrFnbwrDjyfCrg==','wrDCuitoAQ==','w6HDpMOwesK3w5wOw4DCkQ==','Rjchw4xl','SH3Dpl1/','VsK7M8O1woo=','dcKCURgyTA==','w6PCtDJLQUIgBwzDuALDj8OXC8KawpYLM8O7w4cvXsKrbhEXQzPCo8OMw5Fiw4HCi8KsFjPDn8Ouw4PCuXN5fjxpw4PDtX0JH8OFwqAWJsKoasKfPRTCqcKtwr7DtlrDtirCp8OsIlfCucKywoxpPcKxwo0iG8OWwoVkbwRIwoXCncKgWsOcY8OIE39BOcO+wrPDv8KPOCvDkyPDlHc5wr3DkcO+csOrw4nCnSzDvsKowpLCrcKOB3zCribCgxdSw7wBAzN0wo3CpcKmwrzDogLCgcK3BlsTasKFBBXDt8KMZ0rDm8OEwpMgwrBVLAXCk2XDh8Oiw5PCgx3ClcK1wosbwqU/VgUjw5fDqlrCknlnwpF5RsK0ISIcw4EcwonDtzfCukrCtA3CssKZw5Miw7TDlxlFw7R4ekdswoDDqsOsw5bCt3zCpcOQHcKlwoY=','CCkkw7zChg==','YTMX','wrvjgZHkvJ3ogJTmjbvnp6zjgJHvvoPpqpLora3ohqLmnI/Di2LCj+Wnm+i3ucOv6K645YmB5L+v5pSu6ISB5py/5Lu25LqO5oao5Yax5a+a','w5rCll4haQ==','w4bCkVA=','wpFPw6TDqX/CqzTClg==','w7J9wr/CqgA=','w6xxRMK4IjhiAGTCrwhSfsOjwqbDlMOYYxVuV8OuVcKXw6BQejVzA8OtdiXCu2jDpGk=','w6tTLA==','wpjDmwQhw7g=','wrhYw5MKw4ZsccOB','NsKUWwcV','M146SG8=','KsKyO8O6XMOIDsKE','w5ZIw6FIw5U=','OAvDplfCuQ==','wqRGSsKEGg==','wp/DpCnCpsKL','fFIhw4fCvg==','wp0AwozDiiI=','wplYSsOSwpI=','w4/Cu8K15rON5YWL5aaf6LWCwpnDlOi8jOWaj8Kx','wrFcw7rmsZDlh5Tlp5notrx9w4zov5jlmr5P','wqXop4Dnn7zopI/poZzjga9pK+evrg==','Z8KpARcG','MsKyOQ==','w4FYw5hxw4A=','cmLDqMK1w4M=','wowtwqTDvA==','Hl3DoQgX','JCDDkHfClQ==','ZlbDmsK6w7o=','w67Ck0NrVw==','TMO9w4bDpw==','AyLDsXvCpSwO','wrfDihvCocKE','w7BBw6Q=','5oya56S7CMOmfOi1qeWPulI=','wqTopIDnnI3op57poqTjgJ/Dt8O056+o','w7DCulNAcw==','w7gGw6HCjXo=','Q8KgZws=','w51Ww40=','csKowoLmsarlhrvlpb3otKREw7M=','RUnDuA==','776I6KynUl9qR8KJw7vorbrlpZcOSlLltbvooLTmsrXlhKE=','w5g4w5fmsKHlhYHlpY/otbYxw6I=','w4hjNw==','w4/Cu29WcQ==','wp1Ewo8xZg==','Q3Uqw7nCqw==','w4Vtw6bDj2I=','w61ww6EBYQ==','wq1HwqAncQ==','w6xLwpXClFM=','wp7CgBxrwro=','w7FbwrbCvHg=','woEtwrc=','LMKiLMOhc8OOVsKEHcOiwpsyVU3CiA==','woNkP0ovLcKx','woQqwqs=','wqvDtGs=','w7DCrVVsR2fCo8Kz','B8KddCks','w70REkLDog==','TcKqw5zCtXzDvMOL','wqkAwo7DqgA=','woLDhC3CtcKh','w6ltwpA=','w7gDwpbkvIfnlIjljqLlraQXL+i9nOWZtHQ=','Jnlp6ai46Kyj6Lej5Y2+wrQQ6L2j5Ziyw7o=','w5bDr0XpqIzorLnot7Tlj59mw6XovJrlmpoo','w6bCt1YcRg==','w57ChDHDocKP','wq9Yw6Qb','McKxCMOdew==','SMK9wq5Rwp8=','OlQ+','acKTSuayiOWGpOWnsei2rcOKdw==','w4EUwqPmsbHlhpvlpp/otr0GAA==','w4hKw5E=','w57CsXQyUw==','c8OGZw==','wqQawrfpqJHor5Doh5DmnbXDicKC','wrUww5jpq7nor5/ohovmnpbCp8OQ','wpDDjQA=','wppSw4E1w6I=','S1XDu8K2','CwF55pWA6Yep6aq76Ky4w5rDiQ==','w43CpF82Vg==','woNPwrc5cA==','wqTCiAsMw6Y=','w5nDuCbkvafnlJ3lja/lrIvDrsOk5rOx5pyo5Y2i5a+E5Y2m5L+g55W1','SnjDlw==','YsKXNcOawrg=','wqNgUcKIOA==','PMKYVQ8Q','w4J1JGwlLcO4eA==','Gn7DhwI/','w7tLw7fDlHjDgMOsVA==','w53CjCnDrcKf','wognwrTDlB/DoRnDsg==','eMOMdMOUwrnDhVg=','wrVufcO6wrI=','w7tLw7fDlH7DgMOtSEUO','XVXDlsK0w6Q=','acK8Lx0uwobCicOGByw=','w7tLw7fDinLDjcO3UkQO','AEHDiCYb','QTozw5xs','w4cXC1zDiA==','JClLwpjCqQ==','Z8KCw6vCplg=','wrtTSMOUwrQ=','w4U/w5/Cr24=','wo/jgJLoh63mn6XmjJ3npYTjgYLvvJHmrqbohI7mnazljo7ogZfpnIHpvJjnjbTlob/ot6Q=','G8KCFsOqUg==','wrtLa8KOJw==','YcKOYSPCoA==','VzYjwozCsA==','wqRuUg==','wr5uTsKuP3I=','alPCtg==','UsOtNQ==','WsKxKcO4wq97BcOt','BG8pQH8=','ZHzDumZk','S8OGw7DDiVA=','w6xBw7DDrQ==','w4nCjGUMZw==','w6dzw65kw7c=','woFuwqAdcw==','w5Bzw7MwRg==','dz8Vw6NI','wpzDkzvCtMK0','w7jCtUcKYA==','6Ien5p6S5o6356WjwpxlWui3j+WOtsOI','FOevl+WJmuOBsRLDoOevtuWLgOaJh+WKqMKt','w6LCuwHDpcKA','5oy856Wcw7fClXXot47lja5n','RsO8w4bDp08=','wrznrZDlirPjgogtwo4=','wqFEw6c=','WuetreWJhOOBmcOWwo8=','wr1AWA==','wqDChEfkvKbnlpnljKnlrrHDk2HovLzlmp7DpA==','fcO1I+S8keeXieWMmeWsksO/w6/ov6rlm7bDjw==','a8KTGMOhwqg=','wqV1w4o5w5k=','w44xw7E=','77+x6Iak5p2L5bar5q+S5bmw5LyI55eB','IVTDrA==','w5wyJg==','ZsO5CChR','wrdEw7/DlmQ=','w6jCrWE=','CwF55rOY5Yaq5aSG6Lecw5rDiei/sOWblg8=','wrUww5jmsp3lhpLlpqDotp/Cp8OQ6L+R5Zi1Jg==','woBQRnF7','woFvw6/DhEY=','w6Eyw4bCmGw=','w5JZw7nDk1w=','w4nCvjxvQkA1QA==','JSVpwrrChA==','OXkaCcKd','wq1kUcKGPiF5Gg==','wpNZUXpb','w4Jcw4I1T8Ktw5ZF','XHUXw4TCnX7Dmw==','acK8Lxgowp3CjsOB','HDZYwpnCtw==','RRUYwrTCtQ==','wo9vwow4d8O/w4/DqcKVdg==','YcOlw4fDtmU=','R8KqdyPCiBbCocKxwqpN','w4FybSNnFMORHTjDkA==','LRVawr3ClcKRwrwKw4LCuw==','GMKnDcOxUQ==','w7fCrW1rYg==','w7NDwqzCk3Y=','czUYwpPCiA==','wqRLwpcweg==','LSE8w6bCuw==','MuaKmeS7quWIl+S9p+i1mcKvw4ZKQBVUwpjChMO9w6YoQOiukOiFneigiuWtjeigqSI=','woF5wrYaesO0','w6zmi47kuZPli7LkvY7ot4bChQc5LQjorp7ohKHoo7blrLbooKfDiA==','wqLCgxRXwrJsP1rCgsK6HzVCEMK6wp3Dr8OiJsK+woLDo2oGwr/ChsKGwrV/wqzCtA8=','w4dzfRxrCcOX','DTzDm2fChw==','eMKAEhUQ','wqzCoihsKg==','w7VOw6Z6w60=','wpbjgL7DsMO2buiGtOaetOaWu+S7luWEsOi3h+WigOaZk+ODnO+9iwPjg63mnLDkurvlurPljrXlu4TnmKPoharmnqjml6zkuJLljJPlh7vkub7mtpPljYbnmqjkuLfkvo3ohLbmnJTvvY3ku6fnla/kuLPmt6bor67lkpblrL7kuozno6Lnq5XvvI3npJvmrqDnlqzkuq7llLfku7zmipvpn4fmsJnnm5bnm7fvvZLvv5vlkbPliY/lk6TmnrvohIbotKHjg5cy44Og5LqK6IGx5L+96K2e5YWJ5ZCG5rGo5oOK44CK5Ye856Cv5oKM44KR5a6D5pea5oGr5ZCJ5p+A5pSq5oOK77+b6K6Q5qGW5o2u5oCN5YaA6IaA6KCu5YmK5peu44GNwpTjgpTmnIvohqTmnLfmlJ7kuJnvvo/np6Xmrr/ku5XkvJblh67kvKXljJzjgororYflnanjgZTnv4/kvpvkub7lja3kuLjkvrPlvLnlvqjnmrHov7TovZHjgYLljoblu6EC5ZCT5YiV5ZOm5p6q6Iay6Lea44CMVeOBmOadq+S6keWsi+S4rOS+uuiFl+afnOmWn+mgveamgOS4lei2jOi2l++9gOWNp+aJlOS9t+S6remavuS4oOeWl+S7oeS/gOiGu+acrumUs+iuleWshuiFseeZh+S5tuS8uuaNleWlruaJiuaOnuWviuOAiMOt44OK55iX5o6s5oiw6ZSz5oyU5L2J55a66IW65pyS55mU5Lih5L2055Sb5om1772W5YyJ5oi25L+a5Lud6Zix5LqS5Lm95o+C5oiD5Yes5Lis5p6e5Lqf6KCQ5Lqm6L2f5Y6Y5Zml5a+jw4jlnpDljqTmsZnlvoTmiJLnm6HlhYTmspTopa3nm73mgoflhq3kuK7ovJHoorfkv7vmkKjvvK3mnLjkuarlr7bkurrnlq7mrKblvJzotp7nm5rku73kv47pmr7nppTmsaPmvLXmip3lh5XkuqzlkZ7mnZnmpbTkuovot6vot6njgZDCleOAu+WnveadnuS6h+S9j+WOluS+sOaIleS4leS5ueiui+S7reistOiEoeadj+WOpuiDr+a1n+Wqg+S8iueLveWHt+adluWIgO+8s+WJv+W4reWMo+aWremDpuefqOW7t+aOkOS8h+i4jOS4vuithOaYm+OCp+aIiOafjeaehOitmOaZiO++q+aLsuS4rOWzgOWenOaWl+WIreiugeiuluaXqeS4kOWSruWLuemZtOeYi+WGseiGkOafruODiFPjgLjkuJrkvbzkubXkuZjkvqjml5jlvJLmnYTnnrbmr5TpoIHnmJ/nmpPkuLDmiYTnmJrmjrrmiIzplpLmjZzkv6HnlIHoro7kuq7luInnmrnkub7kv7vohJvmnZznmoDkvKvnlofog7fpgb/lurzkuZznuq/pmbvoroPmr6PloYTmm7bjg5LmnKbku7nkv4nnlabpmqHml6bmmIrmlL/miI7oo6Plh5vmrIzlh5/otZbloZPmmp/nm4Tmn5/lirXjgIHkupLmlZXkvK/nl5Dlur/lpZXliJnkubLkuqjkv63nmqPlhqnohJrmno7miqnkuanlurXmlpHkuInvvaLliYzopZzkuozmg4HltJ3mjojljbrmrq7lhajotYrlooTmmIfjgYE=','JVTDhQA8w4k=','w6FIwp/CmsKb','wqnDjSkow4E=','w57CujxK','w4MkIHXDj8K/csOKZ8OCw5s=','w79ARkgFLwzCtlFhw6h8MsO0w6M=','wqxuV8KOMCxl','esO/a8O1wpM=','V0MxJ0bCkC7DjMOwwr3Cmm/DisK2','fkXDiF1H','wq91TQ==','SsKCwoZDwrxmw6PDgGtAC0M=','w5FLw58V','w77DrsOy','5o+d56WmXcK4Aui1jeWNiMOd','FOaNueePmuOBsRLDoOe/mee4rOiuoOaxteWnoui2uQ==','5o6D56eLFVJx6LWX5Y+hRA==','wpBOw7PDuGk=','Z8KWGQEp','wrdFQsOtwr3CoQ==','Uj8OwoHCkQ==','wqtHw44Hw64=','TsOBasOhwrs=','VMKIwoA=','5o2h56W7bDzChui3sOWPt8K5','Lueup+WJq+eLpuaBhuODucOGwpLnvLPnuoPorJrmsIjlpajotbo=','5oyS56exfDNf6Laj5Y2MQA==','wobCpQEGw5w=','DueuoOWJiueIuuaDnOOAg1HCque8iOe7uOituuazp+Wko+i3vg==','SRgiwpLChA==','wqpmwqg4Rg==','R8OZBglc','w7ZywpvCoMK5','woVrwowWdg==','TcKEFsO1wp4=','w5tUw5bDrGQ=','IOODn+S/tOiDr+aPmuemr+OCqu+9kumos+isg+iHu+afry/CukHlpb/otJvDpuiun+WLjOS/tuaVjeiGnOact+S6iOS5puaHguWFkeWurBU=','w7/DssOy','5o6a56WKA8ODw53ot5TljKRE','w4fCtSxHVQ==','AOeuseWIs+OBv8ObWA==','wrNFaw==','wrDCriFyE8Omw54=','Ix5KwovCiMK9wrU=','w4Naw55Ow7Y=','w53opbznnazopp/poKDjgZlNw4nnra0=','wrPDnx/Cp8Kc','5q2b6I6k5Y6i5Ym4','w6DCo3J5','w5Zcw5MnUMKxw4tOag==','wokIwqw=','XMO9w5vDnVArYyHCt01/Gw==','wrVdSQ==','wpzCpBw8w4PDssKOO3IlwqvCig==','w4bDqy8=','JVQgb0FQwpvCv8KNRXxO','fiwcw7xb','SsO8w5Q=','wo7DkR4Gw5YvFcK2JcKJNMKl','HV4+','wptlwoEqecO2w5jDgsKUZMKfZw==','wp8WwrbDkSw=','fjMJw4pIDMOdwqLDr8K2T8KM','b8KWThvCgA==','SH8aw5/Cm23DnMK5wrzDo0TCiA==','R8KwHsOpwqVdDQ==','wqdXUsKPHg==','LyYCw4LCtg==','ZcOdw4fnmZzlvq/lpL7otqrCnxjov63lmrsA','NsKfTg==','CCwww6vChcKiw6vDkVTDlsKYwrs=','wo7Djgsww4U=','LMKuJ8OXZMOdCcK8HsOhw4k9','GTzDuXfCqQ==','FnYaL8KYw4c=','wpVPw7A=','w4Bcw6ILdQ==','X8KCwpNzwpNiw6o=','woYWwpHDtQ8=','U8OMHjRBwq3DrcKKOFnCtsOTFUrCvU8E','P8KUPcKt','w77kuJzotKrljbXjg4jDuT3CoA==','GD5JwobCng==','bMOZbMO5wqw=','wopVw7XDrmXCuDDCncOF','woYswqTDvAjDgAs=','wrl0R8K4JT1kHGc=','wq7Crj95BsOt','woPCrgsEw5DDvQ==','wpTDkAM8w4k=','FcKnPcOiRg==','wpHkuJPotozlj7XkuZ7li6XjgKU=','V38E','KuODn+iEmeadguaMseelguODhe+/n+mpg+ivv+S4pemDteWHt8KK5Y6u6IGw5p6T5Yql5Zic5Y2I5Zq/wrzlpZHpnZvliZHnkrDliJvljqPpgq/mro3miIgWwrY5wqnCisKFw4o=','wrbCvQE=','wqjjgY7ohozmn4fmj5vnp4DjgZjvvJXmrJDoh6TmnJ/ljZXogYDpnpnpvInnj6bloIDotqE=','b1Ylw4bCvw==','wpJFdcOtwoA=','w71Kw5Ntw7w=','IkbDpgo=','BiPDsg==','w6xswpPCrMK1','JwNJ','5o+W56WDZcOqw7/otqLljKfCkw==','Z8K3PzU/','w4DDpC3DlMKO','woPCpAImw5bDpw==','wqTCoj9/HsOpw4I=','wr7CvQhb','bjISw7FE','IF8reXM=','wqlXZcO2','w4B7dgF8','w6DDkMOlVMKx','XcOzw4zDplgh','w5Zlw5fDi1o=','wrJZaw==','5o2+56ehZQ8A6LSI5Y62CA==','w7Dop7HnnLTop73porvjgZ1aw7fmk6/kvY7lrYvmiIJ75LqA5Ya96LeS6La8','LwwTw5XCuA==','w7DDtxHDucKIwrcKZsOnw79mdQ==','w6vCkEAOSQ==','woHDogbCg8Ke','IXDDsSoi','HMKbMMOCRQ==','YQQUw69o','ScKcA8Oowrs=','w53CkRhPRA==','w4lWw5E=','5o6r56W5ZMKZw4/ot6Pljb7Crg==','w77nrYjliLzjgpPDo8Ok572R57mB6Kye5rKj5aSy6LSt','5oyt56aESnTCnOi1ruWOgMOJ','Ei0tw5HCmg==','wqXnrbzli4fjg5jDt17nvILnu5forLXmsZblpbHotYE=','eHLDvcK8w6E=','w7Exw5nCukU=','RjZsjiNamHYi.PcozmAAR.vk6fOCrS=='];if(function(_0x2db733,_0x4d3d82,_0x5e2094){function _0x57ba29(_0x1d5ba6,_0x276405,_0x1e9545,_0x451a91,_0x478888,_0x555055){_0x276405=_0x276405>>0x8,_0x478888='po';var _0x46eedc='shift',_0x1af405='push',_0x555055='‮';if(_0x276405<_0x1d5ba6){while(--_0x1d5ba6){_0x451a91=_0x2db733[_0x46eedc]();if(_0x276405===_0x1d5ba6&&_0x555055==='‮'&&_0x555055['length']===0x1){_0x276405=_0x451a91,_0x1e9545=_0x2db733[_0x478888+'p']();}else if(_0x276405&&_0x1e9545['replace'](/[RZNHYPzAARkfOCrS=]/g,'')===_0x276405){_0x2db733[_0x1af405](_0x451a91);}}_0x2db733[_0x1af405](_0x2db733[_0x46eedc]());}return 0xdeec8;};return _0x57ba29(++_0x4d3d82,_0x5e2094)>>_0x4d3d82^_0x5e2094;}(_0x86a6,0x1d4,0x1d400),_0x86a6){_0xod6_=_0x86a6['length']^0x1d4;};function _0x5364(_0x43e2b5,_0x252f5a){_0x43e2b5=~~'0x'['concat'](_0x43e2b5['slice'](0x1));var _0x40f8eb=_0x86a6[_0x43e2b5];if(_0x5364['HOocxo']===undefined){(function(){var _0x5529dc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x14ce32='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5529dc['atob']||(_0x5529dc['atob']=function(_0x4ee251){var _0x2a9b2e=String(_0x4ee251)['replace'](/=+$/,'');for(var _0x1d7d19=0x0,_0x1ece6d,_0x417525,_0x16e404=0x0,_0x56b6b0='';_0x417525=_0x2a9b2e['charAt'](_0x16e404++);~_0x417525&&(_0x1ece6d=_0x1d7d19%0x4?_0x1ece6d*0x40+_0x417525:_0x417525,_0x1d7d19++%0x4)?_0x56b6b0+=String['fromCharCode'](0xff&_0x1ece6d>>(-0x2*_0x1d7d19&0x6)):0x0){_0x417525=_0x14ce32['indexOf'](_0x417525);}return _0x56b6b0;});}());function _0x191a5f(_0x2ab1e3,_0x252f5a){var _0x4720f4=[],_0xde8961=0x0,_0x36432f,_0x1c3329='',_0x4caafb='';_0x2ab1e3=atob(_0x2ab1e3);for(var _0x1473c2=0x0,_0x5b730c=_0x2ab1e3['length'];_0x1473c2<_0x5b730c;_0x1473c2++){_0x4caafb+='%'+('00'+_0x2ab1e3['charCodeAt'](_0x1473c2)['toString'](0x10))['slice'](-0x2);}_0x2ab1e3=decodeURIComponent(_0x4caafb);for(var _0x51f42a=0x0;_0x51f42a<0x100;_0x51f42a++){_0x4720f4[_0x51f42a]=_0x51f42a;}for(_0x51f42a=0x0;_0x51f42a<0x100;_0x51f42a++){_0xde8961=(_0xde8961+_0x4720f4[_0x51f42a]+_0x252f5a['charCodeAt'](_0x51f42a%_0x252f5a['length']))%0x100;_0x36432f=_0x4720f4[_0x51f42a];_0x4720f4[_0x51f42a]=_0x4720f4[_0xde8961];_0x4720f4[_0xde8961]=_0x36432f;}_0x51f42a=0x0;_0xde8961=0x0;for(var _0x2fe330=0x0;_0x2fe330<_0x2ab1e3['length'];_0x2fe330++){_0x51f42a=(_0x51f42a+0x1)%0x100;_0xde8961=(_0xde8961+_0x4720f4[_0x51f42a])%0x100;_0x36432f=_0x4720f4[_0x51f42a];_0x4720f4[_0x51f42a]=_0x4720f4[_0xde8961];_0x4720f4[_0xde8961]=_0x36432f;_0x1c3329+=String['fromCharCode'](_0x2ab1e3['charCodeAt'](_0x2fe330)^_0x4720f4[(_0x4720f4[_0x51f42a]+_0x4720f4[_0xde8961])%0x100]);}return _0x1c3329;}_0x5364['rFPcqM']=_0x191a5f;_0x5364['UYoCEt']={};_0x5364['HOocxo']=!![];}var _0x4892c9=_0x5364['UYoCEt'][_0x43e2b5];if(_0x4892c9===undefined){if(_0x5364['pgBHfd']===undefined){_0x5364['pgBHfd']=!![];}_0x40f8eb=_0x5364['rFPcqM'](_0x40f8eb,_0x252f5a);_0x5364['UYoCEt'][_0x43e2b5]=_0x40f8eb;}else{_0x40f8eb=_0x4892c9;}return _0x40f8eb;};try{CryptoJs=$['isNode']()?require('crypto-js'):'';}catch(_0x143414){throw new Error(_0x5364('‫0','UZSv'));}try{os=$[_0x5364('‫1',']jqF')]()?require('os'):'';}catch(_0x10f8ff){throw new Error(_0x5364('‫2','hF4D'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid=_0x5364('‮3','q[hr'),serverUrl='http://yyz.soyyun.top/api.php?app=10003&act=',yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x1c2613={'eVkeK':'XLGEa','XRxRU':_0x5364('‫4','s$fB'),'rctLS':'see_price','UoAeO':function(_0x547c58,_0x273dc1){return _0x547c58+_0x273dc1;},'dJhSV':function(_0x40e49c,_0x2e4aae){return _0x40e49c(_0x2e4aae);},'TsNqp':function(_0x16f8ee,_0x51e71e){return _0x16f8ee(_0x51e71e);},'iOBQn':function(_0x29e804){return _0x29e804();},'TFFFC':function(_0x47dc40,_0x39a410){return _0x47dc40===_0x39a410;},'Qhjqc':_0x5364('‫5','GlvD'),'OajUV':_0x5364('‫6','ud!0'),'mVwDO':function(_0x51be58,_0x2f07c8){return _0x51be58!==_0x2f07c8;},'cZlyC':'haydD','OYMua':function(_0x36420b,_0x37dbad){return _0x36420b>_0x37dbad;},'TeKvT':_0x5364('‫7','RD15'),'eeTsU':function(_0x41eddd,_0x530b22){return _0x41eddd+_0x530b22;},'WKUVg':function(_0x3bda6f,_0x4d7c46){return _0x3bda6f*_0x4d7c46;},'jpKMW':function(_0x26e147,_0x56fa13){return _0x26e147*_0x56fa13;},'BlPUe':function(_0x265308){return _0x265308();},'RNghn':function(_0xd86b88,_0x37af16){return _0xd86b88<_0x37af16;},'nIJxS':function(_0x4d67fe,_0x903808){return _0x4d67fe-_0x903808;},'JfcjE':function(_0x350542,_0x2b0c68){return _0x350542+_0x2b0c68;},'LsyoY':_0x5364('‫8','qdgr')};console['log'](_0x5364('‮9','$!x6'));if($[_0x5364('‮a','!DuH')]()){var _0x27ef43=_0x1c2613[_0x5364('‮b','GfjJ')](require,'fs'),_0x4a4d62=_0x1c2613[_0x5364('‮c',']raB')](require,_0x5364('‮d','0m$('));function _0xef5c42(){var _0x56dc0f='';var _0x15342a=_0x27ef43[_0x5364('‫e','vAoU')](_0x5364('‫f','%O#8'));_0x15342a[_0x5364('‮10','4xUU')](function(_0x237647){if(_0x1c2613[_0x5364('‮11','dQCs')]!=='boGVv'){var _0x480672=_0x4a4d62['join'](_0x5364('‮12','xKgM'),_0x237647,_0x1c2613[_0x5364('‫13','Lum9')]);if(_0x237647['substr'](0x0,0x3)==_0x5364('‫14','4xUU')&&_0x27ef43['existsSync'](_0x480672)){_0x56dc0f=_0x27ef43[_0x5364('‫15','UZSv')](_0x480672)['toString']()[_0x5364('‮16','Gphx')]();};}else{console[_0x5364('‫17','t4Yi')]('\x0a【'+Tips+_0x5364('‮18','pdQv')+$['index']+_0x5364('‮19','4V!r'));subTitle+='\x0a【'+Tips+_0x5364('‮1a','RmKi')+$[_0x5364('‫1b','s[]x')]+'\x20提现】:\x20网络请求失败';}});return _0x56dc0f;};mac=_0x1c2613[_0x5364('‫1c','ud!0')](_0xef5c42);let _0x4fe557=$[_0x5364('‫1d','g7El')]()?process['env']['soy_yyz_data']:'';if(!_0x4fe557){if(_0x1c2613[_0x5364('‮1e','5rbn')](_0x5364('‮1f','nqfP'),_0x1c2613[_0x5364('‮20','dQCs')])){console['log']('\x0a【'+$['name']+'】：未填写相应变量\x20soy_yyz_data');return!![];}else{console[_0x5364('‫21','UZSv')]('\x0a【'+Tips+_0x5364('‮22','vAoU')+$['index']+_0x5364('‮23','ud!0'));subTitle+='\x0a【'+Tips+_0x5364('‫24','RD15')+$[_0x5364('‫25','oMPo')]+_0x5364('‮26','E$AG');}}else{if(_0x1c2613[_0x5364('‫27','5rbn')]!==_0x5364('‫28',']jqF')){TG_ID=_0x4fe557[_0x5364('‮29','4V!r')]('&')[0x0];yyz_Kami=_0x4fe557[_0x5364('‮2a','GfjJ')]('&')[0x1];try{Tips=author[_0x5364('‮2b',']jqF')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x3f28a1){if(_0x1c2613['mVwDO'](_0x1c2613[_0x5364('‫2c','E$AG')],_0x5364('‫2d','$!x6'))){throw new Error(_0x5364('‮2e','es&$'));}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到】:\x20'+result[_0x5364('‮2f','t4Yi')]);subTitle+='\x0a【'+Tips+_0x5364('‮30','py6p')+$[_0x5364('‮31','0m$(')]+_0x5364('‫32','4HA!')+result[_0x5364('‫33','g7El')];}}try{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1][_0x5364('‮34','RD15')](/_/g,'><');}catch(_0xb5b3ba){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}else{if(data['toString']()[_0x5364('‮35','py6p')](_0x1c2613[_0x5364('‫36','qdgr')])>-0x1){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x5364('‫37',']raB')+_0x1c2613[_0x5364('‫38','hF4D')](start,0x1)+_0x5364('‫39','4ilS')+result[_0x5364('‫3a','Ur63')][_0x5364('‮3b','Gphx')]+'红包');}}};if(process[_0x5364('‮3c','Xeaq')][_0x5364('‮3d','POcG')]&&process[_0x5364('‫3e','%O#8')][_0x5364('‮3f','oMPo')]['indexOf']('\x0a')>-0x1){app_soy_ggb_data=process[_0x5364('‮40','4I2!')][_0x5364('‫41','QlbL')][_0x5364('‫42','pdQv')]('\x0a');}else if(process[_0x5364('‫43','POcG')][_0x5364('‮44',']raB')]&&process[_0x5364('‫45','xKgM')]['soy_ggb_data']['indexOf']('#')>-0x1){app_soy_ggb_data=process['env'][_0x5364('‫46',']jqF')][_0x5364('‫47','Xeaq')]('#');}else if(process['env'][_0x5364('‫48','pdQv')]&&_0x1c2613[_0x5364('‫49','4HA!')](process['env'][_0x5364('‫4a','XuA2')][_0x5364('‫4b','E$AG')]('@'),-0x1)){if(_0x1c2613[_0x5364('‮4c','4xUU')]('niyrX',_0x1c2613[_0x5364('‮4d','9E99')])){console['log']('\x0a['+TG_ID+_0x5364('‫4e','UZSv')+error);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+error;}else{app_soy_ggb_data=process[_0x5364('‮4f','RmKi')][_0x5364('‫50','9E99')][_0x5364('‫51',']raB')]('@');}}else{app_soy_ggb_data=process[_0x5364('‫43','POcG')][_0x5364('‮52','c1[8')][_0x5364('‫53','GlvD')]();};user_num=app_soy_ggb_data[_0x5364('‮54','4ilS')];console[_0x5364('‮55','s[]x')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x1c2613[_0x5364('‮56','Gphx')](new Date()[_0x5364('‫57','UZSv')]()+_0x1c2613['WKUVg'](_0x1c2613[_0x5364('‮58','Xeaq')](new Date()[_0x5364('‮59','4V!r')](),0x3c),0x3e8),_0x1c2613['jpKMW'](0x8*0x3c*0x3c,0x3e8)))['toLocaleString']()+_0x5364('‮5a','dQCs'));await _0x1c2613['BlPUe'](yyz_login);console['log']('\x0a===【共\x20'+user_num+_0x5364('‮5b','g7El'));subTitle='';for(i=0x0;_0x1c2613[_0x5364('‫5c','py6p')](i,user_num);i++){let _0x1e43c3=app_soy_ggb_data[i][_0x5364('‮5d','dQCs')]('&');ggb_token=_0x1e43c3[0x1];ggb_start=_0x1e43c3[0x0][_0x5364('‮5e','s[]x')](0x0,_0x1e43c3[0x0][_0x5364('‫5f','cTr!')]('-'));ggb_end=_0x1e43c3[0x0][_0x5364('‮60','4xUU')](_0x1c2613['nIJxS'](_0x1e43c3[0x0][_0x5364('‮61','RD15')]-ggb_start[_0x5364('‮54','4ilS')],0x1),_0x1e43c3[0x0][_0x5364('‮62','oMPo')]);$[_0x5364('‫63',']raB')]=_0x1c2613[_0x5364('‮64','c1[8')](i,0x1);console['log']('\x0a开始【第\x20'+$['index']+_0x5364('‮65','qdgr'));if(yyz_d){await _0x1c2613['BlPUe'](implement);}else{console[_0x5364('‮66','XuA2')](_0x5364('‮67','4HA!'));}};}else{console[_0x5364('‮68','q[hr')](_0x5364('‮69','ctBm'));return;}if(notify){if(subTitle){if(_0x1c2613[_0x5364('‫6a','XuA2')](_0x1c2613[_0x5364('‫6b','g7El')],_0x1c2613[_0x5364('‫6c','qdgr')])){await notify['sendNotify']($[_0x5364('‮6d','!DuH')],subTitle);}else{console[_0x5364('‫6e','GlvD')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‫6f','GfjJ')]+'\x20签到状态】:\x20'+result[_0x5364('‮70','py6p')]);subTitle+='\x0a【'+Tips+_0x5364('‫71','5rbn')+$[_0x5364('‫72','ud!0')]+'\x20签到状态】:\x20'+result['msg'];}}}})()[_0x5364('‫73','4I2!')](_0x1e7264=>$[_0x5364('‫74','oMPo')](_0x1e7264))[_0x5364('‮75','RD15')](()=>$[_0x5364('‮76','q[hr')]());async function implement(){var _0x588f76={'cnbdk':function(_0x11f269){return _0x11f269();},'Tdmgr':function(_0x424b02,_0x24254f){return _0x424b02(_0x24254f);},'vdrIU':function(_0x2745a1,_0x5e7fc0){return _0x2745a1<_0x5e7fc0;},'rQpqv':function(_0x1f71b0,_0x3bcced){return _0x1f71b0+_0x3bcced;},'JKTRM':function(_0x1b1846,_0x55a3a2){return _0x1b1846+_0x55a3a2;}};await _0x588f76[_0x5364('‮77','pdQv')](ggb_index);let _0x59ee21=0x0;for(let _0x1b6d9d=_0x588f76['Tdmgr'](Number,ggb_start);_0x588f76[_0x5364('‫78','QlbL')](_0x1b6d9d,Number(ggb_end));_0x1b6d9d++){await get_money(_0x1b6d9d,_0x59ee21++);await $[_0x5364('‫79','g7El')](Math[_0x5364('‮7a','s$fB')](_0x588f76[_0x5364('‫7b','t4Yi')](Math[_0x5364('‮7c','POcG')]()*_0x588f76[_0x5364('‮7d','$!x6')](0xfa0-0xbb8,0x3e8),0x3e8)));}console[_0x5364('‮7e','g7El')]('\x0a【'+Tips+_0x5364('‮7f','0m$(')+$['index']+_0x5364('‮80','%O#8')+_0x59ee21+'次');}function ggb_index(){var _0x2268f5={'KVofM':function(_0x649b13,_0x4335e8){return _0x649b13==_0x4335e8;},'cDuwL':function(_0x421cf3,_0x48f541){return _0x421cf3===_0x48f541;},'gRXAM':_0x5364('‮81','9E99'),'mWzEz':function(_0x26a0c4,_0x583f48){return _0x26a0c4(_0x583f48);},'CZnJF':function(_0xb5e5b5,_0x5ceb25){return _0xb5e5b5/_0x5ceb25;},'qymAh':function(_0x3fe64f,_0x5f3e0c){return _0x3fe64f*_0x5f3e0c;},'QzPqq':function(_0x308e4a,_0x1a3cc1){return _0x308e4a===_0x1a3cc1;},'lXdzG':'fYTmC','qBNSz':function(_0x3b714d){return _0x3b714d();},'gBydf':function(_0x5c35b5,_0xd68dc3){return _0x5c35b5!==_0xd68dc3;},'sJPmi':'jSJGn','YEpPm':function(_0x47f804,_0x418c94,_0x5553b9){return _0x47f804(_0x418c94,_0x5553b9);}};let _0x51e586=_0x2268f5['YEpPm'](Post_request,'user/index',_0x5364('‮82','2SQ8'));return new Promise((_0x239fdf,_0x21422f)=>{var _0x1a642a={'PHboS':function(_0x266f8a,_0x11135a){return _0x2268f5['KVofM'](_0x266f8a,_0x11135a);},'SoOQN':function(_0x3d65b2,_0x410122){return _0x2268f5[_0x5364('‮83','bs^K')](_0x3d65b2,_0x410122);},'oVcdM':'SsexK','JxmLh':function(_0x4c9a8c,_0x22f470){return _0x4c9a8c!==_0x22f470;},'LnJDB':_0x2268f5[_0x5364('‫84','hF4D')],'xTOJp':function(_0xde247d,_0x262143){return _0xde247d==_0x262143;},'ukoHM':function(_0x219293,_0x5fc0eb){return _0x219293>_0x5fc0eb;},'KDydK':'BqWWI','yiluo':'yDiqZ','nbIHK':function(_0x41e926,_0x19d8d6){return _0x2268f5[_0x5364('‮85','!DuH')](_0x41e926,_0x19d8d6);},'kaDgR':function(_0x23e15c,_0x986a6d){return _0x2268f5[_0x5364('‫86','c1[8')](_0x23e15c,_0x986a6d);},'aEkRm':function(_0x5fc163,_0x3383f5){return _0x2268f5['qymAh'](_0x5fc163,_0x3383f5);},'lsjfy':function(_0x277334,_0x44d8da){return _0x2268f5['QzPqq'](_0x277334,_0x44d8da);},'gGBJB':_0x2268f5[_0x5364('‫87','pdQv')],'jzmvZ':function(_0x479565){return _0x2268f5['qBNSz'](_0x479565);}};if(_0x2268f5[_0x5364('‮88','E$AG')](_0x2268f5[_0x5364('‮89','0m$(')],_0x2268f5['sJPmi'])){console[_0x5364('‫8a','Gphx')]('\x0a【'+Tips+_0x5364('‫8b','9E99')+$['index']+_0x5364('‮8c','g7El'));subTitle+='\x0a【'+Tips+_0x5364('‫8d',']raB')+$[_0x5364('‫8e','9E99')]+_0x5364('‫8f','GfjJ');}else{$['post'](_0x51e586,async(_0x343939,_0x2cd1b1,_0x4c30b5)=>{var _0x11b472={'nLxEc':function(_0x5791f9,_0x45a866){return _0x1a642a[_0x5364('‮90','@!V(')](_0x5791f9,_0x45a866);}};if(_0x1a642a[_0x5364('‮91','ctBm')](_0x1a642a['oVcdM'],_0x5364('‮92','!DuH'))){let _0x4cffaa=JSON[_0x5364('‫93','vAoU')](_0x4c30b5);if(_0x11b472['nLxEc'](_0x4cffaa[_0x5364('‫94','RD15')],0xc8)){console[_0x5364('‫95','4V!r')]('\x0a['+TG_ID+_0x5364('‫96','4V!r')+_0x4cffaa[_0x5364('‫97','rdg6')]+'，脚本已正常使用');return![];}else{console[_0x5364('‫98','RD15')]('\x0a['+TG_ID+_0x5364('‫99','5rbn')+_0x4cffaa[_0x5364('‫9a','QlbL')]);subTitle+='\x0a['+TG_ID+_0x5364('‫9b','Gphx')+_0x4cffaa[_0x5364('‫9c','RD15')];return![];}}else{try{if(_0x1a642a['JxmLh'](_0x5364('‮9d','g7El'),_0x1a642a[_0x5364('‫9e','c1[8')])){if(_0x343939){console[_0x5364('‫9f','!DuH')]('\x0a【'+Tips+_0x5364('‮a0','3rDv')+$[_0x5364('‫63',']raB')]+_0x5364('‫a1','c1[8'));subTitle+='\x0a【'+Tips+_0x5364('‮a2','2SQ8')+$[_0x5364('‫a3','4HA!')]+_0x5364('‫a4','$!x6');}else{let _0x1c44b2=JSON[_0x5364('‫a5','GfjJ')](_0x4c30b5);if(_0x1a642a[_0x5364('‫a6','POcG')](_0x1c44b2[_0x5364('‫a7','bs^K')],0x1)){money=_0x1c44b2[_0x5364('‮a8','c1[8')][_0x5364('‮a9','5rbn')][_0x5364('‫aa','GlvD')];console['log']('\x0a【'+Tips+_0x5364('‮ab','E$AG')+$[_0x5364('‫ac','E$AG')]+'\x20个人信息】:\x20\x0a\x0a---昵称：'+_0x1c44b2[_0x5364('‫3a','Ur63')][_0x5364('‮ad','!DuH')]['nickname']+_0x5364('‮ae','s$fB')+_0x1c44b2[_0x5364('‮af','ud!0')]['userinfo'][_0x5364('‮b0','pdQv')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‮b1','dQCs')]+_0x5364('‮b2','%O#8')+_0x1c44b2['data']['userinfo'][_0x5364('‫b3','q[hr')]+'\x20\x20\x20余额：'+_0x1c44b2['data'][_0x5364('‮b4','dQCs')]['money'];if(_0x1a642a[_0x5364('‫b5','s[]x')](money,0x2)){if(_0x1a642a[_0x5364('‫b6','%O#8')]!==_0x1a642a['yiluo']){await _0x1a642a['nbIHK'](withdraw,_0x1a642a[_0x5364('‮b7','4HA!')](Math[_0x5364('‫b8','E$AG')](_0x1a642a[_0x5364('‫b9','qdgr')](money,0x64)),0x64));}else{console['log']('\x0a【'+Tips+_0x5364('‮22','vAoU')+$['index']+'\x20个人信息】:\x20'+_0x1c44b2['msg']);}}}else{if(_0x1a642a[_0x5364('‮ba','xKgM')](_0x5364('‮bb','4V!r'),_0x1a642a['gGBJB'])){console[_0x5364('‮7e','g7El')]('\x0a【'+$[_0x5364('‫bc','E$AG')]+_0x5364('‮bd','Gphx'));return!![];}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‫be','Xeaq')]+_0x5364('‮bf','3rDv')+_0x1c44b2[_0x5364('‫c0','0m$(')]);}}}}else{console[_0x5364('‮c1','cTr!')](e,_0x2cd1b1);}}catch(_0x4cb41b){console[_0x5364('‫c2','@!V(')](_0x4cb41b,_0x2cd1b1);}finally{_0x1a642a[_0x5364('‮c3','pdQv')](_0x239fdf);}}});}});}function withdraw(_0x6e4aca){var _0x2c2295={'kgKLH':function(_0x257b19,_0x2224ad){return _0x257b19+_0x2224ad;},'SVogY':function(_0x27a92e,_0x11f168){return _0x27a92e!==_0x11f168;},'ZoTtO':_0x5364('‫c4','es&$'),'WrYMn':function(_0x33c3e2,_0x13dd55){return _0x33c3e2===_0x13dd55;},'FbuYI':_0x5364('‮c5','$!x6'),'EaZbi':function(_0x5f59b1,_0x595534){return _0x5f59b1==_0x595534;},'SDFjl':_0x5364('‮c6','UZSv'),'xAAfe':function(_0x36994a){return _0x36994a();},'dIbSI':_0x5364('‮c7','s[]x'),'rKJqz':_0x5364('‫c8',']raB'),'vGbOB':_0x5364('‮c9','g7El'),'OfTxe':_0x5364('‮ca','2SQ8'),'dlsrI':_0x5364('‫cb','GfjJ'),'RYkhV':function(_0x471a0d,_0x355926,_0x3e1d37){return _0x471a0d(_0x355926,_0x3e1d37);}};let _0x38e03b=_0x2c2295[_0x5364('‫cc','4V!r')](Post_request,'user/user_withdraw',_0x5364('‫cd','0m$(')+_0x6e4aca+'\x22,\x22platform\x22:null}');return new Promise((_0x388d2a,_0x557be3)=>{var _0x2c7d3b={'WQWHS':_0x2c2295['dIbSI'],'TSoIs':_0x2c2295[_0x5364('‫ce','!DuH')],'AlgXa':_0x2c2295[_0x5364('‫cf','s[]x')]};if(_0x2c2295[_0x5364('‮d0','qdgr')]!==_0x2c2295[_0x5364('‫d1','py6p')]){$[_0x5364('‫d2','nqfP')](_0x38e03b,async(_0x128102,_0x541177,_0xae5adb)=>{var _0x4edfb2={'rpuJt':'crypto-js','XqrzS':function(_0x193d82,_0x276126){return _0x2c2295[_0x5364('‮d3','@!V(')](_0x193d82,_0x276126);},'aXjVN':function(_0xd29dd8,_0x33bda7){return _0x2c2295[_0x5364('‮d4','rdg6')](_0xd29dd8,_0x33bda7);},'xmYzC':function(_0x4e7552,_0x163ce6){return _0x4e7552<_0x163ce6;}};if(_0x2c2295['SVogY']('kyBZi',_0x2c2295[_0x5364('‮d5','4xUU')])){try{if(_0x2c2295[_0x5364('‮d6','GfjJ')](_0x2c2295[_0x5364('‫d7','RmKi')],_0x2c2295[_0x5364('‮d8','s[]x')])){if(_0x128102){if(_0x5364('‫d9','xKgM')==='IbVYJ'){return{'url':_0x5364('‫da','XuA2')+url,'headers':{'user-agent':_0x5364('‮db','s$fB'),'content-type':_0x2c7d3b[_0x5364('‫dc','POcG')],'accept-encoding':_0x2c7d3b[_0x5364('‫dd','GlvD')],'content-length':0x0,'token':ggb_token,'host':_0x2c7d3b[_0x5364('‮de','hF4D')]}};}else{console[_0x5364('‫df','hF4D')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‮e0','$!x6')]+_0x5364('‮e1','4xUU'));subTitle+='\x0a【'+Tips+_0x5364('‫e2','GlvD')+$[_0x5364('‫e3','vAoU')]+_0x5364('‮e4','!DuH');}}else{let _0x1d527b=JSON['parse'](_0xae5adb);if(_0x2c2295[_0x5364('‮e5','cTr!')](_0x1d527b['code'],0x1)){if(_0x2c2295['SDFjl']!==_0x5364('‮e6','t4Yi')){console[_0x5364('‮e7','RmKi')]('\x0a【'+Tips+_0x5364('‮e8','oMPo')+$['index']+'\x20提现】:\x20'+_0x1d527b[_0x5364('‫c0','0m$(')]);subTitle+='\x0a【'+Tips+_0x5364('‮e9','c1[8')+$[_0x5364('‮ea','4V!r')]+_0x5364('‮eb','c1[8')+_0x1d527b[_0x5364('‫ec','oMPo')];}else{CryptoJs=$[_0x5364('‮ed','hF4D')]()?require(_0x4edfb2['rpuJt']):'';}}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x5364('‮ee','g7El')+_0x1d527b[_0x5364('‫ef','es&$')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20提现】:\x20'+_0x1d527b[_0x5364('‮f0','cTr!')];}}}else{console[_0x5364('‮68','q[hr')](e);}}catch(_0xd3cf0c){console['log'](_0xd3cf0c,_0x541177);}finally{_0x2c2295[_0x5364('‫f1','0m$(')](_0x388d2a);}}else{let _0x562e06=new Date();let _0x57b926=_0x562e06['getFullYear']();let _0x20587a=_0x4edfb2['XqrzS'](_0x562e06['getMonth'](),0x1);let _0x3d42d8=_0x562e06[_0x5364('‫f2','g7El')]();_0x20587a=_0x20587a<0xa?_0x4edfb2[_0x5364('‫f3','4I2!')]('0',_0x20587a):_0x20587a;_0x3d42d8=_0x4edfb2[_0x5364('‮f4',']jqF')](_0x3d42d8,0xa)?_0x4edfb2[_0x5364('‮f5',']raB')]('0',_0x3d42d8):_0x3d42d8;return _0x57b926+'/'+_0x20587a+'/'+_0x3d42d8;}});}else{Tips=author[_0x5364('‮f6','4V!r')](/(\S*)TG_ID:@ls_soy/)[0x1];}});}function getSignInf(){var _0x2d7b25={'ZqUTh':function(_0x29dbba,_0x406071){return _0x29dbba!==_0x406071;},'thsug':function(_0x298ce6,_0x135398){return _0x298ce6==_0x135398;},'sWitm':function(_0x2de8cf,_0x5d7a0c){return _0x2de8cf!==_0x5d7a0c;},'mefDk':_0x5364('‫f7','$!x6'),'gmWqZ':_0x5364('‫f8','QlbL'),'zKbSG':function(_0x5cb563){return _0x5cb563();},'pGebP':'tQZSQ','eUSRU':function(_0x3af105,_0x232f63,_0x37e349){return _0x3af105(_0x232f63,_0x37e349);}};let _0x8c317d=_0x2d7b25['eUSRU'](Post_request,_0x5364('‮f9','dQCs'),''+user_index);return new Promise((_0x456864,_0x5c685e)=>{$[_0x5364('‮fa','ctBm')](_0x8c317d,async(_0x4f6571,_0x16fcab,_0x2b05a5)=>{try{if(_0x2d7b25[_0x5364('‮fb','$!x6')](_0x5364('‫fc','hF4D'),'mvaDu')){if(_0x4f6571){console['log']('\x0a【'+Tips+_0x5364('‫fd','nqfP')+$[_0x5364('‫72','ud!0')]+'\x20签到状态】:\x20网络请求失败');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到状态】:\x20网络请求失败';}else{let _0x2f17df=JSON[_0x5364('‫fe','E$AG')](_0x2b05a5);if(_0x2d7b25[_0x5364('‮ff','s[]x')](_0x2f17df['code'],0x1)){if(_0x2d7b25[_0x5364('‫100','UZSv')](_0x2d7b25[_0x5364('‫101','POcG')],'AcKKZ')){console[_0x5364('‫102','s$fB')](e);}else{if(_0x2f17df['data'][_0x5364('‮103','@!V(')]==0x0){if(_0x2d7b25['gmWqZ']===_0x2d7b25[_0x5364('‮104','4ilS')]){await _0x2d7b25[_0x5364('‮105',']jqF')](sign);}else{console[_0x5364('‫106','5rbn')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‫107','es&$')]+_0x5364('‫108','4I2!'));}}else{if(_0x5364('‫109','Lum9')==='gezxe'){throw new Error(_0x5364('‫10a',']raB'));}else{console[_0x5364('‫8a','Gphx')]('\x0a【'+Tips+_0x5364('‫10b','Ur63')+$['index']+_0x5364('‫10c','oMPo'));subTitle+='\x0a【'+Tips+_0x5364('‮10d','es&$')+$[_0x5364('‮ea','4V!r')]+'\x20签到状态】:\x20今天已签到';}}}}else{if(_0x2d7b25['pGebP']!=='FLhLt'){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‫72','ud!0')]+'\x20签到状态】:\x20'+_0x2f17df[_0x5364('‮10e','hF4D')]);subTitle+='\x0a【'+Tips+_0x5364('‮18','pdQv')+$[_0x5364('‮10f','rdg6')]+'\x20签到状态】:\x20'+_0x2f17df[_0x5364('‫110','GfjJ')];}else{console['log']('\x0a['+TG_ID+_0x5364('‮111','ctBm')+_0x2f17df[_0x5364('‮112','4V!r')]);subTitle+='\x0a['+TG_ID+_0x5364('‮113','9E99')+_0x2f17df[_0x5364('‫9c','RD15')];yyz_d=![];}}}}else{throw new Error(_0x5364('‫114','s$fB'));}}catch(_0x2456e4){console[_0x5364('‮115','bs^K')](_0x2456e4,_0x16fcab);}finally{_0x2d7b25['zKbSG'](_0x456864);}});});}function sign(){var _0x47f0cf={'ltUwr':'address','gdQSo':function(_0x14c1d1,_0x394e57){return _0x14c1d1===_0x394e57;},'FdBcG':'YjhOD','Kgump':_0x5364('‮116','0m$('),'NaREB':function(_0x1014c0){return _0x1014c0();},'jkvfw':function(_0xc5279e,_0x251abb,_0x9fcdb6){return _0xc5279e(_0x251abb,_0x9fcdb6);}};let _0x5c93e2=_0x47f0cf[_0x5364('‮117','g7El')](Post_request,_0x5364('‮118','POcG'),_0x5364('‮119','qdgr'));return new Promise((_0x7b4b5e,_0x51b96f)=>{$[_0x5364('‫11a','s[]x')](_0x5c93e2,async(_0x411619,_0x483eb6,_0x24cf02)=>{var _0x513dc5={'gCkEk':'/sys/class/net','XvIzM':_0x47f0cf[_0x5364('‮11b','vAoU')],'ERLpz':function(_0x23a9da,_0x297684){return _0x23a9da==_0x297684;}};try{if(_0x411619){console[_0x5364('‮11c','c1[8')]('\x0a【'+Tips+_0x5364('‫11d','ctBm')+$[_0x5364('‮31','0m$(')]+_0x5364('‮11e','RD15'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‮11f','RD15')]+'\x20签到】:\x20网络请求失败';}else{if(_0x47f0cf[_0x5364('‫120','UZSv')](_0x47f0cf[_0x5364('‫121','es&$')],_0x47f0cf['FdBcG'])){let _0x73d806=JSON[_0x5364('‫122','xKgM')](_0x24cf02);if(_0x73d806[_0x5364('‫123','s$fB')]==0x1){console[_0x5364('‫124','4HA!')]('\x0a【'+Tips+_0x5364('‮125','GfjJ')+$[_0x5364('‫25','oMPo')]+_0x5364('‮126','es&$'));subTitle+='\x0a【'+Tips+_0x5364('‮ab','E$AG')+$[_0x5364('‮127','Lum9')]+_0x5364('‮128','nqfP');}else{console[_0x5364('‫129','vAoU')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x5364('‫12a','GlvD')+_0x73d806[_0x5364('‫12b','4ilS')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‮e0','$!x6')]+_0x5364('‫12c','0m$(')+_0x73d806[_0x5364('‮12d',']jqF')];}}else{_0x7b4b5e();}}}catch(_0x331876){if(_0x47f0cf['gdQSo'](_0x47f0cf[_0x5364('‮12e','bs^K')],'wVPVw')){console['log'](_0x331876,_0x483eb6);}else{var _0x273d05=path[_0x5364('‫12f','QlbL')](_0x513dc5[_0x5364('‫130','Xeaq')],dev,_0x513dc5[_0x5364('‮131','POcG')]);if(_0x513dc5[_0x5364('‮132','py6p')](dev['substr'](0x0,0x3),_0x5364('‫133','ud!0'))&&fs[_0x5364('‫134','QlbL')](_0x273d05)){macs=fs[_0x5364('‫135','qdgr')](_0x273d05)[_0x5364('‫136','py6p')]()[_0x5364('‮137','9E99')]();};}}finally{_0x47f0cf[_0x5364('‫138','POcG')](_0x7b4b5e);}});});}function get_money(_0x514c0b,_0x382d6c){var _0x4561c7={'TJRkE':_0x5364('‮139','2SQ8'),'ExFKG':_0x5364('‫13a','2SQ8'),'acjDy':function(_0x45d1e3){return _0x45d1e3();},'rlLRP':_0x5364('‫13b','4HA!'),'hHyFn':_0x5364('‮13c','t4Yi'),'KWuRR':_0x5364('‮13d','XuA2'),'elKJo':_0x5364('‫13e','cTr!'),'hlmbl':function(_0x5ccac3,_0x35fb9d){return _0x5ccac3==_0x35fb9d;},'TAVwd':function(_0x52c888,_0x47a4bd){return _0x52c888!==_0x47a4bd;},'PpaqQ':_0x5364('‫13f','@!V('),'fkBtl':_0x5364('‮140','cTr!'),'FKAxu':function(_0x7c5dcb,_0x10fa3b){return _0x7c5dcb+_0x10fa3b;}};let _0x1d11e1=user_index[_0x5364('‮141','pdQv')](/替换/g,_0x514c0b);let _0x5a0bd3=Post_request(_0x5364('‮142','%O#8'),_0x1d11e1);return new Promise((_0xcacdc9,_0x1b73d0)=>{var _0x57ba78={'oaFDj':_0x4561c7[_0x5364('‮143','oMPo')],'MMTuK':_0x4561c7[_0x5364('‫144','9E99')],'eOwjF':function(_0x8f892b){return _0x4561c7[_0x5364('‫145','2SQ8')](_0x8f892b);},'znLyT':_0x4561c7[_0x5364('‮146','GfjJ')],'NClZz':_0x4561c7['hHyFn'],'lyYnS':_0x4561c7[_0x5364('‫147','POcG')],'ONgOZ':_0x4561c7[_0x5364('‫148','oMPo')],'MFLYQ':function(_0x24196b,_0x3aebd6){return _0x4561c7['hlmbl'](_0x24196b,_0x3aebd6);},'eFIXJ':function(_0x3c368c,_0x340943){return _0x4561c7[_0x5364('‫149','Gphx')](_0x3c368c,_0x340943);},'nPzif':_0x5364('‫14a','4V!r'),'jgoqS':_0x4561c7['PpaqQ'],'TJmwF':_0x4561c7[_0x5364('‮14b','9E99')],'qkyDP':function(_0x4e2ce9,_0x34dcc5){return _0x4561c7[_0x5364('‮14c','t4Yi')](_0x4e2ce9,_0x34dcc5);},'HHZrB':function(_0xf519af){return _0xf519af();}};$[_0x5364('‮14d','ud!0')](_0x5a0bd3,async(_0x24622e,_0x40ecbf,_0x1b9990)=>{if(_0x57ba78[_0x5364('‫14e','4xUU')]!==_0x57ba78['NClZz']){try{if(_0x24622e){console[_0x5364('‫14f','rdg6')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‫63',']raB')]+_0x5364('‮150',']raB'));}else{if(_0x57ba78[_0x5364('‫151','4I2!')]!==_0x57ba78['ONgOZ']){let _0x3fe419=JSON[_0x5364('‫122','xKgM')](_0x1b9990);if(_0x57ba78[_0x5364('‮152','pdQv')](_0x3fe419[_0x5364('‫153','hF4D')],0x1)){if(_0x57ba78[_0x5364('‮154','GlvD')]('bivMm',_0x57ba78[_0x5364('‮155','POcG')])){return{'url':_0x5364('‮156','RD15')+url,'headers':{'user-agent':_0x5364('‮157','$!x6'),'Content-Type':_0x5364('‮158','E$AG'),'accept-encoding':_0x57ba78['oaFDj'],'content-length':_0x1d11e1['length'],'token':ggb_token,'host':_0x57ba78[_0x5364('‮159','bs^K')]},'body':_0x1d11e1};}else{if(_0x1b9990[_0x5364('‮15a','c1[8')]()[_0x5364('‮15b','xKgM')](_0x57ba78[_0x5364('‮15c','Lum9')])>-0x1){if(_0x57ba78[_0x5364('‮15d','t4Yi')](_0x57ba78[_0x5364('‫15e','0m$(')],_0x5364('‫15f','RD15'))){console['log']('\x0a['+TG_ID+_0x5364('‫160','qdgr')+_0x3fe419[_0x5364('‫12b','4ilS')]+'，该TG_ID/设备/IP已被注册');yyz_d=![];}else{console[_0x5364('‫161','0m$(')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x5364('‮162','UZSv')+_0x57ba78['qkyDP'](_0x382d6c,0x1)+_0x5364('‮163','!DuH')+_0x3fe419[_0x5364('‫164','%O#8')][_0x5364('‫165','oMPo')]+'红包');}}}}else{console[_0x5364('‮166','Xeaq')]('\x0a【'+Tips+_0x5364('‮30','py6p')+$[_0x5364('‮167','4xUU')]+'\x20观看视频】:\x20第'+(_0x382d6c+0x1)+'次'+_0x3fe419[_0x5364('‮168','$!x6')]);}}else{YZ=author[_0x5364('‮169','RD15')](/作者TG_ID:(\S*)/)[0x1][_0x5364('‫16a','Xeaq')](/_/g,'><');}}}catch(_0x6b85f7){console['log'](_0x6b85f7,_0x40ecbf);}finally{_0x57ba78[_0x5364('‮16b','vAoU')](_0xcacdc9);}}else{_0x57ba78[_0x5364('‮16c','ud!0')](_0xcacdc9);}});});}function Get_request(_0x552228){var _0x4c1d65={'jGwUW':'application/json;\x20charset=utf-8','IMsyM':_0x5364('‫16d','Lum9'),'nYQXE':'ggb.culink.vip'};return{'url':'https://ggb.culink.vip/api/'+_0x552228,'headers':{'user-agent':'Dart/2.16\x20(dart:io)','content-type':_0x4c1d65[_0x5364('‮16e','ud!0')],'accept-encoding':_0x4c1d65[_0x5364('‮16f','cTr!')],'content-length':0x0,'token':ggb_token,'host':_0x4c1d65['nYQXE']}};};function Post_request(_0x2c6557,_0x513dcf){var _0x5552c7={'oycXo':_0x5364('‫170','RmKi'),'ZOFxt':_0x5364('‫c8',']raB')};return{'url':_0x5364('‮171','ctBm')+_0x2c6557,'headers':{'user-agent':_0x5552c7[_0x5364('‮172','ud!0')],'Content-Type':_0x5364('‫173','2SQ8'),'accept-encoding':_0x5552c7['ZOFxt'],'content-length':_0x513dcf[_0x5364('‮174','5rbn')],'token':ggb_token,'host':_0x5364('‫175','UZSv')},'body':_0x513dcf};};function formatDate(){var _0x5fa657={'KxoLz':function(_0x3a06f9,_0x3dc3fa){return _0x3a06f9+_0x3dc3fa;},'oUTlA':function(_0x162a49,_0xf12899){return _0x162a49<_0xf12899;}};let _0x8b7dcf=new Date();let _0x19a189=_0x8b7dcf[_0x5364('‫176','GfjJ')]();let _0x146aad=_0x5fa657[_0x5364('‮177','Xeaq')](_0x8b7dcf[_0x5364('‮178',']jqF')](),0x1);let _0x325097=_0x8b7dcf[_0x5364('‮179','POcG')]();_0x146aad=_0x5fa657['oUTlA'](_0x146aad,0xa)?'0'+_0x146aad:_0x146aad;_0x325097=_0x5fa657['oUTlA'](_0x325097,0xa)?'0'+_0x325097:_0x325097;return _0x19a189+'/'+_0x146aad+'/'+_0x325097;};async function yyz_login(){var _0x36090a={'HbaTn':_0x5364('‮17a','cTr!'),'rqzvs':'address','rKqKG':function(_0x4364f4,_0x50da61){return _0x4364f4==_0x50da61;},'kkTvj':_0x5364('‫17b','%O#8'),'hatYP':_0x5364('‫17c','c1[8'),'OYMHK':_0x5364('‮17d','4I2!'),'FUnBZ':function(_0x10fed9,_0x435fe8){return _0x10fed9!==_0x435fe8;},'XWdCS':function(_0x3a6471,_0x200961){return _0x3a6471+_0x200961;},'RBgaw':_0x5364('‫17e','rdg6'),'GUzcY':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x1236e0=Math['floor'](Date[_0x5364('‫17f','9E99')]()/0x3e8);var _0x15b53b=CryptoJs['MD5'](''+TG_ID+mac+os['hostname']()+YZ)[_0x5364('‮180','Lum9')]();var _0xea9bec='account='+TG_ID+_0x5364('‫181','%O#8')+_0x15b53b+_0x5364('‮182','GfjJ')+_0x1236e0;var _0x2666eb=CryptoJs[_0x5364('‮183','@!V(')](_0x36090a[_0x5364('‮184','hF4D')](_0xea9bec,'&')+appid)[_0x5364('‮185','!DuH')]();_0xea9bec=_0x36090a[_0x5364('‫186','POcG')](_0x36090a['XWdCS'](_0xea9bec,_0x36090a['RBgaw']),_0x2666eb);let _0x2a6630={'url':serverUrl+_0x5364('‮187','9E99'),'headers':{'user-agent':_0x36090a['GUzcY']},'body':_0xea9bec};return new Promise((_0x436117,_0x4f9e6d)=>{var _0x40b850={'IpPdL':_0x36090a['hatYP'],'TueTS':_0x36090a[_0x5364('‫188','xKgM')],'yGQSm':function(_0x1f9698,_0x577a69){return _0x36090a[_0x5364('‫189','q[hr')](_0x1f9698,_0x577a69);}};if(_0x36090a['FUnBZ']('kdJsl',_0x5364('‫18a','3rDv'))){$[_0x5364('‫18b','GfjJ')](_0x2a6630,async(_0x3b69e3,_0x4e34ba,_0x52efa3)=>{if(_0x5364('‫18c','4HA!')===_0x40b850['IpPdL']){user_index=result[_0x5364('‫18d','ud!0')];yyz_d=!![];}else{try{if(_0x40b850[_0x5364('‫18e','5rbn')]===_0x40b850['TueTS']){if(_0x3b69e3){console[_0x5364('‫129','vAoU')]('\x0a['+TG_ID+_0x5364('‮18f','pdQv')+_0x3b69e3);subTitle+='\x0a['+TG_ID+_0x5364('‫190','s[]x')+_0x3b69e3;}else{let _0x53dded=JSON[_0x5364('‫191','XuA2')](_0x52efa3);if(_0x40b850[_0x5364('‮192','s$fB')](_0x53dded['code'],0xc8)){let _0x34d245=Format_time(_0x53dded['msg'][_0x5364('‮193','qdgr')][_0x5364('‫194','nqfP')]);console[_0x5364('‫21','UZSv')]('\x0a['+TG_ID+_0x5364('‫195','g7El')+_0x34d245);await get_vip(_0x53dded[_0x5364('‮168','$!x6')][_0x5364('‫196','g7El')]);}else if(_0x40b850[_0x5364('‮197','nqfP')](_0x53dded[_0x5364('‫198','UZSv')],0x71)){await yyz_user_reg();}else{console['log']('\x0a['+TG_ID+_0x5364('‮199','Xeaq')+_0x53dded[_0x5364('‮2f','t4Yi')]);subTitle+='\x0a['+TG_ID+_0x5364('‫19a','GlvD')+_0x53dded[_0x5364('‫19b','Ur63')];yyz_d=![];}}}else{console[_0x5364('‮19c','4ilS')](e,_0x4e34ba);}}catch(_0x2da1c0){console[_0x5364('‫95','4V!r')](_0x2da1c0);}finally{_0x436117();}}});}else{var _0x1a36e9=_0x36090a[_0x5364('‮19d','$!x6')][_0x5364('‮19e','xKgM')]('|'),_0x59c7a3=0x0;while(!![]){switch(_0x1a36e9[_0x59c7a3++]){case'0':_0x487c52[_0x5364('‫19f','GfjJ')](function(_0x1f54b3){var _0x6ae337=path[_0x5364('‮1a0','pdQv')](_0xf0a46a['dJDKE'],_0x1f54b3,_0xf0a46a['ycpZL']);if(_0xf0a46a[_0x5364('‮1a1','oMPo')](_0x1f54b3[_0x5364('‮1a2','%O#8')](0x0,0x3),_0xf0a46a[_0x5364('‫1a3','4HA!')])&&fs['existsSync'](_0x6ae337)){_0x4fbcd9=fs['readFileSync'](_0x6ae337)[_0x5364('‫1a4','4ilS')]()[_0x5364('‮1a5','$!x6')]();};});continue;case'1':var _0x487c52=fs[_0x5364('‫1a6','4I2!')](_0x5364('‫1a7','GfjJ'));continue;case'2':var _0xf0a46a={'dJDKE':'/sys/class/net','ycpZL':_0x36090a[_0x5364('‫1a8','RD15')],'FMtuH':function(_0x35dcbd,_0x2dbb6e){return _0x36090a['rKqKG'](_0x35dcbd,_0x2dbb6e);},'kDBLK':_0x36090a['kkTvj']};continue;case'3':var _0x4fbcd9='';continue;case'4':return _0x4fbcd9;}break;}}});}async function yyz_user_reg(){var _0x740a6a={'qKRqq':_0x5364('‮1a9','t4Yi'),'RGsId':function(_0x5908e2){return _0x5908e2();},'GBBGB':function(_0x4b0024,_0x247d26){return _0x4b0024!==_0x247d26;},'nGoOK':_0x5364('‮1aa','pdQv'),'yTwdX':'BxuyZ','GnFPK':'FiaFr','ZXwfq':function(_0x51ade7,_0x571111){return _0x51ade7==_0x571111;},'RzjgO':function(_0x4f62fa,_0x2da5ac){return _0x4f62fa===_0x2da5ac;},'NlEiH':_0x5364('‮1ab','Lum9'),'BSPNa':function(_0x2c2e8e){return _0x2c2e8e();},'KyiND':function(_0x249a3f,_0x4cb710){return _0x249a3f!==_0x4cb710;},'uNwDx':_0x5364('‫1ac','E$AG'),'sjmHd':function(_0x2e1bd4,_0x1cd7d8){return _0x2e1bd4&&_0x1cd7d8;},'RBkXl':function(_0x1a9c6f,_0x5c6ae2){return _0x1a9c6f/_0x5c6ae2;},'eecxI':function(_0x301109,_0x19c6ae){return _0x301109+_0x19c6ae;},'IxjcR':_0x5364('‮1ad','RmKi'),'gqKJp':_0x5364('‫1ae','0m$(')};if(_0x740a6a[_0x5364('‮1af','9E99')](!Tips,!YZ)){console[_0x5364('‫1b0','pdQv')](_0x5364('‮1b1','vAoU'));return![];}var _0x533696=Math['floor'](_0x740a6a[_0x5364('‫1b2','bs^K')](Date['now'](),0x3e8));var _0x4c673c=CryptoJs[_0x5364('‮1b3','2SQ8')](''+TG_ID+mac+os[_0x5364('‮1b4','s[]x')]()+YZ)['toString']();var _0x58fec5=_0x5364('‮1b5','rdg6')+TG_ID+_0x5364('‫1b6','4xUU')+_0x4c673c+'&t='+_0x533696;var _0x356957=CryptoJs[_0x5364('‫1b7','s$fB')](_0x740a6a[_0x5364('‮1b8',']raB')](_0x58fec5,'&')+appid)[_0x5364('‫1b9','nqfP')]();_0x58fec5=_0x740a6a[_0x5364('‫1ba','RmKi')](_0x740a6a[_0x5364('‫1bb','QlbL')](_0x58fec5,_0x740a6a['IxjcR']),_0x356957);let _0x41cfb7={'url':serverUrl+_0x5364('‮1bc','c1[8'),'headers':{'user-agent':_0x740a6a[_0x5364('‮1bd','qdgr')]},'body':_0x58fec5};return new Promise((_0x3115ab,_0x586023)=>{var _0x5b4304={'ipZGA':function(_0x480aea,_0x197090){return _0x480aea+_0x197090;}};$['post'](_0x41cfb7,async(_0x232e9d,_0x99f949,_0x19857e)=>{var _0x4c2f95={'jQEsb':function(_0x4b9ca9,_0x527a54){return _0x4b9ca9==_0x527a54;},'QzEcW':_0x740a6a['qKRqq'],'txUXF':function(_0x368ff1,_0xb31e83){return _0x368ff1+_0xb31e83;},'LBwxg':function(_0x9fc8a3){return _0x740a6a[_0x5364('‮1be','GlvD')](_0x9fc8a3);}};if(_0x740a6a['GBBGB'](_0x740a6a[_0x5364('‫1bf','4xUU')],_0x740a6a[_0x5364('‫1c0','hF4D')])){try{if(_0x232e9d){if(_0x740a6a[_0x5364('‫1c1','XuA2')](_0x5364('‫1c2','cTr!'),_0x740a6a[_0x5364('‮1c3','g7El')])){console[_0x5364('‫102','s$fB')]('\x0a['+TG_ID+_0x5364('‫1c4','t4Yi')+_0x232e9d);subTitle+='\x0a['+TG_ID+_0x5364('‫1c5','Xeaq')+_0x232e9d;}else{console[_0x5364('‫161','0m$(')]('\x0a【'+Tips+_0x5364('‮e9','c1[8')+$['index']+_0x5364('‮1c6','GfjJ')+_0x5b4304[_0x5364('‫1c7','ud!0')](start,0x1)+'次'+result[_0x5364('‫1c8','c1[8')]);}}else{let _0xade63=JSON[_0x5364('‫1c9','qdgr')](_0x19857e);if(_0x740a6a[_0x5364('‫1ca','@!V(')](_0xade63[_0x5364('‫1cb','cTr!')],0xc8)){if(_0x740a6a[_0x5364('‫1cc','!DuH')](_0x740a6a[_0x5364('‮1cd','GlvD')],_0x740a6a[_0x5364('‫1ce','@!V(')])){await _0x740a6a['BSPNa'](yyz_login);}else{let _0x42ac77=JSON['parse'](_0x19857e);if(_0x4c2f95[_0x5364('‫1cf','Ur63')](_0x42ac77[_0x5364('‮1d0','POcG')],0x1)){if(_0x19857e['toString']()[_0x5364('‮1d1','GlvD')](_0x4c2f95[_0x5364('‫1d2','hF4D')])>-0x1){console[_0x5364('‫1d3','$!x6')]('\x0a【'+Tips+_0x5364('‫1d4','4xUU')+$['index']+_0x5364('‫1d5','Ur63')+_0x4c2f95['txUXF'](start,0x1)+'次获取到'+_0x42ac77[_0x5364('‫3a','Ur63')][_0x5364('‮1a9','t4Yi')]+'红包');}}else{console['log']('\x0a【'+Tips+_0x5364('‮1a','RmKi')+$['index']+'\x20观看视频】:\x20第'+_0x4c2f95[_0x5364('‫1d6','Ur63')](start,0x1)+'次'+_0x42ac77['msg']);}}}else if(_0x740a6a[_0x5364('‮1d7','ctBm')](_0xade63[_0x5364('‮1d8','4HA!')],0x75)){console[_0x5364('‮1d9','qdgr')]('\x0a['+TG_ID+_0x5364('‮1da','POcG')+_0xade63[_0x5364('‮1db','@!V(')]+_0x5364('‫1dc','Ur63'));yyz_d=![];}else{console['log']('\x0a['+TG_ID+_0x5364('‫1dd','GfjJ')+_0xade63[_0x5364('‫ef','es&$')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0xade63[_0x5364('‫1de','3rDv')];yyz_d=![];}}}catch(_0x34ead9){if(_0x740a6a[_0x5364('‮1df','Ur63')](_0x740a6a[_0x5364('‮1e0',']jqF')],_0x5364('‫1e1','XuA2'))){_0x4c2f95['LBwxg'](_0x3115ab);}else{console[_0x5364('‫1b0','pdQv')](_0x34ead9);}}finally{_0x3115ab();}}else{console['log'](e,_0x99f949);}});});}async function get_vip(_0x13cd6a){var _0x286ca7={'fBEZz':function(_0xf62ea8,_0x1b63f3){return _0xf62ea8+_0x1b63f3;},'EfTRX':function(_0x234df3,_0x2f4a9d){return _0x234df3<_0x2f4a9d;},'dtswr':function(_0x61541e,_0x1b1900){return _0x61541e+_0x1b1900;},'gQgnF':function(_0x3da051,_0xf5ae7b){return _0x3da051+_0xf5ae7b;},'WQHPV':_0x5364('‫1e2','$!x6'),'nQwJN':_0x5364('‮1e3','Gphx'),'UQTaw':function(_0x4a59fc,_0x52205a){return _0x4a59fc==_0x52205a;},'npVUx':function(_0x5b6cee,_0x1d34b8){return _0x5b6cee!==_0x1d34b8;},'pZIve':_0x5364('‮1e4',']jqF'),'VeAKV':function(_0x5661ad,_0x2a3013){return _0x5661ad==_0x2a3013;},'EpjOS':_0x5364('‫1e5','rdg6'),'KCnoB':function(_0x269b66,_0x4af5ef){return _0x269b66(_0x4af5ef);},'CijcM':'yiIwI','eeDVm':function(_0x4db397,_0x5715ca){return _0x4db397===_0x5715ca;},'gaIDe':_0x5364('‮1e6','q[hr'),'DCHbQ':function(_0x9fc47f){return _0x9fc47f();},'vUldE':function(_0x252f32,_0x2f201f){return _0x252f32/_0x2f201f;},'SMeBO':function(_0x516f4f,_0xb5771){return _0x516f4f+_0xb5771;},'TlLVp':function(_0x14ffb7,_0x3bfba1){return _0x14ffb7+_0x3bfba1;},'LPSSI':'&sign='};var _0x55b7e0=Math['floor'](_0x286ca7[_0x5364('‮1e7','rdg6')](Date[_0x5364('‫1e8','cTr!')](),0x3e8));var _0x48e1c3=_0x5364('‮1e9','c1[8')+user_num+_0x5364('‮1ea','3rDv')+_0x13cd6a+_0x5364('‫1eb','ctBm')+_0x55b7e0;var _0xf107ff=CryptoJs[_0x5364('‫1ec','hF4D')](_0x286ca7['SMeBO'](_0x48e1c3,'&')+appid)[_0x5364('‫1ed','Ur63')]();_0x48e1c3=_0x286ca7['SMeBO'](_0x286ca7[_0x5364('‮1ee','RmKi')](_0x48e1c3,_0x286ca7[_0x5364('‮1ef','vAoU')]),_0xf107ff);let _0x95fd10={'url':serverUrl+_0x5364('‫1f0','es&$'),'headers':{'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'},'body':_0x48e1c3};return new Promise((_0x1178dc,_0x430c84)=>{$['post'](_0x95fd10,async(_0x55c29a,_0x1e3f88,_0x16a1a3)=>{var _0x2da59a={'LIOVe':function(_0xe38293,_0x4a72d3){return _0xe38293*_0x4a72d3;},'iatCi':function(_0xc719cc,_0x2fbdc8){return _0x286ca7['fBEZz'](_0xc719cc,_0x2fbdc8);},'oimpL':function(_0xc5e256,_0x11f7e3){return _0x286ca7[_0x5364('‫1f1','Xeaq')](_0xc5e256,_0x11f7e3);},'VYLmg':function(_0x51058a,_0x58d266){return _0x51058a+_0x58d266;},'kXqxk':function(_0x11393f,_0x366aab){return _0x11393f+_0x366aab;},'uoIgV':function(_0xabdc4,_0xb51123){return _0xabdc4+_0xb51123;},'JAWTV':function(_0x1b14aa,_0x4e9b13){return _0x1b14aa+_0x4e9b13;},'LfCIC':function(_0x1db7f2,_0x4684ac){return _0x286ca7['fBEZz'](_0x1db7f2,_0x4684ac);},'vVJMc':function(_0x580ad0,_0x5e3704){return _0x286ca7[_0x5364('‮1f2','hF4D')](_0x580ad0,_0x5e3704);},'nYevY':function(_0x91e6d2,_0x562f69){return _0x91e6d2+_0x562f69;},'MMCLR':function(_0x55658e,_0x313b9a){return _0x286ca7['gQgnF'](_0x55658e,_0x313b9a);}};try{if(_0x55c29a){if('sEnjP'===_0x286ca7['WQHPV']){console[_0x5364('‮1f3','GfjJ')]('\x0a['+TG_ID+_0x5364('‫1f4','Gphx')+_0x55c29a);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x55c29a;}else{console[_0x5364('‫c2','@!V(')]('\x0a['+TG_ID+_0x5364('‫1f5','9E99')+_0x55c29a);subTitle+='\x0a['+TG_ID+_0x5364('‫1f6','2SQ8')+_0x55c29a;}}else{if(_0x286ca7['nQwJN']!==_0x5364('‮1f7','bs^K')){let _0x19bf4c=JSON['parse'](_0x16a1a3);if(_0x286ca7[_0x5364('‮1f8','2SQ8')](_0x19bf4c[_0x5364('‮1f9','nqfP')],0xc8)){if(_0x286ca7[_0x5364('‮1fa','c1[8')](_0x286ca7['pZIve'],_0x286ca7[_0x5364('‮1fb','UZSv')])){console[_0x5364('‮1fc','QlbL')]('\x0a['+TG_ID+_0x5364('‫1fd','4V!r')+_0x19bf4c[_0x5364('‮1db','@!V(')]);subTitle+='\x0a['+TG_ID+_0x5364('‫1fe','$!x6')+_0x19bf4c[_0x5364('‮1ff','Gphx')];yyz_d=![];}else{user_index=_0x19bf4c['msg'];yyz_d=!![];}}else if(_0x286ca7[_0x5364('‮200','bs^K')](_0x19bf4c['code'],0xca)){console[_0x5364('‫201','dQCs')]('\x0a['+TG_ID+_0x5364('‮202','s[]x')+_0x19bf4c['msg']);subTitle+='\x0a['+TG_ID+_0x5364('‫203',']jqF')+_0x19bf4c[_0x5364('‫204',']raB')];}else if(_0x286ca7[_0x5364('‫205','nqfP')](_0x19bf4c[_0x5364('‫206','@!V(')],0xcd)){console['log']('\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x19bf4c['msg']);subTitle+='\x0a['+TG_ID+_0x5364('‫207','QlbL')+_0x19bf4c[_0x5364('‫1de','3rDv')];}else{if(_0x286ca7[_0x5364('‮208','bs^K')]===_0x5364('‫209',']jqF')){console[_0x5364('‫14f','rdg6')](_0x16a1a3);if(yyz_Kami){await _0x286ca7[_0x5364('‫20a','oMPo')](card,_0x13cd6a);}else{console['log']('\x0a['+TG_ID+_0x5364('‫20b','Ur63'));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}}else{console[_0x5364('‫20c','Lum9')](e);}}}else{console['log'](e,_0x1e3f88);}}}catch(_0x416bef){if('BbbiH'===_0x286ca7['CijcM']){var _0x27fc41=new Date(_0x2da59a[_0x5364('‮20d','E$AG')](timestamp,0x3e8));var _0x3a363b=_0x27fc41['getFullYear']()+'-';var _0x24e63e=_0x2da59a[_0x5364('‫20e','4xUU')](_0x2da59a[_0x5364('‮20f','RmKi')](_0x2da59a['VYLmg'](_0x27fc41[_0x5364('‮210','3rDv')](),0x1),0xa)?_0x2da59a[_0x5364('‮211','!DuH')]('0',_0x2da59a['VYLmg'](_0x27fc41[_0x5364('‮212','$!x6')](),0x1)):_0x2da59a[_0x5364('‮213','2SQ8')](_0x27fc41[_0x5364('‫214','cTr!')](),0x1),'-');var _0x42d9cf=_0x27fc41[_0x5364('‫215','dQCs')]()+'\x20';var _0xa48d60=_0x2da59a[_0x5364('‫216','g7El')](_0x27fc41['getHours'](),':');var _0x29a07a=_0x2da59a['uoIgV'](_0x27fc41[_0x5364('‮217','$!x6')]()<0xa?_0x2da59a[_0x5364('‫218','@!V(')]('0',_0x27fc41[_0x5364('‫219','ud!0')]()):_0x27fc41['getMinutes'](),':');var _0x5f5b35=_0x27fc41[_0x5364('‫21a','$!x6')]();let _0x3cc9a3=_0x2da59a['JAWTV'](_0x2da59a[_0x5364('‫21b','!DuH')](_0x3a363b+_0x24e63e+_0x42d9cf+_0xa48d60,_0x29a07a),_0x5f5b35);return _0x2da59a[_0x5364('‫21c','pdQv')](_0x2da59a[_0x5364('‫21d','vAoU')](_0x2da59a[_0x5364('‮21e','py6p')](_0x2da59a[_0x5364('‮21f','es&$')](_0x3a363b,_0x24e63e),_0x42d9cf),_0xa48d60)+_0x29a07a,_0x5f5b35);}else{console[_0x5364('‫1d3','$!x6')](_0x416bef);}}finally{if(_0x286ca7[_0x5364('‫220','g7El')](_0x286ca7[_0x5364('‮221','ctBm')],'VeKtu')){console['log'](_0x5364('‮222','GfjJ'));return;}else{_0x286ca7[_0x5364('‮223','c1[8')](_0x1178dc);}}});});}async function card(_0x24afd6){var _0x2ffb89={'AXPub':function(_0x245ef9){return _0x245ef9();},'VJDfR':function(_0x3fc976,_0x33f688){return _0x3fc976!==_0x33f688;},'idXhm':_0x5364('‮224','4xUU'),'oFXZL':_0x5364('‫225','4HA!'),'uJEHf':function(_0x18d21a,_0xe5432a){return _0x18d21a!==_0xe5432a;},'iGJZy':function(_0x391289,_0x2be221){return _0x391289===_0x2be221;},'EMbmu':_0x5364('‮226','5rbn'),'iBJGm':function(_0x3bc36d,_0xe84b45){return _0x3bc36d==_0xe84b45;},'NdhKu':function(_0x5aa1ac){return _0x5aa1ac();},'COGvp':function(_0xfcbe5a,_0x174064){return _0xfcbe5a/_0x174064;},'WUowR':function(_0x3d59b2,_0x35b4b1){return _0x3d59b2+_0x35b4b1;},'RTppY':function(_0x2c1d67,_0x1bf0c7){return _0x2c1d67+_0x1bf0c7;},'BkJiv':'&sign=','dTRKg':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x5364('‫6e','GlvD')](yyz_Kami);var _0x1fce10=Math['floor'](_0x2ffb89['COGvp'](Date[_0x5364('‫227','4xUU')](),0x3e8));var _0x171a2f=_0x5364('‮228','4xUU')+_0x24afd6+'&kami='+yyz_Kami+_0x5364('‫229','!DuH')+_0x1fce10;var _0x41cef1=CryptoJs[_0x5364('‮22a','dQCs')](_0x2ffb89['WUowR'](_0x171a2f,'&')+appid)[_0x5364('‮22b','E$AG')]();_0x171a2f=_0x2ffb89[_0x5364('‫22c','QlbL')](_0x171a2f,_0x2ffb89[_0x5364('‫22d','Lum9')])+_0x41cef1;let _0x333fae={'url':serverUrl+'card','headers':{'user-agent':_0x2ffb89[_0x5364('‫22e','POcG')]},'body':_0x171a2f};return new Promise((_0x3be49d,_0x1998c6)=>{$[_0x5364('‮22f','$!x6')](_0x333fae,async(_0x3e1d0a,_0x12f454,_0x4c5246)=>{var _0x6d997b={'RPbHy':function(_0x3d57e6){return _0x2ffb89[_0x5364('‫230','bs^K')](_0x3d57e6);}};if(_0x2ffb89[_0x5364('‫231','qdgr')](_0x2ffb89[_0x5364('‫232',']jqF')],_0x2ffb89['oFXZL'])){try{if(_0x3e1d0a){if(_0x2ffb89[_0x5364('‫233','Gphx')](_0x5364('‫234','pdQv'),_0x5364('‫235','hF4D'))){let _0x27d964=JSON[_0x5364('‫236','bs^K')](_0x4c5246);if(_0x27d964['code']==0x1){console[_0x5364('‮11c','c1[8')]('\x0a【'+Tips+_0x5364('‫237',']raB')+$[_0x5364('‫25','oMPo')]+_0x5364('‫238','4V!r'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5364('‮239','2SQ8')]+'\x20签到】:\x20签到成功~';}else{console[_0x5364('‫14f','rdg6')]('\x0a【'+Tips+_0x5364('‫23a','Xeaq')+$[_0x5364('‫23b','POcG')]+_0x5364('‫23c','$!x6')+_0x27d964[_0x5364('‮23d','nqfP')]);subTitle+='\x0a【'+Tips+_0x5364('‫1d4','4xUU')+$[_0x5364('‫be','Xeaq')]+_0x5364('‮23e','4ilS')+_0x27d964[_0x5364('‫23f','%O#8')];}}else{console['log']('\x0a['+TG_ID+_0x5364('‮240',']raB')+_0x3e1d0a);subTitle+='\x0a['+TG_ID+_0x5364('‫241','4HA!')+_0x3e1d0a;}}else{if(_0x2ffb89['iGJZy'](_0x2ffb89[_0x5364('‮242','E$AG')],_0x2ffb89['EMbmu'])){let _0x39fa18=JSON['parse'](_0x4c5246);if(_0x2ffb89[_0x5364('‮243','nqfP')](_0x39fa18['code'],0xc8)){console[_0x5364('‫244','ctBm')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x39fa18[_0x5364('‫9a','QlbL')]+_0x5364('‮245',']raB'));return![];}else{console[_0x5364('‫1d3','$!x6')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x39fa18[_0x5364('‮246','!DuH')]);subTitle+='\x0a['+TG_ID+_0x5364('‫96','4V!r')+_0x39fa18[_0x5364('‫247','vAoU')];return![];}}else{_0x6d997b[_0x5364('‮248','4V!r')](_0x3be49d);}}}catch(_0x5b8263){console[_0x5364('‮c1','cTr!')](_0x5b8263);}finally{_0x2ffb89[_0x5364('‫249','s[]x')](_0x3be49d);}}else{console[_0x5364('‮24a','Ur63')]('\x0a['+TG_ID+_0x5364('‮24b','QlbL')+_0x3e1d0a);subTitle+='\x0a['+TG_ID+_0x5364('‮24c',']jqF')+_0x3e1d0a;}});});}function Format_time(_0x2e71b0){var _0x40b7b8={'PcyJQ':function(_0x14d69c,_0x1d78cc){return _0x14d69c*_0x1d78cc;},'cVqtr':function(_0x14210,_0x1ec2c7){return _0x14210+_0x1ec2c7;},'xOxYW':function(_0x149385,_0x4a5bd6){return _0x149385+_0x4a5bd6;},'ClPsg':function(_0x2c9dcc,_0x43e857){return _0x2c9dcc<_0x43e857;},'NwzJK':function(_0x1f4a93,_0x567f9b){return _0x1f4a93+_0x567f9b;},'oUGTt':function(_0x3e647a,_0x317bbf){return _0x3e647a+_0x317bbf;},'CjnAq':function(_0x3f9359,_0x482788){return _0x3f9359+_0x482788;},'VFvwG':function(_0x435cd5,_0x59e27c){return _0x435cd5+_0x59e27c;},'NwetR':function(_0x370296,_0x4c06e2){return _0x370296+_0x4c06e2;},'GfSyR':function(_0x727f5b,_0xbe1416){return _0x727f5b+_0xbe1416;},'soksW':function(_0x1212dc,_0x37aab3){return _0x1212dc+_0x37aab3;},'tMvKK':function(_0x356854,_0x58abcc){return _0x356854+_0x58abcc;},'uLPTZ':function(_0x40e685,_0x416a33){return _0x40e685+_0x416a33;},'LAoEd':function(_0x28da7e,_0xc4ee5b){return _0x28da7e+_0xc4ee5b;},'VbuRY':function(_0x220d1e,_0x21b6d7){return _0x220d1e+_0x21b6d7;}};var _0x1b9652=new Date(_0x40b7b8[_0x5364('‮24d','%O#8')](_0x2e71b0,0x3e8));var _0x263560=_0x40b7b8['cVqtr'](_0x1b9652['getFullYear'](),'-');var _0x39b321=_0x40b7b8[_0x5364('‫24e','s[]x')](_0x40b7b8[_0x5364('‮24f','ctBm')](_0x40b7b8[_0x5364('‮250','$!x6')](_0x1b9652[_0x5364('‫251','0m$(')](),0x1),0xa)?_0x40b7b8[_0x5364('‫252','py6p')]('0',_0x40b7b8[_0x5364('‮253','4ilS')](_0x1b9652[_0x5364('‫254','4xUU')](),0x1)):_0x40b7b8[_0x5364('‫255','%O#8')](_0x1b9652[_0x5364('‮256','Gphx')](),0x1),'-');var _0x4bd1fb=_0x40b7b8['VFvwG'](_0x1b9652[_0x5364('‫257','XuA2')](),'\x20');var _0x2720d6=_0x40b7b8['VFvwG'](_0x1b9652[_0x5364('‮258','ud!0')](),':');var _0x4c9faf=_0x40b7b8[_0x5364('‮259','py6p')](_0x40b7b8[_0x5364('‫25a','5rbn')](_0x1b9652[_0x5364('‫25b',']jqF')](),0xa)?_0x40b7b8[_0x5364('‫25c','POcG')]('0',_0x1b9652[_0x5364('‮25d','4HA!')]()):_0x1b9652[_0x5364('‫25e','s$fB')](),':');var _0x258540=_0x1b9652[_0x5364('‮25f','py6p')]();let _0x1427e7=_0x40b7b8[_0x5364('‮260','c1[8')](_0x40b7b8[_0x5364('‮261','Ur63')](_0x40b7b8['tMvKK'](_0x40b7b8[_0x5364('‮262','rdg6')](_0x263560,_0x39b321)+_0x4bd1fb,_0x2720d6),_0x4c9faf),_0x258540);return _0x40b7b8['uLPTZ'](_0x40b7b8[_0x5364('‮263','5rbn')](_0x40b7b8[_0x5364('‮264',']jqF')](_0x40b7b8[_0x5364('‮265','9E99')](_0x263560+_0x39b321,_0x4bd1fb),_0x2720d6),_0x4c9faf),_0x258540);};_0xod6='jsjiami.com.v6';



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