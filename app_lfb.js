/*

软件名称:利分宝

项目注册地址:http://frb.quancankeji.com/?tgsbma=TGM-16477181944254496432

注册id：WD2RDWQG

需要实名认证，而且人脸

自行进行交易，收益不祥，可以叫大佬些注册机玩玩

必要变量:

变量名 soy_lfb_data
变量值 TG_ID&卡密&支付方式(1微信,2支付宝)&token
token自行抓包 http://frb.quancankeji.com 的链接请求头上的autoken


多个号用 # 或 @ 或 换行 隔开

cron 0-59/20 10,13,30 * * * app_lfb.js

*/


const $ = new Env('利分宝');
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xodg='jsjiami.com.v6',_0xodg_=['‮_0xodg'],_0x4f82=[_0xodg,'GWExwovDlQ==','w65twr80wpQ=','w5lLwo8awrtewqk=','B8OSM8KKwoU=','wrTCmWrDmsOO','w4nDn3jDjVhn','a8Olw7XDlw==','CWsawqU=','wogfw6wKwq8=','w7Viw606','LyxTRyQ=','wo4nw4k0wro=','Q2/CjS5a','E8KCCMKfw7A=','w63DrcO/wrZPw4E=','EeaJj+S5pOWKhOS+r+i1pUQGXcOtw67Chn/DocOCwpkpX+itneiGlOiigeWuoOignMK3','w67DtsOtwrY=','w7pSLQjCrw==','CmI6wrbDkg==','woXCscKfw75Z','wpLDjcKmOMKX','w4xnwq4LwoI=','wpYRw7k=','QMOawpPCqCrCnQ==','bcK6w6I=','XnvCuDhD','XHZtBA9jwrcl','akAlw7VU','w6fDjMOEwqVC','eFAbw5A=','wrTDqcOPw6DChA==','M8KxwoMDw6Ew','bUHCjjE=','LsKywo3CtA==','woVHw619wrE=','cnJc','w4PCo8K+5L6955SS5Y+T5ay4cUPov67lm6c=','wrnCgcK+MsKBTw==','V0M05L6T55a85Y2G5ayYLmo=','L37Dqw==','wpkhccOyPQ==','w49cMgDCig==','KsO7ZHQd','wpjDjsKu','dOOAmgDCvsOK6Ie65p+p5o6y56WLw6TDpFvot4fljKvDhA==','XuiniOeduOW6ruWTueODscO/Qg==','wrXDr8OB','wrTDucO45L+G55Se5Y2T5a+8wqo26L+m5Zmh','FV4cwrXDoA==','wqYMEC9s','YUHCnQ==','w64kwpvDpXYi','PUVU','a8KJJFrCkg==','w5/DnsO1wo98','OlJaOxM=','XWZYETvCjQ==','w7PDtsOqwqtVw5w=','HMOWfXoO','wqBuw5p7','wrDCm37DocOJ','QjBlwqkW','FsK0F8Kgw7g=','fcOUw6d+','bwN5wr/Dhg==','w51Bwp8g','XcK0MmvCrQ==','QhtSwq7DnQ==','MAHCgcKfeQ==','EcK0DMKn','wpbDssOew7/Csw==','woDDr8KlDsKU','wro2UcOjLQ==','G8Ocwo4zw7w=','IcKywo4=','wpLDt3Tnm4jlva3niJ3mgI8qwpXovarlmoI=','QcKdwpTCu8Oy','wojCoMKbw41A','wozCgXjDlcOy','wpvCpsK5w51wW1bDtUVLw5HDvA==','w7FYw50GVQ==','THBIQHs=','w6tYEiHCnQ==','L8O3aHkh','T8KYEUbCqg==','w4nDm3XDkFk=','DMKwwrzCnMO4','w5Qaw4I=','w4Xjg50nw5xB6Iax5pyi5o+A56aPwpNxw77ljpfph5zmoI7mt6XjgIrCoMOq5p+c5o2Z5Li2w5lfQsKWDw==','wq3CkMKr','wprCp8Krw5M=','al4Fw5xi','w5Emw6jChsOf','w5UOBcKwLA==','a8KXwp/CrMOp','DX4SwqXDhsKT','wrLCoMKIN8K4','w5jDhH3DgA==','XcKVDUbCrjoxRw==','cnXCtsKyw64=','w6hHKhrCqg==','Ml4+wr/DtA==','ex1AwrnDvQ==','EsO1woA=','SWMlw6JMw7HDi8KDDcOnfWA=','wroeTg==','wqnCm8Op5b2X5aSu5oyY5p2fesKq6K+m5rGgw7J6wrrlp6/ot6k=','ZMOkwpXCoBU=','XMKSCFvCtg==','wr3DssOQ','SXwww5RU','A1oR5byB5aa55o2A5p2ODsKA6L2d5ZqR','PcOxNsKGwroF','wqPDnsK3e8KJ','w49gBRLCoA==','w5l6w7A8TQ==','ecOxw40=','TiRCw6XDkcKEw7QEEMOww7tCwoXDrsOSUTjDrMOkFjXCh8KCCcKQf8Kiw7J1CHEtwooIEg==','wqBgw5BGwpEO','ZHnDtWTDhsOT','w6nCvSbDmlvDjjMgwpvCj3rCoCZ0wqDCkw==','w6zChcK+NMKVUcKc','PVgaw7xGXghYHw==','RMOUworCviE=','wrp6ZS0=','w7hXwrcQwro=','PQ9VZA==','L8KWwqM0w5g=','wp4ewrHCtcO+','wqwPGA==','wrTDucO455uC5b2j5aSD6LSfwqo2','c25c','w4PCo8K+6I215b6t5pad5Lim6ZK15o+GEuWktOacq+a3keiktOWbiuaKm+W/ksKnw6UpwqAlY2rDgcKow5bCncOfcsKmw7bDpXtqccKWwpRpwp3DqFRieQA+PMKeNwRpw7XDncK3wozCtUVHViBQe1DDrcOmC24=','YFzCji1Ew77CuQ==','w4nDgUnDiWM=','w6vDo13DrEA=','LMKqwoU=','w4Djg6XCrCnCjeiEpuaejeaNouelnzPDhgHkup/mjazmja3npbXjgZlwX+isnuWIjOi9meigr+S7s+aMhOaTkeS/og==','V387','ZzZ86IyK5b635pa45Lmx6ZCi5o+Mwrwp6L+V5Zic','w7jCscO7w7TCu8KIw5bCrxM=','wr4OwprCvcOMKQ==','FeaLheS6juWIt+S/tei1ksK2wp7DrMOWF+itnOiEnuihieWstOijjsKF','w53jga3Cp8K9w5HohZbmnrXmlIHkurvlhKvot4DlobjmmKPjganvv77DhG5yVOaciOS5veW4heWNteW6q+ebk+iGlOaer+aVluS4peWNouWEuuS6mua2ruWMoOeZueS5veS9uuilkemWseWRpOiltuWvpOWLieacl+iFkeadjO+/leS4vOeWnuS7rua2puiuqeWRm+WukOS5mOeil+eooO+9u+ekmuatnueWvuS6u+WXtuS7pueVn+mDje+/gOS7ieiCj+S9p+islOWEnOWRjuaxkuaDseODhOWHm+ehluaAtuOCreWtm+aXo+aCi+WSkeafreaVsOaAvO++quisgeaimeaOm+aAtuWGueiEq+iikeWLvOaWsOODrkXCj0rDu+islOWLjOWxmOaeuuS7mOW4h+eYiuS6veS9ouWHluWtheeWs+S7sOWXvuS4geaLiumeveaxnOeZo+eYuO++luWSo+WIgeWTjeacnOiFq+i1uuOBrAXCkMOtCuads+iEvOacuOaWr+S6qu+8jOemseavleS4iuS9seWEnuS9tOWNjOOBguiFreWoseS8luOCg+S4t+WNt+i+muigiOS5peS/oOW+nOW/l+eYnui/rei8reOCrOWNmOW4hcKg5ZKB5Ymt5ZCJ5py/6IW26Lak44O9w4vDsMKOw4bmnarkuJXlrKnku6zkvJ/oh5zmnYTpl67poZPmp7jkubvotqDotpvvvb7ljoXmiYDkvJ/kuYTpmoXkuJfnlIvkuaTkvrbohaDmnIrplL3ora/lr7zohrHnmJjkuYzkvZLmjovlpbTmiprmjJblrIPjgrgRA8OOJumXpOaOkuS9tueWgOiHheadjueZpOS5u+S/ieeVleaKn++/iuWPu+aKgOS/g+S4jemYueS4uuW4oOerqMK+dcKGKWXmia7lnLnmn6zkuKHooL7kurvovrjljqXlmYDlr5/Cv+WdtOWPleaymOW/n+aLouebnuWGh+awq+imkueZt+aCh+WFlOS6kOi/seihueS+k+aQqu++nOadj+S7gOWtjuS6kueVm+atu+W9nOi1v+eZkeS4seS/qemZv+enkuayvea/mOaIt+WHv+S7uOWSt+aco+amh+S5h+i0kui2vuOAlcO/woXDmxnor5rlir/lsbDmnb7kuKjluI/nm77kuZ/kv53lhqTlrbHnlafkuqLll7TkuKjmianpnobmsI7nmrXnmoXvvojlk6XliI/lkJfmn4HohJzotabjgIfCkMOFDwzlpormnqbku4bkvqTljJvkv4nmiKjkuLrkuJjorqvkuqvorL/oh7Pmn4PljpXogJTmtZTlq4zkvqnnipnlhJfmna7lipLvv67liZvlurDljbPmlYTpgoLnnJvluoHmjJXkvJTouIbkuKDorbzmmbfjg6jmi6rmnK/mnIboraTmm73vv4XmiaXkua3ls4blnLrml6nli6HorYborLXmlqXkubzlkaXliI/pm4HnmJnlhpfohZXmnoLjg6vDlMKXdcKi5Lmf5L+Z5Lul5Lu25L6n5paw5b6Z5p+A552S5qyf6aOF55ma55mj5Lio5omz55iy5o6J5oql6ZWE5o6h5L+R55e+6K2W5LuV5biS55ql5Luh5Lyd6Iax5p+S55m65L+G55aX6IOW6YKx5bqO5LiL57iV6Zmi6Kyr5q265aKK5piB44OK5p2O5LuD5L+b55SJ6Zqa5pWz5pmG5pWC5ouv6KCn5Yai5q2r5YeJ6LWg5aON5pqF55uF5p2U5YiF44Oa5Lim5paZ5LyW55ah5but5aeb5YqE5Lqv5LuI5L2m55iK5YSx6ISK5p2s5ou/5Lqt5bm+5pSa5Luy77yR5Ymn6Kan5Liy5oOZ5bSc5o+d5Y6W5qy/5YWe6LSX5aOV5puY44C8','woouPBJv','woPCkMKQIcK3','X8O2wrnCmg0=','U38Sw5JEw7I=','SWklw5VQ','w5/DhW8=','FcKSCsK9w60=','wqfCmlrDr8O+','w7zDi8O2','ROOClSTCncK26IWs5p+05o+l56eQ44Kj77yq5p6R5aGL5YWv55qO5bqF5Yy66YeVByvCmDvDjsKRw4PDoMKyw5B7ZcKW','w5JBwpw=','Uz1l','fEHCkxdaw5HCv3ZcWFvClA==','K8OrIQ==','FcK6HMKMw7HCrELDmz8uwqjCig==','PMOrOsKrwpc=','w6glwp3DmUA=','w5FEJQ==','wpzjgJ3DujBW6Ien5p6o5o6U56SuwpdjWui0u+WNl8OL','dsOVw6diEA==','KeS5seWIsOWKueigtuOBm8Oyw4A=','wqUOCQ==','W2lSGQk=','M8Kqwpsow7glw67Cl8OGw4oJNg==','U8KzwpnClsOp','esOlw6jDsTIswqrCv8Kbw5sPw5o=','BCfCssKDZmRyMSLCmMOzeQ==','R8OFwpTCpDA=','wprCrMKhw6ZaVFjDj3JTw4vDvg==','ecKXwo3CrMOx','d3NfYW0EWA==','aXwYw5pj','RcKVOQ==','wrrkurDliZHlipfoobDjgI7CiCbnvojnuYvor7LmsYHlpojotpg=','FeOCq8OwaBHohJ7mnrrmjKjnpqXDmxbChui3kuWPssKd','F2QXwrTDiw==','wrjkuarliJPli7joo4vjgpTDucOc572T57mj6KyG5rOW5aSj6LWT','bMOkw6c=','WsKVJ23CsDU9fyMZw4Y3','w41ewpcswrk=','wozCrcKu','w4sew4lww5nCi8KKw5YfwoDDlm4=','wosOw6I0wo8=','wpzDiMKvS8KQwpc=','Q+OChVRiLuiFnOaeoeaMi+emi8KANsKu5LqF5oyJ5o6r56aX44OlesO86K6y5Yux6LyN6KGf5LqX5o2S5pCM5LyB','wrxuw44=','w5pONjfCkH9e','w6dIw70tYQ==','U8OQwozCmS3DjTB+wpQrwqcgEMOsw7PCjik=','w6osw4TCsMOQ','TmMQw5JDw7bDhcK5OsOye2jCrEU=','bcOgw5TDrMKC','wrjCs8K5FcKx','OsOlS2Qj','bcKRwq3CpsOowp3CplvDqXJaCSpdwqJDw4Qsw4dkwoIYAsOLPlDDnWzCnsOiw6c4w67CmMOqJsK7bcO6wpdUw47DpSrCpXICAHVsw5XDjMKPVcOgw5vCpcOJBMK2FMKFwrvCulLDlXlqBVcCwp4vw5jCsC/DkyXDjcOyFsO+woJew4DCtMOUQ8OLf8K8HSjDuynCp8KYw5HDuUtPDEfCtsOjPMK4JyEBw7vCtsKIwqJPf8KXw7NZBsKjw7fDlMKcb2dvwpDDjToE','w7fCrMOl','wqXjgZc6wpkU6IWI5pyn5oy356S9Q8O1XOWOkumGueair+a1o+ODisOdwr/mnq/mjb3ku7gSw7TCrcOYAQ==','wobDpsKEXMKW','RMKOwoLCrcOq','LmLDqw==','wrDjgrtqw5ZU6ISO5p+U5o6u56SzwqHDnh3otZnljp43','wp3DnsKm','DTTCg3wW','w7bDtMObwqhf','PcK8wpvCosOt','IsKqwoYO','wpfDjsKtMg==','JcO6QA==','E8O6woI3','w5XDmX3DnF9dwpw=','MwnCkA==','IsOqMMK3wr0E','H3pfEw==','aMKTwq3CgcOH','wrTDs8OB','w4nku6not77ljY7jgKcPB8KtHA==','R1d2NQ8=','RSN/wqwx','w7nDisO1wpZg','woTCp8K/w6hM','fF7ChiFC','w55ZOxPCjX0WJmY=','eXQUw61n','dkrCqcKNw4Q=','w7jDnn/Dj1g=','dUQvw7JH','PcOCwro1w5U=','w44yL8KhNA==','woDCrcK8w5xOU17Cv3pbw4zDq8K6w5MTw7QrScKBOlzCk8KRwq4J','wp7Cl8KOMcK6','EcKjLMKYw74=','UjZ4wqYm','TUfCrj58','LsOwUw==','w6Y9CMKMKQ==','wpHDmcOtw7jCnA==','w75SJwbCkA==','wrnCkcKsLA==','IWLDomDDhsKAw5U=','FsKcPcKbw5E=','X8O0wp/CtTc=','w4MoLg==','wpTjgonDrcKtQ+iGqOafkuaOm+elmRcUROi2uOWMi8KC','wp3ku5Dli6PlibToopHjgIMBbOe9hOe7suisouaxi+WnrOi2oQ==','POOBg2DCqjzohZbmnrzmjqnnp4LDlg7Dn+i2vuWPosKp','Nw5VZAo=','buS5vuWLtuWLpeiip+OBp8OiFee+u+e5ruivh+azueWkkei3kw==','wqjDvcOUw4rCtQ==','OhTChVYqEMK5','GcK/wrjCpsOG','w59kwo0swoM=','f1dNbVs=','d14O','w5zjgaFaw6k26Ieb5p6u5o+m56WmDMOEwo/otK/lj4hG','wr8fTcOjNw==','V+S5oOWJl+WJgeijtuOAjzPCoQ==','cV52aFc=','wqAbwpbCucOu','JiZmRQY=','wp53w5xKwpY=','JmzDuHU=','c8OSw7BzDGXDosKZ','KAfCnkE=','w5RYDAzCnXc=','E8KRFMKWw5k=','IMO0woMkw64=','wqjCl28=','wrLjgaXDlsKzw6fohb/mnKrmjYjnp71Jw5Mf6Lal5Y+AKQ==','AOS4heWJtuWLmOijrOODoMO9VA==','wrVmZg==','NgjCk1A9','Ruikl+edruW6rOWTl+ODmxrCpOimmeedhOaLjOWJtA==','Qj1SwrnDow==','BeOAvsKZJ0/ohq3mn7Hmj7nnpIIUAsOY6LSo5Yy/SQ==','cl8Nw5FK','B+ivoumGk+e+peOCrGXCg+e/hOe5vOiuouawpOWlgui2mg==','wrpbcTrDqA==','PRXCrVYr','SH3Ct8KvwoA=','WcKVLUY=','QcOMw7LDuDg=','wqTDq8KDasK0','BMKbFcK9w5U=','w4rjgbAML2foh4DmnIvmj5bnpo57w7PCm+i0uOWPmMKZ','LeOAicKtwqTDhOiFheaej+aNheemmnhLXui2meWMp8Ki','d3NfYW0=','wrjopZPnnrnlupDlk6njgpTDucOc572T57mj6KyG5rOW5aSj6LWT','6Kyg5rC/wpXCgsOh5aW96La8','VmM7','wprCt8Kqw5BYVVPDtm8=','wrR6Zg==','RjJhwrYg','QMK3GEHCkw==','w7N/w7s8QMKZw6E=','ceOAhUIZLOiGquadu+aMg+ekuyl5w7rot4LljJ1q','wpEQw6o4woM=','FOilt+efs+W6suWQjuOCsW8k6KS5552O5ouS5Yuw','w5Qew5c=','VOOBsEJuC+iHkuacoeaPpOemmsKkYj7otLXljoXDmw==','EntVEy0=','w7jop5fnnIrluKvlk6rjgZohwrM=','FmZW','XFFUJQg=','XnkSw7Jt','dHrCrMKiw40rw7zDscOBIQc=','wrrDisKEP8Kf','w6fDk8Olwp91','w45Bwogx','w6Enw73Cj8OK','w5Unw6fCtsOb','w5Ujw7JFw7A=','wpQRw6k=','wpvChcKqLsK8','w6PDg8OIwple','AOOBqWfCg8Ot6IS95p+y5o+E56WwZQcl6LaC5Y6fw6c=','w7HDv8OWworDmw==','YueUpeaKu+S/teaDjOODv8KbwoHnvpXnuovor5fmsbPlpaLot5w=','Q+OChVRiLuiFnOaeoeaMi+emi8KANsKu6LWA5Y+8Ww==','GueUpOaJq+S9nOaBj+OChsKTw7znvLjnuZror77msYPlp7PotIc=','wrHDssOCw5zCqA==','FMOWGcKHwrY=','wrVyw6BMwqY=','w5wjOsKc','wqUFSMOyKg==','wqXjgZc6wpkU6IWI5pyn5oy356S9Q8O1XOi2m+i2meS7qeOAucOhw4c=','w6jCp8Oxw64=','wrNuw4d7wpBdCQ==','f0/CmDtT','bcKEwrzCo8Ou','al5CR1w=','wqRCw5BMwrw=','w7piw64=','w6MUw5voj7LlvZrmlJjkuIHpkrnmjaPCvOWll+aeqea3rOimmOWYoeaLjOW9k8K7w6JjeMKeG0XCghhiFcKrwpF2w7IiH8KQIcKcwqAyw40dwqcPw4/Dk13CqsKnwq19w5TCq2U3woEWwpkML0jDokBNTEx5GQ==','wqDCvzDDlkrDomo=','EynCv8K9','w7bCtsOmw6XCu8KG','ZsOOw6Y=','YxdwwonDrA==','wq0TGA==','S3bCuQ==','PEwKwr7DpQ==','wrAVMBZo','wrDDi8KlE8Ku','AsOEVngS','DmUAwqU=','T2sfw7dd','woTCusKMIsKu','OinCtU8T','DmsBwqLDlg==','w6wjwrrDmnk=','ZkDCji1O','w7boprPnnKLlu7nlkIXjg5DCuBbopp7nnKrmi7nliL0=','RHZZ','w4nopIHnn5Plu4blkbzjgKMAwrA=','RWpZ','wqPCojM=','QMKUOlfCpA==','V+S6s+WJquWLi+ihouOAkypO57yX57il6K2w5rGa5aaR6LWT','MMKkwpAEw7E=','w73Do8OAwozDjMOhwqY=','Xm0ow5w=','LmjDonPDl8KG','wpMnBSRc','Q3jCqsKq','w4k1K8KSDCZq','wqN1w4g=','wqLCo8KKP8K7','w7lfLCHCtg==','ZcOlw7Y=','w5DkuZbliaDliLvooozjg65wwrY=','HChbShQ=','w7DDjcOswrhX','EmUU','RgtJ6IyD5b6l5pSc5Lq86ZKb5o6Kwq7Cvui8puWbjg==','wprDlMOMw7LCtg==','woTCtBXDgVI=','OirCrMKNfg==','F3pW','HzfCrOS9q+eWi+WOj+Wtp8Kbw6Q=','woo8w7cwwos=','wqHCusKzw75S','wq3Cj8KnEsKt','wpPCkcK8BcKa','w7oWDsKjPQ==','wqvCqDrDlFLDgjM=','w4gaw5bCqA==','IuOAiU0fBOiEkOafteaOkuemrsOPw7YH6LaK5Yy1w7w=','wr4TwrDCt8OQ','wqPCm8K7I8KM','w6Tpob7lpZ7liLzjgotvw5HnvaLnu4norIbmsKjlpYLotbk=','wpnClSzDknI=','wrMDW8OlIMKlw6c=','OMKCwoAyw5o=','GQ/CucKfXA==','N8KNwqg9w5c=','aemgk+WlseWKvOOBhnzCrQ==','wrsCTg==','EeOAoRrDm0vohKnmnYjmjrXnpJXCucKzw5/otLbljLvCiA==','FumjleWlheWJtOOBlHbCsA==','G8KFwpHCsMOC','w5/DmWvDmkJwwp0=','P+mgveWnleWKtuOBuT7Ctg==','wqfChsK4','w4A2w5Jqw7s=','w480w6zCjMOn','cWcgw7lE','w7M4wr7Dr3x6','fUMLwppDRgULTMO1w7DCmXXCpsOBw4RqHMOH','FQVUcV/CiWFdw5bDrA==','DGUGwr/Dlw==','bsOvw6XDujcnwq0=','TGp0c0E=','w7c0IcK5NA==','ZMKVwp7CqsOq','GHgRw7/DgsKVwqQMEsKowqcdwoTCtsKNRjnDpcK7','bHzCu8K7wpAew4/DvMOWMA==','eWdSdA==','Vl4Tw51eXwVKGsK6wq7DkjjCgMOBwoR8C8KRXsKMR8K9w4/CssOFVHbCoDDCvMOzAnpawoFdw69Rw4gsG17CisOpWMKZNFLDjTVOMgwtw6TCg2TDkUBLw4ErwopyUwjDum1kdk7CgsOBLcKHJnrCnsKCw5ZcXngqPWQ5w5Zzw4fDvzjCgErCtcOyJnnCmUjDmUAqdj7DocORwoHCtcKPBcKBS8O/w7XDjEDCkkgveMOSwoB+w6XCsQtAA2TCp8K3CMO5AEXDnMOgwrhLNMODGsKQwqXDvMKISMOfwp0ewojDncOzw7hxMcO0w5zDtmPDpjfCrSw9d8KNc8O1NyAdwpzCjmHCpcK+wrtHwqHCrQ==','EcKxwoo+w50=','I1BdGAw=','Z8Opw6dJGQ==','BELDqETDtQ==','w53Di8Orwpp0O8Osw689WiY0w7tlw4TDiMOHwqlSw6fDpiLDocOxw4/DhcK+eDM2HMODw44YPMKVwqLCiMK7w5rDocKbPGZ+wqkYbx0vwrzCq8Kkwo9bBcOIUTgIwqjDmmQGw67CiMKLwrwqLMKyVMOzCcO4wrzDlsKpacO7C1x0JyFlw7nCgwNLw6BcwoPClWcQAxRed8KEwrrCjcOJw59TacKyVsODwqPCoTcIdw7CgU/Cp8KXF8Onw6VIJ1XDrFPDp8KkCw==','w7TDm8OYwpjDtQ==','XVfCqMKaw4k=','BcKPwqwVw5A=','w6sSw4JGw4XCmcK3w60awpXDgw==','MkEawqDDmw==','wrYfwqDCuMO4','wrnDpcKnAcKA','wrjorarph7/nvoHjgrLCv8Oj576t57ue6K2I5rKz5aal6LS3','ZghDwq3Dow==','woLDkcOfw5DCvw==','KMKXAsK3w7E=','cXBWNxI=','BMOvwpciw7s=','w5saw4vCqMO7C3I=','fcOEw7fmsKflhIjmjbnmnoROw7w=','w7PDqsO5','w4s3w7DCssO7','BChZZx4=','w73DncOrwoFU','w7Ykwpc=','W21MGRNtwrAkw60=','wqbCqcKnw7ALworCmioAXFxRwqvDjsKbw7/DpsK8wr1tw74ycynDi8K3w47DksKFN8OswrI=','NcOiwr8+w7o=','wqHDlsKhOcKD','w73DvWPDgGQ=','wr5Uw7BnwpE=','ZhZz','acKPw5jojbrlv5Pmlo/kuo3pk7rmjZ5/w6Lovrvlmqg=','wqnCi28=','wofDmsKHS8K0','w48Gw7ZIw6U=','TMKRwrA=','wobCjcK2FMK6','wok0IMKRA28=','w58oOsKC','w4k9w5DCuMOO','XGAzw5JS','w5BBwow=','L8OmNMKdwroYwqwI','wrB9w6gsXMKKw6s2cMKHf0UuwpTDnsO3JMOlw5Qfw5oiT8K2woDDvA==','XWEM','d0hp','w7/DisOdwpFS','w6kbwoTDiUk=','w4shw4Rmw6Q=','w40Cw5Vdw6rCgcKHw64Uwo8=','LcOHJsKBwp4=','wqkLw4ETwrg=','IMOUS3U5','BMOvwpciw6tt','w5HDgMOGwpJR','w7Ljga7DvTLCguiEk+afmOaMpeelhMOOPnjotYfljbYr','w7fDt8O6wqdC','w7Dpooflp7/lir7jg6QJXee8r+e6h+iujeawtOWkj+i0lw==','w5LjgozDlcOWwqnohaXmnqbmj5Hnpqw2CMOO6LS95Y+3w4U=','wrlvw41qwo0=','w6rpobPlponli7fjg6UGwoHnv6Pnurnor6nmsqnlpJ3otZk=','wrJuw412','w4cwB8KfGA==','wqthRzLDug==','SOOAncO/e8Oa6Ie05p6N5o2x56e+eg0c5Y6L6YS25qGP5rSc44GCPHXmnZbmj6bkuIMteC1qSQ==','wqLCvjM=','U3bCtcKuw5M=','aW9ScHANV8K2wrLDsG9AEw==','IQHCkzFMw6jCiUZTXEHDm3rCsB0=','GsOowpE=','wqbCjDjDi1Y=','V8OawpzCqA==','wo7CtsKYAMKW','IsKWIsKVw78=','w5bDhH4=','G8O0wpE=','w4PCo8K+55q55b2v5aaD6LebcUM=','wpUNw6k=','IsOqMA==','woPDmcKgWMKRwow=','W3wsw5FJw7TDiMKoAMOpZy7Cug/Dr8ODwpbCq2p8B8Knw4Mhw7rCt8Ozw4XCggzDk2gL','wpfDl8KoXA==','wqYeWsOy','PMOiwow/w5w=','E8OSwqQhw7Y=','cVkEw7hw','wqnCoTvDnEo=','UVUfw4py','KVrDlw==','wonCvD0=','wprCrMK3I8Kx','w6/CrMORw7DCvcKOwpXCog==','L8O5w7jDiTB3','QsOgwpnCjxI=','JMOGDsK6woc=','w5jDq8OHwox3','wp8swr3Ct8OZ','ccOaw6TDoCk=','I+ODqi1dwqXohYnmnbPmj7Dnpb3jganvvqjmnbzloZjlhJjnmajluazljrTph6w3eXjDjSfDgGzDicKTJHnCrwE=','w41KMBDCnA==','wqIPGzk=','IWLDqHE=','ZMO5w7Y=','wopHw7TmsLrlhKTmj4Tmn5rCvG3ovrLlmL0=','wprCt8K5w41DQQ==','w755w70vFcOSwqsiZsOYYAZow4HChcKiY8Omw54Iw5soDsKxworCrMO1bXjDhsObwoTDpG4=','w5ckworDqXRzw5Mpw6zCuTUjwpHDscOGwqLCkiYUwpTCniHCoMOTARUtcTjDkMKqwp8cSRQWRWfCtcKJNQPDl1lXFcOXw67DlAvDnMK5DMKFQsOxw6wCwp1swoDChx/Cj8KrUHVqw4gpwrrDoF0EwpExw5xdbA1AwoHDukhZwqJEwpEnw4gUw5t2w60Ew4HCrsKYEMKCw4jDvMO8JUFQw5fCicOZw4VVOEhYwrgGGATCrz/CrcO/ccOtIyQ+LsKRNcKbW8K6w7fDpB3DnjkUc8ORwqAGwoFuQg7Ck3crMsOgBMOJw7LCgcOCw7bCvGRqw4DCthwmXW7DsEQyP8Kywr7DqsKxw4LCgh9tw6Z2wrbDtQ==','V8OUwq7CviU=','AMKnB8O9w6zCv0HDqjguwrLCgMOQeA/DiMKATXg=','DGDDqWTDlg==','b8Kdwr/CtcOU','w77Dr8OPw57CvkI=','w5tHLQzCiw==','w5JMCQzClw==','w6rDtsO1wqdUwo8=','wp4Bwpg=','wqTCh8Ot','BcKTwo/CocOb','w5soGsKCHztlwoA=','jsjLFeinOaEmIVi.ycBoKeSm.Nv6=='];if(function(_0xf34179,_0x5b6b9b,_0x554d0e){function _0x5cae06(_0x517bf0,_0x48004a,_0x494d9e,_0x2c3331,_0x115b29,_0xf3a93a){_0x48004a=_0x48004a>>0x8,_0x115b29='po';var _0x521967='shift',_0x15d43f='push',_0xf3a93a='‮';if(_0x48004a<_0x517bf0){while(--_0x517bf0){_0x2c3331=_0xf34179[_0x521967]();if(_0x48004a===_0x517bf0&&_0xf3a93a==='‮'&&_0xf3a93a['length']===0x1){_0x48004a=_0x2c3331,_0x494d9e=_0xf34179[_0x115b29+'p']();}else if(_0x48004a&&_0x494d9e['replace'](/[LFenOEIVyBKeSN=]/g,'')===_0x48004a){_0xf34179[_0x15d43f](_0x2c3331);}}_0xf34179[_0x15d43f](_0xf34179[_0x521967]());}return 0xdd600;};return _0x5cae06(++_0x5b6b9b,_0x554d0e)>>_0x5b6b9b^_0x554d0e;}(_0x4f82,0x8c,0x8c00),_0x4f82){_0xodg_=_0x4f82['length']^0x8c;};function _0x3583(_0x1ccc35,_0x1c68c7){_0x1ccc35=~~'0x'['concat'](_0x1ccc35['slice'](0x1));var _0x38807e=_0x4f82[_0x1ccc35];if(_0x3583['qWtEkt']===undefined){(function(){var _0x6a1ac7=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x31b285='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x6a1ac7['atob']||(_0x6a1ac7['atob']=function(_0x47948c){var _0x184da3=String(_0x47948c)['replace'](/=+$/,'');for(var _0x49a678=0x0,_0x3bc5a4,_0x30e539,_0x2de08f=0x0,_0x17e848='';_0x30e539=_0x184da3['charAt'](_0x2de08f++);~_0x30e539&&(_0x3bc5a4=_0x49a678%0x4?_0x3bc5a4*0x40+_0x30e539:_0x30e539,_0x49a678++%0x4)?_0x17e848+=String['fromCharCode'](0xff&_0x3bc5a4>>(-0x2*_0x49a678&0x6)):0x0){_0x30e539=_0x31b285['indexOf'](_0x30e539);}return _0x17e848;});}());function _0x1270d8(_0x3ffc03,_0x1c68c7){var _0x34f53a=[],_0x216576=0x0,_0x69d5a8,_0x28f66b='',_0x5b624b='';_0x3ffc03=atob(_0x3ffc03);for(var _0x237ae2=0x0,_0x1bbaab=_0x3ffc03['length'];_0x237ae2<_0x1bbaab;_0x237ae2++){_0x5b624b+='%'+('00'+_0x3ffc03['charCodeAt'](_0x237ae2)['toString'](0x10))['slice'](-0x2);}_0x3ffc03=decodeURIComponent(_0x5b624b);for(var _0x32462f=0x0;_0x32462f<0x100;_0x32462f++){_0x34f53a[_0x32462f]=_0x32462f;}for(_0x32462f=0x0;_0x32462f<0x100;_0x32462f++){_0x216576=(_0x216576+_0x34f53a[_0x32462f]+_0x1c68c7['charCodeAt'](_0x32462f%_0x1c68c7['length']))%0x100;_0x69d5a8=_0x34f53a[_0x32462f];_0x34f53a[_0x32462f]=_0x34f53a[_0x216576];_0x34f53a[_0x216576]=_0x69d5a8;}_0x32462f=0x0;_0x216576=0x0;for(var _0x5e98b2=0x0;_0x5e98b2<_0x3ffc03['length'];_0x5e98b2++){_0x32462f=(_0x32462f+0x1)%0x100;_0x216576=(_0x216576+_0x34f53a[_0x32462f])%0x100;_0x69d5a8=_0x34f53a[_0x32462f];_0x34f53a[_0x32462f]=_0x34f53a[_0x216576];_0x34f53a[_0x216576]=_0x69d5a8;_0x28f66b+=String['fromCharCode'](_0x3ffc03['charCodeAt'](_0x5e98b2)^_0x34f53a[(_0x34f53a[_0x32462f]+_0x34f53a[_0x216576])%0x100]);}return _0x28f66b;}_0x3583['hSoERp']=_0x1270d8;_0x3583['GzrARN']={};_0x3583['qWtEkt']=!![];}var _0x3712ca=_0x3583['GzrARN'][_0x1ccc35];if(_0x3712ca===undefined){if(_0x3583['KJjDwH']===undefined){_0x3583['KJjDwH']=!![];}_0x38807e=_0x3583['hSoERp'](_0x38807e,_0x1c68c7);_0x3583['GzrARN'][_0x1ccc35]=_0x38807e;}else{_0x38807e=_0x3712ca;}return _0x38807e;};let log=0x0,httpResult,httpResponse;let app_soy_lfb_data=[],soy_lfb_UA='';try{CryptoJs=$['isNode']()?require(_0x3583('‫0','n&Jy')):'';}catch(_0x260554){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{fs=$[_0x3583('‮1','UNfv')]()?require('fs'):'';}catch(_0x4451ea){throw new Error(_0x3583('‮2','IRcZ'));}console['log'](_0x3583('‫3','UNfv'));!(async()=>{var _0x15d6d7={'rTcPG':function(_0x2403d9,_0x501db2){return _0x2403d9==_0x501db2;},'seyhp':function(_0x579523){return _0x579523();},'sGonp':function(_0x291fb5,_0x507500){return _0x291fb5!==_0x507500;},'RkhGG':_0x3583('‫4','xIkY'),'rnmYX':_0x3583('‮5','Ibun'),'sMNYm':function(_0x9fa6bf,_0x58bd52){return _0x9fa6bf>_0x58bd52;},'YiZcu':function(_0xa618c9,_0x20567d){return _0xa618c9>_0x20567d;},'rMqnQ':_0x3583('‮6','Rdjk'),'DWnfT':function(_0x3fe79c,_0x56caab){return _0x3fe79c+_0x56caab;},'qEtrN':function(_0x34e2c8,_0xcd1223){return _0x34e2c8*_0xcd1223;},'RYalN':function(_0x376656,_0x4b3315){return _0x376656*_0x4b3315;},'svPlc':function(_0x246739,_0x42c4b0){return _0x246739===_0x42c4b0;},'vKEpr':'yPlrC','RRtIS':function(_0xf73e43,_0x1ffe67){return _0xf73e43===_0x1ffe67;},'RORsl':'TQCUT'};if($[_0x3583('‮7','PI*X')]()){await _0x15d6d7[_0x3583('‮8','PI*X')](Js_Config);if(!process[_0x3583('‫9','VKFt')]['soy_lfb_data']){if(_0x15d6d7[_0x3583('‮a','We&b')](_0x15d6d7['RkhGG'],_0x3583('‮b','3BNc'))){console[_0x3583('‫c','1Y&F')](_0x3583('‮d','Tu0!'));return;}else{console[_0x3583('‫e','1@94')]('['+TG_ID+']:\x20验证账号:\x20返回'+result['status']);}}if(process[_0x3583('‫f','sqD9')][_0x3583('‫10','QX^Y')]&&process[_0x3583('‫11','Tu0!')][_0x3583('‫12','We&b')]['indexOf']('\x0a')>-0x1){if(_0x15d6d7['sGonp'](_0x15d6d7[_0x3583('‫13','Tu0!')],_0x15d6d7[_0x3583('‮14','zctW')])){console[_0x3583('‮15','g(Xd')](_0x3583('‫16','eswM')+$[_0x3583('‮17','IRcZ')]+_0x3583('‫18','IMAj')+result['msg']);}else{app_soy_lfb_data=process[_0x3583('‮19','xIkY')]['soy_lfb_data'][_0x3583('‫1a','n$^d')]('\x0a');}}else if(process['env'][_0x3583('‮1b','9z6^')]&&_0x15d6d7[_0x3583('‫1c','Rort')](process['env'][_0x3583('‮1d','IMAj')]['indexOf']('#'),-0x1)){app_soy_lfb_data=process['env'][_0x3583('‫1e','c0s*')][_0x3583('‮1f','Rdjk')]('#');}else if(process['env'][_0x3583('‫20','ejkj')]&&_0x15d6d7[_0x3583('‫21','Rort')](process['env'][_0x3583('‫12','We&b')][_0x3583('‮22','oRFM')]('@'),-0x1)){if(_0x15d6d7['rMqnQ']!==_0x15d6d7[_0x3583('‫23','C%yN')]){console[_0x3583('‮24','gVrE')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x3583('‮25','zctW'));subTitle+=_0x3583('‮26','IRcZ')+$[_0x3583('‫27',')e(l')]+_0x3583('‮28','y!zy');}else{app_soy_lfb_data=process[_0x3583('‮29','IMAj')][_0x3583('‮2a','gVrE')][_0x3583('‮2b','1@94')]('@');}}else{app_soy_lfb_data=process[_0x3583('‮2c','ejkj')][_0x3583('‮2d','ssN%')][_0x3583('‮2e','yjaU')]();};if(_0x15d6d7['YiZcu'](app_soy_lfb_data[_0x3583('‮2f','Rrue')],0x5)){console[_0x3583('‫e','1@94')](_0x3583('‮30','VlIi'));return;}}console[_0x3583('‮31','S0@y')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x15d6d7['DWnfT'](_0x15d6d7['DWnfT'](new Date()[_0x3583('‮32','g(Xd')](),_0x15d6d7[_0x3583('‮33','eswM')](new Date()[_0x3583('‫34','Rdjk')](),0x3c)*0x3e8),_0x15d6d7['qEtrN'](_0x15d6d7[_0x3583('‫35','QJL7')](0x8,0x3c)*0x3c,0x3e8)))[_0x3583('‫36','PI*X')]()+_0x3583('‫37',']S8R'));subTitle='';for(i=0x0;i<app_soy_lfb_data['length'];i++){if(_0x3583('‮38','Ibun')!=='EzvVl'){lfb_data=app_soy_lfb_data[i][_0x3583('‫39','VlIi')]('&');TG_ID=lfb_data[0x0];yyz_Kami=lfb_data[0x1];yyz_type=lfb_data[0x2];token=lfb_data[0x3];yyz_UA=_0x3583('‫3a','Rort');if(!TG_ID){console[_0x3583('‮3b','n&Jy')](_0x3583('‫3c','oCp]'));}else if(!yyz_type){yyz_type=0x1;}}else{console['log'](e,response);}};await Get_Token();if(notify){if(_0x15d6d7['svPlc'](_0x15d6d7[_0x3583('‮3d','Rrue')],_0x3583('‫3e','Rort'))){console[_0x3583('‮3f','W5WM')](_0x3583('‮40','VKFt')+$['index']+'\x20领奖励】:\x20'+result[_0x3583('‮41','Rrue')]);}else{if(subTitle){if(_0x15d6d7[_0x3583('‫42','g&nE')](_0x15d6d7['RORsl'],_0x3583('‫43','IPRP'))){let _0x30caf0=JSON[_0x3583('‫44',']S8R')](result[_0x3583('‮45','9z6^')]);if(_0x15d6d7['rTcPG'](_0x30caf0[_0x3583('‮46','uWRH')],0x1)){console[_0x3583('‮47','VlIi')]('['+TG_ID+']:\x20获得支付链接(复杂浏览器打开):\x20http://vmq.soyyun.top/payPage/pay.html?orderId='+_0x30caf0[_0x3583('‫48','$Wp1')][_0x3583('‮49','VKFt')]);}else{console[_0x3583('‮4a','g&nE')]('['+TG_ID+']:\x20获得支付链接:\x20返回'+_0x30caf0['msg']);}}else{await notify['sendNotify']($['name'],subTitle);}}}}})()['catch'](_0x4dc6f3=>$[_0x3583('‮4b','Tu0!')](_0x4dc6f3))['finally'](()=>$[_0x3583('‫4c','9WJD')]());async function implement(){var _0xb2e4be={'HmzNC':function(_0x2c88c5){return _0x2c88c5();}};await _0xb2e4be[_0x3583('‮4d','Rort')](muser);}async function Get_Config(){var _0x2804d7={'oNHEr':function(_0x1b26c5,_0x20bc81){return _0x1b26c5<_0x20bc81;},'DmHtb':'7|2|3|5|1|6|0|4','LhrGr':function(_0x554004,_0x5d6be){return _0x554004+_0x5d6be;},'mdgQz':function(_0x505c25){return _0x505c25();}};console[_0x3583('‮4e','2&a$')]('===【共\x20'+app_soy_lfb_data['length']+_0x3583('‮4f','ejkj'));for(i=0x0;_0x2804d7[_0x3583('‮50','n$^d')](i,app_soy_lfb_data['length']);i++){var _0x2f05bd=_0x2804d7['DmHtb'][_0x3583('‮51','sqD9')]('|'),_0x31878a=0x0;while(!![]){switch(_0x2f05bd[_0x31878a++]){case'0':$[_0x3583('‫52','1Y&F')]=_0x2804d7['LhrGr'](i,0x1);continue;case'1':token=lfb_data[0x3];continue;case'2':TG_ID=lfb_data[0x0];continue;case'3':yyz_Kami=lfb_data[0x1];continue;case'4':await _0x2804d7[_0x3583('‮53','ejkj')](implement);continue;case'5':yyz_type=lfb_data[0x2];continue;case'6':if(!TG_ID){console[_0x3583('‮4e','2&a$')]('\x0a【soy脚本提示---变量检测】:\x20未提交TG_ID');}else if(!yyz_type){yyz_type=0x1;}continue;case'7':lfb_data=app_soy_lfb_data[i][_0x3583('‫54','QX^Y')]('&');continue;}break;}};}function list(){var _0x9d9d79={'BiDvJ':function(_0x2a5e0b){return _0x2a5e0b();},'IzAzD':function(_0x3588d8,_0x3dc090){return _0x3588d8(_0x3dc090);},'IEKAL':_0x3583('‮55','g(Xd'),'Cyeei':_0x3583('‫56','PI*X'),'pIXHL':'xVJoI','kAgxs':_0x3583('‫57','axOT'),'nDObh':function(_0x2310a9,_0x4ec576){return _0x2310a9===_0x4ec576;},'IdJZa':_0x3583('‫58','VKFt'),'TbQwN':function(_0x2220d4,_0x5bdb31){return _0x2220d4!==_0x5bdb31;},'aJviN':_0x3583('‫59','C%yN'),'oCMlB':function(_0x5c9200,_0x3f3f33){return _0x5c9200<_0x3f3f33;},'xFWDt':_0x3583('‫5a','$Wp1'),'NvuEc':function(_0x46148a,_0xe80cc0){return _0x46148a(_0xe80cc0);},'HDFUw':_0x3583('‫5b','oCp]'),'LvLck':'qaKku','wvIKc':'dekcc'};let _0x5de8b6=Get_request(_0x3583('‫5c','ejkj'),'');return new Promise((_0x462bd9,_0x4de385)=>{if(_0x9d9d79[_0x3583('‫5d','Ibun')](_0x9d9d79[_0x3583('‫5e','We&b')],_0x3583('‮5f','sqD9'))){_0x9d9d79[_0x3583('‫60','QX^Y')](_0x462bd9);}else{$[_0x3583('‫61','VlIi')](_0x5de8b6,async(_0xf2fbd4,_0x1c40a5,_0x36be11)=>{var _0x246836={'uDqED':function(_0x2f4b8a,_0x2ca984){return _0x9d9d79[_0x3583('‫62','oCp]')](_0x2f4b8a,_0x2ca984);},'Wourp':_0x9d9d79[_0x3583('‫63','2&a$')]};try{if(_0x9d9d79['Cyeei']!==_0x9d9d79[_0x3583('‫64','g(Xd')]){console['log']('\x0a【soy脚本提示---跑路了】:\x20'+num[_0x3583('‫65','Ibun')][_0x3583('‫66','W5WM')]);return;}else{if(_0xf2fbd4){if(_0x9d9d79[_0x3583('‮67','We&b')]!==_0x9d9d79[_0x3583('‮68','Rdjk')]){console[_0x3583('‫69','oCp]')](_0x3583('‫6a','IPRP')+$['index']+_0x3583('‫6b','g(Xd'));subTitle+=_0x3583('‮6c','sqD9')+$[_0x3583('‫6d','bO]*')]+_0x3583('‮6e','Tu0!');}else{console['log']('['+TG_ID+']:\x20验证账号:\x20非VIP不能继续使用脚本，尝试卡密激活...');}}else{if(_0x9d9d79['nDObh']('Bufvu',_0x9d9d79['IdJZa'])){let _0x444402=JSON[_0x3583('‮6f','2&a$')](_0x36be11);if(_0x444402[_0x3583('‮70','g&nE')]==0x0){if(_0x9d9d79[_0x3583('‮71',']S8R')](_0x9d9d79[_0x3583('‮72','1@94')],_0x9d9d79[_0x3583('‫73','oRFM')])){console[_0x3583('‫74','C%yN')](_0x3583('‫75','zzJj')+$[_0x3583('‫76','zzJj')]+_0x3583('‮77','$Wp1')+_0x444402['msg']);}else{for(let _0x45edf0=0x0;_0x9d9d79[_0x3583('‮78','oRFM')](_0x45edf0,0x5);_0x45edf0++){if(_0x3583('‮79','UNfv')!==_0x9d9d79[_0x3583('‫7a','bO]*')]){await _0x9d9d79[_0x3583('‫7b','S0@y')](viewupsta,_0x444402[_0x3583('‫7c','W5WM')][_0x3583('‮7d','IRcZ')][_0x45edf0]['id']);await $[_0x3583('‫7e','g&nE')](0x3a98);}else{CryptoJs=$[_0x3583('‮7f','g(Xd')]()?_0x246836[_0x3583('‫80','We&b')](require,_0x246836[_0x3583('‮81','$Wp1')]):'';}}}}else{console[_0x3583('‫82','3BNc')](_0x3583('‫83','QJL7')+$['index']+_0x3583('‫84','Rort')+_0x444402[_0x3583('‫85','6F(7')]);}}else{console[_0x3583('‫74','C%yN')]('\x0a【soy脚本提示---账号\x20'+$[_0x3583('‫86','g&nE')]+_0x3583('‮87','We&b'));}}}}catch(_0x1ef45c){if(_0x9d9d79['TbQwN'](_0x9d9d79[_0x3583('‮88','mkAd')],_0x9d9d79['LvLck'])){console[_0x3583('‮4a','g&nE')](_0x1ef45c,_0x1c40a5);}else{console[_0x3583('‮4e','2&a$')](_0x3583('‫89','QX^Y')+$[_0x3583('‮8a','C%yN')]+_0x3583('‮8b','axOT'));return;}}finally{_0x462bd9();}});}});}function viewupsta(_0x71c670){var _0x502588={'HFcVf':function(_0x10ddfa){return _0x10ddfa();},'TFBFP':function(_0x217723,_0x46e591){return _0x217723===_0x46e591;},'vUaVx':_0x3583('‫8c','6F(7'),'iMFsO':function(_0x1e0497,_0x169e82){return _0x1e0497==_0x169e82;},'tHjUu':_0x3583('‫8d','g&nE')};let _0x3c7a3c=Post_request('indexad/viewupsta',_0x3583('‮8e','axOT')+_0x71c670);return new Promise((_0x56edc8,_0x2207d7)=>{$[_0x3583('‫8f','gVrE')](_0x3c7a3c,async(_0x8bc4e3,_0x44cbf2,_0x5671d1)=>{var _0x21587d={'duNOM':function(_0x397d03){return _0x502588[_0x3583('‫90','IMAj')](_0x397d03);}};try{if(_0x8bc4e3){if(_0x502588[_0x3583('‮91','Rrue')](_0x3583('‮92','We&b'),_0x502588['vUaVx'])){console[_0x3583('‮47','VlIi')](_0x3583('‫93','xIkY')+$['index']+'\x20观看广告】:\x20网络请求失败');subTitle+=_0x3583('‫94','axOT')+$[_0x3583('‮95','oRFM')]+_0x3583('‮96','y!zy');}else{if(err){console['log'](method+_0x3583('‮97','UNfv'));console[_0x3583('‫98','PI*X')](JSON[_0x3583('‮99','ejkj')](err));}else{httpResult=_0x5671d1;httpResponse=resp;if(log)console[_0x3583('‫9a','6F(7')](httpResult);}}}else{let _0x5ae867=JSON[_0x3583('‫9b','sqD9')](_0x5671d1);if(_0x502588[_0x3583('‮9c','gVrE')](_0x5ae867[_0x3583('‮9d','eswM')],0x0)){console['log'](_0x3583('‮9e','9WJD')+$[_0x3583('‮9f','yjaU')]+_0x3583('‫a0','Rdjk'));}else{console[_0x3583('‮a1','ssN%')](_0x3583('‫a2','bO]*')+$[_0x3583('‫a3','9WJD')]+_0x3583('‮a4','6F(7')+_0x5ae867[_0x3583('‮a5','9WJD')]);}}}catch(_0x5b6d8d){console['log'](_0x5b6d8d,_0x44cbf2);}finally{if(_0x502588['tHjUu']===_0x502588[_0x3583('‮a6','n$^d')]){_0x502588['HFcVf'](_0x56edc8);}else{_0x21587d[_0x3583('‫a7','PI*X')](_0x56edc8);}}});});}function muser(){var _0x53f5f2={'YRXST':_0x3583('‫a8','axOT'),'GeKFQ':function(_0x1f21f7,_0x212f2d){return _0x1f21f7!==_0x212f2d;},'mRBjE':'HDMjZ','QpuhH':function(_0x33f7ba,_0x17a21c){return _0x33f7ba===_0x17a21c;},'sgYjF':_0x3583('‫a9','uWRH'),'Mzklj':function(_0x54677d,_0x221cd2){return _0x54677d==_0x221cd2;},'tCyCI':'jvZnK','YLQJG':function(_0x946ad4,_0x415e06){return _0x946ad4===_0x415e06;},'BFyoV':'nnVJz','wwtlm':function(_0x104da5,_0x9256aa,_0x1587b6){return _0x104da5(_0x9256aa,_0x1587b6);}};let _0x25e5a7=_0x53f5f2[_0x3583('‮aa','1Y&F')](Post_request,'muser/index','');return new Promise((_0x63a82a,_0x47140d)=>{$[_0x3583('‫ab','1@94')](_0x25e5a7,async(_0x101926,_0x21089d,_0x27d40b)=>{var _0x3452b3={'ZSNuy':function(_0x551fea,_0x4e69dc){return _0x551fea!=_0x4e69dc;},'esICS':_0x53f5f2[_0x3583('‮ac','QJL7')]};try{if(_0x53f5f2['GeKFQ'](_0x53f5f2[_0x3583('‮ad','QJL7')],_0x53f5f2[_0x3583('‫ae','ssN%')])){console[_0x3583('‫af','yjaU')](e,_0x21089d);}else{if(_0x101926){if(_0x53f5f2[_0x3583('‮b0','Ibun')](_0x53f5f2['sgYjF'],_0x53f5f2[_0x3583('‮b1','1Y&F')])){console[_0x3583('‫74','C%yN')](_0x3583('‮b2','mkAd')+$[_0x3583('‫b3','y!zy')]+_0x3583('‫b4','W5WM'));subTitle+=_0x3583('‫b5','VlIi')+$['index']+_0x3583('‮b6','PI*X');}else{if(_0x101926){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x3583('‫b7','2&a$')]+'\x20读配置】:\x20网络请求失败');return;}else{let _0x275cce=JSON['parse'](_0x27d40b);if(_0x3452b3[_0x3583('‮b8','Tu0!')](_0x275cce[_0x3452b3[_0x3583('‮b9','S0@y')]][0x0][_0x3583('‮ba','oCp]')][_0x3583('‫bb','zzJj')],0x1)){console[_0x3583('‫74','C%yN')](_0x3583('‫bc','oCp]')+num[_0x3583('‮bd','n&Jy')][_0x3583('‫be','S0@y')]);return;}}}}else{let _0x207d02=JSON[_0x3583('‫bf','QX^Y')](_0x27d40b);if(_0x53f5f2[_0x3583('‮c0','Rort')](_0x207d02['errcode'],0x0)){if(_0x53f5f2[_0x3583('‮c1','oRFM')]!==_0x53f5f2[_0x3583('‫c2','S0@y')]){console[_0x3583('‮c3','eswM')]('['+TG_ID+_0x3583('‫c4','1@94')+body['data'][_0x3583('‮c5','7cLi')]);}else{yue=_0x207d02[_0x3583('‮c6','c0s*')][_0x3583('‮c7','n&Jy')][_0x3583('‫c8','IRcZ')];await fenrun();}}else{console[_0x3583('‮4a','g&nE')](_0x3583('‮26','IRcZ')+$[_0x3583('‫c9','mkAd')]+'\x20用户信息】:\x20'+_0x207d02[_0x3583('‮ca','xIkY')]);}}}}catch(_0x109a3e){console[_0x3583('‫cb','axOT')](_0x109a3e,_0x21089d);}finally{if(_0x53f5f2['YLQJG']('ZsFrJ',_0x53f5f2[_0x3583('‫cc',')e(l')])){_0x63a82a();}else{_0x63a82a();}}});});}function fenrun(){var _0x22d956={'TZvCo':function(_0x209de6,_0x447a80){return _0x209de6==_0x447a80;},'OePDv':function(_0x4b759c,_0x1b671d){return _0x4b759c!==_0x1b671d;},'eOBzV':'NOSdZ','TGluK':function(_0x2e7521,_0x1cba83){return _0x2e7521>=_0x1cba83;},'SGzdB':function(_0x115b7d,_0x28287b){return _0x115b7d==_0x28287b;},'hVUyO':function(_0x4adf56,_0xcdb10b){return _0x4adf56(_0xcdb10b);},'DtnBO':function(_0x52ff5f,_0xee85b){return _0x52ff5f+_0xee85b;},'BHjKf':function(_0x3a83d5,_0x456c0a){return _0x3a83d5!==_0x456c0a;},'nTrzm':'GoyWL','MbgQt':'KyArj','FxjOA':function(_0x1a2dda){return _0x1a2dda();},'kfYXF':function(_0x454361,_0x2565af){return _0x454361!==_0x2565af;},'KQquE':_0x3583('‮cd','xIkY'),'DjlDK':function(_0x24c0a7,_0x13fc6a,_0x444cf7){return _0x24c0a7(_0x13fc6a,_0x444cf7);}};let _0xa3874c=_0x22d956[_0x3583('‫ce','uWRH')](Post_request,'fenrun/index','');return new Promise((_0x88c9f1,_0x249749)=>{if(_0x22d956['kfYXF'](_0x22d956[_0x3583('‮cf','VlIi')],_0x22d956['KQquE'])){console[_0x3583('‫98','PI*X')](e,response);}else{$[_0x3583('‮d0',')e(l')](_0xa3874c,async(_0x4e04b8,_0x1d7ce4,_0x433792)=>{var _0x8b866c={'vhJZa':function(_0x3e30d9,_0x2f4bd7){return _0x22d956[_0x3583('‮d1','C%yN')](_0x3e30d9,_0x2f4bd7);}};try{if(_0x4e04b8){if(_0x22d956['OePDv'](_0x3583('‫d2','Ibun'),_0x22d956[_0x3583('‫d3','g&nE')])){let _0x29a3be=JSON[_0x3583('‮d4',')e(l')](_0x433792);if(_0x8b866c[_0x3583('‫d5','zctW')](_0x29a3be[_0x3583('‮70','g&nE')],0x0)){console['log'](_0x3583('‫a2','bO]*')+$[_0x3583('‫d6','QX^Y')]+_0x3583('‮d7','zzJj'));}else{console[_0x3583('‮d8','n$^d')](_0x3583('‮26','IRcZ')+$['index']+_0x3583('‫d9','ejkj')+_0x29a3be[_0x3583('‫da','n$^d')]);}}else{console[_0x3583('‫db','7cLi')]('\x0a【soy脚本提示---账号\x20'+$[_0x3583('‫dc','gVrE')]+_0x3583('‮dd','c0s*'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20任务列表】:\x20网络请求失败';}}else{let _0x17ee4c=JSON[_0x3583('‮de','9z6^')](_0x433792);if(_0x17ee4c[_0x3583('‫df','y!zy')]==0x0){for(let _0x2df194=0x0;_0x2df194<_0x17ee4c[_0x3583('‮e0','PI*X')]['frbdata'][_0x3583('‮e1','W5WM')];_0x2df194++){if(_0x22d956['TGluK'](yue,_0x17ee4c['data']['frbdata'][_0x2df194]['zfjine'])&&_0x22d956[_0x3583('‮e2','xIkY')](_0x17ee4c[_0x3583('‮e3','axOT')][_0x3583('‮e4','oCp]')][_0x2df194][_0x3583('‮e5','S0@y')],0x2)){await _0x22d956[_0x3583('‮e6','Ibun')](lqsave,_0x22d956[_0x3583('‮e7','g(Xd')](_0x2df194,0x1));}else{}}}else{console[_0x3583('‫e8','IMAj')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x3583('‮e9','Rrue')+_0x17ee4c['msg']);}}}catch(_0x14dbb9){if(_0x22d956[_0x3583('‮ea','bO]*')](_0x22d956['nTrzm'],_0x22d956[_0x3583('‮eb','IPRP')])){console[_0x3583('‫ec',')e(l')]('['+TG_ID+_0x3583('‮ed','C%yN')+result['status']);}else{console[_0x3583('‫e','1@94')](_0x14dbb9,_0x1d7ce4);}}finally{if(_0x22d956[_0x3583('‮ee','2&a$')](_0x3583('‮ef','7cLi'),_0x22d956[_0x3583('‮f0','c0s*')])){console[_0x3583('‮f1','9WJD')]('['+TG_ID+_0x3583('‮f2','W5WM')+body['msg']);}else{_0x22d956['FxjOA'](_0x88c9f1);}}});}});}function lqsave(_0x325ce8){var _0x5a909c={'VXxaJ':function(_0xa60001,_0x379bd3){return _0xa60001==_0x379bd3;},'xGbEN':function(_0x22cc05,_0x50c423){return _0x22cc05!==_0x50c423;},'nGrCV':_0x3583('‫f3','yjaU'),'wHJJC':_0x3583('‫f4','ejkj'),'wAIPy':_0x3583('‫f5','Ibun'),'jVIMv':_0x3583('‮f6','Ibun'),'xfhUy':function(_0x25ffcc){return _0x25ffcc();},'UQGUP':function(_0xa05acd,_0x2a1dab,_0x1be84f){return _0xa05acd(_0x2a1dab,_0x1be84f);}};let _0x27f774=_0x5a909c[_0x3583('‫f7','oCp]')](Post_request,'fenrun/lqsave',_0x3583('‮f8','7cLi')+_0x325ce8);return new Promise((_0x3afb23,_0x3ad28a)=>{$[_0x3583('‮f9','QJL7')](_0x27f774,async(_0x416e45,_0xeb6006,_0xb6763f)=>{try{if(_0x416e45){console[_0x3583('‮c3','eswM')](_0x3583('‮fa','n$^d')+$[_0x3583('‫fb','UNfv')]+'\x20领奖励】:\x20网络请求失败');subTitle+=_0x3583('‫a2','bO]*')+$[_0x3583('‮fc','Ibun')]+_0x3583('‮fd','3BNc');}else{let _0x4d6002=JSON['parse'](_0xb6763f);if(_0x5a909c[_0x3583('‫fe','7cLi')](_0x4d6002[_0x3583('‫ff','zzJj')],0x0)){if(_0x5a909c[_0x3583('‫100','9z6^')](_0x5a909c[_0x3583('‮101','c0s*')],_0x5a909c[_0x3583('‫102','9z6^')])){console['log'](_0x3583('‮40','VKFt')+$[_0x3583('‮fc','Ibun')]+_0x3583('‫103','VlIi')+_0x4d6002[_0x3583('‮104','zzJj')]);}else{console[_0x3583('‫e','1@94')](_0x3583('‫105','C%yN')+$[_0x3583('‫dc','gVrE')]+_0x3583('‫106','sqD9')+_0x4d6002['msg']);}}else if(_0x5a909c[_0x3583('‫107',']S8R')](_0x4d6002[_0x3583('‮108','VKFt')],0x65)){await list();}else{console['log'](_0x3583('‫16','eswM')+$[_0x3583('‮95','oRFM')]+_0x3583('‫109','IRcZ')+_0x4d6002[_0x3583('‫10a','Ibun')]);}}}catch(_0x50996f){if(_0x5a909c[_0x3583('‮10b','ssN%')](_0x5a909c[_0x3583('‫10c','QJL7')],_0x5a909c[_0x3583('‮10d','C%yN')])){console[_0x3583('‮3b','n&Jy')](_0x50996f,_0xeb6006);}else{fs=$[_0x3583('‮10e','zctW')]()?require('fs'):'';}}finally{_0x5a909c['xfhUy'](_0x3afb23);}});});}function Post_request(_0x170f78,_0x2c8a5c){var _0x558d8d={'RwOwT':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','XshOY':_0x3583('‫10f','C%yN'),'DkIen':_0x3583('‮110','bO]*')};let _0x516843=Math[_0x3583('‫111',')e(l')](new Date()[_0x3583('‮112','IMAj')]());return{'url':'http://frb.quancankeji.com/api/v1/'+_0x170f78,'headers':{'autoken':token,'user-agent':_0x558d8d[_0x3583('‮113','oRFM')],'Content-Type':'application/x-www-form-urlencoded','Content-Length':'0','Host':_0x558d8d[_0x3583('‮114','oCp]')],'Connection':_0x558d8d[_0x3583('‮115','Rort')],'Accept-Encoding':'gzip'},'body':_0x2c8a5c};};function Get_request(_0x1dd385){var _0x433036={'QthII':'application/x-www-form-urlencoded','XElnY':_0x3583('‮116',')e(l'),'xRdNq':_0x3583('‫117','axOT'),'CwvAF':_0x3583('‮118','oRFM')};return{'url':'http://frb.quancankeji.com/api/v1/'+_0x1dd385,'headers':{'autoken':token,'user-agent':_0x3583('‫119','C%yN'),'Content-Type':_0x433036[_0x3583('‫11a','9z6^')],'Content-Length':'0','Host':_0x433036[_0x3583('‮11b','9WJD')],'Connection':_0x433036[_0x3583('‮11c','IRcZ')],'Accept-Encoding':_0x433036['CwvAF']}};};function Js_Config(){var _0x179244={'EJNbD':'MtuYd','kZCqt':_0x3583('‫11d','W5WM'),'Krxga':function(_0x5dcf68,_0x5a9b4b){return _0x5dcf68!=_0x5a9b4b;},'MDnVe':function(_0x4f6b90){return _0x4f6b90();},'lJjwV':'https://gitee.com/soy-tool/app-script/raw/master/config/Config.js','zNvQt':_0x3583('‫11e','1Y&F')};let _0x55a2ee={'url':_0x179244[_0x3583('‮11f','y!zy')],'headers':{'User-Agent':_0x179244[_0x3583('‮120','axOT')]}};return new Promise((_0x489632,_0x24e2ff)=>{var _0x55e39b={'lqWAw':_0x179244[_0x3583('‫121','9z6^')],'ZMyio':_0x179244['kZCqt'],'NBgdl':function(_0x4c641f,_0xe0d570){return _0x179244['Krxga'](_0x4c641f,_0xe0d570);},'YihGo':_0x3583('‫122','ssN%'),'sBUne':function(_0x59898c,_0x5b7f50){return _0x59898c!==_0x5b7f50;},'ZHhfl':_0x3583('‫123',')e(l'),'cDuCn':_0x3583('‮124','UNfv'),'HofBE':function(_0x47ec7d){return _0x179244[_0x3583('‮125','uWRH')](_0x47ec7d);}};$['get'](_0x55a2ee,async(_0x384684,_0x16c42e,_0x430d4e)=>{try{if(_0x384684){console[_0x3583('‫e8','IMAj')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x3583('‮126','y!zy'));return;}else{if(_0x55e39b[_0x3583('‮127','mkAd')]!==_0x55e39b[_0x3583('‮128','2&a$')]){let _0x295dfd=JSON['parse'](_0x430d4e);if(_0x55e39b[_0x3583('‫129','We&b')](_0x295dfd[_0x55e39b[_0x3583('‮12a','n$^d')]][0x0]['sdsj'][_0x3583('‫12b','$Wp1')],0x1)){console[_0x3583('‮24','gVrE')]('\x0a【soy脚本提示---跑路了】:\x20'+num['sdsj'][_0x3583('‮12c','QJL7')]);return;}}else{console['log']('['+TG_ID+_0x3583('‫12d','Rort')+body[_0x3583('‮12e','IPRP')]);}}}catch(_0x1a8892){console['log'](_0x1a8892,_0x16c42e);}finally{if(_0x55e39b[_0x3583('‫12f','QJL7')](_0x55e39b[_0x3583('‫130','bO]*')],_0x55e39b[_0x3583('‮131','IPRP')])){_0x55e39b['HofBE'](_0x489632);}else{console[_0x3583('‫af','yjaU')](method+'请求API失败');console[_0x3583('‫132','zctW')](JSON[_0x3583('‮133','n$^d')](err));}}});});}let MarkCode='',Token='';let appid=_0x3583('‫134','IPRP'),serverUrl='http://yyz.soyyun.top/api.php?app=10000&act=';async function httpRequest(_0x1304a0,_0x1132cb){var _0x4c2103={'Uwhnf':function(_0x2e4854,_0x5bcd89){return _0x2e4854===_0x5bcd89;},'GVzyI':_0x3583('‫135','$Wp1'),'ReTba':function(_0x2bb62b,_0x113be4){return _0x2bb62b===_0x113be4;},'LxiRN':function(_0x4a5cae){return _0x4a5cae();}};httpResult=null;return new Promise(_0x17b274=>{$[_0x1304a0](_0x1132cb,async(_0x4a8e16,_0x49e009,_0x563ff1)=>{if(_0x4c2103[_0x3583('‫136','uWRH')](_0x4c2103[_0x3583('‮137','VKFt')],_0x3583('‫138','S0@y'))){console[_0x3583('‮139','mkAd')]('['+TG_ID+_0x3583('‮13a','Rdjk')+body[_0x3583('‫13b','3BNc')]);}else{try{if(_0x4c2103['ReTba'](_0x3583('‮13c','Rrue'),_0x3583('‮13d','ssN%'))){if(_0x4a8e16){console[_0x3583('‫98','PI*X')](_0x1304a0+'请求API失败');console['log'](JSON['stringify'](_0x4a8e16));}else{httpResult=_0x563ff1;httpResponse=_0x49e009;if(log)console['log'](httpResult);}}else{console[_0x3583('‫13e','Rort')](e,_0x49e009);}}catch(_0x18592b){console['log'](_0x18592b,_0x49e009);}finally{_0x4c2103[_0x3583('‫13f','Ibun')](_0x17b274);}}});});}async function login(){var _0xb438c3={'onLbJ':function(_0x1ec22b,_0x2fa140){return _0x1ec22b+_0x2fa140;},'sPtIQ':function(_0x517c9c,_0x5bc9f8){return _0x517c9c+_0x5bc9f8;},'HEXrw':_0x3583('‮140','oCp]'),'cBqsQ':function(_0x536c51,_0x2a15a6,_0x3e474f){return _0x536c51(_0x2a15a6,_0x3e474f);},'QuONC':_0x3583('‫141','oCp]'),'iAlxn':function(_0x9948f0,_0x1401b8){return _0x9948f0==_0x1401b8;},'yMuCl':'OJUoz','hwNiu':'KbsKw','DCGFb':_0x3583('‮142','QJL7')};var _0x109753=Math[_0x3583('‫143','PI*X')](Date[_0x3583('‫144','1@94')]()/0x3e8);var _0x17293d=_0x3583('‮145','Tu0!')+TG_ID+_0x3583('‫146','eswM')+MarkCode+_0x3583('‫147','9WJD')+_0x109753;var _0x47e25d=CryptoJs[_0x3583('‮148','PI*X')](_0xb438c3[_0x3583('‮149','1Y&F')](_0xb438c3[_0x3583('‮14a','zctW')](_0x17293d,'&'),appid))['toString']();_0x17293d=_0xb438c3[_0x3583('‫14b','ssN%')](_0x17293d,_0xb438c3['HEXrw'])+_0x47e25d;let _0x3ecf42={'url':serverUrl+_0x3583('‫14c','ssN%'),'headers':{'user-agent':yyz_UA},'body':_0x17293d};await _0xb438c3[_0x3583('‮14d','Tu0!')](httpRequest,_0xb438c3[_0x3583('‫14e','yjaU')],_0x3ecf42);let _0x2dd734=httpResponse;if(!_0x2dd734)return;if(_0xb438c3[_0x3583('‮14f','VlIi')](_0x2dd734[_0x3583('‮150','$Wp1')],0xc8)){if(_0x3583('‮151','1Y&F')===_0xb438c3['yMuCl']){console['log'](_0x3583('‮152','yjaU')+$[_0x3583('‫153','IPRP')]+_0x3583('‮154','S0@y'));subTitle+=_0x3583('‮155','2&a$')+$[_0x3583('‮156','S0@y')]+_0x3583('‫157','Ibun');}else{let _0xa1e9ed=JSON['parse'](_0x2dd734[_0x3583('‫158','S0@y')]);if(_0xa1e9ed['code']==0xc8){if(_0xb438c3[_0x3583('‫159','oCp]')]===_0x3583('‮15a','6F(7')){console['log'](_0x3583('‮15b','W5WM'));}else{Token=_0xa1e9ed[_0x3583('‫15c','7cLi')][_0x3583('‫15d','axOT')];fs[_0x3583('‫15e','oRFM')](_0x3583('‮15f','QX^Y'),_0xa1e9ed[_0x3583('‫160','$Wp1')]['token']);await $['wait'](0x64);await get_vip();}}else if(_0xb438c3[_0x3583('‮161','7cLi')](_0xa1e9ed[_0x3583('‫162','Rdjk')],0x71)){if(_0xb438c3[_0x3583('‫163','Ibun')]===_0xb438c3[_0x3583('‮164','We&b')]){await user_reg();}else{console[_0x3583('‮165','VKFt')](e,response);}}else{console[_0x3583('‫166','$Wp1')]('['+TG_ID+_0x3583('‫167','IPRP')+_0xa1e9ed[_0x3583('‫168','yjaU')]);}}}else{console[_0x3583('‮169','Tu0!')]('['+TG_ID+']:\x20登录失败:\x20返回'+_0x2dd734[_0x3583('‫16a','Rrue')]);}}async function user_reg(){var _0x44b2c2={'caVsa':_0x3583('‫16b','PI*X'),'Nmepu':'Keep-Alive','OchzP':_0x3583('‫16c','Rrue'),'kYCwR':function(_0x3867ea,_0x4e83bf){return _0x3867ea/_0x4e83bf;},'PYheE':function(_0x2e5cfa,_0x345105){return _0x2e5cfa+_0x345105;},'sWaDF':function(_0x2a301b,_0x4bc9d2,_0xa2cd97){return _0x2a301b(_0x4bc9d2,_0xa2cd97);},'vUaBV':_0x3583('‮16d','zzJj'),'jCYHH':function(_0x58ce5d,_0x5f3111){return _0x58ce5d==_0x5f3111;},'FrYNM':function(_0x3e9a53,_0x12fd0a){return _0x3e9a53===_0x12fd0a;},'xPuNw':_0x3583('‮16e','$Wp1'),'AlOqU':function(_0x4f3c7f){return _0x4f3c7f();},'zhygK':function(_0x57299e,_0x1c8a26){return _0x57299e!==_0x1c8a26;},'rdhAg':_0x3583('‮16f','$Wp1'),'BmbMj':_0x3583('‮170','PI*X')};var _0x8b60c4=Math[_0x3583('‮171','7cLi')](_0x44b2c2[_0x3583('‮172','PI*X')](Date['now'](),0x3e8));var _0x5935b4='user='+TG_ID+'&password=123456&inv=soyyun&markcode='+MarkCode+_0x3583('‫173','QX^Y')+_0x8b60c4;var _0x2c87d6=CryptoJs[_0x3583('‮174','3BNc')](_0x44b2c2[_0x3583('‮175','Ibun')](_0x5935b4,'&')+appid)[_0x3583('‮176','n&Jy')]();_0x5935b4=_0x44b2c2['PYheE'](_0x5935b4+_0x3583('‮177','IMAj'),_0x2c87d6);let _0x268443={'url':serverUrl+'user_reg','headers':{'user-agent':yyz_UA},'body':_0x5935b4};await _0x44b2c2['sWaDF'](httpRequest,_0x44b2c2[_0x3583('‮178','Rdjk')],_0x268443);let _0x3e7a99=httpResponse;if(!_0x3e7a99)return;if(_0x44b2c2[_0x3583('‮179','Tu0!')](_0x3e7a99['status'],0xc8)){if(_0x44b2c2[_0x3583('‮17a','IPRP')](_0x3583('‮17b','UNfv'),_0x44b2c2[_0x3583('‫17c','IMAj')])){console[_0x3583('‮139','mkAd')](_0x3583('‮17d','gVrE'));return;}else{let _0x503c4c=JSON[_0x3583('‮17e','g(Xd')](_0x3e7a99[_0x3583('‫17f','xIkY')]);if(_0x503c4c[_0x3583('‮180','W5WM')]==0xc8){await $['wait'](0x64);await _0x44b2c2['AlOqU'](login);}else{console[_0x3583('‫166','$Wp1')]('['+TG_ID+']:\x20注册授权:\x20'+_0x503c4c[_0x3583('‮181','IMAj')]);}}}else{if(_0x44b2c2['zhygK'](_0x44b2c2['rdhAg'],_0x44b2c2['BmbMj'])){console[_0x3583('‮31','S0@y')]('['+TG_ID+_0x3583('‮182','UNfv')+_0x3e7a99[_0x3583('‫183','ejkj')]);}else{return{'url':_0x3583('‫184','eswM')+url,'headers':{'autoken':token,'user-agent':_0x3583('‮185','zctW'),'Content-Type':_0x44b2c2[_0x3583('‫186','Rdjk')],'Content-Length':'0','Host':_0x3583('‫187','We&b'),'Connection':_0x44b2c2[_0x3583('‮188','W5WM')],'Accept-Encoding':_0x44b2c2[_0x3583('‫189','Rort')]}};}}}async function get_vip(){var _0x1d8d1e={'ogKon':function(_0x369bc7,_0xfc2f32){return _0x369bc7/_0xfc2f32;},'HNfpS':function(_0x58dee9,_0x405d98){return _0x58dee9+_0x405d98;},'gkBZf':function(_0x1634ca,_0x56e27c){return _0x1634ca+_0x56e27c;},'PCDqY':_0x3583('‫18a','2&a$'),'IWdxJ':function(_0x2cf461,_0x52f15c,_0x52be76){return _0x2cf461(_0x52f15c,_0x52be76);},'YsSVs':'post','pabWT':function(_0x5dd666,_0x3abbe9){return _0x5dd666==_0x3abbe9;},'qLbFV':function(_0x33146f){return _0x33146f();},'vYGiA':function(_0x335f20){return _0x335f20();}};var _0x5bb929=Math[_0x3583('‮18b','g(Xd')](_0x1d8d1e[_0x3583('‮18c','g(Xd')](Date['now'](),0x3e8));var _0x343872=_0x3583('‫18d','IPRP')+Token+_0x3583('‫18e','QJL7')+_0x5bb929;var _0x2d0f84=CryptoJs[_0x3583('‮18f','ejkj')](_0x1d8d1e[_0x3583('‫190',']S8R')](_0x343872,'&')+appid)[_0x3583('‫191','oCp]')]();_0x343872=_0x1d8d1e[_0x3583('‫192',')e(l')](_0x343872+_0x1d8d1e[_0x3583('‫193','1@94')],_0x2d0f84);let _0xe06bce={'url':serverUrl+_0x3583('‮194','1@94'),'headers':{'user-agent':yyz_UA},'body':_0x343872};await _0x1d8d1e[_0x3583('‫195','Tu0!')](httpRequest,_0x1d8d1e['YsSVs'],_0xe06bce);let _0xd0d927=httpResponse;if(!_0xd0d927)return;if(_0x1d8d1e[_0x3583('‮196','3BNc')](_0xd0d927[_0x3583('‫197','VKFt')],0xc8)){let _0x2358f7=JSON['parse'](_0xd0d927[_0x3583('‫198','IMAj')]);if(_0x1d8d1e[_0x3583('‮196','3BNc')](_0x2358f7['code'],0xc8)){await $[_0x3583('‮199',')e(l')](0x64);await _0x1d8d1e['qLbFV'](Get_Config);}else if(_0x1d8d1e[_0x3583('‮19a','yjaU')](_0x2358f7[_0x3583('‮19b','eswM')],0xc9)){if(yyz_Kami){await _0x1d8d1e[_0x3583('‮19c','bO]*')](card);}else{await _0x1d8d1e[_0x3583('‫19d','yjaU')](createOrder);}}else{console[_0x3583('‫166','$Wp1')]('['+TG_ID+']:\x20验证账号:\x20非VIP不能继续使用脚本，尝试卡密激活...');}}else{if(_0x3583('‮19e','QX^Y')!==_0x3583('‫19f','We&b')){console[_0x3583('‫166','$Wp1')]('['+TG_ID+']:\x20验证账号:\x20返回'+_0xd0d927[_0x3583('‫1a0','IPRP')]);}else{throw new Error(_0x3583('‫1a1','C%yN'));}}}async function card(){var _0x2fbc3c={'rIUNO':function(_0x313faf,_0x2f26ce){return _0x313faf/_0x2f26ce;},'KsSbH':function(_0x32979d,_0x5515cb){return _0x32979d+_0x5515cb;},'QURpu':function(_0x16fbbc,_0xd89cc0){return _0x16fbbc+_0xd89cc0;},'qqLAf':function(_0x7c8b88,_0x214bd5){return _0x7c8b88+_0x214bd5;},'yUZgx':'&sign=','luiYT':_0x3583('‮1a2','IPRP'),'rqGhA':function(_0x5a66cd,_0x5086e1){return _0x5a66cd==_0x5086e1;},'UFDrD':function(_0x444352,_0x37178c){return _0x444352===_0x37178c;},'EGBbi':_0x3583('‮1a3','g(Xd'),'OPXtr':function(_0x53dee4,_0x5a3cc1){return _0x53dee4===_0x5a3cc1;},'rwpcs':_0x3583('‮1a4',')e(l'),'cnCyJ':_0x3583('‮1a5','ejkj')};var _0x441e4e=Math[_0x3583('‮1a6','uWRH')](_0x2fbc3c[_0x3583('‮1a7','1@94')](Date[_0x3583('‮1a8','yjaU')](),0x3e8));var _0x4ea4c3=_0x3583('‮1a9','Rdjk')+Token+'&kami='+yyz_Kami+'&t='+_0x441e4e;var _0x5a6b4d=CryptoJs[_0x3583('‫1aa','Rort')](_0x2fbc3c['KsSbH'](_0x2fbc3c[_0x3583('‫1ab','QX^Y')](_0x4ea4c3,'&'),appid))[_0x3583('‮1ac','n$^d')]();_0x4ea4c3=_0x2fbc3c['QURpu'](_0x2fbc3c[_0x3583('‫1ad','C%yN')](_0x4ea4c3,_0x2fbc3c[_0x3583('‮1ae','IPRP')]),_0x5a6b4d);let _0x4c7471={'url':serverUrl+_0x3583('‮1af','C%yN'),'headers':{'user-agent':yyz_UA},'body':_0x4ea4c3};await httpRequest(_0x2fbc3c[_0x3583('‫1b0','2&a$')],_0x4c7471);let _0x1c3712=httpResponse;if(_0x2fbc3c['rqGhA'](_0x1c3712[_0x3583('‮1b1','9z6^')],0xc8)){let _0x178d41=JSON['parse'](_0x1c3712[_0x3583('‮1b2','QX^Y')]);if(_0x178d41[_0x3583('‫1b3',']S8R')]==0xc8){if(_0x2fbc3c[_0x3583('‫1b4','S0@y')](_0x2fbc3c['EGBbi'],_0x2fbc3c['EGBbi'])){await Get_Config();}else{console[_0x3583('‫1b5','oRFM')]('['+TG_ID+_0x3583('‫1b6','IPRP')+_0x1c3712[_0x3583('‮1b7','Ibun')]);}}else{console['log']('['+TG_ID+_0x3583('‫1b8','mkAd')+_0x178d41[_0x3583('‫1b9','W5WM')]);}}else{if(_0x2fbc3c[_0x3583('‫1ba','zzJj')](_0x2fbc3c[_0x3583('‫1bb','g(Xd')],_0x2fbc3c[_0x3583('‮1bc','VlIi')])){console[_0x3583('‫1bd','uWRH')](_0x3583('‮1be',')e(l')+$['index']+_0x3583('‮1bf',')e(l')+_0x1c3712[_0x3583('‫1c0','2&a$')]);}else{console['log']('['+TG_ID+_0x3583('‫1c1','ejkj')+_0x1c3712['status']);}}}async function motion(){var _0x7ec7aa={'NnxFc':function(_0xf671e1){return _0xf671e1();},'LMdOx':function(_0x47c0f1,_0x980fb){return _0x47c0f1/_0x980fb;},'BszhN':function(_0x27e840,_0x47ff1a){return _0x27e840+_0x47ff1a;},'AGkMF':function(_0x5d575b,_0x2f802d){return _0x5d575b+_0x2f802d;},'UCZwY':function(_0x101c8c,_0x28a223,_0x30a332){return _0x101c8c(_0x28a223,_0x30a332);},'ezmSR':function(_0x15eb05,_0x2ead5f){return _0x15eb05==_0x2ead5f;},'AhDYv':function(_0xf3ca21,_0x3a25c4){return _0xf3ca21===_0x3a25c4;},'tcvlS':'PJhSN','tNlYq':function(_0xa04d35,_0x24ae10){return _0xa04d35!==_0x24ae10;},'HbFBI':'cNREQ','lGxeb':_0x3583('‫1c2',')e(l')};var _0x39940c=Math[_0x3583('‫1c3','xIkY')](_0x7ec7aa['LMdOx'](Date[_0x3583('‮1c4','QX^Y')](),0x3e8));var _0x3ce7ee=_0x3583('‮1c5','zctW')+Token+_0x3583('‮1c6','C%yN')+_0x39940c;var _0x17452b=CryptoJs['MD5'](_0x7ec7aa[_0x3583('‫1c7','gVrE')](_0x7ec7aa[_0x3583('‮1c8','IPRP')](_0x3ce7ee,'&'),appid))['toString']();_0x3ce7ee=_0x7ec7aa[_0x3583('‮1c9','9WJD')](_0x7ec7aa['AGkMF'](_0x3ce7ee,_0x3583('‫1ca','9WJD')),_0x17452b);let _0x420db4={'url':serverUrl+_0x3583('‫1cb','IPRP'),'headers':{'user-agent':yyz_UA},'body':_0x3ce7ee};await _0x7ec7aa[_0x3583('‮1cc','VlIi')](httpRequest,_0x3583('‫1cd','S0@y'),_0x420db4);let _0x121bd8=httpResponse;if(!_0x121bd8)return;if(_0x7ec7aa['ezmSR'](_0x121bd8[_0x3583('‫183','ejkj')],0xc8)){if(_0x7ec7aa['AhDYv'](_0x7ec7aa[_0x3583('‫1ce','3BNc')],_0x7ec7aa[_0x3583('‫1cf','sqD9')])){let _0x580c54=JSON[_0x3583('‫1d0','We&b')](_0x121bd8[_0x3583('‫1d1','IRcZ')]);if(_0x7ec7aa[_0x3583('‮1d2','mkAd')](_0x580c54[_0x3583('‮1d3','1@94')],0xc8)){if(_0x7ec7aa[_0x3583('‮1d4','gVrE')](_0x7ec7aa[_0x3583('‫1d5','mkAd')],_0x3583('‮1d6','c0s*'))){await $[_0x3583('‮1d7','We&b')](0x64);await get_vip();}else{yyz_type=0x1;}}else{await login();}}else{_0x7ec7aa[_0x3583('‮1d8','2&a$')](resolve);}}else{if(_0x7ec7aa[_0x3583('‮1d9','uWRH')](_0x7ec7aa[_0x3583('‫1da','zzJj')],_0x7ec7aa[_0x3583('‮1db','$Wp1')])){console[_0x3583('‫1dc',']S8R')](e,response);}else{console[_0x3583('‮d8','n$^d')]('['+TG_ID+_0x3583('‮1dd','7cLi')+_0x121bd8['status']);}}}async function Get_Token(){var _0x48eea4={'AmUMp':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76','HypXh':_0x3583('‮1de','Rort'),'gUTYz':'utf8','RmsDn':function(_0x2da23f,_0x285176){return _0x2da23f(_0x285176);},'VsPBd':function(_0x5c2113,_0x4969d9){return _0x5c2113!==_0x4969d9;},'fbOtv':'ZXBzT'};try{if(_0x3583('‫1df','ejkj')!==_0x48eea4[_0x3583('‫1e0','3BNc')]){httpResult=data;httpResponse=resp;if(log)console['log'](httpResult);}else{Token=fs[_0x3583('‮1e1','ejkj')](_0x3583('‮15f','QX^Y'),_0x48eea4[_0x3583('‮1e2','eswM')]);await _0x48eea4[_0x3583('‫1e3','oRFM')](Get_IP,'m');}}catch(_0x57dcfd){if(_0x48eea4[_0x3583('‫1e4','g(Xd')](_0x48eea4[_0x3583('‮1e5','VlIi')],_0x48eea4[_0x3583('‮1e6','gVrE')])){lfb_data=app_soy_lfb_data[i][_0x3583('‮1e7','VKFt')]('&');TG_ID=lfb_data[0x0];yyz_Kami=lfb_data[0x1];yyz_type=lfb_data[0x2];token=lfb_data[0x3];yyz_UA=_0x48eea4[_0x3583('‮1e8',']S8R')];if(!TG_ID){console[_0x3583('‫1e9','QJL7')](_0x3583('‫1ea','7cLi'));}else if(!yyz_type){yyz_type=0x1;}}else{await Get_IP('l');}}}async function Get_IP(_0x3e0fbc){var _0x23211b={'EcFzU':'http://ifconfig.me/ip','zILFA':function(_0x2d3fe0,_0x2f2c46,_0x3e363c){return _0x2d3fe0(_0x2f2c46,_0x3e363c);},'KiHcm':_0x3583('‮1eb','Ibun'),'DpQDD':function(_0x3431ef,_0x4fbe40){return _0x3431ef==_0x4fbe40;},'xUWqL':function(_0x2e9aa4,_0x45ac77){return _0x2e9aa4+_0x45ac77;},'HcKms':_0x3583('‮1ec','ejkj'),'UlhyS':function(_0xf0e93b,_0x178592){return _0xf0e93b==_0x178592;},'LTMnG':function(_0x29efe3,_0x41bbfd){return _0x29efe3===_0x41bbfd;},'DBsYS':_0x3583('‫1ed','PI*X'),'PQmmQ':_0x3583('‮1ee','QJL7'),'uhVij':'ZsvPv'};let _0x5cc730={'url':_0x23211b['EcFzU']};await _0x23211b[_0x3583('‫1ef','oCp]')](httpRequest,_0x23211b[_0x3583('‫1f0','Rort')],_0x5cc730);let _0x22166a=httpResponse;if(!_0x22166a)return;if(_0x23211b['DpQDD'](_0x22166a[_0x3583('‫1f1',')e(l')],0xc8)){if(_0x22166a['body']){MarkCode=CryptoJs['MD5'](_0x23211b[_0x3583('‫1f2','Ibun')](TG_ID,_0x22166a[_0x3583('‫1f3','VKFt')])+_0x23211b['HcKms'])[_0x3583('‫1f4','gVrE')]();await $[_0x3583('‮1d7','We&b')](0x64);if(_0x23211b[_0x3583('‫1f5','axOT')](_0x3e0fbc,'m')){await motion();}else if(_0x23211b[_0x3583('‫1f6','g(Xd')](_0x3e0fbc,'l')){if(_0x23211b[_0x3583('‫1f7',')e(l')](_0x23211b['DBsYS'],_0x3583('‮1f8','mkAd'))){app_soy_lfb_data=process[_0x3583('‮1f9','$Wp1')][_0x3583('‫1fa','PI*X')]['split']('\x0a');}else{await login();}}}else{console[_0x3583('‮1fb','zzJj')]('['+TG_ID+_0x3583('‮1fc','uWRH'));}}else{if(_0x23211b['LTMnG'](_0x23211b[_0x3583('‮1fd','Rdjk')],_0x23211b[_0x3583('‫1fe','gVrE')])){app_soy_lfb_data=process[_0x3583('‫1ff','2&a$')][_0x3583('‮1d','IMAj')][_0x3583('‫200','PI*X')]('@');}else{console['log']('['+TG_ID+_0x3583('‫201','bO]*')+_0x22166a[_0x3583('‫202','Tu0!')]);}}}async function createOrder(){var _0x2ab2b5={'edDDA':function(_0x3f1449,_0x22dd59,_0xea302d){return _0x3f1449(_0x22dd59,_0xea302d);},'FyLUw':function(_0x20e57e,_0x13b9d1){return _0x20e57e==_0x13b9d1;},'jObai':function(_0x5ce1a3,_0x44f2cf){return _0x5ce1a3===_0x44f2cf;},'oSACL':_0x3583('‮203','Rrue'),'IcegV':_0x3583('‫204','g(Xd'),'sjPpN':function(_0x432c91,_0x4ec163){return _0x432c91!==_0x4ec163;},'QHDUm':_0x3583('‫205','eswM')};let _0x500651=CryptoJs[_0x3583('‫206','Rdjk')](''+MarkCode+TG_ID+yyz_type+_0x3583('‮207',')e(l'))[_0x3583('‫1f4','gVrE')]();let _0x56bfe8=_0x3583('‫208','S0@y')+MarkCode+_0x3583('‫209','W5WM')+yyz_type+_0x3583('‮20a','7cLi')+_0x500651+_0x3583('‮20b','Ibun')+TG_ID+_0x3583('‫20c','C%yN');let _0x438454={'url':'http://vmq.soyyun.top/createOrder\x20','headers':{'user-agent':yyz_UA},'body':_0x56bfe8};await _0x2ab2b5['edDDA'](httpRequest,'post',_0x438454);let _0x77b53=httpResponse;if(!_0x77b53)return;if(_0x77b53['status']==0xc8){let _0x5d7885=JSON[_0x3583('‫20d','Rdjk')](_0x77b53[_0x3583('‫20e','6F(7')]);if(_0x2ab2b5[_0x3583('‫20f','1@94')](_0x5d7885[_0x3583('‮210','bO]*')],0x1)){if(_0x2ab2b5['jObai'](_0x2ab2b5[_0x3583('‫211','9z6^')],_0x2ab2b5[_0x3583('‮212','UNfv')])){console[_0x3583('‫213','xIkY')]('['+TG_ID+_0x3583('‮214','ejkj')+_0x5d7885[_0x3583('‫215','oRFM')]);}else{console['log']('['+TG_ID+_0x3583('‮216','IPRP')+_0x5d7885[_0x3583('‫48','$Wp1')][_0x3583('‮217','QX^Y')]);}}else{if(_0x2ab2b5[_0x3583('‮218','VKFt')](_0x2ab2b5['QHDUm'],_0x2ab2b5[_0x3583('‮219','VKFt')])){console[_0x3583('‮21a','9z6^')](_0x3583('‫21b','Ibun'));return;}else{console['log']('['+TG_ID+']:\x20获得支付链接:\x20返回'+_0x5d7885[_0x3583('‮21c','PI*X')]);}}}else{console[_0x3583('‮4e','2&a$')]('['+TG_ID+_0x3583('‫21d','PI*X')+_0x77b53[_0x3583('‮1b7','Ibun')]);}};_0xodg='jsjiami.com.v6';



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