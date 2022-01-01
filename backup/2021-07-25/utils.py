#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from .. import chat_id, jdbot, logger, _JdbotDir, _ConfigDir, TOKEN
from ..bot.utils import V4, QL, mycron, press_event, _Auth, qlcron, upcron, backfile, myck, _ConfigFile
import json, asyncio, requests


with open(f"{_ConfigDir}/diybotset.json", 'r', encoding='utf-8') as f:
    diybotset = json.load(f)
my_chat_id = int(diybotset['my_chat_id'])

def myids(values, test_id):
    if "," in values:
        Ids = values.replace(" ", "").split(",")
        Ids = list(map(int, ['%s' %int(_) for _ in Ids]))
    else:
        Ids = [int(values)]
    Ids.append(int(test_id))
    return Ids

myzdjr_chatIds = myids(diybotset['myzdjr_chatId'], my_chat_id)

myjoinTeam_chatIds = myids(diybotset['myjoinTeam_chatId'], my_chat_id)

bot_id = int(TOKEN.split(':')[0])


def checkCookie1():
    expired = []
    cookies = myck(_ConfigFile)
    for cookie in cookies:
        cknum = cookies.index(cookie) + 1
        if checkCookie2(cookie):
            expired.append(cknum)
    return expired, cookies


def checkCookie2(cookie):
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


# user.py调用
def getbean(i, cookie, url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Cookie": cookie,
    }
    result, o = '', '\n\t\t└'
    try:
        r = requests.get(url=url, headers=headers)
        res = r.json()
        if res['code'] == '0':
            followDesc = res['result']['followDesc']
            if followDesc.find('成功') != -1:
                try:
                    for n in range(len(res['result']['alreadyReceivedGifts'])):
                        redWord = res['result']['alreadyReceivedGifts'][n]['redWord']
                        rearWord = res['result']['alreadyReceivedGifts'][n]['rearWord']
                        result += f"{o}领取成功，获得{redWord}{rearWord}"
                except:
                    giftsToast = res['result']['giftsToast'].split(' \n ')[1]
                    result = f"{o}{giftsToast}"
            elif followDesc.find('已经') != -1:
                result = f"{o}{followDesc}"
        else:
            result = f"{o}Cookie 可能已经过期"
    except Exception as e:
        if str(e).find('(char 0)') != -1:
            result = f"{o}访问发生错误：无法解析数据包"
        else:
            result = f"{o}访问发生错误：{e}"
    return f"\n京东账号{i}{result}\n"


# 修改原作者的 cronup() 函数便于我继续进行此功能的编写
async def mycronup(jdbot, conv, resp, filename, msg, SENDER, markup, path):
    try:
        cron = mycron(resp)
        msg = await jdbot.edit_message(msg, f"这是我识别的定时\n```{cron}```\n请问是否需要修改？", buttons=markup)
    except:
        msg = await jdbot.edit_message(msg, f"我无法识别定时，将使用默认定时\n```0 0 * * *```\n请问是否需要修改？", buttons=markup)
    convdata3 = await conv.wait_event(press_event(SENDER))
    res3 = bytes.decode(convdata3.data)
    if res3 == 'confirm':
        await jdbot.delete_messages(chat_id, msg)
        msg = await conv.send_message("请回复你需要设置的 cron 表达式，例如：0 0 * * *")
        cron = await conv.get_response()
        cron = cron.raw_text
        msg = await jdbot.edit_message(msg, f"好的，你将使用这个定时\n```{cron}```")
        await asyncio.sleep(1.5)
    await jdbot.delete_messages(chat_id, msg)
    if QL:
        crondata = {"name": f'{filename.split(".")[0]}', "command": f'task {path}/{filename}', "schedule": f'{cron}'}
        with open(_Auth, 'r', encoding='utf-8') as f:
            auth = json.load(f)
        qlcron('add', crondata, auth['token'])
    else:
        upcron(f'{cron} mtask {path}/{filename}')
    await jdbot.send_message(chat_id, '添加定时任务成功')


# 升级 user.py 的函数
async def upuser(fname, msg):
    try:
        furl_startswith = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/"
        speeds = ["http://ghproxy.com/", "https://mirror.ghproxy.com/", ""]
        msg = await jdbot.edit_message(msg, "开始下载文件")
        for speed in speeds:
            resp = requests.get(f"{speed}{furl_startswith}{fname}").text
            if "#!/usr/bin/env python3" in resp:
                break
        if resp:
            msg = await jdbot.edit_message(msg, f"下载{fname}成功")
            path = f"{_JdbotDir}/diy/user.py"
            backfile(path)
            with open(path, 'w+', encoding='utf-8') as f:
                f.write(resp)
        else:
            await jdbot.edit_message(msg, f"下载{fname}失败，请自行拉取文件进/jbot/diy目录")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


# addrepo.py 调用
def myqladdrepo(name, command, schedule):
    with open(_Auth, 'r', encoding='utf-8') as f:
        Auto = json.load(f)
    url = 'http://127.0.0.1:5600/url/crons'
    headers = {
        "Authorization": f"Bearer {Auto['token']}"
    }
    body = {
        'name': name,
        'command': command,
        'schedule': schedule
    }
    res = requests.post(url, data=body, headers=headers).json
    return res
