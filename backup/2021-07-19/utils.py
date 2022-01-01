#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-20
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, logger, _JdbotDir
from ..bot.utils import V4, QL, mycron, press_event, _Auth, qlcron, upcron, backfile
import json, asyncio, requests


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
def  myqladdrepo(name, command, schedule):
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
