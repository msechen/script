import json
import os
import time

import requests
import pprint


def exchange(ck,push_token):
    url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/exchangeIntegralNew?value=%E4%BA%AC%E4%B8%9CE%E5%8D%A12%E5%85%83&phone=&type=%E8%A7%86%E9%A2%91%E5%8D%A1'
    headers = {
        'Host': 'fscrm.kraftheinz.net.cn',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4255 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.21.2120(0x280015F0) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'token': ck,
        'Origin': 'https://fscrm.kraftheinz.net.cn',
        'Referer': 'https://fscrm.kraftheinz.net.cn/?code=021nlIll20rwp94VCnll2iFHOe0nlIlO&state=&appid=wx65da983ae179e97b',

    }
    response = requests.post(url=url, headers=headers).json()
    if response['msg'] == '代理商当日超过上限' or response['msg'] == '积分不足':
        print(response['msg'])
    else:
        print(response['msg'])
        push_plus_bot(response['msg'],push_token)


def push_plus_bot(content,push_token):
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
        "token": push_token,
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
    push_token = os.environ['push_token']
    cks = os.environ['push_token'].split('@')
    for ck in cks:
        exchange(ck,push_token)
