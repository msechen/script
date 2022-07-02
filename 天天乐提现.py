import json
import os
import time
import requests

headers = {
    'Host': 'miniapi.tianwensk.com',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4254 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'Referer': 'https://servicewechat.com/wxcb1461dea29d49cb/29/page-frame.html',
    'Connection': 'keep-alive',
}


# 得到取钱信息
def get_money_data(userid, ck2, push_token):
    money_all = []
    url = f'https://miniapi.tianwensk.com/miniapp/user/wallet/getWithdrawConfig?{userid}'
    response = requests.get(url=url, headers=headers).json()
    if response['state'] == 1:
        name = response['content']['data']['nickName']
        money = response['content']['data']['balance']
        for i in response['content']['data']['withdrawConfigList']:
            amount = i['amount']
            id = i['id']
            money_all.append([amount, id])
    for i in money_all:
        if int(money) >= int(i[0]):
            exchange(ck2, name, i, push_token)
        else:
            print(f'{name}目前金额为{int(money) / 100}提现金额不足,取消提现')
            return


def exchange(ck, name, data, push_token):
    url = f'https://miniapi.tianwensk.com/miniapp/user/wallet/apply?{ck}&withdrawConfigId={data[1]}'
    response = requests.post(url=url, headers=headers).json()

    if response['state'] == 1:
        print(f'{name}提现{str(int(int(data[0] / 100)))}成功')
        push_plus_bot(f'{name}提现{str(int(int(data[0] / 100)))}成功', push_token)
        return f'{name}提现{str(int(int(data[0] / 100)))}成功'
    else:
        print(response['message'])
        return "提现不成功"


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
        "title": '天天乐提现',
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
    ck = os.environ['ttlcookiepy']
    ck = ck.split('@')
    push_token = os.environ['push_token']
    for cks in ck:
        ck1 = cks.split('&')
        print(ck1[0], cks)
        get_money_data(ck1[0], cks, push_token)
        time.sleep(5)
