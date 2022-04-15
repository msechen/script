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

var _0xodi='jsjiami.com.v6',_0xodi_=['‮_0xodi'],_0x59e6=[_0xodi,'w4LCkX4UGg==','w40WFMOe','aF1tShw=','IcOhwrlFcQ==','wqcraHrDkQ==','ZsK1w5s1w7vCpUBQwr/CksOFwqo=','wqnDlXdLw4c=','AsKiwqo=','YMKPXOeaieW9seWnqei3ucOwccOK','wpsNH1DCiw==','woHDu8OQwqtE','I8KiwrfDjsKFwpLCqD/DmMORwodMw7EdAcONw5XCkcO9TcKDw7o+PMKdTsOyW8KawqTDnQUewpYEMXgEPMKDQ8KoFsKEfsOESgoRwp0sFsKOwqQDwrzCuz93woVNw7MzwpTDssKdwo0BaFnDm38Cw4DDrQ/Cqm9Bw5cvRcKxw5J2w5HDoFRjwr4iw7tHwrguLjXCsUMmw7zDqsKQVHHCkHp+wp43wpzDv1DDicO3wpMcwqUePsOrw5LCkcODUlrCjlwww4TDpsKpw5/Con4DJcOWDMKNF1DDg8Ofw4/CocKFZXbCnTrDhsOcw65jcUhswpFQCg7DhsORMlPDtMKdV3kxwq1Jw5bCsF18w5Ffwo7CjMKxSnrCqMOhw7oYwrwUwqHCtBYgesKbw5zDpWFOwqUKCMO7EcOHw6vCpwVTP8OnCsOcwpLDiA3DiMOJFD3Dqg==','w7/jg7HkvZDogKzmjIHnpJ/jgq/vvK/pqpror5bohKfmn69rwokd5aef6LaLw4/orZbli4bkvLjml7HohqXmnqfku7LkubTmhZDlh4flrao=','w5DCknoeBg==','LcOrXsK+WQ==','Zzwq','BsKiwr7Dk8KHwp/CpHU=','LRUuw4NgwofCuMO4','w6TDrMOmw5gR','wpDCjnQCB8Oka8K0w65dwrU7w78hwqUZwoHCl3jDmsOLZcKYI8ObwoTCnU8IWMOZTcKyNMKFYHo=','WMKewpc=','wqQPXX/DkQ==','WyDDksKTwrh9aMOC','Sg3Du8OBb8O4','wq7DvVdsw50=','R3RFcSs=','T13DpMOqwqE=','LsOBwrzDrMKB','LUjCgcOBw6A=','HSMtw5hw','ZjlLw7g0','CMOzworDicKd','w4bCkWYF','AsOrwrTCsMKY','LcOnbsKS','w7nCljMxbQ==','wo4LFE3Clw==','ZuaIgOS6n+WKluS+nOi2kxTCmMOGw7xuJwTCq8KPw7XDoeivneiEnOihmeWsveihrsON','wr/DpMO6','ZcKBWQ==','77yY6K2TwrnChcO4csKQw6XorbHlp4ZaZEjltZHoo4rmsKzlh4A=','cUrCsw==','wqjDmyzkvZbnl7nljYTlrbgPNg==','Eh8a5rKc5YaC5aeR6La8TMOG','wpQTQw==','wofCnzvms4rlhL/lp4vot6LDmcKs','LULCvA==','wq/DnXpMw7Q=','TcK6RMKbw6k=','wro2YRPDkg==','YsO5wqA=','wpoRfETDlA==','KsO9wpbCgMKY','w6LCjgEmeg==','CMOMJcORw5M=','bGknCnk=','wr7Dq0hkw6M=','RsOYwobCtcOI','wq3Cl8KDwqPCuw==','HMOkwoFGQg==','w4AWBw==','woMyGQ==','P29uBmg=','woHCjl9dwqNMw5BS','VnBTYC7Cs10=','cMOaBsKbSMK0wr3DpWTDhHjDpyY1WMK1wqvDqcOaIMOjwrNTQsOoecOyw7bCjC3CuysUGQ0uHsKQw6vCvDPDuMKswqxdCHTClsKpwoXCq0toJjjCqsONw6MGwqQbw4QjwrsEVsOJwrTChcKVCD8ow5tXMizDnkV8an7ChcKvLcOqw7p4OMKHwpDCiQTCh8OQw4A9wqfCnBTDqzvDqQjDn8O8w4XCo3QgDxVYw5Ayw7MUDsOFw6DCvDYLE8K+AmTDssKUHyZdE8OLw4kWwpx/M2TCkcOPSsOzw5LCrmrDlBcywrVbwoAHw6x2BsOqw6gzL3vCmzIEd8KYw7nDunQGw6nDj8OPw4gcRcKkLG7Dp8KJDcK9FnfDucOyM8KfCmRFw73Ci8OJK8Kfw6/DhsO4e8OEwroPwp7DrzLCmMKNDsKNGxR4IMOuAsKPWcK6XA==','NV/DpMOSCQ==','wrzCr2pDwrU=','wp3Cj8KDwonCmg==','wo7CnwMkBw==','K8O/wqzDmcKC','wqbDlG00bA==','wqA3GV3Cjw==','wp3CuMOHw5jCmg==','wrfCvio1CQ==','wqvDmMO8wpta','G2LDosOHKQ==','w7lAdiPCiA==','wpgCQx9/','KcOMwojDvMKb','aMO2wqMBfA==','UsKnR8KpwrA=','wopQXcKMZw==','w5Dmi5vkuJbliJLkvK7otqzDp8KAw77Cu8O5w4g7T8OzEQLDl+ivs+iGjeijuuWuj+ihvBI=','PUHDn8OXLw==','wqTCmcKAwofCmA==','MsOkG8O9w5E=','w59Mwp54wq4=','OWtwHGs=','HsOJNsOUw4g=','wqYcJlzCrg==','WAXDs0wi','w4tywppfwpA=','EWTDqcOY','CExVJmU=','AQ3DtQ==','w7PjgbBXbBfoh6bmnYbmj4HnpKwRwo596LWh5Y6HwpI=','b+eUjeaIjeS+leaBoeODscKjVui8suWYqMOy','w5DjgrVoTcOK6Ieg5p+r5oyz56a2w6/CpMKR6LWy5Y6Vwrk=','wpbnl5bmiKLkvpDmgJvjgoI+w6bovZ7lmr7CpA==','wrDDg8O1wods','LEpeEQ==','B8OHU8Kuwq4=','wq0nQ1fDsw==','B8OCQA==','MUTCsuaxjuWGjeWntOi0kcOMwonovYzlm5Uq','aj7Cr+moiOisouiEnuaetljDow==','c3Ey','wqbCiMKL','EcOlwqLCpg==','CsKFwpXDjsKu','bMOXwqHCtMO2','ABHDtQ==','wpNMDOaUqumHo+mrtuivkRDDnA==','w7zDrMOk','eEvCog==','wobCjnV2wr1Dw5xqcnZJwqI=','w6LDr8Ovw4NY','I8KawpjDksKn','XXpA','YMKPXOawmuWGqOWnqei3ucOwcQ==','w6ozAeS8r+eXq+WOruWtk8O0wrzmsKPmnK3ljZPlr43ljq/kvpLnlKk=','w7NDUOS/hOeXlOWPjOWsqsObwq3msarmnYvljpjlrJjljIvkvLrnlbw=','U+OBqg7DmGvoh7Tmn7rmjY/np4DDhitO6LWl5Y2EwrU=','woXCrHlawrI=','KFDCncO3w4c=','woMOY0c7','wrfDnVkzaw==','U1lLUDo=','w5Frwop9wo7Dk8KQw5oqwqnDu11iMU7Co8O6wpfDjHMRwrvDhMORw5FIXgfDujdLYsOiwp5vZHouFcKPw4Njw4HDnkvCtMKOw7vDkizCoWPCp2rDisKRwqdTw4VRwojDlwsFS8OFelDCocOQwoHCmRkPw6bCjBPDlcK5LMKrw7NbwoTDvkDDh0bCjEjCuyMCw5Z7wp90I03DnsO4woLDhcOUJjseYAPDrcKCC8OlO8KawrYZdMOQPMOpFMO/NAtGwqtUw5VFwpTCi8K7w7/DpMK9UcO+CUMEbcODwqlWwojDocO7wqnCs8KMcwFaw5NMw49GfQnDkQbCnsKhw47DrGoGwrvCjx/CsXo4GMKGCcO4PgFHwrvCrMO8wrVlW17DicKvw4vDpXUKwovCocOFwrp6VScww7AKW8OzWh9WMwvCvMO1w6kFMkJ8w43CvcO6Zg==','wpgXMg==','wrjDkcKew4B2','ScOow6IMfQ==','wrTDimw=','aUrCv1HDoMOD','aMOja8Kawoll','UGHDoQ==','w6LDhcOTw4hc','w6hrwqNgwpDDlsKfwpI=','wrjClsO4w7/CuQ==','w63CiMKFwqvCp8OH','D8O0c8Kvew==','AsOlwrXCtw==','KMOawoTCqMKW','w4IWFw==','WsKtw7bkvIrnlIPljajlrKwAwqXovKTlmY7Dtw==','wr4XXilJ','wq8WQjs=','wo88RQvDgA==','wozCt8KDwoDCgw==','EcOhwpPChsKX','ScKMw43kvr3nlo/ljZrlrJLDsMOv','77+l6IW75py85bef5q+D5biK5L2a55WI','DcOkwr8=','wqJIReS9vueVtuWNoOWvmTvDtw==','M8O3w63kv5jnl4Hljp/lrI8qw40=','wqfClMKL','wpV5wp8bw4I=','UuS5seWJp+WLlOiileOAm17DsA==','wpbDmcOswphd','YADDo2oT','wpnDvEA1TQ==','w5/CkHEUDA==','w6vpob3lprrlib3jg5jDgMKs','wqMFSw==','wqwzYVnDlg==','GmNxIWY=','G0NbO30=','wr3Dtnnpq7LorrHoh7HmnZU4FQ==','wqvDhMO1wrVs','CMKJwqPDhsK4','OsOjA8Oww7V4w5LDhjl6wp4=','PFFtIUU=','wrNSwq0bw5Y=','FW7DucOwL8K2wpLCnQ==','IcODwrZ5Tw==','KcOtfsK6wo82wo/DhQ==','d8O+w54AaQ==','wqzCqcOcw5nCqDDDhQ==','YMOywqI9RHzCmEk=','VcKufsKUw4E=','w5BsVR3CqsKhw6DCusO5w7E=','BsOuwqzDi8KOF8KROMOoZQ==','aMKBYMKvw7M=','w6PCnCYlRA==','RkbDncOzwrI=','WmDDl8ODwpY=','fMKpw6wFw7PCpg==','U+aIhOS5sOWKh+S+j+i2uMO2w5DCqcOLKuiulOiGqeijv+WsnOigo0w=','YcKBcMKSwrXCqA==','wrDDksKVw4opw4PCmsOd','A8OZU8KXJyZew50Jw4MpEsO/UBXDssKaPMO6wrdkwqkcw5Zkw53CpWbChFccw4srfHXCm8OKZ8OVw6kuw6INFQ==','w7vCkW8YGMO/ZcOpwr9OwrQpw6RCw7lBw4PCkWHDn8OWWMKjesKTw4HDnVleGcO8T8K/bcOVPmfCj8O9K8OKfALCmMKPaX/CiwbDhcK0GkANwr7DkUAjc8K5GsKZwpbCtcOowr3CsjPDontAdMKPwqNXM8OiRcKhCcOlw6AQADbCvMKeejrCrCfDssO+I8OUNHzCtQXCuMOlWcO5wpwKB8Kkwrs0wqYDCcO6ACHChmTDscOawow8UMKiwrHDt8KVwpvCjCcpPQ==','DMOJT8KOEMKkw6zCtmM=','VGFP','D8KpwqnDlcKMwo3Cug==','wq3CoyMXHMKHGC0Aw5IVUsODwqbCrcOPw4nDm8KmwqjCrx3Dl8OFN8OGw4vDvCHCkcO8w6rCtXswwrdzHn3CscOMU1vDhETCklPChm7Dh8KQHsOvVDI9wrfClMOFInjDjMKGw4nCk8OYFR83w5h4aAnCiT1tB8OuBsO0LcK6ZsK9AMOmDMO2w5M8P8Kkw6DDpMKtwqvClsOzYcK/OcKiAF86wpvDkyPDtcKONStfwpPChsOIMgw6wpvDpGfDj8KWwrEmB8KqFsKZQsKIO8O3w57CvMKewrR3TcOFw6HCoRsIw6Ilw59CPjTDqWnCmcKZKCHCgcKQS8O1A8OiwoZow4ZNBMKBwrNxwpXCiwvDoMOqclvDscO+w6wUBw==','AMO7wqjDtMKCF8KfIsOleSwqwqEVBcKHwpXCtsOiw7xzw5E9NMOrw71+HyURHVrDvg==','ThbDoxE2ew3DsxUdT8KYw47Dpn/Cp8OXD8Kx','wqt+XcKR','wox2wo8W','UcKmRcK0w5M=','Zj1dw4sX','QBXDjMKpwq8=','wrxaw5YMwpI=','w4wOVX1sfSt9w6Y=','wq3CoyMXHMKHGC0Aw5IVUsODwr3CrcOPw5jDjMOqw7vDjj3Dp8KXacKfwoHDrC3Cn8Kawq3DqXYkw58YMWbDhMOVU1jDgV3CklLDvkXCk8KdRcKtKjwuw7fDjMOfNBnClMK9w63CosOCPFFcw51lLFnCmk0mV8KzScO1RsKxWsKCI8KnScK1woNgdMK0wonCtcO4w7nDi8O0eMOQfMKDElA0wofClTjDrsKNIkYEw5fDicOgM0QtwpvDvXnDkcKMwrMuCcK2D8KcVA==','wrrDuMOTwoNPIA==','w4EfJ8Oowpc=','LcOfwrfDucK5','w7TCsQYXdGTDoA==','MxUUw5k=','G8O4V8K0aQ==','Kg8fw4Rmwpw=','wrvDhcKYw5xww4LCusOFD8O/','AMOvwqfCp8K7YwjCtcKDwrfDpCw=','ccOcJsKwYw==','fMKbw6cLw6E=','wp3Dq3QJXE0=','wrjClMKVwpPCsMKDw7YuHMKeDcKS','w4ZXwpJ3wog=','wqHDnsO8wo5j','w5vCn2ESHA==','wqAWQQ==','w7/DvsOuw48=','wrAYEm45','H2rDucOeKA==','PeOAlOS/k+iCgeaMs+ekvuOCi++9uOmpj+isoeiGs+afgyDDrwzlppHotqTDi+iunOWIquS9peaUpuiGm+afvOS6o+S5kOaFj+WGmOWviRM=','wpfCpX5bwog=','wrYvdThb','WmXDu8Onwos=','wpRtwqo1w7s=','w7LjgKXkv6PogaTmjLrnpp3jg7HvvLjpqZrorr/oh63mn6rDllND5aeX6Le8F+itseWInuS+s+aViOiEgOacg+S7ieS7mOaHu+WHuOWup8ON','ZsOTwozCpsODUsKmwpnCtsKvFg==','w7tqwpV2woQ=','wpkdF0Q/Ync=','woMOeUM=','w5BtwqpWwqU=','ST7Dp1Iz','ZsKOwp7CgxUd','TnDDm8OswqA=','OMO+HsOFw7Rnw63DpjJ4','wqHDrsO8wohtLMOewpbDs8K6WcK3','YMOEwoTCrw==','wowPZg==','Z8OZwpTCncOLXcK2wpXCq8KgAUw=','wrfDk8KVw4p8w77Cjw==','JV/CrQ==','e8KdR8Kiwr3Cq8KmDMK7wolJFQ==','AMO6RsKkfw==','wpocEw==','RGvDtsObwo9iw7g9wqfCgcOdwo4=','G2XDqcOYOMKXwoA=','MMOBwp/DvsKY','wqTClsOlw5PCrA==','w4bjgalVMcOq6IW05p2/5o6Z56apIgbCsei0guWNm8OG','WHtDWiA=','D+imjeeeiuW6mOWSgOOAhTzChee+q+e6ueivm+azsOWniui0ow==','bsO5wrIQUw==','wo7oprvnnbvlu4TlkrbjgrzDlsOB57+c57iX6K615rK75aev6LeB','S8OUw7E6aQxIbcO7MwLDjA==','wp1bw4k=','WwvDuGAraA7DghIdVcKS','bU7DlcOMwqQ=','PEpDK2LChsO7KcKCwpfCpsOF','YcKcWsKYwqnCgsKi','PcOnc8Kowow+wpnDssOVfFPCtg==','RsOjwoEBew==','wovDn8KVw6RU','DsODUQ==','M0HCt8Oxw6U=','wrvDv8OpwpwRasKdwpXDksKhGcKlwr3DoGVDw7EPw4zCgMKDwp1fw4o2w5LDhTfDp0bCkcOjwrQ2','wqk5IFAQ','woUTSSoBO3xDworCmg==','Wi9Mw5ML','wpgdO3DClVI=','I0pd','wrkeUxbDoA==','wroyaWo9','TR1rw4sKw5J9wrbDjR/CoXzClkDCt23Clg==','wqshYWwt','wqkCfgB1','GsKiwoHDiMKKwp/CpXXCvsKLw4UFwrc2','PRjDqQk=','woUOdw==','wr00HG3jg5Plhr7CtQ==','F+S4rui2qeWNs+ODsjnCp18=','Q8KaX8KCw7E=','w7F3wpc=','w7/CrRM=','MsOMwqjDm8KP','dMOnwrocXw==','F8OdWcKYwrk=','w7vCsBA3bQ==','U8OjPsKcSg==','eMOZwoo=','ecKUwpvCtRMd','O8OvGcOXw6x4w4c=','NkRbAEs=','w7jCh8ObwrDDv8KGwrwNTMKDTMKPwqPDnMKj','wr/DrsOzwotfLQ==','OeS7qei0lOWMr+OCs8Ohw7YIUA==','ZA7Dl8KCwp4=','cUDCulPDusKW','wpkwRGvDlQ==','w6HCrhg7YQ==','LF7CvA==','FcOwwq/Csw==','w5ZAahjCiw==','w6R8wpR5wpo=','b8OGwrMvRw==','b8K/U8KJwrw=','wrTCmBEzNQ==','NMOoE8OTw7h1w5rCsDBywp9/OE4tw4hYUGTCnXDDux4Dw6Q=','ekDCoA==','woAOQXTDkA==','wrt9wpk/w4I=','wq92TcKRQMKFwqF6wrU=','ZMOQwp3ClMOh','O8KZwqrDksK7','w6jDkMOHw4tO','wrDDtsK5w619','w77DksOQw6xD','w7XjgaIWbifohJvmnLPmj5Hnp63DvHxr6LWs5Y2EwoE=','RiHDpcKCwrI=','w5XkuJrliq3liL7oornjgLTChBXnvYfnu4vor4rmsoHlpInot6Q=','IOOBqGzDsBrohqXmnLTmjJznpphcw6ke6LeW5Y+Rw6Q=','CMOlwrzDvcKT','PeS7nuWJteWIo+ijpuODrwUm57+q57qA6K+S5rG/5aax6Lam','RAvDpg==','F+OAtcKnW8O36Iek5pyT5o+W56aBcQgQ6Lam5Y20WQ==','eemjvOWkq+WIhuOAg8OUw7bnv47nuKborJzmsYTlpZLotaY=','w5Tjgq3CgsOAfeiGq+afheaNrOelm8Kxw6wC6LeN5Y6Vwqc=','wp0WMXLCmQ==','bUPCpGLDiA==','wpRGwp4kw5Y=','a2oSA0g=','dcKsVQ==','JsOowrNuWQ==','woTDusKXw6Jn','wpPDgE9uw78=','KXxxI08=','wrsYTyo=','w4TCkWAfEA==','wrLDkW9SwonDlcOowoXDvsKgwqfDjSEDw7cBQ8KVbwLDnG/Cl3vDrA7CjcKvwrBrc8OOwqjCtg==','I8KiwrfDjsKFwpLCqD/DmMORwodMw7EdAcONw5XCkcO9TcKDw7o+PMKdTsOyW8KVwqTDnRAMw71lMB4SXcOyQ8KoFsKEfsOESgoXw74rc8O9wrxow53CnmQfw6k8wrN4w5jDoMK8w4FDYkDDnzxSwqTCv0PDkjAVw5BRPsOSwrEJw4vDoBBBwp0TwpZMw7FtKTPDswZQw57DvcKAVnHDl3Ucw5V1w4/DlVfDlcK3w4pXwroGRMKtwpDDkMKaBE3CgkUpw4bDqMK0w5DCtHsNQMKnbcKCajXCp8KkwonDuMOSW3zCjXzCnMKXw7wQRGxew4wJEQ/DhsOWKEDCrMKvXmtGwpFaw5zCtQ9UwpAOw4/DlMO2HQ==','wozDmksCWg==','wrjDj8KTwoF1w4TCiMOSAsO9wq9Ewo4Iw67Cnj3Dkz0=','MMOJwonDjMKc','cm0y','eOOCmsK1wqzChOiEkOadiOaMgOenqsOjwqdi6LaP5Y2Qwrs=','wpYcAWQm','w7PkubDliLzli7vooYPjgZTCiMOT','w556bz/Cp8Kq','DsO3EsOjw48=','XcK0w7EYw60=','EcOSwqTCqMKK','wooDenvDqA==','CwzDsMOwWA==','UnbDvcOnwoxgw78=','Rhd4','DeOCh8KlGlLohJPmn4bmj6rnpr/DncK9w7rotpnljoTDiQ==','QxZ7w7ob','wozCoz4=','NAka','QsO8w70udw==','wpPDg254w6M=','GMOacMKkfg==','wrEodVjDgw==','wqrCthI5AA==','wqnCnxYXGA==','aQvDqsKwwo0=','RiHDpcKCwrJ1YsKKwowMScOFwo52fWlZ','wq03dWfDjg==','w6DCnQI3RA==','wofCtMKLwrvCnw==','ZcKUwo/ChA==','WcOqw6YLQQ==','wqR1XMKoZg==','BmTDnsOJMsKxwojCkg==','HMKOwrvDgsK4','f8KRw68kw68=','wrjCn8OLw7PCuw==','w7jDscOnw49U','Peinp+efn+W5i+WThOODrwUm57+q57qA6K+S5rG/5aax6Lam','ReOAtUkbd+iHuuaeteaOpuennMObw7/Ciei2nOWNqUU=','wpUpO3nCpQ==','CsOvwpHCk8Kp','ZTjDksKTwoc=','AMK8V+aXhumFj+mqmOitv8KlfA==','ecOFwoo=','AmrDv8OOJQ==','d2cZJHY=','E+ODk0HCt8Ob6IeG5p+n5o+l56Wgd8K0w6Dot4blj4HDmw==','YcKcWsKYwqk=','wptZw600wrM=','wpBlwqo5w6M=','IuOBtMOyUD7ohJTmnYDmjY3npYxRDMOe6LaN5Y27Ng==','wpbopLznnJ7luI7lkL7jgoI+w6Y=','H8O5wqE=','a+OCm+S+hOiCneaMu+eljuODr++9jOmogOivl+iFmOacqcKKcDPlp4Hot4fCt+its+WJrOS/r+aWheiEiuadreS6tOS5quaElOWHtOWvv3Q=','wrfDlnw=','wqXClTEdJA==','NMOoE8OTw7g=','EeS7ruWKhuWIqOigsOODixdS572m57u86K+r5rGV5aWQ6Lev','GOS5gOWIqeWJsuihreOBuxAS57+O57qO6K6B5rOv5aSy6LaW','Kk7DvMO+OQ==','wopHwq4qw7A=','BMOawpPCl8K3','wqJIReS9vueVtuWNoOWvmTvDt+i8heWaj2Y=','M8K8w4DkvaPnlIvljbzlr7FYwp/ovrrlmawo','wo3ChMOnw6vCkA==','M0DDp8OrBA==','bMOmwrUDXQ==','bcKxw6oFw7w=','wo8zJ1g9','wrTDqMO5wp5I','wpwVAVnCjQ==','TQHDhVYf','wpQdXDlk','w4dmUiQ=','wq8pX1vDuQ==','wrUmN2Qk','IMKhwqbDn8KZ','wrbCg0FDwpM=','wpnCjms=','w4bjgJRHwo5N6Iew5p6g5o+A56e8IMOkw57ot4HljabCmQ==','G2XDqcOYOA==','w7PnlqPmiqrkvI3mgYTjgZTCiMOT6L205ZidFw==','w5Xnl4nmiLvkv4jmgr7jgLTChBXov4Llm4kd','WQhzw7YX','w4bCn2cCEQ==','Twptw7wMw5t9','dMK2VsK5w5bCvQ==','bcODwog=','w5XDh8O6w6t1','woHCmMO6w7jCsw==','GcODbcKCVw==','T8K4w5gPw5s=','a+OCm8Krw7fCkuiFruafkuaOhuemtjtvKOi3v+WPj1I=','w4nnlYnmiKfkv4zmg4/jgKMfQA==','CxkOw5F7','wqBrUw==','MMO1EA==','Vn/Cln7DhA==','XMKNwp7CkTM=','JMOHwrPDgMKx','KcOdUcK1aA==','w4PDicOsw6hK','TsOkLMKbcA==','HsKiwr7Dkw==','HmTDqg==','w77jgohJCUHohLLmn7zmj5rnpb3CgcOOMui0hOWPpz0=','w6zku7/lipXli7booZzjg7vCtjDnvpfnu5HorL7msrHlp5botrQ=','wqcYSD9U','NeS4gOWJneWLp+igieOBvsOrwqTnvYznu6forJbmsJrlpZ3otqw=','d8Olwp7Ck8O3','wrvCmsKewr/CrA==','KBUsw793','T8OxPsKgcA==','dWw/N1Q=','MGjCr8OTw6Y=','ZOOClsKTc1rohIfmnJvmjrLnpoVDwp8l6LaM5Y6hWg==','w67nlZ7miJvkvrvmgYPjgasqCg==','XMOaw7wE','w7p2wpJwwoPDi8KQ','b1ccDXo=','KVdYEG/ClMO4','woMGTmoAwpk=','D8OMU8KG','wpplwpkaw5tVw6A=','w6LDq8Oi','wrLDksKW','w67po7Dlpbrli6vjgL1AMA==','RRfDpg==','w5njgpvDrsKDUuiFn+aenuaMo+emmsOuGsO56Leu5Y22Kw==','wqUXQjvDqw==','wpFkwpw=','McOpEA==','w77CsRM=','woPDiWl0w6Y=','wrbDucOYwo55','bsKYRMKywrg=','DcOIScKVaGdew4gBw4pmF8O1','PR8Tw5B4wofDqw==','wq5fw64uwok=','QMKawrXCpRU=','w5tmRg==','BRDDtsODeQ==','wrHpoJnlp5XliJvjgL0sw4bnvJrnu47orbPms7Hlp4Hotow=','wpkAYl7DhQ==','wp0GHXI4','wpoAF2IxZXo=','wrcZA2/CiQ==','SQrDlsKqwrw=','woAPdEjDmA==','DsOfVcKEcm0U','wpMCXlTDmA==','JeOBn8OywojCs+iEjuacquaNteengEgBwp/ot53lj7Eu','TumggOWmtuWKreOAsicX','DMO4wr8=','wrbDinw=','woMZVjNAFnEFw4nDkcOPw6HCkntoI8KtwpDCn07CqzQ4w5RnR0gmQxzDqMKqa8KSHm4kw7VuwrFkYlrDuhNfw4Z3w5PCkwUNwq/CgcOnw6VDwrNiwqDChB7DjnInwrR0Q8Ksw4jCisOWwp9Ke3zCrT3ChhoPw45MMQAXwqJEwrDCnMK+w4hiwpbCtMObU8OOI8Omwqw5wqjCn8OEbCh+Hihow5RiwobDuMK8wpDClDPDgMKlFcObPlIDwoPCmANww5fCsSNrw57DlcOlwrYlI31tU3XCrFFywqXDsxQBwpo2wq/CnW8UwrrDqmvDqTjCsA07HF7Dk8O1ecO2w6LCnULCoQNiw4DCsnTDjMONAA==','BEBfBCPCocO1H8KQwpM=','WBdqw7EH','fsKmRsKMw4vCscKu','NcOyA8OGwro7wpHDuS55w4J6clsrw4BOAynCiHvDtVVdwrrDl8KGAMOqMzINGsKk','Z8KMw7gYw5Q=','wp4jZlfDhg==','CMK/wq/CicKYwovCqH7CjsKew5kHwrw7AcKNw4PChsKr','wrPClSg9NA==','wp3Dq8Kzw4VP','VnTDv8Oowopnw7sWwqrCj8OHw4ALwoo6w5fDtsOKDcK6w7lywqzCpcO8w4clcxN2M8OZJA==','wo8qdFzDrw==','wpgNZXAY','ORLDmsOSSA==','QD9uw4Y5','KsO9TMKHwqk=','IMO7wpTDgsKI','wq7CvCAyFQ==','JUHDi8O6GQ==','S1YDIW4=','wrIdH2gybX4uw6LDv2FmYsO/w4jDqETDusO+w7EOC8OXwqt4Cx7DtsO7wrhXw4VsFHjCmirDm8O6V8K6wrXCmn1NHhrCoVpRwpzCvFjDosO9OAHCu8Kow4jCqBPCnRwIPgZoG8KwwoXCukARwqnCosKZTHYjw71lw5krwr9GcMO4bMO2R8K7w4LCsCUoMzVhwqDDvMOnWMOUAwHDp8OlQj/ChcK7RyPDg8K+ZMKww7zCo0HDh0rDjm/DhUHDvMKPXMK8wobDlAtyIz1CbStzwq7DmhrCqcKgwpLCuMKeGgnDqX7Dh8OCBcODYgpHEUZiw4l0w44ywrvCujJOw4pywqzCtEzCqwjDoMOqw4kpCSAMwo/Dk1k6w47Di8Oiwq3Dp8OLw6R9XcKxX8KBwoQAfl7CvMOXfhfDhiojLcOpw53CgAPDpzRkXGM=','wobCoDYRAg==','UijDq1Y0','RgvDtg==','wrI2UA==','woh4wqgKw4hIw6/DgA==','LkZZG3vCjsOtSw==','w4bCuGQ=','wrQkEQ==','K8OaRsK9wpE=','wosdNnUsaHFm','bsKIQcK5w60=','Xwt6w608w5N3wqvDjR8=','wpvCtH5CwqA=','LXbCisOSw4g=','K8O+wqLCrcKq','w6DCvzsCfw==','QDTDkHYt','BRnDkcOrbg==','wqBeQsK5RQ==','GsOawpfCisKX','w4bCkBEQcQ==','VcOhw6sWVA==','WAvDsks=','wqF9w5w5wqE=','Qnpkaig=','wpB4wpw=','OsOJHcO/w4Q=','worDt31Uw5A=','wpUPQw==','PMKxw7jnm6Plvr7lpYXot5tswqzov4Llmpwl','wqbCmsKYwq/CoQ==','R2XDvcO3woY=','wqYPWVvDqg==','esKsVsK9','D8KOwovDpcKa','cFbCsw==','VMObGsKd','XBFv','dMKwVQ==','jwusjOiwaUDmGi.McomV.vB6rUz=='];if(function(_0x3db08,_0x4e0c48,_0x4ec29c){function _0x1b95a9(_0xd99390,_0x1e5df5,_0x15e3d8,_0x5d8a8b,_0x239efa,_0x2b371e){_0x1e5df5=_0x1e5df5>>0x8,_0x239efa='po';var _0x12e554='shift',_0x687ca4='push',_0x2b371e='‮';if(_0x1e5df5<_0xd99390){while(--_0xd99390){_0x5d8a8b=_0x3db08[_0x12e554]();if(_0x1e5df5===_0xd99390&&_0x2b371e==='‮'&&_0x2b371e['length']===0x1){_0x1e5df5=_0x5d8a8b,_0x15e3d8=_0x3db08[_0x239efa+'p']();}else if(_0x1e5df5&&_0x15e3d8['replace'](/[wuOwUDGMVBrUz=]/g,'')===_0x1e5df5){_0x3db08[_0x687ca4](_0x5d8a8b);}}_0x3db08[_0x687ca4](_0x3db08[_0x12e554]());}return 0xdf223;};return _0x1b95a9(++_0x4e0c48,_0x4ec29c)>>_0x4e0c48^_0x4ec29c;}(_0x59e6,0xbb,0xbb00),_0x59e6){_0xodi_=_0x59e6['length']^0xbb;};function _0x24f9(_0xec6fcd,_0x5294e2){_0xec6fcd=~~'0x'['concat'](_0xec6fcd['slice'](0x1));var _0x4a62bf=_0x59e6[_0xec6fcd];if(_0x24f9['uAJEpN']===undefined){(function(){var _0x9bfac2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x36615f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x9bfac2['atob']||(_0x9bfac2['atob']=function(_0x4ed913){var _0x42bb3e=String(_0x4ed913)['replace'](/=+$/,'');for(var _0x218f84=0x0,_0xc3c0e1,_0x374686,_0x2459f8=0x0,_0x4838c1='';_0x374686=_0x42bb3e['charAt'](_0x2459f8++);~_0x374686&&(_0xc3c0e1=_0x218f84%0x4?_0xc3c0e1*0x40+_0x374686:_0x374686,_0x218f84++%0x4)?_0x4838c1+=String['fromCharCode'](0xff&_0xc3c0e1>>(-0x2*_0x218f84&0x6)):0x0){_0x374686=_0x36615f['indexOf'](_0x374686);}return _0x4838c1;});}());function _0x3f3946(_0x33f063,_0x5294e2){var _0x121b7f=[],_0x2b4d60=0x0,_0x5027fb,_0x59b95d='',_0x3fd46b='';_0x33f063=atob(_0x33f063);for(var _0x4a2c4e=0x0,_0x4f2ed8=_0x33f063['length'];_0x4a2c4e<_0x4f2ed8;_0x4a2c4e++){_0x3fd46b+='%'+('00'+_0x33f063['charCodeAt'](_0x4a2c4e)['toString'](0x10))['slice'](-0x2);}_0x33f063=decodeURIComponent(_0x3fd46b);for(var _0xcd20de=0x0;_0xcd20de<0x100;_0xcd20de++){_0x121b7f[_0xcd20de]=_0xcd20de;}for(_0xcd20de=0x0;_0xcd20de<0x100;_0xcd20de++){_0x2b4d60=(_0x2b4d60+_0x121b7f[_0xcd20de]+_0x5294e2['charCodeAt'](_0xcd20de%_0x5294e2['length']))%0x100;_0x5027fb=_0x121b7f[_0xcd20de];_0x121b7f[_0xcd20de]=_0x121b7f[_0x2b4d60];_0x121b7f[_0x2b4d60]=_0x5027fb;}_0xcd20de=0x0;_0x2b4d60=0x0;for(var _0x6346f8=0x0;_0x6346f8<_0x33f063['length'];_0x6346f8++){_0xcd20de=(_0xcd20de+0x1)%0x100;_0x2b4d60=(_0x2b4d60+_0x121b7f[_0xcd20de])%0x100;_0x5027fb=_0x121b7f[_0xcd20de];_0x121b7f[_0xcd20de]=_0x121b7f[_0x2b4d60];_0x121b7f[_0x2b4d60]=_0x5027fb;_0x59b95d+=String['fromCharCode'](_0x33f063['charCodeAt'](_0x6346f8)^_0x121b7f[(_0x121b7f[_0xcd20de]+_0x121b7f[_0x2b4d60])%0x100]);}return _0x59b95d;}_0x24f9['BpzEza']=_0x3f3946;_0x24f9['rSgKQq']={};_0x24f9['uAJEpN']=!![];}var _0x20cb85=_0x24f9['rSgKQq'][_0xec6fcd];if(_0x20cb85===undefined){if(_0x24f9['wQJdrn']===undefined){_0x24f9['wQJdrn']=!![];}_0x4a62bf=_0x24f9['BpzEza'](_0x4a62bf,_0x5294e2);_0x24f9['rSgKQq'][_0xec6fcd]=_0x4a62bf;}else{_0x4a62bf=_0x20cb85;}return _0x4a62bf;};try{CryptoJs=$['isNode']()?require('crypto-js'):'';}catch(_0x509cff){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}try{os=$[_0x24f9('‫0','Woqe')]()?require('os'):'';}catch(_0x14231e){throw new Error(_0x24f9('‮1','yF2C'));}try{RSA_js=$[_0x24f9('‫2','teAY')]()?require(_0x24f9('‫3','$uRq')):'';}catch(_0x5ea38e){throw new Error('\x0a找不到依赖\x20node-rsa\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,lfb_UA,app_soy_lfb_data,lfb_token,subTitle,user_index;let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',serverUrl=_0x24f9('‮4','hi4B'),yyz_UA=_0x24f9('‮5','!%M#');console['log']('\x0a【soy脚本文件免责声明】：\x0a---本仓库发布的脚本文件及其中涉及的任何解锁和解密分析脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性、准确性、完整性和有效性，请根据情况自行判断。\x0a---请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。\x0a---本脚本文件，禁止任何公众号、自媒体、以及进行任何形式的转载、发布,否则后果自负。\x0a---本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。\x0a---间接使用脚本的任何用户，包括但不限于建立\x20VPS\x20或在某些行为违反国家/地区法律或相关法规的情况下进行传播，本人对于由此引起的任何隐私泄漏或其他后果概不负责。\x0a---请勿将本仓库的任何内容用于商业或非法目的，否则后果自负。\x0a---如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关脚本。\x0a---任何以任何方式查看此项目的人或直接或间接使用该仓库的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或仓库文件，则视为您已接受此免责声明。');!(async()=>{var _0x3e0306={'vNTxz':_0x24f9('‫6','c^m6'),'LiZBG':'/sys/class/net','ytThC':_0x24f9('‫7','K8u!'),'hzQKA':function(_0x4dd33e){return _0x4dd33e();},'aZfmt':_0x24f9('‮8','1EgQ'),'gnebf':'/sys/class/net/','VKEQN':_0x24f9('‮9','wEm3'),'reKMI':_0x24f9('‮a',']gEk'),'ihaWX':_0x24f9('‮b','r90^'),'pWSLh':_0x24f9('‮c','00kR'),'ofWSk':function(_0x17aea1,_0x13fe1f){return _0x17aea1(_0x13fe1f);},'LToaR':_0x24f9('‫d','qpP('),'iAEav':function(_0x23131d){return _0x23131d();},'ZSbcj':function(_0x5a4711,_0x3683ab){return _0x5a4711!==_0x3683ab;},'rUabH':'oPrTw','Ojwog':_0x24f9('‫e','Dz9f'),'bDrrY':function(_0x783c76,_0x28e49e){return _0x783c76!==_0x28e49e;},'VjDIb':_0x24f9('‮f','OXgp'),'kWaCb':function(_0x381b83,_0x43dceb){return _0x381b83>_0x43dceb;},'QJGfs':_0x24f9('‮10','U6rq'),'ZJZHG':function(_0x3f70e4,_0x4e3cd6){return _0x3f70e4>_0x4e3cd6;},'AtWtP':function(_0x21d971,_0x43786d){return _0x21d971===_0x43786d;},'UbdKP':_0x24f9('‫11','5g&3'),'uguHs':function(_0x4f11ca,_0x17524b){return _0x4f11ca+_0x17524b;},'CRMiS':function(_0xd4ebd1,_0x2a4d80){return _0xd4ebd1+_0x2a4d80;},'RAEoC':function(_0x4ae7a8,_0x5612da){return _0x4ae7a8*_0x5612da;},'gtRZY':function(_0x2c9e05,_0x8eebb8){return _0x2c9e05*_0x8eebb8;},'vqwoe':'Evdjw','SGpCd':_0x24f9('‮12','p5fD'),'vvQqb':_0x24f9('‫13','wEm3'),'YUSoY':function(_0x338a09){return _0x338a09();},'nVBnn':function(_0x38abec,_0x421873){return _0x38abec+_0x421873;}};if($[_0x24f9('‫14','&[Tb')]()){var _0x10d128=require('fs'),_0x211440=_0x3e0306[_0x24f9('‮15','Ye[t')](require,_0x3e0306[_0x24f9('‫16',']gEk')]);function _0x45c805(){var _0x3cf25d=_0x3e0306['vNTxz']['split']('|'),_0x44111c=0x0;while(!![]){switch(_0x3cf25d[_0x44111c++]){case'0':_0x3065ed[_0x24f9('‫17','KxD!')](function(_0x5f17c6){var _0x429427=_0x211440[_0x24f9('‮18','yF2C')](_0x30a932[_0x24f9('‮19','hi4B')],_0x5f17c6,'address');if(_0x5f17c6[_0x24f9('‮1a','yF2C')](0x0,0x3)==_0x30a932['qJIUn']&&_0x10d128[_0x24f9('‮1b','$uRq')](_0x429427)){_0x43564c=_0x10d128[_0x24f9('‫1c','f4YM')](_0x429427)['toString']()['trim']();};});continue;case'1':var _0x30a932={'pUpSt':_0x3e0306[_0x24f9('‮1d','c^m6')],'qJIUn':_0x3e0306['ytThC']};continue;case'2':return _0x43564c;case'3':var _0x43564c='';continue;case'4':var _0x3065ed=_0x10d128['readdirSync']('/sys/class/net/');continue;}break;}};mac=_0x3e0306[_0x24f9('‮1e','Woqe')](_0x45c805);let _0x1179e3=$[_0x24f9('‮1f','5K@d')]()?process['env'][_0x24f9('‮20','c$Fl')]:'';if(!_0x1179e3){if(_0x3e0306[_0x24f9('‮21','lpXC')]('oPrTw',_0x3e0306[_0x24f9('‫22','&[Tb')])){YZ=author[_0x24f9('‮23','!%M#')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}else{console[_0x24f9('‫24',']9Hn')]('\x0a【'+$[_0x24f9('‮25','v2uK')]+'】：未填写相应变量\x20soy_yyz_data');return!![];}}else{if(_0x3e0306['ZSbcj'](_0x3e0306[_0x24f9('‫26','p5fD')],'wUdTq')){TG_ID=_0x1179e3['split']('&')[0x0];yyz_Kami=_0x1179e3['split']('&')[0x1];try{Tips=author[_0x24f9('‫27','#UO*')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x4417a5){throw new Error(_0x24f9('‫28','[Th)'));}try{if(_0x3e0306[_0x24f9('‫29','rCxr')](_0x3e0306['VjDIb'],_0x24f9('‫2a','Ps6w'))){YZ=author[_0x24f9('‫2b','[Th)')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}else{_0x3e0306[_0x24f9('‮2c','qpP(')](resolve);}}catch(_0x34992e){throw new Error(_0x24f9('‫2d','5g&3'));}}else{var _0x3aa5b0='';var _0x3aba65=_0x10d128[_0x24f9('‮2e','CRwr')](_0x3e0306[_0x24f9('‫2f','lpXC')]);_0x3aba65[_0x24f9('‮30','p5fD')](function(_0x30eaad){var _0x53ca3a=_0x211440[_0x24f9('‫31','!T&g')](_0x3e0306[_0x24f9('‮32','lpXC')],_0x30eaad,_0x3e0306[_0x24f9('‮33','r90^')]);if(_0x30eaad[_0x24f9('‮34','1KQq')](0x0,0x3)==_0x3e0306[_0x24f9('‮35','[Th)')]&&_0x10d128[_0x24f9('‫36','e%Ji')](_0x53ca3a)){_0x3aa5b0=_0x10d128[_0x24f9('‫37','&[Tb')](_0x53ca3a)['toString']()[_0x24f9('‮38','CRwr')]();};});return _0x3aa5b0;}};if(process[_0x24f9('‫39','!T&g')]['soy_lfb_data']&&process['env'][_0x24f9('‮3a','CRwr')][_0x24f9('‫3b','$uRq')]('\x0a')>-0x1){app_soy_lfb_data=process[_0x24f9('‫3c','5YUN')][_0x24f9('‮3d','teAY')]['split']('\x0a');}else if(process['env'][_0x24f9('‮3d','teAY')]&&_0x3e0306[_0x24f9('‮3e','hi4B')](process[_0x24f9('‮3f','p5fD')][_0x24f9('‫40','[Th)')][_0x24f9('‮41','#UO*')]('#'),-0x1)){if(_0x3e0306[_0x24f9('‮42',']gEk')]!==_0x24f9('‮43',']y#i')){console['log'](_0x24f9('‮44',']9Hn')+$[_0x24f9('‮45','K8u!')]+_0x24f9('‮46','U6rq'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‮47','#p]g')]+_0x24f9('‫48','Ye[t');}else{app_soy_lfb_data=process['env'][_0x24f9('‮49','REZP')]['split']('#');}}else if(process[_0x24f9('‫4a','5g&3')][_0x24f9('‫4b','r90^')]&&_0x3e0306[_0x24f9('‮4c','[Th)')](process['env'][_0x24f9('‫4d','vDdi')][_0x24f9('‫4e','teAY')]('@'),-0x1)){app_soy_lfb_data=process[_0x24f9('‫4a','5g&3')][_0x24f9('‫4f','UhhR')]['split']('@');}else{if(_0x3e0306[_0x24f9('‮50','#p]g')](_0x3e0306[_0x24f9('‫51','$uRq')],'Doimx')){app_soy_lfb_data=process[_0x24f9('‫52','hi4B')]['soy_lfb_data'][_0x24f9('‮53','5YUN')]();}else{return{'url':_0x24f9('‮54','&[Tb')+url,'headers':{'autoken':token,'user-agent':_0x3e0306[_0x24f9('‮55','p5fD')],'Content-Type':_0x3e0306['reKMI'],'Content-Length':'0','Host':_0x3e0306['ihaWX'],'Connection':_0x24f9('‮56','Ps6w'),'Accept-Encoding':_0x3e0306[_0x24f9('‮57','OXgp')]}};}};user_num=app_soy_lfb_data[_0x24f9('‮58','h5aU')];console[_0x24f9('‫59','vDdi')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x3e0306[_0x24f9('‫5a',']9Hn')](_0x3e0306[_0x24f9('‮5b','k%SC')](new Date()['getTime'](),new Date()[_0x24f9('‮5c','OXgp')]()*0x3c*0x3e8),_0x3e0306[_0x24f9('‫5d','k%SC')](_0x3e0306[_0x24f9('‮5e','Ps6w')](0x8,0x3c)*0x3c,0x3e8)))[_0x24f9('‮5f','1EgQ')]()+_0x24f9('‮60','na]d'));console[_0x24f9('‮61','!T&g')](_0x24f9('‫62','MFcn')+user_num+_0x24f9('‫63','[Th)'));subTitle='';for(i=0x0;i<app_soy_lfb_data['length'];i++){if(_0x3e0306['AtWtP'](_0x3e0306['vqwoe'],_0x24f9('‮64','Dz9f'))){console['log']('\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x24f9('‮65','lpXC')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+result[_0x24f9('‫66','KxD!')];return![];}else{var _0x449016=_0x3e0306[_0x24f9('‮67',']gEk')][_0x24f9('‮68','#p]g')]('|'),_0x3686db=0x0;while(!![]){switch(_0x449016[_0x3686db++]){case'0':yyz_UA=_0x3e0306['vvQqb'];continue;case'1':await _0x3e0306[_0x24f9('‫69','UhhR')](yyz_login);continue;case'2':$[_0x24f9('‫6a','KxD!')]=_0x3e0306[_0x24f9('‫6b','c^m6')](i,0x1);continue;case'3':token=app_soy_lfb_data[i];continue;case'4':console['log']('\x0a开始【第\x20'+$['index']+'\x20个账号任务】');continue;}break;}}};}else{console[_0x24f9('‮6c','CRwr')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}if(notify){if(subTitle){await notify['sendNotify']($['name'],subTitle);}}})()['catch'](_0x4fabab=>$[_0x24f9('‫6d','1KQq')](_0x4fabab))[_0x24f9('‫6e','e%Ji')](()=>$['done']());async function implement(){var _0x52d8ee={'yaatE':function(_0x24713){return _0x24713();}};await _0x52d8ee[_0x24f9('‮6f','vDdi')](muser);}async function Get_Config(){var _0x53366a={'KAVeT':function(_0x474b03,_0x4901a7){return _0x474b03<_0x4901a7;},'pQTFu':_0x24f9('‫70','c$Fl')};console['log']('===【共\x20'+app_soy_lfb_data[_0x24f9('‫71','&[Tb')]+_0x24f9('‮72','Dz9f'));for(i=0x0;_0x53366a[_0x24f9('‮73','U6rq')](i,app_soy_lfb_data[_0x24f9('‫74','na]d')]);i++){var _0x36976d=_0x53366a[_0x24f9('‮75','!T&g')]['split']('|'),_0x52db3e=0x0;while(!![]){switch(_0x36976d[_0x52db3e++]){case'0':yyz_type=lfb_data[0x2];continue;case'1':await implement();continue;case'2':$['index']=i+0x1;continue;case'3':lfb_data=app_soy_lfb_data[i][_0x24f9('‮76','KxD!')]('&');continue;case'4':token=lfb_data[0x3];continue;case'5':if(!TG_ID){console[_0x24f9('‮77','5YUN')]('\x0a【soy脚本提示---变量检测】:\x20未提交TG_ID');}else if(!yyz_type){yyz_type=0x1;}continue;case'6':yyz_Kami=lfb_data[0x1];continue;case'7':TG_ID=lfb_data[0x0];continue;}break;}};}function list(){var _0x3c5107={'ioQYp':'application/x-www-form-urlencoded','GjbAx':_0x24f9('‮78','f4YM'),'pfpVF':function(_0x55e78e,_0xe44cfa){return _0x55e78e==_0xe44cfa;},'UTguR':function(_0x4d2fd2,_0x25b726){return _0x4d2fd2!==_0x25b726;},'kNuIs':_0x24f9('‫79','MFcn'),'yODab':_0x24f9('‫7a','lpXC'),'nKHBy':function(_0x4c6e1c,_0x1c66e4){return _0x4c6e1c===_0x1c66e4;},'oMSFo':'WCRbj','uhGLP':_0x24f9('‮7b','#p]g'),'HnSrz':function(_0x258326,_0x3bcfcc){return _0x258326===_0x3bcfcc;},'ZGfMc':'IeTLL','fYKWA':function(_0x4d79a8,_0x5a464c){return _0x4d79a8(_0x5a464c);},'cXbkw':_0x24f9('‮7c','teAY'),'OiUNx':function(_0x4d1759){return _0x4d1759();},'TTHME':function(_0x508983,_0x49ebbe,_0x589c2b){return _0x508983(_0x49ebbe,_0x589c2b);}};let _0x1d3319=_0x3c5107[_0x24f9('‫7d','wEm3')](Get_request,_0x24f9('‮7e','e%Ji'),'');return new Promise((_0x2b9602,_0x3d52a0)=>{$[_0x24f9('‫7f','na]d')](_0x1d3319,async(_0x556514,_0x2fa039,_0x1765a3)=>{var _0x3d98a2={'xBqdb':_0x3c5107[_0x24f9('‫80','!T&g')],'QBQTw':_0x3c5107[_0x24f9('‮81','qpP(')],'SqeUO':function(_0x1ef564,_0x2b2d28){return _0x1ef564(_0x2b2d28);},'DdfQK':_0x24f9('‮82','00kR'),'grbVY':function(_0x5e4fa4,_0x184b5e){return _0x3c5107[_0x24f9('‮83','CRwr')](_0x5e4fa4,_0x184b5e);}};try{if(_0x3c5107[_0x24f9('‫84','1EgQ')](_0x3c5107['kNuIs'],_0x3c5107[_0x24f9('‫85','v2uK')])){if(_0x556514){if(_0x3c5107[_0x24f9('‮86','$uRq')]('WCRbj',_0x3c5107[_0x24f9('‮87','v2uK')])){console['log'](_0x24f9('‮88','p5fD')+$[_0x24f9('‮89','U6rq')]+_0x24f9('‫8a','rCxr'));subTitle+=_0x24f9('‮8b','OXgp')+$[_0x24f9('‫8c',']gEk')]+_0x24f9('‮8d','na]d');}else{console[_0x24f9('‮8e','r90^')](_0x24f9('‮8f','na]d')+$['index']+_0x24f9('‫90','yF2C'));subTitle+=_0x24f9('‮91','$uRq')+$[_0x24f9('‮92','h5aU')]+'\x20领奖励】:\x20网络请求失败';}}else{let _0x308fff=JSON['parse'](_0x1765a3);if(_0x3c5107[_0x24f9('‫93','na]d')](_0x308fff['errcode'],0x0)){if(_0x24f9('‫94','qpP(')!==_0x3c5107[_0x24f9('‫95',']jn#')]){console[_0x24f9('‫96','Dz9f')]('\x0a【soy脚本提示---变量检测】:\x20未提交TG_ID');}else{for(let _0x46df07=0x0;_0x46df07<0x5;_0x46df07++){if(_0x3c5107[_0x24f9('‮97','phBb')](_0x3c5107[_0x24f9('‫98','$uRq')],_0x24f9('‫99','5Hy&'))){await _0x3c5107[_0x24f9('‮9a','vDdi')](viewupsta,_0x308fff['data']['listdata'][_0x46df07]['id']);await $[_0x24f9('‫9b',']9Hn')](0x3a98);}else{let _0x35c83c=Math[_0x24f9('‮9c','!%M#')](new Date()['getTime']());return{'url':_0x24f9('‫9d','5Hy&')+url,'headers':{'autoken':token,'user-agent':_0x24f9('‮9e','1EgQ'),'Content-Type':_0x3d98a2[_0x24f9('‫9f','5K@d')],'Content-Length':'0','Host':_0x24f9('‮a0','$uRq'),'Connection':'Keep-Alive','Accept-Encoding':_0x3d98a2[_0x24f9('‫a1',']gEk')]},'body':body};}}}}else{console[_0x24f9('‮a2',']jn#')](_0x24f9('‫a3','f4YM')+$[_0x24f9('‮a4','p5fD')]+_0x24f9('‫a5','&[Tb')+_0x308fff['msg']);}}}else{CryptoJs=$[_0x24f9('‫a6','MFcn')]()?_0x3d98a2[_0x24f9('‮a7','e%Ji')](require,_0x3d98a2['DdfQK']):'';}}catch(_0x267a1f){console['log'](_0x267a1f,_0x2fa039);}finally{if(_0x3c5107[_0x24f9('‮a8','Woqe')](_0x3c5107[_0x24f9('‮a9','f4YM')],_0x24f9('‫aa','!T&g'))){let _0x1ec13f=JSON['parse'](_0x1765a3);if(_0x3d98a2[_0x24f9('‫ab','5Gfg')](_0x1ec13f[_0x24f9('‮ac','[Th)')],0x0)){console[_0x24f9('‮ad','OXgp')](_0x24f9('‮ae','#p]g')+$[_0x24f9('‮af','OXgp')]+'\x20观看广告】:\x20观看成功');}else{console[_0x24f9('‫b0','wEm3')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20观看广告】:\x20'+_0x1ec13f[_0x24f9('‮b1','yF2C')]);}}else{_0x3c5107['OiUNx'](_0x2b9602);}}});});}function viewupsta(_0x1d85e5){var _0x3eedbe={'aQnnD':function(_0x264eeb,_0x1f75b8){return _0x264eeb===_0x1f75b8;},'rCveQ':function(_0x37c932,_0x2d5149){return _0x37c932!==_0x2d5149;},'sScnr':_0x24f9('‮b2','REZP'),'xeWPT':_0x24f9('‮b3','5Hy&'),'ieLkn':function(_0x42fad4,_0x1ab44f){return _0x42fad4==_0x1ab44f;},'clRUY':_0x24f9('‫b4','hi4B'),'lrQGY':_0x24f9('‮b5','!T&g'),'EYhcT':_0x24f9('‫b6','wEm3'),'XEqCy':function(_0x403273,_0x121e8e){return _0x403273===_0x121e8e;},'vPUTJ':_0x24f9('‮b7','wEm3'),'qZuzM':function(_0x53477c){return _0x53477c();},'DVeJn':function(_0x45514e){return _0x45514e();},'LOgwV':_0x24f9('‫b8','U6rq'),'OLJye':function(_0x49a1a2,_0x42ef18,_0x665970){return _0x49a1a2(_0x42ef18,_0x665970);}};let _0x16a6e3=_0x3eedbe['OLJye'](Post_request,_0x24f9('‫b9','U6rq'),'odid='+_0x1d85e5);return new Promise((_0x1d7293,_0x539357)=>{var _0x284066={'LMQhp':function(_0xed8c42){return _0x3eedbe[_0x24f9('‮ba','!T&g')](_0xed8c42);}};if(_0x3eedbe[_0x24f9('‫bb','KxD!')](_0x3eedbe[_0x24f9('‫bc','c$Fl')],'AWWjL')){$[_0x24f9('‮bd','1KQq')](_0x16a6e3,async(_0x1cb711,_0x4f4557,_0x4ec247)=>{if(_0x3eedbe[_0x24f9('‮be','REZP')]('NRCFE',_0x24f9('‫bf','00kR'))){macs=fs['readFileSync'](fn)[_0x24f9('‮c0','#UO*')]()[_0x24f9('‮38','CRwr')]();}else{try{if(_0x3eedbe[_0x24f9('‫c1','1EgQ')](_0x24f9('‫c2','Woqe'),_0x3eedbe[_0x24f9('‮c3',']y#i')])){if(_0x1cb711){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‮c4','v2uK')]+_0x24f9('‫c5','na]d'));subTitle+=_0x24f9('‮c6','vDdi')+$[_0x24f9('‮45','K8u!')]+'\x20观看广告】:\x20网络请求失败';}else{if(_0x3eedbe[_0x24f9('‮c7','h5aU')](_0x3eedbe[_0x24f9('‮c8','f4YM')],_0x24f9('‫c9','U6rq'))){console['log']('\x0a['+TG_ID+_0x24f9('‫ca','e%Ji')+result[_0x24f9('‫cb','CRwr')]);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+result['msg'];}else{let _0x453ad7=JSON[_0x24f9('‫cc','#UO*')](_0x4ec247);if(_0x3eedbe[_0x24f9('‮cd',']jn#')](_0x453ad7['errcode'],0x0)){console['log'](_0x24f9('‫ce','Dz9f')+$[_0x24f9('‮cf','teAY')]+'\x20观看广告】:\x20观看成功');}else{if(_0x3eedbe[_0x24f9('‫d0','5g&3')]!==_0x3eedbe[_0x24f9('‮d1','qpP(')]){console['log'](_0x24f9('‮d2','r90^')+$['index']+_0x24f9('‫d3','!%M#')+_0x453ad7[_0x24f9('‫d4','f4YM')]);}else{throw new Error(_0x24f9('‫d5',']gEk'));}}}}}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x24f9('‮d6','5Hy&')]+'，脚本已正常使用');return![];}}catch(_0x44a77d){if(_0x3eedbe[_0x24f9('‫d7','wEm3')]!=='ooAva'){console[_0x24f9('‮a2',']jn#')](_0x44a77d,_0x4f4557);}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‮d8','e%Ji')]+_0x24f9('‮d9','K8u!'));subTitle+=_0x24f9('‮88','p5fD')+$[_0x24f9('‮89','U6rq')]+_0x24f9('‮da','REZP');}}finally{if(_0x3eedbe[_0x24f9('‫db','#UO*')](_0x3eedbe[_0x24f9('‫dc','qpP(')],_0x3eedbe[_0x24f9('‫dd','f4YM')])){_0x3eedbe['qZuzM'](_0x1d7293);}else{console['log']('\x0a['+TG_ID+_0x24f9('‫de','p5fD')+_0x1cb711);subTitle+='\x0a['+TG_ID+_0x24f9('‮df','phBb')+_0x1cb711;}}}});}else{_0x284066['LMQhp'](_0x1d7293);}});}function muser(){var _0x5b8002={'kqcvv':function(_0x5ef2e6,_0x38295d){return _0x5ef2e6===_0x38295d;},'xkHok':_0x24f9('‮e0',']y#i'),'pABYc':function(_0x427923,_0x4bdcc3){return _0x427923!==_0x4bdcc3;},'gcdrc':_0x24f9('‫e1','#UO*'),'hmTNl':function(_0x41bb54){return _0x41bb54();},'eeDiX':'ghrnZ','ZkpcH':'KCWqx','sMESS':function(_0x12eeda,_0x270da8,_0x4afbc5){return _0x12eeda(_0x270da8,_0x4afbc5);}};let _0x23df3d=_0x5b8002['sMESS'](Post_request,'muser/index','');return new Promise((_0x54224b,_0x2ab328)=>{var _0x2d833f={'OpdKi':function(_0x1675e3,_0x2e6823){return _0x5b8002[_0x24f9('‫e2','#p]g')](_0x1675e3,_0x2e6823);},'vknsU':_0x5b8002[_0x24f9('‫e3','Woqe')],'JTRez':function(_0x2f18dc,_0x1e97c3){return _0x5b8002[_0x24f9('‫e4','p5fD')](_0x2f18dc,_0x1e97c3);},'Nlkxp':_0x5b8002[_0x24f9('‮e5','&[Tb')],'DXyAY':function(_0x208432){return _0x5b8002[_0x24f9('‫e6','h5aU')](_0x208432);},'rnJeJ':_0x5b8002[_0x24f9('‮e7','r90^')],'ZbzeL':_0x5b8002[_0x24f9('‮e8','Ps6w')],'Rcsfi':function(_0x25ce80){return _0x25ce80();}};$[_0x24f9('‮e9','MFcn')](_0x23df3d,async(_0x38bd78,_0x59681c,_0x4ffd36)=>{if(_0x2d833f['OpdKi'](_0x2d833f['vknsU'],_0x24f9('‫ea','!T&g'))){try{if(_0x38bd78){if(_0x2d833f[_0x24f9('‮eb','p5fD')](_0x2d833f[_0x24f9('‫ec','1EgQ')],_0x24f9('‮ed','rCxr'))){console[_0x24f9('‮ee','rCxr')](_0x24f9('‮ef','00kR')+$[_0x24f9('‫f0','#UO*')]+_0x24f9('‫f1','&[Tb')+_0x38bd78);subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‮af','OXgp')]+_0x24f9('‫f2','rCxr')+_0x38bd78;}else{app_soy_lfb_data=process['env']['soy_lfb_data'][_0x24f9('‫f3','OXgp')]('#');}}else{let _0x31709d=JSON[_0x24f9('‮f4','!%M#')](_0x4ffd36);if(_0x31709d[_0x24f9('‮f5','OXgp')]==0x0){yue=_0x31709d['data'][_0x24f9('‮f6','Dz9f')][_0x24f9('‮f7','CRwr')];await _0x2d833f[_0x24f9('‫f8','v2uK')](fenrun);}else{if(_0x2d833f[_0x24f9('‫f9',']y#i')](_0x2d833f[_0x24f9('‮fa','hi4B')],_0x2d833f[_0x24f9('‫fb','Woqe')])){console['log'](_0x24f9('‮fc',']gEk')+$['index']+_0x24f9('‮fd','!T&g')+_0x31709d['msg']);}else{throw new Error(_0x24f9('‫28','[Th)'));}}}}catch(_0xb58598){console[_0x24f9('‮61','!T&g')](_0xb58598,_0x59681c);}finally{_0x2d833f[_0x24f9('‫fe','yF2C')](_0x54224b);}}else{console[_0x24f9('‮ff','00kR')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20观看广告】:\x20'+result[_0x24f9('‫100','e%Ji')]);}});});}function fenrun(){var _0x176254={'cSsQP':_0x24f9('‮101','na]d'),'dzYtt':_0x24f9('‫102','1KQq'),'qoQHe':function(_0x2d2f10,_0x47138a){return _0x2d2f10==_0x47138a;},'rDBRT':function(_0x59f487,_0x4684ec){return _0x59f487===_0x4684ec;},'knjxL':_0x24f9('‮103',']gEk'),'pYtKw':_0x24f9('‫104','hi4B'),'CgMoT':function(_0x45e6ba,_0x233fc2){return _0x45e6ba<_0x233fc2;},'TfmKZ':function(_0x29cb15,_0xd62258){return _0x29cb15!==_0xd62258;},'qUIBb':_0x24f9('‮105','v2uK'),'tnnsK':'asHxD','CkBXX':function(_0x2feca8,_0x5a9034){return _0x2feca8>=_0x5a9034;},'lPkHK':function(_0x470a3a,_0x38e07f){return _0x470a3a==_0x38e07f;},'byKqF':function(_0x3be5ba,_0x1944cc){return _0x3be5ba(_0x1944cc);},'sQPiT':function(_0x31e7ff,_0x36f7da,_0x41145f){return _0x31e7ff(_0x36f7da,_0x41145f);}};let _0x55d878=_0x176254[_0x24f9('‫106','c^m6')](Post_request,'fenrun/index','');return new Promise((_0x32e4c7,_0x2cae6d)=>{$[_0x24f9('‫107','1EgQ')](_0x55d878,async(_0x5ac130,_0xad7e34,_0x35ddb1)=>{try{if(_0x5ac130){console[_0x24f9('‫108','#UO*')](_0x24f9('‮109','5K@d')+$['index']+_0x24f9('‫10a','00kR'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‮10b','Ps6w')]+_0x24f9('‫10c','1KQq');}else{if(_0x176254[_0x24f9('‫10d','CRwr')]!==_0x176254['dzYtt']){let _0x8e542d=JSON[_0x24f9('‮10e','c$Fl')](_0x35ddb1);if(_0x176254[_0x24f9('‫10f','yF2C')](_0x8e542d['errcode'],0x0)){if(_0x176254[_0x24f9('‮110','c^m6')](_0x176254[_0x24f9('‫111',']jn#')],_0x176254[_0x24f9('‫112','5YUN')])){console['log'](_0x24f9('‫113','phBb')+$['index']+_0x24f9('‫114','Ps6w')+_0x8e542d['msg']);}else{for(let _0x2658dd=0x0;_0x176254['CgMoT'](_0x2658dd,_0x8e542d[_0x24f9('‫115','REZP')][_0x24f9('‮116','lpXC')]['length']);_0x2658dd++){if(_0x176254['TfmKZ'](_0x176254[_0x24f9('‮117',']jn#')],_0x176254['tnnsK'])){if(_0x176254['CkBXX'](yue,_0x8e542d['data'][_0x24f9('‫118','vDdi')][_0x2658dd][_0x24f9('‫119','k%SC')])&&_0x176254['lPkHK'](_0x8e542d[_0x24f9('‮11a','hi4B')][_0x24f9('‫11b','qpP(')][_0x2658dd][_0x24f9('‫11c','v2uK')],0x2)){await _0x176254['byKqF'](lqsave,_0x2658dd+0x1);}else{}}else{console[_0x24f9('‫11d','$uRq')](_0x24f9('‮fc',']gEk')+$['index']+_0x24f9('‫11e','Ps6w')+_0x8e542d[_0x24f9('‮11f','r90^')]);}}}}else{console['log'](_0x24f9('‮120','&[Tb')+$[_0x24f9('‫121',']9Hn')]+'\x20任务列表】:\x20'+_0x8e542d[_0x24f9('‫122','qpP(')]);}}else{console[_0x24f9('‫123','e%Ji')](e,_0xad7e34);}}}catch(_0x2e6bb7){console[_0x24f9('‮124','KxD!')](_0x2e6bb7,_0xad7e34);}finally{_0x32e4c7();}});});}function lqsave(_0x345940){var _0x56f532={'VjQOc':function(_0x1d019f,_0x4d5cd2){return _0x1d019f!==_0x4d5cd2;},'hAtpH':_0x24f9('‫125','5Hy&'),'UaIUt':_0x24f9('‮126','&[Tb'),'btxsf':function(_0x46e684,_0x332bc5){return _0x46e684==_0x332bc5;},'fEWMv':'HAyTL','cbgMP':function(_0x3e6ceb,_0x35b07c){return _0x3e6ceb==_0x35b07c;},'zcNyx':function(_0x300200){return _0x300200();},'Fgevr':function(_0x4585da){return _0x4585da();},'fjzOi':function(_0x32c962,_0xf9a694,_0x5f312b){return _0x32c962(_0xf9a694,_0x5f312b);}};let _0x218c18=_0x56f532[_0x24f9('‮127','teAY')](Post_request,_0x24f9('‫128','hi4B'),_0x24f9('‫129','yF2C')+_0x345940);return new Promise((_0x73fc10,_0x1bc64c)=>{$['post'](_0x218c18,async(_0x30aa20,_0x2bc149,_0x48ab7a)=>{try{if(_0x56f532[_0x24f9('‮12a','5g&3')](_0x56f532['hAtpH'],_0x56f532[_0x24f9('‮12b','1KQq')])){if(_0x30aa20){console[_0x24f9('‫12c','MFcn')](_0x24f9('‮ae','#p]g')+$['index']+'\x20领奖励】:\x20网络请求失败');subTitle+=_0x24f9('‫113','phBb')+$[_0x24f9('‮12d','5Gfg')]+_0x24f9('‮12e','v2uK');}else{let _0x2de9bd=JSON[_0x24f9('‮12f','!T&g')](_0x48ab7a);if(_0x56f532[_0x24f9('‫130','p5fD')](_0x2de9bd[_0x24f9('‫131','p5fD')],0x0)){if(_0x24f9('‮132','h5aU')===_0x56f532[_0x24f9('‫133','U6rq')]){console[_0x24f9('‫96','Dz9f')](e,_0x2bc149);}else{console['log'](_0x24f9('‮ae','#p]g')+$[_0x24f9('‮134','!T&g')]+'\x20领奖励】:\x20'+_0x2de9bd[_0x24f9('‫100','e%Ji')]);}}else if(_0x56f532['cbgMP'](_0x2de9bd[_0x24f9('‫135','hi4B')],0x65)){await _0x56f532[_0x24f9('‮136','!T&g')](list);}else{console['log'](_0x24f9('‫137','U6rq')+$['index']+_0x24f9('‫138','phBb')+_0x2de9bd[_0x24f9('‫139',']gEk')]);}}}else{console[_0x24f9('‮13a','5Hy&')](e);}}catch(_0x5c22a9){console[_0x24f9('‫11d','$uRq')](_0x5c22a9,_0x2bc149);}finally{_0x56f532['Fgevr'](_0x73fc10);}});});}function Post_request(_0x1a5657,_0x1e2445){var _0x4bc3dc={'rVZrC':_0x24f9('‮13b','Ps6w'),'wBvzf':'application/x-www-form-urlencoded','SYqCD':_0x24f9('‫13c','vDdi'),'CVBjK':'gzip'};let _0x4a3b2a=Math[_0x24f9('‮13d','OXgp')](new Date()[_0x24f9('‮13e','Dz9f')]());return{'url':_0x24f9('‮13f','e%Ji')+_0x1a5657,'headers':{'autoken':token,'user-agent':_0x4bc3dc[_0x24f9('‮140','Woqe')],'Content-Type':_0x4bc3dc[_0x24f9('‫141','!T&g')],'Content-Length':'0','Host':_0x24f9('‫142','1EgQ'),'Connection':_0x4bc3dc[_0x24f9('‮143','wEm3')],'Accept-Encoding':_0x4bc3dc[_0x24f9('‮144','$uRq')]},'body':_0x1e2445};};function Get_request(_0xa60d28){var _0x58fe7b={'fKdqO':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SKW-A0\x20Build/N6F26Q;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20/6.2\x20TBS/045946\x20Mobile\x20Safari/537.36SdwWorld\x20Android','amAsv':_0x24f9('‫145','[Th)'),'UlHtI':_0x24f9('‫142','1EgQ'),'jGqYZ':'Keep-Alive'};return{'url':'http://frb.quancankeji.com/api/v1/'+_0xa60d28,'headers':{'autoken':token,'user-agent':_0x58fe7b[_0x24f9('‫146','!T&g')],'Content-Type':_0x58fe7b[_0x24f9('‮147','k%SC')],'Content-Length':'0','Host':_0x58fe7b[_0x24f9('‫148','5Gfg')],'Connection':_0x58fe7b[_0x24f9('‮149','OXgp')],'Accept-Encoding':'gzip'}};};async function yyz_login(){var _0x109363={'nUrkq':'QZzoU','MAFcD':function(_0x207f06,_0x1f51f5){return _0x207f06!==_0x1f51f5;},'YtdnW':_0x24f9('‫14a','UhhR'),'gKRjs':function(_0x324a69,_0x2f871f){return _0x324a69==_0x2f871f;},'HDEAq':function(_0xc1e4b1,_0x1fe9cc){return _0xc1e4b1(_0x1fe9cc);},'hPQIj':function(_0x5ea5dc){return _0x5ea5dc();},'igCMo':_0x24f9('‫14b',']gEk'),'lZvXq':_0x24f9('‮14c','wEm3'),'TNeBd':function(_0x17665d,_0x1f9d1d){return _0x17665d!==_0x1f9d1d;},'pYLLB':_0x24f9('‮14d','#UO*'),'mZcsQ':_0x24f9('‫14e',']jn#'),'zLjis':function(_0x27c6db,_0x513360){return _0x27c6db/_0x513360;},'eRLJq':function(_0x5c5311,_0x2a0446){return _0x5c5311+_0x2a0446;},'bCmBl':function(_0x441bb8,_0x5b0df0){return _0x441bb8+_0x5b0df0;},'wKsaO':function(_0x27eca8,_0x45ad7f){return _0x27eca8+_0x45ad7f;},'kzEsw':_0x24f9('‫14f','p5fD')};var _0x3d0d14=Math[_0x24f9('‫150','wEm3')](_0x109363[_0x24f9('‫151','r90^')](Date[_0x24f9('‫152','r90^')](),0x3e8));var _0x328cbc=CryptoJs[_0x24f9('‮153','p5fD')](''+TG_ID+mac+os['hostname']()+YZ)[_0x24f9('‫154','qpP(')]();var _0x148acf=_0x24f9('‫155','vDdi')+TG_ID+'&password=123456&markcode='+_0x328cbc+_0x24f9('‫156','wEm3')+_0x3d0d14;var _0x38fb97=CryptoJs[_0x24f9('‫157','k%SC')](_0x109363[_0x24f9('‮158','UhhR')](_0x148acf+'&',appid))[_0x24f9('‫159','p5fD')]();_0x148acf=_0x109363['bCmBl'](_0x109363[_0x24f9('‮15a','Dz9f')](_0x148acf,'&sign='),_0x38fb97);let _0x5cfcef={'url':serverUrl+_0x24f9('‮15b','OXgp'),'headers':{'user-agent':_0x109363['kzEsw']},'body':_0x148acf};return new Promise((_0x245a86,_0x5ee557)=>{var _0x1d2c40={'YHcXK':_0x109363[_0x24f9('‮15c','rCxr')],'soCUp':_0x24f9('‫15d','5YUN'),'gOjID':function(_0x1bdf54,_0x4cc1d2){return _0x109363['MAFcD'](_0x1bdf54,_0x4cc1d2);},'udDYO':_0x109363[_0x24f9('‮15e','f4YM')],'PRfvc':_0x24f9('‫15f','KxD!'),'OnIvJ':function(_0x513b8b,_0xc77a2f){return _0x109363['gKRjs'](_0x513b8b,_0xc77a2f);},'aCFBs':function(_0x512287,_0x163f14){return _0x109363['HDEAq'](_0x512287,_0x163f14);},'YHJuD':function(_0x36e6f3){return _0x109363[_0x24f9('‮160','r90^')](_0x36e6f3);},'NJxWq':_0x109363[_0x24f9('‮161','5Gfg')],'ouJGj':_0x109363[_0x24f9('‫162','00kR')],'SlNCc':function(_0x5f1c18){return _0x109363[_0x24f9('‫163','f4YM')](_0x5f1c18);}};if(_0x109363[_0x24f9('‫164','KxD!')](_0x109363['pYLLB'],_0x109363[_0x24f9('‫165','REZP')])){$[_0x24f9('‮166','r90^')](_0x5cfcef,async(_0x39623a,_0x4c05b2,_0x448478)=>{try{if(_0x1d2c40[_0x24f9('‮167','5g&3')]===_0x1d2c40[_0x24f9('‫168','K8u!')]){console[_0x24f9('‫169','qpP(')](e,_0x4c05b2);}else{if(_0x39623a){if(_0x1d2c40[_0x24f9('‫16a','e%Ji')](_0x1d2c40['udDYO'],_0x1d2c40[_0x24f9('‫16b','5Hy&')])){console[_0x24f9('‮16c','k%SC')]('\x0a['+TG_ID+_0x24f9('‫16d',']gEk')+_0x39623a);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20返回\x20'+_0x39623a;}else{Tips=author[_0x24f9('‫16e','c$Fl')](/(\S*)TG_ID:@ls_soy/)[0x1];}}else{let _0xff1497=JSON[_0x24f9('‫16f','[Th)')](_0x448478);if(_0x1d2c40[_0x24f9('‮170','!T&g')](_0xff1497[_0x24f9('‫171','Dz9f')],0xc8)){let _0x201a63=_0x1d2c40[_0x24f9('‫172','1EgQ')](Format_time,_0xff1497[_0x24f9('‫173','na]d')][_0x24f9('‮174','c^m6')][_0x24f9('‮175','OXgp')]);console[_0x24f9('‫59','vDdi')]('\x0a['+TG_ID+']:\x20登录成功:\x20VIP到期时间\x20'+_0x201a63);await get_vip(_0xff1497[_0x24f9('‮176','Dz9f')][_0x24f9('‮177','!%M#')]);}else if(_0xff1497[_0x24f9('‮178','Ye[t')]==0x71){await _0x1d2c40[_0x24f9('‮179','K8u!')](yyz_user_reg);}else{if(_0x24f9('‫17a','phBb')===_0x1d2c40[_0x24f9('‮17b','!T&g')]){app_soy_lfb_data=process['env'][_0x24f9('‮17c','Woqe')][_0x24f9('‮17d','5Hy&')]();}else{console[_0x24f9('‮17e','1EgQ')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0xff1497[_0x24f9('‮65','lpXC')]);subTitle+='\x0a['+TG_ID+_0x24f9('‮17f','c^m6')+_0xff1497['msg'];return![];}}}}}catch(_0x38c154){console['log'](_0x38c154);}finally{if(_0x24f9('‮14c','wEm3')!==_0x1d2c40[_0x24f9('‫180','h5aU')]){_0x245a86();}else{_0x1d2c40['SlNCc'](_0x245a86);}}});}else{_0x245a86();}});}async function yyz_user_reg(){var _0x51b0cf={'kguwF':function(_0x152fd9){return _0x152fd9();},'vabNs':function(_0x53a88d,_0x63c8db){return _0x53a88d==_0x63c8db;},'OJdtj':function(_0x3338c7,_0x50ec56){return _0x3338c7!==_0x50ec56;},'myZYq':_0x24f9('‫181','&[Tb'),'LATgW':'DBJPO','ixRQv':'djvgB','JJSkP':function(_0x4bff03,_0x3c958b){return _0x4bff03&&_0x3c958b;},'FFyYD':function(_0x3550d6,_0x295bec){return _0x3550d6/_0x295bec;},'MnMRq':function(_0x1c3934,_0x562f9d){return _0x1c3934+_0x562f9d;},'tXLNn':_0x24f9('‫182','1EgQ')};if(_0x51b0cf['JJSkP'](!Tips,!YZ)){console['log'](_0x24f9('‮183','rCxr'));return![];}var _0x12d5af=Math[_0x24f9('‫184','!%M#')](_0x51b0cf[_0x24f9('‮185','hi4B')](Date['now'](),0x3e8));var _0x1d0eb0=CryptoJs[_0x24f9('‮186','OXgp')](''+TG_ID+mac+os[_0x24f9('‫187','1EgQ')]()+YZ)[_0x24f9('‫188','yF2C')]();var _0x4806ff=_0x24f9('‮189','v2uK')+TG_ID+_0x24f9('‫18a','!%M#')+_0x1d0eb0+'&t='+_0x12d5af;var _0x2503c9=CryptoJs[_0x24f9('‫18b','Woqe')](_0x51b0cf[_0x24f9('‮18c','!T&g')](_0x4806ff+'&',appid))[_0x24f9('‫18d','U6rq')]();_0x4806ff=_0x4806ff+_0x24f9('‫18e','5Gfg')+_0x2503c9;let _0x42c166={'url':serverUrl+'user_reg','headers':{'user-agent':_0x51b0cf[_0x24f9('‮18f','5Hy&')]},'body':_0x4806ff};return new Promise((_0x2dd0cb,_0x36f1e2)=>{var _0x4c4c66={'kHGcx':function(_0x262f16){return _0x51b0cf['kguwF'](_0x262f16);},'gepNA':function(_0x489775,_0x5a8f5c){return _0x51b0cf[_0x24f9('‫190','K8u!')](_0x489775,_0x5a8f5c);},'zsAZv':_0x24f9('‮191','[Th)'),'jacrZ':'NdvRX','uxanG':function(_0x47e4f6,_0x6e4af0){return _0x51b0cf[_0x24f9('‫192',']gEk')](_0x47e4f6,_0x6e4af0);},'TyvCK':_0x51b0cf[_0x24f9('‮193','5YUN')],'vOGMA':_0x24f9('‮194','yF2C')};if(_0x51b0cf[_0x24f9('‮195','OXgp')]!==_0x51b0cf[_0x24f9('‮196',']gEk')]){$[_0x24f9('‮197','!%M#')](_0x42c166,async(_0x32e3d9,_0x209371,_0x1c83a9)=>{try{if(_0x32e3d9){console[_0x24f9('‫108','#UO*')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x32e3d9);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x32e3d9;}else{let _0x1262cb=JSON[_0x24f9('‫198','f4YM')](_0x1c83a9);if(_0x1262cb[_0x24f9('‮199','UhhR')]==0xc8){await _0x4c4c66[_0x24f9('‫19a','KxD!')](yyz_login);}else if(_0x4c4c66['gepNA'](_0x1262cb['code'],0x75)){if('qHJwh'===_0x4c4c66[_0x24f9('‫19b','h5aU')]){throw new Error(_0x24f9('‮19c','5Gfg'));}else{console[_0x24f9('‫19d','&[Tb')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x1262cb[_0x24f9('‫19e','teAY')]+_0x24f9('‮19f','CRwr'));return![];}}else{if('IzTHR'===_0x4c4c66['jacrZ']){console[_0x24f9('‮1a0','na]d')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x1262cb['msg']);subTitle+='\x0a['+TG_ID+_0x24f9('‮1a1','rCxr')+_0x1262cb['msg'];return![];}else{console['log']('\x0a['+TG_ID+_0x24f9('‮1a2','vDdi')+_0x1262cb[_0x24f9('‮1a3','k%SC')]);subTitle+='\x0a['+TG_ID+_0x24f9('‫1a4','5Hy&')+_0x1262cb[_0x24f9('‫1a5','5YUN')];return![];}}}}catch(_0xa809eb){if(_0x4c4c66[_0x24f9('‮1a6','5Hy&')](_0x4c4c66[_0x24f9('‫1a7','Dz9f')],_0x4c4c66[_0x24f9('‮1a8',']9Hn')])){console[_0x24f9('‫19d','&[Tb')](_0xa809eb);}else{app_soy_lfb_data=process[_0x24f9('‫1a9','#p]g')][_0x24f9('‮49','REZP')][_0x24f9('‫1aa','!T&g')]('@');}}finally{_0x2dd0cb();}});}else{console[_0x24f9('‮124','KxD!')](e);}});}async function get_vip(_0x33dce6){var _0x4ff192={'GTioI':function(_0x414a29){return _0x414a29();},'xwmdb':function(_0x140d85,_0x377dc3){return _0x140d85===_0x377dc3;},'LEGpU':_0x24f9('‫1ab','f4YM'),'INfjd':_0x24f9('‫1ac','KxD!'),'VtoES':function(_0x5dbb0d,_0x46a42e){return _0x5dbb0d===_0x46a42e;},'nSZZw':_0x24f9('‮1ad','e%Ji'),'JttAi':function(_0x36f558,_0x428a17){return _0x36f558==_0x428a17;},'RLWRT':'kcbqf','TOLJn':'jsFBu','TRdvC':function(_0x134077,_0x255535){return _0x134077==_0x255535;},'WrsKy':_0x24f9('‮1ae',']jn#'),'xSawq':_0x24f9('‮1af','5Hy&'),'iiozi':function(_0x57b84d,_0x57826e){return _0x57b84d!==_0x57826e;},'HGPdp':_0x24f9('‫1b0','CRwr'),'rbaZa':function(_0x384eea,_0x4ac76d){return _0x384eea/_0x4ac76d;},'pJTrf':function(_0x20e9f5,_0x3a4a1a){return _0x20e9f5+_0x3a4a1a;},'dXtgp':function(_0x4e6401,_0xadd174){return _0x4e6401+_0xadd174;},'WSXdA':'&sign='};var _0x55bb44=Math[_0x24f9('‫1b1','c$Fl')](_0x4ff192[_0x24f9('‮1b2','phBb')](Date[_0x24f9('‫1b3','Ye[t')](),0x3e8));var _0x22efc2='script=ggb&num='+user_num+'&token='+_0x33dce6+'&t='+_0x55bb44;var _0x48073a=CryptoJs[_0x24f9('‫1b4','Ps6w')](_0x4ff192[_0x24f9('‮1b5','vDdi')](_0x22efc2+'&',appid))[_0x24f9('‮1b6','rCxr')]();_0x22efc2=_0x4ff192['dXtgp'](_0x22efc2+_0x4ff192['WSXdA'],_0x48073a);let _0x5c4d1b={'url':serverUrl+_0x24f9('‫1b7','K8u!'),'headers':{'user-agent':_0x24f9('‮1b8','c^m6')},'body':_0x22efc2};return new Promise((_0x30e41c,_0x5aab08)=>{var _0x2c56d4={'RdsKO':function(_0x45864e){return _0x4ff192[_0x24f9('‮1b9','#UO*')](_0x45864e);},'ZUyTa':function(_0x1a1646,_0x3582d3){return _0x4ff192['xwmdb'](_0x1a1646,_0x3582d3);},'FTimS':_0x4ff192['LEGpU'],'dRnWS':_0x4ff192[_0x24f9('‮1ba','rCxr')],'OJRjo':function(_0x335c78,_0x217dd2){return _0x4ff192[_0x24f9('‮1bb','c$Fl')](_0x335c78,_0x217dd2);},'CHnlL':function(_0x34e317,_0x440000){return _0x34e317!==_0x440000;},'COAbH':_0x4ff192[_0x24f9('‮1bc','wEm3')],'WvjKr':function(_0x52861b,_0x64161a){return _0x4ff192[_0x24f9('‮1bd',']gEk')](_0x52861b,_0x64161a);},'lXkcv':function(_0x29d458,_0x15f923){return _0x29d458!==_0x15f923;},'aIYYj':_0x4ff192[_0x24f9('‫1be','5K@d')],'GioRk':_0x4ff192[_0x24f9('‫1bf','h5aU')],'cHhkG':function(_0x365d93,_0x4abeb5){return _0x4ff192['TRdvC'](_0x365d93,_0x4abeb5);},'MfKju':function(_0x30752f,_0x368264){return _0x4ff192[_0x24f9('‮1c0',']y#i')](_0x30752f,_0x368264);},'DFSzS':_0x4ff192[_0x24f9('‫1c1','wEm3')],'dHXiG':'dcKFi','xaLvQ':_0x4ff192[_0x24f9('‫1c2','&[Tb')],'uHyCk':function(_0x4eaed1,_0x133763){return _0x4ff192[_0x24f9('‮1c3','#UO*')](_0x4eaed1,_0x133763);},'MWUuN':_0x24f9('‮1c4','MFcn'),'jdxgO':function(_0xfafdd5,_0x5ec45a){return _0x4ff192[_0x24f9('‫1c5','Ps6w')](_0xfafdd5,_0x5ec45a);},'DFSSX':_0x4ff192[_0x24f9('‮1c6',']gEk')],'pMusc':_0x24f9('‮1c7','#p]g'),'haFoV':function(_0x761851){return _0x4ff192['GTioI'](_0x761851);}};$['post'](_0x5c4d1b,async(_0x7318ba,_0x59ba65,_0x3974a6)=>{if(_0x2c56d4[_0x24f9('‫1c8','teAY')](_0x2c56d4[_0x24f9('‮1c9','00kR')],_0x2c56d4['dRnWS'])){throw new Error(_0x24f9('‫1ca','5Hy&'));}else{try{if(_0x2c56d4[_0x24f9('‮1cb','#UO*')](_0x24f9('‫1cc','c$Fl'),_0x24f9('‮1cd','e%Ji'))){if(_0x7318ba){if(_0x2c56d4[_0x24f9('‫1ce','lpXC')](_0x24f9('‫1cf','vDdi'),_0x2c56d4[_0x24f9('‫1d0','e%Ji')])){console['log']('\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x7318ba);subTitle+='\x0a['+TG_ID+']:\x20验证账号:\x20返回\x20'+_0x7318ba;}else{_0x2c56d4[_0x24f9('‮1d1','h5aU')](_0x30e41c);}}else{let _0x30eec5=JSON[_0x24f9('‮1d2','r90^')](_0x3974a6);if(_0x2c56d4[_0x24f9('‮1d3','lpXC')](_0x30eec5[_0x24f9('‮1d4','#UO*')],0xc8)){if(_0x2c56d4['lXkcv'](_0x2c56d4['aIYYj'],_0x2c56d4[_0x24f9('‫1d5','vDdi')])){user_index=_0x30eec5[_0x24f9('‫1d6','5Gfg')];await implement();}else{console['log'](_0x24f9('‮1d7','k%SC')+$[_0x24f9('‮89','U6rq')]+_0x24f9('‫1d8','vDdi')+_0x7318ba);subTitle+=_0x24f9('‮1d9','5Hy&')+$['index']+_0x24f9('‮1da','!%M#')+_0x7318ba;}}else if(_0x2c56d4[_0x24f9('‮1db','&[Tb')](_0x30eec5[_0x24f9('‫1dc','vDdi')],0xca)){if(_0x2c56d4['MfKju'](_0x24f9('‮1dd','UhhR'),_0x2c56d4[_0x24f9('‮1de','!T&g')])){console[_0x24f9('‮1df','hi4B')]('\x0a['+TG_ID+_0x24f9('‮1e0','5Gfg')+_0x7318ba);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x7318ba;}else{console[_0x24f9('‮61','!T&g')]('\x0a['+TG_ID+_0x24f9('‫1e1','[Th)')+_0x30eec5[_0x24f9('‫1e2',']jn#')]);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+_0x30eec5[_0x24f9('‫1e3','c$Fl')];}}else if(_0x30eec5[_0x24f9('‫1e4','f4YM')]==0xcd){if(_0x2c56d4[_0x24f9('‮1e5','1EgQ')]!==_0x2c56d4[_0x24f9('‮1e6','CRwr')]){console[_0x24f9('‫1e7','5Gfg')]('\x0a['+TG_ID+_0x24f9('‮1e8','Ps6w')+_0x30eec5['msg']);subTitle+='\x0a['+TG_ID+']:\x20数量验证:\x20'+_0x30eec5[_0x24f9('‫1e9','v2uK')];}else{app_soy_lfb_data=process[_0x24f9('‫1ea','na]d')][_0x24f9('‫1eb','rCxr')][_0x24f9('‮1ec','v2uK')]('\x0a');}}else{if(_0x2c56d4['uHyCk'](_0x24f9('‮1c4','MFcn'),_0x2c56d4[_0x24f9('‫1ed','1EgQ')])){console[_0x24f9('‮1ee','K8u!')]('\x0a['+TG_ID+_0x24f9('‮1ef','c^m6')+_0x30eec5['msg']+'，该TG_ID/设备/IP已被注册');return![];}else{console[_0x24f9('‮ee','rCxr')]('\x0a['+TG_ID+_0x24f9('‫1f0','MFcn'));subTitle+='\x0a['+TG_ID+_0x24f9('‫1f1','Ye[t');return![];}}}}else{console[_0x24f9('‫59','vDdi')](_0x24f9('‮1f2','yF2C')+$[_0x24f9('‫f0','#UO*')]+'\x20观看广告】:\x20观看成功');}}catch(_0x4cc7f8){if(_0x2c56d4['jdxgO'](_0x2c56d4['DFSSX'],_0x2c56d4[_0x24f9('‫1f3','rCxr')])){console['log'](_0x4cc7f8);}else{console['log'](_0x4cc7f8);}}finally{_0x2c56d4[_0x24f9('‮1f4','5YUN')](_0x30e41c);}}});});}async function card(_0x507d95){var _0x2112b4={'BhCXo':_0x24f9('‫1f5','k%SC'),'SDGvb':function(_0x24bcaa,_0x71681c){return _0x24bcaa==_0x71681c;},'fURIk':_0x24f9('‮1f6','5K@d'),'ERqtv':function(_0x69f9cf,_0x1c4153){return _0x69f9cf===_0x1c4153;},'HdbUT':'mdzSu','UFKUh':_0x24f9('‮1f7','K8u!'),'TfaOs':'kPrzn','xOhYG':function(_0x4bffd8){return _0x4bffd8();},'dYTHf':function(_0x7f54e7,_0x16b825){return _0x7f54e7(_0x16b825);},'vTtej':'node-rsa','qSjix':function(_0x60e584,_0x1fe142){return _0x60e584/_0x1fe142;},'GSurU':function(_0x28eb64,_0x30b7f4){return _0x28eb64+_0x30b7f4;},'sZPbp':function(_0x448547,_0x1a18c6){return _0x448547+_0x1a18c6;},'fRQCB':_0x24f9('‫1f8','lpXC')};console[_0x24f9('‮1f9','h5aU')](yyz_Kami);var _0x4de138=Math[_0x24f9('‫1fa','$uRq')](_0x2112b4[_0x24f9('‫1fb','REZP')](Date[_0x24f9('‮1fc','5Hy&')](),0x3e8));var _0x3e416d=_0x24f9('‮1fd','na]d')+_0x507d95+_0x24f9('‫1fe','UhhR')+yyz_Kami+'&t='+_0x4de138;var _0xb955a8=CryptoJs[_0x24f9('‫1ff','na]d')](_0x2112b4['GSurU'](_0x2112b4[_0x24f9('‮200','v2uK')](_0x3e416d,'&'),appid))[_0x24f9('‮201','lpXC')]();_0x3e416d=_0x2112b4['sZPbp'](_0x2112b4[_0x24f9('‫202',']y#i')](_0x3e416d,_0x24f9('‮203','c$Fl')),_0xb955a8);let _0x352181={'url':serverUrl+'card','headers':{'user-agent':_0x2112b4['fRQCB']},'body':_0x3e416d};return new Promise((_0x15ea26,_0x529733)=>{var _0x1287ea={'GLoLJ':function(_0xb299eb,_0x2cc335){return _0x2112b4[_0x24f9('‫204','hi4B')](_0xb299eb,_0x2cc335);},'ckUEj':_0x2112b4['vTtej']};$[_0x24f9('‫205','f4YM')](_0x352181,async(_0x31deb9,_0x12069a,_0x242b14)=>{try{if(_0x24f9('‮206','f4YM')!==_0x2112b4['BhCXo']){if(_0x31deb9){console[_0x24f9('‮207','Ye[t')]('\x0a['+TG_ID+_0x24f9('‫de','p5fD')+_0x31deb9);subTitle+='\x0a['+TG_ID+_0x24f9('‮208','#p]g')+_0x31deb9;}else{let _0x2641e7=JSON[_0x24f9('‫209','Ps6w')](_0x242b14);if(_0x2112b4['SDGvb'](_0x2641e7[_0x24f9('‫20a',']9Hn')],0xc8)){if(_0x24f9('‫20b',']9Hn')!==_0x2112b4['fURIk']){RSA_js=$[_0x24f9('‫0','Woqe')]()?_0x1287ea[_0x24f9('‫20c','c$Fl')](require,_0x1287ea[_0x24f9('‮20d','f4YM')]):'';}else{console[_0x24f9('‫24',']9Hn')]('\x0a['+TG_ID+_0x24f9('‫20e','CRwr')+_0x2641e7[_0x24f9('‫1e2',']jn#')]+_0x24f9('‮20f','!T&g'));return![];}}else{console[_0x24f9('‫210',']gEk')]('\x0a['+TG_ID+_0x24f9('‫211','p5fD')+_0x2641e7[_0x24f9('‮11f','r90^')]);subTitle+='\x0a['+TG_ID+_0x24f9('‮212','1EgQ')+_0x2641e7[_0x24f9('‮b1','yF2C')];return![];}}}else{console[_0x24f9('‫213','c$Fl')]('\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‫214','qpP(')]+_0x24f9('‫215','f4YM')+result['msg']);}}catch(_0x3f26c9){if(_0x2112b4[_0x24f9('‫216','&[Tb')](_0x2112b4[_0x24f9('‮217','r90^')],_0x24f9('‫218','5K@d'))){console[_0x24f9('‮1a0','na]d')](_0x3f26c9);}else{console[_0x24f9('‫210',']gEk')]('\x0a【soy脚本提示---账号\x20'+$[_0x24f9('‫219','!%M#')]+_0x24f9('‫21a','c$Fl')+result[_0x24f9('‮21b','Ps6w')]);}}finally{if(_0x2112b4[_0x24f9('‫21c','!T&g')](_0x2112b4[_0x24f9('‮21d','vDdi')],_0x2112b4[_0x24f9('‮21e','vDdi')])){console['log']('\x0a['+TG_ID+_0x24f9('‫21f','wEm3')+result['msg']);subTitle+='\x0a['+TG_ID+']:\x20验证脚本:\x20'+result['msg'];}else{_0x2112b4[_0x24f9('‮220','&[Tb')](_0x15ea26);}}});});}function Format_time(_0x58b9f2){var _0x356657={'fDnaQ':function(_0x563095,_0x2f75f5){return _0x563095*_0x2f75f5;},'OEVel':function(_0x25185b,_0xd3aba4){return _0x25185b+_0xd3aba4;},'stWUK':function(_0x827d50,_0x32616c){return _0x827d50<_0x32616c;},'LmLLc':function(_0x59bd54,_0x180891){return _0x59bd54+_0x180891;},'qBRwQ':function(_0x30c5e0,_0xa5ba46){return _0x30c5e0+_0xa5ba46;},'xYiGS':function(_0x457a0b,_0x3e6d60){return _0x457a0b+_0x3e6d60;},'mdXGu':function(_0x2c29b7,_0x41cc70){return _0x2c29b7+_0x41cc70;}};var _0x40e633=new Date(_0x356657[_0x24f9('‮221','1EgQ')](_0x58b9f2,0x3e8));var _0x232ce6=_0x40e633[_0x24f9('‫222','e%Ji')]()+'-';var _0x7f84b2=_0x356657['OEVel'](_0x356657[_0x24f9('‮223','vDdi')](_0x356657['OEVel'](_0x40e633['getMonth'](),0x1),0xa)?_0x356657[_0x24f9('‫224','qpP(')]('0',_0x40e633[_0x24f9('‫225','#UO*')]()+0x1):_0x356657[_0x24f9('‮226','phBb')](_0x40e633[_0x24f9('‫227','UhhR')](),0x1),'-');var _0xfa536f=_0x356657[_0x24f9('‮228','REZP')](_0x40e633[_0x24f9('‫229',']y#i')](),'\x20');var _0x599da2=_0x40e633[_0x24f9('‮22a','#p]g')]()+':';var _0x362999=_0x356657[_0x24f9('‫22b','Dz9f')](_0x40e633['getMinutes']()<0xa?'0'+_0x40e633[_0x24f9('‫22c','MFcn')]():_0x40e633['getMinutes'](),':');var _0x42096b=_0x40e633[_0x24f9('‫22d',']gEk')]();let _0x413d11=_0x356657[_0x24f9('‮22e','Dz9f')](_0x356657['qBRwQ'](_0x356657[_0x24f9('‫22f','KxD!')](_0x232ce6,_0x7f84b2)+_0xfa536f,_0x599da2)+_0x362999,_0x42096b);return _0x356657[_0x24f9('‫230','[Th)')](_0x356657['xYiGS'](_0x356657['mdXGu'](_0x356657[_0x24f9('‫231','[Th)')](_0x232ce6,_0x7f84b2),_0xfa536f)+_0x599da2,_0x362999),_0x42096b);};_0xodi='jsjiami.com.v6';

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