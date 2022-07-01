import datetime
import json
import pprint
import re
import hashlib
import requests
import time
import random

headers = {
    'ua': '',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': '0',
    'Host': 'mapi.shuijiaobao.cn',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'okhttp/3.10.0',
}


# 签到
def qiandao():
    url2 = 'https://mapi.shuijiaobao.cn/home/sign'
    response = requests.get(url=url2, headers=headers).json()
    if response['ok'] == 1:
        qiandao_money = response['data']['sign_info']['sign_power_coin']
        qiandao1 = f'签到成功,此次签到获得{qiandao_money}金币'
        print(f'签到成功,此次签到获得{qiandao_money}金币')
        return qiandao1
    else:
        print(response['msg'])
        return response['msg']


# 三餐
def sancan():
    url5 = "https://mapi.shuijiaobao.cn/sleep/dinnerCreate"
    response = requests.post(url=url5, headers=headers).json()
    # print(response)
    if response['ok'] == 1:
        coin = response['data']['gold_number']
        coin_reward = f'此次共获得{coin}金币'
        print(f'此次共获得{coin}金币')
        return coin_reward
    else:
        print(response['msg'])
        return response['msg']


# 看视频
def look_video():
    total = []
    for i in range(1, 9):
        url4 = "https://mapi.shuijiaobao.cn/task/dayReward"
        body1 = {
            'type': '155',
            'sign': '5072d87bd3146c6756d831ffd9ef5d42',
            'timeStamp': '1640610096040'  # int(time.time() * 1000)
        }
        response = requests.post(url=url4, headers=headers, data=body1).json()
        if response['ok'] == 1:
            coin = response['data']['user_info']['add_gold_coin']
            total.append(int(coin))
            print(f'此次看视频共获得{coin}金币')
        else:
            print(response['msg'])
        time.sleep(50)
    sum_coin = sum(total)
    sum_coin1 = f'此次看视频共获得{sum_coin}金币'
    return sum_coin1


def sleep():
    url = f'https://mapi.shuijiaobao.cn/sleep/createOrderSleep'
    response = requests.get(url=url, headers=headers).json()
    if response['ok'] == 1:
        print(response['msg'])
        return response['msg']
    else:
        print(response['msg'])
        return response['msg']


# 领睡觉金币
def sleep_coin():
    try:
        data = []
        data_coin = []
        url7 = 'https://mapi.shuijiaobao.cn/home/user'
        response = requests.post(url=url7, headers=headers).json()
        # pprint.pprint(response)
        total_coin_data = response['data']['bubble_list']
        for i in total_coin_data:
            gold_number = i['gold_number']
            gold_id = i['id']
            data.append([gold_number, gold_id])
        for coin in data:
            url6 = 'https://mapi.shuijiaobao.cn/sleep/collectSleepGold'
            body = {
                'number': coin[0],
                'id': coin[1]
            }
            response = requests.post(url=url6, headers=headers, data=body).json()
            # pprint.pprint(response)
            if response['ok'] == 1:
                reward = response['data']['gold_number']
                data_coin.append(reward)
                print(f'获得{reward}金币')
            else:
                print(response['msg'])
        coin_data = sum(data_coin)
        coin_data1 = f'此次看睡觉共获得{coin_data}金币'
        return coin_data1
    except Exception as e:
        print(e)


def reward_all():
    data_coin = []
    url7 = 'https://mapi.shuijiaobao.cn/task/dayReward'
    data = [['152', '67d9f4ed65c750a93ac8bcdf7be79da9'], ['153', 'ed4f6f7a76782521681b034a5e09fb58']]
    for i in data:
        body_reward = {
            'type': i[0],
            'sign': i[1],
            'timeStamp': '1640610096040'  # f'{int(time.time() * 1000)}'
        }
        response = requests.post(url=url7, headers=headers, data=body_reward).json()
        # print(response)
        if response['ok'] == 1:
            coin = response['data']['user_info']['add_gold_coin']
            data_coin.append(coin)
        else:
            print(response['msg'])
            # pprint.pprint(response)
    coin_data = sum(data_coin)
    coin_data1 = f'总睡觉和总进餐共获得{coin_data}金币'
    return coin_data1


