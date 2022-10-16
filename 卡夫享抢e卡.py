from datetime import datetime
import json
import os
import time
import concurrent.futures
import requests
import pprint
import re


def exchange(ck):
    try:
        url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/exchangeIntegralNew?value=%E4%BA%AC%E4%B8%9CE%E5%8D%A12%E5%85%83&phone=&type=%E8%A7%86%E9%A2%91%E5%8D%A1'
        headers = {
            'Host': 'fscrm.kraftheinz.net.cn',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4255 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.21.2120(0x280015F0) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
            'token': ck,
            'Origin': 'https://fscrm.kraftheinz.net.cn',
            'Referer': 'https://fscrm.kraftheinz.net.cn/?code=021nlIll20rwp94VCnll2iFHOe0nlIlO&state=&appid=wx65da983ae179e97b',

        }
        response = requests.post(url=url, headers=headers).json()
        if response['msg'] == '代理商当日超过上限' or response['msg'] == '积分不足' or response['msg'] == '仍有兑换在队列中' or response[
            'msg'] == 'Token UID获取失败':
            print(response['msg'])
            return response['msg']
        else:
            print(response['msg'])
            return response['msg']


    except:
        pass


def get_E_ka(ck, webhook_token):
    # try:
    url = 'https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getScoreOrder'
    headers = {
        'Host': 'fscrm.kraftheinz.net.cn',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4255 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.21.2120(0x280015F0) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'token': ck,
        'Origin': 'https://fscrm.kraftheinz.net.cn',
        'Referer': 'https://fscrm.kraftheinz.net.cn/?code=021nlIll20rwp94VCnll2iFHOe0nlIlO&state=&appid=wx65da983ae179e97b',

    }
    # print("1234")
    response = requests.post(url=url, headers=headers).json()
    # pprint.pprint(response)
    nowtime = datetime.now().strftime('%Y-%m-%d')
    # print(nowtime)
    if response['msg'] == '请求成功':
        # print("1234")
        for i in response['data']["data"]:
            awardResult = i["awardResult"]
            createdAt = i["createdAt"]
            # print(awardResult)
            # print(createdAt)
            createdAt = createdAt.split(" ")[0]
            # print(type(createdAt))
            if createdAt == nowtime:
                cardno = re.compile(r'"cardno":"(.*?)",').findall(awardResult)[0]
                cardpsw = re.compile(r'"cardpsw":"(.*?)",').findall(awardResult)[0]
                print(f"今日抢购京东E卡成功:卡号为{cardno},激活码为:{cardpsw}")
                message = f"今日抢购京东E卡成功:卡号为{cardno},激活码为:{cardpsw}"
                webhook(message, webhook_token)



    # except:
    #     pass


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


with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    webhook_token = os.environ['QYWX_KEY']
    kfxtoken = os.environ['kfxtoken']
    kfxtoken = kfxtoken.split('@')
    for i in range(4):
        for ck in kfxtoken:
            msg = exchange(ck)
            if msg == "当日已经兑换1次" or msg == "京东E卡2元兑换成功":
                get_E_ka(ck, webhook_token)

