#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from .. import chat_id, jdbot, logger, TOKEN, _JdbotDir, _ConfigDir, chname, mybot
from telethon import events
import os


bot_id = int(TOKEN.split(':')[0])


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
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


if chname:
    jdbot.add_event_handler(getcookiefile, events.NewMessage(from_users=chat_id, pattern=mybot['命令别名']['cron']))