#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import os
import sys
import time

from telethon import events

from .login import user
from .. import chat_id, jdbot, logger, TOKEN, LOG_DIR
from ..diy.utils import listenerIds

bot_id = int(TOKEN.split(":")[0])
client = user


@client.on(events.NewMessage(chats=listenerIds, pattern=r'[^_-].*'))
async def listener(event):
    try:
        user_id = event.sender_id
        group = event.chat.title
        username = str(event.sender.username if event.sender.username else "未设置")
        first_name = str(event.sender.first_name if event.sender.first_name else "")
        last_name = str(event.sender.last_name if event.sender.last_name else "")
        name = first_name + last_name
        message = "; ".join(event.message.text.split("\n"))
        now = time.strftime("%H:%M:%S", time.localtime())
        today = time.strftime("%m-%d", time.localtime())
        log = f"[{now}] 用户ID:[{user_id}] 用户名:[{username}] 昵称:[{name}] 消息:{message}\n"
        try:
            with open(f"{LOG_DIR}/listener/{group}-{today}.log", "a", encoding="utf-8") as f:
                f.write(log)
        except FileNotFoundError:
            os.system(f"mkdir {LOG_DIR}/listener")
            with open(f"{LOG_DIR}/listener/{group}-{today}.log", "a", encoding="utf-8") as f:
                f.write(log)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")
        