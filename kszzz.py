import json
import random
import time
import requests
import pprint
import urllib3
import os

urllib3.disable_warnings()


def generate_random_did(randomlength=16):
    """
    生成一个指定长度的随机字符串
    """
    random_str = ''
    base_str = 'abcdef0123456789'
    length = len(base_str) - 1
    for i in range(randomlength):
        random_str += base_str[random.randint(0, length)]
    return random_str


def get_assistanceId(ck):
    url = "https://nebula.kuaishou.com/rest/zt/encourage/assistance/detail?assistanceMetaId=2"
    headers = {
        'Host': 'nebula.kuaishou.com',
        'Origin': 'https://nebula.kuaishou.com',
        'Cookie': ck+generate_random_did(randomlength=16)+';',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.517 (rel;rg;low) Mobile Safari/537.36 Yoda/2.8.4-rc8 ksNebula/10.5.20.3765 OS_PRO_BIT/32 MAX_PHY_MEM/5466 AZPREFIX/zw ICFO/0 StatusHT/30 TitleHT/44 NetType/WIFI ISLP/1 ISDM/0 ISLB/0 locale/zh-cn',
        'Referer': 'https://nebula.kuaishou.com/nebula/daily-invite',
    }

    response = requests.get(url, headers=headers).json()
    # pprint.pprint(response)
    if response["result"] == 1:
        assistanceId=response["assistanceInfo"]["assistanceId"]
        name = response["assistanceInfo"]["createNickName"]
        print(name,assistanceId)
        return name,assistanceId

def assistance(name,ck,assistanceId):
    url = "https://nebula.kuaishou.com/rest/zt/encourage/assistance/friendAssist"
    headers = {
        'Host': 'nebula.kuaishou.com',
        'Connection': 'keep-alive',
        'Content-Length': '35',
        'content-type': 'application/json',
        'Accept': '*/*',
        'Origin': 'https://nebula.kuaishou.com',
        'X-Requested-With': 'com.kuaishou.nebula',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://nebula.kuaishou.com/nebula/daily-invite?fid=2354339122&cc=panelPoster&shareMode=APP&followRefer=151&originShareId=17020990627054&shareMethod=PICTURE&kpn=NEBULA&subBiz=WEEK&shareId=17020990627054&shareObjectId=2886208793121855&shareUrlOpened=0&timestamp=1656682685132&layoutType=4&source=RETURN_POPUP&login_extra=ENLIVEN_POPULARITY_DIALOG',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': ck + generate_random_did(randomlength=16) + ';',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.517 (rel;rg;low) Mobile Safari/537.36 Yoda/2.8.4-rc8 ksNebula/10.5.20.3765 OS_PRO_BIT/32 MAX_PHY_MEM/5466 AZPREFIX/zw ICFO/0 StatusHT/30 TitleHT/44 NetType/WIFI ISLP/1 ISDM/0 ISLB/0 locale/zh-cn',
    }
    body = {"assistanceId":assistanceId}
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url,data=body,headers=headers).json()
    # print(response)
    print(f"助力{name}{response['msg']}")
    # if response["result"] == 1:
    #     print(i, response["assistanceInfo"]["assistanceId"])
    #     return response["assistanceInfo"]["assistanceId"]



