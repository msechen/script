import json
import time

import requests


def sign():
    url = "https://dj.palmestore.com/zycl/gold/dailyWelfareV4?usr=j56126217&rgt=7&p1=Ym1c6ai%2Fb30DAETst9xTkWwY&p2=124020&p3=20000056&p4=501656&p5=19&p7=__f70b1c61e3dfa4c0&p9=0&p16=Pixel+4&p21=31303&p22=10&p25=20000156&p26=29&p31=__f70b1c61e3dfa4c0&zyeid=b0aa8ad0-f855-49ab-8be3-f8c823a66778&pca=channel-visit&ku=j56126217&kt=991ea219c912e9def1193de24640c580&firm=google&bannerType=2&signSwitch"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/101.0.4951.61 Mobile Safari/537.36',
        'Accept-Encoding': 'gzip, deflate',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'Host': 'dj.palmestore.com',
        'Referer': 'https://dj.palmestore.com/zycl/gold/index?zyeid=112f18c1-1969-4702-ab6c-aeeccf9a48a5&usr=j91705802&rgt=7&p1=YmkKeycIOFoDADjE6366M8lR&ku=j91705802&source=welfare&pc=10&p2=124020&p3=20000056&p4=501656&p5=19&p6=&p7=__5036784b31d92113&p9=0&p12=&p16=Pixel+4&p21=31303&p22=10&p25=20000156&p26=29&p28=&p30=&p31=__5036784b31d92113&firm=google&pca=channel-visit',
        'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22j56126217%22%2C%22first_id%22%3A%221807b331e6b1ac-0212edd85b0eef-74204232-326190-1807b331e6d2f4%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%221807b331e6b1ac-0212edd85b0eef-74204232-326190-1807b331e6d2f4%22%7D',
    }
    resonse = requests.get(url, headers=headers)
    print(resonse.status_code)
    print(url)
    sign_last()
    time.sleep(3)
    # re_data = resonse['body']['sign']['desc2']
    # print(f'已连续签到{re_data}')
    # return f'已连续签到{re_data}'


def sign_last():
    url = 'https://dj.palmestore.com/zybk/api/bookshelf/index?usr=j56126217&sign=EpSDdolhLUMtBpOaLShXJRWOfC5zuL%2FXAzG24h0g53MRkVfWvz5RCQGjx3tIvpuoB4xoSGr2HthLxpBrHB1mpG3nE2zkN5t2CoSX6DDh%2FdriVcy1KxW7c2TZELLzdDyE9u3NKo%2Fw81ojru8yJsPHz0Ar8JB0Jx4dOmw8ERLGn4g%3D&timestamp=1653351211129&aaid=6ED5628D-A06B-AA3A-D89A-996E10EB13E8&zyeid=b0aa8ad0-f855-49ab-8be3-f8c823a66778&usr=j56126217&rgt=7&p1=Ym1c6ai%2Fb30DAETst9xTkWwY&ku=j56126217&kt=991ea219c912e9def1193de24640c580&pc=10&p2=124020&p3=20000056&p4=501656&p5=19&p6=&p7=__f70b1c61e3dfa4c0&p9=0&p12=&p16=Pixel+4&p21=31303&p22=10&p25=20000156&p26=29&p28=&p30=&p31=__f70b1c61e3dfa4c0&firm=google'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/101.0.4951.61 Mobile Safari/537.36',
        'Accept-Encoding': 'gzip, deflate',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'Host': 'dj.palmestore.com',
        'Referer': 'https://dj.palmestore.com/zycl/gold/index?zyeid=112f18c1-1969-4702-ab6c-aeeccf9a48a5&usr=j91705802&rgt=7&p1=YmkKeycIOFoDADjE6366M8lR&ku=j91705802&source=welfare&pc=10&p2=124020&p3=20000056&p4=501656&p5=19&p6=&p7=__5036784b31d92113&p9=0&p12=&p16=Pixel+4&p21=31303&p22=10&p25=20000156&p26=29&p28=&p30=&p31=__5036784b31d92113&firm=google&pca=channel-visit',
        'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22j56126217%22%2C%22first_id%22%3A%221807b331e6b1ac-0212edd85b0eef-74204232-326190-1807b331e6d2f4%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%221807b331e6b1ac-0212edd85b0eef-74204232-326190-1807b331e6d2f4%22%7D',
    }
    resonse = requests.get(url, headers=headers).json()
    # print(resonse)
    re_data = resonse['body']['sign']['desc2']
    print(f'已连续签到{re_data}')
    return f'已连续签到{re_data}'


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
        "title": '得见小说签到',
        "content": b,
        "channel": "wechat",
        "template": "html",
        'webhook': ""
    }
    body = json.dumps(data).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json
    if response['code'] == 200:
        print('推送成功！')
    else:
        print('推送失败！')


if __name__ == '__main__':
    sign()
    data = sign_last()
    push_plus_bot(data)
