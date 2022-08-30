import os
import random
from pprint import pprint
from urllib.parse import urlencode

import requests
import time
import hashlib

headers = {
    'Host': 'wechatsupport.seagate.cn',
    'Connection': 'keep-alive',
    # 'Content-Length': '56',
    'charset': 'utf-8',
    'v': '1.52',
    'sign': '5f55f750bb1a7aae49bbc562008a2af4',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4296 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'content-type': 'application/x-www-form-urlencoded',
    'time': '1661237817',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'token': 'c409004a20e648123a4ae889e2faf321',
    'Referer': 'https://servicewechat.com/wx0665fbab06a9d1a8/136/page-frame.html',
}


def request_get(url):
    response = requests.post(url=url, headers=headers)
    return response


def request_post(url, body=''):
    response = requests.post(url=url, headers=headers, data=body)
    return response


def get_sign(token=''):
    d = 'eb0a191797624dd3a48fa681d3061212'
    time1 = str(int(time.time()))
    v = '1.52'
    if token != '':
        sign = f'{v}{time1}{token}v%3D%3D1.52eb0a191797624dd3a48fa681d3061212'
        print(sign)
        md5 = hashlib.md5()
        md5.update(sign.encode())
        sign2 = md5.hexdigest()[0:32]
        headers1 = {
            # 'User-Agent': ua1,
            'sign': sign2,
            'time': time1
        }
        headers.update(headers1)
    else:
        sign = v + time1 + d
        md5 = hashlib.md5()
        md5.update(sign.encode())
        sign2 = md5.hexdigest()[0:32]
        headers1 = {
            # 'User-Agent': ua1,
            'sign': sign2,
            'time': time1
        }
        headers.update(headers1)
        print(sign2)
        # return sign2, time1


def get_configs():
    get_sign()

    url = 'https://wechatsupport.seagate.cn/sg/api.member/configs?v=1.52'
    # response = requests.post(url=url, headers=headers).json()
    response = request_get(url).json()
    print(response)


def get_home():
    get_sign()

    url = 'https://wechatsupport.seagate.cn/sg/api.member/home?v=1.52'
    # response = requests.post(url=url, headers=headers).json()
    response = request_get(url).json()
    print(response)


def get_chkAuth(token):
    get_sign(token)
    url = 'https://wechatsupport.seagate.cn/sg/api.member/chkAuth'
    # response = requests.post(url=url, headers=headers).json()
    body = {
        'v': '1.52'
    }

    body = urlencode(body)
    response = request_post(url, body).json()
    pprint(response)


def get_code2session():
    # d = 'eb0a191797624dd3a48fa681d3061212'
    time1 = str(int(time.time()))
    v = '1.52'
    sign = f'{v}{time1}code%3D%3D0239mFFa1pZ6LD0xrUHa16sJzS09mFFxmini_scene%3D%3Dv%3D%3D1.52eb0a191797624dd3a48fa681d3061212'
    md5 = hashlib.md5()
    md5.update(sign.encode())
    sign2 = md5.hexdigest()[0:32]
    headers1 = {
        # 'User-Agent': ua1,
        'sign': sign2,
        'time': time1
    }
    headers.update(headers1)
    url = 'https://wechatsupport.seagate.cn/sg/api.member/code2session'
    # response = requests.post(url=url, headers=headers).json()
    body = {
        'code': '0239mFFa1pZ6LD0xrUHa16sJzS09mFFx',
        'mini_scene': '',
        'v': '1.52'
    }

    body = urlencode(body)
    response = request_post(url, body).json()
    pprint(response)


def get_srstoken(token):
    get_sign(token)
    url = 'https://wechatsupport.seagate.cn/sg/api.member/srsToken'
    # response = requests.post(url=url, headers=headers).json()
    body = {
        'v': '1.52'
    }

    body = urlencode(body)
    response = request_post(url, body).json()
    pprint(response)
    # if response['code'] == 1:


def get_redirectTrack(token):
    get_sign(token)
    url = 'https://wechatsupport.seagate.cn/sg/api.member/redirectTrack'
    # response = requests.post(url=url, headers=headers).json()
    body = {
        'type': 'scan',
        'page': '',
        'v': '1.52'
    }

    body = urlencode(body)
    response = request_post(url, body).json()
    pprint(response)


def get_signin():
    get_sign()

    url = 'https://wechatsupport.seagate.cn/sg/api.member/signIn?v=1.52'
    # response = requests.post(url=url, headers=headers).json()
    response = request_get(url).json()
    if response['code'] == 1:
        print(f'签到获得{response["data"]["today_point"]}')
    else:
        pprint(response['info'])


def get_page():
    get_sign()
    url = 'https://wechatsupport.seagate.cn/sg/api.member/news?page=1&page_size=10&name=&v=1.52'
    # response = requests.post(url=url, headers=headers).json()
    response = request_get(url).json()
    page_list = []
    if response['code'] == 1:
        for i in response['data']['list']:
            id = i['id']
            short_title = i['short_title']
            page_list.append([id, short_title])
            # print(id,short_title)
    return page_list


def get_watch_point(page_list):
    for i in range(2):
        get_sign()
        title = random.choice(page_list)
        url = f'https://wechatsupport.seagate.cn/sg/api.member/watchVideo?video_id={title[0]}&v=1.52'
        # response = requests.post(url=url, headers=headers).json()
        response = request_get(url).json()
        # pprint(response)
        if response['code'] == 1:
            reward = response['data']["point_tip"]
            print(f'看文章:{title[1]}获得{reward}')
            time.sleep(5)


def get_share(page_list):
    for i in range(2):
        get_sign()
        title = random.choice(page_list)
        url = f'https://wechatsupport.seagate.cn/sg/api.member/shareSuccess?id={title[0]}&v=1.52'
        # response = requests.post(url=url, headers=headers).json()
        response = request_get(url).json()
        # pprint(response)
        if response['code'] == 1:
            reward = response['data']["point_tip"]
            print(f'分享文章:{title[1]}获得{reward}')
            time.sleep(5)


def get_info(token):
    get_sign(token)
    url = f'https://wechatsupport.seagate.cn/sg/api.member/myHome'
    body = {
        'v': '1.52'
    }
    # pprint(headers)
    body = urlencode(body)
    response = request_post(url, body).json()
    if response['code'] == 1:
        name = response['data']['account']['nickname']
        score = response['data']['account']['vip_point']
        pprint(f"账号{name}目前{score}积分")
    # if response['code'] == 1:


def get_exchange(token):
    get_sign(token)
    url = 'https://wechatsupport.seagate.cn/sg/api.member/exchange'
    # response = requests.post(url=url, headers=headers).json()
    time1 = str(int(time.time()))
    v = '1.52'
    sign = f'{v}{time1}{token}id%3D%3D42v%3D%3D1.52eb0a191797624dd3a48fa681d3061212'
    md5 = hashlib.md5()
    md5.update(sign.encode())
    sign2 = md5.hexdigest()[0:32]
    headers1 = {
        # 'User-Agent': ua1,
        'sign': sign2,
        'time': time1
    }
    headers.update(headers1)
    body = {
        'id': '42',

        'v': '1.52'
    }

    body = urlencode(body)
    response = request_post(url, body).json()
    pprint(response)


if __name__ == '__main__':
    tokens = os.environ["xjtoken"]
    tokens = token.split('@')
    for token in tokens:
        headers1 = {
            # 'User-Agent': ua1,
            'token': token,
            # 'time': time1
        }
        headers.update(headers1)

        get_exchange(token)
        get_signin()
        page_list = get_page()
        get_watch_point(page_list)
        get_share(page_list)
        get_info(token)
