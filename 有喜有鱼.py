import hashlib, os, sys, time, requests

'''
下载地址
http://h5.timesks.com/#/scanRegister?activityId=1002&registSource=0sg9thgu
不用抓包，邀请码就可以跑
不用抓包，邀请码就可以跑
不用抓包，邀请码就可以跑
青龙变量export yxyyyqm='邀请码&邀请码&邀请码'
'''


def mian():
    cookie_all = phone_passwd()
    print("-------共找到%s个邀请码" % len(cookie_all), "-------")
    for i in cookie_all:
        print(f"------------正在执行{i}------------")
        user = i.split()[0]
        idd = post_id()
        sign = qianming(idd)
        print('等待35秒提交广告')
        time.sleep(35)
        p(idd, sign, user)


def qianming(idd):
    sig = idd
    timestamp = '42552ba7cc681fed73ac94592a7b62b6'
    sig2 = sig + timestamp
    sign = hashlib.md5(sig2.encode(encoding='utf-8')).hexdigest()
    return sign


def p(idd, sign, user):
    headers = {'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; 2201122C Build/SKQ1.211006.001)','Host': 'incentive.8ziben.com', }
    resp = requests.get(f'https://incentive.8ziben.com/api/sdk/incentive?trade_id={idd}&reward_amount=1&user_id={user}&appId=Z8763119332&reward_name=%E5%A5%96%E5%8A%B1%E5%90%8D%E7%A7%B0&sign={sign}&zj_adID=J7181620755', headers=headers).json()
    if 'status' in resp:
        print('提交广告数据:%s' % resp['status'])


def post_id():
    url = 'https://incentive.8ziben.com/api/sdk/incentive/trade'
    headers = {'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 12; 2201122C Build/SKQ1.211006.001)','Host': 'incentive.8ziben.com',}
    body = {'mdid':'9880f384-163b-45fa-89ae-562752c297cc','data':'%7B%22zj_adID%22%3A%22J7181620755%22%2C%22ad_type%22%3A%22RewardVideo%22%2C%22zjpm%22%3A%22gdt%22%2C%22zjpm_id%22%3A%222013767098252439%22%2C%22userID%22%3A%220sg9thgu%22%2C%22reward_amount%22%3A1%2C%22reward_name%22%3A%22%E5%A5%96%E5%8A%B1%E5%90%8D%E7%A7%B0%22%2C%22extra%22%3A%22%22%7D','appName':'%E6%9C%89%E5%96%9C%E6%9C%89%E9%B1%BC','appVer':'1.0.7','sign':'a8bdb64aaa77f0c1961d0c3a22a175ac','token':'token','zj_adID':'J7181620755','vaId':'d2323f345','plugVer':'2040500','aaid':'23d354t','appPkgName':'com.example.youxyouy','appId':'Z8763119332','sdkVer':'2.4.5.0','applicationId':'com.example.youxyouy','oaid':'da07b9fdb1fafe70',}
    resp = requests.post(url=url, headers=headers, data=body).json()
    if 'status' in resp:
        print('获取广告ID:%s'% resp['status'])
    idd = resp['data']['trans_id']
    return idd

def phone_passwd():
    if "yxyyyqm" in os.environ:
        token_list1 = os.environ['yxyyyqm'].split('&')  # 账号分割换行
        if len(token_list1) > 0:
            return token_list1
        else:
            print("yxyyyqm变量未启用")
            sys.exit(1)
    else:
        print("未添加yxyyyqm变量")
        sys.exit(0)

if __name__ == '__main__':
    for s in range(1):
        mian()
