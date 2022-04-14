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


const $ = new Env('【广告吧22/04/14_3】');
const notify = $.isNode() ? require('./sendNotify.js') : '';

const author = '作者TG_ID:@ls_soy';


var _0xodJ='jsjiami.com.v6',_0xodJ_=['‮_0xodJ'],_0x25ae=[_0xodJ,'w6MnDxTClA==','wpR4wozCosO5','wodCKBLCpHbDlgnDgHMOWk9B','FHwdWMOjbx8=','woIZN8KHJ8K+wqXDrMKMwoIK','wobCqGvDjGI=','wrvCnMKlVEgpwpY=','OQ9+wrLCkQ==','XFZOwojCgQ==','ZeevheWIg+OBmAQi57yK57ij6K+/5rGZ5aa66Le5','QeesmeWIquODqMOEw43nv4znuL/orqzmsJPlp7/otoo=','LsOpeyhp','w70FCCfClg==','DQTDocKp','akFb','6IS65p6u5oye56Wow4TCnMKT6LWD5Y6eIg==','w43nroLliJjjgqQTDeesgOWIiOaKm+WJoiw=','w6DChl8=','5o2c56eTFcKdJ+i0peWPpXo=','wrTDrGLCv8On','CAl+wpzChg==','fueuhOWLlOOAq0nDqw==','wrUAwrDCtsOw','fzQmwrFs','w6ELw7oNw6Y=','BS5rwr/CnA==','NknCvgPDpg==','w6bCjTs+wp0=','NMKJwo5iJA==','UsOnwr4+wojDksOb','CsOQUidL','XcKzw4rCmw==','bMKrw6rCg8Ke','cC80dkI=','NcKUwoN5Fg==','woBEbic8','wq8Ywoo=','SsK/w63CvMOv','YuinguefoOinuOmiieOCgsOiw7Pnv7vnuIborKDms7XlpqnotJk=','wrAHwoFUVw==','aRwewqtj','TcOhwqrDnQ==','wrdvwqbCnsOE','w6cCwqpMJw==','IcOaRyg=','wpwTMQ==','5o+n56SlVhzCjei3ouWOscK+','5q+M5rGd5pyh6IyC5Y+/5Yid57uc5Yy9','w71BwqXDoSU=','woTCkkzDkFE=','5q+/6I6r5Yyg5Yu2','BQZuwpg=','w6QKwqB1BsKmwrnCqMKa','TMOtwqk=','c+evgeWIguOBvDfDrQ==','ScOswqo3wpE=','w7jnr5LliIbjgqHChcKu','SUdQw6JTb8OWw5TDjsKwwp7Dqw==','WVdN','UCEeZFA=','PsObV0VYV3E0H8KAEsKSwogCwpzDoMKqZsOmL2PDvxhYNhrCsMKLw4Edw5o=','worChkHDhQ==','AcOaQT0RMHXDjj47wqPCuCzCpsK+w4hcVko=','WHTDhzHDsw==','wrl7wpTDqMOuw47DoMOGT8OMRgHDocOi','QsKhw7nCtcO+LsK1J8OGZsKfRMOqRMKgw5IZDkZBS3zCpsKBQcK6w7xZccOcJA==','wpcbNMONIMKiwrvDlsKbwodHw5VVwq4=','w75Uwp/DkkzCu3HCm8OJRwjCo8K1YwjDoMObJTE=','DQJ0wp7CisKF','FMO1dBxq','wqbDkTTCnVljwptz','wqvDj8K4w5HCtg==','wojDtWPDucOP','Jm7CumdV','wq0Ywpo=','wqPClgE=','J8OQYRl/wqTDr8Kt','YsOzwolnRBTDjcOLwqB8cMOVwpjDjMKHwq7DlxfDlQPDjVRswohfCw==','E0wX','woIlw6s=','wphPwqbCl8Oc','GsKAwoY6wo9Qw57DkCwm','wphAWjghw73Cp8O9XAPCpMOuIsKtw5NVAS5Nwr9vw5zCkRnDvMKCdW1vwpYgw4nDkxVYSAopw4loMcKZQsKgwoPCpG3DgsO+cClkfQgURcKWJxtyw47DrCU4BCvDk1MLwqbDgcK/wqMxN8OswonCiVbDuVrCncOFPcOsw73DtF5QbVhzXnRYTBxuVXPCkMK5GGXCrgI0bTLDrXszXsKQw7Iow5g5woBdI1QtwovCvsOYwrTCslcvHcKZdjPDt8O9RyzDqMKTOiPDgMOAd1Ecw4LDk8OIwqzClUfDk8Oew6kjflHDkMOkwp3DrDxLw7LDi3NYw5XChcKXd2jCpRfCih/CqsK1wqzDoXsGw4t7dQhiwqscZm0VLMKaBMOMXRV4w4LDmWTDkEc9FxrCpFTCoQxNJmtQI8O8w7LCl3U=','XMOswpjDuW8=','w4pVw6XnmZHlvKPlp6Xot7XDscOf6LyN5ZuIQg==','c8K0w67nm4PlvZPlp5fotorDiijov47lmI7CmA==','woLCvUHDtEo=','wqzDhyc=','w5NbwovDiQ==','wojCq2Ynwrk=','w4rDqMOq','G8Kcwogtwr4=','a8Kbw5PCgcKE','VcKYw6TClMOh','wp1uw6LCucOp','P8OQVQ==','5o+r56SYHMKrOOi0oOWNjcKR','VeetpuWJieOAu8K8POe8vee4ruiuleawnOWkn+i2mA==','dRIL','wpzCjmDnmqvlvaPlpLzot4ohw4BB','wrhcRw==','wp5Nw43nmYblvbblpYfot4vDiltW','w4VCNg==','M1HCpeeat+W+h+WnmOi0v2XDnMKB','woZUw6g=','fcK4w67nmKnlvrzlpoDotptfSSI=','QWgDdsOR','w7UFw6g9w64=','wpHDlmzCjsO1','DQh9','w7jnr5LliIbniIbmgr7jgp/CpMKF','5o6x56WdN8OUw5Pot4vljarDgw==','wq4Ewoo=','WMK5w5Yow50=','OMOtwqDCr8Kj','wpfCiE3DkWQ=','PcOnwpt3Uw==','w7rmiILkuZvli5Pkv57otoHDt8OwwqbDjEXorZToh5boopLlr4XoobPDkQ==','wo/DoXDCs8O7','Pw4Fwr9ow4M=','D2wwUsOf','wrHDrWE=','wr8AwqzCt8Oy','TsKzw53Cig==','fuaPteeNtuOBucK4w4A=','wrdywpLCo8O1','wr3DrcKl','wofmjYvnjL3jgJoFw50=','w5Qiw6U=','QMKCw4EEw48=','WXrDjybDtw==','w57CrEDDmEE=','woDCvUM=','wrXCnMKkZUcrwpPCig==','GgTDlsK4wqDCgHQ4','W8O9wqvDijs=','SBvDpMK/wqHCnnUtwpjCnBU8XgvDtGRmYsKyVsOBwoXDjWlSw53ChWAWw5QDRcOtKEbDlcKq','E2HDsw==','ZUrCocKJRQ==','AMOkwoDChsOZwoHDhMOb','NiJxwoHChw==','w5LDqMOoeWDCj8Oxwpo=','wpDDoSnCgG8=','wqDDh2TDtcOy','eg42wrZq','PMOCwoPCgsOC','KcKxw7Ppqb7oraroh7LmnobChmg=','w4TCqAk=','wp7CvUcg','CcO3Wz9r','c8Kkw4wzw5E=','A8OAw4Tms5Llh7/lp7rotZpywp/ovoblmY9n','woDCuCbmsLLlhJPlpIfotblHw63ovqHlmITDhA==','EsOEwqxwcA==','E8O1wp1iTQ==','BnbCoQDDlg==','cmh8wrXCoA==','wpNpwr/Ct8OC','w6EyPyvChA==','PcKVwoBf','MsOJw4PmsqDlhZzlpI3otpTCjWM=','772f6K2aZipSwoTDhcOl6K+c5aalwqpFw4vltbboo5bms5Llh4o=','M8OEQA==','DsKFEuayheWGgeWnvOi2pMOwQg==','QMKvw54=','LVE6RsOp','wqtlwobCr8Og','w4vDtMOq','5o2556ehQ2fDvOi0s+WNsMOa','w73opLHnn5zop5fporjjgZvDhMOP','wqd4woXCpcOp','wpfDln/CjcOW','w7USIjXChA==','wrktHsKTKQ==','wqMwPcK5DQ==','wrABwoBvZA==','EgRowpDCjsKZwqDChDwzw6jDgUzDscOG','ZHTChFV9w73DpQ==','w4vCiBU=','dmYE','IMOswovCocOZ','BgJuwqbCiMKEw60=','FA3Ds8K0woM=','b8KEw602w7A=','w41dIQXDkw==','BsOXVSjClA==','esKzw4jCusKk','QU5SwpXCtg==','B8Oxwr7CksK5','w6/DucOZeUo=','wocwwoN4dA==','OsOsRwp7','w55QGjXDhQ==','wodIw6g=','5o6D56aFH0Ag6Ler5Y22w6o=','wonku7Hku5Tkvqvmgr7jgITCvcOa','EHsdY8Oq','wqTCuHLDmmo=','w4pVw6Xpqqborrfot7LljKfDscOf6LyN5ZuIQg==','w6cPw43pqKrorqLotq/ljqjCkMOf6L6z5Zu+w6c=','w7zCiErDg28=','wpLDgcKQw5DCqQ==','DsOcwqPCmsOm','bTQCbUE=','X0vCsA==','IzJwwpjCuA==','wofCvFAxwrk=','5qyP5rCv5p+H6IyP5Y+Q5YuW57iN5Y+1','5o2H56WVw6gHW+i3suWMp8Or','w4Loprvnnanop4rpoY/jgKQww7TnrLE=','EXkNSw==','LMOOQnZBRnkjEw==','wp7CsMKFX2Y=','wqMOwrk=','DsKFEumroeivjOiHl+aercOwQg==','w4lWwpvDjhc=','w63DoEbCh8OV','wrsMFGHCqg==','WxQc5rO95YeO5aax6LWHTsK06L+65ZqzCw==','w6nCrxDmsILlhK3lpKXot74iMOi+jeWYjTA=','V01W','aAIK5pad6YS26ai/6K6+w7PDsw==','wrNvwpE=','KCJZ5pWa6YWJ6aqQ6K6tw4hC','a11b','wo4WBQ==','wrPDqBTkvKvnl6nljozlr6LCocKL5rGK5p605Y6S5a6W5Yyk5Lyv55eP','wpJbw77kvrvnlr/ljqHlrapDw7XmsZrmn5HljJblr57ljZDkvYXnlZE=','HGs3RcOieQ==','Amofb8Ot','K8OcQDTCsQ==','GXce','wq1GduS+nOeVq+WOtuWskcKFw5XovLjlmrfCgw==','KcKxw7Pkvo3nloPljonlrazChmjovK3lmIcH','OcOufiZM','YHxawrXCtQ==','SMO6wp06wpE=','ByxtwrzCpA==','QVxswrnCkQ==','FEvCvsKMaE0=','wpYQOcKMMQ==','KsOswp8=','wqnCnMK8dEd3','GX3DgSTDrMOR','RxMn','wqXCn0DDnUM=','JgjDrcKkwrg=','FcOIZA1k','wqPCvU49wq3CgUXCtMKew4XCjcOTeMKHOcKJwrjDoFfDrMKVfXnClsKGB2TCgMOgH3BewoTDiFYYw4/CjzNVwrREwrfDtMKfwrPDgMO/EFsgX8OIw6bDs17CrUXCn8KwKMOkJcKVw64TFcOqwqlhLj0Kw7PDsW8Rw6rCgSJPcxjCnjsiwrVoMcKhw7LDi8OAZllbW8KqHmgbwrgzwpbCti4vwpvDkcOVBR11w4URZAjCssKOE0rChcKUHBTCjUcow4JSwqLCsMOyw5cRw6RiXsKXw4XCs8Oew5fCp0jDqcOmag9QAznClWzClmTCgcOkXS/CjADCqyEjWGx4w7cCcFBSwopxYzrDpsKGw4IXFMOHwrcGKsKWasKswoV1wqLDrcKlwpsywr/DqcKgw6YpOHfDl8KyYMOAwojCh8KoOh/DhMOHQBUgw7TDqMOnVEA=','wrMYwp5J','wqTCqmwCwos=','NeOAhuS/vOiBjOaNleenluOAuu+9nOmomOitpeiHkuadjsOSwobCluWlj+i1ocKa6K+q5Yu65L2o5pWf6ISJ5pyq5Li75LuW5oSp5YeY5a2k','wqnClsKdVU0=','w4pmwp3Drw0=','WxQc5L2q55Wq5Y+h5a6kTsK06L+65ZqzCw==','woDCuCbkvqXnlrfljZflrppHw63ovqHlmITDhA==','AuOBheS8rOiApeaPpuemvOODge++jumrruism+iHteaficKkLiLlpbXotrvDs+isseWKm+S/iuaVhuiHnuafhOS6iuS4r+aHvuWHu+Wutio=','TlHDsQLDhg==','w6cOwrdZEw==','NMKwwrdDPQ==','aiVb5L2O55aI5Y6l5a6AwqRZ','77yi6IaU5p+i5bWK5q2l5bue5L+Q55eY','VW9Q5L2f55Se5Y+n5ayWwq5C','w6RrwqLkvJbnlqzljpjlrJEucw==','GGse','GMKBE+S8tueUluWNo+WuncOFKA==','wqonwprCnsOa','woI7wopESg==','HlozcsOL','woVGw6LCkQ==','44CX77y05pyW5aG+5Yeb55m45bu25Y6s6YWbDh5EdcKTwpnCnMOsWcOBwrbCt8KJ','ZMKRw7bCgsKQ','AWIsWsOs','wpRgShUG','KsKAwrFKGQ==','w6vCjEzDvWVtZjI=','w540w7Ykw6vCl8KjfA==','G8KJwrY4wro=','wrrClsKjXEYkworChw==','E8OuwqfCusOEwp3DmMOP','VmoMeMOl','dHdAwqnCsg==','bzAEbV/DqMKlw6AHwqk=','wpcZIsKuKsK5wqLDi8KQwp8=','CQ7DscKfwrfCinUxwpjDkg==','JcO2wp9dcg==','wpNIw4TCs8Op','J2jChUpR','TMKEw4sVw74=','UFBEwpnCsA==','wrdvwrjCqcOpw54=','w6HmiZnkuoLli4TkvILotblpwp4jesOgPsK3AkldwpjDtOitqeiGnOihpOWvl+ihrmU=','NsO1wpjCqMK3w6k=','GTZowpDCmsOawqjChTEcwrbDhUPDmsKrwrLCk8OEw5fCsMKtwqnDj1PCsFfCosOewqbDpUDCmA==','WkzCo8KbPF9rBMO8wofDoMO0cMKJO8Kxw7pPw6k6w5/CvMK8PgBewq7ClC4YSjjDkSfCm1Fiw5nCkcO2wr8DwrF7','D8Oxwrchw4bDksOSBBpxf1DDjmo=','T8OqwqrDimPClcOc','J8ODfC5a','wpcuwpPCh8OR','wptGw7vCnA==','Rm7CjcKETQ==','SsOOwpY2wqA=','JGsNXsOE','GMKewrBOPw==','wrYwAXnCrg==','CMO3WR9q','E0rCvAHDrsKMSsOywqrCgMKgw7oSw4MCw4BfNHUWSwvDgMKjw4V7w5rCsMO2AcOAw4oVwpzDosO1f8KqwoLDmMKaRMKMEhM5IDl+DsKGSsKZN8OSwocPHwEvASo0wrdDw4hKH28ffih5w4jCk0tbwpTCkW3DusO2wql7w5ZVQMKbDDPDqsKzw7plWxDCtcOHJsOCNGUcHmBxw4fCjxbCl392w7Ynw6LCpsKmcjciF381w74vw4dowpHDqsKJw6TDr8O0w7fCljTCocOQYkTDkMKBNsOzwpkqcsKzwp7DgMOIwoM1w78Qw6UxwqXDkMKBdcOgwpDDmx4iwoDCp3Y+w5zDtBRoP0JGUsOxMcOwWm7DrMOMQcK3KsKofMOuKsOGw6tjXMKswp5Ww4wWcsOwZHBxwq53w5bDucOPTkVhCxrDjcOFFMO8TsK9','YMOGwpTDlkE=','wo1uw4XCgMOI','wpnChkwxwqc=','acOKwocbwrs=','w4kCw7Qzw5Y=','Lm/CjA==','SsKiw4fCtsOzKA==','TxsRQ3k=','FRN2wqjCiw==','wr0Ewr/CoMOzwqnDnirCrMKVwrs=','WFfCvsKF','IcOxeABO','XToWck8=','w4fDoFLCmcOVZg==','aBwFwr91','wqoZwrfCt8OjwrPDvwDCu8KY','w6wQBz/Cig==','wq7CusKgX1k=','MMOxwoF5','woLCvVM=','5oyN56a4K8O3wrLotJDljqtd','BwXDocKpwqo=','fuS7kOS5nuS/m+aAnOODmkVo57+u57qO6K2m5rCF5aes6LSV','5o+J56WHQcO1K+i3mOWPjMOt','wo5kwr7ChcOq','wrTDsUjCtcO7Uw==','w7IBwrM=','dUFFSjvDuRgrw7BPGUo=','QWDCgcKodw==','O8KXwqgLwpo=','wrTDg1E=','5o2456SLfEzCpui0s+WNjUg=','w43nroLliJjniIPmgKjjgLxEGOS5geWnlOW2oOeugOWLiQ==','5o6V56aBHmQT6LSk5Y6sw58=','wrxBRDQ1','f+evuOWLpueJseaDkuOCnRjDguS4m+Wln+W3oueusuWJrA==','IsKhwqkjwrI=','YcOhwrbDj18=','Wmwc','wogVAOayueWHgeWmoOi3o8OoSQ==','M1bCoQ==','wp3Colg9wrU=','w5tBPQjDvw==','w4TCuhopwrk=','wphpw4fCncOb','w5fjgpLkvZrog5/mjY/npIzjgY3vvafpqYHorrToh4Dmn4jCpMOow7vlppTotbgE6K2t5YiA5L2K5paI6ISu5p295Lig5LiQ5oSj5YSr5a+8wqE=','wrN9woLCpcOl','wr0Ewq7CqMO2wqPDiQ==','w5fjg6PkvovogJTmj7nnpbDjg6/vv7XpqIDor4Xoh5Xmnp/Dvi5T5aSf6LWuHOiuiuWKhuS+o+aVqeiFueafo+S4g+S4r+aElOWHpOWvjsKA','XsKzw4DCsMKvBcKQwoPDo8KzworCtA==','wrBBVg==','THnDmRbDosKLSRnDsMOFwrwD','w4LDtcO7','w4o+w7s2w6PCnsK1SzchO1Y=','w6QfwqlDAg==','UnEN','wrLDmznCj1Fqwo1EwoQAwpbCoQ==','w41fJw==','w4fDuknCtcOGc8K5R3Q4wqdx','YTsURU7DicK2','IcOtwp4=','S8Ogwrg=','D8OVwrfCocK6','wocXFA==','w4lawpTDuQTDrj3DtcKbBlTCpg==','XFZOwojCgcO8GQ==','wrvDnWHDnsOI','N8ONdStE','RcKDw4I=','6ISS5p255o6g56SaG8Krw73otrLljpXDug==','QeesmeWIquODqMOEw43nr6Pli5PmiYvli47CsA==','NsOFQ0xJ','w4XDr0LCmMOS','wocGwrzCksOl','ZSYX','w5TDtMO0VFjCmsO2wqLCgsO8XcOm','w4lFwoHDjxc=','w5ZQwoPDgRfDoQ==','KsK/w7Nvw4nohqvmnpLmiILooKUifR7ljrzkurLmlIHploDvvZo=','V21Iw5Jz','KcO0Sh1Y','KiXDlcKPwoo=','wqzDhxjCnX4=','K8OpwprCqMKww61OwofCggJiwqUywrg=','wpZ5d2A=','MsKVwoM=','w58SHWzjgZ3lh6DDpg==','w7XkuIXotIbljqbjgZzCrMO7w68=','w4zDhXrCv8Og','GMOkwrQ=','OOW8uOWknOODu+esqlA=','RMKyw53CisKw','wqnDlkTDgsOM','FcOywoLCvsO4','5oy+56eoGXnDrOi3i+WPk8K7','w4DCtQovwqk=','UuaNtOeOtOOBkcOJLue/j+e7s+isi+ayjuWmoui3lw==','5oy756SdwqLDmcKy6LSJ5Y6+w50=','LMOVVyxG','HsOLYw==','wqBxw47ChMO4','woLDohbCsnk=','wrzjgZTohZDmnbHmjK7npJXjgq3vvabmrZ7oh7rmnpPljbDog67pnLTpvLznj5Xlobnotps=','OOOAqOS+i+iDruaPlueliuOBle+9p+moieisvOiHlOaeq0zCuAPlp7XotrFN6K2q5Yqq5L2B5paq6IeH5p2i5LmE5LqL5oeR5YW55a+nLQ==','HsObwp7Cs8Oo','w7/CjFbDlERsZjPCojs=','woDCs1kx','U3nDhw==','w5fjgpLohJzmn7bmjY/npIzjgY3vvafmrqnoha/mn7bljI7ogIrpn7LpvKPnjIrlo57ot7k=','XUtfw6d5asOD','w5IrJDg=','RUFwQTU=','wpMRwoBISA==','fj4SR1o=','SHfDiT0=','w589w60Gw7Y=','K1bCoxrCrcKJRcK5w7rDlg==','Yl8YwqF2wpsZw7cqwrzCmB4=','ck09WMOT','w7caw4Mew6k=','a1fCucKZXg==','wp/CgMKOVUE=','EMOPwrnCtsKn','5o++56a0w6PClSvot4DljZjDkA==','w47ku7jkuo7kvrXmgq7jg7wewrvnv7rnuLforYrmsrHlpaHot64=','5o6O56eAw4kXXui3reWOiGg=','G8OKYCXCiw==','U8Kww7vCqsOy','TcKNw5EA','PsOQXAh0','w5orLQ==','HHYdT8O+','DeS7tuS4g+S8juaCp+OBs8OIw7zCjcOYw5PDuEjmmoLnpazvvI0=','wrFOVDA=','AcO4wrbCgMOCwobDjMOT','QMOnwq3Dk2jCh8OCwpU=','w7jCjBbkv6npoKLvvpQ=','FsOFcCE=','wp5Uw6rChsO2QS/Ckg==','5o+i56SCw7rDhivotZbljrNd','w4FfNQTDsw==','w4LkuZPku5jkv63mgrHjgKQww7QXw4wOOOaahuenm++/mg==','wqjCgMKyY0AkwpjCgA==','dxQPwrNowp9Wwqg=','woZIw6HCkcOm','wpbCg38VwrU=','wpPCt8K6V3g=','JsOMwrvChsKY','wo1Lw6DCm8Ot','R8OgwqrDnX4=','wojkuJvku6vkvoDmg6TjgITCgEg=','woPCoVM=','w5IPLhrCkA==','wrTCmWzDpWQ=','PsO/wrjCtcO6','w4TCiCwPwqI=','JsOubWNc','WMOmwp3DvVI=','McOwwo1mGBbDkcOcwrYeNsKOw5/CkMOWw6rCkA0=','w7fDi1/DlX5cZiPCtCfDp1rCmAM8wrnDkFTDogDCmUpqOiZ5an0jBg==','wpgZw4/Dlg/DqCvDjMKQFU3DpcOufwnCtsOeNw==','w7zCnlDDqkI=','Un9NwovCtg==','wrbDkG/Cl8ON','G8Krwq0gwqU=','dkFPYQ==','J3bCnB7DsA==','w4fCrlbDgU8=','Y0BK','RldTwrLCnsOUHcKWwrfDnGPDrQ==','w5TDq8OhYks=','wr1lwrvCt8On','woPDhDHCu0E=','NsO7wqLCmcOc','wrlARw==','woMmw5bmlrbphYLpqLforY3ClQE=','RMKfw4I=','wpJbw77mlrTphZjpqYzora1Dw7U=','woDCj08=','wohew4LChcO1','w5LDj8OXc1g=','Y8K/w67ClsKb','5oyf56Wbw7PDqcK66Lem5Y2bWQ==','wqYPwrrCocOv','DuaNnueNvuOCqTzDhue/vue4rOivv+axmOWnoei2nQ==','OsORVgh1','w6PmjqfnjZ3jgKwZVue+v+e4rOiujOawtOWnlui0gg==','w6XCjQY/wp8=','IW/Cj1s=','LFnCvkx1','wohTwqHCl8OO','a09Idio=','wplCw7/CmMO+TCw=','T8K+w64=','5o6O56Sfw6tFwq/ot4blj5zDvQ==','w6HmjaTnj7Djg4EMLQ==','wo8KBQ==','BsKdwoctwqg=','5o6P56a8w7vDqsO+6Laq5Y+Vw4I=','ZOaNk+eNmOOAhQ1D','L3PCjA==','W1bCs8KOfg==','wprmj6XnjZ3jgrdZwqk=','HcOod1FI','WcOswoPDvEA=','OVc0R8OI','NsO1wonCq8K2w6lRwovCthg=','LMODRkJUG3clAsK8FcOawow4wp3DqMO+','H8KcwpA8','RMKrw6DCqQ==','bXZ2fwg=','w78Lw6chw4U=','WsK+w7TCq8KO','wrbDnHjDiMOr','5oyg56WGe8OObui3seWMoMKf','wosXBmnCpg==','ZeevheWIg+eLv+aAv+OAk2HDn+e9mee7h+itvOaynuWlvOi3sQ==','wpMcLUbCrg==','wrZowoLCtsO+woHCo8KARsOAClnDq8OnXcOTM0LDsTjCoW7DusOSQBhP','wrYYG8KFIA==','w4pUwp/DlQY=','w68qwqFlAA==','wrvDg1LDlQ==','GSJ+wrbCiA==','FMOjUitv','A8OBSwrCgw==','KcOUVA==','VeetpuWJieeKnOaCh+OAjVbDkuS6qOWlt+W3nOevg+WJvg==','b0BYcDo=','fueuhOWLlOeKjOaBsuODmkVo','GcO4wrQ=','5oyT56WNw4AQDui1kOWMmcOQ','N8KUwoBfCw==','MkrCoQ==','w4Alwo9bAw==','w51mwp3Drho=','OMO4V2FI','w5U+w6U=','cBMIwr1+','Ceikrueeruimp+mgpuOBsQ5R57yZ57qE6K2h5rGa5aed6LaM','wojCkMKSWEM=','VGVqYxg=','w43CgwATwrk=','wrAfwoxWRlnCncKZHBg=','w5MTIQDDrHDCmFLDnXVNWFc=','wrXDvCvCnVI=','L8OEVF0=','wojDqMO0eBDCnsO4wpzClcOuBsOpw61ww68=','jtpPsgMjYHiamkYbi.comdP.vU6u=='];if(function(_0x60ce60,_0x9391fd,_0x35ed2d){function _0x415af8(_0x13eb60,_0xd635bc,_0x302268,_0x4eb3d8,_0x27372a,_0x43a0eb){_0xd635bc=_0xd635bc>>0x8,_0x27372a='po';var _0x5a925='shift',_0xda5f0b='push',_0x43a0eb='‮';if(_0xd635bc<_0x13eb60){while(--_0x13eb60){_0x4eb3d8=_0x60ce60[_0x5a925]();if(_0xd635bc===_0x13eb60&&_0x43a0eb==='‮'&&_0x43a0eb['length']===0x1){_0xd635bc=_0x4eb3d8,_0x302268=_0x60ce60[_0x27372a+'p']();}else if(_0xd635bc&&_0x302268['replace'](/[tpPgMYHkYbdPUu=]/g,'')===_0xd635bc){_0x60ce60[_0xda5f0b](_0x4eb3d8);}}_0x60ce60[_0xda5f0b](_0x60ce60[_0x5a925]());}return 0xdef42;};return _0x415af8(++_0x9391fd,_0x35ed2d)>>_0x9391fd^_0x35ed2d;}(_0x25ae,0x122,0x12200),_0x25ae){_0xodJ_=_0x25ae['length']^0x122;};function _0x269b(_0x157c10,_0x5b1308){_0x157c10=~~'0x'['concat'](_0x157c10['slice'](0x1));var _0x2b489b=_0x25ae[_0x157c10];if(_0x269b['afONCo']===undefined){(function(){var _0x32ee78=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x21e055='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x32ee78['atob']||(_0x32ee78['atob']=function(_0x49ac90){var _0x47bbdc=String(_0x49ac90)['replace'](/=+$/,'');for(var _0xf0e570=0x0,_0x5dbe8a,_0x968ce8,_0xe2f8d9=0x0,_0x4a5629='';_0x968ce8=_0x47bbdc['charAt'](_0xe2f8d9++);~_0x968ce8&&(_0x5dbe8a=_0xf0e570%0x4?_0x5dbe8a*0x40+_0x968ce8:_0x968ce8,_0xf0e570++%0x4)?_0x4a5629+=String['fromCharCode'](0xff&_0x5dbe8a>>(-0x2*_0xf0e570&0x6)):0x0){_0x968ce8=_0x21e055['indexOf'](_0x968ce8);}return _0x4a5629;});}());function _0x18dd8a(_0x39d18c,_0x5b1308){var _0x571ed8=[],_0x515af2=0x0,_0x324c9b,_0x1e563c='',_0x3c9631='';_0x39d18c=atob(_0x39d18c);for(var _0x72950d=0x0,_0x437b9f=_0x39d18c['length'];_0x72950d<_0x437b9f;_0x72950d++){_0x3c9631+='%'+('00'+_0x39d18c['charCodeAt'](_0x72950d)['toString'](0x10))['slice'](-0x2);}_0x39d18c=decodeURIComponent(_0x3c9631);for(var _0x39f994=0x0;_0x39f994<0x100;_0x39f994++){_0x571ed8[_0x39f994]=_0x39f994;}for(_0x39f994=0x0;_0x39f994<0x100;_0x39f994++){_0x515af2=(_0x515af2+_0x571ed8[_0x39f994]+_0x5b1308['charCodeAt'](_0x39f994%_0x5b1308['length']))%0x100;_0x324c9b=_0x571ed8[_0x39f994];_0x571ed8[_0x39f994]=_0x571ed8[_0x515af2];_0x571ed8[_0x515af2]=_0x324c9b;}_0x39f994=0x0;_0x515af2=0x0;for(var _0x212cbb=0x0;_0x212cbb<_0x39d18c['length'];_0x212cbb++){_0x39f994=(_0x39f994+0x1)%0x100;_0x515af2=(_0x515af2+_0x571ed8[_0x39f994])%0x100;_0x324c9b=_0x571ed8[_0x39f994];_0x571ed8[_0x39f994]=_0x571ed8[_0x515af2];_0x571ed8[_0x515af2]=_0x324c9b;_0x1e563c+=String['fromCharCode'](_0x39d18c['charCodeAt'](_0x212cbb)^_0x571ed8[(_0x571ed8[_0x39f994]+_0x571ed8[_0x515af2])%0x100]);}return _0x1e563c;}_0x269b['DzAHFb']=_0x18dd8a;_0x269b['WoFOuw']={};_0x269b['afONCo']=!![];}var _0x15a476=_0x269b['WoFOuw'][_0x157c10];if(_0x15a476===undefined){if(_0x269b['SaloFa']===undefined){_0x269b['SaloFa']=!![];}_0x2b489b=_0x269b['DzAHFb'](_0x2b489b,_0x5b1308);_0x269b['WoFOuw'][_0x157c10]=_0x2b489b;}else{_0x2b489b=_0x15a476;}return _0x2b489b;};try{CryptoJs=$[_0x269b('‮0','Y[u2')]()?require('crypto-js'):'';}catch(_0x3bb405){throw new Error(_0x269b('‫1',']BHl'));}try{os=$[_0x269b('‮2','I6]C')]()?require('os'):'';}catch(_0x532b97){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,ggb_UA,app_soy_ggb_data,ggb_token,subTitle,user_index,yyz_d=![];let appid=_0x269b('‮3',')1kJ'),serverUrl=_0x269b('‫4','bW2O'),yyz_UA='Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/97.0.4692.99\x20Safari/537.36\x20Edg/97.0.1072.76';!(async()=>{var _0x3fd0d4={'rNJmC':_0x269b('‮5','P]bO'),'UofRy':_0x269b('‫6','lOI9'),'IesBV':function(_0x3e0940,_0x58cfd2){return _0x3e0940==_0x58cfd2;},'qaigs':'eth','ZTMbt':_0x269b('‮7','%MuH'),'sIwNp':_0x269b('‫8','g(yj'),'GNacO':function(_0xa67b13,_0x590a8f){return _0xa67b13(_0x590a8f);},'ttlQu':_0x269b('‮9',']BHl'),'PxHCg':function(_0xd7a21e){return _0xd7a21e();},'TdKCJ':'sXVCq','MRJkb':function(_0x6581f1,_0x4ae5f3){return _0x6581f1===_0x4ae5f3;},'efrbk':_0x269b('‮a','bW2O'),'OoxwY':_0x269b('‮b','P]bO'),'ytQmz':_0x269b('‮c','z5OI'),'sNHiD':_0x269b('‫d','I5os'),'PSafi':function(_0x3cad7f,_0x1224ee){return _0x3cad7f>_0x1224ee;},'rvFbz':'cqWnw','qzrrs':function(_0x3ccde1,_0x3d51e3){return _0x3ccde1===_0x3d51e3;},'HgbVr':_0x269b('‮e','yTA8'),'YeRAZ':_0x269b('‫f','%MuH'),'lOyTf':function(_0x3b7fe7,_0x108239){return _0x3b7fe7+_0x108239;},'DNPCX':function(_0x6bfdf5,_0x3c6611){return _0x6bfdf5*_0x3c6611;},'msXMH':function(_0x1ba1b4,_0x5149fc){return _0x1ba1b4*_0x5149fc;},'xPJUA':_0x269b('‫10','[d%*'),'mHDNy':function(_0x4aa182,_0x1c192e){return _0x4aa182+_0x1c192e;},'ZJYjK':_0x269b('‫11','lOI9'),'ayQLS':'Qynos','KVApg':function(_0x11a9a6,_0x110def){return _0x11a9a6!==_0x110def;},'GjKVA':_0x269b('‮12',']BHl'),'CVVbO':_0x269b('‫13','OE6I'),'jPMAC':_0x269b('‫14','P]bO'),'SxAfi':_0x269b('‮15','cFTq')};console[_0x269b('‮16','$F6q')]('\x0a【soy脚本文件免责声明】：\x0a【本仓库发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的，，否则后果自负】\x0a【不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断】\x0a【本脚本文件，禁止任何公众号、论坛、群体以及任何形式的转载、发布,否则后果自负】\x0a【本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害】\x0a【直接或间接使用脚本的任何用户，包括但不限于代挂或其他某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责】\x0a【如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本】\x0a【任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明】');if($[_0x269b('‫17','MScY')]()){var _0x10b804=_0x3fd0d4[_0x269b('‫18','x#l0')](require,'fs'),_0x35de0c=require(_0x3fd0d4[_0x269b('‫19',')1kJ')]);function _0x169e05(){var _0x1c1bee='';var _0x55d875=_0x10b804[_0x269b('‫1a','g(yj')]('/sys/class/net/');_0x55d875['forEach'](function(_0x319090){var _0x4c87d7=_0x35de0c[_0x269b('‮1b','bW2O')](_0x3fd0d4[_0x269b('‮1c','I0hY')],_0x319090,_0x3fd0d4[_0x269b('‮1d','x#l0')]);if(_0x3fd0d4['IesBV'](_0x319090[_0x269b('‫1e','rr9W')](0x0,0x3),_0x3fd0d4[_0x269b('‮1f','K%ZH')])&&_0x10b804[_0x269b('‮20','g(yj')](_0x4c87d7)){if(_0x3fd0d4[_0x269b('‫21','zuVq')]!==_0x3fd0d4[_0x269b('‫22','OUHI')]){_0x1c1bee=_0x10b804['readFileSync'](_0x4c87d7)['toString']()[_0x269b('‫23','gsms')]();}else{console[_0x269b('‫24','OE6I')]('\x0a【'+Tips+_0x269b('‮25','u9K3')+$[_0x269b('‮26','w(9b')]+_0x269b('‫27','I5os'));subTitle+='\x0a【'+Tips+_0x269b('‫28','K%ZH')+$['index']+'\x20个人信息】:\x20网络请求失败';}};});return _0x1c1bee;};mac=_0x3fd0d4[_0x269b('‫29','Y[u2')](_0x169e05);let _0x2a932a=$[_0x269b('‮2a','u9K3')]()?process[_0x269b('‫2b','#B*X')][_0x269b('‫2c','bTjx')]:'';if(!_0x2a932a){if(_0x269b('‮2d','bW2O')!==_0x3fd0d4[_0x269b('‮2e','k9*I')]){console[_0x269b('‮2f','OHcP')]('\x0a【'+Tips+_0x269b('‮30','0sW4')+$['index']+_0x269b('‮31','2SaC'));subTitle+='\x0a【'+Tips+_0x269b('‮32','%MuH')+$[_0x269b('‫33',')*^N')]+_0x269b('‫34','I6]C');}else{console['log']('\x0a【'+$['name']+'】：未填写相应变量\x20soy_yyz_data');return!![];}}else{if(_0x3fd0d4[_0x269b('‫35','k9*I')](_0x3fd0d4['efrbk'],_0x3fd0d4[_0x269b('‮36','lOI9')])){console[_0x269b('‮2f','OHcP')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x269b('‫37','eNJa')]);subTitle+='\x0a['+TG_ID+_0x269b('‮38',')*^N')+result[_0x269b('‫39','[d%*')];yyz_d=![];}else{TG_ID=_0x2a932a[_0x269b('‫3a','OE6I')]('&')[0x0];yyz_Kami=_0x2a932a[_0x269b('‫3b','0sW4')]('&')[0x1];try{Tips=author[_0x269b('‮3c','mV8Z')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x3f04df){if(_0x3fd0d4['ytQmz']===_0x3fd0d4[_0x269b('‫3d',']BHl')]){console['log'](e);}else{throw new Error(_0x269b('‫3e','u9K3'));}}try{YZ=author[_0x269b('‫3f','Y[u2')](/作者TG_ID:(\S*)/)[0x1][_0x269b('‫40','g(yj')](/_/g,'><');}catch(_0x2d334f){throw new Error(_0x269b('‫41','OUHI'));}}};if(process['env'][_0x269b('‫42','$uqJ')]&&process[_0x269b('‮43',')*^N')][_0x269b('‫44','4jPb')]['indexOf']('\x0a')>-0x1){app_soy_ggb_data=process[_0x269b('‫45','YKm^')][_0x269b('‫46','cFTq')][_0x269b('‫47','#B*X')]('\x0a');}else if(process[_0x269b('‫48','eNJa')][_0x269b('‫49','e1JS')]&&process[_0x269b('‮4a','0sW4')][_0x269b('‫4b','rr9W')][_0x269b('‮4c','x#l0')]('#')>-0x1){app_soy_ggb_data=process[_0x269b('‮4d','gsms')]['soy_ggb_data']['split']('#');}else if(process[_0x269b('‮4e','lOI9')]['soy_ggb_data']&&_0x3fd0d4[_0x269b('‫4f','I6]C')](process[_0x269b('‫50','yTA8')][_0x269b('‫51','QZxr')][_0x269b('‫52','yiI9')]('@'),-0x1)){if(_0x3fd0d4['MRJkb'](_0x269b('‮53','OHcP'),_0x3fd0d4[_0x269b('‮54','%MuH')])){app_soy_ggb_data=process['env'][_0x269b('‫44','4jPb')]['split']('@');}else{console[_0x269b('‫55','AWs(')]('\x0a【'+Tips+_0x269b('‮56','x#l0')+$['index']+_0x269b('‮57',')1kJ'));subTitle+='\x0a【'+Tips+_0x269b('‮30','0sW4')+$[_0x269b('‮58','e%Xh')]+_0x269b('‮57',')1kJ');}}else{if(_0x3fd0d4[_0x269b('‫59','rr9W')](_0x3fd0d4[_0x269b('‮5a','g(yj')],_0x3fd0d4['YeRAZ'])){user_index=result[_0x269b('‮5b','x#l0')];yyz_d=!![];}else{app_soy_ggb_data=process['env'][_0x269b('‮5c','YKm^')][_0x269b('‫5d','QZxr')]();}};user_num=app_soy_ggb_data[_0x269b('‮5e','QZxr')];console['log'](_0x269b('‮5f','P]bO')+new Date(_0x3fd0d4[_0x269b('‮60','!4pY')](_0x3fd0d4[_0x269b('‮61','%MuH')](new Date()['getTime'](),_0x3fd0d4[_0x269b('‫62','w(9b')](new Date()['getTimezoneOffset'](),0x3c)*0x3e8),_0x3fd0d4[_0x269b('‫63','e1JS')](0x8*0x3c,0x3c)*0x3e8))[_0x269b('‮64','I6]C')]()+_0x269b('‮65','zuVq'));await _0x3fd0d4['PxHCg'](yyz_login);console[_0x269b('‮66','I5os')](_0x269b('‮67',')*^N')+user_num+_0x269b('‫68',')*^N'));subTitle='';for(i=0x0;i<user_num;i++){let _0x53e3b4=app_soy_ggb_data[i]['split']('&');ggb_token=_0x53e3b4[0x1];ggb_num=_0x53e3b4[0x0];ggb_UA=_0x53e3b4[0x2];if(!ggb_UA){ggb_UA=_0x3fd0d4[_0x269b('‫69','rr9W')];}$['index']=_0x3fd0d4['mHDNy'](i,0x1);console[_0x269b('‫6a','1C7l')](_0x269b('‫6b','bW2O')+$[_0x269b('‮6c','$uqJ')]+'\x20个账号任务】');if(yyz_d){if(_0x3fd0d4[_0x269b('‮6d','OHcP')](_0x3fd0d4['ZJYjK'],_0x3fd0d4[_0x269b('‫6e','1C7l')])){console['log']('\x0a【'+Tips+_0x269b('‮6f','OE6I')+$[_0x269b('‮70','mV8Z')]+_0x269b('‫71','7Wc)'));subTitle+='\x0a【'+Tips+_0x269b('‮72',']BHl')+$[_0x269b('‮73','%MuH')]+'\x20提现】:\x20网络请求失败';}else{await implement();}}else{console[_0x269b('‮74','7Wc)')]('\x0a【脚本提示】：验证不通关,可能服务器原因,如需办理删号退款找@ls_soy');}};}else{if(_0x3fd0d4[_0x269b('‮75',']BHl')](_0x3fd0d4['GjKVA'],_0x3fd0d4[_0x269b('‫76','e1JS')])){console[_0x269b('‫6a','1C7l')](_0x269b('‫77','zuVq'));return;}else{throw new Error(_0x269b('‫78','bW2O'));}}if(notify){if(_0x3fd0d4[_0x269b('‮79','1C7l')]!==_0x3fd0d4['SxAfi']){if(subTitle){await notify[_0x269b('‫7a','KR7O')]($[_0x269b('‮7b','OE6I')],subTitle);}}else{console[_0x269b('‮7c','4jPb')](_0x269b('‮7d','u9K3'));return;}}})()['catch'](_0x261c33=>$['logErr'](_0x261c33))[_0x269b('‮7e','!4pY')](()=>$[_0x269b('‮7f','zuVq')]());async function implement(){var _0x5d6e3b={'CoLTw':function(_0x2c400f){return _0x2c400f();},'Pfmuk':function(_0x553e5c,_0x4578ac){return _0x553e5c<_0x4578ac;},'vkbgl':function(_0x8844ae,_0x519ef9){return _0x8844ae(_0x519ef9);},'jnYlS':function(_0x3fef2b,_0x2b7398){return _0x3fef2b*_0x2b7398;},'jVniR':function(_0x3f4fd7,_0x2c9974){return _0x3f4fd7+_0x2c9974;},'rBOnC':function(_0x393ee6,_0x330a53){return _0x393ee6-_0x330a53;}};await _0x5d6e3b[_0x269b('‮80','bTjx')](ggb_index);for(let _0x30286c=0x2;_0x5d6e3b[_0x269b('‫81','(Ia8')](_0x30286c,ggb_num);_0x30286c++){await _0x5d6e3b[_0x269b('‫82','x#l0')](get_money,_0x30286c);await $[_0x269b('‫83','4jPb')](Math[_0x269b('‮84','cFTq')](_0x5d6e3b['jnYlS'](Math['random'](),_0x5d6e3b['jVniR'](_0x5d6e3b['rBOnC'](0xbb8,0x3e8),0x3e8))+0x3e8));}}function ggb_index(){var _0x29e4c4={'ERFis':function(_0x21581e,_0x2e78b3){return _0x21581e==_0x2e78b3;},'NKAwm':function(_0xa67be0,_0x2e208f){return _0xa67be0>_0x2e208f;},'YonrX':function(_0x5d57a1,_0x274679){return _0x5d57a1(_0x274679);},'BsYDh':function(_0x1d29ef,_0x525b9a){return _0x1d29ef/_0x525b9a;},'OIoqt':function(_0x2aab44,_0x55417a){return _0x2aab44!==_0x55417a;},'sJuRp':function(_0x335e7d){return _0x335e7d();},'gNBxh':function(_0x2148f5,_0x18abb0,_0x37b730){return _0x2148f5(_0x18abb0,_0x37b730);}};let _0x1c4adb=_0x29e4c4['gNBxh'](Post_request,_0x269b('‮85','[d%*'),_0x269b('‮86','K%ZH'));return new Promise((_0x20d282,_0x2a449e)=>{var _0x4c2f1d={'NuJUF':function(_0x7d36ce,_0x288e20){return _0x29e4c4[_0x269b('‫87','eNJa')](_0x7d36ce,_0x288e20);},'xQKAt':function(_0x1e0395,_0x1165ce){return _0x29e4c4[_0x269b('‫88','cFTq')](_0x1e0395,_0x1165ce);},'NDmFQ':function(_0x1875e5,_0x3c4ab3){return _0x29e4c4[_0x269b('‮89','bW2O')](_0x1875e5,_0x3c4ab3);},'yJmAK':function(_0x2ca7e8,_0x3dc1da){return _0x29e4c4[_0x269b('‫8a','OUHI')](_0x2ca7e8,_0x3dc1da);},'btsag':function(_0x14818a,_0xb5f679){return _0x14818a*_0xb5f679;},'dKdGn':function(_0x2cf501,_0xdc4a2){return _0x29e4c4[_0x269b('‮8b','I6]C')](_0x2cf501,_0xdc4a2);},'YeDPM':'yThor','JtkGQ':function(_0x5a5a25){return _0x29e4c4['sJuRp'](_0x5a5a25);}};$['post'](_0x1c4adb,async(_0x54c20a,_0x393570,_0x483eb6)=>{try{if(_0x54c20a){console[_0x269b('‮7c','4jPb')]('\x0a【'+Tips+_0x269b('‮8c','lOI9')+$['index']+_0x269b('‫8d','OE6I'));subTitle+='\x0a【'+Tips+_0x269b('‫8e','I5os')+$[_0x269b('‮8f','7Wc)')]+'\x20个人信息】:\x20网络请求失败';}else{let _0x329578=JSON[_0x269b('‮90','MScY')](_0x483eb6);if(_0x4c2f1d['NuJUF'](_0x329578['code'],0x1)){money=_0x329578[_0x269b('‫91','AWs(')]['userinfo'][_0x269b('‫92','I0hY')];console[_0x269b('‮93','zuVq')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‮94','z5OI')]+_0x269b('‮95','$uqJ')+_0x329578[_0x269b('‫96',')*^N')][_0x269b('‫97','1C7l')][_0x269b('‮98','lOI9')]+_0x269b('‮99','OHcP')+_0x329578[_0x269b('‫9a','7Wc)')][_0x269b('‫9b',']BHl')]['money']);subTitle+='\x0a【'+Tips+_0x269b('‮9c','bW2O')+$[_0x269b('‮9d','0sW4')]+_0x269b('‫9e','yTA8')+_0x329578['data'][_0x269b('‫9f','OUHI')][_0x269b('‮a0','K%ZH')]+'\x20\x20\x20余额：'+_0x329578['data']['userinfo'][_0x269b('‮a1',']BHl')];if(_0x4c2f1d[_0x269b('‫a2','OE6I')](money,0x2)){await _0x4c2f1d[_0x269b('‮a3','OUHI')](withdraw,_0x4c2f1d[_0x269b('‮a4','I6]C')](Math[_0x269b('‮a5',']BHl')](_0x4c2f1d['btsag'](money,0x64)),0x64));}}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫a6','lOI9')]+_0x269b('‫a7','0sW4')+_0x329578[_0x269b('‮a8','OE6I')]);}}}catch(_0x1b3ad5){if(_0x4c2f1d[_0x269b('‫a9','zuVq')](_0x4c2f1d['YeDPM'],_0x4c2f1d[_0x269b('‮aa','2SaC')])){console['log'](_0x1b3ad5);}else{console[_0x269b('‫55','AWs(')](_0x1b3ad5,_0x393570);}}finally{_0x4c2f1d[_0x269b('‮ab','1C7l')](_0x20d282);}});});}function withdraw(_0x45bff0){var _0xd7b145={'fBPQp':function(_0x12efeb,_0x6fb708){return _0x12efeb===_0x6fb708;},'pwhZH':'sxpvu','kRiMR':function(_0x22572c,_0x313854){return _0x22572c!==_0x313854;},'MolLo':_0x269b('‫ac','mV8Z'),'tXNhu':_0x269b('‮ad','e%Xh'),'vhSET':function(_0x100176,_0xd1907e,_0x5ec4b7){return _0x100176(_0xd1907e,_0x5ec4b7);}};let _0x1b7c40=_0xd7b145[_0x269b('‮ae','lOI9')](Post_request,_0x269b('‮af','gsms'),_0x269b('‫b0','KR7O')+_0x45bff0+_0x269b('‫b1','QZxr'));return new Promise((_0x2e811b,_0x11fcc6)=>{var _0x215213={'ySZvr':function(_0x492d9c,_0x5aacda){return _0xd7b145['fBPQp'](_0x492d9c,_0x5aacda);},'KGnqE':_0xd7b145[_0x269b('‮b2','KR7O')],'cyMqj':function(_0x4951a2,_0x2124d0){return _0x4951a2!==_0x2124d0;},'Bpqkw':_0x269b('‮b3','yiI9'),'uTZxg':'IMTzs','LVhuN':function(_0x49f29b,_0x1a8b19){return _0x49f29b==_0x1a8b19;},'nYUrm':function(_0x25da34,_0x4701d7){return _0xd7b145[_0x269b('‫b4','u9K3')](_0x25da34,_0x4701d7);},'VOWQC':_0xd7b145['MolLo'],'BCPxy':_0xd7b145[_0x269b('‫b5','k9*I')]};$[_0x269b('‮b6','bTjx')](_0x1b7c40,async(_0x54a275,_0x37d267,_0x256a29)=>{if(_0x215213[_0x269b('‮b7','[d%*')](_0x215213[_0x269b('‮b8','KR7O')],'ekmoF')){app_soy_ggb_data=process[_0x269b('‮b9','bTjx')][_0x269b('‫ba','yiI9')][_0x269b('‮bb','YKm^')]('@');}else{try{if(_0x215213[_0x269b('‮bc','Y[u2')](_0x215213[_0x269b('‫bd','e1JS')],_0x215213[_0x269b('‮be','1C7l')])){console[_0x269b('‫bf',')*^N')]('\x0a['+TG_ID+_0x269b('‫c0','Y[u2')+result[_0x269b('‫c1','AWs(')]);subTitle+='\x0a['+TG_ID+_0x269b('‫c2','g(yj')+result[_0x269b('‮c3','2SaC')];}else{if(_0x54a275){if(_0x215213[_0x269b('‫c4',']BHl')](_0x215213[_0x269b('‫c5','YKm^')],_0x269b('‫c6','$uqJ'))){console['log']('\x0a【'+Tips+_0x269b('‮c7','g(yj')+$[_0x269b('‫c8','g(yj')]+_0x269b('‮c9','lOI9'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫ca','I0hY')]+_0x269b('‫cb','(Ia8');}else{console['log'](e,_0x37d267);}}else{let _0x314d5a=JSON['parse'](_0x256a29);if(_0x215213[_0x269b('‮cc','mV8Z')](_0x314d5a[_0x269b('‫cd','$F6q')],0x1)){if(_0x215213[_0x269b('‮ce','$F6q')](_0x215213[_0x269b('‫cf','Y[u2')],_0x215213['VOWQC'])){YZ=author[_0x269b('‫d0','bTjx')](/作者TG_ID:(\S*)/)[0x1][_0x269b('‮d1',']BHl')](/_/g,'><');}else{console[_0x269b('‮d2','MScY')]('\x0a【'+Tips+_0x269b('‮d3','[d%*')+$['index']+_0x269b('‮d4','e1JS')+_0x314d5a[_0x269b('‫d5','yTA8')]);subTitle+='\x0a【'+Tips+_0x269b('‮6f','OE6I')+$[_0x269b('‫d6','k9*I')]+'\x20提现】:\x20'+_0x314d5a['msg'];}}else{console[_0x269b('‮16','$F6q')]('\x0a【'+Tips+_0x269b('‮d7','I6]C')+$['index']+_0x269b('‫d8','gsms')+_0x314d5a[_0x269b('‮d9','$F6q')]);subTitle+='\x0a【'+Tips+_0x269b('‮8c','lOI9')+$[_0x269b('‫da','bW2O')]+_0x269b('‫db','QZxr')+_0x314d5a['msg'];}}}}catch(_0x176c05){if(_0x215213[_0x269b('‮b7','[d%*')](_0x215213[_0x269b('‫dc','e%Xh')],_0x215213['BCPxy'])){console['log'](_0x176c05,_0x37d267);}else{console['log'](_0x176c05,_0x37d267);}}finally{_0x2e811b();}}});});}function getSignInf(){var _0x2e3369={'FZeHA':function(_0xded7b0,_0x3e4be7){return _0xded7b0===_0x3e4be7;},'npNxT':_0x269b('‫dd','lOI9'),'qeOJp':function(_0x2f5bf6,_0x2fbbf1){return _0x2f5bf6!==_0x2fbbf1;},'CDDzi':_0x269b('‮de','z5OI'),'xEdOv':function(_0x522f6c,_0x54b394){return _0x522f6c==_0x54b394;},'QXabQ':_0x269b('‫df','I6]C'),'JRcHp':'hCfTT','WJJqu':function(_0x8165b,_0x219f13){return _0x8165b!==_0x219f13;},'gSpHy':'bTVGb','irZyD':function(_0x9bc76a){return _0x9bc76a();},'lXnQz':function(_0x2e7ea4,_0x616297,_0x4e4c03){return _0x2e7ea4(_0x616297,_0x4e4c03);}};let _0x33f309=_0x2e3369['lXnQz'](Post_request,_0x269b('‫e0','e%Xh'),''+user_index);return new Promise((_0x3eefc6,_0x1b37d6)=>{$[_0x269b('‮e1','k9*I')](_0x33f309,async(_0xac9eae,_0x189b11,_0x2a5f0e)=>{var _0x46207a={'FdMfc':_0x269b('‮e2','MScY'),'suKGJ':'ggb.culink.vip'};if(_0x269b('‮e3','bTjx')==='kXJjJ'){try{if(_0x2e3369[_0x269b('‫e4','cFTq')](_0x269b('‮e5','$uqJ'),_0x2e3369[_0x269b('‮e6','OHcP')])){if(_0xac9eae){console[_0x269b('‮2f','OHcP')]('\x0a【'+Tips+_0x269b('‮e7','6CJy')+$[_0x269b('‮e8','yTA8')]+_0x269b('‫e9','%MuH'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫a6','lOI9')]+'\x20签到状态】:\x20网络请求失败';}else{if(_0x2e3369[_0x269b('‫ea','yTA8')](_0x2e3369['CDDzi'],_0x2e3369['CDDzi'])){return{'url':_0x269b('‮eb','Y[u2')+url,'headers':{'user-agent':'Dart/2.16\x20(dart:io)','content-type':'application/json;\x20charset=utf-8','accept-encoding':_0x46207a[_0x269b('‮ec','6CJy')],'content-length':0x0,'token':ggb_token,'host':_0x46207a['suKGJ']}};}else{let _0x145bcc=JSON[_0x269b('‫ed','QZxr')](_0x2a5f0e);if(_0x2e3369[_0x269b('‮ee','#B*X')](_0x145bcc[_0x269b('‮ef','OHcP')],0x1)){if(_0x2e3369[_0x269b('‫f0',')1kJ')](_0x145bcc['data'][_0x2e3369[_0x269b('‫f1','%MuH')]],0x0)){if(_0x2e3369[_0x269b('‮f2','7Wc)')](_0x2e3369['JRcHp'],_0x2e3369['JRcHp'])){console[_0x269b('‮16','$F6q')](e);}else{await sign();}}else{console[_0x269b('‫f3','%MuH')]('\x0a【'+Tips+_0x269b('‫28','K%ZH')+$['index']+_0x269b('‫f4','z5OI'));subTitle+='\x0a【'+Tips+_0x269b('‮30','0sW4')+$[_0x269b('‮f5','bTjx')]+'\x20签到状态】:\x20今天已签到';}}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‮26','w(9b')]+_0x269b('‫f6','I5os')+_0x145bcc[_0x269b('‫f7','1C7l')]);subTitle+='\x0a【'+Tips+_0x269b('‫f8','(Ia8')+$[_0x269b('‮f9','I5os')]+'\x20签到状态】:\x20'+_0x145bcc[_0x269b('‫d5','yTA8')];}}}}else{console[_0x269b('‫fa','[d%*')](e,_0x189b11);}}catch(_0x45dc9a){if(_0x2e3369[_0x269b('‫fb','#B*X')](_0x2e3369[_0x269b('‫fc','QZxr')],_0x2e3369[_0x269b('‮fd','e%Xh')])){_0x3eefc6();}else{console['log'](_0x45dc9a,_0x189b11);}}finally{_0x2e3369['irZyD'](_0x3eefc6);}}else{console[_0x269b('‫fe','cFTq')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‮ff','K%ZH')]+_0x269b('‮100','AWs('));}});});}function sign(){var _0x42a986={'Jdzdt':_0x269b('‫101','OUHI'),'cWcGL':_0x269b('‮102','bTjx'),'KABzh':function(_0x4b289f,_0x4b3cd6){return _0x4b289f==_0x4b3cd6;},'zanrg':'wvFHG','XZxdb':function(_0x1d186e){return _0x1d186e();},'tHkMd':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','dXnYh':function(_0x37088a,_0x1c38aa,_0x39dc17){return _0x37088a(_0x1c38aa,_0x39dc17);}};let _0x283111=_0x42a986[_0x269b('‮103','mV8Z')](Post_request,_0x269b('‮104','(Ia8'),_0x269b('‮105','0sW4'));return new Promise((_0x57e85,_0xff9e6a)=>{var _0x470eb4={'BhGUm':_0x42a986[_0x269b('‮106','e1JS')]};$[_0x269b('‮107','e%Xh')](_0x283111,async(_0x75ca2,_0x1a20ca,_0x4244aa)=>{var _0x44a40e={'rOdFA':'eth','kTCyK':_0x269b('‮108','YKm^')};try{if(_0x75ca2){if(_0x269b('‫109','zuVq')!==_0x42a986[_0x269b('‮10a','Y[u2')]){var _0x45acd9={'CmoDA':_0x269b('‫10b','0sW4'),'XhdKo':_0x269b('‫10c','z5OI'),'cbPRL':_0x44a40e['rOdFA']};var _0x2e98cd='';var _0x32010d=fs[_0x269b('‮10d','6CJy')](_0x44a40e[_0x269b('‮10e','2SaC')]);_0x32010d[_0x269b('‮10f','OUHI')](function(_0x244e57){var _0x138d02=path['join'](_0x45acd9['CmoDA'],_0x244e57,_0x45acd9[_0x269b('‫110',')1kJ')]);if(_0x244e57['substr'](0x0,0x3)==_0x45acd9['cbPRL']&&fs['existsSync'](_0x138d02)){_0x2e98cd=fs['readFileSync'](_0x138d02)['toString']()['trim']();};});return _0x2e98cd;}else{console['log']('\x0a【'+Tips+_0x269b('‮9c','bW2O')+$[_0x269b('‫111','yiI9')]+_0x269b('‮112','%MuH'));subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫33',')*^N')]+_0x269b('‮113',')1kJ');}}else{if(_0x269b('‫114','%MuH')===_0x42a986['cWcGL']){ggb_UA=_0x470eb4['BhGUm'];}else{let _0x35a97b=JSON['parse'](_0x4244aa);if(_0x42a986[_0x269b('‮115','zuVq')](_0x35a97b[_0x269b('‫116','w(9b')],0x1)){console[_0x269b('‮117','bTjx')]('\x0a【'+Tips+_0x269b('‮118','P]bO')+$[_0x269b('‮e8','yTA8')]+'\x20签到】:\x20签到成功~');subTitle+='\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x269b('‫119','2SaC');}else{console[_0x269b('‫11a','KR7O')]('\x0a【'+Tips+_0x269b('‫11b','KR7O')+$[_0x269b('‫11c','u9K3')]+'\x20签到】:\x20'+_0x35a97b['msg']);subTitle+='\x0a【'+Tips+_0x269b('‮d7','I6]C')+$[_0x269b('‫11d',')1kJ')]+_0x269b('‮11e','I5os')+_0x35a97b['msg'];}}}}catch(_0x3ac4e2){if(_0x42a986[_0x269b('‮11f','g(yj')]===_0x269b('‫120','K%ZH')){_0x57e85();}else{console[_0x269b('‫24','OE6I')](_0x3ac4e2,_0x1a20ca);}}finally{_0x42a986[_0x269b('‫121','cFTq')](_0x57e85);}});});}function get_money(_0x2708b8){var _0x2c6f09={'AwSlV':_0x269b('‮122',')1kJ'),'JfxFJ':function(_0x12aa5e,_0x532465){return _0x12aa5e!==_0x532465;},'xxSPB':_0x269b('‫123','[d%*'),'pmofQ':function(_0x5051a4,_0x565432){return _0x5051a4==_0x565432;},'isPXI':_0x269b('‫124','mV8Z'),'GtHGF':_0x269b('‫125','I5os'),'XtnDf':function(_0x43e957){return _0x43e957();},'Okanu':function(_0x196f1e,_0x2a718a,_0x4218f8){return _0x196f1e(_0x2a718a,_0x4218f8);}};let _0x483865=user_index[_0x269b('‮126','P]bO')](/替换/g,_0x2708b8);let _0x35e393=_0x2c6f09[_0x269b('‫127','%MuH')](Post_request,'shake/brush_get_money',_0x483865);return new Promise((_0xb043c5,_0x1b34bc)=>{$[_0x269b('‮128','$uqJ')](_0x35e393,async(_0x3d421b,_0x143a9a,_0x5538c9)=>{if(_0x2c6f09[_0x269b('‫129','$uqJ')]!=='vozpb'){try{if(_0x2c6f09['JfxFJ'](_0x269b('‫12a','x#l0'),_0x269b('‮12b','I5os'))){if(_0x3d421b){if(_0x269b('‫12c',')*^N')!==_0x2c6f09['xxSPB']){console[_0x269b('‫12d','(Ia8')]('\x0a【'+Tips+_0x269b('‫11b','KR7O')+$[_0x269b('‮12e','MScY')]+_0x269b('‫12f','$F6q'));}else{app_soy_ggb_data=process[_0x269b('‫45','YKm^')]['soy_ggb_data'][_0x269b('‫130','(Ia8')]('#');}}else{let _0x323974=JSON[_0x269b('‫131','K%ZH')](_0x5538c9);if(_0x2c6f09['pmofQ'](_0x323974[_0x269b('‫132','lOI9')],0x1)){if(_0x2c6f09['isPXI']===_0x2c6f09[_0x269b('‮133','Y[u2')]){if(_0x2c6f09[_0x269b('‫134','#B*X')](_0x323974[_0x269b('‮135','%MuH')],null)){console[_0x269b('‫136','6CJy')]('\x0a【'+Tips+_0x269b('‫137','eNJa')+$['index']+'\x20观看视频】:\x20第'+_0x2708b8+_0x269b('‮138','2SaC'));}else{if('jsjXW'===_0x2c6f09[_0x269b('‫139','QZxr')]){console[_0x269b('‫fe','cFTq')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‮13a','2SaC')]+'\x20观看视频】:\x20第'+_0x2708b8+_0x269b('‫13b','Y[u2')+_0x323974[_0x269b('‮13c',')1kJ')][_0x269b('‫13d','#B*X')]+'红包');}else{console[_0x269b('‮13e','P]bO')]('\x0a【'+Tips+_0x269b('‮30','0sW4')+$[_0x269b('‫11d',')1kJ')]+_0x269b('‮13f','I0hY')+_0x323974['msg']);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫140','P]bO')]+_0x269b('‫141','OHcP')+_0x323974[_0x269b('‫f7','1C7l')];}}}else{macs=fs[_0x269b('‫142','!4pY')](fn)['toString']()['trim']();}}else{console[_0x269b('‮143','yiI9')]('\x0a【'+Tips+_0x269b('‮6f','OE6I')+$[_0x269b('‮12e','MScY')]+'\x20观看视频】:\x20'+_0x323974['msg']);}}}else{console[_0x269b('‮143','yiI9')](e,_0x143a9a);}}catch(_0x3b578c){console['log'](_0x3b578c,_0x143a9a);}finally{_0x2c6f09[_0x269b('‮144','x#l0')](_0xb043c5);}}else{_0xb043c5();}});});}function Get_request(_0x9f8a1c){var _0x419881={'gbgxv':_0x269b('‫145','e%Xh'),'lzMOQ':_0x269b('‫146','2SaC')};return{'url':'https://ggb.culink.vip/api/'+_0x9f8a1c,'headers':{'user-agent':_0x269b('‫147','%MuH'),'content-type':_0x419881[_0x269b('‮148','4jPb')],'accept-encoding':_0x419881['lzMOQ'],'content-length':0x0,'token':ggb_token,'host':_0x269b('‫149','Y[u2')}};};function Post_request(_0x572a47,_0x493be0){var _0x40ea90={'SqAsk':_0x269b('‮14a','MScY'),'KLtKl':'gzip','GJFqg':_0x269b('‮14b','6CJy')};return{'url':'https://ggb.culink.vip/api/'+_0x572a47,'headers':{'user-agent':_0x269b('‫14c','QZxr'),'Content-Type':_0x40ea90['SqAsk'],'accept-encoding':_0x40ea90['KLtKl'],'content-length':_0x493be0[_0x269b('‮14d',')1kJ')],'token':ggb_token,'host':_0x40ea90[_0x269b('‮14e','I0hY')]},'body':_0x493be0};};function formatDate(){var _0x3f336c={'vrgxH':function(_0x19c25c,_0x1be214){return _0x19c25c<_0x1be214;},'zMzOP':function(_0x3fe62e,_0x8c391d){return _0x3fe62e+_0x8c391d;}};let _0x50f726=new Date();let _0x377699=_0x50f726['getFullYear']();let _0x426ce9=_0x50f726[_0x269b('‮14f','e1JS')]()+0x1;let _0x2a5761=_0x50f726['getDate']();_0x426ce9=_0x3f336c['vrgxH'](_0x426ce9,0xa)?'0'+_0x426ce9:_0x426ce9;_0x2a5761=_0x2a5761<0xa?_0x3f336c[_0x269b('‮150','23fp')]('0',_0x2a5761):_0x2a5761;return _0x377699+'/'+_0x426ce9+'/'+_0x2a5761;};async function yyz_login(){var _0x9a2797={'rbVAi':_0x269b('‫151','OHcP'),'oAiAc':function(_0x25c15d,_0x401d57){return _0x25c15d==_0x401d57;},'fyRsx':function(_0x453daf,_0x163707){return _0x453daf(_0x163707);},'FGjnL':function(_0x6909db,_0x1a66f0){return _0x6909db===_0x1a66f0;},'vwxGq':function(_0x16968e,_0x1ff336){return _0x16968e!==_0x1ff336;},'LTjTj':_0x269b('‫152','$F6q'),'jNKrl':function(_0x3bde8e){return _0x3bde8e();},'mKyKo':function(_0x58e9da,_0x40d22f){return _0x58e9da/_0x40d22f;},'uCVWx':function(_0x37bba0,_0xbf802){return _0x37bba0+_0xbf802;},'FSPQQ':'&sign='};var _0x5aeebc=Math['floor'](_0x9a2797['mKyKo'](Date[_0x269b('‫153','(Ia8')](),0x3e8));var _0x34703c=CryptoJs[_0x269b('‮154','OE6I')](''+TG_ID+mac+os['hostname']()+YZ)[_0x269b('‮155','I0hY')]();var _0x1aa502='account='+TG_ID+_0x269b('‫156','gsms')+_0x34703c+_0x269b('‫157','yiI9')+_0x5aeebc;var _0x5adf79=CryptoJs[_0x269b('‮158','g(yj')](_0x1aa502+'&'+appid)['toString']();_0x1aa502=_0x9a2797['uCVWx'](_0x1aa502,_0x9a2797[_0x269b('‫159','Y[u2')])+_0x5adf79;let _0x4607e0={'url':serverUrl+_0x269b('‮15a','k9*I'),'headers':{'user-agent':_0x269b('‮15b',')*^N')},'body':_0x1aa502};return new Promise((_0x174378,_0x5d8c16)=>{$['post'](_0x4607e0,async(_0x5d7f65,_0x998bb8,_0x3b91db)=>{try{if(_0x9a2797[_0x269b('‫15c','lOI9')]===_0x9a2797['rbVAi']){if(_0x5d7f65){console[_0x269b('‫f3','%MuH')]('\x0a['+TG_ID+_0x269b('‮15d','#B*X')+_0x5d7f65);subTitle+='\x0a['+TG_ID+_0x269b('‮15e','lOI9')+_0x5d7f65;}else{let _0x402f9d=JSON['parse'](_0x3b91db);if(_0x9a2797[_0x269b('‫15f','2SaC')](_0x402f9d['code'],0xc8)){let _0x2eb315=_0x9a2797['fyRsx'](Format_time,_0x402f9d[_0x269b('‫160','e1JS')][_0x269b('‫161','QZxr')]['vip']);console[_0x269b('‮117','bTjx')]('\x0a['+TG_ID+']:\x20登录成功:\x20VIP到期时间\x20'+_0x2eb315);await _0x9a2797[_0x269b('‫162','OE6I')](get_vip,_0x402f9d[_0x269b('‮163','YKm^')][_0x269b('‫164','k9*I')]);}else if(_0x402f9d['code']==0x71){if(_0x9a2797[_0x269b('‫165','$uqJ')](_0x269b('‫166','MScY'),_0x269b('‫167',']BHl'))){await yyz_user_reg();}else{console[_0x269b('‫168','I0hY')]('\x0a【'+Tips+_0x269b('‫169','!4pY')+$[_0x269b('‫ca','I0hY')]+'\x20签到】:\x20网络请求失败');subTitle+='\x0a【'+Tips+_0x269b('‮d7','I6]C')+$[_0x269b('‮26','w(9b')]+_0x269b('‫16a','z5OI');}}else{console[_0x269b('‫16b','K%ZH')](_0x3b91db);console['log']('\x0a['+TG_ID+_0x269b('‫16c','e1JS')+_0x402f9d[_0x269b('‮16d',')*^N')]);subTitle+='\x0a['+TG_ID+_0x269b('‮16e','(Ia8')+_0x402f9d[_0x269b('‫16f','0sW4')];yyz_d=![];}}}else{console['log'](_0x3b91db);console['log']('\x0a['+TG_ID+_0x269b('‫170','w(9b')+result[_0x269b('‮171',']BHl')]);subTitle+='\x0a['+TG_ID+_0x269b('‫172','P]bO')+result[_0x269b('‮c3','2SaC')];yyz_d=![];}}catch(_0x434ee2){console[_0x269b('‫24','OE6I')](_0x434ee2);}finally{if(_0x9a2797[_0x269b('‮173','eNJa')](_0x9a2797[_0x269b('‫174','cFTq')],_0x9a2797[_0x269b('‫175','u9K3')])){console[_0x269b('‮176',')1kJ')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x269b('‮177','OHcP')+result['msg']);subTitle+='\x0a【'+Tips+_0x269b('‫178',')1kJ')+$[_0x269b('‮94','z5OI')]+_0x269b('‮177','OHcP')+result[_0x269b('‫179','(Ia8')];}else{_0x9a2797['jNKrl'](_0x174378);}}});});}async function yyz_user_reg(){var _0x287a2d={'ZHiRf':_0x269b('‮17a','AWs('),'TvdLb':function(_0x410774,_0x4141ad){return _0x410774===_0x4141ad;},'gKsVT':_0x269b('‫17b','I6]C'),'Wvuvz':function(_0x907969,_0x1a78e4){return _0x907969==_0x1a78e4;},'GPVXY':'MhgqR','csZnl':function(_0x346753,_0x7bd606){return _0x346753===_0x7bd606;},'XIClo':_0x269b('‮17c','2SaC'),'qCbqg':_0x269b('‮17d','gsms'),'JTyWI':function(_0x129aed){return _0x129aed();},'QUiPY':_0x269b('‮17e','6CJy'),'xkREM':function(_0x220302){return _0x220302();},'NfluR':_0x269b('‮17f','u9K3'),'HIPpi':'GLCkP','wNFwP':'ztIxY','RExhK':function(_0x1aedf3,_0x50d62f){return _0x1aedf3/_0x50d62f;},'WrvbC':function(_0x57ec82,_0x35bb29){return _0x57ec82+_0x35bb29;},'WEkxy':function(_0x48cbbb,_0x480007){return _0x48cbbb+_0x480007;},'yngFp':_0x269b('‫180','K%ZH')};if(!Tips&&!YZ){if(_0x287a2d['csZnl'](_0x287a2d['wNFwP'],_0x269b('‮181','z5OI'))){console[_0x269b('‫182','u9K3')]('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容');return![];}else{let _0x5840f2=JSON[_0x269b('‫183','g(yj')](data);if(_0x5840f2[_0x269b('‮184','$uqJ')]==0x1){console[_0x269b('‮143','yiI9')]('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫ca','I0hY')]+_0x269b('‫185','[d%*')+_0x5840f2[_0x269b('‮16d',')*^N')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫186','Y[u2')]+'\x20提现】:\x20'+_0x5840f2[_0x269b('‮171',']BHl')];}else{console[_0x269b('‫187','23fp')]('\x0a【'+Tips+'提示---账号\x20'+$['index']+_0x269b('‫188','YKm^')+_0x5840f2[_0x269b('‫189','cFTq')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫18a','AWs(')]+'\x20提现】:\x20'+_0x5840f2[_0x269b('‮d9','$F6q')];}}}var _0x4ef60b=Math[_0x269b('‫18b','4jPb')](_0x287a2d[_0x269b('‮18c','KR7O')](Date[_0x269b('‮18d','OE6I')](),0x3e8));var _0x175ceb=CryptoJs['MD5'](''+TG_ID+mac+os[_0x269b('‮18e','OUHI')]()+YZ)[_0x269b('‫18f','w(9b')]();var _0x8da308=_0x269b('‫190','lOI9')+TG_ID+_0x269b('‫191','w(9b')+_0x175ceb+'&t='+_0x4ef60b;var _0x34d274=CryptoJs[_0x269b('‫192','[d%*')](_0x287a2d[_0x269b('‫193','bW2O')](_0x8da308,'&')+appid)[_0x269b('‫194','1C7l')]();_0x8da308=_0x287a2d[_0x269b('‫195',')1kJ')](_0x8da308,_0x287a2d['yngFp'])+_0x34d274;let _0x4699c9={'url':serverUrl+_0x269b('‮196','YKm^'),'headers':{'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'},'body':_0x8da308};return new Promise((_0x13773f,_0x1a6761)=>{var _0x37753e={'VGDdG':_0x287a2d[_0x269b('‫197','e1JS')],'wigCS':function(_0x413642){return _0x287a2d[_0x269b('‮198','OHcP')](_0x413642);}};if(_0x287a2d[_0x269b('‮199','K%ZH')](_0x287a2d['NfluR'],_0x287a2d[_0x269b('‮19a','1C7l')])){console[_0x269b('‫24','OE6I')]('\x0a['+TG_ID+_0x269b('‮19b','1C7l')+result[_0x269b('‮19c','mV8Z')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+result['msg'];}else{$[_0x269b('‮19d','OE6I')](_0x4699c9,async(_0x455110,_0x55ff7d,_0x55d82e)=>{var _0x5836c5={'MuIqO':'\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a'};try{if(_0x455110){if(_0x287a2d[_0x269b('‫19e','I0hY')]===_0x287a2d[_0x269b('‮19f','AWs(')]){console[_0x269b('‮117','bTjx')]('\x0a['+TG_ID+_0x269b('‫1a0','I5os')+_0x455110);subTitle+='\x0a['+TG_ID+_0x269b('‫1a1','u9K3')+_0x455110;}else{throw new Error(_0x37753e[_0x269b('‫1a2','gsms')]);}}else{if(_0x287a2d['TvdLb'](_0x287a2d['gKsVT'],'gkvhp')){let _0x26f096=JSON['parse'](_0x55d82e);if(_0x287a2d[_0x269b('‫1a3','gsms')](_0x26f096['code'],0xc8)){if(_0x269b('‫1a4','[d%*')!==_0x287a2d[_0x269b('‫1a5','yiI9')]){await yyz_login();}else{throw new Error(_0x5836c5[_0x269b('‫1a6','Y[u2')]);}}else if(_0x287a2d[_0x269b('‮1a7','zuVq')](_0x26f096[_0x269b('‮1a8','I5os')],0x75)){console[_0x269b('‫fe','cFTq')]('\x0a['+TG_ID+_0x269b('‫1a9','k9*I')+_0x26f096[_0x269b('‮163','YKm^')]+_0x269b('‫1aa','I0hY'));yyz_d=![];}else{console[_0x269b('‮1ab','e%Xh')]('\x0a['+TG_ID+_0x269b('‮1ac','I0hY')+_0x26f096[_0x269b('‮1ad','$uqJ')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x26f096['msg'];yyz_d=![];}}else{_0x37753e['wigCS'](_0x13773f);}}}catch(_0x442943){if(_0x287a2d['csZnl'](_0x287a2d[_0x269b('‮1ae','z5OI')],_0x269b('‫1af','Y[u2'))){console[_0x269b('‫1b0','YKm^')]('\x0a【'+Tips+_0x269b('‫1b1','mV8Z')+$[_0x269b('‮6c','$uqJ')]+_0x269b('‮1b2','OUHI')+result['msg']);}else{console[_0x269b('‫11a','KR7O')](_0x442943);}}finally{if(_0x287a2d['qCbqg']===_0x269b('‮1b3','Y[u2')){_0x287a2d[_0x269b('‮1b4','u9K3')](_0x13773f);}else{app_soy_ggb_data=process['env']['soy_ggb_data'][_0x269b('‮bb','YKm^')]();}}});}});}async function get_vip(_0x15ad7b){var _0xadc8bb={'zfvxQ':function(_0x39f2a0,_0x4f9f2b){return _0x39f2a0==_0x4f9f2b;},'FhHWG':_0x269b('‮1b5','zuVq'),'elpdX':'wakSr','tsQhg':_0x269b('‫1b6','6CJy'),'WoqUl':_0x269b('‫1b7','6CJy'),'skghJ':function(_0x588e02,_0x46a54f){return _0x588e02!==_0x46a54f;},'tvxxO':'XzwMq','XwhUj':function(_0x5bf208){return _0x5bf208();},'HbTru':function(_0x2f0e13,_0x30a216){return _0x2f0e13===_0x30a216;},'DGnEW':'PmCqH','svmRG':function(_0x72ee4e,_0x246007){return _0x72ee4e/_0x246007;},'TgXSr':function(_0x1550b3,_0x120c0e){return _0x1550b3+_0x120c0e;},'UsXYy':function(_0x45846a,_0x15366f){return _0x45846a+_0x15366f;},'pKvXU':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0xf7e230=Math['floor'](_0xadc8bb[_0x269b('‮1b8','(Ia8')](Date['now'](),0x3e8));var _0x333332=_0x269b('‫1b9',')1kJ')+user_num+_0x269b('‫1ba','$F6q')+_0x15ad7b+_0x269b('‮1bb','2SaC')+_0xf7e230;var _0x12a719=CryptoJs[_0x269b('‫1bc','!4pY')](_0xadc8bb[_0x269b('‮1bd','1C7l')](_0x333332+'&',appid))['toString']();_0x333332=_0xadc8bb['UsXYy'](_0x333332+'&sign=',_0x12a719);let _0x5c0890={'url':serverUrl+_0x269b('‮1be',')1kJ'),'headers':{'user-agent':_0xadc8bb['pKvXU']},'body':_0x333332};return new Promise((_0x364621,_0x2ed1e3)=>{var _0x2ed3d5={'lSHVE':function(_0x158324,_0x259a41){return _0xadc8bb[_0x269b('‮1bf','w(9b')](_0x158324,_0x259a41);},'iSugv':function(_0xfccd52,_0x4e947e){return _0xfccd52===_0x4e947e;},'oLcOZ':_0xadc8bb[_0x269b('‮1c0','AWs(')],'vaKTN':_0xadc8bb[_0x269b('‮1c1','0sW4')],'SpawW':function(_0x38cab3,_0x3410cb){return _0x38cab3!==_0x3410cb;},'IDZoC':_0xadc8bb[_0x269b('‮1c2','7Wc)')],'CCRNO':function(_0xd66c0c,_0x50cd8a){return _0xd66c0c==_0x50cd8a;},'zWphM':function(_0x259730,_0x4b1d98){return _0x259730===_0x4b1d98;},'earMw':_0xadc8bb[_0x269b('‮1c3','$uqJ')],'scvht':function(_0x493842,_0x2ebf83){return _0xadc8bb['skghJ'](_0x493842,_0x2ebf83);},'Yuvmt':_0xadc8bb[_0x269b('‫1c4','yiI9')],'YxDtB':function(_0x14be65){return _0xadc8bb[_0x269b('‫1c5','I6]C')](_0x14be65);}};if(_0xadc8bb[_0x269b('‮1c6','YKm^')](_0xadc8bb[_0x269b('‮1c7','(Ia8')],'PmCqH')){$[_0x269b('‮e1','k9*I')](_0x5c0890,async(_0x4c38ef,_0x2844d1,_0x39b3ea)=>{var _0x4baacb={'BUjaF':function(_0x47d6f9,_0x556f20){return _0x2ed3d5['lSHVE'](_0x47d6f9,_0x556f20);},'wrfEk':function(_0x4145a6,_0xcb2fb7){return _0x4145a6(_0xcb2fb7);}};if(_0x2ed3d5[_0x269b('‫1c8','I0hY')](_0x2ed3d5['oLcOZ'],_0x2ed3d5[_0x269b('‮1c9','0sW4')])){console[_0x269b('‫1ca',']BHl')]('\x0a【'+Tips+_0x269b('‮1cb','I0hY')+$[_0x269b('‮8f','7Wc)')]+_0x269b('‫1cc','mV8Z')+result['msg']);}else{try{if(_0x2ed3d5['SpawW'](_0x269b('‫1cd','z5OI'),_0x2ed3d5[_0x269b('‫1ce','2SaC')])){if(_0x4c38ef){console[_0x269b('‮143','yiI9')]('\x0a['+TG_ID+_0x269b('‮1cf','#B*X')+_0x4c38ef);subTitle+='\x0a['+TG_ID+_0x269b('‮1d0','QZxr')+_0x4c38ef;}else{let _0x3ee6d7=JSON[_0x269b('‮1d1','KR7O')](_0x39b3ea);if(_0x2ed3d5[_0x269b('‮1d2','23fp')](_0x3ee6d7['code'],0xc8)){if(_0x2ed3d5[_0x269b('‮1d3','1C7l')]('SLkZN',_0x2ed3d5[_0x269b('‫1d4','x#l0')])){user_index=_0x3ee6d7[_0x269b('‮1d5','bW2O')];yyz_d=!![];}else{if(_0x4baacb[_0x269b('‮1d6',')1kJ')](_0x3ee6d7['data'],null)){console['log']('\x0a【'+Tips+'提示---账号\x20'+$[_0x269b('‫1d7','OE6I')]+'\x20观看视频】:\x20第'+num+_0x269b('‫1d8','lOI9'));}else{console[_0x269b('‫11a','KR7O')]('\x0a【'+Tips+_0x269b('‮1d9','#B*X')+$['index']+_0x269b('‮1da','yTA8')+num+'次获取到'+_0x3ee6d7[_0x269b('‮1db','z5OI')][_0x269b('‮1dc','e%Xh')]+'红包');}}}else if(_0x2ed3d5[_0x269b('‫1dd','OUHI')](_0x3ee6d7['code'],0xca)){console[_0x269b('‫1de','g(yj')]('\x0a['+TG_ID+_0x269b('‫1df','I0hY')+_0x3ee6d7[_0x269b('‮5b','x#l0')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x3ee6d7['msg'];}else if(_0x3ee6d7['code']==0xcd){if(_0x2ed3d5[_0x269b('‮1e0','QZxr')](_0x2ed3d5[_0x269b('‮1e1','rr9W')],_0x2ed3d5[_0x269b('‮1e2','yTA8')])){console[_0x269b('‫136','6CJy')]('\x0a['+TG_ID+_0x269b('‮1e3','bTjx')+_0x4c38ef);subTitle+='\x0a['+TG_ID+_0x269b('‮1e4','rr9W')+_0x4c38ef;}else{console[_0x269b('‫1e5','!4pY')]('\x0a['+TG_ID+_0x269b('‮1e6','yiI9')+_0x3ee6d7[_0x269b('‮1e7','Y[u2')]);subTitle+='\x0a['+TG_ID+_0x269b('‮1e8','z5OI')+_0x3ee6d7[_0x269b('‮1e9','bTjx')];}}else{console[_0x269b('‮1ab','e%Xh')](_0x39b3ea);if(yyz_Kami){await card(_0x15ad7b);}else{console[_0x269b('‮1ea','yTA8')]('\x0a['+TG_ID+_0x269b('‫1eb','OE6I'));subTitle+='\x0a['+TG_ID+_0x269b('‮1ec','g(yj');yyz_d=![];}}}}else{os=$[_0x269b('‮1ed','z5OI')]()?_0x4baacb[_0x269b('‮1ee','z5OI')](require,'os'):'';}}catch(_0x4f956e){console[_0x269b('‮13e','P]bO')](_0x4f956e);}finally{_0x2ed3d5[_0x269b('‫1ef','7Wc)')](_0x364621);}}});}else{console[_0x269b('‫1f0','z5OI')]('\x0a['+TG_ID+_0x269b('‫1f1','6CJy')+error);subTitle+='\x0a['+TG_ID+_0x269b('‫1f2','1C7l')+error;}});}async function card(_0x1411c2){var _0xde32be={'JxXVJ':_0x269b('‮1f3','I0hY'),'teJDd':function(_0x12ca54,_0x10e180){return _0x12ca54!==_0x10e180;},'pSpIn':_0x269b('‫1f4','yiI9'),'CVPza':_0x269b('‮1f5','P]bO'),'VAatd':_0x269b('‫1f6',')1kJ'),'jJSyN':function(_0x4b590e,_0x4ff01a){return _0x4b590e==_0x4ff01a;},'eFDZM':function(_0x134fd5,_0x41fb39){return _0x134fd5===_0x41fb39;},'ALgyi':_0x269b('‮1f7','yiI9'),'kBJXM':function(_0xaa79bb){return _0xaa79bb();},'Hchhj':function(_0x371c5c,_0x471f03){return _0x371c5c+_0x471f03;},'PsWDZ':function(_0x5063f5,_0x2da75b){return _0x5063f5+_0x2da75b;},'qDvsC':_0x269b('‮1f8','bW2O')};console['log'](yyz_Kami);var _0x5550d9=Math[_0x269b('‫1f9','6CJy')](Date[_0x269b('‫1fa','gsms')]()/0x3e8);var _0x49098e=_0x269b('‮1fb','OUHI')+_0x1411c2+_0x269b('‮1fc','4jPb')+yyz_Kami+_0x269b('‫1fd',')1kJ')+_0x5550d9;var _0xbe8208=CryptoJs['MD5'](_0xde32be['Hchhj'](_0xde32be[_0x269b('‮1fe','2SaC')](_0x49098e,'&'),appid))['toString']();_0x49098e=_0xde32be[_0x269b('‮1ff','w(9b')](_0xde32be[_0x269b('‮200','%MuH')](_0x49098e,_0xde32be['qDvsC']),_0xbe8208);let _0x38bb8c={'url':serverUrl+'card','headers':{'user-agent':_0x269b('‫201','OE6I')},'body':_0x49098e};return new Promise((_0x293a61,_0xb0f00f)=>{$[_0x269b('‮202','(Ia8')](_0x38bb8c,async(_0x2f0de2,_0x40e697,_0x209d3b)=>{try{if(_0xde32be['JxXVJ']!==_0xde32be[_0x269b('‫203','OE6I')]){console[_0x269b('‮2f','OHcP')](_0x269b('‮204','4jPb'));return![];}else{if(_0x2f0de2){if(_0xde32be[_0x269b('‫205','OUHI')](_0xde32be[_0x269b('‮206','QZxr')],_0xde32be['CVPza'])){console[_0x269b('‫24','OE6I')]('\x0a['+TG_ID+_0x269b('‫207','bTjx')+_0x2f0de2);subTitle+='\x0a['+TG_ID+_0x269b('‮208','u9K3')+_0x2f0de2;}else{throw new Error(_0x269b('‫209','x#l0'));}}else{if(_0xde32be['VAatd']!==_0x269b('‮20a','4jPb')){let _0x5a1604=JSON[_0x269b('‮20b','#B*X')](_0x209d3b);if(_0xde32be[_0x269b('‫20c','I5os')](_0x5a1604[_0x269b('‫132','lOI9')],0xc8)){console['log']('\x0a['+TG_ID+_0x269b('‫20d','eNJa')+_0x5a1604['msg']+_0x269b('‮20e','lOI9'));return![];}else{console[_0x269b('‫1f0','z5OI')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x5a1604[_0x269b('‫d5','yTA8')]);subTitle+='\x0a['+TG_ID+_0x269b('‫20f','x#l0')+_0x5a1604[_0x269b('‮c3','2SaC')];return![];}}else{console['log']('\x0a['+TG_ID+_0x269b('‮210','cFTq')+result[_0x269b('‮211','z5OI')]);subTitle+='\x0a['+TG_ID+_0x269b('‫212','%MuH')+result[_0x269b('‮1e7','Y[u2')];return![];}}}}catch(_0x1c8fce){console['log'](_0x1c8fce);}finally{if(_0xde32be[_0x269b('‫213','g(yj')](_0xde32be['ALgyi'],_0xde32be[_0x269b('‮214','(Ia8')])){_0xde32be[_0x269b('‫215','z5OI')](_0x293a61);}else{console['log']('\x0a【'+$[_0x269b('‮216',']BHl')]+_0x269b('‮217','bTjx'));return!![];}}});});}function Format_time(_0x5bec03){var _0x561f54={'IMOmX':function(_0x5f1da7,_0xc778ed){return _0x5f1da7*_0xc778ed;},'tzUpj':function(_0xf3ce8b,_0x1cd0f6){return _0xf3ce8b+_0x1cd0f6;},'AOjDK':function(_0x2e3f88,_0x89e752){return _0x2e3f88<_0x89e752;},'auwIE':function(_0x718373,_0x535bfe){return _0x718373+_0x535bfe;},'xoKGv':function(_0x582b50,_0x59ab48){return _0x582b50+_0x59ab48;},'ehntI':function(_0x22aafe,_0x28748e){return _0x22aafe+_0x28748e;},'oUFBa':function(_0x5c5541,_0x596c78){return _0x5c5541+_0x596c78;},'NnTuA':function(_0x537e14,_0x4d6491){return _0x537e14+_0x4d6491;}};var _0x9a5dfc=new Date(_0x561f54[_0x269b('‮218','$uqJ')](_0x5bec03,0x3e8));var _0x50be89=_0x9a5dfc['getFullYear']()+'-';var _0x8fc8e2=_0x561f54[_0x269b('‮219','z5OI')](_0x561f54[_0x269b('‫21a',')*^N')](_0x561f54[_0x269b('‮21b','I5os')](_0x9a5dfc[_0x269b('‫21c','KR7O')](),0x1),0xa)?'0'+(_0x9a5dfc[_0x269b('‫21d','cFTq')]()+0x1):_0x561f54[_0x269b('‮21e','k9*I')](_0x9a5dfc[_0x269b('‮21f','OUHI')](),0x1),'-');var _0x3e8714=_0x9a5dfc['getDate']()+'\x20';var _0x46ef83=_0x561f54['auwIE'](_0x9a5dfc[_0x269b('‫220','1C7l')](),':');var _0x5a08ff=_0x561f54[_0x269b('‫221','eNJa')](_0x561f54[_0x269b('‮222','yiI9')](_0x9a5dfc[_0x269b('‫223','x#l0')](),0xa)?'0'+_0x9a5dfc[_0x269b('‫224','6CJy')]():_0x9a5dfc['getMinutes'](),':');var _0x15271c=_0x9a5dfc[_0x269b('‫225','w(9b')]();let _0x2f6841=_0x561f54[_0x269b('‮226','gsms')](_0x561f54[_0x269b('‫227',']BHl')](_0x561f54[_0x269b('‮228','$F6q')](_0x561f54[_0x269b('‫229','AWs(')](_0x561f54[_0x269b('‮22a','yiI9')](_0x50be89,_0x8fc8e2),_0x3e8714),_0x46ef83),_0x5a08ff),_0x15271c);return _0x561f54['ehntI'](_0x561f54['oUFBa'](_0x561f54['NnTuA'](_0x50be89,_0x8fc8e2)+_0x3e8714,_0x46ef83)+_0x5a08ff,_0x15271c);};_0xodJ='jsjiami.com.v6';


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