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


const $ = new Env('【佳佳衣22/04/23_0】');
const notify = $.isNode() ? require('./sendNotify') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodE='jsjiami.com.v6',_0xodE_=['‮_0xodE'],_0x152a=[_0xodE,'QWDCqcKlRQ==','w6HDoMOU','C8K7ew==','eMOeaMK/Bg==','w7YIwovCk8OjBFAA','FcO6QA==','VynDq8KoXcKsdQ==','w68IwrzCgg==','XyPDrw==','w6TDpsOO5L6G55W/5Y2a5ayYw4oP','wrtheuS9nueVgeWOs+WtkcKnwrY=','wr/CmxA=','AcOzUGh7Jw==','wrvCk20=','KC3Dh8OxMuiFguaeqOaJmOihnMKYwoHDneWPiOS5j+aUlumVo+++iQ==','CMO+Fj8i','wonDpnsewrtAw4c=','KjZjw6AV','w7QXRCvCuUHDjXpCwpdiDsKKSkvCjMKR','MxgzAsOB','w4PCuMKkwq8c','w7fDgTfDjw==','wrPDocOTw4TjgYflhYrDvg==','w4bkubHotbzlj5bjgbjDr8KqwqA=','wpswwqLDmMKq','HQwsO8OZ','R8Odw4vCtUI=','Pgo3O8Oi','XcOXQ8KoJA==','wrhqD0FB','fcOWw44=','ZOW9hOWmvuOBreeuhcO/','KsKwZ3vDpA==','PcORd8OjCQ==','EMOnY8O+HQ==','EynDlg==','w7tWQzkF','BkLDqzU=','dD7CuA==','WMOUecK/VA==','wpLCqcKbw7VXLl3CiS/Csw==','ZcOWw7zCpl7Dj8O1Y1zCgWU=','Zn1ew5zDoQ==','wovDrWw4wqtdw5Y=','wpxxa8K/','MsKEHg==','PsKNYVTDjg==','wpF0wrvCgi/CoMODw4V1wrM=','woZywpjCnjjCu8OZw4c=','fMOQT8K8E8K1w58fSHt2','wrxoClxQYMOrwqwTAA4sOA==','MMK7bXrDksOfw6RQw77ChQ==','w5jjg7joha3mnqvmjZDnprjjgobvvYrmrKrohKHmnq3ljo3og43pnLzpvIbnja7loLrotKc=','w5AdwpHDrRBB','BFXDtcO5w7csTg==','w6BfQhE=','w69VSQTDt8KVCWnDoVs=','O8KWwoM=','wrhMw6fChcKpwpdXDwkdw59LTMKR','SmTCjsK8KHfCq0hnw4/CgsKYwqzCgsKMw7LDpGjDuDnDsjM=','G8OJGAd4RQPDsMOCccOLPcKD','QznDvA==','CcKzQGvDtA==','w79rKsOScg==','V0Qxw7jCmw==','B0XDsMOcw5E=','wpzCt1rCv1w=','w63DtsK9w5/Dgg==','w6QKd8KFwoE=','dX1Yw4zDrA==','QcK3Ow==','w6sJwrzCgsOp','w7LnrpbliYfjgpbCusKi6L2D5ZqObg==','5o+y56Sqw5fDoT/otb7ljbMf','T2XCuMKBRw==','woEww7XClX0=','wrvCmznDqMOkw6c=','w4PDucOlwoDClQ==','TsOANsOC','wofDrWsvwqpiw4Q=','HsOdZ8OJCw==','enNL','5o2b56WaNMOYw6Xota/lj4YR','GMKoOXBO','TueumOWIsuOAtsODwrLmiKblirs=','OMO4ZcOnKQ==','w5zDr8KTw5HDnw==','S+etk+WKv+OBgcO1woflpYTotY8L5Y6D6IGg5Lm65pWA5bWW56yS5YmK','woQMw6g=','IcKJUemru+iulei1g+WOkMKvwoTov4nlmbRp','LMO8femqmeivt+i3lOWMncKsw57ovJDlm6Yt','dWAIw4jCvA==','d0ksw63Chg==','CDHDhsKBw4gDwofDuMOUw7ldQcOsAsOg','JMO+PT8gERfDh8OBbMOfLMKVw6U=','R8OdXUTCqjzCpMKhIMKowpQGw6Qjw77DrsKFKTJUw4gRw6DDk8KWc2tpw6wTEirDqCh5w4zDsMKGaUvCvcOHKyMdw6pwQg==','SsKiNcOIwpnDrcKgwqhVecKTwqrCjA==','wr/CiH7Cgh9eGRVsRcKRwpDDqBbDmHFgwqhNfC/CtsONwpzCvcO4w5AVUcOdRsO2wrbCjsKsOlbCosKPBMKHwofDlXpGD2sQw4o=','SMKZGsO0w68=','QFjCu8K7NA==','AsKKG2d1','MinDi8OGw4EcwofCu8KEwqAVT8KnIcOkwr3DnVDCmQTCr8OtwobCvy3CoMKYwrV+R2svV3HChwLCj8KEw6/Dv8OPLwVtPlA9woMBwpp1wqgVHcOOXnlkwq7CoMKWVGYdCjMXw4fCj8KefSp9ORXCtMOQw7HDqsOvw4rDt8OUwpnCnsO+w40owq/Cp8KgDXDDll/DskLDj8KmLA0dVMKDbCEnKQJcw7bCuMO9E3DDhcOow4NIw6E1w6sHwqM2wqDDr8KwNHnCjRXDjsKaw5PCtHPDtsOyw5vDhzZmKcK3LcKGXRohwpTDj8OSw4Jhw7fCtnBkYyjCs8Ouw5lMMcOKw6sSE8KgLcKRImBwDm7CtGjCk8Knw4fCvsO/fQVqJsKnfMKdwp7DglDCghQcwoLChsO/McKJFcOaRVsCVG05w4/DjMKWwrPCmMOQD0XDkT1Nw7bDssKVGcK3K8O7H8KhOizCuCDCiMKJEVPDpA7DgcKuRcK4wqHCj8KDZsKowozCqsKnw4TDnMOUA8OSw6dWw540fMKPwrDDpcK9w44dwpQSYcK/B8KeEsO3w4XCqcOwBA==','w4JmUB0K','AMKcFFx/','dQ3Cr2XCug==','w4wiwofDpSE=','DMO1SmZgIcOmIsOn','GBwsEcOw','wo0uKkg4','w7HCpMKLwpob','VT7CjnXCrw==','w6VcLcONXQ==','asKSH8Ouw6M=','wrjDu8OZ5L2N55WL5Y6N5a64w5EC6L+B5ZucwqY=','MhnDtuS/rOeUueWOteWshjvDsei/n+WZl8O5','w7sPasKB','OMOQdA==','5o6v56W8wpzCgsKA6LWW5YyRwrQ=','woRwwqDCmBI=','wrEoOUkm','w6sBwpXDgC0=','wrVsXsKUwps=','EjXDlg==','w6TDpsOO5rCR5Yeb5aSK6Le7w4oP','QHYSw5zCmsODb2VDwpF/','Hm7Cn8OLSw==','HMObd1dV','w6XDtsOewoXCjA==','w7JJdAXCtA==','XcOYccKuMg==','w7TCmx7DoMOuwr8=','DUHDoD/CvQ==','Sxswwow2','w5IdwoE=','wo3CrsKKRg3CjRPCjg==','WcK3D8OMw4fCpMKqwqo=','w6oDesKawr0nRQw=','bwwYJ8O5YMK1wq81esOLc8K3w65fw70gDsO9w6bDkMO4w4/CmQYP','w5l9D8OMXw==','WcKWEcOSw4Y=','w4Y+woYKwqM=','CcOAFAULCQjDssOLcw==','w7jDrsKNw53Di8KcDDXCnVYtd0jDnsKMDsOpw6fCj1jDocO/wrAsw7vDocKXbsO0Um1qWRbDqAIEw5vChVvDh8KyPR55AcK6wo1iw5U+C8OoeVjDl8OWw7jCqsOXCMOWw45Awrl/aGIFQRZIw5LDncKsKcOdw63DmkLCvEJ2w7BfV8OuworCpyEmC2rCj0HCvThNBcKIIQgIwr/CgTQgWsKuw5TDssOKJSzCo0dOwq9vw7BfeHFyw6t4wqbCiUdidTzCqBd0VcOXZcOGJ8Orw4lpw5rCoi4ew5DDsyd8woHDqCnDlF/Ds34ow47CuwYgJsKlwqPCnxtxwrrCqRDCuH8nw6fCk2ZNwq3DoVDDrsOeWHZLawfCkcOBwpdGw5TDnMO9AV1Dw5sdRXLDjcOJYsKmw65ibcKZaUZiwr/CoMK6YMK/wqbDmcOz','eMOQacK4','BUjDt8OIw6k=','w6NTSCAX','w5YewqQnwrA=','wqd1BA==','PwbCu+ebo+W/juWlsei0ksOAwpbov5Tlm7HDuw==','wp7Don05wrc=','wpJxa8K/','FwIDOcOa','wrvChhHDqA==','cjbCrA==','PwbCu+ebo+W/juaJkOWKqMOAwpZWZsKL5YuR5pyB5paw6ZW6wqA=','G3rDrcOcw6g=','QMKrOw==','w4HDrsKcw5HDiQ==','w5oXwrrCg8Oe','EsKpOXA=','w7o1wrzDjiQ=','PMOaR8OpFA==','wo1Hw4nnm5Dlvpnlpojot7HClFRn','ZcOMfQ==','AisS','w6YTfg==','wo/Dklfnm7zlv5XlprPotrJqbhs=','w6wEwrs=','RMOAb8OiGQ==','wqTCkMKgSgg=','XMOWw5PCv0LDhsOmDwjDnDBww7hfw6tfJhLCm1Apw7XDiWjDvsOiSktMYVt9ClfDrwlmIGx5eE4Nw77CvDgrwoAXUQTClkg4Kw0SwpnDhsOQw6d/WcO9H8KBw5lqCwVGNyZywqfDgQYrw70wwrPCrk5xwqERwqHCl8KLw5o3wrgcwpfDqMK4w5rClsK6w6nCiDDCvkQdVgEpPsK8wofDj1Yhw7LCnFN0w5ZBIMO5wpolZHHDvXBjw7JnP8O4G8Olw7TCksKeJ8Ojw7HCiQ92wr1Sw4xEw5lxAnzDocONQBITwr0dwqDDu8ObAxVXIsKuwpg9woTDvsK7wqE9YMOqCR7Cs2zDkQR1w5scw7UJf8KcXMOpwpVew4/CucKaw4RSA8KxSWVfU8Oiwp80wqIaUh43MsKvwrRRa3MJw5XCtUI=','OGzDtRfCtg==','XSPDvw==','SMKSbUzCnMO8Cw==','FTjCtQ==','w6jCkcKqwq0+','woHClkjCqnw=','AWAPw73CgcKS','YUbCgMKjRg==','UcOyUcK4KQ==','wrBkworCgxA=','wqjCgsKlw7F6','wobDjUEhwr4=','wptEwqnCrSA=','AcO5WQ==','wr7Ckm7Cl10=','wpXmiLzlpqHjgqXCncOQ6L655ZuEwog=','wqLChwTDsw==','w6JMMMO0w6k=','aSskwrow','wp9IesKLwpM=','InzCkemoo+itrOi1luWMkcKuwpHovZrlm7tP','MhnDtumon+ivkOi3suWMtzvDsei/n+WZl8O5','wqfCnXjCgUA=','ahIQwrYm','wqh1B00=','w5EBwpE=','UsOhaErCuw==','wrHChxPDog==','w59dw7jpqavorZDohbfmnJJdw4Q=','SmAB','wrTCk27Clw==','worDhirmloLph6rpq73or7dYOw==','S8OeSg==','wr07wovmlr3phJLpqa/or6ZnTA==','e29L','Tn/CnQ==','BxFWw5MZ','wpjCs8Klw7JWOQ==','O8KHSnDCuw==','w6EVwqHCl8OlAhMNwpc=','wq7CrcKjSgo=','wqoaw47Ct3A=','JRMe','Q+OBrOiFo+aduOaNmuekreODi++/h+asteiFneafluWOq+iBuemeiOm/s+eNpOWihei2sg==','SxbDp8KcXA==','wqLDlV0nwpo=','ekl4w7/DoQ==','wrwSwo4=','Q2R16amY6K6f6IaE5pyRLMO4','w6TDpsOO6am16K6W6ISh5p+yw4oP','Xj/Drw==','WMOrYMKuBw==','wpp3w4PCosK2','D8OffEhb','e8OsQMKjIg==','N8OsQ8OlGA==','SeODjuS9n+iAm+aNjOemiuOCge+8o+molOisveiEsOacosKUw6kl5aWE6LSzFuivpeWIjuS/iOaWteiHj+afi+S6nuS5uOaGsuWEpuWtlQ==','JcO7asO3CQ==','wo4Pw6DCsVg=','eHNb','JmnCug==','wrgSwprDn8Kiw5jCucOL','w5xcDsOWWsKif0I=','F0/DvsOqwqY=','PR9mw6ATDzwB','w6obVQrCuA==','BcOaFAI8','X8OSJ8ORwqHDlMKmw54=','JsKwHmN3','w6PDr8ONwqXClg==','wrfCg8Kxw5Fn','RcOHQ1nCpg==','w7hEYg8m','KMKCRlPCkw==','wrVjw4jCqsK0','SsOjY0bCrg==','SxcNwoUt','D8OgKxgV','Un/CicK4','wqPCmMK7RQ4=','w6PDl8Ofwr3Clg==','X35vw6LDpw==','wqEBw4zCk0k=','w5kKDOaynOWFluWnhei1gDrCt+i/quWalCc=','cMOifOaxkOWEueWnvOi3ocO3E+i/geWYrMO+','G0zDvSPCqg==','w4lkJcOlbQ==','w5DDr8KU','wofCnBHCvw==','H0LCpMOgdA==','fGTCrsKz','w6MTVA==','wqHCq8KIw64F','ZzbCrHnCsFbDrMOWwojCvg==','w79YYj4SGMO5MA==','w79YZDoQFMOlFMO/wrwy','GcOdEg==','w4YGVkc=','YcOYw5vCpUs=','R37CmcK+ayjDsA==','FlPDiMOsw6kpWcKd','XEnCh8K7Jw==','NgUyHMO5','eHvCosKGCw==','esKQfsOnEg==','ZMOQfQ==','wrtheuazieWHpeWno+i2ssKnwrY=','AlDCsQ==','77+e6KyNI8OAw5/Di8OTf+ivsOWkvMKuLmDltpzooLTmsKnlhLU=','w5AdwpE=','VsOMI8OAw4PCmA==','wpMdHUIj','w5rCs8KKwpw=','w5LDmMKfw6PDjg==','B8KESG3CgA==','XcOTK8OXwpvDoMKqw5VRV8OSVlU=','wp1xaA==','HsOkI+aztuWEkOWmgei2tQPCuA==','77yS6K67AcKTAcOXeTnorablpJ4kC8OG5beG6KO55rKA5YeY','wr0Bw6zCuUM=','U8OrakvCiQ==','w60Ywrs=','AMOlWQ==','w6hVOA==','w4l5Yy7CmA==','EMOcFg==','wrbjgaLkvqrogq3mjrLnpInjgK7vv4vpq63orabohZ7mnq0Ww78R5aeb6LW/w4vor5rlirXkvrfmlpfoh7jmnr3ku4PkuoLmhpzlh53lraE=','woBYwpzCiwM=','5o6y56SGwrbCtcK26LWm5Y+Aw5o=','MeaKtuWmnOODh0jChOi8rOWZhg0=','bMOydMK0FQ==','w6AAWBHCkQ==','wqQUwrHCgMO/UA==','JcKybHHDrg==','EcOzVcONIg==','Jx9C','w7UYwrc2wrvDhQ==','IjTCvXzCvBk=','wp/CqMOT','w4hiag==','wpMLwoTDg8Ko','LFXCu8O7dQ==','w7UYwo8nwqfCkSnCtg==','wohsDkBR','FlPCmsOxUg==','fT8nwrA=','w7rDpcKnw63DpA==','HisGCQ==','wq8nw6vkvpXnlaLljrPlrbHCmi3ovJPlmrzCjg==','LMO8feS9queUnuWOk+WsrMKsw57ovJDlm6Yt','wqLCiQXDtMOl','TsK3OMOd','w68Uwr8=','w4VAOg==','WsO8w6bCp2k=','DsKEd0rDlg==','w7DDs8Klw57DkQ==','wp5ywqw=','w6FIw5bml5jphq3pqr/or77Dq0E=','EcOAFg==','SDXCv1DCvQ==','TU/DosOrwrQjW8Kbw4VzAMK1woRq','wqRLGk5j','QwXCuEnCsg==','CXHDtcO8w50=','fMOVCsOmwro=','QsOVNsOTwo3CnMOswpZDc8OcFlTDqGLDsj/DlsOtw6XCtxQTwpJxwrjCk2jCmsOIBhgWWw==','wq4xI1Yq','U0ZBw63Dsw==','ZH7Cr8KPAg==','YEV4w5bDkw==','wqkNF0AO','w5HDgMKZw5jDgA==','UTjCmnnCmQ==','NiPDqG3DpVjCqcOPw4M=','X8OcRWvClg==','VRQ/wpA3','ZcO5XG/CqQ==','wonDpns=','IMKJdn3Dpg==','CcK4ZEfDsQ==','wpJWw4fCocK1','eyo9','w4LDqcOewoHCkw==','w7cEwr/CrMO6','JQsDH8Oc','wrXCvMKAw4TDj8K0RMKHwpg=','djrCvXXCsU3DqsOgwonCpMK/','w6NRDcOvw6Y=','w60Pa8KwwqkqWQ==','w6pWOMOHZg==','NyDDv8O8w7s=','MMKrYW3DqMOC','Gj7DmMOcw5kDwrXDrcOfw60=','X8K9PcOcw7PCpMKowqhgbMKcwr0=','KidWw5YI','HsOmUmZ7','w4V1fw==','LRkaJsOzZ8Ku','w7TDr8OT','d3gFw6nDmA==','cDDCj2XCp03DtsOU','bcOReQ==','wrUTwoo=','wrp4wrM=','woHCocKZw65X','DcKLHFbvvKw=','w7lvD+++nOaVgQ==','R37CmQ==','Rj7Cr3TDoxA=','w5tHL8OLRsKseEN1','CEbCosOVZMK4wqxYwrRqw7s=','w7bDjsKPw5bDoQ==','PcKtF1tm','FsKjKVhZwpzCnsO+','CEbCosOefsK6wrRp','wqx/F2xUUsOn','UsOye8KYGQ==','wrwOw67CnFM=','eTshwpk3w7BIYsK9ag==','FMOfTGBd','wo8Gw7vCk0MAb8Ouw6FK','w57CucKawrQ+VcKrwoRKLw==','VcOMdMO+O8O4Z2DDiDI=','e8OzUMKpLA==','wp/Ct2zCoFc=','woDDu0ILwqs=','WcKyG8Oww68=','FlbDnMOQw4E=','w4d0WAQi','fsOqacOjHA==','UcObecOdKsO0JWTDnw==','SeaKoOS4juWIruS8gei3psKwWsOqwoVaesKowowOBjYW6K+l6ISb6KGq5ayF6KCQw60=','G+aJteS7h+WLpuS/r+i3ssOYw5d+wqrCtuius+iHreiikuWvk+ihgcKV','S2PCtMKjdj0=','wrPCkB7DqMOz','w43DkMKFw53Dg8OHWHzDgjVlPRrDlMK1A8OMwqjDuRzDqsKjwrdow5HDicKjKsKfEj0j','wp/Chw3DrsOsw67Dtn97FcKxRxg5w7bCr8OdwpnDhEZUwqzDuQpaBwTClsO+wqUoEMKlw5ZOZ1jDgsOid07CncKLX1cuwr/CrCPDvMOPJA4BUy7Du8O9GRt7wqPCnFJWHMKmwqRrb2YKw4pSw5rDhUHDvC7Csm8IRBlFNjDDpcK5w7p3wrkfwpDDnMK/woJsw5nDoMKsw7g3UkDCkcOqw6ZGOyDDlcKxwpHCj8K3w4/DnC/DmFUxSMOgNQk6fMKMXjo=','eMKsOsKA','wpgCw73CrU8=','cMOYwpzCtRvDicK+EQ7DijFlwrUgwrUH','dMOXw4o=','wqdpwq3Dkg==','Qy3DusKpQQ==','wrXCusKHwonDjsO8RcKbw4/Ck0TDkjjDi1DDi1xRZwoHRMO2U0XCpDgBwp4Cw5HDgA==','wrfCnB8=','ZsOGUcOHDA==','IT8xHsOh','wpRzw57CqA==','w58xYsK7wpo=','w7TDr8ODwoI=','wp3CicK4w4pn','MQFww7MH','wpsWwr7DnsKG','wrVMGAjDqMKIVnzCpw==','w6RkDMOvXA==','asOSTcKiMQ==','w54fwr7Coh8SLcOmwrRFw41rQ8OOw5MSwo8=','w7JABMOmXw==','OAAaHMOd','LOOCvV5HwrrohYXmn6nmlZLkur/lhorot5nlo5nmmpLjgJ/vvpPCk+ODouacqOS6h+W6qOWNq+W5v+eZieiGvOafiOaWmOS7uOWPjeWHueS5kea3v+WOheeYiOS7qOS8jOiGteaetO+/q+S7nueUkOS5lua3uOivg+WTuuWsr+S7jOehieeojO+8i+emmuasiueVt+S6rOWXtOS4oeaLsumcjOawv+eZtOeYi+++t++/g+WQv+WLquWThOacteiHv+i0jOOCtifjgKDkubjogITkv6LorqDlhI/lk6rmsrfmgarjgpflhafno7vmg4/jg7vlroPmlY/mgqblkpDmnYnmlrTmgabvvbXorbXmo6nmjYDmgajlhrnohrboopXliKHmlY7jg7zDieOCn+acn+iHluafvuaVsOS7se+9geemieasnuS7neS+l+WHiuS8r+WOquOCluitkeWfseOCque9meS+huS7vuWOruS4nOS9s+W+puW/teealei/rei8p+OAnOWPvuW6niDlkrTliKvlk4TmnJbohKLot5rjg7BT44G05p2S5Lqb5a6c5Lme5L6u6IeM5p+J6Zex6aCs5qeD5Li/6Let6LeT77+25Y2T5oqX5L6P5Liu6ZmT5LqP55eR5LqC5L2M6Iea5p6P6ZSM6K2f5ay16Iak55mV5Lma5L6y5oyk5aaC5oqd5o605a6I44KEw5njg67nmL/mjbHmiazplZLmj73kvKrnlKboh7TmnIDnm6Xku6Hkv4vnl7rmir7vvrjlj7Dmi5jkvL7kupPpmqDku5nkuJfmjJLmiZnlhL3kuaTmn6HkuKzooKTku7DovYzlj57lm7jlrpzCgOWemeWMl+axtOW/nuaKhueYtOWFq+azvuikqueYt+aBneWGseS6h+i/qeiikeS8i+aQne++nOaftuS6h+WtsOS7v+eVm+auqeW/u+i1sueYtuS6l+S+l+mbvuekreazt+a9juaLhOWGvuS5jeWRo+aduOakjeS7k+i2hOi1hOODqSnjg4zlpp3mna3ku5bkvIzljoHkvJXmib3kuaPkub7oro7kuaTorrboha/mnavljKXog5bmtJTlq5LkvY3niYTlh6jmnZfli7nvvafliITluoPlj67mlJ7pgaXnnaHluL7mjZ3kvq3ou5vkuZDorpvmmbzjgIPmip7mn5nmnanor5DmmbzvvK3miKfkurzlsLnlnqbmlpTliIjorJDorofmlonkuJDlk7zlir7pmKnnmJLlhoXoh7PmnaHjgbTDmeODouS4s+S9quS6sOS7keS9n+aWlOW9kOaeu+edlOavoemgiuebg+ebgeS4iuaJjOeav+aMgOaIgemWhuaPmuS/meeUouivueS6iuW6rOeZnOS4reS/j+iGveafsOeYluS/qeeVueiDrOmAv+W4hOS7s+e4lembj+ivhuavt+WjhuaZmuOCp+ael+S6guS/kOeWjOmZnuaUi+aahOaXruaJueijnuWHlOavneWFs+i2iuWjpOaaq+eYgOaemOWLq+OCpOS7o+aWmuS/queUveW5heWng+WIl+S6g+S6v+S9nOeatOWEkeiHn+aet+aIpOS4qeW4keaUpuS7m++/qeWKl+inqOS7ouaDoOW1m+aPgeWNveavtOWGjei3nOWjquaasOOBlQ==','Q8OSDMOMwprDgw==','wpF2w6rCuMK0','woTCpcKdQAbCnw0=','FsKXSHzDtg==','w41KGcOzRA==','w4UNwpLClsOr','wrw8wpDDoMK0','S1Ifw5HClw==','OxkYMMOufsKowo4oKcKZ','wq4EwqUgw7rCmyvCsBDCi8OkwrtpBQo=','AULDpj4=','HD/DscKpC8K/bcO+w7wSwqdbw6fCpg==','U8OgXk3ChA==','wowuEHQM','Q8OVRFvCtyzClsKsJ8Kk','w6QLwprCvsOm','GgrDhcOcw64=','Y8Ocw4jCsmjDg8OrRW7Ci24z','wqPCk1nChlcYWAU=','w6jDocOQ','AMKHb0I=','44C877+C5p225aOT5YSs55i15bmQ5YyV6Ye8NcKBwrHCkMOJDRHDmwJ3w5E1w6w=','DDdzw4MT','wpfCpMKYViXChRLCjnFsbMOl','F8KJSm/Cug==','CynDosObw58ZwojDsw==','w78ScMKY','UWDClsKlZg==','DDbDncOGw5k=','ViLDqw==','woJ8wrnCmS8=','c8OsUw==','CMO4XX12P8Kv','R8OOJsOG','wohYIA==','cnvCmcK/JQ==','w4taLcOKTcK5ZUB0wpY=','w7FJDMOyw5PDindQ','cDDCiWHCpUHDqsOwwpHCucK5','OlfCsMKr','w7RRXgfCvw==','w4XDi8Ok','w6FeTwbCo8KEEQ==','bj8x','w5sLesKGw78=','dXVcw4fDocK/bMKvdjY=','Vn/CqcK4YDHDqlg=','GcO5a39/KsKpAsOsXBc=','BcOcOT8X','Bzc7EsONwro=','SMK2Kg==','w7ZJJsOZw5jDmmNow7fCn8OfRw==','w6RdMMOhZA==','woFtwqfCgz4=','w7jjgI3kvpfog6/mjprnp6jjgqbvvrrpqoHorIbohbjmnoLDtcKHwrXlpp/otbcM6K+b5Yq95LyX5paD6IaN5p+Y5LiX5LmM5oeJ5Ye85a66ag==','wp98wr/CiSI=','w6LjgbPkv5Pog5vmj7rnpZTjgIvvvoDpqIjor7joh6PmnLsow7rCoOWln+i2mcK76K2y5YiK5L+B5pWS6Iao5p2w5Lix5LiC5oem5YeK5ayQBQ==','w5nDrsKQ','5o6s56aJXFp56LWD5Y6QwrU=','bTHCuHTCrQ==','TuesuuWJheOBrMKTw7/ov5Tlm7gK','5o+U56Wlw7E8w7jotILlja/Ckw==','w6IOfcKQwrA=','wpdzwr0=','w7gPYMKqwqIjSG7CpcKeSTM=','w7YcRg==','w4FdOcOHUMKEdw==','asO7bFzCoQ==','w5xiVScI','w5NlSBnCsg==','wp3DrHYVwrhHw5vCocOgw6N/DA==','JsKwdQ==','w6cJwq4=','wpjCrsKPw7hKE08=','w7IYwqUMwr/Ckj7CjgfCmcK/wrQ=','D8ODHR4g','woJxdsKFwpPCsMO3WBMXHMKt','w5/DrMKOw7PDpA==','QcOGecOyNMOxcVHDiCBGdA==','Q8OPJsOGwobDqcKl','w6QZwqo=','w7ZJJsOZw4vDiWBow7fCn8OfRw==','HFPCusO6ZQ==','dCgHwrUu','w71XGsOhw4c=','YmTCs8KJGMOOwoHDh0nDq8OuJQ==','InzCkeeblOW/uOWlgei3g8KuwpHovZrlm7tP','b8KTIOebluW8i+Wmqui0rTTCjOi+leWbrDU=','S3wB','AwvDsMOs7763','w7lvD+++nA==','JMOmcMOBJA==','JsO9aXpF','w5LCpsK4wroy','w53CvcKawpg=','w7BffwDCqMKdC2c=','w6sJwrzCgsOpIlg=','w6dTSybClA==','5oyh56SkIsO3w5Tot7zljbkn','Q8OPJsOGwoY=','Cuevn+WJsuOCssOEwobmi5PliKY=','BMO4Wmp3','fWTCrQ==','5o6/56SZw7vCvjzot7LljLch','dzAxwrEm','TueumOWIsuOAtsODwrLlpIfotIFr5Yy56IOE5LuY5ped5bWt566x5Yuy','5o+256aXAAXDrui1ueWMssO1','woLCsMKHw7RG','cjEy','5rC/5YWw5L+r5oKd77y/extPNmbDuMKqw5Iz776u','wq7CpTbDhO++mg==','w41dPg==','QsOIcsOeOw==','wopfMA==','w5gXwpXDmhtDSw==','AysRGA==','wqLCiRM=','BcKpDmFEwpvChMOx','w5zCssKN','w5BSOcK+','CyoW','XsKsLsORw5vCqsKtwqtK','w4ZLCcOOw5Y=','LsO7aEd4','w6NVWgzCmA==','w4bDscKbw53Dkw==','w64Iwr8=','bUbCi8KV772o5pWEwoTDkX3vvpA=','SMK2Pw==','wol7EE0DEg==','woFpwrnCgyTCtcOew4Z0','McORcA==','wrl7dw==','w5I3Yw==','ejs2wqYnw65J','w6lfSBE=','LQY2','w5RbTwfDrQ==','w64Oeg==','w4bDr8OEwo/DicKu','J8OLYcOvH8KhScONwrI=','w78PSsKBwrogX1Y=','woM1OQ==','Q2hKwpc=','w6lJOA==','w7lrHsOF77675pWDZX7Dg++/pA==','w6MTQgzCtQ==','w4Miwos=','GMOWEgUtFRM=','Cj46','wq0Cw4fCjW8=','w6FNDsOrw4M=','DhHDpsOaw6I=','w4rCrMKCwpAj','5rGp5Ye75Ly95oC877+Pw7Jqw7xOwqzCjMKKRTXvvL8=','bcO0w6jCle+8tOaVisO7aW3vv6jml6A=','wqfCpWnCtXA=','w6ldSQDCrg==','ARYgJ8O4','KVvDoQHCrg==','wpTCrsKI','w7IDwq46wrvCny7Ctxo=','woVxXMKuwovCs8OgYA==','wrDCtcKfCg==','w6dYVg==','wqvCsUvCse+8vw==','Eg0l772n','w7YcUw==','AsKyL3xYwpXCg8Owwoc=','UE7CmQ==','wrPCmWnCgFwBQg==','wrrCk27Clw==','wrJcTA==','wqfCnW4=','jsAbQOjiRSaLxmi.rAcom.tvP6bIBbF=='];if(function(_0x5e53a0,_0x58789f,_0x11d12c){function _0x8b34fc(_0x15a6d9,_0x29de7e,_0x28a418,_0x24e27f,_0x2c10df,_0x372dba){_0x29de7e=_0x29de7e>>0x8,_0x2c10df='po';var _0x31a3fc='shift',_0x546cef='push',_0x372dba='‮';if(_0x29de7e<_0x15a6d9){while(--_0x15a6d9){_0x24e27f=_0x5e53a0[_0x31a3fc]();if(_0x29de7e===_0x15a6d9&&_0x372dba==='‮'&&_0x372dba['length']===0x1){_0x29de7e=_0x24e27f,_0x28a418=_0x5e53a0[_0x2c10df+'p']();}else if(_0x29de7e&&_0x28a418['replace'](/[AbQORSLxrAtPbIBbF=]/g,'')===_0x29de7e){_0x5e53a0[_0x546cef](_0x24e27f);}}_0x5e53a0[_0x546cef](_0x5e53a0[_0x31a3fc]());}return 0xe140e;};return _0x8b34fc(++_0x58789f,_0x11d12c)>>_0x58789f^_0x11d12c;}(_0x152a,0x192,0x19200),_0x152a){_0xodE_=_0x152a['length']^0x192;};function _0x1afc(_0x121a65,_0x17759a){_0x121a65=~~'0x'['concat'](_0x121a65['slice'](0x1));var _0x6eac67=_0x152a[_0x121a65];if(_0x1afc['pnSoOJ']===undefined){(function(){var _0xe8b842=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5eda17='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xe8b842['atob']||(_0xe8b842['atob']=function(_0x5ddb4e){var _0x2f88af=String(_0x5ddb4e)['replace'](/=+$/,'');for(var _0x27bcb5=0x0,_0x301402,_0x5f1e64,_0x2ea62d=0x0,_0x3b66e2='';_0x5f1e64=_0x2f88af['charAt'](_0x2ea62d++);~_0x5f1e64&&(_0x301402=_0x27bcb5%0x4?_0x301402*0x40+_0x5f1e64:_0x5f1e64,_0x27bcb5++%0x4)?_0x3b66e2+=String['fromCharCode'](0xff&_0x301402>>(-0x2*_0x27bcb5&0x6)):0x0){_0x5f1e64=_0x5eda17['indexOf'](_0x5f1e64);}return _0x3b66e2;});}());function _0x3d3da5(_0x48a6e8,_0x17759a){var _0x53e4d2=[],_0x38571b=0x0,_0x2af30a,_0x1b7f0b='',_0x1b3a1a='';_0x48a6e8=atob(_0x48a6e8);for(var _0x5b1709=0x0,_0x54bb99=_0x48a6e8['length'];_0x5b1709<_0x54bb99;_0x5b1709++){_0x1b3a1a+='%'+('00'+_0x48a6e8['charCodeAt'](_0x5b1709)['toString'](0x10))['slice'](-0x2);}_0x48a6e8=decodeURIComponent(_0x1b3a1a);for(var _0x122c4a=0x0;_0x122c4a<0x100;_0x122c4a++){_0x53e4d2[_0x122c4a]=_0x122c4a;}for(_0x122c4a=0x0;_0x122c4a<0x100;_0x122c4a++){_0x38571b=(_0x38571b+_0x53e4d2[_0x122c4a]+_0x17759a['charCodeAt'](_0x122c4a%_0x17759a['length']))%0x100;_0x2af30a=_0x53e4d2[_0x122c4a];_0x53e4d2[_0x122c4a]=_0x53e4d2[_0x38571b];_0x53e4d2[_0x38571b]=_0x2af30a;}_0x122c4a=0x0;_0x38571b=0x0;for(var _0x45127c=0x0;_0x45127c<_0x48a6e8['length'];_0x45127c++){_0x122c4a=(_0x122c4a+0x1)%0x100;_0x38571b=(_0x38571b+_0x53e4d2[_0x122c4a])%0x100;_0x2af30a=_0x53e4d2[_0x122c4a];_0x53e4d2[_0x122c4a]=_0x53e4d2[_0x38571b];_0x53e4d2[_0x38571b]=_0x2af30a;_0x1b7f0b+=String['fromCharCode'](_0x48a6e8['charCodeAt'](_0x45127c)^_0x53e4d2[(_0x53e4d2[_0x122c4a]+_0x53e4d2[_0x38571b])%0x100]);}return _0x1b7f0b;}_0x1afc['mlNwSz']=_0x3d3da5;_0x1afc['GcaRxF']={};_0x1afc['pnSoOJ']=!![];}var _0x4c313d=_0x1afc['GcaRxF'][_0x121a65];if(_0x4c313d===undefined){if(_0x1afc['mxgsKZ']===undefined){_0x1afc['mxgsKZ']=!![];}_0x6eac67=_0x1afc['mlNwSz'](_0x6eac67,_0x17759a);_0x1afc['GcaRxF'][_0x121a65]=_0x6eac67;}else{_0x6eac67=_0x4c313d;}return _0x6eac67;};try{CryptoJs=$['isNode']()?require(_0x1afc('‮0','7QDL')):'';}catch(_0x3fb277){throw new Error(_0x1afc('‮1','WnHo'));}try{os=$['isNode']()?require('os'):'';}catch(_0x37421c){throw new Error(_0x1afc('‫2','5rcd'));}try{axios=$[_0x1afc('‫3','lNDV')]()?require(_0x1afc('‫4','Er$8')):'';}catch(_0x253f35){throw new Error('\x0a找不到依赖\x20axios\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,jjy_UA,app_soy_jjy_data,jjy_token,subTitle,user_index,yyz_d=![];let appid=_0x1afc('‫5','b4TP'),serverUrl='http://yyz.soyyun.top/api.php?app=10003&act=',yyz_UA=_0x1afc('‫6','Er$8');let mac_e=CryptoJs['enc'][_0x1afc('‮7','zYNK')][_0x1afc('‮8','atKl')](_0x1afc('‫9','[AZM'));let mac_i=CryptoJs[_0x1afc('‫a','[AZM')][_0x1afc('‮b','oHZN')][_0x1afc('‮c','MT@@')](_0x1afc('‮d','ixIL'));!(async()=>{var _0x350dad={'UIKbj':_0x1afc('‮e','Er$8'),'eyDQl':function(_0x6c8a98,_0x263520){return _0x6c8a98===_0x263520;},'GjJqz':_0x1afc('‫f','7QDL'),'lAyKx':_0x1afc('‫10','pDBs'),'ccgRN':_0x1afc('‫11','[)Lf'),'gevxB':'2|1|4|3|0','yoHHC':_0x1afc('‫12','6^vl'),'qwAui':function(_0x2c6da1,_0x5ccb5c){return _0x2c6da1(_0x5ccb5c);},'SojPK':_0x1afc('‫13','ixIL'),'LnmCL':'TmNwf','wGpxK':_0x1afc('‫14','x1dA'),'mDFaR':function(_0x5205d3,_0x337a4f){return _0x5205d3>_0x337a4f;},'LVAtb':function(_0x1a7827,_0x100e91){return _0x1a7827!==_0x100e91;},'WUdmh':'VlxMB','jmyGC':function(_0x3edc66,_0x1d9a31){return _0x3edc66>_0x1d9a31;},'jvRap':function(_0x415ffe,_0x208d8d){return _0x415ffe===_0x208d8d;},'qKDBd':_0x1afc('‫15','w@gZ'),'pYcGU':function(_0x3e3e4d,_0x5635ef){return _0x3e3e4d!==_0x5635ef;},'kzVCe':_0x1afc('‮16','AP%@'),'SyoHY':_0x1afc('‫17',']!IJ'),'CmVHw':'xmDYn','EaHSE':function(_0x365a50,_0x43d653){return _0x365a50===_0x43d653;},'dkQmb':_0x1afc('‮18','pBdL'),'mmett':_0x1afc('‮19','a@Vd'),'BvnQa':_0x1afc('‫1a','atKl'),'tMgHv':function(_0x199989,_0x113eae){return _0x199989+_0x113eae;},'cFVtt':function(_0x17f25d,_0x5894a6){return _0x17f25d*_0x5894a6;},'dHqcn':function(_0x50abf8,_0x3119c6){return _0x50abf8*_0x3119c6;},'zdJVK':function(_0x596e77,_0xa4df8e){return _0x596e77*_0xa4df8e;},'KMKsf':'jybzK','sHYFp':'BvzBZ','Vdbcl':_0x1afc('‫1b','pBdL'),'UhYdG':'0|2|3|1|4','miyuB':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','IJyRx':function(_0x4a1578,_0x404aef){return _0x4a1578+_0x404aef;},'DXpxl':function(_0x400b23){return _0x400b23();},'yqkYu':_0x1afc('‮1c','Ky14')};console['log'](_0x1afc('‮1d','iLH9'));if($[_0x1afc('‫1e','R]M9')]()){var _0x2d346b=require('fs'),_0x598907=_0x350dad[_0x1afc('‫1f','[)Lf')](require,_0x350dad['SojPK']);function _0x13ee89(){var _0x17c351={'uMseG':_0x1afc('‮20','H]j9'),'juJUe':_0x350dad[_0x1afc('‮21','WnHo')],'flBYw':function(_0x347a94,_0x4e9f0e){return _0x350dad[_0x1afc('‮22','pBdL')](_0x347a94,_0x4e9f0e);},'eLtsC':_0x350dad[_0x1afc('‫23','UHje')],'EGFWr':function(_0x13aae2){return _0x13aae2();}};if(_0x350dad[_0x1afc('‫24','AP%@')]===_0x350dad[_0x1afc('‫25','!%VL')]){var _0x61677f='';var _0x360c99=_0x2d346b[_0x1afc('‫26','pDBs')](_0x1afc('‫27','M9BP'));_0x360c99['forEach'](function(_0x4a079e){var _0x1d357a=_0x598907[_0x1afc('‮28','sbc9')](_0x1afc('‫29','MT@@'),_0x4a079e,_0x17c351[_0x1afc('‮2a','iLH9')]);if(_0x4a079e['substr'](0x0,0x3)==_0x17c351[_0x1afc('‫2b','BVeu')]&&_0x2d346b[_0x1afc('‮2c','iLH9')](_0x1d357a)){if(_0x17c351[_0x1afc('‫2d','UHje')]('ToQjR',_0x17c351[_0x1afc('‫2e','C[!g')])){_0x61677f=_0x2d346b[_0x1afc('‮2f','[AZM')](_0x1d357a)[_0x1afc('‫30','ypxa')]()['trim']();}else{console[_0x1afc('‮31','ixIL')]('\x0a【'+$[_0x1afc('‫32','W7N[')]+_0x1afc('‮33','zYNK'));return!![];}};});return _0x61677f;}else{_0x17c351[_0x1afc('‮34','w@gZ')](resolve);}};mac=_0x13ee89();await yyz_getip();try{before=_0x2d346b[_0x1afc('‫35','H]j9')](_0x350dad[_0x1afc('‫36','W7N[')])[_0x1afc('‮37','C[!g')]()[_0x1afc('‫38','8&LS')]();r_ip=before[_0x1afc('‫39','lNDV')]('&')[0x0];r_mac=before[_0x1afc('‫3a','C[!g')]('&')[0x1];}catch(_0x410d81){r_ip='';r_mac='';let _0x51699a=CryptoJs[_0x1afc('‫3b','MT@@')]['Utf8'][_0x1afc('‮3c','oHZN')](IP_address);let _0x13d3e2=CryptoJs[_0x1afc('‮3d','7QDL')][_0x1afc('‮3e','eJOu')](_0x51699a,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‫3f','R]M9')][_0x1afc('‫40','iQVd')],'padding':CryptoJs['pad'][_0x1afc('‮41','lNDV')]});let _0x3fb588=_0x13d3e2[_0x1afc('‫42','pBdL')][_0x1afc('‮43','ilq3')]()[_0x1afc('‫44','s8BU')]();_0x51699a=CryptoJs['enc'][_0x1afc('‫45',']LvL')][_0x1afc('‫46',']!IJ')](mac);let _0xd7b8b0=CryptoJs[_0x1afc('‮47','ixIL')][_0x1afc('‫48',']!IJ')](_0x51699a,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs[_0x1afc('‮49','io[t')][_0x1afc('‮4a','8&LS')]});let _0x3bde58=_0xd7b8b0[_0x1afc('‮4b','g%)R')][_0x1afc('‮4c','lNDV')]()[_0x1afc('‫4d','eJOu')]();try{_0x2d346b['writeFileSync'](_0x350dad[_0x1afc('‫4e','LCH[')],_0x3fb588+'&'+_0x3bde58);}catch(_0x2bd0e4){}}let _0xb19c61=$[_0x1afc('‫4f','Ky14')]()?process[_0x1afc('‫50','zYNK')][_0x1afc('‮51','ilq3')]:'';if(!_0xb19c61){console['log']('\x0a【'+$['name']+'】：未填写相应变量\x20soy_yyz_data');return!![];}else{if(_0x350dad[_0x1afc('‫52','pBdL')]!==_0x350dad['wGpxK']){TG_ID=_0xb19c61[_0x1afc('‮53','oHZN')]('&')[0x0];yyz_Kami=_0xb19c61['split']('&')[0x1];try{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x494ef8){throw new Error(_0x1afc('‮54','oHZN'));}try{YZ=author[_0x1afc('‮55','oHZN')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x3f904f){throw new Error(_0x1afc('‮56','atKl'));}}else{console[_0x1afc('‮57','b4TP')]('\x0a【'+Tips+_0x1afc('‮58','LCH[')+$[_0x1afc('‫59','s8BU')]+_0x1afc('‫5a','Ky14')+error);subTitle+='\x0a【'+Tips+_0x1afc('‮5b','s8BU')+$[_0x1afc('‮5c','8&LS')]+'\x20签到】:\x20返回\x20'+error;}};if(process[_0x1afc('‫5d','oHZN')][_0x1afc('‫5e','8&LS')]&&_0x350dad['mDFaR'](process[_0x1afc('‫5f','[5t2')]['soy_jjy_data'][_0x1afc('‫60','pBdL')]('\x0a'),-0x1)){if(_0x350dad[_0x1afc('‫61','iLH9')](_0x350dad[_0x1afc('‮62','21#i')],_0x350dad[_0x1afc('‮63',']!IJ')])){console['log'](e);}else{app_soy_jjy_data=process['env'][_0x1afc('‮64','b#m2')]['split']('\x0a');}}else if(process[_0x1afc('‮65','WnHo')]['soy_jjy_data']&&_0x350dad['jmyGC'](process[_0x1afc('‮66','UHje')]['soy_jjy_data'][_0x1afc('‫67','x1dA')]('#'),-0x1)){app_soy_jjy_data=process['env'][_0x1afc('‮68','M9BP')][_0x1afc('‫69','LCH[')]('#');}else if(process['env'][_0x1afc('‫6a','6^vl')]&&_0x350dad[_0x1afc('‫6b','b4TP')](process['env'][_0x1afc('‫6c','7QDL')][_0x1afc('‫6d','R]M9')]('@'),-0x1)){app_soy_jjy_data=process[_0x1afc('‫6e','M9BP')][_0x1afc('‮6f','ilq3')][_0x1afc('‮70',']LvL')]('@');}else{if(_0x350dad[_0x1afc('‮71','io[t')](_0x1afc('‫72','ilq3'),_0x350dad['qKDBd'])){app_soy_jjy_data=process['env'][_0x1afc('‮73','5rcd')]['split']();}else{console[_0x1afc('‮31','ixIL')]('\x0a['+TG_ID+_0x1afc('‫74','C[!g')+error);subTitle+='\x0a['+TG_ID+_0x1afc('‮75','7QDL')+error;}};console[_0x1afc('‫76','!%VL')]('\x0a现在信息：\x0a---TG_ID：'+TG_ID+_0x1afc('‫77','C[!g')+mac+_0x1afc('‮78','ilq3')+IP_address);if(!r_ip){if(_0x350dad[_0x1afc('‮79','58YN')](_0x1afc('‮7a','eJOu'),_0x350dad[_0x1afc('‮7b','4[4q')])){if(data[_0x1afc('‫7c','4[4q')][_0x1afc('‫7d',']!IJ')]()[_0x1afc('‫7e','UHje')](_0x350dad[_0x1afc('‮7f',']!IJ')])>-0x1){console['log']('【'+Tips+_0x1afc('‮80','6^vl')+$[_0x1afc('‫81','R]M9')]+_0x1afc('‮82','R]M9'));subTitle+='\x0a【'+Tips+_0x1afc('‮5b','s8BU')+$[_0x1afc('‫83','eJOu')]+'\x20签到】:\x20成功';}else{console[_0x1afc('‮84','5rcd')]('【'+Tips+_0x1afc('‮85',']LvL')+$[_0x1afc('‮86','io[t')]+_0x1afc('‮87','W7N['));subTitle+='\x0a【'+Tips+_0x1afc('‫88','iLH9')+$['index']+'\x20签到】:\x20失败,可能今日已签到';}}else{var _0x591134=_0x350dad['SyoHY'][_0x1afc('‮89','x1dA')]('|'),_0x4cdf45=0x0;while(!![]){switch(_0x591134[_0x4cdf45++]){case'0':console[_0x1afc('‫8a','io[t')](_0x1afc('‫8b','ypxa')+TG_ID+_0x1afc('‫8c','Er$8')+reg_mac+'|IP：无');continue;case'1':var _0x24767d=CryptoJs[_0x1afc('‫8d','pBdL')]['Hex'][_0x1afc('‫8e','7QDL')](r_mac);continue;case'2':var _0x25f449=CryptoJs[_0x1afc('‫8f','iQVd')][_0x1afc('‮90','aoSA')](_0x51699a,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‫91','Ky14')]['CBC'],'padding':CryptoJs[_0x1afc('‫92','Er$8')]['Pkcs7']});continue;case'3':reg_mac=_0x25f449[_0x1afc('‮93','&3^j')](CryptoJs[_0x1afc('‮94','4[4q')][_0x1afc('‫95','ilq3')]);continue;case'4':var _0x51699a=CryptoJs[_0x1afc('‫96','Ky14')]['Base64'][_0x1afc('‮97','zYNK')](_0x24767d);continue;}break;}}}else if(!r_mac){if(_0x350dad['pYcGU'](_0x350dad[_0x1afc('‫98','ilq3')],_0x350dad[_0x1afc('‫99','eJOu')])){var _0x4798f5=_0x350dad[_0x1afc('‫9a',']!IJ')][_0x1afc('‫9b','b4TP')]('|'),_0xe099d1=0x0;while(!![]){switch(_0x4798f5[_0xe099d1++]){case'0':console[_0x1afc('‮9c','UHje')]('注册信息：\x0a---TG_ID：'+TG_ID+_0x1afc('‫9d','5rcd')+reg_ip);continue;case'1':var _0x328b83=CryptoJs[_0x1afc('‫9e','zYNK')][_0x1afc('‮9f','iQVd')][_0x1afc('‮a0','oHZN')](_0x5b3cfa);continue;case'2':var _0x5b3cfa=CryptoJs[_0x1afc('‮a1','58YN')][_0x1afc('‫a2','6^vl')]['parse'](r_ip);continue;case'3':reg_ip=_0x45720d['toString'](CryptoJs[_0x1afc('‫3b','MT@@')]['Utf8']);continue;case'4':var _0x45720d=CryptoJs[_0x1afc('‮a3','[5t2')][_0x1afc('‫a4','io[t')](_0x328b83,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‫a5',']!IJ')][_0x1afc('‫a6','Ky14')],'padding':CryptoJs['pad'][_0x1afc('‮a7',']!IJ')]});continue;}break;}}else{var _0x1868bd='3|0|4|1|2'['split']('|'),_0x35351e=0x0;while(!![]){switch(_0x1868bd[_0x35351e++]){case'0':var _0x51699a=CryptoJs[_0x1afc('‮a8','8&LS')][_0x1afc('‫a9','ixIL')][_0x1afc('‫aa','58YN')](_0x24767d);continue;case'1':reg_ip=_0x25f449[_0x1afc('‮ab','8&LS')](CryptoJs[_0x1afc('‮ac','BVeu')][_0x1afc('‫ad','g%)R')]);continue;case'2':console[_0x1afc('‮ae','ilq3')]('注册信息：\x0a---TG_ID：'+TG_ID+_0x1afc('‫af','ilq3')+reg_ip);continue;case'3':var _0x24767d=CryptoJs['enc']['Hex'][_0x1afc('‮b0','[5t2')](r_ip);continue;case'4':var _0x25f449=CryptoJs[_0x1afc('‫b1','UHje')][_0x1afc('‫b2','LCH[')](_0x51699a,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x1afc('‫b3','pDBs')],'padding':CryptoJs[_0x1afc('‮49','io[t')]['Pkcs7']});continue;}break;}}}else if(!r_mac&&!r_ip){if(_0x350dad[_0x1afc('‮b4','atKl')](_0x350dad[_0x1afc('‮b5','ilq3')],_0x1afc('‮b6','C[!g'))){app_soy_jjy_data=process[_0x1afc('‫6e','M9BP')]['soy_jjy_data'][_0x1afc('‫b7','4[4q')]('\x0a');}else{console['log'](_0x1afc('‮b8','M9BP')+TG_ID+_0x1afc('‮b9','[AZM'));}}else{if(_0x350dad[_0x1afc('‫ba','ypxa')](_0x350dad[_0x1afc('‫bb',']!IJ')],_0x1afc('‮bc','pDBs'))){var _0x9bcfd0=_0x350dad[_0x1afc('‮bd','sbc9')]['split']('|'),_0x3cad57=0x0;while(!![]){switch(_0x9bcfd0[_0x3cad57++]){case'0':var _0x24767d=CryptoJs[_0x1afc('‫9e','zYNK')][_0x1afc('‫a2','6^vl')]['parse'](r_mac);continue;case'1':var _0x51699a=CryptoJs[_0x1afc('‮be','x1dA')]['Base64'][_0x1afc('‫bf','M9BP')](_0x24767d);continue;case'2':reg_mac=_0x25f449[_0x1afc('‮c0','6^vl')](CryptoJs[_0x1afc('‫8d','pBdL')][_0x1afc('‫c1','H]j9')]);continue;case'3':console[_0x1afc('‮c2','21#i')]('注册信息：\x0a---TG_ID：'+TG_ID+_0x1afc('‮c3','ypxa')+reg_mac+_0x1afc('‫c4','Ky14')+reg_ip);continue;case'4':var _0x51699a=CryptoJs[_0x1afc('‮c5','[5t2')]['Base64'][_0x1afc('‮c6','&3^j')](_0x24767d);continue;case'5':var _0x25f449=CryptoJs[_0x1afc('‫c7','5rcd')][_0x1afc('‫c8','ypxa')](_0x51699a,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‮c9','ypxa')][_0x1afc('‫ca','6^vl')],'padding':CryptoJs[_0x1afc('‮cb','ypxa')][_0x1afc('‫cc','5rcd')]});continue;case'6':var _0x24767d=CryptoJs[_0x1afc('‮cd','ixIL')][_0x1afc('‫ce','WnHo')][_0x1afc('‮cf','a@Vd')](r_ip);continue;case'7':reg_ip=_0x25f449[_0x1afc('‮d0','UHje')](CryptoJs['enc']['Utf8']);continue;case'8':var _0x25f449=CryptoJs[_0x1afc('‫d1','58YN')][_0x1afc('‮d2','MT@@')](_0x51699a,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‮d3','UHje')]['CBC'],'padding':CryptoJs['pad']['Pkcs7']});continue;}break;}}else{console[_0x1afc('‮d4','MT@@')]('\x0a['+TG_ID+_0x1afc('‮d5','4[4q')+result['msg']);subTitle+='\x0a['+TG_ID+_0x1afc('‫d6','BVeu')+result[_0x1afc('‮d7','Er$8')];return![];}}user_num=app_soy_jjy_data[_0x1afc('‮d8','eJOu')];console[_0x1afc('‫d9','ypxa')](_0x1afc('‮da','lNDV')+new Date(_0x350dad[_0x1afc('‮db','LCH[')](_0x350dad['tMgHv'](new Date()[_0x1afc('‮dc','b#m2')](),_0x350dad[_0x1afc('‮dd','w@gZ')](_0x350dad['dHqcn'](new Date()[_0x1afc('‮de','[5t2')](),0x3c),0x3e8)),_0x350dad[_0x1afc('‮df','pDBs')](_0x350dad[_0x1afc('‮e0','4[4q')](0x8*0x3c,0x3c),0x3e8)))['toLocaleString']()+_0x1afc('‫e1','ypxa'));await yyz_login();console['log'](_0x1afc('‮e2','4[4q')+user_num+_0x1afc('‮e3','BVeu'));subTitle='';if(yyz_d){if(_0x350dad[_0x1afc('‫e4','AP%@')]===_0x350dad[_0x1afc('‫e5','Ky14')]){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}else{for(i=0x0;i<user_num;i++){if(_0x350dad[_0x1afc('‫e6','[AZM')]!==_0x1afc('‮e7','pDBs')){var _0x524684=_0x350dad[_0x1afc('‫e8','a@Vd')][_0x1afc('‮e9','iQVd')]('|'),_0x5484d5=0x0;while(!![]){switch(_0x524684[_0x5484d5++]){case'0':jjy_cookie=app_soy_jjy_data[i];continue;case'1':console[_0x1afc('‫ea','[AZM')](_0x1afc('‫eb','Ky14')+$[_0x1afc('‫ec','WnHo')]+'\x20个账号任务】');continue;case'2':if(!jjy_UA){jjy_UA=_0x350dad['miyuB'];}continue;case'3':$[_0x1afc('‫ed','58YN')]=_0x350dad['IJyRx'](i,0x1);continue;case'4':await _0x350dad[_0x1afc('‫ee','58YN')](implement);continue;}break;}}else{console[_0x1afc('‫ef','C[!g')](e);}}if(notify){if(subTitle){if('MLmSY'===_0x350dad['yqkYu']){r_ip='';r_mac='';let _0x416e16=CryptoJs[_0x1afc('‮c5','[5t2')]['Utf8'][_0x1afc('‮f0','21#i')](IP_address);let _0xbf3eb=CryptoJs['AES']['encrypt'](_0x416e16,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‮f1','sbc9')]['CBC'],'padding':CryptoJs[_0x1afc('‫f2','s8BU')][_0x1afc('‮f3','a@Vd')]});let _0x106553=_0xbf3eb[_0x1afc('‮f4','x1dA')]['toString']()[_0x1afc('‮f5','[AZM')]();_0x416e16=CryptoJs[_0x1afc('‫3b','MT@@')]['Utf8'][_0x1afc('‫f6','g%)R')](mac);let _0x2c8d33=CryptoJs['AES'][_0x1afc('‫f7','b#m2')](_0x416e16,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‫f8','6^vl')][_0x1afc('‮f9','&3^j')],'padding':CryptoJs['pad'][_0x1afc('‮fa','W7N[')]});let _0x5ad181=_0x2c8d33[_0x1afc('‮fb','oHZN')][_0x1afc('‫fc','oHZN')]()[_0x1afc('‫fd','a@Vd')]();try{_0x2d346b[_0x1afc('‫fe','iQVd')](_0x350dad[_0x1afc('‫36','W7N[')],_0x106553+'&'+_0x5ad181);}catch(_0xc404c){}}else{await notify[_0x1afc('‫ff','WnHo')]($['name'],subTitle);}}}}}}else{console['log'](_0x1afc('‮100','Er$8'));return;}})()['catch'](_0x21ff7b=>$[_0x1afc('‮101','aoSA')](_0x21ff7b))[_0x1afc('‫102','p8ux')](()=>$[_0x1afc('‮103',']!IJ')]());async function implement(){var _0x4ef2ea={'vMMAX':function(_0x365628){return _0x365628();}};await _0x4ef2ea['vMMAX'](sign);await _0x4ef2ea['vMMAX'](adventures);}async function sign(){var _0x5c5249={'gcEuu':function(_0x5493f4,_0x3f6c2d){return _0x5493f4(_0x3f6c2d);},'muBMU':function(_0x57563b,_0x17bb74){return _0x57563b===_0x17bb74;},'wOQHv':'VIUkI','GwRjj':function(_0x3acf2c,_0x2756f3){return _0x3acf2c>_0x2756f3;},'JbtOz':'true','lGvaX':'dnYVv','bpFbI':'http://www.esalewx.com/2018/sign/2927','rnLNr':'www.esalewx.com','JmCuh':_0x1afc('‮104',']!IJ'),'WXwpZ':_0x1afc('‫105','[AZM'),'pWWbt':_0x1afc('‮106','[)Lf'),'TqARw':_0x1afc('‫107','lNDV'),'eykDJ':_0x1afc('‮108','LCH['),'KKPMy':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','XwJke':function(_0x46b6c7,_0x8a68b2){return _0x46b6c7+_0x8a68b2;},'ojnpI':_0x1afc('‫109','MT@@')};await axios({'url':_0x5c5249['bpFbI'],'headers':{'Host':_0x5c5249['rnLNr'],'Connection':_0x5c5249[_0x1afc('‮10a','WnHo')],'Content-Length':0x0,'Accept':_0x5c5249[_0x1afc('‮10b','pBdL')],'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20SKW-A0\x20Build/SKYW2103030CN00MQ5;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/3211\x20MMWEBSDK/20211202\x20Mobile\x20Safari/537.36\x20MMWEBID/7499\x20MicroMessenger/8.0.18.2060(0x28001257)\x20Process/toolsmp\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64','X-Requested-With':_0x5c5249[_0x1afc('‫10c','!%VL')],'Origin':_0x5c5249['TqARw'],'Referer':_0x5c5249['bpFbI'],'Accept-Encoding':_0x5c5249[_0x1afc('‮10d','p8ux')],'Accept-Language':_0x5c5249[_0x1afc('‫10e','ypxa')],'Cookie':_0x5c5249[_0x1afc('‮10f','b4TP')](connect_sid,jjy_cookie)},'method':_0x5c5249[_0x1afc('‫110','8&LS')],'data':''})[_0x1afc('‮111','g%)R')](function(_0x1aa2c9){console[_0x1afc('‫112','zYNK')]('\x0a【'+Tips+_0x1afc('‮5b','s8BU')+$[_0x1afc('‮113','UHje')]+_0x1afc('‫114','Er$8')+_0x1aa2c9);subTitle+='\x0a【'+Tips+_0x1afc('‫115','lNDV')+$['index']+'\x20签到】:\x20返回\x20'+_0x1aa2c9;})['then'](function(_0x2f63d9){if(_0x5c5249[_0x1afc('‮116','lNDV')](_0x5c5249['wOQHv'],_0x1afc('‫117','atKl'))){os=$[_0x1afc('‮118','Er$8')]()?_0x5c5249['gcEuu'](require,'os'):'';}else{if(_0x5c5249[_0x1afc('‫119','ixIL')](_0x2f63d9[_0x1afc('‮11a','R]M9')][_0x1afc('‮c0','6^vl')]()[_0x1afc('‮11b','b#m2')](_0x5c5249[_0x1afc('‮11c','58YN')]),-0x1)){console[_0x1afc('‫11d','g%)R')]('【'+Tips+'提示---账号\x20'+$[_0x1afc('‮5c','8&LS')]+'\x20签到】:\x20成功');subTitle+='\x0a【'+Tips+_0x1afc('‮11e','8&LS')+$[_0x1afc('‫11f','&3^j')]+_0x1afc('‮120','W7N[');}else{if(_0x5c5249[_0x1afc('‫121','58YN')]===_0x5c5249['lGvaX']){console[_0x1afc('‮9c','UHje')]('【'+Tips+'提示---账号\x20'+$[_0x1afc('‫122','b4TP')]+'\x20签到】:\x20失败,可能今日已签到');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x1afc('‫123','sbc9');}else{console[_0x1afc('‮124','atKl')]('\x0a['+TG_ID+_0x1afc('‮125','LCH[')+error);subTitle+='\x0a['+TG_ID+_0x1afc('‮126','&3^j')+error;}}}});}function adventures(){var _0x34c818={'vXYlY':function(_0x3925b7){return _0x3925b7();},'kupiQ':function(_0x1a8b31,_0x5a0194){return _0x1a8b31!==_0x5a0194;},'HxecL':'CSIvj','QaRdz':_0x1afc('‮127','!%VL'),'Mopou':function(_0xc6f686,_0x1961af){return _0xc6f686===_0x1961af;},'GJCVV':_0x1afc('‫128','!%VL'),'eAFLZ':_0x1afc('‫129','C[!g'),'QSqmF':'keep-alive','sLFrC':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','djzFS':_0x1afc('‫12a','LCH['),'IQaWj':_0x1afc('‮12b','iLH9'),'qZIII':'http://www.esalewx.com','qRsto':'http://www.esalewx.com/activity/slyder_adventures/2927','pPqMC':_0x1afc('‮12c','zYNK'),'SBNsc':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','kOupu':function(_0xc64aca,_0x9d75e8){return _0xc64aca+_0x9d75e8;}};let _0x1f62d4={'url':_0x1afc('‮12d','ypxa'),'headers':{'Host':_0x34c818[_0x1afc('‮12e','zYNK')],'Connection':_0x34c818[_0x1afc('‫12f','5rcd')],'Content-Length':0x9,'Accept':_0x34c818[_0x1afc('‫130','&3^j')],'X-Requested-With':_0x34c818['djzFS'],'User-Agent':_0x1afc('‫131','C[!g'),'Content-Type':_0x34c818[_0x1afc('‫132','21#i')],'Origin':_0x34c818[_0x1afc('‫133','&3^j')],'Referer':_0x34c818[_0x1afc('‮134','s8BU')],'Accept-Encoding':_0x34c818[_0x1afc('‫135','aoSA')],'Accept-Language':_0x34c818['SBNsc'],'Cookie':_0x34c818['kOupu'](connect_sid,jjy_cookie)},'body':_0x1afc('‮136','eJOu')};return new Promise((_0x4d1012,_0x450a22)=>{var _0x53453d={'DrQNb':function(_0x199981){return _0x34c818[_0x1afc('‮137','Ky14')](_0x199981);},'vmkrX':function(_0x515219,_0x4ae987){return _0x34c818[_0x1afc('‮138','BVeu')](_0x515219,_0x4ae987);},'WschO':_0x34c818[_0x1afc('‫139','4[4q')],'jTmQn':_0x34c818[_0x1afc('‫13a','s8BU')]};if(_0x34c818[_0x1afc('‮13b','pBdL')]('xCzAx',_0x34c818[_0x1afc('‫13c','zYNK')])){console[_0x1afc('‫112','zYNK')]('\x0a['+TG_ID+_0x1afc('‮13d','H]j9')+error);subTitle+='\x0a['+TG_ID+_0x1afc('‫13e',']LvL')+error;}else{$[_0x1afc('‫13f','8&LS')](_0x1f62d4,async(_0x5049af,_0x50e865,_0x46459c)=>{try{if(_0x5049af){console[_0x1afc('‮140','58YN')]('\x0a【'+Tips+_0x1afc('‫141','C[!g')+$['index']+'\x20抽奖】:\x20返回\x20'+_0x5049af);}else{}}catch(_0x4e36a6){if(_0x53453d[_0x1afc('‫142','oHZN')](_0x53453d[_0x1afc('‫143','BVeu')],_0x53453d[_0x1afc('‮144','aoSA')])){_0x53453d[_0x1afc('‮145','6^vl')](_0x4d1012);}else{console[_0x1afc('‮ae','ilq3')](_0x4e36a6,_0x50e865);}}finally{if('tJGGc'===_0x53453d['jTmQn']){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x1afc('‫146','C[!g')]);subTitle+='\x0a['+TG_ID+_0x1afc('‮147','4[4q')+result['msg'];return![];}else{_0x4d1012();}}});}});}function formatDate(){var _0x384e3c={'bHAlV':function(_0xfb83ca,_0x430986){return _0xfb83ca+_0x430986;},'qMIXZ':function(_0x9b431d,_0x347096){return _0x9b431d+_0x347096;}};let _0x113040=new Date();let _0x46864b=_0x113040[_0x1afc('‫148','!%VL')]();let _0x5d58bc=_0x384e3c['bHAlV'](_0x113040['getMonth'](),0x1);let _0x48d201=_0x113040['getDate']();_0x5d58bc=_0x5d58bc<0xa?_0x384e3c[_0x1afc('‮149',']LvL')]('0',_0x5d58bc):_0x5d58bc;_0x48d201=_0x48d201<0xa?_0x384e3c[_0x1afc('‫14a','eJOu')]('0',_0x48d201):_0x48d201;return _0x46864b+'/'+_0x5d58bc+'/'+_0x48d201;};async function yyz_login(){var _0x3220c1={'gtlPr':_0x1afc('‮14b','ixIL'),'dzKSW':function(_0x7adbf6,_0x571bd6){return _0x7adbf6!==_0x571bd6;},'yFvDs':function(_0x2ed98d,_0x5e9e09){return _0x2ed98d(_0x5e9e09);},'XpbdO':function(_0x3e6d79,_0x3df1c1){return _0x3e6d79==_0x3df1c1;},'FGJfF':_0x1afc('‫14c',']!IJ'),'heToe':_0x1afc('‫14d','a@Vd'),'jfhhk':function(_0x1bfa9e){return _0x1bfa9e();},'UEeXh':function(_0x2c96f5,_0x33c47c){return _0x2c96f5/_0x33c47c;},'qNRnw':function(_0x200660,_0x2a3297){return _0x200660+_0x2a3297;},'tNMjs':function(_0xa11879,_0x263caa){return _0xa11879+_0x263caa;},'GIZYv':_0x1afc('‮14e','Er$8')};var _0x131ff5=Math[_0x1afc('‫14f','sbc9')](_0x3220c1[_0x1afc('‫150','io[t')](Date[_0x1afc('‫151','aoSA')](),0x3e8));var _0x5148c6=CryptoJs['MD5'](''+TG_ID+mac+os[_0x1afc('‫152','H]j9')]()+YZ)[_0x1afc('‫153','zYNK')]();var _0x1bc190=_0x1afc('‫154','8&LS')+TG_ID+_0x1afc('‫155','pDBs')+_0x5148c6+'&t='+_0x131ff5;var _0xf8eae7=CryptoJs['MD5'](_0x3220c1['qNRnw'](_0x3220c1[_0x1afc('‮156','pBdL')](_0x1bc190,'&'),appid))['toString']();_0x1bc190=_0x3220c1[_0x1afc('‮157','zYNK')](_0x1bc190,_0x3220c1[_0x1afc('‫158','M9BP')])+_0xf8eae7;let _0x3a22ed={'url':serverUrl+_0x1afc('‫159','LCH['),'headers':{'user-agent':_0x1afc('‮15a','b4TP')},'body':_0x1bc190};return new Promise((_0x5a84ec,_0x2a12b9)=>{$[_0x1afc('‫15b','a@Vd')](_0x3a22ed,async(_0x194596,_0x506d4b,_0x4ab00e)=>{var _0x2c140d={'vioOG':_0x3220c1[_0x1afc('‫15c','p8ux')]};if(_0x3220c1['dzKSW'](_0x1afc('‮15d','21#i'),_0x1afc('‫15e','M9BP'))){try{if(_0x194596){console[_0x1afc('‫15f','iQVd')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x194596);subTitle+='\x0a['+TG_ID+_0x1afc('‫160','p8ux')+_0x194596;}else{let _0xc7a0f6=JSON[_0x1afc('‮161','b#m2')](_0x4ab00e);if(_0xc7a0f6[_0x1afc('‫162','6^vl')]==0xc8){let _0x4fa38d=_0x3220c1[_0x1afc('‫163','Ky14')](Format_time,_0xc7a0f6['msg'][_0x1afc('‫164','Er$8')][_0x1afc('‮165','s8BU')]);console[_0x1afc('‮9c','UHje')]('\x0a['+TG_ID+_0x1afc('‫166','p8ux')+_0x4fa38d);await _0x3220c1[_0x1afc('‫167','p8ux')](get_vip,_0xc7a0f6[_0x1afc('‮168','zYNK')][_0x1afc('‫169','b4TP')]);}else if(_0x3220c1[_0x1afc('‮16a','UHje')](_0xc7a0f6[_0x1afc('‫16b','&3^j')],0x71)){if(_0x3220c1[_0x1afc('‫16c','aoSA')]===_0x3220c1[_0x1afc('‫16d','58YN')]){console[_0x1afc('‮57','b4TP')]('\x0a['+TG_ID+_0x1afc('‫16e','AP%@')+_0xc7a0f6[_0x1afc('‮16f','a@Vd')]);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0xc7a0f6[_0x1afc('‮d7','Er$8')];return![];}else{await _0x3220c1['jfhhk'](yyz_user_reg);}}else{console[_0x1afc('‫170','Ky14')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0xc7a0f6[_0x1afc('‫171','8&LS')]);subTitle+='\x0a['+TG_ID+_0x1afc('‮172','Er$8')+_0xc7a0f6[_0x1afc('‫173','M9BP')];return![];}}}catch(_0xcec83c){console[_0x1afc('‮124','atKl')](_0xcec83c);}finally{_0x3220c1['jfhhk'](_0x5a84ec);}}else{axios=$['isNode']()?require(_0x2c140d[_0x1afc('‫174','7QDL')]):'';}});});}async function get_vip(_0x586a04){var _0x138d89={'CVzoT':function(_0x44cbb9,_0x21f81e){return _0x44cbb9(_0x21f81e);},'GtNJd':function(_0x37d4f1,_0x415f56){return _0x37d4f1!==_0x415f56;},'SgiAH':'vQauc','YMKtJ':_0x1afc('‮175','H]j9'),'zatYt':function(_0xc864be){return _0xc864be();},'hNNkl':'smPxe','SAzGy':function(_0x32e29d,_0x1dcb0b){return _0x32e29d/_0x1dcb0b;},'QMDTi':function(_0x1e8ae4,_0x40997a){return _0x1e8ae4+_0x40997a;},'VjBXY':function(_0x229785,_0x443097){return _0x229785+_0x443097;},'lakBL':_0x1afc('‫176','[AZM')};var _0x59f35b=Math['floor'](_0x138d89[_0x1afc('‫177','sbc9')](Date[_0x1afc('‫178','MT@@')](),0x3e8));var _0xa9ae5='script=jjy&num='+user_num+_0x1afc('‫179','W7N[')+_0x586a04+_0x1afc('‮17a','MT@@')+_0x59f35b;var _0x2b1f23=CryptoJs['MD5'](_0xa9ae5+'&'+appid)['toString']();_0xa9ae5=_0x138d89[_0x1afc('‮17b','4[4q')](_0x138d89[_0x1afc('‫17c','ypxa')](_0xa9ae5,_0x1afc('‮17d','!%VL')),_0x2b1f23);let _0x401695={'url':serverUrl+'get_vip','headers':{'user-agent':_0x138d89['lakBL']},'body':_0xa9ae5};return new Promise((_0x1dc8b4,_0x478efe)=>{var _0x4d604f={'ZmkjG':function(_0x2d465f,_0x398f4c){return _0x138d89[_0x1afc('‮17e','lNDV')](_0x2d465f,_0x398f4c);},'gjorH':function(_0xacde21,_0x441d80){return _0x138d89['GtNJd'](_0xacde21,_0x441d80);},'wuqnn':_0x138d89['SgiAH'],'nVuQj':_0x138d89[_0x1afc('‫17f','a@Vd')],'tLEbx':function(_0x2fd72b,_0x5e2885){return _0x2fd72b==_0x5e2885;},'NacGx':function(_0x149a1c,_0x223ca1){return _0x138d89['CVzoT'](_0x149a1c,_0x223ca1);},'ysyHe':function(_0x343ab0,_0x2c6464){return _0x343ab0===_0x2c6464;},'KlZxi':_0x1afc('‮180','oHZN'),'LVRmH':_0x1afc('‮181','x1dA'),'lUTPe':function(_0x30e01b){return _0x138d89['zatYt'](_0x30e01b);}};if(_0x138d89[_0x1afc('‮182','b#m2')]===_0x1afc('‮183','oHZN')){if(error){console[_0x1afc('‮184','eJOu')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x1afc('‮185','ypxa')]+_0x1afc('‫186','b4TP')+error);}else{}}else{$[_0x1afc('‮187','Er$8')](_0x401695,async(_0x324891,_0x478e94,_0xd4590c)=>{var _0x1b7275={'UaHWB':function(_0x32c9f3,_0x1f8be1){return _0x4d604f['ZmkjG'](_0x32c9f3,_0x1f8be1);}};try{if(_0x4d604f[_0x1afc('‮188','ilq3')](_0x4d604f[_0x1afc('‮189','io[t')],_0x4d604f[_0x1afc('‫18a','6^vl')])){if(_0x324891){console[_0x1afc('‫d9','ypxa')]('\x0a['+TG_ID+_0x1afc('‫18b','C[!g')+_0x324891);subTitle+='\x0a['+TG_ID+_0x1afc('‫18c',']LvL')+_0x324891;}else{let _0x14717f=JSON[_0x1afc('‫18d','ypxa')](_0xd4590c);if(_0x4d604f[_0x1afc('‮18e','io[t')](_0x14717f[_0x1afc('‮18f','iQVd')],0xc8)){connect_sid=_0x14717f[_0x1afc('‮190','aoSA')];yyz_d=!![];}else if(_0x4d604f[_0x1afc('‫191','iLH9')](_0x14717f[_0x1afc('‮192','Er$8')],0xca)){console['log']('\x0a['+TG_ID+_0x1afc('‫193','UHje')+_0x14717f[_0x1afc('‫194','!%VL')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x14717f['msg'];}else if(_0x14717f[_0x1afc('‮195','ypxa')]==0xcd){console['log']('\x0a['+TG_ID+_0x1afc('‫196','ypxa')+_0x14717f[_0x1afc('‫197','iLH9')]);subTitle+='\x0a['+TG_ID+_0x1afc('‫198','[)Lf')+_0x14717f[_0x1afc('‫199','g%)R')];}else{if(!yyz_Kami){console[_0x1afc('‫19a','lNDV')]('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';return![];}else{await _0x4d604f[_0x1afc('‮19b','w@gZ')](card,_0x586a04);}}}}else{CryptoJs=$[_0x1afc('‫19c','x1dA')]()?_0x1b7275[_0x1afc('‫19d','W7N[')](require,_0x1afc('‮19e','UHje')):'';}}catch(_0x44aa20){if(_0x4d604f['ysyHe'](_0x4d604f[_0x1afc('‫19f','H]j9')],_0x1afc('‫1a0','atKl'))){console[_0x1afc('‫1a1','pDBs')](_0x44aa20);}else{console[_0x1afc('‫ea','[AZM')](_0x1afc('‮1a2','pDBs'));return;}}finally{if(_0x1afc('‫1a3','MT@@')!==_0x4d604f[_0x1afc('‫1a4','b#m2')]){_0x4d604f[_0x1afc('‮1a5','g%)R')](_0x1dc8b4);}else{console[_0x1afc('‫1a6','AP%@')]('\x0a['+TG_ID+_0x1afc('‮1a7','io[t')+result['msg']);subTitle+='\x0a['+TG_ID+_0x1afc('‫1a8','4[4q')+result[_0x1afc('‮1a9','MT@@')];}}});}});}async function yyz_user_reg(){var _0x4f1d0a={'gazOi':function(_0x4f24b6,_0x322faf){return _0x4f24b6===_0x322faf;},'FCZLU':'ulphp','cjnqe':function(_0x5e0cd4,_0x12a932){return _0x5e0cd4===_0x12a932;},'UaKQb':_0x1afc('‫1aa','a@Vd'),'NFQwC':function(_0x5225a5,_0x4b3b45){return _0x5225a5==_0x4b3b45;},'ssSEF':function(_0xfb0327,_0x18f005){return _0xfb0327!==_0x18f005;},'FdDtj':_0x1afc('‮1ab','[)Lf'),'cEZvM':_0x1afc('‫1ac','eJOu'),'lNNnm':function(_0x201b76){return _0x201b76();},'SZyBE':function(_0xdb39f2,_0x34f5ce){return _0xdb39f2===_0x34f5ce;},'UIXQs':_0x1afc('‮1ad','a@Vd'),'cSPci':function(_0x3c4dfd,_0x1900d3){return _0x3c4dfd&&_0x1900d3;},'qDyqx':function(_0x572312){return _0x572312();},'jUArE':function(_0xce902b,_0x33f276){return _0xce902b+_0x33f276;},'jXDOf':function(_0x79f5a2,_0x12fe35){return _0x79f5a2+_0x12fe35;},'yieuh':function(_0x10155b,_0x33fcd3){return _0x10155b+_0x33fcd3;},'MPkOv':'&sign=','WvCvA':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(_0x4f1d0a[_0x1afc('‫1ae','58YN')](!Tips,!YZ)){console[_0x1afc('‮ae','ilq3')](_0x1afc('‫1af','WnHo'));return![];}await _0x4f1d0a[_0x1afc('‮1b0','58YN')](yyz_getip);var _0x4ce881=Math[_0x1afc('‮1b1','atKl')](Date[_0x1afc('‮1b2','g%)R')]()/0x3e8);var _0x530493=CryptoJs[_0x1afc('‮1b3','sbc9')](''+TG_ID+mac+os[_0x1afc('‫1b4','AP%@')]()+YZ)[_0x1afc('‮1b5','pBdL')]();var _0xbe071e=_0x1afc('‮1b6','p8ux')+TG_ID+'&password=123456&inv=soyyun&markcode='+_0x530493+'&t='+_0x4ce881;var _0x3e9713=CryptoJs['MD5'](_0x4f1d0a['jUArE'](_0x4f1d0a['jXDOf'](_0xbe071e,'&'),appid))[_0x1afc('‫1b7','w@gZ')]();_0xbe071e=_0x4f1d0a[_0x1afc('‮1b8','[5t2')](_0x4f1d0a[_0x1afc('‮1b9','LCH[')](_0xbe071e,_0x4f1d0a['MPkOv']),_0x3e9713);let _0x49215d={'url':serverUrl+_0x1afc('‮1ba','R]M9'),'headers':{'user-agent':_0x4f1d0a[_0x1afc('‫1bb','&3^j')]},'body':_0xbe071e};return new Promise((_0x2c5a5e,_0x3ed858)=>{var _0x8255ed={'uFGcJ':function(_0xc02c56){return _0xc02c56();},'Jrxex':function(_0x5aff6e,_0x568281){return _0x4f1d0a[_0x1afc('‫1bc','ixIL')](_0x5aff6e,_0x568281);},'FYBwm':_0x4f1d0a[_0x1afc('‫1bd','x1dA')],'gYhWi':function(_0x2fd67b,_0x1e2239){return _0x4f1d0a[_0x1afc('‫1be','iLH9')](_0x2fd67b,_0x1e2239);},'IbCMc':_0x4f1d0a['UaKQb'],'aWxGE':function(_0x2205c8,_0x221432){return _0x4f1d0a['NFQwC'](_0x2205c8,_0x221432);},'MBMmU':function(_0x57ae0f,_0x5ac480){return _0x4f1d0a[_0x1afc('‫1bf','21#i')](_0x57ae0f,_0x5ac480);},'iphPy':_0x4f1d0a[_0x1afc('‮1c0','W7N[')],'QoMCU':_0x1afc('‫1c1','[)Lf'),'MIOZB':_0x4f1d0a['cEZvM'],'rEWaI':function(_0x584a74){return _0x4f1d0a[_0x1afc('‫1c2','iLH9')](_0x584a74);},'dMnxv':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};if(_0x4f1d0a['SZyBE'](_0x4f1d0a[_0x1afc('‮1c3','io[t')],_0x1afc('‮1c4','LCH['))){$[_0x1afc('‫1c5','lNDV')](_0x49215d,async(_0x3922bb,_0x3289bc,_0x2f9963)=>{var _0xc2c303={'ACFOq':'./mac'};if(_0x8255ed['Jrxex'](_0x8255ed['FYBwm'],_0x8255ed[_0x1afc('‮1c6','H]j9')])){try{if(_0x8255ed[_0x1afc('‮1c7','ixIL')](_0x8255ed[_0x1afc('‮1c8','g%)R')],_0x8255ed[_0x1afc('‫1c9','atKl')])){if(_0x3922bb){console[_0x1afc('‫8a','io[t')]('\x0a['+TG_ID+_0x1afc('‫1ca',']!IJ')+_0x3922bb);subTitle+='\x0a['+TG_ID+_0x1afc('‫1cb','zYNK')+_0x3922bb;}else{let _0x12466b=JSON[_0x1afc('‫1cc','sbc9')](_0x2f9963);if(_0x8255ed[_0x1afc('‫1cd','pBdL')](_0x12466b['code'],0xc8)){let _0x52ed55=CryptoJs[_0x1afc('‫1ce','b4TP')][_0x1afc('‮1cf','Er$8')][_0x1afc('‮1d0',']LvL')](IP_address);let _0x5cf330=CryptoJs['AES']['encrypt'](_0x52ed55,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‮1d1','5rcd')]['CBC'],'padding':CryptoJs[_0x1afc('‮1d2','[5t2')][_0x1afc('‫1d3','x1dA')]});let _0x106433=_0x5cf330[_0x1afc('‮1d4','s8BU')][_0x1afc('‫1d5','21#i')]()[_0x1afc('‮1d6','21#i')]();_0x52ed55=CryptoJs[_0x1afc('‫1d7','LCH[')][_0x1afc('‫1d8','[5t2')][_0x1afc('‫1d9','[AZM')](mac);let _0x33e943=CryptoJs[_0x1afc('‫8f','iQVd')][_0x1afc('‮1da','lNDV')](_0x52ed55,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x1afc('‫a6','Ky14')],'padding':CryptoJs['pad'][_0x1afc('‮a7',']!IJ')]});let _0x32affe=_0x33e943['ciphertext'][_0x1afc('‫1db','p8ux')]()['toUpperCase']();try{if(_0x8255ed[_0x1afc('‮1dc','5rcd')](_0x1afc('‮1dd','Ky14'),_0x8255ed[_0x1afc('‮1de','5rcd')])){fs['writeFileSync'](_0x1afc('‫1df','58YN'),_0x106433+'&'+_0x32affe);}else{console[_0x1afc('‫1e0','a@Vd')]('\x0a['+TG_ID+_0x1afc('‮1e1','BVeu')+_0x12466b[_0x1afc('‫1e2',']LvL')]+_0x1afc('‫1e3','Er$8'));return![];}}catch(_0x1bdd23){}console[_0x1afc('‫1e4','aoSA')]('\x0a['+TG_ID+']:\x20注册成功:\x20IP=>'+IP_address+_0x1afc('‫1e5','R]M9')+mac);await _0x8255ed[_0x1afc('‫1e6','BVeu')](yyz_login);}else if(_0x8255ed['aWxGE'](_0x12466b[_0x1afc('‫1e7','4[4q')],0x75)){if(_0x8255ed[_0x1afc('‮1e8','b4TP')]('Jvbyl',_0x1afc('‮1e9','W7N['))){fs[_0x1afc('‫1ea','R]M9')](_0xc2c303['ACFOq'],Now_ip+'&'+Now_mac);}else{console[_0x1afc('‮1eb','6^vl')]('\x0a['+TG_ID+_0x1afc('‮1ec','WnHo')+_0x12466b[_0x1afc('‫173','M9BP')]+_0x1afc('‮1ed','io[t'));return![];}}else{if(_0x8255ed['MBMmU'](_0x8255ed['QoMCU'],_0x1afc('‫1ee','atKl'))){_0x8255ed[_0x1afc('‮1ef','iLH9')](_0x2c5a5e);}else{console[_0x1afc('‮1f0','M9BP')]('\x0a['+TG_ID+_0x1afc('‮147','4[4q')+_0x12466b[_0x1afc('‮1f1','eJOu')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x12466b[_0x1afc('‮1f2','ilq3')];return![];}}}}else{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}}catch(_0x136d2f){console['log'](_0x136d2f);}finally{if(_0x8255ed['MBMmU'](_0x8255ed[_0x1afc('‮1f3',']!IJ')],'bIBGT')){console[_0x1afc('‫1f4','LCH[')](_0x1afc('‮1f5','aoSA'));return![];}else{_0x8255ed[_0x1afc('‮1f6','oHZN')](_0x2c5a5e);}}}else{console['log']('\x0a【'+Tips+_0x1afc('‫1f7','p8ux')+$['index']+_0x1afc('‫1f8','5rcd')+_0x3922bb);}});}else{jjy_UA=_0x8255ed[_0x1afc('‮1f9','a@Vd')];}});}async function card(_0x5518dd){var _0x475b49={'KEOqG':function(_0x2de377,_0x169417){return _0x2de377===_0x169417;},'MZtTJ':_0x1afc('‫1fa','[5t2'),'LjcAh':function(_0x1f8bb5){return _0x1f8bb5();},'ELFKS':function(_0x456a41,_0x2f3c84){return _0x456a41/_0x2f3c84;},'Cvmhd':function(_0xf68170,_0xe8570a){return _0xf68170+_0xe8570a;},'ypLbC':_0x1afc('‮1fb','UHje'),'OdPYC':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x42ca9f=Math[_0x1afc('‫1fc','WnHo')](_0x475b49[_0x1afc('‮1fd','58YN')](Date[_0x1afc('‫1fe','w@gZ')](),0x3e8));var _0x18be14=_0x1afc('‫1ff','M9BP')+_0x5518dd+_0x1afc('‮200','s8BU')+yyz_Kami+_0x1afc('‫201','4[4q')+_0x42ca9f;var _0x4660a4=CryptoJs[_0x1afc('‫202','ilq3')](_0x475b49[_0x1afc('‫203','AP%@')](_0x475b49[_0x1afc('‮204',']LvL')](_0x18be14,'&'),appid))[_0x1afc('‫205','M9BP')]();_0x18be14=_0x475b49[_0x1afc('‮206','iQVd')](_0x475b49['Cvmhd'](_0x18be14,_0x475b49[_0x1afc('‮207',']LvL')]),_0x4660a4);let _0x445499={'url':serverUrl+_0x1afc('‫208','io[t'),'headers':{'user-agent':_0x475b49[_0x1afc('‫209','b4TP')]},'body':_0x18be14};return new Promise((_0x55ec0a,_0x4526fa)=>{$[_0x1afc('‫20a','Ky14')](_0x445499,async(_0x2441d1,_0x5995a4,_0x5c2891)=>{try{if(_0x2441d1){console['log']('\x0a['+TG_ID+_0x1afc('‫20b','oHZN')+_0x2441d1);subTitle+='\x0a['+TG_ID+_0x1afc('‫20c','&3^j')+_0x2441d1;}else{let _0x255641=JSON[_0x1afc('‮20d','Er$8')](_0x5c2891);if(_0x255641[_0x1afc('‫20e','zYNK')]==0xc8){console[_0x1afc('‮31','ixIL')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x255641[_0x1afc('‫20f','UHje')]+'，重新跑一次脚本方可正常使用');return![];}else{console[_0x1afc('‫112','zYNK')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x255641[_0x1afc('‫210','pBdL')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x255641[_0x1afc('‫194','!%VL')];return![];}}}catch(_0x230ec1){if(_0x475b49[_0x1afc('‮211','[AZM')](_0x475b49[_0x1afc('‮212','WnHo')],_0x1afc('‮213','b4TP'))){console[_0x1afc('‮214','oHZN')]('\x0a['+TG_ID+_0x1afc('‫215','aoSA')+result['msg']);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+result[_0x1afc('‫216','LCH[')];}else{console['log'](_0x230ec1);}}finally{_0x475b49[_0x1afc('‮217','s8BU')](_0x55ec0a);}});});}function yyz_getip(){var _0x2831b0={'EZmBw':_0x1afc('‮218','p8ux'),'uueYp':'address','vYTyW':function(_0x38d96c,_0x4c9a56){return _0x38d96c==_0x4c9a56;},'OVMag':_0x1afc('‮219','iQVd'),'dAnlg':_0x1afc('‫21a','s8BU'),'UgFhL':function(_0x2989f6){return _0x2989f6();},'yqhCU':function(_0x520fa7,_0x57d06d){return _0x520fa7!==_0x57d06d;},'KJjDi':_0x1afc('‫21b','p8ux'),'CTqGj':_0x1afc('‫21c','R]M9'),'HjywC':_0x1afc('‫21d','R]M9')};let _0x5f6831={'url':_0x2831b0[_0x1afc('‮21e','BVeu')]};return new Promise((_0x2403be,_0x10e7ef)=>{var _0x501bb1={'cWucz':_0x2831b0[_0x1afc('‮21f','g%)R')],'JfgYm':_0x2831b0[_0x1afc('‫220','5rcd')],'rWllh':function(_0x41208b,_0x493424){return _0x2831b0[_0x1afc('‫221','g%)R')](_0x41208b,_0x493424);},'Fgikl':function(_0x184886,_0x20f585){return _0x184886!==_0x20f585;},'ucgKk':_0x2831b0[_0x1afc('‫222','BVeu')],'lwzKV':_0x2831b0[_0x1afc('‫223','b4TP')],'VTuyv':function(_0x1c7c67){return _0x2831b0[_0x1afc('‫224','s8BU')](_0x1c7c67);},'cWcBi':_0x1afc('‮225','s8BU')};if(_0x2831b0[_0x1afc('‫226','iLH9')](_0x2831b0[_0x1afc('‮227','io[t')],_0x2831b0[_0x1afc('‫228','iLH9')])){$[_0x1afc('‫229','b#m2')](_0x5f6831,async(_0x29e404,_0x3b2438,_0x1f58ac)=>{var _0x37c8ac={'BeeeN':_0x501bb1[_0x1afc('‫22a','WnHo')],'HfNSV':_0x501bb1[_0x1afc('‫22b','WnHo')],'VKZeh':function(_0x4371b9,_0x3e2488){return _0x501bb1[_0x1afc('‮22c','[)Lf')](_0x4371b9,_0x3e2488);},'UiCZn':_0x1afc('‫22d','io[t'),'fwRiG':'/sys/class/net/'};try{if(_0x29e404){IP_address='127.0.0.1';}else{IP_address=_0x1f58ac;}}catch(_0x44b5a0){if(_0x501bb1[_0x1afc('‮22e','ixIL')](_0x501bb1[_0x1afc('‮22f','UHje')],_0x501bb1[_0x1afc('‮230','pDBs')])){IP_address=_0x1afc('‫231','ixIL');console[_0x1afc('‫8a','io[t')](_0x44b5a0,_0x3b2438);}else{var _0x52e29f='';var _0x379659=fs[_0x1afc('‫232','s8BU')](_0x37c8ac[_0x1afc('‫233','ilq3')]);_0x379659[_0x1afc('‮234','8&LS')](function(_0x36247c){var _0x5ea845=path['join'](_0x37c8ac[_0x1afc('‮235','pBdL')],_0x36247c,_0x37c8ac[_0x1afc('‫236','C[!g')]);if(_0x37c8ac['VKZeh'](_0x36247c[_0x1afc('‫237','WnHo')](0x0,0x3),_0x37c8ac['UiCZn'])&&fs[_0x1afc('‮238','C[!g')](_0x5ea845)){_0x52e29f=fs[_0x1afc('‫239','zYNK')](_0x5ea845)['toString']()['trim']();};});return _0x52e29f;}}finally{_0x501bb1['VTuyv'](_0x2403be);}});}else{var _0x4b4d8a=_0x501bb1[_0x1afc('‫23a','w@gZ')][_0x1afc('‫23b','eJOu')]('|'),_0x3262b3=0x0;while(!![]){switch(_0x4b4d8a[_0x3262b3++]){case'0':var _0x1dec08=CryptoJs[_0x1afc('‫23c',']!IJ')][_0x1afc('‫23d','pDBs')](_0x21d22a,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x1afc('‫91','Ky14')]['CBC'],'padding':CryptoJs[_0x1afc('‫23e','ixIL')][_0x1afc('‫23f','!%VL')]});continue;case'1':reg_mac=_0x1dec08[_0x1afc('‮240','s8BU')](CryptoJs[_0x1afc('‮241','a@Vd')]['Utf8']);continue;case'2':var _0x10f4ef=CryptoJs[_0x1afc('‮242','AP%@')][_0x1afc('‮243','oHZN')][_0x1afc('‫244','x1dA')](r_mac);continue;case'3':console['log']('注册信息：\x0a---TG_ID：'+TG_ID+_0x1afc('‫245','&3^j')+reg_mac+_0x1afc('‫246','ilq3'));continue;case'4':var _0x21d22a=CryptoJs[_0x1afc('‮247','lNDV')][_0x1afc('‮248','s8BU')][_0x1afc('‫249','pBdL')](_0x10f4ef);continue;}break;}}});}function Format_time(_0x1532eb){var _0x3e7dfb={'COxbF':function(_0x18ea58,_0x274e58){return _0x18ea58+_0x274e58;},'LkJNP':function(_0x42fce3,_0x518cfb){return _0x42fce3<_0x518cfb;},'Itqrx':function(_0x593899,_0x34f3c7){return _0x593899+_0x34f3c7;},'ZMaTz':function(_0x5ca99b,_0x5226db){return _0x5ca99b+_0x5226db;},'TmaBy':function(_0x59df78,_0x451f1e){return _0x59df78+_0x451f1e;},'yIroR':function(_0x4a066d,_0xb1617f){return _0x4a066d+_0xb1617f;},'sLJeO':function(_0x1303a7,_0x2182fa){return _0x1303a7+_0x2182fa;},'HKfRr':function(_0x596e59,_0x15437a){return _0x596e59+_0x15437a;},'nxMAy':function(_0x4eb7f0,_0x404612){return _0x4eb7f0+_0x404612;},'tjGHZ':function(_0x5de169,_0x158478){return _0x5de169+_0x158478;},'LCiNB':function(_0x3d8094,_0x30f511){return _0x3d8094+_0x30f511;}};var _0x550437=new Date(_0x1532eb*0x3e8);var _0x56d931=_0x3e7dfb['COxbF'](_0x550437[_0x1afc('‫24a',']LvL')](),'-');var _0x231bea=_0x3e7dfb[_0x1afc('‫24b','b4TP')](_0x3e7dfb[_0x1afc('‮24c','&3^j')](_0x550437[_0x1afc('‫24d','&3^j')]()+0x1,0xa)?_0x3e7dfb['COxbF']('0',_0x3e7dfb['Itqrx'](_0x550437[_0x1afc('‫24e',']LvL')](),0x1)):_0x550437['getMonth']()+0x1,'-');var _0x4bcdf0=_0x550437[_0x1afc('‫24f','iQVd')]()+'\x20';var _0x1a4fb9=_0x3e7dfb[_0x1afc('‮250','a@Vd')](_0x550437['getHours'](),':');var _0x34f2ed=_0x3e7dfb[_0x1afc('‮251','atKl')](_0x3e7dfb['LkJNP'](_0x550437[_0x1afc('‫252','io[t')](),0xa)?_0x3e7dfb[_0x1afc('‫253','eJOu')]('0',_0x550437[_0x1afc('‫254','atKl')]()):_0x550437[_0x1afc('‫255','4[4q')](),':');var _0x2c16d2=_0x550437[_0x1afc('‮256','7QDL')]();let _0x4d8c42=_0x3e7dfb[_0x1afc('‮257','a@Vd')](_0x3e7dfb[_0x1afc('‮258','ypxa')](_0x3e7dfb[_0x1afc('‮259','b#m2')](_0x3e7dfb[_0x1afc('‮25a','zYNK')](_0x56d931,_0x231bea),_0x4bcdf0),_0x1a4fb9),_0x34f2ed)+_0x2c16d2;return _0x3e7dfb[_0x1afc('‮25b','p8ux')](_0x3e7dfb['tjGHZ'](_0x3e7dfb[_0x1afc('‮25c','21#i')](_0x3e7dfb[_0x1afc('‫25d','7QDL')](_0x56d931,_0x231bea),_0x4bcdf0)+_0x1a4fb9,_0x34f2ed),_0x2c16d2);};_0xodE='jsjiami.com.v6';


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