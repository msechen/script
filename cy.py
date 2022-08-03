import os

import requests

headers = {
    'Host': 'qapi.yili.com',
    'Connection': 'keep-alive',
    # 'charset': 'utf-8',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4276 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'accesstoken': '',
    # 'content-type': 'application/x-www-form-urlencoded',
    # 'Accept-Encoding': 'gzip,compress,br,deflate',
    'scene': '1089',
    'Referer': 'https://servicewechat.com/wx103ffb0ddc74af67/44/page-frame.html',
}


def getUser():
    url = "https://qapi.yili.com/cy/api/user/getUser"
    response = requests.get(url=url, headers=headers).json()
    if response["data"] != {}:
        name = response["data"]["user"]["name"]
        return name


def sigin():
    url = "https://qapi.yili.com/cy/api/user/daily/sign?exParams=true"
    response = requests.get(url=url, headers=headers).json()
    if response["data"] != {}:
        bonusPoints = response["data"]["dailySign"]["bonusPoints"]
        return f'签到获得{bonusPoints}积分'
    else:
        # print('今日已签到')
        return '今日已签到'


def sign_status():
    url = 'https://qapi.yili.com/cy/api/user/sign/status'
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 200:
        signDays = response['data']['signDays']
        # print(f'已连续签到{signDays}天')
        return f'已连续签到{signDays}天'


def count():
    url = 'https://qapi.yili.com/cy/api/order/getCount'
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 200:
        signDays = response['data']["integralCount"]
        # print(f'目前有{signDays}积分')
        return f'目前有{signDays}积分'


if __name__ == '__main__':
    accesstoken = os.environ['cy100hd'].split('@')
    for i in accesstoken:
        headers1 = {
            'accesstoken': i,
         }
        headers.update(headers1)
        name1 = getUser()
        data = sigin()
        data1 = sign_status()
        data2 = count()
        print(f"账号{name1},此次{data},{data1},{data2}")
