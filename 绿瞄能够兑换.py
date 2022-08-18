import json
import time

import requests
import pprint
import re

data_content = ''


def kkz():
    global data_content

    headers = {
        'Host': '88543.activity-12.m.duiba.com.cn',
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4207 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.21.2120(0x28001557) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wx3279a0b1782e2d93',
        'X-Requested-With': 'com.tencent.mm',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://88543.activity-12.m.duiba.com.cn/chw/visual-editor/skins?id=239935&from=login&spm=88543.1.1.1',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': '_ac=eyJhaWQiOjg4NTQzLCJjaWQiOjM4MTQwNTc2MjJ9; createdAtToday=false; isNotLoginUser=false; dcustom=avatar%3Dhttps%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FNYLvH4BuCibqiaYOl1nG1icEr7uCxdnsqrej5q0JRRAFj6yicdl1sXPrOyhgDp0zjZYcsUxxQ9ZtcO1bdrkvFJR3ug%2F132%26nickname%3D%E7%BC%98%E6%98%93%26newUser%3D0; deap=ODg1NDMtSExyWDF5OVp2RTRZRWFtOVlhWXhXN2p2WlB3bkRlaE1VMmZ6RzE4OTJkOTQ2Nw..; wdata4=yP25oesPhbsCCW6k95uE9+DOwu03MJbqHPVP2Q8LH8Scg5bEsOBM//P3i3KrHi42OCDZ97w++KSTprnnSXQIhk7Q+PJM/gBnykq6AOyGxpk/DQ1SS27xxrU0baKmY60KWHgf0A5YvdBgA5IvJL5zCG4Mm7GKy+8tBHu8olP/ips=; w_ts=1654609969043; tokenId=5b0b7090be5b06e88f0174811688a504; wdata3=5PXrDctanZeG6EAh2fDhJEcZzgEEufgypeJK29oinFEJ8LXxXXTLBN6H5usS8eEwvgTs7bd9SA2rqMSp2yFHoNVbefZxiqzGjukZoRuvH6KyPYeMhAHuivGGyQNBBLwoGsgZrvuz96ANxS5poFVfSwbWuJYMuhK',

    }
    url = "https://88543.activity-12.m.duiba.com.cn/chw/visual-editor/items/list?classifyId=21801&pageNo=1&pageSize=300&unitId=2385837&sort=custom&soldOutType=show&hiddenByDate=false"
    response = requests.get(url=url, headers=headers).json()
    data = []
    for i in response['data']['list']:
        title = i['title']
        credits = i['credits']
        tagText = i['tagText']
        print(title, credits, tagText)
        data.append([title, credits, tagText])
    data_content = []
    for i in data:
        print(i)
        if '毛毡手包' in i and len(i[2]) < 6:
            content = f"{i[0]}有货赶紧去兑换"
            data_content.append(content)
        elif '回收塑料啫喱笔' in i and len(i[2]) < 6:
            content = f"{i[0]}有货赶紧去兑换"
            data_content.append(content)
        elif '晨光食物残渣中性笔' in i and len(i[2]) < 6:
            content = f"{i[0]}有货赶紧去兑换"
            data_content.append(content)
        elif '折叠大容量环保袋' in i and len(i[2]) < 6:
            content = f"{i[0]}有货赶紧去兑换"
            data_content.append(content)
        elif '植物纤维净肤棉柔巾' in i and len(i[2]) < 6:
            content = f"{i[0]}有货赶紧去兑换"
            data_content.append(content)
    data_content = '\n'.join(data_content)


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
        "title": '绿瞄换物品',
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
    kkz()
    if data_content != '':
        push_plus_bot(data_content)
