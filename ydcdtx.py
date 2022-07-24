"""
2abtest=8&appVersion=9.1.10&client=android&imei=a0226884-4cb4-487e-9278-3f1a730b5082&keyfrom=mdict.9.1.10.android&keyid=dict-usertask-key&mid=7.1.2&model=PCLM10&money=1&mysticTime=1652773976400&network=wifi&newImei=CQk4MDgzYjk3Zjg1OGRkNTBkCTAwYjc2MGI3&product=mdict&screen=1080x1920&ssid=airport&vendor=youdaoweb&vipfjnlouqgwkphlllg=wllirdrzzxfrywl&whnfnqdh=skktzfgdejca&key=ttfMFaa7tiPyAc3DanKeIMzEejm
                                                                       abtest=9&appVersion=9.1.10&client=android&ddhrennrfzfls=khxjtbtzj&imei=0a09f99a9330d9e8435df1e0d466042d&keyfrom=mdict.9.1.10.android&keyid=dict-usertask-key&kvwlhphflgsl=ucjdujkis&mid=5.1.1&model=NX629J&money=1&mysticTime=1652781426641&network=wifi&newImei=010306022465495&product=mdict&screen=1080x1920&ssid=midea&vendor=youdaoweb&key=ttfMFaa7tiPyAc3DanKeIMzEejm : 937b5762e90c42d43147649eecb43e0d
https://dict.youdao.com/dictusertask/withdraw/execute?mysticTime=1652781426641&kvwlhphflgsl=ucjdujkis&money=1&keyid=dict-usertask-key&sign=937b5762e90c42d43147649eecb43e0d&ddhrennrfzfls=khxjtbtzj&pointParam=ssid,screen,mid,money,keyid,newImei,mysticTime,network,appVersion,imei,keyfrom,client,kvwlhphflgsl,abtest,ddhrennrfzfls,vendor,product,model&network=wifi&ssid=midea&screen=1080x1920&appVersion=9.1.10&imei=0a09f99a9330d9e8435df1e0d466042d&mid=5.1.1&keyfrom=mdict.9.1.10.android&client=android&abtest=9&vendor=youdaoweb&newImei=010306022465495&model=NX629J&product=mdict
"""
import os
import time

import requests
import hashlib


def withdraw(ck):
    for i in range(10):
        time1 = str(int(time.time() * 1000))
        # print(time1)
        data = f"abtest=9&appVersion=9.1.10&client=android&ddhrennrfzfls=khxjtbtzj&imei=0a09f99a9330d9e8435df1e0d466042d&keyfrom=mdict.9.1.10.android&keyid=dict-usertask-key&kvwlhphflgsl=ucjdujkis&mid=5.1.1&model=NX629J&money=1&mysticTime={time1}&network=wifi&newImei=010306022465495&product=mdict&screen=1080x1920&ssid=midea&vendor=youdaoweb&key=ttfMFaa7tiPyAc3DanKeIMzEejm"
        md5 = hashlib.md5()
        md5.update(data.encode())
        sign2 = md5.hexdigest()[0:32]
        # print(sign2)
        url = f"https://dict.youdao.com/dictusertask/withdraw/execute?mysticTime={time1}&kvwlhphflgsl=ucjdujkis&money=1&keyid=dict-usertask-key&sign={sign2}&ddhrennrfzfls=khxjtbtzj&pointParam=ssid,screen,mid,money,keyid,newImei,mysticTime,network,appVersion,imei,keyfrom,client,kvwlhphflgsl,abtest,ddhrennrfzfls,vendor,product,model&network=wifi&ssid=midea&screen=1080x1920&appVersion=9.1.10&imei=0a09f99a9330d9e8435df1e0d466042d&mid=5.1.1&keyfrom=mdict.9.1.10.android&client=android&abtest=9&vendor=youdaoweb&newImei=010306022465495&model=NX629J&product=mdict"
        headers = {
            'Host': 'dict.youdao.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Cookie': ck,
            'User-Agent': 'youdao_dict_android',
        }
        response = requests.get(url, headers=headers).json()
        print(response)
        if response['msg']== 'OK':
            print(f"提现{response['data']['isWithdraw']}元成功还剩{response['data']['isWithdraw']}元")
            break
        elif response['msg'] == '提现金额超出账户余额':
            break
        else:
            print(response['msg'])
            pass
        time.sleep(3)


if __name__ == '__main__':
    cks = os.environ['ydcd_data']
    cks = cks.split('&')
    for ck in cks:
        withdraw(ck)
