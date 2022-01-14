import os
import sys
from asyncio import sleep

from telethon import events

from .login import user
from .. import jdbot, chat_id, logger


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r"^/check$"))
async def check(event):
    try:
        if user.is_connected():
            await event.reply("`user成功连接Telegram服务器！`")
            await sleep(5)
            await event.delete()
        else:
            await event.reply("`user无法连接Telegram服务器！`")
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")
