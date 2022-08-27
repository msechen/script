import datetime
import json
import os
import pprint
import random
import time
import requests
import hashlib

headers = {
    'authorization': 'XOgX88xgrsYSDVJ3HrXz1N+EfHO3RTQeiYbYPcpyMCHD7W75nfPByUhbl9wRL/a/',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4296 MMWEBSDK/20220505 Mobile Safari/537.36 MMWEBID/5067 MicroMessenger/8.0.23.2160(0x28001756) WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wx532ecb3bdaaf92f9',
    'content-type': 'application/json',
    # 'accept': '*/*',
    'origin': 'https://thekingoftomato.ioutu.cn',
    'x-requested-with': 'com.tencent.mm',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://thekingoftomato.ioutu.cn/?t=1661082764254&token=eyJ0aGlyZEFwcElkIjoid3g1MzJlY2IzYmRhYWY5MmY5Iiwid2lkIjozMTkwNDQwNDA3LCJvcGVuSWQiOiJvQmsyMjRtQVdmbU1POEZ2eWRmRXpqeEYyMUdBIiwiaG9tZVN0b3JlSWQiOm51bGwsInV0bV9jYW1wYWlnbiI6ImhhcHB5YXAiLCJ1dG1fbWVkaXVtIjoiYXBiYW5uZXIiLCJfY2hhbm5lbF90cmFja19rZXkiOiJBM25nb3h2OSIsInV0bV9zb3VyY2UiOiJoYXBweW1wIiwidXRtX2NvbnRlbnQiOiJhcGJhbm5lciIsInVzZXJJbmZvIjp7fSwiY2hhbm5lbEluZm8iOnsidXRtX2NhbXBhaWduIjoiaGFwcHlhcCIsInV0bV9zb3VyY2UiOiJoYXBweW1wIiwidXRtX21lZGl1bSI6ImFwYmFubmVyIiwidXRtX2NvbnRlbnQiOiJhcGJhbm5lciJ9fQ%3D%3D',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

User_Agents = [
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/532.0 (KHTML, like Gecko) CriOS/43.0.823.0 Mobile/65M532 Safari/532.0",
    "Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1 like Mac OS X; rw-RW) AppleWebKit/531.9.3 (KHTML, like Gecko) Version/4.0.5 Mobile/8B118 Safari/6531.9.3",
    "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045511 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; MHA-AL00 Build/HUAWEIMHA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w Build/OPR6.170623.013; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; 16 X Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/532.0 (KHTML, like Gecko) FxiOS/18.2n0520.0 Mobile/50C216 Safari/532.0",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
];


def get_nonce():
    """
        生成一个指定长度的随机字符串
        """
    randomlength = 16
    random_str = ''
    base_str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    length = len(base_str) - 1
    for i in range(randomlength):
        random_str += base_str[random.randint(0, length)]
    # print(random_str)
    return random_str


def get_signature(nonce):
    timestamp = int(time.time() * 1000)
    md = f'clientKey=IfWu0xwXlWgqkIC7DWn20qpo6a30hXX6&clientSecret=A4rHhUJfMjw2I5CODh5g40Ja1d3Yk1CH&nonce={nonce}&timestamp={timestamp}'
    md5 = hashlib.md5()
    md5.update(md.encode())
    sign2 = md5.hexdigest()[0:32].upper()
    # print(sign2)
    # print(timestamp, nonce, sign2)
    return timestamp, nonce, sign2


def login(ua, ck):
    # print(ck)
    url = "http://api.xiaoyisz.com/qiehuang/ga/public/api/login"
    headers = {
        "Host": "api.xiaoyisz.com",
        "user-agent": ua,
        "Content-Type": "application/json",
    }
    body = ck
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url, headers=headers, data=body).json()
    if response['code'] == 0:
        authorization = response['data']
        # print(authorization)
        print('获取账号信息成功')
        return authorization


def get_info():
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/info?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    # print('开始查询账号信息')
    if response['code'] == 0:
        nickName = response['data']['nickName']
        tomatoNum = response['data']['tomatoNum']
        gaNum = response['data']['gaNum']
        print(f'账号{nickName}目前总番茄数量为:{tomatoNum}')
        return gaNum
    else:
        print(response['message'])


def get_tasklist():
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/task/list?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        # pprint.pprint(response)
        for i in response['data']:
            task_name = i['name']
            task_status = i['status']
            task_taskId = i['taskId']
            task_type = i['taskType']
            if task_status == 3:
                pass
            elif task_type == 1:
                pass
            elif task_type == 3:
                pass
            else:
                print(f'开始做{task_name}任务')
                report(task_type, task_taskId)
                get_prize(task_taskId, task_name)
                time.sleep(5)
            # print(task_name,task_status,task_taskId)


