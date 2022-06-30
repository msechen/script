import json
import os
import random
import time

import requests


def forward(ck, phone):
    url = 'https://act1.pcauto.com.cn/discount/api/user/playCount/add'
    headers = {
        'Cookie': ck,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Referer': 'https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html',
        'Accept-Encoding': 'gzip, deflate, br',
        'Origin': 'https://www1.pcauto.com.cn',
        'Host': 'act1.pcauto.com.cn'

    }
    data = {"phone": phone}
    body = json.dumps(data).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    # print(response)
    if response["code"] == 200:
        msg = response['data']["msg"]
        print(msg)


def roll(ck, phone):
    for i in range(2):
        url = 'https://act1.pcauto.com.cn/discount/api/activity/lottery'
        headers = {
            'Cookie': ck,
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
            'Referer': 'https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html',
            'Accept-Encoding': 'gzip, deflate, br',
            'Origin': 'https://www1.pcauto.com.cn',
            'Host': 'act1.pcauto.com.cn'

        }
        data = {"actId": "19", "phone": phone}
        body = json.dumps(data).encode(encoding='utf-8')
        response = requests.post(url=url, data=body, headers=headers).json()
        if response["code"] == 200:
            amount = response['data']["amount"]
            playRecordId = response['data']["playRecordId"]
            print(f"此次摇奖获得{amount}红包,且获得{playRecordId}")
            receive_cash(ck, phone, amount, playRecordId)
        time.sleep(random.randint(5, 10))


def receive_cash(ck, phone, amount, playRecordId):
    url = 'https://act1.pcauto.com.cn/discount/api/enroll/save'
    headers = {
        'Cookie': ck,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Referer': 'https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html',
        'Accept-Encoding': 'gzip, deflate, br',
        'Origin': 'https://www1.pcauto.com.cn',
        'Host': 'act1.pcauto.com.cn'

    }
    choice = get_car_series(ck)
    for i in choice:
        data = {"actId": 19, "playRecordId": playRecordId, "city": "北京", "cityId": 2,
                "currentFrom": "https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html#/?actId=19&sourceDetail=5&isActivity=1&app_ver=5.37.9&FromPCapp=PCAUTO_INFO_ANDROID_5.37.9",
                "locationMessage": "0", "locationType": 1, "locationVersion": 2, "pcsuv": 52195929, "phone": phone,
                "seriesBOList": [i], "source": 2, "sourceDetail": 5}
        body = json.dumps(data).encode(encoding='utf-8')
        response = requests.post(url=url, data=body, headers=headers).json()
        if response["code"] == 200:
            msg = response['data']["msg"]
            print(f"此次摇奖获得{amount}红包已{msg}")
            return amount, playRecordId


def get_car_series(ck):
    url = 'https://act1.pcauto.com.cn/discount/api/series/list'
    headers = {
        'Cookie': ck,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Referer': 'https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html',
        'Accept-Encoding': 'gzip, deflate, br',
        'Origin': 'https://www1.pcauto.com.cn',
        'Host': 'act1.pcauto.com.cn'

    }
    data = {"actId": "19"}
    body = json.dumps(data).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    car_series = response["data"]
    return car_series


def exchange(ck, data1):
    message = []
    url = 'https://act1.pcauto.com.cn/discount/api/cash/out'
    headers = {
        'Cookie': ck,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Referer': 'https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html',
        'Accept-Encoding': 'gzip, deflate, br',
        'Origin': 'https://www1.pcauto.com.cn',
        'Host': 'act1.pcauto.com.cn'
    }
    data = data1
    body = json.dumps(data).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    if response['data']['balance'] is not None:
        if int(float(response['data']['balance'])) >= 0.3:
            exchange(ck, data1)
            print(f"账号还剩{int(response['data']['balance'])}元,继续提现")
            message.append(f"账号还剩{int(response['data']['balance'])}元,继续提现")
        else:
            print(f"账号{response['data']['msg']},提现结束")
    else:
        print(f"账号{response['data']['msg']},提现结束")
    return message


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
        "title": '太平洋汽车提现',
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


if __name__ == '__main__':
    ck = os.environ['tpyqcck'].split("@")
    for i in ck:
        ck1 = i.split("&")
        forward(ck1[0], ck1[1])
        time.sleep(random.randint(5, 15))
        roll(ck1[0], ck1[1])
        time.sleep(random.randint(5, 20))
        message = exchange(ck1[0], json.loads(ck1[2]))
        push_plus_bot(','.join(message))
