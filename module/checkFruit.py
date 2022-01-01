import os, requests, re, json


def readCookies():
    """
    读取 Cookie
    """
    if isv4:
        config = f'{env}/config/config.sh'
    else:
        config = f'{env}/config/cookie.sh' # 青龙
    with open(config, 'r', encoding='utf-8') as f:
        config = ''.join(f.readlines())
    cookies = re.findall(r"pt_key=.*;pt_pin=.*;", config)
    illegal_cookie = 'pt_key=xxxxxxxxxx;pt_pin=xxxx;'
    if illegal_cookie in cookies:
        m = cookies.index(illegal_cookie)
        del(cookies[m])
    return cookies


def checkCookie(cookie):
    url = "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion"
    headers = {
        "Host": "me-api.jd.com",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "User-Agent": "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
    }
    try:
        r = requests.get(url, headers=headers).json()
        if r['retcode'] == '1001':
            return True
        else:
            return False
    except:
        return False


def checkFruit(i, cookie):
    url = f"https://api.m.jd.com/client.action?functionId=initForFarm"
    body = {
        "body": {"version":4},
        "appid": "wh5",
        "clientVersion": "9.1.0"
    }
    headers = {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "cookie": cookie,
        "origin": "https://home.m.jd.com",
        "pragma": "no-cache",
        "referer": "https://home.m.jd.com/myJd/newhome.action",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "User-Agent": "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    try:
        data = requests.post(url, data=body, headers=headers).json()
        if data['treeState'] == 2 or data['treeState'] == 3:
            res = f"京东账号{i}\n【提醒⏰】{data['farmUserPro']['name']}已可领取\n请去京东APP或微信小程序查看\n"
        elif data['treeState'] == 0:
            res = f"京东账号{i}\n【提醒⏰】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果\n"
        else:
            res = ''
    except:
        res = ''
    finally:
        return res


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
    cookies = readCookies()
    info = "京东农场\n\n"
    for cookie in cookies:
        i = cookies.index(cookie) + 1
        info += checkFruit(i, cookie)
    if info != "京东农场\n\n":
        token = ''
        topic = ''
        pushPlusNotify(token, info, topic)
