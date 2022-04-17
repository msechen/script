/*

项目名称:宝贝狗

项目注册地址:http://zoosoft.net/#/register?inviteCode=7F5FD6

不知道这么玩,属于币链来的应该
现在只知道看广告,和零气泡的金币,金币拿去学习获得提现点后才能提现,能不能撸我也不知道
提现看了下是币链和微信,没有转增功能.只支持163和qq邮箱注册,
需要实名,找同名也可以

不知道有没有钱撸,请根据情况自行判断上不上,他又6个这个app,这只是其中一个

固定变量:
变量名：soy_yyz_data
变量值: TG频道用户id&激活卡密
注释：

激活卡密获得 @DGR0076 @ls_soy
TG频道:【暂未启用】


脚本需要的变量:
变量名:soy_bbg_data
变量值:token
注释:token抓包找到带有 http://service.babydog.link 的链接,请求头上的token值

多个号用 @ 或 # 换行 隔开

cron 31 0-59/1 * * * app_bbg.js


*/


const $ = new Env('【宝贝狗22/04/17_0】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xod5='jsjiami.com.v6',_0xod5_=['‮_0xod5'],_0x220d=[_0xod5,'InnDnMKjw5/Ch8OASg==','HCUE','w5gPOMOHw4Q=','CA8UaXQ=','wrsywpcKUg==','F8O4w5coIQ==','w5/DssOc','PDov6auH6K+86Ia35p2XVsKQ','w7pqwpE=','w6LCjU/pq6jorZ3ohKPmn64jew==','V03DjDJE','RiTCtw==','w4A7wrg=','Bz7DsmhBNGLDsw==','SFHDpsO1woRBAW0=','w4Adfx4AU8K5eg==','w5sVwqY6dMK/fsKCwpXDnFPCsMKaWcKnWMKNAsO/W8OPJ8OywoA/Aw==','w58lWA==','w7xWwox7wrk=','EgQdaUE=','MnjDnAECw7dAwr4=','w7DCsMOtAng=','ScONwpFNFw==','TyEwwrbCl13Cl8KlwqrDgA==','ZSTCuiTCtkoDwrtowqwBM0pyWwfDnE/CrcO+wrnCg2bCtcKFPMOhw7M1w7smEBl4QgcEQcKow5JawoXCoTDCk8KTw4EqNsK4MMKywrnCmMOpwqYbworDt8OOw5LDqmROYCTDrMKbbsOID05uWsK3C2o5KBHDp8K8w74tw5YyUlDDtix7ORN6wozDkMKoQ3A4OsKtw4xIw6RGLRnDjG1zwq8OUmvColnCrCzCrMOmwqwOBcKvw4nCkC/Dn8Osw7DDlhjDj8OKVcK+RBQfwp/CjxBDwoTDtk8iwqbCtsKWw6DChMKHEz9Le8OufULDpMORwr/CvsOxU24PHj5vw4PDrMOdNk5Lw78Awo9ewqI8O8Kdw6NSFcKYwrwYf1RvF1HCjsOAwqgjHwBuBQN6w6bCkMOZDsOWw54tw4wsP8KQwqpZQ8Kf','SFPDjxw=','E8O8beear+W/nuWllui2pMONfui+o+WZmXw=','NMOoasOTTA==','w4A/IcKALg==','NXnDq8Ky','MnRNKkk=','NnMu','w7LCkcOxNw==','w4nDnh8=','wrnCgsKI','CMOmw4BIUg==','wpjDosKlw7Y9','wqbDgMOxw60=','bWXDvR/Dmg==','aMO1M8OvZw==','OG7DucKGw6I=','Eixhc0w=','FSQA','FWYx55m95b+y5aWg6LSxVMKAQg==','w6QGAQ==','5o+o56SGwpFFwprotqzljbFx','HOmiuOWNo+ekuue5iemHueW5ruOAm8Odew==','wqjDisOmw7tGwqDDuA==','GumhteWOv+ekpee5s+mGoOW4pCTjgYbDg8OG','JTlidcOGNnE=','R0zDoRJj','wozDv0oMFg==','Z2h15rCs5YWE5aSA6Ledw7jDpQ==','GcKzOOaxiOWGpeWklui0u2bCvQ==','VcKWw7c=','w7jCsV8=','OcO7w69dfQ==','w4gNw4nDocOK','fVLDsDHDoA==','TD7CpgjCuQ==','w64FCcKIBA==','ZsO+wok=','CigVWn7DjDXCg8OmP0AyRl4o','WsO9w4RGWcO5wps=','w6w6KQ==','NAgDe0E=','wojDrMOxw4Bo','C8OYw419FQ==','w53DqlpXWcO9SQ==','wpLDohrCl8KpARkZTg5wwrlkW8OMw5ApDcKAw5rDucO2c0DCosKUwo3DlG/DlsO1w5Aswo5Mw45xwoTDtMK2QcKKw5vDrmzDtsKtw5LDn1leaV1KP23DtR/DuMODWi0zBSR7JMKkw4TCpMO/EcKkBmLChMKGOz47woHCnMOlwpnDkjDDr8O5FhlbaMK4ZMKaHkh9w5fDnXvCpBbCjxgfwrnDhsORwpnDg8Ocwotew4xrw6UOwqbCg1kqw7w3w43CnMOCGMOMLMOiLzAlw5bDiMO9wp10JHB2wrbDgsKVUcK2w7wZezLDi8OcwozDmcKpwrnCr2RcIF/CoAomwow2dMKLfksnR8K6TsOJXW1mw6HCucKnVE1ETE3Cvh/DqDrCisK3wroCwqZxw7HCmcOfw7LDucOMw5/Cr8Ocw7pSc1XDp07CusOebMK7D8K6w6fCtVvChg==','wp1PbsKEMw==','O0TDrMKOw4I=','H8O2w55KJQ==','YTjDkgrCtA==','ScKOw4LDqEY=','w5BFwq3pqJ3orYrotYDljrgEw7vovJLlm4kp','Z8OJSemokuisjei1l+WPkmN36Lyt5Zi4Lw==','K2TDqA==','MEkxw7Bz','Y3vDuempmOiuveiFn+adg8OZdA==','RTjCpw==','ZcOfwrDml7Hph4Tpq77orrHCuCI=','w6LCjU/kvJvnlrTljZjlrIQje+axleacreWPhOWvkuWPjuS8s+eWsw==','H8Oew4lZZg==','eyDCt8KGOw==','cjfCicK7MQ==','w75qwrhOwpJT','SzEswqzCsA==','TsOtwow=','w4IHUSsB','BTNrb8OLPXVBwpVMZMK+H3LDmCxewrUTw6towo/DpxzDhsK+w6xfw71IwqDDg3x2YCRKE2vCpsKWw69Lw6bDp8O+wrTCp2zCs8OiITMYwq/CscKadHEIw41ResKEw7ZCKsOkFsKVclUKwrsdJMKIawvCisKAw67Ci8K2CMK0eSs3EcKMwqBAwqNcw4BWP3XDqizCssO4wq8jw5BSw57Dkn/DmcK6eMOpU8OxP8O2MsO+w64rwq00w4XDkG80HRlLbB/CrsO3wrl1cF1rWcOQdkRWUsOtHMOCw7PDs1UFJ8ObDDEwEH/CqcOebDFjScOCwq58MMOjdjxzNMOEwrrCuStVwpYJJWsObkzCtcKPw5jDn8KZwrtjw57Cg8KMbSfCuDzCtWRLwpFNLcOKwrfChMOlfMKmwowbw7zCuXoaCnZ2','YWfDjMKjAQ==','P8OHw7VyLQ==','G1Z5BW4=','wqnDgMOy','WMOAwpNzbw==','TMOtwpw=','w6AGFcKTGA7Dswo=','CcO6w45fAQ==','wpnDhw4Xw69Owq1rP8OJFcKXJxV5wq3DicKOwpnChQjCphtvQVshY3oswqTDqsKiw6BEOsK9','aMKycA==','FkR8','w4fDgFRhwrw=','w4Yew5nDm8OI','wqrDvgXCjMKaHx1R','wpzDnxnClcKV','w7Umw7vDgcO7','w6QPLMK+JA==','w6JDwptCwqY=','w7DClHEGGA==','wrUcwok4dg==','bMOFwql8Vg==','OD1jdcOC','OgpdZ8OA','w64Qw6nDtA==','LhTDkg==','LBPDgg==','W8KMw6DDqW4ABMOnei4=','wrrDowM=','EWF9OFg=','BCxRdlPCs8K5','wqZFXg==','Bn3DrMKkwpo=','w4IXbBkQT8K5IsK7w6U=','aU3Dtjdu','woU0wow9RA==','U1XDpMKkNQ==','wqjDvwnCisKgKxFaHnM5w7cv','C8Onw5hLWA==','dXHDoOaypeWFluaItuWLvcKufcOLYS5c','EzzDoH8Saw==','XS7CvcKx','wqLDhcKQw5Md','SlDDrcOUwpA=','REXDh8KaFQ==','w48Hw6LDtMOA','w5zDmAsB','w7fCkMOw','6IW15p295o2R56SmAngi6Law5Y2vwq0=','aemgpuWNuuawk+aylQ==','aFPDkMO0wrQ=','44KKw4XCt+aJiOWKqMK35b+55Yum6Yeg5buHwqE=','wr3Cn8KLwpvCpg==','ZOmgj+WPjuaytOaziA==','w7N4woJA','ZzbDjijCjRLCmMKpOsKrwqA=','wrPDogc=','5o+J56aLbcKYMOi2puWMgsKy','L3nDqxAI','w5/poY7lj53msrzms5s=','44G+a8Kh','w5LDvFFCwq3DncKm','wqzDgcOxw61f','UMO9wqt8Rw==','FWdEBUQ=','WG3CguayoeWFr+WlgOi3mMOGdA==','w5lXw49ww5U=','w6bCu1k3WmHCo8OCwpvCnRDClA==','EG7CtMK1Hw==','SEzDnMOs','w74Pw6HDuMO/','AcO6w7AiOw==','CGQcw65K','ACkqX0E=','w5sWwq4uacO1','w7szaMKhw5TDkzXDgsKPwoUdwo0XEFfDjcKdw75YwofDjMKrQ8Oqw5fCkX8ew6LCicOSwo/Dk8OsCWvCn8KQwrLCik3CocO7ScKPwrgNchs1CcOvUMKiwpYywqXCqTtXAsKuMcKbbMOHwrZNZl8Rwr5EYCUDSsKiFWjCiGHDlsOsw5nCp8KEw4vClsKuw5jDuWHCs8KMwo3CnsOvwrPCpcKzw5jCpcO9w75EfsKgw5LDssKKwoXCiMKYw4zCtQLDgTvChMKfwo3DoMOew7PDlS7Cn8OWesOubgNKwqcLw5kWWjvCrMKoalzDlQ5sKXPCvxPCqMOJw6hOw402w6YBw5MWBMKIbcOmO8Klwq7CsRzCqMOWLMKFF8KUeMOBwrHDmsKREsKQZHQIGihEUcObBsKJw4/Cvm/CmMOtM8KqwoxKN8Kvw7VWLEHDuQIuw6tnwpfCuXUjw5ktHcOUw5A=','w4nClF3DtAw=','NsKGw7U=','PDN6Y8OJbA==','BMOpwop6MQU=','HsKRwq0=','wpPDpCPCjcKI','Si7CisKgDiwBwoQ=','Wi/CizjCrA==','X1/Dh8Ol','w63DrHRJwqo=','wr8kwp0NSA==','MsOow4wfBg==','V1fDlBzDg8O6wqliw4XDmMKIw695','wpVobsKj','w4ojw5bkvZ7nl57ljZflra7CiFrovo/lm6kQ','w6LCjU/kvJvnlrTljZjlrIQje+i8oOWbusKF','WcK1w4jDpUw=','SyfCv8K3FA==','KMKIw7BaSg==','wq/DqRjCqcKq','OMOjw4ZYSQ==','JFR2CEk=','w4LDkcOMCsO9','w7TDkgoUwrF4wq5wLcKR','WG3CguS8tueXi+WMkOWsu8OGdA==','wo/DnMOBw45g','w6LCowLmlYHphIPpqLborIJcWg==','w5LDhAg=','f8K4w4vkvajnlbDljZnlrI4sSA==','w5Nvw4k=','Z2h15L6755eg5Y2Q5ay+w7jDpQ==','w5Q1KsO5c8K8HcKkdQ==','GzDDrlJX','OsOBw6p3Jw==','CEcaw513','ccOFNMOFbsK6w5rCvT0rS8O3woU/KsKFworDr0HDqsKmw4p1w7lVNyTDtsOOw5bCrCjCqMKF','wprDmQ3ClsKw','eXvDoMOYwpA=','w57CvEo0Zg==','wqxCacK2OQ==','XsO5N8O6eg==','wq7CpGDDsnI=','XMOdGMOmaA==','TE3DuC7Duw==','dMK3wpEhw4M=','fsOUNA==','w57CkF4keg==','PsO3w7YRBA==','P8Olw7YtJg==','IMOiTMOsZw==','aSXDpQLCjQ==','R8Oswp0=','NXjDtioSw7xJwobDomQJw7c=','S1zDjcOuwpw=','IcOGw40lOQ==','w6rDmnlPdw==','N28u','LGIxw4po','DW9o','w7LCnsOHH2Q=','w6tmMueas+W/reWmjui1scOXwprovb/lm7PCjQ==','w6Mmwo7nmYLlv4TlpqPotYkbJei+qeWavDk=','X1nDiC7DgsOmw6oIwo7CiMOO','wrPClMKbwrPCscOkw6gX','w6oaw7nDnMOkCDtW','U0HDgcKkH8KDw4pi','w5sHw5/DsMO7','woJiacKfLMOnX8O5','w5h/wqZvwqQ=','w7zCtl8RUQ==','w5E5ZsKFw5HDkSHCmcOfw5g=','JTtBccOt','LzllS8OOP2Eaw4UR','w7PCu0wAeWvCoMOJwqzClw==','wqjDiMOFw79t','w4rCvVXDuQs=','w7p+wqZWwrw=','w7rCu0ALZg==','Fy4fa3Q=','w7xbw6lBw4Q=','S8OxwqV4PF0=','AjBLdF7CrMOgw5Am','wpbCu0XDh15O','KOaLvOS7puWIp+S/hei1rsOoWTvDnwTor7/ohbPoo57lrb7oooYZ','w7LCjMOZN1PDvg==','wotoecKybsOgXsOr','w5Tmi4XkuJHliZfkv6bot5Nnw7QYFRXCtV9lwptnPeivn+iFsuigu+Wtn+iglHQ=','bCTDrCbChxQ=','NuaJgOS6uOWKseS9q+i1vk9swpR7IOish+iEsuihsuWtqeijmcOo','WCrCtCU=','woLmiJfkuavli5fkv6votLnCvh9zwpNTAcKs6K2S6Ie06KK45a+L6KGRwqo=','PkbDvRwUwqkbwr/DrEgFw7zDgTJjw5gYwrArw4PCjGnCjMKvI3XDpgVpBUMe','JsKyOcKkwrFIwq7CjicNwqkve33Cp8OjcVPDt07CqMKLwo8/Y19MF8K1w4Uiw4knw4ZGwpjCtcOGwp58w53Dt8OULEXCi1twwow=','bsKBwr4cw4TCnW7CmF5HNcOEwrYkBcOfbj/Cswpvw6Mtw4fDksKtwrorF0JkccKSVGpnw4vChsKVw6ghVMO4wozDjTLDncOXb8OdUMOhQkwHGgENw6gewqHDh041w4cmFcKHOUHDncKaWQs9a8OvwoFfw5fCusOhw65XJlUMwrd7woHDpsOqwqQ7w43CmMKJJkHDrcOoM3fDjwJjP3rDjcKsKgPDhMOmwrINw4kuWsKoH8O5wpfDjApdwr7CjcKew5Y9','w7cVBQ==','XOaJqOS6guWLp+S8sOi2uMKOTi/DljHDpEBWw5HDu3jDr+issuiGkeihmuWsruighsKV','Q+aLnuS6oeWIt+S/qei2sCxScMOlU8KhDcKxO8Owf+iumOiGpuijhOWsjeigq8KS','w4/mi5HkupjlirjkvrrotpHCvTXCn1Bv6K6+6ISh6KGz5a+h6KKmw50=','wpHDiMOkw6RD','w7TDowoow7s=','KMOYw65SHw==','wobDkMKFw7Iu','C8OBWsOKYg==','wrgVUsKbRBPCrRMj','wrsmwoUrdA==','wqjDlU83OQ==','F8KXOMKjw7k=','BhhnXEk=','McOmw5FEUMO7w4fDoMOCYD1ew7Ykw5Z9TsOlwpszwqE6eHRgw4TCrcKfLmUCOBlVwrjClcOQw5DCp8KIw6vDnMOgwqnCrgs9CiZ2woTChRjCm3TCisOeWUrDvWYIwrF8PcKpf8Ocw65OCcKsYnAWw73DhsOKwoxKw5YQJRcpw7PCrMOew43Do8Kyw54ow6V2w75Jwp3DsMO6BB8nGBfDhUcQwq3DvhrCp3spCE4KwoN3AztpBsONYTTCksKgwrpKwogRwp3ClsO6w6DCrWxHw4vChMO1w5skw7PCpsOYWHA/BcOPQMKEw53DvyFtw4HCg8OsOMO3wrchSmQbwpNlw67ClkXDscOPw4PCucO9wpAfw4wyFAnCgGbDjFfCrCs7wodUwo3CsCQ3U1BcHh7ClkTCrsKPw6cgAsOGRRvDg8KRwpDDv8OAw6DCrcOPClA=','ZsKLwrwWw4Q=','w5Jzw4k=','VzLCl8K7GCA=','dnnDgMO3wrw=','S8KIw6rDkkE=','w7Q1fsK5w6w=','w73CkMOlHVbDuMOC','w7DDvhnCjcOqDhRXCFNvw7cpYw==','VUDDkcKbFcKew40=','w6vCl2bDuyk=','w77Ch8O+K0PDqMO5w5JfwqU=','L28aw5FwE2t+','fMOjwpd7','WsKMwqc0w7k=','w5gcfzAk','wqbClMKOwprCmMOjw7AawqjCuVID','w6vCgMO4w6lE','w6DCsWsnbmHCocOA','ImTDpsK6','CjsLWno=','wrvDlX8=','U8KPwrYGw40=','WzNgwqfDvVLDgcOzw7bClsONw6XDpwRwEg==','BCxR','woHChcKJw4Y=','w6d4woRSwpM=','w73CrXY8eG0=','woBpaw==','w4nDoFdXVsOtQ2jCgMKeDDg=','JDN2','44K277+A5pyv5aOl5YeY55i+5bqI5Y6a6Ye/TMO6U3VbwrbDlMKXw4vCkWPDjVo=','wozCuGfDgU4=','w5TCqmnDpzU=','IuOBm+S+nOiBiOaMiueknOOBs+++jumrkeitg+iEq+acvzF2c+WlmOi2jBvoraHliKHkvJbml5TohJjmn6vku4fkuq7mhorlhZblrrTDnw==','ZcOwwop1dw==','TuOCmeS9hOiCpeaPueekneOAj++9humokeistuiHgeadv8OyYQblpabotIXCn+iuoOWLpuS/pOaXsuiGruaehOS6i+S6uOaGsuWHgeWtvsKJ','w5/DoVg=','T1HDjMOewpRKCFXCgzp4wpE=','SsKAwqAQw5DCvmk=','wovDqhHCksKh','w5LDt8OzBMOn','wrvDlWo=','KG8ww7pgGGJGw4x9ccOt','5o2u56SmwoMUwrzotrTljpsB','w58ydsKtw4A=','HOmiuOWNo+ayleawlw==','CsO5w45ubA==','44KZU0bnvrbnuqrorpjms5zlpZ7otLc=','P3jDq8Kyw5U=','44GVwrM457+x57u16K+Q5rGc5aWt6La4','I3nDuQ==','XcKLw6Y=','D8Omw5JyXsO1w4HCkMKTL3kf','XUrDkcKMCMKiw5g=','w5rDt1Q=','ST0swpvCqlPCn8KdwqHDj8KIwrE=','JWbDo8K+w5k=','w5jDp015Xw==','HD7DuENNN2jDicO8w6zDncKW','LETDpTok','E8Ocw4U/PQ==','Xzwj','w57Djy0xw7c=','wqFea8KnDg==','w60HEA==','KMOmfw==','ZeePoeWeqeS/veaBgO+9jwXCu8K1wqDDvcKwcWU2772K','w7QkJ8Kk772s','LcOmw5fvvbE=','w5rDt0E=','w6kbZA==','TF/Dh8OywpM=','EMOqw5Q=','w78OCcOO','S8OTwr0=','LMKGw5FdXcOnLcOj','w4HCql5r','wplKXMKU772Z','U8OLwplwDw==','N8KOw6NDaw==','w4Y9YMK7w50=','w51zw4pc','MmvCoeS9o+eUh+WMtOWvicKswrg=','w4rCqWI=','77+z6YSF5pa76LW55Li65qyK6IaJ5p+u5pe55Y+Q5q+S5bms5L6u55WU','w5PDmAg=','w4nDpBjkvKznlLTljanlrInCncOo','ZcOiwpk=','w67Cp8Kb5Lyf55aD5Y2w5a+IcRE=','wr3Dh8KF','fRHDqzDCiw==','w6gRw64=','Vj0y','wrnDosOUw4vvvL3mlKfDoRrCvO+9qg==','BWVsOUTDnQ8=','JTN1Yw==','w7UeUQ==','IcOOw6M=','HsKtLsKnwrw=','w4IzQcK8w4rDljrCig==','TSXCow==','TMOFJsKN','TTXCq8K9EiIGwoUt','w6bDpcOXN8Ot','w5vDo3t/dg==','VsO0NsOycw==','VMKKw7c=','5rGP5YWW5L+k5oOh772bw4wxbx04w45jRUDvv5U=','w4JRw696776L5pWyEGhV772n5paC','wrvCnWnDq1U=','BcOTwqLms4HlhqPlpr/otabCvjbovrvlmJEY','FWYx5rOu5YSr5aWg6LSxVMKA6L625ZqKwr4=','BG5s','w7vDuMOD','eMKSGsO7w7pF','Wz/CsiTCtEELw7Ik','fcOUI8OHZMOwwoE=','WUvDkcKM','w7DDn8O4','w6vCnsOz','ScOaI8OGKg==','wovCp1jDnEhCw73CpQ==','w6rDgwlc','w7cPDg==','QMO0woY=','ESNAd08=','wprCpmg=','airCsyjDrBI=','SSYnwq3CplbCkcKkwrw=','IEVc','O3nDq8Ky','wrzCikg=','wo0EwqM=','CMKCw6FaGA==','CMOmw7hZTsO+w4jCqA==','UUrDlg==','UFHDkg==','5rK55YSj5L2m5oCE772uw7Q2KWINCmNULO++uQ==','w7E2w53vvos=','Vjc7wqPCvFk=','wodCwrDCrMKr6IW85p2j5omZ6KKXw6Y6KeWOkuS4uOaUkemUuO+/hg==','wrPDn8Oww4t3','w4BowoNGwrA=','LzllUsOOPHE=','RcKowrIew4s=','wpnCjn3Dg1k=','w7t1wrpnwrw=','DSQrXG3DmWTChMOXLBQ1XVQ=','wrckw4sc','f8KlBMOkwqM=','ZMO+wpk=','a38POeOAuuWGssOt','wp/Dv8Okw4pr','B8OHw7UYOQ==','AH7DvcKkw6A=','DlYqw6N3','wrbDowTCm8K9','b8KUw6XDpk0=','Az7Dpg==','MOW9kuWmnuODlOevpBE=','w73CsFw2ZA==','XMOnLcOPcg==','PuOAtOiGr+afheaOoOenl+OCr++8kOasjeiGm+afpuWMg+iDremerOm+v+eNjeWhsOi3iQ==','KRhGXFs=','wqfDjEQTDw==','w6hbw7lww5g=','KcO6fw==','EidcYGTCrMK5w5MzUw==','w7XCnsO6PQ==','wrLDlHs=','w7fkvLnog4LmjpnnpL3DsueOoeeai+W+pMKoMsKtw6Qsw5Hlk6LmsYPlh6Pmlajnmq3DrRTCssKpG33pgavku7PljKLph5rDpOiJl+aUq+eIguaun+mdkeimm+ivqOWKmemElOWQhsOK5ayb5Lun5p2S5Lq05LiC5p6V5YmH5ZibwovphrbooZTnronmkrTkvabCn+itjuiCsueyueS/uuiBn8KeTDnCuEIkwo0=','WcKSHcO9wqQ=','XMKaB8O/wqAdXA==','wq/CpV/Dvnk=','KMOxw5NrSA==','w6LDv8OZDMOO','w43DlgEAw7NU','JkFaG3o=','MMKGw69MAMOpJsOwUQDCo1zDp8O9X8Ktw4/CrcO1','w5oaRsKSw4k=','QTvDlS7Cog==','I8O9XMOLZQ==','w71twqRjwqA=','wo4mwqQafw==','e8OSwp1FZw==','5oy156S9MMO6bui2tOWPmsKq','ITJ1Y8Of','eOmhr+WNlOawveazjg==','44KFw6QY','VcKAw6PDsmoVFQ==','w4gQeBQN','44GYwprCjA==','JMOFw590FcKBaQ==','w5TDuMOP','w7c0w6fDp8OR','wqfCgcKgwqrCrw==','UTLClB3Ctw==','w6IAH8OYw5s=','wqrDk1ovIg==','X1HDkcOk','aTjDhQ==','6Ie/5pyr5o+N56etbsK/AOi2rOWOszk=','5o6x56S6ImYQ6LaL5Y6MTA==','w6QRw6nDtMOz','ZOmgj+WPjuekm+e6lumHtuW4n+OBjcKnw5fmi4vli4zCjeiOnuW/kA==','NcOOw7MK','w40Rew==','CCxWYVI=','wp/poJ/lj7TnpornubPphavlu4LjgbdAwqo=','NcKMw7FaTsOpJg==','5oyO56aBMUpW6Laj5Y6wwro=','YcO/wppzZw==','COmjjeWMluentue5pemHt+W5o8Op44GMwrgR','O3PDvMKkw4zCicOL','VFPDmw==','44Cve8O5576F57qg6K6y5rCt5aeS6LWx','5o6x56W4HykH6Lel5Yy6wpo=','w77poL3lj4rmsbPmspo=','44OUwpXCtee/mee7u+issOazn+Wloui3iQ==','w6LCsHo9Vw==','WT0xwqE=','6Iap5p6x5o2r56WawoY8I+i1reWPhsOD','w753wpJEwo4=','w6UueT8+','44Kuwo1P5om05YiDFeW+keWJlOmGiuW7tQQ=','bMOwwop3','WDM5wqXCplLCncKXwqvDh8KI','XUrDkcKMCA==','woXDnibCm8KS','44OOwrdA5ouu5YmaQeW8q+WJu+mGquW4oWA=','wrTDlcKWw7A=','AyNeZUTCoMKow687Q8Oh','EMOmw4w=','5oyP56a3TcOTw6jotYvljo8W','w5bDt0ZUwrQ=','44GweBI=','5o+y56a4w4Y6dei0nuWMvzY=','SsKAwqAQw5A=','44Cve8O5','w78EHsOYw59yWw==','w7t2wpE=','YzvCiQLCoA==','w7vDj8OMGMOk','wpnCkXHDiVY=','wrjCnsKIwpfCsMKlw68PwonCpV0ETADCisK+aw==','HcKcw7BlXg==','wqfDpMK4w58R','w7F+wpp5wo4=','YUXDvSrDgw==','w7UVw4bDicOY','w4EfCsK2PA==','w4MVdjUs','LMOZX8OTbw==','VsOmIcOgfg==','w4c+B8KyFQ==','w5l5w5o=','5o2Y56WTS8OKW+i1ieWNqU8=','wofpoZzlj5PnpLXnu77phJfluJ3jgZMKTOe/mOe7oOivu+axhuWnvui2iA==','IcOOw7UYEQ==','GiQDVg==','ewrCjTTCgA==','NMKGw6U=','6IaI5p2N5o6956aRwpM4E+i3q+WPq38=','WE/DhzhO','wrbCtsKiwqfCtg==','w5I9ZsKp','5o2C56WbQMKGwpPotLPlj4nDrQ==','wpPpoJvlja3msbTmsYo=','KsKnOcK1','w74OCg==','w5/poY7lj53npJPnuoXph7rlupLjg5N6H+aKoeWLi8O96I+L5b+E','5o6p56WxSh4j6Lae5Y+/w4E=','Eemip+WNteenpue6iemGvOW5h+OArncP5ouY5Yiow7XojL/lvLw=','5o6L56S6ZMKIL+i1nOWPsjk=','S8Oswo9yIA==','K3LDvAYRw7lL','5o2H56Sjw5sMw5votJDljZ/Ckg==','bMKnw6rDsGE=','H8KIw4xKXA==','HGEHw4Zx','w4LCtHM=','wrbDgMOsw5dFwqXDugzCiBE3KA==','RCTCpw==','wrrDriPCu8KT','asOUMsODdMOjwpDCvCg9XsKgwoMkY8OIwojCqW7DsQ==','w5DCmsOyKBrDmsOGw4JHwqM=','fsOLKcOF','w4ESIMO8w6k=','T8K/DMOmwq8=','JXPDvcKhw4TCjcOLAz/DjiPDqUsUw5zCpjTCqsKrEA==','RcO4woJn','wrbDj2gXQcKqaMOpEgMGw7FOc8OUJXBKw6ETwrnCtlBNw5PCjljCoh5ywqxHQcOKA0HDp8OVwp92UmLCnELCjcOtw5s=','woLCpMKDwqrCtA==','dSTCvMKkUQQDwooiVQ==','NGshw5F2CioqwoYtMcKiwow=','w5TDuMOPJsOefWISVMKCcA==','w7UEGcOmw5F7SsKl','NMO7w6QFMg==','WcKCD8OGwq8=','wqvDl8Ojw5lo','w7/Cjk0rXQ==','NMOsw5M=','wqTCkMKdwo3Cuw==','w4LCtGY=','eDMmwqHDvgU=','w6EVH8OCw5ByV8KrZQ==','fwTCig==','LcOFw491DcKWeA==','w4wReBQ=','w4PDvMOf','jNBsPjQiudaFEwMJImiU.cDom.v6=='];if(function(_0xff3aef,_0x90c534,_0xee1cef){function _0xc4cc5b(_0x185b1d,_0x2f3e53,_0x361049,_0x562bff,_0x4731bd,_0x6617ef){_0x2f3e53=_0x2f3e53>>0x8,_0x4731bd='po';var _0xb82cb2='shift',_0x15ddd0='push',_0x6617ef='‮';if(_0x2f3e53<_0x185b1d){while(--_0x185b1d){_0x562bff=_0xff3aef[_0xb82cb2]();if(_0x2f3e53===_0x185b1d&&_0x6617ef==='‮'&&_0x6617ef['length']===0x1){_0x2f3e53=_0x562bff,_0x361049=_0xff3aef[_0x4731bd+'p']();}else if(_0x2f3e53&&_0x361049['replace'](/[NBPQudFEwMJIUD=]/g,'')===_0x2f3e53){_0xff3aef[_0x15ddd0](_0x562bff);}}_0xff3aef[_0x15ddd0](_0xff3aef[_0xb82cb2]());}return 0xdfa65;};return _0xc4cc5b(++_0x90c534,_0xee1cef)>>_0x90c534^_0xee1cef;}(_0x220d,0xf6,0xf600),_0x220d){_0xod5_=_0x220d['length']^0xf6;};function _0x5d2e(_0x525039,_0x37687c){_0x525039=~~'0x'['concat'](_0x525039['slice'](0x1));var _0x2757ba=_0x220d[_0x525039];if(_0x5d2e['RxSmKb']===undefined){(function(){var _0x4d5420=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2055db='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4d5420['atob']||(_0x4d5420['atob']=function(_0xf70ffe){var _0xaffa77=String(_0xf70ffe)['replace'](/=+$/,'');for(var _0x2fa558=0x0,_0x330cda,_0x1a444b,_0xb48170=0x0,_0x133572='';_0x1a444b=_0xaffa77['charAt'](_0xb48170++);~_0x1a444b&&(_0x330cda=_0x2fa558%0x4?_0x330cda*0x40+_0x1a444b:_0x1a444b,_0x2fa558++%0x4)?_0x133572+=String['fromCharCode'](0xff&_0x330cda>>(-0x2*_0x2fa558&0x6)):0x0){_0x1a444b=_0x2055db['indexOf'](_0x1a444b);}return _0x133572;});}());function _0x454309(_0x346ef2,_0x37687c){var _0x2027bf=[],_0x5afa8a=0x0,_0x37b030,_0x3899c6='',_0x342c9a='';_0x346ef2=atob(_0x346ef2);for(var _0x1a9d9b=0x0,_0x596189=_0x346ef2['length'];_0x1a9d9b<_0x596189;_0x1a9d9b++){_0x342c9a+='%'+('00'+_0x346ef2['charCodeAt'](_0x1a9d9b)['toString'](0x10))['slice'](-0x2);}_0x346ef2=decodeURIComponent(_0x342c9a);for(var _0x39910f=0x0;_0x39910f<0x100;_0x39910f++){_0x2027bf[_0x39910f]=_0x39910f;}for(_0x39910f=0x0;_0x39910f<0x100;_0x39910f++){_0x5afa8a=(_0x5afa8a+_0x2027bf[_0x39910f]+_0x37687c['charCodeAt'](_0x39910f%_0x37687c['length']))%0x100;_0x37b030=_0x2027bf[_0x39910f];_0x2027bf[_0x39910f]=_0x2027bf[_0x5afa8a];_0x2027bf[_0x5afa8a]=_0x37b030;}_0x39910f=0x0;_0x5afa8a=0x0;for(var _0x48ab75=0x0;_0x48ab75<_0x346ef2['length'];_0x48ab75++){_0x39910f=(_0x39910f+0x1)%0x100;_0x5afa8a=(_0x5afa8a+_0x2027bf[_0x39910f])%0x100;_0x37b030=_0x2027bf[_0x39910f];_0x2027bf[_0x39910f]=_0x2027bf[_0x5afa8a];_0x2027bf[_0x5afa8a]=_0x37b030;_0x3899c6+=String['fromCharCode'](_0x346ef2['charCodeAt'](_0x48ab75)^_0x2027bf[(_0x2027bf[_0x39910f]+_0x2027bf[_0x5afa8a])%0x100]);}return _0x3899c6;}_0x5d2e['AWujTc']=_0x454309;_0x5d2e['KWosom']={};_0x5d2e['RxSmKb']=!![];}var _0x871909=_0x5d2e['KWosom'][_0x525039];if(_0x871909===undefined){if(_0x5d2e['FKDcrc']===undefined){_0x5d2e['FKDcrc']=!![];}_0x2757ba=_0x5d2e['AWujTc'](_0x2757ba,_0x37687c);_0x5d2e['KWosom'][_0x525039]=_0x2757ba;}else{_0x2757ba=_0x871909;}return _0x2757ba;};try{CryptoJs=$[_0x5d2e('‮0','z%k&')]()?require(_0x5d2e('‫1','h@Lz')):'';}catch(_0x5e5b33){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x5d2e('‮2','3lkI')]()?require('os'):'';}catch(_0x2e9096){throw new Error(_0x5d2e('‫3','z%k&'));}try{RSA_js=$[_0x5d2e('‮4','$33w')]()?require(_0x5d2e('‫5','NxGo')):'';}catch(_0x29d528){throw new Error(_0x5d2e('‫6','p(cl'));}try{fs=$[_0x5d2e('‮7','*o@k')]()?require('fs'):'';}catch(_0x1f2964){throw new Error(_0x5d2e('‮8','Mg1z'));}try{path=$['isNode']()?require(_0x5d2e('‮9','XrU)')):'';}catch(_0x458e64){throw new Error(_0x5d2e('‫a','va^M'));}let mac,TG_ID,yyz_Kami,user_num,script_data,bbg_UA,app_soy_bbg_data,app_soy_bbg_addata,bbg_token,subTitle,user_index,yyz_d=![];let appid=_0x5d2e('‮b','h(]]'),serverUrl=_0x5d2e('‫c','VH4q'),yyz_UA=_0x5d2e('‫d','KHH^');!(async()=>{var _0x36b6fe={'smzSJ':_0x5d2e('‫e','@4hH'),'BilqT':'/sys/class/net/','vpeCP':function(_0xe672d2,_0x49c222){return _0xe672d2+_0x49c222;},'vvOhK':_0x5d2e('‮f','qEf$'),'DYvpM':_0x5d2e('‫10','mq@6'),'rvuwe':function(_0x45c8d9,_0x4048e4){return _0x45c8d9==_0x4048e4;},'IMdYX':function(_0x37c033){return _0x37c033();},'UVcFu':_0x5d2e('‫11','W34A'),'hjULK':function(_0x55b760,_0x31c1a2){return _0x55b760(_0x31c1a2);},'JGuvJ':'path','ybcAQ':function(_0x46d762){return _0x46d762();},'ajHdL':_0x5d2e('‫12','W34A'),'bhcqp':function(_0x1b2cfe,_0x20032c){return _0x1b2cfe>_0x20032c;},'jSjOT':function(_0x5540cd,_0x5f2106){return _0x5540cd!==_0x5f2106;},'BsBTI':_0x5d2e('‮13','K!a#'),'VbuJZ':_0x5d2e('‫14','mq@6'),'qIrgW':_0x5d2e('‮15','zD0l'),'ogajD':_0x5d2e('‫16','0AP4'),'xFIyh':_0x5d2e('‫17','va^M'),'UxlWF':function(_0x3d9fa4,_0x2eb11c){return _0x3d9fa4&&_0x2eb11c;},'HZtXq':function(_0x47af46,_0x56e889){return _0x47af46===_0x56e889;},'alUwY':_0x5d2e('‫18','Gpuy'),'OEvGn':_0x5d2e('‫19','p(cl'),'JcIiA':'vhnMb','DUbCo':_0x5d2e('‫1a','VH4q'),'WqugF':function(_0x535188,_0x511635){return _0x535188+_0x511635;},'fFvkc':function(_0x288c84,_0xa1d39a){return _0x288c84*_0xa1d39a;},'llLFJ':function(_0x2966f8,_0x4dffc4){return _0x2966f8*_0x4dffc4;},'EVmzo':function(_0x357fda){return _0x357fda();},'ZPqBL':function(_0x536231,_0x136486){return _0x536231<_0x136486;},'VhrsM':_0x5d2e('‫1b','h@Lz'),'hGGYu':_0x5d2e('‮1c','B[&R'),'aMyFp':'ywXtt','ODhzY':_0x5d2e('‮1d','KHH^'),'VGWII':'CxXzs'};console[_0x5d2e('‫1e','gU5v')]('\x0a【soy脚本文件免责声明】：\x0a【本仓库发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的，，否则后果自负】\x0a【不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断】\x0a【本脚本文件，禁止任何公众号、论坛、群体以及任何形式的转载、发布,否则后果自负】\x0a【本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害】\x0a【直接或间接使用脚本的任何用户，包括但不限于代挂或其他某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责】\x0a【如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本】\x0a【任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明】');if($[_0x5d2e('‫1f','#86I')]()){var _0x5a7eb1=_0x36b6fe['hjULK'](require,'fs'),_0x4510c6=require(_0x36b6fe[_0x5d2e('‫20','Mg1z')]);function _0x36d01c(){var _0x3c430d={'LMcuh':_0x36b6fe[_0x5d2e('‫21','mN&v')]};var _0x2347ea='';var _0x486cb7=_0x5a7eb1['readdirSync'](_0x36b6fe[_0x5d2e('‮22','gjk)')]);_0x486cb7[_0x5d2e('‮23','$33w')](function(_0x3cdf3c){var _0x339f58=_0x4510c6['join'](_0x5d2e('‫24','1[iQ'),_0x3cdf3c,_0x5d2e('‮25','[aB$'));if(_0x3cdf3c['substr'](0x0,0x3)==_0x3c430d[_0x5d2e('‫26','*urV')]&&_0x5a7eb1[_0x5d2e('‮27','$33w')](_0x339f58)){_0x2347ea=_0x5a7eb1['readFileSync'](_0x339f58)[_0x5d2e('‮28','^pwZ')]()[_0x5d2e('‮29','Su)v')]();};});return _0x2347ea;};mac=_0x36b6fe[_0x5d2e('‫2a','KHH^')](_0x36d01c);await _0x36b6fe[_0x5d2e('‮2b','kv[]')](yyz_getip);try{before=_0x5a7eb1[_0x5d2e('‫2c','y[@q')](_0x5d2e('‫2d','W34A'))[_0x5d2e('‫2e','J*JX')]()[_0x5d2e('‮2f','qEf$')]();reg_ip=before['split']('&')[0x0];reg_mac=before[_0x5d2e('‫30','Lb3N')]('&')[0x1];}catch(_0x7929bb){reg_ip='';reg_mac='';}mac_e=CryptoJs[_0x5d2e('‮31','p(cl')]['Utf8'][_0x5d2e('‮32','KHH^')](_0x5d2e('‫33','WHng'));mac_i=CryptoJs[_0x5d2e('‫34','h@Lz')][_0x5d2e('‮35','y[@q')][_0x5d2e('‫36','r*cq')]('140c1f12feeb2c52dfbeb2da6066a73a');let _0x4cfb81=$[_0x5d2e('‮37','J*JX')]()?process[_0x5d2e('‮38','NxGo')][_0x5d2e('‮39','jG5Z')]:'';if(!_0x4cfb81){console[_0x5d2e('‮3a','@xCT')]('\x0a【'+$['name']+_0x5d2e('‮3b','*urV'));return!![];}else{TG_ID=_0x4cfb81[_0x5d2e('‫3c','3lkI')]('&')[0x0];yyz_Kami=_0x4cfb81[_0x5d2e('‫3d','*urV')]('&')[0x1];try{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x270a15){throw new Error(_0x5d2e('‮3e','XrU)'));}try{YZ=author[_0x5d2e('‫3f','Su)v')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x51f657){throw new Error(_0x5d2e('‮40','0AP4'));}};if(process['env']['soy_bbg_data']&&process[_0x5d2e('‮41','jG5Z')][_0x5d2e('‮42','Mg1z')][_0x5d2e('‮43','KHH^')]('\x0a')>-0x1){if(_0x5d2e('‫44','1[iQ')===_0x36b6fe[_0x5d2e('‮45','G#sr')]){app_soy_bbg_data=process[_0x5d2e('‮46','p(cl')][_0x5d2e('‮47','^pwZ')][_0x5d2e('‫30','Lb3N')]('\x0a');}else{console['log']('\x0a【'+Tips+_0x5d2e('‫48','gU5v')+$[_0x5d2e('‮49','gjk)')]+_0x5d2e('‮4a','Mg1z')+_0x36b6fe[_0x5d2e('‮4b','B[&R')](num,0x1)+_0x5d2e('‮4c','va^M'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5d2e('‮4d','qEf$')]+'\x20领取气泡'+(num+0x1)+_0x5d2e('‫4e','0AP4');state=![];}}else if(process[_0x5d2e('‮4f','h(]]')]['soy_bbg_data']&&process[_0x5d2e('‫50','mN&v')][_0x5d2e('‫51','B[&R')][_0x5d2e('‫52','[aB$')]('#')>-0x1){app_soy_bbg_data=process[_0x5d2e('‫53','eSfA')][_0x5d2e('‫54','WHng')][_0x5d2e('‫55','qEf$')]('#');}else if(process['env']['soy_bbg_data']&&_0x36b6fe[_0x5d2e('‮56','jG5Z')](process['env'][_0x5d2e('‮57','4)Ke')]['indexOf']('@'),-0x1)){if(_0x36b6fe[_0x5d2e('‮58','h(]]')](_0x36b6fe[_0x5d2e('‮59','k0Un')],'GjepM')){app_soy_bbg_data=process[_0x5d2e('‮5a','WHng')]['soy_bbg_data'][_0x5d2e('‫55','qEf$')]('@');}else{throw new Error(_0x36b6fe['vvOhK']);}}else{if(_0x5d2e('‫5b','K!a#')!==_0x36b6fe['VbuJZ']){throw new Error(_0x36b6fe[_0x5d2e('‫5c','NxGo')]);}else{app_soy_bbg_data=process[_0x5d2e('‫5d','va^M')]['soy_bbg_data']['split']();}};console[_0x5d2e('‮5e','0AP4')](_0x5d2e('‫5f','4)Ke')+TG_ID+_0x5d2e('‫60','va^M')+mac+_0x5d2e('‮61','k0Un')+IP_address);if(!reg_ip){var _0x5555ac=CryptoJs[_0x5d2e('‮62','eSfA')][_0x5d2e('‮63','kv[]')][_0x5d2e('‮64','Mg1z')](reg_mac);var _0x70bf5c=CryptoJs['enc']['Base64']['stringify'](_0x5555ac);var _0x627bf9=CryptoJs[_0x5d2e('‮65','k0Un')]['decrypt'](_0x70bf5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5d2e('‮66','@4hH')][_0x5d2e('‫67','Su)v')],'padding':CryptoJs['pad']['Pkcs7']});var _0x15cad2=_0x627bf9[_0x5d2e('‫68','p^bp')](CryptoJs['enc'][_0x5d2e('‮69','J*JX')]);console['log']('注册信息：\x0a---TG_ID：'+TG_ID+_0x5d2e('‫6a','NxGo')+mac+'|IP：无');}else if(!reg_mac){if(_0x36b6fe[_0x5d2e('‫6b','z%k&')]===_0x36b6fe[_0x5d2e('‮6c','p^bp')]){let _0x5823d0=JSON[_0x5d2e('‫6d','gjk)')](data);if(_0x36b6fe['rvuwe'](_0x5823d0[_0x5d2e('‮6e','gU5v')],0xc8)){console['log']('\x0a['+TG_ID+_0x5d2e('‮6f','4)Ke')+_0x5823d0[_0x5d2e('‮70','*urV')]+_0x5d2e('‫71','3lkI'));return![];}else{console[_0x5d2e('‮72','K!a#')]('\x0a['+TG_ID+_0x5d2e('‮73','J*JX')+_0x5823d0[_0x5d2e('‮74','Su)v')]);subTitle+='\x0a['+TG_ID+_0x5d2e('‫75','G#sr')+_0x5823d0[_0x5d2e('‫76','zD0l')];return![];}}else{var _0x26f588=_0x36b6fe[_0x5d2e('‫77','*o@k')]['split']('|'),_0x190bb5=0x0;while(!![]){switch(_0x26f588[_0x190bb5++]){case'0':var _0x5555ac=CryptoJs[_0x5d2e('‫78','oI!r')]['Hex']['parse'](reg_ip);continue;case'1':console[_0x5d2e('‮79','WHng')]('注册信息：\x0a---TG_ID：'+TG_ID+_0x5d2e('‫7a','W34A')+_0x15cad2['toString']());continue;case'2':var _0x627bf9=CryptoJs['AES'][_0x5d2e('‫7b','&upz')](_0x70bf5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5d2e('‮7c','@xCT')][_0x5d2e('‫7d','gjk)')],'padding':CryptoJs[_0x5d2e('‫7e','k0Un')][_0x5d2e('‫7f','VH4q')]});continue;case'3':var _0x15cad2=_0x627bf9[_0x5d2e('‫80','gjk)')](CryptoJs[_0x5d2e('‫81','XrU)')][_0x5d2e('‫82','59Z6')]);continue;case'4':var _0x70bf5c=CryptoJs['enc']['Base64'][_0x5d2e('‫83','#86I')](_0x5555ac);continue;}break;}}}else if(_0x36b6fe[_0x5d2e('‮84','G#sr')](!reg_mac,!reg_ip)){if(_0x36b6fe['HZtXq'](_0x36b6fe[_0x5d2e('‮85','jG5Z')],_0x36b6fe[_0x5d2e('‮86','59Z6')])){_0x36b6fe['IMdYX'](resolve);}else{console[_0x5d2e('‮87','mN&v')](_0x5d2e('‫88','*urV')+TG_ID+_0x5d2e('‫89','gU5v'));}}else{if(_0x36b6fe['JcIiA']===_0x36b6fe[_0x5d2e('‮8a','3lkI')]){console['log']('\x0a['+TG_ID+_0x5d2e('‮8b','p^bp')+error);subTitle+='\x0a['+TG_ID+_0x5d2e('‮8c','@xCT')+error;}else{var _0x5555ac=CryptoJs[_0x5d2e('‮8d','&upz')][_0x5d2e('‫8e','G#sr')]['parse'](reg_ip);var _0x70bf5c=CryptoJs['enc'][_0x5d2e('‮8f','tE9E')][_0x5d2e('‫90','XrU)')](_0x5555ac);var _0x627bf9=CryptoJs['AES'][_0x5d2e('‫91','59Z6')](_0x70bf5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5d2e('‫92','[aB$')][_0x5d2e('‫93','G#sr')],'padding':CryptoJs[_0x5d2e('‫94','$33w')][_0x5d2e('‮95','59Z6')]});var _0x52bceb=_0x627bf9[_0x5d2e('‮96','3lkI')](CryptoJs['enc'][_0x5d2e('‫97','K!a#')]);var _0x5555ac=CryptoJs[_0x5d2e('‮98','@4hH')][_0x5d2e('‮99','Su)v')][_0x5d2e('‫9a','h@Lz')](reg_mac);var _0x70bf5c=CryptoJs[_0x5d2e('‮9b','3lkI')][_0x5d2e('‫9c','XrU)')][_0x5d2e('‮9d','WHng')](_0x5555ac);var _0x627bf9=CryptoJs[_0x5d2e('‮9e','&upz')]['decrypt'](_0x70bf5c,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5d2e('‫9f','qEf$')][_0x5d2e('‮a0','3lkI')],'padding':CryptoJs[_0x5d2e('‫a1','Gpuy')][_0x5d2e('‮a2','p^bp')]});var _0x1011b6=_0x627bf9[_0x5d2e('‫a3','B[&R')](CryptoJs[_0x5d2e('‫a4','[aB$')][_0x5d2e('‫97','K!a#')]);console[_0x5d2e('‫a5','Mg1z')](_0x5d2e('‫a6','k0Un')+TG_ID+'|MAC：'+_0x1011b6+_0x5d2e('‮a7','oI!r')+_0x52bceb);}}user_num=app_soy_bbg_data[_0x5d2e('‫a8','WHng')];console['log'](_0x5d2e('‮a9','oI!r')+new Date(_0x36b6fe[_0x5d2e('‫aa','W34A')](_0x36b6fe[_0x5d2e('‫ab','r*cq')](new Date()[_0x5d2e('‮ac','@xCT')](),_0x36b6fe[_0x5d2e('‮ad','KHH^')](new Date()['getTimezoneOffset']()*0x3c,0x3e8)),_0x36b6fe[_0x5d2e('‮ae','3lkI')](_0x36b6fe['llLFJ'](_0x36b6fe[_0x5d2e('‫af','r*cq')](0x8,0x3c),0x3c),0x3e8)))[_0x5d2e('‮b0','Lb3N')]()+_0x5d2e('‮b1','r*cq'));await _0x36b6fe[_0x5d2e('‫b2','tE9E')](yyz_login);console[_0x5d2e('‮b3','Su)v')](_0x5d2e('‫b4','h@Lz')+user_num+'\x20个账号】===');subTitle='';if(yyz_d){for(i=0x0;_0x36b6fe[_0x5d2e('‮b5','W34A')](i,user_num);i++){state=!![];bbg_token=app_soy_bbg_data[i];if(!bbg_UA){if(_0x36b6fe[_0x5d2e('‫b6','k0Un')]!==_0x36b6fe[_0x5d2e('‫b7','qEf$')]){throw new Error(_0x36b6fe[_0x5d2e('‫b8','^pwZ')]);}else{bbg_UA=_0x36b6fe['hGGYu'];}}$[_0x5d2e('‮b9','1[iQ')]=_0x36b6fe[_0x5d2e('‫ba','mN&v')](i,0x1);console[_0x5d2e('‮bb','4)Ke')](_0x5d2e('‫bc','WHng')+$[_0x5d2e('‮bd','J*JX')]+'\x20个账号任务】');await _0x36b6fe[_0x5d2e('‫be','59Z6')](implement);}}else{console['log']('\x0a【脚本提示】：验证不通关,可能服务器原因,如需办理删号退款找@ls_soy');}}else{console['log'](_0x5d2e('‫bf','[aB$'));return;}if(notify){if(_0x36b6fe[_0x5d2e('‫c0','h@Lz')](_0x36b6fe['aMyFp'],_0x5d2e('‮c1','p(cl'))){if(subTitle){if(_0x36b6fe['HZtXq'](_0x36b6fe['ODhzY'],_0x36b6fe[_0x5d2e('‫c2','gU5v')])){user_H=result[_0x5d2e('‮c3','0AP4')];yyz_d=!![];}else{await notify[_0x5d2e('‫c4','h@Lz')]($[_0x5d2e('‫c5','$33w')],subTitle);}}}else{console[_0x5d2e('‫c6','p(cl')](_0x5d2e('‫c7','Gpuy'));return!![];}}})()[_0x5d2e('‫c8','tE9E')](_0x4f77e8=>$['logErr'](_0x4f77e8))[_0x5d2e('‮c9','tE9E')](()=>$['done']());async function implement(){var _0x24e87d={'PmTVC':function(_0x82cc03){return _0x82cc03();},'bTzzD':function(_0x43c452,_0x5c4fdd){return _0x43c452<_0x5c4fdd;},'TxxFt':function(_0x5003ea,_0x3e5388){return _0x5003ea(_0x3e5388);},'Qbble':function(_0x213dd2,_0x29d9ba){return _0x213dd2*_0x29d9ba;},'UcYzl':function(_0xf6798f,_0x19bb52){return _0xf6798f+_0x19bb52;},'syXqI':function(_0x7cc375,_0x38fdf9){return _0x7cc375-_0x38fdf9;}};await _0x24e87d[_0x5d2e('‫ca','3lkI')](spread);for(let _0x48fbe5=0x0;_0x24e87d['bTzzD'](_0x48fbe5,0x6)&&state;_0x48fbe5++){await _0x24e87d[_0x5d2e('‮cb','B[&R')](getgold,_0x48fbe5);await $['wait'](Math['floor'](_0x24e87d[_0x5d2e('‫cc','G#sr')](Math[_0x5d2e('‫cd','K!a#')](),_0x24e87d['UcYzl'](_0x24e87d['syXqI'](0xbb8,0x3e8),0x3e8))+0x3e8));}}function getgold(_0x2b8d81){var _0x174af4={'gtDkL':function(_0x4087cf,_0x58aa5d){return _0x4087cf==_0x58aa5d;},'lFTZq':function(_0x1763f6,_0x1e76f6){return _0x1763f6===_0x1e76f6;},'DlwgA':_0x5d2e('‫ce','&upz'),'oSkYN':'hiGhO','jtRBV':function(_0x3966e7,_0x720d38){return _0x3966e7+_0x720d38;},'vOBQD':function(_0x5db501,_0x1e0d27){return _0x5db501+_0x1e0d27;}};let _0x45f9e3=Get_request(_0x5d2e('‮cf','p^bp')+_0x2b8d81);return new Promise((_0x7f6a9c,_0x506bd1)=>{var _0x140d0e={'BMNFk':function(_0x44e59d,_0x1eb1e8){return _0x174af4['gtDkL'](_0x44e59d,_0x1eb1e8);},'zKjvZ':function(_0x108c24,_0x823cd){return _0x174af4[_0x5d2e('‫d0','gjk)')](_0x108c24,_0x823cd);},'spOTq':_0x174af4[_0x5d2e('‮d1','*o@k')],'yyTPm':_0x174af4['oSkYN'],'VQEYh':function(_0x4f295a,_0x2ca3e9){return _0x4f295a+_0x2ca3e9;},'vnBnK':function(_0x3452cd,_0x3a2dd4){return _0x174af4[_0x5d2e('‫d2','0AP4')](_0x3452cd,_0x3a2dd4);},'DPeNK':function(_0x4c8de0,_0x567614){return _0x174af4[_0x5d2e('‫d3','r*cq')](_0x4c8de0,_0x567614);},'ZSFeW':function(_0x27b67f,_0xb993f7){return _0x174af4['vOBQD'](_0x27b67f,_0xb993f7);},'frxVh':function(_0x138940,_0x809239){return _0x138940+_0x809239;},'KpIOz':function(_0x5cfe0d){return _0x5cfe0d();}};if(_0x5d2e('‮d4','Gpuy')!==_0x5d2e('‫d5','Su)v')){console['log']('\x0a【'+Tips+_0x5d2e('‫d6','NxGo')+$[_0x5d2e('‮d7','@xCT')]+_0x5d2e('‮d8','p^bp')+(_0x2b8d81+0x1)+_0x5d2e('‮d9','J*JX')+result[_0x5d2e('‫da','mN&v')]);subTitle+='\x0a【'+Tips+_0x5d2e('‫48','gU5v')+$[_0x5d2e('‮db','kv[]')]+'\x20领取气泡'+(_0x2b8d81+0x1)+_0x5d2e('‮dc','mq@6')+result[_0x5d2e('‫dd','mq@6')];state=![];}else{$[_0x5d2e('‮de','G#sr')](_0x45f9e3,async(_0x10db1f,_0x3f2106,_0x46fb58)=>{var _0xcbe433={'thFHY':function(_0x301da8,_0x1c5cb3){return _0x140d0e['BMNFk'](_0x301da8,_0x1c5cb3);}};try{if(_0x140d0e[_0x5d2e('‮df','oI!r')](_0x140d0e[_0x5d2e('‫e0','y[@q')],_0x140d0e[_0x5d2e('‮e1','XrU)')])){let _0x29f92a=JSON[_0x5d2e('‮e2','@4hH')](_0x46fb58);if(_0xcbe433[_0x5d2e('‮e3','p(cl')](_0x29f92a[_0x5d2e('‫e4','Mg1z')],0xc8)){console[_0x5d2e('‮e5','*o@k')]('\x0a【'+Tips+_0x5d2e('‮e6','NxGo')+$[_0x5d2e('‮49','gjk)')]+'\x20领取离线金币】:\x20成功,获得'+_0x29f92a['data']+'金币');subTitle+='\x0a【'+Tips+_0x5d2e('‮e7','&upz')+$[_0x5d2e('‫e8','oI!r')]+_0x5d2e('‫e9','0AP4')+_0x29f92a[_0x5d2e('‮ea','k0Un')]+'金币';}else{console[_0x5d2e('‫eb','kv[]')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x5d2e('‫ec','h@Lz')]+_0x5d2e('‫ed','eSfA')+_0x29f92a[_0x5d2e('‮ee','p^bp')]);subTitle+='\x0a【'+Tips+_0x5d2e('‮ef','p(cl')+$[_0x5d2e('‫f0','Su)v')]+_0x5d2e('‮f1','XrU)')+_0x29f92a[_0x5d2e('‫f2','qEf$')];}}else{if(_0x10db1f){console[_0x5d2e('‮f3','[A1[')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20领取气泡'+_0x140d0e['VQEYh'](_0x2b8d81,0x1)+_0x5d2e('‮f4','#86I'));subTitle+='\x0a【'+Tips+_0x5d2e('‫f5','h@Lz')+$[_0x5d2e('‮d7','@xCT')]+_0x5d2e('‮f6','p(cl')+_0x140d0e['VQEYh'](_0x2b8d81,0x1)+_0x5d2e('‮f7','W34A');state=![];}else{let _0x3ff38b=JSON[_0x5d2e('‮32','KHH^')](_0x46fb58);if(_0x140d0e[_0x5d2e('‮f8','J*JX')](_0x3ff38b[_0x5d2e('‫f9','WHng')],0xc8)){console['log']('\x0a【'+Tips+_0x5d2e('‮fa','G#sr')+$[_0x5d2e('‫fb','r*cq')]+'\x20领取气泡'+_0x140d0e[_0x5d2e('‮fc','kv[]')](_0x2b8d81,0x1)+_0x5d2e('‮fd','K!a#')+_0x3ff38b[_0x5d2e('‮fe','Su)v')][_0x5d2e('‮ff','WHng')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5d2e('‫100','[aB$')]+'\x20领取气泡'+_0x140d0e[_0x5d2e('‫101','1[iQ')](_0x2b8d81,0x1)+_0x5d2e('‮102','1[iQ')+_0x3ff38b[_0x5d2e('‫103','zD0l')][_0x5d2e('‮104','h@Lz')]+'}';}else{console[_0x5d2e('‫105','B[&R')]('\x0a【'+Tips+_0x5d2e('‫106','1[iQ')+$[_0x5d2e('‮107','eSfA')]+'\x20领取气泡'+_0x140d0e['ZSFeW'](_0x2b8d81,0x1)+_0x5d2e('‮108','h@Lz')+_0x3ff38b['message']);subTitle+='\x0a【'+Tips+_0x5d2e('‮109','z%k&')+$[_0x5d2e('‮10a','KHH^')]+'\x20领取气泡'+_0x140d0e['frxVh'](_0x2b8d81,0x1)+_0x5d2e('‮10b','#86I')+_0x3ff38b[_0x5d2e('‮10c','@4hH')];state=![];}}}}catch(_0x1380a5){console[_0x5d2e('‮10d','r*cq')](_0x1380a5,_0x3f2106);}finally{_0x140d0e[_0x5d2e('‫10e','XrU)')](_0x7f6a9c);}});}});}function spread(){var _0x238799={'fglXx':function(_0x5d5e21,_0x9599){return _0x5d5e21+_0x9599;},'YyABt':function(_0xeba769,_0x3e45ef){return _0xeba769==_0x3e45ef;},'xjKXS':function(_0x4e4973,_0x338fa9){return _0x4e4973===_0x338fa9;},'bkjDY':function(_0x3aa888,_0x5c3191){return _0x3aa888!==_0x5c3191;},'hPGsF':_0x5d2e('‫10f','G#sr'),'tHHpL':function(_0xa69af7,_0x519357){return _0xa69af7!==_0x519357;},'OWaUc':_0x5d2e('‮110','3lkI'),'EurLq':function(_0x295026,_0x3f23fa){return _0x295026(_0x3f23fa);},'wPZNt':_0x5d2e('‫111','y[@q')};let _0x385923=_0x238799[_0x5d2e('‮112','p^bp')](Get_request,_0x238799[_0x5d2e('‫113','zD0l')]);return new Promise((_0x315cb5,_0x5a442b)=>{var _0x229e08={'bGMYh':function(_0x448081,_0xa6a33e){return _0x238799[_0x5d2e('‫114','r*cq')](_0x448081,_0xa6a33e);},'zohtK':function(_0x334144,_0x248fcd){return _0x334144+_0x248fcd;},'ikARK':function(_0x38cca2,_0x537cb2){return _0x238799[_0x5d2e('‮115','[A1[')](_0x38cca2,_0x537cb2);},'wZXcx':function(_0x5acbc9,_0x1ec054){return _0x238799[_0x5d2e('‫116','oI!r')](_0x5acbc9,_0x1ec054);},'juwam':_0x5d2e('‫117','va^M'),'TBzqj':function(_0x35efac,_0x2ba982){return _0x238799[_0x5d2e('‮118','kv[]')](_0x35efac,_0x2ba982);},'GaNcs':_0x238799[_0x5d2e('‫119','0AP4')],'ecCEV':function(_0x1351d6){return _0x1351d6();}};if(_0x238799['tHHpL'](_0x238799[_0x5d2e('‫11a','59Z6')],_0x238799[_0x5d2e('‫11b','va^M')])){IP_address=data;}else{$[_0x5d2e('‫11c','gU5v')](_0x385923,async(_0x384ebb,_0x4f038f,_0x686eb8)=>{try{if(_0x384ebb){console['log']('\x0a【'+Tips+_0x5d2e('‮11d','va^M')+$[_0x5d2e('‮d7','@xCT')]+_0x5d2e('‫11e','*urV'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+'\x20领取离线金币】:\x20网络请求失败';}else{let _0x546851=JSON[_0x5d2e('‫11f','k0Un')](_0x686eb8);if(_0x229e08['ikARK'](_0x546851[_0x5d2e('‫120','Lb3N')],0xc8)){if(_0x229e08['wZXcx'](_0x5d2e('‫121','XrU)'),_0x229e08['juwam'])){console[_0x5d2e('‫122','p^bp')]('\x0a【'+Tips+_0x5d2e('‫123','@4hH')+$[_0x5d2e('‫124','EZh%')]+'\x20领取气泡'+_0x229e08[_0x5d2e('‮125','y[@q')](num,0x1)+'】:\x20成功,当前金币\x20'+_0x546851[_0x5d2e('‮126','gjk)')]['balanceUnit']);subTitle+='\x0a【'+Tips+_0x5d2e('‮127','@4hH')+$['index']+_0x5d2e('‫128','G#sr')+_0x229e08['zohtK'](num,0x1)+'】:\x20成功,当前金币\x20'+_0x546851[_0x5d2e('‫129','VH4q')]['balanceUnit']+'}';}else{console[_0x5d2e('‫12a','@4hH')]('\x0a【'+Tips+_0x5d2e('‫123','@4hH')+$[_0x5d2e('‮107','eSfA')]+_0x5d2e('‮12b','3lkI')+_0x546851['data']+'金币');subTitle+='\x0a【'+Tips+_0x5d2e('‮12c','Lb3N')+$['index']+_0x5d2e('‮12d','EZh%')+_0x546851['data']+'金币';}}else{console['log']('\x0a【'+Tips+_0x5d2e('‫12e','^pwZ')+$[_0x5d2e('‮12f','z%k&')]+'\x20领取离线金币】:\x20'+_0x546851[_0x5d2e('‫130','h(]]')]);subTitle+='\x0a【'+Tips+_0x5d2e('‫131','r*cq')+$[_0x5d2e('‫ec','h@Lz')]+'\x20领取离线金币}】:\x20'+_0x546851['message'];}}}catch(_0x1e05b6){if(_0x229e08[_0x5d2e('‫132','mN&v')](_0x229e08[_0x5d2e('‮133','p^bp')],_0x229e08[_0x5d2e('‮134','^pwZ')])){app_soy_bbg_data=process[_0x5d2e('‫135','*urV')][_0x5d2e('‫136','W34A')][_0x5d2e('‫3c','3lkI')]('#');}else{console[_0x5d2e('‮137','XrU)')](_0x1e05b6,_0x4f038f);}}finally{_0x229e08[_0x5d2e('‮138','1[iQ')](_0x315cb5);}});}});}function Get_request(_0x459a35){var _0x464cec={'sVUUB':_0x5d2e('‮139','59Z6'),'SsMWW':_0x5d2e('‮13a','$33w'),'MqSQd':_0x5d2e('‫13b','59Z6'),'uLexc':'okhttp/3.14.9'};return{'url':'http://service.babydog.link/'+_0x459a35,'headers':{'token':bbg_token,'appId':user_H,'Host':_0x464cec['sVUUB'],'Connection':_0x464cec[_0x5d2e('‮13c','@4hH')],'Accept-Encoding':_0x464cec['MqSQd'],'User-Agent':_0x464cec[_0x5d2e('‫13d','tE9E')]}};};function Post_request(_0x47b47d,_0x3a81b4){var _0x3d0b75={'VUlTj':_0x5d2e('‮13e','qEf$'),'NTAsw':_0x5d2e('‫13f','z%k&')};return{'url':_0x5d2e('‫140','p(cl')+_0x47b47d,'headers':{'token':bbg_token,'user_H':user_H,'Host':_0x3d0b75[_0x5d2e('‮141','y[@q')],'Connection':_0x5d2e('‫142','#86I'),'Accept-Encoding':_0x3d0b75['NTAsw'],'User-Agent':_0x5d2e('‮143','^pwZ')},'body':_0x3a81b4};};function formatDate(){var _0x5bd42f={'eTcnF':function(_0x14cd73,_0x1c2f31){return _0x14cd73<_0x1c2f31;},'cqfXc':function(_0x3df0dc,_0x4e989d){return _0x3df0dc+_0x4e989d;},'WAguz':function(_0x5ea039,_0x3c4058){return _0x5ea039<_0x3c4058;}};let _0x397590=new Date();let _0x1ebf7f=_0x397590[_0x5d2e('‮144','G#sr')]();let _0x53ec59=_0x397590[_0x5d2e('‫145','@4hH')]()+0x1;let _0x437b2f=_0x397590['getDate']();_0x53ec59=_0x5bd42f[_0x5d2e('‫146','k0Un')](_0x53ec59,0xa)?_0x5bd42f[_0x5d2e('‮147','tE9E')]('0',_0x53ec59):_0x53ec59;_0x437b2f=_0x5bd42f['WAguz'](_0x437b2f,0xa)?'0'+_0x437b2f:_0x437b2f;return _0x1ebf7f+'/'+_0x53ec59+'/'+_0x437b2f;};async function yyz_login(){var _0x1f7e38={'HVGgX':function(_0x1d5c56,_0x197db7){return _0x1d5c56==_0x197db7;},'StBat':function(_0x4b0978,_0x34e13e){return _0x4b0978(_0x34e13e);},'UYAwm':function(_0x3b9d0e){return _0x3b9d0e();},'qDsZz':function(_0x243d27,_0x23b4bd){return _0x243d27===_0x23b4bd;},'snSwf':_0x5d2e('‫148','W34A'),'RDVkm':_0x5d2e('‫149','J*JX'),'aoWgn':function(_0xe61d1,_0x507b2e){return _0xe61d1!==_0x507b2e;},'ErDpA':'KuwCr','EnLYW':function(_0x2367aa){return _0x2367aa();},'JnUlz':function(_0x12e016,_0xc040d4){return _0x12e016!=_0xc040d4;},'uifcX':function(_0x5247e0,_0x5434ba){return _0x5247e0/_0x5434ba;},'kOzZO':function(_0x3f147b,_0x5c95e7){return _0x3f147b+_0x5c95e7;},'NUDwb':'&sign='};var _0x49bd71=CryptoJs[_0x5d2e('‮62','eSfA')][_0x5d2e('‮14a','B[&R')][_0x5d2e('‫14b','y[@q')](reg_ip);var _0x2c582a=CryptoJs[_0x5d2e('‫14c','*urV')][_0x5d2e('‮14d','WHng')][_0x5d2e('‮14e','@4hH')](_0x49bd71);var _0x2b6278=CryptoJs[_0x5d2e('‫14f','#86I')][_0x5d2e('‮150','mq@6')](_0x2c582a,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5d2e('‮151','kv[]')]['CBC'],'padding':CryptoJs[_0x5d2e('‫152','G#sr')]['Pkcs7']});var _0x5e1111=_0x2b6278[_0x5d2e('‫153','qEf$')](CryptoJs[_0x5d2e('‫154','Lb3N')]['Utf8']);if(_0x1f7e38[_0x5d2e('‮155','@4hH')](IP_address,_0x5e1111)){if(_0x1f7e38[_0x5d2e('‫156','Lb3N')](_0x5d2e('‫157','Gpuy'),_0x5d2e('‮158','k0Un'))){console[_0x5d2e('‮159','G#sr')]('\x0a作者提示:现登录IP/MAC和注册时的IP/MAC都不匹配,若无特殊需要请勿重启(对于某些人服务器)重装等操作.请联系作者@ls_soy');return!![];}else{console[_0x5d2e('‮159','G#sr')]('\x0a['+TG_ID+_0x5d2e('‫15a','&upz')+result[_0x5d2e('‮15b','r*cq')]);subTitle+='\x0a['+TG_ID+_0x5d2e('‮15c','K!a#')+result['msg'];}}var _0x4eef57=Math[_0x5d2e('‫15d','EZh%')](_0x1f7e38['uifcX'](Date[_0x5d2e('‫15e','XrU)')](),0x3e8));var _0xf36433=CryptoJs[_0x5d2e('‮15f','oI!r')](''+TG_ID+mac+os[_0x5d2e('‫160','4)Ke')]()+YZ)[_0x5d2e('‮161','Mg1z')]();var _0x16a75f=_0x5d2e('‮162','kv[]')+TG_ID+_0x5d2e('‮163','Gpuy')+_0xf36433+'&t='+_0x4eef57;var _0x577fd5=CryptoJs[_0x5d2e('‮164','@4hH')](_0x1f7e38[_0x5d2e('‮165','r*cq')](_0x1f7e38[_0x5d2e('‮166','Lb3N')](_0x16a75f,'&'),appid))[_0x5d2e('‮167','h(]]')]();_0x16a75f=_0x1f7e38[_0x5d2e('‮168','$33w')](_0x1f7e38[_0x5d2e('‮169','z%k&')](_0x16a75f,_0x1f7e38['NUDwb']),_0x577fd5);let _0x4160ac={'url':serverUrl+_0x5d2e('‫16a','WHng'),'headers':{'user-agent':_0x5d2e('‮16b','XrU)')},'body':_0x16a75f};return new Promise((_0x2f788e,_0x3d49c9)=>{$[_0x5d2e('‫16c','[A1[')](_0x4160ac,async(_0x4404b7,_0x1fd874,_0x4a352a)=>{try{if(_0x4404b7){console['log']('\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x4404b7);subTitle+='\x0a['+TG_ID+_0x5d2e('‫16d','VH4q')+_0x4404b7;}else{let _0x1681a7=JSON[_0x5d2e('‫16e','0AP4')](_0x4a352a);if(_0x1f7e38[_0x5d2e('‮16f','va^M')](_0x1681a7[_0x5d2e('‫170','qEf$')],0xc8)){let _0x323cf9=_0x1f7e38[_0x5d2e('‮171','&upz')](Format_time,_0x1681a7[_0x5d2e('‫172','^pwZ')][_0x5d2e('‫173','$33w')][_0x5d2e('‮174','K!a#')]);console[_0x5d2e('‮87','mN&v')]('\x0a['+TG_ID+']:\x20登录成功:\x20VIP到期时间\x20'+_0x323cf9);await _0x1f7e38['StBat'](get_vip,_0x1681a7[_0x5d2e('‮175','y[@q')][_0x5d2e('‮176','B[&R')]);}else if(_0x1f7e38[_0x5d2e('‫177','zD0l')](_0x1681a7[_0x5d2e('‫178','W34A')],0x71)){await _0x1f7e38[_0x5d2e('‫179','[A1[')](yyz_user_reg);}else{if(_0x1f7e38[_0x5d2e('‮17a','59Z6')](_0x5d2e('‫17b','qEf$'),_0x1f7e38[_0x5d2e('‮17c','h@Lz')])){console[_0x5d2e('‫17d','Lb3N')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x1681a7['msg']);subTitle+='\x0a['+TG_ID+_0x5d2e('‫17e','@xCT')+_0x1681a7[_0x5d2e('‫76','zD0l')];return![];}else{console[_0x5d2e('‮17f','va^M')]('\x0a【'+Tips+_0x5d2e('‮180','[A1[')+$[_0x5d2e('‮b9','1[iQ')]+_0x5d2e('‮181','Mg1z')+_0x1681a7[_0x5d2e('‫182','W34A')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x5d2e('‫183','tE9E')+_0x1681a7[_0x5d2e('‫184','@xCT')];}}}}catch(_0x4c1a56){if(_0x5d2e('‫185','EZh%')===_0x1f7e38[_0x5d2e('‫186','p(cl')]){console['log']('\x0a['+TG_ID+_0x5d2e('‮187','WHng')+result['msg']);subTitle+='\x0a['+TG_ID+_0x5d2e('‮188','0AP4')+result[_0x5d2e('‮189','mN&v')];return![];}else{console[_0x5d2e('‫18a','J*JX')](_0x4c1a56);}}finally{if(_0x1f7e38['aoWgn'](_0x1f7e38[_0x5d2e('‮18b','B[&R')],_0x1f7e38[_0x5d2e('‫18c','oI!r')])){console['log'](e);}else{_0x1f7e38[_0x5d2e('‫18d','[A1[')](_0x2f788e);}}});});}async function get_vip(_0x3888fe){var _0x1573cf={'DCtRG':function(_0xda409b,_0x14a377){return _0xda409b(_0x14a377);},'xHsSp':function(_0x19666c,_0x291803){return _0x19666c==_0x291803;},'mRcYo':function(_0x3b56c1,_0x19af24){return _0x3b56c1==_0x19af24;},'VVrMQ':_0x5d2e('‮18e','XrU)'),'dopCW':function(_0x110dcf,_0x3381d7){return _0x110dcf(_0x3381d7);},'MCdHO':function(_0xb3d672,_0x517d20){return _0xb3d672+_0x517d20;},'Bxaza':'&sign='};var _0x3b1cf1=Math[_0x5d2e('‮18f','va^M')](Date[_0x5d2e('‫190','Su)v')]()/0x3e8);var _0x2e75e0=_0x5d2e('‫191','Lb3N')+user_num+_0x5d2e('‮192','B[&R')+_0x3888fe+'&t='+_0x3b1cf1;var _0x45f0d8=CryptoJs[_0x5d2e('‫193','kv[]')](_0x1573cf[_0x5d2e('‫194','Lb3N')](_0x1573cf['MCdHO'](_0x2e75e0,'&'),appid))['toString']();_0x2e75e0=_0x1573cf[_0x5d2e('‮195','W34A')](_0x2e75e0+_0x1573cf[_0x5d2e('‫196','mq@6')],_0x45f0d8);let _0x42904d={'url':serverUrl+_0x5d2e('‮197','jG5Z'),'headers':{'user-agent':_0x5d2e('‮198','1[iQ')},'body':_0x2e75e0};return new Promise((_0x2cf999,_0x5bbf25)=>{var _0x56c520={'qkRiM':function(_0x513990,_0x4fd78c){return _0x1573cf['DCtRG'](_0x513990,_0x4fd78c);},'QhwsC':function(_0x58bf8f,_0x17c077){return _0x1573cf[_0x5d2e('‮199','NxGo')](_0x58bf8f,_0x17c077);},'kIxUq':function(_0x806fc7,_0x3835fb){return _0x1573cf[_0x5d2e('‫19a','qEf$')](_0x806fc7,_0x3835fb);},'XZjUa':function(_0x3ea6a8,_0x25ea68){return _0x3ea6a8==_0x25ea68;},'cWbtZ':_0x1573cf[_0x5d2e('‫19b','mq@6')],'LvPoM':function(_0x4fd3cb,_0x95c578){return _0x1573cf[_0x5d2e('‮19c','*o@k')](_0x4fd3cb,_0x95c578);},'cyMZt':function(_0x585e2c){return _0x585e2c();}};$['post'](_0x42904d,async(_0x1219ac,_0x24e6fc,_0x5645e4)=>{var _0x333ccd={'qcyhx':function(_0x858d31,_0x582daf){return _0x56c520[_0x5d2e('‮19d','mN&v')](_0x858d31,_0x582daf);}};try{if(_0x1219ac){console['log']('\x0a['+TG_ID+_0x5d2e('‫19e','oI!r')+_0x1219ac);subTitle+='\x0a['+TG_ID+_0x5d2e('‫19f','tE9E')+_0x1219ac;}else{let _0x4ad0bf=JSON['parse'](_0x5645e4);if(_0x56c520['QhwsC'](_0x4ad0bf['code'],0xc8)){user_H=_0x4ad0bf[_0x5d2e('‮1a0','h(]]')];yyz_d=!![];}else if(_0x56c520[_0x5d2e('‫1a1','^pwZ')](_0x4ad0bf[_0x5d2e('‫178','W34A')],0xca)){console[_0x5d2e('‮e5','*o@k')]('\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x4ad0bf['msg']);subTitle+='\x0a['+TG_ID+_0x5d2e('‫1a2','#86I')+_0x4ad0bf[_0x5d2e('‮1a3','XrU)')];}else if(_0x56c520['XZjUa'](_0x4ad0bf['code'],0xcd)){console['log']('\x0a['+TG_ID+_0x5d2e('‮1a4','mN&v')+_0x4ad0bf['msg']);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x4ad0bf[_0x5d2e('‫76','zD0l')];}else{if(!yyz_Kami){console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+_0x5d2e('‫1a5','K!a#');return![];}else{if(_0x56c520[_0x5d2e('‮1a6','B[&R')]!==_0x5d2e('‮1a7','#86I')){await _0x56c520[_0x5d2e('‮1a8','#86I')](card,_0x3888fe);}else{fs=$[_0x5d2e('‮1a9','r*cq')]()?_0x333ccd[_0x5d2e('‮1aa','WHng')](require,'fs'):'';}}}}}catch(_0xc28152){console[_0x5d2e('‮1ab','z%k&')](_0xc28152);}finally{_0x56c520[_0x5d2e('‫1ac','kv[]')](_0x2cf999);}});});}async function yyz_user_reg(){var _0x54ebfa={'eWLDG':function(_0x474756,_0x23ebf4){return _0x474756==_0x23ebf4;},'xYvPp':function(_0x2b63e2,_0x1b7be1){return _0x2b63e2+_0x1b7be1;},'CRykP':_0x5d2e('‮1ad','@xCT'),'lfJYR':function(_0xf6090d,_0x18d4a2){return _0xf6090d===_0x18d4a2;},'uZmcP':'gqQME','JcLlQ':_0x5d2e('‫1ae','[aB$'),'dTWjI':_0x5d2e('‫1af','mq@6'),'zVvNS':function(_0x143993,_0x23bb6e){return _0x143993&&_0x23bb6e;},'PQmep':function(_0x4e6d41,_0x21b8a6){return _0x4e6d41/_0x21b8a6;},'KaTJC':function(_0x2de23f,_0x660673){return _0x2de23f+_0x660673;},'blycP':'&sign='};if(_0x54ebfa[_0x5d2e('‫1b0','&upz')](!Tips,!YZ)){console[_0x5d2e('‮1b1','W34A')]('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}await yyz_getip();var _0x3ed269=Math['floor'](_0x54ebfa[_0x5d2e('‫1b2','Su)v')](Date[_0x5d2e('‫1b3','z%k&')](),0x3e8));var _0xdfe767=CryptoJs['MD5'](''+TG_ID+mac+os[_0x5d2e('‫1b4','va^M')]()+YZ)['toString']();var _0x250777=_0x5d2e('‮1b5','B[&R')+TG_ID+_0x5d2e('‮1b6','K!a#')+_0xdfe767+_0x5d2e('‫1b7','VH4q')+_0x3ed269;var _0x28aa05=CryptoJs[_0x5d2e('‮1b8','^pwZ')](_0x54ebfa[_0x5d2e('‮1b9','eSfA')](_0x54ebfa[_0x5d2e('‮1ba','oI!r')](_0x250777,'&'),appid))['toString']();_0x250777=_0x54ebfa['KaTJC'](_0x54ebfa['KaTJC'](_0x250777,_0x54ebfa['blycP']),_0x28aa05);let _0x407d24={'url':serverUrl+_0x5d2e('‮1bb','1[iQ'),'headers':{'user-agent':_0x54ebfa[_0x5d2e('‮1bc','1[iQ')]},'body':_0x250777};return new Promise((_0x2eea4e,_0x2d472a)=>{var _0x4e58cb={'BxoeK':function(_0x2d0f81,_0x41ea00){return _0x54ebfa['eWLDG'](_0x2d0f81,_0x41ea00);},'TmeuB':function(_0x1d1bcc,_0x7c06a2){return _0x54ebfa[_0x5d2e('‫1bd','oI!r')](_0x1d1bcc,_0x7c06a2);},'WvsBa':_0x54ebfa['CRykP'],'rVLag':function(_0x1dc7c6,_0x42f458){return _0x1dc7c6==_0x42f458;},'XlUjX':function(_0x4192e9,_0x439212){return _0x54ebfa[_0x5d2e('‮1be','va^M')](_0x4192e9,_0x439212);},'xQKtC':_0x54ebfa[_0x5d2e('‫1bf','r*cq')],'wnsfd':_0x5d2e('‮1c0','p(cl'),'rqrBx':'PjuNG','tgKNy':_0x5d2e('‮1c1','Gpuy'),'SUxyc':_0x54ebfa['JcLlQ'],'IxrnK':_0x54ebfa[_0x5d2e('‫1c2','Su)v')],'PUwIO':function(_0x34de9c){return _0x34de9c();}};$['post'](_0x407d24,async(_0x5b0395,_0xce31b6,_0x4f6910)=>{try{if(_0x5b0395){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x5b0395);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x5b0395;}else{let _0x254ac5=JSON[_0x5d2e('‮1c3','@xCT')](_0x4f6910);if(_0x4e58cb[_0x5d2e('‮1c4','@xCT')](_0x254ac5[_0x5d2e('‫1c5','oI!r')],0xc8)){let _0x17bba9=CryptoJs[_0x5d2e('‮9b','3lkI')]['Utf8']['parse'](IP_address);let _0x2579b7=CryptoJs[_0x5d2e('‫1c6','4)Ke')]['encrypt'](_0x17bba9,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x5d2e('‮151','kv[]')][_0x5d2e('‮1c7','4)Ke')],'padding':CryptoJs['pad']['Pkcs7']});let _0x1f0772=_0x2579b7[_0x5d2e('‮1c8','mN&v')]['toString']()['toUpperCase']();_0x17bba9=CryptoJs[_0x5d2e('‫1c9','1[iQ')]['Utf8'][_0x5d2e('‮1ca','&upz')](mac);let _0x2f260a=CryptoJs['AES'][_0x5d2e('‫1cb','h@Lz')](_0x17bba9,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x5d2e('‫1cc','NxGo')],'padding':CryptoJs['pad'][_0x5d2e('‮1cd','qEf$')]});let _0x5517e2=_0x2f260a[_0x5d2e('‮1ce','kv[]')]['toString']()['toUpperCase']();try{if(_0x4e58cb[_0x5d2e('‫1cf','EZh%')](_0x4e58cb[_0x5d2e('‮1d0','Gpuy')],_0x5d2e('‮1d1','[aB$'))){fs[_0x5d2e('‮1d2','1[iQ')](_0x4e58cb[_0x5d2e('‫1d3','B[&R')],_0x1f0772+'&'+_0x5517e2);}else{YZ=author['match'](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}}catch(_0x195f0c){}console['log']('\x0a['+TG_ID+_0x5d2e('‮1d4','XrU)')+IP_address+_0x5d2e('‮1d5','4)Ke')+mac);await yyz_login();}else if(_0x4e58cb['rVLag'](_0x254ac5[_0x5d2e('‫1d6','#86I')],0x75)){if(_0x4e58cb[_0x5d2e('‮1d7','zD0l')]!==_0x5d2e('‫1d8','Mg1z')){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x254ac5['msg']+'，该TG_ID/设备/IP已被注册');return![];}else{let _0x57f0af=JSON[_0x5d2e('‫1d9','[aB$')](_0x4f6910);if(_0x4e58cb[_0x5d2e('‮1da','oI!r')](_0x57f0af[_0x5d2e('‮1db','K!a#')],0xc8)){console[_0x5d2e('‮1dc','$33w')]('\x0a【'+Tips+_0x5d2e('‫1dd','4)Ke')+$['index']+_0x5d2e('‮1de','mq@6')+_0x4e58cb[_0x5d2e('‮1df','Mg1z')](num,0x1)+_0x5d2e('‮1e0','$33w')+_0x57f0af['data']['balanceUnit']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5d2e('‫1e1','y[@q')]+_0x5d2e('‮1e2','0AP4')+(num+0x1)+'】:\x20成功,当前金币\x20'+_0x57f0af[_0x5d2e('‮1e3','r*cq')][_0x5d2e('‫1e4','*o@k')]+'}';}else{console[_0x5d2e('‫1e5','1[iQ')]('\x0a【'+Tips+_0x5d2e('‫1e6','59Z6')+$[_0x5d2e('‫1e7','h(]]')]+_0x5d2e('‮1e8','3lkI')+(num+0x1)+_0x5d2e('‮1e9','4)Ke')+_0x57f0af[_0x5d2e('‮1ea','eSfA')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x5d2e('‮1eb','W34A')]+_0x5d2e('‮1e2','0AP4')+(num+0x1)+'】:\x20'+_0x57f0af['message'];state=![];}}}else{if(_0x4e58cb[_0x5d2e('‫1ec','Su)v')](_0x4e58cb[_0x5d2e('‮1ed','&upz')],_0x4e58cb['SUxyc'])){_0x2eea4e();}else{console[_0x5d2e('‮79','WHng')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x254ac5['msg']);subTitle+='\x0a['+TG_ID+_0x5d2e('‫1ee','*o@k')+_0x254ac5['msg'];return![];}}}}catch(_0x51f949){if(_0x5d2e('‮1ef','gU5v')==='FXaTM'){before=fs[_0x5d2e('‫1f0','J*JX')](_0x5d2e('‫1f1','#86I'))[_0x5d2e('‫153','qEf$')]()[_0x5d2e('‮1f2','Mg1z')]();reg_ip=before[_0x5d2e('‮1f3','oI!r')]('&')[0x0];_0xdfe767=before[_0x5d2e('‫30','Lb3N')]('&')[0x1];}else{console[_0x5d2e('‫17d','Lb3N')](_0x51f949);}}finally{if('vgYuY'!==_0x4e58cb['IxrnK']){bbg_UA=_0x4e58cb['WvsBa'];}else{_0x4e58cb[_0x5d2e('‮1f4','k0Un')](_0x2eea4e);}}});});}async function card(_0x2d5986){var _0x2facb4={'vGhkr':function(_0x4bcceb,_0x54995d){return _0x4bcceb===_0x54995d;},'uffch':_0x5d2e('‫1f5','^pwZ'),'pdxWo':function(_0x388fdd,_0x1fe137){return _0x388fdd==_0x1fe137;},'Djmuu':function(_0x43fab7,_0x5c37ef){return _0x43fab7===_0x5c37ef;},'LLliU':function(_0x262645,_0x296222){return _0x262645!==_0x296222;},'JsTFG':_0x5d2e('‮1f6','Lb3N'),'BAZDO':'service.babydog.link','cGKtr':'gzip','nNXzM':function(_0x4be472,_0x33e907){return _0x4be472/_0x33e907;},'LiCsM':function(_0x1421fc,_0x3eed39){return _0x1421fc+_0x3eed39;},'rdKuv':_0x5d2e('‫1f7','Gpuy'),'RuVxf':_0x5d2e('‮1f8','gjk)')};var _0xeaf82=Math['floor'](_0x2facb4[_0x5d2e('‫1f9','*urV')](Date[_0x5d2e('‮1fa','p^bp')](),0x3e8));var _0x4faa34=_0x5d2e('‮1fb','@xCT')+_0x2d5986+_0x5d2e('‫1fc','z%k&')+yyz_Kami+_0x5d2e('‫1fd','mN&v')+_0xeaf82;var _0x5ecc24=CryptoJs['MD5'](_0x2facb4[_0x5d2e('‮1fe','1[iQ')](_0x4faa34,'&')+appid)[_0x5d2e('‫1ff','#86I')]();_0x4faa34=_0x4faa34+_0x2facb4[_0x5d2e('‮200','XrU)')]+_0x5ecc24;let _0x33763b={'url':serverUrl+_0x5d2e('‫201','Mg1z'),'headers':{'user-agent':_0x2facb4[_0x5d2e('‮202','eSfA')]},'body':_0x4faa34};return new Promise((_0x4fdf88,_0xb82701)=>{var _0x41af83={'qLwjV':_0x2facb4[_0x5d2e('‮203','Gpuy')],'xWmkD':_0x2facb4[_0x5d2e('‫204','k0Un')],'AJXuQ':_0x5d2e('‮205','[A1[')};$[_0x5d2e('‫206','NxGo')](_0x33763b,async(_0x2eabd8,_0x48c0a1,_0xabf1f7)=>{try{if(_0x2eabd8){console['log']('\x0a['+TG_ID+_0x5d2e('‮207','r*cq')+_0x2eabd8);subTitle+='\x0a['+TG_ID+_0x5d2e('‫208','K!a#')+_0x2eabd8;}else{if(_0x2facb4['vGhkr'](_0x5d2e('‫209','mN&v'),_0x2facb4[_0x5d2e('‮20a','#86I')])){console[_0x5d2e('‮137','XrU)')](e);}else{let _0x425854=JSON[_0x5d2e('‮20b','p^bp')](_0xabf1f7);if(_0x2facb4[_0x5d2e('‮20c','1[iQ')](_0x425854[_0x5d2e('‫178','W34A')],0xc8)){if(_0x2facb4[_0x5d2e('‫20d','B[&R')]('zZsPQ',_0x5d2e('‮20e','&upz'))){return{'url':'http://service.babydog.link/'+url,'headers':{'token':bbg_token,'appId':user_H,'Host':_0x41af83[_0x5d2e('‮20f','G#sr')],'Connection':_0x5d2e('‮210','K!a#'),'Accept-Encoding':_0x41af83['xWmkD'],'User-Agent':_0x41af83['AJXuQ']}};}else{console[_0x5d2e('‫12a','@4hH')]('\x0a['+TG_ID+_0x5d2e('‮211','*o@k')+_0x425854['msg']+_0x5d2e('‫71','3lkI'));return![];}}else{if(_0x2facb4['LLliU'](_0x2facb4['JsTFG'],_0x2facb4[_0x5d2e('‫212','W34A')])){console['log']('\x0a['+TG_ID+_0x5d2e('‮213','eSfA')+_0x425854[_0x5d2e('‮214','K!a#')]);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x425854[_0x5d2e('‮1a3','XrU)')];}else{console[_0x5d2e('‫a5','Mg1z')]('\x0a['+TG_ID+_0x5d2e('‮215','z%k&')+_0x425854[_0x5d2e('‮216','gU5v')]);subTitle+='\x0a['+TG_ID+_0x5d2e('‮217','WHng')+_0x425854[_0x5d2e('‮189','mN&v')];return![];}}}}}catch(_0x517583){console[_0x5d2e('‫1e','gU5v')](_0x517583);}finally{_0x4fdf88();}});});}function yyz_getip(){var _0x1d2318={'EEUYf':_0x5d2e('‮218','NxGo'),'Jbrgz':function(_0x1a701e,_0x169260){return _0x1a701e!==_0x169260;},'GHwOg':_0x5d2e('‮219','4)Ke'),'GOoKY':function(_0x53b79a,_0x3fab2b){return _0x53b79a===_0x3fab2b;},'QlkZH':_0x5d2e('‮21a','mq@6'),'ElXSu':_0x5d2e('‫21b','^pwZ'),'dFPfU':'sByMh','WYUTk':'pQBaI','ETmhu':_0x5d2e('‮21c','59Z6')};let _0x138261={'url':_0x1d2318[_0x5d2e('‫21d','1[iQ')]};return new Promise((_0x4d6fad,_0x16e7a1)=>{var _0x55a895={'wbxoj':_0x1d2318[_0x5d2e('‫21e','Mg1z')],'JNfwf':function(_0x526223,_0x480566){return _0x1d2318[_0x5d2e('‫21f','J*JX')](_0x526223,_0x480566);},'oXqzp':_0x5d2e('‫220','NxGo'),'nJqFR':_0x1d2318[_0x5d2e('‫221','59Z6')],'dkTLN':function(_0x8e702a,_0x3a5c51){return _0x1d2318['GOoKY'](_0x8e702a,_0x3a5c51);},'lrGKn':_0x1d2318[_0x5d2e('‫222','3lkI')],'gANdZ':_0x1d2318[_0x5d2e('‫223','59Z6')],'piJNM':_0x5d2e('‫224','[A1['),'PUWGX':_0x1d2318['dFPfU'],'iaPGS':function(_0x40650f){return _0x40650f();}};if('KBftq'!==_0x1d2318[_0x5d2e('‮225','KHH^')]){$[_0x5d2e('‫226','59Z6')](_0x138261,async(_0x4794ef,_0x3e864a,_0x257ce9)=>{if(_0x55a895[_0x5d2e('‮227','J*JX')](_0x55a895[_0x5d2e('‮228','k0Un')],_0x55a895[_0x5d2e('‮229','k0Un')])){try{if(_0x4794ef){if(_0x55a895[_0x5d2e('‮22a','0AP4')](_0x55a895[_0x5d2e('‫22b','*o@k')],_0x55a895['gANdZ'])){app_soy_bbg_data=process[_0x5d2e('‮22c','z%k&')][_0x5d2e('‫22d','h(]]')]['split']('\x0a');}else{IP_address=_0x55a895[_0x5d2e('‫22e','Mg1z')];}}else{if(_0x55a895['JNfwf'](_0x55a895[_0x5d2e('‫22f','k0Un')],_0x55a895[_0x5d2e('‮230','jG5Z')])){IP_address=_0x257ce9;}else{IP_address=_0x55a895['wbxoj'];console[_0x5d2e('‮231','^pwZ')](e,_0x3e864a);}}}catch(_0x5b1275){IP_address=_0x55a895[_0x5d2e('‮232','^pwZ')];console[_0x5d2e('‮233','&upz')](_0x5b1275,_0x3e864a);}finally{_0x55a895[_0x5d2e('‫234','$33w')](_0x4d6fad);}}else{console['log']('\x0a['+TG_ID+_0x5d2e('‮235','gjk)')+_0x4794ef);subTitle+='\x0a['+TG_ID+_0x5d2e('‮236','gU5v')+_0x4794ef;}});}else{console['log'](e,response);}});}function Format_time(_0x21fd2f){var _0x1c3682={'xFDED':function(_0x5c0d45,_0x3d3269){return _0x5c0d45*_0x3d3269;},'VxRap':function(_0x2fa98e,_0x5ee06e){return _0x2fa98e+_0x5ee06e;},'hhgBM':function(_0x128af7,_0x28d8b7){return _0x128af7<_0x28d8b7;},'OfPNR':function(_0x59a91b,_0x18174c){return _0x59a91b+_0x18174c;},'mgPwJ':function(_0x257693,_0x261e11){return _0x257693+_0x261e11;},'nexXz':function(_0x2d58aa,_0x2213f9){return _0x2d58aa+_0x2213f9;},'BGGxU':function(_0x225d4b,_0x152937){return _0x225d4b+_0x152937;}};var _0x30adb5=new Date(_0x1c3682['xFDED'](_0x21fd2f,0x3e8));var _0xf50b1f=_0x1c3682['VxRap'](_0x30adb5[_0x5d2e('‮237','[A1[')](),'-');var _0x4e04e5=(_0x1c3682['hhgBM'](_0x1c3682['VxRap'](_0x30adb5[_0x5d2e('‮238','y[@q')](),0x1),0xa)?_0x1c3682['VxRap']('0',_0x30adb5[_0x5d2e('‮239','oI!r')]()+0x1):_0x30adb5[_0x5d2e('‫23a','[aB$')]()+0x1)+'-';var _0x4e5b87=_0x1c3682[_0x5d2e('‫23b','oI!r')](_0x30adb5['getDate'](),'\x20');var _0x3ecdd2=_0x1c3682['OfPNR'](_0x30adb5[_0x5d2e('‮23c','NxGo')](),':');var _0x121516=_0x1c3682[_0x5d2e('‫23d','r*cq')](_0x1c3682[_0x5d2e('‮23e','J*JX')](_0x30adb5[_0x5d2e('‮23f','gjk)')](),0xa)?_0x1c3682[_0x5d2e('‫240','@xCT')]('0',_0x30adb5[_0x5d2e('‮241','@xCT')]()):_0x30adb5[_0x5d2e('‮23f','gjk)')](),':');var _0x2a268d=_0x30adb5[_0x5d2e('‫242','J*JX')]();let _0xe8e519=_0x1c3682[_0x5d2e('‫243','W34A')](_0x1c3682['mgPwJ'](_0x1c3682[_0x5d2e('‮244','*urV')](_0x1c3682[_0x5d2e('‮245','r*cq')](_0xf50b1f+_0x4e04e5,_0x4e5b87),_0x3ecdd2),_0x121516),_0x2a268d);return _0x1c3682[_0x5d2e('‫246','J*JX')](_0x1c3682['nexXz'](_0x1c3682[_0x5d2e('‫247','Lb3N')](_0x1c3682[_0x5d2e('‫248','gU5v')](_0xf50b1f+_0x4e04e5,_0x4e5b87),_0x3ecdd2),_0x121516),_0x2a268d);};_0xod5='jsjiami.com.v6';



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