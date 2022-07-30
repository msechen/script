import json
import os
import time
import requests
import re

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
            print(f'{name}目前金额为{(int(money)-int(i[0]))/ 100}提现金额不足,取消提现')
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


# 得到谜语信息
def get_riddles_data(userid):
    url = f"https://miniapi.tianwensk.com/miniapp/user/idiom/getInfo?{userid}"
    response = requests.get(url=url, headers=headers).json()
    # pprint.pprint(response)
    if response['state'] == 1:
        game_time = response['content']['data']['time']
        name = response['content']['data']['nickName']
        print(f"开始账号{name}答题一共{game_time}次答题机会".center(20, "*"))
        if game_time != 0:
            for time1 in range(game_time):
                print(f"开始第{time1 + 1}次答题".center(16, "*"))
                for i in response['content']['data']['idiomList']:
                    # 获取成语
                    idiom = i['idiom'].split("*")
                    # 获取成语选择字
                    answerList = i['answerList']
                    # 获取成语id
                    idiomid = i['idiomId']
                    if len(idiom[0]) > len(idiom[1]):
                        search_word(idiom[0], answerList, idiomid, game_time,name,userid)
                        # print(idiom[0])
                    else:
                        search_word(idiom[1], answerList, idiomid, game_time,name,userid)
                        # print("123", idiom[1])
        else:
            print(f'答题次数为{game_time},次数不足,退出答题'.center(20, "*"))



# 网站搜索
def search_word(word1, answerList, idiomid, game_time,name,userid):
    url = f'https://chengyu.hwcha.com/search?q={word1}&zs=2'
    headers = {
        'cookie': 'advanced-idiom=mi95cs1ik068cbtppqfft81gq3; _csrf_idiom=b49d611e8e55ef2f04c0ffea53ac7fba2ecd39e72112b8ab80ea4aa071384c3ea%3A2%3A%7Bi%3A0%3Bs%3A11%3A%22_csrf_idiom%22%3Bi%3A1%3Bs%3A32%3A%22YFiobHWwq7MGH-OeAX-URXGMXZp9yoiL%22%3B%7D; Hm_lvt_e17420dc9ace6b6242f823403a7baa9f=1656896656; __gads=ID=94cd7b9a35744b79-2220f491fcd400a9:T=1656896654:RT=1656896654:S=ALNI_MYIe4uqFmzH724VjPtPQrxmghsDwQ; __gpi=UID=00000755570f8ae1:T=1656896654:RT=1656896654:S=ALNI_MZ28eVMqt3eS0eXgFRRRurojXZCmg; __51uvsct__1vbNmb15WI2i2vQe=1; __51vcke__1vbNmb15WI2i2vQe=21968cd8-75c7-532e-bfd4-54666ba4df87; __51vuft__1vbNmb15WI2i2vQe=1656896656721; Hm_lpvt_e17420dc9ace6b6242f823403a7baa9f=1656896671; __vtins__1vbNmb15WI2i2vQe=%7B%22sid%22%3A%20%223a88f4a7-637f-59ee-89e2-1dc1b94c1f47%22%2C%20%22vd%22%3A%202%2C%20%22stt%22%3A%2014362%2C%20%22dr%22%3A%2014362%2C%20%22expires%22%3A%201656898471074%2C%20%22ct%22%3A%201656896671074%7D',
        'referer': 'https://chengyu.hwcha.com/search?q=%E6%97%A0%E5%89%8D&zs=2',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36 Edg/103.0.1264.44',

    }
    response = requests.get(url, headers=headers).text
    word = re.findall('<strong>(.*?)</strong></a> <span class="text-muted text-sm"', response)

    for answer in answerList:
        for i in word:
            # print(i)
            if answer in i and word1 in i:
                answer_part(idiomid, answer,userid)
        time.sleep(5)


# 提交答案
def answer_part(idiomid, answer,userId):
    url = f'https://miniapi.tianwensk.com/miniapp/user/idiom/save?{userId}&idiomId={int(idiomid)}&answer={answer}'
    response = requests.post(url=url, headers=headers).json()
    if response['state'] == 1:
        print(f"{response['message']}获得{int(response['content']['data']['awardAmount']) / 100}元钱")


if __name__ == '__main__':
    ck = os.environ['ttlcookiepy']
    ck = ck.split('@')
    push_token = os.environ['push_token']
    for cks in ck:
        ck1 = cks.split('&')
        print(f"开始答题环节".center(20, "*"))
        get_riddles_data(ck1[0])
        print(f"开始尝试提现".center(20, "*"))
        get_money_data(ck1[0], cks, push_token)
        print('\n')
        time.sleep(5)

