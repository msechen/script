import json
import os

import requests


def exchange(ck):
    url = 'https://act1.pcauto.com.cn/discount/api/cash/out'
    headers = {
        'Cookie': ck,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Referer': 'https://www1.pcauto.com.cn/zt/discount-topics/app-wap/index.html',
        'Accept-Encoding': 'gzip, deflate, br',
        'Origin': 'https://www1.pcauto.com.cn',
        'Host': 'act1.pcauto.com.cn'

    }
    data = {"devId": "364944c519cf33f8aa7ac38b7898f92d", "openId": "oFOGvjmUdBtzHk3i0l0BdZ77iZFY", "amount": "0.3"}
    body = json.dumps(data).encode(encoding='utf-8')
    response = requests.post(url=url, data=body, headers=headers).json()
    print(response)
    if response['data']['balance'] is not None:
        if int(response['data']['balance']) >= 0.3:
            exchange()
            print(f"账号还剩{int(response['data']['balance'])}元,继续提现")
        else:
            print(f"账号{response['data']['msg']},提现结束")
    else:
        print(f"账号{response['data']['msg']},提现结束")


if __name__ == '__main__':
    ck = os.environ['tpyqcck']
    exchange(ck)
