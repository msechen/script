import datetime
import json
import os
import random
import time
import hashlib
import requests
import pprint

"""

"""
headers = {
    'content-length': '1265',
    'weimob-bosid': '4020112618957',
    'charset': 'utf-8',
    'x-cmssdk-vidticket': '22178-1659743624.280-saas-w1-1123-46851435091',
    'cookie': 'rprm_cuid=974486238549vm8mqgrf',
    'weimob-pid': '4020112618957',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4276 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'accept-encoding': 'gzip,compress,br,deflate',
    'x-wx-token': '0fce3d240160daea40165445095bea18b142ad5488ee7dffa0c75a628925509f279b178a05c4edd65e1b5f0eef5cc1bd',
    'x-cms-sdk-request': '1.1.357',
    'cloud-project-name': 'tongyixiangmu',
    'cloud-pid': '4020112618957',
    'wos-x-channel': '0:TITAN',
    'content-type': 'application/json',
    'cloud-bosid': '4020112618957',
    'referer': 'https://servicewechat.com/wx532ecb3bdaaf92f9/83/page-frame.html',

}


def user():
    url = 'https://xapi.weimob.com/api3/onecrm/user/center/usercenter/queryUserInfo'
    body = {"appid": "wx532ecb3bdaaf92f9", "basicInfo": {"vid": 6013753979957, "bosId": 4020112618957, "productId": 146,
                                                         "productInstanceId": 3168798957, "tcode": "weimob",
                                                         "cid": 176205957},
            "extendInfo": {"refer": "hd-lego-index", "wxTemplateId": 6161, "bosTemplateId": 1000000406,
                           "childTemplateIds": [{"customId": 90004, "version": " crm@0.0.97"},
                                                {"customId": 90002, "version": "ec@0.3.7"},
                                                {"customId": 90006, "version": "hudong@0.0.110"},
                                                {"customId": 90008, "version": "cms@0.0.104"}],
                           "youshu": {"enable": False}, "source": 1, "channelsource": 5, "mpScene": 1048,
                           "ocdAppId": 2620, "uuid": "202207281656-62e244746e8208"}, "queryParameter": '',
            "pid": "4020112618957", "storeId": "0", "source": 2, "request": {}}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    # print(response)
    if response["errcode"] == '0':
        name = response["data"]["nickname"]
        print(f'开始账号{name}的统一抽奖活动'.center(50, '*'))
        return name


def chance(name):
    url = 'https://xapi.weimob.com/api3/interactive/qianxi/lcode/75/10195'
    body = {"appid": "wx532ecb3bdaaf92f9",
            "basicInfo": {"vid": 6013753979957, "vidType": 2, "bosId": 4020112618957, "productId": 207,
                          "productInstanceId": 3169916957, "productVersionId": "12007", "merchantId": 2000020692957,
                          "tcode": "weimob", "cid": 176205957},
            "extendInfo": {"refer": "hd-lego-index", "wxTemplateId": 6161, "bosTemplateId": 1000000406,
                           "childTemplateIds": [{"customId": 90004, "version": " crm@0.0.97"},
                                                {"customId": 90002, "version": "ec@0.3.7"},
                                                {"customId": 90006, "version": "hudong@0.0.110"},
                                                {"customId": 90008, "version": "cms@0.0.104"}],
                           "youshu": {"enable": False}, "source": 1, "channelsource": 5, "mpScene": 1089,
                           "ocdAppId": 2620, "uuid": "202207281656-62e244746e8208"}, "queryParameter": '',
            "pid": "4020112618957", "storeId": "0", "_transformBasicInfo": True, "_requrl": "eventkey:getRestChance",
            "templateId": 30, "templateKey": "egg", "activityId": "3095720240", "bussinessType": 1, "channel": 1,
            "channelType": 1, "source": 1, "_version": "2.4.2", "activityIdentity": "20",
            "openId": "oBk224gwsBSsywr3TLUfTwAfLkfc", "wid": 10062851146, "appId": "wx532ecb3bdaaf92f9",
            "playSourceCode": "lcode", "vid": 6013753979957, "vidType": 2, "bosId": 4020112618957, "productId": 207,
            "productInstanceId": 3169916957, "productVersionId": "12007", "merchantId": 2000020692957,
            "tcode": "weimob", "cid": 176205957, "vidTypes": [2], "openid": "oBk224gwsBSsywr3TLUfTwAfLkfc"}
    body = json.dumps(body).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    # print(response)
    if response["errcode"] == 0:
        data = response['data']
        print(f'开始账号{name}目前可抽奖次数为:{data}')
        return data


def roll(data):
    for i in range(data):
        url = 'https://xapi.weimob.com/api3/interactive/qianxi/lcode/75/10237'
        body = {"appid": "wx532ecb3bdaaf92f9",
                "basicInfo": {"vid": 6013753979957, "vidType": 2, "bosId": 4020112618957, "productId": 207,
                              "productInstanceId": 3169916957, "productVersionId": "12007", "merchantId": 2000020692957,
                              "tcode": "weimob", "cid": 176205957},
                "extendInfo": {"refer": "hd-lego-index", "wxTemplateId": 6161, "bosTemplateId": 1000000406,
                               "childTemplateIds": [{"customId": 90004, "version": " crm@0.0.97"},
                                                    {"customId": 90002, "version": "ec@0.3.7"},
                                                    {"customId": 90006, "version": "hudong@0.0.110"},
                                                    {"customId": 90008, "version": "cms@0.0.104"}],
                               "youshu": {"enable": False}, "source": 1, "channelsource": 5, "mpScene": 1048,
                               "ocdAppId": 2620, "uuid": "202207281656-62e244746e8208"}, "queryParameter": '',
                "pid": "4020112618957", "storeId": "0", "_transformBasicInfo": True, "_requrl": "eventkey:playGame",
                "templateId": 30, "templateKey": "egg", "activityId": "3095720240", "bussinessType": 1, "channel": 1,
                "channelType": 1, "source": 1, "_version": "2.4.2", "activityIdentity": "20",
                "openId": "oBk224mAWfmMO8FvydfEzjxF21GA", "wid": 3190440407, "appId": "wx532ecb3bdaaf92f9",
                "playSourceCode": "lcode", "vid": 6013753979957, "vidType": 2, "bosId": 4020112618957, "productId": 207,
                "productInstanceId": 3169916957, "productVersionId": "12007", "merchantId": 2000020692957,
                "tcode": "weimob", "cid": 176205957, "vidTypes": [2], "openid": "oBk224mAWfmMO8FvydfEzjxF21GA"}
        body = json.dumps(body).encode(encoding='utf-8')
        # headers = {'Content-Type': 'application/json'}
        response = requests.post(url=url, data=body, headers=headers).json()
        pprint.pprint(response)
        time.sleep(10)


if __name__ == '__main__':
    cks = os.environ['tyjdcj_x_wx_token']
    cks = cks.split('@')
    for x_wx_token in cks:
        headers1 = {
            'x-wx-token': x_wx_token,
        }
        headers.update(headers1)
        name = user()
        data = chance(name)
        if data == 0:
            print(f'账号{name}目前可抽奖次数为0,请明日抽奖')

        else:
            roll(data)
        time.sleep(10)

