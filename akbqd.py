"""
cron: 0 7 * * *
new Env('艾克帮签到');

"""
import json
import os

import requests, hashlib, time
from pprint import pprint
import time


def get_md5(data1):
    # print(sign1)
    md5 = hashlib.md5()
    md5.update(data1.encode())
    sign2 = md5.hexdigest()[0:32]
    return sign2


def getUserDetails(token):
    url = "https://api.ikbang.cn/v2/iclick-new/usercenter/getUserDetails"
    time1 = str(int(time.time() * 1000))
    sign1 = url + time1 + "A749380BBD5A4D93B55B4BE245A42988" + token
    sign1 = get_md5(sign1)
    headers = {
        'Host': 'api.ikbang.cn',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'sign': sign1,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4364 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001736) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'token': token,
        'timestamp': time1,
        'Referer': 'https://servicewechat.com/wx342d760f674b013b/38/page-frame.html',
    }
    response = requests.get(url=url, headers=headers).json()
    # pprint(response)
    if response['code'] == 1:
        userName = response['result']["userName"]
        totalPoints = response['result']["totalPoints"]
        print(f"欢迎{userName},目前{totalPoints}积分".center(50, "*"))
        return f'{userName},目前艾克帮积分{totalPoints}积分'


def getsign(token):
    url = "https://api.ikbang.cn/v2/iclick-new/signIn/sign"
    time1 = str(int(time.time() * 1000))
    sign1 = url + time1 + "A749380BBD5A4D93B55B4BE245A42988" + token
    sign1 = get_md5(sign1)
    headers = {
        'Host': 'api.ikbang.cn',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'sign': sign1,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4364 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001736) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'token': token,
        'timestamp': time1,
        'Referer': 'https://servicewechat.com/wx342d760f674b013b/38/page-frame.html',
    }
    response = requests.post(url=url, headers=headers).json()
    # pprint(response)
    if response['code'] == 1:
        sorce = response['result']
        print(f"签到获得{sorce}积分")
    else:
        print(response["description"])


def getUserVisibleSurvey(token):
    url = "https://api.ikbang.cn/v2/iclick-new/survey/getUserVisibleSurvey"
    time1 = str(int(time.time() * 1000))
    sign1 = url + time1 + "A749380BBD5A4D93B55B4BE245A42988" + token
    sign1 = get_md5(sign1)
    headers = {
        'Host': 'api.ikbang.cn',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'sign': sign1,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4364 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001736) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'token': token,
        'timestamp': time1,
        'Referer': 'https://servicewechat.com/wx342d760f674b013b/38/page-frame.html',
    }
    response = requests.get(url=url, headers=headers).json()
    pprint(response)
    if response['code'] == 1:
        list = response['result']
        for i in list[1:]:
            title = i["title"]
            surveyId = i["surveyId"]
            score = i["highest"]
            print(title, surveyId, score)
            url1 = get_survey_url(token, surveyId)
            return url1


def get_survey_url(token, surveyId):
    url = f"https://api.ikbang.cn/v2/iclick-new/survey/redirect-survey-url?surveyId={surveyId}"
    time1 = str(int(time.time() * 1000))
    url1 = "https://api.ikbang.cn/v2/iclick-new/survey/redirect-survey-url"
    sign1 = url1 + time1 + f'surveyId={surveyId}' + "A749380BBD5A4D93B55B4BE245A42988" + token
    sign1 = get_md5(sign1)
    headers = {
        'Host': 'api.ikbang.cn',
        'Connection': 'keep-alive',
        'charset': 'utf-8',
        'sign': sign1,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4364 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001736) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        'content-type': 'application/json',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'token': token,
        'timestamp': time1,
        'Referer': 'https://servicewechat.com/wx342d760f674b013b/38/page-frame.html',
    }
    response = requests.get(url=url, headers=headers).json()

    if response['code'] == 1:
        url = response['result']
        print(url)
        return url


def get_index(url):
    url = url
    headers = {
        # 'Host': 'api.ikbang.cn',
        # 'Connection': 'keep-alive',
        # 'charset': 'utf-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4364 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001736) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
        # 'content-type': 'application/json',
        # 'Accept-Encoding': 'gzip,compress,br,deflate',
        # 'Referer': 'https://servicewechat.com/wx342d760f674b013b/38/page-frame.html',
    }
    response = requests.get(url=url, headers=headers).text
    print(response)


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
    akbtooken = os.environ["akbtooken"]
    QYWX_KEY = os.environ["QYWX_KEY"]
    getUserDetails(akbtooken)
    getsign(akbtooken)
    message = getUserDetails(akbtooken)
    webhook(message, QYWX_KEY)
