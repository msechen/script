#!/usr/bin/env python
# -*- coding: utf-8 -*-


from .. import chat_id, jdbot, _JdbotDir, logger, chname, mybot
from telethon import events
import asyncio, sys, os


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/aff$'))
async def myaff(event):
    try:
        img_file = f"{_JdbotDir}/diy/aff.jpg"
        msg = await jdbot.send_message(chat_id, '感谢您的赞助', file=img_file)
        for i in range(60):
            msg = await jdbot.edit_message(msg, f'感谢您的赞助，消息自毁倒计时 {60 - i} 秒')
            await asyncio.sleep(1)
        await jdbot.delete_messages(chat_id, msg)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


if chname:
    jdbot.add_event_handler(myaff, events.NewMessage(from_users=chat_id, pattern=mybot['命令别名']['cron']))