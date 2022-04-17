/*

软件名称:优享鑫生活

项目注册地址(微信打开):https://gitee.com/soy-tool/app-script/blob/master/picture/lmyx.jpg

签到获得分红币,分红模式,目前微信授权,绑定手机号,可能没有毛


固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
注释：
TG频道用户ID关注 @getmyid_bot 机器人获取
激活卡密关注 @soyyun_bot 发送 /start按提示获取，如果支付失效请联系【暂未启用】
TG频道:【暂未启用】


脚本需要的变量:
变量名:soy_yxxsh_data
变量值:token&&UA
注释:token抓包找到带有有 https://youxiang.lglm.shop/web/index.php 的链接,链接上的access_token值即是,UA是请求头上的User-Agent值(选填)


多个号用 @ 或 # 换行 隔开

cron 31 ,9,17 * * * wx_yxxsh.js

*/


const $ = new Env('【优享鑫生活22/04/17_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';

var _0xod2='jsjiami.com.v6',_0xod2_=['‮_0xod2'],_0x4a67=[_0xod2,'PRpTw4Lvvq7ml6ETPsO277+w','w5kvVsOleA==','JMOCOsOx776d5pavY8KRwqbvv5PmlK4=','ExU4','wpFkwq1LwoI=','wqokwpE=','w5hVwq3DjMOGw4c=','w7HCisK2RA==','w4peWA==','wp8+PsO3bQ==','PEVNIWfCocOURg==','wqDDuV0w','cjpJ','FMK2wrA=','wqFAw5c=','acOTb0Y=','wpDDl8OX','woDCm8KD','wq/CscK4wpvDtA==','wrbDu8O3','wptTw4A=','5rOS5YWt5L6D5oCp776NYsOfwp9kaQRVfcKz772t','wotxw6bDt++/rg==','wrjDkAXCrcKr','w6dYNcO/fQ==','w6Z6w53DtcOXHVw=','w6h9wpRlTg==','w7IlT8O7UQ==','wog0w4wXTQ==','BCHDkkPDmcKyw7ANWXEmw7INwo8=','w4E4w6IFw60=','wqcJw6PjgrnlhoHDkw==','UeS7sui3teWOm+ODv3TCnEpz','HhLCr2LCnMKQNh8OwoTDjsORIw==','BQs3wpXCuw==','BUVkPHnCpMObDmJOwr1Rw5APTmbCh8O4ZMO4w4bCjsOkN1bCncOuwrLCusKLJ8KCw49Xw6Jlw6gkfQExR8OywovCtcOVGMOSwojDvMKUEMOmwqHCtHbCoHgVwpZnwqMuABUaeT8Pw5pew6zDowrCh8OodcOtOmNDXXLDvsKXZcOeFcK1Z8KMwqgAw7DCiTsfwrYfw43Cr8K6w4ElwqlwIXbCnsO1ERJnWl1tU8KNU8Kqw4kFw7vCr8K7NFMqWcKew4LDuCDDgMKhw43DoMOTwo9owrpdwo7DkmDCmx3DocOSCcOjIXpNw6M5Ek7DocOzw7TDrxJCeMKWO3fCkMK/PMK/wobCscOTw5nDin4Bw5Zdw5UHAsK/w5/DhlzDmzDCuF5GwpM1w6BObG7CoRNbL8OSw5zDjDQUVgHDj8OcWC1Xw7DDocK5w61DM8Kw','w659Eg==','wrflvr/lpY3jgrPnrLFr','w5bkurPotYnljLvkuJ7lirzjgoo=','w6t8ERXCqg==','XigiwpzCiA==','csKPMA3Dkw==','w7Qaw7IiZQ==','AyvDsEjDtMK8w6gBbHw=','w75Lw5xfwo0=','w7IaYsOudQ==','w43Cj8Kpwps=','e+ODiMKgA8KX6IWT5p6N5o6n56WDU8OmYOi2tuWPnMOp','RADDv3vDkg==','b8OLAA==','JOilvuecgOW5nOWRleOAjMKeRQ==','eidN','wr7CuVA=','w7XjgIXCh8Kxwq3ohaLmn5DmjqbnpLLDtB7Cg+i2g+WOp8KY','w5NRWBAy','wprop73nnLfluIrlkIDjgrbDjg4=','wpJmwpM=','HxU/wpnCtw==','wq7oponnnpbluLnlka3jgI3CoMK8','wpPDgTM=','w5DDikjCusKo','w6rjgJXohp7mnYzmjrrnp67jgZfvvZbpqa3orJ/kuL3pg4/lh4o75Yyy6IGd5p+x5Yuv5ZqT5Yy35ZqrauWloumdgeWLnOeTi+WLg+WNuumAneavvOaKhjzCui5fW2DDrA==','w5njgoXDpzHDo+iHpeafsuaNteentBvDrMKV6La55YyzwrQ=','w7NawrrDjMKI','w4DnrbvlirTjgbFQw7TnvJfnupDorJbmspzlpIHot7A=','w5zDjHrCt8Ku','wr7CuVB9wrZ7','YsOVZUJzccOd','w4UIY8O2QA==','JjJWw4/DtQ==','wqrCg0RPwpE=','wrrDmCB0Fw==','QUPCjmbDjA==','RCl6w65NwrldZMOZwo5twqAnAQ==','w5bCpcKRw5lRDsKjAMKWYMOjDnrCqSMbMCDCssOdwrTCncKkKWbCtC9m','AcOOE8O2w6o=','w7bCnMKUWcO6','w4phCsOtdQ==','JMKgwoY4wo8=','BCU7JcOg','w54nWMOifg==','wrzDrcKzwozDnw==','dsOew5nCqRw=','w5wtw54HVQ==','wq44esO9w7I=','w6BwwrxLWA==','w7rjg6rClMOTWuiFp+afpuaOv+engnDDvA3otaTljbA6','wqYkwpbCqsOf','wonnra/lia/jgo8JwoTnvLTnuaXorYXms4DlprTota4=','w7Xjg4rCqMKHwrrohKHmnYzmj7Tnp5PCpGnClui3iOWPgiY=','wpbCtMK/wo3Cuw==','w4DnrKLlipPjgYc4Xee+nOe4h+isoOazs+Wnkei3gg==','wpA9w5ElZw==','w57DkMOiw4Y=','wpnDolw=','wovjgI/DmsOOw4foharmnJXmjr3npJTCjGoE6Lad5Y20w4w=','wozCkcK9HVA=','N+esquWImuOBpcOvYg==','DuOCrHhMZuiEh+aeiOaOteelu1lbw5jotYDljYjChA==','wqfnrZLliZnjg5fCmsK7','wqTjg7DCvsKRJuiFneadqOaPq+enimAWLui3veWNlsK3','w4Vdwop3cA==','wr/CpVA=','w5fnrYLlipfjgqXDjsOW','wojCjMK+','wofDoCXCqcKx','w4LCj8Kq','dsOZakdZdMOIABINGMKW','wqbCuWRMwrZgABQ=','woxqw6M=','w6/jg6/CqhdR6Iei5py45o2C56a+ehx66LSN5Y6DEA==','wo0vw4Q=','wp5Sw4PDkcKM','w57lh5vmjrjpg5Xoo6bor4rjg4IzDg==','w6AmJMO3dS/Ds8Oaw5kXKcKsJz4=','w5IjV8OcXQ==','w7vDu0zCp8K0','wqg9w5E/QQ==','w41Dwoc9e8OPZ8KzwrfCmVzCmiPDpQFzD8Oaw67DhcOYfsO0w5cAUsOTEysRfVxTahpVw5NTwrkuCxXDh8K5wpbCicK8SFnDhmxvw6vCj1jCucO3woQ6WMKAeg==','wpA0Q8OpZSgvPcKMSUHDnkdVw595w73Dv8KkwqzCpMOYZGkBw6XDtTc=','wolDDgl+w5vDhFJC','wrECW8OLw4s=','ecOnw4bCtAs=','PmZdBn0=','woNkwolIwqk=','IAPDu2DDiA==','XcKEFg==','FcKQwrE8wqQ=','w4I4W8OnWw==','Aj/DqlvDqQ==','JDlx','w5Rrw4/CmQ==','wqMlwpU=','5rCI5YeQ5L2C5oC577yYd8Ogw7bDusOlwqfCuHTDp++9mQ==','U8O4w47vvIbmlKE=','w5MFVg==','w7Jrw5vDiMOQF1ALVw==','XzFS','w6NJCsK0w5nDq8K5','wqNHw4c=','w43DnsOi','woPDvsO3LcKt','JEV5','A+OAncKKYsOT6ISW5pyP5o+f56SawqzDkcO56LeI5Y2QEw==','wq7op6jnnqXluZPlkqLjgas1w4rnvYPnubPorpvms4Dlpo/otqg=','wpfDnDB9CQ==','N+imluecoeW4i+WSn+OBk8O0Yue9gee6k+itmOaxp+Wlnei1pA==','w6zChMKgUsOx','wqLDl8O2NsOu','w5zDgmrCsQ==','w5Z5DR/Cvg==','RsOuJUTDsA==','COOCqBRYw7voh5rmnoDmjp7np6lMw60/6LS35Y6FHw==','wozop7Hnn6Xlua3lkYLjgrY8w6E=','wqI5wpU=','wqfop67nnaLlurnlk6rjgorDt1U=','JVl5','wpVPw4A=','JeOCocOtc8K46IaP5p+K5o+S56WFwr5bTOi3nOWMmF4=','w5/opJjnn5DlupflkonjgKpaBA==','aOOBmGrDolHoh5DmnILmj6vnppfDjCvDqOi1r+WPi3U=','wqLDshfCo8KJ','wpTCoMK5wobCsQ==','w7N6w4jDhcOaGUs+V8OPJA==','XsKrwqofw4Eqw40WCg3DpCPDtV/Dpg==','wodqwq19wobDj8O4','UMKOCyg=','QMOVYlpT','woE4w4ckZw7Cvg==','wopVw4XDkD1e','ciBC','w7nCncK7UsOgK08XMQM=','A8K9wrIIwqggw40SKgfCpS4=','woHDomh8w4bDnlde','w4hbDD3CpQ==','OSQCGMOQ','R8Oww41qwrs=','wq7DkDtIJg==','w6fDnMOfw4tE','w6Bvw4DCjsONGFgfS8OJKEXDn8Omwp7DmsK1wpx/OlvDv8K9wrLCsyhAw6/DosObaz/CgcOBYsKnw6HDn8O6csKuVCHCiMKocnPDvsK1wp4uwq59BMOfVA==','DRU6wp/CtsKHLsKDw6LDimwhwosswoTDgMOCTcOkwpzDvFzDgRjDvsO0dMOd','wq/Dp8KywqnDuA==','NcOqDMODw7c=','JQEW','w5TDkcOiw4Zl','w5/lhovmjrnpg7Looo/or7rjgbEew4nnv5jnupjorYzmsqzlpITotKM=','PcKVwpofwrg=','wrtxw67Dh8Ki','Bhopwo/Cqg==','w7/CisK2RA==','ZWLCng==','wokyw4czeg==','wo3jgLwawqnDmeiGgeafoeaOpeeltMOswqQk6LeS5Y2bw4w=','KeWFnOaOm+mAl+ijpuivjeOAsjUA','w73jgKzDlMObwo3oh6zmn4Hmj7PnpIcKwrnDiOi3reWOslM=','w6/lhITmjL/pgp7ooJboro3jgo7CgcKK','HMKrwrQ=','w7/jgp1IZ8ON6Iat5pyV5o+p56WiC8O4Xei2uuWNqMKH','w4B/O8O7Sw==','wozlhaLmjozpgIjooYTorabjgJfDu8Oy','w7/Cl8KrUcOgNzEELA==','MMOuNsOFw7Y=','wo4dPsOoFg==','w47DicO1w4p8','w55regY9','MSB6w5dx','wqdmw77DmMKE','w6kVwoTCqsOVwrAvBHMPAWtDYj0pFlJmw7c7wrxlN8K6FRR4','FwFTw59L','w7lpw57DssOZ','NzjDkXvDtg==','wprDmjnCmcKc','wroNwpnCnMO/','w6c4w5MpQ3k=','wozCk8KowqTChA==','w4nChcK5','wqYGw4QmWw==','w6JCHw==','woXDthbCk8KcZcOjw5DCq8KTw4PCucOlRw==','wpJ1wrNRwpM=','w6nDuMOQw6RE','wr/Dujd0PQ==','wq7poqzliqjnuo7jg7lAL+e+u+e7juitmOawruWms+i2mw==','wrDjgK9PGjPohr3mn5jmj77npYnCmC3Dpui0tuWOi3s=','QiQowp/CvA==','w758w6BBwqY=','wobCkMK9HQ==','wrfjgq/DtcOMZOiFkeafiuaOt+ekrgvDkcOv6LSq5Yy4Pw==','w6dEw4pJwpA=','Gumhp+WJpOe7pOOChlLDkg==','w7LjgZ9gw7TDoOiFpeadkOaOrOenqXEaw5Dotq/ljqBa','aigIwqLCrA==','S+OBh2HDrsON6ISb5p2D5o6n56acw4fDiDvotLHljZ/Dtg==','w5flha3mj4Xpgq7oorjorLfjg7wZHQ==','NcO8HA==','w7TjgprCqcKgw5PohJHmn7/mj5nnpJR5w5fCmui1i+WPqcO1','wp/lh7zmjazpg47oooror5TjgJPCr8O6','w7dHwrk=','wqHpopnliq/nuIPjgq9KGQ==','w61SwpLDn8KZ','wo7poabli4vnuZzjgY59ZA==','w6M4w7o=','aemjqOWJt+e7s+OCuMKLFA==','wpU8dA==','wrfCjMKow6tv','wr/Cn8Ktw4xs','ZD0+wpzCjg==','w7jCusKlwqQa','w65CDcKjw5g=','wqLlhYPmjJfpgaroop7orYLjgoPCrsKw','w6NZw4k=','w6rjgYzDkDl76IWn5p+h5oyL56etwpzDjcOK6LSb5Y2UYw==','YeWEhuaNsOmCm+ijuOivgOOBvk3Chg==','GMK2wrcJwpY=','DeWEv+aPuemAhOijpuisreOAllkb','wp3CicKA','wq3DpRVgNQ==','Fzx/wqAQ','diRaGMK8IcKvNnkgw4EKFGxUMMKYYsOVO1bCncKnDcOTw5LDucOJwpp/w51Wwqg=','fcOTflt2fMOKAm8YEcKZC8KRw5cnw5xp','wopgwrpIw4rDjcO8w6TCp24=','w6PClcKkwqs2','woYhMsOxMQ==','LhQYIcKFw5JbKBTDkMKXPHBmwr/Dj0QxScOiw5kWJcO/','w7JAwqrDmcKDw4nCvsOgwr9Bw4R1wqXCsAoAbcKnwpLDnGNfwrMTw6LDhznCuMOnwp0Gw6/ClMOxWE0zwrskfEDDkHtbTsKNUQdgw4bCi8O7w5rDmEsCfcO9dTvDiBY=','Y8OZf2VqccOIPCQVBA==','wpnDkcO5LcO8','w6lPw5phwocUe8KC','TC84wr7CpcKAIg==','wqBzw7LDiS0=','OgrDs1/DnA==','w6dZw6BDwowf','S+aIqeS4n+WKseS8qei1l08Uw5TCk8KVYnjChcK8DsKUNOisquiGhOiiuOWsuuigqcKo','w5NMchouw4I=','aOaItuS4lOWKveS+tei2nA50w77DgSrorLLohqPoobDlr5zooJsS','w5fDmXrCpMO8Oi3DrMKjFnjCk8KdLsOnJl5MwrgREcKcw5zDicKGbgvDhXbDkmAwHyrDrUzDo8KKKh1MMgDCnsK6w4nClcKtwps=','wrpTw53DncKYwprCjAwICcKkw4XDoxIaw4/ClBcmazhHw7fDvxd5PDgbSCrDqF4sw5cPd1TDvsO3w4/CjBLCl8KqwocSZHrCkADDtsKaw47CmSrCuVY5wok9OUtKwoJOwqR/w67CpMOCA3U9TcOZb8O9w6RuBFc9bTchw4Q+wqTCmcOTwpYhw5TDksKRwrTDrDRQP2TDgRxZb8Khw51qwrPCrcOcw6lDFsKoMWbChDYDecK2wrJhwplFe8KqNGY=','AMOCw6dvw67DtsKKYwzDoFkPwp/Cmw==','KcO8LcOCw6g=','GS9Fw47Drg==','w6AmJMO3dS/Ds8Oaw5kXKcKsJz7Dqw==','w5bDmsOjw5MwKsKKDmJD','w7dmE13Dqg==','wrLDpcOkMsOzwpzCv8ORwqdZwq/Cl8Onw6nDo8Kbw6TDksOsGHg3w6fDisKWG1AuL8OMw7R6wrg=','wqHCr8KSOUs=','F8OFIcObw5c=','w6vCj8K+UcOG','w5lKwplVbg==','w6ACw68MZQ==','SyzDmVrDoQ==','wq5Iw63DlcOAwo/Co8Kzw70=','w4fDmFvCjcKg','woQLw7QidA==','LTh1','UuOCnwjDncO+6IWV5pyz5pWf5LiA5YaE6Let5aG55pil44KM772rEeOAuuadreS6t+W4pOWNiuW4hOebnuiFruacseaUieS7l+WNieWEqeS5vea1ruWOjeebiuS4ueS8uuiFs+adue+/uOS7jueVlOS5r+a2r+isoOWSqeWum+S6j+eikOeql+++l+ennOavheeUtuS7k+WVq+S5oOaJvemcpuaxk+eYsueajO++mu+/iuWQnuWLueWRm+acsOiHnui1puOAoR3jgb7kupXogo3kvJHorqnlhq/lkoHmsITmg5HjgbHlhbrno5Tmga7jgaHlrZjml7XmgqblkqfmnJXmlJXmgYPvvKTorbrmo5rmjr3mgJnlhL3ohLjoobfliK7ml4XjgIJT44Ke5p2b6IWZ5py+5pe95Lml776V56eF5q2k5Li05Lyx5YWb5L+75Y+y44CY6K6G5Z2/44CC57+x5L2f5Lu25Yyf5LmC5L215byp5b+i55ip6L+96Lyh44OJ5Yy95bqofOWRuuWKrOWRreacqOiHtui1g+ODgMOk44C95pye5Lq35a6h5LiH5L+F6Iec5p2Q6ZSK6aGn5qWt5LqY6LWJ6LSS776b5Y2W5oqi5Lyr5LuD6Zin5LuS55e25Luo5L696ISr5p2g6ZSx6K2K5a+x6IeU55qn5Li95L2Z5o+A5aWO5omS5oyC5a6+44GJfOOAheeYkuaNueaKs+mVmeaNreS8jeeWsuiFp+adkeeap+S6o+S9gOeXqeaLne+8m+WPgeaJk+S8uuS7g+matOS4gOS7s+aPjuaJv+WFsOS4g+aemOS7pOijhOS5vui/rOWOt+WYleWvksKI5Z2c5YyO5rKz5b6H5oqH55uz5YSo5rGX6Ka755m45oKX5YSs5Li16LyO6KOK5L295pGJ776B5p6V5LuF5a+y5Lin55aa5q6z5b6H6LS255uc5Lqz5L2R6Zq/56e55rCF5r+c5ou65YW35LiX5ZC/5p675qaM5LuW6Led6Lak44CQceODm+WmpuaenOS5veS+vuWMvuS/iOaIheS7neS5muiuoeS4ieiumuiGs+aeseWPuuiClua1tOWrlOS/oOeLrOWFgOaeiuWIse+/qOWKqeW7ruWNu+aVjumBkueeq+W6lOaOoOS/gOi7jeS4heiuteaYm+OBvuaJteadhuacg+isu+aYmO+9gOaJsuS6qeWyl+Wem+aWieWLpOisj+ivqOaUtuS4g+WRiOWKq+mbm+eZmOWGr+iEleaen+ODt8Ov44C95LqN5L2M5LqV5Lmq5L+C5pSU5b2S5p6a55yE5q+T6aGD55mK55ql5Li85ouN55ip5o2t5omw6Zeg5o2J5L6355eX6K6Q5LmJ5bmX55q+5Lmk5LyT6IS05p2W55uV5L6m55Sb6IOa6YGB5bqH5Lm357m66Zuv6KyB5q+B5aCr5pio44CG5p2h5Lqg5LyF55Wn6ZqT5pS75pmU5pa+5om86KON5YSC5qyG5YeH6LW05aG25puQ55ma5p6D5Yig44Cv5Lql5pSI5L6k55aI5bqA5aeB5YqK5LiB5Lq15Lyo55ur5YSS6IeJ5p2z5oiR5LuW5bqX5pe15LuW77+E5YuV6KWe5Lm65oO35bei5o+35Y6w5qy75YWd6LSt5aG45pmF44KX','wqY5wrzCoMODwqY=','wo3DtgdLNA==','w7Jbw7rDssO7','FcO3H8ORw64=','LgJDw47Dvg==','w5lnwqx1ZQ==','woLCn8KGw5hHFMK4PMKBM8Ky','wo5Hwr/Cu8K+','w6RFw4dC','w4Vuw77Dg8Oc','wos6ccOow60N','PcO7Ew==','FTbDt1/DjsKgw48RZGY=','w6rCt8K6wpcG','w5jCssKlSMON','wozDlzV8N8KDw4IUw7TCnizDjQ==','Yzt5AMKnK8KgJQ==','w6jCl8K7TA==','woDCkcKv','AyHDp3PDg8Krw6QbYloww7oXwok=','Az7DskXDjg==','AsOeAsOZw4g=','OgQlE8OZ','wqHDsMO1OsOcwpbCssOAwp1Pwq/Dmw==','wq8ww4TDgMOd','w7okw44yVXXDtMO7','wqbCpF5V','ScKRDi/Dow==','w6lEwrLDgMKE','RyUr','w6vjgJXCrFfCnuiGtuaevOaNneenqybCp2votLDljqJb','wpzDo19tw4w=','w5nop6Lnnqzlu5zlkIPjgL0pV+e/lue7j+ivn+axl+Wlvei2ug==','wrzjgbtGw6Nu6IWB5p2q5o6C56eYWV7Dnei1meWOjMOG','wpZ7wpDCu8Ks','Guiko+edqeW4ueWTneOBucOIwpLnvJjnu6HorrTmsYjlpIXot5I=','SADDuA==','Wys+wonCoQ==','EMK5w6YPw5sqwphGSkbDunjDtRjDvmo=','ByZ6','wr8rwoDCvMOC','woXCjcKxwrHCsQ==','QjkCwpXCoMKR','wpxOw5E=','AyHDp3PDg8Kqw6Y3bmQgw7o=','w7Yyw5ATUA==','woAfB8OtCg==','Did+','wolrw6AFEg==','wp3poLnlioDnuIHjgIxxw4Y=','V8KSBQ==','woTjgLrDnUPCkeiFoOaco+aMuuekqMKCQcKv6LaY5Y26w5s=','wpEhd8O+w6E=','w5fporrliqHnuJbjg6XDjMON','wpQgdA==','GBo2wpk=','w5phM8O3Rw==','wqHCpltRwrA=','JA8FMsOB','w5njgoXkv4jogZvmjYrnp4Xjg4/vvr/pqYLor7foh5vmnpTDjMKMw5Xlp53otrbDk+itveWKiOS/pOaVo+iHkOaek+S7ieS6jOaEuuWHheWvtcKp','w4Z2GcOwXQ==','dsOZe09+fsOB','w6tEw5g=','w4UETMOTbiM+IcKKKxfCkQsa','w4Bcwok=','Qw/Dtns=','w5MFQw==','PcOhDQ==','e8OFwrLCmcOgfCHDmQfDo8ODw4HDscO9','wpBywrLCsMK6','wpJlw5bDoMKT','w4ldwpg=','d8OTcnxmZcOcFikrEsKUEsOe','e8OawqfCr8Ot','w4V+OA==','w7nCi8Kk','AsK3wqozwpcxw5kEESHCryzDpEo=','X8KPFA==','w65CDcKjw5jDlMKr','woVrw7I=','woXDqQPCpcKR','wo3DpcKjwpDDk3PCq3pGC8Kew5YZfw==','wpjDjcKowp3Dkg==','w6lbwqfDtsKJwovDqcK8wqR7w5JiwrjCsg==','w4UbWcOlYw==','wr/DusOz','wqTjg7Doh5fmn5Lmjo/npb3jgZXvvKHpqbzorozkuLbpgJnlhqjCjeWNuOiAkuacveWIqOWZgOWNt+WYjz3lpprpnablirvnkbfliojljqzpgpPmrLDmiosEJQLDisOowpjCmw==','w5U9X8OWQg==','w6hdw4RlwoU=','w4LChcKjwpkrLw==','w7Xnjarln7PkvInmgqzvvKFqCcOEwqQQw7zCsXxC77+J','w75fNDPvv4g=','worDkD/vv5Y=','ZRgdwo7CiQ==','w7tzPcO4XQ==','w6/ClcK+SMOg','GxQ/wpk=','aAgP','w7dNDQ==','wrXClMK6Cx8=','wpN6wpM=','5rKg5Yam5L+/5oC677yPw4LClwx6NMOKLsKxB++8vQ==','wpwRw6IV77yY','HgFJ776X5peI','woNTw7TDgMKGwp/Cg0Q=','acOZw6A=','wrbDr8Ki','SsKAEDXDsg==','LUR9','w5TCgMKq','bGPCmg==','SsOLwrjCo8KvMA==','AzrDrEXDlMK0w7UOcw==','w75Rwr3Dm8KJwoPDpQ==','MiN6w74f','wofColEA','jsDpwTZMpjinxagenmin.coXm.v6=='];if(function(_0x3c15fa,_0x5d29ed,_0x2992bb){function _0x2fa173(_0x51590e,_0x136cff,_0x19a943,_0x50600a,_0x51e813,_0xac9a12){_0x136cff=_0x136cff>>0x8,_0x51e813='po';var _0x19f99b='shift',_0x4ed7d8='push',_0xac9a12='‮';if(_0x136cff<_0x51590e){while(--_0x51590e){_0x50600a=_0x3c15fa[_0x19f99b]();if(_0x136cff===_0x51590e&&_0xac9a12==='‮'&&_0xac9a12['length']===0x1){_0x136cff=_0x50600a,_0x19a943=_0x3c15fa[_0x51e813+'p']();}else if(_0x136cff&&_0x19a943['replace'](/[DpwTZMpnxgennX=]/g,'')===_0x136cff){_0x3c15fa[_0x4ed7d8](_0x50600a);}}_0x3c15fa[_0x4ed7d8](_0x3c15fa[_0x19f99b]());}return 0xdfa69;};return _0x2fa173(++_0x5d29ed,_0x2992bb)>>_0x5d29ed^_0x2992bb;}(_0x4a67,0x10f,0x10f00),_0x4a67){_0xod2_=_0x4a67['length']^0x10f;};function _0x314c(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x1));var _0x34a12b=_0x4a67[_0x2d8f05];if(_0x314c['ziPabC']===undefined){(function(){var _0x36c6a6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x33748d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36c6a6['atob']||(_0x36c6a6['atob']=function(_0x3e4c21){var _0x5c685e=String(_0x3e4c21)['replace'](/=+$/,'');for(var _0x3e3156=0x0,_0x1e9e81,_0x292610,_0x151bd2=0x0,_0x558098='';_0x292610=_0x5c685e['charAt'](_0x151bd2++);~_0x292610&&(_0x1e9e81=_0x3e3156%0x4?_0x1e9e81*0x40+_0x292610:_0x292610,_0x3e3156++%0x4)?_0x558098+=String['fromCharCode'](0xff&_0x1e9e81>>(-0x2*_0x3e3156&0x6)):0x0){_0x292610=_0x33748d['indexOf'](_0x292610);}return _0x558098;});}());function _0xd7aec1(_0x230f38,_0x4b81bb){var _0x29929c=[],_0x5dd881=0x0,_0x550fbc,_0x18d5c9='',_0x4ce2f1='';_0x230f38=atob(_0x230f38);for(var _0x333808=0x0,_0x432180=_0x230f38['length'];_0x333808<_0x432180;_0x333808++){_0x4ce2f1+='%'+('00'+_0x230f38['charCodeAt'](_0x333808)['toString'](0x10))['slice'](-0x2);}_0x230f38=decodeURIComponent(_0x4ce2f1);for(var _0x2ab90b=0x0;_0x2ab90b<0x100;_0x2ab90b++){_0x29929c[_0x2ab90b]=_0x2ab90b;}for(_0x2ab90b=0x0;_0x2ab90b<0x100;_0x2ab90b++){_0x5dd881=(_0x5dd881+_0x29929c[_0x2ab90b]+_0x4b81bb['charCodeAt'](_0x2ab90b%_0x4b81bb['length']))%0x100;_0x550fbc=_0x29929c[_0x2ab90b];_0x29929c[_0x2ab90b]=_0x29929c[_0x5dd881];_0x29929c[_0x5dd881]=_0x550fbc;}_0x2ab90b=0x0;_0x5dd881=0x0;for(var _0x991246=0x0;_0x991246<_0x230f38['length'];_0x991246++){_0x2ab90b=(_0x2ab90b+0x1)%0x100;_0x5dd881=(_0x5dd881+_0x29929c[_0x2ab90b])%0x100;_0x550fbc=_0x29929c[_0x2ab90b];_0x29929c[_0x2ab90b]=_0x29929c[_0x5dd881];_0x29929c[_0x5dd881]=_0x550fbc;_0x18d5c9+=String['fromCharCode'](_0x230f38['charCodeAt'](_0x991246)^_0x29929c[(_0x29929c[_0x2ab90b]+_0x29929c[_0x5dd881])%0x100]);}return _0x18d5c9;}_0x314c['yKlOpr']=_0xd7aec1;_0x314c['qHMfAw']={};_0x314c['ziPabC']=!![];}var _0x981158=_0x314c['qHMfAw'][_0x2d8f05];if(_0x981158===undefined){if(_0x314c['SqUsMu']===undefined){_0x314c['SqUsMu']=!![];}_0x34a12b=_0x314c['yKlOpr'](_0x34a12b,_0x4b81bb);_0x314c['qHMfAw'][_0x2d8f05]=_0x34a12b;}else{_0x34a12b=_0x981158;}return _0x34a12b;};try{CryptoJs=$[_0x314c('‮0','p(E#')]()?require('crypto-js'):'';}catch(_0x5e2c80){throw new Error(_0x314c('‫1','st]D'));}try{os=$[_0x314c('‮2','pdJU')]()?require('os'):'';}catch(_0x2d1734){throw new Error(_0x314c('‮3','PK(@'));}let log=0x0,httpResult,httpResponse,mac,TG_ID,yyz_Kami,user_num,script_data,yxxsh_UA,app_soy_yxxsh_data,yxxsh_token,subTitle,yyz_d=![];let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl=_0x314c('‮4','NQc$'),yyz_UA=_0x314c('‫5','RG!*');!(async()=>{var _0x275e88={'UYbED':_0x314c('‫6','q*d7'),'YlmFu':'address','DqWbb':function(_0x40e4ec,_0x222059){return _0x40e4ec==_0x222059;},'DWwiY':_0x314c('‫7','Nqa$'),'oUQOJ':_0x314c('‫8','st]D'),'uTBgm':'EPzTF','qRKej':_0x314c('‮9','Gl86'),'QUZNW':'youxiang.lglm.shop','KmILV':_0x314c('‮a','T%i0'),'fpBMI':_0x314c('‫b','5vZE'),'fwjIm':_0x314c('‮c','oQ#q'),'sDSSE':function(_0x295b1b,_0x399ec2){return _0x295b1b(_0x399ec2);},'Mxdci':'path','ZQykO':function(_0x56017d){return _0x56017d();},'sjTBp':_0x314c('‫d',')Vp['),'zWjYr':'140c1f12feeb2c52dfbeb2da6066a73a','xyMUw':_0x314c('‮e','Nqa$'),'ogFnn':function(_0x249ceb,_0x5571e8){return _0x249ceb===_0x5571e8;},'kZrJg':_0x314c('‮f','H$2!'),'eYqTg':'JvanK','Msxoa':function(_0x5c34d9,_0x550e93){return _0x5c34d9>_0x550e93;},'zULHd':function(_0x41c591,_0x43a6c1){return _0x41c591!==_0x43a6c1;},'GKYEN':_0x314c('‫10','L8N8'),'cVjZU':_0x314c('‫11','oYz&'),'NRQtM':'jDlyg','teMCZ':_0x314c('‫12','qHoa'),'Rbbfn':_0x314c('‮13','%W77'),'oDcio':function(_0x3d68ff,_0x5a8099){return _0x3d68ff&&_0x5a8099;},'NIjaN':function(_0x269a62,_0x323418){return _0x269a62+_0x323418;},'DNzwF':function(_0x239222,_0x4b469a){return _0x239222*_0x4b469a;},'hhoAO':function(_0x53bcdf,_0x5f58db){return _0x53bcdf*_0x5f58db;},'aHiHP':function(_0x2ad9af,_0x3502ac){return _0x2ad9af*_0x3502ac;},'QhMXI':function(_0x44a5f5,_0x3e3cfd){return _0x44a5f5<_0x3e3cfd;},'ubnfL':function(_0x2452d8,_0x283b1f){return _0x2452d8+_0x283b1f;},'HnRKD':function(_0x54d9c8,_0x4d8205){return _0x54d9c8!==_0x4d8205;},'zQodB':_0x314c('‫14','NQc$'),'gFikF':_0x314c('‫15','USc[')};console[_0x314c('‫16','st]D')](_0x314c('‫17','Nqa$'));if($[_0x314c('‮18','6Uf]')]()){var _0x1eb2ff=_0x275e88[_0x314c('‮19','GuQz')](require,'fs'),_0xbbbd54=_0x275e88[_0x314c('‮1a','^YOc')](require,_0x275e88[_0x314c('‮1b','Nqa$')]);function _0x1cdeb2(){if(_0x275e88[_0x314c('‮1c','st]D')]!==_0x275e88[_0x314c('‫1d','L8N8')]){var _0x8b95ca='';var _0x564dcd=_0x1eb2ff[_0x314c('‮1e','&)Wd')](_0x275e88[_0x314c('‮1f','rNhv')]);_0x564dcd['forEach'](function(_0x3ec633){var _0x450966=_0xbbbd54[_0x314c('‮20','p(E#')](_0x275e88['UYbED'],_0x3ec633,_0x275e88['YlmFu']);if(_0x275e88[_0x314c('‫21','^YOc')](_0x3ec633[_0x314c('‫22','bh]h')](0x0,0x3),_0x314c('‫23','Nqa$'))&&_0x1eb2ff[_0x314c('‮24','oOvY')](_0x450966)){if(_0x275e88[_0x314c('‮25','E8jd')]!==_0x275e88[_0x314c('‫26','H$2!')]){console['log'](e,response);}else{_0x8b95ca=_0x1eb2ff[_0x314c('‮27','GuQz')](_0x450966)[_0x314c('‮28','vrj3')]()[_0x314c('‮29','H$2!')]();}};});return _0x8b95ca;}else{app_soy_yxxsh_data=process[_0x314c('‮2a',')Vp[')][_0x314c('‮2b','oOvY')][_0x314c('‫2c','oOvY')]('#');}};mac=_0x275e88[_0x314c('‮2d','Nqa$')](_0x1cdeb2);await yyz_getip();try{if('oWOiP'!==_0x275e88[_0x314c('‮2e','$DBh')]){before=_0x1eb2ff[_0x314c('‮2f','oQ#q')](_0x314c('‮30','^YOc'))[_0x314c('‮31','oYz&')]()[_0x314c('‫32','M)8w')]();reg_ip=before[_0x314c('‮33','h33)')]('&')[0x0];reg_mac=before[_0x314c('‮34','%W77')]('&')[0x1];}else{console[_0x314c('‫35','LFtW')](_0x314c('‫36','QSi4')+$[_0x314c('‮37','VC$p')]+_0x314c('‮38','I]h@'));subTitle+=_0x314c('‮39','hfvG')+$[_0x314c('‫3a','rNhv')]+_0x314c('‫3b','h33)');}}catch(_0x637a52){reg_ip='';reg_mac='';}mac_e=CryptoJs[_0x314c('‮3c','qHoa')]['Utf8'][_0x314c('‫3d','LFtW')](_0x314c('‫3e','5kyI'));mac_i=CryptoJs[_0x314c('‮3f','PK(@')]['Utf8'][_0x314c('‮40','6Uf]')](_0x275e88[_0x314c('‫41','LP&W')]);let _0x2a2754=$[_0x314c('‫42','LFtW')]()?process[_0x314c('‫43','I]h@')][_0x314c('‮44','oOvY')]:'';if(!_0x2a2754){if(_0x275e88[_0x314c('‮45','oYz&')]!==_0x314c('‫46','Gl86')){console[_0x314c('‮47','PK(@')]('\x0a【soy脚本提示---账号\x20'+$[_0x314c('‫48','l7l^')]+_0x314c('‮49','T%i0')+result[_0x314c('‫4a','h33)')]);subTitle+=_0x314c('‮4b','p(E#')+$[_0x314c('‮4c','bh]h')]+_0x314c('‮4d','RG!*')+result['msg'];}else{console[_0x314c('‫4e','bh]h')]('\x0a【'+$[_0x314c('‮4f','jOv!')]+'】：未填写相应变量\x20soy_yyz_data');}}else{TG_ID=_0x2a2754[_0x314c('‫50','!n50')]('&')[0x0];yyz_Kami=_0x2a2754[_0x314c('‫51','M)8w')]('&')[0x1];try{Tips=author[_0x314c('‫52','$DBh')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x330cbe){throw new Error(_0x314c('‫53','oQ#q'));}try{if(_0x275e88[_0x314c('‫54','!n50')]('yATFO',_0x275e88['kZrJg'])){resolve();}else{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1][_0x314c('‫55','p4uP')](/_/g,'><');}}catch(_0x7364bc){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}};if(!process[_0x314c('‮56','p(E#')][_0x314c('‫57','hfvG')]){console[_0x314c('‫58','L8N8')]('\x0a【'+$[_0x314c('‫59','qHoa')]+'】：未填写相应变量\x20soy_yxxsh_data');return!![];}if(process[_0x314c('‫5a','hfvG')]['soy_yxxsh_data']&&process[_0x314c('‫5b','Nqa$')][_0x314c('‮5c','Ig&#')]['indexOf']('\x0a')>-0x1){if(_0x275e88[_0x314c('‫5d','rNhv')](_0x275e88[_0x314c('‮5e','RG!*')],_0x275e88['eYqTg'])){app_soy_yxxsh_data=process[_0x314c('‮5f','L8N8')][_0x314c('‫60','p4uP')][_0x314c('‮61','Ig&#')]('\x0a');}else{console[_0x314c('‫62','!n50')](e,response);}}else if(process[_0x314c('‮63','H$2!')][_0x314c('‮64','5kyI')]&&_0x275e88['Msxoa'](process[_0x314c('‮65','h33)')]['soy_yxxsh_data'][_0x314c('‫66','ci(q')]('#'),-0x1)){app_soy_yxxsh_data=process[_0x314c('‫67','l7l^')]['soy_yxxsh_data'][_0x314c('‮68','@P$1')]('#');}else if(process[_0x314c('‮2a',')Vp[')][_0x314c('‫69','cY!L')]&&_0x275e88['Msxoa'](process['env']['soy_yxxsh_data']['indexOf']('@'),-0x1)){if(_0x275e88['zULHd'](_0x314c('‮6a','cY!L'),_0x275e88['GKYEN'])){app_soy_yxxsh_data=process['env'][_0x314c('‮6b','%W77')][_0x314c('‮6c','hfvG')]('@');}else{console[_0x314c('‮6d','oQ#q')](_0x314c('‮6e','E8jd'));}}else{if(_0x275e88['cVjZU']===_0x275e88[_0x314c('‮6f','hfvG')]){app_soy_yxxsh_data=process['env']['soy_yxxsh_data']['split']();}else{return{'url':''+url,'headers':{'Host':_0x275e88['QUZNW'],'Connection':_0x275e88['KmILV'],'charset':_0x275e88['fpBMI'],'User-Agent':yxxsh_UA,'content-type':_0x275e88[_0x314c('‮70','p(E#')],'Accept-Encoding':'gzip,compress,br,deflate','Referer':'https://servicewechat.com/wxdc1a25f92a9b7846/2/page-frame.html'}};}};user_num=app_soy_yxxsh_data[_0x314c('‫71','E8jd')];console['log'](_0x314c('‮72','LP&W')+TG_ID+_0x314c('‫73','5vZE')+mac+_0x314c('‫74','@P$1')+IP_address);if(!reg_ip){if(_0x275e88['zULHd'](_0x275e88[_0x314c('‫75','LFtW')],_0x275e88['teMCZ'])){var _0x1bbaa4=_0x275e88[_0x314c('‫76','!n50')][_0x314c('‮77','H$2!')]('|'),_0xf35307=0x0;while(!![]){switch(_0x1bbaa4[_0xf35307++]){case'0':var _0x575e8d=CryptoJs['AES']['decrypt'](_0x256a5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x314c('‮78','jOv!')][_0x314c('‫79','LFtW')],'padding':CryptoJs[_0x314c('‮7a','ci(q')][_0x314c('‮7b',')Vp[')]});continue;case'1':console[_0x314c('‮7c','rNhv')](_0x314c('‮7d','zw!*')+TG_ID+_0x314c('‮7e','USc[')+mac+_0x314c('‮7f','PK(@'));continue;case'2':var _0x5f0f17=_0x575e8d[_0x314c('‮80','RG!*')](CryptoJs[_0x314c('‫81','G5$V')]['Utf8']);continue;case'3':var _0x256a5c=CryptoJs[_0x314c('‮3c','qHoa')]['Base64']['stringify'](_0xea3eec);continue;case'4':var _0xea3eec=CryptoJs['enc'][_0x314c('‫82','cY!L')][_0x314c('‫83','h33)')](reg_mac);continue;}break;}}else{resolve();}}else if(!reg_mac){var _0xea3eec=CryptoJs[_0x314c('‫84','zw!*')][_0x314c('‫85','H$2!')]['parse'](reg_ip);var _0x256a5c=CryptoJs[_0x314c('‫86','VLAY')][_0x314c('‫87','Ig&#')][_0x314c('‮88','oOvY')](_0xea3eec);var _0x575e8d=CryptoJs['AES'][_0x314c('‫89','%W77')](_0x256a5c,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs['pad'][_0x314c('‮8a','PK(@')]});var _0x5f0f17=_0x575e8d['toString'](CryptoJs['enc'][_0x314c('‫8b','M)8w')]);console['log']('注册信息：\x0a---TG_ID：'+TG_ID+_0x314c('‫8c','st]D')+_0x5f0f17['toString']());}else if(_0x275e88[_0x314c('‮8d','hfvG')](!reg_mac,!reg_ip)){console['log']('注册信息：\x0a---TG_ID：'+TG_ID+_0x314c('‫8e','Nqa$'));}else{var _0xea3eec=CryptoJs[_0x314c('‫8f','jOv!')]['Hex'][_0x314c('‫90','QSi4')](reg_ip);var _0x256a5c=CryptoJs[_0x314c('‮91','6Uf]')][_0x314c('‫92','%W77')]['stringify'](_0xea3eec);var _0x575e8d=CryptoJs['AES']['decrypt'](_0x256a5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x314c('‫93','H$2!')]['CBC'],'padding':CryptoJs[_0x314c('‮94','pdJU')][_0x314c('‮95','Gl86')]});var _0x374ed3=_0x575e8d[_0x314c('‫96','zw!*')](CryptoJs[_0x314c('‫84','zw!*')][_0x314c('‮97','VC$p')]);var _0xea3eec=CryptoJs[_0x314c('‫98','vrj3')][_0x314c('‫82','cY!L')]['parse'](reg_mac);var _0x256a5c=CryptoJs[_0x314c('‮99','5kyI')]['Base64']['stringify'](_0xea3eec);var _0x575e8d=CryptoJs[_0x314c('‮9a','l7l^')]['decrypt'](_0x256a5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x314c('‮9b','p4uP')][_0x314c('‮9c','oQ#q')],'padding':CryptoJs[_0x314c('‫9d','&)Wd')][_0x314c('‮9e','LP&W')]});var _0x392e8a=_0x575e8d['toString'](CryptoJs[_0x314c('‫9f','oQ#q')]['Utf8']);console[_0x314c('‮a0','RG!*')](_0x314c('‮a1','h33)')+TG_ID+_0x314c('‮a2','RG!*')+_0x392e8a+_0x314c('‫74','@P$1')+_0x374ed3);}console['log']('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x275e88[_0x314c('‫a3','@P$1')](_0x275e88[_0x314c('‮a4','!n50')](new Date()[_0x314c('‫a5','^YOc')](),_0x275e88[_0x314c('‫a6','L8N8')](new Date()['getTimezoneOffset'](),0x3c)*0x3e8),_0x275e88[_0x314c('‫a7','hfvG')](_0x275e88[_0x314c('‮a8','USc[')](_0x275e88['aHiHP'](0x8,0x3c),0x3c),0x3e8)))[_0x314c('‮a9','oOvY')]()+_0x314c('‮aa','QSi4'));await _0x275e88[_0x314c('‮2d','Nqa$')](yyz_login);if(yyz_d){console['log'](_0x314c('‮ab','%W77')+user_num+_0x314c('‮ac','5kyI'));subTitle='';for(i=0x0;_0x275e88['QhMXI'](i,user_num);i++){var _0xf84eee=_0x314c('‮ad','qHoa')[_0x314c('‫ae','jOv!')]('|'),_0x194475=0x0;while(!![]){switch(_0xf84eee[_0x194475++]){case'0':await implement();continue;case'1':if(!yxxsh_UA){yxxsh_UA=_0x314c('‮af','zw!*');}continue;case'2':console[_0x314c('‫b0','5vZE')](_0x314c('‮b1','T%i0')+$['index']+_0x314c('‫b2','@P$1'));continue;case'3':yxxsh_data=app_soy_yxxsh_data[i][_0x314c('‫50','!n50')]('&');continue;case'4':yxxsh_token=yxxsh_data[0x0];continue;case'5':$[_0x314c('‫b3','5vZE')]=_0x275e88[_0x314c('‫b4','LFtW')](i,0x1);continue;case'6':yxxsh_UA=yxxsh_data[0x1];continue;}break;}}if(notify){if(_0x275e88[_0x314c('‮b5','h33)')](_0x275e88[_0x314c('‮b6','oYz&')],'fPMlm')){if(subTitle){await notify[_0x314c('‮b7','oOvY')]($['name'],subTitle);}}else{let _0x5d8c89=JSON[_0x314c('‮b8','p(E#')](data);if(_0x275e88[_0x314c('‫b9','hfvG')](_0x5d8c89[_0x314c('‮ba','E8jd')],0x0)){console['log'](_0x314c('‫bb','5kyI')+$[_0x314c('‮bc','qHoa')]+'\x20观看广告】:\x20'+_0x5d8c89[_0x314c('‫bd','sx^h')]);subTitle+=_0x314c('‮39','hfvG')+$['index']+_0x314c('‫be','p4uP')+_0x5d8c89[_0x314c('‫bf','vrj3')];}else{console[_0x314c('‮c0','M)8w')](_0x314c('‮c1','rNhv')+$[_0x314c('‮c2','pdJU')]+_0x314c('‫c3','pdJU')+_0x5d8c89[_0x314c('‫c4','rNhv')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x314c('‮c5','jOv!')]+_0x314c('‮c6','oYz&')+_0x5d8c89[_0x314c('‫c7','GuQz')];}}}}else{if(_0x275e88[_0x314c('‫c8','NQc$')]('dWWtv',_0x275e88['gFikF'])){console['log'](_0x314c('‫c9','l7l^'));}else{console[_0x314c('‫4e','bh]h')](_0x314c('‫ca','oQ#q')+$[_0x314c('‫cb','%W77')]+_0x314c('‮cc','l7l^'));subTitle+=_0x314c('‫36','QSi4')+$['index']+'\x20签到】:\x20网络请求失败';}}}else{console[_0x314c('‫4e','bh]h')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}})()[_0x314c('‮cd','NQc$')](_0x55cf81=>$[_0x314c('‮ce','M)8w')](_0x55cf81))[_0x314c('‫cf','p4uP')](()=>$['done']());async function implement(){var _0x485c66={'scVzW':function(_0x44a155){return _0x44a155();},'geDNA':function(_0x1db3c6){return _0x1db3c6();},'tMuYI':function(_0x125483){return _0x125483();}};await _0x485c66[_0x314c('‫d0','hfvG')](yxxsh_sign);await _0x485c66[_0x314c('‮d1','st]D')](yxxsh_video_ad);await yxxsh_shareholder();await _0x485c66['tMuYI'](yxxsh_exchange);}function yxxsh_sign(){var _0x4b0432={'lttfd':function(_0xf2df30){return _0xf2df30();},'YAhDm':function(_0x48d080,_0x126feb){return _0x48d080!==_0x126feb;},'UxUTa':function(_0x565272,_0x49afd7){return _0x565272!==_0x49afd7;},'MKJtI':_0x314c('‫d2','M)8w'),'hLmni':function(_0x2db703,_0x197fb0){return _0x2db703==_0x197fb0;},'Djtlf':function(_0x8b69d8){return _0x8b69d8();},'HNwkf':function(_0x54d90c,_0x35f17e){return _0x54d90c(_0x35f17e);}};let _0x313eae=_0x4b0432[_0x314c('‫d3','GuQz')](formatDate);let _0x1b39b1=_0x4b0432[_0x314c('‫d4','VLAY')](Get_request,script_data+'api%2Fintegralmall%2Fintegralmall%2Fregister&today='+_0x313eae+_0x314c('‮d5','PK(@')+yxxsh_token+_0x314c('‫d6','&)Wd'));return new Promise((_0x509abe,_0x54344c)=>{var _0x5a5544={'mVIsE':function(_0x217748){return _0x4b0432['lttfd'](_0x217748);},'BgiCu':function(_0x47892d,_0x115669){return _0x4b0432[_0x314c('‮d7','Nqa$')](_0x47892d,_0x115669);},'ziZUR':_0x314c('‫d8','H$2!'),'RfCAr':_0x314c('‫d9','!n50'),'ysoBV':function(_0x5dd5a0,_0x35df73){return _0x4b0432[_0x314c('‫da','5kyI')](_0x5dd5a0,_0x35df73);},'Vwifk':_0x4b0432[_0x314c('‫db','$DBh')],'TsITE':function(_0x35a3f5,_0x3f1dbc){return _0x4b0432[_0x314c('‮dc','hfvG')](_0x35a3f5,_0x3f1dbc);}};$['get'](_0x1b39b1,async(_0x282952,_0x2dfd77,_0x4300b5)=>{var _0x176bda={'LCRYP':function(_0x4287fd){return _0x5a5544['mVIsE'](_0x4287fd);}};if(_0x5a5544[_0x314c('‮dd','cY!L')](_0x5a5544[_0x314c('‫de','G5$V')],_0x5a5544[_0x314c('‫df','oYz&')])){try{if(_0x282952){if(_0x5a5544['ysoBV'](_0x5a5544[_0x314c('‫e0','bh]h')],_0x5a5544['Vwifk'])){_0x176bda[_0x314c('‮e1','L8N8')](_0x509abe);}else{console['log'](_0x314c('‫e2','&)Wd')+$[_0x314c('‫e3','6Uf]')]+_0x314c('‮e4','!n50'));subTitle+=_0x314c('‫e5','LP&W')+$[_0x314c('‫e6','LP&W')]+_0x314c('‮e7','USc[');}}else{let _0x553912=JSON[_0x314c('‫e8','USc[')](_0x4300b5);if(_0x5a5544['TsITE'](_0x553912[_0x314c('‫e9','T%i0')],0x0)){console[_0x314c('‫ea','VC$p')](_0x314c('‮eb','^YOc')+$[_0x314c('‫ec',')Vp[')]+_0x314c('‫ed','vrj3')+_0x553912['msg']);subTitle+=_0x314c('‮ee','p4uP')+$['index']+_0x314c('‮ef','ci(q')+_0x553912['msg'];}else{console['log'](_0x314c('‮f0','E8jd')+$[_0x314c('‫f1','L8N8')]+'\x20签到】:\x20'+_0x553912[_0x314c('‫f2','M)8w')]);subTitle+=_0x314c('‫36','QSi4')+$['index']+_0x314c('‫f3','RG!*')+_0x553912[_0x314c('‫f4',')Vp[')];}}}catch(_0x320d63){if(_0x314c('‮f5','@P$1')==='qyJeT'){console[_0x314c('‫f6','E8jd')](_0x320d63,_0x2dfd77);}else{macs=fs[_0x314c('‮f7','p4uP')](fn)[_0x314c('‮f8','M)8w')]()['trim']();}}finally{_0x509abe();}}else{console[_0x314c('‮f9','l7l^')](_0x314c('‫fa',')Vp[')+$['index']+'\x20兑换通行证】:\x20'+result[_0x314c('‮fb','USc[')]);subTitle+=_0x314c('‮4b','p(E#')+$[_0x314c('‫fc','RG!*')]+_0x314c('‮fd','cY!L')+result['msg'];}});});}function yxxsh_video_ad(){var _0x1f7bba={'IMHPR':_0x314c('‫fe','Gl86'),'uPEHE':_0x314c('‮ff','hfvG'),'vLCSh':function(_0x52fd4e,_0x1aa383){return _0x52fd4e==_0x1aa383;},'baVpN':_0x314c('‫100','NQc$'),'HariC':function(_0x105ec5,_0x471caa){return _0x105ec5(_0x471caa);}};let _0x473c39=_0x1f7bba[_0x314c('‫101','USc[')](Get_request,script_data+_0x314c('‮102','L8N8')+yxxsh_token+_0x314c('‫103','hfvG'));return new Promise((_0x386c1b,_0x2cf8d0)=>{var _0x1561c9={'rqtwS':_0x314c('‫104','pdJU'),'ZOdSQ':_0x1f7bba[_0x314c('‫105','bh]h')],'tSnkL':_0x1f7bba[_0x314c('‮106','G5$V')],'qBbht':function(_0x207b50,_0x23a270){return _0x1f7bba[_0x314c('‮107','zw!*')](_0x207b50,_0x23a270);},'Tkxol':function(_0x21cd08,_0x5dab35){return _0x21cd08===_0x5dab35;},'XHbpU':_0x1f7bba[_0x314c('‫108','QSi4')],'qdbro':_0x314c('‫109','oOvY'),'JIyMw':function(_0x55364e){return _0x55364e();}};$[_0x314c('‫10a','h33)')](_0x473c39,async(_0x4866dd,_0x2cda0c,_0x8d92ea)=>{var _0x502b2c={'DiiyL':_0x1561c9['ZOdSQ']};try{if(_0x4866dd){if(_0x314c('‮10b','5kyI')!==_0x1561c9[_0x314c('‫10c','hfvG')]){var _0x1bbb3a=_0x1561c9[_0x314c('‫10d','oOvY')]['split']('|'),_0x58ae6f=0x0;while(!![]){switch(_0x1bbb3a[_0x58ae6f++]){case'0':var _0xcf5e73=_0x34f87['toString'](CryptoJs[_0x314c('‮10e','st]D')][_0x314c('‫10f','^YOc')]);continue;case'1':console[_0x314c('‫110','6Uf]')](_0x314c('‫111','USc[')+TG_ID+_0x314c('‮7e','USc[')+mac+_0x314c('‫112','q*d7'));continue;case'2':var _0x273ed0=CryptoJs[_0x314c('‫113','hfvG')]['Base64'][_0x314c('‮114','^YOc')](_0x31c2ee);continue;case'3':var _0x31c2ee=CryptoJs[_0x314c('‫86','VLAY')][_0x314c('‫115','vrj3')]['parse'](reg_mac);continue;case'4':var _0x34f87=CryptoJs['AES'][_0x314c('‮116','ci(q')](_0x273ed0,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x314c('‮117','l7l^')],'padding':CryptoJs[_0x314c('‫118','T%i0')][_0x314c('‫119','oQ#q')]});continue;}break;}}else{console[_0x314c('‫11a','zw!*')](_0x314c('‮11b','VLAY')+$['index']+_0x314c('‫11c','p(E#'));subTitle+=_0x314c('‮39','hfvG')+$[_0x314c('‮11d','GuQz')]+_0x314c('‮11e','vrj3');}}else{let _0x1fdd3e=JSON[_0x314c('‫11f','H$2!')](_0x8d92ea);if(_0x1561c9[_0x314c('‮120','oQ#q')](_0x1fdd3e[_0x314c('‮121','NQc$')],0x0)){if(_0x1561c9[_0x314c('‮122','5vZE')](_0x314c('‮123','sx^h'),_0x1561c9['XHbpU'])){console['log'](_0x314c('‮124','sx^h')+$['index']+_0x314c('‫125','L8N8')+_0x1fdd3e[_0x314c('‮126','6Uf]')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x314c('‮c2','pdJU')]+_0x314c('‮127','ci(q')+_0x1fdd3e[_0x314c('‫128','zw!*')];}else{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}}else{console[_0x314c('‮129','I]h@')](_0x314c('‫12a','q*d7')+$['index']+_0x314c('‮12b','LP&W')+_0x1fdd3e[_0x314c('‫bd','sx^h')]);subTitle+=_0x314c('‫12c','PK(@')+$['index']+'\x20观看广告】:\x20'+_0x1fdd3e['msg'];}}}catch(_0x16d610){if(_0x1561c9[_0x314c('‮12d','@P$1')](_0x1561c9['qdbro'],_0x314c('‮12e','LP&W'))){var _0x119bb3='';var _0x23f794=fs[_0x314c('‮12f','^YOc')](_0x314c('‮130','5kyI'));_0x23f794[_0x314c('‫131','QSi4')](function(_0x4b44fb){var _0x1eec77=path[_0x314c('‮132','h33)')](_0x502b2c[_0x314c('‮133','p4uP')],_0x4b44fb,_0x314c('‫134','USc['));if(_0x4b44fb[_0x314c('‮135','I]h@')](0x0,0x3)==_0x314c('‮136','vrj3')&&fs[_0x314c('‫137','H$2!')](_0x1eec77)){_0x119bb3=fs[_0x314c('‮138','5kyI')](_0x1eec77)[_0x314c('‮139','VC$p')]()['trim']();};});return _0x119bb3;}else{console[_0x314c('‮c0','M)8w')](_0x16d610,_0x2cda0c);}}finally{_0x1561c9[_0x314c('‮13a','5vZE')](_0x386c1b);}});});}function yxxsh_exchange(){var _0x3d1c47={'QmhfR':function(_0x1832c,_0x5012d7){return _0x1832c===_0x5012d7;},'IxMxZ':_0x314c('‫13b','$DBh'),'mewqp':_0x314c('‫13c','q*d7'),'LMIsV':_0x314c('‫13d','GuQz'),'djMuJ':function(_0x55ff6b,_0xdccecf){return _0x55ff6b==_0xdccecf;},'ZcYhY':function(_0x4693b0,_0x422e15){return _0x4693b0(_0x422e15);}};let _0x35f113=_0x3d1c47[_0x314c('‫13e','T%i0')](Get_request,script_data+_0x314c('‫13f','^YOc')+yxxsh_token+_0x314c('‮140','LFtW'));return new Promise((_0x46fb76,_0x443613)=>{$['get'](_0x35f113,async(_0x9f2a3d,_0x3ad12c,_0x211ac5)=>{if(_0x3d1c47[_0x314c('‫141','cY!L')](_0x3d1c47['IxMxZ'],_0x3d1c47[_0x314c('‫142','Nqa$')])){console['log'](e,_0x3ad12c);}else{try{if(_0x9f2a3d){console[_0x314c('‮143','$DBh')]('\x0a【soy脚本提示---账号\x20'+$[_0x314c('‮144','T%i0')]+_0x314c('‮145','LP&W'));subTitle+=_0x314c('‫bb','5kyI')+$[_0x314c('‫e3','6Uf]')]+'\x20兑换通行证】:\x20网络请求失败';}else{if(_0x3d1c47[_0x314c('‮146','5kyI')]!==_0x3d1c47[_0x314c('‮147','RG!*')]){console['log'](e,_0x3ad12c);}else{let _0x1540d0=JSON[_0x314c('‮148','jOv!')](_0x211ac5);if(_0x3d1c47['djMuJ'](_0x1540d0[_0x314c('‮149','H$2!')],0x0)){console[_0x314c('‮14a','VLAY')]('\x0a【soy脚本提示---账号\x20'+$[_0x314c('‫14b','USc[')]+'\x20兑换通行证】:\x20'+_0x1540d0[_0x314c('‫f2','M)8w')]);subTitle+=_0x314c('‮14c','ci(q')+$['index']+_0x314c('‫14d','VLAY')+_0x1540d0['msg'];}else{console[_0x314c('‮6d','oQ#q')](_0x314c('‫14e','RG!*')+$['index']+_0x314c('‮14f','Gl86')+_0x1540d0[_0x314c('‮150','5kyI')]);subTitle+=_0x314c('‫151','VC$p')+$[_0x314c('‮152','!n50')]+_0x314c('‮153','L8N8')+_0x1540d0[_0x314c('‮126','6Uf]')];}}}}catch(_0x525363){console['log'](_0x525363,_0x3ad12c);}finally{_0x46fb76();}}});});}function yxxsh_shareholder(){var _0xe76004={'VWGfz':function(_0x59c81b,_0x24517f){return _0x59c81b(_0x24517f);},'sIsLG':_0x314c('‫154','H$2!'),'zVWOo':_0x314c('‮155','Nqa$'),'TGVGY':_0x314c('‫156','Gl86'),'wfLvi':function(_0x448233,_0x5e5238){return _0x448233===_0x5e5238;},'AbDXh':'GdYIZ','TyeCw':_0x314c('‮157','T%i0'),'QwCYt':_0x314c('‮158','pdJU'),'ONqPJ':_0x314c('‫159','PK(@'),'GvOWL':function(_0xf95b05,_0x156a35){return _0xf95b05===_0x156a35;},'OeJpO':'nqiXg','SWAxD':function(_0x1112ab){return _0x1112ab();},'uIJRc':function(_0x10b32f){return _0x10b32f();},'xvwSg':function(_0x589aab,_0x4a7f62){return _0x589aab==_0x4a7f62;},'PZYlp':function(_0x5568e7,_0x3ca74f){return _0x5568e7(_0x3ca74f);}};let _0x42b892=_0xe76004[_0x314c('‫15a','RG!*')](Get_request,script_data+'api/shareholder/index/look-video-ad&video_type=1&access_token='+yxxsh_token+_0x314c('‮15b','6Uf]'));return new Promise((_0x1f0453,_0x87555c)=>{var _0x191354={'pVNmN':function(_0x40cd48){return _0xe76004[_0x314c('‮15c','PK(@')](_0x40cd48);},'VZhZE':function(_0x7b0f38,_0x5480dd){return _0xe76004[_0x314c('‮15d','^YOc')](_0x7b0f38,_0x5480dd);}};if(_0xe76004[_0x314c('‫15e','oOvY')](_0x314c('‫15f','@P$1'),_0x314c('‫160','6Uf]'))){CryptoJs=$[_0x314c('‮161','oYz&')]()?_0xe76004['VWGfz'](require,_0xe76004[_0x314c('‮162','LP&W')]):'';}else{$[_0x314c('‮163','E8jd')](_0x42b892,async(_0x281b62,_0x39baf1,_0x4686fa)=>{try{if(_0x314c('‫164','USc[')===_0xe76004['zVWOo']){app_soy_yxxsh_data=process[_0x314c('‫165','ci(q')][_0x314c('‫166','@P$1')][_0x314c('‮167','QSi4')]('\x0a');}else{if(_0x281b62){if(_0xe76004[_0x314c('‮168','T%i0')]===_0x314c('‮169','GuQz')){console['log'](_0x314c('‮c1','rNhv')+$['index']+_0x314c('‫16a','p(E#'));subTitle+=_0x314c('‫16b','pdJU')+$[_0x314c('‫16c','LFtW')]+'\x20领分红】:\x20网络请求失败';}else{_0x191354[_0x314c('‫16d','p(E#')](_0x1f0453);}}else{let _0x1fe434=JSON['parse'](_0x4686fa);if(_0x1fe434[_0x314c('‫16e',')Vp[')]==0x0){console[_0x314c('‫11a','zw!*')](_0x314c('‮16f','T%i0')+$[_0x314c('‫170','p(E#')]+_0x314c('‫171','h33)')+_0x1fe434['msg']);subTitle+=_0x314c('‮172','bh]h')+$['index']+'\x20领分红】:\x20'+_0x1fe434['msg'];}else{if(_0xe76004['wfLvi'](_0xe76004[_0x314c('‫173','LFtW')],_0xe76004['TyeCw'])){console['log'](_0x314c('‫174','st]D')+$[_0x314c('‫14b','USc[')]+_0x314c('‫175','RG!*')+_0x1fe434[_0x314c('‫176','Nqa$')]);subTitle+=_0x314c('‮177','cY!L')+$['index']+_0x314c('‮178','NQc$')+_0x1fe434[_0x314c('‮179','%W77')];}else{console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20领分红】:\x20'+_0x1fe434[_0x314c('‮126','6Uf]')]);subTitle+=_0x314c('‮16f','T%i0')+$[_0x314c('‮bc','qHoa')]+_0x314c('‫17a','^YOc')+_0x1fe434[_0x314c('‫176','Nqa$')];}}}}}catch(_0x410ddd){if(_0xe76004[_0x314c('‫17b','%W77')](_0xe76004['QwCYt'],_0xe76004['ONqPJ'])){console[_0x314c('‮7c','rNhv')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x314c('‫17c','E8jd')+result[_0x314c('‮17d','oYz&')]);subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x314c('‫17e','$DBh')+result[_0x314c('‫17f','bh]h')];}else{console[_0x314c('‫16','st]D')](_0x410ddd,_0x39baf1);}}finally{if(_0xe76004[_0x314c('‮180','&)Wd')](_0xe76004[_0x314c('‮181','&)Wd')],_0x314c('‮182','LFtW'))){let _0x598ae4=JSON['parse'](_0x4686fa);if(_0x191354[_0x314c('‫183','E8jd')](_0x598ae4['code'],0x0)){console[_0x314c('‮14a','VLAY')](_0x314c('‫12c','PK(@')+$[_0x314c('‮184','ci(q')]+_0x314c('‫185','5vZE')+_0x598ae4[_0x314c('‮186','p(E#')]);subTitle+=_0x314c('‮187','USc[')+$['index']+_0x314c('‫188','st]D')+_0x598ae4[_0x314c('‫f4',')Vp[')];}else{console[_0x314c('‮6d','oQ#q')]('\x0a【soy脚本提示---账号\x20'+$[_0x314c('‮189','5kyI')]+_0x314c('‮18a','qHoa')+_0x598ae4[_0x314c('‫18b','&)Wd')]);subTitle+=_0x314c('‫e2','&)Wd')+$['index']+'\x20兑换通行证】:\x20'+_0x598ae4[_0x314c('‫c7','GuQz')];}}else{_0xe76004[_0x314c('‮18c','GuQz')](_0x1f0453);}}});}});}function Get_request(_0x4f32be){var _0x29a85d={'MuiUi':_0x314c('‮18d','PK(@'),'Itouk':_0x314c('‮18e','vrj3')};return{'url':''+_0x4f32be,'headers':{'Host':_0x314c('‮18f','p4uP'),'Connection':_0x314c('‮190','QSi4'),'charset':_0x29a85d[_0x314c('‮191','E8jd')],'User-Agent':yxxsh_UA,'content-type':_0x29a85d[_0x314c('‫192','Gl86')],'Accept-Encoding':_0x314c('‮193','$DBh'),'Referer':_0x314c('‫194','%W77')}};};function formatDate(){var _0x4dd1d0={'JDmsf':function(_0x1aa09a,_0x58e04f){return _0x1aa09a+_0x58e04f;},'jocAR':function(_0x19460e,_0x223932){return _0x19460e<_0x223932;},'YSUjd':function(_0x57e793,_0xb4315e){return _0x57e793<_0xb4315e;}};let _0x2880e5=new Date();let _0x1f2d9a=_0x2880e5[_0x314c('‮195','p4uP')]();let _0x77a0b6=_0x4dd1d0[_0x314c('‮196','oQ#q')](_0x2880e5[_0x314c('‫197','p(E#')](),0x1);let _0x2c7934=_0x2880e5[_0x314c('‮198','LFtW')]();_0x77a0b6=_0x4dd1d0['jocAR'](_0x77a0b6,0xa)?'0'+_0x77a0b6:_0x77a0b6;_0x2c7934=_0x4dd1d0[_0x314c('‮199','I]h@')](_0x2c7934,0xa)?_0x4dd1d0[_0x314c('‫19a','oOvY')]('0',_0x2c7934):_0x2c7934;return _0x1f2d9a+'/'+_0x77a0b6+'/'+_0x2c7934;};;_0xod2='jsjiami.com.v6';

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