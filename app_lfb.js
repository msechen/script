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
const author = '作者TG_ID:@ls_soy';


var _0xodb='jsjiami.com.v6',_0xodb_=['‮_0xodb'],_0x5a44=[_0xodb,'wpvCn8K7axI=','wpAnw7TCjnU=','YcKKag==','HDTCrw==','77+T6K+owoXConkmwqsr6K+H5aaBworDncKl5bav6KG85rCh5YWq','wqjDocKqw73Dig==','wpzCg8OGEsK0','woHCuDHDlMKe','w6M8HArDug==','Q8Kqw7UDZQfDixl8d1kUHg==','wq9rwpLCtnvCrQA=','woN+w5Z9woE=','wrlewonCg0I=','aMKvasKbdQ==','wp4IQsOTw6I=','RmPChMOPw6A=','woBlwo7Cg1Y=','wrsYwobCqcOp','bFHCvMOEw6Y=','BsOHVGFP','bsKiwqHDjw==','ecK9wojDkMOW','SAsywqRe','wrg4wqHCs8OB','wq8uwqo=','wrZjwrXCgF4=','w57popflpZjliavjg5U/wo7nvKrnuYLorKLmsJblpZjotpA=','w5bjgpAvFcKA6IaK5p2A5oyH56awVW086LWX5YyzOQ==','c+miuuWmreWJkOOAnwVQ57+v57u56K6Z5rKO5aam6LWS','w4vDrsOrwpfDuA==','wooxbQ==','woYhw63Csw==','woZ0w7bDl0A=','wqnCs8OALsK8','w6bjgJDCtMKhIeiHquadkeaMhOekpmTDs8O66LeM5Y27JA==','wrXDrjgfwoE=','wrHDg8K+','RcOGw5PDisOu','COmjjOWnj+WKtuOCgMKKw5Q=','wrrDvcKO','wqQ6wrDDksOn','QMK9w6kSfw3CgQ==','ZcKaH8Kkcw==','NMKtU8Kiw5I=','Z8K/YsKYUA==','TsOvwqPDiw4=','AE/ClsKbBMKSQMKj','wpJ+aQ==','VOmipuWmk+WJnuOBp8OBDg==','YMKTNMKkXw==','wonCsU3Cu8Oo','wrPCiMKv','CsO8fA==','w5nDn8OW5rKo5YWT5aSt6LSEwqkR','S0LCsz7Dqw==','MkzCi8KNZ1wRw4pMAcKiwrgPw6vCncOBFWPDjArCuUXDkxbDoGNnaVRsw5MwCQ==','wpbCv0DCj8KkcGZDw5vDqg==','wo86w6nCpg==','f8KKeMKfZA==','wrvDpSguwpDDvQk=','w79jfDvCo3rChcOxw6TCu8OldHIHW8KTwp1Dwr7CqsOJLMOmw6DCpMOKwqZXw6ElwoHCpcO6w5o=','w7DCqsKbeU4=','ZsOcw6HDu8Oe','wrl/wrPDi1cawo5qGsOnw4vDv8KQN8K+w6fChQ3DoQ==','woQ0w6TCpmw=','T0lXwoRl','aycpcAE8w6rCh1spVMKOw7jDrEfCuBshw6E=','wpbDicK8w7zCsAxkWsOow7U=','w6PCn8KfMA==','wpwZcMOdw5E=','b3TCucOPw40=','HDHCqSfClQ==','dxckKSo=','JgbCqTfCrg==','MjrDqsOow4A=','ch/DuFTDgw==','QsOHw4A=','PAPDvQ==','QsOVwqLDmyJofXw=','w7nCk8O1','YcOswoI=','w4UUIQfDiA==','QVfCjjjDtA==','wqnCtXbCi8O7WGRN','w6rDtMO/eMOq','wpLCuiJCRcKL','d8KZIMK9dETCtsK1wo/CsQ==','wqUvw7rCv3pPQFXCsGfDkMKHw4fDhnUEwqPCnsKaTcOlwqjDk8O8wrMaI1XChkbDpHnDuRTCkcK6w6dcwovCncO3MiQcwqPChRbCu0zDosO4dMOUesOvwoXCmlt9DMOhwrIPGMOPeMKeexnCrVkHwrwJw6wiO8KywpDDoi8tw5rCqTIbw6rDhW1/w5LDvSnDulYEw45OfsKhYsKPw63Dp2xvw7fDp8Ovw5vCusKsPsKiwo3DhcKiaxjCskfDknbCvQVcw6M8wol9AkfCgWFET8KVHsOww4JUFlTCqgNiO8K4w4V8M8O3wpfDoMOOTMKxw4nCpWVmwqDDmMKrIzwgG0MaHsK5wrYvw5kJw49CJ8K3wrpxwqLDpUfCpEw7woQGXcOrw4cOw7TCosK4w43CrcOWwo/Cv8Osw63DnxdDPMOeEcODw6czw54CfMOXwpJLDMKlUg==','cwUTw5PDrA==','elBdwoxn','EcKvc8Kvw7Q=','UsK1w48QQw==','QcKwDcKEZQ==','w54zDMKUbw==','dCIgw4vDhA==','wqI7worDu8Ot','UUtDwrFW','ScKYwpPDqMOW','wo3miL3kua/li7fkvoPotrzCtcK/wqhZb+itp+iFgeijpeWusOihu8Oo','WsOow4nDlg==','A8ONHOeasOW/l+Wnh+i2hCxp6L2i5ZuWwqM=','w519bRjDjw==','BMOgf2M=','QMKhw7g=','ASLDo8K/','QMKhw7gDaRnCkA==','SzsTwpY=','w53Du8OO','VcKuw78=','XsOVwoLDmz5gfn4=','wo/CkhfDtsKkw6DDmsKpZ8Kaw7Q=','wq7DjsKJw6nDqA==','Ik/CvMKnXQ==','w7DCsMKHCsKx','UsK9w7IFdS/CjRloV0EMGA==','woZ5w7PDtWE=','RTnDvg==','HU7Co8KA','w6ssBQ==','wrV6wqDnmq3lvYPmiLPlir5AwqUfwqnDt+WLn+aeleaXqumWnsO2','SycQ','wqvCiMKjTz8=','wr/DisKwwoUO','QVzCtDDDow==','wrvDvcKcwqwk','UsOvwoHDhD0=','e25X6am/6K6m6IaO5p6iwrHCrA==','GVPCog==','w7bDjsOq','w6jCisKR','w41HcueYueW/pOWkm+i3gAAIPA==','d8K9wprnm5nlvovlp5botLvDsMObbA==','Gh3DrMOqw6A=','wocSwrXCrMOgw7tZDjPDmkjDrcKaw7rCrMKvwrg/w4zDuMK1YcOIwo8bAVgaYMKuwoNzVQ/DtWrDs8KNwrASDm0tOMKIb8KGw7sqwoEvVyjCsWbDvA/DpcKxc8KdFsKbwqFmOMO7DxjDpMOlA8O3IS9+wqTCilTClQRwwoXDpMOfw4rDs3rCk8K8MTnCksOKH8K8JnxgwpYcwp/CjsKQA8KQwqfDh8KIHxbCi1bDoMO4w5oWwq7DiMOsSMKzHUR8OMKkw73DkcKfw4MaDTEQXRI4UcOFJG3DtC9Gw4LCowTDvnc0woAtw5ZAwrNnw7nCkMK1w7LDjcOMbsK7O17CkU4YPsKSw6rCisO8GQ9AD2NRwqjCrg==','wp3CjyDCqMKlw7DDicKEZcKIw78Hw7cKPiRJwrx1','w4/Dh8OLwqHClA==','Tm9uwp9MVVk4wrZkCMOoXMKTw7fCiB9sXiTCvFjDv1wqHmPCqlpsesK1LjnCgiTCv8KewqLDtALCv8K9w4w5AHnDjhTCuxZDLm3Co2PCuFTDtMO6w6vDtVRKScOcw6hIw7rCvSPCsiPCncOKw4UoExJvwoHDlcKCw7dTC8K8w6oWw5rDuGkvwoZxYStlw506CMOjw7ELw4jChXLDhsKgXcKpVk7DjCXCosKaYcKSw6gvwobCjMKow4JrwotGUVPDq3vCrMKewqJ2wqnCnBtNwqdZw6Q1YMOZw7PCs8KXw7Y1wqB6w6JfJh9Ew4nCrcOUBXfCn2XCpMO4wpTDiClGw78jZzXChiIVw6DDssOkw5fCv8OfbcONwqHDozTDh8OOwoUfNVDDksOOdcK/wpBuwqnCmG/CkwYyDcOPw65RCsOoOHQ0wpVyCzZWTw==','QDgYwpwV','woh+wqnCtEg=','w6/Co8KLfFXDvSpZw6lsJsOpwqYhNA==','w5V1w4/Du0PCrWM=','wpLCvXY=','w4oHVw==','wphvwpTCuirCmRPCsw==','fyYnMSM=','wrDDq8Kdwpc8wp7Diw==','w5TCgsKTNMKz','w6XDusKlLR8=','JHLCqcKKGg==','TRMhwqUj','wolFwqvChxw=','BxHCsSTCrg==','woodwpbDiMOB','wpttwo3CsEU=','wo3CsDrDqMKy','UjY4wps3','McOicUt7','DgbDm+mpreivj+i0meWOh8KEBei+uuWYksK3','Yw/DrOmoiuitg+i0veWOvMKhw43ovKzlm4w1','wo/Cl23Ck8OF','bsKswqDDiMOr','w7HDrsKWJCs=','WcOYIls=','wrzCmC7DisKE','VMKnY8KJYw==','woRYwrPCv3Q=','w7gJJjLCiwXDilxafiphwq/DhMOBYDBRw4I4JlRkw63DoEY0w45owophHcKLIA==','w7fDo8KEJDA=','acOswovDjj8=','XcOwNXQx','wrV0a8Kqw6lEw4ISw6jCsA==','w5PCsyJV','wpPDp8KFwosZ','wosvw6TCsw==','AsOKQWxh','Q8O0w7TDjcK6woI=','UG9r6auS6K6x6IWT5p6nw5MY','wqcOwqg=','woc0wpTpqonorIzohJTmnpU8IQ==','w6owBQ==','XVrCqMOj','wrd9w5M=','w41HcuaUsumFvumqpuispAAI','UlrCqw==','w5p5QuS+uOeUtuWOi+Wtk8OKw5vms5jmnYrlj7Hlra3ljYbkvYbnlpY=','w41HcuS8veeWmeWNi+WsowAI5rK95pyN5Y2x5ayc5Y2K5L+Q55Sr','Uj8N','wqYSwqg=','woQowojDrEc=','wrXDqMKU5LyZ55e15Y+j5a+bQxDovJ3lmqjDnw==','woDDoAXkvoDnlqHljZDlr4wQwo3ovZvlmbbCqg==','wpEBw6/Ch1c=','RCIzw6LDvw==','DMOObmRd','w73Dk8ObYsOq','wqwswojDisOx','IuOBmuS/heiAguaNgeemiuODpe+8gemrueiviOiHjuacrEIcIeWnl+i1iljoraXlipHkvYPml7noh57mnJ/kuJTku6nmhYzlhIDlr5g=','woAyZcO1w7I=','KsOLLg==','GSjCuxXCi8KJRsO9','w6rDlsOewq7DmkHDpg0=','wrYNMzHDgl3CikhMITUiw6nCkcKaNXdWw4crcU4lw7fDtl51wol1woI8AMOZYBbCpcOn','w440wr0=','XF7Cr8Orw6s=','w4DCphhRWcOfO8K/','XTnDvHXDjsOCwpF8','E8KYRsKiw67CmsOAOXzCmDjCoxNAUsKCZcKfRsKww4rCksK6wpzCiHoXw4law5PCgRkUIsOyU8O6FcO9OFvDkMK9w5IiwokqwpVqw7DCssKSw5nDhsOYAUUGUMKdwppeNglEw6rDpsKHJhUkwqzCs0NPJsKAwqrCo8KHHMK2ZsOJDMKsNHXCo8K2GMKdEjTDksKNAGnCnRIJRsKuccOlVGM0wosxw7LCuWfDhMKQw7TCqGjDmcKufVvDs8Oew5hUQktgZsK6wpfCkQbDk8OUXcKHwrbDvMKzUsOYwqAfYQ/DscORE2pXwpbCiMO5bMOdWMOgJ3XDusKIOXfDphs9DBoaSw53w4R+XhBcw4c5GCtuw4zDjMO2wp7CjDVhwq9tcsOZwoAOw7LCn0s5TcK2NsKWLgvDjsOZBUlJGQXCsMOCIhVcCC3Cvg==','w7rDiMOUwpvCmQ==','wqZMwr7CtGc=','TxU/wqF+w4s=','woVCwoDCqkE=','ScOIwqjDnzhmPXPCtg==','aFfCjw/Dhw==','wpViwozCtj0=','wonCpcOGAMK+','XAUzw7TDpQ==','clrCoBI=','PQzCsQLCnw==','woQvw6c=','woDClsO55rGk5YSR5aW86LStCcK+','YMKWag==','77yd6K+QwpAww715K8OJ6K275aaJw63DrwHltr3ooKvms6jlhaU=','RGxxwqV2','w7vCsCxuWw==','Pj7CryrClQ==','w6nDs2vms43lhqflpofotbDDolI=','V8OEIQ==','NOOApcK/w6nDu+iEgeadp+aNi+enl8OVPzjotZ7ljYDDnw==','woHCvMOQA8Kl','w7HCs8Ke','F8KmS8KNw7A=','FVHCl8KVeA==','w4/DuMOLwqrDpQ==','wpBuwoHCi0g=','d1nCqxjDkA==','w7DDlsO6','asKiwrnDnsOgWg==','w4prwqbCozHDjQ==','w7l5w6w=','wqXClsKB','dU3CmsOcw5s=','wqwSwoXCnMO0','TsOYFUohLcKHwrM=','w6jDksOTwqHClg==','OMK+wrvDnMOgWg==','w6fChMKEJA==','w4/DrsOhwpPCjQ==','w4nCqMK4e0c=','XxYyOAk=','w57Cj8K4NMKL','w45NXQrDlg==','w5bDu8OMwqnDuQ==','wr3CjjrDl8K9','wrwEw5TCsnI=','NOOApeS+kOiCg+aNkuekoeOBmu++gempoeisueiEiOacuSvDv8K+5aS76LShw5/orbPlirLkvIXmlq7oh7bmnrzku5jku5rmhK3lhKTlrqjDoA==','fcKKfsKF','E8KHT8KAw7s=','wqbDh2Lkv7nnl7zlj6Tlra7DkCbovL3lmY9M','wpTDvcKuw4rDrw==','woDClsO55pe86YWS6auB6K+JCcK+','Q8O3w7Lml4vphYHpq6vorL/Dpzo=','wovCvcOQAw==','wq47woDkv6/nlI7ljqLlrpg+wo4=','wrLClMKv','77+H6ISU5p+Q5bSj5q2y5bu85L2C55eF','wpfCkiU=','dXDCueS9uOeWueWPkeWssiFV','OSXDog==','w7DCr8Ke','d8K9wprkv53nl7bljoblr5jDsMOb','woXCocOT','w6PDjsO+','woBvwqA=','ODnDog==','XcOKwrXDmyQ=','JWHCg8KfOw==','Y8KhFcKkcg==','w5jCpiw=','w7LDk8OpZMOf','CuS5geWJsOWKuOigpOOAmCo5576U57uH6K+R5rKp5ae+6Lam','beOCn2hpdeiGheacvuaNneeklndxwovotYrljYvDqA==','ZMKLacKUeA==','IuS4keWLpOWLmOihg+OAucOjw7LnvrHnuIPor5nmsZXlpanotZg=','d0HClSHDqQ==','w7TDtcO0wq/Cog==','wqsrw6nCkWA=','RMO+w5nDlcO/','w7lgYCbDjA==','w4TDhcK4ATEvP8Oo','w4ALLsKlUg==','Ty/DrUPDsMOEwpE=','bcOPw7bDgMKS','Ty/DrU/DvsOFwoZo','GMKBRMKqw44=','QsKqw688eQfCkQFodw==','ajA/Exknw77CnV07','NFnCj8Kya1wfw5BBHQ==','wpnCiWrCqsON','wqV0wrvClUI=','UE/Ci8OCw5E=','wq07worDg1Y=','RSYOwoMTw7vCo8Ohw78=','w7HmioPkuY/lirbkvYnot5PCiMKJdMKQw6EYw71NPXkKw7/or6/ohLTooLjlr4PooKBF','w7HmioPkuY/lirbkvYnot5PCiMKlVcOJwr3orpvohbjooKzlr57oo48g','w5Xmipnku4XliJrkv4zotrkew79pw4Jg6K6B6ISw6KKU5a6L6KO6SQ==','w75kRiTDvTA=','w4DmiIPku4Lli7XkvJHot4EYUWfCgBDDrcKe6K2B6ISv6KKN5a2E6KKCw70=','wpDCg8OGD8K5wrUoH1rChA7ClcOGwpJ/woY5LMKVPcOyEmLCs3kYNhN5VmLDpA==','wrJ6w4B1w7chwpZ/eMOVwoghwrLCq2rCsQvCt8KWw7PCqlLChT3ChCvCpiHDhsO+wrlSw5tWf8KlKVLColnCq8KOJ8Ox','wqsxcMOzw6zCl8K+woF0wrPCvzBnfMKwEHIawqREwoNFw7zDhMOrVxHDkcOxenYGw4tpwrDDusKkw6lfwo0Wwq40dcO1w5DDhsOqQl4kb8OAC8OyegYAPSg6HMO1w4LDq14cwoDDmBDDmz7CnxzCvsKqFMK2w4oqWMOsOMKaQl4Tw7jCsgZCwo/CvHkow6XDpxPCjMOcw6PDtsKNwqh/wprDhC0mwqNUwq3DrlbCkcKEw67ClWvDrgvCnMOPS3gSDcKmw7nCssKg','RsOow50=','wo3jgZMRwqhn6Iew5p655pW35LiN5YS06LWg5aGg5pql44K477yjwrTDjxtj5p205LmQ5bit5Y+G5buh55iv6IWI5p+45paw5Li+5Y225Yaa5Lui5rWJ5Y2+55u85Lur5L2n6KWj6ZSB5ZGI6KWv5ay25Yi45p2w6Ia/5p6A776N5LiG55Sj5Lmt5rSA6K+o5ZCC5a6H5Lin56KV56qy77yH56ad5q6l55al5Lq05ZaT5LqP55ea6YCy77y05Lq16IK55L+V6K665YWJ5ZGm5rK65oOr44Of5YWi56Kw5oKH44CZ5ayZ5pS35oG15ZGN5p245pac5oGm772B6K+d5qKa5oyN5oGt5YSw6IeW6KG/5Yit5pW344CkIl0EceiulOWJqOWzmeafkuS4keW4i+eZteS4oOS9seWEu+Wut+eUruS5nOWUquS6h+aImOmdseawnueboeeYqu+/n+WTgeWKkuWTl+afrOiFmOi2leODrBF/wr195p2a6ISa5py35pa15Lqr772x56Wl5qyb5Luq5L6C5Yeu5L2V5Yyb44Kv6IaE5am35L6R44GL5LuM5Y6T6Lyn6KOv5Lq+5L2K5b6m5b6P55m76L6h6L2z44Cy5Y6L5bqNUuWTu+WKl+WTjuadhOiGsei0kuOBu8OCw6HCh13mnZfkuJ3lr5fkuKXkv5rohIXmnbnplYrpoazmpa/kuo/otK3otJPvvrPljqXmib/kv6rkuofpm7nkuoHnlarkuarkvYPohrnmnonplKrorJzlr77oh6Dnmp/kuaLkvJLmjqLlpbXmiqrmjJ7lrofjgJ4tMMK4SOmXjuaNoOS/oueWguiEkOadl+eZreS5teS+rOeWtOaLke+/pOWMpeaIqeS+hOS5p+mbsuS4mOW5s+eqjMOAwqHDkQI55ouX5Z6V5py75Lih6KOI5LqQ6L2Z5Y+c5Zi75a2YfeWcheWMuuaxgeW+t+aJjueak+WHn+ayiOimo+eaiOaBk+WHiOS6tei+oeiikeS8ueaTsu+9q+acqeS7leWtguS6lueUg+atpuW8i+i0j+eZs+S5juS/mOmYtOekn+aylua+seaJpeWEp+S5tOWSi+aelOamleS6qui0qei3pOOBkBofw4M16K+Y5YiE5bCb5p+N5LqJ5bqr55uB5Lmk5L6F5YSC5a6i55Sf5Liu5ZW55Lua5ouu6Z+L5rKJ55qQ55ux77yb5ZO55Ymc5ZOG5p2l6IS66Ley44C0HcOlH8KZ5aWh5p6/5LiF5L2K5Y275L6n5oiA5Lin5LiY6K6U5Lmk6K2d6IWK5p+G5Y+X6ICj5rSX5amU5L2I54ia5YWv5p6a5YqD776P5Yqa5buN5Y+b5pW06YGa556+5biL5o6U5L2m6LuN5Lue6K655pi644GB5ouJ5pyH5p2F6K+l5pmD77yl5oqa5Lu+5bCo5Z6U5pSo5YiR6KyX6K+W5pS85LiX5ZGA5YiI6Zuw55uw5YeT6ISS5p2044Kzwpp0YlnkuZbkvrfkurPkuY3kvLnml4DlvoDmnInnnr3mr7fpoaXnmqDnmKjkupvmiqDnmpXmjqzmirvplZbmjKvkvIDnlJPor5Pku73luqrnmbPku47kv5fohrXmn4fnm7rkvbjnlbPogp7pgZvluqHkuJLnuIbpm4/orJzmr43loZXmmYjjgormn57kuIbkv67nlJDpmpvmlKXmmarml7/miaDooInlh6jmrrnlh4Lotpblop/mm7XnmIHmn4zli7bjgYHku7jmlo3kvIjnlqTlu6HlpYbliqHkuKnkuobkvpPnmqDlhZrohp3mnojmi5vku6Tlu4nmlLLkurXvvb/liqDop5/ku4LmgbPltJPmjLPljZnmraLlh5votZXlop7mm4/jgbM=','wrlVw5nDu2s=','wr5pwrXCl0Mcwpw=','FcOEP018J8KFwrXCslbChcKTwo/Ch00=','woNgw5TDuA==','w7fDhcKADiQ=','FMKYK18w','IAHDtBTCk1Zew5TCo8OrwqfDhGMswrUywo1VKV89MnAhw6jCkiUbMcKqw6II','wqlowoTChCA=','N3wnwooSRQhrwrI=','T8KFP8KmR0TCuMO9w5XDsR43cCo2w7cfOMKSMlLClx7CvirDrEXDj8OUUcOYAcKCURvDkkgkdmPCt8OZA8OQEcOWwofCr8K6wo5HH8OoEsKSw7pFw5cbMMKpw5fCo0VLVkXCuF7Cg2J6Z1DDksKwwoPChsO0w6MfCcOgXnvDoWDDgMKPVcOYWMOqw4lUbgXCpDNGw57DuMO7TMOYwpHDuW4zwpfCscOfE8KSw4XDpsKywqnDrS7Dqz7CscKbaBF+wqHCnVVo','wopfwpjCqVY=','wpLCjgzDqcKww6A=','wo3CkGnCjMOL','wr7DqB04wq0=','wrIjw6fCsGY=','w5Fid8Kpw6tmw4Iaw63CpnsHw5DCog==','w6zDnMOswr7DjEHDujkswrwV','wptjw6duwo8=','NMKYVcKl','JMKvWMKpw6Y=','w5DDlcKuPyoz','wooswpI=','wrjCokzCjMO9QllTw4PDrA==','TFDCrcOiw4RyJ8O+wr7CgXx2','wrViwrjCiw==','DMK8asKuw4w=','w54TDMKVaQ==','wrVqwrnCgGw=','wps1w6LCpWJR','wrDCg1LCkMOn','TTLDsHTDpcODwqdiG2o=','wrEkwqzDo0NtwpYrKsK6CsKc','wrcuwp7Ds3dtwpQp','w4DCuyJI','JCfDi8Osw6Q=','woTDncKuwq4j','w6nDmMOsZcOhwp8ARCFXRHc=','d8KZwqrDrMOm','SlrCn8Oyw7ByJcO8','w6NlYSY=','w5vDicO/w4A=','XzFfw4bCmMKPwq3Cjx/CuDPCnMKNwrwZUA==','wo0uw6M=','wroswpzCuQ==','bcKiwqvDpMO3HsKEwoJ+w6fDg1Q=','QMOHw5A=','w6kiD8Ki','44ON776a5p225aCR5YWg55mo5bu45YyP6YWFWDN+CMKbYMOhwqrCilPDr8O3w5o=','wqx9wr3CjFI=','X8OYw5vDhsOi','OTfDscOkw5o=','w7TjgIHkvZLog5/mjJTnpL/jgr/vvaHpqJLorJTohY7mnYXDpsKeeeWli+i1tnzorrvliaHkvp/ml5bohIrmnbTkuIzku6Lmha3lhKflr55U','wrNWw7Jzwqw=','NsKERMKMw5c=','w73DusOMwpjDkg==','woBBw55owrQ=','b8KLMcKsQw==','wq/Cv1XCk8OoUm8=','XuOBhuS/meiCguaNouemkOOAoe++qOmqveisl+iHhuaetCZ6w7TlpojotK5M6KyS5Yir5LyO5pWr6ISy5p+x5Lqv5Lqn5oWw5YaQ5a+COg==','wpsvw7nCiXpFQyXDoSjClMOG','QMKyQcK4Tw==','w77Dk8O7','wq/DryUlwpXDtg7CiMOuGTRw','EU7Csw==','wpvCvcONOcKxw6R/JlTCqALCng==','w50qHgvDvg==','wrkSwrbCmsOgw7FafmLClQzCrA==','am5wwpNYdl4=','wql+w5hswrk=','wqcvwpTDjMOT','wr9gw4I=','e8KjwqQ=','woBuw5nDj0rCpTxbw4rCgzvCiQ==','VSQbwpoT','wrAuwrTDmGliwpgRHcKiEMKe','YkXCqB7Dlg==','P1PCnA==','VOW+pOWJseS8quaDre+/rMKrOx3DsVfDin/vvJY=','w5MLwo3DnWfCgO+9hA==','fsKLHMOm5LqI5q+Xw6xXCu++rOaXqA==','w48mGg==','I13CicKSaw==','w6HCi8KV','wqrCs8OHA8OrwrY=','wq7DmMKrw6XDsyphVcOn','UHDClw==','w6MmAcK1Z8Kaw6E=','wp5uw4TDtQ==','A1fCmMKSOQ==','wqtiwoLCkVQGwoFj','X8OZJQ==','MsKYWw==','GsOLZhPkuZnmraXCpMKVwoLvvL8=','woBlwqnCqSzCmA==','RsOVwrY=','w5Azwok4w63ohJTmnpXmiaHooY3Cj8KLcuWPiuS5vuaXpemUsO+9vw==','w5bCrAhJZg==','wr3CgsKLRhw=','w7zDmMO5VcOOwpsJ','WcO6w7bDhcOZ','fiTDnGHDlA==','wq5hw7hqwq5vw5VjUsObw5Q7wrPCtQ==','R8KyJjs=','CuS6rei2nOWNleODj8OaI8O3','X8K+w6orVQ==','w7fClcKaKcKr','wqdhwps=','wqnlvqDlpIfjgZznrbJh','V1vCqMOjw7o=','IuS7gOi1o+WMuOS7kOWKieODiA==','ScKgw7w=','JuOCuOiGreaeg+aNhuengeOAhe++r+moo+isn+S6tOmAjOWGk8OA5Yy26ICn5p+e5Yi25ZmZ5Y+u5Zq7COWnkumckeWLpOeQreWIleWOnumDq+auguaIlMONIxzDmMKMFjM=','eMOfw4nDrsKL','b29z','wpzCvsKiYxk=','C8OgfA==','fcKswqbDmMOm','wrPCiMKvbyPCnQ==','wq1nwpLCsH3CqEQ=','Qgkfwqs=','wp8twoLCosO/','w450WALDqQ==','ecKowqY=','w5LDiMO5wqLDqQ==','w5fDjMO5ecOm','w7t4bw==','w6zjgY55w7XDueiHoeafs+aNvuelu8KwwqI96LWp5Y+cw7k=','w7XCrsKdcF0=','w7fDl8Opwr/DkA==','BuimluedvOW6jOWQreOChcK0wqvnv53nuYrorqXmsoTlp4Dota8=','wrZhw5M=','JuOCuMOEw4DDr+iHoeacuOaNpeemlcOzwpQ76LeG5Yybw7k=','BeS4tOWIuuWJpuihuOOBuMOeVee9nOe7mOivj+awoOWliui0qQ==','wpbjg5DCinpc6IaT5py75o+l56a1Iy3Cqui3teWOuyk=','a8KEIcKqUw==','wovCnDDDtcKx','wptjfMK5wqthw4s=','wrxmasKIwos=','woMvUsO1w4E=','wrjDqygZwpU=','wq8TRcOuw4c=','JD7CoBnCoQ==','C8OmaHJow75mw6w=','wqTDvsKFwqE+','WeOArMKIwo536ISl5p2c5o2u56SfQ8OhwrrotZHljLHDig==','wqTkuJ7liZfliZfoorfjgI0bwrM=','c8K+wrU=','wpwbbsObw4M=','wpAqwr/Dn1A=','U1TCtxLClAQ=','wozCt8OXFMKkw7Jp','c8KiwrbDng==','WMOHw6TDm8OkwpJ6w5I=','w4JjbnM=','GE/Cog==','woTlv67li5TkvJnmgoHvv6bDsgs+AgDDt8Kn772Y','w7fDssOJw6XkuYDmr5bDtsO8wp7vv5c=','SsKEworDrsO3','woBJwqHCvSo=','w7fDksOq','JXLCjcKXJw==','w4/CkMKeIcKG','w4PCosKyB8KL','wqMTwqvCoMO0w7ZcDnDCnR3CusOHw4bCtsK1wqw=','woNkwq7CqmU=','w5zDjsOXwpLCrQ==','w6vDjcOuwrvDvQ==','P8OYa39N','O8KZSg==','wqlhw41awqFow5tZZcOOw5Iz','bsKFIg==','w5fjgrzCqsOjw6TohZfmnKTmj6PnpqTCvcKJwqLotZ7lj6ER','HU7CocKKDg==','wpZzw5LDs0nCpzs=','COODujbCoFLohLLmn7XmjILnp5rDsgM66LW+5Y6Kfw==','Leiml+edgOW4oeWQuuOBmMKxw4nop7rnnYPmiKrlibo=','w5fjg4pWwpDDsOiEq+acpuaPuueml8KiwoXCp+i3g+WOt3Q=','w5vopL/nnYnlu7nlkp7jgpTCksOK','wrDCqUI=','w7PDmsKJHy8=','bHdnwo5K','MmPCkcKKBA==','Y8O+wrfDmig=','wrd7w4dgwr8hw5BoZcOKw54=','TlrCv8Oy','Pi/CnjnCig==','LOOBhATCnB7oho7mnqLmjZvnprbCu3/Dq+i3l+WOvR4=','wrTDgsK9w6nDpQ==','w4jnlajmirfkvLfmgbnjgLIbWui9keWal8OA','woEuw6TCs24=','LeeXjeaIuuS8kOaBr+ODqMO/A+i8vuWamRw=','w41HcueYueW/pOWkm+i3gAAI6L+I5ZuaMA==','wrV6wqDnmq3lvYPlpJLotIRAwqXovp3lmL7Chw==','wq/ChsK6WTQ=','TcOYMXwl','wq58wo7Csn7CoFg=','w6o2BsKmasKL','w6LDiMOo','wqnDicKVw6bDqw==','w4LDn8O3T8OP','wpTjgqnDvsK1w5HohLLmnqTmjrrnpa/Dv1vChui2puWNoGI=','am5wwpNY','w7fnlqbmi57kvKnmgKXjg6bCgcKd','woYrwrTDrsOheA==','dCMTEDo=','wphcdsKDwqk=','Tw4Hwp02','w6bCjyJMag==','w4VHZwHDkw==','wq1rwpLCo2TCqhLChEvCrsK/wpE=','wrpce8K3wqA=','BuS6neWLkOWLmeihsuOCvwTDvOe+l+e6meitjuaynuWmiei3hg==','w5DjgJ7Dh2rCtOiElOaeleaPlueku8KCwot/6Le75YylMw==','LeS4nuWKrOWLpuihqOODqMO/A+e+u+e6m+ivi+axpuWmoOi3mQ==','woViw7fDgVA=','C8KRZMK7w4c=','ecOOw6/Dn8OT','wp7CjzDDpcK7w6HDjQ==','PEvCrMK4OQ==','w4bDlcKpCAs=','DgbDm+S+nueUpuWNnuWutsKEBQ==','QcObw5A=','77yy6IWK5p2G5bWX5q+O5buU5L+r55aW','wqbChcOCHMKf','w5jCrCVCX8Oe','w5/ClcK3YVE=','aTQ/Pw==','wrnClcKqTjDCm18=','a1PCrh7DjFU=','QBQTwqp7w5pf','wql6w5U=','OmbCi8KPXw==','w7wSNQ==','e+OBl8K7DsKc6Iey5pyH5o2I56aJw5vDkzrotIjljKPDiw==','w6rnlZXmi7jkvKTmg6PjgoYCAQ==','SxUW','wrHDszs=','w5rDuMObRcOE','w6LDksO+','Q8O3w7LpqLforY/otYHljInDpzrovZLlmakV','w4bCh8Kt6aqN6K2m6LeQ5Y6bG1Lov7rlm7Q0','jGLLzsqJMrjbuNNiami.cwNotm.v6=='];if(function(_0x3d48b4,_0x19acf0,_0x1baabb){function _0x31dce0(_0x1c42c9,_0x220b24,_0x1bda98,_0x234330,_0x45cd80,_0x523982){_0x220b24=_0x220b24>>0x8,_0x45cd80='po';var _0x12c1cc='shift',_0x4dac77='push',_0x523982='‮';if(_0x220b24<_0x1c42c9){while(--_0x1c42c9){_0x234330=_0x3d48b4[_0x12c1cc]();if(_0x220b24===_0x1c42c9&&_0x523982==='‮'&&_0x523982['length']===0x1){_0x220b24=_0x234330,_0x1bda98=_0x3d48b4[_0x45cd80+'p']();}else if(_0x220b24&&_0x1bda98['replace'](/[GLLzqJMrbuNNwNt=]/g,'')===_0x220b24){_0x3d48b4[_0x4dac77](_0x234330);}}_0x3d48b4[_0x4dac77](_0x3d48b4[_0x12c1cc]());}return 0xdf4b4;};return _0x31dce0(++_0x19acf0,_0x1baabb)>>_0x19acf0^_0x1baabb;}(_0x5a44,0x12d,0x12d00),_0x5a44){_0xodb_=_0x5a44['length']^0x12d;};function _0x16fa(_0x5ed47a,_0x4796b7){_0x5ed47a=~~'0x'['concat'](_0x5ed47a['slice'](0x1));var _0x55bd08=_0x5a44[_0x5ed47a];if(_0x16fa['fCvvIh']===undefined){(function(){var _0x5e8082=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2f1925='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5e8082['atob']||(_0x5e8082['atob']=function(_0x4ddc44){var _0x35948d=String(_0x4ddc44)['replace'](/=+$/,'');for(var _0x44171c=0x0,_0x46341f,_0x16c636,_0x19521b=0x0,_0x5826b8='';_0x16c636=_0x35948d['charAt'](_0x19521b++);~_0x16c636&&(_0x46341f=_0x44171c%0x4?_0x46341f*0x40+_0x16c636:_0x16c636,_0x44171c++%0x4)?_0x5826b8+=String['fromCharCode'](0xff&_0x46341f>>(-0x2*_0x44171c&0x6)):0x0){_0x16c636=_0x2f1925['indexOf'](_0x16c636);}return _0x5826b8;});}());function _0x157351(_0x41e49d,_0x4796b7){var _0x38eb1b=[],_0x2e1890=0x0,_0x5c22ae,_0x4262ca='',_0x18dea9='';_0x41e49d=atob(_0x41e49d);for(var _0x338624=0x0,_0x46262e=_0x41e49d['length'];_0x338624<_0x46262e;_0x338624++){_0x18dea9+='%'+('00'+_0x41e49d['charCodeAt'](_0x338624)['toString'](0x10))['slice'](-0x2);}_0x41e49d=decodeURIComponent(_0x18dea9);for(var _0x3fe8a6=0x0;_0x3fe8a6<0x100;_0x3fe8a6++){_0x38eb1b[_0x3fe8a6]=_0x3fe8a6;}for(_0x3fe8a6=0x0;_0x3fe8a6<0x100;_0x3fe8a6++){_0x2e1890=(_0x2e1890+_0x38eb1b[_0x3fe8a6]+_0x4796b7['charCodeAt'](_0x3fe8a6%_0x4796b7['length']))%0x100;_0x5c22ae=_0x38eb1b[_0x3fe8a6];_0x38eb1b[_0x3fe8a6]=_0x38eb1b[_0x2e1890];_0x38eb1b[_0x2e1890]=_0x5c22ae;}_0x3fe8a6=0x0;_0x2e1890=0x0;for(var _0xc75755=0x0;_0xc75755<_0x41e49d['length'];_0xc75755++){_0x3fe8a6=(_0x3fe8a6+0x1)%0x100;_0x2e1890=(_0x2e1890+_0x38eb1b[_0x3fe8a6])%0x100;_0x5c22ae=_0x38eb1b[_0x3fe8a6];_0x38eb1b[_0x3fe8a6]=_0x38eb1b[_0x2e1890];_0x38eb1b[_0x2e1890]=_0x5c22ae;_0x4262ca+=String['fromCharCode'](_0x41e49d['charCodeAt'](_0xc75755)^_0x38eb1b[(_0x38eb1b[_0x3fe8a6]+_0x38eb1b[_0x2e1890])%0x100]);}return _0x4262ca;}_0x16fa['OAgMiC']=_0x157351;_0x16fa['hlSqLu']={};_0x16fa['fCvvIh']=!![];}var _0x5e7ad0=_0x16fa['hlSqLu'][_0x5ed47a];if(_0x5e7ad0===undefined){if(_0x16fa['CoIFAT']===undefined){_0x16fa['CoIFAT']=!![];}_0x55bd08=_0x16fa['OAgMiC'](_0x55bd08,_0x4796b7);_0x16fa['hlSqLu'][_0x5ed47a]=_0x55bd08;}else{_0x55bd08=_0x5e7ad0;}return _0x55bd08;};try{CryptoJs=$['isNode']()?require(_0x16fa('‮0','LIcs')):'';}catch(_0x2cec89){throw new Error(_0x16fa('‮1','C0nQ'));}try{os=$['isNode']()?require('os'):'';}catch(_0x3ce2d3){throw new Error(_0x16fa('‫2','C0nQ'));}try{fs=$['isNode']()?require('fs'):'';}catch(_0xde1177){throw new Error(_0x16fa('‮3','RSPR'));}try{path=$[_0x16fa('‫4','y4@P')]()?require('path'):'';}catch(_0x40af49){throw new Error(_0x16fa('‮5','BkoP'));}let mac,TG_ID,yyz_Kami,user_num,script_data,lfb_UA,app_soy_lfb_data,lfb_token,subTitle,user_index,yyz_d=![];let appid=_0x16fa('‫6','vmK3'),serverUrl=_0x16fa('‮7','4QBB'),yyz_UA=_0x16fa('‫8','CQdV');console[_0x16fa('‮9','ogff')](_0x16fa('‮a','Oxns'));!(async()=>{var _0x45042={'Zcgfp':_0x16fa('‮b','&V&*'),'RKVeN':'/sys/class/net','YPnRw':_0x16fa('‮c','dKG8'),'jgheJ':function(_0x4270e7,_0x20ea83){return _0x4270e7==_0x20ea83;},'mYwon':'eth','PJLsB':_0x16fa('‮d','oU1D'),'cCABz':function(_0x50ea94,_0x3959ae){return _0x50ea94(_0x3959ae);},'ZOjmy':_0x16fa('‫e','&V&*'),'jvJlb':function(_0x271de6,_0x3a5db7){return _0x271de6===_0x3a5db7;},'pqNkV':'tSqYk','SSGfi':_0x16fa('‫f','0jk#'),'iTxWh':_0x16fa('‮10','oU1D'),'HsTeY':_0x16fa('‫11','8i)W'),'hsxGU':_0x16fa('‮12','5P)X'),'MWLIO':function(_0x3eed7e,_0x127ad1){return _0x3eed7e>_0x127ad1;},'HwnMV':function(_0x2edded,_0x1a034e){return _0x2edded>_0x1a034e;},'beClM':function(_0x25d5e0,_0x1659df){return _0x25d5e0+_0x1659df;},'uRAjO':function(_0x389727,_0x23d5df){return _0x389727*_0x23d5df;},'rLVsT':function(_0x2efc50,_0x18035f){return _0x2efc50*_0x18035f;},'VnEfE':function(_0x5ea7f9,_0x56f456){return _0x5ea7f9*_0x56f456;},'zqqZE':_0x16fa('‫13','(0hE'),'sXRNF':function(_0x369347){return _0x369347();},'RXsLU':_0x16fa('‫14','Adkq'),'CYjIH':_0x16fa('‫15','6JQQ')};if($[_0x16fa('‮16','C0nQ')]()){function _0x46274e(){var _0x1a299b={'AmSkB':_0x16fa('‮d','oU1D')};var _0x1a8f90='';var _0x34ea83=fs['readdirSync'](_0x45042[_0x16fa('‫17','zUF[')]);_0x34ea83['forEach'](function(_0x5f372c){if(_0x16fa('‮18','[6Gd')===_0x45042[_0x16fa('‫19','yQL$')]){var _0x344d1f={'fXLXX':_0x16fa('‫1a','&cpS'),'zXdbd':function(_0x37f4fe,_0x5321fb){return _0x37f4fe==_0x5321fb;}};var _0x2dd93e='';var _0x40b652=fs[_0x16fa('‫1b','u4k3')](_0x1a299b[_0x16fa('‫1c','4QBB')]);_0x40b652['forEach'](function(_0x1e92d7){var _0x477ef8=path[_0x16fa('‫1d','D!@W')](_0x344d1f['fXLXX'],_0x1e92d7,'address');if(_0x344d1f[_0x16fa('‮1e','D!@W')](_0x1e92d7[_0x16fa('‫1f','0jk#')](0x0,0x3),_0x16fa('‫20','USUO'))&&fs[_0x16fa('‮21','zUF[')](_0x477ef8)){_0x2dd93e=fs[_0x16fa('‫22','EkFa')](_0x477ef8)['toString']()['trim']();};});return _0x2dd93e;}else{var _0x3730d2=path[_0x16fa('‮23','dKG8')](_0x45042[_0x16fa('‮24','D!@W')],_0x5f372c,_0x45042[_0x16fa('‫25','Oxns')]);if(_0x45042[_0x16fa('‫26','dKG8')](_0x5f372c[_0x16fa('‮27','yQL$')](0x0,0x3),_0x45042[_0x16fa('‫28','zUF[')])&&fs[_0x16fa('‮29','$PF@')](_0x3730d2)){_0x1a8f90=fs[_0x16fa('‮2a','MjBY')](_0x3730d2)[_0x16fa('‮2b','MjBY')]()[_0x16fa('‮2c','VfsU')]();};}});return _0x1a8f90;};mac=_0x46274e();try{if(_0x45042['jvJlb'](_0x45042[_0x16fa('‮2d','auuW')],_0x45042[_0x16fa('‮2e','3M5M')])){before='无';}else{before=fs[_0x16fa('‮2f','1IEq')](_0x45042[_0x16fa('‫30','1E$r')])[_0x16fa('‫31','EkFa')]()[_0x16fa('‮32','y4@P')]();}}catch(_0x28cb68){before='无';}mac_e=CryptoJs['enc'][_0x16fa('‮33','eMJq')]['parse'](_0x16fa('‫34','2c[0'));mac_i=CryptoJs[_0x16fa('‫35','yQL$')][_0x16fa('‮36','USUO')]['parse'](_0x45042['HsTeY']);let _0x1dbb5f=$['isNode']()?process['env'][_0x16fa('‮37','1E$r')]:'';if(!_0x1dbb5f){console[_0x16fa('‫38','tLUQ')]('\x0a【'+$[_0x16fa('‮39','Oxns')]+_0x16fa('‮3a','[6Gd'));return!![];}else{TG_ID=_0x1dbb5f[_0x16fa('‮3b','dKG8')]('&')[0x0];yyz_Kami=_0x1dbb5f[_0x16fa('‮3c','tLUQ')]('&')[0x1];try{Tips=author[_0x16fa('‫3d','auuW')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x54931d){throw new Error(_0x16fa('‮3e','&cpS'));}try{if(_0x16fa('‮3f','4QBB')===_0x45042[_0x16fa('‫40','D!@W')]){path=$['isNode']()?_0x45042[_0x16fa('‮41','u4k3')](require,_0x45042[_0x16fa('‮42','4QBB')]):'';}else{YZ=author[_0x16fa('‮43','Adkq')](/作者TG_ID:(\S*)/)[0x1][_0x16fa('‮44','zUF[')](/_/g,'><');}}catch(_0x4bce7d){throw new Error(_0x16fa('‫45','auuW'));}};if(process['env'][_0x16fa('‮46','yQL$')]&&_0x45042[_0x16fa('‮47','0TPk')](process[_0x16fa('‮48','1IEq')][_0x16fa('‮49','[6Gd')]['indexOf']('\x0a'),-0x1)){app_soy_lfb_data=process['env']['soy_lfb_data']['split']('\x0a');}else if(process[_0x16fa('‫4a','8xox')][_0x16fa('‫4b','vmK3')]&&_0x45042[_0x16fa('‮4c','eIw&')](process['env'][_0x16fa('‫4d','BkoP')][_0x16fa('‮4e','(0hE')]('#'),-0x1)){app_soy_lfb_data=process['env']['soy_lfb_data'][_0x16fa('‫4f','4QBB')]('#');}else if(process['env']['soy_lfb_data']&&_0x45042[_0x16fa('‫50','USUO')](process[_0x16fa('‮51','4QBB')]['soy_lfb_data']['indexOf']('@'),-0x1)){app_soy_lfb_data=process[_0x16fa('‫52','1E$r')][_0x16fa('‫53','&V&*')][_0x16fa('‫54','LIcs')]('@');}else{app_soy_lfb_data=process['env'][_0x16fa('‮55','MjBY')][_0x16fa('‮56','8i)W')]();};if(_0x45042['jgheJ'](before,'无')||!before){console[_0x16fa('‮57','u$i9')](_0x16fa('‫58','D!@W')+TG_ID+_0x16fa('‮59','&V&*')+mac+_0x16fa('‮5a','D!@W'));}else{let _0x47e10e=CryptoJs['enc'][_0x16fa('‫5b','Oxns')][_0x16fa('‫5c','u$i9')](before);let _0x3881ca=CryptoJs[_0x16fa('‫5d','gn$P')][_0x16fa('‫5e','vmK3')][_0x16fa('‫5f','xdxQ')](_0x47e10e);let _0x55b776=CryptoJs[_0x16fa('‮60','8i)W')][_0x16fa('‮61','Oxns')](_0x3881ca,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x16fa('‫62','&V&*')]['CBC'],'padding':CryptoJs['pad'][_0x16fa('‫63','u$i9')]});let _0x4b0d60=_0x55b776[_0x16fa('‮64','dKG8')](CryptoJs[_0x16fa('‮65','oU1D')]['Utf8']);console[_0x16fa('‮66','D!@W')]('\x0a当前信息：\x0a-TG_ID：'+TG_ID+'\x20\x0a-MAC：'+mac+_0x16fa('‮67','oU1D')+_0x4b0d60[_0x16fa('‫31','EkFa')]());}user_num=app_soy_lfb_data[_0x16fa('‮68','5P)X')];console[_0x16fa('‫69','mWYl')](_0x16fa('‫6a','4QBB')+new Date(_0x45042[_0x16fa('‮6b','VfsU')](_0x45042[_0x16fa('‮6c','RSPR')](new Date()[_0x16fa('‫6d','1IEq')](),_0x45042['uRAjO'](_0x45042[_0x16fa('‮6e','tLUQ')](new Date()['getTimezoneOffset'](),0x3c),0x3e8)),_0x45042['rLVsT'](_0x45042[_0x16fa('‫6f','$PF@')](0x8*0x3c,0x3c),0x3e8)))[_0x16fa('‮70','4QBB')]()+_0x16fa('‫71','&kWF'));await yyz_login();console['log']('\x0a===【共\x20'+user_num+_0x16fa('‮72','ogff'));subTitle='';for(i=0x0;i<user_num;i++){var _0x499506=_0x45042[_0x16fa('‮73','^dQq')][_0x16fa('‫74','gn$P')]('|'),_0x16aef0=0x0;while(!![]){switch(_0x499506[_0x16aef0++]){case'0':console[_0x16fa('‮75','6JQQ')](_0x16fa('‮76','0jk#')+$[_0x16fa('‮77','EkFa')]+_0x16fa('‮78','Adkq'));continue;case'1':if(yyz_d){await _0x45042['sXRNF'](implement);}else{console[_0x16fa('‮79','^dQq')](_0x16fa('‮7a','tLUQ'));}continue;case'2':$['index']=i+0x1;continue;case'3':yyz_UA=_0x45042[_0x16fa('‮7b','ogff')];continue;case'4':token=app_soy_lfb_data[i];continue;}break;}};}else{console[_0x16fa('‮7c','(0hE')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}if(notify){if(_0x45042['jvJlb'](_0x45042['CYjIH'],_0x45042[_0x16fa('‫7d','RSPR')])){if(subTitle){await notify['sendNotify']($['name'],subTitle);}}else{console[_0x16fa('‮7e','&kWF')](e,response);}}})()[_0x16fa('‮7f','1E$r')](_0x55c32d=>$[_0x16fa('‫80','RSPR')](_0x55c32d))[_0x16fa('‫81','6JQQ')](()=>$[_0x16fa('‫82','6hE!')]());async function implement(){var _0x2a55e6={'zuoJf':function(_0x90fc17){return _0x90fc17();}};await _0x2a55e6['zuoJf'](muser);}function list(){var _0x2760d7={'ZWcHa':function(_0x26917a,_0x191d8b){return _0x26917a!==_0x191d8b;},'LqtxA':_0x16fa('‮83','BkoP'),'BwdRO':function(_0x7c58fd,_0x3940b2){return _0x7c58fd<_0x3940b2;},'eqXoA':function(_0x3d5cfe,_0xc79092){return _0x3d5cfe!==_0xc79092;},'UyhxD':function(_0x59cb10,_0x19030f){return _0x59cb10(_0x19030f);},'TIXUy':function(_0x62dec1,_0x27d2d2){return _0x62dec1===_0x27d2d2;},'lIfsr':_0x16fa('‮84','y4@P'),'bsLQL':function(_0x32b875,_0x1f251e,_0x390827){return _0x32b875(_0x1f251e,_0x390827);}};let _0x1fd03b=_0x2760d7['bsLQL'](Get_request,'indexad/list?thkw=&page=1','');return new Promise((_0x2b8d19,_0x504a96)=>{$[_0x16fa('‫85','1E$r')](_0x1fd03b,async(_0x4154a4,_0x5e5878,_0x1fa8ef)=>{if(_0x2760d7['ZWcHa'](_0x2760d7[_0x16fa('‮86','u4k3')],_0x2760d7[_0x16fa('‮87','1IEq')])){console[_0x16fa('‮88','y4@P')](_0x16fa('‮89','CQdV')+$[_0x16fa('‫8a','K9OD')]+'\x20观看广告】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x16fa('‫8b','u4k3')]+_0x16fa('‫8c','LIcs');}else{try{if(_0x4154a4){console[_0x16fa('‫8d','4QBB')](_0x16fa('‫8e','tLUQ')+$['index']+_0x16fa('‫8f','^dQq'));subTitle+=_0x16fa('‮90','K9OD')+$[_0x16fa('‮91','Adkq')]+'\x20任务列表】:\x20网络请求失败';}else{let _0x86fb89=JSON[_0x16fa('‫92','C0nQ')](_0x1fa8ef);if(_0x86fb89[_0x16fa('‫93','&cpS')]==0x0){for(let _0x135b10=0x0;_0x2760d7[_0x16fa('‫94','&cpS')](_0x135b10,0x5);_0x135b10++){if(_0x2760d7[_0x16fa('‮95','CQdV')](_0x16fa('‫96','[6Gd'),_0x16fa('‮97','CQdV'))){await _0x2760d7[_0x16fa('‫98','ckb(')](viewupsta,_0x86fb89['data'][_0x16fa('‮99','&kWF')][_0x135b10]['id']);await $['wait'](0x3a98);}else{app_soy_lfb_data=process['env']['soy_lfb_data'][_0x16fa('‮9a','3M5M')]();}}}else{console['log'](_0x16fa('‫9b','u$i9')+$[_0x16fa('‮77','EkFa')]+_0x16fa('‮9c','gn$P')+_0x86fb89[_0x16fa('‫9d','1E$r')]);}}}catch(_0x4659c6){if(_0x16fa('‫9e','CQdV')!==_0x16fa('‫9f','MjBY')){console['log'](_0x4659c6,_0x5e5878);}else{let _0x24eb98=CryptoJs['enc']['Hex']['parse'](before);let _0x1c3302=CryptoJs['enc'][_0x16fa('‮a0','8i)W')]['stringify'](_0x24eb98);let _0x105658=CryptoJs['AES'][_0x16fa('‫a1','vmK3')](_0x1c3302,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x16fa('‫a2','1E$r')]['CBC'],'padding':CryptoJs['pad']['Pkcs7']});let _0x3bc5df=_0x105658[_0x16fa('‫a3','tLUQ')](CryptoJs['enc'][_0x16fa('‫a4','y4@P')]);console[_0x16fa('‮a5','8xox')](_0x16fa('‮a6','eMJq')+TG_ID+'\x20\x0a-MAC：'+mac+_0x16fa('‫a7','3M5M')+_0x3bc5df['toString']());}}finally{if(_0x2760d7[_0x16fa('‫a8','1E$r')](_0x2760d7[_0x16fa('‮a9','5P)X')],'YcPIp')){_0x2b8d19();}else{console[_0x16fa('‮aa','1IEq')](e);}}}});});}function viewupsta(_0x151741){var _0x3f138a={'utcaU':function(_0x41d64a,_0x5c459b){return _0x41d64a===_0x5c459b;},'MEdCG':_0x16fa('‫ab','8xox'),'iYvEa':_0x16fa('‮ac','gn$P'),'XWpyA':'BLPeT','Ytyfw':_0x16fa('‫ad','gn$P'),'RsNjC':function(_0x6af06b){return _0x6af06b();}};let _0x8f5841=Post_request(_0x16fa('‮ae','BkoP'),_0x16fa('‮af','5P)X')+_0x151741);return new Promise((_0x311d51,_0x193fcf)=>{var _0x3f88e4={'wQPKZ':function(_0x43fdd4){return _0x3f138a[_0x16fa('‫b0','eMJq')](_0x43fdd4);}};$['post'](_0x8f5841,async(_0x58d60b,_0x2f8f39,_0xba3ad4)=>{if(_0x3f138a[_0x16fa('‫b1','u4k3')](_0x3f138a['MEdCG'],_0x3f138a['iYvEa'])){_0x3f88e4['wQPKZ'](_0x311d51);}else{try{if(_0x3f138a[_0x16fa('‫b2','&kWF')]===_0x3f138a['Ytyfw']){app_soy_lfb_data=process[_0x16fa('‫b3','D!@W')][_0x16fa('‮b4','4QBB')][_0x16fa('‫74','gn$P')]('@');}else{if(_0x58d60b){console[_0x16fa('‫b5','Adkq')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20观看广告】:\x20网络请求失败');subTitle+=_0x16fa('‮b6','xdxQ')+$[_0x16fa('‮b7','8xox')]+'\x20观看广告】:\x20网络请求失败';}else{let _0xf66c0d=JSON['parse'](_0xba3ad4);if(_0xf66c0d[_0x16fa('‫b8','&V&*')]==0x0){console['log'](_0x16fa('‫b9','Adkq')+$['index']+_0x16fa('‫ba','(oYr'));}else{console['log'](_0x16fa('‮bb','zUF[')+$['index']+_0x16fa('‫bc','C0nQ')+_0xf66c0d[_0x16fa('‮bd','zUF[')]);}}}}catch(_0x3411f9){console['log'](_0x3411f9,_0x2f8f39);}finally{_0x311d51();}}});});}function muser(){var _0x4a2737={'DGaig':function(_0x2461da,_0x52bb63){return _0x2461da!==_0x52bb63;},'FjUVW':_0x16fa('‫be','0jk#'),'wowBv':function(_0x1b13f6,_0x2f3c04){return _0x1b13f6==_0x2f3c04;},'teLjv':function(_0x5da5d2){return _0x5da5d2();},'ZCCAr':_0x16fa('‫bf','(0hE'),'YbzNh':_0x16fa('‮c0','8xox'),'yvXNJ':function(_0x420a41){return _0x420a41();},'vdAnU':function(_0x363fdd,_0x6c8a15){return _0x363fdd(_0x6c8a15);},'IDfud':function(_0x364c51,_0x1cf560,_0x25f15c){return _0x364c51(_0x1cf560,_0x25f15c);}};let _0x27ead4=_0x4a2737[_0x16fa('‫c1','mWYl')](Post_request,_0x16fa('‮c2','4QBB'),'');return new Promise((_0x233cdb,_0x2dde65)=>{var _0x434412={'OujLB':function(_0x1e9b6c,_0x1b9f0a){return _0x4a2737['vdAnU'](_0x1e9b6c,_0x1b9f0a);}};$[_0x16fa('‮c3','EkFa')](_0x27ead4,async(_0x4db589,_0x4f2b5a,_0x2709bb)=>{try{if(_0x4db589){if(_0x4a2737['DGaig'](_0x16fa('‫c4','ckb('),_0x4a2737['FjUVW'])){console['log'](_0x16fa('‮c5','LIcs')+$[_0x16fa('‮c6','xdxQ')]+_0x16fa('‮c7','yQL$')+_0x4db589);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x16fa('‮c8','yQL$')]+_0x16fa('‮c9','0TPk')+_0x4db589;}else{console[_0x16fa('‮a5','8xox')]('\x0a['+TG_ID+_0x16fa('‫ca','eIw&')+_0x4db589);subTitle+='\x0a['+TG_ID+_0x16fa('‫cb','yQL$')+_0x4db589;}}else{let _0x4ba46e=JSON[_0x16fa('‫cc','RSPR')](_0x2709bb);if(_0x4a2737[_0x16fa('‫cd','oU1D')](_0x4ba46e[_0x16fa('‫ce','6JQQ')],0x0)){yue=_0x4ba46e['data'][_0x16fa('‮cf','Oxns')][_0x16fa('‮d0','1IEq')];await _0x4a2737[_0x16fa('‮d1','xdxQ')](fenrun);}else{if(_0x4a2737['ZCCAr']!==_0x4a2737[_0x16fa('‮d2','1IEq')]){console[_0x16fa('‮7e','&kWF')](_0x16fa('‫d3','u4k3')+$[_0x16fa('‮d4','(0hE')]+_0x16fa('‫d5','3M5M')+_0x4ba46e['msg']);}else{fs=$[_0x16fa('‮d6','USUO')]()?_0x434412['OujLB'](require,'fs'):'';}}}}catch(_0x7e7930){console['log'](_0x7e7930,_0x4f2b5a);}finally{_0x4a2737[_0x16fa('‮d7','(oYr')](_0x233cdb);}});});}function fenrun(){var _0xd47362={'izlVn':function(_0x18dd84,_0x3d2026){return _0x18dd84===_0x3d2026;},'DMumd':_0x16fa('‮d8','&cpS'),'vcWQv':function(_0xad79c,_0x40a423){return _0xad79c!==_0x40a423;},'VxSji':function(_0x1066ed,_0x18f907){return _0x1066ed==_0x18f907;},'NWvzB':function(_0x1ceaac,_0x3ec4be){return _0x1ceaac<_0x3ec4be;},'CUNtt':function(_0x320b53,_0x549bf1){return _0x320b53>=_0x549bf1;},'HAgfv':_0x16fa('‮d9','LIcs'),'GvhLe':function(_0xff601,_0x17dac0){return _0xff601===_0x17dac0;},'AEVDc':'cNPyj','DxsAC':function(_0x5d0227,_0x14c4f2){return _0x5d0227===_0x14c4f2;},'xgtXc':_0x16fa('‮da','VfsU'),'RPoJJ':function(_0x20a7fe,_0x77a49a,_0x34e421){return _0x20a7fe(_0x77a49a,_0x34e421);}};let _0x4cafda=_0xd47362[_0x16fa('‮db','y4@P')](Post_request,_0x16fa('‫dc','6JQQ'),'');return new Promise((_0x283193,_0x21cc26)=>{$['post'](_0x4cafda,async(_0x4a6f69,_0x54ab8c,_0x27eadb)=>{if(_0xd47362['izlVn'](_0xd47362[_0x16fa('‮dd','&cpS')],'fMxYm')){try{if(_0x4a6f69){console[_0x16fa('‫b5','Adkq')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x16fa('‮de','6hE!'));subTitle+=_0x16fa('‫df','4QBB')+$['index']+_0x16fa('‮e0','0TPk');}else{if(_0xd47362[_0x16fa('‮e1','&V&*')](_0x16fa('‮e2','D!@W'),_0x16fa('‫e3','tLUQ'))){_0x283193();}else{let _0x1c6983=JSON['parse'](_0x27eadb);if(_0xd47362['VxSji'](_0x1c6983[_0x16fa('‮e4','C0nQ')],0x0)){if(_0xd47362['izlVn'](_0x16fa('‫e5','8xox'),_0x16fa('‫e6','0jk#'))){console['log']('\x0a['+TG_ID+_0x16fa('‫e7','u$i9')+_0x1c6983[_0x16fa('‫e8','tLUQ')]+_0x16fa('‫e9','2c[0'));return![];}else{for(let _0xae8dfb=0x0;_0xd47362[_0x16fa('‫ea','vmK3')](_0xae8dfb,_0x1c6983['data']['frbdata'][_0x16fa('‫eb','VfsU')]);_0xae8dfb++){if(_0xd47362[_0x16fa('‮ec','K9OD')](yue,_0x1c6983[_0x16fa('‮ed','(oYr')][_0x16fa('‮ee','RSPR')][_0xae8dfb][_0x16fa('‫ef','8i)W')])&&_0x1c6983['data'][_0x16fa('‫f0','6hE!')][_0xae8dfb][_0x16fa('‫f1','4QBB')]==0x2){await lqsave(_0xae8dfb+0x1);}else{}}}}else{if(_0xd47362['vcWQv'](_0x16fa('‫f2','u$i9'),_0xd47362['HAgfv'])){console[_0x16fa('‮f3','eIw&')](_0x16fa('‮f4','ckb(')+$[_0x16fa('‮91','Adkq')]+_0x16fa('‫f5','BkoP')+_0x1c6983[_0x16fa('‫f6','6hE!')]);}else{console['log'](_0x16fa('‮89','CQdV')+$['index']+'\x20任务列表】:\x20'+_0x1c6983[_0x16fa('‫f7','[6Gd')]);}}}}}catch(_0x1572d7){if(_0xd47362['GvhLe'](_0xd47362['AEVDc'],_0xd47362[_0x16fa('‫f8','1IEq')])){console[_0x16fa('‫f9','eMJq')](_0x1572d7,_0x54ab8c);}else{console['log']('\x0a['+TG_ID+_0x16fa('‫fa','1E$r')+_0x4a6f69);subTitle+='\x0a['+TG_ID+_0x16fa('‫fb','1IEq')+_0x4a6f69;}}finally{if(_0xd47362[_0x16fa('‮fc','RSPR')](_0xd47362[_0x16fa('‫fd','yQL$')],'RFiiA')){_0x283193();}else{console[_0x16fa('‮fe','0TPk')](e);}}}else{console[_0x16fa('‮a5','8xox')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x16fa('‮ff','ckb(')]+_0x16fa('‮100','dKG8'));return![];}});});}function lqsave(_0x37334c){var _0x421c13={'zlOii':function(_0x2a233b,_0x36b795){return _0x2a233b===_0x36b795;},'YpbxL':'yrEAH','fSXfd':_0x16fa('‫101','xdxQ'),'eJgju':_0x16fa('‫102','vmK3'),'xVHIb':function(_0x42a745,_0x215a09){return _0x42a745==_0x215a09;},'KkrRG':_0x16fa('‮103','C0nQ'),'qeIle':function(_0x120141,_0x34cb14){return _0x120141===_0x34cb14;},'RdpBd':'hOiGs','aHOgC':function(_0x24d380){return _0x24d380();},'sANHK':function(_0x355cc7,_0x58b638,_0x29bc8c){return _0x355cc7(_0x58b638,_0x29bc8c);}};let _0x3d9342=_0x421c13[_0x16fa('‮104','eIw&')](Post_request,_0x16fa('‫105','^dQq'),_0x16fa('‮106','6JQQ')+_0x37334c);return new Promise((_0x4d8961,_0x1c45c9)=>{var _0x31f890={'dUrdB':'./mac','gpZkX':function(_0x583337,_0x4045f6){return _0x421c13['zlOii'](_0x583337,_0x4045f6);},'nmCjD':_0x421c13[_0x16fa('‫107','4QBB')],'UWfMP':_0x421c13[_0x16fa('‮108','dKG8')],'uuVGf':_0x421c13[_0x16fa('‫109','0TPk')],'iuHsG':function(_0x44ffad,_0x2ff682){return _0x421c13[_0x16fa('‫10a','CQdV')](_0x44ffad,_0x2ff682);},'KbJSb':function(_0x106581,_0x202ef5){return _0x421c13[_0x16fa('‮10b','EkFa')](_0x106581,_0x202ef5);},'jZoiP':_0x421c13[_0x16fa('‮10c','6JQQ')],'byqkt':function(_0x47b108,_0x2da5f9){return _0x421c13[_0x16fa('‮10d','BkoP')](_0x47b108,_0x2da5f9);},'oXZhd':_0x421c13[_0x16fa('‫10e','EkFa')],'ZwwII':function(_0x2282bd){return _0x421c13[_0x16fa('‮10f','&kWF')](_0x2282bd);}};$[_0x16fa('‮110','1E$r')](_0x3d9342,async(_0x3c838b,_0x299e65,_0x4ee9ef)=>{if(_0x31f890[_0x16fa('‫111','1E$r')](_0x31f890[_0x16fa('‮112','6hE!')],_0x16fa('‫113','BkoP'))){console[_0x16fa('‮114','MjBY')](_0x16fa('‫df','4QBB')+$[_0x16fa('‮115','dKG8')]+_0x16fa('‫116','&cpS'));subTitle+=_0x16fa('‮117','[6Gd')+$['index']+_0x16fa('‮118','u$i9');}else{try{if(_0x31f890[_0x16fa('‮119','u4k3')]!==_0x31f890['UWfMP']){console[_0x16fa('‮11a','CQdV')]('\x0a【'+$[_0x16fa('‮11b','yQL$')]+'】：未填写相应变量\x20soy_yyz_data');return!![];}else{if(_0x3c838b){if(_0x31f890[_0x16fa('‫11c','&V&*')]===_0x16fa('‮11d','vmK3')){_0x4d8961();}else{console['log'](_0x16fa('‫11e','5P)X')+$[_0x16fa('‫11f','[6Gd')]+'\x20领奖励】:\x20网络请求失败');subTitle+=_0x16fa('‮f4','ckb(')+$['index']+'\x20领奖励】:\x20网络请求失败';}}else{let _0x206a04=JSON['parse'](_0x4ee9ef);if(_0x31f890['iuHsG'](_0x206a04['errcode'],0x0)){console[_0x16fa('‫120','xdxQ')]('\x0a【soy脚本提示---账号\x20'+$[_0x16fa('‫121','tLUQ')]+_0x16fa('‫122','$PF@')+_0x206a04[_0x16fa('‮123','3M5M')]);}else if(_0x31f890[_0x16fa('‫124','USUO')](_0x206a04[_0x16fa('‫125','^dQq')],0x65)){if(_0x31f890[_0x16fa('‫126','Adkq')](_0x31f890[_0x16fa('‫127','D!@W')],_0x31f890[_0x16fa('‮128','0TPk')])){await list();}else{before=fs['readFileSync'](_0x31f890[_0x16fa('‫129','mWYl')])[_0x16fa('‫12a','8xox')]()['trim']();}}else{console[_0x16fa('‮12b','&cpS')]('\x0a【soy脚本提示---账号\x20'+$[_0x16fa('‮b7','8xox')]+_0x16fa('‫12c','8xox')+_0x206a04['msg']);}}}}catch(_0x43b41d){if(_0x31f890[_0x16fa('‫12d','Adkq')](_0x31f890['oXZhd'],_0x16fa('‮12e','zUF['))){console[_0x16fa('‫12f','RSPR')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x16fa('‮130','&kWF')]);subTitle+='\x0a['+TG_ID+_0x16fa('‮131','gn$P')+result['msg'];return![];}else{console[_0x16fa('‮aa','1IEq')](_0x43b41d,_0x299e65);}}finally{_0x31f890[_0x16fa('‫132','8i)W')](_0x4d8961);}}});});}function Post_request(_0x59ff17,_0x4b5e88){var _0x321b69={'ljblk':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','JtVTH':_0x16fa('‮133','u$i9'),'ltdpz':_0x16fa('‫134','zUF['),'LICrE':_0x16fa('‮135','yQL$')};let _0x540225=Math[_0x16fa('‮136','0TPk')](new Date()[_0x16fa('‮137','[6Gd')]());return{'url':_0x16fa('‮138','y4@P')+_0x59ff17,'headers':{'autoken':token,'user-agent':_0x321b69[_0x16fa('‫139','K9OD')],'Content-Type':_0x321b69[_0x16fa('‫13a','tLUQ')],'Content-Length':'0','Host':_0x16fa('‫13b','dKG8'),'Connection':_0x321b69[_0x16fa('‮13c','yQL$')],'Accept-Encoding':_0x321b69[_0x16fa('‮13d','(0hE')]},'body':_0x4b5e88};};function Get_request(_0xd6ab13){var _0x588cfd={'zGzGQ':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','QAuIO':_0x16fa('‫13e','(oYr'),'OSsek':_0x16fa('‮13f','xdxQ'),'mvaFp':_0x16fa('‫140','gn$P')};return{'url':'http://frb.quancankeji.com/api/v1/'+_0xd6ab13,'headers':{'autoken':token,'user-agent':_0x588cfd[_0x16fa('‮141','CQdV')],'Content-Type':'application/x-www-form-urlencoded','Content-Length':'0','Host':_0x588cfd[_0x16fa('‮142','EkFa')],'Connection':_0x588cfd['OSsek'],'Accept-Encoding':_0x588cfd[_0x16fa('‮143','ckb(')]}};};async function yyz_login(){var _0x230770={'MUyvA':function(_0x5fce60){return _0x5fce60();},'yPIzG':_0x16fa('‮144','(oYr'),'xwcKj':function(_0x1b515a,_0x5469b7){return _0x1b515a==_0x5469b7;},'JqMMi':function(_0x4fd5bd,_0x72766f){return _0x4fd5bd===_0x72766f;},'CZHKN':'./mac','YpnSq':function(_0x1f4a4c,_0x2bb298){return _0x1f4a4c(_0x2bb298);},'Mcpzh':'ggVTG','RKWGv':_0x16fa('‮145','ckb('),'ZUaSR':function(_0x26a80b,_0x357798){return _0x26a80b/_0x357798;},'UisEy':function(_0x8dab0e,_0xc1ca17){return _0x8dab0e+_0xc1ca17;},'PbJOV':function(_0x3d88da,_0x13a38f){return _0x3d88da+_0x13a38f;},'qIryM':function(_0x4357e7,_0x546285){return _0x4357e7+_0x546285;}};var _0x24bfca=Math[_0x16fa('‮146','auuW')](_0x230770[_0x16fa('‫147','$PF@')](Date[_0x16fa('‮148','tLUQ')](),0x3e8));var _0x469dde=CryptoJs[_0x16fa('‫149','ckb(')](''+TG_ID+mac+os[_0x16fa('‮14a','mWYl')]()+YZ)['toString']();var _0x48c2f5='account='+TG_ID+'&password=123456&markcode='+_0x469dde+_0x16fa('‮14b','RSPR')+_0x24bfca;var _0x59ffb7=CryptoJs[_0x16fa('‫14c','tLUQ')](_0x230770[_0x16fa('‮14d','eIw&')](_0x230770[_0x16fa('‮14e','8i)W')](_0x48c2f5,'&'),appid))[_0x16fa('‫14f','zUF[')]();_0x48c2f5=_0x230770['PbJOV'](_0x230770[_0x16fa('‮150','1IEq')](_0x48c2f5,_0x16fa('‮151','VfsU')),_0x59ffb7);let _0x4c5ff5={'url':serverUrl+_0x16fa('‫152','Adkq'),'headers':{'user-agent':_0x16fa('‮153','yQL$')},'body':_0x48c2f5};return new Promise((_0x51dc9e,_0x6d8683)=>{var _0x45e9d7={'hDYMD':function(_0x3fd7b9){return _0x230770[_0x16fa('‮154','2c[0')](_0x3fd7b9);},'Elmkl':_0x230770[_0x16fa('‮155','(0hE')],'nHIOq':_0x16fa('‮156','D!@W'),'JjeSV':function(_0x575ab9,_0x137726){return _0x230770['xwcKj'](_0x575ab9,_0x137726);},'sbPeu':function(_0x2bb157,_0xe1b5a1){return _0x230770['JqMMi'](_0x2bb157,_0xe1b5a1);},'tUqJn':_0x16fa('‮157','^dQq'),'OHnio':_0x230770[_0x16fa('‫158','Adkq')],'uxSeG':function(_0x7e278a,_0x5298c8){return _0x230770[_0x16fa('‫159','Oxns')](_0x7e278a,_0x5298c8);},'XakXb':_0x16fa('‮15a','2c[0'),'PipGA':function(_0x4a5407,_0x26ec13){return _0x230770['JqMMi'](_0x4a5407,_0x26ec13);},'lsudn':_0x230770[_0x16fa('‫15b','USUO')],'xUPkq':_0x230770[_0x16fa('‮15c','(0hE')],'NKimR':function(_0x39c179){return _0x39c179();}};if(_0x16fa('‫15d','1E$r')==='WrzvE'){throw new Error(_0x16fa('‫15e','Oxns'));}else{$[_0x16fa('‮15f','ogff')](_0x4c5ff5,async(_0x2b4859,_0x28187b,_0x2d3460)=>{if(_0x45e9d7['Elmkl']===_0x45e9d7['nHIOq']){console[_0x16fa('‫12f','RSPR')](e,_0x28187b);}else{try{if(_0x2b4859){console[_0x16fa('‮aa','1IEq')]('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x2b4859);subTitle+='\x0a['+TG_ID+_0x16fa('‮160','D!@W')+_0x2b4859;}else{let _0x32cf53=JSON['parse'](_0x2d3460);if(_0x45e9d7[_0x16fa('‫161','y4@P')](_0x32cf53[_0x16fa('‫162','&kWF')],0xc8)){let _0x113cc0=CryptoJs[_0x16fa('‮163','^dQq')][_0x16fa('‫164','auuW')]['parse'](mac);let _0x257ade=CryptoJs['AES'][_0x16fa('‫165','^dQq')](_0x113cc0,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x16fa('‫166','LIcs')][_0x16fa('‫167','u4k3')],'padding':CryptoJs[_0x16fa('‮168','^dQq')]['Pkcs7']});let _0x314002=_0x257ade['ciphertext'][_0x16fa('‮169','mWYl')]()[_0x16fa('‫16a','C0nQ')]();try{if(_0x45e9d7[_0x16fa('‮16b','xdxQ')](_0x16fa('‮16c','u$i9'),_0x45e9d7[_0x16fa('‮16d','gn$P')])){fs['writeFileSync']('./mac',_0x314002);}else{fs[_0x16fa('‫16e','^dQq')](_0x45e9d7['OHnio'],_0x314002);}}catch(_0x4f9eaf){}let _0x394372=_0x45e9d7[_0x16fa('‫16f','&V&*')](Format_time,_0x32cf53[_0x16fa('‮170','$PF@')][_0x16fa('‫171','8xox')]['vip']);console[_0x16fa('‮172','Oxns')]('\x0a['+TG_ID+_0x16fa('‫173','yQL$')+_0x394372);await get_vip(_0x32cf53[_0x16fa('‮174','LIcs')][_0x16fa('‫175','RSPR')]);}else if(_0x32cf53['code']==0x71){if('TKbbh'===_0x45e9d7['XakXb']){_0x45e9d7[_0x16fa('‫176','3M5M')](_0x51dc9e);}else{await yyz_user_reg();}}else{if(_0x45e9d7[_0x16fa('‫177','8i)W')](_0x45e9d7[_0x16fa('‮178','3M5M')],_0x45e9d7[_0x16fa('‮179','mWYl')])){console['log']('\x0a['+TG_ID+_0x16fa('‫17a','LIcs')+_0x32cf53[_0x16fa('‮17b','8xox')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x32cf53[_0x16fa('‮17c','1IEq')];}else{console[_0x16fa('‮17d','gn$P')]('\x0a['+TG_ID+_0x16fa('‫17e','eIw&')+_0x32cf53['msg']);subTitle+='\x0a['+TG_ID+_0x16fa('‫17f','ogff')+_0x32cf53['msg'];return![];}}}}catch(_0x1bcd5e){console[_0x16fa('‮12b','&cpS')](_0x1bcd5e);}finally{_0x45e9d7[_0x16fa('‫180','auuW')](_0x51dc9e);}}});}});}async function get_vip(_0x4fa5c2){var _0x21ba7d={'FZiaA':_0x16fa('‫181','BkoP'),'PRlel':'application/x-www-form-urlencoded','fibtg':_0x16fa('‫182','C0nQ'),'AVzbw':function(_0x533dc2,_0x3aa6b0){return _0x533dc2(_0x3aa6b0);},'kGVVD':_0x16fa('‮183','eMJq'),'eElID':function(_0x850f26,_0x57b0b0){return _0x850f26==_0x57b0b0;},'cRFDu':function(_0x20f48e,_0x29d9ef){return _0x20f48e!==_0x29d9ef;},'vVyEK':'OVOne','AeNpz':function(_0x3c0036,_0x2a3bd9){return _0x3c0036===_0x2a3bd9;},'tbOhP':'VmjMw','WsxQn':function(_0x13e8f4,_0x3cebea){return _0x13e8f4/_0x3cebea;},'rsloS':function(_0x3d28ce,_0x3cac29){return _0x3d28ce+_0x3cac29;},'uoJQf':function(_0x50fed1,_0x4f2b40){return _0x50fed1+_0x4f2b40;},'Pgetl':_0x16fa('‮184','(0hE')};var _0x1b1dba=Math[_0x16fa('‫185','LIcs')](_0x21ba7d[_0x16fa('‫186','dKG8')](Date['now'](),0x3e8));var _0x3d852d=_0x16fa('‮187','K9OD')+user_num+_0x16fa('‫188','&V&*')+_0x4fa5c2+_0x16fa('‫189','VfsU')+_0x1b1dba;var _0x4ec81a=CryptoJs[_0x16fa('‮18a','Oxns')](_0x3d852d+'&'+appid)[_0x16fa('‫18b','5P)X')]();_0x3d852d=_0x21ba7d[_0x16fa('‮18c','(oYr')](_0x21ba7d['uoJQf'](_0x3d852d,'&sign='),_0x4ec81a);let _0x5c1e41={'url':serverUrl+_0x16fa('‮18d','3M5M'),'headers':{'user-agent':_0x21ba7d[_0x16fa('‫18e','gn$P')]},'body':_0x3d852d};return new Promise((_0x50726d,_0x4b328f)=>{var _0x39237d={'TCHhn':_0x21ba7d[_0x16fa('‫18f','0jk#')],'CVZas':_0x21ba7d[_0x16fa('‮190','8xox')],'gGsJb':_0x21ba7d['fibtg'],'HtUwq':function(_0x159ea2,_0x1b85fc){return _0x21ba7d['AVzbw'](_0x159ea2,_0x1b85fc);},'RMHlL':_0x21ba7d[_0x16fa('‮191','LIcs')],'RNZhu':function(_0x3033c4,_0x1f3dfd){return _0x21ba7d[_0x16fa('‫192','5P)X')](_0x3033c4,_0x1f3dfd);},'GelLP':function(_0x53dbd4,_0x68c81b){return _0x21ba7d['cRFDu'](_0x53dbd4,_0x68c81b);},'YBnxc':_0x21ba7d[_0x16fa('‮193','ckb(')],'DilCS':function(_0x255aa0,_0x25f637){return _0x21ba7d[_0x16fa('‮194','USUO')](_0x255aa0,_0x25f637);},'eEZjm':_0x16fa('‮195','6JQQ'),'ylUkj':_0x16fa('‫196','C0nQ'),'GiEkB':function(_0x2b3a84){return _0x2b3a84();}};if(_0x21ba7d['AeNpz'](_0x21ba7d[_0x16fa('‮197','LIcs')],_0x16fa('‫198','&kWF'))){$[_0x16fa('‮c3','EkFa')](_0x5c1e41,async(_0x57795c,_0x1dbcf5,_0xda3027)=>{try{if(_0x57795c){console['log']('\x0a['+TG_ID+_0x16fa('‫199','u$i9')+_0x57795c);subTitle+='\x0a['+TG_ID+_0x16fa('‮19a','EkFa')+_0x57795c;}else{if(_0x39237d[_0x16fa('‮19b','zUF[')]===_0x39237d['RMHlL']){let _0x31fffe=JSON[_0x16fa('‫19c','1E$r')](_0xda3027);if(_0x39237d[_0x16fa('‫19d','0jk#')](_0x31fffe[_0x16fa('‫19e','oU1D')],0xc8)){if(_0x39237d[_0x16fa('‫19f','C0nQ')](_0x39237d[_0x16fa('‫1a0','0TPk')],_0x16fa('‫1a1','6JQQ'))){return{'url':_0x16fa('‮1a2','eIw&')+url,'headers':{'autoken':token,'user-agent':_0x39237d[_0x16fa('‮1a3','0jk#')],'Content-Type':_0x39237d[_0x16fa('‫1a4','mWYl')],'Content-Length':'0','Host':_0x39237d[_0x16fa('‫1a5','oU1D')],'Connection':_0x16fa('‫1a6','&cpS'),'Accept-Encoding':_0x16fa('‮1a7','VfsU')}};}else{yyz_d=!![];}}else if(_0x39237d[_0x16fa('‮1a8','3M5M')](_0x31fffe[_0x16fa('‮1a9','yQL$')],0xca)){if(_0x39237d[_0x16fa('‫1aa','&kWF')]===_0x39237d['ylUkj']){os=$[_0x16fa('‮1ab','ogff')]()?_0x39237d['HtUwq'](require,'os'):'';}else{console[_0x16fa('‫b5','Adkq')]('\x0a['+TG_ID+_0x16fa('‮1ac','(oYr')+_0x31fffe[_0x16fa('‮1ad','BkoP')]);subTitle+='\x0a['+TG_ID+_0x16fa('‫1ae','4QBB')+_0x31fffe[_0x16fa('‫1af','Oxns')];}}else if(_0x31fffe[_0x16fa('‮1b0','EkFa')]==0xcd){console[_0x16fa('‮79','^dQq')]('\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x31fffe[_0x16fa('‫1b1','4QBB')]);subTitle+='\x0a['+TG_ID+_0x16fa('‮1b2','eIw&')+_0x31fffe['msg'];}else{console[_0x16fa('‮1b3','EkFa')]('\x0a['+TG_ID+_0x16fa('‫1b4','Oxns'));subTitle+='\x0a['+TG_ID+_0x16fa('‫1b5','eIw&');return![];}}else{console[_0x16fa('‫1b6','2c[0')](e);}}}catch(_0x23325d){console[_0x16fa('‮1b7','BkoP')](_0x23325d);}finally{_0x39237d[_0x16fa('‮1b8','MjBY')](_0x50726d);}});}else{console[_0x16fa('‫b5','Adkq')]('\x0a['+TG_ID+_0x16fa('‫1b9','vmK3')+error);subTitle+='\x0a['+TG_ID+_0x16fa('‫1ba','zUF[')+error;}});}async function yyz_user_reg(){var _0x302638={'tuMcw':function(_0x4a5236,_0x10ab57){return _0x4a5236!==_0x10ab57;},'QCixX':_0x16fa('‮1bb','yQL$'),'ybKxe':_0x16fa('‮1bc','2c[0'),'eZMrj':function(_0x5cfdba,_0x21ea21){return _0x5cfdba==_0x21ea21;},'awrfc':function(_0x3fc265){return _0x3fc265();},'bUYQH':function(_0x52e855,_0x288de4){return _0x52e855==_0x288de4;},'oPPlk':_0x16fa('‮1bd','&kWF'),'GleSV':function(_0x3d14ae,_0x18afc1){return _0x3d14ae===_0x18afc1;},'OygKp':_0x16fa('‫1be','1IEq'),'CtrKt':function(_0x3ae9cf,_0x5f2b9e){return _0x3ae9cf&&_0x5f2b9e;},'bkcmi':function(_0x447b02,_0x690303){return _0x447b02+_0x690303;}};if(_0x302638[_0x16fa('‮1bf','USUO')](!Tips,!YZ)){console['log'](_0x16fa('‮1c0','$PF@'));return![];}var _0x6162ef=Math[_0x16fa('‮1c1','CQdV')](Date['now']()/0x3e8);var _0x5a1ee5=CryptoJs[_0x16fa('‫1c2','&kWF')](''+TG_ID+mac+os[_0x16fa('‮1c3','ckb(')]()+YZ)[_0x16fa('‮1c4','u4k3')]();var _0x152966='user='+TG_ID+_0x16fa('‮1c5','eIw&')+_0x5a1ee5+_0x16fa('‮1c6','yQL$')+_0x6162ef;var _0xae4682=CryptoJs['MD5'](_0x302638[_0x16fa('‮1c7','EkFa')](_0x152966,'&')+appid)[_0x16fa('‫1c8','VfsU')]();_0x152966=_0x152966+'&sign='+_0xae4682;let _0x22b835={'url':serverUrl+_0x16fa('‮1c9','$PF@'),'headers':{'user-agent':_0x16fa('‮1ca','D!@W')},'body':_0x152966};return new Promise((_0x2d3969,_0x5adfc6)=>{var _0x1d3eaf={'ZOQOg':function(_0x1f6c55,_0x9bb2ff){return _0x1f6c55(_0x9bb2ff);}};$['post'](_0x22b835,async(_0x41e00a,_0x412514,_0x45704a)=>{try{if(_0x302638[_0x16fa('‮1cb','eMJq')](_0x16fa('‫1cc','dKG8'),_0x302638['QCixX'])){CryptoJs=$[_0x16fa('‮1cd','6hE!')]()?_0x1d3eaf[_0x16fa('‫1ce','dKG8')](require,_0x16fa('‫1cf','mWYl')):'';}else{if(_0x41e00a){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x41e00a);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x41e00a;}else{if(_0x302638[_0x16fa('‫1d0','8i)W')]!==_0x302638[_0x16fa('‫1d1','5P)X')]){yyz_d=!![];}else{let _0x3af63d=JSON[_0x16fa('‫92','C0nQ')](_0x45704a);if(_0x302638['eZMrj'](_0x3af63d['code'],0xc8)){await _0x302638[_0x16fa('‮1d2','vmK3')](yyz_login);}else if(_0x302638[_0x16fa('‮1d3','2c[0')](_0x3af63d[_0x16fa('‮1d4','8i)W')],0x75)){if(_0x16fa('‮1d5','ckb(')===_0x302638['oPPlk']){_0x2d3969();}else{console[_0x16fa('‮1d6','yQL$')]('\x0a['+TG_ID+_0x16fa('‫1d7','xdxQ')+_0x3af63d[_0x16fa('‮1d8','0TPk')]+_0x16fa('‫1d9','8i)W'));return![];}}else{if(_0x302638[_0x16fa('‮1da','(0hE')](_0x302638[_0x16fa('‮1db','VfsU')],_0x302638[_0x16fa('‮1dc','ckb(')])){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x3af63d['msg']);subTitle+='\x0a['+TG_ID+_0x16fa('‫1dd','VfsU')+_0x3af63d[_0x16fa('‮1de','oU1D')];return![];}else{console[_0x16fa('‮1b3','EkFa')](_0x16fa('‫1df','EkFa')+$[_0x16fa('‫1e0','vmK3')]+'\x20任务列表】:\x20'+_0x3af63d[_0x16fa('‮1e1','K9OD')]);}}}}}}catch(_0x76a363){console['log'](_0x76a363);}finally{_0x2d3969();}});});}async function card(_0x462c7d){var _0x26dbfe={'UhAnb':_0x16fa('‮1e2','D!@W'),'RCyfy':_0x16fa('‫1e3','u$i9'),'ZjNtT':_0x16fa('‮1e4','u4k3'),'YZUAO':function(_0x348f7b){return _0x348f7b();},'HBAsQ':function(_0x151173,_0x28fbf3){return _0x151173===_0x28fbf3;},'TDTdd':_0x16fa('‫1e5','dKG8'),'HcYcX':function(_0x6a5692,_0x4ea648){return _0x6a5692/_0x4ea648;},'KxVZY':function(_0x143cd3,_0x4d7fb8){return _0x143cd3+_0x4d7fb8;},'foJYx':function(_0x488f8b,_0x456d79){return _0x488f8b+_0x456d79;},'ASxkc':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};console[_0x16fa('‮12b','&cpS')](yyz_Kami);var _0xcf8f56=Math[_0x16fa('‮1e6','8i)W')](_0x26dbfe['HcYcX'](Date[_0x16fa('‮1e7','u4k3')](),0x3e8));var _0x51272f=_0x16fa('‫1e8','1E$r')+_0x462c7d+_0x16fa('‮1e9','5P)X')+yyz_Kami+_0x16fa('‫1ea','dKG8')+_0xcf8f56;var _0x179a78=CryptoJs[_0x16fa('‫1eb','vmK3')](_0x26dbfe[_0x16fa('‮1ec','EkFa')](_0x26dbfe[_0x16fa('‫1ed','BkoP')](_0x51272f,'&'),appid))[_0x16fa('‮1ee','oU1D')]();_0x51272f=_0x26dbfe[_0x16fa('‫1ef','eMJq')](_0x51272f+_0x16fa('‫1f0','1E$r'),_0x179a78);let _0x453ea3={'url':serverUrl+_0x16fa('‫1f1','gn$P'),'headers':{'user-agent':_0x26dbfe[_0x16fa('‮1f2','eMJq')]},'body':_0x51272f};return new Promise((_0x230480,_0x1c303c)=>{var _0x28e962={'kkuKo':_0x26dbfe[_0x16fa('‮1f3','K9OD')],'MBNhK':function(_0xfbaf19,_0x3014b8){return _0xfbaf19==_0x3014b8;},'lVGRm':_0x26dbfe[_0x16fa('‮1f4','(oYr')],'OXBZO':function(_0x4dc804,_0x67a26b){return _0x4dc804===_0x67a26b;},'wpdth':_0x26dbfe[_0x16fa('‫1f5','gn$P')],'aKPkY':function(_0x10bbd9){return _0x26dbfe[_0x16fa('‫1f6','y4@P')](_0x10bbd9);}};if(_0x26dbfe[_0x16fa('‮1f7','u4k3')](_0x16fa('‮1f8','C0nQ'),_0x26dbfe[_0x16fa('‮1f9','yQL$')])){throw new Error(_0x16fa('‫1fa','EkFa'));}else{$[_0x16fa('‫1fb','0TPk')](_0x453ea3,async(_0x116fe1,_0x466217,_0x25e3d0)=>{try{if(_0x16fa('‫1fc','D!@W')!=='uSVLL'){if(_0x116fe1){console[_0x16fa('‫69','mWYl')]('\x0a['+TG_ID+_0x16fa('‫1fd','C0nQ')+_0x116fe1);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+_0x116fe1;}else{if(_0x16fa('‫1fe','xdxQ')!==_0x28e962['kkuKo']){console[_0x16fa('‮9','ogff')]('\x0a['+TG_ID+_0x16fa('‮1ff','xdxQ')+result[_0x16fa('‫1b1','4QBB')]);subTitle+='\x0a['+TG_ID+_0x16fa('‮200','1E$r')+result[_0x16fa('‮174','LIcs')];}else{let _0x2885a5=JSON[_0x16fa('‫92','C0nQ')](_0x25e3d0);if(_0x28e962['MBNhK'](_0x2885a5[_0x16fa('‮201','vmK3')],0xc8)){console[_0x16fa('‮9','ogff')]('\x0a['+TG_ID+_0x16fa('‫202','&V&*')+_0x2885a5[_0x16fa('‫203','RSPR')]+_0x16fa('‮204','6JQQ'));return![];}else{console[_0x16fa('‫205','C0nQ')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x2885a5['msg']);subTitle+='\x0a['+TG_ID+_0x16fa('‮206','$PF@')+_0x2885a5[_0x16fa('‫207','auuW')];return![];}}}}else{console[_0x16fa('‮208','K9OD')]('\x0a['+TG_ID+_0x16fa('‫209','ogff')+result[_0x16fa('‮20a','vmK3')]);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x16fa('‮20b','eMJq')];return![];}}catch(_0x2f0085){if(_0x28e962['lVGRm']!=='Fmltv'){console[_0x16fa('‫20c','5P)X')](_0x2f0085);}else{console[_0x16fa('‫20d','auuW')](_0x2f0085);}}finally{if(_0x28e962['OXBZO'](_0x28e962[_0x16fa('‮20e','mWYl')],_0x16fa('‮20f','8xox'))){_0x28e962[_0x16fa('‮210','Adkq')](_0x230480);}else{console[_0x16fa('‮211','VfsU')]('\x0a【soy脚本提示---账号\x20'+$[_0x16fa('‮212','1IEq')]+_0x16fa('‮213','mWYl'));subTitle+=_0x16fa('‫214','&kWF')+$[_0x16fa('‮215','0TPk')]+_0x16fa('‮216','Adkq');}}});}});}function Format_time(_0x4efd40){var _0x4cd770={'ftQVK':function(_0x12b361,_0x442da7){return _0x12b361*_0x442da7;},'zHmWL':function(_0x327187,_0x1c121a){return _0x327187+_0x1c121a;},'zibjP':function(_0x2f159c,_0x45eba0){return _0x2f159c<_0x45eba0;},'CkiGv':function(_0x478d54,_0x411f6c){return _0x478d54+_0x411f6c;},'hVnzi':function(_0x598036,_0xc204f0){return _0x598036+_0xc204f0;},'nwhmU':function(_0x3b9b5b,_0x5f358a){return _0x3b9b5b+_0x5f358a;},'GHLbL':function(_0x57b559,_0x20fee1){return _0x57b559+_0x20fee1;},'FvxaL':function(_0x3a9534,_0x46160d){return _0x3a9534+_0x46160d;},'DSOUD':function(_0x4dc34a,_0x268522){return _0x4dc34a+_0x268522;},'Mcxzn':function(_0x462f4e,_0x6ea10b){return _0x462f4e+_0x6ea10b;},'nzGDS':function(_0x87a270,_0x6c7bd5){return _0x87a270+_0x6c7bd5;},'oWPxK':function(_0x45ee8a,_0x20f659){return _0x45ee8a+_0x20f659;}};var _0x58fe62=new Date(_0x4cd770[_0x16fa('‫217','8i)W')](_0x4efd40,0x3e8));var _0x4d20b0=_0x58fe62['getFullYear']()+'-';var _0x5e3bc3=_0x4cd770[_0x16fa('‮218','eMJq')](_0x4cd770['zibjP'](_0x4cd770[_0x16fa('‮219','yQL$')](_0x58fe62['getMonth'](),0x1),0xa)?'0'+_0x4cd770[_0x16fa('‮21a','tLUQ')](_0x58fe62['getMonth'](),0x1):_0x4cd770[_0x16fa('‮21b','y4@P')](_0x58fe62[_0x16fa('‮21c','0jk#')](),0x1),'-');var _0x418aa6=_0x4cd770[_0x16fa('‫21d','Oxns')](_0x58fe62[_0x16fa('‫21e','$PF@')](),'\x20');var _0x2aa0c1=_0x4cd770[_0x16fa('‫21f','ogff')](_0x58fe62[_0x16fa('‫220','$PF@')](),':');var _0x14cb4a=_0x4cd770[_0x16fa('‫221','D!@W')](_0x58fe62['getMinutes']()<0xa?'0'+_0x58fe62[_0x16fa('‫222','^dQq')]():_0x58fe62[_0x16fa('‮223','(oYr')](),':');var _0x5eba37=_0x58fe62[_0x16fa('‮224','u$i9')]();let _0x25d207=_0x4cd770[_0x16fa('‫225','zUF[')](_0x4cd770['Mcxzn'](_0x4cd770[_0x16fa('‫226','6JQQ')](_0x4cd770['nzGDS'](_0x4cd770[_0x16fa('‫227','EkFa')](_0x4d20b0,_0x5e3bc3),_0x418aa6),_0x2aa0c1),_0x14cb4a),_0x5eba37);return _0x4cd770[_0x16fa('‮228','MjBY')](_0x4cd770['oWPxK'](_0x4d20b0+_0x5e3bc3+_0x418aa6,_0x2aa0c1),_0x14cb4a)+_0x5eba37;};_0xodb='jsjiami.com.v6';


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