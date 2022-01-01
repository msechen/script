#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import os
import sys

from telethon import events

from .. import chat_id, jdbot, logger, BOT_DIR, CONFIG_DIR, ch_name, BOT_SET


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/getcookie$'))
async def getcookiefile(event):
    try:
        fname = "getcookie.py"
        doit = True
        if os.path.exists(f'{BOT_DIR}/bot/{fname}') or os.path.exists(f'{BOT_DIR}/diy/{fname}'):
            doit = False
        if doit:
            msg = f'请找到一份 {fname} 文件并发送给机器人，选择存储在 {CONFIG_DIR} 目录中，随后执行以下命令\n/cmd mv {CONFIG_DIR}/{fname} {BOT_DIR}/diy'
            await jdbot.send_message(chat_id, msg)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


if ch_name:
    jdbot.add_event_handler(getcookiefile, events.NewMessage(from_users=chat_id, pattern=BOT_SET['命令别名']['cron']))