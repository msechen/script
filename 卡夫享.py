import json
import os

import requests

headers = {
    'Host': 'fscrm.kraftheinz.net.cn',
    # 'Connection': 'keep-alive',
    # 'Content-Length': '0',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4272 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
    'token': '',
    # 'Content-Type': 'application/x-www-form-urlencoded',
    # 'Accept': '*/*',
    'Origin': 'https://fscrm.kraftheinz.net.cn',
    # 'X-Requested-With': 'com.tencent.mm',
    # 'Sec-Fetch-Site': 'same-origin',
    # 'Sec-Fetch-Mode': 'cors',
    # 'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://fscrm.kraftheinz.net.cn/',
    # 'Accept-Encoding': 'gzip, deflate',
    # 'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    # 'Cookie': '_ga=GA1.3.118877139.1658978033; _gid=GA1.3.238286926.1658978033; _gat=1'

}


def kfx_getUserInfo1(number,push_token):
    try:
        url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getUserInfo'
        response = requests.get(url=url, headers=headers).json()
        if response["error_code"] == 0:
            nickname = response["data"]["nickname"]
            memberBalance = response["data"]["serialSign"][0]["memberBalance"]
            print(f"账号{nickname}目前积分{memberBalance}")
        else:
            print(response["msg"])
    except:
        print(f"账号{number}失效需要重新登录")
        content = f"账号{number}失效需要重新登录"
        push_plus_bot(content, push_token)


def kfx_sign():
    url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/dailySign'
    response = requests.post(url=url, headers=headers).json()
    if response["error_code"] == 0:
        print(response["msg"])
    else:
        print(response["msg"])
    



def kfx_getUserInfo():
    url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getUserInfo'
    response = requests.get(url=url, headers=headers).json()
    if response["error_code"] == 0:
        nickname = response["data"]["nickname"]
        memberBalance = response["data"]["serialSign"][0]["memberBalance"]
        print(f"账号{nickname}签到后积分{memberBalance}")
    else:
        print(response["msg"])


def push_plus_bot(content, push_token):
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
        "title": '卡夫享抢号过期',
        "content": b,
        "channel": "wechat",
        "template": "html",
        'webhook': ""
    }
    body = json.dumps(data).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    print(response)
    if response['code'] == 200:
        print('推送成功！')
    else:
        print('推送失败！')
    # except Exception as e:
    #     print(e)


if __name__ == '__main__':
    kfxtoken = os.environ['kfxtoken']
    kfxtoken = kfxtoken.split('@')
    push_token = os.environ['push_token']
    for ck in range(len(kfxtoken)):
        number = ck + 1
        headers1 = {
            'token': kfxtoken[ck]
        }
        headers.update(headers1)
        kfx_getUserInfo1(number, push_token)
        kfx_sign()
        kfx_getUserInfo()
