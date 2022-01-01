#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from asyncio import exceptions

import os
import requests
import sys
from telethon import events, Button

from .. import chat_id, jdbot, logger, JD_DIR, BOT_DIR, ch_name, BOT_SET
from ..bot.utils import press_event, split_list, row


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/upbot$'))
async def myupbot(event):
    try:
        msg = await jdbot.send_message(chat_id, "【diy正式版】\n\n准备更新程序")
        SENDER = event.sender_id
        furl = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/shell/diybot.sh"
        if '下载代理' in BOT_SET.keys() and str(BOT_SET['下载代理']).lower() != 'false' and 'github' in furl:
            furl = f'{str(BOT_SET["下载代理"])}/{furl}'
        resp = requests.get(furl).text
        if not resp:
            await jdbot.edit_message(msg, "【diy正式版】\n\n下载shell文件失败\n请稍后重试，或尝试关闭代理重启")
            return
        cmdtext = f"bash {JD_DIR}/diybot.sh"
        if os.path.exists(f'{BOT_DIR}/diy/user.py'):
            btns = [
                Button.inline("更新", data="user"),
                Button.inline("不更新", data="no")
            ]
            async with jdbot.conversation(SENDER, timeout=60) as conv:
                msg = await jdbot.edit_message(msg, "【diy机器人】\n\n下载shell文件成功\n是否更新 user.py？（覆盖式更新）", buttons=split_list(btns, row))
                convdata = await conv.wait_event(press_event(SENDER))
                res = bytes.decode(convdata.data)
                if res == "user":
                    cmdtext = f"bash {JD_DIR}/diybot.sh {res}"
                conv.cancel()
        fpath = f"{JD_DIR}/diybot.sh"
        with open(fpath, 'w+', encoding='utf-8') as f:
            f.write(resp)
        await jdbot.edit_message(msg, "更新过程中程序会重启，请耐心等待")
        os.system(cmdtext)
    except exceptions.TimeoutError:
        await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


if ch_name:
    jdbot.add_event_handler(myupbot, events.NewMessage(from_users=chat_id, pattern=BOT_SET['命令别名']['cron']))