def report(task_type, taskid):
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/task/report?timestamp={timestamp}&nonce={nonce}&signature={sign2}&taskType={task_type}&attachId=1661089418429&taskId={taskid}'
    response = requests.get(url=url, headers=headers).json()
    # if
    # print(response)
    # if response['code'] == 0:


def get_prize(taskid, task_name):
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/task/drawPrize?timestamp={timestamp}&nonce={nonce}&signature={sign2}&taskId={taskid}'
    response = requests.get(url=url, headers=headers).json()
    # print(response)
    if response['code'] == 0:
        print(f"{task_name}获得{response['data']['infos'][0]['num']}阳光")

    else:
        print(response['message'])


def get_sunshine():
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/daily/pickup?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    print('开始收取阳光任务')
    if response['code'] == 0:
        print(f'获得{response["data"]}阳光')
    else:
        print(response['message'])


def start_challenge(challenge):
    print('开始进行挑战任务')
    print(f"目前可挑战次数为{challenge}")
    for i in range(challenge):
        nonce = get_nonce()
        timestamp, nonce, sign2 = get_signature(nonce)
        url = f'https://api.xiaoyisz.com/qiehuang/ga/challenge/start?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
        response = requests.get(url=url, headers=headers).json()
        if response['code'] == 0:
            print(f'获得挑战代码成功代码为:{response["data"]}')
            report_up_challenge(response["data"])
            # return response["data"]
        else:
            print(response['message'])
        time.sleep(5)


def report_up_challenge(data1):
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/challenge/report?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    body = {"battleId": data1, "result": 1, "costMillisecond": random.randint(90000, 99999)}
    # print(body)
    body = json.dumps(body).encode(encoding='utf-8')
    response = requests.post(url=url, headers=headers, data=body).json()
    # print(response)
    if response['code'] == 0:
        print(f'挑战成功获得{response["data"]["infos"][0]["num"]}阳光')
    else:
        print(response['message'])


