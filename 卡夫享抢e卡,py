import json
import os
import time

import requests
import pprint


def exchange(ck):
    url='https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/exchangeIntegralNew?value=%E4%BA%AC%E4%B8%9CE%E5%8D%A12%E5%85%83&phone=&type=%E8%A7%86%E9%A2%91%E5%8D%A1'
    headers = {
        'Host': ck,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4255 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.21.2120(0x280015F0) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'token': 'ab897a2c000734fabff1bcc6e79258fb',
        'Origin': 'https://fscrm.kraftheinz.net.cn',
        'Referer': 'https://fscrm.kraftheinz.net.cn/?code=021nlIll20rwp94VCnll2iFHOe0nlIlO&state=&appid=wx65da983ae179e97b',

    }
    response = requests.post(url=url, headers=headers).json()
    print(response)

def push_plus_bot(content):
    b = content
    headers = {
        "Host": "www.pushplus.plus",
        "Origin": "http://www.pushplus.plus",
        "Referer": "http://www.pushplus.plus/push1.html",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44",
        "X-Requested-With": "XMLHttpRequest",

    }
    url = 'http://www.pushplus.plus/api/send'
    data = {
        "token": 'f41e605cf752414d9cc832b6c144c302',
        "title": '卡夫享抢E卡',
        "content": b,
        "channel": "wechat",
        "template": "html",
        'webhook': ""
    }
    body = json.dumps(data).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    # print(response)
    if response['code'] == 200:
        print('推送成功！')
    else:
        print('推送失败！')


if __name__ == '__main__':
    cks = os.environ['kfxtoken'].split(' ')
    for ck in cks:
        exchange(ck)


