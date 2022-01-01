#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-20
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, logger, _JdbotDir
from telethon import events
import os


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/list$'))
async def mylist(event):
    try:
        lists = []
        mydiy = {
            "checkcookie.py": "检查账号过期",
            "upbot.py": "升级机器人",
            "download.py": "下载文件",
            "addrepo.py": "添加仓库",
            "addexport.py": "添加环境变量",
            "editexport.py": "修改环境变量",
            "user.py": "user.py"
        }
        dirs = os.listdir(f"{_JdbotDir}/diy")
        for dir in dirs:
            if dir in mydiy:
                lists.append(mydiy[f'{dir}'])
        lists = '\n'.join(lists)
        await jdbot.send_message(chat_id, f"目前你拓展的功能有：\n\n{lists}")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))