if __name__ == '__main__':

    # ksjsbCookie = []
    ks = ['kpn=NEBULA; kpf=ANDROID_PHONE; userId=2354339122; c=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; ver=10.5; appver=10.5.20.3765; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; ud=2354339122; did_tag=7; egid=DFPAF85D438A761EC8C4E7577112B770047380E659D03DCADC3F8D7744268F3C; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_a8d876dcc364086c; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; slh=0; country_code=cn; nbh=132; hotfix_ver=; did_gt=1656672553369; keyconfig_state=2; max_memory=192; sid=4630ef90-c916-4b2f-aeed-9bc7b1905bd8; cold_launch_time_ms=1656672552696; oc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; ll_client_time=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_8396f3ae78c605f0; sbh=83; darkMode=false; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAH3oOyAMcRsnbhiDOFGjpOFjJp7uJg4yNvSlxGP6E-sfigklInKkXJiv0j8rTmHLmo_aS6zFsWQdUWgI56L4ru-9w9SENsYujs1B5XsowJQ80c2LPsDTP9jlH45XhMp0PEewerdjLKhZcJWKVZV3AuUhDW99UQxrK3j_w1HBAT-LUhs7dS4MsXuXjNIWWiR6xGncC8RdVDgLCsoYPlKbThtGhJrNN-fL8lNH4AKLNFPdkh-L7kiICTktMw772fm5BxMTBkFK6Lm7SNvkrx7UmQkFmiw1rodKAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAH3oOyAMcRsnbhiDOFGjpOFjJp7uJg4yNvSlxGP6E-sfigklInKkXJiv0j8rTmHLmo_aS6zFsWQdUWgI56L4ru-9w9SENsYujs1B5XsowJQ80c2LPsDTP9jlH45XhMp0PEewerdjLKhZcJWKVZV3AuUhDW99UQxrK3j_w1HBAT-LUhs7dS4MsXuXjNIWWiR6xGncC8RdVDgLCsoYPlKbThtGhJrNN-fL8lNH4AKLNFPdkh-L7kiICTktMw772fm5BxMTBkFK6Lm7SNvkrx7UmQkFmiw1rodKAUwAQ; __NSWJ=o5xcqBn%2Bg%2Bw8IZh230sfnZO1WjI9NnefrjLnaroOUiJUkunYTRDcVTrCWNSG31O5AAAAAQ%3D%3D; client_key=2ac2a76d; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAa3lx2jEBRJtRupvJvm0jauPNwJ5ETcHCXeLdrjZLmVsbmubqhi5zVCrGXi0Q0KVCyxEZglemUAdZmOH98P8aTq1p2HmS-xC_WN2VHD4fjDFCI6UG_QoCxwQd4ctqSr80cLjOsOREC0vK2zAS2raILYR8HqMZBwMzFY5iaMms4veai7c37bCsxpDHxzwIhZOohoSvseR5dQouxm0wf6PgQdmNSXIIiCHLoEQIwbMA6697oI46rx5d-_9Ezc7poMbMT7ncbjZGigFMA',
        'kpn=NEBULA; kpf=ANDROID_PHONE; userId=2890379401; c=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; ver=10.5; appver=10.5.20.3765; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; ud=2890379401; did_tag=2; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1656035390501; keyconfig_state=2; max_memory=192; oc=ANDROID_SHENMA_ZW_SSYQ_CPC_NEBULA%2C2; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_9e323b21758d40fe; sbh=83; darkMode=false; client_key=2ac2a76d; thermal=10000; earphoneMode=1; isp=CMCC; is_background=0; didv=1656045032000; egid=DFP0E9B55E38F65576DC57BEF2ACD880A0719817C30CA6E9CD8C288243B1B7DD; sid=a37e73b0-5544-45f1-a8f1-3bc54679c2dc; cold_launch_time_ms=1656654656459; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSkAHtRyehvLdLgV-QgHI85h9aFa-IFh-jUEvZkHi1bEnD-fEdzG3iIMPfpGo0h4teVeVdldMAZSjt8VDcOaQ31mHhNSPOY8KA5iTPAkOTcDw-0h_F67VP7BTXzqFJWuHnLQPfygbLmMYdhGAHOsaZp1HTOj4Y7Y-rjsEGkIPAN4deeeQLYGOdDSzXl55bE4_n6CIaEjtdMRV0cEiKnHpB4NyanSaUVyIgqgaS_QbLkHv4FQ2rNGFIeiQcFCkrAJ16AyPRhGnjst8oBTAB; token=Cg9rdWFpc2hvdS5hcGkuc3QSkAHtRyehvLdLgV-QgHI85h9aFa-IFh-jUEvZkHi1bEnD-fEdzG3iIMPfpGo0h4teVeVdldMAZSjt8VDcOaQ31mHhNSPOY8KA5iTPAkOTcDw-0h_F67VP7BTXzqFJWuHnLQPfygbLmMYdhGAHOsaZp1HTOj4Y7Y-rjsEGkIPAN4deeeQLYGOdDSzXl55bE4_n6CIaEjtdMRV0cEiKnHpB4NyanSaUVyIgqgaS_QbLkHv4FQ2rNGFIeiQcFCkrAJ16AyPRhGnjst8oBTAB; __NSWJ=oiw%2BTX5wEWCgLFpi269LuNED4p1i06vtLN5IEYcPMRiF4aJGG%2B2SRgn2QWHcu62bAAAAAg%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAWNLEgIGQDu-0TNCGYjlWibmUAPmL5KyWa0mfOV5YkLJGWDZ_TMU2VLrLqmDdKdxAhDkCICdxnnhKYZNqQd0jc05bgRIYk2enYymn-8klocOVP9fVdSNjyxa0S0H6O6pgNGyPaaAia84fAx1BK84lDC2p__767dqumwdOI80cuNRx_83OZEJo2JErVRM8x3V5RoSDT9hc9XCT0hezrbatiD1J7RRIiCwmsGVO4qkwwIIWfxjxgnb7Bv2L3yImnynHSc95MDNJCgFMAE',
         'kpn=NEBULA; kpf=ANDROID_PHONE;  c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121171; ud=1736121171; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; __NSWJ=%2BvF8UgzRZ%2FJQB9yhGowDl7PNiLzg5%2Bo7qat9IJVIyE4i3zehg8p2c3SJszuObIQMAAAACQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAY1xW5pz2RKTdGtDD8AEdAeneOM95G9iDvjyq5w9mxXC8UEAZuu8wuNZd28IDb-YY2lzTikHWVXd0ujhD-qV1IPe_e7YibR4xYbzwgQwuO3_fOYaw6NSim84Er7RkwP8ybs9A95afqT69H7DBAgzxYG9BaUT9RIJLxmbqX7nuvxx5M0GeEVi4Etoj6dKb0TeaRoS8FTyNNFTMuEfRxro_gB3U82AIiCINdnRfUpubX7Keyvcx-sD3LGza9SLW_lMcxixV3HrpigFMAE',
         'kpn=NEBULA; kpf=ANDROID_PHONE;  c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121161; ud=1736121161;kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHnDNjk8t34pAq1nrkXQvL4UIwV_gEV7HB7H8xNc-lrbXnB1litPv4A9d1Lr94Uaua8ybetVN3TO7LFcURcI1eDqw-zD2r7JEDeV1LtKGwGYIMupMGSZTYjoOnRcSxnrw5wI58T67ZAxSfPR48j18FotVXAZiNr5be7_1ZMWyDstGxH0aNSHFYVwmT91TJsLolkFeq0fwz1MIxIYTjXcNlqGhJrNN-fL8lNH4AKLNFPdkh-L7kiIKn4ohvQRbnlAS7ocsmFD5ZFS-VFi47Az_gGODQmybOsKAUwAQ; token=530e3cba4afc41df8bb3087d4e57a050-1711777846; client_key=3c2cd3f3; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgASRcrdDymnMJeQLEfqv4NypkSNWX61PMn0BTn_YxmKCQvqUzD-jthZcIZyMs9Cl1gdTNSU8lLu7SMIoFdEb4el3AvWsbr6ZPxW7VUnIhQhWQzqSPj7DzrPtW12wCrOwk46_N6N-vEIx3djlamqpkBUxozrV6hvav7U1IoruuLtG4FKxEg3WUh8f7YU9Bqni6KX47nHQ5tORLebD4LEJA9aYaEgiKSSCFO1G6_3XV9G0GJ0X9uyIgkbjLR2T9HVXjykzoLR1FiqREcFyleWCg_xWgPFgSWfAoBTAB; net=WIFI; __NSWJ=iAUJIpv1BeZPUt24h2%2FnOHh1deRltZSIAY75XPWsqhZ2yTIHGNNt%2FWCpMCEFdmqOAAAAAg%3D%3D@did=ANDROID_3513abaac224588b;kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAGPL1Go4-VQXQKu0gT9AK0gWtDTK_yhlSyqF5rnA8lctvAp1ZzG_jsQZgq3o08y1MIjbbK_TmCYEXLwae-OY0eWYpX6FOVPWVNhclo4JmUTVm971PeTR9faXGhWb37j2MozFnF4lhgKQ4ITI92LLCJhUjXzThfa3g7O6XepufFhFeXgpjodp9SUYKqjgHaZKaYmp3fbspReBVdHTwiqF6bUGhK2EeQEuchJ_Ltqw2OKbJffXDwiIOa8VRpxYbvlDAK3M4y5IarOdFxXV7Yl6B5wX82lIgczKAUwAQ; __NSWJ=674MUK1SkExUwb0S2stbcTeENzY4aVzHE5ozlBGmXiadv8D9jjRUXDP%2FOmO43C%2BxAAAAAQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgAYaiv5ZAyXjR7Zkq9vrCdFKh7ZoGUxXNek-HRYjq-PZLH6P5oiLF2AaWNs7ZXfpLPOsdqwWUEjQh7zleMcUSbyP2J7C_zll3ml4-BoFYBvQcIIAimWuyDpZPuIlCRe4m1_IVWmYc6DAfAUKR4mBS9AsIX2qRtub0ESqdOU0C24JV8vMyWsK6_Penq8R1rEcpRgE2zQy-nl1vjiA6nk2o1joaEsWqB5a5TJyssLyVJ6mptlZOSSIgYu8TmwgjS6-r1ys9Q_AE_usH9oF3OXL_w2uPpyz18VooBTAB'
    ]
    choice = random.choice(ks)
    choice1 = ks.remove(choice)
    name,assistanceId = get_assistanceId(choice)
    for i in ks:
        assistance(name,i,assistanceId)
        time.sleep(5)

