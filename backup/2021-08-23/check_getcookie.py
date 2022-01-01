#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from .. import chat_id, jdbot, logger, _JdbotDir, _ConfigDir, chname, mybot
from telethon import events
import os, sys


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/getcookie$'))
async def getcookiefile(event):
    try:
        fname = "getcookie.py"
        doit = True
        if os.path.exists(f'{_JdbotDir}/bot/{fname}') or os.path.exists(f'{_JdbotDir}/diy/{fname}'):
            doit = False
        if doit:
            msg = f'请找到一份 {fname} 文件并发送给机器人，选择存储在 {_ConfigDir} 目录中，随后执行以下命令\n/cmd mv {_ConfigDir}/{fname} {_JdbotDir}/diy'
            await jdbot.send_message(chat_id, msg)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


if chname:
    jdbot.add_event_handler(getcookiefile, events.NewMessage(from_users=chat_id, pattern=mybot['命令别名']['cron']))