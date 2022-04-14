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

var _0xodR='jsjiami.com.v6',_0xodR_=['‮_0xodR'],_0x50e4=[_0xodR,'H0TDoEo=','wqEzw4DDgAY=','H8KrZcKz','wqDCmcK8','w6wHU+aykuWEgeWkrei2t8KGZw==','DMOlw6fmsIDlh5jlp5Lot7LCq2U=','EVjDow==','JDjDrOaygOWGleWniOi3vcK5Lg==','wqHChcK8','aAzDhsKJUw==','JsOaM8KuZw==','EGLDvsOew6k=','O8K7ZA==','wrkpwqPCvcKvw4HCjEVMw7hMLQ==','w61CPDtW','w6TCi2/DlsOa','w7B7NRFF','wp59b8KnWC4=','NkTDnMONw5EBcXd3woROw48cHcOSw7HDpi7DggDCucKyJC/CmMO7w4vCocKoM1DDhsOzeC3CsSTCpsKGbcK9egfDpG3CjgnCjxPCl3sPwojCsXjDmhPDgHVEIA3DvS8Zw5jCsWHChEYbwpoiwpZHwrnDlGXCuADDjMKnwoNTT8OzwqXCugDChW7Cj8K/w5hzw7LCoMKqwq9pZEAWw53CoTvComg+wrwCwqJEw6fCnVnChsKnKktxwpfDlsKieETCqsKpwqzCucO/w5LChRvClMKMLsKSw7cUfcOrw6caXl3Dn8Orwq5Yw6LCu8Odwq5absOZMcO8dHbDlMKzGsORw55Jw4JzJH9LwoVyTSPCjRDCvMOfwpjCq8KXUD/CpcOuw4XCvsO/w5TDnFp2w7QhP213wpnCp8KtOMOKwrnCnsOAwrUOwq3DqcO5w5EOwqnDmMOowrh/wqnDs8KZ','K8O/BMK7QQ==','dTrDuMKbTg==','F1rCig==','w4jDjsKLFS8=','ZVrCscKOwq0=','w6vDkcKVHyE=','wrPDkWnCriI=','w4jDh8K3Exc=','wpZSwobCrsOl','wpXCq8OoZA==','CE02bVk=','MMKQaMKPEg==','w6LDmE0kFw==','w5QTLUnCuQ==','awfDiOmpmuivjei3luWNi3R+6Ly45Zunw50=','PMKyw5FTbg==','NsK6wrPCpTvCjcKjw7k=','a8OcLcKOBwDDvQ==','QRDDtsOvJA==','wozDgAEZGA==','Kn/DjTrDtw==','RkTCusKSwrE=','YnDCkSHDvg==','w6wHU+S8heeWpeWNveWtlMKGZ+awo+afheWNreWuoeWOoOS9o+eWvA==','DMOlw6fkvpfnlbzljoLlrJHCq2XmsrvmnIbljbHlr7zlja3kvLPnlbY=','GEEdw6vDgw==','wpE5w7Ybw6E=','OEoaw7zDpA==','QcONw7Q=','ZsOqwr5j','LMKhDcOgw54=','KuetpuWIsuOAnsKXWueuguWKr+aLquWLncKd','5o6756SfSSYQ6LSo5YyxcQ==','wrzDvBIIBg==','5o+H56WBCAvDh+i1gOWNjcKs','w7MYF8KwZQ==','DeevnOWKo+OCu1VQ','WEFvw6Rt','w6jnrq3liJfjgqIJw6U=','wqgPw6bDnmA=','5o2O56SIfX8P6LeE5YyYwrg=','wosZw7HDnwg=','ceeuoeWLt+eJnuaBleODssOtwrHkuo/lpLPlt73nra7liIo=','5o6V56egbRXCvOi1quWMjHA=','wpHnrYPliYPni4zmgozjgI3CqMKc5LqN5aar5bS+562y5YmX','fxvDq8KTaw==','fG3Dli7DvMKn','w59cAT9m','ekXCiwfDtcKb','d8K0wqbChT3Dng==','wpTChTg=','wpjDlkM=','w4kmB8KPbw==','w6vDslwNJCQkw5g=','WUDCusOEw5c=','A3vCjhB8','w7nCo00rw6DDqMOvbxXCiMK3wp4Zw6HCr8Onw7XDiFbDnHHDi8OqQhkDwqFrM8K3QxvDiMKww5pnwqTCu8K+w5HDk8KGZsKFw7jDscKRLiRRwohobktVwp0jwpXDsH1ldAlDZMK7ShDChBnDvSrDo8O7cg57RkVHwozCv8Kpwq5HRUjDoSENFsOfw4YXPGlvw7Rqw49Dw45nEyEdGWIqwpU+DsK0wrLDqsKDw5nCrsOVw6g4UcKSVQ4yC8O+w5cFwrLDq8OREcOUwo7DgcObwq56EMOmwrczwonDm14uDMOIw63DgcKKTGDDocOuwo7DlVPDhMKbwqs/NkEufsKyw4/Ck0zDucK2f8Kqwq7CisO6IjzChQ5pw4DDqQzCicObwqjCnBprfE7CiMOWworDmsOSH8OAEcKkwo56EMKUMCdTNcKMw7JzwpjDmw8rcQHCgA==','D8KDasKOMw==','B8K4McOpw4w=','w644F0zCtQ==','DG/DpWRr','wrIBw7DDriQ=','Zz9EbcKa','NcKuK8OLw4g=','wprDr2o=','OMKxwqPCjSw=','wojCt8O8','YMOWPg==','wpHDjMO75L2a55Wi5Yyi5a2BKMO26LyA5Zm+w6o=','HsOAHcK3dA==','CWPCvht8','w6TCnHzDqsOP','dF3Csg==','UxDDgOS8neeWs+WPh+WtvWZ0','JhHChuS/m+eWleWMjOWvlmJi','McKOwoPkvaTnloXljrblrrfCtMOE','Il0x','5o+956aYwr7Ch0LotZbljpFW','b+inrOedneilm+mgnuOBkMOrwqnnva7nuq/orrzmsbnlpbfotpo=','VD3DrcOcIw==','wr5lwr3Cr8Oc','w5PCqUMEw7nDqMOiGUXDh8O1','JsOVw6J2w58=','SsODIcKmIw==','w7jDjcKIKDRRw5sy','NsK6wrPCoDvClsKlw6I=','wqDCvEDDnl0=','w5ZYBzfDpHLDp8OIIsOx','YsOgwq5LZUcNBw1D','TVzCp8Oew5g=','w4rDs30yMA==','KUXDtmR9','w48YAcKeew==','wozCt8OVf8OfPA==','w7kECsKlacK2GcKuVA==','wrXmiKjkub7liJPkv7notJByw5bCpMOzRcK5acKhC8Khw6MA6Kyo6Ieo6KGK5a6s6KGAZg==','w7dBHj1Gwoc=','w5/mi6zkubvliZ3kv6PotLTCqcKFwoLChMOc6K+d6IeP6KKH5ayJ6KC+wrw=','cklwZsOJTcOJw7nCkA/Cm19twpnDl8OXR07DkAwow7pvw67DoMKVKcOfM2LDlcOK','XknCnMKmNsOfwpM3J8KWF8KOJ1jCqMKUwqATwqbDsGjCi8OeHD7CicOAWsKDw4rCi8Knwq3DpBfClwIOw57Dl8O3OSTDnQ==','Q0XCmgvDt8OKw5pzYcO5w6fDkF9ew7bDp8KRNA9MZMOaMcOEw6TDp27DgT54UDLDuyJuLz/ChHQWw4s9CcOOwpkXw5HChU3DlMOLw6sMw5o5S1p2wrXCkGBVw67DgMK1wozDlmTCnMO0w5zCmcOgw5PDkMKmZyrCvGHDtcOTf8O8ZyskBGnDj0fCiMKuWj9/w6PDsS3DqsOHW21Bw4fCoAvCnF8lw7gTawPCn8Kaw60FeSBTwpVuw4gswqDDusKkwqNxw5Q=','bj7Dv8KlUg==','w6nDocOTF8KAw5PDhAzCgS5RUMKwwpU=','w7sSF8KneMKqRw==','SMOWw7s=','dW3DhjrCvcO5w4XDnMKRw4DClMKXHsOFMQ==','dU55w7U6w7QBSsKUOMOFwoEwFD0HMnXCiw==','w77DrX8VPy4rw4vDsRjDrcKKwqZJwrLCpsK1DBIfS0VWwo5mw4ERXzLDh8KI','w7jDksKVFQ==','MUTDvkZ3dMOnw5cMw5XDtgp2BMKLw4UrwoIfWsOLwqZtesKBXcO0ETQWw4rDp0bCugvDg8Ogw7YOa2Qgw5QLw5HDvgnCn8OFw4MDw7Bcw4/DjFgTI3tVU1jDrGhSSsOmMsO6BzNOw4bDg8OHA8OSwovDgMOxwr3CqkLCqFcrTMKkwoRCKi5AGRXCtm5lwrBgBAZJO8KbHsO4wpkscMK6w6g4wp3DvsOAdnrDtyNKLAzDncOmQW4cTsOZw5bCvkhhEMKERcKhJgp3ZC3DncOVSMKmw7Yrw5Rbw5jDpcK8LsKmHwjDg8K6wrnDkWd5wrcxw5PDncOYVmHCmsKECGoPJGfDlcKaw7rCtyRNHsK7w6jDoTjCuMKQwoEZwol9HxnDqz8/aH8Abh7CuHZjUR99YsOQS8KEw6TCpAzCjcKCLC8=','aU3CgkzDuMOTw5c1OsK8w7nChh55','SmLCkMONw6Y=','E8KuLlzDpw==','HFvCvS5t','RnA3w7EJ','EcKwbcK1DA==','POOArcKbwrl16Ieq5p6Q5peJ5Lqo5Yah6LSa5aCN5pmG44Cw77+Lw6vjg57mnJHkuIHluIzlj4nluqfnmLvohbbmnbvmlKDkuYblj7jlhoXku5jmtaPljJ3nmZnkuKLkvbPohr3mnJ7vvLLkuKjnl5nkuJjmtJHoroXlkazlraPku77nop7nqaPvvbznpbvmrInnl4zku4rllq7ku4XmiKfpnZnmspbnmJznmJnvvq7vvJblk43liIblk53mnL7ohLvotoXjgbsA44Cr5Lu26IOU5Lyg6K2u5YaC5ZOr5rCl5oCf44K35YWN56Ge5oGP44GN5a+j5pSs5oK45ZCk5p6o5paj5oGi77+y6K6y5qKt5o6v5oGu5YeZ6IaY6KGa5Yi45pSP44OELuOCrOadh+iGiOado+aUuOS4ju++meekvuaureS4oOS/iOWFj+S+k+WOp+ODu+itreWdueODjue8ruS9puS5reWNluS7rOS+hOW+g+W/j+eZp+i+mei/jeOClOWPveW6ojDlkqTli4Xlk7LmnZnohKPot5vjgLAX44Or5p2+5Lmn5ayw5Lqu5L+H6Iat5pyO6ZW76aOI5qew5Li76Le56Ler77ys5Y+i5oqL5L6g5LiG6ZqE5Lu555aA5LiM5L6d6Iaj5p6X6ZWJ6K625ayf6IaP55qB5LiM5L2E5oyQ5aWt5omc5o645a6144CawrLjgZznm6Xmj6jmi6TplLbmjbXkvJbnlpjohq7mnLHnmr/ku4Tkvrnnlo3miZ3vvaLlj4rmip7kv77ku4TpmpTkuYzkuojmjanmi7blhbjkuZ3mnIbkuq7ooKzkuLHov6vljK/lmKXlr6jCpOWekeWMouawsuW8p+aJueebh+WGmuayuuilv+eZseaDneWFmeS4nui/tuiiqeS+t+aSu++9n+adp+S5pOWst+S6iOeXnOavi+W+kei0kOeYp+S4leS8n+majeemv+awpea9puaLjeWHk+S5g+WSuOact+ankuS4oei3r+i0l+OBvyrjgazlpofmnKrkuajkv4DljInkv6bmi5XkuKTkubrorKHkuIborK3oh63mnITljZTogJjmtK/lqq3kv7Pni6rlhbvmnZ7liq3vvaPlipzlurDljYLmlJ7pgq3nnKblu6jmjqPkv7/ouLHkuororZDmmZHjg5Dmiarmnp/mnJHorqHmmpnvvY/mi77kurTlsJ7lnrbmlYLliLnorKzor73ml5TkuJflkZrli6zpmK/nmYTlhIzohbLmnL3jgqLCseOAkuS4ieS9iOS4sOS6kuS+v+aXsOW9heaehOefpuavvumigeeanOeameS6luaKqeeakeaNheaIiemVoeaMh+S+tueWueivsOS6ueW7t+eYjuS6heS8l+iHqOaes+ebsOS9queVruiDm+mDn+W5kuS7p+e4kemam+itlOasqOWgpeaYvOOBoOadjuS4kOS+p+eUpemam+aXqeaZuuaUrOaJo+iipuWGouattOWFnOi2t+WgguaameeYl+aev+WJu+ODgeS7i+aXhuS+jueUqOW4meWlq+WJoeS5i+S7jeS+g+eateWHuuiGleafn+aImeS5g+W7gOaWgeS5pu+9i+WKpOilo+S7guaBoeW1huaMuOWMhOatkuWEiOi1k+Whueabs+OCoQ==','wrzDoTgCGgc=','wqpbwp3Cp8O7','YktHw6JG','GcKadMKDw4w=','w4DClGTDl8OKLw1lw7nCt8Ok','wpMYw5XDoWo=','worDk8OmDcOD','Vw7Do8KyYA==','EUTDj8OK','w7fDinsUNQ==','w6oBI8KTTQ==','wqHCgl7DmFQ=','KMOrAsKnR8KwHMKGwr3CtA==','wqLClMOWX8O0','N8KqCMOhw6AIR0TCpETDs2w=','H1cNZg==','w7JdNw==','U3kR','UcKDeeS+teeVjuWMleWtnnLCtA==','Amd7','Cm3CtTdgwoDCosOcasKTwrfDjg==','wrrDgyIoNw==','WlDCpcKRSA==','VmHCuMKBwqQ=','XOetleWKtOeKmeaAmuOAicK8w5g=','w7cFFA==','FcKqZcKzOw==','wpTnrrLliIfni7Tmgo3jgpXCtGA=','44O977yv5p+k5aKm5YSr55qh5bm85YyI6YSqLQ/DvcOGw7fDtgfDmcOYw4YCwrs2','w6HDsHIeKA==','XE5/w6J9','w6bjgKXkvpLog4jmjaLnpaPjg7nvv4rpqanor4zohabmnr7DrMOgw47lpY/otobCq+itleWKnOS8oeaVruiEp+aeg+S4v+S6l+aFjeWHpuWslsKn','HkXDkA==','woYTw4ksw67CrmHDmMOTw7TCoWE=','W2QA','wq3DpsOEMcOK','P1vDpcO3w6U=','woDCqsOt','f8OJNcKjEg==','w6B5RMK6dw==','QkByw55ywqFNJMOGecKZwoQ=','w5HCokE=','w4fCo04dw6vDo8OsH0TDh8Ozw58=','wq7DpsOeFMOcworCh0LClTocEMK2wpTDhV/DtcKZwpjDncK8w4kEw4ZyNmo=','wrIAwoDCp8Kx','w6vDrmMLJQ==','fxfDhw==','w6HDr2coO8K5w4Y5CsKsM3E=','KW7DkyDDpg==','w7rDhsKK','eXd7UMOKHcKew4DCniPCl1Q=','w51gcA==','wrvCvF7DrFTCoh8AHgbDiGM=','wosZw7HDnwjDjMOF','w7rDs3k=','wrXDvcOTO8OIw5fDijLCljwKXw==','w4fCvFsrw7g=','VzLDn8OaMQ==','YcO1LcK7Aw==','WmHCqg==','w6zDh8KFOjxYw40FEMKMNMOo','w6zDrWMQIg==','w5jCqVklw7jDrA==','AMObw4Q=','w6hKwqjCh1Dohpnmno/miLHoobUDw6zDq+WNnuS7reaXremVuu++ow==','wqU5w7bDjW4QWQ==','f1fCocOBw5fChcOwZ8KWKiHChcO7RsKqwqIk','w4JKwqjChw==','WlLCjw==','w79Bwo1O44KZ5Ya4Iw==','cEBRw4NQ','PUTDnm1e','aQnDncKWUg==','XzbDkcOyCw==','w5DDs1U/Mg==','wrjCsF7Dm1g=','V3vCqMKUwq/DrsKtwoVow5gMw5zDigvCnEnCqAXDtm1BKxLCjhhUw70=','Yj/Dq8K6Xw==','QW/CpsK/Sw==','GMOHw49pw54=','Yk/CjgXDr8OO','LMK1GMOmw60=','H8KIGVDDvg==','MH3DqzjDvQ==','MsK6dQ==','NOOAmuiFrOaelOaOruelvuOArO+9rumqluitiOS6r+mAiOWFu8O/5Y6k6IOL5pyO5YiP5ZqT5Y6a5ZuRw7HlpqfpnYXli7fnkLPliprlj6fpg6LmrZ7mi7vClzvCgFzDlcKIAQ==','KMK8Dg==','w51SFA==','wpXjgo3ohJXmnZXmjobnpbfjgZvvvqXmr7zoha3mnq/ljY/ogLHpnajpvYTnjafloI3ot70=','f8OcN8KuKBvDrCHDssKZ','wowWw7jDnw==','XWsCw5sW','w5dUHRvDoXDDqw==','w44GKX3CtA==','DMKFRcKRFw==','d1vCq8K6dQ==','M2zDt8Osw6w=','UQ/DgsOwNQ==','wpMkw4/Dohc=','RDnDm8OzHCI=','f3nCujrDvA==','wqPChsKQUgI=','wqvCui3pqZroroXotqnljbnCl8KU6L+a5Zufw4U=','w4skO1ER','FcKjSsKaw5k=','NAwiw6TDvyTDs8KzHUJpRg==','wpQSw7sDw5A=','w6N8JxHDrg==','V8OEwo5tbw==','e3DCh8K7YQ==','w4zCum4vw4M=','w6pRASpH','GMOXw7Jjw4g=','TGDCpcK7wrvCs8Ogw7Vrw54awpM=','F0TDgQ==','w5XkuZbkuIrkvpLmg6bjg5g5wqfnv6bnuYnorKLmsYLlpbfotLc=','5o6K56SkwpJkwr/otrzljZ7CnQ==','FUXDoEpj','OuS5k+S4i+S8nuaBieODoMO9fee9hue7kOivp+ayuuWmjOi3jg==','NcK7MkvDtA==','w7dXYsKMVA==','w5thYsKl','w4AqCns=','MMK8DMO3w48PTU4=','wpkTw5c=','5o2k56e2Gm/Coei2ouWNuWA=','w7bDoWoW','e1nChRDDssOIw50z','LMKZeeS+k+mju++9rg==','cxpRRw==','cMO2wr90ZUceHA==','W1LChsKzdQ==','JMO9D8KxSw==','LOS6k+S7o+S8q+aAieOBpcKiaMKew41We+aZqeense+8rg==','w7BbMzlMwoPCgsO9','TMKUwoPkvYLpoLDvv40=','CcK3ZMKkKh1lw5w=','bsOGw6PDmDk=','CsOYw4x0w58=','fC9WXsKJ','w7dcNDda','wpTku6bkuo3kvqPmg6PjgpXCtGA=','wqvDocON','w5jCo1A=','w57CnmI=','w77Dr3k=','5o+m56WiwpjCul7otanljIrCjg==','N8Kbw6dxfg==','FuS5suS4j+S9tuaAnOOBnsOHwo4=','w7LDm8Kb','wro/w4cBw6E=','CGAseHk=','w4bDtX4qPQ==','w5VYJStu','GcOHw4ZpwoLCogLDq8KWccO/w5V9wr0zw4vCm3Q=','w4TCo0Q2','YjhPacKc','McKTU8KzEA==','wr/CmcKiei0kw6VNwrLCtcOUwqs=','EETDow==','5oyS56Wmwq/CtCrotZvlj4vDlg==','BcOaw4d+w5U=','5o+I56SIw7jCuMKT6LeO5Y2iPQ==','AksAbkU=','w71dNDc=','wrnChcKiTgI=','w4gkGQ==','5oyl56WGwp1ewqTot6/lj7TCpw==','wrrmjqbnj4Pjg4Qnw7k=','Bnp4wrhQ','beaNg+ePm+ODhQnDow==','XFxs','VOaKi+S6juWIpOS+m+i3mcOQNAQTwovorKfohazooInlro/ooo/DnA==','YkXChw==','5o2056WxUzfDn+i3oOWMkVg=','5oyF56aoW0BT6LWE5Y2+w6o=','w5FgYsKlTg==','FuaPreeNmOODhzbDkA==','Z2tl','KlHCpg1W','w4dXFjhg','S+etm+WJlOeKveaAvOOAn8O8cee8i+e7puithuaysOWms+i2oQ==','5o+u56SwW8KVU+i1ouWPilQ=','LMK0JF3DqQ==','EeetkeWIu+eIt+aAlOODlxVb57+z57uE6Kya5rKn5aWg6LWD','MsKaw6Q=','IcKrBsO2w4w=','w5BrIBLDgg==','fUvCsAXDog==','aUTCoTbDsw==','wrvCu0bDmFbDqho6DjTDlWXDocOOAcO2AA==','BEoqZ24=','wqPDsMOaJ8OD','w51BCgJF','wq5lwp7CucOQ','w7bDm8KjCT5aw5wzE8KD','woMWwpzChcKt','woMRw4jDsmI=','wrbDvcOZEA==','w7ASFnc1','fD7Dg8KLdg==','VyIi5rOn5YSh5aWL6LeZwqXDmui+luWYvRU=','W8OrMsK/JQ==','D0ELeFc=','w6o0G8KtaQ==','fhjDhcKe','wqMowr7Ch8Kw','Ouimu+eeuuikuemit+ODoMO9feesuw==','EkXDgsOBw4U=','Jeilh+efkeingOmineOAuEJT562E','5q676I+B5Y6l5Yul','wqzCslPDkg==','wrkjwr/CvcK4w5TCh3lN','exRC','5oyW56aowodJwoLotpbljZ9N','RMOMw7fDjxc=','H+etseWLrOeJkuaDneODhcK4wornvZ7nuaPorpnmsrDlppjotZs=','TmsEw4sb','R8OIw7DDhRs=','T8O8wolqVQ==','w5M5FA==','w7lxXuS9peeXmuWOp+WsoELCj+axveaes+WPl+Wtq+WPpOS8uueVoQ==','w5xvcsKh','M8K3IsOSw44=','BsKfMXvDsw==','A3t7','w7Xnr6zliYbni5vmgb/jgbPCs8Oq5Lib5aaN5bSC562U5YiV','5o6B56elw6rDhXnot4XljKDCsQ==','wqHCvUPDlks=','w6jnrq3liJfniIXmgLLjg5RHfw==','FHHCqw==','w5Y4F0Yc','KuetpuWIsueKueaCrOOBq8OGwr8=','KMKpJw==','fcOgw4nDhS4=','wpvDuxU0Hw==','KcK1Jw==','VOODpeiGmeacuOaPluemteODoe+9oemrm+ivsuS6qumDiuWHtWnlj6nogrfmn5vlioPlmJnljrPlmpgU5aWw6Z2L5YuW55Cd5YuH5Y2F6YKx5q615omiw6B6Zj3DgsOLw4I=','KcKgDg==','LFFtwp5K','SErCvcOjw70=','b8OAKsKDAg==','TWIXw5Mba04dfcOn','eFrCjsKnWw==','c31uW8OO','J8OHw4dVw7w=','KMOjw7Vdw7U=','UFrCvcK8fg==','MMKGwqnCnAc=','wpIYw6bDjg==','FMK1SMK5Fg==','Zndl','5o+m56SHw4XDuyHot5bljYtu','W+etleWKluOCtcKHTee9gee6hOiuteazqOWlj+i3ig==','wqHDpGnCsRY=','b8OWPcKv','6IWx5pyJ5o6056SxECPDq+i1t+WOrRo=','5o2K56WMXsO4MOi3v+WPg8Ok','wpwSw5QWw7E=','OOetjOWLpeOChMKEw4jnr6vliK3mi6nli5s6','wqnDvcO5EcOr','dl8zw6o2','KkzCthpt','PcKwwqA=','5o6p56S4w6FFNOi3n+WMr8Kj','wrLnr77liK7jgaZmw74=','N8K7dsK1w7s=','wpHnrYPliYPjgavCtzw=','W07Cjw==','w5RhYQ==','chVT','wqTCvMKKcSQ=','NsKnCMOuw4NOSVPCgk7DtVDDgBjDoUPDisKnIyvDhA==','ZUvCl8KGwpI=','L8OXw4ZJw64=','w4h+FhZF','OVBKwp5Z','5oya56W8w7fDj8Ol6LaA5YyZOg==','w6ropoTnn5HopKTpoZnjgrfDlDrnvbnnuYXor4/msI7lpJPotoQ=','HMOVw5Fow4g=','UkBvw6Q=','w7EkI8KSSQ==','VU5/w6A=','EGzCqA1h','LOilu+edkuikjOmjt+OBpcKiaOeuuA==','w6bopZDnnqHopqLpoL7jgqHCkk3nr54=','5qy26I+M5Y+z5YiW','wqbDtxMyDhDDoMKpwrQ=','wpo/wr/ClMKx','wqYpwr0=','wpU8w5zDlyU=','w5B6csKwRSlkMsO6wrTDhsKnZjXCicKsLWBQw7TDg8KLwoXDiMOew44l','GlvDlsOIw5QOcSwrw4UQw4BeIsOUw7HCqHbCmkjCmcKuMzjCg8Kvw5rDtcO2MFk=','wpgzw6cCw7E=','w4TDtHsDPQ==','PWPCvhw2w4vDtsKyOMOSw6vDi8KLw6fCt0FSw7N2','CG51wq0=','w4olNsKYVA==','UF97w618wqVOD8OLd8KDw4o7FSZTYDrDgVfDpX9QBkoPwp8VZsKSw4E=','w4g6B28M','w57ClGvDlMOaLg==','wr3DqErCpgs=','w4MuClzCh8Kqwoohw4rCvcOI','HMKIKlHDqQ==','wqHDt8OeKcOAw57DnAU=','IsKqHcOBw4cVTg==','w77DucKSAD8=','woM5w7oHw6M=','w54HHUYA','bmQ1w7Ak','asO6GsK6Mw==','E8Kyw6BZRQ==','wrPDvhkCDA==','Q8ONw6Q=','CMKLXA==','w5lSAA7Do33Dv8OZ','LnHDrD3DoMOzw4fDmg==','w7PDo30YKcKww5Bb','PAnDkMKMVcKGwqgvczEhw4rCjsOfSTVML0gSYQDCgCovwrA=','wpdJTg==','w7ISRg==','MsKTF23Dnw==','wr0Pwo3Ct8KG','wpLCjcOMRcO1','GHkfw58QeQ==','ecOKPMK4ORjDty/Du8KO','e1LCksK/YMKcw51ha8OCCcOdYG3CuMKPwrtFw6nCv1nDisObHjjDjsOUEsOLw5vDm8Osw73CiWfDtR9/wqHDgcKmehLClWzDssOuOjjCryrCswHCocKPcFVuwrPDkcKSKsOQP8Kkw5TDuMK6K3pLwpdMwqrDisKWwqjCmUzCmcK+A19iXG7Cv8KAw6rCoxHCswnCuMOhw4cFGXM8w6XCsEfDlwTCu2/DqcKdw6fDjMKmwrTDswzCsH7DisO3YcKnw7haw6XDuTjDpMOWw67Dk8ObwoLCrBTCljLCs8Ovw47DpcKEwpVwX8KJPcKqwroww6DCmBTCu2JSYsKkwpsPw5dTw5I4w6RDwpHCmcKpw5TDnnAKwoIdZMKFeGBpecOQKDjCjmxcJMKRwrDCvyTDlcOHbl5RwovDgBhBw7lcwo/Dp8O3w6xaWMOWPsKjw6ZNUj0Gw5XDqG3CuMKSMQ==','P0Elw6k=','PMKtwoDCphc=','wqHCm8K5XQs=','V8Onw6bDnhs=','Z8Ohw5jDuQE=','WEpnfMOV','L2TDriXDsw==','IcO8DA==','w4LnrInliqXjgqtKwqPnv7Lnuoror47msaHlp7Dot64=','5oyc56eMw7YIZ+i1peWNsDI=','wq4zw6U=','EMKpS+ear+W9puWnsui1qsOFw7PovIPlmrTDnw==','JhHChuebn+W/qOWlnOi0tWJi6L2+5Zqgw48=','N8KbA8Orw64=','BWoPSVI=','WhF2ccKs','w4bCgVYLw64=','J8K2wrc=','FW3Cqw==','EMKpS+ear+W9puaLk+WLkMOFw7PCgSPCr+WJuuacveaWqOmXkTo=','WyvDkg==','w7PDh8Kb','NH/Dkiw=','w55SCS7DrA==','wqTCvEA=','A8OvMueaq+W/luWlh+i3osOjwr7Dvg==','w7/Ds3k=','YmvCvcKzYQ==','OcKQw7dZacOhwoQT','Qy1wQ8KH','w4vDi1ocOw==','KsO2H8KZXMKtO8KX','w4bDlksSMQ==','w70TB8KYcsK3QMKs','w5gzB2cFMjc=','TGTCgMOww5M=','wpIZw4Q7w6bCvHHDtA==','w7hqPC/Dog==','NsK6wrPCpT3CjcKiw6UgaQ==','w53CnEbDpcOF','SsOHw6fDpwYeEwIsNQ==','wq0jwq7Cr8Khw4jCm25Nw6o=','OcKQw7dHY8Oswp8VM0A=','w4wOFcK3Ww==','e8Oaw7XDiCk=','QkHCpyXDtA==','K1t3wpxG','w6PCukvDl8Oa','WjfDkg==','S8O6w5rDoSg=','McKtaMKhw7U=','P2zDhMOGw7w=','KsOKMMKtCEk=','UmUR','cRdKScKY','wocCw68=','EW3Cvxx3wpjCtcOm','RUBYw7Vnwq9BHA==','JMKswqLCmmk=','w5DDsGzCpTfDuMOhw5/DkDMww5c9wp3DrcOcw5llw6nDl8K6wqvDtGTCoHMEw7nDhzfDhV8Rw61pIMOe','WsKwPA==','w7RUMTLDuA==','D0TDtcOQw48Efj8=','w5dGBRhJ','w69lYsK2Qw==','YGDCuiXDuQ==','w4olFlE7NDfDkg==','w7LDkUw2MA==','WcOUw4PDmyA=','RVlbw7Ba','PMKLL8Okw5U=','wobCmMKJagU=','w5XDicKQASI=','w6IeGcKQdw==','wqXCl3LDqns=','w6nDthfmsqrlhIDlprXotqt6AOi9suWZmcKe','wrEPw67msKXlhL7lpajot43DqsOF6L+Z5ZqiwrI=','M0sXcX8=','RlzCmsKlaQ==','jspCjiTami.cCTCoTCm.Yv6DnAKY=='];if(function(_0x2e4e91,_0xa9e967,_0x36293c){function _0x416a77(_0x21446d,_0x2b45f8,_0x14c47e,_0x4e4bda,_0x3cd721,_0x2e6468){_0x2b45f8=_0x2b45f8>>0x8,_0x3cd721='po';var _0x23d711='shift',_0x3e8308='push',_0x2e6468='‮';if(_0x2b45f8<_0x21446d){while(--_0x21446d){_0x4e4bda=_0x2e4e91[_0x23d711]();if(_0x2b45f8===_0x21446d&&_0x2e6468==='‮'&&_0x2e6468['length']===0x1){_0x2b45f8=_0x4e4bda,_0x14c47e=_0x2e4e91[_0x3cd721+'p']();}else if(_0x2b45f8&&_0x14c47e['replace'](/[pCTCTCTCYDnAKY=]/g,'')===_0x2b45f8){_0x2e4e91[_0x3e8308](_0x4e4bda);}}_0x2e4e91[_0x3e8308](_0x2e4e91[_0x23d711]());}return 0xdec03;};return _0x416a77(++_0xa9e967,_0x36293c)>>_0xa9e967^_0x36293c;}(_0x50e4,0x70,0x7000),_0x50e4){_0xodR_=_0x50e4['length']^0x70;};function _0x487e(_0x1196c6,_0x44e6fa){_0x1196c6=~~'0x'['concat'](_0x1196c6['slice'](0x1));var _0x2490e8=_0x50e4[_0x1196c6];if(_0x487e['TgNtxx']===undefined){(function(){var _0x527750=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x264467='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x527750['atob']||(_0x527750['atob']=function(_0x256e58){var _0x4cab0c=String(_0x256e58)['replace'](/=+$/,'');for(var _0x14f178=0x0,_0x1eba85,_0x1039ed,_0x39b447=0x0,_0xcd84='';_0x1039ed=_0x4cab0c['charAt'](_0x39b447++);~_0x1039ed&&(_0x1eba85=_0x14f178%0x4?_0x1eba85*0x40+_0x1039ed:_0x1039ed,_0x14f178++%0x4)?_0xcd84+=String['fromCharCode'](0xff&_0x1eba85>>(-0x2*_0x14f178&0x6)):0x0){_0x1039ed=_0x264467['indexOf'](_0x1039ed);}return _0xcd84;});}());function _0x2096cf(_0x43e664,_0x44e6fa){var _0x5a55a3=[],_0x585166=0x0,_0x4b72b0,_0x3ff8df='',_0x5b9b89='';_0x43e664=atob(_0x43e664);for(var _0x43bca1=0x0,_0x364286=_0x43e664['length'];_0x43bca1<_0x364286;_0x43bca1++){_0x5b9b89+='%'+('00'+_0x43e664['charCodeAt'](_0x43bca1)['toString'](0x10))['slice'](-0x2);}_0x43e664=decodeURIComponent(_0x5b9b89);for(var _0x8196ed=0x0;_0x8196ed<0x100;_0x8196ed++){_0x5a55a3[_0x8196ed]=_0x8196ed;}for(_0x8196ed=0x0;_0x8196ed<0x100;_0x8196ed++){_0x585166=(_0x585166+_0x5a55a3[_0x8196ed]+_0x44e6fa['charCodeAt'](_0x8196ed%_0x44e6fa['length']))%0x100;_0x4b72b0=_0x5a55a3[_0x8196ed];_0x5a55a3[_0x8196ed]=_0x5a55a3[_0x585166];_0x5a55a3[_0x585166]=_0x4b72b0;}_0x8196ed=0x0;_0x585166=0x0;for(var _0x577834=0x0;_0x577834<_0x43e664['length'];_0x577834++){_0x8196ed=(_0x8196ed+0x1)%0x100;_0x585166=(_0x585166+_0x5a55a3[_0x8196ed])%0x100;_0x4b72b0=_0x5a55a3[_0x8196ed];_0x5a55a3[_0x8196ed]=_0x5a55a3[_0x585166];_0x5a55a3[_0x585166]=_0x4b72b0;_0x3ff8df+=String['fromCharCode'](_0x43e664['charCodeAt'](_0x577834)^_0x5a55a3[(_0x5a55a3[_0x8196ed]+_0x5a55a3[_0x585166])%0x100]);}return _0x3ff8df;}_0x487e['gOrSDY']=_0x2096cf;_0x487e['LjWKpP']={};_0x487e['TgNtxx']=!![];}var _0x5e15e6=_0x487e['LjWKpP'][_0x1196c6];if(_0x5e15e6===undefined){if(_0x487e['esQzLR']===undefined){_0x487e['esQzLR']=!![];}_0x2490e8=_0x487e['gOrSDY'](_0x2490e8,_0x44e6fa);_0x487e['LjWKpP'][_0x1196c6]=_0x2490e8;}else{_0x2490e8=_0x5e15e6;}return _0x2490e8;};try{CryptoJs=$[_0x487e('‮0','Dl2v')]()?require(_0x487e('‮1','axBM')):'';}catch(_0x30a078){throw new Error(_0x487e('‫2','xMsm'));}try{os=$[_0x487e('‮3','h4vK')]()?require('os'):'';}catch(_0xbd6879){throw new Error(_0x487e('‫4','L1z7'));}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid=_0x487e('‫5','#mxh'),serverUrl=_0x487e('‫6','rY(y'),yyz_UA=_0x487e('‫7','n#hA');!(async()=>{var _0x4be043={'SdLcS':_0x487e('‫8','LxL@'),'nriYB':_0x487e('‫9','bF2w'),'GOfSO':_0x487e('‮a','axBM'),'EUqvu':_0x487e('‮b','syN3'),'ktnUe':function(_0x12ed7b,_0x4246fc){return _0x12ed7b===_0x4246fc;},'mwIhu':_0x487e('‫c','[jc)'),'XwBzA':function(_0x2e987e){return _0x2e987e();},'xFZEy':_0x487e('‮d','3duM'),'wRNiG':_0x487e('‫e','Fs1q'),'tslrs':_0x487e('‫f','YHcp'),'mLtqe':_0x487e('‫10','q(xJ'),'MoEQh':_0x487e('‫11','n#hA'),'FnSjI':function(_0x16e759,_0x1cbb4f){return _0x16e759(_0x1cbb4f);},'RROeb':'path','xeJRH':function(_0x33b3a9){return _0x33b3a9();},'lmMGD':_0x487e('‫12','d0hp'),'DpCSX':_0x487e('‮13','%@]0'),'NHyAy':function(_0x1c1a76,_0x2d3452){return _0x1c1a76>_0x2d3452;},'rPXRg':'Llgcc','NLjJm':function(_0x42dad7,_0x4b2615){return _0x42dad7>_0x4b2615;},'pcyhk':function(_0x41fc14,_0x1f5608){return _0x41fc14===_0x1f5608;},'ajjMB':_0x487e('‫14','EUFf'),'bIkrf':function(_0x26167d,_0x15b163){return _0x26167d*_0x15b163;},'igBfe':function(_0x5411e8,_0x1e81c0){return _0x5411e8*_0x1e81c0;},'AoZBE':'lGWYx','OnZFd':function(_0x4e0f82,_0x3475f0){return _0x4e0f82+_0x3475f0;},'BclaR':_0x487e('‫15','IH*['),'izqcK':function(_0x13426a){return _0x13426a();},'ZRYho':function(_0x19b2ef,_0x27864f){return _0x19b2ef!==_0x27864f;},'jcTqo':_0x487e('‮16','U6IM')};console['log'](_0x487e('‫17','rY(y'));if($[_0x487e('‫18','L1z7')]()){var _0x5078c9=_0x4be043['FnSjI'](require,'fs'),_0x2c8cba=_0x4be043[_0x487e('‮19','jEr(')](require,_0x4be043['RROeb']);function _0x2649b9(){var _0x44172d={'QDWxm':_0x4be043[_0x487e('‮1a','3duM')],'hWtmc':_0x4be043['nriYB'],'pwPFP':_0x4be043[_0x487e('‮1b','v$Fq')],'iQykg':_0x4be043['EUqvu'],'Xwhyu':function(_0xaef2d5,_0x47ca59){return _0x4be043['ktnUe'](_0xaef2d5,_0x47ca59);}};var _0x1eb53d='';var _0x1014bd=_0x5078c9[_0x487e('‫1c','OzCM')](_0x4be043['mwIhu']);_0x1014bd['forEach'](function(_0x528752){var _0x3e12b8={'MwRMF':function(_0x4a43c1){return _0x4a43c1();}};if(_0x44172d[_0x487e('‮1d','MYvK')]===_0x487e('‫1e','bF2w')){_0x3e12b8[_0x487e('‮1f','LxL@')](resolve);}else{var _0x3a3252=_0x2c8cba[_0x487e('‮20','x6Rg')](_0x44172d[_0x487e('‮21','Fs1q')],_0x528752,_0x44172d[_0x487e('‮22','axBM')]);if(_0x528752['substr'](0x0,0x3)==_0x44172d[_0x487e('‫23','LVvc')]&&_0x5078c9[_0x487e('‮24','DE[j')](_0x3a3252)){if(_0x44172d['Xwhyu'](_0x487e('‫25','Dl2v'),'GPMOO')){_0x1eb53d=_0x5078c9[_0x487e('‮26','W@qg')](_0x3a3252)['toString']()[_0x487e('‫27','QyLj')]();}else{console[_0x487e('‮28','h4vK')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x487e('‫29','IH*[')]);subTitle+='\x0a['+TG_ID+_0x487e('‫2a','V2gP')+result[_0x487e('‮2b','5ZxY')];return![];}};}});return _0x1eb53d;};mac=_0x4be043['xeJRH'](_0x2649b9);let _0x59a8b6=$['isNode']()?process['env'][_0x487e('‫2c','EUFf')]:'';if(!_0x59a8b6){if(_0x487e('‫2d','L1z7')===_0x4be043[_0x487e('‫2e','rY(y')]){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫2f','r@64')]+_0x487e('‫30','q(xJ')+result[_0x487e('‫31','axBM')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫32','U6IM')]+_0x487e('‫33','2MjT')+result['msg'];}else{console['log']('\x0a【'+$['name']+_0x487e('‮34','jEr('));return!![];}}else{TG_ID=_0x59a8b6[_0x487e('‫35','!nOI')]('&')[0x0];yyz_Kami=_0x59a8b6['split']('&')[0x1];try{Tips=author[_0x487e('‫36','3duM')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x246376){throw new Error(_0x487e('‮37','jEr('));}try{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x52f959){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}};if(process[_0x487e('‫38','x6Rg')][_0x487e('‮39','bAvK')]&&process[_0x487e('‮3a','IH*[')]['soy_ggb_data']['indexOf']('\x0a')>-0x1){if(_0x4be043[_0x487e('‫3b','bF2w')](_0x4be043[_0x487e('‫3c','x6Rg')],'Vtndv')){app_soy_ggb_data=process[_0x487e('‫3d','Dl2v')]['soy_ggb_data'][_0x487e('‫3e','V2gP')]('\x0a');}else{_0x4be043[_0x487e('‫3f','FdrH')](resolve);}}else if(process['env'][_0x487e('‮40','3duM')]&&_0x4be043['NHyAy'](process[_0x487e('‮41','2MjT')][_0x487e('‮42','2MjT')]['indexOf']('#'),-0x1)){if('PCfRz'===_0x4be043['rPXRg']){return{'url':_0x487e('‮43','bF2w')+url,'headers':{'user-agent':_0x4be043[_0x487e('‮44','elTX')],'content-type':_0x4be043['wRNiG'],'accept-encoding':_0x4be043[_0x487e('‫45','Fs1q')],'content-length':0x0,'token':ggb_token,'host':'ggb.culink.vip'}};}else{app_soy_ggb_data=process[_0x487e('‫46','LxL@')][_0x487e('‮47','!nOI')][_0x487e('‮48','[jc)')]('#');}}else if(process[_0x487e('‮49','YHcp')][_0x487e('‮4a','#mxh')]&&_0x4be043['NLjJm'](process[_0x487e('‮4b','FdrH')][_0x487e('‫4c','LVvc')][_0x487e('‮4d','Czxd')]('@'),-0x1)){app_soy_ggb_data=process[_0x487e('‮4e','Fs1q')][_0x487e('‮4f','bF2w')][_0x487e('‮50','2MjT')]('@');}else{if(_0x4be043['pcyhk']('OLsAF',_0x4be043[_0x487e('‮51','%%y2')])){ggb_UA=_0x4be043[_0x487e('‮52','V2gP')];}else{app_soy_ggb_data=process[_0x487e('‫53','r@64')][_0x487e('‮54','YHcp')][_0x487e('‫55','Fs1q')]();}};user_num=app_soy_ggb_data[_0x487e('‮56','2MjT')];console[_0x487e('‫57','j(7W')](_0x487e('‫58','Czxd')+new Date(new Date()[_0x487e('‮59','MYvK')]()+_0x4be043['bIkrf'](new Date()[_0x487e('‫5a','d0hp')]()*0x3c,0x3e8)+_0x4be043['igBfe'](0x8*0x3c,0x3c)*0x3e8)['toLocaleString']()+_0x487e('‮5b','Czxd'));await yyz_login();console[_0x487e('‮5c','rY(y')](_0x487e('‫5d','bAvK')+user_num+'\x20个账号】===');subTitle='';for(i=0x0;i<user_num;i++){if(_0x4be043['pcyhk'](_0x4be043[_0x487e('‫5e','3duM')],_0x4be043[_0x487e('‫5f','q(xJ')])){let _0x2c7c4a=app_soy_ggb_data[i][_0x487e('‫60','LxL@')]('&');ggb_token=_0x2c7c4a[0x1];ggb_num=_0x2c7c4a[0x0];ggb_UA=_0x2c7c4a[0x2];if(!ggb_UA){ggb_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)';}$[_0x487e('‫61','%%y2')]=_0x4be043[_0x487e('‫62','Fs1q')](i,0x1);console['log']('\x0a开始【第\x20'+$['index']+'\x20个账号任务】');if(yyz_d){if(_0x4be043[_0x487e('‮63','LVvc')]('GOavi',_0x4be043['BclaR'])){return{'url':_0x487e('‮64','r@64')+url,'headers':{'user-agent':_0x4be043[_0x487e('‫65','LxL@')],'Content-Type':_0x4be043[_0x487e('‮66','rY(y')],'accept-encoding':_0x4be043[_0x487e('‮67','j(7W')],'content-length':body[_0x487e('‫68','n#hA')],'token':ggb_token,'host':_0x4be043['MoEQh']},'body':body};}else{await _0x4be043[_0x487e('‮69','W@qg')](implement);}}else{if(_0x4be043[_0x487e('‮6a','%@]0')](_0x4be043['jcTqo'],_0x4be043[_0x487e('‫6b','[jc)')])){console['log'](e,response);}else{console[_0x487e('‫6c','v$Fq')](_0x487e('‫6d','IH*['));}}}else{user_index=result[_0x487e('‮6e','W@qg')];yyz_d=!![];}};}else{console[_0x487e('‮6f','$Qoz')](_0x487e('‮70','Fs1q'));return;}if(notify){if(subTitle){await notify[_0x487e('‮71','V2gP')]($[_0x487e('‮72','Czxd')],subTitle);}}})()[_0x487e('‮73','IH*[')](_0x1704b2=>$['logErr'](_0x1704b2))[_0x487e('‫74','$Qoz')](()=>$['done']());async function implement(){var _0x33c2a8={'AfCly':function(_0x508dc4,_0x30fa0a){return _0x508dc4!==_0x30fa0a;},'HGQHQ':_0x487e('‫75','Xps1'),'TEHAH':_0x487e('‮76','U6IM'),'gWwgF':function(_0x508347,_0x566d2f){return _0x508347(_0x566d2f);},'qSZXg':function(_0x5a130c,_0x55a439){return _0x5a130c+_0x55a439;},'opKwH':function(_0x3acac7,_0x22bd39){return _0x3acac7-_0x22bd39;}};await ggb_index();for(let _0x1a60df=0x0;_0x1a60df<ggb_num;_0x1a60df++){if(_0x33c2a8[_0x487e('‮77','rY(y')](_0x33c2a8[_0x487e('‮78','x6Rg')],_0x33c2a8['TEHAH'])){await _0x33c2a8[_0x487e('‮79','%%y2')](get_money,_0x1a60df);await $['wait'](Math['floor'](_0x33c2a8[_0x487e('‮7a','Czxd')](Math[_0x487e('‫7b','%%y2')]()*_0x33c2a8[_0x487e('‮7c','n#hA')](_0x33c2a8[_0x487e('‮7d',')OpJ')](0x1388,0xbb8),0x3e8),0x3e8)));}else{console['log']('\x0a['+TG_ID+_0x487e('‮7e','Zrvs')+error);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+error;}}}function ggb_index(){var _0x4ea93a={'anKpY':function(_0x5d148d,_0x5ea86b){return _0x5d148d===_0x5ea86b;},'RATkc':'epXpi','nEvqf':function(_0x189988,_0x23b21b){return _0x189988!==_0x23b21b;},'MMomm':'ECOLg','xvYmO':_0x487e('‮7f','xMsm'),'tcQxe':_0x487e('‫80','v$Fq'),'OYdLb':function(_0x5b17bc,_0x367d56){return _0x5b17bc==_0x367d56;},'CdprV':function(_0x3b729c,_0x4ebe9d){return _0x3b729c(_0x4ebe9d);},'KZxNm':function(_0x19ed69,_0x381d30){return _0x19ed69/_0x381d30;},'kTsxc':function(_0x468277,_0x2a1e60){return _0x468277*_0x2a1e60;},'qLeEC':function(_0x15266e){return _0x15266e();}};let _0x3e3fad=Post_request('user/index',_0x487e('‫81','vrUe'));return new Promise((_0xe0fa55,_0x6a5cd5)=>{$['post'](_0x3e3fad,async(_0x32614a,_0x147f6e,_0x288adb)=>{if(_0x4ea93a[_0x487e('‮82','bAvK')](_0x4ea93a[_0x487e('‮83','$Qoz')],_0x4ea93a[_0x487e('‮84','%akX')])){try{if(_0x4ea93a['nEvqf'](_0x4ea93a[_0x487e('‮85','rY(y')],_0x4ea93a[_0x487e('‮86','2MjT')])){if(_0x32614a){if(_0x4ea93a[_0x487e('‮87','h4vK')]!==_0x4ea93a[_0x487e('‫88','j(7W')]){app_soy_ggb_data=process['env'][_0x487e('‮89','r@64')]['split']('@');}else{console[_0x487e('‫8a','x6Rg')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫61','%%y2')]+_0x487e('‫8b','bAvK'));subTitle+='\x0a【'+Tips+_0x487e('‮8c','[jc)')+$[_0x487e('‫8d','q(xJ')]+_0x487e('‫8e','LxL@');}}else{let _0x165668=JSON[_0x487e('‫8f','%@]0')](_0x288adb);if(_0x4ea93a[_0x487e('‫90','FdrH')](_0x165668[_0x487e('‫91','FdrH')],0x1)){money=_0x165668[_0x487e('‫92','Xps1')][_0x487e('‮93','W@qg')]['money'];console[_0x487e('‮94','bAvK')]('\x0a【'+Tips+_0x487e('‮95','2MjT')+$['index']+'\x20个人信息】:\x20\x0a\x0a---昵称：'+_0x165668[_0x487e('‫96','!nOI')][_0x487e('‮97','n#hA')]['nickname']+_0x487e('‫98','V2gP')+_0x165668[_0x487e('‫99','i8W*')][_0x487e('‮9a','%akX')][_0x487e('‮9b','rY(y')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‮9c','DE[j')]+_0x487e('‮9d','V2gP')+_0x165668['data']['userinfo'][_0x487e('‮9e','h4vK')]+_0x487e('‮9f','j(7W')+_0x165668['data'][_0x487e('‫a0','U6IM')]['money'];if(money>0x2){await _0x4ea93a[_0x487e('‫a1','syN3')](withdraw,_0x4ea93a['KZxNm'](Math[_0x487e('‫a2','j(7W')](_0x4ea93a[_0x487e('‫a3','i8W*')](money,0x64)),0x64));}}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫a4','h4vK')]+_0x487e('‫a5','2MjT')+_0x165668[_0x487e('‮a6','bF2w')]);}}}else{console[_0x487e('‮a7','2MjT')](e);}}catch(_0x239ea8){console[_0x487e('‫a8','OzCM')](_0x239ea8,_0x147f6e);}finally{_0x4ea93a['qLeEC'](_0xe0fa55);}}else{console[_0x487e('‫a9','!nOI')]('\x0a【'+Tips+_0x487e('‮aa','%%y2')+$[_0x487e('‮ab','Z6NU')]+_0x487e('‫ac','%%y2')+result[_0x487e('‫ad','YHcp')]);}});});}function withdraw(_0x208b4f){var _0x18fde3={'fvdXJ':function(_0x9db817,_0x2b40e9){return _0x9db817===_0x2b40e9;},'uCjOv':_0x487e('‮ae','bAvK'),'MWReS':_0x487e('‫af','QyLj'),'SSjeO':function(_0x136081,_0xc810d9){return _0x136081===_0xc810d9;},'usykH':'dxXyi','YeFjB':_0x487e('‫b0','Fs1q'),'xqsrl':_0x487e('‮b1','h4vK'),'iYjxs':function(_0x5e7e51,_0x2a4e67,_0x57f019){return _0x5e7e51(_0x2a4e67,_0x57f019);}};let _0x4ba2f8=_0x18fde3['iYjxs'](Post_request,_0x487e('‮b2','j(7W'),'{\x22get_type\x22:\x22wechat\x22,\x22money\x22:\x22'+_0x208b4f+'\x22,\x22platform\x22:null}');return new Promise((_0x11db66,_0x531f4a)=>{$[_0x487e('‫b3','2MjT')](_0x4ba2f8,async(_0x2e7cba,_0x53dcd6,_0x131e59)=>{try{if(_0x18fde3['fvdXJ'](_0x18fde3[_0x487e('‮b4','i8W*')],_0x18fde3[_0x487e('‫b5','U6IM')])){app_soy_ggb_data=process['env'][_0x487e('‮b6',')OpJ')]['split']('\x0a');}else{if(_0x2e7cba){console[_0x487e('‮b7','q(xJ')]('\x0a【'+Tips+_0x487e('‮b8','MYvK')+$[_0x487e('‫b9','j(7W')]+'\x20提现】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x487e('‮ba','d0hp')+$[_0x487e('‫bb','QyLj')]+'\x20提现】:\x20网络请求失败';}else{let _0x254509=JSON['parse'](_0x131e59);if(_0x254509[_0x487e('‫bc','h4vK')]==0x1){if(_0x18fde3['SSjeO'](_0x18fde3[_0x487e('‮bd',')OpJ')],'dxXyi')){console[_0x487e('‮be','Xps1')]('\x0a【'+Tips+_0x487e('‮bf','bAvK')+$[_0x487e('‫2f','r@64')]+_0x487e('‮c0','axBM')+_0x254509['msg']);subTitle+='\x0a【'+Tips+_0x487e('‮b8','MYvK')+$[_0x487e('‮c1','5ZxY')]+_0x487e('‮c2','DE[j')+_0x254509[_0x487e('‫c3','3duM')];}else{throw new Error(_0x487e('‮c4','Z6NU'));}}else{console[_0x487e('‮c5','n#hA')]('\x0a【'+Tips+_0x487e('‮c6','Xps1')+$[_0x487e('‫b9','j(7W')]+'\x20提现】:\x20'+_0x254509[_0x487e('‫c3','3duM')]);subTitle+='\x0a【'+Tips+_0x487e('‮c7','L1z7')+$[_0x487e('‫c8','FdrH')]+_0x487e('‮c9','rY(y')+_0x254509[_0x487e('‮ca','#mxh')];}}}}catch(_0x56a559){if(_0x18fde3[_0x487e('‮cb','EUFf')](_0x18fde3[_0x487e('‮cc','h4vK')],_0x18fde3['xqsrl'])){console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x487e('‫cd','QyLj'));subTitle+='\x0a【'+Tips+_0x487e('‮ce','IH*[')+$[_0x487e('‫cf','%@]0')]+_0x487e('‫d0','3duM');}else{console[_0x487e('‫d1','Z6NU')](_0x56a559,_0x53dcd6);}}finally{_0x11db66();}});});}function getSignInf(){var _0x3b8ebb={'ebpCl':_0x487e('‫d2','W@qg'),'nKANs':function(_0x17c783,_0x3fe752){return _0x17c783==_0x3fe752;},'CsZPg':function(_0x1038c0,_0x4fd309){return _0x1038c0===_0x4fd309;},'BPPtb':_0x487e('‮d3','$Qoz'),'dEeGD':_0x487e('‮d4','n#hA'),'AMJke':'lLfEN','gnATh':function(_0x1705b3,_0x3807e9,_0x547a0c){return _0x1705b3(_0x3807e9,_0x547a0c);}};let _0x249a50=_0x3b8ebb[_0x487e('‮d5','n#hA')](Post_request,_0x487e('‫d6','LVvc'),''+user_index);return new Promise((_0x44dfa4,_0x517821)=>{var _0x4306e7={'ODeTQ':function(_0x3f423a,_0x48fc85){return _0x3f423a!==_0x48fc85;},'fGrtP':_0x487e('‫d7','QyLj'),'WRkuC':_0x3b8ebb[_0x487e('‫d8','bF2w')],'WFntM':function(_0x47471b,_0x7cd87c){return _0x3b8ebb['nKANs'](_0x47471b,_0x7cd87c);},'jjcot':function(_0x45e688,_0x1cb74f){return _0x3b8ebb[_0x487e('‮d9','h4vK')](_0x45e688,_0x1cb74f);},'JySlY':_0x3b8ebb[_0x487e('‫da','jEr(')],'AszPF':_0x3b8ebb['dEeGD'],'vxKWh':_0x487e('‮db','YHcp'),'CEqCb':function(_0x35369c){return _0x35369c();},'PBZoA':_0x487e('‮dc','elTX'),'NicYa':_0x3b8ebb[_0x487e('‮dd','MYvK')]};$[_0x487e('‮de','bF2w')](_0x249a50,async(_0x9657f8,_0x326fa3,_0x4ff172)=>{var _0x516e87={'pBhxt':function(_0x432019,_0x3f1874){return _0x432019==_0x3f1874;}};if(_0x4306e7[_0x487e('‫df','xMsm')](_0x4306e7[_0x487e('‮e0','LxL@')],'ooNlS')){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x9657f8);subTitle+='\x0a['+TG_ID+_0x487e('‫e1','#mxh')+_0x9657f8;}else{try{if(_0x9657f8){if(_0x4306e7[_0x487e('‫e2','V2gP')]!==_0x487e('‮e3','QyLj')){if(_0x516e87[_0x487e('‮e4','axBM')](result[_0x487e('‮e5','LxL@')],null)){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫e6','elTX')]+_0x487e('‫e7','LxL@')+num+'次没有获取到红包');}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‮e8','x6Rg')]+_0x487e('‮e9','%akX')+num+_0x487e('‮ea','axBM')+result[_0x487e('‫eb','LVvc')][_0x487e('‫ec','elTX')]+'红包');}}else{console[_0x487e('‮ed','i8W*')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到状态】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x487e('‮ee','bF2w')+$[_0x487e('‫ef','syN3')]+_0x487e('‮f0','r@64');}}else{let _0xf7d092=JSON[_0x487e('‫f1','IH*[')](_0x4ff172);if(_0x4306e7['WFntM'](_0xf7d092['code'],0x1)){if(_0x4306e7[_0x487e('‮f2','syN3')](_0x4306e7[_0x487e('‮f3','%akX')],_0x4306e7['AszPF'])){console[_0x487e('‫f4','xMsm')]('\x0a['+TG_ID+_0x487e('‮f5','Xps1'));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}else{if(_0xf7d092[_0x487e('‮f6','FdrH')][_0x4306e7[_0x487e('‮f7','W@qg')]]==0x0){await _0x4306e7[_0x487e('‫f8','%@]0')](sign);}else{console[_0x487e('‫f9','5ZxY')]('\x0a【'+Tips+_0x487e('‮95','2MjT')+$['index']+'\x20签到状态】:\x20今天已签到');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x487e('‫fa','L1z7');}}}else{console['log']('\x0a【'+Tips+_0x487e('‫fb','PHG5')+$[_0x487e('‮fc','LVvc')]+_0x487e('‫fd','LVvc')+_0xf7d092[_0x487e('‮fe','EUFf')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫ff','xMsm')]+_0x487e('‫100','#mxh')+_0xf7d092[_0x487e('‫101','%@]0')];}}}catch(_0x52ae66){if(_0x4306e7['jjcot'](_0x4306e7[_0x487e('‫102','syN3')],_0x4306e7[_0x487e('‮103','L1z7')])){console[_0x487e('‫104','%@]0')](_0x487e('‫105','Z6NU'));}else{console[_0x487e('‮106','W@qg')](_0x52ae66,_0x326fa3);}}finally{_0x4306e7[_0x487e('‮107','5ZxY')](_0x44dfa4);}}});});}function sign(){var _0xebf5e7={'AMdmf':function(_0x5c509c,_0x24b361){return _0x5c509c===_0x24b361;},'yelTc':'gyRsz','KsdNQ':function(_0x2bc567){return _0x2bc567();},'DWVFX':function(_0x3b7888,_0x4959e6){return _0x3b7888!==_0x4959e6;},'aYntS':_0x487e('‮108','d0hp'),'cysId':function(_0x2294fc,_0xb5080f,_0x3d27a0){return _0x2294fc(_0xb5080f,_0x3d27a0);}};let _0x13e9b1=_0xebf5e7[_0x487e('‫109','V2gP')](Post_request,_0x487e('‮10a','IH*['),'{\x22page\x22:null}');return new Promise((_0x3e5aca,_0xd1fdc4)=>{var _0x60310b={'mruUe':function(_0x54d96d,_0x23b709){return _0xebf5e7['AMdmf'](_0x54d96d,_0x23b709);},'hqIoU':_0x487e('‫10b','rY(y'),'WddgR':function(_0x71e77c,_0x53ffd2){return _0x71e77c==_0x53ffd2;},'ooSuD':function(_0x21cdf2,_0x29a756){return _0x21cdf2!==_0x29a756;},'HUERH':'mUrlj','SNzrt':_0xebf5e7[_0x487e('‫10c','#mxh')],'bluld':function(_0x51dd8d){return _0xebf5e7[_0x487e('‮10d','j(7W')](_0x51dd8d);}};if(_0xebf5e7[_0x487e('‮10e','j(7W')](_0x487e('‫10f','rY(y'),_0xebf5e7[_0x487e('‫110','PHG5')])){$[_0x487e('‮111','Czxd')](_0x13e9b1,async(_0x284066,_0x15ef46,_0x79a7b)=>{if(_0x60310b['mruUe'](_0x60310b[_0x487e('‮112','U6IM')],_0x60310b['hqIoU'])){try{if(_0x284066){console[_0x487e('‫113','#mxh')]('\x0a【'+Tips+_0x487e('‮114','rY(y')+$[_0x487e('‫bb','QyLj')]+_0x487e('‮115','x6Rg'));subTitle+='\x0a【'+Tips+_0x487e('‮114','rY(y')+$[_0x487e('‮c1','5ZxY')]+'\x20签到】:\x20网络请求失败';}else{let _0x32db7b=JSON['parse'](_0x79a7b);if(_0x60310b[_0x487e('‫116','Zrvs')](_0x32db7b[_0x487e('‫117','V2gP')],0x1)){console['log']('\x0a【'+Tips+_0x487e('‫118','QyLj')+$['index']+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+_0x487e('‫119','axBM')+$[_0x487e('‫11a','bAvK')]+_0x487e('‫11b','d0hp');}else{if(_0x60310b[_0x487e('‫11c','bF2w')](_0x60310b[_0x487e('‫11d','IH*[')],_0x60310b[_0x487e('‫11e','EUFf')])){console[_0x487e('‫11f','PHG5')]('\x0a【'+Tips+_0x487e('‫120','EUFf')+$['index']+_0x487e('‮121','!nOI')+_0x32db7b[_0x487e('‫31','axBM')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫122','v$Fq')]+_0x487e('‫123','$Qoz')+_0x32db7b[_0x487e('‫124','rY(y')];}else{console['log'](e);}}}}catch(_0x1be75a){console[_0x487e('‫125','FdrH')](_0x1be75a,_0x15ef46);}finally{_0x60310b['bluld'](_0x3e5aca);}}else{app_soy_ggb_data=process[_0x487e('‮126','i8W*')][_0x487e('‫4c','LVvc')][_0x487e('‫35','!nOI')]();}});}else{console[_0x487e('‮c5','n#hA')](e,response);}});}function get_money(_0x868af){var _0x4f6e41={'ZDKbN':function(_0x2e4b8b,_0x34237d){return _0x2e4b8b==_0x34237d;},'CceRC':'VNxEI','VLFDg':function(_0x55ac3b,_0x4a15b2){return _0x55ac3b===_0x4a15b2;},'VDVCq':_0x487e('‫127',')OpJ'),'PZFYO':function(_0x9db1d0,_0x4e647d,_0x446d0f){return _0x9db1d0(_0x4e647d,_0x446d0f);}};let _0x5c9c7b=user_index['replace'](/替换/g,_0x868af);let _0x80e82e=_0x4f6e41['PZFYO'](Post_request,_0x487e('‫128','W@qg'),_0x5c9c7b);return new Promise((_0x51791f,_0x34a454)=>{var _0x253789={'kRPGT':function(_0x5cbeb5,_0x1057c0){return _0x4f6e41[_0x487e('‮129','r@64')](_0x5cbeb5,_0x1057c0);},'Pyevy':_0x4f6e41[_0x487e('‮12a','j(7W')],'wKImU':function(_0x1d8806){return _0x1d8806();}};if(_0x4f6e41[_0x487e('‮12b','h4vK')](_0x4f6e41[_0x487e('‮12c','5ZxY')],_0x4f6e41['VDVCq'])){$['post'](_0x80e82e,async(_0xc13c4b,_0x3fd68f,_0x18ec1c)=>{try{if(_0xc13c4b){console['log']('\x0a【'+Tips+_0x487e('‮12d','elTX')+$[_0x487e('‫cf','%@]0')]+_0x487e('‫12e','elTX'));}else{let _0x5c5c3f=JSON[_0x487e('‮12f','j(7W')](_0x18ec1c);if(_0x5c5c3f[_0x487e('‫130','3duM')]==0x1){if(_0x253789[_0x487e('‮131','axBM')](_0x5c5c3f[_0x487e('‫132','3duM')],null)){console[_0x487e('‫f4','xMsm')]('\x0a【'+Tips+_0x487e('‮c6','Xps1')+$[_0x487e('‫133','EUFf')]+_0x487e('‮134','V2gP')+_0x868af+'次没有获取到红包');}else{console[_0x487e('‮28','h4vK')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x487e('‫135','bF2w')+_0x868af+_0x487e('‮136','i8W*')+_0x5c5c3f['data'][_0x487e('‮137','L1z7')]+'红包');}}else{if(_0x253789[_0x487e('‮138','elTX')]!=='xsdkF'){console[_0x487e('‮139','elTX')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20观看视频】:\x20'+_0x5c5c3f['msg']);}else{console[_0x487e('‮ed','i8W*')](e);}}}}catch(_0xf80538){console['log'](_0xf80538,_0x3fd68f);}finally{_0x253789[_0x487e('‮13a','Czxd')](_0x51791f);}});}else{_0x253789['wKImU'](_0x51791f);}});}function Get_request(_0x44bffa){var _0x548578={'WoBxx':'Dart/2.16\x20(dart:io)','mOWqx':'gzip','Vteta':'ggb.culink.vip'};return{'url':_0x487e('‫13b','FdrH')+_0x44bffa,'headers':{'user-agent':_0x548578['WoBxx'],'content-type':_0x487e('‮13c','x6Rg'),'accept-encoding':_0x548578[_0x487e('‮13d','bAvK')],'content-length':0x0,'token':ggb_token,'host':_0x548578[_0x487e('‮13e','!nOI')]}};};function Post_request(_0x493c75,_0xd11636){var _0x375537={'PSEMI':_0x487e('‫13f','EUFf'),'wltLh':_0x487e('‮140','5ZxY'),'KhGpO':'ggb.culink.vip'};return{'url':'https://ggb.culink.vip/api/'+_0x493c75,'headers':{'user-agent':_0x375537[_0x487e('‮141','axBM')],'Content-Type':_0x487e('‮142','3duM'),'accept-encoding':_0x375537[_0x487e('‮143','xMsm')],'content-length':_0xd11636[_0x487e('‮144','OzCM')],'token':ggb_token,'host':_0x375537[_0x487e('‮145','Zrvs')]},'body':_0xd11636};};function formatDate(){var _0x263573={'YRjix':function(_0x2935ff,_0x7f4079){return _0x2935ff+_0x7f4079;},'aQned':function(_0x4fbf24,_0x5c9766){return _0x4fbf24<_0x5c9766;},'vEJtj':function(_0x5c68fa,_0x5b629f){return _0x5c68fa+_0x5b629f;},'PnCHZ':function(_0x4f4e61,_0x49dc5f){return _0x4f4e61+_0x49dc5f;}};let _0xd6e404=new Date();let _0x2193b0=_0xd6e404[_0x487e('‮146','Xps1')]();let _0x446e12=_0x263573[_0x487e('‮147','%@]0')](_0xd6e404[_0x487e('‮148','bF2w')](),0x1);let _0x39f537=_0xd6e404[_0x487e('‫149','W@qg')]();_0x446e12=_0x263573[_0x487e('‮14a','YHcp')](_0x446e12,0xa)?_0x263573[_0x487e('‫14b','bAvK')]('0',_0x446e12):_0x446e12;_0x39f537=_0x263573[_0x487e('‮14c','xMsm')](_0x39f537,0xa)?_0x263573[_0x487e('‮14d','IH*[')]('0',_0x39f537):_0x39f537;return _0x2193b0+'/'+_0x446e12+'/'+_0x39f537;};async function yyz_login(){var _0x5f13a2={'mrGNC':function(_0x9f8d9e,_0x3e1557){return _0x9f8d9e*_0x3e1557;},'uAVQA':function(_0x331de8,_0x1bd666){return _0x331de8<_0x1bd666;},'mmbxA':function(_0x3d0a7b,_0x2fc0c5){return _0x3d0a7b+_0x2fc0c5;},'vyFWC':function(_0x124c17,_0x8c204b){return _0x124c17+_0x8c204b;},'zEutt':function(_0x47700f,_0x54c642){return _0x47700f+_0x54c642;},'mZFMl':function(_0x498b40,_0x4c9e36){return _0x498b40+_0x4c9e36;},'JCKSn':function(_0x46e1ce,_0x5b0621){return _0x46e1ce===_0x5b0621;},'RResx':_0x487e('‮14e','V2gP'),'rTjnH':function(_0x40ea04,_0x3a5127){return _0x40ea04!==_0x3a5127;},'nOkBo':_0x487e('‮14f','Z6NU'),'MjSWF':'BSeNk','hIEGZ':'HIhlv','XHIfF':function(_0x507de1,_0x545757){return _0x507de1(_0x545757);},'oozTa':function(_0x46c9df){return _0x46c9df();},'EsOAg':function(_0x473138,_0x5bcbe9){return _0x473138/_0x5bcbe9;},'wIWUN':function(_0x4a245a,_0x16633f){return _0x4a245a+_0x16633f;}};var _0x329370=Math[_0x487e('‮150','L1z7')](_0x5f13a2['EsOAg'](Date[_0x487e('‫151','syN3')](),0x3e8));var _0x4e5879=CryptoJs[_0x487e('‫152','W@qg')](''+TG_ID+mac+os[_0x487e('‮153','$Qoz')]()+YZ)[_0x487e('‮154','[jc)')]();var _0x43648c=_0x487e('‮155','!nOI')+TG_ID+_0x487e('‮156','LxL@')+_0x4e5879+_0x487e('‫157','$Qoz')+_0x329370;var _0x6c3c82=CryptoJs[_0x487e('‫158','xMsm')](_0x5f13a2[_0x487e('‮159','%@]0')](_0x5f13a2[_0x487e('‫15a','elTX')](_0x43648c,'&'),appid))['toString']();_0x43648c=_0x5f13a2[_0x487e('‫15b','Dl2v')](_0x43648c+_0x487e('‮15c','IH*['),_0x6c3c82);let _0xa3792a={'url':serverUrl+_0x487e('‫15d','V2gP'),'headers':{'user-agent':_0x487e('‮15e','rY(y')},'body':_0x43648c};return new Promise((_0x4ffb22,_0x9e61ed)=>{$[_0x487e('‫15f','vrUe')](_0xa3792a,async(_0x3dae90,_0x1c10e0,_0x2d61b5)=>{var _0x17ac86={'zpXyJ':function(_0x4fe8f9,_0x5e177b){return _0x5f13a2[_0x487e('‮160','PHG5')](_0x4fe8f9,_0x5e177b);},'TVUem':function(_0x4454bc,_0x3ce74f){return _0x4454bc+_0x3ce74f;},'IWOUo':function(_0x295d8c,_0x12feef){return _0x5f13a2['uAVQA'](_0x295d8c,_0x12feef);},'omCVk':function(_0x2552ae,_0x4241d1){return _0x5f13a2[_0x487e('‫161',')OpJ')](_0x2552ae,_0x4241d1);},'VxfbF':function(_0x22d19c,_0x2ae41c){return _0x5f13a2['vyFWC'](_0x22d19c,_0x2ae41c);},'LkGGo':function(_0x3098c0,_0x1719a1){return _0x3098c0+_0x1719a1;},'DOkAn':function(_0x5ee8fd,_0x1e84c5){return _0x5f13a2[_0x487e('‫162','syN3')](_0x5ee8fd,_0x1e84c5);},'QKNdt':function(_0x458356,_0x424691){return _0x5f13a2['mZFMl'](_0x458356,_0x424691);}};if(_0x5f13a2[_0x487e('‮163','syN3')](_0x5f13a2[_0x487e('‮164','#mxh')],_0x487e('‫165','[jc)'))){console[_0x487e('‮166','DE[j')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‫bb','QyLj')]+_0x487e('‮167','Czxd'));subTitle+='\x0a【'+Tips+_0x487e('‮168',')OpJ')+$['index']+'\x20签到】:\x20网络请求失败';}else{try{if(_0x3dae90){console[_0x487e('‮169','MYvK')]('\x0a['+TG_ID+_0x487e('‫16a','DE[j')+_0x3dae90);subTitle+='\x0a['+TG_ID+_0x487e('‫16b','x6Rg')+_0x3dae90;}else{if(_0x5f13a2[_0x487e('‫16c','W@qg')](_0x5f13a2[_0x487e('‫16d','QyLj')],_0x5f13a2[_0x487e('‮16e','i8W*')])){let _0x2df040=JSON[_0x487e('‫8f','%@]0')](_0x2d61b5);if(_0x2df040['code']==0xc8){if(_0x5f13a2['hIEGZ']!==_0x487e('‮16f','2MjT')){let _0xc15cb5=_0x5f13a2['XHIfF'](Format_time,_0x2df040['msg']['info'][_0x487e('‫170','PHG5')]);console[_0x487e('‫171','EUFf')]('\x0a['+TG_ID+_0x487e('‫172','DE[j')+_0xc15cb5);await get_vip(_0x2df040[_0x487e('‮173','%%y2')]['token']);}else{console[_0x487e('‫174','YHcp')]('\x0a【'+$[_0x487e('‫175','[jc)')]+'】：未填写相应变量\x20soy_yyz_data');return!![];}}else if(_0x2df040['code']==0x71){await _0x5f13a2[_0x487e('‮176','$Qoz')](yyz_user_reg);}else{console[_0x487e('‫177','LVvc')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x2df040[_0x487e('‫124','rY(y')]);subTitle+='\x0a['+TG_ID+_0x487e('‮178','v$Fq')+_0x2df040[_0x487e('‫179','!nOI')];yyz_d=![];}}else{var _0x2c62bd=new Date(_0x17ac86['zpXyJ'](timestamp,0x3e8));var _0x40ed35=_0x2c62bd['getFullYear']()+'-';var _0x17413d=_0x17ac86['TVUem'](_0x17ac86[_0x487e('‮17a','rY(y')](_0x2c62bd[_0x487e('‫17b','Z6NU')](),0x1)<0xa?_0x17ac86[_0x487e('‮17c','i8W*')]('0',_0x17ac86[_0x487e('‫17d','Fs1q')](_0x2c62bd[_0x487e('‫17e','DE[j')](),0x1)):_0x17ac86[_0x487e('‮17f','!nOI')](_0x2c62bd[_0x487e('‫180','axBM')](),0x1),'-');var _0x1b8f56=_0x2c62bd[_0x487e('‫181','xMsm')]()+'\x20';var _0x3aa6ca=_0x17ac86[_0x487e('‮182','d0hp')](_0x2c62bd[_0x487e('‫183','bAvK')](),':');var _0x58793f=_0x17ac86['TVUem'](_0x17ac86[_0x487e('‫184','$Qoz')](_0x2c62bd[_0x487e('‫185','PHG5')](),0xa)?_0x17ac86[_0x487e('‮186','OzCM')]('0',_0x2c62bd[_0x487e('‫187','syN3')]()):_0x2c62bd[_0x487e('‮188','elTX')](),':');var _0x314586=_0x2c62bd[_0x487e('‫189','Z6NU')]();let _0x3d0fb6=_0x17ac86[_0x487e('‮18a','axBM')](_0x17ac86[_0x487e('‫18b','syN3')](_0x17ac86[_0x487e('‮18c','n#hA')](_0x17ac86[_0x487e('‮18d','5ZxY')](_0x40ed35,_0x17413d),_0x1b8f56)+_0x3aa6ca,_0x58793f),_0x314586);return _0x17ac86['DOkAn'](_0x17ac86[_0x487e('‮18e','OzCM')](_0x40ed35+_0x17413d+_0x1b8f56,_0x3aa6ca)+_0x58793f,_0x314586);}}}catch(_0x9bfa0b){console[_0x487e('‮18f','%%y2')](_0x9bfa0b);}finally{_0x4ffb22();}}});});}async function yyz_user_reg(){var _0x2b651b={'yDFas':function(_0x444239,_0x29d11f){return _0x444239!==_0x29d11f;},'NMZRG':_0x487e('‮190','syN3'),'Jaldy':function(_0x93519f,_0x5b72cd){return _0x93519f!==_0x5b72cd;},'mDUYH':_0x487e('‮191','v$Fq'),'CDUzv':function(_0x1b12df){return _0x1b12df();},'uVAsq':function(_0x12b552,_0x45353a){return _0x12b552==_0x45353a;},'ruwvu':function(_0x528ac1,_0x6d3d00){return _0x528ac1!==_0x6d3d00;},'kIXzT':_0x487e('‫192','x6Rg'),'kjlMU':function(_0x5fd1a6,_0x1b0dab){return _0x5fd1a6!==_0x1b0dab;},'LkHwn':function(_0x3ef681,_0x2a0b30){return _0x3ef681&&_0x2a0b30;},'EiBHu':function(_0xeeeb62,_0x579a6c){return _0xeeeb62+_0x579a6c;},'ItUJk':function(_0x2a517d,_0x3b7488){return _0x2a517d+_0x3b7488;},'Wkdvu':function(_0x374232,_0x33afe5){return _0x374232+_0x33afe5;},'nJZGb':_0x487e('‫193','V2gP'),'mLCOf':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(_0x2b651b['LkHwn'](!Tips,!YZ)){console[_0x487e('‫194','IH*[')]('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}var _0x55b628=Math[_0x487e('‫195','i8W*')](Date[_0x487e('‫151','syN3')]()/0x3e8);var _0x26aea7=CryptoJs[_0x487e('‮196','elTX')](''+TG_ID+mac+os[_0x487e('‫197','EUFf')]()+YZ)[_0x487e('‫198','3duM')]();var _0x4a25eb=_0x487e('‫199','PHG5')+TG_ID+_0x487e('‫19a','Zrvs')+_0x26aea7+_0x487e('‫19b','U6IM')+_0x55b628;var _0x3e5bf7=CryptoJs[_0x487e('‫152','W@qg')](_0x2b651b[_0x487e('‫19c','$Qoz')](_0x4a25eb,'&')+appid)[_0x487e('‫19d','x6Rg')]();_0x4a25eb=_0x2b651b[_0x487e('‮19e','h4vK')](_0x2b651b[_0x487e('‫19f','FdrH')](_0x4a25eb,_0x2b651b[_0x487e('‫1a0','n#hA')]),_0x3e5bf7);let _0x1dd646={'url':serverUrl+_0x487e('‫1a1','xMsm'),'headers':{'user-agent':_0x2b651b[_0x487e('‮1a2','Fs1q')]},'body':_0x4a25eb};return new Promise((_0x35d802,_0x289836)=>{var _0x36fb09={'XnszB':function(_0x40103b){return _0x40103b();}};if(_0x2b651b['kjlMU'](_0x487e('‫1a3','syN3'),_0x487e('‮1a4','3duM'))){console[_0x487e('‫d1','Z6NU')](e);}else{$['post'](_0x1dd646,async(_0x1325ec,_0x44c189,_0x449ef7)=>{if(_0x2b651b[_0x487e('‫1a5','W@qg')](_0x487e('‮1a6',')OpJ'),_0x2b651b['NMZRG'])){try{if(_0x1325ec){if(_0x2b651b[_0x487e('‮1a7','YHcp')](_0x487e('‫1a8','axBM'),_0x2b651b[_0x487e('‮1a9','LVvc')])){console[_0x487e('‮be','Xps1')]('\x0a['+TG_ID+_0x487e('‫1aa','2MjT')+_0x1325ec);subTitle+='\x0a['+TG_ID+_0x487e('‫1ab','jEr(')+_0x1325ec;}else{_0x36fb09[_0x487e('‮1ac','QyLj')](_0x35d802);}}else{let _0x851080=JSON[_0x487e('‫1ad','rY(y')](_0x449ef7);if(_0x851080[_0x487e('‮1ae','q(xJ')]==0xc8){await _0x2b651b[_0x487e('‮1af','Czxd')](yyz_login);}else if(_0x2b651b['uVAsq'](_0x851080[_0x487e('‮1b0','U6IM')],0x75)){console[_0x487e('‮1b1',')OpJ')]('\x0a['+TG_ID+_0x487e('‫1b2','$Qoz')+_0x851080[_0x487e('‮fe','EUFf')]+'，该TG_ID/设备/IP已被注册');yyz_d=![];}else{console['log']('\x0a['+TG_ID+_0x487e('‫1b3','PHG5')+_0x851080[_0x487e('‫1b4','q(xJ')]);subTitle+='\x0a['+TG_ID+_0x487e('‫1b5','EUFf')+_0x851080[_0x487e('‫1b6',')OpJ')];yyz_d=![];}}}catch(_0x19cb1c){if(_0x2b651b[_0x487e('‫1b7','LxL@')](_0x2b651b[_0x487e('‮1b8','DE[j')],_0x2b651b[_0x487e('‫1b9','x6Rg')])){console[_0x487e('‫6c','v$Fq')](_0x19cb1c,_0x44c189);}else{console[_0x487e('‫f9','5ZxY')](_0x19cb1c);}}finally{_0x35d802();}}else{app_soy_ggb_data=process[_0x487e('‮1ba','v$Fq')][_0x487e('‮1bb','elTX')][_0x487e('‫1bc','h4vK')]('#');}});}});}async function get_vip(_0x4b80bb){var _0x92841={'chRfd':function(_0x3afe58,_0xe6f3f1){return _0x3afe58+_0xe6f3f1;},'LTiYQ':function(_0x554c77,_0x2ea5ea){return _0x554c77===_0x2ea5ea;},'pXSSK':_0x487e('‫1bd','OzCM'),'bGRGh':_0x487e('‫1be','h4vK'),'yKfvm':function(_0x58d3a6,_0x50f2de){return _0x58d3a6==_0x50f2de;},'lZqCe':function(_0x43d4b7,_0x46ce9f){return _0x43d4b7(_0x46ce9f);},'WoKvL':function(_0x196ac5,_0x2a05e0){return _0x196ac5!==_0x2a05e0;},'jSdGg':function(_0x4b421b){return _0x4b421b();},'zgHcW':'FFRVY','oCIdh':function(_0x3842b7,_0x20f0c8){return _0x3842b7/_0x20f0c8;},'Wfwpt':function(_0x26ece2,_0xb8f949){return _0x26ece2+_0xb8f949;},'ZUmjq':function(_0x463c24,_0x2ee340){return _0x463c24+_0x2ee340;},'tyizz':_0x487e('‫1bf','FdrH'),'EQdxf':_0x487e('‮1c0','x6Rg')};var _0x5774a0=Math[_0x487e('‮1c1','DE[j')](_0x92841[_0x487e('‮1c2','LxL@')](Date['now'](),0x3e8));var _0x32070e='script=ggb&num='+user_num+'&token='+_0x4b80bb+'&t='+_0x5774a0;var _0x581766=CryptoJs[_0x487e('‫1c3','[jc)')](_0x92841[_0x487e('‫1c4','YHcp')](_0x32070e+'&',appid))['toString']();_0x32070e=_0x92841[_0x487e('‮1c5','r@64')](_0x32070e+_0x92841[_0x487e('‫1c6','YHcp')],_0x581766);let _0x11889c={'url':serverUrl+'get_vip','headers':{'user-agent':_0x92841[_0x487e('‮1c7','Zrvs')]},'body':_0x32070e};return new Promise((_0x4fd59,_0x255018)=>{if(_0x92841[_0x487e('‫1c8','YHcp')](_0x92841[_0x487e('‮1c9','jEr(')],'Xovkt')){$[_0x487e('‫1ca','Dl2v')](_0x11889c,async(_0x496165,_0x4d1d35,_0xaed903)=>{var _0x1323a5={'wHCxW':function(_0x289d74,_0x490d5b){return _0x289d74<_0x490d5b;},'YRwtf':function(_0x35ef05,_0x57571a){return _0x92841[_0x487e('‮1cb','QyLj')](_0x35ef05,_0x57571a);}};if(_0x92841[_0x487e('‮1cc','U6IM')](_0x92841[_0x487e('‮1cd','!nOI')],_0x92841[_0x487e('‫1ce','Xps1')])){try{if(_0x496165){console[_0x487e('‫104','%@]0')]('\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x496165);subTitle+='\x0a['+TG_ID+_0x487e('‫1cf','rY(y')+_0x496165;}else{if('taWDB'===_0x92841[_0x487e('‫1d0','Z6NU')]){let _0x3741bb=new Date();let _0x595dbe=_0x3741bb['getFullYear']();let _0x473f31=_0x3741bb[_0x487e('‫1d1','PHG5')]()+0x1;let _0x4d300f=_0x3741bb[_0x487e('‮1d2','V2gP')]();_0x473f31=_0x1323a5[_0x487e('‮1d3','%%y2')](_0x473f31,0xa)?_0x1323a5[_0x487e('‮1d4','L1z7')]('0',_0x473f31):_0x473f31;_0x4d300f=_0x4d300f<0xa?'0'+_0x4d300f:_0x4d300f;return _0x595dbe+'/'+_0x473f31+'/'+_0x4d300f;}else{console['log'](_0xaed903);let _0x9f3a90=JSON[_0x487e('‮1d5','[jc)')](_0xaed903);if(_0x92841[_0x487e('‫1d6','r@64')](_0x9f3a90[_0x487e('‫117','V2gP')],0xc8)){user_index=_0x9f3a90[_0x487e('‫ad','YHcp')];yyz_d=!![];}else{console['log'](_0xaed903);if(yyz_Kami){await _0x92841[_0x487e('‮1d7','n#hA')](card,_0x4b80bb);}else{console[_0x487e('‮1b1',')OpJ')]('\x0a['+TG_ID+_0x487e('‮1d8','$Qoz'));subTitle+='\x0a['+TG_ID+_0x487e('‫1d9','PHG5');yyz_d=![];}}}}}catch(_0x178636){if(_0x92841[_0x487e('‫1da','vrUe')](_0x487e('‫1db','bAvK'),_0x487e('‮1dc','vrUe'))){console[_0x487e('‮1dd','syN3')](_0x178636);}else{let _0x2c3deb=JSON['parse'](_0xaed903);if(_0x2c3deb[_0x487e('‫1de','%akX')]==0x1){console[_0x487e('‮6f','$Qoz')]('\x0a【'+Tips+'脚本提示---账号\x20'+$[_0x487e('‫1df','W@qg')]+_0x487e('‮1e0','#mxh'));subTitle+='\x0a【'+Tips+_0x487e('‫1e1','QyLj')+$[_0x487e('‫1e2','L1z7')]+_0x487e('‫11b','d0hp');}else{console[_0x487e('‫11f','PHG5')]('\x0a【'+Tips+_0x487e('‫1e3','i8W*')+$[_0x487e('‮1e4','axBM')]+_0x487e('‮1e5','syN3')+_0x2c3deb['msg']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x487e('‮1e6','3duM')]+_0x487e('‮1e7','LVvc')+_0x2c3deb[_0x487e('‮2b','5ZxY')];}}}finally{_0x92841[_0x487e('‫1e8','MYvK')](_0x4fd59);}}else{console[_0x487e('‫8a','x6Rg')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}});}else{console['log']('\x0a【'+Tips+_0x487e('‫1e9','h4vK')+$[_0x487e('‮1ea','Czxd')]+_0x487e('‫1eb','PHG5'));subTitle+='\x0a【'+Tips+_0x487e('‮1ec','%@]0')+$[_0x487e('‫2f','r@64')]+_0x487e('‫1ed','$Qoz');}});}async function card(_0x3137f3){var _0x57e58d={'sGkXp':function(_0x5ae535,_0x5183eb){return _0x5ae535!==_0x5183eb;},'LjJKN':'bkFRI','JCBbs':_0x487e('‮1ee','LxL@'),'BwXlj':function(_0x1f4cee,_0x3f7565){return _0x1f4cee!==_0x3f7565;},'sMdkl':function(_0x2644cf,_0x19166b){return _0x2644cf==_0x19166b;},'JsiVG':function(_0x2c6737){return _0x2c6737();},'AnQmD':function(_0x1f7a82,_0xfadebf){return _0x1f7a82/_0xfadebf;},'SPtZr':function(_0x17fcb5,_0x5e867b){return _0x17fcb5+_0x5e867b;},'AroQi':function(_0x441504,_0x3cc76b){return _0x441504+_0x3cc76b;},'zyBxe':_0x487e('‫1ef','[jc)')};console['log'](yyz_Kami);var _0x4d4d24=Math['floor'](_0x57e58d[_0x487e('‫1f0','h4vK')](Date['now'](),0x3e8));var _0x3351d6=_0x487e('‮1f1','n#hA')+_0x3137f3+_0x487e('‮1f2','PHG5')+yyz_Kami+_0x487e('‮1f3','OzCM')+_0x4d4d24;var _0x13ab81=CryptoJs[_0x487e('‮1f4','L1z7')](_0x57e58d[_0x487e('‫1f5','axBM')](_0x3351d6,'&')+appid)[_0x487e('‫1f6','Fs1q')]();_0x3351d6=_0x57e58d[_0x487e('‫1f7','d0hp')](_0x57e58d['AroQi'](_0x3351d6,_0x57e58d[_0x487e('‫1f8','EUFf')]),_0x13ab81);let _0x356824={'url':serverUrl+'card','headers':{'user-agent':_0x487e('‫1f9','2MjT')},'body':_0x3351d6};return new Promise((_0x53dbd3,_0x244c33)=>{var _0x580de6={'pDaKp':function(_0x3fdc75,_0x45fe45){return _0x57e58d[_0x487e('‫1fa','U6IM')](_0x3fdc75,_0x45fe45);},'oKcmK':_0x57e58d['LjJKN'],'PveTT':_0x57e58d['JCBbs'],'paBNn':'NJXee','SSvcG':function(_0x566fef,_0x5336d6){return _0x57e58d[_0x487e('‮1fb','W@qg')](_0x566fef,_0x5336d6);},'VmyYa':function(_0x266a19,_0x91461a){return _0x57e58d['sMdkl'](_0x266a19,_0x91461a);},'beXKP':function(_0x4ac630){return _0x57e58d[_0x487e('‫1fc','Xps1')](_0x4ac630);}};$['post'](_0x356824,async(_0x332e8d,_0x1d4321,_0x4afa23)=>{var _0x14d2e7={'RPsbn':function(_0x24e7dc){return _0x24e7dc();}};if(_0x580de6[_0x487e('‫1fd','q(xJ')](_0x580de6['oKcmK'],_0x580de6[_0x487e('‮1fe','Czxd')])){try{if(_0x332e8d){if(_0x580de6[_0x487e('‮1ff','i8W*')](_0x580de6['paBNn'],_0x580de6[_0x487e('‫200','W@qg')])){console[_0x487e('‮201','Zrvs')]('\x0a【'+Tips+_0x487e('‮ce','IH*[')+$[_0x487e('‮202','PHG5')]+'\x20观看视频】:\x20'+result[_0x487e('‫203','Dl2v')]);}else{console[_0x487e('‫204','V2gP')]('\x0a['+TG_ID+_0x487e('‫205',')OpJ')+_0x332e8d);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x332e8d;}}else{if(_0x580de6[_0x487e('‫206','DE[j')]('NOCfe','ManFO')){let _0x36108d=JSON[_0x487e('‫207','EUFf')](_0x4afa23);if(_0x580de6[_0x487e('‮208','OzCM')](_0x36108d['code'],0xc8)){console[_0x487e('‮209','d0hp')]('\x0a['+TG_ID+_0x487e('‮20a','n#hA')+_0x36108d[_0x487e('‮a6','bF2w')]+'，脚本已正常使用');return![];}else{console['log']('\x0a['+TG_ID+_0x487e('‮20b','x6Rg')+_0x36108d['msg']);subTitle+='\x0a['+TG_ID+_0x487e('‮20c','j(7W')+_0x36108d[_0x487e('‫20d','vrUe')];return![];}}else{console['log']('\x0a【'+Tips+_0x487e('‮20e','syN3')+$['index']+_0x487e('‮20f','vrUe'));}}}catch(_0x32d16a){console[_0x487e('‫113','#mxh')](_0x32d16a);}finally{_0x580de6[_0x487e('‫210','%%y2')](_0x53dbd3);}}else{_0x14d2e7[_0x487e('‫211','jEr(')](_0x53dbd3);}});});}function Format_time(_0x517084){var _0x2efa8e={'PjsxQ':function(_0x139ff8,_0x12d8df){return _0x139ff8<_0x12d8df;},'JaAmr':function(_0x4c6dd8,_0x15663f){return _0x4c6dd8+_0x15663f;},'FzxlE':function(_0x1aeaa9,_0xb17b2f){return _0x1aeaa9+_0xb17b2f;},'hogmn':function(_0x25cc00,_0x498d9a){return _0x25cc00+_0x498d9a;},'OxxUS':function(_0x256027,_0x3bd5e0){return _0x256027+_0x3bd5e0;},'UnrKf':function(_0x2d16aa,_0x208c73){return _0x2d16aa+_0x208c73;}};var _0x314243=new Date(_0x517084*0x3e8);var _0x45ed6a=_0x314243[_0x487e('‮212','2MjT')]()+'-';var _0x210dde=(_0x2efa8e['PjsxQ'](_0x314243['getMonth']()+0x1,0xa)?'0'+_0x2efa8e[_0x487e('‮213','j(7W')](_0x314243['getMonth'](),0x1):_0x2efa8e[_0x487e('‫214','V2gP')](_0x314243[_0x487e('‫215','YHcp')](),0x1))+'-';var _0xcb66b7=_0x314243['getDate']()+'\x20';var _0x5ac5dd=_0x2efa8e['hogmn'](_0x314243[_0x487e('‮216','PHG5')](),':');var _0x1a3bc2=(_0x314243['getMinutes']()<0xa?_0x2efa8e[_0x487e('‮217','LVvc')]('0',_0x314243[_0x487e('‮218','$Qoz')]()):_0x314243[_0x487e('‫219','%akX')]())+':';var _0x144d7b=_0x314243['getSeconds']();let _0x10fdb2=_0x2efa8e['hogmn'](_0x2efa8e['hogmn'](_0x2efa8e['OxxUS'](_0x2efa8e[_0x487e('‫21a','d0hp')](_0x45ed6a,_0x210dde),_0xcb66b7),_0x5ac5dd),_0x1a3bc2)+_0x144d7b;return _0x2efa8e[_0x487e('‮21b','Fs1q')](_0x2efa8e[_0x487e('‫21c','q(xJ')](_0x2efa8e[_0x487e('‮21d','axBM')](_0x45ed6a,_0x210dde),_0xcb66b7)+_0x5ac5dd+_0x1a3bc2,_0x144d7b);};_0xodR='jsjiami.com.v6';



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