"""
kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_cf00bebe08b66e73; c=ALI_CPD%2C778; ver=10.5; appver=10.5.10.3656; language=zh-cn; countryCode=CN; sys=ANDROID_10; mod=Google%28Pixel+4%29; net=WIFI; deviceName=Google%28Pixel+4%29; earphoneMode=1; isp=CMCC; did_tag=2; egid=DFPEFCB91271041E11E4A493CFBB5B6FF172F8A44955761988D8892C8B16EA47; thermal=10000; kcv=1474; app=0; bottom_navigation=true; oDid=TEST_ANDROID_98174c7c627e50ef; android_os=0; boardPlatform=msmnile; androidApiLevel=29; newOc=ALI_CPD%2C778; slh=0; country_code=cn; nbh=44; hotfix_ver=; did_gt=1655643125051; keyconfig_state=2; max_memory=192; sid=43e3ef3e-cd42-4427-8c1f-14df8fb16a4d; cold_launch_time_ms=1655643124881; oc=ALI_CPD%2C778; sh=2280; ddpi=440; deviceBit=0; browseType=3; socName=Qualcomm+Snapdragon+8150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm32; cl=0; userRecoBit=0; device_abi=; totalMemory=5466; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e286bce2a2559671; sbh=83; darkMode=false; client_key=2ac2a76d; userId=1736121171; ud=1736121171; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfluDw-kN5RaOFdcDcM-nZ3AHGnfGpWHa_l9G6jLbpD1l_dgZc3EqGz-fX3feP0Hnd2IYvUeOTZDYMLYMT0qSeng3LArcBkfC-jy-JuBZ1wuKa3W3sR9R9FaneVTwOzSUmgcq8Xhyj5Wd10HKSyA-ihVLC0f5dNM2XaZzvbRM5ny2tvGhXGjmOt4fceIiYJeTu9AnkCNFVGgPsoPszE2IYGhLs1J4yL3FOXJxWhbfIVnwvpekiIBUTxgLi9Ok1UkOi9DRbJyi5ce74NdyONA4Y3jOhcpJ4KAUwAQ; __NSWJ=%2BvF8UgzRZ%2FJQB9yhGowDl7PNiLzg5%2Bo7qat9IJVIyE4i3zehg8p2c3SJszuObIQMAAAACQ%3D%3D; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAY1xW5pz2RKTdGtDD8AEdAeneOM95G9iDvjyq5w9mxXC8UEAZuu8wuNZd28IDb-YY2lzTikHWVXd0ujhD-qV1IPe_e7YibR4xYbzwgQwuO3_fOYaw6NSim84Er7RkwP8ybs9A95afqT69H7DBAgzxYG9BaUT9RIJLxmbqX7nuvxx5M0GeEVi4Etoj6dKb0TeaRoS8FTyNNFTMuEfRxro_gB3U82AIiCINdnRfUpubX7Keyvcx-sD3LGza9SLW_lMcxixV3HrpigFMAE
"""
