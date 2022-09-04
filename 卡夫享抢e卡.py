import json
import os
import time
import concurrent.futures
import requests
import pprint


def exchange(ck, webhook_token):
    url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/exchangeIntegralNew?value=%E4%BA%AC%E4%B8%9CE%E5%8D%A12%E5%85%83&phone=&type=%E8%A7%86%E9%A2%91%E5%8D%A1'
    headers = {
        'Host': 'fscrm.kraftheinz.net.cn',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4255 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.21.2120(0x280015F0) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'token': ck,
        'Origin': 'https://fscrm.kraftheinz.net.cn',
        'Referer': 'https://fscrm.kraftheinz.net.cn/?code=021nlIll20rwp94VCnll2iFHOe0nlIlO&state=&appid=wx65da983ae179e97b',

    }
    response = requests.post(url=url, headers=headers).json()
    if response['msg'] == '代理商当日超过上限' or response['msg'] == '积分不足' or response['msg'] == '仍有兑换在队列中' or response[
        'msg'] == 'Token UID获取失败':
        print(response['msg'])
    else:
        print(response['msg'])
        webhook(response['msg'], webhook_token)


def webhook(message, webhook_token):
    url = f'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={webhook_token}'
    headers = {
        'Content-Type': 'application/json'

    }
    data = {
        "msgtype": "text",
        "text": {
            "content": message
        }
    }
    body = json.dumps(data).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    if response["errmsg"] == 'ok':
        print("企业微信推送成功")
    else:
        print("推送失败")


with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    webhook_token = os.environ['QYWX_KEY']
    kfxtoken = os.environ['kfxtoken']
    kfxtoken = kfxtoken.split('@')
    for ck in kfxtoken:
        exchange(ck, webhook_token)

    """
"url":"https://api.m.jd.com/client.action?functionId=isvObfuscator","headers":{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","Content-Type":"application/x-www-form-urlencoded","User-Agent":"JD4iPhone/167874%20(iPhone;%20iOS;%20Scale/3.00)","Cookie":"pt_key=AAJirSx9ADA1Pa4mfk3MfE55gd9A8B_H117j9rfTOZ1sh2uvJpN4qMtP9kAuKmEHntmFgM4QZO4;pt_pin=jd_OlkdoeEggWKd;","Host":"api.m.jd.com","Referer":"","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","Accept":"*/*"},"body":"body=%7B%22url%22%3A%22https%3A%5C/%5C/lzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167874&client=apple&clientVersion=10.2.4&d_brand=apple&d_model=iPhone14%2C3&ef=1&eid=Soi6zxjOyeX2dr3sslAZsGyJJlF7HYqpnF2iPCJxavGzs2hs6OwywY68pzHFi3v559s73HKjmSUWbRha15Tzchl5Z9DQT7LSuq4tkDqu5qqwkwM9n7f9&ep=%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22screen%22%3A%22CJS4DMeyDzc4%22%2C%22wifiBssid%22%3A%22Ak9aj4pYkYKZccD6kNLJkwn6KnDLmU74lwNIa5km3KN%3D%22%2C%22osVersion%22%3A%22CJUkDK%3D%3D%22%2C%22area%22%3A%22qOlMuUthuExHJ9KM678HhuIm%22%2C%22openudid%22%3A%22DtVwZtvvZJcmZwPtDtc5DJSmCtZvDzLsCzK2DJG2DtU1EWG5Dzc2ZK%3D%3D%22%2C%22uuid%22%3A%227aq3zwn7x5jj17vm82om29jbu1odfh8d%22%7D%2C%22ts%22%3A1656076868%2C%22hdid%22%3A%22Yztz77XpNthWTzlOknqoggdYLhxhiH8h84UKZ5kQEI4%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D&ext=%7B%22prstate%22%3A%220%22%7D&isBackground=N&joycious=98&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&partner=apple&rfs=0000&scope=10&sign=ece45b391fb4abf4e4590c7da6eeacc5&st=1649150743509&sv=101&uemps=0-0&uts=kTmVuRupyHnHGbIecURfYemta8Q3E5WIuSXYVp1BkFKtZohVG4ZxDspmKday9PM5"}
"""