def total_money():
    url2 = 'https://mapi.shuijiaobao.cn/user/userContent'
    response = requests.post(url=url2, headers=headers).json()
    # print(response)
    if response['ok'] == 1:
        reward = response['data']['userGold']
        print(f'目前金币{reward}')
        return reward


def accessToken():
    url = 'https://mapi.shuijiaobao.cn/home/user'
    response = requests.post(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['ok'] == 1:
        token = response['data']['userInfo']['accessToken']
        name_id1 = str(response['data']['userInfo']['id'])
        name1 = response['data']['userInfo']['name']
        # print(token, name_id, name)
        return token, name_id1, name1


def timeStamp():
    url = 'https://mapi.shuijiaobao.cn/config/timeStamp'
    response = requests.post(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['ok'] == 1:
        time1 = response['data']['timeStamp']
        return str(time1)


def sign(token1, id1,time3):
    number = id1 + "49lfdkislkcsiT8A" + time3+ token1
    # print(number)
    md5 = hashlib.md5()
    md5.update(number.encode())
    sign2 = md5.hexdigest()[0:32]
    return sign2


def with_draw(sign2,time2):
    url4 = "https://mapi.shuijiaobao.cn/money/extract"
    body1 = {
        'sign': sign2,
        'type': '2',
        'pay_type': '2',
        'timeStamp': time2
    }

    response = requests.post(url=url4, headers=headers, data=body1).json()
    print(response['msg'])
    return response['msg']


def push_plus_bot(content,push_token):
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
        "title": '睡觉宝获得金币',
        "content": b,
        "channel": "wechat",
        "template": "html",
        'webhook': ""
    }
    body = json.dumps(data).encode(encoding='utf-8')
    # headers = {'Content-Type': 'application/json'}
    response = requests.post(url=url, data=body, headers=headers).json()
    # print(response)
    if response['code'] == 200:
        print('推送成功！')
    else:
        print('推送失败！')
    # except Exception as e:
    #     print(e)


if __name__ == '__main__':
    print('----------开始睡觉宝任务-----------------')
    account = [
        'a|10|2.0.5|ql_sleep|f2e3b01fdbc39bb7unknown|1080|2236|0|859701|1654179676000|0fede26a8837c1d34bc95075b49ef826|924938b69f8f31055479e7970c76514c|google',
        'a|7.1.2|2.0.5|ql_sleep|3513abaac224588bvmosseri|1080|2148|0|859720|1654179812000|06d1c4001247ec53c59bb2fd5acbcd90|6fb891ed286c7985784707703917901a|google'
    ]
    start_time = datetime.datetime.now().strftime('%H')
    # print(start_time)
    push_token = os.environ['push_token']
    for ua in range(len(account)):
        headers1 = {
            'ua': account[ua],
        }
        headers.update(headers1)
        accessToken1, name_id, name = accessToken()
        print(f"------正在进行账号{name}的睡觉宝任务-------")
        # time2 = timeStamp()
        # sign2 = sign(accessToken1, name_id,time2)
        # with_draw(sign2, time2)

        begin_task = int(total_money())
        if start_time == '01':
            # print('1')
            data = look_video()
        elif start_time == '07':
            # print('2')
            qiandao2 = qiandao()
            time.sleep(7)
            sansan2 = sancan()
            data = qiandao2 + sansan2

        elif start_time == '12':
            # print('7')
            time.sleep(10)
            sleep1 = sleep_coin()
            sancan2 = sancan()
            time.sleep(10)
            sleep()
            data = sleep1 + sancan2
        elif start_time == '20':
            sleep1 = sleep_coin()
            time.sleep(3)
            # print('6')
            sleep()
            data = sleep1
        elif start_time == '21':
            # print('5')
            sancan2 = sancan()
            time.sleep(6)
            reward_all1 = reward_all()
            data = sancan2 + reward_all1
        finish_task = int(total_money())
        last_coin = finish_task - begin_task
        message = f'{data},总金币{finish_task}'
        push_plus_bot(message)
        print(f'此次任务共获得{last_coin},总金币{finish_task}')
        if finish_task >= 10000:
            time2 = timeStamp()
            sign2 = sign(accessToken1, name_id,time2)
            data = with_draw(sign2,time2)
            print(data)
            message = f'{data}'
            push_plus_bot(message,push_token)

    print('-----------睡觉宝任务结束-------------')
