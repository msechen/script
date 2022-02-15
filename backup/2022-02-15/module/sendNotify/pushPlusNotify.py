import requests, os, json


def pushPlusNotify(token, content, topic):
    url = 'http://www.pushplus.plus/send'
    if topic != '':
        body = {
            "token": token,
            "title": "京东脚本通知",
            "content": content,
            "template": "txt",
            "topic": topic,
            "channel": "wechat"
        }
    else:
        body = {
            "token": token,
            "title": "京东脚本通知",
            "content": content,
            "template": "txt",
            "channel": "wechat"
        }
    headers = {
        "Content-Type": "application/json"
    }
    try:
        r = requests.post(url, data=json.dumps(body), headers=headers)
        if r.ok and r.json()['code'] == 200:
            print(f'push+发送{topic}通知消息完成。')
        else:
            print(f"push+发送{topic}通知消息失败：\n{r.json()['msg']}")
    except Exception as e:
        print(e)


# 开始执行主程序
if __name__ == '__main__':
    path_list = os.path.realpath(__file__).split('/')[1:]
    env = '/' + '/'.join(path_list[:-2])
    if not os.path.isfile(env + '/config/bot.json'): # 容器执行
        env = '/jd'
    token = ''
    content = ''
    topic = ''
    pushPlusNotify(token, content, topic)
