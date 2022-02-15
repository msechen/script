import os, requests, json

def BarkNotify():
    url = f'https://api.day.app/{BARK_PUSH}/{title}/{content}'
    body = {
        "sound": sound
    }
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    try:
        r = requests.get(url, params=body, headers=headers, proxies={ "http": None, "https": None})
        if r.ok:
            res = r.json()
            if res['code'] == 200:
                print(f'Bark APP发送通知消息成功🎉')
            else:
                print(res)
        else:
            print("'Bark APP发送通知调用API失败！！")
    except Exception as e:
        print(e)


if __name__ == '__main__':
    path_list = os.path.realpath(__file__).split('/')[1:]
    env = '/' + '/'.join(path_list[:-2]) # 容器外路径
    if os.path.isfile('/ql/config/cookie.sh') or os.path.isfile(f'{env}/config/cookie.sh'): # 青龙
        isv4 = False
        if not os.path.isfile(f'{env}/config/cookie.sh'): # 青龙容器内
            env = '/ql'
    else: # v4-bot
        isv4 = True
        if not os.path.isfile(f'{env}/config/config.sh'): # v4-bot 容器内
            env = '/jd'
    BARK_PUSH = ""
    title = "我是一个标题！"
    content = "我是一个内容！"
    sound = "telegraph"
    BarkNotify()
