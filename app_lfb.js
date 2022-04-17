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


const $ = new Env('【利分宝22/04/17_0】');
const notify = $.isNode() ? require('./sendNotify') : '';
const author = '作者TG_ID:@ls_soy';


var _0xodl='jsjiami.com.v6',_0xodl_=['‮_0xodl'],_0x3e93=[_0xodl,'wqsNRXVBw6zDt8OSwpE5EcKLwrXCoHrDm1A=','TsOFTsKOeMKawr82LXFPw7bDnMOA','w6HDnnbCrQ==','wpPDjQAmfw==','R8KRa2sJ','wqLDi8OZ','Nk/ClsOzZQ==','w78FEzHDlw==','Zl14b8Oi','w5kmQMOALn5zP2pPwrzDvcO3CQJHw7zCrAAiw4Q3DcOyfMOlwrR8AkFcwoRHQMKSbWTCqsOsw7vDpCnDjcO2SQjDnsOmFMK0w63DmsOPwq3CuMK8w5vCoyLDscOqdArCk8OeO8Kfw6RRXMKNJEMywrQqw74GwoPCkAlLIsOlDcOhJEF4KsOXw6DDjcKsw5bDiUJpUwZJdsK2NsKcwoDDqX9fC2h2w53Cp0zCpV1xFWnCjCHCqi4uwoNdPMO6wqXDrQ==','wrXCi1w=','w5XlvbXlpJ3jg5Xnr6xw','wqYOTcKuwrE=','eOS7m+i0geWMi+S4pOWKkuODpA==','wq3CumI=','w4M4FGQ=','44OQ77+P5pyv5aGY5YW+55qj5bmE5Y2D6YSDE8OEa0AGNWfCo8OWw5fCuTfDmA==','w4TjgrTohqTmnK/mjajnpZ/jganvvoTmrqHoh6/mnJ/lj7rogozpnYTpv7HnjLHloaXotZI=','wrrCg8OyBXo=','eMKwRg==','w5XjgaXCpcKqwrnohYrmnZDmjpDnpJHCvsKGFei3g+WNhSk=','woPku4/li4TlipnooKnjg5p6b+e/tOe4tOisvuawiOWmnei1tQ==','IynCjcKgLg==','w6csVMONDH1meTkY','MMKDwozChA==','CsKHwrbDrsKp','TVxRRsO9wo8=','w6jCgwPDhA==','w7VTAcOSQA==','woYcwr7CjsKm','w5wHwqk5Gw==','wqvCgT7DisOs','J8KAwpZWTA==','H8KawpBiWsOXwqPCpS8Ew5JxMDBXw5PCqcOSclzCkcKiw4PCgMOr','R8K5IMKnw58=','w7o1Nj7DjQ==','w4lMDsOHAA==','wq0jw5PDg3Y=','wozCi8OVO8O7','w6zCqhLCvCg=','MsKNwoY=','w4bjgbhCTlHohpvmnr7mjbjnp4R6WcOp6Le15YyxKQ==','wrDCil/DrQY=','w6zkupPlipDliLbooYDjgpDCqMKI576v57qL6K6D5rKG5aei6Lej','wq9Twr5Ow4M=','w4EXEwXDnQ==','ADtVwr93wrhx','wrXCoF3DmjI=','w5lgKMODaw==','w6gawrsiHw==','eFFiTMOc','T8KgHcKf','XMKgAMKK','wrpFwq3Dl8Oew5rCsxwUbXZ0','wqjCr8KUw5PDog==','wrvCsmLDhQg=','w6M0P2nCgQ==','wrnDq2k=','bcKxf8OjJQ==','woPku4/li4TlipnooKnjg5p6bw==','wrIGwrE=','BiNFwo9e','wrDjga5zG8Oz6IeP5p6d5o+056WjRHfCgui0iuWOlsON','H8KawpBiWg==','w6DopYbnnbTlubblk5bjgKxsfOintOeeh+aIuuWIog==','wqVFwrM=','wrPCs8OXMcOO','fE1Pwr9W','w7Nvw7NZRw==','wrARwr/CocO9','w443EmLCog==','w45+w61rag==','wpbDqw5fw7I=','LXDCiQ==','5rCp5YWZ5L+k5oGc77+9UcO9wrbDoWfDsFtwHe+9lg==','FcKrwoPDju+/m+aVqR7CjsKs776t5pSw','wqnjgKQWw6E46IeR5p2s5o6f56afw4XDpGfotorljqdM','w6XCggnDhMO3','wo3jgLzDtXNc6IWV5pyd5o6W56SeNsOkROi0meWOpsKe','w6vDnsKOwr8N','JOimr+eep+W4q+WQiuOBjC3CrOe+pee7huiutuaxiuWlnui2jA==','w7dNw7RvQA==','cMKLw5jDsW3DisKG','V8K0TcOIKw==','XcO9Eg==','wozjgYbCizo06IaA5p6f5o6P56eDw55KwqnotbHljK8b','AeinseecveW5vOWTheODrMKRw5Xopr/nnJrmib7liI4=','KsK6RMKmwpE=','wqPCnMOKFsOP','BsKkwo3DusKY','VOODssKSwo4d6IWk5p245o+c56SacVI26LaR5YywKg==','woPCtcOmJMOQ','wrTopovnnLHlu5blkIjjgIMoMA==','wo3CsA0=','MOOCunHCjmLoh6Hmn7/mjoPnpYQoEMKy6LaU5Y2Qwr4=','w6o5wp8=','woB4wr/Dv8O9','w4rCm8KISXY=','w7DjgYnkv7/ogpXmj4Hnp6HjgoLvvYDpqY3or4voh53mnqDDlcKhworlpqHot5XCheivsuWKreS9hOaWseiHtOafkeS7neS4reaEkOWHo+WslMK7','wrrCilDDqy4=','wprCrMKWw7/Dug==','wq4vSMKGwoY=','wrIYwrdFw5M=','wq1wwqpOw4k=','wrsAw6dGFzHDlcOUwrjCpQ8=','wrDDuhQhbQ==','wojCnsOLA3w=','w45nEMOLOQ==','w7TCoMK4RXU=','XsKow6HDlEE=','wqnDqhtsw6Q=','w684wpwwNQ==','W+eWquaJk+S9iOaBouOBimw16L+Z5Zqow4A=','wrPDtB8QQg==','w48kSyTDog==','HsOwFsOKYj8z','HcK5wpdCdg==','wrfCsMKf','w4DjgZrClkXDsOiHkuadqOaMhuemm8O9asOl6La85Yy/Mg==','wqfDisOaZsOA','w4PjgLrCp8Onw4vohqbmn73mjpPnpYohLzjotoTljbPCng==','w7lEJ8OuUQ==','Remjj+WlseWJreOAicOmNOe/iOe7geisouaykOWmm+i1hA==','wqXCtHFS','wqPDkcOaYsOMBA==','wpPCnMOi','wrzCj8OfB0c=','w63CsTA=','w4vjg4V2XMKe6IWB5p+85o2L56e2HsKaKei0n+WOrmw=','wqAHVg==','w7PCqMKwdmw=','TVdhwoFM','d1VudsO6','TTjCgw==','w74SMWfCvA==','wrMCw4xmFw==','wq4Ad3dv','ZmlWwqNf','YsKeVMOgEg==','w4MURBbDnA==','wpAow4XDvH8=','NMKpbMKkwpo=','wq3CjCw=','U8OEZsKEYw==','JOS4pOWKuuWKkeigteOCqSDDiOe/uue6n+istuawueWmiui3mQ==','wqHkuKXli7bli4nooKXjg4ktwrvnv4Tnu53orIfmsZLlpprotKQ=','wprCusOwMsON','wo/Cm8O1EV3Dh8KN','wpwrw4HDtHDCr8Oy','MsKHwo/ChhAW','w7lOMMOqTg==','wrsUwqLCpA==','w6pMKcOiR8OZ','wqJcwq5K','wrkHwrTCocKhJB0=','wrVJwrs=','wqvCsUR6wr4=','wrcMWsKbwr4=','W0d7bsOb','w6fDnsKc','UifCiMOYw4s=','V8OTOmhi','CcKxwpIlfw==','eEtJ','JOS4pOWKuuWKkeigteOCqSDDiA==','NcKjKMO6b8OELsKUwps=','5rOS5YSm5L+j5oKO77yBw7HDvn5TUXrDgMO7w6PvvoQ=','wr3CmERw77+9','wp3CljrvvKbmlag=','w7VEIA==','w5hPOw==','wqnChUnDuxs=','w4DCmwQ=','G8KbwpBi','wqXDpWo=','RMK0Qn9Z','wqoOSg==','wpnCvsKLw5/CoMKc','MmvCnMO+aUQdKMKM','w5Miwp5t','w4vjg4XkvZnogLbmjLfnpaHjg4HvvoHpqYDor7Lohq3mnKhqEQ3lpK/ot7zCpeithOWIp+S+reaWgOiGveaemOS7g+S6tOaGgeWEjOWsjg==','wrjCksKxw4LDgQ==','wqfCsGtBwpI1w7/Dt8K9QMOWclw=','RTLCisOWw5UKw7o=','w5APc8O+Gw==','wp3ConLDnyc=','worCiCrDk8Oa','VsOFZQ==','w4njgoUeDF7ohovmnpzmjZznp7FLwpF+6LaV5Y+DVQ==','w70nXsOMOg==','w6HpoaXlpJ3liKHjgqXCjkvnv5jnuLvoroHmsJ7lpYPotJA=','w4rjgpTkvKPogIzmjYznpIfjgYfvvYbpqrrorY3ohLDmnpE5wqfCgOWmiOi3k8OT6K2J5YiF5L255pa26IeS5p6Z5Lid5LqU5oeH5Yaf5ayHag==','ZEVcwr98','K+OBh8KXw57DhuiFueafq+aMguemowLCvzTot5fljJbDmQ==','wqtOwr0=','wp8rw5HDs37Cv8O2','wqTDtzcgbQ==','aALDiw==','HuODj1JjF+iEqeafruaPv+emu0U1wpnot6Tlj4vDug==','w4HpoZnlpLzlio3jgpnDl8KX','AcK1wq0=','GFzCnMOjSg==','wq0YQU1Bw6LDs8Ocwpc4GsOrwqvDq37DiVNFw6jDvcOtwoDDm8O1w5I7EmtuwrxBAMK6','w5nCosKUfA==','wrEQw6B3DHPDmQ==','wrcBwqLCtcO6f1MmWcOxwoVJwpDDk2fDpsKTwrvCkElNw61iwpvClMK1IzzCi8OewoPDs8ObEg==','w65bH8OnLcKnIWDCkMOGw7lqwoQcBUAlJzjDmTQgwp9WeSPDoEwSwr3DtMKGw4IGAsO2Zx3ClcOiwpUkw77DrHHDksOCw5/CoMO/OBfCvcKYwqYqw53CrWA+PMKeNMKKwoVIwoTCvMK5w6jCgRrDt8OBw7tgw5vCiCk7bsK8McKdXCYdwoHCkHHDnU0qecK0w45SRzzCuhnDq0lEw5XDjx57w63Du8KLCcK2cMOFwo/DmBbCiy/CkzVCwrPDvMOrHVDCosKbwprCksKYFHLCq8OEwo7CuDnDjXHDrAvCn2fCnl3DujfCn8O0XsOzT8O4wqXDg8OSw6tNw7XCkUHDkiIBw6/DuMOxGMO1LBjCg8OfG0N1KcKJKcOB','w6Few6QyVDpQKEd6wqcCWjvDl8Kew6XCiXY=','wpIawqzCrMKsPB1vHsK9wpsYw43DvmDDq8KHwq3DgAxmw6ooworClMKxaH3DjMKZwp3Cq8OYBsKHw416w7nChMKgw7rDmcKGw7PDoMK8w5XDtFdPwrMZw57CvDXDnsK7w4nCsk44NSTCjMKcw5HCiiAPBg4kwrQzwpxCW8Ohw67CmmXClsKQQRbDmcOewpzCpsOewovCoAXDnMOzwo1TBsOmw5nDi2LCnjs3w4lIaA4Nw68PKTfDh8K3w47CtWc/w4PDqMOXCcKNTjrCiXzCqsKSwrvDgcOUczsqw6x+FCXDvsOqGTXCtVYgLXXDpwDDicK8UBNYwpx6w67CkxXCoS8TcxfCqMKSAsOXwoc9w43DtHzCvsKEwp/DtgTChXg=','wr4FwqbCqcKpMx00QsO8w4UXwp3Cn37DssKFw7jCnUNVw6lhwo3CicK0aTPCmMOYw4jDoMKO','wp0jw4rDoA==','wqvDoRkTHcK+wp/DqsK5BMKSIsOGVRvCiMKGwo/CpcOlwrHCnMO6fFBzDnBjF2YhwpPDsw==','GcKCYcKowps=','wqoaUw9Zw7TDs8OGwp02GsKvwrbCrGDCkEcHw6M=','w6F8HcOpJA==','woIjwr9Lw4Q=','wrbCklRKwoM=','wocFUQ==','dMK+acO1OA==','w6TCsDQ=','w7s7Uw==','aQLDiDE=','wopowpc=','QcOzEQ==','GizCisK2YQ==','w4UZMgLDisKZw6Un','wqkGUg==','wpNJwrwT','TAXDhCIR','wpY2w4Q=','QOS8m+iDrOaMleelrAbnjrrnm7/lvKAKwpXDkz4LwqnlkrDmsbTlhqDmlrznmZUfB8OyXjLCuumDhOS5lOWNu+mHggToiLnmlr7niKjmrJrpn5TopKDoraLlibTphKHlkazCjuWvueS5teacueS4iOS5kOaeouWJseWYtcKE6YSF6KO756yV5pCa5L6Jw6PoraXogrPns5nkvqTogbLCrnQHAwR7wr8=','wqkMRsKkwrs=','FcOtEw==','bBPDkQ==','wqQHQlVGw6DDv8ON','wq0LUk5dw6/DpsKV','w6fCpWRAwpQswr/DqcKoDsKGNgpteSjDv8Okw5LCqijDmsOIw5DCi3I=','w4zCmmI=','w4ZOPcO7Bg==','w6RFEMO/W8OVw6rCpw==','AsKrXsKZwpA=','wpPCoCbDo8Ow','w6ZNw4VJYg==','w49bAg==','w74OReebteW8lOWnuui1pXXChei8vOWYl2o=','w706dMOGJnc=','a0ZadsOf','d8KtWHwaXMOvRcOy','wpnCksONB8OO','QsKyJ8KRw6nClA==','wp1uwrrDhcOg','wrlLwqDDoA==','wpDCpgJvw4M=','w6RDw6J5','LGzCiQ==','w4jCscKN','w67Dn8KN','w4lzGuebkuW8l+aIguWKjSp/N8OFwo3li6/mnYHmlp3pl53CuA==','CsKpwokyXg==','w7cmXsOM','LEnCosOGTw==','wp7Cr03nmJjlvbLlpqDotpXCtsOrRg==','w6/Dg8KN','R8KDw4TDgUk=','w6tDw6E=','wp9+wo7DqsO2','w6w5woxNw6fDtQ==','w4s5woI8IcO2w5Jww4zDnVfCpH/ClFJHwoMhw6HCs2Yiw64aesKJG8Kcw5fCuMOSKAHDl2FzGcKDwrvCrWZtwpfCvXbDtxJCw7xmw5fCmMO2BU/Cnm0MJysuC3FtwpklwrDCvkzCmMO2wrhvfmHDmsOuw57DmhvDgXvCl8O5wpc1w4DCknXCqsOgwpvCtcOZw64vJcKGwoPDijzCvS3CtsKXXlDCnEPDlEglwprClsOKDXE4wotVcsKzw7bClcK3w6/CgMODJMONwrsdfw/Ck8OyOcO7wqrDpzshwpBlXMKDw4jDrX/CssKZcFl6wo16c8OIW8OMU0/CrSIwwrTCr8OCQBhId3XDt8Kmw5krQcKdwqFCUSbDiGPCoSLChcOwWD7ColfCrhbCvHPDmcKNwqUaPcO0WsO2wqkBG3zCm8OlP8KdOGrCkMOFwrDCjAg0wr0=','w4VYCsOhMw==','asKwbA==','wr3Dh8OMasOIEUXDssKjwpcVfgR7VQ==','Qz1Iwrd9wrIp','wpbCm8ON','wpDDng9Nw5g=','RMKFUUgq','CsKFccKRwp4=','c8K6VVMYWsKy','w68uwqIgLA==','w6p+NMOnFQ==','w7LClsKZT3s=','wojCjWPDng8=','wpXCnhhqw5w=','w5DCtw/CiDw=','OTfCnMKPNQ==','ZMKwUng=','wovCgsOfNUc=','wo0ZWWpS','wpzDryXpqr/orKbotb3ljKfCocOs6L+n5ZmpJA==','UTbClsOCw5o=','InDCisOy','w4Z+GcOpbQ==','BsKSwqPDqsKn','wp3Cvl/pqoXorZ3ohKfmnbpmFg==','wq7Dpgo=','wrTCl1w=','w7xFJA==','w74QBT/Dkg==','ZwLDiDE=','GcKVwqXDu8KK','XcKXaUsH','woUHwqpQw68=','w7DmiKfkuq7liqDkvozoto3CsyrCoH7Cr8KswqrorJ7ohKHoo5zlrbnooawP','aMKwfA==','woTDnhvml7jphrHpqKDorLdDMw==','TCTCgw==','HCXDjuaXp+mHiOmqr+iutXTDlQ==','JzTCjg==','McO8w6rkvJ/nlKXljJrlrKLCvUXms4bmnYXljIflr5jljaHkv7Tnl7Y=','BcOLB+S+g+eXt+WNkuWss8KhMuaxpeadoeWPjOWug+WMqOS9reeXqQ==','wofCusOIEsO/','RVpTcMOs','w6/DumhSwoQ=','IC7CpcKjNA==','AsKbScK9wo4=','Ih7DhTMuYA==','wqLCrMK3w7nDjw==','w6tFBsOYCQ==','w6DmipfkuorliYLkvq/ot7XDiHvDqVoL6K2e6ISI6KKt5a656KKTdA==','w4PjgLrkvojogo3mjaLnpobjg4DvvZnpq7zor43ohJjmnLnDscOMw7/lp53otrxQ6K6k5YmO5LyS5pSn6Iah5p+C5LmL5LuZ5oWp5YSO5a2H','wopUwplxw6o=','OMKOwo7CjhY=','wq/CjDw=','wozCp34=','w7I5wqshP8Ozw504','fsKBRsKPwqxEwprDqXbDuVnCn3bDsyfDt30yEHNqQWrCocKEIFDDnMO8OMK3ORZ1wo/Cqz8=','w7PDsDM=','woEsBA==','wpzCknLDgjE=','w6gvMEvCvQ==','wpbCsMKCw5PDusOEc8Oiw4zDr8K2wopxw6LDglHDgU3DqsOxwoLCrHvCvRkCwoXCixrCmhLDssO3Zhw4w6vCiVzDsl7DqcOHE3J9MsKWRkICawPDoToGK07DlhbCqcO3PcKPwrrDgMOYJcKgIi3ClcKCwoTDjGbDpcKIw714XsOIwqdMDUTCl8OZwrN+w6FGHhU4a8KOFAvCv8K1NsORwqISw4nCnhc3B0fDjMKaakXDhS3CvBYfw4VnIcOGw67DmmzDq1Bka8KLwq4bNMOeWANTMMK1w6fCnsKAPMOdwpTCq8Oiw6pmw4fCmVLDoizCv8KVDBkxN8Off2IKBEDChcOewr0Qw7HDjMO+woPDkMOcwrfCosKSMwbDjTFVwqhHQ8KRw7w6EivCsMKgw5PCsBXDjMK2w5RxWC7DojpMw7nDuGRZWWfDtMKECsKUSsKbUQs=','DRt3wqR1','QcKtY2sM','wozCnhprw70=','w7HCrMKxeVY=','w6QmScOd','w5oWwqbms7Tlhqnlpb7otJR8BOi/j+WYl0k=','OHMH5rC05YaU5aet6LSxwqM96LyB5ZiMwoo=','FShVwq99','w7/CncKu','VMO8FnxUw51a','eUtKwqk=','KsKkwoE=','w6QoXg==','w5zChw7DksK4','w6U/wog9KMOow4c6woHChw==','VTjCt8OFw40KwqnCtQ==','LMKecsKMwq9WwofDmHPCtw0=','wqTCjSjDosONw4Qf','w6pDw6J5','BsKVwpA=','CMKaRMKPw6g=','InbCnsO/YlEAK8KNw6Y=','c8KtcsOyOMO+c8KEw44QwrgVw5g=','wrLCj8OkIMOb','wrfDk8Kn5rKa5Ya+5oqz5Ym3DsKaM3fClMOc','wr/DuAwAGsKv','McKUwpLCmBw=','w7k6XQ==','G8KHwpM=','wqzCpmI=','BcKJwqU=','woIJT8Kiwoo=','Qkdswrpd','VArDjwE0','wpPCnsKe5L2855aQ5YyE5a6+wqTDpei8oeWbrTA=','w6PDosOd5L2z55S85Y2Z5a+RwrZi6L2K5Zulw5o=','dlZewp1P','OsOwTG0N','VU9XwqZv','w4l4A8ODCQ==','w5kmQMOALn5zP2pPwrzDvcO3EgJHw63Cu0xxwqUXPcKgIsK8w75sAU86w5YJJsOnBGnCk8KWw7/DvSnDjsOzUAjDn8KeOcKDw6fDpMO+w4vDncOOwr7CoFDCi8O6bHrDu8O9AMO6w6gwQMKUI0NFwpYtw5YEwpjClhw7fcK5UcK6YUYKVcKtwp3Cr8K0w4DCnBksDx8uQMK0O8KSw5vCoAYPSiwxwoHDv0PDlBcmGhPDk33DtW16wpxfOcO6wqLDtQDDpCBYw4TCnMOrTibDgMOADRPCrMOrGXfCicOjwpUPwrjCvcObMX3CkG/DsmRgFcOTwoByFx3DqMKYw7jDmnPDswsMwpF4w6rDmcOMw7B5wqjDuMOyw7IdwpnDnDpHdhQTU8KZwqttNMOvTAzDoMK4eMKvYsO0b0sZBG7CjEMnLsKSw6rCkmA=','H8KYwo5JVA==','AsKpwr0=','UMKAw4k=','wpTCoA4=','wpTDthsFaQ==','VVxld8O9wpTDhcKS','wow4asKBwoA=','w6RNw7R4','OsK/wqsXRg==','woY6wrrCoMKZ','w7N9w4JsQA==','wr7Di8ONdw==','M8KCwodOaw==','wpBEwrtcw7A=','wpnDo8OmS8OA','w6ItdsOaLA==','HCXDjuS/qOeUr+WNguWusnTDlQ==','77yt6ISp5pya5bex5q+s5buF5L+U55ed','F8OtAw==','WVfCjOS8q+eVqOWMvOWvkcK2w5Tov47lmp8o','wpHCvhhPw60=','V8KuUsOjCQ==','wqsNw4bDv2s=','w4R6L8OMCg==','ecKWw40=','fG3DhOaxmeWEs+Wlkui3osOowrnov7vlmYw5','wrfDk8Kn5LyN55Sa5Y+C5ayuDsKa','w4AqHg==','77yI6IeF5py35bW05qy+5bqA5L2l55eA','w6slwp8=','Z8KQIuS+nueUs+WOmuWslWle','w6DCgwo=','w6PDosOd5pW86Yeb6aq06K+WwrZi','TEBR','w5/CisOK5paq6Ya66amb6K22HFo=','M8KRwoY=','w7t4w5IEwrnDpnTDuMKQ','HiTCgsKKMQ==','bMKrb8O2LsKCNcOHw5w0wrZVw5nCiMKywr7CjEXDlsOXw53DrRxRFcKuw7QVw6IPwpkAwrU5','wqLDkMOPd8O3','wpYNYsKIwqI=','wrrCmcKhw6LDkA==','RjvDjhow','AcK5woVzeA==','T8OyS8KIeg==','wq46w4jDn3Y=','w4rjgpQMZsOl6ISn5p265o6M56SMwqEHwpDotYzljJjDoQ==','w65Cw6J5XQ==','wo3CjMOz','ZmVDbsO5','w5FpNcO5SA==','SlBaQsOk','w6rCvTvCnyY=','wogiwpPCv8KV','DCdDwrlg','GuilqOecieW6nuWRkeODqsOpcw==','wqjCssO7C8OJ','wps/dFt9','w4B6KcO5bQ==','wpAZwpxGw7A=','wpoNQ8Kowp4=','woXCtTB3w70=','wovDjRsTVQ==','ZMKuUUoH','RcKhw6LDnmQ=','VDXDpBgm','wp08w5fDnX7CtcOnMg==','w5M7wp0PFw==','wr/ChMOiKGg=','wqbChj/DmMObw4EZw7o=','wqfDoQtEw7VTIyhTw78=','wqbCsHF+wo41wqXDr8KpQA==','d8Krw6nDtE0=','w5RGw4l3dA==','NiNowrdJ','wobDrkFmwog=','wpVXwpVAw6o=','w5LCtBjCtRw=','ceaLvOS5qeWKmeS+kOi0jXZ2fw/CkD5VwrzCtMOdDcOW6K6t6ISW6KOW5a+T6KKiDQ==','wqM5wqtFw63CrQ==','w4zmiYPku5fliJvkvKbotawJwqzDkhnDsOisnOiGruihnuWuueihkMKV','BcK1woQPaR4=','w6DmipfkuorliYLkvq/ot7XDiFLDiVoL6K2e6ISI6KKt5a656KKTdA==','w4QqN27ClsO6','wrHCtHFb','ceaLvOS5qeWKmeS+kOi0jXZlbALCiGoW6K2m6IS06KOi5a6k6KC/UA==','wpLCisOwKMOMKz3Djw/DuiQXwrUoUXfCsMKKwqNgw4/CvyjChhDCqsKKwpdnXFTDvA==','w6nCqiPCrnfDtzjDqMO6eMKvacOSey3CmhNrw4t6FcOkecKzw6Jkw6lswr/CjD9LF2wAMMOJwowywr0tecOHIGEJwppvw6nChsO1VMKC','woEHS0hEw63Ds8KHw4t5RMOkw7vCkWDDkEAHw7nDocK/wqPCosKgwpFnWTU2w7NyDMKwwprDu8O9R8KuC8KnF0DCqsKIw7NTAcO2J8Owfn7CsMKfwoIbAkMEwrPCmsK5w7bDvHLCkHQ0WsOyDAPCicKWwrUuCMKJXj8dw4LDlXBiWMKkw41jBcKWw58Gw7DDgWdhwp15ZcOAwoQsVsObw6zChmzDh0h1MmzCvmURWsKlFcOjwp/CtMKFwrjCusO3w5LCl8Kgw6gS','IeODkRrCkcO06Ier5pyO5pWM5Lu+5Ya+6Le75aCn5pq144Gh772Jw6/CvkIu5p2W5Luw5bqZ5Y+j5bmb55i96IeL5p+x5pSD5LmP5Y6+5YaL5Lm75rSm5Yy255mX5LqG5L6b6KS36Zel5ZO46KSU5a2c5YmZ5p616IS55p+W77+t5LiG55SL5Lid5rWp6K635ZG+5a2J5LiJ56Cc56iu772D56WK5q+055eB5LmI5Zau5LmO55W16YGH77+F5LiZ6IGv5L286KyS5YWK5ZGt5rGj5oCI44C25YaQ56Kv5oOy44OK5a2W5peM5oG15ZK85pyD5pSL5oOv776F6K+M5qKc5o285oGl5YSr6Ie+6KGE5YqM5peC44GaAFTDiEborqTliYnlsZ7mnrDkuKnluJPnm6/kuYDkvojlh7XlrK/nloDkuJfllYjkuqPmibLpnJTmsJ7nmovnm7jvvY7lkbHliq3lk4nmn6vohafotpHjg4TCn1vDlMKV5p+w6IWB5p+x5pW55Lix772356Sw5q+g5Lup5L2E5Yef5L2I5Y2C44Ol6Ia85ai05L6m44Cb5Lq65YyO6L2a6KCy5LiK5L+D5b2m5b2R55mT6L+E6Ly944Oq5Y6e5bqfwoLlkZ/liZzlkqfmn7zoho3otKLjgrHCoipwYeafteS7seWsteS7gOS+muiHtuafuemWg+mjoeakveS7jei2h+i1u+++o+WMouaIqeS/hOS4humYsOS4gOeXi+S6pOS/huiErOacj+mVluivl+WvtOiEsuebruS6tuS8qOaPkOWlrOaJnuaMkeWvp+OCp8KWeMOewqTplpjmj5fkva/nlqvohbTmnannmY7kuYfkvrHnl6LmiqfvvbHljK/miInkvKLkurrpmqnkuK/luLbnqYRrw45/NhvmiKnlnITmn5nkuKvoo5jkuIfovZLljavlmbTlrZY75Z+45Y6F5rKE5b+O5oul55ig5YaT5rOC6KSk55mz5oK05YSM5Lq76L6X6KKZ5LyI5pOl77+35p6C5Lur5a6M5LmG55Wx5q2q5b6u6LSb55my5Lmi5LyC6Zug56Wk5rKi5r6+5ouT5YSU5Lqe5ZC05py75qaE5Lil6LaU6Lel44K4w7rDrsKgPOiupeWLoOWzruafruS7v+W6h+eYp+S5i+S9g+WGguWsieeUnuS4suWXg+S4l+aKmumdm+awoeebiueYmu+8meWQvOWIr+WQi+acp+iGt+i2tOOCrVTDs0HCguWkqeacueS6o+S8tOWMo+S+v+aIteS4n+S4qOivkOS7u+iuk+iEiOactuWPgOiAnea2kOWrtuS9leeJvOWGpuaeruWJgO++p+WIneW6i+WMv+aWrumAs+ecgOW5r+aMhOS9mui5s+S4keivvOaZo+ODhuaJq+acq+adjuitgOaYiu+9gOaIoeS4vOWyseWdqeaVluWIneiuhOitqOaVn+S7v+WSmOWIqOmaseealOWGh+iGpOafp+OCiMK+wqxMJOS7mOS/q+S5jOS6ouS/tuaWoOW8kuaclOedr+asoemgouebsueYruS7oeaIn+eaqeaPg+aJv+mWnOaNgOS8j+eWsOivkOS7nuW5queZjOS6o+S/p+iGjOafrueai+S+u+eXtOiBq+mBruW7qOS4que7u+mbgeisleasv+WgouaYtOOCqOafoOS5g+S/t+eXpOmbp+aVtuaalOaWh+aJgOigu+WHq+avrOWFqui2vOWirOaYmOeYueaetOWKvOOAguS5q+aWoeS8sOeXp+W5qeWkq+WKqOS4neS6iOS9tOeYsuWGseiFouacu+aKiOS7jOW7oeaWseS6mu+8v+WKh+ilkuS4s+aBqeW2rOaPreWOmeauquWGkui0o+Wireabi+OCqA==','d8KCXsKPw7BQwpnDumHCt0fDgyDCsw==','wqDCsWFBwoIowqM=','ZcKXT8OABw==','wr9ZOsO4BsOfw6jCoUIkT8Khw4LCi8OA','w7YiV8ONAw==','w7HCsE9qwq1bZ25Qw6lPw59YwozDtMKLwpLCmcOcwp/DtcK9wqzDlAZfw74sw59XTDE=','OMKPwqwwSw==','RjHCgsOrw7c=','QcKsCsKxw4I=','LgvCkMKPAA==','K8OaCcOsVQ==','w5LCo1tAwrrCkcKDIsOc','TRzCqMOJw74=','UsK4G8Kuw54=','woE+wp1pw4c=','A3rCjcO4XQ==','wp8tw4s=','ZkFPwqh9ccKjw4fCkcOdwp0=','wo3DpRkmag==','wr3CsMKKw7/Dt8OLeg==','wrPCi1LDpg==','wqbDsWx+wq3CvQ==','BMKtwrVNbg==','w6AmacOdMHt8dw==','cxzCvMOFw70=','EnPCg8OWZA==','wrgdVXRg','csK1DMKTw4s=','G8KDwqPDqcKHw6AOwqLCr8OOwr7ClQ==','wq/CsMKrw47DpMOBfMKq','GsKWwq7DpMK1','wr8YXUhc','w41AF8OZGQ==','wojCs8KVw7vDtQ==','HMKVwo7CsjM=','wpvDkMOYOw==','P8KDw5TCglEdbT0TZE4uw5LDtD3Dpw==','DMKIwqE=','w5JYw6Ak','ZcKYw5jDoWc=','YcKxbQ==','H8KpwrM/dALCnsOYAQY4Bw==','wqzDqxg=','w6zDkcKHwr8=','44Ky77yu5p2P5aOl5YeY55iz5buU5Y6X6YWqw4jCuiXDlQ8VVyoAZ8KYAS8=','TltXYMO6','woXDuSMEfQ==','w43CqMKRZWA=','w7dqw65YdQ==','N8OxFMOvVQ==','fcOhBUh1','wqzCtHFQwo8=','wqYlwoI=','wrbDjSlkw6Q=','w7TDucK8wrcN','wroaw7M=','WVfCjOS8q+eVqOWMvOWvkcK2w5Q=','CDpA','wobDpcOY5L+F55a+5Y+J5a+Uw7fDmQ==','w71ZJA==','w4njgoXkvLHogabmj7fnpqvjgqHvvpbpqYforqfohqbmnb/DoHw05aea6LeCw43orLnlib/kvLXml4zoh47mnLPkuJLku6XmhK7lhpTlrqp0','wrsUw6BADQ==','w6YsSsOFI3F3','DuODj+S9h+iCg+aOjeemguOAi++/sumop+iuguiHm+adl8OowrTDneWnrOi3h0boraDliZjkvZrml7vohaHmnJjkuYzkuJzmhovlh5HlrL9h','w6/DkcKewrkd','FyxXwrB5wr9x','w7EnTA==','wqrCi0LDlxLDisKUJndHwqwK','SMK5TsOHHA==','wqNTwqw=','OSjCkMKaOlpow5sRIsKxwp0=','bQPDiDE4EnE=','emZ6wqlK','YwvDig4I','w5QYFw==','FiZewoN0wrp2w4Z5wrTCpsOL','DMKIwrQ=','wqUFw7hKEQ==','X8OEdA==','wqUaw618CXjDnsOlwrjCoQNj','woPCtcOmJMOQU24=','BcKbwo1YTsOQwqXDlScMw5Vk','LcKSwo3CiBA=','CcKowrw=','w6cmQ8O2LnRwTzsAw7jCvA==','wqbCj8OSM3M=','w6nCghs=','CMOyCMOAeQ==','w580NRPDqw==','w7bChhrCsyY=','w7wESMOkDQ==','wrPClDJIw4o=','wqXDqgk=','ScOFe8K+d8KdwrEMGmRJw74=','wqpSwr0=','w4vnjZPlnaPkvbHmg5vvvq5hwqTDilsINWpdC++9uw==','w595JMON772b','w4ZaBg==','MX7CnMOkYg==','wo4JQkQewrU=','Z1BcwqV3f8K4w7LCkQ==','GcK0dA==','wqgNUlNRw7HDpg==','FsOtAMOM','KMKQQw==','NSJEwq8v','wr4lwrZew7vCoSrCsQ==','wrTCqwwE','w7gmXQ==','5rKe5YW45LyV5oGo77y4wrzDqsKnbjnDplpGAO+8pQ==','eCTDvO+9juaWoA==','wqwFwrrCrMK0','w4Zpw5U=','wr/CusKbw4jDr8OYZg==','wokIwqY=','wrlLwrA=','PMKtwqkTOg==','w58QYw==','w5wsQg==','GcKHwrDDvsKk','TVxR','5rCo5YSI5L6e5oGm776GN3txG8OYbcOiI8Kr77+b','acK0w6vDke+8mOaVjsKfRMOr772u','D8OtN8OdfzI4cg==','w6M4wps=','YzbCl8OUwolX','wpnCr8OwKMOGe2HDjxw=','wrMawrE=','AMKpwq0=','wqo4w5Vg772/5pe+w4DDs8KM77+a5paX','woHDkcO7ZMOP','w4PCmSjDhsO4','w6JCw6U=','eMOLccKELcOP','ScOecMKIdcKcwro1Bw==','YHZl','w5PCt8KZaQ==','w73CmsK+','woo4w4c=','DsKJwoLCklM=','wo7Cq8KewoI=','cUpN','wq8UwqTCtsKl','ccKxQg==','wrpewqbDocOcw5vCuCUJ','w4dRBsO8OMK7NA==','UVJS','wplBwrfDu8KF','w44RUwDDuMK8w59D','w6fDnsKJ','5rO95YW15L2L5oO977yYwqTDjiDCliDDhsK+woHDp++8pQ==','w6xnAsOI77yz','wr3CnFXvvKk=','LXrCgMOwc0s=','GsKbwpM=','w4MXw6nCtcKS6Iam5p+95oik6KC8LC815Y615Lio5pWI6ZSY776D','wo/Ci8OrGHU=','wo3CvsO2FcOBcW0=','woPCncOUDMOF','jsjViahmip.gTckOXteoutmlP.vg6e=='];if(function(_0x17de66,_0xf4b726,_0x11159c){function _0x283d15(_0x4c6122,_0x147c12,_0x29d326,_0xc43f63,_0x1658aa,_0x3ee0de){_0x147c12=_0x147c12>>0x8,_0x1658aa='po';var _0x336936='shift',_0x1b9f14='push',_0x3ee0de='‮';if(_0x147c12<_0x4c6122){while(--_0x4c6122){_0xc43f63=_0x17de66[_0x336936]();if(_0x147c12===_0x4c6122&&_0x3ee0de==='‮'&&_0x3ee0de['length']===0x1){_0x147c12=_0xc43f63,_0x29d326=_0x17de66[_0x1658aa+'p']();}else if(_0x147c12&&_0x29d326['replace'](/[VhpgTkOXteutlPge=]/g,'')===_0x147c12){_0x17de66[_0x1b9f14](_0xc43f63);}}_0x17de66[_0x1b9f14](_0x17de66[_0x336936]());}return 0xdfa62;};return _0x283d15(++_0xf4b726,_0x11159c)>>_0xf4b726^_0x11159c;}(_0x3e93,0x1c1,0x1c100),_0x3e93){_0xodl_=_0x3e93['length']^0x1c1;};function _0x34a2(_0x11107c,_0x4ff87e){_0x11107c=~~'0x'['concat'](_0x11107c['slice'](0x1));var _0x35f9f4=_0x3e93[_0x11107c];if(_0x34a2['AFpLEJ']===undefined){(function(){var _0x239fcf=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4892f3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x239fcf['atob']||(_0x239fcf['atob']=function(_0x9d1b4e){var _0x2d6afd=String(_0x9d1b4e)['replace'](/=+$/,'');for(var _0x4abfcd=0x0,_0x42bc6a,_0x1e365e,_0x26a2fd=0x0,_0x10aa1d='';_0x1e365e=_0x2d6afd['charAt'](_0x26a2fd++);~_0x1e365e&&(_0x42bc6a=_0x4abfcd%0x4?_0x42bc6a*0x40+_0x1e365e:_0x1e365e,_0x4abfcd++%0x4)?_0x10aa1d+=String['fromCharCode'](0xff&_0x42bc6a>>(-0x2*_0x4abfcd&0x6)):0x0){_0x1e365e=_0x4892f3['indexOf'](_0x1e365e);}return _0x10aa1d;});}());function _0x559a79(_0x7d413,_0x4ff87e){var _0x8bfeb7=[],_0x556a97=0x0,_0x14b44c,_0x1c0335='',_0x277149='';_0x7d413=atob(_0x7d413);for(var _0xbcc240=0x0,_0x4e96ec=_0x7d413['length'];_0xbcc240<_0x4e96ec;_0xbcc240++){_0x277149+='%'+('00'+_0x7d413['charCodeAt'](_0xbcc240)['toString'](0x10))['slice'](-0x2);}_0x7d413=decodeURIComponent(_0x277149);for(var _0x415f62=0x0;_0x415f62<0x100;_0x415f62++){_0x8bfeb7[_0x415f62]=_0x415f62;}for(_0x415f62=0x0;_0x415f62<0x100;_0x415f62++){_0x556a97=(_0x556a97+_0x8bfeb7[_0x415f62]+_0x4ff87e['charCodeAt'](_0x415f62%_0x4ff87e['length']))%0x100;_0x14b44c=_0x8bfeb7[_0x415f62];_0x8bfeb7[_0x415f62]=_0x8bfeb7[_0x556a97];_0x8bfeb7[_0x556a97]=_0x14b44c;}_0x415f62=0x0;_0x556a97=0x0;for(var _0xabc9d9=0x0;_0xabc9d9<_0x7d413['length'];_0xabc9d9++){_0x415f62=(_0x415f62+0x1)%0x100;_0x556a97=(_0x556a97+_0x8bfeb7[_0x415f62])%0x100;_0x14b44c=_0x8bfeb7[_0x415f62];_0x8bfeb7[_0x415f62]=_0x8bfeb7[_0x556a97];_0x8bfeb7[_0x556a97]=_0x14b44c;_0x1c0335+=String['fromCharCode'](_0x7d413['charCodeAt'](_0xabc9d9)^_0x8bfeb7[(_0x8bfeb7[_0x415f62]+_0x8bfeb7[_0x556a97])%0x100]);}return _0x1c0335;}_0x34a2['iQZVdX']=_0x559a79;_0x34a2['dieoAL']={};_0x34a2['AFpLEJ']=!![];}var _0x3a9918=_0x34a2['dieoAL'][_0x11107c];if(_0x3a9918===undefined){if(_0x34a2['YoxXIZ']===undefined){_0x34a2['YoxXIZ']=!![];}_0x35f9f4=_0x34a2['iQZVdX'](_0x35f9f4,_0x4ff87e);_0x34a2['dieoAL'][_0x11107c]=_0x35f9f4;}else{_0x35f9f4=_0x3a9918;}return _0x35f9f4;};try{CryptoJs=$['isNode']()?require('crypto-js'):'';}catch(_0x51bfc0){throw new Error(_0x34a2('‫0','FVA$'));}try{os=$[_0x34a2('‫1','#JkD')]()?require('os'):'';}catch(_0x160d38){throw new Error(_0x34a2('‮2','3%1*'));}try{fs=$[_0x34a2('‮3','85xz')]()?require('fs'):'';}catch(_0x1543b6){throw new Error(_0x34a2('‮4','0Shh'));}try{path=$[_0x34a2('‮5','QPgK')]()?require(_0x34a2('‮6','5XOo')):'';}catch(_0x461602){throw new Error(_0x34a2('‫7','FVA$'));}let mac,TG_ID,yyz_Kami,user_num,script_data,lfb_UA,app_soy_lfb_data,lfb_token,subTitle,user_index,yyz_d=![],IP_address='127.0.0.1';let appid=_0x34a2('‫8','E4Oi'),serverUrl=_0x34a2('‫9','zh6H'),yyz_UA=_0x34a2('‫a','1&46');console['log'](_0x34a2('‫b','^772'));!(async()=>{var _0x3686cf={'yyrPS':_0x34a2('‮c',')9OS'),'KtxCN':_0x34a2('‮d','5XOo'),'BecoZ':function(_0x2285d1,_0x1a5dd5){return _0x2285d1==_0x1a5dd5;},'WXsih':_0x34a2('‮e','y6(2'),'NptEM':_0x34a2('‮f','lan$'),'ntrWX':function(_0x434998,_0x563503){return _0x434998(_0x563503);},'RKXtB':function(_0x5dc478){return _0x5dc478();},'SlmAc':function(_0x1c10e4,_0x2d3917){return _0x1c10e4!==_0x2d3917;},'BwoSW':_0x34a2('‮10','5dDd'),'EEXQI':_0x34a2('‫11','qlUc'),'pFhDP':function(_0x5ce117,_0x2e68e1){return _0x5ce117===_0x2e68e1;},'LspFX':_0x34a2('‮12','85xz'),'ZUFXi':function(_0x2c9a2f,_0x4d8810){return _0x2c9a2f!==_0x4d8810;},'vIVmx':'gItqp','LfUAA':function(_0x566b5c,_0x45255c){return _0x566b5c>_0x45255c;},'nBTeS':function(_0x49d8d6,_0x4f63b5){return _0x49d8d6===_0x4f63b5;},'GyEGl':_0x34a2('‮13','AbfD'),'wXMmk':'NRlRR','hMrMO':_0x34a2('‫14','^772'),'djdxh':'1|4|0|3|2','Aziei':function(_0x16dcbb,_0x3e7dc5){return _0x16dcbb&&_0x3e7dc5;},'hfrgS':'GtyCE','OuEgw':_0x34a2('‮15','w$n2'),'ebljG':function(_0x28f148,_0x361148){return _0x28f148+_0x361148;},'rVYFo':function(_0x3a535b,_0x40be8d){return _0x3a535b+_0x40be8d;},'iFVMm':function(_0x3be728,_0x29b62a){return _0x3be728*_0x29b62a;},'PjuwH':function(_0x4727d3,_0x139c6){return _0x4727d3===_0x139c6;},'SNJgg':_0x34a2('‫16','FVA$'),'GnNlm':_0x34a2('‫17','wXRg'),'UUGLN':_0x34a2('‫18','AbfD')};if($['isNode']()){function _0x117c00(){var _0x3b2638={'kcOyr':_0x3686cf[_0x34a2('‮19','^772')],'uRxlt':_0x3686cf[_0x34a2('‫1a','#JkD')],'OdsnB':function(_0x4ee066,_0x5dc975){return _0x3686cf[_0x34a2('‫1b','sHDO')](_0x4ee066,_0x5dc975);},'rYAJL':_0x34a2('‫1c','l2t!')};if(_0x3686cf['WXsih']===_0x3686cf['WXsih']){var _0x85ca13='';var _0x227c31=fs[_0x34a2('‮1d','I5zL')](_0x3686cf[_0x34a2('‮1e','j[aC')]);_0x227c31[_0x34a2('‮1f','@1y@')](function(_0x33fb86){var _0x53b0ef=path[_0x34a2('‮20','LX8q')](_0x3b2638['kcOyr'],_0x33fb86,_0x3b2638['uRxlt']);if(_0x3b2638['OdsnB'](_0x33fb86[_0x34a2('‮21','Fq(^')](0x0,0x3),_0x3b2638[_0x34a2('‫22','H&fR')])&&fs['existsSync'](_0x53b0ef)){_0x85ca13=fs['readFileSync'](_0x53b0ef)[_0x34a2('‫23','5dDd')]()['trim']();};});return _0x85ca13;}else{console['log'](e,response);}};mac=_0x3686cf[_0x34a2('‫24','AbfD')](_0x117c00);await yyz_getip();try{if(_0x3686cf[_0x34a2('‮25','sHDO')](_0x34a2('‫26','1&46'),_0x34a2('‫27','^772'))){before=fs[_0x34a2('‫28','aV[Q')]('./mac')[_0x34a2('‮29','@1y@')]()['trim']();reg_ip=before[_0x34a2('‮2a','aV[Q')]('&')[0x0];reg_mac=before[_0x34a2('‫2b','1&46')]('&')[0x1];}else{fs=$['isNode']()?_0x3686cf[_0x34a2('‫2c','k5#H')](require,'fs'):'';}}catch(_0x3f7da9){if(_0x3686cf[_0x34a2('‫2d','@1y@')]('bkmdA',_0x3686cf[_0x34a2('‮2e','Q@rQ')])){resolve();}else{reg_ip='';reg_mac='';}}mac_e=CryptoJs['enc'][_0x34a2('‮2f','yPJU')]['parse'](_0x34a2('‮30','Q@rQ'));mac_i=CryptoJs[_0x34a2('‮31','aV[Q')][_0x34a2('‮32','Dflm')][_0x34a2('‮33','KfC8')](_0x3686cf['EEXQI']);let _0x44a74e=$['isNode']()?process[_0x34a2('‮34','y6(2')][_0x34a2('‫35','85xz')]:'';if(!_0x44a74e){console[_0x34a2('‮36','qlUc')]('\x0a【'+$[_0x34a2('‫37','J5d[')]+_0x34a2('‮38','k5#H'));return!![];}else{if(_0x3686cf['SlmAc'](_0x34a2('‫39','TeM$'),_0x34a2('‮3a','j[aC'))){TG_ID=_0x44a74e[_0x34a2('‫3b','x(])')]('&')[0x0];yyz_Kami=_0x44a74e['split']('&')[0x1];try{if(_0x3686cf[_0x34a2('‮3c','Dflm')](_0x3686cf[_0x34a2('‮3d','FVA$')],_0x3686cf[_0x34a2('‫3e','t8dl')])){Tips=author[_0x34a2('‫3f','5XOo')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{console[_0x34a2('‮40','#JkD')](e,response);}}catch(_0x21dcc1){if(_0x3686cf['ZUFXi'](_0x3686cf[_0x34a2('‫41','qlUc')],_0x3686cf[_0x34a2('‫42','J5d[')])){console[_0x34a2('‫43','0rw(')]('\x0a['+TG_ID+_0x34a2('‮44','oB94')+result[_0x34a2('‫45','1fD4')]);subTitle+='\x0a['+TG_ID+_0x34a2('‫46','@1y@')+result[_0x34a2('‫47','lan$')];return![];}else{throw new Error(_0x34a2('‫48','j[aC'));}}try{YZ=author[_0x34a2('‫49','0rw(')](/作者TG_ID:(\S*)/)[0x1][_0x34a2('‮4a','5dDd')](/_/g,'><');}catch(_0x559e34){throw new Error(_0x34a2('‮4b','y6(2'));}}else{YZ=author[_0x34a2('‮4c','J5d[')](/作者TG_ID:(\S*)/)[0x1][_0x34a2('‮4d','1fD4')](/_/g,'><');}};if(process[_0x34a2('‮4e','5dDd')][_0x34a2('‮4f','LX8q')]&&_0x3686cf[_0x34a2('‮50','y6(2')](process[_0x34a2('‮51','3%1*')][_0x34a2('‫52','w$n2')][_0x34a2('‮53','oB94')]('\x0a'),-0x1)){if(_0x3686cf[_0x34a2('‮54','I5zL')](_0x34a2('‮55','oB94'),_0x3686cf['GyEGl'])){app_soy_lfb_data=process[_0x34a2('‫56','WbVx')][_0x34a2('‫57','1fD4')]['split']('\x0a');}else{app_soy_lfb_data=process[_0x34a2('‮58','aV[Q')]['soy_lfb_data'][_0x34a2('‮59','0rw(')]('\x0a');}}else if(process[_0x34a2('‫5a','Zj52')][_0x34a2('‮5b','0rw(')]&&process['env']['soy_lfb_data'][_0x34a2('‫5c','E4Oi')]('#')>-0x1){app_soy_lfb_data=process['env'][_0x34a2('‫5d','H&fR')][_0x34a2('‮5e','Q@rQ')]('#');}else if(process[_0x34a2('‮5f','85xz')][_0x34a2('‮60','5dDd')]&&_0x3686cf[_0x34a2('‫61','0Shh')](process['env']['soy_lfb_data']['indexOf']('@'),-0x1)){app_soy_lfb_data=process[_0x34a2('‫62','R1az')]['soy_lfb_data'][_0x34a2('‫63','FVA$')]('@');}else{if(_0x3686cf[_0x34a2('‫64','WbVx')](_0x3686cf[_0x34a2('‮65','zh6H')],_0x3686cf[_0x34a2('‮66','5dDd')])){_0x3686cf[_0x34a2('‫67','wXRg')](resolve);}else{app_soy_lfb_data=process[_0x34a2('‮68','qlUc')][_0x34a2('‫69','Zj52')][_0x34a2('‫3b','x(])')]();}};console[_0x34a2('‮6a','3%1*')](_0x34a2('‮6b','L9@V')+TG_ID+_0x34a2('‫6c','k5#H')+mac+'|IP：'+IP_address);if(!reg_ip){var _0x287b29=CryptoJs[_0x34a2('‫6d','k5#H')]['Hex'][_0x34a2('‫6e','sHDO')](reg_mac);var _0x469381=CryptoJs['enc'][_0x34a2('‮6f','1&46')][_0x34a2('‫70','I5zL')](_0x287b29);var _0x1fabc8=CryptoJs[_0x34a2('‫71',')9OS')][_0x34a2('‮72','1&46')](_0x469381,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x34a2('‫73','FVA$')]['CBC'],'padding':CryptoJs[_0x34a2('‫74',')9OS')][_0x34a2('‮75','1fD4')]});var _0x4a384d=_0x1fabc8[_0x34a2('‫76','#JkD')](CryptoJs[_0x34a2('‫6d','k5#H')][_0x34a2('‫77','wXRg')]);console[_0x34a2('‫78','5dDd')](_0x34a2('‮79','H&fR')+TG_ID+'|MAC：'+mac+_0x34a2('‫7a','oB94'));}else if(!reg_mac){var _0x24abb9=_0x3686cf['djdxh'][_0x34a2('‫7b','MFtj')]('|'),_0x16e6b0=0x0;while(!![]){switch(_0x24abb9[_0x16e6b0++]){case'0':var _0x1fabc8=CryptoJs[_0x34a2('‫7c','Dflm')][_0x34a2('‮7d','@1y@')](_0x469381,mac_e,{'iv':mac_i,'mode':CryptoJs['mode'][_0x34a2('‫7e','#JkD')],'padding':CryptoJs[_0x34a2('‮7f','CiP$')][_0x34a2('‫80','85xz')]});continue;case'1':var _0x287b29=CryptoJs[_0x34a2('‫81','HjJ6')][_0x34a2('‮82','5dDd')][_0x34a2('‮83','aV[Q')](reg_ip);continue;case'2':console[_0x34a2('‮84','TeM$')](_0x34a2('‫85','qlUc')+TG_ID+_0x34a2('‫86','KfC8')+_0x4a384d['toString']());continue;case'3':var _0x4a384d=_0x1fabc8[_0x34a2('‫87','FVA$')](CryptoJs[_0x34a2('‮88','EnxD')]['Utf8']);continue;case'4':var _0x469381=CryptoJs[_0x34a2('‮88','EnxD')][_0x34a2('‫89','AbfD')][_0x34a2('‮8a','E4Oi')](_0x287b29);continue;}break;}}else if(_0x3686cf['Aziei'](!reg_mac,!reg_ip)){if(_0x3686cf['hfrgS']!=='GtyCE'){console[_0x34a2('‫8b','MFtj')](e);}else{console[_0x34a2('‮8c','85xz')]('注册信息：\x0a---TG_ID：'+TG_ID+_0x34a2('‫8d','0rw('));}}else{if(_0x3686cf[_0x34a2('‫8e','yPJU')]===_0x3686cf[_0x34a2('‫8f','R1az')]){var _0x287b29=CryptoJs['enc']['Hex']['parse'](reg_ip);var _0x469381=CryptoJs[_0x34a2('‫90','Dflm')][_0x34a2('‮91','Zj52')][_0x34a2('‮92','Zj52')](_0x287b29);var _0x1fabc8=CryptoJs[_0x34a2('‮93','TeM$')]['decrypt'](_0x469381,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x34a2('‫94','x(])')][_0x34a2('‫95','x(])')],'padding':CryptoJs[_0x34a2('‮96','l2t!')][_0x34a2('‮97','Q@rQ')]});var _0x59eacd=_0x1fabc8['toString'](CryptoJs[_0x34a2('‫81','HjJ6')][_0x34a2('‫98','@1y@')]);var _0x287b29=CryptoJs[_0x34a2('‮99','I5zL')]['Hex'][_0x34a2('‫9a','MFtj')](reg_mac);var _0x469381=CryptoJs[_0x34a2('‮9b','pBYR')]['Base64'][_0x34a2('‮9c','CiP$')](_0x287b29);var _0x1fabc8=CryptoJs['AES'][_0x34a2('‮9d','k5#H')](_0x469381,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs[_0x34a2('‫9e','TeM$')][_0x34a2('‮9f','CiP$')]});var _0x41ac5c=_0x1fabc8[_0x34a2('‮a0','HjJ6')](CryptoJs[_0x34a2('‮a1','J5d[')]['Utf8']);console['log'](_0x34a2('‫a2','KfC8')+TG_ID+_0x34a2('‫a3','lan$')+_0x41ac5c+_0x34a2('‮a4','5XOo')+_0x59eacd);}else{console['log'](e);}}user_num=app_soy_lfb_data[_0x34a2('‫a5','sHDO')];console[_0x34a2('‫a6','H&fR')](_0x34a2('‫a7','CiP$')+new Date(_0x3686cf[_0x34a2('‫a8','0Shh')](_0x3686cf['rVYFo'](new Date()[_0x34a2('‮a9','E4Oi')](),_0x3686cf[_0x34a2('‫aa','E4Oi')](new Date()[_0x34a2('‫ab','1&46')](),0x3c)*0x3e8),_0x3686cf['iFVMm'](_0x3686cf['iFVMm'](0x8*0x3c,0x3c),0x3e8)))[_0x34a2('‫ac','Zj52')]()+_0x34a2('‮ad','L9@V'));await yyz_login();if(yyz_d){if(_0x3686cf['PjuwH'](_0x34a2('‮ae','j[aC'),_0x3686cf[_0x34a2('‮af','pBYR')])){console[_0x34a2('‮b0','yPJU')]('\x0a===【共\x20'+user_num+'\x20个账号】===');subTitle='';for(i=0x0;i<user_num;i++){if(_0x34a2('‫b1','sHDO')!==_0x34a2('‮b2','WbVx')){var _0x47703f=_0x3686cf[_0x34a2('‮b3','TeM$')]['split']('|'),_0x33ca04=0x0;while(!![]){switch(_0x47703f[_0x33ca04++]){case'0':await implement();continue;case'1':yyz_UA=_0x34a2('‮b4','5dDd');continue;case'2':$['index']=i+0x1;continue;case'3':token=app_soy_lfb_data[i];continue;case'4':console[_0x34a2('‫b5','LX8q')](_0x34a2('‮b6','MFtj')+$[_0x34a2('‫b7','tHhi')]+_0x34a2('‫b8',')9OS'));continue;}break;}}else{console[_0x34a2('‫b9','5XOo')]('\x0a【脚本提示】：验证不通关,可能服务器原因,如需办理删号退款找@ls_soy');}};}else{console['log']('\x0a【'+$[_0x34a2('‫ba','QPgK')]+_0x34a2('‮bb','5XOo'));return!![];}}else{console[_0x34a2('‮84','TeM$')]('\x0a【脚本提示】：验证不通关,可能服务器原因,如需办理删号退款找@ls_soy');}}else{console['log'](_0x34a2('‮bc','yPJU'));return;}if(notify){if(subTitle){if(_0x3686cf[_0x34a2('‮bd','0Shh')]('Wspmn',_0x3686cf['UUGLN'])){console[_0x34a2('‫be','pBYR')](_0x34a2('‮bf','MFtj')+$['index']+_0x34a2('‮c0','k5#H'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮c1','w$n2')]+'\x20任务列表】:\x20网络请求失败';}else{await notify[_0x34a2('‮c2','5dDd')]($[_0x34a2('‫c3','Q@rQ')],subTitle);}}}})()[_0x34a2('‮c4','aV[Q')](_0x3d7388=>$[_0x34a2('‫c5','TeM$')](_0x3d7388))['finally'](()=>$[_0x34a2('‮c6','R1az')]());async function implement(){var _0x47595c={'eyBYi':function(_0x599147){return _0x599147();}};await _0x47595c[_0x34a2('‫c7','lan$')](muser);}function list(){var _0x214472={'lxIYR':'127.0.0.1','seFnf':function(_0x40c0f3,_0x5e3f5d){return _0x40c0f3==_0x5e3f5d;},'KCWHu':function(_0x5e6132,_0x3ed7a7){return _0x5e6132<_0x3ed7a7;},'jbJZV':function(_0x7d97be,_0x101d14){return _0x7d97be!==_0x101d14;},'zNLla':_0x34a2('‮c8','MFtj'),'WzpSg':_0x34a2('‮c9','EnxD'),'fPWzS':_0x34a2('‫ca','L9@V'),'QtbQn':function(_0x2adb9f,_0xd6235a,_0x487c80){return _0x2adb9f(_0xd6235a,_0x487c80);}};let _0x4eb088=_0x214472[_0x34a2('‫cb','H&fR')](Get_request,_0x34a2('‮cc','H&fR'),'');return new Promise((_0xee69fa,_0x246a66)=>{var _0x4dc40e={'NmFhs':_0x214472[_0x34a2('‫cd','^772')],'gFZou':function(_0x58dfb,_0x1b5378){return _0x214472['seFnf'](_0x58dfb,_0x1b5378);},'lDfRL':function(_0xfdb347,_0x1b226a){return _0x214472[_0x34a2('‫ce','WbVx')](_0xfdb347,_0x1b226a);},'oOfXS':function(_0x4c94de,_0x24bb86){return _0x214472['jbJZV'](_0x4c94de,_0x24bb86);},'IJkHB':_0x214472['zNLla'],'nLCwR':_0x34a2('‮cf','k5#H'),'YbTOS':function(_0x177422,_0x9e797c){return _0x177422(_0x9e797c);},'bVYMv':_0x214472[_0x34a2('‫d0','l2t!')],'EJuyq':_0x214472[_0x34a2('‫d1','E4Oi')],'cjbSF':_0x34a2('‫d2','zh6H')};$['get'](_0x4eb088,async(_0x309117,_0x296614,_0x2693ba)=>{try{if(_0x309117){console[_0x34a2('‮d3','Q@rQ')](_0x34a2('‮d4','1&46')+$[_0x34a2('‫d5','LX8q')]+_0x34a2('‮d6','1&46'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮d7','3%1*')]+'\x20任务列表】:\x20网络请求失败';}else{let _0x186a01=JSON[_0x34a2('‮d8','WbVx')](_0x2693ba);if(_0x4dc40e['gFZou'](_0x186a01[_0x34a2('‫d9','1fD4')],0x0)){for(let _0x3abc68=0x0;_0x4dc40e[_0x34a2('‫da','LX8q')](_0x3abc68,0x5);_0x3abc68++){if(_0x4dc40e['oOfXS'](_0x4dc40e[_0x34a2('‫db','lan$')],_0x4dc40e[_0x34a2('‮dc','EnxD')])){await _0x4dc40e[_0x34a2('‫dd','TeM$')](viewupsta,_0x186a01[_0x34a2('‮de','^772')]['listdata'][_0x3abc68]['id']);await $[_0x34a2('‫df','^772')](0x3a98);}else{app_soy_lfb_data=process['env'][_0x34a2('‫e0','CiP$')][_0x34a2('‮e1','@1y@')]('#');}}}else{if(_0x4dc40e[_0x34a2('‫e2','LX8q')]!=='ZQQlV'){IP_address=_0x4dc40e[_0x34a2('‫e3','QPgK')];}else{console[_0x34a2('‮e4','Fq(^')]('\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮e5','y6(2')]+_0x34a2('‮e6','k5#H')+_0x186a01[_0x34a2('‮e7','MFtj')]);}}}}catch(_0x530077){if(_0x4dc40e['EJuyq']===_0x4dc40e[_0x34a2('‮e8','1fD4')]){console['log'](_0x34a2('‮e9','HjJ6')+$[_0x34a2('‫ea','H&fR')]+_0x34a2('‮eb','qlUc'));}else{console[_0x34a2('‫ec','CiP$')](_0x530077,_0x296614);}}finally{_0xee69fa();}});});}function viewupsta(_0xdcdb98){var _0x254404={'IRkwO':function(_0x3b47c9,_0x274739){return _0x3b47c9!==_0x274739;},'LhzvW':'VoqVn','SkVNv':_0x34a2('‫ed','E4Oi'),'IGHWg':function(_0x5bf4df,_0x55d7b2){return _0x5bf4df===_0x55d7b2;},'oBOwY':_0x34a2('‫ee','I5zL'),'kgCJz':_0x34a2('‫ef','Dflm'),'cnkcP':function(_0x37f0d1){return _0x37f0d1();}};let _0x3f57ba=Post_request('indexad/viewupsta',_0x34a2('‮f0','MFtj')+_0xdcdb98);return new Promise((_0x42cde3,_0xb9d891)=>{var _0xd4a9d1={'rKcZN':function(_0x4f5d2f){return _0x254404[_0x34a2('‮f1','QPgK')](_0x4f5d2f);}};$['post'](_0x3f57ba,async(_0x2e4271,_0x2a3eca,_0x3e9fb1)=>{try{if(_0x2e4271){if(_0x254404[_0x34a2('‫f2','Dflm')](_0x254404['LhzvW'],_0x34a2('‮f3','qlUc'))){console[_0x34a2('‮f4','sHDO')](_0x34a2('‫f5','5XOo')+TG_ID+_0x34a2('‫f6','aV[Q'));}else{console['log'](_0x34a2('‫f7','k5#H')+$[_0x34a2('‮f8','R1az')]+'\x20观看广告】:\x20网络请求失败');subTitle+=_0x34a2('‮f9','Dflm')+$[_0x34a2('‫fa','J5d[')]+_0x34a2('‮fb','oB94');}}else{let _0x54ea97=JSON[_0x34a2('‮fc','Dflm')](_0x3e9fb1);if(_0x54ea97[_0x34a2('‮fd','KfC8')]==0x0){if('TTIvC'!==_0x254404[_0x34a2('‮fe','y6(2')]){console[_0x34a2('‫ff','t8dl')](_0x34a2('‫100','EnxD')+$['index']+_0x34a2('‫101','TeM$'));}else{_0xd4a9d1[_0x34a2('‮102',')9OS')](_0x42cde3);}}else{if(_0x254404[_0x34a2('‫103','E4Oi')](_0x254404['oBOwY'],_0x254404[_0x34a2('‮104','aV[Q')])){console[_0x34a2('‫be','pBYR')](_0x34a2('‫105','Q@rQ')+$[_0x34a2('‮106','E4Oi')]+_0x34a2('‫107','5dDd')+_0x54ea97[_0x34a2('‫45','1fD4')]);}else{console[_0x34a2('‮108','wXRg')](_0x34a2('‮109','Zj52')+$['index']+'\x20任务列表】:\x20'+_0x54ea97['msg']);}}}}catch(_0x32ccb6){console[_0x34a2('‫10a','EnxD')](_0x32ccb6,_0x2a3eca);}finally{if(_0x254404[_0x34a2('‫10b','CiP$')](_0x254404['kgCJz'],_0x34a2('‮10c','x(])'))){throw new Error(_0x34a2('‮10d','l2t!'));}else{_0x254404[_0x34a2('‫10e','LX8q')](_0x42cde3);}}});});}function muser(){var _0x15d673={'gvCMN':function(_0x3118f4,_0x457a25){return _0x3118f4==_0x457a25;},'soyBJ':_0x34a2('‮10f','@1y@'),'bwLqN':'Axhgi','mSuEx':function(_0x4b7928){return _0x4b7928();},'JxEIa':_0x34a2('‫110','tHhi'),'KQKFC':_0x34a2('‮111','#JkD'),'kMper':function(_0x334ca5,_0x456bc5,_0x4c8d7e){return _0x334ca5(_0x456bc5,_0x4c8d7e);}};let _0x493208=_0x15d673[_0x34a2('‫112','3%1*')](Post_request,_0x34a2('‮113','0rw('),'');return new Promise((_0x5092a7,_0x1bf62e)=>{var _0x2918b1={'uZKPh':function(_0x1ca0b2,_0x3357bc){return _0x15d673['gvCMN'](_0x1ca0b2,_0x3357bc);},'xnmBq':_0x15d673[_0x34a2('‮114','j[aC')],'kMcET':_0x15d673[_0x34a2('‫115','0Shh')],'VfXuu':function(_0x1971fe){return _0x15d673[_0x34a2('‮116','k5#H')](_0x1971fe);},'MpMzx':_0x15d673[_0x34a2('‫117','x(])')],'YsOMU':_0x15d673[_0x34a2('‮118','KfC8')]};$['post'](_0x493208,async(_0x4513ea,_0x505758,_0x5a901f)=>{try{if(_0x4513ea){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‫119','qlUc')]+'\x20用户信息】:\x20返回\x20'+_0x4513ea);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮11a','EnxD')]+_0x34a2('‫11b','FVA$')+_0x4513ea;}else{let _0x3f6fc1=JSON[_0x34a2('‫11c','j[aC')](_0x5a901f);if(_0x2918b1[_0x34a2('‫11d','HjJ6')](_0x3f6fc1[_0x34a2('‮11e','FVA$')],0x0)){if(_0x2918b1['xnmBq']===_0x2918b1[_0x34a2('‮11f','H&fR')]){console[_0x34a2('‫120','@1y@')](_0x34a2('‫121','#JkD')+$[_0x34a2('‮122','yPJU')]+'\x20领奖励】:\x20网络请求失败');subTitle+=_0x34a2('‫123','CiP$')+$[_0x34a2('‫124','lan$')]+_0x34a2('‮125','1fD4');}else{yue=_0x3f6fc1[_0x34a2('‫126','5XOo')][_0x34a2('‫127','yPJU')][_0x34a2('‮128','0Shh')];await _0x2918b1[_0x34a2('‫129','0Shh')](fenrun);}}else{console[_0x34a2('‫12a','zh6H')](_0x34a2('‫12b','5XOo')+$['index']+'\x20用户信息】:\x20'+_0x3f6fc1[_0x34a2('‮e7','MFtj')]);}}}catch(_0x1f442d){console[_0x34a2('‫12c','1&46')](_0x1f442d,_0x505758);}finally{if(_0x2918b1[_0x34a2('‫12d','x(])')]!==_0x2918b1[_0x34a2('‫12e','I5zL')]){_0x2918b1[_0x34a2('‫12f','TeM$')](_0x5092a7);}else{console[_0x34a2('‮130','AbfD')](e);}}});});}function fenrun(){var _0x5be714={'rMxoF':function(_0x47e005,_0x406152){return _0x47e005===_0x406152;},'RStap':_0x34a2('‮131','QPgK'),'fAOfO':function(_0x114ec0,_0x4606a1){return _0x114ec0===_0x4606a1;},'rAvLq':function(_0x17c39c,_0x44a76b){return _0x17c39c==_0x44a76b;},'idsag':function(_0x36031d,_0x469283){return _0x36031d>=_0x469283;},'jdAIY':'PuZyz','xlsPw':function(_0xc89ddb,_0x4a30ab){return _0xc89ddb(_0x4a30ab);},'ztMmT':function(_0x51d3d2,_0xf09135){return _0x51d3d2+_0xf09135;},'OcNjv':_0x34a2('‫132','0rw('),'bhFVG':function(_0x34a7dd){return _0x34a7dd();}};let _0x44d088=Post_request('fenrun/index','');return new Promise((_0x3954d8,_0x15d546)=>{var _0x5e9002={'lXKXE':function(_0x22632a){return _0x5be714[_0x34a2('‮133','1&46')](_0x22632a);}};$['post'](_0x44d088,async(_0x53c619,_0x13b211,_0x5c5475)=>{try{if(_0x5be714[_0x34a2('‮134','I5zL')](_0x5be714['RStap'],_0x5be714['RStap'])){if(_0x53c619){if(_0x5be714[_0x34a2('‫135','y6(2')](_0x34a2('‫136','HjJ6'),_0x34a2('‮137','l2t!'))){_0x5e9002[_0x34a2('‮138',')9OS')](_0x3954d8);}else{console[_0x34a2('‮139','L9@V')]('\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‫13a','Zj52')]+_0x34a2('‫13b','y6(2'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‫b7','tHhi')]+_0x34a2('‫13c','zh6H');}}else{let _0x4e12d6=JSON[_0x34a2('‮13d','E4Oi')](_0x5c5475);if(_0x5be714['rAvLq'](_0x4e12d6[_0x34a2('‮13e','0Shh')],0x0)){for(let _0x5ef585=0x0;_0x5ef585<_0x4e12d6['data'][_0x34a2('‫13f','l2t!')][_0x34a2('‮140','Q@rQ')];_0x5ef585++){if(_0x5be714[_0x34a2('‮141','lan$')](yue,_0x4e12d6[_0x34a2('‮142','MFtj')]['frbdata'][_0x5ef585][_0x34a2('‫143','lan$')])&&_0x4e12d6[_0x34a2('‫144','3%1*')][_0x34a2('‮145','MFtj')][_0x5ef585][_0x34a2('‫146','3%1*')]==0x2){if(_0x5be714[_0x34a2('‮147','5XOo')]===_0x5be714['jdAIY']){await _0x5be714[_0x34a2('‫148','tHhi')](lqsave,_0x5be714[_0x34a2('‫149','TeM$')](_0x5ef585,0x1));}else{app_soy_lfb_data=process[_0x34a2('‫14a','J5d[')]['soy_lfb_data'][_0x34a2('‮14b','AbfD')]('@');}}else{}}}else{if(_0x5be714[_0x34a2('‫14c','t8dl')](_0x5be714['OcNjv'],_0x34a2('‫14d','85xz'))){console[_0x34a2('‮14e','I5zL')]('\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮d7','3%1*')]+_0x34a2('‫14f','y6(2')+_0x4e12d6['msg']);}else{var _0x131aae=_0x34a2('‫150','y6(2')['split']('|'),_0x54496d=0x0;while(!![]){switch(_0x131aae[_0x54496d++]){case'0':console[_0x34a2('‫8b','MFtj')](_0x34a2('‫151','Zj52')+TG_ID+_0x34a2('‫152','5XOo')+mac+_0x34a2('‫153','wXRg'));continue;case'1':var _0x315ee3=CryptoJs[_0x34a2('‫154','lan$')][_0x34a2('‮155','lan$')][_0x34a2('‫156','LX8q')](reg_mac);continue;case'2':var _0x5b177b=CryptoJs[_0x34a2('‫157','zh6H')]['decrypt'](_0x303c73,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x34a2('‫158','H&fR')]['CBC'],'padding':CryptoJs[_0x34a2('‮159','Fq(^')][_0x34a2('‮15a','pBYR')]});continue;case'3':var _0x303c73=CryptoJs[_0x34a2('‫15b','tHhi')][_0x34a2('‮15c','@1y@')][_0x34a2('‫15d','sHDO')](_0x315ee3);continue;case'4':var _0x12994b=_0x5b177b['toString'](CryptoJs['enc'][_0x34a2('‫15e','EnxD')]);continue;}break;}}}}}else{console['log'](_0x34a2('‮15f','5XOo'));return![];}}catch(_0x2d2d9d){console[_0x34a2('‫8b','MFtj')](_0x2d2d9d,_0x13b211);}finally{_0x3954d8();}});});}function lqsave(_0x3ca329){var _0x480242={'zJXwG':function(_0x44821c,_0x16d8c9){return _0x44821c==_0x16d8c9;},'gbZCJ':function(_0x2cb6c3){return _0x2cb6c3();},'YCrtM':function(_0x31cec9){return _0x31cec9();},'GUIJa':function(_0x5bea99,_0x502e0c){return _0x5bea99!==_0x502e0c;},'DFIWY':'uVGZE','cMIxW':function(_0x3e58af,_0x497758,_0x3ab14b){return _0x3e58af(_0x497758,_0x3ab14b);}};let _0x49f891=_0x480242[_0x34a2('‫160','@1y@')](Post_request,_0x34a2('‮161','5XOo'),_0x34a2('‫162','AbfD')+_0x3ca329);return new Promise((_0x36c9c8,_0x515a45)=>{if(_0x480242['GUIJa'](_0x480242[_0x34a2('‫163','5dDd')],_0x480242[_0x34a2('‫164','LX8q')])){yyz_d=!![];}else{$['post'](_0x49f891,async(_0x56c9ed,_0x1c478f,_0x2c7a94)=>{try{if(_0x56c9ed){if(_0x34a2('‮165','L9@V')==='KkaCn'){console[_0x34a2('‫166','Zj52')](_0x34a2('‫167','j[aC')+$['index']+'\x20领奖励】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮168','5dDd')]+_0x34a2('‫169','L9@V');}else{throw new Error(_0x34a2('‫16a','qlUc'));}}else{let _0x5af174=JSON[_0x34a2('‮16b','I5zL')](_0x2c7a94);if(_0x480242['zJXwG'](_0x5af174['errcode'],0x0)){console['log'](_0x34a2('‫16c','AbfD')+$['index']+'\x20领奖励】:\x20'+_0x5af174[_0x34a2('‮16d','3%1*')]);}else if(_0x480242['zJXwG'](_0x5af174[_0x34a2('‫16e','l2t!')],0x65)){await _0x480242[_0x34a2('‮16f','j[aC')](list);}else{console[_0x34a2('‫170','oB94')](_0x34a2('‫171','pBYR')+$[_0x34a2('‮106','E4Oi')]+_0x34a2('‮172','wXRg')+_0x5af174[_0x34a2('‫173','85xz')]);}}}catch(_0x52af35){console['log'](_0x52af35,_0x1c478f);}finally{_0x480242[_0x34a2('‫174','sHDO')](_0x36c9c8);}});}});}function Post_request(_0x518391,_0x1aeac4){var _0x23d740={'JmOzH':_0x34a2('‮175','1&46'),'oElyF':_0x34a2('‮176','x(])')};let _0x326757=Math['round'](new Date()[_0x34a2('‮177','0rw(')]());return{'url':_0x34a2('‮178','MFtj')+_0x518391,'headers':{'autoken':token,'user-agent':_0x34a2('‫179','k5#H'),'Content-Type':_0x23d740['JmOzH'],'Content-Length':'0','Host':_0x34a2('‫17a','Dflm'),'Connection':'Keep-Alive','Accept-Encoding':_0x23d740['oElyF']},'body':_0x1aeac4};};function Get_request(_0x5a6747){var _0x464de2={'AymSo':_0x34a2('‮17b','MFtj'),'AsFTD':_0x34a2('‮17c','MFtj'),'PJtuE':'Keep-Alive','BHxge':_0x34a2('‫17d','l2t!')};return{'url':_0x34a2('‫17e','j[aC')+_0x5a6747,'headers':{'autoken':token,'user-agent':_0x464de2['AymSo'],'Content-Type':_0x464de2[_0x34a2('‫17f',')9OS')],'Content-Length':'0','Host':_0x34a2('‫180','1&46'),'Connection':_0x464de2['PJtuE'],'Accept-Encoding':_0x464de2[_0x34a2('‫181','k5#H')]}};};async function yyz_login(){var _0x483310={'wlQCI':_0x34a2('‫182','#JkD'),'aaCUG':function(_0x15f7fe,_0x1cf6f7){return _0x15f7fe===_0x1cf6f7;},'sIOFf':_0x34a2('‮183','5XOo'),'qyhSK':function(_0x56b700,_0x590f77){return _0x56b700==_0x590f77;},'RCmsD':function(_0xd91ea0,_0x3dca2b){return _0xd91ea0(_0x3dca2b);},'foCRS':function(_0x455ade,_0x280dc4){return _0x455ade==_0x280dc4;},'mVLQH':function(_0x53ce16){return _0x53ce16();},'RznSK':function(_0x2056b5){return _0x2056b5();},'nvbXa':'xMFvr','HhhvQ':function(_0x51ed76,_0x413739){return _0x51ed76!=_0x413739;},'EJrHf':function(_0x21be9b,_0x43a058){return _0x21be9b/_0x43a058;},'ezXuG':function(_0x27d117,_0x484b0a){return _0x27d117+_0x484b0a;},'ZZyeO':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x1dbd51=CryptoJs['enc'][_0x34a2('‫184','tHhi')][_0x34a2('‫185','y6(2')](reg_ip);var _0x22aa11=CryptoJs[_0x34a2('‮186','zh6H')]['Base64']['stringify'](_0x1dbd51);var _0x2393d0=CryptoJs[_0x34a2('‮187','HjJ6')]['decrypt'](_0x22aa11,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x34a2('‮188','oB94')][_0x34a2('‫189','CiP$')],'padding':CryptoJs[_0x34a2('‫18a','t8dl')][_0x34a2('‮18b','w$n2')]});var _0x4638a5=_0x2393d0[_0x34a2('‫18c','WbVx')](CryptoJs[_0x34a2('‮18d','1&46')][_0x34a2('‮18e','3%1*')]);if(_0x483310[_0x34a2('‫18f','oB94')](IP_address,_0x4638a5)){console[_0x34a2('‫190','l2t!')](_0x34a2('‮191','w$n2'));return!![];}var _0x587649=Math[_0x34a2('‮192','tHhi')](_0x483310['EJrHf'](Date[_0x34a2('‮193','FVA$')](),0x3e8));var _0x286f3b=CryptoJs[_0x34a2('‫194','AbfD')](''+TG_ID+mac+os[_0x34a2('‮195','1&46')]()+YZ)[_0x34a2('‫18c','WbVx')]();var _0x1719d1=_0x34a2('‫196','1&46')+TG_ID+_0x34a2('‮197','5XOo')+_0x286f3b+'&t='+_0x587649;var _0x38de91=CryptoJs[_0x34a2('‮198','zh6H')](_0x483310[_0x34a2('‮199','k5#H')](_0x1719d1,'&')+appid)[_0x34a2('‫19a','lan$')]();_0x1719d1=_0x1719d1+'&sign='+_0x38de91;let _0x35fb4c={'url':serverUrl+'user_logon','headers':{'user-agent':_0x483310[_0x34a2('‮19b',')9OS')]},'body':_0x1719d1};return new Promise((_0x33725b,_0x295ca4)=>{var _0x4e05be={'JuluP':function(_0xc234ee,_0x418e20){return _0x483310[_0x34a2('‫19c','L9@V')](_0xc234ee,_0x418e20);},'TDnMR':function(_0x2f660d,_0x4268cc){return _0x2f660d(_0x4268cc);}};if(_0x483310[_0x34a2('‮19d','Dflm')](_0x483310['nvbXa'],'xMFvr')){$['post'](_0x35fb4c,async(_0x292f5c,_0x50a628,_0x120bf4)=>{try{if(_0x292f5c){if(_0x483310['wlQCI']===_0x483310['wlQCI']){console[_0x34a2('‮19e','k5#H')]('\x0a['+TG_ID+_0x34a2('‫19f','k5#H')+_0x292f5c);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x292f5c;}else{CryptoJs=$[_0x34a2('‫1a0','5dDd')]()?_0x4e05be[_0x34a2('‮1a1','TeM$')](require,_0x34a2('‫1a2','pBYR')):'';}}else{if(_0x483310['aaCUG'](_0x483310[_0x34a2('‮1a3','E4Oi')],'DgZlY')){path=$[_0x34a2('‫1a4','^772')]()?_0x4e05be[_0x34a2('‫1a5','CiP$')](require,_0x34a2('‮1a6','CiP$')):'';}else{let _0x506673=JSON['parse'](_0x120bf4);if(_0x483310[_0x34a2('‮1a7','wXRg')](_0x506673[_0x34a2('‮1a8','Dflm')],0xc8)){let _0x502d87=_0x483310['RCmsD'](Format_time,_0x506673[_0x34a2('‮1a9','sHDO')]['info'][_0x34a2('‫1aa','x(])')]);console[_0x34a2('‮1ab','J5d[')]('\x0a['+TG_ID+_0x34a2('‫1ac','5dDd')+_0x502d87);await get_vip(_0x506673['msg']['token']);}else if(_0x483310[_0x34a2('‫1ad','85xz')](_0x506673[_0x34a2('‮1ae','5dDd')],0x71)){await _0x483310[_0x34a2('‮1af','sHDO')](yyz_user_reg);}else{console[_0x34a2('‮6a','3%1*')]('\x0a['+TG_ID+_0x34a2('‫1b0','j[aC')+_0x506673[_0x34a2('‮16d','3%1*')]);subTitle+='\x0a['+TG_ID+_0x34a2('‫1b0','j[aC')+_0x506673[_0x34a2('‮1b1','J5d[')];return![];}}}}catch(_0x8d816c){console[_0x34a2('‫190','l2t!')](_0x8d816c);}finally{_0x483310[_0x34a2('‮1b2','KfC8')](_0x33725b);}});}else{console[_0x34a2('‮1b3','Dflm')](e,response);}});}async function get_vip(_0x4e32bd){var _0x220636={'LNdCo':function(_0x1a7fa8,_0x969b8e){return _0x1a7fa8==_0x969b8e;},'QiXVq':function(_0x1fec1e,_0x3b5589){return _0x1fec1e===_0x3b5589;},'tArVT':_0x34a2('‫1b4','CiP$'),'UMDcB':function(_0xf6ceac,_0x4594e6){return _0xf6ceac==_0x4594e6;},'gQArn':function(_0x48facb,_0x2e57a0){return _0x48facb(_0x2e57a0);},'spuJc':function(_0x13690d){return _0x13690d();},'nMies':function(_0x42f0e3,_0x22d92f){return _0x42f0e3/_0x22d92f;},'PZpDD':function(_0x1e2d4e,_0x5d00c7){return _0x1e2d4e+_0x5d00c7;},'RtVmA':function(_0x27182c,_0x2e326d){return _0x27182c+_0x2e326d;},'BsDSp':_0x34a2('‫1b5','#JkD'),'ixZua':_0x34a2('‫1b6','EnxD')};var _0x3fe16d=Math[_0x34a2('‮1b7','k5#H')](_0x220636['nMies'](Date[_0x34a2('‮1b8','y6(2')](),0x3e8));var _0x146a15=_0x34a2('‫1b9','yPJU')+user_num+_0x34a2('‮1ba','1fD4')+_0x4e32bd+'&t='+_0x3fe16d;var _0x2d69dc=CryptoJs[_0x34a2('‮1bb','@1y@')](_0x220636['PZpDD'](_0x220636[_0x34a2('‫1bc','qlUc')](_0x146a15,'&'),appid))[_0x34a2('‫19a','lan$')]();_0x146a15=_0x220636[_0x34a2('‫1bd','pBYR')](_0x220636[_0x34a2('‫1be',')9OS')](_0x146a15,_0x220636['BsDSp']),_0x2d69dc);let _0x5246de={'url':serverUrl+_0x34a2('‫1bf','pBYR'),'headers':{'user-agent':_0x220636[_0x34a2('‮1c0','EnxD')]},'body':_0x146a15};return new Promise((_0x3c81be,_0x1dc7dd)=>{var _0x3a3b80={'akXGu':'bBRpH','AqhKz':_0x34a2('‮1c1','k5#H'),'gvgUr':function(_0x1c6825,_0x18ec6f){return _0x220636[_0x34a2('‮1c2','x(])')](_0x1c6825,_0x18ec6f);},'WRDFw':function(_0x1680a8,_0x3c0990){return _0x220636[_0x34a2('‮1c3','LX8q')](_0x1680a8,_0x3c0990);},'otagf':_0x220636[_0x34a2('‮1c4','wXRg')],'OfdIj':function(_0x171855,_0x232a0b){return _0x220636['UMDcB'](_0x171855,_0x232a0b);},'psgvK':function(_0x11a6af,_0xb2b874){return _0x220636[_0x34a2('‮1c5','zh6H')](_0x11a6af,_0xb2b874);},'maJSW':function(_0xfdd514,_0xf2ec4c){return _0x220636['gQArn'](_0xfdd514,_0xf2ec4c);},'diesc':function(_0x8e6086){return _0x220636[_0x34a2('‮1c6','w$n2')](_0x8e6086);}};$[_0x34a2('‫1c7','pBYR')](_0x5246de,async(_0x4a6798,_0x51b567,_0x2a5d02)=>{if(_0x3a3b80[_0x34a2('‮1c8','0Shh')]!==_0x3a3b80[_0x34a2('‫1c9','1&46')]){try{if(_0x4a6798){console['log']('\x0a['+TG_ID+_0x34a2('‫1ca','5XOo')+_0x4a6798);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x4a6798;}else{let _0x479baa=JSON[_0x34a2('‫1cb','AbfD')](_0x2a5d02);if(_0x479baa[_0x34a2('‫1cc','sHDO')]==0xc8){yyz_d=!![];}else if(_0x3a3b80['gvgUr'](_0x479baa['code'],0xca)){if(_0x3a3b80['WRDFw'](_0x34a2('‫1cd','lan$'),_0x3a3b80[_0x34a2('‫1ce','aV[Q')])){console[_0x34a2('‫43','0rw(')]('\x0a['+TG_ID+_0x34a2('‮1cf','qlUc')+_0x479baa[_0x34a2('‫1d0','j[aC')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x479baa[_0x34a2('‮1d1','LX8q')];}else{console[_0x34a2('‮1d2','lan$')](e,_0x51b567);}}else if(_0x3a3b80[_0x34a2('‮1d3','WbVx')](_0x479baa[_0x34a2('‫1d4','oB94')],0xcd)){if(_0x3a3b80[_0x34a2('‮1d5','aV[Q')](_0x34a2('‮1d6','pBYR'),_0x34a2('‮1d7','#JkD'))){throw new Error(_0x34a2('‫1d8','l2t!'));}else{console[_0x34a2('‫1d9','y6(2')]('\x0a['+TG_ID+_0x34a2('‫1da','LX8q')+_0x479baa[_0x34a2('‫1db','AbfD')]);subTitle+='\x0a['+TG_ID+_0x34a2('‫1dc','sHDO')+_0x479baa[_0x34a2('‫1dd','w$n2')];}}else{if(!yyz_Kami){console[_0x34a2('‮1d2','lan$')]('\x0a['+TG_ID+_0x34a2('‮1de','85xz'));subTitle+='\x0a['+TG_ID+_0x34a2('‫1df',')9OS');return![];}else{await _0x3a3b80[_0x34a2('‫1e0','E4Oi')](card,_0x4e32bd);}}}}catch(_0x574a5b){console['log'](_0x574a5b);}finally{_0x3a3b80[_0x34a2('‮1e1','TeM$')](_0x3c81be);}}else{IP_address=_0x2a5d02;}});});}async function yyz_user_reg(){var _0x994dc9={'hRPxm':_0x34a2('‮1e2','5XOo'),'UrBgb':function(_0x2542f6,_0xe47fec){return _0x2542f6===_0xe47fec;},'OtLuB':_0x34a2('‫1e3','w$n2'),'ysOCY':function(_0x28d803,_0xd9b24b){return _0x28d803!==_0xd9b24b;},'HqcVH':_0x34a2('‫1e4',')9OS'),'LiCZQ':function(_0x15de1d){return _0x15de1d();},'WWlcG':function(_0x390f5c,_0x1429da){return _0x390f5c+_0x1429da;},'EvIJO':function(_0x5eac60,_0x79dc6c){return _0x5eac60+_0x79dc6c;},'Ohihq':function(_0x1720f4,_0x425e34){return _0x1720f4+_0x425e34;},'XeGUx':_0x34a2('‫1e5','oB94')};if(!Tips&&!YZ){if(_0x994dc9[_0x34a2('‮1e6','@1y@')](_0x994dc9['HqcVH'],_0x994dc9[_0x34a2('‫1e7','k5#H')])){throw new Error(_0x34a2('‮1e8','0Shh'));}else{console[_0x34a2('‮108','wXRg')](_0x34a2('‫1e9','CiP$'));return![];}}await _0x994dc9[_0x34a2('‮1ea','3%1*')](yyz_getip);var _0x553015=Math[_0x34a2('‮1eb','Q@rQ')](Date[_0x34a2('‮1ec','L9@V')]()/0x3e8);var _0x251349=CryptoJs[_0x34a2('‮1ed','L9@V')](''+TG_ID+mac+os['hostname']()+YZ)[_0x34a2('‮1ee','EnxD')]();var _0x14f643='user='+TG_ID+_0x34a2('‮1ef',')9OS')+_0x251349+_0x34a2('‮1f0','Fq(^')+_0x553015;var _0x1f3f03=CryptoJs[_0x34a2('‮1f1','1&46')](_0x994dc9['WWlcG'](_0x994dc9[_0x34a2('‫1f2','LX8q')](_0x14f643,'&'),appid))['toString']();_0x14f643=_0x994dc9[_0x34a2('‮1f3','QPgK')](_0x994dc9['Ohihq'](_0x14f643,_0x994dc9['XeGUx']),_0x1f3f03);let _0x2953eb={'url':serverUrl+'user_reg','headers':{'user-agent':_0x34a2('‫1f4','@1y@')},'body':_0x14f643};return new Promise((_0xaf4fe1,_0x1198da)=>{var _0x8846d9={'XTfas':_0x994dc9[_0x34a2('‮1f5','1fD4')],'brpQV':function(_0x418a63){return _0x418a63();},'ovsyx':function(_0x480b39,_0x3cffbb){return _0x480b39==_0x3cffbb;},'MifiC':function(_0x5d0156,_0x36cfe2){return _0x994dc9[_0x34a2('‮1f6','pBYR')](_0x5d0156,_0x36cfe2);},'VcBvD':_0x34a2('‮1f7','wXRg'),'PgcUt':_0x994dc9[_0x34a2('‫1f8','x(])')]};$[_0x34a2('‫1f9','5dDd')](_0x2953eb,async(_0x19e05f,_0x287935,_0x21ed4e)=>{try{if(_0x19e05f){console['log']('\x0a['+TG_ID+_0x34a2('‮1fa','Dflm')+_0x19e05f);subTitle+='\x0a['+TG_ID+_0x34a2('‮1fb','1fD4')+_0x19e05f;}else{let _0x251fe1=JSON[_0x34a2('‫6e','sHDO')](_0x21ed4e);if(_0x251fe1['code']==0xc8){let _0x401388=CryptoJs[_0x34a2('‮99','I5zL')]['Utf8'][_0x34a2('‮1fc','1fD4')](IP_address);let _0x54c199=CryptoJs[_0x34a2('‫1fd','x(])')][_0x34a2('‮1fe','t8dl')](_0x401388,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x34a2('‮1ff','I5zL')][_0x34a2('‫200','aV[Q')],'padding':CryptoJs[_0x34a2('‮201','5dDd')][_0x34a2('‮202','R1az')]});let _0x456bbb=_0x54c199[_0x34a2('‫203','EnxD')][_0x34a2('‮204','AbfD')]()[_0x34a2('‮205',')9OS')]();_0x401388=CryptoJs['enc']['Utf8'][_0x34a2('‫1cb','AbfD')](mac);let _0x38aeb6=CryptoJs[_0x34a2('‫157','zh6H')][_0x34a2('‫206','L9@V')](_0x401388,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x34a2('‮207','Dflm')][_0x34a2('‫95','x(])')],'padding':CryptoJs[_0x34a2('‫208','H&fR')][_0x34a2('‮209',')9OS')]});let _0x4adb33=_0x38aeb6[_0x34a2('‮20a','sHDO')]['toString']()['toUpperCase']();try{fs[_0x34a2('‫20b','y6(2')](_0x8846d9[_0x34a2('‮20c','E4Oi')],_0x456bbb+'&'+_0x4adb33);}catch(_0x30005b){}console[_0x34a2('‫ff','t8dl')]('\x0a['+TG_ID+_0x34a2('‮20d','0Shh')+IP_address+_0x34a2('‫20e','j[aC')+mac);await _0x8846d9['brpQV'](yyz_login);}else if(_0x8846d9[_0x34a2('‫20f','Q@rQ')](_0x251fe1['code'],0x75)){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x251fe1[_0x34a2('‮210','5dDd')]+'，该TG_ID/设备/IP已被注册');return![];}else{console[_0x34a2('‫1d9','y6(2')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x251fe1[_0x34a2('‫211','H&fR')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x251fe1[_0x34a2('‮212','5XOo')];return![];}}}catch(_0x1d5b84){console[_0x34a2('‮213','aV[Q')](_0x1d5b84);}finally{if(_0x8846d9[_0x34a2('‮214','tHhi')](_0x8846d9[_0x34a2('‫215','I5zL')],_0x8846d9[_0x34a2('‫216','oB94')])){console['log']('\x0a['+TG_ID+_0x34a2('‮217','yPJU')+_0x19e05f);subTitle+='\x0a['+TG_ID+_0x34a2('‫218','x(])')+_0x19e05f;}else{_0x8846d9[_0x34a2('‮219','I5zL')](_0xaf4fe1);}}});});}async function card(_0x31f3cc){var _0x21f437={'EvsII':_0x34a2('‫21a','pBYR'),'VyawK':function(_0x35d9c5,_0x2027e3){return _0x35d9c5!==_0x2027e3;},'SqIeT':function(_0x31a8a6,_0x58787f){return _0x31a8a6===_0x58787f;},'mpSjq':'avUnf','CZAxf':function(_0x5cd91c,_0x2672a3){return _0x5cd91c==_0x2672a3;},'QTeoz':_0x34a2('‫21b','I5zL'),'tQDpe':_0x34a2('‮21c','k5#H'),'ilzNv':function(_0x1e2524,_0x2adb2c){return _0x1e2524/_0x2adb2c;},'WcvfN':function(_0x40f8f5,_0x2e9b33){return _0x40f8f5+_0x2e9b33;},'tQfcH':function(_0xa732d2,_0x5f2511){return _0xa732d2+_0x5f2511;},'CXCJI':function(_0x271509,_0x2a3774){return _0x271509+_0x2a3774;},'erell':_0x34a2('‮21d','5dDd')};var _0x3e4938=Math['floor'](_0x21f437[_0x34a2('‮21e','H&fR')](Date[_0x34a2('‮21f','85xz')](),0x3e8));var _0x1fa450='token='+_0x31f3cc+'&kami='+yyz_Kami+_0x34a2('‮220','H&fR')+_0x3e4938;var _0x3816fe=CryptoJs[_0x34a2('‮221','LX8q')](_0x21f437[_0x34a2('‮222','j[aC')](_0x1fa450,'&')+appid)[_0x34a2('‮223','TeM$')]();_0x1fa450=_0x21f437['tQfcH'](_0x21f437[_0x34a2('‮224','tHhi')](_0x1fa450,'&sign='),_0x3816fe);let _0x49ccb6={'url':serverUrl+_0x34a2('‮225','Dflm'),'headers':{'user-agent':_0x21f437['erell']},'body':_0x1fa450};return new Promise((_0x56a3ff,_0x23adc5)=>{if(_0x21f437[_0x34a2('‮226','85xz')](_0x34a2('‫227','MFtj'),_0x21f437[_0x34a2('‫228','Dflm')])){$[_0x34a2('‮229','yPJU')](_0x49ccb6,async(_0xd19832,_0x5ee0d2,_0x13ee25)=>{var _0xc6c36e={'OKkqq':_0x21f437[_0x34a2('‫22a','H&fR')]};if(_0x21f437[_0x34a2('‮22b','3%1*')](_0x34a2('‫22c','yPJU'),'twSin')){try{if(_0x21f437['SqIeT'](_0x34a2('‫22d','5dDd'),_0x21f437['mpSjq'])){console['log']('\x0a['+TG_ID+_0x34a2('‮22e','sHDO')+result['msg']+_0x34a2('‮22f','TeM$'));yyz_d=!![];return![];}else{if(_0xd19832){console[_0x34a2('‮230','FVA$')]('\x0a['+TG_ID+_0x34a2('‫218','x(])')+_0xd19832);subTitle+='\x0a['+TG_ID+_0x34a2('‮231','oB94')+_0xd19832;}else{let _0xe40dcf=JSON[_0x34a2('‫232','wXRg')](_0x13ee25);if(_0x21f437['CZAxf'](_0xe40dcf['code'],0xc8)){if(_0x21f437[_0x34a2('‫233','y6(2')](_0x21f437[_0x34a2('‫234','l2t!')],_0x34a2('‮235','k5#H'))){console[_0x34a2('‫236','KfC8')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0xd19832);subTitle+='\x0a['+TG_ID+_0x34a2('‫237','AbfD')+_0xd19832;}else{console['log']('\x0a['+TG_ID+_0x34a2('‮238','0Shh')+_0xe40dcf[_0x34a2('‮239','QPgK')]+_0x34a2('‫23a','y6(2'));yyz_d=!![];return![];}}else{console[_0x34a2('‫b9','5XOo')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0xe40dcf[_0x34a2('‮23b','EnxD')]);subTitle+='\x0a['+TG_ID+_0x34a2('‫23c','Zj52')+_0xe40dcf['msg'];return![];}}}}catch(_0x3b0065){console[_0x34a2('‮1b3','Dflm')](_0x3b0065);}finally{_0x56a3ff();}}else{fs[_0x34a2('‫20b','y6(2')](_0xc6c36e['OKkqq'],Now_ip+'&'+Now_mac);}});}else{console[_0x34a2('‫23d','R1az')]('\x0a['+TG_ID+_0x34a2('‫23e','x(])')+result[_0x34a2('‫23f','TeM$')]);subTitle+='\x0a['+TG_ID+_0x34a2('‮240','J5d[')+result[_0x34a2('‮241','Q@rQ')];}});}function yyz_getip(){var _0x297301={'ltqtO':function(_0x476f05){return _0x476f05();},'aFYXF':_0x34a2('‮242','#JkD'),'wMqtZ':function(_0x14be5){return _0x14be5();},'uXIia':_0x34a2('‮243','w$n2')};let _0xf339d7={'url':_0x34a2('‫244','y6(2')};return new Promise((_0xf23053,_0x593e7c)=>{var _0x417719={'GVumv':function(_0x3d2d02){return _0x297301[_0x34a2('‮245','yPJU')](_0x3d2d02);},'ACvra':function(_0x279f16,_0x724890){return _0x279f16===_0x724890;},'kclAk':_0x34a2('‫246','tHhi'),'WWEzU':_0x297301[_0x34a2('‮247','@1y@')],'BiyJa':_0x34a2('‫248','oB94'),'ZSyly':function(_0x581ef8){return _0x297301[_0x34a2('‮249','H&fR')](_0x581ef8);}};if(_0x297301[_0x34a2('‮24a','Zj52')]!==_0x34a2('‮24b','l2t!')){console[_0x34a2('‮36','qlUc')](_0x34a2('‮24c','qlUc')+$[_0x34a2('‮24d','Dflm')]+'\x20领奖励】:\x20'+result['msg']);}else{$[_0x34a2('‮24e','0Shh')](_0xf339d7,async(_0x2cac61,_0x50117b,_0x49bc3e)=>{var _0xd744d1={'PPjrD':function(_0xb4ab8){return _0x417719[_0x34a2('‫24f','TeM$')](_0xb4ab8);}};try{if(_0x2cac61){if(_0x417719[_0x34a2('‮250','lan$')](_0x417719[_0x34a2('‫251','TeM$')],_0x417719[_0x34a2('‫252','zh6H')])){IP_address=_0x417719[_0x34a2('‫253','MFtj')];}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x34a2('‮254','1fD4')]+_0x34a2('‫255','Zj52')+result['msg']);}}else{IP_address=_0x49bc3e;}}catch(_0xf8afd9){if(_0x417719['ACvra'](_0x417719['BiyJa'],_0x417719[_0x34a2('‮256','E4Oi')])){IP_address=_0x417719[_0x34a2('‫257','1&46')];console['log'](_0xf8afd9,_0x50117b);}else{_0xd744d1[_0x34a2('‮258','lan$')](_0xf23053);}}finally{_0x417719[_0x34a2('‮259','#JkD')](_0xf23053);}});}});}function Format_time(_0x5bfa95){var _0x18131e={'UmjcW':function(_0x6ef6a2,_0x664976){return _0x6ef6a2*_0x664976;},'djZKu':function(_0x42ffd5,_0x42727c){return _0x42ffd5+_0x42727c;},'HXvpr':function(_0x501215,_0x59e8bc){return _0x501215<_0x59e8bc;},'pqpFi':function(_0xf14fe2,_0x1ed6a1){return _0xf14fe2+_0x1ed6a1;},'PXHLf':function(_0x24aee8,_0x454d1f){return _0x24aee8+_0x454d1f;},'UmeZZ':function(_0x5acbf2,_0x1f9c45){return _0x5acbf2+_0x1f9c45;},'bRCfO':function(_0x44b8c4,_0x594824){return _0x44b8c4+_0x594824;},'SjOkQ':function(_0x4a4fb5,_0xeb7438){return _0x4a4fb5+_0xeb7438;}};var _0xbd1272=new Date(_0x18131e[_0x34a2('‫25a','tHhi')](_0x5bfa95,0x3e8));var _0x11dc80=_0x18131e[_0x34a2('‮25b','wXRg')](_0xbd1272['getFullYear'](),'-');var _0x414c40=(_0x18131e[_0x34a2('‫25c','j[aC')](_0x18131e[_0x34a2('‫25d','pBYR')](_0xbd1272['getMonth'](),0x1),0xa)?'0'+_0x18131e[_0x34a2('‫25e','KfC8')](_0xbd1272['getMonth'](),0x1):_0x18131e[_0x34a2('‫25f','oB94')](_0xbd1272[_0x34a2('‫260','l2t!')](),0x1))+'-';var _0x4fd338=_0x18131e[_0x34a2('‮261','EnxD')](_0xbd1272['getDate'](),'\x20');var _0x1ffde1=_0x18131e[_0x34a2('‮262','0Shh')](_0xbd1272[_0x34a2('‮263','L9@V')](),':');var _0x3ca028=_0x18131e['bRCfO'](_0xbd1272[_0x34a2('‫264','qlUc')]()<0xa?_0x18131e['bRCfO']('0',_0xbd1272['getMinutes']()):_0xbd1272[_0x34a2('‮265','5XOo')](),':');var _0xeaeae2=_0xbd1272['getSeconds']();let _0x272806=_0x18131e[_0x34a2('‮266','KfC8')](_0x18131e[_0x34a2('‮267','Dflm')](_0x18131e[_0x34a2('‮268','1fD4')](_0x11dc80,_0x414c40)+_0x4fd338,_0x1ffde1)+_0x3ca028,_0xeaeae2);return _0x18131e[_0x34a2('‮269','Fq(^')](_0x18131e[_0x34a2('‮26a','3%1*')](_0x18131e[_0x34a2('‫26b','zh6H')](_0x11dc80+_0x414c40+_0x4fd338,_0x1ffde1),_0x3ca028),_0xeaeae2);};_0xodl='jsjiami.com.v6';


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