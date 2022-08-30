import json
import os
import random
from pprint import pprint
from urllib.parse import urlencode

import requests
import time
import hashlib

headers = {
    'Authentication': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjIxOTQ3OTEsInVzZXJJZCI6ImMxYWRmZTc3NTFhMTQ3NjM5YmRjNmVmZGU0MDlkZGUzIn0.helG0SzFfRUu_INSeMa8p2DI2i1IIbl4RL1fyef5mDE',
    'User-Agent': 'android',
    'uid': 'F9659B01830F9F993E949E922DAA188F71BFC1C9',
    'Version': '4.5.8',
    'Content-Type': 'application/json; charset=utf-8',
    # 'Content-Length': '121',
    'Host': 'mapi.baigongyi.com',
    'Accept-Encoding': 'gzip',
    'Connection': 'keep-alive',

}


def request_get(url):
    response = requests.get(url=url, headers=headers).json()
    return response


def request_post(url, body):
    response = requests.post(url=url, headers=headers, data=body).json()
    return response


def get_token(body, uid):
    url = 'https://mapi.baigongyi.com/signin'
    # response = requests.post(url=url, headers=headers).json()
    headers = {
        'Authentication': '',
        'User-Agent': 'android',
        'uid': uid,
        'Version': '4.5.8',
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': '108',
        'Host': 'mapi.baigongyi.com',
        'Accept-Encoding': 'gzip',
        'Connection': 'keep-alive',

    }
    body = body
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    if response['code'] == 200:
        mobile = response['data']['mobile']
        accountId = response['data']['accountId']
        token = response['data']['token']
        print(f'欢迎账号{mobile}开始百工译任务'.center(50, '*'))
        return accountId, token, mobile
    else:
        print(response['message'])


def get_signin():
    url = 'https://mapi.baigongyi.com/beans/signIn'
    # response = requests.post(url=url, headers=headers).json()
    response = request_get(url)
    if response['code'] == 200:
        print(f'签到获得{response["data"]}天工豆')
    else:
        print(response['message'])


def get_tasklist(accountId):
    url = 'https://mapi.baigongyi.com/beans/getTaskCenterList'
    # response = requests.post(url=url, headers=headers).json()
    response = request_get(url)
    if response['code'] == 200:
        for i in response['data']['dailyTasks']:
            id = i['id']
            taskName = i['taskName']
            taskType = i['taskType']
            if taskName == "点赞":
                total = get_page()
                get_like(accountId, total)
            elif taskName == "分享":
                total = get_page()
                get_share(accountId, total)
            elif taskName == "评论":
                total = get_page()
                get_commentrecord(total)


def get_page():
    page = random.randint(1, 100)
    url = f'https://mapi.baigongyi.com/article/getArticlelistNew'
    # response = requests.post(url=url, headers=headers).json()
    body = {"pageNum": page, "pageSize": 10, "paramObject": {"flag": 1}}
    body1 = json.dumps(body).encode(encoding='utf-8')
    response = request_post(url, body1)
    # pprint(response)
    total = []
    if response['code'] == 200:
        for i in response['data']['records']:
            id = i['id']
            title = i["title"]
            total.append([id, title])
    return total


def get_like(accountid, total):
    for i in range(len(total)):
        url = f'https://mapi.baigongyi.com/like/add'
        # response = requests.post(url=url, headers=headers).json()
        body1 = {"accountId": accountid, "likedFlag": True, "objId": total[i][0], "objType": 3}

        # print(body1)
        body1 = json.dumps(body1).encode(encoding='utf-8')
        response = requests.post(url=url, headers=headers, data=body1).json()
        # pprint(response)
        if response['code'] == 200:
            data = response['data']['beansNumber']
            print(f'点赞文章:{total[i][1]}获得{data}天工豆')
            time.sleep(4)
            if i == 5:
                break
        else:
            print(f"点赞文章:{total[i][1]}{response['message']}")


def get_share(accountid, total):
    for i in range(len(total)):
        url = f'https://mapi.baigongyi.com/shareRecord'
        # response = requests.post(url=url, headers=headers).json()
        body1 = {"shareDestination": 1, "accountId": accountid, "objId": total[i][0], "objType": 3}

        # print(body1)
        body1 = json.dumps(body1).encode(encoding='utf-8')
        response = requests.post(url=url, headers=headers, data=body1).json()
        # pprint(response)
        if response['code'] == 200:
            data = response['data']['beansNumber']
            print(f'分享文章:{total[i][1]}获得{data}天工豆')
            time.sleep(4)
            if i == 1:
                break
        else:
            print(f"分享文章:{total[i][1]}{response['message']}")


def get_commentrecord(total):
    comment = ['赞', '看看', '支持', '好', 'ok', '为你点赞', '加油', '文章不错', '值得阅读', '很喜欢看']
    for i in range(len(total)):
        url = f'https://mapi.baigongyi.com/commentRecord/add'
        # response = requests.post(url=url, headers=headers).json()
        body1 = {"comment": random.choice(comment), "objId": total[i][0], "objType": 3}

        # print(body1)
        body1 = json.dumps(body1).encode(encoding='utf-8')
        response = requests.post(url=url, headers=headers, data=body1).json()
        # pprint(response)
        if response['code'] == 200:
            data = response['data']['beansNumber']
            print(f'评论文章:{total[i][1]}获得{data}天工豆')
            time.sleep(4)
            if i == 4:
                break
        else:
            print(f"评论文章:{total[i][1]}{response['message']}")
    # if response['code'] == 1:


def get_totalbean(accountId, mobile):
    url = f'https://mapi.baigongyi.com/homePage/userInfo/{accountId}'
    # response = requests.post(url=url, headers=headers).json()
    # body1 = {"comment": random.choice(comment), "objId": total[i][0], "objType": 3}

    # print(body1)
    # body1 = json.dumps(body1).encode(encoding='utf-8')
    response = requests.post(url=url, headers=headers).json()
    if response['code'] == 200:
        total_bean = response['data']['totalBean']
        print(f"目前账号{mobile}共{total_bean}个天工豆")
        return f"目前账号{mobile}共{total_bean}个天工豆"


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
        "title": '百工译任务',
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
    cks = os.environ['xfbgyCk']
    push_token = os.environ['push_token']
    cks = cks.split('@')
    time_random = time.sleep(random.randint(0, 7200))
    print(f"目前延时{time_random}")
    for ck in cks:
        ck = ck.split('&')
        uid = ck[1]
        body = json.loads(ck[0])
        accountId, token, mobile = get_token(body, uid)
        headers1 = {
            'Authentication': token,
            'uid': ck[1]
        }
        headers.update(headers1)
        get_signin()
        get_tasklist(accountId)
        get_page()
        message = get_totalbean(accountId, mobile)
        push_plus_bot(message, push_token)
