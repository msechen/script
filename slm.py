"""
cron: 0 7 * * *
new Env('商联盟');
"""
import json
import os
import time

import requests

headers = {
    # 'token': 'df044108-96c5-4ead-9484-bdfde4f72c12',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/30.181818)',
    'Content-Type': 'application/json',
    # 'Content-Length': '0',
    'Host': 'slm.slm6.cn',
    'Accept-Encoding': 'gzip',
    'Cookie': 'PHPSESSID=f5sd93qt3gujalvq5p1piap09m',
    'Connection': 'keep-alive',
}


def login(mobile, password):
    url = "http://slm.slm6.cn/api/login/login"
    body = {"mobile": mobile, "password": password}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    if res["code"] == 1:
        token = res["data"]["userinfo"]["token"]
        print("登录成功")
        headers1 = {
            'token': token,
        }
        headers.update(headers1)
        return token


def getAdSecretB():
    url = "http://slm.slm6.cn/api/category/getAdSecretB"
    res = requests.get(url=url, headers=headers).json()
    if res["code"] == 1:
        secrets = res["data"]
        return secrets


def getAdScoreB(adB, secrets):
    url = "http://slm.slm6.cn/api/category/getAdScoreB"
    body = {"secret": adB, "secrets": secrets}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    # print(res)
    if res["code"] == 1:
        msg = res["msg"]
        print(f"{msg}")


def getTodayAdCountB():
    url = "http://slm.slm6.cn/api/category/getTodayAdCountB"
    res = requests.get(url=url, headers=headers).json()

    if res["code"] == 1:
        data = res["data"]
        msg = res["msg"]
        print(f"第{data}次 {msg}")
        return data


def getAdSecretA():
    url = "http://slm.slm6.cn/api/category/getAdSecretA"
    res = requests.get(url=url, headers=headers).json()
    if res["code"] == 1:
        secrets = res["data"]
        return secrets


def getAdScoreA(adA, secrets):
    url = "http://slm.slm6.cn/api/category/getAdScore"
    body = {"secret": adA, "secrets": secrets}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    # print(res)
    if res["code"] == 1:
        msg = res["msg"]
        print(f"{msg}")


def getTodayAdCountA():
    url = "http://slm.slm6.cn/api/category/getTodayAdCount"
    res = requests.get(url=url, headers=headers).json()

    if res["code"] == 1:
        data = res["data"]
        msg = res["msg"]
        print(f"第{data}次 {msg}")
        return data


def getVideoSecret():
    url = "http://slm.slm6.cn/api/category/getVideoSecret"
    res = requests.get(url=url, headers=headers).json()
    if res["code"] == 1:
        secrets = res["data"]
        return secrets


def getVideoScore(VideoSecret, secrets):
    url = "http://slm.slm6.cn/api/category/getVideoScore"
    body = {"secret": VideoSecret, "secrets": secrets}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    # print(res)
    if res["code"] == 1:
        msg = res["msg"]
        print(f"{msg}")


def getadB(adB):
    for i in range(14):
        data = getTodayAdCountB()
        secrets = getAdSecretB()
        getAdScoreB(adB, secrets)
        if data >= 13:
            return


def getadA(adA):
    for i in range(14):
        data = getTodayAdCountA()
        secrets = getAdSecretA()
        getAdScoreA(adA, secrets)
        if data >= 13:
            return


def jifen():
    url = "http://slm.slm6.cn/api/turn_center/jifen"
    body = {"page": 1, "limit": 20}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    if res["code"] == 1:
        score = res['data']["score"]
        print(f"目前可换积分为{score}")
        return score


def jifen_conversion_contribution():
    url = "http://slm.slm6.cn/api/turn_center/jifen_conversion"
    body = {"number":"500","pwd":"123456"}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    print(res)
    # if res["code"] == 1:
    #     money = res['data']["money"]
    #     print(f"目前现金为{money}")
    #     return money


def scoreExchangeMoney(score, pwd):
    url = "http://slm.slm6.cn/api/turn_center/scoreExchangeMoney"
    body = {"number": score, "pwd": pwd}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    if res["code"] == 1:
        score = res['data']["score"]
        print(f"目前可换积分为{score}")
        return score


def billing_details():
    url = "http://slm.slm6.cn/api/mendian/billing_details"
    body = {"page": 1, "limit": 20, "type": 0, "status": 1}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    if res["code"] == 1:
        money = res['data']["money"]
        print(f"目前现金为{money}")
        return money


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
    
    Slmck = os.environ["Slmck"].split("#")
    webhook_token = os.environ['QYWX_KEY']
    mobile = Slmck[0]
    password = Slmck[1]
    exchange_pwd = Slmck[2]
    VideoSecret = Slmck[3]
    adA = Slmck[4]
    adB = Slmck[4]
    login(mobile, password)
    getadA(adA)
    getadB(adB)
    # print("开始看视频")
    for i in range(100):
        secrets = getVideoSecret()
        getVideoScore(VideoSecret, secrets)
        time.sleep(3)
    jifen_conversion_contribution()
    score = jifen()
    score = scoreExchangeMoney(score, exchange_pwd)
    money = billing_details()
    message = f"今日获得{score}积分,兑换完现金目前为{money}元"
