"""
cron: 0 7 * * *
new Env('优企盈');
"""
import json
import os
import random
import time

import requests

headers = {
    'Host': 'api.yqypt.com',
    'Connection': 'keep-alive',
    # 'Content-Length': '46',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36',
    'token': '',
    'clientType': 'ANDROID',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://web.yqypt.com',
    'X-Requested-With': 'com.android.firmService',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://web.yqypt.com/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}


def info():
    url = "https://api.yqypt.com/v2/integral/info"

    res = requests.get(url=url, headers=headers).json()
    # pprint(res)
    if res["message"] == "成功":
        userId = res["data"]["userId"]
        integralNum = res["data"]["integralNum"]
       
        return userId, integralNum


def sign_in(usserid):
    url = "https://api.yqypt.com/v2/integral/sign_in"
    body = {"userId": usserid}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()

    if res["message"] == "成功":
        print(f'签到获得{res["data"]["signInIntegral"]}')
    else:
        print(res["message"])


def share():
    url = "https://api.yqypt.com/v2/share?resourceId=1&resourceType=APP"

    res = requests.get(url=url, headers=headers).json()
    # pprint(res)
    if res["message"] == "成功":
        print(f'分享成功')


def read_list():
    url = f"https://api.yqypt.com/v2/information/list?pageNum=2&pageSize={random.randint(2, 7)}&categoryId=16&keywords=&timestamp={int(time.time() * 1000)}&plate="

    res = requests.get(url=url, headers=headers).json()
    # pprint(res)
    if res["message"] == "成功":

        for i in range(len(res["data"])):
            informationId = res["data"][i]['informationId']
            title = res["data"][i]['title']
            print(f"开始阅读{title}")

            read(informationId)
#             if i == 0:
#                 add_comment(informationId)
            if i == 3:
                break


def read(informationId):
    url = f"https://api.yqypt.com/v2/information/details?informationId={informationId}"

    res = requests.get(url=url, headers=headers).json()
    # pprint(res)
    if res["message"] == "成功":
        print(f"阅读成功")


def add_comment(informationId):
    url = f"https://api.yqypt.com/v2/information/comment/add"
    comment_list = ["学习了", "说的不错", "好的", "确实", "努力学习提升自己", "加油加油", "学到了,很多", "消化学会并提高", "说的有道理", "确实如此"]
    body = {"content": random.choice(comment_list), "informationId": f"{informationId}"}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    res = requests.post(url=url, data=body, headers=headers).json()
    if res['code'] == 0:
        print(f"评论成功")


def cumulative_use():
    url = f"https://api.yqypt.com/v2/count/cumulative_use"

    res = requests.get(url=url, headers=headers).json()
    # pprint(res)
    if res["message"] == "成功":
        print(f"累计使用5分钟")


if __name__ == '__main__':
    token = os.environ["yqytoken"]
    headers1 = {
        'token': token,
    }
    headers.update(headers1)
    userid, integralNum = info()
    print(f"任务前积分{integralNum}")
    sign_in(userid)
    share()
    read_list()
    userid, integralNum1 = info()
    cumulative_use()
    print(f"任务后积分{integralNum1}")
