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


const $ = new Env('【广告吧22/04/14_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodo='jsjiami.com.v6',_0xodo_=['‮_0xodo'],_0x2653=[_0xodo,'U8Krwr0=','SsOQw4XCsGY=','dALChw==','w5tHFMKjw6zDijnDmQPDicOFwrs=','w7/DicK7LsOOw67DoQ==','RQA5','w5QyGA==','D8OAQx86X3YEw6Ehw7LDnQ==','ZcKpf8ODw49a','w5AAw4o=','f8KBwqPDlMKN','woR1f8OhRsKYMA==','EsOnEMKDwrA=','U8OhPFjChC3DicKQR8KGQ3R6w71Xwptn','TFrDpsKCDC/CjsOvw6prGMO3Djw=','KcOxLMKZ','GVnDmm9F','RktOXsOF','w6bClsKWdCU=','TuW9l+WljOOAheeuqiQ=','UOS6vOi3t+WOr+S7luWIreODvQ==','w7wRRcOPwrY=','PQ7DrFnDkA==','KDjDoA==','w6U2E+eYteW+s+WmkOi0scKHw7ZF','Bk/CvQ==','Y2DDnueYnuW9sOWmnui1iMOJw6Eg','QcKCw5Q=','woPCgMKUK8KO','fQPClg==','w6njgIDohJHmnpnmj7/np4/jgYTvvqLmrJrohaPmnq/ljKTog6rpnKXpvKXnjbzlo5jotbY=','ZcKjdg==','wqZCwp7CpsKgKRvCj8Kkw5Y=','wo1xZsOQ','I8KLwqvCn0E=','Z1V9VsO5ZQ==','Rgchw4bCoFbCqw==','IDjDqXA=','w5gOw57DtR8=','w5oDw4LDjyc=','DyHDlEzDiA==','wo0bcyHDog==','w6zCq8KMw7nDrMOn','HjIXwofCiA==','VgIlw53Ctg==','wr/CgWbCuMK+','woc6w5x7wqXCrkhuw5JT','woPClFQvw5jDlcK2K8OiIGNu','LTLCgMOiw64=','w4fCrcOWwpEN','SFrDmcKZ','LMKlPCMW','TAEo','77yy6K6/wqoiesOmKcOc6K2/5aSHacKYw5/ltaHoo5Pms7PlhqQ=','IzDCv8OLw7Q=','MsOeAsK+wqA=','McOSLQ==','5o2f56eCw588cOi3ieWPryg=','w5bCmsOCwqwU','DOS7m+S4ieS+sOaCv+OClU/Cnue/uue6vuivvuaxn+Wnq+i1ng==','5o6x56SfacOtwoLotJzlj7fCkQ==','LTnDo3DDvg==','HuS5sOS5hOS+hOaBiuOCvlfDk+e+kOe7nOiuseayk+Wmvui2tg==','RMOlOn/CiA==','wqAmw5FAw7M=','asKjdcOB','SynCmxdMw4ELwpw=','wrjDnMKW','5o+B56WWw5xJwrDota/ljqXCsg==','w7/DicK7LsOO','BVXCucKDUHjDgnE=','wp9yIuS8jOmhk+++tw==','w6PDlMK6OcOfw4/DocKH','w6gnQMOmwpk=','5o6m56WQasOMw5TotZvljJvDvA==','X8Krwq/DncKs','buS4u+S5ouS9muaAjOOCjX7Dn8Kqw5PDhsKv5pqm56a777+F','wpPCq2DCuA==','w7rCi8KXYzTCgX5n','CsKELz8CAAhD','w6kXw6Pkv6bpoJ3vvrk=','b1tucg==','TQEhw4LCtQ==','ZMOhBGvCgA==','DgHCh8OZw48=','wpQlw5Zmw7g=','SsK7w5w=','H+S4oOS4oOS/nOaDt+OCv1kr','w5V/VA==','DEQ+wq3Dlg==','VFrDjQ==','HMO5wrY=','w7puLsKRw4c=','PWvCssKAdg==','w5rDj8KsCMOC','wrnCgsKcOsOzMcOCNWbDhMONJCLDnwDDh8KJQA==','wrTCi8O9O8Oaw4DDs8KORMKVwpDDpmrChsOlVWnCnA==','WXjDsE/DjA==','w6XCm8OTwpMc','w7gVWCfClw==','w6YVRRfCiQ==','w4EzHTQ=','w6vDqcOdwozDhQ==','w4bCjcK1SSs=','w7szVhnCtg==','woFRwqDDr8OC','w6o4w4XDiB0=','W1rDjsKI','w6nnrYnli7Pjgq7CusKD562M5YmV5oqN5YiPwqU=','T8K6w5/CrcOq','woXnr6Pli5jjgooZOOeth+WJquaKluWJuMKi','DUoj','5o6Q56eQw7LDkQTotq/lj4Rt','CEsgwqXDlw==','w5bnrKrlipfjgL93KA==','UnnDvQ==','5o2o56S2HmPDi+i2h+WPo8Kd','MeeskuWLgeOBtcKnaQ==','5oyi56WzwpQkwqfot6Hlj5Eq','HwQjwoTCgQ==','SuaPueeMhuOAlwtW576s57mh6Kyj5rGr5aeL6LaY','5o+w56WUYsKKw6HotJzljKUS','KcKEwrvCmVE=','MeaOvOeNgeOBtcKnaee8g+e5juiuk+axk+Wni+i2lg==','wqVGwoLCscKL','wpTCpXDCvA==','w4zDs8KMw75b','wqXmjpjnjp7jgpLDmiY=','wpbCs8OL','YeaOpOeNp+OCm8KdQQ==','ScOuw7U=','w6zmjKHnjYnjgZnDpmQ=','5o2v56WoL3jDo+i2i+WMsDk=','wpsnw51sw7I=','AOaOvuePv+OCtsO2Gg==','wo1WwpfDs8O4','wrTDrMKmCjY=','B1PCvQ==','w5gyCiXCng==','5o6056eXYXlB6LWH5Y6SBg==','w5UBw4nDhS0=','w6cOBirCgw==','WMOrLw==','wqtuwofpqqLorozotK7ljIJRXOi/i+WZrE8=','YXMs6aq/6K+t6La/5Y6nwpM36L6P5ZmywqM=','w6vCkMKdRgg=','a8Kbw7TCjsO3','wqsDcR/Dqw==','wo8Dw6x4Bg==','wrJOwoDCs8Kv','wrbCksOlwrLCpA==','YQPCghA=','wqMLVwfDiQ==','TzHCuT9j','woDDisKU','w7jCp8OI5L+k55SL5Y255a+/YMKm5rGG5p+V5Y+I5a6T5Y2/5Lyo55SA','5o6756SGw7fDhRPotL/ljZg0','WQMAw7TCqg==','PsOSLsKp','w4nDnsKKw6Fu','wrwITyLDoQ==','wpzDl1Q3','X8K2wpTDlMKxwqTDuSzDlAw=','wrlIwpc=','5o2G56adw7JmwpvotofljbDDiA==','GcO4wrU9VQ==','wpznrJHlip3niJbmgZTjgaQGDOS4ieWktOW0veesguWLoA==','LMKFwrg=','wpHopp7nnaXopobpobfjgbzCuEvnv7XnuITorLDmsKnlp4botbQ=','5o2156anw4XCtg7otL7lj456','KBrCs8Ovw58=','KeeusuWIoeeIkuaCuuOAo8Kiwpk=','w6LCi8KV','5oyE56aJw5xAAei2nOWPq8KK','J3/CvMOeGw==','wpjnrbLliIPni7jmg6fjgrAuwp0=','wosiXw==','UMKhwrPDosK/','WsOsOHjCuQ==','wpB4asOeSsOaJsORGRc=','RMOrO3g=','wq8VUiHDgg==','w5c4FhrCjQ==','5o+056anwr/DsgDot43ljZwk','UOevqOWLoeOBiRfCrOe+vee7seitu+aytuWkqOi0gg==','wqXnrLbliJ7jgpLDmibnvInnurPorJ7msK7lpbDotYo=','w7pDOMK/w40=','6IWH5p6R5o6a56e2w4fCuMOF6Lex5Y+6wpk=','woXDi8KXOhw=','Qeetm+WJtOODkcKVGuetvuWKgeaKp+WLv8Kp','5oyZ56SNw67CksKt6LaF5Y+FRQ==','w5jnr4jliJDjgYfCksKQ56+q5Yih5ouQ5YqOPw==','5oyz56SqJsKYAui3k+WOosKY','wpLCrsOIwprCnw==','VueslOWJt+ODsMODXQ==','Gxkg','wqVYwqQ=','LcKBwpLCrEM=','XMKBwoXDscKm','wrE1VCDDow==','w7LCpcKF','5q2h5rGL5p+W6I2L5Y+/5Yq557qR5Y2I','H+iniOeekeinu+mgieOCv1kr562p','5q+t6I2G5Yyv5Ym4','wp/DgMKWABTDiAXDjsKD','w7LDmsOawqzDrQ==','w5bCv8OHwqQv','woQxw5dCLGvCkA==','a3rDvsKmNw==','X8KZw5I6wrXCqxfDjMOeEWFCwr0ewqtuwrotwpfDpjg=','NQsrwqLCrw==','wqzDsnoXw5E=','KsOoVCkq','PWPDgnVw','woXDhsKYK1s=','w4/CrcOHwp8G','SDLCryJh','fTvCkiZz','f8KKwrPDlMK/','Ei7ClcO/w54=','w4HDqcKLKsOz','SQArw4LCtA==','GOint+eeoeikq+mjvuOBn8OYwqrnv6jnu4Porp3ms5zlpZHotb4=','GcOBTA==','TyZ1bEvDvjLDtnM6w5jDog==','wqZXwpzCq8Ka','w7UpXMOwwoU=','FhXCgMOPw5I=','RcK7w5/CrQ==','VCVmeng=','E33DuXJJ','wrvDhMKkGhE=','w4nDssKP','5oy256WrFX/Chei1veWMi3E=','w5fopIjnnJ/opJ/poZ/jgpVTY+etrA==','5q+15rCS5p+46I+a5Y+65YqK57q+5Y6v','woo+Xw==','5q6J6I6f5Y675YuM','JMKLwqvCnQ==','w4zCkcODwpYcNUQEwp8=','w5RjVA==','5o+256euwpbDpcK/6LaZ5Y6qwpk=','AUh+GMOd','w5Ecw4o=','wonDi8KF','w63CpcKbw4LDpMOtNMO4e1tOw6I=','woUkw4tHOQ==','wp7CoVnCscK5','aMO0w7XCiF8=','w4PDsMOC5L+i55ar5Y+r5a6Qwp0/6L+u5ZukwqM=','w4k+w5rDqBM=','AUTDoEdy','U2XDvQ==','5o+o56SPwofDgELotajljJXCqg==','w4/DvcOzwr/DkQ==','woXopZ/nn6PopZ3porLjgIkDeg==','T1toZ8KkJWPDqS8BBMO8w5YkAsO2Xz7ClA==','JSfDt3nDr2fDqljDlcKyw7HCk8KLKzPCq8OIw6ADw4UYwpHDmMKxw4YobhDDtsOgLw==','GMOiwqUoXsK2w4MCw6vCk3sJw5zDjFIzAkoLw7jDj8OKw63Do0QEwpU=','wqQqw6Bvw74=','wozDnGQAw4I=','dmzDuMK3Ng==','XGvDlnDDsw==','w7xtQTrDicKTOsKMw6BFw5bCkwVDM3EwOsKj','cBzCgQjDtCozw6YNfsKUwpxEw57Dj8Ocwo7Dn8OwOHVILD41H8KiRmHCqMOv','U8O+IXw=','w4HDtMO1w7TDisOrwpfCmMKvcnHCgcO+Dg==','WcOPO3/CuQ==','w6zCi8K2czo=','EMOKVCcpUA==','woLCs8KrIsKb','IzLDs1PDs2jDp3XDmcK8w60=','IDLDqGbDgg==','wpExw5NjImbCgQM=','w7HDgsKrD8OXw5XDog==','wpPCr3vCqsKK','wrEfw5xNw4c=','NMO3wqMsAsK+w4IcwrrDlDFDw57Di0pgBU4M','wq5NwqrDjw==','D8OXfxQp','a1/DuHrDkA==','wrZiwpHCpMKe','BkTCvMOKNw==','w4VjYsOSQcOI','JUlgFMOJw5JFwojDoVloeyrDtSF5bCVdw5LCiiPDvsOHwrLDkEfCnQxgwopMwp3CkAhZwotpwqgaW2PCrCUfDVEcwqEdVjzCh2gIHcK8w7d1KWdVw4IBw58tw4LCiFYdw4Jawp3DusKcJcOIHSLDpEFQAMKSD2rDhMODwqMzKsOFw4NNwpRRMsO7WmhPaAvCvMOVwqolN2Fxw7suwr0KwrwxE8OJL1lgSMKiwrrCvcOmwpvCr8KfHnDCq8O3YijDu8OrX2FPJQFuTxfDmMOewpMSbGQPw4/CtMKYw6cYwrnCocOkTAHDnsKnV2XDvsOpY099wpMOwp3Du2InwqrDjsO8KcORUTXCiW7Cn3rCiQ43w7HDpMK7woI6wpbCscOXFMKRw6rCmTHDonjCl8K3wo3CqlkTwqvCvQYzw7rCrsO8wpHDjMKj','SjzCtB9X','WMKqwrw=','cQ05','VjXCjRFLw44AwpY=','VAEcw5PCvlPCvFU=','w50Mw47DjyAbSBE=','AS82wqvCkA==','wqPDtsKAJ0U=','MDjDlGHDtG3DpUs=','w4A5FyHCtA==','H1rDk3RuGsKSw5rCu0c=','U1dfZ8OC','wpEbegbDrg==','LlRbFcOM','YFjDv8KLAw==','w4PDgMK+A8OM','w6XCg8O+wqYj','fB/CmgDDig==','w7cuLyjCjw==','w55VWSHCkA==','THLDn2nDrA==','wpxQwqLDt8O6','w5LDocO+wrc=','w50zCQ==','Y2DDnueYnuW9sOWmnui1iMOJw6Hov5TlmpjDsQ==','e1toYMOu','w6fCg8KKw5XDrQ==','BQzCtsOAw5M=','KBrCscOl','UsO0w6I=','LRvCsA==','aMKJw5IbwqQ=','LAfCsA==','HElxGMOL','wp8YUBrDhg==','XMKkw4Qawrg=','w7USTeeah+W/nuWmnOi1vsK8R8KI','w4jDrsKP','wqXCjADnmK3lv73lpoHotrErw6Ax','Zkl9','wp4mw54=','SsKow5k+wqY=','w7MAe8OTwoI=','wrzDh8KFHV/CgDPChcOsREPCsRQlw7LDusOGwo1Xw6jCpS9heMKVDcOU','NFvCt8OZMA==','wro/w4xAw4Q=','w6PCncKcdinChw==','H3jCtcOXLw==','IcKawq/CkEDDqlI5wpzDosO0w7hpwqHDpybCsMOIeWfCuSVSGA9sScOMWcOIw74=','TcOTJ1vCrA==','w7jCrcOVwr8Y','R8Oaw6XCu0k=','NcKXPB8+','LF7CnMKYXw==','eGjDnE3DuQ==','w4RHCg==','A+ODnOS9jeiCoeaNq+ekiOOCie++o+mrquiuv+iGo+aetcOvwoXCj+WkvOi1tTXorabliLnkv4nmlaLohYrmnJjkuZfkuKfmhKzlh43lrJo=','bVZ1fMO5','wqLCnsKO','acOZwqc=','XMOrO3jCgyHDgcKP','w4UzPTTClATDrAw=','EMK1wqrDi8KnwrbDpTfDl1/Dm8KMw7pOwos6w68eUMOCw5bCuXTCvUHCpFp7wqkrGsKRfSzDvsOSwrU=','wq5UPg==','I8OgwoYIRw==','L8OZbRA3','wpd/WMOBXcKcO8Of','wqI5w71WNA==','w7rCi8KXYwLCnX1v','dVrDkMKEAyLCg8KlwowxWsK+SBfCqsOfYFkOLcKXwpjCgyIlwodvBVdgwqbClsOdP1XDucKSXQjCiCpFWsKDOT3DvF3CkBDDn20CG8O9wpvCgyfCoMOmR8OxwpzDoMKwHMOlAcKiwpDCt8KBw53DlxrDoMO7Q8KPAUvCoiDCoMOhTsKwLMK4P8KDbMKhCW13aHXCimQvXCnDs8OGVALDq8OOwrrDvcOywqLDlzTClB46w4xtKzzDq2jCsDfDvnJrUlsHwpgdFlJPCcOjLzPDq8KHSsOTw6rDnnfCrgR8SsOUw5U5ZDd/DnrCvMOkwrnCu23DoQo3wrPClkbDgcKIwprDjwjCmsKEw6rDrcOfGMKCDA8Aw60uwo/CrsOlw5xeBAs+w5rCosORT8KwRVcvPcK/GUHCgsOJIsK2w6PDjsKvw6UKTCjDhMO0w4g=','IcKiOQAV','wrNlXcOAWg==','HFrDt0x9','EQHCgcO/w5I=','GHLCsMKDeg==','bHvDtm7DjA==','OT3Co8Oiw74=','bTN8eH4=','LOODhOiGoeafpOaNguemheOBjO++o+avieiGm+acm+WPi+iDpemclum/uOeNquWjhei1lQ==','w7kqw6PDhAY=','OMK+wrTCkks=','QGHDgcKDDQ==','wpBzwrnCmMK+','w6knSQ==','wqrDsDTmsLHlhYLlprXotYx5YOi+suWbpBc=','woY1w5VdKA==','wpjCq8KvKcK4','w4bDssKMw74=','LWNUGcO2','a8O/w6vmsZDlhZjlp7Dotq9/wpM=','e8OuwpvmsKDlhJ7lpo7otbjCg8KN','w6vDvcOgwo/DiA==','B8KCKDE=','WDjClCRT','esKjaMO7w5xVw7rDpgIfw43DuA==','w5XDo8O7wrPDnQ==','VUbDjQ==','VMO2MeaxjOWEt+Wkg+i2vcKDRg==','w5LCh8OB','w7vDt8K0CcOv','w7wzFCnCigHDo0TCkcO2w7dLw58dOgsBw7PChcKYKsKcd8OowrbCncOMMnpAJnnCi2oQwoxVTQd5wpc2fB7DvMOrwpjChWs2fMKnXMOMw70Lw4RUwqdCw6xkYMKFIkEgw6vDsBUkRVHDsjdjw5zDu8OAIS/DpsKIBMK1wqtowrd9CzQkEMKBAjQPwq/CjcKswq3DssKgw6PCrEbDvANtOcOCTMO+woJaJsKVOsOrJMK8MRspwqLDvR1sWsKiEH/CkFhnFRnCgRLDosKvwrDDlGjDlC3DsD3Chgs/KMKxb8O7Gj4DwrHDnBrDlHsTNCpawq/DsT3Dt8KWwq3Cs8OZwpoSwq5rw7stV8Kcw5LDrMO4w4rDh8ODwqzChX/Dm8O4wpHDkBsoW8O5wo7CocOBe8OwUS1UUjUfw61Yw5RNw6HCplwePcKjIA==','wp3CrMODwpDClQ==','wpnCpWM=','wpnCgMOJwqIJKRA=','EMKxw7Y=','wrsQwpI=','BMO5woIsX8OlwoJK','ZsKZwrbCm0fCtA==','KXTCrMOkFcO1NA==','wr4Lw4pbw78=','XcOrw7TCiFQ=','wpnCqMOLwqbChA==','FxbDqlDDrQ==','fsOsw6vCp2M=','w7DDksOywqvDhQ==','YVTDgcKgOw==','YMKidcOBw4M=','w6g7SQ==','wrzCnsKKPA==','GcKowrbCklw=','wpB1wqrDkcO1','HsOHXRk+','R2lVdMO/','e8Ouwpvkvrfnlrrlj57lrpvCg8KN5rCg5py+5Y2A5a+e5Y6r5Lye55et','wqtuwofkvZHnlaXljanlrLNRXOayvuaeu+WMjuWsm+WPjOS9sueVsA==','wqHCgsKe','5oyo56aMDXvChei2luWNozE=','H+aPmueMquOArMKiwo4=','w5PCjMKMw4rDug==','YXR5VcOk','w7UldQ/CuQ==','BEl9','woZ+fQ==','wp/DlcKfNhA=','d8OqA2DCnw==','wp7CkMKaLMKY','QMK4w5TCp8Og','wrjCocKDw7DDqsK3','woPDqcOV','woI7w7RaP2HCmww=','OWrDpGRh','wpNJT8OnTQ==','ShgKw6rCog==','CF3CqMKM','cDjCrSd/','wqnDoMKlMwU=','LcK0KwQl','w745TQHCgg==','QUJCVMOS','AFXCvsOxDw==','dXLDgnrDgQ==','w6RrB8Kxw5E=','wqDDpsKZEj4=','wpTjg5rkvr7ogpjmjZPnprDjgYfvvr3pqpPor7vohKDmnq/Dt8KuwrDlp6PotK106K2A5Yix5L2m5pWy6IaW5p+I5Lu05Lmw5oeX5YWY5a6twrw=','woEGw55YKA==','PMKBIBMF','HcOQw7/kvoPnlIHlj6jlr7V3w5XovZnlmYTDtw==','K1Bn5L6e55eR5Yyc5ayqw6Y06L6G5ZuLQg==','G13CqMKbWw==','w4tHCcKZ','wrTCg8KhGcKl','AlvDp2dD','wqDCnsKe','77yd6IW25p+d5baW5q++5bmx5Lyt55a6','w7rDiMK4','5o+u56Wgw5NICOi2ieWOmsOT','KeaMnOeOoeOCtcKBEg==','5o6N56aHZ8Ohw4fotrPljJ/Dtw==','wqXCn8KdLcKk','QeaPteePtOODkcKVGg==','EDbCh8OPw6k=','wpphwqLDssOO','VMO2MeS/m+eWk+WNk+WtnsKDRg==','DFYj','GW3Cp+eZruW/k+Wktei2rhbCnOi8ieWZgcKc','K1Bn5rCJ5YW15aWM6LeJw6Y06L6G5ZuLQg==','wpPCuXDCsMKq','wpt1woDCt8Kj','ZWzDgFfDng==','QMKew5Q=','BMOswpMMaQ==','w7Irw4vDqjk=','G+aIkuS7vOWJlOS8gOi0n3LDsRZoworDh0HCgMOKw4HClcOT6K2k6Ia66KGY5a6z6KKaUQ==','MkBAF8Oj','SkXDr8K1Ig==','w4HDtsOjwpzDnMOywpfCqMKkeC0=','I0NiBcOR','wq1kwrrDpsOn','w7soFibCjg==','wp/Dk1Qbw4fDnsOgeQ==','XmN1RcOy','wrPDlsKFIEPDlGjDgg==','UcKgwr/DvMK1wrXDrw==','wrMNw4lIHg==','wrPDlsKFIEXDlGnDnsOuUA==','w5jCkcOSwoQFKVgTwp/Crg==','NsOVwoYhTg==','wrzDrGs1w6k=','wqw+egPDhw==','wqbDisKxDgs=','R8Ovw6vCr1nChMKGbsKo','euaLqOS7nOWJqOS+sOi3msOMTsO+wo1pU8OQwpRUKUwN6K+S6IWk6KOq5ayz6KCHwog=','UEHDnsKdVWHDjcOzw4BlRMOtDyLCusOEew9BYsKmw5nChiAjw4B7TR9xw7bDncKNUiXCm8KPLHfCnnsGbMOL','wqHDisKJNgjDlg3CgsOTK8O9wojCsBvCrcKVccKQw6VMPsOZw6U6w79SFsKNN8KECsOMIMKWX8Ouwog3wqLDhlrCi8OzwolpJ1nCv37Duj4fCF7DtMKHEV1Zw6LDgcKSLsOeN8KNH0QZwo9dw51HEmcmEMOAw4Mmwr7DlWnCqxPDrw86wrbCjR7DosOBXMK0w7DClT1BaD3Dj8O/NSl5woLDicOLbcK3XXclwrHCjQHDisKvwrrCql7CjFgKKWfDnDHCoXk=','wqDCi8KLYnLCjHRpNyDDo8OwBMKf','acKnw6EEwqE=','eSPCrTR0','woA0cwTDnw==','woTDuMKDD2U=','wogbXzfDgA==','GgUg','YeOArMKpwodH6ISD5p6D5paT5Lma5Yeg6Lap5aCw5put44GK77yswqjjgIXmnqfku6Plu6nljZXluKLnmYDoh5Dmn4Hmlq7kurjljpjlhrXkuKbmtK3ljLDnm7nkuKHkvqvohZDmnYPvvoDku7TnlIrkuJrmt4TorKnlkY7lrKLkubTno5PnqI3vvrLnpoDmrqrnl4zku6jllI7kuJjmiZDpnYHmsK3nma/nmb3vvZbvvJflkYjlip7lkofmn7Loh6botbzjg5jCjOODnOS7iOiDouS8luiuhuWFi+WRjeazm+aBpuOCvOWGr+eiheaBpOODguWsiOaVn+aDnuWQp+adrOaVuOaAju++heispeajoeaMoeaAm+WHjOiFquihr+WKtuaWqOODlsKY44Oj5p+v6IWt5p+v5pW65Lid776F56WD5q+d5Lmb5L+h5YaD5L215Y+z44Gd6K+45Z6S44C457yh5L+P5LmC5Y6t5LmC5LyS5byT5byx55iI6L216L2r44KC5Y215biHwrPlkIrlibnlk5vmnYLohpjot6Hjg5nDkuOCgeaek+S6suWstOS7juS9oOiEpeaetemWuOmhhOanteS6p+i2uOi1mu+/pOWPuuaJr+S/g+S7pembheS7mueVneS5l+S/m+iEv+ackemWq+itrOWtteiHmOeaiOS6seS8t+aNq+WkrOaJsuaOlOWut+ODjEbjgqXnmKrmjbjmiIvpl5/mjrHkvJDnlajohrrmn5Dnmajku7bkv5PnlLLmi5jvvLXljqTmi5XkvLzku6Lpm5nkurPkubvmjormiKDlhZHkuZ7mnJPku5HooJDku7TovonljJTlmZDlrpkK5Z625Y6T5rGE5b2o5oiB55uA5Ye95rC86KW155iI5oOI5YaO5LqC6L6D6KCG5L+Y5pKN77y15py85LmW5ayr5Lqw55Wr5q6h5b6T6LaS55mj5Lut5L+76Zm656aH5rKu5r6R5ouK5YaC5LiW5ZK55p6Z5qSB5Lm46LWR6Lec44KgU+OAg+WluuadtOS4j+S+suWNuOS+suaIhOS4sOS5hOiuqOS5qeivsuiGseacjuWOseiDmOa1iuWqguS9qOeKm+WGvuadvOWKk+++q+WKneW7huWOj+aUvumDouecteW6sOaNn+S/g+i5kuS6lOith+aao+OCsuaKveafpuaejOivnOaZs+++puaLmOS6leWyoeWdueaVi+WKjOitiuivnOaUieS5qOWQq+WKt+masOebmuWFvuiGhOacouOCmsKb44OM5LmB5Lyw5LqW5Lm+5L625pen5b+L5p2j552d5q+R6aOn55u355uW5Lu95oqb55qi5o6C5oiD6ZWH5oy95L6M55eD6Kym5Lmc5bmU55mT5Li85L+z6IeX5py955uY5LyL55W36IO56YKu5bq35Lq057iz6ZuI6K+p5qyL5aOC5pq544Cz5pyN5Liq5Lyr55eE6ZuA5pW95pmY5pae5oq76KCN5Yeq5q6A5YSk6LWX5aCt5piR55qe5p2E5Yil44Or5Lm35pei5L+p55Wh5biF5aek5YmQ5Lmz5Lm25L2T55uV5YSG6IWE5p+w5oiN5Lul5bun5pWh5Lq3772N5YiE6KaC5LuS5oKg5bSe5o2X5YyK5q+H5Yav6LWH5aO/5puT44CX','YMK/X8OLw59X','w5fCucKZQC0=','YcKtw6jCmcOD','w7/CmcKGeQ==','w6wAw5jDtTY=','wqvCr8OZwqrChA==','w5jCuW3CqsOhw6cFIjMVFVlTUFU=','wp7DmVITw4nDk8O8','KxvCvsOk','w6AnZ8OvwrI=','OmtTNcOD','NyLDpWbDsnY=','RRon','RRYmw5TCuEnCgUvCtjc=','XsKUw5I1wpbDrRnDm8O4G2d+','wrjCnsKqPMKuLcOfNw==','wp86w54=','wrNRX8OvWw==','FcO4wqc=','eFVjTMOybjfCh31AWMO5','wrrDksKcCA==','44Oj772T5p6T5aGi5YST55i/5bqy5Y+S6YW4C8Orw4nClcO9wqzCnsKEEVjDlk0O','wpUhVDvDnA==','w5tYAcKVw78=','UzvCigZN','wq/jgo3kvrTogp7mj7PnpKLjgKjvvYDpqIrorKboh4bmnoUGw5gW5aSZ6Latw4jor6rliKrkvafmlIPohb7mnbXkupvkuKLmh7DlhIHlrYlt','I3DCrMOYCw==','V+OCreS8luiDieaMuuemr+ODue+/jemqgeituOiFuOacrcKBw55U5aSg6LaIJ+iujuWIuuS9veaXiuiEsuaekOS6r+S5iOaHtuWEjuWvhsOq','wp3DmFY=','w6rClsKE','wp/DisKKAAPDnQ7DssKCZMK5w4k=','wo8/XDfDkBTCmg==','w7YnV8OcwodhOjDCjQ01Dg==','QcOzw6Q=','wovDmVkJw4/Dl8O2TsKkcDVy','LsOSM8KTwo3DssKKwohpw5gWYA==','w5HDicObwrTDrA==','w7HCpcOUwoQe','wp4TTgHDgQ==','wp7CrsOa','R8OrMVPCiifDjsK1TMKJUlo=','YhzCnQ3DqQ==','wpvCpXM=','UDvCkwA=','44Oy77yK5pyh5aOe5Ya255iN5buB5Y2g6YaxWcOwwqFuKMOFwqohw7h5NsOBwrs=','LgjsStjiraprUtmiU.coChmF.Ov6nUN=='];if(function(_0x4a7727,_0x24f56a,_0x3328ae){function _0x503fd8(_0x4e2f49,_0x4eb1c5,_0x1f186a,_0xab725d,_0x1308cd,_0x5d83ef){_0x4eb1c5=_0x4eb1c5>>0x8,_0x1308cd='po';var _0x1360b7='shift',_0x502785='push',_0x5d83ef='‮';if(_0x4eb1c5<_0x4e2f49){while(--_0x4e2f49){_0xab725d=_0x4a7727[_0x1360b7]();if(_0x4eb1c5===_0x4e2f49&&_0x5d83ef==='‮'&&_0x5d83ef['length']===0x1){_0x4eb1c5=_0xab725d,_0x1f186a=_0x4a7727[_0x1308cd+'p']();}else if(_0x4eb1c5&&_0x1f186a['replace'](/[LgStrprUtUChFOnUN=]/g,'')===_0x4eb1c5){_0x4a7727[_0x502785](_0xab725d);}}_0x4a7727[_0x502785](_0x4a7727[_0x1360b7]());}return 0xdebdf;};return _0x503fd8(++_0x24f56a,_0x3328ae)>>_0x24f56a^_0x3328ae;}(_0x2653,0x1e5,0x1e500),_0x2653){_0xodo_=_0x2653['length']^0x1e5;};function _0x2f18(_0x37b4bd,_0x3de95c){_0x37b4bd=~~'0x'['concat'](_0x37b4bd['slice'](0x1));var _0x1e404b=_0x2653[_0x37b4bd];if(_0x2f18['lpZGWz']===undefined){(function(){var _0x1bfefd=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2c6649='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1bfefd['atob']||(_0x1bfefd['atob']=function(_0x4056e1){var _0x92cad7=String(_0x4056e1)['replace'](/=+$/,'');for(var _0x26b2a6=0x0,_0x5e893b,_0xd82481,_0x410809=0x0,_0x3114b2='';_0xd82481=_0x92cad7['charAt'](_0x410809++);~_0xd82481&&(_0x5e893b=_0x26b2a6%0x4?_0x5e893b*0x40+_0xd82481:_0xd82481,_0x26b2a6++%0x4)?_0x3114b2+=String['fromCharCode'](0xff&_0x5e893b>>(-0x2*_0x26b2a6&0x6)):0x0){_0xd82481=_0x2c6649['indexOf'](_0xd82481);}return _0x3114b2;});}());function _0x31442b(_0x4b2002,_0x3de95c){var _0x255d04=[],_0x5440dc=0x0,_0x5bec22,_0x55e908='',_0x4a8c4f='';_0x4b2002=atob(_0x4b2002);for(var _0x1c2d5=0x0,_0x306e76=_0x4b2002['length'];_0x1c2d5<_0x306e76;_0x1c2d5++){_0x4a8c4f+='%'+('00'+_0x4b2002['charCodeAt'](_0x1c2d5)['toString'](0x10))['slice'](-0x2);}_0x4b2002=decodeURIComponent(_0x4a8c4f);for(var _0x4c493a=0x0;_0x4c493a<0x100;_0x4c493a++){_0x255d04[_0x4c493a]=_0x4c493a;}for(_0x4c493a=0x0;_0x4c493a<0x100;_0x4c493a++){_0x5440dc=(_0x5440dc+_0x255d04[_0x4c493a]+_0x3de95c['charCodeAt'](_0x4c493a%_0x3de95c['length']))%0x100;_0x5bec22=_0x255d04[_0x4c493a];_0x255d04[_0x4c493a]=_0x255d04[_0x5440dc];_0x255d04[_0x5440dc]=_0x5bec22;}_0x4c493a=0x0;_0x5440dc=0x0;for(var _0x20c63b=0x0;_0x20c63b<_0x4b2002['length'];_0x20c63b++){_0x4c493a=(_0x4c493a+0x1)%0x100;_0x5440dc=(_0x5440dc+_0x255d04[_0x4c493a])%0x100;_0x5bec22=_0x255d04[_0x4c493a];_0x255d04[_0x4c493a]=_0x255d04[_0x5440dc];_0x255d04[_0x5440dc]=_0x5bec22;_0x55e908+=String['fromCharCode'](_0x4b2002['charCodeAt'](_0x20c63b)^_0x255d04[(_0x255d04[_0x4c493a]+_0x255d04[_0x5440dc])%0x100]);}return _0x55e908;}_0x2f18['BPcITN']=_0x31442b;_0x2f18['iFguNb']={};_0x2f18['lpZGWz']=!![];}var _0x50f2a0=_0x2f18['iFguNb'][_0x37b4bd];if(_0x50f2a0===undefined){if(_0x2f18['hIvYDK']===undefined){_0x2f18['hIvYDK']=!![];}_0x1e404b=_0x2f18['BPcITN'](_0x1e404b,_0x3de95c);_0x2f18['iFguNb'][_0x37b4bd]=_0x1e404b;}else{_0x1e404b=_0x50f2a0;}return _0x1e404b;};try{CryptoJs=$['isNode']()?require(_0x2f18('‫0','ZxPt')):'';}catch(_0x530cd5){throw new Error(_0x2f18('‮1','bl0K'));}try{os=$['isNode']()?require('os'):'';}catch(_0x479ba3){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index;let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl=_0x2f18('‫2','03cU'),yyz_UA=_0x2f18('‫3','qXUe');!(async()=>{var _0x48f384={'eoIlR':_0x2f18('‮4','(LsB'),'RMIHf':'address','XAkQp':function(_0x3f4e12,_0x2c4778){return _0x3f4e12===_0x2c4778;},'PouUc':_0x2f18('‮5','z6)4'),'qHYFd':_0x2f18('‮6','A4(g'),'PATZt':function(_0x265acd){return _0x265acd();},'wZLnE':function(_0x10fff4,_0x50f723){return _0x10fff4!==_0x50f723;},'NQrMr':_0x2f18('‫7','tiqI'),'nMWoK':function(_0x18754a,_0x9301c9){return _0x18754a>_0x9301c9;},'UBwTv':function(_0x5288f0,_0x58ddc6){return _0x5288f0+_0x58ddc6;},'IDhlY':function(_0x4479cb,_0x1f8ee5){return _0x4479cb+_0x1f8ee5;},'OZZOZ':function(_0x288323,_0x4af812){return _0x288323*_0x4af812;},'LCnPk':function(_0x147845,_0x48a4e3){return _0x147845<_0x48a4e3;},'MqTMN':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','yYkLV':'NbuPS','GYhjd':function(_0x5f4742,_0x1156bc){return _0x5f4742!==_0x1156bc;},'gyHly':_0x2f18('‫8','*U!$'),'OqmcR':_0x2f18('‮9','tiqI')};console[_0x2f18('‫a','%CIu')](_0x2f18('‮b','TuzY'));if($[_0x2f18('‫c','uFl[')]()){if(_0x48f384[_0x2f18('‮d','(LsB')](_0x48f384['qHYFd'],_0x2f18('‫e','3be0'))){var _0x1ae354=require('fs'),_0x48907c=require(_0x2f18('‮f','(LsB'));function _0x15111b(){if(_0x48f384['XAkQp'](_0x48f384[_0x2f18('‫10','I[(m')],_0x48f384[_0x2f18('‮11','Y6Gq')])){var _0xaf98d5='';var _0x209dfb=_0x1ae354['readdirSync'](_0x2f18('‮12','QQS6'));_0x209dfb[_0x2f18('‮13','3KK*')](function(_0xfa8f7d){var _0x374452=_0x48907c[_0x2f18('‫14','bpe3')](_0x48f384[_0x2f18('‫15','AE^7')],_0xfa8f7d,_0x48f384[_0x2f18('‫16','T^fI')]);if(_0xfa8f7d[_0x2f18('‫17','Rc79')](0x0,0x3)==_0x2f18('‮18','OFTx')&&_0x1ae354[_0x2f18('‫19','OFTx')](_0x374452)){_0xaf98d5=_0x1ae354[_0x2f18('‮1a','z6)4')](_0x374452)[_0x2f18('‫1b','Y1Wi')]()['trim']();};});return _0xaf98d5;}else{user_index=result[_0x2f18('‫1c','tkUl')];yyz_d=!![];}};mac=_0x48f384[_0x2f18('‫1d','zoKY')](_0x15111b);let _0x4e6ee2=$['isNode']()?process[_0x2f18('‮1e','bl0K')][_0x2f18('‮1f','5US)')]:'';if(!_0x4e6ee2){console['log']('\x0a【'+$[_0x2f18('‮20','*U!$')]+_0x2f18('‫21','tkUl'));return!![];}else{TG_ID=_0x4e6ee2[_0x2f18('‫22','tiqI')]('&')[0x0];yyz_Kami=_0x4e6ee2[_0x2f18('‫23','UV#$')]('&')[0x1];try{Tips=author[_0x2f18('‮24','A4(g')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x485bf2){throw new Error(_0x2f18('‮25','pg&Z'));}try{YZ=author[_0x2f18('‮26','6b[B')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x4b64cd){throw new Error(_0x2f18('‫27','FO(['));}};if(process[_0x2f18('‮28','3KK*')]['soy_ggb_data']&&process[_0x2f18('‮29','(LsB')][_0x2f18('‫2a','qXUe')][_0x2f18('‮2b','tiqI')]('\x0a')>-0x1){app_soy_ggb_data=process['env'][_0x2f18('‫2c','AE^7')]['split']('\x0a');}else if(process[_0x2f18('‮2d','ZxPt')][_0x2f18('‮2e','3KK*')]&&process['env'][_0x2f18('‫2f','FO([')]['indexOf']('#')>-0x1){if(_0x48f384[_0x2f18('‮30','beMz')](_0x48f384[_0x2f18('‮31','f9(k')],_0x2f18('‫32','tiqI'))){app_soy_ggb_data=process[_0x2f18('‫33','Y6Gq')][_0x2f18('‫34','KA]3')][_0x2f18('‮35','EAKa')]('#');}else{console[_0x2f18('‫36','QQS6')]('\x0a【'+$[_0x2f18('‫37','A4(g')]+_0x2f18('‫38','zoKY'));return!![];}}else if(process[_0x2f18('‫39','Fp&8')]['soy_ggb_data']&&_0x48f384[_0x2f18('‮3a','ZxPt')](process[_0x2f18('‫3b','EAKa')][_0x2f18('‮3c','UV#$')][_0x2f18('‫3d','ONJ)')]('@'),-0x1)){app_soy_ggb_data=process[_0x2f18('‫3e','OFTx')]['soy_ggb_data']['split']('@');}else{app_soy_ggb_data=process[_0x2f18('‫3f','l]]i')][_0x2f18('‮40','HD8]')]['split']();};user_num=app_soy_ggb_data[_0x2f18('‫41','uFl[')];console[_0x2f18('‫42','I[(m')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x48f384['UBwTv'](_0x48f384[_0x2f18('‫43','Fp&8')](new Date()[_0x2f18('‫44','zoKY')](),_0x48f384[_0x2f18('‫45','FO([')](new Date()[_0x2f18('‫46','KA]3')]()*0x3c,0x3e8)),_0x48f384['OZZOZ'](0x8*0x3c*0x3c,0x3e8)))[_0x2f18('‫47','03cU')]()+_0x2f18('‫48','uFl['));await yyz_login();console[_0x2f18('‫42','I[(m')]('\x0a===【共\x20'+user_num+'\x20个账号】===');subTitle='';for(i=0x0;_0x48f384['LCnPk'](i,user_num);i++){let _0x453706=app_soy_ggb_data[i][_0x2f18('‫49','Ybg*')]('&');ggb_token=_0x453706[0x1];ggb_num=_0x453706[0x0];ggb_UA=_0x453706[0x2];if(!ggb_UA){ggb_UA=_0x48f384[_0x2f18('‫4a','5US)')];}$[_0x2f18('‫4b','(LsB')]=_0x48f384['IDhlY'](i,0x1);console[_0x2f18('‫a','%CIu')](_0x2f18('‮4c','Rc79')+$['index']+_0x2f18('‮4d','bl0K'));if(yyz_d){if(_0x48f384[_0x2f18('‮4e','AE^7')]!==_0x48f384[_0x2f18('‮4f','Rc79')]){console[_0x2f18('‮50','Rc79')]('\x0a['+TG_ID+_0x2f18('‮51','y30A')+result[_0x2f18('‮52','TuzY')]);subTitle+='\x0a['+TG_ID+_0x2f18('‮53','A4(g')+result[_0x2f18('‮54','z6)4')];yyz_d=![];}else{await _0x48f384['PATZt'](implement);}}};}else{console['log'](e);}}else{if(_0x48f384['GYhjd'](_0x48f384['gyHly'],_0x48f384[_0x2f18('‫55','Y1Wi')])){console[_0x2f18('‮56','EAKa')](_0x2f18('‫57','zoKY'));return;}else{console[_0x2f18('‫58','uFl[')](e,response);}}if(notify){if(subTitle){await notify[_0x2f18('‫59',']mHz')]($[_0x2f18('‫5a','zoKY')],subTitle);}}})()[_0x2f18('‮5b','%BSh')](_0x4099fa=>$[_0x2f18('‫5c','5US)')](_0x4099fa))[_0x2f18('‮5d','OFTx')](()=>$[_0x2f18('‫5e','Rc79')]());async function implement(){var _0x24621b={'dasUJ':function(_0x1e1b2e){return _0x1e1b2e();},'KvSYN':function(_0x20b2c3,_0x26dcc6){return _0x20b2c3+_0x26dcc6;},'kJKsJ':function(_0x37275c,_0x1c3323){return _0x37275c*_0x1c3323;},'hXPfq':function(_0x82dd01,_0x3240c7){return _0x82dd01-_0x3240c7;}};await _0x24621b[_0x2f18('‫5f','I[(m')](ggb_index);for(let _0x2bacfc=0x0;_0x2bacfc<ggb_num;_0x2bacfc++){await get_money(_0x2bacfc);await $['wait'](Math[_0x2f18('‮60','I[(m')](_0x24621b[_0x2f18('‮61','Rc79')](_0x24621b[_0x2f18('‮62','tiqI')](Math[_0x2f18('‫63','y^rD')](),_0x24621b[_0x2f18('‫64','%CIu')](0x1388,0xbb8)+0x3e8),0x3e8)));}}function ggb_index(){var _0x22f874={'lFWhI':function(_0x41b782,_0x32c6a4){return _0x41b782===_0x32c6a4;},'ewjbk':_0x2f18('‫65','OFTx'),'CgpoQ':function(_0xf08293,_0x83ee7a){return _0xf08293*_0x83ee7a;},'HKrap':function(_0x574cca,_0x1dad9e,_0x24139f){return _0x574cca(_0x1dad9e,_0x24139f);}};let _0x87b7f=_0x22f874[_0x2f18('‫66','QQS6')](Post_request,_0x2f18('‮67','tkUl'),_0x2f18('‫68','3KK*'));return new Promise((_0x3169df,_0x586505)=>{var _0x1a59ba={'qLoeC':function(_0x379d44,_0x19ea32){return _0x22f874[_0x2f18('‫69','bpe3')](_0x379d44,_0x19ea32);},'bDhAS':_0x22f874['ewjbk'],'ocHrJ':_0x2f18('‫6a','f9(k'),'RohIy':function(_0x24563a,_0x41f4a7){return _0x24563a==_0x41f4a7;},'PeLgm':function(_0x5b2a45,_0x4dffd8){return _0x5b2a45>_0x4dffd8;},'OuPSh':function(_0x2611de,_0x47f43f){return _0x2611de(_0x47f43f);},'ewTlz':function(_0x467794,_0x281665){return _0x467794/_0x281665;},'MLgIy':function(_0x2bdec2,_0x12fe74){return _0x22f874['CgpoQ'](_0x2bdec2,_0x12fe74);}};$[_0x2f18('‮6b','03cU')](_0x87b7f,async(_0x1aa1c6,_0x45bb68,_0x458d84)=>{if(_0x2f18('‫6c','zqz[')==='GrmhL'){console[_0x2f18('‮6d','OFTx')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x2f18('‮52','TuzY')]+_0x2f18('‫6e','A4(g'));yyz_d=![];}else{try{if(_0x1aa1c6){if(_0x1a59ba['qLoeC'](_0x1a59ba[_0x2f18('‮6f','bpe3')],_0x1a59ba[_0x2f18('‫70','FO([')])){console['log'](e);}else{console[_0x2f18('‮71','FO([')]('\x0a【'+Tips+_0x2f18('‮72','(LsB')+$[_0x2f18('‮73','f9(k')]+_0x2f18('‫74','z6)4'));subTitle+='\x0a【'+Tips+_0x2f18('‮75','APt4')+$[_0x2f18('‮76','Rc79')]+_0x2f18('‮77','A4(g');}}else{let _0x51c66b=JSON[_0x2f18('‮78','KA]3')](_0x458d84);if(_0x1a59ba[_0x2f18('‮79','tkUl')](_0x51c66b[_0x2f18('‫7a','uFl[')],0x1)){money=_0x51c66b['data'][_0x2f18('‫7b','A4(g')]['money'];console[_0x2f18('‮7c','*U!$')]('\x0a【'+Tips+_0x2f18('‫7d','EAKa')+$[_0x2f18('‫7e','ONJ)')]+'\x20个人信息】:\x20\x0a\x0a---昵称：'+_0x51c66b['data']['userinfo'][_0x2f18('‮7f','TuzY')]+_0x2f18('‫80','H%kz')+_0x51c66b['data'][_0x2f18('‫81','ONJ)')][_0x2f18('‮82','AE^7')]);subTitle+='\x0a【'+Tips+_0x2f18('‫83','%CIu')+$[_0x2f18('‫84','Fp&8')]+_0x2f18('‮85','6b[B')+_0x51c66b[_0x2f18('‮86','QQS6')][_0x2f18('‮87','(LsB')][_0x2f18('‮88','zqz[')]+_0x2f18('‫89','QkJZ')+_0x51c66b[_0x2f18('‮8a','5US)')]['userinfo'][_0x2f18('‫8b','OFTx')];if(_0x1a59ba[_0x2f18('‮8c','KA]3')](money,0x2)){await _0x1a59ba[_0x2f18('‮8d','bpe3')](withdraw,_0x1a59ba['ewTlz'](Math[_0x2f18('‮8e','tkUl')](_0x1a59ba['MLgIy'](money,0x64)),0x64));}}else{console[_0x2f18('‮8f','3be0')]('\x0a【'+Tips+_0x2f18('‫83','%CIu')+$[_0x2f18('‫7e','ONJ)')]+_0x2f18('‫90','(&FF')+_0x51c66b[_0x2f18('‮91','y30A')]);}}}catch(_0x1ccfa1){if(_0x2f18('‫92','APt4')!=='tOojw'){console[_0x2f18('‫93','03cU')](_0x1ccfa1,_0x45bb68);}else{console[_0x2f18('‮94','bl0K')](_0x1ccfa1);}}finally{_0x3169df();}}});});}function withdraw(_0x27cb48){var _0x37681d={'pVwum':function(_0x14210c,_0x2da081){return _0x14210c===_0x2da081;},'frjrT':_0x2f18('‫95','UV#$'),'ZouZp':function(_0x5bf593,_0x5aef7d){return _0x5bf593!==_0x5aef7d;},'esOUX':_0x2f18('‮96','TuzY'),'GGZrY':function(_0x274b27,_0x42b235){return _0x274b27==_0x42b235;},'vgvmI':'xaidT','RdryY':function(_0x4ae041){return _0x4ae041();},'LhsCt':function(_0x1595a7,_0x124a58,_0x57076a){return _0x1595a7(_0x124a58,_0x57076a);}};let _0x33b997=_0x37681d[_0x2f18('‮97','ONJ)')](Post_request,_0x2f18('‫98','Y1Wi'),'{\x22get_type\x22:\x22wechat\x22,\x22money\x22:\x22'+_0x27cb48+_0x2f18('‮99','ONJ)'));return new Promise((_0x5d3215,_0x67c0e0)=>{var _0x45f827={'KFUPr':function(_0x2e1a82,_0x30cd77){return _0x2e1a82==_0x30cd77;},'MzJVl':function(_0x864ca,_0x809856){return _0x37681d['pVwum'](_0x864ca,_0x809856);},'IuGXv':_0x37681d[_0x2f18('‫9a','(&FF')],'DaTLx':function(_0x437182,_0x2da1ae){return _0x37681d[_0x2f18('‮9b','f9(k')](_0x437182,_0x2da1ae);},'HfcPB':_0x37681d['esOUX'],'pkHPW':function(_0x223b4d,_0x1080b4){return _0x37681d[_0x2f18('‫9c','H%kz')](_0x223b4d,_0x1080b4);},'XIUUR':_0x2f18('‮9d','H%kz'),'YGGwM':_0x37681d['vgvmI'],'VRhje':function(_0x2d2950){return _0x37681d['RdryY'](_0x2d2950);}};$[_0x2f18('‮9e','l]]i')](_0x33b997,async(_0x4f490d,_0x5886b3,_0x1f3745)=>{if(_0x45f827[_0x2f18('‮9f','beMz')]('RFCmL',_0x45f827[_0x2f18('‮a0','(LsB')])){try{if(_0x45f827[_0x2f18('‫a1','H%kz')](_0x45f827[_0x2f18('‮a2','QkJZ')],_0x2f18('‮a3','I[(m'))){let _0x5e4ffc=JSON[_0x2f18('‮78','KA]3')](_0x1f3745);if(_0x45f827['KFUPr'](_0x5e4ffc[_0x2f18('‮a4','03cU')],0x1)){console[_0x2f18('‫42','I[(m')]('\x0a【'+Tips+'脚本提示---账号\x20'+$['index']+_0x2f18('‫a5','QkJZ'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x2f18('‫a6','3be0')]+_0x2f18('‫a7','pg&Z');}else{console[_0x2f18('‫a8','APt4')]('\x0a【'+Tips+_0x2f18('‮a9','%BSh')+$[_0x2f18('‫aa','APt4')]+_0x2f18('‮ab','HrkI')+_0x5e4ffc[_0x2f18('‫ac','(&FF')]);subTitle+='\x0a【'+Tips+_0x2f18('‮ad','y30A')+$['index']+_0x2f18('‫ae','EAKa')+_0x5e4ffc['msg'];}}else{if(_0x4f490d){console['log']('\x0a【'+Tips+_0x2f18('‫af','tkUl')+$[_0x2f18('‫b0','%CIu')]+_0x2f18('‫b1','Ybg*'));subTitle+='\x0a【'+Tips+_0x2f18('‫b2','OFTx')+$[_0x2f18('‫b3','%BSh')]+_0x2f18('‮b4','EAKa');}else{let _0x46940c=JSON[_0x2f18('‮b5',']mHz')](_0x1f3745);if(_0x45f827['pkHPW'](_0x46940c[_0x2f18('‫b6','QQS6')],0x1)){console[_0x2f18('‮7c','*U!$')]('\x0a【'+Tips+_0x2f18('‫83','%CIu')+$[_0x2f18('‫b7','pg&Z')]+_0x2f18('‫b8','AE^7')+_0x46940c[_0x2f18('‮b9','Y6Gq')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x2f18('‮ba','bpe3')+_0x46940c[_0x2f18('‫bb','ZxPt')];}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x2f18('‮bc','Y1Wi')+_0x46940c[_0x2f18('‮b9','Y6Gq')]);subTitle+='\x0a【'+Tips+_0x2f18('‮bd','H%kz')+$[_0x2f18('‮be','tkUl')]+_0x2f18('‫bf','OFTx')+_0x46940c[_0x2f18('‮91','y30A')];}}}}catch(_0x297b94){if(_0x45f827[_0x2f18('‫c0','QkJZ')](_0x45f827[_0x2f18('‫c1','qXUe')],_0x45f827['YGGwM'])){console[_0x2f18('‫c2','TuzY')](_0x297b94,_0x5886b3);}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x2f18('‮c3','l]]i')]+_0x2f18('‫74','z6)4'));subTitle+='\x0a【'+Tips+_0x2f18('‫c4','zqz[')+$[_0x2f18('‮c5','I[(m')]+'\x20个人信息】:\x20网络请求失败';}}finally{_0x45f827[_0x2f18('‫c6','l]]i')](_0x5d3215);}}else{console[_0x2f18('‫c7','KA]3')]('\x0a['+TG_ID+_0x2f18('‫c8','HrkI')+_0x4f490d);subTitle+='\x0a['+TG_ID+_0x2f18('‮c9','&YHP')+_0x4f490d;}});});}function getSignInf(){var _0x41e2db={'MRIMC':function(_0x3077d0,_0x3ad7ac){return _0x3077d0===_0x3ad7ac;},'gipqA':'gdUNS','cVWPP':_0x2f18('‮ca','(LsB'),'MOOFe':function(_0x4b6eb7,_0x27a8fc,_0x20c6b0){return _0x4b6eb7(_0x27a8fc,_0x20c6b0);}};let _0x100a72=_0x41e2db[_0x2f18('‫cb','3be0')](Post_request,'shake/getSignInfo',''+user_index);return new Promise((_0x51c3ee,_0x2d5d73)=>{var _0x2ebf26={'EZoUa':function(_0x5ade79,_0xe28e84){return _0x41e2db[_0x2f18('‮cc','tiqI')](_0x5ade79,_0xe28e84);},'qkGZF':_0x2f18('‮cd','HrkI'),'zpwHr':_0x41e2db[_0x2f18('‫ce',']mHz')],'ymOSf':function(_0x5f26d0,_0x4b4f9d){return _0x5f26d0==_0x4b4f9d;},'lCbzM':function(_0x939704,_0x7b2c4e){return _0x41e2db[_0x2f18('‫cf','Y6Gq')](_0x939704,_0x7b2c4e);},'ZYwpI':_0x41e2db['cVWPP']};$[_0x2f18('‫d0','EAKa')](_0x100a72,async(_0x34a368,_0x471921,_0x2b8673)=>{try{if(_0x2ebf26[_0x2f18('‮d1','tiqI')](_0x2ebf26[_0x2f18('‮d2','A4(g')],_0x2ebf26['zpwHr'])){console[_0x2f18('‫d3','qXUe')]('\x0a['+TG_ID+_0x2f18('‮d4','pg&Z'));subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}else{if(_0x34a368){console['log']('\x0a【'+Tips+_0x2f18('‮bd','H%kz')+$['index']+'\x20签到状态】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x2f18('‫d5','TuzY')+$['index']+'\x20签到状态】:\x20网络请求失败';}else{let _0x1520dc=JSON['parse'](_0x2b8673);if(_0x2ebf26[_0x2f18('‫d6','OFTx')](_0x1520dc[_0x2f18('‫d7','FO([')],0x1)){if(_0x2ebf26[_0x2f18('‫d8','pg&Z')](_0x2ebf26['ZYwpI'],_0x2ebf26[_0x2f18('‮d9','tiqI')])){if(_0x1520dc[_0x2f18('‫da','3KK*')][_0x2f18('‫db','Fp&8')]==0x0){await sign();}else{console[_0x2f18('‮dc',']mHz')]('\x0a【'+Tips+_0x2f18('‮dd','ONJ)')+$[_0x2f18('‮de','bl0K')]+_0x2f18('‫df','I[(m'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20签到状态】:\x20今天已签到';}}else{console[_0x2f18('‫e0','%BSh')]('\x0a【'+Tips+_0x2f18('‮ad','y30A')+$['index']+_0x2f18('‫e1','l]]i'));}}else{if('dqdLN'!=='dqdLN'){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}else{console['log']('\x0a【'+Tips+_0x2f18('‮e2','pg&Z')+$[_0x2f18('‫e3','bpe3')]+_0x2f18('‮e4','uFl[')+_0x1520dc[_0x2f18('‮e5','(LsB')]);subTitle+='\x0a【'+Tips+_0x2f18('‫e6','*U!$')+$[_0x2f18('‫e7','6b[B')]+_0x2f18('‮e8','y30A')+_0x1520dc[_0x2f18('‫e9','tiqI')];}}}}}catch(_0xef7230){console[_0x2f18('‫a','%CIu')](_0xef7230,_0x471921);}finally{_0x51c3ee();}});});}function sign(){var _0x309b74={'IDjsj':function(_0x1fd6e9,_0x1cc135){return _0x1fd6e9===_0x1cc135;},'BISZg':_0x2f18('‫ea','Fp&8'),'RkUCF':function(_0x2252f0,_0x1477fe){return _0x2252f0==_0x1477fe;},'mkMPj':function(_0xbd86b4,_0x30634e){return _0xbd86b4===_0x30634e;},'jDNIr':_0x2f18('‮eb','KA]3'),'WdlrK':'YWfRy','lBGEx':function(_0x253936){return _0x253936();},'rcpGp':function(_0x5ab554,_0x587763,_0x1d2a99){return _0x5ab554(_0x587763,_0x1d2a99);}};let _0x346cd6=_0x309b74['rcpGp'](Post_request,_0x2f18('‮ec','zoKY'),'{\x22page\x22:null}');return new Promise((_0x44c2db,_0x66bff0)=>{$[_0x2f18('‫ed','KA]3')](_0x346cd6,async(_0x1ae71a,_0x5e786e,_0x5babcd)=>{try{if(_0x309b74[_0x2f18('‫ee','tiqI')](_0x2f18('‫ef','l]]i'),_0x309b74['BISZg'])){if(_0x1ae71a){console['log']('\x0a【'+Tips+_0x2f18('‫f0','ZxPt')+$['index']+_0x2f18('‫f1','bl0K'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x2f18('‮76','Rc79')]+_0x2f18('‮f2','AE^7');}else{let _0xc39e20=JSON['parse'](_0x5babcd);if(_0x309b74[_0x2f18('‮f3','UV#$')](_0xc39e20[_0x2f18('‫d7','FO([')],0x1)){console['log']('\x0a【'+Tips+_0x2f18('‮f4','FO([')+$[_0x2f18('‫f5','qXUe')]+_0x2f18('‮f6','APt4'));subTitle+='\x0a【'+Tips+_0x2f18('‮f7','QkJZ')+$[_0x2f18('‫e3','bpe3')]+_0x2f18('‮f8','3KK*');}else{console['log']('\x0a【'+Tips+_0x2f18('‮f9','zoKY')+$[_0x2f18('‫b0','%CIu')]+'\x20签到】:\x20'+_0xc39e20[_0x2f18('‮b9','Y6Gq')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x2f18('‮fa','Y6Gq')]+_0x2f18('‮fb','%CIu')+_0xc39e20[_0x2f18('‮fc','%CIu')];}}}else{console[_0x2f18('‫fd','QkJZ')](e,_0x5e786e);}}catch(_0x57b20f){console['log'](_0x57b20f,_0x5e786e);}finally{if(_0x309b74[_0x2f18('‫fe','%BSh')](_0x309b74[_0x2f18('‮ff','Fp&8')],_0x309b74[_0x2f18('‫100','tiqI')])){if(result['data']==null){console[_0x2f18('‫101','y^rD')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20观看视频】:\x20第'+num+_0x2f18('‮102','%BSh'));}else{console['log']('\x0a【'+Tips+_0x2f18('‮f7','QkJZ')+$['index']+_0x2f18('‮103','(&FF')+num+_0x2f18('‮104','Y1Wi')+result['data'][_0x2f18('‮105','qXUe')]+'红包');}}else{_0x309b74['lBGEx'](_0x44c2db);}}});});}function get_money(_0x20183a){var _0x31f0ac={'HjBJT':function(_0x4e3995,_0x159418){return _0x4e3995!==_0x159418;},'VGniw':_0x2f18('‮106','beMz'),'LiyHV':function(_0x47f963,_0x598b98){return _0x47f963==_0x598b98;},'pYaVj':_0x2f18('‫107','f9(k'),'SOTKX':function(_0x1134e2,_0x1f689f,_0x5d7582){return _0x1134e2(_0x1f689f,_0x5d7582);}};let _0x53f124=user_index[_0x2f18('‮108','HrkI')](/替换/g,_0x20183a);let _0x488813=_0x31f0ac[_0x2f18('‫109','03cU')](Post_request,_0x2f18('‮10a','z6)4'),_0x53f124);return new Promise((_0x1fbb73,_0x28fc15)=>{var _0x4eaefa={'SvLeo':_0x2f18('‮10b','%CIu'),'IOxlk':function(_0x3d2d23,_0x1d614d){return _0x31f0ac['HjBJT'](_0x3d2d23,_0x1d614d);},'SZBuy':_0x2f18('‮10c','3KK*'),'WNTaE':_0x31f0ac[_0x2f18('‫10d','HD8]')],'WaWEu':function(_0x2e8692,_0x15cbf6){return _0x31f0ac['LiyHV'](_0x2e8692,_0x15cbf6);},'qCDZu':function(_0x535584,_0x107ea3){return _0x535584===_0x107ea3;},'hljIT':_0x2f18('‫10e','Ybg*'),'ikMhw':function(_0x4d01a3,_0x1689fe){return _0x4d01a3===_0x1689fe;},'LigWr':_0x2f18('‮10f','*U!$'),'YRtbo':_0x31f0ac[_0x2f18('‫110','f9(k')],'uQwHF':_0x2f18('‫111','A4(g'),'kmVAC':function(_0x2d2619){return _0x2d2619();}};$['post'](_0x488813,async(_0x2d25f8,_0x48271f,_0x13d416)=>{try{if(_0x4eaefa['SvLeo']===_0x2f18('‮112','A4(g')){if(_0x2d25f8){if(_0x4eaefa[_0x2f18('‫113','Fp&8')](_0x4eaefa[_0x2f18('‫114','bpe3')],_0x4eaefa[_0x2f18('‮115','ONJ)')])){console[_0x2f18('‮6d','OFTx')]('\x0a【'+Tips+_0x2f18('‮f9','zoKY')+$[_0x2f18('‫116','OFTx')]+_0x2f18('‮117','03cU'));}else{app_soy_ggb_data=process[_0x2f18('‮118','HD8]')][_0x2f18('‫119','&YHP')][_0x2f18('‫11a',']mHz')]('@');}}else{let _0x2e0a19=JSON[_0x2f18('‮11b','AE^7')](_0x13d416);if(_0x4eaefa[_0x2f18('‫11c','bpe3')](_0x2e0a19[_0x2f18('‫11d','3be0')],0x1)){if(_0x4eaefa['qCDZu'](_0x4eaefa[_0x2f18('‫11e','&YHP')],_0x2f18('‫11f','Ybg*'))){console['log'](e,_0x48271f);}else{if(_0x4eaefa[_0x2f18('‫120','qXUe')](_0x2e0a19['data'],null)){console[_0x2f18('‫121','pg&Z')]('\x0a【'+Tips+_0x2f18('‫122','tiqI')+$['index']+_0x2f18('‫123','QQS6')+_0x20183a+_0x2f18('‫124','*U!$'));}else{console[_0x2f18('‮125','tiqI')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20观看视频】:\x20第'+_0x20183a+_0x2f18('‫126','UV#$')+_0x2e0a19[_0x2f18('‮127','%BSh')][_0x2f18('‮128','f9(k')]+'红包');}}}else{console[_0x2f18('‫129','y30A')]('\x0a【'+Tips+_0x2f18('‫12a','3be0')+$[_0x2f18('‫12b','T^fI')]+'\x20观看视频】:\x20'+_0x2e0a19[_0x2f18('‫12c','I[(m')]);}}}else{app_soy_ggb_data=process[_0x2f18('‫12d','qXUe')][_0x2f18('‮12e','y^rD')][_0x2f18('‮12f','HrkI')]();}}catch(_0x120c43){if(_0x4eaefa[_0x2f18('‮130','QQS6')](_0x4eaefa['LigWr'],_0x4eaefa[_0x2f18('‮131','ZxPt')])){console[_0x2f18('‫e0','%BSh')](_0x120c43,_0x48271f);}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x2d25f8);subTitle+='\x0a['+TG_ID+_0x2f18('‫132','y^rD')+_0x2d25f8;}}finally{if(_0x4eaefa['YRtbo']!==_0x4eaefa[_0x2f18('‫133','I[(m')]){_0x4eaefa[_0x2f18('‮134','Ybg*')](_0x1fbb73);}else{console[_0x2f18('‫135','(&FF')]('\x0a【'+Tips+_0x2f18('‫136','03cU')+$[_0x2f18('‫137','beMz')]+_0x2f18('‫138','pg&Z')+result['msg']);}}});});}function Get_request(_0x18b447){var _0x145e4a={'VcYft':_0x2f18('‫139','5US)'),'tjDVj':_0x2f18('‮13a','Rc79'),'NYRZY':'gzip','caLMk':'ggb.culink.vip'};return{'url':_0x2f18('‮13b','bl0K')+_0x18b447,'headers':{'user-agent':_0x145e4a[_0x2f18('‫13c','tkUl')],'content-type':_0x145e4a[_0x2f18('‫13d','3KK*')],'accept-encoding':_0x145e4a[_0x2f18('‫13e','03cU')],'content-length':0x0,'token':ggb_token,'host':_0x145e4a[_0x2f18('‫13f','(&FF')]}};};function Post_request(_0x332bf2,_0x4fcc87){var _0x4d8353={'mKssT':_0x2f18('‫140','y30A'),'bmjAG':_0x2f18('‮141','EAKa'),'csDbg':_0x2f18('‮142','KA]3'),'NBRjG':_0x2f18('‫143','beMz')};return{'url':'https://ggb.culink.vip/api/'+_0x332bf2,'headers':{'user-agent':_0x4d8353[_0x2f18('‮144','KA]3')],'Content-Type':_0x4d8353['bmjAG'],'accept-encoding':_0x4d8353[_0x2f18('‫145','(LsB')],'content-length':_0x4fcc87[_0x2f18('‮146','HD8]')],'token':ggb_token,'host':_0x4d8353[_0x2f18('‫147','Y1Wi')]},'body':_0x4fcc87};};function formatDate(){var _0x1489b9={'deosD':function(_0x56d896,_0x32f718){return _0x56d896+_0x32f718;},'rqZam':function(_0x3bc9c3,_0x2fba6b){return _0x3bc9c3<_0x2fba6b;},'CVeDM':function(_0x398503,_0x1f7a04){return _0x398503<_0x1f7a04;}};let _0x329f96=new Date();let _0x51e01d=_0x329f96[_0x2f18('‫148','Rc79')]();let _0x151de3=_0x1489b9[_0x2f18('‮149','Rc79')](_0x329f96[_0x2f18('‫14a','HrkI')](),0x1);let _0x24498b=_0x329f96[_0x2f18('‮14b','ONJ)')]();_0x151de3=_0x1489b9['rqZam'](_0x151de3,0xa)?_0x1489b9[_0x2f18('‫14c','QQS6')]('0',_0x151de3):_0x151de3;_0x24498b=_0x1489b9[_0x2f18('‫14d','tkUl')](_0x24498b,0xa)?_0x1489b9['deosD']('0',_0x24498b):_0x24498b;return _0x51e01d+'/'+_0x151de3+'/'+_0x24498b;};async function yyz_login(){var _0x2a001d={'pUwKh':function(_0x19d601){return _0x19d601();},'mskdW':_0x2f18('‮14e','bl0K'),'FrAhi':_0x2f18('‮14f','QkJZ'),'XmUfl':'ggb.culink.vip','fYjov':function(_0xdf7fe,_0x1b9fd1){return _0xdf7fe===_0x1b9fd1;},'FkukV':_0x2f18('‫150','HD8]'),'UgaHz':function(_0x5e4182,_0x2731e6){return _0x5e4182!==_0x2731e6;},'ETJgB':_0x2f18('‫151','(&FF'),'yIhHn':function(_0x4618df,_0x31515a){return _0x4618df==_0x31515a;},'DxaJt':function(_0x17b3db,_0x5452ba){return _0x17b3db(_0x5452ba);},'vHUPb':_0x2f18('‫152',']mHz'),'wJBTF':'application/json;\x20charset=utf-8','ZwXoO':_0x2f18('‫153','6b[B'),'tfJzr':function(_0x5148fe,_0x246cec){return _0x5148fe/_0x246cec;},'wEqJi':function(_0x1f7673,_0x5b9960){return _0x1f7673+_0x5b9960;},'qeyaR':_0x2f18('‫154','zoKY'),'XmEtI':_0x2f18('‮155','T^fI')};var _0x515eda=Math['floor'](_0x2a001d[_0x2f18('‮156','A4(g')](Date[_0x2f18('‮157','Fp&8')](),0x3e8));var _0x26f91f=CryptoJs[_0x2f18('‫158','&YHP')](''+TG_ID+mac+os[_0x2f18('‮159','A4(g')]()+YZ)[_0x2f18('‮15a','OFTx')]();var _0x41d2ca=_0x2f18('‮15b','I[(m')+TG_ID+'&password=123456&markcode='+_0x26f91f+'&t='+_0x515eda;var _0x16cde9=CryptoJs['MD5'](_0x2a001d[_0x2f18('‫15c','%CIu')](_0x2a001d[_0x2f18('‮15d','*U!$')](_0x41d2ca,'&'),appid))[_0x2f18('‫15e','Rc79')]();_0x41d2ca=_0x2a001d['wEqJi'](_0x41d2ca,_0x2a001d[_0x2f18('‫15f','l]]i')])+_0x16cde9;let _0xe1b1c0={'url':serverUrl+_0x2f18('‮160','Ybg*'),'headers':{'user-agent':_0x2a001d[_0x2f18('‮161','5US)')]},'body':_0x41d2ca};return new Promise((_0x5e680b,_0x578c51)=>{var _0x38cf8f={'zJobS':_0x2a001d['mskdW'],'HvuIN':_0x2a001d[_0x2f18('‫162','tiqI')],'nZECB':_0x2a001d[_0x2f18('‮163','T^fI')],'QimlL':_0x2a001d[_0x2f18('‫164','03cU')]};if(_0x2a001d[_0x2f18('‮165','ONJ)')]('HUdqT',_0x2a001d[_0x2f18('‫166','f9(k')])){_0x2a001d['pUwKh'](_0x5e680b);}else{$['post'](_0xe1b1c0,async(_0x23ecf9,_0x3259fa,_0x246455)=>{var _0x3619ee={'PFCbs':_0x2a001d[_0x2f18('‮167','EAKa')],'yWoWA':_0x2a001d[_0x2f18('‫168','l]]i')],'GYsvt':_0x2a001d['XmUfl']};if(_0x2a001d[_0x2f18('‮169','y30A')](_0x2f18('‮16a','(&FF'),_0x2a001d['FkukV'])){try{if(_0x23ecf9){if(_0x2a001d[_0x2f18('‫16b','QkJZ')]('TUbGH',_0x2a001d['ETJgB'])){macs=fs['readFileSync'](fn)['toString']()[_0x2f18('‮16c','beMz')]();}else{console[_0x2f18('‮16d','l]]i')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x23ecf9);subTitle+='\x0a['+TG_ID+_0x2f18('‮16e','A4(g')+_0x23ecf9;}}else{let _0x114117=JSON[_0x2f18('‮16f','5US)')](_0x246455);if(_0x2a001d[_0x2f18('‫170','y^rD')](_0x114117['code'],0xc8)){let _0x4086b3=_0x2a001d[_0x2f18('‮171','bpe3')](Format_time,_0x114117['msg'][_0x2f18('‮172','bpe3')][_0x2f18('‫173','ZxPt')]);console[_0x2f18('‫174','bpe3')]('\x0a['+TG_ID+']:\x20登录成功:\x20VIP到期时间\x20'+_0x4086b3);await _0x2a001d[_0x2f18('‫175','z6)4')](get_vip,_0x114117[_0x2f18('‮176','bpe3')][_0x2f18('‫177','T^fI')]);}else if(_0x2a001d[_0x2f18('‫178','tiqI')](_0x114117['code'],0x71)){await _0x2a001d[_0x2f18('‫179','z6)4')](yyz_user_reg);}else{if('PKXlQ'==='yyGBS'){console[_0x2f18('‫42','I[(m')](e);}else{console[_0x2f18('‫a','%CIu')]('\x0a['+TG_ID+_0x2f18('‫17a','UV#$')+_0x114117[_0x2f18('‮17b','pg&Z')]);subTitle+='\x0a['+TG_ID+_0x2f18('‮17c','3KK*')+_0x114117[_0x2f18('‫17d','5US)')];yyz_d=![];}}}}catch(_0x13c6f1){console[_0x2f18('‮17e','tkUl')](_0x13c6f1);}finally{if(_0x2a001d[_0x2f18('‫17f','z6)4')]('EYvvO',_0x2a001d[_0x2f18('‮180','AE^7')])){return{'url':_0x2f18('‮181','*U!$')+url,'headers':{'user-agent':_0x38cf8f[_0x2f18('‫182','6b[B')],'Content-Type':_0x38cf8f[_0x2f18('‫183','tkUl')],'accept-encoding':_0x38cf8f['nZECB'],'content-length':body[_0x2f18('‫184','(LsB')],'token':ggb_token,'host':_0x38cf8f[_0x2f18('‮185','6b[B')]},'body':body};}else{_0x5e680b();}}}else{return{'url':'https://ggb.culink.vip/api/'+url,'headers':{'user-agent':_0x3619ee['PFCbs'],'content-type':_0x2f18('‫186','%BSh'),'accept-encoding':_0x3619ee[_0x2f18('‮187','KA]3')],'content-length':0x0,'token':ggb_token,'host':_0x3619ee[_0x2f18('‮188','f9(k')]}};}});}});}async function yyz_user_reg(){var _0x16f6a2={'NXHll':function(_0x2d1cd1){return _0x2d1cd1();},'EOuTy':function(_0x5c45a1,_0xdd4a77){return _0x5c45a1!==_0xdd4a77;},'PuVuu':function(_0x1887e7,_0x56a9ea){return _0x1887e7==_0x56a9ea;},'sNjkD':_0x2f18('‫189','ZxPt'),'SqlST':function(_0x3a848f,_0x56adc8){return _0x3a848f!==_0x56adc8;},'xIthY':_0x2f18('‫18a','zqz['),'yEPZG':function(_0x497cdc,_0x86b830){return _0x497cdc&&_0x86b830;},'JqZIa':_0x2f18('‫18b','TuzY'),'ZITPa':function(_0x182e47,_0x1d20c7){return _0x182e47/_0x1d20c7;},'SvWPj':function(_0x19fd78,_0x1310ad){return _0x19fd78+_0x1310ad;},'ujtaT':function(_0x1e74c0,_0x2921f5){return _0x1e74c0+_0x2921f5;},'TmZxy':function(_0x28f096,_0x2ceaf3){return _0x28f096+_0x2ceaf3;}};if(_0x16f6a2['yEPZG'](!Tips,!YZ)){if(_0x2f18('‮18c','(&FF')===_0x16f6a2['JqZIa']){console[_0x2f18('‫18d','UV#$')](_0x2f18('‫18e','uFl['));return![];}else{_0x16f6a2['NXHll'](resolve);}}var _0x8c3af5=Math[_0x2f18('‫18f','5US)')](_0x16f6a2['ZITPa'](Date[_0x2f18('‮190','Y1Wi')](),0x3e8));var _0x44e3af=CryptoJs[_0x2f18('‮191','ZxPt')](''+TG_ID+mac+os[_0x2f18('‫192','KA]3')]()+YZ)[_0x2f18('‮193','l]]i')]();var _0x9db19e='user='+TG_ID+_0x2f18('‫194','Fp&8')+_0x44e3af+'&t='+_0x8c3af5;var _0x4c8451=CryptoJs[_0x2f18('‫195','zoKY')](_0x16f6a2[_0x2f18('‮196','bl0K')](_0x16f6a2[_0x2f18('‫197','HD8]')](_0x9db19e,'&'),appid))[_0x2f18('‫198','zoKY')]();_0x9db19e=_0x16f6a2['ujtaT'](_0x16f6a2[_0x2f18('‮199','HrkI')](_0x9db19e,'&sign='),_0x4c8451);let _0x301fa4={'url':serverUrl+_0x2f18('‮19a','(LsB'),'headers':{'user-agent':_0x2f18('‫19b','03cU')},'body':_0x9db19e};return new Promise((_0x1cfee2,_0xbbacba)=>{var _0x501318={'ETIZP':function(_0x32c6c1){return _0x32c6c1();},'EENdS':function(_0x3c0f90,_0x34e873){return _0x16f6a2[_0x2f18('‮19c','zqz[')](_0x3c0f90,_0x34e873);},'TZVad':function(_0x3f546b,_0xedc962){return _0x16f6a2[_0x2f18('‫19d','zoKY')](_0x3f546b,_0xedc962);},'grfkr':_0x2f18('‮19e','Ybg*'),'MnwUa':function(_0x3a5af8,_0x285529){return _0x16f6a2[_0x2f18('‫19f','bpe3')](_0x3a5af8,_0x285529);},'fbjAv':function(_0x412c57,_0x5bac58){return _0x412c57!==_0x5bac58;},'aBamK':_0x16f6a2[_0x2f18('‫1a0','TuzY')]};if(_0x16f6a2[_0x2f18('‫1a1','(&FF')](_0x16f6a2[_0x2f18('‫1a2','bpe3')],_0x2f18('‮1a3','&YHP'))){console[_0x2f18('‫18d','UV#$')](_0x2f18('‫1a4','3be0'));return;}else{$['post'](_0x301fa4,async(_0x53ea06,_0x4d3ff9,_0x174148)=>{try{if(_0x53ea06){if(_0x501318[_0x2f18('‮1a5','I[(m')](_0x2f18('‮1a6','%BSh'),_0x2f18('‫1a7','03cU'))){_0x501318[_0x2f18('‫1a8',']mHz')](_0x1cfee2);}else{console[_0x2f18('‫1a9','AE^7')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x53ea06);subTitle+='\x0a['+TG_ID+_0x2f18('‮1aa','QQS6')+_0x53ea06;}}else{let _0x206963=JSON[_0x2f18('‫1ab','HrkI')](_0x174148);if(_0x501318[_0x2f18('‫1ac','Y1Wi')](_0x206963[_0x2f18('‫1ad','pg&Z')],0xc8)){if(_0x501318[_0x2f18('‮1ae','T^fI')](_0x501318['grfkr'],_0x501318['grfkr'])){console['log']('\x0a['+TG_ID+_0x2f18('‫1af','Fp&8')+_0x206963[_0x2f18('‮fc','%CIu')]);subTitle+='\x0a['+TG_ID+_0x2f18('‮1b0','3be0')+_0x206963['msg'];yyz_d=![];}else{await yyz_login();}}else if(_0x501318[_0x2f18('‮1b1','beMz')](_0x206963[_0x2f18('‫1b2','zqz[')],0x75)){if(_0x501318[_0x2f18('‫1b3','A4(g')](_0x501318['aBamK'],_0x501318['aBamK'])){app_soy_ggb_data=process['env'][_0x2f18('‫1b4','uFl[')][_0x2f18('‮1b5','beMz')]('\x0a');}else{console[_0x2f18('‫36','QQS6')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x206963[_0x2f18('‮1b6','03cU')]+'，该TG_ID/设备/IP已被注册');yyz_d=![];}}else{console[_0x2f18('‮56','EAKa')]('\x0a['+TG_ID+_0x2f18('‮1b7','uFl[')+_0x206963[_0x2f18('‫1b8','f9(k')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x206963['msg'];yyz_d=![];}}}catch(_0x5bcb0b){console[_0x2f18('‫121','pg&Z')](_0x5bcb0b);}finally{_0x1cfee2();}});}});}async function get_vip(_0xae0260){var _0x54e020={'yvfWy':_0x2f18('‮1b9','ONJ)'),'fgpus':function(_0x2c5e84,_0x3a590d){return _0x2c5e84!==_0x3a590d;},'ZqyxN':function(_0x37c739,_0x5824e1){return _0x37c739===_0x5824e1;},'HPfVn':function(_0x134f8e,_0x1ec155){return _0x134f8e+_0x1ec155;},'LBsRu':_0x2f18('‫1ba','l]]i')};var _0x19c5ec=Math[_0x2f18('‮1bb','Y6Gq')](Date[_0x2f18('‮1bc','QQS6')]()/0x3e8);var _0x454c20='script=ggb&num='+user_num+_0x2f18('‫1bd','f9(k')+_0xae0260+_0x2f18('‫1be','Fp&8')+_0x19c5ec;var _0x24e19a=CryptoJs[_0x2f18('‮1bf','HrkI')](_0x54e020['HPfVn'](_0x454c20+'&',appid))[_0x2f18('‮1c0','bl0K')]();_0x454c20=_0x454c20+_0x2f18('‫1c1','%BSh')+_0x24e19a;let _0x2bc300={'url':serverUrl+_0x2f18('‮1c2','6b[B'),'headers':{'user-agent':_0x54e020[_0x2f18('‫1c3','tkUl')]},'body':_0x454c20};return new Promise((_0x3927a3,_0x2b2f0e)=>{var _0x3b3b1f={'YBinu':_0x54e020[_0x2f18('‫1c4','ZxPt')],'MaAmM':function(_0x452677,_0x2af8a5){return _0x452677==_0x2af8a5;},'LSOgt':_0x2f18('‫1c5','Y6Gq'),'MFnWy':function(_0x474721,_0x2267ed){return _0x54e020['fgpus'](_0x474721,_0x2267ed);},'JwwZw':_0x2f18('‮1c6','Rc79')};if(_0x54e020[_0x2f18('‫1c7','ZxPt')](_0x2f18('‫1c8','beMz'),_0x2f18('‮1c9','03cU'))){console[_0x2f18('‮8f','3be0')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x2f18('‫1ca','uFl[')]+'\x20个人信息】:\x20'+result[_0x2f18('‮1cb','AE^7')]);}else{$[_0x2f18('‮1cc','Y1Wi')](_0x2bc300,async(_0xd5fdd2,_0x42148b,_0x12e75a)=>{try{if(_0xd5fdd2){console[_0x2f18('‮50','Rc79')]('\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0xd5fdd2);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0xd5fdd2;}else{if(_0x3b3b1f[_0x2f18('‫1cd','%BSh')]===_0x3b3b1f[_0x2f18('‫1ce','QkJZ')]){let _0x7b355c=JSON['parse'](_0x12e75a);if(_0x3b3b1f['MaAmM'](_0x7b355c[_0x2f18('‫1b2','zqz[')],0xc8)){if(_0x2f18('‫1cf','HD8]')!==_0x3b3b1f[_0x2f18('‮1d0','5US)')]){_0x3927a3();}else{user_index=_0x7b355c['msg'];yyz_d=!![];}}else{if(yyz_Kami){await card(_0xae0260);}else{console[_0x2f18('‫18d','UV#$')]('\x0a['+TG_ID+_0x2f18('‫1d1','3be0'));subTitle+='\x0a['+TG_ID+_0x2f18('‫1d2','HrkI');yyz_d=![];}}}else{console[_0x2f18('‫101','y^rD')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20提现】:\x20'+result[_0x2f18('‮1d3','Y1Wi')]);subTitle+='\x0a【'+Tips+_0x2f18('‫1d4','3KK*')+$[_0x2f18('‫4b','(LsB')]+_0x2f18('‫1d5','(&FF')+result['msg'];}}}catch(_0x189c5a){if(_0x3b3b1f[_0x2f18('‮1d6','y^rD')](_0x2f18('‫1d7','5US)'),_0x3b3b1f[_0x2f18('‮1d8','H%kz')])){console[_0x2f18('‫1d9','T^fI')](_0x189c5a);}else{app_soy_ggb_data=process[_0x2f18('‫1da','zoKY')]['soy_ggb_data'][_0x2f18('‮1db','qXUe')]('#');}}finally{_0x3927a3();}});}});}async function card(_0x140faf){var _0x2f0079={'DlDqK':function(_0x2d6ba2){return _0x2d6ba2();},'EEVla':'MwWkO','AkOTL':_0x2f18('‮1dc','KA]3'),'JxXGY':function(_0x57fe2f,_0x1ed1e2){return _0x57fe2f!==_0x1ed1e2;},'LCjMZ':_0x2f18('‮1dd','Y1Wi'),'ZHpXD':function(_0x54c4b8,_0x1a0dc6){return _0x54c4b8/_0x1a0dc6;},'XNTJn':function(_0x1d956c,_0x5b3a6c){return _0x1d956c+_0x5b3a6c;},'SCRbP':function(_0x17c479,_0x188f95){return _0x17c479+_0x188f95;},'pYDRb':function(_0x312213,_0x212808){return _0x312213+_0x212808;},'jvEMn':_0x2f18('‫1c1','%BSh'),'NbSBZ':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x2f18('‫c7','KA]3')](yyz_Kami);var _0x5b0b1c=Math[_0x2f18('‮1de','3be0')](_0x2f0079['ZHpXD'](Date['now'](),0x3e8));var _0x47929c='token='+_0x140faf+_0x2f18('‮1df','y^rD')+yyz_Kami+_0x2f18('‫1e0','pg&Z')+_0x5b0b1c;var _0xd6c4f7=CryptoJs['MD5'](_0x2f0079['XNTJn'](_0x2f0079['SCRbP'](_0x47929c,'&'),appid))[_0x2f18('‮1e1','HrkI')]();_0x47929c=_0x2f0079[_0x2f18('‫1e2','Ybg*')](_0x2f0079[_0x2f18('‫1e3','zoKY')](_0x47929c,_0x2f0079[_0x2f18('‮1e4','OFTx')]),_0xd6c4f7);let _0x4f8e94={'url':serverUrl+_0x2f18('‮1e5','TuzY'),'headers':{'user-agent':_0x2f0079[_0x2f18('‮1e6','A4(g')]},'body':_0x47929c};return new Promise((_0x287bde,_0x925b39)=>{var _0x1a2ab6={'ZfZjF':function(_0x3c9fda){return _0x2f0079['DlDqK'](_0x3c9fda);},'cAAtL':_0x2f0079[_0x2f18('‮1e7','qXUe')],'fwOfF':'ffHDJ','xrXQy':'OpjXY','QBPEN':'BkXPM','SVaMN':_0x2f18('‮1e8','zqz['),'NRpuM':_0x2f0079[_0x2f18('‫1e9','H%kz')],'cxPKp':function(_0x535f8d,_0x26196b){return _0x2f0079[_0x2f18('‮1ea','5US)')](_0x535f8d,_0x26196b);},'tzBTD':_0x2f18('‮1eb','6b[B')};if(_0x2f0079[_0x2f18('‮1ec','(&FF')](_0x2f0079[_0x2f18('‮1ed','UV#$')],_0x2f0079[_0x2f18('‫1ee','qXUe')])){throw new Error(_0x2f18('‮1ef','y^rD'));}else{$['post'](_0x4f8e94,async(_0x3563c4,_0x5d02ee,_0x2f1f06)=>{if(_0x2f18('‫1f0','HrkI')!==_0x2f18('‮1f1','zqz[')){try{if(_0x3563c4){console['log']('\x0a['+TG_ID+_0x2f18('‫1f2','%BSh')+_0x3563c4);subTitle+='\x0a['+TG_ID+_0x2f18('‮1f3','%CIu')+_0x3563c4;}else{if(_0x1a2ab6['cAAtL']!==_0x1a2ab6['fwOfF']){let _0x399d1c=JSON[_0x2f18('‫1f4','TuzY')](_0x2f1f06);if(_0x399d1c[_0x2f18('‫1f5','UV#$')]==0xc8){if(_0x1a2ab6[_0x2f18('‮1f6','Y1Wi')]!==_0x2f18('‮1f7','Ybg*')){console[_0x2f18('‫1f8','Y1Wi')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x399d1c['msg']+_0x2f18('‮1f9','EAKa'));return![];}else{console[_0x2f18('‫1fa','ONJ)')]('\x0a【'+Tips+_0x2f18('‫1fb','A4(g')+$[_0x2f18('‫7e','ONJ)')]+_0x2f18('‮1fc','uFl[')+_0x399d1c['msg']);subTitle+='\x0a【'+Tips+_0x2f18('‮1fd','FO([')+$[_0x2f18('‫1fe','Y1Wi')]+_0x2f18('‮1ff','APt4')+_0x399d1c[_0x2f18('‮e5','(LsB')];}}else{if(_0x1a2ab6[_0x2f18('‮200','bpe3')]!==_0x1a2ab6[_0x2f18('‮201','QkJZ')]){console[_0x2f18('‫36','QQS6')]('\x0a['+TG_ID+_0x2f18('‮202','uFl[')+_0x399d1c[_0x2f18('‮203','APt4')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x399d1c['msg'];return![];}else{console[_0x2f18('‫d3','qXUe')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x3563c4);subTitle+='\x0a['+TG_ID+_0x2f18('‫204','Rc79')+_0x3563c4;}}}else{console[_0x2f18('‫a8','APt4')]('\x0a['+TG_ID+_0x2f18('‮205','%CIu')+_0x3563c4);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x3563c4;}}}catch(_0x2625f4){if(_0x2f18('‫206','QQS6')===_0x1a2ab6[_0x2f18('‮207',']mHz')]){_0x1a2ab6[_0x2f18('‫208','(&FF')](_0x287bde);}else{console[_0x2f18('‫209','z6)4')](_0x2625f4);}}finally{if(_0x1a2ab6['cxPKp'](_0x1a2ab6[_0x2f18('‮20a','bl0K')],_0x2f18('‫20b','I[(m'))){throw new Error(_0x2f18('‫20c','EAKa'));}else{_0x1a2ab6['ZfZjF'](_0x287bde);}}}else{_0x1a2ab6[_0x2f18('‮20d','T^fI')](_0x287bde);}});}});}function Format_time(_0x536e27){var _0x1a2d35={'rpEXM':function(_0x5abf62,_0x5dab54){return _0x5abf62*_0x5dab54;},'Kexxt':function(_0x20a334,_0x50bb79){return _0x20a334+_0x50bb79;},'dSyYg':function(_0xca58e6,_0x435fec){return _0xca58e6<_0x435fec;},'Jtxfh':function(_0x47c8c0,_0x3c689e){return _0x47c8c0+_0x3c689e;},'iaEbz':function(_0x2c6f60,_0x36ed56){return _0x2c6f60+_0x36ed56;},'UYoVy':function(_0x393163,_0x2a95f1){return _0x393163+_0x2a95f1;},'EYnfS':function(_0x5928f5,_0x5e35e1){return _0x5928f5+_0x5e35e1;},'LHisI':function(_0x3e820f,_0x3a4f26){return _0x3e820f+_0x3a4f26;},'FCWyc':function(_0x333dbd,_0x5ab947){return _0x333dbd+_0x5ab947;},'DZKcA':function(_0x170dc5,_0xca6d18){return _0x170dc5+_0xca6d18;},'JoBQo':function(_0x5d7613,_0x384ff5){return _0x5d7613+_0x384ff5;}};var _0x2ef4a0=new Date(_0x1a2d35[_0x2f18('‮20e','03cU')](_0x536e27,0x3e8));var _0x4c8275=_0x1a2d35['Kexxt'](_0x2ef4a0[_0x2f18('‮20f','beMz')](),'-');var _0x2d9f8c=_0x1a2d35[_0x2f18('‫210','T^fI')](_0x1a2d35[_0x2f18('‮211','QkJZ')](_0x1a2d35[_0x2f18('‫212','l]]i')](_0x2ef4a0[_0x2f18('‫213','3KK*')](),0x1),0xa)?'0'+_0x1a2d35['iaEbz'](_0x2ef4a0['getMonth'](),0x1):_0x1a2d35[_0x2f18('‫214','5US)')](_0x2ef4a0[_0x2f18('‫215','*U!$')](),0x1),'-');var _0x1ae500=_0x2ef4a0[_0x2f18('‫216','Fp&8')]()+'\x20';var _0x3be6a2=_0x1a2d35[_0x2f18('‫217','HrkI')](_0x2ef4a0['getHours'](),':');var _0x365663=(_0x1a2d35['dSyYg'](_0x2ef4a0[_0x2f18('‮218','*U!$')](),0xa)?_0x1a2d35['LHisI']('0',_0x2ef4a0['getMinutes']()):_0x2ef4a0[_0x2f18('‮219','f9(k')]())+':';var _0x4aab93=_0x2ef4a0['getSeconds']();let _0x201ff3=_0x1a2d35['FCWyc'](_0x1a2d35[_0x2f18('‮21a','bl0K')](_0x1a2d35['FCWyc'](_0x4c8275,_0x2d9f8c)+_0x1ae500,_0x3be6a2)+_0x365663,_0x4aab93);return _0x1a2d35[_0x2f18('‮21b','3KK*')](_0x1a2d35[_0x2f18('‮21c','tiqI')](_0x1a2d35[_0x2f18('‮21d','qXUe')](_0x1a2d35[_0x2f18('‮21d','qXUe')](_0x4c8275,_0x2d9f8c),_0x1ae500),_0x3be6a2)+_0x365663,_0x4aab93);};_0xodo='jsjiami.com.v6';

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