def start_adventure():
    print('开始进行冒险任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/adventure/start?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    print(response)
    if response['code'] == 0:
        print('开始冒险成功,需要8小时')
        # return adventureId


def Inquire_adventure():
    print('开始查询冒险任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'http://api.xiaoyisz.com/qiehuang/ga/user/adventure/info?timestamp={timestamp}&nonce={nonce}&signature={sign2}&userId=-1&type=1'
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        adventureId = response["data"]["adventureId"]
        print('查询冒险id成功')
        print(adventureId)
        return adventureId


def Inquire_help_adventure():
    print('开始查询冒险任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/adventure/info?timestamp={timestamp}&nonce={nonce}&signature={sign2}&userId=-1&type=2'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['code'] == 0:
        adventureId = response["data"]["adventureId"]
        print('查询冒险id成功')
        print(adventureId)
        return adventureId


def receive_adventure(adventureId):
    print('开始完成冒险任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'http://api.xiaoyisz.com/qiehuang/ga/user/adventure/drawPrize?adventureId={adventureId}&timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['code'] == 0:
        num = response['data']['gaGiftPackageVo']['infos'][0]['num']
        print(f'此次冒险获得{num}阳光')
    else:
        print(response['message'])


def help_adventure(help):
    print('开始伙伴助力任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/adventure/help?adventureId={help}&timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    print(url)
    response = requests.get(url=url, headers=headers).json()
    pprint.pprint(response)
    if response['code'] == 0:
        print(f"{response['data'][0]['nickName']}助力成功")


def get_plant_info():
    print('开始查询植物状态')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'http://api.xiaoyisz.com/qiehuang/ga/plant/info?timestamp={timestamp}&nonce={nonce}&signature={sign2}&userId=-1'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['data']['stage'] == -1:
        plant()
    else:
        percent = response['data']['currentSunshineNum'] / response['data']['needSunshineNum']
        # print(percent)
        stage = response['data']['stage']
        plantld = response['data']['plantId']
        print(f"目前植物状态为{stage}级,当前进度为{percent * 100}")
        return plantld


def plant():
    print('开始种植植物')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/plant/start?timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['data']['stage'] == 0:
        print('植物种植成功')


def give_sunshine(plantid):
    print('开始洒阳光任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'http://api.xiaoyisz.com/qiehuang/ga/plant/batchgiveSunshine?plantId={plantid}&timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['code'] == 0:
        currentSunshineNum = response['data']['currentSunshineNum']
        needSunshineNum = response['data']['needSunshineNum']
        if currentSunshineNum == needSunshineNum and response['data']['stage'] != 3:
            updata(plantid)
            give_sunshine(plantid)
        elif currentSunshineNum != needSunshineNum:
            time.sleep(3)
            give_sunshine(plantid)

    else:
        if response['message'] == '已达到收获阶段':
            print(f"{response['message']},开始收获番茄")
            harvest(plantid)
            time.sleep(2)
            give_sunshine(plantid)
        elif response['message'] == '阳光不足':
            print('阳光不足退出洒阳光')
            return


def harvest(plantid):
    print('开始收获番茄任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/plant/harvest?plantId={plantid}&timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['code'] == 0:
        print(f'获得{response["data"]["infos"][0]["num"]}番茄')


def updata(plantid):
    print('升级番茄任务')
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/plant/upgrade?plantId={plantid}&timestamp={timestamp}&nonce={nonce}&signature={sign2}'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['code'] == 0:
        print(f'目前植物升为{response["data"]["stage"]}级')


def friend():
    print('开始查看朋友列表')
    friend_list = []
    nonce = get_nonce()
    timestamp, nonce, sign2 = get_signature(nonce)
    url = f'https://api.xiaoyisz.com/qiehuang/ga/user/friend/list?timestamp={timestamp}&nonce={nonce}&signature={sign2}&page=1&size=50'
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['code'] == 0:
        for i in response['data']["content"]:
            userId = i["userId"]
            name = i["nickName"]
            print(userId, name)
            friend_list.append([userId, name])
    return friend_list


def steal_friend(friend_list):
    print('开始偷取朋友阳光')
    for i in friend_list:
        # print(i)
        nonce = get_nonce()
        timestamp, nonce, sign2 = get_signature(nonce)
        url = f'https://api.xiaoyisz.com/qiehuang/ga/user/daily/steal?timestamp={timestamp}&nonce={nonce}&signature={sign2}&friendUserId={i[0]}'
        response = requests.get(url=url, headers=headers).json()
        # pprint.pprint(response)
        if response['code'] == 0:
            num = response["data"]
            print(f'偷取{i[1]}{num}阳光')
        else:
            print(response['message'])
        time.sleep(5)


def help_friend(plantid_list):
    print('开始帮助朋友')
    # print(plantid_list)
    for plantid in plantid_list:
        nonce = get_nonce()
        timestamp, nonce, sign2 = get_signature(nonce)
        url = f'https://api.xiaoyisz.com/qiehuang/ga/plant/giveSunshine?timestamp={timestamp}&nonce={nonce}&signature={sign2}&plantId={plantid}'
        # print(url)
        response = requests.get(url=url, headers=headers).json()
        # pprint.pprint(response)
        if response['code'] == 0:
            if response['data']== 0:
                print("帮助朋友成功")
        else:
            print(response['message'])
        time.sleep(5)


def help_friend_info(friend_list):
    # print('开始查询朋友植物状态')
    plant_list = []
    for i in friend_list:
        nonce = get_nonce()
        timestamp, nonce, sign2 = get_signature(nonce)
        url = f'https://api.xiaoyisz.com/qiehuang/ga/plant/info?timestamp={timestamp}&nonce={nonce}&signature={sign2}&userId={i[0]}'
        # print(url)
        response = requests.get(url=url, headers=headers).json()
        # pprint.pprint(response)
        if response["code"] == 0:
            friend_plantld = response['data']['plantId']
            # print(friend_plantld)
            plant_list.append(friend_plantld)
        time.sleep(2)
    print(plant_list)
    return plant_list


if __name__ == '__main__':
    cks = os.environ['tybody']
    cks = cks.split('@')
    help = []
    for ck in range(len(cks)):
        ck1 = json.loads(cks[ck])
        start_time = datetime.datetime.now().strftime('%H')
        ua = random.choice(User_Agents)
        authorization = login(ua, ck1)

        headers1 = {
            'authorization': authorization,
        }
        headers.update(headers1)
        gaNum = get_info()
        if start_time == '08':
            adventureId = Inquire_adventure()
            receive_adventure(adventureId)
            get_tasklist()
            get_sunshine()
            friend_list = friend()
            if ck == 0:
                steal_friend(friend_list)
            plantid_list = help_friend_info(friend_list)
            help_friend(plantid_list)
            start_challenge(gaNum)
            plantid = get_plant_info()
            give_sunshine(plantid)
            get_info()
        elif start_time == '24' or start_time == '16':
            adventureId = Inquire_adventure()
            receive_adventure(adventureId)
        elif start_time == '9' or start_time == '17' or start_time == '01':
            start_adventure()
        print('\n\n')
