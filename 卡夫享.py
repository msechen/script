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


def kfx_getUserInfo1(number, webhook_token):
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
        webhook(content,webhook_token)


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


def webhook(message,webhook_token):
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
    kfxtoken = os.environ['kfxtoken']
    kfxtoken = kfxtoken.split('@')
    webhook_token = os.environ['QYWX_KEY']
    for ck in range(len(kfxtoken)):
        number = ck + 1
        headers1 = {
            'token': kfxtoken[ck]
        }
        headers.update(headers1)
        kfx_getUserInfo1(number, webhook_token)
        kfx_sign()
        kfx_getUserInfo()
