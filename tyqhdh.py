import datetime
import json
import os
import pprint
import random
import time
import requests
import hashlib

headers = {
    'authorization': 'XOgX88xgrsYSDVJ3HrXz1N+EfHO3RTQeiYbYPcpyMCHD7W75nfPByUhbl9wRL/a/',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4296 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wx532ecb3bdaaf92f9',
    'content-type': 'application/json',
    # 'accept': '*/*',
    'origin': 'https://thekingoftomato.ioutu.cn',
    'x-requested-with': 'com.tencent.mm',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://thekingoftomato.ioutu.cn/?t=1661082764254&token=eyJ0aGlyZEFwcElkIjoid3g1MzJlY2IzYmRhYWY5MmY5Iiwid2lkIjozMTkwNDQwNDA3LCJvcGVuSWQiOiJvQmsyMjRtQVdmbU1POEZ2eWRmRXpqeEYyMUdBIiwiaG9tZVN0b3JlSWQiOm51bGwsInV0bV9jYW1wYWlnbiI6ImhhcHB5YXAiLCJ1dG1fbWVkaXVtIjoiYXBiYW5uZXIiLCJfY2hhbm5lbF90cmFja19rZXkiOiJBM25nb3h2OSIsInV0bV9zb3VyY2UiOiJoYXBweW1wIiwidXRtX2NvbnRlbnQiOiJhcGJhbm5lciIsInVzZXJJbmZvIjp7fSwiY2hhbm5lbEluZm8iOnsidXRtX2NhbXBhaWduIjoiaGFwcHlhcCIsInV0bV9zb3VyY2UiOiJoYXBweW1wIiwidXRtX21lZGl1bSI6ImFwYmFubmVyIiwidXRtX2NvbnRlbnQiOiJhcGJhbm5lciJ9fQ%3D%3D',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

User_Agents = [
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/532.0 (KHTML, like Gecko) CriOS/43.0.823.0 Mobile/65M532 Safari/532.0",
    "Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1 like Mac OS X; rw-RW) AppleWebKit/531.9.3 (KHTML, like Gecko) Version/4.0.5 Mobile/8B118 Safari/6531.9.3",
    "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045511 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; MHA-AL00 Build/HUAWEIMHA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w Build/OPR6.170623.013; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; 16 X Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/532.0 (KHTML, like Gecko) FxiOS/18.2n0520.0 Mobile/50C216 Safari/532.0",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
];


def get_nonce():
    """
        生成一个指定长度的随机字符串
        """
    randomlength = 16
    random_str = ''
    base_str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    length = len(base_str) - 1
    for i in range(randomlength):
        random_str += base_str[random.randint(0, length)]
    # print(random_str)
    return random_str


def get_signature(nonce):
    timestamp = int(time.time() * 1000)
    md = f'clientKey=IfWu0xwXlWgqkIC7DWn20qpo6a30hXX6&clientSecret=A4rHhUJfMjw2I5CODh5g40Ja1d3Yk1CH&nonce={nonce}&timestamp={timestamp}'
    md5 = hashlib.md5()
    md5.update(md.encode())
    sign2 = md5.hexdigest()[0:32].upper()
    # print(sign2)
    # print(timestamp, nonce, sign2)
    return timestamp, nonce, sign2


def login(ua, ck):
    # print(ck)
    url = "http://api.xiaoyisz.com/qiehuang/ga/public/api/login"
    headers = {
        "Host": "api.xiaoyisz.com",
        "user-agent": ua,
        "Content-Type": "application/json",
    }
    body = ck
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url, headers=headers, data=body).json()
    if response['code'] == 0:
        authorization = response['data']
        # print(authorization)
        print('获取账号信息成功')
        return authorization


def get_info(webhook_token):
    total_exchang = []
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/gift/list?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    # print('开始查询账号信息')
    if response['code'] == 0:
        for i in response['data']:
            name = i['name']
            left_num = i['leftStock']
            total_exchang.append([name, left_num])
    for data in total_exchang[2:]:
        if data[1] > 0:
            print(data[0])
            message = f'{data[0]}有货赶快去兑换'
            webhook(message, webhook_token)
        else:
            print(f'{data[0]}不可兑换')


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


if __name__ == '__main__':
    cks = os.environ['tybody']
    cks = cks.split('@')
    webhook_token = os.environ['QYWX_KEY']
    ck = random.choice(cks)
    ck1 = json.loads(ck)
    ua = random.choice(User_Agents)
    authorization = login(ua, ck1)

    headers1 = {
        'authorization': authorization,
    }
    headers.update(headers1)
    get_info(webhook_token)
