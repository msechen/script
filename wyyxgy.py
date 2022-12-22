import datetime
import json
import os
import pprint
import random
import time

import requests

headers = {
    'Host': 'miniapp.you.163.com',
    'Connection': 'keep-alive',
    'charset': 'utf-8',
    'x-wx-3rd-session': '0b5e3b26fdc6369f8561a6091e4f3f3e',
    'ntes-traceid': '1#yanxuan-miniapp#1671713720984#53k2U3sy',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4374 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001736) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'yx-s-tid': 'tid_web_2be2fc491071494e8d2e63d5ed9ee221_7b9f86688_1',
    'wx-pin-session': '0b5e3b26fdc6369f8561a6091e4f3f3e',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'wx-pin-channel': '',
    'yx-aui': 'KgszWEdmPqW2b88fjsqXK2UGAoiFkU8A',
    'version': 'v20.5.4',
    'x-wx-common-3rd-session': '',
    'content-type': 'application/json',
    'yx-bargain-channel': '',
    'ntes-spanid': '13614746',
    'Referer': 'https://servicewechat.com/wx5b768b801d27f022/476/page-frame.html',
}


def sign():
    url = "https://miniapp.you.163.com/act/money/checkIn/V3/checkIn.json"
    response = requests.post(url, headers=headers).json()
    if response['code'] == 200:
        print(f'已签到{response["day"]},现在总资金{"totalAmount"}')


##收取气泡水滴
def qpsd():
    url = 'https://miniapp.you.163.com/orchard/task/water/get.json?taskId=REWARD_TOMORROW&taskRecordId=6509215'
    response = requests.get(url=url, headers=headers).json()
    if response['result']['result'] == 1:
        print(f'💧收取{response["result"]["water"]}滴水💧')
    elif response['result']['result'] == 2:
        print(f'收取失败没有收取到水滴')


##免费水滴
def mfsd():
    url = "https://miniapp.you.163.com/orchard/task/water/get.json?taskId=GET_EVERYDAY_FREE&taskRecordId=&subTaskId="
    response = requests.get(url=url, headers=headers).json()
    if response['result']['result'] == 1:
        print(f'💧收取{response["result"]["water"]}滴水💧')
    elif response['result']['result'] == 2:
        print(f'收取失败没有收取到水滴')


##三餐水滴
def scsd():
    url = "https://miniapp.you.163.com/orchard/task/water/get.json?taskId=GET_EVERYDAY_RANDOM&taskRecordId=&subTaskId="
    response = requests.get(url=url, headers=headers).json()
    print(response)
    if response['result']['result'] == 1:
        print(f'💧收取{response["result"]["water"]}滴水💧')
    elif response['result']['result'] == 2:
        print(f'收取失败没有收取到水滴')


##浏览商品
def llsp():
    url = "https://miniapp.you.163.com/orchard/task/finish.json?taskId=VISIT_ITEM&taskRecordId=0"
    response = requests.get(url=url, headers=headers).json()
    if response['result']['result'] == 1:
        print('💧收取10滴水💧')
    elif response['result']['result'] == 2:
        print(f'收取失败没有收取到水滴')


##浇水
def js(n=1):
    url = "https://miniapp.you.163.com/orchard/game/water/drop.json"
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 200:
        print(f'第{n}💧浇水成功10g水滴💧')
        js(n = n+1)
        time.sleep(random.randint(1,3))
    else:
        print(f'💧水滴不足，无法浇水')
        return


##浇水进度
def jsjd():
    url = "https://miniapp.you.163.com/orchard/game/water/index/dynamic.json"
    response = requests.get(url=url, headers=headers).json()
    print(response['result']['levelDesc'])
    return response['result']['levelDesc']


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
    start_time = datetime.datetime.now().strftime('%H')
    webhook_token = os.environ['QYWX_KEY']
    if start_time == '01':
        print('开始领取签到奖励')
        sign()
        time.sleep(random.randint(1, 4))
        print('开始免费水滴任务')
        mfsd()
    elif start_time == '08':
        print('开始免费水滴任务')
        mfsd()
        time.sleep(random.randint(1, 4))
        print('收取气泡水滴')
        qpsd()
        time.sleep(random.randint(1, 4))
        print('收取三餐水滴')
        scsd()
        time.sleep(random.randint(1, 4))
        print('浏览水滴任务')
        llsp()

    elif start_time == '12':
        print('开始三餐领取任务')
        scsd()
        time.sleep(random.randint(2, 6))
        print('开始领取免费水滴任务奖励')
        mfsd()
    elif start_time == '18':
        print('开始三餐领取任务')
        scsd()
        time.sleep(random.randint(2, 6))
        print('开始领取免费水滴任务奖励')
        mfsd()
    elif start_time == '20':
        print('开始领取免费水滴任务奖励')
        mfsd()
        time.sleep(random.randint(1, 4))
        print('开始浇水')
        js()
        time.sleep(random.randint(1, 4))
        print('开始推送信息')
        message=jsjd()
        webhook(f"5斤六鳌蜜薯{message}",webhook_token)

